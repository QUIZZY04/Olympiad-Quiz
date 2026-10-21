// Script to enrich ncert-solutions-class-5-evs.html with 100% complete questions across all 22 chapters
const fs = require('fs');
const path = require('path');

const extraQuestionsByChapter = {
  // Ch 4: Mangoes Round the Year
  4: [
    {
      q: "What is the difference between food spoiling and food wasting? Give real-life examples of both.",
      marks: 3,
      ans: `<ul>
        <li><strong>Food Spoiling:</strong> Occurs when cooked or raw food decays due to microorganisms (bacteria, yeast, mould) or enzymes, becoming unwholesome, foul-smelling, and harmful to consume. <em>Example:</em> Milk turning sour on a hot day or bread developing fungal mould.</li>
        <li><strong>Food Wasting:</strong> Occurs when perfectly fresh, wholesome edible food is discarded or left uneaten due to over-purchasing, excess cooking at banquets, or neglect. <em>Example:</em> Leaving half a plate of fresh rice at a wedding feast and throwing it in the garbage bin.</li>
      </ul>`,
      rubric: [
        { key: "Definition and example of microbial food spoilage", marks: "1.5 Marks" },
        { key: "Definition and example of unnecessary food wastage", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Name four common food items and describe simple traditional home methods to prevent them from spoiling for a few days.",
      marks: 4,
      ans: `Traditional home methods of short-term preservation:
      <ol>
        <li><strong>Milk:</strong> Boil it thoroughly 1-2 times daily to kill spoilage bacteria.</li>
        <li><strong>Cooked Rice:</strong> Place the bowl in a shallow basin of cold water or store in a refrigerator.</li>
        <li><strong>Green Coriander (Dhaniya):</strong> Wrap loosely in a damp, breathable cotton cloth.</li>
        <li><strong>Onion and Garlic:</strong> Keep in an open, dry, and well-ventilated basket away from moisture.</li>
      </ol>`,
      rubric: [
        { key: "Boiling milk & shallow water basin for rice", marks: "2 Marks" },
        { key: "Damp cloth for coriander & dry basket for onions", marks: "2 Marks" }
      ]
    }
  ],

  // Ch 5: Seeds and Seeds
  5: [
    {
      q: "Explain four distinct natural agents of seed dispersal and name two plants for each method.",
      marks: 4,
      ans: `Seeds travel to distant places through diverse natural agents:
      <ol>
        <li><strong>By Wind:</strong> Seeds are lightweight, small, and equipped with wings, tufts of hair, or parachutes. <em>Examples:</em> Dandelion, Drumstick, Maple, Calotropis (Madar).</li>
        <li><strong>By Water:</strong> Seeds possess a spongy, fibrous, water-resistant outer coat that floats easily. <em>Examples:</em> Coconut, Lotus, Water Lily.</li>
        <li><strong>By Animals & Humans:</strong> Seeds develop sharp hooks, spines, or sticky burrs that cling to animal fur or human clothing. <em>Examples:</em> Xanthium, Burdock, Urena.</li>
        <li><strong>By Explosive Bursting:</strong> Dry fruit pods split open suddenly with a snap, scattering seeds away from the mother plant. <em>Examples:</em> Balsam, Soybean, Pea, Lady's Finger.</li>
      </ol>`,
      rubric: [
        { key: "Wind and water dispersal features and examples", marks: "2 Marks" },
        { key: "Animal hooks and explosive pod mechanisms and examples", marks: "2 Marks" }
      ]
    },
    {
      q: "Why is seed dispersal essential for the survival and multiplication of plant species?",
      marks: 3,
      ans: `If all seeds of a tree fell directly beneath its parent canopy:
      <ul>
        <li>Seedlings would intensely compete with the parent plant and each other for sunlight, water, soil minerals, and root space.</li>
        <li>Most seedlings would wither and die in the dense shade.</li>
        <li>Seed dispersal ensures plants spread to new geographic regions, establish new colonies, and adapt to diverse climatic conditions.</li>
      </ul>`,
      rubric: [
        { key: "Avoiding overcrowding and competition for resources", marks: "1.5 Marks" },
        { key: "Colonization of new geographic habitats", marks: "1.5 Marks" }
      ]
    }
  ],

  // Ch 6: Every Drop Counts
  6: [
    {
      q: "What traditional customs, songs, and rituals were associated with water and rain in ancient Indian villages?",
      marks: 3,
      ans: `In ancient and traditional Indian culture, water was revered as a sacred life-giver:
      <ul>
        <li>Whenever a lake or stepwell filled up with fresh monsoon rainwater, villagers gathered in colorful festive clothes to sing celebratory folk songs and dance.</li>
        <li>New brides bowed in worship before the village pond, spring, or family water tap to seek blessings.</li>
        <li>Water reservoirs were surrounded by stone carvings of deities, reminding communities that keeping water clean was a sacred religious duty.</li>
      </ul>`,
      rubric: [
        { key: "Celebration of newly filled lakes and community folk songs", marks: "1.5 Marks" },
        { key: "Customs of worship and cultural ethics of water reverence", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Mention four practical water-saving habits every household should adopt to prevent urban water scarcity.",
      marks: 3,
      ans: `Four vital water conservation practices:
      <ol>
        <li>Turn off the tap while brushing teeth, washing face, or soaping hands (saves up to 6 litres per minute).</li>
        <li>Repair leaking taps, flush valves, and joint pipes immediately.</li>
        <li>Reuse RO wastewater and vegetable rinse water for mopping floors and watering garden plants.</li>
        <li>Install dual-flush toilet cisterns and water-saving aerator nozzles on household taps.</li>
      </ol>`,
      rubric: [
        { key: "Turning off running taps & prompt leak repairs", marks: "1.5 Marks" },
        { key: "Reusing greywater & modern aerator/dual-flush fittings", marks: "1.5 Marks" }
      ]
    }
  ],

  // Ch 7: Experiments with Water
  7: [
    {
      q: "State whether the following float or sink in water, and give the scientific reason for each: (a) An empty plastic bottle, (b) A plastic bottle tightly filled with sand, (c) An iron pin, (d) An aluminium foil balled tightly vs spread wide.",
      marks: 4,
      ans: `<ul>
        <li><strong>(a) Empty plastic bottle:</strong> Floats, because it contains air and its average density is much lower than water.</li>
        <li><strong>(b) Plastic bottle filled with sand:</strong> Sinks, because dense sand increases its total weight beyond the buoyant water displacement.</li>
        <li><strong>(c) An iron pin:</strong> Sinks, because solid iron has higher density than water and displaces negligible water volume.</li>
        <li><strong>(d) Aluminium foil:</strong>
          <ul>
            <li><em>Spread wide into a flat cup:</em> Floats, because its bowl shape displaces more water.</li>
            <li><em>Pressed into a tight, dense ball:</em> Sinks, because high compactness decreases displacement volume.</li>
          </ul>
        </li>
      </ul>`,
      rubric: [
        { key: "Correct floating/sinking prediction for (a) and (b)", marks: "2 Marks" },
        { key: "Correct prediction and density/shape explanation for (c) and (d)", marks: "2 Marks" }
      ]
    },
    {
      q: "How can salt be extracted from seawater in coastal areas? Describe the process of salt pans.",
      marks: 3,
      ans: `Salt is manufactured through <strong>solar evaporation</strong> in shallow coastal beds:
      <ol>
        <li>Seawater is channelled into large, shallow rectangular plots called <strong>salt pans (Namak ke Khet)</strong> bordered by mud bunds.</li>
        <li>The water is left exposed to the blazing sun and strong sea winds.</li>
        <li>Water slowly evaporates into the atmosphere as water vapour, leaving behind solid mounds of crystalline white raw salt.</li>
        <li>The harvested salt crystals are collected, washed, iodised, and packaged.</li>
      </ol>`,
      rubric: [
        { key: "Channelling into shallow salt pans", marks: "1.5 Marks" },
        { key: "Solar evaporation leaving solid salt crystals", marks: "1.5 Marks" }
      ]
    }
  ],

  // Ch 8: A Treat for Mosquitoes
  8: [
    {
      q: "Name three diseases transmitted by mosquitoes. How can we differentiate between a normal mosquito and an Anopheles mosquito?",
      marks: 3,
      ans: `<strong>Three mosquito-borne diseases:</strong>
      <ol>
        <li>Malaria (transmitted by female <em>Anopheles</em> mosquito).</li>
        <li>Dengue (transmitted by <em>Aedes</em> mosquito).</li>
        <li>Chikungunya (transmitted by <em>Aedes</em> mosquito).</li>
      </ol>
      <strong>Distinguishing features of Anopheles:</strong>
      Anopheles mosquitoes are brownish with spotted wings. When resting on a wall or skin, they tilt their bodies upward at a distinct <strong>45-degree angle</strong>, unlike common house mosquitoes (Culex) that sit flat and parallel to the surface.`,
      rubric: [
        { key: "Naming Malaria, Dengue, and Chikungunya with vectors", marks: "1.5 Marks" },
        { key: "Physical posture difference (45-degree tilt and spotted wings)", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Why do doctors advise hanging mosquito nets and applying wire mesh to windows rather than solely spraying chemical insect repellents?",
      marks: 3,
      ans: `Physical barriers like bed nets and window wire mesh are far safer and more effective:
      <ul>
        <li>They create a continuous physical barrier that stops mosquitoes from entering without exposing family members to toxic chemical fumes.</li>
        <li>Chemical repellent coils and sprays emit harmful fumes containing pyrethroids, which irritate children's lungs and trigger asthma attacks.</li>
        <li>Mosquitoes develop genetic resistance to repeated chemical sprays over time, whereas physical screens never lose effectiveness.</li>
      </ul>`,
      rubric: [
        { key: "Physical barrier safety without toxic inhalants", marks: "1.5 Marks" },
        { key: "Health hazards of chemical coils and insect resistance", marks: "1.5 Marks" }
      ]
    }
  ],

  // Ch 9: Up You Go!
  9: [
    {
      q: "Why is high-calorie food (like vitamin C tablets, iron tablets, hot chocolate milk) provided to mountaineers every morning?",
      marks: 3,
      ans: `At high altitudes in snowy mountains:
      <ul>
        <li>The body burns immense energy carrying heavy rucksacks against steep gravitational inclines and freezing temperatures.</li>
        <li>Vitamin C boosts immunity against mountain colds, iron tablets stimulate red blood cell and haemoglobin production for better oxygen transport, and hot chocolate milk provides rapid carbohydrates and keeps the core body warm.</li>
      </ul>`,
      rubric: [
        { key: "Immense energy expenditure in freezing conditions", marks: "1.5 Marks" },
        { key: "Specific nutritional role of Vitamin C, Iron, and hot chocolate", marks: "1.5 Marks" }
      ]
    },
    {
      q: "What is a 'Tyrolean traverse' and what specialized gear (carabiners, pitons, slings) is required to cross an icy mountain river safely?",
      marks: 4,
      ans: `A <strong>Tyrolean traverse</strong> is a mountaineering method used to cross rapid, icy mountain torrents without stepping into the freezing water:
      <ul>
        <li>A thick, high-tensile climbing rope is stretched tightly across the river bank and anchored securely to rock walls using forged steel spikes called <strong>pitons</strong>.</li>
        <li>The climber wears a sturdy safety harness sling around their waist.</li>
        <li>A metal spring-loaded clip ring called a <strong>carabiner</strong> hooks the climber's harness directly to the horizontal rope.</li>
        <li>The climber pulls themselves hand-over-hand along the suspended rope to cross over to the opposite bank safely.</li>
      </ul>`,
      rubric: [
        { key: "Definition of rope crossing over turbulent mountain river", marks: "1.5 Marks" },
        { key: "Function of pitons (anchors), carabiner (locking clip), and harness", marks: "2.5 Marks" }
      ]
    },
    {
      q: "What is mountain sickness (altitude sickness)? Why do climbers carry oxygen cylinders to high mountain peaks?",
      marks: 3,
      ans: `As climbers ascend above 3,000 metres:
      <ul>
        <li>Atmospheric air pressure drops and the concentration of oxygen molecules decreases drastically (thin air).</li>
        <li>Climbers experience <strong>altitude sickness</strong>: breathlessness, nausea, intense dizziness, headache, and extreme fatigue.</li>
        <li>To survive in the 'Death Zone' (above 8,000 metres where oxygen is insufficient to sustain life), climbers carry portable <strong>pressurized oxygen cylinders</strong> fitted with breathing masks.</li>
      </ul>`,
      rubric: [
        { key: "Explanation of low air pressure and thin oxygen", marks: "1.5 Marks" },
        { key: "Symptoms and necessity of supplementary oxygen tanks", marks: "1.5 Marks" }
      ]
    }
  ],

  // Ch 10: Walls Tell Stories
  10: [
    {
      q: "How was water lifted to high palace gardens and fountains inside Golconda Fort hundreds of years before electricity was invented?",
      marks: 3,
      ans: `Engineers in Golconda Fort used ingenious gravity hydraulics and animal power:
      <ul>
        <li>Pairs of bullocks walked in circles turning a large horizontal wooden geared wheel.</li>
        <li>This turned a vertical axle connected to a chain of earthen pots called a <strong>Persian wheel (Rahat / Arhat)</strong>.</li>
        <li>The pots dipped into deep underground stepwells, filled with water, rose to the top, and emptied into elevated stone channels.</li>
        <li>Interconnected clay pipes embedded inside thick walls carried water upward to high palace reservoirs and fountains by hydraulic pressure.</li>
      </ul>`,
      rubric: [
        { key: "Bullock-powered gear mechanisms and Persian wheel (Rahat)", marks: "1.5 Marks" },
        { key: "Underground clay pipes and hydraulic pressure delivery", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Describe the unique acoustic (sound) engineering of Golconda Fort. How did it protect royalty from surprise attacks?",
      marks: 3,
      ans: `Golconda Fort features extraordinary acoustic engineering:
      <ul>
        <li>If a person stands at the main outer entrance gate (<strong>Fateh Darwaza</strong>) and claps or speaks, the sound echoes through specific vaulted stone arches and can be heard with striking clarity up at the royal palace (<strong>Bala Hissar</strong>) situated on top of the hill.</li>
        <li>This served as an instant, foolproof warning alarm: guards at the gate could alert the Sultan of approaching enemy troops or suspicious visitors without using messengers.</li>
      </ul>`,
      rubric: [
        { key: "Transmission of claps/whispers from Fateh Darwaza to Bala Hissar", marks: "1.5 Marks" },
        { key: "Early warning defense system for the royal court", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Why is it our civic duty to preserve historical monuments? Why should visitors never scratch names or graffiti on heritage walls?",
      marks: 3,
      ans: `Historical monuments are irreplaceable treasures of human heritage:
      <ul>
        <li>They provide living proof of our ancestors' art, science, engineering, and culture.</li>
        <li>Carving names, scratching paint, or throwing plastic wrappers causes permanent physical disfigurement to ancient limestone, frescoes, and stone engravings.</li>
        <li>Once defaced, historic craftsmanship can never be restored to its original glory. Preserving monuments ensures future generations learn from our cultural heritage with pride.</li>
      </ul>`,
      rubric: [
        { key: "Value of monuments as living historical and architectural evidence", marks: "1.5 Marks" },
        { key: "Permanent damage caused by scratching graffiti and vandalism", marks: "1.5 Marks" }
      ]
    }
  ],

  // Ch 11: Sunita in Space
  11: [
    {
      q: "What is gravity? Give three daily life examples showing the effect of Earth's gravitational force on our planet.",
      marks: 3,
      ans: `<strong>Gravity</strong> is the universal invisible force of attraction with which the Earth pulls all objects towards its center.
      <br><strong>Three Examples:</strong>
      <ol>
        <li>When a ball is thrown up into the sky, it slows down, stops, and falls back down to Earth.</li>
        <li>Ripe apples and mangoes fall downward from tree branches onto the ground rather than flying into the clouds.</li>
        <li>Water in rivers always flows downhill towards lakes and oceans, and stays inside our glasses without floating away.</li>
      </ol>`,
      rubric: [
        { key: "Definition of Earth's gravitational attraction", marks: "1.5 Marks" },
        { key: "3 clear everyday examples (falling ball, falling fruit, water flow)", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Who was Neil Armstrong? On what date did he achieve the historic milestone of landing on the Moon?",
      marks: 3,
      ans: `<strong>Neil Armstrong</strong> was an American astronaut who commanded the Apollo 11 lunar space mission. On <strong>20 July 1969</strong>, he stepped out of the lunar module 'Eagle' and became the <strong>first human being in history to walk on the surface of the Moon</strong>, famously declaring: <em>"That's one small step for man, one giant leap for mankind."</em>`,
      rubric: [
        { key: "Identification of Neil Armstrong and Apollo 11 mission", marks: "1.5 Marks" },
        { key: "Exact historical date (20 July 1969) and first moonwalk milestone", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Why does the shape of the Moon appear to change every night in the sky? What is the difference between Purnima and Amavasya?",
      marks: 4,
      ans: `The Moon does not produce its own light; it reflects light from the Sun. As the Moon orbits the Earth, we see different portions of its illuminated sunlit side:
      <ul>
        <li><strong>Phases of the Moon:</strong> Crescent Moon -> Half Moon (First Quarter) -> Gibbous Moon -> Full Moon -> Waning phases.</li>
        <li><strong>Purnima (Full Moon Day):</strong> The entire illuminated hemisphere of the Moon faces the Earth; the Moon appears as a complete, glowing circular disk.</li>
        <li><strong>Amavasya (New Moon Day):</strong> The sunlit side of the Moon faces completely away from Earth; the Moon is entirely invisible in the night sky.</li>
      </ul>`,
      rubric: [
        { key: "Explanation of reflected sunlight during orbital motion", marks: "1.5 Marks" },
        { key: "Definition of Purnima (full visible disk)", marks: "1.25 Marks" },
        { key: "Definition of Amavasya (sunlit side facing away, dark sky)", marks: "1.25 Marks" }
      ]
    }
  ],

  // Ch 12: What if it Finishes...?
  12: [
    {
      q: "What products are obtained when crude petroleum is refined in an oil refinery? List six products and their uses.",
      marks: 4,
      ans: `Crude petroleum is refined into multiple essential commercial fuels and materials:
      <ol>
        <li><strong>Petrol:</strong> Fuel for motorcycles, scooters, and cars.</li>
        <li><strong>Diesel:</strong> Fuel for heavy transport (trucks, buses, tractors, trains, generators).</li>
        <li><strong>LPG (Liquefied Petroleum Gas):</strong> Clean cooking gas for home kitchens.</li>
        <li><strong>CNG (Compressed Natural Gas):</strong> Eco-friendly fuel for city buses and auto-rickshaws.</li>
        <li><strong>Kerosene:</strong> Fuel for lamps, pressure stoves, and aviation turbojet fuel.</li>
        <li><strong>Bitumen / Coal Tar & Paraffin Wax:</strong> Surfacing roads, making candles, vaseline, and ointments.</li>
      </ol>`,
      rubric: [
        { key: "Naming 6 petroleum byproducts accurately", marks: "2 Marks" },
        { key: "Stating practical applications for each product", marks: "2 Marks" }
      ]
    },
    {
      q: "What environmental and health problems are caused by smoke and exhaust gases emitted by millions of vehicles in cities?",
      marks: 3,
      ans: `Vehicle exhaust contains toxic pollutants:
      <ul>
        <li><strong>Harmful Gases:</strong> Carbon monoxide, nitrogen oxides, sulphur dioxide, and fine particulate matter (PM2.5).</li>
        <li><strong>Health Impacts:</strong> Inhaling vehicle exhaust causes burning eyes, coughing, bronchitis, asthma attacks, lung infections, and heart stress.</li>
        <li><strong>Environmental Damage:</strong> Exhaust emissions form toxic smog in winter, acid rain, and contribute heavily to global warming and climate change.</li>
      </ul>`,
      rubric: [
        { key: "Listing pollutants (carbon monoxide, PM2.5, nitrogen oxides)", marks: "1.5 Marks" },
        { key: "Health consequences (asthma, lung disease) and urban smog", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Why are solar energy and electric vehicles considered the future of clean transportation? Mention two advantages.",
      marks: 3,
      ans: `Solar energy and electric vehicles (EVs) are clean, sustainable alternatives to fossil fuels:
      <ol>
        <li><strong>Zero Tailpipe Emissions:</strong> Electric vehicles do not burn petrol or diesel and emit zero exhaust smoke, drastically improving city air quality.</li>
        <li><strong>Renewable & Inexhaustible:</strong> Sunlight is free, limitless, and available in abundance in India; unlike petroleum reserves, solar energy will never run out.</li>
      </ol>`,
      rubric: [
        { key: "Zero emission air quality benefit", marks: "1.5 Marks" },
        { key: "Infinite renewable nature of solar power", marks: "1.5 Marks" }
      ]
    }
  ],

  // Ch 13: A Shelter so High!
  13: [
    {
      q: "What is a 'Rebo'? How do the Changpas construct it using yak hair, and how does it protect them in -40°C temperatures?",
      marks: 3,
      ans: `A <strong>Rebo</strong> is the large, conical tent used as a portable shelter by the nomadic Changpa tribe:
      <ul>
        <li>Changpa women weave long strips from coarse, strong yak hair. Nine strips are stitched together and pitched over wooden poles dug into the ground.</li>
        <li>Yak hair is strong, windproof, and traps air pockets, providing exceptional thermal insulation that keeps the interior warm even when outside icy winds howl at 70 km/h in freezing -40°C winter temperatures.</li>
      </ul>`,
      rubric: [
        { key: "Definition of Rebo as woven yak hair cone tent", marks: "1.5 Marks" },
        { key: "Windproof thermal insulation in -40°C weather", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Describe the floating houseboats of Kashmir: Shikara, Donga, and the exquisite Khatamband ceiling woodwork.",
      marks: 4,
      ans: `In the Dal Lake and Jhelum river of Srinagar, Kashmir:
      <ul>
        <li><strong>Shikara:</strong> Sleek, lightweight wooden gondola boats used by tourists for boat rides and by locals for selling flowers, saffron, and vegetables.</li>
        <li><strong>Donga & Houseboats:</strong> Massive floating wooden houses up to 80 feet long and 8 feet wide, complete with bedrooms, dining salons, and running water.</li>
        <li><strong>Khatamband:</strong> Geometric interlocking ceiling wood carvings made from deodar timber fitted together like a jigsaw puzzle without using nails.</li>
      </ul>`,
      rubric: [
        { key: "Description of Shikara passenger/market boats", marks: "1 Mark" },
        { key: "Architecture of 80-foot long floating houseboats/Donga", marks: "1.5 Marks" },
        { key: "Khatamband jigsaw woodwork without nails", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Compare the houses built in the hot desert of Rajasthan with the houses built in the cold desert of Ladakh.",
      marks: 4,
      ans: `<ul>
        <li><strong>Hot Desert (Rajasthan):</strong>
          <ul>
            <li>Walls are very thick, made of mud and plastered with cow dung and clay to prevent scorching solar heat from penetrating indoors.</li>
            <li>Roofs are thatched with thorny bushes (kheep) to allow hot air to escape.</li>
          </ul>
        </li>
        <li><strong>Cold Desert (Ladakh):</strong>
          <ul>
            <li>Walls are made of heavy stone slabs coated with mud and lime to trap body warmth and block freezing sub-zero winds.</li>
            <li>Roofs are flat, constructed from thick deodar and poplar tree trunks, used for sun-drying winter food rations.</li>
          </ul>
        </li>
      </ul>`,
      rubric: [
        { key: "Rajasthan mud walls and thatched brushwood roofs", marks: "2 Marks" },
        { key: "Ladakh thick stone walls and flat wooden storage roofs", marks: "2 Marks" }
      ]
    }
  ],

  // Ch 14: When the Earth Shook!
  14: [
    {
      q: "What is an earthquake? Describe the devastation caused by the 26 January 2001 Gujarat earthquake in Bhuj and Kutch.",
      marks: 4,
      ans: `An <strong>earthquake</strong> is a sudden shaking or trembling of the Earth's crust caused by tectonic movements and release of energy along geological fault lines.
      <br><strong>Devastation in Gujarat (26 January 2001):</strong>
      <ul>
        <li>A massive 7.7 magnitude quake struck while citizens were celebrating Republic Day.</li>
        <li>Thousands of buildings, schools, and hospitals in Bhuj, Ahmedabad, and Kutch collapsed into rubble in seconds.</li>
        <li>Over 20,000 people lost their lives, hundreds of thousands were injured, and millions became homeless in freezing winter.</li>
      </ul>`,
      rubric: [
        { key: "Scientific definition of earthquake from tectonic movements", marks: "1.5 Marks" },
        { key: "Specific impacts on 26 Jan 2001 (Bhuj collapse, casualties, Republic Day)", marks: "2.5 Marks" }
      ]
    },
    {
      q: "What role do rescue and disaster relief teams (NDRF, Army, NGOs, and medical workers) play after an earthquake strikes?",
      marks: 3,
      ans: `Immediately following a seismic catastrophe:
      <ol>
        <li><strong>Search & Rescue:</strong> Specialist teams use sniffer dogs, acoustic listening devices, and hydraulic cutters to rescue trapped survivors from collapsed concrete debris.</li>
        <li><strong>Medical Care:</strong> Field trauma hospitals and doctors provide emergency surgery, blood transfusions, and fracture stabilization.</li>
        <li><strong>Relief Logistics:</strong> NGOs, the army, and government distribute emergency tents, blankets, drinking water packets, and hot meals to prevent epidemics.</li>
      </ol>`,
      rubric: [
        { key: "Search & rescue with sniffer dogs and hydraulic tools", marks: "1.5 Marks" },
        { key: "Medical aid and food/shelter distribution", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Why do engineers recommend building circular or low-rise mud and bamboo houses (Bhungas) in earthquake-prone zones?",
      marks: 3,
      ans: `Traditional circular huts (Bhungas) in Kutch have proven to be exceptionally earthquake-resistant:
      <ul>
        <li>The circular geometry distributes ground seismic shock waves evenly along the curved perimeter, preventing localized stress concentrations that cause square corners to crack.</li>
        <li>Lightweight bamboo, wooden poles, and straw-clay mud walls do not shatter into heavy deadly concrete slabs if they fall, reducing injury risks to zero.</li>
      </ul>`,
      rubric: [
        { key: "Circular geometry distributing seismic energy evenly", marks: "1.5 Marks" },
        { key: "Lightweight flexible materials preventing crushing injuries", marks: "1.5 Marks" }
      ]
    }
  ],

  // Ch 15: Blow Hot, Blow Cold
  15: [
    {
      q: "Why do spectacles or mirror surfaces turn foggy and misty when we breathe on them on a cold morning?",
      marks: 3,
      ans: `The air exhaled from human lungs contains a high percentage of warm water vapour (moisture). On a cold morning, glass lenses or mirror surfaces are very cold. When the warm, humid breath hits the cold glass, the water vapour suddenly cools and <strong>condenses</strong> into millions of microscopic liquid water droplets, forming a foggy, misty layer on the surface.`,
      rubric: [
        { key: "Presence of warm water vapour in exhaled breath", marks: "1.5 Marks" },
        { key: "Condensation into tiny droplets upon touching cold glass", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Name four traditional musical instruments where melodious tunes are created by blowing air columns. How does a flute produce sound?",
      marks: 3,
      ans: `<strong>Four Wind Instruments:</strong>
      <ol>
        <li>Flute (बांसुरी)</li>
        <li>Shehnai (शहनाई)</li>
        <li>Been (बीन)</li>
        <li>Harmonium (हार्मोनियम)</li>
      </ol>
      <strong>How a Flute Produces Sound:</strong> When air is blown across the mouth hole of a hollow bamboo pipe, it sets the air column inside the tube into rapid vibration. By opening and closing different finger holes, the length of the vibrating air column changes, producing different musical pitches and melodies.`,
      rubric: [
        { key: "Listing 4 wind instruments correctly", marks: "1.5 Marks" },
        { key: "Explanation of vibrating air column and finger hole modulation", marks: "1.5 Marks" }
      ]
    },
    {
      q: "How can you make a simple paper whistle or paper blower at home? Describe the steps.",
      marks: 3,
      ans: `To make a simple paper whistle:
      <ol>
        <li>Cut a strip of paper about 10 cm long and 4 cm wide.</li>
        <li>Fold the strip in half lengthwise.</li>
        <li>In the middle of the fold, cut a tiny triangular or semi-circular notch.</li>
        <li>Fold back the two outer flaps, hold the whistle between your fingers with the hole facing outward, and blow air firmly into the slit. The rapid vibration of the paper edges creates a sharp, loud whistling sound.</li>
      </ol>`,
      rubric: [
        { key: "Folding and cutting the paper strip with a notch", marks: "1.5 Marks" },
        { key: "Mechanism of air blowing creating edge vibration", marks: "1.5 Marks" }
      ]
    }
  ],

  // Ch 16: Who will do this Work?
  16: [
    {
      q: "What does 'Dignity of Labour' mean? Why is every profession—from a sanitation worker to an engineer—equally essential for society?",
      marks: 3,
      ans: `<strong>Dignity of Labour</strong> means that all forms of honest work are honourable, valuable, and deserve equal human respect, with no job considered superior or inferior based on prejudice.
      <br>If engineers design bridges, sanitation workers keep towns free from deadly cholera and plague epidemics. If sanitation workers stopped cleaning for just one week, cities would overflow with garbage and disease. Therefore, every job that serves society has equal dignity.`,
      rubric: [
        { key: "Definition of dignity of labour and equal human respect", marks: "1.5 Marks" },
        { key: "Crucial role of sanitation in public disease prevention", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Who was Dr. Bhimrao Ramji Ambedkar? What historic provisions did he incorporate in the Indian Constitution to fight untouchability?",
      marks: 4,
      ans: `<strong>Dr. B.R. Ambedkar</strong> (Babasaheb) was the Chief Architect of the Constitution of India, a visionary legal scholar, and a champion of human rights from the Mahar community who suffered severe caste discrimination in childhood.
      <br><strong>Constitutional Provisions:</strong>
      <ul>
        <li><strong>Article 14:</strong> Guarantees equality before the law for all citizens irrespective of religion, caste, gender, or birth.</li>
        <li><strong>Article 17:</strong> Completely abolishes the practice of <em>Untouchability</em> in any form and declares it a punishable criminal offense.</li>
        <li>Prohibited discrimination in public places, temples, schools, and water wells.</li>
      </ul>`,
      rubric: [
        { key: "Identification of Dr. Ambedkar as father of the Constitution", marks: "1.5 Marks" },
        { key: "Article 17 abolition of untouchability as a punishable crime", marks: "1.5 Marks" },
        { key: "Equal access to public facilities without caste discrimination", marks: "1 Mark" }
      ]
    },
    {
      q: "How can every household practice waste segregation (wet vs dry waste) at home to help municipal sanitation workers?",
      marks: 3,
      ans: `Households should maintain two separate color-coded waste dustbins:
      <ul>
        <li><strong>Green Bin (Wet Biodegradable Waste):</strong> Fruit peels, vegetable trimmings, leftover food, tea leaves, and eggshells. This waste can be turned into rich organic compost.</li>
        <li><strong>Blue Bin (Dry Recyclable Waste):</strong> Paper, cardboard, plastic bottles, metal cans, glass, and wrappers. This waste is recycled by scrap industries.</li>
      </ul>
      Segregating at source prevents sanitation workers from having to manually sift through hazardous, rotting garbage with bare hands.`,
      rubric: [
        { key: "Green bin for biodegradable wet food waste (composting)", marks: "1.5 Marks" },
        { key: "Blue bin for dry recyclable materials & worker safety", marks: "1.5 Marks" }
      ]
    }
  ],

  // Ch 17: Across the Wall
  17: [
    {
      q: "How did Coach Noor Khan inspire and train the young girls of the Nagpada Basketball Association?",
      marks: 3,
      ans: `Coach Noor Khan treated girls and boys with complete equality and professional discipline:
      <ul>
        <li>He taught them foundational dribbling, passing, and shooting drills with rigorous physical conditioning.</li>
        <li>He constantly boosted their confidence, telling them: <em>"Play like a player, not like a girl."</em></li>
        <li>He convinced skeptical, orthodox parents that girls from modest slum households could excel in competitive sports and bring pride to their families and community.</li>
      </ul>`,
      rubric: [
        { key: "Equal training and professional athletic discipline", marks: "1.5 Marks" },
        { key: "Building psychological confidence and convincing parents", marks: "1.5 Marks" }
      ]
    },
    {
      q: "What life skills and psychological strengths do children develop by actively participating in team sports?",
      marks: 3,
      ans: `Participating in sports develops essential lifelong competencies:
      <ol>
        <li><strong>Physical Fitness & Stamina:</strong> Strengthens bones, heart, and motor coordination.</li>
        <li><strong>Discipline & Time Management:</strong> Balancing rigorous practice schedules with school homework.</li>
        <li><strong>Resilience & Emotional Control:</strong> Learning to accept defeat gracefully, analyzing mistakes, and persevering to win.</li>
        <li><strong>Cooperation:</strong> Working harmoniously with diverse individuals towards a shared team goal.</li>
      </ol>`,
      rubric: [
        { key: "Physical fitness and discipline", marks: "1.5 Marks" },
        { key: "Emotional resilience, handling defeat, and cooperative teamwork", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Why is it unfair to treat boys and girls differently at home regarding household chores and sports opportunities?",
      marks: 3,
      ans: `Treating boys and girls unequally restricts human potential and reinforces harmful gender stereotypes:
      <ul>
        <li>Both boys and girls have equal mental, intellectual, and physical capabilities to achieve excellence in athletics, sciences, and arts.</li>
        <li>Household duties like cooking, cleaning, and washing are essential life skills that every person must learn regardless of gender.</li>
        <li>Denying girls the opportunity to play outside hampers their health, independence, and career horizons.</li>
      </ul>`,
      rubric: [
        { key: "Equal capabilities of boys and girls in all fields", marks: "1.5 Marks" },
        { key: "Household chores as universal life skills for everyone", marks: "1.5 Marks" }
      ]
    }
  ],

  // Ch 18: No Place for Us?
  18: [
    {
      q: "Describe the traumatic emotional and physical impact of forced displacement on tribal communities when dams or factories are built.",
      marks: 4,
      ans: `Forced displacement shatters the entire social, economic, and cultural fabric of tribal families:
      <ul>
        <li><strong>Loss of Ancestral Heritage:</strong> Villagers leave behind sacred riverbanks, cremation grounds of ancestors, and ancient forests where their families lived for generations.</li>
        <li><strong>Economic Ruin:</strong> Independent farmers become landless casual day-labourers in cities, struggling to pay for water, electricity, food, and rent.</li>
        <li><strong>Cultural Alienation:</strong> Folk songs, herbal medicinal knowledge, and community solidarity disappear in crowded urban slums where neighbours do not know or trust each other.</li>
      </ul>`,
      rubric: [
        { key: "Severance from ancestral land and sacred natural sites", marks: "1.5 Marks" },
        { key: "Economic descent into landless wage exploitation in slums", marks: "1.5 Marks" },
        { key: "Loss of indigenous culture, songs, and communal trust", marks: "1 Mark" }
      ]
    },
    {
      q: "What fundamental facilities should the government ensure are fully established before relocating displaced families?",
      marks: 3,
      ans: `Before any relocation takes place, the government must provide:
      <ol>
        <li>Fertile, irrigable agricultural land equal in productivity to what was submerged.</li>
        <li>Permanent pucca houses equipped with free potable water taps, electricity connections, and sanitation drainage.</li>
        <li>Proper government schools, primary health clinics, and accessible all-weather roads.</li>
        <li>Guaranteed rehabilitation employment or livelihood training for youth.</li>
      </ol>`,
      rubric: [
        { key: "Fertile agricultural land and permanent pucca housing", marks: "1.5 Marks" },
        { key: "Schools, healthcare, sanitation, and livelihood rehabilitation", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Compare the environmental sounds and air quality of Khedi village with the urban slums of Mumbai.",
      marks: 3,
      ans: `<ul>
        <li><strong>Khedi Village:</strong> Clean, fresh mountain air smelling of wet earth and pine trees. Sounds of rushing river water, leaves rustling in the breeze, birds singing melodiously, and children laughing.</li>
        <li><strong>Mumbai Slums:</strong> Air polluted with vehicular exhaust smoke, foul stench from open drains, burning plastic, and deafening traffic horns, train whistles, and factory sirens.</li>
      </ul>`,
      rubric: [
        { key: "Sensory description of Khedi's pure air and natural sounds", marks: "1.5 Marks" },
        { key: "Sensory description of urban slum pollution, stench, and noise", marks: "1.5 Marks" }
      ]
    }
  ],

  // Ch 19: A Seed tells a Farmer's Story
  19: [
    {
      q: "Why did modern chemical farming, which initially brought high profits, ultimately lead Hasmukh into severe debt?",
      marks: 4,
      ans: `Hasmukh's modern agriculture entered an unsustainable downward spiral:
      <ul>
        <li><strong>Skyrocketing Input Costs:</strong> Hybrid seeds cannot be saved from the harvest; new seeds, chemical fertilizers, and synthetic pesticides had to be bought from companies every single season at rising prices.</li>
        <li><strong>Depletion of Natural Soil Fertility:</strong> Chemical fertilizers destroyed soil microorganisms and earthworms, turning fertile soil hard and dead. Every year, more and more chemicals were needed to harvest the same quantity of crop.</li>
        <li><strong>Water Table Collapse:</strong> Electric borewells drained underground aquifers dry, forcing the installation of deeper, costlier submersible pumps.</li>
        <li><strong>Debt Trap:</strong> When crop market prices crashed or pests destroyed crops, farm income could not even pay the interest on bank tractor and pump loans.</li>
      </ul>`,
      rubric: [
        { key: "Rising costs of non-reusable hybrid seeds and chemicals", marks: "1.5 Marks" },
        { key: "Destruction of earthworms and soil fertility exhaustion", marks: "1.5 Marks" },
        { key: "Groundwater depletion and loan default debt trap", marks: "1 Mark" }
      ]
    },
    {
      q: "What is 'Undhiyu'? How was it traditionally cooked by Gujarati farming families during the winter harvest?",
      marks: 3,
      ans: `<strong>Undhiyu</strong> is a famous Gujarati winter harvest specialty:
      <ul>
        <li>Fresh seasonal vegetables (broad beans, baby eggplants, potatoes, sweet potatoes, yam, fenugreek dumplings / muthia) are tossed with aromatic spices and fresh coriander.</li>
        <li>The ingredients are packed into an earthen clay pot (matka), and its mouth is sealed tightly with dough.</li>
        <li>The pot is placed <strong>upside down ('Undhu')</strong> inside a pit filled with glowing hot wood coals. The vegetables cook slowly in their own steam, developing a divine smoky flavor, served with bajra rotis and fresh butter.</li>
      </ul>`,
      rubric: [
        { key: "Composition of winter seasonal vegetables and spices", marks: "1.5 Marks" },
        { key: "Inverted sealed clay pot slow-cooking over coals (Undhu meaning upside down)", marks: "1.5 Marks" }
      ]
    },
    {
      q: "What are indigenous (desi) heirloom seeds, and why are agricultural scientists urging farmers to conserve traditional seed banks?",
      marks: 3,
      ans: `<strong>Indigenous (Desi) Seeds</strong> are traditional crop varieties nurtured and selected by generations of farmers over hundreds of years:
      <ul>
        <li>They possess natural genetic resilience against local droughts, floods, and native insect attacks without requiring synthetic chemical sprays.</li>
        <li>They can be harvested, dried, and replanted every year for free.</li>
        <li>Conserving heirloom seed banks preserves crop biodiversity, food security, and regional culinary heritage.</li>
      </ul>`,
      rubric: [
        { key: "Definition of traditional heirloom seeds and self-replacing nature", marks: "1.5 Marks" },
        { key: "Natural pest/climate resistance and biodiversity preservation", marks: "1.5 Marks" }
      ]
    }
  ],

  // Ch 20: Whose Forests?
  20: [
    {
      q: "Why did Suryamani say: 'Forests are our collective bank (Sajha Bank)'? How do tribal beliefs prevent overexploitation of nature?",
      marks: 3,
      ans: `Suryamani explained that for Adivasis, the forest is not a private money-making resource for one individual to plunder. It is a shared community heritage that belongs equally to everyone, including future generations:
      <ul>
        <li>Tribals take only what they immediately require for survival—firewood, edible roots, fallen leaves, and medicinal herbs.</li>
        <li>They never cut green flowering trees, kill pregnant animals, or exhaust natural reserves. Unlike commercial timber corporations, tribals live as caretakers of the forest.</li>
      </ul>`,
      rubric: [
        { key: "Concept of collective intergenerational common bank (Sajha Bank)", marks: "1.5 Marks" },
        { key: "Harvesting only sustainable needs without commercial overexploitation", marks: "1.5 Marks" }
      ]
    },
    {
      q: "What is the 'Cheraw' dance performed in Mizoram? On what occasion is it celebrated?",
      marks: 3,
      ans: `The <strong>Cheraw Dance</strong> is the celebrated traditional folk dance of Mizoram performed during the post-harvest festival:
      <ul>
        <li>Pairs of men sit facing each other on the ground, holding long bamboo poles. They beat the bamboos on the ground and against each other to a rhythmic musical beat.</li>
        <li>Women dressed in colorful traditional attire (Puan) step gracefully in and out of the closing and opening bamboo pairs, keeping perfect rhythmic synchronization with the beats.</li>
      </ul>`,
      rubric: [
        { key: "Celebration of post-harvest festival in Mizoram", marks: "1 Mark" },
        { key: "Rhythmic clapping of bamboo poles by men and stepping by women", marks: "2 Marks" }
      ]
    },
    {
      q: "Explain why clearing natural forests to build commercial monoculture eucalyptus plantations harms biodiversity and groundwater.",
      marks: 3,
      ans: `A natural forest contains hundreds of diverse plant species, giant canopy trees, creepers, and shrubs that shelter diverse birds, mammals, and pollinating insects:
      <ul>
        <li>Commercial eucalyptus monocultures support zero wildlife food or nesting sites.</li>
        <li>Eucalyptus trees consume colossal quantities of groundwater through taproots, causing local wells and streams to dry up completely.</li>
        <li>Their fallen leaves prevent native shrubs from growing, destroying topsoil ecology.</li>
      </ul>`,
      rubric: [
        { key: "Contrast between multi-species biodiverse forests vs monocultures", marks: "1.5 Marks" },
        { key: "Massive groundwater depletion and soil damage by eucalyptus", marks: "1.5 Marks" }
      ]
    }
  ],

  // Ch 21: Like Father, Like Daughter
  21: [
    {
      q: "Is Polio hereditary? A relative told Saroja that her newborn might catch polio because her aunt had polio. Is this scientifically true? What causes polio, and how can it be prevented?",
      marks: 3,
      ans: `No, this is completely false scientifically.
      <ul>
        <li><strong>Polio is NOT hereditary:</strong> Polio is an infectious disease caused by a microscopic virus (Poliovirus), not by parental genes. It never passes down through family lineage or birth traits.</li>
        <li><strong>Transmission:</strong> The poliovirus spreads through contaminated drinking water, unhygienic food, or dirty hands, attacking the spinal cord and nervous system, leading to paralysis of limbs (most commonly legs).</li>
        <li><strong>Prevention:</strong> Polio can be completely prevented through the <strong>Pulse Polio oral vaccine drops (दो बूंद जिंदगी की)</strong> given to every child under five years of age.</li>
      </ul>`,
      rubric: [
        { key: "Refutation of hereditary myth and identifying viral cause", marks: "1 Mark" },
        { key: "Mode of transmission through contaminated water/food", marks: "1 Mark" },
        { key: "Prevention via Pulse Polio oral vaccination drops", marks: "1 Mark" }
      ]
    },
    {
      q: "Saroja and Suvasini are identical twins who look completely alike. Why can Saroja sing Tamil songs and speak Marathi fluently while Suvasini cannot? How does environment shape abilities alongside inherited traits?",
      marks: 4,
      ans: `Although Saroja and Suvasini are identical twins sharing identical genetic traits from their parents (giving them matching faces, hair, and eye shape), their abilities and language skills developed differently because of their <strong>upbringing environment</strong>:
      <ul>
        <li><strong>Saroja's Environment:</strong> Saroja was brought up by her uncle in an environment where people spoke Marathi and listened to classical Tamil music, so she acquired fluency in Marathi and learned to sing songs through daily listening and practice.</li>
        <li><strong>Suvasini's Environment:</strong> Suvasini lived in a different home where these languages and music were not practiced, so she never acquired those specific skills.</li>
        <li><strong>Scientific Conclusion:</strong> Physical traits (height, facial features, hair type) are inherited from biological parents, whereas languages, arts, sports, and intellectual skills are <em>acquired abilities</em> shaped by environment, schooling, practice, and social exposure.</li>
      </ul>`,
      rubric: [
        { key: "Explanation of identical genetic origin for physical features", marks: "1.5 Marks" },
        { key: "Impact of differing upbringing environments on language and singing", marks: "1.5 Marks" },
        { key: "Conclusion distinguishing inherited traits from acquired skills", marks: "1 Mark" }
      ]
    },
    {
      q: "List four physical traits that children commonly inherit from their parents or grandparents, and three skills or habits that must be acquired through practice.",
      marks: 3,
      ans: `<ul>
        <li><strong>Four Inherited Physical Traits:</strong>
          <ol>
            <li>Colour of eyes (e.g. brown, black, hazel).</li>
            <li>Hair texture (curly, wavy, or silky straight).</li>
            <li>Attached or free earlobes.</li>
            <li>Facial dimples when smiling, or distinctive shape of nose and chin.</li>
          </ol>
        </li>
        <li><strong>Three Acquired Skills/Habits:</strong>
          <ol>
            <li>Riding a bicycle or swimming.</li>
            <li>Reading, writing, and speaking languages.</li>
            <li>Playing a musical instrument (harmonium, flute, guitar).</li>
          </ol>
        </li>
      </ul>`,
      rubric: [
        { key: "Four accurate inherited biological traits", marks: "1.5 Marks" },
        { key: "Three accurate acquired behavioural/motor skills", marks: "1.5 Marks" }
      ]
    }
  ],

  // Ch 22: On the Move Again
  22: [
    {
      q: "Why is there no farming work in Dhanu's village from Dussehra until the next rainy season? What modern irrigation methods could help farmers grow crops throughout the year?",
      marks: 3,
      ans: `In Dhanu's village, agriculture is almost entirely dependent on seasonal monsoon rains (rainfed farming). Once the rainy season ends after Dussehra, there is no rain for six months, and the soil dries up completely with no local reservoirs or canals.
      <br><strong>Modern irrigation solutions to enable round-the-year cultivation:</strong>
      <ul>
        <li>Construction of canal networks connecting nearby perennial rivers.</li>
        <li>Installing deep tube wells and solar-powered borewell pumps.</li>
        <li>Building village check-dams, stepwells, and percolation ponds for rainwater harvesting.</li>
        <li>Adopting drip irrigation and sprinkler systems to cultivate low-water winter crops like mustard, gram, and vegetables.</li>
      </ul>`,
      rubric: [
        { key: "Explanation of rainfed farming dependency ending at Dussehra", marks: "1.5 Marks" },
        { key: "Canal, tube well, and drip irrigation solutions for year-round crops", marks: "1.5 Marks" }
      ]
    },
    {
      q: "When whole families migrate for six months to work in sugarcane fields, what challenges do the elderly grandparents and young infants left behind in the village face?",
      marks: 3,
      ans: `The seasonal exodus leaves vulnerable family members in extreme hardship:
      <ul>
        <li><strong>Isolation and Lack of Care:</strong> Frail, elderly grandparents who cannot walk or work are left alone in deserted village houses. When they fall ill, there is no one nearby to cook food, fetch drinking water, or take them to a doctor.</li>
        <li><strong>Emotional Distress:</strong> Grandparents deeply miss their children and grandchildren, suffering from loneliness and depression.</li>
        <li><strong>Infant Neglect:</strong> Infants carried by mothers to the sugarcane fields are exposed to stinging cold, dust, smoke from sugar mills, and lack of clean drinking water, leading to frequent illnesses.</li>
      </ul>`,
      rubric: [
        { key: "Physical difficulties and healthcare crisis for elderly left alone", marks: "1.5 Marks" },
        { key: "Emotional distress and health hazards for infants in harsh field conditions", marks: "1.5 Marks" }
      ]
    },
    {
      q: "Compare Dhanu's family life in their village home with their life in the temporary huts ('jhuggi' made of sugarcane leaves) near the sugar factory.",
      marks: 4,
      ans: `Comparison between Village Life and Migrant Camp Life:
      <table style="width:100%;border-collapse:collapse;margin-top:8px;font-size:0.88rem;">
        <thead>
          <tr style="background:#ecfdf5;color:#065f46;border-bottom:2px solid #10b981;">
            <th style="padding:8px;text-align:left;border:1px solid #cbd5e1;">Aspect</th>
            <th style="padding:8px;text-align:left;border:1px solid #cbd5e1;">Life in Native Village</th>
            <th style="padding:8px;text-align:left;border:1px solid #cbd5e1;">Life at Sugarcane Factory Camp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;font-weight:700;border:1px solid #cbd5e1;">Shelter</td>
            <td style="padding:8px;border:1px solid #cbd5e1;">Permanent, sturdy ancestral house with separate rooms and courtyard.</td>
            <td style="padding:8px;border:1px solid #cbd5e1;">Fragile makeshift huts ('kopas') made of dried sugarcane leaves and bamboo.</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:700;border:1px solid #cbd5e1;">Daily Food</td>
            <td style="padding:8px;border:1px solid #cbd5e1;">Fresh home-cooked meals, milk, festive sweets like Puran Poli during Dussehra.</td>
            <td style="padding:8px;border:1px solid #cbd5e1;">Dry rotis cooked early morning over smoky wood fires, eaten cold with jaggery or chilli paste.</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:700;border:1px solid #cbd5e1;">Schooling</td>
            <td style="padding:8px;border:1px solid #cbd5e1;">Children attend regular village government school daily with friends.</td>
            <td style="padding:8px;border:1px solid #cbd5e1;">Schooling is completely halted; children help load heavy cane bundles.</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:700;border:1px solid #cbd5e1;">Working Hours</td>
            <td style="padding:8px;border:1px solid #cbd5e1;">Daytime farming with leisure, festival celebrations, and family bonding.</td>
            <td style="padding:8px;border:1px solid #cbd5e1;">Gruelling 16-hour shifts from 4 AM, standing in long factory queues at night.</td>
          </tr>
        </tbody>
      </table>`,
      rubric: [
        { key: "Contrast in shelter and housing quality", marks: "1 Mark" },
        { key: "Contrast in food nutrition and daily meals", marks: "1 Mark" },
        { key: "Contrast in children's education and schooling continuity", marks: "1 Mark" },
        { key: "Contrast in working conditions and daily routine", marks: "1 Mark" }
      ]
    }
  ]
};

// Competency-Based Case Studies (CBQ) for Chapters 9 to 22
const cbqByChapter = {
  9: {
    type: "High-Altitude Teamwork & Leadership",
    title: "Brigadier Gyan Singh's Camp & Dealing with Blizzards",
    story: "During a harsh winter expedition in the Himalayas, a blizzard hit Camp 4 at 21,000 feet. Temperatures plummeted to -20°C, and two members developed severe hypothermia. As group leader, Sangeeta had to coordinate emergency shelters, warmth, and evacuation.",
    q: "What crucial leadership decisions should a mountaineering leader take during extreme weather emergencies to protect team lives?",
    ans: `A mountaineering leader must prioritize human safety over conquering the summit:
    1. <strong>Maintain Calm and Morale:</strong> Avoid panic, gather all members, and keep everyone talking to prevent hypothermia drowsiness.
    2. <strong>Secure Immediate Shelter:</strong> Anchor two-layer nylon tents firmly using pitons and rocks to resist howling blizzard winds.
    3. <strong>Immediate First Aid for Hypothermia:</strong> Remove wet clothing, wrap victims in dry sleeping bags, share body warmth, and provide hot energy drinks (tea with glucose/chocolate).
    4. <strong>Timely Retreat Call:</strong> A courageous leader knows when to abort an ascent and safely guide members back down to lower base camp before oxygen supplies run out.`,
    marking: "2 Marks for emergency shelter and hypothermia response + 3 Marks for leadership qualities and timely retreat decision = 5 Marks"
  },
  10: {
    type: "Heritage Conservation & Acoustic Architecture",
    title: "Acoustics & Defense Engineering of Golconda Fort",
    story: "While visiting Golconda Fort in Hyderabad, school students observed that a soft hand-clap at Fateh Darwaza could be heard clearly at the Bala Hissar pavilion located nearly 1 km away on the hilltop. However, some tourists were seen carving names on ancient stone walls with keys.",
    q: "Explain the engineering purpose behind Golconda's acoustic design and describe why defacing historical monuments with graffiti is a punishable offense.",
    ans: `<strong>Purpose of Acoustic Engineering:</strong>
    The Qutb Shahi rulers engineered the dome acoustics as an early military warning system. A guard clapping or beating a drum at the entrance gate instantly alerted the king and military commanders at the summit pavilion about approaching enemy attacks or treason, without requiring electric wires.
    
    <strong>Civic Duty to Protect Monuments:</strong>
    Historical monuments represent centuries of national culture, artistic mastery, and scientific heritage. Carving graffiti permanently disfigures priceless heritage stones, encourages further vandalism, and violates the Ancient Monuments and Archaeological Sites and Remains Act, which prescribes heavy fines and imprisonment.`,
    marking: "2.5 Marks for acoustic military warning explanation + 2.5 Marks for monument preservation ethics and legal penalties = 5 Marks"
  },
  11: {
    type: "Space Exploration & Physics in Microgravity",
    title: "Life Aboard the International Space Station (ISS)",
    story: "Astronaut Sunita Williams spent more than 195 days in space aboard the International Space Station orbiting Earth at 28,000 km/h. She described that in space, water does not flow into a glass; it floats as wobbling blobs that astronauts catch with tissues.",
    q: "Explain why water floats in blobs in space and describe two physical exercises astronauts must perform daily to prevent muscle and bone loss in zero gravity.",
    ans: `<strong>Why water floats in spherical blobs:</strong>
    In orbit, the space station is in perpetual free-fall around Earth, producing a state of weightlessness (microgravity). Without gravity pulling liquid downward, water molecules are held together exclusively by their internal <em>surface tension</em>, naturally pulling the liquid into the shape with the minimum surface area—a sphere.
    
    <strong>Essential Daily Exercises in Space:</strong>
    1. <em>Stationary Treadmill with Harness:</em> Astronauts strap themselves with bungee cords to a treadmill and run 1-2 hours daily to provide impact force to leg bones.
    2. <em>Resistance Exercise Device (ARED):</em> Mimics weightlifting using vacuum cylinders to maintain bone density and prevent severe muscle atrophy in microgravity.`,
    marking: "2.5 Marks for surface tension and weightlessness explanation + 2.5 Marks for treadmill and resistance exercise methods = 5 Marks"
  },
  12: {
    type: "Energy Transition & Environmental Economics",
    title: "Petroleum Depletion & Sustainable Urban Mobility",
    story: "A traffic jam at an intersection in New Delhi caused thick black smoke, blaring horns, and stinging eyes among school children waiting in a bus. A digital board nearby showed that petroleum reserves will last for barely 40-50 more years at current consumption rates.",
    q: "Explain why petroleum is called a non-renewable fossil fuel and propose three sustainable alternatives for urban public transportation.",
    ans: `<strong>Why Petroleum is Non-Renewable:</strong>
    Petroleum was formed millions of years ago from the decomposed remains of prehistoric marine plants and animals buried under extreme heat and pressure beneath tectonic layers. Once extracted, nature cannot replenish these reserves in a human timeframe.
    
    <strong>Three Sustainable Urban Transportation Solutions:</strong>
    1. <strong>Electric Mass Transit:</strong> Metro rail networks and electric buses (e-buses) powered by solar or wind grid electricity produce zero street-level exhaust.
    2. <strong>Compressed Natural Gas (CNG) & Green Hydrogen:</strong> Burns far cleaner than petrol and diesel, releasing minimal particulate soot.
    3. <strong>Pedestrian & Bicycle Green Corridors:</strong> Developing safe cycling tracks and carpooling incentives to drastically reduce private automobile use.`,
    marking: "2 Marks for fossil fuel genesis explanation + 3 Marks for three distinct sustainable transit alternatives = 5 Marks"
  },
  13: {
    type: "Indigenous Architecture & Climate Adaptation",
    title: "Changpa Nomads & Pashmina Goat Rearing at 5,000 Metres",
    story: "Gaurav Jani rode his motorcycle 'Loner' to the high cold desert of Changthang in Ladakh at 5,000 metres. He met the Changpa tribe, who live in yak-hair tents called 'Rebo' alongside their special Changthangi goats that produce world-renowned fine Pashmina wool.",
    q: "Why do Pashmina goats produce softer and warmer wool only when grazing at extreme freezing altitudes, and how is authentic Pashmina spun and woven?",
    ans: `<strong>Biological Adaptation to Extreme Cold:</strong>
    At freezing winter temperatures dipping to -40°C on Ladakh plateaus, Changthangi goats naturally grow an ultra-fine, warm undercoat beneath their coarse outer hair to insulate their bodies from hypothermia. This underfur is six times finer than human hair (approx. 12-15 microns) and cannot be grown in warmer lowlands.
    
    <strong>Processing and Weaving:</strong>
    In summer, the fine underfur is gently combed out from the goats. Because the strands are too delicate for mechanical factory machines, master Kashmiri weavers hand-spin the thread on charkhas and hand-weave it on traditional wooden looms in Srinagar. It takes roughly <strong>250 hours of hand-weaving</strong> to produce one plain Pashmina shawl.`,
    marking: "2.5 Marks for biological altitude adaptation + 2.5 Marks for hand-combing and 250-hour loom weaving process = 5 Marks"
  },
  14: {
    type: "Disaster Preparedness & Seismology",
    title: "The 26 January 2001 Gujarat Earthquake & Seismic Safety",
    story: "On Republic Day 2001, a catastrophic earthquake measuring 7.7 on the Richter scale struck Bhuj and Kutch in Gujarat, flattening thousands of brick buildings within minutes. In contrast, many traditional circular mud houses with conical thatch roofs ('Bhunga') survived with minimal damage.",
    q: "Explain why traditional circular Bhunga houses resisted earthquake shocks better than unreinforced brick buildings, and list three emergency actions to take during an earthquake.",
    ans: `<strong>Why Circular Bhungas Resisted Earthquake Shocks:</strong>
    The circular shape of traditional Kutch Bhungas has no right-angled corners where stress concentrates. Seismic shockwaves distribute evenly across the continuous curved mud-and-bamboo perimeter, allowing the structure to flex without wall collapse. In contrast, rigid rectangular brick walls with heavy cement roofs shattered under lateral ground shaking.
    
    <strong>Three Essential Earthquake Emergency Actions:</strong>
    1. <em>Drop, Cover, and Hold On:</em> If indoors, drop beneath a sturdy wooden table or desk and hold onto its legs until shaking completely stops.
    2. <em>Stay Clear of Heavy Overhead Objects:</em> Move away from glass windows, chandeliers, bookcases, and brick parapets.
    3. <em>Move to Clear Open Ground:</em> If outdoors, move swiftly into an open playground or field away from tall buildings, electric power lines, and billboards.`,
    marking: "2.5 Marks for circular structural engineering analysis + 2.5 Marks for three scientific safety steps = 5 Marks"
  },
  15: {
    type: "Thermal Physics of Respiration",
    title: "Dr. Zakir Husain's Fable of the Woodcutter & Miya Balishtiya",
    story: "In the famous fable written by former President of India Dr. Zakir Husain, a tiny man named Miya Balishtiya was perplexed watching a woodcutter blow on his frozen fingers to warm them, and later blow on a boiling hot potato to cool it down.",
    q: "Explain the scientific reason why exhaled breath warms cold hands in winter yet cools down hot food or tea.",
    ans: `The direction of heat transfer depends on the temperature difference between our breath and the target object:
    <ul>
      <li><strong>Warming Cold Hands:</strong> The normal internal human body temperature is approximately 37°C. On freezing winter mornings when ambient air and finger skin drop to 10°C-15°C, exhaled breath is significantly warmer than our fingers. Heat transfers from the warm breath to cold skin through conduction and convection, providing warmth.</li>
      <li><strong>Cooling Boiling Potatoes:</strong> A boiling hot potato or fresh cup of tea has a temperature of 80°C to 100°C, which is much hotter than our 37°C breath. When we blow air over the potato, our cooler breath rapidly replaces the layer of hot steam above it, accelerating heat dissipation and evaporative cooling, bringing the food down to edible temperature.</li>
    </ul>`,
    marking: "2.5 Marks for thermodynamic explanation of warming cold hands + 2.5 Marks for cooling hot food via convective steam replacement = 5 Marks"
  },
  16: {
    type: "Social Justice & Mechanized Sanitation",
    title: "Eradicating Manual Scavenging & Upholding Dignity of Labour",
    story: "Mahatma Gandhi and Dr. B.R. Ambedkar strongly condemned the caste-based practice of forcing specific communities to clean dry latrines and carry human excreta. In modern times, the government has banned manual scavenging and promotes robotic sewer cleaners like 'Bandicoot'.",
    q: "Why was manual scavenging an inhumane practice, and how does modern robotic technology uphold human dignity and worker safety?",
    ans: `<strong>Why Manual Scavenging is Inhumane:</strong>
    Manual scavenging forced marginalized caste groups to enter toxic underground sewer lines and septic tanks without protective gear, inhaling deadly sewer gases (methane, hydrogen sulphide) that caused fatal asphyxiation and chronic lung diseases. It reinforced untouchability and violated the fundamental constitutional right to life and dignity (Article 21).
    
    <strong>Role of Robotic Mechanization:</strong>
    1. <em>Zero Human Entry:</em> Modern robotic units (such as 'Bandicoot') use multi-axis robotic arms and high-resolution cameras to break sludge and extract clogs remotely.
    2. <em>Rehabilitation into Skilled Technicians:</em> Sanitation workers are trained to operate robotic control panels, transitioning from hazardous manual labour to respected technological professionals.`,
    marking: "2.5 Marks for social justice and health hazard critique + 2.5 Marks for robotic sewer technology and dignity of labour = 5 Marks"
  },
  17: {
    type: "Gender Equality & Youth Sports Development",
    title: "Nagpada Basketball Association & Breaking Gender Barriers",
    story: "Afsana Mansuri, a young girl from a poor Mumbai slum whose mother worked as a domestic help, faced intense social opposition when she wanted to play basketball. With coach Noor Khan's guidance, Afsana and her teammates broke social stereotypes to become district champions.",
    q: "What social and family obstacles do young girls from underprivileged backgrounds face in sports, and how does team sports empower young women?",
    ans: `<strong>Obstacles Faced by Young Girls:</strong>
    1. <em>Gender Stereotypes:</em> Society often expects girls to focus exclusively on cooking, cleaning, and sibling care, viewing competitive sports as a male domain.
    2. <em>Safety Concerns & Lack of Equipment:</em> Families worry about sports attire (shorts), late evening practices, and lack of money to buy professional sports shoes.
    
    <strong>Empowerment Through Team Sports:</strong>
    - <em>Confidence and Leadership:</em> Sports teach girls to voice their opinions, strategize under pressure, and lead teams fearlessly.
    - <em>Team Spirit over Ego:</em> Playing together teaches mutual respect, cooperation, and resilience against failure.
    - <em>Breaking Social Taboos:</em> Their success inspires entire communities to encourage daughters to pursue sports and higher education.`,
    marking: "2.5 Marks for identifying socio-cultural obstacles + 2.5 Marks for leadership and community transformation impact = 5 Marks"
  },
  18: {
    type: "Environmental Displacement & Urban Rehabilitation",
    title: "Tehri Dam Construction & The Displacement of Khedi Village",
    story: "Jatrya Bhai's peaceful riverbank village of Khedi was submerged under a massive reservoir created by a hydroelectric dam. Although promised agricultural land and modern schools in Sinduri, the displaced villagers received barren stony plots, expensive electricity bills, and hostility in Mumbai.",
    q: "Analyze the ethical, social, and economic consequences of large development projects like dams on indigenous rural populations.",
    ans: `<strong>Consequences of Forced Displacement:</strong>
    1. <strong>Loss of Culture and Identity:</strong> Villages like Khedi lived in harmony with rivers and forests for centuries. Uprooting them destroys traditional songs, folk knowledge, and community solidarity.
    2. <strong>Flawed Rehabilitation Promises:</strong> Displaced families are often allotted unfertile rocky land without functioning schools, hospitals, or irrigation, sinking them into immediate poverty.
    3. <strong>Urban Alienation and Poverty:</strong> When forced to migrate to mega-cities like Mumbai, skilled rural farmers become landless labourers living in cramped, unhygienic slums, struggling to afford basic drinking water and electricity.
    
    <strong>Policy Imperative:</strong>
    Development projects must obtain informed consent, provide genuine fertile land compensation, and ensure displaced communities receive direct shares in generated electricity and profits.`,
    marking: "2 Marks for loss of community culture + 2 Marks for rehabilitation failures + 1 Mark for equitable policy recommendation = 5 Marks"
  },
  19: {
    type: "Agroecology & Sustainable Farming",
    title: "Damjibhai's Traditional Farming vs Hasmukh's Chemical Agriculture",
    story: "An old Bajra seed reminisces how Damjibhai grew mixed crops with cow dung manure, neem leaf pest repellent, and community seed sharing. His son Hasmukh switched to expensive hybrid seeds, synthetic urea, borewell irrigation, and bank loans, leaving his grandson Paresh trapped in debt.",
    q: "Contrast the ecological sustainability of Damjibhai's traditional farming with Hasmukh's modern chemical farming, explaining why chemical farming leads to long-term soil degradation and financial debt.",
    ans: `<strong>Ecological Contrast:</strong>
    <ul>
      <li><strong>Damjibhai's Organic System:</strong> Used heirloom seeds, cow dung compost, and neem leaves. Earthworms aerated the soil, preserving moisture and biological fertility for decades at virtually zero monetary cost.</li>
      <li><strong>Hasmukh's Chemical System:</strong> Synthetic fertilizers provided temporary high yields but destroyed soil microorganisms, turning fertile soil sterile. Intensive borewell pumping depleted groundwater tables.</li>
    </ul>
    <strong>The Vicious Debt Cycle:</strong>
    Hybrid seeds cannot be saved for next year, requiring new purchases annually. As soil fertility declines, farmers must buy ever-larger quantities of expensive fertilizers and toxic pesticides. When market crop prices crash, farmers cannot repay bank loans, driving families into severe financial ruin.`,
    marking: "2.5 Marks for ecological comparison (earthworms vs chemical sterilisation) + 2.5 Marks for debt cycle breakdown = 5 Marks"
  },
  20: {
    type: "Tribal Rights & Forest Conservation",
    title: "Suryamani Bhagat & The Kuduk Community's 'Torang' Movement",
    story: "Suryamani Bhagat, an Adivasi girl from Jharkhand, loved the forest and fought for the rights of the Kuduk tribe. She graduated from college with the help of Vasavi didi and established 'Torang' (meaning jungle in Kuduk language) to protect tribal culture, traditional herbal medicine, and the Forest Rights Act 2007.",
    q: "What are the core legal provisions of the Forest Rights Act 2007, and why are Adivasis indispensable for the preservation of India's forests?",
    ans: `<strong>Core Provisions of the Forest Rights Act 2007:</strong>
    The Act recognizes that people who have been living in forest areas for at least 25 years have legal rights over the forest land and what grows on it:
    <ul>
      <li>They cannot be evicted or displaced arbitrarily by forest departments or private corporations.</li>
      <li>The village Gram Sabha (community council) has the legal authority to protect and manage local forest resources.</li>
    </ul>
    <strong>Why Adivasis are Crucial for Forest Conservation:</strong>
    Adivasis consider forests their sacred shared home. They practice sustainable harvesting, collecting only dry branches, medicinal roots, and fallen leaves while protecting biodiversity, preventing forest fires, and preventing illegal commercial logging.`,
    marking: "2.5 Marks for the 25-year residency right and Gram Sabha authority + 2.5 Marks for Adivasi ecological stewardship = 5 Marks"
  },
  21: {
    type: "Genetics, Twin Studies & Public Health",
    title: "Mendelian Inheritance & The Eradication of Polio",
    story: "Saroja and Suvasini are identical twins separated at birth; one was raised by an uncle in Pune (learning karate and music) while the other stayed in Chennai (speaking Tamil and doing household chores). Meanwhile, a health worker arrived at their home to administer two drops of Pulse Polio oral vaccine to infants.",
    q: "Explain how twin studies help scientists differentiate between genetic heredity and environmental nurture, and explain why administering oral polio vaccine drops to all children under five is essential.",
    ans: `<strong>Scientific Value of Twin Studies:</strong>
    Identical twins share 100% identical genetic DNA inherited from biological parents. By studying identical twins raised in different physical and social settings, scientists can pinpoint which traits are strictly genetic (blood group, facial bone structure, eye colour) and which traits are shaped by environmental nurture (skills like karate, musical talent, language vocabulary, dietary habits).
    
    <strong>Importance of Pulse Polio Campaign:</strong>
    Polio is an infectious viral disease that paralyzes limbs. If even a small pool of children remains unvaccinated, the virus continues to circulate in water and soil. Simultaneous mass administration of oral polio drops ensures community 'herd immunity', preventing virus replication and eradicating the disease entirely from the population.`,
    marking: "2.5 Marks for twin genetics vs nurture explanation + 2.5 Marks for herd immunity and viral eradication rationale = 5 Marks"
  },
  22: {
    type: "Migrant Labour Welfare & Right to Education",
    title: "Seasonal Sugarcane Migrants & The Right to Education Act",
    story: "Dhanu's family packs their bullock cart after Dussehra to work in distant sugarcane cutting fields for six months. Dhanu cannot attend school, and his maternal uncle (Mami) worries that without an education, Dhanu will remain trapped as a landless labourer forever.",
    q: "How does seasonal migration violate children's fundamental Right to Education under the RTE Act, and what innovative institutional measures (like residential seasonal hostels or mobile schools) must state governments provide?",
    ans: `<strong>Violation of the Right to Education:</strong>
    The Right to Education (RTE) Act guarantees free, compulsory, continuous education to every child aged 6 to 14. Seasonal migration pulls children out of school for half of every academic year, breaking conceptual learning continuity, causing massive learning gaps, and inevitably leading to high dropout rates and illegal child labour.
    
    <strong>Innovative Government Solutions:</strong>
    1. <strong>Seasonal Residential Hostels (Netaji Subhash Chandra Bose Hostels):</strong> Established in home villages so children can stay, receive free nutritious meals, and attend their regular school while parents migrate for work.
    2. <strong>Mobile Tent Schools & Language Tutors:</strong> Government teachers deployed to temporary sugar factory camps with portable classroom kits.
    3. <strong>Bridge Courses & Digital Tracking:</strong> Unique student identification cards allowing children to seamlessly attend classes at migration destinations without losing academic grade status.`,
    marking: "2.5 Marks for RTE constitutional right and learning disruption analysis + 2.5 Marks for seasonal hostels, mobile schools, and student tracking = 5 Marks"
  }
};

console.log("Ready to inject questions and CBQs into all chapters.");
module.exports = { extraQuestionsByChapter, cbqByChapter };

