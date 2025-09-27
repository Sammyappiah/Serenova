"use client";

import { useParams } from "next/navigation";
import { rooms } from "../../../lib/rooms";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RoomPage() {
  const params = useParams();
  const { roomId } = params as { roomId: string };

  const room = rooms.find((r) => r.id === roomId);

  if (!room) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-cream text-deep-forest">
        <h1 className="text-3xl font-serif">Room not found</h1>
      </main>
    );
  }

  return (
    <main className="bg-cream text-deep-forest min-h-screen py-20 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={room.image}
            alt={room.name}
            width={800}
            height={600}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-4xl mb-4 text-sereno-green">
            {room.name}
          </h1>
          <p className="text-lg text-neutral-700 mb-6">
            {room.description || "Enjoy a luxurious stay in this eco-friendly retreat."}
          </p>
          <p className="text-xl font-semibold mb-6">
            €{room.price} / night · up to {room.maxGuests} guests
          </p>
          <a
            href="/checkout"
            className="inline-block px-6 py-3 rounded-xl bg-sereno-green text-white hover:bg-[#24523d] transition"
          >
            Proceed to Booking
          </a>
        </motion.div>
      </div>
    </main>
  );
}
