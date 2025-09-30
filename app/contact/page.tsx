export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Contact us</h1>
      <p className="text-gray-600 mb-8">We’d love to hear from you.</p>
      <form className="bg-white rounded-2xl p-6 shadow border border-black/5 space-y-4">
        <input className="w-full border rounded-xl p-3" placeholder="Your name" />
        <input className="w-full border rounded-xl p-3" placeholder="Email address" />
        <textarea className="w-full border rounded-xl p-3 h-40" placeholder="Your message" />
        <button className="px-5 py-3 rounded-xl bg-black text-white font-medium hover:opacity-90">
          Send message
        </button>
      </form>
    </div>
  );
}
