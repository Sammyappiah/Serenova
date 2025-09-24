import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-dvh flex items-center justify-center bg-[#FAF8F5]">
      <div className="text-center max-w-xl px-6">
        <h1 className="font-serif text-4xl mb-3 text-[#0F1915]">Page not found</h1>
        <p className="text-neutral-700 mb-6">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <Link href="/" className="inline-block rounded-2xl px-5 py-3 bg-[#2E6B4F] text-white">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
