// scripts/expand-c6eng-part2.js
// Expands Chapters 6 to 15 of Class 6 English (Poorvi)
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6eng');

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

function appendQuestionsToChapter(chNum, newQuestionsHtml) {
  const filePath = path.join(dir, `ch${chNum}.html`);
  if (!fs.existsSync(filePath)) {
    console.error(`File missing: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  const insertIndex = content.lastIndexOf('</section>');
  if (insertIndex === -1) {
    console.error(`Could not find </section> in ${filePath}`);
    return;
  }
  const updatedContent = content.slice(0, insertIndex) + '\n' + newQuestionsHtml + '\n' + content.slice(insertIndex);
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log(`Successfully expanded ch${chNum}.html`);
}

// Ch 6: The Chair
const ch6Extra = `
  ${qCard('c6eng-ch6-q5', 'Q5', 'Vocabulary: Antonyms & Relationship Verbs', 'Vocabulary',
    'Find suitable antonyms for the following words from "The Chair":<br>(a) Genuine &nbsp;&nbsp; (b) Invisible &nbsp;&nbsp; (c) Boastful &nbsp;&nbsp; (d) Loyal',
    `<p class="step"><strong>Antonyms:</strong></p>
    <ul class="step-list">
      <li>(a) <strong>Genuine:</strong> Fake / Artificial / Insincere</li>
      <li>(b) <strong>Invisible:</strong> Visible / Conspicuous / Apparent</li>
      <li>(c) <strong>Boastful:</strong> Humble / Modest</li>
      <li>(d) <strong>Loyal:</strong> Treacherous / Disloyal / Untrustworthy</li>
    </ul>`,
    '2 marks: 0.5 mark each.'
  )}

  ${qCard('c6eng-ch6-q6', 'Q6', 'Grammar: Active and Passive Voice', 'Grammar',
    'Convert the following sentences from active to passive voice:<br>(a) Mario invited all his classmates to test the magic chair.<br>(b) His grandfather crafted a remarkable illusion.',
    `<p class="step"><strong>Passive Voice:</strong></p>
    <ul class="step-list">
      <li>(a) All his classmates <strong>were invited</strong> by Mario to test the magic chair.</li>
      <li>(b) A remarkable illusion <strong>was crafted</strong> by his grandfather.</li>
    </ul>`,
    '2 marks: 1 mark each.'
  )}

  ${qCard('c6eng-ch6-q7', 'Q7', 'Writing: Notice Writing', 'Writing',
    'You are the Secretary of the School Moral Science Club. Draft a notice (50 words) announcing a storytelling session based on the theme "True Friends vs Fair-Weather Companions".',
    `<div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:12px;">
      <strong>ST. MARK’S MIDDLE SCHOOL</strong><br>
      <strong>NOTICE: STORYTELLING CIRCLE</strong><br>
      <em>Date: 28th October 2026</em><br>
      All students of Class 6 are invited to attend an inspiring storytelling session on <strong>"True Friends vs Fair-Weather Companions"</strong> on Friday, 31st October at 2:00 PM in the School Auditorium. Join us to explore exciting fables and interactive group discussions.<br>
      <em>Ananya Sharma, Secretary</em>
    </div>`,
    '3 marks: 1 mark format + 1.5 marks content + 0.5 mark accuracy.'
  )}
`;

// Ch 7: Neem Baba
const ch7Extra = `
  ${qCard('c6eng-ch7-q4', 'Q4', 'Science in Literature: The Pharmacy of Nature', 'Comprehension',
    'Why is Neem Baba referred to as "The Green Pharmacy" of the Indian subcontinent? Mention four distinct medicinal benefits described in the lesson.',
    `<p class="step"><strong>Neem as the Village Pharmacy:</strong></p>
    <ul class="step-list">
      <li><strong>1. Twigs (Datun):</strong> Used as traditional organic toothbrushes for oral hygiene and preventing gum infections.</li>
      <li><strong>2. Leaves:</strong> Placed in stored grains to repel pests, and boiled in bath water to cure skin ailments.</li>
      <li><strong>3. Oil:</strong> Extracted from seeds, acting as an effective natural antiseptic, antifungal, and insect repellent.</li>
      <li><strong>4. Air Purification:</strong> Transpires oxygen generously and releases phytochemicals that naturally disinfect the surrounding atmosphere.</li>
    </ul>`,
    '3 marks: 1 mark context + 2 marks four verified benefits.'
  )}

  ${qCard('c6eng-ch7-q5', 'Q5', 'Grammar: Prefixes and Word Formation', 'Grammar',
    'Add appropriate prefixes (un-, in-, dis-, re-) to form new words and use any two in sentences:<br>(a) infect &nbsp;&nbsp; (b) mature &nbsp;&nbsp; (c) pure &nbsp;&nbsp; (d) plant',
    `<p class="step"><strong>Formed Words:</strong></p>
    <ul class="step-list">
      <li>(a) infect $\\to$ <strong>disinfect</strong> (to cleanse of disease-causing microbes)</li>
      <li>(b) mature $\\to$ <strong>immature</strong> (not fully developed)</li>
      <li>(c) pure $\\to$ <strong>impure</strong> (contaminated)</li>
      <li>(d) plant $\\to$ <strong>replant</strong> (to plant again in a new site)</li>
    </ul>
    <p><em>Sentences:</em> (1) Boiled neem water is used to <strong>disinfect</strong> wounds. (2) Farmers decided to <strong>replant</strong> shade trees along the canal.</p>`,
    '2 marks: 1 mark prefixes + 1 mark sentences.'
  )}

  ${qCard('c6eng-ch7-q6', 'Q6', 'Creative Writing: Tree Conservation Slogan', 'Writing',
    'Create two catchy rhyming slogans to inspire young citizens to protect ancient native trees like Neem, Peepal, and Banyan.',
    `<div style="background:#ecfdf5; border-left:4px solid #059669; padding:10px; font-weight:700;">
      1. "Plant a Neem, clean the breeze; heal the Earth with ancient trees!"<br>
      2. "Care for branches, shade and root; nature will yield the sweetest fruit!"
    </div>`,
    '2 marks: 1 mark each.'
  )}
`;

// Ch 8: What a Bird Thought
const ch8Extra = `
  ${qCard('c6eng-ch8-q4', 'Q4', 'Poetic Progression: The 4 Stages of the World', 'Poetry',
    'Trace the four successive stages through which the baby bird discovers the world in Lydia Maria Child\'s poem.',
    `<p class="step"><strong>Four Stages of Perception:</strong></p>
    <ol class="step-list">
      <li><strong>Stage 1 (The Egg Shell):</strong> The bird believes the world is small, round, and made of pale-blue shell.</li>
      <li><strong>Stage 2 (The Nest):</strong> The bird discovers its snug nest woven of straw and believes the entire universe is made of straw, warmed by its mother.</li>
      <li><strong>Stage 3 (The Tree):</strong> Sitting on a branch, the fledgling sees fluttering green foliage and assumes the world is made solely of green leaves.</li>
      <li><strong>Stage 4 (The Open Sky):</strong> Flying free into the boundless azure expanse, the bird marvels at the infinite sky and wonders what the universe is truly made of.</li>
    </ol>`,
    '4 marks: 1 mark per stage accurately explained.'
  )}

  ${qCard('c6eng-ch8-q5', 'Q5', 'Poetic Devices: Metaphorical Meaning', 'Poetry',
    'How does the bird’s journey in the poem symbolize human intellectual growth and education?',
    `<p class="step"><strong>Symbolic Reflection:</strong></p>
    <p>The baby bird\'s growing awareness is a profound metaphor for human learning. As children, our world is confined to the immediate family home (the shell). As we grow, school expands our horizon to friends and books (the nest and leaves). Finally, education and travel set our minds free into the vast world of scientific knowledge and philosophy (the open sky), teaching us humility in the face of nature\'s infinite mysteries.</p>`,
    '3 marks: 1.5 marks metaphor + 1.5 marks human intellectual development analogy.'
  )}
`;

// Ch 9: Spices that Heal Us
const ch9Extra = `
  ${qCard('c6eng-ch9-q4', 'Q4', 'Informational Comprehension: Healing Spices', 'Comprehension',
    'Complete the table matching each spice with its traditional healing action:<br>(a) Turmeric (Haldi) &nbsp;&nbsp; (b) Ginger (Adrak) &nbsp;&nbsp; (c) Clove (Laung) &nbsp;&nbsp; (d) Black Pepper (Kali Mirch)',
    `<p class="step"><strong>Healing Actions:</strong></p>
    <ul class="step-list">
      <li><strong>(a) Turmeric (Haldi):</strong> Powerful natural antiseptic, anti-inflammatory; applied to cuts and bruises to accelerate healing.</li>
      <li><strong>(b) Ginger (Adrak):</strong> Relieves throat irritation, nausea, digestive gas, and respiratory congestion.</li>
      <li><strong>(c) Clove (Laung):</strong> Relieves severe toothaches and gum swelling due to eugenol anesthetic properties.</li>
      <li><strong>(d) Black Pepper (Kali Mirch):</strong> Clears blocked sinuses, boosts metabolism, and enhances nutrient absorption.</li>
    </ul>`,
    '2 marks: 0.5 mark each.'
  )}

  ${qCard('c6eng-ch9-q5', 'Q5', 'Grammar: Modals of Advice (Should / Must / Can)', 'Grammar',
    'Fill in the blanks with appropriate modal verbs:<br>(a) You ______ gargle with warm salt water and turmeric when you have a sore throat.<br>(b) One ______ never ignore severe tooth decay.<br>(c) Spices ______ add aroma and therapeutic nutrients to our food.',
    `<p class="step"><strong>Correct Modals:</strong></p>
    <ul class="step-list">
      <li>(a) You <strong>should</strong> gargle with warm salt water and turmeric when you have a sore throat.</li>
      <li>(b) One <strong>must</strong> never ignore severe tooth decay.</li>
      <li>(c) Spices <strong>can</strong> add aroma and therapeutic nutrients to our food.</li>
    </ul>`,
    '3 marks: 1 mark each.'
  )}
`;

// Ch 10: Change of Heart
const ch10Extra = `
  ${qCard('c6eng-ch10-q4', 'Q4', 'Character Study: Moral Conflict of Prabhat', 'Comprehension',
    'Describe the psychological conflict Prabhat experienced during the inter-school relay final. What led to his "change of heart"?',
    `<p class="step"><strong>Prabhat\'s Inner Conflict &amp; Redemption:</strong></p>
    <p>Prabhat was desperate to win the inter-school championship trophy for his team. In the heat of the race, he accidentally tripped a rival runner near the baton exchange corner. Although the referee did not spot the foul and awarded the gold medal to Prabhat\'s team, his conscience gave him no peace. Seeing the tears of the rival athlete, Prabhat experienced deep shame. His true sportsmanship triumphed over false glory: he walked up to the chief referee, confessed his foul, and handed over the trophy to the deserving team, winning true moral respect.</p>`,
    '3 marks: 1.5 marks inner conflict + 1.5 marks confession and moral victory.'
  )}

  ${qCard('c6eng-ch10-q5', 'Q5', 'Grammar: Conditional Sentences', 'Grammar',
    'Complete the following conditional sentences expressing sportsmanship ethics:<br>(a) If an athlete cheats to win, ______<br>(b) If you practice with discipline every day, ______',
    `<p class="step"><strong>Completed Sentences:</strong></p>
    <ul class="step-list">
      <li>(a) If an athlete cheats to win, <strong>he loses his self-respect and the true spirit of sportsmanship</strong>.</li>
      <li>(b) If you practice with discipline every day, <strong>you will steadily build stamina and excel in competitions</strong>.</li>
    </ul>`,
    '2 marks: 1 mark each.'
  )}
`;

// Ch 11: The Winner
const ch11Extra = `
  ${qCard('c6eng-ch11-q3', 'Q3', 'Poetic Interpretation: "The Resilient Spirit"', 'Poetry',
    'Explain the significance of the inspirational stanza: "The winner is not the one who never fails, but the one who never quits."',
    `<p class="step"><strong>Meaning &amp; Philosophy:</strong></p>
    <p>Failure is an inevitable stepping stone in any human undertaking. True champions are not born without stumbling; their greatness lies in their stubborn resolve to rise every single time they fall. Giving up transforms a temporary stumble into a permanent defeat, whereas persevering turns every mistake into a valuable lesson of strength.</p>`,
    '3 marks: 1.5 marks interpretation + 1.5 marks resilience philosophy.'
  )}

  ${qCard('c6eng-ch11-q4', 'Q4', 'Grammar: Degrees of Comparison', 'Grammar',
    'Provide the comparative and superlative degrees for the following adjectives from the poem:<br>(a) Brave &nbsp;&nbsp; (b) Strong &nbsp;&nbsp; (c) Resilient &nbsp;&nbsp; (d) Tough',
    `<p class="step"><strong>Degrees of Comparison:</strong></p>
    <ul class="step-list">
      <li>(a) Brave $\\to$ <strong>Braver</strong> $\\to$ <strong>Bravest</strong></li>
      <li>(b) Strong $\\to$ <strong>Stronger</strong> $\\to$ <strong>Strongest</strong></li>
      <li>(c) Resilient $\\to$ <strong>More resilient</strong> $\\to$ <strong>Most resilient</strong></li>
      <li>(d) Tough $\\to$ <strong>Tougher</strong> $\\to$ <strong>Toughest</strong></li>
    </ul>`,
    '2 marks: 0.5 mark each.'
  )}
`;

// Ch 12: Yoga — A Way of Life
const ch12Extra = `
  ${qCard('c6eng-ch12-q4', 'Q4', 'Health & Holistic Wellness: The Benefits of Asanas', 'Comprehension',
    'How does regular practice of Yoga differ from ordinary physical gym exercises? Explain three specific physiological and psychological benefits.',
    `<p class="step"><strong>Distinct Benefits of Yoga:</strong></p>
    <ul class="step-list">
      <li><strong>1. Holistic Harmony:</strong> Gym exercises focus primarily on muscle hypertrophy; yoga coordinates bodily flexibility, deep rhythmic breathing, and mental mindfulness.</li>
      <li><strong>2. Nervous System Calming:</strong> Pranayama (breath regulation) stimulates the parasympathetic nervous system, drastically lowering cortisol (stress hormone) levels.</li>
      <li><strong>3. Enhanced Concentration:</strong> Steady postures (Asanas) train the young mind to maintain sustained focus, reducing distraction during academic studies.</li>
    </ul>`,
    '3 marks: 1 mark per benefit clearly distinguished.'
  )}

  ${qCard('c6eng-ch12-q5', 'Q5', 'Grammar: Imperatives in Wellness Instructions', 'Grammar',
    'Write four clear imperative sentences instructing a beginner on how to perform Tadasana (Mountain Pose).',
    `<p class="step"><strong>Imperative Instructions:</strong></p>
    <ul class="step-list">
      <li>1. <strong>Stand</strong> erect with feet slightly apart and arms resting by your sides.</li>
      <li>2. <strong>Inhale</strong> deeply while slowly raising both arms above your head.</li>
      <li>3. <strong>Interlock</strong> your fingers and turn your palms upward toward the ceiling.</li>
      <li>4. <strong>Lift</strong> your heels gently to balance steadily on your toes while looking straight ahead.</li>
    </ul>`,
    '2 marks: 0.5 mark per correct imperative sentence.'
  )}
`;

// Ch 13: Hamara Bharat
const ch13Extra = `
  ${qCard('c6eng-ch13-q3', 'Q3', 'Cultural Heritage: Unity in Diversity', 'Comprehension',
    'What makes India a land of "Unity in Diversity"? Cite three examples from the lesson covering geography, festivals, and architecture.',
    `<p class="step"><strong>Facets of Indian Pluralism:</strong></p>
    <ul class="step-list">
      <li><strong>1. Geography:</strong> From snow-clad Himalayan peaks in the north to tropical ocean coasts in the south, diverse climates foster vibrant local customs.</li>
      <li><strong>2. Festivals:</strong> Harvest celebrations like Pongal, Bihu, Baisakhi, and Makar Sankranti celebrate nature\'s gifts across linguistic boundaries under different names.</li>
      <li><strong>3. Architecture:</strong> The seamless coexistence of ancient rock-cut caves (Ajanta-Ellora), magnificent Hindu temples (Thanjavur), Mughal monuments (Taj Mahal), and colonial structures reflects our composite cultural synthesis.</li>
    </ul>`,
    '3 marks: 1 mark per dimension.'
  )}

  ${qCard('c6eng-ch13-q4', 'Q4', 'Grammar: Articles (A, An, The)', 'Grammar',
    'Fill in the blanks with appropriate articles:<br>(a) India is ______ ancient civilization with ______ rich tapestry of heritage.<br>(b) Taj Mahal is situated on ______ banks of ______ river Yamuna.',
    `<p class="step"><strong>Articles:</strong></p>
    <ul class="step-list">
      <li>(a) India is <strong>an</strong> ancient civilization with <strong>a</strong> rich tapestry of heritage.</li>
      <li>(b) <strong>The</strong> Taj Mahal is situated on <strong>the</strong> banks of <strong>the</strong> river Yamuna.</li>
    </ul>`,
    '2.5 marks: 0.5 mark each.'
  )}
`;

// Ch 14: The Kites
const ch14Extra = `
  ${qCard('c6eng-ch14-q4', 'Q4', 'Poetic Devices: Simile and Movement Verbs', 'Poetry',
    'Identify and explain the simile used in the poem "The Kites" comparing a kite to a ship upon sea waves.',
    `<p class="step"><strong>Analysis of Simile:</strong></p>
    <p>The poet compares the buoyant kite riding the sky winds to a ship sailing over ocean swells: <em>"How bright on the blue is a kite when it\'s new... then soars like a ship with only a sail."</em> Just as a ship dips and crests with ocean tides, the kite dips, dives, and glides triumphantly whenever the breeze picks up.</p>`,
    '3 marks: 1.5 marks citation + 1.5 marks explanation of motion.'
  )}

  ${qCard('c6eng-ch14-q5', 'Q5', 'Competency Case Study: Animal-Friendly Festivities', 'CBQ',
    'While kite flying is a joyful cultural festival, traditional glass-coated synthetic manjha injures thousands of birds. Suggest two ethical steps students can take to ensure bird safety during Makar Sankranti.',
    `<p class="step"><strong>Ethical Kite Flying Practices:</strong></p>
    <ul class="step-list">
      <li><strong>1. Ban Chinese/Glass-Coated Manjha:</strong> Use only traditional biodegradable cotton thread (saddi) that does not entangle or slice avian wings.</li>
      <li><strong>2. Time Restrictions:</strong> Avoid flying kites early in the morning and late at dusk when birds are commuting between roosts and foraging grounds.</li>
    </ul>`,
    '2 marks: 1 mark each.'
  )}
`;

// Ch 15: Ila Sachani
const ch15Extra = `
  ${qCard('c6eng-ch15-q4', 'Q4', 'Biographical Triumph: The Art of Kathiawar Embroidery', 'Comprehension',
    'How did Ila Sachani overcome the paralysis of her arms to become an internationally renowned embroidery artist? What techniques did she invent?',
    `<p class="step"><strong>Triumph of Willpower:</strong></p>
    <p>Born in Surat, Gujarat, with arms that hung limp due to congenital paralysis, Ila Sachani refused to succumb to helplessness. Watching her mother and grandmother embroider exquisite Kathiawari patterns, she determinedly learned to hold the needle between her toes. Through relentless practice, her feet developed precision rivaling skilled hands. She mastered intricate stitches—Kashmiri, Kathiawari, chain stitch, and mirror work—creating stunning fabrics that have been showcased in national exhibitions.</p>`,
    '3 marks: 1.5 marks physical challenge + 1.5 marks artistic mastery.'
  )}

  ${qCard('c6eng-ch15-q5', 'Q5', 'Vocabulary: Textile Craft Terminology', 'Vocabulary',
    'Match the craft terms with their definitions:<br>(a) Motif &nbsp;&nbsp; (b) Embroidery &nbsp;&nbsp; (c) Loom &nbsp;&nbsp; (d) Zari',
    `<p class="step"><strong>Definitions:</strong></p>
    <ul class="step-list">
      <li><strong>(a) Motif:</strong> A recurring decorative design or prominent visual pattern.</li>
      <li><strong>(b) Embroidery:</strong> The craft of decorating fabric with needlework designs using thread or yarn.</li>
      <li><strong>(c) Loom:</strong> An apparatus or machine for weaving fabric from yarn.</li>
      <li><strong>(d) Zari:</strong> Traditional ornamental thread made of fine gold or silver wire used in Indian brocades.</li>
    </ul>`,
    '2 marks: 0.5 mark each.'
  )}

  ${qCard('c6eng-ch15-q6', 'Q6', 'Creative Writing: Inspirational Tribute', 'Writing',
    'Write a short inspirational tribute (60–80 words) honoring Ila Sachani as a role model for youth facing adversity.',
    `<div style="background:#f5f3ff; border:1px solid #c4b5fd; padding:12px; border-radius:6px; font-style:italic;">
      Ila Sachani stands as an eternal beacon of courage and indomitable human spirit. Where others saw insurmountable physical boundaries, she discovered new horizons through her nimble toes and needle. Her stunning embroideries prove that true genius is not held in limbs, but in the fiery determination of the soul. Whenever we face failure or difficulty, Ila\'s story reminds us: "Where there is a will, the human spirit always embroiders miracles."
    </div>`,
    '3 marks: 1 mark vocabulary + 2 marks motivational expression.'
  )}
`;

// Execute appends
appendQuestionsToChapter(6, ch6Extra);
appendQuestionsToChapter(7, ch7Extra);
appendQuestionsToChapter(8, ch8Extra);
appendQuestionsToChapter(9, ch9Extra);
appendQuestionsToChapter(10, ch10Extra);
appendQuestionsToChapter(11, ch11Extra);
appendQuestionsToChapter(12, ch12Extra);
appendQuestionsToChapter(13, ch13Extra);
appendQuestionsToChapter(14, ch14Extra);
appendQuestionsToChapter(15, ch15Extra);

console.log('Successfully completed full expansion of Chapters 6 to 15 for English Poorvi!');
