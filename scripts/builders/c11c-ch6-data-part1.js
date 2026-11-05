/**
 * NCERT Class 11 Chemistry Chapter 6: Equilibrium - Part 1 Data (Q6.1 to Q6.34)
 * Physical & Chemical Equilibrium, Law of Mass Action, Kc and Kp, Le Chatelier, Delta G
 */

function getPart1Questions() {
  return [
    {
      id: "c11c-ch6-q1",
      ncertRef: "6.1",
      marks: "3 Marks",
      questionHtml: "A liquid is in equilibrium with its vapour in a sealed container at a fixed temperature. The volume of the container is suddenly increased.<br>(a) What is the initial effect of the change on vapour pressure?<br>(b) How do rates of evaporation and condensation change initially?<br>(c) What happens when equilibrium is restored and what will be the final vapour pressure?",
      solutionStepsHtml: `<p><b>(a) Initial effect on vapour pressure:</b><br>
When the volume of the container is suddenly increased, the same number of vapour molecules now occupies a larger volume. Therefore, the number of vapour molecules per unit volume decreases, causing the <b>vapour pressure to decrease initially</b>.</p>
<p><b>(b) Initial effect on rates of evaporation and condensation:</b><br>
• <b>Rate of evaporation</b> depends primarily on surface area of the liquid and temperature. Since temperature is constant and the surface area remains essentially unchanged, the <i>rate of evaporation remains constant initially</i>.<br>
• <b>Rate of condensation</b> depends directly on the concentration (vapour pressure) of vapour molecules colliding with the liquid surface. Since vapour density decreases, the <i>rate of condensation decreases initially</i> ($r_{\\text{cond}} < r_{\\text{evap}}$).</p>
<p><b>(c) Restoration of equilibrium & final vapour pressure:</b><br>
Since rate of evaporation exceeds rate of condensation, more liquid evaporates to replenish vapour molecules. Gradually, the number of vapour molecules per unit volume increases until rate of condensation equals rate of evaporation once again. At constant temperature, equilibrium vapour pressure depends solely on temperature: hence the <b>final vapour pressure will be equal to the initial equilibrium vapour pressure</b>.</p>`,
      rubricRows: [
        { key: "Part (a): Stating vapour pressure decreases initially due to volume expansion", marks: "1 Mark" },
        { key: "Part (b): Constant evaporation rate & decreased condensation rate explanation", marks: "1 Mark" },
        { key: "Part (c): Re-attainment of equilibrium & final vapour pressure equals original value", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q2",
      ncertRef: "6.2",
      marks: "2 Marks",
      questionHtml: "What is $K_c$ for the following equilibrium when the equilibrium concentration of each substance is: $[\\text{SO}_2] = 0.60\\text{ M}$, $[\\text{O}_2] = 0.82\\text{ M}$ and $[\\text{SO}_3] = 1.90\\text{ M}$?<br>$$2\\text{SO}_2(\\text{g}) + \\text{O}_2(\\text{g}) \\rightleftharpoons 2\\text{SO}_3(\\text{g})$$",
      solutionStepsHtml: `<p><b>Step 1: Write the equilibrium constant expression ($K_c$):</b><br>
$$K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 [\\text{O}_2]}$$</p>
<p><b>Step 2: Substitute the equilibrium concentrations:</b><br>
$$K_c = \\frac{(1.90)^2}{(0.60)^2 \\times (0.82)}$$
$$K_c = \\frac{3.61}{0.36 \\times 0.82} = \\frac{3.61}{0.2952} \\approx 12.2289\\text{ M}^{-1} \\approx 12.23\\text{ L mol}^{-1}$$</p>
<p><b>Final Answer:</b> The equilibrium constant $K_c = 12.23\\text{ L mol}^{-1}$ (or $12.23$).</p>`,
      rubricRows: [
        { key: "Correct equilibrium expression for Kc", marks: "1 Mark" },
        { key: "Accurate numerical substitution and final value (12.23 L/mol)", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q3",
      ncertRef: "6.3",
      marks: "3 Marks",
      questionHtml: "At $700\\text{ K}$, equilibrium constant for the reaction:<br>$$\\text{H}_2(\\text{g}) + \\text{I}_2(\\text{g}) \\rightleftharpoons 2\\text{HI}(\\text{g})$$<br>is $54.8$. If $0.5\\text{ mol L}^{-1}$ of $\\text{HI}(\\text{g})$ is present at equilibrium at $700\\text{ K}$, what are the concentrations of $\\text{H}_2(\\text{g})$ and $\\text{I}_2(\\text{g})$ assuming that we initially started with $\\text{HI}(\\text{g})$ and allowed it to reach equilibrium at $700\\text{ K}$?",
      solutionStepsHtml: `<p><b>Step 1: Reaction stoichiometry and equilibrium relation:</b><br>
$$\\text{H}_2(\\text{g}) + \\text{I}_2(\\text{g}) \\rightleftharpoons 2\\text{HI}(\\text{g}), \\quad K_c = 54.8$$
Since we started with pure $\\text{HI}(\\text{g})$, the decomposition produces equimolar amounts of $\\text{H}_2(\\text{g})$ and $\\text{I}_2(\\text{g})$:
$$[\\text{H}_2] = [\\text{I}_2] = x$$</p>
<p><b>Step 2: Express $K_c$:</b><br>
$$K_c = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]} = \\frac{(0.5)^2}{x \\times x} = \\frac{0.25}{x^2}$$</p>
<p><b>Step 3: Solve for $x$:</b><br>
$$x^2 = \\frac{0.25}{K_c} = \\frac{0.25}{54.8} \\approx 4.562 \\times 10^{-3}$$
$$x = \\sqrt{4.562 \\times 10^{-3}} = 0.0675\\text{ mol L}^{-1} = 0.068\\text{ M}$$</p>
<p><b>Final Answer:</b> $[\\text{H}_2] = [\\text{I}_2] = 0.068\\text{ mol L}^{-1}$.</p>`,
      rubricRows: [
        { key: "Stoichiometric relation [H2] = [I2] = x from pure HI initial condition", marks: "1 Mark" },
        { key: "Formulating Kc equation in terms of x", marks: "1 Mark" },
        { key: "Correct square root calculation and final concentration 0.068 mol/L", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q4",
      ncertRef: "6.4",
      marks: "2 Marks",
      questionHtml: "What is $K_c$ for the reaction at equilibrium:<br>$$\\text{CO}(\\text{g}) + 3\\text{H}_2(\\text{g}) \\rightleftharpoons \\text{CH}_4(\\text{g}) + \\text{H}_2\\text{O}(\\text{g})$$<br>if the equilibrium concentrations are: $[\\text{CO}] = 0.3\\text{ M}$, $[\\text{H}_2] = 0.1\\text{ M}$, $[\\text{CH}_4] = 0.2\\text{ M}$ and $[\\text{H}_2\\text{O}] = 0.02\\text{ M}$?",
      solutionStepsHtml: `<p><b>Step 1: Write $K_c$ expression:</b><br>
$$K_c = \\frac{[\\text{CH}_4][\\text{H}_2\\text{O}]}{[\\text{CO}][\\text{H}_2]^3}$$</p>
<p><b>Step 2: Substitute concentrations:</b><br>
$$K_c = \\frac{(0.2) \\times (0.02)}{(0.3) \\times (0.1)^3} = \\frac{0.004}{0.3 \\times 0.001} = \\frac{0.004}{0.0003} = \\frac{4}{0.3} \\approx 13.333\\text{ L}^2\\text{mol}^{-2}$$</p>
<p><b>Final Answer:</b> $K_c = 13.33\\text{ M}^{-2}$.</p>`,
      rubricRows: [
        { key: "Writing Kc expression with cubic power for [H2]", marks: "1 Mark" },
        { key: "Accurate computation yielding 13.33 M^-2", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q5",
      ncertRef: "6.5",
      marks: "3 Marks",
      questionHtml: "One of the reactions that takes place in producing steel from iron ore is the reduction of $\\text{FeO}(\\text{s})$ by carbon monoxide to give iron and $\\text{CO}_2$:<br>$$\\text{FeO}(\\text{s}) + \\text{CO}(\\text{g}) \\rightleftharpoons \\text{Fe}(\\text{s}) + \\text{CO}_2(\\text{g}), \\quad K_p = 0.265 \\text{ at } 1050\\text{ K}$$<br>What are the equilibrium partial pressures of $\\text{CO}$ and $\\text{CO}_2$ at $1050\\text{ K}$ if the initial partial pressures are: $p_{\\text{CO}} = 1.4\\text{ atm}$ and $p_{\\text{CO}_2} = 0.80\\text{ atm}$?",
      solutionStepsHtml: `<p><b>Step 1: Determine initial reaction quotient $Q_p$:</b><br>
Since solids $\\text{FeO}(\\text{s})$ and $\\text{Fe}(\\text{s})$ have activity $= 1$:
$$Q_p = \\frac{p_{\\text{CO}_2}}{p_{\\text{CO}}} = \\frac{0.80}{1.4} \\approx 0.571$$
Since $Q_p (0.571) > K_p (0.265)$, the reaction proceeds in the <b>reverse direction</b> to reach equilibrium.</p>
<p><b>Step 2: Set up partial pressure changes:</b><br>
Let $p$ be the decrease in partial pressure of $\\text{CO}_2$ (and increase in $\\text{CO}$):
$$p_{\\text{CO}_2} = 0.80 - p, \\quad p_{\\text{CO}} = 1.4 + p$$</p>
<p><b>Step 3: Solve for $p$ using $K_p$:</b><br>
$$K_p = \\frac{p_{\\text{CO}_2}}{p_{\\text{CO}}} = \\frac{0.80 - p}{1.4 + p} = 0.265$$
$$0.80 - p = 0.265(1.4 + p) = 0.371 + 0.265 p$$
$$0.80 - 0.371 = 1.265 p \\implies 0.429 = 1.265 p \\implies p = \\frac{0.429}{1.265} \\approx 0.339\\text{ atm}$$</p>
<p><b>Step 4: Equilibrium partial pressures:</b><br>
$$p_{\\text{CO}} = 1.4 + 0.339 = 1.739\\text{ atm} \\approx 1.74\\text{ atm}$$
$$p_{\\text{CO}_2} = 0.80 - 0.339 = 0.461\\text{ atm} \\approx 0.46\\text{ atm}$$</p>
<p><b>Final Answer:</b> $p_{\\text{CO}} = 1.74\\text{ atm}$ and $p_{\\text{CO}_2} = 0.46\\text{ atm}$.</p>`,
      rubricRows: [
        { key: "Calculation of Qp and determining direction of shift (reverse)", marks: "1 Mark" },
        { key: "Setting up algebraic equation in terms of p", marks: "1 Mark" },
        { key: "Correct equilibrium partial pressures: p(CO) = 1.74 atm, p(CO2) = 0.46 atm", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q6",
      ncertRef: "6.6",
      marks: "2 Marks",
      questionHtml: "For the equilibrium:<br>$$2\\text{NOCl}(\\text{g}) \\rightleftharpoons 2\\text{NO}(\\text{g}) + \\text{Cl}_2(\\text{g})$$<br>the value of the equilibrium constant, $K_c$ is $3.75 \\times 10^{-6}$ at $1069\\text{ K}$. Calculate $K_p$ for the reaction at this temperature.",
      solutionStepsHtml: `<p><b>Step 1: Formula connecting $K_p$ and $K_c$:</b><br>
$$K_p = K_c(RT)^{\\Delta n_g}$$
Here, $\\Delta n_g = n_p - n_r = (2 + 1) - 2 = 3 - 2 = 1$.</p>
<p><b>Step 2: Values given:</b><br>
$K_c = 3.75 \\times 10^{-6}$, $R = 0.0831\\text{ bar L K}^{-1}\\text{mol}^{-1}$, $T = 1069\\text{ K}$.</p>
<p><b>Step 3: Calculation:</b><br>
$$K_p = (3.75 \\times 10^{-6}) \\times (0.0831 \\times 1069)^1$$
$$0.0831 \\times 1069 = 88.8339$$
$$K_p = 3.75 \\times 10^{-6} \\times 88.8339 = 3.331 \\times 10^{-4}\\text{ bar}$$</p>
<p><b>Final Answer:</b> $K_p = 3.33 \\times 10^{-4}\\text{ bar}$.</p>`,
      rubricRows: [
        { key: "Formula Kp = Kc(RT)^Delta n_g and Delta n_g = 1", marks: "1 Mark" },
        { key: "Accurate computation yielding 3.33 x 10^-4 bar", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q7",
      ncertRef: "6.7",
      marks: "2 Marks",
      questionHtml: "The value of $K_c$ for the reaction:<br>$$\\text{N}_2(\\text{g}) + 3\\text{H}_2(\\text{g}) \\rightleftharpoons 2\\text{NH}_3(\\text{g})$$<br>is $0.5$ at $400\\text{ K}$. Find the value of $K_p$ for this reaction.",
      solutionStepsHtml: `<p><b>Step 1: Identify $\\Delta n_g$:</b><br>
$$\\Delta n_g = 2 - (1 + 3) = 2 - 4 = -2$$</p>
<p><b>Step 2: Compute $K_p$:</b><br>
$$K_p = K_c (RT)^{\\Delta n_g} = K_c (RT)^{-2} = \\frac{K_c}{(RT)^2}$$
Using $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$ (or $0.0831\\text{ bar L K}^{-1}\\text{mol}^{-1}$) and $T = 400\\text{ K}$:<br>
$$RT = 0.0821 \\times 400 = 32.84$$
$$K_p = \\frac{0.5}{(32.84)^2} = \\frac{0.5}{1078.46} \\approx 4.636 \\times 10^{-4}\\text{ atm}^{-2}$$
(Using $R = 0.0831\\text{ bar L K}^{-1}\\text{mol}^{-1}$: $RT = 33.24$, $K_p = \\frac{0.5}{1104.9} = 4.52 \\times 10^{-4}\\text{ bar}^{-2}$).</p>
<p><b>Final Answer:</b> $K_p = 4.64 \\times 10^{-4}\\text{ atm}^{-2}$ (or $4.52 \\times 10^{-4}\\text{ bar}^{-2}$).</p>`,
      rubricRows: [
        { key: "Determination of Delta n_g = -2", marks: "1 Mark" },
        { key: "Substitution and calculation of Kp = 4.64 x 10^-4", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q8",
      ncertRef: "6.8",
      marks: "2 Marks",
      questionHtml: "A sample of $\\text{HI}(\\text{g})$ is placed in flask at a pressure of $0.2\\text{ atm}$. At equilibrium the partial pressure of $\\text{HI}(\\text{g})$ is $0.04\\text{ atm}$. What is $K_p$ for the given equilibrium?<br>$$2\\text{HI}(\\text{g}) \\rightleftharpoons \\text{H}_2(\\text{g}) + \\text{I}_2(\\text{g})$$",
      solutionStepsHtml: `<p><b>Step 1: Set up equilibrium partial pressures:</b><br>
Initial pressure: $p_{\\text{HI}} = 0.2\\text{ atm}$, $p_{\\text{H}_2} = 0$, $p_{\\text{I}_2} = 0$.<br>
Let $2x$ be the decrease in $p_{\\text{HI}}$.<br>
At equilibrium: $p_{\\text{HI}} = 0.2 - 2x = 0.04\\text{ atm}$.<br>
$$2x = 0.2 - 0.04 = 0.16 \\implies x = 0.08\\text{ atm}$$
Therefore:
$$p_{\\text{H}_2} = x = 0.08\\text{ atm}, \\quad p_{\\text{I}_2} = x = 0.08\\text{ atm}$$</p>
<p><b>Step 2: Calculate $K_p$:</b><br>
$$K_p = \\frac{p_{\\text{H}_2} \\cdot p_{\\text{I}_2}}{(p_{\\text{HI}})^2} = \\frac{0.08 \\times 0.08}{(0.04)^2} = \\frac{0.0064}{0.0016} = 4.0$$</p>
<p><b>Final Answer:</b> $K_p = 4.0$.</p>`,
      rubricRows: [
        { key: "Finding partial pressures: p(H2) = p(I2) = 0.08 atm", marks: "1 Mark" },
        { key: "Calculating Kp = (0.08)^2 / (0.04)^2 = 4.0", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q9",
      ncertRef: "6.9",
      marks: "3 Marks",
      questionHtml: "A mixture of $1.57\\text{ mol}$ of $\\text{N}_2$, $1.92\\text{ mol}$ of $\\text{H}_2$ and $8.13\\text{ mol}$ of $\\text{NH}_3$ is introduced into a $20\\text{ L}$ reaction vessel at $500\\text{ K}$. At this temperature, the equilibrium constant, $K_c$ for the reaction $\\text{N}_2(\\text{g}) + 3\\text{H}_2(\\text{g}) \\rightleftharpoons 2\\text{NH}_3(\\text{g})$ is $1.7 \\times 10^2$. Is the reaction mixture at equilibrium? If not, what is the direction of the net reaction?",
      solutionStepsHtml: `<p><b>Step 1: Calculate molar concentrations:</b><br>
$$[\\text{N}_2] = \\frac{1.57\\text{ mol}}{20\\text{ L}} = 0.0785\\text{ M}$$
$$[\\text{H}_2] = \\frac{1.92\\text{ mol}}{20\\text{ L}} = 0.096\\text{ M}$$
$$[\\text{NH}_3] = \\frac{8.13\\text{ mol}}{20\\text{ L}} = 0.4065\\text{ M}$$</p>
<p><b>Step 2: Calculate Reaction Quotient $Q_c$:</b><br>
$$Q_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3} = \\frac{(0.4065)^2}{(0.0785) \\times (0.096)^3}$$
$$(0.4065)^2 = 0.16524$$
$$(0.096)^3 = 8.847 \\times 10^{-4}$$
Denominator $= 0.0785 \\times 8.847 \\times 10^{-4} = 6.945 \\times 10^{-5}$
$$Q_c = \\frac{0.16524}{6.945 \\times 10^{-5}} \\approx 2379.3 = 2.38 \\times 10^3$$</p>
<p><b>Step 3: Compare $Q_c$ with $K_c$:</b><br>
Since $Q_c (2.38 \\times 10^3) > K_c (1.7 \\times 10^2)$, the mixture is <b>not at equilibrium</b>.<br>
To reach equilibrium, $Q_c$ must decrease, meaning products must convert into reactants: the net reaction will proceed in the <b>reverse (backward) direction</b> (decomposition of $\\text{NH}_3$).</p>`,
      rubricRows: [
        { key: "Determining molar concentrations for all three species", marks: "1 Mark" },
        { key: "Evaluating Qc = 2.38 x 10^3", marks: "1 Mark" },
        { key: "Concluding Qc > Kc hence reaction shifts in reverse direction", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q10",
      ncertRef: "6.10",
      marks: "2 Marks",
      questionHtml: "The equilibrium constant for the reaction:<br>$$\\text{N}_2(\\text{g}) + \\text{O}_2(\\text{g}) \\rightleftharpoons 2\\text{NO}(\\text{g})$$<br>at $2000\\text{ K}$ is $4 \\times 10^{-4}$. In the presence of a catalyst the equilibrium is attained $10$ times faster. What will be the equilibrium constant in the presence of the catalyst at $2000\\text{ K}$?",
      solutionStepsHtml: `<p><b>Concept:</b><br>
A catalyst increases the speed at which equilibrium is attained by providing an alternative reaction pathway with lower activation energy. Crucially, it lowers the activation energy of both the forward and reverse reactions by the <i>exact same amount</i>.</p>
<p>Therefore, a catalyst increases the rate of both forward and reverse reactions equally ($r_f$ and $r_b$ increase by the same factor):<br>
$$K_c = \\frac{k_f}{k_b}$$
The ratio $k_f / k_b$ remains unchanged. Equilibrium constant depends only on temperature.</p>
<p><b>Final Answer:</b> The equilibrium constant in the presence of the catalyst at $2000\\text{ K}$ remains unchanged: <b>$K = 4 \\times 10^{-4}$</b>.</p>`,
      rubricRows: [
        { key: "Explaining catalyst accelerates forward and backward rates equally", marks: "1 Mark" },
        { key: "Final equilibrium constant remains identical (4 x 10^-4)", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q11",
      ncertRef: "6.11",
      marks: "5 Marks",
      questionHtml: "Write the expression for the equilibrium constant, $K_c$ for each of the following reactions:<br>(i) $2\\text{NOCl}(\\text{g}) \\rightleftharpoons 2\\text{NO}(\\text{g}) + \\text{Cl}_2(\\text{g})$<br>(ii) $2\\text{Cu}(\\text{NO}_3)_2(\\text{s}) \\rightleftharpoons 2\\text{CuO}(\\text{s}) + 4\\text{NO}_2(\\text{g}) + \\text{O}_2(\\text{g})$<br>(iii) $\\text{CH}_3\\text{COOC}_2\\text{H}_5(\\text{aq}) + \\text{H}_2\\text{O}(\\text{l}) \\rightleftharpoons \\text{CH}_3\\text{COOH}(\\text{aq}) + \\text{C}_2\\text{H}_5\\text{OH}(\\text{aq})$<br>(iv) $\\text{Fe}^{3+}(\\text{aq}) + 3\\text{OH}^-(\\text{aq}) \\rightleftharpoons \\text{Fe}(\\text{OH})_3(\\text{s})$<br>(v) $\\text{I}_2(\\text{s}) + 5\\text{F}_2(\\text{g}) \\rightleftharpoons 2\\text{IF}_5(\\text{g})$.",
      solutionStepsHtml: `<p><i>Note: The active masses of pure solids and pure liquids are taken as unity ($1$).</i></p>
<p><b>(i) $2\\text{NOCl}(\\text{g}) \\rightleftharpoons 2\\text{NO}(\\text{g}) + \\text{Cl}_2(\\text{g})$:</b><br>
$$K_c = \\frac{[\\text{NO}]^2 [\\text{Cl}_2]}{[\\text{NOCl}]^2}$$</p>
<p><b>(ii) $2\\text{Cu}(\\text{NO}_3)_2(\\text{s}) \\rightleftharpoons 2\\text{CuO}(\\text{s}) + 4\\text{NO}_2(\\text{g}) + \\text{O}_2(\\text{g})$:</b><br>
Pure solids $[\\text{Cu}(\\text{NO}_3)_2(\\text{s})] = [\\text{CuO}(\\text{s})] = 1$:<br>
$$K_c = [\\text{NO}_2]^4 [\\text{O}_2]$$</p>
<p><b>(iii) $\\text{CH}_3\\text{COOC}_2\\text{H}_5(\\text{aq}) + \\text{H}_2\\text{O}(\\text{l}) \\rightleftharpoons \\text{CH}_3\\text{COOH}(\\text{aq}) + \\text{C}_2\\text{H}_5\\text{OH}(\\text{aq})$:</b><br>
$$K_c = \\frac{[\\text{CH}_3\\text{COOH}][\\text{C}_2\\text{H}_5\\text{OH}]}{[\\text{CH}_3\\text{COOC}_2\\text{H}_5][\\text{H}_2\\text{O}]}$$</p>
<p><b>(iv) $\\text{Fe}^{3+}(\\text{aq}) + 3\\text{OH}^-(\\text{aq}) \\rightleftharpoons \\text{Fe}(\\text{OH})_3(\\text{s})$:</b><br>
Pure solid $[\\text{Fe}(\\text{OH})_3(\\text{s})] = 1$:<br>
$$K_c = \\frac{1}{[\\text{Fe}^{3+}][\\text{OH}^-]^3}$$</p>
<p><b>(v) $\\text{I}_2(\\text{s}) + 5\\text{F}_2(\\text{g}) \\rightleftharpoons 2\\text{IF}_5(\\text{g})$:</b><br>
Pure solid $[\\text{I}_2(\\text{s})] = 1$:<br>
$$K_c = \\frac{[\\text{IF}_5]^2}{[\\text{F}_2]^5}$$</p>`,
      rubricRows: [
        { key: "Part (i) expression", marks: "1 Mark" },
        { key: "Part (ii) expression excluding solids", marks: "1 Mark" },
        { key: "Part (iii) expression", marks: "1 Mark" },
        { key: "Part (iv) inverse product expression", marks: "1 Mark" },
        { key: "Part (v) expression excluding solid iodine", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q12",
      ncertRef: "6.12",
      marks: "4 Marks",
      questionHtml: "Find out the value of $K_c$ for each of the following equilibria from the value of $K_p$:<br>(i) $2\\text{NOCl}(\\text{g}) \\rightleftharpoons 2\\text{NO}(\\text{g}) + \\text{Cl}_2(\\text{g})$; $K_p = 1.8 \\times 10^{-2}$ at $500\\text{ K}$<br>(ii) $\\text{CaCO}_3(\\text{s}) \\rightleftharpoons \\text{CaO}(\\text{s}) + \\text{CO}_2(\\text{g})$; $K_p = 167$ at $1073\\text{ K}$.",
      solutionStepsHtml: `<p><b>Relationship:</b> $K_p = K_c(RT)^{\\Delta n_g} \\implies K_c = \\frac{K_p}{(RT)^{\\Delta n_g}}$</p>
<p><b>(i) $2\\text{NOCl}(\\text{g}) \\rightleftharpoons 2\\text{NO}(\\text{g}) + \\text{Cl}_2(\\text{g})$:</b><br>
$\\Delta n_g = 3 - 2 = 1$, $T = 500\\text{ K}$, $R = 0.0831\\text{ bar L K}^{-1}\\text{mol}^{-1}$<br>
$$RT = 0.0831 \\times 500 = 41.55$$
$$K_c = \\frac{1.8 \\times 10^{-2}}{41.55} = 4.332 \\times 10^{-4}\\text{ M}$$</p>
<p><b>(ii) $\\text{CaCO}_3(\\text{s}) \\rightleftharpoons \\text{CaO}(\\text{s}) + \\text{CO}_2(\\text{g})$:</b><br>
$\\Delta n_g = 1 - 0 = 1$ (only gaseous $\\text{CO}_2$), $T = 1073\\text{ K}$<br>
$$RT = 0.0831 \\times 1073 = 89.1663$$
$$K_c = \\frac{K_p}{RT} = \\frac{167}{89.1663} \\approx 1.873\\text{ M}$$</p>
<p><b>Final Answer:</b> (i) $K_c = 4.33 \\times 10^{-4}\\text{ M}$, (ii) $K_c = 1.87\\text{ M}$.</p>`,
      rubricRows: [
        { key: "Formula Kc = Kp / (RT)^Delta n_g stated", marks: "1 Mark" },
        { key: "Part (i) Delta n_g = 1 and Kc = 4.33 x 10^-4 M", marks: "1.5 Marks" },
        { key: "Part (ii) Delta n_g = 1 and Kc = 1.87 M", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch6-q13",
      ncertRef: "6.13",
      marks: "2 Marks",
      questionHtml: "For the reaction:<br>$$\\text{CO}(\\text{g}) + 2\\text{H}_2(\\text{g}) \\rightleftharpoons \\text{CH}_3\\text{OH}(\\text{g})$$<br>$K_c = 10.5$ at $500\\text{ K}$. Calculate $K_p$ for the reaction.",
      solutionStepsHtml: `<p><b>Step 1: Calculate $\\Delta n_g$:</b><br>
$$\\Delta n_g = 1 - (1 + 2) = 1 - 3 = -2$$</p>
<p><b>Step 2: Formula and values:</b><br>
$$K_p = K_c(RT)^{\\Delta n_g} = \\frac{K_c}{(RT)^2}$$
$R = 0.0831\\text{ bar L K}^{-1}\\text{mol}^{-1}$, $T = 500\\text{ K} \\implies RT = 41.55$</p>
<p><b>Step 3: Solve for $K_p$:</b><br>
$$K_p = \\frac{10.5}{(41.55)^2} = \\frac{10.5}{1726.4} = 6.082 \\times 10^{-3}\\text{ bar}^{-2}$$</p>
<p><b>Final Answer:</b> $K_p = 6.08 \\times 10^{-3}\\text{ bar}^{-2}$.</p>`,
      rubricRows: [
        { key: "Identifying Delta n_g = -2", marks: "1 Mark" },
        { key: "Calculating Kp = 6.08 x 10^-3 bar^-2", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q14",
      ncertRef: "6.14",
      marks: "2 Marks",
      questionHtml: "At $450\\text{ K}$, $K_p = 2.0 \\times 10^{10}\\text{ bar}^{-1}$ for the reaction:<br>$$2\\text{SO}_2(\\text{g}) + \\text{O}_2(\\text{g}) \\rightleftharpoons 2\\text{SO}_3(\\text{g})$$<br>What is $K_c$ at this temperature?",
      solutionStepsHtml: `<p><b>Step 1: Calculate $\\Delta n_g$:</b><br>
$$\\Delta n_g = 2 - (2 + 1) = -1$$</p>
<p><b>Step 2: Relate $K_c$ to $K_p$:</b><br>
$$K_p = K_c(RT)^{-1} = \\frac{K_c}{RT} \\implies K_c = K_p \\times (RT)$$</p>
<p><b>Step 3: Calculate $K_c$:</b><br>
$R = 0.0831\\text{ bar L K}^{-1}\\text{mol}^{-1}$, $T = 450\\text{ K} \\implies RT = 37.395$<br>
$$K_c = (2.0 \\times 10^{10}) \\times 37.395 = 7.479 \\times 10^{11}\\text{ L mol}^{-1}$$</p>
<p><b>Final Answer:</b> $K_c = 7.48 \\times 10^{11}\\text{ M}^{-1}$.</p>`,
      rubricRows: [
        { key: "Rearranging Kc = Kp * RT for Delta n_g = -1", marks: "1 Mark" },
        { key: "Computing Kc = 7.48 x 10^11 M^-1", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q15",
      ncertRef: "6.15",
      marks: "2 Marks",
      questionHtml: "A sample of $\\text{PCl}_5$ was heated to $100^\\circ\\text{C}$ in a closed flask. The reaction is $\\text{PCl}_5(\\text{g}) \\rightleftharpoons \\text{PCl}_3(\\text{g}) + \\text{Cl}_2(\\text{g})$. The equilibrium concentrations are $[\\text{PCl}_5] = 0.8\\text{ M}$, $[\\text{PCl}_3] = 1.2\\text{ M}$, $[\\text{Cl}_2] = 1.2\\text{ M}$. Calculate $K_c$.",
      solutionStepsHtml: `<p><b>Step 1: Equilibrium expression:</b><br>
$$K_c = \\frac{[\\text{PCl}_3][\\text{Cl}_2]}{[\\text{PCl}_5]}$$</p>
<p><b>Step 2: Substitution:</b><br>
$$K_c = \\frac{1.2 \\times 1.2}{0.8} = \\frac{1.44}{0.8} = 1.8\\text{ M}$$</p>
<p><b>Final Answer:</b> $K_c = 1.8\\text{ mol L}^{-1}$.</p>`,
      rubricRows: [
        { key: "Writing Kc expression", marks: "1 Mark" },
        { key: "Numerical substitution yielding 1.8 mol/L", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q16",
      ncertRef: "6.16",
      marks: "2 Marks",
      questionHtml: "Explain why pure liquids and solids can be ignored while writing the equilibrium constant expression.",
      solutionStepsHtml: `<p><b>Explanation:</b><br>
The molar concentration (or density in moles per volume) of a pure solid or pure liquid is defined as:<br>
$$\\text{Molar Concentration} = \\frac{\\text{Moles}}{\\text{Volume}} = \\frac{\\text{Mass} / M}{V} = \\frac{\\text{Mass} / V}{M} = \\frac{\\text{Density}}{M}$$
Since the density of a pure solid or liquid is an intensive property that remains constant at a fixed temperature, and its molar mass $M$ is a constant, its <b>molar concentration is constant</b> throughout the reaction.<br>
In chemical thermodynamics, the thermodynamic activity of pure solids and pure liquids in their standard states is conventionally taken as unity ($a = 1$). Consequently, this constant concentration is subsumed into the equilibrium constant $K$, and omitted from the equilibrium expression.</p>`,
      rubricRows: [
        { key: "Mathematical derivation: Density / Molar Mass is constant", marks: "1 Mark" },
        { key: "Thermodynamic standard state activity = 1 explained", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q17",
      ncertRef: "6.17",
      marks: "3 Marks",
      questionHtml: "Reaction between $\\text{N}_2$ and $\\text{O}_2$ takes place as follows:<br>$$2\\text{N}_2(\\text{g}) + \\text{O}_2(\\text{g}) \\rightleftharpoons 2\\text{N}_2\\text{O}(\\text{g})$$<br>If a mixture of $0.482\\text{ mol}$ of $\\text{N}_2$ and $0.933\\text{ mol}$ of $\\text{O}_2$ is placed in a reaction vessel of volume $10\\text{ L}$ and allowed to form $\\text{N}_2\\text{O}$ at a temperature for which $K_c = 2.0 \\times 10^{-37}$, determine the composition of equilibrium mixture.",
      solutionStepsHtml: `<p><b>Step 1: Initial concentrations:</b><br>
$$[\\text{N}_2]_0 = \\frac{0.482}{10} = 0.0482\\text{ M}, \\quad [\\text{O}_2]_0 = \\frac{0.933}{10} = 0.0933\\text{ M}$$</p>
<p><b>Step 2: Analysis of $K_c$:</b><br>
The equilibrium constant $K_c = 2.0 \\times 10^{-37}$ is extraordinarily small ($10^{-37} \\ll 1$). This means that practically negligible amount of reactants react to form products.</p>
<p><b>Step 3: Equilibrium concentrations of reactants:</b><br>
$$[\\text{N}_2]_{\\text{eq}} \\approx [\\text{N}_2]_0 = 0.0482\\text{ M}$$
$$[\\text{O}_2]_{\\text{eq}} \\approx [\\text{O}_2]_0 = 0.0933\\text{ M}$$</p>
<p><b>Step 4: Equilibrium concentration of product $\\text{N}_2\\text{O}$:</b><br>
$$K_c = \\frac{[\\text{N}_2\\text{O}]^2}{[\\text{N}_2]^2 [\\text{O}_2]} \\implies [\\text{N}_2\\text{O}] = \\sqrt{K_c [\\text{N}_2]^2 [\\text{O}_2]}$$
$$[\\text{N}_2\\text{O}] = \\sqrt{(2.0 \\times 10^{-37}) \\times (0.0482)^2 \\times (0.0933)}$$
$$(0.0482)^2 \\times 0.0933 = 2.323 \\times 10^{-3} \\times 0.0933 = 2.167 \\times 10^{-4}$$
$$[\\text{N}_2\\text{O}] = \\sqrt{2.0 \\times 10^{-37} \\times 2.167 \\times 10^{-4}} = \\sqrt{4.335 \\times 10^{-41}} = \\sqrt{43.35 \\times 10^{-42}} \\approx 6.58 \\times 10^{-21}\\text{ M}$$</p>
<p><b>Final Answer:</b> $[\\text{N}_2] = 0.0482\\text{ M}$, $[\\text{O}_2] = 0.0933\\text{ M}$, and $[\\text{N}_2\\text{O}] = 6.58 \\times 10^{-21}\\text{ M}$.</p>`,
      rubricRows: [
        { key: "Initial concentration calculation and recognizing Kc << 1 approximation", marks: "1 Mark" },
        { key: "Setting up [N2O] expression from Kc", marks: "1 Mark" },
        { key: "Final concentrations: [N2O] = 6.58 x 10^-21 M, reactants unchanged", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q18",
      ncertRef: "6.18",
      marks: "4 Marks",
      questionHtml: "Hydrogen gas is obtained from the reaction:<br>$$\\text{CH}_4(\\text{g}) + \\text{H}_2\\text{O}(\\text{g}) \\rightleftharpoons \\text{CO}(\\text{g}) + 3\\text{H}_2(\\text{g})$$<br>(a) Write the expression for $K_p$.<br>(b) How will the values of $K_p$ and composition of equilibrium mixture be affected by:<br>(i) increasing the pressure<br>(ii) increasing the temperature<br>(iii) using a catalyst?",
      solutionStepsHtml: `<p><b>(a) Expression for $K_p$:</b><br>
$$K_p = \\frac{p_{\\text{CO}} \\cdot (p_{\\text{H}_2})^3}{p_{\\text{CH}_4} \\cdot p_{\\text{H}_2\\text{O}}}$$</p>
<p><b>(b) Effects on $K_p$ and composition:</b><br>
• <b>(i) Increasing Pressure:</b><br>
$\\Delta n_g = (1 + 3) - (1 + 1) = 4 - 2 = +2$. By Le Chatelier's principle, an increase in pressure shifts the equilibrium towards the side with fewer moles of gas (reverse direction). Thus, the amounts of $\\text{CH}_4$ and $\\text{H}_2\\text{O}$ increase while $\\text{CO}$ and $\\text{H}_2$ decrease. <b>$K_p$ remains unchanged</b> (depends only on $T$).<br>
• <b>(ii) Increasing Temperature:</b><br>
Steam reforming of methane is strongly <b>endothermic</b> ($\\Delta H > 0$). According to Le Chatelier's principle, increasing temperature favors the endothermic direction (forward reaction). Therefore, the equilibrium shifts to the <b>forward direction</b>, producing more $\\text{CO}$ and $\\text{H}_2$. <b>$K_p$ increases</b>.<br>
• <b>(iii) Using a Catalyst:</b><br>
A catalyst speeds up both forward and reverse reactions equally. <b>$K_p$ remains unchanged</b> and the <b>composition of the equilibrium mixture remains unchanged</b> (it merely helps achieve equilibrium faster).</p>`,
      rubricRows: [
        { key: "Part (a): Correct Kp expression", marks: "1 Mark" },
        { key: "Part (b)(i): Backward shift, Kp constant", marks: "1 Mark" },
        { key: "Part (b)(ii): Forward shift, Kp increases", marks: "1 Mark" },
        { key: "Part (b)(iii): No change in equilibrium position or Kp", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q19",
      ncertRef: "6.19",
      marks: "4 Marks",
      questionHtml: "Describe the effect of:<br>(a) addition of $\\text{H}_2$<br>(b) addition of $\\text{CH}_3\\text{OH}$<br>(c) removal of $\\text{CO}$<br>(d) removal of $\\text{CH}_3\\text{OH}$<br>on the equilibrium of the reaction:<br>$$2\\text{H}_2(\\text{g}) + \\text{CO}(\\text{g}) \\rightleftharpoons \\text{CH}_3\\text{OH}(\\text{g})$$",
      solutionStepsHtml: `<p>By Le Chatelier's principle, when a disturbance is applied to an equilibrium system, the system responds in a direction that opposes the disturbance:</p>
<p><b>(a) Addition of $\\text{H}_2$:</b><br>
Adding reactant $\\text{H}_2$ causes $Q_c < K_c$. The equilibrium shifts in the <b>forward direction</b> to consume the added $\\text{H}_2$, producing more $\\text{CH}_3\\text{OH}$.</p>
<p><b>(b) Addition of $\\text{CH}_3\\text{OH}$:</b><br>
Adding product $\\text{CH}_3\\text{OH}$ causes $Q_c > K_c$. The equilibrium shifts in the <b>reverse (backward) direction</b> to consume the added methanol, producing more $\\text{H}_2$ and $\\text{CO}$.</p>
<p><b>(c) Removal of $\\text{CO}$:</b><br>
Removing reactant $\\text{CO}$ causes $Q_c > K_c$. The equilibrium shifts in the <b>reverse (backward) direction</b> to replace the removed $\\text{CO}$.</p>
<p><b>(d) Removal of $\\text{CH}_3\\text{OH}$:</b><br>
Removing product $\\text{CH}_3\\text{OH}$ causes $Q_c < K_c$. The equilibrium shifts in the <b>forward direction</b> to produce more $\\text{CH}_3\\text{OH}$.</p>`,
      rubricRows: [
        { key: "Effect of adding H2 (Forward shift)", marks: "1 Mark" },
        { key: "Effect of adding CH3OH (Backward shift)", marks: "1 Mark" },
        { key: "Effect of removing CO (Backward shift)", marks: "1 Mark" },
        { key: "Effect of removing CH3OH (Forward shift)", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q20",
      ncertRef: "6.20",
      marks: "4 Marks",
      questionHtml: "At $473\\text{ K}$, equilibrium constant $K_c$ for decomposition of phosphorus pentachloride, $\\text{PCl}_5$ is $8.3 \\times 10^{-3}$. If decomposition is depicted as:<br>$$\\text{PCl}_5(\\text{g}) \\rightleftharpoons \\text{PCl}_3(\\text{g}) + \\text{Cl}_2(\\text{g}), \\quad \\Delta_r H^\\circ = 124.0\\text{ kJ mol}^{-1}$$<br>(a) Write an expression for $K_c$ for the reaction.<br>(b) What is the value of $K_c$ for the reverse reaction at the same temperature?<br>(c) What would be the effect on $K_c$ if:<br>(i) more $\\text{PCl}_5$ is added<br>(ii) pressure is increased<br>(iii) the temperature is increased?",
      solutionStepsHtml: `<p><b>(a) Expression for $K_c$:</b><br>
$$K_c = \\frac{[\\text{PCl}_3][\\text{Cl}_2]}{[\\text{PCl}_5]}$$</p>
<p><b>(b) Value of $K_c'$ for reverse reaction:</b><br>
$$K_c' = \\frac{1}{K_c} = \\frac{1}{8.3 \\times 10^{-3}} = \\frac{1000}{8.3} \\approx 120.48\\text{ L mol}^{-1}$$</p>
<p><b>(c) Effect on $K_c$:</b><br>
• <b>(i) Addition of more $\\text{PCl}_5$:</b> $K_c$ depends solely on temperature. Therefore, <b>$K_c$ remains unchanged</b> (only concentrations shift).<br>
• <b>(ii) Increasing pressure:</b> <b>$K_c$ remains unchanged</b> (pressure alters equilibrium position toward fewer moles, but not $K_c$).<br>
• <b>(iii) Increasing temperature:</b> Since $\\Delta_r H^\\circ = +124.0\\text{ kJ mol}^{-1}$ (endothermic), an increase in temperature shifts the equilibrium forward, so <b>$K_c$ increases</b>.</p>`,
      rubricRows: [
        { key: "Part (a): Correct Kc expression", marks: "1 Mark" },
        { key: "Part (b): Kc' = 1/Kc = 120.48", marks: "1 Mark" },
        { key: "Part (c)(i) & (ii): Kc remains unchanged", marks: "1 Mark" },
        { key: "Part (c)(iii): Kc increases (endothermic reaction)", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q21",
      ncertRef: "6.21",
      marks: "3 Marks",
      questionHtml: "Dihydrogen gas is used in Haber's process for manufacturing ammonia:<br>$$\\text{N}_2(\\text{g}) + 3\\text{H}_2(\\text{g}) \\rightleftharpoons 2\\text{NH}_3(\\text{g}), \\quad \\Delta H = -92.4\\text{ kJ mol}^{-1}$$<br>Mention conditions for maximum yield of $\\text{NH}_3$.",
      solutionStepsHtml: `<p>By Le Chatelier's principle, to maximize the yield of ammonia (forward reaction):</p>
<p>1. <b>High Pressure:</b><br>
$\\Delta n_g = 2 - (1 + 3) = -2$ (volume decreases from 4 moles to 2 moles). High pressure shifts the equilibrium in the forward direction. Industrially, optimum pressure of <b>$200\\text{ atm}$</b> ($20\\text{ MPa}$) is maintained.</p>
<p>2. <b>Optimum (Moderate) Temperature:</b><br>
Since the reaction is <b>exothermic</b> ($\\Delta H = -92.4\\text{ kJ mol}^{-1}$), low temperature thermodynamically favors the forward reaction. However, at very low temperatures the rate of reaction is too slow. Hence an optimum temperature of about <b>$700\\text{ K}$ ($450^\\circ\\text{C}-500^\\circ\\text{C}$)</b> is used.</p>
<p>3. <b>Continuous Removal of Ammonia:</b><br>
Liquefying and continuously withdrawing $\\text{NH}_3$ drives the equilibrium continuously forward.</p>
<p>4. <b>Catalyst & Promoter:</b><br>
Finely divided iron ($\text{Fe}$) catalyst with molybdenum ($\text{Mo}$) or $\text{K}_2\text{O} / \text{Al}_2\text{O}_3$ as promoter accelerates the attainment of equilibrium.</p>`,
      rubricRows: [
        { key: "High pressure (200 atm) justified by Delta n_g = -2", marks: "1 Mark" },
        { key: "Optimum temperature (700 K) balance of thermodynamics and kinetics", marks: "1 Mark" },
        { key: "Catalyst and continuous product removal", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q22",
      ncertRef: "6.22",
      marks: "3 Marks",
      questionHtml: "What will be the effect of increasing the pressure on the following equilibria:<br>(i) $2\\text{SO}_2(\\text{g}) + \\text{O}_2(\\text{g}) \\rightleftharpoons 2\\text{SO}_3(\\text{g})$<br>(ii) $\\text{N}_2\\text{O}_4(\\text{g}) \\rightleftharpoons 2\\text{NO}_2(\\text{g})$<br>(iii) $4\\text{NH}_3(\\text{g}) + 5\\text{O}_2(\\text{g}) \\rightleftharpoons 4\\text{NO}(\\text{g}) + 6\\text{H}_2\\text{O}(\\text{g})$<br>(iv) $\\text{C}(\\text{s}) + \\text{H}_2\\text{O}(\\text{g}) \\rightleftharpoons \\text{CO}(\\text{g}) + \\text{H}_2(\\text{g})$<br>(v) $\\text{CO}(\\text{g}) + 3\\text{H}_2(\\text{g}) \\rightleftharpoons \\text{CH}_4(\\text{g}) + \\text{H}_2\\text{O}(\\text{g})$<br>(vi) $\\text{CaCO}_3(\\text{s}) \\rightleftharpoons \\text{CaO}(\\text{s}) + \\text{CO}_2(\\text{g})$?",
      solutionStepsHtml: `<p><i>Principle: Increasing pressure shifts equilibrium in the direction with fewer gaseous moles (smaller volume).</i></p>
<p><b>(i) $2\\text{SO}_2(\\text{g}) + \\text{O}_2(\\text{g}) \\rightleftharpoons 2\\text{SO}_3(\\text{g})$:</b><br>
$\\Delta n_g = 2 - 3 = -1$. Reactants have 3 moles, products have 2 moles. <b>Shifts in Forward direction</b>.</p>
<p><b>(ii) $\\text{N}_2\\text{O}_4(\\text{g}) \\rightleftharpoons 2\\text{NO}_2(\\text{g})$:</b><br>
$\\Delta n_g = 2 - 1 = +1$. Reactants have 1 mole, products have 2 moles. <b>Shifts in Reverse (backward) direction</b>.</p>
<p><b>(iii) $4\\text{NH}_3(\\text{g}) + 5\\text{O}_2(\\text{g}) \\rightleftharpoons 4\\text{NO}(\\text{g}) + 6\\text{H}_2\\text{O}(\\text{g})$:</b><br>
$\\Delta n_g = (4 + 6) - (4 + 5) = 10 - 9 = +1$. Reactants have 9 moles, products have 10 moles. <b>Shifts in Reverse direction</b>.</p>
<p><b>(iv) $\\text{C}(\\text{s}) + \\text{H}_2\\text{O}(\\text{g}) \\rightleftharpoons \\text{CO}(\\text{g}) + \\text{H}_2(\\text{g})$:</b><br>
$\\Delta n_g = 2 - 1 = +1$ (carbon is solid). Reactant gas = 1, product gas = 2. <b>Shifts in Reverse direction</b>.</p>
<p><b>(v) $\\text{CO}(\\text{g}) + 3\\text{H}_2(\\text{g}) \\rightleftharpoons \\text{CH}_4(\\text{g}) + \\text{H}_2\\text{O}(\\text{g})$:</b><br>
$\\Delta n_g = 2 - 4 = -2$. Reactant gas = 4, product gas = 2. <b>Shifts in Forward direction</b>.</p>
<p><b>(vi) $\\text{CaCO}_3(\\text{s}) \\rightleftharpoons \\text{CaO}(\\text{s}) + \\text{CO}_2(\\text{g})$:</b><br>
$\\Delta n_g = 1 - 0 = +1$ (only $\\text{CO}_2$ is gas). <b>Shifts in Reverse direction</b>.</p>`,
      rubricRows: [
        { key: "Parts (i) and (v): Forward direction identified", marks: "1 Mark" },
        { key: "Parts (ii), (iii), (iv), (vi): Backward direction identified", marks: "1.5 Marks" },
        { key: "Le Chatelier pressure-moles principle clearly stated", marks: "0.5 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q23",
      ncertRef: "6.23",
      marks: "4 Marks",
      questionHtml: "The equilibrium constant $K_c$ for the reaction:<br>$$\\text{H}_2(\\text{g}) + \\text{CO}_2(\\text{g}) \\rightleftharpoons \\text{H}_2\\text{O}(\\text{g}) + \\text{CO}(\\text{g})$$<br>is $1.80$ at $1000\\text{ K}$. If $0.1\\text{ mol}$ of $\\text{H}_2$, $0.1\\text{ mol}$ of $\\text{CO}_2$, $0.1\\text{ mol}$ of $\\text{H}_2\\text{O}$ and $0.1\\text{ mol}$ of $\\text{CO}$ are mixed in $1\\text{ L}$ vessel, determine the equilibrium concentrations.",
      solutionStepsHtml: `<p><b>Step 1: Calculate Reaction Quotient $Q_c$:</b><br>
Initial concentrations: $[\\text{H}_2] = 0.1\\text{ M}$, $[\\text{CO}_2] = 0.1\\text{ M}$, $[\\text{H}_2\\text{O}] = 0.1\\text{ M}$, $[\\text{CO}] = 0.1\\text{ M}$.<br>
$$Q_c = \\frac{[\\text{H}_2\\text{O}][\\text{CO}]}{[\\text{H}_2][\\text{CO}_2]} = \\frac{0.1 \\times 0.1}{0.1 \\times 0.1} = 1.0$$
Since $Q_c (1.0) < K_c (1.80)$, the reaction will proceed in the <b>forward direction</b>.</p>
<p><b>Step 2: ICE Table:</b><br>
Let $x$ be the change in concentration towards the forward direction:<br>
• $[\\text{H}_2]_{\\text{eq}} = 0.1 - x$<br>
• $[\\text{CO}_2]_{\\text{eq}} = 0.1 - x$<br>
• $[\\text{H}_2\\text{O}]_{\\text{eq}} = 0.1 + x$<br>
• $[\\text{CO}]_{\\text{eq}} = 0.1 + x$</p>
<p><b>Step 3: Solve for $x$:</b><br>
$$K_c = \\frac{(0.1 + x)^2}{(0.1 - x)^2} = 1.80$$
Taking square root on both sides:
$$\\frac{0.1 + x}{0.1 - x} = \\sqrt{1.80} \\approx 1.3416$$
$$0.1 + x = 1.3416(0.1 - x) = 0.13416 - 1.3416 x$$
$$2.3416 x = 0.13416 - 0.1 = 0.03416$$
$$x = \\frac{0.03416}{2.3416} \\approx 0.0146\\text{ M}$$</p>
<p><b>Step 4: Equilibrium concentrations:</b><br>
$$[\\text{H}_2] = [\\text{CO}_2] = 0.1 - 0.0146 = 0.0854\\text{ M} \\approx 0.085\\text{ M}$$
$$[\\text{H}_2\\text{O}] = [\\text{CO}] = 0.1 + 0.0146 = 0.1146\\text{ M} \\approx 0.115\\text{ M}$$</p>
<p><b>Final Answer:</b> $[\\text{H}_2] = [\\text{CO}_2] = 0.0854\\text{ M}$ and $[\\text{H}_2\\text{O}] = [\\text{CO}] = 0.1146\\text{ M}$.</p>`,
      rubricRows: [
        { key: "Determining Qc = 1.0 < Kc hence forward reaction", marks: "1 Mark" },
        { key: "ICE table and setting up square root equation", marks: "1 Mark" },
        { key: "Solving for x = 0.0146 M", marks: "1 Mark" },
        { key: "Final concentrations [H2]=[CO2]=0.0854 M and [H2O]=[CO]=0.1146 M", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q24",
      ncertRef: "6.24",
      marks: "2 Marks",
      questionHtml: "For the reaction:<br>$$\\text{N}_2(\\text{g}) + 3\\text{H}_2(\\text{g}) \\rightleftharpoons 2\\text{NH}_3(\\text{g})$$<br>at $500\\text{ K}$, $K_p = 1.44 \\times 10^{-5}$. Find $K_c$ at this temperature.",
      solutionStepsHtml: `<p><b>Step 1: Determine $\\Delta n_g$:</b><br>
$$\\Delta n_g = 2 - (1 + 3) = -2$$</p>
<p><b>Step 2: Formula:</b><br>
$$K_p = K_c(RT)^{\\Delta n_g} \\implies K_c = K_p (RT)^2$$
Using $R = 0.08314\\text{ bar L K}^{-1}\\text{mol}^{-1}$ and $T = 500\\text{ K}$:<br>
$$RT = 0.08314 \\times 500 = 41.57$$
$$(RT)^2 = (41.57)^2 = 1728.06$$</p>
<p><b>Step 3: Calculate $K_c$:</b><br>
$$K_c = (1.44 \\times 10^{-5}) \\times 1728.06 = 0.02488 = 2.49 \\times 10^{-2}\\text{ L}^2\\text{mol}^{-2}$$</p>
<p><b>Final Answer:</b> $K_c = 2.49 \\times 10^{-2}\\text{ M}^{-2}$.</p>`,
      rubricRows: [
        { key: "Correct relation Kc = Kp * (RT)^2 with Delta n_g = -2", marks: "1 Mark" },
        { key: "Numerical evaluation yielding 2.49 x 10^-2 M^-2", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q25",
      ncertRef: "6.25",
      marks: "3 Marks",
      questionHtml: "One mole of $\\text{H}_2\\text{O}$ and one mole of $\\text{CO}$ are taken in $10\\text{ L}$ vessel and heated to $725\\text{ K}$. At equilibrium, $40\\%$ of water (by mass) reacts with $\\text{CO}$ according to the equation:<br>$$\\text{H}_2\\text{O}(\\text{g}) + \\text{CO}(\\text{g}) \\rightleftharpoons \\text{H}_2(\\text{g}) + \\text{CO}_2(\\text{g})$$<br>Calculate the equilibrium constant for the reaction.",
      solutionStepsHtml: `<p><b>Step 1: Determine moles reacting:</b><br>
Initial moles of $\\text{H}_2\\text{O} = 1\\text{ mol}$.<br>
$40\\%$ reacted $\\implies x = 0.40 \\times 1 = 0.40\\text{ mol}$.</p>
<p><b>Step 2: Equilibrium moles:</b><br>
• $n(\\text{H}_2\\text{O}) = 1 - 0.40 = 0.60\\text{ mol}$<br>
• $n(\\text{CO}) = 1 - 0.40 = 0.60\\text{ mol}$<br>
• $n(\\text{H}_2) = 0.40\\text{ mol}$<br>
• $n(\\text{CO}_2) = 0.40\\text{ mol}$</p>
<p><b>Step 3: Calculate $K_c$:</b><br>
Since $\\Delta n_g = (1 + 1) - (1 + 1) = 0$, the volume term cancels out ($V = 10\\text{ L}$):<br>
$$K_c = \\frac{[\\text{H}_2][\\text{CO}_2]}{[\\text{H}_2\\text{O}][\\text{CO}]} = \\frac{(0.40 / 10) \\times (0.40 / 10)}{(0.60 / 10) \\times (0.60 / 10)} = \\frac{0.40 \\times 0.40}{0.60 \\times 0.60} = \\frac{0.16}{0.36} = \\frac{4}{9} \\approx 0.444$$</p>
<p><b>Final Answer:</b> $K_c = 0.444$ (or $0.44$).</p>`,
      rubricRows: [
        { key: "Determining equilibrium moles (0.6 mol reactants, 0.4 mol products)", marks: "1 Mark" },
        { key: "Formulating Kc expression with volume cancellation", marks: "1 Mark" },
        { key: "Accurate computation yielding Kc = 0.444", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q26",
      ncertRef: "6.26",
      marks: "3 Marks",
      questionHtml: "At $700\\text{ K}$, equilibrium constant for the reaction:<br>$$\\text{H}_2(\\text{g}) + \\text{I}_2(\\text{g}) \\rightleftharpoons 2\\text{HI}(\\text{g})$$<br>is $54.8$. If $0.5\\text{ mol/L}$ of $\\text{HI}(\\text{g})$ is present at equilibrium at $700\\text{ K}$, what are the concentrations of $\\text{H}_2$ and $\\text{I}_2$ assuming initial state was purely $\\text{HI}$?",
      solutionStepsHtml: `<p><b>Step 1: Stoichiometric ratio:</b><br>
Pure $\\text{HI}$ decomposes as: $2\\text{HI}(\\text{g}) \\rightleftharpoons \\text{H}_2(\\text{g}) + \\text{I}_2(\\text{g})$.<br>
Therefore, at equilibrium: $[\\text{H}_2] = [\\text{I}_2] = c$.</p>
<p><b>Step 2: Equilibrium Constant:</b><br>
$$K_c = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]} = 54.8$$
$$54.8 = \\frac{(0.5)^2}{c^2} = \\frac{0.25}{c^2}$$
$$c^2 = \\frac{0.25}{54.8} = 4.562 \\times 10^{-3}$$
$$c = \\sqrt{4.562 \\times 10^{-3}} = 0.0675\\text{ M} \\approx 0.068\\text{ M}$$</p>
<p><b>Final Answer:</b> $[\\text{H}_2] = [\\text{I}_2] = 0.068\\text{ mol L}^{-1}$.</p>`,
      rubricRows: [
        { key: "Setting up [H2] = [I2] = c", marks: "1 Mark" },
        { key: "Applying Kc = 54.8 = 0.25 / c^2", marks: "1 Mark" },
        { key: "Solving for c = 0.068 mol/L", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q27",
      ncertRef: "6.27",
      marks: "4 Marks",
      questionHtml: "What is the equilibrium concentration of each substance in the reaction:<br>$$\\text{PCl}_5(\\text{g}) \\rightleftharpoons \\text{PCl}_3(\\text{g}) + \\text{Cl}_2(\\text{g})$$<br>if initially only $\\text{PCl}_5$ is present at a concentration of $0.15\\text{ M}$ and $K_c = 0.042$?",
      solutionStepsHtml: `<p><b>Step 1: Set up equilibrium concentrations:</b><br>
Let $x$ be the molar concentration of $\\text{PCl}_5$ dissociated:<br>
• $[\\text{PCl}_5] = 0.15 - x$<br>
• $[\\text{PCl}_3] = x$<br>
• $[\\text{Cl}_2] = x$</p>
<p><b>Step 2: Set up quadratic equation from $K_c$:</b><br>
$$K_c = \\frac{[\\text{PCl}_3][\\text{Cl}_2]}{[\\text{PCl}_5]} = \\frac{x^2}{0.15 - x} = 0.042$$
$$x^2 = 0.042(0.15 - x) = 0.0063 - 0.042 x$$
$$x^2 + 0.042 x - 0.0063 = 0$$</p>
<p><b>Step 3: Solve quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$:</b><br>
$$b^2 - 4ac = (0.042)^2 - 4(1)(-0.0063) = 0.001764 + 0.0252 = 0.026964$$
$$\\sqrt{0.026964} \\approx 0.1642$$
$$x = \\frac{-0.042 + 0.1642}{2} = \\frac{0.1222}{2} = 0.0611\\text{ M}$$</p>
<p><b>Step 4: Equilibrium concentrations:</b><br>
$$[\\text{PCl}_3] = [\\text{Cl}_2] = 0.061\\text{ M}$$
$$[\\text{PCl}_5] = 0.15 - 0.0611 = 0.0889\\text{ M} \\approx 0.089\\text{ M}$$</p>
<p><b>Final Answer:</b> $[\\text{PCl}_5] = 0.089\\text{ M}$, $[\\text{PCl}_3] = 0.061\\text{ M}$, and $[\\text{Cl}_2] = 0.061\\text{ M}$.</p>`,
      rubricRows: [
        { key: "Setting up ICE table with x", marks: "1 Mark" },
        { key: "Forming quadratic equation x^2 + 0.042x - 0.0063 = 0", marks: "1 Mark" },
        { key: "Solving quadratic root x = 0.0611 M", marks: "1 Mark" },
        { key: "Final concentrations: [PCl5]=0.089 M, [PCl3]=[Cl2]=0.061 M", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q28",
      ncertRef: "6.28",
      marks: "2 Marks",
      questionHtml: "The value of $K_c$ for the reaction $2\\text{A} \\rightleftharpoons \\text{B} + \\text{C}$ is $2.0 \\times 10^{-3}$. At a given time, the composition of reaction mixture is $[\\text{A}] = [\\text{B}] = [\\text{C}] = 3 \\times 10^{-4}\\text{ M}$. In which direction will the reaction proceed?",
      solutionStepsHtml: `<p><b>Step 1: Calculate Reaction Quotient $Q_c$:</b><br>
For the reaction $2\\text{A} \\rightleftharpoons \\text{B} + \\text{C}$:
$$Q_c = \\frac{[\\text{B}][\\text{C}]}{[\\text{A}]^2} = \\frac{(3 \\times 10^{-4}) \\times (3 \\times 10^{-4})}{(3 \\times 10^{-4})^2} = 1.0$$</p>
<p><b>Step 2: Compare $Q_c$ and $K_c$:</b><br>
Given $K_c = 2.0 \\times 10^{-3}$.<br>
Here, $Q_c (1.0) > K_c (2.0 \\times 10^{-3})$.</p>
<p><b>Conclusion:</b> Since $Q_c > K_c$, the reaction will proceed in the <b>reverse (backward) direction</b> to reach equilibrium.</p>`,
      rubricRows: [
        { key: "Evaluating Qc = 1.0", marks: "1 Mark" },
        { key: "Comparison Qc > Kc and concluding reverse direction", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q29",
      ncertRef: "6.29",
      marks: "4 Marks",
      questionHtml: "$13.8\\text{ g}$ of $\\text{N}_2\\text{O}_4$ was placed in a $1\\text{ L}$ reaction vessel at $400\\text{ K}$ and allowed to attain equilibrium:<br>$$\\text{N}_2\\text{O}_4(\\text{g}) \\rightleftharpoons 2\\text{NO}_2(\\text{g})$$<br>The total pressure at equilibrium was found to be $9.15\\text{ bar}$. Calculate $K_c$, $K_p$ and partial pressures at equilibrium.",
      solutionStepsHtml: `<p><b>Step 1: Initial moles of $\\text{N}_2\\text{O}_4$:</b><br>
Molar mass of $\\text{N}_2\\text{O}_4 = 2(14) + 4(16) = 92\\text{ g mol}^{-1}$.<br>
$$n_0 = \\frac{13.8}{92} = 0.15\\text{ mol}$$</p>
<p><b>Step 2: Initial pressure $p_0$:</b><br>
$$p_0 = \\frac{n_0 R T}{V} = \\frac{0.15 \\times 0.08314 \\times 400}{1} = 4.9884\\text{ bar} \\approx 4.99\\text{ bar}$$</p>
<p><b>Step 3: Total pressure and degree of dissociation $x$:</b><br>
$\\text{N}_2\\text{O}_4 \\rightleftharpoons 2\\text{NO}_2$<br>
At equilibrium: $p_{\\text{N}_2\\text{O}_4} = p_0 - x$, $p_{\\text{NO}_2} = 2x$<br>
Total pressure $p_{\\text{total}} = (p_0 - x) + 2x = p_0 + x = 9.15\\text{ bar}$<br>
$$x = 9.15 - 4.988 = 4.162\\text{ bar}$$</p>
<p><b>Step 4: Equilibrium partial pressures:</b><br>
$$p_{\\text{N}_2\\text{O}_4} = 4.988 - 4.162 = 0.826\\text{ bar}$$
$$p_{\\text{NO}_2} = 2(4.162) = 8.324\\text{ bar}$$</p>
<p><b>Step 5: Calculate $K_p$ and $K_c$:</b><br>
$$K_p = \\frac{(p_{\\text{NO}_2})^2}{p_{\\text{N}_2\\text{O}_4}} = \\frac{(8.324)^2}{0.826} = \\frac{69.289}{0.826} = 83.885\\text{ bar} \\approx 83.9\\text{ bar}$$
$$K_c = \\frac{K_p}{(RT)^{\\Delta n_g}} = \\frac{83.885}{0.08314 \\times 400} = \\frac{83.885}{33.256} \\approx 2.52\\text{ mol L}^{-1}$$</p>
<p><b>Final Answer:</b> $p_{\\text{N}_2\\text{O}_4} = 0.826\\text{ bar}$, $p_{\\text{NO}_2} = 8.324\\text{ bar}$, $K_p = 83.9\\text{ bar}$, and $K_c = 2.52\\text{ M}$.</p>`,
      rubricRows: [
        { key: "Determining initial moles (0.15) and initial pressure (4.99 bar)", marks: "1 Mark" },
        { key: "Finding x = 4.162 bar and equilibrium partial pressures", marks: "1 Mark" },
        { key: "Calculating Kp = 83.9 bar", marks: "1 Mark" },
        { key: "Calculating Kc = Kp / RT = 2.52 mol/L", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q30",
      ncertRef: "6.30",
      marks: "2 Marks",
      questionHtml: "A reaction between ammonia and oxygen is:<br>$$4\\text{NH}_3(\\text{g}) + 5\\text{O}_2(\\text{g}) \\rightleftharpoons 4\\text{NO}(\\text{g}) + 6\\text{H}_2\\text{O}(\\text{g})$$<br>Write $K_c$ and $K_p$ expressions for this reaction.",
      solutionStepsHtml: `<p><b>(i) Equilibrium constant in terms of molar concentrations ($K_c$):</b><br>
$$K_c = \\frac{[\\text{NO}]^4 [\\text{H}_2\\text{O}]^6}{[\\text{NH}_3]^4 [\\text{O}_2]^5}$$</p>
<p><b>(ii) Equilibrium constant in terms of partial pressures ($K_p$):</b><br>
$$K_p = \\frac{(p_{\\text{NO}})^4 (p_{\\text{H}_2\\text{O}})^6}{(p_{\\text{NH}_3})^4 (p_{\\text{O}_2})^5}$$</p>`,
      rubricRows: [
        { key: "Writing Kc expression with correct stoichiometric powers", marks: "1 Mark" },
        { key: "Writing Kp expression in terms of partial pressures", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q31",
      ncertRef: "6.31",
      marks: "3 Marks",
      questionHtml: "What is the effect of:<br>(a) addition of inert gas at constant volume<br>(b) addition of inert gas at constant pressure<br>on the equilibrium of $\\text{N}_2(\\text{g}) + 3\\text{H}_2(\\text{g}) \\rightleftharpoons 2\\text{NH}_3(\\text{g})$?",
      solutionStepsHtml: `<p><b>(a) Addition of inert gas at constant volume:</b><br>
When an inert gas (like $\\text{Ar}$ or $\\text{He}$) is added at constant volume, the total pressure increases, but the partial pressures and molar concentrations of $\\text{N}_2$, $\\text{H}_2$ and $\\text{NH}_3$ remain entirely unchanged ($c_i = n_i / V = \\text{constant}$). Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and <b>there is no effect on the equilibrium</b>.</p>
<p><b>(b) Addition of inert gas at constant pressure:</b><br>
When an inert gas is added at constant pressure, the total volume must increase to maintain constant pressure. This dilutes all reacting species, lowering their partial pressures.<br>
By Le Chatelier's principle, the equilibrium shifts in the direction that has a larger number of gaseous moles. For this reaction:<br>
$$\\Delta n_g = 2 - (1 + 3) = 2 - 4 = -2$$
Reactants have 4 moles, while products have 2 moles. Therefore, adding inert gas at constant pressure causes the equilibrium to <b>shift in the reverse (backward) direction</b> (dissociation of $\\text{NH}_3$).</p>`,
      rubricRows: [
        { key: "Constant volume: partial pressures unchanged -> No effect", marks: "1.5 Marks" },
        { key: "Constant pressure: volume increases -> shifts backward towards more moles", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch6-q32",
      ncertRef: "6.32",
      marks: "3 Marks",
      questionHtml: "Calculate $\\Delta G^\\circ$ for the conversion of oxygen to ozone, $\\frac{3}{2}\\text{O}_2(\\text{g}) \\rightleftharpoons \\text{O}_3(\\text{g})$ at $298\\text{ K}$, if $K_p$ for this conversion is $2.47 \\times 10^{-29}$.",
      solutionStepsHtml: `<p><b>Step 1: Formula connecting $\\Delta G^\\circ$ and $K_p$:</b><br>
$$\\Delta G^\\circ = -2.303 RT \\log K_p$$</p>
<p><b>Step 2: Values:</b><br>
$R = 8.314\\text{ J K}^{-1}\\text{mol}^{-1}$, $T = 298\\text{ K}$, $K_p = 2.47 \\times 10^{-29}$.</p>
<p><b>Step 3: Calculation:</b><br>
$$\\log(2.47 \\times 10^{-29}) = \\log(2.47) - 29 = 0.3927 - 29 = -28.6073$$
$$\\Delta G^\\circ = -2.303 \\times 8.314 \\times 298 \\times (-28.6073)$$
$$2.303 \\times 8.314 \\times 298 \\approx 5705.85\\text{ J mol}^{-1}$$
$$\\Delta G^\\circ = 5705.85 \\times 28.6073 = +163229\\text{ J mol}^{-1} = +163.23\\text{ kJ mol}^{-1}$$</p>
<p><b>Final Answer:</b> $\\Delta G^\\circ = +163.23\\text{ kJ mol}^{-1}$ (large positive value confirms ozone formation from oxygen is non-spontaneous at room temperature).</p>`,
      rubricRows: [
        { key: "Formula Delta G° = -2.303 RT log Kp", marks: "1 Mark" },
        { key: "Evaluating log Kp = -28.607", marks: "1 Mark" },
        { key: "Correct final result +163.23 kJ/mol", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch6-q33",
      ncertRef: "6.33",
      marks: "3 Marks",
      questionHtml: "Find out the value of $K_c$ for the reaction:<br>$$2\\text{NO}(\\text{g}) + \\text{Cl}_2(\\text{g}) \\rightleftharpoons 2\\text{NOCl}(\\text{g})$$<br>given that $\\Delta_r G^\\circ = -45.65\\text{ kJ mol}^{-1}$ at $298\\text{ K}$.",
      solutionStepsHtml: `<p><b>Step 1: Calculate $K_p$ from $\\Delta_r G^\\circ$:</b><br>
$$\\Delta_r G^\\circ = -2.303 RT \\log K_p \\implies \\log K_p = \\frac{-\\Delta_r G^\\circ}{2.303 RT}$$
$$\\log K_p = \\frac{-(-45650\\text{ J mol}^{-1})}{2.303 \\times 8.314 \\times 298} = \\frac{45650}{5705.85} \\approx 8.0006$$
$$K_p = 10^{8.0006} \\approx 1.001 \\times 10^8\\text{ bar}^{-1}$$</p>
<p><b>Step 2: Relate $K_p$ to $K_c$:</b><br>
$$\\Delta n_g = 2 - (2 + 1) = -1$$
$$K_p = K_c(RT)^{-1} = \\frac{K_c}{RT} \\implies K_c = K_p \\times (RT)$$
Using $R = 0.08314\\text{ bar L K}^{-1}\\text{mol}^{-1}$ and $T = 298\\text{ K}$:<br>
$$RT = 0.08314 \\times 298 = 24.776$$
$$K_c = (1.001 \\times 10^8) \\times 24.776 = 2.48 \\times 10^9\\text{ L mol}^{-1}$$</p>
<p><b>Final Answer:</b> $K_c = 2.48 \\times 10^9\\text{ M}^{-1}$.</p>`,
      rubricRows: [
        { key: "Calculating log Kp = 8.0 and Kp = 1.0 x 10^8 bar^-1", marks: "1.5 Marks" },
        { key: "Converting Kp to Kc using Kc = Kp * RT for Delta n_g = -1", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch6-q34",
      ncertRef: "6.34",
      marks: "2 Marks",
      questionHtml: "At $450\\text{ K}$, for reaction:<br>$$\\text{PCl}_5(\\text{g}) \\rightleftharpoons \\text{PCl}_3(\\text{g}) + \\text{Cl}_2(\\text{g}), \\quad K_p = 0.04\\text{ bar}$$<br>If the partial pressure of $\\text{PCl}_5$ is $1.0\\text{ bar}$, what are the partial pressures of $\\text{PCl}_3$ and $\\text{Cl}_2$?",
      solutionStepsHtml: `<p><b>Step 1: Stoichiometry and expression:</b><br>
$$K_p = \\frac{p_{\\text{PCl}_3} \\cdot p_{\\text{Cl}_2}}{p_{\\text{PCl}_5}}$$
From decomposition stoichiometry: $p_{\\text{PCl}_3} = p_{\\text{Cl}_2} = p$.</p>
<p><b>Step 2: Substitute values:</b><br>
$$0.04 = \\frac{p^2}{1.0} \\implies p^2 = 0.04$$
$$p = \\sqrt{0.04} = 0.2\\text{ bar}$$</p>
<p><b>Final Answer:</b> $p_{\\text{PCl}_3} = 0.2\\text{ bar}$ and $p_{\\text{Cl}_2} = 0.2\\text{ bar}$.</p>`,
      rubricRows: [
        { key: "Setting p(PCl3) = p(Cl2) = p in Kp expression", marks: "1 Mark" },
        { key: "Solving p = sqrt(0.04) = 0.2 bar", marks: "1 Mark" }
      ]
    }
  ];
}

module.exports = { getPart1Questions };
