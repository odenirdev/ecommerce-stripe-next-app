import Stripe from "stripe";

export const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
  appInfo: {
    name: "Cosméticos&Co",
  },
});
