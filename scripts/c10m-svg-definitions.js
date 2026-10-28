/**
 * High-quality, responsive SVG diagrams for Class 10 Mathematics NCERT Solutions.
 * Designed with modern aesthetic standards, crisp vector geometry, and clear pedagogical labels.
 */

const wrapStyle = 'margin: 16px auto; text-align: center; max-width: 580px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.04);';

// ==========================================
// CHAPTER 6: TRIANGLES
// ==========================================

// 1. Ch 6 Q16: Thales Theorem / BPT (DE || BC)
const svgCh6Q16 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 6.1: Basic Proportionality Theorem (DE ∥ BC in ΔABC)</div>
  <svg viewBox="0 0 480 240" width="100%" height="240" xmlns="http://www.w3.org/2000/svg">
    <!-- Triangle ABC: A(240, 30), B(80, 200), C(400, 200) -->
    <polygon points="240,30 80,200 400,200" fill="#f8fafc" stroke="#1e293b" stroke-width="2.5"/>
    
    <!-- Parallel Line DE: D on AB (160, 115), E on AC (320, 115) -->
    <line x1="160" y1="115" x2="320" y2="115" stroke="#2563eb" stroke-width="2.5"/>
    
    <!-- Parallel arrows on DE and BC -->
    <path d="M 235 110 L 245 115 L 235 120" fill="none" stroke="#2563eb" stroke-width="2"/>
    <path d="M 235 195 L 245 200 L 235 205" fill="none" stroke="#1e293b" stroke-width="2"/>
    
    <!-- Vertices & Points -->
    <circle cx="240" cy="30" r="5" fill="#1e3a8a"/><text x="240" y="20" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#1e3a8a" text-anchor="middle">A</text>
    <circle cx="80" cy="200" r="5" fill="#1e3a8a"/><text x="65" y="210" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#1e3a8a">B</text>
    <circle cx="400" cy="200" r="5" fill="#1e3a8a"/><text x="410" y="210" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#1e3a8a">C</text>
    <circle cx="160" cy="115" r="5" fill="#2563eb"/><text x="140" y="115" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#2563eb">D</text>
    <circle cx="320" cy="115" r="5" fill="#2563eb"/><text x="330" y="115" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#2563eb">E</text>
    
    <!-- Dimension Callouts for Part (i) -->
    <rect x="18" y="55" width="115" height="48" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="75" y="74" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">AD = 1.5 cm</text>
    <text x="75" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">DB = 3.0 cm</text>
    
    <rect x="345" y="55" width="115" height="48" rx="6" fill="#ecfdf5" stroke="#a7f3d0"/>
    <text x="402" y="74" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#047857" text-anchor="middle">AE = 1.0 cm</text>
    <text x="402" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#047857" text-anchor="middle">EC = 2.0 cm</text>
  </svg>
</div>`;

// 2. Ch 6 Q21: Similar Triangles ΔODC ~ ΔOBA with Intersecting Lines
const svgCh6Q21 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 6.2: Intersecting Lines &amp; Similar Triangles ΔODC ~ ΔOBA</div>
  <svg viewBox="0 0 500 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
    <!-- Intersecting line AC from (110, 40) to (390, 180) -->
    <line x1="110" y1="40" x2="390" y2="180" stroke="#64748b" stroke-width="2"/>
    <!-- Intersecting line DB from (370, 40) to (130, 180) -->
    <line x1="370" y1="40" x2="130" y2="180" stroke="#64748b" stroke-width="2"/>
    
    <!-- Top parallel/similar base DC: (110, 40) to (370, 40) -->
    <line x1="110" y1="40" x2="370" y2="40" stroke="#2563eb" stroke-width="2.5"/>
    <!-- Bottom parallel/similar base AB: (130, 180) to (390, 180) -->
    <line x1="130" y1="180" x2="390" y2="180" stroke="#2563eb" stroke-width="2.5"/>
    
    <!-- Center O at intersection (245, 110) -->
    <circle cx="245" cy="110" r="5" fill="#0f172a"/><text x="245" y="132" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a" text-anchor="middle">O</text>
    
    <!-- Vertices -->
    <circle cx="110" cy="40" r="4.5" fill="#1e3a8a"/><text x="95" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e3a8a">D</text>
    <circle cx="370" cy="40" r="4.5" fill="#1e3a8a"/><text x="382" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e3a8a">C</text>
    <circle cx="130" cy="180" r="4.5" fill="#1e3a8a"/><text x="115" y="195" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e3a8a">A</text>
    <circle cx="390" cy="180" r="4.5" fill="#1e3a8a"/><text x="402" y="195" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e3a8a">B</text>
    
    <!-- Given Angle BOC = 125° -->
    <path d="M 285 130 A 45 45 0 0 0 295 85" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="315" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626">125°</text>
    
    <!-- Given Angle CBO = 70° -->
    <path d="M 370 170 A 25 25 0 0 1 355 180" fill="none" stroke="#059669" stroke-width="2"/>
    <text x="345" y="165" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#059669">70°</text>
    
    <!-- Found Angles Callout box -->
    <rect x="18" y="70" width="130" height="65" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="83" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">∠DOC = 55°</text>
    <text x="83" y="106" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">∠DCO = 55°</text>
    <text x="83" y="122" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">∠OAB = 55°</text>
  </svg>
</div>`;

