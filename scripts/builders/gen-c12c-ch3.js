// scripts/builders/gen-c12c-ch3.js
// Class 12 Chemistry Chapter 3: Chemical Kinetics (रासायनिक बलगतिकी) (NCERT Rationalised 2026–27)
// Full Coverage: 10 In-Text Questions + 20 End-of-Chapter Exercises = 30 Questions Verbatim
const { createQCard, saveChapter } = require('./c12c-helper');

const chNum = 3;
const chTitle = 'Chemical Kinetics (रासायनिक बलगतिकी)';
const exTitle = 'NCERT Chapter 3: In-Text Questions (3.1–3.10) & End-of-Chapter Exercises (3.1–3.20)';

const svgDiagram = `
<div style="background:linear-gradient(135deg, #ecfdf5, #d1fae5); border:1px solid #a7f3d0; border-radius:12px; padding:20px; margin-bottom:24px;">
  <h3 style="font-size:1.05rem; color:#065f46; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    Chemical Kinetics Foundations: Rate Laws, Integrated Equations & Arrhenius Theory
  </h3>
  <svg viewBox="0 0 850 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
    <!-- Box 1: Rate of Reaction & Order -->
    <rect x="15" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
    <text x="110" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Rate Law & Order</text>
    <text x="110" y="70" text-anchor="middle" font-size="11" fill="#334155">Rate = k [A]^x [B]^y</text>
    <text x="110" y="94" text-anchor="middle" font-size="10" fill="#64748b">• Overall order n = x + y</text>
    <text x="110" y="112" text-anchor="middle" font-size="10" fill="#64748b">• Units of k: (mol/L)^(1-n) s⁻¹</text>

    <!-- Box 2: Zero Order Kinetics -->
    <rect x="225" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="320" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">Zero Order Kinetics</text>
    <text x="320" y="72" text-anchor="middle" font-size="11" fill="#334155">[R] = [R]₀ - k t</text>
    <text x="320" y="96" text-anchor="middle" font-size="10" fill="#64748b">• t_½ = [R]₀ / (2k)</text>
    <text x="320" y="114" text-anchor="middle" font-size="10" fill="#64748b">• Units of k: mol L⁻¹ s⁻¹</text>

    <!-- Box 3: First Order Kinetics -->
    <rect x="435" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
    <text x="530" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">First Order Kinetics</text>
    <text x="530" y="72" text-anchor="middle" font-size="11" fill="#334155">k = (2.303/t) log([R]₀/[R])</text>
    <text x="530" y="96" text-anchor="middle" font-size="10" fill="#64748b">• t_½ = 0.693 / k (independent of [R]₀)</text>
    <text x="530" y="114" text-anchor="middle" font-size="10" fill="#64748b">• Radioactivity is 1st order</text>

    <!-- Box 4: Arrhenius Equation -->
    <rect x="645" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
    <text x="740" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#5b21b6">Arrhenius & Activation</text>
    <text x="740" y="72" text-anchor="middle" font-size="11" fill="#334155">k = A · e^(-E_a / RT)</text>
    <text x="740" y="96" text-anchor="middle" font-size="10" fill="#64748b">• log(k₂/k₁) = (E_a/2.303R)(ΔT/T₁T₂)</text>
    <text x="740" y="114" text-anchor="middle" font-size="10" fill="#64748b">• Catalyst lowers E_a barrier</text>
  </svg>
</div>`;

const questions = [];

// ============================================================================
// PART 1: NCERT IN-TEXT QUESTIONS (3.1 to 3.10)
// ============================================================================

// Question 3.1 (In-Text)
questions.push(createQCard(
  'c12c-ch3-q1', 'In-Text 3.1', 'NCERT In-Text',
  'For the reaction $R \\rightarrow P$, the concentration of a reactant changes from $0.03\\text{ M}$ to $0.02\\text{ M}$ in $25\\text{ minutes}$. Calculate the average rate of reaction using units of time both in minutes and seconds.',
  `<div class="step">
    <b>Formula:</b><br>
    The average rate of disappearance of reactant $R$ is:
    $$r_{\\text{avg}} = -\\frac{\\Delta [R]}{\\Delta t} = -\\frac{[R]_2 - [R]_1}{t_2 - t_1}$$
    Given: $[R]_1 = 0.03\\text{ M}$, $[R]_2 = 0.02\\text{ M}$, $\\Delta t = 25\\text{ min}$<br><br>
    <b>1. Rate in minutes:</b>
    $$r_{\\text{avg}} = -\\frac{0.02 - 0.03}{25\\text{ min}} = \\frac{0.01}{25} = \\mathbf{4.0 \\times 10^{-4}\\text{ mol L}^{-1}\\text{ min}^{-1}}$$
    <br>
    <b>2. Rate in seconds:</b>
    $$\\Delta t = 25 \\times 60 = 1500\\text{ s}$$
    $$r_{\\text{avg}} = -\\frac{0.02 - 0.03}{1500\\text{ s}} = \\frac{0.01}{1500} = \\mathbf{6.67 \\times 10^{-6}\\text{ mol L}^{-1}\\text{ s}^{-1}}$$
  </div>`,
  '2 Marks',
  [
    ['Formula with negative sign and rate in mol L⁻¹ min⁻¹ ($4.0 \\times 10^{-4}$)', '1 Mark'],
    ['Time conversion to seconds and rate in mol L⁻¹ s⁻¹ ($6.67 \\times 10^{-6}$)', '1 Mark']
  ]
));

// Question 3.2 (In-Text)
questions.push(createQCard(
  'c12c-ch3-q2', 'In-Text 3.2', 'NCERT In-Text',
  'In a reaction, $2A \\rightarrow \\text{Products}$, the concentration of $A$ decreases from $0.5\\text{ mol L}^{-1}$ to $0.4\\text{ mol L}^{-1}$ in $10\\text{ minutes}$. Calculate the rate during this interval.',
  `<div class="step">
    <b>Formula with Stoichiometric Coefficient:</b><br>
    For the reaction $2A \\rightarrow \\text{Products}$, the rate of reaction is:
    $$\\text{Rate} = -\\frac{1}{2} \\frac{\\Delta [A]}{\\Delta t}$$
    Given: $[A]_1 = 0.5\\text{ mol L}^{-1}$, $[A]_2 = 0.4\\text{ mol L}^{-1}$, $\\Delta t = 10\\text{ min}$<br><br>
    <b>Calculation:</b>
    $$\\text{Rate} = -\\frac{1}{2} \\left( \\frac{0.4 - 0.5}{10} \\right) = -\\frac{1}{2} \\left( \\frac{-0.1}{10} \\right) = \\frac{0.1}{20} = \\mathbf{5.0 \\times 10^{-3}\\text{ mol L}^{-1}\\text{ min}^{-1}}$$
    In seconds:
    $$\\text{Rate} = \\frac{5.0 \\times 10^{-3}}{60} = \\mathbf{8.33 \\times 10^{-5}\\text{ mol L}^{-1}\\text{ s}^{-1}}$$
  </div>`,
  '2 Marks',
  [
    ['Application of stoichiometric factor -1/2 in rate expression', '1 Mark'],
    ['Final calculated rate: $5.0 \\times 10^{-3}\\text{ mol L}^{-1}\\text{ min}^{-1}$ (or $8.33 \\times 10^{-5}\\text{ mol L}^{-1}\\text{ s}^{-1}$)', '1 Mark']
  ]
));

// Question 3.3 (In-Text)
questions.push(createQCard(
  'c12c-ch3-q3', 'In-Text 3.3', 'NCERT In-Text',
  'For a reaction, $A + B \\rightarrow \\text{Product}$; the rate law is given by, $r = k [A]^{1/2} [B]^2$. What is the overall order of reaction?',
  `<div class="step">
    <b>Definition:</b><br>
    The overall order of a reaction is the sum of the powers of the concentration terms of reactants in the rate law equation.<br><br>
    Given rate law: $r = k [A]^{1/2} [B]^2$<br>
    $$\\text{Overall Order } (n) = \\frac{1}{2} + 2 = \\frac{1 + 4}{2} = \\frac{5}{2} = \\mathbf{2.5}$$
    <b>Answer:</b> The overall order of reaction is <b>2.5</b> (or $5/2$).
  </div>`,
  '1 Mark',
  [
    ['Overall order definition and evaluation $n = 1/2 + 2 = 2.5$', '1 Mark']
  ]
));

