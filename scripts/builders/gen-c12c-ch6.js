// scripts/builders/gen-c12c-ch6.js
// Class 12 Chemistry Chapter 6: Haloalkanes and Haloarenes (हैलोऐल्केन तथा हैलोऐरीन) (NCERT Rationalised 2026–27)
// Full Coverage: 9 In-Text Questions + 33 End-of-Chapter Exercises / Sub-exercises = 42 Questions Verbatim
const { createQCard, saveChapter } = require('./c12c-helper');

const chNum = 6;
const chTitle = 'Haloalkanes and Haloarenes (हैलोऐल्केन तथा हैलोऐरीन)';
const exTitle = 'NCERT Chapter 6: In-Text Questions (6.1–6.9) & End-of-Chapter Exercises (6.1–6.33)';

const svgDiagram = `
<div style="background:linear-gradient(135deg, #fff7ed, #ffedd5); border:1px solid #fed7aa; border-radius:12px; padding:20px; margin-bottom:24px;">
  <h3 style="font-size:1.05rem; color:#9a3412; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Reaction Mechanisms: SN1, SN2, Elimination & Haloarene Reactivity
  </h3>
  <svg viewBox="0 0 850 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
    <!-- Box 1: SN2 Mechanism -->
    <rect x="15" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#ea580c" stroke-width="2"/>
    <text x="110" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#9a3412">S_N2 Mechanism</text>
    <text x="110" y="70" text-anchor="middle" font-size="11" fill="#334155">Bimolecular (1-step)</text>
    <text x="110" y="94" text-anchor="middle" font-size="10" fill="#64748b">• Rate = k[R-X][Nu⁻]</text>
    <text x="110" y="112" text-anchor="middle" font-size="10" fill="#64748b">• 1° > 2° > 3° | Walden Inversion</text>

    <!-- Box 2: SN1 Mechanism -->
    <rect x="225" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
    <text x="320" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">S_N1 Mechanism</text>
    <text x="320" y="72" text-anchor="middle" font-size="11" fill="#334155">Unimolecular (2-step)</text>
    <text x="320" y="96" text-anchor="middle" font-size="10" fill="#64748b">• Rate = k[R-X] via R⁺ intermediate</text>
    <text x="320" y="114" text-anchor="middle" font-size="10" fill="#64748b">• 3° > 2° > 1° | Racemisation</text>

    <!-- Box 3: Elimination (Saytzeff) -->
    <rect x="435" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
    <text x="530" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Saytzeff Elimination</text>
    <text x="530" y="72" text-anchor="middle" font-size="11" fill="#334155">Alc. KOH / β-Elimination</text>
    <text x="530" y="96" text-anchor="middle" font-size="10" fill="#64748b">• More substituted alkene is major</text>
    <text x="530" y="114" text-anchor="middle" font-size="10" fill="#64748b">• But-2-ene (81%) > But-1-ene (19%)</text>

    <!-- Box 4: Haloarene Low Reactivity -->
    <rect x="645" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
    <text x="740" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#5b21b6">Haloarene Low Reactivity</text>
    <text x="740" y="72" text-anchor="middle" font-size="11" fill="#334155">Partial Double Bond C-Cl</text>
    <text x="740" y="96" text-anchor="middle" font-size="10" fill="#64748b">• Resonance stabilization (C=Cl⁺)</text>
    <text x="740" y="114" text-anchor="middle" font-size="10" fill="#64748b">• sp² C is more electronegative</text>
  </svg>
</div>`;

const questions = [];

// ============================================================================
// PART 1: NCERT IN-TEXT QUESTIONS (6.1 to 6.9)
// ============================================================================

// Question 6.1 (In-Text)
questions.push(createQCard(
  'c12c-ch6-q1', 'In-Text 6.1', 'NCERT In-Text',
  'Write structures of the following compounds:<br>(i) 2-Chloro-3-methylpentane<br>(ii) 1-Chloro-4-ethylcyclohexane<br>(iii) 4-tert-Butyl-3-iodoheptane<br>(iv) 1,4-Dibromobut-2-ene<br>(v) 1-Bromo-4-sec-butyl-2-methylbenzene',
  `<div class="step">
    <b>Structural Formulas:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>2-Chloro-3-methylpentane:</strong>
        <br>$$\\text{CH}_3-\\text{CH(Cl)}-\\text{CH(CH}_3)-\\text{CH}_2-\\text{CH}_3$$</li>
      <li><strong>1-Chloro-4-ethylcyclohexane:</strong>
        <br>A six-membered cyclohexane ring with a chlorine atom ($-\\text{Cl}$) at carbon-1 and an ethyl group ($-\\text{CH}_2\\text{CH}_3$) at carbon-4.</li>
      <li><strong>4-tert-Butyl-3-iodoheptane:</strong>
        <br>$$\\text{CH}_3-\\text{CH}_2-\\text{CH(I)}-\\text{CH}[\\text{C(CH}_3)_3]-\\text{CH}_2-\\text{CH}_2-\\text{CH}_3$$</li>
      <li><strong>1,4-Dibromobut-2-ene:</strong>
        <br>$$\\text{Br}-\\text{CH}_2-\\text{CH}=\\text{CH}-\\text{CH}_2-\\text{Br}$$</li>
      <li><strong>1-Bromo-4-sec-butyl-2-methylbenzene:</strong>
        <br>Benzene ring with $-\\text{Br}$ at position 1, $-\\text{CH}_3$ at position 2, and $-\\text{CH(CH}_3)\\text{CH}_2\\text{CH}_3$ at position 4.</li>
    </ol>
  </div>`,
  '2½ Marks',
  [
    ['Correct skeletal structures for (i) to (iii)', '1½ Marks'],
    ['Correct skeletal structures for (iv) and (v)', '1 Mark']
  ]
));

// Question 6.2 (In-Text)
questions.push(createQCard(
  'c12c-ch6-q2', 'In-Text 6.2', 'NCERT In-Text',
  'Why is sulphuric acid not used during the reaction of alcohols with $\\text{KI}$?',
  `<div class="step">
    <b>Reason:</b><br>
    Sulphuric acid ($\\text{H}_2\\text{SO}_4$) is a strong oxidising agent.<br>
    In the reaction, $\\text{H}_2\\text{SO}_4$ first reacts with $\\text{KI}$ to produce hydrogen iodide ($\text{HI}$):
    $$2\\text{KI} + \\text{H}_2\\text{SO}_4 \\rightarrow 2\\text{KHSO}_4 + 2\\text{HI}$$
    However, being a strong oxidant, $\\text{H}_2\\text{SO}_4$ immediately oxidises the formed $\\text{HI}$ into elemental iodine ($\\text{I}_2$):
    $$2\\text{HI} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{I}_2 + \\text{SO}_2 + 2\\text{H}_2\\text{O}$$
    As a result, no $\\text{HI}$ is left available to react with the alcohol to produce alkyl iodide.<br>
    <em>Alternative reagent:</em> A non-oxidising acid such as <b>orthophosphoric acid ($\text{H}_3\text{PO}_4$)</b> is used instead of $\\text{H}_2\\text{SO}_4$.
  </div>`,
  '2 Marks',
  [
    ['H₂SO₄ oxidises HI to I₂ preventing reaction with alcohol', '1 Mark'],
    ['Chemical equations and recommendation of non-oxidising H₃PO₄', '1 Mark']
  ]
));

// Question 6.3 (In-Text)
questions.push(createQCard(
  'c12c-ch6-q3', 'In-Text 6.3', 'NCERT In-Text',
  'Write structures of different dihalogen derivatives of propane.',
  `<div class="step">
    <b>Dihalogen Derivatives of Propane ($\text{C}_3\text{H}_6\text{X}_2$):</b><br>
    There are four structural isomers:
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>1,1-Dichloropropane (gem-dihalide):</strong>
        $$\\text{CH}_3-\\text{CH}_2-\\text{CHCl}_2$$</li>
      <li><strong>2,2-Dichloropropane (gem-dihalide):</strong>
        $$\\text{CH}_3-\\text{CCl}_2-\\text{CH}_3$$</li>
      <li><strong>1,2-Dichloropropane (vic-dihalide):</strong>
        $$\\text{CH}_3-\\text{CH(Cl)}-\\text{CH}_2\\text{Cl}$$</li>
      <li><strong>1,3-Dichloropropane (isolated dihalide):</strong>
        $$\\text{Cl}-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{Cl}$$</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['All 4 structural isomers drawn and named correctly', '½ Mark × 4 = 2 Marks']
  ]
));

// Question 6.4 (In-Text)
questions.push(createQCard(
  'c12c-ch6-q4', 'In-Text 6.4', 'NCERT In-Text',
  'Among the isomeric alkanes of molecular formula $\\text{C}_5\\text{H}_{12}$, identify the one that on photochemical chlorination yields:<br>(i) A single monochloride.<br>(ii) Three isomeric monochlorides.<br>(iii) Four isomeric monochlorides.',
  `<div class="step">
    <b>Analysis of Isomers of $\\text{C}_5\\text{H}_{12}$:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Single Monochloride: 2,2-Dimethylpropane (Neopentane):</strong>
        <br>Structure: $\\text{C(CH}_3)_4$. All 12 hydrogen atoms are chemically equivalent ($1^\\circ$). Replacement of any hydrogen atom gives the same compound: <b>1-chloro-2,2-dimethylpropane</b> (neopentyl chloride).</li>
      <li><strong>Three Isomeric Monochlorides: n-Pentane:</strong>
        <br>Structure: $\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{CH}_3$. Contains three sets of non-equivalent hydrogens ($C_1/C_5, C_2/C_4, C_3$). Chlorination yields:
        <br>1. 1-Chloropentane
        <br>2. 2-Chloropentane
        <br>3. 3-Chloropentane</li>
      <li><strong>Four Isomeric Monochlorides: 2-Methylbutane (Isopentane):</strong>
        <br>Structure: $\\text{CH}_3-\\text{CH(CH}_3)-\\text{CH}_2-\\text{CH}_3$. Contains four sets of non-equivalent hydrogens. Chlorination yields:
        <br>1. 1-Chloro-2-methylbutane
        <br>2. 2-Chloro-2-methylbutane
        <br>3. 2-Chloro-3-methylbutane (or 3-chloro-2-methylbutane)
        <br>4. 1-Chloro-3-methylbutane</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) Neopentane (2,2-dimethylpropane) giving 1 monochloride', '1 Mark'],
    ['(ii) n-Pentane giving 3 monochlorides', '1 Mark'],
    ['(iii) Isopentane (2-methylbutane) giving 4 monochlorides', '1 Mark']
  ]
));

