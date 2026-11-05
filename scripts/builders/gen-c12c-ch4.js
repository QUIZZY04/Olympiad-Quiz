// scripts/builders/gen-c12c-ch4.js
// Class 12 Chemistry Chapter 4: The d- and f-Block Elements (d- एवं f-ब्लॉक के तत्व) (NCERT Rationalised 2026–27)
// Full Coverage: 10 In-Text Questions + 24 End-of-Chapter Exercises = 34 Questions Verbatim
const { createQCard, saveChapter } = require('./c12c-helper');

const chNum = 4;
const chTitle = 'The d- and f-Block Elements (d- एवं f-ब्लॉक के तत्व)';
const exTitle = 'NCERT Chapter 4: In-Text Questions (4.1–4.10) & End-of-Chapter Exercises (4.1–4.24)';

const svgDiagram = `
<div style="background:linear-gradient(135deg, #fdf4ff, #fae8ff); border:1px solid #f0abfc; border-radius:12px; padding:20px; margin-bottom:24px;">
  <h3 style="font-size:1.05rem; color:#86198f; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c026d3" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    d- & f-Block Elements: Core Concepts & Trends
  </h3>
  <svg viewBox="0 0 850 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
    <!-- Box 1: Electronic Config & Oxidation -->
    <rect x="15" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#c026d3" stroke-width="2"/>
    <text x="110" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#86198f">Configuration & States</text>
    <text x="110" y="70" text-anchor="middle" font-size="11" fill="#334155">(n-1)d¹⁻¹⁰ ns¹⁻²</text>
    <text x="110" y="94" text-anchor="middle" font-size="10" fill="#64748b">• Variable O.S. (Mn exhibits +2 to +7)</text>
    <text x="110" y="112" text-anchor="middle" font-size="10" fill="#64748b">• Stability of d⁰, d⁵, d¹⁰ shells</text>

    <!-- Box 2: Magnetic Moment & Color -->
    <rect x="225" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
    <text x="320" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">Magnetism & Color</text>
    <text x="320" y="72" text-anchor="middle" font-size="11" fill="#334155">μ = √[n(n+2)] BM</text>
    <text x="320" y="96" text-anchor="middle" font-size="10" fill="#64748b">• Paramagnetism from unpaired e⁻</text>
    <text x="320" y="114" text-anchor="middle" font-size="10" fill="#64748b">• d-d transitions impart vivid colors</text>

    <!-- Box 3: Lanthanoid Contraction -->
    <rect x="435" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
    <text x="530" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Lanthanoid Contraction</text>
    <text x="530" y="72" text-anchor="middle" font-size="11" fill="#334155">Poor shielding of 4f e⁻</text>
    <text x="530" y="96" text-anchor="middle" font-size="10" fill="#64748b">• Zr (160 pm) ≈ Hf (159 pm)</text>
    <text x="530" y="114" text-anchor="middle" font-size="10" fill="#64748b">• Basic strength: La(OH)₃ > Lu(OH)₃</text>

    <!-- Box 4: Important Compounds -->
    <rect x="645" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
    <text x="740" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">K₂Cr₂O₇ & KMnO₄</text>
    <text x="740" y="72" text-anchor="middle" font-size="11" fill="#334155">Powerful Oxidants</text>
    <text x="740" y="96" text-anchor="middle" font-size="10" fill="#64748b">• 2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O</text>
    <text x="740" y="114" text-anchor="middle" font-size="10" fill="#64748b">• MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</text>
  </svg>
</div>`;

const questions = [];

// ============================================================================
// PART 1: NCERT IN-TEXT QUESTIONS (4.1 to 4.10)
// ============================================================================

// Question 4.1 (In-Text)
questions.push(createQCard(
  'c12c-ch4-q1', 'In-Text 4.1', 'NCERT In-Text',
  'Silver atom has completely filled d orbitals ($4d^{10}$) in its ground state. How can you say that it is a transition element?',
  `<div class="step">
    <b>Definition of Transition Element:</b><br>
    A transition element is defined as an element which has partially filled (incompletely filled) $d$-orbitals in its ground state or in any one of its common oxidation states.<br><br>
    <b>Explanation for Silver ($Z = 47$):</b><br>
    The ground state electronic configuration of silver is $[\text{Kr}] 4d^{10} 5s^1$.<br>
    Although the silver atom has completely filled $4d$ orbitals ($4d^{10}$) in its neutral ground state, in its $+2$ oxidation state ($\text{Ag}^{2+}$, as in $\text{AgF}_2$), its electronic configuration is:
    $$\\text{Ag}^{2+}: [\\text{Kr}] 4d^9$$
    Since the $d$-subshell is incompletely filled ($4d^9$) in the $+2$ oxidation state, silver is classified as a <b>transition element</b>.
  </div>`,
  '2 Marks',
  [
    ['Definition of transition element (incompletely filled d-subshell)', '1 Mark'],
    ['Presence of partially filled 4d⁹ subshell in Ag²⁺ state (e.g., AgF₂)', '1 Mark']
  ]
));

// Question 4.2 (In-Text)
questions.push(createQCard(
  'c12c-ch4-q2', 'In-Text 4.2', 'NCERT In-Text',
  'In the series $\\text{Sc}$ ($Z = 21$) to $\\text{Zn}$ ($Z = 30$), the enthalpy of atomisation of zinc is the lowest, i.e., $126\\text{ kJ mol}^{-1}$. Why?',
  `<div class="step">
    <b>Reason:</b><br>
    Enthalpy of atomisation depends directly on the strength of metallic bonding in the crystal lattice. Strong metallic bonding arises from the involvement of unpaired electrons from both $(n-1)d$ and $ns$ orbitals in forming interatomic metallic bonds.<br><br>
    <b>Case of Zinc ($Z = 30$):</b><br>
    Zinc has the electronic configuration $[\text{Ar}] 3d^{10} 4s^2$. All electrons in the $3d$ subshell are fully paired ($3d^{10}$).<br>
    Due to the absence of unpaired $d$-electrons, the $d$-electrons do not participate effectively in interatomic metallic bonding. Hence, metallic bonding in zinc is exceptionally weak, accounting for its lowest enthalpy of atomisation ($126\\text{ kJ mol}^{-1}$).
  </div>`,
  '2 Marks',
  [
    ['Enthalpy of atomisation correlates with unpaired d-electrons and metallic bond strength', '1 Mark'],
    ['Zn has fully paired 3d¹⁰ 4s² configuration with no unpaired d-electrons', '1 Mark']
  ]
));

// Question 4.3 (In-Text)
questions.push(createQCard(
  'c12c-ch4-q3', 'In-Text 4.3', 'NCERT In-Text',
  'Which of the $3d$ series of the transition metals exhibits the largest number of oxidation states and why?',
  `<div class="step">
    <b>Answer: Manganese ($\text{Mn}$, $Z = 25$)</b> exhibits the largest number of oxidation states in the $3d$ series.<br><br>
    <b>Reason:</b><br>
    The electronic configuration of manganese is $[\text{Ar}] 3d^5 4s^2$.<br>
    Manganese has the maximum number of unpaired electrons (5 unpaired electrons in $3d$ and 2 electrons in $4s$). Because the energy difference between $3d$ and $4s$ orbitals is very small, both $3d$ and $4s$ electrons can participate in bond formation.<br>
    Consequently, manganese exhibits all oxidation states from <b>$+2$ to $+7$</b> ($+2, +3, +4, +5, +6, +7$).
  </div>`,
  '2 Marks',
  [
    ['Identification of Manganese (Mn)', '½ Mark'],
    ['Electronic configuration [Ar] 3d⁵ 4s² having maximum unpaired electrons', '1 Mark'],
    ['Listing oxidation states (+2 to +7)', '½ Mark']
  ]
));

// Question 4.4 (In-Text)
questions.push(createQCard(
  'c12c-ch4-q4', 'In-Text 4.4', 'NCERT In-Text',
  'The $E^\\circ(\\text{M}^{2+}/\\text{M})$ value for copper is positive ($+0.34\\text{ V}$). What is possibly the reason for this?',
  `<div class="step">
    <b>Thermodynamic Analysis:</b><br>
    The standard electrode potential $E^\\circ(\\text{M}^{2+}/\\text{M})$ depends on three thermodynamic enthalpy terms:
    $$\\Delta H = \\Delta_a H^\\circ + \\Delta_i H_1^\\circ + \\Delta_i H_2^\\circ + \\Delta_{\\text{hyd}} H^\\circ$$
    <ol style="margin-left:20px; line-height:1.75;">
      <li>Enthalpy of atomisation: $\\text{Cu}(s) \\rightarrow \\text{Cu}(g)$ ($\Delta_a H^\circ$ is very high for copper).</li>
      <li>Ionisation enthalpies: $\\text{Cu}(g) \\rightarrow \\text{Cu}^{2+}(g) + 2e^-$ (sum of first and second ionisation enthalpies $\\Delta_i H_1^\\circ + \\Delta_i H_2^\\circ$ is high).</li>
      <li>Enthalpy of hydration: $\\text{Cu}^{2+}(g) + aq \\rightarrow \\text{Cu}^{2+}(aq)$ (exothermic $\\Delta_{\\text{hyd}} H^\\circ$).</li>
    </ol>
    <b>Conclusion:</b> The high enthalpy of atomisation and high ionisation enthalpies of copper are <b>not completely balanced</b> by its hydration enthalpy. Therefore, the overall $\\Delta H$ for the transformation $\\text{Cu}(s) \\rightarrow \\text{Cu}^{2+}(aq) + 2e^-$ is positive, making $E^\\circ(\\text{Cu}^{2+}/\\text{Cu})$ positive ($+0.34\\text{ V}$) and rendering copper chemically unreactive towards non-oxidising acids.
  </div>`,
  '2 Marks',
  [
    ['Listing thermodynamic cycle components (atomisation, ionisation, hydration)', '1 Mark'],
    ['Hydration enthalpy fails to compensate for high atomisation + ionisation enthalpies', '1 Mark']
  ]
));

