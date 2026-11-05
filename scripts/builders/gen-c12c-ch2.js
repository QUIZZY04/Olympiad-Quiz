// scripts/builders/gen-c12c-ch2.js
// Class 12 Chemistry Chapter 2: Electrochemistry (वैद्युतरसायन) (NCERT Rationalised 2026–27)
// Full Coverage: 15 In-Text Questions + 18 End-of-Chapter Exercises = 33 Questions Verbatim
const { createQCard, saveChapter } = require('./c12c-helper');

const chNum = 2;
const chTitle = 'Electrochemistry (वैद्युतरसायन)';
const exTitle = 'NCERT Chapter 2: In-Text Questions (2.1–2.15) & End-of-Chapter Exercises (2.1–2.18)';

const svgDiagram = `
<div style="background:linear-gradient(135deg, #eff6ff, #dbeafe); border:1px solid #bfdbfe; border-radius:12px; padding:20px; margin-bottom:24px;">
  <h3 style="font-size:1.05rem; color:#1e40af; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    Electrochemical Core Principles: Galvanic Cell & Nernst Equation
  </h3>
  <svg viewBox="0 0 850 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
    <!-- Box 1: Galvanic vs Electrolytic -->
    <rect x="15" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
    <text x="110" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">Daniel / Galvanic Cell</text>
    <text x="110" y="70" text-anchor="middle" font-size="11" fill="#334155">Zn + Cu²⁺ → Zn²⁺ + Cu</text>
    <text x="110" y="94" text-anchor="middle" font-size="10" fill="#64748b">• Anode: Zn (Oxidation, -ve)</text>
    <text x="110" y="112" text-anchor="middle" font-size="10" fill="#64748b">• Cathode: Cu (Reduction, +ve)</text>

    <!-- Box 2: Nernst Equation -->
    <rect x="225" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
    <text x="320" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Nernst Equation (298 K)</text>
    <text x="320" y="72" text-anchor="middle" font-size="11" fill="#334155">E = E° - (0.0591/n) log Q</text>
    <text x="320" y="96" text-anchor="middle" font-size="10" fill="#64748b">• ΔG° = -n F E°_cell</text>
    <text x="320" y="114" text-anchor="middle" font-size="10" fill="#64748b">• log K_c = (n E°_cell) / 0.0591</text>

    <!-- Box 3: Kohlrausch's Law -->
    <rect x="435" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
    <text x="530" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">Kohlrausch's Law</text>
    <text x="530" y="72" text-anchor="middle" font-size="11" fill="#334155">Λ°_m = ν₊ λ°₊ + ν₋ λ°₋</text>
    <text x="530" y="96" text-anchor="middle" font-size="10" fill="#64748b">• α = Λ_m / Λ°_m</text>
    <text x="530" y="114" text-anchor="middle" font-size="10" fill="#64748b">• K_a = (C α²) / (1 - α)</text>

    <!-- Box 4: Faraday's Laws & Batteries -->
    <rect x="645" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
    <text x="740" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#5b21b6">Faraday's Electrolysis</text>
    <text x="740" y="72" text-anchor="middle" font-size="11" fill="#334155">w = Z · I · t = (M I t)/(n F)</text>
    <text x="740" y="96" text-anchor="middle" font-size="10" fill="#64748b">• 1 Faraday = 96,487 C ≈ 96500 C</text>
    <text x="740" y="114" text-anchor="middle" font-size="10" fill="#64748b">• Lead-storage: Pb + PbO₂ + 2H₂SO₄</text>
  </svg>
</div>`;

const questions = [];

// ============================================================================
// PART 1: NCERT IN-TEXT QUESTIONS (2.1 to 2.15)
// ============================================================================

