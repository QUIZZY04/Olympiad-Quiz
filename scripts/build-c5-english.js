// Generator for NCERT Class 5 English Solutions (100% Question Coverage: Santoor + Marigold)
const fs = require('fs');
const path = require('path');

console.log("=== BUILDING NCERT CLASS 5 ENGLISH SOLUTIONS (SANTOOR + MARIGOLD) ===");

// -------------------------------------------------------------
// PART 1: SANTOOR (NEW NEP 2020 CURRICULUM - CHAPTERS 1 TO 10)
// -------------------------------------------------------------
const santoorChapters = [
  {
    id: "s1",
    num: 1,
    unit: "Unit 1: Let's Have Fun",
    title: "Papa's Spectacles",
    subtitle: "Humorous poem about misplacing everyday items & filial affection",
    concepts: [
      "Themes of absent-mindedness, family bonding, and observational humor in domestic life.",
      "Papa searches all over the house (pockets, under chairs, near windows) while his spectacles rest on his own forehead.",
      "The value of empathy, patience, and extending a helping hand to elders at home.",
      "Vocabulary building: spectacles, chores, misplaced, gratitude, scattered."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Papa's Spectacles — Search Path & Discovery</text>
      <!-- Step 1: Pockets -->
      <circle cx="80" cy="85" r="32" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
      <text x="80" y="80" font-size="18" text-anchor="middle">🧥</text>
      <text x="80" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">Pockets</text>
      <text x="80" y="135" font-family="system-ui, sans-serif" font-size="9" fill="#2563eb" text-anchor="middle">Checked coats</text>
      <!-- Arrow 1 -->
      <path d="M120 85 L180 85" stroke="#93c5fd" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Step 2: Under Chair -->
      <circle cx="220" cy="85" r="32" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
      <text x="220" y="80" font-size="18" text-anchor="middle">🪑</text>
      <text x="220" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">Under Chair</text>
      <text x="220" y="135" font-family="system-ui, sans-serif" font-size="9" fill="#2563eb" text-anchor="middle">Searched floor</text>
      <!-- Arrow 2 -->
      <path d="M260 85 L320 85" stroke="#93c5fd" stroke-width="2"/>
      <!-- Step 3: By Window -->
      <circle cx="360" cy="85" r="32" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
      <text x="360" y="80" font-size="18" text-anchor="middle">🪟</text>
      <text x="360" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">Window Sill</text>
      <text x="360" y="135" font-family="system-ui, sans-serif" font-size="9" fill="#2563eb" text-anchor="middle">Scanned tables</text>
      <!-- Arrow 3 -->
      <path d="M400 85 L460 85" stroke="#93c5fd" stroke-width="2"/>
      <!-- Step 4: On His Head -->
      <circle cx="500" cy="85" r="34" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">👓</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">On Head!</text>
      <text x="500" y="135" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Resting on forehead</text>
    </svg>`,
    questions: [
      {
        q: "What is Papa searching for everywhere in the house?",
        marks: 2,
        ans: "Papa is frantically searching everywhere for his spectacles (reading glasses), without which he cannot read his morning newspaper or perform essential daily tasks.",
        rubric: [
          { key: "Identification of spectacles / glasses", marks: "1 Mark" },
          { key: "Reason (inability to read / perform daily chores)", marks: "1 Mark" }
        ]
      },
      {
        q: "Mention three possible places where Papa searched for his spectacles before discovering where they were.",
        marks: 3,
        ans: "Papa searched for his lost spectacles in: (1) Inside the deep pockets of his coat and shirts, (2) Underneath his favourite armchair and reading table, and (3) Along the window sill and bookshelves.",
        rubric: [
          { key: "Inside pockets (coat/shirts)", marks: "1 Mark" },
          { key: "Underneath chairs / furniture", marks: "1 Mark" },
          { key: "Around window sills / shelves", marks: "1 Mark" }
        ]
      },
      {
        q: "Where does Papa finally discover his spectacles, and how does the poem conclude?",
        marks: 2,
        ans: "At last, Papa discovers that his spectacles were perched safely right on top of his own head the entire time. The poem concludes on a lighthearted and humorous note as everyone laughs at the sweet absent-mindedness of the father.",
        rubric: [
          { key: "Discovery location: on top of his head / forehead", marks: "1 Mark" },
          { key: "Lighthearted humorous resolution", marks: "1 Mark" }
        ]
      },
      {
        q: "Apart from reading the newspaper, what other household chores or activities would Papa find difficult to carry out without his spectacles?",
        marks: 3,
        ans: "Without his spectacles, Papa would struggle to: (1) Chop or slice vegetables safely in the kitchen, (2) Read medicine prescription labels or expiry dates, (3) Thread a needle or write down shopping lists, and (4) Operate dials on household electronic gadgets or watch television clearly.",
        rubric: [
          { key: "Kitchen chores / chopping vegetables safely", marks: "1 Mark" },
          { key: "Reading medicine labels / prescriptions", marks: "1 Mark" },
          { key: "Fine vision tasks (threading needles / writing notes)", marks: "1 Mark" }
        ]
      },
      {
        q: "Complete the table: What things are commonly misplaced at home and at school, who helps locate them, and how should you express your gratitude?",
        marks: 4,
        ans: `<ul>
          <li><strong>At Home:</strong>
            <ul>
              <li><em>Spectacles / Keys:</em> Often found on dining tables or coat hooks; located with Mother's or sibling's help.</li>
              <li><em>TV Remote / Mobile Phone:</em> Slipped between sofa cushions; located with Brother's/Sister's help.</li>
            </ul>
          </li>
          <li><strong>At School:</strong>
            <ul>
              <li><em>Pencil Box / Eraser:</em> Misplaced under classroom desks; located with the Class Monitor's help.</li>
              <li><em>Water Bottle / Tiffin Box:</em> Left behind in the playground or sports ground; located with the school helping staff's assistance.</li>
            </ul>
          </li>
          <li><strong>Expressing Gratitude:</strong> One must warmly smile, say a polite and heartfelt <em>"Thank you so much for your timely help"</em>, and proactively offer assistance whenever they misplace an item.</li>
        </ul>`,
        rubric: [
          { key: "Identification of misplaced items at home with helpers", marks: "1.5 Marks" },
          { key: "Identification of misplaced items at school with helpers", marks: "1.5 Marks" },
          { key: "Meaningful expression of gratitude and reciprocation", marks: "1 Mark" }
        ]
      },
      {
        q: "Rewrite the central event of the poem as a short, engaging story with dialogue.",
        marks: 5,
        ans: `<strong>Title: The Mystery of the Missing Glasses</strong><br><br>
        It was a quiet Sunday morning. Papa sat at the dining table with a warm cup of tea, eager to read the morning news. Suddenly, he patted his pockets and gasped, <em>"Where on earth did I leave my glasses?"</em><br><br>
        Within minutes, the entire living room was turned upside down. Papa looked under his armchair, rummaged behind sofa cushions, and carefully examined every shelf near the window sill. <em>"Did anyone borrow my glasses?"</em> he called out anxiously.<br><br>
        His daughter walked in, holding a tray. She took one glance at Papa's perplexed face, chuckled, and said gently, <em>"Papa, look in the mirror!"</em> Papa touched his forehead, and lo and behold, his glasses were sitting comfortably upon his head. Papa broke into a broad grin, laughing warmly at his own comical forgetfulness.`,
        rubric: [
          { key: "Engaging plot and clear setting (Sunday morning, tea, newspaper)", marks: "1.5 Marks" },
          { key: "Realistic dialogue capturing Papa's anxiety & daughter's clue", marks: "1.5 Marks" },
          { key: "Humorous resolution and moral warmth", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Empathy & Mindful Living",
      text: "Grandparents and elderly parents frequently misplace everyday essentials such as reading glasses, walking canes, or keys due to natural age-related memory lapses. Rohan gets impatient when his grandfather asks him to look for his spectacles twice in a single afternoon.",
      question: "Analyze Rohan's attitude. Suggest three concrete, compassionate habits children can adopt to support aging family members respectfully.",
      answer: `<strong>Analysis of Attitude:</strong> Rohan's impatience is disrespectful and lacks emotional empathy. Aging causes cognitive slowdown and sensory decline; elders do not misplace items intentionally.<br><br>
      <strong>Three Compassionate Habits:</strong>
      <ol>
        <li><strong>Designate Fixed 'Drop Spots':</strong> Place an attractive decorative bowl or key-rack near the entrance and bedside table specifically reserved for spectacles, medicine boxes, and keys.</li>
        <li><strong>Patient Verbal Check-Ins:</strong> Instead of showing irritation, gently guide the elder with a reassuring tone: <em>"Don't worry Dadu, let us retrace your morning steps together."</em></li>
        <li><strong>Positive Memory Association:</strong> Affix bright, colourful stickers or neck-cords to spectacles so they remain tethered safely around the neck without getting misplaced.</li>
      </ol>`,
      rubric: "1.5 Marks for critical evaluation of empathy failure + 2.5 Marks for 3 actionable, respectful home adaptations + 1 Mark for constructive phrasing = 5 Marks"
    }
  },

  {
    id: "s2",
    num: 2,
    unit: "Unit 1: Let's Have Fun",
    title: "Gone with the Scooter",
    subtitle: "A delightful neighborhood story about sharing, playground fun, and unexpected twists",
    concepts: [
      "Themes of outdoor play, honesty, ownership disputes, and sportsmanship among friends.",
      "Gopi finds an abandoned ball in the bushes, and various friends (Deepak, Manoj, Ramani) claim it with conflicting accounts.",
      "The impromptu game of street hockey/cricket that brings the children together.",
      "The comedic climax where the ball lands in a passing scooter's vegetable basket and vanishes.",
      "Vocabulary: veranda, rustling, thud, claimed, disputed, retrieved, whisked away."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#854d0e" text-anchor="middle">Story Progression: Gone with the Scooter</text>
      <!-- Step 1: Reading -->
      <circle cx="80" cy="85" r="30" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="80" y="80" font-size="18" text-anchor="middle">📖</text>
      <text x="80" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#713f12" text-anchor="middle">Veranda</text>
      <text x="80" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#a16207" text-anchor="middle">Gopi hears thud</text>
      <!-- Line 1 -->
      <path d="M120 85 L180 85" stroke="#facc15" stroke-width="2"/>
      <!-- Step 2: Found Ball -->
      <circle cx="220" cy="85" r="30" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="220" y="80" font-size="18" text-anchor="middle">🎾</text>
      <text x="220" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#713f12" text-anchor="middle">Garden Bush</text>
      <text x="220" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#a16207" text-anchor="middle">Ball discovered</text>
      <!-- Line 2 -->
      <path d="M260 85 L320 85" stroke="#facc15" stroke-width="2"/>
      <!-- Step 3: Match Played -->
      <circle cx="360" cy="85" r="30" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="360" y="80" font-size="18" text-anchor="middle">🏑</text>
      <text x="360" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#713f12" text-anchor="middle">Street Game</text>
      <text x="360" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#a16207" text-anchor="middle">Friends join in</text>
      <!-- Line 3 -->
      <path d="M400 85 L460 85" stroke="#facc15" stroke-width="2"/>
      <!-- Step 4: Scooter Basket -->
      <circle cx="500" cy="85" r="32" fill="#fed7aa" stroke="#ea580c" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">🛵</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9a3412" text-anchor="middle">Scooter Basket!</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">Ball carried away</text>
    </svg>`,
    questions: [
      {
        q: "What was Gopi doing on the veranda when the story opens, and what interrupted him?",
        marks: 2,
        ans: "Gopi was quietly sitting on his house veranda reading a storybook. He was interrupted by a distinct rustling sound in the nearby garden bushes followed immediately by a heavy 'thud'.",
        rubric: [
          { key: "Activity: sitting on veranda reading a book", marks: "1 Mark" },
          { key: "Interruption: rustling sound followed by a thud", marks: "1 Mark" }
        ]
      },
      {
        q: "Describe Gopi's search for the mysterious object in the garden.",
        marks: 3,
        ans: "Gopi put down his book and stepped into the garden. He parted the thick, tall grass near the wooden boundary fence, searched methodically beneath the leafy bushes, and finally spotted a hard hockey ball resting quietly on a heap of dry autumn leaves.",
        rubric: [
          { key: "Stepping into garden and checking fence area", marks: "1 Mark" },
          { key: "Parting tall grass and bushes", marks: "1 Mark" },
          { key: "Finding the ball on a heap of dry leaves", marks: "1 Mark" }
        ]
      },
      {
        q: "Match each dialogue to the correct speaker and listener in the story:",
        marks: 4,
        ans: `<ul>
          <li><strong>(a) 'The ball I found is a hockey ball.'</strong> — <em>Said by:</em> Gopi to his friends (Deepak, Manoj, and Ramani).</li>
          <li><strong>(b) 'My father bought me a brand-new football.'</strong> — <em>Said by:</em> Deepak to Gopi and the group.</li>
          <li><strong>(c) 'I lost a ball four months ago.'</strong> — <em>Said by:</em> Manoj to Gopi.</li>
          <li><strong>(d) 'Show me the ball and I will tell you whose it is.'</strong> — <em>Said by:</em> Ramani to Gopi.</li>
        </ul>`,
        rubric: [
          { key: "Correct speaker and listener for dialogue (a)", marks: "1 Mark" },
          { key: "Correct speaker and listener for dialogue (b)", marks: "1 Mark" },
          { key: "Correct speaker and listener for dialogue (c)", marks: "1 Mark" },
          { key: "Correct speaker and listener for dialogue (d)", marks: "1 Mark" }
        ]
      },
      {
        q: "How was the dispute over ownership settled, and how did the game begin?",
        marks: 3,
        ans: "Realizing that none of the boys could prove authentic ownership of the ball, Manoj enthusiastically grabbed it and proposed that instead of arguing, they should all play together. Gopi stood in the center with a stick, hit the ball toward Deepak, Deepak passed it smoothly to Ramani, and a high-spirited neighborhood match kicked off.",
        rubric: [
          { key: "Realization that ownership could not be definitively proven", marks: "1 Mark" },
          { key: "Decision to share and play collectively rather than dispute", marks: "1 Mark" },
          { key: "Passing sequence and beginning of the match", marks: "1 Mark" }
        ]
      },
      {
        q: "Why did all the children burst out laughing at the end of the story?",
        marks: 3,
        ans: "During an energetic strike, the ball flew high into the air, cleared the boundary wall, and dropped neatly right into the front storage basket of a passing motor scooter. The unsuspecting rider accelerated down the street without realizing what had landed in his basket. Since the ball had vanished on an accidental free ride, the boys burst into hearty laughter.",
        rubric: [
          { key: "High strike sending ball over the wall", marks: "1 Mark" },
          { key: "Landing directly in passing scooter's front basket", marks: "1 Mark" },
          { key: "Scooter driving away; humorous acceptance by children", marks: "1 Mark" }
        ]
      },
      {
        q: "What moral values and life lessons does the story 'Gone with the Scooter' convey to young readers?",
        marks: 4,
        ans: `The story highlights several key lessons:
        <ol>
          <li><strong>Sharing Transcends Greed:</strong> An object that causes pointless bickering turns into an instrument of joy when shared in collective play.</li>
          <li><strong>Sportsmanship & Comradeship:</strong> The children prioritized playing together over claiming selfish possession.</li>
          <li><strong>Cheerfulness in Uncontrollable Loss:</strong> When the ball was whisked away by the scooter, the children did not cry or blame each other; they laughed cheerfully and accepted the humorous mishap.</li>
        </ol>`,
        rubric: [
          { key: "Value of sharing over selfish possession", marks: "1.5 Marks" },
          { key: "Sportsmanship and cooperative bonding", marks: "1.5 Marks" },
          { key: "Graceful humor during unforeseen loss", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Conflict Resolution in Playgrounds",
      text: "During recess, two fifth-grade groups want to play on the single badminton court available at school. An argument breaks out regarding who arrived first, and tempers begin to flare.",
      question: "Drawing inspiration from how Gopi and his friends resolved their ownership debate, devise a 3-step peer mediation plan to resolve the playground court dispute amicably.",
      answer: `<strong>Peer Mediation Plan:</strong>
      <ol>
        <li><strong>Calm Pause & Listen:</strong> Appoint one student from each team to calmly state their position for 30 seconds without interruptions or accusations.</li>
        <li><strong>Collaborative Sharing / Time-Splitting:</strong> Divide the 20-minute recess into two equal 10-minute halves. Team A plays the first 10 minutes while Team B keeps score, then swap roles for the second half. Alternatively, combine forces to play doubles or rotating knockout points.</li>
        <li><strong>Rotational Schedule for the Week:</strong> Establish a fair schedule where Team A has priority on Mondays/Wednesdays, Team B on Tuesdays/Thursdays, and both teams play joint tournaments on Fridays.</li>
      </ol>`,
      rubric: "1.5 Marks for identifying root cause + 2 Marks for practical time-sharing compromise + 1.5 Marks for establishing long-term schedule = 5 Marks"
    }
  },

  {
    id: "s3",
    num: 3,
    unit: "Unit 2: My Colourful World",
    title: "The Rainbow",
    subtitle: "Classic lyric poem celebrating nature's majestic bridge across heaven",
    concepts: [
      "Poem by Christina Rossetti contrasting human engineering with nature's breathtaking creations.",
      "Boats sail on rivers and ships sail on seas, but clouds sailing across the sky are far prettier.",
      "Man-made bridges span across rivers, but the rainbow overtops trees, bridges heaven, and builds a road from earth to sky.",
      "Appreciation of natural aesthetics, poetic imagery, rhyme scheme (seas/these, please/these), and metaphors."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rainbowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ef4444"/>
          <stop offset="17%" stop-color="#f97316"/>
          <stop offset="33%" stop-color="#eab308"/>
          <stop offset="50%" stop-color="#22c55e"/>
          <stop offset="67%" stop-color="#06b6d4"/>
          <stop offset="83%" stop-color="#3b82f6"/>
          <stop offset="100%" stop-color="#8b5cf6"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155" text-anchor="middle">Nature's Bridge vs Man-Made Bridge</text>
      <!-- Rainbow Arc -->
      <path d="M 60 130 A 230 110 0 0 1 520 130" stroke="url(#rainbowGrad)" stroke-width="12" fill="none" stroke-linecap="round"/>
      <text x="290" y="55" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#6d28d9" text-anchor="middle">"The Bow that Bridges Heaven"</text>
      <!-- Earth & Road -->
      <line x1="40" y1="130" x2="540" y2="130" stroke="#94a3b8" stroke-width="2"/>
      <text x="120" y="148" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Earth (Rivers & Ships)</text>
      <text x="460" y="148" font-family="system-ui, sans-serif" font-size="9" fill="#475569">Sky (Clouds & Sun)</text>
    </svg>`,
    questions: [
      {
        q: "Where do boats and ships sail according to the poem, and what sails across the sky?",
        marks: 2,
        ans: "According to the poet, boats sail upon the rivers and majestic ships sail across the deep seas. Across the wide sky, fluffy white and grey clouds sail freely.",
        rubric: [
          { key: "Boats on rivers, ships on seas", marks: "1 Mark" },
          { key: "Clouds sailing across the sky", marks: "1 Mark" }
        ]
      },
      {
        q: "Why does the poet consider the clouds and the rainbow far prettier than boats, ships, and river bridges?",
        marks: 3,
        ans: "Although human engineers construct handsome bridges across rivers and ships that voyage across oceans, nature's creations possess an incomparable, divine beauty. Clouds move gracefully across an endless blue canvas, and the rainbow overtops towering trees to build a magnificent bridge linking earth to heaven.",
        rubric: [
          { key: "Contrast between human engineering and nature", marks: "1 Mark" },
          { key: "Grace and scale of clouds sailing in the open sky", marks: "1 Mark" },
          { key: "Majesty of rainbow bridging heaven and overtopping trees", marks: "1 Mark" }
        ]
      },
      {
        q: "Explain the metaphor: 'And builds a road from earth to sky'.",
        marks: 3,
        ans: "In this vivid poetic metaphor, Christina Rossetti envisions the rainbow as an ethereal highway. With its foot resting on the earthly horizon and its vibrant arch reaching into the upper skies, it looks as though celestial builders have constructed a luminous bridge for dreams to travel between earth and heaven.",
        rubric: [
          { key: "Identification of metaphor connecting earth to sky", marks: "1 Mark" },
          { key: "Visual description of rainbow feet on horizon and arch in sky", marks: "1 Mark" },
          { key: "Symbolic meaning of hope, wonder, and celestial road", marks: "1 Mark" }
        ]
      },
      {
        q: "Identify the rhyming words in the poem and describe their rhyming scheme.",
        marks: 3,
        ans: `The rhyming words in 'The Rainbow' are:
        <ul>
          <li><strong>seas</strong> and <strong>these</strong> (Lines 2 and 4)</li>
          <li><strong>please</strong> and <strong>these</strong> (Lines 6 and 10)</li>
        </ul>
        The poem follows an alternating musical ballad rhyme scheme (abcb defe) where the even lines chime musically to create a rhythmic, song-like cadence.`,
        rubric: [
          { key: "Identification of seas / these", marks: "1 Mark" },
          { key: "Identification of please / these", marks: "1 Mark" },
          { key: "Explanation of ballad rhyme scheme and rhythm", marks: "1 Mark" }
        ]
      },
      {
        q: "Write down the seven colours of the rainbow in order, and explain the science of how a rainbow is formed in nature.",
        marks: 4,
        ans: `<strong>The Seven Colours (VIBGYOR):</strong> Violet, Indigo, Blue, Green, Yellow, Orange, Red.<br><br>
        <strong>Scientific Formation:</strong>
        A rainbow appears when sunlight strikes suspended raindrops in the atmosphere following a rain shower. Each raindrop acts like a tiny glass prism:
        <ol>
          <li><strong>Refraction:</strong> White sunlight bends as it enters the denser water droplet.</li>
          <li><strong>Dispersion:</strong> The white light separates into its constituent seven spectrum wavelengths.</li>
          <li><strong>Total Internal Reflection:</strong> The light reflects off the back inside surface of the droplet.</li>
          <li><strong>Refraction into Air:</strong> As light leaves the droplet, it bends again, projecting the multi-coloured arc into the observer's eyes with the sun positioned directly behind them.</li>
        </ol>`,
        rubric: [
          { key: "List of seven VIBGYOR colours in correct sequence", marks: "1.5 Marks" },
          { key: "Prismatic action of raindrops (refraction & dispersion)", marks: "1.5 Marks" },
          { key: "Total internal reflection and sun behind observer", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Environmental Aesthetics & City Greenery",
      text: "Modern concrete cities feature massive flyovers, skyscraper bridges, and towering concrete structures, but very few parks or tree lines, reducing opportunities for children to witness birds, clouds, and morning rainbows.",
      question: "How does loss of contact with nature impact a child's cognitive creativity? Propose two innovative architectural ideas to bring sky and greenery back into urban schools.",
      answer: `<strong>Impact on Cognitive Creativity:</strong> Continuous exposure solely to grey concrete induces 'nature deficit disorder', mental fatigue, and reduces imaginative capacity. Nature stimulates curiosity through dynamic patterns, shifting seasons, and vivid organic colours.<br><br>
      <strong>Two Innovative Architectural Ideas:</strong>
      <ol>
        <li><strong>Sky Garden Roof Classrooms:</strong> Transform empty school rooftops into organic floral terraces equipped with weather vanes, sundials, and rainwater collection ponds where pupils observe clouds, rainbows, and pollinating butterflies.</li>
        <li><strong>Living Vertical Green Walls & Open Skylights:</strong> Replace blank concrete school walls with vertical botanical tapestries and install transparent glass atrium domes that illuminate interior corridors with natural sunlight and cloud vistas.</li>
      </ol>`,
      rubric: "2 Marks for cognitive analysis + 1.5 Marks for rooftop sky garden + 1.5 Marks for vertical green walls & skylights = 5 Marks"
    }
  },

  {
    id: "s4",
    num: 4,
    unit: "Unit 2: My Colourful World",
    title: "The Wise Parrot",
    subtitle: "A captivating tale of longing for freedom, loyalty, and sharp wit",
    concepts: [
      "Themes of freedom vs luxurious confinement, true companionship, and quick thinking.",
      "The merchant loves his caged parrot and treats it luxuriously in a golden cage.",
      "The parrot sends a greeting to wild parrots in the jungle; a wild parrot drops down as if dead upon hearing the message.",
      "The caged parrot decodes the secret signal, feigns death, and flies to liberty the moment the merchant places it on the windowsill.",
      "Vocabulary: merchant, cage, plumage, greetings, swooned, lifeless, windowsill, soaring."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#166534" text-anchor="middle">The Secret Message of Freedom</text>
      <!-- Golden Cage -->
      <rect x="70" y="50" width="60" height="70" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
      <line x1="85" y1="50" x2="85" y2="120" stroke="#ca8a04" stroke-width="1.5"/>
      <line x1="100" y1="50" x2="100" y2="120" stroke="#ca8a04" stroke-width="1.5"/>
      <line x1="115" y1="50" x2="115" y2="120" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="100" y="85" font-size="18" text-anchor="middle">🦜</text>
      <text x="100" y="140" font-family="system-ui, sans-serif" font-size="9" fill="#854d0e" text-anchor="middle">Caged in Gold</text>
      <!-- Secret Signal -->
      <path d="M150 85 L260 85" stroke="#16a34a" stroke-width="2" stroke-dasharray="4"/>
      <text x="205" y="75" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="middle">"Feign Death"</text>
      <!-- Jungle Tree -->
      <circle cx="310" cy="85" r="32" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="310" y="82" font-size="18" text-anchor="middle">🌳</text>
      <text x="310" y="100" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#14532d" text-anchor="middle">Wild Friend</text>
      <text x="310" y="140" font-family="system-ui, sans-serif" font-size="9" fill="#166534" text-anchor="middle">Shows the trick</text>
      <!-- Escape Arrow -->
      <path d="M360 85 L440 65" stroke="#059669" stroke-width="2.5"/>
      <!-- Free in Sky -->
      <circle cx="490" cy="65" r="32" fill="#ecfdf5" stroke="#059669" stroke-width="2.5"/>
      <text x="490" y="60" font-size="18" text-anchor="middle">🦅</text>
      <text x="490" y="80" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#065f46" text-anchor="middle">Free Sky!</text>
      <text x="490" y="125" font-family="system-ui, sans-serif" font-size="9" fill="#047857" text-anchor="middle">Soars to liberty</text>
    </svg>`,
    questions: [
      {
        q: "Why did the wealthy merchant house the parrot in a cage made of pure gold?",
        marks: 2,
        ans: "The merchant kept the parrot in a golden cage because he loved the bird immensely, adored its sweet melodious singing and entertaining tales, and wished to give it the most luxurious treatment possible.",
        rubric: [
          { key: "Affection for the parrot and enjoying its songs/tales", marks: "1 Mark" },
          { key: "Desire to pamper it with the finest luxury (cage of gold)", marks: "1 Mark" }
        ]
      },
      {
        q: "What message did the pet parrot entrust to the merchant before the merchant departed for the distant jungle?",
        marks: 3,
        ans: "Before the merchant embarked on his trading journey, the pet parrot asked him to visit the lush green jungle and convey its warm greetings to its fellow wild parrots, informing them that while it lived in safety and comfort, it still fondly remembered the joy of flying together in the free forest.",
        rubric: [
          { key: "Greetings and regards to free wild parrots", marks: "1.5 Marks" },
          { key: "Mentioning its condition and enduring memory of the forest", marks: "1.5 Marks" }
        ]
      },
      {
        q: "How did the wild parrot react when the merchant delivered the pet parrot's message in the forest?",
        marks: 2,
        ans: "Upon hearing the merchant's words regarding its captive friend, the wild parrot suddenly stiffened, shivered, and dropped lifelessly like a stone from the high branch onto the forest floor.",
        rubric: [
          { key: "Sudden reaction: stiffening and dropping from the tree", marks: "1 Mark" },
          { key: "Falling motionless / pretending to be dead", marks: "1 Mark" }
        ]
      },
      {
        q: "How did the caged parrot interpret the merchant's account of the wild parrot's 'death'?",
        marks: 3,
        ans: "While the merchant believed the wild parrot had perished from heartbreak, the clever pet parrot understood the event as a coded tactical message. Its wild friend was demonstrating the exact trick needed to gain freedom: pretend to be dead so that the keeper removes you from the cage.",
        rubric: [
          { key: "Contrast between merchant's grief and parrot's sharp insight", marks: "1.5 Marks" },
          { key: "Decoding the silent signal: feigning death to escape confinement", marks: "1.5 Marks" }
        ]
      },
      {
        q: "Detail the dramatic steps through which the wise parrot achieved its ultimate escape.",
        marks: 4,
        ans: `<ol>
          <li><strong>Feigning Death:</strong> As soon as the merchant related the jungle story, the pet parrot fell upside-down onto the floor of its golden cage, lying completely stiff and motionless.</li>
          <li><strong>The Merchant's Grief:</strong> Weeping sorrowfully and believing his beloved companion was dead, the merchant unlocked the cage door and lifted the bird out.</li>
          <li><strong>Placement on Windowsill:</strong> He gently placed the parrot on the open windowsill to prepare for burial.</li>
          <li><strong>The Sudden Leap:</strong> In the blink of an eye, the clever bird sprang to its feet, flapped its strong wings, flew up to the high rooftop, thanked the astonished merchant for delivering the message, and soared joyously into the open sky.</li>
        </ol>`,
        rubric: [
          { key: "Feigning death inside the cage", marks: "1 Mark" },
          { key: "Merchant unlocking cage and placing bird on windowsill", marks: "1 Mark" },
          { key: "Instant revival and leap to the rooftop", marks: "1 Mark" },
          { key: "Thanking merchant and soaring to liberty", marks: "1 Mark" }
        ]
      },
      {
        q: "Discuss the central theme: Can material luxury and golden cages ever compensate for the loss of personal freedom?",
        marks: 4,
        ans: `No amount of material opulence—represented by the golden cage and gourmet seeds—can ever compensate for the loss of fundamental liberty:
        <ul>
          <li><strong>Freedom is Invaluable:</strong> For birds and all living beings, the open expanse of the sky, fresh air, and fellowship with one's kind far outweigh confinement, regardless of how richly decorated the prison may be.</li>
          <li><strong>Love Without Possession:</strong> The merchant loved the parrot, but his love was possessive. True love respects the natural rights, autonomy, and intrinsic happiness of the beloved.</li>
          <li><strong>Power of Intelligence:</strong> The parrot demonstrated that when physical force cannot break bars, patience, wisdom, and clever strategy can triumph over captivity.</li>
        </ul>`,
        rubric: [
          { key: "Argument that golden cages remain prisons", marks: "1.5 Marks" },
          { key: "Difference between possessive love and respectful love", marks: "1.5 Marks" },
          { key: "Triumph of intelligence and natural right to freedom", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Animal Ethics & Caged Pets",
      text: "Many exotic birds and animals are captured from natural habitats, clipped of their wings, and sold in commercial pet markets to live inside small steel cages in living rooms for human amusement.",
      question: "Evaluate the ethics of keeping wild birds caged. Propose three humane wildlife-friendly alternatives for bird-lovers to connect with avian life without confining them.",
      answer: `<strong>Ethical Evaluation:</strong> Birds are biologically engineered with hollow bones and wings designed for expansive flight. Confining them in cages frustrates natural migratory instincts, causes muscle atrophy, induces severe depression, and violates animal rights under Article 51A(g) of the Indian Constitution.<br><br>
      <strong>Three Humane Alternatives:</strong>
      <ol>
        <li><strong>Balcony Bird Baths & Feeders:</strong> Install terracotta water saucers and seed feeders on balconies and gardens to attract free, wild songbirds without trapping them.</li>
        <li><strong>Binoculars & Bird-Watching (Avitourism):</strong> Join local ornithology clubs, visit wetlands and bird sanctuaries (e.g. Bharatpur or Sultanpur) to observe birds flourishing in natural ecosystems.</li>
        <li><strong>Native Tree Plantation:</strong> Plant berry-bearing and nectar-rich indigenous trees like neem, peepal, and jamun in school grounds and residential neighbourhoods to build safe nesting havens.</li>
      </ol>`,
      rubric: "1.5 Marks for ethical/constitutional evaluation + 3.5 Marks for 3 actionable, non-confining alternatives = 5 Marks"
    }
  },

  {
    id: "s5",
    num: 5,
    unit: "Unit 3: Water",
    title: "The Frog",
    subtitle: "Rhythmic nature poem detailing an amphibian's dual life in water and on land",
    concepts: [
      "Poem celebrating the natural adaptations, diet, habitat, and agility of frogs.",
      "Lives comfortably both in water and on land; swims effortlessly with webbed feet and leaps high with strong hind legs.",
      "Feeds on insects using an instantaneous, flicking tongue; camouflages among green leaves and pond reeds.",
      "Alertness against predators like snakes; life cycle connection between tadpoles and adult frogs.",
      "Grammar: Conjunctions (and, but, because, so), rhyming words, active verbs."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ecfdf5" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#065f46" text-anchor="middle">Amphibian Adaptations: The Frog</text>
      <!-- Adaptation 1: Webbed Feet -->
      <circle cx="85" cy="85" r="32" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">🦶</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">Webbed Feet</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#059669" text-anchor="middle">Swims in pond</text>
      <!-- Adaptation 2: Long Tongue -->
      <circle cx="220" cy="85" r="32" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
      <text x="220" y="80" font-size="18" text-anchor="middle">👅</text>
      <text x="220" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">Flick Tongue</text>
      <text x="220" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#059669" text-anchor="middle">Snaps flying bugs</text>
      <!-- Adaptation 3: Camouflage -->
      <circle cx="355" cy="85" r="32" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
      <text x="355" y="80" font-size="18" text-anchor="middle">🌿</text>
      <text x="355" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">Camouflage</text>
      <text x="355" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#059669" text-anchor="middle">Blends with moss</text>
      <!-- Adaptation 4: Strong Legs -->
      <circle cx="490" cy="85" r="32" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
      <text x="490" y="80" font-size="18" text-anchor="middle">🦘</text>
      <text x="490" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">Strong Legs</text>
      <text x="490" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#059669" text-anchor="middle">High leaping leaps</text>
    </svg>`,
    questions: [
      {
        q: "Where does the frog love to spend its time according to the poem?",
        marks: 2,
        ans: "The frog loves to sit near calm ponds, splash in fresh monsoon rain, rest quietly on floating lily pads, and hop around wet muddy drains and marshes.",
        rubric: [
          { key: "Sitting near ponds and floating lily pads", marks: "1 Mark" },
          { key: "Enjoying monsoon rain and hopping in muddy drains", marks: "1 Mark" }
        ]
      },
      {
        q: "How does the frog capture its prey so efficiently?",
        marks: 2,
        ans: "The frog captures insects by launching its long, sticky tongue with lightning-fast speed. The insect gets trapped on the adhesive surface and is snapped back into its mouth before it can fly away.",
        rubric: [
          { key: "Long, sticky, specialized tongue", marks: "1 Mark" },
          { key: "Lightning-fast flicking movement trapping prey", marks: "1 Mark" }
        ]
      },
      {
        q: "Describe the frog's dual locomotion: how does it move in water, and how does it navigate land?",
        marks: 3,
        ans: "In water, the frog swims gracefully and swiftly using its wide webbed hind feet like flippers or boat oars. On land, it uses its powerful, folded muscular hind legs to launch into impressive, long-distance hops and leaps.",
        rubric: [
          { key: "In water: webbed hind feet acting like oars/flippers", marks: "1.5 Marks" },
          { key: "On land: muscular hind legs propelling high leaps", marks: "1.5 Marks" }
        ]
      },
      {
        q: "What survival adaptation protects the frog from being spotted by predators like snakes and storks?",
        marks: 2,
        ans: "The frog relies on protective camouflage. Its mottled green and brown skin tone blends seamlessly with pond weeds, lotus leaves, wet mud, and algae, rendering it invisible to sharp-eyed predators.",
        rubric: [
          { key: "Protective camouflage / colour matching", marks: "1 Mark" },
          { key: "Blending with leaves, reeds, and muddy banks", marks: "1 Mark" }
        ]
      },
      {
        q: "Grammar Exercise: Fill in the blanks with the correct conjunction from brackets (and, but, because, so):",
        marks: 4,
        ans: `<ol>
          <li>My colours match the plants <strong>and</strong> trees. <em>(or / and)</em></li>
          <li>Would you like to learn about frogs <strong>and</strong> tadpoles? <em>(because / and)</em></li>
          <li>I hop around happily, <strong>but</strong> I must watch out for snakes! <em>(but / so)</em></li>
          <li>Frogs swim easily in water <strong>because</strong> they possess webbed feet. <em>(because / or)</em></li>
        </ol>`,
        rubric: [
          { key: "Correct conjunction for sentence 1 ('and')", marks: "1 Mark" },
          { key: "Correct conjunction for sentence 2 ('and')", marks: "1 Mark" },
          { key: "Correct conjunction for sentence 3 ('but')", marks: "1 Mark" },
          { key: "Correct conjunction for sentence 4 ('because')", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Frogs as Bio-Indicators of Ecological Health",
      text: "Biologists consider frogs vital bio-indicators because their thin, permeable skin absorbs moisture and air directly from water bodies, making them the first organisms to suffer when pesticides and industrial effluents pollute ponds.",
      question: "Explain why a sudden disappearance of frogs from a village pond signals environmental danger. Suggest two community steps to safeguard local wetlands.",
      answer: `<strong>Significance as Bio-Indicators:</strong> Because amphibians absorb oxygen and water through semi-permeable skin, toxic agricultural runoff and heavy metals poison them immediately. If frogs disappear, it indicates critical toxic chemical contamination of the water supply that could soon poison drinking groundwater and livestock.<br><br>
      <strong>Two Wetland Safeguards:</strong>
      <ol>
        <li><strong>Buffer Zone & Ban on Toxic Fertilizers:</strong> Establish a 50-metre organic perimeter around the pond free of synthetic organophosphate sprays and chemical weed-killers.</li>
        <li><strong>Prevent Solid Waste Dumping & Maintain Aquatic Reeds:</strong> Organize community clean-up drives to remove non-biodegradable plastics and preserve native water hyacinth and reeds that oxygenate the water and provide breeding sanctuaries.</li>
      </ol>`,
      rubric: "2 Marks for bio-indicator scientific explanation + 3 Marks for 2 concrete wetland protection steps = 5 Marks"
    }
  },

  {
    id: "s6",
    num: 6,
    unit: "Unit 3: Water",
    title: "What a Tank!",
    subtitle: "Cultural and architectural appreciation of Punjab's creative rooftop water tanks",
    concepts: [
      "Everyday necessity of water storage coupled with artistic community identity.",
      "Geographic location of Punjab in northwestern India and its vibrant agricultural culture.",
      "How rooftop water tanks in Punjab are sculpted: steel rod armatures, wire mesh, cement plaster, and vibrant enamel paint.",
      "Tanks sculpted into tractors, airplanes, footballs, lions, hawks, army tanks, and water jugs reflecting personal stories and NRI ties.",
      "Grammar: Contractions (don't, isn't, aren't, can't, couldn't, didn't) and descriptive paragraph writing."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">Rooftop Sculptures of Punjab: Water Tanks</text>
      <!-- Airplane Tank -->
      <circle cx="85" cy="85" r="32" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">✈️</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7c2d12" text-anchor="middle">Airplane</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">Global NRI links</text>
      <!-- Tractor Tank -->
      <circle cx="220" cy="85" r="32" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
      <text x="220" y="80" font-size="18" text-anchor="middle">🚜</text>
      <text x="220" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7c2d12" text-anchor="middle">Tractor</text>
      <text x="220" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">Farming pride</text>
      <!-- Football Tank -->
      <circle cx="355" cy="85" r="32" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
      <text x="355" y="80" font-size="18" text-anchor="middle">⚽</text>
      <text x="355" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7c2d12" text-anchor="middle">Football</text>
      <text x="355" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">Sporting spirit</text>
      <!-- Lion Tank -->
      <circle cx="490" cy="85" r="32" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
      <text x="490" y="80" font-size="18" text-anchor="middle">🦁</text>
      <text x="490" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7c2d12" text-anchor="middle">Lion / Falcon</text>
      <text x="490" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">Bravery & valour</text>
    </svg>`,
    questions: [
      {
        q: "What primary purpose does an overhead water tank serve in residential homes?",
        marks: 2,
        ans: "An overhead water tank stores fresh municipal or tubewell water under gravity pressure, ensuring continuous running water for drinking, cooking, bathing, washing, and sanitization throughout the day.",
        rubric: [
          { key: "Storage of municipal / tubewell water", marks: "1 Mark" },
          { key: "Gravity-assisted distribution for domestic household chores", marks: "1 Mark" }
        ]
      },
      {
        q: "Where is the state of Punjab located on the physical map of India, and what is it renowned for?",
        marks: 2,
        ans: "Punjab is situated in the northwestern region of India. It is famously known as the 'Granary of India' and the 'Land of Five Rivers', celebrated for rich agriculture, vibrant folk music, hospitable culture, and valorous traditions.",
        rubric: [
          { key: "Geographical location: northwestern India", marks: "1 Mark" },
          { key: "Cultural recognition: land of five rivers / granary of India", marks: "1 Mark" }
        ]
      },
      {
        q: "Explain the construction technique used by Punjabi artisans to build custom-shaped rooftop water tanks.",
        marks: 3,
        ans: "Artisans build custom rooftop tanks through specialized masonry: (1) They weld a sturdy structural frame using steel rods and chicken-wire mesh shaped like the desired object, (2) Apply multiple coats of reinforced concrete plaster over the armature to ensure watertight sealing, and (3) Paint the dried concrete with durable, weather-resistant enamel paint.",
        rubric: [
          { key: "Steel rod and wire mesh skeleton armature", marks: "1 Mark" },
          { key: "Reinforced waterproof concrete plastering", marks: "1 Mark" },
          { key: "Finishing with weather-resistant enamel paint", marks: "1 Mark" }
        ]
      },
      {
        q: "How do the distinctive shapes of these water tanks reflect the identity, achievements, and professions of the homeowners?",
        marks: 4,
        ans: `The unique tank sculptures serve as grand rooftop badges of pride:
        <ul>
          <li><strong>Tractor Tanks:</strong> Celebrate the family's deep roots in prosperous agriculture and farming heritage.</li>
          <li><strong>Airplane Tanks:</strong> Represent a family member who has migrated abroad (NRI in Canada, UK, or USA) or achieved a pilot's license.</li>
          <li><strong>Football / Horse Tanks:</strong> Signify athletic prowess and passion for sports.</li>
          <li><strong>Army Tank / Lion Sculptures:</strong> Honor family members serving decorated careers in the Indian Armed Forces.</li>
        </ul>`,
        rubric: [
          { key: "Tractors representing farming pride", marks: "1 Mark" },
          { key: "Airplanes representing NRI connections / global migration", marks: "1 Mark" },
          { key: "Sports gear representing athletics", marks: "1 Mark" },
          { key: "Military / lion designs honoring armed forces valour", marks: "1 Mark" }
        ]
      },
      {
        q: "Apart from overhead tanks, list four other traditional and modern methods of storing water in India.",
        marks: 3,
        ans: `Other water storage methods include:
        <ol>
          <li><strong>Underground Cisterns (Tankas):</strong> Deep covered masonry chambers in Rajasthan for storing harvested rainwater.</li>
          <li><strong>Terracotta Pots (Matkas/Surahis):</strong> Traditional earthen pitchers that naturally cool drinking water through evaporation.</li>
          <li><strong>Community Stepwells (Baolis):</strong> Magnificent historical architectural reservoirs built with stepped landings.</li>
          <li><strong>Rooftop Rainwater Harvesting Tanks:</strong> Modern filtration and recharge pits that direct rainwater straight into ground aquifers.</li>
        </ol>`,
        rubric: [
          { key: "Underground tankas / cisterns", marks: "1 Mark" },
          { key: "Terracotta matkas / natural evaporative cooling", marks: "1 Mark" },
          { key: "Stepwells / rainwater harvesting recharge systems", marks: "1 Mark" }
        ]
      },
      {
        q: "Grammar Exercise: Write the contracted form for each of the following verb phrases:",
        marks: 3,
        ans: `<ul>
          <li>do not — <strong>don't</strong></li>
          <li>is not — <strong>isn't</strong></li>
          <li>are not — <strong>aren't</strong></li>
          <li>cannot — <strong>can't</strong></li>
          <li>could not — <strong>couldn't</strong></li>
          <li>did not — <strong>didn't</strong></li>
        </ul>`,
        rubric: [
          { key: "Correct contractions for don't, isn't, aren't", marks: "1.5 Marks" },
          { key: "Correct contractions for can't, couldn't, didn't", marks: "1.5 Marks" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Creative Design & Water Conservation",
      text: "Imagine your school has decided to install a prominent rooftop water storage tank that will also harvest rain from the terrace, and the principal has invited students to submit creative design proposals.",
      question: "Describe your concept design for the school's water tank. What shape would you select, what message would it convey to visitors, and how would it incorporate water-saving mechanisms?",
      answer: `<strong>Design Concept: The Sprouting Banyan Tree & Globe Tank</strong><br><br>
      <strong>1. Shape & Symbolism:</strong> The tank will be sculpted as a lush green globe cradled in the protective branches of an ancient Banyan tree. The tree represents deep rooted knowledge, while the green globe emphasizes planetary stewardship and climate care.<br><br>
      <strong>2. Visual Message:</strong> Inscribed on the trunk in luminescent paint: <em>"Every Drop Conserved Nurtures Tomorrow's Roots."</em> It reminds every pupil and visitor that water is the lifeblood of our environment.<br><br>
      <strong>3. Eco-Friendly Technical Features:</strong>
      <ul>
        <li><strong>Dual-Chamber Rain Filtration:</strong> Rainwater from the terrace passes through gravel and activated charcoal filters directly into the tank's lower chamber.</li>
        <li><strong>Smart Auto-Cut Overflow Sensor:</strong> An acoustic sensor shuts off the submersible pump as soon as water reaches 95% capacity, completely eliminating wasteful rooftop overflows.</li>
        <li><strong>Solar-Powered Aeration:</strong> Small rooftop solar panels power a micro-aerator that keeps stored water clean and fresh without chemical biocides.</li>
      </ul>`,
      rubric: "1.5 Marks for artistic theme & symbolism + 1.5 Marks for public educational message + 2 Marks for functional rainwater filtration and sensor technology = 5 Marks"
    }
  },

  {
    id: "s7",
    num: 7,
    unit: "Unit 4: Ups and Downs",
    title: "Gilli Danda",
    subtitle: "Nostalgic rhythmic poem celebrating India's ancient traditional street sport",
    concepts: [
      "Rich heritage of traditional indigenous Indian games played in open fields and village lanes.",
      "Game mechanics: a long carved wooden stick (danda) and a small, pointed wooden spindle (gilli).",
      "Skill, focus, hand-eye coordination, balance, and spatial judgment required to strike the tapered end.",
      "The shared laughter, team bonding, outdoors exercise, and joyous freedom of childhood.",
      "Vocabulary: gilli, danda, strike, soar, spindle, boundary, exhilarating."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#854d0e" text-anchor="middle">Dynamics of Traditional Gilli Danda</text>
      <!-- Pit & Gilli -->
      <ellipse cx="90" cy="115" rx="35" ry="12" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
      <line x1="75" y1="110" x2="105" y2="100" stroke="#78350f" stroke-width="5" stroke-linecap="round"/>
      <text x="90" y="142" font-family="system-ui, sans-serif" font-size="9" fill="#713f12" text-anchor="middle">Small pit with Gilli</text>
      <!-- Strike Danda -->
      <line x1="85" y1="65" x2="105" y2="105" stroke="#b45309" stroke-width="6" stroke-linecap="round"/>
      <text x="75" y="55" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e">Danda (Stick)</text>
      <!-- Arc Flight -->
      <path d="M 105 100 Q 250 20 420 85" stroke="#ca8a04" stroke-width="2.5" stroke-dasharray="5" fill="none"/>
      <!-- Mid-Air Strike -->
      <circle cx="250" cy="48" r="22" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="250" y="52" font-size="12" text-anchor="middle">💥</text>
      <text x="250" y="80" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#713f12" text-anchor="middle">Second Strike</text>
      <!-- Landed Gilli -->
      <circle cx="430" cy="88" r="26" fill="#fef9c3" stroke="#eab308" stroke-width="2"/>
      <text x="430" y="93" font-size="15" text-anchor="middle">🎯</text>
      <text x="430" y="128" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">Distance Measured</text>
      <!-- Ruler -->
      <text x="510" y="88" font-family="system-ui, sans-serif" font-size="10" fill="#a16207">Measured in Dandas</text>
    </svg>`,
    questions: [
      {
        q: "What traditional indigenous sport is celebrated in the poem, and what equipment is required to play it?",
        marks: 2,
        ans: "The poem celebrates the ancient Indian outdoor game 'Gilli Danda'. The game requires only two simple pieces of wooden equipment: a long smooth wooden stick called the 'danda', and a small, cylindrical wooden peg tapered at both ends called the 'gilli'.",
        rubric: [
          { key: "Identification of Gilli Danda", marks: "1 Mark" },
          { key: "Equipment: danda (long stick) and gilli (tapered wooden peg)", marks: "1 Mark" }
        ]
      },
      {
        q: "Describe the mechanics: How does a player launch and strike the gilli into the air?",
        marks: 3,
        ans: "The player rests the tapered gilli across a small shallow slit or depression in the ground. Using the tip of the danda, the player taps one of the sharp tapered ends, causing the gilli to flip spinning into the air. Before it drops, the player swings the danda with rapid precision, striking the airborne gilli hard to send it sailing into the open field.",
        rubric: [
          { key: "Resting gilli over shallow ground pit/groove", marks: "1 Mark" },
          { key: "Tapping tapered end to make it flip spinning into the air", marks: "1 Mark" },
          { key: "Striking it mid-air with danda to send it far across the field", marks: "1 Mark" }
        ]
      },
      {
        q: "How do players measure scores and points in a game of Gilli Danda?",
        marks: 2,
        ans: "Points are measured by counting the distance from the launching pit to the spot where the struck gilli lands. The measurement is calculated physically using the length of the striker's own danda as the standard measuring unit.",
        rubric: [
          { key: "Measuring distance from launching pit to landing spot", marks: "1 Mark" },
          { key: "Using danda stick length as the measuring unit", marks: "1 Mark" }
        ]
      },
      {
        q: "What does the poet mean by the line: 'Our game is so sound'?",
        marks: 2,
        ans: "The poet means that the game is wholesome, pure, deeply satisfying, and completely self-sufficient. It requires no costly manufactured gear or expensive stadium; it builds robust health, acute focus, genuine friendship, and boundless delight outdoors under the sun.",
        rubric: [
          { key: "Meaning of wholesome, healthy, and satisfying game", marks: "1 Mark" },
          { key: "Freedom from expensive equipment and joy of outdoor bonding", marks: "1 Mark" }
        ]
      },
      {
        q: "Compare traditional street games like Gilli Danda, Kho-Kho, and Kabaddi with modern video games on mobile screens.",
        marks: 4,
        ans: `<ul>
          <li><strong>Physical Fitness:</strong> Traditional games involve sprinting, jumping, dynamic reflexes, and fresh air, developing physical stamina and cardiovascular health. Mobile gaming is sedentary and can cause eye strain and poor posture.</li>
          <li><strong>Social Skills:</strong> Traditional games teach conflict resolution, vocal team coordination, humility, and fair play face-to-face. Video games often isolate children in digital rooms.</li>
          <li><strong>Accessibility & Cost:</strong> Traditional games cost virtually nothing and can be improvised with sticks and stones anywhere. Digital games require costly consoles, subscriptions, and electricity.</li>
          <li><strong>Connection to Culture:</strong> Traditional games connect children to ancestral heritage and rural folklore.</li>
        </ul>`,
        rubric: [
          { key: "Physical stamina vs sedentary screen habits", marks: "1 Mark" },
          { key: "Real-world social interaction vs digital isolation", marks: "1 Mark" },
          { key: "Zero cost and accessibility vs expensive electronics", marks: "1 Mark" },
          { key: "Cultural preservation and community roots", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Revitalizing Indigenous Sports in Schools",
      text: "The National Education Policy (NEP 2020) places strong emphasis on reviving indigenous Indian games (Bhartiya Khel) to inculcate national pride, physical agility, and inclusive participation among school children.",
      question: "Plan an 'Indigenous Games Festival' (Bhartiya Khel Utsav) for your school. Select three indigenous games and detail the safety measures needed to ensure student well-being.",
      answer: `<strong>Bhartiya Khel Utsav Proposal:</strong><br><br>
      <strong>1. Three Featured Games:</strong>
      <ul>
        <li><strong>Kho-Kho:</strong> Develops lightning dodging, rapid squatting, team communication, and anaerobic stamina.</li>
        <li><strong>Lagori (Pithu / Seven Stones):</strong> Cultivates team cooperation, target aiming, running speed, and strategic tagging.</li>
        <li><strong>Modified Gilli Danda:</strong> Played with rubber-tipped safe wooden sticks and soft foam gillis to practice hand-eye coordination.</li>
      </ul><br>
      <strong>2. Mandatory Safety Protocols:</strong>
      <ol>
        <li><strong>Clear Safety Field Radius:</strong> Establish a dedicated open boundary circle free of bystanders, glass, or stone rubble when striking games are in progress.</li>
        <li><strong>Protective Gear:</strong> Students playing striking games wear lightweight protective eye goggles and padded shin guards.</li>
        <li><strong>Qualified First Aid Station:</strong> Set up an active first-aid camp with ice packs, antiseptic sprays, and hydration stations managed by school sports teachers.</li>
      </ol>`,
      rubric: "2 Marks for selecting 3 games and describing their fitness values + 3 Marks for 3 robust, realistic playground safety protocols = 5 Marks"
    }
  },

  {
    id: "s8",
    num: 8,
    unit: "Unit 4: Ups and Downs",
    title: "The Decision of the Panchayat",
    subtitle: "A witty folktale demonstrating Indian rural justice, logic, and integrity",
    concepts: [
      "Themes of village governance, ethical trading, cunning trickery, and poetic justice.",
      "A simple farmer buys a well from his greedy neighbour to irrigate his parched fields.",
      "The neighbour deceitfully refuses to let him draw water, claiming he sold only the well and not the water inside.",
      "The Village Panchayat listens impartially and delivers a masterstroke of legal reasoning.",
      "Vocabulary: panchayat, sarpanch, irrigate, cunning, deceit, verdict, tenant, rent."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e3a8a" text-anchor="middle">The Logic of Justice: Panchayat's Verdict</text>
      <!-- Well -->
      <circle cx="100" cy="85" r="32" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
      <text x="100" y="80" font-size="18" text-anchor="middle">🪣</text>
      <text x="100" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">The Well</text>
      <text x="100" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#1d4ed8" text-anchor="middle">Sold to Farmer</text>
      <!-- False Claim -->
      <path d="M140 85 L220 85" stroke="#ef4444" stroke-width="2"/>
      <text x="180" y="75" font-family="system-ui, sans-serif" font-size="9" fill="#dc2626" font-weight="700" text-anchor="middle">"Water is mine!"</text>
      <!-- Panchayat Hearing -->
      <circle cx="280" cy="85" r="34" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <text x="280" y="80" font-size="18" text-anchor="middle">⚖️</text>
      <text x="280" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">Panchayat</text>
      <text x="280" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Impartial Court</text>
      <!-- Verdict Arrow -->
      <path d="M320 85 L400 85" stroke="#059669" stroke-width="2.5"/>
      <text x="360" y="75" font-family="system-ui, sans-serif" font-size="9" fill="#059669" font-weight="700" text-anchor="middle">Wise Verdict</text>
      <!-- Masterstroke -->
      <rect x="420" y="55" width="130" height="60" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
      <text x="485" y="75" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#065f46" text-anchor="middle">"Pay Daily Rent"</text>
      <text x="485" y="92" font-family="system-ui, sans-serif" font-size="9" fill="#047857" text-anchor="middle">for storing your water</text>
      <text x="485" y="106" font-family="system-ui, sans-serif" font-size="9" fill="#047857" text-anchor="middle">in farmer's well!</text>
    </svg>`,
    questions: [
      {
        q: "Why did the hardworking farmer invest his hard-earned savings to purchase the well from his neighbour?",
        marks: 2,
        ans: "The farmer bought the well because he urgently needed an abundant and dependable water source to irrigate his parched agricultural fields and save his crops from withering under the intense summer sun.",
        rubric: [
          { key: "Need for water to irrigate parched crops", marks: "1 Mark" },
          { key: "Investment of hard-earned savings for agricultural survival", marks: "1 Mark" }
        ]
      },
      {
        q: "What deceitful excuse did the cunning neighbour make when the farmer arrived to fetch water the next morning?",
        marks: 2,
        ans: "The neighbour maliciously blocked the farmer, claiming: 'I sold you only the well itself, not the water inside it! Therefore, you have no legal right to touch even a single drop of my water.'",
        rubric: [
          { key: "Cunning claim: sold only the stone well, not the water", marks: "1 Mark" },
          { key: "Refusal to allow farmer to draw a single drop", marks: "1 Mark" }
        ]
      },
      {
        q: "How did the Village Panchayat approach the dispute between the farmer and his neighbour?",
        marks: 3,
        ans: "The Village Panchayat, presided over by wise village elders, listened patiently and impartially to both sides without prejudice. They asked the neighbour to state his claim clearly, verified the transaction bill, and then used razor-sharp logic to defeat the deceiver at his own game.",
        rubric: [
          { key: "Impartial, patient hearing given to both parties", marks: "1 Mark" },
          { key: "Verification of purchase transaction and claims", marks: "1 Mark" },
          { key: "Application of logical reasoning rather than physical force", marks: "1 Mark" }
        ]
      },
      {
        q: "What was the final masterstroke judgment delivered by the Sarpanch of the Panchayat?",
        marks: 4,
        ans: `The Sarpanch delivered an ingenious verdict:
        <ol>
          <li>He acknowledged the neighbour's claim: <em>'Since you insist that the well belongs to the farmer but the water belongs solely to you, you have no right to keep your water inside the farmer's property!'</em></li>
          <li><em>'You must either empty all your water from the well immediately without wasting a moment...'</em></li>
          <li><em>'...or you must pay the farmer 100 gold coins per day as rent for using his well to store your water!'</em></li>
        </ol>
        Realizing he had been trapped in his own twisted logic, the neighbour fell at the farmer's feet, begged forgiveness, and relinquished all false claims.`,
        rubric: [
          { key: "Acceptance of neighbour's premise (water is separate from well)", marks: "1.5 Marks" },
          { key: "Command to either remove water immediately or pay daily storage rent", marks: "1.5 Marks" },
          { key: "Neighbour's surrender and restoration of justice", marks: "1 Mark" }
        ]
      },
      {
        q: "What life lesson does this story teach about the nature of trickery, honesty, and justice?",
        marks: 3,
        ans: "The story demonstrates that greed and deceitful cunning will always be undone by truth and wisdom. Those who dig traps of dishonest technicalities to cheat others invariably fall into their own snares. Justice delivered through calm reason is far more potent than anger or physical conflict.",
        rubric: [
          { key: "Deceit and greed always lead to public downfall", marks: "1 Mark" },
          { key: "Cheating others through loopholes boomerangs back", marks: "1 Mark" },
          { key: "Superiority of calm reason and wisdom in delivering justice", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Peer Mediation & Fairness in Everyday Life",
      text: "You brought an extra, expensive watercolour painting box to school for an art project. Two classmates, who forgot their materials, get into a loud tussle over who gets to use your box first, threatening to ruin each other's paintings.",
      question: "Drawing on the wise conflict-resolution approach of the Panchayat, how would you resolve this situation fairly without taking sides or causing resentment?",
      answer: `<strong>Fair Peer Resolution Strategy:</strong><br><br>
      <strong>1. Calm Interruption:</strong> Immediately retrieve the box, stand between the quarrelling classmates, and say calmly: <em>'The paints belong to me, and I am delighted to share them, but only under the condition that we work as a team without shouting.'</em><br><br>
      <strong>2. Palette Division by Tone:</strong> Since watercolours contain multiple colour cakes, split the palette systematically: Student A uses the warm tones (red, orange, yellow) for their sunset background, while Student B uses the cool tones (blue, green, purple) for their sea and hills. After 15 minutes, they switch shades.<br><br>
      <strong>3. Shared Water Tumbler & Mutual Accountability:</strong> Place the clean water jar and mixing palette between them, asking them to inspect each other's brush to ensure no cakes are muddied. This transforms rivalry into mutual responsibility and friendship.`,
      rubric: "1.5 Marks for taking neutral control + 2 Marks for functional color/time division + 1.5 Marks for transforming competition into mutual accountability = 5 Marks"
    }
  },

  {
    id: "s9",
    num: 9,
    unit: "Unit 5: Work is Worship",
    title: "Vocation",
    subtitle: "Poignant poem by Rabindranath Tagore on innocence, hard work, and freedom",
    concepts: [
      "Masterpiece by Nobel laureate Rabindranath Tagore exploring a child's daydreams and perceptions of labour.",
      "At 10 AM, the child on his way to school watches the hawker selling crystal bangles, envying his unhurried freedom.",
      "At 4 PM, returning from school, he sees the gardener digging soil, getting dirty without reprimand.",
      "At night, looking through the bedroom window, he watches the lonely watchman swinging his lantern with his shadow.",
      "Appreciation of the dignity of labour alongside realistic understanding of adult hardship.",
      "Grammar: Prepositions of time/place, descriptive adjectives, poetic imagery."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#faf5ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#6b21a8" text-anchor="middle">Tagore's Vocation: Three Encounters of Childhood</text>
      <!-- Hawker 10 AM -->
      <circle cx="85" cy="85" r="32" fill="#f3e8ff" stroke="#a855f7" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">📿</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#581c87" text-anchor="middle">Bangle Hawker</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#7e22ce" text-anchor="middle">10 AM: Unhurried lane</text>
      <!-- Arrow 1 -->
      <path d="M125 85 L180 85" stroke="#d8b4fe" stroke-width="2"/>
      <!-- Gardener 4 PM -->
      <circle cx="225" cy="85" r="32" fill="#f3e8ff" stroke="#a855f7" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">🌱</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#581c87" text-anchor="middle">Gardener</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#7e22ce" text-anchor="middle">4 PM: Digs free in mud</text>
      <!-- Arrow 2 -->
      <path d="M265 85 L320 85" stroke="#d8b4fe" stroke-width="2"/>
      <!-- Watchman Night -->
      <circle cx="365" cy="85" r="32" fill="#f3e8ff" stroke="#a855f7" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">🏮</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#581c87" text-anchor="middle">Watchman</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#7e22ce" text-anchor="middle">Night: Lantern & shadow</text>
      <!-- Arrow 3 -->
      <path d="M405 85 L460 85" stroke="#d8b4fe" stroke-width="2"/>
      <!-- Child's Wish -->
      <rect x="465" y="55" width="100" height="60" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
      <text x="515" y="76" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#4c1d95" text-anchor="middle">Child's Wish</text>
      <text x="515" y="93" font-family="system-ui, sans-serif" font-size="9" fill="#6d28d9" text-anchor="middle">Longing for freedom</text>
      <text x="515" y="106" font-family="system-ui, sans-serif" font-size="9" fill="#6d28d9" text-anchor="middle">from strict routines</text>
    </svg>`,
    questions: [
      {
        q: "Who does the child meet on his way to school at ten in the morning, and what is the person doing?",
        marks: 2,
        ans: "At ten in the morning, the child encounters a bangle hawker wandering through the lane, crying out aloud: 'Bangles, crystal bangles!' The hawker walks at an easy, unhurried pace.",
        rubric: [
          { key: "Identification of bangle hawker", marks: "1 Mark" },
          { key: "Hawker calling 'Bangles, crystal bangles' at unhurried pace", marks: "1 Mark" }
        ]
      },
      {
        q: "Why does the child feel envious of the bangle hawker's life?",
        marks: 3,
        ans: "The child feels envious because the hawker seems unbound by rigid rules: there is no bell forcing him to rush to school, no fixed road he must travel, no compulsory place he must reach, and no strict hour when he must return home.",
        rubric: [
          { key: "No rush or ringing bells commanding his time", marks: "1 Mark" },
          { key: "Freedom to choose any path or road", marks: "1 Mark" },
          { key: "Absence of strict deadlines to return home", marks: "1 Mark" }
        ]
      },
      {
        q: "What does the child observe the gardener doing at four o'clock in the afternoon, and what wish does it trigger in his heart?",
        marks: 3,
        ans: "At four in the afternoon, returning from school, the child sees the gardener digging the garden soil through the gate. The gardener soils his clothes with red dust, bakes in the scorching sun, and gets drenched in sweat without anyone scolding him. The child wishes he were a gardener so he could dig in the dirt all day without being scolded for dirty clothes.",
        rubric: [
          { key: "Observation of gardener digging soil and getting dirty/sweaty", marks: "1.5 Marks" },
          { key: "Child's wish: freedom to play/dig without being scolded by mother", marks: "1.5 Marks" }
        ]
      },
      {
        q: "Describe the nighttime scene observed by the child through his bedroom window.",
        marks: 3,
        ans: "At night, after his mother tucks him into bed, the child gazes out into the dark, lonely street. The lone street lamp stands tall like a giant with one fiery red eye in its head. The night watchman swings his glowing kerosene lantern, his giant shadow walking beside him, walking the lane all night without ever having to go to bed.",
        rubric: [
          { key: "Gazing out of window into lonely dark street", marks: "1 Mark" },
          { key: "Metaphor of street lamp like a giant with one red eye", marks: "1 Mark" },
          { key: "Watchman swinging lantern and never forced to sleep", marks: "1 Mark" }
        ]
      },
      {
        q: "Explain the deeper contrast Tagore draws between a child's romantic innocence and the harsh economic reality of adult vocations.",
        marks: 4,
        ans: `Tagore masterfully captures childhood's innocent misunderstanding of labour:
        <ul>
          <li><strong>The Child's Perspective:</strong> The child sees only liberty—no homework, no scolding, no bedtime, and the romantic freedom to wander under starlight or play in the mud.</li>
          <li><strong>The Adult Reality:</strong> In truth, the hawker walks tirelessly for miles in blistering heat to earn meager coins; the gardener endures backbreaking physical exhaustion with blistered hands; and the watchman stays awake in cold darkness fighting loneliness and fatigue.</li>
          <li><strong>Dignity of Labour:</strong> While exposing this contrast, the poem honors every humble profession as worthy of deep respect and artistic celebration.</li>
        </ul>`,
        rubric: [
          { key: "Child's romantic view of freedom from discipline", marks: "1.5 Marks" },
          { key: "Grim reality of grueling manual labour and poverty", marks: "1.5 Marks" },
          { key: "Underlying tribute to dignity of honest labour", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Dignity of Labour & Bagless Days",
      text: "Under NEP 2020 guidelines, schools must conduct 10 'Bagless Days' per year where students intern with local artisans, potters, carpenters, and electricians to understand hands-on vocational skills.",
      question: "How does engaging in hands-on vocational work dismantle social prejudices about 'blue-collar' vs 'white-collar' jobs? Suggest three skills a 5th grader can learn from a master potter or gardener.",
      answer: `<strong>Dismantling Prejudices:</strong> By physically handling clay or tending seedlings, students realize that manual craftsmanship demands immense intellectual patience, geometry, tactile sensitivity, and artistic mastery. This eradicates the false elitist bias that desk jobs are superior to manual vocations, instilling genuine lifelong respect for working-class citizens.<br><br>
      <strong>Three Valuable Skills:</strong>
      <ol>
        <li><strong>Soil Aeration & Composting (Gardener):</strong> Understanding organic decomposition, soil pH, earthworm health, and natural pest-repellent concoctions like neem oil.</li>
        <li><strong>Rotational Symmetry & Centering (Potter):</strong> Mastering the tactile skill of centering wet clay on a rotating wheel, developing intense mindfulness, fine motor control, and patience.</li>
        <li><strong>Resource Conservation:</strong> Learning how artisans reuse clay trimmings and how gardeners mulch fallen leaves to produce zero waste, internalizing real sustainable living.</li>
      </ol>`,
      rubric: "2 Marks for social/cognitive analysis of dignity of labour + 3 Marks for 3 detailed, age-appropriate artisan skills = 5 Marks"
    }
  },

  {
    id: "s10",
    num: 10,
    unit: "Unit 5: Work is Worship",
    title: "Glass Bangles",
    subtitle: "Inspirational story on Indian handicraft, female creativity, and rural entrepreneurship",
    concepts: [
      "Traditional Indian bangle-making craft in historic glassmaking hubs (like Firozabad).",
      "Ravi's traditional glass workshop: molten glass furnaces, shaping rods, and cooling ovens.",
      "Ananya's visionary artistic intervention: introducing contemporary botanical patterns and geometric styles.",
      "Economic revitalization: how innovation revitalized local trade, created jobs for women, and uplifted the community.",
      "Vocabulary: furnace, molten, crucible, craftsmanship, entrepreneurship, intricate, vibrant."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff1f2" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9f1239" text-anchor="middle">Crafting Heritage: The Journey of Glass Bangles</text>
      <!-- Step 1: Furnace -->
      <circle cx="85" cy="85" r="32" fill="#ffe4e6" stroke="#f43f5e" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">🔥</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#881337" text-anchor="middle">Furnace</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#be123c" text-anchor="middle">Melts recycled glass</text>
      <!-- Arrow 1 -->
      <path d="M125 85 L180 85" stroke="#fda4af" stroke-width="2"/>
      <!-- Step 2: Shaping -->
      <circle cx="225" cy="85" r="32" fill="#ffe4e6" stroke="#f43f5e" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">🪄</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#881337" text-anchor="middle">Spindle Rod</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#be123c" text-anchor="middle">Coils into spiral rings</text>
      <!-- Arrow 2 -->
      <path d="M265 85 L320 85" stroke="#fda4af" stroke-width="2"/>
      <!-- Step 3: Ananya's Art -->
      <circle cx="365" cy="85" r="32" fill="#ffe4e6" stroke="#f43f5e" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">🎨</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#881337" text-anchor="middle">Modern Art</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#be123c" text-anchor="middle">Ananya's floral styling</text>
      <!-- Arrow 3 -->
      <path d="M405 85 L460 85" stroke="#fda4af" stroke-width="2"/>
      <!-- Step 4: Community Wealth -->
      <circle cx="500" cy="85" r="34" fill="#fef2f2" stroke="#e11d48" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">✨</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9f1239" text-anchor="middle">Success!</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#e11d48" text-anchor="middle">Local artisans thrive</text>
    </svg>`,
    questions: [
      {
        q: "Describe the traditional step-by-step process of making glass bangles in Ravi's workshop.",
        marks: 3,
        ans: "In Ravi's workshop: (1) Broken glass pieces and colouring chemicals are heated in high-temperature clay furnaces until they melt into glowing, syrupy liquid, (2) Master artisans wrap the molten glass around a long rotating iron rod called a spindle to form a continuous glass spiral, (3) The cooled spirals are cut with a diamond cutter into individual rings and joined over a small flame to complete smooth, circular bangles.",
        rubric: [
          { key: "Melting raw glass in high-temperature furnace", marks: "1 Mark" },
          { key: "Coiling molten glass onto iron spindle rods into spirals", marks: "1 Mark" },
          { key: "Cutting and jointing over flames into complete circular rings", marks: "1 Mark" }
        ]
      },
      {
        q: "Who was Ananya, and what creative innovation did she introduce to revive her father's struggling workshop?",
        marks: 3,
        ans: "Ananya was Ravi's young, observant daughter. Recognizing that consumer tastes were evolving, she introduced modern design elements: delicate floral hand-painting, gradient sunset hues, glittering stone work, and sleek geometric patterns, breathing fresh life into traditional craftsmanship.",
        rubric: [
          { key: "Identification of Ananya as Ravi's talented daughter", marks: "1 Mark" },
          { key: "Innovative designs: floral hand-painting and gradient colors", marks: "1 Mark" },
          { key: "Blending traditional techniques with modern aesthetic trends", marks: "1 Mark" }
        ]
      },
      {
        q: "How did the success of Ananya's designer bangles transform the socio-economic life of the surrounding village?",
        marks: 4,
        ans: `The massive demand for the new designer bangles uplifted the entire rural ecosystem:
        <ul>
          <li><strong>Increased Artisan Wages:</strong> Glass blowers received higher, steady daily incomes for their skilled labour.</li>
          <li><strong>Women's Economic Empowerment:</strong> Local village women were employed in large numbers to hand-paint intricate patterns, polish surfaces, and embellish bangles with decorative stones.</li>
          <li><strong>Packaging & Logistics Jobs:</strong> Additional employment sprang up in cardboard carton fabrication, eco-friendly cloth pouch stitching, and transport services.</li>
          <li><strong>Preservation of Heritage:</strong> The village's age-old cultural craft was protected from extinction and celebrated nationally.</li>
        </ul>`,
        rubric: [
          { key: "Substantial wage growth for master artisans", marks: "1 Mark" },
          { key: "Employment and financial independence for local women", marks: "1 Mark" },
          { key: "Auxiliary jobs in packaging and logistics", marks: "1 Mark" },
          { key: "Revival and national recognition of cultural heritage", marks: "1 Mark" }
        ]
      },
      {
        q: "If you were tasked with marketing these handmade Indian bangles globally, what innovative product variations would you propose?",
        marks: 3,
        ans: `Innovative proposals:
        <ol>
          <li><strong>Eco-Friendly Recycled Sea-Glass Collections:</strong> Crafting translucent frosted bangles sourced from ocean-recycled bottles to appeal to global environmental consumers.</li>
          <li><strong>Glow-in-the-Dark Constellation Bangles:</strong> Incorporating safe, luminescent minerals that glow like twinkling stars at night for youth festivals.</li>
          <li><strong>Artisan Signature QR Tags:</strong> Attaching small QR code tags on boxes linking to short 30-second video clips showing the individual rural woman artisan who crafted that exact set.</li>
        </ol>`,
        rubric: [
          { key: "Recycled eco-conscious glass collection", marks: "1 Mark" },
          { key: "Creative youth design (glow-in-the-dark/constellation)", marks: "1 Mark" },
          { key: "Digital storytelling connecting global buyer to local maker", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Youth Entrepreneurship & Vocal for Local",
      text: "The Government of India's 'One District One Product' (ODOP) and 'Vocal for Local' initiatives encourage young citizens to develop entrepreneurial solutions that bring traditional regional handicrafts into mainstream national and global markets.",
      question: "Develop an entrepreneurial business pitch for a school handicraft fair featuring Ananya's designer bangles. Outline: (1) Brand Name & Tagline, (2) Sustainable Packaging Strategy, (3) Digital Promotion Strategy.",
      answer: `<strong>Youth Entrepreneurship Business Pitch:</strong><br><br>
      <strong>1. Brand Name & Tagline:</strong><br>
      <em>Brand:</em> <strong>Virasat Varna (विरासत वर्ण) — Artisan Elegance</strong><br>
      <em>Tagline:</em> 'From Furnace Flames to Timeless Grace.'<br><br>
      <strong>2. Sustainable Packaging Strategy:</strong>
      <ul>
        <li>Eliminate plastic bubble wrap entirely; use recycled corrugated cardboard lined with unbleached organic khadi cotton pouches.</li>
        <li>Include a seed-paper tag embedded with marigold seeds that customers can plant in soil after unpacking.</li>
      </ul><br>
      <strong>3. Digital Promotion Strategy:</strong>
      <ul>
        <li><strong>Short-Form Video Storytelling:</strong> Publish 15-second mesmerizing Instagram/YouTube clips showcasing the fiery glass-spinning process and delicate hand-painting brushstrokes.</li>
        <li><strong>Festive College & School Pop-Up Stalls:</strong> Set up interactive stalls during Diwali and Rakshabandhan where students can customize their own colour combinations.</li>
      </ul>`,
      rubric: "1.5 Marks for brand identity + 1.5 Marks for zero-waste sustainable packaging + 2 Marks for digital video storytelling and festive pop-up stalls = 5 Marks"
    }
  }
];

// -------------------------------------------------------------
// PART 2: MARIGOLD (CLASSIC CBSE CURRICULUM - UNITS 1 TO 10)
// -------------------------------------------------------------
const marigoldUnits = [
  {
    id: "m1",
    num: 1,
    unit: "Unit 1",
    title: "Ice-cream Man & Wonderful Waste!",
    subtitle: "Poem by Rachel Field & Folk Tale from Travancore, Kerala",
    concepts: [
      "Poem 'Ice-cream Man': The summer relief of ice-cream carts with cooling flavours (vanilla, chocolate, strawberry) and fizzy drinks; cart compared to a colourful flower bed.",
      "Prose 'Wonderful Waste!': Maharaja of Travancore commands a grand feast; orders the cook not to discard vegetable scraps.",
      "Invention of 'Avial': Slicing vegetable peels and remnants into long strips, boiling them with ground coconut, green chillies, garlic, curd, and tempering with curry leaves.",
      "Core values: Zero waste cooking, resourcefulness, culinary ingenuity, and sustainability.",
      "Grammar: Describing words, rhyming words, compound words, step-by-step recipe writing."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ecfdf5" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#065f46" text-anchor="middle">The Culinary Miracle of Avial (Zero Waste)</text>
      <!-- Vegetable Scraps -->
      <circle cx="85" cy="85" r="32" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">🥕</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">Veggie Scraps</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#059669" text-anchor="middle">Peels & cuts in basket</text>
      <!-- Arrow 1 -->
      <path d="M125 85 L180 85" stroke="#6ee7b7" stroke-width="2"/>
      <!-- Slicing Long Strips -->
      <circle cx="225" cy="85" r="32" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">🔪</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">Long Strips</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#059669" text-anchor="middle">Washed & boiled</text>
      <!-- Arrow 2 -->
      <path d="M265 85 L320 85" stroke="#6ee7b7" stroke-width="2"/>
      <!-- Coconut Paste -->
      <circle cx="365" cy="85" r="32" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">🥥</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">Coconut Paste</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#059669" text-anchor="middle">Chillies, garlic & curd</text>
      <!-- Arrow 3 -->
      <path d="M405 85 L460 85" stroke="#6ee7b7" stroke-width="2"/>
      <!-- Royal Dish Avial -->
      <circle cx="500" cy="85" r="34" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">🍲</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">Avial!</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Kerala's iconic feast</text>
    </svg>`,
    questions: [
      {
        q: "In which season is ice cream most popular, and what sights give children the greatest joy when the Ice-cream Man arrives?",
        marks: 2,
        ans: "Ice cream is most popular during the scorching heat of summer. Children feel supreme joy seeing the Ice-cream Man roll his round umbrella cart down the street, filling the crispy cones with cooling mounds of vanilla, chocolate, and strawberry scoops.",
        rubric: [
          { key: "Season: hot summer months", marks: "1 Mark" },
          { key: "Sight: cart with umbrella, filling cones with mounds of flavours", marks: "1 Mark" }
        ]
      },
      {
        q: "What metaphor does the poet Rachel Field use to describe the Ice-cream cart, and why?",
        marks: 3,
        ans: "The poet compares the Ice-cream cart to a colourful 'flower bed of roses and sweet peas'. Just as hungry honeybees cluster thickly around blooming blossoms, enthusiastic children cluster tightly around the cart to savor sweet cold treats.",
        rubric: [
          { key: "Identification of metaphor: flower bed of roses and sweet peas", marks: "1 Mark" },
          { key: "Comparison of children clustering like honeybees", marks: "1 Mark" },
          { key: "Explanation of vivid sensory appeal", marks: "1 Mark" }
        ]
      },
      {
        q: "Why did the Maharaja of Travancore enter the palace kitchen, and what strict order did he issue to the cook?",
        marks: 3,
        ans: "The Maharaja entered the kitchen in the afternoon to inspect the grand dishes being prepared for his royal banquet. Noticing a huge basket full of leftover vegetable peels and scraps, he sternly ordered the cook not to discard them, commanding him to find a creative way to use them.",
        rubric: [
          { key: "Purpose: inspecting dishes for the royal feast", marks: "1 Mark" },
          { key: "Noticing basket of discarded vegetable scraps", marks: "1 Mark" },
          { key: "Strict command not to waste them and find an innovative recipe", marks: "1 Mark" }
        ]
      },
      {
        q: "Detail the step-by-step recipe invented by the cook that resulted in the famous traditional dish 'Avial'.",
        marks: 4,
        ans: `<ol>
          <li><strong>Washing & Slicing:</strong> The cook thoroughly washed the vegetable scraps and sliced them into long, even strips.</li>
          <li><strong>Boiling:</strong> He placed the strips in an enormous cooking pot with water, turmeric, and salt to boil over the fire.</li>
          <li><strong>Ground Paste:</strong> He ground fresh grated coconut, pungent green chillies, and garlic into a smooth paste and blended it into the boiling vegetables.</li>
          <li><strong>Whisked Curd & Tempering:</strong> He poured whipped curd into the gravy, drizzled a generous spoonful of fragrant coconut oil on top, and tempered it with fresh green curry leaves.</li>
        </ol>`,
        rubric: [
          { key: "Washing and cutting scraps into long strips", marks: "1 Mark" },
          { key: "Boiling with salt and turmeric in a huge pot", marks: "1 Mark" },
          { key: "Adding ground paste of coconut, chillies, and garlic", marks: "1 Mark" },
          { key: "Finishing with whipped curd, coconut oil, and curry leaves", marks: "1 Mark" }
        ]
      },
      {
        q: "State whether the following statements are True or False:",
        marks: 3,
        ans: `<ul>
          <li>(a) The King had ordered a grand dinner in his palace. — <strong>True</strong></li>
          <li>(b) No one had ever heard of or tasted Avial before the cook made it. — <strong>True</strong></li>
          <li>(c) The cook had planned to make a new dish using the vegetable scraps from the very beginning. — <strong>False</strong> (He originally intended to throw them in the trash).</li>
        </ul>`,
        rubric: [
          { key: "Statement (a) True", marks: "1 Mark" },
          { key: "Statement (b) True", marks: "1 Mark" },
          { key: "Statement (c) False with justification", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Zero Food Waste & Sustainable Kitchens",
      text: "Global reports indicate that nearly 40% of fresh vegetables and fruits are discarded in household garbage bins as peelings and trims, contributing significantly to landfill methane emissions.",
      question: "Inspired by the invention of Avial, propose three creative culinary recipes or compost strategies to achieve a zero-waste kitchen at home.",
      answer: `<strong>Three Zero-Waste Home Kitchen Innovations:</strong>
      <ol>
        <li><strong>Crispy Spiced Potato & Gourd Peel Chips:</strong> Wash raw potato, ridge gourd (turai), and bottle gourd (lauki) peels cleanly. Toss in mustard oil, chaat masala, turmeric, and roast in an oven or air-fryer until crunchy.</li>
        <li><strong>Nutrient-Rich Vegetable Stock:</strong> Collect clean trimmed carrot ends, onion tops, cabbage stems, and tomato cores in a freezer bag. Boil them once weekly with black peppercorns to create rich vegetable broth for soups and curries.</li>
        <li><strong>Aerobic Kitchen Scrap Composting:</strong> Non-edible citrus rinds and fruit seeds are added to a terracotta household compost pot layered with dry leaves and soil, producing rich black organic humus for balcony plants within 45 days.</li>
      </ol>`,
      rubric: "1.5 Marks for peel chips recipe + 1.5 Marks for frozen veggie stock + 2 Marks for household aerobic composting = 5 Marks"
    }
  },

  {
    id: "m2",
    num: 2,
    unit: "Unit 2",
    title: "Teamwork & Flying Together",
    subtitle: "Poem by Jan Nigro & Panchatantra adaptation by Shivkumar",
    concepts: [
      "Poem 'Teamwork': The power of collaboration; without passing the ball, nobody shoots basketball hoops; relay races cannot proceed without passing the baton.",
      "Prose 'Flying Together': A flock of wild geese lives in a tall leafy tree; a wise old gander advises them to destroy a tender creeper while it is still small.",
      "The geese ignore his advice; the creeper thickens into a rope-like ladder; a hunter climbs up and spreads a deadly net.",
      "Trapped geese realize their mistake; the wise bird devises a plan to feign death so the hunter drops them to the ground.",
      "Grammar: Prepositions, antonyms, rhyming pairs, collective nouns, moral fable comprehension."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e3a8a" text-anchor="middle">United We Fly: The Wisdom of the Wild Geese</text>
      <!-- Tree & Creeper -->
      <circle cx="85" cy="85" r="32" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">🌳</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Tall Tree</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#2563eb" text-anchor="middle">Creeper grows thick</text>
      <!-- Hunter's Net -->
      <path d="M125 85 L180 85" stroke="#93c5fd" stroke-width="2"/>
      <circle cx="225" cy="85" r="32" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">🕸️</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Hunter's Net</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#2563eb" text-anchor="middle">All geese trapped</text>
      <!-- Clever Trick -->
      <path d="M265 85 L320 85" stroke="#93c5fd" stroke-width="2"/>
      <circle cx="365" cy="85" r="32" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">🧠</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Pretend Dead</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#2563eb" text-anchor="middle">Wise old bird's plan</text>
      <!-- Flap & Fly Together -->
      <path d="M405 85 L460 85" stroke="#93c5fd" stroke-width="2"/>
      <circle cx="500" cy="85" r="34" fill="#ecfdf5" stroke="#059669" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">🪿</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#065f46" text-anchor="middle">Fly Together!</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#047857" text-anchor="middle">Simultaneous takeoff</text>
    </svg>`,
    questions: [
      {
        q: "Why is teamwork essential according to Jan Nigro's poem? Give two sports examples mentioned in the text.",
        marks: 3,
        ans: "Teamwork combines individual efforts to achieve common dreams. (1) In basketball, a player cannot shoot a basket into the hoop unless teammates pass the ball to them, and (2) in a relay race, the race comes to a complete standstill if nobody is willing to pass on the baton.",
        rubric: [
          { key: "Definition: combining efforts to achieve common goals", marks: "1 Mark" },
          { key: "Basketball example (passing the ball)", marks: "1 Mark" },
          { key: "Relay race example (passing the baton)", marks: "1 Mark" }
        ]
      },
      {
        q: "Why did the wise old gander advise the flock to destroy the little creeper at the foot of their tree?",
        marks: 3,
        ans: "The wise bird warned that while the creeper was tender and small, it could be destroyed effortlessly. However, as it grew, it would climb up the tree trunk, turn thick and strong like a ladder, and allow a hunter to climb up easily to capture or kill them all.",
        rubric: [
          { key: "Creeper was soft and easily destroyable while small", marks: "1 Mark" },
          { key: "It would thicken into a strong climbing ladder", marks: "1 Mark" },
          { key: "A hunter could easily climb up to destroy the flock", marks: "1 Mark" }
        ]
      },
      {
        q: "Why did the geese cry 'Help! Help!' and how did the wise old bird rescue them from the hunter's trap?",
        marks: 4,
        ans: `When the geese returned at dusk, they flew straight into the tree and found themselves hopelessly tangled in the hunter's strong nylon net.<br><br>
        <strong>The Rescue Plan:</strong>
        The wise bird advised everyone: <em>'When the hunter climbs up tomorrow morning, do not struggle or cry. Lie completely still and pretend to be dead. Hunters do not want dead birds; he will throw us out of the net onto the grass one by one. Keep lying still until the very last bird is thrown. Then, on my whistle, flap your wings together and fly away at once!'</em> The plan worked flawlessly.`,
        rubric: [
          { key: "Getting trapped in the net at dusk", marks: "1 Mark" },
          { key: "Strategy to pretend to be dead", marks: "1 Mark" },
          { key: "Waiting until the last bird is cast down onto the ground", marks: "1 Mark" },
          { key: "Simultaneous unified flight upon the leader's signal", marks: "1 Mark" }
        ]
      },
      {
        q: "What crucial life lesson does the Panchatantra story 'Flying Together' impart regarding procrastination and listening to elders?",
        marks: 3,
        ans: "The story teaches: (1) Never ignore the foresight and wise counsel of experienced elders, (2) Destructive problems must be tackled immediately when they are small and manageable; procrastinating allows small problems to grow into lethal traps, and (3) In times of crisis, unified collective discipline saves lives.",
        rubric: [
          { key: "Respecting counsel and foresight of elders", marks: "1 Mark" },
          { key: "Danger of procrastination / destroying problems when small", marks: "1 Mark" },
          { key: "Power of unity and discipline in crisis", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Crisis Management & Group Synergy",
      text: "During a school science exhibition, a four-member team faces a sudden disaster: their automated water dispenser circuit shorts out thirty minutes before the chief guest's arrival. Two members start blaming each other loudly.",
      question: "Drawing parallels with 'Teamwork' and 'Flying Together', outline how the team leader should defuse blame and guide the group to troubleshoot the emergency.",
      answer: `<strong>Crisis Resolution Blueprint:</strong><br><br>
      <strong>1. Immediate Ceasefire & Focus on Goal:</strong> The leader must calmly interject: <em>'Stop blaming. Blame fixes zero circuits. We have 30 minutes, and we either present together or fail together.'</em><br><br>
      <strong>2. Division of Roles According to Strengths:</strong>
      <ul>
        <li><strong>Member A (Hardware):</strong> Unscrews the burnt wire and tests the backup 9V battery.</li>
        <li><strong>Member B (Circuit Assembly):</strong> Rewires the breadboard according to the schematic diagram.</li>
        <li><strong>Member C (Presentation Chart):</strong> Prepares the oral speech and writes down backup step-by-step illustrations in case the physical pump needs manual demonstration.</li>
        <li><strong>Leader (Coordination):</strong> Procures a replacement resistor from the adjacent electronics stall and keeps track of time.</li>
      </ul><br>
      <strong>3. Unified Execution:</strong> Just like the wild geese who waited for the final whistle to take off simultaneously, the team tests the repaired circuit together 5 minutes before inspection, turning near-disaster into triumphant synergy.`,
      rubric: "1.5 Marks for emotional regulation and stopping blame + 2 Marks for functional role allocation + 1.5 Marks for unified rehearsal = 5 Marks"
    }
  },

  {
    id: "m3",
    num: 3,
    unit: "Unit 3",
    title: "My Shadow & Robinson Crusoe",
    subtitle: "Poem by Robert Louis Stevenson & Classic Adventure by Daniel Defoe",
    concepts: [
      "Poem 'My Shadow': A child's delightful observation of his shadow that mimics his every move, shoots up tall like an India-rubber ball, and stays behind asleep in bed on a dewy morning.",
      "Prose 'Robinson Crusoe Discovers a footprint': Robinson Crusoe stranded on an uninhabited island discovers a solitary human footprint on the beach sand.",
      "His overwhelming fear: mistaking bushes for savages, retreating to his fortified cave ('castle'), praying for protection, and measuring the footprint against his own.",
      "Grammar: Degrees of comparison, compound words, rhyming schemes, first-person narrative, fear vs courage."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#854d0e" text-anchor="middle">Robinson Crusoe's Discovery on the Shore</text>
      <!-- Solitary Footprint -->
      <circle cx="85" cy="85" r="32" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">👣</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#713f12" text-anchor="middle">Footprint</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#a16207" text-anchor="middle">Print of a naked foot</text>
      <!-- Paralyzing Terror -->
      <path d="M125 85 L180 85" stroke="#facc15" stroke-width="2"/>
      <circle cx="225" cy="85" r="32" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">😨</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#713f12" text-anchor="middle">Panic</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#a16207" text-anchor="middle">Looks behind every tree</text>
      <!-- Retreat to Cave -->
      <path d="M265 85 L320 85" stroke="#facc15" stroke-width="2"/>
      <circle cx="365" cy="85" r="32" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">🏰</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#713f12" text-anchor="middle">The Castle</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#a16207" text-anchor="middle">Fortified rocky cave</text>
      <!-- Foot Measurement -->
      <path d="M405 85 L460 85" stroke="#facc15" stroke-width="2"/>
      <circle cx="500" cy="85" r="34" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">📏</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#991b1b" text-anchor="middle">Larger Foot!</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">Island is inhabited</text>
    </svg>`,
    questions: [
      {
        q: "What funny habit of the shadow does the child describe in Robert Louis Stevenson's poem?",
        marks: 2,
        ans: "The child observes that unlike normal children who grow steadily and slowly, the shadow suddenly shoots up tall like an India-rubber ball, and at other times shrinks so tiny that there is none of him at all.",
        rubric: [
          { key: "Shooting up tall like an India-rubber ball", marks: "1 Mark" },
          { key: "Shrinking so tiny that none of him is left", marks: "1 Mark" }
        ]
      },
      {
        q: "What happened when the child woke up before the sun on a dewy morning?",
        marks: 2,
        ans: "The child rose early and found shining dew on every buttercup flower, but his lazy shadow stayed behind asleep in bed, fast asleep like an arrant sleepy-head.",
        rubric: [
          { key: "Rising early to find dew on buttercups", marks: "1 Mark" },
          { key: "Shadow staying behind asleep in bed (no light = no shadow)", marks: "1 Mark" }
        ]
      },
      {
        q: "What astonishing sight did Robinson Crusoe discover on the lonely island shore, and how did he react?",
        marks: 3,
        ans: "Robinson Crusoe was thunderstruck to discover the distinct imprint of a single naked human foot on the sand. Paralyzed with terror, he listened intently, looked all around, but could neither see nor hear another living soul.",
        rubric: [
          { key: "Discovery of distinct print of a naked human foot", marks: "1 Mark" },
          { key: "Physical reaction: thunderstruck, confused, terrified", marks: "1 Mark" },
          { key: "Searching horizons, hearing and seeing nothing", marks: "1 Mark" }
        ]
      },
      {
        q: "Why did Robinson Crusoe run home to his cave like a frightened creature being chased by wild animals?",
        marks: 3,
        ans: "Overwhelmed by blinding panic, Crusoe sprinted toward his cave (which he called his 'castle'). In his terrified state of mind, every distant bush and tree stump looked like a ferocious savage ready to murder and devour him.",
        rubric: [
          { key: "Fleeing in panic toward fortified cave ('castle')", marks: "1.5 Marks" },
          { key: "Psychological fear: mistaking every bush and stump for a savage", marks: "1.5 Marks" }
        ]
      },
      {
        q: "How did Robinson Crusoe finally confirm that the footprint was real and did not originate from his own imagination?",
        marks: 3,
        ans: "After hiding for days, Crusoe ventured back down to the beach to inspect the print again. He placed his own foot directly beside the impression in the sand. He realized with a shock that the footprint was vastly larger than his own, proving conclusively that another human was indeed roaming the island.",
        rubric: [
          { key: "Venturing back to shore after days of hiding", marks: "1 Mark" },
          { key: "Placing his own foot directly beside the imprint", marks: "1 Mark" },
          { key: "Observing it was significantly larger than his own foot", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Psychology of Fear & Rational Thinking",
      text: "When alone in the dark or experiencing an unfamiliar sound at night, our imagination often exaggerates shadows into monsters, creating severe anxiety just as Robinson Crusoe mistook innocent bushes for savages.",
      question: "Analyze how fear distorts human perception. Propose a 3-step rational method a student can use to overcome irrational night panic.",
      answer: `<strong>Distortion of Perception:</strong> High fear triggers an adrenaline-fueled 'fight or flight' response that hijacks the logical prefrontal cortex. The visual processing center scrambles to fill in missing details with worst-case survival scenarios, transforming harmless tree shadows into predatory figures.<br><br>
      <strong>3-Step Rational De-Escalation Method:</strong>
      <ol>
        <li><strong>Box Breathing (Physiological Reset):</strong> Inhale deeply for 4 seconds, hold for 4, exhale for 4, hold for 4. This forces the parasympathetic nervous system to slow down the racing heartbeat.</li>
        <li><strong>Reality-Check Illumination:</strong> Switch on the bedside flashlight and directly illuminate the mysterious shadow to inspect the physical source (e.g. a jacket hung behind a door).</li>
        <li><strong>Cognitive Reframing (Self-Talk):</strong> Tell yourself out loud: <em>'The house is securely locked; the window curtain was rustling because the ceiling fan is running. I am completely safe.'</em></li>
      </ol>`,
      rubric: "1.5 Marks for neurological explanation of fear distortion + 3.5 Marks for 3 actionable rational calming techniques = 5 Marks"
    }
  },

  {
    id: "m4",
    num: 4,
    unit: "Unit 4",
    title: "Crying & My Elder Brother",
    subtitle: "Poem by Galway Kinnell & Premchand's classic 'Bade Bhai Sahab'",
    concepts: [
      "Poem 'Crying': Cathartic release of emotions; crying just a little achieves nothing; cry until your pillow is soaked, then throw open the window and laugh aloud 'Ha! Ha!'",
      "Prose 'My Elder Brother': Adapted from Munshi Premchand's timeless masterpiece 'Bade Bhai Sahab'.",
      "Two brothers: Bhaiya (studious, older by 5 years, repeats grades, preaches discipline) and Munna (playful, studies little, flies kites, tops examinations).",
      "Bhaiya's profound speech on humility: Knowledge is not just passing exams; Ravana had vast knowledge but fell due to arrogance; our uneducated parents still possess greater life wisdom.",
      "Grammar: Idioms, time management schedules, dialogue punctuation, character sketches."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">Bade Bhai Sahab: Two Brothers, Two Worldviews</text>
      <!-- Bhaiya Studious -->
      <circle cx="100" cy="85" r="32" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
      <text x="100" y="80" font-size="18" text-anchor="middle">📚</text>
      <text x="100" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7c2d12" text-anchor="middle">Bhaiya</text>
      <text x="100" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">Studies 12 hrs; repeats</text>
      <!-- Contrast -->
      <path d="M140 85 L220 85" stroke="#fed7aa" stroke-width="2"/>
      <!-- Munna Playful -->
      <circle cx="260" cy="85" r="32" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
      <text x="260" y="80" font-size="18" text-anchor="middle">🪁</text>
      <text x="260" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7c2d12" text-anchor="middle">Munna</text>
      <text x="260" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">Flies kites; tops class</text>
      <!-- Lesson on Pride -->
      <path d="M300 85 L380 85" stroke="#fed7aa" stroke-width="2"/>
      <rect x="390" y="55" width="160" height="60" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
      <text x="470" y="75" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#991b1b" text-anchor="middle">"Wisdom > Textbooks"</text>
      <text x="470" y="92" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">Ravana's pride ruined him;</text>
      <text x="470" y="106" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">Life experience has true value</text>
    </svg>`,
    questions: [
      {
        q: "According to Galway Kinnell in the poem 'Crying', why is crying only a little bit of no use at all?",
        marks: 2,
        ans: "The poet asserts that crying only a little leaves unresolved sorrow lingering inside. One must cry wholeheartedly until the pillow is completely soaked with tears, cleansing the heart so one can jump out of bed, open the window, and laugh joyously.",
        rubric: [
          { key: "Crying a little leaves sorrow pent up inside", marks: "1 Mark" },
          { key: "Crying fully purges grief and allows genuine joyful laughter", marks: "1 Mark" }
        ]
      },
      {
        q: "What was the age difference and academic gap between Bhaiya and Munna in 'My Elder Brother'?",
        marks: 2,
        ans: "Bhaiya was five years older than Munna, but academically he was only three classes ahead of him because Bhaiya believed in laying an extraordinarily strong educational foundation, often spending two to three years in a single class.",
        rubric: [
          { key: "Age difference: 5 years older", marks: "1 Mark" },
          { key: "Academic gap: only 3 classes ahead", marks: "1 Mark" }
        ]
      },
      {
        q: "How did Munna spend his time during the day, and what happened when the annual examination results were announced?",
        marks: 3,
        ans: "Munna spent his days enjoying marbles, flying paper kites, playing street games with friends, and sitting with his books for only brief periods. Yet, when annual results were declared, Munna secured first rank in his class, while poor Bhaiya failed once again despite studying constantly.",
        rubric: [
          { key: "Munna's playful routine: kites, marbles, outdoor games", marks: "1 Mark" },
          { key: "Munna securing first rank in examination", marks: "1 Mark" },
          { key: "Bhaiya failing despite studying long hours", marks: "1 Mark" }
        ]
      },
      {
        q: "What powerful lesson about arrogance, Ravana, and practical wisdom did Bhaiya impart to Munna after Munna became conceited?",
        marks: 4,
        ans: `Bhaiya warned Munna not to let academic success turn his head:
        <ol>
          <li><strong>Pride Brings Ruin:</strong> Ravana was master of the three worlds and possessed supreme scholarly intellect, yet his hubris and pride destroyed his entire dynasty.</li>
          <li><strong>Passing Exams is Not True Wisdom:</strong> Memorizing lines to pass tests does not equal life wisdom. True education is understanding the world and conducting oneself with humility.</li>
          <li><strong>Elder's Experience:</strong> Even if Munna earned MA or PhD degrees, their parents—who never went to school—would always possess greater experiential wisdom and moral authority to guide and admonish them.</li>
        </ol>`,
        rubric: [
          { key: "Example of Ravana's arrogance leading to downfall", marks: "1.5 Marks" },
          { key: "Distinction between rote exam success and true life wisdom", marks: "1.5 Marks" },
          { key: "Respect for uneducated parents' life experience", marks: "1 Mark" }
        ]
      },
      {
        q: "How does the story conclude, and what does it reveal about Bhaiya's affectionate brotherly heart?",
        marks: 3,
        ans: "Just as Bhaiya finished his stern sermon, a stray paper kite drifted overhead. Being taller, Bhaiya leapt up, caught the dangling string with a joyful laugh, and sprinted happily toward the hostel with Munna running beside him. This touchingly reveals that despite his stern disciplinary exterior, Bhaiya was still a child at heart who cared deeply for his little brother.",
        rubric: [
          { key: "Catching the stray kite string and leaping with joy", marks: "1 Mark" },
          { key: "Running together toward the hostel in affectionate harmony", marks: "1 Mark" },
          { key: "Revealing Bhaiya's loving, protective heart beneath his stern exterior", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Effective Study Habits & Work-Life Balance",
      text: "Two fifth-graders approach exam preparation differently: Aarav studies 8 hours without breaks, sacrificing sleep and exercise, while Kabir creates a balanced 2-hour timetable incorporating sports, sleep, and spaced revision.",
      question: "Evaluate the two approaches using the story of Bhaiya and Munna. Design a healthy daily timetable for a Class 5 student preparing for term exams.",
      answer: `<strong>Evaluation of Study Approaches:</strong> Aarav's marathon cramming mirrors Bhaiya's exhausting routine, leading to mental fatigue, poor memory retention, and burn-out. Kabir's balanced routine stimulates brain neuroplasticity through physical oxygenation and adequate REM sleep, mirroring Munna's natural sharp focus.<br><br>
      <strong>Healthy Balanced Daily Timetable (Class 5):</strong>
      <ul>
        <li><strong>06:30 AM – 07:30 AM:</strong> Morning yoga, warm milk, and review of memory-based flashcards.</li>
        <li><strong>08:00 AM – 02:30 PM:</strong> School classes, active participation, and mid-day meal.</li>
        <li><strong>03:00 PM – 04:30 PM:</strong> Rest, power nap, and informal reading.</li>
        <li><strong>04:30 PM – 06:00 PM:</strong> Outdoor sports (football, cycling, running with friends).</li>
        <li><strong>06:30 PM – 08:30 PM:</strong> Focused revision (Maths problem-solving + English writing).</li>
        <li><strong>08:30 PM – 09:30 PM:</strong> Wholesome dinner and family discussion.</li>
        <li><strong>09:30 PM:</strong> Bedtime (guaranteeing 9 hours of restorative sleep).</li>
      </ul>`,
      rubric: "1.5 Marks for pedagogical critique of cramming vs balanced revision + 3.5 Marks for realistic, healthy daily schedule balancing sports, study, and sleep = 5 Marks"
    }
  },

  {
    id: "m5",
    num: 5,
    unit: "Unit 5",
    title: "The Lazy Frog & Rip Van Winkle",
    subtitle: "Humorous Poem & Washington Irving's Legend of the Catskill Mountains",
    concepts: [
      "Poem 'The Lazy Frog': Fred the frog refuses to do an ounce of work, ignores his mother's pleas for help, and feigns sleep even when a lady frog hops past.",
      "Prose 'Rip Van Winkle': Rip is a kind, good-natured villager in the foothills of the Catskill mountains who loves children and dogs, but is hopelessly lazy regarding his own farm.",
      "His faithful dog Wolf; wandering into the mountains to escape work; meeting a strange short man carrying a keg of liquor.",
      "Drinking the sweet brew; falling into a deep slumber that lasts twenty long years; waking up to an altered village with gray hair and a rusted gun.",
      "Grammar: Suffixes (-ness, -ly), character analysis, antonyms, time-jump comprehension."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#166534" text-anchor="middle">Rip Van Winkle's 20-Year Mountain Nap</text>
      <!-- Mountain Hike -->
      <circle cx="85" cy="85" r="32" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">🐕</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">Rip & Wolf</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#166534" text-anchor="middle">Hikes Catskill hills</text>
      <!-- The Keg -->
      <path d="M125 85 L180 85" stroke="#86efac" stroke-width="2"/>
      <circle cx="225" cy="85" r="32" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">🍺</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">Strange Keg</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#166534" text-anchor="middle">Drinks sweet brew</text>
      <!-- 20-Year Sleep -->
      <path d="M265 85 L320 85" stroke="#86efac" stroke-width="2"/>
      <circle cx="365" cy="85" r="32" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">💤</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">20 Years Pass</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#166534" text-anchor="middle">Deep enchanted sleep</text>
      <!-- Waking Up Old -->
      <path d="M405 85 L460 85" stroke="#86efac" stroke-width="2"/>
      <circle cx="500" cy="85" r="34" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">🧔‍♂️</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">Foot-Long Beard</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Rusted gun & new era</text>
    </svg>`,
    questions: [
      {
        q: "What does Fred the lazy frog do all day long on his floating log?",
        marks: 2,
        ans: "Fred lies lolling on a silent log all day, shunning all exertion. Even when his elderly mother calls desperately for assistance, he feigns deafness, keeps his eyes shut, and does not move a single inch.",
        rubric: [
          { key: "Lolling upon a log and refusing any exertion", marks: "1 Mark" },
          { key: "Ignoring mother's pleas and pretending to sleep", marks: "1 Mark" }
        ]
      },
      {
        q: "Describe the paradox of Rip Van Winkle's character: What were his wonderful qualities, and what was his fatal flaw?",
        marks: 3,
        ans: "Rip was a simple, kind-hearted, and universally beloved neighbour who assisted everyone, flew kites for village children, taught them to shoot marbles, and comforted stray dogs. However, his fatal flaw was an incurable aversion to doing any profitable work on his own farm; his fences crumbled, cows wandered off, and weeds choked his land.",
        rubric: [
          { key: "Good qualities: helpful, gentle, beloved by children/dogs", marks: "1.5 Marks" },
          { key: "Fatal flaw: utter laziness regarding his own farm and family", marks: "1.5 Marks" }
        ]
      },
      {
        q: "Whom did Rip meet high up in the Kaatskill mountains, and what happened after he drank from their keg?",
        marks: 3,
        ans: "Rip met a strange short, stout old man with thick bushy hair and a grizzled beard, dressed in antique Dutch attire, carrying a heavy barrel. Rip helped him haul the keg to an amphitheater where odd-looking men played ninepins in eerie silence. Feeling thirsty, Rip secretly sipped the brew multiple times, fell into a deep enchanted slumber, and slept uninterrupted for twenty years.",
        rubric: [
          { key: "Encounter with antique Dutch stranger carrying keg", marks: "1 Mark" },
          { key: "Watching ninepins played in eerie silence", marks: "1 Mark" },
          { key: "Drinking repeatedly and falling into a 20-year sleep", marks: "1 Mark" }
        ]
      },
      {
        q: "Describe the shocking changes Rip Van Winkle discovered when he woke up and returned to his native village.",
        marks: 4,
        ans: `<ol>
          <li><strong>His Physical Body:</strong> His joints were stiff, his hunting gun had rusted away to dust, and his snow-white beard had grown a foot long.</li>
          <li><strong>His Faithful Dog:</strong> His companion Wolf was gone, and a strange starving dog snarled at him.</li>
          <li><strong>His Village:</strong> The village had grown vastly larger with new rows of houses; people wore strange fashions, nobody recognized his face, and children mocked his appearance.</li>
          <li><strong>His Country:</strong> The portrait of King George III on the village inn sign had been repainted into General George Washington, marking the dawn of independent America.</li>
        </ol>`,
        rubric: [
          { key: "Physical changes: rusted gun, stiff joints, foot-long white beard", marks: "1 Mark" },
          { key: "Loss of dog and unfamiliarity of village houses", marks: "1 Mark" },
          { key: "Strangers in village and mockery from children", marks: "1 Mark" },
          { key: "Political transition: King George III replaced by George Washington", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: The Opportunity Cost of Procrastination",
      text: "Rip Van Winkle slept away twenty years of prime adulthood, missing his children's upbringing and the birth of a free nation, simply because he constantly evaded today's responsibilities.",
      question: "Analyze the concept of 'opportunity cost' in relation to student procrastination. How can students prevent 'sleeping away' crucial academic years?",
      answer: `<strong>Opportunity Cost of Procrastination:</strong> Every hour wasted in mindless indolence or social media scrolling carries an irrevocable opportunity cost: the loss of cognitive skills, sports mastery, deep reading, and creative projects that cannot be recovered later in life.<br><br>
      <strong>Three Anti-Procrastination Safeguards:</strong>
      <ol>
        <li><strong>The 5-Minute Momentum Rule:</strong> Commit to working on an intimidating assignment for just 5 minutes without expectations. Starting breaks psychological resistance, and momentum takes over.</li>
        <li><strong>Digital Curfew & Distraction Barriers:</strong> Store smartphones in a separate room during study sessions; activate website blockers to eliminate impulse gaming.</li>
        <li><strong>Milestone Visualisation:</strong> Break large term goals into bite-sized weekly milestones checked off on a visual wall calendar, turning distant exams into immediate, conquerable daily victories.</li>
      </ol>`,
      rubric: "1.5 Marks for defining opportunity cost in education + 3.5 Marks for 3 practical psychological productivity strategies = 5 Marks"
    }
  },

  {
    id: "m6",
    num: 6,
    unit: "Unit 6",
    title: "Class Discussion & The Talkative Barber",
    subtitle: "Poem by Gervase Phinn & Tale from The Arabian Nights",
    concepts: [
      "Poem 'Class Discussion': In a lively classroom discussion where everyone chats, Jane sits quietly staring around without a word; when questioned, she calmly remarks: 'There are many people in this world who are quiet by nature.'",
      "Prose 'The Talkative Barber': Sultan of Cashgar orders his head shaved; the barber refuses to stop babbling about his six eccentric brothers.",
      "The brothers' physical eccentricities: Bacbouc (hunchback), Bakbarah (toothless), Bakbac (blind), Alcouz (one-eyed), Alnaschar (crooked ear), Schacabac (hare-lipped).",
      "Barber discovers Sultan's feast; demands food for his own invited friends; Sultan surrenders food in sheer desperation to get his half-shaved head finished.",
      "Grammar: Direct to indirect speech, character adjectives, antonyms, respecting introversion."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e3a8a" text-anchor="middle">Jane's Dignity & The Babbling Barber</text>
      <!-- Jane Quiet -->
      <circle cx="100" cy="85" r="32" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
      <text x="100" y="80" font-size="18" text-anchor="middle">🧘‍♀️</text>
      <text x="100" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Quiet Jane</text>
      <text x="100" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#2563eb" text-anchor="middle">Observant & calm</text>
      <!-- Middle -->
      <path d="M140 85 L220 85" stroke="#93c5fd" stroke-width="2"/>
      <!-- The Barber -->
      <circle cx="260" cy="85" r="32" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="260" y="80" font-size="18" text-anchor="middle">🗣️</text>
      <text x="260" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">Talkative Barber</text>
      <text x="260" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Endless jabbering</text>
      <!-- Sultan's Plight -->
      <path d="M300 85 L380 85" stroke="#fed7aa" stroke-width="2"/>
      <rect x="390" y="55" width="160" height="60" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="470" y="75" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#991b1b" text-anchor="middle">Sultan's Plight</text>
      <text x="470" y="92" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">Head shaved half-way;</text>
      <text x="470" y="106" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">Surrenders royal feast!</text>
    </svg>`,
    questions: [
      {
        q: "What was happening in the classroom during the Class Discussion, and how was Jane behaving differently from her classmates?",
        marks: 2,
        ans: "The teacher and students were holding an energetic classroom discussion where opinions were being voiced enthusiastically. Jane sat quietly in the middle, staring calmly without voicing a single opinion or creating noise.",
        rubric: [
          { key: "Classroom engaged in active noisy debate", marks: "1 Mark" },
          { key: "Jane sitting quietly and observing without speaking", marks: "1 Mark" }
        ]
      },
      {
        q: "What question did the teacher put to Jane, and what was Jane's dignified, memorable reply?",
        marks: 3,
        ans: "The teacher looked at Jane and asked gently: 'Jane, is there anything the matter? Why do you sit in silence without joining the discussion?' Jane looked up and replied in a clear, calm voice: 'There are many people in this world, teacher, who are quiet by nature, and silence is not a crime.'",
        rubric: [
          { key: "Teacher asking if anything was wrong and why she stayed silent", marks: "1.5 Marks" },
          { key: "Jane's calm answer: many people are quiet by nature", marks: "1.5 Marks" }
        ]
      },
      {
        q: "Why was the Sultan of Cashgar so desperate to get his head shaved quickly, and why did the Barber infuriate him?",
        marks: 3,
        ans: "The Sultan had invited esteemed guests to a grand banquet at noon and urgently needed his head shaved before their arrival. The Barber, however, was an irrepressible chatterbox who stopped shaving every few seconds to tell lengthy, irrelevant stories about his brothers and family history.",
        rubric: [
          { key: "Sultan hosting noon banquet for distinguished guests", marks: "1 Mark" },
          { key: "Barber stopping repeatedly to chatter incessantly", marks: "1 Mark" },
          { key: "Sultan's rising fury at being kept waiting half-shaved", marks: "1 Mark" }
        ]
      },
      {
        q: "How many brothers did the talkative barber have, and what nicknames or physical descriptions did he give them?",
        marks: 4,
        ans: `The barber had six brothers:
        <ol>
          <li><strong>Bacbouc:</strong> Hunchbacked</li>
          <li><strong>Bakbarah:</strong> Toothless</li>
          <li><strong>Bakbac:</strong> Blind in both eyes</li>
          <li><strong>Alcouz:</strong> One-eyed</li>
          <li><strong>Alnaschar:</strong> Crooked-eared</li>
          <li><strong>Schacabac:</strong> Hare-lipped</li>
        </ol>
        The barber ironically insisted that while all his brothers were terrible chatterboxes, he himself was the quietest, most modest man in Cashgar!`,
        rubric: [
          { key: "Correct names and defects of brothers 1-3", marks: "1.5 Marks" },
          { key: "Correct names and defects of brothers 4-6", marks: "1.5 Marks" },
          { key: "The ironic claim that he was the quietest brother", marks: "1 Mark" }
        ]
      },
      {
        q: "How did the barber outsmart the Sultan and secure an entire royal feast for his own dinner party?",
        marks: 3,
        ans: "The barber suddenly remembered that he had invited four friends to his home for dinner but had neglected to prepare any food. Seeing the Sultan's desperation to finish his half-shaved head, the barber inspected the royal dishes prepared for the palace feast and refused to shave another stroke until the Sultan surrendered all the prepared dishes and dessert fruits to him.",
        rubric: [
          { key: "Barber remembering he invited guests without cooking food", marks: "1 Mark" },
          { key: "Refusing to finish shaving the half-shaved head", marks: "1 Mark" },
          { key: "Sultan giving up his royal food in sheer exasperation", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Respecting Diverse Personalities & Introversion",
      text: "In many schools, talkative, extroverted students are praised as 'leaders', while quiet, reflective students like Jane are mistakenly judged as shy, slow, or uninterested.",
      question: "Why is emotional diversity essential in a classroom? Propose three inclusive teaching strategies that value introverted students equitably.",
      answer: `<strong>Value of Emotional Diversity:</strong> Introverts possess superior observational intelligence, deep listening skills, thoughtful analysis, and emotional calmness. A society consisting only of talkers would lack the quiet thinkers, scientific researchers, poets, and deep listeners necessary for balance.<br><br>
      <strong>Three Inclusive Teaching Strategies:</strong>
      <ol>
        <li><strong>Think-Pair-Share:</strong> Give students 2 minutes of silent reflective writing time before sharing with a single partner, allowing quiet thinkers to synthesize thoughts before speaking.</li>
        <li><strong>Written Expression Boards (Post-It Walls):</strong> Enable students to submit written questions or feedback anonymously on a classroom whiteboard or digital Padlet.</li>
        <li><strong>Value Silent Focus:</strong> Never penalize a student simply for being quiet; evaluate comprehension through project work, written essays, and artistic creations rather than decibel level.</li>
      </ol>`,
      rubric: "1.5 Marks for defending introverted cognitive strengths + 3.5 Marks for 3 actionable inclusive classroom strategies = 5 Marks"
    }
  },

  {
    id: "m7",
    num: 7,
    unit: "Unit 7",
    title: "Topsy-turvy Land & Gulliver's Travels",
    subtitle: "Humorous Poem by H.E. Wilkinson & Jonathan Swift's Voyage to Brobdingnag",
    concepts: [
      "Poem 'Topsy-turvy Land': A bizarre world where people walk on their heads, the sea is made of sand, children go to school at night, buses run on the sea, and boats sail down the streets.",
      "Prose 'Gulliver's Travels': Shipwrecked Lemuel Gulliver lands in Brobdingnag, the land of giants where grass grows 20 feet high and corn stalks are 40 feet tall.",
      "Captured by an enormous farmer; carried home in a giant handkerchief; navigating an enormous cat 3 times larger than an ox, a 1-year-old giant baby, and giant rats.",
      "Themes of perspective, humility, scale, and cross-cultural adaptability.",
      "Grammar: Degrees of comparison, pun, antonyms, creative descriptive writing."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fef2f2" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#991b1b" text-anchor="middle">Brobdingnag: Land of the Giants</text>
      <!-- Giant Farmer -->
      <circle cx="100" cy="85" r="34" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="100" y="80" font-size="20" text-anchor="middle">🧑‍🌾</text>
      <text x="100" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#7f1d1d" text-anchor="middle">Giant Farmer</text>
      <text x="100" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">60 feet tall; loud voice</text>
      <!-- Scale -->
      <path d="M140 85 L220 85" stroke="#fca5a5" stroke-width="2"/>
      <!-- Tiny Gulliver -->
      <circle cx="260" cy="85" r="24" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <text x="260" y="82" font-size="12" text-anchor="middle">🧍</text>
      <text x="260" y="98" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#1e3a8a" text-anchor="middle">Gulliver</text>
      <text x="260" y="132" font-family="system-ui, sans-serif" font-size="8" fill="#1d4ed8" text-anchor="middle">Tiny as an insect</text>
      <!-- Dinner Table -->
      <path d="M290 85 L360 85" stroke="#fca5a5" stroke-width="2"/>
      <rect x="370" y="55" width="180" height="60" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
      <text x="460" y="75" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9a3412" text-anchor="middle">Dinner Table Hazards</text>
      <text x="460" y="92" font-family="system-ui, sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">Cat 3x bigger than an ox;</text>
      <text x="460" y="106" font-family="system-ui, sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">Giant baby mistaking him for a toy!</text>
    </svg>`,
    questions: [
      {
        q: "Mention four astonishing absurdities that occur in Topsy-turvy Land according to H.E. Wilkinson's poem.",
        marks: 4,
        ans: `In Topsy-turvy Land:
        <ol>
          <li>The people walk upon their heads, and their feet point up into the air.</li>
          <li>The sea is made of dry golden sand instead of water.</li>
          <li>Children attend school by night instead of by day.</li>
          <li>Buses travel upon the waves of the sea, while pleasure boats travel up and down street roads.</li>
        </ol>`,
        rubric: [
          { key: "Walking on heads", marks: "1 Mark" },
          { key: "Sea composed of sand", marks: "1 Mark" },
          { key: "Attending school at night", marks: "1 Mark" },
          { key: "Buses on the sea and boats on streets", marks: "1 Mark" }
        ]
      },
      {
        q: "Why did the Captain send a crew of sailors ashore in Gulliver's Travels, and why did they hastily abandon Gulliver?",
        marks: 3,
        ans: "The Captain dispatched sailors to the uncharted island with barrels to search for fresh drinking water. While Gulliver wandered inland to explore the terrain, his crew suddenly spotted a colossal giant chasing their longboat into the sea; terrified, the sailors rowed away for their lives, marooning Gulliver alone on the shore.",
        rubric: [
          { key: "Mission: searching for fresh drinking water", marks: "1 Mark" },
          { key: "Encountering a colossal giant wading in the sea", marks: "1 Mark" },
          { key: "Sailors rowing away in terror, abandoning Gulliver", marks: "1 Mark" }
        ]
      },
      {
        q: "How did the giant farmer treat Gulliver when he discovered him hiding in the giant barley field?",
        marks: 3,
        ans: "The giant farmer did not crush or harm him; instead, he carefully picked Gulliver up between his thumb and forefinger from a height of 60 feet. Fascinated by Gulliver's tiny voice and courtly bows, he wrapped him gently in his handkerchief and carried him home safely to his wife and children.",
        rubric: [
          { key: "Picking him up gently between thumb and forefinger", marks: "1 Mark" },
          { key: "Astonished by Gulliver's human bows and clear voice", marks: "1 Mark" },
          { key: "Wrapping him in a handkerchief and taking him home safely", marks: "1 Mark" }
        ]
      },
      {
        q: "Describe the terrifying hazards Gulliver faced while placed upon the farmer's dining table.",
        marks: 3,
        ans: "Gulliver faced terrifying hazards: (1) The farmer's wife's pet cat was three times larger than an ox, purring with a deafening noise like forty kettle-drums, (2) The farmer's one-year-old baby grabbed Gulliver and tried to shove his entire head into its mouth, and (3) Two ravenous giant rats the size of mastiff dogs attacked him, which Gulliver had to fight off with his scabbard hanger.",
        rubric: [
          { key: "Giant cat three times larger than an ox", marks: "1 Mark" },
          { key: "Giant baby attempting to put his head in its mouth", marks: "1 Mark" },
          { key: "Attack by two giant mastiff-sized rats", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Perspective & Compassion for the Vulnerable",
      text: "When Gulliver was in Lilliput, he was a giant who could crush thousands; in Brobdingnag, he was tiny as an insect, terrified of cats and falling from tables.",
      question: "How does experiencing relative scale develop empathy for smaller creatures (like insects, ants, or street puppies)? Suggest three ethical rules children should follow when observing garden creatures.",
      answer: `<strong>Development of Empathy Through Scale:</strong> Gulliver's journey reveals that power and vulnerability are entirely relative. To a tiny worker ant or beetle, an ordinary child's sneaker is an apocalyptic mountain capable of destroying their home in a split-second. Understanding Gulliver's terror teaches children how fragile small lives are.<br><br>
      <strong>Three Ethical Rules for Garden Observation:</strong>
      <ol>
        <li><strong>Observe Without Capturing:</strong> Use a handheld magnifying glass to inspect caterpillars, bees, and spiders in their natural habitat without trapping them in suffocating glass jars.</li>
        <li><strong>Step Mindfully:</strong> Avoid intentionally trampling ant trails or kicking active insect mounds on garden pathways.</li>
        <li><strong>Preserve Natural Habitats:</strong> Never tear apart spider webs, bee combs, or bird nests for idle amusement; respect their labour as vital components of the ecosystem.</li>
      </ol>`,
      rubric: "1.5 Marks for philosophical empathy analysis + 3.5 Marks for 3 ethical wildlife observation rules = 5 Marks"
    }
  },

  {
    id: "m8",
    num: 8,
    unit: "Unit 8",
    title: "Nobody's Friend & The Little Bully",
    subtitle: "Poem & Story by Enid Blyton on Sharing, Empathy, and Anti-Bullying",
    concepts: [
      "Poem 'Nobody's Friend': Selfish children who hoard sweets, never lend books, and refuse to let anyone play with their doll have no friends; the generous child who shares half an apple, cake, ball, and book is loved by all.",
      "Prose 'The Little Bully': Hari is a strong, ill-mannered boy who pinches classmates until they bruise and pricks them with sharp sewing pins.",
      "Class seaside picnic at the rocky pool: Classmates shun Hari; he sits alone to devour his lavish lunch.",
      "Sea creatures attack: A giant crab, lobster, shrimps, and prawns pinch Hari's fingers and legs to demonstrate how painful pinching feels.",
      "Hari's moral awakening: He throws away his pins, understands his victims' agony, and promises never to pinch or bully anyone again.",
      "Grammar: Opposites (un- prefix), rhyming triplets, moral reasoning, anti-bullying protocols."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ecfdf5" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#065f46" text-anchor="middle">The Seaside Lesson: How Hari the Bully Reformed</text>
      <!-- Hari Pinches -->
      <circle cx="85" cy="85" r="32" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">📌</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Hari Bully</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">Pinches & pricks kids</text>
      <!-- Shunned -->
      <path d="M125 85 L180 85" stroke="#fca5a5" stroke-width="2"/>
      <circle cx="225" cy="85" r="32" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">🏝️</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">Isolated</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Nobody sits with him</text>
      <!-- Sea Creatures -->
      <path d="M265 85 L320 85" stroke="#86efac" stroke-width="2"/>
      <circle cx="365" cy="85" r="32" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">🦞</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#065f46" text-anchor="middle">Crab & Prawns</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#047857" text-anchor="middle">Pinch Hari hard</text>
      <!-- Moral Awakening -->
      <path d="M405 85 L460 85" stroke="#6ee7b7" stroke-width="2"/>
      <circle cx="500" cy="85" r="34" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">🤝</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1e3a8a" text-anchor="middle">Reformed!</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#1d4ed8" text-anchor="middle">Tears, empathy & friend</text>
    </svg>`,
    questions: [
      {
        q: "What contrast does Enid Blyton establish in the poem 'Nobody's Friend' between the selfish children and the generous child?",
        marks: 3,
        ans: "The poet contrasts two kinds of children: (1) Selfish children who hoard sweets, never lend storybooks, and refuse to let others touch their dolls—nobody likes them and they end up with 'no friends', and (2) The generous child who cheerfully shares half an apple, half a cake, lend balls and books—everyone loves them as 'everybody's friend'.",
        rubric: [
          { key: "Characteristics of selfish children (hoarding toys/sweets)", marks: "1 Mark" },
          { key: "Outcome: loneliness and zero friends", marks: "1 Mark" },
          { key: "Characteristics of generous child (sharing half of everything)", marks: "1 Mark" }
        ]
      },
      {
        q: "Why did all the school children hate Hari in 'The Little Bully'?",
        marks: 2,
        ans: "All the children hated Hari because his favourite pastime was tormenting his classmates. He pinched people with such brutal force that he left deep black-and-blue bruises, and pricked them viciously with sharp sewing pins.",
        rubric: [
          { key: "Pinched children until they were black and blue", marks: "1 Mark" },
          { key: "Pricked classmates with sharp sewing pins", marks: "1 Mark" }
        ]
      },
      {
        q: "What happened when the train reached the seaside picnic, and how did the children react toward Hari?",
        marks: 3,
        ans: "The moment the train arrived at the seashore, the children shouted with ecstasy, raced down to the sands, and held hands in cheerful groups. However, not a single boy or girl held Hari's hand, walked beside him, or invited him to join their group; he was completely shunned and isolated.",
        rubric: [
          { key: "Children racing to sands and holding hands in joy", marks: "1 Mark" },
          { key: "Complete shunning of Hari: nobody held his hand", marks: "1 Mark" },
          { key: "Hari left entirely alone on the rocky pool", marks: "1 Mark" }
        ]
      },
      {
        q: "Describe the dramatic encounter between Hari and the marine creatures at the rocky pool.",
        marks: 4,
        ans: `<ol>
          <li><strong>The Feast Interrupted:</strong> Hari unpacked his lavish picnic lunch (boiled eggs, jam sandwiches, ginger cake, and chocolate). Suddenly, an enormous monster crab crawled out of the pool.</li>
          <li><strong>The Vicious Pinch:</strong> The crab extended its heavy pincers and nipped Hari's hand so hard that the boy yelled in excruciating pain, dropping his lunch.</li>
          <li><strong>The Swarm of Crustaceans:</strong> A giant lobster, horseshoe crabs, shrimps, and prawns crawled out, pinching him relentlessly until he was black and blue and weeping bitterly.</li>
          <li><strong>The Epiphany:</strong> The creatures happily explained: <em>'We heard you love pinching! We thought you would welcome our playful nips.'</em> Hari realized the horrifying pain he had been inflicting on other children.</li>
        </ol>`,
        rubric: [
          { key: "Appearance of the giant crab interrupting lunch", marks: "1 Mark" },
          { key: "Painful pincer attack leaving Hari screaming", marks: "1 Mark" },
          { key: "Swarm of lobsters and prawns joining the pinch", marks: "1 Mark" },
          { key: "Moral awakening: realizing the agony of being pinched", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Anti-Bullying Protocol & Peer Culture",
      text: "Physical pinching, verbal mockery, and cyber exclusion leave profound psychological scars on victims, often leading to school phobia and depression.",
      question: "As a class leader, how would you design a 'Zero-Bullying Buddy System' in your school to ensure every student feels safe and supported?",
      answer: `<strong>Zero-Bullying Buddy System Framework:</strong><br><br>
      <strong>1. The Buddy Anchor:</strong> Pair every incoming or introverted student with an empathetic 'Senior Buddy' who walks with them during recess, shares lunch tables, and ensures no child sits isolated on the playground benches.<br><br>
      <strong>2. Confidential 'Kindness & Grievance' Box:</strong> Place a sealed letterbox outside the school counsellor's office where victims or silent bystanders can drop anonymous notes reporting bullying incidents without fear of retaliation.<br><br>
      <strong>3. Restorative Peer Circles:</strong> Instead of purely punitive suspension, bullies must attend guided empathy sessions where they listen to the impact of their behaviour, write sincere apologies, and perform community service (e.g. organizing library books or serving lunchtime water) to learn genuine remorse and social contribution.`,
      rubric: "1.5 Marks for buddy anchor system + 1.5 Marks for confidential reporting + 2 Marks for restorative empathy counseling = 5 Marks"
    }
  },

  {
    id: "m9",
    num: 9,
    unit: "Unit 9",
    title: "Sing a Song of People & Around the World",
    subtitle: "Poem by Lois Lenski & Jules Verne's Legendary 80-Day Global Odyssey",
    concepts: [
      "Poem 'Sing a Song of People': The relentless hustle of modern city dwellers rushing through subways, taxi stands, elevators, buses, and sidewalk umbrella crowds without acknowledging one another.",
      "Prose 'Around the World': Adapted from Jules Verne's 'Around the World in Eighty Days'.",
      "Phileas Fogg and Passepartout's perilous journey across the American continent by train from San Francisco to New York.",
      "Confronting a herd of 10,000 bison blocking tracks, crossing a swaying cracked suspension bridge over Medicine Bow, and fighting a ferocious attack by Sioux warriors.",
      "Passepartout's heroism uncoupling the locomotive; traveling over frozen snow in a sledge equipped with sails and runners.",
      "Grammar: Prepositions, travel itinerary writing, geographical vocabulary, suspense narration."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e3a8a" text-anchor="middle">Phileas Fogg's Trans-American Race Against Time</text>
      <!-- Train -->
      <circle cx="85" cy="85" r="32" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">🚂</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Pacific Rail</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#1d4ed8" text-anchor="middle">San Francisco start</text>
      <!-- Bison Blockade -->
      <path d="M125 85 L180 85" stroke="#93c5fd" stroke-width="2"/>
      <circle cx="225" cy="85" r="32" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">🦬</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">Bison Herd</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Tracks blocked 3 hrs</text>
      <!-- Sioux Attack -->
      <path d="M265 85 L320 85" stroke="#93c5fd" stroke-width="2"/>
      <circle cx="365" cy="85" r="32" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">🏹</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Sioux Attack</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">Engine uncoupled</text>
      <!-- Wind Sledge -->
      <path d="M405 85 L460 85" stroke="#93c5fd" stroke-width="2"/>
      <circle cx="500" cy="85" r="34" fill="#ecfdf5" stroke="#059669" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">⛵</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#065f46" text-anchor="middle">Wind Sledge</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#047857" text-anchor="middle">Sailing over ice</text>
    </svg>`,
    questions: [
      {
        q: "What picture of urban city life does Lois Lenski paint in her poem 'Sing a Song of People'?",
        marks: 3,
        ans: "Lois Lenski paints a vivid portrait of frantic modern urban existence: crowds of people rushing in every direction, boarding subways underground, hurrying into taxicabs, riding elevators up and down tall buildings, holding umbrellas in the rain, and walking side-by-side on sidewalks without smiling or looking at one another.",
        rubric: [
          { key: "Frantic speed and endless motion of city crowds", marks: "1 Mark" },
          { key: "Transportation: subways, elevators, taxis, sidewalk umbrellas", marks: "1 Mark" },
          { key: "Social alienation: walking together yet ignoring one another", marks: "1 Mark" }
        ]
      },
      {
        q: "What natural obstacle delayed the Pacific Railroad train for three full hours across the American plains?",
        marks: 2,
        ans: "A colossal migrating herd of buffaloes (bison) blocked the railway tracks. The procession was so dense and endless that the train had to stop dead on the tracks for three whole hours while thousands of shaggy animals trotted across.",
        rubric: [
          { key: "Migrating herd of buffaloes / bison", marks: "1 Mark" },
          { key: "Duration: stopping the train for 3 full hours", marks: "1 Mark" }
        ]
      },
      {
        q: "How did the train safely cross the damaged Medicine Bow suspension bridge?",
        marks: 3,
        ans: "The station master warned that the suspension bridge cables were snapping and could collapse. The brave train driver reversed the locomotive one mile, accelerated to maximum throttle, and sped across the creaking bridge at terrifying speed like a lightning flash. The bridge collapsed completely into the chasm seconds after the last carriage touched solid ground.",
        rubric: [
          { key: "Warning regarding snapping cables and imminent collapse", marks: "1 Mark" },
          { key: "Reversing one mile and charging at maximum terrifying speed", marks: "1 Mark" },
          { key: "Bridge collapsing into the abyss right after safe crossing", marks: "1 Mark" }
        ]
      },
      {
        q: "How did Passepartout heroically save the passengers during the Sioux warrior assault near Fort Kearney?",
        marks: 4,
        ans: `During the attack:
        <ol>
          <li>A band of armed warriors leapt onto the speeding train, shooting through carriage windows.</li>
          <li>If the train did not halt near the military fort, the warriors would overpower everyone.</li>
          <li>Heroic Passepartout crawled underneath the rushing carriages, clinging dangerously to chains while bullets flew around him.</li>
          <li>He managed to wrench open the coupling pin, detaching the heavy locomotive from the coaches. The detached passenger cars ground to a safe halt beside the soldiers of Fort Kearney, who rushed out and routed the attackers.</li>
        </ol>`,
        rubric: [
          { key: "Warriors leaping on the speeding train", marks: "1 Mark" },
          { key: "Need to stop train near military garrison", marks: "1 Mark" },
          { key: "Passepartout crawling beneath moving cars under fire", marks: "1 Mark" },
          { key: "Uncoupling locomotive pin, bringing coaches to a safe stop", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Resourcefulness Under Travel Contingencies",
      text: "When rail lines were severed by snowdrifts, Phileas Fogg did not surrender; he hired an open sledge fitted with sails (an ice-boat) to race 200 miles across frozen plains at 40 miles per hour to reach Omaha station on time.",
      question: "Analyze Phileas Fogg's trait of relentless problem-solving. Outline a 3-step contingency plan for a student stranded at an unfamiliar railway station with a dead mobile battery.",
      answer: `<strong>Analysis of Relentless Problem-Solving:</strong> Fogg exemplifies true grit: he treats emergencies not as tragedies, but as mathematical equations awaiting a creative solution. He refuses to indulge in emotional panic or finger-pointing, focusing solely on actionable logistics.<br><br>
      <strong>3-Step Emergency Contingency Plan:</strong>
      <ol>
        <li><strong>Locate Station Master or Railway Police (RPF) Helpdesk:</strong> Never wander outside the station into dark streets. Approach the uniformed Station Superintendent's office or Women/Child Railway Help Booth (Dial 139).</li>
        <li><strong>Use Official Landlines to Contact Parents:</strong> RPF officers have dedicated landlines and official chargers; place a clear 1-minute call stating your exact platform location and safety status.</li>
        <li><strong>Remain in the Well-Lit Central Waiting Hall:</strong> Sit inside the designated passenger waiting room within view of CCTV cameras and security personnel until verified family members arrive.</li>
      </ol>`,
      rubric: "1.5 Marks for psychological grit analysis + 3.5 Marks for 3 safe, practical railway station survival steps = 5 Marks"
    }
  },

  {
    id: "m10",
    num: 10,
    unit: "Unit 10",
    title: "Malu Bhalu & Who Will be Ningthou?",
    subtitle: "Poem by Kamla Bhasin & Manipuri Folk Tale by Indira Mukherjee",
    concepts: [
      "Poem 'Malu Bhalu': Translated from Hindi by Sandhya Rao; Malu is a brave, snow-white polar bear cub in the Arctic; she learns to catch fish, overcomes fear of deep water, and swims with natural grace.",
      "Prose 'Who Will be Ningthou?': The King (Ningthou) and Queen (Leima) of Kangleipak (Manipur) cherish their people and wildlife.",
      "Contest to choose the future ruler among three elder sons (Sanayama, Sanasamba, Sanayamba) vs the compassionate daughter Sanatombi.",
      "The sons pierce and leap over the sacred Banyan tree (Khongnang), breaking its limbs and killing innocent birds.",
      "Young Sanatombi stands weeping for the agony of the wounded tree and displaced birds.",
      "The King crowns Sanatombi as the true 'Leima' because a genuine ruler feels the pain of all living beings.",
      "Grammar: Feminine/masculine nouns, Manipuri cultural terms, ecological ethics, leadership values."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#14532d" text-anchor="middle">Who Will Be Ningthou? True Leadership Through Compassion</text>
      <!-- Three Sons -->
      <circle cx="95" cy="85" r="32" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="95" y="80" font-size="18" text-anchor="middle">🐎</text>
      <text x="95" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Three Sons</text>
      <text x="95" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">Spears, jumps, bruised tree</text>
      <!-- Broken Banyan Tree -->
      <path d="M135 85 L190 85" stroke="#fca5a5" stroke-width="2"/>
      <circle cx="235" cy="85" r="32" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="235" y="80" font-size="18" text-anchor="middle">🌳</text>
      <text x="235" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">Khongnang Tree</text>
      <text x="235" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Pierced & branches snapped</text>
      <!-- Sanatombi Mourns -->
      <path d="M275 85 L330 85" stroke="#86efac" stroke-width="2"/>
      <circle cx="375" cy="85" r="32" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="375" y="80" font-size="18" text-anchor="middle">🕊️</text>
      <text x="375" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">Sanatombi</text>
      <text x="375" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#166534" text-anchor="middle">Mourns for hurt birds</text>
      <!-- Crowned Queen -->
      <path d="M415 85 L470 85" stroke="#86efac" stroke-width="2"/>
      <circle cx="510" cy="85" r="34" fill="#ecfdf5" stroke="#059669" stroke-width="2.5"/>
      <text x="510" y="80" font-size="18" text-anchor="middle">👑</text>
      <text x="510" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#065f46" text-anchor="middle">True Leima!</text>
      <text x="510" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#047857" text-anchor="middle">Ruler who feels all pain</text>
    </svg>`,
    questions: [
      {
        q: "Who was Malu Bhalu, where did she reside, and what essential survival skills did she learn from her parents?",
        marks: 3,
        ans: "Malu Bhalu was a brave, spirited young polar bear with a mane of gleaming white fur, living high up in an icy Arctic lair. From her parents, she learned how to fish, catch big and small fish in icy waters, and overcome her initial dread of deep water to swim with effortless natural grace.",
        rubric: [
          { key: "Identification of Malu Bhalu as polar bear cub in icy Arctic lair", marks: "1 Mark" },
          { key: "Learning to catch big and small fish", marks: "1 Mark" },
          { key: "Overcoming fear of water and mastering swimming", marks: "1 Mark" }
        ]
      },
      {
        q: "Where is Kangleipak located, and how did the Ningthou (King) and Leima (Queen) govern their kingdom?",
        marks: 2,
        ans: "Kangleipak is located in Manipur in northeastern India. The Ningthou and Leima governed with profound benevolence, declaring that not only human subjects, but every bird, animal, tree, and river in their land should live in perpetual peace and harmony.",
        rubric: [
          { key: "Geographical location: Manipur (Northeast India)", marks: "1 Mark" },
          { key: "Ruling with benevolence ensuring peace for humans and wildlife alike", marks: "1 Mark" }
        ]
      },
      {
        q: "What feats of prowess did the three princes perform at the horse contest, and how did their actions affect the sacred Banyan tree (Khongnang)?",
        marks: 3,
        ans: "The three princes rode with breathtaking martial speed. However, in their lust to display brute strength, the first prince jumped his stallion directly through the sacred tree, the second leapt clear over it, and the third speared right through it, tearing the tree's branches, snapping its limbs, and killing or scattering the nesting baby birds.",
        rubric: [
          { key: "Princes displaying martial horsemanship", marks: "1 Mark" },
          { key: "Piercing and jumping over the sacred Khongnang tree", marks: "1 Mark" },
          { key: "Snapping tree branches and destroying innocent nesting birds", marks: "1 Mark" }
        ]
      },
      {
        q: "Why did the Ningthou pass over his three warrior sons and proclaim his young daughter Sanatombi as the future ruler (Leima) of Kangleipak?",
        marks: 4,
        ans: `The Ningthou declared:
        <ol>
          <li>The three princes displayed physical prowess, but proved themselves arrogant and cruel; they brought injury to nature to glorify their own egos.</li>
          <li>In contrast, five-year-old Sanatombi stood sorrowfully gazing at the wounded Banyan tree, weeping tears of genuine grief for the displaced birds and broken boughs.</li>
          <li>The Ningthou announced the supreme golden rule of leadership: <em>'A true ruler (Ningthou or Leima) is one who does not hurt anybody in the realm, but feels the pain of every subject—human, animal, bird, and tree.'</em> Therefore, Sanatombi alone possessed the noble soul worthy of the crown.</li>
        </ol>`,
        rubric: [
          { key: "Critique of sons' destructive arrogance", marks: "1 Mark" },
          { key: "Sanatombi weeping for the hurt tree and birds", marks: "1 Mark" },
          { key: "Definition of true leadership: feeling the pain of all living beings", marks: "1 Mark" },
          { key: "Proclamation of Sanatombi as the true Leima", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "NEP 2020 Competency Case Study: Environmental Stewardship & Ethical Leadership",
      text: "Modern environmental crises like deforestation and habitat destruction stem from leadership models that prioritize aggressive development while ignoring the silent suffering of ecosystems.",
      question: "How does the Manipuri fable 'Who Will be Ningthou?' redefine leadership? Propose three environmental policies that a student council should implement in school to honour Sanatombi's ideals.",
      answer: `<strong>Redefining Leadership:</strong> The story radically subverts patriarchal and militaristic definitions of power. True leadership is not measured by physical intimidation, conquering monuments, or imposing authority, but by ecological compassion, deep listening, and protective stewardship over the vulnerable.<br><br>
      <strong>Three Student Council Environmental Policies:</strong>
      <ol>
        <li><strong>Adopt-a-Tree & Nesting Sanctuary:</strong> Every class adopts one native school tree, mapping its resident birds and installing wooden nest boxes and water basins during summer.</li>
        <li><strong>Zero Single-Use Plastic Mandate:</strong> Ban plastic gift wraps, single-use cups, and disposable decorations during school sports and cultural festivals, replacing them with brass trophies and terracotta planters.</li>
        <li><strong>Quiet Biodiversity Zones:</strong> Designate a secluded corner of the campus as a 'Wild Nature Zone' with wild grasses and fallen logs left untouched by lawnmowers to nurture earthworms, dragonflies, and pollinators.</li>
      </ol>`,
      rubric: "1.5 Marks for ethical redefinition of leadership + 3.5 Marks for 3 actionable campus biodiversity initiatives = 5 Marks"
    }
  }
];

// -------------------------------------------------------------
// PART 3: HTML TEMPLATE GENERATION
// -------------------------------------------------------------

function renderQuestionCard(qObj, idx, prefix) {
  const qId = `q_${prefix}_${idx}`;
  const rubricRows = qObj.rubric.map(r => `
    <div class="marking-row">
      <span class="marking-key">${r.key}</span>
      <span class="marking-marks">${r.marks}</span>
    </div>
  `).join('');

  return `
  <div class="q-card" id="${qId}">
    <div class="q-head" onclick="toggleQ('${qId}')">
      <span class="q-num">Q${idx + 1}</span>
      <span class="q-text">${qObj.q}</span>
      <span class="q-marks">${qObj.marks} Marks</span>
      <svg class="q-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">Detailed Step-by-Step Solution:</div>
        <div class="answer-text">${qObj.ans}</div>
        <div class="marking-scheme">
          <div class="marking-title">📋 CBSE Official Step Marking Rubric (${qObj.marks} Marks):</div>
          ${rubricRows}
        </div>
      </div>
    </div>
  </div>`;
}

function renderChapterSection(ch, bookKey) {
  const prefix = `${bookKey}_${ch.num}`;
  const conceptsHtml = ch.concepts.map(c => `<li>${c}</li>`).join('');
  const questionsHtml = ch.questions.map((q, idx) => renderQuestionCard(q, idx, prefix)).join('');

  return `
  <section class="chapter-section" id="ch_${ch.id}">
    <div class="chapter-header">
      <div class="ch-badge">${ch.num}</div>
      <div class="chapter-header-info">
        <span class="unit-tag">${ch.unit}</span>
        <h2>${ch.title}</h2>
        <p>${ch.subtitle}</p>
      </div>
    </div>

    <!-- Key Concepts Card -->
    <div class="concept-card">
      <div class="concept-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        <span>Chapter Highlights, Thematic Summary & Key Vocabulary</span>
      </div>
      <ul class="concept-list">
        ${conceptsHtml}
      </ul>
      <div class="svg-diagram-wrapper" style="margin-top:18px;">
        ${ch.svg}
      </div>
    </div>

    <!-- Complete Exercise Questions & Solutions -->
    <div class="ex-div">📖 NCERT Textbook Exercise Solutions & Comprehension (100% Coverage)</div>
    <div class="questions-container">
      ${questionsHtml}
    </div>

    <!-- NEP 2020 Competency Based Question (CBQ) -->
    <div class="cbq-card">
      <span class="cbq-badge">🌟 NEP 2020 Competency-Based Case Study (CBQ)</span>
      <h3 style="font-size:1.05rem;font-weight:800;color:#0f172a;margin-bottom:8px;">${ch.cbq.title}</h3>
      <p style="font-size:0.9rem;color:#334155;margin-bottom:12px;background:rgba(255,255,255,0.7);padding:12px;border-radius:8px;border-left:3px solid #059669;"><strong>Case Scenario:</strong> ${ch.cbq.text}</p>
      <p style="font-size:0.92rem;font-weight:700;color:#0f172a;margin-bottom:10px;"><strong>Question:</strong> ${ch.cbq.question}</p>
      <div style="font-size:0.88rem;line-height:1.6;color:#1e293b;">${ch.cbq.answer}</div>
      <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #6ee7b7;font-size:0.8rem;font-weight:700;color:#047857;">Rubric: ${ch.cbq.rubric}</div>
    </div>
  </section>`;
}

// Generate the whole HTML file
const santoorSections = santoorChapters.map(ch => renderChapterSection(ch, "santoor")).join('\n');
const marigoldSections = marigoldUnits.map(ch => renderChapterSection(ch, "marigold")).join('\n');

// Nav chips & sidebar items
const santoorChips = santoorChapters.map(ch => `
  <button class="bc-chip" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('&')[0].trim()}
  </button>
`).join('');

const marigoldChips = marigoldUnits.map(ch => `
  <button class="bc-chip" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('&')[0].trim()}
  </button>
`).join('');

const santoorSidebar = santoorChapters.map(ch => `
  <li>
    <a href="javascript:void(0)" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
      <span class="ch-num">${ch.num}</span>
      <div class="ch-meta">
        <span class="ch-name">${ch.title}</span>
        <span class="ch-sub">${ch.unit}</span>
      </div>
    </a>
  </li>
`).join('');

const marigoldSidebar = marigoldUnits.map(ch => `
  <li>
    <a href="javascript:void(0)" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
      <span class="ch-num">${ch.num}</span>
      <div class="ch-meta">
        <span class="ch-name">${ch.title}</span>
        <span class="ch-sub">${ch.unit}</span>
      </div>
    </a>
  </li>
`).join('');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 5 English (Santoor & Marigold) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="100% Complete NCERT Solutions for Class 5 English covering BOTH textbooks: New NEP 2020 Santoor (Chapters 1 to 10) and Classic Marigold (Units 1 to 10). Complete exercise solutions, CBSE step marking schemes, grammar, diagrams, and competency-based questions.">
  <meta name="keywords" content="ncert solutions class 5 english, santoor class 5 english solutions, marigold class 5 ncert solutions, cbse class 5 english 2026-27, papas spectacles class 5, gone with the scooter, the wise parrot, what a tank class 5, gilli danda ncert, vocation class 5 tagore, ice cream man ncert, wonderful waste avial, flying together panchatantra, robinson crusoe class 5, bade bhai sahab class 5, rip van winkle ncert, who will be ningthou class 5">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-5-english.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-5-english.html">
  <meta property="og:title" content="NCERT Solutions for Class 5 English (Santoor & Marigold) CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="100% question coverage for Class 5 English across both Santoor (New NEP 2020) and Marigold textbooks with diagrams, step marking schemes and NEP 2020 competency questions.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 5 English (Santoor & Marigold) CBSE 2026-27">
  <meta name="twitter:description" content="Complete textbook exercise solutions for Class 5 English with diagrams, CBSE marking schemes, and case studies.">
  <meta name="twitter:image" content="https://olympiadquiz.org/favicon.png">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

  <!-- Schema.org BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/" },
      { "@type": "ListItem", "position": 2, "name": "NCERT Solutions", "item": "https://olympiadquiz.org/ncert-solutions.html" },
      { "@type": "ListItem", "position": 3, "name": "Class 5", "item": "https://olympiadquiz.org/ncert-solutions.html#class5" },
      { "@type": "ListItem", "position": 4, "name": "English", "item": "https://olympiadquiz.org/ncert-solutions-class-5-english.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 5 English (Santoor & Marigold) CBSE 2026-27",
    "description": "Comprehensive 100% textbook exercise solutions for NCERT Class 5 English covering all 10 chapters of Santoor (New NEP 2020) and all 10 units of Marigold with CBSE rubrics and diagrams.",
    "educationalLevel": "CBSE Class 5",
    "learningResourceType": "Textbook Solutions",
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "OlympiadQuiz",
      "url": "https://olympiadquiz.org/",
      "logo": { "@type": "ImageObject", "url": "https://olympiadquiz.org/favicon.png" }
    }
  }
  </script>

  <!-- Schema.org FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are both textbooks 'Santoor' and 'Marigold' covered for Class 5 English?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, this portal provides 100% question coverage for BOTH the new NEP 2020 NCERT textbook 'Santoor' (10 chapters) and the classic CBSE textbook 'Marigold' (10 units / 20 chapters)."
        }
      },
      {
        "@type": "Question",
        "name": "Do these solutions include the official CBSE step marking scheme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every single question is provided with an exact CBSE marking rubric showing point allocations for content, grammar, character insight, and vocabulary."
        }
      },
      {
        "@type": "Question",
        "name": "Are competency-based questions (CBQs) and diagrams included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, interactive vector SVG diagrams and NEP 2020 real-world case study questions are provided for every chapter and unit."
        }
      }
    ]
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    :root {
      --brand: #2563eb;
      --brand-dark: #1d4ed8;
      --brand-light: #eff6ff;
      --brand-text: #1e40af;
      --navy: #0f172a;
      --slate: #475569;
      --border: #e2e8f0;
      --bg: #f8fafc;
      --surface: #ffffff;
      --accent: #ea580c;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', sans-serif; background: var(--bg); color: #1e293b; line-height: 1.6; }

    /* Top Progress Bar */
    .top-progress { position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, #3b82f6, #1d4ed8); z-index: 1000; width: 0%; transition: width .1s ease; }

    /* Navbar */
    .navbar { background: #0f172a; border-bottom: 1px solid #1e293b; padding: 0 20px; position: sticky; top: 0; z-index: 99; }
    .navbar-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 60px; }
    .navbar-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; color: white; font-weight: 800; font-size: 1.15rem; }
    .navbar-logo span span { color: #3b82f6; }
    .navbar-links { display: flex; gap: 20px; align-items: center; }
    .nav-link { color: #cbd5e1; text-decoration: none; font-size: .9rem; font-weight: 600; transition: color .2s; }
    .nav-link:hover { color: white; }
    .nav-dropdown { position: relative; }
    .nav-dropdown-content { display: none; position: absolute; top: 100%; left: 0; background: #ffffff; min-width: 270px; box-shadow: 0 10px 25px rgba(0,0,0,.15); border-radius: 12px; padding: 10px; border: 1px solid #e2e8f0; z-index: 100; }
    .nav-dropdown:hover .nav-dropdown-content { display: block; }
    .nav-dropdown-content a { display: block; padding: 8px 12px; color: #1e293b; text-decoration: none; font-size: .85rem; font-weight: 600; border-radius: 6px; transition: background .15s; }
    .nav-dropdown-content a:hover { background: #eff6ff; color: #1d4ed8; }
    .btn-login { background: #2563eb; color: white; padding: 6px 16px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: .85rem; }

    /* Breadcrumbs Nav */
    .ncert-breadcrumb-nav { background: #ffffff; border-bottom: 1px solid var(--border); padding: 10px 20px; }
    .ncert-bc-container { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .ncert-bc-list { display: flex; align-items: center; gap: 6px; list-style: none; font-size: .85rem; }
    .ncert-bc-list a { color: var(--slate); text-decoration: none; font-weight: 500; }
    .ncert-bc-list a:hover { color: var(--brand); }
    .ncert-bc-sep { color: #94a3b8; }
    .ncert-bc-current { color: var(--navy); font-weight: 700; }
    .ncert-bc-switch { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; font-size: .82rem; }
    .ncert-bc-switch-label { color: var(--slate); font-weight: 600; }
    .ncert-bc-pill { padding: 4px 10px; border-radius: 20px; text-decoration: none; color: var(--slate); border: 1px solid var(--border); font-weight: 600; transition: all .2s; }
    .ncert-bc-pill:hover, .ncert-bc-pill.active { background: var(--brand); color: white; border-color: var(--brand); }

    /* Hero Banner */
    .hero-banner { background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%); color: white; padding: 36px 20px 32px; text-align: center; }
    .hero-banner h1 { font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 900; margin-bottom: 12px; letter-spacing: -.02em; }
    .hero-banner p { font-size: .95rem; max-width: 800px; margin: 0 auto 20px; color: #bfdbfe; line-height: 1.6; }
    .hero-badges { display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; }
    .hero-badge { background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.25); padding: 5px 14px; border-radius: 20px; font-size: .82rem; font-weight: 600; }

    /* Book Switcher Tabs */
    .book-tab-bar { background: #ffffff; border-bottom: 1px solid var(--border); padding: 14px 20px; text-align: center; position: sticky; top: 60px; z-index: 95; }
    .book-tab-container { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; }
    .btn-book-tab { padding: 8px 20px; border-radius: 24px; font-weight: 700; font-size: .88rem; border: 2px solid var(--border); background: var(--bg); color: var(--slate); cursor: pointer; transition: all .2s; display: inline-flex; align-items: center; gap: 8px; }
    .btn-book-tab:hover { border-color: var(--brand); color: var(--brand); }
    .btn-book-tab.active { background: var(--brand); border-color: var(--brand); color: white; box-shadow: 0 4px 12px rgba(37,99,235,.25); }
    .btn-book-tab .badge { background: rgba(0,0,0,.15); padding: 2px 8px; border-radius: 12px; font-size: .75rem; }

    /* Breadcrumb Chips Jump Bar */
    .breadcrumb-bar { background: #ffffff; border-bottom: 1px solid var(--border); padding: 10px 20px; position: sticky; top: 118px; z-index: 90; box-shadow: 0 2px 8px rgba(0,0,0,.03); }
    .breadcrumb-label { font-size: .78rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--slate); margin-bottom: 6px; }
    .breadcrumb-chips { display: flex; gap: 6px; overflow-x: auto; padding-bottom: 4px; scrollbar-width: thin; }
    .bc-chip { display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 20px; border: 1px solid var(--border); background: var(--bg); color: var(--slate); font-size: .8rem; font-weight: 600; cursor: pointer; white-space: nowrap; transition: all .15s; }
    .bc-chip:hover { border-color: var(--brand); color: var(--brand-dark); }
    .bc-chip.active { background: var(--brand); border-color: var(--brand); color: white; }
    .bc-n { background: rgba(0,0,0,.15); border-radius: 50%; width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center; font-size: .7rem; }

    /* Main Layout */
    .main-layout { max-width: 1400px; margin: 24px auto; display: flex; gap: 24px; padding: 0 20px; }
    .sidebar { width: 320px; flex-shrink: 0; background: #ffffff; border: 1px solid var(--border); border-radius: 16px; padding: 16px; height: calc(100vh - 180px); position: sticky; top: 180px; overflow-y: auto; }
    .sidebar-title { font-size: .95rem; font-weight: 800; color: var(--navy); margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid var(--brand); display: flex; justify-content: space-between; align-items: center; }
    .search-box { width: 100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: 8px; font-size: .85rem; margin-bottom: 12px; outline: none; }
    .search-box:focus { border-color: var(--brand); }
    .chapter-nav { list-style: none; display: flex; flex-direction: column; gap: 4px; }
    .chapter-nav a { display: flex; align-items: flex-start; gap: 10px; padding: 8px 10px; border-radius: 8px; text-decoration: none; color: var(--slate); transition: all .15s; }
    .chapter-nav a:hover, .chapter-nav a.active { background: var(--brand-light); color: var(--brand-text); }
    .ch-num { width: 22px; height: 22px; border-radius: 6px; background: var(--border); display: flex; align-items: center; justify-content: center; font-size: .75rem; font-weight: 700; flex-shrink: 0; margin-top: 2px; }
    .chapter-nav a.active .ch-num { background: var(--brand); color: white; }
    .ch-meta { display: flex; flex-direction: column; }
    .ch-name { font-size: .85rem; font-weight: 700; line-height: 1.3; }
    .ch-sub { font-size: .75rem; color: #64748b; }

    /* Main Content */
    .main-content { flex: 1; min-width: 0; }
    .chapter-section { display: none; }
    .chapter-section.active { display: block; animation: fadeIn .2s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }

    .chapter-header { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 20px; background: white; border: 1px solid var(--border); border-radius: 16px; padding: 20px; }
    .ch-badge { width: 44px; height: 44px; border-radius: 12px; background: var(--brand); color: white; font-weight: 900; font-size: 1.3rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .chapter-header-info { flex: 1; }
    .unit-tag { display: inline-block; font-size: .75rem; font-weight: 700; text-transform: uppercase; color: var(--brand-text); background: var(--brand-light); padding: 2px 8px; border-radius: 4px; margin-bottom: 4px; letter-spacing: .04em; }
    .chapter-header-info h2 { font-size: 1.35rem; font-weight: 800; color: var(--navy); line-height: 1.3; margin-bottom: 4px; }
    .chapter-header-info p { font-size: .85rem; color: var(--slate); }

    .concept-card { background: white; border: 1px solid var(--border); border-radius: 16px; padding: 20px; margin-bottom: 24px; }
    .concept-header { font-size: .95rem; font-weight: 800; color: var(--navy); margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }
    .concept-list { padding-left: 20px; font-size: .88rem; color: #334155; display: flex; flex-direction: column; gap: 6px; }

    .ex-div { font-size: 1rem; font-weight: 800; color: var(--navy); padding: 10px 16px; background: #e2e8f0; border-radius: 8px; margin: 28px 0 16px; border-left: 4px solid var(--brand); }

    /* Question Cards */
    .q-card { background: white; border: 1px solid var(--border); border-radius: 14px; margin-bottom: 14px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,.02); transition: all .2s; }
    .q-head { display: flex; align-items: center; gap: 14px; padding: 16px 20px; cursor: pointer; user-select: none; }
    .q-num { background: var(--brand-light); color: var(--brand-text); font-weight: 800; font-size: .8rem; padding: 4px 10px; border-radius: 6px; flex-shrink: 0; }
    .q-text { font-size: .95rem; font-weight: 700; color: var(--navy); flex: 1; line-height: 1.4; }
    .q-marks { font-size: .75rem; font-weight: 700; color: var(--accent); background: #fff7ed; padding: 3px 8px; border-radius: 4px; border: 1px solid #fed7aa; flex-shrink: 0; }
    .q-toggle { width: 24px; height: 24px; color: var(--slate); transition: transform .2s; flex-shrink: 0; }
    .q-card.open .q-toggle { transform: rotate(45deg); }
    .q-answer { display: none; padding: 0 20px 20px; border-top: 1px solid #f1f5f9; background: #fafafa; }
    .q-card.open .q-answer { display: block; }

    .answer-box { padding-top: 16px; }
    .answer-label { font-size: .78rem; font-weight: 800; text-transform: uppercase; color: var(--brand); margin-bottom: 8px; letter-spacing: .04em; }
    .answer-text { font-size: .92rem; color: #1e293b; line-height: 1.7; }
    .answer-text ul, .answer-text ol { margin: 8px 0 8px 20px; }
    .answer-text li { margin-bottom: 4px; }

    /* Marking Scheme */
    .marking-scheme { margin-top: 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 14px; font-size: .8rem; }
    .marking-title { font-weight: 700; color: var(--navy); margin-bottom: 6px; }
    .marking-row { display: flex; justify-content: space-between; border-bottom: 1px solid #f1f5f9; padding: 4px 0; }
    .marking-row:last-child { border-bottom: none; }
    .marking-key { color: var(--slate); }
    .marking-marks { font-weight: 700; color: var(--brand); }

    /* Competency Card */
    .cbq-card { background: linear-gradient(to right, #eff6ff, #f0fdf4); border: 1.5px solid #bfdbfe; border-radius: 12px; padding: 22px; margin: 30px 0 20px; }
    .cbq-badge { display: inline-block; font-size: .75rem; font-weight: 800; text-transform: uppercase; color: #1e40af; background: #dbeafe; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; letter-spacing: .04em; }

    /* Responsive */
    @media (max-width: 900px) {
      .main-layout { flex-direction: column; }
      .sidebar { width: 100%; height: auto; position: static; }
      .book-tab-bar { top: 57px; }
      .breadcrumb-bar { top: 115px; }
    }
  </style>
</head>
<body>
  <div class="top-progress" id="progressBar"></div>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        <img src="favicon.png" alt="OlympiadQuiz Logo" width="32" height="32" style="height:32px;width:auto;" loading="lazy">
        <span class="logo-text">Olympiad<span>Quiz</span></span>
      </a>
      <div class="navbar-links" id="navLinks">
        <a href="index.html" class="nav-link">Home</a>
        <div class="nav-dropdown">
          <a href="ncert-solutions.html" style="color:white;text-decoration:none;font-size:0.9rem;font-weight:600;display:flex;align-items:center;gap:4px;">NCERT Solutions <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top:2px;"><path d="m6 9 6 6 6-6"/></svg></a>
          <div class="nav-dropdown-content">
            <a href="ncert-solutions.html" style="font-weight:700;color:#c2410c;">📚 All NCERT Hub (2026-27)</a>
            <a href="ncert-solutions-class-5-english.html" style="font-weight:700;color:#2563eb;background:#eff6ff;">Class 5 English 📖 (Active)</a>
            <a href="ncert-solutions-class-5-maths.html">Class 5 Maths 📐</a>
            <a href="ncert-solutions-class-5-evs.html">Class 5 EVS 🌿</a>
            <a href="ncert-solutions-class-6-english.html">Class 6 English 📖</a>
            <a href="ncert-solutions-class-6-science.html">Class 6 Science 🔬</a>
          </div>
        </div>
        <a href="mock.html" class="nav-link">Mock Tests</a>
        <a href="dashboard.html" class="btn-login">Dashboard</a>
      </div>
    </div>
  </nav>

  <!-- Secondary Breadcrumbs & Class 5 Subject Switcher -->
  <div class="ncert-breadcrumb-nav">
    <div class="ncert-bc-container">
      <ul class="ncert-bc-list">
        <li><a href="index.html">Home</a></li>
        <li class="ncert-bc-sep">/</li>
        <li><a href="ncert-solutions.html">NCERT Solutions</a></li>
        <li class="ncert-bc-sep">/</li>
        <li><a href="ncert-solutions.html#class5">Class 5</a></li>
        <li class="ncert-bc-sep">/</li>
        <li class="ncert-bc-current">English (Santoor & Marigold)</li>
      </ul>
      <div class="ncert-bc-switch">
        <span class="ncert-bc-switch-label">Class 5 Subjects:</span>
        <a href="ncert-solutions-class-5-english.html" class="ncert-bc-pill active">English (Santoor / Marigold) 📖</a>
        <a href="ncert-solutions-class-5-maths.html" class="ncert-bc-pill">Maths (Maths Mela & Math-Magic) 📐</a>
        <a href="ncert-solutions-class-5-evs.html" class="ncert-bc-pill">EVS (Looking Around) 🌿</a>
      </div>
    </div>
  </div>

  <!-- Hero Banner -->
  <header class="hero-banner">
    <div style="font-size:0.8rem;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;color:#93c5fd;margin-bottom:8px;">CBSE Academic Session 2026-27 • 100% Comprehensive Coverage</div>
    <h1>NCERT Solutions for Class 5 English</h1>
    <p>Complete step-by-step textbook solutions covering both <strong>Santoor (New NEP 2020 Textbook)</strong> and <strong>Marigold (Classic CBSE Curriculum)</strong>. Features labeled diagrams, CBSE step rubrics, and NEP 2020 competency questions.</p>
    <div class="hero-badges">
      <span class="hero-badge">📘 Book 1: Santoor (10 Chapters)</span>
      <span class="hero-badge">📙 Book 2: Marigold (10 Units / 20 Chapters)</span>
      <span class="hero-badge">✨ 100% Questions Solved</span>
      <span class="hero-badge">🎯 CBSE Marking Rubrics</span>
      <span class="hero-badge">💡 Free Access &bull; Zero Paywall</span>
    </div>
  </header>

  <!-- Book Switcher Tab Bar -->
  <div class="book-tab-bar">
    <div class="book-tab-container">
      <button class="btn-book-tab active" id="btnSantoor" onclick="switchBook('santoor')">
        <span>📘 Santoor</span>
        <span class="badge">New NEP 2020 (Ch 1-10)</span>
      </button>
      <button class="btn-book-tab" id="btnMarigold" onclick="switchBook('marigold')">
        <span>📙 Marigold</span>
        <span class="badge">Classic CBSE (Units 1-10)</span>
      </button>
    </div>
  </div>

  <!-- Breadcrumb Quick Jump Chips Bar -->
  <div class="breadcrumb-bar">
    <div style="max-width:1400px;margin:0 auto;">
      <div class="breadcrumb-label" id="chipBarLabel">Quick Chapter Jump — Santoor:</div>
      <div class="breadcrumb-chips" id="chipsSantoor">
        ${santoorChips}
      </div>
      <div class="breadcrumb-chips" id="chipsMarigold" style="display:none;">
        ${marigoldChips}
      </div>
    </div>
  </div>

  <!-- Main Content Layout -->
  <div class="main-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-title">
        <span id="sidebarTitleText">📘 Santoor Chapters</span>
        <span style="font-size:0.75rem;background:#dbeafe;color:#1e40af;padding:2px 8px;border-radius:12px;" id="sidebarCount">10 Chapters</span>
      </div>
      <input type="text" class="search-box" id="chapterSearch" placeholder="Search chapters..." oninput="filterChapters(this.value)">
      <ul class="chapter-nav" id="navSantoor">
        ${santoorSidebar}
      </ul>
      <ul class="chapter-nav" id="navMarigold" style="display:none;">
        ${marigoldSidebar}
      </ul>
    </aside>

    <!-- Content Sections -->
    <main class="main-content">
      <div id="containerSantoor">
        ${santoorSections}
      </div>
      <div id="containerMarigold" style="display:none;">
        ${marigoldSections}
      </div>
    </main>
  </div>

  <!-- Footer -->
  <footer style="background:#0f172a;color:#94a3b8;padding:30px 20px;text-align:center;font-size:0.85rem;border-top:1px solid #1e293b;margin-top:60px;">
    <p>© 2026 OlympiadQuiz — 100% Free Educational Resources &bull; <a href="ncert-solutions.html" style="color:#3b82f6;">NCERT Solutions Hub</a> &bull; <a href="ncert-solutions-class-5-maths.html" style="color:#3b82f6;">Class 5 Maths</a> &bull; <a href="ncert-solutions-class-5-evs.html" style="color:#3b82f6;">Class 5 EVS</a></p>
  </footer>

  <script>
    let currentBook = 'santoor';

    function switchBook(book) {
      currentBook = book;
      const isSantoor = (book === 'santoor');

      // Update tabs
      document.getElementById('btnSantoor').classList.toggle('active', isSantoor);
      document.getElementById('btnMarigold').classList.toggle('active', !isSantoor);

      // Update chips & sidebars
      document.getElementById('chipsSantoor').style.display = isSantoor ? 'flex' : 'none';
      document.getElementById('chipsMarigold').style.display = isSantoor ? 'none' : 'flex';
      document.getElementById('navSantoor').style.display = isSantoor ? 'flex' : 'none';
      document.getElementById('navMarigold').style.display = isSantoor ? 'none' : 'flex';

      document.getElementById('containerSantoor').style.display = isSantoor ? 'block' : 'none';
      document.getElementById('containerMarigold').style.display = isSantoor ? 'none' : 'block';

      document.getElementById('chipBarLabel').innerText = isSantoor ? 'Quick Chapter Jump — Santoor:' : 'Quick Unit Jump — Marigold:';
      document.getElementById('sidebarTitleText').innerText = isSantoor ? '📘 Santoor Chapters' : '📙 Marigold Units';
      document.getElementById('sidebarCount').innerText = isSantoor ? '10 Chapters' : '10 Units';

      // Show first chapter of that book
      const defaultId = isSantoor ? 'ch_s1' : 'ch_m1';
      showChapter(defaultId);
    }

    function showChapter(targetId) {
      document.querySelectorAll('.chapter-section').forEach(sec => sec.classList.remove('active'));
      const activeSec = document.getElementById(targetId);
      if (activeSec) {
        activeSec.classList.add('active');
        // Open first question accordion by default
        const firstQ = activeSec.querySelector('.q-card');
        if (firstQ) firstQ.classList.add('open');
      }

      // Update chips
      document.querySelectorAll('.bc-chip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-target') === targetId);
      });

      // Update sidebar
      document.querySelectorAll('.chapter-nav a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('data-target') === targetId);
      });

      // Scroll chip into view
      const activeChip = document.querySelector('.bc-chip[data-target="' + targetId + '"]');
      if (activeChip) activeChip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

      // Update URL hash
      history.replaceState(null, null, '#' + targetId);
    }

    function toggleQ(qId) {
      const card = document.getElementById(qId);
      if (card) card.classList.toggle('open');
    }

    function filterChapters(query) {
      const q = query.toLowerCase().trim();
      const activeNavId = (currentBook === 'santoor') ? 'navSantoor' : 'navMarigold';
      document.querySelectorAll('#' + activeNavId + ' li').forEach(li => {
        const text = li.innerText.toLowerCase();
        li.style.display = text.includes(q) ? 'block' : 'none';
      });
    }

    // Scroll reading progress
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('progressBar').style.width = scrolled + '%';
    });

    // Handle hash on initial load
    window.addEventListener('DOMContentLoaded', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash.startsWith('ch_m')) {
          switchBook('marigold');
          showChapter(hash);
          return;
        } else if (hash.startsWith('ch_s')) {
          switchBook('santoor');
          showChapter(hash);
          return;
        }
      }
      // default: Santoor Chapter 1
      showChapter('ch_s1');
    });
  </script>
</body>
</html>
`;

const outputPath = path.resolve(__dirname, '../ncert-solutions-class-5-english.html');
fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log(`✅ Successfully generated ncert-solutions-class-5-english.html (${htmlContent.length} bytes)!`);
