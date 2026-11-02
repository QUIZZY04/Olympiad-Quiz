// scripts/builders/gen-c12c-ch1-part3.js
// Class 12 Chemistry Chapter 1: Solutions (NCERT Exercises 1.21 to 1.41)
const { createQCard } = require('./c12c-helper');

const questions = [];

// Exercise 1.21
questions.push(createQCard(
  'c12c-ch1-q33', 'Question 1.21', 'NCERT Exercise',
  'Two elements $\\text{A}$ and $\\text{B}$ form compounds having formula $\\text{AB}_2$ and $\\text{AB}_4$. When dissolved in $20\\text{ g}$ of benzene ($\\text{C}_6\\text{H}_6$), $1\\text{ g}$ of $\\text{AB}_2$ lowers the freezing point by $2.3\\text{ K}$ whereas $1.0\\text{ g}$ of $\\text{AB}_4$ lowers it by $1.3\\text{ K}$. The molar depression constant for benzene is $5.1\\text{ K kg mol}^{-1}$. Calculate atomic masses of $\\text{A}$ and $\\text{B}$.',
  `<div class="step">
    <b>1. Formula for molar mass from depression in freezing point:</b><br>
    $$M_2 = \\frac{K_f \\times w_2 \\times 1000}{\\Delta T_f \\times w_1}$$<br><br>
    <b>2. Molar mass of $\\text{AB}_2$:</b><br>
    $w_2 = 1.0\\text{ g}$, $w_1 = 20\\text{ g}$, $\\Delta T_f = 2.3\\text{ K}$, $K_f = 5.1\\text{ K kg mol}^{-1}$<br>
    $$M_{\\text{AB}_2} = \\frac{5.1 \\times 1.0 \\times 1000}{2.3 \\times 20} = \\frac{5100}{46} = \\mathbf{110.87\\text{ g mol}^{-1}}$$<br><br>
    <b>3. Molar mass of $\\text{AB}_4$:</b><br>
    $w_2 = 1.0\\text{ g}$, $w_1 = 20\\text{ g}$, $\\Delta T_f = 1.3\\text{ K}$<br>
    $$M_{\\text{AB}_4} = \\frac{5.1 \\times 1.0 \\times 1000}{1.3 \\times 20} = \\frac{5100}{26} = \\mathbf{196.15\\text{ g mol}^{-1}}$$<br><br>
    <b>4. Calculating atomic masses of A and B:</b><br>
    Let atomic mass of A be $a$ and that of B be $b$.<br>
    $$a + 2b = 110.87 \\quad \\text{--- (1)}$$<br>
    $$a + 4b = 196.15 \\quad \\text{--- (2)}$$<br>
    Subtracting (1) from (2):<br>
    $$2b = 196.15 - 110.87 = 85.28 \\implies b = \\frac{85.28}{2} = \\mathbf{42.64\\text{ u}}$$<br>
    Substitute $b = 42.64$ into (1):<br>
    $$a + 2(42.64) = 110.87 \\implies a = 110.87 - 85.28 = \\mathbf{25.59\\text{ u}}$$<br>
    $$\\mathbf{\\text{Atomic mass of A} = 25.59\\text{ u}, \\quad \\text{Atomic mass of B} = 42.64\\text{ u}}$$
  </div>`,
  '3 Marks',
  [
    ['Calculation of molar masses: $M_{\\text{AB}_2} = 110.87$, $M_{\\text{AB}_4} = 196.15\\text{ g/mol}$', '1.5 Marks'],
    ['Solving linear equations to find atomic mass of B $= 42.64\\text{ u}$', '0.75 Mark'],
    ['Finding atomic mass of A $= 25.59\\text{ u}$', '0.75 Mark']
  ]
));

// Exercise 1.22
questions.push(createQCard(
  'c12c-ch1-q34', 'Question 1.22', 'NCERT Exercise',
  'At $300\\text{ K}$, $36\\text{ g}$ of glucose present in a litre of its solution has an osmotic pressure of $4.98\\text{ bar}$. If the osmotic pressure of the solution is $1.52\\text{ bars}$ at the same temperature, what would be its concentration?',
  `<div class="step">
    <b>1. Formula for osmotic pressure:</b><br>
    $$\\Pi = C R T$$<br>
    Since temperature ($T = 300\\text{ K}$) and gas constant ($R$) are constant, $\\Pi \\propto C$:<br>
    $$\\frac{\\Pi_1}{\\Pi_2} = \\frac{C_1}{C_2}$$<br><br>
    <b>2. Initial concentration of glucose ($C_1$):</b><br>
    Molar mass of glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) = $180\\text{ g mol}^{-1}$<br>
    $$C_1 = \\frac{36\\text{ g}}{180\\text{ g mol}^{-1} \\times 1\\text{ L}} = 0.20\\text{ M (or } 0.20\\text{ mol L}^{-1})$$<br>
    $\\Pi_1 = 4.98\\text{ bar}$, $\\Pi_2 = 1.52\\text{ bar}$<br><br>
    <b>3. Calculating new concentration ($C_2$):</b><br>
    $$C_2 = C_1 \\times \\frac{\\Pi_2}{\\Pi_1} = 0.20\\text{ mol L}^{-1} \\times \\frac{1.52\\text{ bar}}{4.98\\text{ bar}} = \\frac{0.304}{4.98} = \\mathbf{0.061\\text{ M } (\\text{or } 0.061\\text{ mol L}^{-1})}$$
  </div>`,
  '2 Marks',
  [
    ['Calculation of initial concentration $C_1 = 0.20\\text{ mol/L}$', '0.75 Mark'],
    ['Application of $\\Pi_1/\\Pi_2 = C_1/C_2$ and final concentration $C_2 = 0.061\\text{ M}$', '1.25 Marks']
  ]
));

