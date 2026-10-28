const fs = require('fs');

const wrapStyle = 'margin: 16px auto; text-align: center; max-width: 580px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.04);';

const additionalSVGs = `
// ==========================================
// ADDITIONAL SVG DIAGRAMS FOR C10M (CH 4, 5, 13, 14)
// ==========================================

// 28. Ch 14 Q7/Q19: Comprehensive Deck of 52 Playing Cards Architecture
const svgCh14Q7_DeckOfCards = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 14.1: Architecture of a Well-Shuffled Deck of 52 Playing Cards</div>
  <svg viewBox="0 0 520 250" width="100%" height="250" xmlns="http://www.w3.org/2000/svg">
    <!-- Total Header -->
    <rect x="10" y="8" width="500" height="28" rx="6" fill="#1e293b"/>
    <text x="260" y="27" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#f8fafc" text-anchor="middle">TOTAL: 52 CARDS (4 Suits of 13 Cards Each)</text>
    
    <!-- Red Cards Section (Left) -->
    <rect x="10" y="44" width="244" height="135" rx="8" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/>
    <text x="132" y="65" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#dc2626" text-anchor="middle">26 RED CARDS</text>
    
    <!-- Hearts ♥ -->
    <rect x="20" y="75" width="108" height="96" rx="6" fill="#ffffff" stroke="#fca5a5"/>
    <text x="74" y="93" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626" text-anchor="middle">♥ HEARTS (13)</text>
    <text x="74" y="112" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569" text-anchor="middle">Ace, 2, 3 ... 10</text>
    <text x="74" y="130" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#dc2626" text-anchor="middle">Face: J, Q, K (3)</text>
    <text x="74" y="152" font-family="system-ui, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">1 Ace + 12 Others</text>
    
    <!-- Diamonds ♦ -->
    <rect x="136" y="75" width="108" height="96" rx="6" fill="#ffffff" stroke="#fca5a5"/>
    <text x="190" y="93" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626" text-anchor="middle">♦ DIAMONDS (13)</text>
    <text x="190" y="112" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569" text-anchor="middle">Ace, 2, 3 ... 10</text>
    <text x="190" y="130" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#dc2626" text-anchor="middle">Face: J, Q, K (3)</text>
    <text x="190" y="152" font-family="system-ui, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">1 Ace + 12 Others</text>
    
    <!-- Black Cards Section (Right) -->
    <rect x="266" y="44" width="244" height="135" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="388" y="65" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">26 BLACK CARDS</text>
    
    <!-- Spades ♠ -->
    <rect x="276" y="75" width="108" height="96" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="330" y="93" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">♠ SPADES (13)</text>
    <text x="330" y="112" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569" text-anchor="middle">Ace, 2, 3 ... 10</text>
    <text x="330" y="130" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f172a" text-anchor="middle">Face: J, Q, K (3)</text>
    <text x="330" y="152" font-family="system-ui, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">1 Ace + 12 Others</text>
    
    <!-- Clubs ♣ -->
    <rect x="392" y="75" width="108" height="96" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="446" y="93" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">♣ CLUBS (13)</text>
    <text x="446" y="112" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569" text-anchor="middle">Ace, 2, 3 ... 10</text>
    <text x="446" y="130" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0f172a" text-anchor="middle">Face: J, Q, K (3)</text>
    <text x="446" y="152" font-family="system-ui, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">1 Ace + 12 Others</text>
    
    <!-- Summary Footer Row -->
    <rect x="10" y="188" width="500" height="52" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="260" y="208" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#1d4ed8" text-anchor="middle">CRITICAL CBSE BOARD COUNTS FOR PROBABILITY:</text>
    <text x="260" y="228" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e40af" text-anchor="middle">Face Cards = 12 (6 Red, 6 Black) • Aces = 4 (2 Red, 2 Black) • Number Cards (2-10) = 36</text>
  </svg>
</div>\`;

// 29. Ch 14 Q27: Two Dice 36 Outcomes Matrix
const svgCh14Q27_TwoDiceGrid = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 14.2: Sample Space for Throwing Two Dice Simultaneously (36 Elementary Outcomes)</div>
  <svg viewBox="0 0 500 240" width="100%" height="240" xmlns="http://www.w3.org/2000/svg">
    <!-- Header Labels -->
    <text x="250" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b" text-anchor="middle">Die 2 Outcome (Column: 1 to 6)</text>
    <text x="18" y="130" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b" transform="rotate(-90, 18, 130)" text-anchor="middle">Die 1 Outcome</text>
    
    <!-- Table background -->
    <rect x="45" y="28" width="440" height="170" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
    
    <!-- Grid items: 6 rows, 6 columns -->
    <!-- Column headers -->
    <g font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#2563eb" text-anchor="middle">
      <text x="80" y="44">C1</text><text x="145" y="44">C2</text><text x="215" y="44">C3</text>
      <text x="285" y="44">C4</text><text x="355" y="44">C5</text><text x="425" y="44">C6</text>
    </g>
    
    <!-- Sample items row by row -->
    <g font-family="system-ui, sans-serif" font-size="10" fill="#334155" text-anchor="middle">
      <!-- Row 1 -->
      <text x="80" y="65">(1,1)</text><text x="145" y="65">(1,2)</text><text x="215" y="65">(1,3)</text><text x="285" y="65">(1,4)</text><text x="355" y="65">(1,5)</text><text x="425" y="65" font-weight="700" fill="#dc2626">(1,6)*</text>
      <!-- Row 2 -->
      <text x="80" y="90">(2,1)</text><text x="145" y="90" font-weight="700" fill="#0284c7">(2,2)</text><text x="215" y="90">(2,3)</text><text x="285" y="90">(2,4)</text><text x="355" y="90" font-weight="700" fill="#dc2626">(2,5)*</text><text x="425" y="90">(2,6)</text>
      <!-- Row 3 -->
      <text x="80" y="115">(3,1)</text><text x="145" y="115">(3,2)</text><text x="215" y="115" font-weight="700" fill="#0284c7">(3,3)</text><text x="285" y="115" font-weight="700" fill="#dc2626">(3,4)*</text><text x="355" y="115">(3,5)</text><text x="425" y="115">(3,6)</text>
      <!-- Row 4 -->
      <text x="80" y="140">(4,1)</text><text x="145" y="140">(4,2)</text><text x="215" y="140" font-weight="700" fill="#dc2626">(4,3)*</text><text x="285" y="140" font-weight="700" fill="#0284c7">(4,4)</text><text x="355" y="140">(4,5)</text><text x="425" y="140">(4,6)</text>
      <!-- Row 5 -->
      <text x="80" y="165">(5,1)</text><text x="145" y="165" font-weight="700" fill="#dc2626">(5,2)*</text><text x="215" y="165">(5,3)</text><text x="285" y="165">(5,4)</text><text x="355" y="165" font-weight="700" fill="#0284c7">(5,5)</text><text x="425" y="165">(5,6)</text>
      <!-- Row 6 -->
      <text x="80" y="190" font-weight="700" fill="#dc2626">(6,1)*</text><text x="145" y="190">(6,2)</text><text x="215" y="190">(6,3)</text><text x="285" y="190">(6,4)</text><text x="355" y="190">(6,5)</text><text x="425" y="190" font-weight="700" fill="#0284c7">(6,6)</text>
    </g>
    
    <!-- Legend / Note -->
    <rect x="45" y="205" width="440" height="28" rx="4" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="265" y="223" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1e40af" text-anchor="middle">Total Elementary Outcomes n(S) = 6 × 6 = 36 • Starred (*) pairs have Sum = 7 (6 outcomes, P = 6/36 = 1/6)</text>
  </svg>
</div>\`;

// 30. Ch 4: Nature of Roots via Discriminant D = b^2 - 4ac
const svgCh4_Discriminant = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 4.1: Nature of Roots of ax² + bx + c = 0 via Discriminant D = b² - 4ac</div>
  <svg viewBox="0 0 500 170" width="100%" height="170" xmlns="http://www.w3.org/2000/svg">
    <!-- Panel 1: D > 0 (2 Real & Distinct Roots) -->
    <g transform="translate(10, 10)">
      <rect x="0" y="0" width="155" height="150" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
      <text x="77" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#166534" text-anchor="middle">D &gt; 0</text>
      <!-- Axes -->
      <line x1="15" y1="90" x2="140" y2="90" stroke="#64748b" stroke-width="1.2"/>
      <line x1="77" y1="40" x2="77" y2="120" stroke="#64748b" stroke-width="1.2"/>
      <!-- Parabola cutting in 2 points -->
      <path d="M 30 50 Q 77 125 125 50" fill="none" stroke="#16a34a" stroke-width="2.5"/>
      <circle cx="48" cy="90" r="3.5" fill="#dc2626"/>
      <circle cx="107" cy="90" r="3.5" fill="#dc2626"/>
      <text x="77" y="138" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#15803d" text-anchor="middle">2 Real &amp; Distinct Roots</text>
    </g>
    
    <!-- Panel 2: D = 0 (2 Equal Real Roots) -->
    <g transform="translate(172, 10)">
      <rect x="0" y="0" width="155" height="150" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
      <text x="77" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">D = 0</text>
      <!-- Axes -->
      <line x1="15" y1="90" x2="140" y2="90" stroke="#64748b" stroke-width="1.2"/>
      <line x1="77" y1="40" x2="77" y2="120" stroke="#64748b" stroke-width="1.2"/>
      <!-- Parabola touching at 1 point -->
      <path d="M 35 50 Q 77 90 120 50" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      <circle cx="77" cy="90" r="3.5" fill="#dc2626"/>
      <text x="77" y="138" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1d4ed8" text-anchor="middle">Two Equal Real Roots</text>
    </g>
    
    <!-- Panel 3: D < 0 (No Real Roots) -->
    <g transform="translate(334, 10)">
      <rect x="0" y="0" width="155" height="150" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
      <text x="77" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#991b1b" text-anchor="middle">D &lt; 0</text>
      <!-- Axes -->
      <line x1="15" y1="90" x2="140" y2="90" stroke="#64748b" stroke-width="1.2"/>
      <line x1="77" y1="40" x2="77" y2="120" stroke="#64748b" stroke-width="1.2"/>
      <!-- Parabola strictly above axis -->
      <path d="M 35 45 Q 77 75 120 45" fill="none" stroke="#dc2626" stroke-width="2.5"/>
      <text x="77" y="138" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#b91c1c" text-anchor="middle">No Real Roots</text>
    </g>
  </svg>
</div>\`;

// 31. Ch 5: Arithmetic Progression Incremental Staircase
const svgCh5_APStaircase = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 5.1: Structure of an AP — Constant Difference d &amp; nth Term Formula</div>
  <svg viewBox="0 0 500 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
    <!-- Ground line -->
    <line x1="30" y1="140" x2="470" y2="140" stroke="#334155" stroke-width="2"/>
    
    <!-- Bars for terms a, a+d, a+2d, a+3d, a+4d -->
    <!-- Bar 1: a -->
    <rect x="50" y="105" width="60" height="35" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="80" y="127" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">a</text>
    <text x="80" y="157" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">a₁</text>
    
    <!-- Bar 2: a+d -->
    <rect x="130" y="85" width="60" height="55" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="160" y="117" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">a + d</text>
    <text x="160" y="157" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">a₂</text>
    
    <!-- Bar 3: a+2d -->
    <rect x="210" y="65" width="60" height="75" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="240" y="107" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">a + 2d</text>
    <text x="240" y="157" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">a₃</text>
    
    <!-- Bar 4: a+3d -->
    <rect x="290" y="45" width="60" height="95" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="320" y="97" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">a + 3d</text>
    <text x="320" y="157" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">a₄</text>
    
    <!-- Step increment indicators +d -->
    <path d="M 110 105 L 130 105 L 130 85" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="125" y="78" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#dc2626">+d</text>
    
    <path d="M 190 85 L 210 85 L 210 65" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="205" y="58" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#dc2626">+d</text>
    
    <!-- General formula box on right -->
    <rect x="365" y="35" width="125" height="105" rx="8" fill="#f0fdf4" stroke="#86efac"/>
    <text x="427" y="58" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#15803d" text-anchor="middle">nth Term:</text>
    <text x="427" y="78" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">aₙ = a + (n - 1)d</text>
    <text x="427" y="105" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#15803d" text-anchor="middle">Sum Sₙ:</text>
    <text x="427" y="125" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#166534" text-anchor="middle">n/2 [2a + (n - 1)d]</text>
  </svg>
</div>\`;

// 32. Ch 13: Empirical Relationship Between Mean, Median, and Mode
const svgCh13_EmpiricalFormula = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 13.1: Central Tendency &amp; Empirical Relationship: Mode = 3 Median - 2 Mean</div>
  <svg viewBox="0 0 500 170" width="100%" height="170" xmlns="http://www.w3.org/2000/svg">
    <!-- Curve for Moderately Skewed Distribution -->
    <path d="M 40 130 Q 140 130 180 30 Q 230 130 460 130" fill="#f8fafc" stroke="#2563eb" stroke-width="2.5"/>
    <!-- Base axis -->
    <line x1="30" y1="130" x2="470" y2="130" stroke="#334155" stroke-width="2"/>
    
    <!-- Mode line (Peak) -->
    <line x1="180" y1="30" x2="180" y2="130" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,3"/>
    <circle cx="180" cy="30" r="4" fill="#dc2626"/>
    <text x="180" y="20" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#dc2626" text-anchor="middle">Mode (Peak)</text>
    
    <!-- Median line (50th percentile) -->
    <line x1="210" y1="52" x2="210" y2="130" stroke="#059669" stroke-width="2" stroke-dasharray="3,3"/>
    <circle cx="210" cy="52" r="4" fill="#059669"/>
    <text x="210" y="44" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#059669" text-anchor="middle">Median</text>
    
    <!-- Mean line (Centre of Gravity) -->
    <line x1="250" y1="80" x2="250" y2="130" stroke="#7c3aed" stroke-width="2" stroke-dasharray="3,3"/>
    <circle cx="250" cy="80" r="4" fill="#7c3aed"/>
    <text x="250" y="72" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#7c3aed" text-anchor="middle">Mean</text>
    
    <!-- Formula banner box -->
    <rect x="290" y="20" width="195" height="52" rx="8" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="387" y="40" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">EMPIRICAL RELATIONSHIP:</text>
    <text x="387" y="58" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">Mode = 3 Median - 2 Mean</text>
  </svg>
</div>\`;
`;

