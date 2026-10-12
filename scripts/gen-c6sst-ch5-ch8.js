// scripts/gen-c6sst-ch5-ch8.js
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
// CHAPTER 5: INDIA, THAT IS BHARAT
// ============================================================================
const ch5 = `<section class="chapter-section" id="ch5">
  <div class="chapter-header">
    <div class="ch-badge">5</div>
    <div class="chapter-header-info">
      <h2>Chapter 5: India, That Is Bharat</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — 100% Complete Textbook Questions, The Big Questions, True/False, Derivations &amp; CBSE Rubrics | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Historical &amp; Geographical Concepts</div>
    <ul class="concept-list">
      <li><strong>Multiple Historical Names:</strong>
        <ul>
          <li><strong>Bharat / Bharatvarsha:</strong> Rooted in the Rigveda, named after the prominent Vedic tribe/clan of the <em>Bharatas</em> led by King Sudas. Later literature (Puranas, Mahabharata) defined <em>Bharatvarsha</em> as the land situated north of the oceans and south of the snowy Himalayas (<em>Uttaram yat samudrasya...</em>).</li>
          <li><strong>Jambudvipa:</strong> In ancient Buddhist, Jain, and Hindu texts, as well as Ashokan inscriptions, the central continent containing India was designated <em>Jambudvipa</em> ("Island of the Jamun / Rose-Apple tree").</li>
          <li><strong>Sapta Sindhu:</strong> The land of seven sacred rivers mentioned in the Rigveda (Indus, Sarasvati, Jhelum, Chenab, Ravi, Beas, Sutlej).</li>
          <li><strong>Hind / Hindustan:</strong> Derived from the Old Persian word <em>Hindu</em> (pronunciation of the Sanskrit river <em>Sindhu</em>). In 3rd century CE Sasanian Persian inscriptions of Shapur I, the land is called <em>Hindustan</em>.</li>
          <li><strong>India:</strong> The Greeks adapted the Persian <em>Hindu</em> into <em>Indos</em>, and the land beyond as <em>Indike</em>. Latin and modern European languages adopted this as <em>India</em>.</li>
        </ul>
      </li>
      <li><strong>Geographical Identity of Bharatvarsha:</strong> Natural boundaries created a distinct subcontinental identity: the towering Himalayas in the north, and the vast expanse of the Indian Ocean, Arabian Sea, and Bay of Bengal surrounding the south.</li>
      <li><strong>Constitutional Synthesis:</strong> Article 1(1) of the Constitution of India formally unifies this timeless heritage: <em>"India, that is Bharat, shall be a Union of States."</em></li>
      <li><strong>Civilisational Continuity:</strong> Unlike ancient civilisations that vanished entirely (like Mesopotamia or ancient Egypt), India demonstrates unbroken cultural, philosophical, and social continuity spanning over 5,000 years.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Evolution of Names & Boundaries of Bharat -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 220" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Genealogy of Names of the Indian Subcontinent</text>
      <!-- Boxes -->
      <rect x="20" y="45" width="150" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
      <text x="95" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#92400e" text-anchor="middle">Sindhu (River)</text>
      <text x="95" y="90" font-family="system-ui, sans-serif" font-size="10" fill="#b45309" text-anchor="middle">Sanskrit Root</text>

      <line x1="170" y1="75" x2="210" y2="75" stroke="#64748b" stroke-width="2"/>

      <rect x="210" y="45" width="150" height="60" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
      <text x="285" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0369a1" text-anchor="middle">Hindu / Hindush</text>
      <text x="285" y="90" font-family="system-ui, sans-serif" font-size="10" fill="#0284c7" text-anchor="middle">Old Persian Inscriptions</text>

      <line x1="360" y1="75" x2="400" y2="75" stroke="#64748b" stroke-width="2"/>

      <rect x="400" y="45" width="140" height="60" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
      <text x="470" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#15803d" text-anchor="middle">Indos / India</text>
      <text x="470" y="90" font-family="system-ui, sans-serif" font-size="10" fill="#16a34a" text-anchor="middle">Greek &amp; Latin Form</text>

      <!-- Second Row: Bharat and Jambudvipa -->
      <rect x="70" y="135" width="180" height="65" rx="8" fill="#fae8ff" stroke="#a855f7" stroke-width="1.8"/>
      <text x="160" y="160" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#7e22ce" text-anchor="middle">Bharata / Bharatvarsha</text>
      <text x="160" y="180" font-family="system-ui, sans-serif" font-size="10" fill="#9333ea" text-anchor="middle">Rigveda Clan &amp; Puranic Geography</text>

      <rect x="310" y="135" width="180" height="65" rx="8" fill="#ffe4e6" stroke="#f43f5e" stroke-width="1.8"/>
      <text x="400" y="160" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#be123c" text-anchor="middle">Jambudvipa</text>
      <text x="400" y="180" font-family="system-ui, sans-serif" font-size="10" fill="#e11d48" text-anchor="middle">Ashokan Edicts &amp; Sacred Texts</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 5.1: Genealogy of historical names of the Indian subcontinent</div>
  </div>

  <!-- ================= SECTION A: THE BIG QUESTIONS ================= -->
  <div class="ex-div">
    <div class="ex-heading">The Big Questions (Chapter Inquiry &amp; Openers)</div>
  </div>

  ${qCard(
    'c6sst-ch5-bq1',
    'Big Q1',
    'What Were the Ancient Names of Our Subcontinent?',
    'Concept',
    'What were the various names by which our country was known in ancient literature and foreign records, and what are their linguistic origins?',
    `<p class="step"><strong>1. Indigenous Sanskrit Names:</strong><br>
    • <strong>Bharata / Bharatvarsha:</strong> Named after the Bharata clan in the Rigveda and defined in the Puranas as the entire subcontinent between the Himalayas and the southern seas.<br>
    • <strong>Jambudvipa:</strong> Meaning "Island of the Jamun tree," found in Buddhist texts, Puranas, and Emperor Ashoka’s 3rd century BCE rock edicts.<br>
    • <strong>Sapta Sindhu:</strong> The Vedic land of seven sacred rivers in northwestern India.</p>
    <p class="step"><strong>2. External Names Derived from River Sindhu:</strong><br>
    • <strong>Hindu / Hindush:</strong> Ancient Persian pronunciation of the Sanskrit river Sindhu.<br>
    • <strong>Hindustan:</strong> Persian term meaning "Land of the Hindus/Sindhu region."<br>
    • <strong>Indos / India:</strong> Greek and Roman adaptations of the Persian name.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for indigenous names (Bharat, Jambudvipa, Sapta Sindhu) + 1.5 Marks for external names (Hindu, Hindustan, India).'
  )}

  ${qCard(
    'c6sst-ch5-bq2',
    'Big Q2',
    'How Was India\'s Geographical and Cultural Identity Conceived?',
    'Explain',
    'How did ancient Indian texts view the geographical and civilisational unity of the subcontinent? Did they see it as many separate countries or one unified homeland?',
    `<p class="step"><strong>1. Clear Geographical Boundaries:</strong><br>
    Ancient texts conceived India not as scattered isolated fragments, but as a single vast geographical and civilisational entity bounded by natural frontiers—the Himalayas in the north, and the ocean in the south, east, and west.</p>
    <p class="step"><strong>2. Cultural and Sacred Geography:</strong><br>
    • The <em>Vishnu Purana</em> explicitly states that all people living south of the Himalayas and north of the ocean belong to the same land: <em>"Varsham tad bharatam nama bharati yatra santatih."</em><br>
    • The epics <em>Mahabharata</em> and <em>Ramayana</em> enumerate kingdoms from Gandhara and Kashmir in the north to Kerala and Pandya in the south, demonstrating an organic civilisational consciousness.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for natural boundaries concept + 1.5 Marks for cultural unity evidenced in Puranas and Epics.'
  )}

  <!-- ================= SECTION B: LET'S EXPLORE IN-TEXT ACTIVITIES ================= -->
  <div class="ex-div">
    <div class="ex-heading">Let's Explore &amp; In-Text Practical Activities</div>
  </div>

  ${qCard(
    'c6sst-ch5-le1',
    'Activity 1',
    'Why Did Ancient Travelers and Scholars Travel to India?',
    'Explain',
    '<strong>In-Text "Let’s Explore" Activity:</strong><br>Why did ancient scholars, pilgrims, and travelers like Xuanzang, Megasthenes, and Al-Biruni undertake perilous journeys across deserts and mountain passes to visit India?',
    `<p class="step"><strong>1. Seeking Knowledge and Sacred Texts:</strong><br>
    Chinese Buddhist monks like Xuanzang (Hiuen Tsang) and Faxian traveled across Central Asia to study at world-renowned Indian universities like Nalanda, collect authentic Buddhist manuscripts, and visit sacred pilgrimage sites associated with the Buddha.</p>
    <p class="step"><strong>2. Trade and Economic Wealth:</strong><br>
    Traders from Rome, Greece, Arabia, and Persia came to purchase India\'s exquisite spices (black pepper, cardamom), fine cotton textiles (muslin), silk, pearls, and ivory.</p>
    <p class="step"><strong>3. Cultural Curiosity and Philosophy:</strong><br>
    Scholars like Megasthenes (Greek ambassador) and Al-Biruni (Persian scholar) came to observe India\'s advanced astronomy, mathematics, medicine (Ayurveda), and philosophical systems.</p>`,
    'CBSE Marking Scheme: 1 Mark for study at Nalanda/sacred Buddhist texts + 1 Mark for lucrative spice & textile trade + 1 Mark for scientific & philosophical curiosity.'
  )}

  <!-- ================= SECTION C: QUESTIONS, ACTIVITIES AND PROJECTS ================= -->
  <div class="ex-div">
    <div class="ex-heading">Questions, activities and projects (Official NCERT Textbook Exercises)</div>
  </div>

  ${qCard(
    'c6sst-ch5-q1',
    'Q1',
    'Sri Aurobindo Quotation on India\'s Cultural Unity',
    'Explain',
    `Discuss the significance of Sri Aurobindo's quotation regarding the spiritual and cultural unity of India: How did ancient India achieve deep unity despite having diverse languages, customs, and rulers? [3 Marks]`,
    `<p class="step"><strong>1. Core Essence of Sri Aurobindo\'s Thought:</strong><br>
    Sri Aurobindo observed that India's unity was never imposed through military conquest or uniform political tyranny; rather, it was built on a deep <strong>spiritual and cultural foundation</strong>.</p>
    <p class="step"><strong>2. Mechanisms of Ancient Unity:</strong><br>
    • <strong>Shared Sacred Epics &amp; Literature:</strong> The <em>Ramayana</em>, <em>Mahabharata</em>, and Puranas were translated and dramatized in every regional language across the subcontinent.<br>
    • <strong>Network of Pilgrimage (Tīrtha Yātrā):</strong> Sacred centers located in the four corners of India (Badrinath in the north, Rameshwaram in the south, Puri in the east, and Dwarka in the west) encouraged people to travel across regions, fostering mutual respect.<br>
    • <strong>Philosophy of Oneness (Vasudhaiva Kutumbakam):</strong> The civilisational belief that diverse paths lead to the same ultimate truth allowed multiple languages and local customs to flourish harmoniously within one umbrella.</p>`,
    'CBSE Marking Scheme: 1 Mark for understanding spiritual/cultural unity + 2 Marks for explaining pilgrimage networks, shared epics, and philosophical pluralism.'
  )}

  ${qCard(
    'c6sst-ch5-q2',
    'Q2',
    'True / False Statements with Historical Reasons',
    'Short',
    `State whether the following statements are True or False. Give valid historical reasons for each:<br>
    (i) The Rigveda describes the geography of the entire Indian subcontinent.<br>
    (ii) The Vishnu Purana provides a clear geographical boundary of the entire subcontinent from the Himalayas to the ocean.<br>
    (iii) The name 'Jambudvipa' was used in Emperor Ashoka's rock edicts.<br>
    (iv) The Mahabharata lists regions like Kashmir, Kutch, and Kerala, showing an awareness of the whole land.<br>
    (v) The term 'Hindustan' was first introduced in an ancient Greek inscription.`,
    `<ul class="step-list">
      <li><strong>(i) False:</strong> The Rigveda primarily describes the northwestern region of the subcontinent known as <em>Sapta Sindhu</em> (land of seven rivers), not the entire southern peninsula or northeastern regions.</li>
      <li><strong>(ii) True:</strong> The famous verse in the Vishnu Purana defines <em>Bharatvarsha</em> as the land situated north of the ocean and south of the snowy Himalayas.</li>
      <li><strong>(iii) True:</strong> Emperor Ashoka explicitly inscribed the name <em>Jambudvipa</em> on his Major Rock Edicts to describe his vast realm.</li>
      <li><strong>(iv) True:</strong> The Sabha Parva of the Mahabharata details royal expeditions and lists kingdoms stretching across Kashmir, Kutch, Assam (Kamarupa), and Kerala.</li>
      <li><strong>(v) False:</strong> The term 'Hindustan' was first used in a 3rd century CE Sasanian Persian rock inscription of King Shapur I, not in a Greek inscription (the Greeks used <em>Indos / Indike</em>).</li>
    </ul>`,
    'CBSE Marking Scheme: 0.5 Mark for each True/False answer + 0.5 Mark for valid historical reason (Total 5 Marks).'
  )}

  ${qCard(
    'c6sst-ch5-q3',
    'Q3',
    'Linguistic Derivation: Sindhu to India vs. Bharat',
    'Explain',
    'Trace the linguistic evolution from the Sanskrit word "Sindhu" to the modern name "India". How does the origin of the name "Bharat" differ from this?',
    `<p class="step"><strong>1. Evolution of "India":</strong></p>
    <ul class="step-list">
      <li><strong>Sanskrit Root:</strong> <em>Sindhu</em> (the great northwestern river Indus).</li>
      <li><strong>Old Persian:</strong> Persians replaced the "S" sound with "H", pronouncing the river as <em>Hindu</em>. In King Darius I's inscriptions (c. 518 BCE), the region was called <em>Hindush</em>.</li>
      <li><strong>Greek:</strong> Greeks dropped the "H" aspirate, referring to the river as <em>Indos</em> and the country as <em>Indike</em>.</li>
      <li><strong>Latin &amp; English:</strong> Romans adapted this into <em>India</em>, which became the standard international name.</li>
    </ul>
    <p class="step"><strong>2. Contrast with "Bharat":</strong><br>
    While "India" is an external geographical name given by foreign traders and travelers based on a border river, <strong>"Bharat"</strong> is an indigenous, cultural name rooted in the Vedic <em>Bharata clan</em>, celebrating internal civilisational heritage and righteous governance.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for tracing Sindhu &rarr; Hindu &rarr; Indos &rarr; India + 1.5 Marks for contrasting with Vedic indigenous origin of Bharat.'
  )}

  ${qCard(
    'c6sst-ch5-q4',
    'Q4',
    'Vishnu Purana Shloka and Subcontinental Borders',
    'Describe',
    'Quote or explain the famous shloka from Vishnu Purana defining Bharatvarsha. What does it prove about ancient Indian geographical awareness? [3 Marks]',
    `<p class="step"><strong>The Sanskrit Shloka (Vishnu Purana 2.3.1):</strong><br>
    <em>"Uttaram yat samudrasya himadreschaiva dakshinam |<br>
    Varsham tad bharatam nama bharati yatra santatih ||"</em></p>
    <p class="step"><strong>Meaning:</strong><br>
    "The country that lies north of the ocean and south of the snowy mountains is called <em>Bharat</em>; there dwell the descendants of Bharata (the Bharati)."</p>
    <p class="step"><strong>Significance:</strong><br>
    This shloka demonstrates that ancient Indian scholars had a remarkably precise geographical map of the subcontinent thousands of years ago, perceiving it as a single natural, bounded homeland.</p>`,
    'CBSE Marking Scheme: 1 Mark for quoting or explaining the verse + 1 Mark for exact boundaries (Himalayas in north, oceans in south) + 1 Mark for historical significance.'
  )}

  ${qCard(
    'c6sst-ch5-q5',
    'Q5',
    'Role of Natural Boundaries & Mountain Passes',
    'Long Answer',
    'How did the natural boundaries of the Indian subcontinent (the Himalayas and oceans) provide security, while mountain passes enabled cultural and economic exchange? [4 Marks]',
    `<p class="step"><strong>1. Protective Barriers:</strong><br>
    • <strong>The Himalayas in the North:</strong> Formidable physical wall that stopped freezing polar winds from Central Asia and provided a natural defence barrier against northern military invasions.<br>
    • <strong>The Seas in the South, East, and West:</strong> The Arabian Sea, Bay of Bengal, and Indian Ocean surrounded the peninsula, offering natural protection and fish resources.</p>
    <p class="step"><strong>2. Mountain Passes as Bridges:</strong><br>
    • The high northwestern mountains (Hindu Kush, Sulaiman) are pierced by natural mountain passes such as the <strong>Khyber Pass</strong> and <strong>Bolan Pass</strong>.<br>
    • These passes served as vital trade and cultural highways, allowing traders, pilgrims, scholars, and monks to carry Buddhism, mathematics, spices, and silk across Asia along the Silk Route.</p>`,
    'CBSE Marking Scheme: 2 Marks for Himalayan and ocean natural barriers + 2 Marks for northwestern passes as economic and cultural bridges.'
  )}

  ${qCard(
    'c6sst-ch5-q6',
    'Q6',
    'Article 1(1) of the Indian Constitution: "India, that is Bharat"',
    'Short',
    'What does Article 1(1) of the Constitution of India state? Why did the framers of the Constitution decide to include both "India" and "Bharat"? [3 Marks]',
    `<p class="step"><strong>1. Constitutional Text:</strong><br>
    Article 1(1) states: <strong>"India, that is Bharat, shall be a Union of States."</strong></p>
    <p class="step"><strong>2. Rationale of the Constituent Assembly (1949):</strong><br>
    • <strong>Bharat:</strong> Celebrates our millennia-old civilisational identity, cultural roots, and emotional heritage.<br>
    • <strong>India:</strong> Was the well-established international name recognized across treaties, the United Nations, and global diplomatic relations.<br>
    • By adopting <em>"India, that is Bharat"</em>, the framers harmoniously bridged ancient civilisational continuity with modern democratic nationhood.</p>`,
    'CBSE Marking Scheme: 1 Mark for quoting Article 1(1) + 2 Marks for explaining the dual significance of ancient cultural heritage (Bharat) and international diplomacy (India).'
  )}
</section>`;

// ============================================================================
// CHAPTER 6: THE BEGINNINGS OF INDIAN CIVILISATION
// ============================================================================
const ch6 = `<section class="chapter-section" id="ch6">
  <div class="chapter-header">
    <div class="ch-badge">6</div>
    <div class="chapter-header-info">
      <h2>Chapter 6: The Beginnings of Indian Civilisation</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — 100% Complete Textbook Questions (All 8 Exercises), The Big Questions, Travelogue Harappa to Kalibangan &amp; CBSE Rubrics | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Archaeological Concepts: The Harappan Civilisation</div>
    <ul class="concept-list">
      <li><strong>Terminology:</strong> Also known as the <em>Harappan Civilisation</em> (after Harappa, the first excavated site in 1921), the <em>Indus Valley Civilisation</em>, or the <em>Indus-Sarasvatī Civilisation</em> (over 60% of known settlements lie along the dried-up bed of the ancient Sarasvatī/Ghaggar-Hakra river).</li>
      <li><strong>Chronology:</strong> Mature urban phase flourished between <strong>c. 2600 BCE and 1900 BCE</strong>.</li>
      <li><strong>Outstanding Urban Features:</strong>
        <ul>
          <li><strong>Town Planning:</strong> Divided into two sections: an elevated <em>Citadel</em> in the west (public buildings) and a larger <em>Lower Town</em> in the east (residential houses). Grid pattern streets intersecting at right angles.</li>
          <li><strong>Standardised Baked Bricks:</strong> Interlocking burnt bricks made in a precise mathematical ratio of <strong>1:2:4</strong> (thickness:width:length) used uniformly across thousands of kilometres.</li>
          <li><strong>Covered Drainage &amp; Sanitation:</strong> Household wastewater flowed through terracotta pipes into covered street sewers equipped with inspection traps and silt pits.</li>
          <li><strong>Water Architecture:</strong> The <em>Great Bath</em> at Mohenjo-daro made watertight with natural bitumen; massive rock-cut water reservoirs at <em>Dholavira</em>; world's earliest tidal dockyard at <em>Lothal</em>.</li>
        </ul>
      </li>
      <li><strong>Crafts, Trade &amp; Decline:</strong> Steatite seals with unicorn/bull motifs and undeciphered script, bronze casting (Dancing Girl), cubical chert weights, and overseas trade with Mesopotamia (Meluhha). The civilisation declined around 1900 BCE due to the drying up of the Sarasvatī River and climatic shifts.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Harappan Town Layout & Drainage -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Standard Harappan City Layout: Citadel &amp; Lower Town</text>
      <!-- Citadel (West, High) -->
      <rect x="50" y="55" width="160" height="120" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <text x="130" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#92400e" text-anchor="middle">CITADEL (West)</text>
      <text x="130" y="100" font-family="system-ui, sans-serif" font-size="9.5" fill="#b45309" text-anchor="middle">• Elevated Mud-brick Platform</text>
      <text x="130" y="118" font-family="system-ui, sans-serif" font-size="9.5" fill="#b45309" text-anchor="middle">• Great Bath &amp; Granaries</text>
      <text x="130" y="136" font-family="system-ui, sans-serif" font-size="9.5" fill="#b45309" text-anchor="middle">• Public Ceremonies / Rulers</text>
      <text x="130" y="156" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#78350f" text-anchor="middle">Fortified with Walls</text>

      <!-- Lower Town (East, Wide) -->
      <rect x="260" y="55" width="250" height="120" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
      <text x="385" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0369a1" text-anchor="middle">LOWER TOWN (East)</text>
      <text x="385" y="100" font-family="system-ui, sans-serif" font-size="9.5" fill="#0284c7" text-anchor="middle">• Broad Streets in Grid Pattern</text>
      <text x="385" y="118" font-family="system-ui, sans-serif" font-size="9.5" fill="#0284c7" text-anchor="middle">• Multi-room Courtyard Houses</text>
      <text x="385" y="136" font-family="system-ui, sans-serif" font-size="9.5" fill="#0284c7" text-anchor="middle">• Covered Drains &amp; Soak Pits</text>
      <text x="385" y="156" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#075985" text-anchor="middle">Citizens, Artisans &amp; Merchants</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 6.1: Dual division of Harappan cities (Citadel and Lower Town)</div>
  </div>

  <!-- ================= SECTION A: THE BIG QUESTIONS ================= -->
  <div class="ex-div">
    <div class="ex-heading">The Big Questions (Chapter Inquiry &amp; Openers)</div>
  </div>

  ${qCard(
    'c6sst-ch6-bq1',
    'Big Q1',
    'Why Did Early Cities Emerge Along Indus and Sarasvatī?',
    'Concept',
    'Why did India’s first urban civilisation develop along the valleys of the Indus and Sarasvatī rivers? What natural advantages supported urban growth?',
    `<p class="step"><strong>1. Perennial Water Supply:</strong><br>
    The Himalayan snow-fed Indus and Sarasvatī rivers provided reliable year-round freshwater for large city populations, agriculture, and animal husbandry.</p>
    <p class="step"><strong>2. Rich Alluvial Soil:</strong><br>
    Annual river flooding deposited fertile silt across floodplains, allowing farmers to produce large agricultural surpluses of wheat, barley, pulses, and cotton to feed non-farming city populations.</p>
    <p class="step"><strong>3. Riverine Transport Highways:</strong><br>
    Boats could easily transport heavy building timber, stones, and agricultural goods between riverine settlements.</p>`,
    'CBSE Marking Scheme: 1 Mark for water supply + 1 Mark for alluvial fertility & food surplus + 1 Mark for riverine transport routes.'
  )}

  ${qCard(
    'c6sst-ch6-bq2',
    'Big Q2',
    'What Innovations Made Harappan Cities Unique in Antiquity?',
    'Explain',
    'What technological, civic, and architectural innovations distinguished the Harappan cities from other ancient Bronze Age civilisations?',
    `<p class="step"><strong>1. Scientific Town Planning:</strong><br>
    Harappan towns were laid out on a meticulous grid plan with wide streets crossing at right angles, unlike the cramped, winding alleys of contemporary Mesopotamia or Egypt.</p>
    <p class="step"><strong>2. Covered Drainage &amp; Domestic Sanitation:</strong><br>
    Almost every house had a private bathing area and toilet with drains emptying into covered street sewers equipped with inspection traps and soak pits.</p>
    <p class="step"><strong>3. Standardization of Bricks and Weights:</strong><br>
    Baked bricks followed an exact uniform ratio (1:2:4) across hundreds of towns spanning 1.5 million sq km, supported by binary chert weights for fair trade.</p>`,
    'CBSE Marking Scheme: 1 Mark for grid town planning + 1 Mark for covered underground drainage + 1 Mark for standard bricks (1:2:4) and weights.'
  )}

  <!-- ================= SECTION C: QUESTIONS, ACTIVITIES AND PROJECTS ================= -->
  <div class="ex-div">
    <div class="ex-heading">Questions, activities and projects (All 8 Official NCERT Textbook Exercises)</div>
  </div>

  ${qCard(
    'c6sst-ch6-q1',
    'Q1',
    'Why Is the Civilisation Known by Multiple Names?',
    'Short',
    'Why is this civilisation known by multiple names—Harappan, Indus Valley, and Indus-Sarasvatī Civilisation? Why is "Harappan Civilisation" the standard archaeological term? [3 Marks]',
    `<p class="step"><strong>1. Indus Valley Civilisation:</strong><br>
    Early excavations in the 1920s took place around the Indus River valley (Harappa on the Ravi and Mohenjo-daro on the Indus), leading historians to coin this name.</p>
    <p class="step"><strong>2. Indus-Sarasvatī Civilisation:</strong><br>
    Subsequent discoveries revealed that over 60% of all Harappan settlements were situated along the basin of the sacred Sarasvatī River (today’s Ghaggar-Hakra dry river bed), justifying this title.</p>
    <p class="step"><strong>3. Why "Harappan Civilisation" Is Preferred:</strong><br>
    In archaeology, international convention mandates that when a previously unknown ancient culture is discovered, it is officially named after the <strong>type-site</strong>—the very first site where its remains were excavated. Since Harappa was excavated first in 1921 by Daya Ram Sahni, archaeologists call it the <em>Harappan Civilisation</em>.</p>`,
    'CBSE Marking Scheme: 1 Mark for Indus Valley origin + 1 Mark for Indus-Sarasvatī concentration + 1 Mark for archaeological type-site naming convention (Harappa in 1921).'
  )}

  ${qCard(
    'c6sst-ch6-q2',
    'Q2',
    '150–200 Word Report: Achievements of the Civilisation',
    'Long Answer',
    'Write a concise report (150–200 words) on the remarkable achievements of the Harappan Civilisation in town planning, engineering, and crafts. [5 Marks]',
    `<p class="step"><strong>Report: The Architectural and Technological Marvels of the Harappan Civilisation</strong></p>
    <p class="step">The Harappan Civilisation (c. 2600–1900 BCE) represents South Asia’s earliest urban revolution. Its achievements include:
    <br><br>
    <strong>1. Advanced Urban Planning:</strong> Cities were divided into an elevated western Citadel (for public and administrative buildings) and a Lower Town for residential housing. Streets were aligned north-south and east-west in a precise grid.<br><br>
    <strong>2. Unsurpassed Sanitation:</strong> Every household had private paved bathrooms. Wastewater discharged through clay conduits into covered street sewers made of baked bricks with removable inspection slabs for desilting—a public hygiene standard unmatched in the ancient world.<br><br>
    <strong>3. Standardization &amp; Engineering:</strong> Standardized burnt bricks (1:2:4 ratio) were used everywhere. At Dholavira, rock-cut water reservoirs harvested scarce monsoon rainwater, while Lothal featured the world’s earliest tidal dockyard.<br><br>
    <strong>4. Art, Crafts &amp; Commerce:</strong> Craftspersons produced intricate steatite seals, bronze sculptures (like the Dancing Girl), carnelian beads, and cubical chert weights, maintaining flourishing maritime trade with ancient Mesopotamia.</p>`,
    'CBSE Marking Scheme: 1 Mark for grid town planning + 1.5 Marks for covered drainage & sanitation + 1 Mark for brick & water engineering (Dholavira/Lothal) + 1.5 Marks for crafts, metallurgy, and trade.'
  )}

  ${qCard(
    'c6sst-ch6-q3',
    'Q3',
    'Journey from Harappa to Kalibangan in 2500 BCE',
    'Long Answer',
    `Imagine you are traveling from Harappa to Kalibangan in the year 2500 BCE. Describe the modes of transport, the landscape, the goods you might carry, and what you would see upon arrival. [4 Marks]`,
    `<p class="step"><strong>1. Modes of Transport:</strong><br>
    We would travel across land using solid wooden-wheeled <strong>bullock carts</strong> drawn by humped oxen (as evidenced by terracotta toy carts excavated at Harappa), and journey along the river network using flat-bottomed wooden boats with oars.</p>
    <p class="step"><strong>2. The Landscape:</strong><br>
    The terrain transitioned from the fertile river plains of the Ravi and Indus to the green floodplains of the flowing Sarasvatī River. Along the way, we would pass agricultural villages harvesting wheat, barley, and cotton.</p>
    <p class="step"><strong>3. Goods Carried for Trade:</strong><br>
    We would carry finished steatite seals, carnelian beads from Gujarat, and bronze tools to exchange for copper ingots from Rajasthan (Khetri mines) and agricultural grain.</p>
    <p class="step"><strong>4. Arrival at Kalibangan:</strong><br>
    Upon reaching Kalibangan (in Rajasthan), we would see fortified mud-brick walls, ploughed agricultural fields showing furrow marks, and rows of ceremonial <em>fire altars</em> built on mud-brick platforms.</p>`,
    'CBSE Marking Scheme: 1 Mark for transport (bullock carts & boats) + 1 Mark for landscape description + 1 Mark for trade goods (beads, bronze, copper) + 1 Mark for Kalibangan features (ploughed field, fire altars).'
  )}

  ${qCard(
    'c6sst-ch6-q4',
    'Q4',
    'A Harappan Visitor in a Modern Indian Kitchen',
    'Think & Answer',
    'If an ancient Harappan citizen were magically transported into a modern Indian kitchen today, what things would surprise them, and what things would feel familiar? [4 Marks]',
    `<p class="step"><strong>1. Things That Would Feel Familiar:</strong><br>
    • <strong>Grains and Ingredients:</strong> Wheat flour (atta), barley, mustard seeds, sesame (til), chickpeas, lentils, and peas.<br>
    • <strong>Cooking Utensils &amp; Tools:</strong> Clay pots (matkas), round stone rolling boards (chakla), pestle and mortar for grinding spices, and open flame cooking.<br>
    • <strong>Use of Cotton Aprons:</strong> The fabric of cotton clothes and simple clay lamps.</p>
    <p class="step"><strong>2. Things That Would Completely Surprise Them:</strong><br>
    • <strong>Modern Materials:</strong> Shiny stainless steel thalis, plastic containers, and glass jars.<br>
    • <strong>Electric Appliances:</strong> Electric refrigerators, microwave ovens, blender-mixers, and chimney exhausts.<br>
    • <strong>LPG Gas Stoves &amp; Running Tap Water:</strong> Cooking without firewood on metal gas burners, and turning on shiny metal taps to get running water instead of drawing water from a brick well.</p>`,
    'CBSE Marking Scheme: 2 Marks for identifying familiar items (wheat, barley, clay pots, mortar/pestle) + 2 Marks for identifying surprising modern items (steel, electricity, gas stove, tap water).'
  )}

  ${qCard(
    'c6sst-ch6-q5',
    'Q5',
    'Water Management: Great Bath & Dholavira Reservoirs',
    'Explain',
    'Describe the remarkable water management and sanitation engineering of the Harappan Civilisation with special reference to Mohenjo-daro’s Great Bath and Dholavira’s rock-cut reservoirs. [4 Marks]',
    `<p class="step"><strong>1. The Great Bath at Mohenjo-daro:</strong><br>
    • A magnificent rectangular pool built of finely fitted baked bricks laid on edge.<br>
    • Made completely watertight with a thick backing layer of <strong>natural bitumen (asphalt)</strong> between brick layers.<br>
    • Featured flights of steps on north and south ends, surrounding rooms for changing clothes, and a huge corbelled drain to empty and clean dirty bath water.</p>
    <p class="step"><strong>2. Rainwater Harvesting at Dholavira (Rann of Kutch):</strong><br>
    • Because Kutch experienced low rainfall, engineers excavated <strong>16 massive rock-cut reservoirs</strong>.<br>
    • Stone dams were built across seasonal streams (Manhar and Mansar) to divert rainwater through stone channels into gigantic storage tanks, providing fresh water year-round.</p>`,
    'CBSE Marking Scheme: 2 Marks for Great Bath construction (bitumen waterproofing, steps, drainage) + 2 Marks for Dholavira rock-cut reservoirs and rainwater harvesting dams.'
  )}

  ${qCard(
    'c6sst-ch6-q6',
    'Q6',
    'Archaeological Evidence of Harappan Civic Sense',
    'Short',
    'What archaeological evidence proves that Harappan citizens and administrators had a highly developed civic sense? Give three examples. [3 Marks]',
    `<p class="step"><strong>1. Public Covered Sewerage:</strong><br>
    Rather than dumping household waste into the streets, every family discharged waste through individual wall chutes into underground brick-covered sewers.</p>
    <p class="step"><strong>2. Regular Street Dustbins and Soak Pits:</strong><br>
    Excavations revealed terracotta soak jars and public waste disposal bins placed along streets for solid garbage collection.</p>
    <p class="step"><strong>3. Strict Enforcement of Building Regulations:</strong><br>
    House doors never opened into busy main avenues (preventing traffic blocks), and private houses were strictly forbidden from encroaching onto public streets.</p>`,
    'CBSE Marking Scheme: 1 Mark each for covered underground drainage, street dustbins/soak pits, and strict anti-encroachment building rules.'
  )}

  ${qCard(
    'c6sst-ch6-q7',
    'Q7',
    'Harappan Seals, Script and International Trade',
    'Short',
    'Describe the Harappan seals. What materials were they made of, what symbols were carved on them, and how were they used in long-distance maritime trade? [3 Marks]',
    `<p class="step"><strong>1. Material &amp; Crafting:</strong><br>
    Most seals were square or rectangular tablets carved out of soft stone called <strong>steatite</strong> (soapstone), then baked to harden.</p>
    <p class="step"><strong>2. Motifs &amp; Inscriptions:</strong><br>
    Carved with lifelike animal figures (the humped bull, elephant, tiger, and the mythological unicorn) alongside short inscriptions written in the undeciphered Harappan pictographic script.</p>
    <p class="step"><strong>3. Role in International Trade:</strong><br>
    Merchants tied wet clay tags around bundles of trade goods and stamped their seal into the clay. If the seal impression arrived intact at ports in Mesopotamia (Oman, Bahrain, Ur), the buyer knew the shipment had not been tampered with.</p>`,
    'CBSE Marking Scheme: 1 Mark for steatite material + 1 Mark for animal motifs and undeciphered script + 1 Mark for sealing goods for trade security.'
  )}

  ${qCard(
    'c6sst-ch6-q8',
    'Q8',
    'Causes of the Decline of the Harappan Civilisation',
    'Short',
    'Why did the great Harappan civilisation decline around 1900 BCE? Explain the major environmental and geographical factors identified by archaeologists. [3 Marks]',
    `<p class="step"><strong>1. Drying Up of the Sarasvatī River:</strong><br>
    Geological shifts and earthquakes diverted tributaries (like the Yamuna and Sutlej) away from the Sarasvatī River basin, causing this lifeline river to gradually dry up and forcing mass migrations eastward towards the Ganga plains.</p>
    <p class="step"><strong>2. Climate Change and Deforestation:</strong><br>
    Felling massive forests to bake billions of bricks and smelt copper, combined with a weakening monsoon, led to desertification and severe crop failures.</p>
    <p class="step"><strong>3. Devastating Floods and Trade Collapse:</strong><br>
    Repeated silt-laden flooding of the Indus submerged cities like Mohenjo-daro, while the collapse of trade with Mesopotamia impoverished the urban merchant class.</p>`,
    'CBSE Marking Scheme: 1 Mark for drying of Sarasvatī River + 1 Mark for deforestation & weakened monsoon + 1 Mark for flooding and trade collapse.'
  )}
</section>`;

// ============================================================================
// CHAPTER 7: INDIA'S CULTURAL ROOTS
// ============================================================================
const ch7 = `<section class="chapter-section" id="ch7">
  <div class="chapter-header">
    <div class="ch-badge">7</div>
    <div class="chapter-header-info">
      <h2>Chapter 7: India’s Cultural Roots</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — 100% Complete Textbook Questions (All 15 Exercises &amp; Activities), The Big Questions, Nachiketa &amp; CBSE Rubrics | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Philosophical &amp; Cultural Concepts</div>
    <ul class="concept-list">
      <li><strong>The Four Vedas:</strong> The foundational texts of ancient Indian knowledge traditions:
        <ul>
          <li><strong>Rigveda:</strong> The oldest Veda (composed over 3,500 years ago), containing 1,028 hymns (*suktas*) dedicated to cosmic deities (Agni, Indra, Soma, Varuna).</li>
          <li><strong>Samaveda:</strong> The Veda of melodic chants and musical notation.</li>
          <li><strong>Yajurveda:</strong> Ritual formulas, prose prayers, and ethical rules of sacrifice.</li>
          <li><strong>Atharvaveda:</strong> Daily life, healing charms, herbal medicine, and social peace.</li>
        </ul>
      </li>
      <li><strong>The Upanishads:</strong> Philosophical inquiries into the nature of reality:
        <ul>
          <li><em>Brahman:</em> The ultimate universal consciousness and origin of all existence.</li>
          <li><em>Ātman:</em> The inner individual soul, identical in essence with Brahman (<em>Tat Tvam Asi</em>).</li>
          <li>Learned thinkers included women scholars like <strong>Gargi Vachaknavi</strong> and <strong>Maitreyi</strong>, and seekers of humble birth like <strong>Satyakama Jabala</strong>.</li>
        </ul>
      </li>
      <li><strong>Teachings of Gautama Buddha (Buddhism):</strong>
        <ul>
          <li><em>Four Noble Truths (*Arya Satyani*):</em> Life contains suffering; suffering has a cause (desire/attachment); suffering can end; the path to end suffering is the Eightfold Path (*Ashtangika Marga*).</li>
          <li>Emphasis on non-violence (*Ahimsa*), compassion (*Karuna*), and equality, rejecting rigid caste discrimination and animal sacrifice.</li>
        </ul>
      </li>
      <li><strong>Teachings of Bhagavan Mahavira (Jainism):</strong>
        <ul>
          <li>Five Great Vows (*Mahavratas*): Ahimsa (non-violence to all living beings), Satya (truth), Asteya (non-stealing), Brahmacharya (chastity), and Aparigraha (non-possession).</li>
          <li><em>Anekantavada:</em> The multi-faceted, pluralistic nature of truth.</li>
        </ul>
      </li>
      <li><strong>Shared Epics and Folk Heritage:</strong> The <em>Ramayana</em> and <em>Mahabharata</em>, alongside tribal traditions of nature reverence, knit the entire cultural tapestry of the subcontinent.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Cultural Traditions of Ancient India -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Foundational Pillars of India’s Cultural Roots</text>
      <!-- 4 Pillars -->
      <rect x="20" y="50" width="115" height="130" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="77" y="75" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e" text-anchor="middle">The Vedas</text>
      <text x="77" y="98" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Rig, Sama,</text>
      <text x="77" y="114" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Yajur, Atharva</text>
      <text x="77" y="136" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#78350f" text-anchor="middle">Cosmic Order</text>
      <text x="77" y="152" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">(Rita &amp; Dharma)</text>

      <rect x="155" y="50" width="115" height="130" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="212" y="75" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">Upanishads</text>
      <text x="212" y="98" font-family="system-ui, sans-serif" font-size="9" fill="#0284c7" text-anchor="middle">Brahman &amp; Ātman</text>
      <text x="212" y="114" font-family="system-ui, sans-serif" font-size="9" fill="#0284c7" text-anchor="middle">Nachiketa, Gargi</text>
      <text x="212" y="136" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#075985" text-anchor="middle">Self-Knowledge</text>
      <text x="212" y="152" font-family="system-ui, sans-serif" font-size="8.5" fill="#075985" text-anchor="middle">(Truth &amp; Inquiry)</text>

      <rect x="290" y="50" width="115" height="130" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="347" y="75" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">Buddhism</text>
      <text x="347" y="98" font-family="system-ui, sans-serif" font-size="9" fill="#16a34a" text-anchor="middle">Gautama Buddha</text>
      <text x="347" y="114" font-family="system-ui, sans-serif" font-size="9" fill="#16a34a" text-anchor="middle">Four Noble Truths</text>
      <text x="347" y="136" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#14532d" text-anchor="middle">Eightfold Path</text>
      <text x="347" y="152" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">(Karuna &amp; Sangha)</text>

      <rect x="425" y="50" width="115" height="130" rx="8" fill="#fae8ff" stroke="#a855f7" stroke-width="2"/>
      <text x="482" y="75" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#7e22ce" text-anchor="middle">Jainism</text>
      <text x="482" y="98" font-family="system-ui, sans-serif" font-size="9" fill="#9333ea" text-anchor="middle">Bhagavan Mahavira</text>
      <text x="482" y="114" font-family="system-ui, sans-serif" font-size="9" fill="#9333ea" text-anchor="middle">Five Great Vows</text>
      <text x="482" y="136" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#581c87" text-anchor="middle">Supreme Ahimsa</text>
      <text x="482" y="152" font-family="system-ui, sans-serif" font-size="8.5" fill="#581c87" text-anchor="middle">(Anekantavada)</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 7.1: The four foundational philosophical traditions of ancient India</div>
  </div>

  <!-- ================= SECTION A: THE BIG QUESTIONS ================= -->
  <div class="ex-div">
    <div class="ex-heading">The Big Questions (Chapter Inquiry &amp; Openers)</div>
  </div>

  ${qCard(
    'c6sst-ch7-bq1',
    'Big Q1',
    'What Are the Core Philosophical Roots of Ancient India?',
    'Concept',
    'What are the core philosophical roots of ancient India? How did early thinkers explain the universe, human nature, and duty?',
    `<p class="step"><strong>1. Concept of Cosmic Order and Truth:</strong><br>
    Early Indian thought began with the Vedic realization of <em>Rita</em> (the harmonious cosmic order) and <em>Satya</em> (universal truth). Thinkers observed that the natural universe operates on mutual support and balance.</p>
    <p class="step"><strong>2. Evolution into Dharma and Self-Knowledge:</strong><br>
    Over centuries, this developed into the concept of <strong>Dharma</strong> (righteous living, duty, and social harmony) and the search for <strong>Ātman</strong> (the true spiritual self) in the Upanishads, culminating in the ethical philosophies of compassion in Buddhism and non-violence in Jainism.</p>`,
    'CBSE Marking Scheme: 1 Mark for Rita and Satya + 1 Mark for Dharma + 1 Mark for Ātman and ethical teachings.'
  )}

  ${qCard(
    'c6sst-ch7-bq2',
    'Big Q2',
    'How Did Upanishads, Buddha &amp; Mahavira Seek Truth?',
    'Explain',
    'How did the Upanishads, Gautama Buddha, and Bhagavan Mahavira seek truth and guide human beings toward a moral life?',
    `<p class="step"><strong>1. The Upanishads:</strong><br>
    Encouraged deep questioning, dialogue between masters and students, meditation, and realizing that all beings share the same divine essence (<em>Brahman</em>).</p>
    <p class="step"><strong>2. Gautama Buddha:</strong><br>
    Taught that suffering is caused by craving and attachment. He prescribed the practical <em>Eightfold Path</em> (Middle Way) focusing on ethical conduct, mindful meditation, and universal loving-kindness.</p>
    <p class="step"><strong>3. Bhagavan Mahavira:</strong><br>
    Emphasized absolute reverence for all life through <em>Ahimsa</em>, disciplined self-restraint, truthfulness, and recognizing that multiple viewpoints can be valid (<em>Anekantavada</em>).</p>`,
    'CBSE Marking Scheme: 1 Mark each for Upanishadic dialogue, Buddha\'s Eightfold Path, and Mahavira\'s Ahimsa/Anekantavada.'
  )}

  <!-- ================= SECTION C: QUESTIONS, ACTIVITIES AND PROJECTS ================= -->
  <div class="ex-div">
    <div class="ex-heading">Questions, activities and projects (All 15 Official NCERT Exercises &amp; Projects)</div>
  </div>

  ${qCard(
    'c6sst-ch7-q1',
    'Q1',
    '"If You Were Nachiketa, What Questions Would You Ask Yama?"',
    'Creative Writing',
    `If you were Nachiketa, what questions would you ask Yama? Write a short reflection (100–150 words) on what you would want to learn about life, duty, and truth. [3 Marks]`,
    `<p class="step"><strong>Model Reflection (Nachiketa’s Inquiries):</strong></p>
    <p class="step">If I were in young Nachiketa\'s position standing before Yama, the Lord of Death, I would not ask for worldly wealth, gold, palaces, or long bodily life, because all material possessions eventually perish. Instead, I would ask three fundamental questions:
    <br><br>
    <strong>1. The Nature of True Self:</strong> What is the true self (<em>Ātman</em>) that remains when the physical body dies? How can a human being realize this eternal truth?<br>
    <strong>2. Choosing the Good over the Pleasant:</strong> How can young people develop the wisdom to choose <em>Shreyas</em> (the path of righteousness, truth, and long-term goodness) over <em>Preyas</em> (the path of fleeting sensory pleasures and instant gratification)?<br>
    <strong>3. The Purpose of Living:</strong> What is our ultimate duty on this planet—how can we live a life filled with courage, compassion, and selfless service to all living beings?</p>`,
    'CBSE Marking Scheme: 1 Mark for rejecting material illusions + 1 Mark for inquiry into Ātman/eternal truth + 1 Mark for Shreyas vs Preyas and moral duty.'
  )}

  ${qCard(
    'c6sst-ch7-q2',
    'Q2',
    'Four Noble Truths and Eightfold Path of the Buddha',
    'Explain',
    'Explain the Four Noble Truths and the Eightfold Path (*Ashtangika Marga*) taught by Gautama Buddha. [4 Marks]',
    `<p class="step"><strong>1. The Four Noble Truths (*Chatvari Arya Satyani*):</strong><br>
    • <strong>Dukkha:</strong> Life involves suffering, dissatisfaction, and sorrow.<br>
    • <strong>Samudaya:</strong> The root cause of suffering is craving (*tanha*), ignorance, and attachment.<br>
    • <strong>Nirodha:</strong> Suffering can be eliminated by ending craving.<br>
    • <strong>Magga:</strong> The practical path that leads to the cessation of suffering is the Eightfold Path.</p>
    <p class="step"><strong>2. The Eightfold Path (*Ashtangika Marga*):</strong><br>
    Divided into Wisdom, Ethical Conduct, and Mental Discipline:
    1. Right View &nbsp; 2. Right Intention &nbsp; 3. Right Speech &nbsp; 4. Right Action &nbsp; 5. Right Livelihood &nbsp; 6. Right Effort &nbsp; 7. Right Mindfulness &nbsp; 8. Right Concentration.<br>
    This path avoids extreme ascetic self-torture and extreme sensory luxury, representing the <strong>Middle Path</strong> (*Majjhima Patipada*).</p>`,
    'CBSE Marking Scheme: 2 Marks for Four Noble Truths + 2 Marks for Eightfold Path components and Middle Path concept.'
  )}

  ${qCard(
    'c6sst-ch7-q3',
    'Q3',
    'Core Principles of Jainism: Ahimsa and the Five Vows',
    'Explain',
    'Explain the Five Great Vows (*Mahavratas*) and core principles of Jainism taught by Bhagavan Mahavira. [3 Marks]',
    `<p class="step"><strong>1. The Five Great Vows (*Mahavratas*):</strong><br>
    • <strong>Ahiṃsā:</strong> Supreme non-violence—causing no injury or harm to any living being (humans, animals, plants, or insects) in thought, speech, or action.<br>
    • <strong>Satya:</strong> Truthfulness in all circumstances.<br>
    • <strong>Asteya:</strong> Non-stealing; taking nothing that is not freely given.<br>
    • <strong>Brahmacharya:</strong> Chastity and pure sensory conduct.<br>
    • <strong>Aparigraha:</strong> Non-possession; limiting material accumulation to prevent greed.</p>
    <p class="step"><strong>2. Anekantavada (Many-Sidedness of Truth):</strong><br>
    Mahavira taught that reality is complex and truth can be seen from multiple perspectives. Therefore, one must practice intellectual humility and respect the viewpoints of others.</p>`,
    'CBSE Marking Scheme: 2 Marks for listing and defining the 5 Mahavratas + 1 Mark for explaining Ahimsa and Anekantavada.'
  )}

  ${qCard(
    'c6sst-ch7-q4',
    'Q4',
    'Buddha Quotation: Inner Purity over Birth',
    'Explain',
    `Discuss the social significance of the Buddha's quotation:<br>
    <em>"Not by birth does one become an outcast, not by birth does one become a Brahmin. By deeds one becomes an outcast, by deeds one becomes a Brahmin."</em> [3 Marks]`,
    `<p class="step"><strong>1. Rejection of Birth-Based Caste Superiority:</strong><br>
    During the Buddha's time, orthodox society claimed that a person's spiritual worth and social superiority were determined solely by the family or caste they were born into. The Buddha directly refuted this dogma.</p>
    <p class="step"><strong>2. Supremacy of Moral Character (Karma):</strong><br>
    The Buddha established that true nobility is defined by one's <strong>actions, ethical conduct, compassion, and truthfulness</strong>. A person born in a priestly family who lies, steals, and harms animals is spiritually degraded; conversely, a humble worker who practices truth, kindness, and self-restraint is a true Brahmin.</p>
    <p class="step"><strong>3. Revolutionary Social Impact:</strong><br>
    This teaching opened the doors of the monastic Sangha and spiritual liberation to everyone—shudras, outcastes, women, rich merchants, and kings alike—fostering profound social equality.</p>`,
    'CBSE Marking Scheme: 1 Mark for rejecting birth-based hierarchy + 1 Mark for character and deeds defining nobility + 1 Mark for opening Sangha to all classes.'
  )}

  ${qCard(
    'c6sst-ch7-q5',
    'Q5',
    'Women Thinkers in the Upanishads: Gargi and Maitreyi',
    'Short',
    'Discuss the role and contributions of learned women like Gargi Vachaknavi and Maitreyi in Vedic philosophical dialogues. [3 Marks]',
    `<p class="step"><strong>1. Gargi Vachaknavi:</strong><br>
    A brilliant female philosopher who participated in the royal philosophical debate organized by King Janaka of Videha. She fearlessly challenged the eminent sage Yajnavalkya with sharp, profound questions about the ultimate foundation of the cosmos, earning tremendous respect among ancient scholars.</p>
    <p class="step"><strong>2. Maitreyi:</strong><br>
    The scholarly wife of sage Yajnavalkya in the <em>Brihadaranyaka Upanishad</em>. When offered material wealth upon his retirement, she famously asked: <em>"If this whole earth filled with wealth were mine, would I become immortal through it?"</em> Upon being told no, she chose spiritual wisdom and self-knowledge (<em>Atma-vidya</em>) over material riches.</p>
    <p class="step"><strong>Significance:</strong><br>
    Their prominent presence proves that ancient Vedic society provided high intellectual education and philosophical freedom to women thinkers.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for Gargi\'s debate with Yajnavalkya + 1.5 Marks for Maitreyi\'s quest for immortality over wealth.'
  )}

  ${qCard(
    'c6sst-ch7-q6',
    'Q6',
    'The Story of Satyakama Jabala and Truth (*Satya*)',
    'Short',
    'How does the story of Satyakama Jabala from the Chandogya Upanishad show that truthfulness was valued above birth and lineage? [3 Marks]',
    `<p class="step"><strong>1. The Question of Lineage:</strong><br>
    Young Satyakama wished to study Vedic wisdom under the sage Gautama. When asked about his parentage and gotra, his mother Jabala truthfully told him that she was a maidservant who had served in many homes and did not know his father\'s name.</p>
    <p class="step"><strong>2. Courageous Truth:</strong><br>
    Instead of fabricating a noble family name, Satyakama went before the sage and spoke the exact truth about his mother\'s humble status.</p>
    <p class="step"><strong>3. Sage Gautama\'s Decision:</strong><br>
    Impressed, Sage Gautama declared: <em>"None but a true seeker could speak such unvarnished truth. Fetch the firewood; I will initiate you, for you have not departed from truth."</em> He accepted him as his foremost student, demonstrating that character and truthfulness transcended hereditary birth.</p>`,
    'CBSE Marking Scheme: 1 Mark for Jabala\'s humble status + 1 Mark for Satyakama speaking unvarnished truth + 1 Mark for sage recognizing truthfulness as true nobility.'
  )}

  ${qCard(
    'c6sst-ch7-q7',
    'Q7',
    'The Four Vedas and Their Essential Contents',
    'Short',
    'Name the four Vedas and summarize the key subject matter of each text. [3 Marks]',
    `<ul class="step-list">
      <li><strong>1. Rigveda:</strong> The earliest Veda; a compilation of 1,028 hymns (*suktas*) dedicated to cosmic deities (Agni, Indra, Soma) praising the harmony of the universe.</li>
      <li><strong>2. Samaveda:</strong> The Veda of melodic music; contains poetic verses from the Rigveda set to musical notes and chants, forming the root of classical Indian music.</li>
      <li><strong>3. Yajurveda:</strong> The Veda of sacrificial rituals, prose prayers, and ethical rules of conduct for ceremonies.</li>
      <li><strong>4. Atharvaveda:</strong> Focused on practical daily life, containing medical healing charms, prayers for agricultural prosperity, domestic peace, and societal harmony.</li>
    </ul>`,
    'CBSE Marking Scheme: 0.75 Mark for each correctly described Veda (Total 3 Marks).'
  )}

  ${qCard(
    'c6sst-ch7-q8',
    'Q8',
    'The Concepts of Dharma and Karma in Indian Thought',
    'Short',
    'Define the concepts of "Dharma" and "Karma" in Indian philosophy. How did they guide moral conduct?',
    `<p class="step"><strong>1. Dharma:</strong><br>
    Refers to righteous duty, cosmic order, moral ethics, and living in harmony with nature and society. It reminds human beings that every action must protect truth and collective well-being.</p>
    <p class="step"><strong>2. Karma:</strong><br>
    The universal law of moral cause and effect: every action (thought, word, deed) produces a corresponding fruit or consequence. Noble, compassionate actions bring inner peace and elevation, while harmful, deceitful actions bring sorrow and downfall.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for definition of Dharma + 1.5 Marks for definition of Karma (cause & effect).'
  )}

  ${qCard(
    'c6sst-ch7-q9',
    'Q9',
    'Upanishadic Concepts: Brahman and Ātman',
    'Concept',
    'What do the terms "Brahman" and "Ātman" signify in the Upanishads? What is their fundamental relationship?',
    `<p class="step"><strong>1. Brahman:</strong><br>
    The infinite, formless, supreme universal consciousness that pervades and sustains the entire cosmos.</p>
    <p class="step"><strong>2. Ātman:</strong><br>
    The inner immortal self or soul residing within every individual living being.</p>
    <p class="step"><strong>3. Their Core Relationship (Tat Tvam Asi):</strong><br>
    The central realization of the Upanishads is that the individual soul (Ātman) and the supreme universal reality (Brahman) are ultimately identical in essence (<em>"Aham Brahmasmi"</em> and <em>"Tat Tvam Asi"</em> — That Thou Art). Realizing this oneness dissolves all hatred and fear.</p>`,
    'CBSE Marking Scheme: 1 Mark for Brahman + 1 Mark for Ātman + 1 Mark for their oneness (Tat Tvam Asi).'
  )}

  ${qCard(
    'c6sst-ch7-q10',
    'Q10',
    'Why Did Buddhism and Jainism Appeal to Common People?',
    'Explain',
    'Why did Buddhism and Jainism gain rapid, widespread popularity among common people, farmers, artisans, and merchants? [3 Marks]',
    `<p class="step"><strong>1. Use of Vernacular Languages (Prakrit and Pali):</strong><br>
    While Vedic texts were composed in Sanskrit (known mainly to elite priests), Buddha and Mahavira preached in <em>Prakrit and Pali</em>, the everyday spoken languages of the masses.</p>
    <p class="step"><strong>2. Opposition to Costly Rituals and Animal Sacrifices:</strong><br>
    Orthodox rituals had become expensive and involved sacrificing valuable cattle. Common farmers and cattle herders welcomed the philosophy of <em>Ahimsa</em> which protected cattle essential for agriculture.</p>
    <p class="step"><strong>3. Rejection of Hereditary Caste Discrimination:</strong><br>
    Both traditions welcomed traders (vaishyas), artisans, shudras, and women into their Sanghas as spiritual equals, giving them profound dignity and social self-respect.</p>`,
    'CBSE Marking Scheme: 1 Mark for vernacular languages (Pali/Prakrit) + 1 Mark for simple ethics & cattle protection + 1 Mark for social equality and non-discrimination.'
  )}

  ${qCard(
    'c6sst-ch7-q11',
    'Q11',
    'The Buddhist Sangha: Monastic Rules and Life',
    'Short',
    'What was the Buddhist Sangha? Describe how monks (*bhikkhus*) and nuns (*bhikkhunis*) lived under the Vinaya rules.',
    `<p class="step"><strong>1. Organization:</strong><br>
    The Sangha was an association or community of men (*bhikkhus*) and women (*bhikkhunis*) who renounced worldly life to study, practice meditation, and preach the Buddha\'s Dhamma.</p>
    <p class="step"><strong>2. Daily Life and Rules (Vinaya Pitaka):</strong><br>
    • Monks and nuns lived simple, disciplined lives, meditating and begging for food (*bhiksha*) from townspeople once a day.<br>
    • They owned minimal personal possessions (three robes, an alms bowl, a water filter).<br>
    • Internal Sangha decisions were made democratically through open meetings and voting.</p>`,
    'CBSE Marking Scheme: 1 Mark for definition of Sangha + 1 Mark for simple lifestyle & Vinaya rules + 1 Mark for democratic decision-making.'
  )}

  ${qCard(
    'c6sst-ch7-q12',
    'Q12',
    'Emperor Ashoka\'s Dhamma and Ethical Living',
    'Short',
    'How did Emperor Ashoka promote ethical living across India? List four key principles of Ashoka\'s Dhamma inscribed on his rock and pillar edicts.',
    `<ul class="step-list">
      <li><strong>1. Non-Violence (*Ahimsa*):</strong> Prohibition of animal sacrifice and prevention of cruelty to all living beings.</li>
      <li><strong>2. Reverence and Respect:</strong> Obedience to parents, elders, and spiritual teachers, and courteous treatment of servants and slaves.</li>
      <li><strong>3. Compassion and Charity:</strong> Generosity to ascetics, the poor, and friends; building roads, planting shade trees, digging public wells, and establishing botanical hospitals for humans and animals.</li>
      <li><strong>4. Religious Tolerance:</strong> Respecting all religious sects, restraining speech from praising one\'s own religion while defaming others.</li>
    </ul>`,
    'CBSE Marking Scheme: 0.75 Mark for each principle correctly explained (Total 3 Marks).'
  )}

  ${qCard(
    'c6sst-ch7-q13',
    'Q13',
    'Tribal Traditions and Nature Reverence in Cultural Heritage',
    'Short',
    'How have forest-dwelling communities and tribal cultures enriched India\'s cultural heritage and environmental ethics? [3 Marks]',
    `<p class="step"><strong>1. Sacred Groves (*Devarakadu / Sarna*):</strong><br>
    Tribal and forest communities preserved entire patches of virgin forests as sacred groves, forbidding logging and hunting, thereby conserving biodiversity for millennia.</p>
    <p class="step"><strong>2. Reverence for Mother Earth and Living Elements:</strong><br>
    Tribal spiritual traditions view rivers, mountains, trees, and animals not as commercial commodities to exploit, but as sacred living kin who sustain human existence.</p>
    <p class="step"><strong>3. Herbal Medicine and Artistic Traditions:</strong><br>
    Extensive knowledge of medicinal plants (foundational to Ayurveda) and distinct vibrant art forms (Warli painting, Gond art, Dokra metal casting) form integral roots of Indian culture.</p>`,
    'CBSE Marking Scheme: 1 Mark for sacred groves + 1 Mark for reverential relationship with nature + 1 Mark for traditional medicine and folk arts.'
  )}

  ${qCard(
    'c6sst-ch7-q14',
    'Q14',
    'Class Activity / Chart: Regional Deities and Shared Epics',
    'Activity',
    'Prepare a comparative table showing how shared epic heroes and deities are celebrated across diverse regions and states of India.',
    `<p class="step"><strong>Shared Cultural Roots Across Indian States:</strong></p>
    <table>
      <thead>
        <tr>
          <th>Deity / Epic Figure</th>
          <th>Regional Names &amp; Manifestations</th>
          <th>Prominent States / Regions</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Rama</strong></td><td>Ramachandra, Kothandarama</td><td>Ayodhya (UP), Tamil Nadu, Karnataka (Hampi)</td></tr>
        <tr><td><strong>Krishna</strong></td><td>Guruvayurappan, Srinathji, Jagannath, Vitthala</td><td>Kerala, Rajasthan, Odisha, Maharashtra</td></tr>
        <tr><td><strong>Shiva</strong></td><td>Kashi Vishwanath, Mahakaleshwar, Nataraja, Somnath</td><td>Varanasi (UP), Ujjain (MP), Chidambaram (TN), Gujarat</td></tr>
        <tr><td><strong>Durga / Devi</strong></td><td>Durga Puja, Navratri, Meenakshi, Kamakhya</td><td>West Bengal, Gujarat, Madurai (TN), Assam</td></tr>
        <tr><td><strong>Kartikeya</strong></td><td>Murugan, Subrahmanya, Skanda</td><td>Tamil Nadu, Kerala, Karnataka</td></tr>
      </tbody>
    </table>`,
    'CBSE Marking Scheme: 1 Mark each for accurately linking regional deities and states showing civilisational unity.'
  )}

  ${qCard(
    'c6sst-ch7-q15',
    'Q15',
    'Project: Documenting Living Spiritual Values in Families',
    'Project',
    'Conduct a family or neighbourhood survey documenting three living cultural values practiced in daily life (e.g., hospitality / *Atithi Devo Bhava*, sharing food, compassion). [3 Marks]',
    `<p class="step"><strong>1. Hospitality (*Atithi Devo Bhava*):</strong><br>
    In Indian homes, any visiting guest, friend, or relative is welcomed warmly with fresh drinking water, hot tea, and food before asking their purpose of visit, reflecting the sacred belief that a guest represents the divine.</p>
    <p class="step"><strong>2. Sharing Food (*Annadaan* &amp; Feeding Birds/Animals):</strong><br>
    Families observe the daily tradition of keeping aside the first portion of cooked food (chapati or rice) for cows, birds, or wandering animals before the family eats.</p>
    <p class="step"><strong>3. Respect for Elders (*Charan Sparsh*):</strong><br>
    Younger members touch the feet of grandparents and parents on birthdays, festivals, or before examinations to seek their blessings and express humility and gratitude.</p>`,
    'CBSE Marking Scheme: 1 Mark for each documented cultural value with concrete daily practice.'
  )}
</section>`;

// ============================================================================
// CHAPTER 8: UNITY IN DIVERSITY, OR 'MANY IN THE ONE'
// ============================================================================
const ch8 = `<section class="chapter-section" id="ch8">
  <div class="chapter-header">
    <div class="ch-badge">8</div>
    <div class="chapter-header-info">
      <h2>Chapter 8: Unity in Diversity, or 'Many in the One'</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — 100% Complete Textbook Questions, The Big Questions, Ladakh vs. Kerala Case Study &amp; CBSE Rubrics | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Civic &amp; Cultural Concepts: Diversity &amp; National Unity</div>
    <ul class="concept-list">
      <li><strong>Unity in Diversity:</strong> The phrase coined by Jawaharlal Nehru in his landmark book <em>The Discovery of India</em>. It emphasizes that India\'s diversity is not a superficial division, but a deep, underlying strength where multiple traditions, languages, and faiths blend harmoniously into a single civilisational tapestry.</li>
      <li><strong>Comparative Case Study: Ladakh vs. Kerala:</strong>
        <ul>
          <li><strong>Ladakh (Cold High Desert):</strong> High-altitude mountain terrain in the northern Himalayas; freezing winters; low rainfall; rearing changra goats for ultra-soft <em>Pashmina wool</em>; staple diet is meat and yak milk/cheese (chhurpi); historic trade link with Tibet; cultural harmony between Tibetan Buddhism and Islam.</li>
          <li><strong>Kerala (Tropical Coastal Plain):</strong> Southwestern coast flanked by the Arabian Sea and Western Ghats; tropical climate with abundant rainfall; lush green coconut palms and paddy; rich cultivation of spices (black pepper, cloves, cardamom); maritime trade attracted Jewish, Arab, Christian, and Chinese merchants (*Cheena-vala* fishing nets and *Cheena-chatti* utensils); religious harmony between Hinduism, Islam, Christianity, and Judaism.</li>
        </ul>
      </li>
      <li><strong>"Many in the One":</strong> Insights of Rabindranath Tagore and Sri Aurobindo showing that India represents a grand living mosaic where each distinct regional culture contributes its unique melody to the national symphony.</li>
      <li><strong>Shared Epics, Folk Tales &amp; Art:</strong> From the Panchatantra and Jataka tales to regional adaptations of the Ramayana through Kathakali, Yakshagana, and Madhubani paintings, shared moral values transcend linguistic boundaries.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Ladakh vs Kerala Comparison -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Comparative Case Study: Ladakh vs. Kerala</text>
      <!-- Ladakh Box -->
      <rect x="30" y="50" width="230" height="135" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
      <text x="145" y="75" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0369a1" text-anchor="middle">LADAKH (North / Cold Desert)</text>
      <text x="145" y="95" font-family="system-ui, sans-serif" font-size="9.5" fill="#0284c7" text-anchor="middle">• High-Altitude Mountain Plateau</text>
      <text x="145" y="112" font-family="system-ui, sans-serif" font-size="9.5" fill="#0284c7" text-anchor="middle">• Pashmina Wool &amp; Changra Goats</text>
      <text x="145" y="129" font-family="system-ui, sans-serif" font-size="9.5" fill="#0284c7" text-anchor="middle">• Meat, Yak Butter, Barley Diet</text>
      <text x="145" y="146" font-family="system-ui, sans-serif" font-size="9.5" fill="#0284c7" text-anchor="middle">• Buddhism &amp; Islam (Tibetan Ties)</text>
      <text x="145" y="166" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#075985" text-anchor="middle">Inland Mountain Silk Trade</text>

      <!-- Kerala Box -->
      <rect x="300" y="50" width="230" height="135" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      <text x="415" y="75" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#15803d" text-anchor="middle">KERALA (South / Coastal Plain)</text>
      <text x="415" y="95" font-family="system-ui, sans-serif" font-size="9.5" fill="#16a34a" text-anchor="middle">• Tropical Coastal &amp; Hill Slopes</text>
      <text x="415" y="112" font-family="system-ui, sans-serif" font-size="9.5" fill="#16a34a" text-anchor="middle">• Pepper, Cardamom, Cloves Spices</text>
      <text x="415" y="129" font-family="system-ui, sans-serif" font-size="9.5" fill="#16a34a" text-anchor="middle">• Rice, Fish, Coconut Diet</text>
      <text x="415" y="146" font-family="system-ui, sans-serif" font-size="9.5" fill="#16a34a" text-anchor="middle">• Hinduism, Islam, Christianity, Judaism</text>
      <text x="415" y="166" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#14532d" text-anchor="middle">Maritime Arabian &amp; Chinese Trade</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 8.1: Contrast between geographic adaptation and cultural assimilation</div>
  </div>

  <!-- ================= SECTION A: THE BIG QUESTIONS ================= -->
  <div class="ex-div">
    <div class="ex-heading">The Big Questions (Chapter Inquiry &amp; Openers)</div>
  </div>

  ${qCard(
    'c6sst-ch8-bq1',
    'Big Q1',
    'What Makes India One Nation Despite Extreme Diversity?',
    'Concept',
    'What binds India together into a single cohesive nation despite having hundreds of spoken languages, distinct cuisines, diverse attire, and multiple religions?',
    `<p class="step"><strong>1. Shared Civilisational Values:</strong><br>
    Underlying regional external differences is a deep common current of shared values: mutual tolerance, non-violence (*Ahimsa*), reverence for family elders, respect for learning, and the hospitality principle (*Atithi Devo Bhava*).</p>
    <p class="step"><strong>2. Cross-Regional Interdependence and Geography:</strong><br>
    The monsoon winds link all agricultural cycles from Kerala to Punjab. River basins and trade networks weave economic interdependence, while pilgrimage routes have connected citizens across states for millennia.</p>
    <p class="step"><strong>3. Modern Democratic Constitution:</strong><br>
    Our Constitution guarantees equal rights, universal adult franchise, fundamental freedoms, and secular protection to every citizen regardless of mother tongue, caste, or faith.</p>`,
    'CBSE Marking Scheme: 1 Mark for shared cultural values + 1 Mark for geographic/economic interdependence + 1 Mark for constitutional equality.'
  )}

  ${qCard(
    'c6sst-ch8-bq2',
    'Big Q2',
    'How Do Geography and History Shape Regional Culture?',
    'Explain',
    'Explain how geography and history work together to shape the distinct culture of any region, using Ladakh and Kerala as examples.',
    `<p class="step"><strong>1. Role of Geography:</strong><br>
    Determines climate, food, and occupations. In cold Ladakh, high altitude forced people to herd sheep and goats for warm wool; in tropical coastal Kerala, rich rain enabled spice farming and sea fishing.</p>
    <p class="step"><strong>2. Role of History:</strong><br>
    Determines external influences and trade partners. Ladakh’s location on Himalayan mountain passes connected it to Tibet and Central Asia, introducing Tibetan Buddhism and Islam. Kerala’s sea coast connected it to Arab, Jewish, Roman, and Chinese sea merchants, welcoming Christianity, Islam, and Judaism centuries ago.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for geographic determination + 1.5 Marks for historical trade and cultural assimilation.'
  )}

  <!-- ================= SECTION C: QUESTIONS, ACTIVITIES AND PROJECTS ================= -->
  <div class="ex-div">
    <div class="ex-heading">Questions, activities and projects (Official NCERT Textbook Exercises)</div>
  </div>

  ${qCard(
    'c6sst-ch8-q1',
    'Q1',
    'Nehru\'s Concept of "Unity in Diversity"',
    'Explain',
    'Who coined the phrase "Unity in Diversity" to describe India? What did it mean in the context of India\'s freedom struggle? [3 Marks]',
    `<p class="step"><strong>1. Coined by Jawaharlal Nehru:</strong><br>
    India\'s first Prime Minister, Jawaharlal Nehru, coined the phrase in his celebrated book <em>The Discovery of India</em> (written in Ahmednagar Fort prison in 1944).</p>
    <p class="step"><strong>2. Meaning during the Freedom Struggle:</strong><br>
    • Nehru observed that Indian unity was not something imposed from outside, but an internal emotional truth where differences of religion and language were tolerated and celebrated.<br>
    • During the freedom struggle, men and women from diverse backgrounds (Sikhs in Punjab, Tamilians in the south, Muslims in Bengal, Hindus in UP, Christians in Kerala) stood united under the single Tricolour flag against British colonial rule, demonstrating that diversity was India\'s greatest strength rather than a weakness.</p>`,
    'CBSE Marking Scheme: 1 Mark for Nehru and *The Discovery of India* + 2 Marks for explaining how diverse groups united during the freedom struggle.'
  )}

  ${qCard(
    'c6sst-ch8-q2',
    'Q2',
    'Comparative Analysis: Ladakh vs. Kerala',
    'Compare',
    'Compare Ladakh and Kerala across four key parameters: geography/climate, food/diet, major occupations, and external historical trade influences. [4 Marks]',
    `<table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Ladakh</th>
          <th>Kerala</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="font-weight:700;">Geography &amp; Climate</td>
          <td>High-altitude cold desert in Jammu &amp; Kashmir; freezing snow-covered winters, little rain.</td>
          <td>Coastal plain between the Arabian Sea and Western Ghats; tropical, heavy monsoon rainfall.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Food &amp; Diet</td>
          <td>Meat, dairy products (yak milk, butter, cheese / *chhurpi*), and roasted barley (*tsampa*).</td>
          <td>Boiled rice, fresh sea fish, coconut, bananas, and vegetable stews.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Major Occupations</td>
          <td>Rearing Changra goats for precious <em>Pashmina wool</em>, yaks, and tourism.</td>
          <td>Cultivating spices (black pepper, cardamom, cinnamon), fishing, and coir/rubber processing.</td>
        </tr>
        <tr>
          <td style="font-weight:700;">Historical Influences</td>
          <td>Connected via mountain passes to Tibet and Central Asia; Tibetan Buddhism and Islam.</td>
          <td>Connected via sea routes to Arab, Jewish, Syrian Christian, and Chinese traders (*Cheena-vala* nets).</td>
        </tr>
      </tbody>
    </table>`,
    'CBSE Marking Scheme: 1 Mark for each accurate parameter compared across both regions (Total 4 Marks).'
  )}

  ${qCard(
    'c6sst-ch8-q3',
    'Q3',
    'The Concept of "Many in the One"',
    'Explain',
    'Explain the philosophical vision of Rabindranath Tagore and Sri Aurobindo regarding India as "Many in the One". [3 Marks]',
    `<p class="step"><strong>1. Unity without Uniformity:</strong><br>
    Tagore and Sri Aurobindo emphasized that true unity does not mean erasing differences or forcing everyone to speak one language, eat one food, or follow one ritual. That would be artificial uniformity.</p>
    <p class="step"><strong>2. A Living Symphony (The Many in the One):</strong><br>
    Like an orchestra where flutes, drums, sitars, and violins play different notes to create a magnificent single harmony, India\'s diverse regions, languages, and folk arts complement each other, enriching the single grand civilisational identity.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for distinguishing unity from artificial uniformity + 1.5 Marks for orchestra/mosaic analogy of "Many in the One".'
  )}

  ${qCard(
    'c6sst-ch8-q4',
    'Q4',
    'Role of Folk Tales in Inculcating Shared Values',
    'Short',
    'How do Indian folk tales (from Panchatantra, Jataka tales, Hitopadesha, Tenali Raman, Birbal) reinforce shared moral values across states? [3 Marks]',
    `<p class="step"><strong>1. Universal Ethical Lessons:</strong><br>
    Stories like the loyal mongoose, the monkey and the crocodile, or Birbal\'s wit teach universal values—honesty, loyalty, intelligence over brute physical strength, and kindness—to children in every state.</p>
    <p class="step"><strong>2. Multiple Vernacular Retellings:</strong><br>
    These tales originated thousands of years ago in Sanskrit and Prakrit, but were translated into Marathi, Tamil, Bengali, Assamese, and Hindi, ensuring that children across the country grow up sharing the same cultural wisdom and laughter.</p>`,
    'CBSE Marking Scheme: 1.5 Marks for universal moral themes + 1.5 Marks for shared storytelling across all Indian regional languages.'
  )}

  ${qCard(
    'c6sst-ch8-q5',
    'Q5',
    'Artistic Depictions of the Epics Across States',
    'Short',
    'How are the Ramayana and Mahabharata depicted across different states of India through varied artistic traditions? Give three examples. [3 Marks]',
    `<ul class="step-list">
      <li><strong>1. Classical Dance and Theatre:</strong> In Kerala, the Kathakali and Koodiyattam dance-dramas portray characters from the Mahabharata; in Karnataka, Yakshagana brings epic battles alive; in North India, Ramlila is performed during Dussehra.</li>
      <li><strong>2. Traditional Painting Styles:</strong> The Ramayana is depicted through Madhubani paintings on mud walls in Bihar, Pattachitra scrolls in Odisha, and Mewar miniature paintings in Rajasthan.</li>
      <li><strong>3. Puppetry Traditions:</strong> Shadow puppetry like *Tholu Bommalata* in Andhra Pradesh and *Togalu Gombeyaata* in Karnataka narrate epic episodes to village audiences.</li>
    </ul>`,
    'CBSE Marking Scheme: 1 Mark each for dance/theatre, traditional painting, and shadow puppetry examples.'
  )}

  ${qCard(
    'c6sst-ch8-q6',
    'Q6',
    'Harvest Festivals Across India: Celebrating Unity',
    'Activity',
    'How do harvest festivals celebrated under different names across India showcase the theme of "Many in the One"? Give specific examples. [3 Marks]',
    `<p class="step"><strong>One Season, Many Celebrations:</strong><br>
    In mid-January, when farmers harvest winter crops (sugarcane, sesame, rice), the entire subcontinent celebrates with joy, expressing gratitude to the Sun God, cattle, and nature:
    • <strong>Makar Sankranti:</strong> Celebrated with kite flying and sesame-jaggery sweets in Maharashtra, Gujarat, UP, and Bihar.<br>
    • <strong>Pongal:</strong> Celebrated in Tamil Nadu by boiling fresh rice and milk in clay pots, honouring cattle (Mattu Pongal).<br>
    • <strong>Magh Bihu:</strong> Celebrated in Assam with community feasts, bonfires (*meji*), and traditional dancing.<br>
    • <strong>Lohri:</strong> Celebrated around bonfires with popcorn and revdi in Punjab and Haryana.<br>
    <strong>Conclusion:</strong> Although the names, languages, and rituals differ, the underlying spirit of rejoicing over nature\'s bounty is identical across India.</p>`,
    'CBSE Marking Scheme: 0.5 Mark for each festival (Makar Sankranti, Pongal, Bihu, Lohri) + 1 Mark for concluding shared agricultural gratitude.'
  )}
</section>`;

// Write chapter HTML files
fs.writeFileSync(path.join(outDir, 'ch5.html'), ch5, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch6.html'), ch6, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch7.html'), ch7, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch8.html'), ch8, 'utf8');

console.log('Successfully generated chapters 5 to 8 in chapters-c6sst/ with 100% textbook question and activity coverage.');
