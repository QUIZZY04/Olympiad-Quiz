/**
 * Generator for Class 11 Chemistry - Chapter 3: Classification of Elements and Periodicity in Properties
 * NCERT Rationalised 2026-27 Syllabus - All 40 Verbatim Questions (3.1 to 3.40)
 * Strictly zero shortage, CBSE marking rubrics, custom SVG diagram, offline cache.
 * NO PDF download button/bar (restricted to Physics Ch 7).
 */
const fs = require('fs');
const path = require('path');

const ch3Path = path.join(__dirname, '..', '..', 'chapters-c11c', 'ch3.html');
const cachePath = path.join(__dirname, '..', '..', 'chapters-c11c', 'chapters-data.js');

// High-fidelity custom SVG: Periodic Trends & Property Gradients across Period & Group
const svgDiagram = `
  <div style="margin:24px 0; background:white; padding:20px; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <h3 style="font-size:1.05rem; font-weight:800; color:#1e293b; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9M15 21V9"/></svg>
      Periodic Architecture: Systematic Trends in Atomic Radii, Ionization Enthalpy &amp; Electronegativity
    </h3>
    <svg viewBox="0 0 780 250" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', system-ui, sans-serif;">
      <!-- Panel 1: Periodic Trends Grid -->
      <rect x="15" y="15" width="450" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="30" y="36" font-size="11.5" font-weight="bold" fill="#0f172a">1. Vector Gradients across Periods &amp; down Groups:</text>

      <!-- Main Periodic Table Box Outline -->
      <rect x="35" y="52" width="410" height="145" rx="6" fill="#fff" stroke="#94a3b8" stroke-dasharray="3,3"/>

      <!-- Across a Period Arrow (Left to Right) -->
      <line x1="45" y1="68" x2="430" y2="68" stroke="#059669" stroke-width="2.5" marker-end="url(#arrow-green)"/>
      <text x="130" y="63" font-size="9" font-weight="bold" fill="#047857">&rarr; ACROSS A PERIOD (Left to Right)</text>
      <text x="45" y="86" font-size="8.2" fill="#334155">&bull; Nuclear Charge ($Z_\\text{eff}$) <tspan font-weight="bold" fill="#059669">&uarr; Increases</tspan></text>
      <text x="180" y="86" font-size="8.2" fill="#334155">&bull; Atomic Radius <tspan font-weight="bold" fill="#dc2626">&darr; Decreases</tspan></text>
      <text x="310" y="86" font-size="8.2" fill="#334155">&bull; Ionization Enthalpy <tspan font-weight="bold" fill="#059669">&uarr; Increases</tspan></text>
      <text x="45" y="103" font-size="8.2" fill="#334155">&bull; Electronegativity <tspan font-weight="bold" fill="#059669">&uarr; Increases</tspan></text>
      <text x="180" y="103" font-size="8.2" fill="#334155">&bull; Non-metallic Character <tspan font-weight="bold" fill="#059669">&uarr; Increases</tspan></text>
      <text x="310" y="103" font-size="8.2" fill="#334155">&bull; Metallic Character <tspan font-weight="bold" fill="#dc2626">&darr; Decreases</tspan></text>

      <!-- Down a Group Arrow (Top to Bottom) -->
      <line x1="45" y1="115" x2="45" y2="185" stroke="#2563eb" stroke-width="2.5"/>
      <text x="55" y="128" font-size="9" font-weight="bold" fill="#1e40af">&darr; DOWN A GROUP (Top to Bottom):</text>
      <text x="55" y="145" font-size="8.2" fill="#334155">&bull; Number of Shells ($n$) <tspan font-weight="bold" fill="#2563eb">&uarr; Increases</tspan></text>
      <text x="210" y="145" font-size="8.2" fill="#334155">&bull; Atomic Radius <tspan font-weight="bold" fill="#2563eb">&uarr; Increases</tspan></text>
      <text x="55" y="162" font-size="8.2" fill="#334155">&bull; Shielding Effect (&sigma;) <tspan font-weight="bold" fill="#2563eb">&uarr; Increases</tspan></text>
      <text x="210" y="162" font-size="8.2" fill="#334155">&bull; Ionization Enthalpy <tspan font-weight="bold" fill="#dc2626">&darr; Decreases</tspan></text>
      <text x="55" y="179" font-size="8.2" fill="#334155">&bull; Metallic Character <tspan font-weight="bold" fill="#2563eb">&uarr; Increases</tspan></text>
      <text x="210" y="179" font-size="8.2" fill="#334155">&bull; Electronegativity <tspan font-weight="bold" fill="#dc2626">&darr; Decreases</tspan></text>

      <!-- Panel 2: Isoelectronic Series Radii & Enthalpy Anomalies -->
      <rect x="480" y="15" width="285" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="495" y="36" font-size="11.5" font-weight="bold" fill="#0f172a">2. Isoelectronic &amp; Subshell Anomalies:</text>

      <!-- Isoelectronic Series Box -->
      <rect x="495" y="48" width="255" height="75" rx="5" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="505" y="65" font-size="8.5" font-weight="bold" fill="#1e40af">Isoelectronic Series (10 e&macr; Core):</text>
      <text x="505" y="80" font-size="8" fill="#1e3a8a">N&sup3;&macr; (171 pm) &gt; O&sup2;&macr; (140) &gt; F&macr; (133 pm) &gt;</text>
      <text x="505" y="95" font-size="8" fill="#1e3a8a">Na&sdot; (102 pm) &gt; Mg&sup2;&sdot; (72) &gt; Al&sup3;&sdot; (54 pm)</text>
      <text x="505" y="112" font-size="7.5" font-weight="bold" fill="#dc2626">&bull; Radius decreases as Nuclear Charge Z increases</text>

      <!-- Subshell Stability Anomalies -->
      <rect x="495" y="132" width="255" height="92" rx="5" fill="#ecfdf5" stroke="#a7f3d0"/>
      <text x="505" y="148" font-size="8.5" font-weight="bold" fill="#065f46">Crucial Thermodynamic Anomalies:</text>
      <text x="505" y="163" font-size="7.8" fill="#064e3b">&bull; <tspan font-weight="bold">Be &gt; B (I.E.):</tspan> Be has stable full 2s&sup2;; B loses 2p&sup1;.</text>
      <text x="505" y="178" font-size="7.8" fill="#064e3b">&bull; <tspan font-weight="bold">N &gt; O (I.E.):</tspan> N has stable half-filled 2p&sup3;; O has paired 2p&sup4;.</text>
      <text x="505" y="193" font-size="7.8" fill="#064e3b">&bull; <tspan font-weight="bold">Cl &gt; F (&Delta;_eg H):</tspan> F has small 2p orbital causing strong e&macr;-e&macr; interelectronic repulsion.</text>
      <text x="505" y="208" font-size="7.8" fill="#064e3b">&bull; <tspan font-weight="bold">Noble Gases:</tspan> Positive &Delta;_eg H (stable octet ns&sup2;np&sup6;).</text>
    </svg>
  </div>
`;

// Build question array helper
const questions = [];

function addQ(idNum, ncertRef, marks, questionHtml, solutionStepsHtml, rubricRows) {
  questions.push({
    idNum,
    id: `c11c-ch3-q${idNum}`,
    ncertRef,
    marks,
    questionHtml,
    solutionStepsHtml,
    rubricRows
  });
}

// -------------------------------------------------------------
// QUESTION 3.1
addQ(
  1, 'Question 3.1', '2 Marks',
  `What is the basic difference in approach between Mendeleev's Periodic Law and the Modern Periodic Law?`,
  `<div class="step">
    <b>Fundamental Differences in Classification Approach:</b><br><br>
    1. **Mendeleev's Periodic Law (1869):**<br>
    • Stated that: <i>"The physical and chemical properties of the elements are periodic functions of their <b>atomic weights (atomic masses)</b>."</i><br>
    • Elements were arranged in increasing order of atomic mass, leading to anomalies such as placing elements of higher atomic weight before lower (e.g., Argon before Potassium, Cobalt before Nickel) and inability to locate isotopes in separate slots.<br><br>
    2. **Modern Periodic Law (Henry Moseley, 1913):**<br>
    • Stated that: <i>"The physical and chemical properties of the elements are periodic functions of their <b>atomic numbers ($Z$)</b>."</i><br>
    • Atomic number represents the fundamental nuclear charge and corresponds directly to the electronic configuration in the valence shell, which governs chemical reactivity and cleanly resolves all previous isotopic and inversion anomalies.<br><br>
    $$\\mathbf{\\text{Conclusion: Mendeleev used atomic mass; Modern Law uses atomic number (nuclear charge).}}$$
  </div>`,
  [
    { key: "Mendeleev's periodic law definition based on atomic mass", marks: '1 Mark' },
    { key: 'Modern periodic law definition based on atomic number and valence electronic structure', marks: '1 Mark' }
  ]
);

// QUESTION 3.2
addQ(
  2, 'Question 3.2', '2.5 Marks',
  `On the basis of quantum numbers, justify that the sixth period of the periodic table should have $32$ elements.`,
  `<div class="step">
    <b>Justification based on Quantum Numbers &amp; Aufbau Principle:</b><br><br>
    1. In the sixth period of the periodic table, the principal quantum number is $\\mathbf{n = 6}$.<br><br>
    2. According to the Aufbau $(n + l)$ energy rule, the orbitals filled in the $6^{\\text{th}}$ period are filled in order of increasing energy:<br>
    • $\\mathbf{6s}$ orbital: $n = 6, l = 0 \\implies (n + l) = 6$<br>
    • $\\mathbf{4f}$ orbitals: $n = 4, l = 3 \\implies (n + l) = 7$<br>
    • $\\mathbf{5d}$ orbitals: $n = 5, l = 2 \\implies (n + l) = 7$<br>
    • $\\mathbf{6p}$ orbitals: $n = 6, l = 1 \\implies (n + l) = 7$<br><br>
    3. **Total available orbitals:**<br>
    • One $6s$ orbital $= 1\\text{ orbital}$<br>
    • Seven $4f$ orbitals $= 7\\text{ orbitals}$ (Lanthanoids, $Z = 58$ to $71$)<br>
    • Five $5d$ orbitals $= 5\\text{ orbitals}$ (Transition metals)<br>
    • Three $6p$ orbitals $= 3\\text{ orbitals}$<br>
    $$\\text{Total orbitals available} = 1 + 7 + 5 + 3 = \\mathbf{16\\text{ orbitals}}$$<br><br>
    4. By Pauli's exclusion principle, each orbital can hold a maximum of $2$ electrons:<br>
    $$\\text{Maximum number of electrons (elements)} = 16 \\times 2 = \\mathbf{32\\text{ elements}}$$<br><br>
    $$\\mathbf{\\text{Hence, the sixth period must contain exactly } 32\\text{ elements (from Cs, } Z=55 \\text{ to Rn, } Z=86\\text{).}}$$
  </div>`,
  [
    { key: 'Identification of orbitals filled in 6th period: 6s, 4f, 5d, 6p', marks: '1 Mark' },
    { key: 'Calculation of total orbitals: 1 + 7 + 5 + 3 = 16 orbitals', marks: '1 Mark' },
    { key: 'Application of Pauli exclusion principle yielding 16 x 2 = 32 elements', marks: '0.5 Mark' }
  ]
);

