const fs = require('fs');
const path = require('path');

const ch1 = fs.readFileSync(path.join(__dirname, '..', 'chapters-c9m', 'ch1.html'), 'utf8');

console.log('--- ch1.html headers / divisions ---');
const matches = ch1.match(/<div class="(?:ex-div|cbq-[^"]*|sec-[^"]*)">[\s\S]*?<\/div>/g) || [];
matches.forEach(m => console.log(m.replace(/\s+/g, ' ').slice(0, 100)));

console.log('\n--- Checking CBSE occurrences in all chapters-c9m ---');
const files = fs.readdirSync(path.join(__dirname, '..', 'chapters-c9m')).filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(path.join(__dirname, '..', 'chapters-c9m', f), 'utf8');
  const cbseMatches = (content.match(/CBSE\s+Marking\s+Scheme/gi) || []).length;
  const cbseAns = (content.match(/CBSE\s+Standard\s+Answer/gi) || []).length;
  const manzari = (content.match(/manzari/gi) || []).length;
  console.log(`${f}: CBSE Marking Scheme=${cbseMatches}, CBSE Standard Answer=${cbseAns}, Manzari=${manzari}`);
});
