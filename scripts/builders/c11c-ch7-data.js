/**
 * NCERT Class 11 Chemistry Chapter 7: Redox Reactions Data
 * All 30 Verbatim Questions (7.1 to 7.30) with Official CBSE Marking Schemes
 */

function getQuestions() {
  return [
    {
      id: "c11c-ch7-q1",
      ncertRef: "7.1",
      marks: "4 Marks",
      questionHtml: "Assign oxidation number to the underlined elements in each of the following species:<br>(a) $\\text{NaH}_2\\underline{\\text{P}}\\text{O}_4$<br>(b) $\\text{NaH}\\underline{\\text{S}}\\text{O}_4$<br>(c) $\\text{H}_4\\underline{\\text{P}}_2\\text{O}_7$<br>(d) $\\text{K}_2\\underline{\\text{Mn}}\\text{O}_4$<br>(e) $\\text{Ca}\\underline{\\text{O}}_2$<br>(f) $\\text{Na}\\underline{\\text{B}}\\text{H}_4$<br>(g) $\\text{H}_2\\underline{\\text{S}}_2\\text{O}_7$<br>(h) $\\text{KAl}(\\underline{\\text{S}}\\text{O}_4)_2 \\cdot 12\\text{H}_2\\text{O}$.",
      solutionStepsHtml: `<p><b>Rule of Oxidation Numbers:</b> Sum of oxidation numbers in a neutral compound is zero ($0$). Standard values: $\\text{Na} = +1, \\text{K} = +1, \\text{Ca} = +2, \\text{Al} = +3, \\text{H} = +1$ (with non-metals), $\\text{O} = -2$ (in oxides).</p>
<p><b>(a) $\\text{NaH}_2\\underline{\\text{P}}\\text{O}_4$:</b><br>
$(+1) + 2(+1) + x + 4(-2) = 0 \\implies 1 + 2 + x - 8 = 0 \\implies x - 5 = 0 \\implies \\mathbf{x = +5}$.</p>
<p><b>(b) $\\text{NaH}\\underline{\\text{S}}\\text{O}_4$:</b><br>
$(+1) + (+1) + x + 4(-2) = 0 \\implies 2 + x - 8 = 0 \\implies \\mathbf{x = +6}$.</p>
<p><b>(c) $\\text{H}_4\\underline{\\text{P}}_2\\text{O}_7$:</b><br>
$4(+1) + 2x + 7(-2) = 0 \\implies 4 + 2x - 14 = 0 \\implies 2x = 10 \\implies \\mathbf{x = +5}$.</p>
<p><b>(d) $\\text{K}_2\\underline{\\text{Mn}}\\text{O}_4$:</b><br>
$2(+1) + x + 4(-2) = 0 \\implies 2 + x - 8 = 0 \\implies \\mathbf{x = +6}$.</p>
<p><b>(e) $\\text{Ca}\\underline{\\text{O}}_2$ (Calcium Peroxide):</b><br>
$(+2) + 2x = 0 \\implies 2x = -2 \\implies \\mathbf{x = -1}$ (peroxide linkage $-\\text{O}-\\text{O}-$).</p>
<p><b>(f) $\\text{Na}\\underline{\\text{B}}\\text{H}_4$:</b><br>
In borohydrides, $\\text{H}$ is hydride ($-1$), $\\text{Na} = +1$:<br>
$(+1) + x + 4(-1) = 0 \\implies 1 + x - 4 = 0 \\implies \\mathbf{x = +3}$.</p>
<p><b>(g) $\\text{H}_2\\underline{\\text{S}}_2\\text{O}_7$ (Oleum / Pyrosulphuric acid):</b><br>
$2(+1) + 2x + 7(-2) = 0 \\implies 2 + 2x - 14 = 0 \\implies 2x = 12 \\implies \\mathbf{x = +6}$.</p>
<p><b>(h) $\\text{KAl}(\\underline{\\text{S}}\\text{O}_4)_2 \\cdot 12\\text{H}_2\\text{O}$ (Potash Alum):</b><br>
$\\text{H}_2\\text{O}$ is neutral ($0$). For sulphate radical $\\text{SO}_4^{2-}$:<br>
$x + 4(-2) = -2 \\implies x - 8 = -2 \\implies \\mathbf{x = +6}$.</p>`,
      rubricRows: [
        { key: "Parts (a) to (d): P = +5, S = +6, P = +5, Mn = +6", marks: "2 Marks" },
        { key: "Parts (e) & (f): O in peroxide = -1, B in NaBH4 = +3", marks: "1 Mark" },
        { key: "Parts (g) & (h): S in H2S2O7 = +6, S in potash alum = +6", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q2",
      ncertRef: "7.2",
      marks: "4 Marks",
      questionHtml: "What are the oxidation numbers of the underlined elements in each of the following and how do you rationalise your results?<br>(a) $\\underline{\\text{K}}\\text{I}_3$<br>(b) $\\text{H}_2\\underline{\\text{S}}_4\\text{O}_6$<br>(c) $\\underline{\\text{Fe}}_3\\text{O}_4$<br>(d) $\\underline{\\text{C}}\\text{H}_3\\underline{\\text{C}}\\text{H}_2\\text{OH}$<br>(e) $\\underline{\\text{C}}\\text{H}_3\\underline{\\text{C}}\\text{OOH}$.",
      solutionStepsHtml: `<p><b>(a) $\\text{K}\\underline{\\text{I}}_3$:</b><br>
Conventional formula gives average oxidation number of $\\text{I} = -1/3$.<br>
<b>Rationalisation:</b> $\\text{KI}_3$ consists of $\\text{K}^+$ and triiodide ion $\\text{I}_3^-$. The triiodide ion is formed by coordination of $\\text{I}_2$ with iodide ion: $[\text{I}^- \\leftarrow \\text{I}-\\text{I}]$. Thus, one iodine atom has oxidation number <b>$-1$</b> and the other two iodine atoms have oxidation number <b>$0$</b>. Average $= (-1 + 0 + 0)/3 = -1/3$.</p>
<p><b>(b) $\\text{H}_2\\underline{\\text{S}}_4\\text{O}_6$ (Tetrathionate ion):</b><br>
$2(+1) + 4x + 6(-2) = 0 \\implies 4x = 10 \\implies x = +2.5$ (average).<br>
<b>Rationalisation:</b> Structure is $\\text{O}_3\\text{S}-\\text{S}-\\text{S}-\\text{SO}_3^{2-}$. The two terminal sulphur atoms are bonded to three oxygen atoms and have oxidation number <b>$+5$</b> each. The two central bridging sulphur atoms are bonded only to sulphur atoms (homonuclear bond) and have oxidation number <b>$0$</b> each. Average $= (5 + 0 + 0 + 5)/4 = +2.5$.</p>
<p><b>(c) $\\underline{\\text{Fe}}_3\\text{O}_4$ (Magnetite):</b><br>
$3x + 4(-2) = 0 \\implies x = +8/3$.<br>
<b>Rationalisation:</b> $\\text{Fe}_3\\text{O}_4$ is a mixed oxide: $\\text{FeO} \\cdot \\text{Fe}_2\\text{O}_3$. It contains one $\\text{Fe}^{2+}$ ion (oxidation number <b>$+2$</b>) and two $\\text{Fe}^{3+}$ ions (oxidation number <b>$+3$</b> each). Average $= (2 + 2 \\times 3)/3 = +8/3$.</p>
<p><b>(d) $\\underline{\\text{C}}_2\\text{H}_6\\text{O}$ (Ethanol, $\\text{CH}_3\\text{CH}_2\\text{OH}$):</b><br>
For $\\text{C}-2$ ($-\\text{CH}_3$): bonded to $3\\text{ H}$ ($+1$ each) and one $\\text{C}$ ($0$): $x + 3(+1) + 0 = 0 \\implies \\mathbf{x = -3}$.<br>
For $\\text{C}-1$ ($-\\text{CH}_2\\text{OH}$): bonded to $2\\text{ H}$ ($+1$ each), one $\\text{OH}$ ($-1$), and one $\\text{C}$ ($0$): $x + 2(+1) + (-1) = 0 \\implies x + 1 = 0 \\implies \\mathbf{x = -1}$.<br>
Average oxidation number of carbon $= (-3 + -1)/2 = -2$.</p>
<p><b>(e) $\\underline{\\text{C}}_2\\text{H}_4\\text{O}_2$ (Ethanoic acid, $\\text{CH}_3\\text{COOH}$):</b><br>
For $\\text{C}-2$ ($-\\text{CH}_3$): $x + 3(+1) = 0 \\implies \\mathbf{x = -3}$.<br>
For $\\text{C}-1$ ($-\\text{COOH}$): bonded to $=\\text{O}$ ($-2$) and $-\\text{OH}$ ($-1$): $x + (-2) + (-1) = 0 \\implies \\mathbf{x = +3}$.<br>
Average oxidation number of carbon $= (-3 + +3)/2 = 0$.</p>`,
      rubricRows: [
        { key: "Part (a): KI3 rationalisation (one -1, two 0; average -1/3)", marks: "1 Mark" },
        { key: "Part (b): H2S4O6 structure rationalisation (two +5, two 0; average +2.5)", marks: "1 Mark" },
        { key: "Part (c): Fe3O4 mixed oxide FeO.Fe2O3 (+2 and +3; average +8/3)", marks: "1 Mark" },
        { key: "Parts (d) & (e): Ethanol (C-2 is -3, C-1 is -1) and Acetic acid (C-2 is -3, C-1 is +3)", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q3",
      ncertRef: "7.3",
      marks: "5 Marks",
      questionHtml: "Justify that the following reactions are redox reactions:<br>(a) $\\text{CuO}(\\text{s}) + \\text{H}_2(\\text{g}) \\rightarrow \\text{Cu}(\\text{s}) + \\text{H}_2\\text{O}(\\text{g})$<br>(b) $\\text{Fe}_2\\text{O}_3(\\text{s}) + 3\\text{CO}(\\text{g}) \\rightarrow 2\\text{Fe}(\\text{s}) + 3\\text{CO}_2(\\text{g})$<br>(c) $4\\text{BCl}_3(\\text{g}) + 3\\text{LiAlH}_4(\\text{s}) \\rightarrow 2\\text{B}_2\\text{H}_6(\\text{g}) + 3\\text{LiCl}(\\text{s}) + 3\\text{AlCl}_3(\\text{s})$<br>(d) $2\\text{K}(\\text{s}) + \\text{F}_2(\\text{g}) \\rightarrow 2\\text{KF}(\\text{s})$<br>(e) $4\\text{NH}_3(\\text{g}) + 5\\text{O}_2(\\text{g}) \\rightarrow 4\\text{NO}(\\text{g}) + 6\\text{H}_2\\text{O}(\\text{g})$.",
      solutionStepsHtml: `<p><i>A reaction is a redox reaction if it involves simultaneous oxidation (increase in oxidation number) and reduction (decrease in oxidation number).</i></p>
<p><b>(a) $\\text{CuO} + \\text{H}_2 \\rightarrow \\text{Cu} + \\text{H}_2\\text{O}$:</b><br>
• $\\text{Cu}$: $+2 \\rightarrow 0$ (Decrease $\\implies$ <b>Reduction</b>; $\\text{CuO}$ is oxidising agent).<br>
• $\\text{H}$: $0 \\rightarrow +1$ (Increase $\\implies$ <b>Oxidation</b>; $\\text{H}_2$ is reducing agent). $\\implies$ <b>Redox reaction</b>.</p>
<p><b>(b) $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$:</b><br>
• $\\text{Fe}$: $+3 \\rightarrow 0$ (Decrease $\\implies$ <b>Reduction</b>; $\\text{Fe}_2\\text{O}_3$ is oxidising agent).<br>
• $\\text{C}$: $+2 \\rightarrow +4$ (Increase $\\implies$ <b>Oxidation</b>; $\\text{CO}$ is reducing agent). $\\implies$ <b>Redox reaction</b>.</p>
<p><b>(c) $4\\text{BCl}_3 + 3\\text{LiAlH}_4 \\rightarrow 2\\text{B}_2\\text{H}_6 + 3\\text{LiCl} + 3\\text{AlCl}_3$:</b><br>
• $\\text{B}$: $+3 \\rightarrow -3$ in $\\text{B}_2\\text{H}_6$ (Decrease $\\implies$ <b>Reduction</b>; $\\text{BCl}_3$ is oxidant).<br>
• $\\text{H}$ in $\\text{LiAlH}_4$ (hydride, $-1$) $\\rightarrow +1$ in $\\text{B}_2\\text{H}_6$ (Increase $\\implies$ <b>Oxidation</b>; $\\text{LiAlH}_4$ is reductant). $\\implies$ <b>Redox reaction</b>.</p>
<p><b>(d) $2\\text{K} + \\text{F}_2 \\rightarrow 2\\text{KF}$:</b><br>
• $\\text{K}$: $0 \\rightarrow +1$ (Increase $\\implies$ <b>Oxidation</b>; $\\text{K}$ is reducing agent).<br>
• $\\text{F}$: $0 \\rightarrow -1$ (Decrease $\\implies$ <b>Reduction</b>; $\\text{F}_2$ is oxidising agent). $\\implies$ <b>Redox reaction</b>.</p>
<p><b>(e) $4\\text{NH}_3 + 5\\text{O}_2 \\rightarrow 4\\text{NO} + 6\\text{H}_2\\text{O}$:</b><br>
• $\\text{N}$: $-3 \\rightarrow +2$ in $\\text{NO}$ (Increase $\\implies$ <b>Oxidation</b>; $\\text{NH}_3$ is reducing agent).<br>
• $\\text{O}$: $0 \\rightarrow -2$ in $\\text{NO}$ and $\\text{H}_2\\text{O}$ (Decrease $\\implies$ <b>Reduction</b>; $\\text{O}_2$ is oxidising agent). $\\implies$ <b>Redox reaction</b>.</p>`,
      rubricRows: [
        { key: "Part (a): Cu (+2 to 0) and H (0 to +1)", marks: "1 Mark" },
        { key: "Part (b): Fe (+3 to 0) and C (+2 to +4)", marks: "1 Mark" },
        { key: "Part (c): B (+3 to -3) and H (-1 to +1)", marks: "1 Mark" },
        { key: "Part (d): K (0 to +1) and F (0 to -1)", marks: "1 Mark" },
        { key: "Part (e): N (-3 to +2) and O (0 to -2)", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q4",
      ncertRef: "7.4",
      marks: "3 Marks",
      questionHtml: "Fluorine reacts with dilute $\\text{NaOH}$ and concentrated $\\text{NaOH}$ differently:<br>(a) $2\\text{F}_2(\\text{g}) + 2\\text{OH}^-(\\text{aq}) \\rightarrow 2\\text{F}^-(\\text{aq}) + \\text{OF}_2(\\text{g}) + \\text{H}_2\\text{O}(\\text{l})$<br>(b) $2\\text{F}_2(\\text{g}) + 4\\text{OH}^-(\\text{aq}) \\rightarrow 4\\text{F}^-(\\text{aq}) + \\text{O}_2(\\text{g}) + 2\\text{H}_2\\text{O}(\\text{l})$<br>Show that these are redox reactions.",
      solutionStepsHtml: `<p><b>(a) Reaction with dilute $\\text{NaOH}$:</b><br>
$$2\\overset{0}{\\text{F}_2} + 2\\text{OH}^- \\rightarrow 2\\overset{-1}{\\text{F}^-} + \\overset{+2}{\\text{O}}\\overset{-1}{\\text{F}_2} + \\text{H}_2\\overset{-2}{\\text{O}}$$
• $\\text{F}_2$: Oxidation number decreases from $0$ to $-1$ in $\\text{F}^-$ and $\\text{OF}_2$ $\\implies$ <b>Reduction</b>.<br>
• Oxygen in $\\text{OH}^-$: Increases from $-2$ to $+2$ in $\\text{OF}_2$ $\\implies$ <b>Oxidation</b>.<br>
Since oxidation and reduction occur simultaneously, it is a <b>redox reaction</b>.</p>
<p><b>(b) Reaction with concentrated $\\text{NaOH}$:</b><br>
$$2\\overset{0}{\\text{F}_2} + 4\\text{OH}^- \\rightarrow 4\\overset{-1}{\\text{F}^-} + \\overset{0}{\\text{O}_2} + 2\\text{H}_2\\overset{-2}{\\text{O}}$$
• $\\text{F}_2$: Oxidation number decreases from $0$ to $-1$ $\\implies$ <b>Reduction</b>.<br>
• Oxygen in $\\text{OH}^-$: Oxidation number increases from $-2$ to $0$ in $\\text{O}_2$ $\\implies$ <b>Oxidation</b>.<br>
Therefore, this is also a <b>redox reaction</b>.</p>`,
      rubricRows: [
        { key: "Part (a): O(-2 to +2 in OF2) oxidation, F(0 to -1) reduction", marks: "1.5 Marks" },
        { key: "Part (b): O(-2 to 0 in O2) oxidation, F(0 to -1) reduction", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch7-q5",
      ncertRef: "7.5",
      marks: "4 Marks",
      questionHtml: "Calculate the oxidation number of sulphur, chromium and nitrogen in $\\text{H}_2\\text{SO}_5$, $\\text{Cr}_2\\text{O}_7^{2-}$ and $\\text{NO}_3^-$. Suggest structure of these compounds. Account for the fallacy.",
      solutionStepsHtml: `<p><b>1. $\\text{H}_2\\text{SO}_5$ (Caro's acid / Peroxomonosulphuric acid):</b><br>
• <i>Fallacy from conventional rule:</i> $2(+1) + x + 5(-2) = 0 \\implies x - 8 = 0 \\implies x = +8$. But sulphur has only 6 valence electrons, so its maximum oxidation number cannot exceed $+6$.<br>
• <i>Structural rationalisation:</i> Structure contains one peroxo group ($-\\text{O}-\\text{O}-$ with O.N. $-1$ each) and three normal oxide oxygens ($-2$ each):<br>
$$\\text{HO}-\\text{SO}_2-\\text{O}-\\text{OH}$$
$$2(+1) + x + 3(-2) + 2(-1) = 0 \\implies 2 + x - 6 - 2 = 0 \\implies \\mathbf{x = +6}$.</p>
<p><b>2. $\\text{Cr}_2\\text{O}_7^{2-}$ (Dichromate ion):</b><br>
$$2x + 7(-2) = -2 \\implies 2x - 14 = -2 \\implies 2x = 12 \\implies \\mathbf{x = +6}$$
Structure: Two tetrahedral $\\text{CrO}_4$ units sharing one bridging oxygen atom ($\\text{Cr}-\\text{O}-\\text{Cr}$ bond angle $\\approx 126^\\circ$). Both chromium atoms are in their maximum $+6$ oxidation state; no peroxo linkage, so conventional calculation is correct.</p>
<p><b>3. $\\text{NO}_3^-$ (Nitrate ion):</b><br>
$$x + 3(-2) = -1 \\implies x - 6 = -1 \\implies \\mathbf{x = +5}$$
Structure: Trigonal planar ($sp^2$) with nitrogen forming one single bond to $-\\text{O}^-$, one double bond to $=\\text{O}$, and one coordinate/dative covalent bond to $\\rightarrow \\text{O}$. Maximum oxidation state of nitrogen is $+5$ (all 5 valence electrons involved in bonding). No fallacy.</p>`,
      rubricRows: [
        { key: "H2SO5: Identifying +8 fallacy and explaining peroxo bond yielding +6", marks: "2 Marks" },
        { key: "Cr2O7^2-: Calculating Cr = +6 with bridged tetrahedral structure", marks: "1 Mark" },
        { key: "NO3-: Calculating N = +5 with planar resonance structure", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q6",
      ncertRef: "7.6",
      marks: "3 Marks",
      questionHtml: "Write formulas for the following compounds using Stock notation:<br>(a) Mercury(II) chloride<br>(b) Nickel(II) sulphate<br>(c) Tin(IV) oxide<br>(d) Thallium(I) sulphate<br>(e) Iron(III) sulphate<br>(f) Chromium(III) oxide.",
      solutionStepsHtml: `<p>Using the Roman numeral oxidation state of the metal in the compound:</p>
<p>(a) Mercury(II) chloride: $\\mathbf{HgCl_2}$<br>
(b) Nickel(II) sulphate: $\\mathbf{NiSO_4}$<br>
(c) Tin(IV) oxide: $\\mathbf{SnO_2}$<br>
(d) Thallium(I) sulphate: $\\mathbf{Tl_2SO_4}$<br>
(e) Iron(III) sulphate: $\\mathbf{Fe_2(SO_4)_3}$<br>
(f) Chromium(III) oxide: $\\mathbf{Cr_2O_3}$</p>`,
      rubricRows: [
        { key: "Parts (a) & (b): HgCl2 and NiSO4", marks: "1 Mark" },
        { key: "Parts (c) & (d): SnO2 and Tl2SO4", marks: "1 Mark" },
        { key: "Parts (e) & (f): Fe2(SO4)3 and Cr2O3", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q7",
      ncertRef: "7.7",
      marks: "3 Marks",
      questionHtml: "Suggest a list of the substances where carbon can exhibit oxidation states from $-4$ to $+4$ and nitrogen from $-3$ to $+5$.",
      solutionStepsHtml: `<p><b>Carbon (Valence shell $2s^2 2p^2$, Range: $-4$ to $+4$):</b></p>
<ul style="margin-left:20px;">
  <li><b>$-4$:</b> $\\text{CH}_4$ (Methane)</li>
  <li><b>$-3$:</b> $\\text{C}_2\\text{H}_6$ (Ethane)</li>
  <li><b>$-2$:</b> $\\text{CH}_3\\text{Cl}$ / $\\text{CH}_3\\text{OH}$</li>
  <li><b>$-1$:</b> $\\text{C}_2\\text{H}_2$ (Ethyne)</li>
  <li><b>$0$:</b> $\\text{CH}_2\\text{O}$ (Formaldehyde) / $\\text{C}$ (Diamond, Graphite)</li>
  <li><b>$+1$:</b> $\\text{C}_2\\text{H}_2\\text{O}_4$ (Oxalic acid, average)</li>
  <li><b>$+2$:</b> $\\text{CO}$ (Carbon monoxide) / $\\text{CHCl}_3$ (Chloroform)</li>
  <li><b>$+3$:</b> $(\\text{COOH})_2$</li>
  <li><b>$+4$:</b> $\\text{CO}_2$ (Carbon dioxide) / $\\text{CCl}_4$ (Carbon tetrachloride)</li>
</ul>
<p><b>Nitrogen (Valence shell $2s^2 2p^3$, Range: $-3$ to $+5$):</b></p>
<ul style="margin-left:20px;">
  <li><b>$-3$:</b> $\\text{NH}_3$ (Ammonia)</li>
  <li><b>$-2$:</b> $\\text{N}_2\\text{H}_4$ (Hydrazine)</li>
  <li><b>$-1$:</b> $\\text{NH}_2\\text{OH}$ (Hydroxylamine)</li>
  <li><b>$0$:</b> $\\text{N}_2$ (Dinitrogen)</li>
  <li><b>$+1$:</b> $\\text{N}_2\\text{O}$ (Nitrous oxide)</li>
  <li><b>$+2$:</b> $\\text{NO}$ (Nitric oxide)</li>
  <li><b>$+3$:</b> $\\text{N}_2\\text{O}_3$ / $\\text{HNO}_2$ (Nitrous acid)</li>
  <li><b>$+4$:</b> $\\text{NO}_2$ / $\\text{N}_2\\text{O}_4$</li>
  <li><b>$+5$:</b> $\\text{N}_2\\text{O}_5$ / $\\text{HNO}_3$ (Nitric acid)</li>
</ul>`,
      rubricRows: [
        { key: "Complete list of carbon compounds from -4 to +4", marks: "1.5 Marks" },
        { key: "Complete list of nitrogen compounds from -3 to +5", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch7-q8",
      ncertRef: "7.8",
      marks: "3 Marks",
      questionHtml: "While sulphur dioxide and hydrogen peroxide can act as oxidising as well as reducing agents in their reactions, ozone and nitric acid act only as oxidants. Why?",
      solutionStepsHtml: `<p><b>Concept:</b> An element can act as an oxidising agent if its oxidation state can decrease, and as a reducing agent if its oxidation state can increase. If it is already in an intermediate oxidation state, it can undergo both.</p>
<p>1. <b>$\\text{SO}_2$:</b> Sulphur is in the <b>$+4$</b> oxidation state. The allowable range for sulphur (Group 16) is $-2$ to $+6$. Since $+4$ is an intermediate state, sulphur can be oxidised to $+6$ (acting as reductant) or reduced to $0$ or $-2$ (acting as oxidant).</p>
<p>2. <b>$\\text{H}_2\\text{O}_2$:</b> Oxygen is in the <b>$-1$</b> oxidation state (peroxide). Allowable states for oxygen range from $-2$ to $+2$. Oxygen can be oxidised to $0$ in $\\text{O}_2$ (acting as reductant) or reduced to $-2$ in $\\text{H}_2\\text{O}$ (acting as oxidant).</p>
<p>3. <b>$\\text{HNO}_3$:</b> Nitrogen is in its <b>maximum oxidation state of $+5$</b> (Group 15 has 5 valence electrons). Nitrogen cannot lose any more electrons to increase its oxidation state. It can only accept electrons and reduce its oxidation number (e.g., to $+4, +2, +1, 0, -3$). Hence, $\\text{HNO}_3$ acts <b>only as an oxidant</b>.</p>
<p>4. <b>$\\text{O}_3$:</b> Ozone easily decomposes to liberate nascent oxygen: $\\text{O}_3 \\rightarrow \\text{O}_2 + [\\text{O}]$, which has an exceptionally high electron affinity to reduce oxygen to $-2$. Therefore, ozone acts exclusively as a powerful oxidant.</p>`,
      rubricRows: [
        { key: "SO2 intermediate state (+4) explained", marks: "0.75 Mark" },
        { key: "H2O2 intermediate state (-1) explained", marks: "0.75 Mark" },
        { key: "HNO3 maximum oxidation state (+5) cannot increase further", marks: "1 Mark" },
        { key: "O3 nascent oxygen release explained", marks: "0.5 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q9",
      ncertRef: "7.9",
      marks: "4 Marks",
      questionHtml: "Consider the reactions:<br>(a) $6\\text{CO}_2(\\text{g}) + 6\\text{H}_2\\text{O}(\\text{l}) \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6(\\text{aq}) + 6\\text{O}_2(\\text{g})$<br>(b) $\\text{O}_3(\\text{g}) + \\text{H}_2\\text{O}_2(\\text{l}) \\rightarrow \\text{H}_2\\text{O}(\\text{l}) + 2\\text{O}_2(\\text{g})$<br>Why is it more appropriate to write these reactions as:<br>(a) $6\\text{CO}_2(\\text{g}) + 12\\text{H}_2\\text{O}(\\text{l}) \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6(\\text{aq}) + 6\\text{H}_2\\text{O}(\\text{l}) + 6\\text{O}_2(\\text{g})$<br>(b) $\\text{O}_3(\\text{g}) + \\text{H}_2\\text{O}_2(\\text{l}) \\rightarrow \\text{H}_2\\text{O}(\\text{l}) + \\text{O}_2(\\text{g}) + \\text{O}_2(\\text{g})$?<br>Suggest a technique to investigate the path of the above (a) and (b) redox reactions.",
      solutionStepsHtml: `<p><b>(a) Photosynthesis Reaction:</b><br>
In photosynthesis, isotopic tracer studies using $^{18}\\text{O}$-labelled water ($\\text{H}_2^{18}\\text{O}$) proved that the entire $6\\text{ moles}$ of oxygen gas produced ($6\\text{O}_2$) originates exclusively from water, not from carbon dioxide.<br>
Since $6\\text{ molecules}$ of $\\text{O}_2$ contain $12\\text{ oxygen atoms}$, at least $12\\text{ molecules}$ of $\\text{H}_2\\text{O}$ must be consumed. The $6\\text{ molecules}$ of $\\text{H}_2\\text{O}$ produced on the right-hand side are regenerated during subsequent biochemical cycles (light-independent reactions). Hence writing $12\\text{H}_2\\text{O}$ on the reactant side reflects the true reaction mechanism.</p>
<p><b>(b) Ozone and Hydrogen Peroxide Reaction:</b><br>
When isotopic $^{18}\\text{O}$-labelled $\\text{H}_2^{18}\\text{O}_2$ reacts with normal ozone $\\text{O}_3$, the evolved oxygen consists of two distinct pools:<br>
• One mole of $^{18}\\text{O}_2$ originates purely from $\\text{H}_2\\text{O}_2$ oxidation.<br>
• One mole of ordinary $\\text{O}_2$ originates from ozone decomposition.<br>
Writing $\\text{O}_2 + \\text{O}_2$ emphasises that the two dioxygen molecules arise from two different mechanistic pathways.</p>
<p><b>Investigative Technique:</b><br>
The path and mechanism of these reactions are investigated using <b>Isotopic Tracer Technique</b> (using heavy isotope $^{18}\\text{O}$ followed by mass spectrometric analysis).</p>`,
      rubricRows: [
        { key: "Part (a): All 12 oxygen atoms in 6O2 originate from water", marks: "1.5 Marks" },
        { key: "Part (b): One O2 from H2O2, one O2 from O3", marks: "1.5 Marks" },
        { key: "Naming Isotopic Tracer Technique using 18O", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q10",
      ncertRef: "7.10",
      marks: "2 Marks",
      questionHtml: "The compound $\\text{AgF}_2$ is an unstable compound. However, if formed, the compound acts as a very strong oxidising agent. Why?",
      solutionStepsHtml: `<p><b>Reason:</b><br>
In $\\text{AgF}_2$, silver is present in the <b>$+2$ oxidation state</b> ($\\text{Ag}^{2+}$).<br>
Silver normally exists in the exceptionally stable $+1$ oxidation state ($\\text{Ag}^+$) with a completely filled, stable $4d^{10}$ electronic configuration.<br>
The $\\text{Ag}^{2+}$ ion has an incomplete $4d^9$ configuration and has an extraordinarily high standard reduction potential:<br>
$$\\text{Ag}^{2+}(\\text{aq}) + e^- \\rightarrow \\text{Ag}^+(\\text{aq}), \\quad E^\\circ = +1.98\\text{ V}$$
Because of this very large positive electrode potential, $\\text{Ag}^{2+}$ has an immense tendency to gain an electron to attain the stable $4d^{10}$ state, making $\\text{AgF}_2$ a <b>very strong oxidising agent</b>.</p>`,
      rubricRows: [
        { key: "Identification of Ag2+ (+2 state, 4d9 configuration)", marks: "1 Mark" },
        { key: "High E° (+1.98 V) to achieve stable 4d10 Ag+ configuration", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q11",
      ncertRef: "7.11",
      marks: "3 Marks",
      questionHtml: "Whenever a reaction between an oxidising agent and a reducing agent is carried out, a compound of lower oxidation state is formed if the reducing agent is in excess and a compound of higher oxidation state is formed if the oxidising agent is in excess. Justify this statement giving three illustrations.",
      solutionStepsHtml: `<p><b>Illustration 1: Carbon and Oxygen:</b><br>
• Excess Reducing Agent ($\\text{C}$): Carbon burns in limited oxygen to form carbon monoxide (lower oxidation state $+2$):<br>
$$2\\text{C}(\\text{s, excess}) + \\text{O}_2(\\text{g}) \\rightarrow 2\\overset{+2}{\\text{CO}}(\\text{g})$$<br>
• Excess Oxidising Agent ($\\text{O}_2$): In excess oxygen, carbon is oxidised to carbon dioxide (higher oxidation state $+4$):<br>
$$\\text{C}(\\text{s}) + \\text{O}_2(\\text{g, excess}) \\rightarrow \\overset{+4}{\\text{CO}_2}(\\text{g})$$</p>
<p><b>Illustration 2: Phosphorus and Chlorine:</b><br>
• Excess Reducing Agent ($\\text{P}_4$): Reacts to form phosphorus trichloride (lower state $+3$):<br>
$$\\text{P}_4(\\text{s, excess}) + 6\\text{Cl}_2(\\text{g}) \\rightarrow 4\\overset{+3}{\\text{PCl}_3}(\\text{l})$$<br>
• Excess Oxidising Agent ($\\text{Cl}_2$): Forms phosphorus pentachloride (higher state $+5$):<br>
$$\\text{P}_4(\\text{s}) + 10\\text{Cl}_2(\\text{g, excess}) \\rightarrow 4\\overset{+5}{\\text{PCl}_5}(\\text{s})$$</p>
<p><b>Illustration 3: Sodium and Oxygen:</b><br>
• Excess Reducing Agent ($\\text{Na}$): Limited oxygen forms sodium oxide (lower oxidation state for oxygen, oxide $-2$):<br>
$$4\\text{Na}(\\text{s, excess}) + \\text{O}_2(\\text{g}) \\rightarrow 2\\text{Na}_2\\overset{-2}{\\text{O}}(\\text{s})$$<br>
• Excess Oxidising Agent ($\\text{O}_2$): Forms sodium peroxide (peroxide $-1$):<br>
$$2\\text{Na}(\\text{s}) + \\text{O}_2(\\text{g, excess}) \\rightarrow \\text{Na}_2\\overset{-1}{\\text{O}_2}(\\text{s})$$</p>`,
      rubricRows: [
        { key: "Illustration 1: C + O2 (CO vs CO2)", marks: "1 Mark" },
        { key: "Illustration 2: P4 + Cl2 (PCl3 vs PCl5)", marks: "1 Mark" },
        { key: "Illustration 3: Na + O2 (Na2O vs Na2O2)", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q12",
      ncertRef: "7.12",
      marks: "4 Marks",
      questionHtml: "How do you account for the following observations?<br>(a) Though alkaline potassium permanganate and acidic potassium permanganate both are used as oxidants, yet in the manufacture of benzoic acid from toluene we use alcoholic potassium permanganate as an oxidant, why? Write a balanced redox equation for the reaction.<br>(b) When concentrated sulphuric acid is added to an inorganic mixture containing chloride, we get colourless pungent smelling gas $\\text{HCl}$, but if the mixture contains bromide then we get red vapour of bromine. Why?",
      solutionStepsHtml: `<p><b>(a) Use of alcoholic $\\text{KMnO}_4$ for toluene oxidation:</b><br>
Toluene ($\\text{C}_6\\text{H}_5\\text{CH}_3$) is an organic non-polar liquid, while $\\text{KMnO}_4$ is an ionic polar salt soluble in water. Toluene and water are immiscible, so in purely aqueous medium the reaction is extremely slow due to phase separation.<br>
Alcohol (e.g., ethanol) acts as a mutual co-solvent that dissolves both non-polar toluene and polar $\\text{KMnO}_4$, creating a single homogeneous phase for rapid contact and oxidation.<br>
Moreover, in alcoholic medium, $\\text{OH}^-$ ions produced maintain mild basicity.<br>
<b>Balanced Redox Equation:</b><br>
$$\\text{C}_6\\text{H}_5\\text{CH}_3 + 2\\text{KMnO}_4 \\rightarrow \\text{C}_6\\text{H}_5\\text{COOK} + 2\\text{MnO}_2 + \\text{KOH} + \\text{H}_2\\text{O}$$
Subsequent acidification yields benzoic acid: $\\text{C}_6\\text{H}_5\\text{COOK} + \\text{HCl} \\rightarrow \\text{C}_6\\text{H}_5\\text{COOH} + \\text{KCl}$.</p>
<p><b>(b) Reaction of conc. $\\text{H}_2\\text{SO}_4$ with chloride vs bromide:</b><br>
Concentrated $\\text{H}_2\\text{SO}_4$ is a moderately strong oxidising agent.<br>
• $\\text{Cl}^-$ is a very weak reducing agent ($E^\\circ(\\text{Cl}_2 / \\text{Cl}^-) = +1.36\\text{ V}$). Conc. $\\text{H}_2\\text{SO}_4$ cannot oxidise $\\text{Cl}^-$ to $\\text{Cl}_2$. It only acts as an acid, displacing volatile $\\text{HCl}$:<br>
$$\\text{NaCl} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{NaHSO}_4 + \\text{HCl}\\uparrow \\text{ (colourless gas)}$$<br>
• $\\text{Br}^-$ is a stronger reducing agent than $\\text{Cl}^-$ ($E^\\circ(\\text{Br}_2 / \\text{Br}^-) = +1.09\\text{ V}$). $\\text{HBr}$ initially formed is readily oxidised by conc. $\\text{H}_2\\text{SO}_4$ to bromine gas, yielding reddish-brown vapours:<br>
$$2\\text{NaBr} + 2\\text{H}_2\\text{SO}_4 \\rightarrow \\text{Na}_2\\text{SO}_4 + \\text{SO}_2 + \\text{Br}_2\\uparrow + 2\\text{H}_2\\text{O}$$</p>`,
      rubricRows: [
        { key: "Part (a): Mutual solubility/homogeneous phase role of alcohol", marks: "1 Mark" },
        { key: "Part (a): Balanced equation for toluene oxidation", marks: "1 Mark" },
        { key: "Part (b): Weak reducing power of Cl- (non-redox displacement to HCl)", marks: "1 Mark" },
        { key: "Part (b): Strong reducing power of Br- (redox oxidation to Br2 red vapours)", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q13",
      ncertRef: "7.13",
      marks: "5 Marks",
      questionHtml: "Identify the substance oxidised, reduced, oxidising agent and reducing agent for each of the following reactions:<br>(a) $2\\text{AgBr}(\\text{s}) + \\text{C}_6\\text{H}_6\\text{O}_2(\\text{aq}) \\rightarrow 2\\text{Ag}(\\text{s}) + 2\\text{HBr}(\\text{aq}) + \\text{C}_6\\text{H}_4\\text{O}_2(\\text{aq})$<br>(b) $\\text{HCHO}(\\text{l}) + 2[\\text{Ag}(\\text{NH}_3)_2]^+(\\text{aq}) + 3\\text{OH}^-(\\text{aq}) \\rightarrow 2\\text{Ag}(\\text{s}) + \\text{HCOO}^-(\\text{aq}) + 4\\text{NH}_3(\\text{aq}) + 2\\text{H}_2\\text{O}(\\text{l})$<br>(c) $\\text{HCHO}(\\text{l}) + 2\\text{Cu}^{2+}(\\text{aq}) + 5\\text{OH}^-(\\text{aq}) \\rightarrow \\text{Cu}_2\\text{O}(\\text{s}) + \\text{HCOO}^-(\\text{aq}) + 3\\text{H}_2\\text{O}(\\text{l})$<br>(d) $\\text{N}_2\\text{H}_4(\\text{l}) + 2\\text{H}_2\\text{O}_2(\\text{l}) \\rightarrow \\text{N}_2(\\text{g}) + 4\\text{H}_2\\text{O}(\\text{l})$<br>(e) $\\text{Pb}(\\text{s}) + \\text{PbO}_2(\\text{s}) + 2\\text{H}_2\\text{SO}_4(\\text{aq}) \\rightarrow 2\\text{PbSO}_4(\\text{s}) + 2\\text{H}_2\\text{O}(\\text{l})$.",
      solutionStepsHtml: `<table style="width:100%; border-collapse:collapse; margin-top:8px; font-size:0.88rem;">
  <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
    <th style="padding:8px;">Reaction</th>
    <th style="padding:8px;">Substance Oxidised</th>
    <th style="padding:8px;">Substance Reduced</th>
    <th style="padding:8px;">Oxidising Agent</th>
    <th style="padding:8px;">Reducing Agent</th>
  </tr>
  <tr style="border-bottom:1px solid #e2e8f0;">
    <td style="padding:8px;">(a) Photographic developer</td>
    <td style="padding:8px;">$\\text{C}_6\\text{H}_6\\text{O}_2$ (Hydroquinone)</td>
    <td style="padding:8px;">$\\text{AgBr}$ ($\\text{Ag}^+$ to $\\text{Ag}$)</td>
    <td style="padding:8px;">$\\text{AgBr}$</td>
    <td style="padding:8px;">$\\text{C}_6\\text{H}_6\\text{O}_2$</td>
  </tr>
  <tr style="border-bottom:1px solid #e2e8f0;">
    <td style="padding:8px;">(b) Tollen's test</td>
    <td style="padding:8px;">$\\text{HCHO}$ (Formaldehyde, $0$ to $+2$)</td>
    <td style="padding:8px;">$[\\text{Ag}(\\text{NH}_3)_2]^+$ ($+1$ to $0$)</td>
    <td style="padding:8px;">$[\\text{Ag}(\\text{NH}_3)_2]^+$</td>
    <td style="padding:8px;">$\\text{HCHO}$</td>
  </tr>
  <tr style="border-bottom:1px solid #e2e8f0;">
    <td style="padding:8px;">(c) Fehling's test</td>
    <td style="padding:8px;">$\\text{HCHO}$ ($0$ to $+2$)</td>
    <td style="padding:8px;">$\\text{Cu}^{2+}$ ($+2$ to $+1$ in $\\text{Cu}_2\\text{O}$)</td>
    <td style="padding:8px;">$\\text{Cu}^{2+}$</td>
    <td style="padding:8px;">$\\text{HCHO}$</td>
  </tr>
  <tr style="border-bottom:1px solid #e2e8f0;">
    <td style="padding:8px;">(d) Rocket propellent</td>
    <td style="padding:8px;">$\\text{N}_2\\text{H}_4$ (Hydrazine, $-2$ to $0$)</td>
    <td style="padding:8px;">$\\text{H}_2\\text{O}_2$ ($-1$ to $-2$)</td>
    <td style="padding:8px;">$\\text{H}_2\\text{O}_2$</td>
    <td style="padding:8px;">$\\text{N}_2\\text{H}_4$</td>
  </tr>
  <tr>
    <td style="padding:8px;">(e) Lead storage battery</td>
    <td style="padding:8px;">$\\text{Pb}$ ($0$ to $+2$)</td>
    <td style="padding:8px;">$\\text{PbO}_2$ ($+4$ to $+2$)</td>
    <td style="padding:8px;">$\\text{PbO}_2$</td>
    <td style="padding:8px;">$\\text{Pb}$</td>
  </tr>
</table>`,
      rubricRows: [
        { key: "Part (a) accurate identification of all 4 entities", marks: "1 Mark" },
        { key: "Part (b) accurate identification of all 4 entities", marks: "1 Mark" },
        { key: "Part (c) accurate identification of all 4 entities", marks: "1 Mark" },
        { key: "Part (d) accurate identification of all 4 entities", marks: "1 Mark" },
        { key: "Part (e) accurate identification of all 4 entities (comproportionation)", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q14",
      ncertRef: "7.14",
      marks: "3 Marks",
      questionHtml: "Consider the reactions:<br>$$2\\text{S}_2\\text{O}_3^{2-}(\\text{aq}) + \\text{I}_2(\\text{s}) \\rightarrow \\text{S}_4\\text{O}_6^{2-}(\\text{aq}) + 2\\text{I}^-(\\text{aq})$$<br>$$\\text{S}_2\\text{O}_3^{2-}(\\text{aq}) + 2\\text{Br}_2(\\text{l}) + 5\\text{H}_2\\text{O}(\\text{l}) \\rightarrow 2\\text{SO}_4^{2-}(\\text{aq}) + 4\\text{Br}^-(\\text{aq}) + 10\\text{H}^+(\\text{aq})$$<br>Why does the same reductant, thiosulphate react differently with iodine and bromine?",
      solutionStepsHtml: `<p><b>Explanation based on Standard Reduction Potentials:</b><br>
Bromine is a substantially stronger oxidising agent than iodine:<br>
$$E^\\circ(\\text{Br}_2 / \\text{Br}^-) = +1.09\\text{ V}$$
$$E^\\circ(\\text{I}_2 / \\text{I}^-) = +0.54\\text{ V}$$</p>
<p>• <b>With Iodine (milder oxidant):</b> Iodine oxidises the sulphur in thiosulphate from an average oxidation state of <b>$+2$ to $+2.5$</b> in tetrathionate ($\\text{S}_4\\text{O}_6^{2-}$). Iodine is not strong enough to rupture the $\\text{S}-\\text{S}$ bonds or oxidise sulphur to its maximum state.</p>
<p>• <b>With Bromine (stronger oxidant):</b> Bromine is strong enough to oxidise the sulphur in thiosulphate completely to its highest possible oxidation state of <b>$+6$</b> in sulphate ion ($\\text{SO}_4^{2-}$).</p>`,
      rubricRows: [
        { key: "Comparing oxidising power: E°(Br2/Br-) = 1.09 V vs E°(I2/I-) = 0.54 V", marks: "1 Mark" },
        { key: "Iodine causes mild oxidation (+2 to +2.5 in S4O6^2-)", marks: "1 Mark" },
        { key: "Bromine causes vigorous complete oxidation (+2 to +6 in SO4^2-)", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q15",
      ncertRef: "7.15",
      marks: "4 Marks",
      questionHtml: "Justify giving reactions that among halogens, fluorine is the best oxidant and among hydrohalic compounds, hydroiodic acid is the best reductant.",
      solutionStepsHtml: `<p><b>1. Fluorine is the best oxidant among halogens:</b><br>
Fluorine has the highest standard reduction potential ($E^\\circ = +2.87\\text{ V}$) due to its low bond dissociation enthalpy of $\\text{F}-\\text{F}$ and extremely high hydration enthalpy of $\\text{F}^-$. It displaces all other halogens from their halide solutions and even oxidises water to oxygen:<br>
$$\\text{F}_2(\\text{g}) + 2\\text{Cl}^-(\\text{aq}) \\rightarrow 2\\text{F}^-(\\text{aq}) + \\text{Cl}_2(\\text{g})$$
$$2\\text{F}_2(\\text{g}) + 2\\text{H}_2\\text{O}(\\text{l}) \\rightarrow 4\\text{HF}(\\text{aq}) + \\text{O}_2(\\text{g})$$
No other halogen can oxidise water to oxygen.</p>
<p><b>2. $\\text{HI}$ is the best reductant among hydrohalic compounds:</b><br>
The bond dissociation enthalpy of $\\text{H}-\\text{X}$ decreases down the group as halogen size increases ($\\text{H}-\\text{F} > \\text{H}-\\text{Cl} > \\text{H}-\\text{Br} > \\text{H}-\\text{I}$). Due to the longest and weakest $\\text{H}-\\text{I}$ bond, $\\text{HI}$ readily releases hydrogen/electrons ($E^\\circ(\\text{I}_2 / \\text{I}^-) = +0.54\\text{ V}$).<br>
It reduces concentrated $\\text{H}_2\\text{SO}_4$ to $\\text{H}_2\\text{S}$, whereas $\\text{HCl}$ cannot reduce it at all, and $\\text{HBr}$ only reduces it to $\\text{SO}_2$:<br>
$$8\\text{HI} + \\text{H}_2\\text{SO}_4 \\rightarrow 4\\text{I}_2 + \\text{H}_2\\text{S} + 4\\text{H}_2\\text{O}$$
$$2\\text{Fe}^{3+}(\\text{aq}) + 2\\text{I}^-(\\text{aq}) \\rightarrow 2\\text{Fe}^{2+}(\\text{aq}) + \\text{I}_2(\\text{s})$$</p>`,
      rubricRows: [
        { key: "Fluorine E° = +2.87 V justified with displacement/water oxidation reaction", marks: "2 Marks" },
        { key: "HI bond enthalpy and reduction of H2SO4 to H2S reaction", marks: "2 Marks" }
      ]
    },
    {
      id: "c11c-ch7-q16",
      ncertRef: "7.16",
      marks: "3 Marks",
      questionHtml: "Why does the following reaction occur?<br>$$\\text{XeO}_6^{4-}(\\text{aq}) + 2\\text{F}^-(\\text{aq}) + 6\\text{H}^+(\\text{aq}) \\rightarrow \\text{XeO}_3(\\text{g}) + \\text{F}_2(\\text{g}) + 3\\text{H}_2\\text{O}(\\text{l})$$<br>What conclusion about the compound $\\text{Na}_4\\text{XeO}_6$ (of which $\\text{XeO}_6^{4-}$ is a part) can be drawn from the reaction?",
      solutionStepsHtml: `<p><b>Analysis of Oxidation States:</b><br>
• In perxenate ion $\\text{XeO}_6^{4-}$: $\\text{Xe}$ has oxidation number $+8$ ($x + 6(-2) = -4 \\implies x = +8$).<br>
• In xenon trioxide $\\text{XeO}_3$: $\\text{Xe}$ has oxidation number $+6$ ($x + 3(-2) = 0 \\implies x = +6$).<br>
• Fluorine: $-1$ in $\\text{F}^- \\rightarrow 0$ in $\\text{F}_2$.</p>
<p><b>Why does the reaction occur?</b><br>
Fluorine has the highest standard reduction potential ($E^\\circ = +2.87\\text{ V}$) of all common elements and is very difficult to oxidise from $\\text{F}^-$ to $\\text{F}_2$. For this reaction to occur spontaneously, the reduction potential of the perxenate couple $\\text{XeO}_6^{4-} / \\text{XeO}_3$ must be <b>even greater than $+2.87\\text{ V}$</b>.</p>
<p><b>Conclusion about $\\text{Na}_4\\text{XeO}_6$:</b><br>
Sodium perxenate ($\\text{Na}_4\\text{XeO}_6$) is an extraordinarily powerful oxidising agent—one of the strongest oxidants known in chemistry, capable of oxidising fluoride ions to elemental fluorine gas!</p>`,
      rubricRows: [
        { key: "Identification of Xe (+8 to +6) and F (-1 to 0)", marks: "1 Mark" },
        { key: "Deducing E° of XeO6^4- couple > +2.87 V", marks: "1 Mark" },
        { key: "Concluding Na4XeO6 is a stronger oxidant than fluorine", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q17",
      ncertRef: "7.17",
      marks: "4 Marks",
      questionHtml: "Consider the reactions:<br>(a) $\\text{H}_3\\text{PO}_2(\\text{aq}) + 4\\text{AgNO}_3(\\text{aq}) + 2\\text{H}_2\\text{O}(\\text{l}) \\rightarrow \\text{H}_3\\text{PO}_4(\\text{aq}) + 4\\text{Ag}(\\text{s}) + 4\\text{HNO}_3(\\text{aq})$<br>(b) $\\text{H}_3\\text{PO}_2(\\text{aq}) + 2\\text{CuSO}_4(\\text{aq}) + 2\\text{H}_2\\text{O}(\\text{l}) \\rightarrow \\text{H}_3\\text{PO}_4(\\text{aq}) + 2\\text{Cu}(\\text{s}) + \\text{H}_2\\text{SO}_4(\\text{aq})$<br>(c) $\\text{C}_6\\text{H}_5\\text{CHO}(\\text{l}) + 2[\\text{Ag}(\\text{NH}_3)_2]^+(\\text{aq}) + 3\\text{OH}^-(\\text{aq}) \\rightarrow \\text{C}_6\\text{H}_5\\text{COO}^-(\\text{aq}) + 2\\text{Ag}(\\text{s}) + 4\\text{NH}_3(\\text{aq}) + 2\\text{H}_2\\text{O}(\\text{l})$<br>(d) $\\text{C}_6\\text{H}_5\\text{CHO}(\\text{l}) + 2\\text{Cu}^{2+}(\\text{aq}) + 5\\text{OH}^-(\\text{aq}) \\rightarrow \\text{No reaction}$<br>What inference do you draw about the behaviour of $\\text{Ag}^+$ and $\\text{Cu}^{2+}$ from these reactions?",
      solutionStepsHtml: `<p><b>Inferences:</b><br>
1. <b>Reactions (a) and (b):</b> Both $\\text{Ag}^+$ ($+1$) and $\\text{Cu}^{2+}$ ($+2$) are reduced to elemental metallic states by the strong reducing agent hypophosphorous acid ($\\text{H}_3\\text{PO}_2$). This shows that both $\\text{Ag}^+$ and $\\text{Cu}^{2+}$ can act as oxidising agents when paired with a strong reductant.</p>
<p>2. <b>Reactions (c) and (d):</b> Benzaldehyde (an aromatic aldehyde) is a milder reducing agent than aliphatic aldehydes. It is easily oxidised by Tollen's reagent ($[\\text{Ag}(\\text{NH}_3)_2]^+$) to benzoate, precipitating silver metal (silver mirror), but it <b>fails to react with Fehling's solution ($\\text{Cu}^{2+}$)</b>.</p>
<p><b>Conclusion:</b><br>
$\\text{Ag}^+$ is a <b>stronger oxidising agent</b> than $\\text{Cu}^{2+}$.<br>
This is supported by their standard reduction potentials:<br>
$$E^\\circ(\\text{Ag}^+ / \\text{Ag}) = +0.80\\text{ V} > E^\\circ(\\text{Cu}^{2+} / \\text{Cu}) = +0.34\\text{ V}$$</p>`,
      rubricRows: [
        { key: "Analysis of H3PO2 reducing both Ag+ and Cu2+", marks: "1 Mark" },
        { key: "Analysis of C6H5CHO reducing Tollen's reagent but not Fehling's", marks: "1.5 Marks" },
        { key: "Concluding Ag+ is a stronger oxidant than Cu2+ supported by E° values", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch7-q18",
      ncertRef: "7.18",
      marks: "4 Marks",
      questionHtml: "Balance the following redox reactions by ion-electron method:<br>(a) $\\text{MnO}_4^-(\\text{aq}) + \\text{I}^-(\\text{aq}) \\rightarrow \\text{MnO}_2(\\text{s}) + \\text{I}_2(\\text{s})$ (in basic medium)<br>(b) $\\text{MnO}_4^-(\\text{aq}) + \\text{SO}_2(\\text{g}) \\rightarrow \\text{Mn}^{2+}(\\text{aq}) + \\text{HSO}_4^-(\\text{aq})$ (in acidic solution)<br>(c) $\\text{H}_2\\text{O}_2(\\text{aq}) + \\text{Fe}^{2+}(\\text{aq}) \\rightarrow \\text{Fe}^{3+}(\\text{aq}) + \\text{H}_2\\text{O}(\\text{l})$ (in acidic solution)<br>(d) $\\text{Cr}_2\\text{O}_7^{2-}(\\text{aq}) + \\text{SO}_2(\\text{g}) \\rightarrow \\text{Cr}^{3+}(\\text{aq}) + \\text{SO}_4^{2-}(\\text{aq})$ (in acidic solution).",
      solutionStepsHtml: `<p><b>(a) Basic medium:</b><br>
Oxidation half: $2\\text{I}^- \\rightarrow \\text{I}_2 + 2e^-$<br>
Reduction half: $\\text{MnO}_4^- + 2\\text{H}_2\\text{O} + 3e^- \\rightarrow \\text{MnO}_2 + 4\\text{OH}^-$<br>
Multiply oxidation by 3 and reduction by 2, then add:<br>
$$\\mathbf{2\\text{MnO}_4^-(\\text{aq}) + 6\\text{I}^-(\\text{aq}) + 4\\text{H}_2\\text{O}(\\text{l}) \\rightarrow 2\\text{MnO}_2(\\text{s}) + 3\\text{I}_2(\\text{s}) + 8\\text{OH}^-(\\text{aq})}$$</p>
<p><b>(b) Acidic medium:</b><br>
Oxidation half: $\\text{SO}_2 + 2\\text{H}_2\\text{O} \\rightarrow \\text{HSO}_4^- + 3\\text{H}^+ + 2e^-$<br>
Reduction half: $\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$<br>
Multiply oxidation by 5 and reduction by 2, then add:<br>
$$\\mathbf{2\\text{MnO}_4^-(\\text{aq}) + 5\\text{SO}_2(\\text{g}) + 2\\text{H}_2\\text{O}(\\text{l}) + \\text{H}^+(\\text{aq}) \\rightarrow 2\\text{Mn}^{2+}(\\text{aq}) + 5\\text{HSO}_4^-(\\text{aq})}$$</p>
<p><b>(c) Acidic medium:</b><br>
Oxidation half: $\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+} + e^-$<br>
Reduction half: $\\text{H}_2\\text{O}_2 + 2\\text{H}^+ + 2e^- \\rightarrow 2\\text{H}_2\\text{O}$<br>
Multiply oxidation by 2 and add:<br>
$$\\mathbf{2\\text{Fe}^{2+}(\\text{aq}) + \\text{H}_2\\text{O}_2(\\text{aq}) + 2\\text{H}^+(\\text{aq}) \\rightarrow 2\\text{Fe}^{3+}(\\text{aq}) + 2\\text{H}_2\\text{O}(\\text{l})}$$</p>
<p><b>(d) Acidic medium:</b><br>
Oxidation half: $\\text{SO}_2 + 2\\text{H}_2\\text{O} \\rightarrow \\text{SO}_4^{2-} + 4\\text{H}^+ + 2e^-$<br>
Reduction half: $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$<br>
Multiply oxidation by 3 and add:<br>
$$\\mathbf{\\text{Cr}_2\\text{O}_7^{2-}(\\text{aq}) + 3\\text{SO}_2(\\text{g}) + 2\\text{H}^+(\\text{aq}) \\rightarrow 2\\text{Cr}^{3+}(\\text{aq}) + 3\\text{SO}_4^{2-}(\\text{aq}) + \\text{H}_2\\text{O}(\\text{l})}$$</p>`,
      rubricRows: [
        { key: "Part (a): Balanced equation in basic medium", marks: "1 Mark" },
        { key: "Part (b): Balanced equation in acidic medium", marks: "1 Mark" },
        { key: "Part (c): Balanced equation for Fe2+ + H2O2", marks: "1 Mark" },
        { key: "Part (d): Balanced equation for Cr2O7^2- + SO2", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q19",
      ncertRef: "7.19",
      marks: "5 Marks",
      questionHtml: "Balance the following equations in basic medium by ion-electron method and oxidation number methods and identify the oxidising agent and the reducing agent:<br>(a) $\\text{P}_4(\\text{s}) + \\text{OH}^-(\\text{aq}) \\rightarrow \\text{PH}_3(\\text{g}) + \\text{H}_2\\text{PO}_2^-(\\text{aq})$<br>(b) $\\text{N}_2\\text{H}_4(\\text{l}) + \\text{ClO}_3^-(\\text{aq}) \\rightarrow \\text{NO}(\\text{g}) + \\text{Cl}^-(\\text{aq})$<br>(c) $\\text{Cl}_2\\text{O}_7(\\text{g}) + \\text{H}_2\\text{O}_2(\\text{aq}) \\rightarrow \\text{ClO}_2^-(\\text{aq}) + \\text{O}_2(\\text{g}) + \\text{H}^+$.",
      solutionStepsHtml: `<p><b>(a) Disproportionation of Phosphorus:</b><br>
$\\text{P}_4$ (O.N. $0$) is both oxidised to $\\text{H}_2\\text{PO}_2^-$ ($+1$) and reduced to $\\text{PH}_3$ ($-3$).<br>
• Oxidation half: $\\text{P}_4 + 8\\text{OH}^- \\rightarrow 4\\text{H}_2\\text{PO}_2^- + 4e^-$<br>
• Reduction half: $\\text{P}_4 + 12\\text{H}_2\\text{O} + 12e^- \\rightarrow 4\\text{PH}_3 + 12\\text{OH}^-$<br>
Multiply oxidation by 3 and add:<br>
$$4\\text{P}_4 + 12\\text{H}_2\\text{O} + 12\\text{OH}^- \\rightarrow 4\\text{PH}_3 + 12\\text{H}_2\\text{PO}_2^-$$
Divide by 4:<br>
$$\\mathbf{\\text{P}_4(\\text{s}) + 3\\text{OH}^-(\\text{aq}) + 3\\text{H}_2\\text{O}(\\text{l}) \\rightarrow \\text{PH}_3(\\text{g}) + 3\\text{H}_2\\text{PO}_2^-(\\text{aq})}$$
• Oxidising Agent = $\\mathbf{P_4}$; Reducing Agent = $\\mathbf{P_4}$.</p>
<p><b>(b) $\\text{N}_2\\text{H}_4 + \\text{ClO}_3^- \\rightarrow \\text{NO} + \\text{Cl}^-$:</b><br>
• Oxidation half: $\\text{N}_2\\text{H}_4 + 8\\text{OH}^- \\rightarrow 2\\text{NO} + 6\\text{H}_2\\text{O} + 8e^-$ ($\\text{N}$: $-2 \\rightarrow +2$)<br>
• Reduction half: $\\text{ClO}_3^- + 3\\text{H}_2\\text{O} + 6e^- \\rightarrow \\text{Cl}^- + 6\\text{OH}^-$ ($\\text{Cl}$: $+5 \\rightarrow -1$)<br>
LCM of electrons $(8, 6) = 24$. Multiply oxidation by 3 and reduction by 4:<br>
$$\\mathbf{3\\text{N}_2\\text{H}_4(\\text{l}) + 4\\text{ClO}_3^-(\\text{aq}) \\rightarrow 6\\text{NO}(\\text{g}) + 4\\text{Cl}^-(\\text{aq}) + 6\\text{H}_2\\text{O}(\\text{l})}$$
• Oxidising Agent = $\\mathbf{ClO_3^-}$; Reducing Agent = $\\mathbf{N_2H_4}$.</p>
<p><b>(c) $\\text{Cl}_2\\text{O}_7 + \\text{H}_2\\text{O}_2 \\rightarrow \\text{ClO}_2^- + \\text{O}_2$:</b><br>
• Oxidation half: $\\text{H}_2\\text{O}_2 + 2\\text{OH}^- \\rightarrow \\text{O}_2 + 2\\text{H}_2\\text{O} + 2e^-$<br>
• Reduction half: $\\text{Cl}_2\\text{O}_7 + 3\\text{H}_2\\text{O} + 8e^- \\rightarrow 2\\text{ClO}_2^- + 6\\text{OH}^-$<br>
Multiply oxidation by 4 and add:<br>
$$\\mathbf{\\text{Cl}_2\\text{O}_7(\\text{g}) + 4\\text{H}_2\\text{O}_2(\\text{aq}) + 2\\text{OH}^-(\\text{aq}) \\rightarrow 2\\text{ClO}_2^-(\\text{aq}) + 4\\text{O}_2(\\text{g}) + 5\\text{H}_2\\text{O}(\\text{l})}$$
• Oxidising Agent = $\\mathbf{Cl_2O_7}$; Reducing Agent = $\\mathbf{H_2O_2}$.</p>`,
      rubricRows: [
        { key: "Part (a): Balanced equation and P4 as both oxidant and reductant", marks: "1.5 Marks" },
        { key: "Part (b): Balanced equation with ClO3- oxidant, N2H4 reductant", marks: "1.75 Marks" },
        { key: "Part (c): Balanced equation with Cl2O7 oxidant, H2O2 reductant", marks: "1.75 Marks" }
      ]
    },
    {
      id: "c11c-ch7-q20",
      ncertRef: "7.20",
      marks: "3 Marks",
      questionHtml: "What sorts of informations can you draw from the following reaction?<br>$$(\\text{CN})_2(\\text{g}) + 2\\text{OH}^-(\\text{aq}) \\rightarrow \\text{CN}^-(\\text{aq}) + \\text{CNO}^-(\\text{aq}) + \\text{H}_2\\text{O}(\\text{l})$$",
      solutionStepsHtml: `<p><b>Key Informations drawn from the reaction:</b></p>
<p>1. <b>Disproportionation Redox Reaction:</b><br>
In cyanogen $(\\text{CN})_2$, carbon is in the <b>$+3$</b> oxidation state (or cyanogen group is $0$).<br>
In cyanide ion $\\text{CN}^-$, carbon is in the <b>$+2$</b> state (reduction: decrease in O.N.).<br>
In cyanate ion $\\text{CNO}^-$, carbon is in the <b>$+4$</b> state (oxidation: increase in O.N.).<br>
Since the same species undergoes simultaneous oxidation and reduction, this is a <b>disproportionation reaction</b>.</p>
<p>2. <b>Pseudohalogen Behaviour:</b><br>
This reaction is strictly analogous to the disproportionation of halogens like $\\text{Cl}_2$ or $\\text{Br}_2$ in alkaline solution:<br>
$$\\text{Cl}_2 + 2\\text{OH}^- \\rightarrow \\text{Cl}^- + \\text{ClO}^- + \\text{H}_2\\text{O}$$
This confirms that cyanogen $(\\text{CN})_2$ behaves as a <b>pseudohalogen</b>, and $\\text{CN}^-$ behaves as a <b>pseudohalide</b> ion.</p>`,
      rubricRows: [
        { key: "Proof of disproportionation reaction with oxidation numbers", marks: "1.5 Marks" },
        { key: "Analogy with halogen disproportionation and pseudohalogen classification", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch7-q21",
      ncertRef: "7.21",
      marks: "3 Marks",
      questionHtml: "The $E^\\circ$ values of some redox couples are given below:<br>$E^\\circ(\\text{Br}_2 / \\text{Br}^-) = +1.09\\text{ V}$, $E^\\circ(\\text{Ag}^+ / \\text{Ag}) = +0.80\\text{ V}$, $E^\\circ(\\text{Cu}^{2+} / \\text{Cu}) = +0.34\\text{ V}$, $E^\\circ(\\text{I}_2 / \\text{I}^-) = +0.54\\text{ V}$, $E^\\circ(\\text{Fe}^{3+} / \\text{Fe}^{2+}) = +0.77\\text{ V}$.<br>(a) Predict whether iron(III) ion can oxidise bromide to bromine under standard conditions.<br>(b) Can $\\text{Fe}^{3+}$ oxidise $\\text{I}^-$ to $\\text{I}_2$?<br>(c) Can $\\text{Ag}^+$ oxidise $\\text{Cu}$ to $\\text{Cu}^{2+}$?",
      solutionStepsHtml: `<p><i>Feasibility rule: A redox reaction is feasible if $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} > 0$.</i></p>
<p><b>(a) Can $\\text{Fe}^{3+}$ oxidise $\\text{Br}^-$?</b><br>
$$\\text{Cathode (Reduction): } \\text{Fe}^{3+} + e^- \\rightarrow \\text{Fe}^{2+}, \\quad E^\\circ = +0.77\\text{ V}$$
$$\\text{Anode (Oxidation): } 2\\text{Br}^- \\rightarrow \\text{Br}_2 + 2e^-, \\quad E^\\circ = +1.09\\text{ V}$$
$$E^\\circ_{\\text{cell}} = E^\\circ(\\text{Fe}^{3+}/\\text{Fe}^{2+}) - E^\\circ(\\text{Br}_2/\\text{Br}^-) = +0.77 - 1.09 = -0.32\\text{ V}$$
Since $E^\\circ_{\\text{cell}} < 0$, the reaction is non-spontaneous. <b>No, $\\text{Fe}^{3+}$ cannot oxidise $\\text{Br}^-$</b>.</p>
<p><b>(b) Can $\\text{Fe}^{3+}$ oxidise $\\text{I}^-$?</b><br>
$$E^\\circ_{\\text{cell}} = E^\\circ(\\text{Fe}^{3+}/\\text{Fe}^{2+}) - E^\\circ(\\text{I}_2/\\text{I}^-) = +0.77 - 0.54 = +0.23\\text{ V}$$
Since $E^\\circ_{\\text{cell}} > 0$, <b>Yes, $\\text{Fe}^{3+}$ can oxidise $\\text{I}^-$ to $\\text{I}_2$</b>.</p>
<p><b>(c) Can $\\text{Ag}^+$ oxidise $\\text{Cu}$?</b><br>
$$E^\\circ_{\\text{cell}} = E^\\circ(\\text{Ag}^+/\\text{Ag}) - E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.80 - 0.34 = +0.46\\text{ V}$$
Since $E^\\circ_{\\text{cell}} > 0$, <b>Yes, $\\text{Ag}^+$ can oxidise $\\text{Cu}$ to $\\text{Cu}^{2+}$</b>.</p>`,
      rubricRows: [
        { key: "Part (a): E°cell = -0.32 V < 0 -> Non-feasible (No)", marks: "1 Mark" },
        { key: "Part (b): E°cell = +0.23 V > 0 -> Feasible (Yes)", marks: "1 Mark" },
        { key: "Part (c): E°cell = +0.46 V > 0 -> Feasible (Yes)", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q22",
      ncertRef: "7.22",
      marks: "4 Marks",
      questionHtml: "Calculate the oxidation number of each sulphur atom in the following compounds:<br>(a) $\\text{Na}_2\\text{S}_2\\text{O}_3$<br>(b) $\\text{Na}_2\\text{S}_4\\text{O}_6$<br>(c) $\\text{Na}_2\\text{SO}_3$<br>(d) $\\text{Na}_2\\text{SO}_4$.",
      solutionStepsHtml: `<p><b>(a) $\\text{Na}_2\\text{S}_2\\text{O}_3$ (Sodium thiosulphate):</b><br>
Structure is analogous to sulphate with one oxygen replaced by a terminal sulphur atom: $[\\text{S}-\\text{SO}_3]^{2-}$.<br>
• Central sulphur is bonded to three oxygen atoms and one sulphur: oxidation number = <b>$+5$</b> (or $+6$).<br>
• Terminal sulphur atom behaving like coordinate oxygen: oxidation number = <b>$-1$</b> (or $-2$).<br>
Average oxidation number $= (+5 + (-1))/2 = \\mathbf{+2}$.</p>
<p><b>(b) $\\text{Na}_2\\text{S}_4\\text{O}_6$ (Sodium tetrathionate):</b><br>
Structure: $\\text{O}_3\\text{S}^*-\\text{S}^0-\\text{S}^0-\\text{S}^*\\text{O}_3^{2-}$.<br>
• The two central sulphur atoms: <b>$0$ each</b>.<br>
• The two terminal sulphur atoms: <b>$+5$ each</b>.<br>
Average oxidation number $= (5 + 0 + 0 + 5)/4 = \\mathbf{+2.5}$.</p>
<p><b>(c) $\\text{Na}_2\\text{SO}_3$ (Sodium sulphite):</b><br>
$2(+1) + x + 3(-2) = 0 \\implies 2 + x - 6 = 0 \\implies \\mathbf{x = +4}$.</p>
<p><b>(d) $\\text{Na}_2\\text{SO}_4$ (Sodium sulphate):</b><br>
$2(+1) + x + 4(-2) = 0 \\implies 2 + x - 8 = 0 \\implies \\mathbf{x = +6}$.</p>`,
      rubricRows: [
        { key: "Part (a): Thiosulphate structural breakdown (+5 and -1; avg +2)", marks: "1 Mark" },
        { key: "Part (b): Tetrathionate breakdown (two 0, two +5; avg +2.5)", marks: "1 Mark" },
        { key: "Part (c): Sulphite S = +4", marks: "1 Mark" },
        { key: "Part (d): Sulphate S = +6", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q23",
      ncertRef: "7.23",
      marks: "5 Marks",
      questionHtml: "Identify the redox reactions among the following and identify oxidising and reducing agents:<br>(a) $\\text{CH}_4(\\text{g}) + 4\\text{Cl}_2(\\text{g}) \\rightarrow \\text{CCl}_4(\\text{l}) + 4\\text{HCl}(\\text{g})$<br>(b) $\\text{Fe}_2\\text{O}_3(\\text{s}) + 3\\text{CO}(\\text{g}) \\rightarrow 2\\text{Fe}(\\text{s}) + 3\\text{CO}_2(\\text{g})$<br>(c) $2\\text{KClO}_3(\\text{s}) \\rightarrow 2\\text{KCl}(\\text{s}) + 3\\text{O}_2(\\text{g})$<br>(d) $\\text{BaCl}_2(\\text{aq}) + \\text{H}_2\\text{SO}_4(\\text{aq}) \\rightarrow \\text{BaSO}_4(\\text{s}) + 2\\text{HCl}(\\text{aq})$<br>(e) $2\\text{Na}(\\text{s}) + 2\\text{H}_2\\text{O}(\\text{l}) \\rightarrow 2\\text{NaOH}(\\text{aq}) + \\text{H}_2(\\text{g})$.",
      solutionStepsHtml: `<p><b>(a) $\\text{CH}_4 + 4\\text{Cl}_2 \\rightarrow \\text{CCl}_4 + 4\\text{HCl}$:</b><br>
$\\text{C}$ goes from $-4$ to $+4$ (Oxidation); $\\text{Cl}$ goes from $0$ to $-1$ (Reduction).<br>
$\\implies$ <b>Redox reaction</b>. Oxidising Agent = $\\mathbf{Cl_2}$, Reducing Agent = $\\mathbf{CH_4}$.</p>
<p><b>(b) $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$:</b><br>
$\\text{Fe}$ goes from $+3$ to $0$ (Reduction); $\\text{C}$ goes from $+2$ to $+4$ (Oxidation).<br>
$\\implies$ <b>Redox reaction</b>. Oxidising Agent = $\\mathbf{Fe_2O_3}$, Reducing Agent = $\\mathbf{CO}$.</p>
<p><b>(c) $2\\text{KClO}_3 \\rightarrow 2\\text{KCl} + 3\\text{O}_2$:</b><br>
$\\text{Cl}$ goes from $+5$ to $-1$ (Reduction); $\\text{O}$ goes from $-2$ to $0$ (Oxidation).<br>
$\\implies$ <b>Intramolecular redox reaction</b>. Oxidising and Reducing Agent = $\\mathbf{KClO_3}$.</p>
<p><b>(d) $\\text{BaCl}_2 + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{BaSO}_4 + 2\\text{HCl}$:</b><br>
$\\text{Ba} (+2), \\text{Cl} (-1), \\text{H} (+1), \\text{S} (+6), \\text{O} (-2)$ remain unchanged throughout.<br>
$\\implies$ <b>Not a redox reaction</b> (Double displacement / Precipitation reaction).</p>
<p><b>(e) $2\\text{Na} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{NaOH} + \\text{H}_2$:</b><br>
$\\text{Na}$ goes from $0$ to $+1$ (Oxidation); $\\text{H}$ goes from $+1$ to $0$ (Reduction).<br>
$\\implies$ <b>Redox reaction</b>. Oxidising Agent = $\\mathbf{H_2O}$, Reducing Agent = $\\mathbf{Na}$.</p>`,
      rubricRows: [
        { key: "Part (a): Redox, Cl2 oxidant, CH4 reductant", marks: "1 Mark" },
        { key: "Part (b): Redox, Fe2O3 oxidant, CO reductant", marks: "1 Mark" },
        { key: "Part (c): Intramolecular redox, KClO3", marks: "1 Mark" },
        { key: "Part (d): Non-redox precipitation reaction justified", marks: "1 Mark" },
        { key: "Part (e): Redox, H2O oxidant, Na reductant", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q24",
      ncertRef: "7.24",
      marks: "4 Marks",
      questionHtml: "In Ostwald's process for the manufacture of nitric acid, the first step involves the oxidation of ammonia gas by oxygen gas to give nitric oxide gas and steam. What is the maximum weight of nitric oxide that can be obtained from $10.0\\text{ g}$ of ammonia and $20.0\\text{ g}$ of oxygen?",
      solutionStepsHtml: `<p><b>Step 1: Balanced chemical equation:</b><br>
$$4\\text{NH}_3(\\text{g}) + 5\\text{O}_2(\\text{g}) \\rightarrow 4\\text{NO}(\\text{g}) + 6\\text{H}_2\\text{O}(\\text{g})$$
Molar masses: $\\text{NH}_3 = 17\\text{ g mol}^{-1}$, $\\text{O}_2 = 32\\text{ g mol}^{-1}$, $\\text{NO} = 30\\text{ g mol}^{-1}$.<br>
$4 \\times 17 = 68\\text{ g of } \\text{NH}_3$ reacts with $5 \\times 32 = 160\\text{ g of } \\text{O}_2$ to give $4 \\times 30 = 120\\text{ g of } \\text{NO}$.</p>
<p><b>Step 2: Determine Limiting Reactant:</b><br>
Available moles of $\\text{NH}_3 = \\frac{10.0}{17} = 0.588\\text{ mol}$.<br>
Available moles of $\\text{O}_2 = \\frac{20.0}{32} = 0.625\\text{ mol}$.<br>
From stoichiometry, $0.588\\text{ mol of } \\text{NH}_3$ requires $\\frac{5}{4} \\times 0.588 = 0.735\\text{ mol of } \\text{O}_2$.<br>
Since only $0.625\\text{ mol of } \\text{O}_2$ is available, <b>$\\text{O}_2$ is the limiting reactant</b>.</p>
<p><b>Step 3: Calculate maximum weight of $\\text{NO}$:</b><br>
From $160\\text{ g of } \\text{O}_2$, $\\text{NO}$ produced $= 120\\text{ g}$.<br>
From $20.0\\text{ g of } \\text{O}_2$, $\\text{NO}$ produced is:
$$\\text{Mass of NO} = \\frac{120}{160} \\times 20.0 = 0.75 \\times 20.0 = 15.0\\text{ g}$$</p>
<p><b>Final Answer:</b> The maximum weight of nitric oxide obtained is <b>$15.0\\text{ g}$</b>.</p>`,
      rubricRows: [
        { key: "Balanced equation 4NH3 + 5O2 -> 4NO + 6H2O", marks: "1 Mark" },
        { key: "Moles calculation and identifying O2 as limiting reagent", marks: "1.5 Marks" },
        { key: "Calculating mass of NO = (120/160)*20 = 15.0 g", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch7-q25",
      ncertRef: "7.25",
      marks: "2 Marks",
      questionHtml: "Arrange the following metals in the order in which they displace each other from the solution of their salts:<br>$\\text{Al}$, $\\text{Cu}$, $\\text{Fe}$, $\\text{Mg}$ and $\\text{Zn}$.",
      solutionStepsHtml: `<p><b>Principle:</b> A metal with a more negative standard reduction potential ($E^\\circ$) is a more reactive metal (stronger reducing agent) and displaces any metal below it in the electrochemical series from its salt solution.</p>
<p><b>Standard Reduction Potentials ($E^\\circ$):</b><br>
• $\\text{Mg}^{2+} / \\text{Mg} = -2.37\\text{ V}$ (Most reactive)<br>
• $\\text{Al}^{3+} / \\text{Al} = -1.66\\text{ V}$<br>
• $\\text{Zn}^{2+} / \\text{Zn} = -0.76\\text{ V}$<br>
• $\\text{Fe}^{2+} / \\text{Fe} = -0.44\\text{ V}$<br>
• $\\text{Cu}^{2+} / \\text{Cu} = +0.34\\text{ V}$ (Least reactive)</p>
<p><b>Displacement Order:</b> Each preceding metal displaces all succeeding metals:<br>
$$\\mathbf{Mg > Al > Zn > Fe > Cu}$$</p>`,
      rubricRows: [
        { key: "Listing standard reduction potentials of the metals", marks: "1 Mark" },
        { key: "Correct displacement order Mg > Al > Zn > Fe > Cu", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q26",
      ncertRef: "7.26",
      marks: "2 Marks",
      questionHtml: "Given the standard electrode potentials:<br>$\\text{K}^+ / \\text{K} = -2.93\\text{ V}$, $\\text{Ag}^+ / \\text{Ag} = +0.80\\text{ V}$, $\\text{Hg}^{2+} / \\text{Hg} = +0.79\\text{ V}$, $\\text{Mg}^{2+} / \\text{Mg} = -2.37\\text{ V}$, $\\text{Cr}^{3+} / \\text{Cr} = -0.74\\text{ V}$.<br>Arrange these metals in their increasing order of reducing power.",
      solutionStepsHtml: `<p><b>Rule:</b> The lower (more negative) the standard reduction potential, the greater the tendency of the metal to lose electrons, hence the <b>stronger the reducing power</b>.</p>
<p>Arranging by $E^\\circ$ values from highest (least reducing) to lowest (most reducing):<br>
• $\\text{Ag}^+ / \\text{Ag} = +0.80\\text{ V}$ (Weakest reductant)<br>
• $\\text{Hg}^{2+} / \\text{Hg} = +0.79\\text{ V}$<br>
• $\\text{Cr}^{3+} / \\text{Cr} = -0.74\\text{ V}$<br>
• $\\text{Mg}^{2+} / \\text{Mg} = -2.37\\text{ V}$<br>
• $\\text{K}^+ / \\text{K} = -2.93\\text{ V}$ (Strongest reductant)</p>
<p><b>Increasing Order of Reducing Power:</b><br>
$$\\mathbf{Ag < Hg < Cr < Mg < K}$$</p>`,
      rubricRows: [
        { key: "Stating inverse relation between E° and reducing power", marks: "1 Mark" },
        { key: "Correct sequence Ag < Hg < Cr < Mg < K", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q27",
      ncertRef: "7.27",
      marks: "4 Marks",
      questionHtml: "Depict the galvanic cell in which the reaction $\\text{Zn}(\\text{s}) + 2\\text{Ag}^+(\\text{aq}) \\rightarrow \\text{Zn}^{2+}(\\text{aq}) + 2\\text{Ag}(\\text{s})$ takes place. Further, show:<br>(i) Which electrode is negatively charged?<br>(ii) The carriers of the current in the cell.<br>(iii) Individual reaction at each electrode.",
      solutionStepsHtml: `<p><b>Cell Representation:</b><br>
Zinc undergoes oxidation at anode; silver ions undergo reduction at cathode:<br>
$$\\mathbf{\\text{Zn}(\\text{s}) | \\text{Zn}^{2+}(\\text{aq}) || \\text{Ag}^+(\\text{aq}) | \\text{Ag}(\\text{s})}$$</p>
<p><b>(i) Negatively charged electrode:</b><br>
The <b>Zinc electrode (Anode)</b> is negatively charged because zinc atoms lose electrons at this electrode, accumulating negative charge before they flow through the external circuit.</p>
<p><b>(ii) Carriers of current in the cell:</b><br>
• In the <b>external circuit</b>, current is carried by <b>electrons</b> flowing from zinc (anode) to silver (cathode) (conventional current flows from Ag to Zn).<br>
• In the <b>internal solution / salt bridge</b>, current is carried by <b>ions</b> (anions towards anode, cations towards cathode).</p>
<p><b>(iii) Individual electrode reactions:</b><br>
• <b>At Anode (Oxidation):</b> $\\text{Zn}(\\text{s}) \\rightarrow \\text{Zn}^{2+}(\\text{aq}) + 2e^-$<br>
• <b>At Cathode (Reduction):</b> $\\text{Ag}^+(\\text{aq}) + e^- \\rightarrow \\text{Ag}(\\text{s})$</p>`,
      rubricRows: [
        { key: "Correct galvanic cell depiction Zn|Zn2+||Ag+|Ag", marks: "1 Mark" },
        { key: "Sub-part (i): Zinc electrode (anode) is negative", marks: "1 Mark" },
        { key: "Sub-part (ii): Electrons in external circuit, ions in internal solution", marks: "1 Mark" },
        { key: "Sub-part (iii): Anode and cathode half-reactions", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q28",
      ncertRef: "7.28",
      marks: "3 Marks",
      questionHtml: "Predict whether the following reaction is feasible or not at $298\\text{ K}$:<br>$$\\text{Sn}^{2+}(\\text{aq}) + 2\\text{Fe}^{3+}(\\text{aq}) \\rightarrow \\text{Sn}^{4+}(\\text{aq}) + 2\\text{Fe}^{2+}(\\text{aq})$$<br>Given: $E^\\circ(\\text{Fe}^{3+} / \\text{Fe}^{2+}) = +0.77\\text{ V}$ and $E^\\circ(\\text{Sn}^{4+} / \\text{Sn}^{2+}) = +0.15\\text{ V}$.",
      solutionStepsHtml: `<p><b>Step 1: Identify half-reactions:</b><br>
• Reduction (Cathode): $2\\text{Fe}^{3+} + 2e^- \\rightarrow 2\\text{Fe}^{2+}, \\quad E^\\circ_{\\text{cathode}} = +0.77\\text{ V}$<br>
• Oxidation (Anode): $\\text{Sn}^{2+} \\rightarrow \\text{Sn}^{4+} + 2e^-, \\quad E^\\circ_{\\text{anode}} = +0.15\\text{ V}$</p>
<p><b>Step 2: Calculate standard EMF ($E^\\circ_{\\text{cell}}$):</b><br>
$$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = +0.77\\text{ V} - (+0.15\\text{ V}) = +0.62\\text{ V}$$</p>
<p><b>Step 3: Feasibility criterion:</b><br>
$$\\Delta G^\\circ = -n F E^\\circ_{\\text{cell}}$$
Since $E^\\circ_{\\text{cell}} = +0.62\\text{ V} > 0$, $\\Delta G^\\circ$ is negative.</p>
<p><b>Conclusion:</b> Yes, the reaction is <b>thermodynamically feasible</b> under standard conditions.</p>`,
      rubricRows: [
        { key: "Identification of cathode (Fe3+/Fe2+) and anode (Sn4+/Sn2+)", marks: "1 Mark" },
        { key: "Calculation of E°cell = +0.77 - 0.15 = +0.62 V", marks: "1 Mark" },
        { key: "Concluding feasibility since E°cell > 0", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch7-q29",
      ncertRef: "7.29",
      marks: "4 Marks",
      questionHtml: "Write the Nernst equation and calculate the emf of the following cell at $298\\text{ K}$:<br>$$\\text{Mg}(\\text{s}) | \\text{Mg}^{2+}(0.001\\text{ M}) || \\text{Cu}^{2+}(0.0001\\text{ M}) | \\text{Cu}(\\text{s})$$<br>Given: $E^\\circ(\\text{Mg}^{2+} / \\text{Mg}) = -2.37\\text{ V}$, $E^\\circ(\\text{Cu}^{2+} / \\text{Cu}) = +0.34\\text{ V}$.",
      solutionStepsHtml: `<p><b>Step 1: Cell reaction and $E^\\circ_{\\text{cell}}$:</b><br>
$$\\text{Mg}(\\text{s}) + \\text{Cu}^{2+}(\\text{aq}) \\rightarrow \\text{Mg}^{2+}(\\text{aq}) + \\text{Cu}(\\text{s}) \\quad (n = 2)$$
$$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = +0.34 - (-2.37) = +2.71\\text{ V}$$</p>
<p><b>Step 2: Nernst Equation at $298\\text{ K}$:</b><br>
$$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n} \\log\\frac{[\\text{Mg}^{2+}]}{[\\text{Cu}^{2+}]}$$</p>
<p><b>Step 3: Substitute concentrations:</b><br>
$[\\text{Mg}^{2+}] = 0.001\\text{ M} = 10^{-3}\\text{ M}$<br>
$[\\text{Cu}^{2+}] = 0.0001\\text{ M} = 10^{-4}\\text{ M}$<br>
$$\\frac{[\\text{Mg}^{2+}]}{[\\text{Cu}^{2+}]} = \\frac{10^{-3}}{10^{-4}} = 10$$
$$\\log(10) = 1$$
$$E_{\\text{cell}} = 2.71 - \\frac{0.0591}{2}(1) = 2.71 - 0.02955 = 2.68045\\text{ V} \\approx 2.68\\text{ V}$$</p>
<p><b>Final Answer:</b> The EMF of the cell is <b>$2.68\\text{ V}$</b>.</p>`,
      rubricRows: [
        { key: "Calculation of E°cell = 0.34 - (-2.37) = 2.71 V with n = 2", marks: "1 Mark" },
        { key: "Stating Nernst equation Ecell = E°cell - (0.0591/n) log Q", marks: "1.5 Marks" },
        { key: "Accurate evaluation yielding Ecell = 2.68 V", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch7-q30",
      ncertRef: "7.30",
      marks: "2 Marks",
      questionHtml: "Why does an electrochemical cell stop working after some time?",
      solutionStepsHtml: `<p><b>Thermodynamic and Kinetic Explanation:</b><br>
As the electrochemical cell operates, the spontaneous cell reaction consumes reactants and produces products:</p>
<p>1. <b>Change in Ionic Concentrations:</b><br>
At the anode, metal dissolves into solution increasing anode cation concentration ($[\\text{Zn}^{2+}]$ rises). At the cathode, metal ions discharge, lowering cathode cation concentration ($[\\text{Cu}^{2+}]$ falls).</p>
<p>2. <b>Application of Nernst Equation:</b><br>
$$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{2.303 RT}{nF} \\log\\frac{[\\text{Anode Cation}]}{[\\text{Cathode Cation}]}$$
As the concentration ratio $Q$ increases, the term $\\frac{2.303 RT}{nF}\\log Q$ increases, causing $E_{\\text{cell}}$ to decrease continuously.</p>
<p>3. <b>Equilibrium State ($E_{\\text{cell}} = 0$):</b><br>
Eventually, the system reaches dynamic chemical equilibrium where the electrode potential of the cathode equals the electrode potential of the anode ($E_{\\text{cathode}} = E_{\\text{anode}}$). At this point, $\\Delta G = 0$ and $E_{\\text{cell}} = 0$. No net electron flow occurs, and the <b>cell stops working</b>.</p>`,
      rubricRows: [
        { key: "Explanation of concentration changes using Nernst equation", marks: "1 Mark" },
        { key: "Attainment of chemical equilibrium where Delta G = 0 and Ecell = 0", marks: "1 Mark" }
      ]
    }
  ];
}

module.exports = { getQuestions };
