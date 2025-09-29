<<'EOF'
"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <a href="/" style={{ color: "blue" }}>Back to Home</a>
    </main>
  );
}
EOF

cat > app/not-found.tsx <<'EOF'
export default function NotFound() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <a href="/" style={{ color: "blue" }}>Back to Home</a>
    </main>
  );
}
EOF
