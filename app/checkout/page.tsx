"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage({ searchParams }: { searchParams: any }) {
  const { roomId, checkIn, checkOut, guests, total } = searchParams;

  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    async function createPaymentIntent() {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total }),
      });
      const data = await res.json();
      setClientSecret(data.clientSecret);
    }

    if (total) createPaymentIntent();
  }, [total]);

  return (
    <section className="section">
      <div className="container max-w-lg">
        <h1 className="section-title mb-6">Checkout</h1>

        <div className="mb-6 space-y-1">
          <p><strong>Room:</strong> {roomId?.toUpperCase()}</p>
          <p><strong>Guests:</strong> {guests}</p>
          <p><strong>Check-in:</strong> {checkIn}</p>
          <p><strong>Check-out:</strong> {checkOut}</p>
          <p><strong>Total:</strong> €{total}</p>
        </div>

        {clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </section>
  );
}