// Question 2.1 (In-Text)
questions.push(createQCard(
  'c12c-ch2-q1', 'In-Text 2.1', 'NCERT In-Text',
  'How would you determine the standard electrode potential of the system $\\text{Mg}^{2+}|\\text{Mg}$?',
  `<div class="step">
    <b>Experimental Procedure:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Cell Setup:</strong> Set up an electrochemical cell by coupling the magnesium half-cell with a <strong>Standard Hydrogen Electrode (SHE)</strong> as the reference electrode.
      $$\\text{Mg}(s) \\mid \\text{Mg}^{2+}(1\\text{ M}) \\;\\parallel\\; \\text{H}^+(1\\text{ M}) \\mid \\text{H}_2(g, 1\\text{ bar}) \\mid \\text{Pt}(s)$$</li>
      <li><strong>Measurement:</strong> Connect the two electrodes through a voltmeter and insert a salt bridge between the two solutions. Measure the cell electromotive force ($E^\\circ_{\\text{cell}}$).</li>
      <li><strong>Calculations:</strong> Since magnesium acts as the anode (electrons flow from $\\text{Mg}$ to $\\text{SHE}$) and SHE acts as the cathode ($E^\\circ_{\\text{SHE}} = 0.00\\text{ V}$):
      $$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = E^\\circ_{\\text{H}^+/\\text{H}_2} - E^\\circ_{\\text{Mg}^{2+}/\\text{Mg}}$$
      $$E^\\circ_{\\text{cell}} = 0.00\\text{ V} - E^\\circ_{\\text{Mg}^{2+}/\\text{Mg}} \\implies E^\\circ_{\\text{Mg}^{2+}/\\text{Mg}} = -E^\\circ_{\\text{cell}}$$
      The measured cell emf is $+2.37\\text{ V}$, therefore $E^\\circ_{\\text{Mg}^{2+}/\\text{Mg}} = \\mathbf{-2.37\\text{ V}}$.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Coupling Mg half-cell with Standard Hydrogen Electrode (SHE)', '1 Mark'],
    ['Cell representation and derivation $E^\\circ_{\\text{Mg}^{2+}/\\text{Mg}} = -E^\\circ_{\\text{cell}} = -2.37\\text{ V}$', '1 Mark']
  ]
));

// Question 2.2 (In-Text)
questions.push(createQCard(
  'c12c-ch2-q2', 'In-Text 2.2', 'NCERT In-Text',
  'Can you store copper sulphate solution in a zinc pot?',
  `<div class="step">
    <b>Answer: No, copper sulphate solution cannot be stored in a zinc pot.</b><br><br>
    <b>Scientific Reason:</b><br>
    From the electrochemical series, the standard reduction potentials are:
    $$E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}, \\quad E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$$
    Since zinc has a more negative reduction potential than copper, zinc is more reactive and acts as a stronger reducing agent. Zinc will displace copper from $\\text{CuSO}_4$ solution:
    $$\\text{Zn}(s) + \\text{CuSO}_4(aq) \\rightarrow \\text{ZnSO}_4(aq) + \\text{Cu}(s)$$
    $$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$$
    $$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} - E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = +0.34\\text{ V} - (-0.76\\text{ V}) = +1.10\\text{ V} > 0$$
    Since $E^\\circ_{\\text{cell}} > 0$ (spontaneous reaction), zinc dissolves into solution forming pits/holes in the pot.
  </div>`,
  '2 Marks',
  [
    ['Definite "No" with standard reduction potentials of Zn and Cu', '0.75 Mark'],
    ['Displacement reaction equation and justification via $E^\\circ_{\\text{cell}} = +1.10\\text{ V} > 0$', '1.25 Marks']
  ]
));

// Question 2.3 (In-Text)
questions.push(createQCard(
  'c12c-ch2-q3', 'In-Text 2.3', 'NCERT In-Text',
  'Consult the table of standard electrode potentials and suggest three substances that can oxidise ferrous ions under suitable conditions.',
  `<div class="step">
    <b>Oxidation of Ferrous Ions:</b><br>
    The oxidation of ferrous ions to ferric ions is represented as:
    $$\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+} + e^-, \\quad E^\\circ_{\\text{Fe}^{3+}/\\text{Fe}^{2+}} = +0.77\\text{ V}$$
    Any oxidizing agent whose standard reduction potential is <strong>greater than $+0.77\\text{ V}$</strong> can oxidize $\\text{Fe}^{2+}$ to $\\text{Fe}^{3+}$.<br><br>
    <b>Three suitable substances:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Chlorine gas ($\\text{Cl}_2$):</strong> $E^\\circ_{\\text{Cl}_2/\\text{Cl}^-} = +1.36\\text{ V} > +0.77\\text{ V}$</li>
      <li><strong>Acidified Dichromate ($\\text{Cr}_2\\text{O}_7^{2-} / \\text{H}^+$):</strong> $E^\\circ_{\\text{Cr}_2\\text{O}_7^{2-}/\\text{Cr}^{3+}} = +1.33\\text{ V} > +0.77\\text{ V}$</li>
      <li><strong>Acidified Permanganate ($\\text{MnO}_4^- / \\text{H}^+$):</strong> $E^\\circ_{\\text{MnO}_4^-/\\text{Mn}^{2+}} = +1.51\\text{ V} > +0.77\\text{ V}$</li>
    </ol>
    <i>(Other valid options: $\\text{Br}_2$ with $E^\\circ = +1.09\\text{ V}$, $\\text{F}_2$ with $E^\\circ = +2.87\\text{ V}$).</i>
  </div>`,
  '2 Marks',
  [
    ['Identification of condition: $E^\\circ > +0.77\\text{ V}$', '0.5 Mark'],
    ['Three correct substances with standard potentials: $\\text{Cl}_2$, $\\text{MnO}_4^-$, $\\text{Cr}_2\\text{O}_7^{2-}$', '1.5 Marks']
  ]
));

// Question 2.4 (In-Text)
questions.push(createQCard(
  'c12c-ch2-q4', 'In-Text 2.4', 'NCERT In-Text',
  'Calculate the potential of hydrogen electrode in contact with a solution whose $\\text{pH}$ is $10$.',
  `<div class="step">
    <b>1. Electrode reaction:</b><br>
    $$\\text{H}^+(aq) + e^- \\rightarrow \\frac{1}{2}\\text{H}_2(g, 1\\text{ bar})$$<br>
    <b>2. Nernst Equation for hydrogen electrode at $298\\text{ K}$:</b><br>
    $$E_{\\text{H}^+/\\text{H}_2} = E^\\circ_{\\text{H}^+/\\text{H}_2} - \\frac{0.0591}{n} \\log \\frac{1}{[\\text{H}^+]}$$<br>
    Since $E^\\circ_{\\text{H}^+/\\text{H}_2} = 0.00\\text{ V}$, $n = 1$, and $\\text{pH} = -\\log[\\text{H}^+] = 10 \\implies [\\text{H}^+] = 10^{-10}\\text{ M}$:<br>
    $$E_{\\text{H}^+/\\text{H}_2} = 0 - \\frac{0.0591}{1} \\log \\left(\\frac{1}{10^{-10}}\\right) = -0.0591 \\log(10^{10}) = -0.0591 \\times 10 = \\mathbf{-0.591\\text{ V}}$$
  </div>`,
  '2 Marks',
  [
    ['Electrode reaction and formula $E = -0.0591 \\times \\text{pH}$', '1 Mark'],
    ['Calculation and final potential $E = -0.591\\text{ V}$', '1 Mark']
  ]
));

// Question 2.5 (In-Text)
questions.push(createQCard(
  'c12c-ch2-q5', 'In-Text 2.5', 'NCERT In-Text',
  'Calculate the emf of the cell in which the following reaction takes place:<br>$$\\text{Ni}(s) + 2\\text{Ag}^+(0.002\\text{ M}) \\rightarrow \\text{Ni}^{2+}(0.160\\text{ M}) + 2\\text{Ag}(s)$$<br>given that $E^\\circ_{\\text{cell}} = 1.05\\text{ V}$.',
  `<div class="step">
    <b>1. Identify $n$ (electrons transferred):</b><br>
    $$\\text{Ni}(s) \\rightarrow \\text{Ni}^{2+} + 2e^-, \\quad 2\\text{Ag}^+ + 2e^- \\rightarrow 2\\text{Ag}(s) \\implies n = 2$$<br>
    <b>2. Nernst Equation:</b><br>
    $$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n} \\log \\frac{[\\text{Ni}^{2+}]}{[\\text{Ag}^+]^2}$$<br>
    $$E_{\\text{cell}} = 1.05\\text{ V} - \\frac{0.0591}{2} \\log \\frac{0.160}{(0.002)^2}$$<br>
    <b>3. Evaluation of log term:</b><br>
    $$\\frac{0.160}{(0.002)^2} = \\frac{0.160}{4 \\times 10^{-6}} = \\frac{1.6 \\times 10^{-1}}{4 \\times 10^{-6}} = 4 \\times 10^4$$<br>
    $$\\log(4 \\times 10^4) = \\log 4 + \\log 10^4 = 0.6021 + 4 = 4.6021$$<br>
    <b>4. Calculation of $E_{\\text{cell}}$:</b><br>
    $$E_{\\text{cell}} = 1.05 - \\frac{0.0591}{2} \\times 4.6021 = 1.05 - (0.02955 \\times 4.6021) = 1.05 - 0.1360 = \\mathbf{0.914\\text{ V}}$$
  </div>`,
  '3 Marks',
  [
    ['Identification of $n = 2$ and Nernst equation formulation', '1 Mark'],
    ['Evaluation of reaction quotient and logarithm $\\log(4 \\times 10^4) = 4.6021$', '1 Mark'],
    ['Final calculation of cell emf $= 0.914\\text{ V}$', '1 Mark']
  ]
));

// Question 2.6 (In-Text)
questions.push(createQCard(
  'c12c-ch2-q6', 'In-Text 2.6', 'NCERT In-Text',
  'The cell in which the following reaction occurs:<br>$$2\\text{Fe}^{3+}(aq) + 2\\text{I}^-(aq) \\rightarrow 2\\text{Fe}^{2+}(aq) + \\text{I}_2(s)$$<br>has $E^\\circ_{\\text{cell}} = 0.236\\text{ V}$ at $298\\text{ K}$. Calculate the standard Gibbs energy and the equilibrium constant of the cell reaction.',
  `<div class="step">
    <b>1. Number of electrons transferred ($n$):</b><br>
    $2\\text{Fe}^{3+} + 2e^- \\rightarrow 2\\text{Fe}^{2+}$, $\\quad 2\\text{I}^- \\rightarrow \\text{I}_2 + 2e^- \\implies n = 2$<br><br>
    <b>2. Standard Gibbs Free Energy ($\\Delta_r G^\\circ$):</b><br>
    $$\\Delta_r G^\\circ = -n F E^\\circ_{\\text{cell}} = -2 \\times 96487\\text{ C mol}^{-1} \\times 0.236\\text{ V}$$<br>
    $$\\Delta_r G^\\circ = -45541.86\\text{ J mol}^{-1} = \\mathbf{-45.54\\text{ kJ mol}^{-1}}$$<br><br>
    <b>3. Equilibrium Constant ($K_c$):</b><br>
    $$\\log K_c = \\frac{n E^\\circ_{\\text{cell}}}{0.0591} = \\frac{2 \\times 0.236}{0.0591} = \\frac{0.472}{0.0591} = 7.9865$$<br>
    $$K_c = \\text{Antilog}(7.9865) = \\mathbf{9.69 \\times 10^7}$$
  </div>`,
  '3 Marks',
  [
    ['Identification of $n = 2$', '0.5 Mark'],
    ['Calculation of $\\Delta_r G^\\circ = -45.54\\text{ kJ mol}^{-1}$', '1.25 Marks'],
    ['Calculation of $\\log K_c = 7.986$ and $K_c = 9.69 \\times 10^7$', '1.25 Marks']
  ]
));

// Question 2.7 (In-Text)
questions.push(createQCard(
  'c12c-ch2-q7', 'In-Text 2.7', 'NCERT In-Text',
  'Why does the conductivity of a solution decrease with dilution?',
  `<div class="step">
    <b>Explanation:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Definition of Conductivity ($\\kappa$):</strong> Conductivity (or specific conductance) is the conductance of ions present in a unit volume ($1\\text{ cm}^3$ or $1\\text{ mL}$) of the electrolytic solution.</li>
      <li><strong>Effect of Dilution:</strong> Upon dilution, the total volume of the solution increases, but the total number of ions does not increase proportionately. Consequently, the <strong>number of current-carrying ions per unit volume decreases</strong>.</li>
      <li><strong>Conclusion:</strong> Since electrical conductance is directly proportional to the ion population density in that unit volume, the conductivity ($\\kappa$) inevitably decreases as the solution is diluted.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Definition of conductivity as conductance per unit volume ($1\\text{ cm}^3$)', '1 Mark'],
    ['Explanation of decrease in number of ions per unit volume upon dilution', '1 Mark']
  ]
));

// Question 2.8 (In-Text)
questions.push(createQCard(
  'c12c-ch2-q8', 'In-Text 2.8', 'NCERT In-Text',
  'Suggest a way to determine the $\\Lambda_m^\\circ$ value of water.',
  `<div class="step">
    <b>Method using Kohlrausch’s Law of Independent Migration of Ions:</b><br>
    Water is an extremely weak electrolyte with an immeasurably low degree of dissociation:
    $$\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}^+ + \\text{OH}^-$$
    According to Kohlrausch\'s Law, the limiting molar conductivity of water is:
    $$\\Lambda_m^\\circ(\\text{H}_2\\text{O}) = \\lambda^\\circ(\\text{H}^+) + \\lambda^\\circ(\\text{OH}^-)$$<br>
    We can determine this by selecting three strong electrolytes whose limiting molar conductivities can be experimentally measured by extrapolation:
    <ol style="margin-left:20px; line-height:1.75;">
      <li>Hydrochloric acid: $\\Lambda_m^\\circ(\\text{HCl}) = \\lambda^\\circ(\\text{H}^+) + \\lambda^\\circ(\\text{Cl}^-)$</li>
      <li>Sodium hydroxide: $\\Lambda_m^\\circ(\\text{NaOH}) = \\lambda^\\circ(\\text{Na}^+) + \\lambda^\\circ(\\text{OH}^-)$</li>
      <li>Sodium chloride: $\\Lambda_m^\\circ(\\text{NaCl}) = \\lambda^\\circ(\\text{Na}^+) + \\lambda^\\circ(\\text{Cl}^-)$</li>
    </ol>
    Combining these three equations:
    $$\\mathbf{\\Lambda_m^\\circ(\\text{H}_2\\text{O}) = \\Lambda_m^\\circ(\\text{HCl}) + \\Lambda_m^\\circ(\\text{NaOH}) - \\Lambda_m^\\circ(\\text{NaCl})}$$
    This algebraic summation completely cancels out the $\\text{Na}^+$ and $\\text{Cl}^-$ contributions, yielding $\\Lambda_m^\\circ(\\text{H}_2\\text{O})$.
  </div>`,
  '2 Marks',
  [
    ['Application of Kohlrausch\'s Law: $\\Lambda_m^\\circ(\\text{H}_2\\text{O}) = \\lambda^\\circ(\\text{H}^+) + \\lambda^\\circ(\\text{OH}^-)$', '1 Mark'],
    ['Selection of strong electrolytes $\\text{HCl}, \\text{NaOH}, \\text{NaCl}$ and final equation', '1 Mark']
  ]
));

