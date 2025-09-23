import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const { amountEUR, roomId, checkIn, checkOut, guests } = await req.json();

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "Missing STRIPE_SECRET_KEY" }, { status: 500 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });

    const amountCents = Math.max(50, Math.round(Number(amountEUR) * 100)); // min €0.50
    const currency = process.env.BOOKING_CURRENCY || "eur";

    const intent = await stripe.paymentIntents.create({
      amount: amountCents,
      currency,
      automatic_payment_methods: { enabled: true },
      metadata: { roomId, checkIn, checkOut, guests: String(guests) }
    });

    return NextResponse.json({ clientSecret: intent.client_secret });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Payment error" }, { status: 500 });
  }
}
