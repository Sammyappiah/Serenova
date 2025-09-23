import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const { amountEUR } = await req.json();

    if (!amountEUR) {
      return NextResponse.json({ error: "Missing amount" }, { status: 400 });
    }

    const amountCents = Math.max(50, Math.round(Number(amountEUR) * 100)); // min €0.50
    const currency = process.env.BOOKING_CURRENCY || "eur";

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountCents,
      currency,
      automatic_payment_methods: { enabled: true }, // ✅ Apple/Google Pay included
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
