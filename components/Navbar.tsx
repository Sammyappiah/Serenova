"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur border-b border-black/10">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="font-serif text-2xl text-sereno-green tracking-wide">
          Serenova
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/about">About</Link>
          <Link className="nav-link" href="/booking">Booking</Link>
          <Link className="nav-link" href="/contact">Contact</Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Open menu"
          className="md:hidden p-2 rounded-xl border border-black/10"
          onClick={() => setIsOpen((s) => !s)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-md px-6 py-4"
          >
            <div className="flex flex-col gap-4">
              <Link href="/" className="mobile-link" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="mobile-link" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/booking" className="mobile-link" onClick={() => setIsOpen(false)}>
                Booking
              </Link>
              <Link href="/contact" className="mobile-link" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
