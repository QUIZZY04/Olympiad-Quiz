/**
 * Generator for Class 11 Chemistry - Chapter 4: Chemical Bonding and Molecular Structure
 * NCERT Rationalised 2026-27 Syllabus - All 40 Verbatim Questions (4.1 to 4.40)
 * Strictly zero shortage, CBSE marking rubrics, custom SVG diagram, offline cache.
 * NO PDF download button/bar (restricted to Physics Ch 7).
 */
const fs = require('fs');
const path = require('path');

const ch4Path = path.join(__dirname, '..', '..', 'chapters-c11c', 'ch4.html');
const cachePath = path.join(__dirname, '..', '..', 'chapters-c11c', 'chapters-data.js');

// High-fidelity custom SVG: VSEPR Molecular Geometries & MOT Energy Level Diagram
const svgDiagram = `
  <div style="margin:24px 0; background:white; padding:20px; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <h3 style="font-size:1.05rem; font-weight:800; color:#1e293b; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.2"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><line x1="7" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="17" y2="12"/></svg>
      Bonding Mechanics: VSEPR Geometrical Repulsion &amp; Molecular Orbital Energy Diagram
    </h3>
    <svg viewBox="0 0 780 250" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', system-ui, sans-serif;">
      <!-- Panel 1: VSEPR Geometries & Lone Pair Repulsion Ladder -->
      <rect x="15" y="15" width="410" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="30" y="36" font-size="11.5" font-weight="bold" fill="#0f172a">1. VSEPR Molecular Geometries &amp; Repulsion Hierarchy:</text>

      <!-- Repulsion order callout -->
      <rect x="30" y="48" width="380" height="26" rx="4" fill="#ecfdf5" stroke="#a7f3d0"/>
      <text x="40" y="65" font-size="8.5" font-weight="bold" fill="#065f46">Repulsion Order: (lp - lp) &gt; (lp - bp) &gt; (bp - bp)</text>

      <!-- 4 Geometries Visual Representation Boxes -->
      <!-- Linear (BeCl2, 180) -->
      <rect x="30" y="82" width="85" height="65" rx="5" fill="#fff" stroke="#e2e8f0"/>
      <circle cx="72" cy="108" r="7" fill="#059669"/>
      <circle cx="48" cy="108" r="5" fill="#3b82f6"/>
      <circle cx="96" cy="108" r="5" fill="#3b82f6"/>
      <line x1="53" y1="108" x2="65" y2="108" stroke="#334155" stroke-width="1.5"/>
      <line x1="79" y1="108" x2="91" y2="108" stroke="#334155" stroke-width="1.5"/>
      <text x="45" y="138" font-size="7.5" font-weight="bold" fill="#0f172a">Linear (180&deg;)</text>

      <!-- Trigonal Planar (BF3, 120) -->
      <rect x="125" y="82" width="85" height="65" rx="5" fill="#fff" stroke="#e2e8f0"/>
      <circle cx="167" cy="110" r="7" fill="#059669"/>
      <circle cx="167" cy="94" r="5" fill="#3b82f6"/>
      <circle cx="150" cy="122" r="5" fill="#3b82f6"/>
      <circle cx="184" cy="122" r="5" fill="#3b82f6"/>
      <line x1="167" y1="103" x2="167" y2="99" stroke="#334155" stroke-width="1.5"/>
      <line x1="162" y1="115" x2="154" y2="119" stroke="#334155" stroke-width="1.5"/>
      <line x1="172" y1="115" x2="180" y2="119" stroke="#334155" stroke-width="1.5"/>
      <text x="132" y="138" font-size="7.5" font-weight="bold" fill="#0f172a">Trigonal (120&deg;)</text>

      <!-- Tetrahedral (CH4, 109.5) -->
      <rect x="220" y="82" width="95" height="65" rx="5" fill="#fff" stroke="#e2e8f0"/>
      <circle cx="267" cy="108" r="7" fill="#059669"/>
      <circle cx="267" cy="92" r="5" fill="#3b82f6"/>
      <circle cx="248" cy="122" r="5" fill="#3b82f6"/>
      <circle cx="286" cy="122" r="5" fill="#3b82f6"/>
      <line x1="267" y1="101" x2="267" y2="97" stroke="#334155" stroke-width="1.5"/>
      <line x1="261" y1="113" x2="252" y2="119" stroke="#334155" stroke-width="1.5"/>
      <line x1="273" y1="113" x2="282" y2="119" stroke="#334155" stroke-width="1.5"/>
      <text x="227" y="138" font-size="7.5" font-weight="bold" fill="#0f172a">Tetrahedral (109.5&deg;)</text>

      <!-- Bent / Angular (H2O, 104.5) -->
      <rect x="325" y="82" width="85" height="65" rx="5" fill="#fff" stroke="#e2e8f0"/>
      <circle cx="367" cy="100" r="7" fill="#dc2626"/>
      <circle cx="350" cy="118" r="5" fill="#3b82f6"/>
      <circle cx="384" cy="118" r="5" fill="#3b82f6"/>
      <line x1="362" y1="105" x2="354" y2="114" stroke="#334155" stroke-width="1.5"/>
      <line x1="372" y1="105" x2="380" y2="114" stroke="#334155" stroke-width="1.5"/>
      <text x="333" y="138" font-size="7.5" font-weight="bold" fill="#0f172a">Bent (H2O, 104.5&deg;)</text>

      <!-- Trigonal Bipyramidal & Octahedral callout -->
      <rect x="30" y="155" width="380" height="68" rx="4" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="40" y="172" font-size="8.5" font-weight="bold" fill="#1e40af">&bull; Trigonal Bipyramidal (PCl5, sp&sup3;d):</text>
      <text x="40" y="186" font-size="7.8" fill="#334155">3 Equatorial bonds (120&deg;) + 2 Axial bonds (90&deg;); axial bonds are longer &amp; weaker.</text>
      <text x="40" y="201" font-size="8.5" font-weight="bold" fill="#1e40af">&bull; Octahedral (SF6, sp&sup3;d&sup2;):</text>
      <text x="40" y="214" font-size="7.8" fill="#334155">6 equivalent S-F bonds at 90&deg; angles with regular octahedral symmetry.</text>

      <!-- Panel 2: Molecular Orbital Diagram (O2 Paramagnetism) -->
      <rect x="440" y="15" width="325" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="455" y="36" font-size="11.5" font-weight="bold" fill="#0f172a">2. MO Theory: O2 (16 e&macr;) Energy Ladder &amp; B.O.:</text>

      <!-- Energy Levels Graphic -->
      <!-- sigma* 2pz -->
      <line x1="565" y1="52" x2="615" y2="52" stroke="#dc2626" stroke-width="2"/>
      <text x="622" y="55" font-size="8" fill="#dc2626">&sigma;*2p_z (0 e&macr;)</text>

      <!-- pi* 2px & pi* 2py (Unpaired e- -> Paramagnetic) -->
      <line x1="535" y1="80" x2="575" y2="80" stroke="#d97706" stroke-width="2"/>
      <line x1="605" y1="80" x2="645" y2="80" stroke="#d97706" stroke-width="2"/>
      <text x="548" y="76" font-size="9" font-weight="bold" fill="#d97706">&uarr;</text>
      <text x="618" y="76" font-size="9" font-weight="bold" fill="#d97706">&uarr;</text>
      <text x="652" y="83" font-size="8" font-weight="bold" fill="#b45309">&pi;*2p_x&sup1; = &pi;*2p_y&sup1; (Paramagnetic!)</text>

      <!-- pi 2px & pi 2py (paired) -->
      <line x1="535" y1="115" x2="575" y2="115" stroke="#059669" stroke-width="2"/>
      <line x1="605" y1="115" x2="645" y2="115" stroke="#059669" stroke-width="2"/>
      <text x="544" y="112" font-size="8" fill="#065f46">&uarr;&darr;</text>
      <text x="614" y="112" font-size="8" fill="#065f46">&uarr;&darr;</text>
      <text x="652" y="118" font-size="8" fill="#065f46">&pi;2p_x&sup2; = &pi;2p_y&sup2;</text>

      <!-- sigma 2pz (paired) -->
      <line x1="565" y1="140" x2="615" y2="140" stroke="#059669" stroke-width="2"/>
      <text x="583" y="137" font-size="8" fill="#065f46">&uarr;&darr;</text>
      <text x="622" y="143" font-size="8" fill="#065f46">&sigma;2p_z&sup2;</text>

      <!-- Bond Order Calculation Box -->
      <rect x="455" y="160" width="295" height="65" rx="5" fill="#fff" stroke="#e2e8f0"/>
      <text x="465" y="177" font-size="8.5" font-weight="bold" fill="#0f172a">Bond Order Formula: B.O. = &frac12; (N_b - N_a)</text>
      <text x="465" y="193" font-size="8.2" fill="#334155">&bull; For O2: B.O. = &frac12; (10 - 6) = <tspan font-weight="bold" fill="#059669">2.0 (Double Bond)</tspan></text>
      <text x="465" y="208" font-size="8.2" fill="#334155">&bull; For N2: B.O. = &frac12; (10 - 4) = <tspan font-weight="bold" fill="#2563eb">3.0 (Triple Bond)</tspan></text>
      <text x="465" y="221" font-size="7.5" fill="#64748b">Stability: N2 (3.0) &gt; O2+ (2.5) &gt; O2 (2.0) &gt; O2&macr; (1.5)</text>
    </svg>
  </div>
`;

// Build question array helper
const questions = [];

function addQ(idNum, ncertRef, marks, questionHtml, solutionStepsHtml, rubricRows) {
  questions.push({
    idNum,
    id: `c11c-ch4-q${idNum}`,
    ncertRef,
    marks,
    questionHtml,
    solutionStepsHtml,
    rubricRows
  });
}

// -------------------------------------------------------------
// QUESTION 4.1
addQ(
  1, 'Question 4.1', '2 Marks',
  `Explain the formation of a chemical bond.`,
  `<div class="step">
    <b>Definition and Driving Force of Chemical Bond Formation:</b><br><br>
    1. **Definition:** A chemical bond is defined as the attractive force that holds constituent atoms, ions, or molecules together in a distinct chemical entity.<br><br>
    2. **Energetic Driving Force (Potential Energy Minimization):**<br>
    • Isolated atoms have relatively high potential energy. When two atoms approach each other, electrostatic attractions (between nucleus of one atom and electrons of the other) and repulsions (between nuclei and between electrons) come into play.<br>
    • If the **attractive forces exceed the repulsive forces**, the potential energy of the system decreases.<br>
    • At a specific equilibrium internuclear distance (bond length), the potential energy reaches an **absolute minimum**, resulting in a stable chemical bond.<br><br>
    3. **Electronic Driving Force (Octet Completion):**<br>
    • According to the Kössel-Lewis theory, atoms combine either by **transfer of valence electrons** (ionic bonding) or by **sharing of electron pairs** (covalent bonding) in order to attain a stable valence noble gas octet configuration ($ns^2 np^6$).
  </div>`,
  [
    { key: 'Definition of chemical bond as holding force', marks: '0.5 Mark' },
    { key: 'Thermodynamic explanation: minimization of potential energy at bond distance', marks: '1 Mark' },
    { key: 'Electronic explanation: octet completion via electron transfer or sharing', marks: '0.5 Mark' }
  ]
);

