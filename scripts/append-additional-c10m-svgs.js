const fs = require('fs');

const wrapStyle = 'margin: 16px auto; text-align: center; max-width: 580px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.04);';

const additionalSVGs = `
// ==========================================
// ADDITIONAL SVG DIAGRAMS FOR C10M
// ==========================================

// 18. Ch 12 Q1: Two Cubes Joined End-to-End
const svgCh12Q1_Cubes = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 12.1: Two 4 cm Cubes Joined End-to-End (Resulting Cuboid: 8 cm × 4 cm × 4 cm)</div>
  <svg viewBox="0 0 500 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
    <!-- Cube 1 (Left) -->
    <!-- Front Face: (80, 80) to (180, 160) -->
    <rect x="80" y="80" width="100" height="80" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <!-- Top Face 1 -->
    <polygon points="80,80 130,40 230,40 180,80" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    
    <!-- Cube 2 (Right) -->
    <!-- Front Face 2: (180, 80) to (280, 160) -->
    <rect x="180" y="80" width="100" height="80" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <!-- Top Face 2 -->
    <polygon points="180,80 230,40 330,40 280,80" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <!-- Right Face (Side) -->
    <polygon points="280,80 330,40 330,120 280,160" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
    
    <!-- Joint Line between cubes -->
    <line x1="180" y1="80" x2="180" y2="160" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="4,3"/>
    <line x1="180" y1="80" x2="230" y2="40" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="4,3"/>

    <!-- Dimension labels -->
    <!-- Length along front bottom -->
    <line x1="80" y1="180" x2="280" y2="180" stroke="#0f172a" stroke-width="1.5"/>
    <path d="M 80 176 L 80 184 M 280 176 L 280 184" stroke="#0f172a" stroke-width="1.5"/>
    <text x="180" y="198" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">Length l = 4 + 4 = 8 cm</text>
    
    <!-- Cube 1 width tag -->
    <text x="130" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Cube 1 (4 cm)</text>
    <text x="230" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Cube 2 (4 cm)</text>
    
    <!-- Height on left -->
    <line x1="65" y1="80" x2="65" y2="160" stroke="#0f172a" stroke-width="1.5"/>
    <path d="M 61 80 L 69 80 M 61 160 L 69 160" stroke="#0f172a" stroke-width="1.5"/>
    <text x="55" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a" text-anchor="end">h = 4 cm</text>
    
    <!-- Breadth on right slant -->
    <text x="325" y="75" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">b = 4 cm</text>
    
    <!-- Info badge -->
    <rect x="360" y="70" width="125" height="75" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="422" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Volume = 64 cm³</text>
    <text x="422" y="110" font-family="system-ui, sans-serif" font-size="10.5" fill="#64748b" text-anchor="middle">Side a = ∛64 = 4 cm</text>
    <text x="422" y="130" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#059669" text-anchor="middle">TSA = 160 cm²</text>
  </svg>
</div>\`;

// 19. Ch 9 Q2: Broken Tree Model
const svgCh9Q2_BrokenTree = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 9.1: Mathematical Model of Broken Tree with Bent Top Touching Ground at 30°</div>
  <svg viewBox="0 0 480 230" width="100%" height="230" xmlns="http://www.w3.org/2000/svg">
    <!-- Ground line -->
    <line x1="40" y1="190" x2="440" y2="190" stroke="#334155" stroke-width="2.5"/>
    
    <!-- Standing Trunk AB from B(320, 190) to A(320, 110) -->
    <line x1="320" y1="190" x2="320" y2="110" stroke="#78350f" stroke-width="5"/>
    
    <!-- Ghost Original Unbroken Tree A to A' -->
    <line x1="320" y1="110" x2="320" y2="30" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
    <circle cx="320" cy="30" r="4" fill="#94a3b8"/>
    <text x="330" y="32" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">A' (Original Top)</text>
    <text x="330" y="70" font-family="system-ui, sans-serif" font-size="10.5" fill="#94a3b8" font-style="italic">Unbroken portion</text>
    
    <!-- Bent Broken Trunk AC: from A(320, 110) down to C(120, 190) -->
    <line x1="320" y1="110" x2="120" y2="190" stroke="#b45309" stroke-width="4"/>
    
    <!-- Right angle at B -->
    <rect x="305" y="175" width="15" height="15" fill="none" stroke="#334155" stroke-width="1.5"/>
    
    <!-- Vertices -->
    <circle cx="320" cy="190" r="4" fill="#1e293b"/><text x="332" y="195" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b">B (Foot)</text>
    <circle cx="320" cy="110" r="5" fill="#dc2626"/><text x="332" y="115" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#dc2626">A (Break Point)</text>
    <circle cx="120" cy="190" r="5" fill="#2563eb"/><text x="110" y="210" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#2563eb">C (Top Touches Ground)</text>
    
    <!-- Angle 30° at C -->
    <path d="M 160 190 A 40 40 0 0 0 152 177" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="168" y="182" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#2563eb">30°</text>
    
    <!-- Labels -->
    <text x="200" y="135" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#b45309" transform="rotate(-21.8, 200, 135)">Broken Part AC = 16/√3 m</text>
    <text x="330" y="155" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#78350f">AB = 8/√3 m</text>
    <text x="220" y="210" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">Ground Distance BC = 8 m</text>
    
    <!-- Result box -->
    <rect x="20" y="30" width="170" height="52" rx="6" fill="#f0fdf4" stroke="#86efac"/>
    <text x="105" y="50" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">Total Height = AB + AC</text>
    <text x="105" y="70" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#15803d" text-anchor="middle">= 8√3 m (≈ 13.86 m)</text>
  </svg>
</div>\`;

// 20. Ch 10 Thm 1: Radius Perpendicular to Tangent
const svgCh10Thm1 = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Theorem 10.1: Tangent XY is Perpendicular to Radius OP at Point of Contact P</div>
  <svg viewBox="0 0 460 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
    <!-- Circle: centre (210, 95), radius 65 -->
    <circle cx="210" cy="95" r="65" fill="#f8fafc" stroke="#2563eb" stroke-width="2.5"/>
    
    <!-- Tangent line XY along bottom touching at (210, 160) -->
    <line x1="50" y1="160" x2="410" y2="160" stroke="#0f172a" stroke-width="2.5"/>
    <text x="50" y="152" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a">X</text>
    <text x="405" y="152" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a">Y</text>
    
    <!-- Radius OP: (210, 95) to (210, 160) -->
    <line x1="210" y1="95" x2="210" y2="160" stroke="#dc2626" stroke-width="3"/>
    
    <!-- Right angle square at P -->
    <rect x="210" y="145" width="15" height="15" fill="none" stroke="#dc2626" stroke-width="1.8"/>
    
    <!-- Point Q on XY: (330, 160) -->
    <!-- Line OQ from (210, 95) to (330, 160) -->
    <line x1="210" y1="95" x2="330" y2="160" stroke="#64748b" stroke-width="1.8" stroke-dasharray="4,3"/>
    
    <!-- Intersection R of OQ with circle: (267, 126) approx -->
    <circle cx="267" cy="126" r="4" fill="#059669"/>
    <text x="278" y="125" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#059669">R</text>
    
    <!-- Vertices -->
    <circle cx="210" cy="95" r="4.5" fill="#2563eb"/><text x="210" y="82" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#2563eb" text-anchor="middle">O (Centre)</text>
    <circle cx="210" cy="160" r="5" fill="#dc2626"/><text x="210" y="182" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#dc2626" text-anchor="middle">P (Point of Contact)</text>
    <circle cx="330" cy="160" r="4.5" fill="#0f172a"/><text x="330" y="182" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a" text-anchor="middle">Q (External Point on XY)</text>
    
    <!-- Deductive note box -->
    <rect x="280" y="20" width="165" height="65" rx="6" fill="#fef2f2" stroke="#fecaca"/>
    <text x="362" y="38" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#b91c1c" text-anchor="middle">OQ = OR + RQ &gt; OR</text>
    <text x="362" y="55" font-family="system-ui, sans-serif" font-size="10.5" fill="#7f1d1d" text-anchor="middle">Since OR = OP (radii),</text>
    <text x="362" y="73" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#b91c1c" text-anchor="middle">OQ &gt; OP  ⟹  OP ⊥ XY</text>
  </svg>
</div>\`;

// 21. Ch 10 Q12: Triangle Circumscribing Incircle
const svgCh10Q12 = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 10.3: Triangle ABC Circumscribing Incircle of Radius 4 cm (CD = 6 cm, BD = 8 cm)</div>
  <svg viewBox="0 0 480 260" width="100%" height="260" xmlns="http://www.w3.org/2000/svg">
    <!-- Incircle: centre O(230, 155), radius r = 45 -->
    <circle cx="230" cy="155" r="45" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
    
    <!-- Triangle ABC: A(190, 25), B(90, 200), C(370, 200) -->
    <polygon points="190,25 90,200 370,200" fill="none" stroke="#1e293b" stroke-width="2.5"/>
    
    <!-- Points of contact: D on BC (230, 200), E on AC (290, 102), F on AB (144, 105) -->
    <!-- Radii to contact points -->
    <line x1="230" y1="155" x2="230" y2="200" stroke="#dc2626" stroke-width="2"/>
    <line x1="230" y1="155" x2="290" y2="102" stroke="#dc2626" stroke-width="1.8"/>
    <line x1="230" y1="155" x2="144" y2="105" stroke="#dc2626" stroke-width="1.8"/>
    
    <!-- Construction lines to vertices from O -->
    <line x1="230" y1="155" x2="190" y2="25" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
    <line x1="230" y1="155" x2="90" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
    <line x1="230" y1="155" x2="370" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
    
    <!-- Contact Points -->
    <circle cx="230" cy="200" r="4" fill="#dc2626"/><text x="230" y="218" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">D</text>
    <circle cx="290" cy="102" r="4" fill="#dc2626"/><text x="304" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#dc2626">E</text>
    <circle cx="144" cy="105" r="4" fill="#dc2626"/><text x="130" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#dc2626">F</text>
    
    <!-- Center O -->
    <circle cx="230" cy="155" r="4" fill="#0284c7"/><text x="242" y="152" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0284c7">O</text>
    <text x="215" y="180" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">r = 4</text>
    
    <!-- Vertices -->
    <circle cx="190" cy="25" r="4.5" fill="#1e293b"/><text x="190" y="15" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b" text-anchor="middle">A</text>
    <circle cx="90" cy="200" r="4.5" fill="#1e293b"/><text x="75" y="210" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b">B</text>
    <circle cx="370" cy="200" r="4.5" fill="#1e293b"/><text x="382" y="210" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b">C</text>
    
    <!-- Segment dimensions -->
    <text x="160" y="218" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#059669" text-anchor="middle">BD = 8 cm</text>
    <text x="300" y="218" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#059669" text-anchor="middle">CD = 6 cm</text>
    <text x="100" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#059669">BF = 8</text>
    <text x="340" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#059669">CE = 6</text>
    <text x="155" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#2563eb">AF = x</text>
    <text x="245" y="55" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#2563eb">AE = x</text>
    
    <!-- Solution Summary Box -->
    <rect x="10" y="20" width="130" height="50" rx="6" fill="#f0fdf4" stroke="#86efac"/>
    <text x="75" y="38" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">x = 7 cm</text>
    <text x="75" y="56" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d" text-anchor="middle">AB = 15, AC = 13</text>
  </svg>
</div>\`;

// 22. Ch 10 Q14: Tangents TP and TQ Subtending Angles
const svgCh10Q14 = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 10.4: Tangents TP and TQ from Point T (∠POQ = 110° ⟹ ∠PTQ = 70°)</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Circle: centre (150, 105), radius 60 -->
    <circle cx="150" cy="105" r="60" fill="#f8fafc" stroke="#2563eb" stroke-width="2.5"/>
    
    <!-- External Point T(370, 105) -->
    <!-- Tangent contact points: P(185, 56), Q(185, 154) -->
    <line x1="370" y1="105" x2="185" y2="56" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="370" y1="105" x2="185" y2="154" stroke="#0f172a" stroke-width="2.5"/>
    
    <!-- Radii OP and OQ -->
    <line x1="150" y1="105" x2="185" y2="56" stroke="#dc2626" stroke-width="2"/>
    <line x1="150" y1="105" x2="185" y2="154" stroke="#dc2626" stroke-width="2"/>
    
    <!-- Line OT (Centre to external point) -->
    <line x1="150" y1="105" x2="370" y2="105" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
    
    <!-- 90° right angle markers at P and Q -->
    <path d="M 197 59 L 193 72 L 181 69" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    <path d="M 181 141 L 193 138 L 197 151" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    
    <!-- Angle arcs -->
    <!-- ∠POQ = 110° -->
    <path d="M 166 82 A 25 25 0 0 1 166 128" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="180" y="110" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#2563eb">110°</text>
    
    <!-- ∠PTQ = 70° -->
    <path d="M 340 97 A 30 30 0 0 1 340 113" fill="none" stroke="#059669" stroke-width="2"/>
    <text x="305" y="110" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#059669">70°</text>
    
    <!-- Vertices -->
    <circle cx="150" cy="105" r="4" fill="#2563eb"/><text x="135" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#2563eb">O</text>
    <circle cx="185" cy="56" r="4" fill="#dc2626"/><text x="185" y="44" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#dc2626" text-anchor="middle">P</text>
    <circle cx="185" cy="154" r="4" fill="#dc2626"/><text x="185" y="172" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#dc2626" text-anchor="middle">Q</text>
    <circle cx="370" cy="105" r="5" fill="#0f172a"/><text x="385" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a">T</text>
    
    <!-- Supplementary explanation -->
    <text x="260" y="195" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">∠PTQ + ∠POQ = 180° (Supplementary angles in quadrilateral OPTQ)</text>
  </svg>
</div>\`;

// 23. Ch 6 Q13: Triangle TQR with Transversal PS
const svgCh6Q13 = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 6.3: Triangle TQR with QR/QS = QT/PR and ∠1 = ∠2 (NCERT Ex 6.3 Q4)</div>
  <svg viewBox="0 0 480 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
    <!-- Triangle TQR: T(200, 30), Q(70, 190), R(410, 190) -->
    <polygon points="200,30 70,190 410,190" fill="#f8fafc" stroke="#1e293b" stroke-width="2.5"/>
    
    <!-- Points P on QT: P(145, 98), S on QR: S(220, 190) -->
    <!-- Line PS -->
    <line x1="145" y1="98" x2="220" y2="190" stroke="#2563eb" stroke-width="2.5"/>
    
    <!-- Line PR -->
    <line x1="145" y1="98" x2="410" y2="190" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
    
    <!-- Points -->
    <circle cx="200" cy="30" r="4.5" fill="#1e293b"/><text x="200" y="18" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b" text-anchor="middle">T</text>
    <circle cx="70" cy="190" r="4.5" fill="#1e293b"/><text x="55" y="195" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b">Q</text>
    <circle cx="410" cy="190" r="4.5" fill="#1e293b"/><text x="420" y="195" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b">R</text>
    <circle cx="145" cy="98" r="4.5" fill="#2563eb"/><text x="125" y="98" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#2563eb">P</text>
    <circle cx="220" cy="190" r="4.5" fill="#2563eb"/><text x="220" y="210" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#2563eb" text-anchor="middle">S</text>
    
    <!-- Angle 1 at Q and Angle 2 at R (inside triangle PQR) -->
    <path d="M 100 190 A 30 30 0 0 0 92 165" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="105" y="175" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#2563eb">∠1</text>
    
    <path d="M 375 190 A 35 35 0 0 1 378 178" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="358" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626">∠2</text>
    
    <!-- Deductive box -->
    <rect x="270" y="30" width="180" height="50" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="360" y="50" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">In ΔPQR: ∠1 = ∠2 ⟹ PR = PQ</text>
    <text x="360" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e40af" text-anchor="middle">QR/QS = QT/QP ⟹ ΔPQS ~ ΔTQR</text>
  </svg>
</div>\`;

// 24. Ch 6 Q18: Converse BPT with Interior Point O
const svgCh6Q18 = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 6.4: ΔPQR with Point O (DE ∥ OQ, DF ∥ OR ⟹ EF ∥ QR)</div>
  <svg viewBox="0 0 480 230" width="100%" height="230" xmlns="http://www.w3.org/2000/svg">
    <!-- Triangle PQR: P(240, 20), Q(70, 200), R(410, 200) -->
    <polygon points="240,20 70,200 410,200" fill="#f8fafc" stroke="#1e293b" stroke-width="2.5"/>
    
    <!-- Interior Point O(240, 130) -->
    <!-- Radiating Lines OP, OQ, OR -->
    <line x1="240" y1="20" x2="240" y2="130" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="240" y1="130" x2="70" y2="200" stroke="#94a3b8" stroke-width="1.8"/>
    <line x1="240" y1="130" x2="410" y2="200" stroke="#94a3b8" stroke-width="1.8"/>
    
    <!-- Points D on OP(240, 80), E on OQ(155, 165), F on OR(325, 165) -->
    <!-- Segments DE, DF, EF -->
    <line x1="240" y1="80" x2="155" y2="165" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="240" y1="80" x2="325" y2="165" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="155" y1="165" x2="325" y2="165" stroke="#059669" stroke-width="2.5"/>
    
    <!-- Vertices -->
    <circle cx="240" cy="20" r="4.5" fill="#1e293b"/><text x="240" y="12" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b" text-anchor="middle">P</text>
    <circle cx="70" cy="200" r="4.5" fill="#1e293b"/><text x="55" y="205" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b">Q</text>
    <circle cx="410" cy="200" r="4.5" fill="#1e293b"/><text x="420" y="205" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b">R</text>
    <circle cx="240" cy="130" r="4.5" fill="#0f172a"/><text x="252" y="132" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a">O</text>
    
    <!-- Points D, E, F -->
    <circle cx="240" cy="80" r="4" fill="#2563eb"/><text x="252" y="78" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#2563eb">D</text>
    <circle cx="155" cy="165" r="4" fill="#2563eb"/><text x="140" y="165" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#2563eb">E</text>
    <circle cx="325" cy="165" r="4" fill="#2563eb"/><text x="338" y="165" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#2563eb">F</text>
    
    <text x="240" y="180" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#059669" text-anchor="middle">EF ∥ QR (Converse BPT)</text>
  </svg>
</div>\`;

// 25. Ch 6 Q23: Triangle ABC with Congruent ΔABE ≅ ΔACD
const svgCh6Q23 = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 6.5: ΔABC with Congruent ΔABE ≅ ΔACD Proving ΔADE ~ ΔABC</div>
  <svg viewBox="0 0 460 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
    <!-- Triangle ABC: A(230, 25), B(80, 195), C(380, 195) -->
    <polygon points="230,25 80,195 380,195" fill="#f8fafc" stroke="#1e293b" stroke-width="2.5"/>
    
    <!-- Points D on AB(155, 110), E on AC(305, 110) -->
    <!-- Segment DE -->
    <line x1="155" y1="110" x2="305" y2="110" stroke="#059669" stroke-width="2.5"/>
    <!-- Chords BE and CD -->
    <line x1="80" y1="195" x2="305" y2="110" stroke="#2563eb" stroke-width="1.8"/>
    <line x1="380" y1="195" x2="155" y2="110" stroke="#dc2626" stroke-width="1.8"/>
    
    <!-- Vertices -->
    <circle cx="230" cy="25" r="4.5" fill="#1e293b"/><text x="230" y="15" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b" text-anchor="middle">A</text>
    <circle cx="80" cy="195" r="4.5" fill="#1e293b"/><text x="65" y="200" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b">B</text>
    <circle cx="380" cy="195" r="4.5" fill="#1e293b"/><text x="390" y="200" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b">C</text>
    <circle cx="155" cy="110" r="4" fill="#059669"/><text x="135" y="112" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#059669">D</text>
    <circle cx="305" cy="110" r="4" fill="#059669"/><text x="318" y="112" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#059669">E</text>
    
    <!-- Info badge -->
    <rect x="15" y="25" width="135" height="48" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="82" y="44" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1d4ed8" text-anchor="middle">ΔABE ≅ ΔACD</text>
    <text x="82" y="62" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#1e40af" text-anchor="middle">⟹ AD/AB = AE/AC</text>
  </svg>
</div>\`;

// 26. Ch 6 Q27: Isosceles Triangle with Altitudes AD and EF
const svgCh6Q27 = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 6.6: Isosceles ΔABC (AB = AC) with AD ⊥ BC and EF ⊥ AC (ΔABD ~ ΔECF)</div>
  <svg viewBox="0 0 480 230" width="100%" height="230" xmlns="http://www.w3.org/2000/svg">
    <!-- Extended ground line: from E(40, 190) through B(140, 190) to C(340, 190) -->
    <line x1="40" y1="190" x2="360" y2="190" stroke="#64748b" stroke-width="2"/>
    
    <!-- Triangle ABC: A(240, 45), B(140, 190), C(340, 190) -->
    <polygon points="240,45 140,190 340,190" fill="#f8fafc" stroke="#1e293b" stroke-width="2.5"/>
    
    <!-- Altitude AD: A(240, 45) to D(240, 190) -->
    <line x1="240" y1="45" x2="240" y2="190" stroke="#dc2626" stroke-width="2.5"/>
    <rect x="225" y="175" width="15" height="15" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    
    <!-- Produced line EB dashed -->
    <line x1="40" y1="190" x2="140" y2="190" stroke="#2563eb" stroke-width="2.5"/>
    
    <!-- Perpendicular EF: E(40, 190) to F(280, 102) on AC -->
    <line x1="40" y1="190" x2="280" y2="102" stroke="#2563eb" stroke-width="2"/>
    <!-- Right angle at F -->
    <path d="M 271 106 L 275 97 L 284 101" fill="none" stroke="#2563eb" stroke-width="1.5"/>
    
    <!-- Vertices -->
    <circle cx="240" cy="45" r="4.5" fill="#1e293b"/><text x="240" y="32" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b" text-anchor="middle">A</text>
    <circle cx="140" cy="190" r="4.5" fill="#1e293b"/><text x="135" y="210" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b">B</text>
    <circle cx="340" cy="190" r="4.5" fill="#1e293b"/><text x="345" y="210" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b">C</text>
    <circle cx="240" cy="190" r="4.5" fill="#dc2626"/><text x="240" y="210" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#dc2626" text-anchor="middle">D</text>
    <circle cx="40" cy="190" r="5" fill="#2563eb"/><text x="30" y="210" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#2563eb">E</text>
    <circle cx="280" cy="102" r="4.5" fill="#2563eb"/><text x="292" y="98" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#2563eb">F</text>
    
    <text x="175" y="115" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#475569">AB = AC</text>
  </svg>
</div>\`;

// 27. Ch 11 Q2: Quadrant of Circle
const svgCh11Q2_Quadrant = \`<div class="math-diagram-wrap" style="\${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 11.2: One Quadrant (θ = 90°) of Circle with Circumference 22 cm</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Full Circle dashed: centre (180, 105), radius 70 -->
    <circle cx="180" cy="105" r="70" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,3"/>
    
    <!-- Quadrant sector: top-right (0° to 90°) -->
    <path d="M 180 105 L 250 105 A 70 70 0 0 0 180 35 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
    
    <!-- Centre O & radii -->
    <line x1="180" y1="105" x2="250" y2="105" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="180" y1="105" x2="180" y2="35" stroke="#2563eb" stroke-width="2.5"/>
    <rect x="180" y="90" width="15" height="15" fill="none" stroke="#2563eb" stroke-width="1.5"/>
    
    <circle cx="180" cy="105" r="4.5" fill="#1e3a8a"/><text x="165" y="122" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e3a8a">O</text>
    <text x="215" y="122" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#2563eb">r = 3.5 cm</text>
    <text x="215" y="75" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e40af">Quadrant</text>
    
    <!-- Summary info box -->
    <rect x="290" y="45" width="155" height="110" rx="8" fill="#f0fdf4" stroke="#86efac"/>
    <text x="367" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">Circumference C = 22 cm</text>
    <text x="367" y="90" font-family="system-ui, sans-serif" font-size="10.5" fill="#15803d" text-anchor="middle">2πr = 22  ⟹  r = 3.5 cm</text>
    <text x="367" y="112" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">Area = 1/4 πr²</text>
    <text x="367" y="132" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#15803d" text-anchor="middle">= 77/8 = 9.625 cm²</text>
  </svg>
</div>\`;
`;

let currentDef = fs.readFileSync('scripts/c10m-svg-definitions.js', 'utf8');

// Replace the module.exports at the end
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
  // Additional
  svgCh12Q1_Cubes,
  svgCh9Q2_BrokenTree,
  svgCh10Thm1,
  svgCh10Q12,
  svgCh10Q14,
  svgCh6Q13,
  svgCh6Q18,
  svgCh6Q23,
  svgCh6Q27,
  svgCh11Q2_Quadrant
};
`;

const updatedContent = beforeExport + additionalSVGs + newExports;
fs.writeFileSync('scripts/c10m-svg-definitions.js', updatedContent, 'utf8');
console.log('Successfully updated scripts/c10m-svg-definitions.js with all 27 SVG diagrams!');
