// scripts/builders/gen-c12c-ch1-part2.js
// Class 12 Chemistry Chapter 1: Solutions (NCERT Exercises 1.1 to 1.20)
const { createQCard } = require('./c12c-helper');

const questions = [];

// Exercise 1.1
questions.push(createQCard(
  'c12c-ch1-q13', 'Question 1.1', 'NCERT Exercise',
  'Define the term solution. How many types of solutions are formed? Write briefly about each type with an example.',
  `<div class="step">
    <b>1. Definition of Solution:</b><br>
    A <strong>solution</strong> is a homogeneous mixture of two or more chemically non-reacting substances whose composition can be varied within certain limits. In a binary solution, the component present in larger quantity is called the <strong>solvent</strong> and the component present in smaller quantity is called the <strong>solute</strong>.<br><br>
    <b>2. Nine Types of Solutions:</b><br>
    Based on the physical state of solute and solvent, solutions are classified into 9 types:<br>
    <table style="width:100%; border-collapse:collapse; margin-top:10px; font-size:0.88rem;">
      <tr style="background:#f1f5f9; text-align:left;">
        <th style="padding:8px; border:1px solid #cbd5e1;">Type</th>
        <th style="padding:8px; border:1px solid #cbd5e1;">Solute</th>
        <th style="padding:8px; border:1px solid #cbd5e1;">Solvent</th>
        <th style="padding:8px; border:1px solid #cbd5e1;">Common Example</th>
      </tr>
      <tr><td style="padding:6px; border:1px solid #cbd5e1;" rowspan="3"><b>Gaseous Solutions</b></td><td style="padding:6px; border:1px solid #cbd5e1;">Gas</td><td style="padding:6px; border:1px solid #cbd5e1;">Gas</td><td style="padding:6px; border:1px solid #cbd5e1;">Mixture of $\\text{O}_2$ and $\\text{N}_2$ gases (Air)</td></tr>
      <tr><td style="padding:6px; border:1px solid #cbd5e1;">Liquid</td><td style="padding:6px; border:1px solid #cbd5e1;">Gas</td><td style="padding:6px; border:1px solid #cbd5e1;">Chloroform mixed with nitrogen gas, humidity</td></tr>
      <tr><td style="padding:6px; border:1px solid #cbd5e1;">Solid</td><td style="padding:6px; border:1px solid #cbd5e1;">Gas</td><td style="padding:6px; border:1px solid #cbd5e1;">Camphor in nitrogen gas, iodine vapors in air</td></tr>
      <tr style="background:#f8fafc;"><td style="padding:6px; border:1px solid #cbd5e1;" rowspan="3"><b>Liquid Solutions</b></td><td style="padding:6px; border:1px solid #cbd5e1;">Gas</td><td style="padding:6px; border:1px solid #cbd5e1;">Liquid</td><td style="padding:6px; border:1px solid #cbd5e1;">Oxygen dissolved in water, Soda water ($\\text{CO}_2$ in water)</td></tr>
      <tr style="background:#f8fafc;"><td style="padding:6px; border:1px solid #cbd5e1;">Liquid</td><td style="padding:6px; border:1px solid #cbd5e1;">Liquid</td><td style="padding:6px; border:1px solid #cbd5e1;">Ethanol dissolved in water</td></tr>
      <tr style="background:#f8fafc;"><td style="padding:6px; border:1px solid #cbd5e1;">Solid</td><td style="padding:6px; border:1px solid #cbd5e1;">Liquid</td><td style="padding:6px; border:1px solid #cbd5e1;">Glucose or sodium chloride dissolved in water</td></tr>
      <tr><td style="padding:6px; border:1px solid #cbd5e1;" rowspan="3"><b>Solid Solutions</b></td><td style="padding:6px; border:1px solid #cbd5e1;">Gas</td><td style="padding:6px; border:1px solid #cbd5e1;">Solid</td><td style="padding:6px; border:1px solid #cbd5e1;">Solution of hydrogen in palladium</td></tr>
      <tr><td style="padding:6px; border:1px solid #cbd5e1;">Liquid</td><td style="padding:6px; border:1px solid #cbd5e1;">Solid</td><td style="padding:6px; border:1px solid #cbd5e1;">Amalgam of mercury with sodium</td></tr>
      <tr><td style="padding:6px; border:1px solid #cbd5e1;">Solid</td><td style="padding:6px; border:1px solid #cbd5e1;">Solid</td><td style="padding:6px; border:1px solid #cbd5e1;">Copper dissolved in gold (Alloy / Brass)</td></tr>
    </table>
  </div>`,
  '3 Marks',
  [
    ['Definition of solution and components (solute & solvent)', '1 Mark'],
    ['Classification into gaseous, liquid, and solid solutions (9 sub-types)', '1 Mark'],
    ['Accurate real-world examples for each type', '1 Mark']
  ]
));

// Exercise 1.2
questions.push(createQCard(
  'c12c-ch1-q14', 'Question 1.2', 'NCERT Exercise',
  'Give an example of a solid solution in which the solute is a gas.',
  `<div class="step">
    <b>Example:</b><br>
    <strong>Solution of hydrogen gas in palladium metal [$\\text{H}_2\\text{ in Pd}$].</strong><br><br>
    <b>Explanation:</b><br>
    Palladium acts as the solid solvent that adsorbs and occludes gaseous hydrogen (solute) into the interstitial spaces of its crystal lattice, forming an interstitial solid solution.
  </div>`,
  '1 Mark',
  [
    ['Hydrogen gas in palladium metal with solvent-solute identification', '1 Mark']
  ]
));

