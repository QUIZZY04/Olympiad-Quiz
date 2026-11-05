const fs = require('fs');
const path = require('path');

const targets = [
  { file: 'ch2.html', id: 'c10m-ch2-q6' },
  { file: 'ch3.html', id: 'c10m-ch3-q2' },
  { file: 'ch6.html', id: 'c10m-ch6-q13' },
  { file: 'ch6.html', id: 'c10m-ch6-q16' },
  { file: 'ch6.html', id: 'c10m-ch6-q18' },
  { file: 'ch6.html', id: 'c10m-ch6-q21' },
  { file: 'ch6.html', id: 'c10m-ch6-q23' },
  { file: 'ch6.html', id: 'c10m-ch6-q24' },
  { file: 'ch6.html', id: 'c10m-ch6-q25' },
  { file: 'ch6.html', id: 'c10m-ch6-q27' },
  { file: 'ch7.html', id: 'c10m-ch7-q1' },
  { file: 'ch8.html', id: 'c10m-ch8-q2' },
  { file: 'ch8.html', id: 'c10m-ch8-q19' },
  { file: 'ch9.html', id: 'c10m-ch9-q2' },
  { file: 'ch9.html', id: 'c10m-ch9-q4' },
  { file: 'ch9.html', id: 'c10m-ch9-q7' },
  { file: 'ch9.html', id: 'c10m-ch9-q13' },
  { file: 'ch10.html', id: 'c10m-ch10-thm1' },
  { file: 'ch10.html', id: 'c10m-ch10-thm2' },
  { file: 'ch10.html', id: 'c10m-ch10-q9' },
  { file: 'ch10.html', id: 'c10m-ch10-q12' },
  { file: 'ch10.html', id: 'c10m-ch10-q14' },
  { file: 'ch11.html', id: 'c10m-ch11-q2' },
  { file: 'ch12.html', id: 'c10m-ch12-q1' },
  { file: 'ch12.html', id: 'c10m-ch12-q3' },
  { file: 'ch12.html', id: 'c10m-ch12-q6' },
  { file: 'ch12.html', id: 'c10m-ch12-q8' },
  { file: 'ch12.html', id: 'c10m-ch12-q16' },
  { file: 'ch12.html', id: 'c10m-ch12-q17' }
];

targets.forEach(t => {
  const content = fs.readFileSync(path.join('chapters-c10m', t.file), 'utf8');
  const hasId = content.includes(`id="${t.id}"`);
  console.log(`${t.file} -> ${t.id}: ${hasId ? 'FOUND' : 'MISSING'}`);
});
