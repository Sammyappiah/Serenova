import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const { clientSecret } = await req.json();

    if (!clientSecret) {
      return NextResponse.json({ error: "Missing clientSecret" }, { status: 400 });
    }

    const paymentIntentId = clientSecret.split("_secret")[0];
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    return NextResponse.json({ status: paymentIntent.status });
  } catch (err: any) {
    console.error("Stripe confirmation error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
