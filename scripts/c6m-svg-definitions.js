/**
 * High-quality, responsive SVG diagrams for NCERT Class 6 Mathematics solutions.
 * All diagrams use clean vector math, modern color palettes, and clear pedagogical labels.
 */

const svgStyleWrap = 'margin: 16px auto; text-align: center; max-width: 600px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.04);';

// 1. Classic Ch 4 Q1: Line BD with points B, O, E, D and ray OC (NCERT Fig 4.1)
const svgClassicCh4Q1 = `<div class="math-diagram-wrap" style="${svgStyleWrap}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 4.1: Line BD with Points and Rays</div>
  <svg viewBox="0 0 540 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowB" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 8 5 L 0 9 z" fill="#2563eb"/>
      </marker>
      <marker id="arrowR" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 8 5 L 0 9 z" fill="#dc2626"/>
      </marker>
      <marker id="arrowG" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 8 5 L 0 9 z" fill="#059669"/>
      </marker>
    </defs>
    <!-- Main line BD extending both ways -->
    <line x1="40" y1="110" x2="500" y2="110" stroke="#2563eb" stroke-width="3" marker-start="url(#arrowB)" marker-end="url(#arrowB)"/>
    
    <!-- Ray OC branching upwards from point O (center) -->
    <line x1="270" y1="110" x2="380" y2="25" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrowR)"/>
    
    <!-- Points on line BD: D, E, O, B -->
    <!-- Point D -->
    <circle cx="100" cy="110" r="5" fill="#1e3a8a"/>
    <text x="100" y="135" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e3a8a" text-anchor="middle">D</text>
    
    <!-- Point E -->
    <circle cx="180" cy="110" r="5" fill="#1e3a8a"/>
    <text x="180" y="135" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e3a8a" text-anchor="middle">E</text>
    
    <!-- Point O (Intersection) -->
    <circle cx="270" cy="110" r="6" fill="#0f172a"/>
    <text x="270" y="135" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#0f172a" text-anchor="middle">O</text>
    
    <!-- Point B -->
    <circle cx="440" cy="110" r="5" fill="#1e3a8a"/>
    <text x="440" y="135" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e3a8a" text-anchor="middle">B</text>
    
    <!-- Point C on Ray OC -->
    <circle cx="350" cy="48" r="5" fill="#b91c1c"/>
    <text x="365" y="45" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#b91c1c">C</text>
    
    <!-- Caption badge -->
    <rect x="150" y="152" width="240" height="22" rx="4" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="270" y="167" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1d4ed8" text-anchor="middle">Line ↔BD with Points D, E, O, B &amp; Ray →OC</text>
  </svg>
</div>`;

// 2. Classic Ch 4 Q3: Circle with Center O, Diameter AC, Radius OB, Chord ED, Points P, Q
const svgClassicCh4Q3 = `<div class="math-diagram-wrap" style="${svgStyleWrap}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 4.2: Circle Anatomy — Radii, Diameter, Chord, Sector &amp; Segment</div>
  <svg viewBox="0 0 520 280" width="100%" height="280" xmlns="http://www.w3.org/2000/svg">
    <!-- Circle Boundary -->
    <circle cx="230" cy="140" r="110" fill="#f8fafc" stroke="#2563eb" stroke-width="2.5"/>
    
    <!-- Shaded Sector OAB (Angle ~ 60 deg) -->
    <!-- Arc from A(120, 140) to B(285, 45) -->
    <path d="M 230 140 L 120 140 A 110 110 0 0 1 285 45 Z" fill="#bfdbfe" fill-opacity="0.6" stroke="#1d4ed8" stroke-width="1.5"/>
    <text x="210" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e40af">Sector OAB</text>
    
    <!-- Shaded Minor Segment between Chord ED and Arc ED -->
    <!-- Point E(290, 225) and D(170, 225) -->
    <path d="M 170 225 A 110 110 0 0 0 290 225 Z" fill="#fde68a" fill-opacity="0.8" stroke="#d97706" stroke-width="2"/>
    <line x1="170" y1="225" x2="290" y2="225" stroke="#d97706" stroke-width="2.5"/>
    <text x="230" y="245" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e" text-anchor="middle">Segment ED</text>
    
    <!-- Diameter AC through O -->
    <line x1="120" y1="140" x2="340" y2="140" stroke="#059669" stroke-width="2.5" stroke-dasharray="4,2"/>
    <text x="330" y="130" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#047857">Diameter AC</text>
    
    <!-- Radius OB -->
    <line x1="230" y1="140" x2="285" y2="45" stroke="#2563eb" stroke-width="2.5"/>
    <text x="248" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1d4ed8">Radius OB</text>
    
    <!-- Center O -->
    <circle cx="230" cy="140" r="5" fill="#0f172a"/>
    <text x="230" y="160" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a" text-anchor="middle">O</text>
    
    <!-- Points A, B, C, D, E -->
    <circle cx="120" cy="140" r="4" fill="#059669"/><text x="105" y="145" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#059669">A</text>
    <circle cx="285" cy="45" r="4" fill="#2563eb"/><text x="295" y="42" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#2563eb">B</text>
    <circle cx="340" cy="140" r="4" fill="#059669"/><text x="350" y="145" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#059669">C</text>
    <circle cx="170" cy="225" r="4" fill="#d97706"/><text x="155" y="235" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#d97706">E</text>
    <circle cx="290" cy="225" r="4" fill="#d97706"/><text x="302" y="235" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#d97706">D</text>
    
    <!-- Interior Point P -->
    <circle cx="190" cy="175" r="4" fill="#7c3aed"/>
    <text x="180" y="178" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#7c3aed">P (interior)</text>
    
    <!-- Exterior Point Q -->
    <circle cx="390" cy="80" r="4" fill="#dc2626"/>
    <text x="402" y="85" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#dc2626">Q (exterior)</text>
    
    <!-- Legend box -->
    <rect x="365" y="170" width="145" height="95" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="375" y="190" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">Legend:</text>
    <text x="375" y="208" font-family="system-ui, sans-serif" font-size="10" fill="#1e40af">• Radii: OA, OB, OC</text>
    <text x="375" y="224" font-family="system-ui, sans-serif" font-size="10" fill="#047857">• Diameter: AC</text>
    <text x="375" y="240" font-family="system-ui, sans-serif" font-size="10" fill="#b45309">• Chord: ED</text>
    <text x="375" y="256" font-family="system-ui, sans-serif" font-size="10" fill="#7c3aed">• Interior: O, P | Ext: Q</text>
  </svg>
</div>`;

