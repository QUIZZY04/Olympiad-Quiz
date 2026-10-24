// scripts/expand-c6eng-part3.js
// Boosts English Poorvi chapters to ensure every chapter has 7 to 8+ questions
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
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  const insertIndex = content.lastIndexOf('</section>');
  if (insertIndex === -1) return;
  const updatedContent = content.slice(0, insertIndex) + '\n' + newQuestionsHtml + '\n' + content.slice(insertIndex);
  fs.writeFileSync(filePath, updatedContent, 'utf8');
}

// Ch 3
appendQuestionsToChapter(3, `
  ${qCard('c6eng-ch3-q7', 'Q7', 'Critical Thinking: Animal Empathy & Care', 'CBQ',
    'How does Rama\'s courageous intervention demonstrate animal empathy? Explain why kindness towards animals is essential in society.',
    '<p>Rama risks his own safety to protect a helpless lamb from a wild predator. His action proves that empathy must extend to all living creatures. Compassion towards domestic and wild animals maintains ecological harmony, teaches children gentleness, and reflects a civilized community.</p>',
    '2.5 marks: 1 mark story reference + 1.5 marks ethical reflection.'
  )}
  ${qCard('c6eng-ch3-q8', 'Q8', 'Grammar: Direct and Indirect Objects', 'Grammar',
    'Identify the direct object (DO) and indirect object (IO) in: "Rama gave the shivering puppy some warm milk."',
    '<p><strong>Analysis:</strong><br>- Verb: gave<br>- Direct Object (what was given): <strong>some warm milk</strong><br>- Indirect Object (to whom was it given): <strong>the shivering puppy</strong></p>',
    '2 marks: 1 mark for each correctly identified object.'
  )}
`);

// Ch 4
appendQuestionsToChapter(4, `
  ${qCard('c6eng-ch4-q7', 'Q7', 'Comprehension: Emotional Bonds in Nature', 'Comprehension',
    'Describe the emotional reaction of Gajaraj when the stray dog Buntee was taken away by the merchant.',
    '<p>When Buntee was separated from him, Gajaraj became inconsolable. He refused to eat tasty sugarcane, shed continuous tears, and stood listless in his stable. His grief proves that animals experience deep emotional attachment and grief over separation from loved companions.</p>',
    '2 marks: 1 mark behavioral symptoms + 1 mark emotional inference.'
  )}
  ${qCard('c6eng-ch4-q8', 'Q8', 'Creative Writing: Dialogue Writing', 'Writing',
    'Write a short dialogue (4 exchanges) between the King and the Mahout when the King discovers why the royal elephant stopped eating.',
    '<p><strong>King:</strong> Mahout, why does our proud Gajaraj stand weeping and refuse royal feed?<br><strong>Mahout:</strong> (Trembling) Your Majesty, his stray dog companion was given away.<br><strong>King:</strong> Foolish man! Did you not see their bond? Proclaim a royal reward and fetch that dog immediately!<br><strong>Mahout:</strong> At once, Your Highness! I shall bring Buntee back before sunset.</p>',
    '3 marks: 1 mark format + 2 marks dramatic relevance.'
  )}
`);

// Ch 5
appendQuestionsToChapter(5, `
  ${qCard('c6eng-ch5-q6', 'Q6', 'Poetic Devices: Metaphors in Friendship', 'Poetry',
    'Explain the metaphor in: "May your heart be a garden where sweet flowers bloom."',
    '<p>The poet compares a kind heart to a blooming flower garden. Just as flowers radiate fragrance, color, and joy to everyone who passes by, a loving heart naturally spreads positivity, compassion, and comforting words to grieving friends.</p>',
    '2 marks: 1 mark comparison + 1 mark interpretation.'
  )}
  ${qCard('c6eng-ch5-q7', 'Q7', 'Grammar: Abstract Nouns in Poetry', 'Grammar',
    'Identify four abstract nouns in "A Friend’s Prayer" (e.g. Joy, Peace, Friendship, Courage) and use any two in sentences.',
    '<p><strong>Abstract Nouns:</strong> Friendship, Courage, Comfort, Faith.<br><em>Sentences:</em> (1) True <strong>friendship</strong> endures through times of adversity. (2) She displayed remarkable <strong>courage</strong> during the crisis.</p>',
    '2 marks: 1 mark identification + 1 mark sentences.'
  )}
`);

