import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const blocks = [
    { src: "/images/reception.jpg", title: "Thoughtful Arrival", copy: "Our reception is designed to welcome you with soft light, natural textures, and calm, open space." },
    { src: "/images/team.jpg", title: "People First", copy: "Our team blends hospitality and sustainability expertise to ensure every moment feels effortless." },
    { src: "/images/garden.jpg", title: "Lush Gardens", copy: "Native plants, shaded paths, and edible landscapes weave nature into daily life at Serenova." },
    { src: "/images/lounge.jpg", title: "Spaces to Breathe", copy: "Lounge, read, and unwind. Spaces are modular, warm, and intentionally minimal." },
  ];

  return (
    <main className="px-6 md:px-20 py-16">
      <header className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="font-serif text-5xl mb-4 text-sereno-green">About Serenova</h1>
        <p className="text-neutral-700 text-lg">
          We believe luxury is quiet, sustainability is elegant, and comfort should feel natural.
        </p>
      </header>

      <div className="space-y-14">
        {blocks.map((b, i) => (
          <motion.section
            key={b.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div className={`${i % 2 === 0 ? "" : "md:order-2"}`}>
              <Image
                src={b.src}
                alt={b.title}
                width={1400}
                height={900}
                className="rounded-2xl shadow-soft object-cover w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl mb-4">{b.title}</h2>
              <p className="text-neutral-700 text-lg">{b.copy}</p>
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}
