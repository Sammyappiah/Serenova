/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // prevents static export
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
