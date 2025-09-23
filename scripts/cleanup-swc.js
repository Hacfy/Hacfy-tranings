#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const nodeModulesPath = path.join(__dirname, '..', 'node_modules', '@next');

// List of SWC binaries to remove (keep only win32-x64-msvc)
const swcBinariesToRemove = [
  'swc-linux-x64-gnu',
  'swc-linux-x64-musl',
  'swc-linux-arm64-gnu',
  'swc-linux-arm64-musl',
  'swc-darwin-x64',
  'swc-darwin-arm64',
  'swc-win32-ia32-msvc',
  'swc-win32-arm64-msvc',
];

console.log('🧹 Cleaning up unnecessary SWC binaries...');

swcBinariesToRemove.forEach(binary => {
  const binaryPath = path.join(nodeModulesPath, binary);
  
  if (fs.existsSync(binaryPath)) {
    try {
      fs.rmSync(binaryPath, { recursive: true, force: true });
      console.log(`✅ Removed: ${binary}`);
    } catch (error) {
      console.log(`❌ Failed to remove: ${binary} - ${error.message}`);
    }
  } else {
    console.log(`ℹ️  Not found: ${binary}`);
  }
});

console.log('✨ Cleanup complete! This should reduce webpack warnings.');
