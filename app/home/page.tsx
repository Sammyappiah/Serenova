"use client";

export default function HomePage() {
  return (
    <main>
      <section className="relative h-[90vh] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/reception.jpg"
        >
          <source src="/videos/serenova-hero.webm" type="video/webm" />
          <source src="/videos/serenova-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>
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
    </main>
  );
}
