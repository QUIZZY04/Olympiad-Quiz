// scripts/builders/gen-c11c-ch1.js
// Complete, verbatim NCERT generator for Class 11 Chemistry Chapter 1: Some Basic Concepts of Chemistry (All 36 Questions)
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', '..', 'chapters-c11c');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function createQCard(id, num, exercise, qText, answerHtml, marks, rubricRows) {
  const rubricHtml = rubricRows.map(r => `
          <div class="marking-row"><span class="marking-key">${r[0]}</span><span class="marking-marks">${r[1]}</span></div>`).join('');

  return `
  <!-- ${id} (${exercise}) -->
  <div class="q-card" id="${id}">
    <div class="q-head" onclick="toggleQ('${id}')">
      <div class="q-num">${num}</div>
      <div class="q-text">
        <span style="display:inline-block; font-size:0.75rem; font-weight:800; text-transform:uppercase; background:#ecfdf5; color:#059669; padding:2px 8px; border-radius:4px; margin-bottom:4px;">${exercise}</span><br>
        ${qText}
      </div>
      <div class="q-marks">[${marks}]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Step-by-Step Solution</div>
        <div class="answer-text">
          ${answerHtml}
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme Rubric (Session 2026–27)</div>
          ${rubricHtml}
        </div>
      </div>
    </div>
  </div>`;
}

const questions = [];

// ============================================================================
// CHAPTER 1: SOME BASIC CONCEPTS OF CHEMISTRY (Questions 1.1 to 1.36)
// ============================================================================

// Question 1.1
questions.push(createQCard(
  'c11c-ch1-q1', 'Question 1.1', 'NCERT Exercise',
  'Calculate the molar mass of the following:<br>(i) $\\text{H}_2\\text{O}$<br>(ii) $\\text{CO}_2$<br>(iii) $\\text{CH}_4$',
  `<div class="step">
    Using standard atomic masses: $\\text{H} = 1.008\\text{ u}$, $\\text{C} = 12.011\\text{ u}$, $\\text{O} = 16.00\\text{ u}$.<br><br>
    <b>(i) Water ($\\text{H}_2\\text{O}$):</b><br>
    $$\\text{Molar mass} = 2 \\times (\\text{Atomic mass of H}) + 1 \\times (\\text{Atomic mass of O})$$<br>
    $$\\text{Molar mass} = 2(1.008\\text{ u}) + 16.00\\text{ u} = 2.016 + 16.00 = \\mathbf{18.016\\text{ g mol}^{-1} \\approx 18.02\\text{ g mol}^{-1}}$$<br><br>
    <b>(ii) Carbon dioxide ($\\text{CO}_2$):</b><br>
    $$\\text{Molar mass} = 1 \\times (\\text{Atomic mass of C}) + 2 \\times (\\text{Atomic mass of O})$$<br>
    $$\\text{Molar mass} = 12.011\\text{ u} + 2(16.00\\text{ u}) = 12.011 + 32.00 = \\mathbf{44.011\\text{ g mol}^{-1} \\approx 44.01\\text{ g mol}^{-1}}$$<br><br>
    <b>(iii) Methane ($\\text{CH}_4$):</b><br>
    $$\\text{Molar mass} = 1 \\times (\\text{Atomic mass of C}) + 4 \\times (\\text{Atomic mass of H})$$<br>
    $$\\text{Molar mass} = 12.011\\text{ u} + 4(1.008\\text{ u}) = 12.011 + 4.032 = \\mathbf{16.043\\text{ g mol}^{-1} \\approx 16.04\\text{ g mol}^{-1}}$$<br><br>
    $$\\mathbf{\\text{Summary: } (i)\\; 18.02\\text{ g/mol},\\; (ii)\\; 44.01\\text{ g/mol},\\; (iii)\\; 16.04\\text{ g/mol.}}$$
  </div>`,
  '3 Marks',
  [
    ['(i) Calculation of molar mass of $\\text{H}_2\\text{O} = 18.02\\text{ g/mol}$', '1 Mark'],
    ['(ii) Calculation of molar mass of $\\text{CO}_2 = 44.01\\text{ g/mol}$', '1 Mark'],
    ['(iii) Calculation of molar mass of $\\text{CH}_4 = 16.04\\text{ g/mol}$', '1 Mark']
  ]
));

// Question 1.2
questions.push(createQCard(
  'c11c-ch1-q2', 'Question 1.2', 'NCERT Exercise',
  'Calculate the mass percentage of different elements present in sodium sulphate ($\\text{Na}_2\\text{SO}_4$).',
  `<div class="step">
    <b>1. Molar mass of Sodium Sulphate ($\\text{Na}_2\\text{SO}_4$):</b><br>
    Atomic masses: $\\text{Na} = 22.99\\text{ g/mol}$, $\\text{S} = 32.06\\text{ g/mol}$, $\\text{O} = 16.00\\text{ g/mol}$.<br>
    $$M(\\text{Na}_2\\text{SO}_4) = 2(22.99) + 32.06 + 4(16.00) = 45.98 + 32.06 + 64.00 = \\mathbf{142.04\\text{ g mol}^{-1} \\approx 142.06\\text{ g mol}^{-1}}$$<br><br>
    <b>2. Mass percentage formula:</b><br>
    $$\\text{Mass } \\% \\text{ of element} = \\frac{\\text{Mass of that element in 1 mol compound}}{\\text{Molar mass of compound}} \\times 100$$<br><br>
    • **Mass percentage of Sodium ($\\text{Na}$):**<br>
    $$\\%\\text{Na} = \\frac{45.98\\text{ g}}{142.04\\text{ g}} \\times 100 = \\mathbf{32.37\\%}$$<br><br>
    • **Mass percentage of Sulphur ($\\text{S}$):**<br>
    $$\\%\\text{S} = \\frac{32.06\\text{ g}}{142.04\\text{ g}} \\times 100 = \\mathbf{22.57\\%}$$<br><br>
    • **Mass percentage of Oxygen ($\\text{O}$):**<br>
    $$\\%\\text{O} = \\frac{64.00\\text{ g}}{142.04\\text{ g}} \\times 100 = \\mathbf{45.06\\%}$$<br><br>
    $$\\mathbf{\\text{Results: Sodium = } 32.37\\%,\\; \\text{Sulphur = } 22.57\\%,\\; \\text{Oxygen = } 45.06\\% \\; (\\Sigma = 100.0\\%).}$$
  </div>`,
  '3 Marks',
  [
    ['Calculation of molar mass of $\\text{Na}_2\\text{SO}_4 = 142.04\\text{ g/mol}$', '1 Mark'],
    ['Evaluation of mass % of $\\text{Na} = 32.37\\%$ and $\\text{S} = 22.57\\%$', '1 Mark'],
    ['Evaluation of mass % of $\\text{O} = 45.06\\%$', '1 Mark']
  ]
));

// Question 1.3
questions.push(createQCard(
  'c11c-ch1-q3', 'Question 1.3', 'NCERT Exercise',
  'Determine the empirical formula of an oxide of iron which has $69.9\\%$ iron and $30.1\\%$ dioxygen by mass.',
  `<div class="step">
    Given Data:<br>
    • Mass percentage of Iron ($\\text{Fe}$) = $69.9\\%$<br>
    • Mass percentage of Oxygen ($\\text{O}$) = $30.1\\%$<br>
    • Atomic mass of $\\text{Fe} = 55.85\\text{ g mol}^{-1}$, Atomic mass of $\\text{O} = 16.00\\text{ g mol}^{-1}$.<br><br>
    <b>Tabular Calculation for Empirical Formula:</b><br>
    <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.85rem;">
      <thead>
        <tr style="background:#f1f5f9; text-align:left; border-bottom:2px solid #cbd5e1;">
          <th style="padding:8px;">Element</th>
          <th style="padding:8px;">Mass %</th>
          <th style="padding:8px;">Atomic Mass</th>
          <th style="padding:8px;">Moles (Mass / At. Mass)</th>
          <th style="padding:8px;">Molar Ratio (Divide by min)</th>
          <th style="padding:8px;">Simplest Whole No. Ratio</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px;"><b>$\\text{Fe}$</b></td>
          <td style="padding:8px;">$69.9$</td>
          <td style="padding:8px;">$55.85$</td>
          <td style="padding:8px;">$\\frac{69.9}{55.85} = 1.2515$</td>
          <td style="padding:8px;">$\\frac{1.2515}{1.2515} = 1.00$</td>
          <td style="padding:8px; font-weight:bold; color:#059669;">$1 \\times 2 = 2$</td>
        </tr>
        <tr>
          <td style="padding:8px;"><b>$\\text{O}$</b></td>
          <td style="padding:8px;">$30.1$</td>
          <td style="padding:8px;">$16.00$</td>
          <td style="padding:8px;">$\\frac{30.1}{16.00} = 1.8812$</td>
          <td style="padding:8px;">$\\frac{1.8812}{1.2515} = 1.503 \\approx 1.5$</td>
          <td style="padding:8px; font-weight:bold; color:#059669;">$1.5 \\times 2 = 3$</td>
        </tr>
      </tbody>
    </table>
    $$\\mathbf{\\text{The empirical formula of the iron oxide is } \\text{Fe}_2\\text{O}_3\\text{ (Ferric oxide / Iron(III) oxide).}}$$
  </div>`,
  '3 Marks',
  [
    ['Calculating moles of $\\text{Fe} = 1.25$ and moles of $\\text{O} = 1.88$', '1 Mark'],
    ['Finding atomic molar ratio $\\text{Fe} : \\text{O} = 1 : 1.5$', '1 Mark'],
    ['Multiplying by 2 to obtain whole-number ratio $\\text{Fe}_2\\text{O}_3$', '1 Mark']
  ]
));

// Question 1.4
questions.push(createQCard(
  'c11c-ch1-q4', 'Question 1.4', 'NCERT Exercise',
  'Calculate the amount of carbon dioxide that could be produced when:<br>(i) $1\\text{ mole}$ of carbon is burnt in air.<br>(ii) $1\\text{ mole}$ of carbon is burnt in $16\\text{ g}$ of dioxygen.<br>(iii) $2\\text{ moles}$ of carbon are burnt in $16\\text{ g}$ of dioxygen.',
  `<div class="step">
    Balanced chemical combustion equation:<br>
    $$\\text{C}(s) + \\text{O}_2(g) \\longrightarrow \\text{CO}_2(g)$$<br>
    Stoichiometry: $1\\text{ mol C } (12\\text{ g}) + 1\\text{ mol } \\text{O}_2\\text{ } (32\\text{ g}) \\longrightarrow 1\\text{ mol } \\text{CO}_2\\text{ } (44\\text{ g})$.<br><br>
    <b>(i) $1\\text{ mole}$ of carbon burnt in air (excess $\\text{O}_2$):</b><br>
    Carbon is completely consumed: $1\\text{ mol of C}$ produces $1\\text{ mol of } \\text{CO}_2$.<br>
    $$\\text{Amount of } \\text{CO}_2 = 1 \\times 44\\text{ g} = \\mathbf{44\\text{ g}}$$<br><br>
    <b>(ii) $1\\text{ mole}$ of carbon burnt in $16\\text{ g}$ of dioxygen:</b><br>
    • Moles of $\\text{O}_2$ provided: $n(\\text{O}_2) = \\frac{16\\text{ g}}{32\\text{ g mol}^{-1}} = 0.5\\text{ mol}$.<br>
    • $1\\text{ mol}$ of carbon requires $1\\text{ mol}$ of $\\text{O}_2$. Since only $0.5\\text{ mol}$ of $\\text{O}_2$ is available, **dioxygen ($\\text{O}_2$) is the limiting reagent**.<br>
    • $0.5\\text{ mol of } \\text{O}_2$ produces $0.5\\text{ mol of } \\text{CO}_2$:<br>
    $$\\text{Amount of } \\text{CO}_2 = 0.5 \\times 44\\text{ g} = \\mathbf{22\\text{ g}}$$<br><br>
    <b>(iii) $2\\text{ moles}$ of carbon burnt in $16\\text{ g}$ of dioxygen:</b><br>
    • Again, moles of $\\text{O}_2 = \\frac{16}{32} = 0.5\\text{ mol}$.<br>
    • $\\text{O}_2$ remains the limiting reagent (carbon is in large excess).<br>
    • Amount of $\\text{CO}_2$ formed depends solely on $\\text{O}_2$ consumed:<br>
    $$\\text{Amount of } \\text{CO}_2 = 0.5 \\times 44\\text{ g} = \\mathbf{22\\text{ g}}$$<br><br>
    $$\\mathbf{\\text{Summary: } (i)\\; 44\\text{ g of } \\text{CO}_2,\\; (ii)\\; 22\\text{ g of } \\text{CO}_2,\\; (iii)\\; 22\\text{ g of } \\text{CO}_2.}}$$
  </div>`,
  '3 Marks',
  [
    ['(i) Full stoichiometric calculation: $1\\text{ mol } \\text{CO}_2 = 44\\text{ g}$', '1 Mark'],
    ['(ii) Identifying $\\text{O}_2$ as limiting reagent and finding $22\\text{ g } \\text{CO}_2$', '1 Mark'],
    ['(iii) Identifying limiting reagent with excess carbon and finding $22\\text{ g } \\text{CO}_2$', '1 Mark']
  ]
));

