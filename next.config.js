/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // ensure Node.js server build
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: true,
  experimental: { typedRoutes: true },
};

module.exports = nextConfig;
