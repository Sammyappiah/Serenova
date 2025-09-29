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
      <body style={{ textAlign: "center", padding: "3rem" }}>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button
          onClick={() => reset()}
          style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
