cat > "app/booking/[roomId]/page.tsx" <<'TSX'
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { rooms } from "@/lib/rooms";
import Link from "next/link";

export default function RoomPage() {
  const { roomId } = useParams();
  const room = rooms.find((r) => r.id === roomId);

  if (!room) {
    return (
      <main className="flex items-center justify-center h-screen bg-cream">
        <h1 className="text-2xl font-serif text-red-600">Room not found</h1>
      </main>
    );
  }

  return (
    <main className="bg-cream min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-4xl mb-4 text-sereno-green">{room.name}</h1>
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
TSX
