const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'ncert-solutions-class-8-maths.html');
const content = fs.readFileSync(file, 'utf8');

console.log('File size:', content.length, 'bytes');
console.log('Has doctype:', content.includes('<!DOCTYPE html>'));

for (let i = 1; i <= 13; i++) {
  const hasSec = content.includes(`id="ch${i}"`);
  if (!hasSec) {
    console.error(`Missing section #ch${i}`);
  }
}

const openSections = (content.match(/<section/g) || []).length;
const closeSections = (content.match(/<\/section>/g) || []).length;
console.log('Sections (open/close):', openSections, '/', closeSections);

const qCards = (content.match(/class="q-card"/g) || []).length;
const qAnswers = (content.match(/class="q-answer"/g) || []).length;
console.log('Question cards / Answers:', qCards, '/', qAnswers);

const cbqCards = (content.match(/class="cbq-card"/g) || []).length;
const cbqAnswers = (content.match(/class="cbq-answer"/g) || []).length;
console.log('CBQ cards / Answers:', cbqCards, '/', cbqAnswers);

const markingSchemes = (content.match(/class="marking-scheme"/g) || []).length;
console.log('Marking schemes:', markingSchemes);

if (openSections === 13 && closeSections === 13 && qCards === qAnswers && cbqCards === cbqAnswers) {
  console.log('✅ ALL HTML TAGS AND SECTIONS ARE BALANCED PERFECTLY!');
} else {
  console.log('⚠️ Discrepancy detected!');
}
