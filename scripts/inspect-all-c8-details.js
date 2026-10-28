const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BENCHMARKS = require('./c8-benchmarks.js');

const subjects = [
  { name: 'Mathematics', file: 'ncert-solutions-class-8-maths.html', benchmarks: BENCHMARKS.maths },
  { name: 'Science', file: 'ncert-solutions-class-8-science.html', benchmarks: BENCHMARKS.science },
  { name: 'Social Science', file: 'ncert-solutions-class-8-sst.html', benchmarks: BENCHMARKS.socialScience },
  { name: 'Hindi', file: 'ncert-solutions-class-8-hindi.html', benchmarks: BENCHMARKS.hindi },
  { name: 'English', file: 'ncert-solutions-class-8-english.html', benchmarks: BENCHMARKS.english },
  { name: 'Sanskrit', file: 'ncert-solutions-class-8-sanskrit.html', benchmarks: BENCHMARKS.sanskrit }
];

console.log('========================================================================================');
console.log('🔍 COMPREHENSIVE AUDIT REPORT: CLASS 8 NCERT EXERCISE COVERAGE ACROSS ALL SUBJECTS');
console.log('========================================================================================\n');

let grandBenchmark = 0;
let grandLiveQs = 0;
let grandCBQs = 0;
let grandTotal = 0;

subjects.forEach(sub => {
  const fPath = path.join(ROOT, sub.file);
  const html = fs.existsSync(fPath) ? fs.readFileSync(fPath, 'utf8') : '';

  // Extract sections
  const sections = [];
  const secRegex = /<section[^>]*class="[^"]*chapter-section[^"]*"[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g;
  let m;
  while ((m = secRegex.exec(html)) !== null) {
    const secId = m[1];
    const secHtml = m[2];
    const titleMatch = secHtml.match(/<h2>(.*?)<\/h2>/);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : secId;
    const qCards = (secHtml.match(/class="q-card"/g) || []).length;
    const cbqCards = (secHtml.match(/class="case-study-box"|class="cbq-card"/g) || []).length;
    sections.push({ secId, title, qCards, cbqCards });
  }

  // Calculate benchmark
  let benchmarkTotal = 0;
  if (sub.benchmarks) {
    sub.benchmarks.forEach(b => {
      benchmarkTotal += b.physicalQ;
    });
  }

  const liveQs = sections.reduce((sum, s) => sum + s.qCards, 0);
  const cbqs = sections.reduce((sum, s) => sum + s.cbqCards, 0);
  const totalSite = liveQs + cbqs;
  const shortage = Math.max(0, benchmarkTotal - liveQs);
  const coveragePct = benchmarkTotal > 0 ? Math.min(100, (liveQs / benchmarkTotal) * 100).toFixed(1) : '100.0';

  grandBenchmark += benchmarkTotal;
  grandLiveQs += liveQs;
  grandCBQs += cbqs;
  grandTotal += totalSite;

  console.log(`📘 SUBJECT: ${sub.name.toUpperCase()}`);
  console.log(`   File: ${sub.file}`);
  console.log(`   Canonical Chapters      : ${sections.length}`);
  console.log(`   Physical Benchmark Qs   : ${benchmarkTotal} Qs`);
  console.log(`   Live Exercise Solutions : ${liveQs} Qs`);
  console.log(`   HOTS & CBQ Case Studies : ${cbqs} Qs`);
  console.log(`   Total Question Cards    : ${totalSite} Qs`);
  console.log(`   Shortage vs Benchmark   : ${shortage} Qs`);
  console.log(`   Strict Exercise Coverage: ${coveragePct}%\n`);
});

console.log('========================================================================================');
console.log('🏆 GRAND TOTAL ACROSS ALL 6 SUBJECTS (CLASS 8):');
console.log(`   Total Physical Benchmark Required : ${grandBenchmark} Qs`);
console.log(`   Total Live NCERT Exercise Qs      : ${grandLiveQs} Qs`);
console.log(`   Total HOTS / CBQs on Site         : ${grandCBQs} Qs`);
console.log(`   Combined Questions on Site        : ${grandTotal} Qs`);
console.log(`   REAL SHORTAGE ACROSS CLASS 8      : ${Math.max(0, grandBenchmark - grandLiveQs)} Qs`);
console.log(`   OVERALL STRICT COVERAGE           : ${((grandLiveQs / grandBenchmark) * 100).toFixed(1)}%`);
console.log('========================================================================================\n');
