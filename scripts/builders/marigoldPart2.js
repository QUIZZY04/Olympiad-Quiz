// scripts/builders/marigoldPart2.js
// NCERT Class 2 English: "Marigold Book 2" - Chapters 6 to 10
// The Wind and the Sun, Rain, Storm in the Garden, Zoo Manners, Funny Bunny

const marigoldPart2 = [
  {
    id: "mrg6", num: 6, unit: "Unit 3: Smiles & Nature",
    title: "The Wind and the Sun",
    subtitle: "Aesop's Fable, Contest of Strength & Gentleness vs Force",
    concepts: [
      "Story comprehension: The Wind and Sun argue about who is stronger.",
      "The contest: Making a walking traveler take off his heavy coat.",
      "The Wind's violent blowing makes the man wrap his coat tighter.",
      "The Sun's gentle, increasing warmth makes the man unbutton and take off his coat.",
      "Moral: Gentle warmth and kindness succeed where fierce anger and brute force fail."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><circle cx="90" cy="55" r="26" fill="#60a5fa"/><text x="90" y="60" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Wind (Blows)</text><circle cx="210" cy="55" r="22" fill="#374151"/><text x="210" y="60" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Man in Coat</text><circle cx="340" cy="55" r="28" fill="#facc15" stroke="#ea580c" stroke-width="3"/><text x="340" y="60" font-family="sans-serif" font-size="11" font-weight="800" fill="#9a3412" text-anchor="middle">Sun (Shines)</text><text x="440" y="60" font-family="sans-serif" font-size="12" font-weight="800" fill="#15803d">Sun Wins!</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Gentleness is stronger than brute force.</text></svg>`,
    cbq: {
      title: "The Roadside Weather Contest",
      text: "The Wind puffed out his cheeks and blew furiously: 'WHOOOO-WHOOOO!'. The walking man felt freezing cold, buttoned his woolen coat up to his chin, and wrapped his arms tightly around his chest. Then the Sun smiled and shone warmly. As the rays grew hotter, the man wiped beads of sweat from his forehead, unbuttoned his coat, and sat under a shady tree.",
      question: "How did the man react to the Wind's fierce blowing? What did the man do when the Sun shone brightly? Who won the contest and why?",
      answer: "1. Under the fierce Wind, the man <strong>wrapped his coat tighter</strong> and buttoned it up to stay warm.<br>2. When the Sun shone, the man felt hot, <strong>unbuttoned and took off his coat</strong>.<br>3. <strong>The Sun won</strong> because patience, pleasant warmth, and gentleness achieved what anger and brute force could not.",
      rubric: "1 M for man wrapping coat tighter + 1 M for man taking off coat + 1 M for Sun winning and moral"
    },
    questions: [
      {
        category: "Reading is Fun • The Dispute",
        q: "What did the Wind and the Sun argue about in the beginning?",
        ans: "<strong>Answer:</strong><br>• The Wind and the Sun argued about <strong>who was stronger</strong> between the two.",
        marks: 1,
        rubric: [{ key: "Who was stronger stated", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Test",
        q: "What test did the Wind propose to decide who was stronger?",
        ans: "<strong>Answer:</strong><br>• The Wind pointed to a man walking down the road and proposed that <strong>whoever could make him take off his coat first</strong> would be declared the winner.",
        marks: 2,
        rubric: [{ key: "Walking man in coat identified", marks: "1 M" }, { key: "Making him take off coat condition explained", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Wind's Strategy",
        q: "What did the Wind do first to get the man's coat off?",
        ans: "<strong>Answer:</strong><br>• The Wind puffed out his cheeks and blew as hard as he could: <strong>'Whoooo-whoooo!'</strong> creating a fierce freezing gale.",
        marks: 2,
        rubric: [{ key: "Puffed cheeks and blew hard", marks: "1 M" }, { key: "Sound 'Whoooo-whoooo' mentioned", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Sun's Strategy",
        q: "What did the Sun do to make the man take off his coat?",
        ans: "<strong>Answer:</strong><br>• The Sun smiled peacefully and <strong>shone brighter and hotter</strong>, making the day so warm that the man perspired and took off his heavy coat.",
        marks: 2,
        rubric: [{ key: "Shone brighter and hotter", marks: "1 M" }, { key: "Man took off coat due to heat", marks: "1 M" }]
      },
      {
        category: "Talk Time • Aesop's Moral",
        q: "What is the moral lesson of 'The Wind and the Sun'?",
        ans: "<strong>Answer:</strong><br>• <strong>Persuasion and gentleness are far more powerful than brute force and shouting.</strong> Warm kindness wins hearts easily.",
        marks: 2,
        rubric: [{ key: "Gentleness over brute force stated", marks: "2 M" }]
      },
      {
        category: "Opposites • Story Pairs",
        q: "Write the opposite of:<br>(a) Hot × _______<br>(b) Strong × _______<br>(c) Win × _______",
        ans: "<strong>Answers:</strong><br>(a) Hot × <strong>Cold</strong><br>(b) Strong × <strong>Weak</strong><br>(c) Win × <strong>Lose</strong>",
        marks: 3,
        rubric: [{ key: "(a) Cold", marks: "1 M" }, { key: "(b) Weak", marks: "1 M" }, { key: "(c) Lose", marks: "1 M" }]
      },
      {
        category: "Action Verbs • Wind and Sun",
        q: "Match the character to its action word in the story:<br>(a) The Wind (b) The Sun (c) The Man<br>Actions: (1) Shone (2) Blew (3) Walked",
        ans: "<strong>Matching:</strong><br>• (a) The Wind — (2) Blew<br>• (b) The Sun — (1) Shone<br>• (c) The Man — (3) Walked",
        marks: 3,
        rubric: [{ key: "All 3 correctly matched", marks: "3 M (1 M each)" }]
      },
      {
        category: "Describing Words (Adjectives)",
        q: "Identify the describing word in: 'The man wore a heavy woolen coat.'",
        ans: "<strong>Answer:</strong><br>• The describing words (adjectives) are <strong>'heavy'</strong> and <strong>'woolen'</strong> (describing the noun 'coat').",
        marks: 2,
        rubric: [{ key: "heavy identified", marks: "1 M" }, { key: "woolen identified", marks: "1 M" }]
      },
      {
        category: "Degrees of Comparison",
        q: "Fill in the blank with the comparative degree:<br>The Sun proved that he was _______ than the Wind (strong / stronger / strongest).",
        ans: "<strong>Answer:</strong><br>• The Sun proved that he was <strong>stronger</strong> than the Wind.",
        marks: 1,
        rubric: [{ key: "stronger correct", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'puffed'.",
        ans: "<strong>Sample Sentence:</strong><br>• The boy puffed out his cheeks and blew out all seven candles on his birthday cake.",
        marks: 2,
        rubric: [{ key: "Correct grammatical sentence with 'puffed'", marks: "2 M" }]
      },
      {
        category: "Dialogue Writing • Direct Speech",
        q: "What did the Wind admit to the Sun at the end of the story?",
        ans: "<strong>Answer:</strong><br>• The Wind said: <strong>'I give up! I cannot get his coat off. You have won, Sun!'</strong>",
        marks: 2,
        rubric: [{ key: "Admitting defeat politely", marks: "2 M" }]
      },
      {
        category: "Spelling Check • Weather Words",
        q: "Fill in the missing letters: B R _ G H T (giving out light).",
        ans: "<strong>Answer:</strong><br>• B R <strong>I</strong> G H T = <strong>BRIGHT</strong>.",
        marks: 1,
        rubric: [{ key: "BRIGHT correct", marks: "1 M" }]
      },
      {
        category: "Real-Life Application • Resolving Arguments",
        q: "If two friends are having an argument in class, should they shout angrily or talk calmly?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• They should <strong>talk calmly and listen to each other</strong>.<br>• Like the Sun in the story, gentle and calm words resolve problems peacefully, while angry shouting only makes things worse.",
        marks: 2,
        rubric: [{ key: "Calm dialogue chosen", marks: "1 M" }, { key: "Story analogy of Sun's warmth explained", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) The Wind blew so hard that the man took off his coat immediately.<br>(b) The Sun shone warmly and won the contest.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. The harder the Wind blew, the tighter the man held his coat.<br>(b) <strong>True</strong>. The Sun won through gentle warmth.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "Why is Aesop's fable 'The Wind and the Sun' loved across the world?",
        ans: "<strong>Summary:</strong><br>• It uses a simple natural contest between the elements to teach a timeless truth: kindness, patience, and warmth are infinitely more effective than force, pride, and hostility.",
        marks: 2,
        rubric: [{ key: "Timeless moral of kindness vs force articulated", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mrg7", num: 7, unit: "Unit 4: Seasons & Storms",
    title: "Rain",
    subtitle: "Poem of Rainfall, Umbrellas, Ships at Sea & Refreshing Showers",
    concepts: [
      "Poem recitation: 'The rain is raining all around, it falls on field and tree...'",
      "Universal nature of rain: showering on pastures, forests, rooftops, umbrellas, and distant ocean ships.",
      "Rainy season essentials: umbrellas, raincoats, gumboots, paper boats.",
      "Rhyming pairs and peaceful imagery of gentle monsoon rain."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><path d="M 60 20 Q 90 5 120 20 Q 150 10 170 30 Q 130 50 60 40 Z" fill="#94a3b8"/><line x1="80" y1="50" x2="70" y2="75" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4"/><line x1="110" y1="50" x2="100" y2="75" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4"/><line x1="140" y1="50" x2="130" y2="75" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4"/><path d="M 230 75 Q 270 35 310 75 Z" fill="#ef4444"/><line x1="270" y1="75" x2="270" y2="100" stroke="#7f1d1d" stroke-width="3"/><path d="M 390 85 L 440 85 L 430 98 L 400 98 Z" fill="#f59e0b"/><polygon points="415,85 415,60 435,75" fill="#ffffff"/><text x="250" y="112" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Rain falls on field and tree, on umbrellas and ships at sea!</text></svg>`,
    cbq: {
      title: "Class 2 Rainy Day Window Observation",
      text: "During English period, dark silver clouds covered the sky. Cool raindrops started tapping gently on the glass window. Kabir looked out and saw rain soaking the green football ground, dripping from neem tree leaves, and bouncing off colourful umbrellas held by walking parents.",
      question: "Where did the rain fall outside Kabir's classroom? How does this match Robert Louis Stevenson's poem 'Rain'?",
      answer: "1. Outside the classroom, rain fell on the <strong>open field (football ground), green tree leaves, and colourful umbrellas</strong>.<br>2. This matches the exact lines of Stevenson's poem: <strong>'The rain is raining all around, it falls on field and tree; it rains on the umbrellas here, and on the ships at sea.'</strong>",
      rubric: "1.5 M for field, trees, and umbrellas observed + 1.5 M for quoting/connecting poem lines"
    },
    questions: [
      {
        category: "Reading is Fun • Poem Locations",
        q: "Where does the rain fall in the poem?",
        ans: "<strong>Answer:</strong><br>• The rain falls <strong>all around</strong>:<br>1. On <strong>fields</strong><br>2. On <strong>trees</strong><br>3. On <strong>umbrellas</strong> here<br>4. On the <strong>ships at sea</strong>.",
        marks: 3,
        rubric: [{ key: "Field and tree", marks: "1 M" }, { key: "Umbrellas", marks: "1 M" }, { key: "Ships at sea", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Rain Gear",
        q: "What do people use to keep themselves dry when it rains?",
        ans: "<strong>Answer:</strong><br>• People use <strong>umbrellas</strong>, wear <strong>raincoats</strong> with hoods, and wear waterproof <strong>gumboots</strong>.",
        marks: 2,
        rubric: [{ key: "Umbrellas and raincoats named", marks: "1 M" }, { key: "Gumboots named", marks: "1 M" }]
      },
      {
        category: "Rhyming Words in Poem",
        q: "Find words in the poem that rhyme with:<br>(a) Tree — _______<br>(b) All — _______",
        ans: "<strong>Answers:</strong><br>(a) Tree rhymes with <strong>Sea</strong>.<br>(b) All rhymes with <strong>Ball / Fall</strong>.",
        marks: 2,
        rubric: [{ key: "(a) Sea", marks: "1 M" }, { key: "(b) Fall/Ball", marks: "1 M" }]
      },
      {
        category: "Paper Boats Tradition",
        q: "What playful activity do children love doing with puddles of rainwater in the courtyard?",
        ans: "<strong>Answer:</strong><br>• Children fold colourful paper to make <strong>paper boats</strong> and sail them in flowing rainwater puddles.",
        marks: 2,
        rubric: [{ key: "Paper boats mentioned", marks: "1 M" }, { key: "Sailing in puddles described", marks: "1 M" }]
      },
      {
        category: "Sound Words • Rain Onomatopoeia",
        q: "What sound do raindrops make when they hit a tin roof or window sill?",
        ans: "<strong>Answer:</strong><br>• Raindrops make a rhythmic <strong>'Pitter-patter, pitter-patter'</strong> sound.",
        marks: 1,
        rubric: [{ key: "Pitter-patter correct", marks: "1 M" }]
      },
      {
        category: "Importance of Rain • Farmers and Crops",
        q: "Why do farmers in India wait eagerly for the monsoon rain?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Farmers need rainwater to irrigate their crops (like rice, wheat, and pulses).<br>• Good monsoon rains fill rivers, ponds, and wells, ensuring abundant food harvests for the country.",
        marks: 2,
        rubric: [{ key: "Irrigation for crops explained", marks: "1 M" }, { key: "Replenishing water bodies and food supply", marks: "1 M" }]
      },
      {
        category: "Vocabulary • Water Bodies",
        q: "Where do ships sail: on a small puddle or on the deep sea?",
        ans: "<strong>Answer:</strong><br>• Big ships sail across the <strong>deep sea / ocean</strong>.",
        marks: 1,
        rubric: [{ key: "Deep sea / ocean correct", marks: "1 M" }]
      },
      {
        category: "Poem Details • Poet's Name",
        q: "Who wrote the classic four-line poem 'Rain'?",
        ans: "<strong>Answer:</strong><br>• The poem was written by the famous poet <strong>Robert Louis Stevenson</strong>.",
        marks: 1,
        rubric: [{ key: "Robert Louis Stevenson correct", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'umbrella'.",
        ans: "<strong>Sample Sentence:</strong><br>• Neha opened her bright yellow umbrella as soon as big raindrops began to fall.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'umbrella'", marks: "2 M" }]
      },
      {
        category: "Nature Fact • Rainbow Formation",
        q: "What colorful arc often appears in the sky when the sun shines right after rain?",
        ans: "<strong>Answer:</strong><br>• A seven-colored <strong>Rainbow</strong> appears in the sky opposite the sun.",
        marks: 1,
        rubric: [{ key: "Rainbow correct", marks: "1 M" }]
      },
      {
        category: "Opposites • Weather",
        q: "Write the opposite of:<br>(a) Wet × _______<br>(b) Sea × _______<br>(c) Around × _______",
        ans: "<strong>Answers:</strong><br>(a) Wet × <strong>Dry</strong><br>(b) Sea × <strong>Land</strong><br>(c) Around × <strong>Inside / Center</strong>",
        marks: 3,
        rubric: [{ key: "(a) Dry", marks: "1 M" }, { key: "(b) Land", marks: "1 M" }, { key: "(c) Inside", marks: "1 M" }]
      },
      {
        category: "Creatures in Rain",
        q: "Which green creature loves to croak happily near ponds when it rains?",
        ans: "<strong>Answer:</strong><br>• A <strong>Frog</strong> croaks happily in the rainy season.",
        marks: 1,
        rubric: [{ key: "Frog identified", marks: "1 M" }]
      },
      {
        category: "Grammar • Naming and Describing Words",
        q: "In the line 'Cool rain falls on green fields', identify the naming words and describing words.",
        ans: "<strong>Answer:</strong><br>• <strong>Naming words (nouns):</strong> rain, fields.<br>• <strong>Describing words (adjectives):</strong> cool, green.",
        marks: 2,
        rubric: [{ key: "Nouns identified", marks: "1 M" }, { key: "Adjectives identified", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) Rain falls only inside our bedrooms.<br>(b) An umbrella protects us from getting soaked.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. Rain falls outside on fields, trees, and sea.<br>(b) <strong>True</strong>. An umbrella shields us from rain.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Poem Reflection",
        q: "Why is 'Rain' considered one of the simplest yet most beautiful nature poems?",
        ans: "<strong>Summary:</strong><br>• In just four gentle lines, it links nature on land (fields and trees), human daily life (umbrellas), and faraway oceans (ships at sea), showing how rain unites the entire Earth in refreshing life.",
        marks: 2,
        rubric: [{ key: "Connection between land, humans, and sea explained", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mrg8", num: 8, unit: "Unit 4: Seasons & Storms",
    title: "Storm in the Garden",
    subtitle: "Sunu-sunu the Snail, Thunderstorm in the Garden & Safety at Home",
    concepts: [
      "Story comprehension: Sunu-sunu the little snail visits his friends, the ants.",
      "The sudden arrival of a fierce storm: wind whistling, lightning flashing, thunder rolling.",
      "Vivid sound words: shay-shay, zzak-zzak, gadam-gudum, sss-ta-ta.",
      "Animal instinct and safety: Ants hide under flower pots, Sunu-sunu pulls into his shell and goes home safe to mother."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><circle cx="90" cy="65" r="24" fill="#ca8a04"/><path d="M 90 41 Q 120 41 120 65 Q 120 89 90 89" fill="none" stroke="#713f12" stroke-width="4"/><circle cx="125" cy="55" r="14" fill="#a16207"/><line x1="130" y1="45" x2="135" y2="35" stroke="#713f12" stroke-width="2"/><circle cx="135" cy="35" r="3" fill="#713f12"/><text x="100" y="105" font-family="sans-serif" font-size="10" font-weight="700" fill="#713f12">Sunu-sunu</text><line x1="200" y1="25" x2="250" y2="65" stroke="#eab308" stroke-width="3"/><line x1="250" y1="65" x2="230" y2="75" stroke="#eab308" stroke-width="3"/><line x1="230" y1="75" x2="270" y2="105" stroke="#eab308" stroke-width="3"/><text x="250" y="20" font-family="sans-serif" font-size="10" font-weight="800" fill="#ca8a04">Lightning (Zzak!)</text><rect x="340" y="45" width="60" height="40" fill="#ea580c" rx="4"/><circle cx="360" cy="90" r="4" fill="#1e293b"/><circle cx="380" cy="90" r="4" fill="#1e293b"/><text x="370" y="70" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Flowerpot</text><text x="440" y="70" font-family="sans-serif" font-size="10" font-weight="700" fill="#15803d">Safe Home!</text></svg>`,
    cbq: {
      title: "Sunu-sunu's Stormy Garden Adventure",
      text: "Sunu-sunu the snail was playing happily with his ant friends. The ants climbed all over him — hee-hee! Suddenly, black clouds arrived. Thunder rolled: GADAM-GUDUM! Lightning flashed: ZZAK-ZZAK! Rain poured: SSS-TA-TA! The ants shouted: 'Hurry, Sunu-sunu! Go home! Your mother will worry!'. Sunu-sunu pulled his head and tail into his hard spiral shell and did not get wet at all.",
      question: "Who was Sunu-sunu visiting? What sound did the thunder make? How did Sunu-sunu protect himself from the heavy rain?",
      answer: "1. Sunu-sunu was visiting his friends, <strong>the ants</strong> in the garden.<br>2. The thunder rolled with the sound: <strong>'GADAM-GUDUM!'</strong>.<br>3. Sunu-sunu protected himself by <strong>pulling his head and tail completely inside his hard spiral shell</strong>, staying dry and safe.",
      rubric: "1 M for visiting ants + 1 M for 'GADAM-GUDUM' sound + 1 M for pulling into shell protection"
    },
    questions: [
      {
        category: "Reading is Fun • Snail Identity",
        q: "Who was Sunu-sunu?",
        ans: "<strong>Answer:</strong><br>• Sunu-sunu was a cute <strong>little snail</strong>.",
        marks: 1,
        rubric: [{ key: "Little snail identified", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Ant Friends",
        q: "Who was Sunu-sunu visiting in the garden?",
        ans: "<strong>Answer:</strong><br>• He was visiting his dear friends, <strong>the ants</strong>.",
        marks: 1,
        rubric: [{ key: "The ants identified", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Ant Shelter",
        q: "Where were the ants hiding when the ferocious storm broke out?",
        ans: "<strong>Answer:</strong><br>• The ants scurried and were hiding <strong>underneath a terracotta flowerpot</strong>.",
        marks: 2,
        rubric: [{ key: "Underneath a flowerpot identified", marks: "2 M" }]
      },
      {
        category: "Reading is Fun • Snail's Body Armor",
        q: "Did Sunu-sunu get wet in the storm? Explain why or why not.",
        ans: "<strong>Step-by-Step Answer:</strong><br>• <strong>No</strong>, Sunu-sunu did not get wet at all.<br>• <strong>Reason:</strong> He pulled his head, feelers, and tail inside his <strong>hard spiral shell</strong>, which acted as a natural waterproof umbrella.",
        marks: 2,
        rubric: [{ key: "Did not get wet confirmed", marks: "1 M" }, { key: "Pulled inside shell reason explained", marks: "1 M" }]
      },
      {
        category: "Storm Sound Words • Onomatopoeia",
        q: "Match each storm phenomenon to its sound word in the story:<br>(a) Wind blowing (b) Lightning flashing (c) Rain pouring (d) Thunder rolling<br>Sounds: (1) Zzak-zzak! (2) Shay-shay! (3) Gadam-gudum! (4) Sita-sita, pita-pita!",
        ans: "<strong>Matching:</strong><br>• (a) Wind blowing — (2) Shay-shay!<br>• (b) Lightning flashing — (1) Zzak-zzak!<br>• (c) Rain pouring — (4) Sita-sita, pita-pita!<br>• (d) Thunder rolling — (3) Gadam-gudum!",
        marks: 4,
        rubric: [{ key: "All 4 sound words correctly matched", marks: "4 M (1 M each)" }]
      },
      {
        category: "Animal Senses • Feelers",
        q: "What does a snail have on top of its head to feel its way around?",
        ans: "<strong>Answer:</strong><br>• A snail has two pairs of retractable <strong>feelers (tentacles)</strong> on top of its head to touch, smell, and detect light.",
        marks: 2,
        rubric: [{ key: "Feelers / tentacles identified", marks: "1 M" }, { key: "Function of sensing / touching explained", marks: "1 M" }]
      },
      {
        category: "Mother's Love & Home",
        q: "Where was Sunu-sunu's mother sitting when he reached home?",
        ans: "<strong>Answer:</strong><br>• Sunu-sunu's mother was sitting safely <strong>under a big flat stone</strong> near the garden well.",
        marks: 2,
        rubric: [{ key: "Under a stone near the well identified", marks: "2 M" }]
      },
      {
        category: "Story Narration • Sharing with Mom",
        q: "What did Sunu-sunu do as soon as he reached his mother?",
        ans: "<strong>Answer:</strong><br>• He happily crawled into her lap and told her all about the storm — the howling wind, flashing lightning, rolling thunder, and roaring rain!",
        marks: 2,
        rubric: [{ key: "Crawled to mother and recounted storm sounds", marks: "2 M" }]
      },
      {
        category: "Word Building • Compound Words",
        q: "Make compound words from the story:<br>(a) Flower + pot = _______<br>(b) Light + ning = _______<br>(c) Rain + drops = _______",
        ans: "<strong>Answers:</strong><br>(a) Flower + pot = <strong>Flowerpot</strong><br>(b) Light + ning = <strong>Lightning</strong><br>(c) Rain + drops = <strong>Raindrops</strong>",
        marks: 3,
        rubric: [{ key: "(a) Flowerpot", marks: "1 M" }, { key: "(b) Lightning", marks: "1 M" }, { key: "(c) Raindrops", marks: "1 M" }]
      },
      {
        category: "Opposites • Storm Words",
        q: "Write the opposite of:<br>(a) Slow × _______<br>(b) Safe × _______<br>(c) Outside × _______",
        ans: "<strong>Answers:</strong><br>(a) Slow × <strong>Fast / Quick</strong><br>(b) Safe × <strong>Dangerous / Unsafe</strong><br>(c) Outside × <strong>Inside</strong>",
        marks: 3,
        rubric: [{ key: "(a) Fast", marks: "1 M" }, { key: "(b) Dangerous", marks: "1 M" }, { key: "(c) Inside", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'thunder'.",
        ans: "<strong>Sample Sentence:</strong><br>• Loud thunder rattled the window panes as the monsoon storm approached.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence using 'thunder'", marks: "2 M" }]
      },
      {
        category: "Nature Science • Snail Slime",
        q: "Why does a snail leave a silvery shiny trail behind as it crawls?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• A snail produces a moist, sticky mucus (slime) from its foot.<br>• This slime smooths rough surfaces, reduces friction, and protects its soft underbelly from getting cut by sharp stones.",
        marks: 2,
        rubric: [{ key: "Mucus / slime production explained", marks: "1 M" }, { key: "Protection from sharp surfaces", marks: "1 M" }]
      },
      {
        category: "Punctuation • Exclamation Sounds",
        q: "Why are sound words like 'ZZAK!' and 'GADAM-GUDUM!' written with exclamation marks?",
        ans: "<strong>Answer:</strong><br>• Because they represent sudden, loud, and shocking natural sounds during a thunderstorm.",
        marks: 1,
        rubric: [{ key: "Sudden loud sounds / emotion explained", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) Sunu-sunu was swimming in the sea.<br>(b) The ants told Sunu-sunu to hurry home to his mother.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. Sunu-sunu lived and played in a garden.<br>(b) <strong>True</strong>. The caring ants warned him to rush home.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "What do we learn from 'Storm in the Garden'?",
        ans: "<strong>Summary:</strong><br>• Nature has provided unique shelters to every tiny creature (like a snail's shell).<br>• When danger strikes, our true friends advise us wisely, and home with parents is the safest place in the world.",
        marks: 2,
        rubric: [{ key: "Nature's protective design and safety of home summarized", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mrg9", num: 9, unit: "Unit 5: Animals & Folktales",
    title: "Zoo Manners",
    subtitle: "Etiquette at the Zoo, Respecting Wildlife & Gentle Observation",
    concepts: [
      "Poem appreciation: 'Be careful what you say or do when you visit the animals at the zoo.'",
      "Treating animals with dignity: not mocking the camel's proud hump or chimpanzee's wise smile.",
      "The noble penguins strutting around the lake, understanding remarks.",
      "Rules of visiting a zoo: no feeding, no teasing, no shouting, maintaining distance."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ecfdf5" rx="10"/><circle cx="90" cy="55" r="24" fill="#d97706"/><path d="M 80 40 Q 90 20 100 40 Z" fill="#b45309"/><text x="90" y="105" font-family="sans-serif" font-size="10" font-weight="700" fill="#78350f" text-anchor="middle">Camel Hump</text><circle cx="210" cy="55" r="22" fill="#475569"/><text x="210" y="105" font-family="sans-serif" font-size="10" font-weight="700" fill="#1e293b" text-anchor="middle">Chimpanzee</text><circle cx="330" cy="55" r="20" fill="#0284c7"/><text x="330" y="105" font-family="sans-serif" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">Penguin Strut</text><text x="440" y="60" font-family="sans-serif" font-size="12" font-weight="800" fill="#15803d">Be Kind!</text><text x="250" y="115" font-family="sans-serif" font-size="12" font-weight="700" fill="#065f46" text-anchor="middle">Treat them well and you will always be welcome at the zoo.</text></svg>`,
    cbq: {
      title: "Class 2 Field Trip to National Zoological Park",
      text: "Class 2 visited the National Zoological Park with their science teacher. Outside the gate, the teacher read the visitor rules: 'Do not throw plastic, do not feed bread to deer, and do not make teasing faces at monkeys.' Inside, the children watched tall camels walking proudly, and black-and-white penguins strutting gracefully around the pool.",
      question: "What warnings does the poem 'Zoo Manners' give about camels and penguins? Why must visitors never tease zoo animals?",
      answer: "1. <strong>Camel warning:</strong> Do not laugh at his hump, for he is proud of his noble bump.<br>2. <strong>Penguin warning:</strong> The penguins strutting around the lake are noble and understand every remark you make.<br>3. <strong>Why no teasing:</strong> Teasing stresses wild animals, makes them aggressive or unhappy, and spoils their peace. Respectful behavior ensures a safe, welcoming zoo for all.",
      rubric: "1 M for camel's noble hump + 1 M for penguin's understanding + 1 M for why teasing is harmful"
    },
    questions: [
      {
        category: "Reading is Fun • Opening Warning",
        q: "What does the poet advise us to be careful about when visiting the zoo?",
        ans: "<strong>Answer:</strong><br>• The poet warns us to <strong>be very careful what we say or do</strong> when we visit the animals at the zoo.",
        marks: 1,
        rubric: [{ key: "Careful what we say or do stated", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Camel's Hump",
        q: "Why should we not make fun of the camel's hump?",
        ans: "<strong>Answer:</strong><br>• Because the camel is <strong>very proud of his noble bump</strong>, which stores fat to give him energy in the desert.",
        marks: 2,
        rubric: [{ key: "Proud of his noble bump", marks: "1 M" }, { key: "Desert energy storage explained", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Chimpanzee's Wisdom",
        q: "What does the chimpanzee think of himself in the poem?",
        ans: "<strong>Answer:</strong><br>• The chimpanzee thinks he is <strong>just as wise as you or me</strong>.",
        marks: 1,
        rubric: [{ key: "Just as wise as humans stated", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Penguins",
        q: "What are the penguins doing around the lake in the zoo?",
        ans: "<strong>Answer:</strong><br>• The penguins are <strong>strutting gracefully around the pool</strong> and can understand the remarks visitors make.",
        marks: 2,
        rubric: [{ key: "Strutting around pool / lake", marks: "1 M" }, { key: "Understanding remarks", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Zoo Reward",
        q: "What reward do you get if you treat zoo animals well?",
        ans: "<strong>Answer:</strong><br>• If you treat them as well as they do you, <strong>you'll always be welcome at the zoo</strong>.",
        marks: 2,
        rubric: [{ key: "Always be welcome at the zoo quoted", marks: "2 M" }]
      },
      {
        category: "Vocabulary • Word Meanings",
        q: "What does the word 'strutting' mean in the poem?",
        ans: "<strong>Answer:</strong><br>• <strong>Strutting</strong> means walking with a stiff, proud, and dignified step.",
        marks: 1,
        rubric: [{ key: "Walking proudly and stiffly defined", marks: "1 M" }]
      },
      {
        category: "Rhyming Words in Poem",
        q: "Find words in the poem that rhyme with:<br>(a) Do — _______<br>(b) Bump — _______<br>(c) Lake — _______",
        ans: "<strong>Answers:</strong><br>(a) Do rhymes with <strong>Zoo / You</strong>.<br>(b) Bump rhymes with <strong>Hump</strong>.<br>(c) Lake rhymes with <strong>Make</strong>.",
        marks: 3,
        rubric: [{ key: "(a) Zoo/You", marks: "1 M" }, { key: "(b) Hump", marks: "1 M" }, { key: "(c) Make", marks: "1 M" }]
      },
      {
        category: "Zoo Etiquette Rules",
        q: "List three important rules that every visitor must follow inside a zoo.",
        ans: "<strong>Zoo Rules:</strong><br>1. Do not feed outside snacks to the animals.<br>2. Do not throw stones, tap glass, or tease the caged animals.<br>3. Keep the premises clean and dispose of all trash in litter bins.",
        marks: 3,
        rubric: [{ key: "No feeding", marks: "1 M" }, { key: "No teasing/disturbing", marks: "1 M" }, { key: "No littering", marks: "1 M" }]
      },
      {
        category: "Animal Adaptations • Camel Hump",
        q: "Why do camels have humps on their backs?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• A camel's hump stores <strong>fat tissue</strong>.<br>• When walking across hot, waterless deserts for days, the camel converts this fat into energy and moisture, earning it the title 'Ship of the Desert'.",
        marks: 2,
        rubric: [{ key: "Fat storage explained", marks: "1 M" }, { key: "Energy in desert / Ship of the Desert", marks: "1 M" }]
      },
      {
        category: "Grammar • Opposites",
        q: "Write the opposite of:<br>(a) Proud × _______<br>(b) Wise × _______<br>(c) Welcome × _______",
        ans: "<strong>Answers:</strong><br>(a) Proud × <strong>Humble / Modest</strong><br>(b) Wise × <strong>Foolish / Silly</strong><br>(c) Welcome × <strong>Unwelcome / Forbidden</strong>",
        marks: 3,
        rubric: [{ key: "(a) Humble", marks: "1 M" }, { key: "(b) Foolish", marks: "1 M" }, { key: "(c) Unwelcome", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'noble'.",
        ans: "<strong>Sample Sentence:</strong><br>• The majestic lion walked across the savanna with a noble stride.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'noble'", marks: "2 M" }]
      },
      {
        category: "Animal Facts • Penguins",
        q: "Can penguins fly in the air like parrots? How do they move in water?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• <strong>No</strong>, penguins cannot fly in the air.<br>• Their wings have evolved into sleek, paddle-like <strong>flippers</strong> that allow them to 'fly' underwater with astonishing speed to catch fish.",
        marks: 2,
        rubric: [{ key: "Cannot fly in air", marks: "1 M" }, { key: "Flippers for underwater swimming", marks: "1 M" }]
      },
      {
        category: "Spelling Check • Zoo Words",
        q: "Unscramble: C H I M P A N Z E E = _______",
        ans: "<strong>Answer:</strong><br>• C H I M P A N Z E E = <strong>CHIMPANZEE</strong>.",
        marks: 1,
        rubric: [{ key: "CHIMPANZEE correct", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) We should shout loudly and tap on glass cages to scare zoo animals.<br>(b) Animals feel emotions like fear, affection, and pride.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. Tapping glass scares animals and is strictly prohibited in zoos.<br>(b) <strong>True</strong>. Animals are sentient living beings that feel feelings.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Poem Reflection",
        q: "What is the broader message of 'Zoo Manners'?",
        ans: "<strong>Summary:</strong><br>• It teaches children empathy, dignity, and compassion toward all wildlife.<br>• Every animal has evolved special features worthy of respect, and we should observe nature with quiet humility.",
        marks: 2,
        rubric: [{ key: "Empathy, dignity, and respect for wildlife summarized", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mrg10", num: 10, unit: "Unit 5: Animals & Folktales",
    title: "Funny Bunny",
    subtitle: "The Acorn Fall, The Sky is Falling Panic & Foxy Loxy's Trick",
    concepts: [
      "Story comprehension: An acorn falls on Funny Bunny's head; he panics thinking 'The sky is falling!'.",
      "Spreading rumors: Henny Penny, Cocky Locky, Ducky Lucky, and Goosey Poosey follow blindly without checking.",
      "The danger of gullibility: Meeting the cunning Foxy Loxy who tricks them into his cave den.",
      "Moral: Think before you panic; never believe rumors blindly, and beware of deceitful strangers."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><circle cx="70" cy="55" r="20" fill="#93c5fd"/><text x="70" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Bunny</text><circle cx="140" cy="55" r="18" fill="#f87171"/><text x="140" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Henny</text><circle cx="210" cy="55" r="18" fill="#fb923c"/><text x="210" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Cocky</text><circle cx="280" cy="55" r="18" fill="#facc15"/><text x="280" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#713f12" text-anchor="middle">Ducky</text><circle cx="350" cy="55" r="18" fill="#a3e635"/><text x="350" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#14532d" text-anchor="middle">Goosey</text><circle cx="430" cy="55" r="24" fill="#ea580c"/><text x="430" y="60" font-family="sans-serif" font-size="9" font-weight="800" fill="#ffffff" text-anchor="middle">Foxy Loxy</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Don't believe rumors blindly — verify facts first!</text></svg>`,
    cbq: {
      title: "The Acorn Panic Investigation",
      text: "Funny Bunny sat under a tall oak tree. Suddenly, OUCH! A ripe brown nut (acorn) dropped straight from a high branch and struck him on the head. Without looking up at the tree branches, Funny Bunny shouted: 'Oh no! The sky is falling down! I must run and tell the King!'. On the road, he repeated this false alarm to Henny Penny, Cocky Locky, Ducky Lucky, and Goosey Poosey, who all ran after him in panic.",
      question: "What actually fell on Funny Bunny's head? What mistake did he make? Why did the other animals follow him blindly?",
      answer: "1. A small, ripe <strong>acorn (tree nut)</strong> fell on his head.<br>2. <strong>His mistake:</strong> He did not look up to investigate what hit him; he jumped to a foolish, panicked conclusion that 'the sky is falling'.<br>3. The other animals followed him because they <strong>believed a rumor blindly without using their own senses or reasoning</strong>.",
      rubric: "1 M for acorn + 1 M for jumping to false conclusion + 1 M for blind faith in rumors"
    },
    questions: [
      {
        category: "Reading is Fun • The Accident",
        q: "One day, a nut fell on _______ (Funny Bunny / Cocky Locky / the King).",
        ans: "<strong>Answer:</strong><br>• One day, a nut fell on <strong>Funny Bunny</strong>.",
        marks: 1,
        rubric: [{ key: "Funny Bunny chosen", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Panic Claim",
        q: "What did Funny Bunny think had happened when the nut hit his head?",
        ans: "<strong>Answer:</strong><br>• Funny Bunny thought that <strong>the sky was falling down</strong> and that a piece of the sky had hit him.",
        marks: 2,
        rubric: [{ key: "The sky is falling down stated", marks: "2 M" }]
      },
      {
        category: "Reading is Fun • Reporting to the King",
        q: "Where did Funny Bunny decide to go, and who did he want to tell?",
        ans: "<strong>Answer:</strong><br>• He decided to go to the palace to tell <strong>the King</strong> about the sky falling.",
        marks: 1,
        rubric: [{ key: "To tell the King stated", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Character Sequence",
        q: "Name all the birds and animals Funny Bunny met on the way, in order.",
        ans: "<strong>Step-by-Step Order:</strong><br>1. <strong>Henny Penny</strong> (the hen)<br>2. <strong>Cocky Locky</strong> (the rooster)<br>3. <strong>Ducky Lucky</strong> (the duck)<br>4. <strong>Goosey Poosey</strong> (the goose)<br>5. <strong>Foxy Loxy</strong> (the clever fox).",
        marks: 3,
        rubric: [{ key: "All 5 characters named in correct sequence", marks: "3 M" }]
      },
      {
        category: "Reading is Fun • The Fox's Trick",
        q: "What did Foxy Loxy say to the panicked animals?",
        ans: "<strong>Answer:</strong><br>• Foxy Loxy smiled slyly and said: <strong>'The King lives this way. Follow me!'</strong> and led them straight into his dark cave den.",
        marks: 2,
        rubric: [{ key: "Told them the King lives this way", marks: "1 M" }, { key: "Led them to his den", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Sad End",
        q: "What happened to Funny Bunny and his foolish friends at the end?",
        ans: "<strong>Answer:</strong><br>• Foxy Loxy trapped them in his cave and <strong>ate them all up</strong>. That was the tragic end of Funny Bunny and his gullible followers.",
        marks: 2,
        rubric: [{ key: "Foxy Loxy ate them up stated", marks: "2 M" }]
      },
      {
        category: "Rhyming Names • Word Play",
        q: "Notice the rhyming pairs in the character names:<br>(a) Funny — _______<br>(b) Henny — _______<br>(c) Ducky — _______<br>(d) Foxy — _______",
        ans: "<strong>Answers:</strong><br>(a) Funny — <strong>Bunny</strong><br>(b) Henny — <strong>Penny</strong><br>(c) Ducky — <strong>Lucky</strong><br>(d) Foxy — <strong>Loxy</strong>",
        marks: 4,
        rubric: [{ key: "All 4 rhyming names matched", marks: "4 M (1 M each)" }]
      },
      {
        category: "Moral Reasoning • Rumor Control",
        q: "What should Henny Penny or Ducky Lucky have done before running off to tell the King?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• They should have stopped, looked up at the blue sky, and checked if the sky was actually falling.<br>• They should have asked: 'Where did the sky break?' instead of blindly panicking.",
        marks: 2,
        rubric: [{ key: "Verifying the fact / looking up at sky", marks: "1 M" }, { key: "Not panicking blindly", marks: "1 M" }]
      },
      {
        category: "Opposites • Story Adjectives",
        q: "Write the opposite of:<br>(a) Clever × _______<br>(b) Fall × _______<br>(c) Follow × _______",
        ans: "<strong>Answers:</strong><br>(a) Clever × <strong>Foolish / Silly</strong><br>(b) Fall × <strong>Rise</strong><br>(c) Follow × <strong>Lead</strong>",
        marks: 3,
        rubric: [{ key: "(a) Foolish", marks: "1 M" }, { key: "(b) Rise", marks: "1 M" }, { key: "(c) Lead", marks: "1 M" }]
      },
      {
        category: "Vocabulary • Nut Types",
        q: "What is an acorn? Which animal is famous for collecting acorns in tree hollows?",
        ans: "<strong>Answer:</strong><br>• An acorn is the small, hard brown nut of an <strong>oak tree</strong>.<br>• <strong>Squirrels</strong> are famous for gathering and storing acorns for winter.",
        marks: 2,
        rubric: [{ key: "Nut of oak tree", marks: "1 M" }, { key: "Squirrels identified", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'stranger'.",
        ans: "<strong>Sample Sentence:</strong><br>• We should never follow an unknown stranger or accept sweets from them.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'stranger'", marks: "2 M" }]
      },
      {
        category: "Direct Speech • Quotes from Story",
        q: "Who said these words:<br>(a) 'Ouch! The sky is falling down!'<br>(b) 'The King lives this way. Follow me!'",
        ans: "<strong>Answers:</strong><br>(a) <strong>Funny Bunny</strong> said: 'Ouch! The sky is falling down!'.<br>(b) <strong>Foxy Loxy</strong> said: 'The King lives this way. Follow me!'.",
        marks: 2,
        rubric: [{ key: "(a) Funny Bunny", marks: "1 M" }, { key: "(b) Foxy Loxy", marks: "1 M" }]
      },
      {
        category: "Animal Homes • Fox's Den",
        q: "What do we call the underground shelter or cave where a fox lives?",
        ans: "<strong>Answer:</strong><br>• A fox lives in a <strong>den (burrow)</strong>.",
        marks: 1,
        rubric: [{ key: "Den / burrow identified", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) A piece of the sky actually hit Funny Bunny.<br>(b) Foxy Loxy was a kind friend who took the birds to the palace.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. Only a little acorn nut fell from the tree.<br>(b) <strong>False</strong>. Foxy Loxy was a cunning predator who tricked them into his den.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) False with reason", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "What is the key life lesson of the story 'Funny Bunny'?",
        ans: "<strong>Summary:</strong><br>• Never spread baseless panic or believe rumors without checking facts yourself.<br>• Trusting sweet-talking strangers blindly can lead to grave danger.",
        marks: 2,
        rubric: [{ key: "Fact checking and danger of false rumors explained", marks: "2 M" }]
      }
    ]
  }
];

module.exports = { marigoldPart2 };