// QUESTION 4.2
addQ(
  2, 'Question 4.2', '2 Marks',
  `Write Lewis dot symbols for atoms of the following elements: $\\text{Mg, Na, B, O, N, Br}$.`,
  `<div class="step">
    Lewis symbols represent the valence electrons as dots surrounding the elemental symbol:<br><br>
    • **Magnesium ($\\text{Mg}$, Group 2):** Valence configuration $3s^2$ ($2$ valence electrons).<br>
      Lewis dot symbol: $\\mathbf{\\cdot \\text{Mg} \\cdot}$ (or $\\mathbf{\\text{Mg:}}$)<br><br>
    • **Sodium ($\\text{Na}$, Group 1):** Valence configuration $3s^1$ ($1$ valence electron).<br>
      Lewis dot symbol: $\\mathbf{\\text{Na} \\cdot}$<br><br>
    • **Boron ($\\text{B}$, Group 13):** Valence configuration $2s^2 2p^1$ ($3$ valence electrons).<br>
      Lewis dot symbol: $\\mathbf{\\cdot \\dot{\\text{B}} \\cdot}$<br><br>
    • **Oxygen ($\\text{O}$, Group 16):** Valence configuration $2s^2 2p^4$ ($6$ valence electrons).<br>
      Lewis dot symbol: $\\mathbf{:\\!\\ddot{\\text{O}}\\!:}$<br><br>
    • **Nitrogen ($\\text{N}$, Group 15):** Valence configuration $2s^2 2p^3$ ($5$ valence electrons).<br>
      Lewis dot symbol: $\\mathbf{:\\!\\dot{\\text{N}}\\!:}$ (or $\\mathbf{:\\!\\dot{\\text{N}}\\cdot}$)<br><br>
    • **Bromine ($\\text{Br}$, Group 17):** Valence configuration $4s^2 4p^5$ ($7$ valence electrons).<br>
      Lewis dot symbol: $\\mathbf{:\\!\\ddot{\\text{Br}}\\!:^\\cdot}$
  </div>`,
  [
    { key: 'Correct Lewis symbols for Mg (2 dots), Na (1 dot), B (3 dots)', marks: '1 Mark' },
    { key: 'Correct Lewis symbols for O (6 dots), N (5 dots), Br (7 dots)', marks: '1 Mark' }
  ]
);

// QUESTION 4.3
addQ(
  3, 'Question 4.3', '2 Marks',
  `Write Lewis symbols for the following atoms and ions: $\\text{S and S}^{2-};\\; \\text{Al and Al}^{3+};\\; \\text{H and H}^-$.`,
  `<div class="step">
    <b>Lewis Symbols of Atoms vs Corresponding Ions:</b><br><br>
    1. **Sulfur ($\\text{S}$) and Sulfide ion ($\\text{S}^{2-}$):**<br>
    • Neutral $\\text{S}$ ($Z = 16$, Group 16, $6$ valence $e^-$): $\\mathbf{:\\!\\ddot{\\text{S}}\\!:}$<br>
    • Sulfide ion $\\text{S}^{2-}$ ($8$ valence $e^-$): $\\mathbf{[:\\!\\ddot{\\text{S}}\\!:]^{2-}}$ (Complete stable octet)<br><br>
    2. **Aluminium ($\\text{Al}$) and Aluminium ion ($\\text{Al}^{3+}$):**<br>
    • Neutral $\\text{Al}$ ($Z = 13$, Group 13, $3$ valence $e^-$): $\\mathbf{\\cdot \\dot{\\text{Al}} \\cdot}$<br>
    • Aluminium ion $\\text{Al}^{3+}$ (loss of all 3 valence electrons): $\\mathbf{[\\text{Al}]^{3+}}$ (Empty outer shell, noble core $[\\text{Ne}]$)<br><br>
    3. **Hydrogen ($\\text{H}$) and Hydride ion ($\\text{H}^-$):**<br>
    • Neutral $\\text{H}$ ($1$ valence $e^-$): $\\mathbf{\\text{H}\\cdot}$<br>
    • Hydride ion $\\text{H}^-$ (gain of 1 electron): $\\mathbf{[:\\!\\text{H}]^-}$ (Duplet helium configuration)
  </div>`,
  [
    { key: 'S (6 dots) and S2- ([S with 8 dots]^2-)', marks: '0.75 Mark' },
    { key: 'Al (3 dots) and Al3+ ([Al]^3+ with no valence dots)', marks: '0.75 Mark' },
    { key: 'H (1 dot) and H- ([:H]^- duplet)', marks: '0.5 Mark' }
  ]
);

// QUESTION 4.4
addQ(
  4, 'Question 4.4', '2.5 Marks',
  `Draw the Lewis structures for the following molecules and ions: $\\text{H}_2\\text{S},\\; \\text{SiCl}_4,\\; \\text{BeF}_2,\\; \\text{CO}_3^{2-},\\; \\text{HCOOH}$.`,
  `<div class="step">
    <b>Step-by-Step Lewis Structures:</b><br><br>
    1. **Hydrogen Sulphide ($\\text{H}_2\\text{S}$):**<br>
    • Total valence electrons $= 2(1) + 6 = 8\\text{ e}^-$.<br>
    • Central $\\text{S}$ atom forms two single bonds with two $\\text{H}$ atoms and retains two lone pairs:<br>
    $$\\mathbf{\\text{H}-\\ddot{\\text{S}}-\\text{H}} \\quad (2\\text{ bond pairs, } 2\\text{ lone pairs})$$<br><br>
    2. **Silicon Tetrachloride ($\\text{SiCl}_4$):**<br>
    • Total valence electrons $= 4 + 4(7) = 32\\text{ e}^-$.<br>
    • Central $\\text{Si}$ forms four single $\\text{Si-Cl}$ bonds; each chlorine atom carries 3 lone pairs:<br>
    $$\\mathbf{\\text{Cl}_3\\text{Si}-\\text{Cl}} \\quad (4\\text{ single bonds, central Si has octet})$$<br><br>
    3. **Beryllium Fluoride ($\\text{BeF}_2$):**<br>
    • Total valence electrons $= 2 + 2(7) = 16\\text{ e}^-$.<br>
    • Linear molecule with incomplete octet on $\\text{Be}$ ($4\\text{ e}^-$):<br>
    $$\\mathbf{:\\!\\ddot{\\text{F}}-\\text{Be}-\\ddot{\\text{F}}\\!:}$$<br><br>
    4. **Carbonate Ion ($\\text{CO}_3^{2-}$):**<br>
    • Total valence electrons $= 4 + 3(6) + 2 = 24\\text{ e}^-$.<br>
    • Central $\\text{C}$ is double-bonded to one $\\text{O}$ and single-bonded to two $\\text{O}^-$ atoms:<br>
    $$\\mathbf{\\left[ \\text{O}=\\text{C}(-\\text{O}^-)_2 \\right]^{2-}} \\quad (\\text{Resonance hybrid of 3 canonical forms})$$<br><br>
    5. **Formic Acid ($\\text{HCOOH}$):**<br>
    • Total valence electrons $= 1 + 4 + 2(6) + 1 = 18\\text{ e}^-$.<br>
    • Central carbon is bonded to $\\text{H}$, double-bonded to carbonyl $\\text{O}$, and single-bonded to hydroxyl $-\\text{OH}$:<br>
    $$\\mathbf{\\text{H}-\\text{C}(=\\!\\ddot{\\text{O}})-\\ddot{\\text{O}}-\\text{H}}$$
  </div>`,
  [
    { key: 'Correct Lewis structures for H2S and SiCl4', marks: '1 Mark' },
    { key: 'Correct Lewis structure for BeF2 (incomplete octet)', marks: '0.5 Mark' },
    { key: 'Correct Lewis structures for CO3^2- (formal charge -1 on two oxygens) and HCOOH', marks: '1 Mark' }
  ]
);

// QUESTION 4.5
addQ(
  5, 'Question 4.5', '2.5 Marks',
  `Define octet rule. Write its significance and limitations.`,
  `<div class="step">
    <b>1. Definition:</b><br>
    According to the electronic theory of valence proposed by Kössel and Lewis (1916), atoms tend to combine either by transfer or by sharing of valence electrons in order to acquire a stable octet of **eight electrons in their outermost shell** ($ns^2 np^6$).<br><br>
    <b>2. Significance:</b><br>
    • Successfully explained the normal valencies and structures of a vast majority of organic compounds and main-group covalent molecules ($s$- and $p$-blocks).<br>
    • Provided the primary basis for understanding the chemical inertness of noble gases.<br><br>
    <b>3. Major Limitations:</b><br>
    1. **Incomplete Octet of the Central Atom (Electron-deficient molecules):** Central atom has fewer than 8 electrons (e.g., $\\text{LiCl} (2e^-), \\text{BeH}_2 (4e^-), \\text{BF}_3 (6e^-), \\text{AlCl}_3$).<br>
    2. **Odd-Electron Molecules:** In molecules with an odd total number of valence electrons (like Nitric oxide $\\text{NO}$ with $11e^-$, and $\\text{NO}_2$ with $17e^-$), the octet rule cannot be satisfied for all atoms.<br>
    3. **Expanded Octet (Hypervalent molecules):** Elements in and beyond the third period possess vacant $d$-orbitals and can accommodate more than 8 electrons around the central atom (e.g., $\\text{PF}_5$ has $10e^-$, $\\text{SF}_6$ has $12e^-$, $\\text{H}_2\\text{SO}_4$, $\\text{IF}_7$).<br>
    4. **Inability to explain noble gas compounds:** Xenon and Krypton form compounds ($\\text{XeF}_2, \\text{XeF}_4, \\text{XeOF}_2$) despite having completed octets.<br>
    5. **Does not explain molecular shape or bond energetics:** The rule says nothing about bond angles, geometries, or relative stabilities.
  </div>`,
  [
    { key: 'Octet rule definition stated clearly', marks: '0.5 Mark' },
    { key: 'Significance explained: basis of covalent bonding and noble gas inertness', marks: '0.5 Mark' },
    { key: 'Limitations detailed: incomplete octet, odd-electron species, expanded octet with examples', marks: '1.5 Marks' }
  ]
);

// QUESTION 4.6
addQ(
  6, 'Question 4.6', '2 Marks',
  `Write the favorable factors for the formation of ionic bond.`,
  `<div class="step">
    <b>Favorable Factors for Ionic (Electrovalent) Bond Formation:</b><br><br>
    An ionic bond forms via the electrostatic attraction between oppositely charged ions: $\\text{M}(g) + \\text{X}(g) \\to \\text{M}^+(g) + \\text{X}^-(g) \\to \\text{MX}(s)$.<br><br>
    1. **Low Ionization Enthalpy of the Metal Atom ($\\text{M}$):**<br>
    The metallic element must have a low ionization enthalpy so that it readily loses valence electron(s) to form a cation without consuming excessive energy.<br><br>
    2. **High Negative Electron Gain Enthalpy of the Non-metal Atom ($\\text{X}$):**<br>
    The non-metallic element must have a highly negative electron gain enthalpy so that substantial energy is released when it accepts electron(s) to form an anion.<br><br>
    3. **High Lattice Enthalpy of the Resulting Ionic Compound:**<br>
    When the gaseous cations and anions condense into a 3D crystalline lattice, a huge amount of electrostatic energy (**lattice enthalpy $U$**) must be released. A high lattice enthalpy (favored by small ionic radii and high charges on ions) compensates for the initial ionization energy, stabilizing the ionic solid.
  </div>`,
  [
    { key: 'Low ionization enthalpy of electropositive metal', marks: '0.5 Mark' },
    { key: 'High negative electron gain enthalpy of electronegative non-metal', marks: '0.5 Mark' },
    { key: 'High lattice enthalpy of crystalline ionic compound', marks: '1 Mark' }
  ]
);

