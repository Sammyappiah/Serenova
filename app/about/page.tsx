"use client";

import Image from "next/image";

export default function AboutPage() {
  const gallery = [
    { src: "/images/lounge.jpg", alt: "Lounge", caption: "Relax in style" },
    { src: "/images/Gardens.jpg", alt: "Gardens", caption: "Lush green spaces" },
    { src: "/images/accessible.jpg", alt: "Accessible Suite", caption: "Inclusive design" },
    { src: "/images/deluxe.jpg", alt: "Deluxe Room", caption: "Modern comfort" },
    { src: "/images/family.jpg", alt: "Family Room", caption: "Spacious living" },
    { src: "/images/ev-charging.jpg", alt: "EV Charging", caption: "Sustainable travel" },
  ];

  return (
    <main className="bg-[#FAF8F5] text-[#0F1915]">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="About Serenova"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white drop-shadow-lg animate-fadeUp">
            About Serenova
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-[#2E6B4F] mb-6 animate-fadeUp">
          Where Sustainability Meets Elegance
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-neutral-700 animate-fadeIn">
          Serenova is more than a destination — it is a community designed with care for
          both people and nature. Every detail of our eco-village reflects our values:
          harmony, sustainability, and modern luxury.
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        {gallery.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden shadow-lg hover-float animate-fadeUp"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={400}
              className="object-cover w-full h-[250px]"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
              <p className="text-white text-lg font-medium">{item.caption}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
