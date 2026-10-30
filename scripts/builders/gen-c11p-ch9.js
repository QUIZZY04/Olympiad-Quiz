// scripts/builders/gen-c11p-ch9.js
// Complete, verbatim NCERT generator for Class 11 Physics Chapter 9: Mechanical Properties of Fluids (All 26 Questions)
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', '..', 'chapters-c11p');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function createQCard(id, num, exercise, qText, answerHtml, marks, rubricRows) {
  const rubricHtml = rubricRows.map(r => `
          <div class="marking-row"><span class="marking-key">${r[0]}</span><span class="marking-marks">${r[1]}</span></div>`).join('');

  return `
  <!-- ${id} (${exercise}) -->
  <div class="q-card" id="${id}">
    <div class="q-head" onclick="toggleQ('${id}')">
      <div class="q-num">${num}</div>
      <div class="q-text">
        <span style="display:inline-block; font-size:0.75rem; font-weight:800; text-transform:uppercase; background:#f5f3ff; color:#7c3aed; padding:2px 8px; border-radius:4px; margin-bottom:4px;">${exercise}</span><br>
        ${qText}
      </div>
      <div class="q-marks">[${marks}]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Step-by-Step Solution</div>
        <div class="answer-text">
          ${answerHtml}
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme Rubric (Session 2026–27)</div>
          ${rubricHtml}
        </div>
      </div>
    </div>
  </div>`;
}

const questions = [];

// ============================================================================
// CHAPTER 9: MECHANICAL PROPERTIES OF FLUIDS (Questions 9.1 to 9.26)
// ============================================================================

// Question 9.1
questions.push(createQCard(
  'c11p-ch9-q1', 'Question 9.1', 'NCERT Exercise',
  'Explain why<br>(a) The blood pressure in humans is greater at the feet than at the brain<br>(b) Atmospheric pressure at a height of about 6 km decreases to nearly half of its value at the sea level, though the height of the atmosphere is more than 100 km<br>(c) Hydrostatic pressure is a scalar quantity even though pressure is force divided by area.',
  `<div class="step">
    • <b>(a) Blood pressure difference between feet and brain:</b><br>
      The pressure of a static fluid column of density $\\rho$ and height $h$ is given by Pascal's law of hydrostatic pressure:<br>
      $$P = P_0 + \\rho g h$$<br>
      The height of the blood column from the heart/brain to the feet is substantial ($h \\approx 1.2\\text{ to }1.5\\text{ m}$). Consequently, the hydrostatic column adds $\\Delta P = \\rho_{blood} g h$ to the circulatory pressure at the feet, making blood pressure at the feet significantly higher than at the brain in an upright standing person.<br><br>
    • <b>(b) Atmospheric pressure fall-off with altitude:</b><br>
      Air is a <b>compressible fluid</b> whose density varies with pressure (and height) according to the isothermal barometric formula $\\rho(h) = \\rho_0 e^{-Mgh/RT}$.<br>
      Due to gravity and the weight of the overlying air column, the lower layers of the atmosphere are heavily compressed and contain the vast majority of atmospheric mass (over $50\\%$ of the entire atmosphere resides within the first $5.5\\text{ to }6\\text{ km}$). The upper atmosphere above $6\\text{ km}$ is extremely rarefied. Hence, pressure drops by half in just $6\\text{ km}$ despite the thin exosphere extending beyond $100\\text{ km}$.<br><br>
    • <b>(c) Scalar nature of hydrostatic pressure:</b><br>
      By definition, pressure in a static fluid is the normal force per unit area ($P = \\frac{F_{\\perp}}{A}$). By Pascal's principle, fluid pressure acts <b>equally and isotropically in all directions</b> at a given point. It does not possess a unique spatial direction; when a surface is placed in the fluid, the force is always perpendicular to whatever orientation the surface takes. Since it has magnitude but no directional dependence, pressure is a <b>scalar quantity</b>.
  </div>`,
  '4 Marks',
  [
    ['(a) Hydrostatic column relation $\\Delta P = \\rho g h$ applied to circulatory column', '1.5 Marks'],
    ['(b) Compressibility of air and exponential density decay with altitude', '1.5 Marks'],
    ['(c) Isotropic nature of fluid pressure independent of surface orientation', '1 Mark']
  ]
));

// Question 9.2
questions.push(createQCard(
  'c11p-ch9-q2', 'Question 9.2', 'NCERT Exercise',
  'Explain why<br>(a) The angle of contact of mercury with glass is obtuse, while that of water with glass is acute.<br>(b) Water on a clean glass plate tends to spread out while mercury on the same surface tends to form drops. (Put differently, water wets glass while mercury does not.)<br>(c) A drop of liquid under no external forces is always spherical in shape.<br>(d) Flying aircraft experiences upward lift force.<br>(e) A spinning cricket ball in air does not follow a parabolic trajectory.',
  `<div class="step">
    • <b>(a) Angle of contact:</b><br>
      The shape of the meniscus and the angle of contact $\\theta$ are determined by the balance between <b>cohesive forces</b> (between liquid molecules) and <b>adhesive forces</b> (between liquid and solid surface):<br>
      - For water-glass: Adhesive force between water and glass molecules exceeds the cohesive force between water molecules. The liquid is drawn up against the glass, yielding an <b>acute angle of contact</b> ($\\theta < 90^\\circ$, $\\approx 8^\\circ$ for clean glass).<br>
      - For mercury-glass: Cohesive force between mercury atoms is extremely strong and far exceeds the weak adhesive attraction to glass. The liquid pulls away from the wall, forming an <b>obtuse angle of contact</b> ($\\theta > 90^\\circ$, $\\approx 135^\\circ$ to $140^\\circ$).<br><br>
    • <b>(b) Wetting behavior:</b><br>
      Liquid spreads out if the solid-liquid adhesive attraction is greater than the liquid-liquid cohesion (water on glass). Mercury has exceptionally large surface tension and cohesive bonding, causing it to minimize surface contact with glass and curl into spherical droplets rather than spreading.<br><br>
    • <b>(c) Spherical shape of free liquid drop:</b><br>
      Due to surface tension, every liquid tends to minimize its free surface area to achieve minimum potential energy. For a given volume, a <b>sphere possesses the least possible surface area</b>. In the absence of external forces like gravity, surface tension pulls the liquid into a perfect sphere.<br><br>
    • <b>(d) Dynamic lift on aircraft wing (aerofoil):</b><br>
      The upper surface of an aerofoil is curved while the lower surface is relatively flat. By the continuity equation, air travels faster over the curved top surface ($v_{top} > v_{bottom}$). By <b>Bernoulli's principle</b> ($P + \\frac{1}{2}\\rho v^2 = \\text{const}$), the pressure on the upper surface drops below that on the bottom ($P_{bottom} > P_{top}$). This pressure difference produces a net upward dynamic <b>lift force</b> $\\Delta P \\times A$.<br><br>
    • <b>(e) Non-parabolic path of a spinning cricket ball (Magnus Effect):</b><br>
      When a ball spins as it travels forward, the spinning surface drags air along with it due to air viscosity. On one side, the drag velocity opposes the oncoming air stream (lowering velocity, raising pressure). On the opposite side, the surface moves with the stream (increasing velocity, lowering pressure). The resulting transverse pressure difference creates a lateral dynamic force perpendicular to the trajectory (<b>Magnus force</b>), curving the ball away from a standard parabolic path.
  </div>`,
  '5 Marks',
  [
    ['(a) Cohesive vs adhesive force balance explaining acute and obtuse angles', '1 Mark'],
    ['(b) Explanation of wetting condition based on interfacial energies', '1 Mark'],
    ['(c) Surface energy minimization: sphere has minimal surface area for a given volume', '1 Mark'],
    ['(d) Bernoulli aerofoil dynamic lift derivation $\\Delta P = \\frac{1}{2}\\rho(v_t^2 - v_b^2)$', '1 Mark'],
    ['(e) Magnus effect: asymmetric airflow velocities creating lateral Bernoulli force', '1 Mark']
  ]
));

// Question 9.3
questions.push(createQCard(
  'c11p-ch9-q3', 'Question 9.3', 'NCERT Exercise',
  'Fill in the blanks using the word(s) from the list appended with each statement:<br>(a) Surface tension of liquids generally ______ with temperatures (increases / decreases)<br>(b) Viscosity of gases ______ with temperature, whereas viscosity of liquids ______ with temperature (increases / decreases)<br>(c) For solids with elastic modulus of rigidity, the shearing force is proportional to ______, while for fluids it is proportional to ______ (shear strain / rate of shear strain)<br>(d) For a fluid in steady flow, the increase in flow speed at a constriction follows (conservation of mass / Bernoulli’s principle)<br>(e) For the model of a spray gun, the piston is pushed forward so that air rushes out of a tube: the liquid rises in the tube following (Pascal’s law / Bernoulli’s principle).',
  `<div class="step">
    • <b>(a) decreases:</b> As temperature rises, thermal molecular kinetic energy increases, weakening intermolecular cohesive bonds. Thus, surface tension <b>decreases</b> with increasing temperature.<br><br>
    • <b>(b) increases; decreases:</b><br>
      - In gases, viscosity arises from molecular momentum transfer through thermal collisions; since thermal molecular speed increases as $\\sqrt{T}$, gas viscosity <b>increases</b> with temperature ($\\eta_{gas} \\propto \\sqrt{T}$).<br>
      - In liquids, viscosity arises from intermolecular cohesive attractive forces; thermal expansion and increased kinetic motion overcome these cohesive barriers, so liquid viscosity <b>decreases</b> rapidly with temperature.<br><br>
    • <b>(c) shear strain; rate of shear strain:</b> By Hooke's law, elastic solids resist deformation proportional to <b>shear strain</b> ($\\tau = G \\theta$). Fluids continuously flow under shear stress, and resist deformation proportional to the <b>rate of shear strain</b> (Newton's law of viscosity: $\\tau = \\eta \\frac{dv}{dy}$).<br><br>
    • <b>(d) conservation of mass:</b> The equation of continuity ($A_1 v_1 = A_2 v_2$) directly expresses <b>conservation of mass</b> for an incompressible fluid.<br><br>
    • <b>(e) Bernoulli’s principle:</b> Fast-moving air over the vertical tube produces a localized pressure drop according to <b>Bernoulli's principle</b> ($P_{top} < P_{atm}$), drawing liquid upward from the container.
  </div>`,
  '5 Marks',
  [
    ['(a) Surface tension decreases with temperature', '1 Mark'],
    ['(b) Gas viscosity increases; liquid viscosity decreases', '1 Mark'],
    ['(c) Solids proportional to shear strain; fluids proportional to rate of shear strain', '1 Mark'],
    ['(d) Continuity equation follows conservation of mass', '1 Mark'],
    ['(e) Spray gun atomizer operates on Bernoulli\'s principle', '1 Mark']
  ]
));

