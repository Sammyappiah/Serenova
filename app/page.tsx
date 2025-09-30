// app/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

const carouselImages = [
  { src: "/reception.jpg", alt: "Reception Area", caption: "Welcome to Serenova" },
  { src: "/garden.jpg", alt: "Garden", caption: "Relax in Nature" },
  { src: "/lounge.jpg", alt: "Lounge", caption: "Unwind in Style" },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <main className="bg-[#fdfcf7] min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <Image
          src="/deluxe.jpg"
          alt="Serenova Hotel"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to Serenova
          </h1>
          <p className="text-xl md:text-2xl mb-6 drop-shadow-md">
            Experience comfort, elegance, and tranquility in the heart of Romania.
          </p>
          <a
            href="/booking"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            Book Your Stay
          </a>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Discover Serenova</h2>
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
          <div className="relative h-[400px]">
            <Image
              src={carouselImages[current].src}
              alt={carouselImages[current].alt}
              fill
              className="object-cover transition duration-700"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-40 text-white py-4">
              <p className="text-lg font-medium">{carouselImages[current].caption}</p>
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3"
          >
            ›
          </button>
        </div>
      </section>
    </main>
  );
}
