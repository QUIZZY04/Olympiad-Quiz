const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('ncert-solutions.html', 'utf8');

// Extract ncertSolutionsMap
const mapMatch = html.match(/const ncertSolutionsMap = (\{[\s\S]*?\n  \};)/);
assert(mapMatch, 'ncertSolutionsMap must exist');

const map = eval('(' + mapMatch[1].replace(/;\s*$/, '') + ')');
console.log('Testing ncertSolutionsMap for Classes 1 to 10:\n');

let allPassed = true;

for (let c = 1; c <= 10; c++) {
  const cStr = String(c);
  const entry = map[cStr];
  if (!entry) {
    console.error(`❌ Class ${c} missing from ncertSolutionsMap`);
    allPassed = false;
    continue;
  }

  // Check hubUrl
  const hubUrl = entry.hubUrl || `ncert-solutions-class-${c}.html`;
  const hubExists = fs.existsSync(hubUrl);
  if (!hubExists) {
    console.error(`❌ Class ${c} Hub file does not exist: ${hubUrl}`);
    allPassed = false;
  } else {
    console.log(`✅ Class ${c} Hub: ${hubUrl} (Exists on disk)`);
  }

  // Check all subjects
  if (!entry.subjects || entry.subjects.length === 0) {
    console.error(`❌ Class ${c} has no subjects`);
    allPassed = false;
  } else {
    entry.subjects.forEach(sub => {
      const exists = fs.existsSync(sub.url);
      if (!exists) {
        console.error(`  ❌ Subject ${sub.name} -> ${sub.url} DOES NOT EXIST!`);
        allPassed = false;
      } else {
        console.log(`  ✓ Subject: ${sub.name} -> ${sub.url}`);
      }
    });
  }
}

if (allPassed) {
  console.log('\n🎉 ALL CLASSES 1-10 AND SUBJECTS EXIST ON DISK WITH ZERO 404s!');
} else {
  console.error('\n⚠️ Some files are missing!');
  process.exit(1);
}
