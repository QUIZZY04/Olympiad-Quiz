const fs = require('fs');

const html = fs.readFileSync('ncert-solutions-class-5-maths.html', 'utf8');
const s = html.indexOf('id="mela-ch1"');
const e = html.indexOf('</article>', s);
console.log('--- MELA CH 1 SNIPPET ---');
console.log(html.substring(s, s + 1500));
console.log('\n--- MELA CH 1 CBQ / END SNIPPET ---');
console.log(html.substring(e - 1500, e + 10));
