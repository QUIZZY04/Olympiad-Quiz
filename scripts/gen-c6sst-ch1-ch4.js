const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c6sst');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// ============================================================================
// CHAPTER 1: LOCATING PLACES ON THE EARTH
// ============================================================================
const ch1Html = `<section class="chapter-section" id="ch1">
  <div class="chapter-header">
    <div class="ch-badge">1</div>
    <div class="chapter-header-info">
      <h2>Chapter 1: Locating Places on the Earth</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — Latitudes, Longitudes, Hemispheres, Earth Grid, Heat Zones & Standard Time (IST) | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Geographic Concepts &amp; Principles</div>
    <ul class="concept-list">
      <li><strong>Earth's Shape &amp; Axis:</strong> The Earth is slightly flattened at the North and South Poles and bulges in the middle, a unique shape called a <em>Geoid</em> (Earth-like). The imaginary line about which the Earth spins is called its <em>axis</em>, tilted at an angle of 23.5° to the vertical.</li>
      <li><strong>Equator &amp; Hemispheres:</strong> An imaginary circular line drawn around the middle of the globe is the <em>Equator</em> (0° latitude). It divides the globe into two equal halves: the <em>Northern Hemisphere</em> and the <em>Southern Hemisphere</em>.</li>
      <li><strong>Parallels of Latitude:</strong> Concentric circles drawn parallel to the Equator up to the poles (0° to 90°N/S). Important parallels include:
        <ul>
          <li>Tropic of Cancer (23½° N) in the Northern Hemisphere</li>
          <li>Tropic of Capricorn (23½° S) in the Southern Hemisphere</li>
          <li>Arctic Circle (66½° N) north of the Equator</li>
          <li>Antarctic Circle (66½° S) south of the Equator</li>
        </ul>
      </li>
      <li><strong>Heat Zones of the Earth:</strong>
        <ul>
          <li><strong>Torrid Zone:</strong> Between Tropic of Cancer and Tropic of Capricorn. Receives vertical sunrays; hottest zone.</li>
          <li><strong>Temperate Zones:</strong> Between the Tropics and Polar Circles. Moderate temperature due to slanting rays.</li>
          <li><strong>Frigid Zones:</strong> Beyond the Arctic and Antarctic circles. Extremely cold as the sun never rises far above the horizon.</li>
        </ul>
      </li>
      <li><strong>Meridians of Longitude:</strong> Semicircular lines of reference running from the North Pole to the South Pole. The <em>Prime Meridian</em> passes through Greenwich, London (0° longitude). The 180° meridian is opposite to it, forming a full circle dividing the Earth into the Eastern and Western Hemispheres.</li>
      <li><strong>The Earth Grid &amp; Time Calculation:</strong> The intersection of latitudes and longitudes forms a coordinate <em>grid</em> that pinpoints any location. Since Earth rotates 360° in 24 hours, it rotates 15° per hour (1° every 4 minutes). <strong>Indian Standard Time (IST)</strong> is fixed along the Standard Meridian of 82°30' E (passing through Mirzapur, UP), which is exactly 5 hours and 30 minutes ahead of Greenwich Mean Time (GMT + 5:30).</li>
    </ul>
  </div>

  <!-- SVG Diagram: Earth Grid, Latitudes & Heat Zones -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 260" width="100%" height="240" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Globe Model: Parallels of Latitude, Heat Zones &amp; Earth Grid</text>
      <!-- Globe Circle -->
      <circle cx="280" cy="140" r="100" fill="#f0f9ff" stroke="#0284c7" stroke-width="2.5"/>
      <!-- North & South Pole -->
      <circle cx="280" cy="40" r="4" fill="#0369a1"/>
      <text x="280" y="32" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">North Pole (90° N)</text>
      <circle cx="280" cy="240" r="4" fill="#0369a1"/>
      <text x="280" y="255" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">South Pole (90° S)</text>
      <!-- Frigid Zone North -->
      <path d="M 205,75 A 100,100 0 0,1 355,75" stroke="#38bdf8" stroke-dasharray="4,3" stroke-width="1.8" fill="none"/>
      <text x="365" y="78" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#0284c7">Arctic Circle (66½° N) - North Frigid Zone</text>
      <!-- Tropic of Cancer -->
      <path d="M 188,102 A 100,100 0 0,1 372,102" stroke="#f59e0b" stroke-width="2" fill="none"/>
      <text x="380" y="105" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#d97706">Tropic of Cancer (23½° N) [North Temperate]</text>
      <!-- Equator -->
      <line x1="180" y1="140" x2="380" y2="140" stroke="#dc2626" stroke-width="2.5"/>
      <text x="390" y="144" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#dc2626">Equator (0°) - TORRID ZONE</text>
      <!-- Tropic of Capricorn -->
      <path d="M 188,178 A 100,100 0 0,0 372,178" stroke="#f59e0b" stroke-width="2" fill="none"/>
      <text x="380" y="181" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#d97706">Tropic of Capricorn (23½° S) [South Temperate]</text>
      <!-- Antarctic Circle -->
      <path d="M 205,205 A 100,100 0 0,0 355,205" stroke="#38bdf8" stroke-dasharray="4,3" stroke-width="1.8" fill="none"/>
      <text x="365" y="209" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#0284c7">Antarctic Circle (66½° S) - South Frigid Zone</text>
      <!-- Prime Meridian -->
      <path d="M 280,40 A 60,100 0 0,1 280,240" stroke="#64748b" stroke-dasharray="3,3" stroke-width="1.5" fill="none"/>
      <text x="210" y="140" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#475569" text-anchor="end">Prime Meridian (0°)</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 1.1: Important Parallels of Latitude, Heat Zones and Prime Meridian</div>
  </div>

  <div class="ex-div">NCERT In-Text &amp; Textbook Exercises: Complete Question-Answer Solutions</div>

  <!-- Q1 -->
  <div class="q-card" id="c6sst-ch1-q1">
    <div class="q-head" onclick="toggleQ('c6sst-ch1-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">What is the true shape of the Earth? Why is it not a perfect sphere?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. True Shape of the Earth:</strong><br>
            The true shape of the Earth is called a <strong>Geoid</strong>, which literally translates to "Earth-like shape".
          </div>
          <div class="step">
            <strong>2. Reason for not being a perfect sphere:</strong><br>
            The Earth is slightly <strong>flattened at the North and South Poles</strong> and <strong>bulges at the Equator</strong>. This outward bulge at the middle is caused by the centrifugal force generated by the Earth's continuous axial rotation over billions of years. Hence, its equatorial diameter (~12,756 km) is slightly greater than its polar diameter (~12,714 km).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Mentioning the term "Geoid" with meaning</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining flattening at poles and equatorial bulge</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c6sst-ch1-q2">
    <div class="q-head" onclick="toggleQ('c6sst-ch1-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Differentiate between Parallels of Latitude and Meridians of Longitude. Give at least three clear points of distinction.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <table style="width:100%; border-collapse:collapse; margin-top:8px; font-size:13.5px;">
            <thead>
              <tr style="background:#f1f5f9;">
                <th style="padding:8px 12px; border:1px solid #cbd5e1; text-align:left;">Feature</th>
                <th style="padding:8px 12px; border:1px solid #cbd5e1; text-align:left;">Parallels of Latitude</th>
                <th style="padding:8px 12px; border:1px solid #cbd5e1; text-align:left;">Meridians of Longitude</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:8px 12px; border:1px solid #cbd5e1; font-weight:700;">Direction</td>
                <td style="padding:8px 12px; border:1px solid #cbd5e1;">Run horizontally in an East-West direction, parallel to the Equator.</td>
                <td style="padding:8px 12px; border:1px solid #cbd5e1;">Run vertically in a North-South direction, joining both poles.</td>
              </tr>
              <tr>
                <td style="padding:8px 12px; border:1px solid #cbd5e1; font-weight:700;">Shape &amp; Size</td>
                <td style="padding:8px 12px; border:1px solid #cbd5e1;">They form complete circles. Their size decreases gradually from the Equator towards the poles (becoming a point at 90°).</td>
                <td style="padding:8px 12px; border:1px solid #cbd5e1;">They form semicircles. All meridians are of equal length.</td>
              </tr>
              <tr>
                <td style="padding:8px 12px; border:1px solid #cbd5e1; font-weight:700;">Primary Purpose</td>
                <td style="padding:8px 12px; border:1px solid #cbd5e1;">Help in dividing the Earth into distinct climatic/heat zones (Torrid, Temperate, Frigid).</td>
                <td style="padding:8px 12px; border:1px solid #cbd5e1;">Help in determining local and standard time across different parts of the world.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">1 mark for each accurate point of comparison</span><span class="marking-marks">3 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c6sst-ch1-q3">
    <div class="q-head" onclick="toggleQ('c6sst-ch1-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Why does the Torrid Zone receive the maximum amount of heat?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            The Torrid Zone receives the maximum amount of heat because:
            <ul style="margin:6px 0 0 18px;">
              <li>The midday sun is exactly <strong>overhead at least once a year</strong> on all latitudes between the Tropic of Cancer (23½° N) and the Tropic of Capricorn (23½° S).</li>
              <li>When sunrays fall vertically (at a 90° angle), their energy is concentrated over a smaller surface area, causing intense heating. Beyond the tropics, the sun's rays fall at a slant and heat is spread over a larger area with atmospheric absorption.</li>
            </ul>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Mentioning midday sun overhead between the Tropics</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining vertical sunrays concentrating heat energy</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c6sst-ch1-q4">
    <div class="q-head" onclick="toggleQ('c6sst-ch1-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Why is 82°30' E chosen as the Standard Meridian of India? What is Indian Standard Time (IST)?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Need for a Standard Meridian:</strong><br>
            India has a broad longitudinal span of nearly 30° (from 68°7' E in Dwarka, Gujarat to 97°25' E in Kibithu, Arunachal Pradesh). Since 1° of longitude represents a 4-minute time difference, there is a local time difference of about <strong>1 hour and 45 minutes</strong> between Gujarat and Arunachal Pradesh.
          </div>
          <div class="step">
            <strong>2. Why 82°30' E was chosen:</strong><br>
            To prevent severe confusion in train timetables, flights, and administrative schedules, a central meridian had to be adopted. <strong>82°30' E</strong> passes right through the central part of the nation (near Mirzapur, Uttar Pradesh) and is a multiple of 7°30', which is internationally accepted standard practice.
          </div>
          <div class="step">
            <strong>3. Indian Standard Time (IST):</strong><br>
            The local time of 82°30' E meridian is treated as the official uniform time for the whole country, called <em>Indian Standard Time (IST)</em>. It is <strong>5 hours and 30 minutes ahead</strong> of Greenwich Mean Time (UTC/GMT + 5:30).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Explaining ~30° span and ~1 hr 45 min local time difference</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Reason for central meridian 82°30' E at Mirzapur</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Defining IST and stating GMT + 5:30</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5: Numerical Calculation -->
  <div class="q-card" id="c6sst-ch1-q5">
    <div class="q-head" onclick="toggleQ('c6sst-ch1-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">A cricket match begins at 2:00 PM in London (Greenwich, 0°). At what time will people in India (82°30' E) watch the live telecast? Show full step-by-step calculation.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Step 1: Calculate the longitudinal difference:</strong><br>
            London is on the Prime Meridian = 0°<br>
            India's Standard Time is along = 82°30' E<br>
            Difference in longitude = 82.5°
          </div>
          <div class="step">
            <strong>Step 2: Calculate the time difference in minutes:</strong><br>
            Earth rotates 1° in 4 minutes.<br>
            Therefore, 82.5° × 4 minutes = <strong>330 minutes</strong>.
          </div>
          <div class="step">
            <strong>Step 3: Convert minutes to hours:</strong><br>
            330 ÷ 60 = <strong>5 hours and 30 minutes</strong>.<br>
            Since India lies to the East of Greenwich, Indian time is <em>ahead</em> (+).
          </div>
          <div class="step">
            <strong>Step 4: Find telecast time in India:</strong><br>
            Time in London = 2:00 PM<br>
            Time in India = 2:00 PM + 5 hours 30 minutes = <strong>7:30 PM</strong> in the evening.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct longitudinal difference of 82.5°</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Calculating 330 minutes = 5 hours 30 minutes ahead</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Final answer: 7:30 PM with unit</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6: CBQ -->
  <div class="q-card" id="c6sst-ch1-q6">
    <div class="q-head" onclick="toggleQ('c6sst-ch1-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text"><strong>Competency-Based Question (CBQ - Grid Navigation):</strong><br>A rescue team needs to locate a lost ship whose coordinates are radioed as 20° N latitude and 60° E longitude. Explain how the rescue team uses the Earth's grid system to navigate directly to the ship.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Concept of the Earth Grid:</strong><br>
            Parallels of latitude and meridians of longitude intersect each other at right angles to form a network known as the <em>Earth Grid</em>. Every single point on Earth has an exclusive, unambiguous pair of coordinates.
          </div>
          <div class="step">
            <strong>2. Navigation Process:</strong><br>
            - The rescue team identifies the horizontal parallel of 20° North of the Equator.<br>
            - Next, they identify the vertical meridian of 60° East of the Prime Meridian.<br>
            - The exact point where the 20° N line crosses the 60° E line is the precise location of the ship in the Arabian Sea. By feeding these GPS coordinates into modern marine radar, they reach the target without ambiguity.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Defining Earth grid as intersection of latitude & longitude</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Locating 20° N and 60° E intersection point</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(outDir, 'ch1.html'), ch1Html, 'utf8');
console.log('Successfully generated ch1.html');

// ============================================================================
// CHAPTER 2: OCEANS AND CONTINENTS
// ============================================================================
const ch2Html = `<section class="chapter-section" id="ch2">
  <div class="chapter-header">
    <div class="ch-badge">2</div>
    <div class="chapter-header-info">
      <h2>Chapter 2: Oceans and Continents</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — Lithosphere, Hydrosphere, The 7 Continents, 5 Oceans & Marine Ecosystems | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Geographic Concepts &amp; Principles</div>
    <ul class="concept-list">
      <li><strong>Earth as the Blue Planet:</strong> About 71% of the Earth's surface is covered with water (Hydrosphere) and only 29% is solid landmass (Lithosphere). Because vast oceans dominate the Southern Hemisphere, it is frequently referred to as the <em>Water Hemisphere</em>, while the Northern Hemisphere is the <em>Land Hemisphere</em>.</li>
      <li><strong>The 7 Continents (in descending order of area):</strong>
        <ol>
          <li><strong>Asia:</strong> The largest continent, covering one-third of the total land area. Tropic of Cancer passes through it. Home to Mount Everest (8,848.86 m).</li>
          <li><strong>Africa:</strong> Second largest. The only continent through which the Equator, Tropic of Cancer, and Tropic of Capricorn all pass. Home to the Nile (longest river) and Sahara (largest hot desert).</li>
          <li><strong>North America:</strong> Third largest. Linked to South America by the narrow <em>Isthmus of Panama</em>. Lies entirely in the Northern and Western Hemispheres.</li>
          <li><strong>South America:</strong> Home to the Andes (world's longest mountain range) and the Amazon (world's largest river by volume).</li>
          <li><strong>Antarctica:</strong> Huge continent situated completely around the South Pole in the Southern Frigid Zone. Permanently frozen under thick ice sheets; no permanent human settlements. India operates scientific research stations here named <em>Maitri</em> and <em>Bharati</em>.</li>
          <li><strong>Europe:</strong> Bound by water on three sides (Arctic Ocean, Atlantic Ocean, Mediterranean Sea). Separated from Asia by the Ural Mountains. Together called <em>Eurasia</em>.</li>
          <li><strong>Australia:</strong> Smallest continent, surrounded completely by oceans and seas, known as an <em>Island Continent</em>. Lies entirely in the Southern Hemisphere.</li>
        </ol>
      </li>
      <li><strong>The 5 Oceans:</strong>
        <ul>
          <li><strong>Pacific Ocean:</strong> Largest and deepest ocean; roughly circular; contains the deepest point on Earth, the <em>Mariana Trench</em> (11,022 m deep). Surrounded by active volcanoes called the "Ring of Fire".</li>
          <li><strong>Atlantic Ocean:</strong> Second largest, distinctive 'S' shape. Flanked by North & South America to the west and Europe & Africa to the east. Has the most indented coastline, ideal for natural ports and international commerce.</li>
          <li><strong>Indian Ocean:</strong> The only ocean named after a country (India). Roughly triangular in shape.</li>
          <li><strong>Southern Ocean:</strong> Encircles the continent of Antarctica from 60° S latitude.</li>
          <li><strong>Arctic Ocean:</strong> Located within the Arctic Circle around the North Pole. Connected to the Pacific Ocean by the narrow <em>Bering Strait</em>.</li>
        </ul>
      </li>
      <li><strong>Isthmus vs. Strait:</strong> An <em>Isthmus</em> is a narrow strip of land connecting two large land masses (e.g., Isthmus of Panama). A <em>Strait</em> is a narrow passage of water connecting two large water bodies (e.g., Palk Strait between India and Sri Lanka).</li>
    </ul>
  </div>

  <!-- SVG Diagram: Continents and Oceans Chart -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Comparative Overview: Continents (Area) &amp; Oceans of the World</text>
      <!-- Bars for Continents by Rank -->
      <rect x="30" y="45" width="220" height="20" rx="4" fill="#f59e0b"/>
      <text x="35" y="59" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">1. Asia (30% land area)</text>
      <rect x="30" y="70" width="150" height="20" rx="4" fill="#d97706"/>
      <text x="35" y="84" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">2. Africa (20%)</text>
      <rect x="30" y="95" width="120" height="20" rx="4" fill="#b45309"/>
      <text x="35" y="109" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">3. North America (16%)</text>
      <rect x="30" y="120" width="90" height="20" rx="4" fill="#78350f"/>
      <text x="35" y="134" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff">4. South America (12%)</text>
      <rect x="30" y="145" width="70" height="20" rx="4" fill="#0284c7"/>
      <text x="35" y="159" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#ffffff">5. Antarctica (9%)</text>
      <rect x="30" y="170" width="50" height="20" rx="4" fill="#0369a1"/>
      <text x="35" y="184" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff">6. Europe (7%)</text>
      <rect x="30" y="195" width="40" height="12" rx="3" fill="#0c4a6e"/>
      <text x="75" y="204" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0c4a6e">7. Australia (6%)</text>

      <!-- Ocean Column on right -->
      <rect x="310" y="45" width="220" height="155" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="420" y="68" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0369a1" text-anchor="middle">5 Major Oceans of Earth</text>
      <text x="330" y="93" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">• Pacific Ocean <tspan font-weight="400" fill="#64748b">(Largest &amp; Deepest)</tspan></text>
      <text x="330" y="116" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">• Atlantic Ocean <tspan font-weight="400" fill="#64748b">('S' shaped, busiest)</tspan></text>
      <text x="330" y="139" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">• Indian Ocean <tspan font-weight="400" fill="#64748b">(Named after India)</tspan></text>
      <text x="330" y="162" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">• Southern Ocean <tspan font-weight="400" fill="#64748b">(Encircles Antarctica)</tspan></text>
      <text x="330" y="185" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">• Arctic Ocean <tspan font-weight="400" fill="#64748b">(Surrounds North Pole)</tspan></text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 2.1: Relative Proportions of Continents and Global Ocean Classifications</div>
  </div>

  <div class="ex-div">NCERT In-Text &amp; Textbook Exercises: Complete Question-Answer Solutions</div>

  <!-- Q1 -->
  <div class="q-card" id="c6sst-ch2-q1">
    <div class="q-head" onclick="toggleQ('c6sst-ch2-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Name the seven continents of the world in decreasing order of their size. State one distinct feature of the continent through which the Equator passes.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. The Seven Continents in Decreasing Order of Size:</strong><br>
            1. Asia (Largest)<br>
            2. Africa<br>
            3. North America<br>
            4. South America<br>
            5. Antarctica<br>
            6. Europe<br>
            7. Australia (Smallest)
          </div>
          <div class="step">
            <strong>2. Distinct Feature of Africa:</strong><br>
            Africa is the only continent on Earth traversed by all three major latitude lines: the <strong>Equator (0°)</strong>, the <strong>Tropic of Cancer (23½° N)</strong>, and the <strong>Tropic of Capricorn (23½° S)</strong>. It also contains the world's longest river, the Nile, and the largest hot desert, the Sahara.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Listing all 7 continents in correct sequence of area</span><span class="marking-marks">2 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Stating key geographic feature of Africa</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c6sst-ch2-q2">
    <div class="q-head" onclick="toggleQ('c6sst-ch2-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Explain the difference between an Isthmus and a Strait with examples of each. Which strait separates India from Sri Lanka?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Isthmus:</strong><br>
            An <em>Isthmus</em> is a narrow strip of land joining two large land masses and separating two bodies of water.<br>
            <em>Example:</em> The <strong>Isthmus of Panama</strong> connects North America and South America, while separating the Atlantic Ocean from the Pacific Ocean.
          </div>
          <div class="step">
            <strong>2. Strait:</strong><br>
            A <em>Strait</em> is a narrow passage of water connecting two large bodies of water (such as seas or oceans) and separating two land masses.<br>
            <em>Example:</em> The <strong>Bering Strait</strong> connects the Arctic Ocean to the Pacific Ocean, separating Asia from North America.
          </div>
          <div class="step">
            <strong>3. Strait between India and Sri Lanka:</strong><br>
            The narrow stretch of shallow water separating India from Sri Lanka is called the <strong>Palk Strait</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Definition and example of Isthmus</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Definition and example of Strait</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Naming Palk Strait for India-Sri Lanka</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c6sst-ch2-q3">
    <div class="q-head" onclick="toggleQ('c6sst-ch2-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Why are there no permanent human settlements in Antarctica? What activities do countries carry out there? Mention India's research bases.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Reasons for Absence of Permanent Human Settlements:</strong><br>
            Antarctica is situated entirely in the South Frigid Zone around the South Pole. It is permanently covered in ice sheets several kilometres thick with sub-zero temperatures (dropping below -80°C), howling blizzard winds, and six months of continuous darkness during winter. Agriculture is impossible, making normal human settlement unviable.
          </div>
          <div class="step">
            <strong>2. Human Activities in Antarctica:</strong><br>
            Many countries maintain active research laboratories for scientific study of Earth's climate history, meteorology, atmospheric ozone layer, glaciology, and astronomy.
          </div>
          <div class="step">
            <strong>3. India's Research Stations:</strong><br>
            India operates specialized scientific research stations in Antarctica named <strong>Maitri</strong> and <strong>Bharati</strong> (an earlier station, <em>Dakshin Gangotri</em>, is now buried under ice and used as a supply base).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Describing extreme climatic conditions and permafrost</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Stating scientific research purpose</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Naming Indian stations: Maitri and Bharati</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c6sst-ch2-q4">
    <div class="q-head" onclick="toggleQ('c6sst-ch2-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Explain why the Atlantic Ocean has the busiest coastline for international trade and maritime shipping.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            The Atlantic Ocean is the commercially busiest ocean because:
            <ul style="margin:6px 0 0 18px;">
              <li><strong>Highly Indented Coastline:</strong> Its coastline is extremely irregular and indented with natural bays, inlets, and estuaries. This provides ideal natural shelters for construction of world-class seaports and harbours.</li>
              <li><strong>Economic Gateway:</strong> It connects the two most economically advanced and industrialized regions of the world—Western Europe on one side and North America on the other—handling vast volumes of containerized cargo daily.</li>
            </ul>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Highlighting indented coastline providing natural harbours</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Connecting industrial superpowers of Europe & North America</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(outDir, 'ch2.html'), ch2Html, 'utf8');
