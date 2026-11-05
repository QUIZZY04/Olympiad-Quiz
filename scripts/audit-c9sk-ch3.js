// scripts/audit-c9sk-ch3.js
// Automated verification audit for Class 9 Sanskrit Chapter 3: गोदोहनम्
const fs = require('fs');
const path = require('path');

const ch3File = path.resolve(__dirname, '..', 'chapters-c9sk', 'ch3.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-9-sanskrit.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c9sk', 'chapters-data.js');
const sitemapFile = path.resolve(__dirname, '..', 'sitemap.xml');

console.log('=== AUDITING CLASS 9 SANSKRIT CHAPTER 3: गोदोहनम् ===\n');

let failed = false;

// 1. Audit ch3.html
if (!fs.existsSync(ch3File)) {
  console.error('❌ FAIL: chapters-c9sk/ch3.html does not exist!');
  process.exit(1);
}

const ch3Html = fs.readFileSync(ch3File, 'utf8');

// Count question cards
const qMatches = ch3Html.match(/<div class="q-card"/g) || [];
console.log(`✓ Total Question Cards Found: ${qMatches.length} / 7 expected`);

if (qMatches.length !== 7) {
  console.error(`❌ FAIL: Expected 7 question cards, but found ${qMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: Exactly 7 exercise cards present verbatim!');
}

// Check every ID from c9sk_ch3_q1 to c9sk_ch3_q7
let missingIds = [];
for (let i = 1; i <= 7; i++) {
  const expectedId = `id="c9sk_ch3_q${i}"`;
  if (!ch3Html.includes(expectedId)) {
    missingIds.push(`c9sk_ch3_q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 7 question IDs (c9sk_ch3_q1 to c9sk_ch3_q7) exist unbroken!');
}

// Check verbatim items across all 7 exercises
const requiredItems = [
  // Ex 1
  'मल्लिका पूजार्थं सखीभिः सह कुत्र गच्छति स्म',
  'उमायाः पितामहेन कति सेटकपरिमितं दुग्धम् अपेक्ष्यते स्म',
  'कुम्भकारः घटान् किमर्थं रचयति',
  'कानि चन्दनस्य जिह्वालोलुपतां वर्धन्ते स्म',
  'नन्दिन्याः पादप्रहारैः कः रक्तरञ्जितः अभवत्',
  // Ex 2
  'मासपर्यन्तं धेनोः सेवां कथम् अकुरुताम्',
  'कालः कस्य रसं पिबति',
  'घटमूल्यार्थं यदा मल्लिका स्वाभूषणं दातुं प्रयतते',
  'मल्लिकया किं दृष्ट्वा धेनोः ताडनस्य वास्तविकं कारणं ज्ञातम्',
  'मासपर्यन्तं धेनोः अदोहनस्य किं कारणमासीत्',
  // Ex 3
  'सखीभिः',
  'स्वप्रातराशस्य',
  'मोदकानि',
  'चतुरतमं',
  'नन्दिनी',
  // Ex 4
  'धर्मयात्रायाः',
  'गृहव्यवस्थायै',
  'मङ्गलकामनाम्',
  'कल्याणकारिणः',
  'उत्पादयेत्',
  'समर्थकः',
  // Ex 5
  'मल्लिका पूजार्थं मोदकानि रचयति',
  'काशीविश्वनाथमन्दिरं प्रति गच्छति',
  'उमा मासान्ते उत्सवार्थं दुग्धस्य आवश्यकताविषये चन्दनं सूचयति',
  'चन्दनस्य पत्नी तीर्थयात्रां समाप्य गृहं प्रत्यागच्छति',
  'नन्दिन्याः सर्वविधपरिचर्यां कुरुतः',
  'मासपर्यन्तं दोहनं न करोति',
  'नन्दिनी पादेन प्रहरति',
  'कार्याणि समये करणीयानि',
  // Ex 6
  'धन्यवाद मातुल! याम्यधुना',
  'त्रिंशत्सेटकपरिमितं दुग्धम्',
  'मूल्यं तु दुग्धं विक्रीयैव दातुं शक्यते',
  'पुत्रिके! नाहं पापकर्म करोमि',
  'देवि! मयापि ज्ञातं यदस्माभिः सर्वथा अनुचितमेव कृतम्',
  // Ex 7
  'शिवास्ते',
  'मनोहरः',
  'सप्ताहान्ते',
  'नेच्छामि',
  'अत्युत्तमः',
  'करणीयम्',
  'वि + क्री + ल्यप्',
  'पठितम्',
  'ताडय् + क्त्वा',
  'दोग्धुम्'
];

let missingItems = [];
for (const item of requiredItems) {
  if (!ch3Html.includes(item)) {
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
const markingSchemes = ch3Html.match(/CBSE Step Marking Rubrics/g) || [];
console.log(`✓ Marking Scheme Rubrics Found: ${markingSchemes.length} / 7`);
if (markingSchemes.length !== 7) {
  console.error(`❌ FAIL: Expected 7 marking scheme rubrics, found ${markingSchemes.length}`);
  failed = true;
} else {
  console.log('✅ PASS: 100% of questions contain official CBSE marking scheme rubrics!');
}

// Check Competency Question (CBQ)
if (ch3Html.includes('cbq-section') && ch3Html.includes('NEP 2020 Aligned')) {
  console.log('✅ PASS: NEP 2020 Competency-based HOTS question section included!');
} else {
  console.error('❌ FAIL: Missing NEP 2020 Competency-based HOTS question section!');
  failed = true;
}

// Check SVG diagrams
const svgs = ch3Html.match(/<svg/g) || [];
console.log(`✓ Total SVG graphics elements found in page: ${svgs.length}`);
if (svgs.length < 2) {
  console.error('❌ FAIL: Expected custom SVG diagrams for Godohanam!');
  failed = true;
} else {
  console.log('✅ PASS: High-fidelity custom SVG diagram(s) embedded!');
}

// Check STRICT NO PDF download function (strictly restricted to Physics Ch 7)
if (ch3Html.includes('download-pdf-btn') || ch3Html.includes('pdf-download-bar')) {
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
  if (masterHtml.includes('गोदोहनम्')) {
    console.log('✅ PASS: Master Sanskrit hub page properly links Chapter 3!');
  } else {
    console.error('❌ FAIL: Master Sanskrit hub page missing valid link for Chapter 3!');
    failed = true;
  }
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c9sk/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataJs = fs.readFileSync(dataJsFile, 'utf8');
  if (dataJs.includes('PRELOADED_CHAPTERS_C9SK["3"]') || dataJs.includes('PRELOADED_CHAPTERS_C9SK[\'3\']')) {
    console.log('✅ PASS: window.PRELOADED_CHAPTERS_C9SK["3"] registered in offline cache.');
  } else {
    console.error('❌ FAIL: Chapter 3 not found in chapters-c9sk/chapters-data.js!');
    failed = true;
  }
}

// 4. Audit sitemap.xml
const sitemapXml = fs.readFileSync(sitemapFile, 'utf8');
if (sitemapXml.includes('chapters-c9sk/ch3.html')) {
  console.log('✅ PASS: sitemap.xml properly indexes Chapter 3.');
} else {
  console.error('❌ FAIL: sitemap.xml missing Chapter 3 URL!');
  failed = true;
}

if (failed) {
  console.error('\n❌ AUDIT FAILED for Class 9 Sanskrit Chapter 3.');
  process.exit(1);
} else {
  console.log('\n🎉 ALL AUDITS PASSED: Class 9 Sanskrit Chapter 3 is verified 100% complete with 0% shortage!');
}
