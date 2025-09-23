import Image from "next/image";

const amenities = [
  {
    title: "Solar Power",
    description: "Clean renewable energy across the village.",
    image: "/images/solar.jpg",
  },
  {
    title: "Outdoor Showers & Toilets",
    description: "Eco-friendly facilities for caravans and trailers.",
    image: "/images/showers.jpg",
  },
  {
    title: "Laundry House",
    description: "Modern shared laundry with eco machines.",
    image: "/images/laundry.jpg",
  },
  {
    title: "Reception",
    description: "Welcoming staff and helpful guest services.",
    image: "/images/reception.jpg",
  },
];

export default function Amenities() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Amenities</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {amenities.map((item) => (
          <div
            key={item.title}
            className="flex flex-col rounded-2xl overflow-hidden shadow-lg bg-white"
          >
            <div className="w-full h-56">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 flex-grow">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

