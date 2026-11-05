/**
 * Comprehensive Vector SVG Diagrams for Class 9 Mathematics (Ganit Manzari / CBSE 2026-27).
 * Covers Coordinate Geometry, Polynomials, Number System, Identities, Circular Motion,
 * Perimeter & Area, Probability, Sequences, Proofs, Statistics, Algorithms,
 * Quadrilaterals, Linear Graphs, and Surface Area & Volume.
 */

const wrapStyle = 'margin: 16px auto; text-align: center; max-width: 580px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.04);';

// ==========================================
// CHAPTER 1: COORDINATES
// ==========================================

// 1. Ch 1 Q1 & Q3: 4-Quadrant Cartesian Plane
const svgC9_Ch1_CartesianPlane = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 1.1: The 4-Quadrant Cartesian Plane with Plotted Reference Points</div>
  <svg viewBox="0 0 500 300" width="100%" height="280" xmlns="http://www.w3.org/2000/svg">
    <!-- Grid lines -->
    <g stroke="#f1f5f9" stroke-width="1">
      <line x1="50" y1="30" x2="50" y2="270"/><line x1="90" y1="30" x2="90" y2="270"/>
      <line x1="130" y1="30" x2="130" y2="270"/><line x1="170" y1="30" x2="170" y2="270"/>
      <line x1="210" y1="30" x2="210" y2="270"/><line x1="290" y1="30" x2="290" y2="270"/>
      <line x1="330" y1="30" x2="330" y2="270"/><line x1="370" y1="30" x2="370" y2="270"/>
      <line x1="410" y1="30" x2="410" y2="270"/><line x1="450" y1="30" x2="450" y2="270"/>
      <line x1="30" y1="70" x2="470" y2="70"/><line x1="30" y1="110" x2="470" y2="110"/>
      <line x1="30" y1="190" x2="470" y2="190"/><line x1="30" y1="230" x2="470" y2="230"/>
    </g>
    <!-- Axes -->
    <line x1="30" y1="150" x2="470" y2="150" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="250" y1="20" x2="250" y2="280" stroke="#0f172a" stroke-width="2.5"/>
    <!-- Arrows -->
    <polygon points="475,150 465,145 465,155" fill="#0f172a"/>
    <polygon points="25,150 35,145 35,155" fill="#0f172a"/>
    <polygon points="250,15 245,25 255,25" fill="#0f172a"/>
    <polygon points="250,285 245,275 255,275" fill="#0f172a"/>
    <text x="475" y="142" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a">X</text>
    <text x="20" y="142" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a">X'</text>
    <text x="258" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a">Y</text>
    <text x="258" y="285" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a">Y'</text>
    <text x="240" y="165" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#64748b">O</text>
    
    <!-- Quadrant tags -->
    <rect x="350" y="35" width="105" height="30" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="402" y="55" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1d4ed8" text-anchor="middle">Quad I (+, +)</text>
    <rect x="50" y="35" width="105" height="30" rx="6" fill="#f0fdf4" stroke="#bbf7d0"/>
    <text x="102" y="55" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d" text-anchor="middle">Quad II (-, +)</text>
    <rect x="50" y="235" width="105" height="30" rx="6" fill="#fef2f2" stroke="#fecaca"/>
    <text x="102" y="255" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#b91c1c" text-anchor="middle">Quad III (-, -)</text>
    <rect x="350" y="235" width="105" height="30" rx="6" fill="#fdf4ff" stroke="#f5d0fe"/>
    <text x="402" y="255" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#a21caf" text-anchor="middle">Quad IV (+, -)</text>
    
    <!-- Plotted Points -->
    <!-- A(2, 3): (250 + 2*40 = 330, 150 - 3*40 = 30 -> 150 - 40 = 110? Let scale be 30px per unit) -->
    <!-- Let scale: 30px per unit. Origin at (250, 150) -->
    <!-- A(2, 3) -> (250+60=310, 150-90=60) -->
    <circle cx="310" cy="60" r="4.5" fill="#2563eb"/><text x="318" y="58" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#2563eb">A(2, 3)</text>
    <!-- B(-3, 1) -> (250-90=160, 150-30=120) -->
    <circle cx="160" cy="120" r="4.5" fill="#16a34a"/><text x="105" y="118" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#16a34a">B(-3, 1)</text>
    <!-- C(-2, -4) -> (250-60=190, 150+120=270) -->
    <circle cx="190" cy="230" r="4.5" fill="#dc2626"/><text x="125" y="234" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#dc2626">C(-2, -4)</text>
    <!-- D(4, -1) -> (250+120=370, 150+30=180) -->
    <circle cx="370" cy="180" r="4.5" fill="#9333ea"/><text x="378" y="185" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#9333ea">D(4, -1)</text>
    <!-- F(3, 0) -> (250+90=340, 150) -->
    <circle cx="340" cy="150" r="4.5" fill="#ea580c"/><text x="340" y="170" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#ea580c" text-anchor="middle">F(3, 0)</text>
  </svg>
</div>`;

// 2. Ch 1 Q2 / Ex 1.2: Distance & Pythagoras Right Triangle
const svgC9_Ch1_DistancePythagoras = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 1.2: Distance Formula Derived via Baudhayana-Pythagoras Theorem</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Triangle PQR: P(100, 150), R(360, 150), Q(360, 50) -->
    <polygon points="100,150 360,150 360,50" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
    <!-- Right angle square at R -->
    <rect x="345" y="135" width="15" height="15" fill="none" stroke="#2563eb" stroke-width="1.8"/>
    <!-- Points -->
    <circle cx="100" cy="150" r="5" fill="#1e3a8a"/><text x="85" y="165" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e3a8a">P(x₁, y₁)</text>
    <circle cx="360" cy="50" r="5" fill="#1e3a8a"/><text x="365" y="45" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e3a8a">Q(x₂, y₂)</text>
    <circle cx="360" cy="150" r="4" fill="#64748b"/><text x="370" y="165" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">R(x₂, y₁)</text>
    <!-- Dimension callouts -->
    <text x="230" y="170" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0284c7" text-anchor="middle">Horizontal Leg = |x₂ - x₁|</text>
    <text x="375" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0284c7">Vertical Leg = |y₂ - y₁|</text>
    <text x="220" y="90" font-family="system-ui, sans-serif" font-size="12.5" font-weight="800" fill="#dc2626" transform="rotate(-21, 220, 90)">Distance d = √[(x₂ - x₁)² + (y₂ - y₁)²]</text>
  </svg>
</div>`;

