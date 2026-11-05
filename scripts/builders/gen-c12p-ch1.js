// scripts/builders/gen-c12p-ch1.js
// Class 12 Physics Chapter 1: Electric Charges and Fields (वैद्युत आवेश तथा क्षेत्र)
// NCERT Rationalised 2026–27: All 24 Textbook Exercises (1.1 to 1.24) Verbatim with CBSE Rubrics
const { createQCard, saveChapter } = require('./c12p-helper');

const chNum = 1;
const chTitle = 'Electric Charges and Fields (वैद्युत आवेश तथा क्षेत्र)';
const exTitle = 'NCERT Chapter 1 Exercises: Coulomb\'s Law, Electric Dipoles, Gauss\'s Law & Field Calculations (1.1 to 1.24)';

const svgDiagram = `
<div style="background:linear-gradient(135deg, #eff6ff, #dbeafe); border:1px solid #bfdbfe; border-radius:12px; padding:20px; margin-bottom:24px;">
  <h3 style="font-size:1.05rem; color:#1e40af; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    Electric Charges &amp; Fields: Coulomb's Law, Dipole Moment &amp; Gauss's Theorem
  </h3>
  <svg viewBox="0 0 850 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
    <!-- Box 1: Coulomb's Law -->
    <rect x="15" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
    <text x="110" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">Coulomb's Law</text>
    <text x="110" y="70" text-anchor="middle" font-size="11" fill="#334155">F = (1/4πε₀) · (q₁q₂ / r²)</text>
    <text x="110" y="94" text-anchor="middle" font-size="10" fill="#64748b">• 1/4πε₀ = 8.99 × 10⁹ N m²/C²</text>
    <text x="110" y="112" text-anchor="middle" font-size="10" fill="#64748b">• Superposition principle</text>

    <!-- Box 2: Electric Dipole -->
    <rect x="225" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
    <text x="320" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Electric Dipole</text>
    <text x="320" y="72" text-anchor="middle" font-size="11" fill="#334155">p = q · 2a (from -q to +q)</text>
    <text x="320" y="96" text-anchor="middle" font-size="10" fill="#64748b">• Axial: E = 2kp/r³</text>
    <text x="320" y="114" text-anchor="middle" font-size="10" fill="#64748b">• Equatorial: E = kp/r³ | τ = p × E</text>

    <!-- Box 3: Gauss's Law -->
    <rect x="435" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
    <text x="530" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#5b21b6">Gauss's Law</text>
    <text x="530" y="72" text-anchor="middle" font-size="11" fill="#334155">∮ E · dA = q_enclosed / ε₀</text>
    <text x="530" y="96" text-anchor="middle" font-size="10" fill="#64748b">• Infinite line: E = λ / (2πε₀r)</text>
    <text x="530" y="114" text-anchor="middle" font-size="10" fill="#64748b">• Infinite sheet: E = σ / (2ε₀)</text>

    <!-- Box 4: Field Lines -->
    <rect x="645" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#ea580c" stroke-width="2"/>
    <text x="740" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#9a3412">Field Lines</text>
    <text x="740" y="72" text-anchor="middle" font-size="11" fill="#334155">Continuous Curves</text>
    <text x="740" y="96" text-anchor="middle" font-size="10" fill="#64748b">• Never intersect (unique tangent)</text>
    <text x="740" y="114" text-anchor="middle" font-size="10" fill="#64748b">• Start at +q, terminate at -q</text>
  </svg>
</div>`;

const questions = [];

// Exercise 1.1
questions.push(createQCard(
  'c12p-ch1-q1', 'Exercise 1.1', 'NCERT Exercise',
  'What is the force between two small charged spheres having charges of $2 \\times 10^{-7}\\text{ C}$ and $3 \\times 10^{-7}\\text{ C}$ placed $30\\text{ cm}$ apart in air?',
  `<div class="step">
    <b>Given Data:</b><br>
    Charge on first sphere, $q_1 = 2 \\times 10^{-7}\\text{ C}$<br>
    Charge on second sphere, $q_2 = 3 \\times 10^{-7}\\text{ C}$<br>
    Distance between spheres, $r = 30\\text{ cm} = 0.3\\text{ m}$<br>
    Electrostatic constant in air, $k = \\frac{1}{4\\pi\\varepsilon_0} = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$<br><br>
    <b>Formula (Coulomb\'s Law):</b>
    $$F = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q_1 q_2|}{r^2}$$<br>
    <b>Calculation:</b>
    $$F = \\frac{9 \\times 10^9 \\times (2 \\times 10^{-7}) \\times (3 \\times 10^{-7})}{(0.3)^2}$$
    $$F = \\frac{9 \\times 10^9 \\times 6 \\times 10^{-14}}{0.09} = \\frac{54 \\times 10^{-5}}{9 \\times 10^{-2}} = \\mathbf{6 \\times 10^{-3}\\text{ N}}$$
    Since both charges are positive (like charges), the force between them is <b>repulsive</b>.
  </div>`,
  '2 Marks',
  [
    ['Formula substitution: F = (1/4πε₀) · (q₁q₂ / r²)', '1 Mark'],
    ['Final magnitude (6 × 10⁻³ N) and direction (repulsive)', '1 Mark']
  ]
));

// Exercise 1.2
questions.push(createQCard(
  'c12p-ch1-q2', 'Exercise 1.2', 'NCERT Exercise',
  'The electrostatic force on a small sphere of charge $0.4\\ \\mu\\text{C}$ due to another small sphere of charge $-0.8\\ \\mu\\text{C}$ in air is $0.2\\text{ N}$.<br>(a) What is the distance between the two spheres?<br>(b) What is the force on the second sphere due to the first?',
  `<div class="step">
    <b>Given Data:</b><br>
    $q_1 = 0.4\\ \\mu\\text{C} = 0.4 \\times 10^{-6}\\text{ C}$<br>
    $q_2 = -0.8\\ \\mu\\text{C} = -0.8 \\times 10^{-6}\\text{ C}$<br>
    Attractive force, $F = 0.2\\text{ N}$<br><br>
    <b>(a) Distance between the two spheres ($r$):</b><br>
    According to Coulomb\'s law:
    $$F = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q_1 q_2|}{r^2} \\implies r^2 = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q_1 q_2|}{F}$$
    $$r^2 = \\frac{9 \\times 10^9 \\times (0.4 \\times 10^{-6}) \\times (0.8 \\times 10^{-6})}{0.2}$$
    $$r^2 = \\frac{9 \\times 10^9 \\times 0.32 \\times 10^{-12}}{0.2} = \\frac{2.88 \\times 10^{-3}}{0.2} = 1.44 \\times 10^{-2}\\text{ m}^2$$
    $$r = \\sqrt{1.44 \\times 10^{-2}} = \\mathbf{0.12\\text{ m} = 12\\text{ cm}}$$<br><br>
    <b>(b) Force on the second sphere due to the first:</b><br>
    By Newton\'s third law of motion (action-reaction pair), the electrostatic force exerted by the first sphere on the second sphere is equal in magnitude and opposite in direction to the force exerted by the second sphere on the first sphere.<br>
    Therefore, the force on the second sphere due to the first is <b>$0.2\\text{ N}$ (attractive, towards the first sphere)</b>.
  </div>`,
  '2 Marks',
  [
    ['(a) Correct calculation of distance r = 0.12 m (12 cm)', '1 Mark'],
    ['(b) Newton\'s third law application: 0.2 N (attractive)', '1 Mark']
  ]
));

