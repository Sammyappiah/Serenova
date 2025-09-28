"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body className="min-h-screen flex flex-col items-center justify-center bg-cream text-deep-forest">
        <h1 className="text-6xl font-serif mb-4">500</h1>
        <p className="text-lg mb-6">Something went wrong on our side.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-sereno-green text-white rounded-lg hover:bg-[#24523d] transition"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
