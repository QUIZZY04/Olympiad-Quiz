const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c7e');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('Output directory prepared:', outDir);
