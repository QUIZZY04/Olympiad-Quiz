// scripts/gen-c6eng-ch6-ch10.js
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

// CHAPTER 6: The Chair (Unit 2: Friendship)
const ch6 = `
<section class="chapter-section" id="ch6">
  <div class="chapter-header">
    <div class="ch-badge">6</div>
    <div class="chapter-header-info">
      <h2>Chapter 6: The Chair</h2>
      <p>NCERT Poorvi (Class 6) — Unit 2: Friendship | Testing True Friends, The Invisible Magic Chair, Fair-Weather Pals vs Genuine Companions | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Narrative Overview, Themes &amp; Symbolism</div>
    <ul class="concept-list">
      <li><strong>Setting &amp; Protagonist:</strong> Mario is a cheerful, popular schoolboy who frequently brags about having hundreds of friends. His wise grandfather believes that real friends are rare, precious gems, while most casual companions are merely fair-weather acquaintances.</li>
      <li><strong>The Bet &amp; The Invisible Chair:</strong> The grandfather challenges Mario to a friendly bet to see who his real friends are. He gives Mario an imaginary, "invisible magic chair" and explains that only a person supported by true, selfless friends will be able to sit comfortably on it without falling.</li>
      <li><strong>The Schoolyard Trial:</strong> Mario takes the invisible chair to school and attempts to sit in mid-air in front of all his classmates. He falls backward and lands awkwardly on his bottom multiple times. Instead of helping him, his so-called friends roar with laughter, mocking and teasing him.</li>
      <li><strong>The True Friends Revealed:</strong> Determined to prove his grandfather right or wrong, Mario tries one more time. Miraculously, he does not fall! He remains floating comfortably in mid-air. When he looks around, he sees three devoted classmates—<strong>Guneet, Asma, and Deepa</strong>—silently holding him up from behind with all their strength.</li>
      <li><strong>The Moral Lesson:</strong> A crowd that laughs at our embarrassment contains zero real friends. True friends are the ones who step up quietly and hold us up when we are about to fall.</li>
    </ul>
  </div>

  <!-- SVG Diagram: The Friendship Test -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">The Invisible Chair: Testing Friends in "The Chair"</text>
      <!-- Fair-Weather Friends -->
      <rect x="25" y="45" width="230" height="140" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
      <text x="140" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#b91c1c" text-anchor="middle">Fair-Weather Acquaintances</text>
      <text x="140" y="95" font-family="system-ui, sans-serif" font-size="9.5" fill="#7f1d1d" text-anchor="middle">• Surround you only in good times</text>
      <text x="140" y="115" font-family="system-ui, sans-serif" font-size="9.5" fill="#7f1d1d" text-anchor="middle">• Laugh when you fall or fail</text>
      <text x="140" y="135" font-family="system-ui, sans-serif" font-size="9.5" fill="#7f1d1d" text-anchor="middle">• Disappear during embarrassment</text>
      <text x="140" y="155" font-family="system-ui, sans-serif" font-size="9.5" fill="#7f1d1d" text-anchor="middle">• Number in hundreds; value is zero</text>
      <text x="140" y="174" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#dc2626" text-anchor="middle">Superficial Popularity</text>

      <!-- Center VS -->
      <circle cx="280" cy="115" r="16" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="280" y="120" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#b45309" text-anchor="middle">VS</text>

      <!-- True Friends -->
      <rect x="305" y="45" width="230" height="140" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="420" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#15803d" text-anchor="middle">True Companions (Guneet, Asma, Deepa)</text>
      <text x="420" y="95" font-family="system-ui, sans-serif" font-size="9.5" fill="#14532d" text-anchor="middle">• Rush forward when you stumble</text>
      <text x="420" y="115" font-family="system-ui, sans-serif" font-size="9.5" fill="#14532d" text-anchor="middle">• Silently hold you up with care</text>
      <text x="420" y="135" font-family="system-ui, sans-serif" font-size="9.5" fill="#14532d" text-anchor="middle">• Stand by you against mockery</text>
      <text x="420" y="155" font-family="system-ui, sans-serif" font-size="9.5" fill="#14532d" text-anchor="middle">• Few in number; priceless in worth</text>
      <text x="420" y="174" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#16a34a" text-anchor="middle">Genuine Pillar of Support</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 6.1: The distinction between casual crowd popularity and authentic supporting friendships.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Comprehension &amp; Analytical Questions</div>

    ${qCard(
      'c6eng-ch6-q1',
      'Q1',
      'Mario’s Boast and the Grandfather’s Challenge',
      'Short',
      'What did Mario boast about to his grandfather? How did his grandfather respond to his claim?',
      `<p class="step"><strong>1. Mario’s Boast:</strong></p>
      <p>Mario proudly boasted that he was the most popular boy in school and had dozens of friends who loved him unconditionally.</p>
      <p class="step"><strong>2. The Grandfather’s Response:</strong></p>
      <p>The wise grandfather gently smiled and bet a chocolate that Mario did not have as many true friends as he imagined. He gave him an invisible chair, explaining that sitting on it was a secret test that only genuine friends could help him pass.</p>`,
      '2 marks: 1 mark for boasting of immense popularity + 1 mark for grandfather challenging him with the invisible chair test.'
    )}

    ${qCard(
      'c6eng-ch6-q2',
      'Q2',
      'Reaction of the Classmates to Mario’s Falls',
      'Describe',
      'What happened when Mario tried to sit on the invisible chair in the schoolyard? How did the other children react?',
      `<p class="step"><strong>1. What Happened to Mario:</strong></p>
      <p>Mario gathered his classmates, proudly announced he was going to show them something magical, and tried to sit on the empty air. Immediately, he lost balance and fell flat on his bottom.</p>
      <p class="step"><strong>2. The Children\'s Reaction:</strong></p>
      <p>The vast majority of the children did not step forward to help him up. Instead, they pointed fingers, doubled over in laughter, and mocked him for looking ridiculous, proving that they cared only for entertainment, not for him.</p>`,
      '3 marks: 1.5 marks for falling in mid-air + 1.5 marks for classmates laughing, mocking, and doing nothing to help.'
    )}

    ${qCard(
      'c6eng-ch6-q3',
      'Q3',
      'How the True Friends Saved Mario',
      'Long Answer',
      'Explain how Mario finally succeeded in sitting on the invisible chair. Who were the three friends who held him up?',
      `<p class="step"><strong>1. The Final Attempt:</strong></p>
      <p>Refusing to give up, Mario took a deep breath and attempted the chair test one last time in the school playground.</p>
      <p class="step"><strong>2. The Miraculous Balance:</strong></p>
      <p>To everyone’s utter astonishment, Mario did not fall. He remained suspended comfortably in mid-air, smiling triumphantly.</p>
      <p class="step"><strong>3. The Secret Behind the Magic:</strong></p>
      <ul class="step-list">
        <li>When Mario looked behind his shoulders, he discovered that he was not magically floating by himself.</li>
        <li>Three quiet classmates—<strong>Guneet, Asma, and Deepa</strong>—had rushed behind him. They were holding him firmly under his arms and back, bearing his weight so he would not crash down and hurt himself.</li>
        <li>They did not care if they looked silly holding him up; their only concern was protecting their friend from pain and ridicule.</li>
      </ul>
      <p class="step"><strong>Mario’s Realization:</strong> Mario immediately won his grandfather’s bet and realized that having three loyal friends who catch you when you stumble is worth far more than a hundred casual acquaintances who laugh when you fall.</p>`,
      '4 marks: 1 mark for not falling + 2 marks for naming Guneet, Asma, Deepa holding him up + 1 mark for moral realization.'
    )}

    ${qCard(
      'c6eng-ch6-q4',
      'Q4',
      'Symbolism of the Invisible Chair',
      'Think & Reflect',
      'What does the "invisible chair" symbolize in the story? How can we test friendship in our own lives?',
      `<p class="step"><strong>1. Symbolism of the Invisible Chair:</strong></p>
      <p>The "invisible chair" symbolizes <strong>difficult times, vulnerability, and embarrassment</strong>. Sitting on empty air represents facing a crisis where you have no personal support and are about to fall.</p>
      <p class="step"><strong>2. Testing Friendship in Daily Life:</strong></p>
      <ul class="step-list">
        <li>We do not need an imaginary chair to test our friends. Real friendship is revealed when we are sick, when our grades drop, or when we face teasing.</li>
        <li>The people who stand beside us when we are struggling, defend us when we are absent, and wipe our tears are our true friends.</li>
      </ul>`,
      '3 marks: 1.5 marks for symbolism of hardship/vulnerability + 1.5 marks for real-world application in times of distress.'
    )}
  </div>
</section>
`;

