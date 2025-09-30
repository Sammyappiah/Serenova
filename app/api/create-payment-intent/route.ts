import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-06-20" });

export async function POST(req: Request) {
  try {
    const { amount, currency, metadata } = await req.json();
    if (!amount || !currency) return NextResponse.json({ error: "Missing amount/currency" }, { status: 400 });

    const ai = await stripe.paymentIntents.create({
      amount: typeof amount === "number" && amount < 10000 ? Math.round(amount * 100) : amount,
      currency,
      automatic_payment_methods: { enabled: true },
      metadata
    });
    return NextResponse.json({ clientSecret: ai.client_secret });
  } catch (e:any) {
    return NextResponse.json({ error: e.message ?? "Server error" }, { status: 500 });
  }
}
