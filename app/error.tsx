"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream text-deep-forest">
      <div className="text-center">
        <h1 className="text-6xl font-serif mb-4">Something went wrong</h1>
        <p className="text-lg mb-6">Please try again or go back home.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 rounded-xl bg-sereno-green text-white hover:bg-[#24523d] transition"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
