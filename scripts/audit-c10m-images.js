const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c10m');
const files = fs.readdirSync(dir).filter(f => f.startsWith('ch') && f.endsWith('.html'));

// Sort by chapter number
files.sort((a, b) => {
  const na = parseInt(a.replace('ch', '').replace('.html', ''));
  const nb = parseInt(b.replace('ch', '').replace('.html', ''));
  return na - nb;
});

console.log(`Auditing ${files.length} chapters in Class 10 Maths for image/SVG inclusion...\n`);

const figureKeywords = [
  'figure', 'fig', 'diagram', 'sketch', 'draw', 'triangle', 'tower',
  'elevation', 'depression', 'tangent', 'circle', 'sector', 'segment',
  'cylinder', 'cone', 'hemisphere', 'sphere', 'capsule', 'toy', 'bucket',
  'graph', 'ogive', 'coordinate', 'collinear', 'parallelogram'
];

let totalQuestions = 0;
let totalWithSvg = 0;
const chapterAudit = [];

files.forEach(f => {
  const chNum = parseInt(f.replace('ch', '').replace('.html', ''));
  const content = fs.readFileSync(path.join(dir, f), 'utf8');

  // Find all question cards
  const qCards = [...content.matchAll(/<div class="q-card" id="([^"]+)">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/gi)];
  const svgsInChapter = [...content.matchAll(/<svg[\s\S]*?<\/svg>/gi)].filter(s => !s[0].includes('viewBox="0 0 24 24"'));
  
  const chInfo = {
    file: f,
    chapter: chNum,
    title: (content.match(/<h2>(.*?)<\/h2>/i) || ['', ''])[1],
    qCount: qCards.length,
    svgCount: svgsInChapter.length,
    questionsNeedingSvg: []
  };

  totalQuestions += qCards.length;
  totalWithSvg += svgsInChapter.length;

  qCards.forEach(qc => {
    const id = qc[1];
    const body = qc[2];
    const qText = (body.match(/<div class="q-text">([\s\S]*?)<\/div>/i) || ['', ''])[1];
    const ansText = (body.match(/<div class="answer-text">([\s\S]*?)<\/div>/i) || ['', ''])[1];
    const hasSvg = body.includes('<svg') && !body.match(/<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"/);

    // Check triggers
    const triggers = [];
    if (/\b(in the given figure|from the figure|given figure|in fig|see fig|shown in fig|observe the figure)\b/i.test(qText)) {
      triggers.push('EXPLICIT_FIGURE_REFERENCE');
    }
    if (/\b(angle of elevation|angle of depression|height of.*tower|top of.*building|lighthouse|observer|balloon|cable|kite)\b/i.test(qText)) {
      triggers.push('HEIGHTS_AND_DISTANCES');
    }
    if (/\b(tangent|tangents to a circle|concentric circles|length of tangent|quadrilateral circumscribing|circle inscribed)\b/i.test(qText)) {
      triggers.push('CIRCLE_TANGENTS');
    }
    if (/\b(area of sector|area of segment|shaded region|quadrant|umbrella|brooch|wipers|track)\b/i.test(qText)) {
      triggers.push('AREAS_RELATED_TO_CIRCLES');
    }
    if (/\b(cone surmounted on hemisphere|solid in the shape of a cone|cylindrical.*hemispherical|capsule|gulab jamun|toy|cubical block surmounted|conical cavity)\b/i.test(qText)) {
      triggers.push('SURFACE_AREAS_VOLUMES');
    }
    if (/\b(basic proportionality theorem|thales|prove that.*line drawn parallel|similarity of triangles|in \u0394|in triangle abc|right triangle)\b/i.test(qText)) {
      triggers.push('TRIANGLES_GEOMETRY');
    }
    if (/\b(graph|graphical method|ogive|less than type|more than type)\b/i.test(qText)) {
      triggers.push('COORDINATE_GRAPH');
    }

    if (triggers.length > 0) {
      chInfo.questionsNeedingSvg.push({
        id,
        hasSvg,
        triggers,
        qText: qText.replace(/<[^>]+>/g, ' ').trim().substring(0, 110)
      });
    }
  });

  chapterAudit.push(chInfo);
});

console.log(`Total Chapters: ${chapterAudit.length}`);
console.log(`Total Questions: ${totalQuestions}`);
console.log(`Total Existing Diagram SVGs: ${totalWithSvg}`);

chapterAudit.forEach(ch => {
  console.log(`\n================ Chapter ${ch.chapter}: ${ch.title} ================`);
  console.log(`Questions: ${ch.qCount} | Existing SVGs: ${ch.svgCount} | Visual Candidates: ${ch.questionsNeedingSvg.length}`);
  ch.questionsNeedingSvg.forEach(q => {
    const icon = q.hasSvg ? '✅ HAS SVG' : '❌ NO SVG';
    console.log(`  [${q.id}] ${icon} [${q.triggers.join(', ')}]: ${q.qText}`);
  });
});
