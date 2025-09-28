{/* Mobile Dropdown */}
{isOpen && (
  <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 animate-slideDown">
    <Link href="/" onClick={() => setIsOpen(false)} className="mobile-link">
      Home
    </Link>
    <Link href="/about" onClick={() => setIsOpen(false)} className="mobile-link">
      About
    </Link>
    <Link href="/booking" onClick={() => setIsOpen(false)} className="mobile-link">
      Booking
    </Link>
    <Link href="/contact" onClick={() => setIsOpen(false)} className="mobile-link">
      Contact
    </Link>
  </div>
)}