// Question 6.5 (In-Text)
questions.push(createQCard(
  'c12c-ch6-q5', 'In-Text 6.5', 'NCERT In-Text',
  'Draw the structures of major monohalo products in each of the following reactions:<br>(i) Cyclohexanol + $\\text{SOCl}_2$<br>(ii) 4-Ethylnitrobenzene + $\\text{Br}_2 / h\\nu$ (heat/light)<br>(iii) 4-Hydroxymethylphenol + $\\text{HCl}$ / heat<br>(iv) 1-Methylcyclohexene + $\\text{HI}$<br>(v) Bromoethane + $\\text{NaI}$ / dry acetone<br>(vi) Cyclohexene + $\\text{Br}_2 / h\\nu$ (light)',
  `<div class="step">
    <b>Major Products with Chemical Reasons:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Cyclohexanol + $\\text{SOCl}_2$:</strong>
        <br>$$\\text{C}_6\\text{H}_{11}\\text{OH} + \\text{SOCl}_2 \\rightarrow \\mathbf{\\text{Chlorocyclohexane} (\\text{C}_6\\text{H}_{11}\\text{Cl})} + \\text{SO}_2 \\uparrow + \\text{HCl} \\uparrow$$
        (Darzens process; gaseous by-products escape).</li>
      <li><strong>4-Ethylnitrobenzene + $\\text{Br}_2 / h\\nu$:</strong>
        <br>Bromination occurs selectively at the <b>benzylic carbon</b> due to resonance stabilization of the benzylic radical:
        $$\\mathbf{1-(1-\\text{bromoethyl})-4-\\text{nitrobenzene}} \\quad [\\text{O}_2\\text{N}-\\text{C}_6\\text{H}_4-\\text{CH(Br)CH}_3]$$</li>
      <li><strong>4-Hydroxymethylphenol + $\\text{HCl}$:</strong>
        <br>The phenolic $\\text{C}-\\text{OH}$ bond has partial double bond character due to resonance and cannot be cleaved by $\\text{HCl}$. Only the aliphatic alcohol group reacts:
        $$\\mathbf{4-\\text{(chloromethyl)phenol}} \\quad [\\text{HO}-\\text{C}_6\\text{H}_4-\\text{CH}_2\\text{Cl}]$$</li>
      <li><strong>1-Methylcyclohexene + $\\text{HI}$:</strong>
        <br>Addition follows <b>Markovnikov\'s rule</b> via stable tertiary carbocation:
        $$\\mathbf{1-\\text{iodo-1-methylcyclohexane}}$$</li>
      <li><strong>Bromoethane + $\\text{NaI}$ / dry acetone:</strong>
        <br><b>Finkelstein reaction</b> ($S_N2$ displacement of bromide by iodide; $\text{NaBr}$ precipitates):
        $$\\text{CH}_3\\text{CH}_2\\text{Br} + \\text{NaI} \\xrightarrow{\\text{acetone}} \\mathbf{\\text{CH}_3\\text{CH}_2\\text{I} (\\text{iodoethane})} + \\text{NaBr} \\downarrow$$</li>
      <li><strong>Cyclohexene + $\\text{Br}_2 / h\\nu$:</strong>
        <br>Allylic bromination occurs via allylic free radical substitution:
        $$\\mathbf{3-\\text{bromocyclohex-1-ene}}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) Chlorocyclohexane and (ii) 1-(1-bromoethyl)-4-nitrobenzene', '1 Mark'],
    ['(iii) 4-(chloromethyl)phenol and (iv) 1-iodo-1-methylcyclohexane', '1 Mark'],
    ['(v) Iodoethane and (vi) 3-bromocyclohexene (allylic product)', '1 Mark']
  ]
));

// Question 6.6 (In-Text)
questions.push(createQCard(
  'c12c-ch6-q6', 'In-Text 6.6', 'NCERT In-Text',
  'Arrange each set of compounds in order of increasing boiling points:<br>(i) Bromomethane, Bromoform, Chloromethane, Dibromomethane.<br>(ii) 1-Chloropropane, Isopropyl chloride, 1-Chlorobutane.',
  `<div class="step">
    <b>Key Principles Governing Boiling Points:</b><br>
    1. Boiling point increases with increasing molecular mass and size due to stronger van der Waals dispersion forces.<br>
    2. For isomeric alkyl halides, boiling point decreases with increased branching because branching makes the molecule more spherical, decreasing the contact surface area.<br><br>
    <b>(i) First Set:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>$\\text{CH}_3\\text{Cl}$ (Chloromethane, $M = 50.5$)</li>
      <li>$\\text{CH}_3\\text{Br}$ (Bromomethane, $M = 95$)</li>
      <li>$\\text{CH}_2\\text{Br}_2$ (Dibromomethane, $M = 174$)</li>
      <li>$\\text{CHBr}_3$ (Bromoform, $M = 253$)</li>
    </ul>
    <b>Order:</b> $\\mathbf{\\text{Chloromethane} < \\text{Bromomethane} < \\text{Dibromomethane} < \\text{Bromoform}}$<br><br>
    <b>(ii) Second Set:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Isopropyl chloride ($\\text{CH}_3\\text{CH(Cl)CH}_3$): branched 3-carbon chain (lowest surface area).</li>
      <li>1-Chloropropane ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Cl}$): unbranched 3-carbon chain.</li>
      <li>1-Chlorobutane ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Cl}$): larger 4-carbon chain (higher molecular mass).</li>
    </ul>
    <b>Order:</b> $\\mathbf{\\text{Isopropyl chloride} < \\text{1-Chloropropane} < \\text{1-Chlorobutane}}$
  </div>`,
  '2 Marks',
  [
    ['(i) Correct order: Chloromethane < Bromomethane < Dibromomethane < Bromoform', '1 Mark'],
    ['(ii) Correct order: Isopropyl chloride < 1-Chloropropane < 1-Chlorobutane', '1 Mark']
  ]
));

// Question 6.7 (In-Text)
questions.push(createQCard(
  'c12c-ch6-q7', 'In-Text 6.7', 'NCERT In-Text',
  'Which alkyl halide from the following pairs would you expect to react more rapidly by an $S_N2$ mechanism? Explain your answer:<br>(i) $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Br}$ or $\\text{CH}_3\\text{CH}_2\\text{CH(Br)CH}_3$<br>(ii) $(\\text{CH}_3)_2\\text{CHCH(Br)CH}_3$ or $(\\text{CH}_3)_3\\text{C-Br}$<br>(iii) $\\text{CH}_3\\text{CH(CH}_3)\\text{CH}_2\\text{CH}_2\\text{Br}$ or $\\text{CH}_3\\text{CH}_2\\text{CH(CH}_3)\\text{CH}_2\\text{Br}$',
  `<div class="step">
    <b>Criterion for $S_N2$ Reactivity:</b><br>
    $S_N2$ proceeds via a concerted backside attack by the nucleophile in the transition state. The rate is governed primarily by <b>steric hindrance</b> around the $\\alpha$-carbon:
    $$\\text{Reactivity: } 1^\\circ > 2^\\circ > 3^\\circ$$
    <br>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Br}$ (1-Bromobutane) reacts faster.</strong><br>
        1-Bromobutane is a primary ($1^\\circ$) alkyl halide with minimal steric hindrance, whereas 2-bromobutane is secondary ($2^\\circ$) with higher steric hindrance to backside attack.</li>
      <li><strong>$(\\text{CH}_3)_2\\text{CHCH(Br)CH}_3$ reacts faster.</strong><br>
        $(\\text{CH}_3)_2\\text{CHCH(Br)CH}_3$ is a secondary ($2^\\circ$) halide, whereas $(\\text{CH}_3)_3\\text{C-Br}$ is a tertiary ($3^\\circ$) halide. Tertiary halides are virtually unreactive towards $S_N2$ due to intense steric crowding by three methyl groups.</li>
      <li><strong>$\\text{CH}_3\\text{CH(CH}_3)\\text{CH}_2\\text{CH}_2\\text{Br}$ (1-bromo-3-methylbutane) reacts faster.</strong><br>
        Both are primary halides, but in 1-bromo-2-methylbutane, the methyl branch is at the $\\beta$-carbon directly adjacent to the reaction centre, causing significant steric shielding. In 1-bromo-3-methylbutane, the branch is further away at the $\\gamma$-carbon, permitting easier nucleophilic approach.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) 1-bromobutane (1° vs 2° steric hindrance)', '1 Mark'],
    ['(ii) (CH₃)₂CHCH(Br)CH₃ (2° vs 3° steric hindrance)', '1 Mark'],
    ['(iii) 1-bromo-3-methylbutane (branch further from reaction centre)', '1 Mark']
  ]
));

// Question 6.8 (In-Text)
questions.push(createQCard(
  'c12c-ch6-q8', 'In-Text 6.8', 'NCERT In-Text',
  'In the following pairs of halogen compounds, which compound undergoes faster $S_N1$ reaction?<br>(i) 2-Chloropentane or 2-chloro-2-methylbutane<br>(ii) 2-Chloro-2-methylpropane or 1-chlorobutane',
  `<div class="step">
    <b>Criterion for $S_N1$ Reactivity:</b><br>
    The rate-determining step in $S_N1$ is the formation of a <b>carbocation intermediate</b>. The more stable the carbocation, the faster the reaction:
    $$\\text{Carbocation Stability: } 3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$$
    <br>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>2-Chloro-2-methylbutane reacts faster.</strong><br>
        Ionisation of 2-chloro-2-methylbutane forms a <b>tertiary ($3^\\circ$) carbocation</b> [$\\text{CH}_3-\\text{C}^+(\\text{CH}_3)\\text{CH}_2\\text{CH}_3$], stabilized by $+I$ effect and 8 hyperconjugative hydrogens. In contrast, 2-chloropentane yields a less stable secondary ($2^\\circ$) carbocation.</li>
      <li><strong>2-Chloro-2-methylpropane reacts faster.</strong><br>
        2-Chloro-2-methylpropane generates a highly stable <b>tertiary ($3^\\circ$) tert-butyl carbocation</b> [$(\\text{CH}_3)_3\\text{C}^+$], whereas 1-chlorobutane generates an unstable primary ($1^\\circ$) carbocation.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['(i) 2-chloro-2-methylbutane (3° carbocation stability)', '1 Mark'],
    ['(ii) 2-chloro-2-methylpropane (3° tert-butyl carbocation)', '1 Mark']
  ]
));

// Question 6.9 (In-Text)
questions.push(createQCard(
  'c12c-ch6-q9', 'In-Text 6.9', 'NCERT In-Text',
  'Identify $A, B, C, D, E, R$ and $R^1$ in the following:<br>(i) $\\text{Cyclohexyl bromide} + \\text{Mg} / \\text{dry ether} \\rightarrow A \\xrightarrow{\\text{H}_2\\text{O}} B$<br>(ii) $R-\\text{Br} + \\text{Mg} / \\text{dry ether} \\rightarrow C \\xrightarrow{\\text{D}_2\\text{O}} \\text{CH}_3\\text{CH(D)CH}_3$<br>(iii) $R^1-\\text{X} + \\text{Na} / \\text{ether} \\rightarrow 2,3\\text{-dimethylbutane}$',
  `<div class="step">
    <b>Deductions:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Reaction (i):</strong>
        <br>• $\\text{Cyclohexyl bromide} + \\text{Mg} \\xrightarrow{\\text{dry ether}} \\mathbf{A = \\text{Cyclohexylmagnesium bromide } [\\text{C}_6\\text{H}_{11}\\text{MgBr}]}$
        <br>• $\\text{C}_6\\text{H}_{11}\\text{MgBr} + \\text{H}_2\\text{O} \\rightarrow \\mathbf{B = \\text{Cyclohexane } [\\text{C}_6\\text{H}_{12}]} + \\text{Mg(OH)Br}$</li>
      <li><strong>Reaction (ii):</strong>
        <br>• Hydrolysis of Grignard reagent with heavy water $\\text{D}_2\\text{O}$ introduces deuterium:
        $$C + \\text{D}_2\\text{O} \\rightarrow \\text{CH}_3\\text{CH(D)CH}_3$$
        • Therefore, Grignard reagent $C$ must have the $-\\text{MgBr}$ attached at carbon-2:
        $$\\mathbf{C = (\\text{CH}_3)_2\\text{CHMgBr}} \\quad (\\text{Isopropylmagnesium bromide})$$
        • The starting alkyl group $R$ is the <b>isopropyl group</b>:
        $$\\mathbf{R = (\\text{CH}_3)_2\\text{CH}-} \\quad \\implies R-\\text{Br} = 2\\text{-bromopropane}$$</li>
      <li><strong>Reaction (iii):</strong>
        <br>• Wurtz reaction of $R^1-\\text{X}$ with sodium in ether yields $2,3$-dimethylbutane:
        $$2 R^1-\\text{X} + 2\\text{Na} \\xrightarrow{\\text{ether}} \\text{CH}_3-\\text{CH(CH}_3)-\\text{CH(CH}_3)-\\text{CH}_3 + 2\\text{NaX}$$
        • Cleaving the symmetrical dimer gives the <b>isopropyl group</b>:
        $$\\mathbf{R^1 = (\\text{CH}_3)_2\\text{CH}-} \\quad \\text{and} \\quad \\mathbf{R^1-\\text{X} = 2\\text{-halopropane (e.g. 2-chloropropane or 2-bromopropane)}}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Identification of A (cyclohexyl-MgBr) and B (cyclohexane)', '1 Mark'],
    ['Identification of C ((CH₃)₂CHMgBr) and R (isopropyl group)', '1 Mark'],
    ['Identification of R¹-X (2-halopropane) via Wurtz reverse analysis', '1 Mark']
  ]
));

// ============================================================================
// PART 2: NCERT END-OF-CHAPTER EXERCISES (6.1 to 6.33)
// ============================================================================