// Exercise 1.3
questions.push(createQCard(
  'c12p-ch1-q3', 'Exercise 1.3', 'NCERT Exercise',
  'Check that the ratio $k e^2 / (G m_e m_p)$ is dimensionless. Look up a Table of Physical Constants and determine the value of this ratio. What does the ratio signify?',
  `<div class="step">
    <b>1. Dimensional Analysis of the Ratio:</b><br>
    The ratio is given by:
    $$X = \\frac{k e^2}{G m_e m_p}$$
    Units of constituents:
    <ul style="margin-left:20px; line-height:1.75;">
      <li>$[k] = \\text{N}\\cdot\\text{m}^2/\\text{C}^2 = [\\text{M L}^3 \\text{T}^{-4} \\text{A}^{-2}]$</li>
      <li>$[e^2] = \\text{C}^2 = [\\text{A}^2 \\text{T}^2]$</li>
      <li>$[G] = \\text{N}\\cdot\\text{m}^2/\\text{kg}^2 = [\\text{M}^{-1} \\text{L}^3 \\text{T}^{-2}]$</li>
      <li>$[m_e m_p] = \\text{kg}^2 = [\\text{M}^2]$</li>
    </ul>
    Dimensional formula:
    $$[X] = \\frac{[\\text{M L}^3 \\text{T}^{-4} \\text{A}^{-2}][\\text{A}^2 \\text{T}^2]}{[\\text{M}^{-1} \\text{L}^3 \\text{T}^{-2}][\\text{M}^2]} = \\frac{[\\text{M L}^3 \\text{T}^{-2}]}{[\\text{M L}^3 \\text{T}^{-2}]} = [\\mathbf{M^0 L^0 T^0}]$$
    Hence, the ratio is strictly <b>dimensionless</b>.<br><br>
    <b>2. Numerical Value of the Ratio:</b><br>
    Physical constants:
    $k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$, $e = 1.6 \\times 10^{-19}\\text{ C}$, $G = 6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$<br>
    Mass of electron, $m_e = 9.11 \\times 10^{-31}\\text{ kg}$<br>
    Mass of proton, $m_p = 1.67 \\times 10^{-27}\\text{ kg}$<br>
    $$X = \\frac{9 \\times 10^9 \\times (1.6 \\times 10^{-19})^2}{6.67 \\times 10^{-11} \\times (9.11 \\times 10^{-31}) \\times (1.67 \\times 10^{-27})}$$
    $$X = \\frac{9 \\times 10^9 \\times 2.56 \\times 10^{-38}}{101.47 \\times 10^{-69}} = \\frac{2.304 \\times 10^{-28}}{1.015 \\times 10^{-67}} \\approx \\mathbf{2.27 \\times 10^{39}}$$<br><br>
    <b>3. Physical Significance:</b><br>
    This dimensionless ratio represents the ratio of the <b>electrostatic force to the gravitational force</b> between an electron and a proton separated by any distance $r$:
    $$\\frac{F_e}{F_g} = \\frac{k e^2 / r^2}{G m_e m_p / r^2} = \\frac{k e^2}{G m_e m_p} \\approx 2.3 \\times 10^{39}$$
    This shows that the electrostatic force between subatomic particles is unimaginably stronger (by $\\sim 10^{39}$ times) than the gravitational force, making gravity completely negligible in atomic and molecular processes.
  </div>`,
  '3 Marks',
  [
    ['Dimensional verification showing [M⁰L⁰T⁰]', '1 Mark'],
    ['Numerical calculation yielding ~2.27 × 10³⁹', '1 Mark'],
    ['Physical significance: Fe/Fg ratio showing dominance of electrostatic force', '1 Mark']
  ]
));

// Exercise 1.4
questions.push(createQCard(
  'c12p-ch1-q4', 'Exercise 1.4', 'NCERT Exercise',
  '(a) Explain the meaning of the statement ‘electric charge of a body is quantised’.<br>(b) Why can one ignore quantisation of electric charge when dealing with macroscopic i.e., large scale charges?',
  `<div class="step">
    <b>(a) Meaning of Quantisation of Electric Charge:</b><br>
    Quantisation of charge means that the total electric charge ($q$) on any physically existing body is always an integral multiple of a basic, fundamental unit of elementary charge ($e = 1.6 \\times 10^{-19}\\text{ C}$):
    $$q = \\pm n e \\quad (\\text{where } n = 1, 2, 3, \\dots)$$
    Charge cannot take arbitrary continuous fractional values (such as $0.5e$ or $1.7e$) because charging involves the transfer of an integral number of discrete electrons.<br><br>
    <b>(b) Why Quantisation is Ignored at Macroscopic Scales:</b><br>
    At macroscopic scales, charges involved are typically of the order of microcoulombs ($\mu\\text{C}$) or coulombs ($\text{C}$).<br>
    For example, a charge of $1\\ \\mu\\text{C}$ corresponds to:
    $$n = \\frac{q}{e} = \\frac{10^{-6}\\text{ C}}{1.6 \\times 10^{-19}\\text{ C}} \\approx 6.25 \\times 10^{12} \\text{ electrons}$$
    Because the elementary charge $e$ is exceedingly tiny compared to macroscopic charges, adding or removing millions of electrons appears as a smooth, continuous variation of charge rather than discrete jumps—analogous to a continuous stream of water viewed macroscopically instead of individual water molecules. Hence, quantisation is practically ignored in macroscopic electrodynamics.
  </div>`,
  '2 Marks',
  [
    ['(a) Definition of charge quantisation: q = ±ne with integral n', '1 Mark'],
    ['(b) Scale comparison showing immense electron count (~10¹² per μC) rendering charge effectively continuous', '1 Mark']
  ]
));

// Exercise 1.5
questions.push(createQCard(
  'c12p-ch1-q5', 'Exercise 1.5', 'NCERT Exercise',
  'When a glass rod is rubbed with a silk cloth, charges appear on both. A similar phenomenon is observed with many other pairs of bodies. Explain how this observation is consistent with the law of conservation of charge.',
  `<div class="step">
    <b>Consistency with the Law of Conservation of Charge:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Initial State:</strong> Before rubbing, both the glass rod and the silk cloth are electrically neutral. The net charge of the isolated system (glass rod + silk cloth) is zero:
      $$q_{\\text{initial}} = 0$$</li>
      <li><strong>Mechanism of Charging:</strong> When the glass rod is rubbed with silk, friction causes loosely bound valence electrons from atoms of the glass rod to be transferred to the silk cloth.
        <ul>
          <li>The glass rod loses a certain number of electrons ($n$) and acquires a positive charge $+ne$.</li>
          <li>The silk cloth gains the exact same number of electrons ($n$) and acquires an equal negative charge $-ne$.</li>
        </ul>
      </li>
      <li><strong>Final State:</strong> The net charge of the system after rubbing is:
      $$q_{\\text{final}} = (+ne) + (-ne) = \\mathbf{0}$$</li>
    </ol>
    No new charge is created or destroyed; charges are merely transferred from one body to another. Thus, the total electric charge of the isolated system remains strictly conserved, fully consistent with the <b>Law of Conservation of Electric Charge</b>.
  </div>`,
  '2 Marks',
  [
    ['Explanation of electron transfer between glass rod (+ne) and silk cloth (-ne)', '1 Mark'],
    ['Net charge remains zero before and after rubbing (conservation demonstrated)', '1 Mark']
  ]
));