// Question 9.4
questions.push(createQCard(
  'c11p-ch9-q4', 'Question 9.4', 'NCERT Exercise',
  'Explain why<br>(a) A drop of oil spread on a water surface forms a thin film, while a drop of water on an oil surface forms a spherical drop.<br>(b) A curve in a stream of water emerging from a tap becomes thinner as it falls.<br>(c) A spinning ball curves away from its original path.',
  `<div class="step">
    • <b>(a) Oil on water vs water on oil:</b><br>
      The interfacial adhesive attraction between water and oil molecules is greater than the cohesive force between oil molecules, but less than the cohesive force between water molecules.<br>
      - When oil is placed on water, the water surface pulls the oil outward against its weak cohesion, spreading it into a monolayer thin film.<br>
      - When water is placed on oil, the powerful mutual cohesive attraction of water molecules (high surface tension $\\approx 0.073\\text{ N m}^{-1}$) overpowers the weak adhesion to oil, pulling the water into compact spherical droplets.<br><br>
    • <b>(b) Tap water stream thinning:</b><br>
      As water falls freely under gravity, its downward speed increases ($v = \\sqrt{u^2 + 2gh}$).<br>
      According to the <b>equation of continuity</b> for incompressible steady flow:<br>
      $$A \\times v = \\text{constant} \\implies A = \\frac{Q}{v}$$<br>
      As downward speed $v$ increases with distance fallen, the cross-sectional area $A$ must proportionally decrease. Hence, the water stream becomes thinner as it falls.<br><br>
    • <b>(c) Curved trajectory of a spinning ball:</b><br>
      Due to the <b>Magnus Effect</b>, air dragged by the spinning surface creates asymmetric air velocities on opposite sides of the ball. By Bernoulli's principle, the high-velocity side experiences lower pressure, and the low-velocity side experiences higher pressure. The resulting net transverse aerodynamic force deflects the ball from its parabolic path.
  </div>`,
  '3 Marks',
  [
    ['(a) Cohesive vs adhesive force comparison for oil-water interfaces', '1 Mark'],
    ['(b) Equation of continuity $A v = \\text{const}$ with acceleration under gravity', '1 Mark'],
    ['(c) Magnus effect via Bernoulli differential pressure', '1 Mark']
  ]
));

// Question 9.5
questions.push(createQCard(
  'c11p-ch9-q5', 'Question 9.5', 'NCERT Exercise',
  'A 50 kg girl wearing high heel shoes balances on a single heel. The heel is circular with a diameter 1.0 cm. What is the pressure exerted by the heel on the horizontal floor?',
  `<div class="step">
    Given:<br>
    • Mass of the girl $m = 50\\text{ kg}$<br>
    • Diameter of circular heel $d = 1.0\\text{ cm} = 1.0 \\times 10^{-2}\\text{ m}$<br>
    • Radius of circular heel $r = \\frac{d}{2} = 0.5 \\times 10^{-2}\\text{ m} = 5.0 \\times 10^{-3}\\text{ m}$<br>
    • Acceleration due to gravity $g = 9.8\\text{ m s}^{-2}$<br><br>
    <b>1. Force (Weight) exerted by the girl:</b><br>
    $$F = m g = 50\\text{ kg} \\times 9.8\\text{ m s}^{-2} = 490\\text{ N}$$<br><br>
    <b>2. Area of the circular heel ($A$):</b><br>
    $$A = \\pi r^2 = \\pi (5.0 \\times 10^{-3}\\text{ m})^2 = 3.1416 \\times 2.5 \\times 10^{-5} = 7.854 \\times 10^{-5}\\text{ m}^2$$<br><br>
    <b>3. Pressure exerted on the floor ($P$):</b><br>
    $$P = \\frac{F}{A} = \\frac{490\\text{ N}}{7.854 \\times 10^{-5}\\text{ m}^2} \\approx \\mathbf{6.24 \\times 10^6\\text{ N m}^{-2}} = \\mathbf{6.24 \\times 10^6\\text{ Pa}}$$<br><br>
    $$\\mathbf{\\text{The pressure exerted by the heel is approximately } 6.24 \\times 10^6\\text{ Pa} \\text{ (about 62 times atmospheric pressure).}}$$
  </div>`,
  '3 Marks',
  [
    ['Calculation of total weight $F = mg = 490\\text{ N}$', '1 Mark'],
    ['Area of circular heel $A = \\pi r^2 = 7.854 \\times 10^{-5}\\text{ m}^2$', '1 Mark'],
    ['Pressure formula $P = F/A = 6.24 \\times 10^6\\text{ Pa}$', '1 Mark']
  ]
));

// Question 9.6
questions.push(createQCard(
  'c11p-ch9-q6', 'Question 9.6', 'NCERT Exercise',
  'Torricelli’s barometer used mercury. Pascal duplicated it using French wine of density $984\\text{ kg m}^{-3}$. Determine the height of the wine column for normal atmospheric pressure.',
  `<div class="step">
    Given:<br>
    • Normal atmospheric pressure $P_0 = 1.013 \\times 10^5\\text{ Pa}$<br>
    • Density of French wine $\\rho = 984\\text{ kg m}^{-3}$<br>
    • Acceleration due to gravity $g = 9.8\\text{ m s}^{-2}$<br><br>
    <b>Hydrostatic Barometer Formula:</b><br>
    For a barometer with vacuum in the Torricellian chamber above the liquid ($P_{top} \\approx 0$):<br>
    $$P_0 = \\rho g h$$<br><br>
    <b>Solving for height of wine column ($h$):</b><br>
    $$h = \\frac{P_0}{\\rho g} = \\frac{1.013 \\times 10^5\\text{ N m}^{-2}}{984\\text{ kg m}^{-3} \\times 9.8\\text{ m s}^{-2}}$$<br>
    $$h = \\frac{101300}{9643.2} \\approx \\mathbf{10.505\\text{ m}} \\approx \\mathbf{10.5\\text{ m}}$$<br><br>
    $$\\mathbf{\\text{The height of the wine column is approximately } 10.5\\text{ metres.}}$$
  </div>`,
  '3 Marks',
  [
    ['Barometric balance equation $P_0 = \\rho g h$', '1 Mark'],
    ['Substitution of wine density and atmospheric pressure values', '1 Mark'],
    ['Final height evaluation $h = 10.5\\text{ m}$', '1 Mark']
  ]
));

// Question 9.7
questions.push(createQCard(
  'c11p-ch9-q7', 'Question 9.7', 'NCERT Exercise',
  'A vertical off-shore structure is built to withstand a maximum stress of $10^9\\text{ Pa}$. Is the structure suitable for putting up on top of an oil well in the ocean of depth of roughly $3\\text{ km}$? Take the density of sea water to be $10^3\\text{ kg m}^{-3}$ and ignore ocean currents.',
  `<div class="step">
    Given:<br>
    • Depth of ocean $h = 3\\text{ km} = 3000\\text{ m}$<br>
    • Density of sea water $\\rho = 10^3\\text{ kg m}^{-3} = 1000\\text{ kg m}^{-3}$<br>
    • Acceleration due to gravity $g = 9.8\\text{ m s}^{-2}$<br>
    • Atmospheric pressure at surface $P_0 = 1.01 \\times 10^5\\text{ Pa}$<br>
    • Maximum stress limit of structure $= 10^9\\text{ Pa}$<br><br>
    <b>1. Hydrostatic Pressure at depth $h$:</b><br>
    $$P = P_0 + \\rho g h$$<br>
    $$P = 1.01 \\times 10^5 + (1000 \\times 9.8 \\times 3000)$$<br>
    $$P = 1.01 \\times 10^5 + 2.94 \\times 10^7 = 0.0101 \\times 10^7 + 2.94 \\times 10^7 = 2.95 \\times 10^7\\text{ Pa}$$<br><br>
    <b>2. Comparison with Maximum Stress:</b><br>
    $$\\text{Pressure at ocean bottom} = 2.95 \\times 10^7\\text{ Pa} \\approx 0.03 \\times 10^9\\text{ Pa}$$<br>
    $$\\text{Maximum allowable stress} = 10^9\\text{ Pa}$$<br>
    Since $2.95 \\times 10^7\\text{ Pa} \\ll 10^9\\text{ Pa}$ (the ocean pressure is roughly only $3\\%$ of the structure's tolerance limit),<br>
    $$\\mathbf{\\text{Yes, the structure is completely suitable for being installed at the ocean depth of 3 km.}}$$
  </div>`,
  '3 Marks',
  [
    ['Hydrostatic formula $P = P_0 + \\rho g h$', '1 Mark'],
    ['Computation of pressure at 3 km depth: $2.95 \\times 10^7\\text{ Pa}$', '1 Mark'],
    ['Comparison showing pressure is well below $10^9\\text{ Pa}$ limit and concluding suitability', '1 Mark']
  ]
));

