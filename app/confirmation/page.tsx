export const metadata = {
  title: "Booking confirmed — Serenova",
  description: "Your payment was successful.",
  openGraph: { title:"Booking confirmed — Serenova", images:["/images/og.jpg"] }
};

export default function ConfirmationPage(){
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="h-serif text-3xl">Payment confirmed 🎉</h1>
      <p className="text-gray-600 mt-3">Thank you for your booking. A confirmation email will follow shortly.</p>
      <a href="/home" className="btn-primary mt-8">Back to Home</a>
    </div>
  );
}
