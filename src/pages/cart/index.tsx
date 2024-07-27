import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Cart() {
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
            <div className="grid grid-cols-[100px_1fr_auto] items-center gap-4">
              <img
                src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwcba3eaa8/NATBRA-159809_1.jpg"
                alt="Cozy Blanket"
                width="100"
                height="100"
                className="rounded-lg object-cover"
                style={{
                  aspectRatio: "100 / 100",
                  objectFit: "cover",
                }}
              />
              <div className="grid gap-1">
                <h3 className="font-semibold">
                  Presente Natura Essencial Para Barbear
                </h3>
                <p className="text-muted-foreground">R$29.99</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                  disabled
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </button>
                <span className="text-base font-medium">1</span>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-[100px_1fr_auto] items-center gap-4">
              <img
                src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwcba3eaa8/NATBRA-159809_1.jpg"
                alt="Cozy Blanket"
                width="100"
                height="100"
                className="rounded-lg object-cover"
                style={{
                  aspectRatio: "100 / 100",
                  objectFit: "cover",
                }}
              />
              <div className="grid gap-1">
                <h3 className="font-semibold">
                  Presente Natura Essencial Para Barbear
                </h3>
                <p className="text-muted-foreground">R$29.99</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                  disabled
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </button>
                <span className="text-base font-medium">1</span>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

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
                <p>R$72.96</p>
              </div>
              <div className="flex justify-between">
                <p>Frete</p>
                <p>R$0.00</p>
              </div>

              <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-border h-[1px] w-full"
              ></div>
              <div className="flex justify-between items-center">
                <p className="font-semibold">Total</p>
                <p className="text-2xl font-bold">R$72.96</p>
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

              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
                Finalizar compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
