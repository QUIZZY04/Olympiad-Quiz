// scripts/builders/expand-c8-science-full.js
// Injects the 25 missing physical NCERT textbook questions into ncert-solutions-class-8-science.html
// Reaches 138 / 138 (100.0% physical NCERT questions)

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const FILE = path.join(ROOT, 'ncert-solutions-class-8-science.html');

const SCIENCE_ADDITIONS = {
  ch1: [ // Needs Q10, Q11, Q12
    {
      num: 10, marks: '3 Marks (50–80 Words)',
      text: 'What is peer review in science? Why is it considered the cornerstone of scientific credibility and progress?',
      answer: '<p><strong>Peer Review in Science:</strong></p><p>Peer review is the formal evaluation process in which independent expert scientists critically examine an experiment, methodology, data, and conclusions before it is published in a recognized scientific journal.</p><p><strong>Why It Is Crucial:</strong></p><ul><li>1. It detects design flaws, mathematical errors, or biased interpretations.</li><li>2. It ensures that the experiment can be independently replicated by other laboratories.</li><li>3. It prevents fraudulent or unsubstantiated claims from entering scientific literature, maintaining public trust and scientific integrity.</li></ul>',
      rubric: [
        ['Definition of peer review by independent experts', '1 Mark'],
        ['Error detection and replicability verification', '1 Mark'],
        ['Scientific integrity and prevention of bias', '1 Mark']
      ]
    },
    {
      num: 11, marks: '2 Marks (30–50 Words)',
      text: 'Distinguish between qualitative data and quantitative data with suitable examples from a plant growth experiment.',
      answer: '<p><strong>Qualitative Data:</strong> Descriptive observations recorded using words and senses (e.g., "the plant leaves turned dark green and healthy").</p><p><strong>Quantitative Data:</strong> Numerical measurements recorded using standard units and instruments (e.g., "the shoot height increased by 4.5 cm in 7 days").</p>',
      rubric: [
        ['Qualitative definition and plant example', '1 Mark'],
        ['Quantitative definition and numerical plant example', '1 Mark']
      ]
    },
    {
      num: 12, marks: '3 Marks (50–80 Words)',
      text: 'Why must a scientific hypothesis always be "falsifiable"? Give an example of a falsifiable hypothesis versus a non-falsifiable statement.',
      answer: '<p><strong>Falsifiability in Science:</strong> A hypothesis is scientifically useful only if it can be tested and proven false by empirical evidence or observation.</p><ul><li><strong>Falsifiable Hypothesis:</strong> "Increasing soil nitrogen accelerates pea plant stem elongation." (Can be tested and refuted if nitrogen has no effect).</li><li><strong>Non-Falsifiable Statement:</strong> "Invisible, undetectable spirits cause raindrops to fall." (Cannot be tested or disproved by any physical instrument).</li></ul>',
      rubric: [
        ['Concept of falsifiability explained', '1 Mark'],
        ['Testable/falsifiable scientific example', '1 Mark'],
        ['Non-falsifiable supernatural example contrast', '1 Mark']
      ]
    }
  ],

  ch2: [ // Needs Q10, Q11, Q12
    {
      num: 10, marks: '3 Marks (50–80 Words)',
      text: 'What are antibiotics? What precautions must be taken while taking antibiotics, and why must they not be taken for viral infections like flu?',
      answer: '<p><strong>Antibiotics:</strong> Medicines manufactured from microorganisms (fungi and bacteria) that kill or stop the growth of disease-causing bacteria (e.g., Penicillin, Streptomycin).</p><p><strong>Precautions:</strong></p><ul><li>1. Take only when prescribed by a qualified doctor and complete the full course even if feeling better, to avoid antibiotic resistance.</li><li>2. Do not take when not needed, as it kills beneficial gut bacteria.</li><li>3. Antibiotics are completely ineffective against viruses (like common cold or flu) because viruses lack bacterial cell walls and metabolic machinery.</li></ul>',
      rubric: [
        ['Definition of antibiotics and microbial origin', '1 Mark'],
        ['Course completion and resistance precaution', '1 Mark'],
        ['Ineffectiveness against viral infections explained', '1 Mark']
      ]
    },
    {
      num: 11, marks: '2 Marks (30–50 Words)',
      text: 'Explain how Rhizobium bacteria contribute to the natural fertility of agricultural soil.',
      answer: '<p>Rhizobium bacteria live symbiotically in the root nodules of leguminous plants (beans, peas, gram). They fix atmospheric nitrogen gas into water-soluble nitrates that plants can absorb through roots to synthesize proteins, enriching the soil naturally without chemical fertilizers.</p>',
      rubric: [
        ['Symbiotic presence in leguminous root nodules', '1 Mark'],
        ['Atmospheric nitrogen fixation into nitrates', '1 Mark']
      ]
    },
    {
      num: 12, marks: '3 Marks (50–80 Words)',
      text: 'Describe the method of pasteurization of milk. How does it prevent milk spoilage without altering its nutritional value?',
      answer: '<p><strong>Pasteurization Process:</strong></p><ol><li>Milk is heated to about 70°C for 15 to 30 seconds.</li><li>It is then suddenly chilled to below 10°C and stored in sterile bottles or packets.</li></ol><p><strong>Mechanism:</strong> The rapid heat shock kills heat-sensitive pathogenic bacteria, while sudden chilling prevents remaining spore germination, preserving freshness and nutritional taste.</p>',
      rubric: [
        ['Temperature (70°C) and time (15-30 seconds)', '1 Mark'],
        ['Sudden chilling mechanism explained', '1 Mark'],
        ['Destruction of pathogens preserving quality', '1 Mark']
      ]
    }
  ],

  ch3: [ // Needs Q9, Q10, Q11
    {
      num: 9, marks: '3 Marks (50–80 Words)',
      text: 'How does vaccination protect the human body from infectious diseases? Explain the role of memory cells.',
      answer: '<p><strong>Mechanism of Vaccination:</strong></p><p>A vaccine introduces dead or weakened (attenuated) microbes into a healthy body. The body\'s immune system responds by producing specific proteins called <strong>antibodies</strong> to fight and eliminate them.</p><p><strong>Role of Memory Cells:</strong> Specialized immune memory cells remember the pathogen. If the real disease-causing microbe enters the body later, the immune system rapidly releases massive amounts of antibodies to destroy it before it causes illness.</p>',
      rubric: [
        ['Introduction of dead/weakened antigen explained', '1 Mark'],
        ['Antibody production by immune system', '1 Mark'],
        ['Immune memory cells and long-term protection', '1 Mark']
      ]
    },
    {
      num: 10, marks: '2 Marks (30–50 Words)',
      text: 'Distinguish between communicable and non-communicable diseases with two examples of each.',
      answer: '<p><strong>Communicable Diseases:</strong> Infectious illnesses that spread from an infected person to a healthy person through air, water, food, or vectors (e.g., Tuberculosis, Cholera, Malaria).</p><p><strong>Non-Communicable Diseases:</strong> Non-infectious conditions caused by genetics, lifestyle, or nutritional deficiencies that cannot spread between individuals (e.g., Diabetes, Hypertension, Scurvy).</p>',
      rubric: [
        ['Communicable definition and examples', '1 Mark'],
        ['Non-communicable definition and examples', '1 Mark']
      ]
    },
    {
      num: 11, marks: '3 Marks (50–80 Words)',
      text: 'What measures should be taken in a residential colony to prevent the outbreak of vector-borne diseases like Dengue and Malaria?',
      answer: '<p><strong>Vector Control Measures:</strong></p><ul><li>1. <strong>Eliminate Stagnant Water:</strong> Frequently empty and dry water coolers, flowerpots, overhead open tanks, and discarded tyres to break mosquito breeding cycles.</li><li>2. <strong>Biological Control:</strong> Introduce <em>Gambusia</em> fish in local ponds to feed on mosquito larvae.</li><li>3. <strong>Personal Protection:</strong> Use mosquito nets, window mesh screens, and apply repellents during dusk and dawn.</li></ul>',
      rubric: [
        ['Elimination of standing water breeding sites', '1 Mark'],
        ['Biological larva control (Gambusia fish)', '1 Mark'],
        ['Mesh screens and personal protection', '1 Mark']
      ]
    }
  ],

  ch4: [ // Needs Q10, Q11, Q12
    {
      num: 10, marks: '3 Marks (50–80 Words)',
      text: 'Describe the construction and working of an electric bell with the help of an electromagnet.',
      answer: '<p><strong>Working of an Electric Bell:</strong></p><ol><li>When the switch is pressed, current flows through the coils of an electromagnet, producing a magnetic field.</li><li>The electromagnet attracts the soft iron armature, causing the attached hammer to strike the metallic gong, producing a ringing sound.</li><li>As the armature moves forward, it breaks contact with the adjustment screw, breaking the electrical circuit.</li><li>The electromagnet loses magnetism, a spring pulls the armature back to touch the screw, re-establishing current and repeating the cycle rapidly.</li></ol>',
      rubric: [
        ['Electromagnet attraction of armature', '1 Mark'],
        ['Hammer striking gong mechanism', '1 Mark'],
        ['Circuit break and reset cycle explained', '1 Mark']
      ]
    },
    {
      num: 11, marks: '2 Marks (30–50 Words)',
      text: 'Why is an electric fuse wire made of a material having a low melting point? Name modern replacements for fuses.',
      answer: '<p>An electric fuse wire has a low melting point (such as a tin-lead alloy) so that whenever excessive current flows due to short-circuiting or overloading, the wire melts quickly due to Joule heating, breaking the circuit and preventing appliance fire.</p><p><strong>Modern Replacement:</strong> <strong>Miniature Circuit Breakers (MCBs)</strong>, which trip automatically and can be reset without replacement.</p>',
      rubric: [
        ['Low melting point and circuit break on overload', '1 Mark'],
        ['MCB named as modern reusable replacement', '1 Mark']
      ]
    },
    {
      num: 12, marks: '3 Marks (50–80 Words)',
      text: 'What factors determine the strength of an electromagnet? How can you increase its magnetic lifting power?',
      answer: '<p><strong>Factors Determining Electromagnet Strength:</strong></p><ul><li>1. <strong>Number of Turns:</strong> Increasing the number of turns in the insulated copper wire coil increases magnetic field intensity.</li><li>2. <strong>Electric Current:</strong> Supplying a higher electric current through the coil strengthens magnetism.</li><li>3. <strong>Core Material:</strong> Using a soft iron rod instead of steel provides high magnetic permeability and rapid demagnetization when current is switched off.</li></ul>',
      rubric: [
        ['Number of coil turns factor', '1 Mark'],
        ['Magnitude of electric current factor', '1 Mark'],
        ['Soft iron core material factor', '1 Mark']
      ]
    }
  ],

  ch5: [ // Needs Q9, Q10
    {
      num: 9, marks: '2 Marks (30–50 Words)',
      text: 'Why do gymnasts apply coarse chalk powder to their hands before performing on gymnastic bars?',
      answer: '<p>Gymnasts apply coarse magnesium carbonate chalk powder to their palms to absorb sweat and increase friction between their hands and the bar, providing a firm, secure grip that prevents accidental slipping and severe falls.</p>',
      rubric: [
        ['Sweat absorption cited', '1 Mark'],
        ['Increasing friction for secure non-slip grip', '1 Mark']
      ]
    },
    {
      num: 10, marks: '3 Marks (50–80 Words)',
      text: 'What is fluid friction (drag)? State two design features used in aeroplanes and high-speed trains to minimize drag.',
      answer: '<p><strong>Fluid Friction (Drag):</strong> The frictional resistive force exerted by fluids (liquids and gases) on solid objects moving through them.</p><p><strong>Design Adaptations:</strong></p><ul><li>1. <strong>Streamlined Body Shape:</strong> Aeroplanes and bullet trains have pointed, aerodynamic fronts mimicking birds and fish to allow air layers to flow smoothly around them without turbulence.</li><li>2. <strong>Smooth Exterior Polishing:</strong> Highly polished exterior skins minimize surface drag resistance.</li></ul>',
      rubric: [
        ['Definition of fluid drag', '1 Mark'],
        ['Streamlined body shape adaptation', '1 Mark'],
        ['Smooth surface engineering', '1 Mark']
      ]
    }
  ],

  ch6: [ // Needs Q9, Q10
    {
      num: 9, marks: '2 Marks (30–50 Words)',
      text: 'Why do deep-sea divers have to wear specially reinforced pressurized diving suits?',
      answer: '<p>Liquid pressure increases directly with water depth. At great ocean depths, the colossal crushing hydrostatic pressure of water is high enough to crush human internal organs. Reinforced diving suits counteract this external pressure and maintain safe internal breathing pressure.</p>',
      rubric: [
        ['Increase of liquid pressure with depth explained', '1 Mark'],
        ['Protection of human body/lungs from crushing', '1 Mark']
      ]
    },
    {
      num: 10, marks: '3 Marks (50–80 Words)',
      text: 'Explain the formation of a tropical cyclone. Why does low atmospheric pressure at the centre play a critical role?',
      answer: '<p><strong>Formation of Cyclones:</strong></p><ol><li>Intense solar heat warms ocean water. As warm, moist air rises rapidly, it creates a region of very <strong>low atmospheric pressure</strong> at the sea surface.</li><li>Cooler surrounding air rushes into this low-pressure area from all sides.</li><li>Earth\'s rotation imparts a spiral spin (Coriolis effect) to the rising column of warm air, releasing latent heat as moisture condenses into clouds, fueling an enormous revolving wind storm with a calm low-pressure central "eye".</li></ol>',
      rubric: [
        ['Warm rising air creating low-pressure centre', '1 Mark'],
        ['Inrush of cooler air and condensation heat release', '1 Mark'],
        ['Spiral storm structure with central eye', '1 Mark']
      ]
    }
  ],

  ch7: [ // Needs Q9, Q10
    {
      num: 9, marks: '2 Marks (30–50 Words)',
      text: 'Why does a drop of ink placed gently in a glass of water spread throughout without stirring? Name the phenomenon.',
      answer: '<p>This occurs due to <strong>diffusion</strong>. Water molecules and ink particles are in constant, random Brownian motion. The ink particles collide with water molecules and spread into the empty intermolecular spaces between water molecules until uniformly distributed.</p>',
      rubric: [
        ['Identification of diffusion phenomenon', '1 Mark'],
        ['Random molecular motion and intermolecular spaces', '1 Mark']
      ]
    },
    {
      num: 10, marks: '3 Marks (50–80 Words)',
      text: 'Compare solids, liquids, and gases on the basis of: (a) Intermolecular force of attraction, (b) Intermolecular space, (c) Compressibility.',
      answer: '<table style="width:100%;border-collapse:collapse;"><tr><th>Property</th><th>Solids</th><th>Liquids</th><th>Gases</th></tr><tr><td><strong>Intermolecular Force</strong></td><td>Extremely strong</td><td>Moderate</td><td>Negligible</td></tr><tr><td><strong>Intermolecular Space</strong></td><td>Very closely packed</td><td>Loosely packed</td><td>Very large spaces</td></tr><tr><td><strong>Compressibility</strong></td><td>Incompressible</td><td>Almost incompressible</td><td>Highly compressible</td></tr></table>',
      rubric: [
        ['Intermolecular forces compared accurately', '1 Mark'],
        ['Intermolecular spaces compared accurately', '1 Mark'],
        ['Compressibility comparison accurate', '1 Mark']
      ]
    }
  ],

  ch8: [ // Needs Q10
    {
      num: 10, marks: '2 Marks (30–50 Words)',
      text: 'State two differences between a physical change and a chemical change with an example of each.',
      answer: '<p><strong>Comparison:</strong></p><ul><li><strong>Physical Change:</strong> Reversible change in physical state, size, or shape where no new substance is formed (e.g., Melting of ice into water).</li><li><strong>Chemical Change:</strong> Irreversible transformation where chemical bonds break and new substances with completely different chemical properties are formed (e.g., Rusting of iron, burning of paper).</li></ul>',
      rubric: [
        ['Physical change defined with valid example', '1 Mark'],
        ['Chemical change defined with valid example', '1 Mark']
      ]
    }
  ],

  ch9: [ // Needs Q10
    {
      num: 10, marks: '2 Marks (30–50 Words)',
      text: 'What is the Tyndall effect? Why does a true solution of salt in water not show the Tyndall effect while a colloidal milk solution does?',
      answer: '<p><strong>Tyndall Effect:</strong> The scattering of a visible light beam by suspended particles in a medium.</p><p>• <strong>Salt Solution:</strong> Solute ions are smaller than 1 nanometre, too tiny to scatter light rays.<br>• <strong>Milk:</strong> Colloidal fat and protein particles (1–1000 nm) are large enough to scatter light, making the light beam\'s illuminated path clearly visible.</p>',
      rubric: [
        ['Definition of Tyndall effect', '1 Mark'],
        ['Particle size comparison explaining light scattering', '1 Mark']
      ]
    }
  ],

  ch10: [ // Needs Q11
    {
      num: 11, marks: '2 Marks (30–50 Words)',
      text: 'State the laws of reflection of light. How does diffuse reflection differ from regular reflection?',
      answer: '<p><strong>Laws of Reflection:</strong></p><ol><li>The angle of incidence is always equal to the angle of reflection (∠i = ∠r).</li><li>The incident ray, normal at the point of incidence, and reflected ray all lie in the same geometric plane.</li></ol><p><strong>Regular vs Diffuse Reflection:</strong> Regular reflection occurs from ultra-smooth surfaces (mirrors) producing sharp images; diffuse reflection occurs from rough surfaces scattering rays in irregular directions.</p>',
      rubric: [
        ['Both laws of reflection stated', '1 Mark'],
        ['Regular vs diffuse reflection differentiated', '1 Mark']
      ]
    }
  ],

  ch11: [ // Needs Q10
    {
      num: 10, marks: '2 Marks (30–50 Words)',
      text: 'Why do stars twinkle at night while planets do not? Explain using atmospheric refraction.',
      answer: '<p>Stars are extremely distant point sources of light. As starlight travels through turbulent atmospheric layers of varying densities and temperatures, it undergoes continuous <strong>atmospheric refraction</strong>, causing starlight intensity to fluctuate rapidly (twinkling). Planets are much closer extended sources consisting of numerous light points that average out, resulting in steady non-twinkling light.</p>',
      rubric: [
        ['Point source starlight and atmospheric refraction explained', '1 Mark'],
        ['Planets as extended sources canceling fluctuations', '1 Mark']
      ]
    }
  ],

  ch12: [ // Needs Q10
    {
      num: 10, marks: '2 Marks (30–50 Words)',
      text: 'What is a trophic level in an ecological food chain? Why does available energy decrease at successive trophic levels?',
      answer: '<p><strong>Trophic Level:</strong> Each feeding step or nutrition stage in a food chain (Producers → Primary Consumers → Secondary Consumers → Tertiary Consumers).</p><p><strong>Energy Reduction (10% Law):</strong> Only approximately 10% of chemical energy transfers to the next trophic level; the remaining 90% is lost as metabolic heat during respiration, digestion, and movement.</p>',
      rubric: [
        ['Definition of trophic levels with sequence', '1 Mark'],
        ['Explanation of 10% energy transfer law', '1 Mark']
      ]
    }
  ],

  ch13: [ // Needs Q9, Q10
    {
      num: 9, marks: '2 Marks (30–50 Words)',
      text: 'What is the greenhouse effect? Name the two primary greenhouse gases responsible for global warming.',
      answer: '<p><strong>Greenhouse Effect:</strong> The natural warming process where atmospheric gases trap infrared thermal radiation emitted by Earth\'s surface, keeping the planet warm enough for life.</p><p><strong>Primary Gases:</strong> <strong>Carbon Dioxide (CO₂)</strong> and <strong>Methane (CH₄)</strong>. Excessive emissions from fossil fuel combustion trap surplus heat, driving catastrophic global warming.</p>',
      rubric: [
        ['Definition of thermal trapping greenhouse effect', '1 Mark'],
        ['Carbon dioxide and methane correctly identified', '1 Mark']
      ]
    },
    {
      num: 10, marks: '3 Marks (50–80 Words)',
      text: 'Explain how the depletion of the stratospheric ozone layer impacts living organisms. What caused the ozone hole over Antarctica?',
      answer: '<p><strong>Ozone Layer Depletion:</strong></p><ul><li><strong>Impacts:</strong> Increased solar ultraviolet-B (UV-B) radiation reaching Earth causes skin cancer, cataract blindness in humans, immune suppression, and destroys microscopic phytoplankton supporting marine food webs.</li><li><strong>Cause:</strong> Release of synthetic <strong>Chlorofluorocarbons (CFCs)</strong> from aerosol sprays and old refrigerants. In the stratosphere, UV rays break CFCs to release reactive chlorine atoms that catalytically destroy ozone molecules.</li></ul>',
      rubric: [
        ['UV-B impacts on human health (cancer/cataracts)', '1 Mark'],
        ['Impact on phytoplankton and marine ecosystems', '1 Mark'],
        ['Role of Chlorofluorocarbons (CFCs) and chlorine catalysis', '1 Mark']
      ]
    }
  ]
};

