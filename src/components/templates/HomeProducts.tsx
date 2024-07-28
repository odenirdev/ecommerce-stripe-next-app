import { HomeProps } from "@/pages";
import ProductCard from "../organisms/ProductCard";

export default function HomeProducts(props: HomeProps) {
  return (
    <section className="py-12 md:py-18">
      <div className="wrapper">
        <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
          descubra as fragrâncias que combinam com você
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {props.products.map((product) => (
            <ProductCard
              {...{
                key: product.id,
                id: product.id,
                name: product.name,
                imageUrl: product.imageUrl,
                price: product.price,
              }}
            />
          ))}
        </div>

        <div className="flex justify-center py-8">
          <button className="mx-auto inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2">
            Carregar outros
          </button>
        </div>
      </div>
    </section>
  );
}