// Exercise 1.6
questions.push(createQCard(
  'c12p-ch1-q6', 'Exercise 1.6', 'NCERT Exercise',
  'Four point charges $q_A = 2\\ \\mu\\text{C}$, $q_B = -5\\ \\mu\\text{C}$, $q_C = 2\\ \\mu\\text{C}$, and $q_D = -5\\ \\mu\\text{C}$ are located at the corners of a square $ABCD$ of side $10\\text{ cm}$. What is the force on a charge of $1\\ \\mu\\text{C}$ placed at the centre of the square?',
  `<div class="step">
    <b>Geometry and Symmetry Analysis:</b><br>
    Let $ABCD$ be a square of side $a = 10\\text{ cm} = 0.1\\text{ m}$.<br>
    Length of each diagonal:
    $$d = a\\sqrt{2} = 10\\sqrt{2}\\text{ cm}$$
    The centre $O$ of the square is the intersection point of the diagonals. The distance from $O$ to each corner is:
    $$r = OA = OB = OC = OD = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}\\text{ cm} = 5\\sqrt{2} \\times 10^{-2}\\text{ m}$$
    Let a test charge $q_0 = 1\\ \\mu\\text{C}$ be placed at $O$.<br><br>
    <b>Forces along Diagonal $AC$:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>$q_A = +2\\ \\mu\\text{C}$ and $q_C = +2\\ \\mu\\text{C}$ (equal positive charges).</li>
      <li>Force exerted by $q_A$ on $q_0$ is repulsive, directed away from $A$ along $\\vec{OA}$, i.e., towards $C$:
      $$F_A = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q_A q_0|}{r^2} \\quad (\\text{along } \\vec{OC})$$</li>
      <li>Force exerted by $q_C$ on $q_0$ is repulsive, directed away from $C$ along $\\vec{OC}$, i.e., towards $A$:
      $$F_C = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q_C q_0|}{r^2} \\quad (\\text{along } \\vec{OA})$$</li>
      <li>Since $|q_A| = |q_C|$ and distances are identical, $\\mathbf{F_A = -F_C} \\implies \\mathbf{F_A + F_C = 0}$.</li>
    </ul><br>
    <b>Forces along Diagonal $BD$:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>$q_B = -5\\ \\mu\\text{C}$ and $q_D = -5\\ \\mu\\text{C}$ (equal negative charges).</li>
      <li>Force exerted by $q_B$ on $q_0$ is attractive, directed towards $B$:
      $$F_B = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q_B q_0|}{r^2} \\quad (\\text{along } \\vec{OB})$$</li>
      <li>Force exerted by $q_D$ on $q_0$ is attractive, directed towards $D$:
      $$F_D = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q_D q_0|}{r^2} \\quad (\\text{along } \\vec{OD})$$</li>
      <li>Since $|q_B| = |q_D|$ and distances are identical, $\\mathbf{F_B = -F_D} \\implies \\mathbf{F_B + F_D = 0}$.</li>
    </ul><br>
    <b>Total Net Force:</b>
    $$\\mathbf{F_{\\text{net}} = F_A + F_B + F_C + F_D = 0\\text{ N}}$$
  </div>`,
  '2 Marks',
  [
    ['Pairwise cancellation of forces along diagonal AC (FA = -FC)', '1 Mark'],
    ['Pairwise cancellation of forces along diagonal BD (FB = -FD) leading to Fnet = 0 N', '1 Mark']
  ]
));

// Exercise 1.7
questions.push(createQCard(
  'c12p-ch1-q7', 'Exercise 1.7', 'NCERT Exercise',
  '(a) An electrostatic field line is a continuous curve. That is, a field line cannot have sudden breaks. Why not?<br>(b) Explain why two field lines never cross each other at any point?',
  `<div class="step">
    <b>(a) Why an electrostatic field line is a continuous curve without sudden breaks:</b><br>
    An electric field line is the continuous path along which a hypothetical positive unit test charge would move if free to do so in an electrostatic field.<br>
    Electric field originates from source charges and spreads continuously through surrounding space according to Coulomb\'s law ($E \\propto 1/r^2$). The electric field at any point in empty space changes smoothly from one point to neighboring points; it cannot drop to zero instantaneously at one point and reappear at the next without another charge being present. If there were a sudden break in a field line, it would imply that the electric force on a test charge abruptly disappears at that point, which is physically impossible. Hence, electric field lines are <b>continuous curves without breaks</b>.<br><br>
    <b>(b) Why two field lines can never cross each other:</b><br>
    The tangent drawn to an electric field line at any point gives the <b>unique direction of the net electric field vector ($\mathbf{E}$)</b> at that point.<br>
    If two field lines were to intersect at a point, one could draw two distinct tangents at the single point of intersection. This would mean that the electric field at that single point has <b>two different directions simultaneously</b>, which is impossible because a net vector field can have only one unique resultant direction at any given point in space. Hence, two field lines can never cross.
  </div>`,
  '2 Marks',
  [
    ['(a) Continuous curve explanation: electrostatic force acts continuously without sudden disappearances', '1 Mark'],
    ['(b) Tangent gives unique field direction; intersection would imply two simultaneous directions (impossible)', '1 Mark']
  ]
));

