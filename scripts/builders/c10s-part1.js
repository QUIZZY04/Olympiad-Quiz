// scripts/builders/c10s-part1.js
// 100% Literal Verbatim Physical NCERT Questions for Class 10 Science: Chapters 1 to 4 (Chemistry)
// Full In-Text and End-of-Chapter Exercises with CBSE Step Marking Schemes 2026-27

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

// Reuse existing complete Chapter 1 from c10s-ch1-build.js
const ch1Module = require('./c10s-ch1-build.js');
const getChapter1Html = ch1Module.getChapter1Html;

// ============================================================================
// CHAPTER 2: ACIDS, BASES AND SALTS (19 In-Text Qs + 15 Exercises = 34 Qs + 1 CBQ)
// ============================================================================
function getChapter2Html() {
  const qCards = [
    // --- In-Text Page 18 ---
    renderQCard(
      'c10s-ch2-q1',
      'In-Text Page 18 • Q1',
      'You have been provided with three test tubes. One of them contains distilled water and the other two contain an acidic solution and a basic solution, respectively. If you are given only red litmus paper, how will you identify the contents of each test tube?',
      3,
      `<p><strong>Identification Procedure using Red Litmus Paper only:</strong></p>
<ol>
  <li>Dip a strip of red litmus paper into each of the three test tubes one by one.</li>
  <li>The test tube in which the red litmus turns <strong>blue</strong> contains the <strong>basic solution</strong>.</li>
  <li>Now take this newly turned <strong>blue litmus paper</strong> and dip it into the remaining two test tubes.</li>
  <li>The solution that turns this blue litmus paper back to <strong>red</strong> is the <strong>acidic solution</strong>.</li>
  <li>The remaining test tube which causes <strong>no colour change</strong> with either red litmus or blue litmus contains <strong>distilled water</strong> (neutral).</li>
</ol>`,
      [
        { key: 'Red litmus turns blue identifies the basic solution', marks: '1 Mark' },
        { key: 'Using the resulting blue litmus to turn red identifies acidic solution', marks: '1 Mark' },
        { key: 'No color change on either identifies neutral distilled water', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 22 ---
    renderQCard(
      'c10s-ch2-q2',
      'In-Text Page 22 • Q1',
      'Why should curd and sour substances not be kept in brass and copper vessels?',
      2,
      `<p><strong>Chemical Reason:</strong></p>
<p>Curd and other sour food substances contain organic acids (such as lactic acid). These acids react chemically with the metals copper and zinc (present in brass) to form <strong>toxic, poisonous metal salts</strong> and liberate hydrogen gas:</p>
$$\\text{Acid} + \\text{Metal (Cu, Zn)} \\longrightarrow \\text{Toxic Metal Salt} + \\text{H}_2(g)$$
<p>Consuming food contaminated with these toxic copper/zinc compounds causes severe food poisoning and damage to health. Therefore, sour substances should be stored in glass, ceramic, or stainless steel containers.</p>`,
      [
        { key: 'Mentioning curd/sour foods contain organic acids', marks: '1 Mark' },
        { key: 'Reaction with brass/copper produces toxic poisonous salts causing food poisoning', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q3',
      'In-Text Page 22 • Q2',
      'Which gas is usually liberated when an acid reacts with a metal? Illustrate with an example. How will you test for the presence of this gas?',
      3,
      `<p><strong>1. Gas Liberated:</strong> <strong>Hydrogen gas ($\\text{H}_2$)</strong> is liberated when an active metal reacts with dilute acid.</p>
<p><strong>2. Illustrative Example:</strong></p>
$$\\text{Zn}(s) + \\text{H}_2\\text{SO}_4(aq) \\longrightarrow \\text{ZnSO}_4(aq) + \\text{H}_2(g)\\uparrow$$
<p><strong>3. Confirmatory Test for Hydrogen Gas:</strong></p>
<p>Pass the evolved gas through a soap solution so that soap bubbles filled with gas rise into the air. Bring a burning candle or burning splinter near the gas bubble; the gas burns with a characteristic <strong>'pop' sound</strong>, confirming the presence of hydrogen gas.</p>`,
      [
        { key: 'Identification of hydrogen gas (H2)', marks: '1 Mark' },
        { key: 'Balanced chemical equation with zinc and dilute sulphuric acid', marks: '1 Mark' },
        { key: 'Burning splinter produces pop sound confirmatory test', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q4',
      'In-Text Page 22 • Q3',
      'Metal compound A reacts with dilute hydrochloric acid to produce effervescence. The gas evolved extinguishes a burning candle. Write a balanced chemical equation for the reaction if one of the compounds formed is calcium chloride.',
      3,
      `<p><strong>Deduction of Metal Compound A:</strong></p>
<ol>
  <li>The gas evolved extinguishes a burning candle and causes brisk effervescence; therefore, the evolved gas must be <strong>carbon dioxide ($\\text{CO}_2$)</strong>.</li>
  <li>Since one of the products is calcium chloride ($\\text{CaCl}_2$) and the gas is $\\text{CO}_2$, the metal compound A must be a calcium carbonate or calcium hydrogen carbonate. In solid form, it is <strong>Calcium carbonate ($\\text{CaCO}_3$)</strong>.</li>
</ol>
<p><strong>Balanced Chemical Equation:</strong></p>
$$\\text{CaCO}_3(s) + 2\\text{HCl}(aq) \\longrightarrow \\text{CaCl}_2(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)\\uparrow$$`,
      [
        { key: 'Identifying gas as CO2 because it extinguishes burning candle with effervescence', marks: '1 Mark' },
        { key: 'Identifying compound A as Calcium carbonate (CaCO3)', marks: '1 Mark' },
        { key: 'Balanced chemical equation with state symbols', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 25 ---
    renderQCard(
      'c10s-ch2-q5',
      'In-Text Page 25 • Q1',
      'Why do $\\text{HCl}$, $\\text{HNO}_3$, etc., show acidic characters in aqueous solutions while solutions of compounds like alcohol and glucose do not show acidic character?',
      3,
      `<p><strong>Explanation:</strong></p>
<ol>
  <li>Acidic behaviour is solely due to the presence of free <strong>hydrogen ions $\\text{H}^+(aq)$ or hydronium ions $\\text{H}_3\\text{O}^+$</strong> in aqueous solution.</li>
  <li>Compounds like $\\text{HCl}$ and $\\text{HNO}_3$ are polar covalent molecules. In water, they ionise completely to produce hydronium ions:
    $$\\text{HCl} + \\text{H}_2\\text{O} \\longrightarrow \\text{H}_3\\text{O}^+ + \\text{Cl}^-$$
  </li>
  <li>Compounds like glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) and ethyl alcohol ($\\text{C}_2\\text{H}_5\\text{OH}$) also contain hydrogen, but their hydrogen atoms are bonded by non-ionisable covalent bonds. They do not dissociate in water to produce $\\text{H}^+$ or $\\text{H}_3\\text{O}^+$ ions. Hence, they do not show acidic character or turn blue litmus red.</li>
</ol>`,
      [
        { key: 'Stating acidic character requires H+(aq) or H3O+ ions', marks: '1 Mark' },
        { key: 'Ionisation of HCl in water to yield hydronium ions', marks: '1 Mark' },
        { key: 'Absence of ionisation in covalent glucose and alcohol molecules', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q6',
      'In-Text Page 25 • Q2',
      'Why does an aqueous solution of an acid conduct electricity?',
      2,
      `<p><strong>Mechanism of Electrical Conduction:</strong></p>
<p>Electrical conductivity in liquids requires the presence of mobile, charge-carrying particles (ions). When an acid dissolves in water, it undergoes ionisation to produce freely moving cations (hydronium ions, $\\text{H}_3\\text{O}^+$) and anions (such as $\\text{Cl}^-$, $\\text{SO}_4^{2-}$). Under an electric potential difference, these mobile ions migrate towards oppositely charged electrodes, thereby conducting electric current.</p>`,
      [
        { key: 'Dissociation of acids in water into mobile ions (H3O+ and acid anions)', marks: '1 Mark' },
        { key: 'Migration of mobile charge-carrying ions carries electric current', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q7',
      'In-Text Page 25 • Q3',
      'Why does dry $\\text{HCl}$ gas not change the colour of the dry litmus paper?',
      2,
      `<p><strong>Reason:</strong></p>
<p>Dry $\\text{HCl}$ gas contains covalent hydrogen chloride molecules and exists in the molecular form without any moisture. Acids exhibit acidic properties and ionise to release hydrogen ions ($\\text{H}^+$) only in the presence of water:</p>
$$\\text{HCl} + \\text{H}_2\\text{O} \\longrightarrow \\text{H}_3\\text{O}^+ + \\text{Cl}^-$$
<p>In the total absence of moisture (dry gas and dry litmus), $\\text{HCl}$ cannot dissociate to form $\\text{H}^+(aq)$ or $\\text{H}_3\\text{O}^+$ ions. Since hydrogen ions are necessary to effect the colour change of litmus indicator, dry $\\text{HCl}$ gas cannot change the colour of dry blue litmus paper.</p>`,
      [
        { key: 'Acids dissociate to form H+ ions only in the presence of water', marks: '1 Mark' },
        { key: 'Dry HCl has no free ions, hence dry litmus remains unchanged', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q8',
      'In-Text Page 25 • Q4',
      'While diluting an acid, why is it recommended that the acid should be added to water and not water to the acid?',
      3,
      `<p><strong>Thermodynamic and Safety Rationale:</strong></p>
<p>The dilution of a concentrated mineral acid (such as concentrated $\\text{H}_2\\text{SO}_4$) is an <strong>extremely exothermic process</strong> that liberates a large quantity of heat energy.</p>
<ul>
  <li><strong>If water is added to concentrated acid:</strong> The small drop of water reacts with an immense excess of concentrated acid. The enormous localized heat instantaneously vaporizes the water into steam, causing the corrosive hot acid to <strong>splash violently</strong> onto the face and hands of the operator, causing severe chemical burns. The thermal shock can also shatter the glass container.</li>
  <li><strong>If acid is added slowly to water:</strong> Water has a very high specific heat capacity. Adding the concentrated acid dropwise down the sides of the container into a large volume of water with constant stirring allows the heat generated to be absorbed and dissipated safely throughout the water without boiling or splashing.</li>
</ul>`,
      [
        { key: 'Stating dilution is strongly exothermic', marks: '1 Mark' },
        { key: 'Adding water to acid causes localized boiling, splashing, and glass breakage', marks: '1 Mark' },
        { key: 'Correct method: slow addition of acid to water with constant stirring to absorb heat safely', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q9',
      'In-Text Page 25 • Q5',
      'How is the concentration of hydronium ions ($\\text{H}_3\\text{O}^+$) affected when a solution of an acid is diluted?',
      2,
      `<p><strong>Effect of Dilution on $[\\text{H}_3\\text{O}^+]$:</strong></p>
<p>Dilution means adding more water to an existing acid solution without changing the amount of acid solute. As water is added, the total volume of the solution increases, but the total number of hydronium ions remains essentially the same. Therefore, the <strong>concentration of hydronium ions ($\\text{H}_3\\text{O}^+$) per unit volume decreases</strong>, resulting in a decrease in acidity and an increase in pH.</p>`,
      [
        { key: 'Concentration of hydronium ions per unit volume decreases on dilution', marks: '1.5 Marks' },
        { key: 'Relating to increase in solution volume', marks: '0.5 Marks' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q10',
      'In-Text Page 25 • Q6',
      'How is the concentration of hydroxide ions ($\\text{OH}^-$) affected when excess base is dissolved in a solution of sodium hydroxide?',
      2,
      `<p><strong>Effect of Dissolving Excess Base:</strong></p>
<p>When excess sodium hydroxide (a strong base) is dissolved in an existing $\\text{NaOH}$ solution, it dissociates completely into additional sodium ions ($\\text{Na}^+$) and hydroxide ions ($\\text{OH}^-$):</p>
$$\\text{NaOH}(s) \\xrightarrow{\\text{water}} \\text{Na}^+(aq) + \\text{OH}^-(aq)$$
<p>Since more $\\text{OH}^-$ ions are added to the existing volume of solution, the <strong>concentration of hydroxide ions ($\\text{OH}^-$) per unit volume increases</strong>, making the solution more basic and raising its pH.</p>`,
      [
        { key: 'Stating that concentration of OH- ions per unit volume increases', marks: '1.5 Marks' },
        { key: 'Mentioning additional dissociation of added NaOH', marks: '0.5 Marks' }
      ]
    ),

    // --- In-Text Page 28 ---
    renderQCard(
      'c10s-ch2-q11',
      'In-Text Page 28 • Q1',
      'You have two solutions, A and B. The pH of solution A is 6 and pH of solution B is 8. Which solution has more hydrogen ion concentration? Which of this is acidic and which one is basic?',
      2,
      `<p><strong>Analysis of pH Values:</strong></p>
<ol>
  <li><strong>Hydrogen Ion Concentration:</strong> $\\text{pH} = -\\log_{10}[\\text{H}^+]$. A lower pH value signifies a higher hydrogen ion concentration. Therefore, <strong>Solution A (pH = 6)</strong> has a higher $[\\text{H}^+]$ concentration than Solution B (pH = 8). Specifically, $[\\text{H}^+]$ in A is $10^{-6}\\text{ M}$, which is 100 times higher than that in B ($10^{-8}\\text{ M}$).</li>
  <li><strong>Acidic or Basic Nature:</strong>
    <ul>
      <li>Solution A ($\\text{pH} = 6 < 7$) is <strong>acidic</strong>.</li>
      <li>Solution B ($\\text{pH} = 8 > 7$) is <strong>basic</strong>.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Solution A has higher H+ ion concentration (lower pH = higher [H+])', marks: '1 Mark' },
        { key: 'Solution A is acidic (pH < 7) and Solution B is basic (pH > 7)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q12',
      'In-Text Page 28 • Q2',
      'What effect does the concentration of $\\text{H}^+(aq)$ ions have on the nature of the solution?',
      2,
      `<p><strong>Effect of $[\\text{H}^+(aq)]$ Concentration:</strong></p>
<p>The concentration of $\\text{H}^+(aq)$ ions directly determines whether a solution is acidic, neutral, or basic, as well as the strength of its acidity:</p>
<ul>
  <li>If $[\\text{H}^+] > 10^{-7}\\text{ M}$ (i.e., $\\text{pH} < 7$), the solution is <strong>acidic</strong>. The higher the concentration of $\\text{H}^+$ ions, the more strongly acidic the solution is.</li>
  <li>If $[\\text{H}^+] = 10^{-7}\\text{ M}$ (i.e., $\\text{pH} = 7$), the solution is <strong>neutral</strong>.</li>
  <li>If $[\\text{H}^+] < 10^{-7}\\text{ M}$ (i.e., $\\text{pH} > 7$), the solution is <strong>basic</strong>.</li>
</ul>`,
      [
        { key: 'Higher [H+] makes the solution more acidic (lower pH)', marks: '1 Mark' },
        { key: 'Distinction between acidic ([H+] > 10^-7), neutral, and basic ([H+] < 10^-7)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q13',
      'In-Text Page 28 • Q3',
      'Do basic solutions also have $\\text{H}^+(aq)$ ions? If yes, then why are these basic?',
      2,
      `<p><strong>Presence of $\\text{H}^+$ in Basic Solutions:</strong></p>
<p><strong>Yes</strong>, basic solutions also contain $\\text{H}^+(aq)$ ions. In any aqueous solution, water self-ionises according to the ionic product of water ($K_w = [\\text{H}^+][\\text{OH}^-] = 10^{-14}$ at $25^\\circ\\text{C}$):</p>
$$\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}^+ + \\text{OH}^-$$
<p>A solution is basic because the concentration of <strong>hydroxide ions ($\\text{OH}^-$) is much greater</strong> than the concentration of hydrogen ions ($\\text{H}^+$):</p>
$$[\\text{OH}^-] \\gg [\\text{H}^+]$$
<p>Because hydroxide ions vastly predominate over hydrogen ions, the solution exhibits alkaline/basic properties.</p>`,
      [
        { key: 'Yes, basic solutions contain H+ ions due to water auto-ionisation', marks: '1 Mark' },
        { key: 'They are basic because [OH-] is far greater than [H+]', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q14',
      'In-Text Page 28 • Q4',
      'Under what soil condition do you think a farmer would treat the soil of his fields with quick lime (calcium oxide) or slaked lime (calcium hydroxide) or chalk (calcium carbonate)?',
      2,
      `<p><strong>Soil Condition and Agricultural Treatment:</strong></p>
<p>A farmer treats the soil of his fields with quick lime ($\\text{CaO}$), slaked lime ($\\text{Ca(OH)}_2$), or chalk ($\\text{CaCO}_3$) when the soil becomes <strong>too acidic (pH significantly below 6.5)</strong>.</p>
<p>Most agricultural crops grow best in neutral or near-neutral soil (pH $6.5 - 7.5$). Acid rain, excessive application of chemical nitrogenous fertilisers, or decay of organic matter lowers the soil pH, stunting crop growth. Since quick lime, slaked lime, and chalk are basic substances, they react with and <strong>neutralise excess soil acids</strong>, restoring the soil to an optimum pH for healthy plant growth.</p>`,
      [
        { key: 'Condition: When soil is too acidic (pH < 6.5)', marks: '1 Mark' },
        { key: 'Basic lime/chalk neutralises excess soil acidity to restore optimal pH', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 33 ---
    renderQCard(
      'c10s-ch2-q15',
      'In-Text Page 33 • Q1',
      'What is the common name of the compound $\\text{CaOCl}_2$?',
      1,
      `<p>The common name of $\\text{CaOCl}_2$ is <strong>Bleaching Powder</strong> (Chemical name: Calcium oxychloride).</p>`,
      [
        { key: 'Bleaching powder (Calcium oxychloride)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q16',
      'In-Text Page 33 • Q2',
      'Name the substance which on treatment with chlorine yields bleaching powder.',
      1,
      `<p>The substance is <strong>Dry Slaked Lime</strong> (Calcium hydroxide, $\\text{Ca(OH)}_2$).</p>
$$\\text{Ca(OH)}_2 + \\text{Cl}_2 \\longrightarrow \\text{CaOCl}_2 + \\text{H}_2\\text{O}$$`,
      [
        { key: 'Dry slaked lime / Calcium hydroxide [Ca(OH)2]', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q17',
      'In-Text Page 33 • Q3',
      'Name the sodium compound which is used for softening hard water.',
      1,
      `<p>The sodium compound is <strong>Washing Soda</strong> (Sodium carbonate decahydrate, $\\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}$).</p>
<p>It precipitates dissolved calcium and magnesium ions as insoluble carbonates, eliminating permanent hardness.</p>`,
      [
        { key: 'Washing soda / Sodium carbonate decahydrate (Na2CO3 . 10H2O)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q18',
      'In-Text Page 33 • Q4',
      'What will happen if a solution of sodium hydrogen carbonate is heated? Give the equation of the reaction involved.',
      2,
      `<p><strong>Thermal Decomposition of Sodium Hydrogen Carbonate:</strong></p>
<p>When a solution of sodium hydrogen carbonate (baking soda, $\\text{NaHCO}_3$) is heated, it decomposes to produce <strong>sodium carbonate</strong>, <strong>water</strong>, and liberates <strong>carbon dioxide gas</strong> with effervescence:</p>
$$2\\text{NaHCO}_3(s) \\xrightarrow{\\Delta} \\text{Na}_2\\text{CO}_3(s) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)\\uparrow$$`,
      [
        { key: 'Stating formation of sodium carbonate, water, and carbon dioxide', marks: '1 Mark' },
        { key: 'Balanced thermal decomposition equation: 2NaHCO3 -> Na2CO3 + H2O + CO2', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q19',
      'In-Text Page 33 • Q5',
      'Write an equation to show the reaction between Plaster of Paris and water.',
      2,
      `<p><strong>Setting Reaction of Plaster of Paris:</strong></p>
<p>When Plaster of Paris (calcium sulphate hemihydrate) is mixed with water, it rehydrates and sets in about 10 to 15 minutes into a hard, crystalline solid mass called <strong>Gypsum</strong>:</p>
$$\\text{CaSO}_4 \\cdot \\frac{1}{2}\\text{H}_2\\text{O}(s) + 1\\frac{1}{2}\\text{H}_2\\text{O}(l) \\longrightarrow \\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}(s)$$
$$\\text{(Plaster of Paris)} + \\text{(Water)} \\longrightarrow \\text{(Gypsum - Hard solid mass)}$$`,
      [
        { key: 'Correct chemical formulas: CaSO4.1/2H2O and CaSO4.2H2O', marks: '1 Mark' },
        { key: 'Balanced hydration equation producing gypsum', marks: '1 Mark' }
      ]
    ),

    // --- End of Chapter Exercises (Q1 to Q15) ---
    renderQCard(
      'c10s-ch2-q20',
      'NCERT Exercise • Q1',
      'A solution turns red litmus blue, its pH is likely to be: (a) 1 (b) 4 (c) 5 (d) 10.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(d) 10</strong></p>
<p><strong>Reason:</strong> A solution that turns red litmus blue is <strong>basic/alkaline</strong> in nature. Bases have a pH value greater than 7 on the pH scale. Among the given choices, only 10 is greater than 7; values 1, 4, and 5 indicate acidic solutions.</p>`,
      [
        { key: 'Option (d) 10 with reason (bases turn red litmus blue and have pH > 7)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q21',
      'NCERT Exercise • Q2',
      'A solution reacts with crushed egg-shells to give a gas that turns lime-water milky. The solution contains: (a) $\\text{NaCl}$ (b) $\\text{HCl}$ (c) $\\text{LiCl}$ (d) $\\text{KCl}$.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(b) $\\text{HCl}$</strong></p>
<p><strong>Reason:</strong> Crushed egg-shells are composed predominantly of <strong>calcium carbonate ($\\text{CaCO}_3$)</strong>. When $\\text{CaCO}_3$ reacts with hydrochloric acid ($\\text{HCl}$), it liberates carbon dioxide gas ($\\text{CO}_2$):</p>
$$\\text{CaCO}_3 + 2\\text{HCl} \\longrightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$$
<p>The evolved $\\text{CO}_2$ reacts with lime water ($\\text{Ca(OH)}_2$) to form insoluble white calcium carbonate precipitate, turning lime water milky.</p>`,
      [
        { key: 'Option (b) HCl with reaction explanation and lime water test', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q22',
      'NCERT Exercise • Q3',
      '10 mL of a solution of $\\text{NaOH}$ is found to be completely neutralised by 8 mL of a given solution of $\\text{HCl}$. If we take 20 mL of the same solution of $\\text{NaOH}$, the amount $\\text{HCl}$ solution (the same solution as before) required to neutralise it will be: (a) 4 mL (b) 8 mL (c) 12 mL (d) 16 mL.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(d) 16 mL</strong></p>
<p><strong>Calculation:</strong></p>
<ul>
  <li>Volume of $\\text{HCl}$ required for $10\\text{ mL of NaOH} = 8\\text{ mL}$.</li>
  <li>Volume of $\\text{HCl}$ required for $1\\text{ mL of NaOH} = \\frac{8}{10}\\text{ mL} = 0.8\\text{ mL}$.</li>
  <li>Volume of $\\text{HCl}$ required for $20\\text{ mL of NaOH} = 20 \\times 0.8 = 16\\text{ mL}$.</li>
</ul>
<p>Since the volume of base is doubled, the volume of acid required for complete neutralisation is also doubled: $2 \\times 8\\text{ mL} = 16\\text{ mL}$.</p>`,
      [
        { key: 'Option (d) 16 mL with direct proportionality calculation', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q23',
      'NCERT Exercise • Q4',
      'Which one of the following types of medicines is used for treating indigestion? (a) Antibiotic (b) Analgesic (c) Antacid (d) Antiseptic.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(c) Antacid</strong></p>
<p><strong>Reason:</strong> Indigestion is caused by the secretion of excess hydrochloric acid in the stomach (hyperacidity). <strong>Antacids</strong> are mild, non-corrosive bases (such as magnesium hydroxide $\\text{Mg(OH)}_2$ or sodium hydrogen carbonate $\\text{NaHCO}_3$) that neutralise excess stomach acid and bring the gastric pH to a comfortable level.</p>`,
      [
        { key: 'Option (c) Antacid with explanation of neutralising stomach acid', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q24',
      'NCERT Exercise • Q5',
      'Write word equations and then balanced equations for the reaction taking place when: (a) dilute sulphuric acid reacts with zinc granules. (b) dilute hydrochloric acid reacts with magnesium ribbon. (c) dilute sulphuric acid reacts with aluminium powder. (d) dilute hydrochloric acid reacts with iron filings.',
      4,
      `<p><strong>Word Equations and Balanced Equations:</strong></p>
<ol>
  <li><strong>(a) Dilute sulphuric acid + Zinc granules:</strong><br>
    <em>Word equation:</em> $\\text{Zinc} + \\text{Sulphuric acid} \\longrightarrow \\text{Zinc sulphate} + \\text{Hydrogen}$<br>
    <em>Balanced equation:</em>
    $$\\text{Zn}(s) + \\text{H}_2\\text{SO}_4(aq) \\longrightarrow \\text{ZnSO}_4(aq) + \\text{H}_2(g)\\uparrow$$
  </li>
  <li><strong>(b) Dilute hydrochloric acid + Magnesium ribbon:</strong><br>
    <em>Word equation:</em> $\\text{Magnesium} + \\text{Hydrochloric acid} \\longrightarrow \\text{Magnesium chloride} + \\text{Hydrogen}$<br>
    <em>Balanced equation:</em>
    $$\\text{Mg}(s) + 2\\text{HCl}(aq) \\longrightarrow \\text{MgCl}_2(aq) + \\text{H}_2(g)\\uparrow$$
  </li>
  <li><strong>(c) Dilute sulphuric acid + Aluminium powder:</strong><br>
    <em>Word equation:</em> $\\text{Aluminium} + \\text{Sulphuric acid} \\longrightarrow \\text{Aluminium sulphate} + \\text{Hydrogen}$<br>
    <em>Balanced equation:</em>
    $$2\\text{Al}(s) + 3\\text{H}_2\\text{SO}_4(aq) \\longrightarrow \\text{Al}_2(\\text{SO}_4)_3(aq) + 3\\text{H}_2(g)\\uparrow$$
  </li>
  <li><strong>(d) Dilute hydrochloric acid + Iron filings:</strong><br>
    <em>Word equation:</em> $\\text{Iron} + \\text{Hydrochloric acid} \\longrightarrow \\text{Iron(II) chloride} + \\text{Hydrogen}$<br>
    <em>Balanced equation:</em>
    $$\\text{Fe}(s) + 2\\text{HCl}(aq) \\longrightarrow \\text{FeCl}_2(aq) + \\text{H}_2(g)\\uparrow$$
  </li>
</ol>`,
      [
        { key: 'Reaction (a): Word and balanced equation for Zn + H2SO4', marks: '1 Mark' },
        { key: 'Reaction (b): Word and balanced equation for Mg + 2HCl', marks: '1 Mark' },
        { key: 'Reaction (c): Word and balanced equation for 2Al + 3H2SO4', marks: '1 Mark' },
        { key: 'Reaction (d): Word and balanced equation for Fe + 2HCl', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q25',
      'NCERT Exercise • Q6',
      'Compounds such as alcohols and glucose also contain hydrogen but are not categorized as acids. Describe an activity to prove it.',
      3,
      `<p><strong>Experimental Activity: Electrical Conductivity Test</strong></p>
<ol>
  <li><strong>Setup:</strong> Take a beaker and fix two iron nails on a rubber cork. Place the cork inside the beaker. Connect the nails to the two terminals of a 6-volt battery through a torch bulb and an on/off switch.</li>
  <li><strong>Test with Acid:</strong> Pour dilute $\\text{HCl}$ solution into the beaker and switch on the current. <strong>Observation:</strong> The bulb glows brightly, proving that $\\text{HCl}$ ionises in water to form mobile ions ($\\text{H}_3\\text{O}^+$ and $\\text{Cl}^-$) that conduct electricity.</li>
  <li><strong>Test with Glucose and Alcohol:</strong> Thoroughly rinse the beaker. Repeat the experiment separately with aqueous glucose solution and aqueous ethanol solution. <strong>Observation:</strong> In both cases, the bulb does not glow at all.</li>
  <li><strong>Conclusion:</strong> Although glucose and alcohol molecules contain hydrogen, they do not dissociate into $\\text{H}^+(aq)$ ions in water. Since acidic character is due to the formation of free $\\text{H}^+(aq)$ ions, glucose and alcohol are not categorized as acids.</li>
</ol>`,
      [
        { key: 'Experimental setup with cork, nails, battery, bulb, and switch', marks: '1 Mark' },
        { key: 'Observations: bulb glows with HCl but fails to glow with glucose and alcohol', marks: '1 Mark' },
        { key: 'Deduction: glucose/alcohol do not ionise to give H+ ions, hence non-acidic', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q26',
      'NCERT Exercise • Q7',
      'Why does distilled water not conduct electricity, whereas rain water does?',
      2,
      `<p><strong>Explanation:</strong></p>
<ol>
  <li><strong>Distilled Water:</strong> Distilled water is pure water free from all dissolved mineral salts. Because water is a very weak electrolyte, it undergoes negligible auto-ionisation ($[\\text{H}^+] = [\\text{OH}^-] = 10^{-7}\\text{ M}$). Due to the virtually complete absence of free mobile ions, distilled water does not conduct electricity.</li>
  <li><strong>Rain Water:</strong> As rain drops fall through the atmosphere, they dissolve atmospheric gases such as carbon dioxide ($\\text{CO}_2$), sulphur dioxide ($\\text{SO}_2$), and nitrogen oxides. Dissolved $\\text{CO}_2$ forms carbonic acid:
    $$\\text{CO}_2(g) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}_2\\text{CO}_3(aq) \\rightleftharpoons \\text{H}^+(aq) + \\text{HCO}_3^-(aq)$$
    The presence of these mobile hydronium and bicarbonate ions enables rainwater to conduct electricity.</li>
</ol>`,
      [
        { key: 'Distilled water is pure and lacks mobile ions, hence insulator', marks: '1 Mark' },
        { key: 'Rainwater dissolves atmospheric CO2 forming carbonic acid ions (H+ and HCO3-) that conduct', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q27',
      'NCERT Exercise • Q8',
      'Why do acids not show acidic behaviour in the absence of water?',
      2,
      `<p><strong>Fundamental Chemical Principle:</strong></p>
<p>Acidic behaviour (such as sour taste, turning blue litmus red, reacting with metals to liberate $\\text{H}_2$) is strictly caused by the presence of free <strong>hydrogen ions $\\text{H}^+(aq)$ or hydronium ions $\\text{H}_3\\text{O}^+$</strong>.</p>
<p>An acid molecule consists of polar covalent bonds. It can only ionise and dissociate to release $\\text{H}^+$ ions when water molecules are present to hydrate and pull apart the ions via dipole-dipole attractions:</p>
$$\\text{HX} + \\text{H}_2\\text{O} \\longrightarrow \\text{H}_3\\text{O}^+ + \\text{X}^-$$
<p>In the complete absence of water, acids exist entirely as neutral covalent molecules without free hydronium ions, and therefore cannot exhibit acidic behaviour.</p>`,
      [
        { key: 'Acidic properties depend on the presence of free H+(aq) / H3O+ ions', marks: '1 Mark' },
        { key: 'Covalent acid molecules dissociate into ions only when hydrated by water', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q28',
      'NCERT Exercise • Q9',
      'Five solutions A, B, C, D and E when tested with universal indicator showed pH as 4, 1, 11, 7 and 9, respectively. Which solution is: (a) neutral? (b) strongly alkaline? (c) strongly acidic? (d) weakly acidic? (e) weakly alkaline? Arrange the pH in increasing order of hydrogen-ion concentration.',
      3,
      `<p><strong>Solution Classification based on pH:</strong></p>
<ul>
  <li><strong>(a) Neutral:</strong> <strong>Solution D (pH = 7)</strong></li>
  <li><strong>(b) Strongly alkaline:</strong> <strong>Solution C (pH = 11)</strong></li>
  <li><strong>(c) Strongly acidic:</strong> <strong>Solution B (pH = 1)</strong></li>
  <li><strong>(d) Weakly acidic:</strong> <strong>Solution A (pH = 4)</strong></li>
  <li><strong>(e) Weakly alkaline:</strong> <strong>Solution E (pH = 9)</strong></li>
</ul>
<p><strong>Arrangement in Increasing Order of Hydrogen-ion Concentration ($[\\text{H}^+]$):</strong></p>
<p>Since $\\text{pH} = -\\log[\\text{H}^+]$, higher pH corresponds to lower $[\\text{H}^+]$. Therefore, increasing order of $[\\text{H}^+]$ is from highest pH to lowest pH:</p>
$$\\text{pH } 11 < 9 < 7 < 4 < 1 \\implies \\text{Solution C } < \\text{ E } < \\text{ D } < \\text{ A } < \\text{ B}$$`,
      [
        { key: 'Correct classification of all five solutions (A to E)', marks: '2 Marks' },
        { key: 'Increasing order of [H+]: C (11) < E (9) < D (7) < A (4) < B (1)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q29',
      'NCERT Exercise • Q10',
      'Equal lengths of magnesium ribbons are taken in test tubes A and B. Hydrochloric acid ($\\text{HCl}$) is added to test tube A, while acetic acid ($\\text{CH}_3\\text{COOH}$) is added to test tube B. Amount and concentration taken for both the acids are same. In which test tube will the fizzing occur more vigorously and why?',
      3,
      `<p><strong>Observation and Scientific Explanation:</strong></p>
<ol>
  <li><strong>Observation:</strong> Fizzing (effervescence due to the rapid liberation of hydrogen gas) will occur much <strong>more vigorously in test tube A</strong> containing hydrochloric acid.</li>
  <li><strong>Reason:</strong>
    <ul>
      <li>$\\text{HCl}$ is a <strong>strong mineral acid</strong> that undergoes almost $100\\%$ complete dissociation in aqueous solution into $\\text{H}^+$ and $\\text{Cl}^-$ ions:
        $$\\text{HCl} \\longrightarrow \\text{H}^+ + \\text{Cl}^-$$
        Hence, test tube A contains a very high concentration of $\\text{H}^+$ ions, causing a very rapid reaction with magnesium.
      </li>
      <li>$\\text{CH}_3\\text{COOH}$ (acetic acid) is a <strong>weak organic acid</strong> that undergoes only partial dissociation in water:
        $$\\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{CH}_3\\text{COO}^- + \\text{H}^+$$
        Because $[\\text{H}^+]$ is substantially lower in test tube B, the rate of hydrogen gas evolution is much slower.
      </li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Stating test tube A with HCl shows more vigorous fizzing', marks: '1 Mark' },
        { key: 'HCl is a strong acid that completely dissociates yielding high [H+]', marks: '1 Mark' },
        { key: 'CH3COOH is a weak acid that partially dissociates yielding lower [H+]', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q30',
      'NCERT Exercise • Q11',
      'Fresh milk has a pH of 6. How do you think the pH will change as it turns into curd? Explain your answer.',
      2,
      `<p><strong>Change in pH during Curdling:</strong></p>
<p>As fresh milk turns into curd, its <strong>pH will decrease below 6 (becoming more acidic, typically around pH 4.5 – 5.0)</strong>.</p>
<p><strong>Explanation:</strong> During curd formation, the bacterium <em>Lactobacillus</em> ferments the natural milk sugar (lactose) into <strong>lactic acid</strong>. The production of lactic acid increases the concentration of hydrogen ions ($\\text{H}^+$) in the milk. Because pH is inversely related to $[\\text{H}^+]$, the increase in lactic acid concentration lowers the pH of the milk.</p>`,
      [
        { key: 'Stating pH will decrease below 6 (becomes more acidic)', marks: '1 Mark' },
        { key: 'Lactobacillus converts lactose into lactic acid, increasing [H+] and lowering pH', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q31',
      'NCERT Exercise • Q12',
      'A milkman adds a very small amount of baking soda to fresh milk. (a) Why does he shift the pH of the fresh milk from 6 to slightly alkaline? (b) Why does this milk take a long time to set as curd?',
      3,
      `<p><strong>Detailed Answers:</strong></p>
<ol>
  <li><strong>(a) Reason for shifting pH to slightly alkaline:</strong><br>
    Baking soda ($\\text{NaHCO}_3$) is a mild base. Adding it shifts the pH of fresh milk from 6 to around 7.4–8.0 (slightly alkaline). In an alkaline medium, lactic acid bacteria cannot grow rapidly, and any small amount of lactic acid formed naturally by souring is immediately neutralised. This prevents the milk from spoiling or curdling quickly during warm weather.
  </li>
  <li><strong>(b) Why it takes a longer time to set as curd:</strong><br>
    For milk to coagulate into curd, its pH must drop significantly to acidic levels (around pH 4.5) to precipitate the casein protein. Because the milk has been made alkaline, the lactic acid produced initially is consumed in neutralising the added baking soda. Only after the alkaline base is completely neutralised can the pH drop below 6 to form curd. Hence, it takes a much longer time to set.
  </li>
</ol>`,
      [
        { key: 'Part (a): Baking soda makes milk alkaline to prevent rapid souring/spoilage', marks: '1.5 Marks' },
        { key: 'Part (b): Extra lactic acid is needed first to neutralise the added alkali before pH drops to coagulate curd', marks: '1.5 Marks' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q32',
      'NCERT Exercise • Q13',
      'Plaster of Paris should be stored in a moisture-proof container. Explain why.',
      2,
      `<p><strong>Reason for Moisture-proof Storage:</strong></p>
<p>Plaster of Paris ($\\text{CaSO}_4 \\cdot \\frac{1}{2}\\text{H}_2\\text{O}$) is a hygroscopic powder. When it comes into contact with even atmospheric moisture, it absorbs water and undergoes hydration to form <strong>Gypsum</strong> ($\\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}$), setting into a hard, solid insoluble mass:</p>
$$\\text{CaSO}_4 \\cdot \\frac{1}{2}\\text{H}_2\\text{O} + 1\\frac{1}{2}\\text{H}_2\\text{O} \\longrightarrow \\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}$$
<p>Once it sets into gypsum, it loses its setting ability, plasticity, and usefulness for medical casts or decorative moulding. To prevent this spoilage, it must strictly be sealed in moisture-proof containers.</p>`,
      [
        { key: 'Reaction with moisture sets POP into hard gypsum (CaSO4.2H2O)', marks: '1 Mark' },
        { key: 'POP loses its plasticity and moulding capability once hydrated', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q33',
      'NCERT Exercise • Q14',
      'What is a neutralisation reaction? Give two examples.',
      2,
      `<p><strong>Definition:</strong></p>
<p>A chemical reaction in which an acid reacts with a base to form salt and water with the evolution of heat is called a <strong>neutralisation reaction</strong>:</p>
$$\\text{Acid} + \\text{Base} \\longrightarrow \\text{Salt} + \\text{Water} + \\text{Heat}$$
<p>At the ionic level, it involves combination of hydronium ions with hydroxide ions to form water: $\\text{H}^+(aq) + \\text{OH}^-(aq) \\longrightarrow \\text{H}_2\\text{O}(l)$.</p>

<p><strong>Two Standard Examples:</strong></p>
<ol>
  <li>$$\\text{NaOH}(aq) + \\text{HCl}(aq) \\longrightarrow \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l)$$</li>
  <li>$$\\text{Mg(OH)}_2(aq) + \\text{H}_2\\text{SO}_4(aq) \\longrightarrow \\text{MgSO}_4(aq) + 2\\text{H}_2\\text{O}(l)$$</li>
</ol>`,
      [
        { key: 'Definition of neutralisation reaction (Acid + Base -> Salt + Water)', marks: '1 Mark' },
        { key: 'Two balanced chemical examples with physical state symbols', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch2-q34',
      'NCERT Exercise • Q15',
      'Give two important uses of washing soda and baking soda.',
      2,
      `<p><strong>1. Two Important Uses of Washing Soda ($\\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}$):</strong></p>
<ol>
  <li>Used in the manufacture of glass, soap, paper, and sodium compounds such as borax.</li>
  <li>Used as a domestic cleansing agent for laundry and for removing permanent hardness of water.</li>
</ol>
<p><strong>2. Two Important Uses of Baking Soda ($\\text{NaHCO}_3$):</strong></p>
<ol>
  <li>Used as an essential ingredient of baking powder to produce $\\text{CO}_2$ gas, making cakes, bread, and pakoras light, soft, and spongy.</li>
  <li>Used as an active antacid to neutralise excess stomach acidity, and as an ingredient in soda-acid fire extinguishers.</li>
</ol>`,
      [
        { key: 'Two correct uses of washing soda (glass/soap manufacture, removing water hardness)', marks: '1 Mark' },
        { key: 'Two correct uses of baking soda (baking powder ingredient, antacid/fire extinguisher)', marks: '1 Mark' }
      ]
    )
  ];

  const cbqHtml = `  <div class="cbq-section">
    <div class="cbq-header"><span>🎯 Competency &amp; Case Study Questions (HOTS) — Chapter 2</span><span class="cbq-badge">CBSE Board 2026-27</span></div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #34d399;">
        <div class="cbq-type" style="color:#059669;">Case Study Question • Chlor-Alkali Process & Industrial By-Products</div>
        <div class="cbq-question">During the electrolysis of an aqueous solution of sodium chloride (brine), three economically crucial industrial chemicals are co-produced. (i) Name the process and write the balanced overall chemical equation. (ii) Name the gas collected at the anode and the cathode respectively. (iii) Give one major commercial application for each of the three products obtained.</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer"><p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>(i) Process Name & Overall Equation:</strong> <strong>Chlor-Alkali Process</strong> (named because 'chlor' stands for chlorine and 'alkali' stands for sodium hydroxide).
    $$2\\text{NaCl}(aq) + 2\\text{H}_2\\text{O}(l) \\xrightarrow{\\text{Electricity}} 2\\text{NaOH}(aq) + \\text{Cl}_2(g)\\uparrow + \\text{H}_2(g)\\uparrow$$
  </li>
  <li><strong>(ii) Gases Liberated at Electrodes:</strong>
    <ul>
      <li><strong>Anode (+):</strong> Chlorine gas ($\\text{Cl}_2$) is liberated.</li>
      <li><strong>Cathode (-):</strong> Hydrogen gas ($\\text{H}_2$) is liberated. (Sodium hydroxide solution forms near the cathode).</li>
    </ul>
  </li>
  <li><strong>(iii) Industrial Applications:</strong>
    <ul>
      <li><strong>$\\text{Cl}_2$:</strong> Water treatment (disinfectant), manufacture of PVC, CFCs, pesticides, and bleaching powder.</li>
      <li><strong>$\\text{H}_2$:</strong> Fuel for rockets, hydrogenation of vegetable oils to form vanaspati ghee, production of ammonia for fertilisers.</li>
      <li><strong>$\\text{NaOH}$:</strong> De-greasing metals, manufacture of soaps, detergents, paper making, and artificial textile fibres (rayon).</li>
    </ul>
  </li>
</ol></div>
      </div>
    </div>
  </div>`;

  return `<section class="chapter-section" id="ch2">
  <div class="chapter-header">
    <div class="ch-badge">2</div>
    <div class="chapter-header-info">
      <div class="ch-category">Science • Class 10 Board Exam (NCERT Rationalized)</div>
      <h2>Chapter 2: Acids, Bases and Salts</h2>
      <p>Properties, Neutralisation, pH Scale Significance in Daily Life, Preparation & Uses of Industrial Salts — CBSE Board Marking Scheme 2026-27</p>
    </div>
  </div>
  <div class="ex-div">NCERT In-Text Questions (Pages 18, 22, 25, 28, 33) &amp; Chapter-End Exercises (Questions 1 to 15)</div>

${qCards.join('\n\n')}

${cbqHtml}
  <div class="chapter-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(1)">← Previous Chapter</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(3)">Next Chapter →</button>
  </div>
</section>
`;
}

// ============================================================================
// CHAPTER 3: METALS AND NON-METALS (14 In-Text Qs + 16 Exercises = 30 Qs + 1 CBQ)
// ============================================================================
function getChapter3Html() {
  const qCards = [
    // --- In-Text Page 40 ---
    renderQCard(
      'c10s-ch3-q1',
      'In-Text Page 40 • Q1',
      'Give an example of a metal which: (i) is a liquid at room temperature, (ii) can be easily cut with a knife, (iii) is the best conductor of heat, (iv) is a poor conductor of heat.',
      2,
      `<p><strong>Examples of Metals with Specific Properties:</strong></p>
<ol>
  <li><strong>(i) Liquid metal at room temperature:</strong> <strong>Mercury ($\\text{Hg}$)</strong>.</li>
  <li><strong>(ii) Metal that can be easily cut with a knife:</strong> <strong>Sodium ($\\text{Na}$)</strong> or <strong>Potassium ($\\text{K}$)</strong>.</li>
  <li><strong>(iii) Best conductor of heat:</strong> <strong>Silver ($\\text{Ag}$)</strong> (closely followed by Copper, $\\text{Cu}$).</li>
  <li><strong>(iv) Poor conductor of heat:</strong> <strong>Lead ($\\text{Pb}$)</strong> and <strong>Mercury ($\\text{Hg}$)</strong>.</li>
</ol>`,
      [
        { key: '(i) Mercury (Hg)', marks: '0.5 Mark' },
        { key: '(ii) Sodium / Potassium', marks: '0.5 Mark' },
        { key: '(iii) Silver / Copper', marks: '0.5 Mark' },
        { key: '(iv) Lead / Mercury', marks: '0.5 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q2',
      'In-Text Page 40 • Q2',
      'Explain the meanings of malleable and ductile.',
      2,
      `<p><strong>Definitions:</strong></p>
<ol>
  <li><strong>Malleability:</strong> The mechanical property of a metal by virtue of which it can be beaten, rolled, or hammered into thin sheets without fracturing or breaking. <em>Gold ($\\text{Au}$) and Silver ($\\text{Ag}$) are the most malleable metals.</em></li>
  <li><strong>Ductility:</strong> The mechanical property of a metal by virtue of which it can be drawn or stretched into thin, fine wires without snapping. <em>Gold is the most ductile metal (a wire of about 2 km length can be drawn from just 1 gram of gold).</em></li>
</ol>`,
      [
        { key: 'Malleability definition: capacity to be beaten into thin sheets without shattering', marks: '1 Mark' },
        { key: 'Ductility definition: capacity to be drawn into thin wires', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 46 ---
    renderQCard(
      'c10s-ch3-q3',
      'In-Text Page 46 • Q1',
      'Why is sodium kept immersed in kerosene oil?',
      2,
      `<p><strong>Chemical Reason:</strong></p>
<p>Sodium is an extremely reactive alkali metal with a very low activation energy. When exposed to open air at room temperature, it reacts vigorously with atmospheric oxygen and moisture in a highly exothermic reaction, generating sufficient heat to ignite the liberated hydrogen gas and catch fire spontaneously:</p>
$$4\\text{Na}(s) + \\text{O}_2(g) \\longrightarrow 2\\text{Na}_2\\text{O}(s)$$
$$2\\text{Na}(s) + 2\\text{H}_2\\text{O}(l) \\longrightarrow 2\\text{NaOH}(aq) + \\text{H}_2(g)\\uparrow + \\text{Heat}$$
<p>Kerosene oil is an inert hydrocarbon liquid that does not react with sodium and cuts off direct contact with atmospheric oxygen and water vapor. Therefore, sodium is stored immersed in kerosene oil to prevent accidental fires and ensure safety.</p>`,
      [
        { key: 'Explaining sodium vigorously reacts with atmospheric oxygen and moisture catching fire', marks: '1 Mark' },
        { key: 'Kerosene cuts off air and water contact preventing spontaneous combustion', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q4',
      'In-Text Page 46 • Q2',
      'Write equations for the reactions of: (i) iron with steam (ii) calcium and potassium with water.',
      3,
      `<p><strong>Balanced Chemical Equations:</strong></p>
<ol>
  <li><strong>(i) Reaction of Iron with Steam:</strong><br>
    Iron does not react with cold or hot water, but red-hot iron reacts with steam to form iron(II,III) oxide (magnetic oxide) and hydrogen gas:
    $$3\\text{Fe}(s) + 4\\text{H}_2\\text{O}(g) \\longrightarrow \\text{Fe}_3\\text{O}_4(s) + 4\\text{H}_2(g)\\uparrow$$
  </li>
  <li><strong>(ii) Reaction of Calcium with Water:</strong><br>
    Calcium reacts less violently with cold water. The heat evolved is not sufficient for hydrogen to catch fire, and calcium pieces float because bubbles of hydrogen gas stick to its surface:
    $$\\text{Ca}(s) + 2\\text{H}_2\\text{O}(l) \\longrightarrow \\text{Ca(OH)}_2(aq) + \\text{H}_2(g)\\uparrow$$
  </li>
  <li><strong>(iii) Reaction of Potassium with Water:</strong><br>
    Potassium reacts violently and instantaneously with cold water, evolving immense heat so that the liberated hydrogen gas catches fire with a lilac/violet flame:
    $$2\\text{K}(s) + 2\\text{H}_2\\text{O}(l) \\longrightarrow 2\\text{KOH}(aq) + \\text{H}_2(g)\\uparrow + \\text{Heat}$$
  </li>
</ol>`,
      [
        { key: 'Iron with steam: 3Fe + 4H2O(g) -> Fe3O4 + 4H2', marks: '1 Mark' },
        { key: 'Calcium with water: Ca + 2H2O -> Ca(OH)2 + H2', marks: '1 Mark' },
        { key: 'Potassium with water: 2K + 2H2O -> 2KOH + H2 + Heat', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q5',
      'In-Text Page 46 • Q3',
      'Samples of four metals A, B, C and D were taken and added to the following solutions one by one: Metal A gives no reaction with $\\text{FeSO}_4$ and displacement with $\\text{CuSO}_4$; Metal B gives displacement with $\\text{FeSO}_4$; Metal C gives displacement only with $\\text{AgNO}_3$; Metal D gives no reaction with any solution. (i) Which is the most reactive metal? (ii) What would you observe if B is added to a solution of Copper(II) sulphate? (iii) Arrange the metals A, B, C and D in the order of decreasing reactivity.',
      3,
      `<p><strong>Deduction of Reactivity:</strong></p>
<ol>
  <li><strong>(i) Most Reactive Metal:</strong> <strong>Metal B</strong> is the most reactive because it is the only metal capable of displacing iron from iron(II) sulphate solution, whereas metals A, C, and D cannot displace iron.</li>
  <li><strong>(ii) Reaction of Metal B with $\\text{CuSO}_4$:</strong> Since B is more reactive than iron and iron is more reactive than copper, B is significantly more reactive than copper. Therefore, B will displace copper from blue copper(II) sulphate solution, causing the <strong>blue colour of the solution to fade</strong> and a <strong>reddish-brown deposit of copper</strong> to appear.</li>
  <li><strong>(iii) Decreasing Order of Reactivity:</strong>
    <ul>
      <li>B displaces Fe (Most reactive).</li>
      <li>A displaces Cu but not Fe.</li>
      <li>C displaces Ag but not Cu or Fe.</li>
      <li>D displaces none (Least reactive).</li>
    </ul>
    $$\\mathbf{B > A > C > D}$$
  </li>
</ol>`,
      [
        { key: '(i) Metal B is the most reactive', marks: '1 Mark' },
        { key: '(ii) B displaces copper; blue solution fades with reddish-brown copper deposit', marks: '1 Mark' },
        { key: '(iii) Decreasing reactivity order: B > A > C > D', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q6',
      'In-Text Page 46 • Q4',
      'Which gas is produced when dilute hydrochloric acid is added to a reactive metal? Write the chemical reaction when iron reacts with dilute $\\text{H}_2\\text{SO}_4$.',
      2,
      `<p><strong>Gas Produced & Chemical Reaction:</strong></p>
<ol>
  <li><strong>Gas Produced:</strong> <strong>Hydrogen gas ($\\text{H}_2$)</strong> is produced when a reactive metal reacts with dilute acid.</li>
  <li><strong>Reaction of Iron with Dilute $\\text{H}_2\\text{SO}_4$:</strong>
    $$\\text{Fe}(s) + \\text{H}_2\\text{SO}_4(aq) \\longrightarrow \\text{FeSO}_4(aq) + \\text{H}_2(g)\\uparrow$$
    Ferrous sulphate (light pale green solution) and hydrogen gas are formed.
  </li>
</ol>`,
      [
        { key: 'Identification of hydrogen gas (H2)', marks: '1 Mark' },
        { key: 'Balanced chemical equation: Fe + H2SO4 -> FeSO4 + H2', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q7',
      'In-Text Page 46 • Q5',
      'What would you observe when zinc is added to a solution of iron(II) sulphate? Write the chemical reaction that takes place.',
      2,
      `<p><strong>Observations and Chemical Reaction:</strong></p>
<p>Zinc is more electropositive and reactive than iron in the reactivity series. When silvery-grey zinc granules are added to a light pale green solution of iron(II) sulphate, zinc displaces iron:</p>
$$\\text{Zn}(s) + \\text{FeSO}_4(aq) \\longrightarrow \\text{ZnSO}_4(aq) + \\text{Fe}(s)$$
<p><strong>Observable Changes:</strong></p>
<ol>
  <li>The light pale green colour of the $\\text{FeSO}_4$ solution gradually fades and becomes completely <strong>colourless</strong> due to the formation of zinc sulphate ($\\text{ZnSO}_4$).</li>
  <li>A grey/blackish coating of displaced <strong>metallic iron</strong> deposits on the zinc granules.</li>
</ol>`,
      [
        { key: 'Stating pale green solution turns colourless and iron precipitates', marks: '1 Mark' },
        { key: 'Balanced chemical equation: Zn + FeSO4 -> ZnSO4 + Fe', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 49 ---
    renderQCard(
      'c10s-ch3-q8',
      'In-Text Page 49 • Q1',
      '(i) Write the electron-dot structures for sodium, oxygen and magnesium. (ii) Show the formation of $\\text{Na}_2\\text{O}$ and $\\text{MgO}$ by the transfer of electrons. (iii) What are the ions present in these compounds?',
      3,
      `<p><strong>Electron-dot Structures and Ionic Formation:</strong></p>
<ol>
  <li><strong>(i) Electron-dot structures:</strong>
    <ul>
      <li>Sodium ($\\text{Na}$, $Z=11$: $2, 8, 1$): $\\text{Na}\\cdot$ (one valence electron).</li>
      <li>Oxygen ($\\text{O}$, $Z=8$: $2, 6$): $:\\ddot{\\text{O}}:$ (six valence electrons).</li>
      <li>Magnesium ($\\text{Mg}$, $Z=12$: $2, 8, 2$): $\\cdot\\text{Mg}\\cdot$ (two valence electrons).</li>
    </ul>
  </li>
  <li><strong>(ii) Electron transfer formation:</strong>
    <ul>
      <li><strong>Formation of $\\text{MgO}$:</strong> Magnesium transfers 2 valence electrons to an oxygen atom:
        $$\\text{Mg} \\longrightarrow \\text{Mg}^{2+} + 2e^-$$
        $$\\text{O} + 2e^- \\longrightarrow \\text{O}^{2-}$$
        $$\\text{Mg}^{2+} + [:\\ddot{\\text{O}}:]^{2-} \\longrightarrow \\text{MgO}$$
      </li>
      <li><strong>Formation of $\\text{Na}_2\\text{O}$:</strong> Two sodium atoms each transfer 1 electron to an oxygen atom:
        $$2\\text{Na} \\longrightarrow 2\\text{Na}^+ + 2e^-$$
        $$\\text{O} + 2e^- \\longrightarrow [:\\ddot{\\text{O}}:]^{2-}$$
        $$2\\text{Na}^+ + [:\\ddot{\\text{O}}:]^{2-} \\longrightarrow \\text{Na}_2\\text{O}$$
      </li>
    </ul>
  </li>
  <li><strong>(iii) Ions present:</strong>
    <ul>
      <li>In $\\text{MgO}$: Magnesium cation ($\\text{Mg}^{2+}$) and Oxide anion ($\\text{O}^{2-}$).</li>
      <li>In $\\text{Na}_2\\text{O}$: Sodium cation ($\\text{Na}^+$) and Oxide anion ($\\text{O}^{2-}$).</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Correct electron-dot structures for Na, O, and Mg', marks: '1 Mark' },
        { key: 'Electron transfer representations for MgO and Na2O', marks: '1 Mark' },
        { key: 'Identifying cations (Mg2+, Na+) and anions (O2-)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q9',
      'In-Text Page 49 • Q2',
      'Why do ionic compounds have high melting points?',
      2,
      `<p><strong>Scientific Explanation:</strong></p>
<p>Ionic compounds consist of rigid three-dimensional crystal lattices containing closely packed oppositely charged ions (cations and anions) bound together by <strong>extremely strong inter-ionic electrostatic forces of attraction</strong>.</p>
<p>To overcome and break these immense electrostatic forces and separate the ions into a mobile liquid state, an enormous amount of thermal energy is required. Consequently, ionic compounds (such as $\\text{NaCl}$, m.p. $1074\\text{ K}$, and $\\text{MgO}$, m.p. $3125\\text{ K}$) possess very high melting and boiling points.</p>`,
      [
        { key: 'Presence of strong electrostatic inter-ionic forces between cations and anions', marks: '1 Mark' },
        { key: 'High amount of thermal energy required to break rigid ionic crystal lattice', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 53 ---
    renderQCard(
      'c10s-ch3-q10',
      'In-Text Page 53 • Q1',
      'Define the following terms: (i) Mineral (ii) Ore (iii) Gangue.',
      3,
      `<p><strong>Definitions:</strong></p>
<ol>
  <li><strong>(i) Mineral:</strong> Naturally occurring homogeneous inorganic substances containing elements or compounds with a definite chemical composition and crystalline structure found in the earth's crust.</li>
  <li><strong>(ii) Ore:</strong> A naturally occurring mineral deposit from which a particular metal can be extracted commercially, conveniently, and profitably. <em>(Every ore is a mineral, but every mineral is not an ore; e.g., Bauxite is an ore of Aluminium).</em></li>
  <li><strong>(iii) Gangue:</strong> The commercially worthless rocky, earthy, sandy, and siliceous impurities (such as quartz, clay, limestone) naturally associated with an ore deposit.</li>
</ol>`,
      [
        { key: 'Mineral definition: natural inorganic compounds in earth crust', marks: '1 Mark' },
        { key: 'Ore definition: mineral from which metal is profitably and conveniently extracted', marks: '1 Mark' },
        { key: 'Gangue definition: unwanted earthy/rocky impurities associated with mined ore', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q11',
      'In-Text Page 53 • Q2',
      'Name two metals which are found in nature in the free state.',
      1,
      `<p><strong>Metals in Free State:</strong> <strong>Gold ($\\text{Au}$)</strong> and <strong>Platinum ($\\text{Pt}$)</strong> (also Silver, $\\text{Ag}$).</p>
<p>They are noble metals situated at the bottom of the electrochemical reactivity series with very low chemical reactivity and high resistance to oxidation.</p>`,
      [
        { key: 'Gold (Au) and Platinum (Pt)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q12',
      'In-Text Page 53 • Q3',
      'What chemical process is used for obtaining a metal from its oxide?',
      2,
      `<p><strong>Chemical Process: Reduction</strong></p>
<p>The chemical process used is <strong>Reduction</strong> (removal of oxygen from the metal oxide to yield free metal). The choice of reducing agent depends on the position of the metal in the reactivity series:</p>
<ol>
  <li><strong>Reduction by Carbon (Coke/Carbon monoxide):</strong> Used for moderately reactive metals (Zn, Fe, Pb):
    $$\\text{ZnO}(s) + \\text{C}(s) \\xrightarrow{\\Delta} \\text{Zn}(s) + \\text{CO}(g)$$
  </li>
  <li><strong>Reduction by Highly Reactive Metals (Thermite process with Al):</strong> Used when oxides are strongly bonded:
    $$\\text{Fe}_2\\text{O}_3(s) + 2\\text{Al}(s) \\xrightarrow{\\Delta} 2\\text{Fe}(l) + \\text{Al}_2\\text{O}_3(s) + \\text{Heat}$$
  </li>
  <li><strong>Electrolytic Reduction:</strong> Used for highly reactive metals (Na, Ca, Mg, Al) where carbon cannot reduce their stable oxides.</li>
</ol>`,
      [
        { key: 'Identifying process as Reduction (smelting/displacement)', marks: '1 Mark' },
        { key: 'Chemical equation: ZnO + C -> Zn + CO (or Thermite reaction)', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 55 ---
    renderQCard(
      'c10s-ch3-q13',
      'In-Text Page 55 • Q1',
      'Metallic oxides of zinc, magnesium and copper were heated with the following metals: Zinc, Magnesium, Copper. In which cases will you find displacement reactions taking place?',
      3,
      `<p><strong>Reactivity Order: $\\text{Mg} > \\text{Zn} > \\text{Cu}$</strong></p>
<p>A metal can displace another metal from its oxide only if it is more reactive (higher in the reactivity series) than the metal present in the oxide.</p>
<table style="width:100%; border-collapse:collapse; margin:12px 0;">
  <thead>
    <tr style="background:#f1f5f9; text-align:left;">
      <th style="padding:8px; border:1px solid #cbd5e1;">Metal Oxide</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Zinc ($\\text{Zn}$)</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Magnesium ($\\text{Mg}$)</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Copper ($\\text{Cu}$)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Zinc oxide ($\\text{ZnO}$)</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">No reaction</td>
      <td style="padding:8px; border:1px solid #cbd5e1; color:#059669; font-weight:bold;">Displacement</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">No reaction</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Magnesium oxide ($\\text{MgO}$)</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">No reaction</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">No reaction</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">No reaction</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Copper oxide ($\\text{CuO}$)</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1; color:#059669; font-weight:bold;">Displacement</td>
      <td style="padding:8px; border:1px solid #cbd5e1; color:#059669; font-weight:bold;">Displacement</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">No reaction</td>
    </tr>
  </tbody>
</table>`,
      [
        { key: 'ZnO with Mg gives displacement', marks: '1 Mark' },
        { key: 'CuO with Zn and Mg both give displacement', marks: '1 Mark' },
        { key: 'MgO gives no displacement with any of the metals', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q14',
      'In-Text Page 55 • Q2',
      'Which metals do not corrode easily? And what are alloys?',
      2,
      `<p><strong>1. Metals that do not corrode easily:</strong></p>
<p>Noble metals situated at the bottom of the reactivity series, such as <strong>Gold ($\\text{Au}$)</strong>, <strong>Platinum ($\\text{Pt}$)</strong>, and <strong>Titanium ($\\text{Ti}$)</strong>, do not corrode easily because they are chemically inert and unreactive with atmospheric oxygen and moisture.</p>
<p><strong>2. Definition of Alloys:</strong></p>
<p>An alloy is a <strong>homogeneous mixture of two or more metals, or a metal and a non-metal</strong>, prepared by mixing the components in their molten states in definite proportions and then cooling to room temperature. <em>Examples: Brass ($\\text{Cu} + \\text{Zn}$), Bronze ($\\text{Cu} + \\text{Sn}$), Stainless steel ($\\text{Fe} + \\text{Cr} + \\text{Ni} + \\text{C}$).</em></p>`,
      [
        { key: 'Metals that do not corrode: Gold and Platinum', marks: '1 Mark' },
        { key: 'Alloy definition: homogeneous mixture of metals/non-metals', marks: '1 Mark' }
      ]
    ),

    // --- End of Chapter Exercises (Q1 to Q16) ---
    renderQCard(
      'c10s-ch3-q15',
      'NCERT Exercise • Q1',
      'Which of the following pairs will give displacement reactions? (a) $\\text{NaCl}$ solution and copper metal (b) $\\text{MgCl}_2$ solution and aluminium metal (c) $\\text{FeSO}_4$ solution and silver metal (d) $\\text{AgNO}_3$ solution and copper metal.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(d) $\\text{AgNO}_3$ solution and copper metal</strong></p>
<p><strong>Reason:</strong> In the electrochemical activity series, copper ($\\text{Cu}$) lies above silver ($\\text{Ag}$) and is therefore more reactive than silver. Copper displaces silver from silver nitrate solution:</p>
$$\\text{Cu}(s) + 2\\text{AgNO}_3(aq) \\longrightarrow \\text{Cu(NO}_3)_2(aq) + 2\\text{Ag}(s)$$
<p>In options (a), (b), and (c), the solid metal is less reactive than the metal cation in solution, so no displacement occurs.</p>`,
      [
        { key: 'Option (d) AgNO3 solution and copper metal with balanced displacement equation', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q16',
      'NCERT Exercise • Q2',
      'Which of the following methods is suitable for preventing an iron frying pan from rusting? (a) Applying grease (b) Applying paint (c) Applying a coating of zinc (d) All of the above.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(c) Applying a coating of zinc (Galvanisation)</strong></p>
<p><strong>Reason:</strong> Grease and paint cannot be applied to a frying pan because upon heating on a gas stove during cooking, grease will melt, burn, and contaminate food, while paint will char, produce toxic fumes, and peel off. A thin coating of zinc (galvanisation) or using stainless steel alloy withstands high cooking temperatures and permanently prevents rusting.</p>`,
      [
        { key: 'Option (c) Applying a coating of zinc with practical cooking rationale', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q17',
      'NCERT Exercise • Q3',
      'An element reacts with oxygen to give a compound with a high melting point. This compound is also soluble in water. The element is likely to be: (a) calcium (b) carbon (c) silicon (d) iron.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(a) calcium</strong></p>
<p><strong>Reason:</strong> Calcium reacts with atmospheric oxygen to produce <strong>calcium oxide ($\\text{CaO}$)</strong>:</p>
$$2\\text{Ca} + \\text{O}_2 \\longrightarrow 2\\text{CaO}$$
<p>$\\text{CaO}$ is an ionic compound with a very high melting point ($2845\\text{ K}$) and dissolves readily in water to form calcium hydroxide (slaked lime):</p>
$$\\text{CaO} + \\text{H}_2\\text{O} \\longrightarrow \\text{Ca(OH)}_2$$
<p>Carbon forms gaseous $\\text{CO}_2$; silicon oxide ($\\text{SiO}_2$) is insoluble in water; and iron oxides are also insoluble in water.</p>`,
      [
        { key: 'Option (a) calcium with ionic CaO high melting point and water solubility explanation', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q18',
      'NCERT Exercise • Q4',
      'Food cans are coated with tin and not with zinc because: (a) zinc is costlier than tin (b) zinc has a higher melting point than tin (c) zinc is more reactive than tin (d) zinc is less reactive than tin.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(c) zinc is more reactive than tin</strong></p>
<p><strong>Reason:</strong> Zinc is situated higher than tin in the chemical reactivity series. Organic acids (such as citric acid, malic acid) present in canned food would react with a zinc coating to produce toxic, poisonous zinc salts that cause severe food poisoning. In contrast, <strong>tin is far less reactive</strong>, non-toxic, and does not corrode or react with food acids.</p>`,
      [
        { key: 'Option (c) zinc is more reactive than tin; prevents toxic salt formation', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q19',
      'NCERT Exercise • Q5',
      'You are given a hammer, a battery, a bulb, wires and a switch. (a) How could you use them to distinguish between samples of metals and non-metals? (b) Assess the usefulness of these tests in distinguishing between metals and non-metals.',
      3,
      `<p><strong>Experimental Differentiation:</strong></p>
<ol>
  <li><strong>(a) Testing Procedures:</strong>
    <ul>
      <li><strong>Malleability Test (Hammer):</strong> Strike the given sample repeatedly with the hammer. If the sample flattens into a thin sheet without breaking, it is a <strong>metal</strong> (malleable). If it shatters into pieces or powder, it is a <strong>non-metal</strong> (brittle).</li>
      <li><strong>Electrical Conductivity Test (Circuit):</strong> Connect the battery, bulb, switch, and connecting wires with test terminals. Insert the sample into the gap and close the switch. If the bulb glows, the sample is a good conductor of electricity and is a <strong>metal</strong>. If the bulb fails to glow, it is an insulator and is a <strong>non-metal</strong>.</li>
    </ul>
  </li>
  <li><strong>(b) Assessment of Usefulness:</strong>
    <ul>
      <li>These physical tests are practical, rapid, and generally reliable, but have important exceptions:</li>
      <li><strong>Exceptions:</strong> Carbon in the form of <strong>graphite</strong> is a non-metal that conducts electricity and will make the bulb glow. <strong>Sodium and potassium</strong> are metals that are soft and can be cut with a knife rather than hammered into sheets. <strong>Mercury</strong> is a liquid metal. Therefore, physical tests should be supplemented by chemical properties for absolute confirmation.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Hammer test distinguishes malleability (metals) vs brittleness (non-metals)', marks: '1 Mark' },
        { key: 'Circuit test distinguishes electrical conduction (metals) vs non-conduction (non-metals)', marks: '1 Mark' },
        { key: 'Assessment mentioning exceptions like graphite (conducts) and alkali metals', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q20',
      'NCERT Exercise • Q6',
      'What are amphoteric oxides? Give two examples of amphoteric oxides.',
      2,
      `<p><strong>Definition:</strong></p>
<p>Metal oxides that react with <strong>both acids as well as bases</strong> to produce salt and water are called <strong>amphoteric oxides</strong>.</p>
<p><strong>Two Standard Examples:</strong></p>
<ol>
  <li><strong>Aluminium oxide ($\\text{Al}_2\\text{O}_3$):</strong>
    <ul>
      <li><em>Reaction with Acid:</em> $\\text{Al}_2\\text{O}_3 + 6\\text{HCl} \\longrightarrow 2\\text{AlCl}_3 + 3\\text{H}_2\\text{O}$</li>
      <li><em>Reaction with Base:</em> $\\text{Al}_2\\text{O}_3 + 2\\text{NaOH} \\longrightarrow 2\\text{NaAlO}_2\\text{ (Sodium aluminate)} + \\text{H}_2\\text{O}$</li>
    </ul>
  </li>
  <li><strong>Zinc oxide ($\\text{ZnO}$):</strong>
    <ul>
      <li><em>Reaction with Acid:</em> $\\text{ZnO} + 2\\text{HCl} \\longrightarrow \\text{ZnCl}_2 + \\text{H}_2\\text{O}$</li>
      <li><em>Reaction with Base:</em> $\\text{ZnO} + 2\\text{NaOH} \\longrightarrow \\text{Na}_2\\text{ZnO}_2\\text{ (Sodium zincate)} + \\text{H}_2\\text{O}$</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Amphoteric oxide definition: reacts with both acids and bases to yield salt and water', marks: '1 Mark' },
        { key: 'Two examples (Al2O3, ZnO) with balanced acidic/basic reactions', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q21',
      'NCERT Exercise • Q7',
      'Name two metals which will displace hydrogen from dilute acids, and two metals which will not.',
      2,
      `<p><strong>Metals and Reactivity towards Dilute Acids:</strong></p>
<ol>
  <li><strong>Two metals that displace hydrogen:</strong> <strong>Zinc ($\\text{Zn}$)</strong> and <strong>Magnesium ($\\text{Mg}$)</strong> (or Iron, Aluminium).
    <br><em>Reason:</em> They are situated above hydrogen in the reactivity series and have higher electropositivity than hydrogen.
  </li>
  <li><strong>Two metals that will NOT displace hydrogen:</strong> <strong>Copper ($\\text{Cu}$)</strong> and <strong>Silver ($\\text{Ag}$)</strong> (or Gold, Platinum).
    <br><em>Reason:</em> They lie below hydrogen in the reactivity series and cannot reduce $\\text{H}^+$ ions into $\\text{H}_2$ gas.
  </li>
</ol>`,
      [
        { key: 'Two displacing metals: Zn and Mg (above H in reactivity series)', marks: '1 Mark' },
        { key: 'Two non-displacing metals: Cu and Ag (below H in reactivity series)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q22',
      'NCERT Exercise • Q8',
      'In the electrolytic refining of a metal M, what would you take as the anode, the cathode and the electrolyte?',
      3,
      `<p><strong>Electrolytic Refining Setup:</strong></p>
<ol>
  <li><strong>Anode (Positive electrode):</strong> A thick block or slab of the <strong>impure metal M</strong>.</li>
  <li><strong>Cathode (Negative electrode):</strong> A thin strip of <strong>pure metal M</strong>.</li>
  <li><strong>Electrolyte:</strong> An acidified aqueous solution of a <strong>soluble salt of metal M</strong> (for example, $\\text{CuSO}_4 + \\text{dil. } \\text{H}_2\\text{SO}_4$ for copper refining).</li>
</ol>
<p><strong>Operating Mechanism:</strong> On passing electric current, equivalent metal cations dissolve from the impure anode ($M \\longrightarrow M^{n+} + ne^-$) and migrate to deposit as pure metal on the cathode ($M^{n+} + ne^- \\longrightarrow M$), leaving insoluble impurities behind as anode mud.</p>`,
      [
        { key: 'Anode: Block of impure metal M', marks: '1 Mark' },
        { key: 'Cathode: Thin strip of pure metal M', marks: '1 Mark' },
        { key: 'Electrolyte: Aqueous acidified solution of a soluble salt of metal M', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q23',
      'NCERT Exercise • Q9',
      'Pratyush took sulphur powder on a spatula and heated it. He collected the gas evolved by inverting a test tube over it. (a) What will be the action of gas on: (i) dry litmus paper? (ii) moist litmus paper? (b) Write a balanced chemical equation for the reaction taking place.',
      2,
      `<p><strong>Observation and Chemical Reaction:</strong></p>
<p>Heating sulphur in air produces <strong>sulphur dioxide gas ($\\text{SO}_2$)</strong>:</p>
$$\\text{S}(s) + \\text{O}_2(g) \\longrightarrow \\text{SO}_2(g)$$
<ol>
  <li><strong>(a) Action on Litmus:</strong>
    <ul>
      <li><strong>(i) Dry litmus paper:</strong> <strong>No colour change</strong> occurs because dry $\\text{SO}_2$ gas cannot ionise in the absence of moisture.</li>
      <li><strong>(ii) Moist blue litmus paper:</strong> The moist blue litmus paper <strong>turns red</strong>. Sulphur dioxide dissolves in the moisture to form sulphurous acid ($\\text{H}_2\\text{SO}_3$), which dissociates to release $\\text{H}^+(aq)$ ions:
        $$\\text{SO}_2(g) + \\text{H}_2\\text{O}(l) \\longrightarrow \\text{H}_2\\text{SO}_3(aq) \\rightleftharpoons \\text{H}^+ + \\text{HSO}_3^-$$
      </li>
    </ul>
  </li>
  <li><strong>(b) Balanced Chemical Equations:</strong> Given above for combustion and hydration.</li>
</ol>`,
      [
        { key: '(i) Dry litmus: No change; (ii) Moist blue litmus turns red', marks: '1 Mark' },
        { key: 'Balanced chemical equations: S + O2 -> SO2 and SO2 + H2O -> H2SO3', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q24',
      'NCERT Exercise • Q10',
      'State two ways to prevent the rusting of iron.',
      2,
      `<p><strong>Two Standard Methods to Prevent Rusting of Iron:</strong></p>
<ol>
  <li><strong>Galvanisation:</strong> Coating iron and steel articles with a protective thin layer of <strong>zinc metal</strong>. Even if the zinc surface gets scratched, zinc being more electropositive oxidises preferentially (sacrificial protection), preventing the underlying iron from rusting.</li>
  <li><strong>Painting, Greasing, or Alloying:</strong> Applying a coat of oil/grease/paint on the iron surface acts as a physical barrier preventing air and moisture from contacting the metal. Alternatively, iron is alloyed with chromium and nickel to produce <strong>Stainless Steel</strong>, which does not rust.</li>
</ol>`,
      [
        { key: 'Method 1: Galvanisation (coating with zinc) with sacrificial protection explanation', marks: '1 Mark' },
        { key: 'Method 2: Barrier coating (paint/oil) or alloying (stainless steel)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q25',
      'NCERT Exercise • Q11',
      'What type of oxides are formed when non-metals combine with oxygen?',
      2,
      `<p><strong>Nature of Non-metallic Oxides:</strong></p>
<p>When non-metals combine with oxygen, they generally form <strong>acidic oxides</strong> or <strong>neutral oxides</strong> (covalent oxides):</p>
<ol>
  <li><strong>Acidic Oxides:</strong> Most non-metal oxides dissolve in water to form acids and turn blue litmus red:
    $$\\text{CO}_2 + \\text{H}_2\\text{O} \\longrightarrow \\text{H}_2\\text{CO}_3\\text{ (Carbonic acid)}$$
    $$\\text{SO}_3 + \\text{H}_2\\text{O} \\longrightarrow \\text{H}_2\\text{SO}_4\\text{ (Sulphuric acid)}$$
  </li>
  <li><strong>Neutral Oxides:</strong> Some non-metal oxides do not react with acids or bases and have no effect on litmus indicators:
    <br><em>Examples:</em> Carbon monoxide ($\\text{CO}$), Nitric oxide ($\\text{NO}$), Nitrous oxide ($\\text{N}_2\\text{O}$), and Water ($\\text{H}_2\\text{O}$).</li>
</ol>`,
      [
        { key: 'Acidic oxides: dissolve in water to produce acids (e.g., CO2, SO2)', marks: '1 Mark' },
        { key: 'Neutral oxides: show neither acidic nor basic properties (e.g., CO, H2O, N2O)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q26',
      'NCERT Exercise • Q12',
      'Give reasons: (a) Platinum, gold and silver are used to make jewellery. (b) Sodium, potassium and lithium are stored under oil. (c) Aluminium is a highly reactive metal, yet it is used to make utensils for cooking. (d) Carbonate and sulphide ores are usually converted into oxides during the process of extraction.',
      4,
      `<p><strong>Scientific Explanations:</strong></p>
<ol>
  <li><strong>(a) Platinum, gold, and silver for jewellery:</strong> They are noble metals that possess high metallic lustre, remarkable malleability and ductility, and are extremely unreactive. They do not corrode, tarnish, or react with air, water, and sweat, maintaining their brilliant shine indefinitely.</li>
  <li><strong>(b) Storage under oil for alkali metals:</strong> Sodium, potassium, and lithium have very low ionization enthalpies. In open air, they react vigorously with atmospheric oxygen and moisture, releasing hydrogen gas that immediately catches fire. Storing them submerged under paraffin or kerosene oil shields them from oxygen and moisture.</li>
  <li><strong>(c) Aluminium for cooking utensils:</strong> When aluminium metal is exposed to air, it naturally forms an ultra-thin, continuous, tough, and impermeable protective coating of <strong>aluminium oxide ($\\text{Al}_2\\text{O}_3$)</strong> on its surface. This oxide film prevents any further reaction with food acids and oxygen. Moreover, aluminium is lightweight, inexpensive, and an excellent conductor of heat.</li>
  <li><strong>(d) Conversion of carbonate and sulphide ores to oxides:</strong> It is chemically and thermodynamically far easier to reduce a metal oxide to free metal using common reducing agents like carbon (coke) or $\\text{CO}$ than to reduce metal carbonates or sulphides directly:
    $$\\text{Calcination: } \\text{ZnCO}_3 \\xrightarrow{\\Delta} \\text{ZnO} + \\text{CO}_2$$
    $$\\text{Roasting: } 2\\text{ZnS} + 3\\text{O}_2 \\xrightarrow{\\Delta} 2\\text{ZnO} + 2\\text{SO}_2$$
  </li>
</ol>`,
      [
        { key: 'Part (a): Lustrous, malleable, ductile, and corrosion resistant noble metals', marks: '1 Mark' },
        { key: 'Part (b): Highly reactive alkali metals catch fire in air/water; oil provides barrier', marks: '1 Mark' },
        { key: 'Part (c): Forms self-protecting inert Al2O3 layer and has high thermal conductivity', marks: '1 Mark' },
        { key: 'Part (d): Easier to reduce metal oxides to metals with carbon than carbonates/sulphides', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q27',
      'NCERT Exercise • Q13',
      'You must have seen tarnished copper vessels being cleaned with lemon or tamarind juice. Explain why these sour substances are effective in cleaning the vessels.',
      2,
      `<p><strong>Mechanism of Cleaning Tarnished Copper:</strong></p>
<p>When copper vessels are exposed to moist air containing carbon dioxide and oxygen, they slowly react to form a dull green tarnish consisting of <strong>basic copper carbonate $[\\text{CuCO}_3 \\cdot \\text{Cu(OH)}_2]$</strong>:</p>
$$2\\text{Cu} + \\text{H}_2\\text{O} + \\text{CO}_2 + \\text{O}_2 \\longrightarrow \\text{CuCO}_3 \\cdot \\text{Cu(OH)}_2\\text{ (Green coating)}$$
<p>Lemon juice contains citric acid, and tamarind contains tartaric acid. These organic acids react with the basic copper carbonate and basic copper oxide to form <strong>soluble copper citrate/tartrate salts</strong> and water. Rinsing with water washes away these dissolved salts, exposing the fresh, shiny reddish-brown metallic copper surface.</p>`,
      [
        { key: 'Tarnish is basic copper carbonate [CuCO3.Cu(OH)2]', marks: '1 Mark' },
        { key: 'Citric/tartaric acid dissolves the basic coating forming soluble salts that rinse away', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q28',
      'NCERT Exercise • Q14',
      'Differentiate between metal and non-metal on the basis of their chemical properties.',
      3,
      `<p><strong>Chemical Distinctions between Metals and Non-metals:</strong></p>
<table style="width:100%; border-collapse:collapse; margin:12px 0;">
  <thead>
    <tr style="background:#f1f5f9; text-align:left;">
      <th style="padding:8px; border:1px solid #cbd5e1;">Property</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Metals</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Non-metals</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Nature of Ions</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Electropositive; lose valence electrons to form cations ($M \\longrightarrow M^{n+} + ne^-$).</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Electronegative; gain electrons to form anions ($X + me^- \\longrightarrow X^{m-}$).</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Nature of Oxides</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Form basic oxides (e.g., $\\text{Na}_2\\text{O}, \\text{CaO}$) or amphoteric oxides ($\\text{Al}_2\\text{O}_3$).</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Form acidic oxides (e.g., $\\text{CO}_2, \\text{SO}_2$) or neutral oxides ($\\text{CO}, \\text{H}_2\\text{O}$).</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Reaction with Dilute Acids</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Active metals displace hydrogen gas from dilute acids ($M + 2\\text{H}^+ \\longrightarrow M^{2+} + \\text{H}_2$).</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Do not displace hydrogen gas from dilute acids (cannot donate electrons to $\\text{H}^+$).</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Action with Chlorine</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Form ionic chlorides with high melting points (e.g., $\\text{NaCl}, \\text{MgCl}_2$).</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Form covalent chlorides that are volatile liquids/gases (e.g., $\\text{CCl}_4, \\text{PCl}_3$).</td>
    </tr>
  </tbody>
</table>`,
      [
        { key: 'Distinction 1: Electropositive cations vs Electronegative anions', marks: '1 Mark' },
        { key: 'Distinction 2: Basic/amphoteric oxides vs Acidic/neutral oxides', marks: '1 Mark' },
        { key: 'Distinction 3: Hydrogen displacement from dilute acids vs no reaction', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q29',
      'NCERT Exercise • Q15',
      'A man went door to door posing as a goldsmith. He promised to bring back the glitter of old and dull gold ornaments. An unsuspecting lady gave a set of gold bangles to him which he dipped in a particular solution. The bangles sparkled like new but their weight was reduced drastically. The lady was upset but, after a futile argument, the man beat a hasty retreat. Can you play the detective to find out the nature of the solution he had used?',
      2,
      `<p><strong>Detective Chemical Deduction:</strong></p>
<ol>
  <li><strong>Identity of the Solution:</strong> The impostor used a freshly prepared mixture known as <strong>Aqua Regia</strong> (Latin for 'royal water').</li>
  <li><strong>Composition:</strong> Aqua regia is a fuming mixture of <strong>concentrated hydrochloric acid ($\\text{HCl}$) and concentrated nitric acid ($\\text{HNO}_3$) in a $3 : 1$ ratio by volume</strong>.</li>
  <li><strong>Why the Bangles Lost Weight:</strong> Gold is a noble metal that does not dissolve in either concentrated $\\text{HCl}$ or concentrated $\\text{HNO}_3$ alone. However, in aqua regia, nascent chlorine is liberated which readily oxidises and dissolves outer layers of metallic gold into soluble auric chloride ($\\text{HAuCl}_4$):
    $$\\text{Au} + 3\\text{HNO}_3 + 4\\text{HCl} \\longrightarrow \\text{HAuCl}_4 + 3\\text{NO}_2 + 3\\text{H}_2\\text{O}$$
    Dissolving the tarnished outer layer restored sparkle but stripped away grams of valuable gold, causing the drastic weight loss.
  </li>
</ol>`,
      [
        { key: 'Identifying solution as Aqua Regia (conc. HCl + conc. HNO3 in 3:1 ratio)', marks: '1 Mark' },
        { key: 'Explaining dissolution of outer gold layer into soluble chlorauric acid reducing bangle weight', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch3-q30',
      'NCERT Exercise • Q16',
      'Give reasons why copper is used to make hot water tanks and not steel (an alloy of iron).',
      2,
      `<p><strong>Reasons:</strong></p>
<ol>
  <li><strong>Reactivity with Water/Steam:</strong> <strong>Copper does not react with cold water, hot water, or steam</strong> at any temperature, because copper lies below hydrogen in the electrochemical reactivity series. In contrast, iron in steel reacts readily with steam at high temperatures to form iron oxide and hydrogen gas, causing severe internal corrosion and structural weakening:
    $$3\\text{Fe} + 4\\text{H}_2\\text{O}(g) \\longrightarrow \\text{Fe}_3\\text{O}_4 + 4\\text{H}_2$$
  </li>
  <li><strong>Thermal Conductivity:</strong> Copper is a far superior conductor of heat compared to steel, ensuring rapid and energy-efficient water heating.</li>
</ol>`,
      [
        { key: 'Copper does not react with cold/hot water or steam', marks: '1 Mark' },
        { key: 'Iron in steel reacts with steam to form rust/Fe3O4, and copper is a better thermal conductor', marks: '1 Mark' }
      ]
    )
  ];

  const cbqHtml = `  <div class="cbq-section">
    <div class="cbq-header"><span>🎯 Competency &amp; Case Study Questions (HOTS) — Chapter 3</span><span class="cbq-badge">CBSE Board 2026-27</span></div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #34d399;">
        <div class="cbq-type" style="color:#059669;">Case Study Question • Thermite Welding & Metallurgy</div>
        <div class="cbq-question">Railway tracks in remote sections are joined on-site using the Thermite process rather than conventional electric arc welding. (i) Write the balanced chemical equation for the Thermite reaction. (ii) Why is this reaction classified as a displacement reaction and an exothermic reaction? (iii) In what physical state is the reduced metal obtained and why is that beneficial for track welding?</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer"><p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>(i) Thermite Reaction:</strong>
    $$\\text{Fe}_2\\text{O}_3(s) + 2\\text{Al}(s) \\xrightarrow{\\Delta} 2\\text{Fe}(l) + \\text{Al}_2\\text{O}_3(s) + \\text{Heat}$$
  </li>
  <li><strong>(ii) Classification:</strong>
    <ul>
      <li><strong>Displacement Reaction:</strong> Aluminium is more electropositive and reactive than iron; hence aluminium displaces iron from ferric oxide.</li>
      <li><strong>Exothermic Reaction:</strong> The heat of formation of aluminium oxide ($\\text{Al}_2\\text{O}_3$) is exceptionally high, releasing vast amounts of thermal energy.</li>
    </ul>
  </li>
  <li><strong>(iii) Physical State:</strong> The reduced iron is produced in the <strong>molten (liquid) state</strong> because the reaction temperature exceeds $2500^\\circ\\text{C}$ (well above iron's melting point of $1538^\\circ\\text{C}$). This glowing molten iron flows directly into the fissure between broken railway tracks, fusing them seamlessly into a single continuous rail upon cooling.</li>
</ol></div>
      </div>
    </div>
  </div>`;

  return `<section class="chapter-section" id="ch3">
  <div class="chapter-header">
    <div class="ch-badge">3</div>
    <div class="chapter-header-info">
      <div class="ch-category">Science • Class 10 Board Exam (NCERT Rationalized)</div>
      <h2>Chapter 3: Metals and Non-metals</h2>
      <p>Physical & Chemical Properties, Amphoteric Oxides, Ionic Compounds & Extraction Metallurgy — CBSE Board Marking Scheme 2026-27</p>
    </div>
  </div>
  <div class="ex-div">NCERT In-Text Questions (Pages 40, 46, 49, 53, 55) &amp; Chapter-End Exercises (Questions 1 to 16)</div>

${qCards.join('\n\n')}

${cbqHtml}
  <div class="chapter-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(2)">← Previous Chapter</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(4)">Next Chapter →</button>
  </div>
</section>
`;
}

// ============================================================================
// CHAPTER 4: CARBON AND ITS COMPOUNDS (11 In-Text Qs + 15 Exercises = 26 Qs + 1 CBQ)
// ============================================================================
function getChapter4Html() {
  const qCards = [
    // --- In-Text Page 61 ---
    renderQCard(
      'c10s-ch4-q1',
      'In-Text Page 61 • Q1',
      'What would be the electron dot structure of carbon dioxide which has the formula $\\text{CO}_2$?',
      2,
      `<p><strong>Electron-dot Structure of Carbon Dioxide ($\\text{CO}_2$):</strong></p>
<ol>
  <li><strong>Electronic Configuration:</strong>
    <ul>
      <li>Carbon ($Z=6$): $2, 4$ (needs 4 electrons to complete octet).</li>
      <li>Oxygen ($Z=8$): $2, 6$ (needs 2 electrons to complete octet).</li>
    </ul>
  </li>
  <li><strong>Bonding Mechanism:</strong> The central carbon atom shares two pairs of electrons with each of the two oxygen atoms, forming two double covalent bonds:
    $$\\mathbf{:\\ddot{\\text{O}}::C::\\ddot{\\text{O}}:} \\quad \\text{or} \\quad \\text{O}=\\text{C}=\\text{O}$$
  </li>
  <li>Each oxygen atom attains a stable neon octet ($8e^-$) and the central carbon atom attains a stable neon octet ($8e^-$).</li>
</ol>`,
      [
        { key: 'Valence electron counts: C has 4, each O has 6', marks: '1 Mark' },
        { key: 'Correct double covalent bond dot structure O=C=O with complete octets', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q2',
      'In-Text Page 61 • Q2',
      'What would be the electron dot structure of a molecule of sulphur which is made up of eight atoms of sulphur? (Hint: The eight atoms of sulphur are joined together in the shape of a ring.)',
      2,
      `<p><strong>Electron-dot Structure of Octasulphur ($S_8$):</strong></p>
<ol>
  <li><strong>Electronic Configuration:</strong> Sulphur ($Z=16$): $2, 8, 6$ (has 6 valence electrons, requires 2 more electrons to complete its octet).</li>
  <li><strong>Ring Structure (Crown/Puckered Conformation):</strong> In an $S_8$ molecule, each of the eight sulphur atoms forms single covalent bonds with two adjacent sulphur atoms by sharing one electron pair each:
    $$-S-S-S-S-S-S-S-S- \\quad \\text{(closed ring)}$$
  </li>
  <li>Each sulphur atom retains two non-bonding lone pairs ($4e^-$) and shares two single bonding pairs ($4e^-$), completing its stable octet of 8 electrons.</li>
</ol>`,
      [
        { key: 'Electronic configuration of sulphur showing 6 valence electrons', marks: '1 Mark' },
        { key: 'Ring arrangement of 8 sulphur atoms with single covalent bonds and octets', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 68 ---
    renderQCard(
      'c10s-ch4-q3',
      'In-Text Page 68 • Q1',
      'How many structural isomers can you draw for pentane?',
      3,
      `<p><strong>Three Structural Isomers of Pentane ($\\text{C}_5\\text{H}_{12}$):</strong></p>
<ol>
  <li><strong>1. n-Pentane (Pentane):</strong> Straight unbranched five-carbon chain:
    $$\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{CH}_3$$
  </li>
  <li><strong>2. Isopentane (2-Methylbutane):</strong> Four-carbon chain with a methyl branch at C-2:
    $$\\text{CH}_3-\\text{CH}(\\text{CH}_3)-\\text{CH}_2-\\text{CH}_3$$
  </li>
  <li><strong>3. Neopentane (2,2-Dimethylpropane):</strong> Three-carbon chain with two methyl branches at C-2:
    $$\\text{CH}_3-\\text{C}(\\text{CH}_3)_2-\\text{CH}_3$$
  </li>
</ol>
<p>Therefore, exactly <strong>3 structural isomers</strong> exist for pentane.</p>`,
      [
        { key: 'Stating there are 3 structural isomers', marks: '1 Mark' },
        { key: 'Structures and IUPAC names for n-pentane and 2-methylbutane', marks: '1 Mark' },
        { key: 'Structure and IUPAC name for 2,2-dimethylpropane', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q4',
      'In-Text Page 68 • Q2',
      'What are the two properties of carbon which lead to the huge number of carbon compounds we see around us?',
      2,
      `<p><strong>Two Unique Characteristics of Carbon:</strong></p>
<ol>
  <li><strong>1. Catenation:</strong> Carbon has the unique ability to form exceptionally strong, stable covalent bonds with other carbon atoms, giving rise to long straight chains, branched chains, and closed rings of arbitrary length and complexity. The small size of the carbon atom makes the $C-C$ bond energy very high ($348\\text{ kJ/mol}$).</li>
  <li><strong>2. Tetravalency:</strong> Having a valency of four, a carbon atom is capable of bonding with four other atoms of carbon or atoms of monovalent elements (H, Cl) or polyvalent elements (O, N, S). It can also form single, double, and triple bonds ($C-C, C=C, C\\equiv C$).</li>
</ol>`,
      [
        { key: 'Catenation: self-linking property forming stable long chains/rings', marks: '1 Mark' },
        { key: 'Tetravalency: valency of 4 allowing bonding with four atoms and multiple bonds', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q5',
      'In-Text Page 68 • Q3',
      'What will be the formula and electron dot structure of cyclopentane?',
      2,
      `<p><strong>Cyclopentane:</strong></p>
<ol>
  <li><strong>Molecular Formula:</strong> $\\text{C}_5\\text{H}_{10}$ (General formula for cycloalkanes: $\\text{C}_n\\text{H}_{2n}$).</li>
  <li><strong>Structure:</strong> A five-carbon ring where each carbon atom is bonded to two neighbouring carbon atoms and two hydrogen atoms via single covalent bonds:
    $$\\text{Ring of } (-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-)$$
  </li>
  <li><strong>Electron Dot Structure:</strong> Total valence electrons = $5 \\times 4\\text{ (from C)} + 10 \\times 1\\text{ (from H)} = 30$ valence electrons (15 single covalent electron pairs).</li>
</ol>`,
      [
        { key: 'Molecular formula C5H10', marks: '1 Mark' },
        { key: 'Ring structure with single covalent bonds and complete octets', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q6',
      'In-Text Page 68 • Q4',
      'Draw the structures for the following compounds: (i) Ethanoic acid (ii) Bromopentane (iii) Butanone (iv) Hexanal. Are structural isomers possible for bromopentane?',
      3,
      `<p><strong>Structural Formulae:</strong></p>
<ol>
  <li><strong>(i) Ethanoic acid:</strong> $\\text{CH}_3-\\text{COOH}$<br>
    $$\\text{H}-\\text{C}(\\text{H})_2-\\text{C}(=\\text{O})-\\text{OH}$$
  </li>
  <li><strong>(ii) Bromopentane:</strong> $\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2\\text{Br}$</li>
  <li><strong>(iii) Butanone:</strong> $\\text{CH}_3-\\text{CO}-\\text{CH}_2-\\text{CH}_3$ (Ketone group at C-2)</li>
  <li><strong>(iv) Hexanal:</strong> $\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{CHO}$ (Aldehyde group at C-1)</li>
</ol>
<p><strong>Are structural isomers possible for bromopentane?</strong><br>
<strong>Yes</strong>, structural isomers are possible for bromopentane: 1-bromopentane, 2-bromopentane, and 3-bromopentane (position isomers), plus branched chain isomers like 1-bromo-2-methylbutane.</p>`,
      [
        { key: 'Correct structures for Ethanoic acid and Bromopentane', marks: '1 Mark' },
        { key: 'Correct structures for Butanone and Hexanal', marks: '1 Mark' },
        { key: 'Yes, isomers exist for bromopentane (1-bromo, 2-bromo, 3-bromopentane)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q7',
      'In-Text Page 68 • Q5',
      'How would you name the following compounds? (i) $\\text{CH}_3-\\text{CH}_2-\\text{Br}$, (ii) $\\text{H}-\\text{C}(=\\text{O})-\\text{H}$, (iii) $\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{C}\\equiv\\text{CH}$.',
      2,
      `<p><strong>IUPAC Names:</strong></p>
<ol>
  <li><strong>(i) $\\text{CH}_3-\\text{CH}_2-\\text{Br}$:</strong> <strong>Bromoethane</strong> (two-carbon chain with halo-substituent).</li>
  <li><strong>(ii) $\\text{H}-\\text{CHO}$:</strong> <strong>Methanal</strong> (commonly Formaldehyde; one-carbon aldehyde).</li>
  <li><strong>(iii) $\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{C}\\equiv\\text{CH}$:</strong> <strong>Hex-1-yne</strong> (six-carbon straight chain with terminal triple bond).</li>
</ol>`,
      [
        { key: '(i) Bromoethane', marks: '0.5 Mark' },
        { key: '(ii) Methanal', marks: '0.5 Mark' },
        { key: '(iii) Hex-1-yne', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 71 ---
    renderQCard(
      'c10s-ch4-q8',
      'In-Text Page 71 • Q1',
      'Why is the conversion of ethanol to ethanoic acid an oxidation reaction?',
      2,
      `<p><strong>Chemical Explanation:</strong></p>
<p>The conversion of ethanol to ethanoic acid is an oxidation reaction because it involves the <strong>addition of oxygen and removal of hydrogen</strong>:</p>
$$\\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{\\text{Alkaline }\\text{KMnO}_4 + \\Delta} \\text{CH}_3\\text{COOH}$$
<ul>
  <li>Ethanol ($\\text{C}_2\\text{H}_6\\text{O}$) contains 1 oxygen atom and 6 hydrogen atoms.</li>
  <li>Ethanoic acid ($\\text{C}_2\\text{H}_4\\text{O}_2$) contains 2 oxygen atoms and 4 hydrogen atoms.</li>
  <li>There is a net gain of one oxygen atom and a loss of two hydrogen atoms per molecule, mediated by strong oxidising agents like alkaline $\\text{KMnO}_4$ or acidified $\\text{K}_2\\text{Cr}_2\\text{O}_7$.</li>
</ul>`,
      [
        { key: 'Definition of oxidation: addition of oxygen and removal of hydrogen', marks: '1 Mark' },
        { key: 'Comparison of molecular formulae (C2H6O -> C2H4O2) and oxidising agents', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q9',
      'In-Text Page 71 • Q2',
      'A mixture of oxygen and ethyne is burnt for welding. Can you tell why a mixture of ethyne and air is not used?',
      2,
      `<p><strong>Combustion Chemistry:</strong></p>
<ol>
  <li>Ethyne (acetylene, $\\text{HC}\\equiv\\text{CH}$) has a very high carbon-to-hydrogen ratio ($92.3\\%$ carbon by mass).</li>
  <li><strong>When burnt in air:</strong> Atmospheric air contains only about $21\\%$ oxygen by volume. Due to the limited oxygen supply, incomplete combustion occurs, producing a luminous, sooty flame with black smoke (unburnt carbon particles) and a relatively low flame temperature (around $2200^\\circ\\text{C}$), which is inadequate for welding high-melting metals.</li>
  <li><strong>When burnt in pure oxygen (Oxy-acetylene torch):</strong> Complete combustion occurs according to:
    $$2\\text{C}_2\\text{H}_2(g) + 5\\text{O}_2(g) \\longrightarrow 4\\text{CO}_2(g) + 2\\text{H}_2\\text{O}(g) + \\text{Heat}$$
    This produces a non-sooty, clean blue flame reaching an extremely high temperature of approximately <strong>$3000^\\circ\\text{C} - 3300^\\circ\\text{C}$</strong>, which instantly melts metals to weld them.</li>
</ol>`,
      [
        { key: 'Burning in air results in incomplete combustion, sooty flame, and insufficient temperature', marks: '1 Mark' },
        { key: 'Pure oxygen provides complete combustion yielding an intense 3000°C welding flame', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 74 ---
    renderQCard(
      'c10s-ch4-q10',
      'In-Text Page 74 • Q1',
      'How would you distinguish experimentally between an alcohol and a carboxylic acid?',
      2,
      `<p><strong>Experimental Differentiation:</strong></p>
<p><strong>1. Sodium Hydrogen Carbonate Test (Baking Soda Test):</strong></p>
<ul>
  <li>Add a pinch of sodium hydrogen carbonate ($\\text{NaHCO}_3$) or sodium carbonate to both test samples.</li>
  <li><strong>Carboxylic acid (Ethanoic acid):</strong> Produces brisk effervescence due to the rapid evolution of carbon dioxide gas, which turns lime water milky:
    $$\\text{CH}_3\\text{COOH} + \\text{NaHCO}_3 \\longrightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$$
  </li>
  <li><strong>Alcohol (Ethanol):</strong> Does not react with $\\text{NaHCO}_3$; no effervescence or gas evolution is observed.</li>
</ul>
<p><strong>2. Litmus Test:</strong> Ethanoic acid turns blue litmus red; alcohol has no effect on blue litmus.</p>`,
      [
        { key: 'Sodium hydrogen carbonate test: carboxylic acid gives brisk effervescence (CO2)', marks: '1 Mark' },
        { key: 'Alcohol does not react with NaHCO3 / blue litmus stays blue', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q11',
      'In-Text Page 74 • Q2',
      'What are oxidising agents?',
      1,
      `<p><strong>Definition:</strong></p>
<p>Substances that have the ability to add oxygen to or remove hydrogen from other substances (i.e., cause oxidation of other substances while undergoing reduction themselves) are called <strong>oxidising agents</strong>.</p>
<p><em>Examples:</em> Alkaline potassium permanganate ($\\text{KMnO}_4$) and acidified potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$).</p>`,
      [
        { key: 'Substances that donate oxygen or remove hydrogen with examples (KMnO4/K2Cr2O7)', marks: '1 Mark' }
      ]
    ),

    // --- End-of-Chapter Exercises (Q1 to Q15) ---
    renderQCard(
      'c10s-ch4-q12',
      'NCERT Exercise • Q1',
      'Ethane, with the molecular formula $\\text{C}_2\\text{H}_6$ has: (a) 6 covalent bonds (b) 7 covalent bonds (c) 8 covalent bonds (d) 9 covalent bonds.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(b) 7 covalent bonds</strong></p>
<p><strong>Reason:</strong> In an ethane molecule ($\\text{CH}_3-\\text{CH}_3$), there is:</p>
<ul>
  <li>1 single covalent bond between the two carbon atoms ($C-C$).</li>
  <li>6 single covalent bonds between carbon and hydrogen atoms ($6 \\times C-H$).</li>
  <li>Total covalent bonds = $1 + 6 = \\mathbf{7\\text{ covalent bonds}}$.</li>
</ul>`,
      [
        { key: 'Option (b) 7 covalent bonds (1 C-C bond + 6 C-H bonds)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q13',
      'NCERT Exercise • Q2',
      'Butanone is a four-carbon compound with the functional group: (a) carboxylic acid (b) aldehyde (c) ketone (d) alcohol.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(c) ketone</strong></p>
<p><strong>Reason:</strong> The suffix <em>'-one'</em> indicates the presence of a carbonyl group ($>C=O$) attached to two carbon atoms, which defines a <strong>ketone</strong> (Formula: $\\text{CH}_3-\\text{CO}-\\text{CH}_2-\\text{CH}_3$).</p>`,
      [
        { key: 'Option (c) ketone with formula CH3COCH2CH3', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q14',
      'NCERT Exercise • Q3',
      'While cooking, if the bottom of the vessel is getting blackened on the outside, it means that: (a) the food is not cooked completely (b) the fuel is not burning completely (c) the fuel is wet (d) the fuel is burning completely.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(b) the fuel is not burning completely</strong></p>
<p><strong>Reason:</strong> Blackening of cooking vessels occurs due to the deposition of unburnt carbon particles (soot). This indicates insufficient oxygen supply (air holes in the burner are clogged), resulting in <strong>incomplete combustion</strong> of the hydrocarbon fuel.</p>`,
      [
        { key: 'Option (b) the fuel is not burning completely due to incomplete combustion', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q15',
      'NCERT Exercise • Q4',
      'Explain the nature of the covalent bond using the bond formation in $\\text{CH}_3\\text{Cl}$.',
      2,
      `<p><strong>Bond Formation in Chloromethane ($\\text{CH}_3\\text{Cl}$):</strong></p>
<ol>
  <li><strong>Valence Electron Count:</strong>
    <ul>
      <li>Carbon ($Z=6$): $2, 4$ (needs 4 electrons).</li>
      <li>Hydrogen ($Z=1$): $1$ (needs 1 electron).</li>
      <li>Chlorine ($Z=17$): $2, 8, 7$ (needs 1 electron).</li>
    </ul>
  </li>
  <li><strong>Sharing of Electron Pairs:</strong> Carbon shares one electron each with three hydrogen atoms to form three $C-H$ single covalent bonds. It also shares its fourth valence electron with one chlorine atom to form a $C-Cl$ single covalent bond.</li>
  <li><strong>Covalent & Polar Nature:</strong> All four bonds are formed by mutual sharing of electrons (covalent). However, chlorine is substantially more electronegative than carbon, pulling the shared pair of electrons towards itself. This creates a partial negative charge on chlorine ($\\delta^-$) and a partial positive charge on carbon ($\\delta^+$), giving the $C-Cl$ bond a <strong>polar covalent nature</strong>.</li>
</ol>`,
      [
        { key: 'Mutual sharing of electron pairs completes octet of C and Cl and duplet of H', marks: '1 Mark' },
        { key: 'Explaining polar covalent nature due to higher electronegativity of chlorine', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q16',
      'NCERT Exercise • Q5',
      'Draw the electron dot structures for: (a) Ethanoic acid (b) $\\text{H}_2\\text{S}$ (c) Propanone (d) $\\text{F}_2$.',
      3,
      `<p><strong>Electron Dot Structures:</strong></p>
<ol>
  <li><strong>(a) Ethanoic acid ($\\text{CH}_3\\text{COOH}$):</strong>
    $$\\text{H}_3\\text{C}-\\text{C}(=\\text{O})-\\text{O}-\\text{H}$$
    Central carbon is double-bonded to carbonyl oxygen (sharing 2 pairs) and single-bonded to hydroxyl oxygen (sharing 1 pair).
  </li>
  <li><strong>(b) Hydrogen sulphide ($\\text{H}_2\\text{S}$):</strong>
    Sulphur has 6 valence electrons. It shares 1 electron each with two hydrogen atoms and retains two lone pairs:
    $$\\text{H}:\\ddot{\\text{S}}:\\text{H}$$
  </li>
  <li><strong>(c) Propanone ($\\text{CH}_3\\text{COCH}_3$):</strong>
    Central carbon shares a double bond with oxygen ($:C::\\ddot{\\text{O}}:$) and single bonds with two methyl carbons.
  </li>
  <li><strong>(d) Fluorine molecule ($\\text{F}_2$):</strong>
    Each fluorine atom has 7 valence electrons and shares 1 electron pair:
    $$:\\ddot{\\text{F}}:\\ddot{\\text{F}}:$$
  </li>
</ol>`,
      [
        { key: 'Structures for ethanoic acid and H2S with lone pairs', marks: '1.5 Marks' },
        { key: 'Structures for propanone and F2 with complete octets', marks: '1.5 Marks' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q17',
      'NCERT Exercise • Q6',
      'What is an homologous series? Explain with an example.',
      2,
      `<p><strong>Definition:</strong></p>
<p>A series of structurally related organic compounds in which the same functional group substitutes for hydrogen in a carbon chain, such that successive members differ by a <strong>$-\\text{CH}_2-$ unit</strong> (methylene group) and by <strong>14 atomic mass units (u)</strong>, is called an <strong>homologous series</strong>.</p>
<p><strong>Example: Homologous Series of Alkanes (General formula: $\\text{C}_n\\text{H}_{2n+2}$):</strong></p>
<ol>
  <li>Methane ($\\text{CH}_4$, mass = $16\\text{ u}$)</li>
  <li>Ethane ($\\text{C}_2\\text{H}_6$, mass = $30\\text{ u}$, difference = $-\\text{CH}_2-$ and $14\\text{ u}$)</li>
  <li>Propane ($\\text{C}_3\\text{H}_8$, mass = $44\\text{ u}$)</li>
  <li>Butane ($\\text{C}_4\\text{H}_{10}$, mass = $58\\text{ u}$)</li>
</ol>
<p>All members exhibit identical chemical properties but show a gradual gradation in physical properties (boiling point, melting point, density).</p>`,
      [
        { key: 'Definition: successive members differ by -CH2- unit and 14 u with same functional group', marks: '1 Mark' },
        { key: 'Alkane series example with formulas and gradation in physical properties', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q18',
      'NCERT Exercise • Q7',
      'How can ethanol and ethanoic acid be differentiated on the basis of their physical and chemical properties?',
      3,
      `<p><strong>Comparison Table:</strong></p>
<table style="width:100%; border-collapse:collapse; margin:12px 0;">
  <thead>
    <tr style="background:#f1f5f9; text-align:left;">
      <th style="padding:8px; border:1px solid #cbd5e1;">Property</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$)</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Ethanoic Acid ($\\text{CH}_3\\text{COOH}$)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Smell & Melting Pt</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Pleasant spirituous smell; m.p. $156\\text{ K}$ (stays liquid in winter).</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Pungent vinegar-like smell; m.p. $290\\text{ K}$ ($17^\\circ\\text{C}$, freezes into glacial ice-like solid).</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Litmus Test</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Neutral; no effect on red or blue litmus.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Acidic; turns blue litmus red.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>$\\text{NaHCO}_3$ Reaction</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">No reaction; no gas evolved.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Brisk effervescence of $\\text{CO}_2$ gas that turns lime water milky.</td>
    </tr>
  </tbody>
</table>`,
      [
        { key: 'Physical differentiation: vinegar smell/freezing point vs pleasant spirit', marks: '1 Mark' },
        { key: 'Chemical differentiation: NaHCO3 brisk effervescence vs no reaction', marks: '1 Mark' },
        { key: 'Litmus differentiation: blue litmus turns red vs neutral', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q19',
      'NCERT Exercise • Q8',
      'Why does micelle formation take place when soap is added to water? Will a micelle be formed in other solvents such as ethanol also?',
      3,
      `<p><strong>Mechanism of Micelle Formation:</strong></p>
<ol>
  <li><strong>Soap Molecule Structure:</strong> A soap molecule (e.g., sodium stearate $\\text{C}_{17}\\text{H}_{35}\\text{COO}^-\\text{Na}^+$) has two distinct parts:
    <ul>
      <li>A long hydrocarbon tail which is <strong>hydrophobic (water-fearing)</strong> and lipophilic (oil-loving).</li>
      <li>An ionic carboxylate head ($-\\text{COO}^-\\text{Na}^+$) which is <strong>hydrophilic (water-loving)</strong>.</li>
    </ul>
  </li>
  <li><strong>Micelle Assembly in Water:</strong> When dissolved in water, the hydrophobic hydrocarbon tails cluster together inside the core to escape contact with water, while the hydrophilic ionic heads point outwards into the aqueous medium. This spherical aggregate is called a <strong>micelle</strong>.</li>
  <li><strong>Will Micelles Form in Ethanol?</strong><br>
    <strong>No</strong>, micelles will not form in ethanol. Ethanol is an organic solvent that is non-polar/mildly polar. The hydrocarbon tails of soap are soluble in ethanol, so they dissolve uniformly throughout ethanol rather than aggregating into micelles.</li>
</ol>`,
      [
        { key: 'Soap molecule dual structure: hydrophobic tail and hydrophilic ionic head', marks: '1 Mark' },
        { key: 'Explanation of spherical micelle aggregation shielding tails from water', marks: '1 Mark' },
        { key: 'Micelles do not form in ethanol because hydrophobic tails dissolve in ethanol', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q20',
      'NCERT Exercise • Q9',
      'Why are carbon and its compounds used as fuels for most applications?',
      2,
      `<p><strong>Reasons:</strong></p>
<ol>
  <li><strong>High Calorific Value:</strong> When carbon and hydrocarbons undergo combustion in air, strong carbon-oxygen ($C=O$) and hydrogen-oxygen ($O-H$) bonds are formed. This releases a large quantity of thermal energy per unit mass:
    $$\\text{C} + \\text{O}_2 \\longrightarrow \\text{CO}_2 + \\text{Heat and Light}$$
    $$\\text{CH}_4 + 2\\text{O}_2 \\longrightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O} + 890\\text{ kJ/mol}$$
  </li>
  <li><strong>Optimum Ignition Temperature & Controllable Burn Rate:</strong> Carbon fuels have moderate ignition temperatures and can be stored, transported, and combusted safely at controllable rates without explosive hazards.</li>
</ol>`,
      [
        { key: 'High calorific value / exothermic combustion releasing large heat energy', marks: '1 Mark' },
        { key: 'Proper ignition temperature and controllable clean burning', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q21',
      'NCERT Exercise • Q10',
      'Explain the formation of scum when hard water is treated with soap.',
      2,
      `<p><strong>Formation of Scum:</strong></p>
<p>Hard water contains dissolved salts of calcium and magnesium, such as calcium hydrogen carbonate $\\text{Ca(HCO}_3)_2$ or magnesium sulphate $\\text{MgSO}_4$.</p>
<p>When soap (sodium stearate, $\\text{C}_{17}\\text{H}_{35}\\text{COONa}$) is added to hard water, the sodium ions in soap are replaced by calcium and magnesium ions. This produces <strong>calcium and magnesium stearates</strong>, which are insoluble in water and separate as a curdy, sticky white precipitate called <strong>scum</strong>:</p>
$$2\\text{C}_{17}\\text{H}_{35}\\text{COONa} + \\text{Ca}^{2+} \\longrightarrow (\\text{C}_{17}\\text{H}_{35}\\text{COO})_2\\text{Ca}\\downarrow\\text{ (Scum)} + 2\\text{Na}^+$$
<p>This scum wastes soap and sticks to fabrics, hindering lather formation until all $\\text{Ca}^{2+}$ and $\\text{Mg}^{2+}$ ions are precipitated.</p>`,
      [
        { key: 'Hard water contains dissolved calcium and magnesium ions', marks: '1 Mark' },
        { key: 'Reaction of soap with Ca2+/Mg2+ precipitates insoluble calcium/magnesium stearate (scum)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q22',
      'NCERT Exercise • Q11',
      'What change will you observe if you test soap with litmus paper (red and blue)?',
      2,
      `<p><strong>Observation and Chemical Reason:</strong></p>
<ol>
  <li><strong>Observation:</strong>
    <ul>
      <li><strong>Red litmus paper turns blue.</strong></li>
      <li><strong>Blue litmus paper remains blue.</strong></li>
    </ul>
  </li>
  <li><strong>Explanation:</strong> Soap is a sodium or potassium salt of a weak long-chain carboxylic acid (fatty acid) and a strong base (sodium hydroxide, $\\text{NaOH}$). When dissolved in water, soap undergoes anionic hydrolysis:
    $$\\text{RCOO}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{RCOOH} + \\text{OH}^-$$
    The release of excess hydroxide ions ($\\text{OH}^-$) makes the soap solution <strong>basic/alkaline</strong> in nature ($\\text{pH} \\approx 8.5 - 9.5$). Consequently, it turns red litmus blue.
  </li>
</ol>`,
      [
        { key: 'Red litmus turns blue; blue litmus stays blue', marks: '1 Mark' },
        { key: 'Soap is a salt of weak fatty acid and strong base, hydrolysing to alkaline solution', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q23',
      'NCERT Exercise • Q12',
      'What is hydrogenation? What is its industrial application?',
      2,
      `<p><strong>Definition and Reaction:</strong></p>
<p>The addition of hydrogen to unsaturated hydrocarbons (alkenes or alkynes having double or triple bonds) in the presence of a finely divided catalyst (such as <strong>Nickel ($\\text{Ni}$)</strong> or Palladium) to convert them into saturated hydrocarbons is called <strong>hydrogenation</strong>:</p>
$$\\text{R}_2\\text{C}=\\text{CR}_2 + \\text{H}_2 \\xrightarrow{\\text{Ni catalyst, } 200^\\circ\\text{C}} \\text{R}_2\\text{CH}-\\text{CHR}_2$$
<p><strong>Industrial Application:</strong></p>
<p>Hydrogenation is widely used in the food industry to convert liquid unsaturated vegetable oils (which contain healthy double bonds) into solid edible saturated fats known as <strong>Vanaspati ghee (margarine)</strong>:</p>
$$\\text{Vegetable oil (liquid)} + \\text{H}_2 \\xrightarrow{\\text{Ni}} \\text{Vanaspati Ghee (solid)}$$`,
      [
        { key: 'Addition of hydrogen across double bonds in the presence of Ni catalyst', marks: '1 Mark' },
        { key: 'Industrial conversion of liquid vegetable oils into solid saturated vanaspati ghee', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q24',
      'NCERT Exercise • Q13',
      'Which of the following hydrocarbons undergo addition reactions? $\\text{C}_2\\text{H}_6$, $\\text{C}_3\\text{H}_8$, $\\text{C}_3\\text{H}_6$, $\\text{C}_2\\text{H}_2$ and $\\text{CH}_4$.',
      2,
      `<p><strong>Analysis of Hydrocarbons:</strong></p>
<p>Only <strong>unsaturated hydrocarbons</strong> (alkenes $\\text{C}_n\\text{H}_{2n}$ and alkynes $\\text{C}_n\\text{H}_{2n-2}$) possess carbon-carbon double or triple bonds and undergo addition reactions.</p>
<ol>
  <li>$\\text{C}_2\\text{H}_6$ (Ethane, $\\text{C}_n\\text{H}_{2n+2}$): Saturated alkane &rarr; <strong>No</strong> addition reaction.</li>
  <li>$\\text{C}_3\\text{H}_8$ (Propane, $\\text{C}_n\\text{H}_{2n+2}$): Saturated alkane &rarr; <strong>No</strong> addition reaction.</li>
  <li><strong>$\\text{C}_3\\text{H}_6$ (Propene, $\\text{C}_n\\text{H}_{2n}$):</strong> Unsaturated alkene &rarr; <strong>YES</strong>, undergoes addition reaction.</li>
  <li><strong>$\\text{C}_2\\text{H}_2$ (Ethyne, $\\text{C}_n\\text{H}_{2n-2}$):</strong> Unsaturated alkyne &rarr; <strong>YES</strong>, undergoes addition reaction.</li>
  <li>$\\text{CH}_4$ (Methane, $\\text{C}_n\\text{H}_{2n+2}$): Saturated alkane &rarr; <strong>No</strong> addition reaction.</li>
</ol>
<p><strong>Answer:</strong> <strong>$\\text{C}_3\\text{H}_6$ (Propene)</strong> and <strong>$\\text{C}_2\\text{H}_2$ (Ethyne)</strong>.</p>`,
      [
        { key: 'Criterion: only unsaturated hydrocarbons with double/triple bonds undergo addition', marks: '1 Mark' },
        { key: 'Correct identification: C3H6 (propene) and C2H2 (ethyne)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q25',
      'NCERT Exercise • Q14',
      'Give a test that can be used to differentiate chemically between butter and cooking oil.',
      2,
      `<p><strong>Chemical Test: Bromine Water Test</strong></p>
<ol>
  <li><strong>Procedure:</strong> Take about 2 mL of liquid butter and 2 mL of cooking oil in separate test tubes. Add a few drops of reddish-brown <strong>bromine water</strong> (or alkaline potassium permanganate) to each test tube and shake well.</li>
  <li><strong>Cooking Oil (Unsaturated fat):</strong> Cooking oil contains long unsaturated carbon chains with double bonds. It undergoes an addition reaction with bromine, causing the reddish-brown colour of bromine water to <strong>decolourise and turn colourless</strong>.</li>
  <li><strong>Butter (Saturated fat):</strong> Butter contains saturated fatty acid chains. It does not react with bromine water under normal conditions; the reddish-brown colour of bromine water <strong>persists unchanged</strong>.</li>
</ol>`,
      [
        { key: 'Bromine water test / alkaline KMnO4 test', marks: '1 Mark' },
        { key: 'Cooking oil decolourises bromine water (unsaturated); butter does not decolourise (saturated)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch4-q26',
      'NCERT Exercise • Q15',
      'Explain the mechanism of the cleaning action of soaps.',
      3,
      `<p><strong>Cleaning Mechanism of Soap:</strong></p>
<ol>
  <li><strong>Structure of Soap:</strong> A soap molecule has an elongated structure with two contrasting ends:
    <ul>
      <li>A non-polar <strong>hydrophobic hydrocarbon tail</strong> that repels water but dissolves in oil and grease.</li>
      <li>A polar <strong>hydrophilic ionic head</strong> ($-\\text{COO}^-\\text{Na}^+$) that dissolves in water.</li>
    </ul>
  </li>
  <li><strong>Micelle Formation Around Dirt:</strong> Dirt and grease on soiled clothes are oily and water-insoluble. When soap is added to water containing dirty clothes, the hydrophobic tails embed themselves directly into the oil droplets, while the hydrophilic ionic heads project outwards into the water. This forms spherical aggregates called <strong>micelles</strong> trapping the oil droplet in their center.</li>
  <li><strong>Emulsification and Removal:</strong> The ionic heads at the surface of micelles carry identical negative charges, causing them to repel each other and prevent coagulation into larger droplets. When the water is agitated (by scrubbing or washing machine), the soap micelles containing trapped grease are pulled away from the fabric into the water, forming a stable emulsion that is easily rinsed away.</li>
</ol>`,
      [
        { key: 'Hydrophobic tail dissolves in oil; hydrophilic head stays in water', marks: '1 Mark' },
        { key: 'Micelle formation traps oily dirt at the core', marks: '1 Mark' },
        { key: 'Ionic repulsion prevents coalescence, allowing dirt to rinse away with agitated water', marks: '1 Mark' }
      ]
    )
  ];

  const cbqHtml = `  <div class="cbq-section">
    <div class="cbq-header"><span>🎯 Competency &amp; Case Study Questions (HOTS) — Chapter 4</span><span class="cbq-badge">CBSE Board 2026-27</span></div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #34d399;">
        <div class="cbq-type" style="color:#059669;">Case Study Question • Esterification and Saponification</div>
        <div class="cbq-question">An organic compound 'A' of molecular formula $\\text{C}_2\\text{H}_6\\text{O}$ on heating with excess concentrated sulphuric acid at $443\\text{ K}$ gives compound 'B'. Compound 'A' on oxidation with alkaline $\\text{KMnO}_4$ forms compound 'C'. When 'A' and 'C' react together in the presence of an acid catalyst, a sweet-smelling compound 'D' is produced. (i) Identify compounds A, B, C and D. (ii) Write the chemical equation for the formation of compound D. (iii) What happens when compound D is heated with sodium hydroxide solution? Name this reaction.</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer"><p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>(i) Identification of Compounds:</strong>
    <ul>
      <li>Compound 'A' is <strong>Ethanol</strong> ($\\text{CH}_3\\text{CH}_2\\text{OH}$).</li>
      <li>Compound 'B' is <strong>Ethene</strong> ($\\text{CH}_2=\\text{CH}_2$) formed by dehydration of ethanol at $443\\text{ K}$.</li>
      <li>Compound 'C' is <strong>Ethanoic acid</strong> ($\\text{CH}_3\\text{COOH}$) formed by oxidation of ethanol.</li>
      <li>Compound 'D' is <strong>Ethyl ethanoate</strong> (an ester, $\\text{CH}_3\\text{COOCH}_2\\text{CH}_3$) with a pleasant fruity smell.</li>
    </ul>
  </li>
  <li><strong>(ii) Esterification Equation:</strong>
    $$\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow{\\text{conc. }\\text{H}_2\\text{SO}_4} \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$$
  </li>
  <li><strong>(iii) Reaction with $\\text{NaOH}$ (Saponification):</strong> Heating ester with $\\text{NaOH}$ hydrolyses it back into alcohol and sodium ethanoate (soap base):
    $$\\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{NaOH} \\longrightarrow \\text{CH}_3\\text{COONa} + \\text{C}_2\\text{H}_5\\text{OH}$$
    This reaction is known as <strong>Saponification</strong>.
  </li>
</ol></div>
      </div>
    </div>
  </div>`;

  return `<section class="chapter-section" id="ch4">
  <div class="chapter-header">
    <div class="ch-badge">4</div>
    <div class="chapter-header-info">
      <div class="ch-category">Science • Class 10 Board Exam (NCERT Rationalized)</div>
      <h2>Chapter 4: Carbon and its Compounds</h2>
      <p>Covalent Bonding, Versatile Nature of Carbon, Homologous Series, Nomenclature, Chemical Reactions of Ethanol & Ethanoic Acid, Soaps & Detergents — CBSE Board Marking Scheme 2026-27</p>
    </div>
  </div>
  <div class="ex-div">NCERT In-Text Questions (Pages 61, 68, 71, 74) &amp; Chapter-End Exercises (Questions 1 to 15)</div>

${qCards.join('\n\n')}

${cbqHtml}
  <div class="chapter-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(3)">← Previous Chapter</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(5)">Next Chapter →</button>
  </div>
</section>
`;
}

module.exports = {
  getChapter1Html,
  getChapter2Html,
  getChapter3Html,
  getChapter4Html,
  renderQCard
};
