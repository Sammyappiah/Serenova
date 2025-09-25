import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-[#FAF8F5] text-[#0F1915]">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Serenova Eco Village"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fadeUp px-6">
            <h1 className="font-serif text-5xl md:text-7xl text-[#FAF8F5] mb-6 drop-shadow-lg leading-tight">
              A Modern Eco-Friendly Retreat
            </h1>
            <p className="text-lg md:text-2xl text-[#FAF8F5] font-light drop-shadow">
              Sustainable design, modular comfort, and harmony with nature.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6 text-[#2E6B4F]">
          Welcome to Serenova
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-neutral-700 leading-relaxed">
          Discover our eco-luxury village where sustainability meets
          sophistication. From solar-powered villas to lush gardens, Serenova
          redefines modern eco-living with elegance and tranquility.
        </p>
      </section>
    </main>
  );
}
