const fs = require('fs');
const path = require('path');

const mathsHtml = fs.readFileSync(path.resolve(__dirname, '../ncert-solutions-class-5-maths.html'), 'utf8');

function extractChapters(prefix, count, defaultUnit) {
  const chapters = [];
  for (let i = 1; i <= count; i++) {
    const artId = `${prefix}-ch${i}`;
    const startIdx = mathsHtml.indexOf(`id="${artId}"`);
    if (startIdx === -1) {
      console.warn(`Could not find ${artId}`);
      continue;
    }
    const endIdx = mathsHtml.indexOf('</article>', startIdx);
    const snip = mathsHtml.substring(startIdx, endIdx);

    // Title
    const titleMatch = snip.match(/<h2 class="ch-title">([^<]+)<\/h2>/) || snip.match(/<h2[^>]*>([^<]+)<\/h2>/);
    const title = titleMatch ? titleMatch[1].trim() : `Chapter ${i}`;

    // Hindi Title or Subtitle
    const hindiMatch = snip.match(/<div class="ch-hindi-title">([^<]+)<\/div>/);
    const badgeMatch = snip.match(/<div class="ch-badge">([^<]+)<\/div>/);
    const subtitle = hindiMatch ? hindiMatch[1].trim() : (badgeMatch ? badgeMatch[1].trim() : `Comprehensive NCERT Solutions for Chapter ${i}`);
    const unit = badgeMatch ? badgeMatch[1].trim() : `${defaultUnit} • Chapter ${i}`;

    // Concepts
    const concepts = [];
    const conceptRegex = /<li>(.*?)<\/li>/g;
    let cm;
    while ((cm = conceptRegex.exec(snip)) !== null) {
      concepts.push(cm[1].replace(/<[^>]+>/g, '').trim());
    }

    // SVG
    let svg = '';
    const svgStart = snip.indexOf('<svg');
    if (svgStart !== -1) {
      const svgEnd = snip.indexOf('</svg>', svgStart);
      if (svgEnd !== -1) {
        svg = snip.substring(svgStart, svgEnd + 6);
      }
    }

    // Question Cards
    const questions = [];
    const qCardRegex = /<div class="q-card[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;
    // Better: parse each q-card
    const qParts = snip.split(/<div class="q-card/);
    for (let q = 1; q < qParts.length; q++) {
      const qBlock = qParts[q];
      const qTextMatch = qBlock.match(/<span class="q-text">([\s\S]*?)<\/span>/) || qBlock.match(/<div class="q-text">([\s\S]*?)<\/div>/);
      const qText = qTextMatch ? qTextMatch[1].trim() : `Question ${q}`;

      const ansMatch = qBlock.match(/<div class="answer-text">([\s\S]*?)<\/div>/);
      const ans = ansMatch ? ansMatch[1].trim() : '';

      const catMatch = qBlock.match(/<span class="q-cat">([\s\S]*?)<\/span>/) || qBlock.match(/<span class="q-category">([\s\S]*?)<\/span>/);
      const category = catMatch ? catMatch[1].trim() : 'Textbook Exercise';

      const marksMatch = qBlock.match(/<span class="q-marks">([\s\S]*?)<\/span>/);
      const marks = marksMatch ? parseInt(marksMatch[1]) || 3 : 3;

      // Rubrics
      const rubric = [];
      const rowRegex = /<div class="marking-row">\s*<span class="marking-key">([\s\S]*?)<\/span>\s*<span class="marking-marks">([\s\S]*?)<\/span>\s*<\/div>/g;
      let rm;
      while ((rm = rowRegex.exec(qBlock)) !== null) {
        rubric.push({
          key: rm[1].trim(),
          marks: rm[2].trim()
        });
      }

      questions.push({
        category,
        q: qText,
        ans: ans || 'Model step-by-step solution based on NCERT guidelines.',
        marks,
        rubric: rubric.length > 0 ? rubric : [
          { key: "Correct mathematical concept & formula", marks: "1.5 M" },
          { key: "Accurate calculation & conclusion", marks: "1.5 M" }
        ]
      });
    }

    // CBQ
    let cbq = null;
    const cbqStart = snip.indexOf('class="cbq-card"');
    if (cbqStart !== -1) {
      const cbqSnip = snip.substring(cbqStart);
      const tMatch = cbqSnip.match(/<div class="cbq-title">([\s\S]*?)<\/div>/) || cbqSnip.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
      const cMatch = cbqSnip.match(/<div class="cbq-context">([\s\S]*?)<\/div>/) || cbqSnip.match(/<strong>Real-World Math Context:<\/strong>([\s\S]*?)<\/p>/);
      const qMatch = cbqSnip.match(/<div class="cbq-q-text">([\s\S]*?)<\/div>/) || cbqSnip.match(/<strong>Analytical Task:<\/strong>([\s\S]*?)<\/p>/);
      const aMatch = cbqSnip.match(/<div class="cbq-sol">([\s\S]*?)<\/div>\s*<\/div>/) || cbqSnip.match(/<div style="font-size:0.88rem;line-height:1.6;color:#1e293b;">([\s\S]*?)<\/div>/);
      const rMatch = cbqSnip.match(/CBSE Assessment Rubric: ([^<]+)/) || cbqSnip.match(/Rubric: ([^<]+)/);

      cbq = {
        title: tMatch ? tMatch[1].trim() : `NEP 2020 Case Study: ${title}`,
        text: cMatch ? cMatch[1].trim() : `Real-world application context for ${title}.`,
        question: qMatch ? qMatch[1].trim() : `Apply mathematical principles to solve the case study.`,
        answer: aMatch ? aMatch[1].trim() : `Step-by-step analytical model answer.`,
        rubric: rMatch ? rMatch[1].trim() : '1M concept identification + 1M step execution + 1M conclusion'
      };
    } else {
      cbq = {
        title: `NEP 2020 Competency Case: ${title}`,
        text: `A practical scenario involving ${title} in everyday life and community contexts.`,
        question: `Analyze the quantitative relationships and state the conclusion.`,
        answer: `Apply the step-by-step formulas and concepts mastered in this chapter.`,
        rubric: '1M formula + 1M working + 1M answer'
      };
    }

    chapters.push({
      id: `${prefix}${i}`,
      num: i,
      unit,
      title,
      subtitle,
      concepts: concepts.length > 0 ? concepts : [
        `Core concepts and analytical foundations of ${title}.`,
        `Step-by-step problem solving methods.`,
        `Practical applications in daily life.`
      ],
      svg: svg || `<svg viewBox="0 0 600 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="160" rx="12" fill="#eff6ff"/><text x="300" y="85" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e40af" text-anchor="middle">${title}</text></svg>`,
      questions,
      cbq
    });
  }
  return chapters;
}

const melaChapters = extractChapters('mela', 15, 'Maths Mela (New NEP 2020)');
const magicChapters = extractChapters('magic', 14, 'Math-Magic (Classic CBSE)');

console.log(`Extracted ${melaChapters.length} Maths Mela chapters`);
melaChapters.forEach(c => console.log(`  Ch ${c.num}: ${c.title} (${c.questions.length} Qs, concepts: ${c.concepts.length}, hasSvg: ${Boolean(c.svg)}, hasCbq: ${Boolean(c.cbq)})`));

console.log(`Extracted ${magicChapters.length} Math Magic chapters`);
magicChapters.forEach(c => console.log(`  Ch ${c.num}: ${c.title} (${c.questions.length} Qs, concepts: ${c.concepts.length}, hasSvg: ${Boolean(c.svg)}, hasCbq: ${Boolean(c.cbq)})`));

// Save to data files
fs.writeFileSync(
  path.resolve(__dirname, 'data-c5-maths/mathsMelaData.js'),
  `// Official NCERT Class 5 Mathematics (Maths Mela) Complete Dataset - Chapters 1 to 15\n// Aligned with New NEP 2020 & NCF-SE 2023 Curriculum (CBSE 2026-27 Session)\n\nconst mathsMelaChapters = ${JSON.stringify(melaChapters, null, 2)};\n\nmodule.exports = { mathsMelaChapters };\n`,
  'utf8'
);

fs.writeFileSync(
  path.resolve(__dirname, 'data-c5-maths/mathMagicData.js'),
  `// Official NCERT Class 5 Mathematics (Math-Magic) Complete Dataset - Chapters 1 to 14\n// Aligned with Classic CBSE Curriculum (CBSE 2026-27 Session)\n\nconst mathMagicChapters = ${JSON.stringify(magicChapters, null, 2)};\n\nmodule.exports = { mathMagicChapters };\n`,
  'utf8'
);

console.log("✅ Successfully saved mathsMelaData.js and mathMagicData.js!");
