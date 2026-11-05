// scripts/builders/gen-c12p-ch2.js
// Class 12 Physics Chapter 2: Electrostatic Potential and Capacitance (स्थिरवैद्युत विभव तथा धारिता)
// NCERT Rationalised 2026–27: All 25 Textbook Exercises (2.1 to 2.25) Verbatim with CBSE Rubrics
const { createQCard, saveChapter } = require('./c12p-helper');

const chNum = 2;
const chTitle = 'Electrostatic Potential and Capacitance (स्थिरवैद्युत विभव तथा धारिता)';
const exTitle = 'NCERT Chapter 2 Exercises: Electric Potential, Equipotential Surfaces, Capacitors & Energy Loss (2.1 to 2.25)';

const svgDiagram = `
<div style="background:linear-gradient(135deg, #f0fdf4, #dcfce7); border:1px solid #bbf7d0; border-radius:12px; padding:20px; margin-bottom:24px;">
  <h3 style="font-size:1.05rem; color:#166534; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M6 3v18M18 3v18M2 12h4M18 12h4"/></svg>
    Electrostatic Potential &amp; Capacitance: Formulas, Dielectrics &amp; Circuit Laws
  </h3>
  <svg viewBox="0 0 850 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
    <!-- Box 1: Electric Potential -->
    <rect x="15" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
    <text x="110" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#14532d">Electric Potential</text>
    <text x="110" y="70" text-anchor="middle" font-size="11" fill="#334155">V = kq / r</text>
    <text x="110" y="94" text-anchor="middle" font-size="10" fill="#64748b">• Dipole: V = kp cos θ / r²</text>
    <text x="110" y="112" text-anchor="middle" font-size="10" fill="#64748b">• Equipotential: E ⊥ surface</text>

    <!-- Box 2: Parallel Plate Capacitor -->
    <rect x="225" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="320" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">Capacitance</text>
    <text x="320" y="72" text-anchor="middle" font-size="11" fill="#334155">C = ε₀A / d</text>
    <text x="320" y="96" text-anchor="middle" font-size="10" fill="#64748b">• With Dielectric: C = K · C₀</text>
    <text x="320" y="114" text-anchor="middle" font-size="10" fill="#64748b">• Stored Energy: U = ½CV² = Q²/2C</text>

    <!-- Box 3: Combinations -->
    <rect x="435" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#9333ea" stroke-width="2"/>
    <text x="530" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#6b21a8">Series &amp; Parallel</text>
    <text x="530" y="72" text-anchor="middle" font-size="11" fill="#334155">Equivalent Rules</text>
    <text x="530" y="96" text-anchor="middle" font-size="10" fill="#64748b">• Series: 1/C = 1/C₁ + 1/C₂ (Q same)</text>
    <text x="530" y="114" text-anchor="middle" font-size="10" fill="#64748b">• Parallel: C = C₁ + C₂ (V same)</text>

    <!-- Box 4: Common Potential & Loss -->
    <rect x="645" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#ea580c" stroke-width="2"/>
    <text x="740" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#c2410c">Charge Sharing</text>
    <text x="740" y="72" text-anchor="middle" font-size="11" fill="#334155">Common Potential (V)</text>
    <text x="740" y="96" text-anchor="middle" font-size="10" fill="#64748b">• V = (C₁V₁ + C₂V₂) / (C₁ + C₂)</text>
    <text x="740" y="114" text-anchor="middle" font-size="10" fill="#64748b">• ΔU = ½ C₁C₂(V₁ - V₂)² / (C₁ + C₂)</text>
  </svg>
</div>`;

const questions = [];

// Exercise 2.1
questions.push(createQCard(
  'c12p-ch2-q1', 'Exercise 2.1', 'NCERT Exercise',
  'Two charges $5 \\times 10^{-8}\\text{ C}$ and $-3 \\times 10^{-8}\\text{ C}$ are located $16\\text{ cm}$ apart. At what point(s) on the line joining the two charges is the electric potential zero? Take the potential at infinity to be zero.',
  `<div class="step">
    <b>Given Data:</b><br>
    $q_1 = 5 \\times 10^{-8}\\text{ C}$ (at point $A$)<br>
    $q_2 = -3 \\times 10^{-8}\\text{ C}$ (at point $B$)<br>
    Distance $d = 16\\text{ cm} = 0.16\\text{ m}$<br>
    Electrostatic constant $k = \\frac{1}{4\\pi\\varepsilon_0} = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$<br><br>
    The net potential $V$ at any point $P$ at distance $r_1$ from $q_1$ and $r_2$ from $q_2$ is:
    $$V = \\frac{k q_1}{r_1} + \\frac{k q_2}{r_2} = 0 \\implies \\frac{q_1}{r_1} = -\\frac{q_2}{r_2} = \\frac{|q_2|}{r_2}$$<br>
    <b>Case 1: Point $P$ lies between $A$ and $B$:</b><br>
    Let $P$ be at a distance $x$ from $q_1$. Then distance from $q_2$ is $(0.16 - x)$:
    $$\\frac{5 \\times 10^{-8}}{x} = \\frac{3 \\times 10^{-8}}{0.16 - x} \\implies 5(0.16 - x) = 3x$$
    $$0.80 - 5x = 3x \\implies 8x = 0.80 \\implies \\mathbf{x = 0.10\\text{ m} = 10\\text{ cm}}$$
    Thus, potential is zero at a point <b>$10\\text{ cm}$ from $q_1$</b> (lying between the two charges).<br><br>
    <b>Case 2: Point $P$ lies outside the segment $AB$ (closer to the smaller magnitude charge $q_2$):</b><br>
    Let $P$ be at a distance $x$ from $q_1$. Distance from $q_2$ is $(x - 0.16)$:
    $$\\frac{5 \\times 10^{-8}}{x} = \\frac{3 \\times 10^{-8}}{x - 0.16} \\implies 5(x - 0.16) = 3x$$
    $$5x - 0.80 = 3x \\implies 2x = 0.80 \\implies \\mathbf{x = 0.40\\text{ m} = 40\\text{ cm}}$$
    Thus, potential is also zero at a point <b>$40\\text{ cm}$ from $q_1$</b> on the side of $q_2$.
  </div>`,
  '3 Marks',
  [
    ['Case 1 (internal point): Setting V = 0 and solving x = 10 cm from q₁', '1.5 Marks'],
    ['Case 2 (external point): Setting V = 0 and solving x = 40 cm from q₁', '1.5 Marks']
  ]
));

// Exercise 2.2
questions.push(createQCard(
  'c12p-ch2-q2', 'Exercise 2.2', 'NCERT Exercise',
  'A regular hexagon of side $10\\text{ cm}$ has a charge $5\\ \\mu\\text{C}$ at each of its vertices. Calculate the potential at the centre of the hexagon.',
  `<div class="step">
    <b>Geometry of a Regular Hexagon:</b><br>
    A regular hexagon consists of 6 equilateral triangles meeting at the centre $O$.<br>
    Therefore, the distance of the centre $O$ from each of the 6 vertices is equal to the side of the hexagon:
    $$r = 10\\text{ cm} = 0.10\\text{ m}$$
    Charge at each vertex, $q = 5\\ \\mu\\text{C} = 5 \\times 10^{-6}\\text{ C}$.<br><br>
    <b>Net Potential at the Centre:</b><br>
    Since electric potential is a scalar quantity, the net potential is the algebraic sum of the potentials due to each of the 6 charges:
    $$V = 6 \\times \\left(\\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r}\\right)$$<br>
    <b>Calculation:</b>
    $$V = 6 \\times \\frac{(9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2) \\times (5 \\times 10^{-6}\\text{ C})}{0.10\\text{ m}}$$
    $$V = 6 \\times \\frac{45 \\times 10^3}{0.10} = 6 \\times 4.5 \\times 10^5 = \\mathbf{2.7 \\times 10^6\\text{ V}}$$
    The electric potential at the centre of the hexagon is <b>$2.7 \\times 10^6\\text{ V}$ ($2.7\\text{ MV}$)</b>.
  </div>`,
  '2 Marks',
  [
    ['Identification that distance from centre to each vertex equals side length (r = 0.1 m)', '0.5 Mark'],
    ['Scalar superposition principle: V_net = 6 · (kq/r)', '0.5 Mark'],
    ['Correct computation: V = 2.7 × 10⁶ V', '1 Mark']
  ]
));

