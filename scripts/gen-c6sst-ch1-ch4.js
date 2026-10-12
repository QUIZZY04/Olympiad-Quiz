// scripts/gen-c6sst-ch1-ch4.js
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c6sst');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Helper to wrap question card
function qCard(id, qNum, title, type, question, answerContent, markingScheme) {
  return `
    <div class="q-card" id="${id}">
      <div class="q-header" onclick="toggleQ('${id}')">
        <span class="q-title">${qNum}. ${title}</span>
        <span class="q-type badge-${type.toLowerCase().replace(/[^a-z]/g, '')}">${type}</span>
        <span class="toggle-icon">▼</span>
      </div>
      <div class="q-body" style="display: block;">
        <p class="question-text"><strong>Question:</strong> ${question}</p>
        <div class="answer-box">
          ${answerContent}
        </div>
        ${markingScheme ? `
        <div class="marking-scheme">
          <span class="ms-title">🎯 CBSE Marking Scheme Rubric (Exam Guide):</span>
          <p>${markingScheme}</p>
        </div>` : ''}
      </div>
    </div>`;
}

// ============================================================================
// CHAPTER 1: LOCATING PLACES ON THE EARTH
// ============================================================================
const ch1Html = `<section class="chapter-section" id="ch1">
  <div class="chapter-header">
    <div class="ch-badge">1</div>
    <div class="chapter-header-info">
      <h2>Chapter 1: Locating Places on the Earth</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — 100% Complete Textbook Questions, The Big Questions, Let's Explore, Crossword &amp; CBSE Rubrics | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Geographic Concepts &amp; Principles</div>
    <ul class="concept-list">
      <li><strong>Earth's Shape &amp; Axis:</strong> The Earth is slightly flattened at the North and South Poles and bulges in the middle, a unique shape called a <em>Geoid</em> (Earth-like). The imaginary line about which the Earth spins is called its <em>axis</em>, tilted at an angle of 23.5° to the vertical.</li>
      <li><strong>Equator &amp; Hemispheres:</strong> An imaginary circular line drawn around the middle of the globe is the <em>Equator</em> (0° latitude). It divides the globe into two equal halves: the <em>Northern Hemisphere</em> and the <em>Southern Hemisphere</em>.</li>
      <li><strong>Parallels of Latitude:</strong> Concentric circles drawn parallel to the Equator up to the poles (0° to 90°N/S). Important parallels include Tropic of Cancer (23½° N), Tropic of Capricorn (23½° S), Arctic Circle (66½° N), and Antarctic Circle (66½° S).</li>
      <li><strong>Heat Zones:</strong> Torrid Zone (between tropics; direct sunrays, hottest), Temperate Zones (moderate climate), and Frigid Zones (beyond polar circles; extreme cold).</li>
      <li><strong>Meridians of Longitude:</strong> Semicircular lines of reference running from the North Pole to the South Pole. The <em>Prime Meridian</em> passes through Greenwich, London (0° longitude).</li>
      <li><strong>The Earth Grid &amp; Standard Time:</strong> The intersection of latitudes and longitudes forms a coordinate <em>grid</em> that pinpoints any location. Earth rotates 360° in 24 hours, i.e., 15° per hour (1° every 4 minutes). <strong>Indian Standard Time (IST)</strong> is based on 82°30' E (Mirzapur, UP), which is GMT + 5:30.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Earth Grid, Latitudes & Heat Zones -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 260" width="100%" height="240" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Globe Model: Parallels of Latitude, Heat Zones &amp; Earth Grid</text>
      <circle cx="280" cy="140" r="100" fill="#f0f9ff" stroke="#0284c7" stroke-width="2.5"/>
      <circle cx="280" cy="40" r="4" fill="#0369a1"/>
      <text x="280" y="32" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">North Pole (90° N)</text>
      <circle cx="280" cy="240" r="4" fill="#0369a1"/>
      <text x="280" y="255" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">South Pole (90° S)</text>
      <path d="M 205,75 A 100,100 0 0,1 355,75" stroke="#38bdf8" stroke-dasharray="4,3" stroke-width="1.8" fill="none"/>
      <text x="365" y="78" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#0284c7">Arctic Circle (66½° N) - North Frigid Zone</text>
      <path d="M 188,102 A 100,100 0 0,1 372,102" stroke="#f59e0b" stroke-width="2" fill="none"/>
      <text x="380" y="105" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#d97706">Tropic of Cancer (23½° N) [North Temperate]</text>
      <line x1="180" y1="140" x2="380" y2="140" stroke="#dc2626" stroke-width="2.5"/>
      <text x="390" y="144" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#dc2626">Equator (0°) - TORRID ZONE</text>
      <path d="M 188,178 A 100,100 0 0,0 372,178" stroke="#f59e0b" stroke-width="2" fill="none"/>
      <text x="380" y="181" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#d97706">Tropic of Capricorn (23½° S) [South Temperate]</text>
      <path d="M 205,205 A 100,100 0 0,0 355,205" stroke="#38bdf8" stroke-dasharray="4,3" stroke-width="1.8" fill="none"/>
      <text x="365" y="209" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#0284c7">Antarctic Circle (66½° S) - South Frigid Zone</text>
      <path d="M 280,40 A 60,100 0 0,1 280,240" stroke="#64748b" stroke-dasharray="3,3" stroke-width="1.5" fill="none"/>
      <text x="210" y="140" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#475569" text-anchor="end">Prime Meridian (0°)</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 1.1: Important Parallels of Latitude, Heat Zones and Prime Meridian</div>
  </div>

  <!-- ================= SECTION A: THE BIG QUESTIONS ================= -->
  <div class="ex-div">
    <div class="ex-heading">The Big Questions (Chapter Inquiry &amp; Openers)</div>
  </div>

  ${qCard(
    'c6sst-ch1-bq1',
    'Big Q1',
    'What is a Map and What Are Its Main Components?',
    'Short',
    'What is a map? How do we use it to represent places on Earth, and what are its three essential components?',
    `<p class="step"><strong>1. Definition of a Map:</strong><br>
    A map is a visual representation of the Earth’s surface, or a part of it, drawn on a flat surface according to a specific scale. Unlike a 3D globe, maps can show specific regions, cities, roads, rivers, and thematic details with high precision.</p>
    <p class="step"><strong>2. Three Essential Components of a Map:</strong><br>
    • <strong>Distance (Scale):</strong> The ratio between the distance shown on the map and the actual distance on the ground (e.g., 1 cm = 100 km).<br>
    • <strong>Direction:</strong> Indicated by the North arrow ('N') pointing towards geographic north. Cardinal directions are North, South, East, and West.<br>
    • <strong>Symbols &amp; Colours:</strong> Standard signs, letters, shades, and colours representing real features like water bodies (blue), mountains (brown), plains (green), and roads (red/black).</p>`,
    'CBSE Marking Scheme: 1 Mark for definition of map + 2 Marks for stating and explaining Distance (Scale), Direction, and Symbols.'
  )}

  ${qCard(
    'c6sst-ch1-bq2',
    'Big Q2',
    'What are Geographic Coordinates and the Earth Grid?',
    'Concept',
    'What are geographic coordinates? How do parallels of latitude and meridians of longitude work together to pinpoint any location on Earth?',
    `<p class="step"><strong>1. Concept of Coordinates:</strong><br>
    Geographic coordinates are an address system for the planet consisting of two numbers: <strong>latitude</strong> (angular distance north or south of the Equator) and <strong>longitude</strong> (angular distance east or west of the Prime Meridian).</p>
    <p class="step"><strong>2. The Earth Grid:</strong><br>
    Parallels of latitude and meridians of longitude cross each other at right angles to form a criss-cross network called the <em>Earth Grid</em>. Because every point on the globe lies at the exact intersection of one parallel and one meridian, any point—from a tiny island in the Pacific to a skyscraper in Delhi—can be located uniquely without confusion (e.g., New Delhi is at 28°38' N, 77°13' E).</p>`,
    'CBSE Marking Scheme: 1 Mark for defining coordinates + 1 Mark for explaining how the grid intersection provides unique location addresses.'
  )}

  ${qCard(
    'c6sst-ch1-bq3',
    'Big Q3',
    'Relationship Between Earth’s Rotation, Longitude and Time',
    'Explain',
    'How are local time and standard time related to the longitudinal rotation of the Earth? Why do different places experience sunrise at different times?',
    `<p class="step"><strong>1. Planetary Rotation and Time:</strong><br>
    The Earth completes one full axial rotation of <strong>360° in 24 hours</strong> from West to East. This means:
    $$\\frac{360^\\circ}{24\\text{ hours}} = 15^\\circ\\text{ per hour} \\implies 1^\\circ\\text{ every 4 minutes}$$
    As the Earth rotates eastward, places situated east of Greenwich see the sun earlier, so their local time is <em>ahead</em>. Places situated to the west see the sun later, so their local time is <em>behind</em>.</p>
    <p class="step"><strong>2. Local Time vs. Standard Time:</strong><br>
    • <strong>Local Time:</strong> The time determined by the sun's position at a specific meridian (noon is when the sun is at highest point in the sky). Every meridian has a different local time.<br>
    • <strong>Standard Time:</strong> To avoid chaos in timetables, a country adopts the local time of one central meridian as the uniform legal time for the entire nation (e.g., IST along 82°30' E in India).</p>`,
    'CBSE Marking Scheme: 1 Mark for rate of rotation (15°/hr = 4 min/deg) + 1 Mark for explaining West-to-East rotation + 1 Mark for distinction between local time and standard time.'
  )}

  <!-- ================= SECTION B: LET'S EXPLORE IN-TEXT ACTIVITIES ================= -->
  <div class="ex-div">
    <div class="ex-heading">Let's Explore &amp; In-Text Practical Activities</div>
  </div>

  ${qCard(
    'c6sst-ch1-le1',
    'Activity 1',
    'Scale Calculation: School Playground Diagonal',
    'Numerical',
    '<strong>In-Text "Let’s Explore" Activity:</strong><br>A school playground measures 40 metres in length and 30 metres in width. Draw a plan of the playground using a scale of 1 cm = 10 metres. What will be the diagonal distance across the playground on the map and on the ground?',
    `<p class="step"><strong>Step 1: Convert ground dimensions to map dimensions using the scale (1 cm = 10 m):</strong><br>
    • Length on map = 40 m ÷ 10 m/cm = <strong>4 cm</strong><br>
    • Width on map = 30 m ÷ 10 m/cm = <strong>3 cm</strong></p>
    <p class="step"><strong>Step 2: Calculate the diagonal distance on the map (Pythagoras theorem):</strong><br>
    $$\\text{Diagonal}^2 = 4^2 + 3^2 = 16 + 9 = 25 \\implies \\text{Diagonal on map} = \\sqrt{25} = 5\\text{ cm}$$</p>
    <p class="step"><strong>Step 3: Calculate the actual diagonal distance on the ground:</strong><br>
    Actual ground distance = 5 cm × 10 m/cm = <strong>50 metres</strong>.</p>`,
    'CBSE Marking Scheme: 1 Mark for converting length & width to cm + 1 Mark for Pythagoras calculation (5 cm) + 1 Mark for actual ground distance (50 m).'
  )}

  ${qCard(
    'c6sst-ch1-le2',
    'Activity 2',
    'In-Text Time Calculation: Porbandar vs. Tinsukia',
    'Numerical',
    '<strong>In-Text "Let’s Explore" Activity:</strong><br>Porbandar in Gujarat is located at approximately 69° E longitude, while Tinsukia in Assam is located at approximately 95° E longitude. Calculate the difference in local sunrise time between these two towns. Why do they follow the same watch time?',
    `<p class="step"><strong>Step 1: Calculate the longitudinal difference:</strong><br>
    Longitude of Tinsukia = 95° E<br>
    Longitude of Porbandar = 69° E<br>
    Difference = 95° − 69° = <strong>26°</strong></p>
    <p class="step"><strong>Step 2: Calculate time difference:</strong><br>
    Since 1° = 4 minutes: 26° × 4 minutes = <strong>104 minutes</strong> = <strong>1 hour and 44 minutes</strong> (~nearly 2 hours).</p>
    <p class="step"><strong>Step 3: Explanation:</strong><br>
    The sun rises nearly 1 hour and 44 minutes earlier in Tinsukia than in Porbandar. However, both towns set their clocks to the same time because India follows a single <strong>Indian Standard Time (IST)</strong> fixed at 82°30' E to ensure smooth administration, railway schedules, and broadcast communications.</p>`,
    'CBSE Marking Scheme: 1 Mark for longitudinal difference of 26° + 1 Mark for time difference of 104 minutes (1 hr 44 min) + 1 Mark for explaining uniform IST.'
  )}

  <!-- ================= SECTION C: QUESTIONS, ACTIVITIES AND PROJECTS ================= -->
  <div class="ex-div">
    <div class="ex-heading">Questions, activities and projects (Official NCERT Textbook Exercises)</div>
  </div>

  ${qCard(
    'c6sst-ch1-q1',
    'Q1',
    'Map Scale: Narmada River Estuary to Ganga River',
    'Numerical',
    'On the physical map of India, the distance between the estuary of the Narmada River (Gulf of Khambhat) and the Ganga River is measured as approximately 5.5 cm. If the map scale is 1 cm = 200 km, calculate the actual ground distance in kilometres.',
    `<p class="step"><strong>Given Data:</strong><br>
    • Distance on the map = 5.5 cm<br>
    • Map scale: 1 cm = 200 km</p>
    <p class="step"><strong>Calculation:</strong><br>
    $$\\text{Actual ground distance} = \\text{Map distance} \\times \\text{Scale value}$$
    $$\\text{Actual ground distance} = 5.5\\text{ cm} \\times 200\\text{ km/cm} = 1,100\\text{ km}$$</p>
    <p class="step"><strong>Conclusion:</strong><br>
    The actual ground distance between the mouth of the Narmada River and the Ganga River is approximately <strong>1,100 kilometres</strong>.</p>`,
    'CBSE Marking Scheme: 1 Mark for identifying formula (Map Distance × Scale) + 1 Mark for arithmetic calculation (5.5 × 200) + 1 Mark for correct answer with unit (1,100 km).'
  )}

  ${qCard(
    'c6sst-ch1-q2',
    'Q2',
    'Why is it 5:30 PM in India when it is 12:00 PM in London?',
    'Explain',
    'Why is it 5:30 PM in India when it is 12:00 PM (noon) in London? Explain with full step-by-step mathematical calculation. [3 Marks]',
    `<p class="step"><strong>Step 1: Identify the standard longitudes:</strong><br>
    • London (Greenwich, UK) lies on the Prime Meridian = <strong>0° Longitude</strong>.<br>
    • India follows Indian Standard Time (IST) along = <strong>82°30' E Longitude (82.5° E)</strong>.</p>
    <p class="step"><strong>Step 2: Find the difference in longitudes:</strong><br>
    $$\\text{Difference} = 82.5^\\circ - 0^\\circ = 82.5^\\circ$$</p>
    <p class="step"><strong>Step 3: Calculate the time difference:</strong><br>
    Since the Earth takes 4 minutes to rotate through 1° of longitude:<br>
    $$\\text{Time difference} = 82.5 \\times 4\\text{ minutes} = 330\\text{ minutes}$$
    $$330\\text{ minutes} = \\frac{330}{60} = 5\\text{ hours and } 30\\text{ minutes}$$</p>
    <p class="step"><strong>Step 4: Determine the time:</strong><br>
    Because India lies to the <em>East</em> of the Prime Meridian, the sun rises earlier here, so Indian time is ahead (+):<br>
    $$\\text{Time in India} = 12:00\\text{ PM (noon)} + 5\\text{ hrs } 30\\text{ mins} = 5:30\\text{ PM}$$</p>`,
    'CBSE Marking Scheme: 1 Mark for stating 0° and 82.5° E meridians + 1 Mark for calculation: 82.5 × 4 = 330 mins = 5 hr 30 min + 1 Mark for adding to 12:00 PM to get 5:30 PM.'
  )}

  ${qCard(
    'c6sst-ch1-q3',
    'Q3',
    'Why Do We Need Symbols and Colours on a Map?',
    'Short',
    'Why do we need symbols and colours on a map? Why can’t we just draw actual objects like real buildings, trees, and rivers?',
    `<p class="step"><strong>1. Space Limitation on Flat Paper:</strong><br>
    It is impossible to draw the actual size and shape of houses, bridges, trees, railway tracks, or post offices on a small sheet of paper.</p>
    <p class="step"><strong>2. Universal Clarity and Easy Reading:</strong><br>
    By using standardized symbols (letters, shades, lines) and conventional colours, huge amounts of geographic information can be communicated clearly in limited space.</p>
    <p class="step"><strong>3. International Convention:</strong><br>
    Maps use globally agreed conventional colours:
    • <strong>Blue:</strong> Water bodies (rivers, lakes, oceans)<br>
    • <strong>Brown:</strong> Mountains and hills<br>
    • <strong>Yellow:</strong> Plateaus and dry uplands<br>
    • <strong>Green:</strong> Plains and agricultural lands</p>`,
    'CBSE Marking Scheme: 1 Mark for space limitation reason + 1 Mark for conventional colours and universal comprehension.'
  )}

  ${qCard(
    'c6sst-ch1-q4',
    'Q4',
    'Difference between Local Time and Standard Time',
    'Compare',
    'Differentiate between Local Time and Standard Time. Why is standard time necessary for large nations?',
    `<table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Local Time</th>
          <th>Standard Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-weight:700;">Basis</td>
          <td>Calculated by the overhead position of the sun (solar noon) at a particular meridian.</td>
          <td>Adopted as the uniform legal time along a chosen central meridian of a whole country.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Variation</td>
          <td>Varies from one longitude to another (differs by 4 minutes per degree).</td>
          <td>Remains identical and uniform across the entire standard time zone.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Utility</td>
          <td>Used only for astronomical and local solar observations.</td>
          <td>Used to run national train timetables, airports, radio/TV broadcasts, and offices without chaos.</td>
        </tr>
      </tbody>
    </table>`,
    'CBSE Marking Scheme: 1 Mark for each point of contrast (Basis, Variation, Utility) - Total 3 Marks.'
  )}

  ${qCard(
    'c6sst-ch1-q5',
    'Q5',
    'What is a Grid and How Does It Help Locate Places?',
    'Short',
    'What is a grid? How does the network of parallels and meridians help us locate places on a globe or map?',
    `<p class="step"><strong>1. Definition:</strong><br>
    A <strong>grid</strong> is a network of intersecting horizontal lines (parallels of latitude) and vertical lines (meridians of longitude) drawn across maps and globes.</p>
    <p class="step"><strong>2. Function in Pinpointing Locations:</strong><br>
    Every specific location on Earth lies at the precise crossing point (intersection) of one parallel and one meridian. If we know the coordinates (latitude and longitude) of a place, we can find its exact position instantly. For example, knowing that Dhubri in Assam is located at 26° N latitude and 90° E longitude allows us to locate it exactly where the 26° N line intersects the 90° E line.</p>`,
    'CBSE Marking Scheme: 1 Mark for definition of grid + 1 Mark for explaining how coordinate intersection pinpoints exact locations.'
  )}

  ${qCard(
    'c6sst-ch1-q6',
    'Q6',
    'Difference in Local Time: New Delhi vs. Bengaluru',
    'Numerical',
    'New Delhi is located at approximately 29° N latitude and 77° E longitude. Bengaluru is located at approximately 13° N latitude and 77° E longitude. What is the difference in local time between these two cities? Give reasons.',
    `<p class="step"><strong>Answer: There is ZERO (0 minutes) difference in local time between New Delhi and Bengaluru.</strong></p>
    <p class="step"><strong>Reason:</strong><br>
    • Local time depends entirely on <strong>meridians of longitude</strong>, NOT on parallels of latitude.<br>
    • Both New Delhi (29° N, <strong>77° E</strong>) and Bengaluru (13° N, <strong>77° E</strong>) lie on the exact same meridian of longitude (77° E).<br>
    • Since the sun crosses the 77° E meridian at the exact same instant along its entire length from north to south, both cities experience midday (solar noon) simultaneously.</p>`,
    'CBSE Marking Scheme: 1 Mark for stating 0 minutes difference + 2 Marks for explaining that local time depends on longitude, and both lie on 77° E.'
  )}

  ${qCard(
    'c6sst-ch1-q7',
    'Q7',
    'True / False Statements with Detailed Reasons',
    'Short',
    `State whether the following statements are True or False. Give valid geographical reasons for each:<br>
    (i) All parallels of latitude have the same length.<br>
    (ii) The length of a meridian of longitude is half the length of the Equator.<br>
    (iii) The South Pole has a latitude of 90° S.<br>
    (iv) Assam has the same local time as Indian Standard Time (IST).<br>
    (v) Time zones are roughly identical with meridians of longitude.<br>
    (vi) The Equator is a parallel of latitude.`,
    `<ul class="step-list">
      <li><strong>(i) False:</strong> Parallels of latitude are concentric circles whose circumferences decrease gradually from the Equator towards the poles, shrinking to a single point (0 km) at 90° N and 90° S.</li>
      <li><strong>(ii) True:</strong> The Equator is a complete great circle around the middle of the Earth (~40,075 km), whereas a meridian is a semicircle extending from the North Pole to the South Pole (~20,004 km), which is half the Equator's circumference.</li>
      <li><strong>(iii) True:</strong> Angular distance from the Equator (0°) to either pole is one-fourth of a circle (360° ÷ 4 = 90°). Thus, the South Pole is designated 90° S.</li>
      <li><strong>(iv) False:</strong> Assam lies along 92°–95° E, whereas IST is fixed along 82°30' E. Thus, the local solar time of Assam is around 40 to 50 minutes ahead of IST.</li>
      <li><strong>(v) True:</strong> Standard time zones are generally organized in longitudinal bands of approximately 15° each, corresponding to 1 hour of difference.</li>
      <li><strong>(vi) True:</strong> The Equator is the largest parallel of latitude (0°), serving as the starting reference line for measuring all other latitudes.</li>
    </ul>`,
    'CBSE Marking Scheme: 0.5 Mark for each correct True/False identification + 0.5 Mark for valid reason (Total 6 Marks).'
  )}

  ${qCard(
    'c6sst-ch1-q8',
    'Q8',
    'NCERT Crossword Puzzle: Complete Solved Grid',
    'Activity',
    `Solve the official NCERT crossword puzzle for Chapter 1 using the provided clues:<br>
    <strong>ACROSS:</strong><br>
    1. A sign or drawing that represents an object on a map.<br>
    4. A three-dimensional spherical model of the Earth.<br>
    5. The imaginary circle dividing the Earth into Northern and Southern hemispheres.<br>
    6. City in England through which the Prime Meridian passes.<br>
    8. A magnetic instrument used by navigators to find directions.<br>
    10. Angular distance measured north or south of the Equator.<br>
    <strong>DOWN:</strong><br>
    2. Angular distance measured east or west of the Prime Meridian.<br>
    3. A set of numbers (latitude and longitude) that pinpoints a location.<br>
    6. Network of intersecting parallels and meridians.<br>
    7. Standard time followed uniformly throughout India.<br>
    9. The northernmost and southernmost extremities of the Earth’s axis.<br>
    11. Greenwich Mean Time abbreviation.`,
    `<p class="step"><strong>Solved Crossword Answers:</strong></p>
    <table>
      <thead>
        <tr>
          <th>Clue # &amp; Direction</th>
          <th>Textbook Clue Description</th>
          <th>Solved Word</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>1 ACROSS</strong></td><td>Sign or drawing that represents an object on a map</td><td><strong>SYMBOL</strong></td></tr>
        <tr><td><strong>4 ACROSS</strong></td><td>Three-dimensional model of the Earth</td><td><strong>GLOBE</strong></td></tr>
        <tr><td><strong>5 ACROSS</strong></td><td>0° latitude dividing Earth into two hemispheres</td><td><strong>EQUATOR</strong></td></tr>
        <tr><td><strong>6 ACROSS</strong></td><td>City through which the Prime Meridian passes</td><td><strong>GREENWICH</strong></td></tr>
        <tr><td><strong>8 ACROSS</strong></td><td>Magnetic instrument used to find directions</td><td><strong>COMPASS</strong></td></tr>
        <tr><td><strong>10 ACROSS</strong></td><td>Distance north or south of the Equator</td><td><strong>LATITUDE</strong></td></tr>
        <tr><td><strong>2 DOWN</strong></td><td>Distance east or west of Prime Meridian</td><td><strong>LONGITUDE</strong></td></tr>
        <tr><td><strong>3 DOWN</strong></td><td>Pair of numbers pinpointing location</td><td><strong>COORDINATES</strong></td></tr>
        <tr><td><strong>6 DOWN</strong></td><td>Network of parallels and meridians</td><td><strong>GRID</strong></td></tr>
        <tr><td><strong>7 DOWN</strong></td><td>Uniform time throughout India</td><td><strong>IST</strong></td></tr>
        <tr><td><strong>9 DOWN</strong></td><td>Northernmost and southernmost points</td><td><strong>POLES</strong></td></tr>
        <tr><td><strong>11 DOWN</strong></td><td>Greenwich Mean Time abbreviation</td><td><strong>GMT</strong></td></tr>
      </tbody>
    </table>`,
    'CBSE Marking Scheme: 0.5 Mark for each correctly identified crossword term.'
  )}

  ${qCard(
    'c6sst-ch1-q9',
    'Q9',
    'Heat Zones of the Earth & Torrid Zone Warmth',
    'Explain',
    'Name the three heat zones of the Earth. Why does the Torrid Zone receive the maximum amount of solar heat compared to other zones? [3 Marks]',
    `<p class="step"><strong>1. Three Heat Zones of the Earth:</strong><br>
    • <strong>Torrid Zone:</strong> The belt between the Tropic of Cancer (23½° N) and Tropic of Capricorn (23½° S).<br>
    • <strong>Temperate Zones:</strong> North Temperate Zone (between Tropic of Cancer and Arctic Circle) and South Temperate Zone (between Tropic of Capricorn and Antarctic Circle).<br>
    • <strong>Frigid Zones:</strong> North Frigid Zone (north of Arctic Circle) and South Frigid Zone (south of Antarctic Circle).</p>
    <p class="step"><strong>2. Reason for Maximum Heat in the Torrid Zone:</strong><br>
    The midday sun is directly <strong>overhead at least once a year</strong> at all latitudes in this zone. When the sun rays fall vertically, the heat energy is concentrated over a small surface area with minimum atmospheric dispersion. In contrast, in the Temperate and Frigid zones, rays always fall at a slant.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for naming all three heat zones + 1.5 Marks for explaining vertical rays and overhead midday sun.'
  )}

  ${qCard(
    'c6sst-ch1-q10',
    'Q10',
    'Competency-Based Question: Emergency Ship Navigation',
    'CBQ',
    '<strong>Competency-Based Question (CBQ):</strong><br>A distress call from a fishing vessel indicates coordinates 20° N latitude and 65° E longitude. Explain how the Indian Coast Guard rescue helicopter uses the Earth’s grid system to navigate directly to the vessel without visual landmarks.',
    `<p class="step"><strong>1. Using Latitude (20° N):</strong><br>
    The helicopter’s GPS system navigates along the parallel 20 degrees north of the Equator.</p>
    <p class="step"><strong>2. Using Longitude (65° E):</strong><br>
    The navigation system tracks the meridian 65 degrees east of the Prime Meridian in Greenwich.</p>
    <p class="step"><strong>3. Pinpointing the Intersection Point:</strong><br>
    Since lines of latitude and longitude intersect at a single unique mathematical point in the Arabian Sea, following these GPS coordinates guides the rescue crew directly to the vessel even in heavy fog or night darkness.</p>`,
    'CBSE Marking Scheme: 1 Mark for explaining latitude navigation + 1 Mark for longitude navigation + 1 Mark for pinpointing intersection.'
  )}
</section>`;

// ============================================================================
// CHAPTER 2: OCEANS AND CONTINENTS
// ============================================================================
const ch2Html = `<section class="chapter-section" id="ch2">
  <div class="chapter-header">
    <div class="ch-badge">2</div>
    <div class="chapter-header-info">
      <h2>Chapter 2: Oceans and Continents</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — 100% Complete Textbook Questions, The Big Questions, Let's Draw, Crossword &amp; CBSE Rubrics | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Geographical Concepts: Hydrosphere &amp; Lithosphere</div>
    <ul class="concept-list">
      <li><strong>The Blue Planet:</strong> Approximately <strong>71% of the Earth's surface is covered with water</strong> (the hydrosphere) and only <strong>29% is land</strong> (the lithosphere). Seen from space, water reflects sunlight, making Earth appear radiant blue.</li>
      <li><strong>The Seven Continents (in order of size):</strong>
        <ol>
          <li><strong>Asia:</strong> The largest continent, covering one-third of total landmass. Home to Mount Everest and the highest population.</li>
          <li><strong>Africa:</strong> The second-largest continent; the Equator, Tropic of Cancer, and Tropic of Capricorn all pass through it. Features the Sahara Desert and Nile River.</li>
          <li><strong>North America:</strong> Third-largest continent, completely in Northern and Western hemispheres. Connected to South America by the Isthmus of Panama.</li>
          <li><strong>South America:</strong> Mostly in the Southern Hemisphere. Contains the Amazon River basin and the Andes mountains.</li>
          <li><strong>Antarctica:</strong> A massive frozen continent completely south of the Antarctic Circle around the South Pole. Permanently covered in thick ice sheets.</li>
          <li><strong>Europe:</strong> Located west of Asia, separated by the Ural Mountains. Combined landmass is known as <em>Eurasia</em>.</li>
          <li><strong>Australia:</strong> The smallest continent, surrounded entirely by oceans (known as the <em>Island Continent</em>).</li>
        </ol>
      </li>
      <li><strong>The Five Major Oceans:</strong>
        <ul>
          <li><strong>Pacific Ocean:</strong> Largest and deepest; circular in shape; contains the Mariana Trench (11,022 m) and the volcanic "Ring of Fire".</li>
          <li><strong>Atlantic Ocean:</strong> Second-largest; distinctive 'S' shape; highly indented coastline makes it the busiest ocean for international trade.</li>
          <li><strong>Indian Ocean:</strong> The only ocean named after a country (India); roughly triangular in shape.</li>
          <li><strong>Southern Ocean:</strong> Surrounds the continent of Antarctica up to 60° S latitude.</li>
          <li><strong>Arctic Ocean:</strong> Smallest ocean, surrounding the North Pole within the Arctic Circle.</li>
        </ul>
      </li>
      <li><strong>Oceans and Life:</strong> Oceans regulate global climate by absorbing heat and circulating currents, provide marine food, generate over 50% of the Earth's oxygen via microscopic phytoplankton, and enable international maritime shipping.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Continents and Oceans Distribution -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 220" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Earth’s Surface Distribution: Land vs. Water</text>
      <!-- Pie Chart Representation -->
      <circle cx="160" cy="115" r="75" fill="#0284c7"/>
      <path d="M 160,115 L 160,40 A 75,75 0 0,1 231,142 Z" fill="#16a34a"/>
      <text x="130" y="125" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ffffff">71%</text>
      <text x="115" y="142" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#e0f2fe">Oceans (Water)</text>
      <text x="185" y="90" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">29%</text>
      <text x="180" y="105" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#f0fdf4">Land</text>

      <!-- Key Info Box on Right -->
      <rect x="290" y="45" width="250" height="145" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="305" y="68" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1">7 Continents (by size):</text>
      <text x="305" y="86" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">1. Asia &gt; 2. Africa &gt; 3. N. America</text>
      <text x="305" y="102" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">&gt; 4. S. America &gt; 5. Antarctica</text>
      <text x="305" y="118" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">&gt; 6. Europe &gt; 7. Australia</text>
      <text x="305" y="142" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1">5 Oceans (by size):</text>
      <text x="305" y="160" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">Pacific &gt; Atlantic &gt; Indian</text>
      <text x="305" y="176" font-family="system-ui, sans-serif" font-size="9.5" fill="#334155">&gt; Southern &gt; Arctic</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 2.1: Proportions of Oceans and Continents on Earth</div>
  </div>

  <!-- ================= SECTION A: THE BIG QUESTIONS ================= -->
  <div class="ex-div">
    <div class="ex-heading">The Big Questions (Chapter Inquiry &amp; Openers)</div>
  </div>

  ${qCard(
    'c6sst-ch2-bq1',
    'Big Q1',
    'What Are Oceans and Continents, and How Are They Distributed?',
    'Concept',
    'What are oceans and continents? List their names and describe their global distribution across the Earth.',
    `<p class="step"><strong>1. Definitions:</strong><br>
    • <strong>Continents:</strong> The vast, continuous landmasses that rise above sea level, making up 29% of the Earth's surface.<br>
    • <strong>Oceans:</strong> The massive, continuous bodies of saline water that cover 71% of the Earth's surface.</p>
    <p class="step"><strong>2. Global Distribution:</strong><br>
    • There are <strong>seven continents</strong>: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.<br>
    • There are <strong>five oceans</strong>: Pacific, Atlantic, Indian, Southern, and Arctic.<br>
    • The distribution is unequal: The <em>Northern Hemisphere</em> contains the majority of the landmass (Land Hemisphere), whereas the <em>Southern Hemisphere</em> is dominated by vast oceans (Water Hemisphere).</p>`,
    'CBSE Marking Scheme: 1 Mark for definitions of continents & oceans + 1 Mark for listing all 7 continents & 5 oceans + 1 Mark for northern vs southern hemisphere distribution.'
  )}

  ${qCard(
    'c6sst-ch2-bq2',
    'Big Q2',
    'How Do Oceans and Continents Impact Life and Climate?',
    'Explain',
    'In what ways do oceans and continents impact life on Earth, including human life, weather, and the global climate?',
    `<p class="step"><strong>1. Climate &amp; Weather Regulation:</strong><br>
    Oceans absorb solar radiation and distribute heat across the planet through marine currents. They provide the moisture that evaporates to form clouds and life-giving rainfall (the Water Cycle). Without oceans, continental interiors would experience extreme, uninhabitable temperature swings.</p>
    <p class="step"><strong>2. Production of Oxygen:</strong><br>
    Tiny marine plants called <em>phytoplankton</em> produce over 50% of the Earth's oxygen through photosynthesis.</p>
    <p class="step"><strong>3. Human Livelihoods &amp; Trade:</strong><br>
    Oceans supply millions of tons of seafood, provide petroleum and salt resources, and serve as natural global shipping highways carrying over 80% of world trade.</p>`,
    'CBSE Marking Scheme: 1 Mark for climate/water cycle regulation + 1 Mark for oxygen production via phytoplankton + 1 Mark for human food, minerals & trade.'
  )}

  <!-- ================= SECTION B: LET'S EXPLORE IN-TEXT ACTIVITIES ================= -->
  <div class="ex-div">
    <div class="ex-heading">Let's Explore &amp; In-Text Thought Experiments</div>
  </div>

  ${qCard(
    'c6sst-ch2-le1',
    'Activity 1',
    'Why Is There Water Scarcity When Earth Is 71% Water?',
    'Explain',
    '<strong>In-Text "Think About" Activity:</strong><br>If approximately 71% of the Earth’s surface is covered with water, why do people around the world frequently suffer from acute water scarcity? [3 Marks]',
    `<p class="step"><strong>1. High Salinity of Ocean Water:</strong><br>
    About <strong>97.5%</strong> of all water on Earth is saline (salty) ocean water, which cannot be directly drunk, used for irrigating crops, or used in manufacturing.</p>
    <p class="step"><strong>2. Freshwater Is Locked in Ice Caps:</strong><br>
    Only <strong>2.5%</strong> of the planet's water is freshwater. Out of this tiny fraction, nearly <strong>70% is frozen</strong> in the ice sheets and glaciers of Antarctica, the Arctic, and high mountain ranges, making it inaccessible.</p>
    <p class="step"><strong>3. Accessible Freshwater Is Very Limited and Polluted:</strong><br>
    Less than 1% of all freshwater is available in rivers, lakes, and underground aquifers. Due to over-extraction, population growth, and pollution of freshwater bodies, human communities face severe water scarcity.</p>`,
    'CBSE Marking Scheme: 1 Mark for stating 97.5% is saline ocean water + 1 Mark for ~70% of freshwater locked in glaciers + 1 Mark for uneven distribution, pollution & over-extraction.'
  )}

  ${qCard(
    'c6sst-ch2-le2',
    'Activity 2',
    'Land Hemisphere vs. Water Hemisphere',
    'Analysis',
    '<strong>In-Text Activity:</strong><br>Why is the Northern Hemisphere called the "Land Hemisphere" and the Southern Hemisphere called the "Water Hemisphere"?',
    `<p class="step"><strong>1. The Northern Hemisphere (Land Hemisphere):</strong><br>
    Over <strong>67% (two-thirds) of the Earth’s total landmass</strong> lies in the Northern Hemisphere, including the vast expanses of North America, Europe, Asia, and northern Africa.</p>
    <p class="step"><strong>2. The Southern Hemisphere (Water Hemisphere):</strong><br>
    In the Southern Hemisphere, approximately <strong>81% of the surface is covered by water</strong>, and only 19% is land (parts of South America, southern Africa, Australia, and Antarctica). Due to this overwhelming ocean dominance, it is termed the Water Hemisphere.</p>`,
    'CBSE Marking Scheme: 1 Mark for Northern Hemisphere containing two-thirds of land + 1 Mark for Southern Hemisphere being 81% ocean water.'
  )}

  <!-- ================= SECTION C: QUESTIONS, ACTIVITIES AND PROJECTS ================= -->
  <div class="ex-div">
    <div class="ex-heading">Questions, activities and projects (Official NCERT Textbook Exercises)</div>
  </div>

  ${qCard(
    'c6sst-ch2-q1',
    'Q1',
    'Definitions: Continent, Ocean, and Island',
    'Short',
    'Define the following terms with appropriate examples:<br>(a) Continent<br>(b) Ocean<br>(c) Island [3 Marks]',
    `<p class="step"><strong>(a) Continent:</strong><br>
    A continent is a very large, continuous landmass separated from other landmasses by vast bodies of water or mountain systems.<br>
    <em>Example:</em> Asia (the largest continent) and Africa.</p>
    <p class="step"><strong>(b) Ocean:</strong><br>
    An ocean is a vast, interconnected body of saline water that separates continents and covers most of the Earth's surface.<br>
    <em>Example:</em> Pacific Ocean (largest and deepest) and Indian Ocean.</p>
    <p class="step"><strong>(c) Island:</strong><br>
    An island is a piece of land completely surrounded by water on all sides, smaller than a continent.<br>
    <em>Example:</em> Greenland (the world's largest island), Sri Lanka, and the Andaman &amp; Nicobar Islands.</p>`,
    'CBSE Marking Scheme: 1 Mark for each definition with an accurate geographical example (Total 3 Marks).'
  )}

  ${qCard(
    'c6sst-ch2-q2',
    'Q2',
    '"Let Us Draw": Ranking Continents by Size',
    'Activity',
    'List all seven continents of the world in descending order (largest to smallest) and ascending order (smallest to largest) of their land area.',
    `<p class="step"><strong>1. Descending Order (Largest to Smallest):</strong></p>
    <ol class="step-list">
      <li><strong>Asia</strong> (~44.6 million sq km) — Largest continent</li>
      <li><strong>Africa</strong> (~30.4 million sq km)</li>
      <li><strong>North America</strong> (~24.7 million sq km)</li>
      <li><strong>South America</strong> (~17.8 million sq km)</li>
      <li><strong>Antarctica</strong> (~14.2 million sq km)</li>
      <li><strong>Europe</strong> (~10.2 million sq km)</li>
      <li><strong>Australia</strong> (~8.6 million sq km) — Smallest continent</li>
    </ol>
    <p class="step"><strong>2. Ascending Order (Smallest to Largest):</strong><br>
    Australia &rarr; Europe &rarr; Antarctica &rarr; South America &rarr; North America &rarr; Africa &rarr; Asia.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for accurate descending order + 1.5 Marks for accurate ascending sequence.'
  )}

  ${qCard(
    'c6sst-ch2-q3',
    'Q3',
    'Hemispheric Location of the Five Major Oceans',
    'Short',
    'Identify and describe which hemispheres each of the five major oceans are located in.',
    `<ul class="step-list">
      <li><strong>1. Pacific Ocean:</strong> Spans both the <strong>Northern and Southern Hemispheres</strong>, as well as both the <strong>Eastern and Western Hemispheres</strong> (extending across the 180° meridian).</li>
      <li><strong>2. Atlantic Ocean:</strong> Stretches from the Arctic to Antarctica, lying across both the <strong>Northern and Southern Hemispheres</strong> in the Western/Eastern boundary.</li>
      <li><strong>3. Indian Ocean:</strong> Lies predominantly in the <strong>Eastern Hemisphere</strong>, with most of its waters in the <strong>Southern Hemisphere</strong> and its northern reach in the <strong>Northern Hemisphere</strong>.</li>
      <li><strong>4. Southern Ocean:</strong> Located entirely in the <strong>Southern Hemisphere</strong>, surrounding Antarctica south of 60° S latitude.</li>
      <li><strong>5. Arctic Ocean:</strong> Located entirely in the <strong>Northern Hemisphere</strong> around the North Pole.</li>
    </ul>`,
    'CBSE Marking Scheme: 0.5 Mark for correctly identifying hemisphere for each ocean (Total 2.5–3 Marks).'
  )}

  ${qCard(
    'c6sst-ch2-q4',
    'Q4',
    'NCERT Crossword Puzzle: Chapter 2 Solved',
    'Activity',
    `Solve the official NCERT crossword puzzle for Chapter 2 using the clues provided below:<br>
    <strong>ACROSS:</strong><br>
    1. Gas produced in huge quantities by marine phytoplankton.<br>
    3. A large, continuous landmass on the Earth’s surface.<br>
    6. The combined continuous landmass of Europe and Asia.<br>
    8. Non-biodegradable synthetic waste polluting our oceans.<br>
    10. The frozen southernmost continent around the South Pole.<br>
    <strong>DOWN:</strong><br>
    2. The largest island in the world.<br>
    4. A giant sea wave generated by an undersea earthquake.<br>
    5. The smallest continent, often called the island continent.<br>
    7. The largest and deepest ocean on Earth.<br>
    9. A piece of land surrounded by water on all sides.`,
    `<p class="step"><strong>Solved Crossword Grid:</strong></p>
    <table>
      <thead>
        <tr>
          <th>Clue # &amp; Direction</th>
          <th>Clue Description</th>
          <th>Solved Word</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>1 ACROSS</strong></td><td>Gas produced by ocean phytoplankton</td><td><strong>OXYGEN</strong></td></tr>
        <tr><td><strong>3 ACROSS</strong></td><td>Large continuous landmass on Earth</td><td><strong>CONTINENT</strong></td></tr>
        <tr><td><strong>6 ACROSS</strong></td><td>Combined landmass of Europe and Asia</td><td><strong>EURASIA</strong></td></tr>
        <tr><td><strong>8 ACROSS</strong></td><td>Synthetic waste polluting our oceans</td><td><strong>PLASTIC</strong></td></tr>
        <tr><td><strong>10 ACROSS</strong></td><td>Frozen southernmost continent</td><td><strong>ANTARCTICA</strong></td></tr>
        <tr><td><strong>2 DOWN</strong></td><td>The largest island in the world</td><td><strong>GREENLAND</strong></td></tr>
        <tr><td><strong>4 DOWN</strong></td><td>Destructive sea wave caused by undersea earthquake</td><td><strong>TSUNAMI</strong></td></tr>
        <tr><td><strong>5 DOWN</strong></td><td>The smallest island continent</td><td><strong>AUSTRALIA</strong></td></tr>
        <tr><td><strong>7 DOWN</strong></td><td>The largest and deepest ocean</td><td><strong>PACIFIC</strong></td></tr>
        <tr><td><strong>9 DOWN</strong></td><td>Piece of land surrounded by water on all sides</td><td><strong>ISLAND</strong></td></tr>
      </tbody>
    </table>`,
    'CBSE Marking Scheme: 0.5 Mark for each correctly identified crossword term.'
  )}

  ${qCard(
    'c6sst-ch2-q5',
    'Q5',
    'Why is Earth Called the "Blue Planet"? Ocean Roles',
    'Short',
    'Why is Earth known as the "Blue Planet"? Explain two critical functions of oceans in supporting life on Earth.',
    `<p class="step"><strong>1. Why Called the Blue Planet:</strong><br>
    Nearly 71% of Earth’s surface is covered with water. When viewed from space, the vast oceans reflect blue sunlight, giving the planet a luminous blue appearance.</p>
    <p class="step"><strong>2. Two Critical Roles of Oceans:</strong><br>
    • <strong>Climate Thermostat:</strong> Oceans absorb excessive solar heat at the Equator and transport it towards the poles via warm ocean currents (like the Gulf Stream), making coastal climates moderate and habitable.<br>
    • <strong>Water Cycle Driver:</strong> Solar evaporation from ocean waters forms rain clouds that supply freshwater to all continents for agriculture and life.</p>`,
    'CBSE Marking Scheme: 1 Mark for explaining "Blue Planet" + 2 Marks for stating and explaining climate thermostat and water cycle driver.'
  )}

  ${qCard(
    'c6sst-ch2-q6',
    'Q6',
    'Pacific Ocean Features: Mariana Trench & Ring of Fire',
    'CBQ',
    '<strong>Competency-Based Question (CBQ):</strong><br>What makes the Pacific Ocean unique among Earth\'s oceans? Explain the significance of the Mariana Trench and the Pacific "Ring of Fire".',
    `<p class="step"><strong>1. Enormous Size:</strong><br>
    The Pacific Ocean covers over 30% of Earth’s surface—greater than all the continents combined!</p>
    <p class="step"><strong>2. The Mariana Trench:</strong><br>
    Located in the western Pacific, the Mariana Trench contains the deepest known point on Earth, the <strong>Challenger Deep</strong> (~11,022 metres deep). If Mount Everest (8,848 m) were placed inside it, its peak would still be submerged under more than 2 kilometres of water!</p>
    <p class="step"><strong>3. The "Ring of Fire":</strong><br>
    The horseshoe-shaped rim around the Pacific basin where tectonic plates collide. It contains over <strong>75% of the world’s active volcanoes</strong> and generates <strong>90% of the world’s earthquakes</strong>.</p>`,
    'CBSE Marking Scheme: 1 Mark for Pacific size + 1 Mark for Mariana Trench (11,022 m) + 1 Mark for Ring of Fire (volcanoes & earthquakes).'
  )}
</section>`;

// ============================================================================
// CHAPTER 3: LANDFORMS AND LIFE
// ============================================================================
const ch3Html = `<section class="chapter-section" id="ch3">
  <div class="chapter-header">
    <div class="ch-badge">3</div>
    <div class="chapter-header-info">
      <h2>Chapter 3: Landforms and Life</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — 100% Complete Textbook Questions, The Big Questions, Travelogue Chhota Nagpur to Almora &amp; CBSE Rubrics | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Geological Concepts: Major Landforms &amp; Human Life</div>
    <ul class="concept-list">
      <li><strong>Earth's Geological Processes:</strong> Landforms are shaped by two forces:
        <ul>
          <li><strong>Internal Processes:</strong> Upliftment, folding, and sinking of the earth’s crust caused by tectonic movements (e.g., formation of the Himalayas).</li>
          <li><strong>External Processes:</strong> Continuous wearing down (erosion) and rebuilding (deposition) of the land surface by running water, wind, and glaciers.</li>
        </ul>
      </li>
      <li><strong>Major Landforms:</strong>
        <ul>
          <li><strong>Mountains:</strong> Natural elevations rising steeply above surrounding land with high peaks and cold climates. Types: <em>Fold Mountains</em> (Himalayas, Alps), <em>Block Mountains</em> (Vindhyas, Vosges), and <em>Volcanic Mountains</em> (Mt Kilimanjaro, Mt Fuji).</li>
          <li><strong>Plateaus:</strong> Elevated flat-topped tablelands standing sharply above surrounding areas (e.g., Deccan Plateau, Chhota Nagpur Plateau, Tibetan Plateau). They are storehouses of rich mineral deposits.</li>
          <li><strong>Plains:</strong> Vast expanses of flat, low-lying land (usually not more than 200 m above sea level). Formed by sediment deposition (alluvium) by rivers and their tributaries (e.g., Northern Indian Gangetic Plain).</li>
        </ul>
      </li>
      <li><strong>Landforms Dictate Life:</strong> Human occupations, houses, food, clothing, and transport networks are directly shaped by landforms. Plains support dense populations and farming; mountains foster terrace cultivation, forestry, and tourism; plateaus sustain mining and heavy industries.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Mountains, Plateaus and Plains -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Comparative Profile of Major Landforms</text>
      <!-- Mountain -->
      <polygon points="50,180 140,50 210,180" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <polygon points="120,77 140,50 160,77" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <text x="135" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#92400e">Mountain</text>
      <text x="135" y="125" font-family="system-ui, sans-serif" font-size="9.5" fill="#b45309">Steep slopes, snow peak</text>

      <!-- Plateau -->
      <polygon points="210,180 230,110 350,110 370,180" fill="#fed7aa" stroke="#ea580c" stroke-width="2.5"/>
      <text x="290" y="135" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#9a3412">Plateau</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="9.5" fill="#c2410c">Tableland, rich minerals</text>

      <!-- Plain -->
      <polygon points="370,180 370,165 520,165 520,180" fill="#bbf7d0" stroke="#16a34a" stroke-width="2.5"/>
      <text x="445" y="155" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#166534">Plain</text>
      <text x="445" y="175" font-family="system-ui, sans-serif" font-size="9.5" fill="#15803d">Flat, fertile alluvium</text>

      <line x1="20" y1="180" x2="540" y2="180" stroke="#475569" stroke-width="2"/>
      <text x="280" y="198" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="middle">Base Line / Sea Level Reference</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 3.1: Profile view of Mountain Peak, Elevated Plateau and Flat Plain</div>
  </div>

  <!-- ================= SECTION A: THE BIG QUESTIONS ================= -->
  <div class="ex-div">
    <div class="ex-heading">The Big Questions (Chapter Inquiry &amp; Openers)</div>
  </div>

  ${qCard(
    'c6sst-ch3-bq1',
    'Big Q1',
    'What Are the Major Landforms and How Are They Formed?',
    'Concept',
    'What are the three major landforms found on Earth? Explain the internal and external geological forces responsible for creating and altering them.',
    `<p class="step"><strong>1. Three Major Landforms:</strong><br>
    The three principal landforms are <strong>Mountains</strong> (high conical elevations), <strong>Plateaus</strong> (flat-topped elevated tablelands), and <strong>Plains</strong> (broad, low-lying flatlands).</p>
    <p class="step"><strong>2. Geological Forces:</strong><br>
    • <strong>Internal Forces:</strong> Movements within the Earth’s mantle cause tectonic plates to collide, buckle, or fracture, uplifting crustal rock to build mountains and plateaus.<br>
    • <strong>External Forces:</strong> Weathering, river erosion, wind, and glaciers wear down rocks and carry sediment downhill to deposit it in low valleys, carving river valleys and laying down vast alluvial plains.</p>`,
    'CBSE Marking Scheme: 1 Mark for naming the 3 landforms + 1 Mark for internal tectonic forces + 1 Mark for external erosion and deposition forces.'
  )}

  ${qCard(
    'c6sst-ch3-bq2',
    'Big Q2',
    'How Do Landforms Shape Human Occupations and Culture?',
    'Explain',
    'How do different landforms shape human culture, occupations, houses, and lifestyle adaptations?',
    `<p class="step"><strong>1. In Plains:</strong><br>
    Abundant water and fertile alluvial soils make agriculture the main occupation. Flat land allows roads, rail tracks, and canal networks to be built easily, fostering dense human settlements, bustling trade, and industrial cities.</p>
    <p class="step"><strong>2. In Mountains:</strong><br>
    Steep slopes limit farming, leading people to carve step-like <em>terraces</em> on hillsides. Animal rearing (sheep/goats for wool like Pashmina), fruit orchards (apples, walnuts), and seasonal tourism are major livelihoods. Houses have sloping roofs to shed snow and rain.</p>
    <p class="step"><strong>3. In Plateaus:</strong><br>
    Rocky soil limits farming, but enormous mineral riches (iron ore, coal, bauxite) make mining, stone quarrying, and metal manufacturing industries the backbone of life.</p>`,
    'CBSE Marking Scheme: 1 Mark each for human lifestyle adaptation in Plains, Mountains, and Plateaus (Total 3 Marks).'
  )}

  <!-- ================= SECTION C: QUESTIONS, ACTIVITIES AND PROJECTS ================= -->
  <div class="ex-div">
    <div class="ex-heading">Questions, activities and projects (Official NCERT Textbook Exercises)</div>
  </div>

  ${qCard(
    'c6sst-ch3-q1',
    'Q1',
    'In What Type of Landform Is Your Town/Village Located?',
    'Short',
    'In what type of landform is your town/village/city located? Which physical features mentioned in this chapter do you observe around you? [3 Marks]',
    `<p class="step"><strong>Model Answer (for Students living in Northern/Gangetic Plains - e.g., Delhi, Lucknow, Patna):</strong><br>
    • <strong>Landform:</strong> My city is located in a <strong>Plain</strong> (the Indo-Gangetic Plain).<br>
    • <strong>Features observed:</strong> The ground is flat and level without steep hills. The soil is fertile river-deposited silt (alluvium). Wide perennial rivers (like the Yamuna/Ganga) flow nearby. Roads and railways connect everywhere easily, and fields are intensively cultivated with wheat, rice, and vegetables.</p>
    <p class="step"><strong>Alternative (for Mountainous Region - e.g., Shimla, Almora):</strong><br>
    Located in <strong>Mountains</strong> with steep slopes, cool pine forests, terrace fields, winding narrow roads, and houses with sloping tin/slate roofs.</p>
    <p class="step"><strong>Alternative (for Plateau Region - e.g., Ranchi, Nagpur):</strong><br>
    Located on a <strong>Plateau</strong> with undulating rocky terrain, red soil, waterfalls, and nearby open-cast coal/iron mines.</p>`,
    'CBSE Marking Scheme: 1 Mark for identifying the correct local landform + 2 Marks for describing specific observable features (soil, slope, vegetation, transport).'
  )}

  ${qCard(
    'c6sst-ch3-q2',
    'Q2',
    'Journey from Chhota Nagpur to Prayagraj and Almora',
    'Long Answer',
    'Let us go back to our initial trip from Chhota Nagpur to Prayagraj and Almora. Describe the three distinct landforms you came across on the way, explaining their topography, climate, and human activities. [4 Marks]',
    `<p class="step"><strong>1. Chhota Nagpur (Jharkhand) — Plateau:</strong><br>
    • <strong>Topography:</strong> Elevated tableland standing high above sea level, with rocky outcrops and undulating terrain.<br>
    • <strong>Economy &amp; Life:</strong> Known as the mineral heartland of India. Rich in coal, iron ore, and mica. Dense forests, tribal settlements, mining towns, and steel factories predominate.</p>
    <p class="step"><strong>2. Prayagraj (Uttar Pradesh) — Plain:</strong><br>
    • <strong>Topography:</strong> Broad, flat, low-lying land situated at the confluence (Sangam) of the Ganga and Yamuna rivers.<br>
    • <strong>Economy &amp; Life:</strong> Highly fertile alluvial soil supporting intensive farming (wheat, sugarcane, rice). Extremely dense human population, major pilgrimage site, and dense network of railway junctions and highways.</p>
    <p class="step"><strong>3. Almora (Uttarakhand) — Mountain:</strong><br>
    • <strong>Topography:</strong> High altitude, rugged mountain ranges with steep slopes and deep river valleys in the Kumaon Himalayas.<br>
    • <strong>Economy &amp; Life:</strong> Cooler climate, terraced farms, fruit orchards (apples, plums), pine and oak forests, and tourism. Houses built with stones and sloping roofs.</p>`,
    'CBSE Marking Scheme: 1 Mark for Chhota Nagpur (Plateau) + 1.5 Marks for Prayagraj (Plain) + 1.5 Marks for Almora (Mountain) detailing topography and human activities.'
  )}

  ${qCard(
    'c6sst-ch3-q3',
    'Q3',
    'Famous Pilgrimage Centers and Their Landforms',
    'Activity',
    'List a few famous pilgrimage spots in India along with the landforms in which they are found. Why did elevated landforms often attract spiritual seekers?',
    `<p class="step"><strong>Table of Pilgrimage Centers &amp; Landforms:</strong></p>
    <table>
      <thead>
        <tr>
          <th>Pilgrimage Center</th>
          <th>State</th>
          <th>Landform Type</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Badrinath &amp; Kedarnath</strong></td><td>Uttarakhand</td><td>High Mountains (Himalayas)</td></tr>
        <tr><td><strong>Amarnath Cave</strong></td><td>Jammu &amp; Kashmir</td><td>High Mountains (Himalayas)</td></tr>
        <tr><td><strong>Varanasi &amp; Haridwar</strong></td><td>UP / Uttarakhand</td><td>Plains (Ganga River bank)</td></tr>
        <tr><td><strong>Amritsar (Golden Temple)</strong></td><td>Punjab</td><td>Plains</td></tr>
        <tr><td><strong>Tirupati (Tirumala)</strong></td><td>Andhra Pradesh</td><td>Hills / Elevated Plateau (Seshachalam Hills)</td></tr>
        <tr><td><strong>Mount Abu (Dilwara Temples)</strong></td><td>Rajasthan</td><td>Mountain / Hill Range (Aravalli)</td></tr>
      </tbody>
    </table>
    <p class="step"><strong>Why Elevated Landforms Attracted Seekers:</strong><br>
    Mountains and elevated hills offered serene silence, purity of nature, isolation from chaotic city life, and magnificent vistas that inspired deep spiritual contemplation and meditation.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for classifying pilgrimage centers correctly + 1.5 Marks for explaining reasons why mountains attracted hermits and seekers.'
  )}

  ${qCard(
    'c6sst-ch3-q4',
    'Q4',
    'Tabular Comparison: Mountains vs. Plateaus vs. Plains',
    'Compare',
    'Draw a comprehensive comparison table between Mountains, Plateaus, and Plains across five key geographical parameters. [5 Marks]',
    `<table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Mountains</th>
          <th>Plateaus</th>
          <th>Plains</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-weight:700;">Elevation &amp; Shape</td>
          <td>Very high, conical peak with narrow summit and steep slopes.</td>
          <td>Elevated flat-topped tableland with one or more steep sides.</td>
          <td>Low-lying flat land, generally not more than 200 m above sea level.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Soil &amp; Fertility</td>
          <td>Thin, stony soil layers; prone to soil erosion.</td>
          <td>Medium fertility; often rich in black volcanic soil or red soil.</td>
          <td>Deep, extremely fertile alluvial soil deposited by rivers.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Agricultural Suitability</td>
          <td>Difficult; practiced on carved terraces or narrow river valleys.</td>
          <td>Moderate; suitable for drought-resistant crops, cotton, pulses.</td>
          <td>Highly suitable; grain bowls of nations with extensive canal irrigation.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Mineral Wealth</td>
          <td>Limited mineral extraction due to rugged terrain.</td>
          <td>Extremely rich in minerals (iron ore, coal, bauxite, gold).</td>
          <td>Scarce in minerals, but rich in fertile soils and groundwater.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Population Density</td>
          <td>Very sparse to moderate due to harsh climate and tough transport.</td>
          <td>Moderate; concentrated around mining and industrial centers.</td>
          <td>Extremely dense; supports greatest human populations on Earth.</td>
        </tr>
      </tbody>
    </table>`,
    'CBSE Marking Scheme: 1 Mark for each accurate parameter compared across all three landforms (Total 5 Marks).'
  )}

  ${qCard(
    'c6sst-ch3-q5',
    'Q5',
    'Types of Mountains: Fold, Block, and Volcanic',
    'Explain',
    'Explain the three major types of mountains based on their mode of formation. Give two examples of each type from India and around the world.',
    `<p class="step"><strong>1. Fold Mountains:</strong><br>
    Formed when tectonic plates push against each other, causing layers of the Earth’s crust to compress and wrinkle into gigantic folds.<br>
    • <em>Young Fold Mountains:</em> Have rugged relief and high conical peaks (e.g., <strong>The Himalayas</strong> in Asia, <strong>The Alps</strong> in Europe).<br>
    • <em>Old Fold Mountains:</em> Worn down by erosion with rounded peaks (e.g., <strong>Aravalli Range</strong> in India, <strong>Appalachians</strong> in North America).</p>
    <p class="step"><strong>2. Block Mountains:</strong><br>
    Formed when large areas of the crust crack, fracture, and are displaced vertically along geological faults. The uplifted blocks are called <em>horsts</em> and the sunken valleys are called <em>grabens</em> (rift valleys).<br>
    • <em>Examples:</em> <strong>Vindhya and Satpura ranges</strong> in central India, <strong>Rhine Valley</strong> and <strong>Vosges mountain</strong> in Europe.</p>
    <p class="step"><strong>3. Volcanic Mountains:</strong><br>
    Formed by the buildup and cooling of molten magma, volcanic ash, and lava erupting from the Earth’s interior through a vent.<br>
    • <em>Examples:</em> <strong>Mount Kilimanjaro</strong> in Africa, <strong>Mount Fuji</strong> in Japan, and <strong>Barren Island</strong> in the Andaman Sea (India).</p>`,
    'CBSE Marking Scheme: 1 Mark for Fold Mountains with examples + 1 Mark for Block Mountains with horst/graben concept + 1 Mark for Volcanic Mountains with examples.'
  )}

  ${qCard(
    'c6sst-ch3-q6',
    'Q6',
    'Why Are Plains the Most Densely Populated Landforms?',
    'Short',
    'Why are plains the most densely populated landforms on Earth? Give three reasons. [3 Marks]',
    `<p class="step"><strong>1. Highly Fertile Alluvial Soils:</strong><br>
    Perennial rivers carry nutrient-rich silt from mountains and deposit it across floodplains, providing ideal conditions for bumper harvests of rice, wheat, and pulses.</p>
    <p class="step"><strong>2. Ease of Constructing Infrastructure:</strong><br>
    The flat surface makes it very inexpensive and convenient to build road networks, railways, canals, factories, and residential colonies without tunneling or bridge-building through mountains.</p>
    <p class="step"><strong>3. Abundant Perennial Water &amp; Pleasant Climate:</strong><br>
    Plains are traversed by major freshwater river systems, ensuring steady supplies for drinking, irrigation, navigation, and household needs.</p>`,
    'CBSE Marking Scheme: 1 Mark each for fertile soil/agriculture, transport/construction ease, and abundant water supply.'
  )}
</section>`;

// ============================================================================
// CHAPTER 4: TIMELINE AND SOURCES OF HISTORY
// ============================================================================
const ch4Html = `<section class="chapter-section" id="ch4">
  <div class="chapter-header">
    <div class="ch-badge">4</div>
    <div class="chapter-header-info">
      <h2>Chapter 4: Timeline and Sources of History</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — 100% Complete Textbook Questions, The Big Questions, Family History Project &amp; CBSE Rubrics | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Historical Concepts: Dating, Timelines &amp; Evidence</div>
    <ul class="concept-list">
      <li><strong>What is History?</strong> History is the systematic inquiry into the human past, based on verifiable evidence. Historians investigate what people did, ate, wore, believed, and built over centuries.</li>
      <li><strong>Measuring Historical Time (Dating System):</strong>
        <ul>
          <li><strong>BCE (Before Common Era):</strong> Years before the birth of Jesus Christ. Counted <em>backwards</em> towards zero (e.g., 2500 BCE is older than 500 BCE). Formerly known as BC (Before Christ).</li>
          <li><strong>CE (Common Era):</strong> Years from the birth of Christ onwards. Counted <em>forwards</em> (e.g., 2026 CE). Formerly known as AD (<em>Anno Domini</em> — "in the year of our Lord").</li>
          <li><strong>Circa ('c.' or 'ca.'):</strong> Latin word meaning "approximately" or "around" used when the exact date is uncertain (e.g., c. 1500 BCE).</li>
        </ul>
      </li>
      <li><strong>Two Main Branches of Historical Sources:</strong>
        <ul>
          <li><strong>Archaeological Sources (Material Clues):</strong> Physical artifacts dug up from the ground—pottery, tools, weapons, ornaments, terracotta toys, coins (numismatics), seals, and ancient buildings/monuments.</li>
          <li><strong>Literary Sources (Written Clues):</strong>
            <ul>
              <li><em>Manuscripts:</em> Hand-written records composed on palm leaves or the birch bark of Himalayan trees.</li>
              <li><em>Inscriptions:</em> Writings engraved on hard, durable surfaces like stone rocks, temple pillars, and copper plates (epigraphy).</li>
            </ul>
          </li>
        </ul>
      </li>
      <li><strong>Historians as Detectives:</strong> Just like detectives who collect fingerprints and footprints to reconstruct a crime, historians assemble scattered physical fragments and ancient texts to reconstruct past human life.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Historical Timeline and Sources of History -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Historical Timeline Representation (BCE vs. CE)</text>
      <!-- Timeline Axis -->
      <line x1="40" y1="90" x2="520" y2="90" stroke="#0284c7" stroke-width="3"/>
      <!-- Arrows -->
      <polygon points="40,85 25,90 40,95" fill="#0284c7"/>
      <polygon points="520,85 535,90 520,95" fill="#0284c7"/>
      <!-- Zero Point -->
      <circle cx="280" cy="90" r="6" fill="#dc2626"/>
      <text x="280" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#dc2626" text-anchor="middle">Year 1 (Reference)</text>

      <!-- BCE Side -->
      <line x1="140" y1="80" x2="140" y2="100" stroke="#0284c7" stroke-width="2"/>
      <text x="140" y="72" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">2500 BCE</text>
      <text x="140" y="115" font-family="system-ui, sans-serif" font-size="9.5" fill="#64748b" text-anchor="middle">Harappan Civilisation</text>
      <text x="140" y="130" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0284c7" text-anchor="middle">&larr; Counts Backwards</text>

      <!-- CE Side -->
      <line x1="420" y1="80" x2="420" y2="100" stroke="#0284c7" stroke-width="2"/>
      <text x="420" y="72" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">2026 CE</text>
      <text x="420" y="115" font-family="system-ui, sans-serif" font-size="9.5" fill="#64748b" text-anchor="middle">Present Day</text>
      <text x="420" y="130" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#16a34a" text-anchor="middle">Counts Forwards &rarr;</text>

      <!-- Labels -->
      <rect x="70" y="150" width="170" height="40" rx="6" fill="#f0f9ff" stroke="#0284c7" stroke-width="1"/>
      <text x="155" y="174" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">BCE: Before Common Era</text>
      <rect x="320" y="150" width="170" height="40" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1"/>
      <text x="405" y="174" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">CE: Common Era</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 4.1: Historical Timeline demonstrating BCE (backwards) and CE (forwards)</div>
  </div>

  <!-- ================= SECTION A: THE BIG QUESTIONS ================= -->
  <div class="ex-div">
    <div class="ex-heading">The Big Questions (Chapter Inquiry &amp; Openers)</div>
  </div>

  ${qCard(
    'c6sst-ch4-bq1',
    'Big Q1',
    'How Do We Measure and Organize Historical Time?',
    'Concept',
    'How do historians measure time? Explain how a timeline helps us understand the sequence and duration of past events using BCE and CE.',
    `<p class="step"><strong>1. Chronological Sequence:</strong><br>
    Historians arrange events in the order in which they occurred in time, a concept called <em>chronology</em>. Without a timeline, history would be an unordered jumble of stories.</p>
    <p class="step"><strong>2. BCE and CE System:</strong><br>
    • <strong>BCE (Before Common Era):</strong> Marks the years before the birth of Jesus Christ. As we go further back into the past, the numbers increase (e.g., 3000 BCE occurred before 2000 BCE).<br>
    • <strong>CE (Common Era):</strong> Marks the years from the birth of Christ onwards. The numbers increase towards the present (e.g., 1947 CE occurred before 2026 CE).<br>
    A timeline visually organizes these events along a single line, making the duration between two historical eras immediately understandable.</p>`,
    'CBSE Marking Scheme: 1 Mark for concept of chronology + 1 Mark for explaining BCE (backwards) and CE (forwards) + 1 Mark for visual timeline utility.'
  )}

  ${qCard(
    'c6sst-ch4-bq2',
    'Big Q2',
    'Why Are Historians and Archaeologists Like Detectives?',
    'Explain',
    'Why are historians and archaeologists often compared to detectives? How do they reconstruct the past from fragmentary clues?',
    `<p class="step"><strong>1. The Missing Witnesses:</strong><br>
    People who lived thousands of years ago are no longer around to answer questions directly. Therefore, historians must look for clues left behind in the soil, buildings, and writings.</p>
    <p class="step"><strong>2. Assembling Clues:</strong><br>
    Just like a detective investigates footprints, fingerprints, and diary notes:<br>
    • Archaeologists carefully excavate potsherds, charred seeds, bronze tools, and human skeletons from layers of earth.<br>
    • Epigraphists decipher inscriptions carved on stones and coins to identify kings, dates, and borders.<br>
    • Historians cross-examine different literary records to verify facts and piece together an accurate, objective narrative of the past.</p>`,
    'CBSE Marking Scheme: 1 Mark for comparing past evidence to detective clues + 2 Marks for examples of material excavation and cross-verifying inscriptions.'
  )}

  <!-- ================= SECTION C: QUESTIONS, ACTIVITIES AND PROJECTS ================= -->
  <div class="ex-div">
    <div class="ex-heading">Questions, activities and projects (Official NCERT Textbook Exercises)</div>
  </div>

  ${qCard(
    'c6sst-ch4-q1',
    'Q1',
    'Project: Writing Family and Village History',
    'Project',
    'How can you write the history of your family or your village? Describe the step-by-step method using oral, written, and material sources. [4 Marks]',
    `<p class="step"><strong>1. Using Oral Sources:</strong><br>
    • Conduct recorded interviews with grandparents, village elders, and elderly neighbours.<br>
    • Ask questions about their childhood, where the family originally migrated from, how schooling was done, which festivals were celebrated, and what major changes occurred in farming and transport.</p>
    <p class="step"><strong>2. Using Written Sources:</strong><br>
    • Collect old family diaries, handwritten letters, birth certificates, school mark sheets, land deed documents, ration cards, and family photo albums.<br>
    • Village records (panchayat registers, temple chronicles) provide written accounts of local developments.</p>
    <p class="step"><strong>3. Using Material Sources:</strong><br>
    • Inspect ancestral houses, old brass/copper cooking utensils, heirloom jewellery, traditional agricultural implements, old coins, and handwoven shawls.</p>
    <p class="step"><strong>4. Constructing the Narrative:</strong><br>
    Combine the oral interviews, written dates, and material heirlooms into a chronological family tree and illustrated booklet.</p>`,
    'CBSE Marking Scheme: 1 Mark for Oral sources (interviews) + 1 Mark for Written sources (letters/deeds) + 1 Mark for Material sources (heirlooms/utensils) + 1 Mark for constructing timeline/family tree.'
  )}

  ${qCard(
    'c6sst-ch4-q2',
    'Q2',
    'Manuscripts vs. Inscriptions: Durability and Differences',
    'Compare',
    'Differentiate between Manuscripts and Inscriptions. Which source is more durable and why? [3 Marks]',
    `<table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Manuscripts</th>
          <th>Inscriptions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-weight:700;">Material</td>
          <td>Written by hand on soft, perishable natural materials like dried palm leaves or birch bark (*bhurjapatra*).</td>
          <td>Engraved or etched onto hard, durable surfaces like stone rocks, iron pillars, or copper plates.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Durability</td>
          <td>Poor durability; easily destroyed by insects, fungi, moisture, or fire over time.</td>
          <td>Highly durable; survive undamaged for thousands of years in rain and wind.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Content</td>
          <td>Religious poems, epics, medical treatises, plays, and philosophies.</td>
          <td>Royal proclamations, military conquests, edicts of kings (e.g. Ashoka), and temple land grants.</td>
        </tr>
      </tbody>
    </table>
    <p class="step"><strong>Conclusion:</strong> Inscriptions are far more durable because stone and metals do not rot, decay, or get eaten by insects, making them permanent records.</p>`,
    'CBSE Marking Scheme: 1 Mark for material contrast + 1 Mark for content contrast + 1 Mark for explaining why inscriptions are more durable.'
  )}

  ${qCard(
    'c6sst-ch4-q3',
    'Q3',
    'Historical Dating: BCE, CE, and Circa',
    'Short',
    `Answer the following questions regarding historical dating:<br>
    (a) What do BCE and CE stand for?<br>
    (b) Why do years in BCE count backwards?<br>
    (c) What does the abbreviation "c." or "circa" mean? [3 Marks]`,
    `<p class="step"><strong>(a) Meaning of BCE and CE:</strong><br>
    • <strong>BCE:</strong> Stands for <em>Before Common Era</em>.<br>
    • <strong>CE:</strong> Stands for <em>Common Era</em>.</p>
    <p class="step"><strong>(b) Why BCE years count backwards:</strong><br>
    In this dating system, the birth of Christ is taken as the starting reference mark (Year 1). Therefore, the further back in time we travel before this reference point, the larger the number of years between that event and Year 1. For example, 1000 BCE occurred 500 years before 500 BCE.</p>
    <p class="step"><strong>(c) Meaning of "Circa" ('c.'):</strong><br>
    "Circa" is a Latin word meaning <em>"around"</em> or <em>"approximately"</em>. Historians use it when the exact year of an ancient event cannot be determined with certainty, but can be estimated (e.g., c. 2500 BCE means around 2500 BCE).</p>`,
    'CBSE Marking Scheme: 1 Mark for full forms (BCE & CE) + 1 Mark for explaining backwards counting from reference Year 1 + 1 Mark for definition of circa.'
  )}

  ${qCard(
    'c6sst-ch4-q4',
    'Q4',
    'Coins (Numismatics) as Historical Evidence',
    'Explain',
    'How do ancient coins and seals help historians reconstruct the history of an era? Give three points.',
    `<p class="step"><strong>1. Identifying Rulers, Dynasties and Dates:</strong><br>
    Ancient coins often carried the stamped portrait, name, titles, and regnal year of the monarch who issued them, enabling historians to establish precise royal chronologies.</p>
    <p class="step"><strong>2. Revealing Trade Routes and Economic Prosperity:</strong><br>
    The discovery of large hoards of Roman gold coins in South India proves extensive maritime trade between India and the Roman Empire. The purity of metal (gold, silver, copper) indicates whether the kingdom was wealthy or undergoing economic distress.</p>
    <p class="step"><strong>3. Information on Religion, Art, and Metallurgy:</strong><br>
    Images of deities (like Shiva, Lakshmi, or Buddha) on coins reveal religious beliefs, while the smelting technique reveals the scientific advancement of ancient metallurgists.</p>`,
    'CBSE Marking Scheme: 1 Mark each for identifying kings/chronology, mapping trade/prosperity, and shedding light on art/metallurgy.'
  )}

  ${qCard(
    'c6sst-ch4-q5',
    'Q5',
    'Excavation Stratigraphy: Law of Superposition',
    'Short',
    'How do archaeologists determine which layer of an excavated site is older? Explain the principle of stratigraphy.',
    `<p class="step"><strong>1. The Principle of Stratigraphy (Law of Superposition):</strong><br>
    When people live on a site, their debris, broken pots, and building rubble accumulate over time. In an undisturbed archaeological trench:
    • The <strong>deepest, lowest layer</strong> is the <strong>oldest</strong> (laid down first in history).<br>
    • The <strong>upper layers closer to the modern surface</strong> are <strong>younger/more recent</strong>.</p>
    <p class="step"><strong>2. Archaeological Dating:</strong><br>
    By carefully digging layer by layer and cataloguing objects found in each stratum, archaeologists can establish the relative sequence of different cultures that occupied the site over millennia.</p>`,
    'CBSE Marking Scheme: 1 Mark for stating lowest layer is oldest + 1 Mark for explaining layer-by-layer superposition.'
  )}

  ${qCard(
    'c6sst-ch4-q6',
    'Q6',
    'Museum Visit & Heritage Conservation',
    'Project',
    'Why is it vital to protect ancient monuments and archaeological artifacts? How should a student document an ancient object during a museum visit?',
    `<p class="step"><strong>1. Why We Must Protect Our Heritage:</strong><br>
    Ancient monuments and artifacts are irreplaceable links to our ancestors' knowledge, artistic genius, and culture. Once destroyed by neglect, vandalism, or theft, that historical knowledge is lost forever.</p>
    <p class="step"><strong>2. Documenting an Object in a Museum:</strong><br>
    When observing an exhibit (e.g., a Harappan terracotta bull or a Mauryan inscription):<br>
    • Record the <strong>Name and Material:</strong> (e.g., Terracotta clay, Bronze, Sandstone).<br>
    • Record the <strong>Estimated Age / Date:</strong> (e.g., c. 2500 BCE).<br>
    • Record the <strong>Location of Discovery:</strong> (e.g., Excavated at Kalibangan, Rajasthan).<br>
    • Note its <strong>Function and Artistic Features:</strong> (e.g., Was it a child's toy, a religious amulet, or a measurement weight?).</p>`,
    'CBSE Marking Scheme: 1 Mark for conservation importance + 2 Marks for the 4-step documentation guide (Name/material, date, excavation site, function).'
  )}
</section>`;

// Write chapter HTML files
fs.writeFileSync(path.join(outDir, 'ch1.html'), ch1Html, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch2.html'), ch2Html, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch3.html'), ch3Html, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch4.html'), ch4Html, 'utf8');

console.log('Successfully generated chapters 1 to 4 in chapters-c6sst/ with 100% textbook question and activity coverage.');
