"use client";

import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function PaymentForm({ total }: { total: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setErrorMessage("");

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/confirmation`,
      },
    });

    if (error) {
      setErrorMessage(error.message || "Payment failed");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 border rounded-lg shadow-lg bg-white"
    >
      <h2 className="text-xl font-semibold mb-4">
        Payment — €{total.toFixed(2)}
      </h2>

      {/* Stripe Payment Element */}
      <PaymentElement
        options={{
          layout: "tabs", // Tabs layout includes Card, Apple Pay, Google Pay
        }}
      />

      {errorMessage && (
        <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full rounded-xl py-3 font-semibold transition ${
          loading
            ? "bg-gray-400 text-white"
            : "bg-[#2E6B4F] text-white hover:bg-[#24523c]"
        }`}
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>
    </form>
  );
}