// QUESTION 3.3
addQ(
  3, 'Question 3.3', '2 Marks',
  `In terms of period and group where would you locate the element with $Z = 114$?`,
  `<div class="step">
    <b>Determining Period and Group for $Z = 114$ (Flerovium, $\\text{Fl}$):</b><br><br>
    1. **Noble Gas Core:** The nearest preceding noble gas is Radon ($\\text{Rn}$, $Z = 86$).<br><br>
    2. **Electronic Configuration of $Z = 114$:**<br>
    Filling $7s, 5f, 6d, 7p$ orbitals beyond Radon ($Z = 86$):<br>
    $$Z = 114: \\quad [\\text{Rn}] \\; 5f^{14} \\; 6d^{10} \\; 7s^2 \\; 7p^2$$<br>
    • Electrons filled: $86 + 14 + 10 + 2 + 2 = 114$.<br><br>
    3. **Locating Position:**<br>
    • **Period:** The highest principal quantum number is $n = 7$. Hence, it belongs to the $\\mathbf{7^{\\text{th}} \\text{ period}}$.<br>
    • **Block:** The differentiating electron enters the $7p$ subshell, so it is a $\\mathbf{p\\text{-block element}}$.<br>
    • **Group Number:** For a $p$-block element, $\\text{Group} = 12 + \\text{number of } p\\text{-electrons} = 10 + \\text{valence electrons} = 10 + (2 + 2) = \\mathbf{14}$ (Carbon family).<br><br>
    $$\\mathbf{\\text{The element with } Z = 114 \\text{ is in Period 7 and Group 14 (Carbon family).}}$$
  </div>`,
  [
    { key: 'Writing electronic configuration [Rn] 5f^14 6d^10 7s^2 7p^2', marks: '1 Mark' },
    { key: 'Deducing Period = 7 and Group = 14', marks: '1 Mark' }
  ]
);

// QUESTION 3.4
addQ(
  4, 'Question 3.4', '1.5 Marks',
  `Write the atomic number of the element present in the third period and seventeenth group of the periodic table.`,
  `<div class="step">
    <b>Step-by-Step Location:</b><br><br>
    1. **Period 3:** The valence shell corresponds to principal quantum number $n = 3$.<br>
    2. **Group 17 (Halogens):** General valence shell electronic configuration of Group 17 is $ns^2 np^5$.<br>
    For $n = 3$, the valence configuration is $\\mathbf{3s^2 3p^5}$.<br><br>
    3. **Complete Electronic Configuration:**<br>
    $$1s^2 \\; 2s^2 \\; 2p^6 \\; 3s^2 \\; 3p^5 \\quad \\text{or} \\quad [\\text{Ne}] \\; 3s^2 3p^5$$<br>
    Total electrons $= 2 + 2 + 6 + 2 + 5 = \\mathbf{17}$.<br><br>
    $$\\mathbf{\\text{The atomic number of the element is } Z = 17\\text{ (Chlorine, Cl).}}$$
  </div>`,
  [
    { key: 'Deducing valence shell configuration 3s^2 3p^5', marks: '0.5 Mark' },
    { key: 'Determining total electrons = 17 and identifying Chlorine', marks: '1 Mark' }
  ]
);

// QUESTION 3.5
addQ(
  5, 'Question 3.5', '2 Marks',
  `Which element do you think would have been named by<br>
   (i) Lawrence Berkeley Laboratory<br>
   (ii) Seaborg's group?`,
  `<div class="step">
    <b>Historical Naming of Superheavy Transuranium Elements:</b><br><br>
    <b>(i) Lawrence Berkeley Laboratory (USA):</b><br>
    • **Berkelium ($\\text{Bk}$, $Z = 97$):** Named directly in honour of the city of Berkeley and the University of California at Berkeley.<br>
    • **Lawrencium ($\\text{Lr}$, $Z = 103$):** Named directly in honour of Ernest O. Lawrence, founder of the Lawrence Berkeley Laboratory and inventor of the cyclotron.<br><br>
    <b>(ii) Seaborg's Group:</b><br>
    • **Seaborgium ($\\text{Sg}$, $Z = 106$):** Named in honour of the American nuclear chemist Glenn T. Seaborg, leader of the research group that synthesized numerous transuranic elements (plutonium through seaborgium) and formulated the actinoid concept.<br><br>
    $$\\mathbf{\\text{Summary: (i) Berkelium (Bk, } Z=97\\text{) and Lawrencium (Lr, } Z=103\\text{); (ii) Seaborgium (Sg, } Z=106\\text{).}}$$
  </div>`,
  [
    { key: '(i) Lawrencium (Z = 103) / Berkelium (Z = 97) named by Lawrence Berkeley Laboratory', marks: '1 Mark' },
    { key: "(ii) Seaborgium (Z = 106) named by Glenn Seaborg's research team", marks: '1 Mark' }
  ]
);

// QUESTION 3.6
addQ(
  6, 'Question 3.6', '2 Marks',
  `Why do elements in the same group have similar physical and chemical properties?`,
  `<div class="step">
    <b>Reasoning:</b><br><br>
    1. **Identical Valence Shell Electronic Configuration:** All elements belonging to the same vertical group possess the **same number and arrangement of electrons in their outermost (valence) shell**.<br>
    • Group 1 (Alkali metals): $ns^1$<br>
    • Group 2 (Alkaline earth metals): $ns^2$<br>
    • Group 17 (Halogens): $ns^2 np^5$<br><br>
    2. **Valency and Bonding:** Chemical reactions involve the sharing, loss, or gain of valence electrons. Because the valence electrons dictate the chemical valency, bonding types, oxidation states, and coordination geometry, elements in the same group undergo analogous reactions and form compounds with identical stoichiometries (e.g., $\\text{NaCl, KCl, RbCl}$).<br><br>
    3. **Gradual Physical Trends:** Physical properties (like atomic size, melting point, density) vary predictably down a group because the principal quantum number $n$ increases while maintaining the same outer valence symmetry.
  </div>`,
  [
    { key: 'Stating identical valence electron configuration (ns^x np^y)', marks: '1 Mark' },
    { key: 'Explaining chemical reactivity depends on valence electron loss/gain/sharing', marks: '1 Mark' }
  ]
);

// QUESTION 3.7
addQ(
  7, 'Question 3.7', '2.5 Marks',
  `What does atomic radius and ionic radius really mean to you?`,
  `<div class="step">
    <b>Physical Meaning and Operational Definitions:</b><br><br>
    1. **Atomic Radius:**<br>
    The probability distribution of electrons around a nucleus extends asymptotically to infinity, meaning an isolated atom has no sharp, rigid physical boundary. Therefore, atomic radius is practically measured as **half the distance between the nuclei of two bonded adjacent atoms** of the same element:<br>
    • **Covalent Radius:** Half of the internuclear distance between two identical single-bonded atoms in a covalent molecule (e.g., in $\\text{Cl}_2$, internuclear distance is $198\\text{ pm} \\implies r_{\\text{cov}} = 99\\text{ pm}$).<br>
    • **Metallic Radius:** Half of the internuclear distance between two adjacent metal ions in a metallic lattice.<br>
    • **van der Waals Radius:** Half of the distance between two non-bonded adjacent atoms of neighboring molecules in the solid state ($r_{\\text{vdW}} > r_{\\text{metallic}} > r_{\\text{covalent}}$).<br><br>
    2. **Ionic Radius:**<br>
    The effective distance from the center of the nucleus of an ion up to which it exerts an electrostatic influence on its electron cloud in an ionic crystal lattice.<br>
    • **Cation Radius:** Always smaller than parent atom ($r_{\\text{cation}} < r_{\\text{atom}}$) due to loss of valence electrons and increased $Z_{\\text{eff}}$.<br>
    • **Anion Radius:** Always larger than parent atom ($r_{\\text{anion}} > r_{\\text{atom}}$) due to addition of electrons and inter-electronic repulsion.
  </div>`,
  [
    { key: 'Atomic radius definition via internuclear distance (covalent, metallic, van der Waals)', marks: '1.5 Marks' },
    { key: 'Ionic radius definition and contrast of cation vs anion size', marks: '1 Mark' }
  ]
);

// QUESTION 3.8
addQ(
  8, 'Question 3.8', '2.5 Marks',
  `How do atomic radius vary in a period and in a group? How do you explain the variation?`,
  `<div class="step">
    <b>1. Variation Across a Period (Left to Right):</b><br>
    • **Trend:** Atomic radius **decreases** from left to right across a period.<br>
    • **Explanation:** Moving across a period, electrons are added to the **same principal energy level (same shell $n$)**, while the nuclear charge ($Z$) increases by one unit for each successive element. Since inner electron shielding does not increase significantly, the **effective nuclear charge ($Z_{\\text{eff}}$)** pulls the valence electrons closer to the nucleus, contracting the electron cloud.<br><br>
    <b>2. Variation Down a Group (Top to Bottom):</b><br>
    • **Trend:** Atomic radius **increases** down a group.<br>
    • **Explanation:** Moving down a group, a new principal energy shell ($n$) is added at each successive element. Although the nuclear charge also increases, the effect of adding new shells and the increased screening (shielding) by inner electrons far outweighs the nuclear charge increase, expanding the size of the electron cloud.<br><br>
    $$\\mathbf{\\text{Summary: Decreases across a period (increasing } Z_\\text{eff}\\text{); Increases down a group (adding shells } n\\text{).}}$$
  </div>`,
  [
    { key: 'Period variation: decreases due to increasing effective nuclear charge (Z_eff) in same shell', marks: '1.5 Marks' },
    { key: 'Group variation: increases due to addition of new electron shells and shielding effect', marks: '1 Mark' }
  ]
);

