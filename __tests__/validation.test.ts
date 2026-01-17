import {
  validateResidentialLead,
  validateEnterpriseLead,
  formatPhoneNumber,
  normalizeState,
  sanitizeInput,
} from '../lib/validation';

describe('Validation Module', () => {
  describe('validateResidentialLead', () => {
    const validData = {
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

    test('accepts valid residential lead', () => {
      const result = validateResidentialLead(validData);
      expect(result.valid).toBe(true);
      expect(result.errors).toEqual({});
    });

    test('rejects missing required fields', () => {
      const result = validateResidentialLead({ firstName: 'John' });
      expect(result.valid).toBe(false);
      expect(Object.keys(result.errors).length).toBeGreaterThan(0);
    });

    test('rejects invalid email', () => {
      const result = validateResidentialLead({
        ...validData,
        email: 'not-an-email',
      });
      expect(result.valid).toBe(false);
      expect(result.errors.email).toBeDefined();
    });

    test('rejects invalid phone', () => {
      const result = validateResidentialLead({
        ...validData,
        phone: 'invalid',
      });
      expect(result.valid).toBe(false);
      expect(result.errors.phone).toBeDefined();
    });

    test('rejects invalid zip code', () => {
      const result = validateResidentialLead({
        ...validData,
        zipCode: 'ABCDE',
      });
      expect(result.valid).toBe(false);
      expect(result.errors.zipCode).toBeDefined();
    });

    test('rejects short description', () => {
      const result = validateResidentialLead({
        ...validData,
        issueDescription: 'Short',
      });
      expect(result.valid).toBe(false);
      expect(result.errors.issueDescription).toBeDefined();
    });

    test('rejects invalid issue type', () => {
      const result = validateResidentialLead({
        ...validData,
        issueType: 'dragons',
      });
      expect(result.valid).toBe(false);
      expect(result.errors.issueType).toBeDefined();
    });
  });

  describe('validateEnterpriseLead', () => {
    const validData = {
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
      squareFootage: 5000,
      issues: ['rodent_exclusion', 'bird_control'],
      projectScope: 'We need comprehensive rodent prevention throughout our commercial kitchen and storage areas.',
      timeline: 'standard',
      preferredContact: 'email',
    };

    test('accepts valid enterprise lead', () => {
      const result = validateEnterpriseLead(validData);
      expect(result.valid).toBe(true);
      expect(result.errors).toEqual({});
    });

    test('accepts without squareFootage', () => {
      const result = validateEnterpriseLead({
        ...validData,
        squareFootage: undefined,
      });
      expect(result.valid).toBe(true);
    });

    test('rejects missing issues', () => {
      const result = validateEnterpriseLead({
        ...validData,
        issues: [],
      });
      expect(result.valid).toBe(false);
      expect(result.errors.issues).toBeDefined();
    });

    test('rejects short project scope', () => {
      const result = validateEnterpriseLead({
        ...validData,
        projectScope: 'Help',
      });
      expect(result.valid).toBe(false);
      expect(result.errors.projectScope).toBeDefined();
    });

    test('rejects invalid facility type', () => {
      const result = validateEnterpriseLead({
        ...validData,
        facilityType: 'underwater-base',
      });
      expect(result.valid).toBe(false);
      expect(result.errors.facilityType).toBeDefined();
    });
  });

  describe('formatPhoneNumber', () => {
    test('formats valid phone number', () => {
      expect(formatPhoneNumber('5551234567')).toBe('(555) 123-4567');
    });

    test('handles partially formatted number', () => {
      expect(formatPhoneNumber('555-123-4567')).toBe('(555) 123-4567');
    });

    test('returns input if invalid format', () => {
      expect(formatPhoneNumber('123')).toBe('123');
    });
  });

  describe('normalizeState', () => {
    test('converts to uppercase', () => {
      expect(normalizeState('ca')).toBe('CA');
    });

    test('truncates to 2 characters', () => {
      expect(normalizeState('california')).toBe('CA');
    });

    test('handles already normalized state', () => {
      expect(normalizeState('NY')).toBe('NY');
    });
  });

  describe('sanitizeInput', () => {
    test('removes html-like characters', () => {
      expect(sanitizeInput('Hello <script>alert("xss")</script>')).toBe('Hello alert("xss")');
    });

    test('preserves normal text', () => {
      expect(sanitizeInput('Normal text')).toBe('Normal text');
    });

    test('trims whitespace', () => {
      expect(sanitizeInput('  spaced  ')).toBe('spaced');
    });
  });
});
