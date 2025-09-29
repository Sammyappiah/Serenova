cat > next.config.js <<'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",        // ✅ force Node.js server build
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: true,
  experimental: { typedRoutes: true }
};

module.exports = nextConfig;
EOF