// Exercise 1.8
questions.push(createQCard(
  'c12p-ch1-q8', 'Exercise 1.8', 'NCERT Exercise',
  'Two point charges $q_A = 3\\ \\mu\\text{C}$ and $q_B = -3\\ \\mu\\text{C}$ are located $20\\text{ cm}$ apart in vacuum.<br>(a) What is the electric field at the midpoint $O$ of the line $AB$ joining the two charges?<br>(b) If a negative test charge of magnitude $1.5 \\times 10^{-9}\\text{ C}$ is placed at this point, what is the force experienced by the test charge?',
  `<div class="step">
    <b>Given Data:</b><br>
    $q_A = +3\\ \\mu\\text{C} = 3 \\times 10^{-6}\\text{ C}$ (at point $A$)<br>
    $q_B = -3\\ \\mu\\text{C} = -3 \\times 10^{-6}\\text{ C}$ (at point $B$)<br>
    Separation $AB = 20\\text{ cm} = 0.20\\text{ m}$<br>
    Distance of midpoint $O$ from each charge: $r = \\frac{0.20}{2} = 0.10\\text{ m}$<br><br>
    <b>(a) Electric field at midpoint $O$:</b><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Electric field due to positive charge $q_A$:
      $$E_A = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q_A|}{r^2} = \\frac{9 \\times 10^9 \\times 3 \\times 10^{-6}}{(0.10)^2} = \\frac{2.7 \\times 10^4}{0.01} = 2.7 \\times 10^6\\text{ N/C} \\quad (\\text{directed away from } A, \\text{ i.e., towards } B)$$</li>
      <li>Electric field due to negative charge $q_B$:
      $$E_B = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q_B|}{r^2} = \\frac{9 \\times 10^9 \\times 3 \\times 10^{-6}}{(0.10)^2} = 2.7 \\times 10^6\\text{ N/C} \\quad (\\text{directed towards } B)$$</li>
      <li>Since both fields point in the same direction (from $A$ to $B$):
      $$E_{\\text{net}} = E_A + E_B = 2.7 \\times 10^6 + 2.7 \\times 10^6 = \\mathbf{5.4 \\times 10^6\\text{ N/C} \\quad (\\text{along } \\vec{AB})}$$</li>
    </ul><br>
    <b>(b) Force experienced by negative test charge $q_0 = -1.5 \\times 10^{-9}\\text{ C}$:</b><br>
    $$F = q_0 E_{\\text{net}} = (-1.5 \\times 10^{-9}\\text{ C}) \\times (5.4 \\times 10^6\\text{ N/C})$$
    $$|F| = 1.5 \\times 10^{-9} \\times 5.4 \\times 10^6 = \\mathbf{8.1 \\times 10^{-3}\\text{ N}}$$
    Since the test charge is negative, the force acts in the direction <b>opposite to the electric field</b>, i.e., <b>directed along $\\vec{OA}$ (towards $A$)</b>.
  </div>`,
  '3 Marks',
  [
    ['(a) Individual fields EA, EB = 2.7 × 10⁶ N/C and net E = 5.4 × 10⁶ N/C along AB', '2 Marks'],
    ['(b) Force calculation F = 8.1 × 10⁻³ N directed towards A', '1 Mark']
  ]
));

// Exercise 1.9
questions.push(createQCard(
  'c12p-ch1-q9', 'Exercise 1.9', 'NCERT Exercise',
  'A system has two charges $q_A = 2.5 \\times 10^{-7}\\text{ C}$ and $q_B = -2.5 \\times 10^{-7}\\text{ C}$ located at points $A: (0, 0, -15\\text{ cm})$ and $B: (0, 0, +15\\text{ cm})$, respectively. What are the total charge and electric dipole moment of the system?',
  `<div class="step">
    <b>1. Total Charge of the System:</b><br>
    The system consists of two equal and opposite point charges:
    $$q_{\\text{total}} = q_A + q_B = (2.5 \\times 10^{-7}\\text{ C}) + (-2.5 \\times 10^{-7}\\text{ C}) = \\mathbf{0\\text{ C}}$$<br>
    <b>2. Electric Dipole Moment ($\mathbf{p}$):</b><br>
    Coordinates of $A$ (carrying $+q$): $(0, 0, -15\\text{ cm}) = -0.15\\hat{\\mathbf{k}}\\text{ m}$<br>
    Coordinates of $B$ (carrying $-q$): $(0, 0, +15\\text{ cm}) = +0.15\\hat{\\mathbf{k}}\\text{ m}$<br>
    Distance between the two charges:
    $$2a = |z_B - z_A| = 15\\text{ cm} - (-15\\text{ cm}) = 30\\text{ cm} = 0.30\\text{ m}$$
    Magnitude of dipole moment:
    $$p = q \\times 2a = (2.5 \\times 10^{-7}\\text{ C}) \\times (0.30\\text{ m}) = \\mathbf{7.5 \\times 10^{-8}\\text{ C}\\cdot\\text{m}}$$<br>
    <b>Direction of Dipole Moment:</b><br>
    By convention, the electric dipole moment vector $\\mathbf{p}$ is directed from the negative charge ($q_B$ at $z = +15\\text{ cm}$) to the positive charge ($q_A$ at $z = -15\\text{ cm}$), which is along the <b>negative $z$-axis ($-\\hat{\\mathbf{k}}$)</b>:
    $$\\mathbf{p} = -7.5 \\times 10^{-8}\\ \\hat{\\mathbf{k}}\\text{ C}\\cdot\\text{m}$$
  </div>`,
  '2 Marks',
  [
    ['Total charge calculation: q_total = 0 C', '1 Mark'],
    ['Dipole moment: magnitude 7.5 × 10⁻⁸ C·m directed along negative z-axis', '1 Mark']
  ]
));

// Exercise 1.10
questions.push(createQCard(
  'c12p-ch1-q10', 'Exercise 1.10', 'NCERT Exercise',
  'An electric dipole with dipole moment $4 \\times 10^{-9}\\text{ C}\\cdot\\text{m}$ is aligned at $30^\\circ$ with the direction of a uniform electric field of magnitude $5 \\times 10^4\\text{ N C}^{-1}$. Calculate the magnitude of the torque acting on the dipole.',
  `<div class="step">
    <b>Given Data:</b><br>
    Dipole moment, $p = 4 \\times 10^{-9}\\text{ C}\\cdot\\text{m}$<br>
    Electric field magnitude, $E = 5 \\times 10^4\\text{ N/C}$<br>
    Angle between $\\mathbf{p}$ and $\\mathbf{E}$, $\\theta = 30^\\circ$<br><br>
    <b>Formula for Torque on an Electric Dipole:</b>
    $$\\tau = \\mathbf{p} \\times \\mathbf{E} \\implies \\tau = p E \\sin\\theta$$<br>
    <b>Calculation:</b>
    $$\\tau = (4 \\times 10^{-9}) \\times (5 \\times 10^4) \\times \\sin 30^\\circ$$
    $$\\tau = (20 \\times 10^{-5}) \\times 0.5 = 10 \\times 10^{-5} = \\mathbf{10^{-4}\\text{ N}\\cdot\\text{m}}$$
    The magnitude of torque acting on the dipole is <b>$10^{-4}\\text{ N}\\cdot\\text{m}$</b>.
  </div>`,
  '2 Marks',
  [
    ['Formula substitution: τ = pE sin θ', '1 Mark'],
    ['Correct computation: τ = 10⁻⁴ N·m', '1 Mark']
  ]
));

