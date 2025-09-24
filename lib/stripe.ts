// lib/stripe.ts
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("❌ Missing STRIPE_SECRET_KEY in environment variables");
}

// ✅ Use your account’s default Stripe API version (no type errors)
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: null,
});
