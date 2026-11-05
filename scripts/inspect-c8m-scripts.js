const fs = require('fs');
const path = require('path');

console.log('=== Checking all scripts/build-c8m-ch*.js ===');
for (let i = 1; i <= 14; i++) {
  const f = path.join(__dirname, `build-c8m-ch${i}.js`);
  if (fs.existsSync(f)) {
    const c = fs.readFileSync(f, 'utf8');
    const titleM = c.match(/<h2>(.*?)<\/h2>/);
    const subM = c.match(/<p>(.*?)<\/p>/);
    const qCount = (c.match(/class="q-card"/g) || []).length;
    console.log(`build-c8m-ch${i}: ${titleM ? titleM[1] : 'N/A'} | ${subM ? subM[1].slice(0, 50) : ''} | Qs: ${qCount}`);
  }
}

console.log('\n=== Checking all scripts/gen-c8m-ch*.js ===');
for (let i = 1; i <= 14; i++) {
  const f = path.join(__dirname, `gen-c8m-ch${i}.js`);
  if (fs.existsSync(f)) {
    const c = fs.readFileSync(f, 'utf8');
    const titleM = c.match(/<h2>(.*?)<\/h2>/);
    const subM = c.match(/<p>(.*?)<\/p>/);
    const qCount = (c.match(/class="q-card"/g) || []).length;
    console.log(`gen-c8m-ch${i}: ${titleM ? titleM[1] : 'N/A'} | ${subM ? subM[1].slice(0, 50) : ''} | Qs: ${qCount}`);
  }
}
