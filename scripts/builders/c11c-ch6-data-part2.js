/**
 * NCERT Class 11 Chemistry Chapter 6: Equilibrium - Part 2 Data (Q6.35 to Q6.54)
 * Ionic Equilibrium, Acid-Base Theories, pH Calculations, Weak Electrolytes & Common Ion Effect
 */

function getPart2Questions() {
  return [
    {
      id: "c11c-ch6-q35",
      ncertRef: "6.35",
      marks: "4 Marks",
      questionHtml: "What are conjugate acid-base pairs according to the Brönsted-Lowry theory? Identify conjugate acid and conjugate base for the following species:<br>(i) $\\text{HNO}_2$<br>(ii) $\\text{CN}^-$<br>(iii) $\\text{HClO}_4$<br>(iv) $\\text{F}^-$<br>(v) $\\text{OH}^-$<br>(vi) $\\text{CO}_3^{2-}$<br>(vii) $\\text{S}^{2-}$.",
      solutionStepsHtml: `<p><b>Definition of Conjugate Acid-Base Pair:</b><br>
According to the Brönsted-Lowry concept, a conjugate acid-base pair consists of two species that differ by only a single proton ($\\text{H}^+$):<br>
$$\\text{Acid} \\rightleftharpoons \\text{Conjugate Base} + \\text{H}^+, \\quad \\text{Base} + \\text{H}^+ \\rightleftharpoons \\text{Conjugate Acid}$$</p>
<p><b>Conjugate Species:</b><br>
1. <b>$\\text{HNO}_2$ (Acid):</b> Loss of $\\text{H}^+ \\implies$ <b>Conjugate Base: $\\text{NO}_2^-$</b> (Nitrite ion).<br>
2. <b>$\\text{CN}^-$ (Base):</b> Gain of $\\text{H}^+ \\implies$ <b>Conjugate Acid: $\\text{HCN}$</b> (Hydrogen cyanide).<br>
3. <b>$\\text{HClO}_4$ (Acid):</b> Loss of $\\text{H}^+ \\implies$ <b>Conjugate Base: $\\text{ClO}_4^-$</b> (Perchlorate ion).<br>
4. <b>$\\text{F}^-$ (Base):</b> Gain of $\\text{H}^+ \\implies$ <b>Conjugate Acid: $\\text{HF}$</b> (Hydrofluoric acid).<br>
5. <b>$\\text{OH}^-$ (Amphiprotic):</b><br>
&bull; Acting as base (gains $\\text{H}^+$): <b>Conjugate Acid: $\\text{H}_2\\text{O}$</b><br>
&bull; Acting as acid (loses $\\text{H}^+$): <b>Conjugate Base: $\\text{O}^{2-}$</b> (Oxide ion).<br>
6. <b>$\\text{CO}_3^{2-}$ (Base):</b> Gain of $\\text{H}^+ \\implies$ <b>Conjugate Acid: $\\text{HCO}_3^-$</b> (Hydrogen carbonate ion).<br>
7. <b>$\\text{S}^{2-}$ (Base):</b> Gain of $\\text{H}^+ \\implies$ <b>Conjugate Acid: $\\text{HS}^-$</b> (Hydrogen sulphide ion).</p>`,
      rubricRows: [
        { key: "Definition of conjugate acid-base pair (differs by single H+)", marks: "1 Mark" },
        { key: "Correct conjugate bases for acids (NO2-, ClO4-)", marks: "1 Mark" },
        { key: "Correct conjugate acids for bases (HCN, HF, HCO3-, HS-)", marks: "1 Mark" },
        { key: "OH- dual behavior correctly analyzed (H2O and O2-)", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q36",
      ncertRef: "6.36",
      marks: "2 Marks",
      questionHtml: "Which of the following are Lewis acids?<br>$\\text{H}_2\\text{O}$, $\\text{BF}_3$, $\\text{H}^+$, $\\text{NH}_4^+$, $\\text{AlCl}_3$, $\\text{NH}_3$.",
      solutionStepsHtml: `<p><b>Definition:</b> A Lewis acid is an electron pair acceptor (electron-deficient molecule or cation with vacant orbitals).</p>
<p><b>Analysis of each species:</b><br>
1. <b>$\\text{BF}_3$:</b> Boron has only 6 valence electrons (incomplete octet) and a vacant $2p$ orbital. $\\implies$ <b>Lewis Acid</b>.<br>
2. <b>$\\text{H}^+$:</b> Positively charged hydrogen ion with completely empty $1s$ orbital, can accept an electron pair. $\\implies$ <b>Lewis Acid</b>.<br>
3. <b>$\\text{AlCl}_3$:</b> Central aluminium atom has an incomplete octet (6 valence electrons) with vacant $3p/3d$ orbitals. $\\implies$ <b>Lewis Acid</b>.<br>
4. <b>$\\text{H}_2\\text{O}$ & $\\text{NH}_3$:</b> Possess lone pairs of electrons, act as Lewis bases.<br>
5. <b>$\\text{NH}_4^+$:</b> Nitrogen already has a complete octet with 4 covalent bonds and no vacant orbital to accept another pair. Does not act as a Lewis acid.</p>
<p><b>Final Answer:</b> The Lewis acids are <b>$\\text{BF}_3$, $\\text{H}^+$, and $\\text{AlCl}_3$</b>.</p>`,
      rubricRows: [
        { key: "Definition of Lewis acid as electron-pair acceptor", marks: "0.5 Mark" },
        { key: "Correct identification of BF3, H+, and AlCl3 with justifications", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch6-q37",
      ncertRef: "6.37",
      marks: "2 Marks",
      questionHtml: "What will be the conjugate bases for the following Brönsted acids:<br>$\\text{HF}$, $\\text{H}_2\\text{SO}_4$, $\\text{HCO}_3^-$?",
      solutionStepsHtml: `<p>A conjugate base is formed when a Brönsted acid loses a proton ($\\text{H}^+$):<br>
$$\\text{Conjugate Base} = \\text{Acid} - \\text{H}^+$$</p>
<p>1. <b>$\\text{HF} - \\text{H}^+ \\implies \\mathbf{F^-}$</b> (Fluoride ion)<br>
2. <b>$\\text{H}_2\\text{SO}_4 - \\text{H}^+ \\implies \\mathbf{HSO_4^-}$</b> (Hydrogen sulphate ion / Bisulphate ion)<br>
3. <b>$\\text{HCO}_3^- - \\text{H}^+ \\implies \\mathbf{CO_3^{2-}}$</b> (Carbonate ion)</p>`,
      rubricRows: [
        { key: "Conjugate base of HF is F-", marks: "0.5 Mark" },
        { key: "Conjugate base of H2SO4 is HSO4-", marks: "0.5 Mark" },
        { key: "Conjugate base of HCO3- is CO3^2-", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q38",
      ncertRef: "6.38",
      marks: "2 Marks",
      questionHtml: "Write the conjugate acids for the following Brönsted bases:<br>$\\text{NH}_2^-$, $\\text{NH}_3$, $\\text{HCOO}^-$.",
      solutionStepsHtml: `<p>A conjugate acid is formed when a Brönsted base accepts a proton ($\\text{H}^+$):<br>
$$\\text{Conjugate Acid} = \\text{Base} + \\text{H}^+$$</p>
<p>1. <b>$\\text{NH}_2^- + \\text{H}^+ \\implies \\mathbf{NH_3}$</b> (Ammonia)<br>
2. <b>$\\text{NH}_3 + \\text{H}^+ \\implies \\mathbf{NH_4^+}$</b> (Ammonium ion)<br>
3. <b>$\\text{HCOO}^- + \\text{H}^+ \\implies \\mathbf{HCOOH}$</b> (Methanoic acid / Formic acid)</p>`,
      rubricRows: [
        { key: "Conjugate acid of NH2- is NH3", marks: "0.5 Mark" },
        { key: "Conjugate acid of NH3 is NH4+", marks: "0.5 Mark" },
        { key: "Conjugate acid of HCOO- is HCOOH", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q39",
      ncertRef: "6.39",
      marks: "3 Marks",
      questionHtml: "The species $\\text{H}_2\\text{O}$, $\\text{HCO}_3^-$, $\\text{HSO}_4^-$ and $\\text{NH}_3$ can act both as Brönsted acids and bases. For each case give the corresponding conjugate acid and conjugate base.",
      solutionStepsHtml: `<p>These amphiprotic species can donate or accept a proton:</p>
<table style="width:100%; border-collapse:collapse; margin-top:10px; font-size:0.9rem;">
  <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
    <th style="padding:8px;">Species</th>
    <th style="padding:8px;">Conjugate Acid (Species $+ \\text{H}^+$)</th>
    <th style="padding:8px;">Conjugate Base (Species $- \\text{H}^+$)</th>
  </tr>
  <tr style="border-bottom:1px solid #e2e8f0;">
    <td style="padding:8px; font-weight:700;">$\\text{H}_2\\text{O}$</td>
    <td style="padding:8px;">$\\mathbf{H_3O^+}$ (Hydronium ion)</td>
    <td style="padding:8px;">$\\mathbf{OH^-}$ (Hydroxide ion)</td>
  </tr>
  <tr style="border-bottom:1px solid #e2e8f0;">
    <td style="padding:8px; font-weight:700;">$\\text{HCO}_3^-$</td>
    <td style="padding:8px;">$\\mathbf{H_2CO_3}$ (Carbonic acid)</td>
    <td style="padding:8px;">$\\mathbf{CO_3^{2-}}$ (Carbonate ion)</td>
  </tr>
  <tr style="border-bottom:1px solid #e2e8f0;">
    <td style="padding:8px; font-weight:700;">$\\text{HSO}_4^-$</td>
    <td style="padding:8px;">$\\mathbf{H_2SO_4}$ (Sulphuric acid)</td>
    <td style="padding:8px;">$\\mathbf{SO_4^{2-}}$ (Sulphate ion)</td>
  </tr>
  <tr>
    <td style="padding:8px; font-weight:700;">$\\text{NH}_3$</td>
    <td style="padding:8px;">$\\mathbf{NH_4^+}$ (Ammonium ion)</td>
    <td style="padding:8px;">$\\mathbf{NH_2^-}$ (Amide ion)</td>
  </tr>
</table>`,
      rubricRows: [
        { key: "H2O conjugate acid (H3O+) and base (OH-)", marks: "0.75 Mark" },
        { key: "HCO3- conjugate acid (H2CO3) and base (CO3^2-)", marks: "0.75 Mark" },
        { key: "HSO4- conjugate acid (H2SO4) and base (SO4^2-)", marks: "0.75 Mark" },
        { key: "NH3 conjugate acid (NH4+) and base (NH2-)", marks: "0.75 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q40",
      ncertRef: "6.40",
      marks: "4 Marks",
      questionHtml: "Classify the following species into Lewis acids and Lewis bases and show how these act as Lewis acid/base:<br>(a) $\\text{OH}^-$<br>(b) $\\text{F}^-$<br>(c) $\\text{H}^+$<br>(d) $\\text{BCl}_3$.",
      solutionStepsHtml: `<p><b>(a) $\\text{OH}^-$ (Hydroxide ion):</b><br>
<b>Lewis Base:</b> The oxygen atom has three lone pairs of electrons and carries a negative charge. It can donate an electron pair to form a coordinate bond, e.g.:<br>
$$\\text{H}^+ + :\\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$$</p>
<p><b>(b) $\\text{F}^-$ (Fluoride ion):</b><br>
<b>Lewis Base:</b> Possesses four lone pairs in its valence shell with a negative charge. It donates an electron pair, e.g., to boron trifluoride:<br>
$$\\text{BF}_3 + :\\text{F}^- \\rightarrow [\\text{BF}_4]^-$$</p>
<p><b>(c) $\\text{H}^+$ (Proton):</b><br>
<b>Lewis Acid:</b> Lacks valence electrons completely and has a vacant $1s$ orbital. It accepts an electron pair from a base like water or ammonia:<br>
$$\\text{H}^+ + :\\text{NH}_3 \\rightarrow \\text{NH}_4^+$$</p>
<p><b>(d) $\\text{BCl}_3$ (Boron trichloride):</b><br>
<b>Lewis Acid:</b> Central boron atom has only 6 electrons in its valence shell (electron-deficient octet) and an unhybridized vacant $2p$ orbital. It accepts a lone pair from a donor:<br>
$$\\text{BCl}_3 + :\\text{NH}_3 \\rightarrow \\text{Cl}_3\\text{B}\\leftarrow \\text{NH}_3$$</p>`,
      rubricRows: [
        { key: "Classification: OH- and F- as Lewis bases with donation reactions", marks: "2 Marks" },
        { key: "Classification: H+ and BCl3 as Lewis acids with acceptance reactions", marks: "2 Marks" }
      ]
    },
    {
      id: "c11c-ch6-q41",
      ncertRef: "6.41",
      marks: "2 Marks",
      questionHtml: "The concentration of hydrogen ion in a sample of soft drink is $3.8 \\times 10^{-3}\\text{ M}$. What is its pH?",
      solutionStepsHtml: `<p><b>Formula:</b><br>
$$\\text{pH} = -\\log[\\text{H}^+]$$</p>
<p><b>Calculation:</b><br>
$$\\text{pH} = -\\log(3.8 \\times 10^{-3}) = -[\\log(3.8) + \\log(10^{-3})]$$
$$\\log(3.8) \\approx 0.5798, \\quad \\log(10^{-3}) = -3$$
$$\\text{pH} = -[0.5798 - 3] = 3 - 0.5798 = 2.4202 \\approx 2.42$$</p>
<p><b>Final Answer:</b> The pH of the soft drink is <b>$2.42$</b> (acidic).</p>`,
      rubricRows: [
        { key: "Formula pH = -log[H+]", marks: "1 Mark" },
        { key: "Accurate computation yielding pH = 2.42", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q42",
      ncertRef: "6.42",
      marks: "2 Marks",
      questionHtml: "The pH of a sample of vinegar is $3.76$. Calculate the concentration of hydrogen ion in it.",
      solutionStepsHtml: `<p><b>Formula:</b><br>
$$[\\text{H}^+] = 10^{-\\text{pH}} = \\text{antilog}(-\\text{pH})$$</p>
<p><b>Calculation:</b><br>
$$[\\text{H}^+] = \\text{antilog}(-3.76) = \\text{antilog}(\\bar{4}.24)$$
$$[\\text{H}^+] = 10^{0.24} \\times 10^{-4}$$
Since $10^{0.24} \\approx 1.738$ (or antilog $0.24 = 1.74$):<br>
$$[\\text{H}^+] = 1.74 \\times 10^{-4}\\text{ M}$$</p>
<p><b>Final Answer:</b> $[\\text{H}^+] = 1.74 \\times 10^{-4}\\text{ mol L}^{-1}$.</p>`,
      rubricRows: [
        { key: "Formula [H+] = antilog(-pH)", marks: "1 Mark" },
        { key: "Correct antilog evaluation: 1.74 x 10^-4 M", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q43",
      ncertRef: "6.43",
      marks: "3 Marks",
      questionHtml: "The ionization constants of $\\text{HF}$, $\\text{HCOOH}$ and $\\text{HCN}$ at $298\\text{ K}$ are $6.8 \\times 10^{-4}$, $1.8 \\times 10^{-4}$ and $4.8 \\times 10^{-9}$ respectively. Calculate the ionization constants of the corresponding conjugate bases.",
      solutionStepsHtml: `<p><b>Relationship for conjugate acid-base pairs:</b><br>
$$K_a \\times K_b = K_w = 1.0 \\times 10^{-14} \\implies K_b = \\frac{K_w}{K_a}$$</p>
<p><b>1. Conjugate base of $\\text{HF}$ ($\\text{F}^-$):</b><br>
$$K_b(\\text{F}^-) = \\frac{1.0 \\times 10^{-14}}{6.8 \\times 10^{-4}} = 1.47 \\times 10^{-11}$$</p>
<p><b>2. Conjugate base of $\\text{HCOOH}$ ($\\text{HCOO}^-$):</b><br>
$$K_b(\\text{HCOO}^-) = \\frac{1.0 \\times 10^{-14}}{1.8 \\times 10^{-4}} = 5.56 \\times 10^{-11}$$</p>
<p><b>3. Conjugate base of $\\text{HCN}$ ($\\text{CN}^-$):</b><br>
$$K_b(\\text{CN}^-) = \\frac{1.0 \\times 10^{-14}}{4.8 \\times 10^{-9}} = 2.08 \\times 10^{-6}$$</p>
<p><b>Final Answer:</b><br>
$K_b(\\text{F}^-) = 1.47 \\times 10^{-11}$, $K_b(\\text{HCOO}^-) = 5.56 \\times 10^{-11}$, and $K_b(\\text{CN}^-) = 2.08 \\times 10^{-6}$.</p>`,
      rubricRows: [
        { key: "Formula Ka * Kb = Kw = 10^-14", marks: "1 Mark" },
        { key: "Accurate values for Kb(F-) and Kb(HCOO-)", marks: "1 Mark" },
        { key: "Accurate value for Kb(CN-)", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q44",
      ncertRef: "6.44",
      marks: "4 Marks",
      questionHtml: "The ionization constant of phenol is $1.0 \\times 10^{-10}$. What is the concentration of phenolate ion in $0.05\\text{ M}$ solution of phenol? What will be its degree of ionization if the solution is also $0.01\\text{ M}$ in sodium phenolate?",
      solutionStepsHtml: `<p><b>Part 1: Concentration of phenolate ion in pure $0.05\\text{ M}$ phenol:</b><br>
$$\\text{C}_6\\text{H}_5\\text{OH} \\rightleftharpoons \\text{C}_6\\text{H}_5\\text{O}^- + \\text{H}^+$$
$K_a = \\frac{[\\text{C}_6\\text{H}_5\\text{O}^-][\\text{H}^+]}{[\\text{C}_6\\text{H}_5\\text{OH}]}$. Since $[\\text{C}_6\\text{H}_5\\text{O}^-] = [\\text{H}^+] = x$ and $[\\text{C}_6\\text{H}_5\\text{OH}] \\approx 0.05\\text{ M}$:<br>
$$K_a = \\frac{x^2}{0.05} = 1.0 \\times 10^{-10} \\implies x^2 = 5.0 \\times 10^{-12}$$
$$x = \\sqrt{5.0 \\times 10^{-12}} = 2.236 \\times 10^{-6}\\text{ M}$$
Thus, $[\\text{C}_6\\text{H}_5\\text{O}^-] = 2.24 \\times 10^{-6}\\text{ M}$.</p>
<p><b>Part 2: Degree of ionization ($\\alpha$) in presence of $0.01\\text{ M}$ sodium phenolate (Common Ion Effect):</b><br>
Sodium phenolate dissociates completely: $[\\text{C}_6\\text{H}_5\\text{O}^-] \\approx 0.01\\text{ M}$.<br>
Let $\\alpha$ be the degree of ionization of $0.05\\text{ M}$ phenol:<br>
$[\\text{H}^+] = C\\alpha = 0.05\\alpha$<br>
Total $[\\text{C}_6\\text{H}_5\\text{O}^-] = 0.01 + 0.05\\alpha \\approx 0.01\\text{ M}$<br>
$$K_a = \\frac{[\\text{C}_6\\text{H}_5\\text{O}^-][\\text{H}^+]}{[\\text{C}_6\\text{H}_5\\text{OH}]} = \\frac{(0.01) \\times (0.05 \\alpha)}{0.05} = 1.0 \\times 10^{-10}$$
$$0.01 \\alpha = 1.0 \\times 10^{-10} \\implies \\alpha = \\frac{1.0 \\times 10^{-10}}{0.01} = 1.0 \\times 10^{-8}$$</p>
<p><b>Final Answer:</b> Phenolate concentration in pure phenol is $2.24 \\times 10^{-6}\\text{ M}$; degree of ionization in presence of sodium phenolate is $\\alpha = 1.0 \\times 10^{-8}$ (suppressed by common ion effect).</p>`,
      rubricRows: [
        { key: "Part 1: Equilibrium expression and finding [C6H5O-] = 2.24 x 10^-6 M", marks: "2 Marks" },
        { key: "Part 2: Common ion effect setup with [C6H5O-] = 0.01 M", marks: "1 Mark" },
        { key: "Solving alpha = 1.0 x 10^-8", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q45",
      ncertRef: "6.45",
      marks: "4 Marks",
      questionHtml: "The first ionization constant of $\\text{H}_2\\text{S}$ is $9.1 \\times 10^{-8}$. Calculate the concentration of $\\text{HS}^-$ ion in its $0.1\\text{ M}$ solution. How will this concentration be affected if the solution is $0.1\\text{ M}$ in $\\text{HCl}$ also? If the second dissociation constant of $\\text{H}_2\\text{S}$ is $1.2 \\times 10^{-13}$, calculate the concentration of $\\text{S}^{2-}$ under both conditions.",
      solutionStepsHtml: `<p><b>Case 1: In pure $0.1\\text{ M H}_2\\text{S}$:</b><br>
Step 1: $\\text{H}_2\\text{S} \\rightleftharpoons \\text{H}^+ + \\text{HS}^-, \\quad K_{a1} = 9.1 \\times 10^{-8}$<br>
$[\\text{H}^+] = [\\text{HS}^-] = x, \\quad [\\text{H}_2\\text{S}] \\approx 0.1\\text{ M}$<br>
$$K_{a1} = \\frac{x^2}{0.1} = 9.1 \\times 10^{-8} \\implies x = \\sqrt{9.1 \\times 10^{-9}} = 9.54 \\times 10^{-5}\\text{ M}$$
Thus, $[\\text{HS}^-] = 9.54 \\times 10^{-5}\\text{ M}$.<br>
Step 2: $\\text{HS}^- \\rightleftharpoons \\text{H}^+ + \\text{S}^{2-}, \\quad K_{a2} = 1.2 \\times 10^{-13}$<br>
Since $[\\text{H}^+] \\approx [\\text{HS}^-]$, $K_{a2} = \\frac{[\\text{H}^+][\\text{S}^{2-}]}{[\\text{HS}^-]} = [\\text{S}^{2-}]$<br>
$$[\\text{S}^{2-}] = K_{a2} = 1.2 \\times 10^{-13}\\text{ M}$$</p>
<p><b>Case 2: In presence of $0.1\\text{ M HCl}$ (Common Ion Effect):</b><br>
$\\text{HCl}$ is strong acid: $[\\text{H}^+] \\approx 0.1\\text{ M}$.<br>
Step 1: $K_{a1} = \\frac{[\\text{H}^+][\\text{HS}^-]}{[\\text{H}_2\\text{S}]} = \\frac{0.1 \\times [\\text{HS}^-]}{0.1} = 9.1 \\times 10^{-8}$<br>
$$[\\text{HS}^-] = 9.1 \\times 10^{-8}\\text{ M}$$
(Greatly suppressed from $9.54 \\times 10^{-5}\\text{ M}$!).<br>
Step 2: Overall dissociation constant: $K = K_{a1} \\times K_{a2} = (9.1 \\times 10^{-8}) \\times (1.2 \\times 10^{-13}) = 1.092 \\times 10^{-20}$<br>
$$K = \\frac{[\\text{H}^+]^2 [\\text{S}^{2-}]}{[\\text{H}_2\\text{S}]} \\implies 1.092 \\times 10^{-20} = \\frac{(0.1)^2 [\\text{S}^{2-}]}{0.1} = 0.1 [\\text{S}^{2-}]$$
$$[\\text{S}^{2-}] = \\frac{1.092 \\times 10^{-20}}{0.1} = 1.09 \\times 10^{-19}\\text{ M}$$</p>
<p><b>Final Answer:</b> In pure $\\text{H}_2\\text{S}$: $[\\text{HS}^-] = 9.54 \\times 10^{-5}\\text{ M}$, $[\\text{S}^{2-}] = 1.2 \\times 10^{-13}\\text{ M}$. In $0.1\\text{ M HCl}$: $[\\text{HS}^-] = 9.1 \\times 10^{-8}\\text{ M}$, $[\\text{S}^{2-}] = 1.09 \\times 10^{-19}\\text{ M}$.</p>`,
      rubricRows: [
        { key: "Pure H2S: [HS-] = 9.54 x 10^-5 M and [S2-] = 1.2 x 10^-13 M", marks: "2 Marks" },
        { key: "In 0.1 M HCl: [HS-] = 9.1 x 10^-8 M by common ion suppression", marks: "1 Mark" },
        { key: "In 0.1 M HCl: [S2-] = 1.09 x 10^-19 M using overall K = Ka1 * Ka2", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q46",
      ncertRef: "6.46",
      marks: "3 Marks",
      questionHtml: "The ionization constant of acetic acid is $1.74 \\times 10^{-5}$. Calculate the degree of dissociation of acetic acid in its $0.05\\text{ M}$ solution. Calculate the concentration of acetate ion in the solution and its pH.",
      solutionStepsHtml: `<p><b>Step 1: Degree of dissociation ($\\alpha$):</b><br>
For weak electrolyte by Ostwald's dilution law:
$$\\alpha = \\sqrt{\\frac{K_a}{C}} = \\sqrt{\\frac{1.74 \\times 10^{-5}}{0.05}} = \\sqrt{3.48 \\times 10^{-4}} = 0.01865 \\approx 0.0187$$
(or $1.87\\%$ dissociation).</p>
<p><b>Step 2: Concentration of acetate ion $[\\text{CH}_3\\text{COO}^-]$:</b><br>
$$[\\text{CH}_3\\text{COO}^-] = C\\alpha = 0.05 \\times 0.01865 = 9.325 \\times 10^{-4}\\text{ M}$$</p>
<p><b>Step 3: Calculate pH:</b><br>
$$[\\text{H}^+] = [\\text{CH}_3\\text{COO}^-] = 9.33 \\times 10^{-4}\\text{ M}$$
$$\\text{pH} = -\\log(9.33 \\times 10^{-4}) = 4 - \\log(9.33) = 4 - 0.9699 = 3.0301 \\approx 3.03$$</p>
<p><b>Final Answer:</b> $\\alpha = 0.0187$, $[\\text{CH}_3\\text{COO}^-] = 9.33 \\times 10^{-4}\\text{ M}$, and $\\text{pH} = 3.03$.</p>`,
      rubricRows: [
        { key: "Ostwald formula alpha = sqrt(Ka / C) = 0.0187", marks: "1 Mark" },
        { key: "Acetate concentration [CH3COO-] = C*alpha = 9.33 x 10^-4 M", marks: "1 Mark" },
        { key: "Calculating pH = -log[H+] = 3.03", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q47",
      ncertRef: "6.47",
      marks: "3 Marks",
      questionHtml: "It has been found that the pH of a $0.01\\text{ M}$ solution of an organic acid is $4.15$. Calculate the concentration of the anion, the ionization constant of the acid and its $\\text{p}K_a$.",
      solutionStepsHtml: `<p><b>Step 1: Calculate $[\\text{H}^+]$ and Anion Concentration $[\\text{A}^-]$:</b><br>
$$\\text{pH} = 4.15 \\implies [\\text{H}^+] = \\text{antilog}(-4.15) = \\text{antilog}(\\bar{5}.85)$$
$$[\\text{H}^+] = 10^{0.85} \\times 10^{-5} = 7.08 \\times 10^{-5}\\text{ M}$$
Since $\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$, $[\\text{A}^-] = [\\text{H}^+] = 7.08 \\times 10^{-5}\\text{ M}$.</p>
<p><b>Step 2: Ionization constant $K_a$:</b><br>
$$K_a = \\frac{[\\text{H}^+][\\text{A}^-]}{[\\text{HA}]} = \\frac{(7.08 \\times 10^{-5})^2}{0.01 - 7.08 \\times 10^{-5}} \\approx \\frac{5.013 \\times 10^{-9}}{0.01} = 5.013 \\times 10^{-7}$$</p>
<p><b>Step 3: Calculate $\\text{p}K_a$:</b><br>
$$\\text{p}K_a = -\\log K_a = -\\log(5.013 \\times 10^{-7}) = 7 - \\log(5.013) = 7 - 0.7001 = 6.2999 \\approx 6.30$$</p>
<p><b>Final Answer:</b> $[\\text{A}^-] = 7.08 \\times 10^{-5}\\text{ M}$, $K_a = 5.01 \\times 10^{-7}$, and $\\text{p}K_a = 6.30$.</p>`,
      rubricRows: [
        { key: "Determining [H+] = [A-] = 7.08 x 10^-5 M from pH", marks: "1 Mark" },
        { key: "Calculating Ka = 5.01 x 10^-7", marks: "1 Mark" },
        { key: "Evaluating pKa = -log Ka = 6.30", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q48",
      ncertRef: "6.48",
      marks: "4 Marks",
      questionHtml: "Assuming complete dissociation, calculate the pH of the following solutions:<br>(a) $0.003\\text{ M HCl}$<br>(b) $0.005\\text{ M NaOH}$<br>(c) $0.002\\text{ M HBr}$<br>(d) $0.002\\text{ M KOH}$.",
      solutionStepsHtml: `<p><b>(a) $0.003\\text{ M HCl}$:</b><br>
$\\text{HCl}$ is strong acid $\\implies [\\text{H}^+] = 0.003\\text{ M} = 3 \\times 10^{-3}\\text{ M}$<br>
$$\\text{pH} = -\\log(3 \\times 10^{-3}) = 3 - \\log 3 = 3 - 0.4771 = 2.5229 \\approx 2.52$$</p>
<p><b>(b) $0.005\\text{ M NaOH}$:</b><br>
$\\text{NaOH}$ is strong base $\\implies [\\text{OH}^-] = 0.005\\text{ M} = 5 \\times 10^{-3}\\text{ M}$<br>
$$\\text{pOH} = -\\log(5 \\times 10^{-3}) = 3 - \\log 5 = 3 - 0.6990 = 2.301$$
$$\\text{pH} = 14 - \\text{pOH} = 14 - 2.301 = 11.699 \\approx 11.70$$</p>
<p><b>(c) $0.002\\text{ M HBr}$:</b><br>
$\\text{HBr}$ is strong acid $\\implies [\\text{H}^+] = 2 \\times 10^{-3}\\text{ M}$<br>
$$\\text{pH} = -\\log(2 \\times 10^{-3}) = 3 - \\log 2 = 3 - 0.3010 = 2.699 \\approx 2.70$$</p>
<p><b>(d) $0.002\\text{ M KOH}$:</b><br>
$\\text{KOH}$ is strong base $\\implies [\\text{OH}^-] = 2 \\times 10^{-3}\\text{ M}$<br>
$$\\text{pOH} = -\\log(2 \\times 10^{-3}) = 3 - 0.3010 = 2.699$$
$$\\text{pH} = 14 - 2.699 = 11.301 \\approx 11.30$$</p>`,
      rubricRows: [
        { key: "Part (a): pH of 0.003 M HCl = 2.52", marks: "1 Mark" },
        { key: "Part (b): pH of 0.005 M NaOH = 11.70", marks: "1 Mark" },
        { key: "Part (c): pH of 0.002 M HBr = 2.70", marks: "1 Mark" },
        { key: "Part (d): pH of 0.002 M KOH = 11.30", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q49",
      ncertRef: "6.49",
      marks: "4 Marks",
      questionHtml: "Calculate the pH of the following solutions:<br>(a) $2\\text{ g}$ of $\\text{TlOH}$ dissolved in water to give $2\\text{ L}$ of solution.<br>(b) $0.3\\text{ g}$ of $\\text{Ca}(\\text{OH})_2$ dissolved in water to give $500\\text{ mL}$ of solution.<br>(c) $0.3\\text{ g}$ of $\\text{NaOH}$ dissolved in water to give $200\\text{ mL}$ of solution.<br>(d) $1\\text{ mL}$ of $13.6\\text{ M HCl}$ is diluted with water to give $1\\text{ L}$ of solution.",
      solutionStepsHtml: `<p><b>(a) $2\\text{ g TlOH}$ in $2\\text{ L}$:</b><br>
Molar mass of $\\text{TlOH} = 204.4 + 16 + 1 = 221.4\\text{ g mol}^{-1}$.<br>
Molarity $= \\frac{2 / 221.4}{2} = \\frac{0.00903}{2} = 4.517 \\times 10^{-3}\\text{ M}$.<br>
$[\\text{OH}^-] = 4.517 \\times 10^{-3}\\text{ M} \\implies \\text{pOH} = 3 - \\log(4.517) = 3 - 0.6548 = 2.345$<br>
$$\\text{pH} = 14 - 2.345 = 11.655 \\approx 11.66$$</p>
<p><b>(b) $0.3\\text{ g Ca}(\\text{OH})_2$ in $500\\text{ mL}$ ($0.5\\text{ L}$):</b><br>
Molar mass of $\\text{Ca}(\\text{OH})_2 = 40 + 34 = 74\\text{ g mol}^{-1}$.<br>
Moles $= 0.3 / 74 = 4.054 \\times 10^{-3}\\text{ mol}$.<br>
Molarity $= \\frac{4.054 \\times 10^{-3}}{0.5} = 8.108 \\times 10^{-3}\\text{ M}$.<br>
Each $\\text{Ca}(\\text{OH})_2$ yields $2\\text{ OH}^-$:<br>
$[\\text{OH}^-] = 2 \\times 8.108 \\times 10^{-3} = 1.622 \\times 10^{-2}\\text{ M}$<br>
$$\\text{pOH} = 2 - \\log(1.622) = 2 - 0.210 = 1.79 \\implies \\text{pH} = 14 - 1.79 = 12.21$$</p>
<p><b>(c) $0.3\\text{ g NaOH}$ in $200\\text{ mL}$ ($0.2\\text{ L}$):</b><br>
Moles of $\\text{NaOH} = 0.3 / 40 = 0.0075\\text{ mol}$.<br>
$[\\text{OH}^-] = 0.0075 / 0.2 = 0.0375\\text{ M} = 3.75 \\times 10^{-2}\\text{ M}$<br>
$$\\text{pOH} = 2 - \\log(3.75) = 2 - 0.574 = 1.426 \\implies \\text{pH} = 14 - 1.426 = 12.574 \\approx 12.57$$</p>
<p><b>(d) $1\\text{ mL}$ of $13.6\\text{ M HCl}$ diluted to $1000\\text{ mL}$:</b><br>
$M_1 V_1 = M_2 V_2 \\implies (13.6)(1) = M_2(1000) \\implies M_2 = 0.0136\\text{ M}$<br>
$$[\\text{H}^+] = 0.0136\\text{ M} = 1.36 \\times 10^{-2}\\text{ M}$$
$$\\text{pH} = 2 - \\log(1.36) = 2 - 0.1335 = 1.8665 \\approx 1.87$$</p>`,
      rubricRows: [
        { key: "Part (a): TlOH molarity and pH = 11.66", marks: "1 Mark" },
        { key: "Part (b): Ca(OH)2 2:1 OH- ratio and pH = 12.21", marks: "1 Mark" },
        { key: "Part (c): NaOH molarity and pH = 12.57", marks: "1 Mark" },
        { key: "Part (d): Dilution formula M1V1=M2V2 and pH = 1.87", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q50",
      ncertRef: "6.50",
      marks: "3 Marks",
      questionHtml: "The degree of ionization of a $0.1\\text{ M}$ bromoacetic acid solution is $0.132$. Calculate the pH of the solution and the $\\text{p}K_a$ of bromoacetic acid.",
      solutionStepsHtml: `<p><b>Step 1: Calculate $[\\text{H}^+]$ and pH:</b><br>
Given $C = 0.1\\text{ M}$ and $\\alpha = 0.132$.<br>
$$[\\text{H}^+] = C \\alpha = 0.1 \\times 0.132 = 0.0132\\text{ M} = 1.32 \\times 10^{-2}\\text{ M}$$
$$\\text{pH} = -\\log(1.32 \\times 10^{-2}) = 2 - \\log(1.32) = 2 - 0.1206 = 1.8794 \\approx 1.88$$</p>
<p><b>Step 2: Calculate $K_a$ and $\\text{p}K_a$:</b><br>
Since $\\alpha = 0.132$ is not negligible compared to 1, use exact formula:
$$K_a = \\frac{C \\alpha^2}{1 - \\alpha} = \\frac{0.1 \\times (0.132)^2}{1 - 0.132} = \\frac{0.1 \\times 0.017424}{0.868} = \\frac{0.0017424}{0.868} \\approx 2.007 \\times 10^{-3}$$
$$\\text{p}K_a = -\\log(2.007 \\times 10^{-3}) = 3 - \\log(2.007) = 3 - 0.3025 = 2.6975 \\approx 2.70$$</p>
<p><b>Final Answer:</b> $\\text{pH} = 1.88$ and $\\text{p}K_a = 2.70$.</p>`,
      rubricRows: [
        { key: "Calculating [H+] = 0.0132 M and pH = 1.88", marks: "1.5 Marks" },
        { key: "Exact Ka formula Ka = C*alpha^2 / (1-alpha) and pKa = 2.70", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch6-q51",
      ncertRef: "6.51",
      marks: "3 Marks",
      questionHtml: "The pH of $0.005\\text{ M}$ codeine ($\\text{C}_{18}\\text{H}_{21}\\text{NO}_3$) solution is $9.95$. Calculate its ionization constant and $\\text{p}K_b$.",
      solutionStepsHtml: `<p><b>Step 1: Calculate $[\\text{OH}^-]$ from pH:</b><br>
$$\\text{pOH} = 14 - \\text{pH} = 14 - 9.95 = 4.05$$
$$[\\text{OH}^-] = \\text{antilog}(-4.05) = \\text{antilog}(\\bar{5}.95) = 10^{0.95} \\times 10^{-5} \\approx 8.913 \\times 10^{-5}\\text{ M}$$</p>
<p><b>Step 2: Base dissociation equilibrium:</b><br>
$$\\text{B} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{BH}^+ + \\text{OH}^-$$
$$[\\text{BH}^+] = [\\text{OH}^-] = 8.913 \\times 10^{-5}\\text{ M}, \\quad [\\text{B}] \\approx 0.005\\text{ M}$$
$$K_b = \\frac{[\\text{BH}^+][\\text{OH}^-]}{[\\text{B}]} = \\frac{(8.913 \\times 10^{-5})^2}{0.005} = \\frac{7.944 \\times 10^{-9}}{0.005} = 1.589 \\times 10^{-6}$$</p>
<p><b>Step 3: Calculate $\\text{p}K_b$:</b><br>
$$\\text{p}K_b = -\\log(1.589 \\times 10^{-6}) = 6 - \\log(1.589) = 6 - 0.2011 = 5.7989 \\approx 5.80$$</p>
<p><b>Final Answer:</b> $K_b = 1.59 \\times 10^{-6}$ and $\\text{p}K_b = 5.80$.</p>`,
      rubricRows: [
        { key: "Determining pOH = 4.05 and [OH-] = 8.91 x 10^-5 M", marks: "1 Mark" },
        { key: "Evaluating Kb = [OH-]^2 / C = 1.59 x 10^-6", marks: "1 Mark" },
        { key: "Calculating pKb = 5.80", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q52",
      ncertRef: "6.52",
      marks: "4 Marks",
      questionHtml: "What is the pH of $0.001\\text{ M}$ aniline solution? The ionization constant of aniline is $4.27 \\times 10^{-10}$. Calculate the degree of ionization of aniline in the solution. Also calculate the ionization constant of the conjugate acid of aniline.",
      solutionStepsHtml: `<p><b>Step 1: Degree of ionization ($\\alpha$):</b><br>
$$\\alpha = \\sqrt{\\frac{K_b}{C}} = \\sqrt{\\frac{4.27 \\times 10^{-10}}{0.001}} = \\sqrt{4.27 \\times 10^{-7}} = \\sqrt{42.7 \\times 10^{-8}} \\approx 6.535 \\times 10^{-4}$$
$$\\alpha = 6.54 \\times 10^{-4} \\text{ (or } 0.065\\%\\text{)}$$</p>
<p><b>Step 2: Concentration of $[\\text{OH}^-]$ and pH:</b><br>
$$[\\text{OH}^-] = C\\alpha = 0.001 \\times (6.535 \\times 10^{-4}) = 6.535 \\times 10^{-7}\\text{ M}$$
$$\\text{pOH} = -\\log(6.535 \\times 10^{-7}) = 7 - \\log(6.535) = 7 - 0.8152 = 6.1848$$
$$\\text{pH} = 14 - \\text{pOH} = 14 - 6.185 = 7.815 \\approx 7.82$$</p>
<p><b>Step 3: Ionization constant of conjugate acid ($K_a$):</b><br>
$$K_a = \\frac{K_w}{K_b} = \\frac{1.0 \\times 10^{-14}}{4.27 \\times 10^{-10}} = 2.342 \\times 10^{-5}$$</p>
<p><b>Final Answer:</b> $\\alpha = 6.54 \\times 10^{-4}$, $\\text{pH} = 7.82$, and $K_a = 2.34 \\times 10^{-5}$.</p>`,
      rubricRows: [
        { key: "Degree of ionization alpha = 6.54 x 10^-4", marks: "1 Mark" },
        { key: "Determining pOH and pH = 7.82", marks: "1.5 Marks" },
        { key: "Ionization constant of conjugate acid Ka = Kw / Kb = 2.34 x 10^-5", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch6-q53",
      ncertRef: "6.53",
      marks: "4 Marks",
      questionHtml: "Calculate the degree of ionization of $0.05\\text{ M}$ acetic acid if its $\\text{p}K_a$ value is $4.74$. How is the degree of dissociation affected when its solution also contains:<br>(a) $0.01\\text{ M}$<br>(b) $0.1\\text{ M}$<br>in $\\text{HCl}$?",
      solutionStepsHtml: `<p><b>Part 1: In pure $0.05\\text{ M}$ acetic acid:</b><br>
$$\\text{p}K_a = 4.74 \\implies K_a = \\text{antilog}(-4.74) = 1.82 \\times 10^{-5}$$
$$\\alpha_0 = \\sqrt{\\frac{K_a}{C}} = \\sqrt{\\frac{1.82 \\times 10^{-5}}{0.05}} = \\sqrt{3.64 \\times 10^{-4}} = 0.01908 \\approx 0.0191 \\text{ (or } 1.91\\%\\text{)}$$</p>
<p><b>Part 2: (a) In presence of $0.01\\text{ M HCl}$:</b><br>
$[\\text{H}^+] \\approx 0.01\\text{ M}$ from strong acid $\\text{HCl}$.<br>
$$K_a = \\frac{[\\text{H}^+][\\text{CH}_3\\text{COO}^-]}{[\\text{CH}_3\\text{COOH}]} = \\frac{(0.01) \\times (0.05 \\alpha_1)}{0.05} = 0.01 \\alpha_1$$
$$\\alpha_1 = \\frac{1.82 \\times 10^{-5}}{0.01} = 1.82 \\times 10^{-3} = 0.00182 \\text{ (or } 0.18\\%\\text{)}$$</p>
<p><b>Part 3: (b) In presence of $0.1\\text{ M HCl}$:</b><br>
$[\\text{H}^+] \\approx 0.1\\text{ M}$<br>
$$K_a = 0.1 \\alpha_2 \\implies \\alpha_2 = \\frac{1.82 \\times 10^{-5}}{0.1} = 1.82 \\times 10^{-4} = 0.000182 \\text{ (or } 0.018\\%\\text{)}$$</p>
<p><b>Conclusion:</b> The common ion $\\text{H}^+$ drastically suppresses the degree of dissociation of acetic acid by Le Chatelier's principle.</p>`,
      rubricRows: [
        { key: "Pure acid: Ka = 1.82 x 10^-5 and alpha0 = 0.0191 (1.91%)", marks: "1.5 Marks" },
        { key: "With 0.01 M HCl: alpha1 = 1.82 x 10^-3 (0.18%)", marks: "1.25 Marks" },
        { key: "With 0.1 M HCl: alpha2 = 1.82 x 10^-4 (0.018%)", marks: "1.25 Marks" }
      ]
    },
    {
      id: "c11c-ch6-q54",
      ncertRef: "6.54",
      marks: "3 Marks",
      questionHtml: "The ionization constant of dimethylamine is $5.4 \\times 10^{-4}$. Calculate its degree of ionization in its $0.02\\text{ M}$ solution. What percentage of dimethylamine is ionized if the solution is also $0.1\\text{ M}$ in $\\text{NaOH}$?",
      solutionStepsHtml: `<p><b>Case 1: In pure $0.02\\text{ M}$ dimethylamine:</b><br>
$$\\alpha_0 = \\sqrt{\\frac{K_b}{C}} = \\sqrt{\\frac{5.4 \\times 10^{-4}}{0.02}} = \\sqrt{0.027} = 0.1643 \\approx 0.164$$
Percentage ionization $= 0.164 \\times 100 = 16.4\\%$.</p>
<p><b>Case 2: In presence of $0.1\\text{ M NaOH}$ (Common Ion Effect of $\\text{OH}^-$):</b><br>
$$\\text{(CH}_3\\text{)}_2\\text{NH} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{(CH}_3\\text{)}_2\\text{NH}_2^+ + \\text{OH}^-$$
$[\\text{OH}^-] \\approx 0.1\\text{ M}$ from complete ionization of $\\text{NaOH}$.<br>
Let $\\alpha'$ be the degree of ionization in presence of $\\text{NaOH}$:<br>
$$[\\text{(CH}_3\\text{)}_2\\text{NH}_2^+] = C\\alpha' = 0.02\\alpha', \\quad [\\text{(CH}_3\\text{)}_2\\text{NH}] \\approx 0.02\\text{ M}$$
$$K_b = \\frac{[\\text{(CH}_3\\text{)}_2\\text{NH}_2^+][\\text{OH}^-]}{[\\text{(CH}_3\\text{)}_2\\text{NH}]} = \\frac{(0.02\\alpha') \\times (0.1)}{0.02} = 0.1 \\alpha'$$
$$0.1 \\alpha' = 5.4 \\times 10^{-4} \\implies \\alpha' = \\frac{5.4 \\times 10^{-4}}{0.1} = 5.4 \\times 10^{-3}$$
$$\\text{Percentage ionized} = 5.4 \\times 10^{-3} \\times 100 = 0.54\\%$$</p>
<p><b>Final Answer:</b> Pure solution: $16.4\\%$ ionized; in $0.1\\text{ M NaOH}$: $0.54\\%$ ionized.</p>`,
      rubricRows: [
        { key: "Pure dimethylamine alpha = sqrt(Kb/C) = 0.164 (16.4%)", marks: "1.5 Marks" },
        { key: "With 0.1 M NaOH: alpha' = 5.4 x 10^-3 and percentage = 0.54%", marks: "1.5 Marks" }
      ]
    }
  ];
}

module.exports = { getPart2Questions };
