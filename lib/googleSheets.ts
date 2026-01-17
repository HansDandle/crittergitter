import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID || '1APlIE0zGOPURBh2ED5GXjHyZpsxiPcgd8uGEXRofl8w';

function getServiceAccountAuth(): JWT {
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!serviceAccountEmail || !privateKey) {
    throw new Error('Google Sheets credentials not configured. Set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY environment variables.');
  }

  return new JWT({
    email: serviceAccountEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

async function getSpreadsheet(): Promise<GoogleSpreadsheet> {
  const auth = getServiceAccountAuth();
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID, auth);
  await doc.loadInfo();
  return doc;
}

export interface ResidentialLeadRow {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  issueType: string;
  issueDescription: string;
  issueSeverity: string;
  preferredContact: string;
}

export interface EnterpriseLeadRow {
  companyName: string;
  contactFirstName: string;
  contactLastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  facilityType: string;
  squareFootage?: number;
  issues: string[];
  projectScope: string;
  timeline: string;
  preferredContact: string;
}

function generateLeadId(): string {
  return `RL-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
}

function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length === 11 && digits.startsWith('1')) {
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  return phone;
}

function formatIssueType(issueType: string): string {
  const map: Record<string, string> = {
    squirrels: 'Squirrels',
    raccoons: 'Raccoons',
    rats: 'Rats',
    bats: 'Bats',
    other: 'Other',
  };
  return map[issueType] || issueType;
}

function formatSeverity(severity: string): string {
  const map: Record<string, string> = {
    minor: 'Minor',
    moderate: 'Moderate',
    severe: 'Severe',
  };
  return map[severity] || severity;
}

function formatFacilityType(facilityType: string): string {
  const map: Record<string, string> = {
    commercial: 'Commercial Building',
    industrial: 'Industrial Facility',
    food_service: 'Food Service / Restaurant',
    healthcare: 'Healthcare Facility',
    other: 'Other',
  };
  return map[facilityType] || facilityType;
}

function formatTimeline(timeline: string): string {
  const map: Record<string, string> = {
    immediate: 'Immediate (within 1 week)',
    urgent: 'Urgent (within 1-2 weeks)',
    standard: 'Standard (within 1 month)',
    planning: 'Planning Phase (1+ months)',
  };
  return map[timeline] || timeline;
}

function formatIssues(issues: string[]): string {
  const map: Record<string, string> = {
    rodent_exclusion: 'Rodent Prevention & Exclusion',
    bird_control: 'Bird Control & Deterrents',
    structural_assessment: 'Structural Vulnerability Assessment',
    perimeter_hardening: 'Perimeter Hardening',
    sanitation_consulting: 'Sanitation & Risk Assessment',
    compliance: 'Regulatory Compliance Support',
  };
  return issues.map(issue => map[issue] || issue).join(', ');
}

export async function appendResidentialLead(data: ResidentialLeadRow): Promise<string> {
  const doc = await getSpreadsheet();
  const sheet = doc.sheetsByTitle['Residential'];
  
  if (!sheet) {
    throw new Error('Residential sheet not found in spreadsheet');
  }

  const leadId = generateLeadId();
  const timestamp = new Date().toISOString();

  await sheet.addRow({
    'Timestamp': timestamp,
    'Lead ID': leadId,
    'First Name': data.firstName,
    'Last Name': data.lastName,
    'Email': data.email,
    'Phone': formatPhone(data.phone),
    'Address': data.address,
    'City': data.city,
    'State': data.state.toUpperCase(),
    'Zip Code': data.zipCode,
    'Issue Type': formatIssueType(data.issueType),
    'Issue Description': data.issueDescription,
    'Issue Severity': formatSeverity(data.issueSeverity),
    'Preferred Contact': data.preferredContact === 'phone' ? 'Phone' : 'Email',
    'Status': 'New',
    'Notes': '',
  });

  return leadId;
}

export async function appendEnterpriseLead(data: EnterpriseLeadRow): Promise<string> {
  const doc = await getSpreadsheet();
  const sheet = doc.sheetsByTitle['Enterprise'];
  
  if (!sheet) {
    throw new Error('Enterprise sheet not found in spreadsheet');
  }

  const leadId = generateLeadId().replace('RL-', 'EL-');
  const timestamp = new Date().toISOString();

  await sheet.addRow({
    'Timestamp': timestamp,
    'Lead ID': leadId,
    'Company Name': data.companyName,
    'Contact First Name': data.contactFirstName,
    'Contact Last Name': data.contactLastName,
    'Email': data.email,
    'Phone': formatPhone(data.phone),
    'Address': data.address,
    'City': data.city,
    'State': data.state.toUpperCase(),
    'Zip Code': data.zipCode,
    'Facility Type': formatFacilityType(data.facilityType),
    'Square Footage': data.squareFootage || '',
    'Issues': formatIssues(data.issues),
    'Project Scope': data.projectScope,
    'Timeline': formatTimeline(data.timeline),
    'Preferred Contact': data.preferredContact === 'phone' ? 'Phone' : 'Email',
    'Status': 'New',
    'Notes': '',
  });

  return leadId;
}
