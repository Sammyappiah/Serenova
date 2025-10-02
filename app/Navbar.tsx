"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#fdfcf7] shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-green-700">
        <Link href="/">Serenova</Link>
      </div>
      <div className="space-x-6 text-lg">
        <Link href="/" className="hover:text-green-700">Home</Link>
        <Link href="/about" className="hover:text-green-700">About</Link>
        <Link href="/booking" className="hover:text-green-700">Booking</Link>
        <Link href="/contact" className="hover:text-green-700">Contact</Link>
      </div>
    </nav>
  );
}
