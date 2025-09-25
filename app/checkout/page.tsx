"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "@/components/PaymentForm";
import { useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function CheckoutPage({ searchParams }: { searchParams: any }) {
  const { room, dates, guests, total } = searchParams;
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-serif mb-10 text-center">Checkout</h1>

      {/* Booking Summary */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
        <p><strong>Room:</strong> {room || "Not specified"}</p>
        <p><strong>Dates:</strong> {dates || "Not specified"}</p>
        <p><strong>Guests:</strong> {guests || "Not specified"}</p>
        <p className="text-lg font-bold mt-2">Total: €{total || 0}</p>
      </div>

      {/* Guest Details Form */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Guest Details</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-700"
          />
          <input
            type="email"
            placeholder="Email"
            value={guestEmail}
            onChange={(e) => setGuestEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-700"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={guestPhone}
            onChange={(e) => setGuestPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-700"
          />
          <textarea
            placeholder="Special Requests"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-700"
            rows={3}
          />
        </form>
      </div>

      {/* Payment Section */}
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Payment</h2>
        <Elements stripe={stripePromise}>
          <PaymentForm total={Number(total) || 0} />
        </Elements>
      </div>
    </div>
  );
}