// Exercise 1.11
questions.push(createQCard(
  'c12p-ch1-q11', 'Exercise 1.11', 'NCERT Exercise',
  'A polythene piece rubbed with wool is found to have a negative charge of $3 \\times 10^{-7}\\text{ C}$.<br>(a) Estimate the number of electrons transferred (from which to which?).<br>(b) Is there a transfer of mass from wool to polythene?',
  `<div class="step">
    <b>(a) Number of Electrons Transferred:</b><br>
    Charge on polythene, $q = -3 \\times 10^{-7}\\text{ C}$<br>
    Elementary charge on an electron, $e = -1.6 \\times 10^{-19}\\text{ C}$<br>
    Using quantisation of charge ($q = n e$):
    $$n = \\frac{|q|}{e} = \\frac{3 \\times 10^{-7}\\text{ C}}{1.6 \\times 10^{-19}\\text{ C}} = \\mathbf{1.875 \\times 10^{12} \\approx 2 \\times 10^{12} \\text{ electrons}}$$
    Since polythene acquires negative charge, electrons are transferred <b>from wool to polythene</b>.<br><br>
    <b>(b) Transfer of Mass:</b><br>
    Yes, since electrons possess a finite rest mass ($m_e = 9.11 \\times 10^{-31}\\text{ kg}$), there is indeed a transfer of mass from wool to polythene.<br>
    Total mass transferred:
    $$m = n \\times m_e = (1.875 \\times 10^{12}) \\times (9.11 \\times 10^{-31}\\text{ kg}) = \\mathbf{1.71 \\times 10^{-18}\\text{ kg}}$$
    (This transferred mass is infinitesimally small and undetectable macroscopically, but theoretically exists).
  </div>`,
  '2 Marks',
  [
    ['(a) Number of electrons ~ 1.875 × 10¹² transferred from wool to polythene', '1 Mark'],
    ['(b) Confirmation of mass transfer and calculation: m ≈ 1.71 × 10⁻¹⁸ kg', '1 Mark']
  ]
));

// Exercise 1.12
questions.push(createQCard(
  'c12p-ch1-q12', 'Exercise 1.12', 'NCERT Exercise',
  '(a) Two insulated charged copper spheres $A$ and $B$ have their centers separated by a distance of $50\\text{ cm}$. What is the mutual force of electrostatic repulsion if the charge on each is $6.5 \\times 10^{-7}\\text{ C}$? The radii of $A$ and $B$ are negligible compared to the distance of separation.<br>(b) What is the force of repulsion if each sphere is charged double the above amount, and the distance between them is halved?',
  `<div class="step">
    <b>(a) Mutual Force of Electrostatic Repulsion:</b><br>
    Given: $q_1 = q_2 = 6.5 \\times 10^{-7}\\text{ C}$, $r = 50\\text{ cm} = 0.5\\text{ m}$<br>
    $$F = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r^2} = \\frac{9 \\times 10^9 \\times (6.5 \\times 10^{-7})^2}{(0.5)^2}$$
    $$F = \\frac{9 \\times 10^9 \\times 42.25 \\times 10^{-14}}{0.25} = \\frac{380.25 \\times 10^{-5}}{0.25} = \\mathbf{1.521 \\times 10^{-2}\\text{ N}}$$
    The force of repulsion is <b>$1.52 \\times 10^{-2}\\text{ N}$</b>.<br><br>
    <b>(b) When charge is doubled ($q\' = 2q$) and distance is halved ($r\' = r/2$):</b><br>
    $$F\' = \\frac{1}{4\\pi\\varepsilon_0} \\frac{(2q_1)(2q_2)}{(r/2)^2} = \\frac{4 q_1 q_2}{r^2 / 4} = 16 \\times \\left(\\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r^2}\\right) = 16 F$$
    $$F\' = 16 \\times (1.521 \\times 10^{-2}\\text{ N}) = \\mathbf{0.243\\text{ N}}$$
  </div>`,
  '2 Marks',
  [
    ['(a) Calculation of initial force F = 1.52 × 10⁻² N', '1 Mark'],
    ['(b) Factor of 16 increase yielding F\' = 0.243 N', '1 Mark']
  ]
));

// Exercise 1.13
questions.push(createQCard(
  'c12p-ch1-q13', 'Exercise 1.13', 'NCERT Exercise',
  'Suppose the spheres $A$ and $B$ in Exercise 1.12 have identical sizes. A third sphere of the same size but uncharged is brought in contact with the first, then brought in contact with the second, and finally removed from both. What is the new force of repulsion between $A$ and $B$?',
  `<div class="step">
    <b>Step-by-Step Charge Redistribution (Conduction):</b><br>
    Initial charges: $q_A = q$, $q_B = q$, where $q = 6.5 \\times 10^{-7}\\text{ C}$. Uncharged sphere $C$: $q_C = 0$.<br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Sphere $C$ touched with Sphere $A$:</strong><br>
      Since they are identical in size, charge divides equally:
      $$q_A\' = q_C\' = \\frac{q_A + q_C}{2} = \\frac{q + 0}{2} = \\frac{q}{2}$$</li>
      <li><strong>Sphere $C$ (now carrying $q/2$) touched with Sphere $B$ (carrying $q$):</strong><br>
      Total charge shared equally between $B$ and $C$:
      $$q_B\' = q_C\'\' = \\frac{q_B + q_C\'}{2} = \\frac{q + q/2}{2} = \\frac{3q/2}{2} = \\frac{3q}{4}$$</li>
      <li><strong>Sphere $C$ is removed:</strong><br>
      Final charge on $A$: $q_A\' = \\frac{q}{2}$<br>
      Final charge on $B$: $q_B\' = \\frac{3q}{4}$</li>
    </ol>
    <b>New Force of Repulsion ($F\'$):</b><br>
    $$F\' = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_A\' q_B\'}{r^2} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{(q/2)(3q/4)}{r^2} = \\frac{3}{8} \\left(\\frac{1}{4\\pi\\varepsilon_0} \\frac{q^2}{r^2}\\right) = \\frac{3}{8} F$$
    From Exercise 1.12, $F = 1.521 \\times 10^{-2}\\text{ N}$:
    $$F\' = \\frac{3}{8} \\times 1.521 \\times 10^{-2}\\text{ N} = \\mathbf{5.70 \\times 10^{-3}\\text{ N}}$$
  </div>`,
  '2 Marks',
  [
    ['Charge sharing analysis: qA\' = q/2 and qB\' = 3q/4', '1 Mark'],
    ['New force F\' = (3/8)F = 5.70 × 10⁻³ N', '1 Mark']
  ]
));

// Exercise 1.14
questions.push(createQCard(
  'c12p-ch1-q14', 'Exercise 1.14', 'NCERT Exercise',
  'Figure shows tracks of three charged particles in a uniform electrostatic field. Particles 1 and 2 deflect towards the positive plate, while particle 3 deflects towards the negative plate. Give the signs of the three charges. Which particle has the highest charge to mass ratio ($q/m$)?',
  `<div class="step">
    <b>1. Signs of the Charges:</b><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Particles 1 and 2 are deflected towards the positively charged upper plate. Since unlike charges attract, <b>particles 1 and 2 carry negative charge</b>.</li>
      <li>Particle 3 is deflected towards the negatively charged lower plate. Hence, <b>particle 3 carries positive charge</b>.</li>
    </ul><br>
    <b>2. Particle with Highest Charge to Mass Ratio ($q/m$):</b><br>
    Let $v_x$ be the horizontal velocity of a charged particle entering the electric field $E$.<br>
    The vertical acceleration experienced by the particle due to electric force is:
    $$a_y = \\frac{F}{m} = \\frac{q E}{m}$$
    If the horizontal length of the plates is $x$, time spent in the field is $t = x / v_x$.<br>
    The vertical deflection $y$ is given by:
    $$y = \\frac{1}{2} a_y t^2 = \\frac{1}{2} \\left(\\frac{q E}{m}\\right) \\left(\\frac{x}{v_x}\\right)^2 \\implies y \\propto \\frac{q}{m}$$
    Thus, the vertical deflection $y$ is directly proportional to the charge-to-mass ratio ($q/m$) for particles entering with identical kinetic energy / velocity.<br>
    Since <b>particle 3 exhibits the greatest vertical deflection</b> among the three tracks, <b>particle 3 has the highest charge to mass ratio ($q/m$)</b>.
  </div>`,
  '2 Marks',
  [
    ['Identification of charge signs: 1 & 2 negative, 3 positive', '1 Mark'],
    ['Derivation showing y ∝ (q/m) and conclusion that Particle 3 has highest ratio', '1 Mark']
  ]
));