// Question 4.5 (In-Text)
questions.push(createQCard(
  'c12c-ch4-q5', 'In-Text 4.5', 'NCERT In-Text',
  'How would you account for the irregular variation of ionisation enthalpies (first and second) in the first series of the transition elements?',
  `<div class="step">
    <b>Reasons for Irregular Variations:</b><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Extra Stability of Half-filled and Fully-filled Subshells:</strong> Ionisation enthalpy involves removing an electron from $4s$ or $3d$. Disruption of stable half-filled ($d^5$) or completely filled ($d^{10}$) configurations requires extraordinarily high energy. For example, second ionisation enthalpy of $\\text{Cr}$ ($3d^5$) and $\\text{Cu}$ ($3d^{10}$) are abnormally high because an electron must be removed from stable $d^5$ and $d^{10}$ configurations respectively.</li>
      <li><strong>Varying Shielding Effect:</b> As nuclear charge increases across the series, electrons enter $(n-1)d$ orbitals, which shield the outer $4s$ electrons imperfectly. This irregular increase in effective nuclear charge causes fluctuations.</li>
      <li><strong>Exchange Energy:</strong> Configurations with more parallel spins (like $d^5$) possess high exchange energy stabilization, altering the energy required to remove an electron.</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Stability of half-filled (d⁵) and fully-filled (d¹⁰) configurations (Cr, Cu)', '1 Mark'],
    ['Imperfect shielding by 3d electrons and exchange energy effects', '1 Mark']
  ]
));

// Question 4.6 (In-Text)
questions.push(createQCard(
  'c12c-ch4-q6', 'In-Text 4.6', 'NCERT In-Text',
  'Why is the highest oxidation state of a metal exhibited in its oxide or fluoride only?',
  `<div class="step">
    <b>Reason:</b><br>
    Oxygen and fluorine are the most electronegative elements with small atomic sizes.<br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Fluorine:</strong> Stabilises the highest oxidation state primarily through high lattice enthalpy in ionic fluorides or high bond enthalpies in higher covalent fluorides (e.g., $\\text{VF}_5, \\text{CrF}_6$).</li>
      <li><strong>Oxygen:</strong> Has a superior ability to stabilise high oxidation states (even higher than fluorine, e.g., $\\text{Mn}_2\\text{O}_7$ exists whereas $\\text{MnF}_7$ does not) due to its unique capability to form <b>multiple bonds ($p\\pi - d\\pi$ bonding)</b> with transition metals.</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['High electronegativity and small size of fluorine and oxygen', '1 Mark'],
    ['Ability of oxygen to form multiple pπ-dπ bonds with transition metals', '1 Mark']
  ]
));

// Question 4.7 (In-Text)
questions.push(createQCard(
  'c12c-ch4-q7', 'In-Text 4.7', 'NCERT In-Text',
  'Which is a stronger reducing agent $\\text{Cr}^{2+}$ or $\\text{Fe}^{2+}$ and why?',
  `<div class="step">
    <b>Answer: $\\text{Cr}^{2+}$ is a much stronger reducing agent than $\\text{Fe}^{2+}$.</b><br><br>
    <b>Reason:</b><br>
    A reducing agent undergoes oxidation by losing electrons:<br>
    $$\\text{Cr}^{2+} (d^4) \\rightarrow \\text{Cr}^{3+} (d^3) + e^-$$
    $$\\text{Fe}^{2+} (d^6) \\rightarrow \\text{Fe}^{3+} (d^5) + e^-$$
    In aqueous solution, crystal field splitting divides the $d$-orbitals into lower energy $t_{2g}$ and higher energy $e_g$ sets. The $d^3$ configuration of $\\text{Cr}^{3+}$ has a <b>half-filled $t_{2g}^3$ subshell</b>, which is exceptionally stable in aqueous medium.<br>
    In contrast, $\\text{Fe}^{3+}$ possesses a $d^5$ configuration, which does not possess this specific octahedral crystal field stabilization in solution ($E^\\circ_{\\text{Cr}^{3+}/\\text{Cr}^{2+}} = -0.41\\text{ V}$, while $E^\\circ_{\\text{Fe}^{3+}/\\text{Fe}^{2+}} = +0.77\\text{ V}$). The negative potential of chromium makes $\\text{Cr}^{2+}$ readily oxidisable and hence a strong reducing agent.
  </div>`,
  '2 Marks',
  [
    ['Identification of Cr²⁺ as stronger reducing agent', '½ Mark'],
    ['Cr³⁺ achieves stable half-filled t₂g³ configuration in octahedral field', '1 Mark'],
    ['Electrode potential comparison (E° Cr³⁺/Cr²⁺ = -0.41 V vs Fe³⁺/Fe²⁺ = +0.77 V)', '½ Mark']
  ]
));

// Question 4.8 (In-Text)
questions.push(createQCard(
  'c12c-ch4-q8', 'In-Text 4.8', 'NCERT In-Text',
  'Calculate the \'spin only\' magnetic moment of $\\text{M}^{2+}(aq)$ ion ($Z = 27$).',
  `<div class="step">
    <b>1. Electronic Configuration of Element ($Z = 27$, Cobalt):</b><br>
    $$\\text{M} (Z = 27): [\\text{Ar}] 3d^7 4s^2$$
    $$\\text{M}^{2+}: [\\text{Ar}] 3d^7$$
    <br>
    <b>2. Number of Unpaired Electrons ($n$):</b><br>
    The $3d$ subshell has 5 orbitals. Filling 7 electrons according to Hund\'s rule:
    $$\\uparrow\\downarrow, \\uparrow\\downarrow, \\uparrow, \\uparrow, \\uparrow \\implies n = 3 \\text{ unpaired electrons}$$
    <br>
    <b>3. Spin-Only Magnetic Moment Formula:</b>
    $$\\mu = \\sqrt{n(n + 2)} \\text{ BM}$$
    $$\\mu = \\sqrt{3(3 + 2)} = \\sqrt{15} \\approx \\mathbf{3.87\\text{ BM}}$$
    <b>Answer:</b> The spin-only magnetic moment is <b>$3.87\\text{ Bohr Magnetons (BM)}$</b>.
  </div>`,
  '2 Marks',
  [
    ['Deducing electronic configuration of M²⁺ (3d⁷) and n = 3 unpaired electrons', '1 Mark'],
    ['Spin-only formula $\\mu = \\sqrt{n(n+2)}$ and calculation $\\sqrt{15} = 3.87\\text{ BM}$', '1 Mark']
  ]
));

// Question 4.9 (In-Text)
questions.push(createQCard(
  'c12c-ch4-q9', 'In-Text 4.9', 'NCERT In-Text',
  'Explain why $\\text{Cu}^+$ ion is not stable in aqueous solutions?',
  `<div class="step">
    <b>Reason:</b><br>
    In aqueous solution, $\\text{Cu}^+$ undergoes <b>disproportionation</b> into $\\text{Cu}^{2+}$ and $\\text{Cu}(s)$:
    $$2\\text{Cu}^+(aq) \\rightarrow \\text{Cu}^{2+}(aq) + \\text{Cu}(s)$$
    <b>Thermodynamic Explanation:</b><br>
    Although the second ionisation enthalpy of copper is high, the hydration enthalpy of divalent $\\text{Cu}^{2+}$ is much more negative (exothermic) than that of monovalent $\\text{Cu}^+$ due to the smaller ionic radius and higher charge density of $\\text{Cu}^{2+}$.<br>
    This highly favourable <b>hydration enthalpy of $\\text{Cu}^{2+}$</b> more than compensates for the second ionisation enthalpy of copper, making $\\text{Cu}^{2+}(aq)$ thermodynamically much more stable than $\\text{Cu}^+(aq)$.
  </div>`,
  '2 Marks',
  [
    ['Disproportionation reaction: $2\\text{Cu}^+ \\rightarrow \\text{Cu}^{2+} + \\text{Cu}$', '1 Mark'],
    ['Higher negative hydration enthalpy of Cu²⁺ compensating for 2nd ionisation energy', '1 Mark']
  ]
));