// Exercise 2.3
questions.push(createQCard(
  'c12p-ch2-q3', 'Exercise 2.3', 'NCERT Exercise',
  'Two charges $2\\ \\mu\\text{C}$ and $-2\\ \\mu\\text{C}$ are placed at points $A$ and $B$, $6\\text{ cm}$ apart.<br>(a) Identify an equipotential surface of the system.<br>(b) What is the direction of the electric field at every point on this surface?',
  `<div class="step">
    <b>(a) Identification of an Equipotential Surface:</b><br>
    The system forms an electric dipole with charges $+q$ and $-q$ separated by $2a = 6\\text{ cm}$.<br>
    The electric potential at any point equidistant from $+q$ and $-q$ is:
    $$V = \\frac{k q}{r} + \\frac{k (-q)}{r} = 0$$
    The locus of all points equidistant from $A$ and $B$ is the <b>equatorial plane</b> bisecting the line joining $A$ and $B$.<br>
    Therefore, the <b>plane perpendicular to the line $AB$ and passing through the midpoint $O$ of $AB$</b> is an equipotential surface where the potential is everywhere zero ($V = 0\\text{ V}$).<br><br>
    <b>(b) Direction of the Electric Field on this Surface:</b><br>
    By definition, the electric field is always perpendicular (normal) to an equipotential surface at every point.<br>
    For an electric dipole, the electric field lines on the equatorial plane point from the positive charge towards the negative charge, parallel to the line $AB$.<br>
    Therefore, the electric field at every point on this plane is <b>perpendicular to the plane and directed parallel to the axis $AB$, from $A$ ($+2\\ \\mu\\text{C}$) to $B$ ($-2\\ \\mu\\text{C}$)</b>.
  </div>`,
  '2 Marks',
  [
    ['(a) Identification of equatorial plane passing through midpoint O perpendicular to AB (V = 0)', '1 Mark'],
    ['(b) Electric field direction: perpendicular to the surface, directed from A to B', '1 Mark']
  ]
));

// Exercise 2.4
questions.push(createQCard(
  'c12p-ch2-q4', 'Exercise 2.4', 'NCERT Exercise',
  'A spherical conductor of radius $12\\text{ cm}$ has a charge of $1.6 \\times 10^{-7}\\text{ C}$ distributed uniformly on its surface. What is the electric field:<br>(a) inside the sphere,<br>(b) just outside the sphere,<br>(c) at a point $18\\text{ cm}$ from the centre of the sphere?',
  `<div class="step">
    <b>Given Data:</b><br>
    Radius of spherical conductor, $R = 12\\text{ cm} = 0.12\\text{ m}$<br>
    Total charge on surface, $q = 1.6 \\times 10^{-7}\\text{ C}$<br>
    $k = \\frac{1}{4\\pi\\varepsilon_0} = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$<br><br>
    <b>(a) Inside the sphere ($r < R$):</b><br>
    In electrostatic equilibrium, all excess charge resides entirely on the outer surface of a conductor, and no charge is enclosed within any internal Gaussian surface.<br>
    By Gauss\'s law:
    $$\\mathbf{E = 0\\text{ N/C}}$$
    The electric field everywhere inside the conductor is zero.<br><br>
    <b>(b) Just outside the sphere ($r = R = 0.12\\text{ m}$):</b><br>
    $$E = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{R^2} = \\frac{(9 \\times 10^9) \\times (1.6 \\times 10^{-7})}{(0.12)^2}$$
    $$E = \\frac{1.44 \\times 10^3}{1.44 \\times 10^{-2}} = \\mathbf{10^5\\text{ N/C}}$$
    (Directed radially outwards).<br><br>
    <b>(c) At a point $r = 18\\text{ cm} = 0.18\\text{ m}$ from the centre:</b><br>
    $$E = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r^2} = \\frac{(9 \\times 10^9) \\times (1.6 \\times 10^{-7})}{(0.18)^2}$$
    $$E = \\frac{1.44 \\times 10^3}{3.24 \\times 10^{-2}} = \\mathbf{4.44 \\times 10^4\\text{ N/C}}$$
    (Directed radially outwards).
  </div>`,
  '3 Marks',
  [
    ['(a) E = 0 inside conductor (electrostatic shielding)', '1 Mark'],
    ['(b) E = 10⁵ N/C just outside surface', '1 Mark'],
    ['(c) E = 4.44 × 10⁴ N/C at r = 18 cm', '1 Mark']
  ]
));

// Exercise 2.5
questions.push(createQCard(
  'c12p-ch2-q5', 'Exercise 2.5', 'NCERT Exercise',
  'A parallel plate capacitor with air between the plates has a capacitance of $8\\text{ pF}$ ($1\\text{ pF} = 10^{-12}\\text{ F}$). What will be the capacitance if the distance between the plates is reduced by half, and the space between them is filled with a substance of dielectric constant $6$?',
  `<div class="step">
    <b>Initial Capacitance (Air):</b><br>
    $$C_0 = \\frac{\\varepsilon_0 A}{d} = 8\\text{ pF}$$<br>
    <b>Modified Parameters:</b><br>
    Distance between plates is halved: $d\' = \\frac{d}{2}$<br>
    Dielectric medium of constant $K = 6$ completely fills the space.<br><br>
    <b>New Capacitance ($C\'$):</b><br>
    $$C\' = \\frac{K \\varepsilon_0 A}{d\'} = \\frac{K \\varepsilon_0 A}{d / 2} = 2K \\left(\\frac{\\varepsilon_0 A}{d}\\right) = 2K C_0$$<br>
    <b>Calculation:</b>
    $$C\' = 2 \\times 6 \\times (8\\text{ pF}) = 12 \\times 8\\text{ pF} = \\mathbf{96\\text{ pF}}$$
    The new capacitance will be <b>$96\\text{ pF}$ ($9.6 \\times 10^{-11}\\text{ F}$)</b>.
  </div>`,
  '2 Marks',
  [
    ['Formula derivation: C\' = 2K C₀', '1 Mark'],
    ['Correct computation: C\' = 96 pF', '1 Mark']
  ]
));

// Exercise 2.6
questions.push(createQCard(
  'c12p-ch2-q6', 'Exercise 2.6', 'NCERT Exercise',
  'Three capacitors each of capacitance $9\\text{ pF}$ are connected in series.<br>(a) What is the total capacitance of the combination?<br>(b) What is the potential difference across each capacitor if the combination is connected to a $120\\text{ V}$ supply?',
  `<div class="step">
    <b>Given Data:</b><br>
    $C_1 = C_2 = C_3 = 9\\text{ pF}$<br>
    Supply voltage, $V = 120\\text{ V}$<br><br>
    <b>(a) Total Capacitance in Series ($C_{\\text{eq}}$):</b><br>
    $$\\frac{1}{C_{\\text{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3} = \\frac{1}{9} + \\frac{1}{9} + \\frac{1}{9} = \\frac{3}{9} = \\frac{1}{3\\text{ pF}}$$
    $$C_{\\text{eq}} = \\mathbf{3\\text{ pF} = 3 \\times 10^{-12}\\text{ F}}$$<br><br>
    <b>(b) Potential Difference across Each Capacitor:</b><br>
    In a series combination, the same charge $Q$ accumulates on each capacitor:
    $$Q = C_{\\text{eq}} V = (3 \\times 10^{-12}\\text{ F}) \\times 120\\text{ V} = 3.6 \\times 10^{-10}\\text{ C}$$
    Since all three capacitors are identical in capacitance ($C = 9\\text{ pF}$), the total voltage drops equally across each:
    $$V_1 = V_2 = V_3 = \\frac{V}{3} = \\frac{120\\text{ V}}{3} = \\mathbf{40\\text{ V}}$$
    (Alternatively: $V_i = \\frac{Q}{C_i} = \\frac{3.6 \\times 10^{-10}}{9 \\times 10^{-12}} = 40\\text{ V}$).
  </div>`,
  '2 Marks',
  [
    ['(a) Equivalent series capacitance: C_eq = 3 pF', '1 Mark'],
    ['(b) Equal voltage drop calculation: V_i = 120/3 = 40 V across each', '1 Mark']
  ]
));

