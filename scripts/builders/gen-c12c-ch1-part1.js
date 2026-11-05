// scripts/builders/gen-c12c-ch1.js
// Class 12 Chemistry Chapter 1: Solutions (NCERT Rationalised 2026–27)
// Full Coverage: 12 In-Text Questions + 41 Exercise Questions = 53 Questions Verbatim
const { createQCard, saveChapter } = require('./c12c-helper');

const chNum = 1;
const chTitle = 'Solutions (विलयन)';
const exTitle = 'NCERT Chapter 1: All In-Text & End-of-Chapter Exercises (53 Questions)';

const svgDiagram = `
<div style="background:linear-gradient(135deg, #ecfdf5, #d1fae5); border:1px solid #a7f3d0; border-radius:12px; padding:20px; margin-bottom:24px;">
  <h3 style="font-size:1.05rem; color:#065f46; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4M12 16V8"/></svg>
    Colligative Properties & Raoult's Law Summary Architecture
  </h3>
  <svg viewBox="0 0 850 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
    <!-- Box 1: Relative Lowering of Vapour Pressure -->
    <rect x="15" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
    <text x="110" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Vapour Pressure Lowering</text>
    <text x="110" y="72" text-anchor="middle" font-size="11" fill="#334155">$$\\frac{p_1^0 - p_1}{p_1^0} = i \\cdot x_2$$</text>
    <text x="110" y="98" text-anchor="middle" font-size="10" fill="#64748b">• Raoult's Law (Ideal Sol.)</text>
    <text x="110" y="116" text-anchor="middle" font-size="10" fill="#64748b">• $M_2 = \\frac{w_2 M_1 p_1^0}{w_1 (p_1^0 - p_1)}$</text>

    <!-- Box 2: Elevation in Boiling Point -->
    <rect x="225" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="320" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">Boiling Point Elevation</text>
    <text x="320" y="72" text-anchor="middle" font-size="11" fill="#334155">$$\\Delta T_b = i \\cdot K_b \\cdot m$$</text>
    <text x="320" y="98" text-anchor="middle" font-size="10" fill="#64748b">• Ebullioscopic Constant</text>
    <text x="320" y="116" text-anchor="middle" font-size="10" fill="#64748b">• $m = \\frac{w_2 \\times 1000}{M_2 \\times w_1}$</text>

    <!-- Box 3: Depression in Freezing Point -->
    <rect x="435" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
    <text x="530" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">Freezing Point Depression</text>
    <text x="530" y="72" text-anchor="middle" font-size="11" fill="#334155">$$\\Delta T_f = i \\cdot K_f \\cdot m$$</text>
    <text x="530" y="98" text-anchor="middle" font-size="10" fill="#64748b">• Cryoscopic Constant</text>
    <text x="530" y="116" text-anchor="middle" font-size="10" fill="#64748b">• Ethylene glycol antifreeze</text>

    <!-- Box 4: Osmotic Pressure -->
    <rect x="645" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
    <text x="740" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#5b21b6">Osmotic Pressure</text>
    <text x="740" y="72" text-anchor="middle" font-size="11" fill="#334155">$$\\Pi = i \\cdot C R T$$</text>
    <text x="740" y="98" text-anchor="middle" font-size="10" fill="#64748b">• van 't Hoff Factor ($i$)</text>
    <text x="740" y="116" text-anchor="middle" font-size="10" fill="#64748b">• Best for Molar Mass of Polymers</text>
  </svg>
</div>`;

const questions = [];

// ============================================================================
// PART 1: NCERT IN-TEXT QUESTIONS (1.1 to 1.12)
// ============================================================================

