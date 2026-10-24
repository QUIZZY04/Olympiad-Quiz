// scripts/expand-c6eng-all.js
// Expands all 15 chapters of Class 6 English (Poorvi) to 8-10 questions each
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6eng');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

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
  // Insert before </section>
  const insertIndex = content.lastIndexOf('</section>');
  if (insertIndex === -1) {
    console.error(`Could not find </section> in ${filePath}`);
    return;
  }
  const updatedContent = content.slice(0, insertIndex) + '\n' + newQuestionsHtml + '\n' + content.slice(insertIndex);
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log(`Successfully expanded ch${chNum}.html with additional questions.`);
}

// Chapter 1 additions
const ch1Extra = `
  ${qCard('c6eng-ch1-q6', 'Q6', 'Vocabulary: Contextual Word Meanings', 'Vocabulary',
    'Find words or phrases from the story "A Bottle of Dew" that mean:<br>(a) A person who attempts to turn base metals into gold by magic<br>(b) Tiny drops of water that form on cool surfaces at night<br>(c) Sweat produced by physical exertion<br>(d) Deep practical understanding and sound judgment',
    `<p class="step"><strong>Contextual Word Meanings:</strong></p>
    <ul class="step-list">
      <li><strong>(a) Alchemist:</strong> One who studies or practices alchemy to transform common metals into gold.</li>
      <li><strong>(b) Dew:</strong> Moisture condensed from the atmosphere onto cool surfaces during night.</li>
      <li><strong>(c) Perspiration:</strong> The moisture exuded through the pores of the skin as a result of physical labour or heat.</li>
      <li><strong>(d) Wisdom:</strong> The quality of having experience, knowledge, and sound insight (embodied by Sage Mahipati).</li>
    </ul>`,
    '2 marks: 0.5 mark for each correctly identified word.'
  )}

  ${qCard('c6eng-ch1-q7', 'Q7', 'Grammar: Prepositions of Place and Direction', 'Grammar',
    'Fill in the blanks with appropriate prepositions (in, on, with, through, at):<br>(a) Rama Natha collected dew glistening ______ the banana leaves.<br>(b) Sage Mahipati smiled ______ Rama Natha when he brought the vessel.<br>(c) True wealth is earned ______ years of dedicated labour.<br>(d) Madhumati sold the banana bunches ______ the market.',
    `<p class="step"><strong>Correct Prepositions:</strong></p>
    <ul class="step-list">
      <li>(a) Rama Natha collected dew glistening <strong>on</strong> the banana leaves.</li>
      <li>(b) Sage Mahipati smiled <strong>at</strong> Rama Natha when he brought the vessel.</li>
      <li>(c) True wealth is earned <strong>through</strong> years of dedicated labour.</li>
      <li>(d) Madhumati sold the banana bunches <strong>in</strong> the market.</li>
    </ul>`,
    '2 marks: 0.5 mark for each correct preposition.'
  )}

  ${qCard('c6eng-ch1-q8', 'Q8', 'Creative Writing: Diary Entry of Rama Natha', 'Writing',
    'Imagine you are Rama Natha. Write a diary entry recording your thoughts and feelings on the day Sage Mahipati revealed that your hard work in the banana plantation was the real magic potion (Word limit: 80–100 words).',
    `<p class="step"><strong>Sample Diary Entry:</strong></p>
    <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:14px; font-style:italic;">
      <strong>Date:</strong> 15th November 2026<br>
      <strong>Time:</strong> 9:30 PM<br><br>
      Dear Diary,<br>
      Today has been the most illuminating day of my life. For six long years, I woke before sunrise, tended millions of banana plants, and carefully collected five litres of winter dew, hoping for a magical potion to turn copper into gold. When the sage poured the dew on the copper vessel and nothing happened, my heart shattered. But then, Sage Mahipati opened the storeroom door and showed me heaps of shimmering gold coins earned by Madhumati from our banana crops! He gently said, "Your sweat was the true potion." I realized that honest toil brings lasting abundance. From this day forward, my fields are my temple.
    </div>`,
    '4 marks: 1 mark format + 2 marks expression and relevance + 1 mark grammar and vocabulary.'
  )}
`;

