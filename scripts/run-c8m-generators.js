const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const scripts = [
  'gen-c8m-ch1.js',
  'gen-c8m-gp-part1.js',
  'gen-c8m-gp-part1b.js',
  'gen-c8m-ch4.js',
  'gen-c8m-ch5.js',
  'gen-c8m-ch6.js',
  'gen-c8m-ch7.js',
  'gen-c8m-ch8.js',
  'gen-c8m-ch9.js',
  'gen-c8m-ch10.js',
  'gen-c8m-ch11.js',
  'gen-c8m-ch12.js',
  'gen-c8m-ch13.js',
  'gen-c8m-ch14.js'
];

console.log('=== Running all Class 8 Maths Ganita Prakash Generators ===');
scripts.forEach(s => {
  const p = path.join(__dirname, s);
  try {
    const out = execSync(`node "${p}"`, { encoding: 'utf8' });
    console.log(`✓ ${s}: ${out.trim()}`);
  } catch (err) {
    console.error(`✗ Error in ${s}:`, err.message);
  }
});
