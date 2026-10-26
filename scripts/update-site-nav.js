// scripts/update-site-nav.js
// Updates global site navigation in ncert-solutions.html and dashboard.html to include Class 1

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// 1. UPDATE ncert-solutions.html
const ncertPath = path.join(ROOT, 'ncert-solutions.html');
let ncertHtml = fs.readFileSync(ncertPath, 'utf8');

// Nav dropdown
if (!ncertHtml.includes('href="ncert-solutions-class-1.html"')) {
  ncertHtml = ncertHtml.replace(
    '<a href="ncert-solutions-class-2.html"><strong>Class 2 Solutions ✨</strong></a>',
    '<a href="ncert-solutions-class-1.html"><strong>Class 1 Solutions ✨</strong></a>\n          <a href="ncert-solutions-class-2.html"><strong>Class 2 Solutions ✨</strong></a>'
  );
  console.log('✓ Added Class 1 to ncert-solutions.html nav dropdown');
}

// Select option
if (!ncertHtml.includes('<option value="1">Class 1</option>')) {
  ncertHtml = ncertHtml.replace(
    '<option value="2">Class 2</option>',
    '<option value="1">Class 1</option>\n            <option value="2">Class 2</option>'
  );
  console.log('✓ Added Class 1 option to ncert-solutions.html select element');
}

// FAQ 1 text
if (!ncertHtml.includes('<strong>Class 1:</strong>')) {
  ncertHtml = ncertHtml.replace(
    '<li><strong>Class 2:</strong>',
    '<li><strong>Class 1:</strong> Mathematics (Joyful Mathematics &amp; Math-Magic Book 1), English (Mridang &amp; Marigold Book 1), Hindi (सारंगी - Sarangi &amp; रिमझिम - Rimjhim), and Environmental Studies (Our Living World &amp; Surroundings) — All 117 Chapters strictly covered with 100% question coverage, CBSE rubrics &amp; NEP 2020 Case Studies.</li>\n            <li><strong>Class 2:</strong>'
  );
  console.log('✓ Added Class 1 to ncert-solutions.html FAQ 1 list');
}

// ncertSolutionsMap entry
const class1MapEntry = `    "1": {
      name: "Class 1",
      hubUrl: "ncert-solutions-class-1.html",
      subjects: [
        { name: "Mathematics (Joyful Mathematics & Math-Magic)", url: "ncert-solutions-class-1-maths.html" },
        { name: "English (Mridang & Marigold)", url: "ncert-solutions-class-1-english.html" },
        { name: "Hindi (सारंगी - Sarangi & रिमझिम - Rimjhim)", url: "ncert-solutions-class-1-hindi.html" },
        { name: "Environmental Studies / EVS (Our Living World & Surroundings)", url: "ncert-solutions-class-1-evs.html" }
      ]
    },
`;

if (!ncertHtml.includes('"1": {')) {
  ncertHtml = ncertHtml.replace(
    'const ncertSolutionsMap = {\n    "2": {',
    'const ncertSolutionsMap = {\n' + class1MapEntry + '    "2": {'
  );
  console.log('✓ Added Class 1 to ncertSolutionsMap in ncert-solutions.html');
}

// initFromHash entry
if (!ncertHtml.includes("hash === 'class1'")) {
  ncertHtml = ncertHtml.replace(
    "if (hash === 'class2' || hash === '2') classVal = '2';",
    "if (hash === 'class1' || hash === '1') classVal = '1';\n    else if (hash === 'class2' || hash === '2') classVal = '2';"
  );
  console.log('✓ Added Class 1 to initFromHash in ncert-solutions.html');
}

fs.writeFileSync(ncertPath, ncertHtml, 'utf8');
console.log('✅ Successfully updated ncert-solutions.html\n');


// 2. UPDATE dashboard.html
const dashPath = path.join(ROOT, 'dashboard.html');
let dashHtml = fs.readFileSync(dashPath, 'utf8');

// Nav dropdown
if (!dashHtml.includes('href="ncert-solutions-class-1.html"')) {
  dashHtml = dashHtml.replace(
    '<a href="ncert-solutions-class-2.html">Class 2 Solutions ✨</a>',
    '<a href="ncert-solutions-class-1.html">Class 1 Solutions ✨</a>\n                        <a href="ncert-solutions-class-2.html">Class 2 Solutions ✨</a>'
  );
  console.log('✓ Added Class 1 to dashboard.html nav dropdown');
}

// NCERT card description
if (dashHtml.includes('Classes 2 to 10')) {
  dashHtml = dashHtml.replace(
    'Classes 2 to 10',
    'Classes 1 to 10'
  );
  console.log('✓ Updated NCERT Card in dashboard.html to Classes 1 to 10');
}

fs.writeFileSync(dashPath, dashHtml, 'utf8');
console.log('✅ Successfully updated dashboard.html');
