import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FAF8F5] text-[#0F1915]">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Serenova Eco Village"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fadeUp px-4">
            <h1 className="font-serif text-5xl md:text-7xl text-[#FAF8F5] mb-6 drop-shadow-lg">
              A Modern Eco-Friendly Village
            </h1>
            <p className="text-lg md:text-2xl text-[#FAF8F5] font-light drop-shadow">
              Sustainable design, modular comfort, and natural serenity.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/images/lounge.jpg"
            alt="Lounge at Serenova"
            width={800}
            height={600}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl mb-6 text-[#2E6B4F]">
            Welcome to Serenova
          </h2>
          <p className="text-lg text-neutral-700 mb-6">
            Discover our eco-luxury village where sustainability meets
            sophistication. From solar-powered residences to lush gardens,
            Serenova blends elegance with harmony in nature.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 rounded-xl bg-[#2E6B4F] text-white hover:bg-[#24523d] transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="font-serif text-4xl text-center mb-12 text-[#2E6B4F]">
          Our Residences
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Accessible Suite */}
          <div className="rounded-2xl shadow-lg overflow-hidden bg-[#FAF8F5]">
            <Image
              src="/images/accessible.jpg"
              alt="Accessible Suite"
              width={500}
              height={400}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-serif text-2xl mb-2">Accessible Suite</h3>
              <p className="text-neutral-600 mb-4">€70 / night</p>
              <Link
                href="/booking/accessible"
                className="inline-block px-5 py-2 rounded-lg bg-[#2E6B4F] text-white hover:bg-[#24523d] transition"
              >
                View Details
              </Link>
            </div>
          </div>

          {/* Deluxe Room */}
          <div className="rounded-2xl shadow-lg overflow-hidden bg-[#FAF8F5]">
            <Image
              src="/images/deluxe.jpg"
              alt="Deluxe Room"
              width={500}
              height={400}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-serif text-2xl mb-2">Deluxe Room</h3>
              <p className="text-neutral-600 mb-4">€70 / night</p>
              <Link
                href="/booking/deluxe"
                className="inline-block px-5 py-2 rounded-lg bg-[#2E6B4F] text-white hover:bg-[#24523d] transition"
              >
                View Details
              </Link>
            </div>
          </div>

          {/* Family Room */}
          <div className="rounded-2xl shadow-lg overflow-hidden bg-[#FAF8F5]">
            <Image
              src="/images/family.jpg"
              alt="Family Room"
              width={500}
              height={400}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-serif text-2xl mb-2">Family Room</h3>
              <p className="text-neutral-600 mb-4">€85 / night</p>
              <Link
                href="/booking/family"
                className="inline-block px-5 py-2 rounded-lg bg-[#2E6B4F] text-white hover:bg-[#24523d] transition"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-20 text-center bg-[#FAF8F5]">
        <h2 className="font-serif text-3xl md:text-4xl mb-6 text-[#2E6B4F]">
          Ready to Begin Your Journey?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-neutral-700 mb-8">
          Book your stay at Serenova and experience modern eco-living in harmony
          with nature.
        </p>
        <Link
          href="/booking"
          className="inline-block px-8 py-4 rounded-xl bg-[#2E6B4F] text-white hover:bg-[#24523d] transition text-lg"
        >
          Book Now
        </Link>
      </section>
    </main>
  );
}
