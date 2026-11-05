const fs = require('fs');
const path = require('path');

const f2 = path.join(__dirname, 'c10m-part2.js');
let content2 = fs.readFileSync(f2, 'utf8');

// In c10m-part2.js, only ex63Triangles uses objects.
// Everything else is makeMathCard(...) where rubric: [ is a syntax error!
// Let's replace any `rubric: [` outside ex63Triangles with just `[`
const parts = content2.split('const ex63Triangles = [');
const before = parts[0].replace(/\brubric:\s*\[/g, '[');
const afterParts = parts[1].split('cards.push(...ex63Triangles.map');
const insideEx63 = afterParts[0]; // keep rubric: [ inside ex63Triangles
const after = afterParts[1].replace(/\brubric:\s*\[/g, '[');

content2 = before + 'const ex63Triangles = [' + insideEx63 + 'cards.push(...ex63Triangles.map' + after;
fs.writeFileSync(f2, content2, 'utf8');
console.log('Fixed c10m-part2.js rubric arguments.');
