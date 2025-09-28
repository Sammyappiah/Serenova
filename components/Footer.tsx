import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-white">
      <div className="container mx-auto py-10 text-center">
        <div className="font-serif text-xl mb-4">SERENOVA</div>
        <div className="flex items-center justify-center gap-6 mb-4 text-sm">
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/booking" className="footer-link">Booking</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
        </div>
        <div className="flex items-center justify-center gap-5 mb-4">
          <a aria-label="Instagram" href="#" target="_blank" rel="noreferrer">📸</a>
          <a aria-label="Facebook" href="#" target="_blank" rel="noreferrer">👍</a>
        </div>
        <div className="text-neutral-500 text-sm">© {new Date().getFullYear()} Serenova. All rights reserved.</div>
      </div>
    </footer>
  );
}
