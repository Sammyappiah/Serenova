/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // ensure server build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
