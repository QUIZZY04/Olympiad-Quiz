// Class 10 English NCERT Solutions - First Flight Prose (Units 1 to 9)
// Academic Year CBSE 2026-27 Marking Scheme Breakdown

const PROSE_CHAPTERS = {
  1: {
    unit: 1,
    book: "First Flight Prose",
    title: "Chapter 1: A Letter to God",
    author: "G.L. Fuentes — Faith, Irony & Human Kindness — CBSE Marking Scheme 2026-27",
    category: "FIRST FLIGHT PROSE",
    badge: "1",
    questions: [
      {
        id: "ff1_1",
        num: "Q1",
        marks: "2 Marks",
        text: "What did Lencho hope for? Why was a downpour desperately needed for his crops?",
        answer: `<p>Lencho, an industrious peasant whose modest house was the solitary one in the entire valley perched on a low crest, hoped for a good downpour or at least a modest shower for his ripe cornfield dotted with flowers, which promised a bountiful harvest. His family's complete livelihood and sustenance for the entire forthcoming year depended directly upon this rain.</p>`,
        marking: [
          { key: "Lencho's hope: Good downpour or shower for ripe cornfield", marks: "1 Mark" },
          { key: "Significance: Family's sustenance for the entire coming year", marks: "1 Mark" }
        ]
      },
      {
        id: "ff1_2",
        num: "Q2",
        marks: "2 Marks",
        text: "Why did Lencho say the raindrops were like 'new coins'?",
        answer: `<p>Lencho compared the falling raindrops to 'new coins'—the big drops to ten-cent pieces and the little ones to fives—because rain was the vital catalyst for a rich harvest. Healthy crops would translate directly into prosperity, grain sales, and money in hand. Hence, in his optimistic mind, the falling droplets literally represented incoming coins.</p>`,
        marking: [
          { key: "Direct correlation: Rain ensures rich corn harvest -> money & food", marks: "1 Mark" },
          { key: "Specific comparison: Big drops = 10-cent pieces, small drops = 5s", marks: "1 Mark" }
        ]
      },
      {
        id: "ff1_3",
        num: "Q3",
        marks: "3 Marks",
        text: "How did the rain change? What happened to Lencho's fields?",
        answer: `<p><strong>1. Sudden Transformation of Rain:</strong><br>Suddenly, a strong wind began to blow, and along with the rain, extraordinarily large hailstones began to fall. The tempest raged furiously for a full hour over the house, the garden, the hillside, and the entire corn valley.</p><p><strong>2. Devastation of the Crops:</strong><br>The field became completely blanketed in white as if salted. Not a single leaf remained on the trees; the corn was utterly demolished, and the blossoms were stripped from the plants, reducing Lencho's hopes to ash.</p>`,
        marking: [
          { key: "Sudden strong wind and large hailstones falling for an hour", marks: "1½ Marks" },
          { key: "Total destruction: Field covered like salt, corn destroyed, leaves stripped", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff1_4",
        num: "Q4",
        marks: "2 Marks",
        text: "What were Lencho's feelings when the hail stopped?",
        answer: `<p>When the storm subsided, Lencho stood sorrowfully in the middle of his ruined field and told his sons that even a plague of locusts would have left more behind than the hailstorm. His soul was steeped in profound grief and despair, realizing that their year-long toil had produced nothing and that his family would face starvation unless divine intervention occurred.</p>`,
        marking: [
          { key: "Locust plague comparison: Storm left less than a swarm of insects", marks: "1 Mark" },
          { key: "Deep grief and impending fear of hunger/starvation for the year", marks: "1 Mark" }
        ]
      },
      {
        id: "ff1_5",
        num: "Q5",
        marks: "3 Marks",
        text: "Who or what did Lencho have faith in? What did he do?",
        answer: `<p>Lencho had absolute, unquestioning faith in God, whose all-seeing eyes, he had been taught, see everything—even what is deep within one's conscience. Driven by this unflinching conviction, he wrote a letter addressed directly to 'God', detailing that without help his family would go hungry, and demanded 100 pesos to sow his land anew and survive until the next crop arrived.</p>`,
        marking: [
          { key: "Unwavering faith in God's omnipresence and divine benevolence", marks: "1½ Marks" },
          { key: "Action: Wrote letter to 'God' asking for 100 pesos to resow and survive", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff1_6",
        num: "Q6",
        marks: "3 Marks",
        text: "Who read the letter? What did the postmaster do then?",
        answer: `<p><strong>1. Letter Received:</strong> The postman first laughed heartily and showed it to his superior; the postmaster—a fat, amiable, and generous gentleman—broke out laughing too, but immediately turned serious, deeply moved by the writer's immense faith.</p><p><strong>2. Postmaster's Noble Gesture:</strong> Determined not to shake Lencho's sublime trust in God, the postmaster decided to reply. Realizing that goodwill alone was insufficient, he contributed a part of his salary, collected donations from his employees and friends as an 'act of charity', and gathered 70 pesos, which he mailed in an envelope signed simply: <em>'God'</em>.</p>`,
        marking: [
          { key: "Postmaster read the letter and was inspired by Lencho's unshakeable faith", marks: "1½ Marks" },
          { key: "Collected 70 pesos from salary and friends as charity; signed as 'God'", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff1_7",
        num: "Q7",
        marks: "2 Marks",
        text: "Was Lencho surprised to find a letter with money in it? What made him angry?",
        answer: `<p><strong>1. Not Surprised:</strong> Lencho showed not the slightest hint of surprise upon opening the envelope containing money; his conviction in God's willingness to help was so total and absolute that he took the arrival of the cash for granted.</p><p><strong>2. Cause of Anger:</strong> When he counted the money, he discovered only 70 pesos instead of the 100 he had requested. Convinced that God could neither make an arithmetic mistake nor deny his plea, he concluded that the post office clerks had stolen the missing 30 pesos.</p>`,
        marking: [
          { key: "No surprise: Absolute certitude of God's response", marks: "1 Mark" },
          { key: "Anger: Shortage of 30 pesos; accused post office staff of stealing it", marks: "1 Mark" }
        ]
      },
      {
        id: "ff1_8",
        num: "Q8",
        marks: "6 Marks",
        text: "Who does Lencho think has taken the rest of the money? What is the supreme irony of the ending in 'A Letter to God'?",
        answer: `<p><strong>1. Lencho's Suspicion:</strong><br>Lencho firmly believed that the post office employees had embezzled the missing thirty pesos. In his second letter to God, he pleaded: <em>'Send me the rest, since I need it very much. But don't send it to me through the mail, because the post office employees are a bunch of crooks.'</em></p><p><strong>2. The Supreme Situational Irony:</strong><br>Irony is a literary device where the actual outcome is humorously or tragically opposite to what is expected. In this story:</p><ul><li>The postmaster and postal staff had exhibited extraordinary selflessness, empathy, and sacrifice by parting with their own hard-earned money to preserve a stranger's spiritual faith.</li><li>Instead of receiving gratitude or praise, these very benefactors were branded as a <em>'bunch of crooks'</em> and thieves by the recipient.</li><li>Lencho's blind, naive faith in God made him suspect human goodness, creating a poignant and humorous paradox where noble charity was rewarded with bitter condemnation.</li></ul>`,
        marking: [
          { key: "Lencho's belief: Post office employees stole the 30 pesos ('bunch of crooks')", marks: "2 Marks" },
          { key: "Definition & demonstration of situational irony: Benefactors labeled thieves", marks: "2 Marks" },
          { key: "Critical analysis: Contrast between blind religious faith and human empathy", marks: "2 Marks" }
        ]
      }
    ],
    cbq: [
      {
        type: "Case Study / Thematic Analysis",
        color: "#0284c7",
        question: "Lencho's faith in God was unquestionable, but his faith in humanity was non-existent. How does this story highlight the conflict between faith and practical human understanding?",
        answer: "Lencho possesses a childlike, dogmatic faith in the metaphysical supreme being, believing God actively reads posted mail and sends currency notes. However, he is completely cynical about his fellow humans, immediately assuming the postal workers are dishonest thieves. The story illustrates that while faith gives people the mental fortitude to face disasters, faith without practical discernment can turn into blind delusion and ingratitude. True godliness was actually manifested in the flesh-and-blood postmaster's quiet generosity, which Lencho failed to recognize."
      },
      {
        type: "Extract-Based Question",
        color: "#059669",
        question: "Read the extract and answer: 'What faith! I wish I had the faith of the man who wrote this letter. Starting up a correspondence with God!' (a) Who spoke these words? (b) What action did the speaker take to uphold this faith?",
        answer: "(a) The postmaster spoke these words to himself upon reading Lencho's first letter addressed to God.<br>(b) To preserve the writer's remarkable faith, the postmaster decided to answer the letter and mobilized his staff, friends, and personal funds to collect 70 pesos to send to Lencho."
      }
    ]
  },
  2: {
    unit: 2,
    book: "First Flight Prose",
    title: "Chapter 2: Nelson Mandela: Long Walk to Freedom",
    author: "Nelson Rolihlahla Mandela — Dignity, Courage & Liberation — CBSE Marking Scheme 2026-27",
    category: "FIRST FLIGHT PROSE",
    badge: "2",
    questions: [
      {
        id: "ff2_1",
        num: "Q1",
        marks: "3 Marks",
        text: "Where did the inauguration ceremony take place? Why is 10 May described as an 'autumn day' in South Africa?",
        answer: `<p><strong>1. Location:</strong> The historic inauguration ceremonies took place in the Union Buildings amphitheatre in Pretoria, carved out of lovely sandstone, which had been the seat of white supremacy for decades.</p><p><strong>2. 'Autumn Day' in South Africa:</strong> Because South Africa lies in the Southern Hemisphere, its seasonal cycle is opposite to the Northern Hemisphere, making May an autumn month. Metaphorically, autumn signifies harvest and the shedding of old withered leaves—here symbolizing the harvest of South Africa's hard-won freedom and the shedding of centuries of apartheid oppression.</p>`,
        marking: [
          { key: "Location: Union Buildings amphitheatre in Pretoria (sandstone structure)", marks: "1½ Marks" },
          { key: "Southern hemisphere autumn season + metaphorical harvest of freedom", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff2_2",
        num: "Q2",
        marks: "3 Marks",
        text: "What does Mandela mean when he mentions 'an extraordinary human disaster' and 'a glorious human achievement'?",
        answer: `<p><strong>1. 'Extraordinary Human Disaster':</strong> Mandela refers to the brutal practice of Apartheid—a racially discriminatory system wherein black South Africans were disenfranchised, segregated, dehumanized, and subjected to atrocities on their own land for over three centuries.</p><p><strong>2. 'Glorious Human Achievement':</strong> He refers to the birth of a non-racial, democratic, and egalitarian South African republic where every citizen, regardless of skin color or ethnicity, enjoys equal human dignity, rights, and constitutional liberty.</p>`,
        marking: [
          { key: "Disaster: System of Apartheid, racial oppression, segregation", marks: "1½ Marks" },
          { key: "Achievement: Democratic, non-racial government upholding human rights", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff2_3",
        num: "Q3",
        marks: "2 Marks",
        text: "Why were two national anthems sung on the day of the inauguration?",
        answer: `<p>Two national anthems were sung to signify the harmonious reconciliation and equality of both races: the whites sang 'Nkosi Sikelel' iAfrika' (God Bless Africa) and the blacks sang 'Die Stem' (The Voice of South Africa), the old republican anthem. Singing both honored the cultural identities of both communities, laying the bedrock of racial unity.</p>`,
        marking: [
          { key: "Names of anthems: 'Nkosi Sikelel' iAfrika' (Whites) and 'Die Stem' (Blacks)", marks: "1 Mark" },
          { key: "Significance: Symbol of racial reconciliation, equality, and unity", marks: "1 Mark" }
        ]
      },
      {
        id: "ff2_4",
        num: "Q4",
        marks: "3 Marks",
        text: "How had the attitude of the military generals changed towards Mandela, and why?",
        answer: `<p>The highest military generals and police chiefs, whose chests were decorated with ribbons and medals, saluted Nelson Mandela with solemn allegiance. Mandela recalled with sober irony that not so many years ago, these very generals would not have saluted him but arrested and imprisoned him as a rebel. Their attitude changed because a free, democratic election had legitimately appointed Mandela as the President of South Africa, replacing white supremacy with constitutional democracy.</p>`,
        marking: [
          { key: "Contrast: Previously would have arrested him; now saluting in homage", marks: "1½ Marks" },
          { key: "Reason: Democratic transition, Mandela elected constitutional Commander-in-Chief", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff2_5",
        num: "Q5",
        marks: "3 Marks",
        text: "What does courage mean to Nelson Mandela? Which does he consider more natural: love or hate?",
        answer: `<p><strong>1. Meaning of Courage:</strong> Mandela learned that courage was not the absence of fear, but the triumph over it. A brave man is not someone who feels no fear, but one who conquers and overcomes that fear.</p><p><strong>2. Love vs Hate:</strong> Mandela firmly asserts that love comes more naturally to the human heart than its opposite. No one is born hating another person because of skin color, religion, or background; hatred is taught, and if people can learn to hate, they can much more easily be taught to love.</p>`,
        marking: [
          { key: "Courage defined: Triumph over fear, not the absence of fear", marks: "1½ Marks" },
          { key: "Love is natural: Born without hate; love touches human heart organically", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff2_6",
        num: "Q6",
        marks: "3 Marks",
        text: "What 'twin obligations' does Mandela mention in the chapter?",
        answer: `<p>Mandela explains that every man in a civil society has twin obligations:</p><ul><li><strong>First Obligation:</strong> To his personal family—parents, wife, and children.</li><li><strong>Second Obligation:</strong> To his larger community, his people, and his country.</li></ul><p>Under the apartheid regime, a man of color attempting to fulfill his duty to his people was ripped from his family and forced to live an isolated life of rebellion and exile.</p>`,
        marking: [
          { key: "First obligation: Personal duties to parents, wife, and children", marks: "1½ Marks" },
          { key: "Second obligation: Social duties to community, people, and nation", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff2_7",
        num: "Q7",
        marks: "6 Marks",
        text: "How did Mandela's 'hunger for freedom' change his life? Why does he state that the oppressor must be liberated just as surely as the oppressed?",
        answer: `<p><strong>1. Transformation from Boyhood to Freedom Fighter:</strong><br>As a boy, Mandela believed he was born free—free to run in the fields, swim in clear streams, and roast mealies under the stars. In youth, he realized these were merely illusions of 'transitory freedoms'. His growing hunger for the real, honorable freedom of his people transformed him completely:</p><ul><li>It turned a frightened young man into a bold revolutionary.</li><li>It drove a law-abiding attorney to become an outlaw living on the run.</li><li>It forced a family-loving husband to live like a monk in prison for 27 years.</li></ul><p><strong>2. Liberation of Both Oppressor and Oppressed:</strong><br>Mandela presents a sublime philosophical insight: <em>'The oppressed and the oppressor alike are robbed of their humanity.'</em> A man who deprives another man of his freedom is himself a prisoner of hatred, locked behind the bars of prejudice and narrow-mindedness. True emancipation requires liberating the oppressed from chains and freeing the oppressor from bigotry.</p>`,
        marking: [
          { key: "Evolution of freedom: Boyhood illusions -> adult realization of collective denial", marks: "2 Marks" },
          { key: "Personal cost: Law-abiding lawyer to criminal; family man to solitary prisoner", marks: "2 Marks" },
          { key: "Philosophy of mutual liberation: Oppressor locked in bigotry, robbed of humanity", marks: "2 Marks" }
        ]
      }
    ],
    cbq: [
      {
        type: "Competency-Based Evaluation",
        color: "#0284c7",
        question: "Mandela observed: 'The depths of oppression create heights of character.' How did the apartheid regime inadvertently produce towering leaders like Oliver Tambo, Walter Sisulu, and Chief Luthuli?",
        answer: "Mandela explains that extreme adversity, systemic cruelty, and ruthless persecution act as a fiery crucible that tempers human willpower. The decades of brutal apartheid oppression demanded extraordinary courage, sacrifice, wisdom, and resilience from resistance leaders, thereby cultivating towering moral giants whose stature might never have been summoned under ordinary conditions. It proved that human spirit shines brightest against the darkest tyranny."
      }
    ]
  },
  3: {
    unit: 3,
    book: "First Flight Prose",
    title: "Chapter 3: Two Stories about Flying",
    author: "Part I: His First Flight (Liam O'Flaherty) | Part II: Black Aeroplane (Frederick Forsyth)",
    category: "FIRST FLIGHT PROSE",
    badge: "3",
    questions: [
      {
        id: "ff3_1",
        num: "Q1",
        marks: "3 Marks",
        text: "Why was the young seagull afraid to fly? How did his parents and siblings react?",
        answer: `<p><strong>1. Fear of the Abyss:</strong> The young seagull was paralyzed by terror as he looked down at the vast expanse of sea stretching miles below his high cliff ledge. He felt certain that his slender wings would never support his weight, failing to muster the courage that his younger siblings had shown.</p><p><strong>2. Family's Reaction:</strong> His brothers and little sister, whose wings were shorter than his, had already flown away. His parents flew around him, calling shrilly, scolding him, and threatening to let him starve on his ledge unless he flew away.</p>`,
        marking: [
          { key: "Fear: High ledge, vast sea below, conviction that wings wouldn't support him", marks: "1½ Marks" },
          { key: "Family reaction: Scolded, cajoled, threatened with starvation on the ledge", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff3_2",
        num: "Q2",
        marks: "3 Marks",
        text: "'The sight of the food maddened him.' What does this suggest? What compelled the young seagull to finally fly?",
        answer: `<p>The young seagull had been starving for twenty-four hours without a crumb. When his mother picked up a piece of fish and flew across towards him, halting just out of reach in mid-air, the excruciating pangs of hunger overcame his crippling terror. Maddened by the sight of food, he uttered a joyful scream and dived recklessly at the fish. As he fell into open space, a monstrous terror seized him for a minute, but immediately his wings spread outward instinctively, catching the air currents, and he was flying.</p>`,
        marking: [
          { key: "Extreme hunger (starving for 24h) overpowered his instinctual fear", marks: "1½ Marks" },
          { key: "Mother's clever psychological bait: Diving into space unlocked wings", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff3_3",
        num: "Q3",
        marks: "4 Marks",
        text: "Describe the young seagull's first flight and his family's exuberant celebration.",
        answer: `<p>After his initial dive, the wind rushed against his breast feathers, under his stomach, and against his wings. He realized he was no longer falling headlong; he was soaring gradually downwards and outwards. Flapping his wings, he uttered a joyful cry and soared upwards. When his parents and siblings saw him fly, they flew around him, curvetting, banking, soaring, and diving. When he landed on the green sea, his legs sank into the water and he cried in alarm, but as his belly touched the water, he floated naturally without sinking. His family praised him, screeching happily, and offered him scraps of dog-fish as reward.</p>`,
        marking: [
          { key: "Sensory sensations of flight: Wind under feathers, graceful soaring", marks: "2 Marks" },
          { key: "Sea landing: Floating successfully on green water + family offering dog-fish", marks: "2 Marks" }
        ]
      },
      {
        id: "ff3_4",
        num: "Q4",
        marks: "3 Marks",
        text: "Part II: 'I'll take the risk.' What was the risk, and why did the narrator of 'The Black Aeroplane' take it?",
        answer: `<p><strong>1. The Impending Risk:</strong> The narrator was piloting his old Dakota aeroplane towards England when enormous, mountain-like black storm clouds loomed ahead. His fuel tanks were low, his instruments were fragile, and flying around or over the clouds was impossible.</p><p><strong>2. Reason for Taking Risk:</strong> The narrator took the perilous risk because he was overwhelmingly homesick and longed to be with his family for breakfast, eager to enjoy a wholesome, traditional English morning meal.</p>`,
        marking: [
          { key: "Risk: Flying old Dakota with scarce fuel directly into pitch-black storm clouds", marks: "1½ Marks" },
          { key: "Motivation: Yearning to reach home in England for a hearty family breakfast", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff3_5",
        num: "Q5",
        marks: "3 Marks",
        text: "Describe the narrator's perilous experience inside the black storm clouds.",
        answer: `<p>Inside the storm, everything was suddenly pitch black; it was impossible to see anything outside the plane. The old Dakota jumped and twisted violently in the turbulent air. When he checked the compass, it was spinning round and round—dead. His radio, altimeter, and other instruments were similarly lifeless. He was lost in the storm without navigation or communication until a mysterious black aeroplane with no lights on its wings appeared alongside him.</p>`,
        marking: [
          { key: "Complete blackout; plane violently pitching and twisting", marks: "1½ Marks" },
          { key: "All instruments (compass, radio) failed completely; lost in storm", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff3_6",
        num: "Q6",
        marks: "5 Marks",
        text: "Why did the woman in the control center look at the narrator strangely? Who do you think helped the narrator arrive safely?",
        answer: `<p><strong>1. Why the Woman Looked Strangely:</strong><br>Upon landing safely, the narrator hurried to the control tower to thank the pilot of the black aeroplane who had guided him through the tempest. The woman in the control room laughed with utter astonishment and explained that no other aeroplanes were flying that stormy night; radar showed only his solitary Dakota on the screen.</p><p><strong>2. Critical Analysis of the Mysterious Pilot:</strong><br>The identity of the pilot in the black aeroplane remains an open enigma with two interpretations:</p><ul><li><strong>Psychological / Hallucinatory Reality:</strong> Facing imminent death, the narrator's heightened survival instinct and deep subconscious pilot training manifested as a projection of a guiding plane, keeping his hands steady on the controls.</li><li><strong>Miraculous / Supernatural Providence:</strong> The incident represents an unexplained guardian intervention saving an exhausted flyer in distress.</li></ul>`,
        marking: [
          { key: "Control room revelation: Radar detected zero other planes in the stormy sky", marks: "2 Marks" },
          { key: "Dual interpretation: Subconscious survival instinct / guardian miracle", marks: "3 Marks" }
        ]
      }
    ],
    cbq: [
      {
        type: "HOTS / Comparative Analysis",
        color: "#0284c7",
        question: "Both 'His First Flight' and 'The Black Aeroplane' deal with triumph over fear. Compare the internal mental state of the young seagull with that of the Dakota pilot.",
        answer: "The young seagull suffered from anticipation terror—the fear of attempting something untried—which was broken only when hunger forced him to take a plunge into the unknown, revealing that his wings were naturally capable. In contrast, the Dakota pilot demonstrated overconfidence bordering on recklessness, entering deadly clouds out of impatience for breakfast, only to be paralyzed by real technological failure. Both stories prove that in moments of extreme peril, the deepest survival instincts within oneself are summoned to conquer fear."
      }
    ]
  },
  4: {
    unit: 4,
    book: "First Flight Prose",
    title: "Chapter 4: From the Diary of Anne Frank",
    author: "Anne Frank — Adolescence, Wit & Unfiltered Truth — CBSE Marking Scheme 2026-27",
    category: "FIRST FLIGHT PROSE",
    badge: "4",
    questions: [
      {
        id: "ff4_1",
        num: "Q1",
        marks: "3 Marks",
        text: "What made writing in a diary a strange experience for Anne Frank? Why did she decide to keep one?",
        answer: `<p><strong>1. Why Strange:</strong> Writing was a novel experience for thirteen-year-old Anne not only because she had never written anything before, but because she believed that neither she nor anyone else would be interested in the musings of a young schoolgirl.</p><p><strong>2. Why Kept:</strong> Anne felt an urgent emotional need to get things off her chest. She famously remarked that <em>'paper has more patience than people'</em>. Although she had loving parents, an elder sister, and about thirty casual acquaintances, she lacked a true, intimate friend with whom she could confide her deepest feelings.</p>`,
        marking: [
          { key: "Novelty of writing + belief that schoolgirl musings wouldn't interest anyone", marks: "1½ Marks" },
          { key: "Maxim: 'Paper has more patience than people' + lack of a true confidante", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff4_2",
        num: "Q2",
        marks: "2 Marks",
        text: "Why did Anne name her diary 'Kitty'? Why did she give a brief sketch of her family?",
        answer: `<p>Anne named her diary 'Kitty' because she did not want it to be a dry, mechanical ledger of facts; she wanted the diary to be her real, living friend. She provided a brief background of her father Otto Frank, mother Edith, sister Margot, and emigration to Holland because she realized nobody would understand a word of her stories without knowing her background.</p>`,
        marking: [
          { key: "Named 'Kitty' to personalize the diary as an intimate, living friend", marks: "1 Mark" },
          { key: "Family sketch: Needed context for any future reader to understand her life", marks: "1 Mark" }
        ]
      },
      {
        id: "ff4_3",
        num: "Q3",
        marks: "2 Marks",
        text: "What tells you that Anne loved her grandmother deeply?",
        answer: `<p>When Anne's grandmother fell ill in 1941 and had to undergo an operation, Anne worried intensely. After her grandmother's death in January 1942, Anne thought of her constantly and missed her dearly. When Anne's birthday was celebrated later that year, her grandmother's candle was lit alongside the rest, demonstrating her profound, enduring love.</p>`,
        marking: [
          { key: "Sorrow during illness and persistent affectionate memories after death", marks: "1 Mark" },
          { key: "Lit a dedicated candle for grandmother on her 1942 birthday celebration", marks: "1 Mark" }
        ]
      },
      {
        id: "ff4_4",
        num: "Q4",
        marks: "3 Marks",
        text: "Why was Mr Keesing annoyed with Anne? What punishment essays did he assign to her?",
        answer: `<p>Mr Keesing, the elderly mathematics teacher, was perpetually annoyed with Anne because she was an incorrigible chatterbox who talked incessantly during his lectures. After several warnings failed, he assigned her three punitive essays:</p><ol><li>'A Chatterbox'</li><li>'An Incorrigible Chatterbox'</li><li>'Quack, Quack, Quack, Said Mistress Chatterback'</li></ol>`,
        marking: [
          { key: "Reason: Talking excessively during mathematics lessons despite warnings", marks: "1½ Marks" },
          { key: "Three essay titles correctly enumerated", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff4_5",
        num: "Q5",
        marks: "3 Marks",
        text: "How did Anne justify her talkative nature in her first essay?",
        answer: `<p>In her essay on 'A Chatterbox', Anne argued with brilliant logic that talking was an essential student trait. She explained that while she would try to keep it under control, she could never cure herself of the habit because her mother was just as talkative as she was, if not more so. She humorously pleaded that one cannot do much about inherited traits.</p>`,
        marking: [
          { key: "Argument 1: Talking is a natural and vital student characteristic", marks: "1½ Marks" },
          { key: "Argument 2: Inherited trait from mother; heredity cannot be cured", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff4_6",
        num: "Q6",
        marks: "5 Marks",
        text: "How did Anne outsmart Mr Keesing with her third essay? How did Mr Keesing take the joke?",
        answer: `<p><strong>1. Anne's Ingenious Poetic Verse:</strong><br>When assigned the ridiculous topic <em>'Quack, Quack, Quack, Said Mistress Chatterback'</em>, Anne's friend Sanne, who was good at poetry, helped her write the essay entirely in verse. The poem narrated a satirical story about a mother duck, a father swan, and their three ducklings. The father swan bit his ducklings to death because they quacked too much. The allegory humorously mocked Mr Keesing's intolerance towards innocent schoolgirl chatter.</p><p><strong>2. Mr Keesing's Sporting Response:</strong><br>Mr Keesing appreciated the joke in the right spirit. He read the poem aloud to Anne's class with his own comments and shared it with several other classes. From that day on, Anne was allowed to talk freely in class without receiving extra homework, and Mr Keesing was always making jokes himself.</p>`,
        marking: [
          { key: "Sanne's help: Wrote poem about father swan biting ducklings for quacking", marks: "2½ Marks" },
          { key: "Keesing's sporting reaction: Read to class, appreciated wit, stopped punishment", marks: "2½ Marks" }
        ]
      }
    ],
    cbq: [
      {
        type: "Character & Tone Analysis",
        color: "#0284c7",
        question: "How does Anne's interaction with Mr Keesing demonstrate the power of wit, creative writing, and good humor in resolving classroom friction?",
        answer: "Instead of reacting with sulkiness, defiance, or fear towards her strict teacher, Anne weaponized intellect, humor, and self-deprecating irony. By using logic and verse to defend herself, she turned punishment into literary art. Mr Keesing proved himself to be a humane and enlightened educator by recognizing her talent and sporting spirit rather than taking personal offense, illustrating that gentle humor can dissolve tension far more effectively than authoritarian discipline."
      }
    ]
  },
  5: {
    unit: 5,
    book: "First Flight Prose",
    title: "Chapter 5: Glimpses of India",
    author: "I. A Baker from Goa | II. Coorg | III. Tea from Assam — CBSE Marking Scheme 2026-27",
    category: "FIRST FLIGHT PROSE",
    badge: "5",
    questions: [
      {
        id: "ff5_1",
        num: "Q1",
        marks: "3 Marks",
        text: "Part I: What are the elders in Goa nostalgic about? What was the traditional baker called, and what did he wear?",
        answer: `<p><strong>1. Nostalgia:</strong> The Goan elders fondly reminisce about the good old Portuguese days and their famous, crusty loaves of bread. While the original Portuguese bakers may have vanished, the mixers, molders, and traditional fiery furnaces still endure.</p><p><strong>2. The Pader & Kabai:</strong> The village baker was known as the <em>'pader'</em>. In the old days, bakers wore a peculiar single-piece long dress reaching down to their knees called the <em>'kabai'</em>. Later in the author's childhood, they wore shirts and trousers shorter than full-length and longer than half-pants.</p>`,
        marking: [
          { key: "Nostalgia: Portuguese loaves of bread and traditional wood furnaces", marks: "1½ Marks" },
          { key: "Baker name: 'Pader'; traditional knee-length attire: 'Kabai'", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff5_2",
        num: "Q2",
        marks: "3 Marks",
        text: "How were traditional Goan marriages, engagements, and festivals incomplete without bread?",
        answer: `<p>Bread was indispensable to every social occasion in Goan village life:</p><ul><li><strong>Marriage Gifts:</strong> Marriage gifts were meaningless without the sweet bread known as <em>'bol'</em>.</li><li><strong>Engagements:</strong> A daughter's engagement required the mother to prepare special sandwiches.</li><li><strong>Festivals & Christmas:</strong> Cakes and <em>'bolinhas'</em> were an absolute must for Christmas and all major church festivals. A village without a baker's furnace was simply unthinkable.</li></ul>`,
        marking: [
          { key: "Sweet bread 'bol' essential for marriage gifts", marks: "1 Mark" },
          { key: "Sandwiches for daughter's engagement", marks: "1 Mark" },
          { key: "Cakes and 'bolinhas' mandatory for Christmas & church celebrations", marks: "1 Mark" }
        ]
      },
      {
        id: "ff5_3",
        num: "Q3",
        marks: "3 Marks",
        text: "Part II: Where is Coorg situated? What is the story regarding the Greek or Arabic descent of the Kodavus?",
        answer: `<p><strong>1. Location:</strong> Coorg (Kodagu), Karnataka's smallest district, is nestled midway between coastal Mangalore and Mysore—a piece of heaven of evergreen rainforests, spices, and coffee plantations.</p><p><strong>2. Origin Theories:</strong></p><ul><li><strong>Greek Theory:</strong> A part of Alexander the Great's army moved south along the coast and settled there when return became impractical, marrying local women.</li><li><strong>Arabic Theory:</strong> Kodavus wear a traditional long black coat with an embroidered waist-belt known as <em>kuppia</em>, which closely resembles the <em>kuffia</em> worn by Arabs and Kurds.</li></ul>`,
        marking: [
          { key: "Location: Midway between Mysore and Mangalore (Karnataka)", marks: "1 Mark" },
          { key: "Greek descent: Remnants of Alexander's army settled and married locals", marks: "1 Mark" },
          { key: "Arabic descent: Traditional coat 'kuppia' resembles Arab 'kuffia'", marks: "1 Mark" }
        ]
      },
      {
        id: "ff5_4",
        num: "Q4",
        marks: "3 Marks",
        text: "What is the Coorg Regiment famous for? Who was General Cariappa?",
        answer: `<p>The Coorg Regiment is one of the most decorated and valiant regiments in the Indian Army. The very first Chief of the Indian Army, <strong>General Cariappa</strong>, was a proud Coorgi (Kodavu). Furthermore, Kodavus are the only community in India permitted to carry firearms without a license, testifying to their legendary bravery and martial heritage.</p>`,
        marking: [
          { key: "Coorg Regiment: One of the most decorated regiments in the Indian Army", marks: "1 Mark" },
          { key: "General Cariappa: First Chief of the Indian Army was a Coorgi", marks: "1 Mark" },
          { key: "Unique privilege: Permitted to carry firearms without license", marks: "1 Mark" }
        ]
      },
      {
        id: "ff5_5",
        num: "Q5",
        marks: "3 Marks",
        text: "Part III: What are the two legends regarding the discovery of tea described by Rajvir?",
        answer: `<p><strong>1. Chinese Legend:</strong> An ancient Chinese emperor always boiled water before drinking it. One day, a few twigs of the burning firewood fell into the boiling water, imparting a delightful, invigorating flavor. They were discovered to be tea leaves.</p><p><strong>2. Indian Buddhist Legend:</strong> Bodhidharma, an ancient Buddhist ascetic, cut off his eyelids because he felt drowsy during meditation. Ten tea plants sprouted out of his eyelids. The leaves of these plants, when put into hot water and drunk, banished sleep.</p>`,
        marking: [
          { key: "Chinese legend: Twigs accidentally dropped into emperor's boiling water", marks: "1½ Marks" },
          { key: "Indian Buddhist legend: Bodhidharma's cut eyelids sprouted tea plants", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff5_6",
        num: "Q6",
        marks: "6 Marks",
        text: "How does 'Glimpses of India' celebrate the distinct cultural flavors, traditions, and geography of Goa, Coorg, and Assam?",
        answer: `<p>The three travelogues in 'Glimpses of India' paint a rich, vibrant mosaic of India's cultural and natural heritage:</p><ul><li><strong>Goa (Cultural Continuity):</strong> Highlights the lingering Portuguese influence through the village baker ('pader'). Baking is not merely a commercial trade but a social institution; sweet bread ('bol') and bolinhas are bound to culinary rituals, demonstrating how colonial history blends harmoniously into coastal domestic life.</li><li><strong>Coorg (Martial Honor & Wilderness):</strong> Explores the rugged hills of Kodagu, teeming with coffee aromas, wild elephants, and Mahseer fish in the Kaveri. It celebrates the Kodavus' fierce martial pride, distinct Greek/Arabic ancestry, hospitable traditions, and exceptional bravery.</li><li><strong>Assam (Industrial & Natural Opulence):</strong> Showcases the endless sea of tea bushes across the Brahmaputra valley. It blends historical myths (Bodhidharma and Chinese emperors) with modern botanical knowledge of tea plucking and flushes.</li></ul><p>Together, the chapter fosters deep pride in the kaleidoscope of India's unity in diversity.</p>`,
        marking: [
          { key: "Goa: Portuguese baking tradition, pader, social rituals, bol", marks: "2 Marks" },
          { key: "Coorg: Martial pride, Kodavus, lush geography, General Cariappa", marks: "2 Marks" },
          { key: "Assam: Tea gardens, legends, industrial and economic prominence", marks: "2 Marks" }
        ]
      }
    ],
    cbq: [
      {
        type: "Competency-Based Evaluation",
        color: "#0284c7",
        question: "Pranjol's father commended Rajvir: 'You seem to have done your homework before coming.' Why is prior research and intellectual curiosity essential when traveling?",
        answer: "Rajvir transformed a routine train journey into an enriching educational experience because he read extensively about tea legends, flushes, and botanical facts before visiting Dhekiabari. While Pranjol took his native tea surroundings for granted, Rajvir observed the pruning, plucking, and seasonal yield with passionate appreciation. Prior research enriches travel, transforming tourists from passive spectators into culturally enlightened observers."
      }
    ]
  },
  6: {
    unit: 6,
    book: "First Flight Prose",
    title: "Chapter 6: Mijbil the Otter",
    author: "Gavin Maxwell — Human-Animal Companionship & Otter Mischief — CBSE Marking Scheme 2026-27",
    category: "FIRST FLIGHT PROSE",
    badge: "6",
    questions: [
      {
        id: "ff6_1",
        num: "Q1",
        marks: "3 Marks",
        text: "What 'experiment' did Maxwell contemplate? Why did he choose an otter instead of a dog?",
        answer: `<p>After his beloved dog Jonnie died, Maxwell felt heartbroken and unable to endure the pain of having another dog immediately. Since he lived in Camusfearna—a cottage surrounded by water on the Scottish coast—he decided as an experiment to keep an otter instead of a dog, as the watery habitat was ideally suited for a semi-aquatic mammal.</p>`,
        marking: [
          { key: "Experiment: Keeping an otter instead of a dog at Camusfearna cottage", marks: "1½ Marks" },
          { key: "Reason: Grief over dog Jonnie's death + watery location ideal for an otter", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff6_2",
        num: "Q2",
        marks: "3 Marks",
        text: "How did Maxwell obtain the otter in Basra? What was its zoological species name?",
        answer: `<p><strong>1. How Obtained:</strong> While in Basra collecting his mail from the consulate, Maxwell received a sack delivered by two Arab marsh-dwellers with a note from his friend saying: <em>'Here is your otter...'</em> Inside the squirming sack was an otter cub.</p><p><strong>2. Zoological Classification:</strong> The species was previously unknown to Western science and was later classified by zoologists as <em>Lutrogale perspicillata maxwelli</em>, commonly known as 'Maxwell's otter'.</p>`,
        marking: [
          { key: "Delivered by two Arabs in a squirming sack with a note from a friend", marks: "1½ Marks" },
          { key: "Species name: Lutrogale perspicillata maxwelli (Maxwell's otter)", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff6_3",
        num: "Q3",
        marks: "3 Marks",
        text: "What is an otter's characteristic relationship with water? How did Mijbil behave in the bathroom?",
        answer: `<p>To an otter, static water is an affront to nature; water must be kept on the move, splashed, plunged into, and made to overflow until the bowl or tub is dry. In the bathroom, Mijbil went wild with ecstasy in the bathtub, plunging, rolling, shooting up and down the length of the tub, and making splashes like a hippo. Two days later, he even learned to turn on the water tap with his paws to produce a flow.</p>`,
        marking: [
          { key: "Otter trait: Must keep water moving, splashing, and overflowing", marks: "1½ Marks" },
          { key: "Mijbil's bathtub acrobatics and learning to turn on the tap", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff6_4",
        num: "Q4",
        marks: "4 Marks",
        text: "Describe the traumatic journey of transporting Mijbil inside the box on the aircraft to England.",
        answer: `<p><strong>1. The Box Incident:</strong> The airline insisted that Mijbil be packed in a small box. Before going for a quick meal, Maxwell boxed him. Returning, he found complete silence and blood trickling from the air holes. Mijbil had shredded the zinc lining, cutting himself. Maxwell quickly cleaned the box with ten minutes left for the flight.</p><p><strong>2. Pandemonium on Flight:</strong> Inside the aircraft, Maxwell opened the lid slightly with the airhostess's permission. Mijbil shot out in a flash, disappearing beneath passengers' legs. A woman shrieked: <em>'A rat! A rat!'</em>, standing on her seat. Maxwell dove to catch him and got his face covered in curry. Finally, the kind airhostess helped, and Mijbil returned to sit happily on Maxwell's knees.</p>`,
        marking: [
          { key: "Box trauma: Shredded zinc lining, blood trickling, near missed flight", marks: "2 Marks" },
          { key: "Aircraft pandemonium: Screaming woman ('A rat!'), curry spill, safe return", marks: "2 Marks" }
        ]
      },
      {
        id: "ff6_5",
        num: "Q5",
        marks: "4 Marks",
        text: "What games did Mijbil invent? What were the wild guesses Londoners made about his identity?",
        answer: `<p><strong>1. Games Invented:</strong> Mijbil invented a game with a ping-pong ball on Maxwell's sloping suitcase lid. He would place the ball at the high end, run round to the other side, and pounce on it as it rolled down.</p><p><strong>2. Londoners' Wild Guesses:</strong> Londoners had never seen an otter and guessed wildly: a baby seal, a squirrel, a walrus, a beaver, a bear cub, a leopard, a brontosaurus, and even a hippopotamus! The most bizarre guess came from a laborer digging a trench who stared and asked: <em>'Here, mister—what is that supposed to be?'</em></p>`,
        marking: [
          { key: "Game: Ping-pong ball rolling down sloping suitcase lid", marks: "2 Marks" },
          { key: "Wild guesses: Seal, squirrel, walrus, beaver, bear cub, leopard, hippo", marks: "2 Marks" }
        ]
      }
    ],
    cbq: [
      {
        type: "Value-Based Reflection",
        color: "#0284c7",
        question: "How does the story highlight that loving an exotic animal requires immense patience, understanding of its natural instincts, and accommodation?",
        answer: "Gavin Maxwell demonstrates that genuine affection for an animal is not about dominance, but about empathy. He tolerated Mijbil's water splashes, chaotic bathroom rituals, damaged suitcases, and airport panics without anger. He understood that otters are semi-aquatic creatures driven by distinct evolutionary instincts. True pet ownership demands adapting one's lifestyle to the creature's welfare rather than forcing the wild animal to conform to rigid human rules."
      }
    ]
  },
  7: {
    unit: 7,
    book: "First Flight Prose",
    title: "Chapter 7: Madam Rides the Bus",
    author: "Vallikkannan — Innocence, Curiosity & The Mystery of Death — CBSE Marking Scheme 2026-27",
    category: "FIRST FLIGHT PROSE",
    badge: "7",
    questions: [
      {
        id: "ff7_1",
        num: "Q1",
        marks: "3 Marks",
        text: "What was Valli's favorite pastime? What was the source of her unending fascination?",
        answer: `<p>Valli (Valliammai), an eight-year-old girl, had no playmates of her own age on her street. Her favorite pastime was standing in the front doorway of her house, watching what was happening on the street outside. The most fascinating sight of all was the bus that traveled between her village and the nearest town, passing her street every hour with a fresh set of passengers.</p>`,
        marking: [
          { key: "Pastime: Standing in front doorway watching street life (no playmates)", marks: "1½ Marks" },
          { key: "Fascination: Hourly bus running between village and town with new travelers", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff7_2",
        num: "Q2",
        marks: "3 Marks",
        text: "How did Valli gather information and meticulously plan her bus journey?",
        answer: `<p>Valli listened intently to conversations between her neighbors and regular bus travelers, asking discreet questions. She discovered that the town was six miles away, the one-way fare was thirty paise, and the trip took forty-five minutes. She calculated that if she took the one o'clock bus, she would reach town at 1:45 and return home by 2:45, right during her mother's afternoon nap.</p>`,
        marking: [
          { key: "Information gathered: 6 miles distance, 30 paise fare, 45 minutes trip", marks: "1½ Marks" },
          { key: "Planning: Utilizing mother's 1:00 to 2:45 pm afternoon nap time", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff7_3",
        num: "Q3",
        marks: "3 Marks",
        text: "How did Valli save up sixty paise for the bus fare? What sacrifices did she make?",
        answer: `<p>Saving sixty paise was an immense feat of self-control for an eight-year-old. Valli painstakingly hoarded every stray stray coin that came her way, ruthlessly stifling every childish urge to buy peppermints, toys, balloons, and sweetmeats. At the village fair, she resisted the supreme temptation of the spinning merry-go-round, keeping her coins safe for the bus ride.</p>`,
        marking: [
          { key: "Hoarded every coin; resisted buying peppermints, toys, balloons", marks: "1½ Marks" },
          { key: "Supreme sacrifice: Resisted merry-go-round at village fair to save 60 paise", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff7_4",
        num: "Q4",
        marks: "2 Marks",
        text: "Why did the bus conductor address Valli as 'Madam'? How did she react?",
        answer: `<p>The bus conductor was a jolly, good-humored fellow. When Valli commanded the bus to stop, refused his hand to help her board, and said with haughty dignity that she could get on by herself with her own thirty paise, the amused conductor bowed politely and teased her by calling her 'Madam'. Valli reacted with sharp indignation, telling him curtly: <em>'I am not a madam!'</em></p>`,
        marking: [
          { key: "Conductor's joke at Valli's adult-like confidence, dignity, and independence", marks: "1 Mark" },
          { key: "Valli's indignant reaction insisting she was not a madam", marks: "1 Mark" }
        ]
      },
      {
        id: "ff7_5",
        num: "Q5",
        marks: "3 Marks",
        text: "Why didn't Valli get off the bus at the town? Why did she decline the conductor's offer of a cold drink?",
        answer: `<p><strong>1. Why She Stayed on the Bus:</strong> Valli's sole aim was to experience the bus ride itself. She did not have extra money to spend in the town and had to catch the same bus back before her mother awoke.</p><p><strong>2. Declining Cold Drink:</strong> When the conductor generously offered to buy her a cold drink, Valli politely yet firmly declined, stating that she only had money for her return ticket. This proved her extraordinary self-respect, caution, and discipline.</p>`,
        marking: [
          { key: "Sole goal was bus experience + lacked extra money and time", marks: "1½ Marks" },
          { key: "Declining drink demonstrated remarkable self-respect and boundaries", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff7_6",
        num: "Q6",
        marks: "6 Marks",
        text: "How did the sight of the dead cow shatter Valli's joyful enthusiasm? What deeper truth about life and death did she discover?",
        answer: `<p><strong>1. Joy on Onward Journey:</strong><br>On the way to town, Valli had laughed clapping her hands as a young cow, with its tail held high in the air, galloped frantically right in front of the bus. The more the driver honked, the faster the frightened animal ran, providing immense entertainment.</p><p><strong>2. Tragic Contrast on Return:</strong><br>On the return journey, Valli saw the same cow lying dead by the roadside, struck by a speeding vehicle, its legs stiffened and blood smeared around in a pool. The horrific sight chilled her heart. The creature that had been so full of life, beauty, and energy moments ago had suddenly been converted into a ghastly, lifeless carcass.</p><p><strong>3. Epiphany of Mortality:</strong><br>A profound gloom settled over Valli. She lost all desire to look out the window. The incident marked Valli's awakening to the fragile boundary between life and death. She realized that the adult world contained sudden, irreversible tragedies that childhood innocence cannot foresee.</p>`,
        marking: [
          { key: "Contrast: Galloping joyful cow on onward trip vs bloody dead carcass on return", marks: "2 Marks" },
          { key: "Psychological impact: Shock, gloom, withdrawal from window view", marks: "2 Marks" },
          { key: "Thematic revelation: Child's awakening to the mystery and fragility of mortality", marks: "2 Marks" }
        ]
      }
    ],
    cbq: [
      {
        type: "Competency-Based Evaluation",
        color: "#0284c7",
        question: "When Valli returns, her mother remarks: 'So many things in our midst and in the world outside... how can we know about everything?' Valli smiles knowingly. What does Valli's smile signify?",
        answer: "Valli's secret smile signifies her newly acquired maturity and adult perspective. Her mother spoke conceptually about how humans cannot know everything that happens in the world, but Valli had just tasted this reality firsthand through her secret solo adventure. Her smile represents the quiet pride of independence and the bittersweet knowledge of life and death that her mother knew nothing about."
      }
    ]
  },
  8: {
    unit: 8,
    book: "First Flight Prose",
    title: "Chapter 8: The Sermon at Benares",
    author: "Betty Renshaw — Impermanence, Enlightenment & Transcending Grief — CBSE Marking Scheme 2026-27",
    category: "FIRST FLIGHT PROSE",
    badge: "8",
    questions: [
      {
        id: "ff8_1",
        num: "Q1",
        marks: "3 Marks",
        text: "When and why did Prince Siddhartha Gautama renounce his royal life to seek enlightenment?",
        answer: `<p>At age twenty-five, while out hunting, Prince Siddhartha was shielded from human suffering by royal luxury. For the first time, he encountered four sights: a sick man, an aged man, a funeral procession, and finally a monk begging for alms. These sights of suffering moved him so deeply that he renounced his palace, wife, and child, wandering for seven years before attaining enlightenment under the Bodhi tree at Bodh Gaya.</p>`,
        marking: [
          { key: "Four sights: Sick man, aged man, funeral procession, begging monk", marks: "1½ Marks" },
          { key: "Transformation: Renounced kingdom, wandered 7 years, achieved enlightenment", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff8_2",
        num: "Q2",
        marks: "3 Marks",
        text: "Where did Buddha preach his first sermon, and why was this city chosen?",
        answer: `<p>Buddha preached his first sermon at the holy city of Benares (Varanasi), located on the sacred banks of the River Ganges. Benares was chosen because it was the most revered pilgrim center where thousands gathered seeking purification from sin, making it the most fertile ground to spread the noble truths of overcoming death and grief.</p>`,
        marking: [
          { key: "City: Benares (Varanasi) on the banks of River Ganga", marks: "1½ Marks" },
          { key: "Significance: Foremost sacred pilgrimage center for spiritual awakening", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff8_3",
        num: "Q3",
        marks: "3 Marks",
        text: "Why was Kisa Gotami grieving? What task did the Buddha assign to her?",
        answer: `<p><strong>1. Grief:</strong> Kisa Gotami was grieving the death of her only son. Paralyzed by grief, she carried the dead child to all her neighbors begging for medicine to bring him back to life.</p><p><strong>2. Buddha's Task:</strong> Buddha asked her to bring him a handful of mustard seeds from a household where no child, husband, parent, or friend had ever died.</p>`,
        marking: [
          { key: "Grief: Death of only son; seeking medicine to revive dead child", marks: "1½ Marks" },
          { key: "Condition: Handful of mustard seeds from a house that had never witnessed death", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff8_4",
        num: "Q4",
        marks: "3 Marks",
        text: "What realization dawned upon Kisa Gotami when she watched the city lights flicker and extinguish?",
        answer: `<p>Weary and hopeless after finding that every single household had lost a loved one, Kisa Gotami sat down at the wayside watching the lights of the city flicker up and extinguish into darkness. She suddenly realized the universal nature of mortality: human lives flicker up and are extinguished just like lamps. She realized how selfish she had been in her grief, recognizing that death is common to all mortals.</p>`,
        marking: [
          { key: "Analogy: City lights flickering up and extinguishing = human lives", marks: "1½ Marks" },
          { key: "Realization: Selfishness of personal grief; death is universal law for all mortals", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff8_5",
        num: "Q5",
        marks: "6 Marks",
        text: "According to the Buddha, how can a mortal overcome sorrow and attain peace of mind? Discuss his earthen vessel analogy.",
        answer: `<p><strong>1. The Nature of Mortality:</strong><br>The Buddha taught that the life of mortals in this world is troubled, brief, and combined with pain. Just as ripe fruits are in constant danger of falling, and just as all earthen vessels made by the potter end in being broken, so is the life of mortals subject to death. Neither father nor kinsmen can save anyone from death.</p><p><strong>2. Futility of Weeping:</strong><br>Weeping and grieving cannot restore the dead; instead, lamentation intensifies bodily pain, makes the mourner sick and pale, and torments one's own self without altering reality.</p><p><strong>3. Attaining Peace of Mind:</strong><br>To attain tranquility, a person must extract the arrow of lamentation, complaint, and grief. One who has overcome all sorrow becomes free from sorrow and attains true blessedness (Nirvana).</p>`,
        marking: [
          { key: "Analogies: Ripe fruits falling, earthen pots breaking = certainty of death", marks: "2 Marks" },
          { key: "Futility of lamentation: Increases pain, damages body, cannot revive dead", marks: "2 Marks" },
          { key: "Prescription for peace: Pull out arrow of grief, embrace detachment", marks: "2 Marks" }
        ]
      }
    ],
    cbq: [
      {
        type: "Philosophical & Psychological Application",
        color: "#0284c7",
        question: "How does Buddha's method of teaching Kisa Gotami prove that experiential learning is far more effective than direct philosophical lecturing?",
        answer: "If Buddha had directly lectured Kisa Gotami on the inevitability of death, her grief-stricken mind would have rejected his words as cold and unfeeling. By sending her on a personal quest to find a house untouched by death, Buddha allowed her to discover the universal reality through her own interactions. Experiencing the shared grief of dozens of families healed her solipsistic sorrow, proving that self-realization through guided experience is the ultimate pedagogical tool."
      }
    ]
  },
  9: {
    unit: 9,
    book: "First Flight Prose",
    title: "Chapter 9: The Proposal",
    author: "Anton Chekhov — Farce, Petty Ego & Mercenary Matrimony — CBSE Marking Scheme 2026-27",
    category: "FIRST FLIGHT PROSE",
    badge: "9",
    questions: [
      {
        id: "ff9_1",
        num: "Q1",
        marks: "3 Marks",
        text: "What does Chubukov initially suspect Lomov has come for? How does his demeanor change upon learning the true purpose?",
        answer: `<p>When Lomov arrives in formal evening dress with gloves, Chubukov immediately suspects that he has come to borrow money, secretly resolving: <em>'I won't give him any!'</em> However, when Lomov nervously reveals that he has come to ask for his daughter Natalya's hand in marriage, Chubukov is overjoyed. He embraces and kisses Lomov, sheds a happy tear, and enthusiastically blesses the match.</p>`,
        marking: [
          { key: "Initial suspicion: Suspected Lomov came to borrow money", marks: "1½ Marks" },
          { key: "Dramatic change: Overjoyed, kissing and blessing him for marriage proposal", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff9_2",
        num: "Q2",
        marks: "3 Marks",
        text: "Why does Lomov consider Natalya an ideal match for him? What physical ailments torment Lomov?",
        answer: `<p><strong>1. Practical Match:</strong> Lomov is thirty-five—a critical age—and seeks a quiet, regular domestic life. Natalya is twenty-five, an excellent housekeeper, educated, and not bad-looking, making her an ideal sensible match rather than a romantic passion.</p><p><strong>2. Lomov's Hypochondria:</strong> Lomov suffers from chronic palpitations, insomnia, trembling twitches, high blood pressure, and a jump in his left side whenever he lies down in bed.</p>`,
        marking: [
          { key: "Pragmatic reasons: Age 35, good housekeeper, educated, pleasant looks", marks: "1½ Marks" },
          { key: "Physical ailments: Palpitations, twitching, severe insomnia, panic attacks", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff9_3",
        num: "Q3",
        marks: "3 Marks",
        text: "How does the dispute over Oxen Meadows start and escalate into an ugly fight?",
        answer: `<p>While preparing to propose, Lomov mentions that his family's Oxen Meadows touch Natalya's birchwoods. Natalya vehemently objects, insisting the Meadows belong to her family. Lomov argues that his aunt's grandmother gave temporary use of the Meadows to Chubukov's grandfather's peasants in exchange for making bricks. The argument degenerates into hysterical screaming, accusations of usurpation, and threats of court action.</p>`,
        marking: [
          { key: "Origin: Casual mention of Oxen Meadows ownership touching birchwoods", marks: "1½ Marks" },
          { key: "Escalation: Brick-making history, calling each other land-grabbers, screaming", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff9_4",
        num: "Q4",
        marks: "3 Marks",
        text: "How does Natalya react when she learns that Lomov had come to propose marriage?",
        answer: `<p>When Chubukov insults Lomov and throws him out, he casually mentions that the 'fool' had come to propose to Natalya. The moment Natalya hears this, she falls into hysterical screaming, turns pale, collapses into an armchair, and orders her father: <em>'Bring him back! Bring him here! Ah! Bring him back!'</em> She forgets all territorial pride and desperately demands her suitor's return.</p>`,
        marking: [
          { key: "Shock and instant hysterics upon learning of the marriage proposal", marks: "1½ Marks" },
          { key: "Frantic demand to bring Lomov back immediately, abandoning property fight", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff9_5",
        num: "Q5",
        marks: "3 Marks",
        text: "What sparks the second bitter quarrel between Lomov and Natalya?",
        answer: `<p>After Lomov returns, they reconcile over the Meadows, but within minutes enter a second fierce quarrel regarding their hunting dogs. Lomov boasts that his dog <strong>Guess</strong> cost 125 roubles and is first-rate, while Natalya claims her dog <strong>Squeezer</strong>, bought for 85 roubles, is far superior. They insult the pedigree, jaws, and speed of each other's dogs until Lomov collapses unconscious.</p>`,
        marking: [
          { key: "Subject: Comparison of hunting dogs (Lomov's Guess vs Natalya's Squeezer)", marks: "1½ Marks" },
          { key: "Escalation: Insulting breeding, overshooting, leading to Lomov's collapse", marks: "1½ Marks" }
        ]
      },
      {
        id: "ff9_6",
        num: "Q6",
        marks: "6 Marks",
        text: "How is 'The Proposal' a brilliant satire on 19th-century Russian landowning aristocracy? Describe the farcical climax.",
        answer: `<p><strong>1. Satire on Commercial Marriage:</strong><br>Chekhov satirizes the mercenary nature of marriage among wealthy Russian landowners. Marriage was viewed not as a sacred emotional union, but as an economic alliance to consolidate estates and wealth. Lomov chooses Natalya out of pragmatic convenience, while Natalya's romantic yearning instantly overrides her moral principles.</p><p><strong>2. Petty Pride and Ego:</strong><br>Despite desperate desire to wed, both characters are hopelessly quarrelsome and vain. Over worthless scraps of marshland ('Oxen Meadows') and dogs ('Guess' vs 'Squeezer'), they exchange venomous personal insults involving ancestors, embezzlements, and lunacy.</p><p><strong>3. Farcical Climax:</strong><br>When Lomov collapses and appears dead, Chubukov panics, fearing a ruined match and police inquiries. When Lomov stirs, Chubukov hurriedly thrusts Natalya's hand into his, shouting: <em>'She's willing! Kiss each other and be damned!'</em> Even while kissing, Natalya immediately reignites the dog argument, shouting: <em>'He's worse!'</em> to which Chubukov shouts: <em>'Champagne! Champagne!'</em> to drown their shouting.</p>`,
        marking: [
          { key: "Satire on mercenary marriage alliances in 19th-century Russian aristocracy", marks: "2 Marks" },
          { key: "Ridiculous pettiness over insignificant property and hunting dogs", marks: "2 Marks" },
          { key: "Farcical climax: Forced engagement while shouting insults over champagne", marks: "2 Marks" }
        ]
      }
    ],
    cbq: [
      {
        type: "Dramatic & Thematic Critique",
        color: "#0284c7",
        question: "Why did Chekhov subtitle 'The Proposal' as 'A Farce'? What elements of farce dominate the play?",
        answer: "A farce is a comic dramatic work using buffoonery, horseplay, crude characterizations, and ludicrously improbable situations. 'The Proposal' fits this definition completely: exaggerated hypochondria (Lomov trembling, palpitating, collapsing), sudden mood swings (Natalya screaming hysterically to fetch back a man she just called a villain), Chubukov threatening suicide one second and demanding champagne the next, and an engagement sealed amidst screaming arguments."
      }
    ]
  }
};

module.exports = { PROSE_CHAPTERS };