// 3. Ch 1 Q1.2.6: Square Verification
const svgC9_Ch1_SquareVerification = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 1.3: Square ABCD (Side = √34, Diagonals AC = BD = √68)</div>
  <svg viewBox="0 0 460 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
    <!-- Square rotated: A(230, 25), B(360, 110), C(230, 195), D(100, 110) -->
    <polygon points="230,25 360,110 230,195 100,110" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/>
    <!-- Diagonals AC and BD -->
    <line x1="230" y1="25" x2="230" y2="195" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/>
    <line x1="100" y1="110" x2="360" y2="110" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,3"/>
    <!-- Right angle at intersection -->
    <rect x="230" y="98" width="12" height="12" fill="none" stroke="#dc2626" stroke-width="1.2"/>
    <!-- Vertices -->
    <circle cx="230" cy="25" r="4.5" fill="#1e293b"/><text x="230" y="15" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b" text-anchor="middle">A(1, 7)</text>
    <circle cx="360" cy="110" r="4.5" fill="#1e293b"/><text x="372" y="115" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b">B(4, 2)</text>
    <circle cx="230" cy="195" r="4.5" fill="#1e293b"/><text x="230" y="212" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b" text-anchor="middle">C(-1, -1)</text>
    <circle cx="100" cy="110" r="4.5" fill="#1e293b"/><text x="50" y="115" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b">D(-4, 4)</text>
    <!-- Labels -->
    <text x="305" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d">s = √34</text>
    <text x="305" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d">s = √34</text>
    <text x="155" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d">s = √34</text>
    <text x="155" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d">s = √34</text>
    <text x="240" y="140" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#dc2626">AC = BD = √68</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 2: LINEAR POLYNOMIALS
// ==========================================

// 4. Ch 2 Q2.2.1: Graph of Linear Polynomial p(x) = 2x + 1
const svgC9_Ch2_LineGraph = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 2.1: Graph of p(x) = 2x + 1 with Intercepts and Plotted Table Values</div>
  <svg viewBox="0 0 460 230" width="100%" height="230" xmlns="http://www.w3.org/2000/svg">
    <!-- Axes -->
    <line x1="30" y1="160" x2="430" y2="160" stroke="#334155" stroke-width="2"/>
    <line x1="230" y1="20" x2="230" y2="210" stroke="#334155" stroke-width="2"/>
    <text x="435" y="165" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155">X</text>
    <text x="235" y="25" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155">Y</text>
    
    <!-- Line: passes through (-2, -3)->(150, 220), (-1, -1)->(190, 180), (0, 1)->(230, 140), (1, 3)->(270, 100), (2, 5)->(310, 60) -->
    <line x1="130" y1="240" x2="330" y2="40" stroke="#2563eb" stroke-width="3"/>
    
    <!-- Plotted points -->
    <circle cx="230" cy="140" r="4.5" fill="#dc2626"/><text x="240" y="138" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">(0, 1) y-intercept</text>
    <circle cx="210" cy="160" r="4.5" fill="#dc2626"/><text x="145" y="152" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">(-½, 0) zero</text>
    <circle cx="270" cy="100" r="4" fill="#2563eb"/><text x="278" y="105" font-family="system-ui, sans-serif" font-size="10.5" fill="#2563eb">(1, 3)</text>
    <circle cx="310" cy="60" r="4" fill="#2563eb"/><text x="318" y="65" font-family="system-ui, sans-serif" font-size="10.5" fill="#2563eb">(2, 5)</text>
    
    <!-- Table badge -->
    <rect x="30" y="30" width="140" height="65" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="100" y="48" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1d4ed8" text-anchor="middle">p(x) = 2x + 1</text>
    <text x="100" y="65" font-family="system-ui, sans-serif" font-size="10" fill="#1e40af" text-anchor="middle">Slope m = 2 &gt; 0</text>
    <text x="100" y="82" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Unique Zero at x = -½</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 3: WORLD OF NUMBERS
// ==========================================

// 5. Ch 3 Q3.1.3: Geometric Construction of √2 on Number Line
const svgC9_Ch3_Root2NumberLine = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 3.1: Geometric Representation of √2 on the Real Number Line</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Number line -->
    <line x1="30" y1="160" x2="430" y2="160" stroke="#0f172a" stroke-width="2.5"/>
    <polygon points="435,160 425,155 425,165" fill="#0f172a"/>
    <!-- Ticks: 0 at 90, 1 at 190 (scale: 100px = 1 unit), 2 at 290 -->
    <line x1="90" y1="150" x2="90" y2="170" stroke="#0f172a" stroke-width="2"/><text x="90" y="185" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">0 (O)</text>
    <line x1="190" y1="150" x2="190" y2="170" stroke="#0f172a" stroke-width="2"/><text x="190" y="185" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">1 (A)</text>
    <line x1="290" y1="150" x2="290" y2="170" stroke="#0f172a" stroke-width="2"/><text x="290" y="185" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">2</text>
    
    <!-- Vertical segment AB = 1 unit from (190, 160) to (190, 60) -->
    <line x1="190" y1="160" x2="190" y2="60" stroke="#2563eb" stroke-width="2.5"/>
    <rect x="175" y="145" width="15" height="15" fill="none" stroke="#2563eb" stroke-width="1.5"/>
    <text x="200" y="110" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#2563eb">AB = 1</text>
    
    <!-- Hypotenuse OB: (90, 160) to (190, 60) -->
    <line x1="90" y1="160" x2="190" y2="60" stroke="#dc2626" stroke-width="3"/>
    <text x="125" y="100" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626">OB = √2</text>
    <circle cx="190" cy="60" r="4.5" fill="#dc2626"/><text x="190" y="48" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#dc2626" text-anchor="middle">B</text>
    
    <!-- Compass Arc down to number line at 90 + 100*1.414 = 231.4 -->
    <path d="M 190 60 A 141.4 141.4 0 0 1 231.4 160" fill="none" stroke="#9333ea" stroke-width="2" stroke-dasharray="4,3"/>
    <circle cx="231.4" cy="160" r="5" fill="#9333ea"/>
    <text x="231.4" y="185" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#9333ea" text-anchor="middle">P(√2 ≈ 1.414)</text>
    
    <!-- Formula box -->
    <rect x="290" y="30" width="155" height="60" rx="6" fill="#f0fdf4" stroke="#86efac"/>
    <text x="367" y="52" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">OB² = OA² + AB²</text>
    <text x="367" y="72" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#15803d" text-anchor="middle">OB = √(1² + 1²) = √2</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 4: ALGEBRAIC IDENTITIES