// CHAPTER 7: Neem Baba (Unit 3: Nurturing Nature)
const ch7 = `
<section class="chapter-section" id="ch7">
  <div class="chapter-header">
    <div class="ch-badge">7</div>
    <div class="chapter-header-info">
      <h2>Chapter 7: Neem Baba</h2>
      <p>NCERT Poorvi (Class 6) — Unit 3: Nurturing Nature | The Wonder Tree of India, Ancient Medicinal Heritage, Environmental Guardian | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Botanical Heritage &amp; Ecological Marvels</div>
    <ul class="concept-list">
      <li><strong>Format &amp; Character Dynamic:</strong> A charming dialogue between a young, curious girl named <strong>Amber</strong> and the ancient neem tree standing in her courtyard, affectionately addressed as <strong>Neem Baba</strong>.</li>
      <li><strong>Ancestry &amp; Botanical Name:</strong>
        <ul>
          <li>Scientific Name: <em>Azadirachta indica</em>, derived from Persian <em>Azad-Darakht-e-Hind</em> ("the Noble/Free Tree of India").</li>
          <li>Origin: Native to the Indian subcontinent and parts of Myanmar, having thrived across millions of years.</li>
        </ul>
      </li>
      <li><strong>The "Village Pharmacy" (Arishta):</strong>
        <ul>
          <li>In ancient Sanskrit texts, the neem tree is called <em>Arishta</em>, meaning "that which is complete, imperishable, and relieves sickness".</li>
          <li><strong>Leaves:</strong> Placed in warm bath water to soothe measles, chickenpox, and skin boils; dried leaves protect woolen clothes and grains from weevils and silverfish.</li>
          <li><strong>Twigs (Datun):</strong> Chewed for thousands of years as a natural toothbrush; fights dental bacteria, heals gums, and freshens breath without synthetic chemicals.</li>
          <li><strong>Bark:</strong> Boiled to treat fevers and digestive ailments.</li>
          <li><strong>Seeds &amp; Oil:</strong> Crushed into neem cake and oil; acts as a powerful non-toxic agricultural pesticide and mosquito repellent.</li>
        </ul>
      </li>
      <li><strong>Ecological Shield:</strong> Neem trees act as natural green air purifiers, absorbing dust, releasing abundant oxygen, preventing soil erosion, and providing cool shade that drops the ambient temperature by several degrees during scorching summer afternoons.</li>
    </ul>
  </div>

  <!-- SVG Diagram: The All-Healing Neem Tree Anatomy -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 220" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Neem Baba: The Nature's Living Medicine Chest</text>
      <!-- Trunk & Tree Shape -->
      <rect x="260" y="100" width="40" height="90" rx="4" fill="#854d0e"/>
      <circle cx="280" cy="80" r="55" fill="#15803d" opacity="0.85"/>
      <circle cx="250" cy="65" r="40" fill="#16a34a" opacity="0.9"/>
      <circle cx="310" cy="65" r="40" fill="#22c55e" opacity="0.8"/>
      <text x="280" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">Neem Baba</text>

      <!-- Branch 1: Leaves -->
      <line x1="220" y1="60" x2="160" y2="50" stroke="#16a34a" stroke-width="2"/>
      <rect x="20" y="30" width="135" height="50" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
      <text x="87" y="50" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">LEAVES</text>
      <text x="87" y="66" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">Chickenpox &amp; Grain Preserver</text>

      <!-- Branch 2: Twig -->
      <line x1="220" y1="120" x2="160" y2="135" stroke="#854d0e" stroke-width="2"/>
      <rect x="20" y="115" width="135" height="50" rx="6" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="87" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#854d0e" text-anchor="middle">TWIGS (Datun)</text>
      <text x="87" y="151" font-family="system-ui, sans-serif" font-size="8.5" fill="#713f12" text-anchor="middle">Dental Care &amp; Healthy Gums</text>

      <!-- Branch 3: Bark -->
      <line x1="340" y1="60" x2="400" y2="50" stroke="#854d0e" stroke-width="2"/>
      <rect x="405" y="30" width="135" height="50" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="472" y="50" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">BARK</text>
      <text x="472" y="66" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">Fevers &amp; Stomach Soother</text>

      <!-- Branch 4: Seeds -->
      <line x1="340" y1="120" x2="400" y2="135" stroke="#16a34a" stroke-width="2"/>
      <rect x="405" y="115" width="135" height="50" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
      <text x="472" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">SEEDS &amp; OIL</text>
      <text x="472" y="151" font-family="system-ui, sans-serif" font-size="8.5" fill="#065f46" text-anchor="middle">Eco-Pesticide &amp; Repellent</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 7.1: The multi-faceted medical and ecological uses of different parts of the Neem tree.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Comprehension &amp; Science Integration</div>

    ${qCard(
      'c6eng-ch7-q1',
      'Q1',
      'Why is Neem Called the "Village Pharmacy"?',
      'Explain',
      'Why is the neem tree often described as the "village pharmacy" or "Arishta"? Mention three reasons.',
      `<p class="step"><strong>Reasons for the Title "Village Pharmacy":</strong></p>
      <ul class="step-list">
        <li><strong>Holistic Cure:</strong> Almost every part of the neem tree—leaves, bark, flowers, seeds, roots, and oil—contains medicinal compounds that cure common ailments without requiring store-bought chemical drugs.</li>
        <li><strong>Traditional Sanskrit Name (Arishta):</strong> In Ayurveda, it was named <em>Arishta</em>, meaning that which cures all sickness and bestows health.</li>
        <li><strong>Accessibility for Rural Families:</strong> In thousands of Indian villages, families rely on fresh neem leaves for skin rashes, neem bark tea for intermittent fevers, and neem oil as an antiseptic ointment, making it a free, living medicine dispensary available in every home courtyard.</li>
      </ul>`,
      '3 marks: 1 mark for medicinal properties of all parts + 1 mark for Arishta concept + 1 mark for traditional village access.'
    )}

    ${qCard(
      'c6eng-ch7-q2',
      'Q2',
      'Traditional Uses of Neem Leaves and Datun',
      'Short',
      'How are neem leaves and neem twigs (datun) traditionally used in Indian households?',
      `<p class="step"><strong>1. Uses of Neem Leaves:</strong></p>
      <ul class="step-list">
        <li>Boiled in water for bathing patients suffering from measles, chickenpox, and prickly heat due to their antibacterial and cooling properties.</li>
        <li>Dried and stored inside trunks of woolen clothes and cupboards of book libraries to prevent termites and insects from ruining fabrics and pages.</li>
      </ul>
      <p class="step"><strong>2. Uses of Datun (Neem Twigs):</strong></p>
      <p>Young, tender neem twigs are crushed at one end into natural bristles and used to brush teeth. The bitter juices kill oral bacteria, tighten receding gums, prevent cavities, and remove bad breath naturally.</p>`,
      '3 marks: 1.5 marks for neem leaves (skin healing & pest prevention) + 1.5 marks for datun teeth cleaning.'
    )}

    ${qCard(
      'c6eng-ch7-q3',
      'Q3',
      'Ecological Benefits of Neem Baba',
      'Describe',
      'Apart from medicines, what ecological services does Neem Baba provide to the environment and living creatures?',
      `<p class="step"><strong>Ecological Contributions of Neem Baba:</strong></p>
      <ul class="step-list">
        <li><strong>Air Cleansing &amp; Dust Trapping:</strong> The dense, serrated green leaves trap aerial dust particles and produce high amounts of oxygen.</li>
        <li><strong>Microclimate Cooling:</strong> Transpiration from a mature neem canopy cools the surrounding courtyard air by 3°C to 5°C during blistering summer months.</li>
        <li><strong>Natural Bird Sanctuary:</strong> It provides safe nesting spaces for birds like sparrows, mynas, and parakeets, who feed on sweet neem berries (nibori).</li>
        <li><strong>Soil Health:</strong> Falling neem leaves decompose into organic mulch rich in nitrogen, enhancing soil fertility while keeping subterranean nematodes and pests away.</li>
      </ul>`,
      '3 marks: 1 mark for air purification/cooling + 1 mark for bird sanctuary/biodiversity + 1 mark for organic soil enrichment.'
    )}
  </div>
</section>
`;

