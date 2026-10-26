const fs = require('fs');
const path = require('path');

function analyzeDataset(filePath, exportName) {
  const fullPath = path.resolve(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) {
    console.log('File not found:', fullPath);
    return;
  }
  const mod = require(fullPath);
  const chapters = mod[exportName] || [];
  console.log(`\n==================================================`);
  console.log(`Dataset: ${exportName} (${chapters.length} chapters)`);
  console.log(`==================================================`);
  
  chapters.forEach((ch, i) => {
    const qs = ch.questions || [];
    // Count how many questions start with "[Ex " or "Based on the curriculum of" or generic template text
    const genericQs = qs.filter(q => {
      const text = q.q || q.question || '';
      return text.includes('Based on the curriculum of') || 
             text.includes('[Ex ') || 
             text.includes('solve the practical application problem') ||
             text.includes('analyze the following arithmetic progression') ||
             text.includes('mystery number $N$');
    });
    const realQs = qs.length - genericQs.length;
    console.log(`Ch ${i+1} [${ch.id}] "${ch.title}": Total ${qs.length} | Real: ${realQs} | Generic/Template: ${genericQs.length}`);
  });
}

analyzeDataset('./scripts/data-c5-maths/mathsMelaData.js', 'mathsMelaChapters');
analyzeDataset('./scripts/data-c5-maths/mathMagicData.js', 'mathMagicChapters');
analyzeDataset('./scripts/data-c5-english/santoorData.js', 'santoorChapters');
analyzeDataset('./scripts/data-c5-english/marigoldData.js', 'marigoldUnits');
analyzeDataset('./scripts/data-c5-hindi/veenaData.js', 'veenaChapters');
analyzeDataset('./scripts/data-c5-hindi/rimjhimData.js', 'rimjhimChapters');
analyzeDataset('./scripts/data-c5-evs/wondrousWorldData.js', 'wondrousWorldChapters');
analyzeDataset('./scripts/data-c5-evs/lookingAroundData.js', 'lookingAroundChapters');