// Question 1.5
questions.push(createQCard(
  'c11c-ch1-q5', 'Question 1.5', 'NCERT Exercise',
  'Calculate the mass of sodium acetate ($\\text{CH}_3\\text{COONa}$) required to make $500\\text{ mL}$ of $0.375\\text{ molar}$ aqueous solution. Molar mass of sodium acetate is $82.0245\\text{ g mol}^{-1}$.',
  `<div class="step">
    Given Data:<br>
    • Molarity of solution $M = 0.375\\text{ M} = 0.375\\text{ mol L}^{-1}$<br>
    • Volume of solution $V = 500\\text{ mL} = 0.500\\text{ L}$<br>
    • Molar mass of $\\text{CH}_3\\text{COONa}$ = $82.0245\\text{ g mol}^{-1}$<br><br>
    <b>1. Formula for Molarity:</b><br>
    $$\\text{Molarity } (M) = \\frac{\\text{Moles of solute } (n)}{\\text{Volume of solution in litres } (V)}$$<br>
    $$n = M \\times V = (0.375\\text{ mol L}^{-1}) \\times (0.500\\text{ L}) = \\mathbf{0.1875\\text{ mol}}$$<br><br>
    <b>2. Mass of sodium acetate required ($m$):</b><br>
    $$m = n \\times \\text{Molar mass} = (0.1875\\text{ mol}) \\times (82.0245\\text{ g mol}^{-1})$$<br>
    $$m = 15.37959\\text{ g} \\approx \\mathbf{15.38\\text{ g}}$$<br><br>
    $$\\mathbf{\\text{The mass of sodium acetate required is approximately } 15.38\\text{ g.}}$$
  </div>`,
  '2 Marks',
  [
    ['Molarity relation and calculating moles required: $n = 0.1875\\text{ mol}$', '1 Mark'],
    ['Evaluating required mass: $m = 0.1875 \\times 82.0245 = 15.38\\text{ g}$', '1 Mark']
  ]
));

// Question 1.6
questions.push(createQCard(
  'c11c-ch1-q6', 'Question 1.6', 'NCERT Exercise',
  'Calculate the concentration of nitric acid in moles per litre in a sample which has a density, $1.41\\text{ g mL}^{-1}$ and the mass per cent of nitric acid in it being $69\\%$.',
  `<div class="step">
    Given Data:<br>
    • Density of nitric acid sample $d = 1.41\\text{ g mL}^{-1}$<br>
    • Mass percentage of $\\text{HNO}_3$ = $69\\%$<br>
    • Molar mass of $\\text{HNO}_3 = 1.008 + 14.007 + 3(16.00) = \\mathbf{63.015\\text{ g mol}^{-1} \\approx 63.0\\text{ g mol}^{-1}}$<br><br>
    <b>Method 1: Direct Concept (Basis: $1\\text{ L} = 1000\\text{ mL}$ of solution):</b><br>
    1. Mass of $1000\\text{ mL}$ of solution:<br>
    $$\\text{Mass} = V \\times d = 1000\\text{ mL} \\times 1.41\\text{ g mL}^{-1} = \\mathbf{1410\\text{ g}}$$<br><br>
    2. Mass of pure $\\text{HNO}_3$ present in $1000\\text{ mL}$ of solution:<br>
    $$\\text{Mass of } \\text{HNO}_3 = 1410\\text{ g} \\times \\frac{69}{100} = \\mathbf{972.9\\text{ g}}$$<br><br>
    3. Moles of $\\text{HNO}_3$ in $1\\text{ L}$ (Molarity):<br>
    $$\\text{Molarity } (M) = \\frac{\\text{Mass of } \\text{HNO}_3}{\\text{Molar mass}} = \\frac{972.9\\text{ g}}{63.015\\text{ g mol}^{-1}} = \\mathbf{15.439\\text{ mol L}^{-1} \\approx 15.44\\text{ M}}$$<br><br>
    <i>Shortcut check formula:</i> $M = \\frac{\\% \\times d \\times 10}{M_w} = \\frac{69 \\times 1.41 \\times 10}{63.015} = \\frac{972.9}{63.015} = \\mathbf{15.44\\text{ M}}$.<br><br>
    $$\\mathbf{\\text{The concentration of nitric acid is } 15.44\\text{ mol L}^{-1} \\text{ (or } 15.44\\text{ M}\\text{).}}$$
  </div>`,
  '3 Marks',
  [
    ['Calculating mass of $1\\text{ L}$ solution $= 1410\\text{ g}$', '1 Mark'],
    ['Evaluating mass of $\\text{HNO}_3 = 972.9\\text{ g}$ from $69\\%$ mass percentage', '1 Mark'],
    ['Calculating molarity $M = 972.9 / 63 = 15.44\\text{ mol L}^{-1}$', '1 Mark']
  ]
));

// Question 1.7
questions.push(createQCard(
  'c11c-ch1-q7', 'Question 1.7', 'NCERT Exercise',
  'How much copper can be obtained from $100\\text{ g}$ of copper sulphate ($\\text{CuSO}_4$)? (Atomic mass of $\\text{Cu} = 63.5\\text{ u}$, $\\text{S} = 32.0\\text{ u}$, $\\text{O} = 16.0\\text{ u}$).',
  `<div class="step">
    <b>1. Molar mass of Copper Sulphate ($\\text{CuSO}_4$):</b><br>
    $$M(\\text{CuSO}_4) = 63.5 + 32.0 + 4(16.0) = 63.5 + 32.0 + 64.0 = \\mathbf{159.5\\text{ g mol}^{-1}}$$<br><br>
    <b>2. Stoichiometric proportion:</b><br>
    In $1\\text{ mole } (159.5\\text{ g})$ of $\\text{CuSO}_4$, there is $1\\text{ mole } (63.5\\text{ g})$ of copper ($\\text{Cu}$).<br><br>
    $$\\text{Mass of copper in } 100\\text{ g of } \\text{CuSO}_4 = \\frac{63.5\\text{ g}}{159.5\\text{ g}} \\times 100\\text{ g}$$<br>
    $$\\text{Mass of copper} = \\frac{6350}{159.5} = \\mathbf{39.81\\text{ g}}$$<br><br>
    $$\\mathbf{\\text{Approximately } 39.81\\text{ g of copper can be obtained from } 100\\text{ g of copper sulphate.}}$$
  </div>`,
  '2 Marks',
  [
    ['Calculation of molar mass of $\\text{CuSO}_4 = 159.5\\text{ g/mol}$', '1 Mark'],
    ['Stoichiometric ratio evaluation yielding $39.81\\text{ g of Cu}$', '1 Mark']
  ]
));

// Question 1.8
questions.push(createQCard(
  'c11c-ch1-q8', 'Question 1.8', 'NCERT Exercise',
  'Determine the molecular formula of an oxide of iron in which the mass per cent of iron and oxygen are $69.9$ and $30.1$ respectively. Given that the molar mass of the oxide is $159.69\\text{ g mol}^{-1}$.',
  `<div class="step">
    From Question 1.3:<br>
    • Empirical formula calculated from $69.9\\% \\text{ Fe}$ and $30.1\\% \\text{ O}$ is: $\\mathbf{\\text{Fe}_2\\text{O}_3}$.<br><br>
    <b>1. Empirical Formula Mass of $\\text{Fe}_2\\text{O}_3$:</b><br>
    $$\\text{Empirical formula mass} = 2(55.85) + 3(16.00) = 111.70 + 48.00 = \\mathbf{159.70\\text{ g mol}^{-1}}$$<br><br>
    <b>2. Ratio factor ($n$):</b><br>
    $$n = \\frac{\\text{Molar mass}}{\\text{Empirical formula mass}} = \\frac{159.69\\text{ g mol}^{-1}}{159.70\\text{ g mol}^{-1}} \\approx \\mathbf{1}$$<br><br>
    <b>3. Molecular Formula:</b><br>
    $$\\text{Molecular formula} = n \\times (\\text{Empirical formula}) = 1 \\times (\\text{Fe}_2\\text{O}_3) = \\mathbf{\\text{Fe}_2\\text{O}_3}$$<br><br>
    $$\\mathbf{\\text{The molecular formula of the iron oxide is } \\text{Fe}_2\\text{O}_3\\text{.}}$$
  </div>`,
  '2 Marks',
  [
    ['Calculating empirical formula mass of $\\text{Fe}_2\\text{O}_3 = 159.7\\text{ g/mol}$', '1 Mark'],
    ['Evaluating $n = 1$ and concluding molecular formula is $\\text{Fe}_2\\text{O}_3$', '1 Mark']
  ]
));

// Question 1.9
questions.push(createQCard(
  'c11c-ch1-q9', 'Question 1.9', 'NCERT Exercise',
  'Calculate the atomic mass (average) of chlorine using the following data:<br>• $^{35}\\text{Cl}$: Natural Abundance = $75.77\\%$, Molar Mass = $34.9689\\text{ u}$<br>• $^{37}\\text{Cl}$: Natural Abundance = $24.23\\%$, Molar Mass = $36.9659\\text{ u}$',
  `<div class="step">
    <b>Formula for Fractional Average Atomic Mass:</b><br>
    $$\\text{Average Atomic Mass} = \\sum (\\text{Fractional Abundance} \\times \\text{Isotopic Mass})$$<br><br>
    $$\\text{Average Atomic Mass} = \\left(\\frac{75.77}{100} \\times 34.9689\\text{ u}\\right) + \\left(\\frac{24.23}{100} \\times 36.9659\\text{ u}\\right)$$<br>
    $$\\text{Average Atomic Mass} = (0.7577 \\times 34.9689) + (0.2423 \\times 36.9659)$$<br>
    $$\\text{Average Atomic Mass} = 26.4959\\text{ u} + 8.9568\\text{ u} = \\mathbf{35.4527\\text{ u} \\approx 35.45\\text{ u}}$$<br><br>
    $$\\mathbf{\\text{The average atomic mass of naturally occurring chlorine is } 35.45\\text{ u.}}$$
  </div>`,
  '2 Marks',
  [
    ['Setting up weighted isotopic average equation', '1 Mark'],
    ['Accurate numerical evaluation yielding $35.45\\text{ u}$', '1 Mark']
  ]
));