// Exercise 6.1
questions.push(createQCard(
  'c12c-ch6-q10', 'Exercise 6.1', 'NCERT Exercise',
  'Name the following halides according to IUPAC system and classify them as alkyl, allyl, benzyl (primary, secondary, tertiary), vinyl or aryl halides:<br>(i) $(\\text{CH}_3)_2\\text{CHCH(Cl)CH}_3$<br>(ii) $\\text{CH}_3\\text{CH}_2\\text{CH(CH}_3)\\text{CH(C}_2\\text{H}_5)\\text{Cl}$<br>(iii) $\\text{CH}_3\\text{CH}_2\\text{C(CH}_3)_2\\text{CH}_2\\text{I}$<br>(iv) $(\\text{CH}_3)_3\\text{CCH}_2\\text{CH(Br)C}_6\\text{H}_5$<br>(v) $\\text{CH}_3\\text{CH(CH}_3)\\text{CH(Br)CH}_3$<br>(vi) $\\text{CH}_3\\text{C(C}_2\\text{H}_5)_2\\text{CH}_2\\text{Br}$<br>(vii) $\\text{CH}_3\\text{C(Cl)(C}_2\\text{H}_5)\\text{CH}_2\\text{CH}_3$<br>(viii) $\\text{CH}_3\\text{CH}=\\text{C(Cl)CH}_2\\text{CH(CH}_3)_2$<br>(ix) $\\text{CH}_3\\text{CH}=\\text{CHC(Br)(CH}_3)_2$<br>(x) $p\\text{-ClC}_6\\text{H}_4\\text{CH}_2\\text{CH(CH}_3)_2$<br>(xi) $m\\text{-ClCH}_2\\text{C}_6\\text{H}_4\\text{CH}_2\\text{C(CH}_3)_3$<br>(xii) $o\\text{-Br-C}_6\\text{H}_4\\text{CH(CH}_3)\\text{CH}_2\\text{CH}_3$',
  `<div class="step">
    <b>IUPAC Names and Classifications:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$(\\text{CH}_3)_2\\text{CHCH(Cl)CH}_3$:</strong> 2-Chloro-3-methylbutane [Secondary ($2^\\circ$) alkyl halide].</li>
      <li><strong>$\\text{CH}_3\\text{CH}_2\\text{CH(CH}_3)\\text{CH(C}_2\\text{H}_5)\\text{Cl}$:</strong> 3-Chloro-4-methylhexane [Secondary ($2^\\circ$) alkyl halide].</li>
      <li><strong>$\\text{CH}_3\\text{CH}_2\\text{C(CH}_3)_2\\text{CH}_2\\text{I}$:</strong> 1-Iodo-2,2-dimethylbutane [Primary ($1^\\circ$) alkyl halide].</li>
      <li><strong>$(\\text{CH}_3)_3\\text{CCH}_2\\text{CH(Br)C}_6\\text{H}_5$:</strong> 1-Bromo-3,3-dimethyl-1-phenylbutane [Secondary ($2^\\circ$) benzylic halide].</li>
      <li><strong>$\\text{CH}_3\\text{CH(CH}_3)\\text{CH(Br)CH}_3$:</strong> 2-Bromo-3-methylbutane [Secondary ($2^\\circ$) alkyl halide].</li>
      <li><strong>$\\text{CH}_3\\text{C(C}_2\\text{H}_5)_2\\text{CH}_2\\text{Br}$:</strong> 1-Bromo-2-ethyl-2-methylbutane [Primary ($1^\\circ$) alkyl halide].</li>
      <li><strong>$\\text{CH}_3\\text{C(Cl)(C}_2\\text{H}_5)\\text{CH}_2\\text{CH}_3$:</strong> 3-Chloro-3-methylpentane [Tertiary ($3^\\circ$) alkyl halide].</li>
      <li><strong>$\\text{CH}_3\\text{CH}=\\text{C(Cl)CH}_2\\text{CH(CH}_3)_2$:</strong> 3-Chloro-5-methylhex-2-ene [Vinylic halide].</li>
      <li><strong>$\\text{CH}_3\\text{CH}=\\text{CHC(Br)(CH}_3)_2$:</strong> 4-Bromo-4-methylpent-2-ene [Allylic halide ($3^\\circ$)].</li>
      <li><strong>$p\\text{-ClC}_6\\text{H}_4\\text{CH}_2\\text{CH(CH}_3)_2$:</strong> 1-Chloro-4-(2-methylpropyl)benzene [Aryl halide].</li>
      <li><strong>$m\\text{-ClCH}_2\\text{C}_6\\text{H}_4\\text{CH}_2\\text{C(CH}_3)_3$:</strong> 1-(Chloromethyl)-3-(2,2-dimethylpropyl)benzene [Primary ($1^\\circ$) benzylic halide].</li>
      <li><strong>$o\\text{-Br-C}_6\\text{H}_4\\text{CH(CH}_3)\\text{CH}_2\\text{CH}_3$:</strong> 1-Bromo-2-(1-methylpropyl)benzene [Aryl halide].</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['Correct IUPAC nomenclature across all 12 compounds', '2 Marks'],
    ['Accurate classification into alkyl, allyl, benzyl, vinyl, aryl classes', '2 Marks']
  ]
));

// Exercise 6.2
questions.push(createQCard(
  'c12c-ch6-q11', 'Exercise 6.2', 'NCERT Exercise',
  'Give the IUPAC names of the following compounds:<br>(i) $\\text{CH}_3\\text{CH(Cl)CH(Br)CH}_3$<br>(ii) $\\text{CHF}_2\\text{CBrClF}$<br>(iii) $\\text{ClCH}_2\\text{C}\\equiv\\text{CCH}_2\\text{Br}$<br>(iv) $(\\text{CCl}_3)_3\\text{CCl}$<br>(v) $\\text{CH}_3\\text{C}(p\\text{-ClC}_6\\text{H}_4)_2\\text{CH(Br)CH}_3$<br>(vi) $(\\text{CH}_3)_3\\text{CCH}=\\text{CClC}_6\\text{H}_5$',
  `<div class="step">
    <b>IUPAC Names:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{CH}_3\\text{CH(Cl)CH(Br)CH}_3$:</strong> 2-Bromo-3-chlorobutane (alphabetical priority).</li>
      <li><strong>$\\text{CHF}_2\\text{CBrClF}$:</strong> 1-Bromo-1-chloro-1,2,2-trifluoroethane.</li>
      <li><strong>$\\text{ClCH}_2\\text{C}\\equiv\\text{CCH}_2\\text{Br}$:</strong> 1-Bromo-4-chlorobut-2-yne.</li>
      <li><strong>$(\\text{CCl}_3)_3\\text{CCl}$:</strong> 2-(Trichloromethyl)-1,1,1,2,3,3,3-heptachloropropane.</li>
      <li><strong>$\\text{CH}_3\\text{C}(p\\text{-ClC}_6\\text{H}_4)_2\\text{CH(Br)CH}_3$:</strong> 2-Bromo-3,3-bis(4-chlorophenyl)butane.</li>
      <li><strong>$(\\text{CH}_3)_3\\text{CCH}=\\text{CClC}_6\\text{H}_5$:</strong> 1-Chloro-3,3-dimethyl-1-phenylbut-1-ene.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) to (iii) IUPAC names correct', '1½ Marks'],
    ['(iv) to (vi) IUPAC names correct', '1½ Marks']
  ]
));

// Exercise 6.3
questions.push(createQCard(
  'c12c-ch6-q12', 'Exercise 6.3', 'NCERT Exercise',
  'Write the structures of the following organic halogen compounds:<br>(i) 2-Chloro-3-methylpentane<br>(ii) $p$-Bromochlorobenzene<br>(iii) 1-Chloro-4-ethylcyclohexane<br>(iv) 2-(2-Chlorophenyl)-1-iodooctane<br>(v) 2-Bromobutane<br>(vi) 4-tert-Butyl-3-iodoheptane<br>(vii) 1-Bromo-4-sec-butyl-2-methylbenzene<br>(viii) 1,4-Dibromobut-2-ene',
  `<div class="step">
    <b>Structures:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>2-Chloro-3-methylpentane:</strong> $\\text{CH}_3-\\text{CH(Cl)}-\\text{CH(CH}_3)-\\text{CH}_2-\\text{CH}_3$</li>
      <li><strong>$p$-Bromochlorobenzene:</strong> Benzene ring with $-\\text{Cl}$ at position 1 and $-\\text{Br}$ at position 4 ($1,4\\text{-disubstituted}$).</li>
      <li><strong>1-Chloro-4-ethylcyclohexane:</strong> Cyclohexane ring with $-\\text{Cl}$ at $C_1$ and $-\\text{CH}_2\\text{CH}_3$ at $C_4$.</li>
      <li><strong>2-(2-Chlorophenyl)-1-iodooctane:</strong> $\\text{I}-\\text{CH}_2-\\text{CH}(o\\text{-ClC}_6\\text{H}_4)-(\\text{CH}_2)_5-\\text{CH}_3$</li>
      <li><strong>2-Bromobutane:</strong> $\\text{CH}_3-\\text{CH(Br)}-\\text{CH}_2-\\text{CH}_3$</li>
      <li><strong>4-tert-Butyl-3-iodoheptane:</strong> $\\text{CH}_3\\text{CH}_2\\text{CH(I)}-\\text{CH}[\\text{C(CH}_3)_3]-\\text{CH}_2\\text{CH}_2\\text{CH}_3$</li>
      <li><strong>1-Bromo-4-sec-butyl-2-methylbenzene:</strong> Benzene ring with $-\\text{Br}$ at 1, $-\\text{CH}_3$ at 2, and $-\\text{CH(CH}_3)\\text{CH}_2\\text{CH}_3$ at 4.</li>
      <li><strong>1,4-Dibromobut-2-ene:</strong> $\\text{Br}-\\text{CH}_2-\\text{CH}=\\text{CH}-\\text{CH}_2-\\text{Br}$</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['(i) to (iv) accurate structures', '2 Marks'],
    ['(v) to (viii) accurate structures', '2 Marks']
  ]
));

// Exercise 6.4
questions.push(createQCard(
  'c12c-ch6-q13', 'Exercise 6.4', 'NCERT Exercise',
  'Which one of the following has the highest dipole moment?<br>(i) $\\text{CH}_2\\text{Cl}_2$<br>(ii) $\\text{CHCl}_3$<br>(iii) $\\text{CCl}_4$',
  `<div class="step">
    <b>Dipole Moment Analysis:</b><br>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{CCl}_4$:</strong> Symmetrical tetrahedral structure. The individual $\\text{C}-\\text{Cl}$ bond dipoles cancel out completely in all four directions. Hence, resultant dipole moment $\\mathbf{\\mu = 0\\text{ D}}$.</li>
      <li><strong>$\\text{CHCl}_3$:</strong> In chloroform, the resultant of three $\\text{C}-\\text{Cl}$ bond dipoles is opposed by the $\\text{C}-\\text{H}$ bond dipole. Its dipole moment is $\\mathbf{\\mu = 1.03\\text{ D}}$.</li>
      <li><strong>$\\text{CH}_2\\text{Cl}_2$:</strong> In dichloromethane, the resultant of the two $\\text{C}-\\text{Cl}$ dipoles and the resultant of the two $\\text{C}-\\text{H}$ dipoles point in the same general direction and reinforce each other. Its dipole moment is $\\mathbf{\\mu = 1.60\\text{ D}}$.</li>
    </ol>
    <br>
    <b>Answer:</b> <b>$\\text{CH}_2\\text{Cl}_2$ (Dichloromethane)</b> has the highest dipole moment ($1.60\\text{ D}$).
  </div>`,
  '2 Marks',
  [
    ['Analysis of dipole vector cancellation in CCl₄ (μ = 0) and CHCl₃ (μ = 1.03 D)', '1 Mark'],
    ['Deducing CH₂Cl₂ has the highest dipole moment (μ = 1.60 D)', '1 Mark']
  ]
));

// Exercise 6.5
questions.push(createQCard(
  'c12c-ch6-q14', 'Exercise 6.5', 'NCERT Exercise',
  'A hydrocarbon $\\text{C}_5\\text{H}_{10}$ does not react with chlorine in dark but gives a single monochloro compound $\\text{C}_5\\text{H}_9\\text{Cl}$ in bright sunlight. Identify the hydrocarbon.',
  `<div class="step">
    <b>Deduction:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Degree of Unsaturation:</strong> Formula $\\text{C}_5\\text{H}_{10}$ corresponds to $\\text{C}_n\\text{H}_{2n}$, indicating either an alkene or a cycloalkane.</li>
      <li><strong>Inertness in Dark:</strong> Alkenes decolourise bromine/chlorine in the dark via addition. Since this hydrocarbon does not react with chlorine in the dark, it cannot be an alkene; it must be a <b>cycloalkane</b>.</li>
      <li><strong>Single Monochloro Derivative:</strong> In bright sunlight, free radical substitution yields only one monochloro derivative ($\text{C}_5\text{H}_9\text{Cl}$). This means that all 10 hydrogen atoms in the molecule must be chemically equivalent.</li>
      <li><strong>Conclusion:</strong> The hydrocarbon is <b>Cyclopentane</b> (a symmetrical 5-membered ring where all $-\\text{CH}_2-$ groups are equivalent):
        $$\\text{C}_5\\text{H}_{10} + \\text{Cl}_2 \\xrightarrow{h\\nu} \\mathbf{\\text{C}_5\\text{H}_9\\text{Cl} (\\text{Chlorocyclopentane})} + \\text{HCl}$$
      </li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Eliminating alkenes due to no reaction in the dark → cycloalkane', '1 Mark'],
    ['Identifying cyclopentane due to 10 equivalent hydrogens yielding chlorocyclopentane', '1 Mark']
  ]
));

