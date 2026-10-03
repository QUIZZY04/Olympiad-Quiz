const fs = require('fs');
const path = require('path');

// Intext data for each chapter
const intextData = {
  1: [
    {
      id: "q1_in_1",
      num: "Page 1 — Intext Q1",
      text: "Why do all living organisms require food?",
      marks: "2 Marks",
      ans: `<p>All living organisms require food for the following fundamental life processes:</p>
<div class="step">
  1. <strong>Energy Source:</strong> Food serves as fuel; through cellular respiration, nutrients are broken down to release ATP energy needed for locomotion, digestion, circulation, and maintenance.<br>
  2. <strong>Body Building & Growth:</strong> Proteins and minerals in food furnish structural raw materials for cell division, tissue differentiation, and overall physical growth.<br>
  3. <strong>Repair of Tissues:</strong> Worn-out, injured, or damaged cells are repaired and replaced using nutrients absorbed from food.<br>
  4. <strong>Immune Resistance:</strong> Vitamins and essential minerals protect the body against pathogens and infectious diseases.
</div>`,
      scheme: [
        { key: "Energy for biological metabolic activities", marks: "½ Mark" },
        { key: "Growth, cell division and development", marks: "½ Mark" },
        { key: "Repair of damaged and worn-out cells", marks: "½ Mark" },
        { key: "Disease resistance and immune protection", marks: "½ Mark" }
      ]
    },
    {
      id: "q1_in_2",
      num: "Page 2 — Intext Q2 (Paheli's Query)",
      text: "Paheli wants to know why our body cannot make food from carbon dioxide, water and minerals like plants do.",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Scientific Explanation:</strong><br>
  1. Green plants possess a unique green pigment called <strong>chlorophyll</strong> enclosed inside specialized cellular organelles called <strong>chloroplasts</strong>.<br>
  2. Chlorophyll has the unique biochemical capability of trapping and absorbing solar radiation (photons) from sunlight to drive the endothermic synthesis of glucose from CO₂ and H₂O.<br>
  3. Human and animal cells completely lack chlorophyll and chloroplasts. Therefore, even though carbon dioxide, water, and sunlight are abundantly available in our environment, our cells cannot trap solar energy to synthesize organic food molecules. Consequently, humans must rely on heterotrophic nutrition.
</div>`,
      scheme: [
        { key: "Presence of chlorophyll/chloroplasts in plants to trap solar energy", marks: "1 Mark" },
        { key: "Absence of chlorophyll in human/animal cells making photosynthesis impossible", marks: "1 Mark" }
      ]
    },
    {
      id: "q1_in_3",
      num: "Page 2 — Intext Q3 (Boojho's Query)",
      text: "Boojho wants to know how water and minerals absorbed by roots reach the leaves of a plant.",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Mechanism of Water & Mineral Transport:</strong><br>
  1. Water and dissolved soil minerals are absorbed by microscopic <strong>root hairs</strong> through osmosis and active transport.<br>
  2. Plants possess specialized vascular plumbing tissues called <strong>xylem</strong>.<br>
  3. Xylem vessels form a continuous, unbroken pipeline of microscopic hollow tubes running from the root tips, up through the stem, into the branches, and throughout the petiole and veins of every leaf.<br>
  4. Evaporation of water from leaf stomata creates a powerful upward physical pull called <strong>transpirational pull</strong> (suction pull), drawing water and dissolved minerals upwards against gravity right into the food-making cells (mesophyll) of the leaves.
</div>`,
      scheme: [
        { key: "Role of continuous xylem vessels running from roots to leaves", marks: "1 Mark" },
        { key: "Role of transpirational pull/suction pressure lifting water column", marks: "1 Mark" }
      ]
    },
    {
      id: "q1_in_4",
      num: "Page 3 — Intext Q4 (Paheli's Query)",
      text: "Paheli wants to know what is so special about the leaves that they can synthesise food but other parts of the plant cannot.",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Structural Adaptations of Leaves:</strong><br>
  1. <strong>Concentration of Chlorophyll:</strong> Leaves possess millions of specialized photosynthetic mesophyll cells containing abundant green pigment <strong>chlorophyll</strong>, which captures solar radiation.<br>
  2. <strong>Presence of Stomata:</strong> The leaf epidermis features thousands of microscopic pores called <strong>stomata</strong> flanked by guard cells, allowing atmospheric carbon dioxide (CO₂) to enter the interior leaf tissues efficiently.<br>
  3. <strong>Broad Flat Surface Area:</strong> Leaves are thin, broad, and laminar, maximizing light interception and minimizing internal diffusion distance.<br>
  <em>Note:</em> Non-green parts like roots or thick woody stems lack chlorophyll and cannot capture solar energy. (However, in desert plants like cactus, modified green fleshy stems take over photosynthesis).
</div>`,
      scheme: [
        { key: "Abundance of chlorophyll-rich chloroplasts in leaf mesophyll", marks: "1 Mark" },
        { key: "Stomata for CO₂ intake and broad laminar surface area", marks: "1 Mark" }
      ]
    },
    {
      id: "q1_in_5",
      num: "Page 3 — Intext Q5 (Boojho's Query)",
      text: "Boojho has seen some plants with deep red, violet or brown leaves. He wants to know whether these leaves also carry out photosynthesis.",
      marks: "2 Marks",
      ans: `<p><strong>Answer: Yes, leaves with deep red, violet, or brown colors DO carry out photosynthesis.</strong></p>
<div class="step">
  <strong>Scientific Justification:</strong><br>
  1. Chlorophyll is present in these colorful leaves in normal quantities.<br>
  2. However, these leaves also produce large quantities of other non-green pigments (such as anthocyanins, carotenoids, and xanthophylls) which impart deep red, purple, or dark brown hues.<br>
  3. These intense dark pigments physically <strong>mask (hide)</strong> the green color of chlorophyll from human eyes.<br>
  4. The underlying chlorophyll continues to trap solar energy, and photosynthesis proceeds normally. This can be verified experimentally by boiling the leaf in alcohol to extract the masking pigments and performing the iodine starch test, which turns blue-black.
</div>`,
      scheme: [
        { key: "Affirmative confirmation (Yes, photosynthesis occurs)", marks: "½ Mark" },
        { key: "Explanation that other pigments (anthocyanins/carotenoids) mask green chlorophyll", marks: "1 Mark" },
        { key: "Verification via iodine test producing blue-black starch reaction", marks: "½ Mark" }
      ]
    },
    {
      id: "q1_in_6",
      num: "Page 5 — Intext Q6 (Paheli's Query)",
      text: "Paheli wants to know whether mosquitoes, bed bugs, lice and leeches that suck our blood are also parasites.",
      marks: "2 Marks",
      ans: `<p><strong>Answer: Yes, bed bugs, lice, and leeches are ectoparasites, and female mosquitoes behave as temporary parasites.</strong></p>
<div class="step">
  <strong>Biological Classification:</strong><br>
  1. <strong>Parasite Definition:</strong> An organism that lives on or inside another living organism (the host) and derives nutrition directly from the host, usually causing harm or discomfort.<br>
  2. <strong>Head Lice & Bed Bugs:</strong> Live directly on the host's body/habitat, feeding on blood meals for survival and reproduction (obligate ectoparasites).<br>
  3. <strong>Leeches:</strong> Attach to the host's skin using suckers, secrete hirudin (anticoagulant), and feed on blood.<br>
  4. <strong>Female Mosquitoes:</strong> Siphon blood protein from warm-blooded hosts to nourish developing eggs (often classified as temporary micropredators or hematophagous parasites).
</div>`,
      scheme: [
        { key: "Definition of parasites deriving nutrition from a living host", marks: "1 Mark" },
        { key: "Classification of lice/bedbugs/leeches as blood-sucking ectoparasites", marks: "1 Mark" }
      ]
    },
    {
      id: "q1_in_7",
      num: "Page 6 — Intext Q7 (Boojho's Query)",
      text: "Boojho wants to know how fungi appear suddenly during the rainy season on bread, leather shoes, and rotting wood.",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Scientific Explanation:</strong><br>
  1. <strong>Microscopic Spores in Air:</strong> Fungal spores are extremely light and are naturally floating suspended in the atmosphere around us at all times in a dormant state.<br>
  2. <strong>Protective Spore Coat:</strong> Each spore is enclosed in a tough, hard protective coat that allows it to survive long dry spells and unfavorable temperatures.<br>
  3. <strong>Monsoon Warmth & Moisture:</strong> During the rainy season, the ambient air becomes highly humid and warm. When these microscopic airborne spores land on wet, organic substrates (moist bread, damp leather, decaying wood), the moisture triggers instant germination.<br>
  4. <strong>Rapid Mycelial Growth:</strong> The spores sprout hyphae, secrete digestive enzymes onto the substrate, and rapidly multiply into visible cottony fungal colonies within 48 to 72 hours.
</div>`,
      scheme: [
        { key: "Ubiquitous presence of dormant microscopic airborne fungal spores", marks: "1 Mark" },
        { key: "High humidity and warmth in rainy season triggering rapid germination", marks: "1 Mark" }
      ]
    }
  ],
  2: [
    {
      id: "q2_in_1",
      num: "Page 11 — Intext Q1",
      text: "What are the different modes of taking food into the body in different animals? Give examples.",
      marks: "2 Marks",
      ans: `<div class="step">
  Different animal species have evolved specialized feeding mechanisms depending on their body structure and diet:
  <ul>
    <li><strong>Chewing & Biting:</strong> Humans, dogs, cattle break down solid food with specialized teeth.</li>
    <li><strong>Scraping:</strong> Snails use a toothed ribbon (radula) to scrape algae from rocks.</li>
    <li><strong>Siphoning:</strong> Butterflies and moths suck nectar from flowers using a coiled tubular proboscis.</li>
    <li><strong>Sponging:</strong> Houseflies liquefy food with saliva and sponge it up with a fleshy labellum.</li>
    <li><strong>Swallowing whole:</strong> Snakes (e.g. pythons) swallow prey whole without chewing.</li>
    <li><strong>Filter Feeding:</strong> Aquatic animals like flamingos and baleen whales filter tiny food particles floating in water.</li>
  </ul>
</div>`,
      scheme: [
        { key: "Any 4 distinct feeding modes identified with accurate examples", marks: "2 Marks" }
      ]
    },
    {
      id: "q2_in_2",
      num: "Page 15 — Intext Q2 (Paheli's Query)",
      text: "Paheli wants to know how food moves in the opposite direction during vomiting.",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Mechanism of Vomiting (Anti-peristalsis):</strong><br>
  1. Normally, food moves downward through the alimentary canal by rhythmic wave-like contractions of the muscular gut wall called <strong>peristalsis</strong>.<br>
  2. When the stomach detects toxic, contaminated, or irritating food, or when it is excessively overloaded, nerve signals trigger the vomiting reflex in the brainstem.<br>
  3. The normal downward peristalsis reverses into <strong>anti-peristalsis</strong> (retro-peristalsis).<br>
  4. The stomach and abdominal muscles violently contract simultaneously, the cardiac sphincter at the esophageal entrance relaxes, and the stomach contents are forcefully propelled backwards up the esophagus and expelled through the mouth.
</div>`,
      scheme: [
        { key: "Normal downward peristalsis vs reverse anti-peristalsis", marks: "1 Mark" },
        { key: "Forceful contraction of stomach and abdominal muscles expelling food", marks: "1 Mark" }
      ]
    },
    {
      id: "q2_in_3",
      num: "Page 17 — Intext Q3 (Boojho's Query)",
      text: "Boojho wants to know why ruminants (like cows and buffaloes) cannot chew their food properly when they take it in, but chew cud later while resting.",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Evolutionary Adaptation of Ruminants:</strong><br>
  1. <strong>Predator Avoidance:</strong> In the wild, grazing herbivores are vulnerable to carnivores in open pastures. To minimize time exposed, they swallow huge quantities of grass as quickly as possible with minimal chewing.<br>
  2. <strong>Storage in Rumen:</strong> The swallowed grass is stored in the <strong>rumen</strong> (first stomach chamber), where symbiotic anaerobic bacteria and protozoa begin breaking down tough cellulose, forming soft partially digested food called <strong>cud</strong>.<br>
  3. <strong>Rumination in Safety:</strong> Once the animal retreats to a sheltered, safe spot to rest, small lumps of cud are regurgitated back into the mouth in batches and thoroughly chewed (chewing the cud / rumination). This fine mastication enables complete microbial fermentation later in the digestive tract.
</div>`,
      scheme: [
        { key: "Rapid ingestion to avoid predators in open grazing fields", marks: "1 Mark" },
        { key: "Storage in rumen to form cud followed by detailed chewing in safety", marks: "1 Mark" }
      ]
    },
    {
      id: "q2_in_4",
      num: "Page 18 — Intext Q4 (Boojho's Query)",
      text: "Boojho wants to know why humans cannot digest cellulose like cattle and horses do.",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Why Humans Cannot Digest Cellulose:</strong><br>
  1. <strong>Lack of Cellulase Enzyme:</strong> Cellulose is a tough, complex structural carbohydrate with strong β-glycosidic linkages. Humans do not produce the enzyme <strong>cellulase</strong> required to cleave these bonds.<br>
  2. <strong>Absence of Cellulolytic Symbionts:</strong> Herbivorous ruminants have a rumen and animals like horses and rabbits have an enlarged <strong>caecum</strong> hosting millions of specialized symbiotic anaerobic bacteria and protozoa that ferment and digest cellulose.<br>
  3. <strong>Vestigial Human Caecum:</strong> In humans, the caecum is reduced, and the appendix is a tiny vestigial organ with no cellulose-digesting bacteria. Hence, cellulose passes through the human gut undigested as dietary fiber (roughage).
</div>`,
      scheme: [
        { key: "Absence of cellulase enzyme in human digestive secretions", marks: "1 Mark" },
        { key: "Absence of symbiotic cellulose-fermenting rumen/caecal microbes in humans", marks: "1 Mark" }
      ]
    }
  ],
  3: [
    {
      id: "q3_in_1",
      num: "Page 35 — Intext Q1 (Paheli's Query)",
      text: "Paheli tested three mugs of water: Left hand in cold water (Mug A), Right hand in hot water (Mug B), then both hands in lukewarm water (Mug C). Her left hand feels Mug C is hot, while right hand feels it is cold! What should she conclude? Can we rely on our sense of touch to measure temperature?",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Scientific Conclusion:</strong><br>
  1. <strong>Sense of Touch is Relative & Deceptive:</strong> Our skin's thermal receptors do not measure absolute temperature; they only detect the <em>direction and rate of heat transfer</em> relative to the hand's previous temperature.<br>
  2. For the cold left hand, heat flows from lukewarm water into the hand, so it feels 'hot'. For the hot right hand, heat flows out of the hand into the water, so it feels 'cold'.<br>
  3. <strong>Conclusion:</strong> We <strong>cannot rely</strong> on our sense of touch to determine the temperature of an object accurately. A reliable physical instrument — a <strong>thermometer</strong> — is essential to measure true thermal energy.
</div>`,
      scheme: [
        { key: "Explanation of relative heat gain vs heat loss deceiving the skin", marks: "1 Mark" },
        { key: "Conclusion that sense of touch is unreliable; thermometer required", marks: "1 Mark" }
      ]
    },
    {
      id: "q3_in_2",
      num: "Page 37 — Intext Q2 (Paheli's Query)",
      text: "Paheli asks: Can we use a clinical thermometer to measure the temperature of boiling milk or hot water? Why or why not?",
      marks: "2 Marks",
      ans: `<p><strong>Answer: No, a clinical thermometer should NEVER be used to measure boiling milk or hot liquids.</strong></p>
<div class="step">
  <strong>Reasons:</strong><br>
  1. <strong>Limited Temperature Range:</strong> A clinical thermometer is calibrated strictly for the human body temperature range from <strong>35°C to 42°C</strong> (or 94°F to 108°F).<br>
  2. <strong>Risk of Glass Bursting:</strong> Boiling milk or boiling water reaches 100°C or higher. When exposed to this temperature, mercury expands violently beyond the top of the capillary bore, causing the glass bulb and stem to shatter explosively, creating severe burn hazards and toxic mercury vapor exposure.
</div>`,
      scheme: [
        { key: "Limited scale range of clinical thermometer (35°C to 42°C)", marks: "1 Mark" },
        { key: "Severe risk of glass shattering due to excessive mercury thermal expansion", marks: "1 Mark" }
      ]
    },
    {
      id: "q3_in_3",
      num: "Page 38 — Intext Q3 (Boojho's Query)",
      text: "Boojho wondered why the level of mercury should change at all when a laboratory thermometer is taken out of water, while a clinical thermometer retains its reading.",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Key Structural Difference:</strong><br>
  1. <strong>Presence of a Kink in Clinical Thermometer:</strong> A clinical thermometer has a sharp narrow constriction or <strong>kink</strong> in the capillary tube just above the mercury bulb. When removed from the mouth or armpit, the cooler room air causes mercury in the bulb to contract, but the kink physically blocks the mercury column from flowing back, locking the reading in place until shaken.<br>
  2. <strong>Absence of Kink in Laboratory Thermometer:</strong> A laboratory thermometer has a completely straight, uniform capillary bore without any constriction. As soon as it is removed from hot water, the surrounding cooler air causes immediate contraction of mercury, making the level drop instantly. Hence, laboratory thermometers must be read while immersed in the substance.
</div>`,
      scheme: [
        { key: "Presence of a constriction/kink in clinical thermometer preventing backflow", marks: "1 Mark" },
        { key: "Straight bore in lab thermometer causing immediate mercury drop on exposure to air", marks: "1 Mark" }
      ]
    }
  ],
  4: [
    {
      id: "q4_in_1",
      num: "Page 49 — Intext Q1 (Boojho's Caution)",
      text: "Boojho asks: 'Can I taste all unknown substances in the laboratory to determine whether they are acidic or basic?' What warning does Paheli give him?",
      marks: "2 Marks",
      ans: `<p><strong>Answer: No, we must NEVER taste unknown chemicals or substances.</strong></p>
<div class="step">
  <strong>Paheli's Warning & Scientific Justification:</strong><br>
  1. <strong>Severe Toxicity & Corrosiveness:</strong> Many laboratory acids (like concentrated sulfuric acid, nitric acid, hydrochloric acid) and strong bases (like sodium hydroxide, potassium hydroxide) are extremely corrosive and toxic. Even a microscopic droplet can burn mouth tissues, destroy mucous membranes, or cause fatal chemical poisoning.<br>
  2. <strong>Safe Scientific Testing:</strong> Scientists use safe, specialized chemical and natural <strong>indicators</strong> (such as litmus paper, turmeric paper, phenolphthalein, and China rose petals) to test whether an unknown substance is acidic or basic without tasting or touching.
</div>`,
      scheme: [
        { key: "Strict prohibition due to corrosive and toxic nature of chemicals", marks: "1 Mark" },
        { key: "Use of indicators as safe scientific method of testing", marks: "1 Mark" }
      ]
    },
    {
      id: "q4_in_2",
      num: "Page 50 — Intext Q2 (Paheli's Query)",
      text: "Paheli noticed that a yellow curry (turmeric) stain on her white shirt turns reddish-brown when washed with bathing soap. Why does this happen, and why does it turn yellow again on rinsing with plenty of water?",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Scientific Explanation:</strong><br>
  1. <strong>Turmeric is a Natural Indicator:</strong> Turmeric contains the natural pigment <em>curcumin</em>, which remains yellow in acidic and neutral environments but turns distinctive <strong>reddish-brown in basic (alkaline)</strong> solutions.<br>
  2. <strong>Soap is Basic:</strong> Laundry and bathing soaps contain sodium or potassium salts of fatty acids, which are alkaline (pH > 7). When soap is rubbed onto the curry stain, the base reacts with turmeric, shifting its color to reddish-brown.<br>
  3. <strong>Restoration to Yellow:</strong> When the shirt is thoroughly rinsed with copious clean water (or treated with lemon juice), the alkaline soap is washed away, restoring the neutral/acidic condition, and the stain reverts to its original yellow color.
</div>`,
      scheme: [
        { key: "Turmeric acting as natural indicator turning reddish-brown with basic soap", marks: "1 Mark" },
        { key: "Rinsing with water removing alkaline base, restoring yellow neutral color", marks: "1 Mark" }
      ]
    }
  ],
  5: [
    {
      id: "q5_in_1",
      num: "Page 58 — Intext Q1",
      text: "Paheli asks: 'When we tear a large sheet of paper into small pieces, we cannot join the pieces back to get the original sheet. Then why is tearing paper classified as a physical change?'",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Definition of Physical Change:</strong><br>
  1. A change is classified as physical if only the physical properties (size, shape, texture, state) of a substance are altered, with <strong>no new chemical substance</strong> being formed.<br>
  2. When paper is torn, each small bit of paper is still made of the exact same chemical cellulose molecules as the original sheet.<br>
  3. Even though the mechanical process is physically irreversible (we cannot un-tear paper), no chemical bonds were broken or formed, and no new chemical species emerged. Therefore, tearing paper is purely a physical change.
</div>`,
      scheme: [
        { key: "Definition of physical change: alteration of size/shape with no new substance", marks: "1 Mark" },
        { key: "Chemical composition of cellulose remaining unchanged despite irreversibility", marks: "1 Mark" }
      ]
    },
    {
      id: "q5_in_2",
      num: "Page 62 — Intext Q2 (Boojho's Query)",
      text: "Boojho asks: 'Why does passing carbon dioxide gas through freshly prepared lime water turn it milky? Give the chemical equation.'",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Chemical Reaction & Explanation:</strong><br>
  1. Fresh lime water is a clear, aqueous solution of calcium hydroxide: <span class="math">Ca(OH)₂</span>.<br>
  2. When carbon dioxide gas (<span class="math">CO₂</span>) is bubbled through lime water, it reacts chemically to form insoluble white precipitate particles of <strong>calcium carbonate (<span class="math">CaCO₃</span>)</strong> suspended in water:<br>
  <div class="math">Carbon dioxide (CO₂) + Lime water [Ca(OH)₂] → Calcium carbonate (CaCO₃) [Milky ppt] + Water (H₂O)</div><br>
  3. The formation of these insoluble white calcium carbonate particles scatters light, making the clear solution appear distinctly milky. This serves as the standard confirmatory test for carbon dioxide gas.
</div>`,
      scheme: [
        { key: "Chemical equation forming insoluble calcium carbonate (CaCO₃)", marks: "1 Mark" },
        { key: "Suspension of white CaCO₃ particles causing milky appearance", marks: "1 Mark" }
      ]
    }
  ],
  6: [
    {
      id: "q6_in_1",
      num: "Page 70 — Intext Q1 (Boojho's Query)",
      text: "Boojho wondered why a person breathes much faster and deeper after running a 100-metre race.",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Scientific Explanation:</strong><br>
  1. <strong>High Energy Demand:</strong> Vigorous physical running requires immense muscular energy. To meet this demand, muscle cells consume oxygen at a rapid rate to break down glucose into ATP.<br>
  2. <strong>Oxygen Debt & Lactic Acid:</strong> Because oxygen supply cannot keep up with high consumption, muscles temporarily respire anaerobically, producing <strong>lactic acid</strong>, which causes muscle fatigue.<br>
  3. <strong>Breathing Rate Acceleration:</strong> To repay this 'oxygen debt' and oxidize the accumulated lactic acid into harmless CO₂ and water, the respiratory control center in the brain commands the diaphragm and rib muscles to breathe much faster and deeper.
</div>`,
      scheme: [
        { key: "Increased oxygen demand for cellular respiration and ATP release", marks: "1 Mark" },
        { key: "Repaying oxygen debt to clear accumulated lactic acid in muscles", marks: "1 Mark" }
      ]
    },
    {
      id: "q6_in_2",
      num: "Page 71 — Intext Q2 (Paheli's Query)",
      text: "Paheli wants to know why we sneeze when we inhale a lot of dust-laden or pepper-filled air.",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Protective Sneezing Reflex:</strong><br>
  1. The nasal cavity is lined with fine hairs (cilia) and sticky mucus designed to trap foreign particulate matter.<br>
  2. When we inhale air heavily laden with fine dust, smoke particles, or irritant molecules (like capsaicin in pepper), some particles bypass the nasal hairs and irritate the sensitive mucosal lining of the nasal passage.<br>
  3. Sensory nerve receptors trigger a violent, involuntary reflex: the respiratory muscles suddenly contract and forcefully blast out a high-velocity jet of air through the nose and mouth.<br>
  4. This explosive expulsion clears the irritating foreign particles from the nasal airway, ensuring that only clean, filtered air reaches the delicate lungs.
</div>`,
      scheme: [
        { key: "Irritation of nasal mucosal lining by foreign dust/pepper particles", marks: "1 Mark" },
        { key: "Involuntary explosive expulsion reflex clearing the airway to protect lungs", marks: "1 Mark" }
      ]
    }
  ],
  7: [
    {
      id: "q7_in_1",
      num: "Page 81 — Intext Q1 (Boojho's Query)",
      text: "Boojho wonders why primitive aquatic animals like sponges and Hydra do not possess blood or a circulatory system.",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Scientific Reason:</strong><br>
  1. <strong>Direct Water Circulation:</strong> Sponges and Hydra are simple multicellular organisms whose body wall consists of only two cell layers in direct contact with their aquatic environment.<br>
  2. The natural water in which they reside circulates continuously through their body cavity, bringing in dissolved oxygen and food particles directly to individual cells through simple diffusion.<br>
  3. As the water flows out, it carries away carbon dioxide and metabolic wastes directly. Because diffusion distance is microscopic, they require no internal blood or vascular pump.
</div>`,
      scheme: [
        { key: "Surrounding water entering body bringing food and oxygen directly", marks: "1 Mark" },
        { key: "Outflowing water carrying wastes away, eliminating need for blood", marks: "1 Mark" }
      ]
    },
    {
      id: "q7_in_2",
      num: "Page 88 — Intext Q2 (Boojho's Query)",
      text: "Boojho wonders why plants absorb such a large quantity of water through their roots if they give off most of it through transpiration.",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Crucial Roles of Transpiration:</strong><br>
  1. <strong>Generates Transpiration Pull:</strong> Evaporation of water from leaf stomata creates strong suction pressure (transpirational pull) that lifts water and essential dissolved soil minerals hundreds of feet to the crowns of tall trees.<br>
  2. <strong>Evaporative Cooling:</strong> Just as perspiration cools human skin, the continuous evaporation of water dissipates intense solar heat, preventing delicate leaf enzymes from denaturing under midday summer sun.<br>
  3. <strong>Turgidity & Mechanical Support:</strong> Continuous water flow maintains cell turgor, keeping herbaceous leaves upright and firm.
</div>`,
      scheme: [
        { key: "Generation of transpirational pull lifting water and minerals", marks: "1 Mark" },
        { key: "Evaporative cooling protecting plant from thermal damage", marks: "1 Mark" }
      ]
    }
  ],
  8: [
    {
      id: "q8_in_1",
      num: "Page 95 — Intext Q1 (Boojho's Query)",
      text: "Boojho wants to know how a piece of potato tuber with an 'eye' develops into a new potato plant.",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Vegetative Propagation via Potato Tuber:</strong><br>
  1. A potato tuber is a swollen underground storage stem. The indentations called <strong>'eyes'</strong> are vegetative buds located at stem nodes, protected by scar leaves.<br>
  2. When a piece of potato containing an eye is buried in moist, warm soil, the dormant bud absorbs water and nutrients from the starch-rich tuber flesh.<br>
  3. The eye sprouts into an aerial shoot growing leaves upwards towards sunlight, while adventitious roots develop downwards into the soil, establishing a vigorous, genetically identical new potato plant.
</div>`,
      scheme: [
        { key: "Identification of 'eyes' as vegetative buds on swollen stem tuber", marks: "1 Mark" },
        { key: "Nutrient absorption from tuber producing aerial shoot and adventitious roots", marks: "1 Mark" }
      ]
    },
    {
      id: "q8_in_2",
      num: "Page 99 — Intext Q2 (Paheli's Query)",
      text: "Paheli asks: Why do flowers of insect-pollinated plants have bright colorful petals, sweet scent, and nectar, whereas wind-pollinated flowers are small, dull, and lack fragrance?",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Ecological Floral Adaptations:</strong><br>
  1. <strong>Insect-pollinated flowers:</strong> Must actively attract animal pollinators (bees, butterflies). Bright colorful petals act as visual beacons; sweet fragrance guides insects from afar; and sugary nectar serves as a food reward. The pollen is sticky so it adheres to the insect's hairy legs.<br>
  2. <strong>Wind-pollinated flowers:</strong> Wind is an inanimate physical carrier, so energy spent on petals, nectar, and scents would be wasted. Instead, these flowers have exposed hanging stamens, large feathery stigmas to trap drifting pollen, and produce huge quantities of dry, ultra-lightweight pollen that easily floats on gentle breezes.
</div>`,
      scheme: [
        { key: "Bright colors, fragrance and nectar as rewards to attract insect vectors", marks: "1 Mark" },
        { key: "Wind-pollinated flowers investing energy in exposed feathery stigmas and light pollen", marks: "1 Mark" }
      ]
    }
  ],
  9: [
    {
      id: "q9_in_1",
      num: "Page 108 — Intext Q1 (Boojho's Query)",
      text: "Boojho was wondering how people in ancient times measured time without pendulum clocks or modern electronic watches.",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Ancient Periodic Timekeepers:</strong><br>
  Ancient civilizations tracked time using regular, repeating natural periodic events and ingenious devices:
  <ul>
    <li><strong>Solar Day & Sundials:</strong> Observed sunrise to sunset; shadow lengths cast by gnomons on calibrated stone dials (e.g. Jantar Mantar sundials).</li>
    <li><strong>Water Clocks (Clepsydra):</strong> Regulated outflow of water through a small calibrated orifice from one vessel into another.</li>
    <li><strong>Sand Hourglasses:</strong> Flow of fine sand through a narrow glass waist under gravity over a fixed time duration.</li>
    <li><strong>Lunar Phases:</strong> New moon to full moon tracked months; seasonal solar cycles tracked calendar years.</li>
  </ul>
</div>`,
      scheme: [
        { key: "Any 3 ancient methods explained (Sundials, water clocks, sand glasses, lunar cycles)", marks: "2 Marks" }
      ]
    },
    {
      id: "q9_in_2",
      num: "Page 111 — Intext Q2 (Paheli's Query)",
      text: "Paheli asks: What is the difference between a speedometer and an odometer installed on a vehicle's dashboard?",
      marks: "2 Marks",
      ans: `<div class="step">
  <table class="data-table">
    <thead>
      <tr><th>Parameter</th><th>Speedometer</th><th>Odometer</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Measurement</strong></td>
        <td>Measures instantaneous <strong>speed</strong> of the vehicle at that precise moment.</td>
        <td>Measures total <strong>distance</strong> traversed by the vehicle throughout its lifespan.</td>
      </tr>
      <tr>
        <td><strong>Units</strong></td>
        <td>Calibrated directly in <strong>km/h</strong> (kilometres per hour).</td>
        <td>Calibrated in <strong>km</strong> (kilometres, with tenths of km).</td>
      </tr>
    </tbody>
  </table>
</div>`,
      scheme: [
        { key: "Speedometer measuring instantaneous speed in km/h", marks: "1 Mark" },
        { key: "Odometer measuring cumulative distance in km", marks: "1 Mark" }
      ]
    }
  ],
  10: [
    {
      id: "q10_in_1",
      num: "Page 124 — Intext Q1 (Paheli's Query)",
      text: "Paheli asks: Why are Compact Fluorescent Lamps (CFLs) and Light Emitting Diodes (LEDs) preferred over traditional incandescent tungsten filament bulbs?",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Energy Efficiency Comparison:</strong><br>
  1. <strong>Wasted Thermal Energy in Incandescent Bulbs:</strong> An incandescent tungsten bulb functions by heating a filament to over 2500°C until it glows. Over 85–90% of electrical energy is wasted as heat, with only 10–15% converted into visible light.<br>
  2. <strong>Superior Efficiency of LEDs & CFLs:</strong> LEDs emit light via electroluminescence in semiconductor junctions, generating virtually zero excess heat. A 9-watt LED bulb produces the same brightness as a 60-watt incandescent bulb, saving over 80% electricity.<br>
  3. <strong>Longevity & Safety:</strong> LEDs last 25,000+ hours (compared to 1,000 hours for filament bulbs) and drastically reduce carbon footprints and electric utility bills.
</div>`,
      scheme: [
        { key: "Filament bulbs wasting 85-90% electricity as heat energy", marks: "1 Mark" },
        { key: "LEDs converting almost all electricity directly into light without heating", marks: "1 Mark" }
      ]
    },
    {
      id: "q10_in_2",
      num: "Page 126 — Intext Q2 (Boojho's Query)",
      text: "Boojho wants to know why a magnetic compass needle kept near an electric wire deflects ONLY when the switch is in the 'ON' position, but returns to normal North-South when 'OFF'.",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Magnetic Effect of Current (Oersted's Principle):</strong><br>
  1. When switch is 'OFF', no electric charges are flowing (<span class="math">I = 0</span>). The wire has zero magnetic field. The compass needle responds only to Earth's natural geomagnetic field and points North-South.<br>
  2. When switch is moved to 'ON', electric current flows through the copper wire. Moving electrical charges generate an artificial <strong>magnetic field around the wire</strong>.<br>
  3. This magnetic field exerts a mechanical torque on the permanent magnetic compass needle, deflecting it away from North-South. When current is switched off, the magnetic field vanishes instantly, allowing the needle to swing back to Earth's North-South.
</div>`,
      scheme: [
        { key: "Moving electric current producing a magnetic field around the wire", marks: "1 Mark" },
        { key: "Magnetic interaction deflecting needle when ON; vanishing when OFF", marks: "1 Mark" }
      ]
    }
  ],
  11: [
    {
      id: "q11_in_1",
      num: "Page 137 — Intext Q1 (Boojho's Query)",
      text: "Boojho observed an emergency ambulance and wondered why the word AMBULANCE is written in reverse mirror-image lettering on the vehicle's front bonnet.",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Optical Lateral Inversion Principle:</strong><br>
  1. Plane and convex rear-view mirrors exhibit <strong>lateral inversion</strong>, meaning that an object's left side appears on the right side of the mirror image, and vice versa.<br>
  2. When the driver of a vehicle ahead glances into their rear-view mirror, the pre-inverted lettering on the ambulance bonnet undergoes lateral inversion in the mirror.<br>
  3. As a result, the reversed lettering appears right-side up as perfectly readable standard <strong>AMBULANCE</strong>. This allows drivers to instantly identify the approaching emergency vehicle and yield immediate right-of-way.
</div>`,
      scheme: [
        { key: "Lateral inversion in driver's rear-view mirror reversing left and right", marks: "1 Mark" },
        { key: "Pre-inverted letters becoming standard readable text allowing prompt right-of-way", marks: "1 Mark" }
      ]
    },
    {
      id: "q11_in_2",
      num: "Page 143 — Intext Q2 (Paheli's Query)",
      text: "Paheli asks: Can we see the seven rainbow colours on a sunny day even without natural rainfall? How?",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Artificial Dispersion of Sunlight:</strong><br>
  Yes, rainbow colors can easily be produced and viewed without rainfall through any of the following optical methods:
  <ul>
    <li><strong>Water Fountain / Garden Hose:</strong> Stand with your back towards the sun and spray a fine mist of water droplets with a garden hose into the air. Tiny suspended water droplets act as micro-prisms, refracting, reflecting, and dispersing sunlight into a vibrant miniature rainbow.</li>
    <li><strong>Glass Prism:</strong> Allow a narrow beam of sunlight through a window slit to pass through a triangular glass prism onto a white screen to see the 7 VIBGYOR colors.</li>
    <li><strong>Soap Bubbles & Compact Discs:</strong> Thin films of soap bubbles or micro-grooves on the back of a CD reflect and disperse white light into shimmering rainbow spectral bands.</li>
  </ul>
</div>`,
      scheme: [
        { key: "Garden hose spray with sun behind observer creating rainbow droplets", marks: "1 Mark" },
        { key: "Dispersion via glass prism or soap bubble thin-film interference", marks: "1 Mark" }
      ]
    }
  ],
  12: [
    {
      id: "q12_in_1",
      num: "Page 149 — Intext Q1",
      text: "Why did birds and monkeys start making loud alarming noises and scampering from tree to tree as soon as children entered the forest fringe?",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Ecological Warning System:</strong><br>
  1. In a natural forest, arboreal animals like langurs, monkeys, and birds maintain high vigilance from tree crowns.<br>
  2. The entry of unfamiliar humans or potential predators is immediately perceived as a security threat.<br>
  3. Monkeys and birds produce specialized, loud vocal <strong>warning alarm calls</strong> that echo across the canopy, alerting deer, wild boars, and other ground-dwelling herbivores to seek cover and stay alert against danger.
</div>`,
      scheme: [
        { key: "High canopy vigilance of birds and monkeys detecting approaching intruders", marks: "1 Mark" },
        { key: "Alarm warning calls alerting ground herbivores to seek safety", marks: "1 Mark" }
      ]
    },
    {
      id: "q12_in_2",
      num: "Page 153 — Intext Q2 (Boojho's Query)",
      text: "Boojho asks: Why does rainwater not collect and form stagnant puddles on the forest floor, whereas city asphalt roads get flooded after a short shower?",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Hydrological Sponge Action of Forests:</strong><br>
  1. <strong>Interception & Gentle Drip:</strong> The multi-tiered canopy and understorey intercept raindrops, reducing their velocity so water drips gently onto the ground instead of slamming into it.<br>
  2. <strong>Spongy Organic Humus:</strong> The forest floor is covered with a thick carpet of decaying leaves, twigs, and crumbly humus that absorbs immense volumes of water like a giant sponge.<br>
  3. <strong>Deep Infiltration via Root Channels:</strong> Extensive root networks keep forest soil porous, facilitating rapid underground percolation into aquifers.<br>
  4. In contrast, impermeable concrete and asphalt roads in cities have zero porosity, forcing all rain to turn into immediate surface runoff and street flooding.
</div>`,
      scheme: [
        { key: "Spongy humus layer absorbing water and facilitating percolation", marks: "1 Mark" },
        { key: "Roots creating porous soil channels vs impermeable concrete city roads", marks: "1 Mark" }
      ]
    }
  ],
  13: [
    {
      id: "q13_in_1",
      num: "Page 163 — Intext Q1 (Paheli's Query)",
      text: "Paheli asks: Why should we never discard solid food scraps, used tea leaves, cotton, and sanitary items into the kitchen drain or toilet bowl?",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Plumbing & Ecological Reasons:</strong><br>
  1. <strong>Choking Drainage Conduits:</strong> Solid food scraps, viscous fats, tea leaves, and sanitary napkins do not dissolve in water. They agglomerate inside narrow pipe elbows and traps, trapping hair and debris to form stubborn blockages that cause foul sewer back-ups into homes.<br>
  2. <strong>Smothering Aerobic Microbes:</strong> In wastewater treatment systems, solid debris blankets bottom clarifiers, clogging intake pumps and reducing dissolved oxygen levels needed by aerobic bacteria to purify sewage.<br>
  <em>Correct Practice:</em> All solid organic refuse must be segregated and thrown into household dry/wet waste dustbins.
</div>`,
      scheme: [
        { key: "Solid materials not dissolving, causing severe drain pipe blockages", marks: "1 Mark" },
        { key: "Clogging treatment pumps and choking oxygen flow needed by purifying bacteria", marks: "1 Mark" }
      ]
    },
    {
      id: "q13_in_2",
      num: "Page 165 — Intext Q2 (Boojho's Query)",
      text: "Boojho asks: Why are eucalyptus trees planted along municipal wastewater treatment ponds and open sewage channels?",
      marks: "2 Marks",
      ans: `<div class="step">
  <strong>Phytoremediation / Bio-drainage by Eucalyptus:</strong><br>
  1. <strong>High Transpiration Rate:</strong> Eucalyptus trees have deep root systems and extraordinarily high water-absorption rates, acting as natural biological water pumps.<br>
  2. <strong>Purification into Clean Water Vapor:</strong> The roots absorb surplus nutrient-rich wastewater rapidly, filtering out organic compounds to nourish tree biomass, and transpire massive volumes of clean, pure water vapor into the atmosphere.<br>
  3. <strong>Pollution & Odour Mitigation:</strong> By rapidly drying out waterlogged sewage lagoons, they prevent foul odor, eliminate stagnant mosquito-breeding swamps, and provide valuable timber without chemical expenses.
</div>`,
      scheme: [
        { key: "High water absorption and rapid transpiration releasing clean water vapor", marks: "1 Mark" },
        { key: "Drying out sewage lagoons, preventing mosquito breeding and water stagnation", marks: "1 Mark" }
      ]
    }
  ]
};

// Function to generate Intext questions HTML
function generateIntextHtml(items) {
  if (!items || items.length === 0) return '';
  let h = `\n  <div class="ex-div">NCERT Intext Questions &amp; Scientific Enquiries</div>\n`;
  for (const q of items) {
    const schemeRows = q.scheme.map(s => 
      `<div class="marking-row"><span class="marking-key">${s.key}</span><span class="marking-marks">${s.marks}</span></div>`
    ).join('\n          ');

    h += `
  <!-- ${q.id} -->
  <div class="q-card" id="${q.id}">
    <div class="q-head" onclick="toggleQ('${q.id}')">
      <div class="q-num">${q.num}</div>
      <div class="q-text">${q.text}</div>
      <div class="q-marks">${q.marks}</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Answer</div>
        <div class="answer-text">
          ${q.ans}
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme 2026-27</div>
          ${schemeRows}
        </div>
      </div>
    </div>
  </div>\n`;
  }
  return h;
}

// Enrich each chapter
for (let i = 1; i <= 13; i++) {
  const filePath = path.join(__dirname, '..', 'chapters-c7s', `ch${i}.html`);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing ch${i}.html`);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if intext section is already present
  if (content.includes('NCERT Intext Questions &amp; Scientific Enquiries')) {
    console.log(`Chapter ${i} already has intext questions.`);
    continue;
  }

  const intextHtml = generateIntextHtml(intextData[i]);
  // Insert before <div class="ex-div">NCERT Textbook Exercise Questions</div>
  const target = '<div class="ex-div">NCERT Textbook Exercise Questions</div>';
  if (content.includes(target)) {
    content = content.replace(target, intextHtml + '\n  ' + target);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Enriched Chapter ${i} with ${intextData[i].length} intext questions.`);
  } else {
    console.error(`Target not found in Chapter ${i}`);
  }
}

console.log('Finished enriching all 13 chapters.');