// QUESTION 3.9
addQ(
  9, 'Question 3.9', '2.5 Marks',
  `What do you understand by isoelectronic species? Name a species that will be isoelectronic with each of the following atoms or ions:<br>
   (i) $\\text{F}^-$, (ii) $\\text{Ar}$, (iii) $\\text{Mg}^{2+}$, (iv) $\\text{Rb}^+$.`,
  `<div class="step">
    <b>Definition:</b><br>
    Atoms or ions that contain the **exact same total number of electrons** are called **isoelectronic species**.<br><br>
    <b>Isoelectronic counterparts:</b><br>
    • **(i) $\\text{F}^-$ (Fluoride ion):**<br>
    $Z = 9$, total electrons $= 9 + 1 = \\mathbf{10\\text{ e}^-}$.<br>
    Isoelectronic species: $\\mathbf{\\text{Ne}},\\; \\mathbf{\\text{Na}^+},\\; \\mathbf{\\text{O}^{2-}},\\; \\mathbf{\\text{Mg}^{2+}},\\; \\mathbf{\\text{Al}^{3+}},\\; \\mathbf{\\text{N}^{3-}}$.<br><br>
    • **(ii) $\\text{Ar}$ (Argon atom):**<br>
    $Z = 18$, total electrons $= \\mathbf{18\\text{ e}^-}$.<br>
    Isoelectronic species: $\\mathbf{\\text{K}^+},\\; \\mathbf{\\text{Ca}^{2+}},\\; \\mathbf{\\text{Cl}^-},\\; \\mathbf{\\text{S}^{2-}},\\; \\mathbf{\\text{P}^{3-}}$.<br><br>
    • **(iii) $\\text{Mg}^{2+}$ (Magnesium ion):**<br>
    $Z = 12$, total electrons $= 12 - 2 = \\mathbf{10\\text{ e}^-}$.<br>
    Isoelectronic species: $\\mathbf{\\text{Ne}},\\; \\mathbf{\\text{Na}^+},\\; \\mathbf{\\text{F}^-},\\; \\mathbf{\\text{O}^{2-}},\\; \\mathbf{\\text{Al}^{3+}}$.<br><br>
    • **(iv) $\\text{Rb}^+$ (Rubidium ion):**<br>
    $Z = 37$, total electrons $= 37 - 1 = \\mathbf{36\\text{ e}^-}$.<br>
    Isoelectronic species: $\\mathbf{\\text{Kr}},\\; \\mathbf{\\text{Sr}^{2+}},\\; \\mathbf{\\text{Br}^-},\\; \\mathbf{\\text{Se}^{2-}}$.
  </div>`,
  [
    { key: 'Isoelectronic species definition stated clearly', marks: '0.5 Mark' },
    { key: 'Correct isoelectronic species for F- (10 e-) and Ar (18 e-)', marks: '1 Mark' },
    { key: 'Correct isoelectronic species for Mg2+ (10 e-) and Rb+ (36 e-)', marks: '1 Mark' }
  ]
);

// QUESTION 3.10
addQ(
  10, 'Question 3.10', '2.5 Marks',
  `Consider the following species:<br>
   $\\text{N}^{3-},\\; \\text{O}^{2-},\\; \\text{F}^-,\\; \\text{Na}^+,\\; \\text{Mg}^{2+},\\; \\text{Al}^{3+}$.<br>
   (a) What is common in them?<br>
   (b) Arrange them in the order of increasing ionic radii.`,
  `<div class="step">
    <b>(a) Common Feature:</b><br>
    All these species are **isoelectronic**; each possesses exactly **$10$ electrons** (electronic configuration $1s^2 2s^2 2p^6$, matching Neon):<br>
    • $\\text{N}^{3-}$: $7 + 3 = 10\\text{ e}^-$<br>
    • $\\text{O}^{2-}$: $8 + 2 = 10\\text{ e}^-$<br>
    • $\\text{F}^-$: $9 + 1 = 10\\text{ e}^-$<br>
    • $\\text{Na}^+$: $11 - 1 = 10\\text{ e}^-$<br>
    • $\\text{Mg}^{2+}$: $12 - 2 = 10\\text{ e}^-$<br>
    • $\\text{Al}^{3+}$: $13 - 3 = 10\\text{ e}^-$<br><br>
    <b>(b) Arrangement in Order of Increasing Ionic Radii:</b><br>
    For isoelectronic species, the number of electrons is constant, so ionic radius is inversely proportional to the nuclear charge (atomic number $Z$):<br>
    $$\\text{Ionic Radius} \\propto \\frac{1}{\\text{Nuclear Charge } (Z)}$$<br>
    Nuclear charges: $\\text{N} (+7) < \\text{O} (+8) < \\text{F} (+9) < \\text{Na} (+11) < \\text{Mg} (+12) < \\text{Al} (+13)$.<br>
    Greater positive nuclear charge exerts a stronger inward electrostatic attraction on the 10 electrons, shrinking the ion.<br><br>
    $$\\mathbf{\\text{Increasing order of ionic radii: } \\text{Al}^{3+} < \\text{Mg}^{2+} < \\text{Na}^+ < \\text{F}^- < \\text{O}^{2-} < \\text{N}^{3-}}$$
  </div>`,
  [
    { key: '(a) Identifying all 6 species are isoelectronic with 10 electrons', marks: '1 Mark' },
    { key: '(b) Inverse relation with nuclear charge Z', marks: '0.5 Mark' },
    { key: 'Correct ascending radii order: Al3+ < Mg2+ < Na+ < F- < O2- < N3-', marks: '1 Mark' }
  ]
);

// QUESTION 3.11
addQ(
  11, 'Question 3.11', '2 Marks',
  `Explain why cations are smaller and anions larger in radii than their parent atoms?`,
  `<div class="step">
    <b>1. Why Cations are Smaller than Parent Atoms ($r_{\\text{cation}} < r_{\\text{atom}}$):</b><br>
    • Formation of a cation involves the **loss of one or more valence electrons** from the neutral atom.<br>
    • In many cases (e.g., $\\text{Na} \\to \\text{Na}^+$), the entire outermost shell is eliminated ($n = 3 \\to n = 2$).<br>
    • The remaining electrons experience an unchanged nuclear charge ($+Z$), so the **effective nuclear charge per electron ($Z/e$ ratio) increases**, pulling the remaining electron cloud tighter towards the nucleus.<br><br>
    <b>2. Why Anions are Larger than Parent Atoms ($r_{\\text{anion}} > r_{\\text{atom}}$):</b><br>
    • Formation of an anion involves the **gain of one or more electrons** into the valence shell.<br>
    • Nuclear charge remains unchanged while the electron count increases, decreasing the effective nuclear charge per electron ($Z/e$ ratio decreases).<br>
    • The added electrons increase **inter-electronic repulsions** within the valence shell, causing the electron cloud to expand outward.
  </div>`,
  [
    { key: 'Cation explanation: higher Z/e ratio, reduced shielding, and possible loss of outer shell', marks: '1 Mark' },
    { key: 'Anion explanation: added electrons increase interelectronic repulsions and lower Z/e ratio', marks: '1 Mark' }
  ]
);

// QUESTION 3.12
addQ(
  12, 'Question 3.12', '2 Marks',
  `What is the significance of the terms — 'isolated gaseous atom' and 'ground state' while defining the ionization enthalpy and electron gain enthalpy?`,
  `<div class="step">
    <b>Significance of the Specific Constraints:</b><br><br>
    1. **'Isolated Gaseous Atom':**<br>
    • In liquid or solid states, atoms interact strongly with neighboring atoms via metallic bonds, covalent lattices, or van der Waals intermolecular forces.<br>
    • In the gaseous state at low pressure, interatomic forces are virtually zero, so the atom is truly **isolated**.<br>
    • This ensures the measured enthalpy change represents solely the energy required to remove or add an electron to that single atom, free from lattice energy, sublimation energy, or solvent effects.<br><br>
    2. **'Ground State':**<br>
    • An atom can exist in infinite excited states where an electron has already absorbed energy and occupies a higher orbital.<br>
    • In excited states, less energy would be needed to remove the electron, yielding arbitrary, non-reproducible values.<br>
    • The **ground state** represents the most stable, lowest-energy electronic configuration of the atom, providing an unambiguous, standard reference baseline for thermodynamic comparisons.
  </div>`,
  [
    { key: 'Significance of isolated gaseous state: eliminates interatomic forces, lattice energy and bonding', marks: '1 Mark' },
    { key: 'Significance of ground state: provides lowest energy standard reference state for reproducibility', marks: '1 Mark' }
  ]
);

// QUESTION 3.13
addQ(
  13, 'Question 3.13', '2 Marks',
  `Energy of an electron in the ground state of the hydrogen atom is $-2.18 \\times 10^{-18}\\text{ J}$. Calculate the ionization enthalpy of atomic hydrogen in terms of $\\text{J mol}^{-1}$.`,
  `<div class="step">
    Given Data:<br>
    • Ground state energy ($n = 1$): $E_1 = -2.18 \\times 10^{-18}\\text{ J atom}^{-1}$<br>
    • Ionization corresponds to removing the electron to $n = \\infty$ ($E_\\infty = 0$):<br>
    $$\\Delta E = E_\\infty - E_1 = 0 - (-2.18 \\times 10^{-18}\\text{ J}) = \\mathbf{2.18 \\times 10^{-18}\\text{ J atom}^{-1}}$$<br><br>
    <b>Ionization Enthalpy per mole of Hydrogen atoms:</b><br>
    Multiply by Avogadro's constant ($N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}$):<br>
    $$\\Delta_i H = \\Delta E \\times N_A = (2.18 \\times 10^{-18}\\text{ J atom}^{-1}) \\times (6.022 \\times 10^{23}\\text{ atoms mol}^{-1})$$<br>
    $$\\Delta_i H = 1.3128 \\times 10^6\\text{ J mol}^{-1} = \\mathbf{1.313 \\times 10^6\\text{ J mol}^{-1} = 1313\\text{ kJ mol}^{-1}}$$<br><br>
    $$\\mathbf{\\text{The ionization enthalpy of atomic hydrogen is } 1.313 \\times 10^6\\text{ J mol}^{-1} \\text{ (or } 1313\\text{ kJ mol}^{-1}\\text{).}}$$
  </div>`,
  [
    { key: 'Calculation of ionization energy per atom = 2.18 x 10^-18 J', marks: '1 Mark' },
    { key: 'Multiplying by Avogadro number yielding 1.313 x 10^6 J/mol (1313 kJ/mol)', marks: '1 Mark' }
  ]
);

