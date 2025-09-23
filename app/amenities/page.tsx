import Image from "next/image";

export const metadata = {
  title: "Amenities • Serenova",
  description:
    "Thoughtful, eco-friendly amenities at Serenova: solar power, outdoor kitchen & BBQ, EV charging, laundry house, gardens, reception, outdoor showers, and caravan-friendly facilities."
};

type Amenity = {
  title: string;
  desc: string;
  img: string;
  alt: string;
};

const AMENITIES: Amenity[] = [
  {
    title: "Community Lounge",
    desc: "A calm, light-filled lounge with comfortable seating and garden views.",
    img: "/images/lounge.jpg",
    alt: "Community lounge interior"
  },
  {
    title: "Solar Powered",
    desc: "Clean energy across the village, anchored by a large solar field.",
    img: "/images/solar.jpg",
    alt: "Solar panel field"
  },
  {
    title: "Outdoor Kitchen & BBQ",
    desc: "Covered preparation areas, grills, and communal dining for gatherings.",
    img: "/images/outdoor-kitchen.jpg",
    alt: "Outdoor kitchen with BBQ and coverings"
  },
  {
    title: "EV Charging",
    desc: "On-site electric vehicle chargers beside landscaped walkways.",
    img: "/images/ev-charging.jpg",
    alt: "EV charging bays"
  },
  {
    title: "Laundry House",
    desc: "Modern, efficient laundry with a minimalist, easy-to-use layout.",
    img: "/images/laundry.jpg",
    alt: "Laundry house exterior"
  },
  {
    title: "Landscaped Gardens",
    desc: "Shaded paths, native plants, and quiet places to pause.",
    img: "/images/gardens.jpg",
    alt: "Landscaped gardens"
  },
  {
    title: "Reception",
    desc: "A welcoming and efficient arrival experience with Serenova branding.",
    img: "/images/reception.jpg",
    alt: "Serenova reception building"
  },
  {
    title: "Outdoor Showers & Toilets",
    desc: "Spacious, private facilities designed for caravans and trailers.",
    img: "/images/outdoor-showers.jpg",
    alt: "Outdoor shower and toilet cabins"
  },
  {
    title: "Caravan & Trailer Friendly",
    desc: "Dedicated bays with clear access driveways near shared facilities.",
    img: "/images/caravans.jpg",
    alt: "Caravans and trailers parked neatly"
  }
];

export default function AmenitiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/images/lounge.jpg"
          alt="Community lounge hero"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-start justify-start pt-24 pl-8 md:pt-28 md:pl-16">
          <div className="animate-fadeUp max-w-2xl">
            <h1 className="font-serif text-4xl md:text-6xl text-cream mb-3">
              Amenities
            </h1>
            <p className="text-cream/90 text-lg md:text-xl">
              Thoughtful spaces for comfort, community, and sustainable living.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((a) => (
            <article
              key={a.title}
              className="rounded-2xl bg-white shadow-soft overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={a.img}
                  alt={a.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h2 className="font-serif text-xl mb-2">{a.title}</h2>
                <p className="text-neutral-700">{a.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