// Ch 7
appendQuestionsToChapter(7, `
  ${qCard('c6eng-ch7-q7', 'Q7', 'Environmental Awareness: Medicinal Flora', 'CBQ',
    'How do traditional Indian trees like Neem contribute to climate resilience and public health?',
    '<p>Neem trees tolerate arid soils, withstand severe droughts, and act as natural windbreakers against soil erosion. Their constant transpiration cools ambient microclimates, while their natural pesticide compounds protect crops without poisonous chemical residues.</p>',
    '2.5 marks: 1.5 marks climate + 1 mark public health.'
  )}
  ${qCard('c6eng-ch7-q8', 'Q8', 'Grammar: Adjectives of Quality', 'Grammar',
    'Form adjectives from the following nouns: (a) Medicine &nbsp;&nbsp; (b) Nature &nbsp;&nbsp; (c) Shade &nbsp;&nbsp; (d) Benefit',
    '<p>(a) Medicine $\\to$ <strong>Medicinal</strong><br>(b) Nature $\\to$ <strong>Natural</strong><br>(c) Shade $\\to$ <strong>Shady</strong><br>(d) Benefit $\\to$ <strong>Beneficial</strong></p>',
    '2 marks: 0.5 mark each.'
  )}
`);

// Ch 8
appendQuestionsToChapter(8, `
  ${qCard('c6eng-ch8-q6', 'Q6', 'Reading Comprehension: The Fledgling\'s Awakening', 'Comprehension',
    'Why did the bird feel puzzled upon stepping outside the leaves of the tree?',
    '<p>The young bird had previously thought the world ended where the green boughs ended. Stepping outside, it suddenly encountered the endless blue sky with no visible ceiling or boundaries, realizing how tiny its former perspective had been.</p>',
    '2 marks: 1 mark earlier belief + 1 mark realization of expanse.'
  )}
  ${qCard('c6eng-ch8-q7', 'Q7', 'Creative Writing: Narrative Continuation', 'Writing',
    'Write a 3-sentence continuation of the bird\'s thought as it migrates over rivers and mountains.',
    '<p>"I soared higher over sparkling rivers and saw that the world was neither straw nor leaves, but an endless canvas of mountains, waters, and clouds. My wings grew stronger with every breeze, and my heart sang with the freedom of the infinite horizon."</p>',
    '2 marks: descriptive continuity.'
  )}
`);

// Ch 9
appendQuestionsToChapter(9, `
  ${qCard('c6eng-ch9-q6', 'Q6', 'Cultural Gastronomy: Spice Route Heritage', 'Comprehension',
    'Why was India historically known as the "Spice Capital of the World"? Which ancient ports were famous for spice trade?',
    '<p>India\'s tropical climate, particularly along the Malabar Coast of Kerala, nurtured prized spices like black pepper ("black gold"), cardamom, and cinnamon. Ancient Roman, Arab, and Phoenician merchants sailed to historic ports like Muziris and Calicut to trade gold for Indian spices.</p>',
    '2.5 marks: 1.5 marks spice fame + 1 mark historical ports.'
  )}
  ${qCard('c6eng-ch9-q7', 'Q7', 'Writing: Descriptive Recipe Card', 'Writing',
    'Draft a 4-step home recipe for "Digestive Ginger-Mint Lemonade".',
    '<p>1. Crush a 1-inch piece of fresh ginger and 6 mint leaves in a mortar.<br>2. Squeeze the juice of one fresh lemon into a glass of cool water.<br>3. Add the crushed herbs, a pinch of black salt, and a teaspoon of honey.<br>4. Stir thoroughly and strain for a soothing digestive beverage.</p>',
    '2.5 marks: step-by-step clarity.'
  )}
`);