// Question 3.4 (In-Text)
questions.push(createQCard(
  'c12c-ch3-q4', 'In-Text 3.4', 'NCERT In-Text',
  'The conversion of molecules $X$ to $Y$ follows second order kinetics. If concentration of $X$ is increased to three times how will it affect the rate of formation of $Y$?',
  `<div class="step">
    <b>Rate Law Formulation:</b><br>
    Since the conversion $X \\rightarrow Y$ follows second order kinetics:
    $$r_1 = k [X]^2$$
    When $[X]$ is increased to 3 times, new concentration $[X'] = 3[X]$:
    $$r_2 = k [X']^2 = k (3[X])^2 = 9 k [X]^2 = 9 r_1$$
    <b>Conclusion:</b> The rate of formation of $Y$ will become <b>9 times</b> the initial rate.
  </div>`,
  '1 Mark',
  [
    ['Derivation showing $(3[X])^2 = 9[X]^2$ and concluding 9-fold increase', '1 Mark']
  ]
));

// Question 3.5 (In-Text)
questions.push(createQCard(
  'c12c-ch3-q5', 'In-Text 3.5', 'NCERT In-Text',
  'A first order reaction has a rate constant $1.15 \\times 10^{-3}\\text{ s}^{-1}$. How long will $5\\text{ g}$ of this reactant take to reduce to $3\\text{ g}$?',
  `<div class="step">
    <b>Integrated Rate Equation for First Order Reaction:</b>
    $$t = \\frac{2.303}{k} \\log \\frac{[R]_0}{[R]}$$
    Given: $[R]_0 = 5\\text{ g}$, $[R] = 3\\text{ g}$, $k = 1.15 \\times 10^{-3}\\text{ s}^{-1}$<br><br>
    <b>Substitution:</b>
    $$t = \\frac{2.303}{1.15 \\times 10^{-3}} \\log \\left( \\frac{5}{3} \\right)$$
    $$\\log \\left( \\frac{5}{3} \\right) = \\log 5 - \\log 3 = 0.6990 - 0.4771 = 0.2219$$
    $$t = \\frac{2.303 \\times 0.2219}{1.15 \\times 10^{-3}} = \\frac{0.5110}{1.15 \\times 10^{-3}} = \\mathbf{444.35\\text{ s}} \\approx \\mathbf{444\\text{ s}}$$
    <b>Answer:</b> It will take approximately <b>444 seconds</b> (or $7.41\\text{ minutes}$).
  </div>`,
  '2 Marks',
  [
    ['First-order integrated rate formula substitution', '1 Mark'],
    ['Evaluation of log(5/3) and final answer ($t \\approx 444\\text{ s}$)', '1 Mark']
  ]
));

// Question 3.6 (In-Text)
questions.push(createQCard(
  'c12c-ch3-q6', 'In-Text 3.6', 'NCERT In-Text',
  'Time required to decompose $\\text{SO}_2\\text{Cl}_2$ to half of its initial amount is $60\\text{ minutes}$. If the decomposition is a first order reaction, calculate the rate constant of the reaction.',
  `<div class="step">
    <b>Relation between Half-Life and Rate Constant:</b><br>
    For a first order reaction, half-life $t_{1/2}$ is given by:
    $$t_{1/2} = \\frac{0.693}{k} \\implies k = \\frac{0.693}{t_{1/2}}$$
    Given: $t_{1/2} = 60\\text{ min} = 60 \\times 60 = 3600\\text{ s}$<br><br>
    <b>Rate Constant Calculations:</b><br>
    1. In $\\text{min}^{-1}$:
    $$k = \\frac{0.693}{60\\text{ min}} = \\mathbf{0.01155\\text{ min}^{-1}} = \\mathbf{1.155 \\times 10^{-2}\\text{ min}^{-1}}$$
    2. In $\\text{s}^{-1}$:
    $$k = \\frac{0.693}{3600\\text{ s}} = \\mathbf{1.925 \\times 10^{-4}\\text{ s}^{-1}}$$
  </div>`,
  '2 Marks',
  [
    ['First order half-life formula $k = 0.693 / t_{1/2}$', '1 Mark'],
    ['Accurate calculation: $1.155 \\times 10^{-2}\\text{ min}^{-1}$ or $1.925 \\times 10^{-4}\\text{ s}^{-1}$', '1 Mark']
  ]
));

// Question 3.7 (In-Text)
questions.push(createQCard(
  'c12c-ch3-q7', 'In-Text 3.7', 'NCERT In-Text',
  'What will be the effect of temperature on rate constant?',
  `<div class="step">
    <b>1. General Observation:</b><br>
    The rate constant of a chemical reaction increases with an increase in temperature. For most reactions, with a <b>$10^\\circ\\text{C}$ ($10\\text{ K}$) rise in temperature</b>, the rate constant nearly <b>doubles</b> (Temperature coefficient $\\approx 2$ to $3$).<br><br>
    <b>2. Quantitative Explanation (Arrhenius Equation):</b>
    $$k = A e^{-E_a / RT}$$
    where $A$ is the pre-exponential factor, $E_a$ is the activation energy, $R$ is the gas constant, and $T$ is absolute temperature.<br><br>
    <b>3. Molecular Mechanism:</b><br>
    As temperature increases, the average kinetic energy of reactant molecules increases. The Boltzmann factor $e^{-E_a/RT}$ represents the <b>fraction of molecules possessing energy equal to or greater than activation energy</b>. A small increase in temperature substantially enlarges this fraction, drastically increasing the frequency of effective collisions and hence elevating the rate constant $k$.
  </div>`,
  '2 Marks',
  [
    ['General effect (doubles with 10 K temperature rise)', '½ Mark'],
    ['Arrhenius equation $k = A e^{-E_a/RT}$ with variables defined', '1 Mark'],
    ['Molecular kinetic explanation (fraction of effective collisions)', '½ Mark']
  ]
));

// Question 3.8 (In-Text)
questions.push(createQCard(
  'c12c-ch3-q8', 'In-Text 3.8', 'NCERT In-Text',
  'The rate of the chemical reaction doubles for an increase of $10\\text{ K}$ in absolute temperature from $298\\text{ K}$. Calculate $E_a$.',
  `<div class="step">
    <b>Arrhenius Equation at Two Temperatures:</b>
    $$\\log \\frac{k_2}{k_1} = \\frac{E_a}{2.303 R} \\left[ \\frac{T_2 - T_1}{T_1 T_2} \\right]$$
    Given: $T_1 = 298\\text{ K}$, $T_2 = 298 + 10 = 308\\text{ K}$, $\\frac{k_2}{k_1} = 2$, $R = 8.314\\text{ J K}^{-1}\\text{ mol}^{-1}$<br>
    $\\log 2 = 0.3010$<br><br>
    <b>Substitution:</b>
    $$0.3010 = \\frac{E_a}{2.303 \\times 8.314} \\left[ \\frac{308 - 298}{298 \\times 308} \\right]$$
    $$0.3010 = \\frac{E_a}{19.147} \\left[ \\frac{10}{91784} \\right]$$
    $$E_a = \\frac{0.3010 \\times 19.147 \\times 91784}{10} = 52897.8\\text{ J mol}^{-1} = \\mathbf{52.9\\text{ kJ mol}^{-1}}$$
    <b>Answer:</b> The activation energy $E_a$ is <b>$52.9\\text{ kJ mol}^{-1}$</b>.
  </div>`,
  '3 Marks',
  [
    ['Arrhenius two-temperature formula stated correctly', '1 Mark'],
    ['Substitution of parameters ($T_1, T_2, \\log 2, R$)', '1 Mark'],
    ['Final activation energy with unit ($52.9\\text{ kJ mol}^{-1}$)', '1 Mark']
  ]
));

