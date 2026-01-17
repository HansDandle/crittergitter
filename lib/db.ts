import { Pool, PoolClient } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://localhost/crittergetter',
});

export async function getConnection(): Promise<PoolClient> {
  return pool.connect();
}

export async function query(text: string, params?: any[]): Promise<any> {
  const client = await getConnection();
  try {
    return await client.query(text, params);
  } finally {
    client.release();
  }
}

export async function initializeDatabase(): Promise<void> {
  const client = await getConnection();
  try {
    await client.query('BEGIN');

    // Residential leads table
    await client.query(`
      CREATE TABLE IF NOT EXISTS residential_leads (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        address VARCHAR(100) NOT NULL,
        city VARCHAR(50) NOT NULL,
        state VARCHAR(2) NOT NULL,
        zip_code VARCHAR(10) NOT NULL,
        issue_type VARCHAR(50) NOT NULL,
        issue_description TEXT NOT NULL,
        issue_severity VARCHAR(20) NOT NULL,
        preferred_contact VARCHAR(10) NOT NULL,
        status VARCHAR(20) DEFAULT 'new',
        partner_id UUID,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Enterprise leads table
    await client.query(`
      CREATE TABLE IF NOT EXISTS enterprise_leads (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        company_name VARCHAR(100) NOT NULL,
        contact_first_name VARCHAR(50) NOT NULL,
        contact_last_name VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        address VARCHAR(100) NOT NULL,
        city VARCHAR(50) NOT NULL,
        state VARCHAR(2) NOT NULL,
        zip_code VARCHAR(10) NOT NULL,
        facility_type VARCHAR(50) NOT NULL,
        square_footage INTEGER,
        issues TEXT[] NOT NULL,
        project_scope TEXT NOT NULL,
        timeline VARCHAR(100) NOT NULL,
        preferred_contact VARCHAR(10) NOT NULL,
        status VARCHAR(20) DEFAULT 'new',
        partner_id UUID,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Partners table
    await client.query(`
      CREATE TABLE IF NOT EXISTS partners (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(100) NOT NULL,
        license_number VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        service_area TEXT[] NOT NULL,
        specializations TEXT[] NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Indexes for performance
    await client.query('CREATE INDEX IF NOT EXISTS idx_residential_email ON residential_leads(email);');
    await client.query('CREATE INDEX IF NOT EXISTS idx_residential_status ON residential_leads(status);');
    await client.query('CREATE INDEX IF NOT EXISTS idx_enterprise_email ON enterprise_leads(email);');
    await client.query('CREATE INDEX IF NOT EXISTS idx_enterprise_status ON enterprise_leads(status);');

    await client.query('COMMIT');
    console.log('Database initialized successfully');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Database initialization failed:', error);
    throw error;
  } finally {
    client.release();
  }
}

export async function closePool(): Promise<void> {
  await pool.end();
}
