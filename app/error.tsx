"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-cream text-deep-forest">
        <div className="text-center">
          <h1 className="text-6xl font-serif mb-4">500 - Server Error</h1>
          <p className="text-lg mb-6">Something went wrong on our side.</p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-xl bg-sereno-green text-white hover:bg-[#24523d] transition"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