// Question 3.9 (In-Text)
questions.push(createQCard(
  'c12c-ch3-q9', 'In-Text 3.9', 'NCERT In-Text',
  'The activation energy for the reaction $2\\text{HI}(g) \\rightarrow \\text{H}_2 + \\text{I}_2(g)$ is $209.5\\text{ kJ mol}^{-1}$ at $581\\text{ K}$. Calculate the fraction of molecules of reactants having energy equal to or greater than activation energy.',
  `<div class="step">
    <b>Formula for Fraction of Molecules ($x$):</b><br>
    The fraction of molecules having energy $\\ge E_a$ is given by the Boltzmann factor:
    $$x = e^{-E_a / RT} \\implies \\log x = -\\frac{E_a}{2.303 R T}$$
    Given: $E_a = 209.5\\text{ kJ mol}^{-1} = 209500\\text{ J mol}^{-1}$, $T = 581\\text{ K}$, $R = 8.314\\text{ J K}^{-1}\\text{ mol}^{-1}$<br><br>
    <b>Calculation:</b>
    $$\\log x = -\\frac{209500}{2.303 \\times 8.314 \\times 581} = -\\frac{209500}{11124.5} = -18.8323$$
    $$\\log x = \\bar{19}.1677 = -19 + 0.1677$$
    $$x = \\text{Antilog}(0.1677) \\times 10^{-19} = \\mathbf{1.471 \\times 10^{-19}}$$
    <b>Answer:</b> The fraction of molecules is <b>$1.471 \\times 10^{-19}$</b>.
  </div>`,
  '2 Marks',
  [
    ['Boltzmann fraction formula $x = e^{-E_a/RT}$ and log conversion', '1 Mark'],
    ['Log calculation and antilog yielding $1.471 \\times 10^{-19}$', '1 Mark']
  ]
));

// Question 3.10 (In-Text)
questions.push(createQCard(
  'c12c-ch3-q10', 'In-Text 3.10', 'NCERT In-Text',
  'Explain the effect of adding a catalyst on the activation energy and rate of a chemical reaction.',
  `<div class="step">
    <b>Role and Mechanism of Catalyst:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Lowers Activation Energy:</strong> A catalyst provides an alternative reaction pathway involving a lower potential energy barrier (activation energy, $E_a' < E_a$).</li>
      <li><strong>Increases Reaction Rate:</strong> According to the Arrhenius equation ($k = A e^{-E_a/RT}$), a lower activation energy exponentially increases the Boltzmann factor $e^{-E_a/RT}$, significantly increasing the rate constant $k$ and thus accelerating the overall reaction.</li>
      <li><strong>No Effect on Equilibrium:</strong> A catalyst speeds up both forward and backward reactions equally. It does not alter the equilibrium constant ($K_c$) or standard Gibbs free energy change ($\\Delta G^\\circ$), but simply enables the system to attain equilibrium faster.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Mechanism: provides alternative pathway lowering activation energy ($E_a$)', '1 Mark'],
    ['Exponential increase in rate constant $k$ and unaffected equilibrium constant $K$', '1 Mark']
  ]
));

// ============================================================================
// PART 2: NCERT END-OF-CHAPTER EXERCISES (3.1 to 3.20)
// ============================================================================

// Exercise 3.1
questions.push(createQCard(
  'c12c-ch3-q11', 'Exercise 3.1', 'NCERT Exercise',
  'From the rate expression for the following reactions, determine their order of reaction and the dimensions of the rate constants:<br>(i) $3\\text{NO}(g) \\rightarrow \\text{N}_2\\text{O}(g)$; $\\text{Rate} = k[\\text{NO}]^2$<br>(ii) $\\text{H}_2\\text{O}_2(aq) + 3\\text{I}^-(aq) + 2\\text{H}^+ \\rightarrow 2\\text{H}_2\\text{O}(l) + \\text{I}_3^-$; $\\text{Rate} = k[\\text{H}_2\\text{O}_2][\\text{I}^-]$<br>(iii) $\\text{CH}_3\\text{CHO}(g) \\rightarrow \\text{CH}_4(g) + \\text{CO}(g)$; $\\text{Rate} = k[\\text{CH}_3\\text{CHO}]^{3/2}$<br>(iv) $\\text{C}_2\\text{H}_5\\text{Cl}(g) \\rightarrow \\text{C}_2\\text{H}_4(g) + \\text{HCl}(g)$; $\\text{Rate} = k[\\text{C}_2\\text{H}_5\\text{Cl}]$',
  `<div class="step">
    <b>General Dimensional Formula for Rate Constant ($k$):</b><br>
    For an $n^{\\text{th}}$ order reaction:
    $$\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\text{ s}^{-1} = \\text{mol}^{1-n} \\text{L}^{n-1} \\text{s}^{-1}$$
    <br>
    <ul style="margin-left:20px; line-height:1.8;">
      <li><strong>(i) $\\text{Rate} = k[\\text{NO}]^2$:</strong>
        <br>Order $n = 2$ (Second order).
        <br>Units of $k = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = \\mathbf{\\text{L mol}^{-1}\\text{ s}^{-1}}$.</li>
      <li><strong>(ii) $\\text{Rate} = k[\\text{H}_2\\text{O}_2][\\text{I}^-]$:</strong>
        <br>Order $n = 1 + 1 = 2$ (Second order).
        <br>Units of $k = \\mathbf{\\text{L mol}^{-1}\\text{ s}^{-1}}$.</li>
      <li><strong>(iii) $\\text{Rate} = k[\\text{CH}_3\\text{CHO}]^{3/2}$:</strong>
        <br>Order $n = 3/2 = 1.5$.
        <br>Units of $k = (\\text{mol L}^{-1})^{1 - 3/2} \\text{ s}^{-1} = \\mathbf{\\text{mol}^{-1/2}\\text{ L}^{1/2}\\text{ s}^{-1}}$.</li>
      <li><strong>(iv) $\\text{Rate} = k[\\text{C}_2\\text{H}_5\\text{Cl}]$:</strong>
        <br>Order $n = 1$ (First order).
        <br>Units of $k = (\\text{mol L}^{-1})^{1-1} \\text{ s}^{-1} = \\mathbf{\\text{s}^{-1}}$.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['(i) Order 2, Unit: L mol⁻¹ s⁻¹', '1 Mark'],
    ['(ii) Order 2, Unit: L mol⁻¹ s⁻¹', '1 Mark'],
    ['(iii) Order 1.5, Unit: mol⁻¹/² L¹/² s⁻¹', '1 Mark'],
    ['(iv) Order 1, Unit: s⁻¹', '1 Mark']
  ]
));

// Exercise 3.2
questions.push(createQCard(
  'c12c-ch3-q12', 'Exercise 3.2', 'NCERT Exercise',
  'For the reaction: $2A + B \\rightarrow A_2B$, the rate $= k[A][B]^2$ with $k = 2.0 \\times 10^{-6}\\text{ mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$. Calculate the initial rate of the reaction when $[A] = 0.1\\text{ mol L}^{-1}$, $[B] = 0.2\\text{ mol L}^{-1}$. Calculate the rate of reaction after $[A]$ is reduced to $0.06\\text{ mol L}^{-1}$.',
  `<div class="step">
    <b>1. Initial Rate of Reaction:</b>
    $$\\text{Rate}_0 = k [A] [B]^2 = (2.0 \\times 10^{-6}) \\times (0.1) \\times (0.2)^2$$
    $$\\text{Rate}_0 = 2.0 \\times 10^{-6} \\times 0.1 \\times 0.04 = \\mathbf{8.0 \\times 10^{-9}\\text{ mol L}^{-1}\\text{ s}^{-1}}$$
    <br>
    <b>2. Stoichiometry and Remaining Concentration:</b><br>
    Amount of $A$ reacted: $\\Delta [A] = 0.1 - 0.06 = 0.04\\text{ mol L}^{-1}$.<br>
    According to the reaction $2A + B \\rightarrow A_2B$, 2 moles of $A$ consume 1 mole of $B$:
    $$\\text{Amount of } B \\text{ reacted} = \\frac{1}{2} \\times 0.04 = 0.02\\text{ mol L}^{-1}$$
    Remaining concentration of $B$:
    $$[B]_{\\text{rem}} = 0.2 - 0.02 = 0.18\\text{ mol L}^{-1}$$
    <br>
    <b>3. Rate after $[A]$ is reduced to $0.06\\text{ M}$:</b>
    $$\\text{Rate} = k [A] [B]^2 = (2.0 \\times 10^{-6}) \\times (0.06) \\times (0.18)^2$$
    $$\\text{Rate} = 2.0 \\times 10^{-6} \\times 0.06 \\times 0.0324 = \\mathbf{3.89 \\times 10^{-9}\\text{ mol L}^{-1}\\text{ s}^{-1}}$$
  </div>`,
  '3 Marks',
  [
    ['Initial rate calculation: $8.0 \\times 10^{-9}\\text{ mol L}^{-1}\\text{ s}^{-1}$', '1 Mark'],
    ['Stoichiometric balance showing $[B]_{\\text{rem}} = 0.18\\text{ M}$', '1 Mark'],
    ['Subsequent rate calculation: $3.89 \\times 10^{-9}\\text{ mol L}^{-1}\\text{ s}^{-1}$', '1 Mark']
  ]
));

