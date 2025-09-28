"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-2xl text-sereno-green tracking-wide"
        >
          Serenova
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link className="hover:text-sereno-green transition" href="/">
            Home
          </Link>
          <Link className="hover:text-sereno-green transition" href="/about">
            About
          </Link>
          <Link className="hover:text-sereno-green transition" href="/booking">
            Booking
          </Link>
          <Link className="hover:text-sereno-green transition" href="/contact">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-deep-forest"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/booking" onClick={() => setIsOpen(false)}>
            Booking
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
