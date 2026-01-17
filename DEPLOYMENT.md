# Critter Getter - Production Deployment

## Pre-Deployment Checklist

### Code Quality
- [ ] All tests passing (`npm test`)
- [ ] No linting errors (`npm run lint`)
- [ ] TypeScript strict mode (`npx tsc --noEmit`)
- [ ] Code coverage >70% on critical paths

### Security
- [ ] Environment variables not committed
- [ ] JWT_SECRET and CSRF_TOKEN_SECRET set to strong random values
- [ ] Database user has minimal required permissions
- [ ] HTTPS/SSL enabled on all URLs
- [ ] CORS origins restricted to your domain

### Documentation
- [ ] README.md reviewed and updated
- [ ] DEVELOPMENT.md covers your setup
- [ ] API documentation complete
- [ ] Runbook created for operations team

## Deployment Steps

### 1. Prepare Production Environment

Set these environment variables on your hosting platform:

```
NODE_ENV=production
DATABASE_URL=postgresql://[username]:[password]@[host]:[port]/[dbname]
PORT=3000
ALLOWED_ORIGINS=https://yourdomain.com
JWT_SECRET=[generate with: openssl rand -base64 32]
CSRF_TOKEN_SECRET=[generate with: openssl rand -base64 32]
EMAIL_FROM=noreply@yourdomain.com
```

### 2. Database Setup

On your production database server:

```bash
# Create database
createdb crittergetter

# Run migrations
npm run migrate
```

### 3. Build Application

```bash
npm run build
npm start
```

### 4. Verify Deployment

```bash
# Check health endpoint
curl https://yourdomain.com/api/health

# Should return: {"status":"ok"}
```

## Hosting Options

### Option 1: Vercel (Recommended for Next.js)

**Pros**: Native Next.js support, auto-scaling, built-in security

**Setup**:
1. Push code to GitHub
2. Connect repo to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy database on external PostgreSQL provider (AWS RDS, Heroku Postgres, etc.)
5. Set DATABASE_URL in Vercel environment

**Cost**: Free tier available, pay-as-you-go for production

### Option 2: AWS

**Pros**: Full control, auto-scaling, good for enterprise

**Components**:
- **App**: EC2 or Elastic Beanstalk
- **Database**: RDS PostgreSQL
- **Storage**: S3 (if needed later)
- **DNS**: Route 53
- **SSL**: ACM Certificate

**Setup**:
1. Create EC2 instance (t3.small minimum)
2. Create RDS PostgreSQL instance
3. Install Node.js on EC2
4. Deploy code with git or CodeDeploy
5. Run migrations
6. Set up Nginx reverse proxy
7. Install SSL with Certbot

### Option 3: DigitalOcean

**Pros**: Simple, affordable, good documentation

**Components**:
- **App**: Droplet (8GB RAM recommended)
- **Database**: Managed PostgreSQL
- **DNS**: DigitalOcean Namespaces
- **SSL**: Let's Encrypt via Certbot

**Setup**:
1. Create Droplet with Node.js marketplace image
2. Create Managed PostgreSQL cluster
3. Clone code repository
4. Run migrations
5. Set up Nginx and PM2
6. Enable SSL

## Database Backup Strategy

### Daily Backups
```bash
# Set up automated backup script (cron)
pg_dump crittergetter | gzip > backup-$(date +%Y-%m-%d).sql.gz
```

### Store Backups Safely
- Upload to S3, GCS, or backup service
- Retain for 30 days minimum
- Test restore procedures regularly

## Monitoring & Alerts

### Key Metrics
- API response time
- Lead submission success rate
- Database connection pool usage
- Disk space
- Memory usage
- Error rates

### Tools
- **Vercel Analytics**: Built-in with Vercel deployment
- **Datadog**: Comprehensive monitoring
- **New Relic**: APM and infrastructure
- **PagerDuty**: Alert notifications

### Sample Alert Thresholds
- Error rate > 5%
- API response time > 500ms
- Database connections > 80% of max
- Disk space < 10% available