// Question 2.9 (In-Text)
questions.push(createQCard(
  'c12c-ch2-q9', 'In-Text 2.9', 'NCERT In-Text',
  'The molar conductivity of $0.025\\text{ mol L}^{-1}$ methanoic acid is $46.1\\text{ S cm}^2\\text{ mol}^{-1}$. Calculate its degree of dissociation and dissociation constant. Given $\\lambda^\\circ(\\text{H}^+) = 349.6\\text{ S cm}^2\\text{ mol}^{-1}$ and $\\lambda^\\circ(\\text{HCOO}^-) = 54.6\\text{ S cm}^2\\text{ mol}^{-1}$.',
  `<div class="step">
    <b>1. Limiting molar conductivity of methanoic acid ($\\text{HCOOH}$):</b><br>
    $$\\Lambda_m^\\circ(\\text{HCOOH}) = \\lambda^\\circ(\\text{H}^+) + \\lambda^\\circ(\\text{HCOO}^-) = 349.6 + 54.6 = \\mathbf{404.2\\text{ S cm}^2\\text{ mol}^{-1}}$$<br><br>
    <b>2. Degree of dissociation ($\\alpha$):</b><br>
    $$\\alpha = \\frac{\\Lambda_m}{\\Lambda_m^\\circ} = \\frac{46.1\\text{ S cm}^2\\text{ mol}^{-1}}{404.2\\text{ S cm}^2\\text{ mol}^{-1}} = \\mathbf{0.114}$$<br><br>
    <b>3. Dissociation constant ($K_a$):</b><br>
    $$K_a = \\frac{C \\alpha^2}{1 - \\alpha} = \\frac{0.025 \\times (0.114)^2}{1 - 0.114} = \\frac{0.025 \\times 0.012996}{0.886} = \\frac{0.0003249}{0.886} = \\mathbf{3.67 \\times 10^{-4}\\text{ mol L}^{-1}}$$
  </div>`,
  '3 Marks',
  [
    ['Calculation of $\\Lambda_m^\\circ = 404.2\\text{ S cm}^2\\text{ mol}^{-1}$', '1 Mark'],
    ['Degree of dissociation $\\alpha = 0.114$', '1 Mark'],
    ['Dissociation constant $K_a = 3.67 \\times 10^{-4}\\text{ mol L}^{-1}$', '1 Mark']
  ]
));

// Question 2.10 (In-Text)
questions.push(createQCard(
  'c12c-ch2-q10', 'In-Text 2.10', 'NCERT In-Text',
  'If a current of $0.5\\text{ ampere}$ flows through a metallic wire for $2\\text{ hours}$, then how many electrons would flow through the wire?',
  `<div class="step">
    <b>1. Total charge ($Q$):</b><br>
    $I = 0.5\\text{ A}$, $t = 2\\text{ hours} = 2 \\times 3600\\text{ s} = 7200\\text{ s}$<br>
    $$Q = I \\times t = 0.5\\text{ A} \\times 7200\\text{ s} = 3600\\text{ C}$$<br><br>
    <b>2. Charge of 1 electron:</b><br>
    $$e = 1.602 \\times 10^{-19}\\text{ C}$$<br><br>
    <b>3. Number of electrons ($N$):</b><br>
    $$N = \\frac{Q}{e} = \\frac{3600\\text{ C}}{1.602 \\times 10^{-19}\\text{ C}} = \\mathbf{2.247 \\times 10^{22}\\text{ electrons } (\\approx 2.25 \\times 10^{22})}$$
  </div>`,
  '2 Marks',
  [
    ['Calculation of total charge $Q = 3600\\text{ C}$', '1 Mark'],
    ['Calculation of number of electrons $N = 2.25 \\times 10^{22}$', '1 Mark']
  ]
));

// Question 2.11 (In-Text)
questions.push(createQCard(
  'c12c-ch2-q11', 'In-Text 2.11', 'NCERT In-Text',
  'Suggest a list of metals that are extracted electrolytically.',
  `<div class="step">
    <b>Metals Extracted Electrolytically:</b><br>
    Highly electropositive metals belonging to Groups 1, 2, and 13 having very high negative reduction potentials cannot be reduced by chemical reducing agents like carbon (coke). They are commercially extracted by the electrolysis of their molten (fused) salts:<br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Sodium ($\\text{Na}$):</strong> Extracted by Down\'s process from fused $\\text{NaCl} + \\text{CaCl}_2$.</li>
      <li><strong>Potassium ($\\text{K}$):</strong> Extracted from fused $\\text{KCl}$.</li>
      <li><strong>Magnesium ($\\text{Mg}$):</strong> Extracted from fused anhydrous $\\text{MgCl}_2$.</li>
      <li><strong>Calcium ($\\text{Ca}$):</strong> Extracted from fused $\\text{CaCl}_2 + \\text{CaF}_2$.</li>
      <li><strong>Aluminium ($\\text{Al}$):</strong> Extracted by Hall-Héroult process from molten alumina ($\\text{Al}_2\\text{O}_3$) dissolved in cryolite ($\\text{Na}_3\\text{AlF}_6$).</li>
    </ul>
  </div>`,
  '1 Mark',
  [
    ['List of reactive metals ($\\text{Na}, \\text{K}, \\text{Mg}, \\text{Ca}, \\text{Al}$) extracted by molten salt electrolysis', '1 Mark']
  ]
));

// Question 2.12 (In-Text)
questions.push(createQCard(
  'c12c-ch2-q12', 'In-Text 2.12', 'NCERT In-Text',
  'Consider the reaction: $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$. What is the quantity of electricity in coulombs needed to reduce $1\\text{ mol}$ of $\\text{Cr}_2\\text{O}_7^{2-}$?',
  `<div class="step">
    <b>1. Stoichiometry of reaction:</b><br>
    Reduction of $1\\text{ mol}$ of $\\text{Cr}_2\\text{O}_7^{2-}$ requires $6\\text{ moles of electrons}$.<br><br>
    <b>2. Quantity of electricity in coulombs:</b><br>
    $$Q = n \\times F = 6 \\times 96487\\text{ C} \\approx 6 \\times 96500\\text{ C}$$<br>
    $$Q = 6 \\times 96487 = \\mathbf{578,922\\text{ C } (\\approx 5.79 \\times 10^5\\text{ C})}$$
  </div>`,
  '1 Mark',
  [
    ['Identification of $n = 6\\text{ F}$ and calculation $Q = 5.79 \\times 10^5\\text{ C}$', '1 Mark']
  ]
));

// Question 2.13 (In-Text)
questions.push(createQCard(
  'c12c-ch2-q13', 'In-Text 2.13', 'NCERT In-Text',
  'Write the chemistry of recharging the lead storage battery, highlighting all the materials that are involved during recharging.',
  `<div class="step">
    <b>Recharging Chemistry of Lead Storage Battery:</b><br>
    During recharging, an external electrical source forces the non-spontaneous reverse reaction, converting electrical energy into chemical energy.<br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>At Cathode (Reduction of $\\text{PbSO}_4$ to spongy $\\text{Pb}$):</strong>
      $$\\text{PbSO}_4(s) + 2e^- \\rightarrow \\text{Pb}(s) + \\text{SO}_4^{2-}(aq)$$</li>
      <li><strong>At Anode (Oxidation of $\\text{PbSO}_4$ to $\\text{PbO}_2$):</strong>
      $$\\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}(l) \\rightarrow \\text{PbO}_2(s) + \\text{SO}_4^{2-}(aq) + 4\\text{H}^+(aq) + 2e^-$$</li>
      <li><strong>Overall Recharging Reaction:</strong>
      $$2\\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}(l) \\xrightarrow{\\text{Recharging}} \\text{Pb}(s) + \\text{PbO}_2(s) + 2\\text{H}_2\\text{SO}_4(aq)$$</li>
    </ol>
    <b>Materials involved & regenerated:</b> $\\text{PbSO}_4$ is consumed, while spongy $\\text{Pb}$ (at negative plate), lead dioxide $\\text{PbO}_2$ (at positive plate), and sulphuric acid ($\\text{H}_2\\text{SO}_4$, increasing electrolyte density to $\\approx 1.30\\text{ g mL}^{-1}$) are regenerated.
  </div>`,
  '2 Marks',
  [
    ['Cathode and anode recharging equations', '1 Mark'],
    ['Overall balanced recharging equation and regeneration of $\\text{H}_2\\text{SO}_4$', '1 Mark']
  ]
));

// Question 2.14 (In-Text)
questions.push(createQCard(
  'c12c-ch2-q14', 'In-Text 2.14', 'NCERT In-Text',
  'Suggest two materials other than hydrogen that can be used as fuels in fuel cells.',
  `<div class="step">
    <b>Alternative Fuels for Fuel Cells:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Methane ($\\text{CH}_4$):</strong> Used in natural gas / solid oxide fuel cells (SOFCs).</li>
      <li><strong>Methanol ($\\text{CH}_3\\text{OH}$):</strong> Used in Direct Methanol Fuel Cells (DMFCs).</li>
    </ol>
    <i>(Other accepted alternatives: Carbon monoxide ($\\text{CO}$), Propane ($\\text{C}_3\\text{H}_8$), Ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$)).</i>
  </div>`,
  '1 Mark',
  [
    ['Naming two valid fuels (Methane and Methanol)', '1 Mark']
  ]
));

