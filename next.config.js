/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // ✅ force server build (no static export)
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
