"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-cream text-deep-forest">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Serenova Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-white text-center"
          >
            Welcome to Serenova
          </motion.h1>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif mb-4">Your Eco-Friendly Retreat</h2>
          <p className="text-lg text-neutral-700">
            Nestled in nature, Serenova offers a calm and luxurious stay with
            eco-friendly design, sustainable practices, and world-class comfort.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/garden.jpg"
            alt="Serenova Gardens"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </section>

      {/* Residences Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12">
            Our Residences
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Accessible Suite",
                img: "/accessible.jpg",
                desc: "Spacious suite designed for comfort and accessibility.",
              },
              {
                name: "Deluxe Room",
                img: "/deluxe.jpg",
                desc: "Elegant and modern with stunning views.",
              },
              {
                name: "Family Room",
                img: "/family.jpg",
                desc: "Perfect for families, cozy and versatile.",
              },
            ].map((room, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="rounded-2xl shadow-lg overflow-hidden bg-cream"
              >
                <Image
                  src={room.img}
                  alt={room.name}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{room.name}</h3>
                  <p className="text-neutral-700">{room.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sereno-green text-white py-16 text-center">
        <h2 className="text-3xl font-serif mb-6">
          Ready to Book Your Stay?
        </h2>
        <a
          href="/booking"
          className="inline-block px-8 py-4 bg-white text-sereno-green font-semibold rounded-xl hover:bg-neutral-100 transition"
        >
          Explore Booking Options
        </a>
      </section>
    </main>
  );
}
