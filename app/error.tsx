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
          <h1 className="text-6xl font-serif mb-4">Something went wrong</h1>
          <p className="text-lg mb-6">
            We’re experiencing a problem. Please try again or return home.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-xl bg-sereno-green text-white hover:bg-[#24523d] transition"
          >
            Try Again
          </button>
          <a
            href="/"
            className="ml-4 px-6 py-3 rounded-xl bg-neutral-200 text-deep-forest hover:bg-neutral-300 transition"
          >
            Back to Home
          </a>
        </div>
      </body>
    </html>
  );
}