// ==========================================

// 6. Ch 4 Q4.1.1: Geometric Area Model of (a + b)^2
const svgC9_Ch4_SquareIdentity = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 4.1: Geometric Dissection Proof of (a + b)² = a² + 2ab + b²</div>
  <svg viewBox="0 0 460 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
    <!-- Square (a+b) x (a+b) from (50, 20) with total side 180 (a=120, b=60) -->
    <!-- Region 1: a x a square (top-left) -->
    <rect x="50" y="20" width="120" height="120" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="110" y="85" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#1d4ed8" text-anchor="middle">a²</text>
    
    <!-- Region 2: a x b rectangle (top-right) -->
    <rect x="170" y="20" width="60" height="120" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <text x="200" y="85" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#b45309" text-anchor="middle">ab</text>
    
    <!-- Region 3: b x a rectangle (bottom-left) -->
    <rect x="50" y="140" width="120" height="60" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <text x="110" y="175" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#b45309" text-anchor="middle">ab</text>
    
    <!-- Region 4: b x b square (bottom-right) -->
    <rect x="170" y="140" width="60" height="60" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
    <text x="200" y="175" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#15803d" text-anchor="middle">b²</text>
    
    <!-- Dimensions -->
    <text x="110" y="14" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">a</text>
    <text x="200" y="14" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#d97706" text-anchor="middle">b</text>
    <text x="40" y="85" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#2563eb">a</text>
    <text x="40" y="175" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#d97706">b</text>
    
    <!-- Summary on right -->
    <rect x="255" y="45" width="190" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="350" y="75" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e293b" text-anchor="middle">TOTAL AREA:</text>
    <text x="350" y="102" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#2563eb" text-anchor="middle">(a + b)² =</text>
    <text x="350" y="128" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b" text-anchor="middle">a² + ab + ab + b²</text>
    <text x="350" y="155" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#16a34a" text-anchor="middle">= a² + 2ab + b²</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 5: ROUND AND ROUND (CIRCULAR & PERIODIC)
// ==========================================

// 7. Ch 5 Q5.1.1 & Q5.1.2: Circular Motion, Arc Length s = rθ
const svgC9_Ch5_CircularMotion = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 5.1: Circular Rotation, Angles in Radians &amp; Arc Length s = rθ</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Circle centre (160, 105), radius 75 -->
    <circle cx="160" cy="105" r="75" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
    <!-- Sector of angle 60° (or theta) -->
    <path d="M 160 105 L 235 105 A 75 75 0 0 0 197.5 40 Z" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <circle cx="160" cy="105" r="4.5" fill="#1e3a8a"/><text x="145" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e3a8a">O</text>
    <text x="195" y="122" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#2563eb">Radius r</text>
    <!-- Angle arc theta -->
    <path d="M 185 105 A 25 25 0 0 0 176 83" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="190" y="96" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#dc2626">θ (rad)</text>
    <!-- Arc s bolded -->
    <path d="M 235 105 A 75 75 0 0 0 197.5 40" fill="none" stroke="#dc2626" stroke-width="3.5"/>
    <text x="235" y="65" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626">Arc s = rθ</text>
    
    <!-- Info card on right -->
    <rect x="270" y="30" width="175" height="150" rx="8" fill="#f0fdf4" stroke="#86efac"/>
    <text x="357" y="55" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#15803d" text-anchor="middle">KEY RADIAN FORMULAS:</text>
    <text x="357" y="78" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">π rad = 180°</text>
    <text x="357" y="100" font-family="system-ui, sans-serif" font-size="10.5" fill="#166534" text-anchor="middle">1 rad = 180° / π ≈ 57.3°</text>
    <text x="357" y="122" font-family="system-ui, sans-serif" font-size="10.5" fill="#166534" text-anchor="middle">Arc Length s = rθ</text>
    <text x="357" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d" text-anchor="middle">1 Rev = 2π rad = 360°</text>
  </svg>
</div>`;

// 8. Ch 5 Q5.2.1: Periodic Wave of Child on Swing
const svgC9_Ch5_PeriodicWave = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 5.2: Periodic Height Function h(t) = 80 + 30 sin(t) (Amplitude = 30 cm)</div>
  <svg viewBox="0 0 480 200" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
    <!-- Axes -->
    <line x1="40" y1="170" x2="450" y2="170" stroke="#334155" stroke-width="2"/>
    <line x1="60" y1="20" x2="60" y2="180" stroke="#334155" stroke-width="2"/>
    <text x="450" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">Time t (s)</text>
    <text x="65" y="25" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">Height h(t) [cm]</text>
    
    <!-- Mean line: h = 80 at y = 100 -->
    <line x1="60" y1="100" x2="440" y2="100" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="50" y="104" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b" text-anchor="end">80</text>
    <!-- Max: h = 110 at y = 50 -->
    <line x1="60" y1="50" x2="440" y2="50" stroke="#86efac" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="50" y="54" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d" text-anchor="end">110 (Max)</text>
    <!-- Min: h = 50 at y = 150 -->
    <line x1="60" y1="150" x2="440" y2="150" stroke="#fca5a5" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="50" y="154" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#b91c1c" text-anchor="end">50 (Min)</text>
    
    <!-- Sine wave: starts at (60, 100), peaks at (150, 50), crosses at (240, 100), trough at (330, 150), ends at (420, 100) -->
    <path d="M 60 100 Q 105 35 150 50 Q 195 65 240 100 Q 285 135 330 150 Q 375 165 420 100" fill="none" stroke="#2563eb" stroke-width="3"/>
    <circle cx="150" cy="50" r="4.5" fill="#15803d"/><text x="150" y="38" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#15803d" text-anchor="middle">Max: 110 cm</text>
    <circle cx="330" cy="150" r="4.5" fill="#b91c1c"/><text x="330" y="168" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#b91c1c" text-anchor="middle">Min: 50 cm</text>
    
    <!-- Amplitude arrow -->
    <line x1="200" y1="100" x2="200" y2="50" stroke="#dc2626" stroke-width="1.8"/>
    <text x="210" y="78" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#dc2626">Amp = 30 cm</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 6: PERIMETER AND AREA
// ==========================================

// 9. Ch 6 Q6.2.1: Heron's Formula for Triangle
const svgC9_Ch6_HeronTriangle = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 6.1: Triangle with Sides a, b, c &amp; Area via Heron's Formula</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Triangle: A(140, 30), B(50, 175), C(310, 175) -->
    <polygon points="140,30 50,175 310,175" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
    <circle cx="140" cy="30" r="4.5" fill="#1e3a8a"/><text x="140" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e3a8a" text-anchor="middle">A</text>
    <circle cx="50" cy="175" r="4.5" fill="#1e3a8a"/><text x="35" y="180" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e3a8a">B</text>
    <circle cx="310" cy="175" r="4.5" fill="#1e3a8a"/><text x="320" y="180" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e3a8a">C</text>
    
    <!-- Sides -->
    <text x="80" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#2563eb">c = 5 cm</text>
    <text x="240" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#2563eb">b = 12 cm</text>
    <text x="180" y="195" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">a = 13 cm</text>
    
    <!-- Formula card -->
    <rect x="250" y="25" width="195" height="110" rx="8" fill="#f0fdf4" stroke="#86efac"/>
    <text x="347" y="48" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#15803d" text-anchor="middle">HERON'S FORMULA:</text>
    <text x="347" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">s = (a + b + c) / 2</text>
    <text x="347" y="92" font-family="system-ui, sans-serif" font-size="10.5" fill="#166534" text-anchor="middle">Area = √[s(s - a)(s - b)(s - c)]</text>
    <text x="347" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#15803d" text-anchor="middle">Area = 30 cm²</text>
  </svg>
</div>`;