// Exercise 2.7
questions.push(createQCard(
  'c12p-ch2-q7', 'Exercise 2.7', 'NCERT Exercise',
  'Three capacitors of capacitances $2\\text{ pF}$, $3\\text{ pF}$ and $4\\text{ pF}$ are connected in parallel.<br>(a) What is the total capacitance of the combination?<br>(b) Determine the charge on each capacitor if the combination is connected to a $100\\text{ V}$ supply.',
  `<div class="step">
    <b>Given Data:</b><br>
    $C_1 = 2\\text{ pF}$, $C_2 = 3\\text{ pF}$, $C_3 = 4\\text{ pF}$<br>
    Supply voltage, $V = 100\\text{ V}$<br><br>
    <b>(a) Total Capacitance in Parallel ($C_{\\text{eq}}$):</b><br>
    $$C_{\\text{eq}} = C_1 + C_2 + C_3 = 2 + 3 + 4 = \\mathbf{9\\text{ pF} = 9 \\times 10^{-12}\\text{ F}}$$<br><br>
    <b>(b) Charge on Each Capacitor:</b><br>
    In a parallel circuit, the full supply voltage appears across each capacitor ($V = 100\\text{ V}$):
    <ul style="margin-left:20px; line-height:1.75;">
      <li>$Q_1 = C_1 V = (2 \\times 10^{-12}\\text{ F}) \\times 100\\text{ V} = \\mathbf{200\\text{ pC} = 2 \\times 10^{-10}\\text{ C}}$</li>
      <li>$Q_2 = C_2 V = (3 \\times 10^{-12}\\text{ F}) \\times 100\\text{ V} = \\mathbf{300\\text{ pC} = 3 \\times 10^{-10}\\text{ C}}$</li>
      <li>$Q_3 = C_3 V = (4 \\times 10^{-12}\\text{ F}) \\times 100\\text{ V} = \\mathbf{400\\text{ pC} = 4 \\times 10^{-10}\\text{ C}}$</li>
    </ul>
    Total charge drawn from the battery: $Q = Q_1 + Q_2 + Q_3 = 900\\text{ pC}$.
  </div>`,
  '2 Marks',
  [
    ['(a) Parallel capacitance: C_eq = 9 pF', '0.5 Mark'],
    ['(b) Calculation of individual charges: Q₁ = 200 pC, Q₂ = 300 pC, Q₃ = 400 pC', '1.5 Marks']
  ]
));

// Exercise 2.8
questions.push(createQCard(
  'c12p-ch2-q8', 'Exercise 2.8', 'NCERT Exercise',
  'In a parallel plate capacitor with air between the plates, each plate has an area of $6 \\times 10^{-3}\\text{ m}^2$ and the distance between the plates is $3\\text{ mm}$. Calculate the capacitance of the capacitor. If this capacitor is connected to a $100\\text{ V}$ supply, what is the charge on each plate of the capacitor?',
  `<div class="step">
    <b>Given Data:</b><br>
    Plate area, $A = 6 \\times 10^{-3}\\text{ m}^2$<br>
    Plate separation, $d = 3\\text{ mm} = 3 \\times 10^{-3}\\text{ m}$<br>
    Permittivity of vacuum, $\\varepsilon_0 = 8.854 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)$<br>
    Potential difference, $V = 100\\text{ V}$<br><br>
    <b>1. Capacitance ($C$):</b><br>
    $$C = \\frac{\\varepsilon_0 A}{d} = \\frac{(8.854 \\times 10^{-12}) \\times (6 \\times 10^{-3})}{3 \\times 10^{-3}}$$
    $$C = 8.854 \\times 10^{-12} \\times 2 = \\mathbf{17.71 \\times 10^{-12}\\text{ F} = 17.71\\text{ pF} \\approx 18\\text{ pF}}$$<br><br>
    <b>2. Charge on Each Plate ($Q$):</b><br>
    $$Q = C V = (17.71 \\times 10^{-12}\\text{ F}) \\times 100\\text{ V} = \\mathbf{1.771 \\times 10^{-9}\\text{ C} = 1.77\\text{ nC}}$$
    One plate carries $+1.77\\text{ nC}$ and the other carries $-1.77\\text{ nC}$.
  </div>`,
  '2 Marks',
  [
    ['Capacitance calculation: C = 17.71 pF', '1 Mark'],
    ['Charge calculation: Q = CV = 1.77 × 10⁻⁹ C (1.77 nC)', '1 Mark']
  ]
));

