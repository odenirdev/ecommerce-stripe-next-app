import Link from "next/link";
import { PlusCircle, Star } from "@phosphor-icons/react/dist/ssr";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import Rate from "../molecules/Rate";
import Image from "next/image";

export type ProductCardProps = {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  star: number;
};

export default function ProductCard(props: ProductCardProps) {
  const { id, name, imageUrl, price, star } = props;

  const { addToCart } = useContext(CartContext);

  function handleAddToCart() {
    addToCart({ id, name, imageUrl, price });
  }

  return (
    <div className="rounded-lg bg-card p-4 shadow-md">
      <Image
        src={imageUrl}
        width={300}
        height={300}
        className="mb-4 aspect-square w-full rounded-lg bg-cover"
        alt=""
      />
      <h3 className="mb-2 text-lg font-semibold">{name}</h3>
      <div className="flex items-center gap-2 mb-2">
        <Rate value={star} />
        <span className="text-[0.75rem] text-muted-foreground">
          {star.toFixed(1)}/5
        </span>
      </div>

      <p className="mb-2 text-muted-foreground">{price}</p>

      {/* <p className="mb-2 text-muted-foreground">
        <span className="line-through">R$99.99</span>{" "}
        <span className="text-red-500 font-bold">R$79.99</span> (20% off)
      </p> */}
      <button
        className="w-full inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary-foreground focus:ring-offset-2"
        onClick={handleAddToCart}
      >
        <PlusCircle className="w-4 h-4 mr-1" />
        Eu quero
      </button>
    </div>
  );
}
