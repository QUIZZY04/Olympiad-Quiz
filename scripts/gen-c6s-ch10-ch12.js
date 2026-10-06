const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c6s');

const ch10Html = fs.readFileSync(path.join(chDir, 'ch10.html'), 'utf8');

// ==========================================
// CHAPTER 11: Nature's Treasures
// ==========================================
const ch11Html = `<section class="chapter-section" id="ch11">
  <div class="chapter-header">
    <div class="ch-badge">11</div>
    <div class="chapter-header-info">
      <h2>Chapter 11: Nature's Treasures</h2>
      <p>NCERT Curiosity (Class 6) — Natural Resources, Renewable vs Non-Renewable, Forests, Fossil Fuels, Water &amp; Soil Conservation, The 3Rs | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Environmental &amp; Resource Concepts</div>
    <ul class="concept-list">
      <li><strong>Natural Resources:</strong> Materials, energy, and ecosystems provided freely by nature that sustain life and human civilization (Air, Water, Soil, Sunlight, Forests, Minerals, Fossil Fuels).</li>
      <li><strong>Classification by Exhaustibility:</strong>
        <ul>
          <li><em>Renewable Resources:</em> Inexhaustible or naturally replenished resources within human timescales (Sunlight, Wind, Biomass, Flowing water, Forests when managed sustainably).</li>
          <li><em>Non-Renewable Resources:</em> Finite resources formed over millions of geological years that cannot be replenished once exhausted (Fossil fuels: Coal, Petroleum, Natural gas; Metallic minerals: Iron, Copper).</li>
        </ul>
      </li>
      <li><strong>Ecological Importance of Forests:</strong> Lungs of the planet (oxygen producers &amp; carbon sinks), soil binders against erosion, water catchments, and biodiversity habitats.</li>
      <li><strong>Conservation Framework (The 3Rs):</strong>
        <ul>
          <li><em>Reduce:</em> Minimize consumption and avoid waste.</li>
          <li><em>Reuse:</em> Use objects repeatedly rather than discarding after single use.</li>
          <li><em>Recycle:</em> Reprocess discarded paper, glass, plastic, and metals into new products.</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="ex-div">NCERT Exercise: Let Us Enhance Our Learning (100% Textbook Questions)</div>

  <!-- Q1 -->
  <div class="q-card" id="c6s-ch11-q1">
    <div class="q-head" onclick="toggleQ('c6s-ch11-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Unscramble the jumbled names of natural resources: (i) A T W R E, (ii) N D I W, (iii) R E F O S T, and (iv) O C R K. Classify each unscrambled resource as Renewable or Non-renewable with reasons.</div>
      <div class="q-marks">[2.5 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <table class="data-table">
            <thead>
              <tr>
                <th>Jumbled Name</th>
                <th>Unscrambled Resource</th>
                <th>Resource Classification</th>
                <th>Scientific Justification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A T W R E</td>
                <td><strong>WATER</strong></td>
                <td><strong>Renewable Resource</strong></td>
                <td>Replenished continuously across Earth via the natural hydrological water cycle.</td>
              </tr>
              <tr>
                <td>N D I W</td>
                <td><strong>WIND</strong></td>
                <td><strong>Renewable Resource</strong></td>
                <td>Driven by inexhaustible solar heating of atmospheric air masses; never runs out.</td>
              </tr>
              <tr>
                <td>R E F O S T</td>
                <td><strong>FOREST</strong></td>
                <td><strong>Renewable Resource</strong></td>
                <td>Trees regenerate naturally from seeds and can be regrown sustainably through afforestation.</td>
              </tr>
              <tr>
                <td>O C R K</td>
                <td><strong>ROCK</strong></td>
                <td><strong>Non-Renewable Resource</strong></td>
                <td>Rocks and building stones take millions of years of geological tectonic processes to form.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct unscrambling and renewable/non-renewable classification</span><span class="marking-marks">0.5 Mark each + 0.5 Mark for justifications (Total 2.5 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c6s-ch11-q2">
    <div class="q-head" onclick="toggleQ('c6s-ch11-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">State whether the following statements are True (T) or False (F). If False, correct them scientifically: <br>(i) Nature has all the resources needed to meet human needs, but not human greed. <br>(ii) Machines are a resource found directly in nature. <br>(iii) Natural gas is a non-renewable fossil fuel resource. <br>(iv) Air is an exhaustible non-renewable resource.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) True.</strong> Mahatma Gandhi famously stated that nature provides enough to satisfy everyone's essential needs, but excessive over-exploitation and greed deplete resources.<br>
            <strong>(ii) False.</strong> Correction: Machines are <strong>human-made (artificial) resources</strong> constructed by humans using metals and natural materials; they are not found naturally.<br>
            <strong>(iii) True.</strong> Natural gas is a fossil fuel formed from buried prehistoric organisms over millions of years and cannot be replenished within human timescales.<br>
            <strong>(iv) False.</strong> Correction: Air is an <strong>inexhaustible renewable resource</strong> continuously recycled through photosynthesis and respiration.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct evaluation and rectification</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c6s-ch11-q3">
    <div class="q-head" onclick="toggleQ('c6s-ch11-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Fill in the blanks using the most appropriate scientific terms: <br>(i) A liquid fossil fuel commonly used in two-wheelers like scooters and motorcycles is ________. <br>(ii) An abundant natural source of clean, renewable energy that powers the water cycle is ________.</div>
      <div class="q-marks">[1 Mark]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            (i) A liquid fossil fuel commonly used in two-wheelers like scooters and motorcycles is <strong>petrol (gasoline)</strong>.<br>
            (ii) An abundant natural source of clean, renewable energy that powers the water cycle is <strong>solar energy (the Sun)</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct fill in the blank</span><span class="marking-marks">0.5 Mark each (Total 1 Mark)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c6s-ch11-q4">
    <div class="q-head" onclick="toggleQ('c6s-ch11-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Classify the following as renewable or non-renewable resources: Coal, Natural gas, Forests, and Minerals (such as iron ore and copper).</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Renewable Resources:</strong><br>
            • <strong>Forests:</strong> Living plant ecosystems that naturally reproduce, regrow, and can be sustainably harvested and replenished through afforestation.
          </div>
          <div class="step">
            <strong>2. Non-Renewable Resources:</strong><br>
            • <strong>Coal:</strong> Fossil fuel formed from carbonized ancient plant remains over 300 million years; finite supply.<br>
            • <strong>Natural Gas:</strong> Gaseous fossil fuel trapped in deep subterranean rock strata; finite and non-replenishable.<br>
            • <strong>Minerals (Iron ore, Copper):</strong> Inanimate mineral ores formed by geological cooling of magma; non-replenishable once mined out.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Classifying Forests as Renewable</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Classifying Coal, Natural gas, and Minerals as Non-Renewable with reasons</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c6s-ch11-q5">
    <div class="q-head" onclick="toggleQ('c6s-ch11-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Why do we say that petroleum is a non-renewable resource? Explain its geological origin and why rapid consumption poses an energy crisis.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Geological Origin of Petroleum:</strong><br>
            Petroleum was formed from microscopic marine organisms (plankton, algae) that died millions of years ago and settled on ocean floors. Over hundreds of millions of years, they were buried under immense layers of silt and sand. Under intense geological heat, pressure, and absence of air, their biochemical remains were converted into crude petroleum oil.
          </div>
          <div class="step">
            <strong>2. Why it is Non-Renewable:</strong><br>
            • The rate of petroleum formation is extraordinarily slow (millions of years).<br>
            • Human society is extracting and burning these reserves at millions of barrels per day.<br>
            • Because its rate of consumption is millions of times faster than its geological formation, petroleum reserves on Earth are strictly limited and will inevitably be exhausted in a few decades.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Explaining millions of years geological formation from ancient marine biomass</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Contrasting ultra-fast consumption rate vs non-replenishable geological timeline</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c6s-ch11-q6">
    <div class="q-head" onclick="toggleQ('c6s-ch11-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">"It is difficult to truly regrow a forest." Justify this statement scientifically. How does a natural virgin forest differ from a man-made tree plantation?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Scientific Justification:</strong><br>
            A forest is not merely a collection of planted trees; it is a highly evolved, complex, self-sustaining <strong>climax ecosystem</strong> that took thousands of years to establish:
            1. <strong>Soil Degradation &amp; Humus Loss:</strong> When a forest is clear-cut, the delicate fertile topsoil rich in mycorrhizal fungi, earthworms, and organic humus is quickly eroded by wind and rain, making it harsh for new saplings.<br>
            2. <strong>Intricate Web of Biodiversity:</strong> Natural virgin forests host multi-tiered canopies (mosses, herbs, shrubs, understory, and emergent trees) supporting diverse insects, birds, and herbivores. A man-made plantation usually contains only single-species trees (monoculture like eucalyptus) and lacks true biodiversity.<br>
            3. <strong>Microclimate &amp; Hydrology:</strong> Natural forests maintain local humidity, cloud condensation, and groundwater aquifers that cannot be replicated quickly by planting saplings.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Loss of complex soil biology and humus layer</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Monoculture plantation vs multi-tiered diverse ecosystem distinction</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Disruption of microclimate, hydrology, and centuries-long ecological timeline</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c6s-ch11-q7">
    <div class="q-head" onclick="toggleQ('c6s-ch11-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Make an inventory of five natural resources you use directly or indirectly in your daily life. State one practical action for each resource that you and your family can take to conserve it.</div>
      <div class="q-marks">[2.5 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <table class="data-table">
            <thead>
              <tr>
                <th>Natural Resource</th>
                <th>Daily Life Application</th>
                <th>Practical Conservation Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Fresh Water</strong></td>
                <td>Drinking, cooking, bathing, washing</td>
                <td>Turn off running taps while brushing; install aerators; harvest rainwater.</td>
              </tr>
              <tr>
                <td><strong>2. Petroleum (Fossil Fuel)</strong></td>
                <td>Fuel for family scooter/car; LPG for cooking</td>
                <td>Use public transport, bicycles, or carpool; switch off vehicle engine at red lights.</td>
              </tr>
              <tr>
                <td><strong>3. Forest Wood / Paper</strong></td>
                <td>Notebooks, pencils, furniture, packaging</td>
                <td>Use both sides of notebook sheets; recycle old newspapers; avoid paper cups.</td>
              </tr>
              <tr>
                <td><strong>4. Electricity (from Coal)</strong></td>
                <td>Lighting, fans, computer, refrigerator</td>
                <td>Switch off fans and lights when leaving rooms; adopt LED bulbs and solar rooftop panels.</td>
              </tr>
              <tr>
                <td><strong>5. Soil</strong></td>
                <td>Growing agricultural food grains and vegetables</td>
                <td>Compost kitchen organic peels to enrich soil; avoid littering non-biodegradable plastics on ground.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Listing 5 resources with daily use and actionable conservation measure</span><span class="marking-marks">0.5 Mark each (Total 2.5 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c6s-ch11-q8">
    <div class="q-head" onclick="toggleQ('c6s-ch11-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">Propose a practical, 3-point conservation action plan that students can implement in their school to reduce wastage of natural resources and adopt the 3Rs.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>School Conservation Action Plan (Based on the 3Rs):</strong><br>
            1. <strong>Water Conservation (Catch the Rain &amp; Fix Leaks):</strong> Establish a student "Water Brigade" to inspect taps across campus for leaks. Place collection buckets under RO water purifier drain pipes to reuse wastewater for mopping and watering school gardens.<br>
            2. <strong>Paper &amp; Plastic Reduction (Zero-Waste Classroom):</strong> Strictly ban single-use plastic covers. Establish a two-bin waste segregation system in every classroom (Blue for clean dry paper, Green for food scraps). Compost canteen vegetable peels in an on-campus pit.<br>
            3. <strong>Energy Conservation (Solar &amp; Switch-Off Protocol):</strong> Nominate classroom Energy Monitors responsible for turning off fans and LED lights whenever students leave for sports or library periods. Advocate for rooftop solar panels to power school computer labs.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Three actionable, school-focused initiatives based on 3Rs and resource conservation</span><span class="marking-marks">1 Mark each (Total 3 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Case Study -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Ecological Sustainability Case Study)</div>
    <div class="q-text"><strong>Case Study: Solar Micro-Grids in Remote Villages:</strong><br>
      A remote hilly village in Ladakh was previously disconnected from the electrical power grid, forcing villagers to burn kerosene lamps and dried wood for light and heat, emitting smoke.<br>
      (a) Why is kerosene considered an unsustainable and health-hazardous fuel?<br>
      (b) What type of natural resource is solar radiation? State two major ecological benefits of installing rooftop solar panels.<br>
      (c) Explain how replacing wood burning with solar energy protects local mountain hillsides from soil erosion.
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Kerosene Hazards:</strong><br>
        Kerosene is a non-renewable petroleum product. Burning it indoors releases harmful soot, particulate matter, and toxic carbon monoxide, causing severe respiratory and eye diseases.</p>

        <p><strong>(b) Solar Energy Benefits:</strong><br>
        • Solar radiation is an <strong>inexhaustible renewable resource</strong>.<br>
        • Benefits: (1) Zero greenhouse gas emissions during operation (mitigates climate change), (2) Free fuel from the sun, eliminating continuous recurring fuel costs.</p>

        <p><strong>(c) Preventing Soil Erosion:</strong><br>
        When villagers stop cutting down mountain trees and shrubs for firewood, the root networks remain intact in the soil. These roots bind the steep topsoil firmly, preventing rain and snowmelt from washing away fertile soil in landslides.</p>
      </div>
    </div>
  </div>
</section>
`;

