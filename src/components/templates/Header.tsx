import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  CaretDown,
  MagnifyingGlass,
  ShoppingCart,
} from "@phosphor-icons/react/dist/ssr";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background border-b shadow-sm">
      <div className="wrapper flex items-center gap-8 py-6">
        <Link href="/" className="flex items-center gap-1" prefetch={false}>
          <span className="font-bold text-3xl tracking-tight">
            Cosméticos&Co
          </span>
        </Link>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="text-sm flex gap-1 items-center">
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

        <div className="relative flex-1">
          <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="O que está buscando hoje?"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-muted focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <Link href="/cart">
          <ShoppingCart className="w-6 h-6" />
          <span className="sr-only">Cart</span>
        </Link>
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
