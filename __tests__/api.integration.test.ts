import request from 'supertest';
import app from '../server/api';
import * as db from '../lib/db';

jest.mock('../lib/db');

describe('API Integration Tests', () => {
  describe('POST /api/leads/residential', () => {
    const validPayload = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '(555) 123-4567',
      address: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      zipCode: '62701',
      issueType: 'squirrels',
      issueDescription: 'Squirrels in the attic making noise at night',
      issueSeverity: 'moderate',
      preferredContact: 'phone',
    };

    test('creates residential lead with valid data', async () => {
      const response = await request(app)
        .post('/api/leads/residential')
        .send(validPayload)
        .expect('Content-Type', /json/);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('leadId');
    });

    test('rejects invalid email', async () => {
      const response = await request(app)
        .post('/api/leads/residential')
        .send({
          ...validPayload,
          email: 'invalid-email',
        })
        .expect(400);

      expect(response.body.errors).toBeDefined();
      expect(response.body.errors.email).toBeDefined();
    });

    test('rejects missing required fields', async () => {
      const response = await request(app)
        .post('/api/leads/residential')
        .send({ firstName: 'John' })
        .expect(400);

      expect(response.body.errors).toBeDefined();
    });

    test('enforces rate limiting', async () => {
      const payload = validPayload;
      let responses = [];

      for (let i = 0; i < 7; i++) {
        responses.push(
          await request(app)
            .post('/api/leads/residential')
            .send(payload)
        );
      }

      // After 5 requests in 60 seconds, should be rate limited
      expect(responses[5].status).toBe(429);
    });
  });

  describe('POST /api/leads/enterprise', () => {
    const validPayload = {
      companyName: 'Acme Corp',
      contactFirstName: 'Jane',
      contactLastName: 'Smith',
      email: 'jane@acme.com',
      phone: '555-123-4567',
      address: '456 Business Blvd',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      facilityType: 'commercial',
      issues: ['rodent_exclusion', 'bird_control'],
      projectScope: 'We need comprehensive rodent prevention throughout our commercial kitchen and storage areas.',
      timeline: 'standard',
      preferredContact: 'email',
    };

    test('creates enterprise lead with valid data', async () => {
      const response = await request(app)
        .post('/api/leads/enterprise')
        .send(validPayload)
        .expect('Content-Type', /json/);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('leadId');
    });

    test('rejects empty issues array', async () => {
      const response = await request(app)
        .post('/api/leads/enterprise')
        .send({
          ...validPayload,
          issues: [],
        })
        .expect(400);

      expect(response.body.errors).toBeDefined();
      expect(response.body.errors.issues).toBeDefined();
    });

    test('rejects short project scope', async () => {
      const response = await request(app)
        .post('/api/leads/enterprise')
        .send({
          ...validPayload,
          projectScope: 'Help',
        })
        .expect(400);

      expect(response.body.errors).toBeDefined();
      expect(response.body.errors.projectScope).toBeDefined();
    });
  });

  describe('GET /api/health', () => {
    test('returns health status', async () => {
      const response = await request(app).get('/api/health').expect(200);

      expect(response.body).toHaveProperty('status');
      expect(response.body.status).toBe('ok');
    });
  });

  describe('Error Handling', () => {
    test('returns 404 for unknown routes', async () => {
      const response = await request(app).get('/api/unknown').expect(404);

      expect(response.body).toHaveProperty('error');
    });

    test('returns 500 on server error', async () => {
      jest.spyOn(db, 'query').mockRejectedValueOnce(new Error('Database error'));

      const response = await request(app)
        .post('/api/leads/residential')
        .send({
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          phone: '(555) 123-4567',
          address: '123 Main St',
          city: 'Springfield',
          state: 'IL',
          zipCode: '62701',
          issueType: 'squirrels',
          issueDescription: 'Squirrels in the attic making noise at night',
          issueSeverity: 'moderate',
          preferredContact: 'phone',
        })
        .expect(500);

      expect(response.body).toHaveProperty('error');
    });
  });
});
