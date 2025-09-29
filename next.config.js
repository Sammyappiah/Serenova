/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // ✅ force server output
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
