import { ResidentialLead, EnterpriseLead } from '../types';
import { query } from './db';

export async function createResidentialLead(data: {
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
}): Promise<ResidentialLead> {
  const result = await query(
    `INSERT INTO residential_leads 
    (first_name, last_name, email, phone, address, city, state, zip_code, issue_type, issue_description, issue_severity, preferred_contact)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    RETURNING id, first_name as firstName, last_name as lastName, email, phone, address, city, state, zip_code as zipCode, 
              issue_type as issueType, issue_description as issueDescription, issue_severity as issueSeverity, 
              preferred_contact as preferredContact, status, partner_id as partnerId, created_at as createdAt`,
    [
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.address,
      data.city,
      data.state,
      data.zipCode,
      data.issueType,
      data.issueDescription,
      data.issueSeverity,
      data.preferredContact,
    ]
  );
  return result.rows[0];
}

export async function createEnterpriseLead(data: {
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
}): Promise<EnterpriseLead> {
  const result = await query(
    `INSERT INTO enterprise_leads 
    (company_name, contact_first_name, contact_last_name, email, phone, address, city, state, zip_code, 
     facility_type, square_footage, issues, project_scope, timeline, preferred_contact)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
    RETURNING id, company_name as companyName, contact_first_name as contactFirstName, 
              contact_last_name as contactLastName, email, phone, address, city, state, zip_code as zipCode,
              facility_type as facilityType, square_footage as squareFootage, issues, project_scope as projectScope,
              timeline, preferred_contact as preferredContact, status, partner_id as partnerId, created_at as createdAt`,
    [
      data.companyName,
      data.contactFirstName,
      data.contactLastName,
      data.email,
      data.phone,
      data.address,
      data.city,
      data.state,
      data.zipCode,
      data.facilityType,
      data.squareFootage || null,
      data.issues,
      data.projectScope,
      data.timeline,
      data.preferredContact,
    ]
  );
  return result.rows[0];
}

export async function getResidentialLeadById(id: string): Promise<ResidentialLead | null> {
  const result = await query(
    `SELECT id, first_name as firstName, last_name as lastName, email, phone, address, city, state, zip_code as zipCode,
            issue_type as issueType, issue_description as issueDescription, issue_severity as issueSeverity,
            preferred_contact as preferredContact, status, partner_id as partnerId, created_at as createdAt
    FROM residential_leads WHERE id = $1`,
    [id]
  );
  return result.rows[0] || null;
}

export async function getEnterpriseLeadById(id: string): Promise<EnterpriseLead | null> {
  const result = await query(
    `SELECT id, company_name as companyName, contact_first_name as contactFirstName,
            contact_last_name as contactLastName, email, phone, address, city, state, zip_code as zipCode,
            facility_type as facilityType, square_footage as squareFootage, issues, project_scope as projectScope,
            timeline, preferred_contact as preferredContact, status, partner_id as partnerId, created_at as createdAt
    FROM enterprise_leads WHERE id = $1`,
    [id]
  );
  return result.rows[0] || null;
}

export async function updateLeadStatus(
  table: 'residential_leads' | 'enterprise_leads',
  id: string,
  status: string,
  partnerId?: string
): Promise<void> {
  const params = partnerId ? [status, partnerId, id] : [status, id];
  const partnerClause = partnerId ? ', partner_id = $2' : '';
  const valueIndex = partnerId ? ' AND id = $3' : ' AND id = $2';

  await query(
    `UPDATE ${table} SET status = $1${partnerClause}, updated_at = CURRENT_TIMESTAMP WHERE id = ${valueIndex}`,
    params
  );
}

export async function getLeadsByStatus(
  table: 'residential_leads' | 'enterprise_leads',
  status: string
): Promise<any[]> {
  const result = await query(
    `SELECT * FROM ${table} WHERE status = $1 ORDER BY created_at DESC LIMIT 100`,
    [status]
  );
  return result.rows;
}
