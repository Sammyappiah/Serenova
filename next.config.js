/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // ✅ server mode
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: { typedRoutes: true },
  reactStrictMode: true,
};

module.exports = nextConfig;
