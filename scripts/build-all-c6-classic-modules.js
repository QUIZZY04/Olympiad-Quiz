// scripts/build-all-c6-classic-modules.js
// Generates Standalone Chapter Modules for all Classic CBSE Class 6 Textbooks
// Dual-Track Architecture matching Class 3, 4, 5

const fs = require('fs');
const path = require('path');
const { generateChapterPageC6 } = require('./builders/chapterTemplateC6.js');

const { mathsClassicChapters } = require('./data-c6-classic/mathsClassicData.js');
const { scienceClassicChapters } = require('./data-c6-classic/scienceClassicData.js');
const { englishClassicChapters } = require('./data-c6-classic/englishClassicData.js');
const { sstClassicChapters } = require('./data-c6-classic/sstClassicData.js');

function renderChapterBody(ch, subjectPrefix, bookName) {
  const conceptsHtml = (ch.concepts && ch.concepts.length > 0) ? `
    <div class="concept-card">
      <div class="concept-header">📌 Key Concepts &amp; Formulas</div>
      <ul class="concept-list">
        ${ch.concepts.map(c => `<li>${c}</li>`).join('')}
      </ul>
    </div>
  ` : '';

  const svgHtml = ch.svg ? `
    <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      ${ch.svg}
    </div>
  ` : '';

  const questionsHtml = (ch.questions || []).map((q, idx) => {
    const qId = `${subjectPrefix}-q${idx + 1}`;
    const rubricRows = (q.rubric || []).map(r => `
      <div class="marking-row"><span class="marking-key">${r.key}</span><span class="marking-marks">${r.marks}</span></div>
    `).join('');

    return `
      <div class="q-card" id="${qId}">
        <div class="q-head" onclick="toggleQ('${qId}')">
          <div class="q-num">Q${q.num || idx + 1}</div>
          <div class="q-text">${q.title}</div>
          <div class="q-marks">[${q.marks || 3} Marks]</div>
          <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
        </div>
        <div class="q-answer">
          <div class="answer-box">
            <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
            <div class="answer-text">
              <div class="step">${q.ans}</div>
            </div>
            ${rubricRows ? `
            <div class="marking-scheme">
              <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
              ${rubricRows}
            </div>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  const cbqHtml = ch.cbq ? `
    <div class="cbq-card">
      <div class="cbq-badge">CBSE Competency-Based Case Study (NEP 2020)</div>
      <div class="q-text"><strong>${ch.cbq.title}:</strong><br>${ch.cbq.question}</div>
      <div class="answer-box" style="margin-top: 15px;">
        <div class="answer-label">Detailed Analytical Solution &amp; Rubric</div>
        <div class="answer-text">${ch.cbq.answer}</div>
      </div>
    </div>
  ` : '';

  return `
    <section class="chapter-section" id="${ch.id}">
      <div class="chapter-header">
        <div class="ch-badge">${ch.num}</div>
        <div class="chapter-header-info">
          <h2>Chapter ${ch.num}: ${ch.title}</h2>
          <p>NCERT ${bookName} (Class 6) — ${ch.desc || ''} | CBSE 2026-27</p>
        </div>
      </div>
      ${conceptsHtml}
      ${svgHtml}
      <div class="ex-div">NCERT Textbook Exercise &amp; Practice Questions</div>
      ${questionsHtml}
      ${cbqHtml}
    </section>
  `;
}

// 1. CLASSIC MATHEMATICS (14 Chapters)
console.log("=== BUILDING CLASS 6 MATHEMATICS CLASSIC MODULES ===");
const mDir = path.join(__dirname, '..', 'chapters-c6m');
if (!fs.existsSync(mDir)) fs.mkdirSync(mDir, { recursive: true });

const mSidebar = mathsClassicChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `maths-classic-ch${ch.num}.html`
}));

