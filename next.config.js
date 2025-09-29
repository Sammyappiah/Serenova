/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // server build only
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: { typedRoutes: true },
  generateBuildId: async () => "serenova-build",
  // Prevent static HTML export of legacy error pages
  skipTrailingSlashRedirect: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
