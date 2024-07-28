import { useSearchParams } from "next/navigation";
import ProductCard from "../organisms/ProductCard";
import Hero from "../templates/Hero";
import { useRouter } from "next/router";

export interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home(props: HomeProps) {
  const TAKE_NUMBER = 4;

  const router = useRouter();

  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const handleNext = () => {
    const take = parseInt(searchParams.get("take") || `${TAKE_NUMBER}`);

    router.push(`/?take=${take + TAKE_NUMBER}`);
  };

  return (
    <div>
      <Hero />

      <section className="py-12 md:py-18">
        <div className="wrapper">
          <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
            descubra as fragrâncias que combinam com você
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {props.products
              .filter((product) => {
                if (!query) return true;

                return product.name.toLowerCase().includes(query.toLowerCase());
              })
              .map((product) => (
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
            <button
              onClick={handleNext}
              className="mx-auto inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2"
            >
              Carregar outros
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