// 10. Ch 6 Q6.2.2: Rhombus Area via Diagonals
const svgC9_Ch6_RhombusArea = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 6.2: Rhombus with Perpendicular Diagonals d₁ = 16 cm &amp; d₂ = 12 cm</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Rhombus: A(180, 25), B(280, 105), C(180, 185), D(80, 105) -->
    <polygon points="180,25 280,105 180,185 80,105" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
    <!-- Diagonals AC and BD -->
    <line x1="180" y1="25" x2="180" y2="185" stroke="#dc2626" stroke-width="2"/>
    <line x1="80" y1="105" x2="280" y2="105" stroke="#059669" stroke-width="2"/>
    <!-- Right angle at O -->
    <rect x="180" y="93" width="12" height="12" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    <circle cx="180" cy="105" r="3.5" fill="#0f172a"/><text x="170" y="122" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">O</text>
    
    <!-- Vertices -->
    <text x="180" y="18" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b" text-anchor="middle">A</text>
    <text x="290" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b">B</text>
    <text x="180" y="200" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b" text-anchor="middle">C</text>
    <text x="65" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b">D</text>
    
    <!-- Side a = 10 cm -->
    <text x="240" y="60" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#2563eb">Side a = 10 cm</text>
    
    <!-- Calculation Box -->
    <rect x="295" y="30" width="155" height="120" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="372" y="52" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">d₁ = AC = 16 cm</text>
    <text x="372" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">d₂ = BD = 12 cm</text>
    <text x="372" y="95" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#15803d" text-anchor="middle">Area = ½ × d₁ × d₂</text>
    <text x="372" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#15803d" text-anchor="middle">= ½ × 16 × 12 = 96 cm²</text>
    <text x="372" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Perimeter = 4a = 40 cm</text>
  </svg>
</div>`;

// 11. Ch 6 Q6.3.2: Trapezium Area
const svgC9_Ch6_Trapezium = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 6.3: Trapezium Area = ½(a + b) × h (a = 25 cm, b = 13 cm, h = 8 cm)</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Trapezium: D(140, 50), C(270, 50), B(360, 160), A(50, 160) -->
    <polygon points="140,50 270,50 360,160 50,160" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
    <!-- Altitude h from D to base AB: D(140, 50) to (140, 160) -->
    <line x1="140" y1="50" x2="140" y2="160" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,3"/>
    <rect x="140" y="145" width="15" height="15" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    <text x="150" y="110" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626">h = 8 cm</text>
    
    <!-- Parallel sides labels -->
    <text x="205" y="40" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">Top Base b = 13 cm</text>
    <text x="205" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">Bottom Base a = 25 cm</text>
    
    <!-- Calculation badge on right -->
    <rect x="290" y="40" width="155" height="75" rx="6" fill="#f0fdf4" stroke="#86efac"/>
    <text x="367" y="62" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">Area = ½(a + b)h</text>
    <text x="367" y="80" font-family="system-ui, sans-serif" font-size="10.5" fill="#15803d" text-anchor="middle">= ½(25 + 13) × 8</text>
    <text x="367" y="100" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#15803d" text-anchor="middle">= 38 × 4 = 152 cm²</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 7: PROBABILITY
// ==========================================

// 12. Ch 7 Q7.2.2: Tossing Two Coins Tree Diagram
const svgC9_Ch7_TwoCoinsTree = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 7.1: Probability Tree for Tossing Two Coins (Sample Space S = {HH, HT, TH, TT})</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Coin 1: Start (60, 105) -->
    <circle cx="60" cy="105" r="5" fill="#0f172a"/><text x="50" y="90" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">Start</text>
    <!-- Branch to H1 (180, 55) and T1 (180, 155) -->
    <line x1="60" y1="105" x2="180" y2="55" stroke="#2563eb" stroke-width="2"/>
    <line x1="60" y1="105" x2="180" y2="155" stroke="#2563eb" stroke-width="2"/>
    <text x="110" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#2563eb">½ (H)</text>
    <text x="110" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#2563eb">½ (T)</text>
    
    <circle cx="180" cy="55" r="14" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <text x="180" y="60" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">H</text>
    <circle cx="180" cy="155" r="14" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <text x="180" y="160" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">T</text>
    
    <!-- Coin 2 branches from H to HH(300, 30) and HT(300, 80) -->
    <line x1="194" y1="55" x2="300" y2="30" stroke="#059669" stroke-width="1.8"/>
    <line x1="194" y1="55" x2="300" y2="80" stroke="#059669" stroke-width="1.8"/>
    <text x="315" y="35" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">HH (P = ¼)</text>
    <text x="315" y="85" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">HT (P = ¼)</text>
    
    <!-- Coin 2 branches from T to TH(300, 130) and TT(300, 180) -->
    <line x1="194" y1="155" x2="300" y2="130" stroke="#059669" stroke-width="1.8"/>
    <line x1="194" y1="155" x2="300" y2="180" stroke="#059669" stroke-width="1.8"/>
    <text x="315" y="135" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">TH (P = ¼)</text>
    <text x="315" y="185" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">TT (P = ¼)</text>
  </svg>
</div>`;