// Question 4.10 (In-Text)
questions.push(createQCard(
  'c12c-ch4-q10', 'In-Text 4.10', 'NCERT In-Text',
  'Actinoid contraction is greater from element to element than lanthanoid contraction. Why?',
  `<div class="step">
    <b>Reason:</b><br>
    Both contractions occur due to imperfect shielding of nuclear charge by electrons added to inner $f$-orbitals.<br>
    In actinoids, the differentiating electrons enter the <b>$5f$ orbitals</b>, whereas in lanthanoids, electrons enter the <b>$4f$ orbitals</b>.<br>
    The $5f$ orbitals are more diffused and extend further into space than the $4f$ orbitals. Consequently, the <b>shielding effect of $5f$ electrons is poorer than that of $4f$ electrons</b>.<br>
    As a result, the effective nuclear charge experienced by the outermost electrons increases more rapidly across the actinoid series, leading to a <b>greater actinoid contraction</b> from element to element compared to lanthanoid contraction.
  </div>`,
  '2 Marks',
  [
    ['Identification of 5f vs 4f subshell shielding', '1 Mark'],
    ['Poorer shielding by diffused 5f electrons causing stronger effective nuclear pull', '1 Mark']
  ]
));

// ============================================================================
// PART 2: NCERT END-OF-CHAPTER EXERCISES (4.1 to 4.24)
// ============================================================================

// Exercise 4.1
questions.push(createQCard(
  'c12c-ch4-q11', 'Exercise 4.1', 'NCERT Exercise',
  'Write down the electronic configuration of:<br>(i) $\\text{Cr}^{3+}$<br>(ii) $\\text{Pm}^{3+}$<br>(iii) $\\text{Cu}^+$<br>(iv) $\\text{Ce}^{4+}$<br>(v) $\\text{Co}^{2+}$<br>(vi) $\\text{Lu}^{3+}$<br>(vii) $\\text{Mn}^{2+}$<br>(viii) $\\text{Th}^{4+}$',
  `<div class="step">
    <b>Electronic Configurations:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{Cr}^{3+}$ ($Z = 24$):</strong> $\\text{Cr}: [\\text{Ar}] 3d^5 4s^1 \\implies \\mathbf{\\text{Cr}^{3+}: [\\text{Ar}] 3d^3}$</li>
      <li><strong>$\\text{Pm}^{3+}$ ($Z = 61$):</strong> $\\text{Pm}: [\\text{Xe}] 4f^5 6s^2 \\implies \\mathbf{\\text{Pm}^{3+}: [\\text{Xe}] 4f^4}$</li>
      <li><strong>$\\text{Cu}^+$ ($Z = 29$):</strong> $\\text{Cu}: [\\text{Ar}] 3d^{10} 4s^1 \\implies \\mathbf{\\text{Cu}^+: [\\text{Ar}] 3d^{10}}$</li>
      <li><strong>$\\text{Ce}^{4+}$ ($Z = 58$):</strong> $\\text{Ce}: [\\text{Xe}] 4f^1 5d^1 6s^2 \\implies \\mathbf{\\text{Ce}^{4+}: [\\text{Xe}] 4f^0}$ (noble gas core)</li>
      <li><strong>$\\text{Co}^{2+}$ ($Z = 27$):</strong> $\\text{Co}: [\\text{Ar}] 3d^7 4s^2 \\implies \\mathbf{\\text{Co}^{2+}: [\\text{Ar}] 3d^7}$</li>
      <li><strong>$\\text{Lu}^{3+}$ ($Z = 71$):</strong> $\\text{Lu}: [\\text{Xe}] 4f^{14} 5d^1 6s^2 \\implies \\mathbf{\\text{Lu}^{3+}: [\\text{Xe}] 4f^{14}}$ (completely filled $4f$)</li>
      <li><strong>$\\text{Mn}^{2+}$ ($Z = 25$):</strong> $\\text{Mn}: [\\text{Ar}] 3d^5 4s^2 \\implies \\mathbf{\\text{Mn}^{2+}: [\\text{Ar}] 3d^5}$ (half-filled $3d$)</li>
      <li><strong>$\\text{Th}^{4+}$ ($Z = 90$):</strong> $\\text{Th}: [\\text{Rn}] 6d^2 7s^2 \\implies \\mathbf{\\text{Th}^{4+}: [\\text{Rn}] 5f^0}$ (noble gas core)</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['Configurations (i) to (iv) correctly written', '2 Marks'],
    ['Configurations (v) to (viii) correctly written', '2 Marks']
  ]
));

// Exercise 4.2
questions.push(createQCard(
  'c12c-ch4-q12', 'Exercise 4.2', 'NCERT Exercise',
  'Why are $\\text{Mn}^{2+}$ compounds more stable than $\\text{Fe}^{2+}$ towards oxidation to their $+3$ state?',
  `<div class="step">
    <b>Electronic Configurations:</b><br>
    $$\\text{Mn}^{2+}: [\\text{Ar}] 3d^5 \\quad (\\text{exactly half-filled, extra stable})$$
    $$\\text{Fe}^{2+}: [\\text{Ar}] 3d^6 \\quad (\\text{one electron more than half-filled})$$
    <br>
    <b>Oxidation to $+3$ state:</b>
    $$\\text{Mn}^{2+} (3d^5) \\xrightarrow{-e^-} \\text{Mn}^{3+} (3d^4)$$
    Oxidation of $\\text{Mn}^{2+}$ requires removing an electron from a stable half-filled $3d^5$ subshell, requiring high third ionisation enthalpy. Hence, $\\text{Mn}^{2+}$ resists oxidation.<br><br>
    $$\\text{Fe}^{2+} (3d^6) \\xrightarrow{-e^-} \\text{Fe}^{3+} (3d^5)$$
    In contrast, loss of one electron from $\\text{Fe}^{2+}$ leads to a stable half-filled $3d^5$ configuration of $\\text{Fe}^{3+}$. Therefore, $\\text{Fe}^{2+}$ is readily oxidised to $\\text{Fe}^{3+}$, while $\\text{Mn}^{2+}$ compounds remain stable.
  </div>`,
  '2 Marks',
  [
    ['Mn²⁺ possesses extra stable half-filled 3d⁵ subshell resisting electron loss', '1 Mark'],
    ['Fe²⁺ (3d⁶) readily loses 1 electron to acquire stable half-filled 3d⁵ (Fe³⁺)', '1 Mark']
  ]
));

// Exercise 4.3
questions.push(createQCard(
  'c12c-ch4-q13', 'Exercise 4.3', 'NCERT Exercise',
  'Explain briefly how $+2$ state becomes more and more stable in the first half of the first row transition elements with increasing atomic number?',
  `<div class="step">
    <b>Reason:</b><br>
    In the first transition series ($\text{Sc}$ to $\text{Mn}$), the $+2$ oxidation state arises from the loss of the two outer $4s$ electrons:
    $$\\text{M} \\rightarrow \\text{M}^{2+} + 2e^-$$
    As the atomic number increases from $\\text{Sc}$ ($Z = 21$) to $\\text{Mn}$ ($Z = 25$):
    <ol style="margin-left:20px; line-height:1.75;">
      <li>Electrons are progressively added to the inner $3d$ subshell: $\\text{Sc}^{2+} (3d^1), \\text{Ti}^{2+} (3d^2), \\text{V}^{2+} (3d^3), \\text{Cr}^{2+} (3d^4), \\text{Mn}^{2+} (3d^5)$.</li>
      <li>The effective nuclear charge steadily increases, binding the $3d$ electrons more tightly and making further removal of $3d$ electrons to yield higher oxidation states ($+3, +4$, etc.) increasingly difficult.</li>
      <li>At manganese, the $\\text{Mn}^{2+}$ ion attains an exceptionally stable <b>half-filled $3d^5$ configuration</b>.</li>
    </ol>
    Hence, the third ionisation enthalpy increases progressively, making the $+2$ state increasingly stable from $\text{Sc}$ to $\text{Mn}$.
  </div>`,
  '2 Marks',
  [
    ['Progressive increase in 3rd ionisation enthalpy across Sc to Mn', '1 Mark'],
    ['Increasing effective nuclear charge and achievement of stable 3d⁵ in Mn²⁺', '1 Mark']
  ]
));

// Exercise 4.4
questions.push(createQCard(
  'c12c-ch4-q14', 'Exercise 4.4', 'NCERT Exercise',
  'To what extent do the electronic configurations decide the stability of oxidation states in the first series of the transition elements? Illustrate your answer with examples.',
  `<div class="step">
    <b>Influence of Electronic Configurations:</b><br>
    Electronic configurations with empty ($d^0$), half-filled ($d^5$), or fully-filled ($d^{10}$) subshells possess special stability, heavily dictating the stability of oxidation states:
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Stability of $d^0$:</strong> $\\text{Sc}^{3+} ([\\text{Ar}] 3d^0)$ and $\\text{Ti}^{4+} ([\\text{Ar}] 3d^0)$ are the most stable oxidation states for scandium and titanium because of noble gas core configuration. $\\text{Sc}^{2+}$ is never observed.</li>
      <li><strong>Stability of $d^5$:</strong> $\\text{Mn}^{2+} ([\\text{Ar}] 3d^5)$ is exceptionally stable due to half-filled $d$-subshell. Similarly, $\\text{Fe}^{3+} ([\\text{Ar}] 3d^5)$ is more stable than $\\text{Fe}^{2+} ([\\text{Ar}] 3d^6)$.</li>
      <li><strong>Stability of $d^{10}$:</strong> $\\text{Zn}^{2+} ([\\text{Ar}] 3d^{10})$ and $\\text{Cu}^+ ([\\text{Ar}] 3d^{10})$ derive stability from completely filled $d$-orbitals.</li>
      <li><strong>Stability of $t_{2g}^3$ in Aqueous Medium:</strong> In aqueous solutions, $\\text{Cr}^{3+} ([\\text{Ar}] 3d^3)$ is very stable due to half-filled $t_{2g}^3$ crystal field level, making $\\text{Cr}^{2+}$ strongly reducing.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Explanation of stability of d⁰, d⁵, d¹⁰ configurations', '1 Mark'],
    ['Examples: Sc³⁺, Ti⁴⁺ (d⁰) and Mn²⁺, Fe³⁺ (d⁵)', '1 Mark'],
    ['Crystal field t₂g³ stability for Cr³⁺', '1 Mark']
  ]
));

