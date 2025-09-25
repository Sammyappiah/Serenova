import Image from "next/image";

export const metadata = {
  title: "About Serenova",
  description: "Our story, sustainability, and community design.",
};

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/images/reception.jpg"
          alt="Serenova reception"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10" />
        <div className="absolute inset-0 flex items-start justify-start pt-24 pl-10 md:pl-20">
          <div className="animate-fadeUp max-w-2xl">
            <h1 className="font-serif text-4xl md:text-6xl text-[#FAF8F5] mb-3 leading-tight">
              About Serenova
            </h1>
            <p className="text-[#FAF8F5] text-lg md:text-xl font-light drop-shadow">
              Sustainable stays crafted for calm, comfort, and connection.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fadeUp">
            <h2 className="section-title mb-4">Our Story</h2>
            <p className="text-neutral-700 leading-relaxed">
              Serenova was founded on the belief that modern travel can be
              sustainable, accessible, and inspiring. Our modular eco-homes
              blend modern design with renewable solar power, set amidst
              landscaped gardens that honor the natural environment. We welcome
              couples, families, and travelers seeking a premium, nature-forward
              experience—without compromise.
            </p>
          </div>
          <figure className="figure">
            <Image
              src="/images/village-aerial.jpg"
              alt="Aerial view of the eco-village"
              width={1200}
              height={800}
              className="h-[420px] w-full object-cover"
            />
            <figcaption className="figcap">
              Aerial view: homes, solar, outdoor kitchen, and caravan spaces.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 2×3 GALLERY */}
      <section className="section pt-0">
        <div className="container">
          <h2 className="section-title mb-6">A Sense of Place</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { src: "/images/reception.jpg", cap: "Reception" },
              { src: "/images/homes.jpg", cap: "Modular Homes" },
              { src: "/images/gardens.jpg", cap: "Landscaped Gardens" },
              { src: "/images/lounge.jpg", cap: "Community Lounge" },
              { src: "/images/outdoor-kitchen.jpg", cap: "Outdoor Kitchen & BBQ" },
              { src: "/images/ev-charging.jpg", cap: "EV Charging" },
            ].map((i) => (
              <figure key={i.src} className="figure group">
                <Image
                  src={i.src}
                  alt={i.cap}
                  width={900}
                  height={600}
                  className="h-64 w-full object-cover transition group-hover:scale-[1.02]"
                />
                <figcaption className="figcap">{i.cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
