import { CartContext } from "@/contexts/CartContext";
import { Minus, Plus, X } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useContext } from "react";
import Button from "../atoms/Button";
import Typography from "../atoms/Typography";

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
    <div className="grid grid-cols-1 lg:grid-cols-[100px_1fr_auto] items-center gap-4">
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
      <div className="space-y-1">
        <Typography variant="h3" className="font-semibold">
          {name}
        </Typography>
        <Typography className="text-muted-foreground">{price}</Typography>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button
          variant="secondary"
          onClick={handleDecrement}
          disabled={props.count === 1}
        >
          <Minus />
        </Button>
        <Typography as="span" className="text-base font-medium">
          {props.count}
        </Typography>
        <Button variant="secondary" onClick={handleIncrement}>
          <Plus />
        </Button>
        <Button variant="secondary" onClick={() => removeFromCart(id)}>
          <X />
        </Button>
      </div>
    </div>
  );
}
