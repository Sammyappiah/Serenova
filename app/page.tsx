"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const accent = "text-[#166534]";
const bg = "bg-[#fdfcf7]";
const body = "text-[#1f2937]";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.2 },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.2 },
});

export default function HomePage() {
  return (
    <div className={`${bg} ${body}`}>
      {/* HERO */}
      <section className="relative min-h-[78vh] w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Serenova hotel exterior"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* soft overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 py-28 text-center">
          <motion.h1
            className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Serenity, Comfort & Timeless Elegance
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            Welcome to <span className="font-semibold">Serenova</span> — your
            boutique stay in Romania. Thoughtful design, warm service, and a
            tranquil atmosphere crafted for memorable escapes.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <Link
              href="/booking"
              className="rounded-full bg-[#166534] px-6 py-3 text-white shadow-md transition hover:shadow-lg"
            >
              Book Your Stay
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/70 bg-white/10 px-6 py-3 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Explore Serenova
            </Link>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          className="text-center text-3xl font-semibold tracking-tight md:text-4xl"
          {...fadeUp()}
        >
          A Stay That Feels Effortless
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-gray-600"
          {...fadeUp(0.08)}
        >
          Thoughtful amenities, calming spaces, and a team that anticipates what
          you need — so you can unwind, explore, and feel at home.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Refined Rooms",
              desc: "Crisp linens, natural textures, and quiet luxury in every detail.",
              img: "/deluxe.jpg",
            },
            {
              title: "Spaces to Unwind",
              desc: "Garden lounges, sunlit nooks, and tranquil corners to slow down.",
              img: "/lounge.jpg",
            },
            {
              title: "Thoughtful Amenities",
              desc: "EV charging, laundry, outdoor showers, and more — seamlessly integrated.",
              img: "/ev-charging.jpg",
            },
          ].map((item, i) => (
            <motion.article
              key={item.title}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5"
              {...fadeUp(0.1 + i * 0.06)}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold ${accent}`}>
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
                <div className="mt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#166534] underline-offset-4 hover:underline"
                  >
                    Learn more
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ROOMS PREVIEW */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <motion.div
          className="flex items-end justify-between gap-4"
          {...fadeIn()}
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Rooms & Suites
          </h2>
          <Link
            href="/booking"
            className="hidden rounded-full border border-[#166534] px-5 py-2 text-sm font-medium text-[#166534] hover:bg-[#166534] hover:text-white md:inline-flex"
          >
            View Availability
          </Link>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Deluxe King",
              price: "€145 / night",
              img: "/deluxe.jpg",
            },
            {
              title: "Family Suite",
              price: "€195 / night",
              img: "/family.jpg",
            },
            {
              title: "Accessible Room",
              price: "€130 / night",
              img: "/accessible.jpg",
            },
          ].map((room, i) => (
            <motion.article
              key={room.title}
              className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5"
              {...fadeUp(0.06 + i * 0.06)}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={room.img}
                  alt={room.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#166534] shadow">
                  {room.price}
                </span>
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-lg font-semibold">{room.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Sunlit, quiet, and thoughtfully furnished.
                  </p>
                </div>
                <Link
                  href="/booking"
                  className="rounded-full bg-[#166534] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:shadow"
                >
                  Book
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/booking"
            className="inline-flex rounded-full bg-[#166534] px-6 py-3 text-white shadow-md transition hover:shadow-lg"
          >
            View Availability
          </Link>
        </div>
      </section>

      {/* STORY / IMAGE STRIP */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <motion.div {...fadeUp()}>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              A Calming Rhythm, Inside & Out
            </h2>
            <p className="mt-4 text-gray-700">
              From morning light in the lounge to golden sunsets over the
              gardens, Serenova is designed to slow time. Wander the paths, sip
              something warm, and settle in.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 ring-1 ring-black/5">
                Garden Lounge
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 ring-1 ring-black/5">
                EV Charging
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 ring-1 ring-black/5">
                Laundry
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 ring-1 ring-black/5">
                Outdoor Showers
              </span>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full border border-[#166534] px-5 py-2 text-sm font-medium text-[#166534] hover:bg-[#166534] hover:text-white"
            >
              Our Story
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            {...fadeUp(0.05)}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/garden.jpg"
                alt="Garden"
                fill
                className="object-cover"
                sizes="(max-width:768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/lounge.jpg"
                alt="Lounge"
                fill
                className="object-cover"
                sizes="(max-width:768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:-mt-24">
              <Image
                src="/reception.jpg"
                alt="Reception"
                fill
                className="object-cover"
                sizes="(max-width:768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:-mt-12">
              <Image
                src="/village-aerial.jpg"
                alt="Village"
                fill
                className="object-cover"
                sizes="(max-width:768px) 50vw, 25vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA BAR */}
      <section className="border-t border-black/5 bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-12 md:flex-row">
          <motion.p className="text-center text-lg md:text-left" {...fadeIn()}>
            Your retreat awaits. Reserve your dates at{" "}
            <span className={`font-semibold ${accent}`}>Serenova</span>.
          </motion.p>
          <motion.div {...fadeIn(0.05)}>
            <Link
              href="/booking"
              className="inline-flex rounded-full bg-[#166534] px-6 py-3 text-white shadow-md transition hover:shadow-lg"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
