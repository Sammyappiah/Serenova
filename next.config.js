/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // server build only
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: {
    typedRoutes: true,
  },
  // 🚫 Prevent Next from trying to export static 404/500
  trailingSlash: false,
};

module.exports = nextConfig;
