import next from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = next();

export const config = {
  app: {
    name: 'Critter Getter',
    version: '1.0.0',
  },
  server: {
    port: process.env.PORT || 3000,
    apiPort: process.env.API_PORT || 5000,
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://localhost/crittergetter',
  },
  security: {
    allowedOrigins: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
    csrfTokenExpiry: 60 * 60 * 1000, // 1 hour
    rateLimitWindow: 15 * 60 * 1000, // 15 minutes
    rateLimitMax: 100,
    leadRateLimitWindow: 60 * 1000, // 1 minute
    leadRateLimitMax: 5,
  },
  email: {
    from: process.env.EMAIL_FROM || 'noreply@crittergetter.com',
  },
};

export default config;
