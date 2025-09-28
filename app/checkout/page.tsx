"use client";

import { Elements, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useRouter } from "next/navigation";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_12345");

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // NOTE: This demo just navigates to confirmation.
    // Integrate real PaymentIntent/Checkout Session on your server for production.
    setTimeout(() => {
      setLoading(false);
      router.push("/confirmation");
    }, 800);
  };

  return (
    <form onSubmit={submit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Full Name</label>
        <input
          required
          type="text"
          className="w-full rounded-xl border border-black/10 px-4 py-3 bg-white"
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          required
          type="email"
          className="w-full rounded-xl border border-black/10 px-4 py-3 bg-white"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Phone (International)</label>
        <input
          required
          type="tel"
          inputMode="tel"
          pattern="^[0-9+() -]{7,}$"
          className="w-full rounded-xl border border-black/10 px-4 py-3 bg-white"
          placeholder="+44 7700 900123"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p className="text-xs text-neutral-500 mt-1">
          Include country code, e.g. +44, +33, +1.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Card</label>
        <div className="rounded-xl border border-black/10 px-3 py-3 bg-white">
          <CardElement options={{ hidePostalCode: false }} />
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || !elements || loading}
        className="btn-primary w-full"
      >
        {loading ? "Processing…" : "Confirm & Pay"}
      </button>

      <p className="text-xs text-neutral-500">
        Test-only UI. Replace with real server payment flow before going live.
      </p>
    </form>
  );
}

export default function CheckoutPage() {
  return (
    <main className="px-6 md:px-20 py-16">
      <div className="max-w-xl mx-auto">
        <h1 className="font-serif text-4xl mb-6 text-sereno-green">Checkout</h1>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </main>
  );
}
