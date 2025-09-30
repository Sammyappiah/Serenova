"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-[#fdfcf7] min-h-screen text-gray-900 flex flex-col items-center justify-center">
      <section className="text-center px-6">
        <Image
          src="/deluxe.jpg"
          alt="Serenova Hotel"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg mx-auto mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Serenova
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Comfort, elegance, and tranquility in the heart of Romania.
        </p>
        <a
          href="/booking"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Book Your Stay
        </a>
      </section>
    </main>
  );
}