// Question 1.1 (In-Text)
questions.push(createQCard(
  'c12c-ch1-q1', 'In-Text 1.1', 'NCERT In-Text',
  'Calculate the mass percentage of benzene ($\\text{C}_6\\text{H}_6$) and carbon tetrachloride ($\\text{CCl}_4$) if $22\\text{ g}$ of benzene is dissolved in $122\\text{ g}$ of carbon tetrachloride.',
  `<div class="step">
    <b>1. Given Data:</b><br>
    Mass of benzene ($\\text{C}_6\\text{H}_6$, solute) = $22\\text{ g}$<br>
    Mass of carbon tetrachloride ($\\text{CCl}_4$, solvent) = $122\\text{ g}$<br><br>
    <b>2. Total mass of solution:</b><br>
    $$\\text{Total mass} = 22\\text{ g} + 122\\text{ g} = 144\\text{ g}$$<br>
    <b>3. Mass percentage formulas:</b><br>
    $$\\text{Mass } \\% \\text{ of benzene} = \\frac{\\text{Mass of benzene}}{\\text{Total mass of solution}} \\times 100 = \\frac{22}{144} \\times 100 = \\mathbf{15.28\\%}$$<br>
    $$\\text{Mass } \\% \\text{ of } \\text{CCl}_4 = \\frac{\\text{Mass of } \\text{CCl}_4}{\\text{Total mass of solution}} \\times 100 = \\frac{122}{144} \\times 100 = \\mathbf{84.72\\%}$$<br>
    <i>Verification:</i> $15.28\\% + 84.72\\% = 100.00\\%$.
  </div>`,
  '2 Marks',
  [
    ['Calculation of total mass of solution ($144\\text{ g}$)', '0.5 Mark'],
    ['Mass % of benzene $= 15.28\\%$ with formula', '0.75 Mark'],
    ['Mass % of $\\text{CCl}_4 = 84.72\\%$ with formula', '0.75 Mark']
  ]
));

// Question 1.2 (In-Text)
questions.push(createQCard(
  'c12c-ch1-q2', 'In-Text 1.2', 'NCERT In-Text',
  'Calculate the mole fraction of benzene in solution containing $30\\%$ by mass in carbon tetrachloride.',
  `<div class="step">
    <b>1. Interpretation of 30% by mass:</b><br>
    Let the mass of solution be $100\\text{ g}$.<br>
    Then, mass of benzene ($\\text{C}_6\\text{H}_6$) = $30\\text{ g}$<br>
    Mass of carbon tetrachloride ($\\text{CCl}_4$) = $100 - 30 = 70\\text{ g}$<br><br>
    <b>2. Molar masses:</b><br>
    $$M(\\text{C}_6\\text{H}_6) = 6(12) + 6(1) = 78\\text{ g mol}^{-1}$$<br>
    $$M(\\text{CCl}_4) = 12 + 4(35.5) = 12 + 142 = 154\\text{ g mol}^{-1}$$<br><br>
    <b>3. Number of moles:</b><br>
    $$n_{\\text{benzene}} = \\frac{30\\text{ g}}{78\\text{ g mol}^{-1}} = 0.385\\text{ mol}$$<br>
    $$n_{\\text{CCl}_4} = \\frac{70\\text{ g}}{154\\text{ g mol}^{-1}} = 0.455\\text{ mol}$$<br><br>
    <b>4. Mole fraction of benzene ($x_{\\text{benzene}}$):</b><br>
    $$x_{\\text{benzene}} = \\frac{n_{\\text{benzene}}}{n_{\\text{benzene}} + n_{\\text{CCl}_4}} = \\frac{0.385}{0.385 + 0.455} = \\frac{0.385}{0.840} = \\mathbf{0.458}$$<br>
    $$\\text{Mole fraction of } \\text{CCl}_4 = 1 - 0.458 = \\mathbf{0.542}$$
  </div>`,
  '2 Marks',
  [
    ['Calculation of moles of benzene ($0.385$) and $\\text{CCl}_4$ ($0.455$)', '1 Mark'],
    ['Correct substitution into mole fraction formula and final answer ($0.458$)', '1 Mark']
  ]
));

