"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const rooms = [
  { id: "accessible", name: "Accessible Suite", price: 70, maxGuests: 2, image: "/images/accessible.jpg" },
  { id: "deluxe", name: "Deluxe Room", price: 70, maxGuests: 3, image: "/images/deluxe.jpg" },
  { id: "family", name: "Family Room", price: 85, maxGuests: 5, image: "/images/family.jpg" },
];

function nightsBetween(start: string, end: string) {
  const s = new Date(start);
  const e = new Date(end);
  const diff = e.getTime() - s.getTime();
  return diff > 0 ? diff / (1000 * 60 * 60 * 24) : 0;
}

export default function RoomPage({ params }: { params: { roomId: string } }) {
  const router = useRouter();
  const room = rooms.find((r) => r.id === params.roomId);

  const today = new Date().toISOString().split("T")[0];
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  if (!room) return <div className="p-10">Room not found</div>;

  const total = checkIn && checkOut ? nightsBetween(checkIn, checkOut) * room.price : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (total > 0) {
      router.push(
        `/checkout?room=${room.id}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}&total=${total}`
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#0F1915] px-6 py-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <img src={room.image} alt={room.name} className="w-full h-[400px] object-cover rounded-2xl shadow-lg" />

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <h1 className="font-serif text-4xl mb-2 text-[#2E6B4F]">{room.name}</h1>
          <p className="text-neutral-600 mb-4">€{room.price} / night</p>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Check-in</label>
            <input
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Check-out</label>
            <input
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Guests</label>
            <input
              type="number"
              min={1}
              max={room.maxGuests}
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
            <p className="text-xs text-neutral-500 mt-1">Max {room.maxGuests} guests</p>
          </div>

          <p className="text-lg font-medium text-[#2E6B4F]">
            Total: {total > 0 ? `€${total}` : "—"}
          </p>

          <button
            type="submit"
            disabled={total === 0}
            className="w-full py-3 rounded-xl bg-[#2E6B4F] text-white text-lg font-medium hover:bg-[#24523d] transition disabled:opacity-50"
          >
            Continue to Reservation
          </button>
        </form>
      </div>
    </main>
  );
}