// 3. Ch 6 Q24: Altitudes AD and CE of ΔABC intersecting at P
const svgCh6Q24 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 6.3: Altitudes AD ⊥ BC and CE ⊥ AB Intersecting at P</div>
  <svg viewBox="0 0 460 230" width="100%" height="230" xmlns="http://www.w3.org/2000/svg">
    <!-- Triangle ABC: A(220, 25), B(60, 195), C(390, 195) -->
    <polygon points="220,25 60,195 390,195" fill="#f8fafc" stroke="#1e293b" stroke-width="2.5"/>
    
    <!-- Altitude AD perpendicular to BC: from A(220, 25) to D(220, 195) -->
    <line x1="220" y1="25" x2="220" y2="195" stroke="#dc2626" stroke-width="2"/>
    <rect x="220" y="180" width="15" height="15" fill="none" stroke="#dc2626" stroke-width="1.5"/>
    
    <!-- Altitude CE perpendicular to AB: from C(390, 195) to E(155, 95) -->
    <line x1="390" y1="195" x2="155" y2="95" stroke="#059669" stroke-width="2"/>
    <!-- Right angle indicator at E -->
    <path d="M 162 86 L 171 90 L 164 99" fill="none" stroke="#059669" stroke-width="1.5"/>
    
    <!-- Intersection point P at (220, 122) -->
    <circle cx="220" cy="122" r="5" fill="#7c3aed"/>
    <text x="235" y="125" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#7c3aed">P</text>
    
    <!-- Vertices -->
    <circle cx="220" cy="25" r="4.5" fill="#1e3a8a"/><text x="220" y="15" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e3a8a" text-anchor="middle">A</text>
    <circle cx="60" cy="195" r="4.5" fill="#1e3a8a"/><text x="45" y="205" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e3a8a">B</text>
    <circle cx="390" cy="195" r="4.5" fill="#1e3a8a"/><text x="402" y="205" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e3a8a">C</text>
    <circle cx="220" cy="195" r="4.5" fill="#dc2626"/><text x="220" y="215" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#dc2626" text-anchor="middle">D</text>
    <circle cx="155" cy="95" r="4.5" fill="#059669"/><text x="140" y="90" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#059669">E</text>
    
    <rect x="290" y="45" width="145" height="45" rx="6" fill="#f5f3ff" stroke="#ddd6fe"/>
    <text x="362" y="64" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#6d28d9" text-anchor="middle">ΔAEP ~ ΔCDP</text>
    <text x="362" y="80" font-family="system-ui, sans-serif" font-size="10" fill="#6d28d9" text-anchor="middle">By AA Criterion</text>
  </svg>
