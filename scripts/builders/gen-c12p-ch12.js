// scripts/builders/gen-c12p-ch12.js
// Class 12 Physics - Chapter 12: Atoms (17 Questions)
const { createQCard, saveChapter } = require('./c12p-helper');

const chNum = 12;
const chTitle = "Atoms";
const nextChTitle = "Nuclei";

const svgDiagram = `
  <div style="display:flex; justify-content:center; margin:24px 0;">
    <svg viewBox="0 0 760 220" style="width:100%; max-width:760px; height:auto; background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/>
        </marker>
        <marker id="arrowRed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/>
        </marker>
      </defs>
      <!-- Title -->
      <text x="380" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e293b">Bohr Atom Model & Hydrogen Spectral Transitions ($E_n = -\\frac{13.6}{n^2} \\text{ eV}$)</text>
      
      <!-- Nucleus -->
      <circle cx="160" cy="120" r="12" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
      <text x="160" y="125" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">+Ze</text>

      <!-- Stationary orbits n=1, 2, 3 -->
      <circle cx="160" cy="120" r="35" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="160" y="78" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#64748b">n = 1 (-13.6 eV)</text>

      <circle cx="160" cy="120" r="65" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="160" y="48" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#64748b">n = 2 (-3.4 eV)</text>

      <circle cx="160" cy="120" r="95" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="160" y="18" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#64748b">n = 3 (-1.51 eV)</text>

      <!-- Transition photon emission -->
      <line x1="225" y1="120" x2="195" y2="120" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowRed)"/>
      <path d="M 210 120 Q 230 140, 245 125 T 275 130" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="260" y="150" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#d97706">Photon hν</text>

      <!-- Core Formulae -->
      <text x="360" y="55" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b">Bohr Postulates & Formulae:</text>
      <text x="360" y="80" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Quantization: $L = m v r = \\frac{n h}{2\\pi}, \\quad n = 1, 2, 3\\dots$</text>
      <text x="360" y="105" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Orbit Radius: $r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m Z e^2} = 0.529 \\frac{n^2}{Z} \\text{ \\AA}$</text>
      <text x="360" y="130" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Orbital Speed: $v_n = \\frac{Z e^2}{2 \\varepsilon_0 n h} = \\frac{c}{137} \\frac{Z}{n}$</text>
      <text x="360" y="155" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Total Energy: $E_n = -\\frac{13.6 Z^2}{n^2} \\text{ eV}, \\quad K = -E, \\ U = 2E$</text>
      <text x="360" y="180" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Rydberg Formula: $\\bar{\\nu} = \\frac{1}{\\lambda} = R Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$</text>
      <text x="360" y="205" font-family="system-ui, sans-serif" font-size="12" fill="#475569">• Closest Approach: $r_0 = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2 Z e^2}{K_\\alpha}$</text>
    </svg>
  </div>
`;