// Exercise 2.9
questions.push(createQCard(
  'c12p-ch2-q9', 'Exercise 2.9', 'NCERT Exercise',
  'Explain what would happen if in the capacitor given in Exercise 2.8, a $3\\text{ mm}$ thick mica sheet (of dielectric constant $= 6$) were inserted between the plates,<br>(a) while the voltage supply remained connected.<br>(b) after the supply was disconnected.',
  `<div class="step">
    From Exercise 2.8: $C_0 = 17.71\\text{ pF}$, $V_0 = 100\\text{ V}$, $Q_0 = 1.771\\text{ nC}$, $K = 6$.<br>
    When the $3\\text{ mm}$ mica sheet completely fills the space between the plates, the capacitance increases by factor $K$:
    $$C = K C_0 = 6 \\times 17.71\\text{ pF} = \\mathbf{106.26\\text{ pF}}$$<br><br>
    <b>(a) While voltage supply remains connected:</b><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Voltage ($V$):</strong> The battery maintains the potential difference constant: $\\mathbf{V = V_0 = 100\\text{ V}}$.</li>
      <li><strong>Charge ($Q$):</strong> The battery supplies extra charge to the plates:
      $$Q = C V = (106.26 \\times 10^{-12}\\text{ F}) \\times 100\\text{ V} = K Q_0 = 6 \\times 1.771\\text{ nC} = \\mathbf{10.63\\text{ nC}}$$</li>
    </ul><br>
    <b>(b) After the supply was disconnected:</b><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Charge ($Q$):</strong> Since the battery is disconnected, charge has no path to escape and remains conserved: $\\mathbf{Q = Q_0 = 1.771\\text{ nC}}$.</li>
      <li><strong>Potential Difference ($V$):</strong> The potential difference decreases by factor $K$:
      $$V = \\frac{Q}{C} = \\frac{V_0}{K} = \\frac{100\\text{ V}}{6} = \\mathbf{16.67\\text{ V}}$$</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['(a) Battery connected: V = 100 V remains constant, Q increases to 10.63 nC', '1.5 Marks'],
    ['(b) Battery disconnected: Q = 1.77 nC remains conserved, V decreases to 16.67 V', '1.5 Marks']
  ]
));

// Exercise 2.10
questions.push(createQCard(
  'c12p-ch2-q10', 'Exercise 2.10', 'NCERT Exercise',
  'A $12\\text{ pF}$ capacitor is connected to a $50\\text{ V}$ battery. How much electrostatic energy is stored in the capacitor?',
  `<div class="step">
    <b>Given Data:</b><br>
    Capacitance, $C = 12\\text{ pF} = 12 \\times 10^{-12}\\text{ F}$<br>
    Potential difference, $V = 50\\text{ V}$<br><br>
    <b>Formula for Stored Electrostatic Energy ($U$):</b>
    $$U = \\frac{1}{2} C V^2$$<br>
    <b>Calculation:</b>
    $$U = \\frac{1}{2} \\times (12 \\times 10^{-12}\\text{ F}) \\times (50\\text{ V})^2$$
    $$U = 6 \\times 10^{-12} \\times 2500 = 15000 \\times 10^{-12} = \\mathbf{1.5 \\times 10^{-8}\\text{ J}}$$
    The electrostatic energy stored in the capacitor is <b>$1.5 \\times 10^{-8}\\text{ J}$ ($15\\text{ nJ}$)</b>.
  </div>`,
  '2 Marks',
  [
    ['Formula substitution: U = 1/2 CV²', '1 Mark'],
    ['Correct value: U = 1.5 × 10⁻⁸ J', '1 Mark']
  ]
));

// Exercise 2.11
questions.push(createQCard(
  'c12p-ch2-q11', 'Exercise 2.11', 'NCERT Exercise',
  'A $600\\text{ pF}$ capacitor is charged by a $200\\text{ V}$ supply. It is then disconnected from the supply and is connected to another uncharged $600\\text{ pF}$ capacitor. How much electrostatic energy is lost in the process?',
  `<div class="step">
    <b>Given Data:</b><br>
    $C_1 = 600\\text{ pF} = 600 \\times 10^{-12}\\text{ F}$, $V_1 = 200\\text{ V}$<br>
    $C_2 = 600\\text{ pF} = 600 \\times 10^{-12}\\text{ F}$, $V_2 = 0\\text{ V}$ (uncharged)<br><br>
    <b>1. Initial Electrostatic Energy ($U_i$):</b><br>
    Only capacitor 1 holds energy:
    $$U_i = \\frac{1}{2} C_1 V_1^2 = \\frac{1}{2} \\times (600 \\times 10^{-12}) \\times (200)^2$$
    $$U_i = 300 \\times 10^{-12} \\times 40000 = 1.2 \\times 10^{-5}\\text{ J}$$<br>
    <b>2. Common Potential after Connection ($V$):</b><br>
    Total charge is conserved:
    $$V = \\frac{C_1 V_1 + C_2 V_2}{C_1 + C_2} = \\frac{600 \\times 200 + 0}{600 + 600} = \\frac{120000}{1200} = 100\\text{ V}$$<br>
    <b>3. Final Electrostatic Energy ($U_f$):</b><br>
    $$U_f = \\frac{1}{2} (C_1 + C_2) V^2 = \\frac{1}{2} \\times (1200 \\times 10^{-12}) \\times (100)^2$$
    $$U_f = 600 \\times 10^{-12} \\times 10000 = 0.6 \\times 10^{-5}\\text{ J}$$<br>
    <b>4. Energy Lost in the Process ($\\Delta U$):</b><br>
    $$\\Delta U = U_i - U_f = (1.2 \\times 10^{-5}\\text{ J}) - (0.6 \\times 10^{-5}\\text{ J}) = \\mathbf{0.6 \\times 10^{-5}\\text{ J} = 6 \\times 10^{-6}\\text{ J}}$$
    <i>(Direct Formula Verification: $\\Delta U = \\frac{C_1 C_2 (V_1 - V_2)^2}{2(C_1 + C_2)} = \\frac{(600)(600)(200)^2}{2(1200)} \\times 10^{-12} = 6 \\times 10^{-6}\\text{ J}$).</i><br>
    This lost energy is dissipated as heat in the connecting wires and as electromagnetic radiation.
  </div>`,
  '3 Marks',
  [
    ['Calculation of initial energy Ui = 1.2 × 10⁻⁵ J', '1 Mark'],
    ['Common potential V = 100 V and final energy Uf = 0.6 × 10⁻⁵ J', '1 Mark'],
    ['Energy loss ΔU = 6 × 10⁻⁶ J with physical explanation (heat/radiation)', '1 Mark']
  ]
));

// Exercise 2.12
questions.push(createQCard(
  'c12p-ch2-q12', 'Exercise 2.12', 'NCERT Exercise',
  'A charge of $8\\text{ mC}$ is located at the origin. Calculate the work done in taking a small charge of $-2 \\times 10^{-9}\\text{ C}$ from a point $P(0, 0, 3\\text{ cm})$ to a point $Q(0, 4\\text{ cm}, 0)$, via a point $R(0, 6\\text{ cm}, 9\\text{ cm})$.',
  `<div class="step">
    <b>Conservative Nature of Electrostatic Field:</b><br>
    The electrostatic force is a <b>conservative force</b>. Therefore, the work done in moving a test charge in an electrostatic field is strictly independent of the actual path taken (point $R$) and depends solely on the initial point ($P$) and final point ($Q$).<br><br>
    <b>Given Data:</b><br>
    Source charge at origin $(0, 0, 0)$: $Q = 8\\text{ mC} = 8 \\times 10^{-3}\\text{ C}$<br>
    Test charge: $q = -2 \\times 10^{-9}\\text{ C}$<br>
    Initial point $P(0, 0, 3\\text{ cm}) \\implies r_P = 3\\text{ cm} = 0.03\\text{ m}$<br>
    Final point $Q(0, 4\\text{ cm}, 0) \\implies r_Q = 4\\text{ cm} = 0.04\\text{ m}$<br><br>
    <b>Potentials at $P$ and $Q$:</b><br>
    $$V_P = \\frac{1}{4\\pi\\varepsilon_0} \\frac{Q}{r_P} = \\frac{9 \\times 10^9 \\times 8 \\times 10^{-3}}{0.03} = 2.4 \\times 10^9\\text{ V}$$
    $$V_Q = \\frac{1}{4\\pi\\varepsilon_0} \\frac{Q}{r_Q} = \\frac{9 \\times 10^9 \\times 8 \\times 10^{-3}}{0.04} = 1.8 \\times 10^9\\text{ V}$$<br>
    <b>Work Done in Moving Charge $q$ from $P$ to $Q$:</b><br>
    $$W = q (V_Q - V_P) = (-2 \\times 10^{-9}\\text{ C}) \\times (1.8 \\times 10^9 - 2.4 \\times 10^9)\\text{ V}$$
    $$W = (-2 \\times 10^{-9}) \\times (-0.6 \\times 10^9) = \\mathbf{+1.2\\text{ J}}$$
  </div>`,
  '2 Marks',
  [
    ['Statement of path independence of conservative electrostatic field (R is irrelevant)', '0.5 Mark'],
    ['Computation of potentials VP = 2.4 × 10⁹ V and VQ = 1.8 × 10⁹ V', '0.5 Mark'],
    ['Final work calculation: W = q(VQ - VP) = 1.2 J', '1 Mark']
  ]
));

// Exercise 2.13
questions.push(createQCard(
  'c12p-ch2-q13', 'Exercise 2.13', 'NCERT Exercise',
  'A cube of side $b$ has a charge $q$ at each of its eight vertices. Determine the potential and electric field due to this charge array at the centre of the cube.',
  `<div class="step">
    <b>Geometry of the Cube:</b><br>
    For a cube of side $b$:<br>
    Length of body diagonal:
    $$D = \\sqrt{b^2 + b^2 + b^2} = b\\sqrt{3}$$
    The centre of the cube $O$ lies at the intersection of the body diagonals. The distance from $O$ to each of the 8 vertices is:
    $$r = \\frac{D}{2} = \\frac{b\\sqrt{3}}{2}$$<br>
    <b>1. Potential at the Centre ($V$):</b><br>
    Electric potential is a scalar quantity, so potentials due to all 8 identical charges simply add up:
    $$V = 8 \\times \\left(\\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r}\\right) = 8 \\times \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{\\frac{b\\sqrt{3}}{2}} = \\frac{16 q}{4\\pi\\varepsilon_0 b\\sqrt{3}} = \\mathbf{\\frac{4q}{\\sqrt{3}\\pi\\varepsilon_0 b}}$$<br>
    <b>2. Electric Field at the Centre ($\mathbf{E}$):</b><br>
    For every charge at a given vertex, there is an identical charge at the diametrically opposite vertex.<br>
    The electric fields produced at the centre by these two opposite charges are equal in magnitude and opposite in direction, canceling out pairwise along all 4 body diagonals.<br>
    Therefore, by spherical/cubic symmetry:
    $$\\mathbf{E = 0\\text{ N/C}}$$
  </div>`,
  '2 Marks',
  [
    ['Potential derivation: V = 4q / (√3 πε₀ b)', '1 Mark'],
    ['Electric field analysis: Pairwise symmetry cancellation yielding E = 0', '1 Mark']
  ]
));

// Exercise 2.14
questions.push(createQCard(
  'c12p-ch2-q14', 'Exercise 2.14', 'NCERT Exercise',
  'Two tiny spheres carrying charges $1.5\\ \\mu\\text{C}$ and $2.5\\ \\mu\\text{C}$ are located $30\\text{ cm}$ apart. Find the potential and electric field:<br>(a) at the midpoint of the line joining the two charges, and<br>(b) at a point $10\\text{ cm}$ from this midpoint in a plane normal to the line and passing through the midpoint.',
  `<div class="step">
    <b>Given:</b> $q_1 = 1.5\\ \\mu\\text{C} = 1.5 \\times 10^{-6}\\text{ C}$, $q_2 = 2.5\\ \\mu\\text{C} = 2.5 \\times 10^{-6}\\text{ C}$, separation $d = 30\\text{ cm} = 0.30\\text{ m}$.<br><br>
    <b>(a) At the midpoint $O$ ($r_1 = r_2 = 15\\text{ cm} = 0.15\\text{ m}$):</b><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Potential:</strong>
      $$V_O = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 + q_2}{r} = \\frac{(9 \\times 10^9) \\times (1.5 + 2.5) \\times 10^{-6}}{0.15} = \\frac{9 \\times 10^9 \\times 4 \\times 10^{-6}}{0.15} = \\mathbf{2.4 \\times 10^5\\text{ V}}$$</li>
      <li><strong>Electric Field:</strong>
      $E_1$ (due to $q_1$) points towards $q_2$; $E_2$ (due to $q_2$) points towards $q_1$. Net field is directed from $q_2$ to $q_1$:
      $$E_O = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_2 - q_1}{r^2} = \\frac{(9 \\times 10^9) \\times (2.5 - 1.5) \\times 10^{-6}}{(0.15)^2} = \\frac{9 \\times 10^3}{0.0225} = \\mathbf{4.0 \\times 10^5\\text{ N/C}} \\text{ (towards } q_1)$$</li>
    </ul><br>
    <b>(b) At point $P$, $10\\text{ cm}$ along the normal bisector ($y = 0.10\\text{ m}$):</b><br>
    Distance from each charge:
    $$r\' = \\sqrt{(0.15)^2 + (0.10)^2} = \\sqrt{0.0225 + 0.0100} = \\sqrt{0.0325} \\approx 0.18\\text{ m}$$
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Potential:</strong>
      $$V_P = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 + q_2}{r\'} = \\frac{(9 \\times 10^9) \\times (4.0 \\times 10^{-6})}{0.18} = \\mathbf{2.0 \\times 10^5\\text{ V}}$$</li>
      <li><strong>Electric Field:</strong>
      Resolving $E_1 = \\frac{k q_1}{r\'^2} = 4.15 \\times 10^5\\text{ N/C}$ and $E_2 = \\frac{k q_2}{r\'^2} = 6.92 \\times 10^5\\text{ N/C}$ into horizontal and vertical components yields a resultant field magnitude of:
      $$\\mathbf{E_P \\approx 6.6 \\times 10^5\\text{ N/C}}$$</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['(a) Midpoint values: V = 2.4 × 10⁵ V and E = 4.0 × 10⁵ N/C towards q₁', '1.5 Marks'],
    ['(b) Normal point values: V = 2.0 × 10⁵ V and resultant E ≈ 6.6 × 10⁵ N/C', '1.5 Marks']
  ]
));