// 13. Ch 7 Q7.3.1: Two-Set Venn Diagram (Cricket & Football)
const svgC9_Ch7_VennDiagram = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 7.2: Two-Set Venn Diagram for 40 Students (Cricket = 18, Football = 15, Both = 7)</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Universal Rectangle: Total = 40 -->
    <rect x="30" y="20" width="400" height="170" rx="8" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
    <text x="45" y="42" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">Universal Set U (Total = 40)</text>
    
    <!-- Circle Cricket: centre (180, 110), radius 60 -->
    <circle cx="180" cy="110" r="60" fill="#eff6ff" fill-opacity="0.6" stroke="#2563eb" stroke-width="2.5"/>
    <text x="140" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e40af">Cricket (18)</text>
    <text x="145" y="115" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#1d4ed8">11</text>
    <text x="145" y="132" font-family="system-ui, sans-serif" font-size="9.5" fill="#64748b">(Only C)</text>
    
    <!-- Circle Football: centre (260, 110), radius 60 -->
    <circle cx="260" cy="110" r="60" fill="#f0fdf4" fill-opacity="0.6" stroke="#16a34a" stroke-width="2.5"/>
    <text x="270" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#15803d">Football (15)</text>
    <text x="295" y="115" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#15803d">8</text>
    <text x="295" y="132" font-family="system-ui, sans-serif" font-size="9.5" fill="#64748b">(Only F)</text>
    
    <!-- Intersection Both = 7 -->
    <text x="220" y="115" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#dc2626" text-anchor="middle">7</text>
    <text x="220" y="132" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#dc2626" text-anchor="middle">(Both)</text>
    
    <!-- Neither outside circles: 40 - (11 + 7 + 8) = 14 -->
    <text x="390" y="175" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">Neither = 14</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 9: PROPOSITIONS & CONVERSES (PROOFS)
// ==========================================

// 14. Ch 9 Q9.2.1: Isosceles Triangle Base Angles Proof
const svgC9_Ch9_IsoscelesProof = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 9.1: Proof: Base Angles of Isosceles Triangle are Equal (AB = AC ⟹ ∠B = ∠C)</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Triangle ABC: A(230, 25), B(120, 185), C(340, 185) -->
    <polygon points="230,25 120,185 340,185" fill="#f8fafc" stroke="#1e293b" stroke-width="2.5"/>
    
    <!-- Angle bisector AD: (230, 25) to (230, 185) -->
    <line x1="230" y1="25" x2="230" y2="185" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
    
    <!-- Angle bisector arcs at A: ∠BAD = ∠CAD -->
    <path d="M 218 55 A 35 35 0 0 0 228 58" fill="none" stroke="#dc2626" stroke-width="1.8"/>
    <path d="M 232 58 A 35 35 0 0 0 242 55" fill="none" stroke="#dc2626" stroke-width="1.8"/>
    
    <!-- Base angle arcs at B and C -->
    <path d="M 150 185 A 30 30 0 0 0 140 157" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="155" y="172" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#2563eb">∠B</text>
    <path d="M 310 185 A 30 30 0 0 1 320 157" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="295" y="172" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#2563eb">∠C</text>
    
    <!-- Vertices -->
    <circle cx="230" cy="25" r="4.5" fill="#1e293b"/><text x="230" y="15" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b" text-anchor="middle">A</text>
    <circle cx="120" cy="185" r="4.5" fill="#1e293b"/><text x="105" y="195" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b">B</text>
    <circle cx="340" cy="185" r="4.5" fill="#1e293b"/><text x="350" y="195" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b">C</text>
    <circle cx="230" cy="185" r="4" fill="#dc2626"/><text x="230" y="202" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626" text-anchor="middle">D</text>
    
    <!-- Equality ticks on AB and AC -->
    <text x="160" y="105" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#1e293b">AB</text>
    <text x="280" y="105" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#1e293b">AC</text>
    
    <!-- Congruence note -->
    <rect x="15" y="40" width="135" height="50" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="82" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">By SAS Criterion:</text>
    <text x="82" y="78" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e40af" text-anchor="middle">ΔABD ≅ ΔACD</text>
  </svg>