// QUESTION 4.7
addQ(
  7, 'Question 4.7', '3 Marks',
  `Discuss the shape of the following molecules using the VSEPR model:<br>
   $\\text{BeCl}_2,\\; \\text{BCl}_3,\\; \\text{SiCl}_4,\\; \\text{AsF}_5,\\; \\text{H}_2\\text{S},\\; \\text{PH}_3$.`,
  `<div class="step">
    Using VSEPR Theory based on total electron pairs ($\\text{Bond Pairs (bp)} + \\text{Lone Pairs (lp)}$):<br><br>
    1. **$\\text{BeCl}_2$:**<br>
    Central $\\text{Be}$ has $2\\text{ valence } e^-$. Total pairs $= 2\\text{ bp} + 0\\text{ lp} = 2$. Type: $AB_2$.<br>
    $$\\mathbf{\\text{Shape: Linear} \\quad (\\angle \\text{Cl-Be-Cl} = 180^\\circ)}$$<br><br>
    2. **$\\text{BCl}_3$:**<br>
    Central $\\text{B}$ has $3\\text{ valence } e^-$. Total pairs $= 3\\text{ bp} + 0\\text{ lp} = 3$. Type: $AB_3$.<br>
    $$\\mathbf{\\text{Shape: Trigonal Planar} \\quad (\\angle \\text{Cl-B-Cl} = 120^\\circ)}$$<br><br>
    3. **$\\text{SiCl}_4$:**<br>
    Central $\\text{Si}$ has $4\\text{ valence } e^-$. Total pairs $= 4\\text{ bp} + 0\\text{ lp} = 4$. Type: $AB_4$.<br>
    $$\\mathbf{\\text{Shape: Regular Tetrahedral} \\quad (\\angle \\text{Cl-Si-Cl} = 109.5^\\circ)}$$<br><br>
    4. **$\\text{AsF}_5$:**<br>
    Central $\\text{As}$ has $5\\text{ valence } e^-$. Total pairs $= 5\\text{ bp} + 0\\text{ lp} = 5$. Type: $AB_5$.<br>
    $$\\mathbf{\\text{Shape: Trigonal Bipyramidal} \\quad (\\text{Equatorial: } 120^\\circ,\\; \\text{Axial: } 90^\\circ)}$$<br><br>
    5. **$\\text{H}_2\\text{S}$:**<br>
    Central $\\text{S}$ has $6\\text{ valence } e^-$. Total pairs $= 2\\text{ bp} + 2\\text{ lp} = 4$. Type: $AB_2E_2$.<br>
    Due to strong $\\text{lp-lp}$ repulsions compressing the bond angle:<br>
    $$\\mathbf{\\text{Shape: Bent / V-shaped} \\quad (\\angle \\text{H-S-H} \\approx 92.2^\\circ)}$$<br><br>
    6. **$\\text{PH}_3$:**<br>
    Central $\\text{P}$ has $5\\text{ valence } e^-$. Total pairs $= 3\\text{ bp} + 1\\text{ lp} = 4$. Type: $AB_3E$.<br>
    Due to $\\text{lp-bp}$ repulsion:<br>
    $$\\mathbf{\\text{Shape: Trigonal Pyramidal} \\quad (\\angle \\text{H-P-H} \\approx 93.6^\\circ)}$$
  </div>`,
  [
    { key: 'BeCl2 (linear, 180 deg) and BCl3 (trigonal planar, 120 deg)', marks: '1 Mark' },
    { key: 'SiCl4 (tetrahedral) and AsF5 (trigonal bipyramidal)', marks: '1 Mark' },
    { key: 'H2S (bent/V-shaped) and PH3 (trigonal pyramidal) with lone pair repulsions', marks: '1 Mark' }
  ]
);

// QUESTION 4.8
addQ(
  8, 'Question 4.8', '2.5 Marks',
  `Although geometries of $\\text{NH}_3$ and $\\text{H}_2\\text{O}$ molecules are distorted tetrahedral, bond angle in water is less than that of ammonia. Discuss.`,
  `<div class="step">
    <b>Analysis based on VSEPR Lone Pair Repulsions:</b><br><br>
    1. **Electron Pair Geometry:**<br>
    Both $\\text{NH}_3$ and $\\text{H}_2\\text{O}$ have a total steric number of $4$ electron pairs around their central atom, corresponding to a basic **tetrahedral electron geometry** ($sp^3$ hybridization, ideal angle $109.5^\\circ$).<br><br>
    2. **Distribution of Electron Pairs:**<br>
    • In Ammonia ($\\text{NH}_3$): Central $\\text{N}$ has **$3$ bond pairs and $1$ lone pair** ($AB_3E$).<br>
    • In Water ($\\text{H}_2\\text{O}$): Central $\\text{O}$ has **$2$ bond pairs and $2$ lone pairs** ($AB_2E_2$).<br><br>
    3. **Repulsion Hierarchy:**<br>
    According to VSEPR theory, repulsive forces decrease in the order:<br>
    $$\\mathbf{(\\text{lp} - \\text{lp}) > (\\text{lp} - \\text{bp}) > (\\text{bp} - \\text{bp})}$$<br>
    • In $\\text{NH}_3$, there is only **$(\\text{lp} - \\text{bp})$ repulsion**, which reduces the $\\text{H-N-H}$ bond angle from $109.5^\\circ$ down to **$107^\circ$**.<br>
    • In $\\text{H}_2\\text{O}$, the presence of **two lone pairs** introduces a powerful **$(\\text{lp} - \\text{lp})$ repulsion** in addition to two $(\\text{lp} - \\text{bp})$ interactions. This pushes the two $\\text{O-H}$ bonding pairs much closer together, decreasing the $\\text{H-O-H}$ bond angle down to **$104.5^\circ$**.<br><br>
    $$\\mathbf{\\text{Conclusion: Water has two lone pairs exerting greater repulsion, making its bond angle (} 104.5^\\circ \\text{) smaller than } \\text{NH}_3\\text{ (} 107^\\circ \\text{).}}$$
  </div>`,
  [
    { key: 'Identification of 1 lone pair in NH3 vs 2 lone pairs in H2O', marks: '1 Mark' },
    { key: 'VSEPR repulsion hierarchy: lp-lp > lp-bp > bp-bp', marks: '0.75 Mark' },
    { key: 'Quantifying bond angles: NH3 (107 deg) vs H2O (104.5 deg)', marks: '0.75 Mark' }
  ]
);

// QUESTION 4.9
addQ(
  9, 'Question 4.9', '1.5 Marks',
  `How is bond strength expressed in terms of bond order?`,
  `<div class="step">
    <b>Relationship between Bond Order and Bond Strength:</b><br><br>
    1. **Direct Proportionality:** Bond strength is **directly proportional** to the bond order:<br>
    $$\\mathbf{\\text{Bond Strength} \\propto \\text{Bond Order} \\propto \\text{Bond Enthalpy}}$$<br>
    2. **Physical Explanation:**<br>
    • A higher bond order indicates a greater number of shared electron pairs between the two nuclei.<br>
    • As bond order increases, internuclear attraction becomes stronger, **bond length decreases**, and **bond dissociation enthalpy increases** significantly.<br><br>
    *Example:*<br>
    • $\\text{N}_2$ (Bond order $= 3$): Bond enthalpy $= 946\\text{ kJ mol}^{-1}$, bond length $= 110\\text{ pm}$ (Extremely strong & inert).<br>
    • $\\text{O}_2$ (Bond order $= 2$): Bond enthalpy $= 498\\text{ kJ mol}^{-1}$, bond length $= 121\\text{ pm}$.<br>
    • $\\text{F}_2$ (Bond order $= 1$): Bond enthalpy $= 159\\text{ kJ mol}^{-1}$, bond length $= 142\\text{ pm}$.
  </div>`,
  [
    { key: 'Direct proportionality: higher bond order leads to higher bond enthalpy/strength', marks: '1 Mark' },
    { key: 'Inverse relation with bond length with N2, O2, F2 comparative example', marks: '0.5 Mark' }
  ]
);

// QUESTION 4.10
addQ(
  10, 'Question 4.10', '1.5 Marks',
  `Define the bond length.`,
  `<div class="step">
    <b>Definition of Bond Length:</b><br><br>
    • **Bond length** is defined as the **equilibrium internuclear distance** between the centers of the nuclei of two covalently bonded atoms in a molecule.<br><br>
    <b>Key Characteristics:</b><br>
    1. It represents the point of minimum potential energy where attractive and repulsive forces between the atoms are balanced.<br>
    2. It is typically expressed in picometres ($\\text{pm}$) or Angstroms ($\\text{\\AA}$, $1\\text{ \\AA} = 10^{-10}\\text{ m} = 100\\text{ pm}$).<br>
    3. It is experimentally measured using spectroscopic techniques, X-ray diffraction, and electron diffraction.<br>
    4. For a covalent bond, $\\text{Bond length} = r_A + r_B$ (sum of covalent radii of bonded atoms).
  </div>`,
  [
    { key: 'Definition as equilibrium internuclear distance between bonded nuclei', marks: '1 Mark' },
    { key: 'Units (pm / A) and relation to covalent radii', marks: '0.5 Mark' }
  ]
);

