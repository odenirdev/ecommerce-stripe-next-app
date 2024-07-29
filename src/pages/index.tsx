import Home, { HomeProps } from "@/components/pages/Home";
import { stripe } from "@/lib/stripe";
import { GetServerSideProps } from "next";
import Stripe from "stripe";

export default function HomePage(props: HomeProps) {
  return <Home {...props} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const take = parseInt(context.query.take as string) || 4;

  const response = await stripe.products.list({
    limit: take,
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format((price.unit_amount as number) / 100),
      star: product.metadata.star ? parseFloat(product.metadata.star) : 0,
    };
  });

  return {
    props: { products },
  };
};
