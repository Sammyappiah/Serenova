"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-cream text-deep-forest">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
          <p className="mb-6">{error.message}</p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-xl bg-sereno-green text-white hover:bg-[#24523d] transition"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