// Exercise 1.15
questions.push(createQCard(
  'c12p-ch1-q15', 'Exercise 1.15', 'NCERT Exercise',
  'Consider a uniform electric field $\\mathbf{E} = 3 \\times 10^3\\ \\hat{\\mathbf{i}}\\text{ N/C}$.<br>(a) What is the flux of this field through a square of $10\\text{ cm}$ on a side whose plane is parallel to the $yz$ plane?<br>(b) What is the flux through the same square if the normal to its plane makes a $60^\\circ$ angle with the $x$-axis?',
  `<div class="step">
    <b>Given:</b><br>
    Electric field, $\\mathbf{E} = 3 \\times 10^3\\ \\hat{\\mathbf{i}}\\text{ N/C}$<br>
    Side of square, $s = 10\\text{ cm} = 0.1\\text{ m}$<br>
    Area of square, $A = s^2 = (0.1)^2 = 0.01\\text{ m}^2 = 10^{-2}\\text{ m}^2$<br><br>
    <b>(a) Plane parallel to $yz$-plane:</b><br>
    The outward area vector $\\mathbf{A}$ of a plane parallel to the $yz$-plane points along the $+x$-axis ($\hat{\\mathbf{i}}$):
    $$\\mathbf{A} = 0.01\\ \\hat{\\mathbf{i}}\\text{ m}^2$$
    Electric flux:
    $$\\Phi = \\mathbf{E} \\cdot \\mathbf{A} = (3 \\times 10^3\\ \\hat{\\mathbf{i}}) \\cdot (10^{-2}\\ \\hat{\\mathbf{i}}) = \\mathbf{30\\text{ N}\\cdot\\text{m}^2/\\text{C}}$$<br>
    <b>(b) Normal makes $60^\\circ$ angle with the $x$-axis:</b><br>
    Angle between field $\\mathbf{E}$ (which lies along $x$-axis) and area normal $\\hat{\\mathbf{n}}$ is $\\theta = 60^\\circ$:
    $$\\Phi = E A \\cos\\theta = (3 \\times 10^3) \\times 10^{-2} \\times \\cos 60^\\circ$$
    $$\\Phi = 30 \\times 0.5 = \\mathbf{15\\text{ N}\\cdot\\text{m}^2/\\text{C}}$$
  </div>`,
  '2 Marks',
  [
    ['(a) Flux parallel to yz plane: Φ = 30 N·m²/C', '1 Mark'],
    ['(b) Flux at 60°: Φ = EA cos 60° = 15 N·m²/C', '1 Mark']
  ]
));

// Exercise 1.16
questions.push(createQCard(
  'c12p-ch1-q16', 'Exercise 1.16', 'NCERT Exercise',
  'What is the net flux of the uniform electric field of Exercise 1.15 through a cube of side $20\\text{ cm}$ oriented so that its faces are parallel to the coordinate planes?',
  `<div class="step">
    <b>Electric Flux through a Closed Surface in a Uniform Field:</b><br>
    For any closed surface placed in a <b>uniform electric field</b>:
    <ul style="margin-left:20px; line-height:1.75;">
      <li>The number of electric field lines entering the closed surface from one side is strictly equal to the number of field lines leaving the opposite side.</li>
      <li>By Gauss\'s Law:
      $$\\Phi_{\\text{net}} = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0}$$</li>
      <li>Since there is no net charge enclosed inside the cube ($q_{\\text{enclosed}} = 0$):
      $$\\Phi_{\\text{net}} = \\mathbf{0\\text{ N}\\cdot\\text{m}^2/\\text{C}}$$</li>
    </ul>
    Specifically, the inward flux through the face at $x = 0$ is $-E A = -3 \\times 10^3 \\times (0.2)^2 = -120\\text{ N}\\cdot\\text{m}^2/\\text{C}$, while the outward flux through the face at $x = 0.2\\text{ m}$ is $+120\\text{ N}\\cdot\\text{m}^2/\\text{C}$, and flux through all other four faces parallel to field lines is zero ($\mathbf{E} \\perp \\mathbf{A}$). Thus, total net flux is <b>zero</b>.
  </div>`,
  '1 Mark',
  [
    ['Net flux is zero (no enclosed charge in uniform electric field)', '1 Mark']
  ]
));

// Exercise 1.17
questions.push(createQCard(
  'c12p-ch1-q17', 'Exercise 1.17', 'NCERT Exercise',
  'Careful measurement of the electric field at the surface of a black box indicates that the net outward flux through the surface of the box is $8.0 \\times 10^3\\text{ N}\\cdot\\text{m}^2/\\text{C}$.<br>(a) What is the net charge inside the box?<br>(b) If the net outward flux through the surface of the box were zero, could you conclude that there were no charges inside the box? Why or Why not?',
  `<div class="step">
    <b>(a) Net charge inside the box:</b><br>
    Given: $\\Phi = 8.0 \\times 10^3\\text{ N}\\cdot\\text{m}^2/\\text{C}$<br>
    Permittivity of free space, $\\varepsilon_0 = 8.854 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)$<br>
    By Gauss\'s Law:
    $$\\Phi = \\frac{q_{\\text{net}}}{\\varepsilon_0} \\implies q_{\\text{net}} = \\Phi \\times \\varepsilon_0$$
    $$q_{\\text{net}} = (8.0 \\times 10^3) \\times (8.854 \\times 10^{-12}) = 70.83 \\times 10^{-9}\\text{ C} = \\mathbf{0.07\\ \\mu\\text{C} \\quad (\\text{or } 70.8\\text{ nC})}$$<br>
    <b>(b) If net outward flux were zero:</b><br>
    <b>No</b>, one cannot conclude that there are no charges inside the box.<br>
    By Gauss\'s law, $\\Phi = 0$ implies only that the <b>net enclosed charge ($q_{\\text{net}}$) is zero</b>. The box could contain equal amounts of positive and negative charges (such as multiple electric dipoles), so that $\\sum q_i = 0$. Hence, charges may be present inside, provided their algebraic sum is zero.
  </div>`,
  '2 Marks',
  [
    ['(a) Calculation of enclosed charge: q = 70.8 nC (or 0.07 μC)', '1 Mark'],
    ['(b) Explanation that zero net flux implies net charge is zero, not necessarily absence of charges', '1 Mark']
  ]
));

