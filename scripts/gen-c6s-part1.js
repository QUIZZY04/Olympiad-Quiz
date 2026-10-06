const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c6s');

// ==========================================
// CHAPTER 2: Diversity in the Living World
// ==========================================
const ch2Html = `<section class="chapter-section" id="ch2">
  <div class="chapter-header">
    <div class="ch-badge">2</div>
    <div class="chapter-header-info">
      <h2>Chapter 2: Diversity in the Living World</h2>
      <p>NCERT Curiosity (Class 6) — Plant Diversity, Roots &amp; Venation, Animal Habitats, Adaptations &amp; Biodiversity Conservation | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Biological Concepts &amp; Organism Classification</div>
    <ul class="concept-list">
      <li><strong>Biodiversity:</strong> The vast variety of plants, animals, and microorganisms living across various terrestrial and aquatic ecosystems on Earth.</li>
      <li><strong>Plant Classification by Stature:</strong>
        <ul>
          <li><em>Herbs:</em> Small plants with green, soft, and tender stems (e.g., Tomato, Mint, Wheat).</li>
          <li><em>Shrubs:</em> Medium-sized plants with a hard, woody stem branching out near ground level (e.g., Rose, Lemon).</li>
          <li><em>Trees:</em> Tall plants with a thick, hard, brown woody trunk branching high above ground (e.g., Mango, Neem, Banyan).</li>
          <li><em>Creepers &amp; Climbers:</em> Weak-stemmed plants that trail on soil (Pumpkin) or climb up supports using tendrils (Money plant).</li>
        </ul>
      </li>
      <li><strong>Leaf Venation &amp; Root Architecture:</strong>
        <ul>
          <li><em>Reticulate Venation (Net-like):</em> Associated with a <strong>Taproot System</strong> with a single thick primary root and lateral secondary roots (e.g., Gram, Mustard, Radish, Kidney Bean).</li>
          <li><em>Parallel Venation (Linear):</em> Associated with a <strong>Fibrous Root System</strong> with a cluster of slender roots originating from stem base (e.g., Wheat, Grass, Maize, Bamboo).</li>
        </ul>
      </li>
      <li><strong>Animal Classification:</strong> Grouping animals by habitat (Aquatic, Terrestrial, Amphibious), reproduction (Oviparous egg-layers vs Viviparous live-bearers), and locomotion methods.</li>
    </ul>
  </div>

  <!-- SVG Diagram 1: Comparative Venation & Roots -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 580 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
      <text x="290" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Universal Correlation: Leaf Venation and Root Architecture</text>
      
      <!-- Panel 1: Dicot / Reticulate & Taproot -->
      <rect x="20" y="38" width="260" height="130" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
      <text x="150" y="55" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#14532d" text-anchor="middle">Kidney Bean / Dicot (Reticulate + Taproot)</text>
      <path d="M 45,145 Q 65,75 105,75 Q 105,145 45,145 Z" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>
      <line x1="45" y1="145" x2="100" y2="78" stroke="#15803d" stroke-width="2"/>
      <line x1="65" y1="120" x2="85" y2="105" stroke="#15803d" stroke-width="1.2"/>
      <line x1="80" y1="100" x2="95" y2="90" stroke="#15803d" stroke-width="1.2"/>
      <line x1="195" y1="75" x2="195" y2="145" stroke="#b45309" stroke-width="3"/>
      <line x1="195" y1="90" x2="175" y2="105" stroke="#b45309" stroke-width="1.5"/>
      <line x1="195" y1="105" x2="215" y2="120" stroke="#b45309" stroke-width="1.5"/>
      <line x1="195" y1="120" x2="180" y2="135" stroke="#b45309" stroke-width="1.5"/>
      <text x="150" y="160" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#166534" text-anchor="middle">Reticulate Net Veins → Central Thick Taproot</text>

      <!-- Panel 2: Monocot / Parallel & Fibrous -->
      <rect x="300" y="38" width="260" height="130" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>
      <text x="430" y="55" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">Wheat / Monocot (Parallel + Fibrous)</text>
      <path d="M 325,145 Q 350,70 370,70 Q 370,145 325,145 Z" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/>
      <line x1="335" y1="140" x2="365" y2="75" stroke="#1d4ed8" stroke-width="1.2"/>
      <line x1="345" y1="140" x2="368" y2="85" stroke="#1d4ed8" stroke-width="1.2"/>
      <line x1="475" y1="75" x2="455" y2="140" stroke="#b45309" stroke-width="1.8"/>
      <line x1="475" y1="75" x2="467" y2="145" stroke="#b45309" stroke-width="1.8"/>
      <line x1="475" y1="75" x2="480" y2="142" stroke="#b45309" stroke-width="1.8"/>
      <line x1="475" y1="75" x2="493" y2="138" stroke="#b45309" stroke-width="1.8"/>
      <text x="430" y="160" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#1e40af" text-anchor="middle">Parallel Linear Veins → Clustered Fibrous Roots</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 2.1: Morphological Relationship Between Seeds, Leaves, and Roots</div>
  </div>

  <div class="ex-div">NCERT Exercise: Let Us Enhance Our Learning (100% Textbook Questions)</div>

  <!-- Q1 -->
  <div class="q-card" id="c6s-ch2-q1">
    <div class="q-head" onclick="toggleQ('c6s-ch2-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Here are two types of seeds: Wheat and Kidney bean. What differences do you find among the roots and leaf venation of their plants?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <table class="data-table">
            <thead>
              <tr>
                <th>Plant / Seed Type</th>
                <th>Type of Seed</th>
                <th>Leaf Venation Pattern</th>
                <th>Root Architecture</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Wheat Plant</strong></td>
                <td><strong>Monocotyledon (Monocot):</strong> Seed consists of a single cotyledon.</td>
                <td><strong>Parallel Venation:</strong> Veins run parallel and straight alongside each other from base to leaf tip.</td>
                <td><strong>Fibrous Root System:</strong> A dense cluster of slender, thread-like roots of nearly equal thickness emerging from the base of the stem.</td>
              </tr>
              <tr>
                <td><strong>Kidney Bean Plant (Rajma)</strong></td>
                <td><strong>Dicotyledon (Dicot):</strong> Seed splits into two distinct cotyledons.</td>
                <td><strong>Reticulate Venation:</strong> Veins branch out repeatedly, forming a complex net-like or webbed pattern over the lamina.</td>
                <td><strong>Taproot System:</strong> A single, prominent, thick central main root (taproot) that grows deep downwards with smaller lateral branches.</td>
              </tr>
            </tbody>
          </table>
          <div class="step">
            <strong>Biological Principle:</strong> Seeds with one cotyledon (monocots) always develop parallel leaf venation and fibrous roots, whereas seeds with two cotyledons (dicots) develop reticulate leaf venation and a taproot system.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Identification of Monocot vs Dicot nature of Wheat and Kidney Bean</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Contrasting Leaf Venation (Parallel vs Reticulate) with description</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Contrasting Root Systems (Fibrous vs Taproot) with description</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c6s-ch2-q2">
    <div class="q-head" onclick="toggleQ('c6s-ch2-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Group the following animals based on their habitats (Aquatic, Terrestrial, or Both): Horse, Dolphin, Frog, Sheep, Crocodile, Squirrel, Whale, Earthworm, Pigeon, and Tortoise.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Classification by Habitat:</strong>
            <ul>
              <li><strong>Group A — Strictly Aquatic Animals (Live only in water):</strong>
                <ul>
                  <li><em>Dolphin:</em> Mammal living exclusively in marine and river water; uses flippers and tail flukes to swim.</li>
                  <li><em>Whale:</em> Large marine mammal spending its entire lifecycle in oceans.</li>
                </ul>
              </li>
              <li><strong>Group B — Strictly Terrestrial Animals (Live on land / aerial):</strong>
                <ul>
                  <li><em>Horse:</em> Four-legged terrestrial mammal adapted for grasslands.</li>
                  <li><em>Sheep:</em> Terrestrial herbivore adapted for grazing on land pastures.</li>
                  <li><em>Squirrel:</em> Arboreal terrestrial rodent living in trees.</li>
                  <li><em>Pigeon:</em> Aerial/terrestrial bird living on land habitats and trees.</li>
                </ul>
              </li>
              <li><strong>Group C — Amphibious / Both Land &amp; Water:</strong>
                <ul>
                  <li><em>Frog:</em> Amphibian; lays eggs in water, tadpoles swim in water, adults live on land and in ponds (breathes through moist skin and lungs).</li>
                  <li><em>Crocodile:</em> Reptile that swims and hunts in water but rests, sunbathes, and lays eggs on dry land.</li>
                  <li><em>Tortoise:</em> Reptile capable of living on land while some species enter water; freshwater turtles inhabit both land and water.</li>
                  <li><em>Earthworm:</em> Subterranean creature living in moist soil where water and terrestrial nutrients coexist; breathes through moist skin.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correctly placing Dolphin and Whale in Aquatic habitat</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correctly placing Horse, Sheep, Squirrel, and Pigeon in Terrestrial habitat</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correctly placing Frog, Crocodile, Tortoise, and Earthworm in Both/Amphibious</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c6s-ch2-q3">
    <div class="q-head" onclick="toggleQ('c6s-ch2-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Examine a radish plant. Identify its root type and leaf venation. Can you predict the type of root of a plant just by observing its leaves without pulling it out?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Radish Observations:</strong><br>
            • <strong>Root System:</strong> The edible radish is a modified, swollen <strong>Taproot</strong> (fusiform taproot) that stores food, with fine lateral root hairs emerging from its sides.<br>
            • <strong>Leaf Venation:</strong> The leaves of a radish plant exhibit prominent <strong>Reticulate Venation</strong> with an intricate net-like web of veins.
          </div>
          <div class="step">
            <strong>2. Prediction Without Digging:</strong><br>
            <strong>Yes, absolutely.</strong> There is a direct, reliable biological correlation in flowering plants:<br>
            • If a plant's leaves have <em>Reticulate Venation</em>, it will invariably possess a <em>Taproot System</em>.<br>
            • If a plant's leaves have <em>Parallel Venation</em>, it will possess a <em>Fibrous Root System</em>.<br>
            Therefore, by simply observing the net-like venation of radish leaves, one can confidently deduce that its root is a taproot without uprooting it.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Identification of Radish as Taproot and leaves having Reticulate Venation</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Scientific explanation that leaf venation reliably indicates root architecture</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c6s-ch2-q4">
    <div class="q-head" onclick="toggleQ('c6s-ch2-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Look at a mountain goat and a goat found in the plains. Point out the similarities and differences between them, and explain the biological reasons for these differences.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Similarities:</strong><br>
            Both are herbivorous mammals belonging to the goat family. They have four legs, cloven hooves, horns, chew the cud (ruminants), and feed on grasses, leaves, and shrubs.
          </div>
          <div class="step">
            <strong>2. Differences &amp; Habitat Adaptations:</strong>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Mountain Goat</th>
                  <th>Plains Goat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Body Fur / Coat</strong></td>
                  <td>Has a thick, double-layered coat of dense, long fur and wool to trap body heat against sub-zero freezing temperatures and biting mountain winds.</td>
                  <td>Has short, thin hair that allows body heat to radiate away easily in hot and humid plains climates.</td>
                </tr>
                <tr>
                  <td><strong>Hooves &amp; Agility</strong></td>
                  <td>Possesses strong, specialized hooves with rubbery, non-skid pads and sharp hard rims for gripping steep, slippery, jagged rocks.</td>
                  <td>Has standard flat hooves suitable for walking and grazing across level, grassy plains.</td>
                </tr>
                <tr>
                  <td><strong>Body Build</strong></td>
                  <td>Stocky, muscular body with a low centre of gravity to maintain balance on rocky precipices.</td>
                  <td>Leaner, taller body suited for grazing over open fields.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating 2 valid morphological/biological similarities</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Contrasting body coat (dense fur vs thin hair) and explaining thermal adaptation</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Contrasting hoof adaptation for rocky slopes vs flat plains</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c6s-ch2-q5">
    <div class="q-head" onclick="toggleQ('c6s-ch2-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Group the following animals based on a feature other than habitat (such as mode of reproduction or presence of wings/movement): Cow, Cockroach, Pigeon, Bat, Tortoise, Whale, Fish, Grasshopper, and Lizard.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Classification Scheme: Mode of Reproduction (Viviparous vs Oviparous):</strong><br>
            We can classify these animals into two distinct scientific categories based on how they produce offspring:
            <ul>
              <li><strong>1. Viviparous Animals (Give birth to live young and nurse them with milk):</strong>
                <ul>
                  <li><em>Cow:</em> Terrestrial mammal giving birth to calves.</li>
                  <li><em>Bat:</em> Flying mammal giving birth to live pups.</li>
                  <li><em>Whale:</em> Aquatic mammal giving birth to live calves in oceans.</li>
                </ul>
              </li>
              <li><strong>2. Oviparous Animals (Egg-laying organisms):</strong>
                <ul>
                  <li><em>Cockroach:</em> Insect that lays eggs enclosed in an ootheca.</li>
                  <li><em>Pigeon:</em> Bird that lays hard-shelled eggs in nests.</li>
                  <li><em>Tortoise:</em> Reptile that buries leathery eggs in sandy ground.</li>
                  <li><em>Fish:</em> Aquatic vertebrate laying soft jelly-like eggs in water.</li>
                  <li><em>Grasshopper:</em> Insect laying eggs in soil.</li>
                  <li><em>Lizard:</em> Reptile laying small eggs in wall crevices.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Clearly defining the chosen classification criterion (Reproduction or Locomotion)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correctly categorising all Viviparous organisms (Cow, Bat, Whale)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correctly categorising all Oviparous organisms (Cockroach, Pigeon, etc.)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c6s-ch2-q6">
    <div class="q-head" onclick="toggleQ('c6s-ch2-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Discuss how large-scale deforestation affects our surroundings and the living world. Suggest three practical ways to address this environmental challenge.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Adverse Effects of Deforestation:</strong><br>
            • <strong>Loss of Biodiversity &amp; Wildlife Habitat:</strong> Forests provide shelter and nourishment to thousands of species. Cutting trees renders animals homeless, leading to human-animal conflicts and species extinction.<br>
            • <strong>Soil Erosion &amp; Flash Floods:</strong> Tree roots anchor the topsoil firmly. In their absence, torrential rains wash away fertile topsoil, silting rivers and causing floods.<br>
            • <strong>Climate Change &amp; Global Warming:</strong> Trees absorb carbon dioxide during photosynthesis. Fewer trees result in higher atmospheric CO₂ levels, accelerating global warming and altering rainfall patterns.
          </div>
          <div class="step">
            <strong>2. Practical Solutions:</strong><br>
            1. <strong>Afforestation &amp; Reforestation:</strong> Organizing mass tree-plantation drives like Van Mahotsav in school campuses, community parks, and degraded forest lands.<br>
            2. <strong>Practicing the 3Rs (Reduce, Reuse, Recycle):</strong> Recycling paper notebooks and packaging materials to significantly reduce the commercial demand for cutting down pulpwood trees.<br>
            3. <strong>Strict Enforcement &amp; Protected Biospheres:</strong> Enforcing strict anti-poaching laws and preserving sacred groves and national sanctuaries.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Explaining two major consequences of deforestation on living organisms</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Suggesting three actionable remedial measures (Afforestation, Recycling, Conservation)</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Case Study -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Ecological Habitat Case Study)</div>
    <div class="q-text"><strong>Case Study: Desert vs Aquatic Plant Morphological Adaptations:</strong><br>
      During an environmental science field study, students inspected a prickly Opuntia (Cactus) thriving in arid sand and a Lotus plant floating gracefully in a village pond.<br>
      (a) How has the Cactus modified its leaves, stem, and root system to survive extreme desert drought?<br>
      (b) How are the leaves and stems of a Lotus specially adapted for an aquatic lifestyle?<br>
      (c) Why do submerged freshwater plants (like Hydrilla and Vallisneria) possess thin, ribbon-like leaves?
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Xerophytic Adaptations of Cactus:</strong><br>
        • <em>Leaves:</em> Modified into sharp spines to drastically eliminate transpiration water loss and deter grazing herbivores.<br>
        • <em>Stem:</em> Green, succulent, and spongy; performs photosynthesis and stores substantial water reserves beneath a thick waxy cuticle.<br>
        • <em>Roots:</em> Deep-penetrating taproots that spread horizontally over vast areas near the surface to quickly absorb fleeting rainfall.</p>

        <p><strong>(b) Hydrophytic Adaptations of Lotus:</strong><br>
        • <em>Leaves:</em> Broad circular leaves coated with a waxy water-repellent layer that prevents rot. Stomata are located solely on the upper sun-exposed surface.<br>
        • <em>Stem (Petiole):</em> Long, slender, hollow stalks containing abundant air chambers (aerenchyma) that provide buoyancy and flex with water currents.</p>

        <p><strong>(c) Function of Ribbon-like Submerged Leaves:</strong><br>
        Narrow, thin ribbon leaves bend easily with flowing water currents without offering mechanical resistance, preventing the plant from tearing or being uprooted.</p>
      </div>
    </div>
  </div>
</section>
`;

