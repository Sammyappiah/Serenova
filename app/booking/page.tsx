import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    id: "deluxe",
    title: "DELUXE ROOM",
    price: 70,
    image: "/images/deluxe.jpg",
    desc: "Minimalist comfort with natural materials and soft daylight.",
  },
  {
    id: "accessible",
    title: "ACCESSIBLE SUITE",
    price: 70,
    image: "/images/accessible.jpg",
    desc: "Step-free entry, roll-in shower, and refined finishes.",
  },
  {
    id: "family",
    title: "FAMILY ROOM",
    price: 85,
    image: "/images/family.jpg",
    desc: "Spacious layout with sleeping for up to four guests.",
  },
  {
    id: "caravan",
    title: "CARAVAN & TRAILER PITCH",
    price: 40,
    image: "/images/caravans.jpg",
    desc: "Generous spaces with facilities and landscaped surroundings.",
  },
];

export const metadata = { title: "Booking – Serenova" };

export default function Booking() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title mb-8">Choose Your Stay</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rooms.map(r => (
            <article key={r.id} className="card">
              <Image src={r.image} alt={r.title} width={1200} height={800} className="h-64 w-full object-cover" />
              <div className="card-content">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl">{r.title}</h3>
                  <div className="text-[#2E6B4F] font-medium">€{r.price}/night</div>
                </div>
                <p className="text-neutral-700 mt-2">{r.desc}</p>
                <Link href={`/booking/${r.id}`} className="btn btn-primary mt-4 w-full text-center">
                  Book Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
