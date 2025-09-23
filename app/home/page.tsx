import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
        <Image
          src="/hero.jpg"
          alt="Serenova reception view"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Caption Bar Below Hero */}
      <div className="w-full bg-green-900 text-white py-8 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to Serenova</h1>
        <p className="mt-3 text-lg md:text-xl text-gray-200">
          Eco-friendly stays in harmony with nature.
        </p>
      </div>
    </main>
  );
}

