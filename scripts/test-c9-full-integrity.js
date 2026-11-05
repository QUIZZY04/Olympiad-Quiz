// scripts/test-c9-full-integrity.js
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const MONO_FILES = [
  'ncert-solutions-class-9-maths.html',
  'ncert-solutions-class-9-science.html',
  'ncert-solutions-class-9-social-science.html',
  'ncert-solutions-class-9-hindi.html',
  'ncert-solutions-class-9-english.html'
];

const DIRS = [
  'chapters-c9m',
  'chapters-c9s',
  'chapters-c9sst',
  'chapters-c9h',
  'chapters-c9e'
];

let totalFilesChecked = 0;
let errorsFound = [];

// 1. Check Monolithic Files
for (const file of MONO_FILES) {
  const p = path.join(ROOT, file);
  totalFilesChecked++;
  const html = fs.readFileSync(p, 'utf8');

  if (html.includes('[object Object]')) errorsFound.push(`${file}: contains [object Object]`);
  if (html.includes('NaN')) errorsFound.push(`${file}: contains NaN`);
  if (html.includes('>undefined<')) errorsFound.push(`${file}: contains raw >undefined<`);
  if (html.includes('>null<')) errorsFound.push(`${file}: contains raw >null<`);
}

// 2. Check all chapter files in directories
for (const d of DIRS) {
  const dirPath = path.join(ROOT, d);
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));
  for (const f of files) {
    totalFilesChecked++;
    const p = path.join(dirPath, f);
    const html = fs.readFileSync(p, 'utf8');

    if (html.includes('[object Object]')) errorsFound.push(`${d}/${f}: contains [object Object]`);
    if (html.includes('NaN') && !html.includes('NaNO') && !html.includes('banana')) {
      // Check if it's actual JavaScript NaN
      const m = html.match(/\bNaN\b/);
      if (m) errorsFound.push(`${d}/${f}: contains word NaN`);
    }
    if (html.includes('>undefined<')) errorsFound.push(`${d}/${f}: contains raw >undefined<`);
    if (html.includes('>null<')) errorsFound.push(`${d}/${f}: contains raw >null<`);
  }

  // Check data.js syntax
  const dataJs = path.join(dirPath, 'chapters-data.js');
  if (fs.existsSync(dataJs)) {
    totalFilesChecked++;
    const jsCode = fs.readFileSync(dataJs, 'utf8');
    try {
      new Function(jsCode);
    } catch (e) {
      errorsFound.push(`${d}/chapters-data.js: SyntaxError - ${e.message}`);
    }
  }
}

console.log('========================================================================');
console.log('CLASS 9 DOM & SYNTAX INTEGRITY REPORT');
console.log('========================================================================');
console.log(`Total Files Inspected : ${totalFilesChecked}`);
console.log(`Total Errors / Issues : ${errorsFound.length}`);

if (errorsFound.length > 0) {
  console.log('Errors List:');
  errorsFound.forEach(err => console.log('  ❌ ' + err));
} else {
  console.log('✅ ALL CLASS 9 FILES PASSED DOM & SYNTAX INTEGRITY CHECK WITH 0 ISSUES!');
}
console.log('========================================================================');
