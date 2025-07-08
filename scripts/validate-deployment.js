#!/usr/bin/env node

// Script to validate GitHub Pages URL structure
import process from 'process';

console.log('📋 GitHub Pages Deployment Guide\n');

const repoUrl = 'https://mxd0-0.github.io/signio/';

console.log('🎯 Expected GitHub Pages URL:');
console.log(`   ${repoUrl}`);
console.log('');

console.log('❌ Common incorrect URLs that cause 404:');
console.log('   https://mxd0-0.github.io/src/main.jsx  (source file, not built)');
console.log('   https://mxd0-0.github.io/             (missing /signio/ path)');
console.log('');

console.log('✅ To fix the 404 error:');
console.log('1. Ensure GitHub Pages is set to deploy from "GitHub Actions" in repository settings');
console.log('2. OR run "npm run deploy" to deploy to gh-pages branch and set Pages to use gh-pages branch');
console.log('3. The GitHub Actions workflow will automatically deploy on every push to main');
console.log('');

console.log('🔍 To verify deployment:');
console.log(`1. Visit: ${repoUrl}`);
console.log('2. Check that the page loads without 404 errors');
console.log('3. Open browser dev tools to ensure all assets load from /signio/assets/');