</div>`;

// 4. Ch 6 Q25: Right Triangles ABC and AMP
const svgCh6Q25 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 6.4: Dual Right Triangles ΔABC (∠B=90°) &amp; ΔAMP (∠M=90°)</div>
  <svg viewBox="0 0 460 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
    <!-- Right triangle ABC: A(60, 180), B(320, 180), C(320, 40) -->
    <polygon points="60,180 320,180 320,40" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
    <rect x="305" y="165" width="15" height="15" fill="none" stroke="#2563eb" stroke-width="1.5"/>
    
    <!-- Right triangle AMP: A(60, 180), M on AC (235, 87), P(280, 20) -->
    <line x1="60" y1="180" x2="280" y2="20" stroke="#dc2626" stroke-width="2"/>
    <line x1="280" y1="20" x2="235" y2="87" stroke="#dc2626" stroke-width="2"/>
    <!-- Right angle indicator at M -->
    <rect x="235" y="75" width="12" height="12" fill="none" stroke="#dc2626" stroke-width="1.5" transform="rotate(32 235 75)"/>
    
    <!-- Vertices -->
    <circle cx="60" cy="180" r="5" fill="#1e3a8a"/><text x="45" y="195" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#1e3a8a">A</text>
    <circle cx="320" cy="180" r="5" fill="#1e3a8a"/><text x="335" y="195" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#1e3a8a">B (90°)</text>
    <circle cx="320" cy="40" r="5" fill="#1e3a8a"/><text x="335" y="45" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#1e3a8a">C</text>
    <circle cx="235" cy="87" r="5" fill="#dc2626"/><text x="215" y="80" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#dc2626">M (90°)</text>
    <circle cx="280" cy="20" r="5" fill="#dc2626"/><text x="295" y="25" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#dc2626">P</text>
    
    <text x="100" y="170" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#047857">Common ∠A</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 8: INTRODUCTION TO TRIGONOMETRY
// ==========================================

// 5. Ch 8 Q2 / Q19: Right Triangle PQR (PQ = 12 cm, PR = 13 cm, QR = 5 cm)
const svgCh8Q2 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 8.1: Right Triangle ΔPQR (Finding tan P - cot R)</div>
  <svg viewBox="0 0 440 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
    <!-- Right triangle PQR: P(120, 30), Q(120, 180), R(340, 180) -->
    <polygon points="120,30 120,180 340,180" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
    <rect x="120" y="165" width="15" height="15" fill="none" stroke="#2563eb" stroke-width="1.5"/>
    
    <!-- Vertices -->
    <circle cx="120" cy="30" r="5" fill="#1e3a8a"/><text x="110" y="25" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#1e3a8a">P</text>
    <circle cx="120" cy="180" r="5" fill="#1e3a8a"/><text x="105" y="200" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#1e3a8a">Q (90°)</text>
    <circle cx="340" cy="180" r="5" fill="#1e3a8a"/><text x="355" y="190" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#1e3a8a">R</text>
    
    <!-- Side labels -->
    <text x="80" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af">PQ = 12 cm</text>
    <text x="245" y="95" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#dc2626">PR = 13 cm (Hyp)</text>
    <text x="230" y="200" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#059669" text-anchor="middle">QR = 5 cm (Base)</text>
    
    <!-- Angles P and R arcs -->
    <path d="M 120 55 A 25 25 0 0 1 138 48" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="140" y="65" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#2563eb">∠P</text>
    
    <path d="M 315 180 A 25 25 0 0 0 323 162" fill="none" stroke="#059669" stroke-width="2"/>
    <text x="300" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#059669">∠R</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 9: SOME APPLICATIONS OF TRIGONOMETRY
// ==========================================

// 6. Ch 9 Q4: Tower with angle of elevation 30° at 30 m distance
const svgCh9Q4 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 9.1: Height of Tower AB with 30° Elevation at 30 m Distance</div>
  <svg viewBox="0 0 460 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
    <!-- Ground line: C(80, 170) to B(360, 170) -->
    <line x1="40" y1="170" x2="410" y2="170" stroke="#334155" stroke-width="2.5"/>
    
    <!-- Tower AB: B(360, 170) to A(360, 45) -->
    <line x1="360" y1="170" x2="360" y2="45" stroke="#0f172a" stroke-width="4"/>
    <rect x="345" y="155" width="15" height="15" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    
    <!-- Line of sight AC from C(80, 170) to A(360, 45) -->
    <line x1="80" y1="170" x2="360" y2="45" stroke="#2563eb" stroke-width="2" stroke-dasharray="5,3"/>
    
    <!-- Points -->
    <circle cx="80" cy="170" r="5" fill="#2563eb"/><text x="65" y="185" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#2563eb">C</text>
    <circle cx="360" cy="170" r="5" fill="#0f172a"/><text x="375" y="185" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a">B (Foot)</text>
    <circle cx="360" cy="45" r="5" fill="#dc2626"/><text x="375" y="45" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#dc2626">A (Top)</text>
    
    <!-- Angle of elevation 30° -->
    <path d="M 125 170 A 45 45 0 0 0 118 152" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="135" y="160" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#2563eb">30°</text>
    
    <!-- Dimensions -->
    <text x="220" y="190" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155" text-anchor="middle">Distance BC = 30 m</text>
    <text x="395" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#dc2626">h = 10√3 m</text>
  </svg>
</div>`;

// 7. Ch 9 Q7: Transmission Tower on Top of 20 m Building (45° and 60° Elevation)
const svgCh9Q7 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 9.2: Transmission Tower AB on Top of 20 m Building BC</div>
  <svg viewBox="0 0 480 250" width="100%" height="250" xmlns="http://www.w3.org/2000/svg">
    <!-- Ground line: D(80, 210) to C(360, 210) -->
    <line x1="50" y1="210" x2="420" y2="210" stroke="#334155" stroke-width="2.5"/>
    
    <!-- Building BC: from C(360, 210) to B(360, 130) -->
    <rect x="350" y="130" width="20" height="80" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
    <text x="380" y="175" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#475569">Building = 20 m</text>
    
    <!-- Transmission Tower AB on top: from B(360, 130) to A(360, 30) -->
    <line x1="360" y1="130" x2="360" y2="30" stroke="#dc2626" stroke-width="3.5"/>
    <text x="380" y="85" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#dc2626">Tower = h</text>
    
    <!-- Lines of Sight from D(80, 210) -->
    <!-- To bottom of tower B(360, 130) -> angle 45° -->
    <line x1="80" y1="210" x2="360" y2="130" stroke="#059669" stroke-width="1.8" stroke-dasharray="4,2"/>
    <path d="M 130 210 A 50 50 0 0 0 120 185" fill="none" stroke="#059669" stroke-width="2"/>
    <text x="135" y="195" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#059669">45°</text>
    
    <!-- To top of tower A(360, 30) -> angle 60° -->
    <line x1="80" y1="210" x2="360" y2="30" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,2"/>
    <path d="M 150 210 A 70 70 0 0 0 135 160" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="155" y="170" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#2563eb">60°</text>
    
    <!-- Point D -->
    <circle cx="80" cy="210" r="5" fill="#0f172a"/><text x="65" y="225" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a">D</text>
    <text x="220" y="230" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155" text-anchor="middle">Ground Distance CD = 20 m</text>
  </svg>
