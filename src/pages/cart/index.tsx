import CheckoutProductCard from "@/components/organisms/CheckoutProductCard";
import CheckoutSummary from "@/components/organisms/CheckoutSummary";
import { CartContext } from "@/contexts/CartContext";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useContext } from "react";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <section className="py-12 md:py-18">
      <div className="wrapper">
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="text-sm flex gap-1 items-center text-zinc-500  hover:text-zinc-900"
          >
            Inicio <CaretRight />
          </Link>

          <span className="text-sm">Carrinho</span>
        </div>

        <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
          Seu carrinho
        </h2>

        <div className="grid md:grid-cols-[1fr_360px] gap-8">
          <div className="flex flex-col gap-8">
            {cartItems.map((product) => (
              <CheckoutProductCard key={product.id} {...product} />
            ))}
          </div>

          <CheckoutSummary />
        </div>
      </div>
    </section>
  );
}
