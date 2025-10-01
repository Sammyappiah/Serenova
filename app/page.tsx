"use client";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#fdfcf7] text-gray-900">
      <h1 className="text-5xl font-bold mb-4">Welcome to Serenova</h1>
      <p className="text-xl mb-8">Your comfort, elegance, and tranquility in the heart of Romania.</p>
      <a
        href="/booking"
        className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Book Your Stay
      </a>
    </main>
  );
}
