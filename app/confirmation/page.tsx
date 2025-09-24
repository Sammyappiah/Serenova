"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ConfirmationContent() {
  const search = useSearchParams();
  const room = search.get("roomId");
  const checkIn = search.get("checkIn");
  const checkOut = search.get("checkOut");
  const guests = search.get("guests");
  const total = search.get("total");

  return (
    <section className="section">
      <div className="container text-center">
        <h1 className="text-3xl font-bold mb-4">Booking Confirmed</h1>
        <p className="mb-6">Your stay at Serenova is confirmed. We look forward to welcoming you!</p>

        <div className="bg-white shadow-lg rounded-lg p-6 inline-block text-left">
          <p><strong>Room:</strong> {room?.toUpperCase()}</p>
          <p><strong>Guests:</strong> {guests}</p>
          <p><strong>Check-in:</strong> {checkIn}</p>
          <p><strong>Check-out:</strong> {checkOut}</p>
          <p><strong>Total:</strong> €{total}</p>
        </div>

        <a href="/" className="btn btn-primary mt-6 inline-block">
          Back to Home
        </a>
      </div>
    </section>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<p>Loading confirmation...</p>}>
      <ConfirmationContent />
    </Suspense>
  );
}
