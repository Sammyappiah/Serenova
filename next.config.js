/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    typedRoutes: true,
  },
  // Disable static export of legacy 500.html
  generateBuildId: async () => {
    return "serenova-build";
  },
};

module.exports = nextConfig;
