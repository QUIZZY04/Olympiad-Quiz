// scripts/gen-c6sst-ch5-ch8.js
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c6sst');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Helper to wrap question card
function qCard(id, qNum, title, type, question, answerContent, markingScheme) {
  return `
    <div class="q-card" id="${id}">
      <div class="q-header" onclick="toggleQ('${id}')">
        <span class="q-title">${qNum}. ${title}</span>
        <span class="q-type badge-${type.toLowerCase()}">${type}</span>
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

// CHAPTER 5: India, That Is Bharat
const ch5 = `
<section class="chapter-section" id="ch5">
  <div class="chapter-header">
    <div class="ch-badge">5</div>
    <div class="chapter-header-info">
      <h2>Chapter 5: India, That Is Bharat</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — Names of the Subcontinent, Historical &amp; Geographical Identity, Civilisational Continuity | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Historical &amp; Geographical Concepts</div>
    <ul class="concept-list">
      <li><strong>Multiple Historical Names:</strong> Our subcontinent has been known by several prominent names across centuries:
        <ul>
          <li><strong>Bharat / Bharatvarsha:</strong> Rooted in the Rigveda, named after the prominent Vedic tribe/clan of the <em>Bharatas</em> led by King Sudas. Later literature (Puranas, Mahabharata) defined <em>Bharatvarsha</em> as the land situated north of the oceans and south of the snowy Himalayas (<em>Himalayam Samarabhya Yavada Kshamah</em>).</li>
          <li><strong>Jambudvipa:</strong> In ancient Buddhist, Jain, and Hindu texts, as well as Ashokan inscriptions, the central continent of the known cosmos containing India was designated <em>Jambudvipa</em> ("Island of the Jambu / Jamun / Rose-Apple tree").</li>
          <li><strong>Sapta Sindhu:</strong> The land of the seven sacred rivers mentioned in the Rigveda (Indus, Saraswati, Jhelum, Chenab, Ravi, Beas, and Sutlej).</li>
          <li><strong>Hind / Hindustan:</strong> Derived from the Old Persian word <em>Hindu</em> (pronunciation of the Sanskrit river <em>Sindhu</em>). In Old Persian inscriptions of Darius I, the region beyond the Indus was called <em>Hi[n]dush</em>. In Arabic/Persian medieval texts, it became <em>Hindustan</em>.</li>
          <li><strong>India:</strong> The Greeks adapted the Persian <em>Hindu</em> into <em>Indoi</em> or <em>Indike</em>, referring to the land beyond the river <em>Indus</em> (Sindhu). Latin and modern European languages adopted this as <em>India</em>.</li>
        </ul>
      </li>
      <li><strong>Geographical Identity of Bharatvarsha:</strong> Natural boundaries created a distinct subcontinental identity: the towering Himalayas and Hindu Kush mountain ranges in the north and northwest, and the vast expanse of the Indian Ocean, Arabian Sea, and Bay of Bengal surrounding the south.</li>
      <li><strong>Constitutional Synthesis:</strong> Article 1(1) of the Constitution of India formally unifies this timeless heritage with modern democratic governance: <em>"India, that is Bharat, shall be a Union of States."</em></li>
      <li><strong>Civilisational Continuity:</strong> Unlike ancient civilisations that vanished entirely (like Mesopotamia or ancient Egypt), India demonstrates continuous civilisational, cultural, and philosophical continuity spanning over 5,000 years.</li>
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

      <line x1="170" y1="75" x2="210" y2="75" stroke="#64748b" stroke-width="2" marker-end="url(#arr5)"/>

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
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 5.1: Evolution of historical names defining the cultural and geographical boundaries of the Indian subcontinent.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Exercises &amp; Review Questions</div>

    ${qCard(
      'c6sst-ch5-q1',
      'Q1',
      'Origin of the Names Bharat and India',
      'Explain',
      'Explain the origin and historical significance of the two prominent names of our country: "Bharat" and "India". How are they connected to ancient texts and geographical features?',
      `<p class="step"><strong>1. Origin and Meaning of "Bharat":</strong></p>
      <ul class="step-list">
        <li><strong>Vedic Origin:</strong> The name <em>Bharat</em> traces back to the <em>Rigveda</em> (over 3,500 years ago), where it referred to the <em>Bharata clan</em>, one of the most prominent tribes led by King Sudas in northwestern India.</li>
        <li><strong>Puranic and Epic Significance:</strong> In the <em>Vishnu Purana</em> and <em>Mahabharata</em>, the entire subcontinent south of the snowy Himalayas and north of the oceans is termed <em>Bharatvarsha</em>, and its inhabitants are designated as <em>Bharati</em> (children of Bharat).</li>
        <li><strong>Cultural Heritage:</strong> It represents the collective cultural and civilisational heritage of unity across the subcontinent.</li>
      </ul>
      <p class="step"><strong>2. Origin and Meaning of "India":</strong></p>
      <ul class="step-list">
        <li><strong>Sanskrit Root (Sindhu):</strong> The word <em>India</em> originates from the Sanskrit name of the mighty river <em>Sindhu</em> (the Indus).</li>
        <li><strong>Persian Transition:</strong> Ancient Persians replaced the initial "S" sound with "H", pronouncing <em>Sindhu</em> as <em>Hindu</em>. In Persian inscriptions of King Darius I (c. 518 BCE), the eastern province is called <em>Hindush</em>.</li>
        <li><strong>Greek and European Adoption:</strong> The ancient Greeks dropped the aspirate "H" and referred to the river as <em>Indos</em> and the land beyond it as <em>Indike</em>. Later, Roman and English writers adapted this into <em>India</em>.</li>
      </ul>
      <p class="step"><strong>Conclusion:</strong> While "Bharat" reflects internal indigenous and cultural identity, "India" reflects how external travellers, traders, and neighbouring civilisations identified the land through its greatest northwestern boundary river.</p>`,
      'Full credit (3 marks): 1.5 marks for Rigvedic/Puranic origin of Bharat + 1.5 marks for Sindhu &rarr; Hindu &rarr; Indos &rarr; India derivation with Persian and Greek stages.'
    )}

    ${qCard(
      'c6sst-ch5-q2',
      'Q2',
      'What is Jambudvipa?',
      'Short',
      'What is the meaning of the name "Jambudvipa"? Where is this name found in historical records?',
      `<p class="step"><strong>Meaning and Historical Records of Jambudvipa:</strong></p>
      <ul class="step-list">
        <li><strong>Literal Meaning:</strong> <em>Jambudvipa</em> translates literally to <em>"the island of the Jambu tree"</em> (the Indian Black Plum or Jamun tree). In ancient Indian cosmological geography, the continent was envisaged as shaped like a great continent blooming with Jamun trees.</li>
        <li><strong>Occurrence in Texts:</strong> The name appears extensively in early Buddhist scriptures (e.g., the Tipitaka), Jain sacred texts, and the Hindu Puranas.</li>
        <li><strong>Epigraphical Evidence:</strong> Emperor Ashoka explicitly used the term <em>Jambudvipa</em> in his Major Rock Edicts (3rd century BCE) to describe the vast realm where his Dhamma edicts were propagated and where all people lived under his righteous governance.</li>
      </ul>`,
      '2 marks: 1 mark for literal meaning (Island of Jamun tree) + 1 mark for Ashokan inscriptions and ancient texts.'
    )}

    ${qCard(
      'c6sst-ch5-q3',
      'Q3',
      'Vishnu Purana Definition of Bharatvarsha',
      'Describe',
      'How does the ancient text Vishnu Purana describe the geographical boundaries of Bharatvarsha? Quote or explain the famous shloka.',
      `<p class="step"><strong>The Definition from Vishnu Purana (Book II, Chapter 3):</strong></p>
      <div class="step" style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 12px; margin: 10px 0;">
        <em>"Uttaram yat samudrasya himadreschaiva dakshinam |<br>
        Varsham tad bharatam nama bharati yatra santatih ||"</em>
      </div>
      <p class="step"><strong>English Translation and Explanation:</strong></p>
      <ul class="step-list">
        <li><strong>Northern Boundary:</strong> <em>"Himadreschaiva dakshinam"</em> — situated to the south of the snowy mountains (the Himalayas).</li>
        <li><strong>Southern Boundary:</strong> <em>"Uttaram yat samudrasya"</em> — situated to the north of the ocean (the Indian Ocean).</li>
        <li><strong>The Inhabitants:</strong> That country is named <em>Bharat</em>, and its progeny/people are called <em>Bharati</em>.</li>
      </ul>
      <p class="step"><strong>Historical Significance:</strong> This verse proves that even thousands of years ago, ancient Indian thinkers possessed a clear, unified geographical and cultural conception of the entire Indian subcontinent as a single homeland.</p>`,
      '3 marks: 1 mark for the shloka / source + 1 mark for exact boundaries (Himalayas in north, oceans in south) + 1 mark for civilisational significance.'
    )}

    ${qCard(
      'c6sst-ch5-q4',
      'Q4',
      'Article 1 of the Indian Constitution',
      'Think & Answer',
      'What does Article 1 of the Constitution of India state regarding the name of the country? Why did the Constituent Assembly choose both names?',
      `<p class="step"><strong>1. Constitutional Declaration:</strong></p>
      <p>Article 1(1) of the Indian Constitution states: <strong>"India, that is Bharat, shall be a Union of States."</strong></p>
      <p class="step"><strong>2. Reason for Including Both Names:</strong></p>
      <ul class="step-list">
        <li><strong>Harmonising Ancient Heritage and Modern International Standing:</strong> During the Constituent Assembly debates in 1949, members discussed whether to name the new republic "Bharat" or "India".</li>
        <li><strong>Bharat:</strong> Carries deep historical, indigenous, literary, and emotional roots representing our millennia-old civilisational soul.</li>
        <li><strong>India:</strong> Was the universally recognised legal and international name used in treaties, the United Nations, diplomacy, and global affairs.</li>
        <li><strong>Unanimous Consensus:</strong> By adopting <em>"India, that is Bharat"</em>, our constitution-makers brilliantly combined traditional civilisational pride with modern constitutional identity.</li>
      </ul>`,
      '2 marks: 1 mark for quoting Article 1(1) accurately + 1 mark for the dual balance of heritage and global diplomacy.'
    )}

    ${qCard(
      'c6sst-ch5-q5',
      'Q5',
      'Role of Natural Boundaries in Indian History',
      'Long Answer',
      'Discuss how the natural geographical boundaries of the Indian subcontinent (the Himalayas, mountain passes, and the seas) protected it while also keeping it connected to the outside world.',
      `<p class="step"><strong>1. The Northern Barrier (The Himalayas):</strong></p>
      <ul class="step-list">
        <li><strong>Shield against Harsh Climates:</strong> The mighty Himalayan mountain range acts as a climatic wall, blocking bitterly cold Siberian winds from entering north India, and trapping monsoon winds to provide life-giving rainfall.</li>
        <li><strong>Natural Fortification:</strong> Their formidable height protected India from frequent mass military invasions from the north.</li>
      </ul>
      <p class="step"><strong>2. Mountain Passes as Gateways:</strong></p>
      <ul class="step-list">
        <li>In the northwest (Hindu Kush and Sulaiman ranges), passes like the <strong>Khyber Pass</strong> and <strong>Bolan Pass</strong> served as ancient highways for traders, pilgrims, scholars, and travellers.</li>
        <li>Ideas, artistic traditions (like Gandhara art), mathematics, and philosophies moved freely between India, Central Asia, and the Mediterranean.</li>
      </ul>
      <p class="step"><strong>3. The Peninsular Coastline and Oceans:</strong></p>
      <ul class="step-list">
        <li>Surrounded on three sides by the Arabian Sea, Indian Ocean, and Bay of Bengal, India developed maritime trade routes over two thousand years ago.</li>
        <li>Indian merchants sailed to ancient Rome, Egypt, the Persian Gulf, and across Southeast Asia (Java, Sumatra, Cambodia), spreading Indian textiles, spices, Buddhism, and Sanskrit literature peacefully.</li>
      </ul>`,
      '4 marks: 1.5 marks for Himalayas as barrier/climate shield + 1 mark for northwestern passes facilitating cultural exchange + 1.5 marks for maritime trade.'
    )}
  </div>
</section>
`;

// CHAPTER 6: The Beginnings of Indian Civilisation
const ch6 = `
<section class="chapter-section" id="ch6">
  <div class="chapter-header">
    <div class="ch-badge">6</div>
    <div class="chapter-header-info">
      <h2>Chapter 6: The Beginnings of Indian Civilisation</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — Harappan / Indus-Saraswati Civilisation, Town Planning, Architecture, Crafts &amp; Decline | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Archaeological &amp; Historical Concepts</div>
    <ul class="concept-list">
      <li><strong>Discovery &amp; Extent:</strong> Harappa was discovered in 1921 by Daya Ram Sahni, and Mohenjo-daro in 1922 by Rakhaldas Banerjee. This urban bronze age civilisation flourished around <strong>2600 BCE to 1900 BCE</strong> across modern-day India, Pakistan, and parts of Afghanistan. Because a massive concentration of sites sits along the basins of the Indus and the ancient Saraswati (Ghaggar-Hakra) river system, it is termed the <em>Indus-Saraswati (or Harappan) Civilisation</em>.</li>
      <li><strong>Town Planning &amp; Architecture:</strong>
        <ul>
          <li><strong>Two-Part Division:</strong> Most cities were divided into an elevated western section called the <strong>Citadel</strong> (administrative/public buildings) and a larger eastern lower section called the <strong>Lower Town</strong> (residential areas).</li>
          <li><strong>Grid Pattern:</strong> Streets cut each other at right angles (gridiron pattern), dividing the settlement into uniform blocks.</li>
          <li><strong>Standardised Baked Bricks:</strong> Interlocking burnt brick construction with standardised proportions (ratio of 1:2:4 in thickness:width:length) made structures weather-proof for thousands of years.</li>
        </ul>
      </li>
      <li><strong>The Great Bath of Mohenjo-daro:</strong> A large rectangular tank made of brickwork, plaster, and a layer of natural bitumen (tar) to prevent water leakage. Flanked by steps on two sides and changing rooms around, it was likely used for special ritual/public bathing.</li>
      <li><strong>Advanced Drainage System:</strong> Every house had a drain connected to street sewers. Drains were covered with stone slabs or bricks and had inspection holes at regular intervals for routine cleaning—unmatched in the ancient world.</li>
      <li><strong>Key Harappan Sites in India:</strong>
        <ul>
          <li><strong>Dholavira (Kutch, Gujarat):</strong> Unique three-part city layout (Citadel, Middle Town, Lower Town) with enormous stone-cut water reservoirs and a signboard with 10 large script symbols.</li>
          <li><strong>Lothal (Gujarat):</strong> Coastal port city with a massive tidal dockyard connected to the Sabarmati river basin for overseas maritime trade.</li>
          <li><strong>Kalibangan (Rajasthan):</strong> Evidence of furrowed agricultural fields and fire altars.</li>
          <li><strong>Rakhigarhi (Haryana):</strong> One of the largest Harappan sites, spanning over 350 hectares.</li>
        </ul>
      </li>
      <li><strong>Crafts, Trade &amp; Decline:</strong> Steatite seals with unicorn/bull motifs and pictographic script; bead-making factories (carnelian, lapis lazuli); bronze dancing girl; dockyard trade with Mesopotamia. The civilisation experienced urban decline after 1900 BCE due to climate drying, shifting/drying of rivers (Saraswati), deforestation, and changing trade routes.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Harappan Town Layout & Drainage -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 230" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Standard Harappan Town Layout: Citadel &amp; Lower Town</text>
      <!-- Citadel Box -->
      <rect x="30" y="50" width="160" height="150" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
      <text x="110" y="75" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#92400e" text-anchor="middle">CITADEL (Western)</text>
      <text x="110" y="95" font-family="system-ui, sans-serif" font-size="10" fill="#78350f" text-anchor="middle">Higher Elevation</text>
      <!-- Great Bath inside Citadel -->
      <rect x="55" y="110" width="110" height="55" rx="4" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
      <text x="110" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">The Great Bath /</text>
      <text x="110" y="150" font-family="system-ui, sans-serif" font-size="9" fill="#0369a1" text-anchor="middle">Granary / Hall</text>
      <text x="110" y="185" font-family="system-ui, sans-serif" font-size="9" fill="#92400e" text-anchor="middle">Public &amp; Ritual Uses</text>

      <!-- Dividing Wall/Fortification -->
      <line x1="210" y1="50" x2="210" y2="200" stroke="#94a3b8" stroke-dasharray="4,4" stroke-width="2"/>

      <!-- Lower Town Box -->
      <rect x="230" y="50" width="300" height="150" rx="6" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
      <text x="380" y="75" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">LOWER TOWN (Eastern)</text>
      <text x="380" y="93" font-family="system-ui, sans-serif" font-size="10" fill="#475569" text-anchor="middle">Larger, Residential Area for Common Citizens</text>

      <!-- Grid Street Lines -->
      <line x1="330" y1="105" x2="330" y2="195" stroke="#94a3b8" stroke-width="3"/>
      <line x1="430" y1="105" x2="430" y2="195" stroke="#94a3b8" stroke-width="3"/>
      <line x1="240" y1="150" x2="520" y2="150" stroke="#94a3b8" stroke-width="3"/>

      <!-- Drainage symbol -->
      <path d="M 240,154 L 520,154" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="380" y="145" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0284c7" text-anchor="middle">Covered Drainage Along Grid Streets</text>
      <text x="285" y="180" font-family="system-ui, sans-serif" font-size="9" fill="#334155" text-anchor="middle">Courtyard Houses</text>
      <text x="480" y="180" font-family="system-ui, sans-serif" font-size="9" fill="#334155" text-anchor="middle">Artisan Workshops</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 6.1: Schematic diagram of Harappan city planning featuring Citadel, Lower Town, and covered grid drainage.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Exercises &amp; In-Depth Solutions</div>

    ${qCard(
      'c6sst-ch6-q1',
      'Q1',
      'Key Characteristics of Harappan Town Planning',
      'Long Answer',
      'Describe the main features of town planning in the Harappan Civilisation. Why is their drainage system considered extraordinary for its time?',
      `<p class="step"><strong>1. Dual Town Layout (Citadel &amp; Lower Town):</strong></p>
      <ul class="step-list">
        <li><strong>Citadel:</strong> Situated on a raised mud-brick platform on the western side, containing impressive administrative structures, granaries, and the Great Bath.</li>
        <li><strong>Lower Town:</strong> Situated on the eastern side, significantly larger and designed for residential houses, marketplaces, and craft quarters.</li>
      </ul>
      <p class="step"><strong>2. Gridiron Street Pattern:</strong></p>
      <p>Streets were wide, straight, and intersected at exact right angles (90 degrees), dividing the city into orderly rectangular blocks.</p>
      <p class="step"><strong>3. Extraordinary Drainage System:</strong></p>
      <ul class="step-list">
        <li><strong>Covered Underground Drains:</strong> Every domestic drain led into street conduits laid with kiln-fired bricks and carefully sloped so wastewater flowed effortlessly.</li>
        <li><strong>Inspection Sump Holes:</strong> Street drains were covered with removable stone slabs or brick lids with silt-catching manholes at regular intervals for periodic cleaning.</li>
        <li><strong>Hygiene and Sanitation:</strong> No other contemporary Bronze Age civilisation (including Egypt and Mesopotamia) possessed such an advanced, systematic civic public health network.</li>
      </ul>
      <p class="step"><strong>4. Standardised Burnt Bricks:</strong></p>
      <p>All cities from Punjab to Gujarat used baked bricks with the uniform dimensional ratio of 1:2:4, showcasing central civic standards.</p>`,
      '5 marks: 1.5 marks for Citadel/Lower Town layout + 1 mark for grid pattern + 2 marks for drainage features and hygiene comparison + 0.5 mark for brick standardisation.'
    )}

    ${qCard(
      'c6sst-ch6-q2',
      'Q2',
      'The Great Bath of Mohenjo-daro',
      'Describe',
      'What was the Great Bath? Describe its construction and explain its probable religious or social significance.',
      `<p class="step"><strong>1. Construction Features:</strong></p>
      <ul class="step-list">
        <li><strong>Architecture:</strong> A massive rectangular tank measuring approximately 12 metres by 7 metres, and 2.4 metres deep, built inside the Citadel of Mohenjo-daro.</li>
        <li><strong>Waterproofing:</strong> Built with finely fitted baked bricks joined with gypsum mortar, and lined with a thick layer of natural tar (bitumen) to ensure it was completely watertight.</li>
        <li><strong>Steps and Rooms:</strong> Two flights of brick steps led down into the tank from north and south. It was surrounded by porticoes and rooms on three sides (one of which contained a large well to supply clean water).</li>
        <li><strong>Drainage:</strong> A large corbelled drain allowed used water to be emptied systematically after use.</li>
      </ul>
      <p class="step"><strong>2. Probable Significance:</strong></p>
      <p>Archaeologists believe the Great Bath was not for everyday domestic washing, but for <strong>special ritual or ceremonial bathing</strong> by rulers or priests during sacred community festivals—a tradition of sacred water purification that remains central to Indian spiritual life.</p>`,
      '3 marks: 2 marks for construction details (bricks, bitumen waterproofing, steps, well) + 1 mark for ceremonial/ritual purpose.'
    )}

    ${qCard(
      'c6sst-ch6-q3',
      'Q3',
      'Lothal and Dholavira: Distinctive Features',
      'Compare',
      'What makes Lothal and Dholavira distinct from other Harappan cities? Explain their special contributions.',
      `<p class="step"><strong>1. Lothal (The Port City of Gujarat):</strong></p>
      <ul class="step-list">
        <li><strong>Tidal Dockyard:</strong> Lothal features a gigantic brick basin (dockyard) connected by a channel to the Gulf of Khambhat (Bhogavo river). Boats and ships loaded and unloaded international cargo here with the help of tides.</li>
        <li><strong>Bead-Making Industrial Centre:</strong> Archaeologists found raw carnelian stones, chisels, and finished necklaces showing large-scale export manufacturing.</li>
        <li><strong>Trade with West Asia:</strong> Persian Gulf seals found at Lothal prove direct maritime commerce with Oman and Mesopotamia.</li>
      </ul>
      <p class="step"><strong>2. Dholavira (The Wonder of Kutch):</strong></p>
      <ul class="step-list">
        <li><strong>Three-Tier Layout:</strong> Unlike standard two-part cities, Dholavira was divided into three fortified sections: the Citadel (Castle), the Middle Town, and the Lower Town.</li>
        <li><strong>Stone Architecture:</strong> While most Harappan cities used baked bricks, Dholavira made extensive use of dressed white sandstone.</li>
        <li><strong>Rainwater Harvesting Reservoirs:</strong> Dholavira sits in an arid zone and engineered 16 massive rock-cut reservoirs interconnected with storm-water channels to collect every drop of rainwater.</li>
        <li><strong>The Signboard:</strong> A wooden board containing 10 large white gypsum Indus script characters was found near the northern gateway.</li>
      </ul>`,
      '4 marks: 2 marks for Lothal (dockyard, bead factory, maritime trade) + 2 marks for Dholavira (3-tier layout, stone reservoirs, signboard).'
    )}

    ${qCard(
      'c6sst-ch6-q4',
      'Q4',
      'Harappan Crafts and Seals',
      'Short',
      'What materials were used by Harappan craftspersons? What was the function of Harappan seals?',
      `<p class="step"><strong>1. Materials and Crafts:</strong></p>
      <ul class="step-list">
        <li><strong>Metals:</strong> Copper and bronze (for tools, weapons, and sculptures like the famous Bronze Dancing Girl), and gold and silver for elite ornaments.</li>
        <li><strong>Stones:</strong> Steatite (soapstone) for seals; carnelian, agate, and lapis lazuli for beads and jewellery.</li>
        <li><strong>Clay:</strong> Terracotta for toy carts, figurines, animal whistles, and everyday pottery with black painted designs.</li>
      </ul>
      <p class="step"><strong>2. Function of Harappan Seals:</strong></p>
      <ul class="step-list">
        <li><strong>Sealing Goods:</strong> A packet of goods was tied with rope, and wet clay was pressed over the knot; the merchant pressed his carved stamp seal onto the clay. If the seal impression (sealing) remained intact upon arrival, the buyer knew the goods were not tampered with.</li>
        <li><strong>Identity &amp; Ownership:</strong> Displayed the owner’s name/title in pictographic script along with an animal emblem (such as the unicorn, humped bull, or elephant).</li>
      </ul>`,
      '3 marks: 1.5 marks for craft materials + 1.5 marks for seal function (trade security and identification).'
    )}

    ${qCard(
      'c6sst-ch6-q5',
      'Q5',
      'Reasons for Decline of Harappan Civilisation',
      'Analysis',
      'What led to the decline of the Harappan Civilisation around 1900 BCE? Did the civilisation completely disappear?',
      `<p class="step"><strong>1. Factors Leading to Urban Decline:</strong></p>
      <ul class="step-list">
        <li><strong>Drying Up and Shifting of Rivers:</strong> Tectonic shifts altered river courses; the ancient Saraswati (Ghaggar-Hakra) river dried up, causing agricultural failure in hundreds of settlements.</li>
        <li><strong>Climate Change &amp; Drought:</strong> A prolonged decrease in monsoon rainfall caused severe droughts and aridification.</li>
        <li><strong>Deforestation:</strong> Enormous amounts of wood were consumed to bake millions of bricks and smelt metals, destroying local tree cover and fragile ecosystems.</li>
        <li><strong>Decline of Long-Distance Trade:</strong> Collapse of trade networks with Mesopotamia reduced economic prosperity of urban port hubs.</li>
      </ul>
      <p class="step"><strong>2. Transformation, Not Total Extinction:</strong></p>
      <p>The Harappan civilisation did not vanish overnight. While monumental brick cities and writing disappeared, the people migrated eastward and southward into the fertile Ganga-Yamuna Doab and Gujarat. Their traditions—such as agricultural techniques, terracotta craft styles, spiritual reverence for water, trees, and animals—were smoothly assimilated into later Indian culture.</p>`,
      '3 marks: 2 marks for multi-factor environmental and trade decline reasons + 1 mark for civilisational migration/continuity.'
    )}
  </div>
</section>
`;

// CHAPTER 7: India's Cultural Roots
const ch7 = `
<section class="chapter-section" id="ch7">
  <div class="chapter-header">
    <div class="ch-badge">7</div>
    <div class="chapter-header-info">
      <h2>Chapter 7: India’s Cultural Roots</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — The Vedas, Upanishads, Jainism, Buddhism, Epics &amp; Foundational Philosophies | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Philosophical &amp; Cultural Concepts</div>
    <ul class="concept-list">
      <li><strong>The Four Vedas:</strong> The oldest sacred scriptures of India, composed in Vedic Sanskrit and preserved for generations through precise oral recitation (<em>Shruti</em>):
        <ul>
          <li><strong>Rigveda:</strong> The oldest Veda (over 1,028 hymns called <em>Suktas</em>, meaning "well-said"), praising deities like Agni (god of fire), Indra (warrior god), and Soma.</li>
          <li><strong>Samaveda:</strong> Collection of melodic chants and musical notations derived from Rigvedic hymns; foundation of Indian classical music.</li>
          <li><strong>Yajurveda:</strong> Formulas, mantras, and procedures for performing sacrificial rituals (<em>yajnas</em>).</li>
          <li><strong>Atharvaveda:</strong> Practical prayers, daily charms, healing medicines, and botanical wisdom for everyday human well-being.</li>
        </ul>
      </li>
      <li><strong>The Upanishads:</strong> Philosophical texts composed at the end of the Vedic period (<em>Vedanta</em>), meaning "sitting near devotedly at the feet of the Guru". They explore profound questions: Who am I? What happens after death? What is the nature of the ultimate reality (<em>Brahman</em>) and the inner self (<em>Atman</em>)?
        <ul>
          <li>Included revered women philosophers like <strong>Gargi</strong> (who debated sage Yajnavalkya in King Janaka's court) and seekers like <strong>Satyakama Jabala</strong> (accepted as a disciple by Gautama for his uncompromising truthfulness).</li>
        </ul>
      </li>
      <li><strong>Jainism (Vardhamana Mahavira):</strong> 24th Tirthankara, born in Kundagrama near Vaishali.
        <ul>
          <li>Emphasised the <strong>Triratna</strong> (Three Jewels): Right Faith (Samyak Darshana), Right Knowledge (Samyak Jnana), and Right Conduct (Samyak Charitra).</li>
          <li>Supreme vow of <strong>Ahimsa</strong> (non-violence to all living beings, even tiny insects). Taught in the common language, <em>Prakrit</em>.</li>
        </ul>
      </li>
      <li><strong>Buddhism (Gautama Buddha):</strong> Prince Siddhartha born in Lumbini, attained enlightenment (Nirvana) under the Bodhi tree at Bodh Gaya, gave his first sermon at Sarnath (Dhammacakkappavattana).
        <ul>
          <li><strong>Four Noble Truths:</strong> (1) Life involves suffering (Dukkha), (2) Suffering has a cause (Desire/Tanha), (3) Suffering can end (Nirodha), (4) The path to end suffering is the Eightfold Path.</li>
          <li><strong>Ashtangika Marga (The Eightfold Path / Middle Path):</strong> Avoids extreme self-denial and extreme indulgence. Stressed compassion, universal love, equality, and rejection of hereditary caste discrimination.</li>
        </ul>
      </li>
      <li><strong>The Great Epics:</strong> <em>Ramayana</em> (composed by Valmiki) and <em>Mahabharata</em> (composed by Vyasa, containing the <em>Bhagavad Gita</em>) conveyed ideals of Dharma, duty, righteousness, and truth to all strata of society.</li>
    </ul>
  </div>

  <!-- SVG Diagram: Comparison of Jainism & Buddhism vs Vedic Thought -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Foundations of India’s Cultural Roots: Spiritual Streams</text>
      <!-- Veda Box -->
      <rect x="20" y="45" width="150" height="140" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
      <text x="95" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#92400e" text-anchor="middle">Vedas &amp; Upanishads</text>
      <text x="95" y="95" font-family="system-ui, sans-serif" font-size="9.5" fill="#78350f" text-anchor="middle">• 4 Vedas (Rig, Sama, etc.)</text>
      <text x="95" y="115" font-family="system-ui, sans-serif" font-size="9.5" fill="#78350f" text-anchor="middle">• Atman &amp; Brahman unity</text>
      <text x="95" y="135" font-family="system-ui, sans-serif" font-size="9.5" fill="#78350f" text-anchor="middle">• Quest for Ultimate Truth</text>
      <text x="95" y="155" font-family="system-ui, sans-serif" font-size="9.5" fill="#78350f" text-anchor="middle">• Gargi &amp; Satyakama</text>
      <text x="95" y="172" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#b45309" text-anchor="middle">Language: Sanskrit</text>

      <!-- Buddhism Box -->
      <rect x="205" y="45" width="150" height="140" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
      <text x="280" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0369a1" text-anchor="middle">Buddhism (Buddha)</text>
      <text x="280" y="95" font-family="system-ui, sans-serif" font-size="9.5" fill="#075985" text-anchor="middle">• 4 Noble Truths</text>
      <text x="280" y="115" font-family="system-ui, sans-serif" font-size="9.5" fill="#075985" text-anchor="middle">• Eightfold Middle Path</text>
      <text x="280" y="135" font-family="system-ui, sans-serif" font-size="9.5" fill="#075985" text-anchor="middle">• Compassion &amp; Karuna</text>
      <text x="280" y="155" font-family="system-ui, sans-serif" font-size="9.5" fill="#075985" text-anchor="middle">• Equality of all beings</text>
      <text x="280" y="172" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#0284c7" text-anchor="middle">Language: Pali</text>

      <!-- Jainism Box -->
      <rect x="390" y="45" width="150" height="140" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
      <text x="465" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#15803d" text-anchor="middle">Jainism (Mahavira)</text>
      <text x="465" y="95" font-family="system-ui, sans-serif" font-size="9.5" fill="#166534" text-anchor="middle">• Triratna (Three Jewels)</text>
      <text x="465" y="115" font-family="system-ui, sans-serif" font-size="9.5" fill="#166534" text-anchor="middle">• Absolute Ahimsa</text>
      <text x="465" y="135" font-family="system-ui, sans-serif" font-size="9.5" fill="#166534" text-anchor="middle">• Vows of Truth &amp; Non-stealing</text>
      <text x="465" y="155" font-family="system-ui, sans-serif" font-size="9.5" fill="#166534" text-anchor="middle">• Self-discipline &amp; Tapa</text>
      <text x="465" y="172" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#15803d" text-anchor="middle">Language: Prakrit</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 7.1: The major philosophical streams that laid the ethical and cultural roots of ancient India.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Exercises &amp; Model Solutions</div>

    ${qCard(
      'c6sst-ch7-q1',
      'Q1',
      'The Four Vedas and Their Content',
      'Describe',
      'Name the four Vedas. Briefly explain what each Veda deals with and how they were transmitted across generations.',
      `<p class="step"><strong>1. The Four Vedas:</strong></p>
      <ul class="step-list">
        <li><strong>Rigveda:</strong> The earliest Veda, containing 1,028 hymns (Suktas) divided into 10 Mandalas. It contains prayers to divine forces of nature like Agni (Fire), Indra (Rain/Thunder), Varuna (Cosmic Order), and the universal Gayatri Mantra.</li>
        <li><strong>Samaveda:</strong> Contains poetic verses arranged to be sung melodiously during rituals. It is recognised as the primary origin of Indian classical music (Svara and Raga system).</li>
        <li><strong>Yajurveda:</strong> Provides prose formulas, procedures, and rules for priests conducting sacrificial rites (yajnas).</li>
        <li><strong>Atharvaveda:</strong> Contains hymns dealing with everyday life, herbal treatments for diseases, protection from calamities, peace, and domestic harmony.</li>
      </ul>
      <p class="step"><strong>2. Oral Transmission (Oral Tradition):</strong></p>
      <p>The Vedas were not written on paper initially. They were preserved through the rigorous <em>Shruti</em> tradition (learning by listening). Teachers recited every syllable, word, and tone with pitch-perfect accuracy, and students memorised them with incredible precision for hundreds of years before they were recorded in writing.</p>`,
      '4 marks: 0.5 mark each for naming and defining the 4 Vedas (2 marks) + 2 marks for explaining oral transmission (Shruti, memorisation of accents).'
    )}

    ${qCard(
      'c6sst-ch7-q2',
      'Q2',
      'Main Teachings of the Buddha',
      'Long Answer',
      'What were the core teachings of Gautama Buddha? Why did his message appeal to ordinary people in ancient India?',
      `<p class="step"><strong>1. The Four Noble Truths (Chatvari Arya Satyani):</strong></p>
      <ul class="step-list">
        <li><strong>Dukkha:</strong> The world is full of suffering and dissatisfaction.</li>
        <li><strong>Samudaya:</strong> The root cause of suffering is craving, attachment, and selfish desires (<em>Tanha</em>).</li>
        <li><strong>Nirodha:</strong> Suffering can be eliminated by overcoming desires.</li>
        <li><strong>Magga:</strong> The way to end suffering is the Noble Eightfold Path (<em>Ashtangika Marga</em>).</li>
      </ul>
      <p class="step"><strong>2. The Middle Path (Madhyama Marga):</strong></p>
      <p>Buddha taught humans to avoid two extremes: excessive indulgence in worldly pleasures and severe, painful bodily torture. Balanced living is the key to enlightenment.</p>
      <p class="step"><strong>3. Reasons for Immense Popularity among Common People:</strong></p>
      <ul class="step-list">
        <li><strong>Language of the Masses:</strong> Buddha preached in <em>Prakrit/Pali</em>, the spoken language of everyday farmers and artisans, rather than Sanskrit which was restricted to scholars.</li>
        <li><strong>Rejection of Caste Discrimination:</strong> He proclaimed that true nobility comes from righteous character and conduct, not from the caste one is born into. Anyone could join the <em>Sangha</em>.</li>
        <li><strong>No Costly Animal Sacrifices:</strong> Instead of expensive, ritualistic sacrifices, he taught kindness, universal love (<em>Metta</em>), and respect for all living creatures.</li>
      </ul>`,
      '5 marks: 2 marks for Four Noble Truths + 1 mark for Middle Path + 2 marks for reasons for mass appeal (Prakrit language, equality, rejection of animal sacrifice).'
    )}

    ${qCard(
      'c6sst-ch7-q3',
      'Q3',
      'Core Principles of Jainism and Mahavira',
      'Explain',
      'Explain the fundamental philosophy of Vardhamana Mahavira with special emphasis on Ahimsa and the Triratna.',
      `<p class="step"><strong>1. The Principle of Ahimsa (Non-violence):</strong></p>
      <ul class="step-list">
        <li>Mahavira taught that all living beings—humans, animals, birds, trees, and even microscopic entities—desire life and experience pain.</li>
        <li>He gave the famous message: <em>"Live and let live."</em> Ahimsa must be practised strictly in thought, word, and deed. Followers were forbidden from causing harm to any creature.</li>
      </ul>
      <p class="step"><strong>2. The Triratna (The Three Jewels):</strong></p>
      <p>Liberation from the cycle of birth and rebirth (Moksha) can be achieved through three jewels:</p>
      <ul class="step-list">
        <li><strong>Samyak Darshana (Right Faith):</strong> True belief in truth and spiritual reality.</li>
        <li><strong>Samyak Jnana (Right Knowledge):</strong> Proper, unbiased understanding of life and universe.</li>
        <li><strong>Samyak Charitra (Right Conduct):</strong> Moral, truthful, and non-violent living.</li>
      </ul>
      <p class="step"><strong>3. The Five Vows:</strong></p>
      <p>Non-violence (Ahimsa), Truthfulness (Satya), Non-stealing (Asteya), Non-possession (Aparigraha), and Celibacy/Self-control (Brahmacharya).</p>`,
      '3 marks: 1.5 marks for Ahimsa concept + 1.5 marks for explaining Triratna (Right Faith, Knowledge, Conduct).'
    )}

    ${qCard(
      'c6sst-ch7-q4',
      'Q4',
      'Women Thinkers in Upanishads: Gargi and Satyakama Jabala',
      'Short',
      'Who was Gargi? Mention another famous seeker of truth from the Upanishads whose low birth did not stop him from gaining knowledge.',
      `<p class="step"><strong>1. Gargi Vachaknavi:</strong></p>
      <p>Gargi was a brilliant woman philosopher and scholar mentioned in the <em>Brihadaranyaka Upanishad</em>. She participated fearlessly in the royal philosophical assemblies hosted by King Janaka of Mithila and challenged the foremost sage Yajnavalkya with profound questions about the ultimate foundation of the cosmos.</p>
      <p class="step"><strong>2. Satyakama Jabala:</strong></p>
      <p>Satyakama was the son of a poor maidservant named Jabali. When he approached sage Gautama to become a student, he honestly confessed that he did not know his father's gotra. Admiring his fearless truthfulness, sage Gautama initiated him into learning, declaring: <em>"None but a true seeker of truth could speak with such courage."</em> He grew up to become one of the most respected sages of the Upanishads.</p>`,
      '2 marks: 1 mark for Gargi\'s scholarly debates in Janaka\'s court + 1 mark for Satyakama\'s honesty and acceptance.'
    )}

    ${qCard(
      'c6sst-ch7-q5',
      'Q5',
      'Impact of Cultural Roots on Modern Indian Society',
      'Think & Reflect',
      'How do the ancient cultural roots discussed in this chapter continue to influence our daily lives in contemporary India?',
      `<p class="step"><strong>Contemporary Relevance and Daily Influence:</strong></p>
      <ul class="step-list">
        <li><strong>Values of Ahimsa:</strong> The ancient principle of Ahimsa became the bedrock of India\'s freedom struggle under Mahatma Gandhi (Satyagraha) and remains our guiding diplomatic ideal for world peace (Panchsheel).</li>
        <li><strong>Constitutional Motto:</strong> Our national motto <em>"Satyameva Jayate"</em> (Truth alone triumphs) is directly taken from the <em>Mundaka Upanishad</em>.</li>
        <li><strong>Yoga and Meditation:</strong> Techniques of mental calm and self-discipline developed in Vedic and Buddhist traditions are now celebrated globally as the International Day of Yoga.</li>
        <li><strong>Tolerance and Pluralism:</strong> The Rigvedic declaration <em>"Ekam Sat Vipra Bahudha Vadanti"</em> (Truth is one, the wise speak of it in varied ways) forms the spiritual foundation for India\'s vibrant secularism and unity in diversity.</li>
      </ul>`,
      '3 marks: 1 mark each for Satyameva Jayate / Ahimsa / Yoga and pluralism examples with textual connections.'
    )}
  </div>
</section>
`;

// CHAPTER 8: Unity in Diversity
const ch8 = `
<section class="chapter-section" id="ch8">
  <div class="chapter-header">
    <div class="ch-badge">8</div>
    <div class="chapter-header-info">
      <h2>Chapter 8: Unity in Diversity</h2>
      <p>NCERT Exploring Society: India and Beyond (Class 6) — Dimensions of Diversity, Case Studies of Ladakh &amp; Kerala, Jawaharlal Nehru’s Vision | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Civic &amp; Geographical Concepts</div>
    <ul class="concept-list">
      <li><strong>Understanding Diversity:</strong> Diversity refers to the presence of varied cultures, languages, religions, geographic terrains, food habits, and customs within a shared society. Rather than creating division, diversity enriches our daily experiences.</li>
      <li><strong>Factors Influencing Diversity:</strong>
        <ul>
          <li><strong>Geographical Factors:</strong> The physical environment (mountains, deserts, coasts, plains) determines people's clothing, occupation, housing, and cuisine.</li>
          <li><strong>Historical Factors:</strong> Travellers, traders, and immigrants arriving in India adapted to local traditions while introducing new skills, languages, and philosophies, leading to cultural syntheses.</li>
        </ul>
      </li>
      <li><strong>Case Study 1: Ladakh (The Cold Desert):</strong>
        <ul>
          <li>High-altitude mountainous desert in the northern Union Territory of Ladakh; receives minimal rainfall and is covered in snow for months.</li>
          <li><strong>Livelihood:</strong> Rearing Pashmina goats (producing fine, expensive cashmere wool), yaks, and sheep.</li>
          <li><strong>Diet &amp; Culture:</strong> Meat and dairy products (butter, chhurpi cheese). Trade pass on the Silk Route. Blend of Buddhism and Islam; famous Tibetan national epic <em>Kesar Saga</em> is sung by both Muslims and Buddhists.</li>
        </ul>
      </li>
      <li><strong>Case Study 2: Kerala (The Coastal Spice Haven):</strong>
        <ul>
          <li>Located in southwestern India between the Arabian Sea and the Western Ghats.</li>
          <li><strong>Livelihood:</strong> Cultivation of world-famous spices (pepper, cloves, cardamom), fishing, and rice farming.</li>
          <li><strong>Cosmopolitan Heritage:</strong> Jewish, Arab, Christian, and Chinese traders arrived centuries ago. St. Thomas is believed to have brought Christianity around 2000 years ago; Ibn Battuta described thriving Muslim trade; Chinese fishing nets (<em>Cheena-vala</em>) and Chinese frying pans (<em>Cheena-chatti</em>) are used to this day.</li>
        </ul>
      </li>
      <li><strong>Unity in Diversity as India’s Strength:</strong>
        <ul>
          <li>Coined by Pt. Jawaharlal Nehru in his book <em>The Discovery of India</em>. He noted that Indian unity is not something imposed from outside, but something deep within its soul, where the widest tolerance of belief and custom is practised.</li>
          <li>During India’s freedom struggle, men and women from diverse linguistic, religious, and regional backgrounds came together under one national flag to defeat colonial rule.</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- SVG Diagram: Ladakh vs Kerala Comparison -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 220" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Contrasting Geography, Unified Spirit: Ladakh &amp; Kerala</text>
      <!-- Ladakh Box -->
      <rect x="20" y="45" width="235" height="150" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
      <text x="137" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0369a1" text-anchor="middle">LADAKH (Cold Mountain Desert)</text>
      <text x="137" y="93" font-family="system-ui, sans-serif" font-size="10" fill="#0c4a6e" text-anchor="middle">• Northern Himalayan Plateau</text>
      <text x="137" y="113" font-family="system-ui, sans-serif" font-size="10" fill="#0c4a6e" text-anchor="middle">• Pashmina goat rearing, yak milk &amp; wool</text>
      <text x="137" y="133" font-family="system-ui, sans-serif" font-size="10" fill="#0c4a6e" text-anchor="middle">• Influences: Tibet, Buddhism &amp; Islam</text>
      <text x="137" y="153" font-family="system-ui, sans-serif" font-size="10" fill="#0c4a6e" text-anchor="middle">• Cultural treasure: Kesar Saga epic</text>
      <text x="137" y="175" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#0284c7" text-anchor="middle">Continental Gateway (Silk Route)</text>

      <!-- Central Bridge -->
      <line x1="255" y1="120" x2="305" y2="120" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4,3"/>
      <circle cx="280" cy="120" r="14" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="280" y="124" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#b45309" text-anchor="middle">UNITY</text>

      <!-- Kerala Box -->
      <rect x="305" y="45" width="235" height="150" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
      <text x="422" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#15803d" text-anchor="middle">KERALA (Tropical Coastal Plain)</text>
      <text x="422" y="93" font-family="system-ui, sans-serif" font-size="10" fill="#14532d" text-anchor="middle">• Southwestern Arabian Sea Coast</text>
      <text x="422" y="113" font-family="system-ui, sans-serif" font-size="10" fill="#14532d" text-anchor="middle">• Spices (Pepper, Cardamom), Fishing &amp; Rice</text>
      <text x="422" y="133" font-family="system-ui, sans-serif" font-size="10" fill="#14532d" text-anchor="middle">• Influences: Jewish, Arab, Christian, Chinese</text>
      <text x="422" y="153" font-family="system-ui, sans-serif" font-size="10" fill="#14532d" text-anchor="middle">• Cultural treasure: Onam, Cheena-vala</text>
      <text x="422" y="175" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#15803d" text-anchor="middle">Maritime Gateway (Indian Ocean)</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 8.1: Comparative case study illustrating how diverse geography and history weave India's cultural tapestry.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Exercises &amp; Model Solutions</div>

    ${qCard(
      'c6sst-ch8-q1',
      'Q1',
      'Explain "Unity in Diversity"',
      'Explain',
      'What did Jawaharlal Nehru mean by the phrase "Unity in Diversity"? How was this unity demonstrated during India\'s freedom struggle?',
      `<p class="step"><strong>1. Meaning of "Unity in Diversity":</strong></p>
      <ul class="step-list">
        <li>The famous phrase was coined by <strong>Pt. Jawaharlal Nehru</strong> in his classic book <em>The Discovery of India</em>.</li>
        <li>He emphasised that Indian unity is not a superficial uniformity forced from above. Instead, it is something deep within India’s ethos, where beliefs and customs from all backgrounds are welcomed, appreciated, and nurtured under one cultural shelter.</li>
      </ul>
      <p class="step"><strong>2. Demonstration During the Freedom Struggle:</strong></p>
      <ul class="step-list">
        <li>When British imperialists ruled India, they believed that India\'s linguistic and religious differences would keep people divided.</li>
        <li>Instead, women and men across all religions (Hindus, Muslims, Sikhs, Christians, Jains, Parsis), caste communities, and regions stood united under the tricolour.</li>
        <li>They courted arrest together, organized non-violent boycotts, sang patriotic anthems (like <em>Jana Gana Mana</em> and <em>Vande Mataram</em>), and sacrificed their lives side-by-side (as at Jallianwala Bagh in 1919), demonstrating that despite outward diversity, their patriotic heart was one.</li>
      </ul>`,
      '4 marks: 2 marks for Nehru\'s definition and philosophical meaning + 2 marks for historical manifestation in freedom struggle (Jallianwala Bagh, national symbols).'
    )}

    ${qCard(
      'c6sst-ch8-q2',
      'Q2',
      'Comparative Study: Ladakh vs Kerala',
      'Compare',
      'Compare the geography, climate, food, and culture of Ladakh and Kerala. How do these factors shape life in both regions?',
      `<p class="step"><strong>Detailed Comparison Table:</strong></p>
      <div class="table-wrap" style="overflow-x: auto; margin: 12px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; text-align: left;">
          <thead>
            <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Feature</th>
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Ladakh</th>
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Kerala</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;"><strong>Location &amp; Terrain</strong></td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">High-altitude cold mountain desert in Jammu &amp; Kashmir/Ladakh</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Coastal strip between Arabian Sea and Western Ghats in south India</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;"><strong>Climate &amp; Rainfall</strong></td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Extremely cold, dry, receives negligible rainfall; snow-covered</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Tropical, warm, humid with heavy monsoon rainfall</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;"><strong>Occupation &amp; Economy</strong></td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Rearing Pashmina goats, yaks; harvesting high-value wool</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Spice cultivation (pepper, cloves, cardamom), fishing, paddy farming</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;"><strong>Food Habits</strong></td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Meat, dairy products (yak milk butter, chhurpi cheese), tsampa</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Rice, fish curry, coconut-based preparations, fresh fruits</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;"><strong>External Historical Ties</strong></td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Tibet and Central Asia via northern mountain passes</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">Arab, Jewish, European, and Chinese maritime traders</td>
            </tr>
          </tbody>
        </table>
      </div>`,
      '5 marks: 1 mark for each comparative row (Location, Climate, Occupation, Food, External influences).'
    )}

    ${qCard(
      'c6sst-ch8-q3',
      'Q3',
      'Chinese and Arab Influences in Kerala',
      'Short',
      'Mention two examples of historical cultural influences from other countries that are still visible in Kerala today.',
      `<p class="step"><strong>Historical Traces Still Active in Kerala:</strong></p>
      <ul class="step-list">
        <li><strong>Chinese Influence (Cheena-vala &amp; Cheena-chatti):</strong>
          <ul>
            <li>The large, cantilevered shore-operated fishing nets used in Kochi are called <em>Cheena-vala</em> (Chinese fishing nets), which look exactly like fishing nets in south China.</li>
            <li>The everyday wok-shaped frying pan used in Kerala kitchens is called <em>Cheena-chatti</em>, pointing to ancient maritime technology exchange with China.</li>
          </ul>
        </li>
        <li><strong>Arab and Jewish Heritage:</strong>
          <ul>
            <li>Arab merchants settled along the Malabar coast, introducing Islamic culture; Ibn Battuta noted a vibrant mercantile community in the 14th century.</li>
            <li>Jewish traders settled in Mattancherry (Kochi) around 70 CE, building the famous Paradesi Synagogue.</li>
          </ul>
        </li>
      </ul>`,
      '3 marks: 1.5 marks for Chinese fishing nets & frying pan (Cheena-vala/chatti) + 1.5 marks for Arab/Jewish maritime heritage.'
    )}

    ${qCard(
      'c6sst-ch8-q4',
      'Q4',
      'Pashmina Wool of Ladakh',
      'Short',
      'Why is Pashmina wool from Ladakh so expensive and valued across the world?',
      `<p class="step"><strong>Reasons for the Value of Pashmina Wool:</strong></p>
      <ul class="step-list">
        <li><strong>Unique High-Altitude Goat Breed:</strong> Pashmina wool is collected from the fine undercoat of <em>Changthangi goats</em> that survive harsh sub-zero temperatures (down to -40°C) at altitudes above 4,000 metres.</li>
        <li><strong>Microscopic Fineness:</strong> Pashmina fibres are about 12 to 15 microns thin (over six times thinner than a human hair), making garments incredibly lightweight yet exceptionally warm.</li>
        <li><strong>Master Hand-Weaving:</strong> Because the fibres are too delicate for mechanical looms, the wool is hand-spun and traditionally hand-woven into shawls by master weavers in Kashmir, requiring hundreds of hours of painstaking artisanal work.</li>
      </ul>`,
      '2 marks: 1 mark for Changthangi high-altitude goat fibre qualities + 1 mark for delicate handloom craftsmanship.'
    )}

    ${qCard(
      'c6sst-ch8-q5',
      'Q5',
      'How Does Diversity Enrich Our Lives?',
      'Value-Based',
      'Give examples to show how living in a diverse society enriches our day-to-day lives.',
      `<p class="step"><strong>How Diversity Enriches Daily Life:</strong></p>
      <ul class="step-list">
        <li><strong>Celebration of Festivals:</strong> We do not celebrate just one festival; our calendar is joyous with Diwali, Eid, Christmas, Baisakhi, Pongal, Onam, Gurpurab, and Buddha Purnima, sharing sweets and joy with friends across communities.</li>
        <li><strong>Culinary Variety:</strong> In a single week, an Indian family might enjoy Gujarati dhokla, Punjabi parathas, South Indian dosa and idli, Bengali rasgulla, and Tibetan momos.</li>
        <li><strong>Creative Arts and Literature:</strong> Music, cinema, dance (Kathak, Bharatanatyam, Bhangra), and literature draw inspiration from stories across different languages and folk cultures.</li>
        <li><strong>Broader Mindset:</strong> Growing up alongside friends of diverse traditions teaches children empathy, mutual respect, open-mindedness, and cosmopolitan thinking.</li>
      </ul>`,
      '3 marks: 1 mark each for festivals / food variety / empathy and cultural breadth.'
    )}
  </div>
</section>
`;

// Write Chapter files
fs.writeFileSync(path.join(outDir, 'ch5.html'), ch5.trim(), 'utf8');
console.log('Successfully generated ch5.html');

fs.writeFileSync(path.join(outDir, 'ch6.html'), ch6.trim(), 'utf8');
console.log('Successfully generated ch6.html');

fs.writeFileSync(path.join(outDir, 'ch7.html'), ch7.trim(), 'utf8');
console.log('Successfully generated ch7.html');

fs.writeFileSync(path.join(outDir, 'ch8.html'), ch8.trim(), 'utf8');
console.log('Successfully generated ch8.html');
