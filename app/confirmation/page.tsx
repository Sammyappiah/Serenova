import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <main className="px-6 md:px-20 py-24 text-center">
      <h1 className="font-serif text-4xl mb-4 text-sereno-green">Booking Confirmed</h1>
      <p className="text-neutral-700 mb-8">
        Thank you! A confirmation email is on its way. We can’t wait to host you.
      </p>
      <Link href="/" className="btn-primary">Back to Home</Link>
    </main>
  );
}
