"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type Status = "loading" | "succeeded" | "processing" | "requires_payment_method" | "unknown";

function formatDate(d?: string | null) {
  if (!d) return "";
  try {
    const dt = new Date(d);
    return dt.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return d ?? "";
  }
}

export default function ConfirmationPage() {
  const sp = useSearchParams();

  const roomId = sp.get("roomId") ?? "";
  const checkIn = sp.get("checkIn");
  const checkOut = sp.get("checkOut");
  const guests = sp.get("guests") ?? "1";
  const total = sp.get("total") ?? "";
  const clientSecret = sp.get("payment_intent_client_secret"); // present after Stripe redirect

  const [status, setStatus] = useState<Status>("loading");

  // Pretty room name (ALL CAPS per your style)
  const roomName = useMemo(
    () => (roomId ? roomId.toUpperCase() : "ROOM"),
    [roomId]
  );

  // Fetch live payment status from our API if we have a client secret
  useEffect(() => {
    let ignore = false;
    async function run() {
      if (!clientSecret) {
        // If no client secret (e.g., dev/manual nav), show summary anyway
        setStatus("unknown");
        return;
      }
      try {
        const res = await fetch("/api/confirm-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ clientSecret }),
        });
        const data = await res.json();
        if (!ignore) setStatus((data.status as Status) || "unknown");
      } catch {
        if (!ignore) setStatus("unknown");
      }
    }
    run();
    return () => {
      ignore = true;
    };
  }, [clientSecret]);

  const badge = (() => {
    if (status === "succeeded")
      return <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-green-700 text-sm">✓ Payment Successful</span>;
    if (status === "processing")
      return <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-amber-700 text-sm">⏳ Processing</span>;
    if (status === "requires_payment_method")
      return <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-red-700 text-sm">⚠ Payment Failed</span>;
    if (status === "loading")
      return <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-neutral-700 text-sm">… Checking</span>;
    return <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-neutral-700 text-sm">Status Unknown</span>;
  })();

  return (
    <section className="section">
      <div className="container max-w-2xl">
        {/* Header */}
        <div className="mb-8 animate-fadeUp">
          <h1 className="font-serif text-4xl md:text-5xl text-deep-forest tracking-tight">
            Booking Confirmed
          </h1>
          <div className="mt-3">{badge}</div>
        </div>

        {/* Summary Card */}
        <div className="rounded-2xl bg-cream p-6 shadow-soft border border-neutral-200 animate-fadeUp">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-wide text-neutral-500">Room</div>
              <div className="mt-1 font-medium">{roomName}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-neutral-500">Guests</div>
              <div className="mt-1 font-medium">{guests}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-neutral-500">Check-in</div>
              <div className="mt-1 font-medium">{formatDate(checkIn)}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-neutral-500">Check-out</div>
              <div className="mt-1 font-medium">{formatDate(checkOut)}</div>
            </div>
            <div className="sm:col-span-2">
              <div className="text-xs uppercase tracking-wide text-neutral-500">Total</div>
              <div className="mt-1 font-serif text-2xl">€{total || "—"}</div>
            </div>
          </div>

          {/* Polite note */}
          <p className="mt-6 text-neutral-600">
            A confirmation email has been sent with your booking details. If you have any special requests, reply to the email and our team will be glad to assist.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row animate-fadeUp">
          <a href="/" className="btn btn-primary sm:w-auto w-full text-center">Back to Home</a>
          <a href="/booking" className="btn btn-ghost sm:w-auto w-full text-center">View Another Booking</a>
        </div>
      </div>
    </section>
  );
}
