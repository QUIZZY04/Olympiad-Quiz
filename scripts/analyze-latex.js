const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6m');

const foundCommands = {};

for (let ch = 1; ch <= 12; ch++) {
  const content = fs.readFileSync(path.join(dir, `ch${ch}.html`), 'utf8');

  // Find all $...$ and $$...$$
  const mathMatches = content.match(/\$[^$]+\$/g) || [];
  
  for (const m of mathMatches) {
    // Check for backslash or control characters
    const cmds = m.match(/(\\[a-zA-Z]+|[\x00-\x1f][a-zA-Z]+|\^\{?[^}]*\}?|_[a-zA-Z0-9{}]+)/g);
    if (cmds) {
      for (const c of cmds) {
        foundCommands[c] = (foundCommands[c] || 0) + 1;
      }
    }
  }
}

console.log('Unique commands/patterns found in math blocks:');
console.log(JSON.stringify(foundCommands, null, 2));
