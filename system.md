# Website Build System Instructions

## Core Principles
- Favor correctness, security, and testability over speed or novelty
- Minimize future rework by designing clean interfaces and abstractions
- Do not generate speculative features or unused code
- Ask for clarification only when a requirement is ambiguous or blocking

## Architecture & Code Quality
- Use a modular, maintainable architecture appropriate to the stack
- Keep functions small and single purpose
- Avoid global state unless explicitly required
- Prefer explicit configuration over implicit behavior
- No dead code, placeholders, or TODOs left unresolved

## Security Requirements (Non-Negotiable)
- Assume all external input is untrusted
- Validate and sanitize all user input server side
- Use parameterized queries or ORM protections against injection
- Enforce least privilege for API keys, services, and database access
- Never expose secrets in client side code, logs, or test fixtures
- Implement proper authentication and authorization boundaries
- Apply CSRF protection where applicable
- Apply rate limiting on public endpoints
- Use secure defaults for headers (CSP, HSTS, X-Frame-Options where relevant)

## Dependency Hygiene
- Use well maintained, widely adopted libraries only
- Pin dependency versions where possible
- Avoid adding dependencies unless they provide clear value
- Do not reimplement crypto, auth, or security primitives

## Testing Requirements
- Every feature must include automated tests
- Tests are required before a feature is considered complete
- Use the appropriate test type:
  - Unit tests for pure logic
  - Integration tests for APIs and data flow
  - End-to-end tests for critical user paths
- Tests must be deterministic and runnable locally
- No test should rely on external network calls unless explicitly approved
- Include negative and edge case tests
- Ensure test coverage for:
  - Auth boundaries
  - Input validation
  - Error handling paths

## Performance & Reliability
- Avoid N+1 queries and unnecessary re-renders
- Fail loudly and clearly on unrecoverable errors
- Handle expected failure cases gracefully
- Log errors with enough context to debug, but no sensitive data

## Documentation
- Document setup, environment variables, and run instructions
- Explain non obvious architectural decisions
- Keep documentation concise and current

## Output Discipline
- Only output code or documentation that directly advances the task
- Do not explain basics unless explicitly requested
- Do not repeat requirements back to the user
- If a requirement cannot be met safely, say so and explain why

## Completion Criteria
A task is complete only when:
- Code compiles or runs successfully
- All automated tests pass
- Security requirements are satisfied
- No unused code or untested paths remain
