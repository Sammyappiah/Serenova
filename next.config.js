/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // ✅ Only server build, no static export
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: { typedRoutes: true },
  reactStrictMode: true,
};

module.exports = nextConfig;
