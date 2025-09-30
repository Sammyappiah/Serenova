import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function RoomCard({
  id, name, img, price, guests, desc,
}: { id:string; name:string; img:string; price:number; guests:number; desc:string; }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 28px 70px rgba(0,0,0,0.18)" }}
      className="rounded-3xl overflow-hidden bg-white border border-black/5"
    >
      <div className="relative h-56">
        <Image src={img} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div className="h-serif text-white text-lg drop-shadow">{name}</div>
          <div className="rounded-full bg-white/85 px-3 py-1 text-sm shadow">
            €{price}/night
          </div>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <p className="text-sm text-gray-600">{desc}</p>
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">Max {guests} guests</div>
          <Link href={`/booking/${id}`} className="rounded-xl px-4 py-2 bg-black text-white text-sm hover:opacity-90">
            Book now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