let currentDef = fs.readFileSync('scripts/c10m-svg-definitions.js', 'utf8');
const exportMarker = 'module.exports = {';
const beforeExport = currentDef.split(exportMarker)[0];

const newExports = `
module.exports = {
  svgCh6Q16,
  svgCh6Q21,
  svgCh6Q24,
  svgCh6Q25,
  svgCh8Q2,
  svgCh9Q4,
  svgCh9Q7,
  svgCh9Q13,
  svgCh10Thm2,
  svgCh10Q9,
  svgCh11Q2,
  svgCh12Q3,
  svgCh12Q16,
  svgCh12Q17,
  svgCh2Q1,
  svgCh3Q2,
  svgCh7Q1,
  svgCh12Q1_Cubes,
  svgCh9Q2_BrokenTree,
  svgCh10Thm1,
  svgCh10Q12,
  svgCh10Q14,
  svgCh6Q13,
  svgCh6Q18,
  svgCh6Q23,
  svgCh6Q27,
  svgCh11Q2_Quadrant,
  // Remaining chapters
  svgCh14Q7_DeckOfCards,
  svgCh14Q27_TwoDiceGrid,
  svgCh4_Discriminant,
  svgCh5_APStaircase,
  svgCh13_EmpiricalFormula
};
`;

fs.writeFileSync('scripts/c10m-svg-definitions.js', beforeExport + additionalSVGs + newExports, 'utf8');
console.log('Successfully updated scripts/c10m-svg-definitions.js with all 32 SVG diagrams!');
