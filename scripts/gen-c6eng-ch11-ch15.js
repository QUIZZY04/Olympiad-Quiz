// scripts/gen-c6eng-ch11-ch15.js
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c6eng');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

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

// CHAPTER 11: The Winner (Unit 4: Sports and Wellness)
const ch11 = `
<section class="chapter-section" id="ch11">
  <div class="chapter-header">
    <div class="ch-badge">11</div>
    <div class="chapter-header-info">
      <h2>Chapter 11: The Winner</h2>
      <p>NCERT Poorvi (Class 6) — Unit 4: Sports and Wellness | Poetic Appreciation, The Anatomy of True Victory, Grit, Resilience &amp; Sportsmanship | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Poetic Overview, Central Idea &amp; Values</div>
    <ul class="concept-list">
      <li><strong>Central Message:</strong> "The Winner" redefines success beyond medals, ribbons, and applause. The poem highlights that a genuine winner is not someone who never faces defeat; rather, it is the person who has the grit to stand up one more time after being knocked down.</li>
      <li><strong>Key Poetic Contrasts:</strong>
        <ul>
          <li><strong>The Quitter vs The Winner:</strong> A quitter looks at obstacles, makes excuses, and gives up when the race gets exhausting. A winner looks at obstacles as stepping stones, perseveres through tired muscles, and finishes the race with dignity.</li>
          <li><strong>Humble in Victory, Gracious in Defeat:</strong> A true winner does not gloat, mock, or show arrogance when triumphant, nor do they blame referees, wind, or luck when they lose. They congratulate competitors warmly.</li>
        </ul>
      </li>
      <li><strong>Poetic Devices &amp; Tone:</strong> An energetic, uplifting motivational rhythm with vivid active verbs (<em>strive, endure, rise, conquer</em>), encouraging children to embrace effort over anxiety of outcome.</li>
    </ul>
  </div>

  <!-- SVG Diagram: The DNA of a True Winner -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">The Four Pillars of "The Winner"</text>
      <!-- Pillar 1 -->
      <rect x="20" y="45" width="115" height="135" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
      <text x="77" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1d4ed8" text-anchor="middle">1. Resilience</text>
      <text x="77" y="95" font-family="system-ui, sans-serif" font-size="8.5" fill="#1e40af" text-anchor="middle">Gets up after</text>
      <text x="77" y="112" font-family="system-ui, sans-serif" font-size="8.5" fill="#1e40af" text-anchor="middle">every stumble.</text>
      <text x="77" y="130" font-family="system-ui, sans-serif" font-size="8.5" fill="#1e40af" text-anchor="middle">No excuses.</text>
      <text x="77" y="160" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#2563eb" text-anchor="middle">Unbroken Spirit</text>

      <line x1="135" y1="112" x2="155" y2="112" stroke="#64748b" stroke-width="2"/>

      <!-- Pillar 2 -->
      <rect x="155" y="45" width="115" height="135" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
      <text x="212" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#92400e" text-anchor="middle">2. Daily Diligence</text>
      <text x="212" y="95" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">Practices when</text>
      <text x="212" y="112" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">no one is looking.</text>
      <text x="212" y="130" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">Sweat &amp; focus.</text>
      <text x="212" y="160" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#d97706" text-anchor="middle">Preparation</text>

      <line x1="270" y1="112" x2="290" y2="112" stroke="#64748b" stroke-width="2"/>

      <!-- Pillar 3 -->
      <rect x="290" y="45" width="115" height="135" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
      <text x="347" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#15803d" text-anchor="middle">3. Humility</text>
      <text x="347" y="95" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">Never boasts or</text>
      <text x="347" y="112" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">mocks rivals.</text>
      <text x="347" y="130" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">Respects rules.</text>
      <text x="347" y="160" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#16a34a" text-anchor="middle">Gracious Heart</text>

      <line x1="405" y1="112" x2="425" y2="112" stroke="#64748b" stroke-width="2"/>

      <!-- Pillar 4 -->
      <rect x="425" y="45" width="115" height="135" rx="6" fill="#faf5ff" stroke="#a855f7" stroke-width="1.8"/>
      <text x="482" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#7e22ce" text-anchor="middle">4. Self-Mastery</text>
      <text x="482" y="95" font-family="system-ui, sans-serif" font-size="8.5" fill="#6b21a8" text-anchor="middle">Competes against</text>
      <text x="482" y="112" font-family="system-ui, sans-serif" font-size="8.5" fill="#6b21a8" text-anchor="middle">own limits, not</text>
      <text x="482" y="130" font-family="system-ui, sans-serif" font-size="8.5" fill="#6b21a8" text-anchor="middle">just others.</text>
      <text x="482" y="160" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#9333ea" text-anchor="middle">Inner Triumph</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 11.1: Core character dimensions that define a true winner according to the poem.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Comprehension &amp; Poetic Exercises</div>

    ${qCard(
      'c6eng-ch11-q1',
      'Q1',
      'Qualities of a Winner',
      'Short',
      'According to the poem, what are the primary qualities that distinguish a winner from an ordinary player?',
      `<p class="step"><strong>Key Distinguishing Qualities:</strong></p>
      <ul class="step-list">
        <li>A winner does not surrender when the path turns steep or when fatigue sets in.</li>
        <li>They view failures not as final endings, but as valuable lessons to improve their technique.</li>
        <li>They display grace in defeat and humility in triumph, showing constant respect to opponents and referees.</li>
      </ul>`,
      '2 marks: 1 mark for persistence through fatigue/failure + 1 mark for humility and respect.'
    )}

    ${qCard(
      'c6eng-ch11-q2',
      'Q2',
      'Explanation of the Line: "It is the courage to continue that counts"',
      'Poetic Analysis',
      'Explain the meaning of the poetic thought: "Success is not final, failure is not fatal: it is the courage to continue that counts."',
      `<p class="step"><strong>Explanation and Poetic Significance:</strong></p>
      <ul class="step-list">
        <li><strong>Success is Not Final:</strong> Achieving a victory today does not mean one can stop practicing; staying at the peak requires continuous dedication.</li>
        <li><strong>Failure is Not Fatal:</strong> Losing a match does not end life or talent; it is merely temporary.</li>
        <li><strong>Courage to Continue:</strong> The only true measure of greatness is possessing the internal grit to lace up one’s running shoes and run again tomorrow morning, regardless of yesterday’s outcome.</li>
      </ul>`,
      '3 marks: 1 mark for success not final + 1 mark for failure not fatal + 1 mark for endurance as the real standard.'
    )}
  </div>
</section>
`;