// Exercise 4.5
questions.push(createQCard(
  'c12c-ch4-q15', 'Exercise 4.5', 'NCERT Exercise',
  'What may be the stable oxidation state of the transition element with the following $d$ electron configurations in the ground state of their atoms: $3d^3, 3d^5, 3d^8$ and $3d^4$?',
  `<div class="step">
    <b>Stable Oxidation States:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>$3d^3$ (Vanadium, $3d^3 4s^2$):</strong><br>
        Stable oxidation states: <b>$+5$</b> (achieving noble gas $d^0$) and <b>$+4$</b> (as in $\\text{VO}^{2+}$).</li>
      <li><strong>$3d^5$ (Chromium $3d^5 4s^1$ and Manganese $3d^5 4s^2$):</strong><br>
        • For $\\text{Cr}$ ($3d^5 4s^1$): Stable states are <b>$+3$</b> ($3d^3, t_{2g}^3$) and <b>$+6$</b> ($\text{Cr}_2\text{O}_7^{2-}, d^0$).<br>
        • For $\\text{Mn}$ ($3d^5 4s^2$): Stable states are <b>$+2$</b> ($d^5$, half-filled) and <b>$+7$</b> ($\text{MnO}_4^-, d^0$).</li>
      <li><strong>$3d^8$ (Nickel, $3d^8 4s^2$):</strong><br>
        Stable oxidation state: <b>$+2$</b> ($\text{Ni}^{2+}$ by loss of $4s^2$ electrons).</li>
      <li><strong>$3d^4$ (No neutral ground state atom has $3d^4$ due to excitation to $3d^5 4s^1$ in Cr):</strong><br>
        Corresponds to Chromium ($3d^5 4s^1$). Stable states are <b>$+3$</b> and <b>$+6$</b>.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['3d³ (V): +5 and +4', '1 Mark'],
    ['3d⁵ (Cr/Mn): +3, +6 for Cr and +2, +7 for Mn', '1 Mark'],
    ['3d⁸ (Ni: +2) and 3d⁴ discussion', '1 Mark']
  ]
));

// Exercise 4.6
questions.push(createQCard(
  'c12c-ch4-q16', 'Exercise 4.6', 'NCERT Exercise',
  'Name the oxometal anions of the first series of the transition metals in which the metal exhibits the oxidation state equal to its group number.',
  `<div class="step">
    <b>Oxometal Anions where Oxidation State = Group Number:</b><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Vanadate ion, $\\text{VO}_4^{3-}$ (or $\\text{VO}_3^-$):</strong><br>
        Vanadium belongs to <b>Group 5</b>. Oxidation state of $\\text{V} = +5$.</li>
      <li><strong>Chromate ion, $\\text{CrO}_4^{2-}$ (and Dichromate ion, $\\text{Cr}_2\\text{O}_7^{2-}$):</strong><br>
        Chromium belongs to <b>Group 6</b>. Oxidation state of $\\text{Cr} = +6$.</li>
      <li><strong>Permanganate ion, $\\text{MnO}_4^-$:</strong><br>
        Manganese belongs to <b>Group 7</b>. Oxidation state of $\\text{Mn} = +7$.</li>
      <li><strong>Titanate ion, $\\text{TiO}_4^{4-}$:</strong><br>
        Titanium belongs to <b>Group 4</b>. Oxidation state of $\\text{Ti} = +4$.</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Chromate / Dichromate (CrO₄²⁻ / Cr₂O₇²⁻, Group 6, O.S. = +6)', '1 Mark'],
    ['Permanganate (MnO₄⁻, Group 7, O.S. = +7) and Vanadate (VO₄³⁻, Group 5, +5)', '1 Mark']
  ]
));

// Exercise 4.7
questions.push(createQCard(
  'c12c-ch4-q17', 'Exercise 4.7', 'NCERT Exercise',
  'What is lanthanoid contraction? What are the consequences of lanthanoid contraction?',
  `<div class="step">
    <b>Definition:</b><br>
    The steady and progressive decrease in the atomic and ionic radii of the lanthanoid elements with increasing atomic number from Lanthanum ($\text{La}^{3+}$, $103\\text{ pm}$) to Lutetium ($\text{Lu}^{3+}$, $86\\text{ pm}$) is called <b>Lanthanoid Contraction</b>.<br>
    <em>Cause:</em> Due to the diffused shape and poor shielding effect of $4f$ electrons, effective nuclear charge increases steadily.<br><br>
    <b>Consequences of Lanthanoid Contraction:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Similarity in Radii of $4d$ and $5d$ Transition Elements:</strong> Elements of the second and third transition series belonging to the same vertical group possess nearly identical atomic and ionic radii (e.g., $\\text{Zr} = 160\\text{ pm} \\approx \\text{Hf} = 159\\text{ pm}$; $\\text{Nb} \\approx \\text{Ta}$; $\\text{Mo} \\approx \\text{W}$). Because of this, they show remarkably similar chemical and physical properties and occur together in nature.</li>
      <li><strong>Difficulty in Separation of Lanthanoids:</strong> Because the ionic radii of lanthanoids decrease very gradually, their chemical properties and hydration enthalpies are almost identical, making their separation in pure state extremely challenging (requiring ion-exchange techniques).</li>
      <li><strong>Variation in Basic Strength of Hydroxides:</strong> As ionic radius decreases from $\\text{La}^{3+}$ to $\\text{Lu}^{3+}$, the covalent character of the $\\text{M}-\\text{OH}$ bond increases according to Fajan\'s rules. Consequently, basic strength decreases:
        $$\\text{La(OH)}_3 \\text{ is the most basic} > \\dots > \\text{Lu(OH)}_3 \\text{ is the least basic}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Clear definition of lanthanoid contraction with cause (poor 4f shielding)', '1 Mark'],
    ['Similarity of 4d and 5d series radii (Zr ≈ Hf pair)', '1 Mark'],
    ['Basic strength trend of hydroxides: La(OH)₃ > Lu(OH)₃', '1 Mark']
  ]
));

// Exercise 4.8
questions.push(createQCard(
  'c12c-ch4-q18', 'Exercise 4.8', 'NCERT Exercise',
  'What are the characteristics of the transition elements and why are they called transition elements? Which of the $d$-block elements may not be regarded as the transition elements?',
  `<div class="step">
    <b>1. Why Called Transition Elements:</b><br>
    They occupy the central block of the periodic table between the highly electropositive $s$-block elements and the electronegative $p$-block elements, representing a transition or bridge in physical and chemical properties between $s$ and $p$ blocks.<br><br>
    <b>2. Characteristic Properties:</b><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Variable oxidation states.</li>
      <li>Formation of coloured ions due to $d-d$ electronic transitions.</li>
      <li>Paramagnetic behaviour resulting from unpaired $d$-electrons.</li>
      <li>Tendency to form complex compounds (coordination complexes).</li>
      <li>Catalytic properties and ability to form interstitial compounds and alloys.</li>
    </ul>
    <br>
    <b>3. Elements Not Regarded as Transition Elements:</b><br>
    <b>Zinc ($\text{Zn}$), Cadmium ($\text{Cd}$), and Mercury ($\text{Hg}$)</b> of Group 12 are not regarded as transition elements because they have completely filled $(n-1)d^{10}$ subshells in their ground states as well as in their common oxidation states ($\text{Zn}^{2+}, \text{Cd}^{2+}, \text{Hg}^{2+}$).
  </div>`,
  '3 Marks',
  [
    ['Reason for the name (bridge between s- and p-blocks)', '1 Mark'],
    ['Listing 4 characteristic properties (colored ions, complexes, variable O.S., catalysts)', '1 Mark'],
    ['Exclusion of Zn, Cd, Hg with reason (fully filled d¹⁰ in neutral and ionic states)', '1 Mark']
  ]
));

// Exercise 4.9
questions.push(createQCard(
  'c12c-ch4-q19', 'Exercise 4.9', 'NCERT Exercise',
  'In what way is the electronic configuration of the transition elements different from that of the non-transition elements?',
  `<div class="step">
    <b>Comparison of Electronic Configurations:</b><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Transition Elements ($d$-block):</strong><br>
        The differentiating electron enters the penultimate $(n-1)d$ subshell. Their general electronic configuration is:
        $$\\mathbf{(n-1)d^{1-10} ns^{1-2}}$$
        Both the outermost $ns$ and penultimate $(n-1)d$ electrons participate in chemical bonding, leading to variable valencies.</li>
      <li><strong>Non-Transition Elements ($s$- and $p$-block):</strong><br>
        The differentiating electron enters the outermost principal shell ($ns$ for $s$-block, $np$ for $p$-block). Their general electronic configurations are:
        $$\\mathbf{ns^{1-2}} \\quad (s\\text{-block}) \\quad \\text{and} \\quad \\mathbf{ns^2 np^{1-6}} \\quad (p\\text{-block})$$
        Only the outermost valence shell electrons participate in bonding, and oxidation states typically vary by units of 2 (due to inert pair effect).</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['General configuration of transition elements (n-1)d¹⁻¹⁰ ns¹⁻²', '1 Mark'],
    ['Comparison with s and p block outermost filling', '1 Mark']
  ]
));

