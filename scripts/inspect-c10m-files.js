const fs = require('fs');
const path = require('path');

const m1 = 'ncert-solutions-class-10-maths.html';
const m2 = 'ncert-solutions-class-10-mathematics.html';

if (fs.existsSync(m1) && fs.existsSync(m2)) {
  const c1 = fs.readFileSync(m1, 'utf8');
  const c2 = fs.readFileSync(m2, 'utf8');
  console.log(`m1 length: ${c1.length}, m2 length: ${c2.length}, identical: ${c1 === c2}`);
}

const dir = 'chapters-c10m';
if (fs.existsSync(dir)) {
  const cFiles = fs.readdirSync(dir);
  console.log(`\nFiles in ${dir} (${cFiles.length}):`);
  console.log(cFiles);
}
