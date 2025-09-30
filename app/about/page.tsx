"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const metadata = {
  title: "About Serenova",
  description: "Our story, values, and commitment to crafted hospitality.",
  openGraph: { title:"About Serenova", description:"Our story and values.", images:["/images/og.jpg"] }
};

export default function AboutPage(){
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh]">
        <Image src="/images/garden.jpg" alt="Serenova Garden" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex items-end pb-10">
          <div className="glass rounded-3xl p-8 text-white">
            <h1 className="h-serif text-4xl md:text-5xl">About Serenova</h1>
            <p className="mt-2 text-white/90">Blending comfort, elegance, and nature to create your sanctuary.</p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="grid md:grid-cols-2 gap-10 items-center">
          <Image src="/images/team.jpg" alt="Our Team" width={640} height={420} className="rounded-3xl shadow-xl" />
          <div>
            <h2 className="h-serif text-2xl mb-3">Our Story</h2>
            <p className="leading-relaxed text-gray-700">
              At Serenova, we craft experiences where design and ease meet. Every detail is considered
              to help you arrive, exhale, and feel at home.
            </p>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="h-serif text-2xl mb-3">Our Values</h2>
            <p className="leading-relaxed text-gray-700">
              We value quiet luxury: sustainability, thoughtful service, and warm authenticity —
              the subtle details that make a stay unforgettable.
            </p>
          </div>
          <Image src="/images/reception.jpg" alt="Serenova Reception" width={640} height={420} className="rounded-3xl shadow-xl" />
        </motion.div>
      </section>
    </div>
  );
}