// 3. Classic Ch 4 Q2: Quadrilateral ABCD
const svgClassicCh4Q2 = `<div class="math-diagram-wrap" style="${svgStyleWrap}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Rough Sketch: Quadrilateral ABCD with Diagonals</div>
  <svg viewBox="0 0 460 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
    <!-- Quadrilateral Polygon -->
    <polygon points="80,170 340,170 390,60 140,40" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
    
    <!-- Diagonals AC and BD -->
    <line x1="80" y1="170" x2="390" y2="60" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5,4"/>
    <line x1="340" y1="170" x2="140" y2="40" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="5,4"/>
    
    <!-- Vertices -->
    <circle cx="80" cy="170" r="5" fill="#1e3a8a"/><text x="65" y="185" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#1e3a8a">A</text>
    <circle cx="340" cy="170" r="5" fill="#1e3a8a"/><text x="350" y="185" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#1e3a8a">B</text>
    <circle cx="390" cy="60" r="5" fill="#1e3a8a"/><text x="405" y="65" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#1e3a8a">C</text>
    <circle cx="140" cy="40" r="5" fill="#1e3a8a"/><text x="130" y="30" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#1e3a8a">D</text>
    
    <!-- Side labels -->
    <text x="210" y="190" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#3b82f6" text-anchor="middle">Side AB</text>
    <text x="380" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#3b82f6">Side BC</text>
    <text x="260" y="42" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#3b82f6" text-anchor="middle">Side CD</text>
    <text x="90" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#3b82f6">Side DA</text>
    
    <!-- Opposite angle indicators -->
    <path d="M 100 170 A 20 20 0 0 0 90 150" fill="none" stroke="#dc2626" stroke-width="2"/>
    <path d="M 370 60 A 20 20 0 0 0 375 75" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="235" y="120" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle">Diagonals AC &amp; BD</text>
  </svg>
</div>`;

// 4. Ganita Prakash Ch 4 Q4: Figure 4.1 Bar Graph of Subject Marks
const svgCh4Q4 = `<div class="math-diagram-wrap" style="${svgStyleWrap}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 6px;">Figure 4.1: Examination Marks Obtained by a Student</div>
  <svg viewBox="0 0 540 260" width="100%" height="260" xmlns="http://www.w3.org/2000/svg">
    <!-- Gridlines & Y-axis labels (Scale: 1 unit = 10 marks, height 20px per 10 marks) -->
    <!-- Base y = 210 (0 marks), Top y = 30 (90 marks) -->
    <line x1="70" y1="210" x2="510" y2="210" stroke="#334155" stroke-width="2"/>
    <line x1="70" y1="20" x2="70" y2="210" stroke="#334155" stroke-width="2"/>
    <text x="25" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 25 115)" text-anchor="middle">Marks Obtained</text>
    
    <!-- Y Marks: 0, 20, 40, 60, 80 -->
    <line x1="65" y1="210" x2="510" y2="210" stroke="#e2e8f0" stroke-width="1"/><text x="60" y="214" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="end">0</text>
    <line x1="65" y1="170" x2="510" y2="170" stroke="#e2e8f0" stroke-width="1"/><text x="60" y="174" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="end">20</text>
    <line x1="65" y1="130" x2="510" y2="130" stroke="#e2e8f0" stroke-width="1"/><text x="60" y="134" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="end">40</text>
    <line x1="65" y1="90" x2="510" y2="90" stroke="#e2e8f0" stroke-width="1"/><text x="60" y="94" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="end">60</text>
    <line x1="65" y1="50" x2="510" y2="50" stroke="#e2e8f0" stroke-width="1"/><text x="60" y="54" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="end">80</text>
    
    <!-- Bars: Width = 48px, Gap = 36px -->
    <!-- 1. Hindi: 45 marks -> Height = 45 * 2 = 90px -> y = 210 - 90 = 120 -->
    <rect x="95" y="120" width="50" height="90" rx="4" fill="#f59e0b"/>
    <text x="120" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#b45309" text-anchor="middle">45</text>
    <text x="120" y="230" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155" text-anchor="middle">Hindi</text>
    
    <!-- 2. English: 60 marks -> Height = 120px -> y = 210 - 120 = 90 -->
    <rect x="180" y="90" width="50" height="120" rx="4" fill="#3b82f6"/>
    <text x="205" y="82" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1d4ed8" text-anchor="middle">60</text>
    <text x="205" y="230" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155" text-anchor="middle">English</text>
    
    <!-- 3. Mathematics: 75 marks (MAX) -> Height = 150px -> y = 210 - 150 = 60 -->
    <rect x="265" y="60" width="50" height="150" rx="4" fill="#10b981"/>
    <text x="290" y="52" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#047857" text-anchor="middle">75 ⭐</text>
    <text x="290" y="230" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155" text-anchor="middle">Maths</text>
    
    <!-- 4. Science: 65 marks -> Height = 130px -> y = 210 - 130 = 80 -->
    <rect x="350" y="80" width="50" height="130" rx="4" fill="#8b5cf6"/>
    <text x="375" y="72" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#6d28d9" text-anchor="middle">65</text>
    <text x="375" y="230" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155" text-anchor="middle">Science</text>
    
    <!-- 5. Social Studies: 50 marks -> Height = 100px -> y = 210 - 100 = 110 -->
    <rect x="435" y="110" width="50" height="100" rx="4" fill="#ec4899"/>
    <text x="460" y="102" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#be185d" text-anchor="middle">50</text>
    <text x="460" y="230" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155" text-anchor="middle">Soc. Studies</text>
    
    <!-- X-axis Label -->
    <text x="290" y="252" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">School Subjects (1 cm = 10 marks)</text>
  </svg>
</div>`;

