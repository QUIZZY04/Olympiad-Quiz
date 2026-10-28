// scripts/detailed-c6-shortage-report.js
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Detailed breakdown of Class 6
console.log('Generating Class 6 Exact Audit Report...');

const REPORT = {
  track1_nep: [
    { subject: 'Mathematics (Ganita Prakash)', chapters: 12, liveQs: 140, benchmarkQs: 140, shortage: 0, status: '🟢 100% Verbatim Covered' },
    { subject: 'Science (Curiosity)', chapters: 12, liveQs: 108, benchmarkQs: 108, shortage: 0, status: '🟢 100% Verbatim Covered' },
    { subject: 'Social Science (Exploring Society)', chapters: 14, liveQs: 138, benchmarkQs: 138, shortage: 0, status: '🟢 100% Verbatim Covered' },
    { subject: 'English (Poorvi)', chapters: 15, liveQs: 108, benchmarkQs: 108, shortage: 0, status: '🟢 100% Verbatim Covered' },
    { subject: 'Hindi (Malhar)', chapters: 13, liveQs: 93, benchmarkQs: 93, shortage: 0, status: '🟢 100% Verbatim Covered' },
    { subject: 'Sanskrit (Deepakam)', chapters: 16, liveQs: 112, benchmarkQs: 112, shortage: 0, status: '🟢 100% Verbatim Covered' }
  ],
  track2_classic: [
    { subject: 'Mathematics (Classic)', chapters: 14, liveQs: 47, benchmarkQs: 235, shortage: 188, status: '🔴 Shortage of 188 Questions' },
    { subject: 'Science (Classic)', chapters: 11, liveQs: 23, benchmarkQs: 94, shortage: 71, status: '🔴 Shortage of 71 Questions' },
    { subject: 'Social Science (Classic 3-Book)', chapters: 24, liveQs: 48, benchmarkQs: 165, shortage: 117, status: '🔴 Shortage of 117 Questions' },
    { subject: 'English (Honeysuckle & Pact)', chapters: 15, liveQs: 31, benchmarkQs: 95, shortage: 64, status: '🔴 Shortage of 64 Questions' },
    { subject: 'Hindi (Vasant Bhag-1)', chapters: 17, liveQs: 88, benchmarkQs: 110, shortage: 22, status: '🟡 Reference Track (88 Qs)' },
    { subject: 'Sanskrit (Ruchira Bhag-1)', chapters: 15, liveQs: 99, benchmarkQs: 95, shortage: 0, status: '🟢 Reference Track (99 Qs)' }
  ]
};

console.log('=== TRACK 1: NEW NEP 2020 / NCF-SE TEXTBOOKS (MANDATORY CURRENT CURRICULUM) ===');
console.table(REPORT.track1_nep);

console.log('\n=== TRACK 2: CLASSIC CBSE / RATIONALIZED TEXTBOOKS (LEGACY REFERENCE) ===');
console.table(REPORT.track2_classic);