</div>`;

// 8. Ch 9 Q13: Lighthouse 75 m with Angles of Depression 30° and 45° to Two Ships
const svgCh9Q13 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 9.3: 75 m Lighthouse AB with Depression Angles 30° &amp; 45° to Ships C and D</div>
  <svg viewBox="0 0 500 230" width="100%" height="230" xmlns="http://www.w3.org/2000/svg">
    <!-- Sea level: B(80, 180) to D(450, 180) -->
    <line x1="50" y1="180" x2="480" y2="180" stroke="#0284c7" stroke-width="2.5"/>
    
    <!-- Lighthouse AB: B(80, 180) to A(80, 40) -->
    <rect x="70" y="40" width="20" height="140" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
    <text x="50" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155">75 m</text>
    
    <!-- Horizontal Sightline from A(80, 40) -->
    <line x1="80" y1="40" x2="350" y2="40" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>
    
    <!-- Ships C(220, 180) and D(380, 180) -->
    <!-- Line of sight to Ship C (45°) -->
    <line x1="80" y1="40" x2="220" y2="180" stroke="#059669" stroke-width="2"/>
    <path d="M 130 40 A 50 50 0 0 1 115 75" fill="none" stroke="#059669" stroke-width="1.8"/>
    <text x="135" y="65" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#059669">45°</text>
    <circle cx="220" cy="180" r="5" fill="#059669"/><text x="220" y="200" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#059669" text-anchor="middle">Ship C (45°)</text>
    
    <!-- Line of sight to Ship D (30°) -->
    <line x1="80" y1="40" x2="380" y2="180" stroke="#dc2626" stroke-width="2"/>
    <path d="M 160 40 A 80 80 0 0 1 145 65" fill="none" stroke="#dc2626" stroke-width="1.8"/>
    <text x="170" y="55" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">30°</text>
    <circle cx="380" cy="180" r="5" fill="#dc2626"/><text x="380" y="200" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#dc2626" text-anchor="middle">Ship D (30°)</text>
    
    <!-- Distance between ships CD -->
    <rect x="250" y="145" width="105" height="22" rx="4" fill="#f0fdf4" stroke="#86efac"/>
    <text x="302" y="160" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#15803d" text-anchor="middle">CD = 75(√3 - 1) m</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 10: CIRCLES
// ==========================================

// 9. Ch 10 Thm 2: Tangents from External Point are Equal (PQ = PR)
const svgCh10Thm2 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Theorem 10.2: Tangents from External Point P are Equal (PQ = PR)</div>
  <svg viewBox="0 0 460 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
    <!-- Circle with center O at (160, 110), radius r = 70 -->
    <circle cx="160" cy="110" r="70" fill="#f8fafc" stroke="#2563eb" stroke-width="2.5"/>
    
    <!-- External Point P at (380, 110) -->
    <!-- Tangent Point Q (top): (195, 49) -->
    <!-- Tangent Point R (bottom): (195, 171) -->
    <line x1="380" y1="110" x2="195" y2="49" stroke="#dc2626" stroke-width="2.5"/>
    <line x1="380" y1="110" x2="195" y2="171" stroke="#dc2626" stroke-width="2.5"/>
    
    <!-- Radii OQ and OR -->
    <line x1="160" y1="110" x2="195" y2="49" stroke="#059669" stroke-width="2"/>
    <line x1="160" y1="110" x2="195" y2="171" stroke="#059669" stroke-width="2"/>
    
    <!-- Right angle markers at Q and R -->
    <path d="M 188 56 L 195 64 L 202 57" fill="none" stroke="#059669" stroke-width="1.5"/>
    <path d="M 188 164 L 195 156 L 202 163" fill="none" stroke="#059669" stroke-width="1.5"/>
    
    <!-- Common line OP -->
    <line x1="160" y1="110" x2="380" y2="110" stroke="#475569" stroke-width="1.8" stroke-dasharray="4,3"/>
    
    <!-- Labels -->
    <circle cx="160" cy="110" r="5" fill="#0f172a"/><text x="145" y="115" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a">O</text>
    <circle cx="380" cy="110" r="5" fill="#dc2626"/><text x="395" y="115" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#dc2626">P</text>
    <circle cx="195" cy="49" r="4.5" fill="#059669"/><text x="195" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#059669">Q (90°)</text>
    <circle cx="195" cy="171" r="4.5" fill="#059669"/><text x="195" y="190" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#059669">R (90°)</text>
    
    <text x="300" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#dc2626">Tangent PQ</text>
    <text x="300" y="155" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#dc2626">Tangent PR</text>
    <text x="270" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">Common OP</text>
  </svg>
</div>`;