// Exercise 6.6
questions.push(createQCard(
  'c12c-ch6-q15', 'Exercise 6.6', 'NCERT Exercise',
  'Write the isomers of the compound having formula $\\text{C}_4\\text{H}_9\\text{Br}$.',
  `<div class="step">
    <b>All 4 Structural Isomers of $\\text{C}_4\\text{H}_9\\text{Br}$:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>1-Bromobutane (n-Butyl bromide):</strong>
        $$\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{Br} \\quad (1^\\circ)$$</li>
      <li><strong>2-Bromobutane (sec-Butyl bromide):</strong>
        $$\\text{CH}_3-\\text{CH}_2-\\text{CH(Br)}-\\text{CH}_3 \\quad (2^\\circ, \\text{optically active chiral})$$</li>
      <li><strong>1-Bromo-2-methylpropane (Isobutyl bromide):</strong>
        $$(\\text{CH}_3)_2\\text{CH}-\\text{CH}_2-\\text{Br} \\quad (1^\\circ)$$</li>
      <li><strong>2-Bromo-2-methylpropane (tert-Butyl bromide):</strong>
        $$(\\text{CH}_3)_3\\text{C}-\\text{Br} \\quad (3^\\circ)$$</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Listing all 4 structural isomers with correct IUPAC names', '½ Mark × 4 = 2 Marks']
  ]
));

// Exercise 6.7
questions.push(createQCard(
  'c12c-ch6-q16', 'Exercise 6.7', 'NCERT Exercise',
  'Write the equations for the preparation of 1-iodobutane from:<br>(i) 1-butanol<br>(ii) 1-chlorobutane<br>(iii) but-1-ene',
  `<div class="step">
    <b>Chemical Equations:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>From 1-butanol:</strong>
        Reaction with red phosphorus and iodine ($\text{P} + \text{I}_2$ generating $\text{PI}_3$ in situ):
        $$3\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{OH} + \\text{PI}_3 \\rightarrow \\mathbf{3\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{I}} + \\text{H}_3\\text{PO}_3$$
        (Or by heating with $\\text{KI} + \\text{H}_3\\text{PO}_4$).</li>
      <li><strong>From 1-chlorobutane (Finkelstein Reaction):</strong>
        Refluxing with sodium iodide in dry acetone:
        $$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Cl} + \\text{NaI} \\xrightarrow{\\text{dry acetone}} \\mathbf{\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{I}} + \\text{NaCl} \\downarrow$$</li>
      <li><strong>From but-1-ene (Anti-Markovnikov Addition followed by Finkelstein):</strong>
        Step 1: Anti-Markovnikov addition of $\\text{HBr}$ in the presence of peroxide gives 1-bromobutane:
        $$\\text{CH}_3\\text{CH}_2\\text{CH}=\\text{CH}_2 + \\text{HBr} \\xrightarrow{\\text{Peroxide}} \\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Br}$$
        Step 2: Finkelstein exchange with $\\text{NaI}$ in dry acetone:
        $$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Br} + \\text{NaI} \\xrightarrow{\\text{acetone}} \\mathbf{\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{I}} + \\text{NaBr} \\downarrow$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) 1-butanol reaction with P/I₂ (or KI + H₃PO₄)', '1 Mark'],
    ['(ii) Finkelstein reaction with NaI in acetone', '1 Mark'],
    ['(iii) HBr/peroxide addition followed by NaI/acetone', '1 Mark']
  ]
));

// Exercise 6.8
questions.push(createQCard(
  'c12c-ch6-q17', 'Exercise 6.8', 'NCERT Exercise',
  'What are ambident nucleophiles? Explain with an example.',
  `<div class="step">
    <b>Definition:</b><br>
    Nucleophiles which possess two different nucleophilic donor centres and can attack the substrate through either of the two centres are called <b>ambident nucleophiles</b>.<br><br>
    <b>Examples:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Cyanide ion ($[\\text{C}\\equiv\\text{N}]^-$):</strong>
        <br>• It can attack through carbon or nitrogen.
        <br>• Reaction with ionic $\\text{KCN}$ produces <b>alkyl cyanide (nitrile, $\text{R}-\text{CN}$)</b> as major product because $\text{C}-\text{C}$ bond is thermodynamically more stable than $\text{C}-\text{N}$ bond.
        <br>• Reaction with covalent $\\text{AgCN}$ produces <b>alkyl isocyanide ($\text{R}-\text{NC}$)</b> because carbon is bound to silver and nitrogen with its lone pair is free to attack.</li>
      <li><strong>Nitrite ion ($[\\text{O}-\\text{N}=\\text{O}]^-$):</strong>
        <br>• Attacks through oxygen to form alkyl nitrites ($\text{R}-\text{ONO}$) with $\\text{KNO}_2$.
        <br>• Attacks through nitrogen to form nitroalkanes ($\text{R}-\text{NO}_2$) with $\\text{AgNO}_2$.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Definition of ambident nucleophile', '1 Mark'],
    ['Detailed example with CN⁻ (KCN vs AgCN) or NO₂⁻ (KNO₂ vs AgNO₂)', '1 Mark']
  ]
));

// Exercise 6.9
questions.push(createQCard(
  'c12c-ch6-q18', 'Exercise 6.9', 'NCERT Exercise',
  'Which compound in each of the following pairs will react faster in $S_N2$ reaction with $^-\\text{OH}$?<br>(i) $\\text{CH}_3\\text{Br}$ or $\\text{CH}_3\\text{I}$<br>(ii) $(\\text{CH}_3)_3\\text{CCl}$ or $\\text{CH}_3\\text{Cl}$',
  `<div class="step">
    <b>Analysis:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{CH}_3\\text{I}$ reacts faster than $\\text{CH}_3\\text{Br}$.</strong><br>
        Both are methyl halides with identical steric factors. However, iodide ion ($\\text{I}^-$) is a much <b>better leaving group</b> than bromide ion ($\\text{Br}^-$) because of its larger ionic size, lower basicity, and weaker $\\text{C}-\\text{I}$ bond enthalpy ($234\\text{ kJ mol}^{-1}$ vs $293\\text{ kJ mol}^{-1}$ for $\\text{C}-\\text{Br}$).</li>
      <li><strong>$\\text{CH}_3\\text{Cl}$ reacts faster than $(\\text{CH}_3)_3\\text{CCl}$.</strong><br>
        $S_N2$ displacement involves backside attack. Methyl chloride ($\\text{CH}_3\\text{Cl}$) has zero steric crowding and reacts very rapidly. In tert-butyl chloride [$(\\text{CH}_3)_3\\text{CCl}$], three bulky methyl groups completely shield the central carbon from backside attack, making it virtually unreactive towards $S_N2$.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['(i) CH₃I faster due to better leaving group ability of I⁻', '1 Mark'],
    ['(ii) CH₃Cl faster due to absence of steric hindrance compared to 3° halide', '1 Mark']
  ]
));

// Exercise 6.10
questions.push(createQCard(
  'c12c-ch6-q19', 'Exercise 6.10', 'NCERT Exercise',
  'Predict all the alkenes that would be formed by dehydrohalogenation of the following halides with sodium ethoxide in ethanol and identify the major alkene:<br>(i) 1-Bromo-1-methylcyclohexane<br>(ii) 2-Chloro-2-methylbutane<br>(iii) 2,2,3-Trimethyl-3-bromopentane',
  `<div class="step">
    <b>Application of Saytzeff (Zaitsev) Rule:</b><br>
    In dehydrohalogenation, the preferred product is the more stable, more highly substituted alkene (possessing the greatest number of alkyl groups attached to the double-bonded carbon atoms).<br><br>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>1-Bromo-1-methylcyclohexane:</strong>
        <br>• $\\beta$-hydrogens can be lost from the ring or from the methyl group.
        <br>• Alkenes formed: <b>1-Methylcyclohexene</b> (endocyclic double bond, trisubstituted, <b>Major</b>) and <b>Methylenecyclohexane</b> (exocyclic double bond, disubstituted, Minor).</li>
      <li><strong>2-Chloro-2-methylbutane [$\\text{CH}_3-\\text{C(Cl)(CH}_3)-\\text{CH}_2-\\text{CH}_3$]:</strong>
        <br>• Loss of $\\text{H}$ from $C_3$: forms <b>2-Methylbut-2-ene</b> [$(\\text{CH}_3)_2\\text{C}=\\text{CH}-\\text{CH}_3$] (trisubstituted, <b>Major</b>).
        <br>• Loss of $\\text{H}$ from $C_1$: forms <b>2-Methylbut-1-ene</b> [$\\text{CH}_2=\\text{C(CH}_3)-\\text{CH}_2-\\text{CH}_3$] (disubstituted, Minor).</li>
      <li><strong>2,2,3-Trimethyl-3-bromopentane:</strong>
        <br>• The $C_2$ carbon has no $\\beta$-hydrogen (it is fully substituted with methyls).
        <br>• Loss of $\\beta$-hydrogen from $C_4$: forms <b>3,4,4-Trimethylpent-2-ene</b> (tetrasubstituted, <b>Major</b>).
        <br>• Loss of $\\beta$-hydrogen from $C_3$-methyl: forms <b>2-Ethyl-3,3-dimethylbut-1-ene</b> (disubstituted, Minor).</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) 1-methylcyclohexene as major product', '1 Mark'],
    ['(ii) 2-methylbut-2-ene as major product', '1 Mark'],
    ['(iii) 3,4,4-trimethylpent-2-ene as major product', '1 Mark']
  ]
));

// Exercise 6.11
questions.push(createQCard(
  'c12c-ch6-q20', 'Exercise 6.11', 'NCERT Exercise',
  'How will you bring about the following conversions?<br>(i) Ethanol to but-1-yne<br>(ii) Ethane to bromoethene<br>(iii) Propene to 1-nitropropane<br>(iv) Toluene to benzyl alcohol<br>(v) Propene to propyne',
  `<div class="step">
    <b>Reaction Pathways:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Ethanol to but-1-yne:</strong>
        $$\\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{\\text{SOCl}_2} \\text{CH}_3\\text{CH}_2\\text{Cl}$$
        $$\\text{HC}\\equiv\\text{CH} \\xrightarrow{\\text{NaNH}_2} \\text{HC}\\equiv\\text{C}^-\\text{Na}^+ \\xrightarrow{\\text{CH}_3\\text{CH}_2\\text{Cl}} \\mathbf{\\text{CH}_3\\text{CH}_2\\text{C}\\equiv\\text{CH}}$$</li>
      <li><strong>Ethane to bromoethene:</strong>
        $$\\text{CH}_3\\text{CH}_3 \\xrightarrow{\\text{Br}_2 / h\\nu} \\text{CH}_3\\text{CH}_2\\text{Br} \\xrightarrow{\\text{alc. KOH}} \\text{CH}_2=\\text{CH}_2 \\xrightarrow{\\text{Br}_2 / \\text{CCl}_4} \\text{BrCH}_2\\text{CH}_2\\text{Br} \\xrightarrow{\\text{alc. KOH}} \\mathbf{\\text{CH}_2=\\text{CHBr}}$$</li>
      <li><strong>Propene to 1-nitropropane:</strong>
        $$\\text{CH}_3\\text{CH}=\\text{CH}_2 + \\text{HBr} \\xrightarrow{\\text{Peroxide}} \\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Br} \\xrightarrow{\\text{AgNO}_2} \\mathbf{\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{NO}_2}$$</li>
      <li><strong>Toluene to benzyl alcohol:</strong>
        $$\\text{C}_6\\text{H}_5\\text{CH}_3 + \\text{Cl}_2 \\xrightarrow{h\\nu} \\text{C}_6\\text{H}_5\\text{CH}_2\\text{Cl} \\xrightarrow{\\text{aq. KOH}} \\mathbf{\\text{C}_6\\text{H}_5\\text{CH}_2\\text{OH}}$$</li>
      <li><strong>Propene to propyne:</strong>
        $$\\text{CH}_3\\text{CH}=\\text{CH}_2 \\xrightarrow{\\text{Br}_2 / \\text{CCl}_4} \\text{CH}_3\\text{CH(Br)CH}_2\\text{Br} \\xrightarrow{1.\\; \\text{alc. KOH},\\; 2.\\; \\text{NaNH}_2} \\mathbf{\\text{CH}_3\\text{C}\\equiv\\text{CH}}$$</li>
    </ol>
  </div>`,
  '5 Marks',
  [
    ['(i) Ethanol to but-1-yne via acetylide displacement', '1 Mark'],
    ['(ii) Ethane to bromoethene via halogenation/elimination', '1 Mark'],
    ['(iii) Propene to 1-nitropropane via peroxide and AgNO₂', '1 Mark'],
    ['(iv) Toluene to benzyl alcohol via chlorination and aq. KOH', '1 Mark'],
    ['(v) Propene to propyne via vic-dibromide and NaNH₂', '1 Mark']
  ]
));

// Exercise 6.12
questions.push(createQCard(
  'c12c-ch6-q21', 'Exercise 6.12', 'NCERT Exercise',
  'Explain why:<br>(i) the dipole moment of chlorobenzene is lower than that of cyclohexyl chloride?<br>(ii) alkyl halides, though polar, are immiscible with water?<br>(iii) Grignard reagents should be prepared under anhydrous conditions?',
  `<div class="step">
    <b>Explanations:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Dipole Moment of Chlorobenzene vs Cyclohexyl Chloride:</strong>
        <br>• In chlorobenzene, the $\\text{C}-\\text{Cl}$ carbon is <b>$sp^2$ hybridised</b>, which is more electronegative than the <b>$sp^3$ hybridised</b> carbon in cyclohexyl chloride. The $sp^2$ carbon has greater electron-withdrawing character, diminishing the polarity of the $\\text{C}-\\text{Cl}$ bond.
        <br>• Furthermore, resonance in chlorobenzene gives partial double bond character to the $\\text{C}-\\text{Cl}$ bond, shortening the bond length ($169\\text{ pm}$ vs $177\\text{ pm}$). Since dipole moment $\\mu = q \\times d$, shorter bond distance and lower charge separation result in a lower dipole moment ($1.69\\text{ D}$ vs $1.86\\text{ D}$).</li>
      <li><strong>Alkyl Halides Immiscible with Water:</strong>
        <br>Water molecules are strongly held together by intermolecular hydrogen bonding. For an alkyl halide to dissolve in water, energy must be supplied to break the hydrogen bonds between water molecules and dipole-dipole attractions between alkyl halide molecules. The new dipole-dipole interactions formed between alkyl halide and water are <b>significantly weaker</b> and release insufficient energy to overcome the strong hydrogen bonding. Hence, they are immiscible.</li>
      <li><strong>Grignard Reagents under Anhydrous Conditions:</strong>
        <br>Grignard reagents ($R-\\text{MgX}$) are highly reactive organometallic compounds. The $R-\\text{Mg}$ bond is highly polar ($R^{\\delta-}-\\text{Mg}^{\\delta+}\\text{X}$), making the alkyl group act as an extraordinarily strong base and nucleophile. They react instantaneously with any source of proton (even traces of water/moisture) to form hydrocarbons:
        $$R-\\text{MgX} + \\text{H}_2\\text{O} \\rightarrow \\mathbf{R-\\text{H}} + \\text{Mg(OH)X}$$
        Hence, moisture must be strictly excluded.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) sp² vs sp³ hybridization and resonance partial double bond length shortening', '1 Mark'],
    ['(ii) Insufficient hydration energy to break hydrogen bonds of water', '1 Mark'],
    ['(iii) Reaction with moisture producing hydrocarbons (R-H + Mg(OH)X)', '1 Mark']
  ]
));

