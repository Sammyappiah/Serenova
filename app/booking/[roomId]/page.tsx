"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const rooms: Record<string, { name: string; price: number; maxGuests: number; image: string }> = {
  deluxe: { name: "Deluxe Room", price: 200, maxGuests: 3, image: "/images/deluxe.jpg" },
  accessible: { name: "Accessible Suite", price: 150, maxGuests: 2, image: "/images/accessible.jpg" },
  family: { name: "Family Room", price: 250, maxGuests: 5, image: "/images/family.jpg" },
};

export default function RoomPage({ params }: { params: { roomId: string } }) {
  const router = useRouter();
  const room = rooms[params.roomId];
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [total, setTotal] = useState<number | null>(null);

  // Calculate total whenever inputs change
  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      if (end > start) {
        const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        setTotal(nights * room.price);
      } else {
        setTotal(null);
      }
    }
  }, [checkIn, checkOut, room.price]);

  const handleContinue = () => {
    if (!checkIn || !checkOut || !total) {
      alert("Please select valid dates.");
      return;
    }
    if (guests > room.maxGuests) {
      alert(`Maximum ${room.maxGuests} guests allowed.`);
      return;
    }
    router.push(
      `/checkout?room=${params.roomId}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}&total=${total}`
    );
  };

  if (!room) return <div className="p-10">Room not found</div>;

  return (
    <section className="min-h-screen bg-[#FAF8F5] py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-serif text-[#0F1915] mb-4">{room.name}</h1>
          <p className="text-lg text-neutral-700 mb-6">€{room.price} / night</p>

          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">Check-in</label>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2"
                value={checkIn}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Check-out</label>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2"
                value={checkOut}
                min={checkIn || new Date().toISOString().split("T")[0]}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Guests</label>
              <input
                type="number"
                min="1"
                max={room.maxGuests}
                className="w-full border rounded-lg px-3 py-2"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
              />
              <p className="text-xs text-neutral-500">Max {room.maxGuests} guests</p>
            </div>
          </div>

          <div className="mt-6 text-xl font-semibold">
            Total: {total ? `€${total}` : "—"}
          </div>

          <button
            onClick={handleContinue}
            className="mt-6 w-full bg-[#2E6B4F] text-white py-3 rounded-lg hover:bg-[#24523d] transition"
          >
            Continue to Reservation
          </button>
        </div>
      </div>
    </section>
  );
}
