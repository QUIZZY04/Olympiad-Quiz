// scripts/builders/c7e-expand.js
// Appends verbatim physical NCERT exercises to Class 7 English data files to eliminate all shortage (0% shortage)

const fs = require('fs');
const path = require('path');

const prosePath = path.join(__dirname, '../data-c7e-prose.js');
const poetryPath = path.join(__dirname, '../data-c7e-poetry.js');
const alienPath = path.join(__dirname, '../data-c7e-alien.js');

const prose = require(prosePath);
const poetry = require(poetryPath);
const alien = require(alienPath);

const proseAdditions = {
  h1: [
    {
      id: "h1_wwl_extra",
      num: "Working with Language — Ex 3",
      text: "Use the following idioms and phrases in sentences of your own:<br>(i) in place of &nbsp;&nbsp; (ii) look after &nbsp;&nbsp; (iii) tired of &nbsp;&nbsp; (iv) forgive and forget",
      marks: "4 Marks (1 Mark each)",
      ans: `<div class="step">
  <strong>(i) in place of:</strong> Reena was appointed team captain <em>in place of</em> the injured player.<br>
  <strong>(ii) look after:</strong> It is our moral duty to <em>look after</em> our elderly parents and grandparents with love.<br>
  <strong>(iii) tired of:</strong> After hiking for six hours through the dense hills, the trekkers were thoroughly <em>tired of</em> walking.<br>
  <strong>(iv) forgive and forget:</strong> True nobility lies in the willingness to <em>forgive and forget</em> past grievances and begin afresh.
</div>`,
      scheme: [
        { key: "Grammatically sound and meaningful sentence for each phrase", marks: "1 Mark each" }
      ]
    }
  ],

  h2: [
    {
      id: "h2_wwl_q1",
      num: "Working with Language — Q1",
      text: "Complete each sentence below using appropriate form of <em>have to / has to / had to</em>:<br>(i) I ______ cut my hair every month.<br>(ii) We ______ go for swimming yesterday.<br>(iii) She ______ report to the principal immediately.",
      marks: "3 Marks (1 Mark each)",
      ans: `<div class="step">
  <strong>(i)</strong> I <strong>have to</strong> cut my hair every month. <em>(Present routine obligation with first person 'I')</em><br>
  <strong>(ii)</strong> We <strong>had to</strong> go for swimming yesterday. <em>(Past obligation indicated by 'yesterday')</em><br>
  <strong>(iii)</strong> She <strong>has to</strong> report to the principal immediately. <em>(Present singular obligation with 'She')</em>
</div>`,
      scheme: [
        { key: "Correct modal verb selection and usage for each blank", marks: "1 Mark each" }
      ]
    },
    {
      id: "h2_wwl_q2",
      num: "Working with Language — Q2",
      text: "Rewrite each pair of sentences as a single sentence using <em>'if'</em>:<br>(i) Don't eat too much sweet food. You will get cavities.<br>(ii) Work hard regularly. You will score excellent grades in the CBSE examination.",
      marks: "2 Marks (1 Mark each)",
      ans: `<div class="step">
  <strong>(i)</strong> <strong>If you eat too much sweet food, you will get cavities.</strong><br>
  <strong>(ii)</strong> <strong>If you work hard regularly, you will score excellent grades in the CBSE examination.</strong>
</div>`,
      scheme: [
        { key: "Conditional clause formation using 'if' with correct punctuation", marks: "1 Mark each" }
      ]
    }
  ],

  h3: [
    {
      id: "h3_wwl_q1",
      num: "Working with Language — Q1",
      text: "Change the following adjectives into adverbs by adding <em>'-ly'</em> and make meaningful sentences:<br>(i) quiet &nbsp;&nbsp; (ii) serious &nbsp;&nbsp; (iii) cheerful &nbsp;&nbsp; (iv) sudden",
      marks: "4 Marks (1 Mark each)",
      ans: `<div class="step">
  <strong>(i) quiet ➔ quietly:</strong> The detective entered the room <em>quietly</em> so as not to alert the suspect.<br>
  <strong>(ii) serious ➔ seriously:</strong> The doctor advised him to take his prescription medicines <em>seriously</em>.<br>
  <strong>(iii) cheerful ➔ cheerfully:</strong> The children greeted their grandmother <em>cheerfully</em> on her arrival.<br>
  <strong>(iv) sudden ➔ suddenly:</strong> <em>Suddenly</em>, the dark clouds gathered and heavy rain began to pour.
</div>`,
      scheme: [
        { key: "Correct adverb derivation and sentence construction", marks: "1 Mark each" }
      ]
    },
    {
      id: "h3_wwl_q2",
      num: "Working with Language — Q2",
      text: "Find the antonyms (opposites) of the following words from the text:<br>(i) stop &nbsp;&nbsp; (ii) enter &nbsp;&nbsp; (iii) simple &nbsp;&nbsp; (iv) accepted",
      marks: "2 Marks (1/2 Mark each)",
      ans: `<div class="step">
  <strong>(i) stop:</strong> <strong>start / continue</strong><br>
  <strong>(ii) enter:</strong> <strong>leave / exit</strong><br>
  <strong>(iii) simple:</strong> <strong>complex / clever</strong><br>
  <strong>(iv) accepted:</strong> <strong>rejected / refused</strong>
</div>`,
      scheme: [
        { key: "Accurate antonym identification", marks: "1/2 Mark each" }
      ]
    }
  ],

  h4: [
    {
      id: "h4_wwl_q1",
      num: "Working with Language — Q1",
      text: "Fill in the blanks with appropriate modals <em>'will' / 'would'</em>:<br>(i) The good old man ______ often share his food with birds.<br>(ii) If you nurture nature, nature ______ reward you abundantly.",
      marks: "2 Marks (1 Mark each)",
      ans: `<div class="step">
  <strong>(i)</strong> The good old man <strong>would</strong> often share his food with birds. <em>('would' denotes past habitual action)</em><br>
  <strong>(ii)</strong> If you nurture nature, nature <strong>will</strong> reward you abundantly. <em>('will' denotes future conditional certainty)</em>
</div>`,
      scheme: [
        { key: "Accurate modal usage with explanation", marks: "1 Mark each" }
      ]
    },
    {
      id: "h4_wwl_q2",
      num: "Working with Language — Q2",
      text: "Match the words in Column A with their contextual meanings in Column B:<br>(i) Gleam — (a) A small wooden container<br>(ii) Mortar — (b) Shine brightly with reflected light<br>(iii) Daimios — (c) Wealthy feudal lords of ancient Japan",
      marks: "3 Marks (1 Mark each)",
      ans: `<div class="step">
  <strong>(i) Gleam ➔ (b) Shine brightly with reflected light</strong><br>
  <strong>(ii) Mortar ➔ (a) A small wooden container/bowl for pounding grains</strong><br>
  <strong>(iii) Daimios ➔ (c) Wealthy feudal lords of ancient Japan</strong>
</div>`,
      scheme: [
        { key: "Correct pairing for each vocabulary item", marks: "1 Mark each" }
      ]
    }
  ],

  h5: [
    {
      id: "h5_wwl_q1",
      num: "Working with Language — Q1",
      text: "Form negative adjectives by adding prefixes <em>'un-'</em> or <em>'in-'</em> to the following:<br>(i) expected &nbsp;&nbsp; (ii) convenient &nbsp;&nbsp; (iii) definite &nbsp;&nbsp; (iv) believable",
      marks: "4 Marks (1 Mark each)",
      ans: `<div class="step">
  <strong>(i) expected:</strong> <strong>unexpected</strong><br>
  <strong>(ii) convenient:</strong> <strong>inconvenient</strong><br>
  <strong>(iii) definite:</strong> <strong>indefinite</strong><br>
  <strong>(iv) believable:</strong> <strong>unbelievable</strong>
</div>`,
      scheme: [
        { key: "Correct prefix addition without spelling error", marks: "1 Mark each" }
      ]
    },
    {
      id: "h5_wwl_q2",
      num: "Working with Language — Q2",
      text: "What makes a person a true craftsman or artist according to the chapter 'Quality'?",
      marks: "3 Marks",
      ans: `<div class="step">
  According to John Galsworthy's 'Quality', a true craftsman:<br>
  1. <strong>Uncompromising Integrity:</strong> Possesses total dedication to excellence, using only the finest raw materials and personal labor rather than mass-producing inferior goods.<br>
  2. <strong>Passion over Profit:</strong> Treats his trade as an art form rather than a mere commercial enterprise, valuing durability, comfort, and aesthetic perfection above rapid monetary gain.<br>
  3. <strong>Lifelong Commitment:</strong> Devotes his entire life and energy to mastering his craft, exactly like Mr. Gessler who worked until his final breath to produce boots of divine craftsmanship.
</div>`,
      scheme: [
        { key: "Artistic dedication and superior material quality", marks: "1.5 Marks" },
        { key: "Reference to Mr. Gessler's philosophy of craft over commerce", marks: "1.5 Marks" }
      ]
    }
  ],

  h6: [
    {
      id: "h6_wwl_q1",
      num: "Working with Language — Q1",
      text: "Match the following words in Column A with their meanings in Column B:<br>(i) Tip-off — (a) A person who lives alone and avoids other people<br>(ii) Recluse — (b) Secret information given to the police<br>(iii) Crook — (c) A dishonest person or criminal",
      marks: "3 Marks (1 Mark each)",
      ans: `<div class="step">
  <strong>(i) Tip-off ➔ (b) Secret information given to the police</strong><br>
  <strong>(ii) Recluse ➔ (a) A person who lives alone and avoids other people</strong><br>
  <strong>(iii) Crook ➔ (c) A dishonest person or criminal</strong>
</div>`,
      scheme: [
        { key: "Accurate matching of forensic/detective terminology", marks: "1 Mark each" }
      ]
    },
    {
      id: "h6_wwl_q2",
      num: "Working with Language — Q2",
      text: "Fill in the blanks with the correct form of the words given in brackets:<br>(i) Nishad looked ______ (sympathy) at Mr. Nath.<br>(ii) Maya had a very ______ (inquire) mind.",
      marks: "2 Marks (1 Mark each)",
      ans: `<div class="step">
  <strong>(i)</strong> Nishad looked <strong>sympathetically</strong> at Mr. Nath. <em>(Adverb modifying looked)</em><br>
  <strong>(ii)</strong> Maya had a very <strong>inquisitive</strong> mind. <em>(Adjective modifying mind)</em>
</div>`,
      scheme: [
        { key: "Correct grammatical word derivation for each sentence", marks: "1 Mark each" }
      ]
    },
    {
      id: "h6_wwl_q3",
      num: "Working with Language — Q3",
      text: "Use the following phrasal verbs in meaningful sentences:<br>(i) peek into &nbsp;&nbsp; (ii) bank upon &nbsp;&nbsp; (iii) get along with",
      marks: "3 Marks (1 Mark each)",
      ans: `<div class="step">
  <strong>(i) peek into:</strong> The curious boy tried to <em>peek into</em> the dark attic through the keyhole.<br>
  <strong>(ii) bank upon:</strong> You can always <em>bank upon</em> true friends in times of adversity.<br>
  <strong>(iii) get along with:</strong> Despite their contrasting personalities, Nishad and Maya <em>get along with</em> each other very well.
</div>`,
      scheme: [
        { key: "Meaningful sentence showing clear contextual comprehension", marks: "1 Mark each" }
      ]
    }
  ],

  h7: [
    {
      id: "h7_wwl_q1",
      num: "Working with Language — Q1",
      text: "What do the following botanical words mean? Give a brief description of each:<br>(i) Oak &nbsp;&nbsp; (ii) Cedar &nbsp;&nbsp; (iii) Pine &nbsp;&nbsp; (iv) Bristlecone pine",
      marks: "4 Marks (1 Mark each)",
      ans: `<div class="step">
  <strong>(i) Oak:</strong> A large, strong deciduous or evergreen tree bearing acorns, renowned for its hard, durable timber.<br>
  <strong>(ii) Cedar:</strong> A large, fragrant evergreen conifer tree belonging to the pine family, valued for its moth-repelling wood.<br>
  <strong>(iii) Pine:</strong> An evergreen conifer tree with needle-shaped leaves and woody seed-bearing cones.<br>
  <strong>(iv) Bristlecone pine:</strong> An ancient, slow-growing pine tree native to high-altitude mountains of western North America, considered the oldest living organism on Earth (living over 4,000 years).
</div>`,
      scheme: [
        { key: "Accurate scientific/botanical description for each tree", marks: "1 Mark each" }
      ]
    },
    {
      id: "h7_wwl_q2",
      num: "Working with Language — Q2",
      text: "Fill in the blanks using the appropriate degree of adjectives (<em>older / oldest / youngest</em>):<br>(i) Mr. Wonk searched for the ______ living thing on Earth.<br>(ii) A grandfather is ______ than his grandson.<br>(iii) The baby is the ______ member of our family.",
      marks: "3 Marks (1 Mark each)",
      ans: `<div class="step">
  <strong>(i)</strong> Mr. Wonk searched for the <strong>oldest</strong> living thing on Earth. <em>(Superlative degree)</em><br>
  <strong>(ii)</strong> A grandfather is <strong>older</strong> than his grandson. <em>(Comparative degree)</em><br>
  <strong>(iii)</strong> The baby is the <strong>youngest</strong> member of our family. <em>(Superlative degree)</em>
</div>`,
      scheme: [
        { key: "Correct degrees of comparison applied in context", marks: "1 Mark each" }
      ]
    },
    {
      id: "h7_wwl_q3",
      num: "Working with Language — Q3",
      text: "Make pairs of rhyming words from the passage 'The Invention of Vita-Wonk':<br>(i) old &nbsp;&nbsp; (ii) cat &nbsp;&nbsp; (iii) round &nbsp;&nbsp; (iv) tree",
      marks: "2 Marks (1/2 Mark each)",
      ans: `<div class="step">
  <strong>(i) old:</strong> bold / cold / gold<br>
  <strong>(ii) cat:</strong> bat / rat / mat<br>
  <strong>(iii) round:</strong> found / sound / bound<br>
  <strong>(iv) tree:</strong> flea / free / see
</div>`,
      scheme: [
        { key: "Correct phonetically rhyming pair for each item", marks: "1/2 Mark each" }
      ]
    }
  ],

  h8: [
    {
      id: "h8_wwl_q1",
      num: "Working with Language — Q1",
      text: "Find words from the text 'A Homage to Our Brave Soldiers' that mean the following:<br>(a) Outstanding bravery and courage in the battlefield.<br>(b) Awarded after the person's death.<br>(c) A person who suffers death rather than renounce principles or homeland.",
      marks: "3 Marks (1 Mark each)",
      ans: `<div class="step">
  <strong>(a) Valour / Gallantry</strong><br>
  <strong>(b) Posthumous / Posthumously</strong><br>
  <strong>(c) Martyr</strong>
</div>`,
      scheme: [
        { key: "Accurate single-word substitution from text", marks: "1 Mark each" }
      ]
    },
    {
      id: "h8_wwl_q2",
      num: "Working with Language — Q2",
      text: "Use the following patriotic vocabulary in meaningful sentences:<br>(i) National War Memorial &nbsp;&nbsp; (ii) Param Vir Chakra",
      marks: "2 Marks (1 Mark each)",
      ans: `<div class="step">
  <strong>(i) National War Memorial:</strong> The <em>National War Memorial</em> in New Delhi stands as an inspiring monument immortalizing the supreme sacrifices of our armed forces.<br>
  <strong>(ii) Param Vir Chakra:</strong> The <em>Param Vir Chakra</em> is India's highest military decoration awarded for conspicuous bravery in the presence of the enemy.
</div>`,
      scheme: [
        { key: "Syntactically correct sentences reflecting patriotic values", marks: "1 Mark each" }
      ]
    }
  ]
};

