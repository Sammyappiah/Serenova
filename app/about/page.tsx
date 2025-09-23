import Image from "next/image";

export const metadata = {
  title: "About Serenova",
  description:
    "Discover Serenova: a modern eco-friendly resort village with modular homes, solar power, and landscaped gardens designed for sustainable living.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/images/reception.jpg"
          alt="Serenova Reception"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container text-left animate-fadeUp">
            <h1 className="font-serif text-4xl md:text-6xl text-cream mb-4 max-w-xl">
              About Serenova
            </h1>
            <p className="text-lg text-cream/90 max-w-lg leading-relaxed">
              Serenova was founded on the belief that modern travel can be
              sustainable, accessible, and inspiring.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section container grid gap-12 md:grid-cols-2 md:items-center">
        <div className="animate-fadeUp">
          <p className="mt-6 text-lg text-neutral-700 leading-relaxed max-w-xl">
            Our modular eco-homes blend modern design with renewable solar
            power, set amidst landscaped gardens that honor the natural
            environment. Serenova offers comfort while staying true to our
            mission of responsible tourism.
          </p>
        </div>
        <div className="relative h-96 md:min-h-[28rem] rounded-2xl overflow-hidden shadow-soft animate-fadeUp">
          <Image
            src="/images/village-aerial.jpg"
            alt="Aerial view of Serenova eco-village"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="section container">
        <h2 className="section-title text-center">A Sense of Place</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { src: "/images/reception.jpg", alt: "Reception", label: "Reception" },
            { src: "/images/gardens.jpg", alt: "Gardens", label: "Gardens" },
            { src: "/images/lounge.jpg", alt: "Lounge", label: "Community Lounge" },
            { src: "/images/homes.jpg", alt: "Modular Homes", label: "Modular Homes" },
          ].map((img) => (
            <div
              key={img.src}
              className="relative h-64 rounded-2xl overflow-hidden shadow-soft group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/40 text-white p-2 text-center text-sm font-medium">
                {img.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative h-[50vh] md:h-[60vh] mt-16">
        <Image
          src="/images/gardens.jpg"
          alt="Serenova Gardens"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white animate-fadeUp">
          <div>
            <h2 className="font-serif text-3xl mb-4">Plan your stay at Serenova</h2>
            <a href="/booking" className="btn btn-primary">
              Book Your Stay
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