// Helper for generating questions 11 to 40
const qList4 = [
  {
    num: 11,
    ref: 'Question 4.11',
    marks: '2.5 Marks',
    q: `Explain the important aspects of resonance with reference to the $\\text{CO}_3^{2-}$ ion.`,
    ans: `<div class="step">
      <b>Resonance in Carbonate Ion ($\\text{CO}_3^{2-}$):</b><br><br>
      1. A single Lewis structure cannot explain the experimental fact that **all three $\\text{C-O}$ bonds are identical in length ($128\\text{ pm}$)**, which is intermediate between a single bond ($143\\text{ pm}$) and a double bond ($122\\text{ pm}$).<br><br>
      2. **Resonance Canonical Structures:**<br>
      The ion is represented as a resonance hybrid of three equivalent contributing structures:<br>
      • Structure I: Double bond to $\\text{O}_{(1)}$, single bonds with $-1$ charge to $\\text{O}_{(2)}$ and $\\text{O}_{(3)}$.<br>
      • Structure II: Double bond to $\\text{O}_{(2)}$, single bonds to $\\text{O}_{(1)}$ and $\\text{O}_{(3)}$.<br>
      • Structure III: Double bond to $\\text{O}_{(3)}$, single bonds to $\\text{O}_{(1)}$ and $\\text{O}_{(2)}$.<br><br>
      3. **Important Aspects:**<br>
      • The actual molecule is a **single, static resonance hybrid** possessing greater stability than any canonical form.<br>
      • The $\\text{C-O}$ bond order is $\\frac{4}{3} = 1.33$ and the formal charge on each oxygen atom is $-\\frac{2}{3}$.
    </div>`,
    rubric: [
      { key: 'Identical C-O bond length observation (128 pm intermediate)', marks: '1 Mark' },
      { key: 'Drawing/describing 3 equivalent canonical resonance forms', marks: '1 Mark' },
      { key: 'Deducing fractional bond order 1.33 and formal charge -2/3', marks: '0.5 Mark' }
    ]
  },
  {
    num: 12,
    ref: 'Question 4.12',
    marks: '2 Marks',
    q: `$\\text{H}_3\\text{PO}_3$ can be represented by structures 1 and 2 shown below. Can these two structures be taken as the canonical forms of the resonance hybrid representing $\\text{H}_3\\text{PO}_3$? If not, give reasons for the same.<br>
       Structure 1: $\\text{H}-\\text{P}(=\\!\\text{O})(\\text{OH})_2$<br>
       Structure 2: $\\text{P}(\\text{OH})_3$`,
    ans: `<div class="step">
      <b>Answer:</b> **No**, these two structures **cannot** be taken as canonical resonance structures.<br><br>
      <b>Scientific Reason:</b><br>
      • A fundamental prerequisite of resonance is that **the atomic nuclei must remain in identical spatial positions** in all contributing structures. Resonance involves solely the redistribution and delocalization of **electrons**, never the migration of atoms or nuclei.<br>
      • In Structure 1, one hydrogen atom is directly bonded to the central phosphorus atom ($\\text{P-H}$ bond).<br>
      • In Structure 2, that hydrogen has shifted to an oxygen atom, forming three hydroxyl groups ($\\text{P-OH}$ bonds).<br>
      • Because a hydrogen nucleus has migrated, these two structures are **tautomers** (structural isomers), not canonical resonance forms.
    </div>`,
    rubric: [
      { key: 'Clear negative answer: cannot be canonical forms', marks: '0.5 Mark' },
      { key: 'Core rule stated: resonance involves only electron movement, not atomic/nuclear position change', marks: '1 Mark' },
      { key: 'Identification of hydrogen migration (P-H to P-OH) indicating tautomerism', marks: '0.5 Mark' }
    ]
  },
  {
    num: 13,
    ref: 'Question 4.13',
    marks: '3 Marks',
    q: `Write the resonance structures for $\\text{SO}_3,\\; \\text{NO}_2$ and $\\text{NO}_3^-$.`,
    ans: `<div class="step">
      <b>Canonical Resonance Structures:</b><br><br>
      1. **Sulfur Trioxide ($\\text{SO}_3$, 24 valence $e^-$):**<br>
      • Resonance hybrid of **three canonical structures**, where each structure contains one $\\text{S=O}$ double bond and two coordinate/single $\\text{S-O}$ bonds.<br>
      • All three $\\text{S-O}$ bonds are experimentally equal in length with a bond order of $1.33$ (or $2.0$ in expanded octet d-orbital structures).<br><br>
      2. **Nitrogen Dioxide ($\\text{NO}_2$, 17 valence $e^-$, Odd-electron molecule):**<br>
      • Resonance hybrid of **two canonical structures**:<br>
      $$\\dot{\\text{N}}(=\\!\\text{O})-\\ddot{\\text{O}}^- \\quad \\longleftrightarrow \\quad ^-\\ddot{\\text{O}}-\\dot{\\text{N}}(=\\!\\text{O})$$<br>
      • The single unpaired electron resides on nitrogen with a bent bond angle of $134^\circ$.<br><br>
      3. **Nitrate Ion ($\\text{NO}_3^-$, 24 valence $e^-$):**<br>
      • Resonance hybrid of **three equivalent canonical structures**:<br>
      • In each structure, nitrogen is double-bonded to one oxygen and single-bonded to two oxygens with formal charge $-1$.<br>
      • All $\\text{N-O}$ bonds are identical with bond order $\\frac{4}{3} = 1.33$.
    </div>`,
    rubric: [
      { key: 'SO3: 3 resonance forms with equivalent S-O bonds', marks: '1 Mark' },
      { key: 'NO2: 2 resonance forms showing unpaired electron on nitrogen', marks: '1 Mark' },
      { key: 'NO3-: 3 equivalent planar canonical structures', marks: '1 Mark' }
    ]
  },
  {
    num: 14,
    ref: 'Question 4.14',
    marks: '2.5 Marks',
    q: `Use Lewis symbols to show electron transfer between the following atoms to form cations and anions:<br>
       (a) $\\text{K}$ and $\\text{S}$<br>
       (b) $\\text{Ca}$ and $\\text{O}$<br>
       (c) $\\text{Al}$ and $\\text{N}$.`,
    ans: `<div class="step">
      <b>Electron Transfer Schemes:</b><br><br>
      <b>(a) $\\text{K}$ and $\\text{S}$ (Formation of $\\text{K}_2\\text{S}$):</b><br>
      • Two $\\text{K}$ atoms ($4s^1$) each lose $1$ electron to one $\\text{S}$ atom ($3s^2 3p^4$):<br>
      $$2\\text{K}\\cdot + \\; :\\!\\ddot{\\text{S}}\\!: \\; \\longrightarrow 2\\text{K}^+ + [:\\!\\ddot{\\text{S}}\\!:]^{2-} \\implies \\mathbf{\\text{K}_2\\text{S}}$$<br><br>
      <b>(b) $\\text{Ca}$ and $\\text{O}$ (Formation of $\\text{CaO}$):</b><br>
      • One $\\text{Ca}$ atom ($4s^2$) transfers two electrons to one $\\text{O}$ atom ($2s^2 2p^4$):<br>
      $$\\text{Ca}: + \\; :\\!\\ddot{\\text{O}}\\!: \\; \\longrightarrow \\text{Ca}^{2+} + [:\\!\\ddot{\\text{O}}\\!:]^{2-} \\implies \\mathbf{\\text{CaO}}$$<br><br>
      <b>(c) $\\text{Al}$ and $\\text{N}$ (Formation of $\\text{AlN}$):</b><br>
      • One $\\text{Al}$ atom ($3s^2 3p^1$) transfers three electrons to one $\\text{N}$ atom ($2s^2 2p^3$):<br>
      $$\\cdot\\dot{\\text{Al}}\\cdot + \\; :\\!\\dot{\\text{N}}\\cdot \\; \\longrightarrow \\text{Al}^{3+} + [:\\!\\ddot{\\text{N}}\\!:]^{3-} \\implies \\mathbf{\\text{AlN}}$$
    </div>`,
    rubric: [
      { key: '(a) K and S transfer: 2 K+ + S2- -> K2S', marks: '1 Mark' },
      { key: '(b) Ca and O transfer: Ca2+ + O2- -> CaO', marks: '0.75 Mark' },
      { key: '(c) Al and N transfer: Al3+ + N3- -> AlN', marks: '0.75 Mark' }
    ]
  },
  {
    num: 15,
    ref: 'Question 4.15',
    marks: '2.5 Marks',
    q: `Although both $\\text{CO}_2$ and $\\text{H}_2\\text{O}$ are triatomic molecules, the shape of $\\text{H}_2\\text{O}$ molecule is bent while that of $\\text{CO}_2$ is linear. Explain this on the basis of dipole moment.`,
    ans: `<div class="step">
      <b>Explanation using Dipole Moment ($\\mu$):</b><br><br>
      1. **Carbon Dioxide ($\\text{CO}_2$):**<br>
      • Experimentally, the net dipole moment of $\\text{CO}_2$ is **zero ($\mu = 0$)**.<br>
      • The $\\text{C=O}$ bond is polar because oxygen is more electronegative than carbon.<br>
      • The only way two equal opposing bond dipoles can cancel completely ($\mu = 0$) is if they point in **opposite directions at an angle of $180^\circ$**.<br>
      • Hence, $\\text{CO}_2$ must have a **symmetrical linear shape**: $\\overset{\\longleftarrow+}{\\text{O}=\\text{C}=\\text{O}}$.<br><br>
      2. **Water ($\\text{H}_2\\text{O}$):**<br>
      • Experimentally, water has a substantial net dipole moment of **$\mu = 1.85\\text{ D}$**.<br>
      • If water were linear, the two polar $\\text{O-H}$ bond dipoles would oppose each other and cancel to zero.<br>
      • Because $\mu \\neq 0$, the two $\\text{O-H}$ bond dipoles must be oriented at an angle, giving a non-zero resultant vector pointing towards the oxygen atom.<br>
      • This confirms that $\\text{H}_2\\text{O}$ has an **asymmetrical bent (angular) shape** with a bond angle of $104.5^\circ$.
    </div>`,
    rubric: [
      { key: 'CO2 has net dipole mu = 0 proving linear geometry with opposing cancelled dipoles', marks: '1.25 Marks' },
      { key: 'H2O has net dipole mu = 1.85 D proving non-linear bent geometry', marks: '1.25 Marks' }
    ]
  },
  {
    num: 16,
    ref: 'Question 4.16',
    marks: '2 Marks',
    q: `Write the significance/applications of dipole moment.`,
    ans: `<div class="step">
      <b>Key Applications and Significance of Dipole Moment ($\\mu$):</b><br><br>
      1. **Predicting Molecular Symmetry and Geometry:**<br>
      If a polyatomic molecule has polar bonds but $\\mu = 0$, it must possess a symmetrical geometry (e.g., linear $\\text{CO}_2, \\text{BeF}_2$; trigonal planar $\\text{BF}_3$; tetrahedral $\\text{CCl}_4$). If $\\mu > 0$, the geometry is asymmetrical (bent $\\text{H}_2\\text{O}$, pyramidal $\\text{NH}_3$).<br><br>
      2. **Distinguishing cis- and trans- Isomers:**<br>
      In geometrical isomers, the trans-isomer usually has identical groups on opposite sides that cancel ($\\mu = 0$), whereas the cis-isomer has a non-zero dipole moment ($\\mu > 0$).<br><br>
      3. **Calculating Percentage Ionic Character of a Covalent Bond:**<br>
      $$\\%\\text{ Ionic Character} = \\frac{\\mu_{\\text{observed}}}{\\mu_{\\text{calculated (100% ionic)}}} \\times 100$$<br>
      4. **Distinguishing between Polar and Non-polar Molecules:**<br>
      Identifies whether a molecule will dissolve in polar solvents like water (like dissolves like).
    </div>`,
    rubric: [
      { key: 'Application in determining molecular shape/symmetry and polar vs non-polar nature', marks: '1 Mark' },
      { key: 'Application in cis/trans isomer differentiation and calculating % ionic character', marks: '1 Mark' }
    ]
  },
  {
    num: 17,
    ref: 'Question 4.17',
    marks: '2 Marks',
    q: `Define electronegativity. How does it differ from electron gain enthalpy?`,
    ans: `<div class="step">
      <b>1. Definition of Electronegativity:</b><br>
      Electronegativity is the qualitative tendency of an atom in a **covalently bonded molecule** to attract the shared pair of electrons towards itself.<br><br>
      <b>2. Distinctions from Electron Gain Enthalpy:</b><br>
      • **State of Atom:** Electronegativity applies to a bonded atom in a molecule, whereas electron gain enthalpy applies strictly to an **isolated neutral gaseous atom**.<br>
      • **Thermodynamic Nature:** Electron gain enthalpy is an absolute, measurable energy quantity (expressed in $\\text{kJ mol}^{-1}$), whereas electronegativity is a relative, dimensionless scale (e.g., Pauling scale where $\\text{F} = 4.0$).<br>
      • **Constancy:** Electron gain enthalpy is a constant property of an atom, whereas electronegativity varies with oxidation state and hybridization.
    </div>`,
    rubric: [
      { key: 'Electronegativity definition for bonded atom', marks: '1 Mark' },
      { key: 'Contrast with electron gain enthalpy (bonded vs isolated, dimensionless vs kJ/mol)', marks: '1 Mark' }
    ]
  },
  {
    num: 18,
    ref: 'Question 4.18',
    marks: '2 Marks',
    q: `Explain with the help of suitable example polar covalent bond.`,
    ans: `<div class="step">
      <b>Explanation of Polar Covalent Bond:</b><br><br>
      1. When a covalent bond forms between two atoms having **different electronegativities**, the shared electron pair is not shared equally.<br>
      2. The more electronegative atom attracts the shared electron pair more strongly towards itself, acquiring a **partial negative charge ($\\delta^-$)**.<br>
      3. Consequently, the less electronegative atom acquires an equal **partial positive charge ($\\delta^+$)**.<br>
      4. Such a covalent bond carrying partial electrostatic dipoles is termed a **polar covalent bond**.<br><br>
      *Example: Hydrogen Fluoride ($\\text{HF}$):*<br>
      • Electronegativity of $\\text{F} = 4.0$; Electronegativity of $\\text{H} = 2.1$.<br>
      • Due to the large electronegativity difference ($\\Delta \\chi = 1.9$), the electron cloud is shifted heavily toward fluorine:<br>
      $$\\overset{\\delta +}{\\text{H}} \\; - \\; \\overset{\\delta -}{\\text{F}}$$
    </div>`,
    rubric: [
      { key: 'Mechanism of unequal electron sharing due to electronegativity difference yielding delta+ and delta-', marks: '1 Mark' },
      { key: 'Clear example (HF, HCl, or H2O) illustrating the bond dipole', marks: '1 Mark' }
    ]
  },
  {
    num: 19,
    ref: 'Question 4.19',
    marks: '2 Marks',
    q: `Arrange the bonds in order of increasing ionic character in the molecules: $\\text{LiF, K}_2\\text{O, N}_2\\text{, SO}_2$ and $\\text{ClF}_3$.`,
    ans: `<div class="step">
      <b>Criteria:</b> According to Hannay-Smith rule, ionic character increases as the **difference in electronegativity ($\\Delta \\chi$)** between the two bonded atoms increases.<br><br>
      1. $\\text{N}_2$: Bond between identical atoms ($\\text{N-N}$) $\\implies \\Delta \\chi = 0 \\implies \\mathbf{0\\%\\text{ ionic (Pure Covalent)}}$.<br>
      2. $\\text{ClF}_3$: $\\text{Cl-F}$ bond: Electronegativities $\\text{Cl} (3.0), \\text{F} (4.0) \\implies \\Delta \\chi = 1.0$.<br>
      3. $\\text{SO}_2$: $\\text{S-O}$ bond: Electronegativities $\\text{S} (2.5), \\text{O} (3.5) \\implies \\Delta \\chi = 1.0$ (with polar resonance).<br>
      4. $\\text{K}_2\\text{O}$: $\\text{K-O}$ bond: $\\text{K} (0.8), \\text{O} (3.5) \\implies \\Delta \\chi = 2.7$ (strongly ionic).<br>
      5. $\\text{LiF}$: $\\text{Li-F}$ bond: $\\text{Li} (1.0), \\text{F} (4.0) \\implies \\Delta \\chi = 3.0$ (highest electronegativity difference).<br><br>
      $$\\mathbf{\\text{Increasing order of ionic character: } \\text{N}_2 < \\text{ClF}_3 < \\text{SO}_2 < \\text{K}_2\\text{O} < \\text{LiF}}$$
    </div>`,
    rubric: [
      { key: 'Principle: ionic character proportional to electronegativity difference Delta chi', marks: '1 Mark' },
      { key: 'Correct ascending sequence: N2 < ClF3 < SO2 < K2O < LiF', marks: '1 Mark' }
    ]
  },
  {
    num: 20,
    ref: 'Question 4.20',
    marks: '2 Marks',
    q: `The skeletal structure of $\\text{CH}_3\\text{COOH}$ as shown below is correct, but some of the bonds are shown incorrectly. Write the correct Lewis structure for acetic acid.`,
    ans: `<div class="step">
      <b>Correct Lewis Structure for Acetic Acid ($\\text{CH}_3\\text{COOH}$):</b><br><br>
      1. **Valence electron count:**<br>
      • $2\\text{ Carbon atoms} = 2 \\times 4 = 8\\text{ e}^-$<br>
      • $4\\text{ Hydrogen atoms} = 4 \\times 1 = 4\\text{ e}^-$<br>
      • $2\\text{ Oxygen atoms} = 2 \\times 6 = 12\\text{ e}^-$<br>
      $$\\text{Total valence electrons} = 8 + 4 + 12 = \\mathbf{24\\text{ electrons (12 pairs)}}$$<br><br>
      2. **Bonding Structure:**<br>
      • The methyl carbon ($\\text{C}_1$) forms four single $\\sigma$-bonds ($3$ with $\\text{H}$, $1$ with $\\text{C}_2$).<br>
      • The carbonyl carbon ($\\text{C}_2$) forms a **double bond to carbonyl oxygen ($\\text{C=O}$)** and a **single bond to hydroxyl oxygen ($\\text{C-O}$)**.<br>
      • The hydroxyl oxygen is single-bonded to hydrogen ($\\text{O-H}$) and carries **$2$ lone pairs**.<br>
      • The carbonyl oxygen carries **$2$ lone pairs**.<br><br>
      $$\\mathbf{\\text{H}_3\\text{C}-\\text{C}(=\\!\\ddot{\\text{O}})-\\ddot{\\text{O}}-\\text{H}}$$
    </div>`,
    rubric: [
      { key: 'Total 24 valence electrons correctly distributed', marks: '1 Mark' },
      { key: 'Correct connectivity: C=O double bond and C-OH single bond with lone pairs', marks: '1 Mark' }
    ]
  },
  {
    num: 21,
    ref: 'Question 4.21',
    marks: '2 Marks',
    q: `Apart from tetrahedral geometry, another possible geometry for $\\text{CH}_4$ is square planar with the four $\\text{H}$ atoms at the corners of a square and the $\\text{C}$ atom at its centre. Explain why $\\text{CH}_4$ is not square planar.`,
    ans: `<div class="step">
      <b>Explanation based on VSEPR Theory and Bond Angle Strain:</b><br><br>
      1. **Square Planar Geometry:**<br>
      In a square planar arrangement, the four $\\text{C-H}$ bond pairs lie in a single plane with bond angles of **$90^\circ$** between adjacent pairs.<br><br>
      2. **Tetrahedral Geometry:**<br>
      In a tetrahedral geometry, the four bond pairs spread out symmetrically in three dimensions with bond angles of **$109.5^\circ$ ($109^\circ 28'$)**.<br><br>
      3. **Comparison of Repulsion &amp; Stability:**<br>
      • According to VSEPR theory, electron pairs orient themselves in space to **maximize distance and minimize electrostatic repulsions**.<br>
      • A bond angle of $109.5^\circ$ keeps the electron pairs much farther apart than $90^\circ$, significantly reducing electron-electron repulsions.<br>
      • Hence, tetrahedral $\\text{CH}_4$ has much lower potential energy and greater thermodynamic stability than a square planar configuration.
    </div>`,
    rubric: [
      { key: 'Comparison of bond angles: 90 deg (square planar) vs 109.5 deg (tetrahedral)', marks: '1 Mark' },
      { key: 'VSEPR repulsion minimization in 3D tetrahedral geometry conferring superior stability', marks: '1 Mark' }
    ]
  },
  {
    num: 22,
    ref: 'Question 4.22',
    marks: '2 Marks',
    q: `Explain why $\\text{BeH}_2$ molecule has a zero dipole moment although the $\\text{Be-H}$ bonds are polar.`,
    ans: `<div class="step">
      <b>Explanation via Vector Dipole Cancellation:</b><br><br>
      1. **Bond Polarity:** Beryllium (electronegativity $1.5$) and Hydrogen (electronegativity $2.1$) have an electronegativity difference of $0.6$. Hence, each individual $\\text{Be-H}$ bond is polar with a bond dipole pointing towards hydrogen: $\\overset{\\longleftarrow+}{\\text{Be}-\\text{H}}$.<br><br>
      2. **Linear Molecular Geometry:** According to VSEPR and $sp$ hybridization, $\\text{BeH}_2$ has $2$ bond pairs and $0$ lone pairs, giving it a **linear shape** with a bond angle of $180^\circ$:<br>
      $$\\text{H} \\; \\xleftarrow[\\;\\mu_1\\;]{} \\; \\text{Be} \\; \\xrightarrow[\\;\\mu_2\\;]{} \\; \\text{H}$$<br>
      3. **Vector Sum:** The two bond dipoles are equal in magnitude ($|\\mu_1| = |\\mu_2|$) but point in exactly opposite directions. Their vector sum cancels to zero:<br>
      $$\\mu_{\\text{net}} = \\mu_1 + \\mu_2 = \\mu_1 - \\mu_1 = \\mathbf{0\\text{ D}}$$<br><br>
      $$\\mathbf{\\text{Conclusion: Linear symmetry causes complete cancellation of the two equal opposite bond dipoles.}}$$
    </div>`,
    rubric: [
      { key: 'Identification of individual Be-H bonds as polar due to electronegativity difference', marks: '1 Mark' },
      { key: 'Linear 180 deg geometry causing exact vector cancellation yielding net dipole = 0', marks: '1 Mark' }
    ]
  },
  {
    num: 23,
    ref: 'Question 4.23',
    marks: '2.5 Marks',
    q: `Which out of $\\text{NH}_3$ and $\\text{NF}_3$ has higher dipole moment and why?`,
    ans: `<div class="step">
      <b>Answer:</b> **Ammonia ($\\text{NH}_3$)** has a significantly higher dipole moment than Nitrogen Trifluoride ($\\text{NF}_3$):<br>
      $$\\mu(\\text{NH}_3) = \\mathbf{1.47\\text{ D}} \\quad \\gg \\quad \\mu(\\text{NF}_3) = \\mathbf{0.24\\text{ D}}$$<br><br>
      <b>Reasoning based on Vector Dipole Directions:</b><br>
      Both molecules possess a trigonal pyramidal shape ($sp^3$ hybridized nitrogen with $1$ lone pair).<br><br>
      1. **In $\\text{NH}_3$:**<br>
      • Nitrogen is more electronegative than hydrogen ($3.0 > 2.1$).<br>
      • The three individual $\\text{N-H}$ bond dipoles point **towards nitrogen** (upwards).<br>
      • The orbital dipole of the lone pair also points in the **same upward direction** away from nitrogen.<br>
      • The bond dipoles and the lone pair dipole **reinforce each other**, resulting in a large net dipole moment ($1.47\\text{ D}$).<br><br>
      2. **In $\\text{NF}_3$:**<br>
      • Fluorine is more electronegative than nitrogen ($4.0 > 3.0$).<br>
      • The three individual $\\text{N-F}$ bond dipoles point **downwards away from nitrogen** towards fluorine.<br>
      • The lone pair orbital dipole points **upwards**.<br>
      • The lone pair dipole and the resultant $\\text{N-F}$ bond dipoles **oppose and largely cancel each other**, resulting in a very low net dipole moment ($0.24\\text{ D}$).
    </div>`,
    rubric: [
      { key: 'NH3 has higher dipole moment (1.47 D vs 0.24 D)', marks: '0.5 Mark' },
      { key: 'In NH3, N-H bond dipoles reinforce the lone pair dipole (same direction)', marks: '1 Mark' },
      { key: 'In NF3, N-F bond dipoles oppose and cancel the lone pair dipole', marks: '1 Mark' }
    ]
  },
  {
    num: 24,
    ref: 'Question 4.24',
    marks: '2.5 Marks',
    q: `What is meant by hybridisation of atomic orbitals? Describe the shapes of $sp, sp^2, sp^3$ hybrid orbitals.`,
    ans: `<div class="step">
      <b>1. Definition of Hybridisation:</b><br>
      Hybridisation is the phenomenon of intermixing of atomic orbitals of slightly different energies of the same atom to redistribute their energies, resulting in the formation of a new set of equivalent orbitals of identical shapes and energies called **hybrid orbitals**.<br><br>
      <b>2. Shapes and Orientations:</b><br>
      • **$sp$ Hybrid Orbitals:** Formed by mixing one $s$ and one $p$ orbital. The two $sp$ hybrid orbitals are directed linearly along a straight line at an angle of **$180^\circ$** (Linear geometry).<br>
      • **$sp^2$ Hybrid Orbitals:** Formed by mixing one $s$ and two $p$ orbitals. The three $sp^2$ hybrid orbitals lie in one plane directed towards the corners of an equilateral triangle at angles of **$120^\circ$** (Trigonal Planar geometry).<br>
      • **$sp^3$ Hybrid Orbitals:** Formed by mixing one $s$ and three $p$ orbitals. The four $sp^3$ hybrid orbitals are directed in three dimensions towards the four corners of a regular tetrahedron at angles of **$109.5^\circ$ ($109^\circ 28'$)** (Tetrahedral geometry).
    </div>`,
    rubric: [
      { key: 'Accurate definition of orbital hybridisation', marks: '1 Mark' },
      { key: 'Description of sp (linear, 180 deg), sp2 (trigonal planar, 120 deg), sp3 (tetrahedral, 109.5 deg)', marks: '1.5 Marks' }
    ]
  },
  {
    num: 25,
    ref: 'Question 4.25',
    marks: '2 Marks',
    q: `Describe the change in hybridisation (if any) of the $\\text{Al}$ atom in the following reaction:<br>
       $\\text{AlCl}_3 + \\text{Cl}^- \\longrightarrow \\text{AlCl}_4^-$.`,
    ans: `<div class="step">
      <b>Analysis of Hybridisation States:</b><br><br>
      1. **In Reactant $\\text{AlCl}_3$:**<br>
      • Aluminium has $3$ valence electrons, forming $3$ single $\\sigma$-bonds with chlorine atoms and zero lone pairs.<br>
      • Steric number $= 3 \\implies \\mathbf{sp^2 \\text{ Hybridisation}}$ (Trigonal planar geometry).<br><br>
      2. **In Product $\\text{AlCl}_4^-$:**<br>
      • The chloride ion ($\\text{Cl}^-$) donates a lone pair into the empty $3p$ orbital of aluminium, forming a coordinate covalent bond.<br>
      • Now aluminium is surrounded by $4$ bond pairs and zero lone pairs.<br>
      • Steric number $= 4 \\implies \\mathbf{sp^3 \\text{ Hybridisation}}$ (Tetrahedral geometry).<br><br>
      $$\\mathbf{\\text{Conclusion: The hybridisation of Aluminium changes from } sp^2 \\text{ to } sp^3.}$$
    </div>`,
    rubric: [
      { key: 'Al in AlCl3 is sp2 hybridized (trigonal planar)', marks: '1 Mark' },
      { key: 'Al in AlCl4- is sp3 hybridized (tetrahedral); transition sp2 -> sp3', marks: '1 Mark' }
    ]
  },
  {
    num: 26,
    ref: 'Question 4.26',
    marks: '2 Marks',
    q: `Is there any change in the hybridisation of $\\text{B}$ and $\\text{N}$ atoms as a result of the following reaction?<br>
       $\\text{BF}_3 + \\text{NH}_3 \\longrightarrow \\text{F}_3\\text{B} \\cdot \\text{NH}_3$.`,
    ans: `<div class="step">
      <b>Tracking Hybridisation of $\\text{B}$ and $\\text{N}$ Before and After Reaction:</b><br><br>
      1. **Boron Atom ($\\text{B}$):**<br>
      • In reactant $\\text{BF}_3$: Boron has $3$ bond pairs and $0$ lone pairs $\\implies \\mathbf{sp^2 \\text{ hybridisation}}$ (planar).<br>
      • In adduct $\\text{F}_3\\text{B} \\cdot \\text{NH}_3$: Boron accepts a lone pair from nitrogen, forming a fourth coordinate $\\sigma$-bond ($4$ bond pairs, $0$ lone pairs) $\\implies \\mathbf{sp^3 \\text{ hybridisation}}$ (tetrahedral).<br>
      • **Change in Boron: $sp^2 \\longrightarrow sp^3$.**<br><br>
      2. **Nitrogen Atom ($\\text{N}$):**<br>
      • In reactant $\\text{NH}_3$: Nitrogen has $3$ bond pairs and $1$ lone pair $\\implies \\mathbf{sp^3 \\text{ hybridisation}}$.<br>
      • In adduct $\\text{F}_3\\text{B} \\cdot \\text{NH}_3$: Nitrogen shares its lone pair, now having $4$ bond pairs (3 $\\text{N-H}$, 1 $\\text{N-B}$) $\\implies \\mathbf{sp^3 \\text{ hybridisation}}$.<br>
      • **Change in Nitrogen: No change (remains $sp^3$).**<br><br>
      $$\\mathbf{\\text{Summary: Boron changes from } sp^2 \\to sp^3\\text{; Nitrogen remains } sp^3.}$$
    </div>`,
    rubric: [
      { key: 'Boron hybridisation changes from sp2 to sp3', marks: '1 Mark' },
      { key: 'Nitrogen hybridisation remains sp3 unchanged', marks: '1 Mark' }
    ]
  },
  {
    num: 27,
    ref: 'Question 4.27',
    marks: '2.5 Marks',
    q: `Draw diagrams showing the formation of a double bond and a triple bond between carbon atoms in $\\text{C}_2\\text{H}_4$ and $\\text{C}_2\\text{H}_2$ molecules.`,
    ans: `<div class="step">
      <b>Orbital Overlap Schemes:</b><br><br>
      1. **Ethene ($\\text{C}_2\\text{H}_4$, Double Bond Formation):**<br>
      • Each carbon undergoes **$sp^2$ hybridisation**, forming three $sp^2$ planar hybrid orbitals at $120^\circ$.<br>
      • One $sp^2-sp^2$ head-on overlap forms the $\\text{C-C } \\sigma\\text{-bond}$.<br>
      • Two $sp^2-1s$ overlaps per carbon form four $\\text{C-H } \\sigma\\text{-bonds}$.<br>
      • The unhybridized $2p_z$ orbital on each carbon lies perpendicular to the molecular plane and overlaps sideways (laterally) to form **one $\\pi$-bond**.<br>
      $$\\mathbf{\\text{Result: One } \\sigma\\text{-bond and one } \\pi\\text{-bond between carbon atoms } (\\text{C}=\\text{C})}$$<br><br>
      2. **Ethyne ($\\text{C}_2\\text{H}_2$, Triple Bond Formation):**<br>
      • Each carbon undergoes **$sp$ hybridisation**, forming two linear $sp$ hybrid orbitals at $180^\circ$.<br>
      • One $sp-sp$ head-on overlap forms the central $\\text{C-C } \\sigma\\text{-bond}$.<br>
      • Two $sp-1s$ overlaps form the two $\\text{C-H } \\sigma\\text{-bonds}$.<br>
      • The two mutually perpendicular unhybridized $p$-orbitals ($2p_y, 2p_z$) on each carbon overlap sideways to form **two $\\pi$-bonds** enveloping the internuclear axis in a cylindrical electron cloud.<br>
      $$\\mathbf{\\text{Result: One } \\sigma\\text{-bond and two } \\pi\\text{-bonds between carbon atoms } (\\text{C}\\equiv\\text{C})}$$
    </div>`,
    rubric: [
      { key: 'Ethene: sp2 hybridisation, 1 sigma C-C bond and 1 lateral pi-bond via unhybridized 2pz', marks: '1.25 Marks' },
      { key: 'Ethyne: sp hybridisation, 1 sigma C-C bond and 2 lateral pi-bonds via 2py and 2pz', marks: '1.25 Marks' }
    ]
  },
  {
    num: 28,
    ref: 'Question 4.28',
    marks: '2 Marks',
    q: `What is the total number of sigma and pi bonds in the following molecules?<br>
       (a) $\\text{C}_2\\text{H}_2$<br>
       (b) $\\text{C}_2\\text{H}_4$.`,
    ans: `<div class="step">
      <b>(a) Ethyne ($\\text{C}_2\\text{H}_2$): $\\text{H}-\\text{C}\\equiv\\text{C}-\\text{H}$</b><br>
      • Two single $\\text{C-H}$ bonds: $2\\; \\sigma\\text{-bonds}$<br>
      • One $\\text{C}\\equiv\\text{C}$ triple bond: $1\\; \\sigma\\text{-bond} + 2\\; \\pi\\text{-bonds}$<br>
      $$\\mathbf{\\text{Total: } 3\\; \\sigma\\text{-bonds and } 2\\; \\pi\\text{-bonds}}$$<br><br>
      <b>(b) Ethene ($\\text{C}_2\\text{H}_4$): $\\text{H}_2\\text{C}=\\text{CH}_2$</b><br>
      • Four single $\\text{C-H}$ bonds: $4\\; \\sigma\\text{-bonds}$<br>
      • One $\\text{C}=\\text{C}$ double bond: $1\\; \\sigma\\text{-bond} + 1\\; \\pi\\text{-bond}$<br>
      $$\\mathbf{\\text{Total: } 5\\; \\sigma\\text{-bonds and } 1\\; \\pi\\text{-bond}}$$
    </div>`,
    rubric: [
      { key: '(a) C2H2: 3 sigma bonds and 2 pi bonds', marks: '1 Mark' },
      { key: '(b) C2H4: 5 sigma bonds and 1 pi bond', marks: '1 Mark' }
    ]
  },
  {
    num: 29,
    ref: 'Question 4.29',
    marks: '2 Marks',
    q: `Considering $x$-axis as the internuclear axis which out of the following will not form a sigma bond and why?<br>
       (a) $1s$ and $1s$<br>
       (b) $1s$ and $2p_x$<br>
       (c) $2p_y$ and $2p_y$<br>
       (d) $1s$ and $2s$.`,
    ans: `<div class="step">
      <b>Analysis of Overlaps along the $x$-axis:</b><br><br>
      1. A $\\sigma$-bond is formed by **end-to-end (head-on) coaxial overlap** of atomic orbitals along the internuclear axis ($x$-axis).<br>
      • (a) $1s$ and $1s$: Spherically symmetrical $s$-orbitals always overlap coaxially along any axis to form a **$\\sigma$-bond**.<br>
      • (b) $1s$ and $2p_x$: The $2p_x$ orbital lies along the $x$-axis, so it overlaps coaxially head-on with $1s$ to form a **$\\sigma$-bond**.<br>
      • (c) $2p_y$ and $2p_y$: The $2p_y$ orbitals are oriented perpendicular to the $x$-axis. When two $2p_y$ orbitals approach along the $x$-axis, they can only overlap sideways (laterally), forming a **$\\pi$-bond, NOT a $\\sigma$-bond**.<br>
      • (d) $1s$ and $2s$: Spherical orbitals overlapping along $x$-axis form a **$\\sigma$-bond**.<br><br>
      $$\\mathbf{\\text{Conclusion: (c) } 2p_y \\text{ and } 2p_y \\text{ will NOT form a } \\sigma\\text{-bond (it forms a } \\pi\\text{-bond).}}$$
    </div>`,
    rubric: [
      { key: 'Identification of (c) 2py and 2py as not forming a sigma bond', marks: '1 Mark' },
      { key: 'Explanation: 2py orbitals are perpendicular to x-axis, resulting in lateral pi-overlap', marks: '1 Mark' }
    ]
  },
  {
    num: 30,
    ref: 'Question 4.30',
    marks: '2.5 Marks',
    q: `Which hybrid orbitals are used by carbon atoms in the following molecules?<br>
       (a) $\\text{CH}_3-\\text{CH}_3$<br>
       (b) $\\text{CH}_3-\\text{CH}=\\text{CH}_2$<br>
       (c) $\\text{CH}_3-\\text{CH}_2-\\text{OH}$<br>
       (d) $\\text{CH}_3-\\text{CHO}$<br>
       (e) $\\text{CH}_3\\text{COOH}$.`,
    ans: `<div class="step">
      <b>Method:</b> Count number of $\\sigma$-bonds formed by each carbon atom ($4\\; \\sigma \\to sp^3,\\; 3\\; \\sigma \\to sp^2,\\; 2\\; \\sigma \\to sp$):<br><br>
      • **(a) Ethane ($\\text{CH}_3-\\text{CH}_3$):**<br>
      Both $\\text{C}_1$ and $\\text{C}_2$ form four single $\\sigma$-bonds: $\\mathbf{\\text{Both carbons are } sp^3}$.<br><br>
      • **(b) Propene ($\\text{C}^3\\text{H}_3-\\text{C}^2\\text{H}=\\text{C}^1\\text{H}_2$):**<br>
      $\\text{C}_3$ forms $4\\; \\sigma\\text{-bonds} \\implies \\mathbf{sp^3}$.<br>
      $\\text{C}_2$ and $\\text{C}_1$ form $3\\; \\sigma\\text{-bonds} + 1\\; \\pi\\text{-bond} \\implies \\mathbf{sp^2}$.<br><br>
      • **(c) Ethanol ($\\text{CH}_3-\\text{CH}_2-\\text{OH}$):**<br>
      Both carbons form four $\\sigma$-bonds: $\\mathbf{\\text{Both carbons are } sp^3}$.<br><br>
      • **(d) Acetaldehyde ($\\text{CH}_3-\\text{C}(=\\!\\text{O})\\text{H}$):**<br>
      Methyl carbon forms $4\\; \\sigma\\text{-bonds} \\implies \\mathbf{sp^3}$.<br>
      Carbonyl carbon forms $3\\; \\sigma\\text{-bonds} + 1\\; \\pi\\text{-bond} \\implies \\mathbf{sp^2}$.<br><br>
      • **(e) Acetic acid ($\\text{CH}_3-\\text{COOH}$):**<br>
      Methyl carbon $\\implies \\mathbf{sp^3}$.<br>
      Carboxylic carbon ($\\text{-COOH}$) forms $3\\; \\sigma\\text{-bonds} + 1\\; \\pi\\text{-bond} \\implies \\mathbf{sp^2}$.
    </div>`,
    rubric: [
      { key: '(a) both sp3; (b) C3 is sp3, C2 and C1 are sp2', marks: '1 Mark' },
      { key: '(c) both sp3; (d) C1 is sp3, C2 is sp2', marks: '1 Mark' },
      { key: '(e) methyl C is sp3, carboxyl C is sp2', marks: '0.5 Mark' }
    ]
  },
  {
    num: 31,
    ref: 'Question 4.31',
    marks: '2 Marks',
    q: `What do you understand by bond pairs and lone pairs of electrons? Illustrate by giving one example of each type.`,
    ans: `<div class="step">
      <b>Definitions and Illustration:</b><br><br>
      1. **Bond Pair (bp):**<br>
      A pair of valence electrons shared between two bonded atoms that participates directly in forming a covalent bond.<br><br>
      2. **Lone Pair (lp, Non-bonding pair):**<br>
      A pair of valence electrons that belongs exclusively to a single atom and does not participate in chemical bonding.<br><br>
      *Illustration in Water ($\\text{H}_2\\text{O}$):*<br>
      • Central oxygen atom has $6$ valence electrons.<br>
      • It shares $2$ electrons with two hydrogen atoms to form **two bond pairs** ($2\\; \\text{bp}$).<br>
      • The remaining $4$ electrons remain unshared on oxygen as **two lone pairs** ($2\\; \\text{lp}$).
    </div>`,
    rubric: [
      { key: 'Clear definition of bond pair (shared) vs lone pair (unshared)', marks: '1 Mark' },
      { key: 'Accurate illustration (H2O, NH3, or CH4) identifying both types', marks: '1 Mark' }
    ]
  },
  {
    num: 32,
    ref: 'Question 4.32',
    marks: '2.5 Marks',
    q: `Distinguish between a sigma and a pi bond.`,
    ans: `<div class="step">
      <b>Key Differences between Sigma ($\\sigma$) and Pi ($\\pi$) Bonds:</b><br><br>
      <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.85rem;">
        <thead>
          <tr style="background:#f1f5f9; text-align:left; border-bottom:2px solid #cbd5e1;">
            <th style="padding:8px;">Feature</th>
            <th style="padding:8px;">Sigma ($\\sigma$) Bond</th>
            <th style="padding:8px;">Pi ($\\pi$) Bond</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px;"><b>Mode of Overlap</b></td>
            <td style="padding:8px;">Formed by <b>head-on (coaxial / end-to-end)</b> overlap of atomic orbitals along the internuclear axis.</td>
            <td style="padding:8px;">Formed by <b>lateral (sideways / parallel)</b> overlap of atomic orbitals perpendicular to the internuclear axis.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px;"><b>Extent of Overlap &amp; Strength</b></td>
            <td style="padding:8px;">Overlap is large; hence $\\sigma$-bond is <b>strong</b>.</td>
            <td style="padding:8px;">Overlap is small; hence $\\pi$-bond is relatively <b>weaker</b>.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px;"><b>Electron Cloud Symmetry</b></td>
            <td style="padding:8px;">Symmetrical cylindrical cloud around the internuclear axis.</td>
            <td style="padding:8px;">Consists of two saucer-shaped lobes above and below the internuclear plane.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px;"><b>Free Rotation</b></td>
            <td style="padding:8px;">Free rotation of atoms around a single $\\sigma$-bond is possible.</td>
            <td style="padding:8px;">Free rotation is restricted (hindered).</td>
          </tr>
          <tr>
            <td style="padding:8px;"><b>Independent Existence</b></td>
            <td style="padding:8px;">Can exist independently as a single bond.</td>
            <td style="padding:8px;">Always formed in addition to an existing $\\sigma$-bond.</td>
          </tr>
        </tbody>
      </table>
    </div>`,
    rubric: [
      { key: 'Difference in overlap mode (head-on vs sideways)', marks: '1 Mark' },
      { key: 'Strength, electron cloud geometry, and free rotation differences', marks: '1.5 Marks' }
    ]
  },
  {
    num: 33,
    ref: 'Question 4.33',
    marks: '2.5 Marks',
    q: `Explain the formation of $\\text{H}_2$ molecule on the basis of valence bond theory.`,
    ans: `<div class="step">
      <b>Valence Bond Theory (VBT) Treatment of $\\text{H}_2$ Formation:</b><br><br>
      1. Consider two isolated hydrogen atoms $H_A$ and $H_B$ with nuclei $N_A, N_B$ and electrons $e_A, e_B$.<br><br>
      2. **Forces in Action:** When they approach each other, two opposing sets of forces arise:<br>
      • **Attractive Forces ($F_{\\text{att}}$):** Nucleus of one atom attracts the electron of the other ($N_A-e_B$ and $N_B-e_A$), in addition to existing attractions ($N_A-e_A, N_B-e_B$).<br>
      • **Repulsive Forces ($F_{\\text{rep}}$):** Between the two nuclei ($N_A-N_B$) and between the two electrons ($e_A-e_B$).<br><br>
      3. **Energy Balance &amp; Minimum:**<br>
      • As they approach, the attractive forces outweigh the repulsive forces, releasing energy and decreasing the total potential energy of the system.<br>
      • At an internuclear distance of **$74\\text{ pm}$**, the attractive and repulsive forces exactly balance, reaching a potential energy minimum ($-435.8\\text{ kJ mol}^{-1}$).<br>
      • This distance ($74\\text{ pm}$) is the **bond length** of $\\text{H}_2$, and $435.8\\text{ kJ mol}^{-1}$ is its **bond enthalpy**.<br>
      • If brought closer than $74\\text{ pm}$, nuclear repulsions dominate and potential energy shoots up rapidly.
    </div>`,
    rubric: [
      { key: 'Description of attractive vs repulsive forces between approaching atoms', marks: '1 Mark' },
      { key: 'Potential energy curve minimum at 74 pm bond length and 435.8 kJ/mol bond enthalpy', marks: '1.5 Marks' }
    ]
  },
  {
    num: 34,
    ref: 'Question 4.34',
    marks: '2 Marks',
    q: `Write the important conditions required for the linear combination of atomic orbitals to form molecular orbitals.`,
    ans: `<div class="step">
      <b>Conditions for Linear Combination of Atomic Orbitals (LCAO):</b><br><br>
      1. **Comparable Energy of Combining Orbitals:** The combining atomic orbitals must have almost the same energy (e.g., $1s$ can combine with $1s$, but $1s$ cannot combine with $2s$ because $2s$ has substantially higher energy).<br><br>
      2. **Identical Symmetry about the Molecular Axis:** The combining atomic orbitals must have the same symmetry with respect to the internuclear axis (chosen as the $z$-axis). For instance, $2p_z$ combines with $2p_z$ to form $\\sigma$-orbitals, while $2p_x$ and $2p_y$ have different symmetry and cannot combine with $2p_z$.<br><br>
      3. **Maximum Extent of Overlap:** The combining atomic orbitals must overlap to the maximum extent possible; greater overlap yields more stable bonding molecular orbitals.
    </div>`,
    rubric: [
      { key: 'Condition 1: Combining atomic orbitals must have comparable energies', marks: '0.75 Mark' },
      { key: 'Condition 2: Same symmetry about internuclear axis', marks: '0.75 Mark' },
      { key: 'Condition 3: Maximum overlap requirement', marks: '0.5 Mark' }
    ]
  },
  {
    num: 35,
    ref: 'Question 4.35',
    marks: '2 Marks',
    q: `Use molecular orbital theory to explain why the $\\text{Be}_2$ molecule does not exist.`,
    ans: `<div class="step">
      <b>Proof using Molecular Orbital Theory (MOT):</b><br><br>
      1. Beryllium has atomic number $Z = 4$. Electronic configuration: $1s^2 2s^2$.<br>
      For a hypothetical diatomic $\\text{Be}_2$ molecule, total electrons $= 4 + 4 = \\mathbf{8\\text{ electrons}}$.<br><br>
      2. **Molecular Orbital Electronic Configuration:**<br>
      $$\\text{Be}_2: \\quad \\sigma 1s^2 \\; \\sigma^* 1s^2 \\; \\sigma 2s^2 \\; \\sigma^* 2s^2$$<br>
      • Number of bonding electrons ($N_b$) $= 2 (\\sigma 1s) + 2 (\\sigma 2s) = 4$<br>
      • Number of antibonding electrons ($N_a$) $= 2 (\\sigma^* 1s) + 2 (\\sigma^* 2s) = 4$<br><br>
      3. **Calculation of Bond Order:**<br>
      $$\\text{Bond Order} = \\frac{N_b - N_a}{2} = \\frac{4 - 4}{2} = \\mathbf{0}$$<br><br>
      $$\\mathbf{\\text{Since the bond order is zero, no chemical bond exists and the } \\text{Be}_2 \\text{ molecule does not exist.}}$$
    </div>`,
    rubric: [
      { key: 'MO configuration: sigma 1s^2 sigma* 1s^2 sigma 2s^2 sigma* 2s^2 (8 electrons)', marks: '1 Mark' },
      { key: 'Bond order calculation: (4 - 4)/2 = 0, proving non-existence', marks: '1 Mark' }
    ]
  },
  {
    num: 36,
    ref: 'Question 4.36',
    marks: '3 Marks',
    q: `Compare the relative stability of the following species and indicate their magnetic properties:<br>
       $\\text{O}_2,\\; \\text{O}_2^+,\\; \\text{O}_2^-,\\; \\text{O}_2^{2-}$.`,
    ans: `<div class="step">
      <b>Molecular Orbital Configurations ($Z > 7$ scheme):</b><br>
      Base configuration: $KK \\; \\sigma 2s^2 \\; \\sigma^* 2s^2 \\; \\sigma 2p_z^2 \\; (\\pi 2p_x^2 = \\pi 2p_y^2) \\; (\\pi^* 2p_x = \\pi^* 2p_y)$.<br><br>
      1. **$\\text{O}_2^+$ ($15\\text{ e}^-$):**<br>
      Configuration: $KK \\; \\sigma 2s^2 \\; \\sigma^* 2s^2 \\; \\sigma 2p_z^2 \\; \\pi 2p_x^2 \\; \\pi 2p_y^2 \\; \\pi^* 2p_x^1$.<br>
      • $N_b = 10, N_a = 5 \\implies \\mathbf{\\text{B.O.} = \\frac{10 - 5}{2} = 2.5}$. Unpaired $e^- = 1 \\implies$ **Paramagnetic**.<br><br>
      2. **$\\text{O}_2$ ($16\\text{ e}^-$):**<br>
      Configuration: $KK \\dots \\pi^* 2p_x^1 \\; \\pi^* 2p_y^1$.<br>
      • $N_b = 10, N_a = 6 \\implies \\mathbf{\\text{B.O.} = \\frac{10 - 6}{2} = 2.0}$. Unpaired $e^- = 2 \\implies$ **Paramagnetic**.<br><br>
      3. **$\\text{O}_2^-$ ($17\\text{ e}^-$, Superoxide):**<br>
      Configuration: $KK \\dots \\pi^* 2p_x^2 \\; \\pi^* 2p_y^1$.<br>
      • $N_b = 10, N_a = 7 \\implies \\mathbf{\\text{B.O.} = \\frac{10 - 7}{2} = 1.5}$. Unpaired $e^- = 1 \\implies$ **Paramagnetic**.<br><br>
      4. **$\\text{O}_2^{2-}$ ($18\\text{ e}^-$, Peroxide):**<br>
      Configuration: $KK \\dots \\pi^* 2p_x^2 \\; \\pi^* 2p_y^2$.<br>
      • $N_b = 10, N_a = 8 \\implies \\mathbf{\\text{B.O.} = \\frac{10 - 8}{2} = 1.0}$. Unpaired $e^- = 0 \\implies$ **Diamagnetic**.<br><br>
      <b>Relative Stability (Stability $\\propto$ Bond Order):</b><br>
      $$\\mathbf{\\text{Stability Order: } \\text{O}_2^+ (2.5) > \\text{O}_2 (2.0) > \\text{O}_2^- (1.5) > \\text{O}_2^{2-} (1.0)}$$
    </div>`,
    rubric: [
      { key: 'Bond orders: O2+ (2.5), O2 (2.0), O2- (1.5), O2^2- (1.0)', marks: '1.5 Marks' },
      { key: 'Magnetic properties: O2+, O2, O2- paramagnetic; O2^2- diamagnetic', marks: '1 Mark' },
      { key: 'Relative stability order: O2+ > O2 > O2- > O2^2-', marks: '0.5 Mark' }
    ]
  },
  {
    num: 37,
    ref: 'Question 4.37',
    marks: '1.5 Marks',
    q: `Write the significance of a plus and a minus sign shown in representing the orbitals.`,
    ans: `<div class="step">
      <b>Significance of Signs in Orbital Representations:</b><br><br>
      1. Atomic orbitals are mathematical **wavefunctions ($\\psi$)** representing the amplitude of an electron wave in 3D space.<br>
      2. The **$(+)$ and $(-)$ signs** represent the **mathematical phase (sign of the wavefunction $\\psi$)** of the orbital in that specific spatial lobe, analogous to the crest $(+)$ and trough $(-)$ of a wave.<br>
      3. **They DO NOT indicate electrostatic electric charges** ($+$ charge or $-$ charge).<br>
      4. **Significance in Bonding:**<br>
      • Overlap of lobes with the **same sign** ($(+)$ with $(+)$ or $(-)$ with $(-)$) produces constructive wave interference, forming a **bonding molecular orbital**.<br>
      • Overlap of lobes with **opposite signs** ($(+)$ with $(-)$) produces destructive interference, forming an **antibonding molecular orbital** with a nodal plane between nuclei.
    </div>`,
    rubric: [
      { key: 'Signs represent mathematical phase of wavefunctions (psi), NOT electrical charges', marks: '1 Mark' },
      { key: 'Significance in constructive (bonding) vs destructive (antibonding) orbital overlap', marks: '0.5 Mark' }
    ]
  },
  {
    num: 38,
    ref: 'Question 4.38',
    marks: '2.5 Marks',
    q: `Describe the hybridisation in case of $\\text{PCl}_5$. Why are the axial bonds longer as compared to equatorial bonds?`,
    ans: `<div class="step">
      <b>1. Hybridisation in $\\text{PCl}_5$ ($sp^3d$):</b><br>
      • Ground state of $\\text{P}$ ($Z = 15$): $[\\text{Ne}]\\; 3s^2 3p^3 3d^0$.<br>
      • Excited state: One $3s$ electron promotes to vacant $3d$ orbital: $[\\text{Ne}]\\; 3s^1 3p_x^1 3p_y^1 3p_z^1 3d_{z^2}^1$.<br>
      • Intermixing of one $3s$, three $3p$, and one $3d$ orbital yields **five $sp^3d$ hybrid orbitals** directed towards the corners of a **trigonal bipyramid**.<br><br>
      <b>2. Why Axial Bonds are Longer than Equatorial Bonds:</b><br>
      • The $5$ bonds in $\\text{PCl}_5$ are not equivalent:<br>
      - **Three equatorial $\\text{P-Cl}$ bonds** lie in one plane at angles of **$120^\circ$** to each other.<br>
      - **Two axial $\\text{P-Cl}$ bonds** lie perpendicular to the equatorial plane at **$90^\circ$**.<br>
      • Each axial bond experiences **repulsion from three equatorial bonds at $90^\circ$**.<br>
      • In contrast, equatorial bonds experience repulsion from only two axial bonds at $90^\circ$ and two equatorial bonds at $120^\circ$.<br>
      • Due to significantly **greater electrostatic repulsion on the axial bonding pairs**, the axial bonds are pushed outward, making them longer and weaker ($219\\text{ pm}$ vs $204\\text{ pm}$).
    </div>`,
    rubric: [
      { key: 'PCl5 involves sp3d hybridisation with trigonal bipyramidal geometry', marks: '1 Mark' },
      { key: 'Axial bonds experience three 90 deg repulsions compared to equatorial bonds', marks: '1.5 Marks' }
    ]
  },
  {
    num: 39,
    ref: 'Question 4.39',
    marks: '2 Marks',
    q: `Define hydrogen bond. Is it weaker or stronger than the van der Waals forces?`,
    ans: `<div class="step">
      <b>1. Definition of Hydrogen Bond:</b><br>
      A hydrogen bond is an attractive electrostatic force that arises between a hydrogen atom covalently bonded to a **highly electronegative atom with small atomic size** (such as $\\text{F, O,}$ or $\\text{N}$) of one molecule and an electronegative atom of the same or another molecule:<br>
      $$\\cdots \\overset{\\delta -}{\\text{X}} - \\overset{\\delta +}{\\text{H}} \\;\\cdots\\; \\overset{\\delta -}{\\text{Y}} - \\overset{\\delta +}{\\text{H}} \\cdots$$<br><br>
      <b>2. Comparison with van der Waals Forces:</b><br>
      • A hydrogen bond is **substantially stronger** than van der Waals forces (dipole-induced dipole, London dispersion forces).<br>
      • Hydrogen bond energies typically range from **$10$ to $40\\text{ kJ mol}^{-1}$**, whereas van der Waals forces are much weaker ($< 8\\text{ kJ mol}^{-1}$).<br>
      • *(Note: It is still weaker than primary ionic or covalent bonds, which exceed $200-400\\text{ kJ mol}^{-1}$).*
    </div>`,
    rubric: [
      { key: 'Definition of H-bond with F, O, N electronegative requirement', marks: '1 Mark' },
      { key: 'Declaration that H-bond is stronger than van der Waals forces with energy comparison', marks: '1 Mark' }
    ]
  },
  {
    num: 40,
    ref: 'Question 4.40',
    marks: '2.5 Marks',
    q: `What is meant by the term bond order? Calculate the bond order of : $\\text{N}_2,\\; \\text{O}_2,\\; \\text{O}_2^+$ and $\\text{O}_2^-$.`,
    ans: `<div class="step">
      <b>1. Definition of Bond Order:</b><br>
      Bond order is defined in Molecular Orbital Theory as **one-half the difference between the number of electrons in bonding molecular orbitals ($N_b$) and antibonding molecular orbitals ($N_a$)**:<br>
      $$\\mathbf{\\text{Bond Order (B.O.)} = \\frac{N_b - N_a}{2}}$$<br><br>
      <b>2. Calculations:</b><br><br>
      • **(i) $\\text{N}_2$ ($14\\text{ electrons}$):**<br>
      Configuration: $\\sigma 1s^2 \\; \\sigma^* 1s^2 \\; \\sigma 2s^2 \\; \\sigma^* 2s^2 \\; (\\pi 2p_x^2 = \\pi 2p_y^2) \\; \\sigma 2p_z^2$<br>
      $N_b = 10, N_a = 4 \\implies \\mathbf{\\text{B.O.} = \\frac{10 - 4}{2} = 3.0}$ (Triple bond)<br><br>
      • **(ii) $\\text{O}_2$ ($16\\text{ electrons}$):**<br>
      Configuration: $\\sigma 1s^2 \\; \\sigma^* 1s^2 \\; \\sigma 2s^2 \\; \\sigma^* 2s^2 \\; \\sigma 2p_z^2 \\; (\\pi 2p_x^2 = \\pi 2p_y^2) \\; (\\pi^* 2p_x^1 = \\pi^* 2p_y^1)$<br>
      $N_b = 10, N_a = 6 \\implies \\mathbf{\\text{B.O.} = \\frac{10 - 6}{2} = 2.0}$ (Double bond)<br><br>
      • **(iii) $\\text{O}_2^+$ ($15\\text{ electrons}$):**<br>
      Removal of one electron from $\\pi^*$ antibonding orbital:<br>
      $N_b = 10, N_a = 5 \\implies \\mathbf{\\text{B.O.} = \\frac{10 - 5}{2} = 2.5}$<br><br>
      • **(iv) $\\text{O}_2^-$ ($17\\text{ electrons}$):**<br>
      Addition of one electron to $\\pi^*$ antibonding orbital:<br>
      $N_b = 10, N_a = 7 \\implies \\mathbf{\\text{B.O.} = \\frac{10 - 7}{2} = 1.5}$<br><br>
      $$\\mathbf{\\text{Summary: } \\text{B.O.}(\\text{N}_2) = 3.0,\\; \\text{B.O.}(\\text{O}_2) = 2.0,\\; \\text{B.O.}(\\text{O}_2^+) = 2.5,\\; \\text{B.O.}(\\text{O}_2^-) = 1.5.}$$
    </div>`,
    rubric: [
      { key: 'Bond order formula: (Nb - Na)/2 stated clearly', marks: '0.5 Mark' },
      { key: 'Calculations: N2 = 3.0 and O2 = 2.0', marks: '1 Mark' },
      { key: 'Calculations: O2+ = 2.5 and O2- = 1.5', marks: '1 Mark' }
    ]
  }
];