// Exercise 1.18
questions.push(createQCard(
  'c12p-ch1-q18', 'Exercise 1.18', 'NCERT Exercise',
  'A point charge $+10\\ \\mu\\text{C}$ is a distance $5\\text{ cm}$ directly above the centre of a square of side $10\\text{ cm}$. What is the magnitude of the electric flux through the square? (Hint: Think of the square as one face of a cube with edge $10\\text{ cm}$).',
  `<div class="step">
    <b>Symmetry Consideration via a Gaussian Cube:</b><br>
    Consider a hypothetical Gaussian cube of side $a = 10\\text{ cm}$ centered around the point charge $q = +10\\ \\mu\\text{C}$.<br>
    Since the charge is located $5\\text{ cm}$ above the centre of the given square, it is positioned exactly at the <b>geometric centre of this cube</b> (equidistant at $5\\text{ cm}$ from all 6 faces of the cube).<br><br>
    <b>Total Electric Flux through the Cube (Gauss\'s Law):</b>
    $$\\Phi_{\\text{total}} = \\frac{q}{\\varepsilon_0}$$
    By symmetry, the electric flux is distributed equally through all 6 identical faces of the cube.<br><br>
    <b>Flux through One Face (the given square):</b>
    $$\\Phi_{\\text{square}} = \\frac{1}{6} \\Phi_{\\text{total}} = \\frac{q}{6\\varepsilon_0}$$<br>
    <b>Calculation:</b>
    $$\\Phi_{\\text{square}} = \\frac{10 \\times 10^{-6}\\text{ C}}{6 \\times (8.854 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2))}$$
    $$\\Phi_{\\text{square}} = \\frac{10^{-5}}{53.124 \\times 10^{-12}} = \\mathbf{1.88 \\times 10^5\\text{ N}\\cdot\\text{m}^2/\\text{C}}$$
  </div>`,
  '2 Marks',
  [
    ['Symmetry argument using a Gaussian cube: Φ_face = (1/6) q/ε₀', '1 Mark'],
    ['Numerical calculation: Φ = 1.88 × 10⁵ N·m²/C', '1 Mark']
  ]
));

// Exercise 1.19
questions.push(createQCard(
  'c12p-ch1-q19', 'Exercise 1.19', 'NCERT Exercise',
  'A point charge of $2.0\\ \\mu\\text{C}$ is at the centre of a cubic Gaussian surface $9.0\\text{ cm}$ on edge. What is the net electric flux through the surface?',
  `<div class="step">
    <b>Given Data:</b><br>
    Point charge, $q = 2.0\\ \\mu\\text{C} = 2.0 \\times 10^{-6}\\text{ C}$<br>
    Edge of cubic surface, $a = 9.0\\text{ cm}$<br>
    Permittivity of vacuum, $\\varepsilon_0 = 8.854 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)$<br><br>
    <b>Gauss\'s Law:</b><br>
    The net electric flux through any closed Gaussian surface depends <b>only on the net charge enclosed</b> within the surface and is completely independent of the shape, dimensions, or size of the surface:
    $$\\Phi_{\\text{net}} = \\frac{q}{\\varepsilon_0}$$<br>
    <b>Calculation:</b>
    $$\\Phi_{\\text{net}} = \\frac{2.0 \\times 10^{-6}\\text{ C}}{8.854 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)} = \\mathbf{2.26 \\times 10^5\\text{ N}\\cdot\\text{m}^2/\\text{C}}$$
  </div>`,
  '1 Mark',
  [
    ['Calculation of total flux using Gauss\'s law: Φ = q/ε₀ = 2.26 × 10⁵ N·m²/C', '1 Mark']
  ]
));

// Exercise 1.20
questions.push(createQCard(
  'c12p-ch1-q20', 'Exercise 1.20', 'NCERT Exercise',
  'A point charge causes an electric flux of $-1.0 \\times 10^3\\text{ N}\\cdot\\text{m}^2/\\text{C}$ to pass through a spherical Gaussian surface of $10.0\\text{ cm}$ radius centered on the charge.<br>(a) If the radius of the Gaussian surface were doubled, how much flux would pass through the surface?<br>(b) What is the value of the point charge?',
  `<div class="step">
    <b>(a) Effect of Doubling the Radius:</b><br>
    According to Gauss\'s Law:
    $$\\Phi = \\frac{q_{\\text{enclosed}}}{\\varepsilon_0}$$
    The total electric flux passing through a closed surface depends solely on the amount of charge enclosed within it and does not depend on the radius or surface area of the Gaussian sphere. As the radius is doubled from $10\\text{ cm}$ to $20\\text{ cm}$, the enclosed charge remains unchanged.<br>
    Therefore, the electric flux passing through the surface remains <b>$-1.0 \\times 10^3\\text{ N}\\cdot\\text{m}^2/\\text{C}$ (unchanged)</b>.<br><br>
    <b>(b) Value of the Point Charge:</b><br>
    $$q = \\Phi \\times \\varepsilon_0 = (-1.0 \\times 10^3\\text{ N}\\cdot\\text{m}^2/\\text{C}) \\times (8.854 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2))$$
    $$q = -8.854 \\times 10^{-9}\\text{ C} = \\mathbf{-8.85\\text{ nC}}$$
    (The negative sign indicates that the charge is negative, corresponding to inward flux).
  </div>`,
  '2 Marks',
  [
    ['(a) Invariance of flux with radius: remains -1.0 × 10³ N·m²/C', '1 Mark'],
    ['(b) Charge calculation: q = -8.85 nC', '1 Mark']
  ]
));

// Exercise 1.21
questions.push(createQCard(
  'c12p-ch1-q21', 'Exercise 1.21', 'NCERT Exercise',
  'A conducting sphere of radius $10\\text{ cm}$ has an unknown charge. If the electric field $20\\text{ cm}$ from the centre of the sphere is $1.5 \\times 10^3\\text{ N/C}$ and points radially inward, what is the net charge on the sphere?',
  `<div class="step">
    <b>Given Data:</b><br>
    Radius of sphere, $R = 10\\text{ cm} = 0.1\\text{ m}$<br>
    Distance from centre, $r = 20\\text{ cm} = 0.2\\text{ m}$ (since $r > R$, the point lies outside the conducting sphere)<br>
    Electric field magnitude, $E = 1.5 \\times 10^3\\text{ N/C}$ (radially inward)<br><br>
    <b>Electric Field outside a Conducting Sphere:</b><br>
    For any point outside a uniformly charged conducting sphere, the entire charge $q$ can be treated as if it were concentrated at its centre:
    $$E = \\frac{1}{4\\pi\\varepsilon_0} \\frac{|q|}{r^2} \\implies |q| = \\frac{E r^2}{k}$$<br>
    <b>Calculation:</b>
    $$|q| = \\frac{(1.5 \\times 10^3) \\times (0.2)^2}{9 \\times 10^9} = \\frac{1.5 \\times 10^3 \\times 0.04}{9 \\times 10^9} = \\frac{60}{9 \\times 10^9} = 6.67 \\times 10^{-9}\\text{ C} = 6.67\\text{ nC}$$<br>
    <b>Sign of Charge:</b><br>
    Since the electric field points <b>radially inward</b>, the net charge on the conducting sphere must be <b>negative</b>:
    $$q = \\mathbf{-6.67\\text{ nC} \\quad (-6.67 \\times 10^{-9}\\text{ C})}$$
  </div>`,
  '2 Marks',
  [
    ['Formula: E = kq/r² for external point and calculation of magnitude 6.67 nC', '1 Mark'],
    ['Identification of negative sign from radially inward direction: q = -6.67 nC', '1 Mark']
  ]
));

