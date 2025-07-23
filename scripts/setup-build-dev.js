/**
 * Setup script to create a symbolic build:dev command
 * This creates a workaround for the missing build:dev npm script
 */

const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json');

try {
  // Read the current package.json
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Add the build:dev script if it doesn't exist
  if (!packageJson.scripts['build:dev']) {
    packageJson.scripts['build:dev'] = 'vite build --mode development';
    
    // Write back to package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log('✅ Added build:dev script to package.json');
  } else {
    console.log('ℹ️ build:dev script already exists');
  }
} catch (error) {
  console.error('❌ Failed to update package.json:', error.message);
  console.log('💡 Manual fix required: Add "build:dev": "vite build --mode development" to package.json scripts');
}