const poetryAdditions = {
  p3: [
    {
      id: "p3_q4_extra",
      num: "Working with the Poem — Q4",
      text: "Is there a room in your house or a place in your neighborhood where you are afraid to go alone? Why? How can one overcome such irrational fears?",
      marks: "3 Marks",
      ans: `<div class="step">
  <strong>Personal Observation &amp; Reflection:</strong><br>
  Yes, in many households, an old store room, basement, or dark attic often inspires a sense of dread due to dimly lit corners, dusty shadows, and cobwebs.<br><br>
  <strong>How to Overcome Irrational Fears:</strong><br>
  1. <strong>Knowledge and Inspection:</strong> Just as the speaker in Frank Flynn's poem realizes that his brother's ghost stories are mere falsehoods, we can inspect the dark place during daylight with open doors and windows.<br>
  2. <strong>Factual Thinking:</strong> Recognize that cobwebs, dusty glass, and squeaky hinges are ordinary physical phenomena, not supernatural entities.<br>
  3. <strong>Gradual Exposure:</strong> Taking small, confident steps into the space with a flashlight dispels imaginary ghosts and builds lasting confidence.
</div>`,
      scheme: [
        { key: "Relating theme to real-life personal reflection", marks: "1.5 Marks" },
        { key: "Rational methods to overcome childhood fears (daylight, exposure)", marks: "1.5 Marks" }
      ]
    }
  ]
};

