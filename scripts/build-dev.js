#!/usr/bin/env node

// Build script for development mode
// This serves as a workaround for the missing build:dev script
const { spawn } = require('child_process');

console.log('Running development build...');

const buildProcess = spawn('npm', ['run', 'build:debug'], {
  stdio: 'inherit',
  shell: true
});

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('Development build completed successfully!');
  } else {
    console.error(`Build process exited with code ${code}`);
    process.exit(code);
  }
});

buildProcess.on('error', (err) => {
  console.error('Failed to start build process:', err);
  process.exit(1);
});