// 5. Ganita Prakash Ch 7 Q1: Fractions of Shaded Portions (Circle 3/8, Rectangle 5/6, Triangle 1/4)
const svgCh7Q1 = `<div class="math-diagram-wrap" style="${svgStyleWrap}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Visual Representations: Shaded Fractions</div>
  <svg viewBox="0 0 520 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
    <!-- Figure (a): Circle divided into 8 sectors, 3 shaded (3/8) -->
    <g transform="translate(80, 75)">
      <circle cx="0" cy="0" r="55" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
      <!-- Sectors 1, 2, 3 shaded (each 45 deg) -->
      <!-- 0 to 45 deg -->
      <path d="M 0 0 L 55 0 A 55 55 0 0 1 38.89 38.89 Z" fill="#3b82f6"/>
      <!-- 45 to 90 deg -->
      <path d="M 0 0 L 38.89 38.89 A 55 55 0 0 1 0 55 Z" fill="#2563eb"/>
      <!-- 90 to 135 deg -->
      <path d="M 0 0 L 0 55 A 55 55 0 0 1 -38.89 38.89 Z" fill="#1d4ed8"/>
      <!-- Dividing radii -->
      <line x1="-55" y1="0" x2="55" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="0" y1="-55" x2="0" y2="55" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="-38.89" y1="-38.89" x2="38.89" y2="38.89" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="-38.89" y1="38.89" x2="38.89" y2="-38.89" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="0" y="75" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e3a8a" text-anchor="middle">(a) 3 / 8 Shaded</text>
    </g>

    <!-- Figure (b): Rectangle 6 equal parts, 5 shaded (5/6) -->
    <g transform="translate(200, 30)">
      <rect x="0" y="0" width="150" height="90" fill="#f8fafc" stroke="#059669" stroke-width="2"/>
      <!-- 6 equal cells: 3 cols x 2 rows (each 50 x 45) -->
      <rect x="0" y="0" width="50" height="45" fill="#10b981" stroke="#059669" stroke-width="1.5"/>
      <rect x="50" y="0" width="50" height="45" fill="#10b981" stroke="#059669" stroke-width="1.5"/>
      <rect x="100" y="0" width="50" height="45" fill="#10b981" stroke="#059669" stroke-width="1.5"/>
      <rect x="0" y="45" width="50" height="45" fill="#10b981" stroke="#059669" stroke-width="1.5"/>
      <rect x="50" y="45" width="50" height="45" fill="#10b981" stroke="#059669" stroke-width="1.5"/>
      <!-- 6th cell unshaded -->
      <rect x="100" y="45" width="50" height="45" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>
      <text x="75" y="120" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#065f46" text-anchor="middle">(b) 5 / 6 Shaded</text>
    </g>

    <!-- Figure (c): Equilateral triangle, 1 of 4 shaded (1/4) -->
    <g transform="translate(420, 25)">
      <!-- Outer Triangle (top 50,0, left 0,95, right 100,95) -->
      <polygon points="50,0 0,95 100,95" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
      <!-- Inner shaded center triangle (midpoints: 25,47.5, 75,47.5, 50,95) -->
      <polygon points="25,47.5 75,47.5 50,95" fill="#f59e0b" stroke="#d97706" stroke-width="1.5"/>
      <text x="50" y="125" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#92400e" text-anchor="middle">(c) 1 / 4 Shaded</text>
    </g>
  </svg>
</div>`;

