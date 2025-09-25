"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "nav-blur border-b border-black/10" : ""}`}>
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-2xl text-[#2E6B4F] tracking-wide">
          Serenova
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`transition ${active ? "text-[#2E6B4F] font-medium" : "text-neutral-700 hover:text-[#2E6B4F]"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
        <div className="md:hidden text-sm text-neutral-600">Menu</div>
      </nav>
    </header>
  );
}
