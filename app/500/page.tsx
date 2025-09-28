export default function ServerError() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream text-deep-forest">
      <div className="text-center">
        <h1 className="text-6xl font-serif mb-4">500</h1>
        <p className="text-lg mb-6">Oops! Something went wrong on our side.</p>
        <a
          href="/"
          className="px-6 py-3 bg-sereno-green text-white rounded-lg hover:bg-[#24523d] transition"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
