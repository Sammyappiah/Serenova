/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // 🚀 forces server output, no export
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: true,
};

module.exports = nextConfig;