// Exercise 1.23
questions.push(createQCard(
  'c12c-ch1-q35', 'Question 1.23', 'NCERT Exercise',
  'Suggest the most important type of intermolecular attractive interaction in the following pairs:<br>(i) n-hexane and n-octane<br>(ii) $\\text{I}_2$ and $\\text{CCl}_4$<br>(iii) $\\text{NaClO}_4$ and water<br>(iv) methanol and acetone<br>(v) acetonitrile ($\\text{CH}_3\\text{CN}$) and acetone ($\\text{CH}_3\\text{COCH}_3$).',
  `<div class="step">
    <b>Intermolecular Attractive Interactions:</b><br>
    <ol style="margin-left:20px; line-height:1.8;">
      <li><strong>(i) n-hexane and n-octane:</strong> Both are non-polar hydrocarbons. The predominant interaction is <strong>London dispersion forces (van der Waals forces)</strong>.</li>
      <li><strong>(ii) $\\text{I}_2$ and $\\text{CCl}_4$:</strong> Both are completely non-polar molecules. The predominant interaction is <strong>London dispersion forces</strong>.</li>
      <li><strong>(iii) $\\text{NaClO}_4$ and water:</strong> $\\text{NaClO}_4$ is an ionic compound (giving $\\text{Na}^+$ and $\\text{ClO}_4^-$ ions) and water is a polar covalent solvent. The interaction is <strong>Ion-dipole attraction</strong>.</li>
      <li><strong>(iv) Methanol and acetone:</strong> Methanol is polar and capable of H-bonding; acetone is a polar ketone with carbonyl oxygen. They interact via <strong>Dipole-dipole interactions</strong> (specifically, intermolecular <strong>Hydrogen bonding</strong> between $-\\text{OH}$ of methanol and carbonyl oxygen of acetone).</li>
      <li><strong>(v) Acetonitrile and acetone:</strong> Both are polar covalent molecules without $-\\text{OH}$ groups. The predominant interaction is <strong>Dipole-dipole attraction</strong>.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) and (ii) London dispersion forces', '1 Mark'],
    ['(iii) Ion-dipole interaction', '0.5 Mark'],
    ['(iv) Dipole-dipole / Hydrogen bonding', '0.75 Mark'],
    ['(v) Dipole-dipole attraction', '0.75 Mark']
  ]
));

// Exercise 1.24
questions.push(createQCard(
  'c12c-ch1-q36', 'Question 1.24', 'NCERT Exercise',
  'Based on solute-solvent interactions, arrange the following in order of increasing solubility in n-octane and explain: Cyclohexane, $\\text{KCl}$, $\\text{CH}_3\\text{OH}$, $\\text{CH}_3\\text{CN}$.',
  `<div class="step">
    <b>1. Solute-Solvent Principle:</b><br>
    According to the "like dissolves like" principle, non-polar solvents (like n-octane, a hydrocarbon) dissolve non-polar solutes readily, while ionic and strongly polar solutes have negligible solubility.<br><br>
    <b>2. Nature of Solutes:</b><br>
    • $\\text{KCl}$: Ionic compound (electrostatic forces), practically insoluble in non-polar n-octane.<br>
    • $\\text{CH}_3\\text{OH}$: Strongly polar with intermolecular hydrogen bonding, very low solubility in n-octane.<br>
    • $\\text{CH}_3\\text{CN}$: Moderately polar (dipole moment $\\mu \\approx 3.9\\text{ D}$), more soluble than methanol because it cannot form self-hydrogen bonds.<br>
    • $\\text{Cyclohexane}$: Completely non-polar ring hydrocarbon, highly soluble and miscible in all proportions with n-octane due to identical London dispersion forces.<br><br>
    <b>3. Increasing Order of Solubility:</b><br>
    $$\\mathbf{\\text{KCl} < \\text{CH}_3\\text{OH} < \\text{CH}_3\\text{CN} < \\text{Cyclohexane}}$$
  </div>`,
  '2 Marks',
  [
    ['Application of "like dissolves like" principle and polarity evaluation', '1 Mark'],
    ['Correct order of increasing solubility: $\\text{KCl} < \\text{CH}_3\\text{OH} < \\text{CH}_3\\text{CN} < \\text{Cyclohexane}$', '1 Mark']
  ]
));

// Exercise 1.25
questions.push(createQCard(
  'c12c-ch1-q37', 'Question 1.25', 'NCERT Exercise',
  'Amongst the following compounds, identify which are insoluble, partially soluble and highly soluble in water:<br>(i) phenol<br>(ii) toluene<br>(iii) formic acid<br>(iv) ethylene glycol<br>(v) chloroform<br>(vi) pentanol.',
  `<div class="step">
    <b>Solubility in Water:</b><br>
    <ul style="margin-left:20px; line-height:1.8;">
      <li><strong>(i) Phenol ($\\text{C}_6\\text{H}_5\\text{OH}$):</strong> <strong>Partially soluble</strong> in water. Although the $-\\text{OH}$ group forms hydrogen bonds with water, the large non-polar hydrophobic phenyl ring ($\\text{C}_6\\text{H}_5-$) resists dissolution.</li>
      <li><strong>(ii) Toluene ($\\text{C}_6\\text{H}_5\\text{CH}_3$):</strong> <strong>Insoluble</strong> in water. It is a completely non-polar hydrocarbon with no hydrogen bonding capability with polar water.</li>
      <li><strong>(iii) Formic acid ($\\text{HCOOH}$):</strong> <strong>Highly soluble</strong> (miscible) in water. Its small molecular size and capability to form extensive intermolecular hydrogen bonds make it completely soluble.</li>
      <li><strong>(iv) Ethylene glycol ($\\text{CH}_2\\text{OH}-\\text{CH}_2\\text{OH}$):</strong> <strong>Highly soluble</strong> in water. It possesses two polar $-\\text{OH}$ groups that form strong, extensive hydrogen bonds with water.</li>
      <li><strong>(v) Chloroform ($\\text{CHCl}_3$):</strong> <strong>Insoluble</strong> (or almost insoluble) in water. It is dense and non-polar, unable to form hydrogen bonds with water.</li>
      <li><strong>(vi) Pentanol ($\\text{C}_5\\text{H}_{11}\\text{OH}$):</strong> <strong>Partially soluble</strong> in water. It has an $-\\text{OH}$ group, but the bulky five-carbon hydrophobic alkyl chain ($\-\\text{C}_5\\text{H}_{11}$) significantly lowers its solubility.</li>
    </ul>
    <br>
    <b>Summary Table:</b><br>
    • <em>Highly Soluble:</em> Formic acid, Ethylene glycol.<br>
    • <em>Partially Soluble:</em> Phenol, Pentanol.<br>
    • <em>Insoluble:</em> Toluene, Chloroform.
  </div>`,
  '3 Marks',
  [
    ['Identification of highly soluble compounds (Formic acid, Ethylene glycol)', '1 Mark'],
    ['Identification of partially soluble compounds (Phenol, Pentanol)', '1 Mark'],
    ['Identification of insoluble compounds (Toluene, Chloroform)', '1 Mark']
  ]
));

// Exercise 1.26
questions.push(createQCard(
  'c12c-ch1-q38', 'Question 1.26', 'NCERT Exercise',
  'If the density of some lake water is $1.25\\text{ g mL}^{-1}$ and contains $92\\text{ g}$ of $\\text{Na}^+$ ions per $\\text{kg}$ of water, calculate the molality of $\\text{Na}^+$ ions in the lake.',
  `<div class="step">
    <b>1. Given:</b><br>
    Mass of $\\text{Na}^+$ ions (solute, $w_2$) = $92\\text{ g}$<br>
    Mass of water (solvent, $w_1$) = $1\\text{ kg} = 1000\\text{ g}$<br>
    Atomic mass of sodium ($\\text{Na}$) = $23\\text{ g mol}^{-1}$<br><br>
    <b>2. Moles of $\\text{Na}^+$ ions:</b><br>
    $$n = \\frac{w_2}{M} = \\frac{92\\text{ g}}{23\\text{ g mol}^{-1}} = 4.0\\text{ mol}$$<br><br>
    <b>3. Molality ($m$):</b><br>
    $$m = \\frac{\\text{Moles of solute}}{\\text{Mass of solvent in kg}} = \\frac{4.0\\text{ mol}}{1\\text{ kg}} = \\mathbf{4.0\\text{ m } (\\text{or } 4.0\\text{ mol kg}^{-1})}$$<br>
    <i>Note:</i> The density of lake water ($1.25\\text{ g mL}^{-1}$) is redundant for molality calculation because the mass of solvent is directly given as $1\\text{ kg}$.
  </div>`,
  '2 Marks',
  [
    ['Calculation of moles of $\\text{Na}^+ = 92/23 = 4.0\\text{ mol}$', '1 Mark'],
    ['Molality definition and final value $m = 4.0\\text{ m}$', '1 Mark']
  ]
));

// Exercise 1.27
questions.push(createQCard(
  'c12c-ch1-q39', 'Question 1.27', 'NCERT Exercise',
  'If the solubility product of $\\text{CuS}$ is $6 \\times 10^{-16}$, calculate the maximum molarity of $\\text{CuS}$ in aqueous solution.',
  `<div class="step">
    <b>1. Dissociation equilibrium of CuS:</b><br>
    $$\\text{CuS}(s) \\rightleftharpoons \\text{Cu}^{2+}(aq) + \\text{S}^{2-}(aq)$$<br>
    If $S$ is the solubility (maximum molarity) of $\\text{CuS}$ in $\\text{mol L}^{-1}$:<br>
    $[\\text{Cu}^{2+}] = S$, $\\quad [\\text{S}^{2-}] = S$<br><br>
    <b>2. Solubility Product Expression:</b><br>
    $$K_{sp} = [\\text{Cu}^{2+}][\\text{S}^{2-}] = S \\times S = S^2$$<br>
    $$S = \\sqrt{K_{sp}} = \\sqrt{6 \\times 10^{-16}} = \\sqrt{6} \\times 10^{-8} = \\mathbf{2.45 \\times 10^{-8}\\text{ mol L}^{-1} (\\text{or M})}$$<br><br>
    <b>Conclusion:</b> The maximum molarity of $\\text{CuS}$ in aqueous solution is $\\mathbf{2.45 \\times 10^{-8}\\text{ M}}$.
  </div>`,
  '2 Marks',
  [
    ['Dissociation equation and $K_{sp} = S^2$ relationship', '1 Mark'],
    ['Square root calculation and final maximum molarity $= 2.45 \\times 10^{-8}\\text{ M}$', '1 Mark']
  ]
));

// Exercise 1.28
questions.push(createQCard(
  'c12c-ch1-q40', 'Question 1.28', 'NCERT Exercise',
  'Calculate the mass percentage of aspirin ($\\text{C}_9\\text{H}_8\\text{O}_4$) in acetonitrile ($\\text{CH}_3\\text{CN}$) when $6.5\\text{ g}$ of $\\text{C}_9\\text{H}_8\\text{O}_4$ is dissolved in $450\\text{ g}$ of $\\text{CH}_3\\text{CN}$.',
  `<div class="step">
    <b>1. Given:</b><br>
    Mass of aspirin (solute, $w_2$) = $6.5\\text{ g}$<br>
    Mass of acetonitrile (solvent, $w_1$) = $450\\text{ g}$<br><br>
    <b>2. Total mass of solution:</b><br>
    $$\\text{Total mass} = 6.5\\text{ g} + 450\\text{ g} = 456.5\\text{ g}$$<br><br>
    <b>3. Mass percentage:</b><br>
    $$\\text{Mass } \\% \\text{ of aspirin} = \\frac{\\text{Mass of aspirin}}{\\text{Total mass of solution}} \\times 100 = \\frac{6.5}{456.5} \\times 100 = \\mathbf{1.424\\% \\approx 1.42\\%}$$
  </div>`,
  '2 Marks',
  [
    ['Total solution mass calculation ($456.5\\text{ g}$)', '0.75 Mark'],
    ['Mass percentage formula and final answer $= 1.424\\%$', '1.25 Marks']
  ]
));

// Exercise 1.29
questions.push(createQCard(
  'c12c-ch1-q41', 'Question 1.29', 'NCERT Exercise',
  'Nalorphene ($\\text{C}_{19}\\text{H}_{21}\\text{NO}_3$), similar to morphine, is used to combat withdrawal symptoms in narcotic users. Dose of nalorphene generally given is $1.5\\text{ mg}$. Calculate the mass of $1.5 \\times 10^{-3}\\text{ m}$ aqueous solution required for the above dose.',
  `<div class="step">
    <b>1. Molar mass of Nalorphene ($\\text{C}_{19}\\text{H}_{21}\\text{NO}_3$):</b><br>
    $$M_2 = 19(12) + 21(1) + 14 + 3(16) = 228 + 21 + 14 + 48 = 311\\text{ g mol}^{-1}$$<br><br>
    <b>2. Mass of solute in $1.5 \\times 10^{-3}\\text{ m}$ solution:</b><br>
    $1.5 \\times 10^{-3}\\text{ m}$ means $1.5 \\times 10^{-3}\\text{ mol}$ of nalorphene in $1000\\text{ g}$ of water.<br>
    $$\\text{Mass of nalorphene} = 1.5 \\times 10^{-3}\\text{ mol} \\times 311\\text{ g mol}^{-1} = 0.4665\\text{ g}$$<br>
    $$\\text{Total mass of solution} = 1000 + 0.4665 = 1000.4665\\text{ g}$$<br><br>
    <b>3. Mass of solution required for $1.5\\text{ mg}$ ($1.5 \\times 10^{-3}\\text{ g}$) dose:</b><br>
    $$0.4665\\text{ g of nalorphene is present in } 1000.4665\\text{ g solution}$$<br>
    $$\\text{Mass of solution} = \\frac{1000.4665\\text{ g}}{0.4665\\text{ g}} \\times 1.5 \\times 10^{-3}\\text{ g} = 2144.62 \\times 1.5 \\times 10^{-3} = \\mathbf{3.217\\text{ g } (\\approx 3.22\\text{ g})}$$
  </div>`,
  '3 Marks',
  [
    ['Molar mass of nalorphene $= 311\\text{ g/mol}$', '1 Mark'],
    ['Mass of solute in 1 kg solvent $= 0.4665\\text{ g}$', '1 Mark'],
    ['Unitary method to find solution mass for $1.5\\text{ mg} = 3.22\\text{ g}$', '1 Mark']
  ]
));

// Exercise 1.30
questions.push(createQCard(
  'c12c-ch1-q42', 'Question 1.30', 'NCERT Exercise',
  'Calculate the amount of benzoic acid ($\\text{C}_6\\text{H}_5\\text{COOH}$) required for preparing $250\\text{ mL}$ of $0.15\\text{ M}$ solution in methanol.',
  `<div class="step">
    <b>1. Given:</b><br>
    Volume $V = 250\\text{ mL} = 0.250\\text{ L}$<br>
    Molarity $M = 0.15\\text{ M} = 0.15\\text{ mol L}^{-1}$<br>
    Molar mass of benzoic acid ($\\text{C}_6\\text{H}_5\\text{COOH}$, $M_2$):<br>
    $$M_2 = 7(12) + 6(1) + 2(16) = 84 + 6 + 32 = 122\\text{ g mol}^{-1}$$<br><br>
    <b>2. Formula:</b><br>
    $$\\text{Molarity } M = \\frac{w_2}{M_2 \\times V\\text{ (in L)}} \\implies w_2 = M \\times M_2 \\times V$$<br>
    $$w_2 = 0.15\\text{ mol L}^{-1} \\times 122\\text{ g mol}^{-1} \\times 0.250\\text{ L} = \\mathbf{4.575\\text{ g}}$$
  </div>`,
  '2 Marks',
  [
    ['Calculation of molar mass of benzoic acid $= 122\\text{ g/mol}$', '0.75 Mark'],
    ['Application of $w_2 = M \\cdot M_2 \\cdot V$ and final mass $= 4.575\\text{ g}$', '1.25 Marks']
  ]
));

// Exercise 1.31
questions.push(createQCard(
  'c12c-ch1-q43', 'Question 1.31', 'NCERT Exercise',
  'The depression in freezing point of water observed for the same amount of acetic acid, trichloroacetic acid and trifluoroacetic acid increases in the order given above. Explain briefly.',
  `<div class="step">
    <b>Reason:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Colligative nature:</strong> Depression in freezing point is a colligative property that depends directly on the number of solute particles in solution: $\\Delta T_f = i \\cdot K_f \\cdot m$.</li>
      <li><strong>Acid strength and $-I$ effect:</strong>
        <br>• Fluorine is more electronegative than chlorine. Hence, the electron-withdrawing inductive effect ($-I$ effect) is in the order:
        $$\\text{F}_3\\text{C}- > \\text{Cl}_3\\text{C}- > \\text{H}_3\\text{C}-$$
        • Stronger $-I$ effect stabilizes the conjugate carboxylate anion, increasing the degree of dissociation ($\\alpha$).</li>
      <li><strong>van 't Hoff factor ($i$):</strong>
        <br>Higher degree of dissociation results in a greater number of ions in solution ($i = 1 + \\alpha$), which directly increases the value of $i$:
        $$i(\\text{CH}_3\\text{COOH}) < i(\\text{CCl}_3\\text{COOH}) < i(\\text{CF}_3\\text{COOH})$$</li>
      <li><strong>Conclusion:</strong> For the same molar concentration, the depression in freezing point follows:
      $$\\mathbf{\\text{CH}_3\\text{COOH} < \\text{CCl}_3\\text{COOH} < \\text{CF}_3\\text{COOH}}$$</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Explanation of $-I$ effect: $\\text{F} > \\text{Cl} > \\text{H}$', '1 Mark'],
    ['Relation of acid strength $\\rightarrow$ degree of dissociation ($\\alpha$) $\\rightarrow$ $i$ $\\rightarrow$ $\\Delta T_f$', '1 Mark']
  ]
));

