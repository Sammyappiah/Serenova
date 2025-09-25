// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  const sections = [
    { src: "/images/hero.jpg", alt: "Reception building", text: "Welcome to Serenova Eco Village." },
    { src: "/images/lounge.jpg", alt: "Lounge area", text: "Relax in our beautifully designed lounge with natural light." },
    { src: "/images/accessible.jpg", alt: "Accessible suite", text: "We provide accessible suites designed with inclusivity in mind." },
    { src: "/images/caravans.jpg", alt: "Caravans", text: "Spacious caravan spaces surrounded by greenery." },
    { src: "/images/deluxe.jpg", alt: "Deluxe room", text: "Experience luxury in our deluxe eco-friendly rooms." },
    { src: "/images/ev-charging.jpg", alt: "EV charging", text: "EV charging stations for our eco-conscious guests." },
    { src: "/images/family.jpg", alt: "Family room", text: "Family-friendly rooms with modern comfort and space." },
    { src: "/images/Gardens.jpg", alt: "Gardens", text: "Peaceful gardens and walkways for relaxation." },
    { src: "/images/homes.jpg", alt: "Eco homes", text: "Modern modular eco-homes designed for sustainability." },
    { src: "/images/laundry.jpg", alt: "Laundry facility", text: "On-site laundry for your convenience." },
  ];

  return (
    <section className="min-h-screen bg-[#FAF8F5] py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <h1 className="text-4xl md:text-6xl font-serif text-center text-[#0F1915] mb-12">
          About Serenova
        </h1>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <Image
              src={section.src}
              alt={section.alt}
              width={800}
              height={500}
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <p className="text-lg text-neutral-700 leading-relaxed">
              {section.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
