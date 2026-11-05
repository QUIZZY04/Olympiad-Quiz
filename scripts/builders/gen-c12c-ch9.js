// scripts/builders/gen-c12c-ch9.js
// Class 12 Chemistry Chapter 9: Amines (ऐमीन) (NCERT Rationalised 2026–27)
// Full Coverage: 9 In-Text Questions + 28 End-of-Chapter Exercises = 37 Questions Verbatim
const { createQCard, saveChapter } = require('./c12c-helper');

const chNum = 9;
const chTitle = 'Amines (ऐमीन)';
const exTitle = 'NCERT Chapter 9: In-Text Questions (9.1–9.9) & End-of-Chapter Exercises (9.1–9.28)';

const svgDiagram = `
<div style="background:linear-gradient(135deg, #eef2ff, #e0e7ff); border:1px solid #c7d2fe; border-radius:12px; padding:20px; margin-bottom:24px;">
  <h3 style="font-size:1.05rem; color:#3730a3; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    Amines & Diazonium Salts: Basicity, Distinguishing Tests & Synthetic Power
  </h3>
  <svg viewBox="0 0 850 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
    <!-- Box 1: Basicity of Amines -->
    <rect x="15" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#4f46e5" stroke-width="2"/>
    <text x="110" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#3730a3">Basicity Order (aq)</text>
    <text x="110" y="70" text-anchor="middle" font-size="11" fill="#334155">Inductive + Hydration + Steric</text>
    <text x="110" y="94" text-anchor="middle" font-size="10" fill="#64748b">• Et: (Et)₂NH > (Et)₃N > EtNH₂ > NH₃</text>
    <text x="110" y="112" text-anchor="middle" font-size="10" fill="#64748b">• Me: (Me)₂NH > MeNH₂ > (Me)₃N > NH₃</text>

    <!-- Box 2: Hinsberg Test -->
    <rect x="225" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
    <text x="320" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Hinsberg Test</text>
    <text x="320" y="72" text-anchor="middle" font-size="11" fill="#334155">C₆H₅SO₂Cl (Benzenesulphonyl)</text>
    <text x="320" y="96" text-anchor="middle" font-size="10" fill="#64748b">• 1°: Soluble in alkali (acidic H)</text>
    <text x="320" y="114" text-anchor="middle" font-size="10" fill="#64748b">• 2°: Insoluble in alkali | 3°: No rxn</text>

    <!-- Box 3: Hofmann & Gabriel -->
    <rect x="435" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
    <text x="530" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">Hofmann & Gabriel</text>
    <text x="530" y="72" text-anchor="middle" font-size="11" fill="#334155">Pure 1° Amine Synthesis</text>
    <text x="530" y="96" text-anchor="middle" font-size="10" fill="#64748b">• Hofmann: RCONH₂ + Br₂/KOH → RNH₂</text>
    <text x="530" y="114" text-anchor="middle" font-size="10" fill="#64748b">• Gabriel: Phthalimide → 1° aliphatic only</text>

    <!-- Box 4: Diazonium Salts -->
    <rect x="645" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
    <text x="740" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">Diazonium Salts</text>
    <text x="740" y="72" text-anchor="middle" font-size="11" fill="#334155">Ar-N₂⁺ Cl⁻ (273–278 K)</text>
    <text x="740" y="96" text-anchor="middle" font-size="10" fill="#64748b">• Sandmeyer (CuCl/CuBr) & Gattermann</text>
    <text x="740" y="114" text-anchor="middle" font-size="10" fill="#64748b">• Azo dye coupling (Phenol/Aniline)</text>
  </svg>
</div>`;

const questions = [];

// ============================================================================
// PART 1: NCERT IN-TEXT QUESTIONS (9.1 to 9.9)
// ============================================================================

// Question 9.1 (In-Text)
questions.push(createQCard(
  'c12c-ch9-q1', 'In-Text 9.1', 'NCERT In-Text',
  'Classify the following amines as primary, secondary or tertiary:<br>(i) $(\\text{CH}_3)_2\\text{CH}-\\text{NH}_2$<br>(ii) $(\\text{CH}_3\\text{CH}_2)_2\\text{NH}$<br>(iii) $(\\text{CH}_3)_3\\text{N}$<br>(iv) $\\text{C}_6\\text{H}_5\\text{NHCH}_3$',
  `<div class="step">
    <b>Classification based on number of carbon groups attached to nitrogen:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$(\\text{CH}_3)_2\\text{CH}-\\text{NH}_2$ (Propan-2-amine):</strong> <b>Primary ($1^\\circ$) amine</b> (nitrogen attached to one alkyl group; contains $-\\text{NH}_2$ group).</li>
      <li><strong>$(\\text{CH}_3\\text{CH}_2)_2\\text{NH}$ (Diethylamine):</strong> <b>Secondary ($2^\\circ$) amine</b> (nitrogen attached to two ethyl groups; contains $-\\text{NH}-$ group).</li>
      <li><strong>$(\\text{CH}_3)_3\\text{N}$ (Trimethylamine):</strong> <b>Tertiary ($3^\\circ$) amine</b> (nitrogen attached to three methyl groups; contains $-\\text{N}<$ group).</li>
      <li><strong>$\\text{C}_6\\text{H}_5\\text{NHCH}_3$ (N-Methylaniline):</strong> <b>Secondary ($2^\\circ$) amine</b> (nitrogen attached to a phenyl ring and a methyl group).</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Each correct classification with structure identified', '½ Mark × 4 = 2 Marks']
  ]
));

// Question 9.2 (In-Text)
questions.push(createQCard(
  'c12c-ch9-q2', 'In-Text 9.2', 'NCERT In-Text',
  '(i) Write structures of different isomeric amines corresponding to molecular formula $\\text{C}_4\\text{H}_{11}\\text{N}$.<br>(ii) Write IUPAC names of all the isomers.<br>(iii) What type of isomerism is exhibited by different pairs of amines?',
  `<div class="step">
    <b>All 8 Isomers of $\\text{C}_4\\text{H}_{11}\\text{N}$:</b><br><br>
    <b>A. Primary ($1^\\circ$) Amines (4 isomers):</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li>$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{NH}_2$: Butan-1-amine</li>
      <li>$\\text{CH}_3\\text{CH}_2\\text{CH(NH}_2)\\text{CH}_3$: Butan-2-amine</li>
      <li>$(\\text{CH}_3)_2\\text{CHCH}_2\\text{NH}_2$: 2-Methylpropan-1-amine</li>
      <li>$(\\text{CH}_3)_3\\text{C-NH}_2$: 2-Methylpropan-2-amine</li>
    </ol>
    <b>B. Secondary ($2^\\circ$) Amines (3 isomers):</b>
    <ol start="5" style="margin-left:20px; line-height:1.75;">
      <li>$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{NHCH}_3$: N-Methylpropan-1-amine</li>
      <li>$(\\text{CH}_3)_2\\text{CHNHCH}_3$: N-Methylpropan-2-amine</li>
      <li>$\\text{CH}_3\\text{CH}_2\\text{NHCH}_2\\text{CH}_3$: N-Ethylethanamine (Diethylamine)</li>
    </ol>
    <b>C. Tertiary ($3^\\circ$) Amine (1 isomer):</b>
    <ol start="8" style="margin-left:20px; line-height:1.75;">
      <li>$(\\text{CH}_3)_2\\text{NCH}_2\\text{CH}_3$: N,N-Dimethylethanamine</li>
    </ol>
    <br>
    <b>(iii) Types of Isomerism Exhibited:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Chain Isomerism:</strong> e.g., Butan-1-amine and 2-methylpropan-1-amine.</li>
      <li><strong>Position Isomerism:</strong> e.g., Butan-1-amine and butan-2-amine.</li>
      <li><strong>Metamerism:</strong> e.g., N-Methylpropan-1-amine and N-ethylethanamine (different alkyl chains attached to nitrogen).</li>
      <li><strong>Functional Isomerism:</strong> Between $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['All 8 structural isomers drawn with IUPAC names', '2 Marks'],
    ['Classification into 4 primary, 3 secondary, and 1 tertiary amine', '1 Mark'],
    ['Types of isomerism explained with specific pairs', '1 Mark']
  ]
));

