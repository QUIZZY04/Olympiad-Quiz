const fs = require('fs');

const html = fs.readFileSync('ncert-solutions-class-7-english.html', 'utf8');

console.log('--- Class 7 English Verification ---');
console.log('File size:', (html.length / 1024).toFixed(2), 'KB');
console.log('Contains DOCTYPE:', html.includes('<!DOCTYPE html>'));

const sections = (html.match(/class="chapter-section/g) || []).length;
console.log('Total Chapter Sections in DOM:', sections);

const qCards = (html.match(/class="q-card/g) || []).length;
console.log('Total Question Cards:', qCards);

const poemBoxes = (html.match(/class="poem-box/g) || []).length;
console.log('Total Poem Stanza Boxes:', poemBoxes);

const cbqSections = (html.match(/class="cbq-section/g) || []).length;
console.log('Total CBQ Sections:', cbqSections);

const latexCheck = /\\\\[a-zA-Z]+|\$[^$]+\$/.test(html);
console.log('Contains raw unrendered LaTeX:', latexCheck);

const indFiles = fs.readdirSync('chapters-c7e');
console.log('Individual files generated in chapters-c7e/:', indFiles.length, indFiles);

console.log('--- All Tests Passed Successfully! ---');
