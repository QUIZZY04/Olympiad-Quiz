const fs = require('fs');

const wrapStyle = 'margin: 16px auto; text-align: center; max-width: 580px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.04);';

const additions = `
// 25. Ch 7 Q7.2.3: Deck of 52 Cards
const svgC9_Ch7_DeckOfCards = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 7.3: Distribution of 52 Playing Cards (4 Suits × 13 Cards)</div>
  <svg viewBox="0 0 500 230" width="100%" height="230" xmlns="http://www.w3.org/2000/svg">
    <!-- Header -->
    <rect x="10" y="8" width="480" height="26" rx="6" fill="#1e293b"/>
    <text x="250" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#f8fafc" text-anchor="middle">52 PLAYING CARDS</text>
    
    <!-- Red Cards -->
    <rect x="10" y="42" width="235" height="125" rx="6" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
    <text x="127" y="62" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626" text-anchor="middle">26 RED CARDS</text>
    <rect x="20" y="70" width="105" height="90" rx="4" fill="#ffffff" stroke="#fca5a5"/>
    <text x="72" y="88" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#dc2626" text-anchor="middle">♥ HEARTS (13)</text>
    <text x="72" y="108" font-family="system-ui, sans-serif" font-size="10" fill="#475569" text-anchor="middle">Ace, 2 ... 10</text>
    <text x="72" y="126" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">Face: J, Q, K (3)</text>
    
    <rect x="135" y="70" width="105" height="90" rx="4" fill="#ffffff" stroke="#fca5a5"/>
    <text x="187" y="88" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#dc2626" text-anchor="middle">♦ DIAMONDS (13)</text>
    <text x="187" y="108" font-family="system-ui, sans-serif" font-size="10" fill="#475569" text-anchor="middle">Ace, 2 ... 10</text>
    <text x="187" y="126" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">Face: J, Q, K (3)</text>
    
    <!-- Black Cards -->
    <rect x="255" y="42" width="235" height="125" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="372" y="62" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">26 BLACK CARDS</text>
    <rect x="265" y="70" width="105" height="90" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="317" y="88" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">♠ SPADES (13)</text>
    <text x="317" y="108" font-family="system-ui, sans-serif" font-size="10" fill="#475569" text-anchor="middle">Ace, 2 ... 10</text>
    <text x="317" y="126" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">Face: J, Q, K (3)</text>
    
    <rect x="380" y="70" width="105" height="90" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="432" y="88" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">♣ CLUBS (13)</text>
    <text x="432" y="108" font-family="system-ui, sans-serif" font-size="10" fill="#475569" text-anchor="middle">Ace, 2 ... 10</text>
    <text x="432" y="126" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">Face: J, Q, K (3)</text>
    
    <!-- Footer -->
    <rect x="10" y="175" width="480" height="45" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="250" y="195" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1d4ed8" text-anchor="middle">Total Face Cards = 12 (6 Red, 6 Black) • Kings = 4 (2 Red, 2 Black)</text>
    <text x="250" y="210" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#1e40af" text-anchor="middle">P(King of Red Color) = 2/52 = 1/26 • P(Face Card) = 12/52 = 3/13</text>
  </svg>
</div>\`;

// 26. Ch 8 Q8.1.1: Arithmetic Progression Step Model
const svgC9_Ch8_APStaircase = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 8.1: Arithmetic Progression AP: 2, 5, 8, 11... with Constant Step d = 3</div>
  <svg viewBox="0 0 460 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
    <line x1="30" y1="140" x2="430" y2="140" stroke="#334155" stroke-width="2"/>
    
    <!-- Bar 1: a1 = 2 (h=25) -->
    <rect x="50" y="115" width="55" height="25" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="77" y="132" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">2</text>
    <text x="77" y="157" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">a₁</text>
    
    <!-- Bar 2: a2 = 5 (h=50) -->
    <rect x="125" y="90" width="55" height="50" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="152" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">5</text>
    <text x="152" y="157" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">a₂</text>
    
    <!-- Bar 3: a3 = 8 (h=75) -->
    <rect x="200" y="65" width="55" height="75" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="227" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">8</text>
    <text x="227" y="157" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">a₃</text>
    
    <!-- Bar 4: a4 = 11 (h=100) -->
    <rect x="275" y="40" width="55" height="100" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="302" y="90" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">11</text>
    <text x="302" y="157" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">a₄</text>
    
    <!-- Step increments +3 -->
    <path d="M 105 115 L 125 115 L 125 90" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="120" y="85" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#dc2626">+3</text>
    <path d="M 180 90 L 200 90 L 200 65" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="195" y="60" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#dc2626">+3</text>
    
    <!-- Formula box on right -->
    <rect x="345" y="35" width="105" height="105" rx="6" fill="#f0fdf4" stroke="#86efac"/>
    <text x="397" y="58" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d" text-anchor="middle">Common Diff:</text>
    <text x="397" y="78" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">d = 3</text>
    <text x="397" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d" text-anchor="middle">nth Term:</text>
    <text x="397" y="125" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#166534" text-anchor="middle">a + (n-1)d</text>
  </svg>
</div>\`;
`;

let content = fs.readFileSync('scripts/c9m-svg-definitions.js', 'utf8');
const exportPos = content.indexOf('module.exports = {');
const beforeExport = content.substring(0, exportPos);

const newExports = `
module.exports = {
  svgC9_Ch1_CartesianPlane,
  svgC9_Ch1_DistancePythagoras,
  svgC9_Ch1_SquareVerification,
  svgC9_Ch2_LineGraph,
  svgC9_Ch3_Root2NumberLine,
  svgC9_Ch4_SquareIdentity,
  svgC9_Ch5_CircularMotion,
  svgC9_Ch5_PeriodicWave,
  svgC9_Ch6_HeronTriangle,
  svgC9_Ch6_RhombusArea,
  svgC9_Ch6_Trapezium,
  svgC9_Ch7_TwoCoinsTree,
  svgC9_Ch7_VennDiagram,
  svgC9_Ch7_DeckOfCards,
  svgC9_Ch8_APStaircase,
  svgC9_Ch9_IsoscelesProof,
  svgC9_Ch9_AngleSumTriangle,
  svgC9_Ch10_HistogramPolygon,
  svgC9_Ch11_EuclidAlgorithmFlowchart,
  svgC9_Ch12_ParallelogramDiag,
  svgC9_Ch12_MidpointTheorem,
  svgC9_Ch13_LinearGraphIntersections,
  svgC9_Ch14_CuboidSolid,
  svgC9_Ch14_CylinderSolid,
  svgC9_Ch14_ConeGeometry,
  svgC9_Ch14_SphereHemisphere
};
`;

fs.writeFileSync('scripts/c9m-svg-definitions.js', beforeExport + additions + newExports, 'utf8');
console.log('Appended Ch 7 Cards and Ch 8 AP to c9m-svg-definitions.js!');