// CHAPTER 8: What a Bird Thought (Unit 3: Nurturing Nature)
const ch8 = `
<section class="chapter-section" id="ch8">
  <div class="chapter-header">
    <div class="ch-badge">8</div>
    <div class="chapter-header-info">
      <h2>Chapter 8: What a Bird Thought</h2>
      <p>NCERT Poorvi (Class 6) — Unit 3: Nurturing Nature | Poem by Lydia Maria Child, Growth of Awareness, Expanding Horizons &amp; Wonder | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Poetic Overview, Stanza Breakdown &amp; Philosophy</div>
    <ul class="concept-list">
      <li><strong>Poet &amp; Structure:</strong> A delightful four-stanza lyrical poem composed by the American author and abolitionist <strong>Lydia Maria Child</strong>. Written in an engaging first-person perspective (<em>"I lived first in a little house..."</em>).</li>
      <li><strong>Four Stages of Consciousness:</strong>
        <ol>
          <li><strong>Stanza 1 (The Egg Shell):</strong> The hatchling begins life in a tiny, pale blue eggshell, believing that the whole cosmos is tiny, round, and composed solely of blue eggshell.</li>
          <li><strong>Stanza 2 (The Straw Nest):</strong> Hatching into a snug, cozy nest built by loving parents, the baby bird is fed soft worms and concludes with certainty that the entire universe is made of dry straw.</li>
          <li><strong>Stanza 3 (The Green Tree):</strong> Growing feathers and hopping onto a fluttering tree branch, the fledgeling looks around at shimmering foliage and proudly declares that the world must be made of green leaves.</li>
          <li><strong>Stanza 4 (The Infinite Sky):</strong> Taking flight with powerful wings into the vast azure sky, the mature bird flies beyond the forest, gazes at endless mountains and oceans, and confesses in humble awe: <em>"Now, how the world is really made, I cannot tell — let someone tell who knows!"</em></li>
        </ol>
      </li>
      <li><strong>Philosophical Metaphor for Human Learning:</strong> The poem mirrors the intellectual growth of a child. As we grow, read, travel, and mature, our small, sheltered notions expand into profound wonder at the vastness and mystery of the universe.</li>
    </ul>
  </div>

  <!-- SVG Diagram: The Four Stages of the Bird's Worldview -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Concentric Growth of Awareness in "What a Bird Thought"</text>
      <!-- Stage 1 -->
      <circle cx="70" cy="115" r="40" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="70" y="110" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">Stage 1</text>
      <text x="70" y="125" font-family="system-ui, sans-serif" font-size="8.5" fill="#075985" text-anchor="middle">Blue Shell</text>
      <text x="70" y="172" font-family="system-ui, sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Tiny &amp; Round</text>

      <line x1="110" y1="115" x2="150" y2="115" stroke="#94a3b8" stroke-width="2"/>

      <!-- Stage 2 -->
      <circle cx="190" cy="115" r="40" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="190" y="110" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">Stage 2</text>
      <text x="190" y="125" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">Straw Nest</text>
      <text x="190" y="172" font-family="system-ui, sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Warm &amp; Fed</text>

      <line x1="230" y1="115" x2="270" y2="115" stroke="#94a3b8" stroke-width="2"/>

      <!-- Stage 3 -->
      <circle cx="310" cy="115" r="40" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="310" y="110" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">Stage 3</text>
      <text x="310" y="125" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">Leafy Bough</text>
      <text x="310" y="172" font-family="system-ui, sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Green Leaves</text>

      <line x1="350" y1="115" x2="390" y2="115" stroke="#94a3b8" stroke-width="2"/>

      <!-- Stage 4 -->
      <circle cx="450" cy="115" r="50" fill="#f1f5f9" stroke="#6366f1" stroke-width="2.5"/>
      <text x="450" y="110" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#4338ca" text-anchor="middle">Stage 4: Vast Sky</text>
      <text x="450" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#3730a3" text-anchor="middle">Boundless Flight</text>
      <text x="450" y="180" font-family="system-ui, sans-serif" font-size="8" font-weight="600" fill="#4f46e5" text-anchor="middle">Humble Wonder</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 8.1: Progression of the bird’s expanding perception from the egg to the boundless sky.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Comprehension &amp; Poetic Devices</div>

    ${qCard(
      'c6eng-ch8-q1',
      'Q1',
      'How the Bird’s View Changed with Each Stage',
      'Compare',
      'Trace how the bird’s conception of the world changed from the first stanza to the fourth stanza.',
      `<p class="step"><strong>Step-by-Step Change in Conception:</strong></p>
      <ul class="step-list">
        <li><strong>Stanza 1:</strong> When inside the egg, it thought the whole world was small, round, and made of pale blue shell.</li>
        <li><strong>Stanza 2:</strong> Upon hatching into the nest, it thought the world was made of warm, dry straw provided by its mother.</li>
        <li><strong>Stanza 3:</strong> Once feathered and perched on a branch, it believed the world was completely made of rustling green leaves.</li>
        <li><strong>Stanza 4:</strong> Finally soaring with open wings across the vast, endless sky, it realized the world is far larger and more wondrous than it could ever grasp.</li>
      </ul>`,
      '4 marks: 1 mark for each of the four progressive stages of understanding.'
    )}

    ${qCard(
      'c6eng-ch8-q2',
      'Q2',
      'Rhyme Scheme of the Poem',
      'Poetic Devices',
      'Identify the rhyme scheme of the poem. Give two pairs of rhyming words from the text.',
      `<p class="step"><strong>1. Rhyme Scheme:</strong></p>
      <p>The poem follows a consistent, musical <strong>AABB</strong> (or ABCB in certain ballad variations) rhyming structure in each stanza.</p>
      <p class="step"><strong>2. Pairs of Rhyming Words:</strong></p>
      <ul class="step-list">
        <li><em>shell — well</em> (Stanza 1)</li>
        <li><em>straw — saw</em> (Stanza 2)</li>
        <li><em>sight — light</em> (Stanza 4)</li>
        <li><em>grew — flew</em> (Stanza 4)</li>
      </ul>`,
      '2 marks: 1 mark for rhyme scheme identification + 1 mark for accurate rhyming pairs.'
    )}

    ${qCard(
      'c6eng-ch8-q3',
      'Q3',
      'Deeper Symbolic Meaning for Human Beings',
      'Think & Answer',
      'How is the bird’s journey similar to the journey of human learning and growing up?',
      `<p class="step"><strong>Metaphor for Human Intellectual Growth:</strong></p>
      <ul class="step-list">
        <li>When we are tiny infants, our world is confined to our cradle and our mother’s arms (like the eggshell).</li>
        <li>When we grow a little older, our home, family, and toys feel like the whole universe (like the straw nest).</li>
        <li>When we go to school, our horizon broadens to classrooms, parks, and friends (like the leafy branch).</li>
        <li>As we mature into adulthood through education, books, science, and travel, we fly out into the boundless cosmos, realising that human knowledge is endless and our universe is full of mysteries yet to be unlocked.</li>
      </ul>`,
      '3 marks: 1.5 marks for parallel between childhood stages and bird stages + 1.5 marks for philosophical humility in adult learning.'
    )}
  </div>
</section>
`;