// ==========================================
// CHAPTER 3: Mindful Eating: A Path to a Healthy Body
// ==========================================
const ch3Html = `<section class="chapter-section" id="ch3">
  <div class="chapter-header">
    <div class="ch-badge">3</div>
    <div class="chapter-header-info">
      <h2>Chapter 3: Mindful Eating: A Path to a Healthy Body</h2>
      <p>NCERT Curiosity (Class 6) — Nutrients, Chemical Testing (Starch, Fats, Proteins), Balanced Diet, Traditional Culinary Wisdom &amp; Deficiency Diseases | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Nutritional Principles &amp; Food Components</div>
    <ul class="concept-list">
      <li><strong>Major Essential Nutrients:</strong>
        <ul>
          <li><em>Carbohydrates:</em> Primary source of instant energy (Starches &amp; Sugars in Rice, Wheat, Potatoes, Maize).</li>
          <li><em>Fats:</em> Concentrated energy reserves (Butter, Ghee, Mustard oil, Groundnuts, Almonds).</li>
          <li><em>Proteins:</em> Bodybuilding nutrients essential for tissue growth, cell repair, and enzyme synthesis (Pulses, Gram, Soya bean, Milk, Paneer, Eggs).</li>
          <li><em>Vitamins &amp; Minerals:</em> Protective nutrients defending against infections, regulating biochemical pathways, maintaining bone, teeth, and vision health.</li>
          <li><em>Dietary Fibre (Roughage) &amp; Water:</em> Aids digestion, maintains gut microbiome, and prevents constipation.</li>
        </ul>
      </li>
      <li><strong>Millets (Shree Anna / Nutri-Cereals):</strong> Jowar (Sorghum), Bajra (Pearl millet), and Ragi (Finger millet) are climate-resilient, mineral-rich superfoods high in calcium, iron, and fibre.</li>
      <li><strong>Mindful Eating:</strong> Conscious selection of freshly cooked, minimally processed foods that nourish bodily organs over calorie-dense, ultra-processed junk food.</li>
    </ul>
  </div>

  <!-- SVG Diagram 1: Chemical Tests for Nutrients -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 600px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Standard Laboratory Chemical Tests for Food Nutrients</text>
      
      <!-- Starch Test -->
      <rect x="25" y="40" width="150" height="120" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>
      <text x="100" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">1. Starch Test</text>
      <!-- Petri dish with potato slice -->
      <ellipse cx="100" cy="95" rx="35" ry="18" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
      <ellipse cx="100" cy="95" rx="15" ry="8" fill="#1e1b4b"/>
      <text x="100" y="130" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">Iodine Solution</text>
      <text x="100" y="145" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#2563eb" text-anchor="middle">Color: Blue-Black</text>

      <!-- Protein Test -->
      <rect x="195" y="40" width="150" height="120" rx="8" fill="#fdf4ff" stroke="#a855f7" stroke-width="1.8"/>
      <text x="270" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#6b21a8" text-anchor="middle">2. Protein Test</text>
      <!-- Test tube with violet solution -->
      <path d="M 262,70 L 262,115 A 8,8 0 0,0 278,115 L 278,70 Z" fill="#c084fc" stroke="#7e22ce" stroke-width="1.5"/>
      <text x="270" y="130" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#6b21a8" text-anchor="middle">CuSO₄ + NaOH</text>
      <text x="270" y="145" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#7e22ce" text-anchor="middle">Color: Violet / Purple</text>

      <!-- Fat Test -->
      <rect x="365" y="40" width="150" height="120" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.8"/>
      <text x="440" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e" text-anchor="middle">3. Fat Test</text>
      <!-- Paper sheet with translucent greasy patch -->
      <rect x="415" y="75" width="50" height="40" fill="#ffffff" stroke="#94a3b8" stroke-width="1.2"/>
      <circle cx="440" cy="95" r="14" fill="#fed7aa" opacity="0.8"/>
      <text x="440" y="130" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#92400e" text-anchor="middle">Clean Filter Paper</text>
      <text x="440" y="145" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#b45309" text-anchor="middle">Translucent Oily Patch</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 3.1: Characteristic Color Reactions &amp; Spot Tests for Food Nutrients</div>
  </div>

  <div class="ex-div">NCERT Exercise: Let Us Enhance Our Learning (100% Textbook Questions)</div>

  <!-- Q1 -->
  <div class="q-card" id="c6s-ch3-q1">
    <div class="q-head" onclick="toggleQ('c6s-ch3-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Pick the odd one out and give scientific reasons for your choice: <br>(i) Jowar, Bajra, Ragi, Chana <br>(ii) Kidney beans, Green gram, Soya bean, Rice</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) Jowar, Bajra, Ragi, Chana:</strong><br>
            • <strong>Odd One Out:</strong> <strong>Chana (Chickpea)</strong>.<br>
            • <strong>Scientific Reason:</strong> Jowar (Sorghum), Bajra (Pearl millet), and Ragi (Finger millet) are <strong>Millets (Nutri-cereals)</strong> belonging to the grass family (Poaceae) and are rich sources of carbohydrates, minerals, and dietary roughage. In contrast, Chana is a <strong>Pulse (Legume)</strong> belonging to the Fabaceae family and is primarily a rich source of plant proteins.
          </div>
          <div class="step">
            <strong>(ii) Kidney beans, Green gram, Soya bean, Rice:</strong><br>
            • <strong>Odd One Out:</strong> <strong>Rice</strong>.<br>
            • <strong>Scientific Reason:</strong> Kidney beans (Rajma), Green gram (Moong), and Soya bean are all <strong>Pulses/Legumes</strong> that serve as powerhouse sources of <strong>Proteins</strong> (bodybuilding nutrients). On the other hand, Rice is a <strong>Cereal grain</strong> composed predominantly of <strong>Carbohydrates (Starch)</strong>, acting primarily as an energy-giver.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Identification of Chana with Millets vs Pulse justification</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Identification of Rice with Carbohydrate vs Protein justification</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c6s-ch3-q2">
    <div class="q-head" onclick="toggleQ('c6s-ch3-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Discuss traditional versus modern culinary practices in India. How do these changes impact the nutritional value of our food and personal health?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <table class="data-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Traditional Culinary Practices</th>
                <th>Modern Culinary Practices</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cooking Equipment &amp; Fuel</strong></td>
                <td>Clay pots, iron kadhais, and brass vessels cooked over earthen chulhas or slow flame. Stone sil-batta used for crushing fresh spices.</td>
                <td>Non-stick cookware, pressure cookers, microwaves, and electric high-speed blenders.</td>
              </tr>
              <tr>
                <td><strong>Ingredients &amp; Grains</strong></td>
                <td>Whole grains, unpolished rice, indigenous millets (Jowar, Bajra, Ragi), cold-pressed unrefined oils, and farm-fresh seasonal vegetables.</td>
                <td>Refined flour (maida), polished white rice, refined seed oils, pre-packaged spice mixes, and chemical preservatives.</td>
              </tr>
              <tr>
                <td><strong>Nutritional &amp; Health Impact</strong></td>
                <td>Slow cooking preserved heat-sensitive vitamins and dietary fibre. Stone grinding enriched minerals without heat damage. Kept gut health strong.</td>
                <td>High refining strips off natural fibre and essential B-vitamins. Excessive salt, refined sugars, and trans-fats contribute to lifestyle disorders (obesity, diabetes, constipation).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Contrasting cooking methods and cookware (chulha/sil-batta vs modern appliances)</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Evaluating nutritional consequences (fibre loss, refined foods, health disorders)</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c6s-ch3-q3">
    <div class="q-head" onclick="toggleQ('c6s-ch3-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">A science teacher remarks that "Good food may act as medicine." Ravi is curious about this statement and has some questions. List at least two thoughtful questions that Ravi can ask his teacher.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Thoughtful Questions Ravi can ask his science teacher:</strong><br>
            1. <em>"How do specific natural foods and Indian kitchen spices (such as turmeric containing curcumin, ginger, garlic, and amla packed with Vitamin C) heal body tissues and enhance immunity against seasonal infections without pharmaceutical medicines?"</em><br>
            2. <em>"Can nutritional deficiencies like iron-deficiency anaemia or Vitamin A night blindness be completely cured simply by including iron-rich green leafy vegetables (spinach) and beta-carotene foods (carrots, papaya) in our daily diet?"</em><br>
            3. <em>"Why are traditional millets like Ragi and Bajra recommended by doctors to manage blood sugar and strengthen bones instead of relying on vitamin pills?"</em>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formulating two relevant, scientifically grounded inquiry questions</span><span class="marking-marks">1 Mark each (Total 2 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c6s-ch3-q4">
    <div class="q-head" onclick="toggleQ('c6s-ch3-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">"Not all delicious foods are necessarily healthy, while not all nutritious foods are always enjoyable." Share your thoughts on this statement with examples, and explain the importance of mindful eating.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Delicious but Unhealthy Foods:</strong><br>
            Ultra-processed foods such as potato chips, deep-fried samosas, burgers, pastries, and carbonated soft drinks are engineered to be extremely delicious due to high concentrations of refined sugar, salt, and trans-fats. However, they lack dietary roughage, vitamins, and minerals. Regular intake leads to lethargy, tooth decay, childhood obesity, and cardiovascular strain.
          </div>
          <div class="step">
            <strong>2. Nutritious but Less Palatable Foods:</strong><br>
            Vegetables like bitter gourd (karela), plain boiled lentils, raw sprouted fenugreek, and boiled spinach may possess an unappealing bitter or bland taste for young children. Yet, they are loaded with vital micronutrients: iron, folates, dietary fibre, and antioxidants that cleanse the blood, improve vision, and maintain bowel health.
          </div>
          <div class="step">
            <strong>3. Essence of Mindful Eating:</strong><br>
            Mindful eating is the conscious habit of eating food to nourish the body's internal organs rather than merely satisfying momentary tongue cravings. It involves:
            • Recognizing hunger versus emotional snacking.<br>
            • Chewing food slowly to facilitate salivary enzyme action.<br>
            • Balancing taste and nutrition by cooking vegetables creatively with traditional spices.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Discussion of junk vs healthy foods with realistic examples</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Clear articulation of mindful eating principles and balanced dietary mindset</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c6s-ch3-q5">
    <div class="q-head" onclick="toggleQ('c6s-ch3-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Describe the step-by-step laboratory procedures to test for: (i) Starch, (ii) Fats, and (iii) Proteins in given food samples. Include required chemical reagents and expected color changes.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) Test for Starch (Carbohydrates):</strong><br>
            • <em>Procedure:</em> Take a small portion of the food sample (e.g., a freshly cut slice of raw potato or boiled rice paste). Add 2 to 3 drops of dilute <strong>Iodine solution</strong> using a dropper.<br>
            • <em>Observation:</em> The food surface turns an intense <strong>Blue-Black color</strong>.<br>
            • <em>Inference:</em> Formation of blue-black complex confirms the presence of starch.
          </div>
          <div class="step">
            <strong>(ii) Test for Fats:</strong><br>
            • <em>Procedure:</em> Wrap a small piece of food (e.g., crushed groundnut kernel or a drop of mustard oil) in a clean piece of white paper and crush it gently without tearing the paper.<br>
            • <em>Observation:</em> An <strong>oily, translucent patch</strong> appears on the paper.<br>
            • <em>Inference:</em> When held against light, the patch lets faint light pass through, proving the presence of fats.
          </div>
          <div class="step">
            <strong>(iii) Test for Proteins (Biuret Test):</strong><br>
            • <em>Procedure:</em> Grind a small quantity of food (e.g., boiled egg white or powdered dal paste) and transfer it into a clean test tube with 10 drops of water. Shake thoroughly. Add <strong>2 drops of Copper Sulphate (CuSO₄) solution</strong> and <strong>10 drops of Caustic Soda (NaOH) solution</strong>. Shake well and leave undisturbed for 5 minutes.<br>
            • <em>Observation:</em> The mixture changes to a distinct <strong>Violet / Purple color</strong>.<br>
            • <em>Inference:</em> The violet hue confirms the presence of proteins.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Starch test with iodine and blue-black observation</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Fat test with paper translucent spot observation</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Protein test with CuSO₄ + NaOH and violet observation</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c6s-ch3-q6">
    <div class="q-head" onclick="toggleQ('c6s-ch3-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Complete the clinical deficiency table: Correlate the deficiency disease with its missing nutrient, characteristic physiological symptoms, and preventive dietary sources for: Night blindness, Scurvy, Rickets, Goitre, and Anaemia.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <table class="data-table">
            <thead>
              <tr>
                <th>Deficiency Disease</th>
                <th>Deficient Nutrient</th>
                <th>Key Symptoms</th>
                <th>Recommended Dietary Remedies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Night Blindness</strong></td>
                <td>Vitamin A</td>
                <td>Poor vision in dim light, dry cornea, loss of vision at night.</td>
                <td>Carrots, Papaya, Mango, Milk, Green leafy vegetables, Fish liver oil.</td>
              </tr>
              <tr>
                <td><strong>Scurvy</strong></td>
                <td>Vitamin C</td>
                <td>Bleeding, swollen gums; wounds take an abnormally long time to heal.</td>
                <td>Citrus fruits (Amla, Orange, Lemon, Guava), Tomatoes.</td>
              </tr>
              <tr>
                <td><strong>Rickets</strong></td>
                <td>Vitamin D &amp; Calcium</td>
                <td>Soft, brittle, and bent bones; bow legs and pigeon chest in children.</td>
                <td>Milk, Dairy products, Eggs, exposure of skin to morning sunlight.</td>
              </tr>
              <tr>
                <td><strong>Goitre</strong></td>
                <td>Iodine</td>
                <td>Swollen thyroid gland in neck, mental disability in growing children.</td>
                <td>Iodised salt, Seafood, Seaweed.</td>
              </tr>
              <tr>
                <td><strong>Anaemia</strong></td>
                <td>Iron</td>
                <td>Extreme weakness, fatigue, pale skin and nails, shortness of breath.</td>
                <td>Spinach, Jaggery (Gur), Apples, Pomegranates, Lentils.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Accurate matching of missing vitamins/minerals for all 5 diseases</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Accurate identification of symptoms and therapeutic dietary sources</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Case Study -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Clinical Nutrition Case Study)</div>
    <div class="q-text"><strong>Case Study: School Mid-Day Meal &amp; Hidden Hunger:</strong><br>
      A health checkup in a rural primary school revealed that several 11-year-old students complained of extreme tiredness, pale nails, bleeding gums during tooth brushing, and difficulty reading the blackboard in dim twilight.<br>
      (a) Diagnose the two specific nutritional deficiencies causing (i) bleeding gums, and (ii) twilight vision impairment.<br>
      (b) Which mineral deficiency leads to pale fingernails and lethargy? Suggest two affordable local foods to treat it.<br>
      (c) Why has the Government of India mandated the inclusion of Millets (Shree Anna) like Ragi and Bajra in Mid-Day Meals?
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Nutritional Diagnoses:</strong><br>
        • (i) <em>Bleeding gums:</em> Caused by <strong>Vitamin C deficiency (Scurvy)</strong>.<br>
        • (ii) <em>Twilight vision impairment:</em> Caused by <strong>Vitamin A deficiency (Night Blindness)</strong>.</p>

        <p><strong>(b) Mineral Deficiency &amp; Remedy:</strong><br>
        • <em>Mineral:</em> <strong>Iron deficiency</strong> leads to Anaemia (inadequate hemoglobin synthesis).<br>
        • <em>Local Dietary Remedies:</em> Locally available <strong>Jaggery (Gur)</strong> and green leafy vegetables like <strong>Spinach (Palak) or Methi</strong>, along with roasted chana.</p>

        <p><strong>(c) Scientific Rationale for Millets in Mid-Day Meals:</strong><br>
        Millets are nutritional powerhouses rich in calcium (Ragi strengthens growing bones), dietary iron (prevents anaemia), and complex carbohydrates with high fibre (promotes sustained mental alertness and healthy bowel movement without sudden sugar spikes).</p>
      </div>
    </div>
  </div>
</section>
`;