// Exercise 3.3
questions.push(createQCard(
  'c12c-ch3-q13', 'Exercise 3.3', 'NCERT Exercise',
  'The decomposition of $\\text{NH}_3$ on platinum surface is zero order reaction. What are the rates of production of $\\text{N}_2$ and $\\text{H}_2$ if $k = 2.5 \\times 10^{-4}\\text{ mol L}^{-1}\\text{ s}^{-1}$?',
  `<div class="step">
    <b>Reaction and Rate Expressions:</b><br>
    Reaction: $2\\text{NH}_3(g) \\xrightarrow{\\text{Pt}} \\text{N}_2(g) + 3\\text{H}_2(g)$<br>
    The rate of reaction is given by:
    $$\\text{Rate} = -\\frac{1}{2} \\frac{d[\\text{NH}_3]}{dt} = \\frac{d[\\text{N}_2]}{dt} = \\frac{1}{3} \\frac{d[\\text{H}_2]}{dt}$$
    For a zero order reaction: $\\text{Rate} = k [\\text{NH}_3]^0 = k = 2.5 \\times 10^{-4}\\text{ mol L}^{-1}\\text{ s}^{-1}$.<br><br>
    <b>1. Rate of production of $\\text{N}_2$:</b>
    $$\\frac{d[\\text{N}_2]}{dt} = \\text{Rate} = \\mathbf{2.5 \\times 10^{-4}\\text{ mol L}^{-1}\\text{ s}^{-1}}$$
    <br>
    <b>2. Rate of production of $\\text{H}_2$:</b>
    $$\\frac{d[\\text{H}_2]}{dt} = 3 \\times \\text{Rate} = 3 \\times (2.5 \\times 10^{-4}) = \\mathbf{7.5 \\times 10^{-4}\\text{ mol L}^{-1}\\text{ s}^{-1}}$$
  </div>`,
  '2 Marks',
  [
    ['Rate of formation of N₂: $2.5 \\times 10^{-4}\\text{ mol L}^{-1}\\text{ s}^{-1}$', '1 Mark'],
    ['Rate of formation of H₂ ($3k$): $7.5 \\times 10^{-4}\\text{ mol L}^{-1}\\text{ s}^{-1}$', '1 Mark']
  ]
));

// Exercise 3.4
questions.push(createQCard(
  'c12c-ch3-q14', 'Exercise 3.4', 'NCERT Exercise',
  'The decomposition of dimethyl ether leads to the formation of $\\text{CH}_4, \\text{H}_2$ and $\\text{CO}$ and the reaction rate is given by $\\text{Rate} = k [p_{\\text{CH}_3\\text{OCH}_3}]^{3/2}$. If the pressure is measured in bar and time in minutes, then what are the units of rate and rate constant?',
  `<div class="step">
    <b>1. Units of Rate:</b><br>
    Rate of reaction in terms of pressure is change in partial pressure per unit time:
    $$\\text{Unit of Rate} = \\frac{\\Delta p}{\\Delta t} = \\frac{\\text{bar}}{\\text{min}} = \\mathbf{\\text{bar min}^{-1}}$$
    <br>
    <b>2. Units of Rate Constant ($k$):</b><br>
    From the given rate equation:
    $$\\text{Rate} = k \\cdot p^{3/2} \\implies k = \\frac{\\text{Rate}}{p^{3/2}}$$
    $$\\text{Unit of } k = \\frac{\\text{bar min}^{-1}}{(\\text{bar})^{3/2}} = \\text{bar}^{1 - 3/2} \\text{ min}^{-1} = \\mathbf{\\text{bar}^{-1/2}\\text{ min}^{-1}}$$
  </div>`,
  '2 Marks',
  [
    ['Unit of rate: bar min⁻¹', '1 Mark'],
    ['Unit of rate constant: bar⁻¹/² min⁻¹', '1 Mark']
  ]
));