// Exercise 6.13
questions.push(createQCard(
  'c12c-ch6-q22', 'Exercise 6.13', 'NCERT Exercise',
  'Give the uses of freon-12, DDT, carbon tetrachloride and iodoform.',
  `<div class="step">
    <b>Industrial and Medical Applications:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Freon-12 ($\text{CCl}_2\text{F}_2$):</strong>
        <br>Widely manufactured as a non-toxic, non-flammable, non-corrosive refrigerant in refrigerators and air conditioners, and as an aerosol spray propellant (though largely phased out due to ozone layer depletion).</li>
      <li><strong>DDT ($p,p\'$-dichlorodiphenyltrichloroethane):</strong>
        <br>Developed as the first chlorinated organic insecticide; extensively used after WWII to control malaria (killing mosquitoes) and typhus (killing lice). Later banned due to chemical persistence and biomagnification in the food chain.</li>
      <li><strong>Carbon tetrachloride ($\text{CCl}_4$):</strong>
        <br>Used in large quantities as a manufacturing feedstock for chlorofluorocarbons (CFCs), industrial solvent for oils, fats, and resins, and formerly as a fire extinguisher under the trade name <em>Pyrene</em>.</li>
      <li><strong>Iodoform ($\text{CHI}_3$):</strong>
        <br>Earlier used widely as an antiseptic dressing for wounds. Its antiseptic action is due to the liberation of free elemental iodine when it comes in contact with skin tissue, not due to iodoform itself.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Freon-12 (refrigerant/propellant) and DDT (insecticide/malaria control)', '1 Mark'],
    ['CCl₄ (solvent, Pyrene) and Iodoform (antiseptic via liberation of I₂)', '1 Mark']
  ]
));

// Exercise 6.14
questions.push(createQCard(
  'c12c-ch6-q23', 'Exercise 6.14', 'NCERT Exercise',
  'Write the structure of the major organic product in each of the following reactions:<br>(i) $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Cl} + \\text{NaI} \\xrightarrow{\\text{acetone, heat}}$<br>(ii) $(\\text{CH}_3)_3\\text{CBr} + \\text{KOH} \\xrightarrow{\\text{ethanol, heat}}$<br>(iii) $\\text{CH}_3\\text{CH(Br)CH}_2\\text{CH}_3 + \\text{NaOH} \\xrightarrow{\\text{water}}$<br>(iv) $\\text{CH}_3\\text{CH}_2\\text{Br} + \\text{KCN} \\xrightarrow{\\text{aq. ethanol}}$<br>(v) $\\text{C}_6\\text{H}_5\\text{ONa} + \\text{C}_2\\text{H}_5\\text{Cl} \\rightarrow$<br>(vi) $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH} + \\text{SOCl}_2 \\rightarrow$<br>(vii) $\\text{CH}_3\\text{CH}_2\\text{CH}=\\text{CH}_2 + \\text{HBr} \\xrightarrow{\\text{peroxide}}$<br>(viii) $\\text{CH}_3\\text{CH}=\\text{C(CH}_3)_2 + \\text{HBr} \\rightarrow$',
  `<div class="step">
    <b>Major Products:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Cl} + \\text{NaI} \\rightarrow$</strong>
        <br>$$\\mathbf{\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{I}} \\quad (\\text{1-Iodopropane, Finkelstein reaction})$$</li>
      <li><strong>$(\\text{CH}_3)_3\\text{CBr} + \\text{alc. KOH} \\rightarrow$</strong>
        <br>$$\\mathbf{\\text{CH}_2=\\text{C(CH}_3)_2} \\quad (\\text{2-Methylpropene, E2 elimination})$$</li>
      <li><strong>$\\text{CH}_3\\text{CH(Br)CH}_2\\text{CH}_3 + \\text{aq. NaOH} \\rightarrow$</strong>
        <br>$$\\mathbf{\\text{CH}_3\\text{CH(OH)CH}_2\\text{CH}_3} \\quad (\\text{Butan-2-ol, nucleophilic substitution})$$</li>
      <li><strong>$\\text{CH}_3\\text{CH}_2\\text{Br} + \\text{KCN} \\rightarrow$</strong>
        <br>$$\\mathbf{\\text{CH}_3\\text{CH}_2\\text{CN}} \\quad (\\text{Propanenitrile / Ethyl cyanide})$$</li>
      <li><strong>$\\text{C}_6\\text{H}_5\\text{ONa} + \\text{C}_2\\text{H}_5\\text{Cl} \\rightarrow$</strong>
        <br>$$\\mathbf{\\text{C}_6\\text{H}_5\\text{OC}_2\\text{H}_5} \\quad (\\text{Ethoxybenzene / Phenetole, Williamson synthesis})$$</li>
      <li><strong>$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH} + \\text{SOCl}_2 \\rightarrow$</strong>
        <br>$$\\mathbf{\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Cl}} \\quad (\\text{1-Chloropropane})$$</li>
      <li><strong>$\\text{CH}_3\\text{CH}_2\\text{CH}=\\text{CH}_2 + \\text{HBr} \\xrightarrow{\\text{peroxide}}$</strong>
        <br>$$\\mathbf{\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Br}} \\quad (\\text{1-Bromobutane, Anti-Markovnikov})$$</li>
      <li><strong>$\\text{CH}_3\\text{CH}=\\text{C(CH}_3)_2 + \\text{HBr} \\rightarrow$</strong>
        <br>$$\\mathbf{\\text{CH}_3\\text{CH}_2\\text{C(Br)(CH}_3)_2} \\quad (\\text{2-Bromo-2-methylbutane, Markovnikov})$$</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['(i) to (iv) major organic products correct', '2 Marks'],
    ['(v) to (viii) major organic products correct', '2 Marks']
  ]
));

// Exercise 6.15
questions.push(createQCard(
  'c12c-ch6-q24', 'Exercise 6.15', 'NCERT Exercise',
  'Write the mechanism of the following reaction:<br>$$n\\text{-BuBr} + \\text{KCN} \\xrightarrow{\\text{EtOH}-\\text{H}_2\\text{O}} n\\text{-BuCN}$$',
  `<div class="step">
    <b>Mechanism: Bimolecular Nucleophilic Substitution ($S_N2$):</b><br>
    Since $n$-butyl bromide ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Br}$) is a primary ($1^\\circ$) alkyl halide with unhindered reaction site, substitution proceeds predominantly via an <b>$S_N2$ mechanism</b> in a single concerted step:<br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Ionisation of Nucleophile:</strong> $\\text{KCN} \\rightarrow \\text{K}^+ + :\\text{C}\\equiv\\text{N}^-$</li>
      <li><strong>Backside Nucleophilic Attack & Transition State:</strong>
        The nucleophilic carbon atom of $^-\\text{C}\\equiv\\text{N}$ attacks the electrophilic $\\alpha$-carbon of 1-bromobutane from the side opposite to the leaving bromide group:
        $$\\text{NC}^- + \\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2-\\text{Br} \\rightarrow \\left[ \\text{NC}^{\\delta-}\\cdots\\text{CH}_2(\\text{C}_3\\text{H}_7)\\cdots\\text{Br}^{\\delta-} \\right]^\\ddagger$$
        In this transition state, carbon is partially bonded to both incoming $\\text{CN}^-$ and outgoing $\\text{Br}^-$ with an unstable pentacoordinate arrangement.</li>
      <li><strong>Departure of Leaving Group & Inversion:</strong>
        The $\\text{C}-\\text{Br}$ bond breaks heterolytically, expelling $\\text{Br}^-$, with complete <b>Walden inversion</b> of configuration:
        $$\\left[ \\text{NC}\\cdots\\text{CH}_2(\\text{C}_3\\text{H}_7)\\cdots\\text{Br} \\right]^\\ddagger \\rightarrow \\mathbf{\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{CN}} + \\text{Br}^-$$
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Stating SN2 concerted mechanism for primary halide', '1 Mark'],
    ['Transition state depiction showing simultaneous C-CN bond formation and C-Br cleavage', '1 Mark']
  ]
));

// Exercise 6.16
questions.push(createQCard(
  'c12c-ch6-q25', 'Exercise 6.16', 'NCERT Exercise',
  'Arrange the compounds of each set in order of reactivity towards $S_N2$ displacement:<br>(i) 2-Bromo-2-methylbutane, 1-Bromopentane, 2-Bromopentane<br>(ii) 1-Bromo-3-methylbutane, 2-Bromo-2-methylbutane, 2-Bromo-3-methylbutane<br>(iii) 1-Bromobutane, 1-Bromo-2,2-dimethylpropane, 1-Bromo-2-methylbutane, 1-Bromo-3-methylbutane',
  `<div class="step">
    <b>Order of Reactivity towards $S_N2$ (Governed by Steric Hindrance: $1^\\circ > 2^\\circ > 3^\\circ$):</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Set (i):</strong>
        <br>• 1-Bromopentane ($1^\\circ$, least steric crowding).
        <br>• 2-Bromopentane ($2^\\circ$).
        <br>• 2-Bromo-2-methylbutane ($3^\\circ$, heavily crowded).
        <br><b>Order:</b> $\\mathbf{\\text{1-Bromopentane} > \\text{2-Bromopentane} > \\text{2-Bromo-2-methylbutane}}$</li>
      <li><strong>Set (ii):</strong>
        <br>• 1-Bromo-3-methylbutane ($1^\\circ$).
        <br>• 2-Bromo-3-methylbutane ($2^\\circ$).
        <br>• 2-Bromo-2-methylbutane ($3^\\circ$).
        <br><b>Order:</b> $\\mathbf{\\text{1-Bromo-3-methylbutane} > \\text{2-Bromo-3-methylbutane} > \\text{2-Bromo-2-methylbutane}}$</li>
      <li><strong>Set (iii):</strong>
        <br>All are $1^\\circ$ alkyl bromides; steric crowding by branches near the $\\alpha$-carbon dictates rate:
        <br>• 1-Bromobutane: unbranched chain (fastest).
        <br>• 1-Bromo-3-methylbutane: methyl branch at $\\beta$-carbon away from reaction centre.
        <br>• 1-Bromo-2-methylbutane: methyl branch at $\\alpha$-adjacent $\\beta$-carbon.
        <br>• 1-Bromo-2,2-dimethylpropane (neopentyl bromide): two methyl branches at $\\beta$-carbon (neopentyl steric hindrance, slowest).
        <br><b>Order:</b> $\\mathbf{\\text{1-Bromobutane} > \\text{1-Bromo-3-methylbutane} > \\text{1-Bromo-2-methylbutane} > \\text{1-Bromo-2,2-dimethylpropane}}$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) 1-bromopentane > 2-bromopentane > 2-bromo-2-methylbutane', '1 Mark'],
    ['(ii) 1-bromo-3-methylbutane > 2-bromo-3-methylbutane > 2-bromo-2-methylbutane', '1 Mark'],
    ['(iii) Correct decreasing order with neopentyl bromide as slowest', '1 Mark']
  ]
));