// CHAPTER 9: Spices that Heal Us (Unit 3: Nurturing Nature)
const ch9 = `
<section class="chapter-section" id="ch9">
  <div class="chapter-header">
    <div class="ch-badge">9</div>
    <div class="chapter-header-info">
      <h2>Chapter 9: Spices that Heal Us</h2>
      <p>NCERT Poorvi (Class 6) — Unit 3: Nurturing Nature | India’s Spice Heritage, Ayurvedic Healing in the Kitchen, Traditional Home Remedies | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Spice Lore, Chemical Principles &amp; Home Remedies</div>
    <ul class="concept-list">
      <li><strong>Historical Heritage:</strong> For thousands of years, India has been famous globally as the <em>"Land of Spices"</em>. Ancient Phoenicians, Romans, Arabs, and European navigators sailed perilous oceans to trade in Indian spices, which were valued as highly as gold and gems.</li>
      <li><strong>Food as Medicine:</strong> Indian culinary traditions integrate spices not merely for taste and aroma, but as preventive Ayurvedic medicines that maintain bodily balance and ward off infections.</li>
      <li><strong>Profiles of Everyday Healing Spices:</strong>
        <ul>
          <li><strong>Turmeric (Haldi):</strong> Contains the powerful anti-inflammatory compound <em>Curcumin</em>. Applied to cuts and bruises to clot blood and prevent bacterial infection; warm turmeric milk (<em>Haldi Doodh</em> / "Golden Milk") boosts immunity and cures sore throats.</li>
          <li><strong>Ginger (Adrak / Sonth):</strong> Fresh or dried; cures indigestion, nausea, and motion sickness. Ginger-tulsi tea with honey is a classic remedy for chest congestion.</li>
          <li><strong>Black Pepper (Kali Mirch):</strong> The acclaimed "Black Gold" and king of spices; rich in <em>piperine</em>. Enhances the absorption of other nutrients and clears sinuses.</li>
          <li><strong>Cloves (Laung):</strong> Rich in <em>eugenol</em>; placing a single clove against an aching tooth numbs pain and destroys mouth bacteria.</li>
          <li><strong>Cinnamon (Dalchini) &amp; Cardamom (Elaichi):</strong> Cinnamon regulates blood sugar and warms the body; cardamom freshens breath, aids digestion, and calms an unsettled stomach.</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- SVG Diagram: The Kitchen Spice Healers -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">India's Kitchen Pharmacy: Five Healing Spices</text>
      <!-- Haldi -->
      <rect x="15" y="45" width="95" height="135" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="1.8"/>
      <text x="62" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#854d0e" text-anchor="middle">Haldi</text>
      <text x="62" y="90" font-family="system-ui, sans-serif" font-size="8.5" fill="#a16207" text-anchor="middle">Turmeric</text>
      <text x="62" y="115" font-family="system-ui, sans-serif" font-size="8" fill="#713f12" text-anchor="middle">• Curcumin</text>
      <text x="62" y="132" font-family="system-ui, sans-serif" font-size="8" fill="#713f12" text-anchor="middle">• Heals wounds</text>
      <text x="62" y="150" font-family="system-ui, sans-serif" font-size="8" fill="#713f12" text-anchor="middle">• Golden milk</text>
      <text x="62" y="170" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#854d0e" text-anchor="middle">Antiseptic</text>

      <!-- Adrak -->
      <rect x="120" y="45" width="95" height="135" rx="6" fill="#fed7aa" stroke="#ea580c" stroke-width="1.8"/>
      <text x="167" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#9a3412" text-anchor="middle">Adrak</text>
      <text x="167" y="90" font-family="system-ui, sans-serif" font-size="8.5" fill="#c2410c" text-anchor="middle">Ginger</text>
      <text x="167" y="115" font-family="system-ui, sans-serif" font-size="8" fill="#7c2d12" text-anchor="middle">• Gingerol</text>
      <text x="167" y="132" font-family="system-ui, sans-serif" font-size="8" fill="#7c2d12" text-anchor="middle">• Cures nausea</text>
      <text x="167" y="150" font-family="system-ui, sans-serif" font-size="8" fill="#7c2d12" text-anchor="middle">• Cough &amp; cold</text>
      <text x="167" y="170" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#9a3412" text-anchor="middle">Digestive</text>

      <!-- Kali Mirch -->
      <rect x="225" y="45" width="95" height="135" rx="6" fill="#f1f5f9" stroke="#475569" stroke-width="1.8"/>
      <text x="272" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Kali Mirch</text>
      <text x="272" y="90" font-family="system-ui, sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Black Pepper</text>
      <text x="272" y="115" font-family="system-ui, sans-serif" font-size="8" fill="#334155" text-anchor="middle">• Piperine</text>
      <text x="272" y="132" font-family="system-ui, sans-serif" font-size="8" fill="#334155" text-anchor="middle">• Clears sinus</text>
      <text x="272" y="150" font-family="system-ui, sans-serif" font-size="8" fill="#334155" text-anchor="middle">• "Black Gold"</text>
      <text x="272" y="170" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#1e293b" text-anchor="middle">Metabolism</text>

      <!-- Laung -->
      <rect x="330" y="45" width="95" height="135" rx="6" fill="#fce7f3" stroke="#db2777" stroke-width="1.8"/>
      <text x="377" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#9d174d" text-anchor="middle">Laung</text>
      <text x="377" y="90" font-family="system-ui, sans-serif" font-size="8.5" fill="#be185d" text-anchor="middle">Clove</text>
      <text x="377" y="115" font-family="system-ui, sans-serif" font-size="8" fill="#831843" text-anchor="middle">• Eugenol</text>
      <text x="377" y="132" font-family="system-ui, sans-serif" font-size="8" fill="#831843" text-anchor="middle">• Toothache ease</text>
      <text x="377" y="150" font-family="system-ui, sans-serif" font-size="8" fill="#831843" text-anchor="middle">• Oral health</text>
      <text x="377" y="170" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#9d174d" text-anchor="middle">Dental Relief</text>

      <!-- Elaichi -->
      <rect x="435" y="45" width="110" height="135" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
      <text x="490" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">Elaichi</text>
      <text x="490" y="90" font-family="system-ui, sans-serif" font-size="8.5" fill="#166534" text-anchor="middle">Cardamom</text>
      <text x="490" y="115" font-family="system-ui, sans-serif" font-size="8" fill="#14532d" text-anchor="middle">• Sweet aroma</text>
      <text x="490" y="132" font-family="system-ui, sans-serif" font-size="8" fill="#14532d" text-anchor="middle">• Breath freshener</text>
      <text x="490" y="150" font-family="system-ui, sans-serif" font-size="8" fill="#14532d" text-anchor="middle">• Stomach calm</text>
      <text x="490" y="170" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#15803d" text-anchor="middle">Carminative</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 9.1: The therapeutic functions of five core Indian spices found in daily cooking.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Comprehension &amp; Practical Applications</div>

    ${qCard(
      'c6eng-ch9-q1',
      'Q1',
      'Turmeric: The Golden Healer',
      'Describe',
      'Why is turmeric (haldi) revered as one of the most versatile healing spices in India? Mention two traditional uses.',
      `<p class="step"><strong>1. Active Healing Properties:</strong></p>
      <p>Turmeric contains <em>curcumin</em>, which possesses extraordinary natural antiseptic, antibacterial, and anti-inflammatory properties.</p>
      <p class="step"><strong>2. Two Traditional Uses:</strong></p>
      <ul class="step-list">
        <li><strong>External Wound Healing:</strong> When someone cuts a finger or scrapes a knee, applying a paste of raw turmeric and mustard oil disinfects the wound, stops bleeding, and speeds up skin tissue repair.</li>
        <li><strong>Internal Immunity ("Golden Milk"):</strong> Drinking warm milk boiled with a pinch of turmeric powder, black pepper, and honey cures persistent coughs, reduces throat inflammation, and builds immunity.</li>
      </ul>`,
      '3 marks: 1 mark for curcumin/antiseptic qualities + 1 mark for wound healing + 1 mark for haldi doodh cold relief.'
    )}

    ${qCard(
      'c6eng-ch9-q2',
      'Q2',
      'Clove for Toothache and Ginger for Digestion',
      'Short',
      'Which spice is commonly used to relieve toothache and why? How does ginger help our digestive system?',
      `<p class="step"><strong>1. Clove for Toothache:</strong></p>
      <p>Clove (laung) contains a natural anesthetic and antiseptic compound called <strong>eugenol</strong>. Placing a crushed whole clove or a drop of clove oil against a painful tooth numbs the nerve endings, relieving acute toothache and eliminating oral bacteria.</p>
      <p class="step"><strong>2. Ginger for Digestive Comfort:</strong></p>
      <p>Ginger stimulates the secretion of digestive enzymes in the stomach, relieves bloating, calms nausea (especially motion sickness), and improves gut metabolism.</p>`,
      '3 marks: 1.5 marks for clove and eugenol tooth numbing + 1.5 marks for ginger digestive enzyme stimulation.'
    )}

    ${qCard(
      'c6eng-ch9-q3',
      'Q3',
      'Why Black Pepper was Called "Black Gold"',
      'Historical Context',
      'Why was black pepper known as "Black Gold" in ancient times? What is its medicinal benefit?',
      `<p class="step"><strong>1. Why Called "Black Gold":</strong></p>
      <p>In ancient Rome and medieval Europe, black pepper harvested along the Malabar Coast of south India was so rare, precious, and prized as a meat preservative that it was weighed against gold and accepted as legal currency for paying taxes and ransoms.</p>
      <p class="step"><strong>2. Medicinal Benefits:</strong></p>
      <p>Black pepper contains <em>piperine</em>, which stimulates respiratory passages to expel stubborn mucus, relieves chest congestion, and dramatically enhances the human body\'s ability to absorb vital nutrients from food.</p>`,
      '2 marks: 1 mark for historical Roman trade/currency value + 1 mark for respiratory and piperine benefits.'
    )}
  </div>
