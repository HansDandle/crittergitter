import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

const csrfTokens = new Map<string, { token: string; expiresAt: number }>();
const TOKEN_EXPIRY_MS = 60 * 60 * 1000; // 1 hour

export function generateCsrfToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export function storeCsrfToken(token: string): void {
  csrfTokens.set(token, {
    token,
    expiresAt: Date.now() + TOKEN_EXPIRY_MS,
  });
}

export function verifyCsrfToken(token: string): boolean {
  const stored = csrfTokens.get(token);
  if (!stored) return false;
  if (stored.expiresAt < Date.now()) {
    csrfTokens.delete(token);
    return false;
  }
  csrfTokens.delete(token); // One-time use
  return true;
}

export function csrfMiddleware(req: Request, res: Response, next: NextFunction): void {
  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
    const token = req.headers['x-csrf-token'] as string;
    if (!token || !verifyCsrfToken(token)) {
      res.status(403).json({ error: 'Invalid CSRF token' });
      return;
    }
  }
  next();
}