// Exercise 1.32
questions.push(createQCard(
  'c12c-ch1-q44', 'Question 1.32', 'NCERT Exercise',
  'Calculate the depression in the freezing point of water when $10\\text{ g}$ of $\\text{CH}_3\\text{CH}_2\\text{CHClCOOH}$ is added to $250\\text{ g}$ of water. $K_a = 1.4 \\times 10^{-3}$, $K_f = 1.86\\text{ K kg mol}^{-1}$.',
  `<div class="step">
    <b>1. Molar mass of $\\text{CH}_3\\text{CH}_2\\text{CHClCOOH}$ ($M_2$):</b><br>
    $$\\text{C}_4\\text{H}_7\\text{ClO}_2 = 4(12) + 7(1) + 35.5 + 2(16) = 48 + 7 + 35.5 + 32 = 122.5\\text{ g mol}^{-1}$$<br>
    $$\\text{Moles of acid } n = \\frac{10\\text{ g}}{122.5\\text{ g mol}^{-1}} = 0.0816\\text{ mol}$$<br><br>
    <b>2. Molality ($m$):</b><br>
    $$m = \\frac{0.0816\\text{ mol}}{0.250\\text{ kg}} = 0.3264\\text{ mol kg}^{-1} \\approx 0.3264\\text{ m}$$<br><br>
    <b>3. Degree of dissociation ($\\alpha$) from $K_a$:</b><br>
    For weak acid: $K_a = C\\alpha^2 \\implies \\alpha = \\sqrt{\\frac{K_a}{C}} = \\sqrt{\\frac{1.4 \\times 10^{-3}}{0.3264}} = \\sqrt{4.289 \\times 10^{-3}} = 0.0655$<br><br>
    <b>4. van 't Hoff factor ($i$):</b><br>
    $$\\text{CH}_3\\text{CH}_2\\text{CHClCOOH} \\rightleftharpoons \\text{CH}_3\\text{CH}_2\\text{CHClCOO}^- + \\text{H}^+$$<br>
    $$i = 1 + \\alpha = 1 + 0.0655 = 1.0655$$<br><br>
    <b>5. Depression in Freezing Point:</b><br>
    $$\\Delta T_f = i \\cdot K_f \\cdot m = 1.0655 \\times 1.86\\text{ K kg mol}^{-1} \\times 0.3264\\text{ mol kg}^{-1} = \\mathbf{0.647\\text{ K } (\\approx 0.65^\\circ\\text{C})}$$
  </div>`,
  '4 Marks',
  [
    ['Calculation of molar mass and molality $m = 0.3264\\text{ m}$', '1 Mark'],
    ['Degree of dissociation $\\alpha = 0.0655$', '1 Mark'],
    ['van \'t Hoff factor $i = 1.0655$', '1 Mark'],
    ['Final depression in freezing point $\\Delta T_f = 0.65\\text{ K}$', '1 Mark']
  ]
));