// Exercise 2.15
questions.push(createQCard(
  'c12p-ch2-q15', 'Exercise 2.15', 'NCERT Exercise',
  'A spherical conducting shell of inner radius $r_1$ and outer radius $r_2$ has a charge $Q$.<br>(a) A charge $q$ is placed at the centre of the shell. What is the surface charge density on the inner and outer surfaces of the shell?<br>(b) Is the electric field inside a cavity (with no charge) zero, even if the shell is not spherical, but has any irregular shape? Explain.',
  `<div class="step">
    <b>(a) Surface Charge Densities:</b><br>
    When a charge $+q$ is placed at the centre of the cavity:
    <ul style="margin-left:20px; line-height:1.75;">
      <li>By electrostatic induction, a charge of <b>$-q$</b> is drawn to the <b>inner surface</b> of the shell so that the net charge enclosed by any Gaussian surface inside the conducting material is zero.
      $$\\text{Inner surface charge density: } \\sigma_{\\text{inner}} = \\mathbf{-\\frac{q}{4\\pi r_1^2}}$$</li>
      <li>To maintain charge conservation, an equal positive charge $+q$ appears on the outer surface in addition to the original charge $Q$, making the total outer charge $(Q + q)$.
      $$\\text{Outer surface charge density: } \\sigma_{\\text{outer}} = \\mathbf{\\frac{Q + q}{4\\pi r_2^2}}$$</li>
    </ul><br>
    <b>(b) Field inside an empty cavity of irregular shape (Electrostatic Shielding):</b><br>
    <b>Yes</b>, the electric field inside a cavity containing no charge is <b>identically zero</b>, regardless of the size or irregular shape of the surrounding conductor.<br>
    <i>Explanation:</i> Take any closed loop with part inside the cavity and part in the conductor. Since the electric field inside the conductor is zero, the line integral of $\\mathbf{E}$ inside the cavity must vanish ($\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$). If there were any non-zero field lines inside the cavity, they would have to start and end on the cavity walls, which would create a closed loop with non-zero circulation, violating the conservative nature of electrostatics. Hence, $E = 0$ everywhere inside an uncharged cavity (<b>Electrostatic Shielding</b>).
  </div>`,
  '3 Marks',
  [
    ['(a) Inner density σ₁ = -q / (4πr₁²) and outer density σ₂ = (Q+q) / (4πr₂²)', '1.5 Marks'],
    ['(b) Proof of electrostatic shielding: E = 0 inside empty cavity of any arbitrary shape', '1.5 Marks']
  ]
));

// Exercise 2.16
questions.push(createQCard(
  'c12p-ch2-q16', 'Exercise 2.16', 'NCERT Exercise',
  '(a) Show that the normal component of electrostatic field has a discontinuity from one side of a charged surface to another given by $(\\mathbf{E}_2 - \\mathbf{E}_1) \\cdot \\hat{\\mathbf{n}} = \\frac{\\sigma}{\\varepsilon_0}$.<br>(b) Show that the tangential component of electrostatic field is continuous from one side of a charged surface to another.',
  `<div class="step">
    <b>(a) Discontinuity of Normal Component (Gauss\'s Law):</b><br>
    Consider a tiny pillbox (cylindrical Gaussian surface) of cross-sectional area $\\Delta A$ and negligible height $h \\to 0$ straddling the charged surface with local surface charge density $\\sigma$.<br>
    The charge enclosed by the pillbox is $q_{\\text{enc}} = \\sigma \\Delta A$.<br>
    Since $h \\to 0$, the flux through the curved sides is zero. The net flux through the two flat ends is:
    $$\\Phi = \\mathbf{E}_2 \\cdot \\hat{\\mathbf{n}} \\Delta A - \\mathbf{E}_1 \\cdot \\hat{\\mathbf{n}} \\Delta A = (\\mathbf{E}_2 - \\mathbf{E}_1) \\cdot \\hat{\\mathbf{n}} \\Delta A$$
    By Gauss\'s Law:
    $$\\Phi = \\frac{q_{\\text{enc}}}{\\varepsilon_0} = \\frac{\\sigma \\Delta A}{\\varepsilon_0}$$
    Equating the two:
    $$(\\mathbf{E}_2 - \\mathbf{E}_1) \\cdot \\hat{\\mathbf{n}} \\Delta A = \\frac{\\sigma \\Delta A}{\\varepsilon_0} \\implies \\mathbf{(\\mathbf{E}_2 - \\mathbf{E}_1) \\cdot \\hat{\\mathbf{n}} = \\frac{\\sigma}{\\varepsilon_0}}$$<br>
    <b>(b) Continuity of Tangential Component:</b><br>
    Consider a small rectangular closed path $ABCD$ of length $L$ parallel to the surface and infinitesimal width $w \\to 0$ across the surface.<br>
    Since electrostatic field is conservative:
    $$\\oint \\mathbf{E} \\cdot d\\mathbf{l} = 0$$
    As width $w \\to 0$, the contributions from the two short transverse sides vanish:
    $$\\oint \\mathbf{E} \\cdot d\\mathbf{l} = E_{2t} L - E_{1t} L = 0 \\implies \\mathbf{E_{2t} = E_{1t}}$$
    Thus, the tangential component of electric field is strictly <b>continuous</b> across any charged boundary.
  </div>`,
  '3 Marks',
  [
    ['(a) Pillbox construction & Gauss\'s law proof for normal discontinuity σ/ε₀', '1.5 Marks'],
    ['(b) Rectangular loop circulation proof for tangential continuity (∮E·dl = 0)', '1.5 Marks']
  ]
));

// Exercise 2.17
questions.push(createQCard(
  'c12p-ch2-q17', 'Exercise 2.17', 'NCERT Exercise',
  'A long charged cylinder of linear charged density $\\lambda$ is surrounded by a hollow co-axial conducting cylinder. What is the electric field in the space between the two cylinders?',
  `<div class="step">
    <b>Gauss\'s Law Analysis:</b><br>
    Let the inner cylinder carry a uniform linear charge density $\\lambda$.<br>
    To find the electric field at a distance $r$ from the common central axis (in the space between the cylinders):<br>
    Consider a cylindrical Gaussian surface of radius $r$ and length $L$, coaxial with the cylinders.<br><br>
    <b>1. Enclosed Charge:</b>
    $$q_{\\text{enc}} = \\lambda L$$<br>
    <b>2. Electric Flux through the Gaussian Cylinder:</b>
    By cylindrical symmetry, $\\mathbf{E}$ is directed radially outward, perpendicular to the curved surface, and parallel to the end caps:
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Flux through two end circular caps: $\\Phi_{\\text{caps}} = 0$ (since $\\mathbf{E} \\perp \\hat{\\mathbf{n}}$).</li>
      <li>Flux through curved cylindrical surface:
      $$\\Phi_{\\text{curved}} = E \\times (2\\pi r L)$$</li>
    </ul><br>
    <b>3. Applying Gauss\'s Law:</b>
    $$E (2\\pi r L) = \\frac{\\lambda L}{\\varepsilon_0} \\implies \\mathbf{E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}}$$
    The electric field in the space between the cylinders is directed radially outwards with magnitude $\\frac{\\lambda}{2\\pi\\varepsilon_0 r}$.
  </div>`,
  '2 Marks',
  [
    ['Selection of cylindrical Gaussian surface of radius r and length L', '1 Mark'],
    ['Derivation of field expression: E = λ / (2πε₀r)', '1 Mark']
  ]
));

