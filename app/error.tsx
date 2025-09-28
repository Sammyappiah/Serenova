"use client";

export default function ErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream text-deep-forest">
      <div className="text-center">
        <h1 className="text-6xl font-serif mb-4">500</h1>
        <p className="text-lg mb-6">
          Something went wrong. Please try again later.
        </p>
        <a
          href="/"
          className="px-6 py-3 rounded-xl bg-sereno-green text-white hover:bg-[#24523d] transition"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
