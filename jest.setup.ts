import '@testing-library/jest-dom';

// Mock environment variables for tests
process.env.DATABASE_URL = 'postgresql://test:test@localhost/crittergetter_test';
process.env.NODE_ENV = 'test';