// Question 1.10
questions.push(createQCard(
  'c11c-ch1-q10', 'Question 1.10', 'NCERT Exercise',
  'In three moles of ethane ($\\text{C}_2\\text{H}_6$), calculate the following:<br>(i) Number of moles of carbon atoms.<br>(ii) Number of moles of hydrogen atoms.<br>(iii) Number of molecules of ethane.',
  `<div class="step">
    Given: $3\\text{ moles of ethane } (\\text{C}_2\\text{H}_6)$.<br>
    $1\\text{ molecule of } \\text{C}_2\\text{H}_6$ contains $2\\text{ atoms of C}$ and $6\\text{ atoms of H}$.<br>
    Therefore, $1\\text{ mole of } \\text{C}_2\\text{H}_6$ contains $2\\text{ moles of C atoms}$ and $6\\text{ moles of H atoms}$.<br><br>
    <b>(i) Number of moles of carbon atoms:</b><br>
    $$\\text{Moles of C} = 3 \\times 2 = \\mathbf{6\\text{ moles of C atoms}}$$<br><br>
    <b>(ii) Number of moles of hydrogen atoms:</b><br>
    $$\\text{Moles of H} = 3 \\times 6 = \\mathbf{18\\text{ moles of H atoms}}$$<br><br>
    <b>(iii) Number of molecules of ethane:</b><br>
    $$\\text{Molecules} = \\text{Moles} \\times N_A = 3 \\times (6.022 \\times 10^{23}) = \\mathbf{1.8066 \\times 10^{24}\\text{ molecules} \\approx 1.81 \\times 10^{24}\\text{ molecules}}$$<br><br>
    $$\\mathbf{\\text{Summary: } (i)\\; 6\\text{ moles C},\\; (ii)\\; 18\\text{ moles H},\\; (iii)\\; 1.81 \\times 10^{24}\\text{ molecules of ethane.}}$$
  </div>`,
  '3 Marks',
  [
    ['(i) Moles of carbon atoms $= 6\\text{ moles}$', '1 Mark'],
    ['(ii) Moles of hydrogen atoms $= 18\\text{ moles}$', '1 Mark'],
    ['(iii) Molecules of ethane $= 1.81 \\times 10^{24}$', '1 Mark']
  ]
));

// Question 1.11
questions.push(createQCard(
  'c11c-ch1-q11', 'Question 1.11', 'NCERT Exercise',
  'What is the concentration of sugar ($\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$) in $\\text{mol L}^{-1}$ if its $20\\text{ g}$ are dissolved in enough water to make a final volume up to $2\\text{ L}$?',
  `<div class="step">
    Given Data:<br>
    • Mass of sugar (solute) $w = 20\\text{ g}$<br>
    • Final volume of solution $V = 2\\text{ L}$<br>
    • Molar mass of sucrose ($\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$):<br>
    $$M = 12(12.011) + 22(1.008) + 11(16.00) = 144.13 + 22.18 + 176.00 = \\mathbf{342.3\\text{ g mol}^{-1}}$$<br><br>
    <b>1. Moles of sugar ($n$):</b><br>
    $$n = \\frac{w}{M} = \\frac{20\\text{ g}}{342.3\\text{ g mol}^{-1}} = \\mathbf{0.05843\\text{ mol}}$$<br><br>
    <b>2. Molar Concentration (Molarity $M$):</b><br>
    $$\\text{Molarity } (M) = \\frac{n}{V} = \\frac{0.05843\\text{ mol}}{2\\text{ L}} = \\mathbf{0.02921\\text{ mol L}^{-1} \\approx 0.0292\\text{ M}}$$<br><br>
    $$\\mathbf{\\text{The concentration of sugar in the solution is } 0.0292\\text{ mol L}^{-1} \\text{ (or } 2.92 \\times 10^{-2}\\text{ M}\\text{).}}$$
  </div>`,
  '2 Marks',
  [
    ['Calculation of moles of sucrose $n = 20 / 342.3 = 0.0584\\text{ mol}$', '1 Mark'],
    ['Evaluating molarity $M = 0.0584 / 2 = 0.0292\\text{ mol L}^{-1}$', '1 Mark']
  ]
));

// Question 1.12
questions.push(createQCard(
  'c11c-ch1-q12', 'Question 1.12', 'NCERT Exercise',
  'If the density of methanol is $0.793\\text{ kg L}^{-1}$, what is its volume needed for making $2.5\\text{ L}$ of its $0.25\\text{ M}$ solution?',
  `<div class="step">
    Given Data:<br>
    • Target solution volume $V_2 = 2.5\\text{ L}$<br>
    • Target molarity $M_2 = 0.25\\text{ M} = 0.25\\text{ mol L}^{-1}$<br>
    • Density of pure methanol $\\rho = 0.793\\text{ kg L}^{-1} = 793\\text{ g L}^{-1}$<br>
    • Molar mass of methanol ($\\text{CH}_3\\text{OH}$): $M_w = 12.01 + 4(1.008) + 16.00 = \\mathbf{32.04\\text{ g mol}^{-1}}$<br><br>
    <b>1. Molarity of Pure Methanol ($M_1$):</b><br>
    In $1\\text{ L}$ of pure methanol, there are $793\\text{ g}$ of $\\text{CH}_3\\text{OH}$.<br>
    $$M_1 = \\frac{793\\text{ g}}{32.04\\text{ g mol}^{-1}} = \\mathbf{24.75\\text{ mol L}^{-1} = 24.75\\text{ M}}$$<br><br>
    <b>2. Applying Dilution Law:</b><br>
    $$M_1 V_1 = M_2 V_2$$<br>
    $$(24.75\\text{ M}) \\times V_1 = (0.25\\text{ M}) \\times (2.5\\text{ L})$$<br>
    $$V_1 = \\frac{0.625}{24.75} = \\mathbf{0.02525\\text{ L} = 25.25\\text{ mL} \\approx 25.3\\text{ mL}}$$<br><br>
    $$\\mathbf{\\text{The volume of methanol needed is } 25.25\\text{ mL (or } 0.02525\\text{ L}\\text{).}}$$
  </div>`,
  '3 Marks',
  [
    ['Determining molarity of pure methanol $M_1 = 793 / 32.04 = 24.75\\text{ M}$', '1.5 Marks'],
    ['Applying dilution formula $M_1 V_1 = M_2 V_2$ to find $V_1 = 25.25\\text{ mL}$', '1.5 Marks']
  ]
));

// Question 1.13
questions.push(createQCard(
  'c11c-ch1-q13', 'Question 1.13', 'NCERT Exercise',
  'Pressure is determined as force per unit area of the surface. The S.I. unit of pressure, pascal is as shown below: $1\\text{ Pa} = 1\\text{ N m}^{-2}$. If mass of air at sea level is $1034\\text{ g cm}^{-2}$, calculate the pressure in pascal.',
  `<div class="step">
    Given Data:<br>
    • Mass per unit area $\\frac{m}{A} = 1034\\text{ g cm}^{-2}$<br>
    • Convert to SI units ($\\text{kg m}^{-2}$):<br>
    $$1034\\text{ g cm}^{-2} = \\frac{1034 \\times 10^{-3}\\text{ kg}}{10^{-4}\\text{ m}^2} = 1034 \\times 10 = \\mathbf{10340\\text{ kg m}^{-2}}$$<br>
    • Acceleration due to gravity $g = 9.8\\text{ m s}^{-2}$<br><br>
    <b>Calculation of Atmospheric Pressure ($P$):</b><br>
    $$P = \\frac{F}{A} = \\frac{m g}{A} = \\left(\\frac{m}{A}\\right) \\times g$$<br>
    $$P = (10340\\text{ kg m}^{-2}) \\times (9.8\\text{ m s}^{-2}) = \\mathbf{101332\\text{ N m}^{-2} = 1.01332 \\times 10^5\\text{ Pa}}$$<br><br>
    $$\\mathbf{\\text{The pressure at sea level is } 1.01332 \\times 10^5\\text{ Pa (or } 1.013 \\times 10^5\\text{ Pa}\\text{).}}$$
  </div>`,
  '2 Marks',
  [
    ['Unit conversion of mass per unit area to $10340\\text{ kg m}^{-2}$', '1 Mark'],
    ['Evaluating pressure $P = (m/A)g = 1.01332 \\times 10^5\\text{ Pa}$', '1 Mark']
  ]
));

// Question 1.14
questions.push(createQCard(
  'c11c-ch1-q14', 'Question 1.14', 'NCERT Exercise',
  'What is the SI unit of mass? How is it defined?',
  `<div class="step">
    <b>1. SI Unit of Mass:</b><br>
    The SI base unit of mass is the **kilogram** (symbol: $\\mathbf{kg}$).<br><br>
    <b>2. Modern Definition (CGPM 2019 Revision):</b><br>
    The kilogram is defined by taking the fixed numerical value of the **Planck constant $h$** to be $6.62607015 \\times 10^{-34}$ when expressed in the unit $\\text{J s}$, which is equal to $\\text{kg m}^2\\text{ s}^{-1}$, where the metre and the second are defined in terms of the speed of light $c$ and the hyperfine transition frequency of caesium-133 $\\Delta \\nu_{\\text{Cs}}$.<br><br>
    <i>Historical Note: Prior to May 20, 2019, the kilogram was defined as the mass of the international prototype of the kilogram (a cylinder of platinum-iridium alloy kept at the International Bureau of Weights and Measures at Sèvres, near Paris).</i>
  </div>`,
  '2 Marks',
  [
    ['Stating the SI unit of mass is kilogram (kg)', '0.5 Mark'],
    ['Accurately quoting the modern definition in terms of Planck constant $h$', '1.5 Marks']
  ]
));

// Question 1.15
questions.push(createQCard(
  'c11c-ch1-q15', 'Question 1.15', 'NCERT Exercise',
  'Match the following prefixes with their multiples:<br>Prefixes: (i) micro, (ii) deca, (iii) mega, (iv) giga, (v) femto<br>Multiples: $10^6, 10^9, 10^{-6}, 10^{-15}, 10$',
  `<div class="step">
    <b>Matching Prefixes with Standard Metric Multiples:</b><br><br>
    <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.85rem;">
      <thead>
        <tr style="background:#f1f5f9; text-align:left; border-bottom:2px solid #cbd5e1;">
          <th style="padding:8px;">Prefix</th>
          <th style="padding:8px;">Symbol</th>
          <th style="padding:8px;">Multiple</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px;"><b>(i) micro</b></td>
          <td style="padding:8px;">$\\mu$</td>
          <td style="padding:8px; font-weight:bold; color:#059669;">$10^{-6}$</td>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px;"><b>(ii) deca</b></td>
          <td style="padding:8px;">$\\text{da}$</td>
          <td style="padding:8px; font-weight:bold; color:#059669;">$10$ (or $10^1$)</td>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px;"><b>(iii) mega</b></td>
          <td style="padding:8px;">$\\text{M}$</td>
          <td style="padding:8px; font-weight:bold; color:#059669;">$10^6$</td>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:8px;"><b>(iv) giga</b></td>
          <td style="padding:8px;">$\\text{G}$</td>
          <td style="padding:8px; font-weight:bold; color:#059669;">$10^9$</td>
        </tr>
        <tr>
          <td style="padding:8px;"><b>(v) femto</b></td>
          <td style="padding:8px;">$\\text{f}$</td>
          <td style="padding:8px; font-weight:bold; color:#059669;">$10^{-15}$</td>
        </tr>
      </tbody>
    </table>
  </div>`,
  '2.5 Marks',
  [
    ['Matching micro $\\to 10^{-6}$ and deca $\\to 10$', '1 Mark'],
    ['Matching mega $\\to 10^6$ and giga $\\to 10^9$', '1 Mark'],
    ['Matching femto $\\to 10^{-15}$', '0.5 Mark']
  ]
));