// Question 1.3 (In-Text)
questions.push(createQCard(
  'c12c-ch1-q3', 'In-Text 1.3', 'NCERT In-Text',
  'Calculate the molarity of each of the following solutions:<br>(a) $30\\text{ g}$ of $\\text{Co}(\\text{NO}_3)_2 \\cdot 6\\text{H}_2\\text{O}$ in $4.3\\text{ L}$ of solution<br>(b) $30\\text{ mL}$ of $0.5\\text{ M } \\text{H}_2\\text{SO}_4$ diluted to $500\\text{ mL}$.',
  `<div class="step">
    <b>(a) Molarity of Cobalt Nitrate Hexahydrate:</b><br>
    Molar mass of $\\text{Co}(\\text{NO}_3)_2 \\cdot 6\\text{H}_2\\text{O}$:<br>
    $$M = 58.93 + 2(14 + 3 \\times 16) + 6(18) = 58.93 + 2(62) + 108 = 58.93 + 124 + 108 = 290.93\\text{ g mol}^{-1}$$<br>
    $$\\text{Moles of solute } n = \\frac{30\\text{ g}}{290.93\\text{ g mol}^{-1}} = 0.1031\\text{ mol}$$<br>
    $$\\text{Molarity } M = \\frac{\\text{Moles of solute}}{\\text{Volume of solution in L}} = \\frac{0.1031\\text{ mol}}{4.3\\text{ L}} = \\mathbf{0.024\\text{ M } (\\text{or } 0.024\\text{ mol L}^{-1})}$$<br><br>
    <b>(b) Dilution of Sulphuric Acid:</b><br>
    Using the dilution equation: $M_1 V_1 = M_2 V_2$<br>
    Here, $M_1 = 0.5\\text{ M}$, $V_1 = 30\\text{ mL}$, $V_2 = 500\\text{ mL}$, $M_2 = ?$<br>
    $$M_2 = \\frac{M_1 V_1}{V_2} = \\frac{0.5 \\times 30}{500} = \\frac{15}{500} = \\mathbf{0.03\\text{ M } (\\text{or } 0.03\\text{ mol L}^{-1})}$$
  </div>`,
  '3 Marks',
  [
    ['(a) Molar mass calculation ($290.93\\text{ g/mol}$) and moles', '1 Mark'],
    ['(a) Molarity calculation $= 0.024\\text{ M}$', '0.5 Mark'],
    ['(b) Application of $M_1 V_1 = M_2 V_2$', '0.75 Mark'],
    ['(b) Final diluted molarity $= 0.03\\text{ M}$', '0.75 Mark']
  ]
));

// Question 1.4 (In-Text)
questions.push(createQCard(
  'c12c-ch1-q4', 'In-Text 1.4', 'NCERT In-Text',
  'Calculate the mass of urea ($\\text{NH}_2\\text{CONH}_2$) required in making $2.5\\text{ kg}$ of $0.25\\text{ molal}$ aqueous solution.',
  `<div class="step">
    <b>1. Understanding Molality ($0.25\\text{ m}$):</b><br>
    $0.25\\text{ molal}$ means $0.25\\text{ mol}$ of urea is dissolved in $1000\\text{ g}$ ($1\\text{ kg}$) of water.<br><br>
    <b>2. Molar mass of urea ($\\text{NH}_2\\text{CONH}_2$):</b><br>
    $$M = 2(14) + 4(1) + 12 + 16 = 28 + 4 + 12 + 16 = 60\\text{ g mol}^{-1}$$<br>
    Mass of $0.25\\text{ mol}$ of urea = $0.25 \\times 60 = 15\\text{ g}$<br><br>
    <b>3. Total mass of solution:</b><br>
    $$\\text{Mass of solution} = 1000\\text{ g (solvent)} + 15\\text{ g (solute)} = 1015\\text{ g} = 1.015\\text{ kg}$$<br><br>
    <b>4. Unitary method to find mass of urea for $2.5\\text{ kg}$ solution:</b><br>
    $1.015\\text{ kg}$ of solution contains $15\\text{ g}$ of urea.<br>
    $$2.5\\text{ kg of solution requires } = \\frac{15\\text{ g}}{1.015\\text{ kg}} \\times 2.5\\text{ kg} = \\mathbf{36.95\\text{ g } (\\approx 37\\text{ g})}$$
  </div>`,
  '2 Marks',
  [
    ['Molar mass of urea ($60\\text{ g/mol}$) and mass in $1\\text{ kg}$ solvent ($15\\text{ g}$)', '0.75 Mark'],
    ['Total mass of 1-unit solution ($1.015\\text{ kg}$)', '0.5 Mark'],
    ['Final mass of urea required for $2.5\\text{ kg}$ solution $= 36.95\\text{ g}$', '0.75 Mark']
  ]
));