// Exercise 4.10
questions.push(createQCard(
  'c12c-ch4-q20', 'Exercise 4.10', 'NCERT Exercise',
  'What are the different oxidation states exhibited by the lanthanoids?',
  `<div class="step">
    <b>Oxidation States of Lanthanoids:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Principal Oxidation State ($+3$):</strong> The <b>$+3$ oxidation state is the common and predominant</b> oxidation state exhibited by all lanthanoids ($\text{Ln}^{3+}$), formed by the loss of two $6s$ electrons and one $5d$ or $4f$ electron.</li>
      <li><strong>$+2$ Oxidation State:</strong> Exhibited when it leads to empty ($4f^0$), half-filled ($4f^7$), or fully-filled ($4f^{14}$) subshells:
        <br>• $\\text{Eu}^{2+} ([\\text{Xe}] 4f^7)$: Exceptionally stable half-filled $f$-shell; strong reducing agent.
        <br>• $\\text{Yb}^{2+} ([\\text{Xe}] 4f^{14})$: Completely filled $f$-shell; reducing agent.
        <br>• $\\text{Sm}^{2+} ([\\text{Xe}] 4f^6)$.</li>
      <li><strong>$+4$ Oxidation State:</strong> Exhibited when it leads to noble gas core ($4f^0$) or half-filled ($4f^7$) configuration:
        <br>• $\\text{Ce}^{4+} ([\\text{Xe}] 4f^0)$: Extra stable noble gas core; acts as a powerful analytical oxidising agent ($E^\\circ_{\\text{Ce}^{4+}/\\text{Ce}^{3+}} = +1.74\\text{ V}$).
        <br>• $\\text{Tb}^{4+} ([\\text{Xe}] 4f^7)$: Half-filled $4f^7$ configuration.
        <br>• $\\text{Pr}^{4+}, \\text{Nd}^{4+}, \\text{Dy}^{4+}$ in oxides.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['+3 as the predominant common oxidation state', '1 Mark'],
    ['Examples and rationale for +2 (Eu²⁺, Yb²⁺) and +4 (Ce⁴⁺, Tb⁴⁺)', '1 Mark']
  ]
));

// Exercise 4.11
questions.push(createQCard(
  'c12c-ch4-q21', 'Exercise 4.11', 'NCERT Exercise',
  'Explain giving reasons:<br>(i) Transition metals and many of their compounds show paramagnetic behaviour.<br>(ii) The enthalpies of atomisation of the transition metals are high.<br>(iii) The transition metals generally form coloured compounds.<br>(iv) Transition metals and their many compounds act as good catalysts.',
  `<div class="step">
    <b>Detailed Explanations:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Paramagnetism:</strong> Arises from the presence of one or more <b>unpaired electrons</b> in the $(n-1)d$ subshell. Each unpaired electron possesses a magnetic dipole moment due to its spin and orbital motion.</li>
      <li><strong>High Enthalpies of Atomisation:</strong> Due to the presence of large numbers of unpaired $(n-1)d$ electrons in addition to $ns$ electrons, there is extensive <b>interatomic metallic bonding</b> and covalent character between metal atoms in the crystal lattice.</li>
      <li><strong>Coloured Compounds:</strong> When light falls on transition metal complexes, electrons from lower energy $d$-orbitals absorb radiation from the visible spectrum and get promoted to higher energy $d$-orbitals (<b>$d-d$ transition</b>). The transmitted light exhibits the complementary color.</li>
      <li><strong>Catalytic Activity:</strong> Due to their:
        <br>• Ability to exhibit <b>variable oxidation states</b> and form unstable reaction intermediates.
        <br>• Availability of vacant $d$-orbitals to form bonds with reactant molecules and lower activation energy.
        <br>• Large surface area providing active sites for reactant adsorption.</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['(i) Paramagnetism due to unpaired d-electrons', '1 Mark'],
    ['(ii) High atomisation due to strong interatomic metallic bonds involving d-electrons', '1 Mark'],
    ['(iii) Color arising from d-d transitions in visible spectrum', '1 Mark'],
    ['(iv) Catalysis due to variable oxidation states and vacant d-orbitals', '1 Mark']
  ]
));

// Exercise 4.12
questions.push(createQCard(
  'c12c-ch4-q22', 'Exercise 4.12', 'NCERT Exercise',
  'What are interstitial compounds? Why are such compounds well known for transition metals?',
  `<div class="step">
    <b>Definition:</b><br>
    Interstitial compounds are those which are formed when small non-metal atoms like <b>$\text{H}, \text{C}, \text{N}$ or $\text{B}$</b> get trapped in the interstitial voids or crystal lattice cavities of transition metals (e.g., $\\text{TiC}, \\text{Mn}_4\\text{N}, \\text{Fe}_3\\text{H}, \\text{TiH}_{1.7}$).<br><br>
    <b>Why Well Known for Transition Metals:</b><br>
    Transition metal atoms crystallise in close-packed structures ($\text{fcc, bcc, hcp}$) leaving interstitial voids. Due to their relatively large atomic radii, the size of these interstitial sites is suitable to accommodate small non-metal atoms without distorting the metal lattice.<br><br>
    <b>Key Characteristics:</b><br>
    • Non-stoichiometric in composition.<br>
    • Extremely high melting points (higher than pure metals).<br>
    • Very hard (some borides approach diamond in hardness).<br>
    • Retain metallic electrical and thermal conductivity.<br>
    • Chemically inert.
  </div>`,
  '2 Marks',
  [
    ['Definition of interstitial compounds with examples (TiC, Fe₃H)', '1 Mark'],
    ['Reason: Trapping of small atoms (H, C, N) in crystal lattice voids', '½ Mark'],
    ['Listing characteristics (non-stoichiometric, hard, chemically inert)', '½ Mark']
  ]
));

// Exercise 4.13
questions.push(createQCard(
  'c12c-ch4-q23', 'Exercise 4.13', 'NCERT Exercise',
  'How is the variability in oxidation states of transition metals different from that of the $p$-block elements?',
  `<div class="step">
    <b>Key Differences in Oxidation States:</b><br>
    <table style="width:100%; border-collapse:collapse; margin:10px 0; border:1px solid #cbd5e1;">
      <tr style="background:#f1f5f9;">
        <th style="border:1px solid #cbd5e1; padding:8px; text-align:left;">Feature</th>
        <th style="border:1px solid #cbd5e1; padding:8px; text-align:left;">Transition Metals ($d$-block)</th>
        <th style="border:1px solid #cbd5e1; padding:8px; text-align:left;">$p$-Block Elements</th>
      </tr>
      <tr>
        <td style="border:1px solid #cbd5e1; padding:8px;"><strong>Successive difference</strong></td>
        <td style="border:1px solid #cbd5e1; padding:8px;">Oxidation states differ by <b>unity (1 unit)</b>, e.g., $\\text{Mn}^{2+}, \\text{Mn}^{3+}, \\text{Mn}^{4+}, \\text{Mn}^{5+}, \\text{Mn}^{6+}, \\text{Mn}^{7+}$.</td>
        <td style="border:1px solid #cbd5e1; padding:8px;">Oxidation states differ by <b>two units</b> due to inert pair effect, e.g., $\\text{Sn}^{2+} / \\text{Sn}^{4+}$, $\\text{Tl}^+ / \\text{Tl}^{3+}$.</td>
      </tr>
      <tr>
        <td style="border:1px solid #cbd5e1; padding:8px;"><strong>Stability of higher state down the group</strong></td>
        <td style="border:1px solid #cbd5e1; padding:8px;">Higher oxidation states become <b>more stable down the group</b>. (e.g., in Group 6, $\\text{Mo(VI)}$ and $\\text{W(VI)}$ are much more stable than $\\text{Cr(VI)}$).</td>
        <td style="border:1px solid #cbd5e1; padding:8px;">Lower oxidation states become <b>more stable down the group</b> due to the inert pair effect (e.g., $\\text{Pb(II)} > \\text{Pb(IV)}$).</td>
      </tr>
    </table>
  </div>`,
  '2 Marks',
  [
    ['Difference by unity in transition elements vs difference by two in p-block', '1 Mark'],
    ['Higher oxidation states more stable down the group in d-block vs lower in p-block', '1 Mark']
  ]
));

