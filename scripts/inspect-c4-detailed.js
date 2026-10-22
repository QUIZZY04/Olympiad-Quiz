const fs = require('fs');
const path = require('path');

const subjects = [
  {
    name: 'Mathematics',
    file: path.resolve(__dirname, '../ncert-solutions-class-4-maths.html'),
    dataNew: path.resolve(__dirname, 'data-c4-maths/mathsMelaData.js'),
    dataOld: path.resolve(__dirname, 'data-c4-maths/mathMagicData.js'),
    keyNew: 'mathsMelaChapters',
    keyOld: 'mathMagicChapters'
  },
  {
    name: 'English',
    file: path.resolve(__dirname, '../ncert-solutions-class-4-english.html'),
    dataNew: path.resolve(__dirname, 'data-c4-english/santoorData.js'),
    dataOld: path.resolve(__dirname, 'data-c4-english/marigoldData.js'),
    keyNew: 'santoorChapters',
    keyOld: 'marigoldUnits'
  },
  {
    name: 'Hindi',
    file: path.resolve(__dirname, '../ncert-solutions-class-4-hindi.html'),
    dataNew: path.resolve(__dirname, 'data-c4-hindi/veenaData.js'),
    dataOld: path.resolve(__dirname, 'data-c4-hindi/rimjhimData.js'),
    keyNew: 'veenaChapters',
    keyOld: 'rimjhimChapters'
  },
  {
    name: 'EVS / The World Around Us',
    file: path.resolve(__dirname, '../ncert-solutions-class-4-evs.html'),
    dataNew: path.resolve(__dirname, 'data-c4-evs/wondrousWorldData.js'),
    dataOld: path.resolve(__dirname, 'data-c4-evs/lookingAroundData.js'),
    keyNew: 'wondrousWorldChapters',
    keyOld: 'lookingAroundChapters'
  }
];

subjects.forEach(s => {
  const modNew = require(s.dataNew)[s.keyNew];
  const modOld = require(s.dataOld)[s.keyOld];
  const html = fs.readFileSync(s.file, 'utf8');

  const qNew = modNew.reduce((a, c) => a + (c.questions ? c.questions.length : 0), 0);
  const cbqNew = modNew.filter(c => c.cbq).length;
  const qOld = modOld.reduce((a, c) => a + (c.questions ? c.questions.length : 0), 0);
  const cbqOld = modOld.filter(c => c.cbq).length;

  const qCards = (html.match(/class="q-card"/g) || []).length;
  const cbqBoxes = (html.match(/class="cbq-card"/g) || []).length;
  const chSections = (html.match(/class="chapter-section"/g) || []).length;

  console.log(`=== ${s.name} ===`);
  console.log(`New Edition (${s.keyNew}): ${modNew.length} chapters, ${qNew} questions, ${cbqNew} CBQs`);
  console.log(`Classic Edition (${s.keyOld}): ${modOld.length} chapters, ${qOld} questions, ${cbqOld} CBQs`);
  console.log(`Total In Dataset: ${qNew + qOld} questions + ${cbqNew + cbqOld} CBQs = ${qNew + qOld + cbqNew + cbqOld} items`);
  console.log(`Rendered on Live HTML: ${chSections} chapter sections, ${qCards} question cards, ${cbqBoxes} CBQ cards`);
  console.log('');
});