// Question 1.16
questions.push(createQCard(
  'c11c-ch1-q16', 'Question 1.16', 'NCERT Exercise',
  'What do you mean by significant figures?',
  `<div class="step">
    <b>Definition:</b><br>
    <b>Significant figures</b> are meaningful digits in a measured or calculated quantity which are known with certainty plus one final digit that is uncertain or estimated.<br><br>
    <b>Key Principles:</b><br>
    • The uncertainty in any experimental measurement is indicated by stating the number of significant figures.<br>
    • For example, if a mass is recorded as $11.2\\text{ g}$, the digits '1' and '1' are completely certain, while the digit '2' is uncertain (with an inherent uncertainty of $\\pm 0.1\\text{ g}$). The measurement contains $3$ significant figures.<br>
    • All non-zero digits are significant.<br>
    • Zeros preceding the first non-zero digit are not significant (they merely indicate the decimal point).<br>
    • Zeros between two non-zero digits are always significant.<br>
    • Terminal zeros at the end of a number after a decimal point are significant.
  </div>`,
  '2 Marks',
  [
    ['Formal definition: certain digits plus one uncertain digit', '1 Mark'],
    ['Example illustrating measurement precision and rules', '1 Mark']
  ]
));

// Question 1.17
questions.push(createQCard(
  'c11c-ch1-q17', 'Question 1.17', 'NCERT Exercise',
  'A sample of drinking water was found to be severely contaminated with chloroform ($\\text{CHCl}_3$), supposed to be a carcinogen. The level of contamination was $15\\text{ ppm}$ (by mass):<br>(i) Express this in percent by mass.<br>(ii) Determine the molality of chloroform in the water sample.',
  `<div class="step">
    Given Data:<br>
    • Contamination level = $15\\text{ ppm}$ (parts per million by mass).<br>
    • This means there are $15\\text{ g}$ of $\\text{CHCl}_3$ in $10^6\\text{ g}$ of solution.<br>
    • Molar mass of $\\text{CHCl}_3 = 12.01 + 1.008 + 3(35.45) = 12.01 + 1.008 + 106.35 = \\mathbf{119.37\\text{ g mol}^{-1} \\approx 119.4\\text{ g mol}^{-1}}$.<br><br>
    <b>(i) Percent by Mass:</b><br>
    $$\\text{Mass } \\% = \\frac{\\text{Mass of } \\text{CHCl}_3}{\\text{Total mass of solution}} \\times 100$$<br>
    $$\\text{Mass } \\% = \\frac{15\\text{ g}}{10^6\\text{ g}} \\times 100 = 15 \\times 10^{-4}\\% = \\mathbf{1.5 \\times 10^{-3}\\%}$$$$<br><br>
    <b>(ii) Molality ($m$):</b><br>
    • Mass of solute $\\text{CHCl}_3 = 15\\text{ g}$.<br>
    • Mass of solvent (water) $= 10^6\\text{ g} - 15\\text{ g} \\approx 10^6\\text{ g} = 1000\\text{ kg}$.<br>
    • Moles of $\\text{CHCl}_3$ ($n$):<br>
    $$n = \\frac{15\\text{ g}}{119.37\\text{ g mol}^{-1}} = \\mathbf{0.12566\\text{ mol}}$$<br>
    • Molality ($m$):<br>
    $$m = \\frac{\\text{Moles of solute}}{\\text{Mass of solvent in kg}} = \\frac{0.12566\\text{ mol}}{1000\\text{ kg}} = \\mathbf{1.257 \\times 10^{-4}\\text{ m} \\approx 1.26 \\times 10^{-4}\\text{ mol kg}^{-1}}$$<br><br>
    $$\\mathbf{\\text{Summary: } (i)\\; 1.5 \\times 10^{-3}\\%\\text{ by mass},\\; (ii)\\; 1.26 \\times 10^{-4}\\text{ m.}}$$
  </div>`,
  '3 Marks',
  [
    ['(i) Converting 15 ppm to mass percentage: $1.5 \\times 10^{-3}\\%$', '1 Mark'],
    ['(ii) Calculating moles of chloroform $n = 0.1257\\text{ mol}$', '1 Mark'],
    ['Evaluating molality $m = 1.26 \\times 10^{-4}\\text{ mol kg}^{-1}$', '1 Mark']
  ]
));

// Question 1.18
questions.push(createQCard(
  'c11c-ch1-q18', 'Question 1.18', 'NCERT Exercise',
  'Express the following in scientific notation:<br>(i) $0.0048$<br>(ii) $234,000$<br>(iii) $8008$<br>(iv) $500.0$<br>(v) $6.0012$',
  `<div class="step">
    Scientific notation has the standard format $N \\times 10^n$, where $1 \\le N < 10$ and $n$ is an integer.<br><br>
    • **(i) $0.0048$:** Move decimal 3 places to the right:<br>
    $$0.0048 = \\mathbf{4.8 \\times 10^{-3}}$$<br><br>
    • **(ii) $234,000$:** Move decimal 5 places to the left:<br>
    $$234,000 = \\mathbf{2.34 \\times 10^5}$$<br><br>
    • **(iii) $8008$:** Move decimal 3 places to the left:<br>
    $$8008 = \\mathbf{8.008 \\times 10^3}$$<br><br>
    • **(iv) $500.0$:** Move decimal 2 places to the left, retaining significant terminal zero:<br>
    $$500.0 = \\mathbf{5.000 \\times 10^2}$$<br><br>
    • **(v) $6.0012$:** Already in proper scientific range ($1 \\le N < 10$):<br>
    $$6.0012 = \\mathbf{6.0012 \\times 10^0}$$
  </div>`,
  '2.5 Marks',
  [
    ['(i) $4.8 \\times 10^{-3}$ and (ii) $2.34 \\times 10^5$', '1 Mark'],
    ['(iii) $8.008 \\times 10^3$ and (iv) $5.000 \\times 10^2$', '1 Mark'],
    ['(v) $6.0012 \\times 10^0$', '0.5 Mark']
  ]
));

// Question 1.19
questions.push(createQCard(
  'c11c-ch1-q19', 'Question 1.19', 'NCERT Exercise',
  'How many significant figures are present in the following?<br>(i) $0.0025$<br>(ii) $208$<br>(iii) $5005$<br>(iv) $126,000$<br>(v) $500.0$<br>(vi) $2.0034$',
  `<div class="step">
    <b>Analysis using standard rules for significant figures:</b><br><br>
    • **(i) $0.0025$:** **$2$ significant figures.** Leading zeros before '2' are place-holders and non-significant; '2' and '5' are significant.<br><br>
    • **(ii) $208$:** **$3$ significant figures.** The zero is trapped between two non-zero digits.<br><br>
    • **(iii) $5005$:** **$4$ significant figures.** Both zeros are trapped between two non-zero digits.<br><br>
    • **(iv) $126,000$:** **$3$ significant figures.** Terminal zeros in a whole number without a decimal point are non-significant (in scientific notation: $1.26 \\times 10^5$).<br><br>
    • **(v) $500.0$:** **$4$ significant figures.** Terminal zeros after a decimal point are explicitly significant.<br><br>
    • **(vi) $2.0034$:** **$5$ significant figures.** Zeros trapped between non-zero digits are significant.
  </div>`,
  '3 Marks',
  [
    ['(i) 2 and (ii) 3 significant figures', '1 Mark'],
    ['(iii) 4 and (iv) 3 significant figures', '1 Mark'],
    ['(v) 4 and (vi) 5 significant figures', '1 Mark']
  ]
));

// Question 1.20
questions.push(createQCard(
  'c11c-ch1-q20', 'Question 1.20', 'NCERT Exercise',
  'Round up the following upto three significant figures:<br>(i) $34.216$<br>(ii) $10.4107$<br>(iii) $0.04597$<br>(iv) $2808$',
  `<div class="step">
    <b>Rules for Rounding Off to Three Significant Figures:</b><br><br>
    • **(i) $34.216$:** The fourth digit is $1$ (less than 5). We drop it without changing the third digit.<br>
    $$\\mathbf{34.2}$$<br><br>
    • **(ii) $10.4107$:** The fourth digit is $1$ (less than 5). We drop it.<br>
    $$\\mathbf{10.4}$$<br><br>
    • **(iii) $0.04597$:** Leading zeros are not significant. The first three significant figures are 4, 5, 9. The fourth digit is $7$ (greater than 5), so we round up $9$ to $10$, which cascades to round $459$ to $460$.<br>
    $$\\mathbf{0.0460}$$<br><br>
    • **(iv) $2808$:** The fourth digit is $8$ (greater than 5). Rounding up gives $2810$. In unambiguous scientific notation:<br>
    $$\\mathbf{2810 \\quad \\text{or} \\quad 2.81 \\times 10^3}$$
  </div>`,
  '2 Marks',
  [
    ['(i) $34.2$ and (ii) $10.4$', '1 Mark'],
    ['(iii) $0.0460$ and (iv) $2810$ (or $2.81 \\times 10^3$)', '1 Mark']
  ]
));

// Question 1.21
questions.push(createQCard(
  'c11c-ch1-q21', 'Question 1.21', 'NCERT Exercise',
  'The following data were obtained when dinitrogen and dioxygen react together to form different compounds:<br>• Compound I: Mass of $\\text{N}_2 = 14\\text{ g}$, Mass of $\\text{O}_2 = 16\\text{ g}$<br>• Compound II: Mass of $\\text{N}_2 = 14\\text{ g}$, Mass of $\\text{O}_2 = 32\\text{ g}$<br>• Compound III: Mass of $\\text{N}_2 = 28\\text{ g}$, Mass of $\\text{O}_2 = 32\\text{ g}$<br>• Compound IV: Mass of $\\text{N}_2 = 28\\text{ g}$, Mass of $\\text{O}_2 = 80\\text{ g}$<br>(a) Which law of chemical combination is obeyed by the above experimental data? Give its statement.<br>(b) Fill in the blanks in the following conversions:<br>(i) $1\\text{ km} = \\dots\\dots\\dots\\text{ mm} = \\dots\\dots\\dots\\text{ pm}$<br>(ii) $1\\text{ mg} = \\dots\\dots\\dots\\text{ kg} = \\dots\\dots\\dots\\text{ ng}$<br>(iii) $1\\text{ mL} = \\dots\\dots\\dots\\text{ L} = \\dots\\dots\\dots\\text{ dm}^3$',
  `<div class="step">
    <b>(a) Law of Chemical Combination:</b><br>
    Let us fix the mass of dinitrogen at $14\\text{ g}$ for all four compounds:<br>
    • In Compound I: $14\\text{ g of } \\text{N}_2$ combines with **$16\\text{ g of } \\text{O}_2$** (ratio $= 16\\text{ g}$).<br>
    • In Compound II: $14\\text{ g of } \\text{N}_2$ combines with **$32\\text{ g of } \\text{O}_2$** (ratio $= 32\\text{ g}$).<br>
    • In Compound III: $28\\text{ g of } \\text{N}_2$ combines with $32\\text{ g of } \\text{O}_2 \\implies 14\\text{ g of } \\text{N}_2$ combines with **$16\\text{ g of } \\text{O}_2$**.<br>
    • In Compound IV: $28\\text{ g of } \\text{N}_2$ combines with $80\\text{ g of } \\text{O}_2 \\implies 14\\text{ g of } \\text{N}_2$ combines with **$40\\text{ g of } \\text{O}_2$**.<br><br>
    The masses of dioxygen combining with a fixed mass ($14\\text{ g}$) of dinitrogen are in the ratio:<br>
    $$16 : 32 : 16 : 40 = \\mathbf{2 : 4 : 2 : 5} \\quad \\text{(or } 1 : 2 : 1 : 2.5 \\implies 2 : 4 : 2 : 5\\text{)}$$<br>
    Since this is a simple whole number ratio, the data obeys the **Law of Multiple Proportions**.<br><br>
    <i>Statement: "When two elements combine to form two or more chemical compounds, then the masses of one of the elements which combine with a fixed mass of the other bear a simple whole number ratio to one another."</i><br><br>
    <b>(b) Conversions:</b><br>
    • **(i)** $1\\text{ km} = 10^3\\text{ m} = 10^3 \\times 10^3\\text{ mm} = \\mathbf{10^6\\text{ mm}}$.<br>
    $$1\\text{ km} = 10^3\\text{ m} = 10^3 \\times 10^{12}\\text{ pm} = \\mathbf{10^{15}\\text{ pm}}$$<br>
    • **(ii)** $1\\text{ mg} = 10^{-3}\\text{ g} = 10^{-3} \\times 10^{-3}\\text{ kg} = \\mathbf{10^{-6}\\text{ kg}}$.<br>
    $$1\\text{ mg} = 10^{-3}\\text{ g} = 10^{-3} \\times 10^9\\text{ ng} = \\mathbf{10^6\\text{ ng}}$$<br>
    • **(iii)** $1\\text{ mL} = \\mathbf{10^{-3}\\text{ L}}$.<br>
    Since $1\\text{ L} = 1\\text{ dm}^3$, $1\\text{ mL} = \\mathbf{10^{-3}\\text{ dm}^3}$.
  </div>`,
  '4 Marks',
  [
    ['(a) Fixing $14\\text{ g N}_2$, establishing whole-number ratio $2:4:2:5$', '1.5 Marks'],
    ['Stating the Law of Multiple Proportions accurately', '1 Mark'],
    ['(b) Correct unit conversions (i), (ii), and (iii)', '1.5 Marks']
  ]
));