// Exercise 4.14
questions.push(createQCard(
  'c12c-ch4-q24', 'Exercise 4.14', 'NCERT Exercise',
  'Describe the preparation of potassium dichromate from iron chromite ore. What is the effect of increasing pH on a solution of potassium dichromate?',
  `<div class="step">
    <b>Preparation of Potassium Dichromate ($\text{K}_2\text{Cr}_2\text{O}_7$):</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Fusion of Chromite Ore with Sodium Carbonate:</strong>
        Chromite ore ($\text{FeCr}_2\text{O}_4$) is fused with sodium carbonate in the presence of air:
        $$4\\text{FeCr}_2\\text{O}_4 + 8\\text{Na}_2\\text{CO}_3 + 7\\text{O}_2 \\rightarrow 8\\text{Na}_2\\text{CrO}_4 + 2\\text{Fe}_2\\text{O}_3 + 8\\text{CO}_2$$
      </li>
      <li><strong>Acidification of Chromate to Dichromate:</strong>
        The yellow solution of sodium chromate is filtered and acidified with concentrated $\\text{H}_2\\text{SO}_4$:
        $$2\\text{Na}_2\\text{CrO}_4 + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{Na}_2\\text{Cr}_2\\text{O}_7 + \\text{Na}_2\\text{SO}_4 + \\text{H}_2\\text{O}$$
      </li>
      <li><strong>Conversion to Potassium Dichromate:</strong>
        Sodium dichromate is treated with potassium chloride ($\text{KCl}$). Being less soluble, orange crystals of $\\text{K}_2\\text{Cr}_2\\text{O}_7$ crystallise out:
        $$\\text{Na}_2\\text{Cr}_2\\text{O}_7 + 2\\text{KCl} \\rightarrow \\text{K}_2\\text{Cr}_2\\text{O}_7 + 2\\text{NaCl}$$
      </li>
    </ol>
    <br>
    <b>Effect of Increasing pH (Alkaline Medium):</b><br>
    Dichromate and chromate exist in dynamic equilibrium depending upon pH:
    $$\\text{Cr}_2\\text{O}_7^{2-} (\\text{orange}) + 2\\text{OH}^- \\rightleftharpoons 2\\text{CrO}_4^{2-} (\\text{yellow}) + \\text{H}_2\\text{O}$$
    Increasing pH (adding base) shifts the equilibrium to the right, converting orange dichromate into <b>yellow chromate ($\text{CrO}_4^{2-}$)</b>.
  </div>`,
  '4 Marks',
  [
    ['Reaction 1: Roasting of chromite ore with Na₂CO₃', '1 Mark'],
    ['Reaction 2: Acidification of sodium chromate to dichromate', '1 Mark'],
    ['Reaction 3: Treatment with KCl to yield K₂Cr₂O₇', '1 Mark'],
    ['Effect of increasing pH: conversion from orange Cr₂O₇²⁻ to yellow CrO₄²⁻', '1 Mark']
  ]
));

// Exercise 4.15
questions.push(createQCard(
  'c12c-ch4-q25', 'Exercise 4.15', 'NCERT Exercise',
  'Describe the oxidising action of potassium dichromate and write the ionic equations for its reaction with:<br>(i) iodide<br>(ii) iron(II) solution<br>(iii) $\\text{H}_2\\text{S}$',
  `<div class="step">
    <b>Oxidising Action in Acidic Solution:</b><br>
    In acidic medium, dichromate ion acts as a powerful oxidising agent, where Cr(VI) is reduced to Cr(III):
    $$\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O} \\quad (E^\\circ = +1.33\\text{ V})$$
    <br>
    <b>Ionic Equations:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Reaction with Iodide ($\text{I}^-$):</strong>
        $$6\\text{I}^- \\rightarrow 3\\text{I}_2 + 6e^-$$
        $$\\mathbf{\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6\\text{I}^- \\rightarrow 2\\text{Cr}^{3+} + 3\\text{I}_2 + 7\\text{H}_2\\text{O}}$$
      </li>
      <li><strong>Reaction with Iron(II) ($\text{Fe}^{2+}$):</strong>
        $$6\\text{Fe}^{2+} \\rightarrow 6\\text{Fe}^{3+} + 6e^-$$
        $$\\mathbf{\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6\\text{Fe}^{2+} \\rightarrow 2\\text{Cr}^{3+} + 6\\text{Fe}^{3+} + 7\\text{H}_2\\text{O}}$$
      </li>
      <li><strong>Reaction with $\\text{H}_2\\text{S}$:</strong>
        $$3\\text{H}_2\\text{S} \\rightarrow 3\\text{S} + 6\\text{H}^+ + 6e^-$$
        $$\\mathbf{\\text{Cr}_2\\text{O}_7^{2-} + 8\\text{H}^+ + 3\\text{H}_2\\text{S} \\rightarrow 2\\text{Cr}^{3+} + 3\\text{S} + 7\\text{H}_2\\text{O}}$$
      </li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['Primary reduction half-reaction: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O', '1 Mark'],
    ['(i) Balanced ionic equation for oxidation of I⁻ to I₂', '1 Mark'],
    ['(ii) Balanced ionic equation for oxidation of Fe²⁺ to Fe³⁺', '1 Mark'],
    ['(iii) Balanced ionic equation for oxidation of H₂S to elemental sulfur', '1 Mark']
  ]
));

// Exercise 4.16
questions.push(createQCard(
  'c12c-ch4-q26', 'Exercise 4.16', 'NCERT Exercise',
  'Describe the preparation of potassium permanganate. How does the acidified permanganate solution react with:<br>(i) iron(II) ions<br>(ii) $\\text{SO}_2$<br>(iii) oxalic acid?<br>Write the ionic equations for the reactions.',
  `<div class="step">
    <b>Preparation of Potassium Permanganate ($\text{KMnO}_4$):</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Fusion of Pyrolusite with $\\text{KOH}$ in presence of air/$\\text{KNO}_3$:</strong>
        $$2\\text{MnO}_2 + 4\\text{KOH} + \\text{O}_2 \\rightarrow 2\\text{K}_2\\text{MnO}_4 (\\text{dark green}) + 2\\text{H}_2\\text{O}$$
      </li>
      <li><strong>Disproportionation in Acidic Medium or Electrolytic Oxidation:</strong>
        The green potassium manganate is converted to permanganate:
        $$3\\text{MnO}_4^{2-} + 4\\text{H}^+ \\rightarrow 2\\text{MnO}_4^- (\\text{purple}) + \\text{MnO}_2 + 2\\text{H}_2\\text{O}$$
        (Or commercially by electrolytic oxidation in alkaline solution: $\\text{MnO}_4^{2-} \\xrightarrow{\\text{anode}} \\text{MnO}_4^- + e^-$)
      </li>
    </ol>
    <br>
    <b>Acidic Permanganate Reduction Half-Reaction:</b>
    $$\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$$
    <br>
    <b>Reactions:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>With Iron(II) ($\text{Fe}^{2+}$):</strong>
        $$\\mathbf{\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}}$$
      </li>
      <li><strong>With $\\text{SO}_2$:</strong>
        $$\\mathbf{2\\text{MnO}_4^- + 5\\text{SO}_2 + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{Mn}^{2+} + 5\\text{SO}_4^{2-} + 4\\text{H}^+}$$
      </li>
      <li><strong>With Oxalic Acid ($\text{C}_2\text{O}_4^{2-}$):</strong>
        $$\\mathbf{2\\text{MnO}_4^- + 5\\text{C}_2\\text{O}_4^{2-} + 16\\text{H}^+ \\rightarrow 2\\text{Mn}^{2+} + 10\\text{CO}_2 + 8\\text{H}_2\\text{O}}$$
      </li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['Two-step preparation of KMnO₄ from MnO₂', '1 Mark'],
    ['(i) Ionic equation for oxidation of Fe²⁺ to Fe³⁺', '1 Mark'],
    ['(ii) Ionic equation for oxidation of SO₂ to SO₄²⁻', '1 Mark'],
    ['(iii) Ionic equation for oxidation of oxalic acid to CO₂', '1 Mark']
  ]
));