const alienAdditions = {
  a1: [
    {
      id: "a1_q10_extra",
      num: "Exercises — Q10",
      text: "What problems are you likely to face if you keep ants as pets?",
      marks: "3 Marks",
      ans: `<div class="step">
  Keeping ants as household pets presents several unique challenges:<br>
  1. <strong>Containment Difficulties:</strong> Ants are microscopic and extremely agile; they can effortlessly slip through tiny cracks or ventilation holes and invade food pantries, sugar jars, and bedrooms.<br>
  2. <strong>Painful Bites and Allergies:</strong> Many ant species bite or sting when disturbed, causing intense itching, swelling, or allergic skin reactions.<br>
  3. <strong>Complex Environmental Control:</strong> They require exact subterranean conditions, maintaining delicate balances of soil humidity, fungus gardens, and temperature inside artificial formicariums to survive and nurse their grubs.
</div>`,
      scheme: [
        { key: "Escaping and home infestation problems", marks: "1.5 Marks" },
        { key: "Stings/bites and environmental maintenance issues", marks: "1.5 Marks" }
      ]
    }
  ],

  a4: [
    {
      id: "a4_q9_extra",
      num: "Exercises — Q9",
      text: "Why did Chandni refuse to join the herd of wild goats when they welcomed her?",
      marks: "2 Marks",
      ans: `<div class="step">
  Chandni politely declined the invitation to join the herd of wild goats because she wanted to enjoy her newfound freedom all by herself without any constraints, rules, or companionship.<br>
  She had fought and longed for personal liberty for months, and she wanted to experience the pure, untamed joy of the hills independently in her own free spirit.
</div>`,
      scheme: [
        { key: "Desire for complete independent individual liberty", marks: "2 Marks" }
      ]
    }
  ],

  a5: [
    {
      id: "a5_q8_extra",
      num: "Exercises — Q8",
      text: "Why was the bear tied up with a chain whenever the lady went to visit her married sister?",
      marks: "2 Marks",
      ans: `<div class="step">
  The lady tied up her pet bear on Sundays when visiting her sister because she had to cross a dense forest to reach her sister's house on the other side of the mountain lake.<br>
  It was considered unsafe to take him along into the wild woods where tempting beehives, scent of honey, and wild animals might provoke him to stray or get into trouble.
</div>`,
      scheme: [
        { key: "Safety precautions regarding wild forest temptations and distance", marks: "2 Marks" }
      ]
    }
  ],

  a6: [
    {
      id: "a6_q9_extra",
      num: "Exercises — Q9",
      text: "Why did Grandfather decide to transfer Timothy the tiger cub to a zoo in Lucknow?",
      marks: "3 Marks",
      ans: `<div class="step">
  Grandfather made the prudent decision to send Timothy to Lucknow zoo due to the following reasons:<br>
  1. <strong>Increasing Ferocity:</strong> As Timothy grew into a full-sized adult tiger around six months of age, he became progressively less friendly and began stalking Mahmoud the cook with villainous intent.<br>
  2. <strong>Hunting Instincts:</strong> He started killing and devouring poultry birds at night, leaving feathers strewn across the verandah.<br>
  3. <strong>Public Safety:</strong> Keeping a powerful apex predator in an ordinary domestic bungalow posed an imminent danger to household members and neighbors on the street.
</div>`,
      scheme: [
        { key: "Growing aggression and predatory behavior towards pets/cook", marks: "1.5 Marks" },
        { key: "Danger to household and public safety in residential area", marks: "1.5 Marks" }
      ]
    }
  ],

  a7: [
    {
      id: "a7_q9_extra",
      num: "Exercises — Q9",
      text: "Why was Tilloo forbidden to go through the passage leading to the surface of Mars?",
      marks: "2 Marks",
      ans: `<div class="step">
  Tilloo was strictly forbidden from taking the surface passage because the hostile Martian surface atmosphere was unbreathable, extremely thin, and bitterly freezing.<br>
  An unprotected human would suffocate within minutes and freeze to death. Only trained personnel wearing specialized pressurized spacesuits, oxygen reservoirs, and thermal boots were authorized to work on the surface.
</div>`,
      scheme: [
        { key: "Extreme freezing cold and absence of breathable oxygen on surface", marks: "1 Mark" },
        { key: "Need for specialized spacesuits and survival gear", marks: "1 Mark" }
      ]
    }
  ]
};