// Question 1.22
questions.push(createQCard(
  'c11c-ch1-q22', 'Question 1.22', 'NCERT Exercise',
  'If the speed of light is $3.00 \\times 10^8\\text{ m s}^{-1}$, calculate the distance covered by light in $2.00\\text{ ns}$.',
  `<div class="step">
    Given Data:<br>
    • Speed of light $c = 3.00 \\times 10^8\\text{ m s}^{-1}$<br>
    • Time $t = 2.00\\text{ ns} = 2.00 \\times 10^{-9}\\text{ s}$<br><br>
    <b>Calculation:</b><br>
    $$\\text{Distance } (d) = \\text{Speed } (c) \\times \\text{Time } (t)$$<br>
    $$d = (3.00 \\times 10^8\\text{ m s}^{-1}) \\times (2.00 \\times 10^{-9}\\text{ s})$$<br>
    $$d = 6.00 \\times 10^{-1}\\text{ m} = \\mathbf{0.600\\text{ m} = 60.0\\text{ cm}}$$<br><br>
    $$\\mathbf{\\text{The distance covered by light in } 2.00\\text{ ns is } 0.600\\text{ m (or } 60.0\\text{ cm}\\text{).}}$$
  </div>`,
  '2 Marks',
  [
    ['Conversion of nanoseconds $2.00\\text{ ns} = 2.00 \\times 10^{-9}\\text{ s}$', '0.5 Mark'],
    ['Calculating distance $d = c \\times t = 0.600\\text{ m}$ (3 sig figs)', '1.5 Marks']
  ]
));

// Question 1.23
questions.push(createQCard(
  'c11c-ch1-q23', 'Question 1.23', 'NCERT Exercise',
  'In a reaction: $\\text{A} + \\text{B}_2 \\longrightarrow \\text{AB}_2$<br>Identify the limiting reagent, if any, in the following reaction mixtures:<br>(i) $300\\text{ atoms of A} + 200\\text{ molecules of B}$<br>(ii) $2\\text{ mol A} + 3\\text{ mol B}$<br>(iii) $100\\text{ atoms of A} + 100\\text{ molecules of B}$<br>(iv) $5\\text{ mol A} + 2.5\\text{ mol B}$<br>(v) $2.5\\text{ mol A} + 5\\text{ mol B}$',
  `<div class="step">
    From the reaction: $\\text{A} + \\text{B}_2 \\longrightarrow \\text{AB}_2$, the stoichiometric requirement is **$1\\text{ atom (or mole) of A}$ reacts with $1\\text{ molecule (or mole) of } \\text{B}_2$**.<br><br>
    • **(i) $300\\text{ atoms of A} + 200\\text{ molecules of B}_2$:**<br>
    $200\\text{ molecules of } \\text{B}_2$ react with only $200\\text{ atoms of A}$, leaving $100\\text{ atoms of A}$ unreacted.<br>
    $$\\mathbf{\\text{B}_2 \\text{ is the limiting reagent.}}$$<br><br>
    • **(ii) $2\\text{ mol A} + 3\\text{ mol B}_2$:**<br>
    $2\\text{ mol of A}$ reacts with $2\\text{ mol of } \\text{B}_2$, leaving $1\\text{ mol of } \\text{B}_2$ in excess.<br>
    $$\\mathbf{\\text{A is the limiting reagent.}}$$<br><br>
    • **(iii) $100\\text{ atoms of A} + 100\\text{ molecules of B}_2$:**<br>
    Both reactants are present in exact stoichiometric proportions. Both are completely consumed.<br>
    $$\\mathbf{\\text{No limiting reagent (stoichiometric mixture).}}$$<br><br>
    • **(iv) $5\\text{ mol A} + 2.5\\text{ mol B}_2$:**<br>
    $2.5\\text{ mol of } \\text{B}_2$ requires only $2.5\\text{ mol of A}$, leaving $2.5\\text{ mol of A}$ unreacted.<br>
    $$\\mathbf{\\text{B}_2 \\text{ is the limiting reagent.}}$$<br><br>
    • **(v) $2.5\\text{ mol A} + 5\\text{ mol B}_2$:**<br>
    $2.5\\text{ mol of A}$ requires $2.5\\text{ mol of } \\text{B}_2$, leaving $2.5\\text{ mol of } \\text{B}_2$ in excess.<br>
    $$\\mathbf{\\text{A is the limiting reagent.}}$$
  </div>`,
  '2.5 Marks',
  [
    ['(i) $\\text{B}_2$ and (ii) $\\text{A}$ identified with reasoning', '1 Mark'],
    ['(iii) Neither / stoichiometric mixture', '0.5 Mark'],
    ['(iv) $\\text{B}_2$ and (v) $\\text{A}$ identified with reasoning', '1 Mark']
  ]
));

// Question 1.24
questions.push(createQCard(
  'c11c-ch1-q24', 'Question 1.24', 'NCERT Exercise',
  'Dinitrogen and dihydrogen react with each other to produce ammonia according to the following chemical equation:<br>$$\\text{N}_2(g) + 3\\text{H}_2(g) \\longrightarrow 2\\text{NH}_3(g)$$<br>(i) Calculate the mass of ammonia produced if $2.00 \\times 10^3\\text{ g}$ dinitrogen reacts with $1.00 \\times 10^3\\text{ g}$ of dihydrogen.<br>(ii) Will any of the two reactants remain unreacted?<br>(iii) If yes, which one and what would be its mass?',
  `<div class="step">
    Given Data:<br>
    • Mass of $\\text{N}_2 = 2.00 \\times 10^3\\text{ g} = 2000\\text{ g}$<br>
    • Mass of $\\text{H}_2 = 1.00 \\times 10^3\\text{ g} = 1000\\text{ g}$<br>
    • Molar masses: $\\text{N}_2 = 28.02\\text{ g mol}^{-1}$, $\\text{H}_2 = 2.016\\text{ g mol}^{-1}$, $\\text{NH}_3 = 17.03\\text{ g mol}^{-1}$.<br><br>
    <b>1. Determining initial moles of reactants:</b><br>
    $$n(\\text{N}_2) = \\frac{2000\\text{ g}}{28.02\\text{ g mol}^{-1}} = \\mathbf{71.38\\text{ mol}}$$<br>
    $$n(\\text{H}_2) = \\frac{1000\\text{ g}}{2.016\\text{ g mol}^{-1}} = \\mathbf{496.03\\text{ mol}}$$<br><br>
    <b>2. Finding Limiting Reagent:</b><br>
    From stoichiometry, $1\\text{ mol of } \\text{N}_2$ requires $3\\text{ moles of } \\text{H}_2$.<br>
    Moles of $\\text{H}_2$ required to react with $71.38\\text{ mol of } \\text{N}_2$:<br>
    $$n(\\text{H}_2)_{\\text{req}} = 3 \\times 71.38 = \\mathbf{214.14\\text{ mol}}$$<br>
    Since we have $496.03\\text{ mol of } \\text{H}_2$ (far greater than $214.14\\text{ mol}$), **$\\text{N}_2$ is the limiting reagent** and $\\text{H}_2$ is in excess.<br><br>
    <b>(i) Mass of Ammonia Produced:</b><br>
    From equation: $1\\text{ mol } \\text{N}_2 \\to 2\\text{ mol } \\text{NH}_3$.<br>
    $$n(\\text{NH}_3) = 2 \\times 71.38 = 142.76\\text{ mol}$$<br>
    $$\\text{Mass of } \\text{NH}_3 = 142.76\\text{ mol} \\times 17.03\\text{ g mol}^{-1} = \\mathbf{2431.2\\text{ g} = 2.43 \\times 10^3\\text{ g} = 2.43\\text{ kg}}$$<br><br>
    <b>(ii) Will any reactant remain unreacted?</b><br>
    $$\\mathbf{\\text{Yes, dihydrogen (}\\text{H}_2\\text{) will remain unreacted.}}$$<br><br>
    <b>(iii) Mass of unreacted dihydrogen:</b><br>
    • Unreacted moles of $\\text{H}_2$: $496.03 - 214.14 = 281.89\\text{ mol}$.<br>
    • Mass of remaining $\\text{H}_2$:<br>
    $$\\text{Mass of unreacted } \\text{H}_2 = 281.89\\text{ mol} \\times 2.016\\text{ g mol}^{-1} = \\mathbf{568.29\\text{ g} \\approx 568\\text{ g} = 5.68 \\times 10^2\\text{ g}}$$<br><br>
    $$\\mathbf{\\text{Summary: } (i)\\; 2.43 \\times 10^3\\text{ g } \\text{NH}_3,\\; (ii)\\; \\text{Yes (}\\text{H}_2\\text{)},\\; (iii)\\; 568\\text{ g of } \\text{H}_2\\text{ remaining.}}$$
  </div>`,
  '4 Marks',
  [
    ['Calculating moles of $\\text{N}_2$ and $\\text{H}_2$, and identifying $\\text{N}_2$ as limiting reagent', '1.5 Marks'],
    ['(i) Calculation of mass of $\\text{NH}_3$ produced $= 2.43 \\times 10^3\\text{ g}$', '1 Mark'],
    ['(ii) Identifying $\\text{H}_2$ as unreacted reactant', '0.5 Mark'],
    ['(iii) Calculation of mass of unreacted $\\text{H}_2 = 568\\text{ g}$', '1 Mark']
  ]
));

// Question 1.25
questions.push(createQCard(
  'c11c-ch1-q25', 'Question 1.25', 'NCERT Exercise',
  'How are $0.50\\text{ mol } \\text{Na}_2\\text{CO}_3$ and $0.50\\text{ M } \\text{Na}_2\\text{CO}_3$ different?',
  `<div class="step">
    Molar mass of sodium carbonate ($\\text{Na}_2\\text{CO}_3$) = $2(23.0) + 12.0 + 3(16.0) = \\mathbf{106\\text{ g mol}^{-1}}$.<br><br>
    <b>1. $0.50\\text{ mol } \\text{Na}_2\\text{CO}_3$:</b><br>
    • Represents an **amount of substance** (a definite mass / quantity of matter).<br>
    • Mass of $0.50\\text{ mol}$: $\\text{Mass} = 0.50\\text{ mol} \\times 106\\text{ g mol}^{-1} = \\mathbf{53\\text{ g of } \\text{Na}_2\\text{CO}_3}$.<br>
    • It is independent of the volume of solvent.<br><br>
    <b>2. $0.50\\text{ M } \\text{Na}_2\\text{CO}_3$:</b><br>
    • Represents a **molar concentration** of an aqueous solution.<br>
    • It means that $0.50\\text{ mole } (53\\text{ g})$ of $\\text{Na}_2\\text{CO}_3$ is dissolved in enough water such that the **total volume of solution is exactly $1\\text{ litre}$** ($1000\\text{ mL}$).<br><br>
    $$\\mathbf{\\text{Difference: } 0.50\\text{ mol is a mass (53 g), whereas } 0.50\\text{ M is a concentration (53 g per litre of solution).}}$$
  </div>`,
  '2 Marks',
  [
    ['Explanation of $0.50\\text{ mol}$ as amount of matter (53 g)', '1 Mark'],
    ['Explanation of $0.50\\text{ M}$ as concentration (0.50 mol/L of solution)', '1 Mark']
  ]
));