// Exercise 4.17
questions.push(createQCard(
  'c12c-ch4-q27', 'Exercise 4.17', 'NCERT Exercise',
  'For $\\text{M}^{2+}/\\text{M}$ and $\\text{M}^{3+}/\\text{M}^{2+}$ systems the $E^\\circ$ values for some metals are as follows:<br>$\\text{Cr}^{2+}/\\text{Cr} = -0.9\\text{ V}, \\quad \\text{Cr}^{3+}/\\text{Cr}^{2+} = -0.4\\text{ V}$<br>$\\text{Mn}^{2+}/\\text{Mn} = -1.2\\text{ V}, \\quad \\text{Mn}^{3+}/\\text{Mn}^{2+} = +1.5\\text{ V}$<br>$\\text{Fe}^{2+}/\\text{Fe} = -0.4\\text{ V}, \\quad \\text{Fe}^{3+}/\\text{Fe}^{2+} = +0.8\\text{ V}$<br>Use this data to comment upon:<br>(i) the stability of $\\text{Fe}^{3+}$ in acid solution as compared to that of $\\text{Cr}^{3+}$ or $\\text{Mn}^{3+}$<br>(ii) the ease with which iron can be oxidised as compared to a similar process for either chromium or manganese metal.',
  `<div class="step">
    <b>Analysis of Standard Reduction Potentials:</b><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>(i) Stability of $\\text{Fe}^{3+}$ compared to $\\text{Cr}^{3+}$ and $\\text{Mn}^{3+}$:</strong><br>
        The reduction potentials for the $+3 \\rightarrow +2$ couples are:
        $$E^\\circ_{\\text{Mn}^{3+}/\\text{Mn}^{2+}} = +1.5\\text{ V} > E^\\circ_{\\text{Fe}^{3+}/\\text{Fe}^{2+}} = +0.8\\text{ V} > E^\\circ_{\\text{Cr}^{3+}/\\text{Cr}^{2+}} = -0.4\\text{ V}$$
        • Higher positive reduction potential means easier reduction of $\\text{M}^{3+}$ to $\\text{M}^{2+}$. Thus, $\\text{Mn}^{3+}$ is the least stable and strongest oxidising agent.<br>
        • $\\text{Cr}^{3+}$ has a negative reduction potential, meaning it is most stable and cannot be easily reduced to $\\text{Cr}^{2+}$.<br>
        • Thus, relative stability in acid solution: $\\mathbf{\\text{Cr}^{3+} > \\text{Fe}^{3+} > \\text{Mn}^{3+}}$.</li>
      <li><strong>(ii) Ease of Oxidation of Metals ($\text{M} \\rightarrow \\text{M}^{2+}$):</strong><br>
        The reduction potentials for $\\text{M}^{2+}/\\text{M}$ are:
        $$E^\\circ_{\\text{Mn}^{2+}/\\text{Mn}} = -1.2\\text{ V} < E^\\circ_{\\text{Cr}^{2+}/\\text{Cr}} = -0.9\\text{ V} < E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.4\\text{ V}$$
        More negative potential indicates greater ease of oxidation ($\text{M} \\rightarrow \text{M}^{2+} + 2e^-$).<br>
        Therefore, manganese is oxidised most easily, followed by chromium, and iron is oxidised with least ease:<br>
        $$\\mathbf{\\text{Mn} > \\text{Cr} > \\text{Fe}}$$
      </li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['(i) Ranking stability Cr³⁺ > Fe³⁺ > Mn³⁺ with E° analysis', '1½ Marks'],
    ['(ii) Ranking oxidation ease Mn > Cr > Fe with E° analysis', '1½ Marks']
  ]
));

// Exercise 4.18
questions.push(createQCard(
  'c12c-ch4-q28', 'Exercise 4.18', 'NCERT Exercise',
  'Predict which of the following will be coloured in aqueous solution? $\\text{Ti}^{3+}, \\text{V}^{3+}, \\text{Cu}^+, \\text{Sc}^{3+}, \\text{Mn}^{2+}, \\text{Fe}^{3+}$ and $\\text{Co}^{2+}$. Give reasons for each.',
  `<div class="step">
    <b>Criterion for Color:</b> An ion is coloured in aqueous solution if it contains <b>unpaired electrons</b> in its $(n-1)d$ subshell, enabling $d-d$ transitions upon absorbing visible light. Ions with $d^0$ or completely filled $d^{10}$ configurations are colorless.<br><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{Ti}^{3+}$ ($3d^1$):</strong> 1 unpaired electron $\\rightarrow$ <b>Coloured (Purple)</b>.</li>
      <li><strong>$\\text{V}^{3+}$ ($3d^2$):</strong> 2 unpaired electrons $\\rightarrow$ <b>Coloured (Green)</b>.</li>
      <li><strong>$\\text{Cu}^+$ ($3d^{10}$):</strong> Completely filled $d$-subshell ($d^{10}$, 0 unpaired $e^-$) $\\rightarrow$ <b>Colourless</b>.</li>
      <li><strong>$\\text{Sc}^{3+}$ ($3d^0$):</strong> Completely vacant $d$-subshell ($d^0$, no $d$-electrons) $\\rightarrow$ <b>Colourless</b>.</li>
      <li><strong>$\\text{Mn}^{2+}$ ($3d^5$):</strong> 5 unpaired electrons $\\rightarrow$ <b>Coloured (Light pink)</b>.</li>
      <li><strong>$\\text{Fe}^{3+}$ ($3d^5$):</strong> 5 unpaired electrons $\\rightarrow$ <b>Coloured (Yellow/Brown)</b>.</li>
      <li><strong>$\\text{Co}^{2+}$ ($3d^7$):</strong> 3 unpaired electrons $\\rightarrow$ <b>Coloured (Pink)</b>.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Stating d-d transition criterion (unpaired d-electrons vs d⁰/d¹⁰)', '1 Mark'],
    ['Identifying Ti³⁺, V³⁺, Mn²⁺, Fe³⁺, Co²⁺ as coloured', '1 Mark'],
    ['Identifying Sc³⁺ (d⁰) and Cu⁺ (d¹⁰) as colourless', '1 Mark']
  ]
));

// Exercise 4.19
questions.push(createQCard(
  'c12c-ch4-q29', 'Exercise 4.19', 'NCERT Exercise',
  'Compare the stability of $+2$ oxidation state for the elements of the first transition series.',
  `<div class="step">
    <b>Trend in Stability of $+2$ Oxidation State:</b><br>
    In the first transition series, the stability of the $+2$ oxidation state generally increases from left to right due to the progressive increase in the sum of the first and second ionisation enthalpies and increasing third ionisation enthalpy.<br><br>
    <b>Specific Observations:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Scandium:</strong> Does not exhibit $+2$ state; immediately forms stable $\\text{Sc}^{3+} ([\\text{Ar}] 3d^0)$.</li>
      <li><strong>Titanium & Vanadium:</strong> $+2$ state is strongly reducing and easily oxidised to higher states ($+4$ for Ti, $+5$ for V).</li>
      <li><strong>Chromium:</strong> $\\text{Cr}^{2+} (3d^4)$ is reducing because it readily oxidises to $\\text{Cr}^{3+} (t_{2g}^3)$.</li>
      <li><strong>Manganese:</strong> $\\text{Mn}^{2+} (3d^5)$ is exceptionally stable due to half-filled $d^5$ subshell ($E^\\circ_{\\text{Mn}^{3+}/\\text{Mn}^{2+}} = +1.5\\text{ V}$).</li>
      <li><strong>Iron, Cobalt, Nickel:</strong> $+2$ state is stable. In nickel, $\\text{Ni}^{2+}$ is the most stable oxidation state.</li>
      <li><strong>Copper:</strong> $\\text{Cu}^{2+}$ is more stable than $\\text{Cu}^+$ in water due to higher hydration enthalpy.</li>
      <li><strong>Zinc:</strong> $\\text{Zn}^{2+} (3d^{10})$ is the only stable oxidation state due to completely filled $d$-orbitals.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['General increase in stability from Sc to Zn', '1 Mark'],
    ['Highlights: Sc does not show +2, Mn²⁺ stable due to 3d⁵, Zn²⁺ stable due to 3d¹⁰', '1 Mark'],
    ['Discussion of reducing nature of Ti²⁺, V²⁺, Cr²⁺', '1 Mark']
  ]
));

// Exercise 4.20
questions.push(createQCard(
  'c12c-ch4-q30', 'Exercise 4.20', 'NCERT Exercise',
  'Compare the chemistry of actinoids with that of the lanthanoids with special reference to:<br>(i) electronic configuration<br>(ii) atomic and ionic sizes<br>(iii) oxidation states<br>(iv) chemical reactivity.',
  `<div class="step">
    <b>Comparison of Lanthanoids and Actinoids:</b><br>
    <table style="width:100%; border-collapse:collapse; margin:10px 0; border:1px solid #cbd5e1;">
      <tr style="background:#f1f5f9;">
        <th style="border:1px solid #cbd5e1; padding:6px; text-align:left;">Property</th>
        <th style="border:1px solid #cbd5e1; padding:6px; text-align:left;">Lanthanoids ($4f$-series)</th>
        <th style="border:1px solid #cbd5e1; padding:6px; text-align:left;">Actinoids ($5f$-series)</th>
      </tr>
      <tr>
        <td style="border:1px solid #cbd5e1; padding:6px;"><strong>(i) Configuration</strong></td>
        <td style="border:1px solid #cbd5e1; padding:6px;">$[\\text{Xe}] 4f^{1-14} 5d^{0-1} 6s^2$</td>
        <td style="border:1px solid #cbd5e1; padding:6px;">$[\\text{Rn}] 5f^{1-14} 6d^{0-1} 7s^2$</td>
      </tr>
      <tr>
        <td style="border:1px solid #cbd5e1; padding:6px;"><strong>(ii) Sizes</strong></td>
        <td style="border:1px solid #cbd5e1; padding:6px;">Lanthanoid contraction is smaller.</td>
        <td style="border:1px solid #cbd5e1; padding:6px;">Actinoid contraction is greater due to poorer shielding by $5f$ electrons.</td>
      </tr>
      <tr>
        <td style="border:1px solid #cbd5e1; padding:6px;"><strong>(iii) Oxidation states</strong></td>
        <td style="border:1px solid #cbd5e1; padding:6px;">Show predominantly <b>$+3$</b> with few $+2$ and $+4$ states.</td>
        <td style="border:1px solid #cbd5e1; padding:6px;">Show <b>greater range of oxidation states</b> ($+3, +4, +5, +6, +7$) because $5f, 6d$ and $7s$ are comparable in energy.</td>
      </tr>
      <tr>
        <td style="border:1px solid #cbd5e1; padding:6px;"><strong>(iv) Reactivity</strong></td>
        <td style="border:1px solid #cbd5e1; padding:6px;">Less reactive than actinoids; non-radioactive (except Pm).</td>
        <td style="border:1px solid #cbd5e1; padding:6px;">Highly reactive, tarnish rapidly; all are radioactive. Stronger tendency to form complexes.</td>
      </tr>
    </table>
  </div>`,
  '4 Marks',
  [
    ['(i) Electronic configuration comparison (4f vs 5f)', '1 Mark'],
    ['(ii) Contraction comparison (greater in actinoids due to poorer 5f shielding)', '1 Mark'],
    ['(iii) Wide oxidation states in actinoids (+3 to +7) vs narrow in lanthanoids (+3)', '1 Mark'],
    ['(iv) Higher reactivity, complex formation and radioactivity in actinoids', '1 Mark']
  ]
));

// Exercise 4.21
questions.push(createQCard(
  'c12c-ch4-q31', 'Exercise 4.21', 'NCERT Exercise',
  'How would you account for the following:<br>(i) Of the $d^4$ species, $\\text{Cr}^{2+}$ is strongly reducing while manganese(III) is strongly oxidising.<br>(ii) Cobalt(II) is stable in aqueous solution but in the presence of complexing reagents it is easily oxidised.<br>(iii) The $d^1$ configuration is very unstable in ions.',
  `<div class="step">
    <b>Explanations:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{Cr}^{2+}$ vs $\\text{Mn}^{3+}$:</strong><br>
        Both ions have $d^4$ configurations. When $\\text{Cr}^{2+}$ acts as a reducing agent, it loses an electron to form $\\text{Cr}^{3+} (d^3)$, which attains a stable <b>half-filled $t_{2g}^3$ level</b> in octahedral fields. In contrast, $\\text{Mn}^{3+}$ gains an electron to form $\\text{Mn}^{2+} (d^5)$, attaining an exceptionally stable <b>half-filled $3d^5$ subshell</b>. Hence, $\\text{Cr}^{2+}$ reduces while $\\text{Mn}^{3+}$ oxidises.</li>
      <li><strong>$\\text{Co(II)}$ in presence of ligands:</strong><br>
        In the presence of strong complexing agents (like $\text{NH}_3, \text{CN}^-$), the crystal field splitting energy ($\\Delta_o$) is high. The high CFSE gained by forming low-spin $d^6$ complexes ($t_{2g}^6$, completely filled $t_{2g}$ subshell) of $\\text{Co}^{3+}$ easily overcomes the third ionisation enthalpy of cobalt, making $\\text{Co(III)}$ complexes far more stable than $\\text{Co(II)}$.</li>
      <li><strong>Instability of $d^1$ ions:</strong><br>
        Ions with $d^1$ configuration (like $\\text{Ti}^{3+}$) tend to either lose the solitary $d$-electron to achieve a noble gas $d^0$ configuration ($\text{Ti}^{4+}$) or undergo disproportionation, because the energy needed to remove this single electron is easily compensated by the extra stability of empty shell ($d^0$) or hydration enthalpy.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) Cr³⁺ (t₂g³) half-filled octahedral stability vs Mn²⁺ (3d⁵) half-filled stability', '1 Mark'],
    ['(ii) Higher CFSE for low-spin Co³⁺ (t₂g⁶) compensating 3rd ionisation energy', '1 Mark'],
    ['(iii) Instability of d¹ due to ease of achieving noble gas d⁰ core', '1 Mark']
  ]
));

