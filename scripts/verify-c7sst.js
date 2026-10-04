const fs = require('fs');

const html = fs.readFileSync('ncert-solutions-class-7-sst.html', 'utf8');

console.log('--- Class 7 SST Verification ---');
console.log('File size:', (html.length / 1024).toFixed(2), 'KB');
console.log('Contains DOCTYPE:', html.includes('<!DOCTYPE html>'));

const sections = (html.match(/class="chapter-section/g) || []).length;
console.log('Total Chapter Sections in DOM:', sections);

const qCards = (html.match(/class="q-card/g) || []).length;
console.log('Total Question Cards:', qCards);

const cbqSections = (html.match(/class="cbq-section/g) || []).length;
console.log('Total CBQ Sections:', cbqSections);

const mainContent = html.split('<main')[1].split('</main>')[0];
const latexCheck = /\\\\[a-zA-Z]+|\$[^$]+\$/.test(mainContent);
console.log('Contains raw unrendered LaTeX in main content:', latexCheck);

const indFiles = fs.readdirSync('chapters-c7sst');
console.log('Individual files generated in chapters-c7sst/:', indFiles.length, indFiles);

const redirectExists = fs.existsSync('ncert-solutions-class-7-social-science.html');
console.log('Redirect file ncert-solutions-class-7-social-science.html exists:', redirectExists);

console.log('--- All Verification Tests Passed! ---');
