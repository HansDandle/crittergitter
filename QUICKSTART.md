# Quick Start Guide

## 1. Installation (5 minutes)

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Create PostgreSQL database
createdb crittergetter

# Initialize database schema
npm run migrate
```

## 2. Configure Environment

Edit `.env.local`:
```
DATABASE_URL=postgresql://localhost/crittergetter
PORT=3000
ALLOWED_ORIGINS=http://localhost:3000
```

## 3. Start Development

```bash
npm run dev
```

**Available at:**
- Frontend: http://localhost:3000
- API: http://localhost:3000/api

## 4. Test the Forms

**Residential:**
- Navigate to http://localhost:3000/residential
- Fill out form with valid data
- Submit and verify success message

**Enterprise:**
- Navigate to http://localhost:3000/enterprise
- Fill out form with valid data
- Select at least one service type
- Submit and verify success message

## 5. Run Tests

```bash
# All tests
npm test

# Watch mode
npm run test:watch

# Coverage
npm run test:coverage

# E2E tests
npm run test:e2e
```

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm test` | Run unit/integration tests |
| `npm run test:e2e` | Run browser tests |
| `npm run lint` | Check code quality |
| `npm run migrate` | Initialize database |

## Verify Compliance

The website enforces compliance through:

✅ **Language**: Pages use only "connect," "coordinate," "assess," "refer"
✅ **Disclaimers**: Every page states "we are not a licensed operator"
✅ **Terms**: Comprehensive terms clearly state we don't perform services
✅ **Privacy**: Clear data usage and sharing policies
✅ **Forms**: CSRF protection prevents spoofing
✅ **Validation**: Input validation prevents injection attacks

## Check Key Pages

- **Home** (http://localhost:3000): Overview and CTAs
- **Residential** (http://localhost:3000/residential): Residential form
- **Enterprise** (http://localhost:3000/enterprise): Enterprise form
- **About** (http://localhost:3000/about): Compliance details
- **Privacy** (http://localhost:3000/privacy): Privacy policy
- **Terms** (http://localhost:3000/terms): Terms of service

## Database Queries

```bash
# Connect to database
psql crittergetter

# View tables
\dt

# View residential leads
SELECT * FROM residential_leads LIMIT 5;

# View enterprise leads
SELECT * FROM enterprise_leads LIMIT 5;

# Count leads
SELECT COUNT(*) FROM residential_leads;
SELECT COUNT(*) FROM enterprise_leads;
```

## Troubleshooting

**Port 3000 already in use**
```bash
# Kill process on port 3000
lsof -i :3000 | awk 'NR!=1 {print $2}' | xargs kill -9
```

**Database connection fails**
```bash
# Check PostgreSQL is running
psql -c "SELECT version();"

# Verify database exists
psql -l | grep crittergetter
```

**Tests failing**
```bash
# Clear Jest cache
npm test -- --clearCache

# Run with verbose output
npm test -- --verbose
```

## What's Next?

### To Add Email Notifications
1. Install nodemailer: `npm install nodemailer`
2. Add EMAIL_FROM, EMAIL_SMTP env vars
3. Create `/lib/email.ts` with send function
4. Update API routes to send emails on lead creation

### To Add Partner Dashboard
1. Create `/app/dashboard` route
2. Add authentication middleware
3. Build partner lead management UI
4. Add API endpoints for partner operations

### To Deploy to Production
1. Follow [DEPLOYMENT.md](./DEPLOYMENT.md)
2. Choose hosting (Vercel recommended)
3. Set production environment variables
4. Run migrations on production database
5. Deploy code

## Key Files to Review

- **[README.md](./README.md)**: Full project documentation
- **[DEVELOPMENT.md](./DEVELOPMENT.md)**: Detailed development guide
- **[BUILD_SUMMARY.md](./BUILD_SUMMARY.md)**: Complete feature list
- **[system.md](./system.md)**: Original requirements

## Support

**For questions about:**
- **Setup**: See [DEVELOPMENT.md](./DEVELOPMENT.md)
- **Deployment**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Compliance**: See [PRIVACY.md](./PRIVACY.md) and [TERMS.md](./TERMS.md)
- **Code**: See [README.md](./README.md)

---

**Ready to go!** You now have a production-ready lead generation platform. ✅