// Exercise 1.3
questions.push(createQCard(
  'c12c-ch1-q15', 'Question 1.3', 'NCERT Exercise',
  'Define the following terms:<br>(i) Mole fraction<br>(ii) Molality<br>(iii) Molarity<br>(iv) Mass percentage',
  `<div class="step">
    <b>(i) Mole fraction ($x$):</b><br>
    It is the ratio of the number of moles of one component to the total number of moles of all the components present in the solution. For a binary solution of components A and B:<br>
    $$x_A = \\frac{n_A}{n_A + n_B}, \\quad x_A + x_B = 1$$<br>
    It is dimensionless and independent of temperature.<br><br>

    <b>(ii) Molality ($m$):</b><br>
    It is defined as the number of moles of the solute dissolved per kilogram ($1000\\text{ g}$) of the solvent.<br>
    $$m = \\frac{\\text{Moles of solute}}{\\text{Mass of solvent in kg}} = \\frac{w_2 \\times 1000}{M_2 \\times w_1\\text{ (in g)}}$$<br>
    Unit: $\\text{mol kg}^{-1}$ or $\\text{m}$. It is independent of temperature.<br><br>

    <b>(iii) Molarity ($M$):</b><br>
    It is defined as the number of moles of the solute dissolved per litre ($1000\\text{ mL}$) of the solution.<br>
    $$M = \\frac{\\text{Moles of solute}}{\\text{Volume of solution in litres}} = \\frac{w_2 \\times 1000}{M_2 \\times V\\text{ (in mL)}}$$<br>
    Unit: $\\text{mol L}^{-1}$ or $\\text{M}$. It depends on temperature because volume varies with temperature.<br><br>

    <b>(iv) Mass percentage (w/w):</b><br>
    It is the mass of the solute present in $100\\text{ g}$ of the solution.<br>
    $$\\text{Mass } \\% \\text{ of component} = \\frac{\\text{Mass of component in solution}}{\\text{Total mass of solution}} \\times 100$$
  </div>`,
  '4 Marks',
  [
    ['(i) Mole fraction definition and formula', '1 Mark'],
    ['(ii) Molality definition, formula, and temperature independence', '1 Mark'],
    ['(iii) Molarity definition, formula, and temperature dependence', '1 Mark'],
    ['(iv) Mass percentage definition and mathematical expression', '1 Mark']
  ]
));

// Exercise 1.4
questions.push(createQCard(
  'c12c-ch1-q16', 'Question 1.4', 'NCERT Exercise',
  'Concentrated nitric acid used in laboratory work is $68\\%$ nitric acid by mass in aqueous solution. What should be the molarity of such a sample of the acid if the density of the solution is $1.504\\text{ g mL}^{-1}$?',
  `<div class="step">
    <b>1. Interpretation of 68% by mass:</b><br>
    $100\\text{ g}$ of aqueous solution contains $68\\text{ g}$ of nitric acid ($\\text{HNO}_3$).<br><br>
    <b>2. Molar mass of $\\text{HNO}_3$:</b><br>
    $$M = 1 + 14 + 3(16) = 1 + 14 + 48 = 63\\text{ g mol}^{-1}$$<br>
    $$\\text{Moles of } \\text{HNO}_3 \\, (n) = \\frac{68\\text{ g}}{63\\text{ g mol}^{-1}} = 1.0794\\text{ mol}$$<br><br>
    <b>3. Volume of $100\\text{ g}$ solution:</b><br>
    $$V = \\frac{\\text{Mass}}{\\text{Density}} = \\frac{100\\text{ g}}{1.504\\text{ g mL}^{-1}} = 66.489\\text{ mL} = 0.06649\\text{ L}$$<br><br>
    <b>4. Molarity ($M$):</b><br>
    $$M = \\frac{\\text{Moles of solute}}{\\text{Volume in L}} = \\frac{1.0794\\text{ mol}}{0.06649\\text{ L}} = \\mathbf{16.23\\text{ M } (\\approx 16.24\\text{ mol L}^{-1})}$$<br>
    <i>Direct shortcut formula check:</i><br>
    $$M = \\frac{10 \\times (\\text{mass } \\%) \\times d}{M_2} = \\frac{10 \\times 68 \\times 1.504}{63} = \\frac{1022.72}{63} = \\mathbf{16.23\\text{ M}}$$
  </div>`,
  '2 Marks',
  [
    ['Calculation of moles of $\\text{HNO}_3$ ($1.0794\\text{ mol}$)', '0.5 Mark'],
    ['Volume of solution from density ($0.06649\\text{ L}$)', '0.5 Mark'],
    ['Final molarity calculation with unit $= 16.23\\text{ M}$', '1 Mark']
  ]
));