// Question 9.8
questions.push(createQCard(
  'c11p-ch9-q8', 'Question 9.8', 'NCERT Exercise',
  'A hydraulic automobile lift is designed to lift cars with a maximum mass of $3000\\text{ kg}$. The area of cross-section of the piston carrying the load is $425\\text{ cm}^2$. What maximum pressure does the smaller piston have to bear?',
  `<div class="step">
    Given:<br>
    • Maximum mass of car $M = 3000\\text{ kg}$<br>
    • Acceleration due to gravity $g = 9.8\\text{ m s}^{-2}$<br>
    • Maximum load force on large piston $F_2 = M g = 3000 \\times 9.8 = 29,400\\text{ N}$<br>
    • Area of cross-section of large piston $A_2 = 425\\text{ cm}^2 = 425 \\times 10^{-4}\\text{ m}^2 = 4.25 \\times 10^{-2}\\text{ m}^2$<br><br>
    <b>Pascal’s Principle for Hydraulic Systems:</b><br>
    Pressure applied to an enclosed incompressible fluid is transmitted undiminished to every portion of the fluid:<br>
    $$P_1 = P_2 = \\frac{F_2}{A_2}$$<br><br>
    <b>Calculating Maximum Pressure:</b><br>
    $$P = \\frac{29400\\text{ N}}{4.25 \\times 10^{-2}\\text{ m}^2} = \\frac{2940000}{4.25} \\approx \\mathbf{6.9176 \\times 10^5\\text{ Pa}} \\approx \\mathbf{6.92 \\times 10^5\\text{ N m}^{-2}}$$<br><br>
    $$\\mathbf{\\text{The smaller piston must bear a maximum pressure of } 6.92 \\times 10^5\\text{ Pa} \\text{ (approx. } 6.84\\text{ atm).}}$$
  </div>`,
  '3 Marks',
  [
    ['Load calculation $F_2 = Mg = 29,400\\text{ N}$ and area unit conversion', '1 Mark'],
    ['Pascal principle statement $P_1 = P_2 = F_2/A_2$', '1 Mark'],
    ['Evaluation of pressure $P = 6.92 \\times 10^5\\text{ Pa}$', '1 Mark']
  ]
));

// Question 9.9
questions.push(createQCard(
  'c11p-ch9-q9', 'Question 9.9', 'NCERT Exercise',
  'A U-tube contains water and methylated spirit separated by mercury. The mercury columns in the two arms are in level with $10.0\\text{ cm}$ of water in one arm and $12.5\\text{ cm}$ of spirit in the other. What is the specific gravity of spirit?',
  `<div class="step">
    Given:<br>
    • Height of water column $h_w = 10.0\\text{ cm}$<br>
    • Height of spirit column $h_s = 12.5\\text{ cm}$<br>
    • Density of water $\\rho_w = 1.0\\text{ g cm}^{-3} = 10^3\\text{ kg m}^{-3}$<br>
    • Mercury levels in both arms are at the same horizontal level at the lower interfaces.<br><br>
    <b>Pressure Balance at Mercury Interface Level:</b><br>
    Since the mercury surfaces in the two arms are at the exact same horizontal level, the pressures exerted by the liquid columns resting on the mercury must be equal:<br>
    $$P_{atm} + \\rho_w g h_w = P_{atm} + \\rho_s g h_s$$<br>
    $$\\rho_w h_w = \\rho_s h_s$$<br><br>
    <b>Specific Gravity of spirit (Relative Density):</b><br>
    $$\\text{Specific Gravity} = \\frac{\\rho_s}{\\rho_w} = \\frac{h_w}{h_s} = \\frac{10.0\\text{ cm}}{12.5\\text{ cm}} = \\mathbf{0.80}$$<br><br>
    $$\\mathbf{\\text{The specific gravity of methylated spirit is } 0.80 \\text{ (density } = 800\\text{ kg m}^{-3}\\text{).}}$$
  </div>`,
  '3 Marks',
  [
    ['Pressure balance equation $\\rho_w g h_w = \\rho_s g h_s$', '1 Mark'],
    ['Derivation of specific gravity ratio $\\rho_s/\\rho_w = h_w/h_s$', '1 Mark'],
    ['Final calculation: specific gravity $= 0.80$', '1 Mark']
  ]
));

// Question 9.10
questions.push(createQCard(
  'c11p-ch9-q10', 'Question 9.10', 'NCERT Exercise',
  'In the previous problem, if $15.0\\text{ cm}$ of water and spirit each are further poured into the respective arms of the tube, what is the difference in the levels of mercury in the two arms? (Specific gravity of mercury $= 13.6$).',
  `<div class="step">
    Given:<br>
    • Initial heights: $h_w = 10.0\\text{ cm}$, $h_s = 12.5\\text{ cm}$<br>
    • Additional liquid added: $15.0\\text{ cm}$ to both arms.<br>
    • Total height of water column $H_w = 10.0 + 15.0 = 25.0\\text{ cm}$<br>
    • Total height of spirit column $H_s = 12.5 + 15.0 = 27.5\\text{ cm}$<br>
    • Density of water $\\rho_w = 1.0\\text{ g cm}^{-3}$<br>
    • Density of spirit $\\rho_s = 0.8\\text{ g cm}^{-3}$<br>
    • Density of mercury $\\rho_m = 13.6\\text{ g cm}^{-3}$<br><br>
    <b>Pressure Calculation at the Two Mercury Surfaces:</b><br>
    Pressure of water column: $P_w = \\rho_w g H_w = (1.0) g (25.0) = 25.0 g$<br>
    Pressure of spirit column: $P_s = \\rho_s g H_s = (0.8) g (27.5) = 22.0 g$<br><br>
    Since $P_w > P_s$, the mercury in the water arm will be pushed down, and mercury in the spirit arm will rise by difference $h$.<br>
    <b>Equating Pressures at the Lowest Mercury Level:</b><br>
    $$P_w = P_s + \\rho_m g h$$<br>
    $$\\rho_w g H_w = \\rho_s g H_s + \\rho_m g h$$<br>
    $$\\rho_m h = \\rho_w H_w - \\rho_s H_s$$<br>
    $$13.6 \\times h = (1.0 \\times 25.0) - (0.8 \\times 27.5) = 25.0 - 22.0 = 3.0\\text{ cm}$$$$<br>
    $$h = \\frac{3.0}{13.6} \\approx \\mathbf{0.221\\text{ cm}} = \\mathbf{2.21\\text{ mm}}$$<br><br>
    $$\\mathbf{\\text{The difference in mercury levels between the two arms is } 0.22\\text{ cm (or } 2.2\\text{ mm}).}$$
  </div>`,
  '4 Marks',
  [
    ['Total column height determination: $H_w = 25\\text{ cm}, H_s = 27.5\\text{ cm}$', '1 Mark'],
    ['Hydrostatic balance formulation $\\rho_m g h = \\rho_w g H_w - \\rho_s g H_s$', '1.5 Marks'],
    ['Accurate calculation $h = 3.0 / 13.6 = 0.221\\text{ cm}$', '1.5 Marks']
  ]
));

// Question 9.11
questions.push(createQCard(
  'c11p-ch9-q11', 'Question 9.11', 'NCERT Exercise',
  'Can Bernoulli’s equation be used to describe the flow of water through a rapid in a river? Explain.',
  `<div class="step">
    <b>Answer: No.</b> Bernoulli’s equation cannot be applied to describe the flow of water through river rapids.<br><br>
    <b>Physical Justification:</b><br>
    Bernoulli’s theorem is derived under four fundamental ideal assumptions:<br>
    1. <b>Steady (streamline/laminar) flow:</b> Fluid velocity at any fixed point remains constant with time.<br>
    2. <b>Incompressible fluid:</b> Density remains constant.<br>
    3. <b>Non-viscous (frictionless) fluid:</b> No internal viscous dissipative drag forces.<br>
    4. <b>Irrotational flow:</b> No vortices, whirlpools, or eddies.<br><br>
    In river rapids:<br>
    • The flow is extremely <b>turbulent, chaotic, and unsteady</b> ($Re \\gg 4000$).<br>
    • Massive churning produces localized whirlpools, eddies, and aeration (air bubble mixing), making the flow rotational and varying in density.<br>
    • Significant mechanical kinetic energy is continuously dissipated as heat and sound through internal viscous friction.<br><br>
    Therefore, the conditions for Bernoulli's equation are completely violated in rapids.
  </div>`,
  '3 Marks',
  [
    ['Clear negative answer (No)', '0.5 Mark'],
    ['Listing Bernoulli assumptions (steady, non-viscous, irrotational, incompressible)', '1 Mark'],
    ['Explanation of turbulence, vortex eddy formation and viscous energy dissipation in river rapids', '1.5 Marks']
  ]
));