## Log Management

### Application Logs
```bash
# View logs on Vercel
vercel logs

# View logs on custom server
tail -f /var/log/crittergetter/app.log
```

### Database Logs
Monitor for:
- Slow queries (> 100ms)
- Connection timeouts
- Deadlocks
- Authentication failures

## Scaling Considerations

### Current Capacity
- Handles ~1000 concurrent users
- ~10,000 leads/day on single server
- Database: t3.small (2GB RAM) sufficient for <100k leads

### When to Scale
- Response time degradation
- Database CPU > 80%
- Connection pool exhausted
- Disk space < 20%

### Scaling Options
1. **Vertical**: Increase server/database size
2. **Horizontal**: Load balancing, read replicas
3. **Caching**: Redis for session data
4. **CDN**: Cloudflare for static assets

## Security Hardening

### Network
- [ ] VPC/Private network for database
- [ ] Security groups restrict access
- [ ] WAF rules configured
- [ ] DDoS protection enabled

### Application
- [ ] Security headers in production
- [ ] CSP policy strict
- [ ] HTTPS only (no HTTP)
- [ ] Secure cookies (HttpOnly, Secure flags)

### Database
- [ ] Encryption at rest
- [ ] Encryption in transit (SSL)
- [ ] Regular security updates
- [ ] Least privilege user permissions
- [ ] Audit logging enabled

## Disaster Recovery

### RTO Target: 1 hour
### RPO Target: 1 hour

### Recovery Procedures
1. **Database Corruption**
   - Restore from latest backup
   - Verify data integrity
   - Run sanity checks

2. **Application Crash**
   - Restart application server
   - Check logs for root cause
   - Roll back if needed

3. **Security Breach**
   - Isolate affected systems
   - Rotate credentials
   - Reset CSRF/JWT tokens
   - Notify affected users

## Performance Optimization

### Database
- Ensure indexes are present (already configured)
- Monitor slow query log
- Use connection pooling (configured)
- Analyze explain plans for bottlenecks

### Application
- Enable compression (Gzip)
- Minify CSS/JS (Next.js does this automatically)
- Cache static assets with long TTL
- Implement API response caching where possible

### Frontend
- Lazy load images
- Code splitting enabled
- Consider CDN for static content
- Optimize form rendering

## Post-Deployment Tasks

### Day 1
- [ ] Verify all forms submit successfully
- [ ] Test CSRF protection
- [ ] Check rate limiting works
- [ ] Verify email notifications (if implemented)
- [ ] Monitor error logs

### Week 1
- [ ] Analyze lead volume and conversion
- [ ] Verify database backups are working
- [ ] Test recovery procedures
- [ ] Review security logs
- [ ] Check specialist coordination flow

### Month 1
- [ ] Generate usage analytics
- [ ] Review performance metrics
- [ ] Plan optimization based on data
- [ ] Update runbooks with lessons learned
- [ ] Train support team

## Rollback Plan

### If Critical Issues

1. **Revert to Previous Version**
   ```bash
   git revert HEAD
   npm run build
   npm start
   ```

2. **Restore Database**
   ```bash
   # Stop application
   # Restore from backup
   pg_restore -d crittergetter backup.sql.gz
   # Restart application
   ```

3. **Notify Stakeholders**
   - Send status update to team
   - Create incident post-mortem
   - Document root cause

## Maintenance Windows

### Recommended Schedule
- Weekly: Security updates, dependency patches
- Monthly: Database maintenance, log cleanup
- Quarterly: Full backup verification, disaster recovery drills

### Notification
- Announce maintenance 48 hours in advance
- Schedule during low-traffic periods (off-hours)
- Keep maintenance windows to <30 minutes

## Support Contacts

- **Hosting Support**: [Your Hosting Provider]
- **Database Support**: [Your Database Provider]
- **Security Issues**: security@yourdomain.com
- **Operations Team**: ops@yourdomain.com