// Chapter 2 additions
const ch2Extra = `
  ${qCard('c6eng-ch2-q5', 'Q5', 'Poetic Devices: Rhyme Scheme and Rhythm', 'Poetry',
    'Analyze the rhyme scheme and auditory effects of the poem "The Raven and the Fox". How does the rhythm mirror the sly flattery of the fox?',
    `<p class="step"><strong>Rhyme Scheme &amp; Rhythm Analysis:</strong></p>
    <ul class="step-list">
      <li><strong>Rhyme Scheme:</strong> The poem follows an <em>AABB</em> / <em>AABBCC</em> rhyming couplet structure (e.g., tree / see, bird / heard, beak / speak).</li>
      <li><strong>Rhythmic Effect:</strong> The regular iambic cadence creates a smooth, musical, and deceptively pleasant melody that mimics the honeyed, manipulative tone of Master Fox as he seduces the vain Raven.</li>
    </ul>`,
    '3 marks: 1 mark for rhyme scheme + 2 marks for auditory analysis of Fox\'s tone.'
  )}

  ${qCard('c6eng-ch2-q6', 'Q6', 'Grammar: Direct to Indirect Speech', 'Grammar',
    'Convert the following dialogue from the poem into indirect speech:<br>The fox said to the raven, "You are a handsome bird! If your voice is as fine as your feathers, you are truly the king of the forest."',
    `<p class="step"><strong>Reported Speech:</strong></p>
    <p>The fox flattered the raven, saying that he was a very handsome bird. He added that if his voice was as fine as his feathers, he was truly the king of the forest.</p>`,
    '2 marks: 1 mark for reporting verb and tense shift + 1 mark for pronoun changes.'
  )}

  ${qCard('c6eng-ch2-q7', 'Q7', 'Competency Case Study: Digital Age Flattery & Scams', 'CBQ',
    'How is the moral of "The Raven and the Fox" relevant to teenagers interacting on modern social media platforms? Explain two practical safety lessons.',
    `<p class="step"><strong>Modern Application of the Fable:</strong></p>
    <ul class="step-list">
      <li><strong>Superficial Online Validation:</strong> Just like the raven was blinded by fake compliments about his feathers, young people often get tricked by exaggerated praise, fake followers, or phishing scams that exploit vanity.</li>
      <li><strong>Safeguarding Personal Assets:</strong> The raven lost his cheese; similarly, trusting flattery from strangers online can lead to loss of private data, passwords, or money. Never drop your guard when showered with unearned praise.</li>
    </ul>`,
    '3 marks: 1.5 marks for modern analogy + 1.5 marks for practical cyber safety rules.'
  )}
`;

// Chapter 3 additions
const ch3Extra = `
  ${qCard('c6eng-ch3-q4', 'Q4', 'Vocabulary: Antonyms & Word Building', 'Vocabulary',
    'Write the antonyms (opposites) of the following words from the chapter:<br>(a) Perilous &nbsp;&nbsp; (b) Panic &nbsp;&nbsp; (c) Despair &nbsp;&nbsp; (d) Hesitant',
    `<p class="step"><strong>Antonyms:</strong></p>
    <ul class="step-list">
      <li>(a) <strong>Perilous:</strong> Safe / Secure / Harmless</li>
      <li>(b) <strong>Panic:</strong> Calm / Composure / Serenity</li>
      <li>(c) <strong>Despair:</strong> Hope / Optimism / Joy</li>
      <li>(d) <strong>Hesitant:</strong> Confident / Resolute / Decisive</li>
    </ul>`,
    '2 marks: 0.5 mark each.'
  )}

  ${qCard('c6eng-ch3-q5', 'Q5', 'Grammar: Identifying Types of Adverbs', 'Grammar',
    'Underline and classify the adverbs in these sentences:<br>(a) Rama rushed <em>swiftly</em> towards the raging river.<br>(b) The villagers searched <em>everywhere</em> for the missing lamb.<br>(c) The rescuer will arrive <em>tomorrow</em>.<br>(d) He spoke <em>very</em> softly to soothe the frightened creature.',
    `<p class="step"><strong>Classification of Adverbs:</strong></p>
    <ul class="step-list">
      <li>(a) <strong>swiftly:</strong> Adverb of Manner (tells how)</li>
      <li>(b) <strong>everywhere:</strong> Adverb of Place (tells where)</li>
      <li>(c) <strong>tomorrow:</strong> Adverb of Time (tells when)</li>
      <li>(d) <strong>very:</strong> Adverb of Degree (modifies softly)</li>
    </ul>`,
    '2 marks: 0.5 mark each.'
  )}

  ${qCard('c6eng-ch3-q6', 'Q6', 'Short Composition: Presence of Mind', 'Writing',
    'Write a short paragraph (80 words) on "Why Presence of Mind is More Valuable than Physical Strength".',
    `<p class="step"><strong>Sample Composition:</strong></p>
    <p>Presence of mind is the ability to think clearly, stay calm, and take effective decisions during unforeseen emergencies. While physical strength can lift heavy burdens, presence of mind enables one to prevent disasters altogether. In times of crisis—such as a fire, an animal attack, or a sudden flood—panicking wastes precious time. A quick-witted person assesses the situation, identifies safe exits, and uses available tools resourcefully. As shown in "Rama to the Rescue," timely wit saves lives where brute force would fail.</p>`,
    '3 marks: 1 mark for coherence + 1 mark for vocabulary + 1 mark for logical argument.'
  )}
`;

