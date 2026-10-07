const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('🔍 EXHAUSTIVE FINAL AUDIT: CLASS 8 & 9 MATHEMATICS NCERT SOLUTIONS');
console.log('================================================================\n');

function runAudit() {
  const c8Html = fs.readFileSync(path.join(__dirname, '..', 'ncert-solutions-class-8-maths.html'), 'utf8');
  const c9Html = fs.readFileSync(path.join(__dirname, '..', 'ncert-solutions-class-9-maths.html'), 'utf8');
  const smXml = fs.readFileSync(path.join(__dirname, '..', 'sitemap.xml'), 'utf8');

  const c8Files = fs.readdirSync(path.join(__dirname, '..', 'chapters-c8m')).filter(f => f.endsWith('.html'));
  const c9Files = fs.readdirSync(path.join(__dirname, '..', 'chapters-c9m')).filter(f => f.endsWith('.html'));

  const results = {
    c8: {},
    c9: {}
  };

  // Class 8 Checks
  results.c8.bookName = c8Html.includes('Ganita Prakash') && !/ganit\s+manzari/i.test(c8Html) ? 'PASS' : 'FAIL';
  results.c8.noManzari = (c8Html.match(/manzari/gi) || []).length === 0 ? 'PASS' : 'FAIL';
  results.c8.noFalseMarkingScheme = (c8Html.match(/CBSE\s+Marking\s+Scheme/gi) || []).length === 0 ? 'PASS' : 'FAIL';
  results.c8.chapterCount = c8Files.length === 14 ? 'PASS' : 'FAIL';
  results.c8.h1Match = c8Html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1].trim() === 'NCERT Solutions for Class 8 Maths – Ganita Prakash' ? 'PASS' : 'FAIL';
  results.c8.titleMatch = c8Html.match(/<title>([\s\S]*?)<\/title>/i)?.[1].trim() === 'NCERT Solutions Class 8 Maths Ganita Prakash 2026-27 | Chapter-wise Solutions' ? 'PASS' : 'FAIL';
  results.c8.canonical = c8Html.includes('https://olympiadquiz.org/ncert-solutions-class-8-maths.html') ? 'PASS' : 'FAIL';
  results.c8.breadcrumbs = c8Html.includes('Ganita Prakash') && c8Html.includes('Class 8') && c8Html.includes('NCERT Solutions') ? 'PASS' : 'FAIL';
  results.c8.sitemap = smXml.includes('https://olympiadquiz.org/ncert-solutions-class-8-maths.html') ? 'PASS' : 'FAIL';

  // Check no old Class 8 syllabus questions remain
  const oldKeywords = ['Rational Numbers', 'Linear Equations in One Variable', 'Understanding Quadrilaterals', 'Mensuration', 'Direct and Inverse Proportions', 'Factorisation', 'Introduction to Graphs'];
  const hasOldTitles = oldKeywords.some(k => c8Html.includes(`<h2>Chapter 1: ${k}</h2>`));
  results.c8.oldQuestionsPurged = !hasOldTitles ? 'PASS' : 'FAIL';

  // Class 9 Checks
  results.c9.bookName = c9Html.includes('Ganita Manjari') && !/manzari/i.test(c9Html) ? 'PASS' : 'FAIL';
  results.c9.noManzari = (c9Html.match(/manzari/gi) || []).length === 0 ? 'PASS' : 'FAIL';
  results.c9.noFalseMarkingScheme = (c9Html.match(/CBSE\s+Marking\s+Scheme/gi) || []).length === 0 ? 'PASS' : 'FAIL';
  results.c9.chapterCount = c9Files.length === 14 ? 'PASS' : 'FAIL';
  results.c9.h1Match = c9Html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1].trim() === 'NCERT Solutions for Class 9 Maths – Ganita Manjari' ? 'PASS' : 'FAIL';
  results.c9.titleMatch = c9Html.match(/<title>([\s\S]*?)<\/title>/i)?.[1].trim() === 'NCERT Solutions Class 9 Maths Ganita Manjari 2026-27 | Chapter-wise Solutions' ? 'PASS' : 'FAIL';
  results.c9.canonical = c9Html.includes('https://olympiadquiz.org/ncert-solutions-class-9-maths.html') ? 'PASS' : 'FAIL';
  results.c9.breadcrumbs = c9Html.includes('Ganita Manjari') && c9Html.includes('Class 9') && c9Html.includes('NCERT Solutions') ? 'PASS' : 'FAIL';
  results.c9.sitemap = smXml.includes('https://olympiadquiz.org/ncert-solutions-class-9-maths.html') ? 'PASS' : 'FAIL';

  console.log('RESULTS SUMMARY:');
  console.log('Class 8:', results.c8);
  console.log('Class 9:', results.c9);

  return { results, c8Files, c9Files };
}

runAudit();