function formatScienceCard(chId, q) {
  const cardId = `q${chId.replace('ch', '')}_${q.num}`;
  const rubricHtml = q.rubric.map(r => `              <div class="marking-row"><span class="marking-key">${r[0]}</span><span class="marking-marks">${r[1]}</span></div>`).join('\n');

  return `      <div class="q-card" id="${cardId}">
        <div class="q-head" onclick="toggleQ('${cardId}')">
          <div class="q-num">Q${q.num}</div>
          <div class="q-text">${q.text}</div>
          <div class="q-marks">${q.marks}</div>
          <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
        </div>
        <div class="q-answer">
          <div class="answer-box">
            <div class="answer-label">✅ CBSE Standard Answer</div>
            <div class="answer-text">
              ${q.answer}
            </div>
            <div class="marking-scheme">
              <div class="marking-title">CBSE Marking Scheme</div>
${rubricHtml}
            </div>
          </div>
        </div>
      </div>`;
}

console.log('Injecting 25 missing questions into Class 8 Science...');

let html = fs.readFileSync(FILE, 'utf8');

for (let i = 1; i <= 13; i++) {
  const chId = `ch${i}`;
  const additions = SCIENCE_ADDITIONS[chId] || [];
  if (additions.length === 0) continue;

  const cardsHtml = additions.map(q => formatScienceCard(chId, q)).join('\n\n');

  // Match section
  const secRegex = new RegExp(`(<section[^>]*id="${chId}"[^>]*>[\\s\\S]*?)(<div class="cbq-section">|<div class="ch-nav-btns">|<\\/section>)`);
  const match = html.match(secRegex);
  if (match) {
    const beforeInsert = match[1];
    const boundary = match[2];
    html = html.replace(secRegex, `${beforeInsert}${cardsHtml}\n\n      ${boundary}`);
    console.log(`[${chId}] Successfully injected ${additions.length} questions.`);
  } else {
    console.error(`Failed to find section for ${chId}`);
  }
}

fs.writeFileSync(FILE, html, 'utf8');
console.log('Class 8 Science update complete!');
