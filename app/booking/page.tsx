import Link from "next/link";
import Image from "next/image";
import { rooms } from "@/lib/rooms";

export default function BookingPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title text-center">Book Your Stay</h1>
        <p className="text-center text-neutral-700 mb-10">
          Choose the perfect option for your stay at Serenova.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="card overflow-hidden">
              <Image
                src={room.image}
                alt={room.title}
                width={600}
                height={400}
                className="h-56 w-full object-cover"
                priority={room.id === "deluxe"} 
              />
              <div className="p-6">
                <h2 className="font-serif text-xl mb-2">{room.title}</h2>
                <p className="text-neutral-600 mb-3">{room.description}</p>
                <p className="font-medium mb-4">€{room.price}/night</p>
                <Link href={`/booking/${room.id}`} className="btn btn-primary">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
