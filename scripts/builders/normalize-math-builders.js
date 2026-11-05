const fs = require('fs');
const path = require('path');

function normalize(file) {
  let content = fs.readFileSync(file, 'utf8');

  // 1. Inside makeMathCard(...), remove marks: and rubric: labels
  // makeMathCard has format:
  // makeMathCard(
  //   'id',
  //   'num',
  //   'text',
  //   marks: 4,  -> 4,
  //   `ans`,
  //   rubric: [  -> [
  // )

  // Regex to match makeMathCard blocks
  content = content.replace(/(makeMathCard\(\s*'[^']*',\s*'[^']*',\s*(?:'[^']*'|`[^`]*`),\s*)marks:\s*([0-9]+),/g, '$1$2,');
  
  // Also any makeMathCard where rubric: [ is passed
  content = content.replace(/(`,\s*\n\s*)rubric:\s*(\[\s*\n\s*\{)/g, '$1$2');

  // 2. Inside object literals { id: '...', ... }
  // Ensure marks: N, and rubric: [ are present
  // If an object has bare number after text:
  content = content.replace(/(text:\s*(?:'[^']*'|`[^`]*`),\s*\n\s*)([0-9]+),/g, '$1marks: $2,');
  // If an object has bare [ after ans:
  content = content.replace(/(ans:\s*`[\s\S]*?`,\s*\n\s*)(\[\s*\n\s*\{)/g, '$1rubric: $2');

  fs.writeFileSync(file, content, 'utf8');
}

normalize(path.join(__dirname, 'c10m-part1.js'));
normalize(path.join(__dirname, 'c10m-part2.js'));
console.log('Normalized both files.');
