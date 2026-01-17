import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { initializeDatabase } from '../lib/db';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000',
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later.',
});
app.use(limiter);

const leadLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  skip: (req) => req.method !== 'POST',
  message: 'Too many lead submissions, please try again later.',
});

// Parsing middleware
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ limit: '10kb', extended: false }));

// Request logging
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// Lead routes
app.post('/api/leads/residential', leadLimiter, async (req: Request, res: Response) => {
  try {
    const { validateResidentialLead } = await import('../lib/validation');
    const validation = validateResidentialLead(req.body);

    if (!validation.valid) {
      return res.status(400).json({ errors: validation.errors });
    }

    const { createResidentialLead } = await import('../lib/leadRepository');
    const lead = await createResidentialLead(req.body);

    res.status(201).json({
      message: 'Lead received. A specialist will contact you soon.',
      leadId: lead.id,
    });
  } catch (error) {
    console.error('Error creating residential lead:', error);
    res.status(500).json({ error: 'Failed to process lead' });
  }
});

app.post('/api/leads/enterprise', leadLimiter, async (req: Request, res: Response) => {
  try {
    const { validateEnterpriseLead } = await import('../lib/validation');
    const validation = validateEnterpriseLead(req.body);

    if (!validation.valid) {
      return res.status(400).json({ errors: validation.errors });
    }

    const { createEnterpriseLead } = await import('../lib/leadRepository');
    const lead = await createEnterpriseLead(req.body);

    res.status(201).json({
      message: 'Project inquiry received. Our team will assess and coordinate with licensed specialists.',
      leadId: lead.id,
    });
  } catch (error) {
    console.error('Error creating enterprise lead:', error);
    res.status(500).json({ error: 'Failed to process inquiry' });
  }
});

// Error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

export async function startServer(port: number = 5000): Promise<void> {
  try {
    await initializeDatabase();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

export default app;
