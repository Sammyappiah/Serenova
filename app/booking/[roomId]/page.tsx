"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { motion } from "framer-motion";

const ROOMS = {
  deluxe:{ name:"Deluxe Room", img:"/images/deluxe.jpg", price:180, maxGuests:2 },
  accessible:{ name:"Accessible Suite", img:"/images/accessible.jpg", price:150, maxGuests:2 },
  family:{ name:"Family Room", img:"/images/family.jpg", price:220, maxGuests:4 },
} as const;

export const metadata = {
  title: "Room details — Serenova",
  description: "Select dates and confirm your stay.",
  openGraph: { title:"Room details — Serenova", images:["/images/og.jpg"] }
};

export default function RoomDetailPage(){
  const { roomId } = useParams<{ roomId: keyof typeof ROOMS }>();
  const router = useRouter();
  const room = ROOMS[roomId] ?? ROOMS.deluxe;

  const [checkIn, setCheckIn] = useState<string>(dayjs().add(1,"day").format("YYYY-MM-DD"));
  const [checkOut, setCheckOut] = useState<string>(dayjs().add(3,"day").format("YYYY-MM-DD"));
  const [guests, setGuests] = useState<number>(1);

  const nights = useMemo(()=> Math.max(dayjs(checkOut).diff(dayjs(checkIn),"day"),1), [checkIn,checkOut]);
  const total  = useMemo(()=> nights * room.price, [nights, room.price]);

  const proceed = ()=>{
    if(guests > room.maxGuests){ alert(`Max ${room.maxGuests} guests for the ${room.name}.`); return; }
    const qs = new URLSearchParams({
      roomId:String(roomId), roomName:room.name, price:String(room.price),
      checkIn, checkOut, nights:String(nights), guests:String(guests),
      amount:String(total), currency:"eur",
    });
    router.push(`/checkout?${qs.toString()}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="relative h-[48vh] rounded-3xl overflow-hidden shadow-2xl">
        <Image src={room.img} alt={room.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-5 left-5 h-serif text-white text-2xl">{room.name}</div>
      </motion.div>

      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="card p-6 space-y-5">
        <div className="text-sm text-gray-600">€{room.price}/night · Max {room.maxGuests} guests</div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="text-sm">Check-in</label>
            <input type="date" value={checkIn} onChange={e=>setCheckIn(e.target.value)} className="w-full mt-1 rounded-2xl border p-3" />
          </div>
          <div><label className="text-sm">Check-out</label>
            <input type="date" value={checkOut} onChange={e=>setCheckOut(e.target.value)} className="w-full mt-1 rounded-2xl border p-3" />
          </div>
          <div><label className="text-sm">Guests</label>
            <input type="number" min={1} max={room.maxGuests} value={guests} onChange={e=>setGuests(parseInt(e.target.value||"1"))} className="w-full mt-1 rounded-2xl border p-3" />
          </div>
          <div className="flex items-end">
            <div className="w-full rounded-2xl border p-3">
              <div className="text-sm text-gray-600">{nights} night(s)</div>
              <div className="font-semibold">Total: €{total}</div>
            </div>
          </div>
        </div>
        <button onClick={proceed} className="btn-primary w-full">Proceed to Payment</button>
      </motion.div>
    </div>
  );
}
