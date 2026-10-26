const fs = require('fs');
const path = require('path');

const files = [
  { name: 'Mathematics', file: 'ncert-solutions-class-3-maths.html' },
  { name: 'English', file: 'ncert-solutions-class-3-english.html' },
  { name: 'Hindi', file: 'ncert-solutions-class-3-hindi.html' },
  { name: 'EVS', file: 'ncert-solutions-class-3-evs.html' }
];

console.log("=== COUNT OF PUBLISHED CLASS 3 HTML ITEMS ===");
let totalQCards = 0;
let totalCbqBoxes = 0;
let totalMarkingRows = 0;

files.forEach(f => {
  const p = path.join(__dirname, '..', f.file);
  const html = fs.readFileSync(p, 'utf8');
  const qMatches = (html.match(/class="q-card"/g) || []).length;
  const cbqMatches = (html.match(/class="cbq-card"/g) || []).length;
  const rubricMatches = (html.match(/class="marking-row"/g) || []).length;
  const svgMatches = (html.match(/<svg/g) || []).length;
  const size = fs.statSync(p).size;
  totalQCards += qMatches;
  totalCbqBoxes += cbqMatches;
  totalMarkingRows += rubricMatches;
  console.log(`${f.name} (${f.file}):`);
  console.log(`  - Size: ${size.toLocaleString()} bytes`);
  console.log(`  - Question Cards: ${qMatches}`);
  console.log(`  - Competency Case Studies (CBQ): ${cbqMatches}`);
  console.log(`  - Total Study Items: ${qMatches + cbqMatches}`);
  console.log(`  - Marking Scheme Rows: ${rubricMatches}`);
});

console.log("----------------------------------------------");
console.log(`TOTAL Questions (q-card): ${totalQCards}`);
console.log(`TOTAL CBQs (cbq-box): ${totalCbqBoxes}`);
console.log(`GRAND TOTAL Comprehensive Items: ${totalQCards + totalCbqBoxes}`);
console.log(`TOTAL CBSE Marking Rows: ${totalMarkingRows}`);
