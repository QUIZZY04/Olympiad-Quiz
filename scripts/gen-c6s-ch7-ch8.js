const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c6s');

// ==========================================
// CHAPTER 7: Temperature and its Measurement
// ==========================================
const ch7Html = `<section class="chapter-section" id="ch7">
  <div class="chapter-header">
    <div class="ch-badge">7</div>
    <div class="chapter-header-info">
      <h2>Chapter 7: Temperature and its Measurement</h2>
      <p>NCERT Curiosity (Class 6) — Clinical vs Laboratory Thermometers, Kink Function, Least Count, Reading Temperature &amp; Digital Thermometers | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Thermometric Principles &amp; Measurement Standards</div>
    <ul class="concept-list">
      <li><strong>Definition of Temperature:</strong> A reliable quantitative measure of the degree of hotness or coldness of an object. The standard SI unit is Kelvin (K); commonly measured in <strong>degree Celsius (°C)</strong> and <strong>degree Fahrenheit (°F)</strong>.</li>
      <li><strong>Normal Human Body Temperature:</strong> <strong>37.0 °C (equivalent to 98.6 °F)</strong>.</li>
      <li><strong>Clinical Thermometer:</strong>
        <ul>
          <li>Used specifically to measure human body temperature.</li>
          <li>Range: <strong>35 °C to 42 °C</strong> (or 94 °F to 108 °F).</li>
          <li>Features a narrow constriction (<strong>kink</strong>) just above the bulb that prevents the mercury level from dropping immediately when taken out of the mouth or armpit.</li>
        </ul>
      </li>
      <li><strong>Laboratory Thermometer:</strong>
        <ul>
          <li>Used to measure temperatures in scientific experiments.</li>
          <li>Range: Typically <strong>-10 °C to 110 °C</strong>.</li>
          <li>Has <strong>NO kink</strong>; must be read while the bulb is still immersed in the liquid.</li>
        </ul>
      </li>
      <li><strong>Least Count of a Thermometer:</strong> The value of the smallest subdivision on the graduated capillary stem.</li>
    </ul>
  </div>

  <!-- SVG Diagram 1: Clinical vs Laboratory Thermometer Anatomy -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 580 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
      <text x="290" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Structural Comparison: Clinical vs Laboratory Thermometer</text>
      
      <!-- Clinical Thermometer (Top) -->
      <text x="50" y="55" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">Clinical Thermometer (35 °C to 42 °C)</text>
      <!-- Bulb -->
      <ellipse cx="60" cy="80" rx="12" ry="7" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
      <!-- Stem with Kink -->
      <rect x="72" y="76" width="300" height="8" rx="2" fill="#f1f5f9" stroke="#64748b" stroke-width="1.2"/>
      <!-- Kink -->
      <path d="M 85,76 Q 88,72 90,78 Q 92,84 95,80" fill="none" stroke="#dc2626" stroke-width="2.5"/>
      <!-- Thread -->
      <line x1="72" y1="80" x2="240" y2="80" stroke="#dc2626" stroke-width="2.5"/>
      <!-- Scale markings -->
      <line x1="120" y1="74" x2="120" y2="86" stroke="#334155" stroke-width="1.2"/>
      <text x="120" y="98" font-family="system-ui, sans-serif" font-size="9" fill="#334155" text-anchor="middle">35</text>
      <line x1="180" y1="74" x2="180" y2="86" stroke="#334155" stroke-width="1.2"/>
      <text x="180" y="98" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#dc2626" text-anchor="middle">37°C (Normal)</text>
      <line x1="280" y1="74" x2="280" y2="86" stroke="#334155" stroke-width="1.2"/>
      <text x="280" y="98" font-family="system-ui, sans-serif" font-size="9" fill="#334155" text-anchor="middle">42</text>
      <!-- Kink Callout -->
      <line x1="90" y1="74" x2="90" y2="40" stroke="#dc2626" stroke-width="1.2"/>
      <text x="140" y="42" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#dc2626">Constriction (Kink) prevents backflow</text>

      <!-- Laboratory Thermometer (Bottom) -->
      <text x="50" y="130" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#2563eb">Laboratory Thermometer (-10 °C to 110 °C)</text>
      <!-- Bulb -->
      <ellipse cx="60" cy="150" rx="14" ry="8" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
      <!-- Stem without kink -->
      <rect x="74" y="146" width="460" height="8" rx="2" fill="#f1f5f9" stroke="#64748b" stroke-width="1.2"/>
      <!-- Thread -->
      <line x1="74" y1="150" x2="350" y2="150" stroke="#2563eb" stroke-width="2.5"/>
      <text x="100" y="167" font-family="system-ui, sans-serif" font-size="9" fill="#334155">-10</text>
      <text x="200" y="167" font-family="system-ui, sans-serif" font-size="9" fill="#334155">0</text>
      <text x="350" y="167" font-family="system-ui, sans-serif" font-size="9" fill="#2563eb">65°C</text>
      <text x="480" y="167" font-family="system-ui, sans-serif" font-size="9" fill="#334155">110°C</text>
      <text x="400" y="130" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#2563eb">Continuous Straight Capillary (No Kink)</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 7.1: Architectural Distinction: Presence of Kink in Clinical Thermometer</div>
  </div>

  <div class="ex-div">NCERT Exercise: Let Us Enhance Our Learning (100% Textbook Questions)</div>

  <!-- Q1 -->
  <div class="q-card" id="c6s-ch7-q1">
    <div class="q-head" onclick="toggleQ('c6s-ch7-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">The normal temperature of a healthy human being is close to: <br>(i) 98.6 °C <br>(ii) 37.0 °C <br>(iii) 32.0 °C <br>(iv) 27.0 °C</div>
      <div class="q-marks">[1 Mark]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Correct Option: (ii) 37.0 °C</strong><br>
            <strong>Scientific Explanation:</strong> The average physiological body temperature of a healthy human being is 37.0 °C on the Celsius scale. (Option (i) is 98.6 °F in Fahrenheit, but not 98.6 °C, which would be fatal boiling heat!).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Selecting option (ii) 37.0 °C</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c6s-ch7-q2">
    <div class="q-head" onclick="toggleQ('c6s-ch7-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">37 °C is the same temperature as: <br>(i) 97.4 °F <br>(ii) 97.6 °F <br>(iii) 98.4 °F <br>(iv) 98.6 °F</div>
      <div class="q-marks">[1 Mark]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Correct Option: (iv) 98.6 °F</strong><br>
            <strong>Temperature Conversion:</strong><br>
            Formula: F = (C × 9/5) + 32<br>
            F = (37 × 1.8) + 32 = 66.6 + 32 = <strong>98.6 °F</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Selecting option (iv) 98.6 °F with temperature scale relationship</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c6s-ch7-q3">
    <div class="q-head" onclick="toggleQ('c6s-ch7-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Fill in the blanks: <br>(i) The hotness or coldness of a system is determined by its ________. <br>(ii) The temperature of ice-cold water cannot be measured by a ________ thermometer. <br>(iii) The standard unit of temperature is degree ________ or degree ________.</div>
      <div class="q-marks">[1.5 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            (i) The hotness or coldness of a system is determined by its <strong>temperature</strong>.<br>
            (ii) The temperature of ice-cold water cannot be measured by a <strong>clinical</strong> thermometer (because its scale only begins at 35 °C, while ice-cold water is near 0 °C).<br>
            (iii) The standard unit of temperature is degree <strong>Celsius (°C)</strong> or degree <strong>Fahrenheit (°F)</strong> (SI unit: Kelvin).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct fill in the blank</span><span class="marking-marks">0.5 Mark each (Total 1.5 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c6s-ch7-q4">
    <div class="q-head" onclick="toggleQ('c6s-ch7-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">What is the usual temperature range of a laboratory thermometer? Why does it have a much wider range than a clinical thermometer?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Standard Range:</strong><br>
            The range of a standard laboratory thermometer is usually <strong>-10 °C to 110 °C</strong>.
          </div>
          <div class="step">
            <strong>2. Reason for Wider Range:</strong><br>
            A laboratory thermometer is designed for general scientific experiments involving ice-water mixtures (freezing point near 0 °C), boiling water (boiling point 100 °C), and various chemical reactions. In contrast, a clinical thermometer is designed exclusively to measure human body temperature, which fluctuates only within a narrow survival window of 35 °C to 42 °C.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating range -10 °C to 110 °C</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining scientific experiments require freezing and boiling points</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c6s-ch7-q5">
    <div class="q-head" onclick="toggleQ('c6s-ch7-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Four students used a laboratory thermometer to measure the temperature of water in a beaker: <br>• Student A tilted the thermometer at 45°. <br>• Student B immersed the thermometer bulb so that it touched the bottom of the beaker. <br>• Student C immersed the thermometer so that the bulb touched the side wall of the beaker. <br>• Student D held the thermometer vertically upright with the bulb fully immersed in water without touching the walls or bottom. <br>Who followed the correct procedure? Explain the necessary precautions.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Correct Procedure: Student D.</strong>
          </div>
          <div class="step">
            <strong>Scientific Precautions for Laboratory Thermometers:</strong><br>
            1. <strong>Keep it Vertically Upright:</strong> Tilting the thermometer (Student A) causes distorted meniscus views and inaccurate gravitational settling of the mercury thread.<br>
            2. <strong>Do Not Touch the Container Surfaces:</strong> Touching the bottom (Student B) or side walls (Student C) records the direct temperature of the heated glass beaker rather than the liquid water.<br>
            3. <strong>Complete Immersion:</strong> The bulb containing thermometric liquid must be completely surrounded by the substance being measured.<br>
            4. <strong>Read While Immersed:</strong> Since laboratory thermometers lack a kink, the reading must be taken while the bulb remains immersed.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Identifying Student D as correct</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining why touching sides/bottom or tilting gives erroneous readings</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c6s-ch7-q6">
    <div class="q-head" onclick="toggleQ('c6s-ch7-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Explain how you read the temperature on a thermometer scale. If the level of liquid column stands three small divisions above 35 °C on a scale where each small division represents 0.2 °C, what is the exact temperature reading?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Step-by-Step Calculation:</strong><br>
            • Main scale reading = 35.0 °C<br>
            • Number of subdivisions above main mark = 3 divisions<br>
            • Value of 1 small division (least count) = 0.2 °C<br>
            • Additional temperature = 3 × 0.2 °C = 0.6 °C<br>
            • <strong>Total Temperature Reading = 35.0 °C + 0.6 °C = 35.6 °C.</strong>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Showing calculation (3 × 0.2 = 0.6 °C)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Final correct temperature reading of 35.6 °C</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c6s-ch7-q7">
    <div class="q-head" onclick="toggleQ('c6s-ch7-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Observe a thermometer where the markings between 20 °C and 30 °C have 10 equal divisions. <br>(a) What is the value of each division (least count)? <br>(b) If the liquid column reaches the 7th division above 20 °C, what is the temperature? <br>(c) What type of thermometer is likely to have this range?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(a) Value of Each Division (Least Count):</strong><br>
            Difference between major markings = 30 °C - 20 °C = 10 °C.<br>
            Number of divisions = 10.<br>
            Value of 1 division = 10 °C ÷ 10 = <strong>1.0 °C</strong>.
          </div>
          <div class="step">
            <strong>(b) Temperature Reading:</strong><br>
            Reading = Base value + (7 × 1.0 °C) = 20 °C + 7 °C = <strong>27.0 °C</strong>.
          </div>
          <div class="step">
            <strong>(c) Type of Thermometer:</strong><br>
            This is a <strong>Laboratory Thermometer (or Room / Weather Thermometer)</strong>, because a clinical thermometer only measures between 35 °C and 42 °C with divisions of 0.1 °C or 0.2 °C.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Least count calculation (1.0 °C)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Temperature reading calculation (27.0 °C)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Identification of Laboratory/Room thermometer</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c6s-ch7-q8">
    <div class="q-head" onclick="toggleQ('c6s-ch7-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">A laboratory thermometer cannot be used to measure human body temperature. Give two clear scientific reasons.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Scientific Reasons:</strong><br>
            1. <strong>Absence of Kink (Constriction):</strong> A laboratory thermometer does not have a kink above its bulb. The moment it is taken out of a patient's mouth or armpit into cooler room air, the mercury column immediately drops down rapidly, giving a false, lower reading before it can be read.<br>
            2. <strong>Low Precision &amp; Safety Risk:</strong> Laboratory thermometers typically have a least count of 1 °C, making them incapable of detecting slight 0.2 °F/0.1 °C fever fluctuations. Furthermore, their long glass stem and toxic mercury pose a breakage hazard inside a patient's mouth.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Absence of constriction causing immediate mercury drop outside body</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Low resolution / lack of fever precision and safety hazard</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c6s-ch7-q9">
    <div class="q-head" onclick="toggleQ('c6s-ch7-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">Vaishnavi was unwell with a fever. Her mother recorded her body temperature every 4 hours: <br>• 6:00 AM: 38.5 °C <br>• 10:00 AM: 39.5 °C <br>• 2:00 PM: 40.0 °C <br>• 6:00 PM: 38.0 °C <br>• 10:00 PM: 37.0 °C <br>(a) What was Vaishnavi's highest recorded temperature? <br>(b) At what time was the fever at its peak? <br>(c) When did her temperature return to normal?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Data Analysis:</strong><br>
            • <strong>(a) Highest Recorded Temperature:</strong> <strong>40.0 °C</strong> (high fever).<br>
            • <strong>(b) Peak Time:</strong> The temperature reached its highest value at <strong>2:00 PM</strong>.<br>
            • <strong>(c) Normalization Time:</strong> Normal human body temperature is 37.0 °C. Vaishnavi's temperature reached <strong>37.0 °C at 10:00 PM</strong>, indicating her recovery from fever.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correctly identifying peak temperature (40.0 °C)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correctly identifying peak time (2:00 PM)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Identifying return to 37.0 °C at 10:00 PM</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c6s-ch7-q10">
    <div class="q-head" onclick="toggleQ('c6s-ch7-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">If you need to measure a temperature of 22.5 °C accurately, which thermometer would you select: one with smallest divisions of 1 °C, one with 0.5 °C, or one with 2 °C? Explain your choice scientifically.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Choice: The thermometer with smallest divisions of 0.5 °C.</strong><br>
            <strong>Scientific Reason:</strong><br>
            • To measure 22.5 °C without guessing or interpolation, the instrument's least count must be capable of resolving 0.5 °C increments.<br>
            • A thermometer with 1 °C divisions only marks 22 °C and 23 °C; reading 22.5 °C would be an eyeball estimation.<br>
            • A thermometer with 2 °C divisions only marks 22 °C and 24 °C.<br>
            • The 0.5 °C thermometer will have an exact marked graduation for 22.5 °C (one tick mark above 22.0 °C), providing direct and accurate measurement.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Selection of 0.5 °C division thermometer</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explanation that least count must resolve decimal increments directly</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q11 -->
  <div class="q-card" id="c6s-ch7-q11">
    <div class="q-head" onclick="toggleQ('c6s-ch7-q11')">
      <div class="q-num">Q11</div>
      <div class="q-text">A student observes a laboratory thermometer where the mercury thread stands exactly halfway between 27 °C and 28 °C. If there are two equal divisions between 27 °C and 28 °C, what is the exact reading?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Step-by-Step Calculation:</strong><br>
            1. Total temperature difference between adjacent degree marks = 28 °C - 27 °C = 1 °C.<br>
            2. Number of equal subdivisions = 2.<br>
            3. Value of each subdivision = 1 °C ÷ 2 = 0.5 °C.<br>
            4. The mercury thread is on the first subdivision above 27 °C.<br>
            5. Exact temperature reading = 27 °C + 0.5 °C = <strong>27.5 °C</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Subdivision least count derivation (0.5 °C)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Final reading of 27.5 °C</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q12 -->
  <div class="q-card" id="c6s-ch7-q12">
    <div class="q-head" onclick="toggleQ('c6s-ch7-q12')">
      <div class="q-num">Q12</div>
      <div class="q-text">A laboratory thermometer has 50 equal divisions between 0 °C and 100 °C. What does each division of this thermometer measure (least count)?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Calculation:</strong><br>
            • Total temperature span = 100 °C - 0 °C = 100 °C.<br>
            • Total number of divisions = 50.<br>
            • Value of 1 division = Total temperature span ÷ Total divisions<br>
            • Value of 1 division = 100 °C ÷ 50 = <strong>2 °C per division</strong>.<br>
            Therefore, each single division on this thermometer measures <strong>2 °C</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating formula (Span ÷ Number of divisions)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correct calculation yielding 2 °C per division</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q13 -->
  <div class="q-card" id="c6s-ch7-q13">
    <div class="q-head" onclick="toggleQ('c6s-ch7-q13')">
      <div class="q-num">Q13</div>
      <div class="q-text">Explain how you would design and draw a thermometer scale between 10 °C and 20 °C such that its smallest division reads 0.5 °C. How many total subdivisions must be marked between 10 °C and 20 °C?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Scale Design Calculation:</strong><br>
            1. Total temperature difference = 20 °C - 10 °C = 10 °C.<br>
            2. Desired least count (value of smallest division) = 0.5 °C.<br>
            3. Total number of subdivisions required = Total difference ÷ Least count<br>
            Number of divisions = 10 °C ÷ 0.5 °C = <strong>20 subdivisions</strong>.<br>
            <br>
            <strong>Drawing Steps:</strong><br>
            • Draw a straight vertical line and mark the bottom end as 10 °C and top end as 20 °C.<br>
            • Mark 10 major degree increments (11 °C, 12 °C, ..., 19 °C).<br>
            • Subdivide each 1 °C interval into 2 equal parts with a shorter middle tick mark representing 0.5 °C.<br>
            • There will be exactly 20 equal intervals across the whole 10 °C span.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Calculating total number of divisions (10 ÷ 0.5 = 20 divisions)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Describing division layout with 0.5 °C intermediate ticks</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Case Study -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Clinical Instrumentation Case Study)</div>
    <div class="q-text"><strong>Case Study: Transition from Mercury to Digital Thermometers:</strong><br>
      In recent years, hospitals and schools have replaced traditional mercury clinical thermometers with electronic digital thermometers and infrared forehead scanners.<br>
      (a) Why is mercury being phased out from household thermometers?<br>
      (b) What safety hazard occurs if a mercury thermometer breaks on the floor?<br>
      (c) State two practical advantages of digital thermometers over traditional mercury thermometers.
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Reason for Phasing Out Mercury:</strong><br>
        Mercury is a <strong>highly toxic, bioaccumulative heavy metal</strong>. It vaporizes at room temperature into invisible toxic fumes that damage the central nervous system, lungs, and kidneys.</p>

        <p><strong>(b) Breakage Safety Hazard:</strong><br>
        When glass breaks, liquid mercury scatters into hundreds of microscopic rolling droplets. It is virtually impossible to clean with a broom or vacuum cleaner without contaminating indoor air and sewage.</p>

        <p><strong>(c) Advantages of Digital Thermometers:</strong><br>
        1. <strong>Mercury-Free &amp; Unbreakable:</strong> Uses electronic thermistor sensors housed in durable plastic; completely safe for children.<br>
        2. <strong>Instant Numerical Display with Beep:</strong> Shows direct LCD numerical readings without parallax error, and beeps when reading stabilizes.</p>
      </div>
    </div>
  </div>
</section>
`;

