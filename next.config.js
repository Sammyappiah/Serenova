/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'standalone', // ensure no static export with /500.html
};

module.exports = nextConfig;
