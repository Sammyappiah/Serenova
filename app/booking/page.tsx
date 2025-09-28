"use client";

import Link from "next/link";
import Image from "next/image";
import { rooms } from "@/lib/rooms";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-cream text-deep-forest pt-24 pb-20 px-6 md:px-20">
      <h1 className="font-serif text-5xl text-center mb-12 text-sereno-green">
        Our Residences
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition"
          >
            <Image
              src={room.image}
              alt={room.name}
              width={500}
              height={400}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="font-serif text-2xl mb-2">{room.name}</h2>
              <p className="text-neutral-600 mb-4">
                €{room.price} / night · up to {room.maxGuests} guests
              </p>
              <Link
                href={`/booking/${room.id}`}
                className="inline-block px-5 py-2 rounded-lg bg-sereno-green text-white hover:bg-[#24523d] transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