// 10. Ch 10 Q9: Two Parallel Tangents XY and X'Y' with Third Tangent AB (∠AOB = 90°)
const svgCh10Q9 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 10.1: Parallel Tangents XY ∥ X'Y' &amp; Tangent AB Subtending ∠AOB = 90°</div>
  <svg viewBox="0 0 480 260" width="100%" height="260" xmlns="http://www.w3.org/2000/svg">
    <!-- Circle with center O at (240, 130), r = 60 -->
    <circle cx="240" cy="130" r="60" fill="#f8fafc" stroke="#2563eb" stroke-width="2.5"/>
    
    <!-- Parallel Tangent XY at top: y = 70 -->
    <line x1="60" y1="70" x2="420" y2="70" stroke="#059669" stroke-width="2.5"/>
    <text x="70" y="60" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#059669">X</text>
    <text x="410" y="60" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#059669">Y</text>
    
    <!-- Parallel Tangent X'Y' at bottom: y = 190 -->
    <line x1="60" y1="190" x2="420" y2="190" stroke="#059669" stroke-width="2.5"/>
    <text x="70" y="210" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#059669">X'</text>
    <text x="410" y="210" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#059669">Y'</text>
    
    <!-- Diameter PQ connecting points of contact: P(240, 70), Q(240, 190) -->
    <line x1="240" y1="70" x2="240" y2="190" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,2"/>
    <circle cx="240" cy="70" r="4" fill="#059669"/><text x="245" y="62" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#059669">P</text>
    <circle cx="240" cy="190" r="4" fill="#059669"/><text x="245" y="205" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#059669">Q</text>
    
    <!-- Tangent AB touching at C: A on XY (320, 70), B on X'Y' (160, 190) -->
    <!-- Point of contact C on circle: (240 + 60*cos(-36.8°)=288, 130 + 60*sin(-36.8°)=94) -->
    <line x1="340" y1="55" x2="140" y2="205" stroke="#dc2626" stroke-width="2.5"/>
    <circle cx="320" cy="70" r="4.5" fill="#dc2626"/><text x="325" y="60" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#dc2626">A</text>
    <circle cx="160" cy="190" r="4.5" fill="#dc2626"/><text x="145" y="205" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#dc2626">B</text>
    <circle cx="288" cy="94" r="4" fill="#dc2626"/><text x="300" y="100" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#dc2626">C</text>
    
    <!-- Lines OA, OB, OC to Center O(240, 130) -->
    <line x1="240" y1="130" x2="320" y2="70" stroke="#2563eb" stroke-width="2"/>
    <line x1="240" y1="130" x2="160" y2="190" stroke="#2563eb" stroke-width="2"/>
    <line x1="240" y1="130" x2="288" y2="94" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
    
    <!-- Center O -->
    <circle cx="240" cy="130" r="5" fill="#0f172a"/><text x="225" y="135" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a">O</text>
    
    <!-- ∠AOB = 90° right angle marker -->
    <path d="M 260 115 L 270 128 L 250 142" fill="none" stroke="#2563eb" stroke-width="1.8"/>
    <text x="210" y="105" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#2563eb">∠AOB = 90°</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 11: AREAS RELATED TO CIRCLES
// ==========================================

// 11. Ch 11 Q2: Sector and Segment of a Circle
const svgCh11Q2 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 11.1: Sector (Angle θ) &amp; Segment of a Circle</div>
  <svg viewBox="0 0 460 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
    <!-- Circle r = 85, center O at (230, 115) -->
    <circle cx="230" cy="115" r="85" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    
    <!-- Shaded Sector OAB: angle from 225° to 315° (central angle θ = 90°) -->
    <path d="M 230 115 L 170 55 A 85 85 0 0 1 290 55 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    
    <!-- Shaded Minor Segment between Chord AB and Arc AB -->
    <path d="M 170 55 A 85 85 0 0 1 290 55 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
    <line x1="170" y1="55" x2="290" y2="55" stroke="#ca8a04" stroke-width="2.5"/>
    
    <!-- Center O and Radii OA, OB -->
    <line x1="230" y1="115" x2="170" y2="55" stroke="#2563eb" stroke-width="2"/>
    <line x1="230" y1="115" x2="290" y2="55" stroke="#2563eb" stroke-width="2"/>
    <circle cx="230" cy="115" r="5" fill="#0f172a"/><text x="230" y="135" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a" text-anchor="middle">O</text>
    
    <!-- Vertices A and B -->
    <circle cx="170" cy="55" r="4.5" fill="#2563eb"/><text x="155" y="55" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#2563eb">A</text>
    <circle cx="290" cy="55" r="4.5" fill="#2563eb"/><text x="302" y="55" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#2563eb">B</text>
    
    <!-- Labels -->
    <text x="230" y="42" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#a16207" text-anchor="middle">Minor Segment</text>
    <text x="230" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Sector OAB (θ)</text>
    <text x="185" y="100" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#2563eb">Radius r</text>
    
    <!-- Formula box -->
    <rect x="330" y="140" width="120" height="65" rx="6" fill="#f0fdf4" stroke="#bbf7d0"/>
    <text x="390" y="160" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">Sector Area:</text>
    <text x="390" y="176" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">(θ/360°) × πr²</text>
    <text x="390" y="195" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="middle">Arc: (θ/360°) × 2πr</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 12: SURFACE AREAS AND VOLUMES
// ==========================================

