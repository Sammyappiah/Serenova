"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-[#FAF8F5] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-serif mb-8 text-center text-[#0F1915]">About Serenova</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Image src="/images/reception.jpg" alt="Reception" width={600} height={400} className="rounded-2xl shadow-lg" />
          <Image src="/images/team.jpg" alt="Team" width={600} height={400} className="rounded-2xl shadow-lg" />
          <Image src="/images/garden.jpg" alt="Garden" width={600} height={400} className="rounded-2xl shadow-lg" />
          <Image src="/images/lounge.jpg" alt="Lounge" width={600} height={400} className="rounded-2xl shadow-lg" />
        </div>
      </div>
    </section>
  );
}