// Add remaining questions to array
qList4.forEach(rq => {
  addQ(rq.num, rq.ref, rq.marks, rq.q, rq.ans, rq.rubric);
});

// -------------------------------------------------------------
// HTML Generation
let html = `<section class="chapter-section" id="c11c-ch4">
  <div class="chapter-header">
    <div class="ch-badge">4</div>
    <div class="chapter-header-info">
      <div class="ch-category">CBSE Class 11 Chemistry &bull; Chapter 4</div>
      <h2>Chemical Bonding and Molecular Structure</h2>
      <p>NCERT Rationalised 2026–27 Syllabus &bull; All 40 Verbatim Questions with Official Step-by-Step Marking Rubrics</p>
    </div>
  </div>

  ${svgDiagram}

  <div class="ex-div">NCERT Textbook Exercise 4.1 to 4.40: Octet Rule, Lewis Structures, VSEPR Geometries, Dipole Moments, Valence Bond Theory, Hybridisation (sp, sp&sup2;, sp&sup3;, sp&sup3;d), Molecular Orbital Theory &amp; Hydrogen Bonding</div>
`;

questions.forEach(q => {
  let rubricHtml = '';
  q.rubricRows.forEach(r => {
    rubricHtml += `          <div class="marking-row"><span class="marking-key">${r.key}</span><span class="marking-marks">${r.marks}</span></div>\n`;
  });

  html += `
  <!-- ${q.id} (NCERT Exercise) -->
  <div class="q-card" id="${q.id}">
    <div class="q-head" onclick="toggleQ('${q.id}')">
      <div class="q-num">${q.ncertRef}</div>
      <div class="q-text">
        <span style="display:inline-block; font-size:0.75rem; font-weight:800; text-transform:uppercase; background:#ecfdf5; color:#059669; padding:2px 8px; border-radius:4px; margin-bottom:4px;">NCERT Exercise</span><br>
        ${q.questionHtml}
      </div>
      <div class="q-marks">[${q.marks}]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Step-by-Step Solution</div>
        <div class="answer-text">
          ${q.solutionStepsHtml}
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme Rubric (Session 2026–27)</div>
          ${rubricHtml}        </div>
      </div>
    </div>
  </div>
`;
});

html += `</section>`;

// Write ch4.html
fs.writeFileSync(ch4Path, html, 'utf8');
console.log(`Successfully generated: ${ch4Path} (${html.length} bytes)`);

// Append to cache chapters-data.js
const cacheLine = `\nwindow.CHAPTER_DATA[4] = ${JSON.stringify(html)};\n`;
fs.appendFileSync(cachePath, cacheLine, 'utf8');
console.log(`Appended Chapter 4 to preloaded cache: ${cachePath}`);
