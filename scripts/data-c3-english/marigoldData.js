// Official NCERT Class 3 English (Marigold Book 3) Complete Dataset - Units 1 to 10
// Classic CBSE Track (2026-27 Session) - 100% Comprehensive Question & Activity Coverage

const marigoldUnits = [
  {
    id: "mg_u1",
    num: 1,
    unit: "Unit 1: Morning & Nature",
    title: "Good Morning & The Magic Garden",
    subtitle: "Poem by Fannie R. Buchanan & Story of School Children Loving and Watering Garden Flowers",
    concepts: [
      "Poem 'Good Morning': Wishing the sky, sun, little winds, grass, and bees good morning.",
      "Story 'The Magic Garden': Roses, sunflowers, marigolds, and poppies in the school garden.",
      "Why flowers love little children: children bring water cans, dig the ground nicely, and bring breadcrumbs for birds.",
      "Fairies in the garden: singing sweet songs that only children can hear."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#854d0e" text-anchor="middle">The Magic Garden — Why Flowers Love School Children</text>
      <!-- Sun -->
      <circle cx="80" cy="50" r="20" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
      <text x="80" y="55" font-size="16" text-anchor="middle">☀️</text>
      <!-- Sunflower -->
      <g transform="translate(160, 60)">
        <line x1="20" y1="30" x2="20" y2="70" stroke="#16a34a" stroke-width="4"/>
        <circle cx="20" cy="30" r="14" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
        <text x="20" y="85" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#15803d" text-anchor="middle">Sunflower</text>
      </g>
      <!-- Watering Can -->
      <g transform="translate(270, 70)">
        <rect x="0" y="10" width="30" height="25" rx="4" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
        <path d="M30,15 L45,5 L45,10 Z" fill="#0284c7"/>
        <path d="M-5,15 Q-15,22 -5,30" fill="none" stroke="#0284c7" stroke-width="2.5"/>
        <text x="20" y="50" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0369a1" text-anchor="middle">Watering Can</text>
      </g>
      <!-- Rose & Poppy -->
      <g transform="translate(390, 60)">
        <line x1="20" y1="30" x2="20" y2="70" stroke="#16a34a" stroke-width="4"/>
        <circle cx="20" cy="30" r="12" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
        <text x="20" y="85" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#b91c1c" text-anchor="middle">Red Rose</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#713f12" text-anchor="middle">"The children dig the ground so well, water our thirsty roots, and sing sweet songs!"</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem & Story",
        q: "Why is the child in the poem 'Good Morning' happy? Why did the flowers love the little school children in 'The Magic Garden'?",
        ans: "<strong>Answer:</strong><br>1. <strong>Child's Happiness:</strong> The child is happy because night has passed, morning has arrived, and the child is wide awake to run out and play with the sun, sky, wind, birds, and bees.<br>2. <strong>Why Flowers Loved Children:</strong> The flowers loved the little children because they brought their watering cans to pour cool water on their thirsty roots and dug the soil around the plants tenderly.",
        marks: 3,
        rubric: [
          { key: "Explanation of child's joy at morning waking", marks: "1.5 M" },
          { key: "Two reasons why flowers loved children (watering and caring)", marks: "1.5 M" }
        ]
      },
      {
        category: "Talk Time • Garden Flowers",
        q: "Name five flowers that grew in the magic garden. Which flower lifted its head very high toward the sun, and why?",
        ans: "<strong>Flowers in Magic Garden:</strong><br>1. <strong>Sunflowers</strong>, 2. <strong>Roses</strong>, 3. <strong>Marigolds</strong>, 4. <strong>Poppies</strong>, and 5. <strong>Pansies</strong>.<br>• The <strong>sunflower</strong> lifted its head highest because the golden morning sunshine fell on the magic garden more warmly than anywhere else.",
        marks: 3,
        rubric: [
          { key: "Five flowers named accurately", marks: "1.5 M" },
          { key: "Sunflower behavior and sunlight reason", marks: "1.5 M" }
        ]
      },
      {
        category: "Word Building • Compound Words",
        q: "Make compound words by joining words from Box A and Box B: (Sun, Play, Rain, Water) + (Fall, Ground, Flower, Drop).",
        ans: "<strong>Compound Words:</strong><br>• Sun + Flower = <strong>Sunflower</strong><br>• Play + Ground = <strong>Playground</strong><br>• Rain + Drop = <strong>Raindrop</strong><br>• Water + Fall = <strong>Waterfall</strong>",
        marks: 2,
        rubric: [
          { key: "Correct compound word formation for all 4 pairs", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "School Herbal Garden Care",
      text: "Class 3 students decided to maintain a small botanical patch in school with tulsi, mint, aloe vera, and marigolds.",
      question: "What daily care routine should students establish to ensure their garden stays healthy throughout the year?",
      answer: "1. Water the plants gently in the early morning or evening so water does not evaporate in harsh midday heat.<br>2. Remove dried leaves, pull out wild weeds by hand, and add organic dry-leaf compost once every fortnight.",
      rubric: "1.5M proper watering schedule + 1.5M weeding and natural composting."
    }
  },
  {
    id: "mg_u2",
    num: 2,
    unit: "Unit 2: Birds & Kindness",
    title: "Bird Talk & Nina and the Baby Sparrows",
    subtitle: "Poem on How Birds View Humans & Heartwarming Story of Nina Protecting Sparrow Chicks",
    concepts: [
      "Poem 'Bird Talk': Robin and Jay talking in the garden about how strange humans are (no feathers, no beetles to eat, sitting on wires).",
      "Story 'Nina and the Baby Sparrows': Nina's worry about baby sparrows trapped in her room during a family wedding.",
      "Compassionate solution: Leaving the window wide open so mother and father sparrow can feed their babies.",
      "Grammar: Describing words (adjectives: plump, tiny, worried, happy)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803d" text-anchor="middle">Nina and the Baby Sparrows — Window Open for Freedom</text>
      <!-- Open Window -->
      <rect x="220" y="45" width="140" height="85" rx="4" fill="#ffffff" stroke="#047857" stroke-width="2"/>
      <line x1="290" y1="45" x2="290" y2="130" stroke="#047857" stroke-width="2"/>
      <line x1="220" y1="88" x2="360" y2="88" stroke="#047857" stroke-width="2"/>
      <!-- Nest on Bookshelf -->
      <g transform="translate(100, 75)">
        <ellipse cx="40" cy="35" rx="25" ry="12" fill="#78350f"/>
        <circle cx="35" cy="25" r="5" fill="#f59e0b"/><circle cx="45" cy="25" r="5" fill="#f59e0b"/>
        <text x="40" y="58" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#78350f" text-anchor="middle">Sparrow Nest</text>
      </g>
      <!-- Happy Nina -->
      <g transform="translate(420, 60)">
        <circle cx="30" cy="25" r="14" fill="#fcd34d"/>
        <rect x="22" y="39" width="16" height="30" rx="3" fill="#ec4899"/>
        <text x="30" y="85" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9d174d" text-anchor="middle">Happy Nina</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#166534" text-anchor="middle">"We will lock the room door from outside, but leave the window wide open!"</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem & Story",
        q: "What do Robin and Jay think of people in 'Bird Talk'? Why was Nina crying and refusing to buy new wedding clothes in the market?",
        ans: "<strong>Answer:</strong><br>1. <strong>Robin &amp; Jay's Thoughts:</strong> Robin and Jay find human beings funny and strange because humans don't grow feathers, cannot fly, don't eat beetles, and cannot sit on wires and twigs.<br>2. <strong>Nina's Worry:</strong> Nina was crying because there was a sparrow's nest on her bookshelf with two tiny, featherless baby sparrows. If the house was locked for her aunt's wedding in Delhi, the mama and papa sparrows would not be able to enter to feed their hungry babies.",
        marks: 3,
        rubric: [
          { key: "Explanation of Robin & Jay's view of humans", marks: "1.5 M" },
          { key: "Nina's concern for trapped baby sparrows and closed room", marks: "1.5 M" }
        ]
      },
      {
        category: "Problem Solving • Kindness to Animals",
        q: "What clever plan did Nina's mother suggest that solved Nina's problem and protected the baby sparrows?",
        ans: "<strong>Mother's Plan:</strong><br>Mother suggested removing Nina's clothes and books from the room, locking the room door from the outside, but <strong>leaving the bedroom window wide open</strong>. This kept the house secure while allowing the parent sparrows to fly in and out freely to feed the chicks.",
        marks: 3,
        rubric: [
          { key: "Mention of locking door from outside", marks: "1.5 M" },
          { key: "Leaving window open for parent sparrows", marks: "1.5 M" }
        ]
      },
      {
        category: "Grammar • Adjectives (Describing Words)",
        q: "Pick the suitable describing word from brackets: (a) A ___ (fat / thin) baby sparrow was flying happily. (b) Nina was very ___ (sad / angry) about the birds. (c) A ___ (beautiful / ugly) red dress was bought for the wedding.",
        ans: "<strong>Answers:</strong><br>• (a) Two <strong>plump / fat</strong> baby sparrows were flying happily.<br>• (b) Nina was very <strong>sad / worried</strong> about the birds.<br>• (c) A <strong>beautiful</strong> red dress was bought for the wedding.",
        marks: 3,
        rubric: [
          { key: "Correct adjectives selected for all 3 blanks", marks: "3.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Urban Bird Conservation",
      text: "House sparrows were once common in every household balcony, but modern glass buildings and lack of grains have caused sparrow numbers to drop drastically.",
      question: "What two simple things can apartment residents do on their balconies to help house sparrows survive in cities?",
      answer: "1. Hang an earthen shallow water bowl (bird bath) and a small wooden birdhouse out of reach of predators.<br>2. Place small grains (millets, bajra, broken rice) on window sills daily for food.",
      rubric: "1.5M providing water bowl and safe nesting box + 1.5M providing grains daily."
    }
  },
  {
    id: "mg_u3",
    num: 3,
    unit: "Unit 3: Growth & Teamwork",
    title: "Little by Little & The Enormous Turnip",
    subtitle: "Acorn Growing into an Oak Tree & Classic Folk Tale of Collective Strength",
    concepts: [
      "Poem 'Little by Little': An acorn hidden in the earth slowly drinking dew, sending roots down and shoots up.",
      "Gradual growth: How small efforts every single day lead to immense strength and majestic branches.",
      "Story 'The Enormous Turnip': Old man, old woman, boy, and girl pulling together to harvest the giant turnip.",
      "The moral of collective effort: 'United we stand, divided we fall'."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">The Enormous Turnip — Teamwork Pulls the Giant Root Up!</text>
      <!-- Ground line -->
      <line x1="40" y1="110" x2="540" y2="110" stroke="#78350f" stroke-width="4"/>
      <!-- Turnip root -->
      <ellipse cx="140" cy="115" rx="35" ry="30" fill="#a855f7" stroke="#7e22ce" stroke-width="2"/>
      <!-- Turnip leaves -->
      <path d="M140,85 Q120,55 100,70" stroke="#16a34a" stroke-width="4" fill="none"/>
      <path d="M140,85 Q140,45 135,60" stroke="#16a34a" stroke-width="4" fill="none"/>
      <path d="M140,85 Q160,55 180,70" stroke="#16a34a" stroke-width="4" fill="none"/>
      <!-- Team pulling in line -->
      <g transform="translate(210, 65)">
        <circle cx="20" cy="20" r="10" fill="#fcd34d"/><rect x="14" y="30" width="12" height="25" fill="#3b82f6"/>
        <circle cx="70" cy="20" r="10" fill="#fcd34d"/><rect x="64" y="30" width="12" height="25" fill="#ec4899"/>
        <circle cx="120" cy="24" r="8" fill="#fcd34d"/><rect x="115" y="32" width="10" height="20" fill="#10b981"/>
        <circle cx="165" cy="24" r="8" fill="#fcd34d"/><rect x="160" y="32" width="10" height="20" fill="#f59e0b"/>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Old Man + Old Woman + Boy + Girl = Up Came the Enormous Turnip!</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem & Story",
        q: "What does the acorn need to grow into a mighty oak tree? Who all helped in pulling up the enormous turnip?",
        ans: "<strong>Answer:</strong><br>1. <strong>Acorn's Growth:</strong> The acorn needs fertile soil to hide in, cool morning dew drops to drink, warm sunshine, and fresh air to grow roots downward and slender branches upward year by year.<br>2. <strong>Turnip Team:</strong> Four people pulled together: <strong>the old man, the old woman, the young boy, and the young girl</strong>.",
        marks: 3,
        rubric: [
          { key: "Acorn's growth requirements (soil, dew, sunlight, time)", marks: "1.5 M" },
          { key: "All 4 characters in the turnip pulling line identified", marks: "1.5 M" }
        ]
      },
      {
        category: "Moral & Character Insight",
        q: "Could the old man pull out the turnip by himself? What lesson does this teach us about doing difficult tasks?",
        ans: "<strong>Moral Lesson:</strong><br>• No, the old man could not pull out the giant turnip alone, nor could the old woman and boy alone.<br>• <strong>Lesson:</strong> When a task is too big for a single individual, coming together and working as a united team achieves victory easily. Cooperation and teamwork conquer difficulties.",
        marks: 3,
        rubric: [
          { key: "Correct statement of old man's inability alone", marks: "1.0 M" },
          { key: "Clear moral of unity, cooperation, and teamwork", marks: "2.0 M" }
        ]
      },
      {
        category: "Vocabulary • Plant Growth Terms",
        q: "Give the meaning of: (a) Slender, (b) Mighty, (c) Enormous. Use 'enormous' in a sentence.",
        ans: "<strong>Word Meanings:</strong><br>• (a) Slender: Thin, delicate, and graceful.<br>• (b) Mighty: Very strong, powerful, and grand.<br>• (c) Enormous: Extremely large in size or quantity.<br><br><strong>Sentence:</strong> 'The elephant walked through the forest with an <em>enormous</em> branch in its trunk.'",
        marks: 3,
        rubric: [
          { key: "Accurate definitions for all 3 words", marks: "1.5 M" },
          { key: "Correct grammatical sentence with enormous", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "School Cleanliness Drive Teamwork",
      text: "The playground was covered with heavy fallen tree branches after a severe storm. No single student could lift them.",
      question: "How can the students apply the principle of 'The Enormous Turnip' to clean their school playground safely?",
      answer: "1. Instead of trying to lift heavy branches individually, four to five students can lift each branch together under teacher supervision.<br>2. Working in coordinated teams makes heavy physical tasks light, safe, and quickly accomplished.",
      rubric: "1.5M collaborative lifting concept + 1.5M safety and efficiency benefits."
    }
  },
  {
    id: "mg_u4",
    num: 4,
    unit: "Unit 4: The Sea & Self-Worth",
    title: "Sea Song & A Little Fish Story",
    subtitle: "Poem on Hearing Ocean in a Shell & Classic Story of a Small Fish Saved by His Size",
    concepts: [
      "Poem 'Sea Song': Finding a curly seashell on the sand, taking it home, and hearing a soft song inside.",
      "Story 'A Little Fish Story': A tiny fish unhappy with his small size wishing to be big like others.",
      "The turning point: Getting caught in a fisherman's net, where all big fish are trapped, but the tiny fish slips through the mesh to freedom.",
      "Moral: Be grateful and content with who you are; every attribute has its unique purpose."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ecfeff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0e7490" text-anchor="middle">A Little Fish Story — Size Saved His Life!</text>
      <!-- Fishing Net Mesh -->
      <g stroke="#0284c7" stroke-width="1.5" opacity="0.6">
        <line x1="160" y1="50" x2="380" y2="50"/><line x1="160" y1="75" x2="380" y2="75"/>
        <line x1="160" y1="100" x2="380" y2="100"/><line x1="160" y1="125" x2="380" y2="125"/>
        <line x1="180" y1="45" x2="180" y2="130"/><line x1="220" y1="45" x2="220" y2="130"/>
        <line x1="260" y1="45" x2="260" y2="130"/><line x1="300" y1="45" x2="300" y2="130"/>
        <line x1="340" y1="45" x2="340" y2="130"/>
      </g>
      <!-- Big Fish trapped -->
      <ellipse cx="240" cy="88" rx="28" ry="15" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/>
      <polygon points="212,88 200,78 200,98" fill="#dc2626"/>
      <text x="240" y="92" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Big Fish (Trapped)</text>
      <!-- Tiny Fish escaping through mesh -->
      <ellipse cx="420" cy="88" rx="12" ry="7" fill="#34d399" stroke="#059669" stroke-width="1.5"/>
      <polygon points="408,88 402,83 402,93" fill="#059669"/>
      <text x="440" y="70" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#047857">Little Fish (Escaped!)</text>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0e7490" text-anchor="middle">"I will never again complain about being small!"</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem & Story",
        q: "Where did the child find the seashell, and what surprise happened when he held it to his ear? Why was the little fish unhappy at the beginning of the story?",
        ans: "<strong>Answer:</strong><br>1. <strong>Sea Song:</strong> The child found a curly seashell lying cold on the sea sand. When his mother held it to his ear, a soft, sweet, clear song seemed to sing from inside the shell.<br>2. <strong>Little Fish's Unhappiness:</strong> The little fish was constantly complaining because he was very tiny compared to the huge fish in his school and felt that being small made him unimportant.",
        marks: 3,
        rubric: [
          { key: "Correct shell discovery and song heard from inside", marks: "1.5 M" },
          { key: "Little fish's complaint about his small size", marks: "1.5 M" }
        ]
      },
      {
        category: "Turning Point & Moral Discovery",
        q: "What happened when the fishermen hauled their net out of the water? How did being small save the little fish's life?",
        ans: "<strong>Climax & Moral:</strong><br>• When the fishermen pulled the great net into the boat, all the big fish flopped helplessly, trapped by the netting.<br>• Because the little fish was so small, he wriggled easily through the tiny gaps in the net's mesh and splashed back down into the cool, safe ocean.<br>• From that day on, he never wished to be a single bit bigger!",
        marks: 3,
        rubric: [
          { key: "Description of net hauling and big fish trapped", marks: "1.5 M" },
          { key: "Little fish slipping through mesh gaps to safety", marks: "1.5 M" }
        ]
      },
      {
        category: "Vocabulary • Collective Nouns",
        q: "Fill in the blanks with suitable collective nouns: (A ___ of fish, A ___ of birds, A ___ of wolves, A ___ of cows).",
        ans: "<strong>Collective Nouns:</strong><br>• A <strong>school / shoal</strong> of fish<br>• A <strong>flock</strong> of birds<br>• A <strong>pack</strong> of wolves<br>• A <strong>herd</strong> of cows",
        marks: 2,
        rubric: [
          { key: "Correct collective nouns for all 4 groups", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Embracing Individuality & Self-Acceptance",
      text: "In a school play, Kabir was sad because he was shorter than his classmates and thought he would not get a good role.",
      question: "How can the teacher help Kabir understand that each person has unique strengths just like the little fish in the story?",
      answer: "1. The teacher can explain that being agile, light, or quick allows children to excel in unique roles such as a fast runner, dancer, or special story character.<br>2. Reminding students that outer appearance does not determine talent helps children build self-worth and genuine pride in who they are.",
      rubric: "1.5M recognizing diverse talents + 1.5M building healthy self-esteem."
    }
  },
  {
    id: "mg_u5",
    num: 5,
    unit: "Unit 5: Market & Kindness",
    title: "The Balloon Man & The Yellow Butterfly",
    subtitle: "Poem on Colourful Market Balloons & Gentle Story of Freeing a Butterfly from a Spider's Web",
    concepts: [
      "Poem 'The Balloon Man': A vendor standing in the market square with bunches of red, purple, blue, and green balloons.",
      "Story 'The Yellow Butterfly': Sonu chasing a pretty yellow butterfly resting on a red rose, lotus leaf, and peach tree.",
      "Rescuing from danger: The butterfly caught in a hungry black spider's web, and Sonu setting it free to flutter happily in the sky.",
      "Vocabulary: Colour adjectives and gentle animal handling verbs."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">The Yellow Butterfly — Sonu Sets the Butterfly Free!</text>
      <!-- Spider Web -->
      <g stroke="#94a3b8" stroke-width="1.2" transform="translate(140, 50)">
        <polygon points="50,10 90,40 75,80 25,80 10,40" fill="none"/>
        <line x1="50" y1="45" x2="50" y2="10"/><line x1="50" y1="45" x2="90" y2="40"/>
        <line x1="50" y1="45" x2="75" y2="80"/><line x1="50" y1="45" x2="25" y2="80"/>
        <line x1="50" y1="45" x2="10" y2="40"/>
        <!-- Spider -->
        <circle cx="50" cy="45" r="5" fill="#0f172a"/>
      </g>
      <!-- Free Yellow Butterfly -->
      <g transform="translate(340, 65)">
        <ellipse cx="25" cy="20" rx="4" ry="10" fill="#0f172a"/>
        <ellipse cx="14" cy="15" rx="10" ry="7" fill="#fde047" stroke="#ca8a04" stroke-width="1"/>
        <ellipse cx="36" cy="15" rx="10" ry="7" fill="#fde047" stroke="#ca8a04" stroke-width="1"/>
        <ellipse cx="16" cy="26" rx="8" ry="5" fill="#fde047" stroke="#ca8a04" stroke-width="1"/>
        <ellipse cx="34" cy="26" rx="8" ry="5" fill="#fde047" stroke="#ca8a04" stroke-width="1"/>
        <text x="25" y="48" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#ca8a04" text-anchor="middle">Free &amp; Happy!</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#9a3412" text-anchor="middle">"Sonu smiled and shouted: 'Fly away, butterfly! Fly away!' It looked so pretty flying free."</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem & Story",
        q: "Where does the Balloon Man stand in the poem? Why did Sonu decide to let the yellow butterfly go in the end?",
        ans: "<strong>Answer:</strong><br>1. <strong>The Balloon Man:</strong> The balloon man stands in the <strong>market square</strong> holding bunches of bright balloons tied with string on sunny and windy market days.<br>2. <strong>Sonu's Kindness:</strong> Sonu initially chased the butterfly to catch it. But when he saw it struggling helplessly in the spider's web, he realized how sad and frightened it looked in his hands. He wanted it to be happy, so he released it to fly freely from flower to flower.",
        marks: 3,
        rubric: [
          { key: "Correct location of the balloon man in market square", marks: "1.0 M" },
          { key: "Clear explanation of Sonu's empathy and decision to free it", marks: "2.0 M" }
        ]
      },
      {
        category: "Sequencing Events • Story Flow",
        q: "Where did the butterfly rest before getting caught in the web? List the three places Sonu saw it land.",
        ans: "<strong>Sequence of Places:</strong><br>1. First, on a <strong>red rose</strong> in the garden.<br>2. Second, floating on a <strong>floating lotus leaf</strong> in the pond.<br>3. Third, perched among the sweet <strong>pink peach blossoms</strong> on the peach tree.",
        marks: 3,
        rubric: [
          { key: "Correct three resting spots in order", marks: "3.0 M" }
        ]
      },
      {
        category: "Grammar • Opposites",
        q: "Write the opposites for: (a) Never, (b) Small, (c) High, (d) Catch.",
        ans: "<strong>Opposites:</strong><br>• (a) Never × <strong>Always</strong><br>• (b) Small × <strong>Big / Large</strong><br>• (c) High × <strong>Low</strong><br>• (d) Catch × <strong>Release / Drop</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct opposites for all 4 words", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Wildlife Freedom vs Caging",
      text: "Some people trap colourful wild birds like parrots in tiny cages to keep as pets in their living rooms.",
      question: "Based on the moral of 'The Yellow Butterfly', why is freedom better for wild creatures than life inside a cage?",
      answer: "1. Birds and butterflies are born with wings meant to fly in the open blue sky and live naturally in trees.<br>2. Confining them in cages causes misery and prevents them from living natural lives; true love for nature means admiring animals in freedom, not caging them.",
      rubric: "1.5M natural purpose of flight and habitat + 1.5M ethical argument against caging."
    }
  },
  {
    id: "mg_u6",
    num: 6,
    unit: "Unit 6: Travel & Community",
    title: "Trains & The Story of the Road",
    subtitle: "James S. Tippett's Poem on Trains & The Morning Awakening of the Village Road",
    concepts: [
      "Poem 'Trains': Over mountains, plains, and rivers carry passenger cars, mail, and precious freight day and night.",
      "Story 'The Story of the Road': Early morning silence on the road, awakened by chirping sparrows, caw of crows, newspaper boy's cycle bell, and vegetable seller.",
      "Anthropomorphic storytelling: The road wishing the noisy crow would realize it is already wide awake.",
      "Transportation vocabulary: freight, passengers, mail, level crossing, bicycle bell."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Trains &amp; The Morning Road — Life on the Move</text>
      <!-- Train on tracks -->
      <line x1="50" y1="95" x2="530" y2="95" stroke="#334155" stroke-width="3"/>
      <!-- Engine -->
      <rect x="70" y="55" width="55" height="40" rx="4" fill="#dc2626"/>
      <rect x="110" y="45" width="12" height="15" fill="#334155"/>
      <circle cx="85" cy="95" r="7" fill="#1e293b"/><circle cx="110" cy="95" r="7" fill="#1e293b"/>
      <!-- Bogie 1 -->
      <rect x="135" y="60" width="60" height="35" rx="3" fill="#2563eb"/>
      <circle cx="150" cy="95" r="6" fill="#1e293b"/><circle cx="180" cy="95" r="6" fill="#1e293b"/>
      <!-- Bogie 2 -->
      <rect x="205" y="60" width="60" height="35" rx="3" fill="#16a34a"/>
      <circle cx="220" cy="95" r="6" fill="#1e293b"/><circle cx="250" cy="95" r="6" fill="#1e293b"/>
      <!-- Road Vendors icon -->
      <g transform="translate(340, 60)" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155">
        <rect x="0" y="0" width="180" height="55" rx="6" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
        <text x="15" y="20">🔔 Newspaper Bicycle (Tring-tring)</text>
        <text x="15" y="40">🥬 Vegetable Man (Peas, carrots!)</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e40af" text-anchor="middle">"Thousands of freight cars all rushing on through dusk and dawn!"</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem & Story",
        q: "What precious loads do the trains carry across the country in 'Trains'? Who are the first creatures and people to awaken the road in the morning?",
        ans: "<strong>Answer:</strong><br>1. <strong>Precious Cargo:</strong> Trains carry <strong>thousands of passengers, precious mail, letters, and essential freight</strong> across mountains, plains, and rivers without failing.<br>2. <strong>First to Awaken the Road:</strong> The birds (chirping sparrows and cawing crows), the newspaper boy ringing his bicycle bell ('Tring-a-ling!'), and the vegetable seller calling out fresh peas, cauliflowers, and potatoes.",
        marks: 3,
        rubric: [
          { key: "Correct freight, mail, and passenger details", marks: "1.5 M" },
          { key: "Correct list of early morning road characters", marks: "1.5 M" }
        ]
      },
      {
        category: "Story Humour • The Annoyed Road",
        q: "Why was the road annoyed with the crow in 'The Story of the Road'?",
        ans: "<strong>Answer:</strong><br>The crow kept cawing foolishly: 'Caw! Caw! Wake up! Wake up!'. The road was annoyed because it was already wide awake, seeing the newspaper boy, smelling the vegetables, and hearing school children chattering. The road thought: 'Can't you see, you silly bird? I am wide awake!'",
        marks: 2,
        rubric: [
          { key: "Explanation of crow's repetitive wake up call", marks: "1.0 M" },
          { key: "Road's annoyance at already being wide awake", marks: "1.0 M" }
        ]
      },
      {
        category: "Vocabulary • Sounds Around Us",
        q: "Match the sounds with who makes them: (1) Bicycle bell, (2) Shoes of children, (3) Crow, (4) Sparrows. Sounds: (Chirp-chirp, Caw-caw, Tring-tring, Tramp-tramp).",
        ans: "<strong>Sound Matching:</strong><br>• 1. Bicycle bell → <strong>Tring-tring</strong><br>• 2. Shoes of children → <strong>Tramp-tramp</strong><br>• 3. Crow → <strong>Caw-caw</strong><br>• 4. Sparrows → <strong>Chirp-chirp</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct matching for all 4 sound words", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Road Safety Rules for Children",
      text: "Every morning, hundreds of students walk, cycle, or ride buses along busy city roads to reach school safely.",
      question: "State three golden road safety rules every primary school student must follow when walking to school.",
      answer: "1. <strong>Use the Footpath:</strong> Always walk on the designated pedestrian pavement or footpath.<br>2. <strong>Zebra Crossing:</strong> Cross the road only at marked zebra crossings or pedestrian footbridges.<br>3. <strong>Look Both Ways:</strong> Stop, look right, look left, and look right again before crossing, never running blindly across roads.",
      rubric: "1M footpath rule + 1M zebra crossing + 1M look both ways rule."
    }
  },
  {
    id: "mg_u7",
    num: 7,
    unit: "Unit 7: Animals & Companionship",
    title: "Puppy and I & Little Tiger, Big Tiger",
    subtitle: "A.A. Milne's Poem on Choosing a Playful Puppy & Story of a Tiger Cub Growing in the Wild",
    concepts: [
      "Poem 'Puppy and I': Meeting a Man, Horse, and Puppy; choosing to go with the puppy who is going to roll and play.",
      "Story 'Little Tiger, Big Tiger': Mother tigress and her cub living near a river in the shady jungle.",
      "Hunting in the wild: Hunting for deer and wild boar; cub chasing a little leaping frog.",
      "The roar of adulthood: The cub growing big and terrifying other jungle animals with his deep roar."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#b45309" text-anchor="middle">Little Tiger, Big Tiger — Jungle Life &amp; Growing Up</text>
      <!-- Big Mother Tigress -->
      <g transform="translate(140, 60)">
        <ellipse cx="40" cy="30" rx="35" ry="20" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
        <!-- Stripes -->
        <line x1="25" y1="15" x2="25" y2="45" stroke="#000000" stroke-width="2.5"/>
        <line x1="40" y1="12" x2="40" y2="48" stroke="#000000" stroke-width="2.5"/>
        <line x1="55" y1="15" x2="55" y2="45" stroke="#000000" stroke-width="2.5"/>
        <circle cx="75" cy="22" r="14" fill="#f97316" stroke="#c2410c" stroke-width="1.5"/>
        <text x="45" y="70" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">Mother Tigress</text>
      </g>
      <!-- Little Tiger Cub -->
      <g transform="translate(360, 75)">
        <ellipse cx="25" cy="20" rx="20" ry="12" fill="#fdba74" stroke="#ea580c" stroke-width="1.5"/>
        <line x1="20" y1="10" x2="20" y2="30" stroke="#000000" stroke-width="1.5"/>
        <line x1="28" y1="10" x2="28" y2="30" stroke="#000000" stroke-width="1.5"/>
        <circle cx="45" cy="15" r="9" fill="#fdba74" stroke="#ea580c" stroke-width="1"/>
        <text x="30" y="50" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#c2410c" text-anchor="middle">Tiger Cub</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#78350f" text-anchor="middle">"He stayed close by his mother's side when the night was dark and still."</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem & Story",
        q: "Why did the child in 'Puppy and I' decide to go with the puppy instead of the man or horse? What happened when the little tiger cub chased a frog?",
        ans: "<strong>Answer:</strong><br>1. <strong>Choosing the Puppy:</strong> The man was going to the village to buy bread, and the horse was going for hay. But the puppy was going up in the hills to <strong>roll and play</strong>, which matched the child's playful spirit.<br>2. <strong>Chasing the Frog:</strong> The tiger cub chased a bouncing green frog far away from his mother in the dark jungle. When he caught the frog, he looked up and saw another giant tiger staring at him! Luckily, his mother tigress roared loudly, driving the stranger away.",
        marks: 3,
        rubric: [
          { key: "Correct explanation of choosing the puppy for play", marks: "1.5 M" },
          { key: "Details of chasing frog and encountering stranger tiger", marks: "1.5 M" }
        ]
      },
      {
        category: "Animal Homes & Sounds",
        q: "Give the name of the home and young one for: (1) Tiger, (2) Horse, (3) Dog. Options: (Lair/Den, Stable, Kennel; Cub, Foal, Puppy).",
        ans: "<strong>Animal Facts:</strong><br>• 1. Tiger: Home = <strong>Lair / Den</strong> | Young One = <strong>Cub</strong><br>• 2. Horse: Home = <strong>Stable</strong> | Young One = <strong>Foal / Colt</strong><br>• 3. Dog: Home = <strong>Kennel</strong> | Young One = <strong>Puppy</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct homes and young ones for all 3 animals (1M each)", marks: "3.0 M" }
        ]
      },
      {
        category: "Wildlife Conservation Awareness",
        q: "The tiger is India's National Animal. Why are tigers endangered, and what is 'Project Tiger'?",
        ans: "<strong>Tiger Conservation:</strong><br>1. <strong>Why Endangered:</strong> Tigers lost their forest habitats due to deforestation and were illegally hunted by poachers for their skins and bones.<br>2. <strong>Project Tiger:</strong> Launched by the Government of India in 1973, Project Tiger created protected National Parks and Tiger Reserves (like Jim Corbett and Ranthambore) to save tigers and restore healthy forest ecosystems.",
        marks: 3,
        rubric: [
          { key: "Reasons for endangerment (poaching and habitat loss)", marks: "1.5 M" },
          { key: "Explanation of Project Tiger and protected reserves", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Forest Food Chain Balance",
      text: "Tigers are apex predators at the top of the forest food chain. If tigers disappear from a forest, the deer population multiplies out of control.",
      question: "How does the presence of tigers maintain the ecological balance of plants and water in a jungle?",
      answer: "1. By controlling the population of herbivores like deer and wild boar, tigers prevent overgrazing of forest grass and young tree saplings.<br>2. This keeps the forest canopy thick, protects topsoil from erosion, and ensures natural water springs continue flowing.",
      rubric: "1.5M herbivore population control + 1.5M protecting vegetation and soil balance."
    }
  },
  {
    id: "mg_u8",
    num: 8,
    unit: "Unit 8: Communication & Family",
    title: "What's in the Mailbox? & My Silly Sister",
    subtitle: "Poem on Receiving Letters & Rabindranath Tagore's Humorous Story on an Innocent Baby Sister",
    concepts: [
      "Poem 'What's in the Mailbox?': Child watching postman bring letters for parents and deciding to write letters to friends so they write back.",
      "Story 'My Silly Sister': An elder brother complaining affectionately to his mother about his baby sister's innocent antics.",
      "Baby antics: Eating pebbles thinking they are real food, tearing book pages, laughing when scolded.",
      "Affectionate sibling bonds: The loving warmth underlying playful sibling teasing."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fdf2f8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#be185d" text-anchor="middle">What's in the Mailbox? — The Joy of Handwritten Letters</text>
      <!-- Red Postbox -->
      <g transform="translate(120, 45)">
        <rect x="10" y="20" width="40" height="65" rx="10" fill="#dc2626"/>
        <rect x="18" y="32" width="24" height="6" fill="#1e293b"/>
        <line x1="30" y1="85" x2="30" y2="105" stroke="#475569" stroke-width="4"/>
        <text x="30" y="122" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#991b1b" text-anchor="middle">Postbox</text>
      </g>
      <!-- Letter Envelope -->
      <g transform="translate(230, 65)">
        <rect x="0" y="0" width="60" height="40" rx="3" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
        <polyline points="0,0 30,22 60,0" fill="none" stroke="#dc2626" stroke-width="1.5"/>
        <rect x="42" y="6" width="12" height="14" fill="#fde047" stroke="#ca8a04" stroke-width="1"/>
        <text x="30" y="55" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9d174d" text-anchor="middle">Letter</text>
      </g>
      <!-- Brother & Baby Sister -->
      <g transform="translate(360, 55)">
        <circle cx="30" cy="20" r="12" fill="#fcd34d"/><rect x="22" y="32" width="16" height="28" fill="#3b82f6"/>
        <text x="30" y="75" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Elder Brother</text>
        <circle cx="80" cy="28" r="9" fill="#fcd34d"/><rect x="74" y="37" width="12" height="18" fill="#ec4899"/>
        <text x="80" y="72" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#be185d" text-anchor="middle">Baby Sister</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#be185d" text-anchor="middle">"She opens her mouth to swallow pebbles, thinking they are sweet candy!"</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem & Story",
        q: "What does the child plan to do in 'What's in the Mailbox?' so that letters arrive for him? What funny things does the baby sister do in Tagore's story?",
        ans: "<strong>Answer:</strong><br>1. <strong>Child's Plan:</strong> The child decides to write letters to his own friends so that they will write back and the postman will bring letters with his name on them.<br>2. <strong>Baby Sister's Antics:</strong><br>• She thinks pebbles are real food and tries to put them in her mouth.<br>• When her brother opens a book to study, she tears the pages with joy.<br>• When her brother scolds her by shaking his head, she giggles thinking it is a fun game.",
        marks: 3,
        rubric: [
          { key: "Correct child's strategy to write letters first", marks: "1.5 M" },
          { key: "Two humorous baby antics described accurately", marks: "1.5 M" }
        ]
      },
      {
        category: "Vocabulary • Letter Writing Terms",
        q: "What four things must be written on an envelope to ensure a letter reaches the correct destination?",
        ans: "<strong>Essential Envelope Details:</strong><br>1. <strong>Recipient's Full Name:</strong> Name of the person receiving the letter.<br>2. <strong>House Number &amp; Street:</strong> Exact residence location.<br>3. <strong>City / Village &amp; State:</strong> Geographic town and province.<br>4. <strong>PIN Code (Postal Index Number):</strong> 6-digit postal code for accurate delivery.",
        marks: 2,
        rubric: [
          { key: "All 4 postal address elements identified", marks: "2.0 M" }
        ]
      },
      {
        category: "Letter Writing Activity • Personal Letter",
        q: "Write a short 3-line invitation letter to your friend inviting them to your birthday party on Sunday.",
        ans: "<strong>Sample Letter:</strong><br>Dear Rohan,<br>Please come to my 8th birthday party this Sunday, 15th October, at 5:00 PM at my home. We will play fun games, burst balloons, and eat delicious cake together. I look forward to seeing you!<br>Your friend,<br>Aarav.",
        marks: 3,
        rubric: [
          { key: "Salutation and clear invitation details (date, time, place)", marks: "1.5 M" },
          { key: "Correct closing and friendly sign-off", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Digital Communication vs Traditional Post",
      text: "Today, people send quick WhatsApp messages and emails, but receiving a handwritten postcard in the mailbox still feels magical.",
      question: "Why does a handwritten postcard from a grandparent create a deeper emotional connection than a short text message?",
      answer: "1. A handwritten postcard shows personal time, care, and effort: the sender chose the card, wrote carefully in their own handwriting, bought a stamp, and posted it.<br>2. It is a tangible keepsake that a child can touch, re-read, and cherish in an album for years.",
      rubric: "1.5M personal effort and tangible keepsake + 1.5M emotional permanence."
    }
  },
  {
    id: "mg_u9",
    num: 9,
    unit: "Unit 9: Courage & Family Devotion",
    title: "Don't Tell & He is My Brother",
    subtitle: "Poem on Secret Potential of Childhood & Heartwarming Story of Meena Carrying Her Little Brother",
    concepts: [
      "Poem 'Don't Tell': A child patient with adults who say he is too small, secretly knowing he is a giant inside waiting to show the world.",
      "Story 'He is My Brother': Twelve-year-old Meena carrying her four-year-old brother who cannot walk up a holy hill path.",
      "The traveller's question: 'Why are you carrying that heavy load, my child?'",
      "Meena's unforgettable reply: 'He is not a load, he is my brother!'"
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">He is My Brother — Love That Lightens Every Load</text>
      <!-- Mountain winding path -->
      <path d="M50,130 Q180,120 250,85 T450,55" fill="none" stroke="#94a3b8" stroke-width="12" stroke-linecap="round"/>
      <path d="M50,130 Q180,120 250,85 T450,55" fill="none" stroke="#e2e8f0" stroke-width="8" stroke-linecap="round"/>
      <!-- Meena carrying brother -->
      <g transform="translate(240, 50)">
        <!-- Meena -->
        <circle cx="20" cy="20" r="10" fill="#fcd34d"/>
        <rect x="14" y="30" width="12" height="26" rx="2" fill="#ec4899"/>
        <!-- Little Brother on back -->
        <circle cx="8" cy="18" r="8" fill="#fcd34d"/>
        <rect x="2" y="26" width="10" height="18" rx="2" fill="#3b82f6"/>
        <text x="50" y="30" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1e3a8a">Meena &amp; Brother</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e40af" text-anchor="middle">"Load? He is not a load! He is my brother!"</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem & Story",
        q: "What secret does the child keep inside in 'Don't Tell'? Where were the people in 'He is My Brother' going?",
        ans: "<strong>Answer:</strong><br>1. <strong>Child's Secret:</strong> Although adults say he is too small to do big things, the child secretly knows that inside him sleeps a powerful giant capable of doing wonderful deeds when the right time comes.<br>2. <strong>People's Destination:</strong> The people in the story were walking up a winding path through pine trees to visit a holy shrine on the mountain.",
        marks: 3,
        rubric: [
          { key: "Explanation of child's secret giant potential", marks: "1.5 M" },
          { key: "Destination as holy shrine on mountain", marks: "1.5 M" }
        ]
      },
      {
        category: "Character & Emotion Analysis",
        q: "Why was Meena carrying her four-year-old brother on her back? Why did she smile when the man asked if she felt the load?",
        ans: "<strong>Answer:</strong><br>1. <strong>Why carried:</strong> Her little brother was four years old and was unable to walk due to physical disability.<br>2. <strong>Meena's Smile:</strong> She smiled in surprise because to her, he was her cherished brother whom she loved deeply. When you carry someone out of pure love, they never feel like a burden or 'load'.",
        marks: 3,
        rubric: [
          { key: "Brother's inability to walk", marks: "1.5 M" },
          { key: "Profound explanation that love transforms burden into joy", marks: "1.5 M" }
        ]
      },
      {
        category: "Grammar • Opposites with 'Un-' prefix",
        q: "Add the prefix 'un-' to form opposites for: (a) Able, (b) Happy, (c) Kind, (d) Fair.",
        ans: "<strong>Opposites using 'un-':</strong><br>• (a) Able → <strong>Unable</strong><br>• (b) Happy → <strong>Unhappy</strong><br>• (c) Kind → <strong>Unkind</strong><br>• (d) Fair → <strong>Unfair</strong>",
        marks: 2,
        rubric: [
          { key: "Correct prefix usage for all 4 words", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Inclusion & Support for Differently-Abled Peers",
      text: "A classmate who uses a wheelchair needs assistance reaching the first-floor computer lab in a school without a lift ramp.",
      question: "How should students and school authorities work together to create an inclusive environment for differently-abled students?",
      answer: "1. Classmates can take turns carrying schoolbags and keeping them company with respect and cheerful companionship.<br>2. School authorities must install accessible ramps, grab rails, and hold ground-floor classes so every child can move independently with dignity.",
      rubric: "1.5M peer assistance and empathy + 1.5M institutional accessibility (ramps)."
    }
  },
  {
    id: "mg_u10",
    num: 10,
    unit: "Unit 10: Animal Adaptations & Wonder",
    title: "How Creatures Move & The Ship of the Desert",
    subtitle: "Poem on Animals' Natural Motion & Famous Dialogue Between the Camel and the Lion",
    concepts: [
      "Poem 'How Creatures Move': Lion walks on padded paws, squirrel leaps, fly crawls, seals dive, worms wiggle, and boys/girls run and leap.",
      "Story 'The Ship of the Desert': The Camel explaining his desert adaptations to the King of the Forest, the Lion.",
      "Camel's survival tools: Thick padded feet that do not burn on hot desert sand, hump storing fat for weeks, and eating thorny bushes without hurting thick tongue.",
      "Comparative dialogue and recognizing natural biological adaptations."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#b45309" text-anchor="middle">The Ship of the Desert — Camel's Unique Desert Adaptations</text>
      <!-- Camel -->
      <g transform="translate(100, 48)">
        <!-- Legs -->
        <line x1="45" y1="50" x2="40" y2="85" stroke="#ca8a04" stroke-width="4"/>
        <line x1="85" y1="50" x2="80" y2="85" stroke="#ca8a04" stroke-width="4"/>
        <!-- Body with Hump -->
        <ellipse cx="65" cy="50" rx="30" ry="18" fill="#eab308" stroke="#ca8a04" stroke-width="1.5"/>
        <circle cx="65" cy="32" r="12" fill="#eab308" stroke="#ca8a04" stroke-width="1.5"/>
        <!-- Neck & Head -->
        <path d="M90,50 Q105,25 110,15" stroke="#eab308" stroke-width="6" fill="none"/>
        <circle cx="112" cy="15" r="7" fill="#eab308"/>
        <!-- Padded foot note -->
        <rect x="25" y="85" width="28" height="6" rx="2" fill="#a16207"/>
        <text x="65" y="105" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#854d0e" text-anchor="middle">Padded Feet</text>
      </g>
      <!-- Adaptation Cards -->
      <g transform="translate(260, 48)" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e">
        <rect x="0" y="0" width="240" height="22" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
        <text x="12" y="15">🐪 Padded Feet: Walk on 200° hot desert sand</text>
        <rect x="0" y="28" width="240" height="22" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
        <text x="12" y="43">💧 Water Reserve: Drinks 200 bottles at once</text>
        <rect x="0" y="56" width="240" height="22" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
        <text x="12" y="71">🌵 Thorny Diet: Sharp thorns cannot prick thick tongue</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e" text-anchor="middle">Every creature is master in its own natural habitat!</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem & Story",
        q: "Why is the camel called 'The Ship of the Desert'? How do the padded feet of the camel help it run across burning sand dunes?",
        ans: "<strong>Answer:</strong><br>1. <strong>Ship of the Desert:</strong> Just as a ship travels smoothly across ocean waters carrying people and cargo, the camel is the only animal that can travel tirelessly across vast sandy deserts without food or water for days.<br>2. <strong>Padded Feet:</strong> The camel has thick, wide, flat padded feet. The broad pads prevent its feet from sinking into loose sand, and the thick skin prevents the burning heat of the sand (over 200°F) from scorching its soles.",
        marks: 3,
        rubric: [
          { key: "Explanation of Ship of the Desert metaphor", marks: "1.5 M" },
          { key: "Scientific explanation of wide thick padded feet", marks: "1.5 M" }
        ]
      },
      {
        category: "Animal Adaptations • Biology in English",
        q: "What does the camel store in its hump, and what does it eat when there is no grass in the desert?",
        ans: "<strong>Adaptation Facts:</strong><br>• <strong>The Hump:</strong> The camel stores <strong>fat</strong> (stored food reserve) in its hump, which its body uses when food is unavailable.<br>• <strong>Desert Diet:</strong> It eats <strong>prickly thorns and desert bushes</strong>. Its mouth and tongue are so thick that sharp thorns cannot prick or hurt it.",
        marks: 3,
        rubric: [
          { key: "Correct fact: stores fat (not liquid water) in hump", marks: "1.5 M" },
          { key: "Thorny bushes and thick mouth explanation", marks: "1.5 M" }
        ]
      },
      {
        category: "Movement Words • Action Verbs",
        q: "Match each creature with its typical movement: (1) Lion, (2) Monkey, (3) Worm, (4) Bird. Movements: (Wiggles, Walks on padded paws, Swings by tail, Flies in air).",
        ans: "<strong>Movement Matching:</strong><br>• 1. Lion → <strong>Walks on padded paws</strong><br>• 2. Monkey → <strong>Swings by tail</strong><br>• 3. Worm → <strong>Wiggles</strong><br>• 4. Bird → <strong>Flies in air</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct matching for all 4 animal motions", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Animal Adaptations Across Biomes",
      text: "While the camel thrives in hot Thar deserts, the Polar Bear thrives in freezing Arctic snow, and the Lion rules African grasslands.",
      question: "Why would a Lion struggle to survive in the Thar desert even though he is called the 'King of the Jungle'?",
      answer: "1. The Lion does not have wide padded feet to prevent sinking in loose sand, nor does he have thick soles to tolerate burning ground.<br>2. The Lion requires large quantities of water daily and abundant prey animals (zebras, deer), which do not exist across waterless desert dunes.",
      rubric: "1.5M physical feet limitations in hot sand + 1.5M lack of water and prey in desert."
    }
  }
];

module.exports = { marigoldUnits };