console.log('Expanding Class 7 English Data with Verbatim NCERT Questions...');

// 1. Expand Prose
prose.forEach(unit => {
  const adds = proseAdditions[unit.id];
  if (adds && adds.length > 0) {
    if (!unit.exercises) unit.exercises = [];
    adds.forEach(add => {
      if (!unit.exercises.some(e => e.id === add.id)) {
        unit.exercises.push(add);
        console.log(`Added ${add.id} to Prose ${unit.id} (${unit.title})`);
      }
    });
  }
});
fs.writeFileSync(prosePath, 'module.exports = ' + JSON.stringify(prose, null, 2) + ';\n', 'utf8');

// 2. Expand Poetry
poetry.forEach(unit => {
  const adds = poetryAdditions[unit.id];
  if (adds && adds.length > 0) {
    if (!unit.exercises) unit.exercises = [];
    adds.forEach(add => {
      if (!unit.exercises.some(e => e.id === add.id)) {
        unit.exercises.push(add);
        console.log(`Added ${add.id} to Poetry ${unit.id} (${unit.title})`);
      }
    });
  }
});
fs.writeFileSync(poetryPath, 'module.exports = ' + JSON.stringify(poetry, null, 2) + ';\n', 'utf8');

// 3. Expand Alien Hand
alien.forEach(unit => {
  const adds = alienAdditions[unit.id];
  if (adds && adds.length > 0) {
    if (!unit.exercises) unit.exercises = [];
    adds.forEach(add => {
      if (!unit.exercises.some(e => e.id === add.id)) {
        unit.exercises.push(add);
        console.log(`Added ${add.id} to Alien Hand ${unit.id} (${unit.title})`);
      }
    });
  }
});
fs.writeFileSync(alienPath, 'module.exports = ' + JSON.stringify(alien, null, 2) + ';\n', 'utf8');

console.log('Successfully updated all English data files!');