// ==========================================
// CHAPTER 12: Beyond Earth
// ==========================================
const ch12Html = `<section class="chapter-section" id="ch12">
  <div class="chapter-header">
    <div class="ch-badge">12</div>
    <div class="chapter-header-info">
      <h2>Chapter 12: Beyond Earth</h2>
      <p>NCERT Curiosity (Class 6) — Celestial Bodies, Moon Phases, Solar System, Planets, Stars &amp; Constellations | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Astronomical Concepts &amp; Celestial Mechanics</div>
    <ul class="concept-list">
      <li><strong>Celestial Bodies:</strong> Natural objects outside Earth's atmosphere: Stars, Planets, Satellites, Asteroids, Comets, and Meteoroids.</li>
      <li><strong>Stars vs Planets:</strong>
        <ul>
          <li><em>Stars:</em> Self-luminous celestial balls of burning hot gases producing their own light and heat by nuclear fusion (e.g., Sun, Sirius, Polaris). Stars appear to twinkle due to atmospheric refraction.</li>
          <li><em>Planets:</em> Non-luminous celestial bodies orbiting a star in fixed elliptical orbits; reflect sunlight (e.g., Earth, Mars, Jupiter). Do not twinkle.</li>
        </ul>
      </li>
      <li><strong>The Solar System:</strong> The Sun (central star) + 8 Planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune) + Dwarf planets (Pluto) + Moons + Asteroids and Comets.</li>
      <li><strong>The Moon (Earth's Natural Satellite):</strong>
        <ul>
          <li>Takes ~27.3 days to revolve around Earth (and 29.5 days between successive Full Moons).</li>
          <li>Phases of the Moon (New Moon, Waxing Crescent, First Quarter, Waxing Gibbous, Full Moon, Waning Gibbous, Third Quarter, Waning Crescent) occur because we see varying lit portions of the Moon illuminated by the Sun.</li>
        </ul>
      </li>
      <li><strong>Constellations &amp; The Pole Star:</strong> Identifiable patterns of stars (Ursa Major / Saptarshi, Orion). The <strong>Pole Star (Polaris)</strong> lies directly above Earth's North rotational axis and appears stationary in the northern sky.</li>
    </ul>
  </div>

  <div class="ex-div">NCERT Exercise: Let Us Enhance Our Learning (100% Textbook Questions)</div>

  <!-- Q1 -->
  <div class="q-card" id="c6s-ch12-q1">
    <div class="q-head" onclick="toggleQ('c6s-ch12-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Match the celestial items in Column I with their corresponding descriptions in Column II: <br>• Satellite of Earth <br>• Red planet <br>• Constellation resembling a hunter <br>• Planet commonly called the morning or evening star</div>
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
                <th>Celestial Item (Column I)</th>
                <th>Matching Identity (Column II)</th>
                <th>Astronomical Fact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Satellite of Earth</td>
                <td><strong>The Moon</strong></td>
                <td>Only natural satellite orbiting Earth at an average distance of ~384,400 km.</td>
              </tr>
              <tr>
                <td>Red planet</td>
                <td><strong>Mars</strong></td>
                <td>Appears reddish-orange due to abundant iron oxide (rust) on its surface.</td>
              </tr>
              <tr>
                <td>Constellation resembling a hunter</td>
                <td><strong>Orion (Mriga)</strong></td>
                <td>Prominent winter constellation with three bright stars forming a hunter's belt.</td>
              </tr>
              <tr>
                <td>Morning / Evening star</td>
                <td><strong>Venus (Shukra)</strong></td>
                <td>Brightest planet in the sky; visible in western sky after sunset or eastern sky before dawn.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct matching with astronomical explanation</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c6s-ch12-q2">
    <div class="q-head" onclick="toggleQ('c6s-ch12-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Solve the planetary alphabet riddle: <br>• My first alphabet is in MAN but not in CAN. <br>• My second alphabet is in ACE and also in FAN. <br>• My third alphabet is in RAT and not in CAT. <br>• My fourth alphabet is in SUN but not in FUN. <br>I am a planet that revolves around the Sun. Who am I?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Deduction Step-by-Step:</strong><br>
            • First letter is in 'MAN' but not in 'CAN' → <strong>M</strong><br>
            • Second letter is in 'ACE' and also in 'FAN' → <strong>A</strong><br>
            • Third letter is in 'RAT' but not in 'CAT' → <strong>R</strong><br>
            • Fourth letter is in 'SUN' but not in 'FUN' → <strong>S</strong><br>
            <br>
            Combining the letters: <strong>M - A - R - S = MARS</strong>.<br>
            <strong>Answer: The planet is MARS (The fourth planet from the Sun).</strong>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Letter-by-letter derivation showing logic</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Final correct planet name: MARS</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c6s-ch12-q3">
    <div class="q-head" onclick="toggleQ('c6s-ch12-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Explain why the shape of the Moon appears to change continuously throughout a month (Phases of the Moon). Does the Moon actually change its shape? What is the duration of one complete lunar phase cycle?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Does the Moon actually change its shape?</strong><br>
            <strong>No, absolutely not.</strong> The Moon is a permanent spherical rocky body whose actual physical shape remains constant.
          </div>
          <div class="step">
            <strong>2. Why Phases Occur:</strong><br>
            • The Moon does not emit its own light; it reflects sunlight falling on its surface.<br>
            • At any given time, exactly one half (50%) of the Moon's spherical surface is illuminated by the Sun, while the opposite half is in dark shadow.<br>
            • As the Moon revolves around Earth in its orbit, our angle of view from Earth relative to the sunlit side changes continuously.<br>
            • We only see that portion of the illuminated half which faces directly towards Earth. This changing visible illuminated fraction gives rise to the <strong>phases of the Moon</strong> (from New Moon, Crescent, Half Moon, Gibbous, to Full Moon and back).
          </div>
          <div class="step">
            <strong>3. Duration:</strong><br>
            The time taken from one New Moon (Amavasya) to the next New Moon is approximately <strong>29.5 days</strong> (a synodic lunar month).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Explaining that physical shape is constant sphere</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Scientific explanation of changing illuminated angle viewed from Earth</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Stating lunar cycle duration (~29.5 days)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c6s-ch12-q4">
    <div class="q-head" onclick="toggleQ('c6s-ch12-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Which of the following is NOT officially classified as a major planet of our Solar System? <br>(i) Jupiter <br>(ii) Pluto <br>(iii) Neptune <br>(iv) Saturn</div>
      <div class="q-marks">[1 Mark]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Correct Option: (ii) Pluto</strong><br>
            <strong>Scientific Reason:</strong> In 2006, the International Astronomical Union (IAU) reclassified Pluto as a <strong>Dwarf Planet</strong> because it has not cleared the neighborhood around its orbit in the Kuiper Belt. There are currently only 8 recognized major planets in our Solar System.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Selecting option (ii) Pluto with IAU dwarf planet reclassification context</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c6s-ch12-q5">
    <div class="q-head" onclick="toggleQ('c6s-ch12-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Which is the brighter star as seen from Earth: the Pole Star (Polaris) or Sirius? Why does the Pole Star hold such immense navigational importance despite not being the brightest star?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Brighter Star:</strong><br>
            <strong>Sirius (the Dog Star)</strong> is by far the brightest star in the entire night sky. The Pole Star (Polaris) is only of medium brightness (ranked around the 48th brightest star).
          </div>
          <div class="step">
            <strong>2. Navigational Importance of the Pole Star:</strong><br>
            While all other stars appear to move across the night sky from East to West due to Earth's rotation, the Pole Star is situated directly along the imaginary northern extension of Earth's rotational axis.<br>
            Consequently, <strong>the Pole Star appears completely stationary in the sky</strong> throughout the night, pointing directly towards true geographic North. For millennia, sailors and desert travelers used it as an infallible compass guide to find true North.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Identifying Sirius as the brighter star</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining Pole Star's stationary position above North rotational axis for navigation</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c6s-ch12-q6">
    <div class="q-head" onclick="toggleQ('c6s-ch12-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">List the correct sequential order of all eight planets in the Solar System in increasing order of their distance from the Sun. Differentiate between inner terrestrial planets and outer gas giants.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Sequential Order from the Sun:</strong><br>
            <strong>1. Mercury → 2. Venus → 3. Earth → 4. Mars → 5. Jupiter → 6. Saturn → 7. Uranus → 8. Neptune.</strong><br>
            <em>Mnemonic:</em> "<strong>M</strong>y <strong>V</strong>ery <strong>E</strong>ducated <strong>M</strong>other <strong>J</strong>ust <strong>S</strong>erved <strong>U</strong>s <strong>N</strong>oodles."
          </div>
          <div class="step">
            <strong>Classification into Inner and Outer Planets:</strong><br>
            • <strong>Inner (Terrestrial) Planets [Mercury, Venus, Earth, Mars]:</strong> Closer to the Sun, made of dense rocky and metallic materials, have solid surfaces, few or no moons, and have no ring systems.<br>
            • <strong>Outer (Gas Giant / Ice Giant) Planets [Jupiter, Saturn, Uranus, Neptune]:</strong> Situated beyond the asteroid belt, massive in size, composed predominantly of hydrogen, helium, and frozen gases (methane/ammonia), have deep gaseous atmospheres, many moons, and ring systems.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Listing all 8 planets in exact order of distance from Sun</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Contrasting Inner terrestrial vs Outer gas giant planets</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c6s-ch12-q7">
    <div class="q-head" onclick="toggleQ('c6s-ch12-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Explain how you can locate the Pole Star in the night sky using the constellation Ursa Major (Saptarshi / Big Dipper). Draw or describe the pointer stars method.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Method to Locate the Pole Star (Polaris) using Ursa Major:</strong><br>
            1. Look towards the northern part of the night sky during summer nights and locate the prominent group of seven bright stars called <strong>Ursa Major (Saptarshi or the Great Bear)</strong>.<br>
            2. The constellation resembles a large ladle, saucepan, or question mark, with three stars forming the handle and four stars forming the bowl (quadrilateral cup).<br>
            3. Look at the two bright stars located at the outer front rim of the cup (away from the handle). These two stars are called the <strong>Pointer Stars (Merak and Dubhe)</strong>.<br>
            4. Imagine drawing a straight line passing through these two pointer stars from bottom to top.<br>
            5. Extend this imaginary line forward towards the north by about 5 times the distance between the two pointer stars.<br>
            6. This line leads directly to a medium-bright star standing isolated in that region of the sky. This star is the <strong>Pole Star (Dhruva Tara)</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Identifying Ursa Major / Saptarshi shape (ladle/cup of 7 stars)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Identifying the two Pointer Stars at front of bowl</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Extending line ~5 times to locate stationary Pole Star (Polaris)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c6s-ch12-q8">
    <div class="q-head" onclick="toggleQ('c6s-ch12-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">Describe the surface features of the Moon. Why do footprints left on the Moon by Apollo astronauts remain unchanged even after decades?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Surface Features of the Moon:</strong><br>
            • The surface of the Moon is barren, dusty, and rugged.<br>
            • It is covered with numerous bowl-shaped depressions called <strong>craters</strong>, formed by collisions with meteoroids over billions of years.<br>
            • It has large dark flat basaltic lava plains called <em>maria</em> (seas) and steep rugged highlands/mountains.<br>
            • The Moon has <strong>no atmosphere (no air) and no liquid water</strong>.
          </div>
          <div class="step">
            <strong>2. Why Footprints Remain Unchanged:</strong><br>
            On Earth, footprints are quickly erased by blowing wind, rainfall, flowing water, and human activity. Because the Moon has <strong>zero atmosphere</strong>, there is no wind to blow the dust and no rain to wash it away. In the complete absence of weather and erosion, footprints and rover tracks remain permanently preserved in lunar regolith for millions of years.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Description of craters, dust, mountains, and absence of air/water</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining lack of atmosphere means no wind or rain erosion to erase prints</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c6s-ch12-q9">
    <div class="q-head" onclick="toggleQ('c6s-ch12-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">Why are large celestial bodies like the Sun, the Earth, the Moon, and other planets spherical in shape, while small space rocks (asteroids) have irregular, potato-like shapes?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Scientific Explanation: Role of Self-Gravity:</strong><br>
            1. <strong>Large Celestial Bodies (Planets and Stars):</strong> Objects with enormous mass possess immensely strong self-gravitational forces. Gravity pulls all matter equally from all sides towards the common center of mass. Over time, this uniform inward pull smooths out huge protrusions and forces the molten matter into hydrostatic equilibrium, which is geometrically a <strong>sphere</strong>.<br>
            2. <strong>Small Asteroids:</strong> Tiny space rocks have very little mass and therefore negligible self-gravity. Their weak gravitational pull is insufficient to overcome the mechanical rigidity of solid rock, allowing them to remain in irregular, jagged, potato-like shapes.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Explaining intense self-gravity pulling equally towards center forming a sphere</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining small asteroids lack sufficient mass/gravity to reshape rock</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c6s-ch12-q10">
    <div class="q-head" onclick="toggleQ('c6s-ch12-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">When observing the night sky over several hours, stars appear to move slowly across the sky from East to West, but the Pole Star does not move. <br>(a) What causes the apparent East to West movement of stars? <br>(b) Why does the Pole Star appear stationary?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Cause of Apparent East to West Motion:</strong><br>
            The stars do not actually orbit Earth every night. This apparent motion is caused by the <strong>Earth's axial rotation from West to East</strong>. Just as trees outside a moving train window appear to rush backwards in the opposite direction, the rotating Earth makes distant stationary stars appear to sweep across the sky from East to West.
          </div>
          <div class="step">
            <strong>(b) Reason Why the Pole Star Appears Stationary:</strong><br>
            The Pole Star (Polaris) happens to be aligned almost perfectly with the imaginary axis of Earth's rotation directly above the North Pole. When a spinning top rotates, points located exactly along its central axis of rotation remain motionless while outer points spin around. Similarly, the Pole Star lies on Earth's rotational axis, making it appear fixed and unmoving in the northern sky.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Explaining Earth's West-to-East axial rotation causes apparent East-to-West star motion</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining Pole Star lies directly on Earth's rotational axis</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Case Study -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Space Exploration Case Study)</div>
    <div class="q-text"><strong>Case Study: India's Chandrayaan-3 Lunar Landing:</strong><br>
      On 23 August 2023, ISRO made history when the Chandrayaan-3 Vikram lander made a successful soft landing near the Moon's South Pole, deploying the Pragyan rover.<br>
      (a) Why did ISRO specifically choose the lunar South Pole region for scientific exploration?<br>
      (b) Can an astronaut hear the roaring engine of a rocket landing on the Moon from 50 metres away? Explain.<br>
      (c) Why do astronauts require pressurized spacesuits with oxygen supply when walking on the Moon?
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Strategic Importance of Lunar South Pole:</strong><br>
        Deep craters at the lunar south pole lie in permanent shadow and never receive sunlight. Scientific data suggests these cold traps harbor vast deposits of <strong>frozen water ice</strong>, which can provide drinking water and be split into hydrogen and oxygen for rocket fuel in future deep-space missions.</p>

        <p><strong>(b) Hearing Sound on the Moon:</strong><br>
        <strong>No, they cannot hear it.</strong> Sound is a mechanical longitudinal wave that requires a material medium (air, water, or solid) to propagate. Because the Moon has a total vacuum with no atmosphere, sound waves cannot travel through space.</p>

        <p><strong>(c) Necessity of Pressurized Spacesuits:</strong><br>
        • Provides vital <strong>breathing oxygen</strong>.<br>
        • Maintains <strong>atmospheric pressure</strong> on the human body to prevent bodily fluids from boiling in the vacuum.<br>
        • Provides <strong>thermal insulation</strong> against extreme temperature swings ranging from +120 °C in lunar day to -130 °C in lunar night.</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch11.html'), ch11Html, 'utf8');
fs.writeFileSync(path.join(chDir, 'ch12.html'), ch12Html, 'utf8');
console.log('Chapters 11 (8 questions) and 12 (10 questions) updated with 100% NCERT Curiosity questions!');