// Question 9.12
questions.push(createQCard(
  'c11p-ch9-q12', 'Question 9.12', 'NCERT Exercise',
  'Does it matter if one uses gauge pressure instead of absolute pressure in applying Bernoulli’s equation? Explain.',
  `<div class="step">
    <b>Answer: No, it does not matter, PROVIDED the atmospheric pressure is identical at both cross-sections being compared.</b><br><br>
    <b>Justification:</b><br>
    Bernoulli’s equation relates two points (1 and 2) along a streamline:<br>
    $$P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2$$<br>
    Here $P_1$ and $P_2$ are absolute pressures. By definition, absolute pressure is the sum of atmospheric pressure $P_{atm}$ and gauge pressure $P_g$:<br>
    $$P_1 = P_{atm} + P_{g1}, \\quad P_2 = P_{atm} + P_{g2}$$<br>
    Substituting into Bernoulli’s equation:<br>
    $$(P_{atm} + P_{g1}) + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = (P_{atm} + P_{g2}) + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2$$<br>
    Subtracting the constant atmospheric pressure $P_{atm}$ from both sides:<br>
    $$P_{g1} + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_{g2} + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2$$<br><br>
    Since $P_{atm}$ cancels out identically, using gauge pressure yields the exact same dynamic equations. (Note: If there is a significant atmospheric pressure difference between points, absolute pressures must be used).
  </div>`,
  '3 Marks',
  [
    ['Clear assertion: Does not matter provided atmospheric pressure is uniform', '1 Mark'],
    ['Mathematical relation between absolute and gauge pressure: $P = P_{atm} + P_g$', '1 Mark'],
    ['Demonstrating algebraic cancellation of $P_{atm}$ from both sides', '1 Mark']
  ]
));

// Question 9.13
questions.push(createQCard(
  'c11p-ch9-q13', 'Question 9.13', 'NCERT Exercise',
  'Glycerine flows steadily through a horizontal tube of length $1.5\\text{ m}$ and radius $1.0\\text{ cm}$. If the amount of glycerine collected per second at one end is $4.0 \\times 10^{-3}\\text{ kg s}^{-1}$, what is the pressure difference between the two ends of the tube? (Density of glycerine $= 1.3 \\times 10^3\\text{ kg m}^{-3}$ and viscosity of glycerine $= 0.83\\text{ Pa s}$). [You may also check if the assumption of laminar flow in the tube is correct].',
  `<div class="step">
    Given:<br>
    • Length of tube $L = 1.5\\text{ m}$<br>
    • Radius of tube $r = 1.0\\text{ cm} = 1.0 \\times 10^{-2}\\text{ m}$<br>
    • Mass rate of flow $M = 4.0 \\times 10^{-3}\\text{ kg s}^{-1}$<br>
    • Density of glycerine $\\rho = 1.3 \\times 10^3\\text{ kg m}^{-3}$<br>
    • Viscosity of glycerine $\\eta = 0.83\\text{ Pa s}$<br><br>
    <b>1. Volume Rate of Flow ($Q$):</b><br>
    $$Q = \\frac{M}{\\rho} = \\frac{4.0 \\times 10^{-3}}{1.3 \\times 10^3} = 3.077 \\times 10^{-6}\\text{ m}^3\\text{ s}^{-1}$$<br><br>
    <b>2. Poiseuille’s Formula for Laminar Viscous Flow:</b><br>
    $$Q = \\frac{\\pi \\Delta P r^4}{8 \\eta L} \\implies \\Delta P = \\frac{8 \\eta L Q}{\\pi r^4}$$<br><br>
    $$\\Delta P = \\frac{8 \\times 0.83 \\times 1.5 \\times (3.077 \\times 10^{-6})}{3.1416 \\times (10^{-2})^4} = \\frac{9.96 \\times 3.077 \\times 10^{-6}}{3.1416 \\times 10^{-8}} = \\frac{30.647 \\times 10^{-6}}{3.1416 \\times 10^{-8}}$$<br>
    $$\\Delta P \\approx 9.755 \\times 10^2\\text{ Pa} = \\mathbf{975.5\\text{ Pa}} \\approx \\mathbf{9.8 \\times 10^2\\text{ Pa}}$$<br><br>
    <b>3. Verification of Laminar Flow (Reynolds Number $Re$):</b><br>
    Average flow velocity $v = \\frac{Q}{\\pi r^2} = \\frac{3.077 \\times 10^{-6}}{3.1416 \\times 10^{-4}} = 9.79 \\times 10^{-3}\\text{ m s}^{-1}$<br>
    $$Re = \\frac{\\rho v d}{\\eta} = \\frac{2 \\rho v r}{\\eta} = \\frac{2 \\times 1300 \\times (9.79 \\times 10^{-3}) \\times 0.01}{0.83} \\approx \\mathbf{0.3}$$<br>
    Since $Re = 0.3 \\ll 2000$, the flow is strictly <b>laminar</b>, and Poiseuille's formula is fully valid.
  </div>`,
  '5 Marks',
  [
    ['Calculation of volume flow rate $Q = M/\\rho = 3.08 \\times 10^{-6}\\text{ m}^3/\\text{s}$', '1 Mark'],
    ['Poiseuille equation stated: $Q = \\pi \\Delta P r^4 / (8\\eta L)$', '1.5 Marks'],
    ['Evaluation of pressure difference $\\Delta P = 975.5\\text{ Pa}$', '1.5 Marks'],
    ['Reynolds number verification $Re \\approx 0.3 < 2000$ confirming laminar flow', '1 Mark']
  ]
));

// Question 9.14
questions.push(createQCard(
  'c11p-ch9-q14', 'Question 9.14', 'NCERT Exercise',
  'In a test experiment on a model aeroplane in a wind tunnel, the flow speeds on the upper and lower surfaces of the wing are $70\\text{ m s}^{-1}$ and $63\\text{ m s}^{-1}$ respectively. What is the lift on the wing if its area is $2.5\\text{ m}^2$? Take the density of air to be $1.3\\text{ kg m}^{-3}$.',
  `<div class="step">
    Given:<br>
    • Speed over upper surface $v_1 = 70\\text{ m s}^{-1}$<br>
    • Speed over lower surface $v_2 = 63\\text{ m s}^{-1}$<br>
    • Wing area $A = 2.5\\text{ m}^2$<br>
    • Density of air $\\rho = 1.3\\text{ kg m}^{-3}$<br><br>
    <b>1. Bernoulli’s Equation for Horizontal Aerofoil:</b><br>
    Neglecting the small thickness difference between the two surfaces ($h_1 \\approx h_2$):<br>
    $$P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$$<br>
    $$\\Delta P = P_2 - P_1 = \\frac{1}{2}\\rho (v_1^2 - v_2^2)$$<br><br>
    <b>2. Calculating Pressure Difference:</b><br>
    $$\\Delta P = \\frac{1}{2} \\times 1.3 \\times (70^2 - 63^2) = 0.65 \\times (4900 - 3969) = 0.65 \\times 931 = \\mathbf{605.15\\text{ Pa}}$$<br><br>
    <b>3. Dynamic Lift Force ($F$):</b><br>
    $$F = \\Delta P \\times A = 605.15\\text{ N m}^{-2} \\times 2.5\\text{ m}^2 = \\mathbf{1512.875\\text{ N}} \\approx \\mathbf{1.51 \\times 10^3\\text{ N}}$$<br><br>
    $$\\mathbf{\\text{The upward lift force on the wing is approximately } 1.51 \\times 10^3\\text{ N (or } 1.51\\text{ kN).}}$$
  </div>`,
  '4 Marks',
  [
    ['Application of Bernoulli\'s equation for aerofoil lift $\\Delta P = \\frac{1}{2}\\rho(v_1^2 - v_2^2)$', '1.5 Marks'],
    ['Computation of pressure difference $\\Delta P = 605.15\\text{ Pa}$', '1 Mark'],
    ['Evaluation of total lift force $F = \\Delta P \\times A = 1.51 \\times 10^3\\text{ N}$', '1.5 Marks']
  ]
));

// Question 9.15
questions.push(createQCard(
  'c11p-ch9-q15', 'Question 9.15', 'NCERT Exercise',
  'Figures 9.20(a) and (b) refer to the steady flow of a (non-viscous) liquid. Which of the two figures is incorrect? Why?',
  `<div class="step">
    <b>Answer: Figure (a) is incorrect; Figure (b) is correct.</b><br><br>
    <b>Physical Justification:</b><br>
    • By the <b>equation of continuity</b> ($A_1 v_1 = A_2 v_2$), where the horizontal pipe is constricted (narrower cross-section $A_2 < A_1$), the flow speed must increase ($v_2 > v_1$).<br><br>
    • By <b>Bernoulli’s theorem</b> for horizontal flow ($P + \\frac{1}{2}\\rho v^2 = \\text{constant}$):<br>
      $$P_2 = P_1 + \\frac{1}{2}\\rho(v_1^2 - v_2^2)$$<br>
      Since $v_2 > v_1$, the pressure at the constriction must be <b>lower</b> than at the wider section ($P_2 < P_1$).<br><br>
    • The height of liquid in a vertical manometer tube is directly proportional to hydrostatic pressure ($P = \\rho g h$). Therefore, the liquid height at the constriction must be <b>lower</b> than that at the wider section ($h_2 < h_1$).<br><br>
    • In Figure (a), the liquid level at the constriction is shown higher, which violates Bernoulli's principle. Figure (b) correctly depicts a lower level at the constriction (Venturi effect).
  </div>`,
  '3 Marks',
  [
    ['Identification of Figure (a) as incorrect and Figure (b) as correct', '1 Mark'],
    ['Equation of continuity: higher velocity at constriction ($v_2 > v_1$)', '1 Mark'],
    ['Bernoulli principle deduction: higher velocity requires lower pressure ($h_2 < h_1$)', '1 Mark']
  ]
));

