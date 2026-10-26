// Generator for Full Class 6 English Classic (15 Chapters: 8 Honeysuckle + 7 A Pact with the Sun) Data
const fs = require('fs');
const path = require('path');

const englishClassicChapters = [
  // Honeysuckle (8 Units)
  {
    num: 1,
    id: "ch_ce1",
    book: "Honeysuckle",
    title: "Who Did Patrick's Homework? & A House, A Home",
    desc: "Prose by Carol Moore & Poem by Lorraine M. Halli. Theme: Self-help, diligence, true meaning of family affection vs brick and mortar walls.",
    concepts: [
      "Patrick hates homework, finds an elf (little man in woollen shirt).",
      "The elf demands Patrick's help in dictionary lookups, maths tables, and history research.",
      "Patrick does all the work himself, scores Grade A, develops self-reliance.",
      "Poem contrasting House (unfeeling physical construction: bricks, stone, wood, glass) and Home (loving family, unselfish acts of caring)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="220" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="140" y="45" font-family="sans-serif" font-size="12" font-weight="700" fill="#1d4ed8" text-anchor="middle">A House (Physical)</text><text x="140" y="65" font-family="sans-serif" font-size="10" fill="#1e40af" text-anchor="middle">Brick, stone, hard wood, glass</text><rect x="290" y="20" width="220" height="60" rx="8" fill="#fdf2f8" stroke="#db2777" stroke-width="2"/><text x="400" y="45" font-family="sans-serif" font-size="12" font-weight="700" fill="#9d174d" text-anchor="middle">A Home (Emotional)</text><text x="400" y="65" font-family="sans-serif" font-size="10" fill="#be185d" text-anchor="middle">Loving family, selfless sharing</text></svg>`,
    questions: [
      {
        num: 1,
        title: "What did Patrick think his cat was playing with? What was it really? Why did the little man grant Patrick a wish?",
        marks: 3,
        ans: "<strong>Comprehension Answers:</strong><br>• Patrick thought his cat was playing with a small doll. It was really a tiny man of the elf species dressed in a woollen shirt with old-fashioned breeches and a high tall hat.<br>• The little elf granted Patrick a wish because Patrick saved him from the cat, and the elf desperately did not want to be handed back to the feline predator.",
        rubric: [{ key: "Cat playing with an elf, not doll", marks: "1.5 Marks" }, { key: "Wish granted for saving elf from cat", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Who do you think did Patrick’s homework — the little man, or Patrick himself? Give reasons for your answer.",
        marks: 3,
        ans: "<strong>Character Analysis:</strong><br>In reality, <strong>Patrick himself did all the homework</strong>. The elf was completely ignorant of human academics—he didn't know words and asked Patrick to look up dictionaries; he didn't know addition, subtraction, or multiplication tables, requiring Patrick to sit beside him and guide him continuously; and in human history, he shrieked with confusion, making Patrick read thick library books late into the night. Thus, through the elf's pretension, Patrick studied harder than ever and transformed into a model student.",
        rubric: [{ key: "Decisive conclusion that Patrick did the work", marks: "1 Mark" }, { key: "Evidence from dictionary, arithmetic, and history", marks: "2 Marks" }]
      },
      {
        num: 3,
        title: "According to the poet Lorraine M. Halli, what is the difference between 'a house' and 'a home'?",
        marks: 3,
        ans: "<strong>Poetic Analysis:</strong><br>• <strong>A House:</strong> A lifeless physical structure made of bricks, mortar, stone, hardwood, chimneys, tile floors, stuccos, roof, and doors.<br>• <strong>A Home:</strong> A warm, vibrant emotional sanctuary made of loving parents, brothers, and sisters who perform unselfish acts, care for one another, and show genuine kindness and togetherness.",
        rubric: [{ key: "Physical description of house", marks: "1.5 Marks" }, { key: "Emotional and relational description of home", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Pedagogical Case Study: Self-Directed Learning & Growth Mindset",
      question: "Patrick transformed from a child avoiding homework to an enthusiastic student receiving Grade A's. (a) What psychological mechanism drove Patrick to work hard without realizing it? (b) How does this story illustrate the famous proverb 'Self-help is the best help'?",
      answer: "<strong>(a) Mechanism:</strong> Intrinsic agency and responsibility—by believing he was 'guiding and helping' the helpless elf, Patrick took full ownership of learning rather than feeling coerced by external adult authority.<br><strong>(b) Proverb Link:</strong> True competence and mastery cannot be gifted by magical external shortcuts; genuine success requires sustained personal effort, discipline, and self-reliance."
    }
  },
  {
    num: 2,
    id: "ch_ce2",
    book: "Honeysuckle",
    title: "How the Dog Found Himself a New Master! & The Kite",
    desc: "Folklore of Dog's servitude journey (Wolf -> Bear -> Lion -> Man) & Harry Behn's vivid verse on a soaring kite.",
    concepts: [
      "Originally dogs were wild, free, and masters of themselves.",
      "A tired dog seeks the strongest creature on earth for security: leaves Wolf for Bear, leaves Bear for Lion, and leaves Lion for Man when he realizes Lion fears humans.",
      "Since that day, the dog stays as man's most loyal friend and servant.",
      "Poem 'The Kite': Dynamic motion of a new kite in blue sky (dives, dips, snaps tail, soars like a ship with a sail)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="500" height="60" rx="8" fill="#f8fafc" stroke="#475569" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">Dog's Quest for the Strongest Master on Earth</text><text x="75" y="65" font-family="sans-serif" font-size="11" fill="#dc2626">Wolf (Fears Bear)</text><text x="195" y="65" font-family="sans-serif" font-size="11" fill="#ea580c">-> Bear (Fears Lion)</text><text x="325" y="65" font-family="sans-serif" font-size="11" fill="#ca8a04">-> Lion (Fears Man)</text><text x="445" y="65" font-family="sans-serif" font-size="11" font-weight="700" fill="#16a34a">-> Man (Supreme)</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Why did the dog feel the need for a master? Who did he first choose as his master, and why did he leave him?",
        marks: 3,
        ans: "<strong>Comprehension:</strong><br>• The dog was sick and tired of wandering about alone looking for food, and being frightened of beasts stronger than himself. He decided to become servant to the strongest creature on earth.<br>• He first chose a big, fierce <strong>Wolf</strong> as his master. He left the wolf upon seeing him tremble in fear of a Bear, realizing the bear was stronger than the wolf.",
        rubric: [{ key: "Dog's motivation: food and security", marks: "1.5 Marks" }, { key: "First master wolf and reason for leaving", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Why did the dog serve the lion for a long time? Why did he finally leave the lion?",
        marks: 3,
        ans: "<strong>Narrative Progression:</strong><br>• The dog served the Lion for a long time because the Lion was the king of beasts, the strongest creature in the jungle. No animal dared offend the dog or harm him, giving him a safe and comfortable life.<br>• One day, while walking along a cliff path, the lion halted, sniffed the air, and warned the dog to run because he smelled a <strong>Man</strong> coming. Realizing that Man was stronger than even the mighty Lion, the dog left the lion to serve Man.",
        rubric: [{ key: "Long service to lion due to fearlessness and security", marks: "1.5 Marks" }, { key: "Lion fearing human scent leading to dog choosing man", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Animal Ethology & Domestication History",
      question: "Scientists consider the wolf the wild ancestor of the domestic dog (Canis familiaris). (a) How does this ancient fable poetically mirror the real evolutionary domestication of dogs by early hunter-gatherers? (b) Name two qualities of dogs that made them invaluable partners for early human survival.",
      answer: "<strong>(a) Historical Domestication:</strong> Early wolves that were less aggressive scavenged near hunter-gatherer camps for leftover scraps of meat, gradually trading their wild independence for human companionship, protection, and consistent nutrition.<br><strong>(b) Invaluable Qualities:</strong> Acute sense of smell and hearing for tracking prey/alerting against predators, and instinctive loyalty and pack protectiveness."
    }
  },
  {
    num: 3,
    id: "ch_ce3",
    book: "Honeysuckle",
    title: "Taro's Reward & The Quarrel",
    desc: "Japanese moral tale of filial devotion rewarded by nature & Eleanor Farjeon's poem on sibling quarrels.",
    concepts: [
      "Taro, a poor young woodcutter, works tirelessly to buy warm 'sake' for his aged shivering father.",
      "A magical waterfall pours delicious warm sake for Taro, but only plain cold water for greedy villagers.",
      "The Emperor of Japan rewards Taro with twenty pieces of gold and names the most beautiful fountain after him to encourage filial piety.",
      "Poem 'The Quarrel': Sibling disputes start over trivial matters, turn bitter, and dissolve when someone humbly takes the initiative to reconcile."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#14532d" text-anchor="middle">Moral Principle: Nature Rewards Selfless Devotion</text><text x="270" y="65" font-family="sans-serif" font-size="11" fill="#15803d" text-anchor="middle">Warm Sake for Filial Taro vs Plain Cold Water for Greedy Villagers</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Why did Taro run in the direction of the stream? Why did the waterfall give Taro sake and others water?",
        marks: 3,
        ans: "<strong>Comprehension:</strong><br>• Taro ran towards the stream because he was extremely thirsty after chopping wood, and he had never heard or seen a rushing stream in that part of the forest before.<br>• The magical waterfall gave Taro delicious sake because he was a thoughtful, loving son whose sole intention was to warm his aged father's heart. To the greedy villagers who came with pitchers purely for selfish luxury, the waterfall gave only cold water.",
        rubric: [{ key: "Thirst and unexpected sound of stream", marks: "1.5 Marks" }, { key: "Contrast between Taro's filial love vs villagers' greed", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Why did the Emperor of Japan reward Taro with gold and name the fountain after him?",
        marks: 3,
        ans: "<strong>Moral Significance:</strong><br>The Emperor rewarded Taro with twenty pieces of gold for being so good and kind, and named the fountain after him to encourage all children in the empire to respect, obey, and care for their parents with devotion.",
        rubric: [{ key: "Twenty pieces of gold reward", marks: "1.5 Marks" }, { key: "Inspirational message for all children in the realm", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Family Values & Social Ethics: Care for the Elderly",
      question: "Modern families face busy schedules that often isolate senior citizens. (a) What timeless cultural lesson does Taro's story impart to modern youth? (b) In the poem 'The Quarrel', why is admitting fault considered a sign of emotional strength rather than weakness?",
      answer: "<strong>(a) Care for Elderly:</strong> Respect and proactive care for aging parents is a supreme moral duty; true honor and contentment stem from selfless familial affection.<br><strong>(b) Sibling Reconciliation:</strong> It takes emotional maturity to swallow one's pride and say 'Come along, we can't go on like this all night; I was in the wrong,' ending petty resentment and healing relationships."
    }
  },
  {
    num: 4,
    id: "ch_ce4",
    book: "Honeysuckle",
    title: "An Indian-American Woman in Space: Kalpana Chawla & Beauty",
    desc: "Biography of astronaut Kalpana Chawla (Columbia STS-107) & E-Yeh-Shure's lyrical ode to beauty.",
    concepts: [
      "Kalpana Chawla: Born in Karnal, Haryana; aeronautical engineer from Punjab Engineering College; NASA astronaut.",
      "First Indian-born woman in space aboard Space Shuttle Columbia in 1997; tragic disintegration of STS-107 in 2003.",
      "Inspirational message from space: 'The path from dreams to success does exist. May you have the vision to find it, the courage to get on to it...'",
      "Poem 'Beauty': Beauty is seen in sunlight, corn growing; heard in wind, rain, singer chanting; and felt in good deeds and happy thoughts."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle">Kalpana Chawla's Cosmic Journey: From Karnal to the Stars</text><text x="270" y="65" font-family="sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Pioneering Aerospace Scientist • NASA Astronaut • Global Trailblazer</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Where was Kalpana Chawla born? Why is she called an Indian-American? What was her message to students from space?",
        marks: 3,
        ans: "<strong>Biographical Details:</strong><br>• Kalpana was born in <strong>Karnal, Haryana</strong>, India.<br>• She is called an Indian-American because she was born in India and graduated with an engineering degree there, but later immigrated to the United States, married flight instructor Jean-Pierre Harrison, and became a naturalized US citizen.<br>• Her message from Columbia: <em>'The path from dreams to success does exist. May you have the vision to find it, the courage to get on to it, and the perseverance to follow it.'</em>",
        rubric: [{ key: "Karnal birth and naturalized US citizenship", marks: "1.5 Marks" }, { key: "Accurate inspirational quote from orbit", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "According to the poet E-Yeh-Shure, where can beauty be seen, heard, and felt?",
        marks: 3,
        ans: "<strong>Poetic Interpretation:</strong><br>• <strong>Seen:</strong> In the sunlight, trees, birds, growing corn, and hardworking farmers dancing for their harvest.<br>• <strong>Heard:</strong> In the night, when wind sighs, rain falls, or a singer chants in earnest.<br>• <strong>Felt in Oneself:</strong> In good deeds, noble actions, and happy thoughts that repeat in our dreams, work, and quiet moments.",
        rubric: [{ key: "Visual beauty in nature and human effort", marks: "1 Mark" }, { key: "Auditory beauty in wind, rain, song", marks: "1 Mark" }, { key: "Inner beauty in good deeds and conscience", marks: "1 Mark" }]
      }
    ],
    cbq: {
      title: "STEM Education & Women in Aerospace Engineering",
      question: "Despite facing conservative societal reservations against female higher education in aeronautics, Kalpana Chawla persevered. (a) What qualities of character enabled her to achieve her dream? (b) How does she continue to inspire young girls in developing nations?",
      answer: "<strong>(a) Qualities:</strong> Unshakable determination, intellectual discipline, boundless curiosity about aviation, and the courage to chart an unprecedented career path.<br><strong>(b) Inspiration:</strong> She proved that geographical, economic, and gender barriers can be overcome through dedication, establishing that the sky is not the limit—it is only the beginning."
    }
  },
  {
    num: 5,
    id: "ch_ce5",
    book: "Honeysuckle",
    title: "A Different Kind of School & Where Do All the Teachers Go?",
    desc: "E.V. Lucas's profile of Miss Beam's inclusive school & Peter Dixon's whimsical verse on teachers.",
    concepts: [
      "Miss Beam's school: Teaches standard arithmetic and spelling, but primary aim is to teach 'thoughtfulness, kindness to others, and being responsible citizens.'",
      "Experiential Empathy Days: Blind day (eyes bandaged), Lame day (leg tied up), Deaf day, Maimed day, Dumb day (willpower required).",
      "Students realize how fortunate they are and develop profound, lifelong compassion for differently-abled people.",
      "Poem 'Where Do All the Teachers Go?': A child's humorous wonder if teachers are ordinary human beings who wear pyjamas and watch TV."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#fdf4ff" stroke="#c026d3" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#701a75" text-anchor="middle">Miss Beam's Empathy Curriculum</text><text x="270" y="65" font-family="sans-serif" font-size="11" fill="#a21caf" text-anchor="middle">Blind Day • Lame Day • Deaf Day • Maimed Day • Dumb Day</text></svg>`,
    questions: [
      {
        num: 1,
        title: "What was the 'game' that every child in the school had to play? Which day was the hardest and why?",
        marks: 3,
        ans: "<strong>Empathy Curriculum:</strong><br>• Every term, every child had one Blind day, one Lame day, one Deaf day, one Maimed day, and one Dumb day to give them a real, personal understanding of misfortune.<br>• <strong>The Blind day</strong> was by far the hardest because you felt you were going to be hit by something every moment; walking required constant guidance, and keeping eyes bandaged all night made you wake up in terrifying darkness.",
        rubric: [{ key: "Listing the special disability experience days", marks: "1.5 Marks" }, { key: "Explaining why blind day was the most psychologically challenging", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "What did the author learn during his visit to Miss Beam’s school?",
        marks: 3,
        ans: "<strong>Author's Epiphany:</strong><br>The author realized that true education is not merely cramming facts or scoring high marks, but cultivating <strong>kindness, deep empathy, and civic responsibility</strong>. By guiding a blindfolded girl, the author discovered he had become ten times more thoughtful and compassionate than when he arrived.",
        rubric: [{ key: "True meaning of education beyond test scores", marks: "1.5 Marks" }, { key: "Author's personal realization of becoming ten times more thoughtful", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Inclusive Pedagogy & NEP 2020 Empathy Education",
      question: "Modern educational reforms emphasize value-based education and social-emotional learning (SEL). (a) How does Miss Beam's method cultivate empathy far more effectively than reading textbook chapters on disability? (b) How can schools implement similar inclusive initiatives today?",
      answer: "<strong>(a) Experiential Learning:</strong> Reading about a handicap is intellectual; experiencing visual sensory deprivation or physical immobility for an entire day evokes visceral empathy, dispelling pity and instilling genuine respect and understanding.<br><strong>(b) School Initiatives:</strong> Organizing disability sensitization workshops, peer mentorship with neurodivergent students, and making campuses 100% accessible with ramps and braille signage."
    }
  },
  {
    num: 6,
    id: "ch_ce6",
    book: "Honeysuckle",
    title: "Who I Am & The Wonderful Words",
    desc: "Multiple intelligences of children (Kalpana, Peter, Serbjit, Dolma, Radha) & Mary O'Neill's poem on expressive power of language.",
    concepts: [
      "Everyone is unique: Radha loves climbing trees; Nasir wants to preserve cotton seeds; Rohit loves traveling; Serbjit gets angry when disbelieved; Dolma aspires to be Prime Minister; Peter loves cinema days.",
      "Howard Gardner's Multiple Intelligences: Visual, Spatial, Bodily-Kinesthetic, Interpersonal, Naturalist, Linguistic.",
      "Poem 'The Wonderful Words': Words are food and dress of thought; never let a noble thought shrivel for lack of vocabulary; words give wings to ideas."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Every Child is Unique: Celebrating Diverse Talents</text><text x="270" y="65" font-family="sans-serif" font-size="10" fill="#1d4ed8" text-anchor="middle">Tree Climber • Agronomist • Explorer • Leader • Philanthropist • Film Lover</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Match the child with their unique aspiration/nature: (a) Peter (b) Nasir (c) Dolma (d) Serbjit. What makes Serbjit angry?",
        marks: 3,
        ans: "<strong>Child Profiles:</strong><br>• (a) Peter: Loves going to the cinema on the second Sunday of every month.<br>• (b) Nasir: Wants to learn how to collect and preserve cotton seeds like his grandfather.<br>• (c) Dolma: Confidently dreams of becoming the Prime Minister of India to help everyone.<br>• (d) Serbjit: Gets furious when people—teachers or parents—do not believe him when he is telling the absolute truth.",
        rubric: [{ key: "Correct matching of all four profiles", marks: "2 Marks" }, { key: "Explaining Serbjit's anger when disbelieved", marks: "1 Mark" }]
      },
      {
        num: 2,
        title: "According to Mary O’Neill in 'The Wonderful Words', why should we never let a thought shrivel and die? What are words called?",
        marks: 3,
        ans: "<strong>Poem Analysis:</strong><br>• We should never let a thought shrivel and die for want of a way to express it, because English is a wonderful game and all of us can play it by finding the right words to match the brightest thoughts in our head.<br>• The poet calls words the <strong>'food and dress of thought'</strong> that give them their body, vitality, and power to move minds.",
        rubric: [{ key: "Finding right words for noble thoughts", marks: "1.5 Marks" }, { key: "Explanation of 'food and dress of thought'", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Diversity & Talent Identification in Classrooms",
      question: "In a classroom where one student struggles in written exams but excels in athletics or public debate: (a) How does the chapter 'Who I Am' advocate against judging all fish by their ability to climb trees? (b) How can educators nurture varied vocations?",
      answer: "<strong>(a) Celebrating Neurodiversity:</strong> Human potential is multi-dimensional; reducing a child's worth to arithmetic or rote grammar overlooks spatial, naturalistic, and leadership geniuses like Nasir and Dolma.<br><strong>(b) Inclusive Nurturing:</strong> Provide diverse club platforms (robotics, organic gardening, theatre, debate) alongside academic curricula."
    }
  },
  {
    num: 7,
    id: "ch_ce7",
    book: "Honeysuckle",
    title: "Fair Play",
    desc: "Munshi Premchand's classic story of Jumman Shaikh and Algu Chowdhry. The sacred voice of the Panch: Justice rises above personal friendship.",
    concepts: [
      "Jumman Shaikh and Algu Chowdhry share a deep, exemplary friendship.",
      "Jumman mistreats his old aunt after transferring her property; she calls a village Panchayat.",
      "Algu is nominated as Head Panch and delivers an impartial verdict ordering Jumman to pay a monthly allowance, straining their friendship.",
      "Later, when Algu is cheated by Samjhu Sahu over a dying bullock, Jumman becomes Head Panch and realizes that a judge represents divine justice ('The voice of the Panch is the voice of God').",
      "Justice triumphs, and their friendship is restored on the rock of righteousness."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#78350f" text-anchor="middle">Core Moral of Fair Play (Munshi Premchand)</text><text x="270" y="65" font-family="sans-serif" font-size="12" font-weight="800" fill="#b45309" text-anchor="middle">"The Voice of the Panch is the Voice of God"</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Why did Jumman's aunt approach the village Panchayat? What was Algu's verdict, and how did it affect their friendship?",
        marks: 3,
        ans: "<strong>Plot Narrative:</strong><br>• The aunt had transferred her ancestral property to Jumman on the condition that he would look after her. However, after a few years, Jumman and his wife treated her with disdain and refused to feed her properly. When denied a small cooking allowance, she appealed to the Panchayat.<br>• Algu Chowdhry ruled that Jumman must pay his aunt a monthly allowance or return her property. This impartial verdict enraged Jumman, who viewed Algu as a traitor, and their friendship snapped.",
        rubric: [{ key: "Aunt's mistreatment over property", marks: "1.5 Marks" }, { key: "Algu's impartial ruling and broken friendship", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "How did Jumman react when he sat in the seat of the Head Panch in the dispute between Algu and Samjhu Sahu?",
        marks: 3,
        ans: "<strong>Judicial Realization:</strong><br>The moment Jumman was appointed Head Panch, he felt the heavy moral weight and sacred responsibility of his office. He realized that sitting on the seat of justice, he could not allow his personal desire for revenge against Algu to taint his judgment. He examined the facts objectively and ruled that Samjhu Sahu must pay Algu the full price of the bullock, proclaiming that justice has neither friend nor enemy.",
        rubric: [{ key: "Sacred dignity and responsibility of judge's seat", marks: "1.5 Marks" }, { key: "Verdict in favour of Algu proving justice rises above grudge", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Judicial Ethics & Grassroots Democratic Conflict Resolution",
      question: "Panchayati Raj relies on peer consensus and moral integrity. (a) What makes the seat of a judge sacred in democratic jurisprudence? (b) How does this story prove that genuine friendship must be anchored in truth rather than complicity in wrongdoing?",
      answer: "<strong>(a) Sacred Judicial Seat:</strong> A judge represents impartial cosmic law and constitutional equality; personal enmities and biases must dissolve before objective truth.<br><strong>(b) Ethical Friendship:</strong> True friendship holds peers accountable to justice; supporting a friend in cruelty or corruption destroys both souls."
    }
  },
  {
    num: 8,
    id: "ch_ce8",
    book: "Honeysuckle",
    title: "A Game of Chance & Vocation",
    desc: "Rasheed's lesson on fraudulent village fair games & Rabindranath Tagore's poem on childlike admiration for street vocations.",
    concepts: [
      "Rasheed attends the Eid fair with uncle and servant Bhaiya.",
      "At the 'Lucky Shop', an old man and boy win valuable clocks and fountain pens; tempted, Rasheed plays and loses all his pocket money on trivial combs and pencils.",
      "Uncle explains that the winners were shopkeeper's accomplices staging a scam to fool greedy customers.",
      "Poem 'Vocation': A schoolboy admires the freedom of the hawker selling bangles, the gardener digging flowerbeds, and the watchman swinging his lantern at night."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Lessons in Critical Thinking: Resisting Illusory Luck</text><text x="270" y="65" font-family="sans-serif" font-size="10" fill="#1d4ed8" text-anchor="middle">The Lucky Shop Scam • Consumer Awareness • Tagore's 'Vocation'</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Why was the shop called 'Lucky Shop'? How was Rasheed tricked by the shopkeeper?",
        marks: 3,
        ans: "<strong>Consumer Scam Analysis:</strong><br>• The shop was called 'Lucky Shop' because customers paid 50 paise to pick six numbered discs, added their total, and claimed the item bearing that number—allegedly testing pure fortune.<br>• Rasheed was tricked because the shopkeeper had planted colluding confederates (an old man and a boy) who 'won' expensive clocks and ink pens, pretending to be ordinary customers. Greedy to win similar treasures, Rasheed kept betting his coins and lost all his savings on worthless trinkets.",
        rubric: [{ key: "Operation of lucky shop discs", marks: "1.5 Marks" }, { key: "Planted accomplices creating false optimism", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "In the poem 'Vocation', what three people does the child notice on his daily routine, and why does he envy them?",
        marks: 3,
        ans: "<strong>Poetic Analysis:</strong><br>1. <strong>The Hawker:</strong> Crying 'Bangles, crystal bangles!'—envied because he has no hurried schedule, no road he must take, and no fixed time to go home.<br>2. <strong>The Gardener:</strong> Digging ground in the afternoon—envied because he soils his clothes with mud and bakes in the sun without anyone scolding him.<br>3. <strong>The Watchman:</strong> Walking the dark lane at night swinging his lantern—envied because he wanders lonely streets all night chasing shadows instead of being forced to sleep in bed.",
        rubric: [{ key: "Identifying hawker, gardener, and watchman", marks: "1.5 Marks" }, { key: "Explaining the child's longing for perceived freedom", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Consumer Rights & Financial Literacy for Youth",
      question: "Online gaming apps and carnival booths often utilize psychological hooks similar to the 'Lucky Shop'. (a) How does the concept of 'variable rewards' trick young players into compulsive spending? (b) What advice did Uncle give Rasheed to deal with embarrassment?",
      answer: "<strong>(a) Variable Rewards Scam:</strong> Occasional small wins release dopamine, creating an illusion of skill and imminent jackpot that overrides rational financial calculation.<br><strong>(b) Uncle's Wisdom:</strong> Uncle told Rasheed never to feel foolish or talk about his bad luck, explaining that it was not bad luck but deliberate dishonesty by cheats, teaching him a valuable lifelong lesson in financial caution."
    }
  },

  // A Pact with the Sun (7 Chapters)
  {
    num: 9,
    id: "ch_ce9",
    book: "A Pact with the Sun",
    title: "A Tale of Two Birds",
    desc: "Folklore of twin birds separated by a storm: one raised in a robbers' cave, the other in a hermitage. 'A person is known by the company they keep.'",
    concepts: [
      "A mother bird dies in a thunderstorm; two babies fall into different locations.",
      "One falls near a cave of robbers; the second falls near a sage's ashram.",
      "A king loses his way in the forest; the first bird shouts 'Quick, hurry, someone is under the tree! Come and take his jewels and his horse!'",
      "The second bird welcomes the king warmly: 'Welcome to the ashram, Sir. Please go inside and rest. The rishi will be back soon.'",
      "The Rishi explains: 'One is known by the company one keeps. The first bird repeats what he hears from robbers; this one welcomes guests with ashram grace.'"
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="220" height="60" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="140" y="45" font-family="sans-serif" font-size="12" font-weight="700" fill="#b91c1c" text-anchor="middle">Robbers' Cave</text><text x="140" y="65" font-family="sans-serif" font-size="10" fill="#991b1b" text-anchor="middle">Learns hostility and looting</text><rect x="290" y="20" width="220" height="60" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="400" y="45" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803d" text-anchor="middle">Rishi's Ashram</text><text x="400" y="65" font-family="sans-serif" font-size="10" fill="#166534" text-anchor="middle">Learns courtesy and hospitality</text></svg>`,
    questions: [
      {
        num: 1,
        title: "How did the two baby birds get separated? What did the first bird say to the King? What did the second bird say?",
        marks: 3,
        ans: "<strong>Comprehension:</strong><br>• A violent thunderstorm uprooted their tall nest-tree and killed the mother bird. Strong gale winds blew the twin chicks across the forest to opposite locations.<br>• The first bird called out to robbers: <em>'Quick! Hurry up! There’s someone under the tree! Come and take his jewels and his horse!'</em><br>• The second bird spoke gently: <em>'Welcome to the ashram, Sir. Please go inside and rest. The rishi will be back soon. There is cold water in the pot, please drink and make yourself comfortable.'</em>",
        rubric: [{ key: "Separation in storm", marks: "1 Mark" }, { key: "First bird's aggressive calls", marks: "1 Mark" }, { key: "Second bird's courteous welcome", marks: "1 Mark" }]
      },
      {
        num: 2,
        title: "How did the Rishi explain the contrasting behaviour of the two birds to the King?",
        marks: 3,
        ans: "<strong>Moral Epiphany:</strong><br>The holy Rishi smiled and explained that each bird was simply reflecting the environment in which it grew up. The first bird had constantly heard the vulgar curses and plotting of highway thieves, so he imitated them. The second bird had always listened to prayers, peaceful chanting, and welcoming blessings in the hermitage, so he repeated courteous greetings. The Rishi concluded: <strong>'A person is known by the company he keeps.'</strong>",
        rubric: [{ key: "Environmental influence explanation", marks: "1.5 Marks" }, { key: "Universal proverb formulation", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Sociology & Peer Group Dynamics",
      question: "Psychologists stress that peer circles shape adolescent values. (a) How does this ancient Panchatantra fable illustrate the social-learning theory? (b) How can young students actively cultivate positive peer environments?",
      answer: "<strong>(a) Social Learning Theory:</strong> Human behavior, speech, and moral instincts are acquired predominantly through observational imitation of one's closest daily social circle.<br><strong>(b) Positive Cultivation:</strong> Choose friendships based on empathy, intellectual curiosity, and honesty rather than superficial bravado."
    }
  },
  {
    num: 10,
    id: "ch_ce10",
    book: "A Pact with the Sun",
    title: "The Friendly Mongoose",
    desc: "Tragedy of hasty judgment: A farmer's wife rashly kills their loyal mongoose, mistaking snake blood for infant blood.",
    concepts: [
      "A farmer brings a baby mongoose home as a future companion for his infant son.",
      "The wife remains suspicious of the wild creature.",
      "While the parents are away, a venomous black cobra crawls towards the baby's cradle.",
      "The loyal mongoose fights bravely, kills the snake, and saves the child.",
      "Seeing the mongoose's bloody paws, the wife rashly assumes it attacked her baby and smashes her heavy water pitcher on it.",
      "Upon entering the nursery, she discovers the sleeping baby and the torn cobra, weeping in inconsolable remorse over her haste."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#991b1b" text-anchor="middle">Moral Warning: Look Before You Leap</text><text x="270" y="65" font-family="sans-serif" font-size="11" fill="#b91c1c" text-anchor="middle">Hasty anger and unverified assumptions bring lifelong grief</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Why did the farmer’s wife strike the mongoose with her heavy basket of groceries? What did she see when she went inside?",
        marks: 3,
        ans: "<strong>Tragic Misjudgment:</strong><br>• When the farmer's wife returned from the market, the mongoose ran to welcome her at the doorstep with its mouth and paws smeared with blood. Blinded by hysterical panic, she jumped to the conclusion that the mongoose had killed her infant son and struck it violently with the heavy basket.<br>• Upon rushing inside, she saw her baby fast asleep in his cradle, while on the floor lay a huge black snake, dead and torn into shreds with blood around it.",
        rubric: [{ key: "Bloody paws causing hasty conclusion", marks: "1.5 Marks" }, { key: "Discovery of sleeping infant and shredded cobra", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Did the farmer's wife repent her hasty action? How does she show her grief?",
        marks: 3,
        ans: "<strong>Repentance and Grief:</strong><br>Yes, she repented bitterly with broken-hearted agony. Realizing that the faithful mongoose had sacrificed its safety to defend her son, she burst into loud sobs, knelt beside the lifeless animal, and touched its still paws, crying: <em>'Oh, you saved my child! You killed the snake! What have I done?'</em> She stared long at the dead animal, helpless in her delayed realization that hasty anger cannot be undone.",
        rubric: [{ key: "Intense remorse and weeping", marks: "1.5 Marks" }, { key: "Realization that rash action cannot be reversed", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Emotional Intelligence & Conflict De-escalation",
      question: "Impulsive reactions often destroy precious bonds. (a) What cognitive error did the mother commit? (b) How can practicing the '10-second pause rule' prevent tragic misjudgments in everyday life?",
      answer: "<strong>(a) Cognitive Error:</strong> Confirmation bias driven by irrational fear—she had always distrusted the animal, so she instantly mapped blood to her worst fear without verifying facts.<br><strong>(b) 10-Second Pause:</strong> Pausing before reacting allows the emotional amygdala to cool down and the logical prefrontal cortex to analyze facts objectively."
    }
  },
  {
    num: 11,
    id: "ch_ce11",
    book: "A Pact with the Sun",
    title: "The Shepherd's Treasure",
    desc: "Iranian folklore of an uneducated shepherd elevated to Governor who retains humility, wisdom, and an old iron chest.",
    concepts: [
      "A poor, illiterate shepherd in Iran gains fame for his profound wisdom and hospitality.",
      "The King disguises himself, tests the shepherd, and appoints him Governor of a small province.",
      "Jealous governors allege that the shepherd embezzles tax revenues in a locked iron chest he always carries on his camel.",
      "The King summons him and orders the chest opened before the court.",
      "Inside the chest lies no gold or jewels, but only an old, worn-out woollen blanket.",
      "The shepherd explains: 'This is my oldest friend; it will still protect me if Your Majesty strips me of my royal cloaks.'",
      "Impressed by his humility, the King makes him Governor of a much larger province."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#78350f" text-anchor="middle">The Shepherd's Iron Chest: Wisdom in Humility</text><text x="270" y="65" font-family="sans-serif" font-size="11" fill="#b45309" text-anchor="middle">An old woollen blanket proving uncorrupted integrity and grounded truth</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Why was the shepherd appointed Governor? Why were the other governors jealous of him?",
        marks: 3,
        ans: "<strong>Administrative Elevation:</strong><br>• The King visited the shepherd in disguise, spent a night in his cave, and was deeply impressed by his warm hospitality, sharp intellect, and practical wisdom. The King appointed him governor of a small district.<br>• The other provincial governors became bitterly jealous because the shepherd’s fame as a fair, wise, and kind administrator spread throughout the country, overshadowing their own corrupt reputations.",
        rubric: [{ key: "King's test of wisdom and appointment", marks: "1.5 Marks" }, { key: "Jealousy of corrupt regional peers", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "What did the iron chest contain? Why did the shepherd always carry it?",
        marks: 3,
        ans: "<strong>The Iron Chest Mystery:</strong><br>• The iron chest contained neither gold, silver, nor jewels, but only an <strong>ordinary, old woollen blanket</strong>.<br>• The shepherd explained that this blanket was his oldest and truest friend. If the King ever took away his gubernatorial cloaks and titles, the blanket would still protect him from cold winds. It stood as a permanent reminder to keep him humble and prevent power from corrupting his soul.",
        rubric: [{ key: "Contents: An old woollen blanket", marks: "1.5 Marks" }, { key: "Symbol of humble integrity and protection against vanity", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Public Administration & Anti-Corruption Governance",
      question: "Integrity in public service is the cornerstone of public trust. (a) What does the old blanket symbolize in leadership? (b) How did the shepherd counter baseless slander without anger or malice?",
      answer: "<strong>(a) Leadership Symbolism:</strong> True moral worth resides in character and unswerving integrity, not fleeting status, official privileges, or material wealth.<br><strong>(b) Response to Slander:</strong> Transparent truth: by calmly opening the chest before the assembly, he let undeniable reality speak for itself, disarming jealousy through serene dignity."
    }
  },
  {
    num: 12,
    id: "ch_ce12",
    book: "A Pact with the Sun",
    title: "Tansen",
    desc: "Biography of musical maestro Tansen, the court musician of Emperor Akbar, and the legendary mastery of Raga Deepak and Raga Megh.",
    concepts: [
      "Tansen: Son of Mukandan Misra in Gwalior; mimicked bird and animal calls as a boy.",
      "Swami Haridas recognizes his talent and trains him for eleven years.",
      "Becomes court jewel of Emperor Akbar in 1556.",
      "Jealous courtiers plot his downfall by demanding he sing Raga Deepak (whose intense vibrations ignite flames and consume the singer).",
      "Tansen trains his daughter Saraswati and friend Rupvati to sing Raga Megh (rain raga) the moment lamps catch fire.",
      "Tansen sings Raga Deepak: river boils, leaves dry, lamps ignite. The girls sing Raga Megh: clouds gather, torrential rain pours, saving Tansen's life."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="220" height="60" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="140" y="45" font-family="sans-serif" font-size="12" font-weight="700" fill="#b91c1c" text-anchor="middle">Raga Deepak (Fire)</text><text x="140" y="65" font-family="sans-serif" font-size="10" fill="#991b1b" text-anchor="middle">Ignites heat, air boils, lamps flame</text><rect x="290" y="20" width="220" height="60" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="400" y="45" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Raga Megh (Rain)</text><text x="400" y="65" font-family="sans-serif" font-size="10" fill="#1d4ed8" text-anchor="middle">Summons monsoons, quenches fire</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Why did Swami Haridas say Tansen was 'talented'? Why did Akbar ask Tansen to join his court?",
        marks: 3,
        ans: "<strong>Musical Genesis:</strong><br>• Swami Haridas and his disciples were resting in a forest when young Tansen hid behind a tree and roared like a ferocious tiger. The imitation was so realistic that the travelers were terrified. Swami Haridas praised Tansen's extraordinary vocal mimicry as rare genius.<br>• Akbar was enchanted by Tansen’s sublime musical mastery and invited him to join his royal court in 1556 as one of the celebrated Navratnas (Nine Gems).",
        rubric: [{ key: "Tiger roar mimicry in forest", marks: "1.5 Marks" }, { key: "Enchanting performances prompting Akbar's invitation", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "How did Tansen save his life when ordered to sing Raga Deepak?",
        marks: 3,
        ans: "<strong>Musical Strategy:</strong><br>Tansen knew that Raga Deepak generates scorching thermal energy that would reduce him to ashes. He trained his daughter Saraswati and her friend Rupvati to master <strong>Raga Megh</strong>. He instructed them to begin singing the moment the surroundings grew dangerously hot. As Tansen sang Raga Deepak, the atmosphere heated up, flowers wilted, birds fell, and unlit lamps burst into flame. Instantly, the girls commenced Raga Megh; skies darkened and a torrential downpour quenched the fire, saving Tansen's life.",
        rubric: [{ key: "Training daughters in Raga Megh", marks: "1.5 Marks" }, { key: "Coordinated timing saving singer from flames", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Indian Classical Music Acoustics & Vocal Rigour",
      question: "Indian ragas are associated with specific diurnal hours, seasons, and emotional bhavas. (a) What does the legend of Raga Deepak illustrate regarding ancient India's belief in the physical power of sonic vibrations? (b) How did Tansen outwit court rivalry using foresight?",
      answer: "<strong>(a) Sonic Vibrations:</strong> It reflects the profound philosophical belief that sound frequencies (Nada Brahma) resonating at precise acoustic pitches can harmonically couple with natural thermodynamics and physical matter.<br><strong>(b) Strategic Foresight:</strong> Rather than defying the royal decree out of fear, Tansen combined obedience with tactical collaboration, leveraging family talent to neutralize a lethal trap."
    }
  },
  {
    num: 13,
    id: "ch_ce13",
    book: "A Pact with the Sun",
    title: "The Monkey and the Crocodile",
    desc: "Panchatantra fable on presence of mind: A clever monkey escapes a treacherous crocodile who lures him to be eaten by his wife.",
    concepts: [
      "A lonely monkey on a rose-apple tree befriends a crocodile, feeding him sweet fruit.",
      "The crocodile's wife tastes the fruit and desires to eat the monkey's sweet heart.",
      "The crocodile reluctantly invites the monkey to dinner on his back.",
      "Midstream, the crocodile reveals the deadly secret.",
      "The quick-witted monkey replies: 'Alas! I left my heart safely in the rose-apple tree! Let us turn back and fetch it.'",
      "Upon reaching the shore, the monkey leaps to safety on high branches, bidding farewell to the treacherous friend."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#14532d" text-anchor="middle">Presence of Mind Saves Life in Mortal Peril</text><text x="270" y="65" font-family="sans-serif" font-size="11" fill="#15803d" text-anchor="middle">"My heart is safe on the tree!" — Wit outsmarts treacherous brute force</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Why did the crocodile’s wife want to eat the monkey's heart? Why was the crocodile unwilling to invite him at first?",
        marks: 3,
        ans: "<strong>Plot Motivation:</strong><br>• The crocodile's wife tasted the luscious rose-apples brought by her husband and reasoned that an animal who feeds on such divine sweet fruit every day must possess an incomparably sweet and delicious heart.<br>• The crocodile was unwilling because the monkey was his dear, loyal friend who had welcomed and nourished him for years; betraying a friend felt monstrous to his conscience.",
        rubric: [{ key: "Wife's reasoning about sweet fruit and heart", marks: "1.5 Marks" }, { key: "Crocodile's initial moral conflict and reluctance", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "How did the monkey save his life when the crocodile revealed the truth in the middle of the river?",
        marks: 3,
        ans: "<strong>Presence of Mind:</strong><br>The monkey did not panic. Maintaining a calm, cheerful composure, he told the crocodile that he would happily offer his life for his friend's wife, but he had unfortunately kept his heart safely stored on a branch of the rose-apple tree. He urged the foolish crocodile to turn back immediately to fetch it. The credulous crocodile swam back, and the instant they touched the riverbank, the monkey leaped high onto the tree to safety, ending their false friendship.",
        rubric: [{ key: "Calm composure and clever excuse of heart on tree", marks: "1.5 Marks" }, { key: "Crocodile swimming back allowing monkey's escape", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Crisis Psychology & Wit in Danger",
      question: "Panic paralyses judgment, whereas mental composure reveals escape avenues. (a) What psychological trait saved the monkey in deep waters where he could not swim? (b) What warning does the story give about trusting friends who compromise morality for bad company?",
      answer: "<strong>(a) Psychological Trait:</strong> Presence of mind and emotional regulation—he controlled visceral terror, analyzed his captor's gullibility, and crafted an irresistible deceit.<br><strong>(b) Moral Warning:</strong> Beware of friends whose loyalties are fragile; someone who easily capitulates to unethical pressure will ultimately betray you."
    }
  },
  {
    num: 14,
    id: "ch_ce14",
    book: "A Pact with the Sun",
    title: "The Wonder Called Sleep",
    desc: "Scientific and physiological exploration of sleep, dreams, unconscious restorative brain states, and somatic health.",
    concepts: [
      "Sleep is a state of unconscious rest; essential for cellular rejuvenation and muscular relaxation.",
      "During sleep, muscles relax, heartbeat slows down, blood pressure drops, and brain temperature lowers.",
      "Dreams: An active mental activity during sleep that reveals subconscious longings and helps process memory.",
      "Dreams can never predict the future, but they allow the psyche to sleep through noisy disruptions.",
      "Sleep is called a 'wonder' because it transports us across an enchanted boundary to awaken renewed, refreshed, and clear-headed."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#f8fafc" stroke="#6366f1" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#312e81" text-anchor="middle">Physiological Benefits of Deep Sleep</text><text x="270" y="65" font-family="sans-serif" font-size="10" fill="#4338ca" text-anchor="middle">Muscle Recovery • Blood Pressure Stabilization • Cognitive Memory Consolidation</text></svg>`,
    questions: [
      {
        num: 1,
        title: "What happens to our body when we sleep? Why is sleep called a wonder?",
        marks: 3,
        ans: "<strong>Physiological Restoration:</strong><br>• When we sink into deep sleep, our tired muscles relax completely, heartbeat and respiration become slow and steady, blood pressure drops, and brain activity slows to restorative rhythms, recovering from the day's wear and tear.<br>• Sleep is called a <strong>wonder</strong> because no one fully understands its magical mechanism. It casts an irresistible spell that transports every human being across an unfathomable frontier of unconscious peace, enabling us to awaken fresh, alert, and invigorated.",
        rubric: [{ key: "Somatic changes: muscles, heartbeat, blood pressure", marks: "1.5 Marks" }, { key: "Magical restorative boundary of mind", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "What is a dream? Mention two functions or purposes of dreams.",
        marks: 3,
        ans: "<strong>Nature of Dreams:</strong><br>• A dream is an active state of imagination and subconscious mental processing that occurs while we sleep.<br>• <strong>Two Functions of Dreams:</strong><br>1. Dreams help us sleep through noise or disturbances (e.g., the sound of an alarm bell is incorporated into a dream as a church chime or phone call).<br>2. Dreams help the mind process suppressed anxieties, psychological desires, and daily emotional experiences.",
        rubric: [{ key: "Definition of dream state", marks: "1 Mark" }, { key: "Two functions: shielding sleep and emotional sorting", marks: "2 Marks" }]
      }
    ],
    cbq: {
      title: "Circadian Rhythm & Adolescent Mental Health",
      question: "Excessive smartphone screen time before bedtime disrupts melatonin secretion. (a) How does sleep deprivation impair academic concentration and mood stability? (b) State two habits for optimal sleep hygiene.",
      answer: "<strong>(a) Cognitive Impairment:</strong> Lack of REM sleep impedes synaptic consolidation, causing memory lapses, cognitive fatigue, irritability, and weakened immune defense.<br><strong>(b) Sleep Hygiene:</strong><br>1. Turn off digital screens at least one hour before bed.<br>2. Maintain consistent sleep and wake-up times in a dark, quiet, well-ventilated bedroom."
    }
  },
  {
    num: 15,
    id: "ch_ce15",
    book: "A Pact with the Sun",
    title: "A Pact with the Sun",
    desc: "Zakir Husain's touching tale of Saeeda, her ailing mother, and a heartfelt prayer to sunbeams breaking through stormy clouds.",
    concepts: [
      "Saeeda's mother suffers from chronic fever, body aches, and asthma; treated by quacks who confined her to a dingy room with shuttered windows.",
      "A compassionate specialist advises: Fresh air and bright morning sunshine are more vital than medicine.",
      "The sky remains overcast with heavy, dark clouds for days; the mother despairs.",
      "Saeeda makes a secret pact with rays of the departing sun: 'Dearest rays, do come tomorrow with lots of warmth and light; my mother is sick.'",
      "Next morning, sunbeams pierce through thick clouds to fulfill their promise to a loving daughter, bathing the mother in healing warmth."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#78350f" text-anchor="middle">Healing Power of Sunshine & A Child's Pure Prayer</text><text x="270" y="65" font-family="sans-serif" font-size="10" fill="#b45309" text-anchor="middle">Sunlight & Fresh Air: Nature's Supreme Restorative Medicines</text></svg>`,
    questions: [
      {
        num: 1,
        title: "What did the physician advise Saeeda’s mother? What was she told to avoid by previous quacks?",
        marks: 3,
        ans: "<strong>Medical Advice:</strong><br>• The enlightened physician examined her and declared: <em>'Leave this dingy, suffocating room. Move to a larger room with open windows. Sit in the bright morning sunshine every day from eight to nine.'</em> He affirmed that fresh air and sunlight are more vital than bottles of medicine.<br>• Previous quacks had foolishly forbidden her normal food, fresh air, and sunlight, confining her in a dark, damp room with bolted windows.",
        rubric: [{ key: "Doctor's advice on sunlight and open windows", marks: "1.5 Marks" }, { key: "Quacks' harmful confinement and deprivation", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "What did Saeeda say to the rays of the sun? How did the sunbeams respond next morning?",
        marks: 3,
        ans: "<strong>The Sacred Pact:</strong><br>• In the evening, Saeeda addressed the last rays of the sun slipping away: <em>'Dearest sister rays, do come tomorrow with lots of warmth and brightness. My mother is ill and needs your healing light.'</em><br>• Next morning, when the sun ordered his army of rays to stay back due to dense overcast clouds, the brave sunbeams rebelled out of loyalty, saying they had given their word to little Saeeda. They pierced through the thick battalion of clouds, flooded the courtyard with golden warmth, and healed the mother.",
        rubric: [{ key: "Saeeda's heartfelt plea for mother", marks: "1.5 Marks" }, { key: "Sunbeams piercing clouds to honour their promise", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Heliotherapy & Preventive Pediatric Medicine",
      question: "Modern sedentary lifestyles deprive children and adults of natural sunlight. (a) What crucial nutrient does human skin synthesize upon exposure to morning ultraviolet-B (UVB) rays? (b) How does Zakir Husain's story blend scientific truth with poetic faith?",
      answer: "<strong>(a) Vitamin D Synthesis:</strong> Exposure of skin to morning sunlight triggers photolysis of 7-dehydrocholesterol into Vitamin D3, essential for calcium absorption, bone mineralization, and immune competence.<br><strong>(b) Storytelling Harmony:</strong> It presents the scientific reality that sunlight and ventilation cure respiratory melancholy, wrapped in an enchanting fable of childlike love and cosmic compassion."
    }
  }
];

// Write file
const outPath = path.join(__dirname, '..', 'data-c6-classic', 'englishClassicData.js');
const fileContent = `// NCERT Class 6 English Classic (15 Chapters: Honeysuckle + A Pact with the Sun) Data\nmodule.exports = { englishClassicChapters: ${JSON.stringify(englishClassicChapters, null, 2)} };\n`;
fs.writeFileSync(outPath, fileContent, 'utf-8');
console.log(`Successfully generated ${englishClassicChapters.length} English Classic Chapters in:`, outPath);
