const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c10h');
const files = fs.readdirSync(dir).filter(f => f.startsWith('ch') && f.endsWith('.html'));
files.sort((a,b) => parseInt(a.slice(2)) - parseInt(b.slice(2)));

const results = [];

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const h2 = (content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/) || [])[1] || '';
  
  // Extract all questions
  const qRegex = /<div class="q-card" id="([^"]+)">[\s\S]*?<div class="q-num">([\s\S]*?)<\/div>[\s\S]*?<div class="q-text">([\s\S]*?)<\/div>/g;
  let match;
  const questions = [];
  while ((match = qRegex.exec(content)) !== null) {
    questions.push({
      id: match[1],
      num: match[2].trim(),
      text: match[3].replace(/<[^>]+>/g, '').trim()
    });
  }

  const cbqMatches = content.match(/class="[^"]*cbq-card[^"]*"/g) || [];
  const markingMatches = content.match(/class="[^"]*marking-scheme[^"]*"/g) || [];

  results.push({
    file: f,
    chapterNum: parseInt(f.slice(2)),
    title: h2.replace(/<[^>]+>/g, '').trim(),
    qCount: questions.length,
    questions,
    cbqCount: cbqMatches.length,
    markingCount: markingMatches.length
  });
});

console.log('CLASS 10 HINDI CHAPTER-BY-CHAPTER QUESTION AUDIT:');
console.log('--------------------------------------------------');
let totalQs = 0;
let totalCbqs = 0;
let totalMarkings = 0;

console.log('| Ch | Chapter Name | Book / Course | NCERT Qs | CBQs | Marking Schemes |');
console.log('|---|---|---|---|---|---|');
results.forEach(r => {
  totalQs += r.qCount;
  totalCbqs += r.cbqCount;
  totalMarkings += r.markingCount;
  const book = r.chapterNum <= 12 ? 'Kshitij-2 (Course A)' :
               r.chapterNum <= 15 ? 'Kritika-2 (Course A)' :
               r.chapterNum <= 29 ? 'Sparsh-2 (Course B)' : 'Sanchayan-2 (Course B)';
  console.log(`| ${r.chapterNum} | ${r.title.padEnd(30, ' ')} | ${book.padEnd(20, ' ')} | ${r.qCount} | ${r.cbqCount} | ${r.markingCount} |`);
});
console.log('--------------------------------------------------');
console.log(`TOTALS: ${results.length} Chapters | ${totalQs} Textbook Qs | ${totalCbqs} CBQs | ${totalMarkings} Marking Schemes`);