console.log('Successfully generated ch2.html');

// ============================================================================
// CHAPTER 3: LANDFORMS AND LIFE
// ============================================================================
const ch3Html = `<section class="chapter-section" id="ch3">
  <div class="chapter-header">
    <div class="ch-badge">3</div>
    <div class="chapter-header-info">
      <h2>Chapter 3: Landforms and Life</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — Mountains, Plateaus, Plains, Deserts, Coastal Areas & Human Adaptation | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Geographic Concepts &amp; Principles</div>
    <ul class="concept-list">
      <li><strong>Earth's Dynamic Processes:</strong> Landforms are shaped by two primary geological processes:
        <ul>
          <li><em>Internal Processes:</em> Upliftment and sinking of Earth's crust caused by tectonic movements (e.g., earthquakes, volcanic eruptions, mountain building).</li>
          <li><em>External Processes:</em> Continuous wearing down (erosion) and rebuilding (deposition) of landforms by running water, wind, glaciers, and waves.</li>
        </ul>
      </li>
      <li><strong>1. Mountains:</strong> Any natural elevation of the Earth's surface significantly higher than the surrounding area, with a broad base and steep summit.
        <ul>
          <li><em>Fold Mountains:</em> Formed when crustal rocks buckle due to compressive forces. Young fold mountains (e.g., <strong>Himalayas</strong>, Alps) have conical peaks and rugged relief. Old fold mountains (e.g., <strong>Aravalli Range</strong> in India, Urals) are rounded due to millions of years of denudation.</li>
          <li><em>Block Mountains:</em> Created when large land areas are broken and displaced vertically. The uplifted blocks are called <em>Horsts</em> and the lowered sunken blocks are called <em>Grabens</em> / rift valleys (e.g., Rhine Valley, Vosges).</li>
          <li><em>Volcanic Mountains:</em> Formed by accumulation of molten volcanic materials (e.g., Mt. Kilimanjaro in Africa, Mt. Fujiyama in Japan).</li>
        </ul>
      </li>
      <li><strong>2. Plateaus:</strong> Elevated flat-topped tablelands standing abruptly above surrounding plains. Rich in mineral deposits (e.g., <strong>Chotanagpur Plateau</strong> in India has rich iron, coal, and manganese reserves; <strong>Deccan Plateau</strong> has black cotton soil; <strong>Tibetan Plateau</strong> is the highest in the world at 4,000–6,000 m, called the "Roof of the World"). Often site of picturesque waterfalls like Hundru Falls (Subarnarekha river) and Jog Falls (Sharavati river).</li>
      <li><strong>3. Plains:</strong> Vast stretches of flat, low-lying land (rarely more than 200 m above sea level). Formed by silt, sand, and clay deposited by rivers and their tributaries (e.g., <strong>Northern Plains of India</strong> formed by the Indus, Ganga, and Brahmaputra). Plains are the most densely populated regions on Earth because flat terrain facilitates agriculture, railway/road transport, and urban settlements.</li>
      <li><strong>Landforms Shaping Human Life:</strong> Climate, soil, flora, fauna, and human livelihoods vary drastically across landforms. Mountain people practice step-farming (terrace cultivation) and tourism; plains foster intensive agriculture and industries; coastal populations depend on fishing and maritime trade.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Major Landforms Comparison -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 220" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Cross-Section: Profile of Mountains, Plateaus &amp; River Plains</text>
      <!-- Mountain Peak -->
      <polygon points="50,190 120,60 190,190" fill="#f87171" stroke="#dc2626" stroke-width="2"/>
      <polygon points="120,60 100,100 140,100" fill="#ffffff" opacity="0.9"/>
      <text x="120" y="50" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#991b1b" text-anchor="middle">Mountain Peak</text>
      <text x="120" y="140" font-family="system-ui, sans-serif" font-size="9" fill="#ffffff" font-weight="700" text-anchor="middle">Steep Slopes</text>

      <!-- Plateau Tableland -->
      <polygon points="190,190 220,110 330,110 360,190" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
      <text x="275" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e" text-anchor="middle">Plateau (Tableland)</text>
      <text x="275" y="145" font-family="system-ui, sans-serif" font-size="9" fill="#78350f" font-weight="600" text-anchor="middle">Rich in Minerals</text>

      <!-- Plains and River -->
      <polygon points="360,190 360,165 530,165 530,190" fill="#86efac" stroke="#16a34a" stroke-width="2"/>
      <text x="445" y="152" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#14532d" text-anchor="middle">River Plain</text>
      <text x="445" y="180" font-family="system-ui, sans-serif" font-size="9" fill="#166534" font-weight="600" text-anchor="middle">Fertile Alluvial Soil</text>

      <!-- River Blue Line -->
      <path d="M 120,80 Q 240,150 445,170 T 530,175" fill="none" stroke="#0284c7" stroke-width="3"/>
      <!-- Base ground line -->
      <line x1="30" y1="190" x2="540" y2="190" stroke="#475569" stroke-width="3"/>
      <text x="280" y="210" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="middle">Sea Level / Base Line</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 3.1: Profile of Major Relief Features of the Earth's Crust</div>
  </div>

  <div class="ex-div">NCERT In-Text &amp; Textbook Exercises: Complete Question-Answer Solutions</div>

  <!-- Q1 -->
  <div class="q-card" id="c6sst-ch3-q1">
    <div class="q-head" onclick="toggleQ('c6sst-ch3-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">What are the main differences between a mountain and a plateau? Provide examples of each in India.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <table style="width:100%; border-collapse:collapse; margin-top:8px; font-size:13.5px;">
            <thead>
              <tr style="background:#f1f5f9;">
                <th style="padding:8px 12px; border:1px solid #cbd5e1; text-align:left;">Feature</th>
                <th style="padding:8px 12px; border:1px solid #cbd5e1; text-align:left;">Mountain</th>
                <th style="padding:8px 12px; border:1px solid #cbd5e1; text-align:left;">Plateau</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:8px 12px; border:1px solid #cbd5e1; font-weight:700;">Top Surface</td>
                <td style="padding:8px 12px; border:1px solid #cbd5e1;">Has a small, conical peak or summit with steep sloping sides.</td>
                <td style="padding:8px 12px; border:1px solid #cbd5e1;">Has a flat, broad elevated top called a tableland.</td>
              </tr>
              <tr>
                <td style="padding:8px 12px; border:1px solid #cbd5e1; font-weight:700;">Economic Significance</td>
                <td style="padding:8px 12px; border:1px solid #cbd5e1;">Source of perennial rivers (glaciers), hydro-power, timber, and tourism.</td>
                <td style="padding:8px 12px; border:1px solid #cbd5e1;">Enormous mineral wealth (coal, iron ore, gold, bauxite) and waterfalls.</td>
              </tr>
              <tr>
                <td style="padding:8px 12px; border:1px solid #cbd5e1; font-weight:700;">Indian Example</td>
                <td style="padding:8px 12px; border:1px solid #cbd5e1;">The <strong>Himalayas</strong>, Aravalli Range, Western Ghats.</td>
                <td style="padding:8px 12px; border:1px solid #cbd5e1;">The <strong>Deccan Plateau</strong>, Chotanagpur Plateau.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Contrasting shape of summit vs flat tableland</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Contrasting economic values</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correct Indian examples for both</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c6sst-ch3-q2">
    <div class="q-head" onclick="toggleQ('c6sst-ch3-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Why are the river plains of the world so densely populated? Explain three main geographical reasons.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            River plains (such as the Indo-Gangetic Plain in India) support huge human populations due to the following reasons:
            <ol style="margin:6px 0 0 18px;">
              <li><strong>Extremely Fertile Soils:</strong> Rivers carry fine silt, alluvium, and mineral nutrients from mountains and deposit them across the floodplains. This fertile alluvium supports intensive crop cultivation, guaranteeing food security.</li>
              <li><strong>Abundant Perennial Water:</strong> Rivers provide constant freshwater for domestic use, livestock, irrigation channels, and industrial operations.</li>
              <li><strong>Flat Terrain for Transport and Urbanization:</strong> Level land makes it easy, cost-effective, and safe to construct roads, railways, canals, factories, and densely built residential towns without facing the steep physical obstacles found in mountains.</li>
            </ol>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Fertile alluvial soil for farming</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Availability of perennial freshwater</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Ease of transport and construction on level terrain</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c6sst-ch3-q3">
    <div class="q-head" onclick="toggleQ('c6sst-ch3-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">How do mountains differ based on their mode of formation? Explain Fold, Block, and Volcanic mountains with one example of each.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Fold Mountains:</strong><br>
            Created by the collision of tectonic plates, causing horizontal layers of the Earth's crust to crumple into arch-like folds.<br>
            <em>Example:</em> The <strong>Himalayas</strong> in Asia and the Alps in Europe.
          </div>
          <div class="step">
            <strong>2. Block Mountains:</strong><br>
            Formed when large sections of the crust break along fault cracks and are displaced vertically. The raised blocks are <em>horsts</em> and the sunken valleys are <em>grabens</em>.<br>
            <em>Example:</em> The <strong>Vosges Mountain</strong> and the Rhine Valley in Europe.
          </div>
          <div class="step">
            <strong>3. Volcanic Mountains:</strong><br>
            Built up by repeated eruptions and cooling of magma, ash, and lava around a volcanic vent.<br>
            <em>Example:</em> <strong>Mount Kilimanjaro</strong> in Africa and Mount Fujiyama in Japan.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Fold mountain formation and example</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Block mountain formation and example</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Volcanic mountain formation and example</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(outDir, 'ch3.html'), ch3Html, 'utf8');
console.log('Successfully generated ch3.html');

// ============================================================================
// CHAPTER 4: TIMELINE AND SOURCES OF HISTORY
// ============================================================================
const ch4Html = `<section class="chapter-section" id="ch4">
  <div class="chapter-header">
    <div class="ch-badge">4</div>
    <div class="chapter-header-info">
      <h2>Chapter 4: Timeline and Sources of History</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — Chronology, BCE & CE, Archaeological & Literary Sources, Inscriptions, Coins & Manuscripts | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Historical Concepts &amp; Principles</div>
    <ul class="concept-list">
      <li><strong>Concept of Time in History:</strong>
        <ul>
          <li><strong>BCE (Before Common Era):</strong> Replaces the older term BC (Before Christ). Counts backward from 1 (e.g., 500 BCE comes before 300 BCE).</li>
          <li><strong>CE (Common Era):</strong> Replaces the term AD (Anno Domini - in the year of our Lord). Counts forward starting from year 1.</li>
          <li><strong>Circa (c.):</strong> A Latin term meaning "approximately" or "around", used when an exact date is not known (e.g., c. 2500 BCE).</li>
        </ul>
      </li>
      <li><strong>Two Main Pillars of Historical Evidence:</strong>
        <ol>
          <li><strong>Archaeological Sources:</strong> Material remains unearthed by archaeologists through excavation:
            <ul>
              <li><em>Monuments &amp; Buildings:</em> Forts, temples, stupas, granaries, and town ruins revealing architectural skills and lifestyle.</li>
              <li><em>Inscriptions (Epigraphy):</em> Words engraved on durable hard surfaces like stones, rocks, iron pillars, and copper plates (e.g., Ashoka's Edicts). They rarely decay.</li>
              <li><em>Coins (Numismatics):</em> Metal pieces issued by kings bearing portraits, names, dates, and symbols, revealing trade networks, metallurgy, and kingly chronologies.</li>
              <li><em>Artefacts:</em> Pottery, beads, tools, terracotta toys, and animal bones illustrating daily domestic life and diet.</li>
            </ul>
          </li>
          <li><strong>Literary Sources:</strong> Written records of the past:
            <ul>
              <li><em>Manuscripts:</em> Hand-written records preserved on delicate palm leaves or the special bark of birch trees (Bhurja-patra) grown in the Himalayas.</li>
              <li><em>Religious Literature:</em> Vedas, Upanishads, Jatakas, Puranas, Ramayana, and Mahabharata illustrating moral philosophy and social ethos.</li>
              <li><em>Secular Literature:</em> Plays (by Kalidasa), laws (Arthashastra by Chanakya), biographies (Harshacharita), and accounts left by foreign travellers like Megasthenes, Fa-Hien, and Xuanzang.</li>
            </ul>
          </li>
        </ol>
      </li>
      <li><strong>The Historian as a Detective:</strong> Historians piece together fragments of evidence from epigraphy, archaeology, radiocarbon dating, and ancient texts to reconstruct the living story of our ancestors.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Timeline & Sources Hierarchy -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Historical Timeline Scale: Understanding BCE and CE</text>
      <!-- Timeline Axis -->
      <line x1="40" y1="90" x2="520" y2="90" stroke="#0284c7" stroke-width="3"/>
      <polygon points="525,90 515,85 515,95" fill="#0284c7"/>
      <polygon points="35,90 45,85 45,95" fill="#0284c7"/>

      <!-- Center Zero / Reference Year -->
      <circle cx="280" cy="90" r="6" fill="#dc2626"/>
      <line x1="280" y1="70" x2="280" y2="110" stroke="#dc2626" stroke-width="2"/>
      <text x="280" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#dc2626" text-anchor="middle">Reference Year 1</text>
      <text x="280" y="125" font-family="system-ui, sans-serif" font-size="9" fill="#64748b" text-anchor="middle">(Origin of calendar)</text>

      <!-- BCE Side Left -->
      <line x1="160" y1="80" x2="160" y2="100" stroke="#0284c7" stroke-width="2"/>
      <text x="160" y="75" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0369a1" text-anchor="middle">500 BCE</text>
      <line x1="70" y1="80" x2="70" y2="100" stroke="#0284c7" stroke-width="2"/>
      <text x="70" y="75" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0369a1" text-anchor="middle">2500 BCE (Harappa)</text>
      <text x="140" y="150" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">← BCE (Counts Backward)</text>

      <!-- CE Side Right -->
      <line x1="400" y1="80" x2="400" y2="100" stroke="#16a34a" stroke-width="2"/>
      <text x="400" y="75" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#15803d" text-anchor="middle">1000 CE</text>
      <line x1="490" y1="80" x2="490" y2="100" stroke="#16a34a" stroke-width="2"/>
      <text x="490" y="75" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#15803d" text-anchor="middle">2026 CE (Today)</text>
      <text x="420" y="150" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">CE (Counts Forward) →</text>

      <!-- Legend -->
      <rect x="50" y="175" width="460" height="25" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <text x="280" y="192" font-family="system-ui, sans-serif" font-size="10" fill="#475569" text-anchor="middle">BCE = Before Common Era (replaces BC) | CE = Common Era (replaces AD)</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 4.1: The Historical Chronology Scale and Dating System</div>
  </div>

  <div class="ex-div">NCERT In-Text &amp; Textbook Exercises: Complete Question-Answer Solutions</div>

  <!-- Q1 -->
  <div class="q-card" id="c6sst-ch4-q1">
    <div class="q-head" onclick="toggleQ('c6sst-ch4-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Explain the difference between manuscripts and inscriptions. Why have inscriptions survived in much better condition than manuscripts?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <table style="width:100%; border-collapse:collapse; margin-top:8px; font-size:13.5px;">
            <thead>
              <tr style="background:#f1f5f9;">
                <th style="padding:8px 12px; border:1px solid #cbd5e1; text-align:left;">Feature</th>
                <th style="padding:8px 12px; border:1px solid #cbd5e1; text-align:left;">Manuscripts</th>
                <th style="padding:8px 12px; border:1px solid #cbd5e1; text-align:left;">Inscriptions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:8px 12px; border:1px solid #cbd5e1; font-weight:700;">Material Used</td>
                <td style="padding:8px 12px; border:1px solid #cbd5e1;">Written by hand on soft, perishable natural materials like dried palm leaves or birch bark (Bhurja-patra).</td>
                <td style="padding:8px 12px; border:1px solid #cbd5e1;">Engraved or carved onto durable hard surfaces such as rocks, stone pillars, cave walls, and metal plates.</td>
              </tr>
              <tr>
                <td style="padding:8px 12px; border:1px solid #cbd5e1; font-weight:700;">Content</td>
                <td style="padding:8px 12px; border:1px solid #cbd5e1;">Contained religious hymns, philosophies, poems, dramas, and medical treaties.</td>
                <td style="padding:8px 12px; border:1px solid #cbd5e1;">Royal orders (edicts), military victories, and official records of land grants made by kings.</td>
              </tr>
            </tbody>
          </table>
          <div class="step" style="margin-top:10px;">
            <strong>Why Inscriptions Survived Better:</strong><br>
            Palm leaves and birch bark are organic materials that easily get eaten by insects, ruined by damp moisture, or consumed by fire over centuries. In contrast, stones and metals are inorganic and highly resistant to weather, allowing inscriptions (such as Ashoka's rock edicts) to survive intact for thousands of years.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Contrasting materials: palm leaf vs rock/metal</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Contrasting contents and purpose</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining physical durability of stone over organic leaves</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c6sst-ch4-q2">
    <div class="q-head" onclick="toggleQ('c6sst-ch4-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">What do the abbreviations BCE and CE stand for? Why have historians increasingly shifted from using BC/AD to BCE/CE?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Full Forms:</strong>
            <ul style="margin:4px 0 0 16px;">
              <li><strong>BCE:</strong> Before Common Era (replaces BC - Before Christ).</li>
              <li><strong>CE:</strong> Common Era (replaces AD - Anno Domini).</li>
            </ul>
          </div>
          <div class="step">
            <strong>2. Reason for Global Shift:</strong><br>
            The older terms BC and AD were explicitly religious Christian terms. Historians worldwide adopted <em>BCE</em> and <em>CE</em> as secular, neutral, and universally acceptable scientific terms for global historical research across all nations and religions.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct expansion of BCE and CE</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining adoption of neutral, universal secular notation</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c6sst-ch4-q3">
    <div class="q-head" onclick="toggleQ('c6sst-ch4-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">What valuable information do ancient coins (numismatics) provide to historians studying the past? Give three points.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            Ancient coins provide crucial clues about past civilisations:
            <ol style="margin:6px 0 0 18px;">
              <li><strong>Royal Chronology and Rulers:</strong> Coins often carry the name, royal title, coronation year, and portrait of the reigning ruler (e.g., Gupta and Indo-Greek coins), helping establish exact dates of kingdoms.</li>
              <li><strong>Economic Prosperity and Metallurgy:</strong> The purity of metals used (gold, silver, or copper) indicates the economic health of the empire. High-purity gold coins reflect thriving trade, while debased metals suggest economic decline.</li>
              <li><strong>Trade Relations and Extent of Empire:</strong> Finding Roman coins in South Indian coastal towns (e.g., Arikamedu) proves active maritime trade between ancient Tamil kingdoms and the Roman Empire.</li>
            </ol>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">1 mark for each well-reasoned point on numismatic evidence</span><span class="marking-marks">3 Marks</span></div>
        </div>
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(outDir, 'ch4.html'), ch4Html, 'utf8');
console.log('Successfully generated ch4.html');
