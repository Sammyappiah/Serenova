export default function ContactPage() {
  return (
    <main className="px-6 md:px-20 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl mb-6 text-sereno-green">Contact Us</h1>
        <p className="text-neutral-700 mb-8">
          Questions, special requests, or group bookings? Send us a message and we’ll reply promptly.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              required
              type="text"
              className="w-full rounded-xl border border-black/10 px-4 py-3 bg-white"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              required
              type="email"
              className="w-full rounded-xl border border-black/10 px-4 py-3 bg-white"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              required
              rows={5}
              className="w-full rounded-xl border border-black/10 px-4 py-3 bg-white"
              placeholder="How can we help?"
            />
          </div>

          <button type="submit" className="btn-primary w-full">Send Message</button>
        </form>
      </div>
    </main>
  );
}