// Question 2.15 (In-Text)
questions.push(createQCard(
  'c12c-ch2-q15', 'In-Text 2.15', 'NCERT In-Text',
  'Explain how rusting of iron is envisaged as setting up of an electrochemical cell.',
  `<div class="step">
    <b>Electrochemical Mechanism of Rusting:</b><br>
    Rusting occurs when iron is exposed to moisture and oxygen. Water containing dissolved $\\text{CO}_2$ forms carbonic acid ($\\text{H}_2\\text{CO}_3$), providing $\\text{H}^+$ ions as electrolyte.<br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Anodic site (Oxidation of Iron):</strong>
      Iron atoms lose electrons and enter solution as ferrous ions:
      $$\\text{Fe}(s) \\rightarrow \\text{Fe}^{2+}(aq) + 2e^-, \\quad E^\\circ = -0.44\\text{ V} \\; (\\times 2)$$</li>
      <li><strong>Cathodic site (Reduction of Oxygen):</strong>
      Electrons released flow through the metallic iron to another spot on the surface where oxygen is reduced in the presence of $\\text{H}^+$ ions:
      $$\\text{O}_2(g) + 4\\text{H}^+(aq) + 4e^- \\rightarrow 2\\text{H}_2\\text{O}(l), \\quad E^\\circ = +1.23\\text{ V}$$</li>
      <li><strong>Overall Cell Reaction:</strong>
      $$2\\text{Fe}(s) + \\text{O}_2(g) + 4\\text{H}^+(aq) \\rightarrow 2\\text{Fe}^{2+}(aq) + 2\\text{H}_2\\text{O}(l), \\quad E^\\circ_{\\text{cell}} = 1.23 - (-0.44) = +1.67\\text{ V}$$</li>
      <li><strong>Formation of Rust:</strong>
      Ferrous ions are further oxidized by atmospheric oxygen to ferric oxide, which hydrates to form rust:
      $$4\\text{Fe}^{2+}(aq) + \\text{O}_2(g) + 4\\text{H}_2\\text{O}(l) \\rightarrow 2\\text{Fe}_2\\text{O}_3(s) + 8\\text{H}^+(aq)$$
      $$\\text{Fe}_2\\text{O}_3 + x\\text{H}_2\\text{O} \\rightarrow \\mathbf{\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O} \\; (\\text{Rust})}$$
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Anode reaction: $\\text{Fe} \\rightarrow \\text{Fe}^{2+} + 2e^-$', '0.75 Mark'],
    ['Cathode reaction: $\\text{O}_2 + 4\\text{H}^+ + 4e^- \\rightarrow 2\\text{H}_2\\text{O}$', '0.75 Mark'],
    ['Overall cell reaction and formation of hydrated ferric oxide (Rust)', '1.5 Marks']
  ]
));

// ============================================================================
// PART 2: NCERT END-OF-CHAPTER EXERCISES (2.1 to 2.18)
// ============================================================================

// Exercise 2.1
questions.push(createQCard(
  'c12c-ch2-q16', 'Question 2.1', 'NCERT Exercise',
  'Arrange the following metals in the order in which they displace each other from the solution of their salts: $\\text{Al}$, $\\text{Cu}$, $\\text{Fe}$, $\\text{Mg}$ and $\\text{Zn}$.',
  `<div class="step">
    <b>1. Standard Reduction Potentials ($E^\\circ$):</b><br>
    $$\\text{Mg}^{2+}/\\text{Mg} = -2.37\\text{ V}$$<br>
    $$\\text{Al}^{3+}/\\text{Al} = -1.66\\text{ V}$$<br>
    $$\\text{Zn}^{2+}/\\text{Zn} = -0.76\\text{ V}$$<br>
    $$\\text{Fe}^{2+}/\\text{Fe} = -0.44\\text{ V}$$<br>
    $$\\text{Cu}^{2+}/\\text{Cu} = +0.34\\text{ V}$$<br><br>
    <b>2. Principle:</b><br>
    A metal with a more negative reduction potential is a stronger reducing agent and will displace any metal having a higher (more positive) reduction potential from its salt solution.<br><br>
    <b>3. Displacement Order:</b><br>
    $$\\mathbf{\\text{Mg} > \\text{Al} > \\text{Zn} > \\text{Fe} > \\text{Cu}}$$<br>
    ($\\text{Mg}$ displaces all four; $\\text{Al}$ displaces $\\text{Zn}$, $\\text{Fe}$, $\\text{Cu}$; $\\text{Zn}$ displaces $\\text{Fe}$, $\\text{Cu}$; $\\text{Fe}$ displaces $\\text{Cu}$; $\\text{Cu}$ cannot displace any).
  </div>`,
  '2 Marks',
  [
    ['Comparison of standard reduction potentials', '1 Mark'],
    ['Correct displacement order: $\\text{Mg} > \\text{Al} > \\text{Zn} > \\text{Fe} > \\text{Cu}$', '1 Mark']
  ]
));

// Exercise 2.2
questions.push(createQCard(
  'c12c-ch2-q17', 'Question 2.2', 'NCERT Exercise',
  'Given the standard electrode potentials:<br>$\\text{K}^+/\\text{K} = -2.93\\text{ V}$, $\\text{Ag}^+/\\text{Ag} = 0.80\\text{ V}$, $\\text{Hg}^{2+}/\\text{Hg} = 0.79\\text{ V}$, $\\text{Mg}^{2+}/\\text{Mg} = -2.37\\text{ V}$, $\\text{Cr}^{3+}/\\text{Cr} = -0.74\\text{ V}$.<br>Arrange these metals in their increasing order of reducing power.',
  `<div class="step">
    <b>1. Principle:</b><br>
    Lower (more negative) the standard reduction potential ($E^\\circ$), greater is the tendency to lose electrons, and hence stronger is the reducing power.<br><br>
    <b>2. Standard Reduction Potentials in descending order:</b><br>
    $$\\text{Ag}^+/\\text{Ag} = +0.80\\text{ V} \\; (\\text{weakest reducing agent})$$<br>
    $$\\text{Hg}^{2+}/\\text{Hg} = +0.79\\text{ V}$$<br>
    $$\\text{Cr}^{3+}/\\text{Cr} = -0.74\\text{ V}$$<br>
    $$\\text{Mg}^{2+}/\\text{Mg} = -2.37\\text{ V}$$<br>
    $$\\text{K}^+/\\text{K} = -2.93\\text{ V} \\; (\\text{strongest reducing agent})$$<br><br>
    <b>3. Increasing Order of Reducing Power:</b><br>
    $$\\mathbf{\\text{Ag} < \\text{Hg} < \\text{Cr} < \\text{Mg} < \\text{K}}$$
  </div>`,
  '2 Marks',
  [
    ['Inverse relationship between $E^\\circ$ and reducing power', '0.75 Mark'],
    ['Correct arrangement: $\\text{Ag} < \\text{Hg} < \\text{Cr} < \\text{Mg} < \\text{K}$', '1.25 Marks']
  ]
));

// Exercise 2.3
questions.push(createQCard(
  'c12c-ch2-q18', 'Question 2.3', 'NCERT Exercise',
  'Depict the galvanic cell in which the reaction $\\text{Zn}(s) + 2\\text{Ag}^+(aq) \\rightarrow \\text{Zn}^{2+}(aq) + 2\\text{Ag}(s)$ takes place. Further show:<br>(i) Which of the electrode is negatively charged?<br>(ii) The carriers of the current in the cell.<br>(iii) Individual reaction at each electrode.',
  `<div class="step">
    <b>1. Galvanic Cell Representation:</b><br>
    $$\\mathbf{\\text{Zn}(s) \\mid \\text{Zn}^{2+}(aq) \\;\\parallel\\; \\text{Ag}^+(aq) \\mid \\text{Ag}(s)}$$<br><br>
    <b>(i) Negatively charged electrode:</b><br>
    The <strong>Zinc electrode (Anode)</strong> is negatively charged because oxidation occurs here, releasing electrons onto the zinc rod.<br><br>
    <b>(ii) Carriers of current:</b><br>
    • In the external wire: <strong>Electrons</strong> carry the current from zinc anode to silver cathode.<br>
    • In the internal solution: <strong>Ions</strong> carry the current through the salt bridge and electrolytic solutions.<br><br>
    <b>(iii) Individual electrode reactions:</b><br>
    • <strong>At Anode (Oxidation):</strong> $\\text{Zn}(s) \\rightarrow \\text{Zn}^{2+}(aq) + 2e^-$<br>
    • <strong>At Cathode (Reduction):</strong> $2\\text{Ag}^+(aq) + 2e^- \\rightarrow 2\\text{Ag}(s)$
  </div>`,
  '3 Marks',
  [
    ['Correct cell notation with salt bridge representation', '1 Mark'],
    ['(i) Zinc anode as negatively charged and (ii) current carriers (electrons and ions)', '1 Mark'],
    ['(iii) Anode and cathode half-cell reactions', '1 Mark']
  ]
));

// Exercise 2.4
questions.push(createQCard(
  'c12c-ch2-q19', 'Question 2.4', 'NCERT Exercise',
  'Calculate the standard cell potentials of galvanic cells in which the following reactions take place:<br>(i) $2\\text{Cr}(s) + 3\\text{Cd}^{2+}(aq) \\rightarrow 2\\text{Cr}^{3+}(aq) + 3\\text{Cd}(s)$<br>(ii) $\\text{Fe}^{2+}(aq) + \\text{Ag}^+(aq) \\rightarrow \\text{Fe}^{3+}(aq) + \\text{Ag}(s)$<br>Calculate the $\\Delta_r G^\\circ$ and equilibrium constant of the reactions.',
  `<div class="step">
    <b>(i) Reaction 1: $2\\text{Cr}(s) + 3\\text{Cd}^{2+} \\rightarrow 2\\text{Cr}^{3+} + 3\\text{Cd}(s)$</b><br>
    Standard potentials: $E^\\circ_{\\text{Cd}^{2+}/\\text{Cd}} = -0.40\\text{ V}$, $E^\\circ_{\\text{Cr}^{3+}/\\text{Cr}} = -0.74\\text{ V}$, $n = 6$.<br>
    $$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = -0.40 - (-0.74) = \\mathbf{+0.34\\text{ V}}$$<br>
    $$\\Delta_r G^\\circ = -n F E^\\circ = -6 \\times 96487 \\times 0.34 = -196833.48\\text{ J} = \\mathbf{-196.83\\text{ kJ mol}^{-1}}$$<br>
    $$\\log K = \\frac{n E^\\circ}{0.0591} = \\frac{6 \\times 0.34}{0.0591} = 34.5178 \\implies K = \\mathbf{3.29 \\times 10^{34}}$$<br><br>

    <b>(ii) Reaction 2: $\\text{Fe}^{2+} + \\text{Ag}^+ \\rightarrow \\text{Fe}^{3+} + \\text{Ag}(s)$</b><br>
    Standard potentials: $E^\\circ_{\\text{Ag}^+/\\text{Ag}} = +0.80\\text{ V}$, $E^\\circ_{\\text{Fe}^{3+}/\\text{Fe}^{2+}} = +0.77\\text{ V}$, $n = 1$.<br>
    $$E^\\circ_{\\text{cell}} = 0.80 - 0.77 = \\mathbf{+0.03\\text{ V}}$$<br>
    $$\\Delta_r G^\\circ = -1 \\times 96487 \\times 0.03 = -2894.61\\text{ J} = \\mathbf{-2.89\\text{ kJ mol}^{-1}}$$<br>
    $$\\log K = \\frac{1 \\times 0.03}{0.0591} = 0.5076 \\implies K = \\text{Antilog}(0.5076) = \\mathbf{3.22}$$
  </div>`,
  '4 Marks',
  [
    ['(i) $E^\\circ_{\\text{cell}} = 0.34\\text{ V}, \\Delta_r G^\\circ = -196.83\\text{ kJ}, K = 3.29 \\times 10^{34}$', '2 Marks'],
    ['(ii) $E^\\circ_{\\text{cell}} = 0.03\\text{ V}, \\Delta_r G^\\circ = -2.89\\text{ kJ}, K = 3.22$', '2 Marks']
  ]
));

// Exercise 2.5
questions.push(createQCard(
  'c12c-ch2-q20', 'Question 2.5', 'NCERT Exercise',
  'Write the Nernst equation and emf of the following cells at $298\\text{ K}$:<br>(i) $\\text{Mg}(s)|\\text{Mg}^{2+}(0.001\\text{ M})||\\text{Cu}^{2+}(0.0001\\text{ M})|\\text{Cu}(s)$<br>(ii) $\\text{Fe}(s)|\\text{Fe}^{2+}(0.001\\text{ M})||\\text{H}^+(1\\text{ M})|\\text{H}_2(g, 1\\text{ bar})|\\text{Pt}(s)$<br>(iii) $\\text{Sn}(s)|\\text{Sn}^{2+}(0.050\\text{ M})||\\text{H}^+(0.020\\text{ M})|\\text{H}_2(g, 1\\text{ bar})|\\text{Pt}(s)$<br>(iv) $\\text{Pt}(s)|\\text{Br}_2(l)|\\text{Br}^-(0.010\\text{ M})||\\text{H}^+(0.030\\text{ M})|\\text{H}_2(g, 1\\text{ bar})|\\text{Pt}(s)$.',
  `<div class="step">
    <b>(i) Mg-Cu Cell:</b><br>
    $\\text{Mg} + \\text{Cu}^{2+} \\rightarrow \\text{Mg}^{2+} + \\text{Cu}$, $n = 2$, $E^\\circ_{\\text{cell}} = 0.34 - (-2.37) = 2.71\\text{ V}$<br>
    $$E = 2.71 - \\frac{0.0591}{2} \\log \\frac{10^{-3}}{10^{-4}} = 2.71 - 0.02955(1) = \\mathbf{2.68\\text{ V}}$$<br><br>

    <b>(ii) Fe-H Cell:</b><br>
    $\\text{Fe} + 2\\text{H}^+ \\rightarrow \\text{Fe}^{2+} + \\text{H}_2$, $n = 2$, $E^\\circ_{\\text{cell}} = 0 - (-0.44) = 0.44\\text{ V}$<br>
    $$E = 0.44 - \\frac{0.0591}{2} \\log \\frac{0.001}{(1)^2} = 0.44 - 0.02955(-3) = 0.44 + 0.0886 = \\mathbf{0.529\\text{ V}}$$<br><br>

    <b>(iii) Sn-H Cell:</b><br>
    $\\text{Sn} + 2\\text{H}^+ \\rightarrow \\text{Sn}^{2+} + \\text{H}_2$, $n = 2$, $E^\\circ_{\\text{cell}} = 0 - (-0.14) = 0.14\\text{ V}$<br>
    $$Q = \\frac{0.050}{(0.020)^2} = \\frac{0.050}{0.0004} = 125$$<br>
    $$E = 0.14 - \\frac{0.0591}{2} \\log(125) = 0.14 - 0.02955(2.0969) = 0.14 - 0.062 = \\mathbf{0.078\\text{ V}}$$<br><br>

    <b>(iv) Br-H Cell:</b><br>
    $2\\text{Br}^- + 2\\text{H}^+ \\rightarrow \\text{Br}_2 + \\text{H}_2$, $n = 2$, $E^\\circ_{\\text{cell}} = 0 - 1.09 = -1.09\\text{ V}$<br>
    $$E = -1.09 - \\frac{0.0591}{2} \\log \\frac{1}{(0.010)^2(0.030)^2} = -1.09 - 0.02955 \\log(1.11 \\times 10^7) = -1.09 - 0.208 = \\mathbf{-1.298\\text{ V}}$$
  </div>`,
  '4 Marks',
  [
    ['(i) Nernst calculation $E = 2.68\\text{ V}$', '1 Mark'],
    ['(ii) Nernst calculation $E = 0.529\\text{ V}$', '1 Mark'],
    ['(iii) Nernst calculation $E = 0.078\\text{ V}$', '1 Mark'],
    ['(iv) Nernst calculation $E = -1.298\\text{ V}$', '1 Mark']
  ]
));

// Exercise 2.6
questions.push(createQCard(
  'c12c-ch2-q21', 'Question 2.6', 'NCERT Exercise',
  'In the button cells widely used in watches and other devices the following reaction takes place:<br>$$\\text{Zn}(s) + \\text{Ag}_2\\text{O}(s) + \\text{H}_2\\text{O}(l) \\rightarrow \\text{Zn}^{2+}(aq) + 2\\text{Ag}(s) + 2\\text{OH}^-(aq)$$<br>Determine $\\Delta_r G^\\circ$ and $E^\\circ$ for the reaction.',
  `<div class="step">
    <b>1. Half-cell reactions:</b><br>
    Anode: $\\text{Zn}(s) \\rightarrow \\text{Zn}^{2+} + 2e^-, \\quad E^\\circ = -0.76\\text{ V}$<br>
    Cathode: $\\text{Ag}_2\\text{O}(s) + \\text{H}_2\\text{O} + 2e^- \\rightarrow 2\\text{Ag}(s) + 2\\text{OH}^-, \\quad E^\\circ = +0.344\\text{ V}$<br>
    $$n = 2$$<br><br>
    <b>2. Standard Cell Potential ($E^\\circ$):</b><br>
    $$E^\\circ = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = 0.344 - (-0.76) = \\mathbf{1.104\\text{ V}}$$<br><br>
    <b>3. Standard Gibbs Free Energy ($\\Delta_r G^\\circ$):</b><br>
    $$\\Delta_r G^\\circ = -n F E^\\circ = -2 \\times 96487 \\times 1.104 = -213043\\text{ J mol}^{-1} = \\mathbf{-213.04\\text{ kJ mol}^{-1}}$$
  </div>`,
  '2 Marks',
  [
    ['Identification of $n = 2$ and $E^\\circ = 1.104\\text{ V}$', '1 Mark'],
    ['Calculation of $\\Delta_r G^\\circ = -213.04\\text{ kJ mol}^{-1}$', '1 Mark']
  ]
));

// Exercise 2.7
questions.push(createQCard(
  'c12c-ch2-q22', 'Question 2.7', 'NCERT Exercise',
  'Define conductivity and molar conductivity for the solution of an electrolyte. Discuss their variation with concentration.',
  `<div class="step">
    <b>1. Definitions:</b><br>
    • <strong>Conductivity ($\\kappa$):</strong> Specific conductance is the conductance of a solution of $1\\text{ cm}$ length and $1\\text{ cm}^2$ cross-sectional area (conductance of $1\\text{ cm}^3$ solution). Unit: $\\text{S cm}^{-1}$.<br>
    • <strong>Molar Conductivity ($\\Lambda_m$):</strong> It is the conducting power of all the ions produced by dissolving one mole of an electrolyte in a given volume of solution.
    $$\\Lambda_m = \\frac{\\kappa \\times 1000}{C}$$
    Unit: $\\text{S cm}^2\\text{ mol}^{-1}$.<br><br>
    <b>2. Variation with Concentration:</b><br>
    • <em>Conductivity ($\\kappa$):</em> Decreases with decrease in concentration (upon dilution) for both strong and weak electrolytes because the number of current-carrying ions per unit volume decreases.<br>
    • <em>Molar Conductivity ($\\Lambda_m$):</em> Increases with decrease in concentration (upon dilution). For strong electrolytes, it increases gradually as interionic attractions decrease (governed by Debye-Hückel-Onsager equation: $\\Lambda_m = \\Lambda_m^\\circ - A\\sqrt{C}$). For weak electrolytes, it increases steeply at infinite dilution due to a rapid increase in the degree of dissociation ($\\alpha$).
  </div>`,
  '3 Marks',
  [
    ['Definitions and units of $\\kappa$ and $\\Lambda_m$', '1.5 Marks'],
    ['Variation with concentration/dilution explained for both', '1.5 Marks']
  ]
));

// Exercise 2.8
questions.push(createQCard(
  'c12c-ch2-q23', 'Question 2.8', 'NCERT Exercise',
  'The conductivity of $0.20\\text{ M}$ solution of $\\text{KCl}$ at $298\\text{ K}$ is $0.0248\\text{ S cm}^{-1}$. Calculate its molar conductivity.',
  `<div class="step">
    <b>1. Given:</b><br>
    Concentration $C = 0.20\\text{ M} = 0.20\\text{ mol L}^{-1}$<br>
    Conductivity $\\kappa = 0.0248\\text{ S cm}^{-1}$<br><br>
    <b>2. Molar Conductivity Formula:</b><br>
    $$\\Lambda_m = \\frac{\\kappa \\times 1000}{C}$$<br>
    $$\\Lambda_m = \\frac{0.0248\\text{ S cm}^{-1} \\times 1000}{0.20\\text{ mol L}^{-1}} = \\frac{24.8}{0.20} = \\mathbf{124\\text{ S cm}^2\\text{ mol}^{-1}}$$
  </div>`,
  '2 Marks',
  [
    ['Formula $\\Lambda_m = \\frac{\\kappa \\times 1000}{C}$', '0.75 Mark'],
    ['Substitution and final value with unit $= 124\\text{ S cm}^2\\text{ mol}^{-1}$', '1.25 Marks']
  ]
));

// Exercise 2.9
questions.push(createQCard(
  'c12c-ch2-q24', 'Question 2.9', 'NCERT Exercise',
  'The resistance of a conductivity cell containing $0.001\\text{ M } \\text{KCl}$ solution at $298\\text{ K}$ is $1500\\;\\Omega$. What is the cell constant if conductivity of $0.001\\text{ M } \\text{KCl}$ solution at $298\\text{ K}$ is $0.146 \\times 10^{-3}\\text{ S cm}^{-1}$?',
  `<div class="step">
    <b>1. Given:</b><br>
    Resistance $R = 1500\\;\\Omega$<br>
    Conductivity $\\kappa = 0.146 \\times 10^{-3}\\text{ S cm}^{-1}$<br><br>
    <b>2. Formula for Cell Constant ($G^*$):</b><br>
    $$\\text{Conductivity} = \\frac{\\text{Cell Constant}}{\\text{Resistance}} \\implies G^* = \\kappa \\times R$$<br>
    $$G^* = 0.146 \\times 10^{-3}\\text{ S cm}^{-1} \\times 1500\\;\\Omega = 0.219\\text{ cm}^{-1}$$<br><br>
    <b>Conclusion:</b> The cell constant is $\\mathbf{0.219\\text{ cm}^{-1} (\\text{or } 21.9\\text{ m}^{-1})}$.
  </div>`,
  '2 Marks',
  [
    ['Formula $\\text{Cell Constant } G^* = \\kappa \\times R$', '1 Mark'],
    ['Calculation and answer $0.219\\text{ cm}^{-1}$', '1 Mark']
  ]
));

// Exercise 2.10
questions.push(createQCard(
  'c12c-ch2-q25', 'Question 2.10', 'NCERT Exercise',
  'The conductivity of $\\text{NaCl}$ solutions at $298\\text{ K}$ at different concentrations are: $0.001\\text{ M } (1.237 \\times 10^{-4}\\text{ S cm}^{-1})$, $0.010\\text{ M } (1.185 \\times 10^{-3}\\text{ S cm}^{-1})$, $0.020\\text{ M } (2.315 \\times 10^{-3}\\text{ S cm}^{-1})$, $0.050\\text{ M } (5.553 \\times 10^{-3}\\text{ S cm}^{-1})$, $0.100\\text{ M } (1.067 \\times 10^{-2}\\text{ S cm}^{-1})$. Calculate $\\Lambda_m$ for all concentrations and draw a plot between $\\Lambda_m$ and $C^{1/2}$ and find the value of $\\Lambda_m^\\circ$.',
  `<div class="step">
    <b>1. Tabulated values of $C^{1/2}$ and $\\Lambda_m = \\frac{\\kappa \\times 1000}{C}$:</b><br>
    <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.86rem;">
      <tr style="background:#f1f5f9;">
        <th style="padding:6px; border:1px solid #cbd5e1;">$C\\text{ (M)}$</th>
        <th style="padding:6px; border:1px solid #cbd5e1;">$C^{1/2}\\text{ (M}^{1/2}\\text{)}$</th>
        <th style="padding:6px; border:1px solid #cbd5e1;">$\\kappa\\text{ (S cm}^{-1}\\text{)}$</th>
        <th style="padding:6px; border:1px solid #cbd5e1;">$\\Lambda_m\\text{ (S cm}^2\\text{ mol}^{-1}\\text{)}$</th>
      </tr>
      <tr><td style="padding:4px; border:1px solid #cbd5e1;">0.001</td><td style="padding:4px; border:1px solid #cbd5e1;">0.0316</td><td style="padding:4px; border:1px solid #cbd5e1;">$1.237 \\times 10^{-4}$</td><td style="padding:4px; border:1px solid #cbd5e1;">123.7</td></tr>
      <tr><td style="padding:4px; border:1px solid #cbd5e1;">0.010</td><td style="padding:4px; border:1px solid #cbd5e1;">0.1000</td><td style="padding:4px; border:1px solid #cbd5e1;">$1.185 \\times 10^{-3}$</td><td style="padding:4px; border:1px solid #cbd5e1;">118.5</td></tr>
      <tr><td style="padding:4px; border:1px solid #cbd5e1;">0.020</td><td style="padding:4px; border:1px solid #cbd5e1;">0.1414</td><td style="padding:4px; border:1px solid #cbd5e1;">$2.315 \\times 10^{-3}$</td><td style="padding:4px; border:1px solid #cbd5e1;">115.8</td></tr>
      <tr><td style="padding:4px; border:1px solid #cbd5e1;">0.050</td><td style="padding:4px; border:1px solid #cbd5e1;">0.2236</td><td style="padding:4px; border:1px solid #cbd5e1;">$5.553 \\times 10^{-3}$</td><td style="padding:4px; border:1px solid #cbd5e1;">111.1</td></tr>
      <tr><td style="padding:4px; border:1px solid #cbd5e1;">0.100</td><td style="padding:4px; border:1px solid #cbd5e1;">0.3162</td><td style="padding:4px; border:1px solid #cbd5e1;">$1.067 \\times 10^{-2}$</td><td style="padding:4px; border:1px solid #cbd5e1;">106.7</td></tr>
    </table>
    <b>2. Graphical Extrapolation:</b><br>
    Plotting $\\Lambda_m$ against $C^{1/2}$ yields a straight line with a negative slope, following Debye-Hückel-Onsager equation:
    $$\\Lambda_m = \\Lambda_m^\\circ - A\\sqrt{C}$$
    Extrapolating the line to $C^{1/2} = 0$ (zero concentration) gives the intercept on the y-axis:
    $$\\mathbf{\\Lambda_m^\\circ \\approx 124.0\\text{ S cm}^2\\text{ mol}^{-1}}$$
  </div>`,
  '3 Marks',
  [
    ['Calculation of $\\Lambda_m$ table for all 5 concentrations', '1.5 Marks'],
    ['Debye-Hückel-Onsager equation explanation and extrapolated $\\Lambda_m^\\circ = 124.0\\text{ S cm}^2\\text{ mol}^{-1}$', '1.5 Marks']
  ]
));

// Exercise 2.11
questions.push(createQCard(
  'c12c-ch2-q26', 'Question 2.11', 'NCERT Exercise',
  'Conductivity of $0.00241\\text{ M}$ acetic acid is $7.896 \\times 10^{-5}\\text{ S cm}^{-1}$. Calculate its molar conductivity. If $\\Lambda_m^\\circ$ for acetic acid is $390.5\\text{ S cm}^2\\text{ mol}^{-1}$, what is its dissociation constant?',
  `<div class="step">
    <b>1. Molar conductivity ($\\Lambda_m$):</b><br>
    $$\\Lambda_m = \\frac{\\kappa \\times 1000}{C} = \\frac{7.896 \\times 10^{-5}\\text{ S cm}^{-1} \\times 1000}{0.00241\\text{ mol L}^{-1}} = \\frac{0.07896}{0.00241} = \\mathbf{32.76\\text{ S cm}^2\\text{ mol}^{-1}}$$<br><br>
    <b>2. Degree of dissociation ($\\alpha$):</b><br>
    $$\\alpha = \\frac{\\Lambda_m}{\\Lambda_m^\\circ} = \\frac{32.76}{390.5} = \\mathbf{0.084}$$<br><br>
    <b>3. Dissociation constant ($K_a$):</b><br>
    $$K_a = \\frac{C\\alpha^2}{1 - \\alpha} = \\frac{0.00241 \\times (0.084)^2}{1 - 0.084} = \\frac{0.00241 \\times 0.007056}{0.916} = \\mathbf{1.86 \\times 10^{-5}\\text{ mol L}^{-1}}$$
  </div>`,
  '3 Marks',
  [
    ['Calculation of $\\Lambda_m = 32.76\\text{ S cm}^2\\text{ mol}^{-1}$', '1 Mark'],
    ['Calculation of $\\alpha = 0.084$', '1 Mark'],
    ['Calculation of $K_a = 1.86 \\times 10^{-5}\\text{ mol L}^{-1}$', '1 Mark']
  ]
));

// Exercise 2.12
questions.push(createQCard(
  'c12c-ch2-q27', 'Question 2.12', 'NCERT Exercise',
  'How much charge is required for the following reductions:<br>(i) $1\\text{ mol}$ of $\\text{Al}^{3+}$ to $\\text{Al}$<br>(ii) $1\\text{ mol}$ of $\\text{Cu}^{2+}$ to $\\text{Cu}$<br>(iii) $1\\text{ mol}$ of $\\text{MnO}_4^-$ to $\\text{Mn}^{2+}$?',
  `<div class="step">
    <b>(i) $\\text{Al}^{3+} + 3e^- \\rightarrow \\text{Al}$:</b><br>
    $1\\text{ mol of } \\text{Al}^{3+}$ requires $3\\text{ mol of electrons} = 3\\text{ F}$<br>
    $$Q = 3 \\times 96487\\text{ C} = \\mathbf{2.895 \\times 10^5\\text{ C}}$$<br><br>

    <b>(ii) $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$:</b><br>
    $1\\text{ mol of } \\text{Cu}^{2+}$ requires $2\\text{ mol of electrons} = 2\\text{ F}$<br>
    $$Q = 2 \\times 96487\\text{ C} = \\mathbf{1.93 \\times 10^5\\text{ C}}$$<br><br>

    <b>(iii) $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$:</b><br>
    Oxidation state of Mn changes from $+7$ to $+2$ (requires $5e^-$ per ion) = $5\\text{ F}$<br>
    $$Q = 5 \\times 96487\\text{ C} = \\mathbf{4.825 \\times 10^5\\text{ C}}$$
  </div>`,
  '3 Marks',
  [
    ['(i) $3\\text{ F} = 2.895 \\times 10^5\\text{ C}$', '1 Mark'],
    ['(ii) $2\\text{ F} = 1.93 \\times 10^5\\text{ C}$', '1 Mark'],
    ['(iii) $5\\text{ F} = 4.825 \\times 10^5\\text{ C}$', '1 Mark']
  ]
));

// Exercise 2.13
questions.push(createQCard(
  'c12c-ch2-q28', 'Question 2.13', 'NCERT Exercise',
  'How much electricity in terms of Faraday is required to produce:<br>(i) $20.0\\text{ g}$ of $\\text{Ca}$ from molten $\\text{CaCl}_2$<br>(ii) $40.0\\text{ g}$ of $\\text{Al}$ from molten $\\text{Al}_2\\text{O}_3$?',
  `<div class="step">
    <b>(i) Production of Ca from $\\text{CaCl}_2$:</b><br>
    $$\\text{Ca}^{2+} + 2e^- \\rightarrow \\text{Ca}$$<br>
    $1\\text{ mol of Ca } (40\\text{ g})$ requires $2\\text{ F}$.<br>
    $$\\text{Electricity required for } 20.0\\text{ g of Ca} = \\frac{2\\text{ F}}{40\\text{ g}} \\times 20\\text{ g} = \\mathbf{1.0\\text{ F}}$$<br><br>

    <b>(ii) Production of Al from $\\text{Al}_2\\text{O}_3$:</b><br>
    $$\\text{Al}^{3+} + 3e^- \\rightarrow \\text{Al}$$<br>
    $1\\text{ mol of Al } (27\\text{ g})$ requires $3\\text{ F}$.<br>
    $$\\text{Electricity required for } 40.0\\text{ g of Al} = \\frac{3\\text{ F}}{27\\text{ g}} \\times 40\\text{ g} = \\frac{120}{27}\\text{ F} = \\mathbf{4.44\\text{ F}}$$
  </div>`,
  '2 Marks',
  [
    ['(i) Calculation for Ca $= 1.0\\text{ F}$', '1 Mark'],
    ['(ii) Calculation for Al $= 4.44\\text{ F}$', '1 Mark']
  ]
));

// Exercise 2.14
questions.push(createQCard(
  'c12c-ch2-q29', 'Question 2.14', 'NCERT Exercise',
  'How much electricity is required in coulomb for the oxidation of:<br>(i) $1\\text{ mol}$ of $\\text{H}_2\\text{O}$ to $\\text{O}_2$<br>(ii) $1\\text{ mol}$ of $\\text{FeO}$ to $\\text{Fe}_2\\text{O}_3$?',
  `<div class="step">
    <b>(i) Oxidation of $\\text{H}_2\\text{O}$ to $\\text{O}_2$:</b><br>
    $$\\text{H}_2\\text{O} \\rightarrow 2\\text{H}^+ + \\frac{1}{2}\\text{O}_2 + 2e^-$$<br>
    $1\\text{ mol of } \\text{H}_2\\text{O}$ releases $2\\text{ moles of electrons} = 2\\text{ F}$.<br>
    $$Q = 2 \\times 96487\\text{ C} = \\mathbf{1.93 \\times 10^5\\text{ C}}$$<br><br>

    <b>(ii) Oxidation of $\\text{FeO}$ to $\\text{Fe}_2\\text{O}_3$:</b><br>
    $$\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+} + e^-$$<br>
    $1\\text{ mol of FeO}$ involves oxidation of $1\\text{ mol of } \\text{Fe}^{2+}$, releasing $1\\text{ mole of electrons} = 1\\text{ F}$.<br>
    $$Q = 1 \\times 96487\\text{ C} = \\mathbf{9.65 \\times 10^4\\text{ C } (96487\\text{ C})}$$
  </div>`,
  '2 Marks',
  [
    ['(i) Half-reaction and calculation for $\\text{H}_2\\text{O} = 1.93 \\times 10^5\\text{ C}$', '1 Mark'],
    ['(ii) Half-reaction and calculation for $\\text{FeO} = 9.65 \\times 10^4\\text{ C}$', '1 Mark']
  ]
));

// Exercise 2.15
questions.push(createQCard(
  'c12c-ch2-q30', 'Question 2.15', 'NCERT Exercise',
  'A solution of $\\text{Ni}(\\text{NO}_3)_2$ is electrolysed between platinum electrodes using a current of $5\\text{ amperes}$ for $20\\text{ minutes}$. What mass of $\\text{Ni}$ is deposited at the cathode?',
  `<div class="step">
    <b>1. Given:</b><br>
    $I = 5\\text{ A}$, $t = 20\\text{ min} = 20 \\times 60 = 1200\\text{ s}$<br>
    Quantity of electricity $Q = I \\times t = 5 \\times 1200 = 6000\\text{ C}$<br>
    Atomic mass of Ni = $58.71\\text{ g mol}^{-1}$<br><br>
    <b>2. Cathode reduction:</b><br>
    $$\\text{Ni}^{2+} + 2e^- \\rightarrow \\text{Ni}$$<br>
    $2\\text{ F} = 2 \\times 96487\\text{ C}$ deposits $1\\text{ mol of Ni } (58.71\\text{ g})$.<br><br>
    <b>3. Mass of Ni deposited:</b><br>
    $$w = \\frac{M \\times Q}{n \\times F} = \\frac{58.71 \\times 6000}{2 \\times 96487} = \\frac{352260}{192974} = \\mathbf{1.825\\text{ g } (\\approx 1.83\\text{ g})}$$
  </div>`,
  '2 Marks',
  [
    ['Calculation of total charge $Q = 6000\\text{ C}$', '0.75 Mark'],
    ['Application of Faraday\'s law and mass of Ni $= 1.825\\text{ g}$', '1.25 Marks']
  ]
));

// Exercise 2.16
questions.push(createQCard(
  'c12c-ch2-q31', 'Question 2.16', 'NCERT Exercise',
  'Three electrolytic cells $\\text{A, B, C}$ containing solutions of $\\text{ZnSO}_4$, $\\text{AgNO}_3$ and $\\text{CuSO}_4$, respectively are connected in series. A steady current of $1.5\\text{ amperes}$ was passed through them until $1.45\\text{ g}$ of silver deposited at the cathode of cell B. How long did the current flow? What mass of copper and zinc were deposited?',
  `<div class="step">
    <b>1. Time of current flow (from cell B with $\\text{Ag}$):</b><br>
    $$\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}, \\quad M(\\text{Ag}) = 108\\text{ g mol}^{-1}$$<br>
    $108\\text{ g Ag}$ is deposited by $96487\\text{ C}$.<br>
    $$Q = \\frac{96487 \\times 1.45\\text{ g}}{108\\text{ g}} = 1295.43\\text{ C}$$<br>
    $$t = \\frac{Q}{I} = \\frac{1295.43\\text{ C}}{1.5\\text{ A}} = 863.6\\text{ s} = \\mathbf{14\\text{ minutes } 24\\text{ seconds}}$$<br><br>

    <b>2. Mass of copper deposited (cell C):</b><br>
    $$\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}, \\quad M(\\text{Cu}) = 63.5\\text{ g mol}^{-1}$$<br>
    $$w_{\\text{Cu}} = \\frac{M \\times Q}{2 \\times F} = \\frac{63.5 \\times 1295.43}{2 \\times 96487} = \\frac{82259.8}{192974} = \\mathbf{0.426\\text{ g}}$$<br><br>

    <b>3. Mass of zinc deposited (cell A):</b><br>
    $$\\text{Zn}^{2+} + 2e^- \\rightarrow \\text{Zn}, \\quad M(\\text{Zn}) = 65.38\\text{ g mol}^{-1}$$<br>
    $$w_{\\text{Zn}} = \\frac{M \\times Q}{2 \\times F} = \\frac{65.38 \\times 1295.43}{2 \\times 96487} = \\frac{84695.2}{192974} = \\mathbf{0.439\\text{ g}}$$
  </div>`,
  '4 Marks',
  [
    ['Calculation of charge $Q = 1295.43\\text{ C}$ and time $t = 863.6\\text{ s}$', '1.5 Marks'],
    ['Mass of Cu deposited $= 0.426\\text{ g}$', '1.25 Marks'],
    ['Mass of Zn deposited $= 0.439\\text{ g}$', '1.25 Marks']
  ]
));

// Exercise 2.17
questions.push(createQCard(
  'c12c-ch2-q32', 'Question 2.17', 'NCERT Exercise',
  'Using the standard electrode potentials, predict if the reaction between the following is feasible:<br>(i) $\\text{Fe}^{3+}(aq)$ and $\\text{I}^-(aq)$<br>(ii) $\\text{Ag}^+(aq)$ and $\\text{Cu}(s)$<br>(iii) $\\text{Fe}^{3+}(aq)$ and $\\text{Br}^-(aq)$<br>(iv) $\\text{Ag}(s)$ and $\\text{Fe}^{3+}(aq)$<br>(v) $\\text{Br}_2(aq)$ and $\\text{Fe}^{2+}(aq)$.',
  `<div class="step">
    <b>Criterion for Feasibility:</b> A redox reaction is feasible if $E^\\circ_{\\text{cell}} > 0$.<br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>(i) $\\text{Fe}^{3+} + \\text{I}^-$:</strong>
      $$2\\text{Fe}^{3+} + 2\\text{I}^- \\rightarrow 2\\text{Fe}^{2+} + \\text{I}_2$$
      $$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{Fe}^{3+}/\\text{Fe}^{2+}} - E^\\circ_{\\text{I}_2/\\text{I}^-} = 0.77 - 0.54 = +0.23\\text{ V} > 0 \\implies \\mathbf{Feasible}$$</li>
      <li><strong>(ii) $\\text{Ag}^+ + \\text{Cu}$:</strong>
      $$2\\text{Ag}^+ + \\text{Cu} \\rightarrow 2\\text{Ag} + \\text{Cu}^{2+}$$
      $$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{Ag}^+/\\text{Ag}} - E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = 0.80 - 0.34 = +0.46\\text{ V} > 0 \\implies \\mathbf{Feasible}$$</li>
      <li><strong>(iii) $\\text{Fe}^{3+} + \\text{Br}^-$:</strong>
      $$2\\text{Fe}^{3+} + 2\\text{Br}^- \\rightarrow 2\\text{Fe}^{2+} + \\text{Br}_2$$
      $$E^\\circ_{\\text{cell}} = 0.77 - 1.09 = -0.32\\text{ V} < 0 \\implies \\mathbf{Not\\; Feasible}$$</li>
      <li><strong>(iv) $\\text{Ag} + \\text{Fe}^{3+}$:</strong>
      $$\\text{Ag} + \\text{Fe}^{3+} \\rightarrow \\text{Ag}^+ + \\text{Fe}^{2+}$$
      $$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{Fe}^{3+}/\\text{Fe}^{2+}} - E^\\circ_{\\text{Ag}^+/\\text{Ag}} = 0.77 - 0.80 = -0.03\\text{ V} < 0 \\implies \\mathbf{Not\\; Feasible}$$</li>
      <li><strong>(v) $\\text{Br}_2 + \\text{Fe}^{2+}$:</strong>
      $$\\text{Br}_2 + 2\\text{Fe}^{2+} \\rightarrow 2\\text{Br}^- + 2\\text{Fe}^{3+}$$
      $$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{Br}_2/\\text{Br}^-} - E^\\circ_{\\text{Fe}^{3+}/\\text{Fe}^{2+}} = 1.09 - 0.77 = +0.32\\text{ V} > 0 \\implies \\mathbf{Feasible}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Criteria $E^\\circ_{\\text{cell}} > 0$ for feasibility', '0.5 Mark'],
    ['(i), (ii), and (v) identified as Feasible with calculated cell potentials', '1.5 Marks'],
    ['(iii) and (iv) identified as Not Feasible with negative cell potentials', '1 Mark']
  ]
));

