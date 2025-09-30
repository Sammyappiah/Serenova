/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  redirects: async () => [
    { source: '/', destination: '/home', permanent: true },
  ],
};

module.exports = nextConfig;