// Question 9.16
questions.push(createQCard(
  'c11p-ch9-q16', 'Question 9.16', 'NCERT Exercise',
  'The cylindrical tube of a spray pump has a cross-section of $8.0\\text{ cm}^2$ one end of which has 40 fine holes each of diameter $1.0\\text{ mm}$. If the liquid flow inside the tube is $1.5\\text{ m min}^{-1}$, what is the speed of ejection of the liquid through the holes?',
  `<div class="step">
    Given:<br>
    • Cross-sectional area of the main tube $A_1 = 8.0\\text{ cm}^2 = 8.0 \\times 10^{-4}\\text{ m}^2$<br>
    • Speed of liquid in the main tube $v_1 = 1.5\\text{ m min}^{-1} = \\frac{1.5}{60}\\text{ m s}^{-1} = 0.025\\text{ m s}^{-1}$<br>
    • Number of holes $n = 40$<br>
    • Diameter of each hole $d = 1.0\\text{ mm} = 1.0 \\times 10^{-3}\\text{ m} \\implies r = 0.5 \\times 10^{-3}\\text{ m}$<br><br>
    <b>1. Total cross-sectional area of the 40 holes ($A_2$):</b><br>
    $$A_2 = n \\times (\\pi r^2) = 40 \\times \\pi \\times (0.5 \\times 10^{-3})^2 = 40 \\times 3.1416 \\times 0.25 \\times 10^{-6}$$<br>
    $$A_2 = 10 \\times 3.1416 \\times 10^{-6} = 3.1416 \\times 10^{-5}\\text{ m}^2$$<br><br>
    <b>2. Applying Equation of Continuity ($A_1 v_1 = A_2 v_2$):</b><br>
    $$v_2 = \\frac{A_1 v_1}{A_2} = \\frac{(8.0 \\times 10^{-4}\\text{ m}^2) \\times (0.025\\text{ m s}^{-1})}{3.1416 \\times 10^{-5}\\text{ m}^2}$$<br>
    $$v_2 = \\frac{2.0 \\times 10^{-5}}{3.1416 \\times 10^{-5}} = \\frac{2.0}{3.1416} \\approx \\mathbf{0.6366\\text{ m s}^{-1}} \\approx \\mathbf{0.64\\text{ m s}^{-1}}$$<br><br>
    $$\\mathbf{\\text{The speed of ejection through the holes is approximately } 0.64\\text{ m s}^{-1}.}$$
  </div>`,
  '4 Marks',
  [
    ['Speed unit conversion: $v_1 = 1.5 / 60 = 0.025\\text{ m/s}$', '1 Mark'],
    ['Area calculation for 40 holes: $A_2 = 40 \\times \\pi r^2 = 3.14 \\times 10^{-5}\\text{ m}^2$', '1 Mark'],
    ['Continuity equation formulation $A_1 v_1 = A_2 v_2$', '1 Mark'],
    ['Final ejection speed evaluation: $v_2 = 0.64\\text{ m/s}$', '1 Mark']
  ]
));

// Question 9.17
questions.push(createQCard(
  'c11p-ch9-q17', 'Question 9.17', 'NCERT Exercise',
  'A U-shaped wire is dipped in a soap solution, and removed. The thin soap film formed between the wire and the light slider supports a weight of $1.5 \\times 10^{-2}\\text{ N}$ (which includes the small weight of the slider). The length of the slider is $30\\text{ cm}$. What is the surface tension of the film?',
  `<div class="step">
    Given:<br>
    • Total downward weight supported $F = 1.5 \\times 10^{-2}\\text{ N}$<br>
    • Length of the slider $l = 30\\text{ cm} = 0.30\\text{ m}$<br><br>
    <b>Surface Tension Mechanics for a Thin Film:</b><br>
    A soap film in air possesses <b>two free surfaces</b> (an upper and a lower liquid-air boundary).<br>
    Therefore, the surface tension acts along both free surfaces, giving an effective boundary length of $2l$:<br>
    $$F = S \\times (2 l) = 2 S l$$<br><br>
    <b>Calculating Surface Tension ($S$):</b><br>
    $$S = \\frac{F}{2 l} = \\frac{1.5 \\times 10^{-2}\\text{ N}}{2 \\times 0.30\\text{ m}} = \\frac{1.5 \\times 10^{-2}}{0.60} = \\mathbf{2.5 \\times 10^{-2}\\text{ N m}^{-1}}$$<br><br>
    $$\\mathbf{\\text{The surface tension of the soap solution is } 2.5 \\times 10^{-2}\\text{ N m}^{-1}} \\text{ (or } 0.025\\text{ N m}^{-1}\\text{).}$$
  </div>`,
  '3 Marks',
  [
    ['Identification that a thin soap film has two free surfaces ($L_{eff} = 2l$)', '1 Mark'],
    ['Formulation $F = 2Sl \\implies S = F / 2l$', '1 Mark'],
    ['Final surface tension value $S = 2.5 \\times 10^{-2}\\text{ N m}^{-1}$', '1 Mark']
  ]
));

// Question 9.18
questions.push(createQCard(
  'c11p-ch9-q18', 'Question 9.18', 'NCERT Exercise',
  'Figure 9.21 (a) shows a thin liquid film supporting a small weight $= 4.5 \\times 10^{-2}\\text{ N}$. What is the weight supported by a film of the same liquid at the same temperature in Fig. (b) and (c)? Explain your answer physically.',
  `<div class="step">
    Given:<br>
    • In Fig. 9.21(a), length of slider $l = 40\\text{ cm} = 0.40\\text{ m}$, supporting weight $F_a = 4.5 \\times 10^{-2}\\text{ N}$.<br>
    • In Fig. (b) and (c), the sliders also have the identical length $l = 40\\text{ cm} = 0.40\\text{ m}$.<br><br>
    <b>Physical Rationale:</b><br>
    The upward force exerted by a liquid film on a movable boundary wire is given by:<br>
    $$F = 2 S l$$<br>
    where $S$ is the surface tension of the liquid and $l$ is the contact length of the slider wire.<br>
    Notice that the supporting force depends <b>only on the length of the slider $l$ and the surface tension $S$</b>. It is completely independent of the shape, area, or liquid volume contained within the supporting frame.<br><br>
    Since the liquid, temperature (hence $S$), and slider length ($l = 40\\text{ cm}$) are identical in all three figures:<br>
    $$\\mathbf{F_b = F_c = F_a = 4.5 \\times 10^{-2}\\text{ N}}$$<br>
    The weight supported in both Fig. (b) and Fig. (c) is identically $\\mathbf{4.5 \\times 10^{-2}\\text{ N}}$.
  </div>`,
  '3 Marks',
  [
    ['Formula $F = 2Sl$ stating dependence only on slider length $l$ and surface tension $S$', '1 Mark'],
    ['Explanation that film area and frame geometry do not affect boundary tension force', '1 Mark'],
    ['Conclusion that supported weight is $4.5 \\times 10^{-2}\\text{ N}$ in both (b) and (c)', '1 Mark']
  ]
));

// Question 9.19
questions.push(createQCard(
  'c11p-ch9-q19', 'Question 9.19', 'NCERT Exercise',
  'What is the pressure inside the drop of mercury of radius $3.00\\text{ mm}$ at room temperature? Surface tension of mercury at that temperature ($20^\\circ\\text{C}$) is $4.65 \\times 10^{-1}\\text{ N m}^{-1}$. The atmospheric pressure is $1.01 \\times 10^5\\text{ Pa}$. Also give the excess pressure inside the drop.',
  `<div class="step">
    Given:<br>
    • Radius of mercury drop $R = 3.00\\text{ mm} = 3.00 \\times 10^{-3}\\text{ m}$<br>
    • Surface tension of mercury $S = 4.65 \\times 10^{-1}\\text{ N m}^{-1} = 0.465\\text{ N m}^{-1}$<br>
    • Atmospheric pressure $P_0 = 1.01 \\times 10^5\\text{ Pa}$<br><br>
    <b>1. Excess Pressure inside a Liquid Drop (one liquid-air interface):</b><br>
    $$\\Delta P = \\frac{2 S}{R} = \\frac{2 \\times 0.465\\text{ N m}^{-1}}{3.00 \\times 10^{-3}\\text{ m}} = \\frac{0.93}{3.00 \\times 10^{-3}} = \\mathbf{310\\text{ Pa}}$$<br><br>
    <b>2. Total (Absolute) Pressure inside the drop:</b><br>
    $$P_{inside} = P_0 + \\Delta P = 1.01 \\times 10^5\\text{ Pa} + 310\\text{ Pa}$$<br>
    $$P_{inside} = 101000 + 310 = \\mathbf{101310\\text{ Pa}} = \\mathbf{1.0131 \\times 10^5\\text{ Pa}} \\approx \\mathbf{1.01 \\times 10^5\\text{ Pa}}$$<br><br>
    $$\\therefore \\text{Excess pressure } = \\mathbf{310\\text{ Pa}}, \\quad \\text{Total inside pressure } = \\mathbf{1.013 \\times 10^5\\text{ Pa}}.$$
  </div>`,
  '3 Marks',
  [
    ['Excess pressure formula for single-surface liquid drop $\\Delta P = 2S/R$', '1 Mark'],
    ['Computation of excess pressure: $\\Delta P = 310\\text{ Pa}$', '1 Mark'],
    ['Total absolute pressure: $P = P_0 + \\Delta P = 1.013 \\times 10^5\\text{ Pa}$', '1 Mark']
  ]
));

