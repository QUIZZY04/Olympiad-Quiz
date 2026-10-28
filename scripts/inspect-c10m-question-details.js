const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c10m');

const priorityQuestions = [
  { ch: 'ch6.html', id: 'c10m-ch6-q16' },
  { ch: 'ch6.html', id: 'c10m-ch6-q21' },
  { ch: 'ch6.html', id: 'c10m-ch6-q24' },
  { ch: 'ch6.html', id: 'c10m-ch6-q25' },
  { ch: 'ch8.html', id: 'c10m-ch8-q2' },
  { ch: 'ch9.html', id: 'c10m-ch9-q4' },
  { ch: 'ch9.html', id: 'c10m-ch9-q7' },
  { ch: 'ch9.html', id: 'c10m-ch9-q9' },
  { ch: 'ch9.html', id: 'c10m-ch9-q12' },
  { ch: 'ch9.html', id: 'c10m-ch9-q13' },
  { ch: 'ch10.html', id: 'c10m-ch10-q9' },
  { ch: 'ch10.html', id: 'c10m-ch10-thm2' },
  { ch: 'ch10.html', id: 'c10m-ch10-q16' },
  { ch: 'ch12.html', id: 'c10m-ch12-q3' },
  { ch: 'ch12.html', id: 'c10m-ch12-q16' },
  { ch: 'ch12.html', id: 'c10m-ch12-q17' }
];

priorityQuestions.forEach(p => {
  const content = fs.readFileSync(path.join(dir, p.ch), 'utf8');
  const reg = new RegExp(`<div class="q-card" id="${p.id}">([\\s\\S]*?)<\\/div>\\s*<\\/div>\\s*<\\/div>`, 'i');
  const m = content.match(reg);
  if (m) {
    console.log(`\n================== ${p.id} (${p.ch}) ==================`);
    const qText = (m[1].match(/<div class="q-text">([\s\S]*?)<\/div>/i) || ['', ''])[1];
    const ansText = (m[1].match(/<div class="answer-text">([\s\S]*?)<\/div>/i) || ['', ''])[1];
    console.log('QUESTION:\n', qText.trim());
    console.log('ANSWER:\n', ansText.trim().substring(0, 300) + '...');
  } else {
    console.log(`Question ${p.id} NOT found in ${p.ch}`);
  }
});
