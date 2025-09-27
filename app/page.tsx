"use client";

import Image from "next/image";
import Link from "next/link";
import { rooms } from "../lib/rooms";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-cream text-deep-forest">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Serenova Eco Village"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="font-serif text-5xl md:text-7xl text-cream mb-6 drop-shadow-lg">
              A Modern Eco-Friendly Village
            </h1>
            <p className="text-lg md:text-2xl text-cream font-light drop-shadow">
              Sustainable design, modular comfort, and natural serenity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/lounge.jpg"
            alt="Lounge at Serenova"
            width={800}
            height={600}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl mb-6 text-sereno-green">
            Welcome to Serenova
          </h2>
          <p className="text-lg text-neutral-700 mb-6">
            Discover our eco-luxury village where sustainability meets
            sophistication. From solar-powered residences to lush gardens,
            Serenova blends elegance with harmony in nature.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 rounded-xl bg-sereno-green text-white hover:bg-[#24523d] transition"
          >
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="font-serif text-4xl text-center mb-12 text-sereno-green">
          Our Residences
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              className="rounded-2xl shadow-lg overflow-hidden bg-cream"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={room.image}
                alt={room.name}
                width={500}
                height={400}
                className="h-64 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-serif text-2xl mb-2">{room.name}</h3>
                <p className="text-neutral-600 mb-4">{room.description}</p>
                <p className="text-neutral-800 font-semibold mb-4">
                  €{room.price} / night
                </p>
                <Link
                  href={`/booking/${room.id}`}
                  className="inline-block px-5 py-2 rounded-lg bg-sereno-green text-white hover:bg-[#24523d] transition"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-20 text-center bg-cream">
        <h2 className="font-serif text-3xl md:text-4xl mb-6 text-sereno-green">
          Ready to Begin Your Journey?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-neutral-700 mb-8">
          Book your stay at Serenova and experience modern eco-living in harmony
          with nature.
        </p>
        <Link
          href="/booking"
          className="inline-block px-8 py-4 rounded-xl bg-sereno-green text-white hover:bg-[#24523d] transition text-lg"
        >
          Book Now
        </Link>
      </section>
    </main>
  );
}
