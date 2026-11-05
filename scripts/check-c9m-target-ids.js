const fs = require('fs');
const path = require('path');

const targets = [
  { file: 'ch1.html', id: 'q1_1_3' },
  { file: 'ch1.html', id: 'q1_2_2' },
  { file: 'ch1.html', id: 'q1_2_6' },
  { file: 'ch2.html', id: 'q2_2_1' },
  { file: 'ch3.html', id: 'q3_1_3' },
  { file: 'ch4.html', id: 'q4_1_1' },
  { file: 'ch5.html', id: 'q5_1_2' },
  { file: 'ch5.html', id: 'q5_2_1' },
  { file: 'ch6.html', id: 'q6_2_1' },
  { file: 'ch6.html', id: 'q6_2_2' },
  { file: 'ch6.html', id: 'q6_3_2' },
  { file: 'ch7.html', id: 'q7_2_2' },
  { file: 'ch7.html', id: 'q7_2_3' },
  { file: 'ch7.html', id: 'q7_3_1' },
  { file: 'ch8.html', id: 'q8_1_1' },
  { file: 'ch9.html', id: 'q9_2_1' },
  { file: 'ch9.html', id: 'q9_2_2' },
  { file: 'ch10.html', id: 'q10_2_3' },
  { file: 'ch11.html', id: 'q11_2_1' },
  { file: 'ch12.html', id: 'q12_1_1' },
  { file: 'ch12.html', id: 'q12_2_1' },
  { file: 'ch13.html', id: 'q13_3_1' },
  { file: 'ch14.html', id: 'q14_1_1' },
  { file: 'ch14.html', id: 'q14_2_1' },
  { file: 'ch14.html', id: 'q14_2_2' },
  { file: 'ch14.html', id: 'q14_3_3' }
];

let missing = 0;
targets.forEach(t => {
  const content = fs.readFileSync(path.join('chapters-c9m', t.file), 'utf8');
  const found = content.includes(`id="${t.id}"`);
  console.log(`${t.file} -> ${t.id}: ${found ? 'FOUND' : 'MISSING'}`);
  if (!found) missing++;
});
console.log(`Total targets: ${targets.length}, Missing: ${missing}`);
