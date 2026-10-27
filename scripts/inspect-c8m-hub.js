const fs = require('fs');
const path = require('path');

const hubPath = path.join(__dirname, '..', 'ncert-solutions-class-8-maths.html');
const hubHtml = fs.readFileSync(hubPath, 'utf8');

console.log('--- Checking Question Counts in ncert-solutions-class-8-maths.html and chapters-c8m ---');
for (let i = 1; i <= 14; i++) {
  const nextCh = i === 14 ? '</main>' : `id="ch${i+1}"`;
  const startTag = `id="ch${i}"`;
  const startIdx = hubHtml.indexOf(startTag);
  const endIdx = hubHtml.indexOf(nextCh, startIdx);
  const secHtml = hubHtml.slice(startIdx, endIdx);
  
  const hubQs = (secHtml.match(/class="q-card"/g) || []).length;
  const hubCbqs = (secHtml.match(/class="cbq-card"/g) || []).length;

  const chFile = path.join(__dirname, '..', 'chapters-c8m', `ch${i}.html`);
  const fileContent = fs.readFileSync(chFile, 'utf8');
  const fileQs = (fileContent.match(/class="q-card"/g) || []).length;
  const fileCbqs = (fileContent.match(/class="cbq-card"/g) || []).length;

  console.log(`Ch ${i}: Hub Qs=${hubQs} (CBQs=${hubCbqs}) | File Qs=${fileQs} (CBQs=${fileCbqs})`);
}




// Also check how chapters are displayed or switched in JS!
const scriptMatches = hubHtml.match(/<script[\s\S]*?<\/script>/gi) || [];
console.log('\nScript tags in hub:', scriptMatches.length);
for (let s of scriptMatches) {
  if (s.includes('showChapter') || s.includes('CHAPTER_DATA') || s.includes('fetch') || s.includes('chapters-data')) {
    console.log('\n--- Script preview ---');
    console.log(s.slice(0, 500));
  }
}
