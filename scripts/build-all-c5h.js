const fs = require('fs');
const path = require('path');

const { generateChapterPage } = require('./builders/chapterTemplate.js');
const { veenaChapters } = require('./data-c5-hindi/veenaData.js');
const { rimjhimChapters } = require('./data-c5-hindi/rimjhimData.js');

const outDir = path.join(__dirname, '..', 'chapters-c5h');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Class 5 Hindi uses 100% authentic, verbatim NCERT questions from data files.


console.log("=== BUILDING MODULAR CHAPTERS FOR CLASS 5 HINDI ===");

// 1. Build Veena (12 Chapters)
const vnSidebar = veenaChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `veena-ch${ch.num}.html`
}));

veenaChapters.forEach((ch, idx) => {
  const currentQs = ch.questions || [];

  const prevLink = idx > 0 ? { label: `पाठ ${idx}: ${veenaChapters[idx - 1].title}`, filename: `veena-ch${idx}.html` } : null;
  const nextLink = idx < veenaChapters.length - 1 ? { label: `पाठ ${idx + 2}: ${veenaChapters[idx + 1].title}`, filename: `veena-ch${idx + 2}.html` } : null;

  const pageHtml = generateChapterPage({
    classNum: 5,
    subjectName: 'Hindi',
    subjectSlug: 'hindi',
    bookTitle: 'Veena',
    bookSlug: 'veena',
    trackName: 'New NEP 2020 / NCF 2023',
    chNum: ch.num,
    totalChs: 12,
    chId: ch.id,
    title: ch.title,
    subtitle: ch.subtitle,
    concepts: ch.concepts,
    svg: ch.svg,
    questions: currentQs,
    cbq: ch.cbq,
    prevLink,
    nextLink,
    sidebarChapters: vnSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c5h/veena-ch${ch.num}.html`
  });

  const outPath = path.join(outDir, `veena-ch${ch.num}.html`);
  fs.writeFileSync(outPath, pageHtml, 'utf8');
  console.log(`[Veena] Built Chapter ${ch.num}: ${ch.title} -> ${currentQs.length} Qs (${pageHtml.length.toLocaleString()} bytes)`);
});

// 2. Build Rimjhim (14 Chapters)
const rjSidebar = rimjhimChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `rimjhim-ch${ch.num}.html`
}));

rimjhimChapters.forEach((ch, idx) => {
  const currentQs = ch.questions || [];

  const prevLink = idx > 0 ? { label: `पाठ ${idx}: ${rimjhimChapters[idx - 1].title}`, filename: `rimjhim-ch${idx}.html` } : null;
  const nextLink = idx < rimjhimChapters.length - 1 ? { label: `पाठ ${idx + 2}: ${rimjhimChapters[idx + 1].title}`, filename: `rimjhim-ch${idx + 2}.html` } : null;

  const pageHtml = generateChapterPage({
    classNum: 5,
    subjectName: 'Hindi',
    subjectSlug: 'hindi',
    bookTitle: 'Rimjhim',
    bookSlug: 'rimjhim',
    trackName: 'Classic CBSE Track',
    chNum: ch.num,
    totalChs: 14,
    chId: ch.id,
    title: ch.title,
    subtitle: ch.subtitle,
    concepts: ch.concepts,
    svg: ch.svg,
    questions: currentQs,
    cbq: ch.cbq,
    prevLink,
    nextLink,
    sidebarChapters: rjSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c5h/rimjhim-ch${ch.num}.html`
  });

  const outPath = path.join(outDir, `rimjhim-ch${ch.num}.html`);
  fs.writeFileSync(outPath, pageHtml, 'utf8');
  console.log(`[Rimjhim] Built Chapter ${ch.num}: ${ch.title} -> ${currentQs.length} Qs (${pageHtml.length.toLocaleString()} bytes)`);
});

console.log("✅ All 26 Class 5 Hindi modular chapters successfully generated in chapters-c5h/!");
