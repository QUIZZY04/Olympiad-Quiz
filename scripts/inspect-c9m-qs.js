const fs = require('fs');
const path = require('path');

const ch1 = fs.readFileSync(path.join(__dirname, '..', 'chapters-c9m', 'ch1.html'), 'utf8');
const qs = ch1.match(/<div class="q-text">[\s\S]*?<\/div>/g) || [];
qs.forEach((q, i) => console.log('Q' + (i + 1) + ': ' + q.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 150)));
