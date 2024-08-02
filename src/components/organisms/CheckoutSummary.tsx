import { CartContext } from "@/contexts/CartContext";
import useApi from "@/hooks/useApi";
import { useContext } from "react";
import Button from "../atoms/Button";
import Typography from "../atoms/Typography";
import Input from "../atoms/Input";

export default function CheckoutSummary() {
  const { cartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce((total, item) => {
    const price = Number(
      item.price.replace("R$", "").replaceAll(".", "").replace(",", ".")
    );

    return total + price * item.count;
  }, 0);

  const total = subtotal;

  const { checkout } = useApi();

  const handleCheckout = async () => {
    try {
      const result = await checkout({
        products: cartItems.map((item) => ({
          id: item.id,
          count: item.count,
        })),
      });

      window.location.href = result.url;
    } catch (error) {
      alert("Ocorreu um erro ao realizar o checkout");
    }
  };

  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <Typography variant="h3">Sumário</Typography>
      </div>
      <div className="p-6 grid gap-4">
        <div className="flex justify-between">
          <Typography>Subtotal</Typography>
          <Typography>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(subtotal)}
          </Typography>
        </div>
        <div className="flex justify-between">
          <Typography>Frete</Typography>
          <Typography>Gratuito</Typography>
        </div>

        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full"
        ></div>
        <div className="flex justify-between items-center">
          <Typography className="font-semibold">Total</Typography>
          <Typography className="text-2xl font-bold">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total)}
          </Typography>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Input placeholder="Cupom promocional" type="text" value="" />
            <Button variant="secondary"> Aplicar</Button>
          </div>
        </div>

        <Button onClick={handleCheckout}>Finalizar compra</Button>
      </div>
    </div>
  );
}
