const fs = require('fs');
const path = require('path');

console.log('=== INSPECTING CLASS 5 DATA & HTML ===');

// 1. Maths
const mathsHtml = fs.readFileSync('ncert-solutions-class-5-maths.html', 'utf8');
const melaMatches = mathsHtml.match(/id="mela-ch\d+"/g) || [];
const magicMatches = mathsHtml.match(/id="magic-ch\d+"/g) || [];
console.log('Maths Mela chapter IDs:', melaMatches);
console.log('Math Magic chapter IDs:', magicMatches);

// Let's check chapter titles in Maths
function getTitles(prefix, count) {
  const titles = [];
  for (let i = 1; i <= count; i++) {
    const start = mathsHtml.indexOf(`id="${prefix}-ch${i}"`);
    if (start !== -1) {
      const end = mathsHtml.indexOf('</article>', start);
      const snip = mathsHtml.substring(start, end);
      const tm = snip.match(/<h2[^>]*class="ch-title"[^>]*>([^<]+)<\/h2>/) || snip.match(/<h2[^>]*>([^<]+)<\/h2>/);
      const qCards = (snip.match(/class="q-card"/g) || []).length;
      titles.push({ num: i, title: tm ? tm[1].trim() : 'Unknown', qCards });
    }
  }
  return titles;
}

console.log('\nMaths Mela Chapters:', getTitles('mela', 15));
console.log('\nMath Magic Chapters:', getTitles('magic', 14));

// 2. English
const { santoorChapters } = require('./data-c5-english/santoorData.js');
const { marigoldUnits } = require('./data-c5-english/marigoldData.js');
console.log(`\nSantoor: ${santoorChapters.length} chapters`);
santoorChapters.forEach(c => console.log(`  Ch ${c.num}: ${c.title} (${(c.questions||[]).length} Qs)`));

console.log(`\nMarigold: ${marigoldUnits.length} units`);
marigoldUnits.forEach(c => console.log(`  Unit ${c.num}: ${c.title} (${(c.questions||[]).length} Qs)`));

// 3. Hindi
const { veenaChapters } = require('./data-c5-hindi/veenaData.js');
const { rimjhimUnits } = require('./data-c5-hindi/rimjhimData.js');
console.log(`\nVeena: ${veenaChapters.length} chapters`);
veenaChapters.forEach(c => console.log(`  Ch ${c.num}: ${c.title} (${(c.questions||[]).length} Qs)`));

console.log(`\nRimjhim: ${rimjhimUnits.length} chapters`);
rimjhimUnits.forEach(c => console.log(`  Ch ${c.num}: ${c.title} (${(c.questions||[]).length} Qs)`));

// 4. EVS
const { wondrousWorldChapters } = require('./data-c5-evs/wondrousWorldData.js');
const { lookingAroundChapters } = require('./data-c5-evs/lookingAroundData.js');
console.log(`\nOur Wondrous World: ${wondrousWorldChapters.length} chapters`);
wondrousWorldChapters.forEach(c => console.log(`  Ch ${c.num}: ${c.title} (${(c.questions||[]).length} Qs)`));

console.log(`\nLooking Around: ${lookingAroundChapters.length} chapters`);
lookingAroundChapters.forEach(c => console.log(`  Ch ${c.num}: ${c.title} (${(c.questions||[]).length} Qs)`));
