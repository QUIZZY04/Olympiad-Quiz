const fs = require('fs');
const path = require('path');

const chFiles = fs.readdirSync('chapters-c10m')
  .filter(f => f.startsWith('ch') && f.endsWith('.html'))
  .sort((a,b) => parseInt(a.replace(/\D/g, '')) - parseInt(b.replace(/\D/g, '')));

const results = [];

for (const file of chFiles) {
  const content = fs.readFileSync(path.join('chapters-c10m', file), 'utf8');
  const cards = content.split('<div class="q-card"').slice(1);
  const chNum = parseInt(file.replace(/\D/g, ''));
  
  cards.forEach((card, idx) => {
    const idMatch = card.match(/id="([^"]+)"/);
    const id = idMatch ? idMatch[1] : `unknown-${idx}`;
    const qNumMatch = card.match(/<div class="q-num">([^<]+)<\/div>/);
    const qNum = qNumMatch ? qNumMatch[1] : '';
    const qTextMatch = card.match(/<div class="q-text">([\s\S]*?)<\/div>\s*<div class="q-marks">/);
    const qText = qTextMatch ? qTextMatch[1].trim() : '';
    const hasDiag = card.includes('math-diagram-wrap');
    const mentionsFig = /\bfig\b|\bfigure\b|in the given figure|in fig/i.test(qText);
    
    // Check if question inherently requires diagram
    const isVisualTopic = [6, 8, 9, 10, 11, 12].includes(chNum);
    
    if (mentionsFig || hasDiag) {
      results.push({ file, chNum, id, qNum, mentionsFig, hasDiag, qText: qText.substring(0, 90) });
    }
  });
}

console.log(`Found ${results.length} total questions with figure mentions or existing diagrams:`);
results.forEach(r => {
  console.log(`[${r.file}] ${r.id} (${r.qNum}) | Diag: ${r.hasDiag ? 'YES' : 'NO '} | FigMention: ${r.mentionsFig ? 'YES' : 'NO '} | ${r.qText}...`);
});