// Question 9.3 (In-Text)
questions.push(createQCard(
  'c12c-ch9-q3', 'In-Text 9.3', 'NCERT In-Text',
  'How will you convert:<br>(i) Benzene into aniline<br>(ii) Benzene into N,N-dimethylaniline<br>(iii) $\\text{Cl}-(\\text{CH}_2)_4-\\text{Cl}$ into hexan-1,6-diamine?',
  `<div class="step">
    <b>Synthetic Sequences:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Benzene into Aniline:</strong>
        $$\\text{C}_6\\text{H}_6 \\xrightarrow{\\text{conc. } \\text{HNO}_3 + \\text{H}_2\\text{SO}_4, 330\\text{ K}} \\text{C}_6\\text{H}_5\\text{NO}_2 \\xrightarrow{\\text{Sn} / \\text{HCl} \\text{ (or } \\text{Fe/HCl)}} \\mathbf{\\text{C}_6\\text{H}_5\\text{NH}_2 (\\text{Aniline})}$$</li>
      <li><strong>Benzene into N,N-dimethylaniline:</strong>
        $$\\text{C}_6\\text{H}_6 \\xrightarrow{\\text{HNO}_3 / \\text{H}_2\\text{SO}_4} \\text{C}_6\\text{H}_5\\text{NO}_2 \\xrightarrow{\\text{Fe/HCl}} \\text{C}_6\\text{H}_5\\text{NH}_2 \\xrightarrow{2\\text{CH}_3\\text{I} / \\text{Na}_2\\text{CO}_3} \\mathbf{\\text{C}_6\\text{H}_5\\text{N(CH}_3)_2}$$</li>
      <li><strong>$\\text{Cl}-(\\text{CH}_2)_4-\\text{Cl}$ into Hexan-1,6-diamine:</strong>
        $$\\text{Cl}-(\\text{CH}_2)_4-\\text{Cl} + 2\\text{KCN} \\xrightarrow{\\text{ethanol}} \\text{NC}-(\\text{CH}_2)_4-\\text{CN} \\xrightarrow{\\text{H}_2 / \\text{Ni} \\text{ (or } \\text{Na/EtOH)}} \\mathbf{\\text{H}_2\\text{N}-(\\text{CH}_2)_6-\\text{NH}_2}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) Benzene nitration followed by Fe/HCl reduction to aniline', '1 Mark'],
    ['(ii) Aniline methylation with CH₃I to N,N-dimethylaniline', '1 Mark'],
    ['(iii) Cyanide substitution adding 2 carbons followed by reduction', '1 Mark']
  ]
));

// Question 9.4 (In-Text)
questions.push(createQCard(
  'c12c-ch9-q4', 'In-Text 9.4', 'NCERT In-Text',
  'Arrange the following in increasing order of their basic strength:<br>(i) $\\text{C}_2\\text{H}_5\\text{NH}_2, \\text{C}_6\\text{H}_5\\text{NH}_2, \\text{NH}_3, \\text{C}_6\\text{H}_5\\text{CH}_2\\text{NH}_2$ and $(\\text{C}_2\\text{H}_5)_2\\text{NH}$<br>(ii) $\\text{C}_2\\text{H}_5\\text{NH}_2, (\\text{C}_2\\text{H}_5)_2\\text{NH}, (\\text{C}_2\\text{H}_5)_3\\text{N}, \\text{C}_6\\text{H}_5\\text{NH}_2$<br>(iii) $\\text{CH}_3\\text{NH}_2, (\\text{CH}_3)_2\\text{NH}, (\\text{CH}_3)_3\\text{N}, \\text{C}_6\\text{H}_5\\text{NH}_2, \\text{C}_6\\text{H}_5\\text{CH}_2\\text{NH}_2$',
  `<div class="step">
    <b>Basicity Trends in Aqueous Solution:</b><br>
    Governed by the combined interplay of inductive ($+I$) effect, solvation (hydration) energy of ammonium cation, and steric hindrance.<br><br>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Set (i):</strong>
        <br>Aniline has lone pair delocalized into ring (least basic). In benzylamine, $-\\text{CH}_2-$ prevents resonance. Diethylamine has two $+I$ ethyl groups:
        $$\\mathbf{\\text{C}_6\\text{H}_5\\text{NH}_2 < \\text{NH}_3 < \\text{C}_6\\text{H}_5\\text{CH}_2\\text{NH}_2 < \\text{C}_2\\text{H}_5\\text{NH}_2 < (\\text{C}_2\\text{H}_5)_2\\text{NH}}$$</li>
      <li><strong>Set (ii):</strong>
        <br>For ethyl substituted amines in aqueous solution, order is $2^\\circ > 3^\\circ > 1^\\circ > \\text{arylamine}$:
        $$\\mathbf{\\text{C}_6\\text{H}_5\\text{NH}_2 < \\text{C}_2\\text{H}_5\\text{NH}_2 < (\\text{C}_2\\text{H}_5)_3\\text{N} < (\\text{C}_2\\text{H}_5)_2\\text{NH}}$$</li>
      <li><strong>Set (iii):</strong>
        <br>For methyl substituted amines in aqueous solution, order is $2^\\circ > 1^\\circ > 3^\\circ$:
        $$\\mathbf{\\text{C}_6\\text{H}_5\\text{NH}_2 < \\text{C}_6\\text{H}_5\\text{CH}_2\\text{NH}_2 < (\\text{CH}_3)_3\\text{N} < \\text{CH}_3\\text{NH}_2 < (\\text{CH}_3)_2\\text{NH}}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) Correct increasing basicity order', '1 Mark'],
    ['(ii) Ethyl amine order (2° > 3° > 1° > ArNH₂)', '1 Mark'],
    ['(iii) Methyl amine order (2° > 1° > 3° > ArCH₂NH₂ > ArNH₂)', '1 Mark']
  ]
));

// Question 9.5 (In-Text)
questions.push(createQCard(
  'c12c-ch9-q5', 'In-Text 9.5', 'NCERT In-Text',
  'Complete the following acid-base reactions and name the products:<br>(i) $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{NH}_2 + \\text{HCl} \\rightarrow$<br>(ii) $(\\text{C}_2\\text{H}_5)_3\\text{N} + \\text{HCl} \\rightarrow$',
  `<div class="step">
    <b>Reactions forming substituted ammonium chloride salts:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{NH}_2 + \\text{HCl}$:</strong>
        $$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{NH}_2 + \\text{HCl} \\rightarrow \\mathbf{[\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{N}^+\\text{H}_3]\\text{Cl}^-}$$
        <em>Name of product:</em> <b>Propylammonium chloride</b> (or propan-1-aminium chloride).</li>
      <li><strong>$(\\text{C}_2\\text{H}_5)_3\\text{N} + \\text{HCl}$:</strong>
        $$(\\text{C}_2\\text{H}_5)_3\\text{N} + \\text{HCl} \\rightarrow \\mathbf{[(\\text{C}_2\\text{H}_5)_3\\text{N}^+\\text{H}]\\text{Cl}^-}$$
        <em>Name of product:</em> <b>Triethylammonium chloride</b>.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['(i) Propylammonium chloride equation and name', '1 Mark'],
    ['(ii) Triethylammonium chloride equation and name', '1 Mark']
  ]
));

// Question 9.6 (In-Text)
questions.push(createQCard(
  'c12c-ch9-q6', 'In-Text 9.6', 'NCERT In-Text',
  'Write reactions of the final alkylation product of aniline with excess of methyl iodide in the presence of sodium carbonate solution.',
  `<div class="step">
    <b>Exhaustive Methylation of Aniline:</b><br>
    Aniline reacts with excess methyl iodide in successive nucleophilic substitution steps:<br><br>
    $$\\text{C}_6\\text{H}_5\\text{NH}_2 \\xrightarrow{\\text{CH}_3\\text{I}} \\text{C}_6\\text{H}_5\\text{NHCH}_3 \\xrightarrow{\\text{CH}_3\\text{I}} \\text{C}_6\\text{H}_5\\text{N(CH}_3)_2 \\xrightarrow{\\text{CH}_3\\text{I}} \\mathbf{[\\text{C}_6\\text{H}_5\\text{N}^+(\\text{CH}_3)_3]\\text{I}^-}$$
    $$\\text{C}_6\\text{H}_5\\text{NH}_2 + 3\\text{CH}_3\\text{I} + \\text{Na}_2\\text{CO}_3 \\rightarrow \\mathbf{[\\text{C}_6\\text{H}_5\\text{N}^+(\\text{CH}_3)_3]\\text{I}^-} + 2\\text{NaI} + \\text{CO}_2 + \\text{H}_2\\text{O}$$
    <b>Product:</b> <b>N,N,N-Trimethylanilinium iodide</b> (a quaternary ammonium salt). $\\text{Na}_2\\text{CO}_3$ acts as a base to neutralise the by-product $\\text{HI}$.
  </div>`,
  '2 Marks',
  [
    ['Successive methylation steps yielding quaternary salt', '1 Mark'],
    ['Final product N,N,N-trimethylanilinium iodide with role of Na₂CO₃', '1 Mark']
  ]
));

// Question 9.7 (In-Text)
questions.push(createQCard(
  'c12c-ch9-q7', 'In-Text 9.7', 'NCERT In-Text',
  'Write chemical reaction of aniline with benzoyl chloride and write the IUPAC name of the product obtained.',
  `<div class="step">
    <b>Schotten-Baumann Reaction (Benzoylation):</b><br>
    Aniline reacts with benzoyl chloride in the presence of an aqueous base (such as $\\text{NaOH}$ or pyridine) to remove $\\text{HCl}$:<br><br>
    $$\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{C}_6\\text{H}_5\\text{COCl} \\xrightarrow{\\text{aq. NaOH}} \\mathbf{\\text{C}_6\\text{H}_5-\\text{NH}-\\text{CO}-\\text{C}_6\\text{H}_5} + \\text{NaCl} + \\text{H}_2\\text{O}$$
    <br>
    <b>Product:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Common name: <b>Benzanilide</b></li>
      <li>IUPAC Name: <b>N-Phenylbenzamide</b></li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Balanced chemical equation with base', '1 Mark'],
    ['IUPAC name: N-Phenylbenzamide', '1 Mark']
  ]
));

// Question 9.8 (In-Text)
questions.push(createQCard(
  'c12c-ch9-q8', 'In-Text 9.8', 'NCERT In-Text',
  'Write structures of different isomers corresponding to the molecular formula, $\\text{C}_3\\text{H}_9\\text{N}$. Write IUPAC names of the isomers which will liberate nitrogen gas on treatment with nitrous acid.',
  `<div class="step">
    <b>All 4 Isomers of $\\text{C}_3\\text{H}_9\\text{N}$:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li>$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{NH}_2$: Propan-1-amine ($1^\\circ$)</li>
      <li>$\\text{CH}_3\\text{CH(NH}_2)\\text{CH}_3$: Propan-2-amine ($1^\\circ$)</li>
      <li>$\\text{CH}_3\\text{CH}_2\\text{NHCH}_3$: N-Methylethanamine ($2^\\circ$)</li>
      <li>$(\\text{CH}_3)_3\\text{N}$: N,N-Dimethylmethanamine ($3^\\circ$)</li>
    </ol>
    <br>
    <b>Isomers Liberating $\\text{N}_2$ Gas with Nitrous Acid ($\\text{HNO}_2$):</b><br>
    Only <b>primary ($1^\\circ$) aliphatic amines</b> react with cold nitrous acid ($\\text{NaNO}_2 + \\text{HCl}$) to form highly unstable aliphatic diazonium salts, which decompose quantitatively with brisk effervescence of <b>nitrogen gas ($\text{N}_2$)</b>:
    $$R-\\text{NH}_2 + \\text{HNO}_2 \\rightarrow [R-\\text{N}_2^+\\text{Cl}^-] \\xrightarrow{\\text{H}_2\\text{O}} R-\\text{OH} + \\mathbf{\\text{N}_2 \\uparrow} + \\text{HCl}$$
    Hence, the isomers liberating $\\text{N}_2$ gas are:
    <ul style="margin-left:20px; line-height:1.75;">
      <li><b>1. Propan-1-amine</b></li>
      <li><b>2. Propan-2-amine</b></li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['All 4 structural isomers drawn and named', '1½ Marks'],
    ['Identifying propan-1-amine and propan-2-amine with N₂ gas reaction', '1½ Marks']
  ]
));

// Question 9.9 (In-Text)
questions.push(createQCard(
  'c12c-ch9-q9', 'In-Text 9.9', 'NCERT In-Text',
  'Convert:<br>(i) 3-Methylaniline into 3-nitrotoluene<br>(ii) Aniline into 1,3,5-tribromobenzene',
  `<div class="step">
    <b>Synthetic Conversions via Diazonium Salts:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>3-Methylaniline to 3-Nitrotoluene:</strong>
        $$\\text{Step 1: } m\\text{-CH}_3-\\text{C}_6\\text{H}_4-\\text{NH}_2 \\xrightarrow{\\text{NaNO}_2 + \\text{HBF}_4, 273-278\\text{ K}} m\\text{-CH}_3-\\text{C}_6\\text{H}_4-\\text{N}_2^+\\text{BF}_4^-$$
        $$\\text{Step 2: } m\\text{-CH}_3-\\text{C}_6\\text{H}_4-\\text{N}_2^+\\text{BF}_4^- \\xrightarrow{\\text{NaNO}_2 / \\text{Cu, } \\Delta} \\mathbf{m\\text{-CH}_3-\\text{C}_6\\text{H}_4-\\text{NO}_2 (\\text{3-Nitrotoluene})} + \\text{N}_2 + \\text{NaBF}_4$$</li>
      <li><strong>Aniline to 1,3,5-Tribromobenzene:</strong>
        $$\\text{Step 1 (Bromination): } \\text{C}_6\\text{H}_5\\text{NH}_2 + 3\\text{Br}_2(aq) \\rightarrow 2,4,6\\text{-tribromoaniline} + 3\\text{HBr}$$
        $$\\text{Step 2 (Diazotisation): } 2,4,6\\text{-tribromoaniline} \\xrightarrow{\\text{NaNO}_2 + \\text{HCl}, 273\\text{ K}} 2,4,6\\text{-tribromobenzenediazonium chloride}$$
        $$\\text{Step 3 (Deamination with } \\text{H}_3\\text{PO}_2): \\xrightarrow{\\text{H}_3\\text{PO}_2 + \\text{H}_2\\text{O}} \\mathbf{1,3,5\\text{-Tribromobenzene}} + \\text{N}_2 + \\text{H}_3\\text{PO}_3 + \\text{HCl}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) Diazotisation with HBF₄ followed by NaNO₂/Cu', '1½ Marks'],
    ['(ii) Tribromination, diazotisation, and deamination with H₃PO₂', '1½ Marks']
  ]
));

