/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // force Node server mode, not static export
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: { typedRoutes: true },
  reactStrictMode: true,
};

module.exports = nextConfig;
