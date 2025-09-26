"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition",
        scrolled ? "backdrop-blur bg-white/70 shadow-sm" : "bg-transparent",
      ].join(" ")}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="font-serif text-2xl tracking-wide text-[#2E6B4F]"
          onClick={() => setOpen(false)}
        >
          Serenova
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/about">About</Link>
          <Link className="nav-link" href="/booking">Booking</Link>
          <Link className="nav-link" href="/contact">Contact</Link>
        </div>

        {/* Mobile */}
        <button
          aria-label="Menu"
          className="md:hidden rounded-xl border px-3 py-1 text-sm text-neutral-700"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <Link className="nav-link" href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link className="nav-link" href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link className="nav-link" href="/booking" onClick={() => setOpen(false)}>Booking</Link>
            <Link className="nav-link" href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