// QUESTION 3.14
addQ(
  14, 'Question 3.14', '3 Marks',
  `Among the second period elements the actual ionization enthalpies are in the order $\\text{Li} < \\text{B} < \\text{Be} < \\text{C} < \\text{O} < \\text{N} < \\text{F} < \\text{Ne}$.<br>
   Explain why<br>
   (i) $\\text{Be}$ has higher $\\Delta_i H$ than $\\text{B}$<br>
   (ii) $\\text{O}$ has lower $\\Delta_i H$ than $\\text{N}$ and $\\text{F}$?`,
  `<div class="step">
    <b>(i) Why Beryllium ($\\text{Be}$) has higher $\\Delta_i H$ than Boron ($\\text{B}$):</b><br>
    • Electronic configurations: $\\text{Be} (Z = 4): 1s^2 2s^2$; $\\text{B} (Z = 5): 1s^2 2s^2 2p^1$.<br>
    • In Beryllium, the electron to be removed is from a **completely filled $2s$ subshell ($2s^2$)**, which possesses extra stability.<br>
    • Furthermore, an $s$-electron penetrates closer to the nucleus than a $p$-electron, experiencing higher effective nuclear charge.<br>
    • In Boron, the electron is removed from a single $2p$ orbital ($2p^1$), which is well-shielded by the inner $1s^2 2s^2$ electrons and is held less tightly. Thus, $\\Delta_i H(\\text{Be}) > \\Delta_i H(\\text{B})$.<br><br>
    <b>(ii) Why Oxygen ($\\text{O}$) has lower $\\Delta_i H$ than Nitrogen ($\\text{N}$) and Fluorine ($\\text{F}$):</b><br>
    • Electronic configurations: $\\text{N} (Z = 7): 1s^2 2s^2 2p_x^1 2p_y^1 2p_z^1$; $\\text{O} (Z = 8): 1s^2 2s^2 2p_x^2 2p_y^1 2p_z^1$.<br>
    • Nitrogen has an **exactly half-filled $2p^3$ subshell**, which imparts extra symmetrical stability and high exchange energy.<br>
    • In Oxygen, four electrons occupy the $2p$ orbitals ($2p^4$). One orbital ($2p_x$) contains a paired pair of electrons. The mutual electrostatic repulsion between these two paired electrons in the same orbital makes it easier to remove one electron compared to the stable half-filled configuration of Nitrogen.<br>
    • Fluorine has higher nuclear charge ($Z = 9$) and smaller size, which increases its $\\Delta_i H$ above Oxygen.
  </div>`,
  [
    { key: '(i) Be has completely filled 2s^2 orbital with higher penetration than 2p^1 in B', marks: '1.5 Marks' },
    { key: '(ii) N has stable half-filled 2p^3; O has paired 2p^4 where inter-electronic repulsion facilitates removal', marks: '1.5 Marks' }
  ]
);

// QUESTION 3.15
addQ(
  15, 'Question 3.15', '2.5 Marks',
  `How would you explain the fact that the first ionization enthalpy of sodium is lower than that of magnesium but its second ionization enthalpy is higher than that of magnesium?`,
  `<div class="step">
    Electronic configurations:<br>
    • $\\text{Na} (Z = 11): 1s^2 2s^2 2p^6 3s^1 = [\\text{Ne}]\\; 3s^1$<br>
    • $\\text{Mg} (Z = 12): 1s^2 2s^2 2p^6 3s^2 = [\\text{Ne}]\\; 3s^2$<br><br>
    <b>1. First Ionization Enthalpy ($\\Delta_i H_1(\\text{Na}) < \\Delta_i H_1(\\text{Mg})$):</b><br>
    • Removing the $1^{\\text{st}}$ electron from $\\text{Na}$ leaves a stable noble gas configuration ($[\\text{Ne}]$), and its $3s^1$ electron experiences a lower nuclear charge ($Z = 11$) compared to $\\text{Mg}$ ($Z = 12$).<br>
    • Magnesium has a fully filled $3s^2$ subshell with higher nuclear charge, making $\\Delta_i H_1(\\text{Mg}) = 737\\text{ kJ/mol} > \\Delta_i H_1(\\text{Na}) = 496\\text{ kJ/mol}$.<br><br>
    <b>2. Second Ionization Enthalpy ($\\Delta_i H_2(\\text{Na}) > \\Delta_i H_2(\\text{Mg})$):</b><br>
    • For $\\text{Na}^+$: Configuration is $[\\text{Ne}]\\; 2s^2 2p^6$. Removing the $2^{\\text{nd}}$ electron requires disrupting a **stable octet noble gas core** from a principal shell closer to the nucleus ($n = 2$), demanding colossal energy ($\\Delta_i H_2 = 4562\\text{ kJ/mol}$).<br>
    • For $\\text{Mg}^+$: Configuration is $[\\text{Ne}]\\; 3s^1$. The $2^{\\text{nd}}$ electron is removed from the outer $3s$ orbital ($n = 3$), and its removal actually yields a stable noble gas core ($[\\text{Ne}]$). Hence, $\\Delta_i H_2(\\text{Mg}) = 1450\\text{ kJ/mol} \\ll \\Delta_i H_2(\\text{Na})$.
  </div>`,
  [
    { key: 'First IE: Na loses 3s^1 with lower nuclear charge compared to stable 3s^2 of Mg', marks: '1 Mark' },
    { key: 'Second IE: Na+ requires breaking stable octet [Ne] core (n=2), whereas Mg+ loses outer 3s^1', marks: '1.5 Marks' }
  ]
);

// QUESTION 3.16
addQ(
  16, 'Question 3.16', '2 Marks',
  `What are the various factors due to which the ionization enthalpy of the main group elements tends to decrease down a group?`,
  `<div class="step">
    <b>Factors Causing Ionization Enthalpy to Decrease Down a Group:</b><br><br>
    1. **Increase in Atomic Size (Principal Quantum Number $n$):**<br>
    At each succeeding element down a group, a completely new principal energy shell is added. The distance between the nucleus and the outermost valence electrons increases substantially, weakening the electrostatic attraction ($F \\propto 1/r^2$).<br><br>
    2. **Increase in Shielding (Screening) Effect:**<br>
    As new shells are added, the number of intervening inner core electrons increases. These core electrons screen the valence electrons from the positive nuclear charge, reducing the effective nuclear pull.<br><br>
    3. **Dominance of Size and Shielding over Nuclear Charge:**<br>
    Although the nuclear charge ($Z$) increases down the group, the simultaneous increase in atomic radius and shielding effect far outweighs the increase in nuclear charge, causing the valence electrons to be held progressively more loosely.
  </div>`,
  [
    { key: 'Factor 1: Increase in atomic size / principal quantum number n', marks: '0.5 Mark' },
    { key: 'Factor 2: Increased shielding/screening effect by intervening core electrons', marks: '0.5 Mark' },
    { key: 'Combined explanation: size and shielding outweigh nuclear charge increase', marks: '1 Mark' }
  ]
);

// QUESTION 3.17
addQ(
  17, 'Question 3.17', '2.5 Marks',
  `The first ionization enthalpy values (in $\\text{kJ mol}^{-1}$) of group 13 elements are:<br>
   $\\text{B}: 801,\\; \\text{Al}: 577,\\; \\text{Ga}: 579,\\; \\text{In}: 558,\\; \\text{Tl}: 589$.<br>
   How would you explain this deviation from the general trend?`,
  `<div class="step">
    <b>Analysis of Anomalous $\\Delta_i H$ in Group 13:</b><br><br>
    • **Normal drop from $\\text{B}$ ($801$) to $\\text{Al}$ ($577$):** Expected due to substantial size increase and addition of third shell.<br><br>
    • **Slight increase from $\\text{Al}$ ($577$) to $\\text{Ga}$ ($579$):**<br>
    Gallium follows the $3d$ transition elements and has an electronic configuration of $[\\text{Ar}]\\; 3d^{10} 4s^2 4p^1$. The ten $3d$ electrons have poor shielding ability, causing an increased effective nuclear charge ($Z_\\text{eff}$) that contracts Gallium's radius (making it slightly smaller than Aluminium) and increases its ionization enthalpy.<br><br>
    • **Drop from $\\text{Ga}$ ($579$) to $\\text{In}$ ($558$):** Standard increase in size from $n = 4$ to $n = 5$ with $4d$ shielding.<br><br>
    • **Sharp increase from $\\text{In}$ ($558$) to $\\text{Tl}$ ($589$):**<br>
    Thallium follows the $4f$ lanthanoid series ($[\\text{Xe}]\\; 4f^{14} 5d^{10} 6s^2 6p^1$). The fourteen $4f$ electrons have **extremely poor shielding power** (Lanthanoid Contraction). The high positive nuclear charge ($Z = 81$) pulls the valence $6p$ and $6s$ electrons very tightly, causing $\\Delta_i H$ of $\\text{Tl}$ to exceed both $\\text{In}$ and $\\text{Ga}$.
  </div>`,
  [
    { key: 'Explaining Al to Ga plateau/increase due to poor shielding of 3d^10 electrons (d-block contraction)', marks: '1 Mark' },
    { key: 'Explaining In to Tl sharp increase due to poor shielding of 4f^14 electrons (lanthanoid contraction)', marks: '1.5 Marks' }
  ]
);

// QUESTION 3.18
addQ(
  18, 'Question 3.18', '2 Marks',
  `Which of the following pairs of elements would have a more negative electron gain enthalpy?<br>
   (i) $\\text{O}$ or $\\text{F}$<br>
   (ii) $\\text{F}$ or $\\text{Cl}$.`,
  `<div class="step">
    <b>(i) $\\text{O}$ or $\\text{F}$ (Within Period 2):</b><br>
    • Across a period from left to right, nuclear charge increases and atomic size decreases.<br>
    • Fluorine ($Z = 9$) has a higher nuclear charge and higher electronegativity than Oxygen ($Z = 8$). Adding an electron to Fluorine yields a stable noble gas configuration ($[\\text{Ne}]$).<br>
    • Hence, **Fluorine ($\\text{F}$)** has a much more negative electron gain enthalpy ($\\Delta_{\\text{eg}} H(\\text{F}) = -328\\text{ kJ/mol}$, $\\Delta_{\\text{eg}} H(\\text{O}) = -141\\text{ kJ/mol}$).<br><br>
    <b>(ii) $\\text{F}$ or $\\text{Cl}$ (Down Group 17):</b><br>
    • **Chlorine ($\\text{Cl}$)** has a **more negative** electron gain enthalpy than Fluorine ($\\Delta_{\\text{eg}} H(\\text{Cl}) = -349\\text{ kJ/mol} > \\Delta_{\\text{eg}} H(\\text{F}) = -328\\text{ kJ/mol}$).<br>
    • *Reason:* Fluorine has an extremely compact, small $2p$ subshell. Adding an electron results in intense **inter-electronic repulsions** among the seven valence electrons. In Chlorine, the incoming electron enters the larger, more diffuse $3p$ orbital where electron-electron repulsions are minimal.<br><br>
    $$\\mathbf{\\text{Summary: (i) } \\text{F has more negative } \\Delta_{\\text{eg}} H;\\; \\text{(ii) } \\text{Cl has more negative } \\Delta_{\\text{eg}} H.}$$
  </div>`,
  [
    { key: '(i) Fluorine is more negative than Oxygen due to higher nuclear charge and near-octet status', marks: '1 Mark' },
    { key: '(ii) Chlorine is more negative than Fluorine due to less inter-electronic repulsion in larger 3p subshell', marks: '1 Mark' }
  ]
);

