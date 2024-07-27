import Link from "next/link";
import Slider, { Settings as SlickSettings } from "react-slick";
import { PlusCircle, Star } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  const settings: SlickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // prevArrow: <></>,
  };

  return (
    <div>
      <section className="relative overflow-hidden">
        <Slider {...settings}>
          <div>
            <img
              src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwd9983e44/Categorias/Dia%20dos%20Pais%202024/banner-animado-presentes-economia-desk.gif"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwd9983e44/Categorias/Dia%20dos%20Pais%202024/banner-animado-presentes-economia-desk.gif"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://production.na01.natura.com/on/demandware.static/-/Sites-NatBrazil-Library/default/dwd9983e44/Categorias/Dia%20dos%20Pais%202024/banner-animado-presentes-economia-desk.gif"
              alt=""
            />
          </div>
        </Slider>
      </section>

      <section className="py-12 md:py-18">
        <div className="wrapper">
          <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
            descubra as fragrâncias que combinam com você
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="rounded-lg bg-card p-4 shadow-md">
              <img
                src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwcba3eaa8/NATBRA-159809_1.jpg"
                alt="Featured Product 1"
                width={300}
                height={300}
                className="mb-4 aspect-square max-w-full rounded-lg bg-cover"
              />
              <h3 className="mb-2 text-lg font-semibold">
                Presente Natura Essencial Para Barbear
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <Star weight="fill" className="w-4 h-4 fill-primary" />
                <Star weight="fill" className="w-4 h-4 fill-primary" />
                <Star weight="fill" className="w-4 h-4 fill-primary" />
                <Star
                  weight="fill"
                  className="w-4 h-4 fill-muted stroke-muted-foreground"
                />
                <Star
                  weight="fill"
                  className="w-4 h-4 fill-muted stroke-muted-foreground"
                />
                <span className="text-[0.75rem] text-muted-foreground">
                  3.7/5
                </span>
              </div>
              <p className="mb-2 text-muted-foreground">
                <span className="line-through">R$99.99</span>{" "}
                <span className="text-red-500 font-bold">R$79.99</span> (20%
                off)
              </p>
              <Link
                href="#"
                className="w-full inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary-foreground focus:ring-offset-2"
                prefetch={false}
              >
                <PlusCircle className="w-4 h-4 mr-1" />
                Adicionar no Carrinho
              </Link>
            </div>

            <div className="rounded-lg bg-card p-4 shadow-md">
              <img
                src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwcba3eaa8/NATBRA-159809_1.jpg"
                alt="Featured Product 1"
                width={300}
                height={300}
                className="mb-4 aspect-square max-w-full rounded-lg object-cover"
              />
              <h3 className="mb-2 text-lg font-semibold">
                Presente Natura Essencial Para Barbear
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <Star weight="fill" className="w-4 h-4 fill-primary" />
                <Star weight="fill" className="w-4 h-4 fill-primary" />
                <Star weight="fill" className="w-4 h-4 fill-primary" />
                <Star
                  weight="fill"
                  className="w-4 h-4 fill-muted stroke-muted-foreground"
                />
                <Star
                  weight="fill"
                  className="w-4 h-4 fill-muted stroke-muted-foreground"
                />
                <span className="text-[0.75rem] text-muted-foreground">
                  3.7/5
                </span>
              </div>
              <p className="mb-2 text-muted-foreground">
                <span className="line-through">R$99.99</span>{" "}
                <span className="text-red-500 font-bold">R$79.99</span> (20%
                off)
              </p>
              <Link
                href="#"
                className="w-full inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary-foreground focus:ring-offset-2"
                prefetch={false}
              >
                <PlusCircle className="w-4 h-4 mr-1" />
                Adicionar no Carrinho
              </Link>
            </div>

            <div className="rounded-lg bg-card p-4 shadow-md">
              <img
                src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwcba3eaa8/NATBRA-159809_1.jpg"
                alt="Featured Product 1"
                width={300}
                height={300}
                className="mb-4 aspect-square max-w-full rounded-lg object-cover"
              />
              <h3 className="mb-2 text-lg font-semibold">
                Presente Natura Essencial Para Barbear
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <Star weight="fill" className="w-4 h-4 fill-primary" />
                <Star weight="fill" className="w-4 h-4 fill-primary" />
                <Star weight="fill" className="w-4 h-4 fill-primary" />
                <Star
                  weight="fill"
                  className="w-4 h-4 fill-muted stroke-muted-foreground"
                />
                <Star
                  weight="fill"
                  className="w-4 h-4 fill-muted stroke-muted-foreground"
                />
                <span className="text-[0.75rem] text-muted-foreground">
                  3.7/5
                </span>
              </div>
              <p className="mb-2 text-muted-foreground">
                <span className="line-through">R$99.99</span>{" "}
                <span className="text-red-500 font-bold">R$79.99</span> (20%
                off)
              </p>
              <Link
                href="#"
                className=" w-full inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary-foreground focus:ring-offset-2"
                prefetch={false}
              >
                <PlusCircle className="w-4 h-4 mr-1" />
                Adicionar no Carrinho
              </Link>
            </div>
          </div>

          <div className="flex justify-center py-8">
            <button className="mx-auto inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2">
              Carregar outros
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