// 6. Ganita Prakash Ch 7 Q2: Fractions on a Number Line (2/5, 3/5, 7/5)
const svgCh7Q2 = `<div class="math-diagram-wrap" style="${svgStyleWrap}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Fractions Represented on the Number Line</div>
  <svg viewBox="0 0 540 140" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="numArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 8 5 L 0 9 z" fill="#334155"/>
      </marker>
    </defs>
    <!-- Axis line -->
    <line x1="30" y1="80" x2="510" y2="80" stroke="#334155" stroke-width="2.5" marker-start="url(#numArr)" marker-end="url(#numArr)"/>
    
    <!-- Major Ticks: 0 at x=60, 1 at x=280 (dist=220, so each 1/5 is 44px), 2 at x=500 -->
    <!-- 0 -->
    <line x1="60" y1="68" x2="60" y2="92" stroke="#0f172a" stroke-width="3"/>
    <text x="60" y="112" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a" text-anchor="middle">0</text>
    
    <!-- 1/5 at x=104 -->
    <line x1="104" y1="73" x2="104" y2="87" stroke="#94a3b8" stroke-width="1.5"/><text x="104" y="105" font-family="system-ui, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">1/5</text>
    
    <!-- 2/5 at x=148 (TARGET A) -->
    <line x1="148" y1="70" x2="148" y2="90" stroke="#2563eb" stroke-width="2.5"/>
    <circle cx="148" cy="80" r="5" fill="#2563eb"/>
    <rect x="130" y="30" width="36" height="22" rx="4" fill="#2563eb"/>
    <text x="148" y="45" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">2/5</text>
    <line x1="148" y1="52" x2="148" y2="75" stroke="#2563eb" stroke-width="1.5"/>
    
    <!-- 3/5 at x=192 (TARGET B) -->
    <line x1="192" y1="70" x2="192" y2="90" stroke="#059669" stroke-width="2.5"/>
    <circle cx="192" cy="80" r="5" fill="#059669"/>
    <rect x="174" y="30" width="36" height="22" rx="4" fill="#059669"/>
    <text x="192" y="45" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">3/5</text>
    <line x1="192" y1="52" x2="192" y2="75" stroke="#059669" stroke-width="1.5"/>
    
    <!-- 4/5 at x=236 -->
    <line x1="236" y1="73" x2="236" y2="87" stroke="#94a3b8" stroke-width="1.5"/><text x="236" y="105" font-family="system-ui, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">4/5</text>
    
    <!-- 1 = 5/5 at x=280 -->
    <line x1="280" y1="68" x2="280" y2="92" stroke="#0f172a" stroke-width="3"/>
    <text x="280" y="112" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a" text-anchor="middle">1 (5/5)</text>
    
    <!-- 6/5 at x=324 -->
    <line x1="324" y1="73" x2="324" y2="87" stroke="#94a3b8" stroke-width="1.5"/><text x="324" y="105" font-family="system-ui, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">6/5</text>
    
    <!-- 7/5 at x=368 (TARGET C) -->
    <line x1="368" y1="70" x2="368" y2="90" stroke="#dc2626" stroke-width="2.5"/>
    <circle cx="368" cy="80" r="5" fill="#dc2626"/>
    <rect x="350" y="30" width="36" height="22" rx="4" fill="#dc2626"/>
    <text x="368" y="45" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">7/5</text>
    <line x1="368" y1="52" x2="368" y2="75" stroke="#dc2626" stroke-width="1.5"/>
    
    <!-- 8/5 at x=412 -->
    <line x1="412" y1="73" x2="412" y2="87" stroke="#94a3b8" stroke-width="1.5"/><text x="412" y="105" font-family="system-ui, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">8/5</text>
    
    <!-- 2 = 10/5 at x=500 -->
    <line x1="500" y1="68" x2="500" y2="92" stroke="#0f172a" stroke-width="3"/>
    <text x="500" y="112" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a" text-anchor="middle">2 (10/5)</text>
  </svg>
</div>`;

