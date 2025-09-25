// app/about/page.tsx
import Image from "next/image";

const gallery = [
  { src: "/images/lounge.jpg", alt: "Elegant Lounge", caption: "Elegant Lounge" },
  { src: "/images/family.jpg", alt: "Family Suite", caption: "Spacious Family Suite" },
  { src: "/images/deluxe.jpg", alt: "Deluxe Room", caption: "Deluxe Room with Garden View" },
  { src: "/images/accessible.jpg", alt: "Accessible Suite", caption: "Accessible Luxury Suite" },
  { src: "/images/ev-charging.jpg", alt: "EV Charging", caption: "Sustainable EV Charging" },
  { src: "/images/Gardens.jpg", alt: "Eco Gardens", caption: "Eco-Friendly Gardens" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#FAF8F5] text-[#0F1915]">
      <section className="py-20 px-6 md:px-20">
        <h1 className="font-serif text-4xl md:text-5xl mb-10 text-center text-[#2E6B4F]">
          About Serenova
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-neutral-700 text-center mb-16">
          Serenova Eco Village combines modern comfort with sustainability. Our
          resort is designed to respect nature while offering world-class
          luxury. Explore our spaces below:
        </p>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={400}
                className="object-cover h-64 w-full"
              />
              <div className="p-4 bg-white">
                <p className="text-center font-medium text-neutral-800">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
