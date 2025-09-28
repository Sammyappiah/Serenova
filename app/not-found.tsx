export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-cream text-deep-forest">
      <h1 className="text-6xl font-serif mb-4">404</h1>
      <p className="text-lg mb-6">Page not found.</p>
      <a
        href="/"
        className="px-6 py-3 bg-sereno-green text-white rounded-lg hover:bg-[#24523d] transition"
      >
        Back to Home
      </a>
    </main>
  );
}
