import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    strict: true,
  },
  eslint: {
    dirs: ['app', 'components', 'lib', 'server'],
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains',
        },
      ],
    },
  ],
  redirects: async () => [
    {
      source: '/assessment',
      destination: '/residential',
      permanent: false,
    },
  ],
};

export default nextConfig;