// Exercise 3.5
questions.push(createQCard(
  'c12c-ch3-q15', 'Exercise 3.5', 'NCERT Exercise',
  'Mention the factors that affect the rate of a chemical reaction.',
  `<div class="step">
    <b>Major Factors Affecting the Rate of a Chemical Reaction:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Nature of Reactants:</strong> Ionic reactions occur instantaneously, whereas covalent bonds require bond cleavage and have distinct activation energies.</li>
      <li><strong>Concentration of Reactants:</strong> Greater concentration increases collision frequency per unit volume, increasing the reaction rate.</li>
      <li><strong>Temperature:</strong> Reaction rates increase exponentially with temperature. As a rule of thumb, every 10 K rise doubles or triples the rate constant.</li>
      <li><strong>Presence of Catalyst:</strong> A catalyst provides an alternate pathway with lower activation energy, increasing reaction rate without being consumed.</li>
      <li><strong>Surface Area of Reactants:</strong> In heterogeneous reactions, finely divided powders present larger surface area, leading to faster rates.</li>
      <li><strong>Exposure to Light (Radiation):</strong> Photochemical reactions require absorption of specific photon energies ($h\\nu$) to initiate reaction.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Nature of reactants & concentration effects', '1 Mark'],
    ['Temperature effect & catalyst role', '1 Mark'],
    ['Surface area & radiation exposure', '1 Mark']
  ]
));

// Exercise 3.6
questions.push(createQCard(
  'c12c-ch3-q16', 'Exercise 3.6', 'NCERT Exercise',
  'A reaction is second order with respect to a reactant. How is the rate of reaction affected if the concentration of the reactant is:<br>(i) doubled?<br>(ii) reduced to half?',
  `<div class="step">
    <b>Rate Law:</b><br>
    Let the concentration of the reactant be $[A]$. For second order:
    $$r_1 = k [A]^2$$
    <br>
    <b>(i) When $[A]$ is doubled ($[A'] = 2[A]$):</b>
    $$r_2 = k [2A]^2 = 4 k [A]^2 = 4 r_1$$
    The rate of reaction increases by <b>4 times</b>.<br><br>
    <b>(ii) When $[A]$ is reduced to half ($[A''] = \\frac{1}{2}[A]$):</b>
    $$r_3 = k \\left( \\frac{1}{2}[A] \\right)^2 = \\frac{1}{4} k [A]^2 = \\frac{1}{4} r_1$$
    The rate of reaction becomes <b>one-fourth ($1/4^{\\text{th}}$)</b> of the initial rate.
  </div>`,
  '2 Marks',
  [
    ['(i) Proving rate increases 4-fold: $r_2 = 4r_1$', '1 Mark'],
    ['(ii) Proving rate decreases to 1/4th: $r_3 = (1/4)r_1$', '1 Mark']
  ]
));

// Exercise 3.7
questions.push(createQCard(
  'c12c-ch3-q17', 'Exercise 3.7', 'NCERT Exercise',
  'What is the effect of temperature on the rate constant of a reaction? How can this temperature effect on rate constant be represented quantitatively?',
  `<div class="step">
    <b>1. Qualitative Effect:</b><br>
    The rate constant increases significantly with rising temperature. For every $10^\\circ\\text{C}$ rise, the rate constant doubles or triples because the fraction of molecules with energy exceeding activation energy increases.<br><br>
    <b>2. Quantitative Formulations (Arrhenius Equation):</b>
    $$k = A e^{-E_a / RT}$$
    Taking natural logarithm on both sides:
    $$\\ln k = \\ln A - \\frac{E_a}{RT}$$
    Converting to base-10 logarithm:
    $$\\log k = \\log A - \\frac{E_a}{2.303 R T}$$
    At two different temperatures $T_1$ and $T_2$ with rate constants $k_1$ and $k_2$:
    $$\\log \\frac{k_2}{k_1} = \\frac{E_a}{2.303 R} \\left[ \\frac{T_2 - T_1}{T_1 T_2} \\right]$$
  </div>`,
  '3 Marks',
  [
    ['Qualitative description and temperature coefficient', '1 Mark'],
    ['Arrhenius exponential and linear logarithmic forms', '1 Mark'],
    ['Integrated two-temperature formula', '1 Mark']
  ]
));

// Exercise 3.8
questions.push(createQCard(
  'c12c-ch3-q18', 'Exercise 3.8', 'NCERT Exercise',
  'In a pseudo first order reaction in water, the following results were obtained:<br><div style="overflow-x:auto;"><table style="width:100%; border-collapse:collapse; margin:10px 0; border:1px solid #cbd5e1;"><tr style="background:#f1f5f9;"><th style="border:1px solid #cbd5e1; padding:6px;">t / s</th><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">30</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">60</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">90</td></tr><tr><th style="border:1px solid #cbd5e1; padding:6px;">[A] / mol L⁻¹</th><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.55</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.31</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.17</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.085</td></tr></table></div>Calculate the average rate of reaction between the time interval 30 to 60 seconds, and calculate the pseudo first order rate constant.',
  `<div class="step">
    <b>1. Average Rate between 30 and 60 seconds:</b>
    $$r_{\\text{avg}} = -\\frac{[A]_{60} - [A]_{30}}{60 - 30} = -\\frac{0.17 - 0.31}{30} = \\frac{0.14}{30} = \\mathbf{4.67 \\times 10^{-3}\\text{ mol L}^{-1}\\text{ s}^{-1}}$$
    <br>
    <b>2. Pseudo First-Order Rate Constant ($k$):</b><br>
    Using $k = \\frac{2.303}{t} \\log \\frac{[A]_0}{[A]}$ with $[A]_0 = 0.55\\text{ M}$:
    <ul style="margin-left:20px; line-height:1.75;">
      <li>At $t = 30\\text{ s}$: $k_1 = \\frac{2.303}{30} \\log \\frac{0.55}{0.31} = \\frac{2.303}{30} \\log(1.774) = \\frac{2.303 \\times 0.249}{30} = 1.91 \\times 10^{-2}\\text{ s}^{-1}$</li>
      <li>At $t = 60\\text{ s}$: $k_2 = \\frac{2.303}{60} \\log \\frac{0.55}{0.17} = \\frac{2.303}{60} \\log(3.235) = \\frac{2.303 \\times 0.510}{60} = 1.96 \\times 10^{-2}\\text{ s}^{-1}$</li>
      <li>At $t = 90\\text{ s}$: $k_3 = \\frac{2.303}{90} \\log \\frac{0.55}{0.085} = \\frac{2.303}{90} \\log(6.471) = \\frac{2.303 \\times 0.811}{90} = 2.07 \\times 10^{-2}\\text{ s}^{-1}$</li>
    </ul>
    $$k_{\\text{avg}} = \\frac{1.91 + 1.96 + 2.07}{3} \\times 10^{-2} = \\mathbf{1.98 \\times 10^{-2}\\text{ s}^{-1}}$$
  </div>`,
  '3 Marks',
  [
    ['Average rate between 30 and 60 s ($4.67 \\times 10^{-3}\\text{ mol L}^{-1}\\text{ s}^{-1}$)', '1 Mark'],
    ['Evaluating individual rate constants at 30, 60, 90 s', '1 Mark'],
    ['Average rate constant ($1.98 \\times 10^{-2}\\text{ s}^{-1}$)', '1 Mark']
  ]
));

// Exercise 3.9
questions.push(createQCard(
  'c12c-ch3-q19', 'Exercise 3.9', 'NCERT Exercise',
  'A reaction is first order in $A$ and second order in $B$:<br>(i) Write the differential rate equation.<br>(ii) How is the rate affected on increasing the concentration of $B$ three times?<br>(iii) How is the rate affected when the concentrations of both $A$ and $B$ are doubled?',
  `<div class="step">
    <b>(i) Differential Rate Equation:</b>
    $$-\\frac{d[R]}{dt} = k [A]^1 [B]^2$$
    <br>
    <b>(ii) Effect of Increasing $[B]$ Three Times ($[B'] = 3[B]$):</b>
    $$\\text{Rate}_2 = k [A] (3[B])^2 = 9 k [A][B]^2 = 9 \\times \\text{Rate}_1$$
    The rate increases by <b>9 times</b>.<br><br>
    <b>(iii) Effect of Doubling both $[A]$ and $[B]$ ($[A'] = 2[A], [B'] = 2[B]$):</b>
    $$\\text{Rate}_3 = k (2[A]) (2[B])^2 = 2 \\times 4 \\times k [A][B]^2 = 8 \\times \\text{Rate}_1$$
    The rate increases by <b>8 times</b>.
  </div>`,
  '3 Marks',
  [
    ['(i) Differential rate expression', '1 Mark'],
    ['(ii) 9-fold increase shown mathematically', '1 Mark'],
    ['(iii) 8-fold increase shown mathematically', '1 Mark']
  ]
));

// Exercise 3.10
questions.push(createQCard(
  'c12c-ch3-q20', 'Exercise 3.10', 'NCERT Exercise',
  'In a reaction between $A$ and $B$, the initial rate of reaction ($r_0$) was measured for different initial concentrations of $A$ and $B$ as given below:<br><div style="overflow-x:auto;"><table style="width:100%; border-collapse:collapse; margin:10px 0; border:1px solid #cbd5e1;"><tr style="background:#f1f5f9;"><th style="border:1px solid #cbd5e1; padding:6px;">Exp.</th><th style="border:1px solid #cbd5e1; padding:6px;">[A] / mol L⁻¹</th><th style="border:1px solid #cbd5e1; padding:6px;">[B] / mol L⁻¹</th><th style="border:1px solid #cbd5e1; padding:6px;">r₀ / mol L⁻¹ s⁻¹</th></tr><tr><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">1</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.20</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.30</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">5.07 × 10⁻⁵</td></tr><tr><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">2</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.20</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.10</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">5.07 × 10⁻⁵</td></tr><tr><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">3</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.40</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.05</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">1.43 × 10⁻⁴</td></tr></table></div>What is the order of the reaction with respect to $A$ and $B$?',
  `<div class="step">
    <b>General Rate Law:</b> $r_0 = k [A]^x [B]^y$<br><br>
    <b>1. Order with respect to $B$ ($y$):</b><br>
    Dividing Exp 1 by Exp 2:
    $$\\frac{5.07 \\times 10^{-5}}{5.07 \\times 10^{-5}} = \\frac{k (0.20)^x (0.30)^y}{k (0.20)^x (0.10)^y} \\implies 1 = (3)^y \\implies \\mathbf{y = 0}$$
    The reaction is <b>zero order with respect to $B$</b>.<br><br>
    <b>2. Order with respect to $A$ ($x$):</b><br>
    Since $y = 0$, dividing Exp 3 by Exp 2:
    $$\\frac{1.43 \\times 10^{-4}}{5.07 \\times 10^{-5}} = \\frac{k (0.40)^x}{k (0.20)^x} \\implies 2.82 = (2)^x$$
    Taking logarithms:
    $$\\log(2.82) = x \\log(2) \\implies 0.4502 = x (0.3010) \\implies x = \\frac{0.4502}{0.3010} \\approx \\mathbf{1.5} \\text{ (or } 3/2)$$
    <b>Answer:</b> Order with respect to $A$ is <b>1.5</b>; order with respect to $B$ is <b>0</b>.
  </div>`,
  '3 Marks',
  [
    ['Determining order with respect to B = 0', '1½ Marks'],
    ['Determining order with respect to A = 1.5 (or 3/2)', '1½ Marks']
  ]
));

// Exercise 3.11
questions.push(createQCard(
  'c12c-ch3-q21', 'Exercise 3.11', 'NCERT Exercise',
  'The following results have been obtained during the kinetic studies of the reaction: $2A + B \\rightarrow C + D$<br><div style="overflow-x:auto;"><table style="width:100%; border-collapse:collapse; margin:10px 0; border:1px solid #cbd5e1;"><tr style="background:#f1f5f9;"><th style="border:1px solid #cbd5e1; padding:6px;">Exp.</th><th style="border:1px solid #cbd5e1; padding:6px;">[A] / M</th><th style="border:1px solid #cbd5e1; padding:6px;">[B] / M</th><th style="border:1px solid #cbd5e1; padding:6px;">Initial rate / mol L⁻¹ min⁻¹</th></tr><tr><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">I</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.1</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.1</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">6.0 × 10⁻³</td></tr><tr><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">II</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.3</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.2</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">7.2 × 10⁻²</td></tr><tr><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">III</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.3</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.4</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">2.88 × 10⁻¹</td></tr><tr><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">IV</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.4</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.1</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">2.40 × 10⁻²</td></tr></table></div>Determine the rate law and the rate constant for the reaction.',
  `<div class="step">
    <b>1. Deduce Orders from Experimental Data:</b><br>
    Let Rate $= k [A]^x [B]^y$.<br>
    Dividing Exp IV by Exp I (where $[B] = 0.1\\text{ M}$ is constant):
    $$\\frac{2.40 \\times 10^{-2}}{6.0 \\times 10^{-3}} = \\left( \\frac{0.4}{0.1} \\right)^x \\implies 4 = 4^x \\implies \\mathbf{x = 1}$$
    Dividing Exp III by Exp II (where $[A] = 0.3\\text{ M}$ is constant):
    $$\\frac{2.88 \\times 10^{-1}}{7.2 \\times 10^{-2}} = \\left( \\frac{0.4}{0.2} \\right)^y \\implies 4 = 2^y \\implies \\mathbf{y = 2}$$
    <b>Rate Law:</b> $\\mathbf{\\text{Rate} = k [A][B]^2}$<br><br>
    <b>2. Rate Constant ($k$):</b><br>
    Using Exp I: $[A] = 0.1\\text{ M}$, $[B] = 0.1\\text{ M}$, $\\text{Rate} = 6.0 \\times 10^{-3}\\text{ mol L}^{-1}\\text{ min}^{-1}$
    $$6.0 \\times 10^{-3} = k (0.1) (0.1)^2 = k \\times 10^{-3} \\implies \\mathbf{k = 6.0\\text{ mol}^{-2}\\text{ L}^2\\text{ min}^{-1}}$$
  </div>`,
  '3 Marks',
  [
    ['Evaluating orders x = 1 and y = 2', '1½ Marks'],
    ['Writing rate law expression Rate = k [A][B]²', '½ Mark'],
    ['Calculated rate constant with correct units ($6.0\\text{ L}^2\\text{ mol}^{-2}\\text{ min}^{-1}$)', '1 Mark']
  ]
));

// Exercise 3.12
questions.push(createQCard(
  'c12c-ch3-q22', 'Exercise 3.12', 'NCERT Exercise',
  'The reaction between $A$ and $B$ is first order with respect to $A$ and zero order with respect to $B$. Fill in the blanks in the following table:<br><div style="overflow-x:auto;"><table style="width:100%; border-collapse:collapse; margin:10px 0; border:1px solid #cbd5e1;"><tr style="background:#f1f5f9;"><th style="border:1px solid #cbd5e1; padding:6px;">Exp.</th><th style="border:1px solid #cbd5e1; padding:6px;">[A] / mol L⁻¹</th><th style="border:1px solid #cbd5e1; padding:6px;">[B] / mol L⁻¹</th><th style="border:1px solid #cbd5e1; padding:6px;">Initial rate / mol L⁻¹ min⁻¹</th></tr><tr><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">I</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.1</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.1</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">2.0 × 10⁻²</td></tr><tr><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">II</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">—</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.2</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">4.0 × 10⁻²</td></tr><tr><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">III</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.4</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.4</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">—</td></tr><tr><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">IV</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">—</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0.2</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">2.0 × 10⁻²</td></tr></table></div>',
  `<div class="step">
    <b>Rate Law:</b> $\\text{Rate} = k [A]^1 [B]^0 = k [A]$<br>
    From Exp I: $2.0 \\times 10^{-2} = k (0.1) \\implies k = 0.2\\text{ min}^{-1}$.<br><br>
    <b>Blank Calculations:</b><br>
    <ul style="margin-left:20px; line-height:1.8;">
      <li><strong>Exp II:</strong> $\\text{Rate} = 4.0 \\times 10^{-2} = 0.2 \\times [A] \\implies [A] = \\frac{4.0 \\times 10^{-2}}{0.2} = \\mathbf{0.2\\text{ mol L}^{-1}}$.</li>
      <li><strong>Exp III:</strong> $[A] = 0.4\\text{ mol L}^{-1} \\implies \\text{Rate} = 0.2 \\times 0.4 = \\mathbf{8.0 \\times 10^{-2}\\text{ mol L}^{-1}\\text{ min}^{-1}}$.</li>
      <li><strong>Exp IV:</strong> $\\text{Rate} = 2.0 \\times 10^{-2} = 0.2 \\times [A] \\implies [A] = \\frac{2.0 \\times 10^{-2}}{0.2} = \\mathbf{0.1\\text{ mol L}^{-1}}$.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Determining k = 0.2 min⁻¹', '1 Mark'],
    ['Values for Exp II ([A] = 0.2 M) & Exp III (Rate = 8.0 × 10⁻²)', '1 Mark'],
    ['Value for Exp IV ([A] = 0.1 M)', '1 Mark']
  ]
));

// Exercise 3.13
questions.push(createQCard(
  'c12c-ch3-q23', 'Exercise 3.13', 'NCERT Exercise',
  'Calculate the half-life of a first order reaction from their rate constants given below:<br>(a) $200\\text{ s}^{-1}$<br>(b) $2\\text{ min}^{-1}$<br>(c) $4\\text{ year}^{-1}$',
  `<div class="step">
    <b>Formula:</b> For a first order reaction:
    $$t_{1/2} = \\frac{0.693}{k}$$
    <br>
    <ul style="margin-left:20px; line-height:1.8;">
      <li><strong>(a) For $k = 200\\text{ s}^{-1}$:</strong>
        $$t_{1/2} = \\frac{0.693}{200\\text{ s}^{-1}} = \\mathbf{3.465 \\times 10^{-3}\\text{ s}}$$</li>
      <li><strong>(b) For $k = 2\\text{ min}^{-1}$:</strong>
        $$t_{1/2} = \\frac{0.693}{2\\text{ min}^{-1}} = \\mathbf{0.3465\\text{ min}} \\approx \\mathbf{20.8\\text{ s}}$$</li>
      <li><strong>(c) For $k = 4\\text{ year}^{-1}$:</strong>
        $$t_{1/2} = \\frac{0.693}{4\\text{ year}^{-1}} = \\mathbf{0.17325\\text{ years}} \\approx \\mathbf{63.2\\text{ days}}$$</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['(a) t½ = 3.465 × 10⁻³ s', '1 Mark'],
    ['(b) t½ = 0.3465 min', '1 Mark'],
    ['(c) t½ = 0.17325 years', '1 Mark']
  ]
));

// Exercise 3.14
questions.push(createQCard(
  'c12c-ch3-q24', 'Exercise 3.14', 'NCERT Exercise',
  'The half-life for radioactive decay of $^{14}\\text{C}$ is $5730\\text{ years}$. An archaeological artifact containing wood had only $80\\%$ of the $^{14}\\text{C}$ found in a living tree. Estimate the age of the sample.',
  `<div class="step">
    <b>1. Radioactive Decay Constant ($k$):</b><br>
    Radioactive decay follows first order kinetics:
    $$k = \\frac{0.693}{t_{1/2}} = \\frac{0.693}{5730\\text{ years}} = 1.209 \\times 10^{-4}\\text{ year}^{-1}$$
    <br>
    <b>2. Integrated First Order Equation:</b>
    $$t = \\frac{2.303}{k} \\log \\frac{[R]_0}{[R]}$$
    Let initial concentration $[R]_0 = 100$. Current concentration $[R] = 80$.
    $$t = \\frac{2.303}{1.209 \\times 10^{-4}} \\log \\left( \\frac{100}{80} \\right) = \\frac{2.303}{1.209 \\times 10^{-4}} \\log(1.25)$$
    $$\\log(1.25) = 0.0969$$
    $$t = \\frac{2.303 \\times 0.0969}{1.209 \\times 10^{-4}} = \\frac{0.22316}{1.209 \\times 10^{-4}} = \\mathbf{1845.8\\text{ years}} \\approx \\mathbf{1846\\text{ years}}$$
    <b>Answer:</b> The estimated age of the wood sample is approximately <b>1846 years</b>.
  </div>`,
  '3 Marks',
  [
    ['Calculation of decay constant k ($1.209 \\times 10^{-4}\\text{ yr}^{-1}$)', '1 Mark'],
    ['Log ratio $\\log(100/80) = 0.0969$', '1 Mark'],
    ['Estimated age $t \\approx 1846\\text{ years}$', '1 Mark']
  ]
));

// Exercise 3.15
questions.push(createQCard(
  'c12c-ch3-q25', 'Exercise 3.15', 'NCERT Exercise',
  'The experimental data for decomposition of $\\text{N}_2\\text{O}_5$ [$2\\text{N}_2\\text{O}_5 \\rightarrow 4\\text{NO}_2 + \\text{O}_2$] in gas phase at $318\\text{ K}$ are given below:<br><div style="overflow-x:auto;"><table style="width:100%; border-collapse:collapse; margin:10px 0; border:1px solid #cbd5e1;"><tr style="background:#f1f5f9;"><th style="border:1px solid #cbd5e1; padding:4px;">t / s</th><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">0</td><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">400</td><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">800</td><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">1200</td><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">1600</td><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">2000</td><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">2400</td><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">2800</td><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">3200</td></tr><tr><th style="border:1px solid #cbd5e1; padding:4px;">10² [N₂O₅] / M</th><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">1.63</td><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">1.36</td><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">1.14</td><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">0.93</td><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">0.78</td><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">0.64</td><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">0.53</td><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">0.43</td><td style="border:1px solid #cbd5e1; padding:4px; text-align:center;">0.35</td></tr></table></div>(i) Plot $[\\text{N}_2\\text{O}_5]$ vs $t$.<br>(ii) Find the half-life period for the reaction.<br>(iii) Draw a graph between $\\log [\\text{N}_2\\text{O}_5]$ and $t$.<br>(iv) What is the rate law?<br>(v) Calculate the rate constant.<br>(vi) Calculate the half-life period from $k$ and compare it with (ii).',
  `<div class="step">
    <b>(i) & (ii) Plot $[\\text{N}_2\\text{O}_5]$ vs $t$ and Graphical Half-Life:</b><br>
    A plot of $[\\text{N}_2\\text{O}_5]$ vs $t$ yields an exponential decay curve. Initial concentration $[\\text{N}_2\\text{O}_5]_0 = 1.63 \\times 10^{-2}\\text{ M}$. Half of this value is:
    $$\\frac{1.63 \\times 10^{-2}}{2} = 0.815 \\times 10^{-2}\\text{ M}$$
    From the curve, the time corresponding to $0.815 \\times 10^{-2}\\text{ M}$ is approximately <b>$1440\\text{ s}$</b>. Thus, graphical $t_{1/2} \\approx 1440\\text{ s}$.<br><br>
    <b>(iii) & (iv) $\\log [\\text{N}_2\\text{O}_5]$ vs $t$ Plot and Rate Law:</b><br>
    Plotting $\\log [\\text{N}_2\\text{O}_5]$ against $t$ gives a straight line with a negative slope, proving that the reaction is <b>first order</b>.<br>
    $$\\mathbf{\\text{Rate} = k [\\text{N}_2\\text{O}_5]}$$
    <br>
    <b>(v) & (vi) Rate Constant and Comparison:</b><br>
    $$\\text{Slope} = -\\frac{k}{2.303} = \\frac{-2.456 - (-1.788)}{3200 - 0} = -2.0875 \\times 10^{-4}\\text{ s}^{-1}$$
    $$k = -2.303 \\times \\text{Slope} = 2.303 \\times 2.0875 \\times 10^{-4} = \\mathbf{4.81 \\times 10^{-4}\\text{ s}^{-1}}$$
    Calculated half-life:
    $$t_{1/2} = \\frac{0.693}{k} = \\frac{0.693}{4.81 \\times 10^{-4}} = \\mathbf{1440.7\\text{ s}}$$
    <b>Conclusion:</b> The calculated half-life ($1441\\text{ s}$) shows excellent agreement with the graphical value ($1440\\text{ s}$).
  </div>`,
  '5 Marks',
  [
    ['(i & ii) Graphical half-life estimation (~1440 s)', '1 Mark'],
    ['(iii) Linear plot of log[N₂O₅] vs t showing first order', '1 Mark'],
    ['(iv) Formulating Rate = k [N₂O₅]', '1 Mark'],
    ['(v) Rate constant calculation ($4.81 \\times 10^{-4}\\text{ s}^{-1}$)', '1 Mark'],
    ['(vi) Calculated t½ and comparison with graphical value', '1 Mark']
  ]
));

// Exercise 3.16
questions.push(createQCard(
  'c12c-ch3-q26', 'Exercise 3.16', 'NCERT Exercise',
  'The rate constant for a first order reaction is $60\\text{ s}^{-1}$. How much time will it take to reduce the initial concentration of the reactant to its $1/16^{\\text{th}}$ value?',
  `<div class="step">
    <b>Method 1: Integrated Rate Equation:</b><br>
    Given: $k = 60\\text{ s}^{-1}$, $\\frac{[R]_0}{[R]} = 16$.
    $$t = \\frac{2.303}{k} \\log \\frac{[R]_0}{[R]} = \\frac{2.303}{60} \\log(16)$$
    $$\\log(16) = \\log(2^4) = 4 \\log 2 = 4 \\times 0.3010 = 1.2040$$
    $$t = \\frac{2.303 \\times 1.2040}{60} = \\frac{2.7728}{60} = \\mathbf{4.62 \\times 10^{-2}\\text{ s}}$$
    <br>
    <b>Method 2: Number of Half-Lives ($n$):</b><br>
    $$\\frac{[R]}{[R]_0} = \\left( \\frac{1}{2} \\right)^n = \\frac{1}{16} = \\left( \\frac{1}{2} \\right)^4 \\implies n = 4$$
    $$t_{1/2} = \\frac{0.693}{k} = \\frac{0.693}{60} = 0.01155\\text{ s}$$
    $$t = 4 \\times t_{1/2} = 4 \\times 0.01155 = \\mathbf{4.62 \\times 10^{-2}\\text{ s}}$$
  </div>`,
  '2 Marks',
  [
    ['Formula substitution with [R]₀/[R] = 16 or 4 half-lives', '1 Mark'],
    ['Correct computation: $t = 4.62 \\times 10^{-2}\\text{ s}$', '1 Mark']
  ]
));

// Exercise 3.17
questions.push(createQCard(
  'c12c-ch3-q27', 'Exercise 3.17', 'NCERT Exercise',
  'During nuclear explosion, one of the products is $^{90}\\text{Sr}$ with half-life of $28.1\\text{ years}$. If $1\\,\\mu\\text{g}$ of $^{90}\\text{Sr}$ was absorbed in the bones of a newly born baby instead of calcium, how much of it will remain after $10\\text{ years}$ and $60\\text{ years}$ if it is not lost metabolically?',
  `<div class="step">
    <b>1. Radioactive Decay Constant ($k$):</b>
    $$k = \\frac{0.693}{t_{1/2}} = \\frac{0.693}{28.1} = 2.466 \\times 10^{-2}\\text{ year}^{-1}$$
    <br>
    <b>2. Remaining Amount after 10 years:</b>
    $$\\log \\frac{[R]_0}{[R]} = \\frac{k \\cdot t}{2.303} = \\frac{2.466 \\times 10^{-2} \\times 10}{2.303} = \\frac{0.2466}{2.303} = 0.1071$$
    $$\\frac{[R]_0}{[R]} = \\text{Antilog}(0.1071) = 1.280$$
    Given $[R]_0 = 1\\,\\mu\\text{g}$:
    $$[R] = \\frac{1}{1.280} = \\mathbf{0.781\\,\\mu\\text{g}}$$
    <br>
    <b>3. Remaining Amount after 60 years:</b>
    $$\\log \\frac{[R]_0}{[R]} = \\frac{2.466 \\times 10^{-2} \\times 60}{2.303} = \\frac{1.4796}{2.303} = 0.6425$$
    $$\\frac{[R]_0}{[R]} = \\text{Antilog}(0.6425) = 4.390$$
    $$[R] = \\frac{1}{4.390} = \\mathbf{0.228\\,\\mu\\text{g}}$$
  </div>`,
  '3 Marks',
  [
    ['Decay constant $k = 2.466 \\times 10^{-2}\\text{ yr}^{-1}$', '1 Mark'],
    ['Amount remaining after 10 years ($0.781\\,\\mu\\text{g}$)', '1 Mark'],
    ['Amount remaining after 60 years ($0.228\\,\\mu\\text{g}$)', '1 Mark']
  ]
));

// Exercise 3.18
questions.push(createQCard(
  'c12c-ch3-q28', 'Exercise 3.18', 'NCERT Exercise',
  'For a first order reaction, show that time required for $99\\%$ completion is twice the time required for the completion of $90\\%$ of reaction.',
  `<div class="step">
    <b>1. Time for $99\\%$ completion ($t_{99\\%}$):</b><br>
    When reaction is $99\\%$ complete, $[R] = [R]_0 - 0.99[R]_0 = 0.01[R]_0$.
    $$t_{99\\%} = \\frac{2.303}{k} \\log \\frac{[R]_0}{0.01[R]_0} = \\frac{2.303}{k} \\log(100) = \\frac{2.303}{k} \\times 2 = \\frac{4.606}{k} \\quad \\text{--- (1)}$$
    <br>
    <b>2. Time for $90\\%$ completion ($t_{90\\%}$):</b><br>
    When reaction is $90\\%$ complete, $[R] = [R]_0 - 0.90[R]_0 = 0.10[R]_0$.
    $$t_{90\\%} = \\frac{2.303}{k} \\log \\frac{[R]_0}{0.10[R]_0} = \\frac{2.303}{k} \\log(10) = \\frac{2.303}{k} \\times 1 = \\frac{2.303}{k} \\quad \\text{--- (2)}$$
    <br>
    <b>3. Comparison:</b><br>
    Dividing equation (1) by equation (2):
    $$\\frac{t_{99\\%}}{t_{90\\%}} = \\frac{2 \\times \\frac{2.303}{k}}{\\frac{2.303}{k}} = 2 \\implies \\mathbf{t_{99\\%} = 2 \\times t_{90\\%}}$$
    Hence proved.
  </div>`,
  '3 Marks',
  [
    ['Derivation of $t_{99\\%} = 4.606/k$', '1 Mark'],
    ['Derivation of $t_{90\\%} = 2.303/k$', '1 Mark'],
    ['Ratio $t_{99\\%}/t_{90\\%} = 2$', '1 Mark']
  ]
));

// Exercise 3.19
questions.push(createQCard(
  'c12c-ch3-q29', 'Exercise 3.19', 'NCERT Exercise',
  'A first order reaction takes $40\\text{ min}$ for $30\\%$ decomposition. Calculate $t_{1/2}$.',
  `<div class="step">
    <b>1. Rate Constant ($k$):</b><br>
    For $30\\%$ decomposition, remaining amount is $100 - 30 = 70\\%$ at $t = 40\\text{ min}$.
    $$k = \\frac{2.303}{t} \\log \\frac{[R]_0}{[R]} = \\frac{2.303}{40} \\log \\left( \\frac{100}{70} \\right) = \\frac{2.303}{40} \\log(1.4286)$$
    $$\\log(1.4286) = 0.1549$$
    $$k = \\frac{2.303 \\times 0.1549}{40} = \\frac{0.3567}{40} = 8.918 \\times 10^{-3}\\text{ min}^{-1}$$
    <br>
    <b>2. Half-Life ($t_{1/2}$):</b>
    $$t_{1/2} = \\frac{0.693}{k} = \\frac{0.693}{8.918 \\times 10^{-3}\\text{ min}^{-1}} = \\mathbf{77.7\\text{ minutes}}$$
    <b>Answer:</b> The half-life of the reaction is <b>$77.7\\text{ minutes}$</b>.
  </div>`,
  '3 Marks',
  [
    ['Calculation of rate constant $k = 8.918 \\times 10^{-3}\\text{ min}^{-1}$', '1½ Marks'],
    ['Calculation of half-life $t_{1/2} = 77.7\\text{ minutes}$', '1½ Marks']
  ]
));

// Exercise 3.20
questions.push(createQCard(
  'c12c-ch3-q30', 'Exercise 3.20', 'NCERT Exercise',
  'For the decomposition of azoisopropane to hexane and nitrogen at $543\\text{ K}$, the following data are obtained:<br><div style="overflow-x:auto;"><table style="width:100%; border-collapse:collapse; margin:10px 0; border:1px solid #cbd5e1;"><tr style="background:#f1f5f9;"><th style="border:1px solid #cbd5e1; padding:6px;">t / s</th><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">0</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">360</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">720</td></tr><tr><th style="border:1px solid #cbd5e1; padding:6px;">P / mm of Hg</th><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">35.0</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">54.0</td><td style="border:1px solid #cbd5e1; padding:6px; text-align:center;">63.0</td></tr></table></div>Calculate the rate constant.',
  `<div class="step">
    <b>1. Partial Pressure Relations:</b><br>
    Reaction: $(\\text{CH}_3)_2\\text{CHN}=\\text{NCH}(\\text{CH}_3)_2(g) \\rightarrow \\text{N}_2(g) + \\text{C}_6\\text{H}_{14}(g)$<br>
    At $t = 0$: $p_0 = 35.0\\text{ mm Hg}$<br>
    At time $t$: Partial pressure of azoisopropane $p_A = p_0 - p$<br>
    Total pressure $P_t = (p_0 - p) + p + p = p_0 + p \\implies p = P_t - p_0$<br>
    Therefore, $p_A = p_0 - (P_t - p_0) = 2p_0 - P_t$<br>
    Integrated formula:
    $$k = \\frac{2.303}{t} \\log \\frac{p_0}{2p_0 - P_t}$$
    <br>
    <b>2. Rate constant at $t = 360\\text{ s}$ ($P_t = 54.0\\text{ mm Hg}$):</b>
    $$2p_0 - P_t = 2(35.0) - 54.0 = 70.0 - 54.0 = 16.0\\text{ mm Hg}$$
    $$k_1 = \\frac{2.303}{360} \\log \\left( \\frac{35.0}{16.0} \\right) = \\frac{2.303}{360} \\log(2.1875)$$
    $$\\log(2.1875) = 0.3400 \\implies k_1 = \\frac{2.303 \\times 0.3400}{360} = 2.175 \\times 10^{-3}\\text{ s}^{-1}$$
    <br>
    <b>3. Rate constant at $t = 720\\text{ s}$ ($P_t = 63.0\\text{ mm Hg}$):</b>
    $$2p_0 - P_t = 2(35.0) - 63.0 = 70.0 - 63.0 = 7.0\\text{ mm Hg}$$
    $$k_2 = \\frac{2.303}{720} \\log \\left( \\frac{35.0}{7.0} \\right) = \\frac{2.303}{720} \\log(5)$$
    $$\\log(5) = 0.6990 \\implies k_2 = \\frac{2.303 \\times 0.6990}{720} = 2.236 \\times 10^{-3}\\text{ s}^{-1}$$
    <br>
    <b>4. Average Rate Constant:</b>
    $$k_{\\text{avg}} = \\frac{k_1 + k_2}{2} = \\frac{2.175 + 2.236}{2} \\times 10^{-3} = \\mathbf{2.21 \\times 10^{-3}\\text{ s}^{-1}}$$
  </div>`,
  '4 Marks',
  [
    ['Formulation of $p_A = 2p_0 - P_t$', '1 Mark'],
    ['Evaluation of $k_1$ at 360 s ($2.175 \\times 10^{-3}\\text{ s}^{-1}$)', '1 Mark'],
    ['Evaluation of $k_2$ at 720 s ($2.236 \\times 10^{-3}\\text{ s}^{-1}$)', '1 Mark'],
    ['Average rate constant ($2.21 \\times 10^{-3}\\text{ s}^{-1}$)', '1 Mark']
  ]
));

console.log(`\nCompiling Chapter 3: Chemical Kinetics (Total: ${questions.length} Qs)...`);
saveChapter(chNum, chTitle, svgDiagram, exTitle, questions, 'The d- and f-Block Elements');
console.log(`Chapter 3: Chemical Kinetics successfully saved!`);