// Exercise 2.18
questions.push(createQCard(
  'c12p-ch2-q18', 'Exercise 2.18', 'NCERT Exercise',
  'In a hydrogen atom, the electron and proton are bound at a distance of about $0.53\\text{ \\AA}$.<br>(a) Estimate the potential energy of the system in $\\text{eV}$, taking the zero of the potential energy at infinite separation.<br>(b) What is the minimum work required to free the electron, given that its kinetic energy in the orbit is half the magnitude of potential energy?<br>(c) What are the answers to (a) and (b) above if the zero of potential energy is taken at $1.06\\text{ \\AA}$ separation?',
  `<div class="step">
    <b>Given:</b> $r = 0.53\\text{ \\AA} = 0.53 \\times 10^{-10}\\text{ m}$, $q_1 = +e$, $q_2 = -e$, $e = 1.6 \\times 10^{-19}\\text{ C}$.<br><br>
    <b>(a) Potential Energy with $U(\\infty) = 0$:</b><br>
    $$U = -\\frac{1}{4\\pi\\varepsilon_0} \\frac{e^2}{r} = -\\frac{(9 \\times 10^9) \\times (1.6 \\times 10^{-19})^2}{0.53 \\times 10^{-10}\\text{ m}} = -\\frac{2.304 \\times 10^{-28}}{0.53 \\times 10^{-10}} = -4.347 \\times 10^{-18}\\text{ J}$$
    In electron-volts ($\\text{eV}$):
    $$U = -\\frac{4.347 \\times 10^{-18}\\text{ J}}{1.6 \\times 10^{-19}\\text{ J/eV}} = \\mathbf{-27.2\\text{ eV}}$$<br><br>
    <b>(b) Minimum work required to free the electron (Ionisation Energy):</b><br>
    Kinetic energy: $K = \\frac{1}{2}|U| = \\frac{27.2}{2} = 13.6\\text{ eV}$.<br>
    Total mechanical energy:
    $$E = K + U = 13.6\\text{ eV} - 27.2\\text{ eV} = -13.6\\text{ eV}$$
    Work required to free the electron to infinity ($E_\\infty = 0$):
    $$W = 0 - E = 0 - (-13.6\\text{ eV}) = \\mathbf{+13.6\\text{ eV}}$$<br><br>
    <b>(c) If zero of potential energy is taken at $r_0 = 1.06\\text{ \\AA} = 2r$:</b><br>
    Potential energy at $r_0$ in the original scale is $U(r_0) = -\\frac{27.2}{2} = -13.6\\text{ eV}$.<br>
    New potential energy:
    $$U\'(r) = U(r) - U(r_0) = -27.2\\text{ eV} - (-13.6\\text{ eV}) = \\mathbf{-13.6\\text{ eV}}$$<br>
    The work required to free the electron depends only on physical forces and potential energy <i>differences</i>; shifting the arbitrary reference zero does not alter physical work:
    $$W = \\mathbf{+13.6\\text{ eV}}$$
  </div>`,
  '3 Marks',
  [
    ['(a) Potential energy calculation: U = -27.2 eV', '1 Mark'],
    ['(b) Total energy E = -13.6 eV and work required W = +13.6 eV', '1 Mark'],
    ['(c) Shifted reference: U\' = -13.6 eV and unchanged work W = 13.6 eV', '1 Mark']
  ]
));

// Exercise 2.19
questions.push(createQCard(
  'c12p-ch2-q19', 'Exercise 2.19', 'NCERT Exercise',
  'If one of the two electrons of a $\\text{H}_2$ molecule is removed, we get a hydrogen molecular ion $\\text{H}_2^+$. In the ground state of an $\\text{H}_2^+$, the two protons are separated by roughly $1.5\\text{ \\AA}$, and the electron is roughly $1\\text{ \\AA}$ from each proton. Determine the potential energy of the system. Specify your choice of the zero of potential energy.',
  `<div class="step">
    <b>Configuration of the $\\text{H}_2^+$ System:</b><br>
    The system consists of three interacting point charges:
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Two protons ($p_1, p_2$), each of charge $+e = +1.6 \\times 10^{-19}\\text{ C}$, separated by distance $r_{12} = 1.5\\text{ \\AA} = 1.5 \\times 10^{-10}\\text{ m}$.</li>
      <li>One electron ($e^-$) of charge $-e = -1.6 \\times 10^{-19}\\text{ C}$, at distance $r_{13} = 1.0\\text{ \\AA}$ from $p_1$ and $r_{23} = 1.0\\text{ \\AA}$ from $p_2$.</li>
    </ul><br>
    <b>Zero of Potential Energy:</b><br>
    Chosen at infinite separation between all three particles ($U = 0$ as $r \\to \\infty$).<br><br>
    <b>Total Potential Energy of the Three-Particle System:</b><br>
    $$U = \\frac{1}{4\\pi\\varepsilon_0} \\left[ \\frac{q_1 q_2}{r_{12}} + \\frac{q_1 q_3}{r_{13}} + \\frac{q_2 q_3}{r_{23}} \\right]$$
    $$U = \\frac{e^2}{4\\pi\\varepsilon_0} \\left[ \\frac{1}{1.5 \\times 10^{-10}} - \\frac{1}{1.0 \\times 10^{-10}} - \\frac{1}{1.0 \\times 10^{-10}} \\right]$$
    $$U = \\frac{9 \\times 10^9 \\times (1.6 \\times 10^{-19})^2}{10^{-10}} \\left[ \\frac{1}{1.5} - 2 \\right] = 2.304 \\times 10^{-18} \\left[ \\frac{2}{3} - 2 \\right] = 2.304 \\times 10^{-18} \\times \\left(-\\frac{4}{3}\\right)$$
    $$U = -3.072 \\times 10^{-18}\\text{ J}$$<br>
    Converting to $\\text{eV}$:
    $$U = -\\frac{3.072 \\times 10^{-18}\\text{ J}}{1.6 \\times 10^{-19}\\text{ J/eV}} = \\mathbf{-19.2\\text{ eV}}$$
  </div>`,
  '2 Marks',
  [
    ['Pairwise potential energy formula: U = k[q₁q₂/r₁₂ + q₁q₃/r₁₃ + q₂q₃/r₂₃]', '1 Mark'],
    ['Computation: U = -3.07 × 10⁻¹⁸ J = -19.2 eV', '1 Mark']
  ]
));

// Exercise 2.20
questions.push(createQCard(
  'c12p-ch2-q20', 'Exercise 2.20', 'NCERT Exercise',
  'Two charged conducting spheres of radii $a$ and $b$ are connected to each other by a wire. What is the ratio of electric fields at the surfaces of the two spheres? Use the result obtained to explain why charge density on the sharp and pointed ends of a conductor is higher than on its flatter portions.',
  `<div class="step">
    <b>Equipotential Condition for Connected Conductors:</b><br>
    When two conducting spheres are connected by a wire, charge flows between them until they reach the same electrostatic potential ($V_a = V_b = V$).<br>
    Potentials on the two spheres:
    $$V_a = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_a}{a}, \\quad V_b = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_b}{b}$$
    Since $V_a = V_b$:
    $$\\frac{q_a}{a} = \\frac{q_b}{b} \\implies \\frac{q_a}{q_b} = \\frac{a}{b}$$<br>
    <b>Ratio of Electric Fields ($E_a / E_b$):</b><br>
    Electric fields just outside the surfaces:
    $$E_a = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_a}{a^2}, \\quad E_b = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_b}{b^2}$$
    Taking the ratio:
    $$\\frac{E_a}{E_b} = \\frac{q_a / a^2}{q_b / b^2} = \\left(\\frac{q_a}{q_b}\\right) \\left(\\frac{b^2}{a^2}\\right) = \\left(\\frac{a}{b}\\right) \\left(\\frac{b^2}{a^2}\\right) = \\mathbf{\\frac{b}{a}}$$<br>
    <b>Relation with Surface Charge Density (Corona Discharge):</b><br>
    Since $E = \\frac{\\sigma}{\\varepsilon_0}$, we have:
    $$\\frac{\\sigma_a}{\\sigma_b} = \\frac{E_a}{E_b} = \\frac{b}{a} \\implies \\mathbf{\\sigma \\propto \\frac{1}{r}}$$
    The surface charge density is inversely proportional to the radius of curvature $r$.<br>
    At sharp, pointed ends of a conductor, the radius of curvature $r$ is extremely small ($r \\to 0$). Hence, the charge density $\\sigma$ and resulting electric field $E$ become extremely high, ionizing surrounding air molecules (phenomenon of <i>corona discharge / action of points</i>).
  </div>`,
  '3 Marks',
  [
    ['Equipotential condition qa/a = qb/b', '1 Mark'],
    ['Ratio of electric fields: Ea / Eb = b / a', '1 Mark'],
    ['Inverse relation σ ∝ 1/r explaining charge concentration at sharp edges', '1 Mark']
  ]
));

