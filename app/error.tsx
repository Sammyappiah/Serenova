"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          border: "1px solid #333",
          borderRadius: "6px",
          background: "#f5f5f5",
          cursor: "pointer",
        }}
      >
        Try again
      </button>
    </main>
  );
}
