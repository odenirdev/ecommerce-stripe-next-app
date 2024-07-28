import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export type CheckoutDTO = {
  products: {
    id: string;
    count: number;
  }[];
};

type StripeProduct = Stripe.Response<Stripe.Product> & {
  quantity: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const dto = req.body as CheckoutDTO;
  for (const product of dto.products) {
    if (!product.id) {
      return res.status(400).json({ error: "id is required" });
    }
    if (!(typeof product.id === "string")) {
      return res.status(400).json({ error: "id must be a string" });
    }

    if (!product.count) {
      return res.status(400).json({ error: "count is required" });
    }
    if (!(typeof product.count === "number")) {
      return res.status(400).json({ error: "count must be a number" });
    }
  }

  const stripeProducts: (Stripe.Response<Stripe.Product> & {
    quantity: number;
  })[] = [];
  for (const product of dto.products) {
    const stripeProduct = (await stripe.products.retrieve(
      product.id
    )) as StripeProduct;
    if (!stripeProduct) {
      return res.status(400).json({ error: `Product ${product.id} not found` });
    }

    stripeProduct.quantity = product.count;

    stripeProducts.push(stripeProduct);
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: stripeProducts.map((product) => ({
      price: product.default_price as string,
      quantity: product.quantity,
    })),
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  return res.status(201).json(checkoutSession);
}
