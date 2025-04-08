/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // React 엄격 모드 활성화
  swcMinify: true,       // SWC를 사용한 빌드 최적화
  poweredByHeader: false, // 'X-Powered-By' 헤더 제거로 보안 강화
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL || 'https://default-api.example.com',
  },
  images: {
    domains: ['example.com', 'another-domain.com'], // 외부 이미지 도메인 허용
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false }; // 클라이언트 사이드에서 'fs' 모듈 사용 방지
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true, // 영구 리디렉션 설정
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*', // API 경로 재작성
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
