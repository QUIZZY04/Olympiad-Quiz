const fs = require('fs');
const path = require('path');

console.log('=== AUDITING DUMMY/REPETITIVE QUESTIONS IN CLASS 5 HINDI ===\n');

const hubPath = path.resolve(__dirname, '..', 'ncert-solutions-class-5-hindi.html');
const content = fs.readFileSync(hubPath, 'utf8');

const sectionRegex = /<section class="chapter-section[^"]*" id="([^"]+)">([\s\S]*?)<\/section>/g;
let match;
let totalPlaceholderQs = 0;
let totalRealQs = 0;

while ((match = sectionRegex.exec(content)) !== null) {
  const secId = match[1];
  const secHtml = match[2];
  const titleMatch = secHtml.match(/<h2>(.*?)<\/h2>/);
  const secTitle = titleMatch ? titleMatch[1] : secId;

  // Extract each q-card
  const cardRegex = /<div class="q-card[^"]*" id="([^"]+)">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;
  let cardMatch;
  let chPlaceholders = 0;
  let chReal = 0;
  const placeholderIndices = [];

  const qRegex = /<span class="q-text">([\s\S]*?)<\/span>/g;
  let qM;
  let qIdx = 1;
  while ((qM = qRegex.exec(secHtml)) !== null) {
    const text = qM[1].replace(/<[^>]+>/g, '').trim();
    if (text.includes('[अभ्यास प्रश्न') || text.includes('के आधार पर इस प्रश्न का विस्तृत उत्तर दीजिए')) {
      chPlaceholders++;
      placeholderIndices.push(qIdx);
    } else {
      chReal++;
    }
    qIdx++;
  }

  totalPlaceholderQs += chPlaceholders;
  totalRealQs += chReal;

  if (chPlaceholders > 0) {
    console.log(`❌ Chapter [${secId}] "${secTitle}": Real = ${chReal}, Dummy/Repetitive = ${chPlaceholders} (Q${placeholderIndices[0]} to Q${placeholderIndices[placeholderIndices.length - 1]})`);
  } else {
    console.log(`✅ Chapter [${secId}] "${secTitle}": All ${chReal} questions are REAL`);
  }
}

console.log(`\n========================================`);
console.log(`TOTAL REAL QUESTIONS: ${totalRealQs}`);
console.log(`TOTAL DUMMY/REPETITIVE QUESTIONS: ${totalPlaceholderQs}`);
console.log(`TOTAL QUESTIONS IN HUB: ${totalRealQs + totalPlaceholderQs}`);
console.log(`========================================`);
