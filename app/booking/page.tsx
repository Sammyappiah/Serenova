import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/lib/rooms";
import { motion } from "framer-motion";

export default function BookingPage() {
  return (
    <main className="px-6 md:px-20 py-16">
      <header className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="font-serif text-5xl mb-4 text-sereno-green">Book Your Stay</h1>
        <p className="text-neutral-700 text-lg">
          Pick your perfect space — designed for rest, ease, and connection with nature.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-10">
        {rooms.map((room, i) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="card"
          >
            <Image
              src={room.image}
              alt={room.name}
              width={1200}
              height={900}
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="font-serif text-2xl mb-2">{room.name}</h3>
              <p className="text-neutral-600 mb-1">€{room.price} / night</p>
              <p className="text-neutral-600 mb-4">Up to {room.maxGuests} guests</p>
              <Link href={`/booking/${room.id}`} className="btn-primary">View Details</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
