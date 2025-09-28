/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // force server build, no export
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
