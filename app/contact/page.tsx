import Image from "next/image";

export const metadata = { title: "Contact — Serenova" };

export default function Contact() {
  return (
    <section className="section">
      <div className="container grid gap-10 md:grid-cols-2">
        <div className="card overflow-hidden">
          <Image src="/images/map.jpg" alt="Serenova Location" width={800} height={600} />
        </div>
        <div>
          <h1 className="section-title">Contact Serenova</h1>
          <p className="text-neutral-700 mb-4">
            We’d love to hear from you. Reach us via:
          </p>
          <ul className="space-y-2 text-neutral-700">
            <li><strong>Phone:</strong> +40 123 456 789</li>
            <li><strong>Email:</strong> info@serenova.com</li>
            <li><strong>Address:</strong> Constanța, Romania</li>
          </ul>
          <form className="mt-6 card card-content">
            <label className="flex flex-col mb-3">
              <span className="mb-1 text-sm">Name</span>
              <input className="rounded-xl border p-3" type="text" required />
            </label>
            <label className="flex flex-col mb-3">
              <span className="mb-1 text-sm">Email</span>
              <input className="rounded-xl border p-3" type="email" required />
            </label>
            <label className="flex flex-col mb-3">
              <span className="mb-1 text-sm">Subject</span>
              <input className="rounded-xl border p-3" type="text" />
            </label>
            <label className="flex flex-col mb-3">
              <span className="mb-1 text-sm">Message</span>
              <textarea className="rounded-xl border p-3" rows={4}></textarea>
            </label>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
