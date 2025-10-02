export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
        <input type="text" placeholder="Name" className="w-full border rounded-lg p-3" />
        <input type="email" placeholder="Email" className="w-full border rounded-lg p-3" />
        <textarea placeholder="Message" rows={5} className="w-full border rounded-lg p-3"></textarea>
        <button className="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-lg w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}