// ==========================================
// CHAPTER 4: Exploring Magnets
// ==========================================
const ch4Html = `<section class="chapter-section" id="ch4">
  <div class="chapter-header">
    <div class="ch-badge">4</div>
    <div class="chapter-header-info">
      <h2>Chapter 4: Exploring Magnets</h2>
      <p>NCERT Curiosity (Class 6) — Magnetic Materials, Poles of a Magnet, Laws of Attraction &amp; Repulsion, Magnetic Compass, Earth's Magnetism &amp; Care | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Magnetic Principles &amp; Field Concepts</div>
    <ul class="concept-list">
      <li><strong>Discovery &amp; Types of Magnets:</strong> Natural magnet is <strong>Magnetite</strong> (iron ore, Fe₃O₄). Artificial magnets come in various shapes: Bar, Horseshoe, Cylindrical, Ring, and Ball-ended magnets.</li>
      <li><strong>Magnetic vs Non-Magnetic Materials:</strong>
        <ul>
          <li><em>Magnetic:</em> Materials attracted towards a magnet (Iron, Nickel, Cobalt, Steel).</li>
          <li><em>Non-Magnetic:</em> Materials experiencing no magnetic force (Wood, Plastic, Paper, Aluminium, Copper, Glass).</li>
        </ul>
      </li>
      <li><strong>Poles of a Magnet:</strong> Every magnet has two distinct poles where magnetic attraction is concentrated: <strong>North Pole (N)</strong> and <strong>South Pole (S)</strong>. Magnetic poles always exist in inseparable pairs. Monopoles do not exist.</li>
      <li><strong>Fundamental Law of Magnetism:</strong>
        <ul>
          <li><em>Unlike (opposite) poles ATTRACT:</em> North attracts South (N ↔ S).</li>
          <li><em>Like (similar) poles REPEL:</em> North repels North (N ⇄ N); South repels South (S ⇄ S). <strong>Repulsion is the only sure test of magnetism!</strong></li>
        </ul>
      </li>
      <li><strong>Directive Property &amp; Magnetic Compass:</strong> A freely suspended magnet always settles along Earth's geographic North-South direction. This directive property is utilized in the magnetic compass for navigation.</li>
    </ul>
  </div>

  <!-- SVG Diagram 1: Bar Magnet Field Lines and Poles -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 580px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Bar Magnet with Concentrated Pole Forces and Magnetic Field Lines</text>
      
      <!-- Field curves top -->
      <path d="M 210,90 Q 210,35 270,35 Q 330,35 330,90" fill="none" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,3"/>
      <path d="M 190,90 Q 190,15 270,15 Q 350,15 350,90" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
      
      <!-- Field curves bottom -->
      <path d="M 210,110 Q 210,165 270,165 Q 330,165 330,110" fill="none" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,3"/>
      <path d="M 190,110 Q 190,185 270,185 Q 350,185 350,110" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>

      <!-- Bar Magnet Body -->
      <rect x="180" y="80" width="90" height="40" rx="3" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
      <text x="225" y="105" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">N</text>
      <text x="225" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b91c1c" text-anchor="middle">North Pole</text>

      <rect x="270" y="80" width="90" height="40" rx="3" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
      <text x="315" y="105" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">S</text>
      <text x="315" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">South Pole</text>

      <!-- Concentration callouts -->
      <circle cx="175" cy="100" r="14" fill="#64748b" opacity="0.3"/>
      <text x="120" y="95" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155" text-anchor="end">Maximum Filings</text>
      <text x="120" y="108" font-family="system-ui, sans-serif" font-size="9" fill="#64748b" text-anchor="end">(Strongest Force)</text>
      <line x1="125" y1="100" x2="165" y2="100" stroke="#475569" stroke-width="1.2"/>

      <circle cx="365" cy="100" r="14" fill="#64748b" opacity="0.3"/>
      <text x="420" y="95" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">Maximum Filings</text>
      <text x="420" y="108" font-family="system-ui, sans-serif" font-size="9" fill="#64748b">(Strongest Force)</text>
      <line x1="415" y1="100" x2="375" y2="100" stroke="#475569" stroke-width="1.2"/>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 4.1: Magnetic Field Distribution and Pole Concentration of a Bar Magnet</div>
  </div>

  <div class="ex-div">NCERT Exercise: Let Us Enhance Our Learning (100% Textbook Questions)</div>

  <!-- Q1 -->
  <div class="q-card" id="c6s-ch4-q1">
    <div class="q-head" onclick="toggleQ('c6s-ch4-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Fill in the blanks: <br>(i) Unlike poles of two magnets ________ each other, whereas like poles ________ each other. <br>(ii) The materials that are attracted towards a magnet are called ________. <br>(iii) The needle of a magnetic compass rests along the ________ direction. <br>(iv) A magnet always has ________ poles.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            (i) Unlike poles of two magnets <strong>attract</strong> each other, whereas like poles <strong>repel</strong> each other.<br>
            (ii) The materials that are attracted towards a magnet are called <strong>magnetic materials</strong>.<br>
            (iii) The needle of a magnetic compass rests along the <strong>north-south</strong> direction.<br>
            (iv) A magnet always has <strong>two</strong> poles (North pole and South pole).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct fill in the blank</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c6s-ch4-q2">
    <div class="q-head" onclick="toggleQ('c6s-ch4-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">State whether the following statements are True (T) or False (F). Correct the false statement(s): <br>(i) A magnet can be broken into pieces to obtain a single isolated pole. <br>(ii) Similar poles of two magnets repel each other. <br>(iii) Iron filings mostly stick in the middle of a bar magnet when brought near it. <br>(iv) A freely suspended bar magnet always aligns with the north-south direction.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) False.</strong> Correction: Magnetic monopoles do not exist. When a magnet is broken in two, each broken piece instantly develops both a North pole and a South pole.<br>
            <strong>(ii) True.</strong> Similar (like) magnetic poles (N-N or S-S) always repel each other.<br>
            <strong>(iii) False.</strong> Correction: Iron filings stick predominantly at the <em>two ends (poles)</em> of a bar magnet, where magnetic force is strongest. Very few filings cling to the middle.<br>
            <strong>(iv) True.</strong> Due to interaction with Earth's magnetic field, a freely suspended magnet always points in the geographic North-South direction.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct True/False evaluation and accurate corrections for false statements</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c6s-ch4-q3">
    <div class="q-head" onclick="toggleQ('c6s-ch4-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Column I shows different positions in which one pole of a magnet is placed near that of another. Column II indicates the resulting interaction between them for different situations. Complete the table: <br>• N placed near N <br>• N placed near S <br>• S placed near S <br>• S placed near N</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <table class="data-table">
            <thead>
              <tr>
                <th>Column I (Pole Positions)</th>
                <th>Column II (Resulting Interaction)</th>
                <th>Scientific Law</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>North pole (N) near North pole (N)</td>
                <td><strong>Repulsion (Repel)</strong></td>
                <td>Like poles repel</td>
              </tr>
              <tr>
                <td>North pole (N) near South pole (S)</td>
                <td><strong>Attraction (Attract)</strong></td>
                <td>Unlike poles attract</td>
              </tr>
              <tr>
                <td>South pole (S) near South pole (S)</td>
                <td><strong>Repulsion (Repel)</strong></td>
                <td>Like poles repel</td>
              </tr>
              <tr>
                <td>South pole (S) near North pole (N)</td>
                <td><strong>Attraction (Attract)</strong></td>
                <td>Unlike poles attract</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct interaction identified</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c6s-ch4-q4">
    <div class="q-head" onclick="toggleQ('c6s-ch4-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Atharv performed an experiment in which he took a bar magnet and rolled it over a heap of steel U-clips. What observation is he most likely to make? Explain the scientific reason behind this observation.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Atharv's Observation:</strong><br>
            A very large number of steel U-clips cling to both the <strong>ends (poles)</strong> of the bar magnet, forming thick clusters. Almost no or very few clips stick to the central region (middle) of the bar magnet.
          </div>
          <div class="step">
            <strong>2. Scientific Explanation:</strong><br>
            The magnetic attractive force of a bar magnet is not distributed uniformly throughout its length. The magnetic force lines are most concentrated and intense near the two terminal ends, termed the <strong>magnetic poles</strong> (North and South poles). The magnetic strength weakens rapidly towards the centre of the magnet.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Observation: clips crowd heavily at ends, negligible at middle</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Scientific explanation of magnetic force concentration at poles</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c6s-ch4-q5">
    <div class="q-head" onclick="toggleQ('c6s-ch4-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Reshma bought three identical metal bars from the market. Out of these bars, two were magnets and one was just a piece of iron. How will she identify which two amongst the three are magnets, without using any other material?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Scientific Principle:</strong> <em>Repulsion is the only sure test of magnetism.</em> An unmagnetized iron bar is attracted by both poles of a magnet, but two magnets will repel each other when like poles face each other.
          </div>
          <div class="step">
            <strong>Step-by-Step Identification Procedure:</strong><br>
            1. Label the three identical bars as Bar A, Bar B, and Bar C.<br>
            2. Take Bar A and bring one of its ends near both ends of Bar B, one by one.<br>
            3. Repeat this test by pairing Bar B with Bar C, and Bar A with Bar C.<br>
            4. <strong>Result Analysis:</strong>
            • Whichever pair of bars shows <strong>repulsion</strong> at one of their end orientations <strong>MUST BOTH BE MAGNETS</strong>.<br>
            • The remaining third bar, which shows only attraction towards both ends of the other two bars and never exhibits repulsion, is the <strong>plain unmagnetized iron bar</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating the core principle that repulsion is the only sure test of magnetism</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Describing pairwise testing of ends of the three bars</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Concluding that the pair exhibiting repulsion are magnets, third is iron</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c6s-ch4-q6">
    <div class="q-head" onclick="toggleQ('c6s-ch4-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">You are given a magnet which does not have its poles marked. How can you find its poles with the help of another magnet which has its poles clearly marked?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Procedure using Laws of Magnetism:</strong><br>
            1. Take the marked magnet and bring its known <strong>North pole (N)</strong> close to one end (say End 1) of the unmarked magnet.<br>
            2. <strong>Observe the interaction:</strong><br>
            • If End 1 is <strong>repelled</strong> by the marked North pole, then <strong>End 1 is definitely the North pole</strong> (since like poles repel). Consequently, the opposite end (End 2) must be the <strong>South pole</strong>.<br>
            • If End 1 is <strong>attracted</strong>, bring the marked North pole near End 2. If End 2 is repelled, then End 2 is the North pole and End 1 is the South pole.<br>
            3. Always confirm using the repulsion test, as repulsion is conclusive.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Bringing known North pole near ends of unmarked magnet</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Applying repulsion rule (like poles repel) to identify poles</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c6s-ch4-q7">
    <div class="q-head" onclick="toggleQ('c6s-ch4-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">A bar magnet has no markings to indicate its poles. How would you find out near which end its North pole is located without using another magnet?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Method of Free Suspension (Directive Property):</strong><br>
            1. Tie a piece of thin thread around the exact middle of the unmarked bar magnet so that it balances horizontally.<br>
            2. Suspend the magnet freely from a wooden stand in an area away from iron objects and air currents.<br>
            3. Rotate the magnet gently and allow it to come to rest naturally.<br>
            4. Repeat this 2 to 3 times to ensure consistency.
          </div>
          <div class="step">
            <strong>Inference:</strong><br>
            • A freely suspended magnet always aligns itself along the geographic North-South direction.<br>
            • Observe the position of sunrise (East) to identify geographic North.<br>
            • The end of the bar magnet that points towards the <strong>Geographic North</strong> is the <strong>North-seeking pole (North Pole)</strong> of the magnet.<br>
            • The opposite end pointing towards geographic South is the South Pole.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Description of free suspension setup using thread and stand</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Stating alignment along geographic North-South direction</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Identifying end pointing to Geographic North as North Pole</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c6s-ch4-q8">
    <div class="q-head" onclick="toggleQ('c6s-ch4-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">If the Earth is itself a giant magnet, can you guess the poles of Earth's magnet by looking at the direction of a magnetic compass? Explain the scientific rationale.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Scientific Deduction:</strong><br>
            1. The North-seeking pole (North pole) of a magnetic compass needle points towards the Earth's <strong>geographic North pole</strong>.<br>
            2. We know from the fundamental law of magnetism that <strong>unlike poles attract</strong>.<br>
            3. Therefore, for the North pole of the compass needle to be pulled towards geographic North, the Earth must have its <strong>magnetic South pole</strong> situated near the geographic North Pole.<br>
            4. Similarly, Earth's <strong>magnetic North pole</strong> lies near the geographic South Pole.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating that compass North pole is attracted towards geographic North</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Deducing that Earth's magnetic South pole lies near geographic North</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c6s-ch4-q9">
    <div class="q-head" onclick="toggleQ('c6s-ch4-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">While a mechanic was repairing an electronic gadget using a screwdriver, the tiny steel screws kept falling down into hard-to-reach corners. Suggest a practical solution to solve the mechanic's problem on the basis of what you have learnt in this chapter.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Practical Scientific Solution:</strong><br>
            The mechanic can easily <strong>magnetize the tip of the steel screwdriver</strong> using the single-touch stroke method:
            1. Take a strong permanent bar magnet and stroke the metal shaft and tip of the screwdriver from handle to tip 30 to 40 times in the same direction, lifting the magnet after each stroke.<br>
            2. Alternatively, simply keep a strong magnet attached to the metal shaft of the screwdriver.<br>
            3. The magnetized steel tip will attract and hold the tiny steel screws firmly, preventing them from falling during precision repairs.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Suggesting magnetizing the screwdriver tip using stroke method or holding a magnet</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining that magnetized tip attracts and holds steel screws safely</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c6s-ch4-q10">
    <div class="q-head" onclick="toggleQ('c6s-ch4-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">Two ring magnets X and Y are placed on a vertical wooden stand. It is observed that magnet X floats in air and does not move down to touch magnet Y. What could be the possible reason? Suggest a way to bring magnet X into contact with magnet Y, without pushing either magnet.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Reason for Floating:</strong><br>
            Magnet X floats above magnet Y because their <strong>like poles face each other</strong> (either North facing North or South facing South). Since like magnetic poles repel, the upward repulsive force balances the downward gravitational pull on magnet X, causing it to levitate in mid-air without touching Y.
          </div>
          <div class="step">
            <strong>2. Way to Bring Them in Contact (Without Pushing):</strong><br>
            Remove ring magnet X from the vertical rod, <strong>flip it upside down</strong> (invert its faces), and slide it back onto the rod.<br>
            Now, the <strong>opposite (unlike) poles</strong> of magnets X and Y will face each other. Since unlike poles attract, magnet X will naturally be pulled downward by magnetic attraction and sit flush on magnet Y.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Explaining repulsion between like facing poles causing levitation</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Suggesting inverting/flipping magnet X so unlike poles attract</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q11 -->
  <div class="q-card" id="c6s-ch4-q11">
    <div class="q-head" onclick="toggleQ('c6s-ch4-q11')">
      <div class="q-num">Q11</div>
      <div class="q-text">Three bar magnets are placed touching end-to-end on a table in a row: Magnet A (ends 1 and 2), Magnet B (ends 3 and 4), and Magnet C (ends 5 and 6). If they all attract each other and stay together, and end 5 is known to be a North pole (N), deduce the polarity of ends 1, 2, 3, 4, and 6.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Given:</strong><br>
            • Three bar magnets touch end-to-end: [1—Magnet A—2] [3—Magnet B—4] [5—Magnet C—6].<br>
            • All adjacent touching ends attract each other, which means touching ends are <strong>unlike poles</strong>.<br>
            • <strong>End 5 is North (N).</strong>
          </div>
          <div class="step">
            <strong>Deduction Step-by-Step:</strong><br>
            1. For Magnet C: If end 5 is <strong>North (N)</strong>, the other end of the same magnet, <strong>End 6, must be South (S)</strong>.<br>
            2. At the junction between Magnet B and Magnet C: End 4 touches End 5 (N) and attracts it. Therefore, <strong>End 4 must be South (S)</strong>.<br>
            3. For Magnet B: If end 4 is South (S), the opposite end of the same magnet, <strong>End 3, must be North (N)</strong>.<br>
            4. At the junction between Magnet A and Magnet B: End 2 touches End 3 (N) and attracts it. Therefore, <strong>End 2 must be South (S)</strong>.<br>
            5. For Magnet A: If end 2 is South (S), the opposite end, <strong>End 1, must be North (N)</strong>.<br>
            <br>
            <strong>Summary of Polarities:</strong><br>
            • <strong>End 1 = North (N)</strong><br>
            • <strong>End 2 = South (S)</strong><br>
            • <strong>End 3 = North (N)</strong><br>
            • <strong>End 4 = South (S)</strong><br>
            • <strong>End 5 = North (N) [Given]</strong><br>
            • <strong>End 6 = South (S)</strong>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Deducing End 6 = South from opposite pole of Magnet C</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Deducing End 4 = South and End 3 = North for Magnet B</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Deducing End 2 = South and End 1 = North for Magnet A</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q12 -->
  <div class="q-card" id="c6s-ch4-q12">
    <div class="q-head" onclick="toggleQ('c6s-ch4-q12')">
      <div class="q-num">Q12</div>
      <div class="q-text">Using 3 to 4 different magnets of various sizes and shapes, try to lift steel pins or U-clips and count how many each magnet picks up. Why do different magnets pick up different numbers of pins?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Observation &amp; Reasoning:</strong><br>
            Different magnets attract and lift varying numbers of steel pins because <strong>their magnetic strengths are not identical</strong>. The magnetic strength of a magnet depends on several scientific factors:
            1. <strong>Material Composition:</strong> Strong neodymium (rare-earth) magnets have much greater magnetic flux density than ordinary ferrite or ceramic magnets.<br>
            2. <strong>Manufacturing Magnetization:</strong> The strength of the external magnetic field applied to magnetize the material during manufacturing.<br>
            3. <strong>Size and Shape:</strong> A larger or thicker magnet of the same material contains more aligned magnetic domains and can lift more pins.<br>
            4. <strong>Age &amp; Storage Conditions:</strong> Magnets that were dropped, heated, or stored without keepers lose partial magnetism over time.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating that magnets possess different magnetic field strengths</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Listing at least two valid factors (material, size, domain alignment, aging)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Case Study -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Modern Engineering Case Study)</div>
    <div class="q-text"><strong>Case Study: Maglev Trains &amp; Demagnetization Hazards:</strong><br>
      High-speed Magnetic Levitation (Maglev) trains in countries like Japan and China travel at over 500 km/h without touching railway tracks. Electromagnets on the train undercarriage and the track have identical magnetic poles facing each other.<br>
      (a) Which fundamental principle of magnetism allows the Maglev train to float above the track?<br>
      (b) What are two major advantages of a floating train over conventional wheeled trains?<br>
      (c) Why are laboratory magnets kept with soft iron keepers across their poles when stored for long periods?
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Working Principle:</strong><br>
        Maglev trains operate on the <strong>Principle of Magnetic Repulsion</strong> (Like poles repel each other). Because similar poles on the track and train face each other, the powerful upward repulsive force lifts the entire weight of the train 10 to 15 mm into the air.</p>

        <p><strong>(b) Advantages over Wheeled Trains:</strong><br>
        1. <strong>Zero Mechanical Friction:</strong> Without wheel-rail contact, there is no physical friction, allowing ultra-high speeds with significantly less energy consumption.<br>
        2. <strong>Whisper-Quiet Operation &amp; Low Maintenance:</strong> There is almost no noise pollution or mechanical wear and tear of tracks.</p>

        <p><strong>(c) Function of Magnetic Keepers:</strong><br>
        When stored freely, isolated magnetic poles demagnetize themselves over time due to interaction with Earth's magnetic field and thermal vibration. Soft iron keepers provide a closed magnetic loop (path for magnetic field lines), preserving magnetic strength indefinitely.</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch2.html'), ch2Html, 'utf8');
fs.writeFileSync(path.join(chDir, 'ch3.html'), ch3Html, 'utf8');
fs.writeFileSync(path.join(chDir, 'ch4.html'), ch4Html, 'utf8');
console.log('Part 1 complete: Ch 2 (6 questions), Ch 3 (6 questions), Ch 4 (12 questions) successfully updated!');