// Question 9.20
questions.push(createQCard(
  'c11p-ch9-q20', 'Question 9.20', 'NCERT Exercise',
  'What is the excess pressure inside a bubble of soap solution of radius $5.00\\text{ mm}$, given that the surface tension of soap solution at the temperature ($20^\\circ\\text{C}$) is $2.50 \\times 10^{-2}\\text{ N m}^{-1}$? If an air bubble of the same dimension were formed at depth of $40.0\\text{ cm}$ inside a container containing the soap solution (of relative density 1.20), what would be the pressure inside the bubble?',
  `<div class="step">
    Given:<br>
    • Radius of soap bubble / air bubble $R = 5.00\\text{ mm} = 5.00 \\times 10^{-3}\\text{ m}$<br>
    • Surface tension of soap solution $S = 2.50 \\times 10^{-2}\\text{ N m}^{-1}$<br>
    • Atmospheric pressure $P_0 = 1.01 \\times 10^5\\text{ Pa}$<br>
    • Depth $h = 40.0\\text{ cm} = 0.40\\text{ m}$<br>
    • Relative density of solution $= 1.20 \\implies \\rho = 1.20 \\times 10^3\\text{ kg m}^{-3} = 1200\\text{ kg m}^{-3}$<br><br>
    <b>1. Excess Pressure inside a Soap Bubble in Air:</b><br>
    A soap bubble in air has <b>two free surfaces</b> (inner and outer boundaries):<br>
    $$\\Delta P_{soap} = \\frac{4 S}{R} = \\frac{4 \\times (2.50 \\times 10^{-2}\\text{ N m}^{-1})}{5.00 \\times 10^{-3}\\text{ m}} = \\frac{1.00 \\times 10^{-1}}{5.00 \\times 10^{-3}} = \\mathbf{20.0\\text{ Pa}}$$<br><br>
    <b>2. Total Pressure inside an Air Bubble submerged in the liquid:</b><br>
    An air bubble inside a liquid has only <b>one liquid-gas interface</b>:<br>
    $$\\Delta P_{air} = \\frac{2 S}{R} = \\frac{2 \\times (2.50 \\times 10^{-2})}{5.00 \\times 10^{-3}} = \\mathbf{10.0\\text{ Pa}}$$<br>
    Hydrostatic pressure of surrounding liquid at depth $h$:<br>
    $$P_{liquid} = P_0 + \\rho g h = 1.01 \\times 10^5 + (1200 \\times 9.8 \\times 0.40) = 101000 + 4704 = 105,704\\text{ Pa}$$<br>
    Total pressure inside the submerged air bubble:<br>
    $$P_{inside} = P_{liquid} + \\Delta P_{air} = 105,704 + 10.0 = \\mathbf{105,714\\text{ Pa}} \\approx \\mathbf{1.06 \\times 10^5\\text{ Pa}}$$<br><br>
    $$\\therefore \\text{Soap bubble excess pressure } = \\mathbf{20\\text{ Pa}}, \\quad \\text{Submerged air bubble pressure } = \\mathbf{1.06 \\times 10^5\\text{ Pa}}.$$
  </div>`,
  '5 Marks',
  [
    ['Soap bubble formula (2 surfaces) $\\Delta P = 4S/R = 20\\text{ Pa}$', '1.5 Marks'],
    ['Submerged air bubble formula (1 surface) $\\Delta P = 2S/R = 10\\text{ Pa}$', '1 Mark'],
    ['Hydrostatic pressure calculation at 40 cm: $P_0 + \\rho gh = 105,704\\text{ Pa}$', '1.5 Marks'],
    ['Final absolute internal pressure: $1.06 \\times 10^5\\text{ Pa}$', '1 Mark']
  ]
));

// Question 9.21
questions.push(createQCard(
  'c11p-ch9-q21', 'Question 9.21', 'NCERT Exercise',
  'A tank with a square base of area $1.0\\text{ m}^2$ is divided by a vertical partition in the middle. The bottom of the partition has a small-hinged door of area $20\\text{ cm}^2$. The tank is filled with water in one compartment and an acid (of relative density $1.7$) in the other, both to a height of $4.0\\text{ m}$. compute the force necessary to keep the door closed.',
  `<div class="step">
    Given:<br>
    • Height of water and acid columns $h = 4.0\\text{ m}$<br>
    • Area of hinged door $A = 20\\text{ cm}^2 = 20 \\times 10^{-4}\\text{ m}^2 = 2.0 \\times 10^{-3}\\text{ m}^2$<br>
    • Density of water $\\rho_w = 1.0 \\times 10^3\\text{ kg m}^{-3}$<br>
    • Density of acid $\\rho_a = 1.7 \\times 10^3\\text{ kg m}^{-3}$<br>
    • Acceleration due to gravity $g = 9.8\\text{ m s}^{-2}$<br><br>
    <b>1. Hydrostatic Pressure at the bottom of each compartment:</b><br>
    • Pressure due to water column at bottom: $P_w = \\rho_w g h = 1000 \\times 9.8 \\times 4.0 = 39,200\\text{ Pa}$<br>
    • Pressure due to acid column at bottom: $P_a = \\rho_a g h = 1700 \\times 9.8 \\times 4.0 = 66,640\\text{ Pa}$<br><br>
    <b>2. Net Pressure Difference across the hinged door:</b><br>
    $$\\Delta P = P_a - P_w = (\\rho_a - \\rho_w) g h = (1700 - 1000) \\times 9.8 \\times 4.0 = 700 \\times 39.2 = \\mathbf{27,440\\text{ Pa}}$$<br><br>
    <b>3. Force required to keep the door closed ($F$):</b><br>
    $$F = \\Delta P \\times A = 27,440\\text{ N m}^{-2} \\times (2.0 \\times 10^{-3}\\text{ m}^2) = \\mathbf{54.88\\text{ N}} \\approx \\mathbf{55\\text{ N}}$$<br><br>
    $$\\mathbf{\\text{A force of } 54.9\\text{ N} \\text{ directed from the water side towards the acid side is necessary.}}$$
  </div>`,
  '4 Marks',
  [
    ['Hydrostatic pressures evaluated for water and acid at bottom', '1.5 Marks'],
    ['Differential pressure calculation: $\\Delta P = 27,440\\text{ Pa}$', '1 Mark'],
    ['Force calculation $F = \\Delta P \\times A = 54.9\\text{ N}$ with direction', '1.5 Marks']
  ]
));

// Question 9.22
questions.push(createQCard(
  'c11p-ch9-q22', 'Question 9.22', 'NCERT Exercise',
  'A manometer reads the pressure of a gas in an enclosure as shown in Fig. 9.22 (a) When a pump removes some of the gas, the manometer reads as in Fig. 9.22 (b) The liquid used in the manometers is mercury and the atmospheric pressure is $76\\text{ cm of mercury}$.<br>(a) Give the absolute and gauge pressure of the gas in the enclosure for cases (a) and (b), in units of cm of mercury.<br>(b) How would the levels change in case (b) if $13.6\\text{ cm}$ of water (immiscible with mercury) are poured into the right limb of the manometer?',
  `<div class="step">
    Given atmospheric pressure $P_{atm} = 76\\text{ cm of Hg}$.<br><br>
    • <b>(a) Pressure evaluations:</b><br>
      - <b>Case (a):</b> The mercury level in the open right limb is $20\\text{ cm}$ higher than in the left limb connected to the enclosure.<br>
        $$\\text{Gauge Pressure } = +20\\text{ cm of Hg}$$<br>
        $$\\text{Absolute Pressure } = P_{atm} + h = 76 + 20 = \\mathbf{96\\text{ cm of Hg}}$$<br><br>
      - <b>Case (b):</b> The mercury level in the right limb is $18\\text{ cm}$ lower than in the left limb connected to the enclosure.<br>
        $$\\text{Gauge Pressure } = -18\\text{ cm of Hg}$$<br>
        $$\\text{Absolute Pressure } = P_{atm} - h = 76 - 18 = \\mathbf{58\\text{ cm of Hg}}$$<br><br>
    • <b>(b) Adding $13.6\\text{ cm}$ of water into the right limb in Case (b):</b><br>
      $13.6\\text{ cm}$ of water exerts an additional hydrostatic pressure:<br>
      $$h_{Hg} = \\frac{\\rho_w h_w}{\\rho_m} = \\frac{1.0 \\times 13.6}{13.6} = 1.0\\text{ cm of Hg}$$<br>
      This water column adds $1.0\\text{ cm of Hg}$ downward on the right limb.<br>
      Let the mercury level in the right limb depress by $x$, causing the left limb mercury level to rise by $x$. The new mercury level difference is $(18 - 2x)$.<br>
      Equating pressures: $(18 - 2x) = 1.0 \\implies 2x = 17 \\implies x = 8.5\\text{ cm}$.<br>
      $$\\mathbf{\\text{The new difference in mercury levels becomes } 19\\text{ cm (or difference reduced by } 1\\text{ cm of Hg equivalent).}}$$
  </div>`,
  '4 Marks',
  [
    ['Case (a) gauge ($+20\\text{ cm}$) and absolute ($96\\text{ cm of Hg}$) pressures', '1.5 Marks'],
    ['Case (b) gauge ($-18\\text{ cm}$) and absolute ($58\\text{ cm of Hg}$) pressures', '1.5 Marks'],
    ['Water addition equivalent to $1\\text{ cm of Hg}$ altering level difference', '1 Mark']
  ]
));

