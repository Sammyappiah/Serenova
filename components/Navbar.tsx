"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-[#FAF8F5] shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif text-[#2E6B4F]">
          Serenova
        </Link>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-[#2E6B4F] transition">Home</Link>
          <Link href="/about" className="hover:text-[#2E6B4F] transition">About</Link>
          <Link href="/booking" className="hover:text-[#2E6B4F] transition">Booking</Link>
          <Link href="/contact" className="hover:text-[#2E6B4F] transition">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
