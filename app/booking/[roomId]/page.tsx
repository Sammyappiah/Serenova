"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { rooms } from "@/lib/rooms";
import { motion } from "framer-motion";

export default function BookingPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const room = rooms.find((r) => r.id === roomId);

  const [guests, setGuests] = useState(1);
  const [nights, setNights] = useState(1);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream text-deep-forest">
        <h1 className="text-3xl font-serif">Room not found</h1>
      </div>
    );
  }

  const totalPrice = room.price * nights;

  return (
    <main className="bg-cream min-h-screen text-deep-forest pt-24 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Room Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={room.image}
            alt={room.name}
            width={800}
            height={600}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </motion.div>

        {/* Booking Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="font-serif text-4xl text-sereno-green">{room.name}</h1>
          <p className="text-lg text-neutral-700">{room.description}</p>

          <div className="text-xl text-neutral-800">
            <span className="font-semibold">€{room.price}</span> / night
          </div>

          {/* Guests */}
          <div>
            <label className="block mb-2 font-medium">Guests</label>
            <input
              type="number"
              min={1}
              max={room.maxGuests}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-24 border rounded-lg px-3 py-2"
            />
            <p className="text-sm text-neutral-600">
              Max {room.maxGuests} guests
            </p>
          </div>

          {/* Nights */}
          <div>
            <label className="block mb-2 font-medium">Nights</label>
            <input
              type="number"
              min={1}
              value={nights}
              onChange={(e) => setNights(Number(e.target.value))}
              className="w-24 border rounded-lg px-3 py-2"
            />
          </div>

          {/* Price */}
          <div className="text-lg font-semibold">
            Total: €{totalPrice.toFixed(2)}
          </div>

          {/* Button */}
          <button className="px-6 py-3 rounded-xl bg-sereno-green text-white hover:bg-[#24523d] transition">
            Proceed to Payment
          </button>
        </motion.div>
      </div>
    </main>
  );
}
