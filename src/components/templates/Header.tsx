"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  CaretDown,
  MagnifyingGlass,
  ShoppingCart,
} from "@phosphor-icons/react/dist/ssr";

import Link from "next/link";
import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const cartItemsCount = cartItems
    .map((item) => item.count)
    .reduce((a, b) => a + b, 0);

  return (
    <header className="bg-background border-b shadow-sm">
      <div className="wrapper flex flex-col md:flex-row items-center gap-8 py-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-1" prefetch={false}>
            <span className="font-bold text-xl md:text-3xl tracking-tight">
              Cosméticos&Co
            </span>
          </Link>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="text-[0.75rem] md:text-sm  flex gap-1 items-center">
              Produtos <CaretDown />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white shadow-md rounded p-2">
              <DropdownMenu.Item className="p-2 hover:bg-gray-100">
                Item 1
              </DropdownMenu.Item>
              <DropdownMenu.Item className="p-2 hover:bg-gray-100">
                Item 2
              </DropdownMenu.Item>
              <DropdownMenu.Item className="p-2 hover:bg-gray-100">
                Item 3
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>

        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1">
            <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="O que está buscando hoje?"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-muted focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            {cartItemsCount > 0 && (
              <span className="bg-primary text-white text-[0.625rem] font-medium px-1.5 py-0.5 rounded-full absolute -top-2 -right-2 ">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>
        {/* <DropdownMenu>
		<DropdownMenuTrigger asChild>
		  <Button variant="ghost" size="icon" className="rounded-full">
			<Avatar>
			  <AvatarImage src="/placeholder-user.jpg" />
			  <AvatarFallback>JD</AvatarFallback>
			</Avatar>
			<span className="sr-only">User Menu</span>
		  </Button>
		</DropdownMenuTrigger>
		<DropdownMenuContent align="end">
		  <DropdownMenuLabel>My Account</DropdownMenuLabel>
		  <DropdownMenuSeparator />
		  <DropdownMenuItem>Profile</DropdownMenuItem>
		  <DropdownMenuItem>Settings</DropdownMenuItem>
		  <DropdownMenuItem>Logout</DropdownMenuItem>
		</DropdownMenuContent>
	  </DropdownMenu> */}
      </div>
    </header>
  );
}
