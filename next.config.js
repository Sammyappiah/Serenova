/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // server build only, no static export
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
