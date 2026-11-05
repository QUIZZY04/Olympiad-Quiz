const fs = require('fs');
const content = fs.readFileSync('ncert-solutions-class-9-maths.html', 'utf8');
const matches = content.match(/<section[^>]*id=["'][^"']+["'][^>]*>/g);
console.log('Found sections:', matches);
