// Official NCERT Class 4 English (Santoor) Complete Dataset - Chapters 1 to 12
// Aligned with New NEP 2020 Curriculum (CBSE 2026-27 Session)
// Comprehensive Question-Level Coverage: Comprehension, Vocabulary, Grammar, Projects & CBQs

const santoorChapters = [
  // -------------------------------------------------------------------------
  // CHAPTER 1: TOGETHER WE CAN
  // -------------------------------------------------------------------------
  {
    id: "st1",
    num: 1,
    unit: "Unit 1: My Land",
    title: "Together We Can",
    subtitle: "Inspirational Poem on Teamwork, Unity, Community Cooperation & National Progress",
    concepts: [
      "The power of collective effort: how small individual actions combine to achieve great things.",
      "Metaphor of drops of water forming a mighty ocean and grains of sand creating pleasant land.",
      "Appreciating cultural diversity and working hand-in-hand for societal welfare.",
      "Poetic devices: rhyming words, rhythm, and motivational theme."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Together We Can — Unity & Collective Progress</text>
      <circle cx="120" cy="80" r="28" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="120" y="85" font-size="20" text-anchor="middle">🤝</text>
      <text x="120" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Little Deeds</text>
      <line x1="150" y1="80" x2="220" y2="80" stroke="#3b82f6" stroke-width="2.5" stroke-dasharray="3,3"/>
      <circle cx="260" cy="80" r="32" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="260" y="85" font-size="22" text-anchor="middle">🌱</text>
      <text x="260" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Shared Kindness</text>
      <line x1="295" y1="80" x2="365" y2="80" stroke="#3b82f6" stroke-width="2.5" stroke-dasharray="3,3"/>
      <circle cx="410" cy="80" r="36" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2.5"/>
      <text x="410" y="86" font-size="24" text-anchor="middle">🌟</text>
      <text x="410" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1e3a8a" text-anchor="middle">Mighty Nation</text>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">"Little drops of water, little grains of sand, make the mighty ocean and the pleasant land."</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Comprehension",
        q: "What makes the mighty ocean according to the poem 'Together We Can'? How does the poet compare small acts of kindness to nature's elements?",
        ans: "According to the poem, <strong>little drops of water</strong> come together to form the mighty ocean, and tiny grains of sand combine to make the pleasant, fertile land.<br><br>The poet uses these natural examples to illustrate that no deed of kindness or cooperation is ever too small. Just as countless tiny drops create an immense ocean, small individual acts of love, honesty, and helpfulness by citizens join together to make our communities happy and our country great and prosperous.",
        marks: 3,
        rubric: [
          { key: "Mentions little drops of water and grains of sand", marks: "1.5 M" },
          { key: "Explains metaphor of individual kindness building a mighty society", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "What makes the earth like heaven above according to the poem?",
        ans: "According to the poem, <strong>little deeds of kindness and little words of love</strong> make the earth happy and peaceful, transforming our world to resemble heaven above.",
        marks: 2,
        rubric: [
          { key: "Identification of little deeds of kindness", marks: "1.0 M" },
          { key: "Identification of words of love creating harmony", marks: "1.0 M" }
        ]
      },
      {
        category: "Let us Learn Words • Rhyming Words",
        q: "Find pairs of rhyming words from the poem and use each in an original sentence: (a) Sand - Land, (b) Make - Take, (c) Love - Above.",
        ans: `<strong>(a) Sand - Land:</strong><br>
• <em>Sand:</em> The children built high castles with wet sand on the beach.<br>
• <em>Land:</em> India is a blessed land of rivers, mountains, and colorful traditions.<br><br>
<strong>(b) Make - Take:</strong><br>
• <em>Make:</em> Hard work and patience make all our dreams come true.<br>
• <em>Take:</em> We should always take care of our grandparents when they are unwell.<br><br>
<strong>(c) Love - Above:</strong><br>
• <em>Love:</em> A mother's unconditional love brings comfort to the family.<br>
• <em>Above:</em> The bright morning sun shone high above the green hills.`,
        marks: 3,
        rubric: [
          { key: "Correct pairs of rhyming words identified", marks: "1.5 M" },
          { key: "Original and grammatically correct sentences", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Speak • Unity in Diversity",
        q: "In the lesson, children from different states share their cultural greetings and festivals. Name any three traditional festivals celebrated across different regions of India and state one common value they all share.",
        ans: "<strong>1. Bihu (Assam):</strong> Celebrates the harvest season, nature's bounty, and gratitude through community dancing and feasts.<br><strong>2. Pongal / Makar Sankranti (Tamil Nadu & North India):</strong> Honors the Sun God and farmers for nourishing crops.<br><strong>3. Onam (Kerala):</strong> Commemorates King Mahabali with floral rangolis (Pookkalam) and community solidarity.<br><br><strong>Common Value:</strong> All Indian festivals foster brotherhood, sharing food with the needy, respecting nature, and rejoicing in unity despite diverse languages.",
        marks: 3,
        rubric: [
          { key: "Three diverse regional harvest festivals named", marks: "1.5 M" },
          { key: "Explanation of shared universal values of unity and gratitude", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Do • Teamwork Activity",
        q: "Design a classroom 'Kindness Wall' activity. List three small acts of helpfulness that Class 4 students can carry out every day to support their classmates.",
        ans: `<strong>Classroom Kindness Wall Procedure:</strong><br>
1. <strong>Sharing Learning Materials:</strong> Lending an extra pencil, eraser, or ruler to a benchmate who forgot theirs.<br>
2. <strong>Welcoming & Assisting:</strong> Helping a classmate who missed school due to illness by sharing notebook notes and explaining missed lessons.<br>
3. <strong>Keeping Surroundings Clean:</strong> Picking up paper scraps together after lunch and keeping classroom desks tidy without waiting for the helper.`,
        marks: 3,
        rubric: [
          { key: "Three practical classroom cooperation deeds described", marks: "1.5 M" },
          { key: "Clear emphasis on mutual empathy and inclusivity", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Community Cleanliness Drive in Shanti Nagar",
      text: "The residents of Shanti Nagar noticed that their neighborhood park was littered with plastic wrappers and dry branches after a storm. Instead of waiting for municipality workers, 15 school children formed 'Team Eco-Warriors' and spent two hours on Sunday morning cleaning the flowerbeds and jogging tracks.",
      question: "How does the initiative of Team Eco-Warriors reflect the core message of 'Together We Can'? State two benefits of collaborative community work over individual efforts.",
      answer: "<strong>Reflection of Core Message:</strong> Just as 'little drops of water make a mighty ocean,' individual children joining hands turned an overwhelming clean-up task into an enjoyable two-hour triumph.<br><br><strong>Two Benefits:</strong><br>1. <em>Division of Labor & Speed:</em> Tasks that take one person several days are accomplished swiftly when divided among motivated team members.<br>2. <em>Community Ownership:</em> Working together instills pride in shared public spaces and inspires adults and neighbors to keep the environment clean.",
      rubric: "1 Mark for connecting collective action to poem theme; 1 Mark for two distinct collaborative benefits."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 2: THE TINKLING BELLS
  // -------------------------------------------------------------------------
  {
    id: "st2",
    num: 2,
    unit: "Unit 1: My Land",
    title: "The Tinkling Bells",
    subtitle: "Heartwarming Story on Honesty, Moral Integrity, Empathy & the Joy of Righteous Living",
    concepts: [
      "Story of young Chinna, who loses his grandfather's money meant for buying cattle bells.",
      "The moral dilemma: An honest mistake by a fruit seller gives Chinna extra change.",
      "The golden virtue of honesty: Returning what does not belong to you brings genuine peace and self-respect.",
      "Parental guidance and how positive reinforcement nurtures upright character in children."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#854d0e" text-anchor="middle">The Tinkling Bells — Chinna's Journey of Honesty</text>
      <circle cx="80" cy="85" r="28" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="80" y="85" font-size="18" text-anchor="middle">😢</text>
      <text x="80" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#713f12" text-anchor="middle">Lost Coins</text>
      <path d="M110 85 L180 85" stroke="#eab308" stroke-width="2"/>
      <circle cx="215" cy="85" r="28" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="215" y="85" font-size="18" text-anchor="middle">🍎</text>
      <text x="215" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#713f12" text-anchor="middle">Extra ₹10</text>
      <path d="M245 85 L315 85" stroke="#eab308" stroke-width="2"/>
      <circle cx="350" cy="85" r="28" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="350" y="85" font-size="18" text-anchor="middle">🤝</text>
      <text x="350" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">Returned Honestly</text>
      <path d="M380 85 L450 85" stroke="#16a34a" stroke-width="2"/>
      <circle cx="485" cy="85" r="32" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
      <text x="485" y="85" font-size="20" text-anchor="middle">🔔</text>
      <text x="485" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9a3412" text-anchor="middle">Tinkling Bells!</text>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#854d0e" text-anchor="middle">"Honesty brings true joy, dignity, and a clear conscience."</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Comprehension",
        q: "Answer the following from the story: (a) Why was Chinna upset when he returned home? (b) How did his mother Kamala comfort him?",
        ans: "<strong>(a)</strong> Chinna was deeply upset and crying because he had lost the money that his beloved Dadaji (grandfather) had given him to buy brass tinkling bells for their cow.<br><br><strong>(b)</strong> His mother Kamala gently wiped away his tears, spoke comforting words, and promised that she would give him money to buy the bells so he wouldn't feel sorrowful.",
        marks: 3,
        rubric: [
          { key: "Explains loss of Dadaji's bell money", marks: "1.5 M" },
          { key: "Describes mother Kamala's comforting reaction and promise", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "What mistake did the fruit seller make, and how did Chinna react when he realized it?",
        ans: "The fruit seller accidentally handed Chinna <strong>ten rupees extra</strong> while returning his change after buying fruit.<br><br>Although Chinna was tempted for a moment because he needed money for the bells, his conscience reminded him that keeping another person's hard-earned money was dishonest. He immediately walked back and returned the ten-rupee coin to the fruit seller.",
        marks: 3,
        rubric: [
          { key: "Mentions fruit seller giving ₹10 extra by mistake", marks: "1.5 M" },
          { key: "Explains Chinna's moral decision to return the money", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • True or False",
        q: "Write 'T' for True and 'F' for False: (1) Chinna wanted to buy bells to attach to his bicycle. (2) Kamala comforted Chinna when he was crying. (3) The fruit seller gave Chinna twenty rupees extra. (4) Chinna returned the extra money to the fruit seller. (5) The fruit seller was angry when Chinna returned the money.",
        ans: "<strong>(1) False</strong> — Chinna wanted bells for the family cow, not a bicycle.<br><strong>(2) True</strong> — His mother Kamala lovingly consoled him.<br><strong>(3) False</strong> — The fruit seller gave ten rupees extra, not twenty.<br><strong>(4) True</strong> — Chinna honestly returned the ten-rupee coin.<br><strong>(5) False</strong> — The fruit seller was very happy, blessed Chinna, and praised his integrity.",
        marks: 3,
        rubric: [
          { key: "All 5 statements evaluated with correct factual justifications", marks: "3.0 M" }
        ]
      },
      {
        category: "Let us Think • Think & Discuss",
        q: "Why did Chinna decide to return the extra money instead of keeping it? What would have happened if he had kept it?",
        ans: "Chinna decided to return the money because he remembered his own deep sadness when he lost his coins. He understood that the fruit seller had worked hard all day, and losing ten rupees would cause him financial distress.<br><br>If Chinna had kept the money, he would have suffered from guilt and a troubled conscience, knowing that he had acquired bells through dishonesty rather than righteous effort.",
        marks: 3,
        rubric: [
          { key: "Relates Chinna's empathy to his own experience of loss", marks: "1.5 M" },
          { key: "Explains consequence of guilt versus peace of honest conduct", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Learn Words • Antonyms & Synonyms",
        q: "Find opposites for the following words from the chapter and frame a sentence with any one: (a) Lost, (b) Honest, (c) Sorrow.",
        ans: `<strong>(a) Lost:</strong> Found.<br>
<strong>(b) Honest:</strong> Dishonest.<br>
<strong>(c) Sorrow:</strong> Joy / Happiness.<br><br>
<strong>Sentence:</strong> Rohan was filled with immense <em>joy</em> when he <em>found</em> his missing geometry box under his desk.`,
        marks: 3,
        rubric: [
          { key: "Correct antonyms provided", marks: "1.5 M" },
          { key: "Meaningful sentence correctly framed", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Lost Wallet on the School Playground",
      text: "During recess, 9-year-old Kabir found a leather wallet containing ₹500 and an identity card near the basketball court. His friends advised him to spend the money at the school canteen. Instead, Kabir immediately marched to the Principal's office and deposited the wallet.",
      question: "Which character from 'The Tinkling Bells' does Kabir's behavior parallel? State two character strengths demonstrated by Kabir in this situation.",
      answer: "<strong>Character Parallel:</strong> Kabir's upright conduct directly mirrors <strong>Chinna</strong>, who refused to keep the fruit seller's extra ₹10 despite needing money for bells.<br><br><strong>Two Character Strengths:</strong><br>1. <em>Integrity under Peer Pressure:</em> Kabir rejected the temptation of instant gratification and peer encouragement to spend the money.<br>2. <em>Empathy & Responsibility:</em> He realized the owner of the wallet would be worried and took immediate administrative action to restore the lost property.",
      rubric: "1 Mark for identifying parallel to Chinna; 1 Mark for two character strengths (integrity and empathy)."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 3: BE SMART, BE SAFE
  // -------------------------------------------------------------------------
  {
    id: "st3",
    num: 3,
    unit: "Unit 1: My Land",
    title: "Be Smart, Be Safe",
    subtitle: "Essential Civic Awareness, Road Safety Rules, Pedestrian Guidelines & Emergency Preparedness",
    concepts: [
      "The four cardinal rules of pedestrian street crossing: Stop, Look Right, Look Left, Look Right Again.",
      "Importance of zebra crossings, pedestrian footpaths, and pedestrian traffic signals.",
      "Safety on public roads: Holding an adult's hand, avoiding running across traffic, and avoiding blind corners.",
      "Traffic signal lights: Red (Stop), Amber/Yellow (Wait/Get Ready), Green (Go)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Road Safety Golden Rules — Stop, Look & Listen</text>
      <!-- Traffic Light -->
      <rect x="50" y="45" width="30" height="75" fill="#1e293b" rx="6"/>
      <circle cx="65" cy="60" r="8" fill="#ef4444"/>
      <circle cx="65" cy="82" r="8" fill="#f59e0b"/>
      <circle cx="65" cy="104" r="8" fill="#22c55e"/>
      <text x="65" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#475569" text-anchor="middle">Signals</text>
      <!-- Zebra Crossing -->
      <rect x="140" y="55" width="150" height="60" fill="#334155" rx="6"/>
      <rect x="150" y="55" width="15" height="60" fill="#ffffff"/>
      <rect x="180" y="55" width="15" height="60" fill="#ffffff"/>
      <rect x="210" y="55" width="15" height="60" fill="#ffffff"/>
      <rect x="240" y="55" width="15" height="60" fill="#ffffff"/>
      <rect x="270" y="55" width="15" height="60" fill="#ffffff"/>
      <text x="215" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e293b" text-anchor="middle">Zebra Crossing</text>
      <!-- Look Steps -->
      <rect x="340" y="55" width="200" height="60" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/>
      <text x="440" y="75" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1d4ed8" text-anchor="middle">1. Look Right ➔</text>
      <text x="440" y="93" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1d4ed8" text-anchor="middle">2. Look Left ⬅</text>
      <text x="440" y="111" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1d4ed8" text-anchor="middle">3. Look Right Again ➔</text>
      <text x="290" y="150" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0284c7" text-anchor="middle">"Never run across a road; always walk calmly on the pedestrian crossing."</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Comprehension",
        q: "What four essential steps must you always follow before crossing any busy road?",
        ans: "<strong>1. Stop:</strong> Stand safely on the footpath or curb at the edge of the zebra crossing.<br><strong>2. Look Right:</strong> Check for incoming traffic from your right side.<br><strong>3. Look Left:</strong> Check for vehicles approaching from the left.<br><strong>4. Look Right Again:</strong> Take a final look to the right to verify that all vehicles have stopped or the road is completely clear before walking across.",
        marks: 3,
        rubric: [
          { key: "Correct sequence of Stop, Look Right, Look Left, Look Right Again", marks: "2.0 M" },
          { key: "Mentions crossing only when traffic is stopped or road is clear", marks: "1.0 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "Why should children hold an adult's hand while crossing roads, and why is playing on the footpath prohibited?",
        ans: "<strong>Holding an Adult's Hand:</strong> Adults have better judgment of vehicle speeds, higher visual vantage points, and can shield children from sudden maneuvers by reckless drivers.<br><br><strong>Not Playing on Footpaths:</strong> Footpaths are meant exclusively for safe walking. Playing tag or ball games on footpaths creates distractions, risking a child or ball rolling into oncoming traffic and causing severe accidents.",
        marks: 3,
        rubric: [
          { key: "Scientific explanation of adult traffic assessment and guidance", marks: "1.5 M" },
          { key: "Safety hazards of playing near live road traffic", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Learn Words • Traffic Signs",
        q: "Match each traffic light color with its official rule: (a) Red, (b) Amber / Yellow, (c) Green. What does a green pedestrian walking figure indicate?",
        ans: "<strong>(a) Red:</strong> Stop completely behind the stop line.<br><strong>(b) Amber / Yellow:</strong> Slow down and prepare to stop; do not accelerate to beat the light.<br><strong>(c) Green:</strong> Go forward if the intersection is clear.<br><br><strong>Green Pedestrian Figure:</strong> Indicates that vehicular traffic is halted and pedestrians may safely cross the road using the zebra crossing.",
        marks: 3,
        rubric: [
          { key: "Correct meanings of Red, Amber, and Green signals", marks: "1.5 M" },
          { key: "Explanation of green pedestrian walking symbol", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Think & Discuss",
        q: "What should you do if there is no zebra crossing or traffic signal nearby when you need to cross the road?",
        ans: "If no zebra crossing exists nearby:<br>1. Choose a straight stretch of road where you can see vehicles clearly in both directions (never cross at sharp turns or behind parked buses).<br>2. Wait patiently on the pavement until there is a wide gap in traffic.<br>3. Check right, left, and right again.<br>4. Walk straight across quickly and alertly without running or looking at mobile devices.",
        marks: 3,
        rubric: [
          { key: "Avoids blind spots / sharp bends / parked vehicles", marks: "1.5 M" },
          { key: "Calm, vigilant walking procedure described", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "School Gate Traffic Congestion",
      text: "At 2:00 PM, several auto-rickshaws and parents' two-wheelers crowd right outside the school gate. A 4th-grade student, Aryan, drops his water bottle on the road and rushes into the middle of the street between parked vans to retrieve it.",
      question: "Identify two severe safety mistakes committed by Aryan. What should a safety-smart student do in this scenario?",
      answer: "<strong>Two Safety Mistakes:</strong><br>1. <em>Emerging from Blind Spots:</em> Aryan stepped into the roadway between parked vans where drivers of moving vehicles could not see him.<br>2. <em>Chasing Dropped Objects into Traffic:</em> Running impulsively into live traffic without stopping and scanning right and left.<br><br><strong>Safety-Smart Procedure:</strong> Aryan should stand safely on the footpath, alert the school traffic warden or security guard, and let an adult safely retrieve the bottle once traffic clears.",
      rubric: "1 Mark for identifying both safety violations; 1 Mark for providing safe adult-assisted protocol."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 4: ONE THING AT A TIME
  // -------------------------------------------------------------------------
  {
    id: "st4",
    num: 4,
    unit: "Unit 2: My Beautiful World",
    title: "One Thing at a Time",
    subtitle: "Classic Inspirational Poem by M.A. Stodart on Concentration, Time Management & Mindfulness",
    concepts: [
      "The value of undivided attention: Doing one thing with all one's might ensures perfection.",
      "Dangers of multitasking: 'Things done by halves are never done right.'",
      "Balancing work and play: Dedicated study hours and dedicated play hours create joyful harmony.",
      "Cultivating self-discipline, time organization, and peaceful focus in childhood."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803d" text-anchor="middle">One Thing at a Time — Work Well & Play Well</text>
      <!-- Work Box -->
      <rect x="80" y="50" width="180" height="70" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="8"/>
      <text x="170" y="75" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#14532d" text-anchor="middle">📚 WORK WITH MIGHT</text>
      <text x="170" y="95" font-family="system-ui, sans-serif" font-size="10" fill="#15803d" text-anchor="middle">Full focus on studies</text>
      <text x="170" y="110" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#166534" text-anchor="middle">No half-hearted attempts</text>
      <!-- Play Box -->
      <rect x="320" y="50" width="180" height="70" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="8"/>
      <text x="410" y="75" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#14532d" text-anchor="middle">⚽ PLAY WITH JOY</text>
      <text x="410" y="95" font-family="system-ui, sans-serif" font-size="10" fill="#15803d" text-anchor="middle">Full energy on sports</text>
      <text x="410" y="110" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#166534" text-anchor="middle">Happy mind & fit body</text>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">"Work while you work, play while you play; one thing each time leads to a happy day!"</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Comprehension",
        q: "Why is it important to focus on doing one thing at a time according to the poem? What happens when tasks are done by halves?",
        ans: "It is important to focus on one thing at a time because <strong>'things done by halves are never done right.'</strong><br><br>When we divide our attention between multiple activities, our mind gets scattered, we make careless errors, waste precious time, and end up leaving tasks incomplete. Focusing fully on a single activity allows us to understand concepts thoroughly and achieve excellence.",
        marks: 3,
        rubric: [
          { key: "Cites 'things done by halves are never done right'", marks: "1.5 M" },
          { key: "Explains errors and time waste resulting from split attention", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Rhyming Words",
        q: "Make a list of words that rhyme in the poem 'One Thing at a Time' and write one pair in an original couplet.",
        ans: `<strong>Rhyming Pairs from the Poem:</strong><br>
• <strong>play</strong> — <strong>way</strong><br>
• <strong>might</strong> — <strong>right</strong><br>
• <strong>well</strong> — <strong>tell</strong><br><br>
<strong>Original Couplet:</strong><br>
<em>Study your books with all your might,<br>
And your bright future will turn out right!</em>`,
        marks: 3,
        rubric: [
          { key: "Three correct rhyming pairs identified", marks: "1.5 M" },
          { key: "Creative, meaningful rhyming couplet written", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Personal Reflection",
        q: "How do you feel after finishing a difficult task that you have performed with full dedication? Describe three daily habits that help you stay calm and focused.",
        ans: `<strong>Post-Task Feeling:</strong> After completing a difficult assignment with full concentration, I feel deeply satisfied, peaceful, self-confident, and free of stress.<br><br>
<strong>Three Focus Habits:</strong><br>
1. <strong>Quiet Study Space:</strong> Keeping my study table clean and free from distracting toys or television sounds.<br>
2. <strong>Deep Breathing Breaks:</strong> Taking five slow, deep breaths before starting math problem solving.<br>
3. <strong>Daily Timetable:</strong> Allocating fixed, separate hours for homework and outdoor sports so my mind is never worried about unfinished work during playtime.`,
        marks: 3,
        rubric: [
          { key: "Emotional expression of accomplishment and satisfaction", marks: "1.5 M" },
          { key: "Three practical concentration habits described", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Learn Words • Sentence Construction",
        q: "Use the following words in meaningful sentences: (a) Might, (b) Moments, (c) Rule.",
        ans: "<strong>(a) Might:</strong> The little ant pushed the large breadcrumb with all its <em>might</em> into the anthill.<br><strong>(b) Moments:</strong> We spent cheerful <em>moments</em> singing folk songs around the campfire.<br><strong>(c) Rule:</strong> A golden <em>rule</em> of road safety is to always cross at the zebra crossing.",
        marks: 3,
        rubric: [
          { key: "Three grammatically flawless, contextually rich sentences", marks: "3.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Exam Preparation vs. Mobile Notifications",
      text: "While revising science definitions for tomorrow's unit test, Rohan keeps his mother's smartphone next to his textbook. Every three minutes, he glances at notification chimes, replies to chat messages, and re-reads the same paragraph five times without remembering it.",
      question: "Which advice from M.A. Stodart's poem does Rohan fail to practice? What specific advice would you give Rohan to improve his test recall?",
      answer: "<strong>Poem Rule Violated:</strong> Rohan violates the fundamental rule: <em>'Work while you work, play while you play; that is the way to be cheerful and gay.'</em> By trying to study and chat simultaneously, his work is being 'done by halves.'<br><br><strong>Actionable Advice:</strong> Rohan should switch off the smartphone or place it in another room for 45 minutes, focus entirely on revising one science topic with full 'might,' and only check messages after completing his revision goals.",
      rubric: "1 Mark for quoting or identifying poem's core tenet; 1 Mark for practical digital distraction protocol."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 5: THE OLD STAG
  // -------------------------------------------------------------------------
  {
    id: "st5",
    num: 5,
    unit: "Unit 2: My Beautiful World",
    title: "The Old Stag",
    subtitle: "Touching Forest Fable on Empathy, Ecological Harmony, Repentance & Selfless Care",
    concepts: [
      "The wise and affectionate old stag who lived peacefully on a green hillock.",
      "The stag falls sick and cannot walk down to meet his woodland friends.",
      "Thoughtless grazing: Visiting animals eat up the hillock's tender grass, leaving the stag without food.",
      "Moral awakening: Realizing their thoughtlessness, the animals nurse the hillock back to life and feed the stag.",
      "Environmental message: Caring for community resources and protecting the green cover of nature."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#713f12" text-anchor="middle">The Old Stag — From Thoughtless Harm to Loving Care</text>
      <!-- Stag on Hillock -->
      <path d="M40 120 Q120 60 200 120" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
      <text x="120" y="85" font-size="22" text-anchor="middle">🦌</text>
      <text x="120" y="105" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#14532d" text-anchor="middle">Beloved Old Stag</text>
      <!-- Thoughtless Grazing -->
      <circle cx="290" cy="85" r="28" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="290" y="85" font-size="18" text-anchor="middle">🌾❌</text>
      <text x="290" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Grass Vanished</text>
      <text x="290" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#b91c1c" text-anchor="middle">Thoughtless grazing</text>
      <!-- Repentance & Care -->
      <circle cx="460" cy="85" r="32" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="460" y="85" font-size="22" text-anchor="middle">🍎🌱</text>
      <text x="460" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#166534" text-anchor="middle">Fresh Food Brought</text>
      <text x="460" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#15803d" text-anchor="middle">Regrowing green cover</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#713f12" text-anchor="middle">"True friendship and ecological love mean caring for each other's living space."</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Comprehension",
        q: "Why was the old stag so popular among all the forest animals and birds? Why could he not go down the hillock to meet them?",
        ans: "<strong>Popularity:</strong> The old stag was popular because of his kind, gentle, and loving nature. Every morning, he warmly greeted every animal, bird, and insect, showing genuine affection to all creatures.<br><br><strong>Inability to Walk:</strong> In his advanced age, the stag fell severely ill and grew too weak to walk down the steep hillock to the river and meadows.",
        marks: 3,
        rubric: [
          { key: "Describes kind, welcoming nature of the stag", marks: "1.5 M" },
          { key: "Explains sickness and physical weakness preventing descent", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "Why did the lush green cover of the hillock slowly disappear? What tragedy did this cause for the sick stag?",
        ans: "When the animals heard of the stag's illness, they flocked to visit him on the hillock. While standing and chatting, each visiting animal thoughtlessly nibbled on the fresh, tender grass.<br><br>Because hundreds of animals visited day after day, the entire green cover of the hillock was completely eaten away. Consequently, the weak stag had no food left near his resting place and began starving.",
        marks: 3,
        rubric: [
          { key: "Explains visitors thoughtlessly grazing during visits", marks: "1.5 M" },
          { key: "Identifies severe consequence of starvation for the stag", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "How did the forest animals realize their mistake, and what constructive steps did they take to help the stag recover?",
        ans: "The animals realized their mistake when they saw the barren, brown hillock and noticed that the sick stag was shivering and weak from hunger. Overcome with deep remorse, they took immediate action:<br>1. They stopped all grazing on the hillock to let the soil rest and the grass regrow.<br>2. Every visiting animal started bringing fresh tender leaves, juicy fruits, and clear water from the valley to feed the stag until he regained his strength.",
        marks: 3,
        rubric: [
          { key: "Identification of animals' guilt upon seeing barren hillock", marks: "1.5 M" },
          { key: "Two restorative actions: halting grazing and bringing fresh food", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Think & Discuss",
        q: "What would happen to the natural environment around us if each human thought only of their immediate selfish needs?",
        ans: "If every person considered only their immediate personal desires without thinking of others, our forests would be cut down, clean rivers would be polluted with plastic waste, and green pastures would turn into barren deserts.<br><br>Just like the animals on the hillock, selfish consumption destroys the ecosystem that sustains all life, leaving no resources for future generations or vulnerable living beings.",
        marks: 3,
        rubric: [
          { key: "Relates animal parable to human environmental degradation", marks: "1.5 M" },
          { key: "Highlights long-term ecological balance and intergenerational equity", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "School Garden Trampling Incident",
      text: "During the annual sports day, hundreds of spectator students stood on the newly planted flowerbeds near the running track to get a better view of the 100m sprint. By evening, all the delicate marigold and rose saplings were crushed flat underfoot.",
      question: "How does this sports day incident compare with the forest animals' behavior in 'The Old Stag'? Suggest two rules the school pupil council should enforce to prevent such damage.",
      answer: "<strong>Parallels with 'The Old Stag':</strong> Just like the forest animals who loved the stag but carelessly ate away his sustenance, the students were enthusiastically cheering their athletes but carelessly destroyed the beautiful garden through lack of environmental mindfulness.<br><br><strong>Two Protective Rules:</strong><br>1. <em>Barricaded Viewing Corridors:</em> Designating clearly marked standing bleachers and placing protective bamboo fences around all flowerbeds.<br>2. <em>Student Eco-Marshals:</em> Appointing Class 4 and 5 volunteers to guide spectators away from delicate botanical zones during major events.",
      rubric: "1 Mark for insightful connection to the story; 1 Mark for two sensible school garden regulations."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 6: BRAILLE
  // -------------------------------------------------------------------------
  {
    id: "st6",
    num: 6,
    unit: "Unit 2: My Beautiful World",
    title: "Braille",
    subtitle: "Inspiring Biography of Louis Braille, Tactile Literacy, Inclusion & Overcoming Adversity",
    concepts: [
      "The early childhood of Louis Braille in Coupvray, France, and his tragic eye injury in his father's workshop.",
      "The burning desire of visually impaired students to read and learn independently.",
      "Captain Charles Barbier's military code ('Night Writing') and its shortcomings.",
      "Louis Braille's breakthrough: Creating a 6-dot tactile code representing letters, numbers, and music.",
      "Empathy, disability awareness, and the universal symbol of the white cane."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">The Braille Script — 6 Raised Dots Cell Structure</text>
      <!-- Braille Cell Letter A -->
      <rect x="70" y="50" width="60" height="80" fill="#dbeafe" stroke="#2563eb" stroke-width="2" rx="6"/>
      <circle cx="88" cy="68" r="6" fill="#1d4ed8"/>
      <circle cx="112" cy="68" r="6" fill="#93c5fd" opacity="0.4"/>
      <circle cx="88" cy="90" r="6" fill="#93c5fd" opacity="0.4"/>
      <circle cx="112" cy="90" r="6" fill="#93c5fd" opacity="0.4"/>
      <circle cx="88" cy="112" r="6" fill="#93c5fd" opacity="0.4"/>
      <circle cx="112" cy="112" r="6" fill="#93c5fd" opacity="0.4"/>
      <text x="100" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e3a8a" text-anchor="middle">Letter 'A'</text>
      <!-- Braille Cell Letter B -->
      <rect x="180" y="50" width="60" height="80" fill="#dbeafe" stroke="#2563eb" stroke-width="2" rx="6"/>
      <circle cx="198" cy="68" r="6" fill="#1d4ed8"/>
      <circle cx="222" cy="68" r="6" fill="#93c5fd" opacity="0.4"/>
      <circle cx="198" cy="90" r="6" fill="#1d4ed8"/>
      <circle cx="222" cy="90" r="6" fill="#93c5fd" opacity="0.4"/>
      <circle cx="198" cy="112" r="6" fill="#93c5fd" opacity="0.4"/>
      <circle cx="222" cy="112" r="6" fill="#93c5fd" opacity="0.4"/>
      <text x="210" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e3a8a" text-anchor="middle">Letter 'B'</text>
      <!-- Braille Cell Letter C -->
      <rect x="290" y="50" width="60" height="80" fill="#dbeafe" stroke="#2563eb" stroke-width="2" rx="6"/>
      <circle cx="308" cy="68" r="6" fill="#1d4ed8"/>
      <circle cx="332" cy="68" r="6" fill="#1d4ed8"/>
      <circle cx="308" cy="90" r="6" fill="#93c5fd" opacity="0.4"/>
      <circle cx="332" cy="90" r="6" fill="#93c5fd" opacity="0.4"/>
      <circle cx="308" cy="112" r="6" fill="#93c5fd" opacity="0.4"/>
      <circle cx="332" cy="112" r="6" fill="#93c5fd" opacity="0.4"/>
      <text x="320" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e3a8a" text-anchor="middle">Letter 'C'</text>
      <!-- White Cane -->
      <rect x="400" y="50" width="130" height="80" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" rx="8"/>
      <line x1="430" y1="120" x2="500" y2="60" stroke="#dc2626" stroke-width="4"/>
      <line x1="430" y1="120" x2="480" y2="75" stroke="#ffffff" stroke-width="4"/>
      <text x="465" y="140" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#92400e" text-anchor="middle">White Cane Symbol</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="9" fill="#1e40af" text-anchor="middle">Each letter is formed within a 6-dot matrix felt with sensitive fingertips.</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Comprehension",
        q: "Describe the Braille system of reading and writing. How do visually impaired individuals use it to read books?",
        ans: "The Braille system is a tactile reading and writing method based on an embossed code of <strong>raised dots</strong> arranged inside rectangular cells.<br><br>Each cell has six dot positions arranged in two vertical columns of three dots each. Different combinations of raised dots represent letters of the alphabet, punctuation marks, numbers, and musical notes. Visually impaired individuals lightly glide their sensitive fingertips across the raised dots from left to right to read fluently.",
        marks: 3,
        rubric: [
          { key: "Explains matrix of 6 raised dots per cell", marks: "1.5 M" },
          { key: "Describes fingertip touch reading from left to right", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "Why was Captain Charles Barbier's 'Night Writing' system not successful among blind children?",
        ans: "Captain Barbier's 'Night Writing' was originally developed for soldiers in battle to read messages in the dark without lighting lamps. However, it was not successful for general reading because:<br>1. It was based on complex sound codes rather than letters of the alphabet.<br>2. It used 12 raised dots per cell, which was too large to fit underneath the pad of a single finger without moving up and down, making reading slow and clumsy.",
        marks: 3,
        rubric: [
          { key: "Explains military origins of Night Writing", marks: "1.0 M" },
          { key: "Cites 12-dot complexity and inability to cover with one fingertip", marks: "2.0 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "What major improvement did young Louis Braille introduce to make reading simple, elegant, and efficient?",
        ans: "Louis Braille simplified the 12-dot military system down to a compact <strong>6-dot cell</strong>. This revolutionary improvement meant that every single letter could be felt and recognized instantly under the tip of a single finger in one touch, drastically speeding up reading and allowing blind students to write easily using a slate and stylus.",
        marks: 3,
        rubric: [
          { key: "Reduction from 12 dots to 6 dots", marks: "1.5 M" },
          { key: "Enables instant recognition under a single fingertip", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Think & Discuss",
        q: "Why is the mobility cane used by visually challenged individuals always white in color? What difficulties would a person face if the world had no light?",
        ans: "<strong>White Cane Purpose:</strong> The cane is painted bright white (often with a red reflective stripe) so that motorists, cyclists, and pedestrians can spot it clearly from afar, immediately recognizing that the traveler is visually challenged and according them safety and right-of-way.<br><br><strong>World Without Light:</strong> Without light, people would struggle with spatial navigation, reading printed books, identifying family members by appearance, avoiding physical obstacles, and recognizing distant hazards.",
        marks: 3,
        rubric: [
          { key: "Explains high visibility and international recognition of white cane", marks: "1.5 M" },
          { key: "Reflects thoughtfully on sensory reliance in absence of sight", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Do • Tactile Sensory Activity",
        q: "Conduct a tactile identification experiment: Blindfold yourself and describe how you can distinguish a coin, a key, an eraser, and a pencil solely through touch.",
        ans: `<strong>Tactile Observations through Fingertip Touch:</strong><br>
• <strong>One-Rupee Coin:</strong> Feels cold and metallic; circular with serrated milled edges and raised national emblems.<br>
• <strong>Metal Key:</strong> Has a flat head with a circular hole, a long narrow metallic shaft, and jagged teeth cut into one edge.<br>
• <strong>Eraser:</strong> Feels soft, flexible, matte, and rubbery with sharp right-angled corners.<br>
• <strong>Pencil:</strong> Long, rigid, cylindrical or hexagonal wooden shaft with a smooth lacquer finish and a sharp tapering graphite cone at one end.`,
        marks: 3,
        rubric: [
          { key: "Detailed texture, temperature, and shape characteristics for all 4 items", marks: "3.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Public Transport Accessibility for Visually Challenged Citizens",
      text: "The metro rail corporation installed textured yellow paving tiles along station platforms and automated audio announcements inside coaches to help commuters with visual impairment travel independently.",
      question: "How do textured paving tiles work as an orientation aid? How does this reflect the spirit of inclusion championed by Louis Braille?",
      answer: "<strong>Function of Textured Yellow Tiles:</strong> The tiles feature raised parallel bars (indicating a clear path to walk forward) and raised blisters/dots (warning passengers to stop immediately before the dangerous platform edge). Commuters feel these textures through the tip of their white cane and under their footwear.<br><br><strong>Reflection of Inclusion:</strong> Just as Louis Braille eliminated barriers to literacy through raised dots on paper, tactile infrastructure eliminates barriers to public mobility, empowering people with disabilities to travel with dignity and independence.",
      rubric: "1 Mark for explaining guiding bars vs stop blister tiles; 1 Mark for connecting to universal access and Braille's legacy."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 7: FIT BODY, FIT MIND, FIT NATION
  // -------------------------------------------------------------------------
  {
    id: "st7",
    num: 7,
    unit: "Unit 3: Fun with Games",
    title: "Fit Body, Fit Mind, Fit Nation",
    subtitle: "Rhythmic Poem on Physical Fitness, Sportsmanship, Yoga, Nutrition & Holistic Well-being",
    concepts: [
      "The intimate connection between physical health, mental alertness, and nation building.",
      "Children engaging in diverse activities: Hockey, skating, dance, yoga, and musical rhythm.",
      "Learning from mistakes: Falling during skating and rising up with stronger resolve.",
      "Healthy food choices: Nutritious home-cooked meals over processed junk food.",
      "The national initiative of 'Fit India': Healthy children create a vibrant, prosperous country."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fdf4ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#86198f" text-anchor="middle">Fit Body, Fit Mind, Fit Nation — Pillars of Youth Health</text>
      <!-- Pillar 1 -->
      <circle cx="100" cy="85" r="28" fill="#fae8ff" stroke="#a21caf" stroke-width="2"/>
      <text x="100" y="85" font-size="18" text-anchor="middle">🏑</text>
      <text x="100" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#701a75" text-anchor="middle">Sports & Games</text>
      <text x="100" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#86198f" text-anchor="middle">Hockey & Skating</text>
      <!-- Pillar 2 -->
      <circle cx="230" cy="85" r="28" fill="#fae8ff" stroke="#a21caf" stroke-width="2"/>
      <text x="230" y="85" font-size="18" text-anchor="middle">🧘</text>
      <text x="230" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#701a75" text-anchor="middle">Yoga & Asanas</text>
      <text x="230" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#86198f" text-anchor="middle">Flexibility & Calm</text>
      <!-- Pillar 3 -->
      <circle cx="360" cy="85" r="28" fill="#fae8ff" stroke="#a21caf" stroke-width="2"/>
      <text x="360" y="85" font-size="18" text-anchor="middle">🥗</text>
      <text x="360" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#701a75" text-anchor="middle">Nutrition</text>
      <text x="360" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#86198f" text-anchor="middle">Fruits & Pulses</text>
      <!-- Pillar 4 -->
      <circle cx="480" cy="85" r="32" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/>
      <text x="480" y="85" font-size="20" text-anchor="middle">🇮🇳</text>
      <text x="480" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#831843" text-anchor="middle">Fit Nation</text>
      <text x="480" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#9d174d" text-anchor="middle">Strong Citizens</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#86198f" text-anchor="middle">"Active children build a dynamic, resilient, and forward-looking nation."</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Comprehension",
        q: "Answer the following from the poem: (a) Which game does Active Boy Anant play? (b) Which musical instruments are mentioned in the poem? (c) Who likes moving in rhythm?",
        ans: "<strong>(a)</strong> Active Boy Anant plays the national sport of <strong>hockey</strong>.<br><strong>(b)</strong> The musical instruments mentioned in the poem are the <strong>guitar</strong> and the <strong>sitar</strong>.<br><strong>(c)</strong> <strong>Musical Meena</strong> loves moving gracefully in rhythm to music.",
        marks: 3,
        rubric: [
          { key: "Identifies hockey for Anant", marks: "1.0 M" },
          { key: "Names guitar and sitar", marks: "1.0 M" },
          { key: "Names Meena moving in rhythm", marks: "1.0 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "What important life lesson does Graceful Girl Geeta learn during her roller skating practice?",
        ans: "While practicing roller skating, Geeta occasionally loses balance and falls. Instead of giving up or crying, she learns from her mistakes, stands back up with a brave smile, adjusts her posture, and skates forward with greater balance and confidence.",
        marks: 2,
        rubric: [
          { key: "Mentions learning from falls and mistakes", marks: "1.0 M" },
          { key: "Highlights resilience and perseverance", marks: "1.0 M" }
        ]
      },
      {
        category: "Let us Think • Think & Discuss",
        q: "Why is participating in regular outdoor sports superior to playing video games on mobile screens? List three health benefits.",
        ans: `<strong>Superiority of Outdoor Sports:</strong><br>
Outdoor sports engage the entire muscular and cardiovascular systems in fresh air, whereas sitting with mobile phones causes eye strain, obesity, and lethargy.<br><br>
<strong>Three Health Benefits:</strong><br>
1. <strong>Stronger Bones & Muscles:</strong> Running and jumping enhance bone mineral density and muscular stamina.<br>
2. <strong>Social Teamwork:</strong> Playing in teams teaches communication, empathy, sharing, and handling both victory and defeat gracefully.<br>
3. <strong>Sound Sleep & Mental Alertness:</strong> Physical exertion releases happy hormones and promotes restful, restorative night sleep.`,
        marks: 3,
        rubric: [
          { key: "Contrast between outdoor sports and sedentary mobile habits", marks: "1.5 M" },
          { key: "Three scientifically valid physical/mental health benefits", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Learn Words • Alliteration Activity",
        q: "The poem uses alliterative pairs like 'Active Anant', 'Graceful Geeta', and 'Musical Meena'. Create three original alliterative descriptions for your friends starting with the letters K, R, and S.",
        ans: "<strong>1. Letter K:</strong> <em>Kind-hearted Kabir</em> (always ready to share and help).<br><strong>2. Letter R:</strong> <em>Radiant Riya</em> (always smiling and spreading cheerful energy).<br><strong>3. Letter S:</strong> <em>Swift Sahil</em> (fastest runner on the football field).",
        marks: 3,
        rubric: [
          { key: "Three original alliterative names pairing positive qualities", marks: "3.0 M" }
        ]
      }
    ],
    cbq: {
      title: "School Morning Assembly Yoga Routine",
      text: "Delhi public schools introduced 15 minutes of Pranayama (breathing exercises) and Surya Namaskar (Sun Salutation) during daily morning assemblies. Teachers noticed that students were calmer and showed sharper concentration in first-period mathematics classes.",
      question: "How does the school's morning yoga initiative fulfill the vision of 'Fit Body, Fit Mind'? State two physiological reasons why deep breathing sharpens academic focus.",
      answer: "<strong>Fulfilling the Vision:</strong> Yoga harmonizes physical posture with mental stillness. A healthy body free from sluggishness directly sharpens the brain's cognitive faculties, turning the motto 'Fit Body, Fit Mind' into daily classroom reality.<br><br><strong>Two Physiological Reasons:</strong><br>1. <em>Enhanced Oxygen Delivery:</em> Deep breathing floods the cerebral cortex with fresh oxygen, boosting neural alertness and memory retention.<br>2. <em>Stress Reduction:</em> Controlled breathing stimulates the parasympathetic nervous system, lowering restlessness and anxiety before complex problem-solving tasks.",
      rubric: "1 Mark for holistic connection of physical health to mental acuity; 1 Mark for oxygenation and anxiety reduction mechanisms."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 8: THE LAGORI CHAMPIONS
  // -------------------------------------------------------------------------
  {
    id: "st8",
    num: 8,
    unit: "Unit 3: Fun with Games",
    title: "The Lagori Champions",
    subtitle: "Action-Packed Story on India's Traditional Game of Seven Stones, Strategy & Sportsmanship",
    concepts: [
      "Rules and mechanics of Lagori (also known as Pitthu or Satoliya in different parts of India).",
      "Equipment: Seven flat stones of decreasing size and a soft tennis ball.",
      "The epic match between the Sundarpur Tigers and the Green Warriors.",
      "Strategic role of team members: Strikers, agile runners, defenders, and stone stackers.",
      "The crowning glory of true sportsmanship: Celebrating friendship, honest effort, and mutual respect."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#b45309" text-anchor="middle">Lagori (Satoliya) — Seven Flat Stones Game Strategy</text>
      <!-- Stack of 7 Stones -->
      <ellipse cx="290" cy="120" rx="36" ry="8" fill="#78716c"/>
      <ellipse cx="290" cy="110" rx="31" ry="7" fill="#a8a29e"/>
      <ellipse cx="290" cy="101" rx="26" ry="6" fill="#78716c"/>
      <ellipse cx="290" cy="93" rx="21" ry="5" fill="#a8a29e"/>
      <ellipse cx="290" cy="86" rx="16" ry="4" fill="#78716c"/>
      <ellipse cx="290" cy="80" rx="12" ry="4" fill="#a8a29e"/>
      <ellipse cx="290" cy="75" rx="8" ry="3" fill="#dc2626"/>
      <text x="290" y="142" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#78350f" text-anchor="middle">7 Flat Stones Stack</text>
      <!-- Attacking Team -->
      <rect x="50" y="55" width="140" height="60" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" rx="8"/>
      <text x="120" y="78" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#92400e" text-anchor="middle">Sundarpur Tigers</text>
      <text x="120" y="98" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">1. Strike Stack with Ball</text>
      <text x="120" y="109" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">2. Rebuild 7 Stones Pile</text>
      <!-- Defending Team -->
      <rect x="390" y="55" width="140" height="60" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="8"/>
      <text x="460" y="78" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#14532d" text-anchor="middle">Green Warriors</text>
      <text x="460" y="98" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="middle">1. Catch Rebound Ball</text>
      <text x="460" y="109" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="middle">2. Tag Runners Below Knee</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">"Shout 'LAGORI!' the moment all seven stones are restacked safely."</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Comprehension",
        q: "What is Lagori, and what equipment is needed to play this traditional Indian game? What are its other regional names?",
        ans: "<strong>Game Definition:</strong> Lagori is a traditional Indian tag-and-rebuild team game played in an open courtyard.<br><br><strong>Equipment:</strong> It requires <strong>seven flat stones</strong> of graduating sizes stacked neatly on top of one another and a <strong>soft tennis ball</strong>.<br><br><strong>Regional Names:</strong> It is called <strong>Pitthu</strong> in Northern India, <strong>Satoliya</strong> in Rajasthan and Gujarat, and <strong>Ezhu Kallu</strong> in Southern India.",
        marks: 3,
        rubric: [
          { key: "Mentions 7 flat stones and tennis ball", marks: "1.5 M" },
          { key: "Cites regional names: Pitthu / Satoliya", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "Answer the following from the story: (a) What was the name of Deepa's team and their opponents? (b) Why did Captain Imran select Prakash for the team?",
        ans: "<strong>(a)</strong> Deepa's team was the <strong>Sundarpur Tigers</strong>, and their opponents were the <strong>Green Warriors</strong>.<br><br><strong>(b)</strong> Captain Imran selected Prakash because Prakash was exceptionally swift on his feet, agile at dodging balls, and famous as the fastest runner in the village.",
        marks: 3,
        rubric: [
          { key: "Names Sundarpur Tigers and Green Warriors", marks: "1.5 M" },
          { key: "Explains Prakash's sprinting speed and agility", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "How does a team score a win in Lagori? What happened in the final thrilling seconds of the match?",
        ans: "<strong>Scoring a Win:</strong> After a striker knocks down the stone stack with the ball, the attacking team must restack all seven stones in descending order and shout 'LAGORI!' before the defending team tags any attacker with the ball.<br><br><strong>Final Seconds:</strong> With six stones stacked and opponents aiming the ball directly at them, Prakash threw himself forward, dodged the ball with lightning reflexes, balanced the seventh top stone, and loudly cried 'LAGORI!' to clinch victory.",
        marks: 3,
        rubric: [
          { key: "Explains complete rules of restacking and shouting 'Lagori'", marks: "1.5 M" },
          { key: "Describes Prakash's heroic final stone placement", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Think & Discuss",
        q: "Why did the villagers clap for both teams, and why did the referee raise the hands of both captains? Do you agree with this gesture?",
        ans: "The villagers applauded both teams and the referee raised both captains' hands because both sides played with extraordinary heart, honesty, discipline, and mutual respect.<br><br>Yes, I wholeheartedly agree with this gesture. In authentic sports, honoring the spirited effort and sportsmanship of both teams matters far more than merely celebrating the winner.",
        marks: 3,
        rubric: [
          { key: "Explains celebration of sportsmanship and honest effort", marks: "1.5 M" },
          { key: "Justifies why mutual respect exceeds mere winning", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Reviving Traditional Outdoor Games in Modern Schools",
      text: "A school physical education department decided to replace digital gaming periods with traditional Indian games like Lagori, Kho-Kho, and Gilli-Danda during Saturday sports.",
      question: "Give two reasons why traditional Indian games like Lagori are economically accessible to every school. How do they develop tactical spatial intelligence?",
      answer: "<strong>1. Economic Accessibility:</strong> Traditional games require zero expensive branded gear. Any open playground, 7 discarded flat river stones or wooden blocks, and a rubber ball are all that is needed, ensuring children from all economic backgrounds can play together equally.<br><br><strong>2. Tactical Spatial Intelligence:</strong> Players must simultaneously calculate ball trajectory, estimate opponents' running distances, monitor teammates' positions, and plan defensive cover, training dynamic split-second decision-making under pressure.",
      rubric: "1 Mark for zero-cost equipment accessibility; 1 Mark for 360-degree spatial awareness and split-second tactical thinking."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 9: HEKKO
  // -------------------------------------------------------------------------
  {
    id: "st9",
    num: 9,
    unit: "Unit 3: Fun with Games",
    title: "Hekko",
    subtitle: "Fascinating Indigenous Folk Game of Nagaland: Man vs. Tiger Strategy & Human Chain Defense",
    concepts: [
      "Cultural heritage of Nagaland and its rich tradition of indigenous community games.",
      "The linguistic root of 'Hekko': 'Hek' (to challenge) and 'Ko' (the tiger).",
      "Two opposing teams: 'Aami' (The Humans / Man) and 'Aakho' (The Tigers).",
      "Field setup: Eleven players in each team defending an inner circle through human chains.",
      "The word 'Joko' (I surrender) and values of fair play, agility, and communal joy."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e3a8a" text-anchor="middle">Hekko (Nagaland) — 'Challenging the Tiger' Game Field</text>
      <!-- Boundary Circle -->
      <circle cx="290" cy="88" r="45" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
      <text x="290" y="80" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1e40af" text-anchor="middle">Aami Team (Man)</text>
      <text x="290" y="95" font-family="system-ui, sans-serif" font-size="8" fill="#1d4ed8" text-anchor="middle">11 Players Human Chain</text>
      <!-- Aakho (Tigers outside) -->
      <circle cx="170" cy="88" r="22" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
      <text x="170" y="85" font-size="14" text-anchor="middle">🐅</text>
      <text x="170" y="122" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9a3412" text-anchor="middle">Aakho 1 (Tiger)</text>
      <circle cx="410" cy="88" r="22" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
      <text x="410" y="85" font-size="14" text-anchor="middle">🐅</text>
      <text x="410" y="122" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9a3412" text-anchor="middle">Aakho 2 (Tiger)</text>
      <text x="290" y="150" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">"When tagged inside the circle, the tiger admits capture by shouting 'JOKO!'"</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Comprehension",
        q: "What does the word 'Hekko' literally mean, and from which Indian state does this folk game originate?",
        ans: "The word <strong>'Hekko'</strong> literally translates to <strong>'Challenging the Tiger'</strong>. It is derived from the indigenous Naga roots <em>'Hek'</em> (meaning to challenge) and <em>'Ko'</em> (meaning tiger).<br><br>This thrilling traditional folk game originates from the northeastern state of <strong>Nagaland</strong>.",
        marks: 3,
        rubric: [
          { key: "Translates 'Challenging the Tiger' ('Hek' = challenge, 'Ko' = tiger)", marks: "1.5 M" },
          { key: "Identifies origin from Nagaland", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "What are the two competing teams called in Hekko, and how many players participate on each side?",
        ans: "The two competing teams in Hekko are:<br>1. <strong>Aami:</strong> Representing 'Man' (Humans).<br>2. <strong>Aakho:</strong> Representing the 'Tiger'.<br><br>Each team consists of exactly <strong>eleven (11) players</strong>.",
        marks: 2,
        rubric: [
          { key: "Identifies Aami (Man) and Aakho (Tiger)", marks: "1.0 M" },
          { key: "Specifies 11 players per team", marks: "1.0 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "How do the players of the Aami team defend their circle? What must an Aakho player say when caught?",
        ans: "<strong>Defense Strategy:</strong> The eleven players of the Aami team stand inside a large marked circular ring, link their hands tightly to form a defensive human chain, and coordinate their steps to block Aakho players from entering or pushing them out.<br><br><strong>When Caught:</strong> When an attacking Aakho player steps into the circle and is tagged or encircled by the Aami defenders, he must loudly say <strong>'Joko'</strong> (which means 'I surrender') to acknowledge capture.",
        marks: 3,
        rubric: [
          { key: "Explains linked-hand human chain defense inside ring", marks: "1.5 M" },
          { key: "Identifies surrender code 'Joko'", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Think & Discuss",
        q: "If you were playing Hekko, which team would you choose to join—Aami or Aakho? Give reasons based on team strategy.",
        ans: "If given the choice, I would prefer to join the <strong>Aami team</strong>.<br><br><strong>Reasons:</strong> The Aami team requires intense collective coordination, interlocking communication, and mutual trust to maintain an unbroken human chain. While the tiger (Aakho) attacks as an individual runner, the Aami defenders prove that human solidarity and organized unity can overcome raw individual strength.",
        marks: 3,
        rubric: [
          { key: "Clear team preference stated", marks: "1.0 M" },
          { key: "Strategic justification highlighting teamwork versus solo agility", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Inter-State Tribal Games Carnival",
      text: "During the National Youth Festival, students from Punjab and Kerala were taught Hekko by Naga student delegates. The visiting students quickly observed that Hekko shared defensive chain concepts with Kabaddi.",
      question: "Compare the defensive human chain in Hekko with the corner-chain tackling in Kabaddi. What does this demonstrate about the cultural unity of Indian games?",
      answer: "<strong>Comparative Tactic:</strong> In both Hekko and Kabaddi, defenders hold hands in pairs or chains. Linking hands allows players to pivot around the attacker, generate collective pulling leverage, and prevent the raider/tiger from escaping back across the boundary line.<br><br><strong>Cultural Unity:</strong> This structural similarity demonstrates that despite geographical distance and diverse languages, India's traditional games share universal core values of cooperative defense, strategic agility, and harmonious community play.",
      rubric: "1 Mark for mechanical comparison of linked-hand chain leverage; 1 Mark for thematic unity across regional Indian games."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 10: THE SWING
  // -------------------------------------------------------------------------
  {
    id: "st10",
    num: 10,
    unit: "Unit 4: Up High",
    title: "The Swing",
    subtitle: "Classic Lyric Poem by Robert Louis Stevenson on Childhood Wonder, Flight & Perspective",
    concepts: [
      "The delightful sensation of swinging high up into the blue sky.",
      "Changing perspectives: Flying over the garden wall to view rivers, trees, and cattle across the countryside.",
      "The rhythm of the poem mimicking the upward surge and downward swoop of a playground swing.",
      "Appreciation of the natural landscape and the innocent joy of outdoor play."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0369a1" text-anchor="middle">The Swing — Up in the Air and Over the Wall</text>
      <!-- Tree Branch -->
      <path d="M50 40 Q200 45 350 40" stroke="#78350f" stroke-width="8" stroke-linecap="round"/>
      <!-- Swing Ropes -->
      <line x1="180" y1="42" x2="220" y2="105" stroke="#94a3b8" stroke-width="2.5"/>
      <line x1="220" y1="42" x2="260" y2="105" stroke="#94a3b8" stroke-width="2.5"/>
      <!-- Wooden Plank Seat -->
      <rect x="210" y="105" width="60" height="8" fill="#ca8a04" rx="2"/>
      <text x="240" y="100" font-size="20" text-anchor="middle">🧒</text>
      <!-- Countryside View -->
      <rect x="360" y="55" width="180" height="70" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5" rx="8"/>
      <text x="450" y="75" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#14532d" text-anchor="middle">Vistas Seen High Up:</text>
      <text x="450" y="93" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="middle">🌊 Rivers &amp; Flowing Streams</text>
      <text x="450" y="107" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="middle">🌳 Tall Trees &amp; Green Cattle</text>
      <text x="450" y="120" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="middle">🏡 Brown Countryside Roofs</text>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0284c7" text-anchor="middle">"Oh, I do think it the pleasantest thing ever a child can do!"</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Comprehension",
        q: "What does the poet consider the 'pleasantest thing ever a child can do'? Which lines express his absolute delight?",
        ans: "The poet considers swinging <strong>'up in the air and over the wall'</strong> into the clear blue sky to be the most delightful experience a child can ever enjoy.<br><br>His delight is passionately captured in the opening lines:<br><em>'How do you like to go up in a swing,<br>Up in the air so blue?<br>Oh, I do think it the pleasantest thing<br>Ever a child can do!'</em>",
        marks: 3,
        rubric: [
          { key: "Identifies swinging high in the blue air", marks: "1.5 M" },
          { key: "Quotes or cites the opening stanza lines accurately", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "What wide panoramic sights does the child see when the swing rises high above the garden wall?",
        ans: "When the swing ascends high above the garden wall, the child looks across the wide countryside and sees:<br>1. <strong>Rivers:</strong> Winding streams glistening in the sun.<br>2. <strong>Trees:</strong> Green treetops swaying in the breeze.<br>3. <strong>Cattle:</strong> Cows, goats, and horses grazing peacefully in the fields.<br>4. <strong>Country Roofs:</strong> Brown roofs of village houses stretching into the distance.",
        marks: 3,
        rubric: [
          { key: "Lists rivers, trees, cattle, and countryside roofs", marks: "2.0 M" },
          { key: "Explains bird's-eye perspective gained through height", marks: "1.0 M" }
        ]
      },
      {
        category: "Let us Think • Poetic Analysis",
        q: "Why does the poet describe the air as 'so blue'? What contrasting colors are seen when looking down?",
        ans: "The poet describes the air as <strong>'so blue'</strong> because soaring high up creates the illusion of diving directly into the vast, cloudless blue sky.<br><br>In contrast, when the swing swoops downward, the colors change vividly to the <strong>green garden</strong> beneath and the <strong>brown roof</strong> of the shed or house.",
        marks: 3,
        rubric: [
          { key: "Explains blue sky illusion at peak of swing", marks: "1.5 M" },
          { key: "Identifies contrasting downward view: green garden and brown roof", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Think & Discuss",
        q: "Have you ever swung on a tree swing or a park swing? Describe how your body feels as you rush up toward the sky and swoop down toward the grass.",
        ans: "When I sit on the wooden plank of a swing and pump my legs, a cool breeze rushes against my face and ruffles my hair. As the swing surges upward, my stomach tickles with thrilling weightlessness, and for a fleeting second, I feel as free as a flying bird.<br><br>As the swing plunges downward, gravity pulls my feet back toward the lush green grass, filling me with joyful laughter.",
        marks: 3,
        rubric: [
          { key: "Vivid description of sensory and bodily sensations", marks: "1.5 M" },
          { key: "Expresses emotional joy of rising and swooping down", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Physics of the Playground Pendulum",
      text: "During a Class 4 science activity, students observed that a swing behaves like a giant pendulum. When pushed higher, it travels further and faster before momentarily pausing at its peak height.",
      question: "How does Robert Louis Stevenson capture this scientific transition between upward flight and downward return in the poem's rhyme scheme?",
      answer: "<strong>Poetic Rhythm & Pendulum Motion:</strong> Stevenson uses an alternating ABAB musical rhyme scheme (<em>swing/thing</em>, <em>blue/do</em>; <em>wall/all</em>, <em>wide/countryside</em>). The buoyant, rising meter carries the reader 'Up, up, up' into the air, while the subsequent stanza gently eases downward ('Till I look down on the garden green, Down on the roof so brown'). The rhythm flawlessly mirrors the rhythmic kinetic acceleration and deceleration of a pendulum.",
      rubric: "1 Mark for identifying alternating rhyme scheme; 1 Mark for matching meter cadence to physical swing motion."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 11: A JOURNEY TO THE MAGICAL MOUNTAINS
  // -------------------------------------------------------------------------
  {
    id: "st11",
    num: 11,
    unit: "Unit 4: Up High",
    title: "A Journey to the Magical Mountains",
    subtitle: "Adventure Narrative in the Himalayas: Family Bonds, Mountain Ecology & Environmental Stewardship",
    concepts: [
      "Young girl Minam and her grandfather, a retired Sherpa who loves the Himalayan peaks.",
      "Preparing for a mountain trek: Packing essentials (rotis, achaar, water bottles, woolen caps).",
      "Experiencing the changing altitude, crisp alpine air, crystal-clear glacial streams, and prayer flags.",
      "First encounter with snow: Joy of building a snowman and touching powdery snowflakes.",
      "The sacred pledge: Respecting fragile mountain ecosystems and leaving zero plastic litter behind."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f9ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0369a1" text-anchor="middle">Minam's Trek — Journey to the Magical Himalayas</text>
      <!-- Mountain Peaks -->
      <polygon points="50,130 140,50 230,130" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <polygon points="120,50 140,50 155,70 135,75 125,65" fill="#ffffff"/>
      <polygon points="180,130 290,40 400,130" fill="#7dd3fc" stroke="#0284c7" stroke-width="2"/>
      <polygon points="265,40 290,40 310,65 290,70 275,60" fill="#ffffff"/>
      <polygon points="350,130 450,55 540,130" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <polygon points="430,55 450,55 465,75 445,80" fill="#ffffff"/>
      <!-- Trekkers -->
      <circle cx="270" cy="115" r="12" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
      <text x="270" y="119" font-size="12" text-anchor="middle">👴</text>
      <circle cx="300" cy="118" r="10" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
      <text x="300" y="122" font-size="10" text-anchor="middle">👧</text>
      <text x="290" y="150" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">"We carry away only memories, leave behind only footprints."</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Comprehension",
        q: "Who was Minam, and what special invitation did her grandfather give her one sunny morning?",
        ans: "<strong>Who Minam Was:</strong> Minam was an adventurous young girl who lived in a scenic village nestled at the foothills of the mighty Himalayas with her grandfather, who was once an experienced mountain Sherpa.<br><br><strong>Grandfather's Invitation:</strong> One bright sunny morning, her grandfather noticed how strong and healthy she had grown and said: <em>'Minam, your legs are strong now. Today, I will take you on a magical journey high up into the heart of the mountains.'</em>",
        marks: 3,
        rubric: [
          { key: "Identifies Minam and grandfather's Sherpa background", marks: "1.5 M" },
          { key: "Explains morning invitation to climb the Himalayas", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "What supplies did Minam pack in her rucksack, and where did they pause for their afternoon lunch?",
        ans: "<strong>Rucksack Supplies:</strong> Minam thoughtfully packed freshly baked rotis wrapped in cloth, spicy homemade lemon pickle (achaar), two stainless steel water bottles, and crisp mountain apples.<br><br><strong>Lunch Spot:</strong> They paused beside a bubbling, ice-cold mountain stream bordered by smooth river pebbles. Minam dipped her tired feet into the cool water and joyfully watched silver fish dart across the riverbed while eating her lunch.",
        marks: 3,
        rubric: [
          { key: "Lists rotis, achaar, water bottles, and apples", marks: "1.5 M" },
          { key: "Describes riverside lunch spot with cool glacial water", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "How did Minam react when she touched snow for the very first time in her life? What did she build with her grandfather?",
        ans: "When Minam reached the snowline, she gasped in pure wonder. She scooped up a handful of powdery snow, delighted by its cool, soft texture, and laughed aloud with excitement.<br><br>Together with her grandfather, she rolled large snowballs and built a friendly little snowman, using pine twigs for its arms and small black river stones for its eyes and smiling mouth.",
        marks: 3,
        rubric: [
          { key: "Describes wonder and sensory excitement of touching snow", marks: "1.5 M" },
          { key: "Details building a snowman using twigs and river pebbles", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "What solemn promise did Minam make to her grandfather and the mountains before descending?",
        ans: "Before descending to their valley home, Minam looked up at the towering, snow-capped Himalayan peaks and placed her hand over her heart. She solemnly promised her grandfather that she would forever respect, love, and protect nature, and ensure that no traveler ever litters or harms the pristine beauty of the mountains.",
        marks: 3,
        rubric: [
          { key: "Mentions pledge of environmental respect and protection", marks: "1.5 M" },
          { key: "Highlights preserving mountain purity and zero littering", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Eco-Tourism & Clean Himalayan Trails",
      text: "Every summer, thousands of tourists leave discarded plastic bottles, chip bags, and aluminum cans along high-altitude trekking trails in Ladakh and Himachal Pradesh, endangering grazing mountain goats (Ibex) and contaminating melting glaciers.",
      question: "How does Minam's mountain promise oppose the habits of careless tourists? State two practical rules every eco-trekker must follow.",
      answer: "<strong>Contrast with Minam's Pledge:</strong> While careless tourists treat sacred peaks as dumping grounds, Minam internalized her grandfather's golden Sherpa ethos: nature must be revered and left untouched for future generations.<br><br><strong>Two Eco-Trekker Rules:</strong><br>1. <em>Leave No Trace:</em> Carry back 100% of non-biodegradable waste in personal trash bags to plains municipal recycling centers.<br>2. <em>Use Reusable Canteens:</em> Refill durable stainless steel water bottles from verified boiled/filtered spring points instead of buying single-use commercial plastic bottles.",
      rubric: "1 Mark for contrasting Minam's reverence with irresponsible tourism; 1 Mark for two actionable waste-mitigation trekking rules."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 12: MAHESHWAR
  // -------------------------------------------------------------------------
  {
    id: "st12",
    num: 12,
    unit: "Unit 4: Up High",
    title: "Maheshwar",
    subtitle: "Historical & Cultural Travelogue: Rani Ahilyabai Holkar, Narmada River Ghats & Handloom Weaving",
    concepts: [
      "The historic temple town of Maheshwar situated along the sacred Narmada River in Madhya Pradesh.",
      "Life and legacy of Rajmata Ahilyabai Holkar: A visionary, benevolent queen and administrator.",
      "Architectural splendor: Overhanging balconies, carved stone temples, and red sandstone brought from Gujarat and Rajasthan.",
      "The guardian statue of Ahilyabai holding a Shiva Lingam at the fort palace gate.",
      "The world-renowned Maheshwari handloom sarees and indigenous textile craftsmanship."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">Maheshwar Fort — Heritage on the Banks of the Narmada</text>
      <!-- Fort Outline -->
      <rect x="70" y="55" width="130" height="70" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
      <polygon points="65,55 80,40 100,55 120,40 140,55 160,40 180,55 200,40 205,55" fill="#f97316"/>
      <text x="135" y="90" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#7c2d12" text-anchor="middle">Maheshwar Fort</text>
      <text x="135" y="105" font-family="system-ui, sans-serif" font-size="8" fill="#9a3412" text-anchor="middle">Overhanging Balconies</text>
      <!-- Ahilyabai Statue -->
      <circle cx="260" cy="85" r="28" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="260" y="85" font-size="18" text-anchor="middle">👑</text>
      <text x="260" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#854d0e" text-anchor="middle">Rani Ahilyabai</text>
      <text x="260" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#a16207" text-anchor="middle">Guardian of People</text>
      <!-- Handloom Saree -->
      <rect x="350" y="55" width="160" height="70" fill="#fdf2f8" stroke="#db2777" stroke-width="1.5" rx="8"/>
      <text x="430" y="80" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9d174d" text-anchor="middle">Maheshwari Handlooms</text>
      <text x="430" y="96" font-family="system-ui, sans-serif" font-size="9" fill="#be185d" text-anchor="middle">Silk &amp; Cotton Weaving</text>
      <text x="430" y="110" font-family="system-ui, sans-serif" font-size="8" fill="#db2777" text-anchor="middle">Traditional Zari Borders</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">"Ahilyabai's legacy of peace, welfare, and art shines across centuries."</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Comprehension",
        q: "Who was Rani Ahilyabai Holkar? Name the historic town she ruled and the river on whose banks it is located.",
        ans: "<strong>Who She Was:</strong> Rani Ahilyabai Holkar (1725–1795) was the noble and revered queen of the Malwa kingdom, belonging to the illustrious Holkar dynasty. She is celebrated across Indian history for her wisdom, simple living, justice, and generous patronage of public welfare.<br><br><strong>Location:</strong> She ruled from her capital town of <strong>Maheshwar</strong>, located on the sacred, broad banks of the <strong>Narmada River</strong> in Madhya Pradesh.",
        marks: 3,
        rubric: [
          { key: "Identifies Queen Ahilyabai Holkar and her noble governance", marks: "1.5 M" },
          { key: "Names Maheshwar and the Narmada River", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "What architectural features make the Maheshwar Fort unique? Where were the red building stones brought from?",
        ans: "<strong>Architectural Features:</strong> Maheshwar Fort is famous for its grand stone bastions overlooking the wide river ghats, delicate stone carvings of peacocks and elephants, and unique overhanging wooden balconies (jharokhas) that seem to float gracefully above the water.<br><br><strong>Building Materials:</strong> The special durable red stones used to construct the palace gates and temples were quarried and transported from <strong>Gujarat and Rajasthan</strong>.",
        marks: 3,
        rubric: [
          { key: "Describes river ghat bastions, stone carvings, and overhanging balconies", marks: "1.5 M" },
          { key: "Names Gujarat and Rajasthan as sources of red sandstone", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Comprehension",
        q: "What does the statue of Rani Ahilyabai in front of the palace depict, and what message does it symbolize?",
        ans: "The life-size statue depicts Rani Ahilyabai sitting serenely on her royal throne, dressed in simple traditional attire and holding a sacred <strong>Shiva Lingam</strong> in her hands.<br><br>It symbolizes her devout spirituality, her belief that she ruled not as an autocrat but as a humble trustee of God, and her eternal guardian watch over the welfare of her citizens.",
        marks: 3,
        rubric: [
          { key: "Describes statue sitting with Shiva Lingam in simple attire", marks: "1.5 M" },
          { key: "Explains symbolism of humble trusteeship and guardian care", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Culture & Handlooms",
        q: "What are Maheshwari sarees, and how did Rani Ahilyabai encourage the local handloom industry?",
        ans: "Maheshwari sarees are world-renowned traditional handloom textiles woven with a delicate blend of fine silk and cotton, famous for their reversible zari borders inspired by temple wall carvings.<br><br>Rani Ahilyabai personally invited master weavers from Surat, Mandu, and Hyderabad to settle in Maheshwar, designed several border motifs herself, and established royal patronage to ensure stable livelihoods for weaver artisan families.",
        marks: 3,
        rubric: [
          { key: "Describes silk-cotton blend and reversible zari temple borders", marks: "1.5 M" },
          { key: "Explains Ahilyabai's invitation of weavers and royal patronage", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Preserving India's Traditional Handloom Heritage",
      text: "Modern automated power looms can produce synthetic polyester sarees at one-fourth the price of authentic Maheshwari silk handlooms, causing many younger generation weavers to abandon their traditional wooden handlooms.",
      question: "Why is it vital for Indian citizens to value and support genuine handloom weavers like those in Maheshwar? State two measures to sustain handloom heritage.",
      answer: "<strong>Why Support Handlooms:</strong> Handloom weaving represents centuries of living cultural art, sustainable organic fibers, and decentralized rural livelihoods. Power looms produce uniform plastic copies, while handlooms embody human soul, regional identity, and exquisite craftsmanship.<br><br><strong>Two Sustainability Measures:</strong><br>1. <em>Direct Handloom Exhibitions & Fair Pricing:</em> Eliminating middlemen so that weaver cooperatives receive fair remuneration directly from consumers.<br>2. <em>GI Tag (Geographical Indication) Awareness:</em> Educating citizens to check for authentic Handloom Mark and GI certifications when purchasing heritage weaves.",
      rubric: "1 Mark for cultural and ecological value of handlooms; 1 Mark for fair-trade market access and GI certification enforcement."
    }
  }
];

module.exports = { santoorChapters };
