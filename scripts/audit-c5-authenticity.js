const fs = require('fs');
const path = require('path');

const books = [
  { file: 'scripts/data-c5-maths/mathsMelaData.js', name: 'Maths Mela (New NEP 2020)', key: 'mathsMelaChapters' },
  { file: 'scripts/data-c5-maths/mathMagicData.js', name: 'Math-Magic (Classic CBSE)', key: 'mathMagicChapters' },
  { file: 'scripts/data-c5-english/santoorData.js', name: 'Santoor (New NEP 2020)', key: 'santoorChapters' },
  { file: 'scripts/data-c5-english/marigoldData.js', name: 'Marigold (Classic CBSE)', key: 'marigoldUnits' },
  { file: 'scripts/data-c5-hindi/veenaData.js', name: 'Veena (New NEP 2020)', key: 'veenaChapters' },
  { file: 'scripts/data-c5-hindi/rimjhimData.js', name: 'Rimjhim (Classic CBSE)', key: 'rimjhimChapters' },
  { file: 'scripts/data-c5-evs/wondrousWorldData.js', name: 'Our Wondrous World (New NEP 2020)', key: 'wondrousWorldChapters' },
  { file: 'scripts/data-c5-evs/lookingAroundData.js', name: 'Looking Around (Classic CBSE)', key: 'lookingAroundChapters' }
];

console.log('========================================================================================');
console.log('REAL 100% COVERAGE & SHORTAGE AUDIT FOR CLASS 5 (ALL 8 TEXTBOOKS, 107 CHAPTERS)');
console.log('========================================================================================\n');

let totalReport = [];

books.forEach(b => {
  const fullPath = path.resolve(process.cwd(), b.file);
  const chapters = require(fullPath)[b.key] || [];
  
  let bTotal = 0;
  let bAuthentic = 0;
  let bDuplicates = 0;
  let bPlaceholders = 0;

  console.log(`\n--- ${b.name} (${chapters.length} Chapters) ---`);

  chapters.forEach((ch, idx) => {
    const qs = ch.questions || [];
    const seen = new Set();
    let dupes = 0;
    let placeholders = 0;
    let authentic = 0;

    qs.forEach((q, qIdx) => {
      const qText = (q.q || q.question || '').trim();
      const isPlaceholder = qText.includes('[Ex ') || 
                            qText.includes('Based on the curriculum of') ||
                            qText.includes('solve the practical application problem') ||
                            qText.includes('analyze the following arithmetic progression') ||
                            qText.includes('mystery number $N$') ||
                            qText.includes('solve the textbook exercise problem and show the complete calculation steps');
      
      if (isPlaceholder) {
        placeholders++;
      } else if (seen.has(qText)) {
        dupes++;
      } else {
        authentic++;
        seen.add(qText);
      }
    });

    bTotal += qs.length;
    bAuthentic += authentic;
    bDuplicates += dupes;
    bPlaceholders += placeholders;

    if (placeholders > 0 || dupes > 0 || authentic < 15) {
      console.log(`  Ch ${idx+1} [${ch.id}] "${ch.title}": Total ${qs.length} | AUTHENTIC: ${authentic} | PLACEHOLDERS: ${placeholders} | DUPLICATES: ${dupes}`);
    }
  });

  console.log(`SUMMARY for ${b.name}: Total: ${bTotal} | Authentic: ${bAuthentic} | Placeholders: ${bPlaceholders} | Duplicates: ${bDuplicates}`);
  totalReport.push({ book: b.name, total: bTotal, authentic: bAuthentic, placeholders: bPlaceholders, duplicates: bDuplicates });
});

console.log('\n========================================================================================');
console.log('OVERALL AUDIT SUMMARY:');
console.log('========================================================================================');
let sumTot = 0, sumAuth = 0, sumPlace = 0, sumDup = 0;
totalReport.forEach(r => {
  sumTot += r.total; sumAuth += r.authentic; sumPlace += r.placeholders; sumDup += r.duplicates;
  console.log(`${r.book.padEnd(36)} | Total: ${String(r.total).padStart(4)} | Authentic: ${String(r.authentic).padStart(4)} | Placeholders: ${String(r.placeholders).padStart(4)} | Duplicates: ${String(r.duplicates).padStart(4)}`);
});
console.log('----------------------------------------------------------------------------------------');
console.log(`${'TOTAL ALL 8 BOOKS'.padEnd(36)} | Total: ${String(sumTot).padStart(4)} | Authentic: ${String(sumAuth).padStart(4)} | Placeholders: ${String(sumPlace).padStart(4)} | Duplicates: ${String(sumDup).padStart(4)}`);
