import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <div className="container flex flex-col items-center gap-4 py-8 text-sm md:flex-row md:justify-between">
        <div className="font-serif text-lg text-sereno-dark">SERENOVA</div>
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/amenities">Amenities</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="text-neutral-500">© {new Date().getFullYear()} Serenova. All rights reserved.</div>
      </div>
    </footer>
  );
}
