"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { rooms } from "@/lib/rooms";

export default function RoomPage() {
  const { roomId } = useParams();
  const room = rooms.find((r) => r.id === roomId);

  if (!room) {
    return (
      <main className="bg-cream text-deep-forest min-h-screen flex items-center justify-center">
        <p className="text-xl">Room not found.</p>
      </main>
    );
  }

  return (
    <main className="bg-cream text-deep-forest min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={room.image}
            alt={room.name}
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
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
          <p className="text-lg text-neutral-700 mb-6">{room.description}</p>
          <p className="text-xl font-semibold mb-6">
            €{room.price} / night · up to {room.maxGuests} guests
          </p>
          <Link
            href="/checkout"
            className="inline-block px-6 py-3 rounded-xl bg-sereno-green text-white hover:bg-[#24523d] transition"
          >
            Proceed to Booking
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
