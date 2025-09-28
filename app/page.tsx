"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-cream text-deep-forest">
      {/* Hero */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Serenova Retreat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-white text-center"
          >
            Welcome to Serenova
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg text-neutral-700"
        >
          Escape to a world of tranquility and timeless luxury, where every
          detail is designed for your comfort.
        </motion.p>
      </section>
    </main>
  );
}