// ============================================================================
// PART 2: NCERT END-OF-CHAPTER EXERCISES (9.1 to 9.28)
// ============================================================================

// Exercise 9.1
questions.push(createQCard(
  'c12c-ch9-q10', 'Exercise 9.1', 'NCERT Exercise',
  'Write IUPAC names of the following compounds and classify them into primary, secondary and tertiary amines:<br>(i) $(\\text{CH}_3)_2\\text{CHNH}_2$<br>(ii) $\\text{CH}_3(\\text{CH}_2)_2\\text{NH}_2$<br>(iii) $\\text{CH}_3\\text{NHCH(CH}_3)_2$<br>(iv) $(\\text{CH}_3)_3\\text{CNH}_2$<br>(v) $\\text{C}_6\\text{H}_5\\text{NHCH}_3$<br>(vi) $(\\text{CH}_3\\text{CH}_2)_2\\text{NCH}_3$<br>(vii) $m\\text{-BrC}_6\\text{H}_4\\text{NH}_2$',
  `<div class="step">
    <b>IUPAC Names and Classification:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$(\\text{CH}_3)_2\\text{CHNH}_2$:</strong> Propan-2-amine [<b>Primary ($1^\\circ$)</b>]</li>
      <li><strong>$\\text{CH}_3(\\text{CH}_2)_2\\text{NH}_2$:</strong> Propan-1-amine [<b>Primary ($1^\\circ$)</b>]</li>
      <li><strong>$\\text{CH}_3\\text{NHCH(CH}_3)_2$:</strong> N-Methylpropan-2-amine [<b>Secondary ($2^\\circ$)</b>]</li>
      <li><strong>$(\\text{CH}_3)_3\\text{CNH}_2$:</strong> 2-Methylpropan-2-amine [<b>Primary ($1^\\circ$)</b>]</li>
      <li><strong>$\\text{C}_6\\text{H}_5\\text{NHCH}_3$:</strong> N-Methylaniline (or N-Methylbenzenamine) [<b>Secondary ($2^\\circ$)</b>]</li>
      <li><strong>$(\\text{CH}_3\\text{CH}_2)_2\\text{NCH}_3$:</strong> N-Ethyl-N-methylethanamine [<b>Tertiary ($3^\\circ$)</b>]</li>
      <li><strong>$m\\text{-BrC}_6\\text{H}_4\\text{NH}_2$:</strong> 3-Bromobenzenamine (3-Bromoaniline) [<b>Primary ($1^\\circ$)</b>]</li>
    </ol>
  </div>`,
  '3½ Marks',
  [
    ['All 7 IUPAC names and classifications correct', '½ Mark × 7 = 3½ Marks']
  ]
));

// Exercise 9.2
questions.push(createQCard(
  'c12c-ch9-q11', 'Exercise 9.2', 'NCERT Exercise',
  'Give one chemical test to distinguish between the following pairs of compounds:<br>(i) Methylamine and dimethylamine<br>(ii) Secondary and tertiary amines<br>(iii) Ethylamine and aniline<br>(iv) Aniline and benzylamine<br>(v) Aniline and N-methylaniline',
  `<div class="step">
    <b>Chemical Tests with Observations:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Methylamine ($1^\\circ$) and Dimethylamine ($2^\\circ$):</strong>
        <br>• <em>Carbylamine Test:</em> Methylamine on heating with alcoholic $\\text{KOH}$ and chloroform gives an <b>extremely foul-smelling methyl isocyanide ($\text{CH}_3\text{NC}$)</b>. Dimethylamine ($2^\\circ$) does not give this test.</li>
      <li><strong>Secondary and Tertiary Amines:</strong>
        <br>• <em>Hinsberg Test:</em> Secondary amines react with benzenesulphonyl chloride to form an N,N-dialkylbenzenesulphonamide which is <b>insoluble in aqueous $\\text{KOH}$</b> (no acidic proton). Tertiary amines do not react at all.</li>
      <li><strong>Ethylamine and Aniline:</strong>
        <br>• <em>Azo Dye Test:</em> Aniline on diazotisation ($273-278\\text{ K}$) followed by coupling with 2-naphthol in alkaline medium gives a <b>brilliant orange-red azo dye</b>. Aliphatic ethylamine liberates $\\text{N}_2$ gas and gives no dye.</li>
      <li><strong>Aniline and Benzylamine:</strong>
        <br>• <em>Azo Dye Test:</em> Aniline forms an orange azo dye with alkaline $\\beta$-naphthol. Benzylamine (aliphatic) forms an unstable diazonium salt that decomposes with vigorous effervescence of $\\text{N}_2$ gas without forming an azo dye.</li>
      <li><strong>Aniline and N-Methylaniline:</strong>
        <br>• <em>Carbylamine Test:</em> Aniline ($1^\\circ$) gives a foul-smelling carbylamine (phenyl isocyanide). N-Methylaniline ($2^\\circ$) does not respond.</li>
    </ol>
  </div>`,
  '5 Marks',
  [
    ['Each distinguishing test correctly stated with distinct observations', '1 Mark × 5 = 5 Marks']
  ]
));

// Exercise 9.3
questions.push(createQCard(
  'c12c-ch9-q12', 'Exercise 9.3', 'NCERT Exercise',
  'Account for the following:<br>(i) $pK_b$ of aniline is more than that of methylamine.<br>(ii) Ethylamine is soluble in water whereas aniline is not.<br>(iii) Methylamine in water reacts with $\\text{FeCl}_3$ to precipitate hydrated ferric oxide.<br>(iv) Although amino group is $o,p$-directing in aromatic electrophilic substitution reactions, aniline on nitration gives a substantial amount of $m$-nitroaniline.<br>(v) Aniline does not undergo Friedel-Crafts reaction.<br>(vi) Diazonium salts of aromatic amines are more stable than those of aliphatic amines.<br>(vii) Gabriel phthalimide synthesis is preferred for synthesising primary aliphatic amines.',
  `<div class="step">
    <b>Explanations:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$pK_b$ of Aniline > Methylamine:</strong> Higher $pK_b$ means weaker base. In aniline, the lone pair on nitrogen is delocalized over the benzene ring via resonance (+R effect), reducing its availability for protonation. In methylamine, the $+I$ effect of $-\\text{CH}_3$ increases electron density on nitrogen. Hence, aniline is a weaker base.</li>
      <li><strong>Solubility:</strong> Ethylamine forms extensive intermolecular hydrogen bonds with water molecules due to its small alkyl group. In aniline, the large bulky hydrophobic phenyl ring ($\\text{C}_6\\text{H}_5-$) strongly opposes hydration, making it insoluble.</li>
      <li><strong>Reaction with $\\text{FeCl}_3$:</strong> Methylamine is a base; it abstracts a proton from water to produce hydroxide ions:
        $$\\text{CH}_3\\text{NH}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{CH}_3\\text{N}^+\\text{H}_3 + \\text{OH}^-$$
        Hydroxide ions react with $\\text{Fe}^{3+}$ to precipitate brown hydrated ferric oxide [$\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}$ or $\\text{Fe(OH)}_3$].</li>
      <li><strong>Formation of $m$-Nitroaniline (47%):</strong> Nitration is carried out in strongly acidic medium ($\text{HNO}_3 + \text{H}_2\text{SO}_4$). Aniline undergoes protonation to form the <b>anilinium ion ($\\text{C}_6\\text{H}_5\\text{N}^+\\text{H}_3$)</b>. The $-\\text{N}^+\\text{H}_3$ group has a powerful $-I$ effect and is strongly <b>meta-directing</b>.</li>
      <li><strong>Aniline Resists Friedel-Crafts:</strong> Aniline is a Lewis base and reacts with the Lewis acid catalyst (anhydrous $\\text{AlCl}_3$) to form an adduct [$\\text{C}_6\\text{H}_5\\text{NH}_2 \\rightarrow \\text{AlCl}_3$]. This places a positive charge on nitrogen, deactivating the benzene ring completely towards electrophiles.</li>
      <li><strong>Stability of Arenediazonium Salts:</strong> Stabilized by resonance delocalization of positive charge into the benzene ring. Alkanediazonium salts lack resonance and immediately eliminate $\\text{N}_2$.</li>
      <li><strong>Gabriel Phthalimide Preference:</strong> Produces exclusively pure primary aliphatic amines without any contamination by secondary, tertiary amines or quaternary salts.</li>
    </ol>
  </div>`,
  '7 Marks',
  [
    ['(i) to (iv) rigorous chemical rationales provided', '4 Marks'],
    ['(v) to (vii) rigorous chemical rationales provided', '3 Marks']
  ]
));

