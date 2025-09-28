"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // If you don't have lucide-react, replace with simple SVGs or remove.

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="font-serif text-2xl text-sereno-green tracking-wide">
          Serenova
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/booking" className="nav-link">Booking</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Open Menu"
          className="md:hidden p-2 rounded hover:bg-neutral-100"
          onClick={() => setIsOpen((s) => !s)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 animate-slideDown">
          <Link href="/" onClick={() => setIsOpen(false)} className="mobile-link">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="mobile-link">About</Link>
          <Link href="/booking" onClick={() => setIsOpen(false)} className="mobile-link">Booking</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="mobile-link">Contact</Link>
        </div>
      )}
    </header>
  );
}
