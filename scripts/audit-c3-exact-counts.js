const fs = require('fs');
const path = require('path');

const files = [
  { subject: 'Mathematics', file: 'ncert-solutions-class-3-maths.html' },
  { subject: 'English', file: 'ncert-solutions-class-3-english.html' },
  { subject: 'Hindi', file: 'ncert-solutions-class-3-hindi.html' },
  { subject: 'EVS', file: 'ncert-solutions-class-3-evs.html' }
];

const results = [];

files.forEach(f => {
  const filePath = path.join(__dirname, '..', f.file);
  const html = fs.readFileSync(filePath, 'utf8');
  const sections = html.split('<section').slice(1);
  
  const bookStats = {};

  sections.forEach((sec, idx) => {
    const idMatch = sec.match(/id="([^"]+)"/);
    const titleMatch = sec.match(/<h2[^>]*>(.*?)<\/h2>/i) || sec.match(/<h3[^>]*>(.*?)<\/h3>/i);
    const qCount = (sec.match(/class="q-card"/g) || []).length;
    const cbqCount = (sec.match(/class="cbq-card"/g) || []).length;
    const rubricCount = (sec.match(/class="marking-row"/g) || []).length;
    const id = idMatch ? idMatch[1] : `ch-${idx+1}`;
    const rawTitle = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'Unknown';
    
    // Determine book track by prefix
    let book = 'Default';
    if (id.startsWith('mm')) book = 'Maths Mela (NEP)';
    else if (id.startsWith('ch') && f.subject === 'Mathematics') book = 'Math-Magic (Classic)';
    else if (id.startsWith('san')) book = 'Santoor (NEP)';
    else if (id.startsWith('mg')) book = 'Marigold (Classic)';
    else if (id.startsWith('vn')) book = 'Veena (NEP)';
    else if (id.startsWith('rj')) book = 'Rimjhim (Classic)';
    else if (id.startsWith('ww')) book = 'Our Wondrous World (NEP)';
    else if (id.startsWith('la')) book = 'Looking Around (Classic)';

    if (!bookStats[book]) bookStats[book] = [];
    bookStats[book].push({ id, title: rawTitle, qCount, cbqCount, rubricCount, totalItems: qCount + cbqCount });
  });

  results.push({ subject: f.subject, file: f.file, books: bookStats });
});

console.log(JSON.stringify(results, null, 2));
