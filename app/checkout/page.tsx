"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function CheckoutForm() {
  const search = useSearchParams();
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const roomId = search.get("roomId");
  const guests = search.get("guests");
  const checkIn = search.get("checkIn");
  const checkOut = search.get("checkOut");
  const total = search.get("total");

  const [paymentRequest, setPaymentRequest] = useState<stripe.paymentRequest.PaymentRequest | null>(null);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: "RO",
        currency: "eur",
        total: { label: "Serenova Booking", amount: Number(total) * 100 },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      pr.canMakePayment().then((result) => {
        if (result) setPaymentRequest(pr);
      });
    }
  }, [stripe, total]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: { phone },
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      router.push(
        `/confirmation?roomId=${roomId}&guests=${guests}&checkIn=${checkIn}&checkOut=${checkOut}&total=${total}&method=card`
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-soft p-6 rounded-xl">
      <h1 className="section-title">Checkout</h1>
      <p><strong>Room:</strong> {roomId?.toUpperCase()}</p>
      <p><strong>Guests:</strong> {guests}</p>
      <p><strong>Check-in:</strong> {checkIn}</p>
      <p><strong>Check-out:</strong> {checkOut}</p>
      <p><strong>Total:</strong> €{total}</p>

      <PhoneInput
        placeholder="Enter phone number"
        value={phone}
        onChange={setPhone}
        defaultCountry="RO"
        className="input w-full"
      />

      {/* Apple Pay / Google Pay */}
      {paymentRequest && (
        <div className="my-4">
          <PaymentRequestButtonElement options={{ paymentRequest }} />
        </div>
      )}

      {/* Card payment fallback */}
      <CardElement className="p-3 border rounded-md" />

      <button type="submit" disabled={!stripe || loading} className="btn btn-primary w-full mt-4">
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>
    </form>
  );
}

export default function CheckoutPage() {
  return (
    <Elements stripe={stripePromise}>
      <section className="section">
        <div className="container max-w-lg mx-auto">
          <CheckoutForm />
        </div>
      </section>
    </Elements>
  );
}
