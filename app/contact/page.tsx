import Image from "next/image";

export const metadata = { title: "Contact – Serenova" };

export default function Contact() {
  return (
    <section className="section">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="figure">
          <Image
            src="/images/map.jpg"
            alt="Map to Serenova"
            width={1200}
            height={800}
            className="h-[420px] w-full object-cover"
          />
          <figcaption className="figcap">Find us and plan your route.</figcaption>
        </div>

        <div className="card">
          <div className="card-content">
            <h1 className="section-title mb-4">Contact</h1>
            <p className="text-neutral-700 mb-4">
              We’d love to hear from you about dates, rooms, or special requests.
            </p>
            <form className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input className="w-full rounded-xl border border-neutral-300 px-4 py-3" required />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" className="w-full rounded-xl border border-neutral-300 px-4 py-3" required />
              </div>
              <div>
                <label className="block text-sm mb-1">Subject</label>
                <input className="w-full rounded-xl border border-neutral-300 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea className="w-full rounded-xl border border-neutral-300 px-4 py-3 min-h-[120px]" />
              </div>
              <button className="btn btn-primary">Send Message</button>
            </form>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-neutral-700">
              <div>
                <div className="font-medium mb-1">Phone</div>
                <div>+40 123 456 789</div>
              </div>
              <div>
                <div className="font-medium mb-1">Email</div>
                <div>info@serenova.ro</div>
              </div>
              <div>
                <div className="font-medium mb-1">Address</div>
                <div>125 Green Way, Eco Village</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