// Exercise 1.33
questions.push(createQCard(
  'c12c-ch1-q45', 'Question 1.33', 'NCERT Exercise',
  '$19.5\\text{ g}$ of $\\text{CH}_2\\text{FCOOH}$ is dissolved in $500\\text{ g}$ of water. The depression in the freezing point of water observed is $1.0^\\circ\\text{C}$. Calculate the van ’t Hoff factor and dissociation constant of fluoroacetic acid.',
  `<div class="step">
    <b>1. Molar mass of fluoroacetic acid ($\\text{CH}_2\\text{FCOOH}$):</b><br>
    $$M_2 = 2(12) + 3(1) + 19 + 2(16) = 24 + 3 + 19 + 32 = 78\\text{ g mol}^{-1}$$<br>
    $$\\text{Moles of acid } n = \\frac{19.5\\text{ g}}{78\\text{ g mol}^{-1}} = 0.25\\text{ mol}$$<br><br>
    <b>2. Molality ($m$):</b><br>
    $$m = \\frac{0.25\\text{ mol}}{0.500\\text{ kg}} = 0.50\\text{ m}$$<br><br>
    <b>3. Theoretical (calculated) depression ($\\Delta T_{f,\\text{cal}}$):</b><br>
    $$\\Delta T_{f,\\text{cal}} = K_f \\cdot m = 1.86 \\times 0.50 = 0.93\\text{ K}$$<br><br>
    <b>4. van 't Hoff factor ($i$):</b><br>
    $$i = \\frac{\\Delta T_{f,\\text{obs}}}{\\Delta T_{f,\\text{cal}}} = \\frac{1.0\\text{ K}}{0.93\\text{ K}} = \\mathbf{1.0753 \\approx 1.075}$$<br><br>
    <b>5. Dissociation constant ($K_a$):</b><br>
    $$\\text{CH}_2\\text{FCOOH} \\rightleftharpoons \\text{CH}_2\\text{FCOO}^- + \\text{H}^+$$<br>
    $$i = 1 + \\alpha \\implies \\alpha = i - 1 = 1.0753 - 1 = 0.0753$$<br>
    $$K_a = \\frac{C\\alpha^2}{1 - \\alpha} = \\frac{0.50 \\times (0.0753)^2}{1 - 0.0753} = \\frac{0.50 \\times 0.00567}{0.9247} = \\mathbf{3.066 \\times 10^{-3} \\approx 3.07 \\times 10^{-3}}$$
  </div>`,
  '4 Marks',
  [
    ['Calculation of molality $m = 0.50\\text{ m}$ and theoretical $\\Delta T_f = 0.93\\text{ K}$', '1 Mark'],
    ['van \'t Hoff factor $i = 1.075$', '1.5 Marks'],
    ['Degree of dissociation $\\alpha = 0.0753$ and $K_a = 3.07 \\times 10^{-3}$', '1.5 Marks']
  ]
));

