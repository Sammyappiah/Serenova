"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { rooms } from "@/lib/rooms";

export default function RoomPage() {
  const { roomId } = useParams();
  const room = rooms.find((r) => r.id === roomId);

  if (!room) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-cream text-deep-forest">
        <div className="text-center max-w-md">
          <h1 className="font-serif text-4xl mb-3">Room not found</h1>
          <p className="text-neutral-600 mb-6">
            The room you’re looking for doesn’t exist or may have been removed.
          </p>
          <a
            href="/booking"
            className="inline-block rounded-xl px-6 py-3 bg-sereno-green text-white hover:bg-[#24523d] transition"
          >
            Back to Booking
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-cream text-deep-forest min-h-screen pt-24 px-6 md:px-20">
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Room Image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <Image
            src={`/images/${room.image}`}
            alt={room.name}
            width={800}
            height={600}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Room Details */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl mb-4 text-sereno-green">
            {room.name}
          </h1>
          <p className="text-lg text-neutral-700 mb-6">
            {room.description ||
              "Enjoy a luxurious stay in this eco-friendly retreat, combining comfort with sustainability."}
          </p>
          <p className="text-xl font-medium mb-4">€{room.price} / night</p>
          <p className="text-neutral-600 mb-6">
            Maximum guests: {room.maxGuests}
          </p>
          <a
            href="/checkout"
            className="inline-block px-8 py-4 rounded-xl bg-sereno-green text-white hover:bg-[#24523d] transition text-lg"
          >
            Proceed to Payment
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
