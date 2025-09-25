// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar(){
  const pathname = usePathname();
  const [scrolled,setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[]);

  const linkClass = (href:string) =>
    `transition ${pathname===href ? "text-[#2E6B4F] font-medium" : "text-neutral-700 hover:text-[#2E6B4F]"}`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "backdrop-blur bg-white/70 border-b border-black/10" : ""}`}>
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-2xl text-[#2E6B4F] tracking-wide">Serenova</Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/booking" className={linkClass("/booking")}>Booking</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </div>
        <div className="md:hidden text-sm text-neutral-600">Menu</div>
      </nav>
    </header>
  );
}
