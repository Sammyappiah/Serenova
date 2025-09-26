import Image from "next/image";

export default function About() {
  return (
    <main className="bg-[#FAF8F5] text-[#0F1915]">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/reception.jpg"
          alt="Serenova Reception"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="font-serif text-5xl md:text-6xl text-white drop-shadow-lg">
            About Serenova
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 md:px-20 text-center max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl mb-6 text-[#2E6B4F]">Our Story</h2>
        <p className="text-lg text-neutral-700 leading-relaxed">
          Serenova was founded on the belief that sustainable living can be both
          elegant and comfortable. Designed as a sanctuary where nature and
          architecture blend seamlessly, our eco-village offers a retreat from
          the ordinary while embracing modern luxuries.
        </p>
      </section>

      {/* 2×3 Image Grid */}
      <section className="px-6 md:px-20 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Image 1 */}
          <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
            <Image
              src="/images/reception.jpg"
              alt="Elegant Reception"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-serif text-xl text-[#2E6B4F]">
                Elegant Reception
              </h3>
            </div>
          </div>

          {/* Image 2 */}
          <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
            <Image
              src="/images/team.jpg"
              alt="Dedicated Team"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-serif text-xl text-[#2E6B4F]">
                Dedicated Team
              </h3>
            </div>
          </div>

          {/* Image 3 */}
          <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
            <Image
              src="/images/garden.jpg"
              alt="Tranquil Gardens"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-serif text-xl text-[#2E6B4F]">
                Tranquil Gardens
              </h3>
            </div>
          </div>

          {/* Image 4 */}
          <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
            <Image
              src="/images/lounge.jpg"
              alt="Relaxing Lounge"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-serif text-xl text-[#2E6B4F]">
                Relaxing Lounge
              </h3>
            </div>
          </div>

          {/* Image 5 */}
          <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
            <Image
              src="/images/deluxe.jpg"
              alt="Luxury Rooms"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-serif text-xl text-[#2E6B4F]">Luxury Rooms</h3>
            </div>
          </div>

          {/* Image 6 */}
          <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
            <Image
              src="/images/family.jpg"
              alt="Family Comfort"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-serif text-xl text-[#2E6B4F]">
                Family Comfort
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
