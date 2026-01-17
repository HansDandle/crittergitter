# Development Guide

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Local Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment**:
   ```bash
   cp .env.example .env.local
   ```

3. **Create PostgreSQL database**:
   ```bash
   createdb crittergetter
   ```

4. **Initialize schema**:
   ```bash
   npm run migrate
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```

   The app will be available at:
   - Frontend: http://localhost:3000
   - API: http://localhost:5000

## File Structure Explained

### App Directory (`/app`)
- **Next.js 15 app router pages**
- Each route has its own directory with `page.tsx`
- Global styles in `globals.css`
- API routes in `/app/api`

### Components (`/components`)
- **FormFields.tsx**: Reusable form input components
- **ResidentialForm.tsx**: Residential intake form with validation
- **EnterpriseForm.tsx**: Enterprise assessment form with validation

### Library Code (`/lib`)
- **validation.ts**: Zod schemas and validation functions
- **db.ts**: PostgreSQL connection management
- **leadRepository.ts**: Database CRUD operations
- **csrf.ts**: CSRF token generation and verification

### Server (`/server`)
- **api.ts**: Express API server (for future standalone deployment)

### Configuration
- **next.config.ts**: Next.js configuration (security headers, redirects)
- **tsconfig.json**: TypeScript configuration
- **jest.config.js**: Jest testing configuration
- **playwright.config.ts**: E2E testing configuration

## Testing

### Unit Tests
```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Integration Tests
```bash
npm test -- __tests__/api.integration.test.ts
```

### E2E Tests
```bash
# Requires running dev server
npm run test:e2e

# Debug mode
npx playwright test --debug
```

## Security Considerations

### Input Validation
- All form inputs validated with Zod schemas server-side
- Never trust client-side validation alone
- Sanitize HTML-like characters

### CSRF Protection
- Token generated per form load
- One-time consumption
- Expires after 1 hour
- Required for all POST requests

### Rate Limiting
- 100 requests per 15 minutes globally
- 5 lead submissions per minute per IP
- Prevents spam and abuse

### Database
- All queries use parameterized statements
- No SQL injection vulnerabilities
- Connection pooling for efficiency

### HTTP Security
- HTTPS required in production
- Security headers via Helmet.js
- CSP, HSTS, X-Frame-Options configured

## Deployment

### Build
```bash
npm run build
npm start
```

### Environment Variables (Production)
```
NODE_ENV=production
DATABASE_URL=your_postgres_connection
PORT=3000
ALLOWED_ORIGINS=https://yourdomain.com
JWT_SECRET=strong_random_string
CSRF_TOKEN_SECRET=strong_random_string
```

### Database Setup
```bash
# Run migrations on production server
npm run migrate
```

### Hosting Options
- **Vercel**: Native Next.js hosting (recommended)
- **AWS**: EC2 + RDS
- **DigitalOcean**: App Platform + Managed Database
- **Heroku**: Simple deployment with managed PostgreSQL

## Common Tasks

### Add a New Form Field
1. Add to validation schema in `lib/validation.ts`
2. Add state in component (ResidentialForm or EnterpriseForm)
3. Add FormField component
4. Add to database migration/repository

### Modify Database Schema
1. Update `lib/db.ts` with new table/columns
2. Update types in `types/index.ts`
3. Update repository methods
4. Add tests

### Deploy to Production
1. Set environment variables on hosting platform
2. Build: `npm run build`
3. Run migrations: `npm run migrate`
4. Start: `npm start`

## Debugging

### Enable Request Logging
Set in `.env.local`:
```
DEBUG=crittergetter:*
```

### View Database
```bash
psql crittergetter
\dt  # List tables
SELECT * FROM residential_leads;
```

### Check Rate Limiting
Look for 429 status codes in logs

### Test CSRF Protection
Remove the CSRF token from a POST request - should get 403

## Performance Tips

### Database
- Indexes already created on status and email
- Use pagination for large result sets
- Profile slow queries with `EXPLAIN ANALYZE`

### Frontend
- Forms implement client-side validation to reduce server calls
- CSS is minified in production build
- Images should be optimized before deployment

### API
- Rate limiting prevents abuse
- No N+1 queries (each lead query is single query)
- Connection pooling handles concurrent requests

## Monitoring

### Logs to Monitor
- Form submission errors
- CSRF token failures
- Database connection issues
- Rate limit violations

### Health Check
```bash
curl http://localhost:3000/api/health
```

Should return `{"status":"ok"}`

## Troubleshooting

### Database Connection Fails
- Verify PostgreSQL is running
- Check DATABASE_URL in .env.local
- Ensure database exists: `createdb crittergetter`

### Port Already in Use
```bash
# Kill process on port 3000
# On macOS/Linux:
lsof -i :3000 | awk 'NR!=1 {print $2}' | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Tests Failing
- Clear Jest cache: `npm test -- --clearCache`
- Ensure test database is accessible
- Check test environment variables in jest.setup.ts

### Forms Not Submitting
- Check browser console for errors
- Verify CSRF token endpoint is working
- Check network tab for failed requests
- Ensure API routes are accessible

## Code Quality

### Linting
```bash
npm run lint
```

### Type Checking
```bash
npx tsc --noEmit
```

### Code Coverage
```bash
npm run test:coverage
```

Aim for 70%+ coverage on critical paths.

## Next Steps

1. Configure email notifications to specialists
2. Build partner dashboard for lead management
3. Add lead status tracking for clients
4. Implement SMS notifications
5. Add payment processing for premium listings
