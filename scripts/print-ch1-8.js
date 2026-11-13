const fs = require('fs');
const path = require('path');

const chDir = path.join(__dirname, '..', 'chapters-c8m');

console.log('========================================================================================');
console.log('📋 COMPLETE INVENTORY: CHAPTERS 1 TO 8');
console.log('========================================================================================\n');

for (let i = 1; i <= 8; i++) {
  const f = path.join(chDir, `ch${i}.html`);
  const content = fs.readFileSync(f, 'utf8');
  const titleM = content.match(/<h2>(.*?)<\/h2>/);
  const title = titleM ? titleM[1].replace(/<[^>]+>/g, '').trim() : `Chapter ${i}`;

  const qRegex = /<div class="q-card" id="([^"]+)">[\s\S]*?<div class="q-num">([^<]+)<\/div>[\s\S]*?<div class="q-text">([\s\S]*?)<\/div>[\s\S]*?<div class="q-marks">([^<]+)<\/div>/g;
  let m;
  const questions = [];
  while ((m = qRegex.exec(content)) !== null) {
    const id = m[1];
    const num = m[2].trim();
    const text = m[3].replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
    const marks = m[4].trim();
    questions.push({ id, num, text, marks });
  }

  const cbqMatches = [];
  const cbqRegex = /<div class="(?:case-study-box|cbq-card)"[\s\S]*?(?:<div class="case-study-desc"[^>]*>|<div class="cbq-question"[^>]*>)([\s\S]*?)<\/div>/g;
  let cm;
  while ((cm = cbqRegex.exec(content)) !== null) {
    cbqMatches.push(cm[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 100));
  }

  console.log(`📘 CHAPTER ${i}: ${title}`);
  console.log(`   Total Question Cards: ${questions.length} | CBQ: ${cbqMatches.length}`);
  questions.forEach(q => {
    console.log(`   [${q.num}] (${q.marks}) ${q.text.slice(0, 95)}...`);
  });
  if (cbqMatches.length > 0) {
    cbqMatches.forEach((cbq, cidx) => {
      console.log(`   [CBQ ${cidx+1}] ${cbq}...`);
    });
  }
  console.log('');
}
