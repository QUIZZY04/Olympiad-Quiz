const fs = require('fs');
const path = require('path');
const svgs = require('./c6m-svg-definitions');

const mainFile = path.join(__dirname, '..', 'ncert-solutions-class-6-maths.html');
const chaptersDir = path.join(__dirname, '..', 'chapters-c6m');

const insertions = [
  // 1. Classic Ch 4 Q1: Line BD with points B, O, E, D and ray OC (NCERT Fig 4.1)
  {
    cardId: 'c6m-classic-ch4-q1',
    files: [mainFile, path.join(chaptersDir, 'maths-classic-ch4.html')],
    target: 'inside-q-text',
    svg: svgs.svgClassicCh4Q1,
    tag: 'Figure 4.1: Line BD'
  },
  // 2. Classic Ch 4 Q3: Circle with center O, radii, diameter, chord, sector, segment
  {
    cardId: 'c6m-classic-ch4-q3',
    files: [mainFile, path.join(chaptersDir, 'maths-classic-ch4.html')],
    target: 'inside-q-text',
    svg: svgs.svgClassicCh4Q3,
    tag: 'Figure 4.2: Circle Anatomy'
  },
  // 3. Classic Ch 4 Q2: Quadrilateral ABCD
  {
    cardId: 'c6m-classic-ch4-q2',
    files: [mainFile, path.join(chaptersDir, 'maths-classic-ch4.html')],
    target: 'inside-answer',
    svg: svgs.svgClassicCh4Q2,
    tag: 'Rough Sketch: Quadrilateral ABCD'
  },
  // 4. Ganita Prakash Ch 4 Q4: Figure 4.1 Bar Graph of Subject Marks
  {
    cardId: 'c6m-ch4-q4',
    files: [mainFile, path.join(chaptersDir, 'ch4.html'), path.join(chaptersDir, 'ganita-prakash-ch4.html')],
    target: 'inside-q-text',
    svg: svgs.svgCh4Q4,
    tag: 'Figure 4.1: Examination Marks'
  },
  // 5. Ganita Prakash Ch 7 Q1: Fractions of Shaded Portions
  {
    cardId: 'c6m-ch7-q1',
    files: [mainFile, path.join(chaptersDir, 'ch7.html'), path.join(chaptersDir, 'ganita-prakash-ch7.html')],
    target: 'inside-q-text',
    svg: svgs.svgCh7Q1,
    tag: 'Visual Representations: Shaded Fractions'
  },
  // 6. Ganita Prakash Ch 7 Q2: Fractions on a Number Line
  {
    cardId: 'c6m-ch7-q2',
    files: [mainFile, path.join(chaptersDir, 'ch7.html'), path.join(chaptersDir, 'ganita-prakash-ch7.html')],
    target: 'inside-answer',
    svg: svgs.svgCh7Q2,
    tag: 'Fractions Represented on the Number Line'
  },
  // 7. Ganita Prakash Ch 10 Q2: Integers on Number Line
  {
    cardId: 'c6m-ch10-q2',
    files: [mainFile, path.join(chaptersDir, 'ch10.html'), path.join(chaptersDir, 'ganita-prakash-ch10.html')],
    target: 'inside-answer',
    svg: svgs.svgCh10Q2,
    tag: 'Plotting Integers on the Number Line'
  },
  // 8. Ganita Prakash Ch 10 Q4: Integer Operations Jumps on Number Line
  {
    cardId: 'c6m-ch10-q4',
    files: [mainFile, path.join(chaptersDir, 'ch10.html'), path.join(chaptersDir, 'ganita-prakash-ch10.html')],
    target: 'inside-answer',
    svg: svgs.svgCh10Q4,
    tag: 'Integer Addition on Number Line'
  },
  // 9. Practical Geometry Ch 8 Q1 / Classic Ch 14 Q1: Compass Circle Construction
  {
    cardId: 'c6m-ch8-q1',
    files: [mainFile, path.join(chaptersDir, 'ch8.html'), path.join(chaptersDir, 'ganita-prakash-ch8.html')],
    target: 'inside-answer',
    svg: svgs.svgCh8Q1,
    tag: 'Compass Construction: Circle'
  },
  {
    cardId: 'c6m-classic-ch14-q1',
    files: [mainFile, path.join(chaptersDir, 'maths-classic-ch14.html')],
    target: 'inside-answer',
    svg: svgs.svgCh8Q1,
    tag: 'Compass Construction: Circle'
  },
  // 10. Practical Geometry Ch 8 Q2 / Classic Ch 14 Q2: Perpendicular Bisector
  {
    cardId: 'c6m-ch8-q2',
    files: [mainFile, path.join(chaptersDir, 'ch8.html'), path.join(chaptersDir, 'ganita-prakash-ch8.html')],
    target: 'inside-answer',
    svg: svgs.svgCh8Q2,
    tag: 'Compass Construction: Perpendicular Bisector'
  },
  {
    cardId: 'c6m-classic-ch14-q2',
    files: [mainFile, path.join(chaptersDir, 'maths-classic-ch14.html')],
    target: 'inside-answer',
    svg: svgs.svgCh8Q2,
    tag: 'Compass Construction: Perpendicular Bisector'
  },
  // 11. Practical Geometry Ch 8 Q5 / Q8: 90° and 45° Angle Construction
  {
    cardId: 'c6m-ch8-q5',
    files: [mainFile, path.join(chaptersDir, 'ch8.html'), path.join(chaptersDir, 'ganita-prakash-ch8.html')],
    target: 'inside-answer',
    svg: svgs.svgCh8Q5,
    tag: 'Construction: 90° Right Angle'
  },
  // 12. Symmetry Ch 9 Q1 / Classic Ch 13 Q1: Lines of Symmetry in Plane Shapes
  {
    cardId: 'c6m-ch9-q1',
    files: [mainFile, path.join(chaptersDir, 'ch9.html'), path.join(chaptersDir, 'ganita-prakash-ch9.html')],
    target: 'inside-answer',
    svg: svgs.svgCh9Q1,
    tag: 'Lines of Symmetry in Plane Geometric Shapes'
  },
  {
    cardId: 'c6m-classic-ch13-q1',
    files: [mainFile, path.join(chaptersDir, 'maths-classic-ch13.html')],
    target: 'inside-answer',
    svg: svgs.svgCh9Q1,
    tag: 'Lines of Symmetry in Plane Geometric Shapes'
  },
  // 13. Ganita Prakash Ch 2 Q12: Collinear Points & Concurrent Lines
  {
    cardId: 'c6m-ch2-q12',
    files: [mainFile, path.join(chaptersDir, 'ch2.html'), path.join(chaptersDir, 'ganita-prakash-ch2.html')],
    target: 'inside-answer',
    svg: svgs.svgCh2Q12,
    tag: 'Illustrative Sketch: Collinear Points'
  },
  // 14. Ganita Prakash Ch 2 Q11: Clock Face Angles
  {
    cardId: 'c6m-ch2-q11',
    files: [mainFile, path.join(chaptersDir, 'ch2.html'), path.join(chaptersDir, 'ganita-prakash-ch2.html')],
    target: 'inside-answer',
    svg: svgs.svgCh2Q11,
    tag: 'Angles Formed by Clock Hands'
  }
];