// Exercise 2.21
questions.push(createQCard(
  'c12p-ch2-q21', 'Exercise 2.21', 'NCERT Exercise',
  'Two charges $-q$ and $+q$ are located at points $(0, 0, -a)$ and $(0, 0, a)$, respectively.<br>(a) What is the electrostatic potential at the points $(0, 0, z)$ and $(x, y, 0)$?<br>(b) Obtain the dependence of potential on the distance $r$ of a point from the origin when $r/a \\gg 1$.<br>(c) How much work is done in moving a small test charge from the point $(5, 0, 0)$ to $(-7, 0, 0)$ along the $x$-axis? Does the answer change if the path between the same points is not along the $x$-axis?',
  `<div class="step">
    The charges form an electric dipole of dipole moment $\\mathbf{p} = 2qa\\ \\hat{\\mathbf{k}}$ along the $z$-axis.<br><br>
    <b>(a) Potential at Points on Axis and Plane:</b><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>At $(0, 0, z)$ on $z$-axis:</strong>
      $$V(0, 0, z) = \\frac{1}{4\\pi\\varepsilon_0} \\left[ \\frac{q}{|z - a|} - \\frac{q}{|z + a|} \\right] = \\mathbf{\\frac{q}{4\\pi\\varepsilon_0} \\frac{2a}{z^2 - a^2} = \\frac{p}{4\\pi\\varepsilon_0 (z^2 - a^2)} \\quad (\\text{for } z > a)}$$</li>
      <li><strong>At $(x, y, 0)$ on $xy$-plane:</strong>
      Distance to $+q$ is $\\sqrt{x^2 + y^2 + a^2}$; distance to $-q$ is $\\sqrt{x^2 + y^2 + a^2}$. Both distances are equal:
      $$V(x, y, 0) = \\frac{1}{4\\pi\\varepsilon_0} \\left[ \\frac{q}{\\sqrt{x^2+y^2+a^2}} - \\frac{q}{\\sqrt{x^2+y^2+a^2}} \\right] = \\mathbf{0\\text{ V}}$$</li>
    </ul><br>
    <b>(b) Dependence of Potential for $r/a \\gg 1$:</b><br>
    For large distances $r \\gg a$, the potential of an electric dipole falls off as:
    $$V(r, \\theta) = \\frac{1}{4\\pi\\varepsilon_0} \\frac{p \\cos\\theta}{r^2} \\implies \\mathbf{V \\propto \\frac{1}{r^2}}$$<br>
    <b>(c) Work done from $(5, 0, 0)$ to $(-7, 0, 0)$:</b><br>
    Both initial point $(5, 0, 0)$ and final point $(-7, 0, 0)$ lie on the $x$-axis (in the $xy$-plane) where potential is zero ($V_i = V_f = 0$).<br>
    $$W = q_0 (V_f - V_i) = q_0 (0 - 0) = \\mathbf{0\\text{ J}}$$
    Because electrostatic fields are conservative, the work done is strictly <b>independent of the path taken</b>; it remains zero for any arbitrary path connecting the two points.
  </div>`,
  '3 Marks',
  [
    ['(a) Potential formulas: V(z) along z-axis and V = 0 on xy-plane', '1 Mark'],
    ['(b) Inverse-square dependence: V ∝ 1/r²', '1 Mark'],
    ['(c) Work done is 0 J and path-independent explanation', '1 Mark']
  ]
));

// Exercise 2.22
questions.push(createQCard(
  'c12p-ch2-q22', 'Exercise 2.22', 'NCERT Exercise',
  'Figure shows a charge array known as an electric quadrupole consisting of charge $+q$ at $z = +a$, $-2q$ at $z = 0$, and $+q$ at $z = -a$. For a point on the axis of the quadrupole, obtain the dependence of potential on $r$ for $r/a \\gg 1$, and contrast your results with that due to an electric dipole, and an electric monopole.',
  `<div class="step">
    <b>Potential on the Axis of an Electric Quadrupole:</b><br>
    Let the point $P$ lie at distance $r$ on the $z$-axis ($z = r$).<br>
    Distance from $+q$ at $z = a$ is $(r - a)$.<br>
    Distance from $-2q$ at $z = 0$ is $r$.<br>
    Distance from $+q$ at $z = -a$ is $(r + a)$.<br>
    $$V(r) = \\frac{1}{4\\pi\\varepsilon_0} \\left[ \\frac{q}{r - a} - \\frac{2q}{r} + \\frac{q}{r + a} \\right] = \\frac{q}{4\\pi\\varepsilon_0 r} \\left[ \\left(1 - \\frac{a}{r}\\right)^{-1} - 2 + \\left(1 + \\frac{a}{r}\\right)^{-1} \\right]$$<br>
    <b>Binomial Expansion for $r/a \\gg 1$:</b><br>
    $$\\left(1 - \\frac{a}{r}\\right)^{-1} \\approx 1 + \\frac{a}{r} + \\frac{a^2}{r^2}, \\quad \\left(1 + \\frac{a}{r}\\right)^{-1} \\approx 1 - \\frac{a}{r} + \\frac{a^2}{r^2}$$
    Summing the terms inside brackets:
    $$\\left(1 + \\frac{a}{r} + \\frac{a^2}{r^2}\\right) - 2 + \\left(1 - \\frac{a}{r} + \\frac{a^2}{r^2}\\right) = \\frac{2a^2}{r^2}$$
    Substituting back:
    $$V(r) = \\frac{q}{4\\pi\\varepsilon_0 r} \\times \\left( \\frac{2a^2}{r^2} \\right) = \\mathbf{\\frac{2qa^2}{4\\pi\\varepsilon_0 r^3} \\propto \\frac{1}{r^3}}$$<br>
    <b>Contrast with Monopole and Dipole:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><b>Electric Monopole (single charge $q$):</b> $V \\propto \\frac{1}{r}$</li>
      <li><b>Electric Dipole (pair $\\pm q$):</b> $V \\propto \\frac{1}{r^2}$</li>
      <li><b>Electric Quadrupole (net charge zero, dipole moment zero):</b> $\\mathbf{V \\propto \\frac{1}{r^3}}$</li>
    </ul>
    With each increase in multipole order, the potential drops off by an additional power of $1/r$.
  </div>`,
  '3 Marks',
  [
    ['Superposition setup: V = k [q/(r-a) - 2q/r + q/(r+a)]', '1 Mark'],
    ['Binomial expansion leading to V ∝ 1/r³', '1 Mark'],
    ['Comparison across Monopole (1/r), Dipole (1/r²), and Quadrupole (1/r³)', '1 Mark']
  ]
));

