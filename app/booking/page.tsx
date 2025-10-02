import Image from "next/image";
import Link from "next/link";

const rooms = [
  { id: "deluxe", name: "Deluxe Room", img: "/deluxe.jpg", desc: "Spacious comfort with elegant decor.", price: "€120/night" },
  { id: "accessible", name: "Accessible Suite", img: "/accessible.jpg", desc: "Designed for comfort and accessibility.", price: "€150/night" },
  { id: "family", name: "Family Room", img: "/family.jpg", desc: "Perfect for families with extra space.", price: "€180/night" },
];

export default function BookingPage() {
  return (
    <div className="bg-cream text-dark py-20 px-6 max-w-7xl mx-auto">
      <div className="prose prose-xl text-center mb-12">
        <h1>Book Your Stay</h1>
        <p>Choose from our range of elegant rooms tailored to your needs.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <Image src={room.img} alt={room.name} width={500} height={400} className="object-cover w-full h-60" />
            <div className="p-6 prose">
              <h2>{room.name}</h2>
              <p>{room.desc}</p>
              <p className="font-semibold text-green">{room.price}</p>
              <Link href={`/booking/${room.id}`} className="inline-block mt-4 bg-green text-white px-4 py-2 rounded-lg hover:bg-green-800">
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
