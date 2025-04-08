/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,  // 🚀 빌드 속도 및 성능 최적화 (누락됐던 부분)
  poweredByHeader: false, // 🔒 보안성 강화 (Next.js 버전 숨기기)
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL || 'https://default-api.example.com',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    // 추가적인 webpack 최적화가 필요하면 여기에 추가
    return config;
  },
  images: {
    domains: ['example.com', 'another-domain.com'],
  },
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self'; object-src 'none';" },
          { key: 'Referrer-Policy', value: 'no-referrer' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
