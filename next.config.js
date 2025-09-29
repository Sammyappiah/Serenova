/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",   // ✅ server build only
  trailingSlash: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: { typedRoutes: true },
  reactStrictMode: true,
};

module.exports = nextConfig;