// Question 9.23
questions.push(createQCard(
  'c11p-ch9-q23', 'Question 9.23', 'NCERT Exercise',
  'Two vessels have the same base area but different shapes. The first vessel takes twice the volume of water that the second vessel requires to fill up to a particular common height. Is the force exerted by the water on the base of the vessel the same in the two cases? If so, why do the vessels filled with water to that same height give different readings on a weighing scale?',
  `<div class="step">
    <b>1. Force on the Base of the Vessel:</b><br>
    <b>Yes, the force exerted by the water on the base is identical in both vessels.</b><br>
    Hydrostatic pressure at the flat horizontal bottom of a liquid column depends solely on depth $h$ and liquid density $\\rho$, independent of vessel shape or total liquid volume:<br>
    $$P = \\rho g h$$<br>
    Since both vessels have the same bottom area $A$ and are filled to the identical height $h$:<br>
    $$F_{base} = P \\times A = \\rho g h A$$<br>
    Hence, the downward thrust exerted on the base is identical in both vessels.<br><br>
    <b>2. Resolution of the Hydrostatic Paradox (Weighing Scale Difference):</b><br>
    A weighing scale measures the <b>total weight</b> of the vessel plus liquid ($W_{total} = M_{vessel} g + V_{liquid} \\rho g$).<br>
    Because vessel 1 contains twice the volume of water ($V_1 = 2 V_2$), its total mass is greater, so the scale reading for vessel 1 is larger.<br><br>
    <i>Why doesn't the base force equal the scale reading?</i><br>
    Because the sloping walls of the vessel also exert normal contact forces on the liquid:<br>
    • For a vessel with walls flaring outward (holding more volume), the walls exert an upward reactive force component on the liquid, supporting the excess weight.<br>
    • For a vessel with walls tapering inward, the walls exert a downward component on the liquid.<br>
    By Newton’s third law, the net vertical force transmitted to the scale equals the total gravitational weight, correctly resolving the paradox.
  </div>`,
  '4 Marks',
  [
    ['Proof that base force $F = \\rho g h A$ is identical for both vessels', '1.5 Marks'],
    ['Explanation of weighing scale measuring total volume weight', '1 Mark'],
    ['Hydrostatic paradox resolved via normal reaction components from sloping vessel walls', '1.5 Marks']
  ]
));

// Question 9.24
questions.push(createQCard(
  'c11p-ch9-q24', 'Question 9.24', 'NCERT Exercise',
  'During blood transfusion the needle is inserted in a vein where the gauge pressure is $2000\\text{ Pa}$. At what height must the blood container be placed so that blood may just enter the vein? [Density of whole blood $= 1.06 \\times 10^3\\text{ kg m}^{-3}$].',
  `<div class="step">
    Given:<br>
    • Venous gauge pressure $P = 2000\\text{ Pa} = 2.0 \\times 10^3\\text{ N m}^{-2}$<br>
    • Density of whole blood $\\rho = 1.06 \\times 10^3\\text{ kg m}^{-3}$<br>
    • Acceleration due to gravity $g = 9.8\\text{ m s}^{-2}$<br><br>
    <b>Hydrostatic Condition for Transfusion:</b><br>
    For blood to overcome the internal venous pressure and flow into the vein, the hydrostatic pressure head $\\rho g h$ of the elevated IV bag must at least balance the venous gauge pressure:<br>
    $$P = \\rho g h \\implies h = \\frac{P}{\\rho g}$$<br><br>
    <b>Calculating Height ($h$):</b><br>
    $$h = \\frac{2000\\text{ Pa}}{(1.06 \\times 10^3\\text{ kg m}^{-3}) \\times 9.8\\text{ m s}^{-2}} = \\frac{2000}{10388} \\approx \\mathbf{0.1925\\text{ m}} \\approx \\mathbf{0.193\\text{ m}} = \\mathbf{19.3\\text{ cm}}$$<br><br>
    $$\\mathbf{\\text{The blood container must be suspended at a minimum height of } 0.193\\text{ m (approx. } 19.3\\text{ cm) above the vein.}}$$
  </div>`,
  '3 Marks',
  [
    ['Hydrostatic head requirement $P = \\rho g h$', '1 Mark'],
    ['Substitution of venous pressure and blood density', '1 Mark'],
    ['Final height evaluation: $h = 0.193\\text{ m} = 19.3\\text{ cm}$', '1 Mark']
  ]
));

// Question 9.25
questions.push(createQCard(
  'c11p-ch9-q25', 'Question 9.25', 'NCERT Exercise',
  'In a test experiment on a model aeroplane in a wind tunnel, the flow speeds on the upper and lower surfaces of the wing are $85\\text{ m s}^{-1}$ and $75\\text{ m s}^{-1}$ respectively. If the wing area is $3.0\\text{ m}^2$, calculate the dynamic lift on the wing. Take density of air $= 1.25\\text{ kg m}^{-3}$.',
  `<div class="step">
    Given:<br>
    • Flow speed on upper wing surface $v_1 = 85\\text{ m s}^{-1}$<br>
    • Flow speed on lower wing surface $v_2 = 75\\text{ m s}^{-1}$<br>
    • Wing area $A = 3.0\\text{ m}^2$<br>
    • Density of air $\\rho = 1.25\\text{ kg m}^{-3}$<br><br>
    <b>1. Bernoulli Differential Pressure:</b><br>
    $$\\Delta P = \\frac{1}{2} \\rho (v_1^2 - v_2^2)$$<br>
    $$\\Delta P = \\frac{1}{2} \\times 1.25 \\times (85^2 - 75^2) = 0.625 \\times (7225 - 5625) = 0.625 \\times 1600 = \\mathbf{1000\\text{ Pa}}$$<br><br>
    <b>2. Total Dynamic Lift Force ($F$):</b><br>
    $$F = \\Delta P \\times A = 1000\\text{ N m}^{-2} \\times 3.0\\text{ m}^2 = \\mathbf{3000\\text{ N}} = \\mathbf{3.0 \\times 10^3\\text{ N}}$$<br><br>
    $$\\mathbf{\\text{The total dynamic lift force produced on the aeroplane wing is } 3000\\text{ N} \\text{ (or } 3.0\\text{ kN).}}$$
  </div>`,
  '3 Marks',
  [
    ['Bernoulli dynamic lift formula $\\Delta P = \\frac{1}{2}\\rho (v_1^2 - v_2^2)$', '1 Mark'],
    ['Pressure difference computation $\\Delta P = 1000\\text{ Pa}$', '1 Mark'],
    ['Evaluation of total lift force $F = \\Delta P \\times A = 3000\\text{ N}$', '1 Mark']
  ]
));

// Question 9.26
questions.push(createQCard(
  'c11p-ch9-q26', 'Question 9.26', 'NCERT Exercise',
  'A drop of water of volume $0.05\\text{ cm}^3$ is pressed between two glass plates so that it spreads into a thin area of $40\\text{ cm}^2$. If the surface tension of water is $70 \\times 10^{-3}\\text{ N m}^{-1}$, what is the normal force required to separate the plates?',
  `<div class="step">
    Given:<br>
    • Volume of water drop $V = 0.05\\text{ cm}^3 = 0.05 \\times 10^{-6}\\text{ m}^3 = 5.0 \\times 10^{-8}\\text{ m}^3$<br>
    • Film area between plates $A = 40\\text{ cm}^2 = 40 \\times 10^{-4}\\text{ m}^2 = 4.0 \\times 10^{-3}\\text{ m}^2$<br>
    • Surface tension of water $S = 70 \\times 10^{-3}\\text{ N m}^{-1} = 0.070\\text{ N m}^{-1}$<br><br>
    <b>1. Thickness of the water film ($d$):</b><br>
    $$V = A \\times d \\implies d = \\frac{V}{A} = \\frac{5.0 \\times 10^{-8}\\text{ m}^3}{4.0 \\times 10^{-3}\\text{ m}^2} = 1.25 \\times 10^{-5}\\text{ m}$$<br><br>
    <b>2. Meniscus Curvature and Pressure Deficit:</b><br>
    The water film forms a concave cylindrical meniscus at the boundary edges with radius of curvature $r = \\frac{d}{2}$ (assuming zero contact angle with clean glass).<br>
    The pressure inside the film is lower than atmospheric pressure by excess curvature pressure:<br>
    $$\\Delta P = \\frac{S}{r} = \\frac{2 S}{d}$$<br>
    $$\\Delta P = \\frac{2 \\times (70 \\times 10^{-3}\\text{ N m}^{-1})}{1.25 \\times 10^{-5}\\text{ m}} = \\frac{0.140}{1.25 \\times 10^{-5}} = 11,200\\text{ Pa}$$<br><br>
    <b>3. Normal Force required to separate the plates ($F$):</b><br>
    The surrounding atmospheric pressure pushes the plates together across area $A$:<br>
    $$F = \\Delta P \\times A = \\frac{2 S A}{d} = \\frac{2 S A^2}{V}$$<br>
    $$F = 11,200\\text{ N m}^{-2} \\times (4.0 \\times 10^{-3}\\text{ m}^2) = \\mathbf{44.8\\text{ N}}$$<br><br>
    $$\\mathbf{\\text{The normal force required to separate the plates is } 44.8\\text{ N} \\approx \\mathbf{45\\text{ N}}.}$$
  </div>`,
  '4 Marks',
  [
    ['Film thickness determination $d = V/A = 1.25 \\times 10^{-5}\\text{ m}$', '1 Mark'],
    ['Meniscus curvature pressure deficit relation $\\Delta P = 2S/d = 11,200\\text{ Pa}$', '1.5 Marks'],
    ['Normal separating force calculation $F = \\Delta P \\times A = 44.8\\text{ N}$', '1.5 Marks']
  ]
));

