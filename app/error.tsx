"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
    </main>
  );
}