// Exercise 1.5
questions.push(createQCard(
  'c12c-ch1-q17', 'Question 1.5', 'NCERT Exercise',
  'A solution of glucose in water is labelled as $10\\%\\text{ w/w}$, what would be the molality and mole fraction of each component in the solution? If the density of solution is $1.2\\text{ g mL}^{-1}$, then what shall be the molarity of the solution?',
  `<div class="step">
    <b>1. Basis of calculation:</b><br>
    In $100\\text{ g}$ of solution:<br>
    Mass of glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$, $w_2$) = $10\\text{ g}$<br>
    Mass of water ($w_1$) = $100 - 10 = 90\\text{ g} = 0.090\\text{ kg}$<br>
    Molar mass of glucose ($M_2$) = $6(12) + 12(1) + 6(16) = 180\\text{ g mol}^{-1}$<br>
    $$\\text{Moles of glucose } (n_2) = \\frac{10}{180} = 0.0556\\text{ mol}$$<br>
    $$\\text{Moles of water } (n_1) = \\frac{90}{18} = 5.0\\text{ mol}$$<br><br>

    <b>2. Molality ($m$):</b><br>
    $$m = \\frac{n_2}{\\text{Mass of solvent in kg}} = \\frac{0.0556\\text{ mol}}{0.090\\text{ kg}} = \\mathbf{0.617\\text{ m } (\\approx 0.62\\text{ mol kg}^{-1})}$$<br><br>

    <b>3. Mole fractions:</b><br>
    $$x_{\\text{glucose}} = \\frac{n_2}{n_1 + n_2} = \\frac{0.0556}{5.0 + 0.0556} = \\frac{0.0556}{5.0556} = \\mathbf{0.01099 \\approx 0.011}$$<br>
    $$x_{\\text{water}} = 1 - 0.011 = \\mathbf{0.989}$$<br><br>

    <b>4. Molarity ($M$):</b><br>
    $$V = \\frac{\\text{Mass}}{\\text{Density}} = \\frac{100\\text{ g}}{1.2\\text{ g mL}^{-1}} = 83.33\\text{ mL} = 0.08333\\text{ L}$$<br>
    $$M = \\frac{n_2}{V} = \\frac{0.0556\\text{ mol}}{0.08333\\text{ L}} = \\mathbf{0.667\\text{ M } (\\approx 0.67\\text{ mol L}^{-1})}$$
  </div>`,
  '3 Marks',
  [
    ['Calculation of molality $m = 0.617\\text{ m}$', '1 Mark'],
    ['Mole fractions: $x_{\\text{glucose}} = 0.011$ and $x_{\\text{water}} = 0.989$', '1 Mark'],
    ['Volume from density and Molarity $M = 0.67\\text{ M}$', '1 Mark']
  ]
));

// Exercise 1.6
questions.push(createQCard(
  'c12c-ch1-q18', 'Question 1.6', 'NCERT Exercise',
  'How many $\\text{mL}$ of $0.1\\text{ M } \\text{HCl}$ are required to react completely with $1\\text{ g}$ mixture of $\\text{Na}_2\\text{CO}_3$ and $\\text{NaHCO}_3$ containing equimolar amounts of both?',
  `<div class="step">
    <b>1. Equimolar condition:</b><br>
    Let moles of $\\text{Na}_2\\text{CO}_3$ = moles of $\\text{NaHCO}_3$ = $x$.<br>
    Molar mass of $\\text{Na}_2\\text{CO}_3$ = $2(23) + 12 + 48 = 106\\text{ g mol}^{-1}$<br>
    Molar mass of $\\text{NaHCO}_3$ = $23 + 1 + 12 + 48 = 84\\text{ g mol}^{-1}$<br><br>
    <b>2. Total mass equation:</b><br>
    $$\\text{Mass of } \\text{Na}_2\\text{CO}_3 + \\text{Mass of } \\text{NaHCO}_3 = 1\\text{ g}$$<br>
    $$106x + 84x = 1 \\implies 190x = 1 \\implies x = \\frac{1}{190} = 5.263 \\times 10^{-3}\\text{ mol}$$<br><br>
    <b>3. Stoichiometry of reaction with HCl:</b><br>
    $$\\text{Na}_2\\text{CO}_3 + 2\\text{HCl} \\rightarrow 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2$$<br>
    $$\\text{NaHCO}_3 + \\text{HCl} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2$$<br>
    Total moles of $\\text{HCl}$ required = $2x + x = 3x$<br>
    $$\\text{Moles of HCl} = 3 \\times \\left(\\frac{1}{190}\\right) = \\frac{3}{190} = 0.01579\\text{ mol}$$<br><br>
    <b>4. Volume of $0.1\\text{ M } \\text{HCl}$:</b><br>
    $$\\text{Molarity} = \\frac{\\text{Moles}}{\\text{Volume in L}} \\implies V = \\frac{\\text{Moles}}{\\text{Molarity}} = \\frac{0.01579\\text{ mol}}{0.1\\text{ mol L}^{-1}} = 0.1579\\text{ L} = \\mathbf{157.9\\text{ mL}}$$
  </div>`,
  '3 Marks',
  [
    ['Setting equimolar relation and finding $x = 1/190\\text{ mol}$', '1 Mark'],
    ['Chemical equations and total moles of $\\text{HCl} = 3x = 0.01579\\text{ mol}$', '1 Mark'],
    ['Volume calculation $V = 157.9\\text{ mL}$', '1 Mark']
  ]
));

// Exercise 1.7
questions.push(createQCard(
  'c12c-ch1-q19', 'Question 1.7', 'NCERT Exercise',
  'A solution is obtained by mixing $300\\text{ g}$ of $25\\%$ solution and $400\\text{ g}$ of $40\\%$ solution by mass. Calculate the mass percentage of the resulting solution.',
  `<div class="step">
    <b>1. Mass of solute in first solution:</b><br>
    $$\\text{Solute}_1 = 25\\% \\text{ of } 300\\text{ g} = \\frac{25}{100} \\times 300 = 75\\text{ g}$$<br>
    <b>2. Mass of solute in second solution:</b><br>
    $$\\text{Solute}_2 = 40\\% \\text{ of } 400\\text{ g} = \\frac{40}{100} \\times 400 = 160\\text{ g}$$<br>
    <b>3. Total solute and total solution mass:</b><br>
    $$\\text{Total solute} = 75\\text{ g} + 160\\text{ g} = 235\\text{ g}$$<br>
    $$\\text{Total solution} = 300\\text{ g} + 400\\text{ g} = 700\\text{ g}$$<br><br>
    <b>4. Mass percentage of the resulting solution:</b><br>
    $$\\text{Mass } \\% \\text{ of solute} = \\frac{\\text{Total mass of solute}}{\\text{Total mass of solution}} \\times 100 = \\frac{235}{700} \\times 100 = \\mathbf{33.57\\%}$$<br>
    $$\\text{Mass } \\% \\text{ of water (solvent)} = 100 - 33.57 = \\mathbf{66.43\\%}$$
  </div>`,
  '2 Marks',
  [
    ['Calculation of individual solute masses ($75\\text{ g}$ and $160\\text{ g}$)', '0.75 Mark'],
    ['Total solute ($235\\text{ g}$) and solution mass ($700\\text{ g}$)', '0.5 Mark'],
    ['Mass % of solute $= 33.57\\%$ and solvent $= 66.43\\%$', '0.75 Mark']
  ]
));

