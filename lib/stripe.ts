// lib/stripe.ts
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("❌ Missing STRIPE_SECRET_KEY in environment variables");
}

// ✅ No apiVersion specified → uses your Stripe account’s default
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
