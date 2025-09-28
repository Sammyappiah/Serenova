"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-cream text-deep-forest">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif mb-8 text-center"
        >
          About Serenova
        </motion.h1>

        <p className="text-lg text-neutral-700 mb-12 text-center max-w-3xl mx-auto">
          Serenova is more than just a retreat — it’s a sanctuary for rest,
          wellness, and eco-conscious living. Our mission is to blend modern
          luxury with sustainable hospitality.
        </p>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/reception.jpg"
              alt="Reception"
              width={1200}
              height={800}
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/team.jpg"
              alt="Our Team"
              width={1200}
              height={800}
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/garden.jpg"
              alt="Garden"
              width={1200}
              height={800}
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/lounge.jpg"
              alt="Lounge"
              width={1200}
              height={800}
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
