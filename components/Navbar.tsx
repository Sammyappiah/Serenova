"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/amenities", label: "Amenities" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-cream/90 border-b border-neutral-200">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-wide">SERENOVA</Link>
        <nav className="hidden gap-6 md:flex">
          {nav.map(n => (
            <Link
              key={n.href}
              href={n.href}
              className={`transition-colors duration-300 hover:text-sereno-green ${
                pathname === n.href ? "text-sereno-green font-medium" : "text-deep-forest"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden rounded-xl border px-3 py-2 transition hover:bg-sereno-green hover:text-white"
          onClick={()=>setOpen(!open)}
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="container pb-4 md:hidden">
          <div className="flex flex-col gap-2">
            {nav.map(n => (
              <Link
                key={n.href}
                href={n.href}
                onClick={()=>setOpen(false)}
                className="rounded-xl bg-white p-3 shadow-soft transition hover:bg-sereno-green hover:text-white"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