// ==========================================
// CHAPTER 8: A Journey through States of Water
// ==========================================
const ch8Html = `<section class="chapter-section" id="ch8">
  <div class="chapter-header">
    <div class="ch-badge">8</div>
    <div class="chapter-header-info">
      <h2>Chapter 8: A Journey through States of Water</h2>
      <p>NCERT Curiosity (Class 6) — Evaporation, Condensation, Transpiration, Water Cycle &amp; Water Conservation | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Hydrological Principles &amp; Phase Changes</div>
    <ul class="concept-list">
      <li><strong>Three Physical States of Water:</strong>
        <ul>
          <li><em>Solid (Ice/Snow):</em> Rigid form with definite shape and volume; found in glaciers and polar ice sheets.</li>
          <li><em>Liquid (Water):</em> Fluid form with definite volume but taking container shape; oceans, rivers, groundwater.</li>
          <li><em>Gas (Water Vapour / Steam):</em> Invisible gaseous state expanding to fill space; present continuously in the atmosphere.</li>
        </ul>
      </li>
      <li><strong>Phase Transformation Processes:</strong>
        <ul>
          <li><em>Evaporation:</em> Conversion of liquid water into water vapour below boiling point; absorbs latent heat, creating a cooling effect. Accelerated by high temperature, large surface area, wind, and low humidity.</li>
          <li><em>Condensation:</em> Transformation of water vapour into tiny liquid droplets upon cooling; responsible for cloud, dew, and fog formation.</li>
          <li><em>Transpiration:</em> Biological loss of water vapour through microscopic leaf stomata into the atmosphere.</li>
        </ul>
      </li>
      <li><strong>The Water Cycle:</strong> The continuous cyclical circulation of water between Earth's surface and the atmosphere driven by solar radiation.</li>
    </ul>
  </div>

  <div class="ex-div">NCERT Exercise: Let Us Enhance Our Learning (100% Textbook Questions)</div>

  <!-- Q1 -->
  <div class="q-card" id="c6s-ch8-q1">
    <div class="q-head" onclick="toggleQ('c6s-ch8-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Which of the following best describes condensation? <br>(i) The conversion of water into its vapour state <br>(ii) The process of water changing from a liquid into a gaseous state <br>(iii) The formation of clouds from tiny water droplets <br>(iv) The conversion of water vapour into its liquid state</div>
      <div class="q-marks">[1 Mark]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Correct Option: (iv) The conversion of water vapour into its liquid state</strong><br>
            <strong>Scientific Explanation:</strong> Condensation is defined specifically as the physical phase transition where water in its gaseous vapour state cools down and condenses back into liquid water droplets.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Selecting option (iv) with scientific phase definition</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c6s-ch8-q2">
    <div class="q-head" onclick="toggleQ('c6s-ch8-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Identify in which of the given processes evaporation is very important: <br>(i) Colouring with: (a) crayons, (b) water colours, (c) acrylic colours, (d) pencil colour <br>(ii) Writing on paper with: (a) pencil, (b) ink pen, (c) ballpoint pen</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) Colouring medium where evaporation is critical:</strong><br>
            <strong>Correct Option: (b) Water colours</strong><br>
            <em>Reason:</em> Water colours are applied by diluting pigment in liquid water. The painting dries and binds to paper only when the water solvent evaporates into the surrounding air. Wax crayons and pencil colours are dry solids that do not involve evaporation.
          </div>
          <div class="step">
            <strong>(ii) Writing tool where evaporation is critical:</strong><br>
            <strong>Correct Option: (b) Ink pen (Fountain pen)</strong><br>
            <em>Reason:</em> Liquid fountain pen ink contains a high proportion of aqueous solvent. For the wet writing to dry on paper without smudging, the liquid water/solvent must evaporate. Pencils use solid graphite, and ballpoint pens use a thick oil-based paste that does not dry primarily by water evaporation.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct option (b) water colours with solvent evaporation reason</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correct option (b) ink pen with drying mechanism reason</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c6s-ch8-q3">
    <div class="q-head" onclick="toggleQ('c6s-ch8-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">We see green-coloured plastic artificial grass at many places these days. The space around natural living grass feels cooler than the space around plastic grass. Explain why scientifically.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Transpiration &amp; Evaporative Cooling in Natural Grass:</strong><br>
            Natural grass is a living plant that continuously absorbs water from the soil through its roots. It releases excess water into the surrounding air as invisible water vapour through microscopic pores (stomata) on its leaves. This biological process is called <strong>transpiration</strong>.<br>
            When liquid water evaporates/transpires from the leaves, it absorbs heat energy (latent heat of vaporization) from the surrounding air. This loss of thermal energy produces a significant natural <strong>cooling effect</strong>.
          </div>
          <div class="step">
            <strong>2. Heat Retention by Plastic Grass:</strong><br>
            Artificial plastic grass is an inanimate petroleum-based synthetic polymer. It does not perform transpiration or evaporation. Instead, plastic absorbs solar radiation, heats up intensely, and radiates heat back into the surrounding air, making the vicinity feel hot and uncomfortable.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Explaining transpiration in living grass causing evaporative cooling</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Explaining plastic grass lacks transpiration and absorbs/radiates heat</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c6s-ch8-q4">
    <div class="q-head" onclick="toggleQ('c6s-ch8-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Give examples of four liquids other than water that evaporate into the air at room temperature. What common property do they share?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Examples of Evaporating Liquids:</strong><br>
            1. <strong>Ethyl Alcohol (found in Hand Sanitizers):</strong> Evaporates rapidly from hands, leaving a cooling sensation.<br>
            2. <strong>Acetone (Nail Polish Remover):</strong> Evaporates almost instantly when left open in a bottle.<br>
            3. <strong>Perfume / Cologne:</strong> Contains volatile alcohol-based fragrance molecules that evaporate into vapor.<br>
            4. <strong>Petrol (Gasoline):</strong> Highly volatile hydrocarbon fuel that evaporates swiftly on contact with air.
          </div>
          <div class="step">
            <strong>Common Scientific Property:</strong><br>
            All these substances are <strong>volatile liquids</strong> possessing relatively weak intermolecular attractive forces, allowing their surface molecules to easily gain kinetic energy and escape into the vapour phase at room temperature.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Listing 4 valid evaporating liquids (sanitizer, perfume, petrol, acetone)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Identifying property of volatility / low boiling point</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c6s-ch8-q5">
    <div class="q-head" onclick="toggleQ('c6s-ch8-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Electric fans blow air around, creating a cooling sensation. It might seem strange to turn on a fan to dry wet clothes, since fans usually make things cooler, not warmer. Normally, evaporation requires heat. Explain scientifically why a fan speeds up the drying of clothes.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Scientific Principle: Effect of Wind Speed on Evaporation:</strong><br>
            1. <strong>Removal of Saturated Boundary Layer:</strong> When wet clothes hang in stagnant air, water evaporates and quickly forms a localized, highly humid layer of air immediately surrounding the fabric. High humidity slows down further evaporation.<br>
            2. <strong>Continuous Air Circulation:</strong> When a ceiling fan is switched on, moving air swiftly blows away this humid boundary layer and replaces it with drier room air.<br>
            3. <strong>Increased Rate of Evaporation:</strong> The continuous influx of drier air allows water molecules to escape from the wet cloth fibers much more rapidly.<br>
            4. <strong>Heat Source:</strong> The water molecules absorb the necessary latent heat of vaporization from the room air and the clothes themselves. Hence, high wind speed dramatically accelerates evaporation even without raising the temperature.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Explaining that fan sweeps away humid air layer surrounding wet clothes</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Explaining replacement with drier air increases rate of evaporation</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c6s-ch8-q6">
    <div class="q-head" onclick="toggleQ('c6s-ch8-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Usually, when wet sludge is dredged from municipal drains, it is left in heaps next to the drain for 3 to 4 days before being transported to fields or gardens as manure. What scientific changes occur during these 3-4 days?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Scientific Transformations During 3–4 Days of Heap Drying:</strong><br>
            1. <strong>Evaporation of Water (Dehydration):</strong> The water present in wet sludge evaporates under sun and breeze, causing the heavy, runny sludge to dry out into semi-solid clumps. This drastically reduces weight and transportation cost.<br>
            2. <strong>Solar Disinfection:</strong> Exposure to solar ultraviolet (UV) radiation and atmospheric oxygen kills harmful anaerobic pathogens, foul-smelling bacteria, and parasite eggs.<br>
            3. <strong>Transformation into Safe Manure:</strong> Once dehydrated and aerated, the organic sludge becomes odourless, easy to handle, and safe to enrich garden soil with nitrogen and phosphorus.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Evaporation of excess water reducing weight and handling difficulty</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Sun exposure killing pathogens and neutralizing foul odour</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c6s-ch8-q7">
    <div class="q-head" onclick="toggleQ('c6s-ch8-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Observe activities in your house for a day. Identify at least four daily household activities that involve evaporation. How does understanding the process of evaporation help us perform these activities more efficiently?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Daily Household Activities Involving Evaporation:</strong><br>
            • <em>Drying Wet Clothes:</em> Spreading wet laundry outdoors under the sun.<br>
            • <em>Mopping Floors:</em> Washing tiled floors with a damp mop; the thin water film evaporates into room air within minutes.<br>
            • <em>Drying Sweaty Skin:</em> Perspiration evaporates from skin under a fan, cooling the body.<br>
            • <em>Cooling Drinking Water in an Earthen Pitcher (Matka):</em> Water seeps through porous clay pores and evaporates, cooling the stored water.
          </div>
          <div class="step">
            <strong>2. Practical Benefits of Understanding Evaporation:</strong><br>
            • <em>Spreading out Laundry (Surface Area):</em> Knowing that evaporation increases with surface area, we spread clothes wide instead of leaving them bunched up.<br>
            • <em>Ventilation:</em> We open windows and switch on fans while mopping floors to dry them faster and prevent slipping accidents.<br>
            • <em>Storage Precaution:</em> We seal bottles of medicines, sanitizers, and perfumes tightly to prevent loss through evaporation.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Listing 4 valid domestic activities involving evaporation</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Applying principles (surface area, airflow, temperature) for efficiency</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c6s-ch8-q8">
    <div class="q-head" onclick="toggleQ('c6s-ch8-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">How is water present in the solid state in nature? Name three geographical locations where solid water is permanently found on Earth.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Natural Occurrence of Solid Water:</strong><br>
            In nature, water exists in the solid state as <strong>ice, frost, hail, and snow</strong>. It forms naturally wherever environmental temperatures drop below water's freezing point (0 °C).
          </div>
          <div class="step">
            <strong>Key Geographical Locations:</strong><br>
            1. <strong>Polar Ice Caps (Antarctica and the Arctic):</strong> Massive continental ice sheets storing nearly 70% of Earth's fresh water.<br>
            2. <strong>High Mountain Glaciers (The Himalayas, Alps, Andes):</strong> Perennial frozen rivers of compacted snow such as the Gangotri Glacier.<br>
            3. <strong>High-Altitude Alpine Peaks:</strong> Snow-capped mountain summits permanently frozen throughout the year.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating forms of solid water (ice, snow, glaciers)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Naming 3 geographic locations (Antarctica, Arctic, Himalayas/Glaciers)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c6s-ch8-q9">
    <div class="q-head" onclick="toggleQ('c6s-ch8-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">Reflect on the environmental statement: "Water is our responsibility before it is our right." Share your thoughts on this statement with two actionable conservation practices.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Ethical &amp; Scientific Reflection:</strong><br>
            • Over 97% of Earth's water is saline ocean water unfit for consumption. Out of the remaining 3% freshwater, more than two-thirds is trapped in polar glaciers. Only less than 1% is readily available as surface water in rivers, lakes, and groundwater.<br>
            • While clean drinking water is a fundamental human right for survival, claiming this right without exercising responsibility leads to reckless over-extraction, aquifer depletion, and toxic pollution.<br>
            • Therefore, conserving and protecting water ecosystems must come first as our primary duty, ensuring equitable availability for future generations and wildlife.
          </div>
          <div class="step">
            <strong>2. Actionable Conservation Practices:</strong><br>
            1. <strong>Rooftop Rainwater Harvesting:</strong> Capturing monsoon rainwater from roofs and channeling it into percolation recharge pits to replenish depleted groundwater tables.<br>
            2. <strong>Eliminating Wastage at Home:</strong> Fixing dripping taps promptly, using a bucket instead of running hoses to wash cars, and reusing kitchen RO wastewater for watering plants.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Discussion of scarcity of usable fresh water and ethical stewardship</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Two actionable conservation practices (Rainwater harvesting, waste prevention)</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c6s-ch8-q10">
    <div class="q-head" onclick="toggleQ('c6s-ch8-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">The seat of a two-wheeler parked outside on a sunny afternoon has become scorching hot. How can you quickly cool it down using what you have learnt about evaporation?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Practical Cooling Solution:</strong><br>
            1. <strong>Sprinkle a Little Water or Place a Damp Cloth:</strong> Sprinkle a few splashes of water onto the hot leatherette/vinyl seat, or cover it with a wet handkerchief/cloth.<br>
            2. <strong>Scientific Mechanism:</strong> Because the dark seat surface is very hot, the applied water film absorbs its latent heat of vaporization directly from the seat material and rapidly evaporates into the surrounding air.<br>
            3. <strong>Immediate Cooling Effect:</strong> The rapid transfer of heat from the seat to evaporating water molecules cools the seat down to ambient temperature within seconds, making it safe and comfortable to sit on.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Application of water/wet cloth onto hot seat</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining that evaporating water absorbs heat from seat, cooling it rapidly</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Case Study -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Hydrological Cycle Case Study)</div>
    <div class="q-text"><strong>Case Study: Cloud Formation &amp; Groundwater Depletion:</strong><br>
      During summer, riverbeds dry up while atmospheric humidity and towering thunderclouds increase. Later, heavy rainfall replenishes rivers, but city borewells still run dry.<br>
      (a) Why do droplets of water appear on the outer surface of a glass tumbler containing ice-cold water?<br>
      (b) Explain why urban cities face severe groundwater depletion despite receiving heavy monsoon rainfall.<br>
      (c) What natural process purifies ocean water into fresh rainwater during the water cycle?
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Condensation on Tumbler Surface:</strong><br>
        Air contains invisible water vapour. When warm air collides with the cold outer surface of the ice tumbler, it cools down rapidly below its dew point. The vapour loses heat and <strong>condenses</strong> into visible liquid water droplets.</p>

        <p><strong>(b) Reason for Urban Groundwater Depletion:</strong><br>
        Urbanization covers vast land areas with concrete buildings, asphalt roads, and tiled pavements. This creates an impermeable barrier that prevents rainwater from seeping (percolating) into the soil. Most rainfall rushes into stormwater drains and is lost, preventing aquifer recharge.</p>

        <p><strong>(c) Natural Purification via Water Cycle:</strong><br>
        <strong>Solar Evaporation and Distillation:</strong> When ocean water evaporates under solar energy, only pure water molecules transform into vapour, leaving salts and impurities behind in the ocean. The condensed rainwater is pure freshwater.</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch7.html'), ch7Html, 'utf8');
fs.writeFileSync(path.join(chDir, 'ch8.html'), ch8Html, 'utf8');
console.log('Chapter 7 (13 questions) and Chapter 8 (10 questions) updated with 100% NCERT Curiosity questions!');