// Exercise 1.34
questions.push(createQCard(
  'c12c-ch1-q46', 'Question 1.34', 'NCERT Exercise',
  'Vapour pressure of water at $293\\text{ K}$ is $17.535\\text{ mm Hg}$. Calculate the vapour pressure of water at $293\\text{ K}$ when $25\\text{ g}$ of glucose is dissolved in $450\\text{ g}$ of water.',
  `<div class="step">
    <b>1. Given:</b><br>
    $p_1^0 = 17.535\\text{ mm Hg}$<br>
    Mass of glucose ($w_2$) = $25\\text{ g}$, Molar mass ($M_2$) = $180\\text{ g mol}^{-1}$<br>
    Mass of water ($w_1$) = $450\\text{ g}$, Molar mass ($M_1$) = $18\\text{ g mol}^{-1}$<br><br>
    <b>2. Moles:</b><br>
    $$n_2 = \\frac{25}{180} = 0.1389\\text{ mol}$$<br>
    $$n_1 = \\frac{450}{18} = 25.0\\text{ mol}$$<br><br>
    <b>3. Relative lowering of vapour pressure:</b><br>
    $$\\frac{p_1^0 - p_1}{p_1^0} = \\frac{n_2}{n_1 + n_2} = \\frac{0.1389}{25 + 0.1389} = \\frac{0.1389}{25.1389} = 0.005525$$<br><br>
    <b>4. Vapour pressure of solution ($p_1$):</b><br>
    $$p_1 = p_1^0 (1 - 0.005525) = 17.535 \\times 0.994475 = \\mathbf{17.438\\text{ mm Hg } (\\approx 17.44\\text{ mm Hg})}$$
  </div>`,
  '2 Marks',
  [
    ['Calculation of moles of solute and solvent', '0.75 Mark'],
    ['Relative lowering calculation and final vapour pressure $p_1 = 17.44\\text{ mm Hg}$', '1.25 Marks']
  ]
));

