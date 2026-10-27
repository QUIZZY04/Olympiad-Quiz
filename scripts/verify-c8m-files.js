const fs = require('fs');
const path = require('path');

const chDir = path.join(__dirname, '..', 'chapters-c8m');

console.log('=== Verifying chapters-c8m Chapter Files ===');
let grandTotalQs = 0;
let grandTotalCBQs = 0;

for (let i = 1; i <= 14; i++) {
  const f = path.join(chDir, `ch${i}.html`);
  if (!fs.existsSync(f)) {
    console.error(`ERROR: ch${i}.html not found!`);
    continue;
  }
  const content = fs.readFileSync(f, 'utf8');
  const titleM = content.match(/<h2>(.*?)<\/h2>/);
  const qCards = (content.match(/class="q-card"/g) || []).length;
  const cbqCards = (content.match(/class="case-study-box"|class="cbq-card"/g) || []).length;
  const markSchemes = (content.match(/class="marking-scheme"|class="marking-title"/g) || []).length;
  const svgs = (content.match(/<svg\b/g) || []).length;

  grandTotalQs += qCards;
  grandTotalCBQs += cbqCards;

  console.log(`Ch ${i.toString().padStart(2, ' ')}: ${titleM ? titleM[1] : 'N/A'} | Qs: ${qCards} | CBQs: ${cbqCards} | MarkingSchemes: ${markSchemes} | SVGs: ${svgs}`);
}

console.log('--------------------------------------------------');
console.log(`TOTAL Questions: ${grandTotalQs}`);
console.log(`TOTAL CBQs: ${grandTotalCBQs}`);
console.log(`GRAND TOTAL: ${grandTotalQs + grandTotalCBQs}`);