// 7. Ganita Prakash Ch 10 Q2: Integers on Number Line (+5, -8, -1, +4)
const svgCh10Q2 = `<div class="math-diagram-wrap" style="${svgStyleWrap}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Plotting Integers on the Number Line: -8, -1, +4, +5</div>
  <svg viewBox="0 0 540 130" width="100%" height="130" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="intArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 8 5 L 0 9 z" fill="#334155"/>
      </marker>
    </defs>
    <!-- Axis line from -9 to +6 (center 0 at x=310, step = 26px) -->
    <line x1="20" y1="75" x2="520" y2="75" stroke="#334155" stroke-width="2.5" marker-start="url(#intArr)" marker-end="url(#intArr)"/>
    
    <!-- Origin 0 at x=310 -->
    <line x1="310" y1="65" x2="310" y2="85" stroke="#0f172a" stroke-width="3"/>
    <text x="310" y="105" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">0</text>
    
    <!-- Point -8 at x = 310 - 8*26 = 102 -->
    <circle cx="102" cy="75" r="5" fill="#dc2626"/>
    <rect x="85" y="25" width="34" height="22" rx="4" fill="#dc2626"/>
    <text x="102" y="40" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">-8</text>
    <line x1="102" y1="47" x2="102" y2="70" stroke="#dc2626" stroke-width="1.5"/>
    <text x="102" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">-8</text>
    
    <!-- Point -1 at x = 310 - 1*26 = 284 -->
    <circle cx="284" cy="75" r="5" fill="#f59e0b"/>
    <rect x="267" y="25" width="34" height="22" rx="4" fill="#f59e0b"/>
    <text x="284" y="40" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">-1</text>
    <line x1="284" y1="47" x2="284" y2="70" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="284" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">-1</text>
    
    <!-- Point +4 at x = 310 + 4*26 = 414 -->
    <circle cx="414" cy="75" r="5" fill="#059669"/>
    <rect x="397" y="25" width="34" height="22" rx="4" fill="#059669"/>
    <text x="414" y="40" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">+4</text>
    <line x1="414" y1="47" x2="414" y2="70" stroke="#059669" stroke-width="1.5"/>
    <text x="414" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">+4</text>
    
    <!-- Point +5 at x = 310 + 5*26 = 440 -->
    <circle cx="440" cy="75" r="5" fill="#2563eb"/>
    <rect x="435" y="2" width="34" height="22" rx="4" fill="#2563eb"/>
    <text x="452" y="17" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">+5</text>
    <line x1="452" y1="24" x2="440" y2="70" stroke="#2563eb" stroke-width="1.5"/>
    <text x="440" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">+5</text>
    
    <!-- Intermediate ticks -->
    <line x1="180" y1="70" x2="180" y2="80" stroke="#cbd5e1" stroke-width="1.5"/><text x="180" y="100" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">-5</text>
    <line x1="362" y1="70" x2="362" y2="80" stroke="#cbd5e1" stroke-width="1.5"/><text x="362" y="100" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">+2</text>
  </svg>
</div>`;

// 8. Ganita Prakash Ch 10 Q4: Integer Operations Jumps on Number Line (-1 + 4 = +3)
const svgCh10Q4 = `<div class="math-diagram-wrap" style="${svgStyleWrap}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Integer Addition on Number Line: -1 + 4 = +3</div>
  <svg viewBox="0 0 500 130" width="100%" height="130" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="jumpArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 8 5 L 0 9 z" fill="#059669"/>
      </marker>
    </defs>
    <!-- Axis line from -3 to +5 (step = 45px, 0 at x=200) -->
    <line x1="40" y1="85" x2="460" y2="85" stroke="#334155" stroke-width="2.5"/>
    
    <!-- Ticks: -3(65), -2(110), -1(155), 0(200), 1(245), 2(290), 3(335), 4(380), 5(425) -->
    <circle cx="155" cy="85" r="5" fill="#dc2626"/><text x="155" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#dc2626" text-anchor="middle">Start: -1</text>
    <circle cx="335" cy="85" r="6" fill="#059669"/><text x="335" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#059669" text-anchor="middle">Land: +3</text>
    
    <!-- Intermediate numbers -->
    <text x="65" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">-3</text>
    <text x="110" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">-2</text>
    <text x="200" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">0</text>
    <text x="245" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">+1</text>
    <text x="290" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">+2</text>
    <text x="380" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">+4</text>
    <text x="425" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">+5</text>
    
    <!-- Curved jump from -1 (155) to +3 (335) -->
    <path d="M 155 78 Q 245 15 335 78" fill="none" stroke="#059669" stroke-width="3" stroke-dasharray="6,3" marker-end="url(#jumpArr)"/>
    <rect x="205" y="20" width="80" height="20" rx="4" fill="#dcfce7" stroke="#86efac"/>
    <text x="245" y="34" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d" text-anchor="middle">+4 steps Right</text>
  </svg>
</div>`;

// 9. Practical Geometry Ch 8 Q1 / Classic Ch 14 Q1: Compass Circle with Radius, Diameter, Chord
const svgCh8Q1 = `<div class="math-diagram-wrap" style="${svgStyleWrap}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Compass Construction: Circle (r = 3.5 cm, d = 7 cm, Chord CD)</div>
  <svg viewBox="0 0 460 260" width="100%" height="260" xmlns="http://www.w3.org/2000/svg">
    <!-- Circle r = 90px (represents 3.5 cm) -->
    <circle cx="230" cy="130" r="90" fill="#f8fafc" stroke="#2563eb" stroke-width="2.5"/>
    
    <!-- Diameter AB through center O -->
    <line x1="140" y1="130" x2="320" y2="130" stroke="#059669" stroke-width="2.5"/>
    <circle cx="140" cy="130" r="4" fill="#059669"/><text x="125" y="135" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#059669">B</text>
    <circle cx="320" cy="130" r="4" fill="#059669"/><text x="332" y="135" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#059669">A</text>
    
    <!-- Center O -->
    <circle cx="230" cy="130" r="5" fill="#0f172a"/>
    <text x="230" y="150" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a" text-anchor="middle">O</text>
    
    <!-- Radius OA dimension label -->
    <text x="275" y="122" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#047857" text-anchor="middle">Radius OA = 3.5 cm</text>
    
    <!-- Chord CD -->
    <!-- Point C(180, 52), Point D(280, 52) -->
    <line x1="180" y1="52" x2="280" y2="52" stroke="#d97706" stroke-width="2.5"/>
    <circle cx="180" cy="52" r="4" fill="#d97706"/><text x="168" y="48" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#d97706">C</text>
    <circle cx="280" cy="52" r="4" fill="#d97706"/><text x="290" y="48" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#d97706">D</text>
    <text x="230" y="44" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Chord CD</text>
    
    <!-- Compass Pivot indicator -->
    <path d="M 230 130 L 260 215" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="230" y="240" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle">Diameter AB = 2 × 3.5 = 7.0 cm</text>
  </svg>
</div>`;