// Exercise 2.23
questions.push(createQCard(
  'c12p-ch2-q23', 'Exercise 2.23', 'NCERT Exercise',
  'An electrical technician requires a capacitance of $2\\ \\mu\\text{F}$ in a circuit across a potential difference of $1\\text{ kV}$. A large number of $1\\ \\mu\\text{F}$ capacitors are available to him each of which can withstand a potential difference of not more than $400\\text{ V}$. Suggest a possible arrangement that requires the minimum number of capacitors.',
  `<div class="step">
    <b>Requirements:</b><br>
    Required total voltage, $V_{\\text{total}} = 1\\text{ kV} = 1000\\text{ V}$<br>
    Required total capacitance, $C_{\\text{total}} = 2\\ \\mu\\text{F}$<br>
    Maximum rating of each capacitor: $C = 1\\ \\mu\\text{F}$, $V_{\\text{max}} = 400\\text{ V}$<br><br>
    <b>1. Number of Capacitors in Series in Each Row ($n$):</b><br>
    To safely withstand $1000\\text{ V}$ without breakdown:
    $$n \\times 400\\text{ V} \\ge 1000\\text{ V} \\implies n \\ge \\frac{1000}{400} = 2.5$$
    Since $n$ must be an integer, we must use <b>$n = 3$ capacitors in series per row</b>.<br>
    (Each capacitor in the row will then experience $1000/3 = 333.3\\text{ V} < 400\\text{ V}$).<br><br>
    <b>2. Capacitance of One Row of 3 Series Capacitors ($C_{\\text{row}}$):</b><br>
    $$C_{\\text{row}} = \\frac{C}{n} = \\frac{1\\ \\mu\\text{F}}{3} = \\frac{1}{3}\\ \\mu\\text{F}$$<br>
    <b>3. Number of Parallel Rows Required ($m$):</b><br>
    To achieve total capacitance $C_{\\text{total}} = 2\\ \\mu\\text{F}$:
    $$C_{\\text{total}} = m \\times C_{\\text{row}} \\implies 2\\ \\mu\\text{F} = m \\times \\frac{1}{3}\\ \\mu\\text{F} \\implies \\mathbf{m = 6\\text{ rows}}$$<br>
    <b>4. Minimum Number of Capacitors ($N$):</b><br>
    $$N = m \\times n = 6 \\times 3 = \\mathbf{18\\text{ capacitors}}$$
    <b>Suggested Arrangement:</b> Connect <b>6 parallel rows</b>, with each row consisting of <b>3 capacitors connected in series</b> (total 18 capacitors of $1\\ \\mu\\text{F}$ each).
  </div>`,
  '2 Marks',
  [
    ['Calculation of series units per row: n = 3 (safe voltage 333 V)', '1 Mark'],
    ['Calculation of parallel branches: m = 6 and total N = 18 capacitors', '1 Mark']
  ]
));

// Exercise 2.24
questions.push(createQCard(
  'c12p-ch2-q24', 'Exercise 2.24', 'NCERT Exercise',
  'What is the area of the plates of a $2\\text{ F}$ parallel plate capacitor, given that the separation between the plates is $0.5\\text{ cm}$? [You will realize from your answer why ordinary capacitors are in the range of $\\mu\\text{F}$ or less. However, electrolytic capacitors do have a much larger capacitance ($0.1\\text{ F}$) because of very small separation].',
  `<div class="step">
    <b>Given Data:</b><br>
    Capacitance, $C = 2\\text{ F}$<br>
    Separation, $d = 0.5\\text{ cm} = 0.5 \\times 10^{-2}\\text{ m} = 5 \\times 10^{-3}\\text{ m}$<br>
    Permittivity of vacuum, $\\varepsilon_0 = 8.854 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)$<br><br>
    <b>Plate Area Calculation ($A$):</b><br>
    $$C = \\frac{\\varepsilon_0 A}{d} \\implies A = \\frac{C d}{\\varepsilon_0}$$
    $$A = \\frac{2\\text{ F} \\times (5 \\times 10^{-3}\\text{ m})}{8.854 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)}$$
    $$A = \\frac{10^{-2}}{8.854 \\times 10^{-12}} = \\mathbf{1.13 \\times 10^9\\text{ m}^2 = 1130\\text{ km}^2}$$<br>
    <b>Physical Significance:</b><br>
    An area of $1130\\text{ km}^2$ corresponds to a gigantic square plate of side $\\sqrt{1130} \\approx 33.6\\text{ km}$ on each side, which is larger than the entire area of a major metropolitan city! This illustrates why a capacitance of $1\\text{ F}$ or $2\\text{ F}$ is enormously large for ordinary parallel-plate capacitors, and practical air/paper capacitors are limited to microfarads ($\\mu\\text{F}$) or picofarads ($\\text{pF}$).
  </div>`,
  '2 Marks',
  [
    ['Formula: A = Cd / ε₀', '1 Mark'],
    ['Computation: A ≈ 1.13 × 10⁹ m² (1130 km²) and physical realization', '1 Mark']
  ]
));

// Exercise 2.25
questions.push(createQCard(
  'c12p-ch2-q25', 'Exercise 2.25', 'NCERT Exercise',
  'Obtain the equivalent capacitance of the network shown in figure: $C_1 = 100\\text{ pF}$, $C_2 = 200\\text{ pF}$, $C_3 = 200\\text{ pF}$, $C_4 = 100\\text{ pF}$ connected across a $300\\text{ V}$ supply. Determine the charge and voltage across each capacitor.',
  `<div class="step">
    <b>Network Topology Analysis:</b><br>
    In the standard circuit network:
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Capacitors $C_2 = 200\\text{ pF}$ and $C_3 = 200\\text{ pF}$ are connected in series with each other.
      $$C_{23} = \\frac{C_2 C_3}{C_2 + C_3} = \\frac{200 \\times 200}{200 + 200} = 100\\text{ pF}$$</li>
      <li>This branch ($C_{23} = 100\\text{ pF}$) is in parallel with $C_1 = 100\\text{ pF}$:
      $$C\' = C_1 + C_{23} = 100\\text{ pF} + 100\\text{ pF} = 200\\text{ pF}$$</li>
      <li>This combination $C\'$ is connected in series with $C_4 = 100\\text{ pF}$ across the $300\\text{ V}$ supply:
      $$C_{\\text{eq}} = \\frac{C\' \\times C_4}{C\' + C_4} = \\frac{200 \\times 100}{200 + 100} = \\frac{20000}{300} = \\mathbf{\\frac{200}{3}\\text{ pF} \\approx 66.7\\text{ pF}}$$</li>
    </ul><br>
    <b>Charge and Voltage across Each Capacitor:</b><br>
    Total charge supplied by $300\\text{ V}$ battery:
    $$Q_{\\text{total}} = C_{\\text{eq}} V = \\left(\\frac{200}{3} \\times 10^{-12}\\right) \\times 300 = \\mathbf{2 \\times 10^{-8}\\text{ C} = 20\\text{ nC}}$$<br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>For $C_4$ (in main line):</strong><br>
      Charge $Q_4 = Q_{\\text{total}} = \\mathbf{2 \\times 10^{-8}\\text{ C}}$<br>
      Voltage $V_4 = \\frac{Q_4}{C_4} = \\frac{2 \\times 10^{-8}\\text{ C}}{100 \\times 10^{-12}\\text{ F}} = \\mathbf{200\\text{ V}}$</li>
      <li><strong>Voltage across the parallel combination ($C\'$):</strong><br>
      $$V\' = V - V_4 = 300\\text{ V} - 200\\text{ V} = \\mathbf{100\\text{ V}}$$</li>
      <li><strong>For $C_1$:</strong><br>
      Voltage $V_1 = V\' = \\mathbf{100\\text{ V}}$<br>
      Charge $Q_1 = C_1 V_1 = (100 \\times 10^{-12}) \\times 100 = \\mathbf{10^{-8}\\text{ C} = 10\\text{ nC}}$</li>
      <li><strong>For $C_2$ and $C_3$ (series branch carrying $100\\text{ V}$):</strong><br>
      Since $C_2 = C_3 = 200\\text{ pF}$, the $100\\text{ V}$ divides equally:
      $$V_2 = V_3 = \\frac{100\\text{ V}}{2} = \\mathbf{50\\text{ V}}$$
      $$Q_2 = Q_3 = C_2 V_2 = (200 \\times 10^{-12}) \\times 50 = \\mathbf{10^{-8}\\text{ C} = 10\\text{ nC}}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Equivalent capacitance calculation: C_eq = (200/3) pF ≈ 66.7 pF', '1 Mark'],
    ['Charge & voltage for C4: Q4 = 20 nC, V4 = 200 V', '1 Mark'],
    ['Charge & voltage for C1, C2, C3: V1 = 100 V (10 nC), V2 = V3 = 50 V (10 nC each)', '1 Mark']
  ]
));

console.log(`\nCompiling Chapter 2: Electrostatic Potential and Capacitance (Total: ${questions.length} Qs)...`);
saveChapter(chNum, chTitle, svgDiagram, exTitle, questions, 'Current Electricity');
console.log(`Chapter 2: Electrostatic Potential and Capacitance successfully saved!`);