// 12. Ch 12 Q3: Toy Cone Mounted on Hemisphere (r = 3.5 cm, H = 15.5 cm)
const svgCh12Q3 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 12.1: Composite Toy — Cone Mounted on Hemisphere (r = 3.5 cm, Total H = 15.5 cm)</div>
  <svg viewBox="0 0 460 250" width="100%" height="250" xmlns="http://www.w3.org/2000/svg">
    <!-- Base Hemisphere: center (230, 150), r = 60 -->
    <path d="M 170 150 A 60 60 0 0 0 290 150 Z" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
    <ellipse cx="230" cy="150" rx="60" ry="12" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,2"/>
    <text x="230" y="190" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#15803d" text-anchor="middle">Hemisphere (r = 3.5 cm)</text>
    
    <!-- Surmounted Cone: base (170, 150) to (290, 150), apex at (230, 30) -->
    <!-- Height of cone h = 12 cm, slant height l = 12.5 cm -->
    <polygon points="230,30 170,150 290,150" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
    
    <!-- Axis & dimensions -->
    <line x1="230" y1="30" x2="230" y2="150" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,2"/>
    <line x1="230" y1="150" x2="290" y2="150" stroke="#059669" stroke-width="2"/>
    <text x="260" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#059669" text-anchor="middle">r = 3.5 cm</text>
    
    <!-- Height labels on left -->
    <line x1="140" y1="30" x2="140" y2="150" stroke="#2563eb" stroke-width="1.5"/>
    <text x="130" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#2563eb" text-anchor="end">h = 12 cm</text>
    
    <!-- Total height bracket on right -->
    <line x1="330" y1="30" x2="330" y2="210" stroke="#dc2626" stroke-width="2"/>
    <line x1="320" y1="30" x2="340" y2="30" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="320" y1="210" x2="340" y2="210" stroke="#dc2626" stroke-width="1.5"/>
    <text x="345" y="125" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626">Total H = 15.5 cm</text>
    
    <!-- Slant height label -->
    <text x="270" y="85" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af">l = 12.5 cm</text>
  </svg>
</div>`;

// 13. Ch 12 Q16: Medicine Capsule (Cylinder + 2 Hemispherical Ends)
const svgCh12Q16 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 12.2: Medicine Capsule — Cylinder (h = 9 mm) + 2 Hemispheres (r = 2.5 mm)</div>
  <svg viewBox="0 0 500 170" width="100%" height="170" xmlns="http://www.w3.org/2000/svg">
    <!-- Capsule outline: Center cylinder from x=160 to x=340, width=180, height=70 (y=45 to 115) -->
    <!-- Left hemisphere: arc from (160, 45) to (160, 115) -->
    <!-- Right hemisphere: arc from (340, 115) to (340, 45) -->
    <path d="M 160 45 L 340 45 A 35 35 0 0 1 340 115 L 160 115 A 35 35 0 0 1 160 45 Z" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
    
    <!-- Dividing seams for hemispheres -->
    <path d="M 160 45 A 10 35 0 0 1 160 115" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,2" fill="none"/>
    <path d="M 340 45 A 10 35 0 0 1 340 115" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,2" fill="none"/>
    
    <!-- Dimension: Diameter = 5 mm -->
    <line x1="110" y1="45" x2="110" y2="115" stroke="#dc2626" stroke-width="1.8"/>
    <text x="100" y="83" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626" text-anchor="end">d = 5 mm</text>
    <text x="100" y="97" font-family="system-ui, sans-serif" font-size="10" fill="#dc2626" text-anchor="end">(r = 2.5 mm)</text>
    
    <!-- Dimension: Cylinder length = 9 mm -->
    <line x1="160" y1="130" x2="340" y2="130" stroke="#059669" stroke-width="2"/>
    <line x1="160" y1="125" x2="160" y2="135" stroke="#059669" stroke-width="1.5"/>
    <line x1="340" y1="125" x2="340" y2="135" stroke="#059669" stroke-width="1.5"/>
    <text x="250" y="145" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#059669" text-anchor="middle">Cylinder Length = 9 mm</text>
    
    <!-- Dimension: Total length = 14 mm -->
    <line x1="125" y1="25" x2="375" y2="25" stroke="#1e293b" stroke-width="2"/>
    <line x1="125" y1="20" x2="125" y2="30" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="375" y1="20" x2="375" y2="30" stroke="#1e293b" stroke-width="1.5"/>
    <text x="250" y="18" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">Total Capsule Length = 14 mm</text>
  </svg>
</div>`;

// 14. Ch 12 Q17: Cylinder with Hollow Conical Cavity
const svgCh12Q17 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 12.3: Solid Cylinder with Conical Cavity Scooped Out (h = 2.4 cm, d = 1.4 cm)</div>
  <svg viewBox="0 0 460 230" width="100%" height="230" xmlns="http://www.w3.org/2000/svg">
    <!-- Cylinder outer shape: base at y=180, top at y=40, width=120 (x=170 to 290) -->
    <!-- Bottom solid flat circle base -->
    <ellipse cx="230" cy="180" rx="60" ry="14" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
    <!-- Cylinder side walls -->
    <line x1="170" y1="40" x2="170" y2="180" stroke="#1e293b" stroke-width="2.5"/>
    <line x1="290" y1="40" x2="290" y2="180" stroke="#1e293b" stroke-width="2.5"/>
    <!-- Top opening rim -->
    <ellipse cx="230" cy="40" rx="60" ry="14" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
    
    <!-- Hollow conical cavity: apex at center of base (230, 180), opening rim at top (170, 40) to (290, 40) -->
    <polygon points="170,40 290,40 230,180" fill="#fee2e2" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/>
    <text x="230" y="110" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626" text-anchor="middle">Hollow Conical Cavity</text>
    
    <!-- Dimensions -->
    <line x1="130" y1="40" x2="130" y2="180" stroke="#2563eb" stroke-width="2"/>
    <text x="120" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#2563eb" text-anchor="end">h = 2.4 cm</text>
    
    <line x1="170" y1="205" x2="290" y2="205" stroke="#059669" stroke-width="2"/>
    <text x="230" y="222" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#059669" text-anchor="middle">d = 1.4 cm (r = 0.7 cm)</text>
    
    <!-- Slant height label -->
    <text x="280" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b91c1c">l = 2.5 cm</text>
  </svg>
