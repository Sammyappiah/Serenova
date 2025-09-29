/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",  // ✅ only server output, no static export
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: { typedRoutes: true },
  reactStrictMode: true,

  // 🚨 Kill static 500 export bug on Vercel
  exportPathMap: async () => {
    return {}; // no static pages exported, all handled dynamically
  },
};

module.exports = nextConfig;