// Question 1.26
questions.push(createQCard(
  'c11c-ch1-q26', 'Question 1.26', 'NCERT Exercise',
  'If $10\\text{ volumes}$ of dihydrogen gas react with $5\\text{ volumes}$ of dioxygen gas, how many volumes of water vapour would be produced?',
  `<div class="step">
    Balanced equation of combining gaseous volumes (Gay-Lussac's Law of Gaseous Volumes):<br>
    $$2\\text{H}_2(g) + \\text{O}_2(g) \\longrightarrow 2\\text{H}_2\\text{O}(g)$$<br>
    Under identical conditions of temperature and pressure:<br>
    $$2\\text{ volumes of } \\text{H}_2 + 1\\text{ volume of } \\text{O}_2 \\longrightarrow 2\\text{ volumes of } \\text{H}_2\\text{O}(g)$$<br><br>
    Given:<br>
    • Volume of $\\text{H}_2 = 10\\text{ volumes}$<br>
    • Volume of $\\text{O}_2 = 5\\text{ volumes}$<br><br>
    Ratio check: $\\frac{10\\text{ volumes } \\text{H}_2}{5\\text{ volumes } \\text{O}_2} = \\frac{2}{1}$, which exactly matches the stoichiometric ratio (neither reactant is in excess).<br>
    Therefore, the volume of water vapour produced is:<br>
    $$\\text{Volume of } \\text{H}_2\\text{O}(g) = 10\\text{ volumes}$$<br><br>
    $$\\mathbf{\\text{Exactly } 10\\text{ volumes of water vapour will be produced.}}$$
  </div>`,
  '2 Marks',
  [
    ['Gay-Lussac reaction volume ratio $2 : 1 : 2$', '1 Mark'],
    ['Deducing that 10 volumes of water vapour are produced', '1 Mark']
  ]
));

// Question 1.27
questions.push(createQCard(
  'c11c-ch1-q27', 'Question 1.27', 'NCERT Exercise',
  'Convert the following into basic units:<br>(i) $28.7\\text{ pm}$<br>(ii) $15.15\\text{ pm}$<br>(iii) $25365\\text{ mg}$',
  `<div class="step">
    Basic SI unit of length is **metre** ($\\text{m}$), and basic SI unit of mass is **kilogram** ($\\text{kg}$).<br><br>
    • **(i) $28.7\\text{ pm}$:**<br>
    Since $1\\text{ pm} = 10^{-12}\\text{ m}$:<br>
    $$28.7\\text{ pm} = 28.7 \\times 10^{-12}\\text{ m} = \\mathbf{2.87 \\times 10^{-11}\\text{ m}}$$<br><br>
    • **(ii) $15.15\\text{ pm}$:**<br>
    $$15.15\\text{ pm} = 15.15 \\times 10^{-12}\\text{ m} = \\mathbf{1.515 \\times 10^{-11}\\text{ m}}$$<br><br>
    • **(iii) $25365\\text{ mg}$:**<br>
    Since $1\\text{ mg} = 10^{-3}\\text{ g} = 10^{-6}\\text{ kg}$:<br>
    $$25365\\text{ mg} = 25365 \\times 10^{-6}\\text{ kg} = \\mathbf{2.5365 \\times 10^{-2}\\text{ kg} = 0.025365\\text{ kg}}$$<br><br>
    $$\\mathbf{\\text{Results: } (i)\\; 2.87 \\times 10^{-11}\\text{ m},\\; (ii)\\; 1.515 \\times 10^{-11}\\text{ m},\\; (iii)\\; 2.5365 \\times 10^{-2}\\text{ kg.}}$$
  </div>`,
  '3 Marks',
  [
    ['(i) Conversion to metres: $2.87 \\times 10^{-11}\\text{ m}$', '1 Mark'],
    ['(ii) Conversion to metres: $1.515 \\times 10^{-11}\\text{ m}$', '1 Mark'],
    ['(iii) Conversion to kilograms: $2.5365 \\times 10^{-2}\\text{ kg}$', '1 Mark']
  ]
));

// Question 1.28
questions.push(createQCard(
  'c11c-ch1-q28', 'Question 1.28', 'NCERT Exercise',
  'Which one of the following will have the largest number of atoms?<br>(i) $1\\text{ g Au }(s)$<br>(ii) $1\\text{ g Na }(s)$<br>(iii) $1\\text{ g Li }(s)$<br>(iv) $1\\text{ g of } \\text{Cl}_2(g)$',
  `<div class="step">
    <b>General Formula:</b><br>
    $$\\text{Number of atoms} = \\left(\\frac{\\text{Mass}}{\\text{Molar mass}}\\right) \\times N_A \\times (\\text{Atomicity})$$<br><br>
    • **(i) $1\\text{ g of Au}(s)$** (Molar mass $\\text{Au} = 197\\text{ g mol}^{-1}$):<br>
    $$\\text{Atoms} = \\frac{1}{197} \\times N_A = \\mathbf{0.00508 \\times N_A\\text{ atoms}}$$<br><br>
    • **(ii) $1\\text{ g of Na}(s)$** (Molar mass $\\text{Na} = 23\\text{ g mol}^{-1}$):<br>
    $$\\text{Atoms} = \\frac{1}{23} \\times N_A = \\mathbf{0.04348 \\times N_A\\text{ atoms}}$$<br><br>
    • **(iii) $1\\text{ g of Li}(s)$** (Molar mass $\\text{Li} = 7\\text{ g mol}^{-1}$):<br>
    $$\\text{Atoms} = \\frac{1}{7} \\times N_A = \\mathbf{0.14286 \\times N_A\\text{ atoms}}$$<br><br>
    • **(iv) $1\\text{ g of } \\text{Cl}_2(g)$** (Molar mass $\\text{Cl}_2 = 71\\text{ g mol}^{-1}$, Atomicity = 2):<br>
    $$\\text{Atoms} = \\frac{1}{71} \\times N_A \\times 2 = \\frac{2}{71} \\times N_A = \\mathbf{0.02817 \\times N_A\\text{ atoms}}$$<br><br>
    Comparing the multipliers: $0.14286 > 0.04348 > 0.02817 > 0.00508$.<br><br>
    $$\\mathbf{1\\text{ g of Li}(s) \\text{ has the largest number of atoms (}\\approx 8.60 \\times 10^{22}\\text{ atoms).}}$$
  </div>`,
  '2 Marks',
  [
    ['Setting up mole-to-atom expressions with atomicities for all 4 options', '1 Mark'],
    ['Comparing values and concluding $1\\text{ g Li}$ has largest atom count', '1 Mark']
  ]
));

// Question 1.29
questions.push(createQCard(
  'c11c-ch1-q29', 'Question 1.29', 'NCERT Exercise',
  'Calculate the molarity of a solution of ethanol in water in which the mole fraction of ethanol is $0.040$ (assume the density of water to be $1.00\\text{ g mL}^{-1}$).',
  `<div class="step">
    Given Data:<br>
    • Mole fraction of ethanol $\\chi_{\\text{ethanol}} = 0.040$<br>
    • Mole fraction of water $\\chi_{\\text{water}} = 1 - 0.040 = 0.960$<br>
    • Density of water $= 1.00\\text{ g mL}^{-1} = 1.00\\text{ kg L}^{-1}$<br><br>
    <b>1. Basis: $1\\text{ litre}$ of water (solvent):</b><br>
    • Mass of $1000\\text{ mL}$ water $= 1000\\text{ g}$.<br>
    • Moles of water ($n_{\\text{water}}$):<br>
    $$n_{\\text{water}} = \\frac{1000\\text{ g}}{18.016\\text{ g mol}^{-1}} = \\mathbf{55.51\\text{ mol}}$$<br><br>
    <b>2. Moles of ethanol ($n_{\\text{ethanol}}$):</b><br>
    From definition of mole fraction:<br>
    $$\\chi_{\\text{ethanol}} = \\frac{n_{\\text{ethanol}}}{n_{\\text{ethanol}} + n_{\\text{water}}} = 0.040$$<br>
    $$n_{\\text{ethanol}} = 0.040 \\times (n_{\\text{ethanol}} + 55.51)$$<br>
    $$n_{\\text{ethanol}} - 0.040\\, n_{\\text{ethanol}} = 0.040 \\times 55.51$$<br>
    $$0.960\\, n_{\\text{ethanol}} = 2.2204 \\implies n_{\\text{ethanol}} = \\frac{2.2204}{0.960} = \\mathbf{2.313\\text{ mol}}$$<br><br>
    <b>3. Molarity calculation:</b><br>
    Since this amount ($2.313\\text{ mol}$) of ethanol is dissolved in approximately $1\\text{ litre}$ of solvent water:<br>
    $$\\text{Molarity} \\approx \\mathbf{2.31\\text{ mol L}^{-1} = 2.31\\text{ M}}$$<br><br>
    $$\\mathbf{\\text{The molarity of the ethanol solution is } 2.31\\text{ M.}}$$
  </div>`,
  '3 Marks',
  [
    ['Determining moles of water in 1 L $= 55.5\\text{ mol}$', '1 Mark'],
    ['Setting up mole fraction relation and solving for $n_{\\text{ethanol}} = 2.31\\text{ mol}$', '1 Mark'],
    ['Final molarity statement $2.31\\text{ mol L}^{-1}$', '1 Mark']
  ]
));

// Question 1.30
questions.push(createQCard(
  'c11c-ch1-q30', 'Question 1.30', 'NCERT Exercise',
  'What will be the mass of one $^{12}\\text{C}$ atom in $\\text{g}$?',
  `<div class="step">
    By definition of Avogadro's constant and molar mass:<br>
    • $1\\text{ mole of } ^{12}\\text{C atoms}$ has a mass of exactly $12.000\\text{ g}$.<br>
    • $1\\text{ mole}$ contains $N_A = 6.02214 \\times 10^{23}\\text{ atoms}$.<br><br>
    <b>Calculation:</b><br>
    $$\\text{Mass of } 1\\text{ atom of } ^{12}\\text{C} = \\frac{\\text{Molar mass}}{N_A}$$<br>
    $$\\text{Mass} = \\frac{12.000\\text{ g}}{6.02214 \\times 10^{23}} = \\mathbf{1.992648 \\times 10^{-23}\\text{ g} \\approx 1.9927 \\times 10^{-23}\\text{ g}}$$<br><br>
    $$\\mathbf{\\text{The mass of one } ^{12}\\text{C atom is } 1.9927 \\times 10^{-23}\\text{ g.}}$$
  </div>`,
  '2 Marks',
  [
    ['Relating mass of 1 mole to Avogadro constant', '1 Mark'],
    ['Evaluation yielding $1.9927 \\times 10^{-23}\\text{ g}$', '1 Mark']
  ]
));

