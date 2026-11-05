const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix bare number lines: e.g. "      3," -> "      marks: 3,"
  content = content.replace(/^(\s+)([0-9]+),\s*$/gm, '$1marks: $2,');

  // Fix bare array lines after ans:
  // e.g. "\n      [" -> "\n      rubric: ["
  content = content.replace(/(ans:\s*`[\s\S]*?`,\s*\n)(\s+)\[/g, '$1$2rubric: [');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed syntax in ${filePath}`);
}

const f1 = path.join(__dirname, 'c10m-part1.js');
const f2 = path.join(__dirname, 'c10m-part2.js');

fixFile(f1);
fixFile(f2);