// CHAPTER 12: Yoga — A Way of Life (Unit 4: Sports and Wellness)
const ch12 = `
<section class="chapter-section" id="ch12">
  <div class="chapter-header">
    <div class="ch-badge">12</div>
    <div class="chapter-header-info">
      <h2>Chapter 12: Yoga — A Way of Life</h2>
      <p>NCERT Poorvi (Class 6) — Unit 4: Sports and Wellness | Ancient Science of Wellness, Asanas, Pranayama, Mental Focus &amp; International Yoga Day | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Philosophical Origins &amp; Practical Principles</div>
    <ul class="concept-list">
      <li><strong>Etymology &amp; Sage Patanjali:</strong> The word <em>Yoga</em> originates from the Sanskrit root <em>Yuj</em>, meaning "to yoke", "to join", or "to unite". It represents the harmonious union of the physical body, breath, and mind. Sage Patanjali systematically codified classical yoga in the <em>Yoga Sutras</em>.</li>
      <li><strong>Key Components for Students:</strong>
        <ul>
          <li><strong>Asanas (Physical Postures):</strong> Poses that develop flexibility, muscular strength, spinal alignment, and balance (e.g., Tadasana, Vrikshasana, Bhujangasana).</li>
          <li><strong>Surya Namaskar (Sun Salutation):</strong> A dynamic sequence of 12 linked postures that warms up the entire body, stimulates cardiovascular blood circulation, and stretches every major muscle group.</li>
          <li><strong>Pranayama (Breath Control):</strong> Rhythmic breathing techniques (such as Anulom Vilom and Bhramari) that soothe the nervous system, increase lung capacity, and reduce test anxiety.</li>
          <li><strong>Dhyana (Meditation &amp; Mindfulness):</strong> Calming the restless mind, improving concentration, boosting memory retention, and enhancing emotional resilience.</li>
        </ul>
      </li>
      <li><strong>Global Celebration:</strong> Recognizing India’s timeless gift to human wellness, the United Nations declared <strong>June 21</strong> as the <strong>International Day of Yoga</strong>, celebrated by millions across over 190 nations.</li>
    </ul>
  </div>

  <!-- SVG Diagram: The Triad of Holistic Yoga Practice -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">The Three Pillars of Yoga for Students</text>
      <!-- Asanas -->
      <circle cx="100" cy="115" r="50" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="100" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">ASANAS</text>
      <text x="100" y="122" font-family="system-ui, sans-serif" font-size="9" fill="#1e40af" text-anchor="middle">(Postures)</text>
      <text x="100" y="180" font-family="system-ui, sans-serif" font-size="8.5" fill="#2563eb" text-anchor="middle">Strength &amp; Posture</text>

      <line x1="150" y1="115" x2="230" y2="115" stroke="#f59e0b" stroke-width="2"/>

      <!-- Pranayama -->
      <circle cx="280" cy="115" r="50" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="280" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e" text-anchor="middle">PRANAYAMA</text>
      <text x="280" y="122" font-family="system-ui, sans-serif" font-size="9" fill="#78350f" text-anchor="middle">(Breath Control)</text>
      <text x="280" y="180" font-family="system-ui, sans-serif" font-size="8.5" fill="#d97706" text-anchor="middle">Vitality &amp; Calm</text>

      <line x1="330" y1="115" x2="410" y2="115" stroke="#f59e0b" stroke-width="2"/>

      <!-- Dhyana -->
      <circle cx="460" cy="115" r="50" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="460" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">DHYANA</text>
      <text x="460" y="122" font-family="system-ui, sans-serif" font-size="9" fill="#14532d" text-anchor="middle">(Meditation)</text>
      <text x="460" y="180" font-family="system-ui, sans-serif" font-size="8.5" fill="#16a34a" text-anchor="middle">Focus &amp; Memory</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 12.1: The integrated triad of body postures, breathing techniques, and mental concentration.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Comprehension &amp; Wellness Practices</div>

    ${qCard(
      'c6eng-ch12-q1',
      'Q1',
      'Meaning and Origin of the Word "Yoga"',
      'Define',
      'What is the meaning and root of the word "Yoga"? Who codified this ancient science into classical sutras?',
      `<p class="step"><strong>1. Etymology and Meaning:</strong></p>
      <p>The word <em>Yoga</em> is derived from the ancient Sanskrit root <strong>"Yuj"</strong>, which means to join, unite, or yoke together. It signifies the union of the physical body, the breath, and the mind with inner consciousness.</p>
      <p class="step"><strong>2. Codification:</strong></p>
      <p>The ancient Indian sage and philosopher <strong>Patanjali</strong> systematically codified the wisdom of yoga into the <em>Yoga Sutras</em> around the 2nd century BCE.</p>`,
      '2 marks: 1 mark for root Yuj and meaning of union + 1 mark for Sage Patanjali and Yoga Sutras.'
    )}

    ${qCard(
      'c6eng-ch12-q2',
      'Q2',
      'Benefits of Daily Yoga for School Students',
      'Short',
      'How does practising yoga daily benefit school students in their studies and everyday routine?',
      `<p class="step"><strong>Benefits for Students:</strong></p>
      <ul class="step-list">
        <li><strong>Physical Posture &amp; Flexibility:</strong> Relieves stiffness caused by prolonged sitting at study desks and strengthens the spinal cord.</li>
        <li><strong>Improved Concentration &amp; Memory:</strong> Breathing practices like <em>Pranayama</em> oxygenate the brain, helping students focus better during study hours and retain information longer.</li>
        <li><strong>Stress &amp; Exam Anxiety Reduction:</strong> Calming mindful meditation helps manage examination nervousness, promoting restful sleep and emotional balance.</li>
      </ul>`,
      '3 marks: 1 mark for posture/physical health + 1 mark for concentration/memory + 1 mark for anxiety reduction.'
    )}

    ${qCard(
      'c6eng-ch12-q3',
      'Q3',
      'Surya Namaskar (Sun Salutation)',
      'Describe',
      'What is Surya Namaskar? Why is it considered a complete workout?',
      `<p class="step"><strong>Surya Namaskar Overview:</strong></p>
      <ul class="step-list">
        <li>Surya Namaskar (Sun Salutation) is an ancient, graceful sequence of <strong>12 interconnected postures (asanas)</strong> performed in rhythm with inhalation and exhalation.</li>
        <li><strong>Why it is a Complete Workout:</strong> It systematically stretches and tones every major muscle group—the spine, hamstrings, arms, chest, and abdomen. It stimulates blood circulation, aids digestion, and serves as an ideal cardiovascular warm-up.</li>
      </ul>`,
      '2 marks: 1 mark for 12 linked postures synchronized with breath + 1 mark for total body stretching and circulation.'
    )}
  </div>
</section>
`;

