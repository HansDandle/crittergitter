#!/usr/bin/env node

import { initializeDatabase } from '../lib/db';

async function migrate() {
  try {
    console.log('🔄 Initializing database schema...');
    await initializeDatabase();
    console.log('✅ Database migration completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Database migration failed:', error);
    process.exit(1);
  }
}

migrate();