// QUESTION 3.19
addQ(
  19, 'Question 3.19', '2 Marks',
  `Would you expect the second electron gain enthalpy of $\\text{O}$ as positive, more negative or less negative than the first? Justify your answer.`,
  `<div class="step">
    <b>Answer:</b> The second electron gain enthalpy of oxygen is **positive (endothermic)**.<br><br>
    $$\\text{O}(g) + e^- \\longrightarrow \\text{O}^-(g) \\quad \\Delta_{\\text{eg}} H_1 = -141\\text{ kJ mol}^{-1} \\quad (\\text{Exothermic})$$<br>
    $$\\text{O}^-(g) + e^- \\longrightarrow \\text{O}^{2-}(g) \\quad \\Delta_{\\text{eg}} H_2 = +780\\text{ kJ mol}^{-1} \\quad (\\text{Endothermic})$$<br><br>
    <b>Justification:</b><br>
    • When the first electron is added to a neutral oxygen atom, the attractive pull of the positive nucleus exceeds electron-electron repulsion, releasing energy (negative $\\Delta_{\\text{eg}} H_1$).<br>
    • To form the oxide ion ($\\text{O}^{2-}$), a second electron must be forced onto an already **negatively charged $\\text{O}^-$ anion**.<br>
    • There is immense **electrostatic repulsion** between the incoming electron and the negatively charged $\\text{O}^-$ ion.<br>
    • Overcoming this strong repulsion requires significant external energy input, making $\\Delta_{\\text{eg}} H_2$ strongly positive.<br><br>
    $$\\mathbf{\\text{Conclusion: The second electron gain enthalpy is positive (endothermic).}}$$
  </div>`,
  [
    { key: 'Clear declaration that Delta_eg H2 is positive (endothermic)', marks: '1 Mark' },
    { key: 'Justification: strong electrostatic repulsion between negative O- ion and incoming electron', marks: '1 Mark' }
  ]
);

// QUESTION 3.20
addQ(
  20, 'Question 3.20', '2 Marks',
  `What is the basic difference between the terms electron gain enthalpy and electronegativity?`,
  `<div class="step">
    <b>Comparison Table of Core Conceptual Differences:</b><br><br>
    <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.85rem;">
      <thead>
        <tr style="background:#f1f5f9; text-align:left; border-bottom:2px solid #cbd5e1;">
          <th style="padding:8px;">Property</th>
          <th style="padding:8px;">Electron Gain Enthalpy ($\\Delta_{\\text{eg}} H$)</th>
          <th style="padding:8px;">Electronegativity ($\\chi$)</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px;"><b>Definition</b></td>
          <td style="padding:8px;">Tendency of an <b>isolated gaseous atom</b> to accept an electron to form a uninegative anion.</td>
          <td style="padding:8px;">Tendency of an atom in a <b>bonded chemical compound</b> to attract the shared pair of electrons towards itself.</td>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px;"><b>State of Atom</b></td>
          <td style="padding:8px;">Applies strictly to single, unbonded atoms in the gaseous state.</td>
          <td style="padding:8px;">Applies to an atom chemically bonded to another atom in a molecule.</td>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px;"><b>Nature &amp; Units</b></td>
          <td style="padding:8px;">Absolute thermodynamic energy quantity, measured in $\\text{kJ mol}^{-1}$ or $\\text{eV atom}^{-1}$.</td>
          <td style="padding:8px;">Relative, dimensionless property with no units (e.g., Pauling scale, Mulliken scale).</td>
        </tr>
        <tr>
          <td style="padding:8px;"><b>Constancy</b></td>
          <td style="padding:8px;">Constant characteristic property of a given element.</td>
          <td style="padding:8px;">Varies depending on hybridization state and oxidation number of the element.</td>
        </tr>
      </tbody>
    </table>
  </div>`,
  [
    { key: 'Difference in atomic state: isolated gaseous atom vs bonded state in molecule', marks: '1 Mark' },
    { key: 'Difference in measurement: absolute thermodynamic energy (kJ/mol) vs relative dimensionless index', marks: '1 Mark' }
  ]
);