// Exercise 1.35
questions.push(createQCard(
  'c12c-ch1-q47', 'Question 1.35', 'NCERT Exercise',
  'Henry’s law constant for the molality of methane in benzene at $298\\text{ K}$ is $4.27 \\times 10^5\\text{ mm Hg}$. Calculate the solubility of methane in benzene at $298\\text{ K}$ under $760\\text{ mm Hg}$.',
  `<div class="step">
    <b>1. Given:</b><br>
    $p = 760\\text{ mm Hg}$<br>
    $K_H = 4.27 \\times 10^5\\text{ mm Hg}$<br><br>
    <b>2. Henry’s Law formula:</b><br>
    $$p = K_H \\cdot x \\implies x = \\frac{p}{K_H}$$<br>
    $$x = \\frac{760\\text{ mm Hg}}{4.27 \\times 10^5\\text{ mm Hg}} = \\mathbf{1.78 \\times 10^{-3}}$$<br><br>
    <b>Conclusion:</b> The solubility (mole fraction) of methane in benzene is $\\mathbf{1.78 \\times 10^{-3}}$.
  </div>`,
  '2 Marks',
  [
    ['Henry\'s law formula $x = p/K_H$', '1 Mark'],
    ['Calculation of mole fraction $x = 1.78 \\times 10^{-3}$', '1 Mark']
  ]
));

// Exercise 1.36
questions.push(createQCard(
  'c12c-ch1-q48', 'Question 1.36', 'NCERT Exercise',
  '$100\\text{ g}$ of liquid $\\text{A}$ (molar mass $140\\text{ g mol}^{-1}$) was dissolved in $1000\\text{ g}$ of liquid $\\text{B}$ (molar mass $180\\text{ g mol}^{-1}$). The vapour pressure of pure liquid $\\text{B}$ was found to be $500\\text{ torr}$. Calculate the vapour pressure of pure liquid $\\text{A}$ and its vapour pressure in the solution if the total vapour pressure of the solution is $475\\text{ torr}$.',
  `<div class="step">
    <b>1. Moles and Mole fractions:</b><br>
    $$n_A = \\frac{100\\text{ g}}{140\\text{ g mol}^{-1}} = 0.7143\\text{ mol}$$<br>
    $$n_B = \\frac{1000\\text{ g}}{180\\text{ g mol}^{-1}} = 5.5556\\text{ mol}$$<br>
    $$\\text{Total moles} = 0.7143 + 5.5556 = 6.2699\\text{ mol}$$<br>
    $$x_A = \\frac{0.7143}{6.2699} = 0.1139, \\quad x_B = 1 - 0.1139 = 0.8861$$<br><br>
    <b>2. Vapour pressure of B in solution ($p_B$):</b><br>
    $$p_B = p_B^0 x_B = 500\\text{ torr} \\times 0.8861 = 443.05\\text{ torr}$$<br><br>
    <b>3. Vapour pressure of A in solution ($p_A$):</b><br>
    $$p_{\\text{total}} = p_A + p_B \\implies p_A = p_{\\text{total}} - p_B = 475 - 443.05 = \\mathbf{31.95\\text{ torr } (\\approx 32\\text{ torr})}$$<br><br>
    <b>4. Vapour pressure of pure liquid A ($p_A^0$):</b><br>
    $$p_A = p_A^0 x_A \\implies p_A^0 = \\frac{p_A}{x_A} = \\frac{31.95\\text{ torr}}{0.1139} = \\mathbf{280.5\\text{ torr}}$$
  </div>`,
  '3 Marks',
  [
    ['Calculation of moles and mole fractions ($x_A = 0.1139, x_B = 0.8861$)', '1 Mark'],
    ['Partial pressure of A in solution $p_A = 31.95\\text{ torr}$', '1 Mark'],
    ['Pure vapour pressure of A ($p_A^0 = 280.5\\text{ torr}$)', '1 Mark']
  ]
));

