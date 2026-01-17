# Node Web Application Best Practices (Lean, Secure, Stable)

## Guiding Principle
Build boring software that is cheap to run, hard to break, and easy to reason about.
Every dependency, feature, and abstraction increases risk.

---

## Platform Assumptions
- Deployment target is Vercel
- Framework is Next.js with App Router
- Language is TypeScript
- Backend services may use Supabase free tier if required
- Application is primarily a public facing website with forms
- No long lived servers, background jobs, or queues

---

## Node, React, and Version Policy
- Use a stable Node LTS only
- Use React 18.x only
- Do not use canary, experimental, or prerelease packages
- Do not override peer dependency conflicts
- Never use --force or --legacy-peer-deps
- Lock versions where stability matters

Failure modes prevented: dependency conflicts, silent runtime bugs, ecosystem drift.

---

## Dependency and Package Management (Lean by Default)

### Core Rules
- Install only dependencies required for shipped functionality
- Prefer native Node, browser, and framework features
- No dependency may be added without a clear justification
- Avoid meta frameworks, boilerplates, and opinionated stacks
- Do not install packages speculatively or for future use

### Package Manager
- Use npm or pnpm with a committed lockfile
- Keep devDependencies separate from runtime dependencies
- Do not install global packages unless required for tooling
- Remove unused dependencies immediately

### Explicit Anti Patterns
- Utility megabundles such as lodash
- Duplicate libraries solving the same problem
- Wrappers around built in APIs
- Shipping dev tooling to production

Failure modes prevented: bloated node_modules, slow installs, large bundles.

---

## Framework First Development
- Use Next.js and React built ins before adding libraries
- Use native fetch instead of Axios
- Use Server Actions or API routes instead of client side request layers
- Use built in routing, metadata, and image optimization
- Avoid client side state libraries unless strictly necessary

Failure modes prevented: unnecessary abstractions and client side complexity.

---

## Forms, Validation, and Data Handling
- All external input is untrusted
- Validate all inputs server side
- Enforce type, length, format, and allowed values
- Reject unexpected fields
- Client side validation is optional and never authoritative
- Do not duplicate validation logic across layers

Failure modes prevented: injection, data poisoning, inconsistent behavior.

---

## Security Blueprint (Default Deny)

### Threat Model
Assume:
- Public unauthenticated access
- Automated abuse and spam
- Malicious or malformed input
- Client side tampering

Do not assume:
- Trusted clients
- Friendly users
- Security through obscurity

---

## Authentication and Authorization
- Do not implement auth unless required
- If auth is required, use Supabase Auth only
- Never roll your own auth or session management
- All authorization decisions must be server side
- Use Supabase Row Level Security on all tables
- Default RLS policy is deny all

Failure modes prevented: data leaks and account compromise.

---

## Secrets and Configuration
- Store all secrets in Vercel environment variables
- Never hardcode secrets in code or config
- Never expose service role keys to the client
- Use least privilege credentials only
- Separate development and production secrets

Failure modes prevented: credential leakage and full account takeover.

---

## API and Server Safety
- Validate HTTP methods and content types
- Reject oversized payloads
- Apply rate limiting to public endpoints
- Handle errors explicitly and consistently
- Fail closed, not open
- Do not leak stack traces or internals to users

Failure modes prevented: abuse, denial of service, information disclosure.

---

## Client Side Security
- Do not trust client side logic or state
- Avoid exposing internal APIs or implementation details
- Use strict security headers where feasible
- Do not leak environment variables to the browser

Failure modes prevented: tampering and reconnaissance.

---

## Supabase Usage
- Use Supabase only when persistence or auth is required
- Do not install ORMs or query abstraction layers
- Keep schemas simple and read heavy
- Test RLS policies explicitly
- Do not expose database access directly to the client

Failure modes prevented: overpermissioned access and hidden data leaks.

---

## Logging and Error Handling
- Log errors with enough context to debug
- Never log PII, secrets, or credentials
- Avoid verbose logs in production
- Surface only generic error messages to users

Failure modes prevented: accidental data exposure through logs.

---

## Testing Requirements
- All features must have automated tests
- Test input validation, authorization boundaries, and error paths
- Include negative and abuse case tests
- Mock external services
- No security sensitive feature is complete without tests

Failure modes prevented: silent regressions and broken guarantees.

---

## Build and Import Hygiene
- Ensure imports are tree shakeable
- Avoid barrel files that pull in unused code
- Prefer direct imports
- Remove unused imports immediately
- Do not rely on bundlers to clean up bad code

Failure modes prevented: accidental bundle growth and dead code.

---

## Compliance and Legal Safety (Referral Model)
- Do not claim licensing, certifications, or guarantees
- Clearly disclose referral and partner relationships
- Collect only data required for lead routing
- Retain data only as long as necessary

Failure modes prevented: regulatory and contractual exposure.

---

## Completion Gate
A task is not complete unless:
- All inputs are validated server side
- No secrets are exposed to the client
- No peer dependency conflicts exist
- All tests pass
- node_modules size is reasonable for scope
- The app builds and runs cleanly on Vercel

---

## Explicit Never Allowed List
- Client side only validation
- Hardcoded secrets
- Exposed service role keys
- Wildcard CORS
- Forced dependency resolution
- Shipping unused dependencies
- Assuming free tier means low risk
