// scripts/builders/c10s-part1.js
// 100% Literal Verbatim Physical NCERT Questions for Class 10 Science: Chapters 1 to 4 (Chemistry)
// Full In-Text and End-of-Chapter Exercises with CBSE Step Marking Schemes

function renderQCard(id, num, text, marks, answerHtml, rubricRows) {
  return `  <div class="q-card" id="${id}">
    <div class="q-head" onclick="toggleQ('${id}')">
      <div class="q-num">${num}</div>
      <div class="q-text">${text}</div>
      <div class="q-marks">[${marks} Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Step-by-Step Solution</div>
        <div class="answer-text">
${answerHtml}
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme Breakdown 2026-27</div>
${rubricRows.map(r => `          <div class="marking-row"><span class="marking-key">${r.key}</span><span class="marking-marks">${r.marks}</span></div>`).join('\n')}
        </div>
      </div>
    </div>
  </div>`;
}

// ============================================================================
// CHAPTER 1: CHEMICAL REACTIONS AND EQUATIONS (28 Physical NCERT Qs + 1 CBQ)
// ============================================================================
function getChapter1Html() {
  const qCards = [
    // --- In-Text Page 6 ---
    renderQCard(
      'c10s-ch1-q1',
      'In-Text Page 6 • Q1',
      'Why should a magnesium ribbon be cleaned before burning in air?',
      2,
      `<p><strong>Scientific Reason:</strong></p>
<p>Magnesium is an active metal. When exposed to atmospheric air, it slowly reacts with oxygen to form a thin, stable, and protective inert layer of <strong>basic magnesium oxide ($MgO$)</strong> and magnesium carbonate on its surface:</p>
$$2\\text{Mg}(s) + \\text{O}_2(g) \\longrightarrow 2\\text{MgO}(s)$$
<p>This protective layer acts as a barrier that prevents direct contact between underlying magnesium metal and oxygen, hindering combustion. Rubbing with sandpaper removes this inert oxide coating, exposing fresh reactive magnesium so that it ignites smoothly with a dazzling white flame.</p>`,
      [
        { key: 'Identification of basic magnesium oxide (MgO) protective layer', marks: '1 Mark' },
        { key: 'Explaining sandpaper removal exposes fresh metal for smooth combustion', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q2',
      'In-Text Page 6 • Q2',
      'Write the balanced equation for the following chemical reactions: (i) Hydrogen + Chlorine &rarr; Hydrogen chloride, (ii) Barium chloride + Aluminium sulphate &rarr; Barium sulphate + Aluminium chloride, (iii) Sodium + Water &rarr; Sodium hydroxide + Hydrogen.',
      3,
      `<p><strong>Balanced Chemical Equations:</strong></p>
<ol>
  <li><strong>(i) Hydrogen + Chlorine &rarr; Hydrogen chloride:</strong><br>
    $$\\text{H}_2(g) + \\text{Cl}_2(g) \\longrightarrow 2\\text{HCl}(g)$$
  </li>
  <li><strong>(ii) Barium chloride + Aluminium sulphate &rarr; Barium sulphate + Aluminium chloride:</strong><br>
    $$3\\text{BaCl}_2(aq) + \\text{Al}_2(\\text{SO}_4)_3(aq) \\longrightarrow 3\\text{BaSO}_4(s)\\downarrow + 2\\text{AlCl}_3(aq)$$
    <em>Note:</em> Barium sulphate is formed as an insoluble dense white precipitate.
  </li>
  <li><strong>(iii) Sodium + Water &rarr; Sodium hydroxide + Hydrogen:</strong><br>
    $$2\\text{Na}(s) + 2\\text{H}_2\\text{O}(l) \\longrightarrow 2\\text{NaOH}(aq) + \\text{H}_2(g)\\uparrow + \\text{Heat}$$
  </li>
</ol>`,
      [
        { key: 'Reaction (i): H2 + Cl2 -> 2HCl', marks: '1 Mark' },
        { key: 'Reaction (ii): 3BaCl2 + Al2(SO4)3 -> 3BaSO4 + 2AlCl3', marks: '1 Mark' },
        { key: 'Reaction (iii): 2Na + 2H2O -> 2NaOH + H2', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q3',
      'In-Text Page 6 • Q3',
      'Write a balanced chemical equation with state symbols for the following reactions: (i) Solutions of barium chloride and sodium sulphate in water react to give insoluble barium sulphate and the solution of sodium chloride. (ii) Sodium hydroxide solution in water reacts with hydrochloric acid solution to produce sodium chloride solution and water.',
      2,
      `<p><strong>Balanced Equations with Physical State Symbols:</strong></p>
<ol>
  <li><strong>(i) Precipitation Reaction:</strong><br>
    $$\\text{BaCl}_2(aq) + \\text{Na}_2\\text{SO}_4(aq) \\longrightarrow \\text{BaSO}_4(s)\\downarrow + 2\\text{NaCl}(aq)$$
  </li>
  <li><strong>(ii) Neutralisation Reaction:</strong><br>
    $$\\text{NaOH}(aq) + \\text{HCl}(aq) \\longrightarrow \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l)$$
  </li>
</ol>`,
      [
        { key: 'Balanced precipitation equation with (aq) and (s) state symbols', marks: '1 Mark' },
        { key: 'Balanced neutralisation equation with (aq) and (l) state symbols', marks: '1 Mark' }
      ]
    ),
    // --- In-Text Page 10 ---
    renderQCard(
      'c10s-ch1-q4',
      'In-Text Page 10 • Q1',
      'A solution of a substance \'X\' is used for white-washing. (i) Name the substance \'X\' and write its formula. (ii) Write the reaction of the substance \'X\' named in (i) above with water.',
      2,
      `<p><strong>Identification and Reaction of Substance \'X\':</strong></p>
<ol>
  <li><strong>(i) Name and Formula:</strong><br>
    Substance \'X\' is <strong>Calcium oxide</strong> (commonly called <strong>Quicklime</strong>).<br>
    <strong>Chemical Formula:</strong> $\\text{CaO}$.
  </li>
  <li><strong>(ii) Reaction with Water:</strong><br>
    Quicklime reacts vigorously with water in a highly exothermic reaction to produce slaked lime:
    $$\\text{CaO}(s) + \\text{H}_2\\text{O}(l) \\longrightarrow \\text{Ca(OH)}_2(aq) + \\text{Heat}$$
  </li>
</ol>`,
      [
        { key: 'Name (Calcium oxide / Quicklime) and formula (CaO)', marks: '1 Mark' },
        { key: 'Balanced chemical equation with water forming Ca(OH)2', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q5',
      'In-Text Page 10 • Q2',
      'Why is the amount of gas collected in one of the test tubes in Activity 1.7 (electrolysis of water) double of the amount collected in the other? Name this gas.',
      2,
      `<p><strong>Electrolysis of Water Explanation:</strong></p>
<p>Water molecule consists of two hydrogen atoms and one oxygen atom in a $2:1$ ratio by volume ($H_2O$). During electrolysis of acidulated water:</p>
$$2\\text{H}_2\\text{O}(l) \\xrightarrow{\\text{Electricity}} 2\\text{H}_2(g) + \\text{O}_2(g)$$
<p>By stoichiometric mole ratio and Avogadro\'s Law, 2 volumes of hydrogen gas are liberated at the cathode for every 1 volume of oxygen gas liberated at the anode. Hence, the gas collected in double the volume is <strong>Hydrogen gas ($\\text{H}_2$)</strong>.</p>`,
      [
        { key: 'Balanced electrolysis equation showing 2:1 stoichiometric mole ratio', marks: '1 Mark' },
        { key: 'Identifying the gas as Hydrogen collected at cathode', marks: '1 Mark' }
      ]
    ),
    // --- In-Text Page 13 ---
    renderQCard(
      'c10s-ch1-q6',
      'In-Text Page 13 • Q1',
      'Why does the colour of copper sulphate solution change when an iron nail is dipped in it?',
      2,
      `<p><strong>Displacement Reaction Mechanism:</strong></p>
<p>Iron ($\\text{Fe}$) is more reactive than copper ($\\text{Cu}$) in the reactivity series. When an iron nail is dipped in blue copper sulphate solution, iron displaces copper:</p>
$$\\text{Fe}(s) + \\text{CuSO}_4(aq) \\longrightarrow \\text{FeSO}_4(aq) + \\text{Cu}(s)$$
$$\\text{(Grey)} + \\text{(Blue)} \\longrightarrow \\text{(Light Green)} + \\text{(Reddish Brown)}$$
<p>The blue colour fades and changes to pale green due to formation of $\\text{Fe}^{2+}$ (ferrous sulphate) ions, and displaced copper deposits as a reddish-brown coating on the iron nail.</p>`,
      [
        { key: 'Iron is more reactive than copper and displaces it', marks: '1 Mark' },
        { key: 'Balanced equation and colour change: blue to light green (FeSO4)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q7',
      'In-Text Page 13 • Q2',
      'Give an example of a double displacement reaction other than the one given in Activity 1.10 (between barium chloride and sodium sulphate).',
      2,
      `<p><strong>Example of Double Displacement Reaction:</strong></p>
<p>Reaction between aqueous Lead(II) nitrate and Potassium iodide:</p>
$$\\text{Pb(NO}_3)_2(aq) + 2\\text{KI}(aq) \\longrightarrow \\text{PbI}_2(s)\\downarrow + 2\\text{KNO}_3(aq)$$
<p><strong>Observation:</strong> Exchange of ions takes place, resulting in the instantaneous formation of a bright <strong>yellow precipitate of Lead iodide ($\\text{PbI}_2$)</strong>.</p>`,
      [
        { key: 'Correct reactants: Lead nitrate and Potassium iodide', marks: '1 Mark' },
        { key: 'Balanced equation with yellow precipitate PbI2 identified', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q8',
      'In-Text Page 13 • Q3',
      'Identify the substances that are oxidised and the substances that are reduced in the following reactions: (i) $4\\text{Na}(s) + \\text{O}_2(g) \\longrightarrow 2\\text{Na}_2\\text{O}(s)$, (ii) $\\text{CuO}(s) + \\text{H}_2(g) \\longrightarrow \\text{Cu}(s) + \\text{H}_2\\text{O}(l)$.',
      2,
      `<p><strong>Oxidation and Reduction Analysis:</strong></p>
<ol>
  <li><strong>(i) $4\\text{Na}(s) + \\text{O}_2(g) \\longrightarrow 2\\text{Na}_2\\text{O}(s)$:</strong><br>
    - <strong>Substance Oxidised:</strong> Sodium ($\\text{Na}$) gains oxygen to form $\\text{Na}_2\\text{O}$.<br>
    - <strong>Substance Reduced:</strong> Oxygen ($\\text{O}_2$) is reduced.
  </li>
  <li><strong>(ii) $\\text{CuO}(s) + \\text{H}_2(g) \\longrightarrow \\text{Cu}(s) + \\text{H}_2\\text{O}(l)$:</strong><br>
    - <strong>Substance Oxidised:</strong> Hydrogen ($\\text{H}_2$) gains oxygen to form water ($\\text{H}_2\\text{O}$).<br>
    - <strong>Substance Reduced:</strong> Copper(II) oxide ($\\text{CuO}$) loses oxygen to form copper ($\\text{Cu}$).
  </li>
</ol>`,
      [
        { key: 'Part (i): Na oxidised, O2 reduced', marks: '1 Mark' },
        { key: 'Part (ii): H2 oxidised, CuO reduced', marks: '1 Mark' }
      ]
    ),
    // --- End-of-Chapter Exercises Page 14-16 ---
    renderQCard(
      'c10s-ch1-q9',
      'Exercise Q1 (MCQ)',
      'Which of the statements about the reaction below are incorrect? $2\\text{PbO}(s) + \\text{C}(s) \\longrightarrow 2\\text{Pb}(s) + \\text{CO}_2(g)$<br>(a) Lead is getting reduced.<br>(b) Carbon dioxide is getting oxidised.<br>(c) Carbon is getting oxidised.<br>(d) Lead oxide is getting reduced.<br>Choices: (i) (a) and (b), (ii) (a) and (c), (iii) (a), (b) and (c), (iv) all.',
      1,
      `<p><strong>Correct Answer: (i) (a) and (b) are incorrect.</strong></p>
<p><strong>Reasoning:</strong> In this redox reaction:</p>
<ul>
  <li>$\\text{PbO}$ loses oxygen &rarr; Lead oxide ($\\text{PbO}$) is being reduced (statement (d) is correct, (a) is incorrect because lead oxide, not lead, is being reduced).</li>
  <li>$\\text{C}$ gains oxygen &rarr; Carbon ($\\text{C}$) is being oxidised (statement (c) is correct, (b) is incorrect because carbon, not carbon dioxide, is being oxidised).</li>
</ul>`,
      [
        { key: 'Selecting option (i) with scientific reasoning regarding reactants oxidised/reduced', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q10',
      'Exercise Q2 (MCQ)',
      '$\\text{Fe}_2\\text{O}_3 + 2\\text{Al} \\longrightarrow \\text{Al}_2\\text{O}_3 + 2\\text{Fe}$. The above reaction is an example of a:<br>(a) combination reaction, (b) double displacement reaction, (c) decomposition reaction, (d) displacement reaction.',
      1,
      `<p><strong>Correct Answer: (d) displacement reaction.</strong></p>
<p><strong>Reasoning:</strong> Aluminium ($\\text{Al}$) is more reactive than iron ($\\text{Fe}$). It displaces iron from ferric oxide to form aluminium oxide and molten iron (Thermite reaction).</p>`,
      [
        { key: 'Option (d) displacement reaction with reactivity reasoning', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q11',
      'Exercise Q3 (MCQ)',
      'What happens when dilute hydrochloric acid is added to iron filings? Tick the correct answer.<br>(a) Hydrogen gas and iron chloride are produced.<br>(b) Chlorine gas and iron hydroxide are produced.<br>(c) No reaction takes place.<br>(d) Iron salt and water are produced.',
      1,
      `<p><strong>Correct Answer: (a) Hydrogen gas and iron chloride are produced.</strong></p>
<p><strong>Reaction:</strong> $\\text{Fe}(s) + 2\\text{HCl}(aq) \\longrightarrow \\text{FeCl}_2(aq) + \\text{H}_2(g)\\uparrow$</p>`,
      [
        { key: 'Option (a) with balanced chemical equation', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q12',
      'Exercise Q4',
      'What is a balanced chemical equation? Why should chemical equations be balanced?',
      2,
      `<p><strong>1. Definition:</strong> A chemical equation in which the total number of atoms of each element is equal on both the reactant side and the product side is called a <strong>balanced chemical equation</strong>.</p>
<p><strong>2. Reason for Balancing:</strong> Chemical equations must be balanced to satisfy the <strong>Law of Conservation of Mass</strong> (formulated by Antoine Lavoisier), which states that mass can neither be created nor destroyed in a chemical reaction. Therefore, the total mass of reactants must equal the total mass of products.</p>`,
      [
        { key: 'Definition of balanced chemical equation', marks: '1 Mark' },
        { key: 'Application of Law of Conservation of Mass', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q13',
      'Exercise Q5',
      'Translate the following statements into chemical equations and then balance them:<br>(a) Hydrogen gas combines with nitrogen to form ammonia.<br>(b) Hydrogen sulphide gas burns in air to give water and sulphur dioxide.<br>(c) Barium chloride reacts with aluminium sulphate to give aluminium chloride and a precipitate of barium sulphate.<br>(d) Potassium metal reacts with water to give potassium hydroxide and hydrogen gas.',
      4,
      `<p><strong>Balanced Equations:</strong></p>
<ol>
  <li><strong>(a)</strong> $3\\text{H}_2(g) + \\text{N}_2(g) \\longrightarrow 2\\text{NH}_3(g)$</li>
  <li><strong>(b)</strong> $2\\text{H}_2\\text{S}(g) + 3\\text{O}_2(g) \\longrightarrow 2\\text{H}_2\\text{O}(l) + 2\\text{SO}_2(g)$</li>
  <li><strong>(c)</strong> $3\\text{BaCl}_2(aq) + \\text{Al}_2(\\text{SO}_4)_3(aq) \\longrightarrow 2\\text{AlCl}_3(aq) + 3\\text{BaSO}_4(s)\\downarrow$</li>
  <li><strong>(d)</strong> $2\\text{K}(s) + 2\\text{H}_2\\text{O}(l) \\longrightarrow 2\\text{KOH}(aq) + \\text{H}_2(g)\\uparrow$</li>
</ol>`,
      [
        { key: 'Equation (a) balanced correctly', marks: '1 Mark' },
        { key: 'Equation (b) balanced correctly', marks: '1 Mark' },
        { key: 'Equation (c) balanced correctly', marks: '1 Mark' },
        { key: 'Equation (d) balanced correctly', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q14',
      'Exercise Q6',
      'Balance the following chemical equations:<br>(a) $\\text{HNO}_3 + \\text{Ca(OH)}_2 \\longrightarrow \\text{Ca(NO}_3)_2 + \\text{H}_2\\text{O}$<br>(b) $\\text{NaOH} + \\text{H}_2\\text{SO}_4 \\longrightarrow \\text{Na}_2\\text{SO}_4 + \\text{H}_2\\text{O}$<br>(c) $\\text{NaCl} + \\text{AgNO}_3 \\longrightarrow \\text{AgCl} + \\text{NaNO}_3$<br>(d) $\\text{BaCl}_2 + \\text{H}_2\\text{SO}_4 \\longrightarrow \\text{BaSO}_4 + \\text{HCl}$',
      4,
      `<p><strong>Step-by-step Balanced Equations:</strong></p>
<ol>
  <li><strong>(a)</strong> $2\\text{HNO}_3 + \\text{Ca(OH)}_2 \\longrightarrow \\text{Ca(NO}_3)_2 + 2\\text{H}_2\\text{O}$</li>
  <li><strong>(b)</strong> $2\\text{NaOH} + \\text{H}_2\\text{SO}_4 \\longrightarrow \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$</li>
  <li><strong>(c)</strong> $\\text{NaCl} + \\text{AgNO}_3 \\longrightarrow \\text{AgCl}\\downarrow + \\text{NaNO}_3$ (Already balanced)</li>
  <li><strong>(d)</strong> $\\text{BaCl}_2 + \\text{H}_2\\text{SO}_4 \\longrightarrow \\text{BaSO}_4\\downarrow + 2\\text{HCl}$</li>
</ol>`,
      [
        { key: 'Equation (a) with coefficient 2 for HNO3 and H2O', marks: '1 Mark' },
        { key: 'Equation (b) with coefficient 2 for NaOH and H2O', marks: '1 Mark' },
        { key: 'Equation (c) verified balanced stoichiometry', marks: '1 Mark' },
        { key: 'Equation (d) with coefficient 2 for HCl', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q15',
      'Exercise Q7',
      'Write the balanced chemical equations for the following reactions:<br>(a) Calcium hydroxide + Carbon dioxide &rarr; Calcium carbonate + Water<br>(b) Zinc + Silver nitrate &rarr; Zinc nitrate + Silver<br>(c) Aluminium + Copper chloride &rarr; Aluminium chloride + Copper<br>(d) Barium chloride + Potassium sulphate &rarr; Barium sulphate + Potassium chloride',
      4,
      `<p><strong>Balanced Chemical Equations:</strong></p>
<ol>
  <li><strong>(a)</strong> $\\text{Ca(OH)}_2(aq) + \\text{CO}_2(g) \\longrightarrow \\text{CaCO}_3(s) + \\text{H}_2\\text{O}(l)$</li>
  <li><strong>(b)</strong> $\\text{Zn}(s) + 2\\text{AgNO}_3(aq) \\longrightarrow \\text{Zn(NO}_3)_2(aq) + 2\\text{Ag}(s)$</li>
  <li><strong>(c)</strong> $2\\text{Al}(s) + 3\\text{CuCl}_2(aq) \\longrightarrow 2\\text{AlCl}_3(aq) + 3\\text{Cu}(s)$</li>
  <li><strong>(d)</strong> $\\text{BaCl}_2(aq) + \\text{K}_2\\text{SO}_4(aq) \\longrightarrow \\text{BaSO}_4(s)\\downarrow + 2\\text{KCl}(aq)$</li>
</ol>`,
      [
        { key: 'Reaction (a) balanced', marks: '1 Mark' },
        { key: 'Reaction (b) balanced', marks: '1 Mark' },
        { key: 'Reaction (c) balanced', marks: '1 Mark' },
        { key: 'Reaction (d) balanced', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q16',
      'Exercise Q8',
      'Write the balanced chemical equation for the following and identify the type of reaction in each case:<br>(a) Potassium bromide(aq) + Barium iodide(aq) &rarr; Potassium iodide(aq) + Barium bromide(s)<br>(b) Zinc carbonate(s) &rarr; Zinc oxide(s) + Carbon dioxide(g)<br>(c) Hydrogen(g) + Chlorine(g) &rarr; Hydrogen chloride(g)<br>(d) Magnesium(s) + Hydrochloric acid(aq) &rarr; Magnesium chloride(aq) + Hydrogen(g)',
      4,
      `<p><strong>Balanced Equations and Types:</strong></p>
<ol>
  <li><strong>(a)</strong> $2\\text{KBr}(aq) + \\text{BaI}_2(aq) \\longrightarrow 2\\text{KI}(aq) + \\text{BaBr}_2(s)$<br>
    <em>Type:</em> <strong>Double Displacement Reaction</strong> (Precipitation).</li>
  <li><strong>(b)</strong> $\\text{ZnCO}_3(s) \\xrightarrow{\\Delta} \\text{ZnO}(s) + \\text{CO}_2(g)$<br>
    <em>Type:</em> <strong>Decomposition Reaction</strong> (Thermal decomposition).</li>
  <li><strong>(c)</strong> $\\text{H}_2(g) + \\text{Cl}_2(g) \\longrightarrow 2\\text{HCl}(g)$<br>
    <em>Type:</em> <strong>Combination Reaction</strong>.</li>
  <li><strong>(d)</strong> $\\text{Mg}(s) + 2\\text{HCl}(aq) \\longrightarrow \\text{MgCl}_2(aq) + \\text{H}_2(g)$<br>
    <em>Type:</em> <strong>Displacement Reaction</strong>.</li>
</ol>`,
      [
        { key: 'Reaction (a) balanced and identified as double displacement', marks: '1 Mark' },
        { key: 'Reaction (b) balanced and identified as decomposition', marks: '1 Mark' },
        { key: 'Reaction (c) balanced and identified as combination', marks: '1 Mark' },
        { key: 'Reaction (d) balanced and identified as displacement', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q17',
      'Exercise Q9',
      'What does one mean by exothermic and endothermic reactions? Give examples.',
      3,
      `<p><strong>1. Exothermic Reactions:</strong> Chemical reactions in which heat or energy is evolved along with the formation of products.</p>
<p><em>Examples:</em></p>
<ul>
  <li>Burning of natural gas: $\\text{CH}_4(g) + 2\\text{O}_2(g) \\longrightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(g) + \\text{Heat}$</li>
  <li>Respiration: $\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\longrightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{Energy}$</li>
</ul>
<p><strong>2. Endothermic Reactions:</strong> Chemical reactions in which energy is absorbed from the surroundings in the form of heat, light, or electricity.</p>
<p><em>Example:</em></p>
<ul>
  <li>Thermal decomposition of limestone: $\\text{CaCO}_3(s) \\xrightarrow{\\Delta} \\text{CaO}(s) + \\text{CO}_2(g)$</li>
</ul>`,
      [
        { key: 'Definition and balanced example of exothermic reaction', marks: '1.5 Marks' },
        { key: 'Definition and balanced example of endothermic reaction', marks: '1.5 Marks' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q18',
      'Exercise Q10',
      'Why is respiration considered an exothermic reaction? Explain.',
      2,
      `<p><strong>Biological and Chemical Explanation:</strong></p>
<p>During digestion, food is broken down into simple glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$). In the cells, glucose combines with inhaled oxygen and undergoes controlled breakdown to produce carbon dioxide, water, and liberates energy:</p>
$$\\text{C}_6\\text{H}_{12}\\text{O}_6(aq) + 6\\text{O}_2(g) \\longrightarrow 6\\text{CO}_2(g) + 6\\text{H}_2\\text{O}(l) + \\text{Energy (ATP)}$$
<p>Since heat/chemical energy is continuously released to sustain bodily metabolic processes, cellular respiration is an <strong>exothermic process</strong>.</p>`,
      [
        { key: 'Stating breakdown of carbohydrates to glucose', marks: '1 Mark' },
        { key: 'Balanced respiration equation and energy liberation deduction', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q19',
      'Exercise Q11',
      'Why are decomposition reactions called the opposite of combination reactions? Write equations for these reactions.',
      3,
      `<p><strong>Opposite Nature Explained:</strong></p>
<ul>
  <li>In a <strong>combination reaction</strong>, two or more substances combine to form a single substance:
    $$2\\text{H}_2(g) + \\text{O}_2(g) \\longrightarrow 2\\text{H}_2\\text{O}(l) + \\text{Energy}$$
  </li>
  <li>In a <strong>decomposition reaction</strong>, a single substance breaks down upon supply of energy to form two or more simpler substances:
    $$2\\text{H}_2\\text{O}(l) \\xrightarrow{\\text{Electricity}} 2\\text{H}_2(g) + \\text{O}_2(g)$$
  </li>
</ul>
<p>Because combination builds a single compound from multiple reactants (usually exothermic) while decomposition breaks a single compound into multiple products (endothermic), they are direct chemical opposites.</p>`,
      [
        { key: 'Defining combination reaction with balanced equation', marks: '1.5 Marks' },
        { key: 'Defining decomposition reaction with reverse equation', marks: '1.5 Marks' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q20',
      'Exercise Q12',
      'Write one equation each for decomposition reactions where energy is supplied in the form of heat, light and electricity.',
      3,
      `<p><strong>Three Forms of Energy in Decomposition:</strong></p>
<ol>
  <li><strong>Heat (Thermal Decomposition):</strong><br>
    $$2\\text{FeSO}_4(s) \\xrightarrow{\\Delta} \\text{Fe}_2\\text{O}_3(s) + \\text{SO}_2(g) + \\text{SO}_3(g)$$
  </li>
  <li><strong>Light (Photolytic Decomposition):</strong><br>
    $$2\\text{AgCl}(s) \\xrightarrow{\\text{Sunlight}} 2\\text{Ag}(s) + \\text{Cl}_2(g)$$
  </li>
  <li><strong>Electricity (Electrolytic Decomposition):</strong><br>
    $$2\\text{H}_2\\text{O}(l) \\xrightarrow{\\text{Electric current}} 2\\text{H}_2(g) + \\text{O}_2(g)$$
  </li>
</ol>`,
      [
        { key: 'Thermal decomposition equation with states', marks: '1 Mark' },
        { key: 'Photolytic decomposition equation (AgCl or AgBr)', marks: '1 Mark' },
        { key: 'Electrolytic decomposition equation of water or NaCl', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q21',
      'Exercise Q13',
      'What is the difference between displacement and double displacement reactions? Write equations for these reactions.',
      3,
      `<p><strong>Comparison Table:</strong></p>
<table style="width:100%;border-collapse:collapse;margin:10px 0;">
  <tr style="background:#f1f5f9;"><th style="border:1px solid #cbd5e1;padding:8px;">Displacement Reaction</th><th style="border:1px solid #cbd5e1;padding:8px;">Double Displacement Reaction</th></tr>
  <tr><td style="border:1px solid #cbd5e1;padding:8px;">A more reactive element displaces a less reactive element from its salt solution.</td><td style="border:1px solid #cbd5e1;padding:8px;">Two ionic compounds exchange their ions to form two new compounds.</td></tr>
  <tr><td style="border:1px solid #cbd5e1;padding:8px;">$\\text{Zn}(s) + \\text{CuSO}_4(aq) \\longrightarrow \\text{ZnSO}_4(aq) + \\text{Cu}(s)$</td><td style="border:1px solid #cbd5e1;padding:8px;">$\\text{Na}_2\\text{SO}_4(aq) + \\text{BaCl}_2(aq) \\longrightarrow \\text{BaSO}_4(s)\\downarrow + 2\\text{NaCl}(aq)$</td></tr>
</table>`,
      [
        { key: 'Displacement definition and balanced equation', marks: '1.5 Marks' },
        { key: 'Double displacement definition and precipitation equation', marks: '1.5 Marks' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q22',
      'Exercise Q14',
      'In the refining of silver, the recovery of silver from silver nitrate solution involved displacement by copper metal. Write down the reaction involved.',
      2,
      `<p><strong>Chemical Reaction Involved:</strong></p>
<p>Copper is more electropositive and reactive than silver in the activity series, so it displaces silver from its solution:</p>
$$2\\text{AgNO}_3(aq) + \\text{Cu}(s) \\longrightarrow \\text{Cu(NO}_3)_2(aq) + 2\\text{Ag}(s)\\downarrow$$
<p><strong>Result:</strong> Pure metallic silver precipitates out, and the solution turns blue due to cupric nitrate $\\text{Cu(NO}_3)_2$.</p>`,
      [
        { key: 'Balanced displacement equation between AgNO3 and Cu', marks: '1 Mark' },
        { key: 'State symbols and explanation of silver precipitation', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q23',
      'Exercise Q15',
      'What do you mean by a precipitation reaction? Explain by giving examples.',
      2,
      `<p><strong>Definition and Example:</strong></p>
<p>Any chemical reaction in which an insoluble solid (called a <strong>precipitate</strong>) separates out from the solution upon mixing two aqueous solutions is called a <strong>precipitation reaction</strong>.</p>
<p><strong>Example:</strong></p>
$$\\text{BaCl}_2(aq) + \\text{Na}_2\\text{SO}_4(aq) \\longrightarrow \\text{BaSO}_4(s)\\downarrow + 2\\text{NaCl}(aq)$$
<p>A white precipitate of barium sulphate ($\\text{BaSO}_4$) is instantly formed.</p>`,
      [
        { key: 'Definition of precipitation reaction', marks: '1 Mark' },
        { key: 'Balanced chemical equation with precipitate product', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q24',
      'Exercise Q16',
      'Explain the following in terms of gain or loss of oxygen with two examples each: (a) Oxidation, (b) Reduction.',
      4,
      `<p><strong>(a) Oxidation:</strong> Chemical process that involves the gain of oxygen (or loss of hydrogen).</p>
<ul>
  <li>Example 1: $2\\text{Cu} + \\text{O}_2 \\xrightarrow{\\Delta} 2\\text{CuO}$ (Copper gains oxygen to form black copper(II) oxide).</li>
  <li>Example 2: $\\text{C} + \\text{O}_2 \\longrightarrow \\text{CO}_2$ (Carbon gains oxygen).</li>
</ul>
<p><strong>(b) Reduction:</strong> Chemical process that involves the loss of oxygen (or gain of hydrogen).</p>
<ul>
  <li>Example 1: $\\text{CuO} + \\text{H}_2 \\xrightarrow{\\Delta} \\text{Cu} + \\text{H}_2\\text{O}$ ($\\text{CuO}$ loses oxygen to form copper).</li>
  <li>Example 2: $\\text{ZnO} + \\text{C} \\longrightarrow \\text{Zn} + \\text{CO}$ ($\\text{ZnO}$ loses oxygen).</li>
</ul>`,
      [
        { key: 'Oxidation definition and two balanced equations', marks: '2 Marks' },
        { key: 'Reduction definition and two balanced equations', marks: '2 Marks' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q25',
      'Exercise Q17',
      'A shiny brown-coloured element \'X\' on heating in air becomes black in colour. Name the element \'X\' and the black coloured compound formed. Write the balanced equation.',
      2,
      `<p><strong>Identification and Chemical Equation:</strong></p>
<ol>
  <li>The shiny reddish-brown element \'X\' is <strong>Copper metal ($\\text{Cu}$)</strong>.</li>
  <li>When copper powder is heated in air, it reacts with oxygen to form a black surface coating of <strong>Copper(II) oxide ($\\text{CuO}$)</strong>.</li>
  <li><strong>Balanced Equation:</strong><br>
    $$2\\text{Cu}(s) + \\text{O}_2(g) \\xrightarrow{\\Delta} 2\\text{CuO}(s) \\quad \\text{(Black)}$$
  </li>
</ol>`,
      [
        { key: 'Identification of element X as Copper and black compound as Copper(II) oxide', marks: '1 Mark' },
        { key: 'Balanced chemical equation with heat symbol', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q26',
      'Exercise Q18',
      'Why do we apply paint on iron articles?',
      2,
      `<p><strong>Mechanism of Rust Prevention:</strong></p>
<p>Iron rusts when exposed to both atmospheric oxygen and moisture:</p>
$$4\\text{Fe} + 3\\text{O}_2 + 2x\\text{H}_2\\text{O} \\longrightarrow 2\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O} \\quad \\text{(Rust)}$$
<p>Applying a coat of paint creates an impermeable protective barrier on the iron surface that cuts off direct contact with atmospheric oxygen and water vapor, thereby preventing rusting and prolonging durability.</p>`,
      [
        { key: 'Stating iron requires oxygen and moisture to corrode', marks: '1 Mark' },
        { key: 'Explaining paint acts as physical barrier preventing contact', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q27',
      'Exercise Q19',
      'Oil and fat containing food items are flushed with nitrogen. Why?',
      2,
      `<p><strong>Prevention of Rancidity:</strong></p>
<p>Oils and fats in food items undergo slow oxidation in air, producing foul-smelling and bad-tasting volatile substances (a process called <strong>rancidity</strong>). Nitrogen is an unreactive, chemically inert gas. Flushing food packets with nitrogen displaces oxygen and provides an inert atmosphere that prevents oxidation of fats, keeping snacks crisp and fresh.</p>`,
      [
        { key: 'Explaining rancidity caused by oxidation of fats/oils in air', marks: '1 Mark' },
        { key: 'Explaining nitrogen is inert and displaces oxygen to prevent rancidity', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch1-q28',
      'Exercise Q20',
      'Explain the following terms with one example each: (a) Corrosion, (b) Rancidity.',
      3,
      `<p><strong>(a) Corrosion:</strong> The slow process of destruction and deterioration of a metal surface by the chemical or electrochemical action of atmospheric gases, moisture, or acids.</p>
<p><em>Example:</em> Rusting of iron (formation of reddish-brown hydrated ferric oxide $\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}$) and blackening of silver articles due to formation of silver sulphide ($\\text{Ag}_2\\text{S}$).</p>
<p><strong>(b) Rancidity:</strong> The aerial oxidation of unsaturated fats and oils present in food items resulting in an unpleasant smell and rancid taste.</p>
<p><em>Example:</em> Butter left at room temperature for several days develops a foul taste and sour smell due to release of butyric acid.</p>`,
      [
        { key: 'Corrosion definition with balanced example (rusting)', marks: '1.5 Marks' },
        { key: 'Rancidity definition with everyday example', marks: '1.5 Marks' }
      ]
    )
  ];

  const cbqHtml = `  <div class="cbq-section">
    <div class="cbq-header"><span>🎯 Competency &amp; Case Study Questions (HOTS) — Chapter 1</span><span class="cbq-badge">CBSE Board 2026-27</span></div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #34d399;">
        <div class="cbq-type" style="color:#059669;">Case Study Question • Rancidity & Food Preservation</div>
        <div class="cbq-question">A food technologist observed that potato chips fried in edible vegetable oil develop an unpleasant foul smell and rancid taste when left in open containers for 3 weeks, whereas chips sealed in commercial bags remain crisp and fresh for 6 months. (i) Name the chemical phenomenon responsible for spoilage. (ii) Which gas is flushed into chips packets to prevent this change and why? (iii) Name two antioxidant additives used in fatty food preservation.</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer"><p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>(i) Chemical Phenomenon:</strong> <strong>Rancidity</strong> (specifically oxidative rancidity). Fats and oils in open air undergo slow oxidation by atmospheric oxygen to form volatile carboxylic acids, aldehydes, and ketones with rancid odor.</li>
  <li><strong>(ii) Gas Used:</strong> <strong>Nitrogen gas ($\text{N}_2$)</strong>. Nitrogen is an unreactive, inert gas at room temperature due to its strong triple covalent bond ($N \equiv N$). Flushing with nitrogen expels atmospheric oxygen and provides an inert atmosphere that prevents oxidation of fats.</li>
  <li><strong>(iii) Antioxidant Additives:</strong> BHA (Butylated Hydroxyanisole) and BHT (Butylated Hydroxytoluene).</li>
</ol></div>
      </div>
    </div>
  </div>`;

  return `<section class="chapter-section" id="ch1">
  <div class="chapter-header">
    <div class="ch-badge">1</div>
    <div class="chapter-header-info">
      <div class="ch-category">Science • Class 10 Board Exam (NCERT Rationalized)</div>
      <h2>Chapter 1: Chemical Reactions and Equations</h2>
      <p>Balancing Equations, Types of Reactions (Combination, Decomposition, Displacement, Redox) & Everyday Effects — CBSE Board Marking Scheme 2026-27</p>
    </div>
  </div>
  <div class="ex-div">NCERT In-Text Questions (Pages 6, 10, 13) &amp; Chapter-End Exercises (Questions 1 to 20)</div>

${qCards.join('\n\n')}

${cbqHtml}
  <div class="chapter-nav-btns">
    <div></div>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(2)">Next Chapter →</button>
  </div>
</section>
`;
}

module.exports = {
  getChapter1Html,
  renderQCard
};
