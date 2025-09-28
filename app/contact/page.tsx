"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <main className="bg-cream text-deep-forest px-6 md:px-20 py-16">
      <h1 className="font-serif text-4xl mb-8 text-sereno-green">Contact Us</h1>
      <p className="text-neutral-700 mb-10 max-w-2xl">
        Questions, group stays, or special requests? We’re here to help.
      </p>

      <motion.form
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-xl space-y-6 bg-white p-6 rounded-2xl shadow-xl"
        onSubmit={(e) => {
          e.preventDefault();
          setStatus("sent");
        }}
      >
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            required
            className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sereno-green"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            required
            className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sereno-green"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            rows={5}
            required
            className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sereno-green"
          />
        </div>
        <button className="rounded-xl bg-sereno-green text-white px-6 py-3 hover:bg-[#24523d] transition">
          Send Message
        </button>
        {status === "sent" && (
          <p className="text-sm text-sereno-green">Thanks! We’ll get back to you shortly.</p>
        )}
      </motion.form>
    </main>
  );
}
