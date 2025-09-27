/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              "script-src 'self' https://js.stripe.com 'unsafe-inline' 'unsafe-eval' /_next/static/;",
              "style-src 'self' 'unsafe-inline';",
              "img-src 'self' data: blob: https:;",
              "font-src 'self' data:;",
              "frame-src 'self' https://js.stripe.com;",
              "connect-src 'self' https://api.stripe.com https://r.stripe.com https://m.stripe.network;"
            ].join(" ")
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
