// Official NCERT Class 5 EVS: "Our Wondrous World" (New NEP 2020 / NCF 2023)
// 100% Comprehensive Question Dataset - Chapters 1 to 10
// Aligned with CBSE Marking Scheme (2026-27 Session)

const wondrousWorldChapters = [
  {
    "id": "oww1",
    "num": 1,
    "unit": "Unit 1: Life Around Us",
    "title": "Water — The Essence of Life",
    "subtitle": "Exploring water states, the global water cycle, groundwater aquifers, traditional stepwells, and conservation",
    "concepts": [
      "States of Water: Exists naturally in three interconnected physical states—solid (ice/snow), liquid (water), and gas (water vapour).",
      "The Water Cycle: Solar heat powers continuous evaporation from water bodies and transpiration from plants, followed by atmospheric condensation into clouds and precipitation as rain or snow.",
      "Groundwater & Surface Water: Surface water fills lakes, ponds, and rivers; rainwater seeps through permeable soil layers into underground aquifers (water table) accessed via wells and borewells.",
      "Traditional Indian Water Architecture: Ancient engineering structures like Bawris (stepwells in Rajasthan/Gujarat), Johads (earthen check dams), Kunds, and Tankas preserved precious desert rainwater for centuries.",
      "Water Scarcity & Pollution: Untreated sewage, industrial discharge, and unchecked chemical runoff severely deplete freshwater sources, causing seasonal droughts.",
      "Rainwater Harvesting (RWH): Capturing rooftop rainwater and filtering it directly into recharging pits or underground cisterns ensures sustainable water security."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"'Inter', system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#047857\" text-anchor=\"middle\">Hydrological Cycle &amp; Water Architecture</text>\n      <!-- Sun & Evaporation -->\n      <circle cx=\"85\" cy=\"85\" r=\"32\" fill=\"#fef3c7\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n      <text x=\"85\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">☀️</text>\n      <text x=\"85\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Evaporation</text>\n      <text x=\"85\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#b45309\" text-anchor=\"middle\">Solar Energy</text>\n      <path d=\"M125 85 L180 85\" stroke=\"#34d399\" stroke-width=\"2\"/>\n      <!-- Condensation & Clouds -->\n      <circle cx=\"225\" cy=\"85\" r=\"32\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n      <text x=\"225\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">☁️</text>\n      <text x=\"225\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Condensation</text>\n      <text x=\"225\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#2563eb\" text-anchor=\"middle\">Cloud Formation</text>\n      <path d=\"M265 85 L320 85\" stroke=\"#34d399\" stroke-width=\"2\"/>\n      <!-- Precipitation & Rain -->\n      <circle cx=\"365\" cy=\"85\" r=\"32\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n      <text x=\"365\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🌧️</text>\n      <text x=\"365\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#075985\" text-anchor=\"middle\">Precipitation</text>\n      <text x=\"365\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#0369a1\" text-anchor=\"middle\">Rain &amp; Runoff</text>\n      <path d=\"M405 85 L460 85\" stroke=\"#34d399\" stroke-width=\"2\"/>\n      <!-- Recharge & Stepwells -->\n      <circle cx=\"500\" cy=\"85\" r=\"34\" fill=\"#ecfdf5\" stroke=\"#059669\" stroke-width=\"2.5\"/>\n      <text x=\"500\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🏛️💧</text>\n      <text x=\"500\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#065f46\" text-anchor=\"middle\">Stepwell / Bawri</text>\n      <text x=\"500\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#047857\" text-anchor=\"middle\">Aquifer Recharge</text>\n    </svg>",
    "questions": [
      {
        "q": "What are the three physical states of water found on Earth, and how does water transition between them in nature?",
        "category": "Conceptual Understanding",
        "marks": 3,
        "ans": "Water exists in three distinct states:\n        <ol>\n          <li><strong>Liquid State:</strong> Common water found in rivers, oceans, lakes, and rain.</li>\n          <li><strong>Solid State:</strong> Ice, snow, and glaciers formed when water cools below 0°C.</li>\n          <li><strong>Gaseous State:</strong> Invisible water vapour produced when water evaporates due to heat.</li>\n        </ol>\n        <strong>Natural Transition:</strong> The Sun heats liquid surface water, causing it to evaporate into water vapour (gas). As water vapour rises into the cold upper atmosphere, it cools and condenses into liquid droplets to form clouds. When these droplets grow heavy, they fall back to Earth as precipitation (rain or snow), completing the natural hydrological cycle.",
        "rubric": [
          {
            "key": "Correct identification of 3 states (solid, liquid, gas)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Explanation of heating (evaporation) and cooling (condensation)",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "q": "How does groundwater differ from surface water? Explain how rainwater seeps down to form underground aquifers.",
        "category": "Scientific Explanation",
        "marks": 3,
        "ans": "<strong>Difference:</strong>\n        <ul>\n          <li><em>Surface Water:</em> Water visible on Earth's surface in ponds, streams, rivers, and reservoirs, readily exposed to sunlight and direct atmospheric pollution.</li>\n          <li><em>Groundwater:</em> Water located beneath Earth's surface inside pores of soil, gravel, and rock formations known as aquifers.</li>\n        </ul>\n        <strong>Process of Seepage (Infiltration & Percolation):</strong> When rain falls on open ground, soil, and forest floors, gravity pulls the water downward through porous layers of sand and pebbles. As it travels down, the soil layers naturally filter out debris until the water meets an impermeable rock bed, accumulating as clean groundwater that feeds wells and natural springs.",
        "rubric": [
          {
            "key": "Clear distinction between surface and groundwater",
            "marks": "1.5 Marks"
          },
          {
            "key": "Accurate description of infiltration through porous soil",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "q": "What are 'Bawris' (stepwells)? Explain their historical, social, and architectural importance in arid regions like Rajasthan and Gujarat.",
        "category": "Cultural & Environmental Heritage",
        "marks": 4,
        "ans": "A <strong>Bawri</strong> is a traditional Indian stepwell—a multi-storeyed, intricately carved underground reservoir with flight of stone steps descending deep into the water level.\n        <br><br>\n        <strong>Key Importance:</strong>\n        <ol>\n          <li><em>Rainwater Harvesting in Arid Climates:</em> In desert regions receiving sparse, erratic rainfall, Bawris collected monsoon runoff, ensuring year-round drinking and cooking water.</li>\n          <li><em>Cool Community Gathering Spaces:</em> Deep subterranean stone pavilions provided a naturally cool refuge from searing desert heat where travelers, merchants, and villagers rested and socialized.</li>\n          <li><em>Architectural Masterpieces:</em> Examples like <em>Rani ki Vav</em> in Gujarat and <em>Chand Baori</em> in Abhaneri (Rajasthan) feature stunning geometry, stone pillars, and cooling subterranean galleries.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Definition of Bawri as stepwell with stone stairways",
            "marks": "1 Mark"
          },
          {
            "key": "Role in water harvesting during drought seasons",
            "marks": "1.5 Marks"
          },
          {
            "key": "Social and cooling architectural functions",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "q": "Hands-on Activity: Describe an experiment using a glass tumbler, warm water, and ice cubes to demonstrate condensation.",
        "category": "Hands-on Experiment & Observation",
        "marks": 4,
        "ans": "<strong>Experiment: Simulating Cloud Formation and Condensation</strong>\n        <ul>\n          <li><strong>Materials Needed:</strong> A transparent glass tumbler, warm water (about half-full), a small metal lid or saucer, and 3–4 ice cubes.</li>\n          <li><strong>Procedure:</strong>\n            <ol>\n              <li>Pour warm water into the transparent glass tumbler until it is half full.</li>\n              <li>Cover the mouth of the tumbler immediately with the metal saucer.</li>\n              <li>Place several ice cubes on top of the metal saucer.</li>\n              <li>Observe the underside of the saucer and the upper walls of the glass tumbler for 2–3 minutes.</li>\n            </ol>\n          </li>\n          <li><strong>Observation:</strong> Warm water evaporates, producing invisible water vapour that rises inside the tumbler. When this warm vapour touches the cold metal plate chilled by ice cubes, it loses thermal energy, and tiny drops of liquid water condense on the underside of the saucer, eventually dripping down like raindrops.</li>\n          <li><strong>Scientific Conclusion:</strong> Condensation occurs whenever warm water vapour cools down and transforms back into liquid droplets.</li>\n        </ul>",
        "rubric": [
          {
            "key": "List of materials and clear 4-step procedure",
            "marks": "1.5 Marks"
          },
          {
            "key": "Accurate observation of droplets on cold underside",
            "marks": "1.5 Marks"
          },
          {
            "key": "Scientific principle of condensation articulated",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "Household Water Audit Task: How much water does an average family of four consume daily? Prepare a conservation checklist.",
        "category": "Field Investigation & Conservation",
        "marks": 4,
        "ans": "<strong>Daily Water Consumption Audit (Family of 4):</strong>\n        <table style=\"width:100%;border-collapse:collapse;margin:10px 0;font-size:0.88rem;\">\n          <tr style=\"background:#e0f2fe;font-weight:700;\"><th style=\"border:1px solid #cbd5e1;padding:6px;\">Activity</th><th style=\"border:1px solid #cbd5e1;padding:6px;\">Estimated Litres/Day</th></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Drinking &amp; Cooking</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">25 L</td></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Bathing (bucket vs shower)</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">120 L</td></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Toilet Flushing</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">100 L</td></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Washing Clothes &amp; Utensils</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">95 L</td></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Floor Cleaning &amp; Plants</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">30 L</td></tr>\n          <tr style=\"background:#f1f5f9;font-weight:700;\"><td style=\"border:1px solid #cbd5e1;padding:6px;\">Total Estimated Usage</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">370 Litres / day</td></tr>\n        </table>\n        <strong>5-Point Water Conservation Checklist:</strong>\n        <ol>\n          <li>Turn off taps while brushing teeth and soaping hands (saves ~12 litres daily).</li>\n          <li>Use a bucket and mug for bathing instead of continuous high-flow showers.</li>\n          <li>Fix leaking faucets and pipe joints promptly—a single dripping tap can waste up to 15 litres daily.</li>\n          <li>Reuse rinse water from washing vegetables and pulses to water potted plants.</li>\n          <li>Wash vehicles using a wet cloth and bucket rather than running a garden hose.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Realistic itemized audit table for family of 4",
            "marks": "2 Marks"
          },
          {
            "key": "Five practical, age-appropriate conservation habits",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "q": "Why is water referred to as the 'Universal Solvent'? Name three common kitchen substances that dissolve in water and two that do not.",
        "category": "Properties of Matter",
        "marks": 3,
        "ans": "Water is known as the <strong>Universal Solvent</strong> because it can dissolve more chemical substances and compounds than any other liquid on Earth due to its unique molecular polarity.\n        <br><br>\n        <strong>Substances that dissolve in water (Soluble):</strong>\n        <ol>\n          <li>Table Salt (Sodium Chloride)</li>\n          <li>Sugar (Sucrose)</li>\n          <li>Lemon juice / Honey</li>\n        </ol>\n        <strong>Substances that do NOT dissolve in water (Insoluble):</strong>\n        <ol>\n          <li>Cooking oil / Mustard oil (floats on surface because it is non-polar and less dense)</li>\n          <li>Sand / Chalk powder (settles at the bottom as sediment)</li>\n        </ol>",
        "rubric": [
          {
            "key": "Reason for universal solvent designation",
            "marks": "1 Mark"
          },
          {
            "key": "Three accurate soluble examples",
            "marks": "1 Mark"
          },
          {
            "key": "Two accurate insoluble examples with observation",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Water — The Essence of Life",
        "q": "[Textbook Activity & Question 1] In 'Water — The Essence of Life', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Water — The Essence of Life</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Water — The Essence of Life",
        "q": "[Textbook Activity & Question 2] In 'Water — The Essence of Life', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Water — The Essence of Life</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Water — The Essence of Life",
        "q": "[Textbook Activity & Question 3] In 'Water — The Essence of Life', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Water — The Essence of Life</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Water — The Essence of Life",
        "q": "[Textbook Activity & Question 4] In 'Water — The Essence of Life', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Water — The Essence of Life</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Water — The Essence of Life",
        "q": "[Textbook Activity & Question 5] In 'Water — The Essence of Life', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Water — The Essence of Life</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Water — The Essence of Life",
        "q": "[Textbook Activity & Question 6] In 'Water — The Essence of Life', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Water — The Essence of Life</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Water — The Essence of Life",
        "q": "[Textbook Activity & Question 7] In 'Water — The Essence of Life', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Water — The Essence of Life</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Water — The Essence of Life",
        "q": "[Textbook Activity & Question 8] In 'Water — The Essence of Life', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Water — The Essence of Life</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Water — The Essence of Life",
        "q": "[Textbook Activity & Question 9] In 'Water — The Essence of Life', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Water — The Essence of Life</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Water — The Essence of Life",
        "q": "[Textbook Activity & Question 10] In 'Water — The Essence of Life', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Water — The Essence of Life</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Water — The Essence of Life",
        "q": "[Textbook Activity & Question 11] In 'Water — The Essence of Life', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Water — The Essence of Life</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Water — The Essence of Life",
        "q": "[Textbook Activity & Question 12] In 'Water — The Essence of Life', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Water — The Essence of Life</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Water — The Essence of Life",
        "q": "[Textbook Activity & Question 13] In 'Water — The Essence of Life', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Water — The Essence of Life</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Water — The Essence of Life",
        "q": "[Textbook Activity & Question 14] In 'Water — The Essence of Life', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Water — The Essence of Life</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Water — The Essence of Life",
        "q": "[Textbook Activity & Question 15] In 'Water — The Essence of Life', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Water — The Essence of Life</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Water — The Essence of Life",
        "q": "[Textbook Activity & Question 16] In 'Water — The Essence of Life', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Water — The Essence of Life</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Rooftop Rainwater Harvesting for Climate-Resilient Schools",
      "text": "A government primary school in a rural district experiences severe groundwater depletion by March each year, leaving the school handpump dry and forcing students to carry water from distant wells.",
      "question": "Design a simple, cost-effective Rooftop Rainwater Harvesting (RRWH) model that the school Eco-Club can implement. Outline the primary components and explain how this will secure drinking water and recharge local aquifers.",
      "answer": "<strong>Proposed School Rooftop Rainwater Harvesting Framework:</strong>\n      <ol>\n        <li><strong>Catchment Area (Rooftop):</strong> The clean sloping roof of the school building serves as the catchment surface where fresh monsoon rain falls. Regular cleaning of the roof before monsoons prevents leaf and dust contamination.</li>\n        <li><strong>Conveyance Pipes (Gutters & Downspouts):</strong> PVC gutters fitted along the roof edges channel collected rainwater into downpipes.</li>\n        <li><strong>First-Flush Device:</strong> A simple valve drains away the first 15–20 minutes of monsoon rain, washing away atmospheric dust and bird droppings.</li>\n        <li><strong>Multi-layered Filtration Pit:</strong> Water then passes through a natural filter chamber containing layers of coarse gravel, fine sand, and charcoal, which remove suspended particles and impurities.</li>\n        <li><strong>Storage Tank & Percolation Well:</strong> The filtered water is stored in an underground masonry tank for washing and toilets, while the overflow is directed into a soak-pit to recharge the school's dried groundwater aquifer.</li>\n      </ol>\n      <em>Impact:</em> This ensures 4–5 months of water independence for the school and raises the surrounding water table.",
      "rubric": "2 Marks for identifying the 5 key structural components (catchment, gutters, first-flush, filter, storage) + 3 Marks for operational explanation and ecological aquifer recharge impact = 5 Marks"
    }
  },
  {
    "id": "oww2",
    "num": 2,
    "unit": "Unit 1: Life Around Us",
    "title": "Journey of a River",
    "subtitle": "Following river courses from snowy glacial sources down fertile plains to ocean deltas, studying ecosystems and river conservation",
    "concepts": [
      "River Course Stages: A river journeys across three distinct stages—Upper Course (steep mountain origin, rapid flow, V-shaped valleys, waterfalls), Middle Course (gentle gradient, meanders, wide valleys, human settlements), and Lower Course (slow flow, sediment deposition, delta formation, meeting the sea).",
      "Perennial vs Seasonal Rivers: Perennial rivers (Ganga, Yamuna, Brahmaputra) are fed year-round by melting Himalayan glaciers and monsoons; seasonal rivers (Godavari, Krishna, Narmada) rely primarily on monsoon rainfall.",
      "River Ecosystems: Rivers provide freshwater habitats for fish, freshwater turtles, aquatic plants, and endangered species like the Gangetic Dolphin (*Platanista gangetica*).",
      "Historical & Agricultural Importance: River floodplains deposit nutrient-rich alluvial silt, creating India's most fertile agricultural belts that supported ancient civilizations.",
      "River Pollution Drivers: Municipal untreated sewage, industrial chemical effluents, washing clothes with synthetic detergents, and plastic trash threaten river health.",
      "Conservation Programs: Initiatives like the Namami Gange Project, constructing Sewage Treatment Plants (STPs), and community riverbank tree planting (riparian buffers) help restore river cleanliness."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"'Inter', system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">The Three Stages in the Journey of a River</text>\n      <!-- Mountain Origin -->\n      <circle cx=\"85\" cy=\"85\" r=\"32\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n      <text x=\"85\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🏔️</text>\n      <text x=\"85\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Upper Course</text>\n      <text x=\"85\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#2563eb\" text-anchor=\"middle\">Glacial Source / Steep</text>\n      <path d=\"M125 85 L180 85\" stroke=\"#60a5fa\" stroke-width=\"2\"/>\n      <!-- Middle Plains -->\n      <circle cx=\"225\" cy=\"85\" r=\"32\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n      <text x=\"225\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🏞️</text>\n      <text x=\"225\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Middle Course</text>\n      <text x=\"225\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#2563eb\" text-anchor=\"middle\">Meanders &amp; Plains</text>\n      <path d=\"M265 85 L320 85\" stroke=\"#60a5fa\" stroke-width=\"2\"/>\n      <!-- Lower Delta -->\n      <circle cx=\"365\" cy=\"85\" r=\"32\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n      <text x=\"365\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🌾</text>\n      <text x=\"365\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Lower Course</text>\n      <text x=\"365\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#2563eb\" text-anchor=\"middle\">Fertile Delta</text>\n      <path d=\"M405 85 L460 85\" stroke=\"#60a5fa\" stroke-width=\"2\"/>\n      <!-- Ocean Confluence -->\n      <circle cx=\"500\" cy=\"85\" r=\"34\" fill=\"#ecfdf5\" stroke=\"#059669\" stroke-width=\"2.5\"/>\n      <text x=\"500\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🌊⚓</text>\n      <text x=\"500\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#065f46\" text-anchor=\"middle\">Sea / Ocean</text>\n      <text x=\"500\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#047857\" text-anchor=\"middle\">River Mouth</text>\n    </svg>",
    "questions": [
      {
        "q": "Trace the three distinct stages of a river from its mountain source to the sea. How does the river's speed and shape change?",
        "category": "Physical Geography",
        "marks": 4,
        "ans": "A river journeys through three distinct geographical stages:\n        <ol>\n          <li><strong>The Upper Course (Mountain Stage):</strong> The river originates high in mountains from melting glaciers or rain-fed springs. The terrain is steep, causing the river to flow rapidly with high erosive power, cutting steep V-shaped valleys and cascading down waterfalls.</li>\n          <li><strong>The Middle Course (Valley & Plains Stage):</strong> As the river enters flat plains, the land gradient decreases. The river widens, slows down, and swings from side to side in wide loops called <strong>meanders</strong>. Tributaries join it, increasing water volume.</li>\n          <li><strong>The Lower Course (Delta & Mouth Stage):</strong> Near its journey's end, the river flows very sluggishly. It deposits heavy sediments (silt and sand), splitting into multiple smaller channels (distributaries) to form a triangular <strong>delta</strong> before merging into the sea or ocean.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Upper course: steep gradient, rapid flow, V-shaped valleys",
            "marks": "1.5 Marks"
          },
          {
            "key": "Middle course: flat terrain, meanders, human settlements",
            "marks": "1.5 Marks"
          },
          {
            "key": "Lower course: sluggish flow, silt deposition, delta formation",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "What is the difference between a tributary and a distributary? Give one Indian example of each.",
        "category": "Geographical Terminology",
        "marks": 3,
        "ans": "<strong>Definitions and Differences:</strong>\n        <ul>\n          <li><strong>Tributary:</strong> A smaller stream or river that flows into and joins a larger parent river, increasing its total volume.\n            <br><em>Example:</em> River <strong>Yamuna</strong> is the largest tributary of River Ganga (joining at Prayagraj).</li>\n          <li><strong>Distributary:</strong> A channel that branches off from the main river near its mouth in a delta and carries water away toward the sea without rejoining the main stream.\n            <br><em>Example:</em> River <strong>Hooghly</strong> in West Bengal is a major distributary branching off from River Ganga.</li>\n        </ul>",
        "rubric": [
          {
            "key": "Accurate definition and role of a tributary + Indian example",
            "marks": "1.5 Marks"
          },
          {
            "key": "Accurate definition and role of a distributary + Indian example",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "q": "Why are river basins historically known as the 'cradles of human civilization'? State three reasons.",
        "category": "Historical & Environmental Insight",
        "marks": 3,
        "ans": "Ancient human civilizations—such as the Indus Valley Civilization along the Indus River and Mesopotamian civilization along the Tigris and Euphrates—developed around river basins because:\n        <ol>\n          <li><strong>Abundant Freshwater:</strong> Rivers provided a perennial source of freshwater for drinking, cooking, livestock, and domestic needs.</li>\n          <li><strong>Fertile Alluvial Soil:</strong> Seasonal river floods deposited fresh silt on surrounding plains, creating nutrient-rich farmland ideal for growing food crops.</li>\n          <li><strong>Natural Transportation & Trade:</strong> Boats on rivers served as the fastest and easiest trade routes to transport heavy goods before roads were built.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Explanation of freshwater access for human settlements",
            "marks": "1 Mark"
          },
          {
            "key": "Alluvial soil deposition for agricultural productivity",
            "marks": "1 Mark"
          },
          {
            "key": "Transport and trade route connectivity",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "Observation & Comparison: Compare the water quality of a river near its mountain origin with water collected near a densely populated city.",
        "category": "Observation & Critical Thinking",
        "marks": 4,
        "ans": "<strong>Comparative Analysis of River Water:</strong>\n        <table style=\"width:100%;border-collapse:collapse;margin:10px 0;font-size:0.88rem;\">\n          <tr style=\"background:#e0f2fe;font-weight:700;\"><th style=\"border:1px solid #cbd5e1;padding:6px;\">Parameter</th><th style=\"border:1px solid #cbd5e1;padding:6px;\">Mountain Source (Upstream)</th><th style=\"border:1px solid #cbd5e1;padding:6px;\">City / Industrial Stretch (Downstream)</th></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Water Transparency</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Crystal clear, transparent</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Murky, dark grey or brown</td></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Odor</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Clean, natural, odorless</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Foul, pungent chemical/sewage smell</td></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Dissolved Oxygen</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">High (supports trout &amp; aquatic life)</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Extremely low (causes fish kills)</td></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Pollutants Present</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Natural minerals and sand only</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Plastic trash, untreated sewage, toxic industrial dyes</td></tr>\n        </table>\n        <em>Conclusion:</em> Human urbanization and untreated wastewater severely degrade downstream river water quality.",
        "rubric": [
          {
            "key": "Accurate contrast in appearance, transparency, and odor",
            "marks": "2 Marks"
          },
          {
            "key": "Analysis of dissolved oxygen and human pollutants",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "q": "Map Skill Task: Name two major rivers flowing into the Bay of Bengal and two major rivers flowing into the Arabian Sea.",
        "category": "Map & Spatial Skill",
        "marks": 4,
        "ans": "Based on India's physical geography and drainage patterns:\n        <ol>\n          <li><strong>Rivers Flowing Eastward into the Bay of Bengal:</strong>\n            <ul>\n              <li><strong>River Ganga:</strong> Flows east through Uttarakhand, Uttar Pradesh, Bihar, and West Bengal before emptying into the Bay of Bengal.</li>\n              <li><strong>River Godavari:</strong> Originates in Maharashtra and flows across Telangana and Andhra Pradesh into the Bay of Bengal.</li>\n              <li><em>(Additional: Krishna, Mahanadi, Brahmaputra, Kaveri).</em></li>\n            </ul>\n          </li>\n          <li><strong>Rivers Flowing Westward into the Arabian Sea:</strong>\n            <ul>\n              <li><strong>River Narmada:</strong> Flows westward through a rift valley between the Vindhya and Satpura ranges into the Gulf of Khambhat (Arabian Sea).</li>\n              <li><strong>River Tapi (Tapti):</strong> Flows westward parallel to Narmada through Madhya Pradesh, Maharashtra, and Gujarat into the Arabian Sea.</li>\n            </ul>\n          </li>\n        </ol>",
        "rubric": [
          {
            "key": "Two accurate east-flowing Bay of Bengal rivers",
            "marks": "2 Marks"
          },
          {
            "key": "Two accurate west-flowing Arabian Sea rivers (Narmada & Tapi)",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "q": "What is the Gangetic River Dolphin, and why is its presence considered an indicator of a healthy river ecosystem?",
        "category": "Biodiversity & Ecology",
        "marks": 3,
        "ans": "The <strong>Gangetic River Dolphin</strong> (<em>Platanista gangetica</em>) is India's National Aquatic Animal, living exclusively in freshwater river stretches of the Ganga and Brahmaputra basins.\n        <br><br>\n        <strong>Significance as an Ecosystem Indicator:</strong>\n        <ol>\n          <li>These dolphins are almost completely blind and navigate and hunt fish using <em>echolocation</em> (sonar clicks).</li>\n          <li>They can survive only in deep, clean, unpolluted freshwater with abundant fish and high dissolved oxygen.</li>\n          <li>Therefore, their presence in a river stretch proves that the aquatic food chain is healthy and chemical pollution is low. When river water becomes polluted or silty, dolphins migrate away or die out.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Identification of Gangetic dolphin as National Aquatic Animal",
            "marks": "1 Mark"
          },
          {
            "key": "Explanation of reliance on clean water and echolocation",
            "marks": "1 Mark"
          },
          {
            "key": "Role as biological indicator of river health",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Journey of a River",
        "q": "[Textbook Activity & Question 1] In 'Journey of a River', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Journey of a River</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Journey of a River",
        "q": "[Textbook Activity & Question 2] In 'Journey of a River', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Journey of a River</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Journey of a River",
        "q": "[Textbook Activity & Question 3] In 'Journey of a River', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Journey of a River</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Journey of a River",
        "q": "[Textbook Activity & Question 4] In 'Journey of a River', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Journey of a River</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Journey of a River",
        "q": "[Textbook Activity & Question 5] In 'Journey of a River', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Journey of a River</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Journey of a River",
        "q": "[Textbook Activity & Question 6] In 'Journey of a River', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Journey of a River</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Journey of a River",
        "q": "[Textbook Activity & Question 7] In 'Journey of a River', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Journey of a River</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Journey of a River",
        "q": "[Textbook Activity & Question 8] In 'Journey of a River', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Journey of a River</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Journey of a River",
        "q": "[Textbook Activity & Question 9] In 'Journey of a River', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Journey of a River</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Journey of a River",
        "q": "[Textbook Activity & Question 10] In 'Journey of a River', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Journey of a River</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Journey of a River",
        "q": "[Textbook Activity & Question 11] In 'Journey of a River', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Journey of a River</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Journey of a River",
        "q": "[Textbook Activity & Question 12] In 'Journey of a River', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Journey of a River</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Journey of a River",
        "q": "[Textbook Activity & Question 13] In 'Journey of a River', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Journey of a River</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Journey of a River",
        "q": "[Textbook Activity & Question 14] In 'Journey of a River', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Journey of a River</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Journey of a River",
        "q": "[Textbook Activity & Question 15] In 'Journey of a River', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Journey of a River</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Journey of a River",
        "q": "[Textbook Activity & Question 16] In 'Journey of a River', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Journey of a River</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Community Action Plan for Rejuvenating Polluted Urban Riverfronts",
      "text": "During a field trip to a city riverbank, Class 5 students noticed piles of plastic bottles, rotting floral offerings, and a municipal open storm drain pouring foamy grey wastewater directly into the river water where people were bathing.",
      "question": "Propose a 4-point student-led action plan to protect and restore this urban riverfront, combining community awareness with scientific engineering solutions.",
      "answer": "<strong>Student-Led Urban River Rejuvenation Action Plan:</strong>\n      <ol>\n        <li><strong>Installation of Sewage Treatment Plants (STPs):</strong> Petitions submitted to municipal authorities demanding that all urban storm drains pass through bio-filters and decentralized STPs before discharging treated effluent into the river.</li>\n        <li><strong>Riverfront Trash Traps &amp; Booms:</strong> Installing floating mesh booms across drainage mouths to physically trap plastic bottles, polythene, and floating trash before they enter the main river current.</li>\n        <li><strong>Dedicated Eco-Friendly Immersion Ponds:</strong> Constructing designated artificial immersion tanks near riverbanks for religious ceremonies and flowers, preventing toxic chemical paints from contaminating the natural stream.</li>\n        <li><strong>Riparian Vegetative Bio-Shield:</strong> Mobilizing local schools and citizen groups to plant native riverside trees (like Neem, Peepal, Arjun, and Vetiver grass) along the embankments to prevent soil erosion and naturally absorb excess chemical nitrates.</li>\n      </ol>",
      "rubric": "2 Marks for engineering solutions (STPs & trash booms) + 3 Marks for community engagement, dedicated tanks, and riparian vegetative bio-shields = 5 Marks"
    }
  },
  {
    "id": "oww3",
    "num": 3,
    "unit": "Unit 2: Health and Well-being",
    "title": "The Mystery of Food",
    "subtitle": "Understanding food spoilage, microbial growth, traditional and modern preservation methods, and nutritional balance",
    "concepts": [
      "Food Spoilage vs Food Wastage: Food spoilage occurs when chemical and biological changes render food unsafe for consumption; food wastage occurs when wholesome, edible food is discarded unconsumed.",
      "Causes of Food Spoilage: Growth of microorganisms (bacteria, yeast, moulds/fungi), presence of enzymes, excessive moisture, and warm ambient temperature.",
      "Recognizing Spoiled Food: Visible cottony or green mould growth, sour or bitter taste, foul putrid smell, slimy surface texture, and gas bubbles in liquids.",
      "Traditional Preservation Methods: Drying/dehydration (removing moisture), salting and pickling (creating hypertonic conditions inhibiting bacterial growth), sweetening (jams and murabba), and boiling/cooking.",
      "Modern Food Preservation: Pasteurization (rapid heating followed by quick chilling in milk), refrigeration (slowing microbial activity at low temperatures), deep freezing, and vacuum packaging.",
      "Reading Food Labels: Checking Manufacturing Date, Best Before / Expiry Date, Ingredients, FSSAI quality seal, and Vegetarian/Non-vegetarian indicators (green/brown dots)."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"'Inter', system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Food Preservation Science &amp; Spoilage Prevention</text>\n      <!-- Sun Drying -->\n      <circle cx=\"85\" cy=\"85\" r=\"32\" fill=\"#fef3c7\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n      <text x=\"85\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">☀️🌶️</text>\n      <text x=\"85\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Dehydration</text>\n      <text x=\"85\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#b45309\" text-anchor=\"middle\">Sun-drying Moisture</text>\n      <path d=\"M125 85 L180 85\" stroke=\"#fcd34d\" stroke-width=\"2\"/>\n      <!-- Salting & Pickles -->\n      <circle cx=\"225\" cy=\"85\" r=\"32\" fill=\"#fef3c7\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n      <text x=\"225\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🏺🍋</text>\n      <text x=\"225\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Pickling &amp; Salt</text>\n      <text x=\"225\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#b45309\" text-anchor=\"middle\">Osmotic Inhibition</text>\n      <path d=\"M265 85 L320 85\" stroke=\"#fcd34d\" stroke-width=\"2\"/>\n      <!-- Boiling & Pasteurization -->\n      <circle cx=\"365\" cy=\"85\" r=\"32\" fill=\"#fef3c7\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n      <text x=\"365\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🔥🥛</text>\n      <text x=\"365\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Pasteurization</text>\n      <text x=\"365\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#b45309\" text-anchor=\"middle\">Heat Inactivation</text>\n      <path d=\"M405 85 L460 85\" stroke=\"#fcd34d\" stroke-width=\"2\"/>\n      <!-- Cold Storage -->\n      <circle cx=\"500\" cy=\"85\" r=\"34\" fill=\"#ecfdf5\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n      <text x=\"500\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">❄️🍎</text>\n      <text x=\"500\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#065f46\" text-anchor=\"middle\">Cold Chain</text>\n      <text x=\"500\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#047857\" text-anchor=\"middle\">Microbial Inactivity</text>\n    </svg>",
    "questions": [
      {
        "q": "What causes food to spoil, and what are four visible or sensory signs indicating that cooked food is no longer safe to eat?",
        "category": "Food Science & Health",
        "marks": 4,
        "ans": "<strong>Primary Causes of Food Spoilage:</strong> Food spoils due to the rapid growth of microorganisms like bacteria, yeasts, and moulds (fungi). These microbes thrive in the presence of <em>moisture</em>, <em>warm ambient temperature</em>, and <em>oxygen</em>, breaking down food proteins and carbohydrates while producing toxins.\n        <br><br>\n        <strong>Four Sensory Signs of Spoiled Food:</strong>\n        <ol>\n          <li><strong>Foul Odor:</strong> A sour, rancid, or putrid smell indicating bacterial decomposition.</li>\n          <li><strong>Surface Appearance:</strong> Visible white, green, or black furry patches (mould spores) developing on breads, fruits, or rotis.</li>\n          <li><strong>Altered Texture:</strong> Slimy or sticky film covering cooked curries, dals, or boiled vegetables.</li>\n          <li><strong>Taste Change:</strong> A distinctly bitter, fermented, or acidic sour taste (even before visible mould appears).</li>\n        </ol>",
        "rubric": [
          {
            "key": "Explanation of microorganisms (bacteria/fungi), moisture, warmth",
            "marks": "2 Marks"
          },
          {
            "key": "Four distinct sensory indicators (odor, mould, texture, taste)",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "q": "Explain four scientific methods commonly used in Indian households to preserve food for several months without refrigeration.",
        "category": "Traditional Preservation Techniques",
        "marks": 4,
        "ans": "Four traditional Indian food preservation techniques include:\n        <ol>\n          <li><strong>Sun-Drying (Dehydration):</strong> Removing moisture content so microorganisms cannot survive or reproduce.\n            <br><em>Examples:</em> Papad, dried red chillies, raw mango slices (amchur), and methi leaves.</li>\n          <li><strong>Salting &amp; Pickling (Addition of Oil and Salt):</strong> High salt concentration draws out moisture from bacterial cells through <em>osmosis</em>, killing them. Mustard oil forms an airtight seal preventing fungal spores from landing on food.\n            <br><em>Examples:</em> Mango pickle (achar), lime pickle, and salted fish.</li>\n          <li><strong>Sweetening (High Sugar Concentration):</strong> Thick sugar syrups bind water molecules, preventing microbes from absorbing moisture needed to grow.\n            <br><em>Examples:</em> Amla murabba, apple jam, and gulkand.</li>\n          <li><strong>Boiling (Heat Inactivation):</strong> High temperatures kill vegetative bacterial cells and inactivate enzymes.\n            <br><em>Example:</em> Boiling fresh milk twice a day to prevent curdling.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Sun-drying: moisture removal principle + examples",
            "marks": "1 Mark"
          },
          {
            "key": "Salting/pickling: osmotic action + oil barrier",
            "marks": "1 Mark"
          },
          {
            "key": "Sugar preservation in jams/murabba",
            "marks": "1 Mark"
          },
          {
            "key": "Boiling/heat sterilization principle",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "Hands-on Activity: Describe the bread mould experiment. What changes are observed over a 5-day observation period?",
        "category": "Scientific Investigation",
        "marks": 4,
        "ans": "<strong>Bread Mould Growth Investigation:</strong>\n        <ul>\n          <li><strong>Procedure:</strong> Take a fresh slice of bread, sprinkle a few drops of clean water on it (do not make it soggy), place it inside an airtight transparent plastic box or zip-lock pouch, and leave it undisturbed in a warm, dark corner of the kitchen for 5 days.</li>\n          <li><strong>Daily Observations:</strong>\n            <ul>\n              <li><em>Day 1–2:</em> No visible changes; bread feels slightly moist.</li>\n              <li><em>Day 3:</em> Faint whitish, cotton-like fuzzy patches appear on the bread surface.</li>\n              <li><em>Day 4:</em> The patches turn pale green or greyish-black with a distinct stale, musty smell.</li>\n              <li><em>Day 5:</em> Dense dark greenish-black velvety colonies (sporangia of *Rhizopus* mould) spread across the slice. The bread softens and rots.</li>\n            </ul>\n          </li>\n          <li><strong>Inference:</strong> Fungal spores present in the air landed on the bread and germinated rapidly because of the moisture, warmth, and nutrient-rich starch.</li>\n        </ul>",
        "rubric": [
          {
            "key": "Setup procedure using moist bread in closed container",
            "marks": "1.5 Marks"
          },
          {
            "key": "Accurate day-by-day developmental observations",
            "marks": "1.5 Marks"
          },
          {
            "key": "Scientific inference regarding airborne fungal spores and moisture",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "Why is it essential to inspect food packaging labels before purchasing? List four crucial details printed on a food wrapper.",
        "category": "Consumer Literacy & Health",
        "marks": 3,
        "ans": "Inspecting packaging labels ensures that consumers purchase safe, hygienic, unexpired food and are aware of potential food allergens and nutritional content.\n        <br><br>\n        <strong>Four Essential Details Found on Packaged Food:</strong>\n        <ol>\n          <li><strong>Manufacturing &amp; Expiry / Best Before Date:</strong> Indicates the window during which the product remains fresh and safe to eat. Consuming expired food risks food poisoning.</li>\n          <li><strong>FSSAI Logo and License Number:</strong> Guarantees that the product complies with government food safety and hygiene standards.</li>\n          <li><strong>Vegetarian / Non-Vegetarian Symbol:</strong> A green dot inside a square denotes vegetarian food; a brown dot inside a square denotes non-vegetarian ingredients.</li>\n          <li><strong>Ingredients &amp; Nutritional Facts:</strong> Details calories, added sugars, preservatives, and allergens (like nuts, gluten, or dairy).</li>\n        </ol>",
        "rubric": [
          {
            "key": "Reason for inspecting labels (safety, quality, health)",
            "marks": "1 Mark"
          },
          {
            "key": "Identification of Expiry/Best Before date and FSSAI logo",
            "marks": "1 Mark"
          },
          {
            "key": "Veg/Non-veg mark and ingredient listing",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "What is 'Pasteurization', and how was this method discovered by Louis Pasteur to keep milk fresh?",
        "category": "Scientific Discovery & Technology",
        "marks": 3,
        "ans": "<strong>Pasteurization</strong> is a food preservation process where liquid food (especially milk) is heated to a specific temperature for a set time and then chilled rapidly to destroy harmful disease-causing microorganisms without altering the food's taste or nutritional value.\n        <br><br>\n        <strong>How it Works:</strong>\n        <ol>\n          <li>Fresh milk is heated to approximately <strong>70°C for 15 to 30 seconds</strong>.</li>\n          <li>It is then suddenly chilled to below <strong>10°C</strong> and packaged immediately into sterile pouches.</li>\n          <li>The sudden temperature shock destroys pathogenic bacteria like *Salmonella* and *Mycobacterium*, allowing packaged pasteurized milk to be consumed safely even without immediate boiling.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Definition of pasteurization as thermal treatment",
            "marks": "1.5 Marks"
          },
          {
            "key": "Precise process: heating to ~70°C then rapid chilling below 10°C",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "q": "Differentiate between 'food spoilage' and 'food wastage'. Suggest three practical ways families can eliminate food wastage.",
        "category": "Ethics & Environmental Awareness",
        "marks": 3,
        "ans": "<strong>Difference:</strong>\n        <ul>\n          <li><strong>Food Spoilage:</strong> Natural decay caused by bacteria and fungi that makes food unsafe or hazardous to consume.</li>\n          <li><strong>Food Wastage:</strong> Edible, perfectly good food that is discarded due to over-purchasing, excess cooking, or careless disposal.</li>\n        </ul>\n        <strong>Three Ways to Eliminate Food Wastage:</strong>\n        <ol>\n          <li><em>Smart Serving Sizes:</em> Take only as much food on your plate as you can finish; take second helpings only if hungry.</li>\n          <li><em>Plan Meals &amp; Grocery Lists:</em> Check refrigerator contents before buying fresh groceries to avoid buying duplicate perishables.</li>\n          <li><em>Repurpose Leftovers:</em> Store leftover rotis, rice, and vegetables safely in the refrigerator and convert them into nutritious breakfasts (e.g. vegetable fried rice or stuffed parathas).</li>\n        </ol>",
        "rubric": [
          {
            "key": "Clear contrast between spoilage (decay) and wastage (discarding edible food)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Three practical household waste prevention strategies",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • The Mystery of Food",
        "q": "[Textbook Activity & Question 1] In 'The Mystery of Food', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>The Mystery of Food</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • The Mystery of Food",
        "q": "[Textbook Activity & Question 2] In 'The Mystery of Food', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>The Mystery of Food</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • The Mystery of Food",
        "q": "[Textbook Activity & Question 3] In 'The Mystery of Food', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>The Mystery of Food</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • The Mystery of Food",
        "q": "[Textbook Activity & Question 4] In 'The Mystery of Food', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>The Mystery of Food</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • The Mystery of Food",
        "q": "[Textbook Activity & Question 5] In 'The Mystery of Food', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>The Mystery of Food</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • The Mystery of Food",
        "q": "[Textbook Activity & Question 6] In 'The Mystery of Food', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>The Mystery of Food</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • The Mystery of Food",
        "q": "[Textbook Activity & Question 7] In 'The Mystery of Food', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>The Mystery of Food</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • The Mystery of Food",
        "q": "[Textbook Activity & Question 8] In 'The Mystery of Food', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>The Mystery of Food</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • The Mystery of Food",
        "q": "[Textbook Activity & Question 9] In 'The Mystery of Food', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>The Mystery of Food</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • The Mystery of Food",
        "q": "[Textbook Activity & Question 10] In 'The Mystery of Food', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>The Mystery of Food</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • The Mystery of Food",
        "q": "[Textbook Activity & Question 11] In 'The Mystery of Food', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>The Mystery of Food</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • The Mystery of Food",
        "q": "[Textbook Activity & Question 12] In 'The Mystery of Food', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>The Mystery of Food</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • The Mystery of Food",
        "q": "[Textbook Activity & Question 13] In 'The Mystery of Food', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>The Mystery of Food</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • The Mystery of Food",
        "q": "[Textbook Activity & Question 14] In 'The Mystery of Food', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>The Mystery of Food</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • The Mystery of Food",
        "q": "[Textbook Activity & Question 15] In 'The Mystery of Food', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>The Mystery of Food</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • The Mystery of Food",
        "q": "[Textbook Activity & Question 16] In 'The Mystery of Food', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>The Mystery of Food</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Community Food Bank & Wedding Leftover Management",
      "text": "In a neighborhood banquet hall, large quantities of cooked rice, paneer curries, and rotis were routinely thrown into municipal garbage dumpsters after wedding banquets, while unhoused families in nearby streets lacked nutritious meals.",
      "question": "Develop an ethical, health-compliant protocol for partnering with community food rescue organizations to collect, test, and distribute surplus banquet food safely within 3 hours.",
      "answer": "<strong>Community Food Rescue &amp; Quality Protocol:</strong>\n      <ol>\n        <li><strong>Immediate Quality &amp; Temperature Verification:</strong> Trained student volunteers and NGO workers check that surplus food has been kept in hot holding vessels (above 60°C) and shows zero signs of souring or odor.</li>\n        <li><strong>Hygienic Packaging:</strong> Food is transferred into clean, food-grade stainless steel containers or compostable boxes labeled with the preparation time and date.</li>\n        <li><strong>Rapid Cold-Chain or Thermal Transport:</strong> Utilizing insulated transport bags, the surplus food is dispatched within a strict <strong>2-hour transit window</strong> to nearby shelters, night shelters, and orphanages.</li>\n        <li><strong>Safe Consumption Window:</strong> Food recipients are advised to consume the meals within 60 minutes of delivery, preventing bacterial multiplication.</li>\n      </ol>\n      <em>Long-term Benefit:</em> Prevents thousands of kilograms of greenhouse methane from decomposing in landfills while addressing urban nutritional hunger.",
      "rubric": "2 Marks for food safety testing and packaging protocols + 3 Marks for strict time-window transport logistics and social impact = 5 Marks"
    }
  },
  {
    "id": "oww4",
    "num": 4,
    "unit": "Unit 3: Incredible India",
    "title": "Our School — A Happy Place",
    "subtitle": "Fostering inclusive school communities, Green School practices, waste segregation, water harvesting, and student safety",
    "concepts": [
      "Inclusive Learning Spaces: A happy school welcomes every student regardless of physical ability, gender, mother tongue, or socioeconomic background; features barrier-free architecture (ramps, wide doors, tactile tactile tiles).",
      "Green School Concept: Schools that reduce environmental footprint through renewable energy (rooftop solar), rainwater harvesting, natural daylight, and active tree planting.",
      "Waste Segregation at Source: Using color-coded bins—Green for wet organic waste (biodegradable food scraps, fruit peels) and Blue for dry recyclables (paper, cardboard, clean plastic).",
      "School Composting: Creating an aerobic compost pit to convert fallen garden leaves and vegetable scraps from the mid-day meal into rich organic humus for the school garden.",
      "Swachh Bharat Swachh Vidyalaya: Safe treated drinking water, gender-segregated clean sanitation facilities, regular soap handwashing stations, and student health monitoring.",
      "Safety & Well-being: Creating emotional and physical security through anti-bullying policies, fire safety evacuation drills, and peer support systems."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"'Inter', system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Components of an Eco-Friendly &amp; Inclusive Green School</text>\n      <!-- Inclusive Ramp -->\n      <circle cx=\"85\" cy=\"85\" r=\"32\" fill=\"#d1fae5\" stroke=\"#10b981\" stroke-width=\"2\"/>\n      <text x=\"85\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">♿🏫</text>\n      <text x=\"85\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Inclusive Access</text>\n      <text x=\"85\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#047857\" text-anchor=\"middle\">Ramps &amp; Braille</text>\n      <path d=\"M125 85 L180 85\" stroke=\"#34d399\" stroke-width=\"2\"/>\n      <!-- Waste Bins -->\n      <circle cx=\"225\" cy=\"85\" r=\"32\" fill=\"#d1fae5\" stroke=\"#10b981\" stroke-width=\"2\"/>\n      <text x=\"225\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🗑️♻️</text>\n      <text x=\"225\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Waste Sorting</text>\n      <text x=\"225\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#047857\" text-anchor=\"middle\">Green &amp; Blue Bins</text>\n      <path d=\"M265 85 L320 85\" stroke=\"#34d399\" stroke-width=\"2\"/>\n      <!-- Compost Pit -->\n      <circle cx=\"365\" cy=\"85\" r=\"32\" fill=\"#d1fae5\" stroke=\"#10b981\" stroke-width=\"2\"/>\n      <text x=\"365\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🌱🪱</text>\n      <text x=\"365\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Compost Pit</text>\n      <text x=\"365\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#047857\" text-anchor=\"middle\">Organic Manure</text>\n      <path d=\"M405 85 L460 85\" stroke=\"#34d399\" stroke-width=\"2\"/>\n      <!-- Solar & Garden -->\n      <circle cx=\"500\" cy=\"85\" r=\"34\" fill=\"#fef3c7\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n      <text x=\"500\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">☀️🌻</text>\n      <text x=\"500\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#92400e\" text-anchor=\"middle\">Solar Energy</text>\n      <text x=\"500\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#b45309\" text-anchor=\"middle\">Clean Power &amp; Flora</text>\n    </svg>",
    "questions": [
      {
        "q": "What makes a school truly 'inclusive' and welcoming for all children, including children with special needs (Divyangjan)?",
        "category": "Social Values & Inclusion",
        "marks": 3,
        "ans": "An inclusive school ensures that every child, regardless of physical, sensory, or socio-economic differences, learns alongside their peers with dignity and full participation.\n        <br><br>\n        <strong>Key Elements of an Inclusive School:</strong>\n        <ol>\n          <li><strong>Barrier-Free Infrastructure:</strong> Gentle ramps with handrails alongside stairs, wide classroom doorways for wheelchairs, and accessible ground-floor toilets.</li>\n          <li><strong>Sensory Learning Aids:</strong> Tactile flooring tiles and Braille signage on classroom doors for visually challenged students; visual timetables and charts for hearing-impaired children.</li>\n          <li><strong>Culture of Empathy and Friendship:</strong> Teachers and peers who encourage collaborative group-work, celebrate diverse talents, and maintain a strict zero-tolerance policy toward bullying or teasing.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Definition of inclusive education and equal dignity",
            "marks": "1 Mark"
          },
          {
            "key": "Physical accommodations (ramps, wide doors, Braille)",
            "marks": "1 Mark"
          },
          {
            "key": "Social atmosphere of peer empathy and anti-bullying",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "Explain waste segregation at source. What types of waste belong in the Green Bin and the Blue Bin?",
        "category": "Waste Management",
        "marks": 3,
        "ans": "<strong>Waste Segregation at Source</strong> means separating different types of garbage at the exact moment and location they are generated, preventing contamination and enabling recycling and composting.\n        <br><br>\n        <strong>Color-Coded Segregation System:</strong>\n        <ul>\n          <li><strong>Green Bin (Wet / Biodegradable Waste):</strong> Organic matter that decomposes naturally into soil.\n            <br><em>Items:</em> Fruit and vegetable peels, leftover food, tea leaves, fallen leaves, eggshells, and used paper napkins.</li>\n          <li><strong>Blue Bin (Dry / Recyclable Waste):</strong> Non-biodegradable materials that can be processed and reused in factories.\n            <br><em>Items:</em> Plastic bottles, milk pouches, cardboard cartons, notebook paper, aluminum cans, glass bottles, and metal bottle caps.</li>\n        </ul>",
        "rubric": [
          {
            "key": "Definition and importance of sorting waste at source",
            "marks": "1 Mark"
          },
          {
            "key": "Green bin contents (biodegradable organic materials with examples)",
            "marks": "1 Mark"
          },
          {
            "key": "Blue bin contents (recyclable non-biodegradable items with examples)",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "How does a school compost pit turn organic waste into dark, nutrient-rich manure? Describe the biological process.",
        "category": "Biological Process & Soil Science",
        "marks": 4,
        "ans": "<strong>The School Composting Process:</strong>\n        <ol>\n          <li><strong>Digging the Pit:</strong> A shallow pit (about 1 metre deep) is dug in a shaded corner of the school garden.</li>\n          <li><strong>Layering Organic Materials:</strong>\n            <ul>\n              <li><em>Brown Layer:</em> Dry fallen leaves, shredded cardboard, and twigs (rich in Carbon).</li>\n              <li><em>Green Layer:</em> Vegetable peels, fruit rinds, and food scraps from the mid-day meal (rich in Nitrogen).</li>\n            </ul>\n          </li>\n          <li><strong>Role of Decomposers:</strong> Soil bacteria, fungi, and earthworms enter the moist pile. They feed on organic waste, breaking down complex plant matter into simple nutrients.</li>\n          <li><strong>Aeration &amp; Moisture:</strong> Turning the pile weekly provides oxygen for aerobic bacteria and prevents bad odors. Light sprinkling of water maintains essential humidity.</li>\n          <li><strong>Result (Humus):</strong> Within 6–8 weeks, the waste transforms into crumbly, dark brown, sweet-smelling organic manure (humus) that enriches garden soil without synthetic chemicals.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Setup and alternating brown (carbon) and green (nitrogen) layers",
            "marks": "1.5 Marks"
          },
          {
            "key": "Action of decomposers (bacteria, fungi, earthworms)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Outcome: organic manure/humus in 6-8 weeks",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "Activity: Create a 5-point 'School Cleanliness & Safety Inspection Checklist' that student monitors can execute weekly.",
        "category": "Practical Checklist & Leadership",
        "marks": 4,
        "ans": "<strong>Weekly Student Safety &amp; Cleanliness Audit Checklist:</strong>\n        <ol>\n          <li><strong>Drinking Water Station:</strong> Check that RO filters are operating, taps are not dripping, and surrounding drainage is clean with no stagnant puddles where mosquitoes could breed.</li>\n          <li><strong>Restrooms &amp; Handwashing:</strong> Verify that soap dispensers are fully filled, running water is available in all taps, and toilet floors are clean, dry, and sanitized.</li>\n          <li><strong>Waste Bins:</strong> Inspect classrooms and corridors to ensure that waste bins have lids, are properly separated into Green and Blue bins, and are emptied before overflowing.</li>\n          <li><strong>Corridor &amp; Staircase Safety:</strong> Ensure stair handrails are firmly anchored, pathways are free of obstacles, loose electrical wires, or slippery wet patches.</li>\n          <li><strong>Playground &amp; Sports Equipment:</strong> Check that swing chains, slides, and football goalposts are securely bolted without sharp protruding nails or broken glass on the field.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Five comprehensive, realistic inspection areas",
            "marks": "2.5 Marks"
          },
          {
            "key": "Clear hygiene, disease-prevention, and physical safety criteria",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "q": "What is the 'Green School' initiative, and how can students contribute to reducing their school's carbon footprint?",
        "category": "Environmental Citizenship",
        "marks": 3,
        "ans": "A <strong>Green School</strong> is an educational institution that actively designs its campus, operations, and curriculum to conserve natural resources, minimize waste, and foster environmental stewardship.\n        <br><br>\n        <strong>Student Contributions:</strong>\n        <ol>\n          <li><strong>Energy Conservation:</strong> Appoint 'Energy Monitors' in every classroom to turn off fans, tube-lights, and smartboards whenever the class moves to the playground or lab.</li>\n          <li><strong>Herbal Garden (Poshan Vatika):</strong> Plant native trees, flowering shrubs, and vegetables in school courtyards to enhance biodiversity and provide fresh produce for school meals.</li>\n          <li><strong>Zero Single-Use Plastic Policy:</strong> Bring water in reusable steel bottles and carry lunches in stainless steel tiffin boxes, completely banning disposable plastic wrappers.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Definition of Green School concept",
            "marks": "1 Mark"
          },
          {
            "key": "Practical student contributions (energy saving, planting, plastic elimination)",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "q": "Why is handwashing with soap for 20 seconds essential before eating? Explain the scientific rationale.",
        "category": "Hygiene & Preventative Health",
        "marks": 3,
        "ans": "Throughout the school day, students touch desks, door handles, sports balls, and library books, picking up millions of invisible bacteria and virus particles on their hands.\n        <br><br>\n        <strong>Scientific Rationale for 20 Seconds with Soap:</strong>\n        <ul>\n          <li><strong>Soap Breaks Lipid Membranes:</strong> Soap molecules have a polar water-loving head and a non-polar fat-loving tail. The tail binds to the protective fatty membrane of germs and dissolves it, destroying the virus or bacteria.</li>\n          <li><strong>Friction Dislodges Germs:</strong> Rubbing palms, backs of hands, between fingers, and under fingernails for at least <strong>20 seconds</strong> creates enough mechanical lather to detach stubborn germs from skin grooves.</li>\n          <li><strong>Rinsing Away Contaminants:</strong> Running water washes the dead microbes away, preventing diarrheal diseases, stomach infections, and influenza.</li>\n        </ul>",
        "rubric": [
          {
            "key": "Explanation of microbial transfer on surfaces",
            "marks": "1 Mark"
          },
          {
            "key": "Chemical action of soap on germ lipid membranes",
            "marks": "1 Mark"
          },
          {
            "key": "Importance of 20 seconds friction and thorough rinsing",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Our School — A Happy Place",
        "q": "[Textbook Activity & Question 1] In 'Our School — A Happy Place', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our School — A Happy Place</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Our School — A Happy Place",
        "q": "[Textbook Activity & Question 2] In 'Our School — A Happy Place', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our School — A Happy Place</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Our School — A Happy Place",
        "q": "[Textbook Activity & Question 3] In 'Our School — A Happy Place', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our School — A Happy Place</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Our School — A Happy Place",
        "q": "[Textbook Activity & Question 4] In 'Our School — A Happy Place', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our School — A Happy Place</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Our School — A Happy Place",
        "q": "[Textbook Activity & Question 5] In 'Our School — A Happy Place', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our School — A Happy Place</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Our School — A Happy Place",
        "q": "[Textbook Activity & Question 6] In 'Our School — A Happy Place', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our School — A Happy Place</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Our School — A Happy Place",
        "q": "[Textbook Activity & Question 7] In 'Our School — A Happy Place', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our School — A Happy Place</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Our School — A Happy Place",
        "q": "[Textbook Activity & Question 8] In 'Our School — A Happy Place', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our School — A Happy Place</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Our School — A Happy Place",
        "q": "[Textbook Activity & Question 9] In 'Our School — A Happy Place', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our School — A Happy Place</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Our School — A Happy Place",
        "q": "[Textbook Activity & Question 10] In 'Our School — A Happy Place', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our School — A Happy Place</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Our School — A Happy Place",
        "q": "[Textbook Activity & Question 11] In 'Our School — A Happy Place', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our School — A Happy Place</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Our School — A Happy Place",
        "q": "[Textbook Activity & Question 12] In 'Our School — A Happy Place', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our School — A Happy Place</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Our School — A Happy Place",
        "q": "[Textbook Activity & Question 13] In 'Our School — A Happy Place', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our School — A Happy Place</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Our School — A Happy Place",
        "q": "[Textbook Activity & Question 14] In 'Our School — A Happy Place', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our School — A Happy Place</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Our School — A Happy Place",
        "q": "[Textbook Activity & Question 15] In 'Our School — A Happy Place', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our School — A Happy Place</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Our School — A Happy Place",
        "q": "[Textbook Activity & Question 16] In 'Our School — A Happy Place', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our School — A Happy Place</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Transforming an Idle School Courtyard into a Biodiverse Learning Eco-Hub",
      "text": "An unpaved 200-square-metre courtyard behind the school cafeteria was filled with discarded furniture, thorny weeds, and plastic litter. The Student Council proposed reclaiming this space as an educational Eco-Hub.",
      "question": "Develop an actionable proposal for the School Principal outlining how students, teachers, and parents can collaborate to transform this abandoned courtyard into a self-sustaining biodiversity zone.",
      "answer": "<strong>Action Proposal: School Biodiversity Learning Hub</strong>\n      <ol>\n        <li><strong>Community Clean-up &amp; Shramdaan:</strong> Organize a Saturday volunteer drive with students, teachers, and parents to clear weeds, collect plastic for recycling, and repair salvageable wooden desks into garden benches.</li>\n        <li><strong>Kitchen Garden (Poshan Vatika):</strong> Use discarded tyres and wooden crates as raised planting beds to grow mint, coriander, spinach, and tomatoes irrigated using wastewater from the kitchen rice-rinsing station.</li>\n        <li><strong>Pollinator Habitat:</strong> Plant indigenous nectar-rich flowering shrubs (Marigold, Hibiscus, Tulsi) to attract honeybees, butterflies, and ladybirds for hands-on pollination lessons.</li>\n        <li><strong>Twin Aerobic Compost Bins:</strong> Construct two brick-lined composting chambers fed by cafeteria organic scraps, producing dark fertilizer for the courtyard garden.</li>\n        <li><strong>Outdoor Nature Classroom:</strong> Place log seats under shaded trees where science, art, and environmental studies classes are conducted in the fresh air.</li>\n      </ol>",
      "rubric": "2 Marks for collaborative clean-up and recycling plan + 3 Marks for educational integration (kitchen garden, pollinator plants, compost bins, outdoor classroom) = 5 Marks"
    }
  },
  {
    "id": "oww5",
    "num": 5,
    "unit": "Unit 3: Incredible India",
    "title": "Our Vibrant Country",
    "subtitle": "Celebrating India's physical geography, linguistic diversity, seasonal harvest festivals, indigenous folk arts, and national unity",
    "concepts": [
      "Physiographic Diversity: India spans six distinct geographical zones—Northern Himalayan Mountains, Northern Alluvial Plains, Great Indian Desert (Thar), Peninsular Deccan Plateau, Coastal Plains, and Island Groups (Andaman & Nicobar, Lakshadweep).",
      "Political Geography: India is a sovereign democratic republic comprising 28 States and 8 Union Territories with New Delhi as the National Capital.",
      "Harvest & Seasonal Festivals: Festivals celebrate agricultural cycles and nature's generosity—Baisakhi (Punjab), Makar Sankranti (North/West), Pongal (Tamil Nadu), Bihu (Assam), and Onam (Kerala).",
      "Indigenous Folk Art Traditions: Renowned regional folk arts using natural minerals and plant dyes include Madhubani (Bihar), Warli (Maharashtra), Pattachitra (Odisha), and Kalamkari (Andhra Pradesh).",
      "Traditional Cuisines & Attire: Regional food and clothing reflect local climate and crops—e.g. Makki ki Roti & Sarson ka Saag in chilly Punjab winters; Appam and Fish Curry in coastal humid Kerala.",
      "Unity in Diversity (अनेकता में एकता): Despite distinct regional languages, scripts, attire, and customs, constitutional values and shared cultural heritage bind the nation as one family."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fff7ed\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"'Inter', system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#c2410c\" text-anchor=\"middle\">India's Geographic &amp; Cultural Tapestry</text>\n      <!-- Himalayas -->\n      <circle cx=\"85\" cy=\"85\" r=\"32\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n      <text x=\"85\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🏔️</text>\n      <text x=\"85\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Himalayas</text>\n      <text x=\"85\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#c2410c\" text-anchor=\"middle\">Northern Crown</text>\n      <path d=\"M125 85 L180 85\" stroke=\"#fed7aa\" stroke-width=\"2\"/>\n      <!-- Plains & Harvest -->\n      <circle cx=\"225\" cy=\"85\" r=\"32\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n      <text x=\"225\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🌾🌾</text>\n      <text x=\"225\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Fertile Plains</text>\n      <text x=\"225\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#c2410c\" text-anchor=\"middle\">Harvest Festivals</text>\n      <path d=\"M265 85 L320 85\" stroke=\"#fed7aa\" stroke-width=\"2\"/>\n      <!-- Folk Art -->\n      <circle cx=\"365\" cy=\"85\" r=\"32\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n      <text x=\"365\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🎨🖌️</text>\n      <text x=\"365\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Folk Arts</text>\n      <text x=\"365\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#c2410c\" text-anchor=\"middle\">Warli &amp; Madhubani</text>\n      <path d=\"M405 85 L460 85\" stroke=\"#fed7aa\" stroke-width=\"2\"/>\n      <!-- Coastal & Unity -->\n      <circle cx=\"500\" cy=\"85\" r=\"34\" fill=\"#ecfdf5\" stroke=\"#059669\" stroke-width=\"2.5\"/>\n      <text x=\"500\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🇮🇳✨</text>\n      <text x=\"500\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#065f46\" text-anchor=\"middle\">Unity in Diversity</text>\n      <text x=\"500\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#047857\" text-anchor=\"middle\">28 States / 8 UTs</text>\n    </svg>",
    "questions": [
      {
        "q": "Name the six major physiographic (physical) divisions of India. Briefly describe the characteristics of two of them.",
        "category": "Physical Geography",
        "marks": 4,
        "ans": "India's six major physiographic divisions are:\n        <ol>\n          <li>The Northern Mountains (The Great Himalayas)</li>\n          <li>The Northern Alluvial Plains (Indo-Gangetic Plains)</li>\n          <li>The Great Indian Desert (Thar Desert)</li>\n          <li>The Peninsular Plateau (Central Highlands &amp; Deccan Plateau)</li>\n          <li>The Coastal Plains (Western &amp; Eastern Coastal Belts)</li>\n          <li>The Island Groups (Lakshadweep in Arabian Sea &amp; Andaman and Nicobar in Bay of Bengal)</li>\n        </ol>\n        <strong>Detailed Characteristics of Two Divisions:</strong>\n        <ul>\n          <li><em>The Great Himalayas:</em> Earth's highest mountain range, acting as a climatic barrier that prevents freezing Central Asian winds from entering India and intercepts monsoon clouds to cause heavy rainfall. It is the perennial source of rivers like Ganga, Yamuna, and Indus.</li>\n          <li><em>The Coastal Plains:</em> Narrow coastal strips flanked by the Arabian Sea and Bay of Bengal featuring fertile deltas, mangrove forests (Sundarbans), fishing harbors, and coconut plantations.</li>\n        </ul>",
        "rubric": [
          {
            "key": "Complete list of 6 physiographic divisions",
            "marks": "2 Marks"
          },
          {
            "key": "Detailed description of two chosen landforms",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "q": "How do harvest festivals across different Indian states celebrate agriculture and seasonal changes? Give three examples.",
        "category": "Cultural Traditions",
        "marks": 3,
        "ans": "Harvest festivals commemorate the successful ripening and gathering of agricultural crops, expressing gratitude to the Sun, Earth, rain, and working cattle.\n        <br><br>\n        <strong>Three Prominent Harvest Festivals:</strong>\n        <ol>\n          <li><strong>Pongal (Tamil Nadu):</strong> A 4-day festival celebrated in mid-January. Freshly harvested rice is boiled with milk and jaggery in clay pots until it spills over, symbolizing abundance and prosperity (<em>Pongalo Pongal!</em>). Cattle are decorated on <em>Mattu Pongal</em>.</li>\n          <li><strong>Bihu (Bhogali / Magh Bihu in Assam):</strong> Marks the end of winter harvesting. Families build thatch pavilions (<em>Bhelaghar</em>), light bonfires (<em>Meji</em>), and feast on pitha and roasted rice cakes while dancing to dhol beats.</li>\n          <li><strong>Makar Sankranti (North &amp; West India):</strong> Celebrates the Sun's northward transit (Uttarayana). Celebrated with holy river dips, flying colorful kites, and eating sesame seeds and jaggery (<em>Tilgul</em>).</li>\n        </ol>",
        "rubric": [
          {
            "key": "Concept of harvest festivals celebrating agricultural abundance",
            "marks": "1 Mark"
          },
          {
            "key": "Accurate details for two regional harvest festivals (Pongal, Bihu, Sankranti)",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "q": "Compare two traditional Indian folk art forms: Madhubani painting and Warli art. What natural materials and themes do they use?",
        "category": "Traditional Arts & Crafts",
        "marks": 4,
        "ans": "<strong>Comparison of Folk Art Forms:</strong>\n        <table style=\"width:100%;border-collapse:collapse;margin:10px 0;font-size:0.88rem;\">\n          <tr style=\"background:#fff7ed;font-weight:700;\"><th style=\"border:1px solid #cbd5e1;padding:6px;\">Feature</th><th style=\"border:1px solid #cbd5e1;padding:6px;\">Madhubani Painting (Mithila)</th><th style=\"border:1px solid #cbd5e1;padding:6px;\">Warli Art</th></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Origin Region</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Mithila region of Bihar</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">North Sahyadri region of Maharashtra</td></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Base Surface</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Mud walls, handmade paper, canvas</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Red ochre / cow dung mud plaster walls</td></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Colors &amp; Materials</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Natural pigments: turmeric (yellow), indigo (blue), soot (black), rice paste (white)</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">White paste made from ground rice, water, and gum binder; bamboo sticks as brushes</td></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Core Motifs &amp; Themes</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Sun, moon, fish, birds, lotus, and deities drawn with double-line borders</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Geometric circles, triangles, Tarpa dance in circles, harvest, and hunting</td></tr>\n        </table>",
        "rubric": [
          {
            "key": "State of origin and base canvas for both art forms",
            "marks": "1.5 Marks"
          },
          {
            "key": "Natural pigments and tools used",
            "marks": "1.5 Marks"
          },
          {
            "key": "Signature geometric and thematic motifs identified",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "How does geographical climate dictate the clothing, shelter, and staple diet of people living in Ladakh versus Kerala?",
        "category": "Climatic Adaptation",
        "marks": 4,
        "ans": "Geographical terrain and climate directly shape regional lifestyles:\n        <br><br>\n        <strong>1. Ladakh (High-Altitude Cold Desert):</strong>\n        <ul>\n          <li><em>Climate:</em> Extremely cold winters (-30°C), scarce rainfall, strong solar radiation.</li>\n          <li><em>Clothing:</em> Thick sheep wool robes (<em>Gonka</em>), Pashmina shawls, and felt wool boots.</li>\n          <li><em>Shelter:</em> Thick mud-brick houses with small windows and flat wooden roofs used for drying apricots in autumn. Ground floor houses animals during freezing winter months.</li>\n          <li><em>Diet:</em> Barley (<em>Tsampa</em>), yak milk butter, Thukpa noodle soup, and hot butter tea (<em>Gur-gur</em>).</li>\n        </ul>\n        <strong>2. Kerala (Tropical Humid Coastal Belt):</strong>\n        <ul>\n          <li><em>Climate:</em> Warm, tropical, humid with heavy monsoon rainfall.</li>\n          <li><em>Clothing:</em> Light, breathable white cotton clothes (<em>Mundu</em> and cotton sarees).</li>\n          <li><em>Shelter:</em> Houses with steeply sloping tiled roofs to shed torrential rainwater quickly, large windows, and open verandahs.</li>\n          <li><em>Diet:</em> Rice, fish curry, tapioca, coconut in every dish, and banana chips.</li>\n        </ul>",
        "rubric": [
          {
            "key": "Ladakh: woollen attire, mud insulation houses, barley/yak diet",
            "marks": "2 Marks"
          },
          {
            "key": "Kerala: light cottons, sloping roofs, coconut/rice/fish diet",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "q": "What is the historical meaning of the national motto 'Unity in Diversity'? Give two examples from everyday Indian life.",
        "category": "Civic Understanding",
        "marks": 3,
        "ans": "<strong>'Unity in Diversity' (अनेकता में एकता):</strong> Coined by India's first Prime Minister Jawaharlal Nehru, this phrase describes how people belonging to hundreds of diverse languages, religions, tribal groups, cuisines, and regional cultures coexist peacefully under a shared national identity and constitutional democracy.\n        <br><br>\n        <strong>Two Everyday Examples:</strong>\n        <ol>\n          <li><em>National Celebrations:</em> On Independence Day and Republic Day, citizens from Kashmir to Kanyakumari sing the National Anthem (written in Bengali by Rabindranath Tagore) and honor the Tricolour.</li>\n          <li><em>Culinary Fusion:</em> South Indian Idli-Dosa, Punjabi Dal Makhani, Gujarati Dhokla, and Bengali sweets are loved and cooked in households across every single state in India.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Explanation of Unity in Diversity concept",
            "marks": "1.5 Marks"
          },
          {
            "key": "Two vibrant everyday cultural examples (celebrations and food)",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "q": "Map Skill Task: On an outline map of India, locate and label the capital cities of: (a) Assam, (b) Rajasthan, (c) Tamil Nadu, and (d) West Bengal.",
        "category": "Map & Spatial Knowledge",
        "marks": 3,
        "ans": "<strong>State and Capital Identifications:</strong>\n        <ol>\n          <li><strong>Assam:</strong> Capital is <strong>Dispur</strong> (near Guwahati in northeastern India along River Brahmaputra).</li>\n          <li><strong>Rajasthan:</strong> Capital is <strong>Jaipur</strong> (known as the Pink City, located in western India).</li>\n          <li><strong>Tamil Nadu:</strong> Capital is <strong>Chennai</strong> (coastal metropolis located on the Coromandel Coast in southeastern India).</li>\n          <li><strong>West Bengal:</strong> Capital is <strong>Kolkata</strong> (historical cultural capital situated on the banks of River Hooghly).</li>\n        </ol>",
        "rubric": [
          {
            "key": "Correct pairing of all 4 state capitals",
            "marks": "2 Marks"
          },
          {
            "key": "Accurate geographical orientation in India",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Our Vibrant Country",
        "q": "[Textbook Activity & Question 1] In 'Our Vibrant Country', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our Vibrant Country</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Our Vibrant Country",
        "q": "[Textbook Activity & Question 2] In 'Our Vibrant Country', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our Vibrant Country</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Our Vibrant Country",
        "q": "[Textbook Activity & Question 3] In 'Our Vibrant Country', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our Vibrant Country</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Our Vibrant Country",
        "q": "[Textbook Activity & Question 4] In 'Our Vibrant Country', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our Vibrant Country</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Our Vibrant Country",
        "q": "[Textbook Activity & Question 5] In 'Our Vibrant Country', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our Vibrant Country</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Our Vibrant Country",
        "q": "[Textbook Activity & Question 6] In 'Our Vibrant Country', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our Vibrant Country</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Our Vibrant Country",
        "q": "[Textbook Activity & Question 7] In 'Our Vibrant Country', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our Vibrant Country</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Our Vibrant Country",
        "q": "[Textbook Activity & Question 8] In 'Our Vibrant Country', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our Vibrant Country</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Our Vibrant Country",
        "q": "[Textbook Activity & Question 9] In 'Our Vibrant Country', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our Vibrant Country</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Our Vibrant Country",
        "q": "[Textbook Activity & Question 10] In 'Our Vibrant Country', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our Vibrant Country</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Our Vibrant Country",
        "q": "[Textbook Activity & Question 11] In 'Our Vibrant Country', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our Vibrant Country</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Our Vibrant Country",
        "q": "[Textbook Activity & Question 12] In 'Our Vibrant Country', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our Vibrant Country</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Our Vibrant Country",
        "q": "[Textbook Activity & Question 13] In 'Our Vibrant Country', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our Vibrant Country</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Our Vibrant Country",
        "q": "[Textbook Activity & Question 14] In 'Our Vibrant Country', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our Vibrant Country</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Our Vibrant Country",
        "q": "[Textbook Activity & Question 15] In 'Our Vibrant Country', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our Vibrant Country</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Our Vibrant Country",
        "q": "[Textbook Activity & Question 16] In 'Our Vibrant Country', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Our Vibrant Country</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Student-Curated 'Incredible India Heritage Festival' Exhibition",
      "text": "To celebrate National Integration Day, Class 5 students were asked to set up five regional discovery pavilions representing North, South, East, West, and North-East India.",
      "question": "Design an interactive pavilion layout for the North-Eastern States (The Eight Sisters) showcasing their indigenous handlooms, bamboo craftsmanship, living root bridges, and organic agriculture.",
      "answer": "<strong>Interactive North-Eastern Discovery Pavilion Plan:</strong>\n      <ol>\n        <li><strong>Living Root Bridge Diorama (Meghalaya):</strong> A 3D clay model displaying how Khasi villagers guide the flexible roots of <em>Ficus elastica</em> rubber fig trees across mountain torrents, demonstrating living botanical engineering.</li>\n        <li><strong>Bamboo &amp; Cane Craft Center (Assam &amp; Tripura):</strong> Hands-on display of eco-friendly bamboo items—flutes, fishing traps (<em>Polo</em>), woven hats (<em>Japi</em>), and zero-plastic water tumblers.</li>\n        <li><strong>Indigenous Handloom Textiles (Nagaland &amp; Manipur):</strong> Vibrant handwoven tribal shawls featuring geometric Naga warrior patterns and Manipuri <em>Inaphi</em> shawls woven on traditional loin-looms.</li>\n        <li><strong>Organic Agriculture &amp; Tea Tasting (Sikkim &amp; Assam):</strong> Information panels highlighting Sikkim as India's first 100% certified organic farming state, alongside small samples of aromatic orthodox Assam CTC black tea.</li>\n        <li><strong>Folk Music Corner:</strong> Recorded melodies of the Bihu dance, bamboo dance (<em>Cheraw</em> from Mizoram), and traditional horns (<em>Singphos</em>).</li>\n      </ol>",
      "rubric": "2 Marks for authentic cultural representation of North-East states + 3 Marks for interactive student learning stations (bamboo crafts, organic farming, living root bridges) = 5 Marks"
    }
  },
  {
    "id": "oww6",
    "num": 6,
    "unit": "Unit 3: Incredible India",
    "title": "Some Unique Places",
    "subtitle": "Investigating extraordinary ecological habitats: Ladakh's cold desert, Meghalaya's living root bridges, the Great Rann of Kutch, and Loktak Lake",
    "concepts": [
      "Ladakh (High-Altitude Cold Desert): Located over 3,000 metres above sea level in the rain-shadow of the Himalayas; features freezing arid climate, double-humped Bactrian camels, and Changpa nomads rearing Pashmina goats.",
      "Living Root Bridges (Jingkieng Jri) of Meghalaya: Grown across decades by indigenous Khasi and Jaintia tribes who guide aerial roots of *Ficus elastica* trees across roaring monsoon rivers; live structures grow stronger with age.",
      "The Great Rann of Kutch (Gujarat): World's largest seasonal salt marsh; submerged during monsoons and transformed into a gleaming white salt desert in winter; home to the endangered Indian Wild Ass (*Ghudkhur*).",
      "Loktak Lake (Manipur): The only floating lake on Earth, covered with floating circular biomass islands called *phumdis*; houses the world's only floating wildlife sanctuary—Keibul Lamjao National Park—home to the endangered Sangai brow-antlered deer.",
      "Mawsynram & Cherrapunji: World's wettest inhabited locations receiving over 11,000 mm of annual rainfall due to funneling monsoon clouds trapped by Khasi Hills.",
      "Ecological Sensitivity: These unique natural habitats require strict environmental safeguards against plastic litter, unchecked commercial tourism, and habitat degradation."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"'Inter', system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">India's Extraordinary Ecological Marvels</text>\n      <!-- Ladakh -->\n      <circle cx=\"85\" cy=\"85\" r=\"32\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/>\n      <text x=\"85\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🏔️🐪</text>\n      <text x=\"85\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">Cold Desert</text>\n      <text x=\"85\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#15803d\" text-anchor=\"middle\">Leh &amp; Ladakh</text>\n      <path d=\"M125 85 L180 85\" stroke=\"#86efac\" stroke-width=\"2\"/>\n      <!-- Root Bridge -->\n      <circle cx=\"225\" cy=\"85\" r=\"32\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/>\n      <text x=\"225\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🌉🌳</text>\n      <text x=\"225\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">Root Bridges</text>\n      <text x=\"225\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#15803d\" text-anchor=\"middle\">Meghalaya Rain</text>\n      <path d=\"M265 85 L320 85\" stroke=\"#86efac\" stroke-width=\"2\"/>\n      <!-- Salt Desert -->\n      <circle cx=\"365\" cy=\"85\" r=\"32\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/>\n      <text x=\"365\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🧂🦩</text>\n      <text x=\"365\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">Rann of Kutch</text>\n      <text x=\"365\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#15803d\" text-anchor=\"middle\">White Salt Marsh</text>\n      <path d=\"M405 85 L460 85\" stroke=\"#86efac\" stroke-width=\"2\"/>\n      <!-- Loktak Lake -->\n      <circle cx=\"500\" cy=\"85\" r=\"34\" fill=\"#dcfce7\" stroke=\"#059669\" stroke-width=\"2.5\"/>\n      <text x=\"500\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🏝️🦌</text>\n      <text x=\"500\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#065f46\" text-anchor=\"middle\">Loktak Lake</text>\n      <text x=\"500\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#047857\" text-anchor=\"middle\">Floating Phumdis</text>\n    </svg>",
    "questions": [
      {
        "q": "Why is Ladakh described as a 'Cold Desert'? How does its climate differ from the hot Thar Desert of Rajasthan?",
        "category": "Comparative Geography",
        "marks": 4,
        "ans": "<strong>Why Ladakh is a Cold Desert:</strong>\n        <ol>\n          <li><em>High Altitude Rain Shadow:</em> Ladakh lies in the Himalayan rain shadow at an average elevation exceeding 3,000 metres. The massive Himalayan ranges block monsoon clouds from reaching it, resulting in sparse annual rainfall (less than 10 cm).</li>\n          <li><em>Freezing Temperatures:</em> Winter temperatures drop below -30°C, and rivers freeze solid. Air is so thin that solar radiation is intense while shadows remain freezing cold.</li>\n        </ol>\n        <strong>Differences with Thar Desert (Rajasthan):</strong>\n        <ul>\n          <li><em>Thar Desert:</em> Characterized by scorching summer temperatures exceeding 48°C, sweeping sand dunes, and xerophytic thorny shrubs.</li>\n          <li><em>Ladakh Cold Desert:</em> Characterized by sub-zero freezing temperatures, snow-capped rocky mountains, glaciers, and sparse alpine vegetation along stream beds.</li>\n        </ul>",
        "rubric": [
          {
            "key": "Explanation of high altitude and Himalayan rain shadow effect",
            "marks": "2 Marks"
          },
          {
            "key": "Clear contrast between freezing rocky desert and scorching sandy Thar desert",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "q": "Explain how the Khasi and Jaintia tribes of Meghalaya create 'Living Root Bridges'. Why are these bridges superior to modern steel or wooden bridges in rainforests?",
        "category": "Indigenous Bio-Engineering",
        "marks": 4,
        "ans": "<strong>Creation of Living Root Bridges (Jingkieng Jri):</strong>\n        <ol>\n          <li>The Khasi and Jaintia tribes guide the flexible, aerial secondary roots of the <em>Ficus elastica</em> (Indian rubber fig tree) across mountain river chasms using hollowed betel nut tree trunks.</li>\n          <li>Over 15 to 30 years, the aerial roots reach the opposite bank and take root in the soil.</li>\n          <li>Villagers weave and intertwine the living roots together with rocks and timber, forming sturdy suspended pathways across the gorges.</li>\n        </ol>\n        <strong>Why They are Superior in Rainforests:</strong>\n        <ul>\n          <li><em>Living Structures Never Rot:</em> In Meghalaya's extremely humid climate (receiving 11,000+ mm rain), steel bridges rust and timber bridges rot quickly. Living root bridges remain alive and absorb water.</li>\n          <li><em>Strengthen with Age:</em> As the tree grows and root trunks thicken, the bridge becomes sturdier over decades, supporting over 50 people simultaneously and surviving for centuries.</li>\n        </ul>",
        "rubric": [
          {
            "key": "Step-by-step description of guiding Ficus elastica aerial roots",
            "marks": "2 Marks"
          },
          {
            "key": "Scientific explanation of why living roots do not rot and strengthen over time",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "q": "What makes Loktak Lake in Manipur globally unique? What are 'phumdis' and which endangered animal lives on them?",
        "category": "Ecological Sanctuaries",
        "marks": 4,
        "ans": "<strong>Unique Global Features of Loktak Lake:</strong>\n        <ol>\n          <li>Loktak Lake is the largest freshwater lake in Northeast India and the <strong>world's only floating lake</strong>.</li>\n          <li><strong>What are Phumdis?</strong> Phumdis are thick, floating circular islands formed from a heterogeneous mass of soil, organic vegetation, and decomposed plant roots. Local fishermen (called *Meiteis*) build small thatched huts on larger phumdis to live and fish.</li>\n          <li><strong>Keibul Lamjao National Park:</strong> The southern part of the lake houses the world's only floating national park (spanning 40 sq km).</li>\n          <li><strong>Endangered Inhabitant:</strong> It is the exclusive natural home of the <strong>Sangai</strong> (Brow-antlered deer), fondly called the <em>Dancing Deer of Manipur</em> because it treads delicately on the spongy, floating phumdi vegetation.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Identification of Loktak Lake as world's only floating lake",
            "marks": "1 Mark"
          },
          {
            "key": "Accurate description of floating phumdis (soil and organic mats)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Keibul Lamjao National Park and endangered Sangai deer",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "q": "Describe the Great Rann of Kutch in Gujarat. How does it transition from a submerged sea into a white salt desert?",
        "category": "Geomorphology & Wildlife",
        "marks": 3,
        "ans": "The <strong>Great Rann of Kutch</strong> in Gujarat is the world's largest seasonal salt marsh:\n        <ol>\n          <li><strong>Monsoon Inundation:</strong> During the summer southwest monsoon (July to September), sea water from the Arabian Sea rushes in, flooding the vast low-lying basin into a shallow saline lake.</li>\n          <li><strong>Winter Transformation into White Desert:</strong> As the rains stop and the scorching winter sun evaporates the shallow water, billions of tons of crystalline salt remain deposited across thousands of square kilometers, creating a dazzling, snow-white salt plain.</li>\n          <li><strong>Unique Wildlife:</strong> The Little Rann of Kutch is the last global refuge of the endangered <strong>Indian Wild Ass</strong> (<em>Khur</em>), and its shallow saline waters host nesting colonies of thousands of migratory pink Greater Flamingos.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Monsoon flooding from Arabian Sea explained",
            "marks": "1 Mark"
          },
          {
            "key": "Evaporation leading to sparkling white salt crust",
            "marks": "1 Mark"
          },
          {
            "key": "Identification of Indian Wild Ass and Flamingos",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "Why are Changpa nomads of Ladakh deeply connected with the Pashmina goat? How does cold weather influence Pashmina wool?",
        "category": "Animal Adaptations & Livelihood",
        "marks": 3,
        "ans": "The <strong>Changpas</strong> are a nomadic pastoral tribe who live in high-altitude Changthang plateau at heights of 4,500 to 5,000 metres in portable cone-shaped yak-hair tents called <em>Rebo</em>.\n        <br><br>\n        <strong>Connection with Pashmina Goats:</strong>\n        <ul>\n          <li>At extreme sub-zero temperatures (-40°C), the goats grow an exceptionally fine, warm undercoat of ultra-soft hair (underfleece) to protect their bodies from freezing.</li>\n          <li>This hair is six times thinner than a human hair and cannot be spun by machine. In spring, the goats shed this fine coat, which the Changpas comb out carefully.</li>\n          <li>Weavers in Kashmir hand-spin and hand-weave this fleece into world-renowned <strong>Pashmina shawls</strong>, providing the nomads with essential livelihood.</li>\n        </ul>",
        "rubric": [
          {
            "key": "Identification of Changpa tribe and high-altitude nomadic life",
            "marks": "1 Mark"
          },
          {
            "key": "Biological adaptation of goat growing fine underfleece in freezing cold",
            "marks": "1 Mark"
          },
          {
            "key": "Handwoven Pashmina shawl production and cultural trade",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "Why do Mawsynram and Cherrapunji receive the highest rainfall in the world? Explain the role of the Khasi Hills.",
        "category": "Meteorology & Topography",
        "marks": 3,
        "ans": "Mawsynram and Cherrapunji in Meghalaya receive over 11,000 mm of rain annually due to their unique funnel-shaped topography:\n        <ol>\n          <li>Moisture-laden monsoon winds traveling north from the warm Bay of Bengal hit the sudden, steep vertical wall of the <strong>Khasi Hills</strong>.</li>\n          <li>The hills act like a gigantic funnel, trapping the rain clouds in a deep canyon.</li>\n          <li>Forced to rise rapidly to over 1,400 metres, the air cools rapidly, causing intense, continuous condensation and torrential orographic rainfall over these two towns.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Bay of Bengal monsoon winds identified",
            "marks": "1 Mark"
          },
          {
            "key": "Funnel effect and barrier role of the steep Khasi Hills",
            "marks": "1 Mark"
          },
          {
            "key": "Rapid orographic cooling resulting in world-record rainfall",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Some Unique Places",
        "q": "[Textbook Activity & Question 1] In 'Some Unique Places', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Some Unique Places</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Some Unique Places",
        "q": "[Textbook Activity & Question 2] In 'Some Unique Places', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Some Unique Places</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Some Unique Places",
        "q": "[Textbook Activity & Question 3] In 'Some Unique Places', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Some Unique Places</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Some Unique Places",
        "q": "[Textbook Activity & Question 4] In 'Some Unique Places', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Some Unique Places</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Some Unique Places",
        "q": "[Textbook Activity & Question 5] In 'Some Unique Places', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Some Unique Places</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Some Unique Places",
        "q": "[Textbook Activity & Question 6] In 'Some Unique Places', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Some Unique Places</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Some Unique Places",
        "q": "[Textbook Activity & Question 7] In 'Some Unique Places', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Some Unique Places</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Some Unique Places",
        "q": "[Textbook Activity & Question 8] In 'Some Unique Places', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Some Unique Places</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Some Unique Places",
        "q": "[Textbook Activity & Question 9] In 'Some Unique Places', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Some Unique Places</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Some Unique Places",
        "q": "[Textbook Activity & Question 10] In 'Some Unique Places', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Some Unique Places</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Some Unique Places",
        "q": "[Textbook Activity & Question 11] In 'Some Unique Places', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Some Unique Places</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Some Unique Places",
        "q": "[Textbook Activity & Question 12] In 'Some Unique Places', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Some Unique Places</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Some Unique Places",
        "q": "[Textbook Activity & Question 13] In 'Some Unique Places', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Some Unique Places</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Some Unique Places",
        "q": "[Textbook Activity & Question 14] In 'Some Unique Places', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Some Unique Places</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Some Unique Places",
        "q": "[Textbook Activity & Question 15] In 'Some Unique Places', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Some Unique Places</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Some Unique Places",
        "q": "[Textbook Activity & Question 16] In 'Some Unique Places', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Some Unique Places</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Eco-Tourism Guidelines for Fragile High-Altitude and Wetland Ecosystems",
      "text": "Booming tourism in Ladakh and Loktak Lake has resulted in diesel-spewing tourist vehicles, discarded single-use plastic water bottles in mountain streams, and motorboats disturbing nesting birds and wildlife.",
      "question": "Formulate a code of conduct for responsible tourists visiting unique ecological wonders like Ladakh and Loktak Lake to preserve their delicate biodiversity.",
      "answer": "<strong>Responsible Eco-Tourist Code of Conduct:</strong>\n      <ol>\n        <li><strong>Zero Single-Use Plastic Mandate:</strong> Carry a refillable copper/steel water bottle; use community water-filtration refilling stations instead of buying commercial disposable plastic bottles.</li>\n        <li><strong>Leave No Trace (Pack It In, Pack It Out):</strong> Carry all personal snack wrappers and waste back to major towns with recycling facilities rather than littering remote mountain passes or lake shores.</li>\n        <li><strong>Silent &amp; Clean Transport:</strong> Restrict motorboat speeds on Loktak Lake near the Keibul Lamjao floating sanctuary; encourage electric vehicles and bicycles in Leh town.</li>\n        <li><strong>Respect Indigenous Lifestyles &amp; Wildlife:</strong> Keep a safe distance from wildlife (Pashmina goats, Sangai deer, wild asses); never feed wild animals human packaged food.</li>\n        <li><strong>Support Local Communities:</strong> Stay in traditional village homestays and purchase authentic handmade crafts (like local apricot jam and handwoven woolens) directly from indigenous artisans.</li>\n      </ol>",
      "rubric": "2 Marks for waste and plastic prevention rules + 3 Marks for wildlife respect, noise limits, and sustainable local community homestay support = 5 Marks"
    }
  },
  {
    "id": "oww7",
    "num": 7,
    "unit": "Unit 4: Things Around Us",
    "title": "Energy — How Things Work",
    "subtitle": "Understanding energy forms, renewable vs fossil sources, everyday mechanical transformations, and sustainable conservation",
    "concepts": [
      "Definition of Energy: Energy is the capacity or ability to do work; it exists in many forms including solar, thermal, mechanical, chemical, electrical, and kinetic energy.",
      "The Sun as Primary Energy Source: Sunlight powers plant photosynthesis, drives wind circulation, and evaporates water in the hydrological cycle, making the Sun the ultimate driver of Earth's energy.",
      "Renewable Energy: Inexhaustible natural sources that regenerate quickly and do not emit greenhouse gases—Solar (photovoltaic panels), Wind (turbines), Hydroelectric (flowing water), and Biogas.",
      "Non-Renewable Fossil Fuels: Coal, petroleum (petrol, diesel), and natural gas formed over millions of years from buried prehistoric organisms; exhaustible and causes air pollution and global warming.",
      "Energy Transformations in Everyday Machines: Energy cannot be created or destroyed, only transformed (e.g. Electric iron: electrical to thermal; Fan: electrical to kinetic; Battery: chemical to electrical).",
      "Simple Machines: Force multipliers and directional tools that make mechanical work easier—inclined plane, lever, pulley, screw, wheel and axle, and wedge."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"'Inter', system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Renewable Clean Energy Sources &amp; Transformations</text>\n      <!-- Solar Energy -->\n      <circle cx=\"85\" cy=\"85\" r=\"32\" fill=\"#fef3c7\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n      <text x=\"85\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">☀️🔋</text>\n      <text x=\"85\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Solar Power</text>\n      <text x=\"85\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#b45309\" text-anchor=\"middle\">PV Cells</text>\n      <path d=\"M125 85 L180 85\" stroke=\"#fcd34d\" stroke-width=\"2\"/>\n      <!-- Wind Energy -->\n      <circle cx=\"225\" cy=\"85\" r=\"32\" fill=\"#fef3c7\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n      <text x=\"225\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">💨🌀</text>\n      <text x=\"225\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Wind Power</text>\n      <text x=\"225\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#b45309\" text-anchor=\"middle\">Turbine Blades</text>\n      <path d=\"M265 85 L320 85\" stroke=\"#fcd34d\" stroke-width=\"2\"/>\n      <!-- Hydro Energy -->\n      <circle cx=\"365\" cy=\"85\" r=\"32\" fill=\"#fef3c7\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n      <text x=\"365\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🌊⚡</text>\n      <text x=\"365\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Hydro Power</text>\n      <text x=\"365\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#b45309\" text-anchor=\"middle\">Falling Water</text>\n      <path d=\"M405 85 L460 85\" stroke=\"#fcd34d\" stroke-width=\"2\"/>\n      <!-- Green Clean Grid -->\n      <circle cx=\"500\" cy=\"85\" r=\"34\" fill=\"#ecfdf5\" stroke=\"#059669\" stroke-width=\"2.5\"/>\n      <text x=\"500\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">💡🌱</text>\n      <text x=\"500\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#065f46\" text-anchor=\"middle\">Zero Carbon</text>\n      <text x=\"500\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#047857\" text-anchor=\"middle\">Energy Efficiency</text>\n    </svg>",
    "questions": [
      {
        "q": "What is the key scientific difference between renewable and non-renewable energy sources? Give three examples of each.",
        "category": "Energy Fundamentals",
        "marks": 4,
        "ans": "<strong>Definitions and Differences:</strong>\n        <ul>\n          <li><strong>Renewable Energy:</strong> Energy derived from inexhaustible natural cycles and resources that replenish naturally on a human timescale, producing negligible air pollution and greenhouse gases.\n            <br><em>Examples:</em> Solar energy (Sun), Wind energy (Windmills), and Hydroelectric energy (Flowing river water).</li>\n          <li><strong>Non-Renewable Energy:</strong> Energy derived from finite geological reserves formed over millions of years inside Earth's crust. Once consumed, they cannot be replaced in a human lifetime, and burning them releases toxic smoke and carbon dioxide.\n            <br><em>Examples:</em> Coal, Petrol (Crude oil / Petroleum), and Natural Gas (CNG/LPG).</li>\n        </ul>",
        "rubric": [
          {
            "key": "Renewable energy definition and 3 examples",
            "marks": "2 Marks"
          },
          {
            "key": "Non-renewable energy definition and 3 examples",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "q": "Why is the Sun recognized as the primary or ultimate source of almost all energy on planet Earth?",
        "category": "Scientific Reasoning",
        "marks": 3,
        "ans": "The Sun is the ultimate source of Earth's energy because:\n        <ol>\n          <li><strong>Powers Plant Photosynthesis:</strong> Sunlight enables green plants to synthesize glucose and oxygen. All herbivores, carnivores, and humans depend on this plant biomass for chemical food energy.</li>\n          <li><strong>Origin of Fossil Fuels:</strong> Coal and crude oil are the compressed, fossilized remains of ancient plants and prehistoric organisms that originally harnessed sunlight millions of years ago.</li>\n          <li><strong>Drives Natural Weather Cycles:</strong> Unequal solar heating of Earth's surface creates wind currents that power wind turbines, while solar evaporation drives the rain cycle that fills hydroelectric river reservoirs.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Photosynthesis and food web dependence",
            "marks": "1 Mark"
          },
          {
            "key": "Solar origin of fossil fuels explained",
            "marks": "1 Mark"
          },
          {
            "key": "Driver of wind and water cycles",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "Identify the energy transformation taking place in each of the following everyday devices: (a) Electric fan, (b) Toaster, (c) Solar street light, and (d) Torch battery.",
        "category": "Energy Transformations",
        "marks": 4,
        "ans": "Energy transformation in each device:\n        <ol>\n          <li><strong>Electric Fan:</strong> Electrical Energy &rarr; Kinetic (Mechanical) Energy of rotating blades, which moves air.</li>\n          <li><strong>Electric Toaster:</strong> Electrical Energy &rarr; Thermal (Heat) Energy and Light Energy that toasts bread slices.</li>\n          <li><strong>Solar Street Light:</strong> Solar (Light) Energy &rarr; Chemical Energy stored in lithium batteries during the day &rarr; Electrical Energy &rarr; Light Energy emitted by LED lamps at night.</li>\n          <li><strong>Torch Battery (Dry Cell):</strong> Chemical Energy stored inside battery pastes &rarr; Electrical Energy &rarr; Light and Heat Energy in the bulb.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Electric fan: electrical to kinetic",
            "marks": "1 Mark"
          },
          {
            "key": "Electric toaster: electrical to thermal/heat",
            "marks": "1 Mark"
          },
          {
            "key": "Solar street light: solar to chemical to electrical/light",
            "marks": "1 Mark"
          },
          {
            "key": "Torch battery: chemical to electrical/light",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "Hands-on Activity: Describe how to build a simple paper pinwheel (turbine) to demonstrate that wind carries kinetic energy.",
        "category": "Hands-on Activity",
        "marks": 4,
        "ans": "<strong>Pinwheel (Wind Turbine) Demonstration:</strong>\n        <ul>\n          <li><strong>Materials:</strong> A square sheet of colored craft paper (15 cm &times; 15 cm), scissors, a push-pin, a wooden pencil with an eraser top, and a small plastic bead.</li>\n          <li><strong>Procedure:</strong>\n            <ol>\n              <li>Draw two diagonal lines across the square sheet from opposite corners, meeting at the center point.</li>\n              <li>Cut along the four diagonal lines with scissors, stopping about 1.5 cm before reaching the center point.</li>\n              <li>Fold every alternating tip (every second corner) into the center without creasing the folds.</li>\n              <li>Push the pin through the folded tips and the center, slide on the bead (to reduce friction), and push the pin firmly into the pencil eraser.</li>\n              <li>Blow gently on the paper blades or run holding the pencil forward.</li>\n            </ol>\n          </li>\n          <li><strong>Scientific Observation:</strong> The pinwheel spins rapidly. The kinetic energy of moving air pushes against the angled paper vanes, creating rotational mechanical motion just like an industrial wind turbine.</li>\n        </ul>",
        "rubric": [
          {
            "key": "List of materials and clear construction steps",
            "marks": "2 Marks"
          },
          {
            "key": "Explanation of moving air transferring kinetic energy to rotate blades",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "q": "What are 'Simple Machines'? Name four types of simple machines found in homes and explain how one of them makes work easier.",
        "category": "Mechanical Principles",
        "marks": 3,
        "ans": "A <strong>Simple Machine</strong> is a mechanical device with few or no moving parts that modifies the direction or magnitude of a force, making physical tasks easier.\n        <br><br>\n        <strong>Four Types Found in Homes:</strong>\n        <ol>\n          <li><strong>Inclined Plane:</strong> A sloping ramp used to roll wheelchairs or heavy gas cylinders into vehicles.</li>\n          <li><strong>Lever:</strong> A seesaw, bottle opener, scissors, or crowbar that pivots on a fixed fulcrum.</li>\n          <li><strong>Pulley:</strong> A grooved wheel with a rope used to draw water from wells or raise window blinds.</li>\n          <li><strong>Wheel and Axle:</strong> A door knob, screwdriver, or bicycle pedal.</li>\n        </ol>\n        <strong>How a Lever Makes Work Easier:</strong> Using a long lever (like a bottle opener), a small input effort applied over a longer distance creates a powerful upward force at the short end, easily popping open a tight metal bottle cap with minimal effort.",
        "rubric": [
          {
            "key": "Definition of simple machines as force modifiers",
            "marks": "1 Mark"
          },
          {
            "key": "Four everyday examples identified",
            "marks": "1 Mark"
          },
          {
            "key": "Explanation of leverage reducing input effort",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "Suggest five practical habits that a family can adopt to conserve electricity and fuel in daily life.",
        "category": "Energy Conservation",
        "marks": 3,
        "ans": "<strong>Five Everyday Energy Conservation Habits:</strong>\n        <ol>\n          <li><strong>Switch to Energy-Efficient LED Lighting:</strong> Replace outdated incandescent bulbs with 5-star Bureau of Energy Efficiency (BEE) rated LED bulbs that consume 80% less electricity.</li>\n          <li><strong>Turn Off Idling Vehicle Engines:</strong> Switch off scooter or car engines at traffic signals when red lights exceed 20 seconds to save fuel and reduce urban exhaust smoke.</li>\n          <li><strong>Maximize Natural Daylight:</strong> Open window curtains during the daytime to illuminate study desks with natural sunlight instead of turning on electric lamps.</li>\n          <li><strong>Unplug Standby Electronics:</strong> Switch off television sets, phone chargers, and computers at the wall switch when not in use, preventing 'phantom energy' drain.</li>\n          <li><strong>Carpool &amp; Use Public Transit:</strong> Walk or ride bicycles for short neighborhood grocery trips, and use school buses or metro trains instead of individual private cars.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Electricity conservation habits (LEDs, daylight, wall switches)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Fuel conservation habits (engine idling, carpooling/cycling)",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Energy — How Things Work",
        "q": "[Textbook Activity & Question 1] In 'Energy — How Things Work', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Energy — How Things Work</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Energy — How Things Work",
        "q": "[Textbook Activity & Question 2] In 'Energy — How Things Work', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Energy — How Things Work</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Energy — How Things Work",
        "q": "[Textbook Activity & Question 3] In 'Energy — How Things Work', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Energy — How Things Work</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Energy — How Things Work",
        "q": "[Textbook Activity & Question 4] In 'Energy — How Things Work', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Energy — How Things Work</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Energy — How Things Work",
        "q": "[Textbook Activity & Question 5] In 'Energy — How Things Work', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Energy — How Things Work</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Energy — How Things Work",
        "q": "[Textbook Activity & Question 6] In 'Energy — How Things Work', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Energy — How Things Work</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Energy — How Things Work",
        "q": "[Textbook Activity & Question 7] In 'Energy — How Things Work', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Energy — How Things Work</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Energy — How Things Work",
        "q": "[Textbook Activity & Question 8] In 'Energy — How Things Work', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Energy — How Things Work</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Energy — How Things Work",
        "q": "[Textbook Activity & Question 9] In 'Energy — How Things Work', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Energy — How Things Work</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Energy — How Things Work",
        "q": "[Textbook Activity & Question 10] In 'Energy — How Things Work', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Energy — How Things Work</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Energy — How Things Work",
        "q": "[Textbook Activity & Question 11] In 'Energy — How Things Work', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Energy — How Things Work</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Energy — How Things Work",
        "q": "[Textbook Activity & Question 12] In 'Energy — How Things Work', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Energy — How Things Work</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Energy — How Things Work",
        "q": "[Textbook Activity & Question 13] In 'Energy — How Things Work', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Energy — How Things Work</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Energy — How Things Work",
        "q": "[Textbook Activity & Question 14] In 'Energy — How Things Work', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Energy — How Things Work</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Energy — How Things Work",
        "q": "[Textbook Activity & Question 15] In 'Energy — How Things Work', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Energy — How Things Work</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Energy — How Things Work",
        "q": "[Textbook Activity & Question 16] In 'Energy — How Things Work', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Energy — How Things Work</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "School Energy Audit & Rooftop Solar Transition Blueprint",
      "text": "During a campus sustainability meeting, the electricity meter showed that the school consumed 1,800 units of grid electricity monthly, incurring high utility bills while coal-fired power plants generated this power 200 km away.",
      "question": "Develop an energy-saving blueprint for the school, detailing immediate zero-cost behavioural changes and a proposal for installing a 10 kW grid-tied rooftop solar photovoltaic system.",
      "answer": "<strong>School Energy Transition &amp; Solar Blueprint:</strong>\n      <ol>\n        <li><strong>Phase 1: Zero-Cost Behavioral Measures (Immediate 15% Reduction):</strong>\n          <ul>\n            <li>Designate a student 'Green Monitor' in every section responsible for turning off fans and lights during lunch breaks and outdoor games.</li>\n            <li>Clean dust off ceiling fan blades and window panes quarterly to maximize ventilation and natural illumination.</li>\n            <li>Set air conditioner thermostats in teacher staffrooms to a mandatory 24°C–25°C instead of power-hungry 18°C.</li>\n          </ul>\n        </li>\n        <li><strong>Phase 2: 10 kW Rooftop Solar PV System:</strong>\n          <ul>\n            <li><em>Installation:</em> Mount 25 polycrystalline solar panels on the unshaded cafeteria flat roof.</li>\n            <li><em>Inverter &amp; Net Metering:</em> Solar panels convert sunlight into DC electricity, which an inverter converts into AC power to run classroom lights and computers. A bidirectional 'Net Meter' sends excess electricity generated on Sundays back to the government grid for credit.</li>\n            <li><em>Environmental Payback:</em> The 10 kW system generates ~40 units of clean electricity daily, offsetting approximately 12 tonnes of carbon dioxide emissions annually.</li>\n          </ul>\n        </li>\n      </ol>",
      "rubric": "2 Marks for behavioral zero-cost conservation steps + 3 Marks for technical solar PV net-metering proposal and carbon reduction metrics = 5 Marks"
    }
  },
  {
    "id": "oww8",
    "num": 8,
    "unit": "Unit 4: Things Around Us",
    "title": "Clothes — How Things are Made",
    "subtitle": "Tracing the journey of textiles: natural plant and animal fibres, spinning, handloom weaving, dyeing traditions, and sustainable clothing",
    "concepts": [
      "Why We Wear Clothes: Garments provide thermoregulation, protection against extreme weather, safety in diverse occupations, hygiene, and cultural expression.",
      "Classification of Fibres: Natural plant fibres (Cotton from seed bolls, Jute from stems, Linen from flax), Natural animal fibres (Wool from sheep/goats, Silk from silkworm cocoons), and Synthetic chemical fibres (Nylon, Polyester, Acrylic made from petrochemicals).",
      "The Journey of Cotton Cloth: Farm harvesting &rarr; Ginning (separating cotton seeds from fluffy lint) &rarr; Spinning (twisting fibres into continuous yarn on charkhas or mill spindles) &rarr; Weaving (interlacing horizontal weft and vertical warp threads on looms) &rarr; Dyeing &amp; Printing &rarr; Tailoring into garments.",
      "Sericulture (Silk Production): Cultivating mulberry silkworms (*Bombyx mori*), feeding them leaves, harvesting silken cocoons, boiling to soften sericin gum, and reeling continuous silk filaments.",
      "Traditional Handlooms of India: Celebrated regional handloom fabrics—Khadi (homespun cotton), Chanderi (Madhya Pradesh), Kanjeevaram (Tamil Nadu), Banarasi (Uttar Pradesh), and Bandhani tie-dye (Gujarat/Rajasthan).",
      "Sustainable Fashion & the 3Rs: Reducing synthetic microplastic pollution by choosing natural textiles, mending torn garments, and donating outgrown clothes."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fdfbf7\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"'Inter', system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Textile Journey: From Plant Fibre to Finished Garment</text>\n      <!-- Cotton Boll -->\n      <circle cx=\"85\" cy=\"85\" r=\"32\" fill=\"#fff7ed\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n      <text x=\"85\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🌱☁️</text>\n      <text x=\"85\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#7c2d12\" text-anchor=\"middle\">Cotton Boll</text>\n      <text x=\"85\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#9a3412\" text-anchor=\"middle\">Farm Picking</text>\n      <path d=\"M125 85 L180 85\" stroke=\"#fed7aa\" stroke-width=\"2\"/>\n      <!-- Ginning & Spinning -->\n      <circle cx=\"225\" cy=\"85\" r=\"32\" fill=\"#fff7ed\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n      <text x=\"225\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🧵🔄</text>\n      <text x=\"225\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#7c2d12\" text-anchor=\"middle\">Spinning</text>\n      <text x=\"225\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#9a3412\" text-anchor=\"middle\">Fibre to Yarn</text>\n      <path d=\"M265 85 L320 85\" stroke=\"#fed7aa\" stroke-width=\"2\"/>\n      <!-- Weaving on Loom -->\n      <circle cx=\"365\" cy=\"85\" r=\"32\" fill=\"#fff7ed\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n      <text x=\"365\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🪵🪡</text>\n      <text x=\"365\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#7c2d12\" text-anchor=\"middle\">Weaving Loom</text>\n      <text x=\"365\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#9a3412\" text-anchor=\"middle\">Warp &amp; Weft</text>\n      <path d=\"M405 85 L460 85\" stroke=\"#fed7aa\" stroke-width=\"2\"/>\n      <!-- Tailoring & Clothes -->\n      <circle cx=\"500\" cy=\"85\" r=\"34\" fill=\"#ecfdf5\" stroke=\"#059669\" stroke-width=\"2.5\"/>\n      <text x=\"500\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">👕👗</text>\n      <text x=\"500\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#065f46\" text-anchor=\"middle\">Finished Wear</text>\n      <text x=\"500\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#047857\" text-anchor=\"middle\">Garment Craft</text>\n    </svg>",
    "questions": [
      {
        "q": "Trace the complete step-by-step journey of a cotton shirt from a cotton field to a garment shop.",
        "category": "Industrial & Agricultural Process",
        "marks": 4,
        "ans": "The complete journey of a cotton garment involves six key stages:\n        <ol>\n          <li><strong>Cultivation &amp; Harvesting:</strong> Cotton crops grow best in black clay soil and warm sunshine. When ripe, fluffy white cotton bolls burst open and are handpicked by farmers.</li>\n          <li><strong>Ginning:</strong> Picked cotton contains seeds and dirt. A ginning machine separates raw cotton fibres (lint) from cotton seeds.</li>\n          <li><strong>Spinning:</strong> Raw lint is combed, drawn out, and twisted into long continuous threads called <strong>yarn</strong> using spindles, charkhas, or industrial spinning mills.</li>\n          <li><strong>Weaving or Knitting:</strong> On a handloom or powerloom, two sets of yarn—the <em>warp</em> (lengthwise) and <em>weft</em> (crosswise)—are interlaced at right angles to weave fabric sheets.</li>\n          <li><strong>Dyeing, Bleaching &amp; Printing:</strong> The plain grey fabric is washed, bleached, colored with dyes, and printed with decorative patterns.</li>\n          <li><strong>Stitching (Tailoring) &amp; Packaging:</strong> Tailors cut the cloth according to patterns and stitch buttons, collars, and seams into finished shirts sent to retail stores.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Picking and ginning (seed separation)",
            "marks": "1 Mark"
          },
          {
            "key": "Spinning (lint to yarn) and weaving (warp and weft on looms)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Dyeing, printing, tailoring, and distribution",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "q": "Compare natural fibres and synthetic fibres across three characteristics. Give two examples of each.",
        "category": "Material Science",
        "marks": 3,
        "ans": "<strong>Comparison of Fibre Types:</strong>\n        <table style=\"width:100%;border-collapse:collapse;margin:10px 0;font-size:0.88rem;\">\n          <tr style=\"background:#fff7ed;font-weight:700;\"><th style=\"border:1px solid #cbd5e1;padding:6px;\">Characteristic</th><th style=\"border:1px solid #cbd5e1;padding:6px;\">Natural Fibres</th><th style=\"border:1px solid #cbd5e1;padding:6px;\">Synthetic Fibres</th></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Source</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Obtained directly from plants and animals</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Artificially synthesized from petrochemicals</td></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Breathability &amp; Comfort</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Highly breathable, absorbs sweat, skin-friendly</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Less breathable, traps heat, can cause irritation</td></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Environmental Impact</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">100% Biodegradable; decomposes naturally</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Non-biodegradable; sheds microplastics</td></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Examples</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Cotton, Jute, Wool, Silk</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Nylon, Polyester, Acrylic</td></tr>\n        </table>",
        "rubric": [
          {
            "key": "Clear contrast in origin/source and breathability",
            "marks": "1.5 Marks"
          },
          {
            "key": "Biodegradability comparison + 2 accurate examples each",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "q": "How is silk obtained from the silkworm? Describe the cocoon stage and why silkworms need mulberry leaves.",
        "category": "Life Cycles & Sericulture",
        "marks": 4,
        "ans": "The rearing of silkworms for commercial silk production is called <strong>Sericulture</strong>:\n        <ol>\n          <li><strong>Egg to Caterpillar:</strong> Female silk moths lay hundreds of eggs that hatch into tiny caterpillars (silkworm larvae).</li>\n          <li><strong>Feeding on Mulberry Leaves:</strong> The caterpillars have voracious appetites and feed continuously on fresh green <em>mulberry leaves</em> for about 25 to 30 days, growing rapidly in size.</li>\n          <li><strong>Spinning the Cocoon:</strong> When fully grown, the silkworm swings its head in figure-eight patterns, secreting a liquid protein from salivary glands that hardens on contact with air into a continuous fine silk thread (up to 1,000 metres long). The caterpillar wraps itself completely in this protective oval shell called a <strong>cocoon</strong>.</li>\n          <li><strong>Reeling Silk:</strong> The cocoons are placed in boiling water to soften the sticky gum (sericin). Workers unwind the long, lustrous filaments and spin them into silk yarn.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Role of mulberry leaves in caterpillar growth",
            "marks": "1 Mark"
          },
          {
            "key": "Protein filament secretion forming the cocoon",
            "marks": "1.5 Marks"
          },
          {
            "key": "Boiling and reeling process explained",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "q": "What was the symbolic importance of the 'Charkha' (spinning wheel) and 'Khadi' cloth in Mahatma Gandhi's freedom movement?",
        "category": "Historical & Civic Heritage",
        "marks": 3,
        "ans": "During India's freedom struggle, Mahatma Gandhi promoted <strong>Khadi</strong> (homespun cotton cloth) and the <strong>Charkha</strong> as powerful symbols of national self-reliance (<em>Swavalamban</em>) and resistance:\n        <ol>\n          <li><strong>Boycott of British Mill Cloth:</strong> The British Empire exported raw Indian cotton cheaply to English mills in Manchester and sold expensive machine-made clothes back to Indians, ruining native village weavers. Gandhi urged citizens to boycott foreign textiles.</li>\n          <li><strong>Economic Empowerment:</strong> Spinning on the Charkha provided supplemental income and dignity of labor to impoverished rural villagers.</li>\n          <li><strong>Social Equality:</strong> When rich and poor, upper and lower castes all wore simple white Khadi, it dissolved social hierarchies and unified the country.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Economic boycott of foreign British mill textiles",
            "marks": "1.5 Marks"
          },
          {
            "key": "Symbol of rural self-reliance and social equality",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "q": "Hands-on Activity: Inspect clothing labels in your household wardrobe and classify 4 garments by fibre composition and washing instructions.",
        "category": "Practical Consumer Skills",
        "marks": 3,
        "ans": "<strong>Household Wardrobe Label Investigation:</strong>\n        <table style=\"width:100%;border-collapse:collapse;margin:10px 0;font-size:0.88rem;\">\n          <tr style=\"background:#fff7ed;font-weight:700;\"><th style=\"border:1px solid #cbd5e1;padding:6px;\">Garment</th><th style=\"border:1px solid #cbd5e1;padding:6px;\">Fibre Composition</th><th style=\"border:1px solid #cbd5e1;padding:6px;\">Fibre Class</th><th style=\"border:1px solid #cbd5e1;padding:6px;\">Care Instruction</th></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">School Summer Shirt</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">100% Cotton</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Plant Natural</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Machine wash warm; iron hot</td></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Winter Pullover</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">100% Pure Wool</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Animal Natural</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Hand wash cold; dry flat</td></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Sports Track Pants</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">100% Polyester</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Synthetic Chemical</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Do not iron hot; quick drying</td></tr>\n          <tr><td style=\"border:1px solid #cbd5e1;padding:6px;\">Traditional Kurta</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Cotton-Silk Blend</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Mixed Natural</td><td style=\"border:1px solid #cbd5e1;padding:6px;\">Gentle hand wash with mild detergent</td></tr>\n        </table>",
        "rubric": [
          {
            "key": "Identification of 4 distinct garments and fibre tags",
            "marks": "1.5 Marks"
          },
          {
            "key": "Accurate classification into natural, synthetic, and blends",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "q": "Why should we avoid discarding clothes into municipal landfills? Explain how upcycling and donating garments supports the environment.",
        "category": "Environmental Sustainability",
        "marks": 3,
        "ans": "Discarding clothes in landfills creates severe environmental hazards:\n        <ol>\n          <li><em>Microplastic Pollution:</em> Synthetic fabrics (polyester, nylon) take up to 200 years to decompose, shedding microplastic fibres into soil and groundwater.</li>\n          <li><em>Wasted Resources:</em> It takes thousands of litres of fresh water and pesticides to cultivate the cotton for a single shirt. Discarding wearable garments wastes these precious natural inputs.</li>\n        </ol>\n        <strong>Sustainable Solutions:</strong>\n        <ul>\n          <li><strong>Upcycling:</strong> Old denim jeans and torn bedsheets can be stitched into sturdy vegetable grocery tote bags, aprons, or floor mats.</li>\n          <li><strong>Donation:</strong> Clean, outgrown clothes should be donated to community shelters, orphanages, or disaster relief drives so other families can benefit.</li>\n        </ul>",
        "rubric": [
          {
            "key": "Environmental hazards of landfill textiles (microplastics, water wastage)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Two practical circular practices: upcycling and donation",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Clothes — How Things are Made",
        "q": "[Textbook Activity & Question 1] In 'Clothes — How Things are Made', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Clothes — How Things are Made</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Clothes — How Things are Made",
        "q": "[Textbook Activity & Question 2] In 'Clothes — How Things are Made', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Clothes — How Things are Made</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Clothes — How Things are Made",
        "q": "[Textbook Activity & Question 3] In 'Clothes — How Things are Made', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Clothes — How Things are Made</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Clothes — How Things are Made",
        "q": "[Textbook Activity & Question 4] In 'Clothes — How Things are Made', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Clothes — How Things are Made</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Clothes — How Things are Made",
        "q": "[Textbook Activity & Question 5] In 'Clothes — How Things are Made', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Clothes — How Things are Made</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Clothes — How Things are Made",
        "q": "[Textbook Activity & Question 6] In 'Clothes — How Things are Made', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Clothes — How Things are Made</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Clothes — How Things are Made",
        "q": "[Textbook Activity & Question 7] In 'Clothes — How Things are Made', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Clothes — How Things are Made</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Clothes — How Things are Made",
        "q": "[Textbook Activity & Question 8] In 'Clothes — How Things are Made', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Clothes — How Things are Made</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Clothes — How Things are Made",
        "q": "[Textbook Activity & Question 9] In 'Clothes — How Things are Made', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Clothes — How Things are Made</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Clothes — How Things are Made",
        "q": "[Textbook Activity & Question 10] In 'Clothes — How Things are Made', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Clothes — How Things are Made</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Clothes — How Things are Made",
        "q": "[Textbook Activity & Question 11] In 'Clothes — How Things are Made', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Clothes — How Things are Made</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Clothes — How Things are Made",
        "q": "[Textbook Activity & Question 12] In 'Clothes — How Things are Made', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Clothes — How Things are Made</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Clothes — How Things are Made",
        "q": "[Textbook Activity & Question 13] In 'Clothes — How Things are Made', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Clothes — How Things are Made</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Clothes — How Things are Made",
        "q": "[Textbook Activity & Question 14] In 'Clothes — How Things are Made', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Clothes — How Things are Made</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Clothes — How Things are Made",
        "q": "[Textbook Activity & Question 15] In 'Clothes — How Things are Made', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Clothes — How Things are Made</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Clothes — How Things are Made",
        "q": "[Textbook Activity & Question 16] In 'Clothes — How Things are Made', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Clothes — How Things are Made</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Community Upcycling Drive: 'Denim to Tote Bags'",
      "text": "Every year, children outgrow several pairs of cotton shirts and denim jeans that are tucked away in closets or thrown into domestic garbage bins. The Eco-Club wants to host a zero-waste textile workshop.",
      "question": "Create a step-by-step blueprint for a student-led 'Denim to Grocery Bag' upcycling initiative to replace single-use plastic shopping bags in your neighborhood.",
      "answer": "<strong>'Denim to Tote Bag' Upcycling Blueprint:</strong>\n      <ol>\n        <li><strong>Collection Drive:</strong> Place labeled collection hampers in school corridors asking students and teachers to donate clean, worn-out denim jeans and cotton trousers.</li>\n        <li><strong>Pattern Cutting Workshop:</strong> In the craft room, students cut the pant legs into two rectangular panels (approximately 35 cm &times; 40 cm) and cut 5 cm wide strips from remaining denim for durable shoulder handles.</li>\n        <li><strong>Assembly with Sewing Volunteers:</strong> With guidance from parent volunteers and craft teachers, students stitch the side and bottom seams using strong cotton thread, securely double-stitching the shoulder straps.</li>\n        <li><strong>Eco-Stenciling &amp; Art:</strong> Students paint nature-themed motivational messages (e.g. <em>'Plastic Mukt Bharat'</em> or <em>'Choose to Reuse'</em>) on the bags using water-based acrylic paints.</li>\n        <li><strong>Community Distribution:</strong> Distribute the completed bags free of charge to shoppers at local vegetable and fruit markets, encouraging them to decline single-use polythene bags.</li>\n      </ol>",
      "rubric": "2 Marks for collection and safe mechanical cutting procedures + 3 Marks for stitching, student creative messaging, and community market replacement impact = 5 Marks"
    }
  },
  {
    "id": "oww9",
    "num": 9,
    "unit": "Unit 5: Our Amazing Planet",
    "title": "Rhythms of Nature",
    "subtitle": "Investigating planetary day-night cycles, the six Indian seasons, moon phases, animal migration and hibernation, and agricultural calendars",
    "concepts": [
      "Day and Night Cycles: Caused by Earth's continuous counter-clockwise rotation on its tilted axis once every 24 hours; the hemisphere facing the Sun experiences daylight, while the opposite hemisphere is in night.",
      "Seasons & Planetary Revolution: Earth's annual 365.25-day revolution around the Sun combined with its constant 23.5° axial tilt causes changing angles of incidence of sunlight, producing seasonal rhythms.",
      "The Six Indian Seasons (Shad-Ritu): Ancient Indian climatology recognizes six distinct seasons—Vasant (Spring), Grishma (Summer), Varsha (Monsoon), Sharad (Autumn), Hemant (Pre-winter), and Shishir (Winter).",
      "Moon Phases & Oceanic Tides: The Moon revolves around Earth every 27.3 days (29.5-day synodic lunar cycle), presenting shifting illuminated phases from Amavasya (New Moon) to Purnima (Full Moon); lunar gravity drives oceanic high and low tides.",
      "Biological Clocks & Animal Adaptations: Diurnal animals hunt during the day; nocturnal animals (owls, bats) have specialized rod-heavy eyes and hearing for night hunting; animals undergo hibernation (winter sleep) or seasonal migration.",
      "Agricultural Rhythms (Kharif vs Rabi): Farmers align crop planting with monsoon and winter seasons—Kharif crops (rice, maize sown in July) and Rabi crops (wheat, mustard sown in October)."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"'Inter', system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Planetary Rhythms: Rotation, Seasons &amp; Lunar Phases</text>\n      <!-- Day and Night -->\n      <circle cx=\"85\" cy=\"85\" r=\"32\" fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n      <text x=\"85\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🌍☀️</text>\n      <text x=\"85\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Earth Rotation</text>\n      <text x=\"85\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#2563eb\" text-anchor=\"middle\">Day &amp; Night 24h</text>\n      <path d=\"M125 85 L180 85\" stroke=\"#93c5fd\" stroke-width=\"2\"/>\n      <!-- Moon Phases -->\n      <circle cx=\"225\" cy=\"85\" r=\"32\" fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n      <text x=\"225\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🌑🌕</text>\n      <text x=\"225\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Moon Phases</text>\n      <text x=\"225\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#2563eb\" text-anchor=\"middle\">Amavasya-Purnima</text>\n      <path d=\"M265 85 L320 85\" stroke=\"#93c5fd\" stroke-width=\"2\"/>\n      <!-- Seasons Cycle -->\n      <circle cx=\"365\" cy=\"85\" r=\"32\" fill=\"#dbeafe\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n      <text x=\"365\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🍁🌸</text>\n      <text x=\"365\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Shad-Ritu</text>\n      <text x=\"365\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#2563eb\" text-anchor=\"middle\">6 Indian Seasons</text>\n      <path d=\"M405 85 L460 85\" stroke=\"#93c5fd\" stroke-width=\"2\"/>\n      <!-- Animal Migration -->\n      <circle cx=\"500\" cy=\"85\" r=\"34\" fill=\"#ecfdf5\" stroke=\"#059669\" stroke-width=\"2.5\"/>\n      <text x=\"500\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🦢🌾</text>\n      <text x=\"500\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#065f46\" text-anchor=\"middle\">Migration</text>\n      <text x=\"500\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#047857\" text-anchor=\"middle\">Seasonal Cycles</text>\n    </svg>",
    "questions": [
      {
        "q": "What causes the alternating cycle of day and night on Earth? Why is it bright daylight in India when it is night in the United States?",
        "category": "Astronomical Geography",
        "marks": 3,
        "ans": "<strong>Cause of Day and Night:</strong>\n        <ol>\n          <li>Earth is a spherical planet that rotates on its imaginary tilted axis from west to east once every <strong>24 hours</strong>.</li>\n          <li>Because Earth is opaque, sunlight can illuminate only one half of the globe at any given moment.</li>\n          <li>The half facing the Sun experiences <strong>Day</strong>, while the opposite half turned away from sunlight experiences <strong>Night</strong>.</li>\n        </ol>\n        <strong>India vs United States:</strong> India and the continental United States are situated on almost opposite longitudinal sides of the Earth (roughly 180° apart). When Earth's rotation positions India directly facing the Sun, North America is on the dark hemisphere turned away from sunlight.",
        "rubric": [
          {
            "key": "Earth's 24-hour axial rotation explained",
            "marks": "1.5 Marks"
          },
          {
            "key": "Opposite longitudinal positions of India and USA",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "q": "Name the six traditional seasons (Shad-Ritu) observed in Indian climatology and describe the climatic features of two of them.",
        "category": "Climatology & Heritage",
        "marks": 4,
        "ans": "The ancient Indian calendar categorizes the year into <strong>Shad-Ritu (Six Seasons)</strong>:\n        <ol>\n          <li><strong>Vasant Ritu:</strong> Spring (March–April)</li>\n          <li><strong>Grishma Ritu:</strong> Summer (May–June)</li>\n          <li><strong>Varsha Ritu:</strong> Monsoon / Rainy Season (July–August)</li>\n          <li><strong>Sharad Ritu:</strong> Autumn (September–October)</li>\n          <li><strong>Hemant Ritu:</strong> Pre-winter (November–December)</li>\n          <li><strong>Shishir Ritu:</strong> Winter / Late Cold (January–February)</li>\n        </ol>\n        <strong>Detailed Features of Two Seasons:</strong>\n        <ul>\n          <li><em>Vasant Ritu (Spring):</em> Mild pleasant temperatures, trees sprout fresh tender green leaves, mango orchards flower (<em>Manjari</em>), and colorful birds sing. It represents rejuvenation and nature's awakening.</li>\n          <li><em>Varsha Ritu (Monsoon):</em> Southwest monsoon winds bring dark rain-bearing clouds, replenishing rivers and drying groundwater, cooling the scorched earth, and prompting farmers to sow Kharif crops like rice.</li>\n        </ul>",
        "rubric": [
          {
            "key": "Listing all six Indian seasons in correct sequence",
            "marks": "2 Marks"
          },
          {
            "key": "Detailed ecological and weather features of two seasons",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "q": "Explain how the Moon changes its visible shape from Amavasya (New Moon) to Purnima (Full Moon) over a two-week period.",
        "category": "Lunar Phases",
        "marks": 4,
        "ans": "The Moon does not produce its own light; it reflects sunlight like a mirror:\n        <ol>\n          <li>As the Moon orbits Earth every 29.5 days, we see different fractions of its sunlit half from Earth.</li>\n          <li><strong>Amavasya (New Moon):</strong> The Moon is positioned directly between Earth and the Sun. Its dark, unlit side faces Earth, making it invisible in the night sky.</li>\n          <li><strong>Waxing Phase (Shukla Paksha):</strong> Over the next 14 days, a slender crescent moon appears, growing wider each night through the First Quarter until a half-moon and gibbous moon are visible.</li>\n          <li><strong>Purnima (Full Moon):</strong> Earth is situated between the Sun and the Moon. The entire illuminated surface of the Moon directly faces Earth, shining as a complete, glowing circular disk.</li>\n          <li>The cycle then reverses during the waning phase (<em>Krishna Paksha</em>) back to New Moon.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Concept of reflected sunlight and lunar orbital positioning",
            "marks": "1.5 Marks"
          },
          {
            "key": "Amavasya (dark side facing Earth) explained",
            "marks": "1 Mark"
          },
          {
            "key": "Waxing phases leading to Purnima (fully illuminated face)",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "q": "Why do certain animals undergo 'hibernation' while birds undergo 'migration'? Give two examples of each.",
        "category": "Animal Behavioral Adaptations",
        "marks": 4,
        "ans": "Both hibernation and migration are behavioral survival adaptations to escape extreme seasonal cold and severe winter food shortages:\n        <br><br>\n        <strong>1. Hibernation (Winter Sleep):</strong>\n        <ul>\n          <li>Animals enter an inactive, dormant state where their body temperature drops, breathing slows, and heart rate falls drastically to conserve energy without feeding.</li>\n          <li><em>Examples:</em> Brown Bears, Frogs, and Siberian Ground Squirrels.</li>\n        </ul>\n        <strong>2. Seasonal Migration:</strong>\n        <ul>\n          <li>Animals and birds travel thousands of kilometers from freezing arctic breeding grounds to warmer tropical wetlands where food (seeds, insects, fish) is abundant and waters remain unfrozen.</li>\n          <li><em>Examples:</em> Siberian Cranes and Rosy Starlings migrating to Indian wetlands; Arctic Terns flying from pole to pole.</li>\n        </ul>",
        "rubric": [
          {
            "key": "Definition and physiological slowdown of hibernation + 2 examples",
            "marks": "2 Marks"
          },
          {
            "key": "Definition and long-distance travel of migration + 2 examples",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "q": "Differentiate between Kharif crops and Rabi crops. Why do farmers strictly align their sowing calendar with seasonal cycles?",
        "category": "Agricultural Calendars",
        "marks": 3,
        "ans": "<strong>Comparison of Crop Cycles:</strong>\n        <ul>\n          <li><strong>Kharif Crops (Monsoon Crops):</strong> Sown at the onset of the southwest monsoon in June/July and harvested in September/October. They require high temperatures and abundant water.\n            <br><em>Examples:</em> Rice (Paddy), Maize, Cotton, Jowar, and Groundnut.</li>\n          <li><strong>Rabi Crops (Winter Crops):</strong> Sown in October/November after the monsoon retreats and harvested in spring (March/April). They require cool weather for growth and warm sunshine for ripening.\n            <br><em>Examples:</em> Wheat, Barley, Mustard, Gram (Chickpea), and Green Peas.</li>\n        </ul>\n        <strong>Why Farmers Align with Seasons:</strong> Crops have specific temperature, moisture, and daylight (photoperiod) requirements. Planting wheat in summer would rot its seeds, while planting rice in dry winter without irrigation would wither the crop.",
        "rubric": [
          {
            "key": "Kharif crops: monsoon timing, water requirement, examples",
            "marks": "1.5 Marks"
          },
          {
            "key": "Rabi crops: winter timing, cool requirement, examples",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "q": "Observation Task: Identify two diurnal animals and two nocturnal animals. What unique sensory adaptations help nocturnal animals at night?",
        "category": "Sensory Adaptations",
        "marks": 3,
        "ans": "<strong>Classification:</strong>\n        <ul>\n          <li><strong>Diurnal Animals (Active by Day):</strong> Honeybee, Eagle, Squirrel, Cow.</li>\n          <li><strong>Nocturnal Animals (Active by Night):</strong> Barn Owl, Flying Bat, Leopard, Cockroach.</li>\n        </ul>\n        <strong>Sensory Adaptations of Nocturnal Animals:</strong>\n        <ol>\n          <li><em>Large Eyes with Tapetum Lucidum:</em> Owls and cats have large pupils and high concentrations of light-sensitive rod cells, plus a reflective layer behind the retina that magnifies faint moonlight.</li>\n          <li><em>Super-Sensitive Hearing &amp; Echolocation:</em> Barn owls have asymmetric ears to pinpoint the rustle of a mouse in complete darkness; bats emit high-frequency ultrasonic clicks (echolocation) to map obstacles and catch flying insects.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Correct examples of diurnal and nocturnal creatures",
            "marks": "1 Mark"
          },
          {
            "key": "Visual adaptations (large pupils, rod cells)",
            "marks": "1 Mark"
          },
          {
            "key": "Auditory / echolocation adaptations in bats and owls",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Rhythms of Nature",
        "q": "[Textbook Activity & Question 1] In 'Rhythms of Nature', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Rhythms of Nature</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Rhythms of Nature",
        "q": "[Textbook Activity & Question 2] In 'Rhythms of Nature', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Rhythms of Nature</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Rhythms of Nature",
        "q": "[Textbook Activity & Question 3] In 'Rhythms of Nature', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Rhythms of Nature</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Rhythms of Nature",
        "q": "[Textbook Activity & Question 4] In 'Rhythms of Nature', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Rhythms of Nature</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Rhythms of Nature",
        "q": "[Textbook Activity & Question 5] In 'Rhythms of Nature', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Rhythms of Nature</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Rhythms of Nature",
        "q": "[Textbook Activity & Question 6] In 'Rhythms of Nature', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Rhythms of Nature</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Rhythms of Nature",
        "q": "[Textbook Activity & Question 7] In 'Rhythms of Nature', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Rhythms of Nature</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Rhythms of Nature",
        "q": "[Textbook Activity & Question 8] In 'Rhythms of Nature', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Rhythms of Nature</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Rhythms of Nature",
        "q": "[Textbook Activity & Question 9] In 'Rhythms of Nature', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Rhythms of Nature</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Rhythms of Nature",
        "q": "[Textbook Activity & Question 10] In 'Rhythms of Nature', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Rhythms of Nature</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Rhythms of Nature",
        "q": "[Textbook Activity & Question 11] In 'Rhythms of Nature', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Rhythms of Nature</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Rhythms of Nature",
        "q": "[Textbook Activity & Question 12] In 'Rhythms of Nature', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Rhythms of Nature</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Rhythms of Nature",
        "q": "[Textbook Activity & Question 13] In 'Rhythms of Nature', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Rhythms of Nature</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Rhythms of Nature",
        "q": "[Textbook Activity & Question 14] In 'Rhythms of Nature', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Rhythms of Nature</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Rhythms of Nature",
        "q": "[Textbook Activity & Question 15] In 'Rhythms of Nature', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Rhythms of Nature</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Rhythms of Nature",
        "q": "[Textbook Activity & Question 16] In 'Rhythms of Nature', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Rhythms of Nature</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Climate-Resilient Agricultural Calendar for Erratic Monsoons",
      "text": "Due to changing global climate patterns, farmers in central India observed that monsoon rains arrived 3 weeks late in July followed by unseasonal torrential downpours in late October, damaging traditional standing soyabean and cotton crops.",
      "question": "As an agricultural advisor, design a climate-resilient farming strategy helping local farmers adapt their cropping patterns to shifting seasonal rhythms.",
      "answer": "<strong>Climate-Resilient Adaptation Strategy for Farmers:</strong>\n      <ol>\n        <li><strong>Short-Duration &amp; Drought-Tolerant Seed Varieties:</strong> Encourage farmers to switch to certified early-maturing, drought-tolerant crop varieties (like pearl millet/bajra and pulses) that require less water and mature in 75–85 days.</li>\n        <li><strong>Staggered Nursery Sowing:</strong> Instead of direct field broadcasting, raise rice saplings in protected nurseries using drip irrigation, ready to transplant the moment monsoon rains arrive.</li>\n        <li><strong>Multi-Cropping &amp; Intercropping:</strong> Intercrop pulses (Pigeon pea / Arhar) with millets so that even if erratic rains harm one crop, the other survives, securing household income.</li>\n        <li><strong>Farm Ponds (Khet Talab):</strong> Excavate lined farm ponds at the lowest gradient of agricultural plots to capture intense torrential runoff, storing water for critical life-saving irrigation during sudden dry spells.</li>\n      </ol>",
      "rubric": "2 Marks for drought-tolerant seeds and staggered nursery practices + 3 Marks for intercropping risk mitigation and farm pond rainwater storage = 5 Marks"
    }
  },
  {
    "id": "oww10",
    "num": 10,
    "unit": "Unit 5: Our Amazing Planet",
    "title": "Earth — Our Shared Home",
    "subtitle": "Exploring Earth's unique life-supporting conditions, global continents and oceans, transboundary wildlife migrations, and planetary stewardship",
    "concepts": [
      "The 'Goldilocks' Planet: Earth is the only known planet harboring life because it sits at an optimal distance from the Sun—neither too hot like Venus nor too frozen like Mars—allowing liquid water, breathable oxygen, and a protective ozone shield.",
      "Global Continents & Oceans: Earth's surface is 71% water and 29% land, divided into seven continents (Asia, Africa, North America, South America, Antarctica, Europe, Australia) and five major oceans (Pacific, Atlantic, Indian, Southern, Arctic).",
      "Wildlife Without Borders: Transboundary migratory species travel thousands of miles across national borders—such as Olive Ridley Sea Turtles swimming across the Indian Ocean to Odisha's beaches for mass nesting (*Arribada*), and migratory Rosy Starlings.",
      "Global Interconnectedness: Environmental events are transboundary—burning fossil fuels in one nation accelerates Arctic ice melting, which in turn raises global sea levels and threatens low-lying island communities worldwide.",
      "Planetary Environmental Threats: Plastic contamination in oceans, industrial deforestation, loss of wildlife corridors, and rising greenhouse gas emissions.",
      "Vasudhaiva Kutumbakam & Global Stewardship: The timeless Indian philosophy 'The World is One Family' urges humanity to live in harmonious coexistence with all living species, safeguarding Earth for future generations."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"'Inter', system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Earth as a Shared Biosphere: Seven Continents &amp; Five Oceans</text>\n      <!-- Continents & Oceans -->\n      <circle cx=\"85\" cy=\"85\" r=\"32\" fill=\"#d1fae5\" stroke=\"#10b981\" stroke-width=\"2\"/>\n      <text x=\"85\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🌍🗺️</text>\n      <text x=\"85\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Global Geography</text>\n      <text x=\"85\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#047857\" text-anchor=\"middle\">7 Continents / 5 Oceans</text>\n      <path d=\"M125 85 L180 85\" stroke=\"#34d399\" stroke-width=\"2\"/>\n      <!-- Olive Ridley Turtles -->\n      <circle cx=\"225\" cy=\"85\" r=\"32\" fill=\"#d1fae5\" stroke=\"#10b981\" stroke-width=\"2\"/>\n      <text x=\"225\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🐢🌊</text>\n      <text x=\"225\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Ocean Migrations</text>\n      <text x=\"225\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#047857\" text-anchor=\"middle\">Olive Ridley Arribada</text>\n      <path d=\"M265 85 L320 85\" stroke=\"#34d399\" stroke-width=\"2\"/>\n      <!-- Climate Action -->\n      <circle cx=\"365\" cy=\"85\" r=\"32\" fill=\"#d1fae5\" stroke=\"#10b981\" stroke-width=\"2\"/>\n      <text x=\"365\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🌱❄️</text>\n      <text x=\"365\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Climate Action</text>\n      <text x=\"365\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#047857\" text-anchor=\"middle\">Plastic-Free Seas</text>\n      <path d=\"M405 85 L460 85\" stroke=\"#34d399\" stroke-width=\"2\"/>\n      <!-- Vasudhaiva Kutumbakam -->\n      <circle cx=\"500\" cy=\"85\" r=\"34\" fill=\"#fef3c7\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n      <text x=\"500\" y=\"80\" font-size=\"18\" text-anchor=\"middle\">🤝🕊️</text>\n      <text x=\"500\" y=\"100\" font-family=\"'Inter', sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#92400e\" text-anchor=\"middle\">One Earth Family</text>\n      <text x=\"500\" y=\"132\" font-family=\"'Inter', sans-serif\" font-size=\"9\" fill=\"#b45309\" text-anchor=\"middle\">Vasudhaiva Kutumbakam</text>\n    </svg>",
    "questions": [
      {
        "q": "What unique planetary conditions make Earth the only known planet capable of supporting life?",
        "category": "Planetary Science",
        "marks": 3,
        "ans": "Earth sustains living ecosystems because of four ideal conditions:\n        <ol>\n          <li><strong>Optimal Habitable Zone (Goldilocks Distance):</strong> Earth is situated at an ideal distance from the Sun, creating temperatures that allow water to remain in liquid form rather than boiling off or freezing completely.</li>\n          <li><strong>Breathable Atmosphere:</strong> Earth's atmosphere contains 21% Oxygen (vital for cellular respiration) and nitrogen, balanced with carbon dioxide needed by plants for photosynthesis.</li>\n          <li><strong>Protective Ozone Layer &amp; Magnetic Shield:</strong> The stratospheric ozone layer filters out lethal solar ultraviolet (UV) radiation, while Earth's magnetic field deflects dangerous cosmic solar wind particles.</li>\n          <li><strong>Abundant Liquid Water:</strong> Oceans, rivers, and groundwater drive biological life and moderate planetary climates.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Optimal distance from Sun permitting liquid water",
            "marks": "1 Mark"
          },
          {
            "key": "Oxygen-rich atmosphere and protective ozone/magnetic shields",
            "marks": "1 Mark"
          },
          {
            "key": "Abundance of liquid water and climate moderation",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "Name the seven continents and five oceans of the world. Which continent is the largest, and which ocean is named after our country?",
        "category": "Global Geography",
        "marks": 4,
        "ans": "<strong>The Seven Continents (in order of land area):</strong>\n        <ol>\n          <li><strong>Asia</strong> (The largest and most populous continent on Earth)</li>\n          <li>Africa</li>\n          <li>North America</li>\n          <li>South America</li>\n          <li>Antarctica</li>\n          <li>Europe</li>\n          <li>Australia (Oceania)</li>\n        </ol>\n        <strong>The Five Oceans:</strong>\n        <ol>\n          <li>Pacific Ocean (The largest and deepest ocean)</li>\n          <li>Atlantic Ocean</li>\n          <li><strong>Indian Ocean</strong> (The only ocean in the world named after a country—India)</li>\n          <li>Southern (Antarctic) Ocean</li>\n          <li>Arctic Ocean (The smallest and shallowest ocean)</li>\n        </ol>",
        "rubric": [
          {
            "key": "Accurate list of all 7 continents + identifying Asia as largest",
            "marks": "2 Marks"
          },
          {
            "key": "Accurate list of all 5 oceans + identifying Indian Ocean named after India",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "q": "Describe the mass nesting (Arribada) of Olive Ridley sea turtles on the coast of Odisha. Why do they cross thousands of miles of ocean?",
        "category": "Wildlife Migration & Marine Ecology",
        "marks": 4,
        "ans": "The annual arrival of <strong>Olive Ridley Sea Turtles</strong> (<em>Lepidochelys olivacea</em>) in Odisha is one of Earth's greatest natural spectacles:\n        <ol>\n          <li><strong>Long-Distance Oceanic Migration:</strong> Adult turtles migrate thousands of kilometres across the Indian Ocean to congregate offshore along the coastal waters of Gahirmatha and Rushikulya in Odisha every winter.</li>\n          <li><strong>The Phenomenon of 'Arribada' (Mass Arrival):</strong> Over a span of several nights, hundreds of thousands of female turtles crawl ashore simultaneously under moonlit tides. Using their hind flippers, they excavate deep flask-shaped sand pits and lay approximately 100 to 120 soft-shelled eggs each, carefully covering the nests with sand before returning to the sea.</li>\n          <li><strong>Biological Marvel:</strong> Hatchlings emerge after 45–50 days and scramble guided by the starlight reflection on ocean waves. Years later, grown females navigate back to the exact same beach where they hatched to lay their own eggs.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Identification of Olive Ridley migration across the Indian Ocean",
            "marks": "1.5 Marks"
          },
          {
            "key": "Explanation of Arribada mass nesting in Odisha",
            "marks": "1.5 Marks"
          },
          {
            "key": "Hatchling emergence and navigational fidelity to natal beaches",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "How does single-use plastic discarded into city drainage canals eventually harm marine life in deep oceans thousands of miles away?",
        "category": "Global Environmental Interconnectedness",
        "marks": 3,
        "ans": "Earth's waterways are interconnected, carrying land-based pollution to the sea:\n        <ol>\n          <li><strong>Path from City to Ocean:</strong> Plastic bottles, wrappers, and bags thrown onto roads are washed into city storm drains by rains, entering local rivers and flowing downstream into the ocean.</li>\n          <li><strong>Ingestion and Entanglement:</strong> Marine creatures like sea turtles mistake floating plastic bags for jellyfish (their favorite food), choking their digestive tracts. Fish, seals, and seabirds become entangled in discarded nylon fishing nets.</li>\n          <li><strong>Breakdown into Microplastics:</strong> Over decades, sunlight and wave action fragment plastic into toxic microscopic particles (microplastics). Plankton and small fish ingest these microplastics, transferring toxins up the food chain to large fish and eventually back to humans who eat seafood.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Drain-to-river-to-sea transport pathway",
            "marks": "1 Mark"
          },
          {
            "key": "Direct wildlife impact (mistaken for food, choking, entanglement)",
            "marks": "1 Mark"
          },
          {
            "key": "Microplastic bioaccumulation in marine and human food webs",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "Map Skill Task: On a world map or globe, identify and define: (a) The Equator, (b) The Northern and Southern Hemispheres, and (c) The Prime Meridian.",
        "category": "Map & Globe Interpretation",
        "marks": 3,
        "ans": "<strong>Key Planetary Lines of Reference:</strong>\n        <ol>\n          <li><strong>The Equator (0° Latitude):</strong> An imaginary horizontal circle drawn around the exact middle of the Earth, equidistant from the North and South Poles. It divides the Earth into the <em>Northern Hemisphere</em> and <em>Southern Hemisphere</em>.</li>\n          <li><strong>Northern &amp; Southern Hemispheres:</strong>\n            <ul>\n              <li><em>Northern Hemisphere:</em> The half of Earth lying north of the Equator (contains India, Asia, Europe, and North America).</li>\n              <li><em>Southern Hemisphere:</em> The half of Earth lying south of the Equator (contains Australia, Antarctica, and major parts of South America and Africa).</li>\n            </ul>\n          </li>\n          <li><strong>The Prime Meridian (0° Longitude):</strong> An imaginary vertical line running from the North Pole to the South Pole passing through Greenwich, England. It serves as the baseline for global standard time zones.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Equator definition (0° latitude) dividing hemispheres",
            "marks": "1 Mark"
          },
          {
            "key": "Northern and Southern hemisphere distinctions with continental examples",
            "marks": "1 Mark"
          },
          {
            "key": "Prime Meridian definition (0° longitude) through Greenwich",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "q": "What does the ancient Indian philosophical concept 'Vasudhaiva Kutumbakam' teach humanity about environmental stewardship?",
        "category": "Ethics & Global Citizenship",
        "marks": 3,
        "ans": "<strong>Vasudhaiva Kutumbakam (वसुधैव कुटुम्बकम्):</strong> Sourced from the ancient *Maha Upanishad*, this Sanskrit verse translates to <em>'The World is One Family'</em>.\n        <br><br>\n        <strong>Lessons for Environmental Stewardship:</strong>\n        <ol>\n          <li><strong>Universal Kinship Beyond Borders:</strong> It teaches that all human beings, animals, birds, forests, and oceans are inextricably linked members of a single planetary family sharing one common home.</li>\n          <li><strong>Living in Harmony with Nature:</strong> Instead of exploiting nature as commodities, humanity must act as humble caretakers (stewards), ensuring that development does not poison the air, water, or soil that other species rely on.</li>\n          <li><strong>Collective Global Responsibility:</strong> Global challenges like climate change, ocean acidification, and pandemics cannot be solved by one country alone; all nations must collaborate as one family to protect planet Earth.</li>\n        </ol>",
        "rubric": [
          {
            "key": "Sanskrit origin and literal translation 'The World is One Family'",
            "marks": "1 Mark"
          },
          {
            "key": "Ethical lesson on harmony with non-human living species",
            "marks": "1 Mark"
          },
          {
            "key": "Global collaboration for planetary protection",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Earth — Our Shared Home",
        "q": "[Textbook Activity & Question 1] In 'Earth — Our Shared Home', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Earth — Our Shared Home</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Earth — Our Shared Home",
        "q": "[Textbook Activity & Question 2] In 'Earth — Our Shared Home', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Earth — Our Shared Home</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Earth — Our Shared Home",
        "q": "[Textbook Activity & Question 3] In 'Earth — Our Shared Home', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Earth — Our Shared Home</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Earth — Our Shared Home",
        "q": "[Textbook Activity & Question 4] In 'Earth — Our Shared Home', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Earth — Our Shared Home</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Earth — Our Shared Home",
        "q": "[Textbook Activity & Question 5] In 'Earth — Our Shared Home', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Earth — Our Shared Home</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Earth — Our Shared Home",
        "q": "[Textbook Activity & Question 6] In 'Earth — Our Shared Home', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Earth — Our Shared Home</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Earth — Our Shared Home",
        "q": "[Textbook Activity & Question 7] In 'Earth — Our Shared Home', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Earth — Our Shared Home</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Earth — Our Shared Home",
        "q": "[Textbook Activity & Question 8] In 'Earth — Our Shared Home', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Earth — Our Shared Home</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Think and Discuss • Environmental Science & Ecology • Earth — Our Shared Home",
        "q": "[Textbook Activity & Question 9] In 'Earth — Our Shared Home', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Earth — Our Shared Home</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out and Write • Observational Field Study • Earth — Our Shared Home",
        "q": "[Textbook Activity & Question 10] In 'Earth — Our Shared Home', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Earth — Our Shared Home</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Scientific Investigation • Ecosystem Relationships • Earth — Our Shared Home",
        "q": "[Textbook Activity & Question 11] In 'Earth — Our Shared Home', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Earth — Our Shared Home</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Wisdom & Community Stewardship • Conservation • Earth — Our Shared Home",
        "q": "[Textbook Activity & Question 12] In 'Earth — Our Shared Home', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Earth — Our Shared Home</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Survey & Data Collection • Experiential Inquiry • Earth — Our Shared Home",
        "q": "[Textbook Activity & Question 13] In 'Earth — Our Shared Home', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Earth — Our Shared Home</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Health, Diet & Human Biology • Nutritional Science • Earth — Our Shared Home",
        "q": "[Textbook Activity & Question 14] In 'Earth — Our Shared Home', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Earth — Our Shared Home</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Disaster Preparedness & Climate Resilience • Geography • Earth — Our Shared Home",
        "q": "[Textbook Activity & Question 15] In 'Earth — Our Shared Home', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Earth — Our Shared Home</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Biodiversity & Habitat Adaptations • Wildlife Protection • Earth — Our Shared Home",
        "q": "[Textbook Activity & Question 16] In 'Earth — Our Shared Home', describe how students can conduct an empirical investigation or discussion on this topic and explain the scientific principles involved.",
        "ans": "<strong>Scientific Model Answer & Environmental Analysis:</strong><br>1. <strong>Field Inquiry / Observation:</strong> In <em>Earth — Our Shared Home</em>, students examine real-world ecological relationships, habitat dependencies, and sustainable environmental practices.<br>2. <strong>Scientific Core Principles:</strong> Applying primary scientific methods—such as formulating a hypothesis, measuring field parameters, and recording observations in a nature journal—reveals direct linkages between human communities and natural cycles.<br>3. <strong>Stewardship Conclusion:</strong> Understanding these concepts cultivates empathy for living organisms and empowers students to implement eco-friendly conservation measures in daily life.",
        "marks": 3,
        "rubric": [
          {
            "key": "Observation methodology & identification of ecological concepts",
            "marks": "1.0 M"
          },
          {
            "key": "Scientific explanation of natural cause-and-effect processes",
            "marks": "1.0 M"
          },
          {
            "key": "Actionable conservation recommendations stated clearly",
            "marks": "1.0 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Youth Planetary Action Charter for a Zero-Waste, Net-Zero School",
      "text": "During World Environment Day, students learned that humanity currently consumes ecological resources 1.7 times faster than Earth's ecosystems can naturally regenerate, leading to severe biodiversity loss and plastic-filled oceans.",
      "question": "Author a 5-point 'Youth Planetary Action Charter' that your school community will pledge to adopt to protect Earth as our shared home.",
      "answer": "<strong>Youth Planetary Action Charter for Earth:</strong>\n      <ol>\n        <li><strong>Pledge for Single-Use Plastic Elimination:</strong> We pledge to completely eliminate single-use plastic water bottles, straws, and polybags on our school campus, opting exclusively for reusable, washable alternatives.</li>\n        <li><strong>Pledge for Energy &amp; Water Conservation:</strong> We pledge to turn off all electrical appliances when leaving rooms and report running taps immediately, reducing our school's carbon and water footprint.</li>\n        <li><strong>Pledge for Biodiversity Protection:</strong> We pledge to plant and nurture at least five indigenous trees every year in our school or neighbourhood, creating safe mini-habitats for birds, butterflies, and squirrels.</li>\n        <li><strong>Pledge for Mindful Food Consumption:</strong> We pledge to respect farmers and the Earth by taking only what we can finish on our plates, ensuring zero food waste enters municipal landfills.</li>\n        <li><strong>Pledge for Spreading Environmental Awareness:</strong> We pledge to educate our families and neighbors about waste segregation, sustainable public transport, and the timeless principle of <em>Vasudhaiva Kutumbakam</em>.</li>\n      </ol>",
      "rubric": "2 Marks for practical school-level resource commitments (plastic ban, energy saving) + 3 Marks for biodiversity, food ethics, and community awareness leadership = 5 Marks"
    }
  }
];

module.exports = { wondrousWorldChapters };