// Exercise 4.22
questions.push(createQCard(
  'c12c-ch4-q32', 'Exercise 4.22', 'NCERT Exercise',
  'What is meant by \'disproportionation\'? Give two examples of disproportionation reaction in aqueous solution.',
  `<div class="step">
    <b>Definition:</b><br>
    A disproportionation reaction is a redox reaction in which an element in a particular intermediate oxidation state simultaneously undergoes both <b>oxidation</b> (to a higher oxidation state) and <b>reduction</b> (to a lower oxidation state).<br><br>
    <b>Examples in Aqueous Solution:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Disproportionation of Copper(I) Ion:</strong>
        $$2\\text{Cu}^+(aq) \\rightarrow \\text{Cu}^{2+}(aq) + \\text{Cu}(s)$$
        Here, $\\text{Cu(I)}$ is simultaneously oxidised to $\\text{Cu(II)}$ and reduced to $\\text{Cu(0)}$.
      </li>
      <li><strong>Disproportionation of Manganate(VI) in Acidic Solution:</strong>
        $$3\\text{MnO}_4^{2-}(aq) + 4\\text{H}^+(aq) \\rightarrow 2\\text{MnO}_4^-(aq) + \\text{MnO}_2(s) + 2\\text{H}_2\\text{O}(l)$$
        Here, $\\text{Mn(VI)}$ in green manganate is simultaneously oxidised to $\\text{Mn(VII)}$ in purple permanganate and reduced to $\\text{Mn(IV)}$ in manganese dioxide.
      </li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Definition of disproportionation (simultaneous oxidation and reduction)', '1 Mark'],
    ['Two balanced aqueous examples: Cu⁺ and MnO₄²⁻', '1 Mark']
  ]
));

// Exercise 4.23
questions.push(createQCard(
  'c12c-ch4-q33', 'Exercise 4.23', 'NCERT Exercise',
  'Which metal in the first series of transition metals exhibits $+1$ oxidation state most frequently and why?',
  `<div class="step">
    <b>Answer: Copper ($\text{Cu}$, $Z = 29$)</b> exhibits the $+1$ oxidation state most frequently in the first transition series.<br><br>
    <b>Reason:</b><br>
    The electronic configuration of copper is $[\text{Ar}] 3d^{10} 4s^1$.<br>
    By losing its single $4s$ valence electron, copper forms the $\\text{Cu}^+$ ion, which achieves a <b>completely filled and extra-stable $3d^{10}$ subshell</b>:
    $$\\text{Cu}^+: [\\text{Ar}] 3d^{10}$$
    Because of this completely filled $d$-orbital stability, the second ionisation enthalpy of copper is very high, making $\\text{Cu}^+$ compounds (such as $\\text{CuCl}, \\text{Cu}_2\\text{O}, \\text{CuI}$) well known in solid and non-aqueous states.
  </div>`,
  '2 Marks',
  [
    ['Identification of copper (Cu)', '1 Mark'],
    ['Achievement of fully-filled 3d¹⁰ stable configuration in Cu⁺', '1 Mark']
  ]
));

// Exercise 4.24
questions.push(createQCard(
  'c12c-ch4-q34', 'Exercise 4.24', 'NCERT Exercise',
  'Calculate the number of unpaired electrons in the following gaseous ions: $\\text{Mn}^{3+}, \\text{Cr}^{3+}, \\text{V}^{3+}$ and $\\text{Ti}^{3+}$. Which one of these is the most stable in aqueous solution?',
  `<div class="step">
    <b>1. Calculation of Unpaired Electrons:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{Mn}^{3+}$ ($Z = 25$):</strong> $\\text{Mn}: [\\text{Ar}] 3d^5 4s^2 \\implies \\text{Mn}^{3+}: [\\text{Ar}] 3d^4$
        <br>Unpaired electrons: $\\mathbf{n = 4}$.</li>
      <li><strong>$\\text{Cr}^{3+}$ ($Z = 24$):</strong> $\\text{Cr}: [\\text{Ar}] 3d^5 4s^1 \\implies \\text{Cr}^{3+}: [\\text{Ar}] 3d^3$
        <br>Unpaired electrons: $\\mathbf{n = 3}$.</li>
      <li><strong>$\\text{V}^{3+}$ ($Z = 23$):</strong> $\\text{V}: [\\text{Ar}] 3d^3 4s^2 \\implies \\text{V}^{3+}: [\\text{Ar}] 3d^2$
        <br>Unpaired electrons: $\\mathbf{n = 2}$.</li>
      <li><strong>$\\text{Ti}^{3+}$ ($Z = 22$):</strong> $\\text{Ti}: [\\text{Ar}] 3d^2 4s^2 \\implies \\text{Ti}^{3+}: [\\text{Ar}] 3d^1$
        <br>Unpaired electrons: $\\mathbf{n = 1}$.</li>
    </ul>
    <br>
    <b>2. Most Stable Ion in Aqueous Solution:</b><br>
    <b>$\\text{Cr}^{3+}$ is the most stable</b> in aqueous solution.<br>
    <em>Reason:</em> In octahedral aqueous coordination complexes ($[\\text{Cr(H}_2\\text{O)}_6]^{3+}$), the $3d^3$ configuration corresponds to a <b>completely half-filled $t_{2g}^3$ subshell</b>, which possesses exceptionally high crystal field stabilization energy (CFSE).
  </div>`,
  '3 Marks',
  [
    ['Unpaired electrons for each ion: Mn³⁺ (4), Cr³⁺ (3), V³⁺ (2), Ti³⁺ (1)', '2 Marks'],
    ['Identification of Cr³⁺ as most stable due to half-filled t₂g³ subshell', '1 Mark']
  ]
));

console.log(`\nCompiling Chapter 4: The d- and f-Block Elements (Total: ${questions.length} Qs)...`);
saveChapter(chNum, chTitle, svgDiagram, exTitle, questions, 'Coordination Compounds');
console.log(`Chapter 4: The d- and f-Block Elements successfully saved!`);
