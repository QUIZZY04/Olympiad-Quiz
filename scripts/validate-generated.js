const fs = require('fs');

const content = fs.readFileSync('chapters-c3m/maths-mela-ch1.html', 'utf8');
console.log('undefined count:', (content.match(/undefined/g) || []).length);
console.log('NaN count:', (content.match(/NaN/g) || []).length);
console.log('object Object count:', (content.match(/\[object Object\]/g) || []).length);
console.log('q-card count:', (content.match(/class="q-card/g) || []).length);
console.log('cbq-card count:', (content.match(/class="cbq-card/g) || []).length);
console.log('marking-row count:', (content.match(/class="marking-row/g) || []).length);
console.log('File size:', content.length, 'bytes');
