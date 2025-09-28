"use client";

export default function AboutPage() {
  return (
    <main className="bg-cream text-deep-forest">
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src="/images/reception.jpg"
          alt="Serenova Reception"
          className="object-cover"
          style={{ position: "absolute", height: "100%", width: "100%", inset: 0 }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-5xl md:text-6xl text-cream drop-shadow-lg animate-fadeUp">
            About Serenova
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-4xl mb-6 text-sereno-green">
          Where Sustainability Meets Comfort
        </h2>
        <p className="text-lg text-neutral-700 leading-relaxed">
          Serenova Eco Village is designed as a modern eco-luxury resort 
          blending modular living with nature. From energy-efficient residences 
          to expansive communal gardens, our mission is to create a sustainable 
          haven for travelers who value sophistication and serenity.
        </p>
      </section>

      {/* Gallery */}
      <section className="px-6 md:px-20 grid md:grid-cols-2 gap-10 mb-20">
        <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
          <img
            src="/images/team.jpg"
            alt="Our Team"
            className="object-cover w-full h-80"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="font-serif text-3xl mb-4 text-sereno-green">Our Team</h3>
          <p className="text-neutral-700">
            Our passionate team is committed to redefining eco-luxury hospitality. 
            With expertise in sustainable architecture, guest services, and wellness, 
            we ensure every guest experiences harmony and comfort.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="font-serif text-3xl mb-4 text-sereno-green">Our Vision</h3>
          <p className="text-neutral-700">
            We believe that luxury and sustainability should go hand in hand. 
            Serenova is more than a place to stay—it’s a lifestyle where every detail 
            is designed to minimize environmental impact while maximizing your comfort.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
          <img
            src="/images/garden.jpg"
            alt="Serenova Gardens"
            className="object-cover w-full h-80"
          />
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
          <img
            src="/images/lounge.jpg"
            alt="Serenova Lounge"
            className="object-cover w-full h-80"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="font-serif text-3xl mb-4 text-sereno-green">Community & Comfort</h3>
          <p className="text-neutral-700">
            From our eco-lounge to the shared green spaces, every corner of Serenova 
            is built to encourage relaxation, connection, and peace of mind.
          </p>
        </div>
      </section>
    </main>
  );
}