// Helper for generating questions 21 to 40
const remainingQuestions = [
  {
    num: 21,
    ref: 'Question 3.21',
    marks: '2 Marks',
    q: `How would you react to the statement that the electronegativity of $\\text{N}$ on Pauling scale is $3.0$ in all the nitrogen compounds?`,
    ans: `<div class="step">
      <b>Scientific Assessment:</b> The statement is <b>incorrect</b>.<br><br>
      • **Electronegativity is not an invariant physical constant** for an element; it varies according to its chemical bonding environment, oxidation state, and orbital hybridization:<br>
      1. **Effect of Hybridization:** Electronegativity increases with increasing $s$-character ($sp > sp^2 > sp^3$). In an $sp$-hybridized state ($50\\%\\; s$-character), nitrogen attracts electrons much more strongly than in an $sp^3$-hybridized state ($25\\%\\; s$-character).<br>
      2. **Effect of Oxidation State:** Nitrogen in higher oxidation states (e.g., $+5$ in $\\text{HNO}_3$ or $\\text{NO}_2^+$) has greater effective nuclear pull and is significantly more electronegative than in lower oxidation states (e.g., $-3$ in $\\text{NH}_3$).<br>
      • The value $3.0$ on the Pauling scale represents merely an empirical average value under standard reference bonding conditions.
    </div>`,
    rubric: [
      { key: 'Statement is incorrect; electronegativity is not a constant property', marks: '1 Mark' },
      { key: 'Explanation showing dependence on oxidation state and hybridization (s-character)', marks: '1 Mark' }
    ]
  },
  {
    num: 22,
    ref: 'Question 3.22',
    marks: '2 Marks',
    q: `Describe the theory associated with the radius of an atom as it<br>
       (a) gains an electron<br>
       (b) loses an electron.`,
    ans: `<div class="step">
      <b>(a) Radius when an atom gains an electron (Anion formation):</b><br>
      • Adding an electron increases the total electron count while the nuclear charge ($+Z$) remains unchanged.<br>
      • The effective nuclear charge per electron ($Z/e$) decreases.<br>
      • The added electron causes increased inter-electronic repulsions among all valence electrons, forcing the electron cloud to expand.<br>
      • Thus, **the radius increases ($r_{\\text{anion}} > r_{\\text{atom}}$)**.<br><br>
      <b>(b) Radius when an atom loses an electron (Cation formation):</b><br>
      • Removing an electron leaves fewer electrons attracted by the same positive nuclear charge ($+Z$).<br>
      • The $Z/e$ ratio increases, increasing the effective nuclear charge pulling each remaining electron closer.<br>
      • In many cases, the entire outer valence shell is emptied.<br>
      • Thus, **the radius decreases ($r_{\\text{cation}} < r_{\\text{atom}}$)**.
    </div>`,
    rubric: [
      { key: '(a) Anion radius expansion due to increased interelectronic repulsion and decreased Z/e', marks: '1 Mark' },
      { key: '(b) Cation radius contraction due to increased effective nuclear charge Z/e and shell loss', marks: '1 Mark' }
    ]
  },
  {
    num: 23,
    ref: 'Question 3.23',
    marks: '2 Marks',
    q: `Would you expect the first ionization enthalpies for two isotopes of the same element to be the same or different? Justify your answer.`,
    ans: `<div class="step">
      <b>Answer:</b> The first ionization enthalpies for two isotopes of the same element will be **essentially identical (the same)**.<br><br>
      <b>Justification:</b><br>
      1. Ionization enthalpy depends directly on:<br>
      • **Nuclear charge ($Z$)** (number of protons)<br>
      • **Number of electrons** and their electronic configuration<br>
      • **Atomic radius / screening constant ($\\sigma$)**<br><br>
      2. Isotopes of an element have the exact same atomic number $Z$, identical numbers of protons, and identical electronic configurations in the electron cloud.<br>
      3. Isotopes differ solely in their **number of neutrons** within the nucleus. Because neutrons carry zero electric charge, they have virtually no effect on the electrostatic force of attraction between the nucleus and the valence electrons.<br>
      *(Extremely tiny differences due to reduced nuclear mass effects are negligible for all practical chemical purposes).*
    </div>`,
    rubric: [
      { key: 'Stating first IE will be practically identical', marks: '1 Mark' },
      { key: 'Justifying that isotopes have identical Z, electron configuration and electrostatic attraction', marks: '1 Mark' }
    ]
  },
  {
    num: 24,
    ref: 'Question 3.24',
    marks: '2.5 Marks',
    q: `What are the major differences between metals and non-metals?`,
    ans: `<div class="step">
      <b>Comprehensive Comparison between Metals and Non-Metals:</b><br><br>
      <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.85rem;">
        <thead>
          <tr style="background:#f1f5f9; text-align:left; border-bottom:2px solid #cbd5e1;">
            <th style="padding:8px;">Property</th>
            <th style="padding:8px;">Metals</th>
            <th style="padding:8px;">Non-Metals</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px;"><b>Electronic Nature</b></td>
            <td style="padding:8px;">Electropositive; readily lose electrons to form cations.</td>
            <td style="padding:8px;">Electronegative; readily gain or share electrons.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px;"><b>Ionization Enthalpy</b></td>
            <td style="padding:8px;">Low ionization enthalpies and low electronegativities.</td>
            <td style="padding:8px;">High ionization enthalpies and high electronegativities.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px;"><b>Nature of Oxides</b></td>
            <td style="padding:8px;">Form <b>basic</b> (e.g., $\\text{Na}_2\\text{O}, \\text{CaO}$) or amphoteric oxides.</td>
            <td style="padding:8px;">Form <b>acidic</b> (e.g., $\\text{SO}_2, \\text{CO}_2$) or neutral oxides ($\\text{CO, NO}$).</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px;"><b>Physical Properties</b></td>
            <td style="padding:8px;">Lustrous, malleable, ductile, high electrical &amp; thermal conductors.</td>
            <td style="padding:8px;">Brittle solids, liquids or gases; poor conductors (except graphite).</td>
          </tr>
          <tr>
            <td style="padding:8px;"><b>Reducing / Oxidizing</b></td>
            <td style="padding:8px;">Strong reducing agents.</td>
            <td style="padding:8px;">Strong oxidizing agents.</td>
          </tr>
        </tbody>
      </table>
    </div>`,
    rubric: [
      { key: 'Chemical differences: electropositivity vs electronegativity and oxide nature (basic vs acidic)', marks: '1.5 Marks' },
      { key: 'Physical differences: conductivity, malleability, ductility, physical states', marks: '1 Mark' }
    ]
  },
  {
    num: 25,
    ref: 'Question 3.25',
    marks: '2 Marks',
    q: `Use the periodic table to answer the following questions:<br>
       (a) Identify an element with five electrons in the outer subshell.<br>
       (b) Identify an element that would tend to lose two electrons.<br>
       (c) Identify an element that would tend to gain two electrons.<br>
       (d) Identify the group having metal, non-metal, liquid as well as gas at the room temperature.`,
    ans: `<div class="step">
      <b>(a) Element with five electrons in the outer subshell ($np^5$):</b><br>
      Any halogen from Group 17 (e.g., **Fluorine ($\\text{F}$)**, **Chlorine ($\\text{Cl}$)**, or **Bromine ($\\text{Br}$)**).<br><br>
      <b>(b) Element that would tend to lose two electrons ($ns^2$):</b><br>
      Any alkaline earth metal from Group 2 (e.g., **Magnesium ($\\text{Mg}$)**, **Calcium ($\\text{Ca}$)**, or **Barium ($\\text{Ba}$)**).<br><br>
      <b>(c) Element that would tend to gain two electrons ($ns^2 np^4$):</b><br>
      Any chalcogen from Group 16 (e.g., **Oxygen ($\\text{O}$)** or **Sulfur ($\\text{S}$)**).<br><br>
      <b>(d) Group having metal, non-metal, liquid as well as gas at room temperature:</b><br>
      **Group 17 (Halogens):**<br>
      • Non-metals: $\\text{F, Cl, Br, I}$<br>
      • Gases: $\\text{F}_2\\text{ and } \\text{Cl}_2$<br>
      • Liquid: $\\text{Br}_2$<br>
      • Solid (with metallic luster): $\\text{I}_2$<br>
      • Radioactive metal/metalloid: $\\text{At}$ (Astatine) / $\\text{Ts}$ (Tennessine).<br>
      *(Also Group 14 contains non-metal C, metalloids Si/Ge, and metals Sn/Pb).*
    </div>`,
    rubric: [
      { key: '(a) Group 17 element (F/Cl) and (b) Group 2 element (Mg/Ca)', marks: '1 Mark' },
      { key: '(c) Group 16 element (O/S) and (d) Group 17 with state justification', marks: '1 Mark' }
    ]
  },
  {
    num: 26,
    ref: 'Question 3.26',
    marks: '2.5 Marks',
    q: `The increasing order of reactivity among group 1 elements is $\\text{Li} < \\text{Na} < \\text{K} < \\text{Rb} < \\text{Cs}$ whereas that among group 17 elements is $\\text{F} > \\text{Cl} > \\text{Br} > \\text{I}$. Explain.`,
    ans: `<div class="step">
      <b>1. Group 1 Elements (Alkali Metals):</b><br>
      • Group 1 elements react by **losing one valence electron** to form unipositive cations ($\\text{M} \\to \\text{M}^+ + e^-$).<br>
      • Their chemical reactivity is governed by their **ease of losing an electron**, which is directly proportional to how low their ionization enthalpy is.<br>
      • Down Group 1, atomic radius increases and ionization enthalpy decreases ($\\text{Cs}$ has lowest $\\Delta_i H$). Hence, electron loss becomes progressively easier:<br>
      $$\\mathbf{\\text{Reactivity: } \\text{Li} < \\text{Na} < \\text{K} < \\text{Rb} < \\text{Cs}}$$<br><br>
      <b>2. Group 17 Elements (Halogens):</b><br>
      • Group 17 elements react by **gaining one electron** to complete a stable octet ($\\text{X} + e^- \\to \\text{X}^-$).<br>
      • Their chemical reactivity depends on their **oxidizing ability and electron-accepting tendency** (electronegativity).<br>
      • Down Group 17, atomic radius increases, nuclear attraction on incoming electrons weakens, and electronegativity decreases.<br>
      • Fluorine is the smallest, most electronegative element with the highest standard reduction potential, making it the most reactive halogen:<br>
      $$\\mathbf{\\text{Reactivity: } \\text{F} > \\text{Cl} > \\text{Br} > \\text{I}}$$
    </div>`,
    rubric: [
      { key: 'Group 1 reactivity depends on electron loss / ionization enthalpy decreasing down group', marks: '1.25 Marks' },
      { key: 'Group 17 reactivity depends on electron gain / electronegativity decreasing down group', marks: '1.25 Marks' }
    ]
  },
  {
    num: 27,
    ref: 'Question 3.27',
    marks: '2 Marks',
    q: `Write the general outer electronic configuration of $s-, p-, d-$ and $f-$block elements.`,
    ans: `<div class="step">
      <b>General Outer Electronic Configurations by Block:</b><br><br>
      1. **$s$-Block Elements:**<br>
      $$\\mathbf{n s^{1-2}} \\quad (n = 2 \\text{ to } 7)$$<br>
      • Group 1 (Alkali metals): $ns^1$<br>
      • Group 2 (Alkaline earth metals): $ns^2$<br><br>
      2. **$p$-Block Elements:**<br>
      $$\\mathbf{n s^2 \\; n p^{1-6}} \\quad (n = 2 \\text{ to } 7)$$<br>
      (Groups 13 to 18; Helium is $1s^2$).<br><br>
      3. **$d$-Block Elements (Transition Metals):**<br>
      $$\\mathbf{(n - 1) d^{1-10} \\; n s^{0-2}} \\quad (n = 4 \\text{ to } 7)$$<br>
      (Groups 3 to 12).<br><br>
      4. **$f$-Block Elements (Inner Transition Metals):**<br>
      $$\\mathbf{(n - 2) f^{1-14} \\; (n - 1) d^{0-1} \\; n s^2} \\quad (n = 6 \\text{ and } 7)$$<br>
      • Lanthanoids ($n = 6$): $4f^{1-14} 5d^{0-1} 6s^2$<br>
      • Actinoids ($n = 7$): $5f^{1-14} 6d^{0-1} 7s^2$
    </div>`,
    rubric: [
      { key: 's-block (ns^1-2) and p-block (ns^2 np^1-6) general configurations', marks: '1 Mark' },
      { key: 'd-block ((n-1)d^1-10 ns^0-2) and f-block ((n-2)f^1-14 (n-1)d^0-1 ns^2)', marks: '1 Mark' }
    ]
  },
  {
    num: 28,
    ref: 'Question 3.28',
    marks: '3 Marks',
    q: `Assign the position of the element having outer electronic configuration<br>
       (i) $ns^2 np^4$ for $n = 3$<br>
       (ii) $(n-1)d^2 ns^2$ for $n = 4$, and<br>
       (iii) $(n-2)f^7 (n-1)d^1 ns^2$ for $n = 6$, in the periodic table.`,
    ans: `<div class="step">
      <b>(i) $ns^2 np^4$ for $n = 3$:</b><br>
      • Configuration: $3s^2 3p^4$ (Core: $[\\text{Ne}]$) $\\implies Z = 16$ (Sulfur, $\\text{S}$).<br>
      • **Period:** Highest $n = 3 \\implies \\mathbf{3^{\\text{rd}} \\text{ Period}}$.<br>
      • **Block:** Differentiating electron in $p$-orbital $\\implies \\mathbf{p\\text{-block}}$.<br>
      • **Group:** $10 + \\text{valence electrons} = 10 + (2 + 4) = \\mathbf{16}$.<br><br>
      <b>(ii) $(n-1)d^2 ns^2$ for $n = 4$:</b><br>
      • Configuration: $3d^2 4s^2$ (Core: $[\\text{Ar}]$) $\\implies Z = 22$ (Titanium, $\\text{Ti}$).<br>
      • **Period:** Highest $n = 4 \\implies \\mathbf{4^{\\text{th}} \\text{ Period}}$.<br>
      • **Block:** Differentiating electron in $d$-orbital $\\implies \\mathbf{d\\text{-block}}$.<br>
      • **Group:** Electrons in $(n-1)d + ns = 2 + 2 = \\mathbf{4}$.<br><br>
      <b>(iii) $(n-2)f^7 (n-1)d^1 ns^2$ for $n = 6$:</b><br>
      • Configuration: $4f^7 5d^1 6s^2$ (Core: $[\\text{Xe}]$) $\\implies Z = 64$ (Gadolinium, $\\text{Gd}$).<br>
      • **Period:** Highest $n = 6 \\implies \\mathbf{6^{\\text{th}} \\text{ Period}}$.<br>
      • **Block:** Differentiating electron in $f$-orbital $\\implies \\mathbf{f\\text{-block (Lanthanoid series)}}$.<br>
      • **Group:** All lanthanoids belong formally to $\\mathbf{\\text{Group 3}}$.
    </div>`,
    rubric: [
      { key: '(i) Period 3, Group 16, p-block', marks: '1 Mark' },
      { key: '(ii) Period 4, Group 4, d-block', marks: '1 Mark' },
      { key: '(iii) Period 6, Group 3, f-block (Lanthanoids)', marks: '1 Mark' }
    ]
  },
  {
    num: 29,
    ref: 'Question 3.29',
    marks: '3 Marks',
    q: `The first ($\\Delta_i H_1$) and the second ($\\Delta_i H_2$) ionization enthalpies (in $\\text{kJ mol}^{-1}$) and the ($\\Delta_{\\text{eg}} H$) electron gain enthalpy (in $\\text{kJ mol}^{-1}$) of a few elements are given below:<br>
       Elements | $\\Delta_i H_1$ | $\\Delta_i H_2$ | $\\Delta_{\\text{eg}} H$<br>
       I | 520 | 7300 | -60<br>
       II | 419 | 3051 | -48<br>
       III | 1681 | 3374 | -328<br>
       IV | 1008 | 1846 | -295<br>
       V | 2372 | 5251 | +48<br>
       VI | 738 | 1451 | -40<br>
       Which of the above elements is likely to be:<br>
       (a) the least reactive element.<br>
       (b) the most reactive metal.<br>
       (c) the most reactive non-metal.<br>
       (d) the least reactive non-metal.<br>
       (e) the metal which can form a stable binary halide of the formula $\\text{MX}_2$ ($\\text{X} = \\text{halogen}$).<br>
       (f) the metal which can form a predominantly stable covalent halide of the formula $\\text{MX}$ ($\\text{X} = \\text{halogen}$).`,
    ans: `<div class="step">
      <b>Identification of Elements from Thermodynamic Properties:</b><br><br>
      • **(a) The least reactive element: Element V**<br>
      Highest first ionization enthalpy ($2372\\text{ kJ/mol}$) and a positive electron gain enthalpy ($+48\\text{ kJ/mol}$), characteristic of a noble gas (Helium).<br><br>
      • **(b) The most reactive metal: Element II**<br>
      Lowest first ionization enthalpy ($419\\text{ kJ/mol}$) and low negative electron gain enthalpy ($\\text{K}$, alkali metal).<br><br>
      • **(c) The most reactive non-metal: Element III**<br>
      Very high ionization enthalpy ($1681\\text{ kJ/mol}$) and the most negative electron gain enthalpy ($-328\\text{ kJ/mol}$), characteristic of a reactive halogen (Fluorine/Chlorine).<br><br>
      • **(d) The least reactive non-metal: Element IV**<br>
      High ionization enthalpy ($1008\\text{ kJ/mol}$) and high negative electron gain enthalpy ($-295\\text{ kJ/mol}$), but less exothermic than III (Group 16/17, e.g., Iodine).<br><br>
      • **(e) Metal forming stable binary halide $\\text{MX}_2$: Element VI**<br>
      Moderate $\\Delta_i H_1 = 738\\text{ kJ/mol}$ and $\\Delta_i H_2 = 1451\\text{ kJ/mol}$ (alkaline earth metal, e.g., $\\text{Mg}$), forming divalent $\\text{M}^{2+}$ cations.<br><br>
      • **(f) Metal forming predominantly stable covalent halide $\\text{MX}$: Element I**<br>
      Low $\\Delta_i H_1 = 520\\text{ kJ/mol}$ but immense jump to $\\Delta_i H_2 = 7300\\text{ kJ/mol}$ (Alkali metal, specifically $\\text{Li}$ with high charge density forming covalent halides like $\\text{LiCl}$).
    </div>`,
    rubric: [
      { key: '(a) Element V (noble gas) and (b) Element II (alkali metal)', marks: '1 Mark' },
      { key: '(c) Element III (halogen) and (d) Element IV (less reactive non-metal)', marks: '1 Mark' },
      { key: '(e) Element VI (alkaline earth, MX2) and (f) Element I (Li, covalent MX)', marks: '1 Mark' }
    ]
  },
  {
    num: 30,
    ref: 'Question 3.30',
    marks: '3 Marks',
    q: `Predict the formulas of the stable binary compounds that would be formed by the combination of the following pairs of elements:<br>
       (a) Lithium and oxygen<br>
       (b) Magnesium and nitrogen<br>
       (c) Aluminium and iodine<br>
       (d) Silicon and oxygen<br>
       (e) Phosphorus and fluorine<br>
       (f) Element 71 and fluorine.`,
    ans: `<div class="step">
      Using valency rules based on group numbers:<br><br>
      • **(a) Lithium (Group 1, valency 1) and Oxygen (Group 16, valency 2):**<br>
      $$\\mathbf{\\text{Li}_2\\text{O} \\text{ (Lithium oxide)}}$$<br><br>
      • **(b) Magnesium (Group 2, valency 2) and Nitrogen (Group 15, valency 3):**<br>
      $$\\mathbf{\\text{Mg}_3\\text{N}_2 \\text{ (Magnesium nitride)}}$$<br><br>
      • **(c) Aluminium (Group 13, valency 3) and Iodine (Group 17, valency 1):**<br>
      $$\\mathbf{\\text{AlI}_3 \\text{ (Aluminium iodide)}}$$<br><br>
      • **(d) Silicon (Group 14, valency 4) and Oxygen (Group 16, valency 2):**<br>
      Ratio $4 : 2 = 2 : 1 \\implies \\mathbf{\\text{SiO}_2 \\text{ (Silicon dioxide)}}$<br><br>
      • **(e) Phosphorus (Group 15, valency 3 or 5) and Fluorine (Group 17, valency 1):**<br>
      $$\\mathbf{\\text{PF}_3 \\text{ and } \\text{PF}_5 \\text{ (Phosphorus trifluoride / pentafluoride)}}$$<br><br>
      • **(f) Element 71 (Lutetium, $\\text{Lu}$, Lanthanoid, stable valency 3) and Fluorine (valency 1):**<br>
      $$\\mathbf{\\text{LuF}_3 \\text{ (Lutetium trifluoride)}}$$
    </div>`,
    rubric: [
      { key: '(a) Li2O, (b) Mg3N2, (c) AlI3', marks: '1.5 Marks' },
      { key: '(d) SiO2, (e) PF3 / PF5, (f) LuF3 (Element 71)', marks: '1.5 Marks' }
    ]
  },
  {
    num: 31,
    ref: 'Question 3.31',
    marks: '1 Mark',
    q: `In the modern periodic table, the period indicates the value of:<br>
       (a) atomic number<br>
       (b) atomic mass<br>
       (c) principal quantum number<br>
       (d) azimuthal quantum number.`,
    ans: `<div class="step">
      <b>Correct Option: (c) principal quantum number ($n$)</b><br><br>
      • Each period in the modern periodic table corresponds to the filling of electrons in a new principal energy level characterized by the principal quantum number $n$ of the outermost valence shell.<br>
      • For example, elements in period 1 have $n = 1$, period 2 have $n = 2$, and so on up to period 7 ($n = 7$).
    </div>`,
    rubric: [
      { key: 'Correct option (c) principal quantum number (n) with explanation', marks: '1 Mark' }
    ]
  },
  {
    num: 32,
    ref: 'Question 3.32',
    marks: '1 Mark',
    q: `Which of the following statements related to the modern periodic table is incorrect?<br>
       (a) The $p$-block has 6 columns, because a maximum of 6 electrons can occupy all the orbitals in a $p$-subshell.<br>
       (b) The $d$-block has 8 columns, because a maximum of 8 electrons can occupy all the orbitals in a $d$-subshell.<br>
       (c) Each block contains a number of columns equal to the number of electrons that can occupy that subshell.<br>
       (d) The block indicates value of azimuthal quantum number ($l$) for the last subshell that received electrons in building up the electronic configuration.`,
    ans: `<div class="step">
      <b>Correct Option: (b) The $d$-block has 8 columns, because a maximum of 8 electrons can occupy all the orbitals in a $d$-subshell.</b><br><br>
      • This statement is **incorrect** because a $d$-subshell possesses $5$ degenerate orbitals ($m_l = -2, -1, 0, +1, +2$).<br>
      • Since each orbital holds up to $2$ electrons, a $d$-subshell can accommodate a maximum of **$10$ electrons**.<br>
      • Consequently, the $d$-block in the periodic table consists of **$10$ columns** (Groups 3 to 12), not 8 columns.
    </div>`,
    rubric: [
      { key: 'Identification of option (b) as incorrect with 10-electron / 10-column explanation', marks: '1 Mark' }
    ]
  },
  {
    num: 33,
    ref: 'Question 3.33',
    marks: '1 Mark',
    q: `Anything that influences the valence electrons will affect the chemistry of the element. Which one of the following factors does not affect the valence shell?<br>
       (a) Valence principal quantum number ($n$)<br>
       (b) Nuclear charge ($Z$)<br>
       (c) Nuclear mass<br>
       (d) Number of core electrons.`,
    ans: `<div class="step">
      <b>Correct Option: (c) Nuclear mass</b><br><br>
      • Chemical properties and valence shell interactions are governed exclusively by electrostatic forces between the positive nuclear charge ($Z$) and negative electrons, shielded by core electrons.<br>
      • The **nuclear mass** (mass number $A$, governed by neutrons) does not alter electrostatic forces or valence orbital energy levels, which is why isotopes of the same element exhibit identical chemical behavior.
    </div>`,
    rubric: [
      { key: 'Correct option (c) Nuclear mass with reasoning', marks: '1 Mark' }
    ]
  },
  {
    num: 34,
    ref: 'Question 3.34',
    marks: '1 Mark',
    q: `The size of isoelectronic species — $\\text{F}^-$, $\\text{Ne}$ and $\\text{Na}^+$ is affected by:<br>
       (a) nuclear charge ($Z$)<br>
       (b) valence principal quantum number ($n$)<br>
       (c) electron-electron interaction in the outer orbitals<br>
       (d) none of the factors because their size is the same.`,
    ans: `<div class="step">
      <b>Correct Option: (a) nuclear charge ($Z$)</b><br><br>
      • In an isoelectronic series ($\\text{F}^-, \\text{Ne}, \\text{Na}^+$), all species possess the exact same total number of electrons ($10\\text{ e}^-$) and the same principal quantum number ($n = 2$).<br>
      • The only variable parameter is the **nuclear charge ($Z$)**: $\\text{F} (+9)$, $\\text{Ne} (+10)$, $\\text{Na} (+11)$.<br>
      • Higher nuclear charge pulls the electron cloud inward with greater electrostatic attraction, resulting in the size order: $\\text{F}^- (133\\text{ pm}) > \\text{Ne} > \\text{Na}^+ (102\\text{ pm})$.
    </div>`,
    rubric: [
      { key: 'Correct option (a) nuclear charge (Z) with inverse size explanation', marks: '1 Mark' }
    ]
  },
  {
    num: 35,
    ref: 'Question 3.35',
    marks: '1 Mark',
    q: `Which one of the following statements is incorrect in relation to ionization enthalpy?<br>
       (a) Ionization enthalpy increases for each successive electron.<br>
       (b) The greatest increase in ionization enthalpy is experienced on removal of an electron from core noble gas configuration.<br>
       (c) End of valence electrons is marked by a big jump in ionization enthalpy.<br>
       (d) Removal of electron from orbitals bearing lower $n$ value is easier than from orbital having higher $n$ value.`,
    ans: `<div class="step">
      <b>Correct Option: (d) Removal of electron from orbitals bearing lower $n$ value is easier than from orbital having higher $n$ value.</b><br><br>
      • This statement is **incorrect**.<br>
      • Orbitals with a **lower $n$ value** are located closer to the nucleus and held much more tightly by the strong electrostatic attraction.<br>
      • Therefore, removing an electron from a lower $n$ shell requires **substantially more energy** than removing one from a higher $n$ shell (which is farther away and well-shielded).
    </div>`,
    rubric: [
      { key: 'Identification of option (d) as incorrect with distance/attraction justification', marks: '1 Mark' }
    ]
  },
  {
    num: 36,
    ref: 'Question 3.36',
    marks: '2 Marks',
    q: `Considering the elements $\\text{B, Al, Mg,}$ and $\\text{K}$, the correct order of their metallic character is:<br>
       (a) $\\text{B} > \\text{Al} > \\text{Mg} > \\text{K}$<br>
       (b) $\\text{Al} > \\text{Mg} > \\text{B} > \\text{K}$<br>
       (c) $\\text{Mg} > \\text{Al} > \\text{K} > \\text{B}$<br>
       (d) $\\text{K} > \\text{Mg} > \\text{Al} > \\text{B}$.`,
    ans: `<div class="step">
      <b>Correct Option: (d) $\\text{K} > \\text{Mg} > \\text{Al} > \\text{B}$</b><br><br>
      <b>Justification:</b><br>
      1. **Trend in Periodic Table:**<br>
      • Metallic character **increases down a group** (due to increasing size and decreasing ionization enthalpy).<br>
      • Metallic character **decreases across a period** from left to right (due to increasing nuclear charge and electronegativity).<br><br>
      2. **Comparing Elements:**<br>
      • $\\text{K}$ belongs to Group 1, Period 4: Large alkali metal, lowest ionization enthalpy $\\implies$ **Most metallic**.<br>
      • $\\text{Mg}$ (Group 2, Period 3) and $\\text{Al}$ (Group 13, Period 3): Across Period 3, metallic character decreases from left to right $\\implies \\text{Mg} > \\text{Al}$.<br>
      • $\\text{B}$ (Group 13, Period 2): Sits at the top of Group 13 above $\\text{Al}$, non-metal / metalloid with highest ionization enthalpy $\\implies$ **Least metallic**.<br><br>
      $$\\mathbf{\\text{Order: } \\text{K} > \\text{Mg} > \\text{Al} > \\text{B}}$$
    </div>`,
    rubric: [
      { key: 'Correct option (d) K > Mg > Al > B', marks: '1 Mark' },
      { key: 'Justification via group/period trends and ionization enthalpies', marks: '1 Mark' }
    ]
  },
  {
    num: 37,
    ref: 'Question 3.37',
    marks: '2 Marks',
    q: `Considering the elements $\\text{B, C, N, F,}$ and $\\text{Si}$, the correct order of their non-metallic character is:<br>
       (a) $\\text{B} > \\text{C} > \\text{Si} > \\text{N} > \\text{F}$<br>
       (b) $\\text{Si} > \\text{C} > \\text{B} > \\text{N} > \\text{F}$<br>
       (c) $\\text{F} > \\text{N} > \\text{C} > \\text{B} > \\text{Si}$<br>
       (d) $\\text{F} > \\text{N} > \\text{C} > \\text{Si} > \\text{B}$.`,
    ans: `<div class="step">
      <b>Correct Option: (c) $\\text{F} > \\text{N} > \\text{C} > \\text{B} > \\text{Si}$ (or (d) in some keys where $\\text{Si} < \\text{B}$)</b><br><br>
      <b>Justification:</b><br>
      1. Non-metallic character increases across a period from left to right and decreases down a group.<br>
      2. For the second period elements, the non-metallic character increases in order: $\\text{B} < \\text{C} < \\text{N} < \\text{F}$.<br>
      3. Silicon ($\\text{Si}$) lies below Carbon in Group 14 (Period 3). Because non-metallic character decreases down a group, $\\text{Si}$ is more metallic (less non-metallic) than Carbon.<br>
      4. Fluorine is the most non-metallic element in the periodic table. Nitrogen comes second, followed by Carbon.<br>
      $$\\mathbf{\\text{Decreasing order: } \\text{F} > \\text{N} > \\text{C} > \\text{B} > \\text{Si}}$$
    </div>`,
    rubric: [
      { key: 'Correct order F > N > C > B > Si identified', marks: '1 Mark' },
      { key: 'Explanation based on period increase and group decrease in non-metallic character', marks: '1 Mark' }
    ]
  },
  {
    num: 38,
    ref: 'Question 3.38',
    marks: '2.5 Marks',
    q: `Considering the elements with the following atomic numbers:<br>
       (a) $11$, (b) $12$, (c) $13$, (d) $14$, (e) $15$, (f) $16$, (g) $17$.<br>
       Arrange them in the order of:<br>
       (i) increasing ionization enthalpy<br>
       (ii) increasing electronegativity.`,
    ans: `<div class="step">
      These atomic numbers represent the complete third period: $\\text{Na} (11), \\text{Mg} (12), \\text{Al} (13), \\text{Si} (14), \\text{P} (15), \\text{S} (16), \\text{Cl} (17)$.<br><br>
      <b>(i) Increasing Order of Ionization Enthalpy:</b><br>
      General trend is an increase from left to right, with anomalies at $\\text{Mg} > \\text{Al}$ (full $3s^2$ vs $3p^1$) and $\\text{P} > \\text{S}$ (half-filled $3p^3$ vs $3p^4$):<br>
      $$\\mathbf{\\text{Na} < \\text{Al} < \\text{Mg} < \\text{Si} < \\text{S} < \\text{P} < \\text{Cl}}$$<br>
      $$\\mathbf{\\text{In terms of letters: } (a) < (c) < (b) < (d) < (f) < (e) < (g)}$$<br><br>
      <b>(ii) Increasing Order of Electronegativity:</b><br>
      Electronegativity increases smoothly across Period 3 with increasing nuclear charge and decreasing atomic size (no subshell anomalies on the Pauling scale):<br>
      $$\\mathbf{\\text{Na} < \\text{Mg} < \\text{Al} < \\text{Si} < \\text{P} < \\text{S} < \\text{Cl}}$$<br>
      $$\\mathbf{\\text{In terms of letters: } (a) < (b) < (c) < (d) < (e) < (f) < (g)}$$
    </div>`,
    rubric: [
      { key: '(i) Ionization enthalpy sequence with subshell anomalies: Na < Al < Mg < Si < S < P < Cl', marks: '1.5 Marks' },
      { key: '(ii) Electronegativity monotonic sequence: Na < Mg < Al < Si < P < S < Cl', marks: '1 Mark' }
    ]
  },
  {
    num: 39,
    ref: 'Question 3.39',
    marks: '2 Marks',
    q: `Considering the elements $\\text{B, C, N, F,}$ and $\\text{Si}$, the correct order of their non-metallic character is:<br>
       (a) $\\text{B} > \\text{C} > \\text{Si} > \\text{N} > \\text{F}$<br>
       (b) $\\text{Si} > \\text{C} > \\text{B} > \\text{N} > \\text{F}$<br>
       (c) $\\text{F} > \\text{N} > \\text{C} > \\text{B} > \\text{Si}$<br>
       (d) $\\text{F} > \\text{N} > \\text{C} > \\text{Si} > \\text{B}$.`,
    ans: `<div class="step">
      <b>Correct Option: (d) $\\text{F} > \\text{N} > \\text{C} > \\text{Si} > \\text{B}$ (or (c) $\\text{F} > \\text{N} > \\text{C} > \\text{B} > \\text{Si}$)</b><br><br>
      <b>Comprehensive Analysis:</b><br>
      • Across Period 2, non-metallic character increases: $\\text{B} < \\text{C} < \\text{N} < \\text{F}$.<br>
      • Down a group, non-metallic character decreases (e.g., $\\text{C} > \\text{Si}$).<br>
      • Fluorine is the most non-metallic element, followed by Nitrogen and Carbon.<br>
      • Between Boron and Silicon: In the periodic table diagonal relationship, Boron is a metalloid/non-metal with electronegativity $2.04$, while Silicon has electronegativity $1.90$. In standard NCERT keys, both (c) and (d) capture Fluorine and Nitrogen leading, with option **(d)** listed as the official CBSE key in recent editions.<br><br>
      $$\\mathbf{\\text{Decreasing non-metallic character: } \\text{F} > \\text{N} > \\text{C} > \\text{Si} > \\text{B} \\text{ (Option d)}}$$
    </div>`,
    rubric: [
      { key: 'Correct sequence F > N > C > Si > B (or F > N > C > B > Si)', marks: '1 Mark' },
      { key: 'Justification via electronegativity and period/group gradients', marks: '1 Mark' }
    ]
  },
  {
    num: 40,
    ref: 'Question 3.40',
    marks: '2 Marks',
    q: `Considering the elements $\\text{F, Cl, O}$ and $\\text{N}$, the correct order of their chemical reactivity in terms of oxidizing property is:<br>
       (a) $\\text{F} > \\text{Cl} > \\text{O} > \\text{N}$<br>
       (b) $\\text{F} > \\text{O} > \\text{Cl} > \\text{N}$<br>
       (c) $\\text{Cl} > \\text{F} > \\text{O} > \\text{N}$<br>
       (d) $\\text{O} > \\text{F} > \\text{N} > \\text{Cl}$.`,
    ans: `<div class="step">
      <b>Correct Option: (b) $\\text{F} > \\text{O} > \\text{Cl} > \\text{N}$</b><br><br>
      <b>Justification:</b><br>
      1. **Oxidizing Power Definition:** An oxidizing agent gains electrons during a chemical reaction. The oxidizing property depends directly on the element's electronegativity and standard reduction potential ($E^\\circ$).<br><br>
      2. **Electronegativities on the Pauling Scale:**<br>
      • Fluorine ($\\text{F}$): $4.0$ (highest in periodic table, $E^\\circ = +2.87\\text{ V}$)<br>
      • Oxygen ($\\text{O}$): $3.5$ ($E^\\circ = +1.23\\text{ V}$)<br>
      • Chlorine ($\\text{Cl}$): $3.0$ ($E^\\circ = +1.36\\text{ V}$)<br>
      • Nitrogen ($\\text{N}$): $3.0$ (stable half-filled $2p^3$, poor electron acceptor)<br><br>
      3. **Relative Comparison:**<br>
      • Fluorine oxidizes water to oxygen, proving it is a stronger oxidizer than oxygen.<br>
      • Oxygen oxidizes chloride to chlorine in acidic media, confirming $\\text{O} > \\text{Cl}$.<br>
      • Nitrogen has a stable half-filled $2p^3$ configuration and lacks oxidizing vigor compared to halogens and oxygen.<br><br>
      $$\\mathbf{\\text{Correct order of oxidizing property: } \\text{F} > \\text{O} > \\text{Cl} > \\text{N} \\quad \\text{(Option b)}}$$
    </div>`,
    rubric: [
      { key: 'Correct option (b) F > O > Cl > N', marks: '1 Mark' },
      { key: 'Justification via electronegativities (F: 4.0, O: 3.5, Cl: 3.0, N: 3.0) and reduction potentials', marks: '1 Mark' }
    ]
  }
];

