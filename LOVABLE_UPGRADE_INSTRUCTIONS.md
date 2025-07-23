// Instructions for enabling latest Lovable features

/*
TO ENABLE LATEST LOVABLE FEATURES:

1. Add this script to package.json manually:
   "build:dev": "vite build --mode development"

2. Once added, uncomment the componentTagger import and plugin in vite.config.ts:
   
   // Add this import:
   import { componentTagger } from 'lovable-tagger';
   
   // Update plugins array to:
   plugins: [
     react(),
     mode === 'development' && componentTagger(),
   ].filter(Boolean),

3. The componentTagger enables advanced development features like:
   - Component highlighting in the browser
   - Better debugging capabilities
   - Enhanced development experience

Current Status: 
- ✅ Dependencies installed (lovable-tagger, @types/node)
- ✅ Path aliases configured
- ✅ Server configuration updated
- ⚠️  componentTagger disabled (waiting for build:dev script)

Steps to complete:
1. Connect to GitHub integration
2. Edit package.json in your repository
3. Add "build:dev": "vite build --mode development" to scripts
4. Uncomment componentTagger in vite.config.ts
*/