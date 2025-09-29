/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // disable static export
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
