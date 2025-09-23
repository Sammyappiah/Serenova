"use client";

import { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { getRoom, nightsBetween, calculateTotal } from "@/lib/rooms";

export default function RoomBooking() {
  const { roomId } = useParams<{ roomId: string }>();
  const router = useRouter();
  const room = getRoom(roomId);

  const today = new Date().toISOString().split("T")[0];
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const nights = useMemo(() => nightsBetween(checkIn, checkOut), [checkIn, checkOut]);
  const total = useMemo(() => calculateTotal(roomId, checkIn, checkOut), [roomId, checkIn, checkOut]);

  if (!room) return <p>Room not found.</p>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/checkout?roomId=${room.id}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}&total=${total}`
    );
  };

  return (
    <section className="section">
      <div className="container max-w-3xl mx-auto bg-white shadow-soft rounded-2xl p-8">
        <h1 className="font-serif text-3xl mb-6">{room.title}</h1>
        <img src={room.image} alt={room.title} className="rounded-xl mb-6" />

        <p className="text-neutral-700 mb-4">{room.description}</p>
        <ul className="list-disc ml-6 mb-6 text-neutral-700">
          {room.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Check-in</label>
            <input
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
              className="border rounded-lg p-2 w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Check-out</label>
            <input
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
              className="border rounded-lg p-2 w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Guests</label>
            <input
              type="number"
              min={1}
              max={room.maxGuests}
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              required
              className="border rounded-lg p-2 w-full"
            />
          </div>

          <p className="font-bold text-lg">Total: €{total.toFixed(2)}</p>

          <button
            type="submit"
            disabled={!checkIn || !checkOut || nights <= 0}
            className="btn btn-primary w-full mt-4"
          >
            Continue to Reservation
          </button>
        </form>
      </div>
    </section>
  );
}