// Exercise 2.18
questions.push(createQCard(
  'c12c-ch2-q33', 'Question 2.18', 'NCERT Exercise',
  'Predict the products of electrolysis in each of the following:<br>(i) An aqueous solution of $\\text{AgNO}_3$ with silver electrodes.<br>(ii) An aqueous solution of $\\text{AgNO}_3$ with platinum electrodes.<br>(iii) A dilute solution of $\\text{H}_2\\text{SO}_4$ with platinum electrodes.<br>(iv) An aqueous solution of $\\text{CuCl}_2$ with platinum electrodes.',
  `<div class="step">
    <b>Electrolysis Products:</b><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>(i) Aqueous $\\text{AgNO}_3$ with silver electrodes (Attackable electrodes):</strong>
        <br>• At Cathode: $\\text{Ag}^+(aq) + e^- \\rightarrow \\text{Ag}(s)$ [Silver deposits]
        <br>• At Anode: $\\text{Ag}(s) \\rightarrow \\text{Ag}^+(aq) + e^-$ [Silver anode dissolves]
        <br><em>Result: Silver deposits at cathode; silver dissolves at anode.</em></li>
      <li><strong>(ii) Aqueous $\\text{AgNO}_3$ with platinum electrodes (Inert electrodes):</strong>
        <br>• At Cathode: $\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}(s)$ (since $E^\\circ_{\\text{Ag}^+/\\text{Ag}} = +0.80\\text{ V} > E^\\circ_{\\text{H}^+/\\text{H}_2}$) [Silver deposits]
        <br>• At Anode: $2\\text{H}_2\\text{O} \\rightarrow \\text{O}_2(g) + 4\\text{H}^+ + 4e^-$ [$\\text{O}_2$ gas evolved]
        <br><em>Result: Silver at cathode; $\\text{O}_2$ gas at anode.</em></li>
      <li><strong>(iii) Dilute $\\text{H}_2\\text{SO}_4$ with platinum electrodes:</strong>
        <br>• At Cathode: $2\\text{H}^+ + 2e^- \\rightarrow \\text{H}_2(g)$ [$\\text{H}_2$ gas evolved]
        <br>• At Anode: $2\\text{H}_2\\text{O} \\rightarrow \\text{O}_2(g) + 4\\text{H}^+ + 4e^-$ [$\\text{O}_2$ gas evolved]
        <br><em>Result: $\\text{H}_2$ gas at cathode; $\\text{O}_2$ gas at anode (electrolysis of water).</em></li>
      <li><strong>(iv) Aqueous $\\text{CuCl}_2$ with platinum electrodes:</strong>
        <br>• At Cathode: $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}(s)$ ($E^\\circ = +0.34\\text{ V}$) [Copper deposits]
        <br>• At Anode: $2\\text{Cl}^- \\rightarrow \\text{Cl}_2(g) + 2e^-$ [$\\text{Cl}_2$ gas evolved due to oxygen overpotential]
        <br><em>Result: Copper at cathode; $\\text{Cl}_2$ gas at anode.</em></li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['(i) Silver deposited at cathode and silver dissolved at anode', '1 Mark'],
    ['(ii) Silver at cathode and oxygen gas at anode', '1 Mark'],
    ['(iii) Hydrogen gas at cathode and oxygen gas at anode', '1 Mark'],
    ['(iv) Copper deposited at cathode and chlorine gas evolved at anode', '1 Mark']
  ]
));

console.log(`\nCompiling Chapter 2: Electrochemistry (Total: ${questions.length} Qs)...`);
saveChapter(chNum, chTitle, svgDiagram, exTitle, questions, 'Chemical Kinetics');
console.log(`Chapter 2: Electrochemistry successfully saved!`);
