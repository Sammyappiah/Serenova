"use client";

import Image from "next/image";
import Link from "next/link";
import { RoomCard } from "@/components/RoomCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const rooms = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    img: "/images/deluxe.jpg",
    price: 180,
    guests: 2,
    desc: "Sweeping views, tailored comforts, perfect for two.",
  },
  {
    id: "accessible",
    name: "Accessible Suite",
    img: "/images/accessible.jpg",
    price: 150,
    guests: 2,
    desc: "Seamless accessibility with refined, tranquil finishes.",
  },
  {
    id: "family",
    name: "Family Room",
    img: "/images/family.jpg",
    price: 220,
    guests: 4,
    desc: "Expansive space with quiet luxury for everyone.",
  },
];

export default function HomeClient() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      {/* Cinematic Hero */}
      <div className="relative h-[82vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/reception.jpg"
            alt="Serenova Lobby"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
            transition={{ duration: 1 }}
            className="max-w-2xl text-white"
          >
            <h1 className="h-serif text-5xl md:text-7xl leading-tight">
              Quiet Luxury,
              <br />
              Timeless Comfort
              <span className="block mt-3 w-20 h-1 bg-[#c6a15b]" />
            </h1>
            <p className="mt-5 text-white/90 text-lg">
              Arrive, exhale, and feel at home. Crafted hospitality in every
              detail.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="rounded-2xl px-6 py-3 bg-[#c6a15b] text-black font-medium shadow hover:brightness-110 transition"
              >
                Book your stay
              </Link>
              <Link
                href="/about"
                className="rounded-2xl px-6 py-3 border border-white/25 text-white/90 backdrop-blur-md hover:bg-white/10 transition"
              >
                Discover Serenova
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Amenities */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Concierge", "Attentive, thoughtful, 24/7."],
            ["Wellness", "Pool & spa rituals, serene."],
            ["Cuisine", "Seasonal tasting, sommelier."],
          ].map(([title, desc]) => (
            <motion.div
              key={title}
              whileHover={{ y: -3 }}
              className="glass rounded-3xl p-6 text-sm text-gray-800 shadow-lg"
            >
              <div className="h-serif text-xl text-black">{title}</div>
              <div className="mt-2 text-gray-600">{desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="h-serif text-3xl">Featured Suites</h2>
            <p className="text-gray-600">
              Spaces curated for stillness and delight.
            </p>
          </div>
          <Link
            href="/booking"
            className="hidden md:inline-block underline underline-offset-4"
          >
            View all
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {rooms.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 * i }}
            >
              <RoomCard {...r} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
