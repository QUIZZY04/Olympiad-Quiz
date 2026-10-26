// scripts/test-ncert-dropdown.js
const fs = require('fs');
const path = require('path');

const ncertPath = path.join(__dirname, '..', 'ncert-solutions.html');
const html = fs.readFileSync(ncertPath, 'utf8');

// 1. Check Class 1 in ncertSolutionsMap
const mapMatch = html.match(/const ncertSolutionsMap = (\{[\s\S]*?\n  \};)/);
if (!mapMatch) {
  console.error('❌ FAIL: ncertSolutionsMap not found in ncert-solutions.html');
  process.exit(1);
}

const cleanedJson = mapMatch[1].replace(/;\s*$/, '');
const map = eval('(' + cleanedJson + ')');

if (!map['1']) {
  console.error('❌ FAIL: Class 1 missing from ncertSolutionsMap');
  process.exit(1);
}

console.log('✅ Class 1 in ncertSolutionsMap:');
console.log('   - Name:', map['1'].name);
console.log('   - Hub URL:', map['1'].hubUrl);
console.log('   - Subjects count:', map['1'].subjects.length);
map['1'].subjects.forEach(s => {
  const filePath = path.join(__dirname, '..', s.url);
  const exists = fs.existsSync(filePath);
  console.log(`     • ${s.name} -> ${s.url} [Exists: ${exists ? 'YES' : 'NO'}]`);
  if (!exists) {
    console.error(`❌ FAIL: Target file does not exist: ${s.url}`);
    process.exit(1);
  }
});

// 2. Check Class 1 in classSelect options
if (!html.includes('<option value="1">Class 1</option>')) {
  console.error('❌ FAIL: <option value="1">Class 1</option> missing in select element');
  process.exit(1);
}
console.log('✅ <option value="1">Class 1</option> verified in classSelect dropdown');

// 3. Check All Subjects in onClassChange
if (!html.includes("optAll.textContent = 'All Subjects (' + classInfo.name + ' Hub)'")) {
  console.error('❌ FAIL: All Subjects option missing in onClassChange');
  process.exit(1);
}
console.log('✅ All Subjects option verified in onClassChange');

console.log('\n🌟 DROPDOWN TEST PASSED 100%! Class 1 subjects now populate with full titles and direct links!');