// Exercise 9.4
questions.push(createQCard(
  'c12c-ch9-q13', 'Exercise 9.4', 'NCERT Exercise',
  'Arrange the following:<br>(i) In decreasing order of $pK_b$ values: $\\text{C}_2\\text{H}_5\\text{NH}_2, \\text{C}_6\\text{H}_5\\text{NHCH}_3, (\\text{C}_2\\text{H}_5)_2\\text{NH}$ and $\\text{C}_6\\text{H}_5\\text{NH}_2$<br>(ii) In increasing order of basic strength: $\\text{C}_6\\text{H}_5\\text{NH}_2, \\text{C}_6\\text{H}_5\\text{N(CH}_3)_2, (\\text{C}_2\\text{H}_5)_2\\text{NH}$ and $\\text{CH}_3\\text{NH}_2$<br>(iii) In increasing order of basic strength: (a) Aniline, p-nitroaniline and p-toluidine; (b) $\\text{C}_6\\text{H}_5\\text{NH}_2, \\text{C}_6\\text{H}_5\\text{NHCH}_3, \\text{C}_6\\text{H}_5\\text{CH}_2\\text{NH}_2$<br>(iv) In decreasing order of basic strength in gas phase: $\\text{C}_2\\text{H}_5\\text{NH}_2, (\\text{C}_2\\text{H}_5)_2\\text{NH}, (\\text{C}_2\\text{H}_5)_3\\text{N}$ and $\\text{NH}_3$<br>(v) In increasing order of boiling point: $\\text{C}_2\\text{H}_5\\text{OH}, (\\text{CH}_3)_2\\text{NH}, \\text{C}_2\\text{H}_5\\text{NH}_2$<br>(vi) In increasing order of solubility in water: $\\text{C}_6\\text{H}_5\\text{NH}_2, (\\text{C}_2\\text{H}_5)_2\\text{NH}, \\text{C}_2\\text{H}_5\\text{NH}_2$',
  `<div class="step">
    <b>Arrangements with Scientific Rationale:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Decreasing order of $pK_b$ (Reverse of basicity: weakest base has highest $pK_b$):</strong>
        $$\\mathbf{\\text{C}_6\\text{H}_5\\text{NH}_2 > \\text{C}_6\\text{H}_5\\text{NHCH}_3 > \\text{C}_2\\text{H}_5\\text{NH}_2 > (\\text{C}_2\\text{H}_5)_2\\text{NH}}$$</li>
      <li><strong>Increasing order of basic strength:</strong>
        $$\\mathbf{\\text{C}_6\\text{H}_5\\text{NH}_2 < \\text{C}_6\\text{H}_5\\text{N(CH}_3)_2 < \\text{CH}_3\\text{NH}_2 < (\\text{C}_2\\text{H}_5)_2\\text{NH}}$$</li>
      <li><strong>Increasing order of basic strength:</strong>
        <br>(a) $p$-Nitroaniline ($-I, -R$ weakens base) < Aniline < $p$-Toluidine ($+I, +H$ strengthens base):
        $$\\mathbf{p\\text{-Nitroaniline} < \\text{Aniline} < p\\text{-Toluidine}}$$
        <br>(b) $\\mathbf{\\text{C}_6\\text{H}_5\\text{NH}_2 < \\text{C}_6\\text{H}_5\\text{NHCH}_3 < \\text{C}_6\\text{H}_5\\text{CH}_2\\text{NH}_2}$</li>
      <li><strong>Decreasing order of basic strength in gas phase (Only $+I$ inductive effect operates):</strong>
        $$\\mathbf{(\\text{C}_2\\text{H}_5)_3\\text{N} > (\\text{C}_2\\text{H}_5)_2\\text{NH} > \\text{C}_2\\text{H}_5\\text{NH}_2 > \\text{NH}_3}$$</li>
      <li><strong>Increasing order of boiling point:</strong>
        $$\\mathbf{(\\text{CH}_3)_2\\text{NH} < \\text{C}_2\\text{H}_5\\text{NH}_2 < \\text{C}_2\\text{H}_5\\text{OH}}$$
        ($\text{O}-\text{H}$ hydrogen bonds are stronger than $\text{N}-\text{H}$; $1^\\circ$ amine has two hydrogens for H-bonding whereas $2^\\circ$ has only one).</li>
      <li><strong>Increasing order of solubility in water:</strong>
        $$\\mathbf{\\text{C}_6\\text{H}_5\\text{NH}_2 < (\\text{C}_2\\text{H}_5)_2\\text{NH} < \\text{C}_2\\text{H}_5\\text{NH}_2}$$</li>
    </ol>
  </div>`,
  '6 Marks',
  [
    ['All 6 sequences correctly ordered with clear physical chemical basis', '1 Mark × 6 = 6 Marks']
  ]
));

// Exercise 9.5
questions.push(createQCard(
  'c12c-ch9-q14', 'Exercise 9.5', 'NCERT Exercise',
  'How will you convert:<br>(i) Ethanoic acid into methanamine<br>(ii) Hexanenitrile into 1-aminopentane<br>(iii) Methanol to ethanoic acid<br>(iv) Ethanamine into methanamine',
  `<div class="step">
    <b>Reaction Sequences:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Ethanoic acid into Methanamine (Degradation by 1 carbon):</strong>
        $$\\text{CH}_3\\text{COOH} \\xrightarrow{\\text{SOCl}_2} \\text{CH}_3\\text{COCl} \\xrightarrow{\\text{NH}_3} \\text{CH}_3\\text{CONH}_2 \\xrightarrow{\\text{Br}_2 / \\text{KOH (Hofmann)}} \\mathbf{\\text{CH}_3\\text{NH}_2}$$</li>
      <li><strong>Hexanenitrile into 1-Aminopentane (Stepping down by 1 carbon):</strong>
        $$\\text{CH}_3(\\text{CH}_2)_4\\text{CN} \\xrightarrow{\\text{H}_3\\text{O}^+} \\text{CH}_3(\\text{CH}_2)_4\\text{COOH} \\xrightarrow{\\text{SOCl}_2, \\text{NH}_3} \\text{CH}_3(\\text{CH}_2)_4\\text{CONH}_2 \\xrightarrow{\\text{Br}_2 / \\text{KOH}} \\mathbf{\\text{CH}_3(\\text{CH}_2)_4\\text{NH}_2}$$</li>
      <li><strong>Methanol to Ethanoic acid (Stepping up by 1 carbon):</strong>
        $$\\text{CH}_3\\text{OH} \\xrightarrow{\\text{PCl}_5} \\text{CH}_3\\text{Cl} \\xrightarrow{\\text{KCN}} \\text{CH}_3\\text{CN} \\xrightarrow{\\text{H}_3\\text{O}^+} \\mathbf{\\text{CH}_3\\text{COOH}}$$</li>
      <li><strong>Ethanamine into Methanamine:</strong>
        $$\\text{CH}_3\\text{CH}_2\\text{NH}_2 \\xrightarrow{\\text{HNO}_2} \\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{\\text{KMnO}_4 / \\text{H}^+} \\text{CH}_3\\text{COOH} \\xrightarrow{\\text{NH}_3, \\Delta} \\text{CH}_3\\text{CONH}_2 \\xrightarrow{\\text{Br}_2 / \\text{KOH}} \\mathbf{\\text{CH}_3\\text{NH}_2}$$</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['(i) Hofmann degradation of ethanamide', '1 Mark'],
    ['(ii) Hydrolysis to hexanoic acid followed by Hofmann', '1 Mark'],
    ['(iii) Cyanide extension followed by hydrolysis', '1 Mark'],
    ['(iv) Deamination, oxidation, and Hofmann degradation', '1 Mark']
  ]
));

// Exercise 9.6
questions.push(createQCard(
  'c12c-ch9-q15', 'Exercise 9.6', 'NCERT Exercise',
  'Describe a method for the identification of primary, secondary and tertiary amines. Also write chemical equations of the reactions involved (Hinsberg Test).',
  `<div class="step">
    <b>Hinsberg Test (using Benzenesulphonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$):</b><br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Primary ($1^\\circ$) Amines:</strong>
        React with benzenesulphonyl chloride to form an N-alkylbenzenesulphonamide:
        $$\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl} + R-\\text{NH}_2 \\rightarrow \\mathbf{\\text{C}_6\\text{H}_5\\text{SO}_2\\text{NHR}} + \\text{HCl}$$
        Because the hydrogen attached to nitrogen is strongly acidic (due to the presence of the strong electron-withdrawing sulphonyl group), this sulphonamide dissolves in aqueous $\\text{KOH}$ to form a clear soluble salt:
        $$\\text{C}_6\\text{H}_5\\text{SO}_2\\text{NHR} + \\text{KOH} \\rightarrow \\mathbf{[\\text{C}_6\\text{H}_5\\text{SO}_2\\text{N}^-R]\\text{K}^+ (\\text{Soluble})} + \\text{H}_2\\text{O}$$
        <em>Acidification reprecipitates the sulphonamide.</em></li>
      <li><strong>Secondary ($2^\\circ$) Amines:</strong>
        React with benzenesulphonyl chloride to form an N,N-dialkylbenzenesulphonamide:
        $$\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl} + R_2\\text{NH} \\rightarrow \\mathbf{\\text{C}_6\\text{H}_5\\text{SO}_2\\text{N}R_2} + \\text{HCl}$$
        Since there is <b>no acidic hydrogen</b> attached to the nitrogen atom, it is <b>insoluble in aqueous $\\text{KOH}$</b>.</li>
      <li><strong>Tertiary ($3^\\circ$) Amines:</strong>
        Do not possess any hydrogen atom on nitrogen and therefore <b>do not react</b> with benzenesulphonyl chloride under these conditions.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['1° amine reaction with Hinsberg reagent and solubility in alkali', '1 Mark'],
    ['2° amine reaction with insolubility in alkali due to lack of acidic H', '1 Mark'],
    ['3° amine showing no reaction', '1 Mark']
  ]
));

// Exercise 9.7
questions.push(createQCard(
  'c12c-ch9-q16', 'Exercise 9.7', 'NCERT Exercise',
  'Write short notes on the following:<br>(i) Carbylamine reaction<br>(ii) Diazotisation<br>(iii) Hofmann\'s bromamide reaction<br>(iv) Coupling reaction<br>(v) Gabriel phthalimide synthesis',
  `<div class="step">
    <b>Named Transformations:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Carbylamine Reaction:</strong>
        Primary aliphatic and aromatic amines on warming with chloroform and alcoholic $\\text{KOH}$ form foul-smelling isocyanides (carbylamines):
        $$R-\\text{NH}_2 + \\text{CHCl}_3 + 3\\text{KOH} \\xrightarrow{\\Delta} \\mathbf{R-\\text{NC} (\\text{Isocyanide})} + 3\\text{KCl} + 3\\text{H}_2\\text{O}$$</li>
      <li><strong>Diazotisation:</strong>
        Conversion of primary aromatic amines into arenediazonium salts by treatment with cold nitrous acid ($\\text{NaNO}_2 + \\text{HCl}$) at $273-278\\text{ K}$ ($0-5^\\circ\\text{C}$):
        $$\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{NaNO}_2 + 2\\text{HCl} \\xrightarrow{273-278\\text{ K}} \\mathbf{\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^-} + \\text{NaCl} + 2\\text{H}_2\\text{O}$$</li>
      <li><strong>Hofmann\'s Bromamide Reaction:</strong>
        Degradation of an amide to a primary amine containing one carbon less by treatment with bromine in aqueous or ethanolic $\\text{NaOH}$:
        $$R-\\text{CONH}_2 + \\text{Br}_2 + 4\\text{NaOH} \\rightarrow \\mathbf{R-\\text{NH}_2} + \\text{Na}_2\\text{CO}_3 + 2\\text{NaBr} + 2\\text{H}_2\\text{O}$$</li>
      <li><strong>Coupling Reaction:</strong>
        Arenediazonium salts react with electron-rich aromatic compounds (phenol in basic medium or aniline in mildly acidic medium) to form brightly coloured azo dyes:
        $$\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{C}_6\\text{H}_5\\text{OH} \\xrightarrow{\\text{OH}^-, 273-278\\text{ K}} \\mathbf{p\\text{-HO}-\\text{C}_6\\text{H}_4-\\text{N}=\\text{N}-\\text{C}_6\\text{H}_5 (\\text{Orange dye})} + \\text{Cl}^- + \\text{H}_2\\text{O}$$</li>
      <li><strong>Gabriel Phthalimide Synthesis:</strong>
        Phthalimide on reaction with ethanolic $\\text{KOH}$ gives potassium phthalimide, which on heating with alkyl halide followed by alkaline hydrolysis yields pure primary aliphatic amine:
        $$\\text{Phthalimide} \\xrightarrow{\\text{KOH}} \\text{K-salt} \\xrightarrow{R-\\text{X}} N\\text{-alkylphthalimide} \\xrightarrow{\\text{NaOH}(aq)} \\mathbf{R-\\text{NH}_2} + \\text{Sodium phthalate}$$</li>
    </ol>
  </div>`,
  '5 Marks',
  [
    ['All 5 reactions defined with balanced equations and conditions', '1 Mark × 5 = 5 Marks']
  ]
));