// Exercise 1.8
questions.push(createQCard(
  'c12c-ch1-q20', 'Question 1.8', 'NCERT Exercise',
  'An antifreeze solution is prepared from $222.6\\text{ g}$ of ethylene glycol ($\\text{C}_2\\text{H}_6\\text{O}_2$) and $200\\text{ g}$ of water. Calculate the molality of the solution. If the density of the solution is $1.072\\text{ g mL}^{-1}$, then what shall be the molarity of the solution?',
  `<div class="step">
    <b>1. Molar mass of ethylene glycol ($\\text{C}_2\\text{H}_6\\text{O}_2$):</b><br>
    $$M_2 = 2(12) + 6(1) + 2(16) = 24 + 6 + 32 = 62\\text{ g mol}^{-1}$$<br>
    $$\\text{Moles of solute } (n_2) = \\frac{222.6\\text{ g}}{62\\text{ g mol}^{-1}} = 3.59\\text{ mol}$$<br><br>

    <b>2. Molality ($m$):</b><br>
    $$w_1 = 200\\text{ g} = 0.200\\text{ kg}$$<br>
    $$m = \\frac{n_2}{w_1\\text{ (kg)}} = \\frac{3.59\\text{ mol}}{0.200\\text{ kg}} = \\mathbf{17.95\\text{ m } (\\approx 17.95\\text{ mol kg}^{-1})}$$<br><br>

    <b>3. Molarity ($M$):</b><br>
    $$\\text{Total mass of solution} = 222.6\\text{ g} + 200\\text{ g} = 422.6\\text{ g}$$<br>
    $$\\text{Volume of solution } V = \\frac{\\text{Mass}}{\\text{Density}} = \\frac{422.6\\text{ g}}{1.072\\text{ g mL}^{-1}} = 394.216\\text{ mL} = 0.3942\\text{ L}$$<br>
    $$M = \\frac{n_2}{V\\text{ (L)}} = \\frac{3.59\\text{ mol}}{0.3942\\text{ L}} = \\mathbf{9.11\\text{ M } (\\approx 9.11\\text{ mol L}^{-1})}$$
  </div>`,
  '3 Marks',
  [
    ['Calculation of moles of ethylene glycol $= 3.59\\text{ mol}$', '0.75 Mark'],
    ['Calculation of molality $m = 17.95\\text{ m}$', '1 Mark'],
    ['Volume calculation from density and Molarity $M = 9.11\\text{ M}$', '1.25 Marks']
  ]
));

// Exercise 1.9
questions.push(createQCard(
  'c12c-ch1-q21', 'Question 1.9', 'NCERT Exercise',
  'A sample of drinking water was found to be severely contaminated with chloroform ($\\text{CHCl}_3$), supposed to be a carcinogen. The level of contamination was $15\\text{ ppm}$ (by mass):<br>(i) express this in percent by mass<br>(ii) determine the molality of chloroform in the water sample.',
  `<div class="step">
    <b>(i) Percent by mass:</b><br>
    $15\\text{ ppm}$ means $15\\text{ g}$ of chloroform in $10^6\\text{ g}$ of solution.<br>
    $$\\text{Percent by mass} = \\frac{15\\text{ g}}{10^6\\text{ g}} \\times 100 = 15 \\times 10^{-4}\\% = \\mathbf{1.5 \\times 10^{-3}\\%}$$<br><br>

    <b>(ii) Molality of chloroform:</b><br>
    Molar mass of $\\text{CHCl}_3 = 12 + 1 + 3(35.5) = 13 + 106.5 = 119.5\\text{ g mol}^{-1}$<br>
    Mass of solute = $15\\text{ g}$<br>
    Mass of solvent $\\approx 10^6\\text{ g} = 1000\\text{ kg}$ (since $15\\text{ g}$ is negligible compared to $10^6\\text{ g}$)<br>
    $$\\text{Moles of } \\text{CHCl}_3 = \\frac{15\\text{ g}}{119.5\\text{ g mol}^{-1}} = 0.1255\\text{ mol}$$<br>
    $$m = \\frac{\\text{Moles}}{\\text{Mass of solvent in kg}} = \\frac{0.1255\\text{ mol}}{1000\\text{ kg}} = \\mathbf{1.255 \\times 10^{-4}\\text{ m } (\\approx 1.26 \\times 10^{-4}\\text{ mol kg}^{-1})}$$
  </div>`,
  '2 Marks',
  [
    ['(i) Conversion of ppm to percent by mass $= 1.5 \\times 10^{-3}\\%$', '1 Mark'],
    ['(ii) Molar mass of $\\text{CHCl}_3$ and molality $= 1.255 \\times 10^{-4}\\text{ m}$', '1 Mark']
  ]
));