// Exercise 1.37
questions.push(createQCard(
  'c12c-ch1-q49', 'Question 1.37', 'NCERT Exercise',
  'Vapour pressures of pure acetone and chloroform at $328\\text{ K}$ are $741.8\\text{ mm Hg}$ and $632.8\\text{ mm Hg}$ respectively. Assuming that they form ideal solution over the entire range of composition, plot $p_{\\text{total}}$, $p_{\\text{chloroform}}$, and $p_{\\text{acetone}}$ as a function of $x_{\\text{acetone}}$. Explain why the experimental total vapour pressure is always less than the calculated ideal values.',
  `<div class="step">
    <b>1. Ideal vs Experimental Comparison:</b><br>
    If the mixture were ideal, the total and partial vapour pressures would follow Raoult’s law straight lines:<br>
    $$p_{\\text{total}} = p_{\\text{chloroform}}^0 + (p_{\\text{acetone}}^0 - p_{\\text{chloroform}}^0) x_{\\text{acetone}} = 632.8 + (741.8 - 632.8) x_{\\text{acetone}}$$
    However, the experimentally observed vapour pressures for all compositions are significantly <strong>lower</strong> than the calculated ideal values.<br><br>
    <b>2. Chemical Reason (Negative Deviation):</b><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Pure acetone molecules are held by dipole-dipole interactions, and chloroform molecules by dipole-dipole interactions.</li>
      <li>When acetone and chloroform are mixed, a strong new <strong>intermolecular hydrogen bond</strong> forms between the acidic hydrogen atom of chloroform and the basic carbonyl oxygen of acetone:
      $$\\text{Cl}_3\\text{C}-\\text{H} \\cdots :\\text{O}=\\text{C}(\\text{CH}_3)_2$$</li>
      <li>These new solute-solvent (A-B) attractive forces are considerably <strong>stronger</strong> than the original A-A and B-B forces.</li>
      <li>This reduces the escaping tendency of both components from the liquid surface, leading to negative deviation from Raoult\'s law with $\\Delta_{\\text{mix}}H < 0$ and $\\Delta_{\\text{mix}}V < 0$.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Comparison between theoretical ideal straight line and lower experimental curve', '1 Mark'],
    ['Mechanism of intermolecular H-bond formation ($\\text{Cl}_3\\text{C}-\\text{H} \\cdots \\text{O}=\\text{C}(\\text{CH}_3)_2$)', '1 Mark'],
    ['Conclusion of negative deviation with $\\Delta_{\\text{mix}}H < 0$ and $\\Delta_{\\text{mix}}V < 0$', '1 Mark']
  ]
));

// Exercise 1.38
questions.push(createQCard(
  'c12c-ch1-q50', 'Question 1.38', 'NCERT Exercise',
  'Benzene and toluene form nearly ideal solutions over the entire range of composition. The vapour pressure of pure benzene and toluene at $300\\text{ K}$ are $50.71\\text{ mm Hg}$ and $32.06\\text{ mm Hg}$ respectively. Calculate the mole fraction of benzene in vapour phase if $80\\text{ g}$ of benzene is mixed with $100\\text{ g}$ of toluene.',
  `<div class="step">
    <b>1. Moles of components:</b><br>
    Benzene ($\\text{C}_6\\text{H}_6$, $M = 78\\text{ g mol}^{-1}$): $n_B = \\frac{80\\text{ g}}{78\\text{ g mol}^{-1}} = 1.0256\\text{ mol}$<br>
    Toluene ($\\text{C}_7\\text{H}_8$, $M = 92\\text{ g mol}^{-1}$): $n_T = \\frac{100\\text{ g}}{92\\text{ g mol}^{-1}} = 1.0870\\text{ mol}$<br>
    $$\\text{Total moles} = 1.0256 + 1.0870 = 2.1126\\text{ mol}$$<br><br>
    <b>2. Mole fractions in liquid phase ($x_B$ and $x_T$):</b><br>
    $$x_B = \\frac{1.0256}{2.1126} = 0.4855$$<br>
    $$x_T = 1 - 0.4855 = 0.5145$$<br><br>
    <b>3. Partial vapour pressures:</b><br>
    $$p_B = p_B^0 x_B = 50.71\\text{ mm Hg} \\times 0.4855 = 24.62\\text{ mm Hg}$$<br>
    $$p_T = p_T^0 x_T = 32.06\\text{ mm Hg} \\times 0.5145 = 16.49\\text{ mm Hg}$$<br>
    $$p_{\\text{total}} = p_B + p_T = 24.62 + 16.49 = 41.11\\text{ mm Hg}$$<br><br>
    <b>4. Mole fraction of benzene in vapour phase ($y_B$):</b><br>
    $$y_B = \\frac{p_B}{p_{\\text{total}}} = \\frac{24.62}{41.11} = \\mathbf{0.5989 \\approx 0.60}$$
  </div>`,
  '3 Marks',
  [
    ['Calculation of moles and liquid mole fractions ($x_B = 0.4855$)', '1 Mark'],
    ['Partial pressures and total pressure ($p_{\\text{total}} = 41.11\\text{ mm Hg}$)', '1 Mark'],
    ['Vapour phase mole fraction $y_B = 0.60$', '1 Mark']
  ]
));

// Exercise 1.39
questions.push(createQCard(
  'c12c-ch1-q51', 'Question 1.39', 'NCERT Exercise',
  'The air is a mixture of a number of gases. The major components are oxygen and nitrogen with approximate proportion of $20\\%$ is to $79\\%$ by volume at $298\\text{ K}$. The water is in equilibrium with air at a pressure of $10\\text{ atm}$. At $298\\text{ K}$ if the Henry’s law constants for oxygen and nitrogen are $3.30 \\times 10^7\\text{ mm}$ and $6.51 \\times 10^7\\text{ mm}$ respectively, calculate the composition of these gases in water.',
  `<div class="step">
    <b>1. Partial pressures of $\\text{O}_2$ and $\\text{N}_2$ in air:</b><br>
    Total pressure = $10\\text{ atm} = 10 \\times 760\\text{ mm Hg} = 7600\\text{ mm Hg}$.<br>
    $$p_{\\text{O}_2} = \\frac{20}{100} \\times 7600 = 1520\\text{ mm Hg}$$<br>
    $$p_{\\text{N}_2} = \\frac{79}{100} \\times 7600 = 6004\\text{ mm Hg}$$<br><br>
    <b>2. Mole fraction in water using Henry’s Law ($x = p/K_H$):</b><br>
    $$x_{\\text{O}_2} = \\frac{p_{\\text{O}_2}}{K_H(\\text{O}_2)} = \\frac{1520\\text{ mm Hg}}{3.30 \\times 10^7\\text{ mm Hg}} = \\mathbf{4.606 \\times 10^{-5}}$$<br>
    $$x_{\\text{N}_2} = \\frac{p_{\\text{N}_2}}{K_H(\\text{N}_2)} = \\frac{6004\\text{ mm Hg}}{6.51 \\times 10^7\\text{ mm Hg}} = \\mathbf{9.223 \\times 10^{-5}}$$<br><br>
    <b>Conclusion:</b> In water, mole fraction of $\\text{O}_2$ is $\\mathbf{4.61 \\times 10^{-5}}$ and that of $\\text{N}_2$ is $\\mathbf{9.22 \\times 10^{-5}}$.
  </div>`,
  '3 Marks',
  [
    ['Calculation of partial pressures: $p_{\\text{O}_2} = 1520\\text{ mm}, p_{\\text{N}_2} = 6004\\text{ mm}$', '1 Mark'],
    ['Mole fraction of dissolved $\\text{O}_2 = 4.61 \\times 10^{-5}$', '1 Mark'],
    ['Mole fraction of dissolved $\\text{N}_2 = 9.22 \\times 10^{-5}$', '1 Mark']
  ]
));

// Exercise 1.40
questions.push(createQCard(
  'c12c-ch1-q52', 'Question 1.40', 'NCERT Exercise',
  'Determine the amount of $\\text{CaCl}_2$ ($i = 2.47$) dissolved in $2.5\\text{ litre}$ of water such that its osmotic pressure is $0.75\\text{ atm}$ at $27^\\circ\\text{C}$.',
  `<div class="step">
    <b>1. Given:</b><br>
    $i = 2.47$<br>
    $V = 2.5\\text{ L}$<br>
    $\\Pi = 0.75\\text{ atm}$<br>
    $T = 27^\\circ\\text{C} = 27 + 273 = 300\\text{ K}$<br>
    $R = 0.0821\\text{ L atm K}^{-1}\\text{ mol}^{-1}$<br>
    Molar mass of $\\text{CaCl}_2$ ($M_2$) = $40 + 2(35.5) = 40 + 71 = 111\\text{ g mol}^{-1}$<br><br>
    <b>2. Osmotic pressure formula with van 't Hoff factor:</b><br>
    $$\\Pi = i \\cdot \\frac{w_2}{M_2 \\cdot V} \\cdot R T \\implies w_2 = \\frac{\\Pi \\times M_2 \\times V}{i \\times R \\times T}$$<br>
    $$w_2 = \\frac{0.75 \\times 111 \\times 2.5}{2.47 \\times 0.0821 \\times 300}$$<br>
    $$w_2 = \\frac{208.125}{60.836} = \\mathbf{3.421\\text{ g } (\\approx 3.42\\text{ g})}$$
  </div>`,
  '2 Marks',
  [
    ['Molar mass of $\\text{CaCl}_2 = 111\\text{ g/mol}$ and formula with $i$', '0.75 Mark'],
    ['Substitution and final mass calculation $w_2 = 3.42\\text{ g}$', '1.25 Marks']
  ]
));

// Exercise 1.41
questions.push(createQCard(
  'c12c-ch1-q53', 'Question 1.41', 'NCERT Exercise',
  'Determine the osmotic pressure of a solution prepared by dissolving $25\\text{ mg}$ of $\\text{K}_2\\text{SO}_4$ in $2\\text{ litre}$ of water at $25^\\circ\\text{C}$, assuming that it is completely dissociated.',
  `<div class="step">
    <b>1. Given:</b><br>
    Mass of $\\text{K}_2\\text{SO}_4$ ($w_2$) = $25\\text{ mg} = 25 \\times 10^{-3}\\text{ g} = 0.025\\text{ g}$<br>
    Volume $V = 2\\text{ L}$<br>
    $T = 25^\\circ\\text{C} = 25 + 273.15 = 298.15\\text{ K}$<br>
    $R = 0.0821\\text{ L atm K}^{-1}\\text{ mol}^{-1}$ (or $8.314\\text{ kPa L K}^{-1}\\text{ mol}^{-1}$)<br>
    Molar mass of $\\text{K}_2\\text{SO}_4$ ($M_2$) = $2(39) + 32 + 4(16) = 78 + 32 + 64 = 174\\text{ g mol}^{-1}$<br><br>
    <b>2. van 't Hoff factor ($i$) for complete dissociation:</b><br>
    $$\\text{K}_2\\text{SO}_4 \\rightarrow 2\\text{K}^+ + \\text{SO}_4^{2-}$$<br>
    Number of ions produced per formula unit ($n$) = $2 + 1 = 3$.<br>
    Since complete dissociation ($\\alpha = 1$): $i = 3$.<br><br>
    <b>3. Osmotic pressure calculation:</b><br>
    $$\\Pi = i \\cdot \\frac{w_2 R T}{M_2 V}$$<br>
    $$\\Pi = 3 \\times \\frac{0.025\\text{ g} \\times 0.0821\\text{ L atm K}^{-1}\\text{ mol}^{-1} \\times 298.15\\text{ K}}{174\\text{ g mol}^{-1} \\times 2\\text{ L}}$<br>
    $$\\Pi = \\frac{1.8358}{348} = \\mathbf{5.275 \\times 10^{-3}\\text{ atm}}$$<br>
    <i>In Pascals ($1\\text{ atm} = 101325\\text{ Pa}$):</i><br>
    $$\\Pi = 5.275 \\times 10^{-3} \\times 101325 = \\mathbf{534.5\\text{ Pa } (\\approx 5.35 \\times 10^{-3}\\text{ bar})}$$
  </div>`,
  '2 Marks',
  [
    ['Dissociation equation and determination of $i = 3$', '0.75 Mark'],
    ['Osmotic pressure calculation $\\Pi = 5.275 \\times 10^{-3}\\text{ atm}$ or $534.5\\text{ Pa}$', '1.25 Marks']
  ]
));

console.log(`Generated Exercises 1.21 to 1.41 (${questions.length} Qs)`);

module.exports = { questions };