// Question 1.31
questions.push(createQCard(
  'c11c-ch1-q31', 'Question 1.31', 'NCERT Exercise',
  'How many significant figures should be present in the answer of the following calculations?<br>(i) $\\frac{0.02856 \\times 298.15 \\times 0.112}{0.5785}$<br>(ii) $5 \\times 5.364$<br>(iii) $0.0125 + 0.7864 + 0.0215$',
  `<div class="step">
    <b>(i) $\\frac{0.02856 \\times 298.15 \\times 0.112}{0.5785}$:</b><br>
    • In multiplication and division, the result must retain as many significant figures as are present in the measurement with the **least number of significant figures**.<br>
    • Number of sig figs: $0.02856$ (4), $298.15$ (5), $0.112$ (3), $0.5785$ (4).<br>
    • The term with least significant figures is $0.112$ with **$3$ significant figures**.<br>
    • **Answer: $3$ significant figures.**<br><br>
    <b>(ii) $5 \\times 5.364$:</b><br>
    • The number $5$ is an exact whole integer (exact count) having infinite significant figures ($5.000\\dots$).<br>
    • The measured quantity is $5.364$, which has **$4$ significant figures**.<br>
    • **Answer: $4$ significant figures.**<br><br>
    <b>(iii) $0.0125 + 0.7864 + 0.0215$:</b><br>
    • In addition and subtraction, the result cannot have more digits to the right of the decimal point than any of the original numbers.<br>
    • All three terms have $4$ decimal places.<br>
    • Sum: $0.0125 + 0.7864 + 0.0215 = 0.8204$.<br>
    • Number of significant figures in $0.8204$ is **$4$**.<br>
    • **Answer: $4$ significant figures.**<br><br>
    $$\\mathbf{\\text{Results: } (i)\\; 3,\\; (ii)\\; 4,\\; (iii)\\; 4.}$$
  </div>`,
  '3 Marks',
  [
    ['(i) 3 significant figures (governed by 0.112)', '1 Mark'],
    ['(ii) 4 significant figures (5 is an exact number)', '1 Mark'],
    ['(iii) 4 significant figures (sum $= 0.8204$)', '1 Mark']
  ]
));

// Question 1.32
questions.push(createQCard(
  'c11c-ch1-q32', 'Question 1.32', 'NCERT Exercise',
  'Use the data given in the following table to calculate the molar mass of naturally occurring argon isotopes:<br>• $^{36}\\text{Ar}$: Isotopic molar mass = $35.96755\\text{ g mol}^{-1}$, Abundance = $0.337\\%$<br>• $^{38}\\text{Ar}$: Isotopic molar mass = $37.96272\\text{ g mol}^{-1}$, Abundance = $0.063\\%$<br>• $^{40}\\text{Ar}$: Isotopic molar mass = $39.9624\\text{ g mol}^{-1}$, Abundance = $99.600\\%$',
  `<div class="step">
    <b>Formula for Molar Mass of Isotopic Mixture:</b><br>
    $$M(\\text{Ar}) = \\sum (\\text{Fractional abundance} \\times \\text{Molar mass})$$<br><br>
    $$M(\\text{Ar}) = \\left(\\frac{0.337}{100} \\times 35.96755\\right) + \\left(\\frac{0.063}{100} \\times 37.96272\\right) + \\left(\\frac{99.600}{100} \\times 39.9624\\right)$$<br>
    $$M(\\text{Ar}) = (0.00337 \\times 35.96755) + (0.00063 \\times 37.96272) + (0.99600 \\times 39.9624)$$<br>
    $$M(\\text{Ar}) = 0.12121 + 0.02392 + 39.80255$$<br>
    $$M(\\text{Ar}) = \\mathbf{39.94768\\text{ g mol}^{-1} \\approx 39.948\\text{ g mol}^{-1}}$$<br><br>
    $$\\mathbf{\\text{The molar mass of naturally occurring argon is } 39.948\\text{ g mol}^{-1}.}$$
  </div>`,
  '2 Marks',
  [
    ['Formulation of fractional abundance weighted sum', '1 Mark'],
    ['Evaluation yielding $39.948\\text{ g mol}^{-1}$', '1 Mark']
  ]
));

// Question 1.33
questions.push(createQCard(
  'c11c-ch1-q33', 'Question 1.33', 'NCERT Exercise',
  'Calculate the number of atoms in each of the following:<br>(i) $52\\text{ moles of Ar}$<br>(ii) $52\\text{ u of He}$<br>(iii) $52\\text{ g of He}$',
  `<div class="step">
    <b>(i) $52\\text{ moles of Ar}$ (monoatomic gas):</b><br>
    $$1\\text{ mole contains } 6.022 \\times 10^{23}\\text{ atoms}$$<br>
    $$\\text{Atoms} = 52 \\times (6.022 \\times 10^{23}) = \\mathbf{3.131 \\times 10^{25}\\text{ atoms of Ar}}$$<br><br>
    <b>(ii) $52\\text{ u of He}$ (atomic mass unit):</b><br>
    • Atomic mass of $1\\text{ atom of He} = 4\\text{ u}$.<br>
    $$\\text{Number of atoms} = \\frac{\\text{Total mass in u}}{\\text{Mass of 1 atom in u}} = \\frac{52\\text{ u}}{4\\text{ u}} = \\mathbf{13\\text{ atoms of He}}$$<br><br>
    <b>(iii) $52\\text{ g of He}$ (gram atomic mass):</b><br>
    • Molar mass of $\\text{He} = 4.0\\text{ g mol}^{-1}$.<br>
    • Moles of $\\text{He} = \\frac{52\\text{ g}}{4.0\\text{ g mol}^{-1}} = 13\\text{ moles}$.<br>
    $$\\text{Number of atoms} = 13 \\times (6.022 \\times 10^{23}) = \\mathbf{7.8286 \\times 10^{24}\\text{ atoms of He} \\approx 7.83 \\times 10^{24}\\text{ atoms}}$$<br><br>
    $$\\mathbf{\\text{Summary: } (i)\\; 3.131 \\times 10^{25}\\text{ atoms},\\; (ii)\\; 13\\text{ atoms},\\; (iii)\\; 7.83 \\times 10^{24}\\text{ atoms.}}$$
  </div>`,
  '3 Marks',
  [
    ['(i) $52\\text{ mol Ar} = 3.131 \\times 10^{25}$ atoms', '1 Mark'],
    ['(ii) $52\\text{ u He} = 52/4 = 13$ atoms', '1 Mark'],
    ['(iii) $52\\text{ g He} = 13 \\times N_A = 7.83 \\times 10^{24}$ atoms', '1 Mark']
  ]
));

// Question 1.34
questions.push(createQCard(
  'c11c-ch1-q34', 'Question 1.34', 'NCERT Exercise',
  'A welding fuel gas contains carbon and hydrogen only. Burning a small sample of it in oxygen gives $3.38\\text{ g}$ carbon dioxide, $0.690\\text{ g}$ of water and no other products. A volume of $10.0\\text{ L}$ (measured at S.T.P.) of this welding gas is found to weigh $11.6\\text{ g}$. Calculate:<br>(i) empirical formula,<br>(ii) molar mass of the gas, and<br>(iii) molecular formula.',
  `<div class="step">
    Given Data from combustion:<br>
    • Mass of $\\text{CO}_2$ produced = $3.38\\text{ g}$<br>
    • Mass of $\\text{H}_2\\text{O}$ produced = $0.690\\text{ g}$<br><br>
    <b>1. (i) Empirical Formula:</b><br>
    • Mass of Carbon in $3.38\\text{ g } \\text{CO}_2$:<br>
    $$m_C = 3.38\\text{ g} \\times \\frac{12.011\\text{ g C}}{44.01\\text{ g } \\text{CO}_2} = \\mathbf{0.9224\\text{ g C}}$$<br>
    • Mass of Hydrogen in $0.690\\text{ g } \\text{H}_2\\text{O}$:<br>
    $$m_H = 0.690\\text{ g} \\times \\frac{2.016\\text{ g H}}{18.016\\text{ g } \\text{H}_2\\text{O}} = \\mathbf{0.0772\\text{ g H}}$$<br>
    • Moles of Carbon: $n_C = \\frac{0.9224}{12.011} = 0.0768\\text{ mol}$.<br>
    • Moles of Hydrogen: $n_H = \\frac{0.0772}{1.008} = 0.0766\\text{ mol}$.<br>
    • Molar ratio: $n_C : n_H = \\frac{0.0768}{0.0766} : \\frac{0.0766}{0.0766} = \\mathbf{1 : 1}$.<br>
    $$\\mathbf{\\text{Empirical formula of the gas is } \\text{CH.}}$$<br><br>
    <b>2. (ii) Molar Mass of the Gas:</b><br>
    At S.T.P. ($1\\text{ atm}, 273.15\\text{ K}$), $22.4\\text{ L}$ is occupied by $1\\text{ mole}$ of an ideal gas:<br>
    • $10.0\\text{ L}$ weighs $11.6\\text{ g}$.<br>
    $$\\text{Molar mass } (M) = \\frac{11.6\\text{ g}}{10.0\\text{ L}} \\times 22.4\\text{ L mol}^{-1} = 1.16 \\times 22.4 = \\mathbf{25.984\\text{ g mol}^{-1} \\approx 26.0\\text{ g mol}^{-1}}$$<br><br>
    <b>3. (iii) Molecular Formula:</b><br>
    • Empirical formula mass of $\\text{CH} = 12.01 + 1.008 = 13.018\\text{ g mol}^{-1}$.<br>
    • Whole number ratio $n = \\frac{\\text{Molar mass}}{\\text{Empirical formula mass}} = \\frac{26.0}{13.018} = \\mathbf{2}$.<br>
    $$\\text{Molecular formula} = (\\text{CH})_2 = \\mathbf{\\text{C}_2\\text{H}_2 \\quad \\text{(Acetylene / Ethyne)}}$$<br><br>
    $$\\mathbf{\\text{Summary: } (i)\\; \\text{CH},\\; (ii)\\; 26.0\\text{ g mol}^{-1},\\; (iii)\\; \\text{C}_2\\text{H}_2.}$$
  </div>`,
  '4 Marks',
  [
    ['(i) Elemental mass and mole calculations yielding empirical formula $\\text{CH}$', '1.5 Marks'],
    ['(ii) STP molar volume relation yielding molar mass $= 26.0\\text{ g mol}^{-1}$', '1.5 Marks'],
    ['(iii) Deducing $n = 2$ and molecular formula $\\text{C}_2\\text{H}_2$', '1 Mark']
  ]
));

// Question 1.35
questions.push(createQCard(
  'c11c-ch1-q35', 'Question 1.35', 'NCERT Exercise',
  'Calcium carbonate reacts with aqueous $\\text{HCl}$ to give $\\text{CaCl}_2$ and $\\text{CO}_2$ according to the reaction:<br>$$\\text{CaCO}_3(s) + 2\\text{HCl}(aq) \\longrightarrow \\text{CaCl}_2(aq) + \\text{CO}_2(g) + \\text{H}_2\\text{O}(l)$$<br>What mass of $\\text{CaCO}_3$ is required to react completely with $25\\text{ mL}$ of $0.75\\text{ M HCl}$?',
  `<div class="step">
    Given Data:<br>
    • Molarity of $\\text{HCl}$ = $0.75\\text{ M} = 0.75\\text{ mol L}^{-1}$<br>
    • Volume of $\\text{HCl} = 25\\text{ mL} = 0.025\\text{ L}$<br>
    • Molar mass of $\\text{CaCO}_3 = 40.08 + 12.01 + 3(16.00) = \\mathbf{100.09\\text{ g mol}^{-1} \\approx 100\\text{ g mol}^{-1}}$<br><br>
    <b>1. Moles of $\\text{HCl}$ available:</b><br>
    $$n(\\text{HCl}) = M \\times V = (0.75\\text{ mol L}^{-1}) \\times (0.025\\text{ L}) = \\mathbf{0.01875\\text{ mol}}$$<br><br>
    <b>2. Stoichiometry:</b><br>
    From the balanced chemical equation, $2\\text{ moles of } \\text{HCl}$ react completely with $1\\text{ mole of } \\text{CaCO}_3$.<br>
    $$n(\\text{CaCO}_3) = \\frac{n(\\text{HCl})}{2} = \\frac{0.01875\\text{ mol}}{2} = \\mathbf{0.009375\\text{ mol}}$$<br><br>
    <b>3. Required Mass of $\\text{CaCO}_3$:</b><br>
    $$\\text{Mass} = n(\\text{CaCO}_3) \\times \\text{Molar mass} = (0.009375\\text{ mol}) \\times (100.09\\text{ g mol}^{-1})$$<br>
    $$\\text{Mass} = 0.9383\\text{ g} \\approx \\mathbf{0.94\\text{ g}}$$<br><br>
    $$\\mathbf{\\text{The mass of } \\text{CaCO}_3 \\text{ required is approximately } 0.94\\text{ g (or } 0.938\\text{ g}\\text{).}}$$
  </div>`,
  '3 Marks',
  [
    ['Calculating moles of $\\text{HCl} = 0.01875\\text{ mol}$', '1 Mark'],
    ['Stoichiometric mole conversion $n(\\text{CaCO}_3) = n(\\text{HCl})/2 = 0.009375\\text{ mol}$', '1 Mark'],
    ['Evaluating required mass $= 0.938\\text{ g} \\approx 0.94\\text{ g}$', '1 Mark']
  ]
));