// Exercise 9.8
questions.push(createQCard(
  'c12c-ch9-q17', 'Exercise 9.8', 'NCERT Exercise',
  'Accomplish the following conversions:<br>(i) Nitrobenzene to benzoic acid<br>(ii) Benzene to m-bromophenol<br>(iii) Benzoic acid to aniline<br>(iv) Aniline to 2,4,6-tribromofluorobenzene',
  `<div class="step">
    <b>Reaction Sequences:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Nitrobenzene to Benzoic acid:</strong>
        $$\\text{C}_6\\text{H}_5\\text{NO}_2 \\xrightarrow{\\text{Fe/HCl}} \\text{C}_6\\text{H}_5\\text{NH}_2 \\xrightarrow{\\text{NaNO}_2 / \\text{HCl}, 273\\text{ K}} \\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- \\xrightarrow{\\text{CuCN/KCN}} \\text{C}_6\\text{H}_5\\text{CN} \\xrightarrow{\\text{H}_3\\text{O}^+} \\mathbf{\\text{C}_6\\text{H}_5\\text{COOH}}$$</li>
      <li><strong>Benzene to $m$-Bromophenol:</strong>
        $$\\text{C}_6\\text{H}_6 \\xrightarrow{\\text{HNO}_3 / \\text{H}_2\\text{SO}_4} \\text{C}_6\\text{H}_5\\text{NO}_2 \\xrightarrow{\\text{Br}_2 / \\text{FeBr}_3} m\\text{-Br-C}_6\\text{H}_4-\\text{NO}_2 \\xrightarrow{\\text{Fe/HCl}} m\\text{-Br-C}_6\\text{H}_4-\\text{NH}_2 \\xrightarrow{\\text{NaNO}_2/\\text{HCl}} m\\text{-Br-C}_6\\text{H}_4-\\text{N}_2^+\\text{Cl}^- \\xrightarrow{\\text{H}_2\\text{O}, \\Delta} \\mathbf{m\\text{-Br-C}_6\\text{H}_4-\\text{OH}}$$</li>
      <li><strong>Benzoic acid to Aniline:</strong>
        $$\\text{C}_6\\text{H}_5\\text{COOH} \\xrightarrow{\\text{SOCl}_2} \\text{C}_6\\text{H}_5\\text{COCl} \\xrightarrow{\\text{NH}_3} \\text{C}_6\\text{H}_5\\text{CONH}_2 \\xrightarrow{\\text{Br}_2 / \\text{KOH (Hofmann)}} \\mathbf{\\text{C}_6\\text{H}_5\\text{NH}_2}$$</li>
      <li><strong>Aniline to 2,4,6-Tribromofluorobenzene:</strong>
        $$\\text{C}_6\\text{H}_5\\text{NH}_2 \\xrightarrow{3\\text{Br}_2(aq)} 2,4,6\\text{-tribromoaniline} \\xrightarrow{\\text{NaNO}_2 + \\text{HBF}_4, 273\\text{ K}} 2,4,6\\text{-tribromobenzenediazonium fluoroborate} \\xrightarrow{\\Delta (\\text{Schiemann})} \\mathbf{2,4,6\\text{-Tribromofluorobenzene}}$$</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['(i) Sandmeyer with CuCN and hydrolysis', '1 Mark'],
    ['(ii) Meta-bromination of nitrobenzene and diazonium hydrolysis', '1 Mark'],
    ['(iii) Hofmann degradation of benzamide', '1 Mark'],
    ['(iv) Tribromination and Balz-Schiemann fluorination', '1 Mark']
  ]
));

// Exercise 9.9
questions.push(createQCard(
  'c12c-ch9-q18', 'Exercise 9.9', 'NCERT Exercise',
  'Give the structures of A, B and C in the following reactions:<br>(i) $\\text{CH}_3\\text{CH}_2\\text{I} \\xrightarrow{\\text{NaCN}} A \\xrightarrow{\\text{OH}^- \\text{ (partial hydrolysis)}} B \\xrightarrow{\\text{NaOH} + \\text{Br}_2} C$<br>(ii) $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- \\xrightarrow{\\text{CuCN}} A \\xrightarrow{\\text{H}_2\\text{O} / \\text{H}^+} B \\xrightarrow{\\text{NH}_3, \\Delta} C$',
  `<div class="step">
    <b>Identification of Intermediates and Products:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Reaction (i):</strong>
        <br>• $\\mathbf{A = \\text{CH}_3\\text{CH}_2\\text{CN}}$ (Propanenitrile)
        <br>• Partial hydrolysis of nitrile produces an amide: $\\mathbf{B = \\text{CH}_3\\text{CH}_2\\text{CONH}_2}$ (Propanamide)
        <br>• Hofmann bromamide degradation: $\\mathbf{C = \\text{CH}_3\\text{CH}_2\\text{NH}_2}$ (Ethanamine)</li>
      <li><strong>Reaction (ii):</strong>
        <br>• Sandmeyer cyanation: $\\mathbf{A = \\text{C}_6\\text{H}_5\\text{CN}}$ (Benzonitrile)
        <br>• Complete acid hydrolysis: $\\mathbf{B = \\text{C}_6\\text{H}_5\\text{COOH}}$ (Benzoic acid)
        <br>• Heating with ammonia: $\\mathbf{C = \\text{C}_6\\text{H}_5\\text{CONH}_2}$ (Benzamide)</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Reaction (i): A = CH₃CH₂CN, B = CH₃CH₂CONH₂, C = CH₃CH₂NH₂', '1½ Marks'],
    ['Reaction (ii): A = C₆H₅CN, B = C₆H₅COOH, C = C₆H₅CONH₂', '1½ Marks']
  ]
));

// Exercise 9.10
questions.push(createQCard(
  'c12c-ch9-q19', 'Exercise 9.10', 'NCERT Exercise',
  'An aromatic compound \'A\' on treatment with aqueous ammonia and heating forms compound \'B\' which on heating with $\\text{Br}_2$ and $\\text{KOH}$ forms a compound \'C\' of molecular formula $\\text{C}_6\\text{H}_7\\text{N}$. Write the structures and IUPAC names of compounds A, B and C.',
  `<div class="step">
    <b>Deductions:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li>Compound \'C\' ($\text{C}_6\text{H}_7\text{N}$) is obtained from \'B\' by reaction with $\\text{Br}_2$ and $\\text{KOH}$ (Hofmann bromamide degradation).
        <br>Therefore, \'C\' must be a primary amine: <b>Aniline ($\\text{C}_6\\text{H}_5\\text{NH}_2$)</b>.</li>
      <li>Since \'B\' gives aniline on Hofmann degradation, \'B\' must be an amide with one more carbon than aniline:
        <br><b>\'B\' is Benzamide ($\\text{C}_6\\text{H}_5\\text{CONH}_2$)</b>.</li>
      <li>Compound \'B\' is prepared by heating aromatic compound \'A\' with aqueous ammonia.
        <br>Therefore, \'A\' must be <b>Benzoic acid ($\\text{C}_6\\text{H}_5\\text{COOH}$)</b>.</li>
    </ol>
    <br>
    <b>Summary:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Compound A:</strong> $\\text{C}_6\\text{H}_5\\text{COOH}$ (Benzoic acid)</li>
      <li><strong>Compound B:</strong> $\\text{C}_6\\text{H}_5\\text{CONH}_2$ (Benzamide)</li>
      <li><strong>Compound C:</strong> $\\text{C}_6\\text{H}_5\\text{NH}_2$ (Aniline / Benzenamine)</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Identification of C as aniline from molecular formula', '1 Mark'],
    ['Identification of B as benzamide from Hofmann degradation', '1 Mark'],
    ['Identification of A as benzoic acid from ammonolysis', '1 Mark']
  ]
));

// Exercise 9.11
questions.push(createQCard(
  'c12c-ch9-q20', 'Exercise 9.11', 'NCERT Exercise',
  'Complete the following reactions:<br>(i) $\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{CHCl}_3 + \\text{alc. KOH} \\xrightarrow{\\Delta}$<br>(ii) $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{H}_3\\text{PO}_2 + \\text{H}_2\\text{O} \\rightarrow$<br>(iii) $\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{H}_2\\text{SO}_4 \\text{ (conc.)} \\xrightarrow{453-473\\text{ K}}$<br>(iv) $\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{C}_2\\text{H}_5\\text{OH} \\rightarrow$<br>(v) $\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{Br}_2(aq) \\rightarrow$<br>(vi) $\\text{C}_6\\text{H}_5\\text{NH}_2 + (\\text{CH}_3\\text{CO})_2\\text{O} \\xrightarrow{\\text{pyridine}}$',
  `<div class="step">
    <b>Completed Equations:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Carbylamine Reaction:</strong>
        $$\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{CHCl}_3 + 3\\text{KOH} \\xrightarrow{\\Delta} \\mathbf{\\text{C}_6\\text{H}_5\\text{NC} (\\text{Phenyl isocyanide})} + 3\\text{KCl} + 3\\text{H}_2\\text{O}$$</li>
      <li><strong>Reduction of Diazonium with Hypophosphorous Acid:</strong>
        $$\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{H}_3\\text{PO}_2 + \\text{H}_2\\text{O} \\rightarrow \\mathbf{\\text{C}_6\\text{H}_6 (\\text{Benzene})} + \\text{N}_2 + \\text{H}_3\\text{PO}_3 + \\text{HCl}$$</li>
      <li><strong>Sulphonation of Aniline:</strong>
        $$\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{H}_2\\text{SO}_4 \\xrightarrow{453-473\\text{ K}} \\mathbf{p\\text{-H}_2\\text{N}-\\text{C}_6\\text{H}_4-\\text{SO}_3\\text{H} (\\text{Sulphanilic acid})} \\rightleftharpoons \\mathbf{p\\text{-H}_3\\text{N}^+-\\text{C}_6\\text{H}_4-\\text{SO}_3^- (\\text{Zwitterion})}$$</li>
      <li><strong>Reduction of Diazonium with Ethanol:</strong>
        $$\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{CH}_3\\text{CH}_2\\text{OH} \\rightarrow \\mathbf{\\text{C}_6\\text{H}_6} + \\text{N}_2 + \\text{CH}_3\\text{CHO} + \\text{HCl}$$</li>
      <li><strong>Aqueous Bromination of Aniline:</strong>
        $$\\text{C}_6\\text{H}_5\\text{NH}_2 + 3\\text{Br}_2(aq) \\rightarrow \\mathbf{2,4,6\\text{-Tribromoaniline} (\\text{white ppt})} + 3\\text{HBr}$$</li>
      <li><strong>Acetylation of Aniline:</strong>
        $$\\text{C}_6\\text{H}_5\\text{NH}_2 + (\\text{CH}_3\\text{CO})_2\\text{O} \\xrightarrow{\\text{pyridine}} \\mathbf{\\text{C}_6\\text{H}_5\\text{NHCOCH}_3 (\\text{Acetanilide})} + \\text{CH}_3\\text{COOH}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['All 6 chemical equations completed accurately', '½ Mark × 6 = 3 Marks']
  ]
));

