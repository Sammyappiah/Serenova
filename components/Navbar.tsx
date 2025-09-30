"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const active = pathname?.startsWith(href);
    return (
      <Link
        href={href}
        className={`px-4 py-2 rounded-xl transition lift ${
          active
            ? "bg-black text-white shadow-md"
            : "hover:bg-black/5"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 backdrop-blur bg-white/70">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/home" className="text-xl font-semibold tracking-wide heading">
          Serenova
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink href="/home" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/booking" label="Booking" />
          <NavLink href="/contact" label="Contact" />
        </nav>
      </div>
    </header>
  );
}