// CHAPTER 13: Hamara Bharat — Incredible India! (Unit 5: Culture and Tradition)
const ch13 = `
<section class="chapter-section" id="ch13">
  <div class="chapter-header">
    <div class="ch-badge">13</div>
    <div class="chapter-header-info">
      <h2>Chapter 13: Hamara Bharat — Incredible India!</h2>
      <p>NCERT Poorvi (Class 6) — Unit 5: Culture and Tradition | Panoramic Heritage of India, Monuments, Weaves, Classical Arts &amp; Cultural Unity | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Cultural Splendour &amp; Civilisational Treasures</div>
    <ul class="concept-list">
      <li><strong>A Living Mosaic:</strong> India is an ancient, vibrant tapestry where hundreds of languages, distinct architectural traditions, colourful harvest festivals, diverse culinary cuisines, and world-renowned textile arts blend into an enduring civilisational unity.</li>
      <li><strong>Architectural Wonders:</strong>
        <ul>
          <li>The exquisite white marble wonder <strong>Taj Mahal</strong> in Agra.</li>
          <li>The magnificent rock-cut sculptures and murals of <strong>Ajanta and Ellora</strong> in Maharashtra.</li>
          <li>The colossal chariot architecture of the <strong>Sun Temple at Konark</strong> in Odisha.</li>
          <li>The soaring stone spire of the <strong>Brihadeeswarar Temple</strong> in Thanjavur, Tamil Nadu.</li>
          <li>Historic forts such as the <strong>Red Fort</strong> in Delhi and <strong>Amer Fort</strong> in Rajasthan.</li>
        </ul>
      </li>
      <li><strong>Textiles &amp; Handlooms:</strong> India’s handloom master-weavers have produced legendary fabrics for millennia: Banarasi brocades of Varanasi, Kanjeevaram silks of Tamil Nadu, Pashmina shawls of Kashmir, Bandhani tie-dye of Gujarat/Rajasthan, and Chanderi sarees of Madhya Pradesh.</li>
      <li><strong>Classical Performing Arts:</strong> Classical dance forms such as Bharatanatyam (Tamil Nadu), Kathak (North India), Kathakali (Kerala), and Odissi (Odisha), alongside Hindustani and Carnatic classical music traditions.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Cultural Dimensions of Hamara Bharat -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Hamara Bharat: The Four Pillars of Cultural Heritage</text>
      <!-- Box 1: Architecture -->
      <rect x="20" y="45" width="120" height="135" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
      <text x="80" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e" text-anchor="middle">Architecture</text>
      <text x="80" y="92" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">• Taj Mahal</text>
      <text x="80" y="110" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">• Konark Chariot</text>
      <text x="80" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">• Ajanta Caves</text>
      <text x="80" y="146" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">• Brihadeeswarar</text>
      <text x="80" y="168" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#b45309" text-anchor="middle">Stone Marvels</text>

      <!-- Box 2: Handlooms -->
      <rect x="155" y="45" width="120" height="135" rx="6" fill="#fdf2f8" stroke="#db2777" stroke-width="1.8"/>
      <text x="215" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#9d174d" text-anchor="middle">Handlooms</text>
      <text x="215" y="92" font-family="system-ui, sans-serif" font-size="8.5" fill="#831843" text-anchor="middle">• Banarasi Silk</text>
      <text x="215" y="110" font-family="system-ui, sans-serif" font-size="8.5" fill="#831843" text-anchor="middle">• Kanjeevaram</text>
      <text x="215" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#831843" text-anchor="middle">• Pashmina Wool</text>
      <text x="215" y="146" font-family="system-ui, sans-serif" font-size="8.5" fill="#831843" text-anchor="middle">• Bandhani Craft</text>
      <text x="215" y="168" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#be185d" text-anchor="middle">Master Weaves</text>

      <!-- Box 3: Dances & Music -->
      <rect x="290" y="45" width="120" height="135" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>
      <text x="350" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Dances &amp; Ragas</text>
      <text x="350" y="92" font-family="system-ui, sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">• Bharatanatyam</text>
      <text x="350" y="110" font-family="system-ui, sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">• Kathakali / Kathak</text>
      <text x="350" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">• Hindustani Music</text>
      <text x="350" y="146" font-family="system-ui, sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">• Carnatic Svaras</text>
      <text x="350" y="168" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#1d4ed8" text-anchor="middle">Classical Arts</text>

      <!-- Box 4: Harmony -->
      <rect x="425" y="45" width="115" height="135" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
      <text x="482" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">Shared Unity</text>
      <text x="482" y="92" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">• Harvest Feasts</text>
      <text x="482" y="110" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">• Diwali, Eid, Onam</text>
      <text x="482" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">• National Tricolour</text>
      <text x="482" y="146" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">• Secular Spirit</text>
      <text x="482" y="168" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#16a34a" text-anchor="middle">One Nation</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 13.1: The multi-faceted heritage that makes India truly incredible and united.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Comprehension &amp; Heritage Analysis</div>

    ${qCard(
      'c6eng-ch13-q1',
      'Q1',
      'Architectural Splendours of India',
      'Short',
      'Name four famous historic monuments of India mentioned in the chapter and state their historical or architectural significance.',
      `<p class="step"><strong>Four Monuments and Their Significance:</strong></p>
      <ul class="step-list">
        <li><strong>Taj Mahal (Agra):</strong> A white marble mausoleum renowned as a masterpiece of symmetry and Mughal architecture, ranked among the New Seven Wonders of the World.</li>
        <li><strong>Konark Sun Temple (Odisha):</strong> Designed as an immense chariot with 24 carved stone wheels pulled by seven horses, displaying exquisite ancient stone sculpting.</li>
        <li><strong>Ajanta Caves (Maharashtra):</strong> Famous for ancient Buddhist rock-cut monasteries and vibrant murals painted on stone walls depicting the Jataka tales.</li>
        <li><strong>Brihadeeswarar Temple (Thanjavur):</strong> A monumental Chola granite temple featuring a massive monolithic dome carved from a single boulder.</li>
      </ul>`,
      '4 marks: 1 mark for each monument correctly identified with its special architectural feature.'
    )}

    ${qCard(
      'c6eng-ch13-q2',
      'Q2',
      'India’s Handloom Weaves and Classical Dances',
      'Describe',
      'Give three examples of traditional Indian handlooms and name three classical dance forms along with their states of origin.',
      `<p class="step"><strong>1. Three Traditional Handlooms:</strong></p>
      <ul class="step-list">
        <li><strong>Banarasi Silk (Varanasi, UP):</strong> Famous for opulent gold and silver zari brocades.</li>
        <li><strong>Kanjeevaram (Tamil Nadu):</strong> Known for heavy lustrous silk and contrasting borders.</li>
        <li><strong>Pashmina (Kashmir):</strong> Fine, ultra-soft cashmere wool hand-woven into shawls.</li>
      </ul>
      <p class="step"><strong>2. Three Classical Dances and Their States:</strong></p>
      <ul class="step-list">
        <li><strong>Bharatanatyam:</strong> Tamil Nadu</li>
        <li><strong>Kathak:</strong> Uttar Pradesh / Northern India</li>
        <li><strong>Kathakali:</strong> Kerala</li>
      </ul>`,
      '3 marks: 1.5 marks for handloom varieties + 1.5 marks for classical dances with origin states.'
    )}
  </div>
</section>
`;

