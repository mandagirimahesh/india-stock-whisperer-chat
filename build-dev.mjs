#!/usr/bin/env node

/**
 * Build script for development mode
 * This serves as a replacement for the missing "build:dev" npm script
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting development build...');

// Run the existing build:debug script which does the same thing
const buildProcess = spawn('npm', ['run', 'build:debug'], {
  stdio: 'inherit',
  shell: true,
  cwd: __dirname
});

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('✅ Development build completed successfully!');
    process.exit(0);
  } else {
    console.error(`❌ Build process exited with code ${code}`);
    process.exit(code);
  }
});

buildProcess.on('error', (err) => {
  console.error('❌ Failed to start build process:', err);
  process.exit(1);
});