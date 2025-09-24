"use client";

export default function HomePage() {
  return (
    <main>
      {/* ✅ Hero Section with Ken Burns Effect */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Background image with Ken Burns animation */}
        <img
          src="/images/hero.jpg"
          alt="Serenova Reception"
          className="absolute inset-0 h-full w-full object-cover scale-110 animate-kenburns"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>

        {/* Hero text */}
        <div className="absolute inset-0 flex items-start justify-start pt-28 pl-10 md:pl-20">
          <div className="animate-fadeUp max-w-xl">
            <h1 className="font-serif text-4xl md:text-6xl text-[#FAF8F5] mb-4 drop-shadow-lg leading-tight">
              A Modern Eco Friendly
              <br />
              Resort Village
            </h1>
            <p className="text-lg md:text-2xl text-[#FAF8F5] font-light drop-shadow">
              Sustainable design, modular comfort, and natural serenity.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Welcome Section */}
      <section className="py-16 px-6 md:px-20 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-[#0F1915]">
            Welcome to Serenova
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Nestled in nature, Serenova Eco Village offers modern comfort with
            sustainable design. Our modular homes are powered by solar energy
            and surrounded by green spaces, offering guests an unforgettable
            eco-luxury experience.
          </p>
        </div>
      </section>
    </main>
  );
}
