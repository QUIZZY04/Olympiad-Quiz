/**
 * NCERT Class 11 Chemistry Chapter 8: Organic Chemistry - Some Basic Principles and Techniques
 * Part 2: Q8.21 to Q8.40 (Purification, Qualitative Tests & Quantitative Elemental Analysis)
 */

function getPart2Questions() {
  return [
    {
      id: "c11c-ch8-q21",
      ncertRef: "8.21",
      marks: "2 Marks",
      questionHtml: "Explain the reason for the fusion of an organic compound with metallic sodium for testing nitrogen, sulphur and halogens.",
      solutionStepsHtml: `<p><b>Reason for Sodium Fusion (Lassaigne's Test):</b><br>
In organic compounds, elements like nitrogen, sulphur and halogens are covalently bonded to carbon and do not ionise in aqueous solution to give characteristic ionic reactions with reagents (e.g., $\\text{AgNO}_3$ or $\\text{FeSO}_4$).</p>
<p>When fused with active metallic sodium at high temperature, the covalent bonds are cleaved and the elements are converted into water-soluble <b>inorganic ionic sodium salts</b>:<br>
• $\\text{Na} + \\text{C} + \\text{N} \\xrightarrow{\\Delta} \\mathbf{\\text{NaCN}}$ (Sodium cyanide)<br>
• $2\\text{Na} + \\text{S} \\xrightarrow{\\Delta} \\mathbf{\\text{Na}_2\\text{S}}$ (Sodium sulphide)<br>
• $\\text{Na} + \\text{X} \\xrightarrow{\\Delta} \\mathbf{\\text{NaX}}$ (Sodium halide, where $\\text{X} = \\text{Cl, Br, I}$)<br>
• $\\text{Na} + \\text{C} + \\text{N} + \\text{S} \\xrightarrow{\\Delta} \\mathbf{\\text{NaSCN}}$ (Sodium thiocyanate, if both $\\text{N}$ and $\\text{S}$ are present)</p>
<p>These ionic salts readily dissolve in water and yield unambiguous qualitative chemical precipitate or colour tests.</p>`,
      rubricRows: [
        { key: "Covalent non-ionising nature of organic heteroatoms explained", marks: "1 Mark" },
        { key: "Conversion into water-soluble ionic sodium salts (NaCN, Na2S, NaX)", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q22",
      ncertRef: "8.22",
      marks: "2 Marks",
      questionHtml: "Name a suitable technique of separation of the components from a mixture of calcium sulphate and camphor.",
      solutionStepsHtml: `<p><b>Suitable Technique:</b> <b>Sublimation</b>.</p>
<p><b>Principle & Process:</b><br>
Camphor is a sublimable solid which has high vapour pressure and directly transitions from solid to vapour state on heating without passing through the liquid state. On cooling, the vapours condense directly back into pure solid camphor.<br>
Calcium sulphate ($\\text{CaSO}_4$) is a non-volatile, non-sublimable ionic solid with a very high melting point.<br>
When the mixture is heated in a china dish covered with an inverted funnel whose stem is plugged with cotton, pure camphor sublimes and condenses on the cold inner walls of the funnel, leaving non-volatile calcium sulphate behind in the dish.</p>`,
      rubricRows: [
        { key: "Naming the technique: Sublimation", marks: "1 Mark" },
        { key: "Explanation: Volatile/sublimable camphor vs non-sublimable CaSO4", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q23",
      ncertRef: "8.23",
      marks: "3 Marks",
      questionHtml: "Explain, why an organic liquid vaporises at a temperature below its normal boiling point in steam distillation.",
      solutionStepsHtml: `<p><b>Principle of Steam Distillation:</b><br>
Steam distillation is employed for purifying water-immiscible organic liquids having significant vapour pressure at $100^\\circ\\text{C}$.</p>
<p>In a mixture of two mutually immiscible liquids (water and organic liquid), each liquid exerts its own vapour pressure independently of the other:<br>
$$P_{\\text{total}} = p_{\\text{water}} + p_{\\text{organic liquid}}$$
The mixture boils at a temperature ($T$) at which the total vapour pressure equals the external atmospheric pressure ($P_{\\text{atm}} = 1\\text{ atm} = 760\\text{ mm Hg}$):<br>
$$p_{\\text{water}} + p_{\\text{organic liquid}} = P_{\\text{atm}}$$
Since water contributes a significant partial vapour pressure ($p_{\\text{water}} > 0$), the organic liquid needs to exert only a partial pressure equal to $(P_{\\text{atm}} - p_{\\text{water}})$ for the combined system to boil.<br>
Because the required vapour pressure is much less than $1\\text{ atm}$, the mixture boils at a temperature <b>lower than the normal boiling point of both water ($100^\\circ\\text{C}$) and the organic liquid</b>, preventing thermal decomposition of sensitive organic compounds.</p>`,
      rubricRows: [
        { key: "Dalton's law for immiscible liquids: Ptotal = p1 + p2 = Patm", marks: "1.5 Marks" },
        { key: "Explanation of boiling at temperature where p(organic) = Patm - p(water)", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch8-q24",
      ncertRef: "8.24",
      marks: "2 Marks",
      questionHtml: "Will $\\text{CCl}_4$ give white precipitate of $\\text{AgCl}$ on heating it with silver nitrate? Give reason for your answer.",
      solutionStepsHtml: `<p><b>Answer:</b> <b>No</b>, carbon tetrachloride ($\\text{CCl}_4$) will not give any white precipitate of $\\text{AgCl}$ on heating with silver nitrate.</p>
<p><b>Reason:</b><br>
Precipitation of silver chloride requires the presence of free, ionised chloride ions in solution:<br>
$$\\text{Ag}^+(\\text{aq}) + \\text{Cl}^-(\\text{aq}) \\rightarrow \\text{AgCl}\\downarrow \\text{ (white ppt)}$$
$\\text{CCl}_4$ is a purely covalent, non-polar symmetrical molecule ($sp^3$, tetrahedral). The $\\text{C}-\\text{Cl}$ bonds are purely covalent and do not ionise in polar water to generate free chloride ions ($\\text{Cl}^-$). Since there are no free $\\text{Cl}^-$ ions in solution, no reaction occurs with $\\text{AgNO}_3$.</p>`,
      rubricRows: [
        { key: "Clear negative answer: No precipitate is formed", marks: "0.5 Mark" },
        { key: "Reason: Covalent non-polar nature of CCl4 lacking free chloride ions", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch8-q25",
      ncertRef: "8.25",
      marks: "2 Marks",
      questionHtml: "Why is a solution of potassium hydroxide used to absorb carbon dioxide evolved during the estimation of carbon present in an organic compound?",
      solutionStepsHtml: `<p><b>Reason:</b><br>
In Liebig's combustion method, carbon present in the organic compound is oxidised to carbon dioxide gas ($\\text{CO}_2$).<br>
$\\text{CO}_2$ is an acidic gas which reacts rapidly and quantitatively with concentrated, strongly alkaline potassium hydroxide ($\\text{KOH}$) solution to form soluble potassium carbonate and potassium bicarbonate:<br>
$$2\\text{KOH}(\\text{aq}) + \\text{CO}_2(\\text{g}) \\rightarrow \\text{K}_2\\text{CO}_3(\\text{aq}) + \\text{H}_2\\text{O}(\\text{l})$$
$$\\text{K}_2\\text{CO}_3(\\text{aq}) + \\text{H}_2\\text{O}(\\text{l}) + \\text{CO}_2(\\text{g}) \\rightarrow 2\\text{KHCO}_3(\\text{aq})$$
Potassium hydroxide is preferred over sodium hydroxide because potassium carbonate is highly soluble in water and does not crystallise to block the absorption bulb tubes.</p>`,
      rubricRows: [
        { key: "Acid-base neutralization reaction: 2KOH + CO2 -> K2CO3 + H2O", marks: "1 Mark" },
        { key: "High solubility of K2CO3 preventing tube blockage", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q26",
      ncertRef: "8.26",
      marks: "2 Marks",
      questionHtml: "Why is it necessary to use concentrated nitric acid in Carius method for the estimation of halogens?",
      solutionStepsHtml: `<p><b>Role of Concentrated Nitric Acid ($\\text{HNO}_3$):</b><br>
In the Carius method, the organic halogen compound is heated with concentrated $\\text{HNO}_3$ and silver nitrate ($\\text{AgNO}_3$) in a sealed hard-glass Carius tube at $180^\\circ\\text{C}-200^\\circ\\text{C}$.</p>
<p>1. <b>Oxidation of Carbon and Hydrogen:</b> Concentrated $\\text{HNO}_3$ is a powerful oxidising agent. It completely oxidises the organic carbon and hydrogen into gaseous $\\text{CO}_2$ and $\\text{H}_2\\text{O}$, destroying the covalent organic matrix.<br>
2. <b>Liberation and Precipitation of Halogen:</b> Cleaving the $\\text{C}-\\text{X}$ bond liberates the halogen as halide/hydrohalic acid, which immediately reacts with $\\text{AgNO}_3$ to form an insoluble silver halide precipitate:<br>
$$\\text{Ag}^+ + \\text{X}^- \\rightarrow \\text{AgX}\\downarrow$$
3. <b>Preventing Other Precipitates:</b> The strong acid medium prevents the precipitation of any silver carbonate or hydroxide.</p>`,
      rubricRows: [
        { key: "Oxidative destruction of carbon and hydrogen into CO2 and H2O", marks: "1 Mark" },
        { key: "Conversion of covalent halogen into ionic halide for quantitative AgX precipitation", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q27",
      ncertRef: "8.27",
      marks: "3 Marks",
      questionHtml: "How will you separate a mixture of ortho- and para-nitrophenols?",
      solutionStepsHtml: `<p><b>Method of Separation:</b> <b>Steam Distillation</b>.</p>
<p><b>Underlying Chemical Principle (Hydrogen Bonding):</b></p>
<p>1. <b>ortho-Nitrophenol:</b><br>
The $-\\text{OH}$ and $-\\text{NO}_2$ groups are adjacent to each other on the benzene ring, forming an <b>intramolecular hydrogen bond</b> (chelation):<br>
This intramolecular bonding prevents association between different molecules. Consequently, ortho-nitrophenol has a lower boiling point, lower solubility in water, and high vapour pressure at $100^\\circ\\text{C}$ $\\implies$ It is <b>steam volatile</b>.</p>
<p>2. <b>para-Nitrophenol:</b><br>
The $-\\text{OH}$ and $-\\text{NO}_2$ groups are positioned far apart at opposite ends of the ring, precluding intramolecular bonding. Instead, it forms strong <b>intermolecular hydrogen bonds</b> linking adjacent molecules into an extensive associated network.<br>
This intermolecular association leads to a much higher boiling point and high solubility in hot water $\\implies$ It is <b>non-steam volatile</b>.</p>
<p><b>Separation Procedure:</b> When steam is passed through the mixture, ortho-nitrophenol vaporises with steam, distils over, and collects in the receiver flask as a yellow solid, while para-nitrophenol remains behind in the distillation flask.</p>`,
      rubricRows: [
        { key: "Naming the technique: Steam distillation", marks: "1 Mark" },
        { key: "ortho-Nitrophenol: Intramolecular H-bonding -> Steam volatile", marks: "1 Mark" },
        { key: "para-Nitrophenol: Intermolecular H-bonding -> Non-steam volatile", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q28",
      ncertRef: "8.28",
      marks: "4 Marks",
      questionHtml: "Discuss the chemistry of Lassaigne's test for the detection of nitrogen in an organic compound.",
      solutionStepsHtml: `<p><b>Step-by-Step Chemistry of Lassaigne's Nitrogen Test:</b></p>
<p><b>Step 1: Sodium Fusion:</b><br>
During fusion, carbon and nitrogen from the organic compound combine with sodium to form ionic sodium cyanide:<br>
$$\\text{Na} + \\text{C} + \\text{N} \\xrightarrow{\\Delta} \\text{NaCN}$$</p>
<p><b>Step 2: Formation of Sodium Hexacyanidoferrate(II):</b><br>
The sodium extract is boiled with freshly prepared ferrous sulphate solution ($\\text{FeSO}_4$). Ferrous ions react with cyanide ions:<br>
$$\\text{FeSO}_4 + 2\\text{NaOH} \\rightarrow \\text{Fe}(\\text{OH})_2\\downarrow + \\text{Na}_2\\text{SO}_4$$
$$\\text{Fe}(\\text{OH})_2 + 2\\text{NaCN} \\rightarrow \\text{Fe}(\\text{CN})_2 + 2\\text{NaOH}$$
$$\\text{Fe}(\\text{CN})_2 + 4\\text{NaCN} \\rightarrow \\mathbf{\\text{Na}_4[\\text{Fe}(\\text{CN})_6]} \\text{ (Sodium hexacyanidoferrate(II))}$$</p>
<p><b>Step 3: Acidification and Prussian Blue Formation:</b><br>
On boiling with concentrated $\\text{H}_2\\text{SO}_4$ or adding a few drops of ferric chloride ($\\text{FeCl}_3$), some ferrous ions are oxidised to ferric ions ($\\text{Fe}^{3+}$), which react with hexacyanidoferrate(II) to form a characteristic <b>Prussian blue precipitate / colouration</b> (Ferri-ferrocyanide):<br>
$$3\\text{Na}_4[\\text{Fe}(\\text{CN})_6] + 4\\text{Fe}^{3+} \\rightarrow \\mathbf{\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3}\\downarrow \\text{ (Prussian Blue)} + 12\\text{Na}^+$$
Formation of this Prussian blue colour confirms the presence of nitrogen.</p>`,
      rubricRows: [
        { key: "Step 1: Na + C + N -> NaCN", marks: "1 Mark" },
        { key: "Step 2: Reaction with FeSO4 giving Na4[Fe(CN)6]", marks: "1.5 Marks" },
        { key: "Step 3: Formation of Prussian blue Fe4[Fe(CN)6]3 upon adding Fe3+/acid", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch8-q29",
      ncertRef: "8.29",
      marks: "2 Marks",
      questionHtml: "Give the formula of the compound responsible for the blood red colouration in the test for nitrogen and sulphur together.",
      solutionStepsHtml: `<p><b>Answer:</b><br>
When both nitrogen and sulphur are present in an organic compound, sodium fusion produces <b>sodium thiocyanate ($\\text{NaSCN}$)</b> instead of separate $\\text{NaCN}$ and $\\text{Na}_2\\text{S}$:<br>
$$\\text{Na} + \\text{C} + \\text{N} + \\text{S} \\xrightarrow{\\Delta} \\text{NaSCN}$$</p>
<p>When the sodium extract is acidified with dilute hydrochloric acid and treated with ferric chloride solution ($\\text{FeCl}_3$), thiocyanate ions form a characteristic <b>blood-red complex</b>:<br>
$$\\text{Fe}^{3+}(\\text{aq}) + \\text{SCN}^-(\\text{aq}) \\rightarrow \\mathbf{[\\text{Fe}(\\text{SCN})]^{2+}}(\\text{aq}) \\text{ (Pentaaquathiocyanatoiron(III) / Ferric thiocyanate)}$$
(or uncharged coordination complex: $\\mathbf{\\text{Fe}(\\text{SCN})_3}$).</p>`,
      rubricRows: [
        { key: "Formation of NaSCN during fusion", marks: "1 Mark" },
        { key: "Blood red complex formula: [Fe(SCN)]^2+ or Fe(SCN)3", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q30",
      ncertRef: "8.30",
      marks: "2 Marks",
      questionHtml: "Why is sodium extract prepared in distilled water?",
      solutionStepsHtml: `<p><b>Reason:</b><br>
Sodium extract must be prepared strictly in <b>distilled water</b> because ordinary tap water contains dissolved minerals and salts, including chloride ($\\text{Cl}^-$), sulphate ($\\text{SO}_4^{2-}$), calcium ($\\text{Ca}^{2+}$) and magnesium ($\\text{Mg}^{2+}$) ions.</p>
<p>If tap water is used:<br>
1. The dissolved $\\text{Cl}^-$ ions in tap water would react with $\\text{AgNO}_3$ during the halogen test to give a white precipitate of $\\text{AgCl}$, giving a <b>false positive test for chlorine</b> even when the organic compound contains no halogen.<br>
2. The dissolved $\\text{SO}_4^{2-}$ ions would react with barium chloride or lead acetate, giving a <b>false positive test for sulphur</b>.<br>
Using pure distilled water eliminates these extraneous ions and guarantees accurate qualitative detection.</p>`,
      rubricRows: [
        { key: "Presence of Cl- and SO4^2- ions in ordinary tap water", marks: "1 Mark" },
        { key: "Prevention of false-positive halogen and sulphur test results", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q31",
      ncertRef: "8.31",
      marks: "3 Marks",
      questionHtml: "What is the principle of fractional distillation? Where is it applied?",
      solutionStepsHtml: `<p><b>Principle of Fractional Distillation:</b><br>
Fractional distillation is used to separate two or more miscible volatile liquids whose boiling points are very close to each other (boiling point difference $\\Delta T_b < 25^\\circ\\text{C}$ or $25\\text{ K}$).</p>
<p>• <b>Fractionating Column:</b> A fractionating column containing glass beads or bubble plates provides a large surface area for repeated, continuous heat exchange between ascending hot vapours and descending cold condensed liquid.<br>
• <b>Continuous Condensation & Vapourisation:</b> As vapours rise, the higher boiling (less volatile) component condenses and trickles down, while the lower boiling (more volatile) component continues upward in richer concentration.<br>
By the time the vapour reaches the top of the column and enters the condenser, it consists exclusively of the pure, more volatile component.</p>
<p><b>Industrial Applications:</b><br>
1. Separation of crude petroleum into commercial fractions (petrol, kerosene, diesel, lubricating oil).<br>
2. Separation of liquefied air into nitrogen ($77\\text{ K}$) and oxygen ($90\\text{ K}$).<br>
3. Separation of acetone ($56^\\circ\\text{C}$) and methanol ($65^\\circ\\text{C}$).</p>`,
      rubricRows: [
        { key: "Principle: Small boiling point difference (< 25°C) and fractionating column", marks: "1.5 Marks" },
        { key: "Continuous condensation-revaporisation cycle explained", marks: "0.75 Mark" },
        { key: "Applications: Petroleum refining and air fractionation", marks: "0.75 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q32",
      ncertRef: "8.32",
      marks: "2 Marks",
      questionHtml: "What type of mixtures are separated by steam distillation?",
      solutionStepsHtml: `<p><b>Characteristics of Mixtures separated by Steam Distillation:</b></p>
<p>1. The organic compound must be <b>steam-volatile</b> (it must possess an appreciable partial vapour pressure of at least $10-15\\text{ mm Hg}$ around $100^\\circ\\text{C}$).<br>
2. The organic compound must be <b>completely immiscible (or practically insoluble) in water</b>.<br>
3. The impurities present in the mixture must be <b>non-volatile</b> under steam distillation conditions.<br>
4. The compound should preferably be thermally unstable near its normal boiling point (so that steam distillation isolates it safely below its decomposition temperature).</p>
<p><b>Examples:</b> Aniline, nitrobenzene, turpentine oil, and essential oils (e.g., eucalyptus oil, clove oil).</p>`,
      rubricRows: [
        { key: "Steam-volatile and water-immiscible criteria stated", marks: "1.5 Marks" },
        { key: "Examples: Aniline / Nitrobenzene / Essential oils", marks: "0.5 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q33",
      ncertRef: "8.33",
      marks: "3 Marks",
      questionHtml: "What is thin layer chromatography (TLC)? Explain $R_f$ value.",
      solutionStepsHtml: `<p><b>Thin Layer Chromatography (TLC):</b><br>
TLC is an effective micro-analytical type of <b>adsorption chromatography</b>.<br>
A thin, uniform layer (about $0.2\\text{ mm}$ thick) of an adsorbent (silica gel or alumina) is coated on an inert glass plate or plastic sheet (TLC plate), representing the <b>stationary phase</b>.<br>
The sample spot is applied near the bottom, and the plate is placed in an elution chamber containing an appropriate developing solvent (mobile phase). As the solvent ascends by capillary action, components separate based on their differential adsorption affinities.</p>
<p><b>$R_f$ Value (Retention Factor):</b><br>
The relative rate of migration of each component is quantified by its $R_f$ value, defined as:<br>
$$\\mathbf{R_f = \\frac{\\text{Distance travelled by the substance from baseline}}{\\text{Distance travelled by the solvent front from baseline}}}$$
• $R_f$ is a dimensionless number ranging between $0$ and $1$.<br>
• Under identical experimental conditions (adsorbent, solvent, temperature), $R_f$ is a constant characteristic of a given compound, used for identification.</p>`,
      rubricRows: [
        { key: "TLC definition and stationary/mobile phase setup", marks: "1.5 Marks" },
        { key: "Rf formula and definition: distance of spot / distance of solvent front", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch8-q34",
      ncertRef: "8.34",
      marks: "3 Marks",
      questionHtml: "How is sulphur estimated in an organic compound by Carius method?",
      solutionStepsHtml: `<p><b>Principle & Procedure of Carius Sulphur Estimation:</b></p>
<p>1. <b>Digestion:</b> A known mass ($w\\text{ g}$) of the organic sulphur compound is heated with concentrated $\\text{HNO}_3$ (or fuming nitric acid) in a sealed Carius tube.<br>
The sulphur present is oxidised quantitatively to sulphuric acid:<br>
$$\\text{S} + 2\\text{HNO}_3 \\rightarrow \\text{H}_2\\text{SO}_4 + 2\\text{NO}$$</p>
<p>2. <b>Precipitation:</b> The contents of the tube are washed into a beaker and an excess of barium chloride solution ($\\text{BaCl}_2$) is added to precipitate all sulphate as insoluble barium sulphate:<br>
$$\\text{H}_2\\text{SO}_4 + \\text{BaCl}_2 \\rightarrow \\mathbf{\\text{BaSO}_4}\\downarrow \\text{ (white ppt)} + 2\\text{HCl}$$
The precipitate is filtered, washed thoroughly with hot distilled water, dried, ignited, and weighed accurately as $w_1\\text{ g}$ of $\\text{BaSO}_4$.</p>
<p>3. <b>Calculation Formula:</b><br>
Molar mass of $\\text{BaSO}_4 = 137.3 + 32 + 4(16) = 233.3\\text{ g mol}^{-1}$.<br>
$$233.3\\text{ g of } \\text{BaSO}_4 \\text{ contains } 32\\text{ g of sulphur}$$
$$\\mathbf{\\%\\text{ of Sulphur} = \\frac{32}{233} \\times \\frac{\\text{Mass of } \\text{BaSO}_4\\text{ formed } (w_1)}{\\text{Mass of organic compound } (w)} \\times 100}$$</p>`,
      rubricRows: [
        { key: "Oxidation of S to H2SO4 with conc. HNO3", marks: "1 Mark" },
        { key: "Precipitation as BaSO4 using BaCl2", marks: "1 Mark" },
        { key: "Calculation formula %S = (32/233) * (w1/w) * 100", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q35",
      ncertRef: "8.35",
      marks: "4 Marks",
      questionHtml: "In Dumas' method for estimation of nitrogen, $0.3\\text{ g}$ of an organic compound gave $50\\text{ mL}$ of nitrogen collected at $300\\text{ K}$ and $715\\text{ mm}$ pressure. Calculate the percentage composition of nitrogen in the compound. (Aqueous tension at $300\\text{ K} = 15\\text{ mm}$).",
      solutionStepsHtml: `<p><b>Step 1: Calculate Pressure of dry nitrogen gas ($P_1$):</b><br>
$$P_1 = P_{\\text{moist}} - \\text{Aqueous tension} = 715 - 15 = 700\\text{ mm Hg}$$</p>
<p><b>Step 2: Convert volume of nitrogen to STP ($P_0 = 760\\text{ mm Hg}, T_0 = 273\\text{ K}$):</b><br>
$$\\frac{P_1 V_1}{T_1} = \\frac{P_0 V_0}{T_0} \\implies V_0 = \\frac{P_1 V_1 T_0}{P_0 T_1}$$
$$V_0 = \\frac{700 \\times 50 \\times 273}{760 \\times 300} = \\frac{9555000}{228000} \\approx 41.908\\text{ mL} = 41.91\\text{ mL}$$</p>
<p><b>Step 3: Calculate percentage of nitrogen:</b><br>
At STP, $22400\\text{ mL}$ of $\\text{N}_2$ has a mass of $28\\text{ g}$.<br>
$$\\text{Mass of } 41.91\\text{ mL of } \\text{N}_2 = \\frac{28}{22400} \\times 41.91\\text{ g} = 0.05238\\text{ g}$$
$$\\%\\text{ of Nitrogen} = \\frac{\\text{Mass of } \\text{N}_2}{\\text{Mass of compound}} \\times 100 = \\frac{0.05238}{0.3} \\times 100 = 17.46\\%$$</p>
<p><b>Final Answer:</b> The percentage of nitrogen in the compound is <b>$17.46\\%$</b>.</p>`,
      rubricRows: [
        { key: "Drying pressure P1 = 715 - 15 = 700 mm Hg", marks: "1 Mark" },
        { key: "Reduction to STP: V0 = 41.91 mL", marks: "1.5 Marks" },
        { key: "Final percentage calculation: %N = 17.46%", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch8-q36",
      ncertRef: "8.36",
      marks: "4 Marks",
      questionHtml: "During estimation of nitrogen present in an organic compound by Kjeldahl's method, the ammonia evolved from $0.5\\text{ g}$ of the compound neutralized $10\\text{ mL}$ of $1\\text{ M H}_2\\text{SO}_4$. Find out the percentage of nitrogen in the compound.",
      solutionStepsHtml: `<p><b>Step 1: Relate acid to ammonia:</b><br>
$$2\\text{NH}_3 + \\text{H}_2\\text{SO}_4 \\rightarrow (\\text{NH}_4)_2\\text{SO}_4$$
$1\\text{ mole of } \\text{H}_2\\text{SO}_4 \\equiv 2\\text{ equivalents of } \\text{H}_2\\text{SO}_4 \\equiv 2\\text{ moles of } \\text{NH}_3 \\equiv 2\\text{ moles of } \\text{N}$.<br>
Normality of $1\\text{ M H}_2\\text{SO}_4 = 1\\text{ M} \\times 2 = 2\\text{ N}$.<br>
$$\\text{Milliequivalents of acid neutralized} = N \\times V = 2\\text{ N} \\times 10\\text{ mL} = 20\\text{ meq}$$
(Alternatively: $10\\text{ mL of } 1\\text{ M H}_2\\text{SO}_4 = 10\\text{ mmol of } \\text{H}_2\\text{SO}_4 \\equiv 20\\text{ mmol of } \\text{NH}_3$).</p>
<p><b>Step 2: Formula for Kjeldahl's Percentage of Nitrogen:</b><br>
$$\\%\\text{ of Nitrogen} = \\frac{1.4 \\times N \\times V}{\\text{Mass of compound (in g)}}$$
Where $N = 2\\text{ N}$, $V = 10\\text{ mL}$, and $\\text{Mass} = 0.5\\text{ g}$:<br>
$$\\%\\text{ of Nitrogen} = \\frac{1.4 \\times 2 \\times 10}{0.5} = \\frac{28}{0.5} = 56.0\\%$$</p>
<p><i>Alternative Verification:</i><br>
$20\\text{ mmol of N} = 0.020\\text{ mol} \\times 14\\text{ g mol}^{-1} = 0.28\\text{ g of N}$.<br>
$\\%\\text{ N} = \\frac{0.28}{0.5} \\times 100 = 56.0\\%$.</p>
<p><b>Final Answer:</b> The percentage of nitrogen in the compound is <b>$56.0\\%$</b>.</p>`,
      rubricRows: [
        { key: "Basicity of H2SO4 conversion (1 M = 2 N, 20 meq)", marks: "1.5 Marks" },
        { key: "Kjeldahl formula %N = (1.4 * N * V) / Mass", marks: "1.5 Marks" },
        { key: "Accurate computation yielding %N = 56.0%", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q37",
      ncertRef: "8.37",
      marks: "3 Marks",
      questionHtml: "$0.3780\\text{ g}$ of an organic chloro compound gave $0.5740\\text{ g}$ of silver chloride in Carius estimation. Calculate the percentage of chlorine present in the compound.",
      solutionStepsHtml: `<p><b>Step 1: Formula for Carius Chlorine Estimation:</b><br>
Molar mass of $\\text{AgCl} = 107.87 + 35.45 = 143.32\\text{ g mol}^{-1}$.<br>
$$143.32\\text{ g of } \\text{AgCl} \\text{ contains } 35.45\\text{ g of chlorine}$$
$$\\%\\text{ of Chlorine} = \\frac{35.5}{143.5} \\times \\frac{\\text{Mass of } \\text{AgCl}}{\\text{Mass of compound}} \\times 100$$</p>
<p><b>Step 2: Substitute values:</b><br>
$$\\%\\text{ of Cl} = \\frac{35.5}{143.5} \\times \\frac{0.5740}{0.3780} \\times 100$$
$$\\frac{35.5}{143.5} \\approx 0.247387$$
$$\\frac{0.5740}{0.3780} \\approx 1.5185$$
$$\\%\\text{ of Cl} = 0.247387 \\times 1.5185 \\times 100 \\approx 37.566\\% \\approx 37.57\\%$$</p>
<p><b>Final Answer:</b> The percentage of chlorine is <b>$37.57\\%$</b>.</p>`,
      rubricRows: [
        { key: "Formula %Cl = (35.5 / 143.5) * (mass AgCl / mass compound) * 100", marks: "1.5 Marks" },
        { key: "Accurate computation yielding 37.57%", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch8-q38",
      ncertRef: "8.38",
      marks: "3 Marks",
      questionHtml: "In the estimation of sulphur by Carius method, $0.468\\text{ g}$ of an organic sulphur compound afforded $0.668\\text{ g}$ of barium sulphate. Find out the percentage of sulphur in the given compound.",
      solutionStepsHtml: `<p><b>Step 1: Formula for Carius Sulphur Estimation:</b><br>
Molar mass of $\\text{BaSO}_4 = 137.3 + 32 + 64 = 233.3\\text{ g mol}^{-1}$.<br>
$$\\%\\text{ of Sulphur} = \\frac{32}{233.3} \\times \\frac{\\text{Mass of } \\text{BaSO}_4}{\\text{Mass of compound}} \\times 100$$</p>
<p><b>Step 2: Substitute given values:</b><br>
$$\\%\\text{ of S} = \\frac{32}{233.3} \\times \\frac{0.668}{0.468} \\times 100$$
$$\\frac{32}{233.3} \\approx 0.13716$$
$$\\frac{0.668}{0.468} \\approx 1.42735$$
$$\\%\\text{ of S} = 0.13716 \\times 1.42735 \\times 100 \\approx 19.578\\% \\approx 19.58\\%$$</p>
<p><b>Final Answer:</b> The percentage of sulphur in the compound is <b>$19.58\\%$</b>.</p>`,
      rubricRows: [
        { key: "Formula %S = (32 / 233.3) * (mass BaSO4 / mass compound) * 100", marks: "1.5 Marks" },
        { key: "Accurate computation yielding 19.58%", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch8-q39",
      ncertRef: "8.39",
      marks: "3 Marks",
      questionHtml: "In the organic compound $\\overset{1}{\\text{CH}_2}=\\overset{2}{\\text{CH}}-\\overset{3}{\\text{CH}_2}-\\overset{4}{\\text{CH}_2}-\\overset{5}{\\text{C}}\\equiv\\overset{6}{\\text{CH}}$, determine the pair of hybridised orbitals involved in the formation of the $\\text{C}_2-\\text{C}_3$ bond.",
      solutionStepsHtml: `<p><b>Step 1: Numbering and Functional Group Priority:</b><br>
According to IUPAC rules, numbering of a chain containing both double and triple bonds begins from the end giving lowest locants (when locants are identical, the double bond gets lower locant $\\text{C}_1$):<br>
$$\\overset{1}{\\text{C}}\\text{H}_2=\\overset{2}{\\text{C}}\\text{H}-\\overset{3}{\\text{C}}\\text{H}_2-\\overset{4}{\\text{C}}\\text{H}_2-\\overset{5}{\\text{C}}\\equiv\\overset{6}{\\text{C}}\\text{H} \\quad \\text{(Hex-1-en-5-yne)}$$</p>
<p><b>Step 2: Hybridisation state of each carbon:</b><br>
• $\\text{C}_1$ ($=\\text{CH}_2$): $3\\ \\sigma$ bonds, $1\\ \\pi$ bond $\\implies \\mathbf{sp^2}$<br>
• $\\text{C}_2$ ($-\\text{CH}=$): $3\\ \\sigma$ bonds, $1\\ \\pi$ bond $\\implies \\mathbf{sp^2}$<br>
• $\\text{C}_3$ ($-\\text{CH}_2-$): $4\\ \\sigma$ bonds, $0\\ \\pi$ bond $\\implies \\mathbf{sp^3}$<br>
• $\\text{C}_4$ ($-\\text{CH}_2-$): $4\\ \\sigma$ bonds, $0\\ \\pi$ bond $\\implies \\mathbf{sp^3}$<br>
• $\\text{C}_5$ ($-\\text{C}\\equiv$): $2\\ \\sigma$ bonds, $2\\ \\pi$ bonds $\\implies \\mathbf{sp}$<br>
• $\\text{C}_6$ ($\\equiv\\text{CH}$): $2\\ \\sigma$ bonds, $2\\ \\pi$ bonds $\\implies \\mathbf{sp}$</p>
<p><b>Step 3: Orbitals involved in $\\text{C}_2-\\text{C}_3$ bond:</b><br>
$\\text{C}_2$ is $sp^2$ hybridised and $\\text{C}_3$ is $sp^3$ hybridised. Therefore, the single $\\sigma$ bond between $\\text{C}_2$ and $\\text{C}_3$ is formed by axial overlap of an <b>$sp^2$ orbital of $\\text{C}_2$</b> and an <b>$sp^3$ orbital of $\\text{C}_3$</b> (i.e., $\\mathbf{sp^2-sp^3}$ overlap).</p>`,
      rubricRows: [
        { key: "Correct numbering from double bond end (Hex-1-en-5-yne)", marks: "1 Mark" },
        { key: "Determining hybridisation of C2 as sp2 and C3 as sp3", marks: "1 Mark" },
        { key: "Conclusion: C2-C3 bond is formed by sp2 - sp3 overlap", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q40",
      ncertRef: "8.40",
      marks: "4 Marks",
      questionHtml: "In the Dumas' method for the estimation of nitrogen, $0.25\\text{ g}$ of an organic compound gave $40\\text{ mL}$ of nitrogen collected at $300\\text{ K}$ temperature and $725\\text{ mm}$ pressure. If the aqueous tension at $300\\text{ K}$ is $25\\text{ mm}$, the percentage of nitrogen in the compound is:",
      solutionStepsHtml: `<p><b>Step 1: Calculate Pressure of dry nitrogen ($P_1$):</b><br>
$$P_1 = P_{\\text{moist}} - \\text{Aqueous tension} = 725 - 25 = 700\\text{ mm Hg}$$</p>
<p><b>Step 2: Convert volume of nitrogen to STP ($P_0 = 760\\text{ mm Hg}, T_0 = 273\\text{ K}$):</b><br>
$$V_0 = \\frac{P_1 V_1 T_0}{P_0 T_1} = \\frac{700 \\times 40 \\times 273}{760 \\times 300} = \\frac{7644000}{228000} = 33.526\\text{ mL} \\approx 33.53\\text{ mL}$$</p>
<p><b>Step 3: Calculate percentage of nitrogen:</b><br>
$$\\%\\text{ of Nitrogen} = \\frac{28}{22400} \\times \\frac{V_0}{\\text{Mass of compound}} \\times 100$$
$$\\%\\text{ of Nitrogen} = \\frac{28}{22400} \\times \\frac{33.526}{0.25} \\times 100$$
$$\\frac{28}{22400} = \\frac{1}{800} = 0.00125$$
$$\\%\\text{ of Nitrogen} = 0.00125 \\times \\frac{33.526}{0.25} \\times 100 = 0.00125 \\times 134.105 \\times 100 = 16.763\\% \\approx 16.76\\%$$</p>
<p><b>Final Answer:</b> The percentage of nitrogen in the organic compound is <b>$16.76\\%$</b>.</p>`,
      rubricRows: [
        { key: "Drying pressure P1 = 725 - 25 = 700 mm Hg", marks: "1 Mark" },
        { key: "Conversion to STP volume V0 = 33.53 mL", marks: "1.5 Marks" },
        { key: "Accurate evaluation of %N = 16.76%", marks: "1.5 Marks" }
      ]
    }
  ];
}

module.exports = { getPart2Questions };
