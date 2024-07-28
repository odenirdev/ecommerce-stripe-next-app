import { CartContext } from "@/contexts/CartContext";
import useApi from "@/hooks/useApi";
import { useContext } from "react";

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
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
          Sumário
        </h3>
      </div>
      <div className="p-6 grid gap-4">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(subtotal)}
          </p>
        </div>
        <div className="flex justify-between">
          <p>Frete</p>
          <p>Gratuito</p>
        </div>

        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full"
        ></div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Total</p>
          <p className="text-2xl font-bold">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total)}
          </p>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Cupom promocional"
              type="text"
              value=""
            />
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Aplicar
            </button>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
