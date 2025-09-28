"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { rooms } from "@/lib/rooms";

export default function BookingPage() {
  return (
    <main className="bg-cream text-deep-forest min-h-screen py-16 px-6">
      <h1 className="text-4xl font-serif text-sereno-green text-center mb-12">
        Book Your Stay
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {rooms.map((room, i) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <Image
              src={room.image}
              alt={room.name}
              width={400}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-serif mb-2">{room.name}</h2>
              <p className="text-neutral-700 mb-4">
                €{room.price} / night · up to {room.maxGuests} guests
              </p>
              <Link
                href={`/booking/${room.id}`}
                className="inline-block px-4 py-2 rounded-xl bg-sereno-green text-white hover:bg-[#24523d] transition"
              >
                View Room
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
