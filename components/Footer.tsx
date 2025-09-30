import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24">
      <div className="hr max-w-6xl mx-auto mb-10" />
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="text-lg heading">Serenova</div>
          <p className="text-sm mt-2 text-gray-600">
            Where elegance meets ease. Your sanctuary awaits.
          </p>
        </div>
        <div>
          <div className="font-medium">Explore</div>
          <ul className="mt-3 space-y-1 text-sm">
            <li><Link href="/home" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/booking" className="hover:underline">Booking</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Contact</div>
          <p className="text-sm mt-3 text-gray-600">hello@serenova.example</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-8">
        © {new Date().getFullYear()} Serenova. All rights reserved.
      </div>
    </footer>
  );
}
