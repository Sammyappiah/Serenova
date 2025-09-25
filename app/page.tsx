import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Serenova aerial"
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
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
            <Link
              href="/booking"
              className="btn btn-primary mt-6 inline-block"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="section">
        <div className="container text-center max-w-3xl mx-auto animate-fadeUp">
          <h2 className="section-title mb-4">Welcome to Serenova</h2>
          <p className="text-neutral-700 leading-relaxed">
            Nestled in nature, Serenova Eco Village blends eco-friendly
            architecture with the comfort of a luxury retreat. From solar-powered
            homes to landscaped gardens and community lounges, every detail is
            crafted for calm and connection.
          </p>
        </div>
      </section>
    </>
  );
}
