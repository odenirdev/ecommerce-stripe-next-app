import { CartContext } from "@/contexts/CartContext";
import { Minus, Plus, X } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useContext } from "react";

export type CheckoutProductCardProps = {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  count: number;
};

export default function CheckoutProductCard(props: CheckoutProductCardProps) {
  const { id, name, imageUrl, price } = props;

  const { addToCart, removeFromCart, decrementCount } = useContext(CartContext);

  const handleIncrement = () => {
    addToCart({ id, name, imageUrl, price });
  };

  const handleDecrement = () => {
    decrementCount(id);
  };

  return (
    <div className="grid grid-cols-[100px_1fr_auto] items-center gap-4">
      <Image
        src={imageUrl}
        width="100"
        height="100"
        className="rounded-lg object-cover"
        style={{
          aspectRatio: "100 / 100",
          objectFit: "cover",
        }}
		alt=""
      />
      <div className="grid gap-1">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-muted-foreground">{price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
          onClick={handleDecrement}
          disabled={props.count === 1}
        >
          <Minus />
        </button>
        <span className="text-base font-medium">{props.count}</span>
        <button
          onClick={handleIncrement}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
        >
          <Plus />
        </button>
        <button
          onClick={() => removeFromCart(id)}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
        >
          <X />
        </button>
      </div>
    </div>
  );
}
