import { z } from 'zod';
import { ValidationResult } from '../types';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(\+?1)?[-.\s]?(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
const zipCodeRegex = /^\d{5}(-\d{4})?$/;

export const residentialLeadSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(phoneRegex, 'Invalid phone number'),
  address: z.string().min(5, 'Address is required').max(100),
  city: z.string().min(2, 'City is required').max(50),
  state: z.string().length(2, 'State must be 2 letters'),
  zipCode: z.string().regex(zipCodeRegex, 'Invalid zip code'),
  issueType: z.enum(['squirrels', 'raccoons', 'rats', 'bats', 'other']),
  issueDescription: z.string().min(10, 'Provide more detail').max(1000),
  issueSeverity: z.enum(['minor', 'moderate', 'severe']),
  preferredContact: z.enum(['phone', 'email']),
});

export const enterpriseLeadSchema = z.object({
  companyName: z.string().min(2, 'Company name is required').max(100),
  contactFirstName: z.string().min(1, 'Contact first name is required').max(50),
  contactLastName: z.string().min(1, 'Contact last name is required').max(50),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(phoneRegex, 'Invalid phone number'),
  address: z.string().min(5, 'Address is required').max(100),
  city: z.string().min(2, 'City is required').max(50),
  state: z.string().length(2, 'State must be 2 letters'),
  zipCode: z.string().regex(zipCodeRegex, 'Invalid zip code'),
  facilityType: z.enum(['commercial', 'industrial', 'food_service', 'healthcare', 'other']),
  squareFootage: z.number().min(0).optional(),
  issues: z.array(z.string()).min(1, 'Select at least one issue'),
  projectScope: z.string().min(10, 'Please describe the project (10+ characters)').max(2000),
  timeline: z.string().min(1, 'Timeline is required').max(100),
  preferredContact: z.enum(['phone', 'email']),
});

export function validateResidentialLead(data: unknown): ValidationResult {
  try {
    residentialLeadSchema.parse(data);
    return { valid: true, errors: {} };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach((err) => {
        const path = err.path.join('.');
        errors[path] = err.message;
      });
      return { valid: false, errors };
    }
    return { valid: false, errors: { _general: 'Validation failed' } };
  }
}

export function validateEnterpriseLead(data: unknown): ValidationResult {
  try {
    enterpriseLeadSchema.parse(data);
    return { valid: true, errors: {} };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach((err) => {
        const path = err.path.join('.');
        errors[path] = err.message;
      });
      return { valid: false, errors };
    }
    return { valid: false, errors: { _general: 'Validation failed' } };
  }
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export function formatPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  const match = digits.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (!match) return phone;
  return `(${match[1]}) ${match[2]}-${match[3]}`;
}

export function normalizeState(state: string): string {
  return state.toUpperCase().substring(0, 2);
}
