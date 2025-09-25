import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-white">
      <div className="container py-10 text-center">
        <div className="font-serif text-xl mb-4">SERENOVA</div>
        <div className="flex items-center justify-center gap-6 mb-4 text-sm">
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/booking" className="footer-link">Booking</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
        </div>
        <div className="flex items-center justify-center gap-5 mb-4">
          {/* Minimal social placeholders (SVGs) */}
          <a aria-label="Instagram" className="footer-link" href="#" target="_blank" rel="noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" stroke="currentColor"/><circle cx="12" cy="12" r="3.5" stroke="currentColor"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
          </a>
          <a aria-label="Facebook" className="footer-link" href="#" target="_blank" rel="noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14 8h2V5h-2c-1.657 0-3 1.343-3 3v2H9v3h2v6h3v-6h2.142L17 10h-3V8c0-.552.448-1 1-1Z" fill="currentColor"/></svg>
          </a>
        </div>
        <div className="text-neutral-500 text-sm">© {new Date().getFullYear()} Serenova. All rights reserved.</div>
      </div>
    </footer>
  );
}