// 10. Practical Geometry Ch 8 Q2 / Classic Ch 14 Q2: Perpendicular Bisector Construction
const svgCh8Q2 = `<div class="math-diagram-wrap" style="${svgStyleWrap}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Compass Construction: Perpendicular Bisector (Axis of Symmetry) of AB = 7.3 cm</div>
  <svg viewBox="0 0 500 240" width="100%" height="240" xmlns="http://www.w3.org/2000/svg">
    <!-- Segment AB -->
    <line x1="100" y1="120" x2="400" y2="120" stroke="#1e293b" stroke-width="3"/>
    <circle cx="100" cy="120" r="5" fill="#1e293b"/><text x="85" y="125" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b">A</text>
    <circle cx="400" cy="120" r="5" fill="#1e293b"/><text x="412" y="125" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1e293b">B</text>
    
    <!-- Intersecting compass arcs at top point P (250, 35) -->
    <path d="M 235 30 A 180 180 0 0 1 265 40" stroke="#3b82f6" stroke-width="2" fill="none"/>
    <path d="M 265 30 A 180 180 0 0 0 235 40" stroke="#3b82f6" stroke-width="2" fill="none"/>
    <circle cx="250" cy="35" r="4" fill="#2563eb"/><text x="258" y="32" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#2563eb">P</text>
    
    <!-- Intersecting compass arcs at bottom point Q (250, 205) -->
    <path d="M 235 210 A 180 180 0 0 0 265 200" stroke="#3b82f6" stroke-width="2" fill="none"/>
    <path d="M 265 210 A 180 180 0 0 1 235 200" stroke="#3b82f6" stroke-width="2" fill="none"/>
    <circle cx="250" cy="205" r="4" fill="#2563eb"/><text x="258" y="215" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#2563eb">Q</text>
    
    <!-- Perpendicular line PQ -->
    <line x1="250" y1="15" x2="250" y2="225" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="6,3"/>
    
    <!-- Midpoint M -->
    <circle cx="250" cy="120" r="4" fill="#dc2626"/>
    <text x="262" y="115" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#dc2626">M</text>
    
    <!-- Right angle symbol at M -->
    <rect x="250" y="105" width="15" height="15" fill="none" stroke="#2563eb" stroke-width="1.5"/>
    
    <!-- Dimensions AM and MB -->
    <text x="175" y="140" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#059669" text-anchor="middle">AM = 3.65 cm</text>
    <text x="325" y="140" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#059669" text-anchor="middle">MB = 3.65 cm</text>
  </svg>
</div>`;

// 11. Practical Geometry Ch 8 Q5 / Q8: Construction of 90° and 45° Angle
const svgCh8Q5 = `<div class="math-diagram-wrap" style="${svgStyleWrap}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Construction: 90° Right Angle &amp; 45° Bisector Using Ruler &amp; Compass</div>
  <svg viewBox="0 0 480 230" width="100%" height="230" xmlns="http://www.w3.org/2000/svg">
    <!-- Initial Ray OA -->
    <line x1="80" y1="180" x2="420" y2="180" stroke="#0f172a" stroke-width="2.5"/>
    <circle cx="80" cy="180" r="5" fill="#0f172a"/><text x="65" y="185" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a">O</text>
    <text x="430" y="185" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a">A</text>
    
    <!-- Semicircular arc from O (radius 100) cutting OA at X (180, 180) -->
    <path d="M 180 180 A 100 100 0 0 0 80 80" stroke="#94a3b8" stroke-width="1.5" fill="none" stroke-dasharray="4,2"/>
    <circle cx="180" cy="180" r="4" fill="#64748b"/><text x="180" y="200" font-family="system-ui, sans-serif" font-size="12" fill="#64748b" text-anchor="middle">X</text>
    
    <!-- 60° Arc cut P: x = 80 + 100*cos(60)=130, y = 180 - 100*sin(60)=93.4 -->
    <circle cx="130" cy="93" r="4" fill="#3b82f6"/><text x="115" y="90" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#3b82f6">P (60°)</text>
    
    <!-- 120° Arc cut Q: x = 80 + 100*cos(120)=30, y = 180 - 100*sin(120)=93.4 -->
    <circle cx="30" cy="93" r="4" fill="#3b82f6"/><text x="25" y="85" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#3b82f6">Q (120°)</text>
    
    <!-- 90° Ray OR -->
    <line x1="80" y1="180" x2="80" y2="30" stroke="#dc2626" stroke-width="2.5"/>
    <text x="80" y="22" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#dc2626" text-anchor="middle">R (90°)</text>
    <rect x="80" y="160" width="20" height="20" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    
    <!-- 45° Bisector Ray OS (angle 45 deg, dx=120, dy=-120 -> end 200, 60) -->
    <line x1="80" y1="180" x2="220" y2="40" stroke="#059669" stroke-width="2.5"/>
    <text x="235" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#059669">S (45° Bisector)</text>
    <path d="M 120 180 A 40 40 0 0 0 108 152" fill="none" stroke="#059669" stroke-width="2"/>
    <text x="135" y="160" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#059669">45°</text>
  </svg>
</div>`;