// Ch 10
appendQuestionsToChapter(10, `
  ${qCard('c6eng-ch10-q6', 'Q6', 'Sports Psychology: The Value of Integrity', 'CBQ',
    'Why is winning with dishonesty considered worse than losing with dignity in sports competitions?',
    '<p>Dishonest victory destroys the athlete\'s inner peace, erodes self-worth, and poisons the trust between competitors. A trophy won unfairly is a hollow reminder of deceit. Conversely, losing with dignity highlights honest effort, identifies areas for growth, and earns the enduring respect of peers.</p>',
    '3 marks: 1.5 marks ethical cost of cheating + 1.5 marks value of honorable effort.'
  )}
  ${qCard('c6eng-ch10-q7', 'Q7', 'Writing: Letter of Apology', 'Writing',
    'Draft Prabhat\'s formal letter of apology to the rival school team captain (60 words).',
    '<p>Dear Captain,<br>I sincerely apologize for the accidental foul during the relay race. In my blind eagerness to win, I failed to respect your space. Our team cannot accept an unearned medal. I have handed the trophy over to the judges to be rightfully awarded to your school. I hope we can run together again in true sporting spirit.<br>Yours sincerely,<br>Prabhat</p>',
    '3 marks: format, sincerity, and appropriate sports ethics.'
  )}
`);

// Ch 11
appendQuestionsToChapter(11, `
  ${qCard('c6eng-ch11-q5', 'Q5', 'Poetic Devices: Alliteration & Metaphor', 'Poetry',
    'Locate examples of alliteration in "The Winner" and explain their musical effect.',
    '<p>Examples like <em>"battle of belief"</em> and <em>"stumble and stand"</em> use repetition of initial consonant sounds (/b/ and /s/). This creates a driving, rhythmic momentum that inspires determination and mirrors the heartbeat of a runner pushing through fatigue.</p>',
    '2 marks: 1 mark citation + 1 mark auditory effect.'
  )}
  ${qCard('c6eng-ch11-q6', 'Q6', 'Creative Writing: Personal Resilience Reflection', 'Writing',
    'Describe a moment in your school life when you faced failure and decided not to quit (50 words).',
    '<p>When I failed to qualify for the district debate team in grade 5, I felt utterly devastated. Instead of giving up, I spent months reading newspapers aloud and practicing speech delivery in front of the mirror. The following year, I won the first prize in the inter-school championship.</p>',
    '2 marks: personal connection.'
  )}
`);

// Ch 12
appendQuestionsToChapter(12, `
  ${qCard('c6eng-ch12-q6', 'Q6', 'Global Wellness: International Day of Yoga', 'Comprehension',
    'When is the International Day of Yoga celebrated worldwide, and what is its global objective?',
    '<p>International Day of Yoga is celebrated annually on <strong>21st June</strong> (the summer solstice). Proposed by India at the United Nations General Assembly in 2014, its objective is to raise global awareness about the multifaceted health benefits of yoga in uniting physical health, mental calm, and peace.</p>',
    '2 marks: 1 mark date + 1 mark objective.'
  )}
  ${qCard('c6eng-ch12-q7', 'Q7', 'Grammar: Subject-Verb Agreement', 'Grammar',
    'Choose the correct verb in parentheses:<br>(a) Regular practice of asanas (improve / improves) flexibility.<br>(b) Neither stress nor anxiety (has / have) power over a calm mind.',
    '<p>(a) Regular practice of asanas <strong>improves</strong> flexibility. (Subject is "practice", singular)<br>(b) Neither stress nor anxiety <strong>has</strong> power over a calm mind. (Singular subjects connected by nor take singular verb)</p>',
    '2 marks: 1 mark each.'
  )}
`);