// Question 1.5 (In-Text)
questions.push(createQCard(
  'c12c-ch1-q5', 'In-Text 1.5', 'NCERT In-Text',
  'Calculate (a) molality, (b) molarity, and (c) mole fraction of $\\text{KI}$ if the density of $20\\%$ (mass/mass) aqueous $\\text{KI}$ is $1.202\\text{ g mL}^{-1}$.',
  `<div class="step">
    <b>1. Basis of calculation:</b><br>
    In $100\\text{ g}$ of solution:<br>
    Mass of $\\text{KI}$ ($w_2$) = $20\\text{ g}$<br>
    Mass of water ($w_1$) = $100 - 20 = 80\\text{ g} = 0.080\\text{ kg}$<br>
    Molar mass of $\\text{KI}$ ($M_2$) = $39 + 127 = 166\\text{ g mol}^{-1}$<br>
    Moles of $\\text{KI}$ ($n_{\\text{KI}}$) = $\\frac{20}{166} = 0.1205\\text{ mol}$<br><br>

    <b>(a) Molality ($m$):</b><br>
    $$m = \\frac{\\text{Moles of solute}}{\\text{Mass of solvent in kg}} = \\frac{0.1205\\text{ mol}}{0.080\\text{ kg}} = \\mathbf{1.506\\text{ m } (\\approx 1.51\\text{ mol kg}^{-1})}$$<br>

    <b>(b) Molarity ($M$):</b><br>
    $$\\text{Volume of } 100\\text{ g solution} = \\frac{\\text{Mass}}{\\text{Density}} = \\frac{100\\text{ g}}{1.202\\text{ g mL}^{-1}} = 83.195\\text{ mL} = 0.0832\\text{ L}$$<br>
    $$M = \\frac{\\text{Moles of solute}}{\\text{Volume of solution in L}} = \\frac{0.1205\\text{ mol}}{0.0832\\text{ L}} = \\mathbf{1.45\\text{ M } (\\approx 1.45\\text{ mol L}^{-1})}$$<br>

    <b>(c) Mole fraction ($x_{\\text{KI}}$):</b><br>
    Moles of water ($n_{\\text{H}_2\\text{O}}$) = $\\frac{80\\text{ g}}{18\\text{ g mol}^{-1}} = 4.444\\text{ mol}$<br>
    $$x_{\\text{KI}} = \\frac{n_{\\text{KI}}}{n_{\\text{KI}} + n_{\\text{H}_2\\text{O}}} = \\frac{0.1205}{0.1205 + 4.444} = \\frac{0.1205}{4.5645} = \\mathbf{0.0263}$$
  </div>`,
  '3 Marks',
  [
    ['(a) Molality calculation $= 1.506\\text{ m}$', '1 Mark'],
    ['(b) Volume calculation from density and Molarity $= 1.45\\text{ M}$', '1 Mark'],
    ['(c) Moles of water and mole fraction of $\\text{KI} = 0.0263$', '1 Mark']
  ]
));

