const fs = require('fs');

['ncert-solutions-class-5-english.html', 'ncert-solutions-class-5-hindi.html', 'ncert-solutions-class-5-evs.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = [];
  const regex = /<section[^>]*id="([^"]+)"/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    matches.push(m[1]);
  }
  console.log(f, 'IDs:', matches);
});