// CHAPTER 14: The Kites (Unit 5: Culture and Tradition)
const ch14 = `
<section class="chapter-section" id="ch14">
  <div class="chapter-header">
    <div class="ch-badge">14</div>
    <div class="chapter-header-info">
      <h2>Chapter 14: The Kites</h2>
      <p>NCERT Poorvi (Class 6) — Unit 5: Culture and Tradition | Joy of Flight, Makar Sankranti, Visual Imagery &amp; Poetic Devices | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Poetic Overview, Rhyme &amp; Imagery</div>
    <ul class="concept-list">
      <li><strong>Central Theme:</strong> The joy, exhilaration, and beauty of flying kites against a clear blue sky. Celebrates the spirit of childhood freedom and traditional festive occasions like Makar Sankranti and Uttarayan.</li>
      <li><strong>Vivid Simile &amp; Imagery:</strong>
        <ul>
          <li><em>"How bright on the blue is a kite when it’s new!"</em> — Colourful contrast of crisp paper sailing against the azure sky.</li>
          <li><em>"With a dive and a dip it snaps its tail / Then soars like a ship with only a sail"</em> — Classic nautical simile comparing the kite riding gusts of wind to a majestic ship surfing ocean waves.</li>
          <li><em>The Wind Drops:</em> When the breeze dies down, the kite slacks; the child winds the string back onto the spool, waiting eagerly until a fresh breeze blows to give it new wings.</li>
          <li><em>The Fragile Fate:</em> The poignant contrast at the end—a kite that was once so proud and soaring turns into a ragged, pathetic scrap when its string gets caught in the branches of a thorny tree.</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- SVG Diagram: The Kite Soaring Like a Ship -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Visual Metaphor: Kite Soaring like a Ship upon Waves</text>
      <!-- Kite Graphic -->
      <polygon points="280,35 320,85 280,135 240,85" fill="#f43f5e" stroke="#be123c" stroke-width="2"/>
      <line x1="280" y1="35" x2="280" y2="135" stroke="#ffe4e6" stroke-width="1.5"/>
      <line x1="240" y1="85" x2="320" y2="85" stroke="#ffe4e6" stroke-width="1.5"/>
      <!-- Tail -->
      <path d="M 280,135 Q 295,155 285,175 T 290,195" fill="none" stroke="#f59e0b" stroke-width="2"/>

      <!-- String -->
      <path d="M 280,100 Q 200,140 100,180" fill="none" stroke="#94a3b8" stroke-dasharray="4,4" stroke-width="1.8"/>
      <text x="140" y="165" font-family="system-ui, sans-serif" font-size="9" fill="#64748b">String to Spool</text>

      <!-- Wind vectors -->
      <path d="M 360,70 L 440,70 M 430,65 L 440,70 L 430,75" stroke="#0284c7" stroke-width="2"/>
      <text x="450" y="74" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#0284c7">Crest of Wind</text>

      <path d="M 370,110 L 450,110 M 440,105 L 450,110 L 440,115" stroke="#0284c7" stroke-width="2"/>
      <text x="460" y="114" font-family="system-ui, sans-serif" font-size="9" fill="#0369a1">Rides like a ship</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 14.1: The kinetic imagery of the kite surfing high winds like a vessel on the ocean.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Comprehension &amp; Poetic Devices</div>

    ${qCard(
      'c6eng-ch14-q1',
      'Q1',
      'Simile Comparing Kite to a Ship',
      'Short',
      'How does the poet compare the soaring kite to a ship? What simile is used?',
      `<p class="step"><strong>The Nautical Simile:</strong></p>
      <p>The poet uses the beautiful simile: <em>"soars like a ship with only a sail"</em>. Just as a sailing ship rides gracefully over swelling waves of the ocean using a single cloth sail, the kite rides the invisible currents of rising air currents, climbing smoothly to the crest of the wind.</p>`,
      '2 marks: 1 mark for quoting the simile + 1 mark for explaining riding air currents like ocean waves.'
    )}

    ${qCard(
      'c6eng-ch14-q2',
      'Q2',
      'What Happens When the Wind Falls?',
      'Describe',
      'What happens to the kite when the wind falls? What does the kite-flyer do?',
      `<p class="step"><strong>When the Wind Subsides:</strong></p>
      <ul class="step-list">
        <li>The moment the wind drops, the kite loses lift and appears to rest in the air, slowly fluttering downwards.</li>
        <li>The flyer winds the loose string back onto the wooden reel (spool) and runs backward across the terrace, waiting patiently until a fresh gust fills the paper wings again.</li>
      </ul>`,
      '2 marks: 1 mark for kite drooping when wind drops + 1 mark for winding the string onto the reel.'
    )}

    ${qCard(
      'c6eng-ch14-q3',
      'Q3',
      'The Sad Fate of a Tangled Kite',
      'Think & Answer',
      'How does a kite become a "ragged thing" at the end of the poem? What contrast is drawn?',
      `<p class="step"><strong>The Tragic Contrast:</strong></p>
      <ul class="step-list">
        <li>When a kite’s string snaps or gets caught in the prickly branches of a tall tree, it flutters helplessly in the breeze until its bright paper is ripped to shreds.</li>
        <li><strong>Poetic Contrast:</strong> The poet draws a striking contrast between the proud, gleaming creature dancing in the open blue sky and the pitiable, torn <em>"ragged thing"</em> flapping helplessly in a tree branch.</li>
      </ul>`,
      '3 marks: 1.5 marks for kite caught in tree branches + 1.5 marks for contrast between soaring beauty and ragged destruction.'
    )}
  </div>
</section>
`;

