const fs = require('fs');
const path = require('path');

const chDir = path.join(__dirname, '..', 'chapters-c9m');

let mismatchCount = 0;
for (let i = 1; i <= 14; i++) {
  const p = path.join(chDir, `ch${i}.html`);
  const c = fs.readFileSync(p, 'utf8');
  
  // Find all cards
  const cardRegex = /<div class="q-card" id="([^"]+)">/g;
  const toggleRegex = /onclick="toggleQ\('([^']+)'\)"/g;
  
  const cardIds = [];
  let m;
  while ((m = cardRegex.exec(c)) !== null) {
    cardIds.push(m[1]);
  }
  
  const toggleIds = [];
  while ((m = toggleRegex.exec(c)) !== null) {
    toggleIds.push(m[1]);
  }
  
  if (cardIds.length !== toggleIds.length) {
    console.log(`Ch ${i}: Card count (${cardIds.length}) != toggle count (${toggleIds.length})`);
    mismatchCount++;
  } else {
    for (let k = 0; k < cardIds.length; k++) {
      if (cardIds[k] !== toggleIds[k]) {
        console.log(`Ch ${i}: Mismatch at index ${k}: card=${cardIds[k]} vs toggle=${toggleIds[k]}`);
        mismatchCount++;
      }
    }
  }
}

if (mismatchCount === 0) {
  console.log('✅ All Q card IDs and toggleQ IDs match perfectly across all 14 chapters!');
} else {
  console.log(`⚠️ Total mismatches: ${mismatchCount}`);
}