mathsClassicChapters.forEach((ch, idx) => {
  const bodyHtml = renderChapterBody(ch, `c6m-classic-ch${ch.num}`, 'Mathematics (Classic)');
  const prevCh = idx > 0 ? mathsClassicChapters[idx - 1] : null;
  const nextCh = idx < mathsClassicChapters.length - 1 ? mathsClassicChapters[idx + 1] : null;

  const html = generateChapterPageC6({
    classNum: 6,
    subjectName: 'Mathematics (Classic)',
    subjectSlug: 'maths',
    bookTitle: 'Mathematics',
    bookSlug: 'maths-classic',
    trackName: 'Classic CBSE Track',
    chNum: ch.num,
    totalChs: mathsClassicChapters.length,
    chId: ch.id,
    title: `Chapter ${ch.num}: ${ch.title}`,
    subtitle: ch.desc,
    bodyContentHtml: bodyHtml,
    prevLink: prevCh ? { filename: `maths-classic-ch${prevCh.num}.html`, label: `Ch ${prevCh.num}: ${prevCh.title}` } : null,
    nextLink: nextCh ? { filename: `maths-classic-ch${nextCh.num}.html`, label: `Ch ${nextCh.num}: ${nextCh.title}` } : null,
    sidebarChapters: mSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c6m/maths-classic-ch${ch.num}.html`
  });

  const outPath = path.join(mDir, `maths-classic-ch${ch.num}.html`);
  fs.writeFileSync(outPath, html, 'utf-8');
  console.log(`  ✓ Built Maths Classic Ch ${ch.num}: ${ch.title} (${html.length.toLocaleString()} bytes)`);
});

// 2. CLASSIC SCIENCE (11 Chapters)
console.log("\n=== BUILDING CLASS 6 SCIENCE CLASSIC MODULES ===");
const sDir = path.join(__dirname, '..', 'chapters-c6s');
if (!fs.existsSync(sDir)) fs.mkdirSync(sDir, { recursive: true });

const sSidebar = scienceClassicChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `science-classic-ch${ch.num}.html`
}));

scienceClassicChapters.forEach((ch, idx) => {
  const bodyHtml = renderChapterBody(ch, `c6s-classic-ch${ch.num}`, 'Science (Classic)');
  const prevCh = idx > 0 ? scienceClassicChapters[idx - 1] : null;
  const nextCh = idx < scienceClassicChapters.length - 1 ? scienceClassicChapters[idx + 1] : null;

  const html = generateChapterPageC6({
    classNum: 6,
    subjectName: 'Science (Classic)',
    subjectSlug: 'science',
    bookTitle: 'Science',
    bookSlug: 'science-classic',
    trackName: 'Classic CBSE Track',
    chNum: ch.num,
    totalChs: scienceClassicChapters.length,
    chId: ch.id,
    title: `Chapter ${ch.num}: ${ch.title}`,
    subtitle: ch.desc,
    bodyContentHtml: bodyHtml,
    prevLink: prevCh ? { filename: `science-classic-ch${prevCh.num}.html`, label: `Ch ${prevCh.num}: ${prevCh.title}` } : null,
    nextLink: nextCh ? { filename: `science-classic-ch${nextCh.num}.html`, label: `Ch ${nextCh.num}: ${nextCh.title}` } : null,
    sidebarChapters: sSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c6s/science-classic-ch${ch.num}.html`
  });

  const outPath = path.join(sDir, `science-classic-ch${ch.num}.html`);
  fs.writeFileSync(outPath, html, 'utf-8');
  console.log(`  ✓ Built Science Classic Ch ${ch.num}: ${ch.title} (${html.length.toLocaleString()} bytes)`);
});

// 3. CLASSIC ENGLISH (15 Chapters: 8 Honeysuckle + 7 Pact with the Sun)
console.log("\n=== BUILDING CLASS 6 ENGLISH CLASSIC MODULES ===");
const engDir = path.join(__dirname, '..', 'chapters-c6eng');
if (!fs.existsSync(engDir)) fs.mkdirSync(engDir, { recursive: true });

const engSidebar = englishClassicChapters.map(ch => ({
  num: ch.num,
  title: `${ch.book}: ${ch.title}`,
  filename: ch.num <= 8 ? `honeysuckle-ch${ch.num}.html` : `pact-with-the-sun-ch${ch.num - 8}.html`
}));

