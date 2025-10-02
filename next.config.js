/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // If you want '/', just leave it alone so it loads app/page.tsx
      // Add custom redirects here if needed
    ]
  },
}

module.exports = nextConfig