// Exercise 6.17
questions.push(createQCard(
  'c12c-ch6-q26', 'Exercise 6.17', 'NCERT Exercise',
  'Out of $\\text{C}_6\\text{H}_5\\text{CH}_2\\text{Cl}$ and $\\text{C}_6\\text{H}_5\\text{CHClC}_6\\text{H}_5$, which is more easily hydrolysed by aqueous $\\text{KOH}$?',
  `<div class="step">
    <b>Reasoning:</b><br>
    Hydrolysis by aqueous $\\text{KOH}$ proceeds via the <b>$S_N1$ mechanism</b> because benzylic halides readily ionise to form resonance-stabilised benzylic carbocations.<br><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Ionisation of $\\text{C}_6\\text{H}_5\\text{CH}_2\\text{Cl}$ (benzyl chloride) forms the primary benzyl carbocation [$\\text{C}_6\\text{H}_5\\text{CH}_2^+$], which is stabilized by delocalization of positive charge over <b>one benzene ring</b> (4 resonance structures).</li>
      <li>Ionisation of $\\text{C}_6\\text{H}_5\\text{CHClC}_6\\text{H}_5$ (chlorodiphenylmethane) forms the secondary diphenylmethyl carbocation [$\\text{C}_6\\text{H}_5-\\text{CH}^+-\\text{C}_6\\text{H}_5$], in which the positive charge is delocalized over <b>two benzene rings</b> (extended conjugation with 7 resonance structures).</li>
    </ul>
    Because the diphenylmethyl carbocation is far more stable than the benzyl carbocation, <b>$\\text{C}_6\\text{H}_5\\text{CHClC}_6\\text{H}_5$ is hydrolysed much more easily</b> by aqueous $\\text{KOH}$.
  </div>`,
  '2 Marks',
  [
    ['Identification of C₆H₅CHClC₆H₅ as faster hydrolysing', '1 Mark'],
    ['Resonance stabilization over two benzene rings vs one benzene ring', '1 Mark']
  ]
));

// Exercise 6.18
questions.push(createQCard(
  'c12c-ch6-q27', 'Exercise 6.18', 'NCERT Exercise',
  '$p$-Dichlorobenzene has higher melting point and lower solubility than its $o$- and $m$-isomers. Discuss.',
  `<div class="step">
    <b>Explanation based on Molecular Symmetry:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Higher Melting Point:</strong>
        <br>The <b>para-isomer ($p$-dichlorobenzene)</b> is highly <b>symmetrical</b> compared to the unsymmetrical ortho- and meta-isomers.
        <br>Due to its linear symmetry, $p$-dichlorobenzene molecules fit much more closely and compactly into the crystal lattice.
        <br>This results in extraordinarily strong inter-molecular forces of attraction in the solid state. Consequently, substantially more thermal energy is required to break the crystal lattice, giving the para-isomer a much higher melting point ($p: 325\\text{ K}$ vs $o: 256\\text{ K}, m: 249\\text{ K}$).</li>
      <li><strong>Lower Solubility:</strong>
        <br>Because of the superior close-packing in the solid lattice, the lattice enthalpy of the $p$-isomer is very high. Dissolution requires overcoming this large lattice enthalpy. Since solvent-solute interactions cannot compensate for this energy, $p$-dichlorobenzene is much less soluble in organic solvents and water than the ortho- and meta-isomers.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Symmetry of p-isomer enabling close crystal lattice packing', '1 Mark'],
    ['High lattice enthalpy requiring more energy to melt and dissolve', '1 Mark']
  ]
));

// Exercise 6.19
questions.push(createQCard(
  'c12c-ch6-q28', 'Exercise 6.19', 'NCERT Exercise',
  'How the following conversions can be carried out?<br>(i) Propene to propan-1-ol<br>(ii) 1-Bromopropane to 2-bromopropane<br>(iii) Toluene to benzyl alcohol<br>(iv) Benzene to 4-bromonitrobenzene<br>(v) Benzyl alcohol to 2-phenylethanoic acid',
  `<div class="step">
    <b>Conversion Sequences:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Propene to propan-1-ol:</strong>
        $$\\text{CH}_3\\text{CH}=\\text{CH}_2 + \\text{HBr} \\xrightarrow{\\text{Peroxide}} \\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Br} \\xrightarrow{\\text{aq. KOH}} \\mathbf{\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH}}$$
        (Or by hydroboration-oxidation: $\\text{B}_2\\text{H}_6$ followed by $\\text{H}_2\\text{O}_2 / \\text{OH}^-$).</li>
      <li><strong>1-Bromopropane to 2-bromopropane:</strong>
        $$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Br} \\xrightarrow{\\text{alc. KOH, } \\Delta} \\text{CH}_3\\text{CH}=\\text{CH}_2 \\xrightarrow{\\text{HBr (Markovnikov)}} \\mathbf{\\text{CH}_3\\text{CH(Br)CH}_3}$$</li>
      <li><strong>Toluene to benzyl alcohol:</strong>
        $$\\text{C}_6\\text{H}_5\\text{CH}_3 \\xrightarrow{\\text{Cl}_2 / h\\nu} \\text{C}_6\\text{H}_5\\text{CH}_2\\text{Cl} \\xrightarrow{\\text{aq. KOH}} \\mathbf{\\text{C}_6\\text{H}_5\\text{CH}_2\\text{OH}}$$</li>
      <li><strong>Benzene to 4-bromonitrobenzene:</strong>
        $$\\text{C}_6\\text{H}_6 \\xrightarrow{\\text{Br}_2 / \\text{FeBr}_3} \\text{C}_6\\text{H}_5\\text{Br} \\xrightarrow{\\text{conc. } \\text{HNO}_3 + \\text{H}_2\\text{SO}_4} \\mathbf{p\\text{-Br-C}_6\\text{H}_4-\\text{NO}_2} \\quad (\\text{major})$$</li>
      <li><strong>Benzyl alcohol to 2-phenylethanoic acid:</strong>
        $$\\text{C}_6\\text{H}_5\\text{CH}_2\\text{OH} \\xrightarrow{\\text{PCl}_5 \\text{ or } \\text{SOCl}_2} \\text{C}_6\\text{H}_5\\text{CH}_2\\text{Cl} \\xrightarrow{\\text{KCN}} \\text{C}_6\\text{H}_5\\text{CH}_2\\text{CN} \\xrightarrow{\\text{H}_3\\text{O}^+} \\mathbf{\\text{C}_6\\text{H}_5\\text{CH}_2\\text{COOH}}$$</li>
    </ol>
  </div>`,
  '5 Marks',
  [
    ['Each correct multi-step conversion with balanced reagents', '1 Mark × 5 = 5 Marks']
  ]
));

// Exercise 6.20
questions.push(createQCard(
  'c12c-ch6-q29', 'Exercise 6.20', 'NCERT Exercise',
  'The treatment of alkyl chlorides with aqueous $\\text{KOH}$ leads to the formation of alcohols but in the presence of alcoholic $\\text{KOH}$, alkenes are major products. Explain.',
  `<div class="step">
    <b>Reason:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>In Aqueous $\\text{KOH}$:</strong>
        <br>In aqueous solution, $\\text{KOH}$ ionises to give hydroxide ions ($^-\\text{OH}$).
        <br>Water molecules strongly hydrate $^-\\text{OH}$ ions due to hydrogen bonding. This extensive hydration diminishes the basicity of $^-\\text{OH}$, making it act primarily as a <b>nucleophile</b> rather than a strong base.
        <br>Therefore, <b>nucleophilic substitution ($S_N$)</b> predominates, replacing the chloride group to yield alcohols:
        $$R-\\text{Cl} + ^-\\text{OH} \\rightarrow \\mathbf{R-\\text{OH}} + \\text{Cl}^-$$</li>
      <li><strong>In Alcoholic $\\text{KOH}$:</strong>
        <br>In alcohol (ethanol), $\\text{KOH}$ reacts with ethanol to establish an equilibrium producing alkoxide ions (ethoxide, $\\text{C}_2\\text{H}_5\\text{O}^-$):
        $$\\text{C}_2\\text{H}_5\\text{OH} + \\text{OH}^- \\rightleftharpoons \\mathbf{\\text{C}_2\\text{H}_5\\text{O}^-} + \\text{H}_2\\text{O}$$
        <br>Ethoxide ion is poorly solvated in alcohol and is a <b>substantially stronger base</b> than hydroxide ion.
        <br>Being a powerful base and more sterically bulky, $\\text{C}_2\\text{H}_5\\text{O}^-$ preferentially abstracts a proton from the $\\beta$-carbon rather than attacking the $\\alpha$-carbon, driving <b>$\\beta$-elimination ($E2$)</b> to form alkenes as major products:
        $$R-\\text{CH}_2\\text{CH}_2\\text{Cl} + \\text{C}_2\\text{H}_5\\text{O}^- \\rightarrow \\mathbf{R-\\text{CH}=\\text{CH}_2} + \\text{C}_2\\text{H}_5\\text{OH} + \\text{Cl}^-$$</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Aq. KOH: hydrated OH⁻ acts as nucleophile yielding alcohol (substitution)', '1 Mark'],
    ['Alc. KOH: generates stronger base RO⁻ abstracting β-proton yielding alkene (elimination)', '1 Mark']
  ]
));