const questions = [
  // 12.1
  createQCard(
    "c12p-ch12-q1",
    "Q 12.1",
    "Exercise 12.1",
    `Choose the correct alternative from the clues given at the end of each statement:<br>
    <strong>(a)</strong> The size of the atom in Thomson’s model is .......... the atomic size in Rutherford’s model. (much greater than/no different from/much less than)<br>
    <strong>(b)</strong> In the ground state of .......... electrons are in stable equilibrium, while in .......... electrons always experience a net force. (Thomson’s model/ Rutherford’s model)<br>
    <strong>(c)</strong> A classical atom based on .......... is doomed to collapse. (Thomson’s model/ Rutherford’s model)<br>
    <strong>(d)</strong> An atom has a nearly continuous mass distribution in .......... but a highly non-uniform mass distribution in .......... (Thomson’s model/ Rutherford’s model)<br>
    <strong>(e)</strong> The positively charged part of the atom possesses most of the mass in .......... (Rutherford’s model/both the models).`,
    `<p><strong>Answers with Explanations:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>(a) no different from.</strong> Both atomic models specify an atomic radius of the order of $10^{-10} \\text{ m}$ ($1 \\text{ \\AA}$).</li>
      <li><strong>(b) Thomson’s model; Rutherford’s model.</strong> In Thomson's plum pudding model, stationary electrons are embedded in a positive sphere experiencing zero net force at equilibrium positions. In Rutherford's planetary model, orbiting electrons undergo centripetal acceleration ($a = v^2/r$) and experience continuous net inward electrostatic attraction.</li>
      <li><strong>(c) Rutherford’s model.</strong> According to classical electromagnetic theory, an accelerated revolving electron must continuously radiate electromagnetic energy, spiral inward, and collapse into the nucleus within $\\sim 10^{-8} \\text{ s}$.</li>
      <li><strong>(d) Thomson’s model; Rutherford’s model.</strong> Thomson's model assumed positive mass is distributed continuously over the entire $10^{-10} \\text{ m}$ sphere, whereas Rutherford's model localized $>99.9\\%$ of the atom's mass in a tiny central nucleus of radius $\\sim 10^{-15} \\text{ m}$.</li>
      <li><strong>(e) both the models.</strong> In both Thomson's and Rutherford's models, the electrons account for a negligible fraction of atomic mass, meaning the positively charged portion contains almost all the mass of the atom.</li>
    </ol>`,
    "3 Marks",
    [
      ["All five parts answered correctly with concise physical justification", "3 Marks"]
    ]
  ),

  // 12.2
  createQCard(
    "c12p-ch12-q2",
    "Q 12.2",
    "Exercise 12.2",
    `Suppose you are given a chance to repeat the alpha-particle scattering experiment using a thin sheet of solid hydrogen in place of the gold foil. (Hydrogen is a solid at temperatures below $14 \\text{ K}$). What results do you expect?`,
    `<p><strong>Analysis:</strong><br>
    • An alpha-particle is a helium nucleus ($^4_2\\text{He}$) with mass $m_\\alpha \\approx 4 \\text{ u}$.<br>
    • The target nucleus in solid hydrogen is a proton ($^1_1\\text{H}$) with mass $m_p \\approx 1 \\text{ u}$.<br>
    • Thus, the projectile is four times heavier than the target nucleus ($m_\\alpha = 4 m_p$).</p>

    <p><strong>Collision Mechanics:</strong><br>
    In a head-on elastic collision of a heavy particle of mass $m_1$ with a stationary light target $m_2$ ($m_1 > m_2$):
    \\[
    v_1' = \\left( \\frac{m_1 - m_2}{m_1 + m_2} \\right) v_1 = \\left( \\frac{4 - 1}{4 + 1} \\right) v_1 = +\\frac{3}{5} v_1
    \\]
    The alpha-particle continues to move forward in the forward direction ($v_1' > 0$). It can <strong>never rebound backwards</strong> (maximum scattering angle is $\\arcsin(m_p/m_\\alpha) = \\arcsin(0.25) \\approx 14.5^\\circ$).</p>

    <p><strong>Expected Results:</strong><br>
    1. No alpha-particles will be scattered at large angles or bounced back through $180^\\circ$.<br>
    2. Instead, the incident $\\alpha$-particles will knock the light hydrogen protons forcefully in the forward direction.<br>
    3. Hence, the experiment would fail to demonstrate the existence of a concentrated, massive atomic nucleus.</p>`,
    "3 Marks",
    [
      ["Mass comparison $m_\\alpha \\approx 4\\text{ u}$ vs $m_p \\approx 1\\text{ u}$", "1 Mark"],
      ["Elastic collision analysis showing $\\alpha$-particle cannot rebound ($v' > 0$)", "1 Mark"],
      ["Physical deduction: No large-angle scattering or discovery of nucleus", "1 Mark"]
    ]
  ),

  // 12.3
  createQCard(
    "c12p-ch12-q3",
    "Q 12.3",
    "Exercise 12.3",
    `What is the shortest wavelength present in the Paschen series of spectral lines?`,
    `<p><strong>Rydberg Formula for Hydrogen:</strong><br>
    \\[
    \\frac{1}{\\lambda} = R \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)
    \\]
    where $R = 1.097 \\times 10^7 \\text{ m}^{-1}$.</p>

    <p><strong>Condition for Shortest Wavelength (Series Limit):</strong><br>
    For the Paschen series, the lower energy level is $n_1 = 3$.<br>
    The shortest wavelength corresponds to maximum photon energy, which occurs for the transition from $n_2 = \\infty$ to $n_1 = 3$:
    \\[
    \\frac{1}{\\lambda_{min}} = R \\left( \\frac{1}{3^2} - \\frac{1}{\\infty^2} \\right) = \\frac{R}{9}
    \\]
    \\[
    \\lambda_{min} = \\frac{9}{R} = \\frac{9}{1.097 \\times 10^7 \\text{ m}^{-1}} \\approx 8.204 \\times 10^{-7} \\text{ m} = 820.4 \\text{ nm} = 8204 \\text{ \\AA}
    \\]
    <p><strong>Result:</strong> The shortest wavelength is <strong>$820.4 \\text{ nm}$</strong> (located in the infrared region).</p>`,
    "2 Marks",
    [
      ["Identification of Paschen series limit ($n_1 = 3, n_2 = \\infty$)", "1 Mark"],
      ["Calculation $\\lambda_{min} = 9/R = 820.4\\text{ nm}$", "1 Mark"]
    ]
  ),

  // 12.4
  createQCard(
    "c12p-ch12-q4",
    "Q 12.4",
    "Exercise 12.4",
    `A difference of $2.3 \\text{ eV}$ separates two energy levels in an atom. What is the frequency of radiation emitted when the atom makes a transition from the upper level to the lower level?`,
    `<p><strong>Given:</strong><br>
    Energy difference $\\Delta E = 2.3 \\text{ eV} = 2.3 \\times 1.602 \\times 10^{-19} \\text{ J} = 3.685 \\times 10^{-19} \\text{ J}$<br>
    Planck's constant $h = 6.626 \\times 10^{-34} \\text{ J s}$</p>

    <p><strong>Bohr Frequency Condition:</strong><br>
    \\[
    \\Delta E = h \\nu \\implies \\nu = \\frac{\\Delta E}{h}
    \\]
    \\[
    \\nu = \\frac{3.685 \\times 10^{-19} \\text{ J}}{6.626 \\times 10^{-34} \\text{ J s}} \\approx 5.56 \\times 10^{14} \\text{ Hz}
    \\]
    <p><strong>Result:</strong> The frequency of emitted radiation is <strong>$5.56 \\times 10^{14} \\text{ Hz}$</strong> (in the green-yellow visible region).</p>`,
    "2 Marks",
    [
      ["Bohr frequency condition $\\Delta E = h\\nu$", "1 Mark"],
      ["Calculation yielding $\\nu = 5.56 \\times 10^{14}\\text{ Hz}$", "1 Mark"]
    ]
  ),

  // 12.5
  createQCard(
    "c12p-ch12-q5",
    "Q 12.5",
    "Exercise 12.5",
    `The ground state energy of hydrogen atom is $-13.6 \\text{ eV}$. What are the kinetic and potential energies of the electron in this state?`,
    `<p><strong>Given:</strong><br>
    Total energy in ground state $E = -13.6 \\text{ eV}$</p>

    <p><strong>Virial Theorem / Energy Relationships in Bohr Atom:</strong><br>
    In any central Coulomb inverse-square electrostatic force field:
    \\[
    K = -E
    \\]
    \\[
    U = 2 E
    \\]
    \\[
    E = K + U = -E + 2E = E
    \\]</p>

    <p><strong>Calculations:</strong><br>
    1. <strong>Kinetic Energy:</strong>
    \\[
    K = -(-13.6 \\text{ eV}) = +13.6 \\text{ eV}
    \\]
    2. <strong>Potential Energy:</strong>
    \\[
    U = 2 \\times (-13.6 \\text{ eV}) = -27.2 \\text{ eV}
    \\]</p>`,
    "2 Marks",
    [
      ["Relation $K = -E$ and calculation $K = +13.6\\text{ eV}$", "1 Mark"],
      ["Relation $U = 2E$ and calculation $U = -27.2\\text{ eV}$", "1 Mark"]
    ]
  ),

  // 12.6
  createQCard(
    "c12p-ch12-q6",
    "Q 12.6",
    "Exercise 12.6",
    `A hydrogen atom initially in the ground level absorbs a photon, which excites it to the $n = 4$ level. Determine the wavelength and frequency of photon.`,
    `<p><strong>Given:</strong><br>
    Initial level $n_1 = 1$, Final level $n_2 = 4$<br>
    $E_n = -\\frac{13.6}{n^2} \\text{ eV}$</p>

    <p><strong>Step 1: Energy Levels:</strong><br>
    • $E_1 = -13.6 \\text{ eV}$<br>
    • $E_4 = -\\frac{13.6}{4^2} = -\\frac{13.6}{16} = -0.85 \\text{ eV}$<br>
    Energy of absorbed photon:
    \\[
    \\Delta E = E_4 - E_1 = -0.85 - (-13.6) = 12.75 \\text{ eV}
    \\]
    In Joules:
    \\[
    \\Delta E = 12.75 \\times 1.602 \\times 10^{-19} \\text{ J} \\approx 2.043 \\times 10^{-18} \\text{ J}
    \\]</p>

    <p><strong>Step 2: Frequency of Photon:</strong><br>
    \\[
    \\nu = \\frac{\\Delta E}{h} = \\frac{2.043 \\times 10^{-18} \\text{ J}}{6.626 \\times 10^{-34} \\text{ J s}} \\approx 3.083 \\times 10^{15} \\text{ Hz}
    \\]</p>

    <p><strong>Step 3: Wavelength of Photon:</strong><br>
    \\[
    \\lambda = \\frac{c}{\\nu} = \\frac{3.0 \\times 10^8 \\text{ m s}^{-1}}{3.083 \\times 10^{15} \\text{ s}^{-1}} \\approx 9.73 \\times 10^{-8} \\text{ m} = 97.3 \\text{ nm} = 973 \\text{ \\AA}
    \\]
    (Belongs to the Lyman series in the ultraviolet region).</p>`,
    "3 Marks",
    [
      ["Calculation of excitation energy $\\Delta E = 12.75\\text{ eV}$", "1 Mark"],
      ["Calculation of frequency $\\nu = 3.08 \\times 10^{15}\\text{ Hz}$", "1 Mark"],
      ["Calculation of wavelength $\\lambda = 97.3\\text{ nm}$", "1 Mark"]
    ]
  ),

  // 12.7
  createQCard(
    "c12p-ch12-q7",
    "Q 12.7",
    "Exercise 12.7",
    `<strong>(a)</strong> Using the Bohr’s model calculate the speed of the electron in a hydrogen atom in the $n = 1, 2,$ and $3$ levels.<br>
    <strong>(b)</strong> Calculate the orbital period in each of these levels.`,
    `<p><strong>Formulas for Hydrogen ($Z = 1$):</strong><br>
    1. Orbital speed: $v_n = \\frac{v_1}{n}$ where $v_1 = \\frac{e^2}{2\\varepsilon_0 h} = \\frac{c}{137} \\approx 2.186 \\times 10^6 \\text{ m s}^{-1}$.<br>
    2. Orbit radius: $r_n = n^2 r_1$ where $r_1 = 0.529 \\times 10^{-10} \\text{ m}$.<br>
    3. Orbital period: $T_n = \\frac{2\\pi r_n}{v_n} = \\frac{2\\pi (n^2 r_1)}{(v_1 / n)} = n^3 T_1$.</p>

    <p><strong>(a) Speeds in Levels:</strong><br>
    • $n = 1$: $v_1 = 2.19 \\times 10^6 \\text{ m s}^{-1}$<br>
    • $n = 2$: $v_2 = \\frac{2.186 \\times 10^6}{2} = 1.093 \\times 10^6 \\text{ m s}^{-1} \\approx 1.09 \\times 10^6 \\text{ m s}^{-1}$<br>
    • $n = 3$: $v_3 = \\frac{2.186 \\times 10^6}{3} = 7.287 \\times 10^5 \\text{ m s}^{-1} \\approx 7.29 \\times 10^5 \\text{ m s}^{-1}$</p>

    <p><strong>(b) Orbital Periods:</strong><br>
    For $n = 1$:
    \\[
    T_1 = \\frac{2\\pi r_1}{v_1} = \\frac{2\\pi \\times (0.529 \\times 10^{-10})}{2.186 \\times 10^6} \\approx 1.52 \\times 10^{-16} \\text{ s}
    \\]
    • For $n = 2$: $T_2 = 2^3 T_1 = 8 \\times (1.52 \\times 10^{-16}) = 1.216 \\times 10^{-15} \\text{ s} \\approx 1.22 \\times 10^{-15} \\text{ s}$<br>
    • For $n = 3$: $T_3 = 3^3 T_1 = 27 \\times (1.52 \\times 10^{-16}) = 4.104 \\times 10^{-15} \\text{ s} \\approx 4.10 \\times 10^{-15} \\text{ s}$</p>`,
    "3 Marks",
    [
      ["Calculation of speeds $v_1, v_2, v_3$", "1.5 Marks"],
      ["Calculation of orbital periods $T_1, T_2, T_3$", "1.5 Marks"]
    ]
  ),

  // 12.8
  createQCard(
    "c12p-ch12-q8",
    "Q 12.8",
    "Exercise 12.8",
    `The radius of the innermost electron orbit of a hydrogen atom is $5.3 \\times 10^{-11} \\text{ m}$. What are the radii of the $n = 2$ and $n = 3$ orbits?`,
    `<p><strong>Given:</strong><br>
    Innermost radius (Bohr radius) $r_1 = 5.3 \\times 10^{-11} \\text{ m} = 0.53 \\text{ \\AA}$</p>

    <p><strong>Bohr Orbit Radius Formula:</strong><br>
    The radius of the $n$-th orbit is proportional to $n^2$:
    \\[
    r_n = n^2 r_1
    \\]</p>

    <p><strong>Calculations:</strong><br>
    1. For $n = 2$:
    \\[
    r_2 = 2^2 r_1 = 4 \\times (5.3 \\times 10^{-11} \\text{ m}) = 2.12 \\times 10^{-10} \\text{ m} = 2.12 \\text{ \\AA}
    \\]
    2. For $n = 3$:
    \\[
    r_3 = 3^2 r_1 = 9 \\times (5.3 \\times 10^{-11} \\text{ m}) = 4.77 \\times 10^{-10} \\text{ m} = 4.77 \\text{ \\AA}
    \\]</p>`,
    "2 Marks",
    [
      ["Relation $r_n = n^2 r_1$", "0.5 Mark"],
      ["Calculations $r_2 = 2.12 \\times 10^{-10}\\text{ m}$ and $r_3 = 4.77 \\times 10^{-10}\\text{ m}$", "1.5 Marks"]
    ]
  ),

  // 12.9
  createQCard(
    "c12p-ch12-q9",
    "Q 12.9",
    "Exercise 12.9",
    `A $12.5 \\text{ eV}$ electron beam is used to bombard gaseous hydrogen at room temperature. What series of wavelengths will be emitted?`,
    `<p><strong>Given:</strong><br>
    At room temperature, hydrogen atoms reside in the ground state ($n = 1, E_1 = -13.6 \\text{ eV}$).<br>
    Maximum energy absorbed $\\le 12.5 \\text{ eV}$.<br>
    Maximum achievable energy of atom:
    \\[
    E_{max} = -13.6 + 12.5 = -1.1 \\text{ eV}
    \\]</p>

    <p><strong>Energy Levels of Hydrogen:</strong><br>
    • $E_1 = -13.6 \\text{ eV}$<br>
    • $E_2 = -3.4 \\text{ eV} \\quad (\\Delta E_{1\\to 2} = 10.2 \\text{ eV} < 12.5 \\text{ eV})$<br>
    • $E_3 = -1.51 \\text{ eV} \\quad (\\Delta E_{1\\to 3} = 12.09 \\text{ eV} < 12.5 \\text{ eV})$<br>
    • $E_4 = -0.85 \\text{ eV} \\quad (\\Delta E_{1\\to 4} = 12.75 \\text{ eV} > 12.5 \\text{ eV})$<br>
    Thus, electrons can only excite the hydrogen atoms up to the <strong>$n = 3$ level</strong>.</p>

    <p><strong>Possible De-excitation Transitions:</strong><br>
    Total spectral lines $= \\frac{n(n-1)}{2} = \\frac{3 \\times 2}{2} = 3$ lines:<br>
    1. <strong>$3 \\to 1$ (Lyman series):</strong>
    \\[
    \\frac{1}{\\lambda} = R \\left(\\frac{1}{1^2} - \\frac{1}{3^2}\\right) = \\frac{8}{9} R \\implies \\lambda = \\frac{9}{8 \\times 1.097 \\times 10^7} \\approx 102.5 \\text{ nm}
    \\]
    2. <strong>$2 \\to 1$ (Lyman series):</strong>
    \\[
    \\frac{1}{\\lambda} = R \\left(\\frac{1}{1^2} - \\frac{1}{2^2}\\right) = \\frac{3}{4} R \\implies \\lambda = \\frac{4}{3 \\times 1.097 \\times 10^7} \\approx 121.5 \\text{ nm}
    \\]
    3. <strong>$3 \\to 2$ (Balmer series):</strong>
    \\[
    \\frac{1}{\\lambda} = R \\left(\\frac{1}{2^2} - \\frac{1}{3^2}\\right) = \\frac{5}{36} R \\implies \\lambda = \\frac{36}{5 \\times 1.097 \\times 10^7} \\approx 656.3 \\text{ nm}
    \\]
    <p><strong>Result:</strong> Two lines of the <strong>Lyman series</strong> ($102.5 \\text{ nm}, 121.5 \\text{ nm}$) and one line of the <strong>Balmer series</strong> ($656.3 \\text{ nm}$) will be emitted.</p>`,
    "3 Marks",
    [
      ["Identification of maximum excited state $n = 3$", "1 Mark"],
      ["Identification of three possible transitions ($3\\to 1, 2\\to 1, 3\\to 2$)", "1 Mark"],
      ["Wavelengths and series identification (2 Lyman, 1 Balmer)", "1 Mark"]
    ]
  ),

  // 12.10
  createQCard(
    "c12p-ch12-q10",
    "Q 12.10",
    "Exercise 12.10",
    `In accordance with the Bohr’s model, find the quantum number that characterises the earth’s revolution around the sun in an orbit of radius $1.5 \\times 10^{11} \\text{ m}$ with orbital speed $3.0 \\times 10^4 \\text{ m s}^{-1}$. (Mass of earth $= 6.0 \\times 10^{24} \\text{ kg}$).`,
    `<p><strong>Given:</strong><br>
    Mass of Earth $m = 6.0 \\times 10^{24} \\text{ kg}$<br>
    Orbital radius $r = 1.5 \\times 10^{11} \\text{ m}$<br>
    Orbital speed $v = 3.0 \\times 10^4 \\text{ m s}^{-1}$<br>
    Planck's constant $h = 6.626 \\times 10^{-34} \\text{ J s}$</p>

    <p><strong>Bohr’s Angular Momentum Quantization:</strong><br>
    \\[
    L = m v r = \\frac{n h}{2\\pi} \\implies n = \\frac{2\\pi m v r}{h}
    \\]</p>

    <p><strong>Calculation:</strong><br>
    \\[
    n = \\frac{2\\pi \\times (6.0 \\times 10^{24} \\text{ kg}) \\times (3.0 \\times 10^4 \\text{ m s}^{-1}) \\times (1.5 \\times 10^{11} \\text{ m})}{6.626 \\times 10^{-34} \\text{ J s}}
    \\]
    \\[
    n = \\frac{2\\pi \\times 2.7 \\times 10^{40}}{6.626 \\times 10^{-34}} = \\frac{1.696 \\times 10^{41}}{6.626 \\times 10^{-34}} \\approx 2.56 \\times 10^{74}
    \\]
    <p><strong>Physical Significance:</strong> The quantum number $n \\sim 10^{74}$ is astronomically large. At such colossal quantum numbers, successive quantum energy states are virtually continuous, completely masking quantum effects in macroscopic planetary orbits (Bohr's correspondence principle).</p>`,
    "2 Marks",
    [
      ["Formula $n = 2\\pi mvr / h$", "1 Mark"],
      ["Calculation $n \\approx 2.6 \\times 10^{74}$ and correspondence principle significance", "1 Mark"]
    ]
  ),

  // 12.11
  createQCard(
    "c12p-ch12-q11",
    "Q 12.11",
    "Exercise 12.11",
    `Answer the following questions contrasting Thomson’s and Rutherford’s models:<br>
    <strong>(a)</strong> In what way did Rutherford explain the large-angle scattering of $\\alpha$-particles that Thomson’s model failed to account for?<br>
    <strong>(b)</strong> Why did Geiger and Marsden choose a gold foil rather than an aluminum or copper foil?<br>
    <strong>(c)</strong> Why was the gold foil chosen to be extremely thin (approx. $10^{-7} \\text{ m}$)?`,
    `<p><strong>(a) Large-Angle Scattering:</strong><br>
    • In Thomson’s model, the positive charge and mass are spread uniformly throughout the sphere of radius $\\sim 10^{-10} \\text{ m}$. The electric field inside such a diffuse distribution is weak and incapable of exerting enough electrostatic force to deflect a fast-moving, massive $\\alpha$-particle by more than a fraction of a degree.<br>
    • Rutherford posited that all positive charge and nearly the entire mass are concentrated in a tiny central core (the nucleus) of radius $< 10^{-14} \\text{ m}$. An $\\alpha$-particle making a near head-on approach experiences a colossal repulsive Coulomb force, resulting in large deflections and backward scattering ($> 90^\\circ$).</p>

    <p><strong>(b) Selection of Gold Foil:</strong><br>
    1. Gold has high atomic number ($Z = 79$). The repulsive Coulomb force ($F \\propto Z$) is very large, maximizing scattering angles.<br>
    2. Gold is exceptionally malleable, allowing sheets as thin as $10^{-7} \\text{ m}$ (about 400 atoms thick) to be fabricated.</p>

    <p><strong>(c) Reason for Extreme Thinness:</strong><br>
    To ensure <strong>single scattering</strong>. If the foil were thick, $\\alpha$-particles would undergo multiple successive scatterings by different atoms, making mathematical extraction of single nuclear collision cross-sections impossible.</p>`,
    "3 Marks",
    [
      ["Coulomb field concentration explaining large deflection in Rutherford model", "1 Mark"],
      ["High $Z$ and malleability for gold selection", "1 Mark"],
      ["Single-scattering condition justifying extreme foil thinness", "1 Mark"]
    ]
  ),

  // 12.12
  createQCard(
    "c12p-ch12-q12",
    "Q 12.12",
    "Exercise 12.12",
    `State Bohr’s three basic postulates for the hydrogen atom. Derive the expressions for the radius of the $n$-th orbit and the total energy of an electron, showing that $E_n = -\\frac{13.6}{n^2} \\text{ eV}$.`,
    `<p><strong>Bohr’s Postulates:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Postulate of Stationary Orbits:</strong> An electron revolves around the nucleus only in certain stable, non-radiating orbits (stationary states).</li>
      <li><strong>Bohr's Quantization Rule:</strong> The orbital angular momentum of the revolving electron is an integral multiple of $\\frac{h}{2\\pi}$:
      \\[
      L = m v r = \\frac{n h}{2\\pi}, \\quad n = 1, 2, 3, \\dots
      \\]</li>
      <li><strong>Bohr's Frequency Condition:</strong> An electron emits or absorbs a single photon only when jumping from one discrete stationary orbit to another:
      \\[
      h\\nu = E_i - E_f
      \\]</li>
    </ol>

    <p><strong>Derivation of Radius $r_n$:</strong><br>
    The electrostatic attraction provides the requisite centripetal force:
    \\[
    \\frac{m v^2}{r} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{e^2}{r^2} \\implies m v^2 r = \\frac{e^2}{4\\pi\\varepsilon_0} \\quad \\text{--- (1)}
    \\]
    From Bohr’s quantization condition:
    \\[
    v = \\frac{n h}{2\\pi m r} \\quad \\text{--- (2)}
    \\]
    Substituting (2) into (1):
    \\[
    m \\left( \\frac{n h}{2\\pi m r} \\right)^2 r = \\frac{e^2}{4\\pi\\varepsilon_0} \\implies \\frac{n^2 h^2}{4\\pi^2 m r} = \\frac{e^2}{4\\pi\\varepsilon_0}
    \\]
    \\[
    r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m e^2}
    \\]
    For $n = 1$, $r_1 = 0.529 \\text{ \\AA} = 5.29 \\times 10^{-11} \\text{ m}$.</p>

    <p><strong>Derivation of Total Energy $E_n$:</strong><br>
    • Kinetic Energy: $K = \\frac{1}{2} m v^2 = \\frac{e^2}{8\\pi\\varepsilon_0 r}$<br>
    • Potential Energy: $U = -\\frac{e^2}{4\\pi\\varepsilon_0 r}$<br>
    • Total Energy:
    \\[
    E_n = K + U = \\frac{e^2}{8\\pi\\varepsilon_0 r} - \\frac{e^2}{4\\pi\\varepsilon_0 r} = -\\frac{e^2}{8\\pi\\varepsilon_0 r_n}
    \\]
    Substituting $r_n$:
    \\[
    E_n = -\\frac{m e^4}{8 \\varepsilon_0^2 n^2 h^2} = -\\frac{13.6}{n^2} \\text{ eV}
    \\]</p>`,
    "5 Marks",
    [
      ["Three Bohr postulates stated accurately", "1.5 Marks"],
      ["Centripetal balance and radius derivation $r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m e^2}$", "1.5 Marks"],
      ["Energy components $K, U$ and total energy derivation $E_n = -\\frac{13.6}{n^2}\\text{ eV}$", "2 Marks"]
    ]
  ),

  // 12.13
  createQCard(
    "c12p-ch12-q13",
    "Q 12.13",
    "Exercise 12.13",
    `Explain de Broglie’s explanation of Bohr’s second postulate of quantization of angular momentum using standing electron matter waves.`,
    `<p><strong>de Broglie’s Hypothesis and Standing Waves:</strong><br>
    Louis de Broglie argued that an electron revolving in an atomic orbit behaves as a matter wave having wavelength:
    \\[
    \\lambda = \\frac{h}{p} = \\frac{h}{m v}
    \\]</p>

    <p><strong>Condition for Stationary (Stable) Orbit:</strong><br>
    • For an electron orbit to be stationary and non-radiating, the matter wave associated with the electron must form a continuous, constructive <strong>standing wave</strong> around the circular perimeter.<br>
    • If the ends of the wave did not meet in phase, destructive interference would cause the wave to cancel itself out upon successive revolutions.<br>
    • Therefore, the circumference of the circular orbit must contain an exact integral number of de Broglie wavelengths:
    \\[
    2\\pi r = n \\lambda, \\quad n = 1, 2, 3, \\dots
    \\]</p>

    <p><strong>Derivation of Bohr's Quantization Condition:</strong><br>
    Substitute $\\lambda = \\frac{h}{m v}$ into the standing wave condition:
    \\[
    2\\pi r = n \\left( \\frac{h}{m v} \\right)
    \\]
    Rearranging terms:
    \\[
    m v r = \\frac{n h}{2\\pi}
    \\]
    Thus, Bohr’s second postulate ($L = n \\hbar$) is naturally explained as a direct consequence of the wave nature of matter.</p>`,
    "3 Marks",
    [
      ["Standing wave condition on circumference $2\\pi r = n\\lambda$", "1 Mark"],
      ["Substitution of de Broglie relation $\\lambda = h/mv$", "1 Mark"],
      ["Algebraic deduction yielding $mvr = nh/2\\pi$", "1 Mark"]
    ]
  ),

  // 12.14
  createQCard(
    "c12p-ch12-q14",
    "Q 12.14",
    "Exercise 12.14",
    `In a Geiger-Marsden experiment, what is the distance of closest approach to the nucleus of a $7.7 \\text{ MeV} \\ \\alpha$-particle before it comes momentarily to rest and reverses its direction? ($Z = 79$ for gold).`,
    `<p><strong>Given:</strong><br>
    Kinetic energy of $\\alpha$-particle $K = 7.7 \\text{ MeV} = 7.7 \\times 10^6 \\times 1.602 \\times 10^{-19} \\text{ J} \\approx 1.234 \\times 10^{-12} \\text{ J}$<br>
    Target atomic number for Gold $Z = 79$<br>
    Charge of $\\alpha$-particle $q_1 = 2e$, Charge of nucleus $q_2 = Z e$<br>
    $\\frac{1}{4\\pi\\varepsilon_0} = 9.0 \\times 10^9 \\text{ N m}^2 \\text{ C}^{-2}$</p>

    <p><strong>Energy Conservation at Distance of Closest Approach ($r_0$):</strong><br>
    At $r = r_0$, the $\\alpha$-particle momentarily stops; its entire initial kinetic energy is converted into electrostatic potential energy:
    \\[
    K = \\frac{1}{4\\pi\\varepsilon_0} \\frac{(2e)(Ze)}{r_0} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2 Z e^2}{r_0}
    \\]
    \\[
    r_0 = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2 Z e^2}{K}
    \\]</p>

    <p><strong>Calculation:</strong><br>
    \\[
    r_0 = \\frac{(9.0 \\times 10^9) \\times 2 \\times 79 \\times (1.602 \\times 10^{-19})^2}{1.234 \\times 10^{-12}} = \\frac{1.422 \\times 10^{12} \\times 2.566 \\times 10^{-38}}{1.234 \\times 10^{-12}}
    \\]
    \\[
    r_0 = \\frac{3.649 \\times 10^{-26}}{1.234 \\times 10^{-12}} \\approx 2.96 \\times 10^{-14} \\text{ m} = 29.6 \\text{ fm} \\approx 30 \\text{ fm}
    \\]
    <p><strong>Result:</strong> The distance of closest approach is approximately <strong>$3.0 \\times 10^{-14} \\text{ m}$ ($30 \\text{ fm}$)</strong>, providing an upper limit for the size of the gold nucleus.</p>`,
    "3 Marks",
    [
      ["Conservation of energy principle $K = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2Ze^2}{r_0}$", "1.5 Marks"],
      ["Accurate substitution and calculation $r_0 \\approx 3.0 \\times 10^{-14}\\text{ m}$", "1.5 Marks"]
    ]
  ),

  // 12.15
  createQCard(
    "c12p-ch12-q15",
    "Q 12.15",
    "Exercise 12.15",
    `Calculate the impact parameter of a $5.5 \\text{ MeV} \\ \\alpha$-particle scattered by a gold nucleus ($Z = 79$) through an angle of $90^\\circ$.`,
    `<p><strong>Given:</strong><br>
    $K = 5.5 \\text{ MeV} = 5.5 \\times 1.602 \\times 10^{-13} \\text{ J} = 8.811 \\times 10^{-13} \\text{ J}$<br>
    $Z = 79$, $\\theta = 90^\\circ \\implies \\frac{\\theta}{2} = 45^\\circ$</p>

    <p><strong>Impact Parameter Formula:</strong><br>
    \\[
    b = \\frac{1}{4\\pi\\varepsilon_0} \\frac{Z e^2 \\cot(\\theta/2)}{K}
    \\]
    Since $\\cot(45^\\circ) = 1$:
    \\[
    b = \\frac{(9.0 \\times 10^9) \\times 79 \\times (1.602 \\times 10^{-19})^2 \\times 1}{8.811 \\times 10^{-13}}
    \\]
    \\[
    b = \\frac{7.11 \\times 10^{11} \\times 2.566 \\times 10^{-38}}{8.811 \\times 10^{-13}} = \\frac{1.824 \\times 10^{-26}}{8.811 \\times 10^{-13}} \\approx 2.07 \\times 10^{-14} \\text{ m} = 2.07 \\times 10^{-12} \\text{ cm}
    \\]
    <p><strong>Result:</strong> The impact parameter is <strong>$2.07 \\times 10^{-14} \\text{ m}$ ($20.7 \\text{ fm}$)</strong>.</p>`,
    "2 Marks",
    [
      ["Impact parameter formula $b = \\frac{1}{4\\pi\\varepsilon_0}\\frac{Ze^2\\cot(\\theta/2)}{K}$", "1 Mark"],
      ["Calculation $b = 2.07 \\times 10^{-14}\\text{ m}$", "1 Mark"]
    ]
  ),

  // 12.16
  createQCard(
    "c12p-ch12-q16",
    "Q 12.16",
    "Exercise 12.16",
    `State the five spectral series of the hydrogen atom. Give the spectral region and the formula for wave number for each series.`,
    `<p><strong>Rydberg Formula:</strong> $\\bar{\\nu} = \\frac{1}{\\lambda} = R \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$</p>
    <table style="width:100%; border-collapse:collapse; margin:12px 0;">
      <thead>
        <tr style="background:#f1f5f9; text-align:left;">
          <th style="padding:6px; border:1px solid #cbd5e1;">Series</th>
          <th style="padding:6px; border:1px solid #cbd5e1;">$n_1$</th>
          <th style="padding:6px; border:1px solid #cbd5e1;">$n_2$</th>
          <th style="padding:6px; border:1px solid #cbd5e1;">Spectral Region</th>
          <th style="padding:6px; border:1px solid #cbd5e1;">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1;"><strong>Lyman</strong></td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$1$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$2, 3, 4, \\dots$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">Ultraviolet (UV)</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$\\bar{\\nu} = R(1 - 1/n_2^2)$</td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1;"><strong>Balmer</strong></td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$2$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$3, 4, 5, \\dots$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">Visible ($+ \\text{near UV}$)</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$\\bar{\\nu} = R(1/4 - 1/n_2^2)$</td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1;"><strong>Paschen</strong></td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$3$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$4, 5, 6, \\dots$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">Near Infrared</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$\\bar{\\nu} = R(1/9 - 1/n_2^2)$</td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1;"><strong>Brackett</strong></td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$4$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$5, 6, 7, \\dots$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">Infrared</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$\\bar{\\nu} = R(1/16 - 1/n_2^2)$</td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1;"><strong>Pfund</strong></td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$5$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$6, 7, 8, \\dots$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">Far Infrared</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$\\bar{\\nu} = R(1/25 - 1/n_2^2)$</td>
        </tr>
      </tbody>
    </table>`,
    "3 Marks",
    [
      ["All five series correctly named with lower and upper levels", "1.5 Marks"],
      ["Correct identification of spectral electromagnetic regions", "1.5 Marks"]
    ]
  ),

  // 12.17
  createQCard(
    "c12p-ch12-q17",
    "Q 12.17",
    "Exercise 12.17",
    `State four major limitations / shortcomings of Bohr's atomic model.`,
    `<p><strong>Shortcomings of Bohr’s Model:</strong></p>
    <ol style="line-height:1.8;">
      <li><strong>Inapplicable to Multi-Electron Atoms:</strong> Bohr's model is strictly valid only for hydrogen and hydrogen-like single-electron ions ($\text{He}^+, \text{Li}^{2+}, \text{Be}^{3+}$). It cannot predict the spectrum of atoms with two or more electrons (such as helium) because it neglects mutual electron-electron repulsive interactions.</li>
      <li><strong>Fine Structure of Spectral Lines:</strong> High-resolution spectroscopy reveals that many single spectral lines are actually close multiplets (fine structure). Bohr's model cannot account for this splitting caused by relativistic velocity corrections and electron spin-orbit coupling.</li>
      <li><strong>Zeeman and Stark Effects:</strong> It fails to explain the splitting of spectral lines into multiple components in the presence of external magnetic fields (<strong>Zeeman effect</strong>) and electric fields (<strong>Stark effect</strong>).</li>
      <li><strong>Relative Intensities of Spectral Lines:</strong> Bohr's model gives the frequencies of spectral transitions but provides no framework to calculate the transition probabilities or relative intensities of different spectral lines.</li>
      <li><strong>Violation of Heisenberg's Uncertainty Principle:</strong> Bohr assumes well-defined circular orbits where both position $r$ and momentum $p$ are simultaneously precisely determined, in direct violation of $\Delta x \Delta p \ge \frac{\hbar}{2}$.</li>
    </ol>`,
    "3 Marks",
    [
      ["Limitation to single-electron species", "0.75 Mark"],
      ["Failure on fine structure / spin-orbit coupling", "0.75 Mark"],
      ["Zeeman and Stark effects unexplained", "0.75 Mark"],
      ["Intensity calculation failure & Heisenberg violation", "0.75 Mark"]
    ]
  )
];

saveChapter(chNum, chTitle, svgDiagram, "Exercises 12.1 to 12.17", questions, nextChTitle);
