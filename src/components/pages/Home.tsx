import { usePathname, useSearchParams } from "next/navigation";
import ProductCard from "../organisms/ProductCard";
import Hero from "../templates/Hero";
import { useRouter } from "next/router";
import Button from "../atoms/Button";
import Typography from "../atoms/Typography";

export interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    star: number;
  }[];
}

export default function Home(props: HomeProps) {
  const TAKE_NUMBER = 4;

  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const pathname = usePathname();

  const handleNext = () => {
    const currentParams = new URLSearchParams(window.location.search);
    const take = parseInt(currentParams.get("take") || `${TAKE_NUMBER}`);
    currentParams.set("take", (take + TAKE_NUMBER).toString());

    router.push(pathname + "?" + currentParams.toString(), undefined, {
      scroll: false,
    });
  };

  return (
    <div>
      <Hero />

      <section className="py-12 md:py-18">
        <div className="wrapper space-y-4">
          <Typography variant="h2">
            descubra as fragrâncias que combinam com você
          </Typography>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {props.products
              .filter((product) => {
                if (!query) return true;

                return product.name.toLowerCase().includes(query.toLowerCase());
              })
              .map((product) => (
                <li key={product.id}>
                  <ProductCard
                    {...{
                      id: product.id,
                      name: product.name,
                      imageUrl: product.imageUrl,
                      price: product.price,
                      star: product.star,
                    }}
                  />
                </li>
              ))}
          </ul>

          <div className="flex justify-center py-8">
            <Button onClick={handleNext} variant="secondary">
              Carregar outros
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
