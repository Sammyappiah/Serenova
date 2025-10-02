export default function CheckoutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
        <p className="text-gray-700">Stripe payment integration will go here.</p>
        <button className="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-lg w-full">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
