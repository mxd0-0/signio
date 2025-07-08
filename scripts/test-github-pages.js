#!/usr/bin/env node

// Simple test to validate the build output for GitHub Pages deployment
import fs from 'fs';
import path from 'path';
import process from 'process';

console.log('🔍 Testing GitHub Pages deployment readiness...\n');

const distPath = path.join(process.cwd(), 'dist');
const indexPath = path.join(distPath, 'index.html');
const nojekyllPath = path.join(distPath, '.nojekyll');

// Test 1: Check if dist folder exists
if (!fs.existsSync(distPath)) {
    console.error('❌ dist folder not found. Run "npm run build" first.');
    process.exit(1);
}
console.log('✅ dist folder exists');

// Test 2: Check if index.html exists
if (!fs.existsSync(indexPath)) {
    console.error('❌ index.html not found in dist folder.');
    process.exit(1);
}
console.log('✅ index.html exists');

// Test 3: Check if .nojekyll exists
if (!fs.existsSync(nojekyllPath)) {
    console.error('❌ .nojekyll file not found in dist folder.');
    process.exit(1);
}
console.log('✅ .nojekyll file exists');

// Test 4: Check if index.html has correct base paths
const indexContent = fs.readFileSync(indexPath, 'utf8');
const hasCorrectBasePaths = indexContent.includes('/signio/assets/');

if (!hasCorrectBasePaths) {
    console.error('❌ index.html does not have correct base paths for GitHub Pages.');
    console.log('Expected paths to include "/signio/" prefix');
    console.log('Current content:', indexContent);
    process.exit(1);
}
console.log('✅ index.html has correct base paths (/signio/)');

// Test 5: Check if assets folder exists
const assetsPath = path.join(distPath, 'assets');
if (!fs.existsSync(assetsPath)) {
    console.error('❌ assets folder not found in dist.');
    process.exit(1);
}
console.log('✅ assets folder exists');

// Test 6: Check if CSS and JS files exist in assets
const assetFiles = fs.readdirSync(assetsPath);
const hasCss = assetFiles.some(file => file.endsWith('.css'));
const hasJs = assetFiles.some(file => file.endsWith('.js'));

if (!hasCss) {
    console.error('❌ No CSS file found in assets folder.');
    process.exit(1);
}
console.log('✅ CSS file exists in assets');

if (!hasJs) {
    console.error('❌ No JS file found in assets folder.');
    process.exit(1);
}
console.log('✅ JS file exists in assets');

console.log('\n🎉 All tests passed! The build is ready for GitHub Pages deployment.');
console.log('\n📝 Deployment Instructions:');
console.log('1. Run "npm run deploy" to deploy to GitHub Pages');
console.log('2. Or manually copy the contents of the dist folder to your gh-pages branch');
console.log('3. The site should be available at: https://mxd0-0.github.io/signio/');