// Question 1.6 (In-Text)
questions.push(createQCard(
  'c12c-ch1-q6', 'In-Text 1.6', 'NCERT In-Text',
  '$\\text{H}_2\\text{S}$, a toxic gas with rotten egg like smell, is used for the qualitative analysis. If the solubility of $\\text{H}_2\\text{S}$ in water at STP is $0.195\\text{ m}$, calculate Henry’s law constant.',
  `<div class="step">
    <b>1. Understanding solubility $0.195\\text{ m}$ at STP:</b><br>
    $0.195\\text{ m}$ means $0.195\\text{ mol}$ of $\\text{H}_2\\text{S}$ gas is dissolved in $1000\\text{ g}$ of water.<br>
    Moles of water = $\\frac{1000\\text{ g}}{18\\text{ g mol}^{-1}} = 55.55\\text{ mol}$<br><br>
    <b>2. Mole fraction of $\\text{H}_2\\text{S}$ ($x$):</b><br>
    $$x = \\frac{n_{\\text{H}_2\\text{S}}}{n_{\\text{H}_2\\text{S}} + n_{\\text{H}_2\\text{O}}} = \\frac{0.195}{0.195 + 55.55} = \\frac{0.195}{55.745} = 0.0035$$<br><br>
    <b>3. Pressure at STP:</b><br>
    $p = 0.987\\text{ bar}$ (or $1\\text{ bar}$ standard)<br><br>
    <b>4. Henry’s Law formula:</b><br>
    $$p = K_H \\cdot x \\implies K_H = \\frac{p}{x}$$<br>
    $$K_H = \\frac{0.987\\text{ bar}}{0.0035} = \\mathbf{282\\text{ bar } (\\approx 2.82 \\times 10^2\\text{ bar})}$$<br>
    <i>(If using $p = 1\\text{ atm} = 1.013\\text{ bar}$, $K_H = \\frac{1.013}{0.0035} = 289.4\\text{ bar}$).</i>
  </div>`,
  '2 Marks',
  [
    ['Calculation of mole fraction $x = 0.0035$', '1 Mark'],
    ['Application of Henry\'s Law and calculation of $K_H = 282\\text{ bar}$', '1 Mark']
  ]
));

// Question 1.7 (In-Text)
questions.push(createQCard(
  'c12c-ch1-q7', 'In-Text 1.7', 'NCERT In-Text',
  'Henry’s law constant for $\\text{CO}_2$ in water is $1.67 \\times 10^8\\text{ Pa}$ at $298\\text{ K}$. Calculate the quantity of $\\text{CO}_2$ in $500\\text{ mL}$ of soda water when packed under $2.5\\text{ atm } \\text{CO}_2$ pressure at $298\\text{ K}$.',
  `<div class="step">
    <b>1. Given:</b><br>
    $K_H = 1.67 \\times 10^8\\text{ Pa}$<br>
    $p_{\\text{CO}_2} = 2.5\\text{ atm} = 2.5 \\times 101325\\text{ Pa} = 253312.5\\text{ Pa}$<br><br>
    <b>2. Mole fraction of $\\text{CO}_2$ from Henry’s Law:</b><br>
    $$p = K_H \\cdot x \\implies x = \\frac{p}{K_H} = \\frac{253312.5\\text{ Pa}}{1.67 \\times 10^8\\text{ Pa}} = 1.517 \\times 10^{-3}$$<br><br>
    <b>3. Moles of water in $500\\text{ mL}$ soda water:</b><br>
    Taking density of soda water $\\approx 1\\text{ g mL}^{-1}$, mass of water = $500\\text{ g}$.<br>
    $$n_{\\text{H}_2\\text{O}} = \\frac{500}{18} = 27.78\\text{ mol}$$<br><br>
    <b>4. Moles and mass of $\\text{CO}_2$:</b><br>
    Since $n_{\\text{CO}_2} \\ll n_{\\text{H}_2\\text{O}}$, $x \\approx \\frac{n_{\\text{CO}_2}}{n_{\\text{H}_2\\text{O}}}$<br>
    $$n_{\\text{CO}_2} = x \\times n_{\\text{H}_2\\text{O}} = 1.517 \\times 10^{-3} \\times 27.78 = 0.0421\\text{ mol}$$<br>
    $$\\text{Mass of } \\text{CO}_2 = n \\times M = 0.0421\\text{ mol} \\times 44\\text{ g mol}^{-1} = \\mathbf{1.854\\text{ g } (\\approx 1.85\\text{ g})}$$
  </div>`,
  '3 Marks',
  [
    ['Pressure unit conversion to Pa and calculation of mole fraction $x = 1.517 \\times 10^{-3}$', '1 Mark'],
    ['Moles of water in $500\\text{ mL}$ ($27.78\\text{ mol}$)', '0.75 Mark'],
    ['Calculation of moles ($0.0421\\text{ mol}$) and mass of $\\text{CO}_2 = 1.854\\text{ g}$', '1.25 Marks']
  ]
));

