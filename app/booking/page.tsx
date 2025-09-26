"use client";

import Link from "next/link";
import Image from "next/image";

const rooms = [
  {
    id: "accessible",
    name: "Accessible Suite",
    price: 70,
    maxGuests: 2,
    image: "/images/accessible.jpg",
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: 70,
    maxGuests: 3,
    image: "/images/deluxe.jpg",
  },
  {
    id: "family",
    name: "Family Room",
    price: 85,
    maxGuests: 5,
    image: "/images/family.jpg",
  },
];

export default function BookingPage() {
  return (
    <section className="min-h-screen bg-[#FAF8F5] flex items-center py-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-12 text-[#0F1915]">
          Choose Your Stay
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fadeUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Image
                src={room.image}
                alt={room.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-serif text-[#0F1915] mb-2">
                  {room.name}
                </h2>
                <p className="text-lg text-neutral-700 mb-4">
                  From €{room.price} / night
                </p>
                <Link
                  href={`/booking/${room.id}`}
                  className="inline-block bg-[#2E6B4F] text-white px-6 py-3 rounded-lg hover:bg-[#24523d] transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
