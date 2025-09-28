"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { rooms } from "@/lib/rooms";

export default function BookingPage() {
  return (
    <main className="bg-cream min-h-screen py-16 px-6">
      <h1 className="text-4xl font-serif text-center text-sereno-green mb-12">
        Choose Your Room
      </h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={room.image}
              alt={room.name}
              width={400}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-serif text-deep-forest mb-2">
                {room.name}
              </h2>
              <p className="text-neutral-700 mb-4">{room.description}</p>
              <p className="font-semibold mb-4">
                €{room.price} / night · up to {room.maxGuests} guests
              </p>
              <Link
                href={`/booking/${room.id}`}
                className="inline-block px-4 py-2 rounded-lg bg-sereno-green text-white hover:bg-[#24523d] transition"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
