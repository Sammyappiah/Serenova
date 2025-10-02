export default function Footer() {
  return (
    <footer className="bg-[#fdfcf7] text-center py-6 border-t mt-12 text-gray-600">
      <p className="text-sm">© {new Date().getFullYear()} Serenova Hotel · All Rights Reserved</p>
      <div className="mt-2 space-x-4 text-sm">
        <a href="/" className="hover:text-green-700">Home</a>
        <a href="/about" className="hover:text-green-700">About</a>
        <a href="/booking" className="hover:text-green-700">Booking</a>
        <a href="/contact" className="hover:text-green-700">Contact</a>
      </div>
    </footer>
  );
}