// 12. Symmetry Ch 9 Q1 / Classic Ch 13 Q1: Lines of Symmetry in Plane Shapes
const svgCh9Q1 = `<div class="math-diagram-wrap" style="${svgStyleWrap}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Lines of Symmetry in Plane Geometric Shapes</div>
  <svg viewBox="0 0 540 170" width="100%" height="170" xmlns="http://www.w3.org/2000/svg">
    <!-- Shape 1: Equilateral Triangle (3 lines) -->
    <g transform="translate(60, 25)">
      <polygon points="40,10 5,80 75,80" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <!-- 3 symmetry lines -->
      <line x1="40" y1="0" x2="40" y2="90" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
      <line x1="0" y1="83" x2="60" y2="40" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
      <line x1="80" y1="83" x2="20" y2="40" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="40" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Equilateral Δ</text>
      <text x="40" y="122" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#dc2626" text-anchor="middle">3 Lines</text>
    </g>

    <!-- Shape 2: Square (4 lines) -->
    <g transform="translate(180, 25)">
      <rect x="10" y="15" width="65" height="65" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      <!-- 2 lateral + 2 diagonal lines -->
      <line x1="42.5" y1="5" x2="42.5" y2="90" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
      <line x1="0" y1="47.5" x2="85" y2="47.5" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
      <line x1="5" y1="10" x2="80" y2="85" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
      <line x1="80" y1="10" x2="5" y2="85" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="42.5" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">Square</text>
      <text x="42.5" y="122" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#dc2626" text-anchor="middle">4 Lines</text>
    </g>

    <!-- Shape 3: Rectangle (2 lines) -->
    <g transform="translate(300, 25)">
      <rect x="5" y="25" width="80" height="50" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
      <!-- 2 lines: horizontal and vertical -->
      <line x1="45" y1="15" x2="45" y2="85" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
      <line x1="-5" y1="50" x2="95" y2="50" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="45" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#a16207" text-anchor="middle">Rectangle</text>
      <text x="45" y="122" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#dc2626" text-anchor="middle">2 Lines</text>
    </g>

    <!-- Shape 4: Rhombus (2 lines) -->
    <g transform="translate(420, 25)">
      <polygon points="45,15 80,50 45,85 10,50" fill="#faf5ff" stroke="#9333ea" stroke-width="2"/>
      <!-- 2 diagonals -->
      <line x1="45" y1="5" x2="45" y2="95" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
      <line x1="0" y1="50" x2="90" y2="50" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="45" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#7e22ce" text-anchor="middle">Rhombus</text>
      <text x="45" y="122" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#dc2626" text-anchor="middle">2 Lines</text>
    </g>
  </svg>
</div>`;

// 13. Ganita Prakash Ch 2 Q12: Collinear Points & Concurrent Lines
const svgCh2Q12 = `<div class="math-diagram-wrap" style="${svgStyleWrap}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Illustrative Sketch: Collinear Points vs. Concurrent Lines</div>
  <svg viewBox="0 0 520 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
    <!-- Panel 1: Collinear Points (P, Q, R on line L; S not on line) -->
    <g transform="translate(10, 10)">
      <rect x="0" y="0" width="240" height="155" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
      <text x="120" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">(i) Collinear Points</text>
      
      <!-- Line L -->
      <line x1="20" y1="90" x2="220" y2="90" stroke="#2563eb" stroke-width="2.5"/>
      <text x="215" y="80" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#2563eb">L</text>
      
      <!-- Points P, Q, R on line -->
      <circle cx="50" cy="90" r="4.5" fill="#1e3a8a"/><text x="50" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e3a8a" text-anchor="middle">P</text>
      <circle cx="110" cy="90" r="4.5" fill="#1e3a8a"/><text x="110" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e3a8a" text-anchor="middle">Q</text>
      <circle cx="170" cy="90" r="4.5" fill="#1e3a8a"/><text x="170" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e3a8a" text-anchor="middle">R</text>
      
      <!-- Non-collinear Point S -->
      <circle cx="130" cy="50" r="4.5" fill="#dc2626"/><text x="145" y="52" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#dc2626">S (Non-collinear)</text>
      <text x="120" y="140" font-family="system-ui, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">P, Q, R lie on same straight line L</text>
    </g>

    <!-- Panel 2: Concurrent Lines (Lines l1, l2, l3, l4 all intersecting at common point P) -->
    <g transform="translate(270, 10)">
      <rect x="0" y="0" width="240" height="155" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
      <text x="120" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">(ii) Concurrent Lines</text>
      
      <!-- Center point P at (120, 85) -->
      <line x1="30" y1="85" x2="210" y2="85" stroke="#059669" stroke-width="2"/>
      <text x="215" y="88" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#059669">l₁</text>
      
      <line x1="45" y1="35" x2="195" y2="135" stroke="#7c3aed" stroke-width="2"/>
      <text x="200" y="142" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#7c3aed">l₂</text>
      
      <line x1="120" y1="30" x2="120" y2="140" stroke="#d97706" stroke-width="2"/>
      <text x="125" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#d97706">l₃</text>
      
      <line x1="195" y1="35" x2="45" y2="135" stroke="#2563eb" stroke-width="2"/>
      <text x="35" y="142" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#2563eb">l₄</text>
      
      <circle cx="120" cy="85" r="5.5" fill="#dc2626"/>
      <text x="135" y="80" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#dc2626">Point P</text>
      <text x="120" y="150" font-family="system-ui, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">Point of Concurrence P</text>
    </g>
  </svg>
</div>`;

