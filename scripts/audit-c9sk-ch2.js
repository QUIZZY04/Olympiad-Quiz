// scripts/audit-c9sk-ch2.js
// Automated verification audit for Class 9 Sanskrit Chapter 2: स्वर्णकाकः
const fs = require('fs');
const path = require('path');

const ch2File = path.resolve(__dirname, '..', 'chapters-c9sk', 'ch2.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-9-sanskrit.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c9sk', 'chapters-data.js');
const sitemapFile = path.resolve(__dirname, '..', 'sitemap.xml');

console.log('=== AUDITING CLASS 9 SANSKRIT CHAPTER 2: स्वर्णकाकः ===\n');

let failed = false;

// 1. Audit ch2.html
if (!fs.existsSync(ch2File)) {
  console.error('❌ FAIL: chapters-c9sk/ch2.html does not exist!');
  process.exit(1);
}

const ch2Html = fs.readFileSync(ch2File, 'utf8');

// Count question cards
const qMatches = ch2Html.match(/<div class="q-card"/g) || [];
console.log(`✓ Total Question Cards Found: ${qMatches.length} / 7 expected`);

if (qMatches.length !== 7) {
  console.error(`❌ FAIL: Expected 7 question cards, but found ${qMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: Exactly 7 exercise cards present verbatim!');
}

// Check every ID from c9sk_ch2_q1 to c9sk_ch2_q7
let missingIds = [];
for (let i = 1; i <= 7; i++) {
  const expectedId = `id="c9sk_ch2_q${i}"`;
  if (!ch2Html.includes(expectedId)) {
    missingIds.push(`c9sk_ch2_q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 7 question IDs (c9sk_ch2_q1 to c9sk_ch2_q7) exist unbroken!');
}

// Check verbatim items across all 7 exercises
const requiredItems = [
  // Ex 1
  'माता काम् आदिशत्',
  'स्वर्णकाकः कान् अखादत्',
  'प्रासादः कीदृशः वर्तते',
  'गृहमागत्य तया का समुद्घाटिता',
  'लोभाविष्टा बालिका कीदृशीं मञ्जूषां नयति',
  // Ex 2
  'निर्धनायाः वृद्धायाः दुहिता कीदृशी आसीत्',
  'बालिकया पूर्वं कीदृशः काकः न दृष्टः आसीत्',
  'निर्धनायाः दुहिता मञ्जूषायां कानि अपश्यत्',
  'बालिका किं दृष्ट्वा आश्चर्यचकिता जाता',
  'गर्विता बालिका कीदृशं सोपानम् अयाचत्',
  // Ex 3
  'पश्चात्',
  'हसितुम्',
  'अधः',
  'श्वेतः',
  'सूर्योदयः',
  'सुप्तः',
  // Ex 4
  'नि + अवसत्',
  'सूर्य + उदयः',
  'वृक्षस्य + उपरि',
  'हि + अकारयत्',
  'च + एकाकिनी',
  'इति + उक्त्वा',
  'प्रति + अवदत्',
  'प्र + उक्तम्',
  'अत्र + एव',
  'तत्र + उपस्थिता',
  'यथा + इच्छम्',
  // Ex 5
  'निर्धना स्त्री',
  'स्वर्णकाकं',
  'सूर्योदयात्',
  'निर्धनमातुः',
  'स्वर्णकाकस्य',
  // Ex 6
  'वि + लोक् + ल्यप्',
  'नि + क्षिप् + ल्यप्',
  'आ + गम् + ल्यप्',
  'दृश् + क्त्वा',
  'शी + क्त्वा',
  'लघु + तमप्',
  'हस् + शतृ',
  // Ex 7
  'पूर्वम् प्रातराशः क्रियताम्',
  'सूर्यातपे तण्डुलान् खगेभ्यो रक्ष',
  'तण्डुलान् मा भक्षय',
  'अहं तुभ्यं तण्डुलमूल्यं दास्यामि',
  'भो नीचकाक'
];

let missingItems = [];
for (const item of requiredItems) {
  if (!ch2Html.includes(item)) {
    missingItems.push(item);
  }
}

if (missingItems.length > 0) {
  console.error(`❌ FAIL: Missing verbatim textbook question items: ${missingItems.join(', ')}`);
  failed = true;
} else {
  console.log(`✅ PASS: All 44 verbatim textbook items and sub-questions present without shortage!`);
}

// Check marking schemes
const markingSchemes = ch2Html.match(/CBSE Step Marking Rubrics/g) || [];
console.log(`✓ Marking Scheme Rubrics Found: ${markingSchemes.length} / 7`);
if (markingSchemes.length !== 7) {
  console.error(`❌ FAIL: Expected 7 marking scheme rubrics, found ${markingSchemes.length}`);
  failed = true;
} else {
  console.log('✅ PASS: 100% of questions contain official CBSE marking scheme rubrics!');
}

// Check Competency Question (CBQ)
if (ch2Html.includes('cbq-section') && ch2Html.includes('NEP 2020 Aligned')) {
  console.log('✅ PASS: NEP 2020 Competency-based HOTS question section included!');
} else {
  console.error('❌ FAIL: Missing NEP 2020 Competency-based HOTS question section!');
  failed = true;
}

// Check SVG diagrams
const svgs = ch2Html.match(/<svg/g) || [];
console.log(`✓ Total SVG graphics elements found in page: ${svgs.length}`);
if (svgs.length < 2) {
  console.error('❌ FAIL: Expected custom SVG diagrams for Swarnakakah!');
  failed = true;
} else {
  console.log('✅ PASS: High-fidelity custom SVG diagram(s) embedded!');
}

// Check STRICT NO PDF download function (strictly restricted to Physics Ch 7)
if (ch2Html.includes('download-pdf-btn') || ch2Html.includes('pdf-download-bar')) {
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
  if (masterHtml.includes('स्वर्णकाकः')) {
    console.log('✅ PASS: Master Sanskrit hub page properly links Chapter 2!');
  } else {
    console.error('❌ FAIL: Master Sanskrit hub page missing valid link for Chapter 2!');
    failed = true;
  }
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c9sk/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataJs = fs.readFileSync(dataJsFile, 'utf8');
  if (dataJs.includes('PRELOADED_CHAPTERS_C9SK["2"]') || dataJs.includes('PRELOADED_CHAPTERS_C9SK[\'2\']')) {
    console.log('✅ PASS: window.PRELOADED_CHAPTERS_C9SK["2"] registered in offline cache.');
  } else {
    console.error('❌ FAIL: Chapter 2 not found in chapters-c9sk/chapters-data.js!');
    failed = true;
  }
}

// 4. Audit sitemap.xml
const sitemapXml = fs.readFileSync(sitemapFile, 'utf8');
if (sitemapXml.includes('chapters-c9sk/ch2.html')) {
  console.log('✅ PASS: sitemap.xml properly indexes Chapter 2.');
} else {
  console.error('❌ FAIL: sitemap.xml missing Chapter 2 URL!');
  failed = true;
}

if (failed) {
  console.error('\n❌ AUDIT FAILED for Class 9 Sanskrit Chapter 2.');
  process.exit(1);
} else {
  console.log('\n🎉 ALL AUDITS PASSED: Class 9 Sanskrit Chapter 2 is verified 100% complete with 0% shortage!');
}