// Question 1.36
questions.push(createQCard(
  'c11c-ch1-q36', 'Question 1.36', 'NCERT Exercise',
  'Chlorine is prepared in the laboratory by treating manganese dioxide ($\\text{MnO}_2$) with aqueous hydrochloric acid according to the reaction:<br>$$4\\text{HCl}(aq) + \\text{MnO}_2(s) \\longrightarrow 2\\text{H}_2\\text{O}(l) + \\text{MnCl}_2(aq) + \\text{Cl}_2(g)$$<br>How many grams of $\\text{HCl}$ react with $5.0\\text{ g}$ of manganese dioxide? (Atomic mass of $\\text{Mn} = 54.94\\text{ u}$, $\\text{O} = 16.00\\text{ u}$, $\\text{Cl} = 35.45\\text{ u}$, $\\text{H} = 1.008\\text{ u}$).',
  `<div class="step">
    Given Data:<br>
    • Mass of $\\text{MnO}_2 = 5.0\\text{ g}$<br>
    • Molar mass of $\\text{MnO}_2 = 54.94 + 2(16.00) = 54.94 + 32.00 = \\mathbf{86.94\\text{ g mol}^{-1}}$<br>
    • Molar mass of $\\text{HCl} = 1.008 + 35.45 = \\mathbf{36.46\\text{ g mol}^{-1}}$<br><br>
    <b>1. Moles of $\\text{MnO}_2$:</b><br>
    $$n(\\text{MnO}_2) = \\frac{5.0\\text{ g}}{86.94\\text{ g mol}^{-1}} = \\mathbf{0.05751\\text{ mol}}$$<br><br>
    <b>2. Stoichiometry:</b><br>
    From the balanced chemical equation, $1\\text{ mole of } \\text{MnO}_2$ reacts with $4\\text{ moles of } \\text{HCl}$.<br>
    $$n(\\text{HCl})_{\\text{required}} = 4 \\times n(\\text{MnO}_2) = 4 \\times 0.05751 = \\mathbf{0.23004\\text{ mol}}$$<br><br>
    <b>3. Mass of $\\text{HCl}$ required:</b><br>
    $$\\text{Mass of } \\text{HCl} = n(\\text{HCl}) \\times \\text{Molar mass of } \\text{HCl}$$<br>
    $$\\text{Mass of } \\text{HCl} = (0.23004\\text{ mol}) \\times (36.46\\text{ g mol}^{-1}) = \\mathbf{8.387\\text{ g} \\approx 8.40\\text{ g}}$$<br><br>
    $$\\mathbf{\\text{Approximately } 8.40\\text{ g of } \\text{HCl} \\text{ reacts with } 5.0\\text{ g of manganese dioxide.}}$$
  </div>`,
  '3 Marks',
  [
    ['Calculating molar mass of $\\text{MnO}_2 = 86.94\\text{ g/mol}$ and moles $= 0.0575\\text{ mol}$', '1 Mark'],
    ['Applying 4:1 stoichiometric ratio: $n(\\text{HCl}) = 0.230\\text{ mol}$', '1 Mark'],
    ['Evaluating mass of $\\text{HCl} = 0.230 \\times 36.46 = 8.40\\text{ g}$', '1 Mark']
  ]
));

// ============================================================================
// VECTOR SVG DIAGRAM: MOLE ROAD MAP & STOICHIOMETRY
// ============================================================================
const chemistrySvg = `
  <div style="margin:24px 0; background:white; padding:20px; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <h3 style="font-size:1.05rem; font-weight:800; color:#1e293b; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.2"><path d="M10 2v7.31M14 2v7.31M8.5 2h7M14 9.31a6.5 6.5 0 1 1-4 0"/></svg>
      Stoichiometric Mechanics: The Universal Mole Road Map &amp; Limiting Reagent Balance
    </h3>
    <svg viewBox="0 0 780 230" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', system-ui, sans-serif;">
      <!-- Panel 1: The Mole Road Map -->
      <rect x="15" y="15" width="375" height="200" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="35" y="38" font-size="12" font-weight="bold" fill="#1e293b">1. Universal Mole Interconversion Map:</text>

      <!-- Center Node: MOLES (n) -->
      <circle cx="200" cy="125" r="32" fill="#ecfdf5" stroke="#059669" stroke-width="2.5"/>
      <text x="180" y="122" font-size="11" font-weight="900" fill="#065f46">MOLES</text>
      <text x="193" y="136" font-size="9.5" font-weight="bold" fill="#047857">(n)</text>

      <!-- Top Node: Particles / Molecules -->
      <rect x="150" y="48" width="100" height="26" rx="5" fill="#f0fdf4" stroke="#86efac"/>
      <text x="162" y="65" font-size="9" font-weight="bold" fill="#166534">Number (N)</text>
      <line x1="200" y1="74" x2="200" y2="93" stroke="#059669" stroke-width="1.8"/>
      <text x="206" y="86" font-size="7.5" fill="#475569">&times; N_A / &divide; N_A</text>

      <!-- Left Node: Mass (g) -->
      <rect x="35" y="112" width="85" height="26" rx="5" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="47" y="129" font-size="9" font-weight="bold" fill="#1e40af">Mass (w, g)</text>
      <line x1="120" y1="125" x2="168" y2="125" stroke="#2563eb" stroke-width="1.8"/>
      <text x="126" y="118" font-size="7.5" fill="#475569">&divide; M</text>
      <text x="126" y="138" font-size="7.5" fill="#475569">&times; M</text>

      <!-- Right Node: Volume at STP (L) -->
      <rect x="275" y="112" width="100" height="26" rx="5" fill="#fdf4ff" stroke="#f0abfc"/>
      <text x="283" y="129" font-size="8.5" font-weight="bold" fill="#86198f">Gas Vol (STP, L)</text>
      <line x1="232" y1="125" x2="275" y2="125" stroke="#c026d3" stroke-width="1.8"/>
      <text x="238" y="118" font-size="7.5" fill="#475569">&times; 22.4L</text>
      <text x="238" y="138" font-size="7.5" fill="#475569">&divide; 22.4L</text>

      <!-- Bottom Node: Molarity (M) -->
      <rect x="150" y="175" width="100" height="26" rx="5" fill="#fff7ed" stroke="#fed7aa"/>
      <text x="162" y="192" font-size="9" font-weight="bold" fill="#9a3412">Molarity (M)</text>
      <line x1="200" y1="157" x2="200" y2="175" stroke="#ea580c" stroke-width="1.8"/>
      <text x="206" y="169" font-size="7.5" fill="#475569">M = n / V(L)</text>

      <!-- Panel 2: Limiting Reagent & Chemical Stoichiometry -->
      <rect x="405" y="15" width="360" height="200" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="425" y="38" font-size="12" font-weight="bold" fill="#1e293b">2. Limiting Reagent &amp; Stoichiometric Balance:</text>

      <!-- Reaction Scheme: aA + bB -> cC -->
      <rect x="425" y="52" width="320" height="34" rx="6" fill="#ecfdf5" stroke="#a7f3d0"/>
      <text x="445" y="73" font-size="10.5" font-weight="bold" fill="#065f46">a A + b B &longrightarrow; c C + d D (Stoichiometric Ratio)</text>

      <!-- Visual comparison boxes -->
      <rect x="430" y="98" width="145" height="100" rx="6" fill="#fff" stroke="#e2e8f0"/>
      <text x="440" y="116" font-size="9" font-weight="bold" fill="#b91c1c">Limiting Reagent:</text>
      <text x="440" y="133" font-size="8" fill="#334155">&bull; Smallest (Moles / coeff)</text>
      <text x="440" y="149" font-size="8" fill="#334155">&bull; Completely consumed</text>
      <text x="440" y="165" font-size="8" font-weight="bold" fill="#b91c1c">&bull; Dictates Product Mass</text>
      <text x="440" y="181" font-size="7.5" fill="#64748b">&bull; Reaction halts when zero</text>

      <rect x="590" y="98" width="160" height="100" rx="6" fill="#fff" stroke="#e2e8f0"/>
      <text x="600" y="116" font-size="9" font-weight="bold" fill="#047857">Excess Reagent:</text>
      <text x="600" y="133" font-size="8" fill="#334155">&bull; Larger (Moles / coeff)</text>
      <text x="600" y="149" font-size="8" fill="#334155">&bull; Portion left unreacted</text>
      <text x="600" y="165" font-size="8" font-weight="bold" fill="#047857">&bull; Remaining = Initial - Used</text>
      <text x="600" y="181" font-size="7.5" fill="#64748b">&bull; Safe surplus in reactions</text>
    </svg>
  </div>
`;

// ============================================================================
// ASSEMBLY OF CH1.HTML
// ============================================================================
const chapterHtml = `
<section class="chapter-section" id="c11c-ch1">
  <div class="chapter-header">
    <div class="ch-badge">1</div>
    <div class="chapter-header-info">
      <div class="ch-category">CBSE Class 11 Chemistry &bull; Chapter 1</div>
      <h2>Some Basic Concepts of Chemistry</h2>
      <p>NCERT Rationalised 2026–27 Syllabus &bull; All 36 Verbatim Questions with Official Step-by-Step Marking Rubrics</p>
    </div>
  </div>

  ${chemistrySvg}

  <div class="ex-div">NCERT Textbook Exercise 1.1 to 1.36: Laws of Chemical Combination, Dalton's Theory, Mole Concept, Stoichiometry, Limiting Reagent &amp; Solution Concentration Units</div>
${questions.join('\n')}

  <div class="chapter-nav-btns" style="margin-top:40px; display:flex; justify-content:space-between; align-items:center;">
    <a href="../ncert-solutions-class-11-chemistry.html" class="ch-nav-btn prev" style="padding:10px 24px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; text-decoration:none; color:#334155;">← Class 11 Chemistry Hub</a>
    <button class="ch-nav-btn next" onclick="showChapter(2)" style="padding:10px 24px; border-radius:8px; border:none; background:#059669; color:white; font-weight:700; cursor:pointer;">Next: Chapter 2 (Structure of Atom) →</button>
  </div>
</section>
`;

// Write ch1.html
const ch1Path = path.join(outDir, 'ch1.html');
fs.writeFileSync(ch1Path, chapterHtml.trim(), 'utf8');
console.log(`Successfully generated: ${ch1Path} (${chapterHtml.length} bytes)`);

// Update chapters-data.js
const dataJsPath = path.join(outDir, 'chapters-data.js');
let existingData = '';
if (fs.existsSync(dataJsPath)) {
  existingData = fs.readFileSync(dataJsPath, 'utf8');
}

// Append or update window.CHAPTER_DATA[1]
if (!existingData.includes('window.CHAPTER_DATA[1] =')) {
  fs.appendFileSync(dataJsPath, `\nwindow.CHAPTER_DATA[1] = ${JSON.stringify(chapterHtml.trim())};\n`, 'utf8');
  console.log(`Appended Chapter 1 to preloaded cache: ${dataJsPath}`);
} else {
  const regex = /window\.CHAPTER_DATA\[1\]\s*=\s*[\s\S]*?;\n/g;
  const updated = existingData.replace(regex, `window.CHAPTER_DATA[1] = ${JSON.stringify(chapterHtml.trim())};\n`);
  fs.writeFileSync(dataJsPath, updated, 'utf8');
  console.log(`Updated Chapter 1 in preloaded cache: ${dataJsPath}`);
}
