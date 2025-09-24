"use client";

import Link from "next/link";
import Image from "next/image";

const rooms = [
  { id: "DELUXE", name: "DELUXE", price: 140, image: "/images/deluxe.jpg" },
  { id: "ACCESSIBLE", name: "ACCESSIBLE SUITE", price: 160, image: "/images/accessible.jpg" },
  { id: "FAMILY", name: "FAMILY ROOM", price: 200, image: "/images/family.jpg" },
];

export default function BookingPage() {
  return (
    <section className="bg-[#FAF8F5] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-serif mb-12 text-center text-[#0F1915]">Book Your Stay</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <Image src={room.image} alt={room.name} width={600} height={400} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                <p className="text-gray-700 mb-4">€{room.price} per night</p>
                <Link
                  href={`/booking/${room.id}`}
                  className="block text-center bg-[#2E6B4F] text-white px-4 py-2 rounded-lg hover:bg-[#24543E] transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