insertions.forEach((ins) => {
  ins.files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Find card block
    const cardStart = content.indexOf(`id="${ins.cardId}"`);
    if (cardStart === -1) return;

    // Find end of card
    const cardEnd = content.indexOf('</div>\n    </div>\n  </div>', cardStart);
    const cardBlock = content.substring(cardStart, cardEnd !== -1 ? cardEnd + 30 : cardStart + 3500);

    // Skip if this specific card already contains the tag
    if (cardBlock.includes(ins.tag)) {
      return;
    }

    if (ins.target === 'inside-q-text') {
      const qTextMatch = cardBlock.match(/<div class="q-text">([\s\S]*?)<\/div>/i);
      if (qTextMatch) {
        const originalQText = qTextMatch[0];
        const newQText = `<div class="q-text">${qTextMatch[1]}\n${ins.svg}</div>`;
        content = content.replace(originalQText, () => newQText);
        fs.writeFileSync(file, content, 'utf8');
        console.log(`[SUCCESS] Embedded ${ins.tag} in q-text of ${ins.cardId} (${path.basename(file)})`);
      }
    } else if (ins.target === 'inside-answer') {
      const ansMatch = cardBlock.match(/<div class="answer-text">([\s\S]*?)<\/div>/i);
      if (ansMatch) {
        const originalAns = ansMatch[0];
        const newAns = `<div class="answer-text">${ansMatch[1]}\n${ins.svg}</div>`;
        content = content.replace(originalAns, () => newAns);
        fs.writeFileSync(file, content, 'utf8');
        console.log(`[SUCCESS] Embedded ${ins.tag} in answer of ${ins.cardId} (${path.basename(file)})`);
      }
    }
  });
});

console.log('\nAudit and embedding verification completed.');
