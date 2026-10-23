const fs = require('fs');

['ncert-solutions-class-3-maths.html', 'ncert-solutions-class-3-english.html', 'ncert-solutions-class-3-hindi.html', 'ncert-solutions-class-3-evs.html'].forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  const ids = [];
  const re = /<section[^>]+id="([^"]+)"/g;
  let match;
  while ((match = re.exec(html)) !== null) {
    ids.push(match[1]);
  }
  console.log(f + ': ' + ids.length + ' sections');
  console.log('First 5 IDs: ' + ids.slice(0, 5).join(', '));
  console.log('Middle/Last IDs: ' + ids.slice(-5).join(', '));
});