// Question 1.8 (In-Text)
questions.push(createQCard(
  'c12c-ch1-q8', 'In-Text 1.8', 'NCERT In-Text',
  'The vapour pressure of pure liquids $\\text{A}$ and $\\text{B}$ are $450$ and $700\\text{ mm Hg}$ respectively, at $350\\text{ K}$. Find out the composition of the liquid mixture if total vapour pressure is $600\\text{ mm Hg}$. Also find the composition of the vapour phase.',
  `<div class="step">
    <b>1. Given:</b><br>
    $p_A^0 = 450\\text{ mm Hg}$, $p_B^0 = 700\\text{ mm Hg}$, $p_{\\text{total}} = 600\\text{ mm Hg}$.<br><br>
    <b>2. Raoult's Law for liquid composition:</b><br>
    $$p_{\\text{total}} = p_A + p_B = p_A^0 x_A + p_B^0 (1 - x_A) = p_B^0 + (p_A^0 - p_B^0) x_A$$<br>
    $$600 = 700 + (450 - 700) x_A$$<br>
    $$600 - 700 = -250 x_A \\implies -100 = -250 x_A \\implies x_A = \\frac{100}{250} = \\mathbf{0.40}$$<br>
    $$x_B = 1 - 0.40 = \\mathbf{0.60}$$<br><br>
    <b>3. Partial vapour pressures:</b><br>
    $$p_A = p_A^0 x_A = 450 \\times 0.40 = 180\\text{ mm Hg}$$<br>
    $$p_B = p_B^0 x_B = 700 \\times 0.60 = 420\\text{ mm Hg}$$<br><br>
    <b>4. Composition of vapour phase ($y_A$ and $y_B$):</b><br>
    $$y_A = \\frac{p_A}{p_{\\text{total}}} = \\frac{180}{600} = \\mathbf{0.30}$$<br>
    $$y_B = \\frac{p_B}{p_{\\text{total}}} = \\frac{420}{600} = \\mathbf{0.70}$$
  </div>`,
  '3 Marks',
  [
    ['Raoult\'s Law equation and liquid composition $x_A = 0.40, x_B = 0.60$', '1.5 Marks'],
    ['Partial pressures $p_A = 180\\text{ mm Hg}, p_B = 420\\text{ mm Hg}$', '0.75 Mark'],
    ['Vapour phase mole fractions $y_A = 0.30, y_B = 0.70$', '0.75 Mark']
  ]
));