// Ch 13
appendQuestionsToChapter(13, `
  ${qCard('c6eng-ch13-q5', 'Q5', 'Cultural Landmarks: The Classical Dance Traditions', 'Comprehension',
    'Name four classical dance traditions of India and mention their states of origin.',
    '<p>1. <strong>Bharatanatyam:</strong> Tamil Nadu<br>2. <strong>Kathak:</strong> Uttar Pradesh (Northern India)<br>3. <strong>Kathakali:</strong> Kerala<br>4. <strong>Odissi:</strong> Odisha</p>',
    '2 marks: 0.5 mark each.'
  )}
  ${qCard('c6eng-ch13-q6', 'Q6', 'Writing: Heritage Travel Brochure Blurb', 'Writing',
    'Write a 4-line promotional blurb inviting tourists to visit the majestic hill forts of Rajasthan.',
    '<p>"Step into the golden sands of Rajasthan where majestic hill forts whisper tales of valor and royal romance. Gaze at delicate jharokhas, listen to haunting folk ballads, and experience timeless Indian hospitality under a canopy of desert stars!"</p>',
    '2 marks: evocative imagery.'
  )}
`);

// Ch 14
appendQuestionsToChapter(14, `
  ${qCard('c6eng-ch14-q6', 'Q6', 'Poetry: Contrast between High and Low', 'Poetry',
    'How does the poet contrast the kite flying gloriously in the wind with the same kite caught in a tree branch?',
    '<p>In the open sky, the kite is a vibrant, triumphant creature dancing on breezes like a spirited ship on ocean waves. But once its string snags on a tree branch, it becomes a pathetic, fluttering rag—powerless, stripped of wind, and flapping helplessly until shredded.</p>',
    '2.5 marks: 1.5 marks contrasting imagery + 1 mark thematic takeaway.'
  )}
  ${qCard('c6eng-ch14-q7', 'Q7', 'Grammar: Onomatopoeic Words', 'Grammar',
    'Identify the sound words (onomatopoeia) in the poem: (a) Snap &nbsp;&nbsp; (b) Flap. Use them in sentences describing nature sounds.',
    '<p>(a) <strong>Snap:</strong> The dry twig broke with a sharp <em>snap</em> under the tiger\'s paw.<br>(b) <strong>Flap:</strong> We heard the rhythmic <em>flap</em> of migrating geese wings overhead.</p>',
    '2 marks: 1 mark each.'
  )}
`);

// Ch 15
appendQuestionsToChapter(15, `
  ${qCard('c6eng-ch15-q7', 'Q7', 'Social Awareness: Assistive Technology and Inclusion', 'CBQ',
    'How does Ila Sachani\'s life encourage modern society to create accessible and inclusive public spaces for persons with disabilities?',
    '<p>Ila\'s extraordinary embroidery proves that physical disability does not mean lack of ability. Society must provide ramp access, assistive digital tools, specialized vocational education, and market linkages so differently-abled citizens can showcase their talents with independence and dignity.</p>',
    '3 marks: 1.5 marks inclusion principles + 1.5 marks practical social adaptations.'
  )}
  ${qCard('c6eng-ch15-q8', 'Q8', 'Grammar: Relative Pronouns', 'Grammar',
    'Combine these sentences using "who" or "which":<br>(a) Ila is an artist. She embroiders magnificent silk shawls with her feet.<br>(b) Kathiawar embroidery is an ancient art. It features colorful geometric stitches and mirrors.',
    '<p>(a) Ila is an artist <strong>who</strong> embroiders magnificent silk shawls with her feet.<br>(b) Kathiawar embroidery is an ancient art <strong>which</strong> features colorful geometric stitches and mirrors.</p>',
    '2 marks: 1 mark each.'
  )}
`);

console.log('Appended booster questions to English chapters 3 to 15!');