// ============================================================================
// VECTOR SVG DIAGRAM FOR CHAPTER 9 (Fluids: Bernoulli Venturi & Stokes Viscous Balance)
// ============================================================================
const fluidsSvg = `
  <div style="margin:24px 0; background:white; padding:20px; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <h3 style="font-size:1.05rem; font-weight:800; color:#1e293b; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2.2"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      Fluid Mechanics: Bernoulli Venturi Effect &amp; Stokes Viscous Terminal Velocity Balance
    </h3>
    <svg viewBox="0 0 780 230" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', system-ui, sans-serif;">
      <!-- Panel 1: Venturi Tube & Bernoulli Theorem -->
      <rect x="15" y="15" width="410" height="200" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="35" y="38" font-size="12" font-weight="bold" fill="#1e293b">1. Venturi Tube Continuity &amp; Bernoulli Theorem:</text>

      <!-- Pipe contour -->
      <path d="M 35 75 L 140 75 L 190 100 L 250 100 L 300 75 L 405 75" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
      <path d="M 35 155 L 140 155 L 190 130 L 250 130 L 300 155 L 405 155" fill="none" stroke="#7c3aed" stroke-width="2.5"/>

      <!-- Water flow fill -->
      <path d="M 35 75 L 140 75 L 190 100 L 250 100 L 300 75 L 405 75 L 405 155 L 300 155 L 250 130 L 190 130 L 140 155 L 35 155 Z" fill="#e0e7ff" opacity="0.4"/>

      <!-- Streamlines -->
      <line x1="35" y1="115" x2="140" y2="115" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,3"/>
      <line x1="140" y1="115" x2="190" y2="115" stroke="#3b82f6" stroke-width="1.5"/>
      <line x1="190" y1="115" x2="250" y2="115" stroke="#3b82f6" stroke-width="1.5"/>
      <line x1="250" y1="115" x2="300" y2="115" stroke="#3b82f6" stroke-width="1.5"/>
      <line x1="300" y1="115" x2="405" y2="115" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,3"/>

      <!-- Manometer tube 1 (Wide section) -->
      <rect x="90" y="45" width="16" height="30" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
      <line x1="90" y1="45" x2="90" y2="75" stroke="#0284c7" stroke-width="1.5"/>
      <line x1="106" y1="45" x2="106" y2="75" stroke="#0284c7" stroke-width="1.5"/>
      <text x="82" y="40" font-size="9" font-weight="bold" fill="#0369a1">High h_1</text>
      <text x="45" y="112" font-size="9" font-weight="bold" fill="#1e40af">v_1 (low)</text>
      <text x="45" y="128" font-size="8.5" fill="#475569">P_1 (high)</text>

      <!-- Manometer tube 2 (Constricted throat) -->
      <rect x="212" y="65" width="16" height="35" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
      <line x1="212" y1="65" x2="212" y2="100" stroke="#0284c7" stroke-width="1.5"/>
      <line x1="228" y1="65" x2="228" y2="100" stroke="#0284c7" stroke-width="1.5"/>
      <text x="204" y="60" font-size="9" font-weight="bold" fill="#dc2626">Low h_2</text>
      <text x="202" y="112" font-size="9" font-weight="bold" fill="#dc2626">v_2 (high)</text>
      <text x="202" y="125" font-size="8.5" fill="#475569">P_2 (low)</text>

      <rect x="270" y="165" width="145" height="42" rx="4" fill="#f5f3ff" stroke="#ddd6fe"/>
      <text x="278" y="180" font-size="8.5" font-weight="bold" fill="#5b21b6">A_1 v_1 = A_2 v_2</text>
      <text x="278" y="196" font-size="8.5" fill="#334155">P + &frac12;&rho;v&sup2; = const</text>

      <!-- Panel 2: Terminal Velocity & Stokes Viscous Drag -->
      <rect x="440" y="15" width="325" height="200" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="455" y="38" font-size="12" font-weight="bold" fill="#1e293b">2. Stokes Viscous Drag &amp; Terminal Speed:</text>

      <!-- Viscous cylinder fluid -->
      <rect x="470" y="55" width="85" height="145" rx="6" fill="#fef3c7" stroke="#d97706" opacity="0.6"/>
      <!-- Falling sphere -->
      <circle cx="512" cy="125" r="14" fill="#64748b" stroke="#334155" stroke-width="2"/>
      <text x="506" y="129" font-size="9" font-weight="bold" fill="white">m</text>

      <!-- Force vectors on sphere -->
      <!-- Gravity W down -->
      <line x1="512" y1="139" x2="512" y2="185" stroke="#dc2626" stroke-width="2.2"/>
      <polygon points="512,185 508,175 516,175" fill="#dc2626"/>
      <text x="518" y="175" font-size="9" font-weight="bold" fill="#dc2626">W = mg</text>

      <!-- Upthrust U up -->
      <line x1="504" y1="111" x2="504" y2="75" stroke="#2563eb" stroke-width="2"/>
      <polygon points="504,75 500,85 508,85" fill="#2563eb"/>
      <text x="475" y="82" font-size="8.5" font-weight="bold" fill="#2563eb">F_B</text>

      <!-- Stokes Viscous drag F_v up -->
      <line x1="520" y1="111" x2="520" y2="65" stroke="#059669" stroke-width="2"/>
      <polygon points="520,65 516,75 524,75" fill="#059669"/>
      <text x="525" y="75" font-size="8.5" font-weight="bold" fill="#059669">F_v = 6&pi;&eta;rv</text>

      <!-- Formulas box -->
      <rect x="565" y="55" width="190" height="145" rx="6" fill="#f5f3ff" stroke="#ddd6fe"/>
      <text x="575" y="75" font-size="9.5" font-weight="bold" fill="#5b21b6">Terminal Equilibrium:</text>
      <text x="575" y="95" font-size="8.5" fill="#334155">&bull; W = F_B + F_v</text>
      <text x="575" y="115" font-size="8.5" font-weight="bold" fill="#047857">&bull; v_t = 2r&sup2;(&rho; - &sigma;)g / 9&eta;</text>
      <text x="575" y="138" font-size="8.5" fill="#334155">&bull; Excess P (drop) = 2S/r</text>
      <text x="575" y="155" font-size="8.5" fill="#334155">&bull; Excess P (bubble) = 4S/r</text>
      <text x="575" y="175" font-size="8.5" font-weight="bold" fill="#b91c1c">&bull; Capillary h = 2S cos&theta; / &rho;gr</text>
    </svg>
  </div>
`;

// ============================================================================
// ASSEMBLY OF CH9.HTML
// ============================================================================
const chapterHtml = `
<section class="chapter-section" id="c11p-ch9">
  <div class="chapter-header">
    <div class="ch-badge">9</div>
    <div class="chapter-header-info">
      <div class="ch-category">CBSE Class 11 Physics &bull; Chapter 9</div>
      <h2>Mechanical Properties of Fluids</h2>
      <p>NCERT Rationalised 2026–27 Syllabus &bull; All 26 Verbatim Questions with Official Step-by-Step Marking Rubrics</p>
    </div>
  </div>

  ${fluidsSvg}

  <div class="ex-div">NCERT Textbook Exercise 9.1 to 9.26: Pascal's Law, Hydrostatics, Continuity Equation, Bernoulli's Principle, Torricelli's Law, Viscosity &amp; Surface Tension</div>
${questions.join('\n')}

  <div class="chapter-nav-btns" style="margin-top:40px; display:flex; justify-content:space-between; align-items:center;">
    <button class="ch-nav-btn prev" onclick="showChapter(8)" style="padding:10px 24px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer;">← Prev: Chapter 8 (Solids)</button>
    <button class="ch-nav-btn next" onclick="showChapter(10)" style="padding:10px 24px; border-radius:8px; border:none; background:#7c3aed; color:white; font-weight:700; cursor:pointer;">Next: Chapter 10 (Thermal Properties of Matter) →</button>
  </div>
</section>
`;

// Write ch9.html
const ch9Path = path.join(outDir, 'ch9.html');
fs.writeFileSync(ch9Path, chapterHtml.trim(), 'utf8');
console.log(`Successfully generated: ${ch9Path} (${chapterHtml.length} bytes)`);

// Update chapters-data.js
const dataJsPath = path.join(outDir, 'chapters-data.js');
let existingData = '';
if (fs.existsSync(dataJsPath)) {
  existingData = fs.readFileSync(dataJsPath, 'utf8');
}

// Append or update window.CHAPTER_DATA[9]
if (!existingData.includes('window.CHAPTER_DATA[9] =')) {
  fs.appendFileSync(dataJsPath, `\nwindow.CHAPTER_DATA[9] = ${JSON.stringify(chapterHtml.trim())};\n`, 'utf8');
  console.log(`Appended Chapter 9 to preloaded cache: ${dataJsPath}`);
} else {
  const regex = /window\.CHAPTER_DATA\[9\]\s*=\s*[\s\S]*?;\n/g;
  const updated = existingData.replace(regex, `window.CHAPTER_DATA[9] = ${JSON.stringify(chapterHtml.trim())};\n`);
  fs.writeFileSync(dataJsPath, updated, 'utf8');
  console.log(`Updated Chapter 9 in preloaded cache: ${dataJsPath}`);
}