</section>
`;

// CHAPTER 10: Change of Heart (Unit 4: Sports and Wellness)
const ch10 = `
<section class="chapter-section" id="ch10">
  <div class="chapter-header">
    <div class="ch-badge">10</div>
    <div class="chapter-header-info">
      <h2>Chapter 10: Change of Heart</h2>
      <p>NCERT Poorvi (Class 6) — Unit 4: Sports and Wellness | Integrity in Sports, The Burden of Dishonesty, Moral Courage &amp; True Victory | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Narrative Overview, Moral Conflict &amp; Character Transformation</div>
    <ul class="concept-list">
      <li><strong>Setting &amp; Protagonist:</strong> Prabhat is a talented, ambitious young athlete in his school’s sports tournament. Desperately longing for glory and the admiration of his classmates, winning the championship trophy becomes an all-consuming obsession.</li>
      <li><strong>The Unfair Moment:</strong> During a tense, closely fought final match, a controversial line call / scoring error occurs. In the heat of the moment, Prabhat notices that the point should have rightfully gone to his rival, or deliberately bends the scoreline. The referee, unaware of the subtle touch, awards the decisive winning point to Prabhat.</li>
      <li><strong>The Hollow Victory:</strong> Amid wild applause from the crowd, Prabhat is awarded the glistening winner's trophy. However, when he holds the cup, he feels no joy. Looking at his defeated, dignified rival, Prabhat is overwhelmed by a heavy, suffocating wave of guilt and shame. Every cheer feels like a mock.</li>
      <li><strong>The Moral Turning Point ("Change of Heart"):</strong>
        <ul>
          <li>Unable to sleep that night, Prabhat looks into the mirror and realizes that a trophy won by cheating is an eternal badge of cowardice.</li>
          <li>The next morning at the school assembly, Prabhat takes the microphone before the principal, coach, and students. He honestly confesses his wrongdoing, apologizes to his rival, and hands over the championship cup to the rightful winner.</li>
        </ul>
      </li>
      <li><strong>The True Meaning of Sportsmanship:</strong> The principal and students applaud Prabhat not for a game won, but for his immense moral bravery. True victory does not reside in silver cups; it resides in an unblemished conscience.</li>
    </ul>
  </div>

  <!-- SVG Diagram: The Moral Transformation of Prabhat -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 210" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Prabhat's Moral Arc: From Hollow Glory to True Honor</text>
      <!-- Stage 1 -->
      <rect x="20" y="45" width="115" height="135" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8"/>
      <text x="77" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#b91c1c" text-anchor="middle">1. The Cheat</text>
      <text x="77" y="92" font-family="system-ui, sans-serif" font-size="8.5" fill="#7f1d1d" text-anchor="middle">Obsessed with</text>
      <text x="77" y="110" font-family="system-ui, sans-serif" font-size="8.5" fill="#7f1d1d" text-anchor="middle">winning trophy.</text>
      <text x="77" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#7f1d1d" text-anchor="middle">Exploits unfair call.</text>
      <text x="77" y="155" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#dc2626" text-anchor="middle">Blind Ambition</text>

      <line x1="135" y1="112" x2="155" y2="112" stroke="#64748b" stroke-width="2"/>

      <!-- Stage 2 -->
      <rect x="155" y="45" width="115" height="135" rx="6" fill="#fff7ed" stroke="#f97316" stroke-width="1.8"/>
      <text x="212" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#c2410c" text-anchor="middle">2. Hollow Prize</text>
      <text x="212" y="92" font-family="system-ui, sans-serif" font-size="8.5" fill="#9a3412" text-anchor="middle">Crowd cheers,</text>
      <text x="212" y="110" font-family="system-ui, sans-serif" font-size="8.5" fill="#9a3412" text-anchor="middle">but heart feels</text>
      <text x="212" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#9a3412" text-anchor="middle">suffocated by guilt.</text>
      <text x="212" y="155" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#ea580c" text-anchor="middle">Guilt &amp; Regret</text>

      <line x1="270" y1="112" x2="290" y2="112" stroke="#64748b" stroke-width="2"/>

      <!-- Stage 3 -->
      <rect x="290" y="45" width="115" height="135" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
      <text x="347" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#92400e" text-anchor="middle">3. Change of Heart</text>
      <text x="347" y="92" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">Conscience awakens.</text>
      <text x="347" y="110" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">Refuses to live</text>
      <text x="347" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#78350f" text-anchor="middle">a lie of victory.</text>
      <text x="347" y="155" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#d97706" text-anchor="middle">Courage Awakens</text>

      <line x1="405" y1="112" x2="425" y2="112" stroke="#64748b" stroke-width="2"/>

      <!-- Stage 4 -->
      <rect x="425" y="45" width="115" height="135" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
      <text x="482" y="70" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#15803d" text-anchor="middle">4. True Honor</text>
      <text x="482" y="92" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">Confesses publicly.</text>
      <text x="482" y="110" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">Hands cup to rival.</text>
      <text x="482" y="128" font-family="system-ui, sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">Gains self-respect.</text>
      <text x="482" y="155" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#16a34a" text-anchor="middle">Real Victory</text>
    </svg>
    <p style="font-size: 11px; color: #64748b; margin-top: 6px;">Figure 10.1: Prabhat’s transition from dishonest triumph to the redemption of sportsmanship.</p>
  </div>

  <div class="ex-div">
    <div class="ex-heading">NCERT Textbook Comprehension &amp; Values Analysis</div>

    ${qCard(
      'c6eng-ch10-q1',
      'Q1',
      'Why was Prabhat Unhappy After Winning?',
      'Short',
      'Why was Prabhat unable to celebrate or enjoy his victory even though the crowd cheered for him?',
      `<p class="step"><strong>The Cause of Prabhat’s Inner Torment:</strong></p>
      <p>Prabhat could not celebrate because he knew deep inside that he was not the rightful winner. He had allowed an unfair error to stand without correcting it. His conscience revolted against the deception, making every cheer feel hollow, painful, and like an accusation.</p>`,
      '2 marks: 1 mark for knowing he did not earn the win fairly + 1 mark for burden of guilt and conscience.'
    )}

    ${qCard(
      'c6eng-ch10-q2',
      'Q2',
      'The Public Confession',
      'Describe',
      'Describe the scene at the school assembly the next morning. What did Prabhat do and say?',
      `<p class="step"><strong>1. The Assembly Speech:</strong></p>
      <p>Before the entire school, principal, and sports coaches, Prabhat walked up to the podium holding the championship trophy. With a steady voice, he confessed that during the final moments of the game, a critical point was mistakenly awarded to him when it rightfully belonged to his opponent.</p>
      <p class="step"><strong>2. Handing Over the Trophy:</strong></p>
      <p>He apologized sincerely to his rival, stepped down, and handed the cup to him with genuine respect, declaring that winning dishonestly is far worse than losing fairly.</p>
      <p class="step"><strong>3. The School’s Reaction:</strong></p>
      <p>Instead of punishing him, the principal praised his exceptional moral integrity, and the entire assembly gave him a standing ovation for showing the true spirit of sportsmanship.</p>`,
      '4 marks: 1.5 marks for stepping up at assembly and confessing + 1.5 marks for handing trophy to rival + 1 mark for principal and crowd praise.'
    )}

    ${qCard(
      'c6eng-ch10-q3',
      'Q3',
      'What is True Sportsmanship?',
      'Value-Based',
      'What does this story teach us about the difference between winning a game and being a true sportsman?',
      `<p class="step"><strong>The True Essence of Sportsmanship:</strong></p>
      <ul class="step-list">
        <li>Sports are not merely about scoring points or collecting metal trophies; they are a training ground for life character.</li>
        <li>A true sportsman respects the rules, honors opponents, admits errors, and values honesty above any medal.</li>
        <li>Losing with honor builds resilience and dignity, while winning by deceit destroys self-respect. Prabhat proved that the greatest triumph is conquering one\'s own ego.</li>
      </ul>`,
      '3 marks: 1.5 marks for distinguishing medals from character + 1.5 marks for defining true sportsmanship (respect for rules and honesty).'
    )}
  </div>
</section>
`;

// Write Chapters 6 to 10
fs.writeFileSync(path.join(outDir, 'ch6.html'), ch6.trim(), 'utf8');
console.log('Successfully generated ch6.html');

fs.writeFileSync(path.join(outDir, 'ch7.html'), ch7.trim(), 'utf8');
console.log('Successfully generated ch7.html');

fs.writeFileSync(path.join(outDir, 'ch8.html'), ch8.trim(), 'utf8');
console.log('Successfully generated ch8.html');

fs.writeFileSync(path.join(outDir, 'ch9.html'), ch9.trim(), 'utf8');
console.log('Successfully generated ch9.html');

fs.writeFileSync(path.join(outDir, 'ch10.html'), ch10.trim(), 'utf8');
console.log('Successfully generated ch10.html');
