"use client";
import { useEffect, useMemo, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useElements, useStripe, PaymentRequestButtonElement } from "@stripe/react-stripe-js";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function InnerCheckout(){
  const stripe = useStripe();
  const elements = useElements();
  const sp = useSearchParams();

  const amount = Number(sp.get("amount") || "0");
  const currency = (sp.get("currency") || "eur").toLowerCase();
  const roomName = sp.get("roomName") || "Room";
  const checkIn = sp.get("checkIn") || "";
  const checkOut = sp.get("checkOut") || "";
  const guests = sp.get("guests") || "1";
  const nights = sp.get("nights") || "1";

  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [prReady, setPrReady] = useState(false);
  const [paymentRequest, setPaymentRequest] = useState<stripe.PaymentRequest | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount, currency,
          metadata:{ roomName, checkIn, checkOut, guests, nights }
        })
      });
      const data = await res.json();
      setClientSecret(data.clientSecret ?? null);
    })();
  }, [amount, currency, roomName, checkIn, checkOut, guests, nights]);

  // Apple Pay / Google Pay (Payment Request Button)
  useEffect(() => {
    (async () => {
      if (!stripe) return;
      const pr = stripe.paymentRequest({
        country: "RO",
        currency,
        total: { label: roomName, amount: Math.round(amount * 100) },
        requestPayerName: true,
        requestPayerEmail: true,
      });
      const can = await pr.canMakePayment();
      if (can) { setPaymentRequest(pr); setPrReady(true); }
    })();
  }, [stripe, amount, currency, roomName]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const { error } = await stripe.confirmPayment({ elements, confirmParams: { return_url: `${window.location.origin}/confirmation` } });
    if (error) alert(error.message);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
      <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="glass rounded-3xl p-6">
        <div className="flex items-center justify-between">
          <h1 className="h-serif text-2xl">Checkout</h1>
          <div className="text-sm text-gray-700">{roomName}</div>
        </div>
        <div className="text-sm text-gray-600 mt-1">{checkIn} → {checkOut} · {guests} guest(s) · {nights} night(s)</div>
        <div className="font-semibold text-lg mt-2">Total: €{amount.toFixed(2)}</div>
      </motion.div>

      {prReady && paymentRequest && (
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="card p-6">
          <PaymentRequestButtonElement options={{ paymentRequest }} />
          <div className="text-xs text-gray-500 mt-2">Or pay with card below</div>
        </motion.div>
      )}

      {clientSecret && (
        <motion.form initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} onSubmit={onSubmit} className="card p-6 space-y-4">
          <PaymentElement />
          <button className="btn-primary w-full">Pay now</button>
        </motion.form>
      )}
    </div>
  );
}

export default function CheckoutPage(){
  const options = useMemo(() => ({
    appearance: { theme:"flat" as const, labels:"floating" as const },
    loader: "auto" as const,
  }), []);
  return (
    <Elements stripe={stripePromise} options={{ ...options }}>
      <InnerCheckout />
    </Elements>
  );
}
