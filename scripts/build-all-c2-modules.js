// scripts/build-all-c2-modules.js
// Generates all 124 Standalone Chapter Modules for Class 2 across 4 Subjects:
// 1. Mathematics: Joyful Mathematics (11 Ch) + Math-Magic (15 Ch) = 26 Ch
// 2. English: Mridang (13 Ch) + Marigold (20 Ch) = 33 Ch
// 3. Hindi: Sarangi (26 Ch) + Rimjhim (15 Ch) = 41 Ch
// 4. EVS: Living World (12 Ch) + Surroundings (12 Ch) = 24 Ch

const fs = require('fs');
const path = require('path');
const { generateChapterPage } = require('./builders/chapterTemplate.js');

// Load Data
const { joyfulMathsChapters } = require('./data-c2-maths/joyfulMathsData.js');
const { mathMagicChapters } = require('./data-c2-maths/mathMagicData.js');

const { mridangChapters } = require('./data-c2-english/mridangData.js');
const { marigoldChapters } = require('./data-c2-english/marigoldData.js');

const { sarangiChapters } = require('./data-c2-hindi/sarangiData.js');
const { rimjhimChapters } = require('./data-c2-hindi/rimjhimData.js');

const { livingWorldChapters } = require('./data-c2-evs/livingWorldData.js');
const { surroundingsChapters } = require('./data-c2-evs/surroundingsData.js');

const ROOT = path.resolve(__dirname, '..');

// Helper to build a track of chapters
function buildTrack({
  chapters,
  subjectName,
  subjectSlug,
  bookTitle,
  bookSlug,
  trackName,
  dirName,
  filePrefix
}) {
  const targetDir = path.join(ROOT, dirName);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  const sidebar = chapters.map(ch => ({
    num: ch.num,
    title: ch.title,
    filename: `${filePrefix}-ch${ch.num}.html`
  }));

  chapters.forEach((ch, idx) => {
    const prevLink = idx > 0
      ? { label: `Ch ${idx}: ${chapters[idx - 1].title}`, filename: `${filePrefix}-ch${idx}.html` }
      : null;
    const nextLink = idx < chapters.length - 1
      ? { label: `Ch ${idx + 2}: ${chapters[idx + 1].title}`, filename: `${filePrefix}-ch${idx + 2}.html` }
      : null;

    const pageHtml = generateChapterPage({
      classNum: 2,
      subjectName,
      subjectSlug,
      bookTitle,
      bookSlug,
      trackName,
      chNum: ch.num,
      totalChs: chapters.length,
      chId: ch.id,
      title: ch.title,
      subtitle: ch.subtitle,
      concepts: ch.concepts,
      svg: ch.svg,
      questions: ch.questions,
      cbq: ch.cbq,
      prevLink,
      nextLink,
      sidebarChapters: sidebar,
      canonicalUrl: `https://olympiadquiz.org/${dirName}/${filePrefix}-ch${ch.num}.html`
    });

    const outPath = path.join(targetDir, `${filePrefix}-ch${ch.num}.html`);
    fs.writeFileSync(outPath, pageHtml, 'utf8');
  });

  console.log(`✓ Built ${chapters.length} modules for [${bookTitle}] in ${dirName}/`);
}

console.log("=== BUILDING ALL CLASS 2 STANDALONE CHAPTER MODULES ===\n");

// 1. MATHEMATICS (26 Ch)
buildTrack({
  chapters: joyfulMathsChapters,
  subjectName: 'Mathematics',
  subjectSlug: 'maths',
  bookTitle: 'Joyful Mathematics',
  bookSlug: 'joyful-maths',
  trackName: 'New NEP 2020 / NCF-FS',
  dirName: 'chapters-c2m',
  filePrefix: 'joyful-maths'
});

buildTrack({
  chapters: mathMagicChapters,
  subjectName: 'Mathematics',
  subjectSlug: 'maths',
  bookTitle: 'Math-Magic',
  bookSlug: 'math-magic',
  trackName: 'Classic CBSE',
  dirName: 'chapters-c2m',
  filePrefix: 'math-magic'
});

// 2. ENGLISH (33 Ch)
buildTrack({
  chapters: mridangChapters,
  subjectName: 'English',
  subjectSlug: 'english',
  bookTitle: 'Mridang',
  bookSlug: 'mridang',
  trackName: 'New NEP 2020 / NCF-FS',
  dirName: 'chapters-c2e',
  filePrefix: 'mridang'
});

buildTrack({
  chapters: marigoldChapters,
  subjectName: 'English',
  subjectSlug: 'english',
  bookTitle: 'Marigold',
  bookSlug: 'marigold',
  trackName: 'Classic CBSE',
  dirName: 'chapters-c2e',
  filePrefix: 'marigold'
});

// 3. HINDI (41 Ch)
buildTrack({
  chapters: sarangiChapters,
  subjectName: 'Hindi',
  subjectSlug: 'hindi',
  bookTitle: 'सारंगी',
  bookSlug: 'sarangi',
  trackName: 'नवीन पाठ्यक्रम (NEP 2020)',
  dirName: 'chapters-c2h',
  filePrefix: 'sarangi'
});

buildTrack({
  chapters: rimjhimChapters,
  subjectName: 'Hindi',
  subjectSlug: 'hindi',
  bookTitle: 'रिमझिम',
  bookSlug: 'rimjhim',
  trackName: 'क्लासिक सीबीएसई',
  dirName: 'chapters-c2h',
  filePrefix: 'rimjhim'
});

// 4. ENVIRONMENTAL STUDIES (24 Ch)
buildTrack({
  chapters: livingWorldChapters,
  subjectName: 'Environmental Studies',
  subjectSlug: 'evs',
  bookTitle: 'Our Living World & Nature',
  bookSlug: 'living-world',
  trackName: 'Foundational EVS (NEP 2020)',
  dirName: 'chapters-c2evs',
  filePrefix: 'living-world'
});

buildTrack({
  chapters: surroundingsChapters,
  subjectName: 'Environmental Studies',
  subjectSlug: 'evs',
  bookTitle: 'Surroundings & Community',
  bookSlug: 'surroundings',
  trackName: 'Classic CBSE EVS',
  dirName: 'chapters-c2evs',
  filePrefix: 'surroundings'
});

console.log("\n=======================================================");
console.log("✅ ALL 124 CLASS 2 STANDALONE MODULES GENERATED!");
console.log("=======================================================");
