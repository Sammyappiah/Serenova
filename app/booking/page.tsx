"use client";

import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    id: "accessible",
    name: "Accessible Suite",
    price: 70,
    img: "/images/accessible.jpg",
    desc: "Inclusive design, modern comfort, and serene surroundings.",
    maxGuests: 2,
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: 70,
    img: "/images/deluxe.jpg",
    desc: "Stylish and spacious with elegant interiors and nature views.",
    maxGuests: 3,
  },
  {
    id: "family",
    name: "Family Room",
    price: 85,
    img: "/images/family.jpg",
    desc: "Perfect for families, offering comfort and space for everyone.",
    maxGuests: 4,
  },
];

export default function BookingPage() {
  return (
    <main className="bg-[#FAF8F5] text-[#0F1915]">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Booking Serenova"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white drop-shadow-lg animate-fadeUp">
            Book Your Stay
          </h1>
        </div>
      </section>

      {/* Room Listings */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition hover-float animate-fadeUp"
            >
              <Image
                src={room.img}
                alt={room.name}
                width={600}
                height={400}
                className="object-cover w-full h-[250px]"
              />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-serif mb-2">{room.name}</h2>
                <p className="text-neutral-700 mb-4">{room.desc}</p>
                <p className="text-lg font-semibold mb-4">
                  From €{room.price} / night
                </p>
                <Link
                  href={`/booking/${room.id}`}
                  className="inline-block px-6 py-3 bg-[#2E6B4F] text-white rounded-xl hover:bg-[#24523d] transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