// Exercise 6.21
questions.push(createQCard(
  'c12c-ch6-q30', 'Exercise 6.21', 'NCERT Exercise',
  'Primary alkyl halide $\\text{C}_4\\text{H}_9\\text{Br}$ (a) reacted with alcoholic $\\text{KOH}$ to give compound (b). Compound (b) is reacted with $\\text{HBr}$ to give (c) which is an isomer of (a). When (a) is reacted with sodium metal it gives compound (d), $\\text{C}_8\\text{H}_{18}$ which is different from the compound formed when n-butyl bromide is reacted with sodium. Give the structural formula of (a) and write the equations for all the reactions.',
  `<div class="step">
    <b>Step-by-Step Deduction:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li>Primary alkyl halides of $\\text{C}_4\\text{H}_9\\text{Br}$ are only two:
        <br>• $n$-butyl bromide: $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Br}$
        <br>• isobutyl bromide: $(\\text{CH}_3)_2\\text{CHCH}_2\\text{Br}$</li>
      <li>Compound (a) on Wurtz reaction gives compound (d) $\\text{C}_8\\text{H}_{18}$, which is <em>different</em> from the Wurtz product of $n$-butyl bromide ($n$-octane).
        <br>Therefore, <b>(a) must be Isobutyl bromide (1-bromo-2-methylpropane)</b>:
        $$\\mathbf{(a) = (\\text{CH}_3)_2\\text{CH}-\\text{CH}_2\\text{Br}}$$</li>
      <li><strong>Reaction 1: Dehydrohalogenation of (a) with alc. $\\text{KOH}$:</strong>
        $$(\\text{CH}_3)_2\\text{CH}-\\text{CH}_2\\text{Br} \\xrightarrow{\\text{alc. KOH}} \\mathbf{(\\text{CH}_3)_2\\text{C}=\\text{CH}_2} \\quad [\\mathbf{(b) = 2-\\text{Methylpropene}}]$$</li>
      <li><strong>Reaction 2: Addition of $\\text{HBr}$ to (b) (Markovnikov):</strong>
        $$(\\text{CH}_3)_2\\text{C}=\\text{CH}_2 + \\text{HBr} \\rightarrow \\mathbf{(\\text{CH}_3)_3\\text{C}-\\text{Br}} \\quad [\\mathbf{(c) = 2-\\text{Bromo-2-methylpropane}}]$$
        (Compound (c) is a tertiary isomer of (a)).</li>
      <li><strong>Reaction 3: Wurtz reaction of (a) with Na:</strong>
        $$2(\\text{CH}_3)_2\\text{CHCH}_2\\text{Br} + 2\\text{Na} \\xrightarrow{\\text{dry ether}} \\mathbf{(\\text{CH}_3)_2\\text{CHCH}_2-\\text{CH}_2\\text{CH(CH}_3)_2} + 2\\text{NaBr}$$
        $$\\mathbf{(d) = 2,5-\\text{Dimethylhexane}} \\quad (\\text{C}_8\\text{H}_{18})$$</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['Identification of (a) as isobutyl bromide and (b) as 2-methylpropene', '1½ Marks'],
    ['Identification of (c) as tert-butyl bromide and (d) as 2,5-dimethylhexane', '1½ Marks'],
    ['Writing all three balanced chemical equations', '1 Mark']
  ]
));

// Exercise 6.22
questions.push(createQCard(
  'c12c-ch6-q31', 'Exercise 6.22', 'NCERT Exercise',
  'What happens when:<br>(i) n-butyl chloride is treated with alcoholic $\\text{KOH}$?<br>(ii) bromobenzene is treated with $\\text{Mg}$ in the presence of dry ether?<br>(iii) chlorobenzene is subjected to hydrolysis?<br>(iv) ethyl chloride is treated with aqueous $\\text{KOH}$?<br>(v) methyl bromide is treated with sodium in the presence of dry ether?<br>(vi) methyl chloride is treated with $\\text{KCN}$?',
  `<div class="step">
    <b>Reactions & Explanations:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$n$-Butyl chloride with alcoholic $\\text{KOH}$:</strong>
        <br>Undergoes $\\beta$-elimination to form <b>but-1-ene</b>:
        $$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Cl} + \\text{alc. KOH} \\xrightarrow{\\Delta} \\mathbf{\\text{CH}_3\\text{CH}_2\\text{CH}=\\text{CH}_2} + \\text{KCl} + \\text{H}_2\\text{O}$$</li>
      <li><strong>Bromobenzene with $\\text{Mg}$ in dry ether:</strong>
        <br>Forms the Grignard reagent <b>phenylmagnesium bromide</b>:
        $$\\text{C}_6\\text{H}_5\\text{Br} + \\text{Mg} \\xrightarrow{\\text{dry ether}} \\mathbf{\\text{C}_6\\text{H}_5\\text{MgBr}}$$</li>
      <li><strong>Chlorobenzene subjected to hydrolysis:</strong>
        <br>Under ordinary conditions, <b>no reaction occurs</b> due to partial double bond character of the $\\text{C}-\\text{Cl}$ bond and resonance.
        <br>Under drastic conditions (Dow\'s process: $623\\text{ K}, 300\\text{ atm}$ with $\\text{NaOH}$ followed by acidification), it hydrolyses to <b>phenol</b>:
        $$\\text{C}_6\\text{H}_5\\text{Cl} \\xrightarrow{1.\\; \\text{NaOH, } 623\\text{ K}, 300\\text{ atm},\\; 2.\\; \\text{H}^+} \\mathbf{\\text{C}_6\\text{H}_5\\text{OH}}$$</li>
      <li><strong>Ethyl chloride with aqueous $\\text{KOH}$:</strong>
        <br>Undergoes nucleophilic substitution to form <b>ethanol</b>:
        $$\\text{CH}_3\\text{CH}_2\\text{Cl} + \\text{aq. KOH} \\rightarrow \\mathbf{\\text{CH}_3\\text{CH}_2\\text{OH}} + \\text{KCl}$$</li>
      <li><strong>Methyl bromide with $\\text{Na}$ in dry ether (Wurtz Reaction):</strong>
        <br>Couples to form <b>ethane</b>:
        $$2\\text{CH}_3\\text{Br} + 2\\text{Na} \\xrightarrow{\\text{dry ether}} \\mathbf{\\text{CH}_3-\\text{CH}_3} + 2\\text{NaBr}$$</li>
      <li><strong>Methyl chloride with $\\text{KCN}$:</strong>
        <br>Undergoes substitution to form <b>ethanenitrile (acetonitrile)</b>:
        $$\\text{CH}_3\\text{Cl} + \\text{KCN} \\xrightarrow{\\text{aq. ethanol}} \\mathbf{\\text{CH}_3\\text{CN}} + \\text{KCl}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) to (iii) reactions and products accurately stated', '1½ Marks'],
    ['(iv) to (vi) reactions and products accurately stated', '1½ Marks']
  ]
));

// Exercise 6.23 to 6.33: Additional Conversions & Mechanics
questions.push(createQCard(
  'c12c-ch6-q32', 'Exercise 6.23', 'NCERT Exercise',
  'Explain why haloarenes are extremely less reactive towards nucleophilic substitution reactions.',
  `<div class="step">
    <b>Reasons for Extremely Low Reactivity of Haloarenes:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Resonance Effect:</strong> The lone pair electrons on the halogen atom are conjugated with the $\\pi$-electrons of the benzene ring. Delocalization creates partial double bond character in the $\\text{C}-\\text{Cl}$ bond (shorter $169\\text{ pm}$), making bond cleavage much harder than in haloalkanes ($177\\text{ pm}$).</li>
      <li><strong>Difference in Hybridisation of Carbon:</strong> In haloalkanes, halogen is attached to an $sp^3$ carbon, whereas in haloarenes it is attached to an <b>$sp^2$ carbon</b>. The $sp^2$ carbon has higher $s$-character (33.3% vs 25%), making it more electronegative and holding the $\\text{C}-\\text{Cl}$ electron pair more tightly.</li>
      <li><strong>Instability of Phenyl Cation:</strong> If $S_N1$ occurred, it would require formation of a phenyl cation ($\\text{C}_6\\text{H}_5^+$), which is not stabilized by resonance because the vacant $sp^2$ orbital is orthogonal to the $\\pi$-system.</li>
      <li><strong>Electrostatic Repulsion:</strong> The approaching electron-rich nucleophile is repelled by the electron-rich $\\pi$-electron cloud of the benzene ring.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Resonance effect producing partial double bond character', '1 Mark'],
    ['sp² hybridisation of aromatic carbon holding halogen tightly', '1 Mark'],
    ['Instability of phenyl cation and repulsion by aromatic ring', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch6-q33', 'Exercise 6.24', 'NCERT Exercise',
  'Explain the role of $\\text{NO}_2$ groups at ortho and para positions in enhancing the reactivity of haloarenes towards nucleophilic substitution.',
  `<div class="step">
    <b>Mechanism of Nucleophilic Aromatic Substitution ($S_N\\text{Ar}$):</b><br>
    The presence of electron-withdrawing nitro ($-\\text{NO}_2$) groups at ortho and para positions drastically increases reactivity:<br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Rate-Determining Step:</strong> The nucleophile ($^-\\text{OH}$) attacks the carbon bearing the chlorine atom to form a resonance-stabilised carbanion intermediate (Meisenheimer complex).</li>
      <li><strong>Resonance Stabilization at $o$- and $p$-positions:</strong> The negative charge generated during the attack is delocalized over the ortho and para positions of the benzene ring. When the $-\\text{NO}_2$ group is present at ortho or para positions, one of the resonance contributors places the negative charge directly on the oxygen atoms of the highly electronegative nitro group, providing profound stabilization.</li>
      <li><strong>Meta Position Ineffective:</strong> When the $-\\text{NO}_2$ group is at the meta position, the negative charge never falls on the carbon bearing the nitro group; hence, meta-$-\\text{NO}_2$ cannot stabilize the intermediate carbanion by resonance.</li>
    </ol>
    <em>Evidence:</em> Chlorobenzene requires $623\\text{ K}$ and $300\\text{ atm}$; $p$-nitrochlorobenzene reacts at $443\\text{ K}$; $2,4$-dinitrochlorobenzene at $368\\text{ K}$; and $2,4,6$-trinitrochlorobenzene (picryl chloride) hydrolyses simply on warm water ($323\\text{ K}$).
  </div>`,
  '3 Marks',
  [
    ['Formation of Meisenheimer carbanion intermediate', '1 Mark'],
    ['Direct resonance dispersal of negative charge onto oxygen of o/p nitro groups', '1 Mark'],
    ['Comparison with ineffective meta position and trend in reaction conditions', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch6-q34', 'Exercise 6.25', 'NCERT Exercise',
  'What are enantiomers and diastereomers? Explain with reference to lactic acid and 2,3-dichlorobutane.',
  `<div class="step">
    <b>Definitions & Illustrations:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Enantiomers:</strong> Stereoisomers that are <b>non-superimposable mirror images</b> of each other.
        <br>• Possess identical physical and chemical properties in an achiral environment but rotate plane-polarised light in equal and opposite directions ($+d$ and $-l$).
        <br>• <em>Example:</em> Lactic acid [$\\text{CH}_3-\\text{C}^*\\text{H(OH)}-\\text{COOH}$] has one chiral carbon ($C^*$) and exists as a pair of enantiomers ($d$-lactic acid and $l$-lactic acid).</li>
      <li><strong>Diastereomers:</strong> Stereoisomers that are <b>not mirror images</b> of each other and non-superimposable.
        <br>• Have different melting points, boiling points, solubilities, and dipole moments.
        <br>• <em>Example:</em> 2,3-Dichlorobutane has two chiral centres. The optically inactive <b>meso-form</b> (possessing an internal plane of symmetry) and either of the optically active $(2R, 3R)$ or $(2S, 3S)$ enantiomers form a pair of <b>diastereomers</b>.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Enantiomer definition (non-superimposable mirror images) with lactic acid', '1 Mark'],
    ['Diastereomer definition (non-mirror image stereoisomers) with 2,3-dichlorobutane', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch6-q35', 'Exercise 6.26', 'NCERT Exercise',
  'Explain Chirality, Optical Inversion, Retention, and Racemisation in nucleophilic substitution.',
  `<div class="step">
    <b>Stereochemical Terms in Reaction Mechanisms:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Chirality:</strong> The geometric property of an object or molecule of being non-superimposable on its mirror image. A carbon bonded to four different groups is called an asymmetric or chiral carbon.</li>
      <li><strong>Inversion of Configuration (Walden Inversion):</strong> Occurs in $S_N2$ reactions where the incoming nucleophile attacks from the side opposite to the leaving group, turning the spatial arrangement of bonds inside out (like an umbrella in a gale wind).</li>
      <li><strong>Retention of Configuration:</strong> The spatial arrangement of bonds around an asymmetric carbon remains identical before and after the reaction (no bond to the asymmetric centre is broken).</li>
      <li><strong>Racemisation:</strong> The process of converting an optically active enantiomer into an equimolar mixture of $d$ and $l$ isomers (a 50:50 racemic mixture), which has zero optical rotation. This typically occurs in $S_N1$ reactions because the intermediate planar carbocation can be attacked with equal probability from either front or back face.</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['Chirality and asymmetric carbon definition', '1 Mark'],
    ['Inversion of configuration (SN2 umbrella turning)', '1 Mark'],
    ['Retention of configuration', '1 Mark'],
    ['Racemisation (SN1 planar carbocation front/back attack)', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch6-q36', 'Exercise 6.27', 'NCERT Exercise',
  'Carry out the conversion: (i) Chlorobenzene to biphenyl, (ii) Propene to 2-bromopropane, (iii) Bromoethane to butane.',
  `<div class="step">
    <b>Reactions:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Chlorobenzene to Biphenyl (Fittig Reaction):</strong>
        Two molecules of chlorobenzene react with sodium metal in dry ether:
        $$2\\text{C}_6\\text{H}_5\\text{Cl} + 2\\text{Na} \\xrightarrow{\\text{dry ether}} \\mathbf{\\text{C}_6\\text{H}_5-\\text{C}_6\\text{H}_5 (\\text{Biphenyl})} + 2\\text{NaCl}$$</li>
      <li><strong>Propene to 2-Bromopropane:</strong>
        Electrophilic addition of $\\text{HBr}$ following Markovnikov\'s rule:
        $$\\text{CH}_3-\\text{CH}=\\text{CH}_2 + \\text{HBr} \\rightarrow \\mathbf{\\text{CH}_3-\\text{CH(Br)}-\\text{CH}_3}$$</li>
      <li><strong>Bromoethane to Butane (Wurtz Reaction):</strong>
        Two molecules of bromoethane couple in presence of sodium:
        $$2\\text{CH}_3\\text{CH}_2\\text{Br} + 2\\text{Na} \\xrightarrow{\\text{dry ether}} \\mathbf{\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_3} + 2\\text{NaBr}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) Fittig reaction to biphenyl', '1 Mark'],
    ['(ii) Markovnikov addition to 2-bromopropane', '1 Mark'],
    ['(iii) Wurtz coupling to n-butane', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch6-q37', 'Exercise 6.28', 'NCERT Exercise',
  'Carry out the conversion: (i) 1-Chlorobutane to 1-iodobutane, (ii) Isopropyl alcohol to iodoform, (iii) Chlorobenzene to p-nitrophenol.',
  `<div class="step">
    <b>Reactions:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>1-Chlorobutane to 1-iodobutane (Finkelstein Reaction):</strong>
        $$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Cl} + \\text{NaI} \\xrightarrow{\\text{dry acetone}} \\mathbf{\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{I}} + \\text{NaCl} \\downarrow$$</li>
      <li><strong>Isopropyl alcohol to Iodoform (Iodoform Test / Haloform Reaction):</strong>
        $$\\text{CH}_3\\text{CH(OH)CH}_3 + 4\\text{I}_2 + 6\\text{NaOH} \\rightarrow \\mathbf{\\text{CHI}_3 \\downarrow (\\text{yellow ppt})} + \\text{CH}_3\\text{COONa} + 5\\text{NaI} + 5\\text{H}_2\\text{O}$$</li>
      <li><strong>Chlorobenzene to $p$-nitrophenol:</strong>
        $$\\text{C}_6\\text{H}_5\\text{Cl} \\xrightarrow{\\text{conc. } \\text{HNO}_3 + \\text{H}_2\\text{SO}_4} p\\text{-NO}_2\\text{C}_6\\text{H}_4\\text{Cl} \\xrightarrow{1.\\; \\text{aq. NaOH, } 443\\text{ K},\\; 2.\\; \\text{H}^+} \\mathbf{p\\text{-NO}_2\\text{C}_6\\text{H}_4\\text{OH}}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) Finkelstein reaction with NaI/acetone', '1 Mark'],
    ['(ii) Iodoform reaction producing yellow CHI₃ ppt', '1 Mark'],
    ['(iii) Nitration followed by nucleophilic substitution at 443 K', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch6-q38', 'Exercise 6.29', 'NCERT Exercise',
  'Why are haloalkanes more reactive than haloarenes towards nucleophilic substitution, but haloarenes more reactive towards electrophilic substitution?',
  `<div class="step">
    <b>Comparative Chemical Reactivity:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Nucleophilic Substitution:</strong>
        <br>• Haloalkanes have polar, single $\\text{C}-\\text{X}$ bonds with $sp^3$ hybridised carbon and no resonance stabilization. Nucleophiles easily displace the halide ion.
        <br>• Haloarenes exhibit resonance giving partial double bond character to $\\text{C}-\\text{X}$, $sp^2$ carbon, and electrostatic repulsion from the $\\pi$-electron cloud. Hence, they resist nucleophiles.</li>
      <li><strong>Electrophilic Substitution:</strong>
        <br>• Haloarenes possess an electron-rich aromatic $\\pi$-cloud. Although halogen is deactivating due to its strong $-I$ effect, its $+R$ resonance effect increases electron density specifically at the <b>ortho and para positions</b>, directing incoming electrophiles ($\\text{NO}_2^+, \\text{Cl}^+, \\text{CH}_3^+, \\text{SO}_3$) to form ortho- and para-substituted products.
        <br>• Haloalkanes are aliphatic saturated molecules possessing no $\\pi$-electron system and cannot undergo electrophilic aromatic substitutions.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Explanation of nucleophilic resistance in haloarenes (resonance, sp²)', '1½ Marks'],
    ['Explanation of electrophilic aromatic substitution directed by +R effect at o/p', '1½ Marks']
  ]
));