// Exercise 9.12 to 9.28: Remaining Essential Questions to Reach 37 Qs Total
questions.push(createQCard(
  'c12c-ch9-q21', 'Exercise 9.12', 'NCERT Exercise',
  'Why cannot aromatic primary amines be prepared by Gabriel phthalimide synthesis?',
  `<div class="step">
    <b>Reason:</b><br>
    Gabriel phthalimide synthesis involves the nucleophilic attack of potassium phthalimide anion on an organic halide via an <b>$S_N2$ mechanism</b>:<br>
    $$\\text{Phthalimide anion} + R-\\text{X} \\rightarrow N\\text{-alkylphthalimide} + \\text{X}^-$$
    Aromatic primary amines would require an <b>aryl halide</b> (such as chlorobenzene, $\\text{C}_6\\text{H}_5\\text{Cl}$) as the substrate.<br>
    However, aryl halides do not undergo nucleophilic substitution ($S_N2$) because the $\\text{C}-\\text{Cl}$ bond possesses partial double bond character due to resonance (+R effect) and the benzene ring repels approaching nucleophiles.<br>
    Consequently, aryl halides cannot react with potassium phthalimide, and aromatic primary amines cannot be prepared by this method.
  </div>`,
  '2 Marks',
  [
    ['Requirement of SN2 nucleophilic attack by phthalimide anion', '1 Mark'],
    ['Aryl halides do not undergo SN2 due to resonance partial double bond character', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch9-q22', 'Exercise 9.13', 'NCERT Exercise',
  'Write the resonance structures of aniline. Why is aniline less basic than aliphatic amines?',
  `<div class="step">
    <b>Resonance in Aniline:</b><br>
    The lone pair of electrons on the nitrogen atom in aniline is in conjugation with the aromatic $\\pi$-cloud. It delocalizes into the ring across five resonating structures, developing partial double bond character ($\text{C}=\text{N}^+\text{H}_2$) and negative charge at the ortho and para positions.<br><br>
    <b>Why Less Basic than Aliphatic Amines:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Decreased Electron Density on Nitrogen:</strong> Due to $+R$ resonance delocalization, the lone pair on nitrogen is much less available for donation to a proton ($\text{H}^+$).</li>
      <li><strong>Greater Resonance Stabilization of Aniline vs Anilinium Ion:</strong> Aniline is stabilized by 5 resonance structures. Upon protonation, the resulting anilinium ion ($\\text{C}_6\\text{H}_5\\text{N}^+\\text{H}_3$) has only 2 Kekulé structures (the lone pair is no longer available for delocalization). Losing resonance stabilization upon protonation makes aniline reluctant to accept protons.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Drawing 5 resonance structures of aniline', '1½ Marks'],
    ['Comparison of lone pair availability and loss of resonance in anilinium ion', '1½ Marks']
  ]
));

questions.push(createQCard(
  'c12c-ch9-q23', 'Exercise 9.14', 'NCERT Exercise',
  'What is the role of pyridine in the acylation reaction of amines?',
  `<div class="step">
    <b>Role of Pyridine:</b><br>
    When aliphatic or aromatic primary and secondary amines react with acid chlorides or acid anhydrides, hydrochloric acid ($\text{HCl}$) or carboxylic acid is produced as a by-product:
    $$R-\\text{NH}_2 + \\text{CH}_3\\text{COCl} \\rightleftharpoons R-\\text{NHCOCH}_3 + \\text{HCl}$$
    <ol style="margin-left:20px; line-height:1.75;">
      <li>Pyridine is a tertiary heterocyclic organic base that is stronger than the amine reactant. It acts as an <b>acid scavenger</b>, rapidly reacting with the $\\text{HCl}$ formed to produce pyridinium chloride salt.</li>
      <li>By removing the by-product $\\text{HCl}$ as soon as it is formed, pyridine shifts the chemical equilibrium to the right in accordance with Le Chatelier\'s principle, ensuring completion of the acylation.</li>
      <li>It also prevents the basic amine reactant from reacting with $\\text{HCl}$ to form unreactive ammonium salts.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Pyridine acts as a stronger base neutralizing HCl formed', '1 Mark'],
    ['Shifts equilibrium forward and prevents amine salt deactivation', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch9-q24', 'Exercise 9.15', 'NCERT Exercise',
  'How does the basicity of aliphatic amines in aqueous solution depend on the alkyl group (methyl vs ethyl)?',
  `<div class="step">
    <b>Interplay of Three Competing Factors in Water:</b><br>
    The basicity in water is governed by: (1) $+I$ inductive effect, (2) Solvation (hydration) of conjugate ammonium cation, and (3) Steric hindrance.<br><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>For Methyl-substituted Amines:</strong>
        <br>Because the methyl group is small, steric hindrance is minimal. Solvation and inductive effects combine to give the order:
        $$\\mathbf{(\\text{CH}_3)_2\\text{NH} > \\text{CH}_3\\text{NH}_2 > (\\text{CH}_3)_3\\text{N} > \\text{NH}_3} \\quad (2^\\circ > 1^\\circ > 3^\\circ > \\text{NH}_3)$$</li>
      <li><strong>For Ethyl-substituted Amines:</strong>
        <br>The ethyl group is bulkier, so steric hindrance around the tertiary ammonium cation is larger, reducing its hydration stabilization:
        $$\\mathbf{(\\text{C}_2\\text{H}_5)_2\\text{NH} > (\\text{C}_2\\text{H}_5)_3\\text{N} > \\text{C}_2\\text{H}_5\\text{NH}_2 > \\text{NH}_3} \\quad (2^\\circ > 3^\\circ > 1^\\circ > \\text{NH}_3)$$</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Explanation of inductive, solvation, and steric hindrance factors', '1 Mark'],
    ['Methyl series order: 2° > 1° > 3° > NH₃', '1 Mark'],
    ['Ethyl series order: 2° > 3° > 1° > NH₃', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch9-q25', 'Exercise 9.16', 'NCERT Exercise',
  'Explain why nitration of aniline produces 47% meta-nitroaniline along with ortho and para isomers.',
  `<div class="step">
    <b>Reason:</b><br>
    Under ordinary conditions, the $-\\text{NH}_2$ group strongly activates the benzene ring and directs electrophiles to ortho and para positions (+R resonance effect).<br><br>
    However, nitration is carried out in a strongly acidic medium using concentrated $\\text{HNO}_3$ and concentrated $\\text{H}_2\\text{SO}_4$.<br>
    In this strongly acidic medium, aniline undergoes protonation to form the <b>anilinium ion ($\\text{C}_6\\text{H}_5\\text{N}^+\\text{H}_3$)</b>:
    $$\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{H}^+ \\rightleftharpoons \\mathbf{\\text{C}_6\\text{H}_5\\text{N}^+\\text{H}_3}$$
    The $-\\text{N}^+\\text{H}_3$ group has a positive formal charge, which exerts a powerful electron-withdrawing inductive ($-I$) effect. It strongly deactivates the benzene ring and directs the incoming nitronium ion ($\\text{NO}_2^+$) to the <b>meta position</b>.<br><br>
    <b>Product Distribution:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>$p$-Nitroaniline: $51\\%$</li>
      <li>$m$-Nitroaniline: $47\\%$</li>
      <li>$o$-Nitroaniline: $2\\%$</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Protonation of aniline to anilinium ion in concentrated acid', '1 Mark'],
    ['-N⁺H₃ group is meta-directing yielding 47% meta-nitroaniline', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch9-q26', 'Exercise 9.17', 'NCERT Exercise',
  'How will you protect the $-\\text{NH}_2$ group of aniline to carry out selective monobromination or mono-nitration to yield para-derivatives as major products?',
  `<div class="step">
    <b>Protection of Amino Group by Acetylation:</b><br>
    Because the $-\\text{NH}_2$ group is an extraordinarily powerful activating group, direct bromination gives 2,4,6-tribromoaniline and direct nitration leads to oxidation tar and meta isomers.<br><br>
    <b>Three-Step Protection Strategy:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Step 1 (Protection):</strong> Aniline is acetylated with acetic anhydride in pyridine to form acetanilide:
        $$\\text{C}_6\\text{H}_5\\text{NH}_2 + (\\text{CH}_3\\text{CO})_2\\text{O} \\xrightarrow{\\text{pyridine}} \\mathbf{\\text{C}_6\\text{H}_5\\text{NHCOCH}_3 (\\text{Acetanilide})} + \\text{CH}_3\\text{COOH}$$
        The lone pair on nitrogen is now delocalized towards the carbonyl oxygen ($-\\text{NH}-\\text{C}(=\\text{O})-\\text{CH}_3 \\leftrightarrow -\\text{N}^+\\text{H}=\\text{C}(\\text{O}^-)-\\text{CH}_3$), significantly <b>moderating its activating power</b>.</li>
      <li><strong>Step 2 (Selective Electrophilic Substitution):</strong>
        Bromination with $\\text{Br}_2$ in ethanoic acid yields almost exclusively the <b>para-bromo derivative</b> ($p$-bromoacetanilide) due to steric shielding at the ortho position:
        $$\\text{C}_6\\text{H}_5\\text{NHCOCH}_3 + \\text{Br}_2 \\xrightarrow{\\text{CH}_3\\text{COOH}} \\mathbf{p\\text{-Br-C}_6\\text{H}_4-\\text{NHCOCH}_3} + \\text{HBr}$$</li>
      <li><strong>Step 3 (Deprotection):</strong>
        Acidic or alkaline hydrolysis removes the acetyl protecting group to furnish pure $p$-bromoaniline:
        $$p\\text{-Br-C}_6\\text{H}_4-\\text{NHCOCH}_3 \\xrightarrow{\\text{H}^+ / \\text{H}_2\\text{O}} \\mathbf{p\\text{-Bromoaniline}} + \\text{CH}_3\\text{COOH}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Acetylation step to moderate activating influence', '1 Mark'],
    ['Selective electrophilic substitution at para position', '1 Mark'],
    ['Hydrolysis deprotection step regenerating amino group', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch9-q27', 'Exercise 9.18', 'NCERT Exercise',
  'What are diazonium salts? Why are benzenediazonium salts prepared at cold temperatures ($273-278\\text{ K}$) and used immediately in solution?',
  `<div class="step">
    <b>Properties of Benzenediazonium Salts:</b><br>
    Diazonium salts have the general formula $\\text{Ar}-\\text{N}_2^+\\text{X}^-$.<br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Why Prepared at $273-278\\text{ K}$ ($0-5^\\circ\\text{C}$):</strong>
        Arenediazonium salts are thermally unstable. At temperatures above $278\\text{ K}$ ($5^\\circ\\text{C}$), the $\\text{C}-\\text{N}$ bond cleaves easily, reacting with water to form phenol and liberating nitrogen gas:
        $$\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{H}_2\\text{O} \\xrightarrow{> 278\\text{ K}} \\mathbf{\\text{C}_6\\text{H}_5\\text{OH} (\\text{Phenol})} + \\mathbf{\\text{N}_2 \\uparrow} + \\text{HCl}$$
        Maintaining near-freezing temperature ($0-5^\\circ\\text{C}$) suppresses this hydrolysis.</li>
      <li><strong>Why Used Immediately in Solution:</strong>
        In the solid dry state, benzenediazonium chloride is dangerously unstable and readily explodes upon shock or slight friction. Therefore, it is never isolated in solid form and is consumed immediately in aqueous solution for synthetic transformations (Sandmeyer, Gattermann, coupling reactions).</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Thermal instability above 278 K forming phenol and N₂', '1 Mark'],
    ['Explosive hazard in dry solid state necessitating immediate in-situ use', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch9-q28', 'Exercise 9.19', 'NCERT Exercise',
  'Write the chemical equations for the coupling reaction of benzenediazonium chloride with (i) Phenol and (ii) Aniline.',
  `<div class="step">
    <b>Azo Coupling Reactions:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Coupling with Phenol (in basic medium, $\text{pH } 9-10$):</strong>
        Benzenediazonium chloride couples at the para position of phenoxide ion to yield an <b>orange azo dye</b>:
        $$\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{C}_6\\text{H}_5\\text{OH} + \\text{OH}^- \\xrightarrow{273-278\\text{ K}} \\mathbf{p\\text{-HO}-\\text{C}_6\\text{H}_4-\\text{N}=\\text{N}-\\text{C}_6\\text{H}_5 (p\\text{-Hydroxyazobenzene, orange dye})} + \\text{Cl}^- + \\text{H}_2\\text{O}$$</li>
      <li><strong>Coupling with Aniline (in mildly acidic medium, $\text{pH } 4-5$):</strong>
        Benzenediazonium chloride couples at the para position of aniline to produce a <b>yellow azo dye</b>:
        $$\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{C}_6\\text{H}_5\\text{NH}_2 \\xrightarrow{\\text{pH } 4-5, 273-278\\text{ K}} \\mathbf{p\\text{-H}_2\\text{N}-\\text{C}_6\\text{H}_4-\\text{N}=\\text{N}-\\text{C}_6\\text{H}_5 (p\\text{-Aminoazobenzene, yellow dye})} + \\text{HCl}$$</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['(i) Coupling with phenol producing p-hydroxyazobenzene orange dye (pH 9-10)', '1 Mark'],
    ['(ii) Coupling with aniline producing p-aminoazobenzene yellow dye (pH 4-5)', '1 Mark']
  ]
));

// Questions 29 to 37 (Completing 37 Questions)
questions.push(createQCard(
  'c12c-ch9-q29', 'Exercise 9.20', 'NCERT Exercise',
  'How will you convert: (i) Aniline into chlorobenzene, (ii) Aniline into bromobenzene, (iii) Aniline into iodobenzene?',
  `<div class="step">
    <b>Sandmeyer and Related Reactions:</b><br>
    In all cases, aniline is first diazotised at $273-278\\text{ K}$:
    $$\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{NaNO}_2 + 2\\text{HCl} \\xrightarrow{273-278\\text{ K}} \\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{NaCl} + 2\\text{H}_2\\text{O}$$
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Aniline to Chlorobenzene (Sandmeyer Reaction):</strong>
        $$\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- \\xrightarrow{\\text{Cu}_2\\text{Cl}_2 / \\text{HCl}} \\mathbf{\\text{C}_6\\text{H}_5\\text{Cl} (\\text{Chlorobenzene})} + \\text{N}_2 \\uparrow$$</li>
      <li><strong>Aniline to Bromobenzene (Sandmeyer Reaction):</strong>
        $$\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- \\xrightarrow{\\text{Cu}_2\\text{Br}_2 / \\text{HBr}} \\mathbf{\\text{C}_6\\text{H}_5\\text{Br} (\\text{Bromobenzene})} + \\text{N}_2 \\uparrow$$</li>
      <li><strong>Aniline to Iodobenzene:</strong>
        No copper catalyst is required; simply warming with aqueous potassium iodide ($\text{KI}$):
        $$\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- + \\text{KI} \\xrightarrow{\\text{warm}} \\mathbf{\\text{C}_6\\text{H}_5\\text{I} (\\text{Iodobenzene})} + \\text{KCl} + \\text{N}_2 \\uparrow$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) Diazotisation followed by Cu₂Cl₂/HCl', '1 Mark'],
    ['(ii) Diazotisation followed by Cu₂Br₂/HBr', '1 Mark'],
    ['(iii) Diazotisation followed by warming with KI', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch9-q30', 'Exercise 9.21', 'NCERT Exercise',
  'Explain Sandmeyer reaction and Gattermann reaction with equations. Which of the two gives better yields?',
  `<div class="step">
    <b>Comparison of Reactions:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Sandmeyer Reaction:</strong>
        Treatment of freshly prepared arenediazonium salt with <b>cuprous halides</b> ($\\text{Cu}_2\\text{Cl}_2$ or $\\text{Cu}_2\\text{Br}_2$) dissolved in corresponding halogen acid:
        $$\\text{Ar}-\\text{N}_2^+\\text{Cl}^- \\xrightarrow{\\text{Cu}_2\\text{Cl}_2 / \\text{HCl}} \\mathbf{\\text{Ar}-\\text{Cl}} + \\text{N}_2$$
        $$\\text{Ar}-\\text{N}_2^+\\text{Cl}^- \\xrightarrow{\\text{Cu}_2\\text{Br}_2 / \\text{HBr}} \\mathbf{\\text{Ar}-\\text{Br}} + \\text{N}_2$$</li>
      <li><strong>Gattermann Reaction:</strong>
        Treatment of arenediazonium salt solution with <b>copper powder</b> in presence of halogen acid:
        $$\\text{Ar}-\\text{N}_2^+\\text{Cl}^- \\xrightarrow{\\text{Cu powder} / \\text{HCl}} \\mathbf{\\text{Ar}-\\text{Cl}} + \\text{N}_2 + \\text{CuCl}$$</li>
    </ol>
    <b>Yield Comparison:</b> The <b>Sandmeyer reaction is found to give significantly higher and cleaner yields</b> than the Gattermann reaction.
  </div>`,
  '2 Marks',
  [
    ['Sandmeyer equation with cuprous halide catalyst', '1 Mark'],
    ['Gattermann equation with Cu powder and statement that Sandmeyer gives better yield', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch9-q31', 'Exercise 9.22', 'NCERT Exercise',
  'How will you convert: (i) Aniline into fluorobenzene (Balz-Schiemann reaction), (ii) Aniline into benzonitrile, (iii) Aniline into phenol?',
  `<div class="step">
    <b>Synthetic Sequences:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Aniline to Fluorobenzene (Balz-Schiemann Reaction):</strong>
        $$\\text{C}_6\\text{H}_5\\text{NH}_2 \\xrightarrow{\\text{NaNO}_2 + \\text{HBF}_4, 273\\text{ K}} \\text{C}_6\\text{H}_5\\text{N}_2^+\\text{BF}_4^- \\xrightarrow{\\Delta} \\mathbf{\\text{C}_6\\text{H}_5\\text{F}} + \\text{BF}_3 + \\text{N}_2$$</li>
      <li><strong>Aniline to Benzonitrile:</strong>
        $$\\text{C}_6\\text{H}_5\\text{NH}_2 \\xrightarrow{\\text{NaNO}_2 + \\text{HCl}, 273\\text{ K}} \\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- \\xrightarrow{\\text{CuCN/KCN}} \\mathbf{\\text{C}_6\\text{H}_5\\text{CN}} + \\text{N}_2$$</li>
      <li><strong>Aniline to Phenol:</strong>
        $$\\text{C}_6\\text{H}_5\\text{NH}_2 \\xrightarrow{\\text{NaNO}_2 + \\text{H}_2\\text{SO}_4, 273\\text{ K}} \\text{C}_6\\text{H}_5\\text{N}_2^+\\text{HSO}_4^- \\xrightarrow{\\text{warm with } \\text{H}_2\\text{O}, 373\\text{ K}} \\mathbf{\\text{C}_6\\text{H}_5\\text{OH}} + \\text{N}_2 + \\text{H}_2\\text{SO}_4$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) Balz-Schiemann reaction with HBF₄ to fluorobenzene', '1 Mark'],
    ['(ii) Sandmeyer cyanation to benzonitrile', '1 Mark'],
    ['(iii) Diazonium hydrolysis to phenol', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch9-q32', 'Exercise 9.23', 'NCERT Exercise',
  'Give reasons: (i) Primary amines have higher boiling points than tertiary amines of comparable molecular mass. (ii) Aliphatic amines are stronger bases than ammonia.',
  `<div class="step">
    <b>Explanations:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Boiling Points: $1^\\circ$ vs $3^\\circ$ Amines:</strong>
        <br>Primary amines contain two hydrogen atoms attached to nitrogen ($-N\text{H}_2$). They form extensive intermolecular hydrogen bonds ($-\text{N}-\text{H}\\cdots\\text{N}-$), causing strong molecular association.
        <br>Tertiary amines have no hydrogen atom attached to nitrogen ($-NR_3$); they <b>cannot form intermolecular hydrogen bonds</b> with each other. Consequently, they have much lower boiling points than isomeric primary amines.</li>
      <li><strong>Aliphatic Amines Stronger Bases than Ammonia:</strong>
        <br>Alkyl groups are electron-releasing due to their positive inductive ($+I$) effect. In aliphatic amines, the $+I$ effect of alkyl groups increases the electron density on the nitrogen atom, enhancing the availability of its lone pair for donation to a proton.
        <br>Additionally, the resulting alkylammonium cation is stabilized by dispersal of the positive charge via $+I$ effect. Hence, aliphatic amines are stronger bases ($pK_b \\approx 3-4$) than ammonia ($pK_b = 4.75$).</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['(i) Intermolecular H-bonding in 1° amines vs absence in 3° amines', '1 Mark'],
    ['(ii) +I effect of alkyl group increasing electron density on N and stabilizing cation', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch9-q33', 'Exercise 9.24', 'NCERT Exercise',
  'What happens when: (i) Ethylamine reacts with nitrous acid, (ii) Aniline reacts with nitrous acid at 273 K, (iii) Dimethylamine reacts with nitrous acid?',
  `<div class="step">
    <b>Reactions with Nitrous Acid:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Ethylamine with $\\text{HNO}_2$:</strong>
        Forms an unstable aliphatic diazonium salt that decomposes quantitatively to give ethanol, nitrogen gas, and other by-products:
        $$\\text{C}_2\\text{H}_5\\text{NH}_2 + \\text{HNO}_2 \\xrightarrow{\\text{NaNO}_2 + \\text{HCl}} [\\text{C}_2\\text{H}_5\\text{N}_2^+\\text{Cl}^-] \\xrightarrow{\\text{H}_2\\text{O}} \\mathbf{\\text{C}_2\\text{H}_5\\text{OH}} + \\mathbf{\\text{N}_2 \\uparrow} + \\text{HCl}$$</li>
      <li><strong>Aniline with $\\text{HNO}_2$ at $273-278\\text{ K}$:</strong>
        Undergoes diazotisation to form a stable arenediazonium salt:
        $$\\text{C}_6\\text{H}_5\\text{NH}_2 + \\text{NaNO}_2 + 2\\text{HCl} \\xrightarrow{273-278\\text{ K}} \\mathbf{\\text{C}_6\\text{H}_5\\text{N}_2^+\\text{Cl}^- (\\text{Benzenediazonium chloride})} + \\text{NaCl} + 2\\text{H}_2\\text{O}$$</li>
      <li><strong>Dimethylamine with $\\text{HNO}_2$:</strong>
        Secondary amines react with nitrous acid to form an oily, yellow, carcinogenic N-nitrosoamine:
        $$(\\text{CH}_3)_2\\text{NH} + \\text{HONO} \\rightarrow \\mathbf{(\\text{CH}_3)_2\\text{N}-\\text{N}=\\text{O} (\\text{N-Nitrosodimethylamine, yellow oil})} + \\text{H}_2\\text{O}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) Ethylamine giving ethanol and N₂ effervescence', '1 Mark'],
    ['(ii) Aniline yielding stable benzenediazonium chloride at 273 K', '1 Mark'],
    ['(iii) Dimethylamine forming yellow oily N-nitrosamine', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch9-q34', 'Exercise 9.25', 'NCERT Exercise',
  'How will you separate a mixture of primary, secondary and tertiary amines using Hinsberg reagent?',
  `<div class="step">
    <b>Separation Protocol:</b><br>
    The mixture of $1^\\circ, 2^\\circ$, and $3^\\circ$ amines is treated with <b>benzenesulphonyl chloride (Hinsberg reagent)</b> in the presence of excess aqueous $\\text{KOH}$:<br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Separation of $3^\\circ$ Amine:</strong>
        Tertiary amine does not react and remains unreacted. It is distilled off or extracted with ether, leaving $1^\\circ$ and $2^\\circ$ amine products in the alkaline aqueous solution.</li>
      <li><strong>Separation of $2^\\circ$ Amine:</strong>
        Secondary amine forms $N,N$-dialkylbenzenesulphonamide ($\\text{C}_6\\text{H}_5\\text{SO}_2\\text{N}R_2$), which is insoluble in aqueous $\\text{KOH}$. It precipitates as a solid and is separated by filtration.<br>
        Heating this precipitate with concentrated $\\text{HCl}$ under reflux regenerates the pure secondary amine.</li>
      <li><strong>Recovery of $1^\\circ$ Amine:</strong>
        Primary amine forms $N$-alkylbenzenesulphonamide, which dissolves in aqueous $\\text{KOH}$ forming a soluble potassium salt. Acidification of the clear filtrate with concentrated $\\text{HCl}$ precipitates the $N$-alkylbenzenesulphonamide, which on boiling with dilute acid regenerates the pure primary amine.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Treatment of mixture with Hinsberg reagent and excess KOH', '1 Mark'],
    ['Distillation/extraction of unreacted 3° amine', '1 Mark'],
    ['Filtration of insoluble 2° sulphonamide and recovery of 1° amine from filtrate', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch9-q35', 'Exercise 9.26', 'NCERT Exercise',
  'Carry out the conversion: (i) Nitromethane into dimethylamine, (ii) Propanoic acid into ethanoic acid, (iii) Ethanamine into ethan-1,2-diamine.',
  `<div class="step">
    <b>Reaction Pathways:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Nitromethane into Dimethylamine:</strong>
        $$\\text{CH}_3\\text{NO}_2 \\xrightarrow{\\text{Sn/HCl}} \\text{CH}_3\\text{NH}_2 \\xrightarrow{\\text{CHCl}_3 + \\text{alc. KOH}} \\text{CH}_3\\text{NC} \\xrightarrow{\\text{H}_2 / \\text{Pt}} \\mathbf{\\text{CH}_3\\text{NHCH}_3}$$</li>
      <li><strong>Propanoic acid into Ethanoic acid (Stepping down):</strong>
        $$\\text{CH}_3\\text{CH}_2\\text{COOH} \\xrightarrow{\\text{SOCl}_2, \\text{NH}_3} \\text{CH}_3\\text{CH}_2\\text{CONH}_2 \\xrightarrow{\\text{Br}_2/\\text{KOH (Hofmann)}} \\text{CH}_3\\text{CH}_2\\text{NH}_2 \\xrightarrow{\\text{HNO}_2} \\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{\\text{alk. } \\text{KMnO}_4} \\mathbf{\\text{CH}_3\\text{COOH}}$$</li>
      <li><strong>Ethanamine into Ethan-1,2-diamine:</strong>
        $$\\text{CH}_3\\text{CH}_2\\text{NH}_2 \\xrightarrow{\\text{HNO}_2} \\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4, 443\\text{ K}} \\text{CH}_2=\\text{CH}_2 \\xrightarrow{\\text{Br}_2 / \\text{CCl}_4} \\text{BrCH}_2\\text{CH}_2\\text{Br} \\xrightarrow{\\text{excess } \\text{NH}_3} \\mathbf{\\text{H}_2\\text{N}-\\text{CH}_2-\\text{CH}_2-\\text{NH}_2}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) Reduction to 1° amine, isocyanide formation and catalytic reduction', '1 Mark'],
    ['(ii) Hofmann degradation followed by alcohol oxidation', '1 Mark'],
    ['(iii) Deamination, elimination, bromination, and ammonolysis', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch9-q36', 'Exercise 9.27', 'NCERT Exercise',
  'Write the structure of the Zwitterion of sulphanilic acid. Why does sulphanilic acid not react with sodium bicarbonate?',
  `<div class="step">
    <b>Zwitterion of Sulphanilic Acid:</b><br>
    Sulphanilic acid ($p$-aminobenzenesulphonic acid) contains both an acidic sulphonic group ($-\\text{SO}_3\\text{H}$) and a basic amino group ($-\\text{NH}_2$) in the same molecule.<br>
    The acidic $-\\text{SO}_3\\text{H}$ transfers its proton to the basic $-\\text{NH}_2$ group, forming an internal dipolar salt called a <b>Zwitterion</b>:
    $$p\\text{-H}_2\\text{N}-\\text{C}_6\\text{H}_4-\\text{SO}_3\\text{H} \\rightleftharpoons \\mathbf{p\\text{-H}_3\\text{N}^+-\\text{C}_6\\text{H}_4-\\text{SO}_3^- (\\text{Zwitterion})}$$
    <br>
    <b>Why it does not react with $\\text{NaHCO}_3$:</b><br>
    In the Zwitterion form, the proton is firmly held by the $-\\text{N}^+\\text{H}_3$ group and the sulphonate group is present as $-\\text{SO}_3^-$. The weakly basic bicarbonate ion ($\text{HCO}_3^-$) is not strong enough to abstract a proton from the $-\\text{N}^+\\text{H}_3$ group of the Zwitterion to release carbon dioxide. Hence, it does not give effervescence with $\\text{NaHCO}_3$.
  </div>`,
  '2 Marks',
  [
    ['Structure of dipolar Zwitterion (H₃N⁺-C₆H₄-SO₃⁻)', '1 Mark'],
    ['Explanation of unreactive nature towards weak base NaHCO₃', '1 Mark']
  ]
));

questions.push(createQCard(
  'c12c-ch9-q37', 'Exercise 9.28', 'NCERT Exercise',
  'Explain why quaternary ammonium salts (such as $[\\text{RN}^+(\\text{CH}_3)_3]\\text{OH}^-$) on heating undergo Hofmann elimination to give the less substituted alkene as the major product.',
  `<div class="step">
    <b>Hofmann Elimination Mechanism:</b><br>
    When a quaternary ammonium hydroxide is pyrolysed (heated), it undergoes an $E2$ elimination:<br>
    $$R-\\text{CH}_2-\\text{CH}_2-\\text{N}^+(\\text{CH}_3)_3 \\; ^-\\text{OH} \\xrightarrow{\\Delta} R-\\text{CH}=\\text{CH}_2 + \\text{N(CH}_3)_3 + \\text{H}_2\\text{O}$$
    Unlike dehydrohalogenation of alkyl halides which follows Saytzeff\'s rule, quaternary ammonium elimination follows the <b>Hofmann rule (least substituted alkene is major)</b>.<br><br>
    <b>Reasons:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Steric Crowding:</strong> The leaving group $-\\text{N}^+(\\text{CH}_3)_3$ is very bulky. The approaching base ($^-\\text{OH}$) cannot easily access sterically hindered internal $\beta$-hydrogens. It preferentially attacks the most accessible, unhindered terminal $\beta$-hydrogen.</li>
      <li><strong>Carbanion-like Transition State:</strong> Because the positively charged nitrogen is an extremely strong electron-withdrawing group ($-I$), the transition state has substantial carbanion character. Terminal hydrogens are more acidic than internal ones, stabilizing the transition state leading to the less substituted alkene.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Statement of Hofmann rule (least substituted alkene is major)', '1 Mark'],
    ['Steric crowding by bulky -N⁺(CH₃)₃ group and carbanion transition state', '1 Mark']
  ]
));

console.log(`\nCompiling Chapter 9: Amines (Total: ${questions.length} Qs)...`);
saveChapter(chNum, chTitle, svgDiagram, exTitle, questions, 'Biomolecules');
console.log(`Chapter 9: Amines successfully saved!`);