// Exercise 1.10
questions.push(createQCard(
  'c12c-ch1-q22', 'Question 1.10', 'NCERT Exercise',
  'What role does the molecular interaction play in a solution of alcohol and water?',
  `<div class="step">
    <b>Molecular Interactions in Alcohol-Water Solution:</b><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Both alcohol (e.g., ethanol) and water molecules exhibit strong intermolecular hydrogen bonding in their pure states.</li>
      <li>When alcohol and water are mixed, the alcohol molecules intersperse between water molecules, breaking some of the original hydrogen bonds between water-water and alcohol-alcohol molecules.</li>
      <li>The resulting intermolecular attractive forces between alcohol and water molecules (A-B interactions) are <strong>weaker</strong> than the pure water-water (A-A) and alcohol-alcohol (B-B) interactions.</li>
      <li>Consequently, the escaping tendency of liquid molecules increases, leading to higher vapour pressure than expected from Raoult's law. Thus, the solution exhibits <strong>positive deviation from Raoult’s law</strong> ($\Delta_{\\text{mix}}H > 0$ and $\Delta_{\\text{mix}}V > 0$).</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Explanation of H-bonding in pure components vs mixture', '1 Mark'],
    ['Identification of weaker A-B interaction leading to positive deviation', '1 Mark']
  ]
));

// Exercise 1.11
questions.push(createQCard(
  'c12c-ch1-q23', 'Question 1.11', 'NCERT Exercise',
  'Why do gases always tend to be less soluble in liquids as the temperature is raised?',
  `<div class="step">
    <b>Reason:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Exothermic nature of dissolution:</strong> Dissolution of a gas in a liquid involves condensation of gas molecules into the liquid phase, which releases heat ($\Delta H_{\\text{sol}} < 0$, exothermic process):
      $$\\text{Gas} + \\text{Liquid Solvent} \\rightleftharpoons \\text{Solution} + \\text{Heat}$$</li>
      <li><strong>Le Chatelier\'s Principle:</strong> According to Le Chatelier’s principle, an increase in temperature shifts the equilibrium in the direction that absorbs heat (endothermic direction, i.e., backward). Therefore, gas molecules escape from the solution into the vapour phase, reducing solubility.</li>
      <li><strong>Kinetic energy:</strong> Higher temperature increases the average kinetic energy of dissolved gas molecules, enabling them to overcome intermolecular attractive forces and escape the liquid surface.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Exothermic nature of gas dissolution ($\\Delta H_{\\text{solution}} < 0$)', '1 Mark'],
    ['Application of Le Chatelier\'s Principle to justify decreased solubility', '1 Mark']
  ]
));