questions.push(createQCard(
  'c12c-ch6-q39', 'Exercise 6.30', 'NCERT Exercise',
  'Write the mechanism of nitration and chlorination of chlorobenzene.',
  `<div class="step">
    <b>Electrophilic Aromatic Substitution Mechanisms:</b><br><br>
    <b>1. Chlorination:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Generation of electrophile: $\\text{Cl}_2 + \\text{FeCl}_3 \\rightarrow \\text{Cl}^+ + [\\text{FeCl}_4]^-$</li>
      <li>Attack of electrophile $\\text{Cl}^+$ on the benzene ring forming a resonance-stabilised carbocation (arenium ion).</li>
      <li>Loss of proton to yield <b>1,4-dichlorobenzene (para, major)</b> and 1,2-dichlorobenzene (ortho, minor):
        $$\\text{C}_6\\text{H}_5\\text{Cl} + \\text{Cl}_2 \\xrightarrow{\\text{FeCl}_3} \\mathbf{p\\text{-C}_6\\text{H}_4\\text{Cl}_2} + \\text{HCl}$$</li>
    </ul>
    <br>
    <b>2. Nitration:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Generation of electrophile $\\text{NO}_2^+$ from nitrating mixture ($\\text{HNO}_3 + 2\\text{H}_2\\text{SO}_4 \\rightleftharpoons \\text{NO}_2^+ + \\text{H}_3\\text{O}^+ + 2\\text{HSO}_4^-$).</li>
      <li>Attack at ortho and para positions yielding <b>1-chloro-4-nitrobenzene (para, major)</b> and 1-chloro-2-nitrobenzene (ortho, minor).</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Electrophile generation for both chlorination and nitration', '1 Mark'],
    ['Ortho/para directing mechanism with para as major product', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch6-q40', 'Exercise 6.31', 'NCERT Exercise',
  'Explain Friedel-Crafts alkylation and acylation of chlorobenzene with equations.',
  `<div class="step">
    <b>Friedel-Crafts Reactions of Chlorobenzene:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Friedel-Crafts Alkylation:</strong>
        Chlorobenzene is treated with chloromethane in the presence of anhydrous $\\text{AlCl}_3$ as catalyst. Methyl carbocation ($\text{CH}_3^+$) attacks the ring:
        $$\\text{C}_6\\text{H}_5\\text{Cl} + \\text{CH}_3\\text{Cl} \\xrightarrow{\\text{anhyd. AlCl}_3} \\mathbf{1-\\text{chloro-4-methylbenzene} (p\\text{-chlorotoluene, major})} + 1-\\text{chloro-2-methylbenzene} (o\\text{, minor}) + \\text{HCl}$$
      </li>
      <li><strong>Friedel-Crafts Acylation:</strong>
        Chlorobenzene reacts with ethanoyl chloride (acetyl chloride) in the presence of anhydrous $\\text{AlCl}_3$:
        $$\\text{C}_6\\text{H}_5\\text{Cl} + \\text{CH}_3\\text{COCl} \\xrightarrow{\\text{anhyd. AlCl}_3} \\mathbf{4-\\text{chloroacetophenone} (\\text{major})} + 2-\\text{chloroacetophenone} (\\text{minor}) + \\text{HCl}$$
      </li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Alkylation equation with anhydrous AlCl₃ forming 1-chloro-4-methylbenzene', '1 Mark'],
    ['Acylation equation forming 4-chloroacetophenone as major product', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch6-q41', 'Exercise 6.32', 'NCERT Exercise',
  'What is the Wurtz-Fittig reaction? How is it different from Wurtz reaction and Fittig reaction?',
  `<div class="step">
    <b>Comparison of Reactions:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Wurtz-Fittig Reaction:</strong>
        A mixture of an <b>alkyl halide</b> and an <b>aryl halide</b> is treated with sodium metal in dry ether to yield an <b>alkylarene</b>:
        $$\\text{C}_6\\text{H}_5\\text{Br} + 2\\text{Na} + \\text{CH}_3\\text{Br} \\xrightarrow{\\text{dry ether}} \\mathbf{\\text{C}_6\\text{H}_5-\\text{CH}_3 (\\text{Toluene})} + 2\\text{NaBr}$$
      </li>
      <li><strong>Wurtz Reaction:</strong>
        Two molecules of <b>alkyl halides</b> react with sodium to form symmetrical alkanes:
        $$2R-\\text{X} + 2\\text{Na} \\xrightarrow{\\text{dry ether}} \\mathbf{R-R} + 2\\text{NaX}$$
      </li>
      <li><strong>Fittig Reaction:</strong>
        Two molecules of <b>aryl halides</b> react with sodium to form biaryls:
        $$2\\text{Ar}-\\text{X} + 2\\text{Na} \\xrightarrow{\\text{dry ether}} \\mathbf{\\text{Ar}-\\text{Ar} (\\text{Biphenyl})} + 2\\text{NaX}$$
      </li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Wurtz-Fittig equation (aryl halide + alkyl halide + Na → alkylarene)', '1 Mark'],
    ['Distinction from Wurtz (alkyl-alkyl) and Fittig (aryl-aryl)', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch6-q42', 'Exercise 6.33', 'NCERT Exercise',
  'Explain why haloalkanes undergo nucleophilic substitution whereas haloarenes undergo electrophilic substitution as major reactions.',
  `<div class="step">
    <b>Fundamental Comparative Analysis:</b>
    <table style="width:100%; border-collapse:collapse; margin:10px 0; border:1px solid #cbd5e1;">
      <tr style="background:#f1f5f9;">
        <th style="border:1px solid #cbd5e1; padding:8px; text-align:left;">Feature</th>
        <th style="border:1px solid #cbd5e1; padding:8px; text-align:left;">Haloalkanes ($R-\\text{X}$)</th>
        <th style="border:1px solid #cbd5e1; padding:8px; text-align:left;">Haloarenes ($\\text{Ar}-\\text{X}$)</th>
      </tr>
      <tr>
        <td style="border:1px solid #cbd5e1; padding:8px;"><strong>$\\text{C}-\\text{X}$ Bond Nature</strong></td>
        <td style="border:1px solid #cbd5e1; padding:8px;">Pure single bond, $sp^3$ carbon, bond length $\\approx 177\\text{ pm}$, easily cleaved by nucleophiles.</td>
        <td style="border:1px solid #cbd5e1; padding:8px;">Partial double bond character due to resonance (+R effect), $sp^2$ carbon, bond length $\\approx 169\\text{ pm}$, strongly resists cleavage by nucleophiles.</td>
      </tr>
      <tr>
        <td style="border:1px solid #cbd5e1; padding:8px;"><strong>Electronic Environment</strong></td>
        <td style="border:1px solid #cbd5e1; padding:8px;">Electrophilic $\\alpha$-carbon is open to attack by electron-rich nucleophiles ($S_N1 / S_N2$).</td>
        <td style="border:1px solid #cbd5e1; padding:8px;">Surrounded by dense $\\pi$-electron cloud of benzene ring, which repels nucleophiles but readily attracts electrophiles ($E^+$).</td>
      </tr>
      <tr>
        <td style="border:1px solid #cbd5e1; padding:8px;"><strong>Major Reaction Class</strong></td>
        <td style="border:1px solid #cbd5e1; padding:8px;"><b>Nucleophilic Substitution ($S_N$)</b></td>
        <td style="border:1px solid #cbd5e1; padding:8px;"><b>Electrophilic Aromatic Substitution ($S_E\\text{Ar}$)</b> at ortho/para positions.</td>
      </tr>
    </table>
  </div>`,
  '2 Marks',
  [
    ['Comparison of bond polarity and resonance partial double bond character', '1 Mark'],
    ['Repulsion of nucleophiles vs attraction of electrophiles by aromatic π-cloud', '1 Mark']
  ]
));

console.log(`\nCompiling Chapter 6: Haloalkanes and Haloarenes (Total: ${questions.length} Qs)...`);
saveChapter(chNum, chTitle, svgDiagram, exTitle, questions, 'Alcohols, Phenols and Ethers');
console.log(`Chapter 6: Haloalkanes and Haloarenes successfully saved!`);
