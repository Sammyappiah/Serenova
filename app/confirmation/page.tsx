// app/confirmation/page.tsx
"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function formatEUR(n: number) {
  if (!Number.isFinite(n)) return "€0";
  return new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(n);
}

function ConfirmationInner() {
  const params = useSearchParams();
  const roomId = params.get("roomId");
  const guests = params.get("guests");
  const checkIn = params.get("checkIn");
  const checkOut = params.get("checkOut");
  const total = Number(params.get("total") ?? "0");
  const name = params.get("name");

  return (
    <section className="section">
      <div className="container max-w-2xl">
        <div className="rounded-2xl bg-white p-8 text-center shadow-[0_10px_30px_rgba(15,25,21,0.06)] animate-fadeUp">
          <h1 className="font-serif text-3xl mb-3">Booking Confirmed</h1>
          <p className="text-neutral-700 mb-6">
            {name ? `${name}, y` : "Y"}our stay at Serenova is confirmed. We look forward to
            welcoming you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <p><strong>Room:</strong> {roomId ? roomId.toUpperCase() : "—"}</p>
            <p><strong>Guests:</strong> {guests ?? "—"}</p>
            <p><strong>Check-in:</strong> {checkIn ?? "—"}</p>
            <p><strong>Check-out:</strong> {checkOut ?? "—"}</p>
            <p className="md:col-span-2"><strong>Total:</strong> {formatEUR(total)}</p>
          </div>

          <a href="/" className="btn btn-primary mt-6 inline-block">
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="container py-10">Loading…</div>}>
      <ConfirmationInner />
    </Suspense>
  );
}