</div>`;

// ==========================================
// CHAPTER 2: POLYNOMIALS
// ==========================================

// 15. Ch 2 Q1: Zeroes of Quadratic Polynomial Parabola
const svgCh2Q1 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 2.1: Geometrical Meaning of Zeroes of Quadratic Polynomial (y = ax² + bx + c)</div>
  <svg viewBox="0 0 520 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
    <!-- Case 1: Cuts X-axis at 2 points (2 Zeroes) -->
    <g transform="translate(10, 10)">
      <rect x="0" y="0" width="155" height="155" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
      <line x1="15" y1="90" x2="140" y2="90" stroke="#334155" stroke-width="1.8"/>
      <line x1="77" y1="15" x2="77" y2="140" stroke="#334155" stroke-width="1.5"/>
      <!-- U-shaped parabola cutting at x=45 and x=110 -->
      <path d="M 35 30 Q 77.5 155 120 30" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      <circle cx="51" cy="90" r="4" fill="#dc2626"/>
      <circle cx="104" cy="90" r="4" fill="#dc2626"/>
      <text x="77" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">2 Real Zeroes</text>
    </g>

    <!-- Case 2: Touches X-axis at 1 point (1 Zero / Equal Roots) -->
    <g transform="translate(180, 10)">
      <rect x="0" y="0" width="155" height="155" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
      <line x1="15" y1="90" x2="140" y2="90" stroke="#334155" stroke-width="1.8"/>
      <line x1="77" y1="15" x2="77" y2="140" stroke="#334155" stroke-width="1.5"/>
      <!-- Parabola vertex exactly on X-axis (77, 90) -->
      <path d="M 40 30 Q 77.5 90 115 30" fill="none" stroke="#059669" stroke-width="2.5"/>
      <circle cx="77.5" cy="90" r="4.5" fill="#dc2626"/>
      <text x="77" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#047857" text-anchor="middle">1 Real Zero (Equal)</text>
    </g>

    <!-- Case 3: Does not cut X-axis (0 Real Zeroes) -->
    <g transform="translate(350, 10)">
      <rect x="0" y="0" width="155" height="155" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
      <line x1="15" y1="100" x2="140" y2="100" stroke="#334155" stroke-width="1.8"/>
      <line x1="77" y1="15" x2="77" y2="140" stroke="#334155" stroke-width="1.5"/>
      <!-- Parabola entirely above X-axis -->
      <path d="M 40 25 Q 77.5 70 115 25" fill="none" stroke="#d97706" stroke-width="2.5"/>
      <text x="77" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">No Real Zeroes</text>
    </g>
  </svg>
</div>`;

// ==========================================
// CHAPTER 3: PAIR OF LINEAR EQUATIONS
// ==========================================

// 16. Ch 3 Q2: Graphical Nature of Linear Equations
const svgCh3Q2 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 3.1: Graphical Behavior of Pair of Linear Equations</div>
  <svg viewBox="0 0 520 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
    <!-- Panel 1: Intersecting Lines (Unique Solution) -->
    <g transform="translate(10, 10)">
      <rect x="0" y="0" width="155" height="155" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
      <line x1="20" y1="120" x2="135" y2="35" stroke="#2563eb" stroke-width="2.5"/>
      <line x1="20" y1="40" x2="135" y2="115" stroke="#dc2626" stroke-width="2.5"/>
      <circle cx="77.5" cy="77.5" r="4.5" fill="#0f172a"/>
      <text x="77" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e40af" text-anchor="middle">Intersecting</text>
      <text x="77" y="150" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="middle">Unique (1 Solution)</text>
    </g>

    <!-- Panel 2: Coincident Lines (Infinitely Many Solutions) -->
    <g transform="translate(180, 10)">
      <rect x="0" y="0" width="155" height="155" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
      <line x1="20" y1="120" x2="135" y2="35" stroke="#059669" stroke-width="4"/>
      <line x1="20" y1="120" x2="135" y2="35" stroke="#fde047" stroke-width="1.8" stroke-dasharray="6,4"/>
      <text x="77" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#047857" text-anchor="middle">Coincident</text>
      <text x="77" y="150" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="middle">Infinitely Many</text>
    </g>

    <!-- Panel 3: Parallel Lines (No Solution) -->
    <g transform="translate(350, 10)">
      <rect x="0" y="0" width="155" height="155" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
      <line x1="20" y1="95" x2="135" y2="25" stroke="#7c3aed" stroke-width="2.5"/>
      <line x1="20" y1="130" x2="135" y2="60" stroke="#7c3aed" stroke-width="2.5"/>
      <text x="77" y="135" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#6d28d9" text-anchor="middle">Parallel Lines</text>
      <text x="77" y="150" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="middle">No Solution (Inconsistent)</text>
    </g>
  </svg>
