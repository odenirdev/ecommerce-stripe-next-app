import Link from "next/link";
import { PlusCircle, Star } from "@phosphor-icons/react/dist/ssr";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import Rate from "../molecules/Rate";
import Image from "next/image";
import Button from "../atoms/Button";
import Typography from "../atoms/Typography";

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
      <Typography variant="h3" className="mb-2 text-lg font-semibold">
        {name}
      </Typography>
      <div className="flex items-center gap-2 mb-2">
        <Rate value={star} />
        <Typography as="span" className="text-[0.75rem] text-muted-foreground">
          {star.toFixed(1)}/5
        </Typography>
      </div>

      <p className="mb-2 text-muted-foreground">{price}</p>

      {/* <p className="mb-2 text-muted-foreground">
        <span className="line-through">R$99.99</span>{" "}
        <span className="text-red-500 font-bold">R$79.99</span> (20% off)
      </p> */}
      <Button onClick={handleAddToCart} className="w-full">
        <PlusCircle className="w-4 h-4 mr-1" />
        Eu quero
      </Button>
    </div>
  );
}
