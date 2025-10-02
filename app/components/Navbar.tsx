"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#fdfcf7] shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-green-800">
        <Link href="/">Serenova</Link>
      </div>
      <div className="space-x-6 text-lg">
        <Link className="hover:text-green-700 transition" href="/">Home</Link>
        <Link className="hover:text-green-700 transition" href="/about">About</Link>
        <Link className="hover:text-green-700 transition" href="/booking">Booking</Link>
        <Link className="hover:text-green-700 transition" href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
