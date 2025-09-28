"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { rooms } from "@/lib/rooms";
import { motion } from "framer-motion";

export default function RoomPage() {
  const params = useParams<{ roomId: string }>();
  const router = useRouter();

  const room = useMemo(
    () => rooms.find((r) => r.id === params.roomId) ?? rooms[0],
    [params.roomId]
  );

  return (
    <main className="px-6 md:px-20 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={room.image}
            alt={room.name}
            width={1200}
            height={900}
            className="rounded-2xl shadow-soft object-cover w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-4xl mb-4 text-sereno-green">{room.name}</h1>
          <p className="text-lg text-neutral-700 mb-6">
            {room.description}
          </p>
          <p className="text-xl font-semibold mb-6">
            €{room.price} / night · up to {room.maxGuests} guests
          </p>
          <button
            onClick={() => router.push("/checkout")}
            className="btn-primary"
          >
            Proceed to Booking
          </button>
        </motion.div>
      </div>
    </main>
  );
}
