import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  CaretDown,
  MagnifyingGlass,
  ShoppingCart,
  UserCircle,
} from "@phosphor-icons/react/dist/ssr";

import Link from "next/link";
import { CartContext } from "@/contexts/CartContext";
import { useCallback, useContext } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import Input from "../atoms/Input";
import Typography from "../atoms/Typography";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const { cartItems } = useContext(CartContext);
  const cartItemsCount = cartItems
    .map((item) => item.count)
    .reduce((a, b) => a + b, 0);

  const handleSearchBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    router.push(pathname + "?" + createQueryString("q", value));
  };

  const handleCategory = (category: string) => {
    router.push(pathname + "?" + createQueryString("category", category));
  };

  const removeCategory = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("category");

    router.push(pathname + "?" + params.toString());
  };

  return (
    <header className="bg-background border-b shadow-sm">
      <div className="wrapper flex flex-col md:flex-row items-center gap-8 py-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-1" prefetch={false}>
            <Typography variant="h1">Cosméticos&Co</Typography>
          </Link>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="text-[0.75rem] md:text-sm flex gap-1 items-center">
              Produtos <CaretDown />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white shadow-md rounded p-2 z-[9999]">
              <DropdownMenu.Item
                className="p-2 hover:bg-gray-100"
                onClick={removeCategory}
              >
                Todos
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className="p-2 hover:bg-gray-100"
                onClick={() => handleCategory("feminine")}
              >
                Feminino
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className="p-2 hover:bg-gray-100"
                onClick={() => handleCategory("masculine")}
              >
                Masculino
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>

        <div className="flex items-center gap-4 flex-1">
          <Input
            type="search"
            placeholder="O que está buscando hoje?"
            className="w-full"
            onBlur={handleSearchBlur}
          />

          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <Typography
                  as="span"
                  className="bg-primary text-white text-[0.625rem] font-medium px-1.5 py-0.5 rounded-full absolute -top-2 -right-2 "
                >
                  {cartItemsCount}
                </Typography>
              )}
            </Link>

            <Link href="#">
              <UserCircle className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
