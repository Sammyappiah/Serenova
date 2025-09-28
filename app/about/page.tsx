"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const images = [
    { src: "/amenities/reception.jpg", alt: "Reception" },
    { src: "/amenities/team.jpg", alt: "Team" },
    { src: "/amenities/garden.jpg", alt: "Garden" },
    { src: "/amenities/lounge.jpg", alt: "Lounge" },
  ];

  return (
    <main className="bg-cream text-deep-forest min-h-screen">
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-serif text-sereno-green mb-8">About Us</h1>
        <p className="text-lg text-neutral-700 mb-12">
          At Serenova, we believe luxury and sustainability can live side by
          side. Our retreat offers a space to reconnect with nature and enjoy
          refined hospitality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="rounded-2xl shadow-lg object-cover w-full h-[300px]"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
