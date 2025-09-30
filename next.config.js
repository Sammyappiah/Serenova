/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/',
        destination: '/page', // fallback safeguard
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