// Chapter 4 additions
const ch4Extra = `
  ${qCard('c6eng-ch4-q5', 'Q5', 'Vocabulary: Animal Idioms & Collocations', 'Vocabulary',
    'Explain the meaning of these popular animal idioms and use any two in meaningful sentences:<br>(a) The elephant in the room<br>(b) Barking up the wrong tree<br>(c) Dog-tired',
    `<p class="step"><strong>Idioms &amp; Sentences:</strong></p>
    <ul class="step-list">
      <li><strong>(a) The elephant in the room:</strong> An obvious, major problem that people avoid discussing because it is uncomfortable. <em>Example:</em> High exam stress was the elephant in the room during the family meeting.</li>
      <li><strong>(b) Barking up the wrong tree:</strong> Pursuing a mistaken line of thought or accusing the wrong person. <em>Example:</em> Blaming Ramesh for the broken window was barking up the wrong tree.</li>
      <li><strong>(c) Dog-tired:</strong> Extremely exhausted after strenuous activity. <em>Example:</em> After trekking 15 km, the scouts were dog-tired.</li>
    </ul>`,
    '3 marks: 1 mark per idiom explanation and accurate usage.'
  )}

  ${qCard('c6eng-ch4-q6', 'Q6', 'Grammar: Conjunctions in Complex Sentences', 'Grammar',
    'Join the following pairs of sentences using suitable conjunctions (although, because, so, when):<br>(a) Gajaraj refused to eat. His dear friend Buntee was missing.<br>(b) The mahout was greedy. He sold the puppy to a merchant.<br>(c) The elephant rejoiced. He heard the familiar bark of Buntee.',
    `<p class="step"><strong>Combined Sentences:</strong></p>
    <ul class="step-list">
      <li>(a) Gajaraj refused to eat <strong>because</strong> his dear friend Buntee was missing.</li>
      <li>(b) <strong>Because</strong> the mahout was greedy, <strong>he sold</strong> the puppy to a merchant (or: The mahout was greedy, <strong>so</strong> he sold the puppy).</li>
      <li>(c) The elephant rejoiced <strong>when</strong> he heard the familiar bark of Buntee.</li>
    </ul>`,
    '3 marks: 1 mark each.'
  )}
`;

// Chapter 5 additions
const ch5Extra = `
  ${qCard('c6eng-ch5-q4', 'Q4', 'Poetry Appreciation: Tone and Theme', 'Poetry',
    'What is the tone of the poem "A Friend’s Prayer"? What noble wish does the speaker express for their friend?',
    `<p class="step"><strong>Tone &amp; Core Wish:</strong></p>
    <ul class="step-list">
      <li><strong>Tone:</strong> The tone is deeply heartfelt, prayerful, unselfish, and full of tender empathy.</li>
      <li><strong>Core Wish:</strong> The speaker does not pray for gold or personal glory; rather, they pray that their friend may always have courage in difficulty, laughter to soothe heartaches, and a loyal hand to hold when shadows lengthen. It highlights friendship as a sacred, protective bond.</li>
    </ul>`,
    '3 marks: 1.5 marks for tone identification + 1.5 marks for core prayer themes.'
  )}

  ${qCard('c6eng-ch5-q5', 'Q5', 'Creative Expression: 4-Line Stanza', 'Writing',
    'Write an original 4-line rhyming stanza on the beauty of having a true friend.',
    `<div style="background:#f1f5f9; padding:12px; border-left:4px solid #7c3aed; font-style:italic;">
      When stormy skies are dark and grey,<br>
      A loyal friend will light the way;<br>
      They share your grief and cheer your smile,<br>
      And walk with you through every mile.
    </div>`,
    '2 marks: 1 mark for rhyme scheme (AABB) + 1 mark for relevant sentiment.'
  )}
`;

// Execute appends
appendQuestionsToChapter(1, ch1Extra);
appendQuestionsToChapter(2, ch2Extra);
appendQuestionsToChapter(3, ch3Extra);
appendQuestionsToChapter(4, ch4Extra);
appendQuestionsToChapter(5, ch5Extra);

console.log('Finished expanding Chapters 1 to 5 of English Poorvi!');
