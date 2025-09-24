"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <html>
      <body>
        <section className="min-h-dvh flex items-center justify-center bg-[#FAF8F5]">
          <div className="text-center max-w-xl px-6">
            <h1 className="font-serif text-4xl mb-3 text-[#0F1915]">Something went wrong</h1>
            <p className="text-neutral-700 mb-6">Please try again or return to the homepage.</p>
            <div className="flex gap-3 justify-center">
              <button onClick={reset} className="rounded-2xl px-5 py-3 bg-[#2E6B4F] text-white">Try again</button>
              <Link href="/" className="rounded-2xl px-5 py-3 border border-neutral-300">Home</Link>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
