import CheckoutProductCard from "@/components/organisms/CheckoutProductCard";
import CheckoutSummary from "@/components/organisms/CheckoutSummary";
import { CartContext } from "@/contexts/CartContext";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useContext } from "react";
import Typography from "../atoms/Typography";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <section className="py-12 md:py-18">
      <div className="wrapper space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="text-sm flex gap-1 items-center text-zinc-500  hover:text-zinc-900"
            >
              Inicio <CaretRight />
            </Link>

            <Typography as="span" className="text-sm">
              Carrinho
            </Typography>
          </div>

          <Typography variant="h1">Seu carrinho</Typography>
        </div>

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