</div>`;

// 15. Ch 9 Q9.2.2: Angle Sum Property of Triangle
const svgC9_Ch9_AngleSumTriangle = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 9.2: Angle Sum Property: ∠A + ∠B + ∠C = 180° via Parallel Construction XY ∥ BC</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Parallel Line XY through A(230, 60): (60, 60) to (400, 60) -->
    <line x1="60" y1="60" x2="400" y2="60" stroke="#0284c7" stroke-width="2"/>
    <text x="60" y="52" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0284c7">X</text>
    <text x="395" y="52" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0284c7">Y</text>
    
    <!-- Triangle ABC: A(230, 60), B(110, 185), C(350, 185) -->
    <polygon points="230,60 110,185 350,185" fill="#f8fafc" stroke="#1e293b" stroke-width="2.5"/>
    <line x1="110" y1="185" x2="350" y2="185" stroke="#1e293b" stroke-width="2.5"/>
    
    <!-- Angle 1 at XAB: alternate to ∠B -->
    <path d="M 190 60 A 40 40 0 0 1 202 85" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="180" y="52" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#2563eb">∠1</text>
    <!-- Angle 2 at A: interior ∠A -->
    <path d="M 215 76 A 25 25 0 0 0 245 76" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="230" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626" text-anchor="middle">∠A</text>
    <!-- Angle 3 at YAC: alternate to ∠C -->
    <path d="M 258 85 A 40 40 0 0 1 270 60" fill="none" stroke="#059669" stroke-width="2"/>
    <text x="275" y="52" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#059669">∠3</text>
    
    <!-- Base interior angles -->
    <text x="135" y="175" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#2563eb">∠B (= ∠1)</text>
    <text x="305" y="175" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#059669">∠C (= ∠3)</text>
    
    <!-- Summary -->
    <rect x="290" y="105" width="155" height="52" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="367" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">∠1 + ∠A + ∠3 = 180°</text>
    <text x="367" y="145" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#1e40af" text-anchor="middle">⟹ ∠A + ∠B + ∠C = 180°</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 10: UNDERSTANDING DATA
// ==========================================

// 16. Ch 10 Q10.2.3: Histogram & Overlaid Frequency Polygon
const svgC9_Ch10_HistogramPolygon = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 10.1: Continuous Grouped Data — Histogram &amp; Superimposed Frequency Polygon</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Axes -->
    <line x1="40" y1="170" x2="430" y2="170" stroke="#334155" stroke-width="2"/>
    <line x1="50" y1="20" x2="50" y2="180" stroke="#334155" stroke-width="2"/>
    
    <!-- Bars (bins: 50-110, 110-170, 170-230, 230-290, 290-350, 350-410) width=60 -->
    <!-- Bar 1: h=50 -> y=120 -->
    <rect x="50" y="120" width="60" height="50" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
    <!-- Bar 2: h=110 -> y=60 -->
    <rect x="110" y="60" width="60" height="110" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
    <!-- Bar 3: h=130 -> y=40 -->
    <rect x="170" y="40" width="60" height="130" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
    <!-- Bar 4: h=80 -> y=90 -->
    <rect x="230" y="90" width="60" height="80" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
    <!-- Bar 5: h=40 -> y=130 -->
    <rect x="290" y="130" width="60" height="40" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
    
    <!-- Class midpoints & Frequency Polygon Line: connected through (20, 170), (80, 120), (140, 60), (200, 40), (260, 90), (320, 130), (380, 170) -->
    <polyline points="20,170 80,120 140,60 200,40 260,90 320,130 380,170" fill="none" stroke="#dc2626" stroke-width="2.5"/>
    
    <!-- Midpoint dots -->
    <circle cx="80" cy="120" r="4" fill="#dc2626"/>
    <circle cx="140" cy="60" r="4" fill="#dc2626"/>
    <circle cx="200" cy="40" r="4" fill="#dc2626"/>
    <circle cx="260" cy="90" r="4" fill="#dc2626"/>
    <circle cx="320" cy="130" r="4" fill="#dc2626"/>
    
    <!-- Legend -->
    <rect x="300" y="25" width="145" height="45" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <line x1="310" y1="38" x2="330" y2="38" stroke="#dc2626" stroke-width="2.5"/>
    <text x="338" y="42" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#dc2626">Frequency Polygon</text>
    <rect x="310" y="52" width="20" height="10" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="338" y="61" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e40af">Histogram Bars</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 11: ALGORITHMS
// ==========================================

// 17. Ch 11 Q11.2.1: Flowchart of Euclid's Division Algorithm
const svgC9_Ch11_EuclidAlgorithmFlowchart = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 11.1: Flowchart Logic for Euclid's Division Algorithm to Find HCF(a, b)</div>
  <svg viewBox="0 0 460 240" width="100%" height="240" xmlns="http://www.w3.org/2000/svg">
    <!-- Start oval -->
    <rect x="180" y="10" width="100" height="30" rx="15" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
    <text x="230" y="30" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#15803d" text-anchor="middle">START</text>
    <line x1="230" y1="40" x2="230" y2="60" stroke="#334155" stroke-width="2"/>
    
    <!-- Input block -->
    <polygon points="170,60 290,60 275,90 155,90" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <text x="222" y="79" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Input a, b (a &gt; b)</text>
    <line x1="222" y1="90" x2="222" y2="110" stroke="#334155" stroke-width="2"/>
    
    <!-- Division step: a = bq + r -->
    <rect x="150" y="110" width="145" height="32" rx="4" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
    <text x="222" y="130" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="middle">Divide: a = bq + r</text>
    <line x1="222" y1="142" x2="222" y2="160" stroke="#334155" stroke-width="2"/>
    
    <!-- Decision diamond: Is r = 0? -->
    <polygon points="222,160 280,185 222,210 164,185" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <text x="222" y="189" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#b45309" text-anchor="middle">r = 0 ?</text>
    
    <!-- Yes branch to HCF = b -->
    <line x1="280" y1="185" x2="350" y2="185" stroke="#16a34a" stroke-width="2"/>
    <text x="310" y="178" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#16a34a">Yes</text>
    <rect x="350" y="170" width="95" height="30" rx="15" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
    <text x="397" y="189" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d" text-anchor="middle">HCF = b</text>
    
    <!-- No branch loop back: a = b, b = r -->
    <line x1="164" y1="185" x2="90" y2="185" stroke="#dc2626" stroke-width="2"/>
    <text x="125" y="178" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#dc2626">No</text>
    <line x1="90" y1="185" x2="90" y2="126" stroke="#dc2626" stroke-width="2"/>
    <line x1="90" y1="126" x2="150" y2="126" stroke="#dc2626" stroke-width="2"/>
    <polygon points="148,126 140,121 140,131" fill="#dc2626"/>
    <text x="80" y="155" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">a = b, b = r</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 12: QUADRILATERALS
// ==========================================

// 18. Ch 12 Q12.1.1: Parallelogram with Diagonal (Opposite Sides Equal)
const svgC9_Ch12_ParallelogramDiag = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 12.1: Diagonal AC Divides Parallelogram ABCD into Congruent ΔABC ≅ ΔCDA</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Parallelogram: A(80, 160), B(280, 160), C(360, 50), D(160, 50) -->
    <polygon points="80,160 280,160 360,50 160,50" fill="#f8fafc" stroke="#1e293b" stroke-width="2.5"/>
    <!-- Diagonal AC: (80, 160) to (360, 50) -->
    <line x1="80" y1="160" x2="360" y2="50" stroke="#dc2626" stroke-width="2.5"/>
    
    <!-- Alternate interior angle arcs -->
    <path d="M 120 160 A 40 40 0 0 1 112 147" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="130" y="152" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#2563eb">∠1</text>
    <path d="M 320 50 A 40 40 0 0 1 328 63" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="310" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#2563eb">∠2</text>
    
    <!-- Vertices -->
    <circle cx="80" cy="160" r="4.5" fill="#1e293b"/><text x="65" y="170" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b">A</text>
    <circle cx="280" cy="160" r="4.5" fill="#1e293b"/><text x="290" y="170" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b">B</text>
    <circle cx="360" cy="50" r="4.5" fill="#1e293b"/><text x="370" y="55" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b">C</text>
    <circle cx="160" cy="50" r="4.5" fill="#1e293b"/><text x="150" y="42" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b">D</text>
    
    <!-- Summary note -->
    <rect x="290" y="90" width="155" height="50" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="367" y="110" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">ΔABC ≅ ΔCDA (ASA)</text>
    <text x="367" y="128" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e40af" text-anchor="middle">⟹ AB = CD &amp; AD = BC</text>
  </svg>
</div>`;