// Exercise 1.22
questions.push(createQCard(
  'c12p-ch1-q22', 'Exercise 1.22', 'NCERT Exercise',
  'A uniformly charged conducting sphere of $2.4\\text{ m}$ diameter has a surface charge density of $80.0\\ \\mu\\text{C/m}^2$.<br>(a) Find the charge on the sphere.<br>(b) What is the total electric flux leaving the surface of the sphere?',
  `<div class="step">
    <b>Given Data:</b><br>
    Diameter of sphere, $D = 2.4\\text{ m} \\implies \\text{radius } R = 1.2\\text{ m}$<br>
    Surface charge density, $\\sigma = 80.0\\ \\mu\\text{C/m}^2 = 80.0 \\times 10^{-6}\\text{ C/m}^2$<br><br>
    <b>(a) Charge on the sphere ($q$):</b><br>
    Surface area of sphere:
    $$A = 4\\pi R^2 = 4 \\times 3.1416 \\times (1.2)^2 = 4 \\times 3.1416 \\times 1.44 = 18.096\\text{ m}^2$$
    Charge on the sphere:
    $$q = \\sigma A = (80.0 \\times 10^{-6}\\text{ C/m}^2) \\times 18.096\\text{ m}^2 = 1.447 \\times 10^{-3}\\text{ C} = \\mathbf{1.45 \\times 10^{-3}\\text{ C} \\quad (1.45\\text{ mC})}$$<br>
    <b>(b) Total electric flux leaving the surface ($\\Phi$):</b><br>
    By Gauss\'s Law:
    $$\\Phi = \\frac{q}{\\varepsilon_0} = \\frac{1.447 \\times 10^{-3}\\text{ C}}{8.854 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)}$$
    $$\\Phi = \\mathbf{1.63 \\times 10^8\\text{ N}\\cdot\\text{m}^2/\\text{C}}$$
  </div>`,
  '2 Marks',
  [
    ['(a) Surface area & charge: q = σ(4πR²) = 1.45 × 10⁻³ C', '1 Mark'],
    ['(b) Total outward flux: Φ = q/ε₀ = 1.63 × 10⁸ N·m²/C', '1 Mark']
  ]
));

// Exercise 1.23
questions.push(createQCard(
  'c12p-ch1-q23', 'Exercise 1.23', 'NCERT Exercise',
  'An infinite line charge produces a field of $9 \\times 10^4\\text{ N/C}$ at a distance of $2\\text{ cm}$. Calculate the linear charge density.',
  `<div class="step">
    <b>Given Data:</b><br>
    Electric field, $E = 9 \\times 10^4\\text{ N/C}$<br>
    Radial distance, $r = 2\\text{ cm} = 0.02\\text{ m}$<br><br>
    <b>Electric Field due to an Infinite Line Charge (Gauss\'s Law):</b>
    $$E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r} = \\frac{2k\\lambda}{r}$$
    where $\\lambda$ is the linear charge density and $k = \\frac{1}{4\\pi\\varepsilon_0} = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$.<br><br>
    <b>Rearranging for $\\lambda$:</b>
    $$\\lambda = \\frac{E r}{2k} = \\frac{(9 \\times 10^4) \\times 0.02}{2 \\times (9 \\times 10^9)}$$
    $$\\lambda = \\frac{1.8 \\times 10^3}{18 \\times 10^9} = 10^{-7}\\text{ C/m} = \\mathbf{0.1\\ \\mu\\text{C/m} \\quad (100\\text{ nC/m})}$$
  </div>`,
  '2 Marks',
  [
    ['Formula: E = λ / (2πε₀r) = 2kλ/r', '1 Mark'],
    ['Correct value: λ = 10⁻⁷ C/m (or 0.1 μC/m)', '1 Mark']
  ]
));

// Exercise 1.24
questions.push(createQCard(
  'c12p-ch1-q24', 'Exercise 1.24', 'NCERT Exercise',
  'Two large, thin metal plates are parallel and close to each other. On their inner faces, the plates have surface charge densities of opposite signs and of magnitude $17.0 \\times 10^{-22}\\text{ C/m}^2$. What is $\\mathbf{E}$:<br>(a) in the outer region of the first plate,<br>(b) in the outer region of the second plate, and<br>(c) between the plates?',
  `<div class="step">
    <b>Field Configuration between Oppositely Charged Parallel Plates:</b><br>
    Let Plate 1 have surface charge density $\\sigma_1 = +\\sigma$ and Plate 2 have $\\sigma_2 = -\\sigma$, where $\\sigma = 17.0 \\times 10^{-22}\\text{ C/m}^2$.<br>
    The electric field due to a single infinite thin plane sheet of charge is $E = \\frac{\\sigma}{2\\varepsilon_0}$ (directed away from positive plate and towards negative plate).<br><br>
    <b>(a) In the outer region of the first plate (Region I):</b><br>
    The field due to Plate 1 is directed to the left, and the field due to Plate 2 is directed to the right:
    $$E_I = \\frac{\\sigma}{2\\varepsilon_0} - \\frac{\\sigma}{2\\varepsilon_0} = \\mathbf{0\\text{ N/C}}$$
    The net electric field in the outer region of the first plate is zero.<br><br>
    <b>(b) In the outer region of the second plate (Region III):</b><br>
    Similarly, the field due to Plate 1 is directed to the right, and the field due to Plate 2 is directed to the left:
    $$E_{III} = \\frac{\\sigma}{2\\varepsilon_0} - \\frac{\\sigma}{2\\varepsilon_0} = \\mathbf{0\\text{ N/C}}$$
    The net electric field in the outer region of the second plate is zero.<br><br>
    <b>(c) Between the plates (Region II):</b><br>
    Between the two plates, the electric fields produced by both plates are directed in the same direction (from the positive plate towards the negative plate):
    $$E_{II} = \\frac{\\sigma}{2\\varepsilon_0} + \\frac{\\sigma}{2\\varepsilon_0} = \\frac{\\sigma}{\\varepsilon_0}$$<br>
    <b>Calculation:</b>
    $$E_{II} = \\frac{17.0 \\times 10^{-22}\\text{ C/m}^2}{8.854 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)} = \\mathbf{1.92 \\times 10^{-10}\\text{ N/C}}$$
    (Directed from the positively charged plate towards the negatively charged plate).
  </div>`,
  '3 Marks',
  [
    ['(a) Outer region I: E = 0 N/C', '1 Mark'],
    ['(b) Outer region III: E = 0 N/C', '1 Mark'],
    ['(c) Between plates: E = σ/ε₀ = 1.92 × 10⁻¹⁰ N/C towards negative plate', '1 Mark']
  ]
));

console.log(`\nCompiling Chapter 1: Electric Charges and Fields (Total: ${questions.length} Qs)...`);
saveChapter(chNum, chTitle, svgDiagram, exTitle, questions, 'Electrostatic Potential and Capacitance');
console.log(`Chapter 1: Electric Charges and Fields successfully saved!`);
