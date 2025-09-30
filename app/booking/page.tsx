import { RoomCard } from "@/components/RoomCard";

export const metadata = {
  title: "Serenova — Booking",
  description: "Choose your room and begin your stay.",
  openGraph: { title:"Serenova — Booking", description:"Choose your room.", images:["/images/og.jpg"] }
};

const rooms = [
  { id:"deluxe", name:"Deluxe Room", img:"/images/deluxe.jpg", price:180, guests:2, desc:"Elegance with a view, perfect for two." },
  { id:"accessible", name:"Accessible Suite", img:"/images/accessible.jpg", price:150, guests:2, desc:"Barrier-free comfort with refined finishes." },
  { id:"family", name:"Family Room", img:"/images/family.jpg", price:220, guests:4, desc:"Space and serenity for the whole family." },
];

export default function BookingPage(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="h-serif text-3xl mb-2">Choose your stay</h1>
      <p className="text-gray-600 mb-8">Handpicked rooms crafted for comfort.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {rooms.map((r) => <RoomCard key={r.id} {...r} />)}
      </div>
    </div>
  );
}
