import Image from "next/image";
import Link from "next/link";

export default function Booking() {
  return (
    <main className="bg-[#FAF8F5] text-[#0F1915]">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Serenova Booking"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="font-serif text-5xl md:text-6xl text-white drop-shadow-lg">
            Book Your Stay
          </h1>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="font-serif text-4xl text-center mb-12 text-[#2E6B4F]">
          Our Residences
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Accessible Suite */}
          <div className="rounded-2xl shadow-lg overflow-hidden bg-white flex flex-col">
            <Image
              src="/images/accessible.jpg"
              alt="Accessible Suite"
              width={600}
              height={400}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between text-center">
              <div>
                <h3 className="font-serif text-2xl mb-2">Accessible Suite</h3>
                <p className="text-neutral-600 mb-4">€70 / night</p>
                <p className="text-neutral-700 mb-6 text-sm">
                  Thoughtfully designed for comfort and accessibility, perfect
                  for up to 2 guests.
                </p>
              </div>
              <Link
                href="/booking/accessible"
                className="inline-block px-6 py-3 rounded-xl bg-[#2E6B4F] text-white hover:bg-[#24523d] transition"
              >
                View Details
              </Link>
            </div>
          </div>

          {/* Deluxe Room */}
          <div className="rounded-2xl shadow-lg overflow-hidden bg-white flex flex-col">
            <Image
              src="/images/deluxe.jpg"
              alt="Deluxe Room"
              width={600}
              height={400}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between text-center">
              <div>
                <h3 className="font-serif text-2xl mb-2">Deluxe Room</h3>
                <p className="text-neutral-600 mb-4">€70 / night</p>
                <p className="text-neutral-700 mb-6 text-sm">
                  A serene room with modern design, ideal for couples seeking
                  relaxation in nature.
                </p>
              </div>
              <Link
                href="/booking/deluxe"
                className="inline-block px-6 py-3 rounded-xl bg-[#2E6B4F] text-white hover:bg-[#24523d] transition"
              >
                View Details
              </Link>
            </div>
          </div>

          {/* Family Room */}
          <div className="rounded-2xl shadow-lg overflow-hidden bg-white flex flex-col">
            <Image
              src="/images/family.jpg"
              alt="Family Room"
              width={600}
              height={400}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between text-center">
              <div>
                <h3 className="font-serif text-2xl mb-2">Family Room</h3>
                <p className="text-neutral-600 mb-4">€85 / night</p>
                <p className="text-neutral-700 mb-6 text-sm">
                  Spacious and inviting, the Family Room accommodates up to 4
                  guests with comfort and style.
                </p>
              </div>
              <Link
                href="/booking/family"
                className="inline-block px-6 py-3 rounded-xl bg-[#2E6B4F] text-white hover:bg-[#24523d] transition"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
