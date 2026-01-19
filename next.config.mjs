/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
  async headers() {
    const isProduction = process.env.NODE_ENV === 'production';
    
    // CSP policy - méně striktní pro vývoj, striktní pro produkci
    const cspPolicy = isProduction
      ? [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' https://matomo.zbyneksvoboda.cz",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: https: blob:",
          "font-src 'self' data:",
          "connect-src 'self' https://matomo.zbyneksvoboda.cz https://api.resend.com",
          "frame-ancestors 'self'",
          "base-uri 'self'",
          "form-action 'self'",
          "frame-src 'none'",
          "object-src 'none'",
          "upgrade-insecure-requests"
        ].join('; ')
      : [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://matomo.zbyneksvoboda.cz",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: https: blob:",
          "font-src 'self' data:",
          "connect-src 'self' https://matomo.zbyneksvoboda.cz https://api.resend.com",
          "frame-ancestors 'self'",
          "base-uri 'self'",
          "form-action 'self'"
        ].join('; ');

    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: cspPolicy
          }
        ],
      },
    ];
  },
};

export default nextConfig;
