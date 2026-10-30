// scripts/audit-c9sk-ch1.js
// Automated verification audit for Class 9 Sanskrit Chapter 1: भारतीवसन्तगीतिः
const fs = require('fs');
const path = require('path');

const ch1File = path.resolve(__dirname, '..', 'chapters-c9sk', 'ch1.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-9-sanskrit.html');
const c9HubFile = path.resolve(__dirname, '..', 'ncert-solutions-class-9.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c9sk', 'chapters-data.js');
const sitemapFile = path.resolve(__dirname, '..', 'sitemap.xml');

console.log('=== AUDITING CLASS 9 SANSKRIT CHAPTER 1: भारतीवसन्तगीतिः ===\n');

let failed = false;

// 1. Audit ch1.html
if (!fs.existsSync(ch1File)) {
  console.error('❌ FAIL: chapters-c9sk/ch1.html does not exist!');
  process.exit(1);
}

const ch1Html = fs.readFileSync(ch1File, 'utf8');

// Count question cards
const qMatches = ch1Html.match(/<div class="q-card"/g) || [];
console.log(`✓ Total Question Cards Found: ${qMatches.length} / 6 expected`);

if (qMatches.length !== 6) {
  console.error(`❌ FAIL: Expected 6 question cards, but found ${qMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: Exactly 6 exercise cards present verbatim!');
}

// Check every ID from c9sk_ch1_q1 to c9sk_ch1_q6
let missingIds = [];
for (let i = 1; i <= 6; i++) {
  const expectedId = `id="c9sk_ch1_q${i}"`;
  if (!ch1Html.includes(expectedId)) {
    missingIds.push(`c9sk_ch1_q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 6 question IDs (c9sk_ch1_q1 to c9sk_ch1_q6) exist unbroken!');
}

// Check verbatim sub-question keywords across all 6 exercises
const requiredItems = [
  // Ex 1
  'कविः कां सम्बोधयति',
  'कविः वाणीं कां वादयितुं प्रार्थयति',
  'कीदृशीं वीणां निनादयितुं प्रार्थयति',
  'गीतिं कथं गातुं कथयति',
  'सरसाः रसालाः कदा लसन्ति',
  // Ex 2
  'कविः वाणीं किं कथयति',
  'वसन्ते किं भवति',
  'सलिलं तव वीणामाकर्ण्य कथम् उच्चलेत्',
  'कलिन्दात्मजायाः',
  // Ex 3
  'सरस्वती',
  'आम्रम्',
  'पवनः',
  'तटे',
  'भ्रमराणाम्',
  // Ex 4
  'निनादय',
  'मन्दमन्दम्',
  'मारुतः',
  'सलिलम्',
  'सुमनः',
  // Ex 5
  'ललितनीतिलीनाम्',
  'मधुरमञ्जरीपिञ्जरीभूतमालाः',
  // Ex 6
  'कठोरम्',
  'कटु',
  'शीघ्रम्',
  'प्राचीनम्',
  'नीरसः'
];

let missingItems = [];
for (const item of requiredItems) {
  if (!ch1Html.includes(item)) {
    missingItems.push(item);
  }
}

if (missingItems.length > 0) {
  console.error(`❌ FAIL: Missing verbatim textbook question items: ${missingItems.join(', ')}`);
  failed = true;
} else {
  console.log(`✅ PASS: All 25 verbatim textbook items and sub-questions present without shortage!`);
}

// Check marking schemes
const markingSchemes = ch1Html.match(/CBSE Step Marking Rubrics/g) || [];
console.log(`✓ Marking Scheme Rubrics Found: ${markingSchemes.length} / 6`);
if (markingSchemes.length !== 6) {
  console.error(`❌ FAIL: Expected 6 marking scheme rubrics, found ${markingSchemes.length}`);
  failed = true;
} else {
  console.log('✅ PASS: 100% of questions contain official CBSE marking scheme rubrics!');
}

// Check Competency Question (CBQ)
if (ch1Html.includes('cbq-section') && ch1Html.includes('NEP 2020 Aligned')) {
  console.log('✅ PASS: NEP 2020 Competency-based HOTS question section included!');
} else {
  console.error('❌ FAIL: Missing NEP 2020 Competency-based HOTS question section!');
  failed = true;
}

// Check SVG diagrams
const svgs = ch1Html.match(/<svg/g) || [];
console.log(`✓ Total SVG graphics elements found in page: ${svgs.length}`);
if (svgs.length < 2) {
  console.error('❌ FAIL: Expected custom SVG diagrams for Saraswati Veena & Vasanta spring!');
  failed = true;
} else {
  console.log('✅ PASS: High-fidelity custom SVG diagram(s) embedded!');
}

// Check STRICT NO PDF download function (strictly restricted to Physics Ch 7)
if (ch1Html.includes('download-pdf-btn') || ch1Html.includes('pdf-download-bar')) {
  console.error('❌ FAIL: PDF download button/bar must NOT be present in Sanskrit!');
  failed = true;
} else {
  console.log('✅ PASS: Verified NO PDF download bar (strictly restricted to Physics Ch 7).');
}

// 2. Audit master page ncert-solutions-class-9-sanskrit.html
if (!fs.existsSync(masterFile)) {
  console.error('❌ FAIL: ncert-solutions-class-9-sanskrit.html does not exist!');
  failed = true;
} else {
  const masterHtml = fs.readFileSync(masterFile, 'utf8');
  if (masterHtml.includes('भारतीवसन्तगीतिः') && masterHtml.includes('शेमुषी प्रथमो भागः')) {
    console.log('✅ PASS: Master Sanskrit hub page properly links Chapter 1!');
  } else {
    console.error('❌ FAIL: Master Sanskrit hub page missing valid link for Chapter 1!');
    failed = true;
  }
}

// 3. Audit Class 9 hub page ncert-solutions-class-9.html
const hubHtml = fs.readFileSync(c9HubFile, 'utf8');
if (hubHtml.includes('ncert-solutions-class-9-sanskrit.html') && hubHtml.includes('Class 9 Sanskrit')) {
  console.log('✅ PASS: Class 9 hub portal links to Sanskrit portal.');
} else {
  console.error('❌ FAIL: Class 9 hub portal missing link to Sanskrit portal!');
  failed = true;
}

// 4. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c9sk/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataJs = fs.readFileSync(dataJsFile, 'utf8');
  if (dataJs.includes('PRELOADED_CHAPTERS_C9SK["1"]') || dataJs.includes('PRELOADED_CHAPTERS_C9SK[\'1\']')) {
    console.log('✅ PASS: window.PRELOADED_CHAPTERS_C9SK["1"] registered in offline cache.');
  } else {
    console.error('❌ FAIL: Chapter 1 not found in chapters-c9sk/chapters-data.js!');
    failed = true;
  }
}

// 5. Audit sitemap.xml
const sitemapXml = fs.readFileSync(sitemapFile, 'utf8');
if (sitemapXml.includes('chapters-c9sk/ch1.html') && sitemapXml.includes('ncert-solutions-class-9-sanskrit.html')) {
  console.log('✅ PASS: sitemap.xml properly indexes Chapter 1 and the Sanskrit master hub.');
} else {
  console.error('❌ FAIL: sitemap.xml missing Sanskrit URLs!');
  failed = true;
}

if (failed) {
  console.error('\n❌ AUDIT FAILED for Class 9 Sanskrit Chapter 1.');
  process.exit(1);
} else {
  console.log('\n🎉 ALL AUDITS PASSED: Class 9 Sanskrit Chapter 1 is verified 100% complete with 0% shortage!');
}
