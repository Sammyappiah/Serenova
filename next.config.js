/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // server build, no static export
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: { typedRoutes: true },
  generateBuildId: async () => {
    return "serenova-build"; // ensures clean rebuild
  },
};

module.exports = nextConfig;
