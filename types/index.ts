export interface ResidentialIssue {
  id: string;
  type: 'squirrels' | 'raccoons' | 'rats' | 'bats' | 'other';
  location: string;
  severity: 'minor' | 'moderate' | 'severe';
  description: string;
}

export interface ResidentialLead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  issues: ResidentialIssue[];
  preferredContact: 'phone' | 'email';
  createdAt: Date;
  status: 'new' | 'assigned' | 'contacted';
  partnerId?: string;
}

export interface EnterpriseLead {
  id: string;
  companyName: string;
  contactFirstName: string;
  contactLastName: string;
  email: string;
  phone: string;
  facilityType: 'commercial' | 'industrial' | 'food_service' | 'healthcare' | 'other';
  address: string;
  city: string;
  state: string;
  zipCode: string;
  squareFootage?: number;
  issues: string[];
  projectScope: string;
  timeline: string;
  preferredContact: 'phone' | 'email';
  createdAt: Date;
  status: 'new' | 'qualified' | 'assigned' | 'contacted';
  partnerId?: string;
}

export interface Partner {
  id: string;
  name: string;
  licenseNumber: string;
  email: string;
  phone: string;
  serviceArea: string[];
  specializations: string[];
  createdAt: Date;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}