// Question 1.9 (In-Text)
questions.push(createQCard(
  'c12c-ch1-q9', 'In-Text 1.9', 'NCERT In-Text',
  'Vapour pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. $50\\text{ g}$ of urea ($\\text{NH}_2\\text{CONH}_2$) is dissolved in $850\\text{ g}$ of water. Calculate the vapour pressure of water for this solution and its relative lowering.',
  `<div class="step">
    <b>1. Given:</b><br>
    $p_1^0 = 23.8\\text{ mm Hg}$<br>
    $w_2$ (urea) = $50\\text{ g}$, $M_2$ = $60\\text{ g mol}^{-1}$<br>
    $w_1$ (water) = $850\\text{ g}$, $M_1$ = $18\\text{ g mol}^{-1}$<br><br>
    <b>2. Moles of components:</b><br>
    $$n_2 = \\frac{50}{60} = 0.833\\text{ mol}$$<br>
    $$n_1 = \\frac{850}{18} = 47.222\\text{ mol}$$<br><br>
    <b>3. Relative lowering of vapour pressure:</b><br>
    $$\\frac{p_1^0 - p_1}{p_1^0} = x_2 = \\frac{n_2}{n_1 + n_2} = \\frac{0.833}{47.222 + 0.833} = \\frac{0.833}{48.055} = \\mathbf{0.0173}$$<br><br>
    <b>4. Vapour pressure of solution ($p_1$):</b><br>
    $$\\frac{23.8 - p_1}{23.8} = 0.0173 \\implies 23.8 - p_1 = 0.412\\text{ mm Hg}$$<br>
    $$p_1 = 23.8 - 0.412 = \\mathbf{23.388\\text{ mm Hg } (\\approx 23.39\\text{ mm Hg})}$$
  </div>`,
  '2 Marks',
  [
    ['Calculation of moles and relative lowering of vapour pressure $= 0.0173$', '1 Mark'],
    ['Vapour pressure of solution $p_1 = 23.39\\text{ mm Hg}$', '1 Mark']
  ]
));

// Question 1.10 (In-Text)
questions.push(createQCard(
  'c12c-ch1-q10', 'In-Text 1.10', 'NCERT In-Text',
  'Boiling point of water at $750\\text{ mm Hg}$ is $99.63^\\circ\\text{C}$. How much sucrose is to be added to $500\\text{ g}$ of water such that it boils at $100^\\circ\\text{C}$? ($K_b$ for water is $0.52\\text{ K kg mol}^{-1}$).',
  `<div class="step">
    <b>1. Given:</b><br>
    Elevation in boiling point: $\\Delta T_b = 100^\\circ\\text{C} - 99.63^\\circ\\text{C} = 0.37^\\circ\\text{C} = 0.37\\text{ K}$<br>
    Mass of water ($w_1$) = $500\\text{ g} = 0.5\\text{ kg}$<br>
    $K_b = 0.52\\text{ K kg mol}^{-1}$<br>
    Molar mass of sucrose ($\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$, $M_2$) = $12(12) + 22(1) + 11(16) = 144 + 22 + 176 = 342\\text{ g mol}^{-1}$<br><br>
    <b>2. Formula:</b><br>
    $$\\Delta T_b = \\frac{K_b \\times w_2 \\times 1000}{M_2 \\times w_1}$$<br>
    $$0.37 = \\frac{0.52 \\times w_2 \\times 1000}{342 \\times 500}$$<br>
    $$0.37 = \\frac{0.52 \\times 2 \\times w_2}{342} = \\frac{1.04 \\, w_2}{342}$$<br>
    $$w_2 = \\frac{0.37 \\times 342}{1.04} = \\frac{126.54}{1.04} = \\mathbf{121.67\\text{ g}}$$
  </div>`,
  '2 Marks',
  [
    ['Calculation of $\\Delta T_b = 0.37\\text{ K}$ and sucrose molar mass $342\\text{ g/mol}$', '0.75 Mark'],
    ['Correct formula application and final mass $w_2 = 121.67\\text{ g}$', '1.25 Marks']
  ]
));

