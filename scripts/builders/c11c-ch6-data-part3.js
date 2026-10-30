/**
 * NCERT Class 11 Chemistry Chapter 6: Equilibrium - Part 3 Data (Q6.55 to Q6.73)
 * Biological fluids pH, Salt Hydrolysis, Neutrality, Acid-Base Mixtures, Solubility Product (Ksp) & Selective Precipitation
 */

function getPart3Questions() {
  return [
    {
      id: "c11c-ch6-q55",
      ncertRef: "6.55",
      marks: "4 Marks",
      questionHtml: "Calculate the hydrogen ion concentration in the following biological fluids whose pH are given below:<br>(a) Human muscle-fluid, $6.83$<br>(b) Human stomach fluid, $1.2$<br>(c) Human blood, $7.38$<br>(d) Human saliva, $6.4$.",
      solutionStepsHtml: `<p><b>Formula:</b> $[\\text{H}^+] = \\text{antilog}(-\\text{pH})$</p>
<p><b>(a) Muscle-fluid ($\\text{pH} = 6.83$):</b><br>
$$[\\text{H}^+] = \\text{antilog}(-6.83) = \\text{antilog}(\\bar{7}.17) = 10^{0.17} \\times 10^{-7} \\approx 1.48 \\times 10^{-7}\\text{ M}$$</p>
<p><b>(b) Stomach fluid ($\\text{pH} = 1.2$):</b><br>
$$[\\text{H}^+] = \\text{antilog}(-1.2) = \\text{antilog}(\\bar{2}.80) = 10^{0.80} \\times 10^{-2} \\approx 6.31 \\times 10^{-2}\\text{ M} = 0.063\\text{ M}$$</p>
<p><b>(c) Blood ($\\text{pH} = 7.38$):</b><br>
$$[\\text{H}^+] = \\text{antilog}(-7.38) = \\text{antilog}(\\bar{8}.62) = 10^{0.62} \\times 10^{-8} \\approx 4.17 \\times 10^{-8}\\text{ M}$$</p>
<p><b>(d) Saliva ($\\text{pH} = 6.4$):</b><br>
$$[\\text{H}^+] = \\text{antilog}(-6.4) = \\text{antilog}(\\bar{7}.60) = 10^{0.60} \\times 10^{-7} \\approx 3.98 \\times 10^{-7}\\text{ M}$$</p>`,
      rubricRows: [
        { key: "Part (a): Muscle-fluid [H+] = 1.48 x 10^-7 M", marks: "1 Mark" },
        { key: "Part (b): Stomach fluid [H+] = 6.31 x 10^-2 M", marks: "1 Mark" },
        { key: "Part (c): Blood [H+] = 4.17 x 10^-8 M", marks: "1 Mark" },
        { key: "Part (d): Saliva [H+] = 3.98 x 10^-7 M", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q56",
      ncertRef: "6.56",
      marks: "5 Marks",
      questionHtml: "The pH of milk, black coffee, tomato juice, lemon juice and egg white are $6.8$, $5.0$, $4.2$, $2.2$ and $7.8$ respectively. Calculate corresponding hydrogen ion concentration in each.",
      solutionStepsHtml: `<p><b>Formula:</b> $[\\text{H}^+] = \\text{antilog}(-\\text{pH})$</p>
<p>1. <b>Milk ($\\text{pH} = 6.8$):</b><br>
$$[\\text{H}^+] = \\text{antilog}(-6.8) = \\text{antilog}(\\bar{7}.2) = 10^{0.2} \\times 10^{-7} \\approx 1.58 \\times 10^{-7}\\text{ M}$$</p>
<p>2. <b>Black Coffee ($\\text{pH} = 5.0$):</b><br>
$$[\\text{H}^+] = 10^{-5.0} = 1.0 \\times 10^{-5}\\text{ M}$$</p>
<p>3. <b>Tomato Juice ($\\text{pH} = 4.2$):</b><br>
$$[\\text{H}^+] = \\text{antilog}(-4.2) = \\text{antilog}(\\bar{5}.8) = 10^{0.8} \\times 10^{-5} \\approx 6.31 \\times 10^{-5}\\text{ M}$$</p>
<p>4. <b>Lemon Juice ($\\text{pH} = 2.2$):</b><br>
$$[\\text{H}^+] = \\text{antilog}(-2.2) = \\text{antilog}(\\bar{3}.8) = 10^{0.8} \\times 10^{-3} \\approx 6.31 \\times 10^{-3}\\text{ M}$$</p>
<p>5. <b>Egg White ($\\text{pH} = 7.8$):</b><br>
$$[\\text{H}^+] = \\text{antilog}(-7.8) = \\text{antilog}(\\bar{8}.2) = 10^{0.2} \\times 10^{-8} \\approx 1.58 \\times 10^{-8}\\text{ M}$$</p>`,
      rubricRows: [
        { key: "Milk: [H+] = 1.58 x 10^-7 M", marks: "1 Mark" },
        { key: "Black coffee: [H+] = 1.0 x 10^-5 M", marks: "1 Mark" },
        { key: "Tomato juice: [H+] = 6.31 x 10^-5 M", marks: "1 Mark" },
        { key: "Lemon juice: [H+] = 6.31 x 10^-3 M", marks: "1 Mark" },
        { key: "Egg white: [H+] = 1.58 x 10^-8 M", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q57",
      ncertRef: "6.57",
      marks: "4 Marks",
      questionHtml: "If $0.561\\text{ g}$ of $\\text{KOH}$ is dissolved in water to give $200\\text{ mL}$ of solution at $298\\text{ K}$. Calculate the concentrations of potassium, hydrogen and hydroxyl ions. What is its pH?",
      solutionStepsHtml: `<p><b>Step 1: Calculate molar concentration of $\\text{KOH}$:</b><br>
Molar mass of $\\text{KOH} = 39.1 + 16 + 1 = 56.1\\text{ g mol}^{-1}$.<br>
$$\\text{Moles of KOH} = \\frac{0.561\\text{ g}}{56.1\\text{ g mol}^{-1}} = 0.01\\text{ mol}$$
$$\\text{Molarity} = \\frac{0.01\\text{ mol}}{200 / 1000\\text{ L}} = \\frac{0.01}{0.2} = 0.05\\text{ M} = 5.0 \\times 10^{-2}\\text{ M}$$</p>
<p><b>Step 2: Concentrations of $\\text{K}^+$ and $\\text{OH}^-$:</b><br>
$\\text{KOH}$ dissociates completely in water:<br>
$$[\\text{K}^+] = 0.05\\text{ M} = 5.0 \\times 10^{-2}\\text{ M}$$
$$[\\text{OH}^-] = 0.05\\text{ M} = 5.0 \\times 10^{-2}\\text{ M}$$</p>
<p><b>Step 3: Concentration of $\\text{H}^+$:</b><br>
$$[\\text{H}^+][\\text{OH}^-] = K_w = 1.0 \\times 10^{-14}$$
$$[\\text{H}^+] = \\frac{1.0 \\times 10^{-14}}{0.05} = 2.0 \\times 10^{-13}\\text{ M}$$</p>
<p><b>Step 4: Calculate pH:</b><br>
$$\\text{pH} = -\\log(2.0 \\times 10^{-13}) = 13 - \\log 2 = 13 - 0.3010 = 12.699 \\approx 12.70$$</p>
<p><b>Final Answer:</b> $[\\text{K}^+] = 0.05\\text{ M}$, $[\\text{OH}^-] = 0.05\\text{ M}$, $[\\text{H}^+] = 2.0 \\times 10^{-13}\\text{ M}$, and $\\text{pH} = 12.70$.</p>`,
      rubricRows: [
        { key: "Determining molarity of KOH = 0.05 M", marks: "1 Mark" },
        { key: "[K+] = 0.05 M and [OH-] = 0.05 M", marks: "1 Mark" },
        { key: "Computing [H+] = 2.0 x 10^-13 M from Kw", marks: "1 Mark" },
        { key: "Evaluating pH = 12.70", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q58",
      ncertRef: "6.58",
      marks: "4 Marks",
      questionHtml: "The solubility of $\\text{Sr}(\\text{OH})_2$ at $298\\text{ K}$ is $19.23\\text{ g L}^{-1}$ of solution. Calculate the concentrations of strontium and hydroxyl ions and the pH of the solution.",
      solutionStepsHtml: `<p><b>Step 1: Molar solubility of $\\text{Sr}(\\text{OH})_2$:</b><br>
Molar mass of $\\text{Sr}(\\text{OH})_2 = 87.6 + 2(17) = 121.6\\text{ g mol}^{-1}$.<br>
$$S = \\frac{19.23\\text{ g L}^{-1}}{121.6\\text{ g mol}^{-1}} \\approx 0.1581\\text{ mol L}^{-1}$$</p>
<p><b>Step 2: Concentrations of $[\\text{Sr}^{2+}]$ and $[\\text{OH}^-]$:</b><br>
$$\\text{Sr}(\\text{OH})_2(\\text{aq}) \\rightarrow \\text{Sr}^{2+}(\\text{aq}) + 2\\text{OH}^-(\\text{aq})$$
$$[\\text{Sr}^{2+}] = S = 0.1581\\text{ M} \\approx 0.158\\text{ M}$$
$$[\\text{OH}^-] = 2S = 2 \\times 0.1581 = 0.3162\\text{ M} \\approx 0.316\\text{ M}$$</p>
<p><b>Step 3: Calculate $\\text{pOH}$ and $\\text{pH}$:</b><br>
$$\\text{pOH} = -\\log(0.3162) = -(-0.500) = 0.500$$
$$\\text{pH} = 14 - \\text{pOH} = 14 - 0.500 = 13.50$$</p>
<p><b>Final Answer:</b> $[\\text{Sr}^{2+}] = 0.158\\text{ M}$, $[\\text{OH}^-] = 0.316\\text{ M}$, and $\\text{pH} = 13.50$.</p>`,
      rubricRows: [
        { key: "Molar solubility calculation S = 0.158 mol/L", marks: "1 Mark" },
        { key: "[Sr2+] = 0.158 M and [OH-] = 2S = 0.316 M", marks: "1.5 Marks" },
        { key: "Determining pOH = 0.50 and pH = 13.50", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch6-q59",
      ncertRef: "6.59",
      marks: "4 Marks",
      questionHtml: "The ionization constant of propanoic acid is $1.32 \\times 10^{-5}$. Calculate the degree of ionization of the acid in its $0.05\\text{ M}$ solution and also its pH. What will be its degree of ionization if the solution is $0.01\\text{ M}$ in $\\text{HCl}$?",
      solutionStepsHtml: `<p><b>Part 1: In pure $0.05\\text{ M}$ propanoic acid:</b><br>
$$\\alpha_0 = \\sqrt{\\frac{K_a}{C}} = \\sqrt{\\frac{1.32 \\times 10^{-5}}{0.05}} = \\sqrt{2.64 \\times 10^{-4}} = 0.01625 \\approx 0.0163$$
Degree of ionization $= 1.63\\%$.<br>
$$[\\text{H}^+] = C\\alpha_0 = 0.05 \\times 0.01625 = 8.125 \\times 10^{-4}\\text{ M}$$
$$\\text{pH} = -\\log(8.125 \\times 10^{-4}) = 4 - \\log(8.125) = 4 - 0.9098 = 3.0902 \\approx 3.09$$</p>
<p><b>Part 2: In presence of $0.01\\text{ M HCl}$ (Common Ion Effect):</b><br>
$[\\text{H}^+] \\approx 0.01\\text{ M}$ from $\\text{HCl}$.<br>
Let $\\alpha'$ be the degree of ionization in presence of $\\text{HCl}$:<br>
$$[\\text{C}_2\\text{H}_5\\text{COO}^-] = C\\alpha' = 0.05 \\alpha', \\quad [\\text{C}_2\\text{H}_5\\text{COOH}] \\approx 0.05\\text{ M}$$
$$K_a = \\frac{[\\text{H}^+][\\text{C}_2\\text{H}_5\\text{COO}^-]}{[\\text{C}_2\\text{H}_5\\text{COOH}]} = \\frac{(0.01) \\times (0.05 \\alpha')}{0.05} = 0.01 \\alpha'$$
$$0.01 \\alpha' = 1.32 \\times 10^{-5} \\implies \\alpha' = \\frac{1.32 \\times 10^{-5}}{0.01} = 1.32 \\times 10^{-3} = 0.00132$$
Percentage ionization $= 0.132\\%$ (suppressed more than 12-fold!).</p>
<p><b>Final Answer:</b> Pure solution: $\\alpha = 0.0163$ ($1.63\\%$), $\\text{pH} = 3.09$. In $0.01\\text{ M HCl}$: $\\alpha' = 1.32 \\times 10^{-3}$ ($0.132\\%$).</p>`,
      rubricRows: [
        { key: "Pure acid alpha0 = 0.0163 and [H+] = 8.13 x 10^-4 M", marks: "1.5 Marks" },
        { key: "pH evaluation = 3.09", marks: "1 Mark" },
        { key: "Common ion alpha' = 1.32 x 10^-3 in 0.01 M HCl", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch6-q60",
      ncertRef: "6.60",
      marks: "3 Marks",
      questionHtml: "The pH of $0.1\\text{ M}$ solution of cyanic acid ($\\text{HOCN}$) is $2.34$. Calculate the ionization constant of the acid and its degree of ionization in the solution.",
      solutionStepsHtml: `<p><b>Step 1: Calculate $[\\text{H}^+]$ from pH:</b><br>
$$\\text{pH} = 2.34 \\implies [\\text{H}^+] = \\text{antilog}(-2.34) = \\text{antilog}(\\bar{3}.66) = 10^{0.66} \\times 10^{-3} \\approx 4.571 \\times 10^{-3}\\text{ M}$$</p>
<p><b>Step 2: Degree of ionization ($\\alpha$):</b><br>
$$\\alpha = \\frac{[\\text{H}^+]}{C} = \\frac{4.571 \\times 10^{-3}}{0.1} = 0.04571 \\approx 0.0457 \\text{ (or } 4.57\\%\\text{)}$$</p>
<p><b>Step 3: Ionization constant ($K_a$):</b><br>
$$K_a = \\frac{[\\text{H}^+][\\text{OCN}^-]}{[\\text{HOCN}]} = \\frac{(4.571 \\times 10^{-3})^2}{0.1 - 4.571 \\times 10^{-3}} = \\frac{2.089 \\times 10^{-5}}{0.09543} \\approx 2.189 \\times 10^{-4}$$</p>
<p><b>Final Answer:</b> $\\alpha = 0.0457$ ($4.57\\%$) and $K_a = 2.19 \\times 10^{-4}$.</p>`,
      rubricRows: [
        { key: "Finding [H+] = 4.57 x 10^-3 M from pH", marks: "1 Mark" },
        { key: "Evaluating alpha = [H+]/C = 0.0457", marks: "1 Mark" },
        { key: "Computing Ka = 2.19 x 10^-4", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q61",
      ncertRef: "6.61",
      marks: "4 Marks",
      questionHtml: "The ionization constant of nitrous acid is $4.5 \\times 10^{-4}$. Calculate the pH of $0.04\\text{ M}$ sodium nitrite solution and also its degree of hydrolysis.",
      solutionStepsHtml: `<p><b>Nature of Salt:</b><br>
$\\text{NaNO}_2$ is a salt of a weak acid ($\\text{HNO}_2$) and a strong base ($\\text{NaOH}$). The nitrite ion hydrolyses:<br>
$$\\text{NO}_2^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HNO}_2 + \\text{OH}^-$$</p>
<p><b>Step 1: Hydrolysis constant ($K_h$):</b><br>
$$K_h = \\frac{K_w}{K_a} = \\frac{1.0 \\times 10^{-14}}{4.5 \\times 10^{-4}} = 2.222 \\times 10^{-11}$$</p>
<p><b>Step 2: Degree of hydrolysis ($h$):</b><br>
$$h = \\sqrt{\\frac{K_h}{C}} = \\sqrt{\\frac{2.222 \\times 10^{-11}}{0.04}} = \\sqrt{5.556 \\times 10^{-10}} \\approx 2.357 \\times 10^{-5}$$
Degree of hydrolysis $= 2.36 \\times 10^{-5}$ (or $2.36 \\times 10^{-3}\\%$).</p>
<p><b>Step 3: Calculate $[\\text{OH}^-]$ and pH:</b><br>
$$[\\text{OH}^-] = Ch = 0.04 \\times (2.357 \\times 10^{-5}) = 9.428 \\times 10^{-7}\\text{ M}$$
$$\\text{pOH} = -\\log(9.428 \\times 10^{-7}) = 7 - \\log(9.428) = 7 - 0.9744 = 6.0256$$
$$\\text{pH} = 14 - \\text{pOH} = 14 - 6.026 = 7.974 \\approx 7.97$$
<i>(Alternatively using standard formula: $\\text{pH} = 7 + \\frac{1}{2}(\\text{p}K_a + \\log C) = 7 + \\frac{1}{2}(3.347 - 1.398) = 7 + 0.974 = 7.97$).</i></p>
<p><b>Final Answer:</b> Degree of hydrolysis $h = 2.36 \\times 10^{-5}$ and $\\text{pH} = 7.97$ (slightly alkaline as expected).</p>`,
      rubricRows: [
        { key: "Determining Kh = Kw / Ka = 2.22 x 10^-11", marks: "1 Mark" },
        { key: "Evaluating degree of hydrolysis h = sqrt(Kh / C) = 2.36 x 10^-5", marks: "1.5 Marks" },
        { key: "Calculating pH = 7.97", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch6-q62",
      ncertRef: "6.62",
      marks: "4 Marks",
      questionHtml: "A $0.02\\text{ M}$ solution of pyridinium hydrochloride has $\\text{pH} = 3.44$. Calculate the ionization constant of pyridine.",
      solutionStepsHtml: `<p><b>Nature of Salt:</b><br>
Pyridinium hydrochloride ($\\text{C}_5\\text{H}_5\\text{NH}^+\\text{Cl}^-$) is a salt of a weak base (pyridine, $\\text{C}_5\\text{H}_5\\text{N}$) and a strong acid ($\\text{HCl}$). The cation hydrolyses:<br>
$$\\text{C}_5\\text{H}_5\\text{NH}^+ + \\text{H}_2\\text{O} \\rightleftharpoons \\text{C}_5\\text{H}_5\\text{N} + \\text{H}_3\\text{O}^+$$</p>
<p><b>Step 1: Formula for pH of weak base - strong acid salt:</b><br>
$$\\text{pH} = 7 - \\frac{1}{2}(\\text{p}K_b + \\log C)$$</p>
<p><b>Step 2: Substitute given values:</b><br>
$$\\text{pH} = 3.44, \\quad C = 0.02\\text{ M} \\implies \\log C = \\log(2 \\times 10^{-2}) = 0.3010 - 2 = -1.699$$
$$3.44 = 7 - \\frac{1}{2}(\\text{p}K_b - 1.699)$$
$$\\frac{1}{2}(\\text{p}K_b - 1.699) = 7 - 3.44 = 3.56$$
$$\\text{p}K_b - 1.699 = 2 \\times 3.56 = 7.12$$
$$\\text{p}K_b = 7.12 + 1.699 = 8.819 \\approx 8.82$$</p>
<p><b>Step 3: Calculate $K_b$:</b><br>
$$K_b = \\text{antilog}(-\\text{p}K_b) = \\text{antilog}(-8.82) = \\text{antilog}(\\bar{9}.18) = 10^{0.18} \\times 10^{-9} \\approx 1.514 \\times 10^{-9}$$</p>
<p><b>Final Answer:</b> The ionization constant of pyridine is $K_b = 1.51 \\times 10^{-9}$.</p>`,
      rubricRows: [
        { key: "Formula pH = 7 - 1/2(pKb + log C) for weak base-strong acid salt", marks: "1.5 Marks" },
        { key: "Solving for pKb = 8.82", marks: "1.5 Marks" },
        { key: "Evaluating Kb = antilog(-8.82) = 1.51 x 10^-9", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q63",
      ncertRef: "6.63",
      marks: "3 Marks",
      questionHtml: "Predict if the solutions of the following salts are neutral, acidic or basic:<br>$\\text{NaCl}$, $\\text{KBr}$, $\\text{NaCN}$, $\\text{NH}_4\\text{NO}_3$, $\\text{NaNO}_2$, $\\text{KF}$.",
      solutionStepsHtml: `<p>Aqueous behavior of salts is determined by hydrolysis of their constituent ions:</p>
<p>1. <b>$\\text{NaCl}$:</b> Salt of Strong Acid ($\\text{HCl}$) + Strong Base ($\\text{NaOH}$). Neither ion undergoes hydrolysis $\\implies$ <b>Neutral ($\text{pH} = 7$)</b>.</p>
<p>2. <b>$\\text{KBr}$:</b> Salt of Strong Acid ($\\text{HBr}$) + Strong Base ($\\text{KOH}$). No hydrolysis $\\implies$ <b>Neutral ($\text{pH} = 7$)</b>.</p>
<p>3. <b>$\\text{NaCN}$:</b> Salt of Weak Acid ($\\text{HCN}$) + Strong Base ($\\text{NaOH}$). Anion $\\text{CN}^-$ hydrolyses to produce $\\text{OH}^-$ ions $\\implies$ <b>Basic ($\text{pH} > 7$)</b>.</p>
<p>4. <b>$\\text{NH}_4\\text{NO}_3$:</b> Salt of Strong Acid ($\\text{HNO}_3$) + Weak Base ($\\text{NH}_4\\text{OH}$). Cation $\\text{NH}_4^+$ hydrolyses to produce $\\text{H}_3\\text{O}^+$ ions $\\implies$ <b>Acidic ($\text{pH} < 7$)</b>.</p>
<p>5. <b>$\\text{NaNO}_2$:</b> Salt of Weak Acid ($\\text{HNO}_2$) + Strong Base ($\\text{NaOH}$). Anion $\\text{NO}_2^-$ hydrolyses $\\implies$ <b>Basic ($\text{pH} > 7$)</b>.</p>
<p>6. <b>$\\text{KF}$:</b> Salt of Weak Acid ($\\text{HF}$) + Strong Base ($\\text{KOH}$). Anion $\\text{F}^-$ hydrolyses $\\implies$ <b>Basic ($\text{pH} > 7$)</b>.</p>`,
      rubricRows: [
        { key: "NaCl and KBr: Neutral identified with strong acid-base reasoning", marks: "1 Mark" },
        { key: "NaCN, NaNO2, KF: Basic identified with anion hydrolysis reasoning", marks: "1 Mark" },
        { key: "NH4NO3: Acidic identified with cation hydrolysis reasoning", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q64",
      ncertRef: "6.64",
      marks: "4 Marks",
      questionHtml: "The ionization constant of chloroacetic acid is $1.35 \\times 10^{-3}$. What will be the pH of $0.1\\text{ M}$ acid and its $0.1\\text{ M}$ sodium salt solution?",
      solutionStepsHtml: `<p><b>Part 1: pH of $0.1\\text{ M}$ Chloroacetic Acid ($\\text{ClCH}_2\\text{COOH}$):</b><br>
Here $K_a = 1.35 \\times 10^{-3}$ and $C = 0.1\\text{ M}$.<br>
$$\\alpha = \\sqrt{\\frac{K_a}{C}} = \\sqrt{\\frac{1.35 \\times 10^{-3}}{0.1}} = \\sqrt{1.35 \\times 10^{-2}} \\approx 0.1162$$
Since $\\alpha > 0.05$ ($11.6\\%$), we use the quadratic formula for precision:<br>
$$K_a = \\frac{C\\alpha^2}{1 - \\alpha} \\implies 1.35 \\times 10^{-3} = \\frac{0.1\\alpha^2}{1 - \\alpha}$$
$$0.1\\alpha^2 + 1.35 \\times 10^{-3}\\alpha - 1.35 \\times 10^{-3} = 0$$
$$\\alpha^2 + 0.0135\\alpha - 0.0135 = 0$$
$$\\alpha = \\frac{-0.0135 + \\sqrt{(0.0135)^2 + 4(0.0135)}}{2} = \\frac{-0.0135 + \\sqrt{0.05418}}{2} = \\frac{-0.0135 + 0.2328}{2} = 0.10965$$
$$[\\text{H}^+] = C\\alpha = 0.1 \\times 0.10965 = 1.0965 \\times 10^{-2}\\text{ M}$$
$$\\text{pH} = -\\log(1.0965 \\times 10^{-2}) = 2 - 0.040 = 1.96$$</p>
<p><b>Part 2: pH of $0.1\\text{ M}$ Sodium Chloroacetate ($\\text{ClCH}_2\\text{COONa}$):</b><br>
Salt of weak acid and strong base:
$$\\text{pH} = 7 + \\frac{1}{2}(\\text{p}K_a + \\log C)$$
$$\\text{p}K_a = -\\log(1.35 \\times 10^{-3}) = 3 - \\log(1.35) = 3 - 0.1303 = 2.8697$$
$$\\log C = \\log(0.1) = -1.0$$
$$\\text{pH} = 7 + \\frac{1}{2}(2.8697 - 1.0) = 7 + \\frac{1}{2}(1.8697) = 7 + 0.9348 = 7.9348 \\approx 7.93$$</p>
<p><b>Final Answer:</b> Acid pH $= 1.96$; Sodium salt pH $= 7.93$.</p>`,
      rubricRows: [
        { key: "Part 1: Acid [H+] quadratic determination and pH = 1.96", marks: "2 Marks" },
        { key: "Part 2: Salt pKa calculation = 2.87", marks: "1 Mark" },
        { key: "Salt hydrolysis pH formula and result = 7.93", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q65",
      ncertRef: "6.65",
      marks: "3 Marks",
      questionHtml: "Ionic product of water at $310\\text{ K}$ is $2.7 \\times 10^{-14}$. What is the pH of neutral water at this temperature?",
      solutionStepsHtml: `<p><b>Definition of Neutral Water:</b><br>
At any temperature, water is neutral when $[\\text{H}^+] = [\\text{OH}^-]$.</p>
<p><b>Step 1: Calculate $[\\text{H}^+]$:</b><br>
$$K_w = [\\text{H}^+][\\text{OH}^-] = [\\text{H}^+]^2$$
Given $K_w = 2.7 \\times 10^{-14}$ at $310\\text{ K}$ ($37^\\circ\\text{C}$):
$$[\\text{H}^+] = \\sqrt{K_w} = \\sqrt{2.7 \\times 10^{-14}} = \\sqrt{2.7} \\times 10^{-7} \\approx 1.643 \\times 10^{-7}\\text{ M}$$</p>
<p><b>Step 2: Calculate pH:</b><br>
$$\\text{pH} = -\\log[\\text{H}^+] = -\\log(1.643 \\times 10^{-7}) = 7 - \\log(1.643) = 7 - 0.2156 = 6.7844 \\approx 6.78$$</p>
<p><b>Final Answer:</b> The pH of neutral water at $310\\text{ K}$ is <b>$6.78$</b> (at $310\\text{ K}$, a solution with $\\text{pH} = 6.78$ is neutral because $[\\text{H}^+] = [\\text{OH}^-]$).</p>`,
      rubricRows: [
        { key: "Condition for neutral water [H+] = [OH-] = sqrt(Kw)", marks: "1 Mark" },
        { key: "Computing [H+] = 1.64 x 10^-7 M", marks: "1 Mark" },
        { key: "Evaluating pH = 6.78 and explaining neutrality criterion", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q66",
      ncertRef: "6.66",
      marks: "4 Marks",
      questionHtml: "Calculate the pH of the resultant mixtures:<br>(a) $10\\text{ mL}$ of $0.2\\text{ M Ca}(\\text{OH})_2 + 25\\text{ mL}$ of $0.1\\text{ M HCl}$<br>(b) $10\\text{ mL}$ of $0.01\\text{ M H}_2\\text{SO}_4 + 10\\text{ mL}$ of $0.01\\text{ M Ca}(\\text{OH})_2$<br>(c) $10\\text{ mL}$ of $0.1\\text{ M H}_2\\text{SO}_4 + 10\\text{ mL}$ of $0.1\\text{ M KOH}$.",
      solutionStepsHtml: `<p><b>(a) $10\\text{ mL of } 0.2\\text{ M Ca}(\\text{OH})_2 + 25\\text{ mL of } 0.1\\text{ M HCl}$:</b><br>
Total Volume $= 10 + 25 = 35\\text{ mL}$.<br>
Millimoles of $\\text{OH}^- = 10 \\times 0.2 \\times 2 = 4.0\\text{ mmol}$.<br>
Millimoles of $\\text{H}^+ = 25 \\times 0.1 = 2.5\\text{ mmol}$.<br>
Excess $\\text{OH}^- = 4.0 - 2.5 = 1.5\\text{ mmol}$.<br>
$$[\\text{OH}^-] = \\frac{1.5\\text{ mmol}}{35\\text{ mL}} = 0.04286\\text{ M} \\implies \\text{pOH} = -\\log(0.04286) = 1.368$$
$$\\text{pH} = 14 - 1.368 = 12.632 \\approx 12.63$$</p>
<p><b>(b) $10\\text{ mL of } 0.01\\text{ M H}_2\\text{SO}_4 + 10\\text{ mL of } 0.01\\text{ M Ca}(\\text{OH})_2$:</b><br>
Millimoles of $\\text{H}^+ = 10 \\times 0.01 \\times 2 = 0.2\\text{ mmol}$.<br>
Millimoles of $\\text{OH}^- = 10 \\times 0.01 \\times 2 = 0.2\\text{ mmol}$.<br>
Both neutralize each other completely: Excess $= 0$. Solution is <b>Neutral $\\implies \\text{pH} = 7.0$</b>.</p>
<p><b>(c) $10\\text{ mL of } 0.1\\text{ M H}_2\\text{SO}_4 + 10\\text{ mL of } 0.1\\text{ M KOH}$:</b><br>
Total Volume $= 20\\text{ mL}$.<br>
Millimoles of $\\text{H}^+ = 10 \\times 0.1 \\times 2 = 2.0\\text{ mmol}$.<br>
Millimoles of $\\text{OH}^- = 10 \\times 0.1 = 1.0\\text{ mmol}$.<br>
Excess $\\text{H}^+ = 2.0 - 1.0 = 1.0\\text{ mmol}$.<br>
$$[\\text{H}^+] = \\frac{1.0\\text{ mmol}}{20\\text{ mL}} = 0.05\\text{ M} = 5.0 \\times 10^{-2}\\text{ M}$$
$$\\text{pH} = -\\log(5.0 \\times 10^{-2}) = 2 - \\log 5 = 2 - 0.6990 = 1.301 \\approx 1.30$$</p>`,
      rubricRows: [
        { key: "Part (a): Excess OH- calculation and pH = 12.63", marks: "1.5 Marks" },
        { key: "Part (b): Equimolar neutralization yielding pH = 7.0", marks: "1 Mark" },
        { key: "Part (c): Excess H+ calculation and pH = 1.30", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch6-q67",
      ncertRef: "6.67",
      marks: "5 Marks",
      questionHtml: "Determine the solubilities of silver chromate, barium chromate, ferric hydroxide, lead chloride and mercurous iodide at $298\\text{ K}$ from their solubility products:<br>$K_{sp}(\\text{Ag}_2\\text{CrO}_4) = 1.1 \\times 10^{-12}$,<br>$K_{sp}(\\text{BaCrO}_4) = 1.2 \\times 10^{-10}$,<br>$K_{sp}(\\text{Fe}(\\text{OH})_3) = 1.0 \\times 10^{-38}$,<br>$K_{sp}(\\text{PbCl}_2) = 1.6 \\times 10^{-5}$,<br>$K_{sp}(\\text{Hg}_2\\text{I}_2) = 4.5 \\times 10^{-29}$.<br>Determine also the molarities of individual ions.",
      solutionStepsHtml: `<p><b>1. Silver Chromate ($\\text{Ag}_2\\text{CrO}_4 \\rightleftharpoons 2\\text{Ag}^+ + \\text{CrO}_4^{2-}$):</b><br>
$$K_{sp} = (2S)^2(S) = 4S^3 = 1.1 \\times 10^{-12}$$
$$S = \\left(\\frac{1.1 \\times 10^{-12}}{4}\\right)^{1/3} = (2.75 \\times 10^{-13})^{1/3} = 6.50 \\times 10^{-5}\\text{ M}$$
$[\\text{Ag}^+] = 2S = 1.30 \\times 10^{-4}\\text{ M}, \\quad [\\text{CrO}_4^{2-}] = S = 6.50 \\times 10^{-5}\\text{ M}$.</p>
<p><b>2. Barium Chromate ($\\text{BaCrO}_4 \\rightleftharpoons \\text{Ba}^{2+} + \\text{CrO}_4^{2-}$):</b><br>
$$K_{sp} = S^2 = 1.2 \\times 10^{-10} \\implies S = \\sqrt{1.2 \\times 10^{-10}} = 1.095 \\times 10^{-5}\\text{ M}$$
$[\\text{Ba}^{2+}] = [\\text{CrO}_4^{2-}] = 1.10 \\times 10^{-5}\\text{ M}$.</p>
<p><b>3. Ferric Hydroxide ($\\text{Fe}(\\text{OH})_3 \\rightleftharpoons \\text{Fe}^{3+} + 3\\text{OH}^-$):</b><br>
$$K_{sp} = (S)(3S)^3 = 27 S^4 = 1.0 \\times 10^{-38}$$
$$S^4 = \\frac{1.0 \\times 10^{-38}}{27} = 3.704 \\times 10^{-40} \\implies S = 1.387 \\times 10^{-10}\\text{ M}$$
$[\\text{Fe}^{3+}] = 1.39 \\times 10^{-10}\\text{ M}, \\quad [\\text{OH}^-] = 3S = 4.16 \\times 10^{-10}\\text{ M}$.</p>
<p><b>4. Lead Chloride ($\\text{PbCl}_2 \\rightleftharpoons \\text{Pb}^{2+} + 2\\text{Cl}^-$):</b><br>
$$K_{sp} = 4S^3 = 1.6 \\times 10^{-5} \\implies S^3 = 4.0 \\times 10^{-6}$$
$$S = (4.0 \\times 10^{-6})^{1/3} = 1.587 \\times 10^{-2}\\text{ M}$$
$[\\text{Pb}^{2+}] = 1.59 \\times 10^{-2}\\text{ M}, \\quad [\\text{Cl}^-] = 2S = 3.17 \\times 10^{-2}\\text{ M}$.</p>
<p><b>5. Mercurous Iodide ($\\text{Hg}_2\\text{I}_2 \\rightleftharpoons \\text{Hg}_2^{2+} + 2\\text{I}^-$):</b><br>
$$K_{sp} = (S)(2S)^2 = 4S^3 = 4.5 \\times 10^{-29} \\implies S^3 = 1.125 \\times 10^{-29} = 11.25 \\times 10^{-30}$$
$$S = (11.25 \\times 10^{-30})^{1/3} = 2.24 \\times 10^{-10}\\text{ M}$$
$[\\text{Hg}_2^{2+}] = 2.24 \\times 10^{-10}\\text{ M}, \\quad [\\text{I}^-] = 2S = 4.48 \\times 10^{-10}\\text{ M}$.</p>`,
      rubricRows: [
        { key: "Ag2CrO4: S = 6.50 x 10^-5 M and ion molarities", marks: "1 Mark" },
        { key: "BaCrO4: S = 1.10 x 10^-5 M and ion molarities", marks: "1 Mark" },
        { key: "Fe(OH)3: S = 1.39 x 10^-10 M and ion molarities", marks: "1 Mark" },
        { key: "PbCl2: S = 1.59 x 10^-2 M and ion molarities", marks: "1 Mark" },
        { key: "Hg2I2: S = 2.24 x 10^-10 M and ion molarities", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q68",
      ncertRef: "6.68",
      marks: "3 Marks",
      questionHtml: "The solubility product constant of $\\text{Ag}_2\\text{CrO}_4$ and $\\text{AgBr}$ are $1.1 \\times 10^{-12}$ and $5.0 \\times 10^{-13}$ respectively. Calculate the ratio of the molarities of their saturated solutions.",
      solutionStepsHtml: `<p><b>Step 1: Molar solubility of $\\text{Ag}_2\\text{CrO}_4$ ($S_1$):</b><br>
$$K_{sp}(\\text{Ag}_2\\text{CrO}_4) = 4S_1^3 = 1.1 \\times 10^{-12}$$
$$S_1 = \\left(\\frac{1.1 \\times 10^{-12}}{4}\\right)^{1/3} = (2.75 \\times 10^{-13})^{1/3} = 6.50 \\times 10^{-5}\\text{ M}$$</p>
<p><b>Step 2: Molar solubility of $\\text{AgBr}$ ($S_2$):</b><br>
$$K_{sp}(\\text{AgBr}) = S_2^2 = 5.0 \\times 10^{-13}$$
$$S_2 = \\sqrt{5.0 \\times 10^{-13}} = \\sqrt{50 \\times 10^{-14}} \\approx 7.071 \\times 10^{-7}\\text{ M}$$</p>
<p><b>Step 3: Ratio of molarities:</b><br>
$$\\text{Ratio} = \\frac{S_1}{S_2} = \\frac{6.50 \\times 10^{-5}}{7.071 \\times 10^{-7}} = \\frac{650}{7.071} \\approx 91.925 \\approx 91.9$$</p>
<p><b>Final Answer:</b> The ratio of the molarities of their saturated solutions $\\frac{S(\\text{Ag}_2\\text{CrO}_4)}{S(\\text{AgBr})} \\approx 91.9$ (silver chromate is approximately $92$ times more soluble than silver bromide).</p>`,
      rubricRows: [
        { key: "Molar solubility of Ag2CrO4: S1 = 6.50 x 10^-5 M", marks: "1 Mark" },
        { key: "Molar solubility of AgBr: S2 = 7.07 x 10^-7 M", marks: "1 Mark" },
        { key: "Ratio calculation: S1 / S2 = 91.9", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q69",
      ncertRef: "6.69",
      marks: "3 Marks",
      questionHtml: "Equal volumes of $0.002\\text{ M}$ solutions of sodium iodate and cupric chlorate are mixed together. Will it lead to precipitation of copper iodate? ($K_{sp}$ of $\\text{Cu}(\\text{IO}_3)_2 = 7.4 \\times 10^{-8}$).",
      solutionStepsHtml: `<p><b>Step 1: Dilution upon mixing equal volumes:</b><br>
When equal volumes ($V_1 = V_2$) are mixed, the total volume doubles ($V_{\\text{final}} = 2V$), halving all concentrations:<br>
$$[\\text{Cu}^{2+}] = \\frac{0.002\\text{ M}}{2} = 0.001\\text{ M} = 1.0 \\times 10^{-3}\\text{ M}$$
$$[\\text{IO}_3^-] = \\frac{0.002\\text{ M}}{2} = 0.001\\text{ M} = 1.0 \\times 10^{-3}\\text{ M}$$</p>
<p><b>Step 2: Calculate Ionic Product ($Q_{sp}$):</b><br>
$$\\text{Cu}(\\text{IO}_3)_2 \\rightleftharpoons \\text{Cu}^{2+} + 2\\text{IO}_3^-$$
$$Q_{sp} = [\\text{Cu}^{2+}][\\text{IO}_3^-]^2 = (1.0 \\times 10^{-3}) \\times (1.0 \\times 10^{-3})^2 = 1.0 \\times 10^{-9}$$</p>
<p><b>Step 3: Compare $Q_{sp}$ with $K_{sp}$:</b><br>
Given $K_{sp} = 7.4 \\times 10^{-8}$.<br>
Here:
$$Q_{sp} (1.0 \\times 10^{-9}) < K_{sp} (7.4 \\times 10^{-8})$$</p>
<p><b>Conclusion:</b> Since the ionic product $Q_{sp}$ is less than the solubility product $K_{sp}$, the solution is unsaturated and <b>no precipitation will occur</b>.</p>`,
      rubricRows: [
        { key: "Halving concentrations upon mixing equal volumes", marks: "1 Mark" },
        { key: "Evaluating ionic product Qsp = 1.0 x 10^-9", marks: "1 Mark" },
        { key: "Comparison Qsp < Ksp and concluding NO precipitation", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q70",
      ncertRef: "6.70",
      marks: "4 Marks",
      questionHtml: "The ionization constant of benzoic acid is $6.46 \\times 10^{-5}$ and $K_{sp}$ for silver benzoate is $2.5 \\times 10^{-13}$. How many times is silver benzoate more soluble in a buffer of $\\text{pH} = 3.19$ compared to its solubility in pure water?",
      solutionStepsHtml: `<p><b>Part 1: Solubility in pure water ($S_0$):</b><br>
$$\\text{AgC}_6\\text{H}_5\\text{COO}(\\text{s}) \\rightleftharpoons \\text{Ag}^+ + \\text{C}_6\\text{H}_5\\text{COO}^-$$
$$K_{sp} = S_0^2 = 2.5 \\times 10^{-13} \\implies S_0 = \\sqrt{2.5 \\times 10^{-13}} = \\sqrt{25 \\times 10^{-14}} = 5.0 \\times 10^{-7}\\text{ M}$$</p>
<p><b>Part 2: Solubility in buffer of $\\text{pH} = 3.19$ ($S$):</b><br>
$[\\text{H}^+] = \\text{antilog}(-3.19) = 6.457 \\times 10^{-4}\\text{ M}$.<br>
Benzoate ions react with buffer $\\text{H}^+$ to form unionized benzoic acid:<br>
$$\\text{C}_6\\text{H}_5\\text{COO}^- + \\text{H}^+ \\rightleftharpoons \\text{C}_6\\text{H}_5\\text{COOH}$$
Total dissolved benzoate $= [\\text{C}_6\\text{H}_5\\text{COO}^-] + [\\text{C}_6\\text{H}_5\\text{COOH}] = S$.<br>
Using $K_a = \\frac{[\\text{H}^+][\\text{C}_6\\text{H}_5\\text{COO}^-]}{[\\text{C}_6\\text{H}_5\\text{COOH}]} \\implies [\\text{C}_6\\text{H}_5\\text{COOH}] = \\frac{[\\text{H}^+][\\text{C}_6\\text{H}_5\\text{COO}^-]}{K_a}$:<br>
$$S = [\\text{C}_6\\text{H}_5\\text{COO}^-] \\left(1 + \\frac{[\\text{H}^+]}{K_a}\\right)$$
$$[\\text{C}_6\\text{H}_5\\text{COO}^-] = \\frac{S}{1 + \\frac{[\\text{H}^+]}{K_a}}$$
Since $[\\text{Ag}^+] = S$:<br>
$$K_{sp} = [\\text{Ag}^+][\\text{C}_6\\text{H}_5\\text{COO}^-] = \\frac{S^2}{1 + \\frac{[\\text{H}^+]}{K_a}}$$
$$S^2 = K_{sp} \\left(1 + \\frac{[\\text{H}^+]}{K_a}\\right)$$
Given $[\\text{H}^+] = 6.457 \\times 10^{-4}$ and $K_a = 6.46 \\times 10^{-5}$:<br>
$$\\frac{[\\text{H}^+]}{K_a} = \\frac{6.457 \\times 10^{-4}}{6.46 \\times 10^{-5}} \\approx 10$$
$$1 + \\frac{[\\text{H}^+]}{K_a} = 1 + 10 = 11$$
$$S = \\sqrt{K_{sp} \\times 11} = \\sqrt{S_0^2 \\times 11} = S_0 \\sqrt{11} \\approx 3.317 S_0$$</p>
<p><b>Final Answer:</b> Silver benzoate is $\\sqrt{11} \\approx \\mathbf{3.32}$ times more soluble in the buffer solution of $\\text{pH} = 3.19$ than in pure water.</p>`,
      rubricRows: [
        { key: "Solubility in pure water S0 = 5.0 x 10^-7 M", marks: "1 Mark" },
        { key: "Derivation of solubility relation S^2 = Ksp * (1 + [H+]/Ka)", marks: "1.5 Marks" },
        { key: "Evaluating ratio S / S0 = sqrt(11) = 3.32", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch6-q71",
      ncertRef: "6.71",
      marks: "3 Marks",
      questionHtml: "What is the maximum concentration of equimolar solutions of ferrous sulphate and sodium sulphide so that when mixed in equal volumes, there is no precipitation of iron sulphide? ($K_{sp}$ of $\\text{FeS} = 6.3 \\times 10^{-18}$).",
      solutionStepsHtml: `<p><b>Step 1: Effect of mixing equal volumes:</b><br>
Let $C$ be the original concentration of equimolar $\\text{FeSO}_4$ and $\\text{Na}_2\\text{S}$ solutions.<br>
When equal volumes are mixed, each solution is diluted by a factor of 2:<br>
$$[\\text{Fe}^{2+}] = \\frac{C}{2}, \\quad [\\text{S}^{2-}] = \\frac{C}{2}$$</p>
<p><b>Step 2: Condition for no precipitation:</b><br>
For no precipitation to occur, the ionic product must not exceed the solubility product:<br>
$$Q_{sp} \\le K_{sp}$$
$$[\\text{Fe}^{2+}][\\text{S}^{2-}] \\le K_{sp}$$
$$\\left(\\frac{C}{2}\\right) \\left(\\frac{C}{2}\\right) \\le 6.3 \\times 10^{-18}$$
$$\\frac{C^2}{4} \\le 6.3 \\times 10^{-18} \\implies C^2 \\le 4 \\times 6.3 \\times 10^{-18} = 25.2 \\times 10^{-18}$$
$$C \\le \\sqrt{25.2 \\times 10^{-18}} \\approx 5.02 \\times 10^{-9}\\text{ M}$$</p>
<p><b>Final Answer:</b> The maximum initial concentration is $C = 5.02 \\times 10^{-9}\\text{ mol L}^{-1}$.</p>`,
      rubricRows: [
        { key: "Dilution factor [Fe2+] = [S2-] = C/2", marks: "1 Mark" },
        { key: "Condition (C/2)^2 <= Ksp", marks: "1 Mark" },
        { key: "Accurate square root yielding C = 5.02 x 10^-9 M", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q72",
      ncertRef: "6.72",
      marks: "3 Marks",
      questionHtml: "What is the minimum volume of water required to dissolve $1\\text{ g}$ of calcium sulphate at $298\\text{ K}$? ($K_{sp}$ for $\\text{CaSO}_4$ is $9.1 \\times 10^{-6}$).",
      solutionStepsHtml: `<p><b>Step 1: Calculate molar solubility ($S$):</b><br>
$$\\text{CaSO}_4(\\text{s}) \\rightleftharpoons \\text{Ca}^{2+} + \\text{SO}_4^{2-}$$
$$K_{sp} = S^2 = 9.1 \\times 10^{-6}$$
$$S = \\sqrt{9.1 \\times 10^{-6}} = 3.017 \\times 10^{-3}\\text{ mol L}^{-1}$$</p>
<p><b>Step 2: Solubility in grams per litre:</b><br>
Molar mass of $\\text{CaSO}_4 = 40 + 32 + 4(16) = 136\\text{ g mol}^{-1}$.<br>
$$\\text{Solubility} = S \\times M = (3.017 \\times 10^{-3}\\text{ mol L}^{-1}) \\times (136\\text{ g mol}^{-1}) = 0.4103\\text{ g L}^{-1}$$</p>
<p><b>Step 3: Minimum volume to dissolve $1\\text{ g}$:</b><br>
$$V = \\frac{\\text{Mass}}{\\text{Solubility}} = \\frac{1.0\\text{ g}}{0.4103\\text{ g L}^{-1}} \\approx 2.437\\text{ L} \\approx 2.44\\text{ L}$$</p>
<p><b>Final Answer:</b> The minimum volume of water required is <b>$2.44\\text{ L}$</b>.</p>`,
      rubricRows: [
        { key: "Calculating molar solubility S = 3.02 x 10^-3 mol/L", marks: "1 Mark" },
        { key: "Converting to mass solubility = 0.410 g/L", marks: "1 Mark" },
        { key: "Volume calculation V = 1 / 0.410 = 2.44 L", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q73",
      ncertRef: "6.73",
      marks: "5 Marks",
      questionHtml: "The concentration of sulphide ion in $0.1\\text{ M HCl}$ solution saturated with hydrogen sulphide is $1.0 \\times 10^{-19}\\text{ M}$. If $10\\text{ mL}$ of this is added to $5\\text{ mL}$ of $0.04\\text{ M}$ solution of the following: $\\text{FeSO}_4$, $\\text{MnCl}_2$, $\\text{ZnCl}_2$ and $\\text{CdCl}_2$, in which of these solutions will precipitation occur?<br>($K_{sp}$ values: $\\text{FeS} = 6.3 \\times 10^{-18}$, $\\text{MnS} = 2.5 \\times 10^{-13}$, $\\text{ZnS} = 1.6 \\times 10^{-24}$, $\\text{CdS} = 8.0 \\times 10^{-27}$).",
      solutionStepsHtml: `<p><b>Step 1: Calculate concentrations in the mixed solution:</b><br>
Total Volume $= 10\\text{ mL} + 5\\text{ mL} = 15\\text{ mL}$.<br>
$$[\\text{S}^{2-}] = \\frac{10\\text{ mL} \\times 1.0 \\times 10^{-19}\\text{ M}}{15\\text{ mL}} = \\frac{2}{3} \\times 10^{-19}\\text{ M} = 6.67 \\times 10^{-20}\\text{ M}$$
For each metal cation ($M^{2+} = \\text{Fe}^{2+}, \\text{Mn}^{2+}, \\text{Zn}^{2+}, \\text{Cd}^{2+}$):<br>
$$[M^{2+}] = \\frac{5\\text{ mL} \\times 0.04\\text{ M}}{15\\text{ mL}} = \\frac{0.20}{15} = 1.33 \\times 10^{-2}\\text{ M}$$</p>
<p><b>Step 2: Calculate Ionic Product ($Q_{sp}$):</b><br>
$$Q_{sp} = [M^{2+}][\\text{S}^{2-}] = (1.33 \\times 10^{-2}) \\times (6.67 \\times 10^{-20}) = 8.87 \\times 10^{-22}$$</p>
<p><b>Step 3: Compare $Q_{sp}$ with $K_{sp}$ of each sulphide:</b><br>
• <b>FeS:</b> $K_{sp} = 6.3 \\times 10^{-18} > Q_{sp} (8.87 \\times 10^{-22}) \\implies$ <b>No precipitation</b>.<br>
• <b>MnS:</b> $K_{sp} = 2.5 \\times 10^{-13} > Q_{sp} (8.87 \\times 10^{-22}) \\implies$ <b>No precipitation</b>.<br>
• <b>ZnS:</b> $K_{sp} = 1.6 \\times 10^{-24} < Q_{sp} (8.87 \\times 10^{-22}) \\implies$ <b>Precipitation occurs</b> ($Q_{sp} > K_{sp}$).<br>
• <b>CdS:</b> $K_{sp} = 8.0 \\times 10^{-27} < Q_{sp} (8.87 \\times 10^{-22}) \\implies$ <b>Precipitation occurs</b> ($Q_{sp} > K_{sp}$).</p>
<p><b>Final Answer:</b> Precipitation will occur only in solutions of <b>$\\text{ZnCl}_2$</b> and <b>$\\text{CdCl}_2$</b> (yielding precipitates of $\\text{ZnS}$ and $\\text{CdS}$).</p>`,
      rubricRows: [
        { key: "Determining diluted [S2-] = 6.67 x 10^-20 M and [M2+] = 1.33 x 10^-2 M", marks: "1.5 Marks" },
        { key: "Evaluating ionic product Qsp = 8.87 x 10^-22", marks: "1.5 Marks" },
        { key: "Comparing Qsp with Ksp for all 4 salts", marks: "1 Mark" },
        { key: "Concluding precipitation in ZnCl2 and CdCl2 only", marks: "1 Mark" }
      ]
    }
  ];
}

module.exports = { getPart3Questions };