// 14. Ganita Prakash Ch 2 Q11: Clock Face Angles (3:00, 6:00, 1:00, 5:00)
const svgCh2Q11 = `<div class="math-diagram-wrap" style="${svgStyleWrap}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Angles Formed by Clock Hands at Exact Hours</div>
  <svg viewBox="0 0 540 145" width="100%" height="145" xmlns="http://www.w3.org/2000/svg">
    <!-- Clock 1: 3:00 (Right Angle 90°) -->
    <g transform="translate(65, 65)">
      <circle cx="0" cy="0" r="45" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <circle cx="0" cy="0" r="3" fill="#0f172a"/>
      <!-- 12 marker -->
      <line x1="0" y1="-45" x2="0" y2="-38" stroke="#334155" stroke-width="2"/>
      <!-- Minute hand at 12 -->
      <line x1="0" y1="0" x2="0" y2="-35" stroke="#2563eb" stroke-width="2.5"/>
      <!-- Hour hand at 3 -->
      <line x1="0" y1="0" x2="28" y2="0" stroke="#0f172a" stroke-width="3"/>
      <rect x="0" y="-12" width="12" height="12" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      <text x="0" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">(a) 3:00</text>
      <text x="0" y="74" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#dc2626" text-anchor="middle">Right (90°)</text>
    </g>

    <!-- Clock 2: 6:00 (Straight Angle 180°) -->
    <g transform="translate(195, 65)">
      <circle cx="0" cy="0" r="45" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <circle cx="0" cy="0" r="3" fill="#0f172a"/>
      <!-- Minute hand at 12 -->
      <line x1="0" y1="0" x2="0" y2="-35" stroke="#2563eb" stroke-width="2.5"/>
      <!-- Hour hand at 6 -->
      <line x1="0" y1="0" x2="0" y2="28" stroke="#0f172a" stroke-width="3"/>
      <path d="M 12 0 A 12 12 0 0 1 -12 0" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      <text x="0" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">(b) 6:00</text>
      <text x="0" y="74" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#dc2626" text-anchor="middle">Straight (180°)</text>
    </g>

    <!-- Clock 3: 1:00 (Acute Angle 30°) -->
    <g transform="translate(325, 65)">
      <circle cx="0" cy="0" r="45" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <circle cx="0" cy="0" r="3" fill="#0f172a"/>
      <!-- Minute hand at 12 -->
      <line x1="0" y1="0" x2="0" y2="-35" stroke="#2563eb" stroke-width="2.5"/>
      <!-- Hour hand at 1 (30 deg: dx = 28*sin(30)=14, dy = -28*cos(30)=-24.2) -->
      <line x1="0" y1="0" x2="14" y2="-24" stroke="#0f172a" stroke-width="3"/>
      <path d="M 0 -15 A 15 15 0 0 1 7.5 -13" fill="none" stroke="#16a34a" stroke-width="1.5"/>
      <text x="0" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">(c) 1:00</text>
      <text x="0" y="74" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#16a34a" text-anchor="middle">Acute (30°)</text>
    </g>

    <!-- Clock 4: 5:00 (Obtuse Angle 150°) -->
    <g transform="translate(455, 65)">
      <circle cx="0" cy="0" r="45" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <circle cx="0" cy="0" r="3" fill="#0f172a"/>
      <!-- Minute hand at 12 -->
      <line x1="0" y1="0" x2="0" y2="-35" stroke="#2563eb" stroke-width="2.5"/>
      <!-- Hour hand at 5 (150 deg: dx = 28*sin(150)=14, dy = -28*cos(150)=24.2) -->
      <line x1="0" y1="0" x2="14" y2="24" stroke="#0f172a" stroke-width="3"/>
      <path d="M 0 -15 A 15 15 0 0 1 7.5 13" fill="none" stroke="#d97706" stroke-width="1.5"/>
      <text x="0" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">(d) 5:00</text>
      <text x="0" y="74" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#d97706" text-anchor="middle">Obtuse (150°)</text>
    </g>
  </svg>
</div>`;

module.exports = {
  svgClassicCh4Q1,
  svgClassicCh4Q3,
  svgClassicCh4Q2,
  svgCh4Q4,
  svgCh7Q1,
  svgCh7Q2,
  svgCh10Q2,
  svgCh10Q4,
  svgCh8Q1,
  svgCh8Q2,
  svgCh8Q5,
  svgCh9Q1,
  svgCh2Q12,
  svgCh2Q11
};