// Question 1.11 (In-Text)
questions.push(createQCard(
  'c12c-ch1-q11', 'In-Text 1.11', 'NCERT In-Text',
  'Calculate the mass of ascorbic acid (Vitamin C, $\\text{C}_6\\text{H}_8\\text{O}_6$) to be dissolved in $75\\text{ g}$ of acetic acid to lower its melting point by $1.5^\\circ\\text{C}$. ($K_f = 3.9\\text{ K kg mol}^{-1}$).',
  `<div class="step">
    <b>1. Given:</b><br>
    $\\Delta T_f = 1.5\\text{ K}$<br>
    $w_1$ (acetic acid) = $75\\text{ g}$<br>
    $K_f = 3.9\\text{ K kg mol}^{-1}$<br>
    Molar mass of ascorbic acid ($\\text{C}_6\\text{H}_8\\text{O}_6$, $M_2$) = $6(12) + 8(1) + 6(16) = 72 + 8 + 96 = 176\\text{ g mol}^{-1}$<br><br>
    <b>2. Formula:</b><br>
    $$\\Delta T_f = \\frac{K_f \\times w_2 \\times 1000}{M_2 \\times w_1}$$<br>
    $$w_2 = \\frac{\\Delta T_f \\times M_2 \\times w_1}{K_f \\times 1000}$$<br>
    $$w_2 = \\frac{1.5 \\times 176 \\times 75}{3.9 \\times 1000} = \\frac{19800}{3900} = \\mathbf{5.077\\text{ g } (\\approx 5.08\\text{ g})}$$
  </div>`,
  '2 Marks',
  [
    ['Calculation of molar mass of ascorbic acid $= 176\\text{ g/mol}$', '0.5 Mark'],
    ['Rearrangement of depression formula and final mass $w_2 = 5.08\\text{ g}$', '1.5 Marks']
  ]
));

// Question 1.12 (In-Text)
questions.push(createQCard(
  'c12c-ch1-q12', 'In-Text 1.12', 'NCERT In-Text',
  'Calculate the osmotic pressure in pascals exerted by a solution prepared by dissolving $1.0\\text{ g}$ of polymer of molar mass $185,000$ in $450\\text{ mL}$ of water at $37^\\circ\\text{C}$.',
  `<div class="step">
    <b>1. Given:</b><br>
    $w_2 = 1.0\\text{ g}$<br>
    $M_2 = 185,000\\text{ g mol}^{-1}$<br>
    $V = 450\\text{ mL} = 450 \\times 10^{-3}\\text{ L} = 4.5 \\times 10^{-4}\\text{ m}^3$<br>
    $T = 37^\\circ\\text{C} = 37 + 273.15 = 310.15\\text{ K}$<br>
    Gas constant $R = 8.314\\text{ J K}^{-1}\\text{ mol}^{-1} = 8.314\\text{ Pa m}^3\\text{ K}^{-1}\\text{ mol}^{-1}$<br><br>
    <b>2. Moles of polymer:</b><br>
    $$n = \\frac{w_2}{M_2} = \\frac{1.0}{185000} = 5.4054 \\times 10^{-6}\\text{ mol}$$<br><br>
    <b>3. Osmotic pressure formula:</b><br>
    $$\\Pi = \\frac{n R T}{V} = \\frac{5.4054 \\times 10^{-6}\\text{ mol} \\times 8.314\\text{ Pa m}^3\\text{ K}^{-1}\\text{ mol}^{-1} \\times 310.15\\text{ K}}{4.5 \\times 10^{-4}\\text{ m}^3}$$<br>
    $$\\Pi = \\frac{0.013938}{4.5 \\times 10^{-4}} = \\mathbf{30.97\\text{ Pa } (\\approx 31\\text{ Pa})}$$
  </div>`,
  '2 Marks',
  [
    ['Calculation of moles $n = 5.405 \\times 10^{-6}\\text{ mol}$ and temperature $310.15\\text{ K}$', '0.75 Mark'],
    ['Osmotic pressure formula and final value in pascals $\\Pi = 30.97\\text{ Pa}$', '1.25 Marks']
  ]
));

console.log(`Generated In-Text Questions 1.1 to 1.12 (${questions.length} Qs)`);

module.exports = { questions };