// 19. Ch 12 Q12.2.1: The Midpoint Theorem for Triangles
const svgC9_Ch12_MidpointTheorem = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 12.2: Midpoint Theorem: DE ∥ BC and DE = ½ BC in ΔABC</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Triangle ABC: A(200, 30), B(60, 180), C(340, 180) -->
    <polygon points="200,30 60,180 340,180" fill="#f8fafc" stroke="#1e293b" stroke-width="2.5"/>
    
    <!-- Midpoints: D on AB (130, 105), E on AC (270, 105) -->
    <!-- Midpoint segment DE -->
    <line x1="130" y1="105" x2="270" y2="105" stroke="#2563eb" stroke-width="3"/>
    
    <!-- Construction extension: extend DE to F such that EF = DE, join CF -->
    <line x1="270" y1="105" x2="410" y2="105" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
    <line x1="340" y1="180" x2="410" y2="105" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
    <circle cx="410" cy="105" r="4" fill="#dc2626"/><text x="420" y="110" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626">F</text>
    
    <!-- Vertices & Points -->
    <circle cx="200" cy="30" r="4.5" fill="#1e293b"/><text x="200" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b" text-anchor="middle">A</text>
    <circle cx="60" cy="180" r="4.5" fill="#1e293b"/><text x="45" y="185" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b">B</text>
    <circle cx="340" cy="180" r="4.5" fill="#1e293b"/><text x="350" y="185" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e293b">C</text>
    <circle cx="130" cy="105" r="4.5" fill="#2563eb"/><text x="110" y="105" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#2563eb">D</text>
    <circle cx="270" cy="105" r="4.5" fill="#2563eb"/><text x="260" y="95" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#2563eb">E</text>
    
    <!-- Midpoint markings -->
    <text x="85" y="65" font-family="system-ui, sans-serif" font-size="10.5" fill="#64748b">AD = DB</text>
    <text x="245" y="65" font-family="system-ui, sans-serif" font-size="10.5" fill="#64748b">AE = EC</text>
    
    <!-- Theorem Badge -->
    <rect x="70" y="130" width="160" height="36" rx="6" fill="#f0fdf4" stroke="#86efac"/>
    <text x="150" y="152" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#15803d" text-anchor="middle">DE ∥ BC  and  DE = ½ BC</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 13: TWO VARIABLES, ONE LINE
// ==========================================

// 20. Ch 13 Q13.3.1: Graphical Solution of Linear System
const svgC9_Ch13_LinearGraphIntersections = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 13.1: Graphical Solution of x + y = 5 and x - y = 1 Intersecting at (3, 2)</div>
  <svg viewBox="0 0 460 230" width="100%" height="230" xmlns="http://www.w3.org/2000/svg">
    <!-- Axes: Origin at (100, 180), scale: 28px per unit -->
    <line x1="60" y1="180" x2="420" y2="180" stroke="#334155" stroke-width="2"/>
    <line x1="100" y1="30" x2="100" y2="210" stroke="#334155" stroke-width="2"/>
    <text x="425" y="185" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">X</text>
    <text x="105" y="35" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#334155">Y</text>
    
    <!-- Line 1: x + y = 5 -> passes through (0, 5)->(100, 40) and (5, 0)->(240, 180) -->
    <line x1="80" y1="20" x2="260" y2="200" stroke="#2563eb" stroke-width="2.5"/>
    <text x="260" y="195" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#2563eb">x + y = 5</text>
    
    <!-- Line 2: x - y = 1 -> passes through (1, 0)->(128, 180) and (0, -1)->(100, 208), (3, 2)->(184, 124), (5, 4)->(240, 68) -->
    <line x1="90" y1="216" x2="260" y2="48" stroke="#16a34a" stroke-width="2.5"/>
    <text x="265" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#16a34a">x - y = 1</text>
    
    <!-- Intersection point at (3, 2) -> (100 + 3*28 = 184, 180 - 2*28 = 124) -->
    <circle cx="184" cy="124" r="6" fill="#dc2626"/>
    <!-- Projection lines to axes -->
    <line x1="184" y1="124" x2="184" y2="180" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
    <line x1="184" y1="124" x2="100" y2="124" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="195" y="120" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626">P(3, 2) Solution</text>
    
    <!-- Solution box -->
    <rect x="290" y="90" width="150" height="60" rx="6" fill="#fef2f2" stroke="#fecaca"/>
    <text x="365" y="112" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b91c1c" text-anchor="middle">Unique Intersection:</text>
    <text x="365" y="134" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#991b1b" text-anchor="middle">x = 3, y = 2</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 14: SURFACE AREA AND VOLUME
// ==========================================

// 21. Ch 14 Q14.1.1: 3D Cuboid Geometry
const svgC9_Ch14_CuboidSolid = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 14.1: Rectangular Cuboid with Dimensions Length l, Breadth b &amp; Height h</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Front Face: (80, 80) to (240, 170) width=160, height=90 -->
    <rect x="80" y="80" width="160" height="90" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <!-- Top Face -->
    <polygon points="80,80 130,35 290,35 240,80" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <!-- Right Face -->
    <polygon points="240,80 290,35 290,125 240,170" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
    
    <!-- Dimension callouts -->
    <text x="160" y="190" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">Length l = 12 cm</text>
    <text x="65" y="130" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="end">Height h = 5 cm</text>
    <text x="280" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a">Breadth b = 8 cm</text>
    
    <!-- Formulas box -->
    <rect x="315" y="30" width="135" height="135" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="382" y="52" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e293b" text-anchor="middle">FORMULAS:</text>
    <text x="382" y="72" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#2563eb" text-anchor="middle">LSA = 2(l + b)h</text>
    <text x="382" y="90" font-family="system-ui, sans-serif" font-size="10" fill="#1e40af" text-anchor="middle">= 2(20)(5) = 200 cm²</text>
    <text x="382" y="112" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#15803d" text-anchor="middle">TSA = 2(lb+bh+hl)</text>
    <text x="382" y="130" font-family="system-ui, sans-serif" font-size="10" fill="#166534" text-anchor="middle">= 392 cm²</text>
    <text x="382" y="152" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#b45309" text-anchor="middle">Vol = lbh = 480 cm³</text>
  </svg>
