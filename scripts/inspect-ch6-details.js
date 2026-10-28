const fs = require('fs');

const content = fs.readFileSync('chapters-c10m/ch6.html', 'utf8');
const cards = content.split('<div class="q-card"').slice(1);

cards.forEach((card, idx) => {
  const idMatch = card.match(/id="([^"]+)"/);
  const id = idMatch ? idMatch[1] : `unknown-${idx}`;
  const qNumMatch = card.match(/<div class="q-num">([^<]+)<\/div>/);
  const qNum = qNumMatch ? qNumMatch[1] : '';
  const qTextMatch = card.match(/<div class="q-text">([\s\S]*?)<\/div>\s*<div class="q-marks">/);
  const qText = qTextMatch ? qTextMatch[1].trim() : '';
  const hasDiag = card.includes('math-diagram-wrap');
  const mentionsFig = /fig|figure/i.test(qText);
  if (hasDiag || mentionsFig) {
    console.log(`[${id}] (${qNum}) MentionsFig: ${mentionsFig}, HasDiag: ${hasDiag}`);
    console.log(`  Text: ${qText.substring(0, 110)}...`);
  }
});