// Exercise 1.12
questions.push(createQCard(
  'c12c-ch1-q24', 'Question 1.12', 'NCERT Exercise',
  'State Henry’s law and mention some important applications.',
  `<div class="step">
    <b>1. Henry’s Law Statement:</b><br>
    At a constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of the liquid or solution.<br>
    Alternatively (most common formulation by Dalton): <em>The partial pressure of the gas in vapour phase ($p$) is directly proportional to the mole fraction of the gas ($x$) in the solution.</em><br>
    $$p = K_H \\cdot x$$<br>
    where $K_H$ is Henry’s law constant.<br><br>

    <b>2. Important Applications:</b><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Soft Drinks and Soda Water:</strong> Bottles are sealed under high pressure to increase the solubility of $\\text{CO}_2$ gas.</li>
      <li><strong>Scuba Divers (Prevention of Bends):</strong> At deep sea, high pressure increases the solubility of atmospheric gases (including $\\text{N}_2$) in blood. When divers surface, pressure decreases and dissolved nitrogen bubbles out, blocking capillaries (painful condition called <em>bends</em>). To avoid this, diving tanks are diluted with helium ($11.7\\%\\text{ He}, 56.2\\%\\text{ N}_2, 32.1\\%\\text{ O}_2$).</li>
      <li><strong>High Altitude Climbers (Prevention of Anoxia):</strong> At high altitudes, the partial pressure of oxygen is lower than at ground level. This causes low blood oxygen concentration in climbers, causing weakness and impaired thinking, a condition known as <em>anoxia</em>.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Henry\'s Law statement and formula $p = K_H \\cdot x$', '1.5 Marks'],
    ['Any two major applications (soda water, scuba diving, anoxia) explained', '1.5 Marks']
  ]
));

// Exercise 1.13
questions.push(createQCard(
  'c12c-ch1-q25', 'Question 1.13', 'NCERT Exercise',
  'The partial pressure of ethane over a solution containing $6.56 \\times 10^{-3}\\text{ g}$ of ethane is $1\\text{ bar}$. If the solution contains $5.00 \\times 10^{-2}\\text{ g}$ of ethane, then what shall be the partial pressure of the gas?',
  `<div class="step">
    <b>1. According to Henry’s Law:</b><br>
    The mass of gas dissolved per unit volume of solvent is directly proportional to its partial pressure:<br>
    $$m = k' \\cdot p \\implies \\frac{m_1}{p_1} = \\frac{m_2}{p_2}$$<br><br>
    <b>2. Given Data:</b><br>
    $m_1 = 6.56 \\times 10^{-3}\\text{ g}$, $p_1 = 1\\text{ bar}$<br>
    $m_2 = 5.00 \\times 10^{-2}\\text{ g} = 50 \\times 10^{-3}\\text{ g}$, $p_2 = ?$<br><br>
    <b>3. Calculation:</b><br>
    $$p_2 = \\frac{m_2 \\times p_1}{m_1} = \\frac{5.00 \\times 10^{-2}\\text{ g} \\times 1\\text{ bar}}{6.56 \\times 10^{-3}\\text{ g}} = \\frac{50}{6.56} = \\mathbf{7.62\\text{ bar}}$$
  </div>`,
  '2 Marks',
  [
    ['Henry\'s Law mass-pressure relation $\\frac{m_1}{p_1} = \\frac{m_2}{p_2}$', '1 Mark'],
    ['Substitution and calculation of $p_2 = 7.62\\text{ bar}$', '1 Mark']
  ]
));

// Exercise 1.14
questions.push(createQCard(
  'c12c-ch1-q26', 'Question 1.14', 'NCERT Exercise',
  'What is meant by positive and negative deviations from Raoult\'s law and how is the sign of $\\Delta_{\\text{mix}}H$ related to positive and negative deviations from Raoult\'s law?',
  `<div class="step">
    <b>1. Positive Deviation:</b><br>
    When the vapour pressure of a solution is <strong>higher</strong> than that predicted by Raoult’s law ($p_A > p_A^0 x_A$ and $p_B > p_B^0 x_B$), it shows positive deviation.<br>
    • <em>Cause:</em> Solute-solvent (A-B) interactions are <strong>weaker</strong> than A-A and B-B interactions.<br>
    • <em>Sign of $\\Delta_{\\text{mix}}H$:</em> <strong>Positive ($\\Delta_{\\text{mix}}H > 0$, endothermic)</strong> because more energy is required to break stronger A-A/B-B bonds than is released on forming weaker A-B bonds.<br>
    • <em>Example:</em> Ethanol + Acetone, Carbon disulphide + Acetone.<br><br>

    <b>2. Negative Deviation:</b><br>
    When the vapour pressure of a solution is <strong>lower</strong> than that predicted by Raoult’s law ($p_A < p_A^0 x_A$ and $p_B < p_B^0 x_B$), it shows negative deviation.<br>
    • <em>Cause:</em> Solute-solvent (A-B) interactions are <strong>stronger</strong> than A-A and B-B interactions.<br>
    • <em>Sign of $\\Delta_{\\text{mix}}H$:</em> <strong>Negative ($\\Delta_{\\text{mix}}H < 0$, exothermic)</strong> because stronger A-B interactions release more energy during bond formation.<br>
    • <em>Example:</em> Chloroform + Acetone (due to new intermolecular H-bonding), Phenol + Aniline.
  </div>`,
  '3 Marks',
  [
    ['Definition of positive deviation and relation with $\\Delta_{\\text{mix}}H > 0$', '1.5 Marks'],
    ['Definition of negative deviation and relation with $\\Delta_{\\text{mix}}H < 0$', '1.5 Marks']
  ]
));

// Exercise 1.15
questions.push(createQCard(
  'c12c-ch1-q27', 'Question 1.15', 'NCERT Exercise',
  'An aqueous solution of $2\\%$ non-volatile solute exerts a pressure of $1.004\\text{ bar}$ at the normal boiling point of the solvent. What is the molar mass of the solute?',
  `<div class="step">
    <b>1. Given:</b><br>
    At normal boiling point of water, pure solvent vapour pressure ($p_1^0$) = $1\\text{ atm} = 1.013\\text{ bar}$.<br>
    Vapour pressure of solution ($p_1$) = $1.004\\text{ bar}$.<br>
    In $100\\text{ g}$ of solution: mass of solute ($w_2$) = $2\\text{ g}$, mass of water ($w_1$) = $98\\text{ g}$.<br>
    Molar mass of water ($M_1$) = $18\\text{ g mol}^{-1}$.<br><br>
    <b>2. Raoult's Law formula for dilute solutions:</b><br>
    $$\\frac{p_1^0 - p_1}{p_1^0} = \\frac{w_2 \\times M_1}{M_2 \\times w_1}$$<br>
    $$\\frac{1.013 - 1.004}{1.013} = \\frac{2 \\times 18}{M_2 \\times 98}$$<br>
    $$\\frac{0.009}{1.013} = \\frac{36}{98 \\, M_2}$$<br>
    $$M_2 = \\frac{36 \\times 1.013}{98 \\times 0.009} = \\frac{36.468}{0.882} = \\mathbf{41.35\\text{ g mol}^{-1}}$$
  </div>`,
  '2 Marks',
  [
    ['Identification of $p_1^0 = 1.013\\text{ bar}$ at normal boiling point', '0.5 Mark'],
    ['Substitution into relative lowering formula and final molar mass $M_2 = 41.35\\text{ g/mol}$', '1.5 Marks']
  ]
));

// Exercise 1.16
questions.push(createQCard(
  'c12c-ch1-q28', 'Question 1.16', 'NCERT Exercise',
  'Heptane and octane form an ideal solution. At $373\\text{ K}$, the vapour pressures of the two liquid components are $105.2\\text{ kPa}$ and $46.8\\text{ kPa}$ respectively. What will be the vapour pressure of a mixture of $26.0\\text{ g}$ of heptane and $35.0\\text{ g}$ of octane?',
  `<div class="step">
    <b>1. Molar masses:</b><br>
    Heptane ($\\text{C}_7\\text{H}_{16}$): $M_H = 7(12) + 16(1) = 84 + 16 = 100\\text{ g mol}^{-1}$<br>
    Octane ($\\text{C}_8\\text{H}_{18}$): $M_O = 8(12) + 18(1) = 96 + 18 = 114\\text{ g mol}^{-1}$<br><br>
    <b>2. Moles of components:</b><br>
    $$n_H = \\frac{26.0}{100} = 0.260\\text{ mol}$$<br>
    $$n_O = \\frac{35.0}{114} = 0.307\\text{ mol}$$<br>
    $$\\text{Total moles} = 0.260 + 0.307 = 0.567\\text{ mol}$$<br><br>
    <b>3. Mole fractions:</b><br>
    $$x_H = \\frac{0.260}{0.567} = 0.4586$$<br>
    $$x_O = 1 - 0.4586 = 0.5414$$<br><br>
    <b>4. Partial and Total Vapour Pressures:</b><br>
    $$p_H = p_H^0 x_H = 105.2 \\times 0.4586 = 48.24\\text{ kPa}$$<br>
    $$p_O = p_O^0 x_O = 46.8 \\times 0.5414 = 25.34\\text{ kPa}$$<br>
    $$p_{\\text{total}} = p_H + p_O = 48.24 + 25.34 = \\mathbf{73.58\\text{ kPa}}$$
  </div>`,
  '3 Marks',
  [
    ['Calculation of moles and mole fractions ($x_H = 0.4586, x_O = 0.5414$)', '1 Mark'],
    ['Partial vapour pressures calculation ($p_H = 48.24\\text{ kPa}, p_O = 25.34\\text{ kPa}$)', '1 Mark'],
    ['Total vapour pressure $p_{\\text{total}} = 73.58\\text{ kPa}$', '1 Mark']
  ]
));

// Exercise 1.17
questions.push(createQCard(
  'c12c-ch1-q29', 'Question 1.17', 'NCERT Exercise',
  'The vapour pressure of water is $12.3\\text{ kPa}$ at $300\\text{ K}$. Calculate vapour pressure of $1\\text{ molal}$ solution of a non-volatile solute in it.',
  `<div class="step">
    <b>1. Given:</b><br>
    $p_1^0 = 12.3\\text{ kPa}$<br>
    $1\\text{ molal}$ solution means $1\\text{ mol}$ of solute in $1000\\text{ g}$ of water.<br>
    Moles of water ($n_1$) = $\\frac{1000}{18} = 55.55\\text{ mol}$<br><br>
    <b>2. Mole fraction of solute ($x_2$):</b><br>
    $$x_2 = \\frac{1}{1 + 55.55} = \\frac{1}{56.55} = 0.01768$$<br><br>
    <b>3. Relative lowering of vapour pressure:</b><br>
    $$\\frac{p_1^0 - p_1}{p_1^0} = x_2 \\implies 1 - \\frac{p_1}{p_1^0} = x_2 \\implies \\frac{p_1}{p_1^0} = 1 - x_2$$<br>
    $$p_1 = p_1^0 (1 - x_2) = 12.3\\text{ kPa} \\times (1 - 0.01768) = 12.3 \\times 0.98232 = \\mathbf{12.08\\text{ kPa}}$$
  </div>`,
  '2 Marks',
  [
    ['Calculation of solute mole fraction $x_2 = 0.0177$', '1 Mark'],
    ['Calculation of vapour pressure of solution $p_1 = 12.08\\text{ kPa}$', '1 Mark']
  ]
));

// Exercise 1.18
questions.push(createQCard(
  'c12c-ch1-q30', 'Question 1.18', 'NCERT Exercise',
  'Calculate the mass of a non-volatile solute (molar mass $40\\text{ g mol}^{-1}$) which should be dissolved in $114\\text{ g}$ octane to reduce its vapour pressure to $80\\%$.',
  `<div class="step">
    <b>1. Given:</b><br>
    Let vapour pressure of pure octane be $p_1^0 = 100\\text{ torr}$ (or $1\\text{ bar}$).<br>
    Then vapour pressure of solution $p_1 = 80\\% \\text{ of } p_1^0 = 0.80 \\, p_1^0$.<br>
    $M_2 = 40\\text{ g mol}^{-1}$<br>
    $w_1$ (octane, $\\text{C}_8\\text{H}_{18}$) = $114\\text{ g}$, $M_1 = 114\\text{ g mol}^{-1}$<br>
    Moles of octane ($n_1$) = $\\frac{114}{114} = 1\\text{ mol}$<br><br>
    <b>2. Raoult's Law formula:</b><br>
    $$\\frac{p_1^0 - p_1}{p_1^0} = x_2 = \\frac{n_2}{n_1 + n_2}$$<br>
    $$\\frac{p_1^0 - 0.80 \\, p_1^0}{p_1^0} = \\frac{n_2}{1 + n_2}$$<br>
    $$0.20 = \\frac{n_2}{1 + n_2} \\implies 0.20(1 + n_2) = n_2 \\implies 0.20 + 0.20 n_2 = n_2$$<br>
    $$0.80 n_2 = 0.20 \\implies n_2 = \\frac{0.20}{0.80} = 0.25\\text{ mol}$$<br><br>
    <b>3. Mass of solute ($w_2$):</b><br>
    $$w_2 = n_2 \\times M_2 = 0.25\\text{ mol} \\times 40\\text{ g mol}^{-1} = \\mathbf{10\\text{ g}}$$
  </div>`,
  '2 Marks',
  [
    ['Interpretation of $80\\%$ reduction and mole fraction formula', '1 Mark'],
    ['Solving for moles $n_2 = 0.25$ and mass $w_2 = 10\\text{ g}$', '1 Mark']
  ]
));

// Exercise 1.19
questions.push(createQCard(
  'c12c-ch1-q31', 'Question 1.19', 'NCERT Exercise',
  'A solution containing $30\\text{ g}$ of non-volatile solute exactly in $90\\text{ g}$ of water has a vapour pressure of $2.8\\text{ kPa}$ at $298\\text{ K}$. Further, $18\\text{ g}$ of water is then added to the solution and the new vapour pressure becomes $2.9\\text{ kPa}$ at $298\\text{ K}$. Calculate:<br>(i) molar mass of the solute<br>(ii) vapour pressure of water at $298\\text{ K}$.',
  `<div class="step">
    <b>1. Case 1 (before adding water):</b><br>
    $w_2 = 30\\text{ g}$, $w_1 = 90\\text{ g}$, $M_1 = 18\\text{ g mol}^{-1}$<br>
    Moles of water $n_1 = \\frac{90}{18} = 5\\text{ mol}$, Moles of solute $n_2 = \\frac{30}{M_2}$<br>
    $$p_1 = 2.8\\text{ kPa} = p_1^0 \\cdot x_1 = p_1^0 \\left(\\frac{5}{5 + \\frac{30}{M_2}}\\right)$$<br>
    $$\\frac{p_1^0}{2.8} = \\frac{5 + \\frac{30}{M_2}}{5} = 1 + \\frac{6}{M_2} \\quad \\text{--- (Equation 1)}$$<br><br>

    <b>2. Case 2 (after adding $18\\text{ g}$ water):</b><br>
    New mass of water = $90 + 18 = 108\\text{ g}$, so new $n_1 = \\frac{108}{18} = 6\\text{ mol}$<br>
    New vapour pressure $p_2 = 2.9\\text{ kPa}$<br>
    $$\\frac{p_1^0}{2.9} = \\frac{6 + \\frac{30}{M_2}}{6} = 1 + \\frac{5}{M_2} \\quad \\text{--- (Equation 2)}$$<br><br>

    <b>3. Solving Equations 1 and 2:</b><br>
    Subtract Equation 2 from Equation 1:<br>
    $$p_1^0 \\left(\\frac{1}{2.8} - \\frac{1}{2.9}\\right) = \\frac{6}{M_2} - \\frac{5}{M_2} = \\frac{1}{M_2}$$<br>
    $$p_1^0 \\left(\\frac{2.9 - 2.8}{2.8 \\times 2.9}\\right) = \\frac{1}{M_2} \\implies p_1^0 \\left(\\frac{0.1}{8.12}\\right) = \\frac{1}{M_2} \\implies \\frac{p_1^0}{81.2} = \\frac{1}{M_2}$$<br>
    Dividing Equation 1 by Equation 2:<br>
    $$\\frac{2.9}{2.8} = \\frac{1 + \\frac{6}{M_2}}{1 + \\frac{5}{M_2}} = \\frac{M_2 + 6}{M_2 + 5}$$<br>
    $$2.9(M_2 + 5) = 2.8(M_2 + 6) \\implies 2.9 M_2 + 14.5 = 2.8 M_2 + 16.8$$<br>
    $$0.1 M_2 = 2.3 \\implies M_2 = \\frac{2.3}{0.1} = \\mathbf{23\\text{ g mol}^{-1}}$$<br><br>

    <b>4. Calculating pure water vapour pressure ($p_1^0$):</b><br>
    Substitute $M_2 = 23\\text{ g mol}^{-1}$ into Equation 1:<br>
    $$\\frac{p_1^0}{2.8} = 1 + \\frac{6}{23} = \\frac{29}{23}$$<br>
    $$p_1^0 = 2.8 \\times \\frac{29}{23} = \\frac{81.2}{23} = \\mathbf{3.53\\text{ kPa}}$$
  </div>`,
  '4 Marks',
  [
    ['Formulating equations for Case 1 and Case 2', '1.5 Marks'],
    ['(i) Calculation of molar mass of solute $M_2 = 23\\text{ g mol}^{-1}$', '1.5 Marks'],
    ['(ii) Calculation of vapour pressure of pure water $p_1^0 = 3.53\\text{ kPa}$', '1 Mark']
  ]
));

// Exercise 1.20
questions.push(createQCard(
  'c12c-ch1-q32', 'Question 1.20', 'NCERT Exercise',
  'A $5\\%$ solution (by mass) of cane sugar in water has freezing point of $271\\text{ K}$. Calculate the freezing point of $5\\%$ glucose in water if freezing point of pure water is $273.15\\text{ K}$.',
  `<div class="step">
    <b>1. Depression in freezing point for cane sugar solution:</b><br>
    Freezing point of pure water ($T_f^0$) = $273.15\\text{ K}$<br>
    Freezing point of sugar solution ($T_f$) = $271.0\\text{ K}$<br>
    $$\\Delta T_f(\\text{sugar}) = 273.15 - 271.0 = 2.15\\text{ K}$$<br>
    $5\\%$ cane sugar ($\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$, $M_2 = 342\\text{ g mol}^{-1}$) means $5\\text{ g}$ in $95\\text{ g}$ water ($0.095\\text{ kg}$).<br>
    $$\\text{Molality } m_{\\text{sugar}} = \\frac{5}{342 \\times 0.095} = 0.1539\\text{ mol kg}^{-1}$$<br>
    $$\\Delta T_f = K_f \\cdot m \\implies K_f = \\frac{\\Delta T_f}{m} = \\frac{2.15}{0.1539} = 13.97\\text{ K kg mol}^{-1}$$<br><br>

    <b>2. Depression in freezing point for $5\\%$ glucose solution:</b><br>
    $5\\%$ glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$, $M_2 = 180\\text{ g mol}^{-1}$) in $95\\text{ g}$ water.<br>
    $$\\text{Molality } m_{\\text{glucose}} = \\frac{5}{180 \\times 0.095} = 0.2924\\text{ mol kg}^{-1}$$<br>
    $$\\Delta T_f(\\text{glucose}) = K_f \\cdot m_{\\text{glucose}} = 13.97 \\times 0.2924 = \\mathbf{4.085\\text{ K } (\\approx 4.09\\text{ K})}$$<br><br>

    <b>3. Freezing point of glucose solution:</b><br>
    $$T_f = T_f^0 - \\Delta T_f = 273.15\\text{ K} - 4.09\\text{ K} = \\mathbf{269.06\\text{ K}}$$
  </div>`,
  '3 Marks',
  [
    ['Calculation of $\\Delta T_f(\\text{sugar}) = 2.15\\text{ K}$ and finding $K_f$', '1 Mark'],
    ['Calculation of molality and $\\Delta T_f$ of glucose $= 4.09\\text{ K}$', '1 Mark'],
    ['Final freezing point of glucose solution $= 269.06\\text{ K}$', '1 Mark']
  ]
));

console.log(`Generated Exercises 1.1 to 1.20 (${questions.length} Qs)`);

module.exports = { questions };