</div>`;

// 22. Ch 14 Q14.2.1: Right Circular Cylinder
const svgC9_Ch14_CylinderSolid = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 14.2: Right Circular Cylinder with Radius r = 7 cm &amp; Height h = 20 cm</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Cylinder body: centre x=160, top ellipse cy=45, bottom ellipse cy=165, rx=60, ry=15 -->
    <!-- Curved sides -->
    <line x1="100" y1="45" x2="100" y2="165" stroke="#059669" stroke-width="2.5"/>
    <line x1="220" y1="45" x2="220" y2="165" stroke="#059669" stroke-width="2.5"/>
    <!-- Bottom ellipse -->
    <path d="M 100 165 A 60 15 0 0 0 220 165 A 60 15 0 0 0 100 165" fill="#ecfdf5" stroke="#059669" stroke-width="2.5"/>
    <!-- Top ellipse -->
    <ellipse cx="160" cy="45" rx="60" ry="15" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>
    
    <!-- Radius & Height markers -->
    <line x1="160" y1="45" x2="220" y2="45" stroke="#dc2626" stroke-width="2"/>
    <circle cx="160" cy="45" r="3.5" fill="#0f172a"/>
    <text x="185" y="38" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#dc2626">r = 7 cm</text>
    
    <line x1="85" y1="45" x2="85" y2="165" stroke="#0f172a" stroke-width="1.5"/>
    <path d="M 81 45 L 89 45 M 81 165 L 89 165" stroke="#0f172a" stroke-width="1.5"/>
    <text x="75" y="110" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#0f172a" text-anchor="end">h = 20 cm</text>
    
    <!-- Formulas card -->
    <rect x="260" y="35" width="185" height="125" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="352" y="58" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#15803d" text-anchor="middle">CYLINDER FORMULAS:</text>
    <text x="352" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">CSA = 2πrh = 880 cm²</text>
    <text x="352" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">TSA = 2πr(h + r) = 1188 cm²</text>
    <text x="352" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d" text-anchor="middle">Volume = πr²h = 3080 cm³</text>
  </svg>
</div>`;

// 23. Ch 14 Q14.2.2 & Q14.4.2: Right Circular Cone (r, h, l)
const svgC9_Ch14_ConeGeometry = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 14.3: Right Circular Cone Showing Relation l² = r² + h² (r = 6 cm, l = 10 cm)</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Cone: apex V(160, 25), base center (160, 170), radius 65, ry=14 -->
    <path d="M 95 170 A 65 14 0 0 0 225 170" fill="none" stroke="#2563eb" stroke-width="2"/>
    <path d="M 95 170 A 65 14 0 0 1 225 170" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,3"/>
    <polygon points="160,25 95,170 225,170" fill="#eff6ff" fill-opacity="0.5" stroke="#2563eb" stroke-width="2.5"/>
    
    <!-- Height h & Radius r right triangle -->
    <line x1="160" y1="25" x2="160" y2="170" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,3"/>
    <line x1="160" y1="170" x2="225" y2="170" stroke="#059669" stroke-width="2.5"/>
    <rect x="160" y="156" width="14" height="14" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    
    <circle cx="160" cy="25" r="4" fill="#0f172a"/><text x="160" y="16" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">Apex V</text>
    <text x="145" y="105" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#dc2626">h</text>
    <text x="190" y="185" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#059669">r = 6 cm</text>
    <text x="215" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#2563eb">Slant l = 10 cm</text>
    
    <!-- Cone Formulas Box -->
    <rect x="260" y="35" width="185" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="352" y="58" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#1d4ed8" text-anchor="middle">CONE FORMULAS:</text>
    <text x="352" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">l = √(r² + h²)</text>
    <text x="352" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">CSA = πrl = 60π cm²</text>
    <text x="352" y="124" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">TSA = πr(l + r) = 96π cm²</text>
    <text x="352" y="146" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d" text-anchor="middle">Volume = ⅓ πr²h</text>
  </svg>
</div>`;

// 24. Ch 14 Q14.3.3 & Q14.4.3: Sphere & Hemisphere
const svgC9_Ch14_SphereHemisphere = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 14.4: Geometry of Sphere &amp; Hemisphere with Radius r</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Hemisphere: centre (140, 90), radius 60 -->
    <!-- Flat circular top -->
    <ellipse cx="140" cy="90" rx="60" ry="15" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <!-- Hemispherical bottom dome -->
    <path d="M 80 90 A 60 60 0 0 0 200 90 Z" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
    <circle cx="140" cy="90" r="3.5" fill="#0f172a"/>
    <line x1="140" y1="90" x2="200" y2="90" stroke="#dc2626" stroke-width="2"/>
    <text x="170" y="84" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#dc2626">r</text>
    <text x="140" y="175" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e40af" text-anchor="middle">Hemisphere (Radius r)</text>
    
    <!-- Info Box on right -->
    <rect x="235" y="25" width="210" height="150" rx="8" fill="#f0fdf4" stroke="#86efac"/>
    <text x="340" y="48" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#15803d" text-anchor="middle">SPHERE &amp; HEMISPHERE:</text>
    <text x="340" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#166534" text-anchor="middle">Sphere Volume = ⁴⁄₃ πr³</text>
    <text x="340" y="90" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#166534" text-anchor="middle">Sphere Surface Area = 4πr²</text>
    <text x="340" y="115" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#15803d" text-anchor="middle">Hemisphere Volume = ⅔ πr³</text>
    <text x="340" y="135" font-family="system-ui, sans-serif" font-size="10.5" fill="#166534" text-anchor="middle">Hemisphere CSA = 2πr²</text>
    <text x="340" y="155" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d" text-anchor="middle">Hemisphere TSA = 3πr²</text>
  </svg>
</div>`;


// 25. Ch 7 Q7.2.3: Deck of 52 Cards
const svgC9_Ch7_DeckOfCards = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;

// 26. Ch 8 Q8.1.1: Arithmetic Progression Step Model
const svgC9_Ch8_APStaircase = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;

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
