// scripts/builders/gen-c12c-ch1.js
// Class 12 Chemistry Chapter 1: Solutions (NCERT Rationalised 2026–27)
// Full Coverage: 12 In-Text Questions + 41 End-of-Chapter Exercises = 53 Questions
const { saveChapter } = require('./c12c-helper');
const { questions: part1 } = require('./gen-c12c-ch1-part1');
const { questions: part2 } = require('./gen-c12c-ch1-part2');
const { questions: part3 } = require('./gen-c12c-ch1-part3');

const chNum = 1;
const chTitle = 'Solutions (विलयन)';
const exTitle = 'NCERT Chapter 1: In-Text Questions (1.1–1.12) & End-of-Chapter Exercises (1.1–1.41)';

const svgDiagram = `
<div style="background:linear-gradient(135deg, #ecfdf5, #d1fae5); border:1px solid #a7f3d0; border-radius:12px; padding:20px; margin-bottom:24px;">
  <h3 style="font-size:1.05rem; color:#065f46; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4M12 16V8"/></svg>
    Colligative Properties & Raoult's Law Architecture
  </h3>
  <svg viewBox="0 0 850 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
    <!-- Box 1: Relative Lowering of Vapour Pressure -->
    <rect x="15" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
    <text x="110" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Vapour Pressure Lowering</text>
    <text x="110" y="72" text-anchor="middle" font-size="11" fill="#334155">(p₁⁰ - p₁) / p₁⁰ = i · x₂</text>
    <text x="110" y="98" text-anchor="middle" font-size="10" fill="#64748b">• Raoult's Law (Ideal Sol.)</text>
    <text x="110" y="116" text-anchor="middle" font-size="10" fill="#64748b">• M₂ = (w₂ M₁ p₁⁰) / [w₁(p₁⁰ - p₁)]</text>

    <!-- Box 2: Elevation in Boiling Point -->
    <rect x="225" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="320" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">Boiling Point Elevation</text>
    <text x="320" y="72" text-anchor="middle" font-size="11" fill="#334155">ΔT_b = i · K_b · m</text>
    <text x="320" y="98" text-anchor="middle" font-size="10" fill="#64748b">• Ebullioscopic Constant</text>
    <text x="320" y="116" text-anchor="middle" font-size="10" fill="#64748b">• m = (w₂ × 1000) / (M₂ × w₁)</text>

    <!-- Box 3: Depression in Freezing Point -->
    <rect x="435" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
    <text x="530" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">Freezing Point Depression</text>
    <text x="530" y="72" text-anchor="middle" font-size="11" fill="#334155">ΔT_f = i · K_f · m</text>
    <text x="530" y="98" text-anchor="middle" font-size="10" fill="#64748b">• Cryoscopic Constant</text>
    <text x="530" y="116" text-anchor="middle" font-size="10" fill="#64748b">• Ethylene glycol antifreeze</text>

    <!-- Box 4: Osmotic Pressure -->
    <rect x="645" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
    <text x="740" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#5b21b6">Osmotic Pressure</text>
    <text x="740" y="72" text-anchor="middle" font-size="11" fill="#334155">Π = i · C R T</text>
    <text x="740" y="98" text-anchor="middle" font-size="10" fill="#64748b">• van 't Hoff Factor (i)</text>
    <text x="740" y="116" text-anchor="middle" font-size="10" fill="#64748b">• Best for Molar Mass of Polymers</text>
  </svg>
</div>`;

const allQuestions = [...part1, ...part2, ...part3];

console.log(`\nCompiling Chapter 1: Solutions...`);
console.log(`Part 1 (In-Text): ${part1.length} questions`);
console.log(`Part 2 (Ex 1.1-1.20): ${part2.length} questions`);
console.log(`Part 3 (Ex 1.21-1.41): ${part3.length} questions`);
console.log(`Total questions for Chapter 1: ${allQuestions.length}`);

saveChapter(chNum, chTitle, svgDiagram, exTitle, allQuestions, 'Electrochemistry');
console.log(`Chapter 1: Solutions successfully saved!`);
