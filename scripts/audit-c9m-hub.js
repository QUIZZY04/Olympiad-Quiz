const fs = require('fs');
const path = require('path');

const hubFile = path.join(__dirname, '..', 'ncert-solutions-class-9-maths.html');
const dataFile = path.join(__dirname, '..', 'chapters-c9m', 'chapters-data.js');

const hubHtml = fs.readFileSync(hubFile, 'utf8');
const dataContent = fs.readFileSync(dataFile, 'utf8');

console.log('=== AUDITING CLASS 9 MATHS GANIT MANZARI HUB ===\n');

// 1. Check title & meta
const titleMatch = hubHtml.match(/<title>(.*?)<\/title>/);
console.log('Title:', titleMatch ? titleMatch[1] : 'MISSING');

// 2. Check hidden CSS
const hasHiddenCss = hubHtml.includes('.chapter-section.hidden{display:none !important;}');
console.log('Has .chapter-section.hidden CSS:', hasHiddenCss);

// 3. Check Chips
const chips = hubHtml.match(/class="bc-chip[^"]*"/g) || [];
console.log('Breadcrumb chips count:', chips.length);

// 4. Check Sidebar links
const sidebarLinks = hubHtml.match(/onclick="showChapter\(\d+\)"/g) || [];
console.log('Sidebar/Nav showChapter onclick count:', sidebarLinks.length);

// 5. Check sections in DOM
const sections = hubHtml.match(/<section class="chapter-section[^"]*" id="ch(\d+)">/g) || [];
console.log('Chapter sections in DOM:', sections.length);

// Verify each chapter section 1..14
for (let i = 1; i <= 14; i++) {
  const hasSec = hubHtml.includes(`id="ch${i}"`);
  if (!hasSec) console.error(`MISSING chapter section ch${i}!`);
}

// 6. Check chapters-data.js
let parsedData;
try {
  const jsonStr = dataContent.replace(/^\/\/.*?;\nwindow\.CHAPTER_DATA\s*=\s*/s, '').replace(/;\s*$/, '');
  parsedData = JSON.parse(jsonStr);
  console.log('chapters-data.js parsed successfully! Keys:', Object.keys(parsedData).join(', '));
} catch (e) {
  console.error('Failed to parse chapters-data.js:', e.message);
}

// 7. Check question cards count in hub
const qCards = hubHtml.match(/class="q-card"/g) || [];
console.log('Total question cards in hub:', qCards.length);

// 8. Check schema FAQ
const hasFaq = hubHtml.includes('How many chapters are in Class 9 Maths NCERT textbook Ganit Manzari');
console.log('Has Ganit Manzari in FAQ schema:', hasFaq);

console.log('\nAudit complete!');