englishClassicChapters.forEach((ch, idx) => {
  const filename = ch.num <= 8 ? `honeysuckle-ch${ch.num}.html` : `pact-with-the-sun-ch${ch.num - 8}.html`;
  const bodyHtml = renderChapterBody(ch, `c6eng-classic-ch${ch.num}`, ch.book);
  const prevCh = idx > 0 ? englishClassicChapters[idx - 1] : null;
  const nextCh = idx < englishClassicChapters.length - 1 ? englishClassicChapters[idx + 1] : null;

  const prevFilename = prevCh ? (prevCh.num <= 8 ? `honeysuckle-ch${prevCh.num}.html` : `pact-with-the-sun-ch${prevCh.num - 8}.html`) : null;
  const nextFilename = nextCh ? (nextCh.num <= 8 ? `honeysuckle-ch${nextCh.num}.html` : `pact-with-the-sun-ch${nextCh.num - 8}.html`) : null;

  const html = generateChapterPageC6({
    classNum: 6,
    subjectName: 'English (Classic)',
    subjectSlug: 'english',
    bookTitle: ch.book,
    bookSlug: ch.num <= 8 ? 'honeysuckle' : 'pact-with-the-sun',
    trackName: 'Classic CBSE Track',
    chNum: ch.num <= 8 ? ch.num : ch.num - 8,
    totalChs: ch.num <= 8 ? 8 : 7,
    chId: ch.id,
    title: `${ch.book}: ${ch.title}`,
    subtitle: ch.desc,
    bodyContentHtml: bodyHtml,
    prevLink: prevCh ? { filename: prevFilename, label: `${prevCh.title}` } : null,
    nextLink: nextCh ? { filename: nextFilename, label: `${nextCh.title}` } : null,
    sidebarChapters: engSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c6eng/${filename}`
  });

  const outPath = path.join(engDir, filename);
  fs.writeFileSync(outPath, html, 'utf-8');
  console.log(`  ✓ Built English Classic (${filename}): ${ch.title} (${html.length.toLocaleString()} bytes)`);
});

// 4. CLASSIC SOCIAL SCIENCE (24 Chapters: 10 History + 6 Geography + 8 Civics)
console.log("\n=== BUILDING CLASS 6 SOCIAL SCIENCE CLASSIC MODULES ===");
const sstDir = path.join(__dirname, '..', 'chapters-c6sst');
if (!fs.existsSync(sstDir)) fs.mkdirSync(sstDir, { recursive: true });

const sstSidebar = sstClassicChapters.map(ch => {
  let fname = "";
  if (ch.subject === 'History') fname = `history-ch${ch.num}.html`;
  else if (ch.subject === 'Geography') fname = `geography-ch${ch.num - 10}.html`;
  else fname = `civics-ch${ch.num - 16}.html`;

  return {
    num: ch.num,
    title: `[${ch.subject}] ${ch.title}`,
    filename: fname
  };
});

sstClassicChapters.forEach((ch, idx) => {
  let filename = "";
  let chDisplayNum = ch.num;
  if (ch.subject === 'History') {
    filename = `history-ch${ch.num}.html`;
    chDisplayNum = ch.num;
  } else if (ch.subject === 'Geography') {
    filename = `geography-ch${ch.num - 10}.html`;
    chDisplayNum = ch.num - 10;
  } else {
    filename = `civics-ch${ch.num - 16}.html`;
    chDisplayNum = ch.num - 16;
  }

  const bodyHtml = renderChapterBody(ch, `c6sst-classic-ch${ch.num}`, ch.book);
  const prevCh = idx > 0 ? sstClassicChapters[idx - 1] : null;
  const nextCh = idx < sstClassicChapters.length - 1 ? sstClassicChapters[idx + 1] : null;

  let prevFname = null;
  if (prevCh) {
    if (prevCh.subject === 'History') prevFname = `history-ch${prevCh.num}.html`;
    else if (prevCh.subject === 'Geography') prevFname = `geography-ch${prevCh.num - 10}.html`;
    else prevFname = `civics-ch${prevCh.num - 16}.html`;
  }

  let nextFname = null;
  if (nextCh) {
    if (nextCh.subject === 'History') nextFname = `history-ch${nextCh.num}.html`;
    else if (nextCh.subject === 'Geography') nextFname = `geography-ch${nextCh.num - 10}.html`;
    else nextFname = `civics-ch${nextCh.num - 16}.html`;
  }

  const html = generateChapterPageC6({
    classNum: 6,
    subjectName: `Social Science (${ch.subject})`,
    subjectSlug: 'sst',
    bookTitle: ch.book,
    bookSlug: ch.subject.toLowerCase(),
    trackName: 'Classic CBSE Track',
    chNum: chDisplayNum,
    totalChs: ch.subject === 'History' ? 10 : (ch.subject === 'Geography' ? 6 : 8),
    chId: ch.id,
    title: `${ch.subject} Chapter ${chDisplayNum}: ${ch.title}`,
    subtitle: ch.desc,
    bodyContentHtml: bodyHtml,
    prevLink: prevCh ? { filename: prevFname, label: `${prevCh.title}` } : null,
    nextLink: nextCh ? { filename: nextFname, label: `${nextCh.title}` } : null,
    sidebarChapters: sstSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c6sst/${filename}`
  });

  const outPath = path.join(sstDir, filename);
  fs.writeFileSync(outPath, html, 'utf-8');
  console.log(`  ✓ Built SST Classic (${filename}): ${ch.title} (${html.length.toLocaleString()} bytes)`);
});

console.log("\n=======================================================");
console.log("✅ ALL CLASSIC CBSE STANDALONE MODULES BUILT SUCCESSFULLY!");
console.log("=======================================================");