</div>`;

// ==========================================
// CHAPTER 7: COORDINATE GEOMETRY
// ==========================================

// 17. Ch 7 Q1 / Q6: Distance & Section Formula on Cartesian Grid
const svgCh7Q1 = `<div class="math-diagram-wrap" style="${wrapStyle}">
  <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Figure 7.1: Coordinate Geometry — Distance &amp; Section Formula P(x, y)</div>
  <svg viewBox="0 0 460 200" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
    <!-- Gridlines -->
    <line x1="60" y1="160" x2="420" y2="160" stroke="#334155" stroke-width="2"/>
    <line x1="60" y1="20" x2="60" y2="160" stroke="#334155" stroke-width="2"/>
    <text x="425" y="165" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155">X</text>
    <text x="60" y="15" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155" text-anchor="middle">Y</text>
    
    <!-- Segment AB: A(100, 130) to B(380, 50) -->
    <line x1="100" y1="130" x2="380" y2="50" stroke="#2563eb" stroke-width="2.5"/>
    
    <!-- Division Point P dividing in ratio m1 : m2 (at x=220, y=96) -->
    <circle cx="220" cy="96" r="5" fill="#dc2626"/>
    <text x="220" y="85" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#dc2626" text-anchor="middle">P(x, y)</text>
    <text x="155" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#047857">m₁</text>
    <text x="300" y="65" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#047857">m₂</text>
    
    <!-- Points A and B -->
    <circle cx="100" cy="130" r="5" fill="#1e3a8a"/><text x="100" y="150" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e3a8a" text-anchor="middle">A(x₁, y₁)</text>
    <circle cx="380" cy="50" r="5" fill="#1e3a8a"/><text x="380" y="40" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#1e3a8a" text-anchor="middle">B(x₂, y₂)</text>
    
    <!-- Distance right-triangle construction -->
    <line x1="100" y1="130" x2="380" y2="130" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
    <line x1="380" y1="130" x2="380" y2="50" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="240" y="145" font-family="system-ui, sans-serif" font-size="10.5" fill="#64748b" text-anchor="middle">Δx = x₂ - x₁</text>
    <text x="400" y="95" font-family="system-ui, sans-serif" font-size="10.5" fill="#64748b">Δy = y₂ - y₁</text>
    
    <text x="250" y="185" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1d4ed8" text-anchor="middle">Distance d = √[(x₂ - x₁)² + (y₂ - y₁)²]</text>
  </svg>
</div>`;


// ==========================================
// ADDITIONAL SVG DIAGRAMS FOR C10M
// ==========================================

// 18. Ch 12 Q1: Two Cubes Joined End-to-End
const svgCh12Q1_Cubes = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;

// 19. Ch 9 Q2: Broken Tree Model
const svgCh9Q2_BrokenTree = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;

// 20. Ch 10 Thm 1: Radius Perpendicular to Tangent
const svgCh10Thm1 = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;

// 21. Ch 10 Q12: Triangle Circumscribing Incircle
const svgCh10Q12 = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;

// 22. Ch 10 Q14: Tangents TP and TQ Subtending Angles
const svgCh10Q14 = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;

// 23. Ch 6 Q13: Triangle TQR with Transversal PS
const svgCh6Q13 = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;

// 24. Ch 6 Q18: Converse BPT with Interior Point O
const svgCh6Q18 = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;

// 25. Ch 6 Q23: Triangle ABC with Congruent ΔABE ≅ ΔACD
const svgCh6Q23 = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;

// 26. Ch 6 Q27: Isosceles Triangle with Altitudes AD and EF
const svgCh6Q27 = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;

// 27. Ch 11 Q2: Quadrant of Circle
const svgCh11Q2_Quadrant = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;


// ==========================================
// ADDITIONAL SVG DIAGRAMS FOR C10M (CH 4, 5, 13, 14)
// ==========================================

// 28. Ch 14 Q7/Q19: Comprehensive Deck of 52 Playing Cards Architecture
const svgCh14Q7_DeckOfCards = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;

// 29. Ch 14 Q27: Two Dice 36 Outcomes Matrix
const svgCh14Q27_TwoDiceGrid = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;

// 30. Ch 4: Nature of Roots via Discriminant D = b^2 - 4ac
const svgCh4_Discriminant = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;

// 31. Ch 5: Arithmetic Progression Incremental Staircase
const svgCh5_APStaircase = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;

// 32. Ch 13: Empirical Relationship Between Mean, Median, and Mode
const svgCh13_EmpiricalFormula = `<div class="math-diagram-wrap" style="${wrapStyle}">
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
</div>`;

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