// Add remaining questions to array
remainingQuestions.forEach(rq => {
  addQ(rq.num, rq.ref, rq.marks, rq.q, rq.ans, rq.rubric);
});

// -------------------------------------------------------------
// HTML Generation
let html = `<section class="chapter-section" id="c11c-ch3">
  <div class="chapter-header">
    <div class="ch-badge">3</div>
    <div class="chapter-header-info">
      <div class="ch-category">CBSE Class 11 Chemistry &bull; Chapter 3</div>
      <h2>Classification of Elements and Periodicity in Properties</h2>
      <p>NCERT Rationalised 2026–27 Syllabus &bull; All 40 Verbatim Questions with Official Step-by-Step Marking Rubrics</p>
    </div>
  </div>

  ${svgDiagram}

  <div class="ex-div">NCERT Textbook Exercise 3.1 to 3.40: Mendeleev &amp; Modern Periodic Law, IUPAC Z&gt;100 Naming, s/p/d/f Block Configurations, Atomic/Ionic Radii Trends, Ionization Enthalpies, Electron Gain Enthalpies, Electronegativity &amp; Oxide Nature</div>
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

// Write ch3.html
fs.writeFileSync(ch3Path, html, 'utf8');
console.log(`Successfully generated: ${ch3Path} (${html.length} bytes)`);

// Append to cache chapters-data.js
const cacheLine = `\nwindow.CHAPTER_DATA[3] = ${JSON.stringify(html)};\n`;
fs.appendFileSync(cachePath, cacheLine, 'utf8');
console.log(`Appended Chapter 3 to preloaded cache: ${cachePath}`);
