const fs = require('fs');
const path = require('path');

const mainFile = 'ncert-solutions-class-10-maths.html';
const content = fs.readFileSync(mainFile, 'utf8');

console.log('Main file length:', content.length);
// Check if main file embeds chapters or fetches from chapters-c10m/
const hasFetch = content.includes('fetch(');
const hasChapterData = content.includes('chapters-data.js');
const sections = [...content.matchAll(/<section\s+class="chapter-section"[^>]*>/gi)];
console.log('Embedded chapter-section tags in main file:', sections.length);
console.log('hasFetch:', hasFetch, 'hasChapterData:', hasChapterData);

// Check chapters-data.js
const dataFile = path.join('chapters-c10m', 'chapters-data.js');
if (fs.existsSync(dataFile)) {
  const dataContent = fs.readFileSync(dataFile, 'utf8');
  console.log('chapters-data.js length:', dataContent.length);
  console.log('chapters-data.js preview:', dataContent.substring(0, 300));
}

// Check what each chX.html in chapters-c10m contains
const ch1 = fs.readFileSync(path.join('chapters-c10m', 'ch1.html'), 'utf8');
console.log('\nch1.html length:', ch1.length);
console.log('ch1.html is full HTML page?:', ch1.includes('<!DOCTYPE html>'));
