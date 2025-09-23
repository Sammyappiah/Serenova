"use client";

import { useSearchParams } from "next/navigation";
import { FaApple, FaGoogle, FaCreditCard } from "react-icons/fa";

export default function ConfirmationPage() {
  const search = useSearchParams();

  const roomId = search.get("roomId");
  const checkIn = search.get("checkIn");
  const checkOut = search.get("checkOut");
  const guests = search.get("guests");
  const total = search.get("total");
  const method = search.get("method");

  function getBadgeStyle(type: string) {
    switch (type.toLowerCase()) {
      case "apple_pay":
        return {
          color: "bg-black text-white",
          icon: <FaApple className="inline mr-1" />,
          label: "Apple Pay",
        };
      case "google_pay":
        return {
          color: "bg-green-600 text-white",
          icon: <FaGoogle className="inline mr-1" />,
          label: "Google Pay",
        };
      case "card":
      default:
        return {
          color: "bg-blue-600 text-white",
          icon: <FaCreditCard className="inline mr-1" />,
          label: "Card",
        };
    }
  }

  const badge = method ? getBadgeStyle(method) : null;

  return (
    <section className="section text-center">
      <div className="container max-w-lg mx-auto">
        <h1 className="section-title">Booking Confirmed</h1>
        <p className="mb-6">Your stay at Serenova is confirmed. We look forward to welcoming you!</p>

        <div className="space-y-2 text-left bg-white shadow-soft p-6 rounded-xl">
          <p><strong>Room:</strong> {roomId?.toUpperCase()}</p>
          <p><strong>Guests:</strong> {guests}</p>
          <p><strong>Check-in:</strong> {checkIn}</p>
          <p><strong>Check-out:</strong> {checkOut}</p>
          <p><strong>Total:</strong> €{total}</p>

          {badge && (
            <p>
              <strong>Payment Method:</strong>{" "}
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium inline-flex items-center ${badge.color}`}
              >
                {badge.icon} {badge.label}
              </span>
            </p>
          )}
        </div>

        <a href="/" className="btn btn-primary mt-6 inline-block">Back to Home</a>
      </div>
    </section>
  );
}
