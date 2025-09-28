"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import { motion } from "framer-motion";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export default function CheckoutPage() {
  const [phone, setPhone] = useState("");

  return (
    <main className="bg-cream text-deep-forest px-6 md:px-20 py-16">
      <h1 className="font-serif text-4xl mb-8 text-sereno-green">Checkout</h1>
      <p className="text-neutral-700 mb-10 max-w-2xl">
        Secure your reservation. Your details are encrypted and handled via Stripe.
      </p>

      <Elements stripe={stripePromise}>
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl space-y-6 bg-white p-6 rounded-2xl shadow-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              required
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sereno-green"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sereno-green"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone (International)</label>
            <input
              type="tel"
              placeholder="+44 20 7123 4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sereno-green"
            />
            <p className="text-xs text-neutral-500 mt-1">
              Include country code (e.g. +44, +1, +40).
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Card Details</label>
            <div className="rounded-xl border border-neutral-300 px-4 py-3">
              <CardElement options={{ hidePostalCode: true }} />
            </div>
          </div>

          <button className="w-full mt-4 rounded-xl bg-sereno-green text-white py-3 hover:bg-[#24523d] transition">
            Pay & Confirm
          </button>
        </motion.form>
      </Elements>
    </main>
  );
}
