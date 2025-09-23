import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { roomId, checkIn, checkOut, guests, total } = body;
    if (!roomId || !checkIn || !checkOut || !guests || !total) {
      return NextResponse.json({ error: "Missing booking data" }, { status: 400 });
    }
    const origin = req.headers.get("origin") ?? "http://localhost:3000";
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `Serenova Booking — ${String(roomId).toUpperCase()}`,
              description: `Guests: ${guests}, Check-in: ${checkIn}, Check-out: ${checkOut}`,
            },
            unit_amount: Math.round(Number(total) * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/confirmation?roomId=${encodeURIComponent(roomId)}&checkIn=${encodeURIComponent(checkIn)}&checkOut=${encodeURIComponent(checkOut)}&guests=${encodeURIComponent(guests)}&total=${encodeURIComponent(total)}`,
      cancel_url: `${origin}/booking/${encodeURIComponent(roomId)}?canceled=true`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
