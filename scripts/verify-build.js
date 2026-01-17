#!/usr/bin/env node

/**
 * Pre-build verification script
 * Runs linting, type checking, and test coverage before build
 */

const { execSync } = require('child_process');

const steps = [
  { name: '📝 ESLint', cmd: 'pnpm lint' },
  { name: '📦 TypeScript Type Check', cmd: 'pnpm type-check' },
  { name: '🧪 Running Tests', cmd: 'pnpm test' },
];

let failed = false;

console.log('🔍 Running pre-build verification...\n');

for (const step of steps) {
  try {
    console.log(`${step.name}...`);
    execSync(step.cmd, { stdio: 'inherit' });
    console.log(`✓ ${step.name} passed\n`);
  } catch (error) {
    console.error(`❌ ${step.name} failed\n`);
    failed = true;
    break;
  }
}

if (failed) {
  console.error('❌ Pre-build verification failed. Fix errors above before building.');
  process.exit(1);
} else {
  console.log('✅ All pre-build checks passed! Ready to build.');
  process.exit(0);
}
