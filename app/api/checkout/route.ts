// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY in environment");
}

// Use account default API version (avoid type pinning issues)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const { amountEUR } = await req.json();

    const amountCents = Math.max(50, Math.round(Number(amountEUR) * 100)); // min €0.50
    if (!Number.isFinite(amountCents) || amountCents <= 0) {
      return NextResponse.json({ error: "Invalid amount." }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountCents,
      currency: "eur",
      automatic_payment_methods: { enabled: true }, // enables Apple Pay / Google Pay if available
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: any) {
    console.error("Stripe error:", err);
    return NextResponse.json(
      { error: err?.message ?? "Payment error" },
      { status: 500 }
    );
  }
}
