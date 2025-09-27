import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Serenova Eco Village – Modern Eco-Luxury Resort",
  description: "Eco-friendly modular homes with modern comfort and natural serenity.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FAF8F5] text-[#0F1915] antialiased">
        {/* Navbar */}
        <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
          <nav className="container mx-auto flex h-16 items-center justify-between px-6">
            <Link href="/" className="font-serif text-2xl text-[#2E6B4F] tracking-wide">
              Serenova
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-[#2E6B4F] transition">Home</Link>
              <Link href="/about" className="hover:text-[#2E6B4F] transition">About</Link>
              <Link href="/booking" className="hover:text-[#2E6B4F] transition">Booking</Link>
              <Link href="/contact" className="hover:text-[#2E6B4F] transition">Contact</Link>
            </div>
          </nav>
        </header>

        {/* Page Content */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
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
            <div className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} Serenova. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