// CHAPTER 15: Ila Sachani: Embroidering Dreams with her Feet (Unit 5: Culture and Tradition)
const ch15 = `
<section class="chapter-section" id="ch15">
  <div class="chapter-header">
    <div class="ch-badge">15</div>
    <div class="chapter-header-info">
      <h2>Chapter 15: Ila Sachani: Embroidering Dreams with her Feet</h2>
      <p>NCERT Poorvi (Class 6) — Unit 5: Culture and Tradition | True Biographical Triumph, Overcoming Disability, Kathiawar Embroidery &amp; National Glory | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Biographical Profile, Struggles &amp; Artistic Triumph</div>
    <ul class="concept-list">
      <li><strong>Early Life &amp; Disability:</strong> Born in the quiet village of Mota Asambhiya in Amreli district, Gujarat. From birth, both of Ila Sachani’s arms were severely paralyzed and hung lifeless by her sides. She could not hold a cup, tie a ribbon, or grip a pencil.</li>
      <li><strong>Heartbreak at School:</strong> While other village children wrote quickly on slates and played clapping games, Ila struggled. Because she could not write rapidly with her toes within the limited exam duration, she could not pass her Class 10 board examinations. Societal voices suggested she was helpless and doomed to live on pity.</li>
      <li><strong>The Spark of Artistic Passion:</strong>
        <ul>
          <li>Sitting beside her mother and grandmother, Ila watched them weave colourful Gujarati embroidery. The vibrant silken threads, mirror work, and peacock patterns captivated her heart.</li>
          <li>Refusing to surrender to despair, Ila made a solemn vow: <em>"If my hands cannot move, my feet shall create wonders."</em></li>
        </ul>
      </li>
      <li><strong>Mastering the Impossible:</strong> Through thousands of hours of intense physical pain, cramps, and patient practice, she learned to grip needles between her toes, thread microscopic eyes with silken strands, and execute intricate <strong>Kathiawari, Kasuti, Kutch, and Phulkari</strong> stitches on fabrics.</li>
      <li><strong>National Acclaim &amp; Legacy:</strong> Her stunning embroidered kurtas, shawls, and wall hangings dazzled art exhibitions in Ahmedabad and across India. Her creations sold out instantly, winning prestigious state and national honours. Ila Sachani stands as an eternal beacon of self-reliance, proving that true human strength lies in an indomitable will.</li>
    </ul>
  </div>

  <!-- SVG Diagram: The Triumphant Journey of Ila Sachani -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Ila Sachani: The Triumphant Path of Grit &amp; Artistry</text>
      <!-- Step 1 -->
      <rect x="20" y="45" width="115" height="135" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8"/>
      <text x="77" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#b91c1c" text-anchor="middle">1. Disability</text>
      <text x="77" y="92" font-family="system-ui, sans-serif" font-size="8.5" fill="#7f1d1d" text-anchor="middle">Paralyzed arms</text>
      <text x="77" y="110" font-family="system-ui, sans-serif" font-size="8.5" fill="#7f1d1d" text-anchor="middle">from birth.</text>
      <text x="77" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#7f1d1d" text-anchor="middle">Failed exams due</text>
      <text x="77" y="146" font-family="system-ui, sans-serif" font-size="8.5" fill="#7f1d1d" text-anchor="middle">to writing speed.</text>
      <text x="77" y="168" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#dc2626" text-anchor="middle">Adversity</text>

      <line x1="135" y1="112" x2="155" y2="112" stroke="#64748b" stroke-width="2"/>

      <!-- Step 2 -->
      <rect x="155" y="45" width="115" height="135" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
      <text x="212" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#92400e" text-anchor="middle">2. The Resolve</text>
      <text x="212" y="92" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">Watched mother's</text>
      <text x="212" y="110" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">Kathiawar craft.</text>
      <text x="212" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">Trained toes</text>
      <text x="212" y="146" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">to hold needle.</text>
      <text x="212" y="168" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#d97706" text-anchor="middle">Determination</text>

      <line x1="270" y1="112" x2="290" y2="112" stroke="#64748b" stroke-width="2"/>

      <!-- Step 3 -->
      <rect x="290" y="45" width="115" height="135" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
      <text x="347" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#15803d" text-anchor="middle">3. Mastery</text>
      <text x="347" y="92" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">Threaded needles</text>
      <text x="347" y="110" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">with toes.</text>
      <text x="347" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">Created intricate</text>
      <text x="347" y="146" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">mirror stitches.</text>
      <text x="347" y="168" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#16a34a" text-anchor="middle">Exquisite Skill</text>

      <line x1="405" y1="112" x2="425" y2="112" stroke="#64748b" stroke-width="2"/>

      <!-- Step 4 -->
      <rect x="425" y="45" width="115" height="135" rx="6" fill="#faf5ff" stroke="#a855f7" stroke-width="1.8"/>
      <text x="482" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#7e22ce" text-anchor="middle">4. National Fame</text>
      <text x="482" y="92" font-family="system-ui, sans-serif" font-size="8.5" fill="#6b21a8" text-anchor="middle">State exhibitions,</text>
      <text x="482" y="110" font-family="system-ui, sans-serif" font-size="8.5" fill="#6b21a8" text-anchor="middle">sold-out stalls,</text>
      <text x="482" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#6b21a8" text-anchor="middle">national honours.</text>
      <text x="482" y="146" font-family="system-ui, sans-serif" font-size="8.5" fill="#6b21a8" text-anchor="middle">Role model.</text>
      <text x="482" y="168" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#9333ea" text-anchor="middle">Triumph</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 15.1: The inspiring life trajectory of Ila Sachani turning physical limitation into artistic brilliance.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Comprehension &amp; Character Sketch</div>

    ${qCard(
      'c6eng-ch15-q1',
      'Q1',
      'Physical Challenge Faced by Ila Sachani',
      'Short',
      'What physical disability was Ila Sachani born with? How did it affect her schooling?',
      `<p class="step"><strong>1. Physical Disability:</strong></p>
      <p>Ila Sachani was born in Gujarat with both her arms paralyzed and non-functional, hanging limp at her sides without muscular control.</p>
      <p class="step"><strong>2. Impact on Schooling:</strong></p>
      <p>She could not hold a pen with her fingers and had to learn writing with her toes. Because writing with toes was slow, she could not complete her Class 10 board exam papers in time and was unable to clear the examination. She felt isolated when other children wrote easily.</p>`,
      '2 marks: 1 mark for paralyzed non-functional arms from birth + 1 mark for inability to clear Class 10 due to toe-writing time constraints.'
    )}

    ${qCard(
      'c6eng-ch15-q2',
      'Q2',
      'How Ila Learned Embroidery with Her Feet',
      'Long Answer',
      'Describe how Ila mastered the art of embroidery. What difficulties did she overcome to become an acclaimed artist?',
      `<p class="step"><strong>1. The Inspiration:</strong></p>
      <p>Ila was deeply enchanted watching her mother and grandmother embroider exquisite traditional Kathiawari patterns, silken flowers, and glistening mirror work on fabrics.</p>
      <p class="step"><strong>2. Overcoming Pain and Obstacles:</strong></p>
      <ul class="step-list">
        <li>She began practicing gripping fine embroidery needles between the two toes of her right foot.</li>
        <li>Threading the minuscule eye of a needle with fine silk thread was agonizingly slow and caused painful muscle cramps, but she refused to stop.</li>
        <li>With relentless patience over years, her toes developed the precision, dexterity, and sensitivity of an expert embroiderer’s fingertips.</li>
      </ul>
      <p class="step"><strong>3. Mastery of Diverse Traditions:</strong></p>
      <p>She mastered complex traditional styles—<strong>Kathiawari, Kasuti of Karnataka, Phulkari of Punjab, and Kutch mirror work</strong>—infusing her own creative colour combinations.</p>`,
      '4 marks: 1 mark for mother/grandmother inspiration + 2 marks for gripping needle between toes, cramps, patience + 1 mark for mastery of styles.'
    )}

    ${qCard(
      'c6eng-ch15-q3',
      'Q3',
      'Character Sketch of Ila Sachani',
      'Character Sketch',
      'Write a character sketch of Ila Sachani highlighting three inspiring qualities of her personality.',
      `<p class="step"><strong>Character Sketch of Ila Sachani:</strong></p>
      <ul class="step-list">
        <li><strong>1. Indomitable Courage:</strong> She refused to accept the identity of a helpless disabled person or live on sympathy, demonstrating that physical limitations cannot chain a courageous human spirit.</li>
        <li><strong>2. Infinite Perseverance:</strong> Where others would give up in frustration after hours of toe cramps, Ila persisted daily, turning her feet into instruments of world-class artistic creation.</li>
        <li><strong>3. Artistic Creativity:</strong> She was not merely a copyist; she innovated new floral motifs, blending Kathiawari with modern tastes, which made her work celebrated at national exhibitions.</li>
      </ul>`,
      '3 marks: 1 mark for indomitable courage + 1 mark for perseverance against physical pain + 1 mark for creative genius.'
    )}
  </div>
</section>
`;

// Write Chapters 11 to 15
fs.writeFileSync(path.join(outDir, 'ch11.html'), ch11.trim(), 'utf8');
console.log('Successfully generated ch11.html');

fs.writeFileSync(path.join(outDir, 'ch12.html'), ch12.trim(), 'utf8');
console.log('Successfully generated ch12.html');

fs.writeFileSync(path.join(outDir, 'ch13.html'), ch13.trim(), 'utf8');
console.log('Successfully generated ch13.html');

fs.writeFileSync(path.join(outDir, 'ch14.html'), ch14.trim(), 'utf8');
console.log('Successfully generated ch14.html');

fs.writeFileSync(path.join(outDir, 'ch15.html'), ch15.trim(), 'utf8');
console.log('Successfully generated ch15.html');
