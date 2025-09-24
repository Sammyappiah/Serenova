"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F1915] text-[#FAF8F5] py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-serif mb-4 text-[#FAF8F5]">Serenova</h2>
          <p className="text-sm text-gray-300">
            Eco-luxury resort village offering modern comfort in harmony with nature.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#2E6B4F] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#2E6B4F] transition">About</Link></li>
            <li><Link href="/booking" className="hover:text-[#2E6B4F] transition">Booking</Link></li>
            <li><Link href="/contact" className="hover:text-[#2E6B4F] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-300">Email: info@serenova.ro</p>
          <p className="text-sm text-gray-300">Constanța, Romania</p>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Serenova. All rights reserved.
      </div>
    </footer>
  );
}
