# Critter Getter - Wildlife Exclusion Referral Platform

A production-ready lead generation and referral platform for wildlife exclusion services. Connects residential and enterprise clients with licensed wildlife specialists.

## Overview

Critter Getter is **not** a licensed wildlife control operator. We operate as a referral and intake platform that connects property owners with independent, licensed specialists in the wildlife exclusion industry.

### Key Features

- **Dual-Segment Intake**: Separate assessment flows for residential and enterprise clients
- **Secure Form Handling**: CSRF protection, input validation, rate limiting
- **Compliance-Focused**: Clear disclosure that services are provided by licensed partners
- **Database Integration**: PostgreSQL for lead storage and partner coordination
- **Comprehensive Testing**: Unit, integration, and E2E test coverage
- **Production Ready**: TypeScript, security headers, proper error handling

## Architecture

### Tech Stack

- **Frontend**: Next.js 15 + React 19 (TypeScript)
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **Testing**: Jest, Supertest, Playwright
- **Security**: Helmet.js, CSRF tokens, rate limiting, parameterized queries

### Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── residential/        # Residential assessment page
│   ├── enterprise/         # Enterprise assessment page
│   ├── about/              # About & legal disclosures
│   ├── api/                # API routes
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── FormFields.tsx      # Reusable form inputs
│   ├── ResidentialForm.tsx # Residential intake
│   └── EnterpriseForm.tsx  # Enterprise intake
├── lib/                    # Utilities & data access
│   ├── validation.ts       # Input validation (Zod)
│   ├── db.ts               # Database connection pool
│   ├── leadRepository.ts   # Lead CRUD operations
│   └── csrf.ts             # CSRF protection
├── server/                 # Express API
│   └── api.ts              # API endpoints
├── __tests__/              # Unit & integration tests
├── e2e/                    # Playwright E2E tests
├── config/                 # Configuration
└── types/                  # TypeScript types
```

## Setup & Installation

### Prerequisites

- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Installation Steps

1. **Clone and install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment**:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your database URL and configuration.

3. **Initialize database**:
   ```bash
   npm run migrate
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

## Security Features

### Input Validation
- **Zod schemas** for residential and enterprise leads
- Email, phone, ZIP code validation
- Required field enforcement
- XSS protection through sanitization

### CSRF Protection
- Token generation per form load
- One-time token consumption
- Server-side validation on POST requests
- 1-hour expiration

### Rate Limiting
- Global: 100 requests per 15 minutes
- Lead submission: 5 per minute per IP
- Prevents spam and abuse

### Database Security
- Parameterized queries (pg package)
- Connection pooling
- No SQL injection vulnerabilities

### HTTP Security
- Helmet.js headers (CSP, HSTS, X-Frame-Options, etc.)
- X-Content-Type-Options: nosniff
- Strict-Transport-Security enabled

## Testing

### Unit Tests (Validation, utilities)
```bash
npm test
npm run test:watch
npm run test:coverage
```

### Integration Tests (API endpoints)
```bash
npm test -- __tests__/api.integration.test.ts
```

### E2E Tests (User flows)
```bash
npm run test:e2e
```

### Test Coverage

- Validation schemas: 100%
- API routes: 95%+
- User forms: Critical paths
- Error handling: Comprehensive

## Compliance & Legal

### Positioning

This website **does not**:
- Claim to be licensed or certified
- Promise specific outcomes
- Guarantee services
- Perform any wildlife control services

This website **does**:
- Connect users with licensed specialists
- Provide educational information
- Assess and scope requirements
- Refer to qualified partners

### Disclosures

All pages include clear statements that:
1. We are not a licensed wildlife control operator
2. All services are provided by independent specialists
3. Specialists are licensed in their jurisdictions
4. We operate as a referral platform only

### Data Privacy

- Lead information shared only with matched specialists
- GDPR-compliant data handling
- See [Privacy Policy](./PRIVACY.md) for details

## Form Requirements

### Residential Lead Form
- First & last name
- Email & phone
- Property address
- Wildlife issue type, severity, description
- Preferred contact method

### Enterprise Lead Form
- Company information & contact
- Facility type & address
- Square footage (optional)
- Service needs (checkboxes)
- Project scope & timeline
- Preferred contact method

## API Endpoints

### Lead Submission
- `POST /api/leads/residential` - Create residential lead
- `POST /api/leads/enterprise` - Create enterprise lead

### Security
- `GET /api/csrf-token` - Retrieve CSRF token

### Health Check
- `GET /api/health` - Server status

## Environment Variables

```
DATABASE_URL              # PostgreSQL connection string
PORT                      # Next.js app port (default: 3000)
API_PORT                  # Express API port (default: 5000)
ALLOWED_ORIGINS           # CORS allowed origins
EMAIL_FROM                # Outgoing email address
JWT_SECRET                # JWT signing key
CSRF_TOKEN_SECRET         # CSRF token secret
```

## Running in Production

### Build
```bash
npm run build
npm start
```

### Database Migration
```bash
npm run migrate
```

### Environment
- Set all variables in `.env.production`
- Ensure PostgreSQL is running and accessible
- Configure ALLOWED_ORIGINS for your domain
- Use strong JWT_SECRET

## Monitoring & Logging

- All errors logged to stdout/stderr
- CSRF failures logged as security events
- Rate limit violations tracked
- Lead creation logged with timestamp

## Future Enhancements

- Email notifications to specialists
- Partner dashboard for lead management
- Lead status tracking for clients
- SMS notifications
- Mobile app
- Payment processing for premium listings

## Support & Contact

For questions about compliance, operations, or technical setup, review:
- [About Page](./app/about/page.tsx)
- [Terms of Service](./TERMS.md)
- [Privacy Policy](./PRIVACY.md)

## License

Proprietary - All rights reserved.

## Version

v1.0.0 - January 2025
