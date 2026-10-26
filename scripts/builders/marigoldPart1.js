// scripts/builders/marigoldPart1.js
// NCERT Class 2 English: "Marigold Book 2" - Chapters 1 to 5
// First Day at School, Haldi's Adventure, I am Lucky!, I Want, A Smile

const marigoldPart1 = [
  {
    id: "mrg1", num: 1, unit: "Unit 1: First Day & School Life",
    title: "First Day at School",
    subtitle: "Poem Recitation, New School Doubts, Feelings & Classroom Pets",
    concepts: [
      "Poem comprehension: A child's innocent thoughts on entering school for the first time.",
      "Doubts about drawing abilities, peer acceptance, and teacher's warmth (Mom or Gran).",
      "Fondness for pets: wondering if the pet puppy will wonder where the child has gone.",
      "Expressing childhood feelings: nervousness, excitement, curiosity, and pride."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><rect x="80" y="30" width="70" height="60" fill="#3b82f6" rx="6"/><text x="115" y="65" font-family="sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">School</text><circle cx="250" cy="55" r="22" fill="#f59e0b"/><text x="250" y="60" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Wonder</text><circle cx="380" cy="55" r="20" fill="#10b981"/><text x="380" y="60" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Puppy</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">I wonder if my drawing will be as good as theirs...</text></svg>`,
    cbq: {
      title: "Rohan's First Day Classroom Reflections",
      text: "On his very first day in Class 2, Rohan stood at the school gate holding his father's hand tightly. He thought: 'Will other boys and girls like me? Will my teacher smile like my grandmother? Will my pet dog Bruno search for me under the cot?'",
      question: "What were Rohan's three main wonders? How did these match the poem 'First Day at School'?",
      answer: "1. Rohan wondered: (a) If other children would like him or just stare, (b) If his teacher would look kind like his mother or grandmother, and (c) If his pet dog would miss him at home.<br>2. These match the exact four stanzas of the poem: wondering about drawing, peer friendship, teacher's loving face, and the pet puppy wondering where the child is.",
      rubric: "1.5 M for identifying all three worries + 1.5 M for matching them to poem stanzas"
    },
    questions: [
      {
        category: "Reading is Fun • Poem Doubts",
        q: "What does the child in the poem wonder about his drawing?",
        ans: "<strong>Answer:</strong><br>• The child wonders if his drawing will be <strong>as good as that of the other children</strong> in the class.",
        marks: 1,
        rubric: [{ key: "Drawing as good as other children stated", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Classmates",
        q: "What does the child wonder about his classmates?",
        ans: "<strong>Answer:</strong><br>• The child wonders whether his classmates will <strong>like him</strong> and be friendly, or just <strong>stare at him</strong> like a stranger.",
        marks: 2,
        rubric: [{ key: "Whether they will like him", marks: "1 M" }, { key: "Or just stare at him", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Teacher's Look",
        q: "Who does the child wonder his teacher will look like?",
        ans: "<strong>Answer:</strong><br>• The child wonders if his teacher will look like his <strong>Mother ('Mom')</strong> or his <strong>Grandmother ('Gran')</strong>.",
        marks: 2,
        rubric: [{ key: "Mom identified", marks: "1 M" }, { key: "Gran (Grandmother) identified", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Pet Puppy",
        q: "What does the child wonder about his puppy at home?",
        ans: "<strong>Answer:</strong><br>• The child wonders if his little pet puppy will <strong>wonder where he is gone</strong> during school hours.",
        marks: 1,
        rubric: [{ key: "Puppy wondering where he is gone", marks: "1 M" }]
      },
      {
        category: "Talk Time • First Day Feelings",
        q: "Do you remember your first day at school? How did you feel: (A) Angry (B) Shy (C) Happy (D) Sad? Describe in one sentence.",
        ans: "<strong>Answer:</strong><br>• On my first day at school, I felt a little <strong>shy and excited</strong>, but seeing my smiling teacher made me feel very happy.",
        marks: 2,
        rubric: [{ key: "Clear feeling stated", marks: "1 M" }, { key: "Personal reflection sentence", marks: "1 M" }]
      },
      {
        category: "Word Building • School Bag Items",
        q: "Name five things that you carry inside your school bag.",
        ans: "<strong>Answer:</strong><br>1. English textbook<br>2. Maths notebook<br>3. Pencil box with pencils and eraser<br>4. Ruler (scale)<br>5. Water bottle and tiffin box.",
        marks: 3,
        rubric: [{ key: "At least 5 valid school bag items named", marks: "3 M" }]
      },
      {
        category: "Vocabulary • Word Search",
        q: "Find the short form for 'Grandmother' used in the poem.",
        ans: "<strong>Answer:</strong><br>• The short form used in the poem is <strong>'Gran'</strong>.",
        marks: 1,
        rubric: [{ key: "'Gran' correct", marks: "1 M" }]
      },
      {
        category: "Rhyming Words in Poem",
        q: "Find the word in the poem that rhymes with:<br>(a) Stare — _______<br>(b) Look — _______",
        ans: "<strong>Answers:</strong><br>(a) Stare rhymes with <strong>There</strong>.<br>(b) Look rhymes with <strong>Book</strong>.",
        marks: 2,
        rubric: [{ key: "(a) There", marks: "1 M" }, { key: "(b) Book", marks: "1 M" }]
      },
      {
        category: "Action Verbs • Classroom Words",
        q: "Fill in with [read, write, draw, share]:<br>(a) I like to _______ stories with colourful pictures.<br>(b) I _______ my crayons with my bench partner.",
        ans: "<strong>Answers:</strong><br>(a) I like to <strong>draw / read</strong> stories.<br>(b) I <strong>share</strong> my crayons with my bench partner.",
        marks: 2,
        rubric: [{ key: "(a) read/draw", marks: "1 M" }, { key: "(b) share", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'wonder'.",
        ans: "<strong>Sample Sentence:</strong><br>• I often wonder how little birds build such intricate nests high up in trees.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence using 'wonder' correctly", marks: "2 M" }]
      },
      {
        category: "Opposites • Feelings",
        q: "Write the opposite of:<br>(a) Good × _______<br>(b) Friend × _______<br>(c) Like × _______",
        ans: "<strong>Answers:</strong><br>(a) Good × <strong>Bad</strong><br>(b) Friend × <strong>Enemy / Stranger</strong><br>(c) Like × <strong>Dislike / Hate</strong>",
        marks: 3,
        rubric: [{ key: "(a) Bad", marks: "1 M" }, { key: "(b) Enemy/Stranger", marks: "1 M" }, { key: "(c) Dislike", marks: "1 M" }]
      },
      {
        category: "Classroom Etiquette • Sharing and Care",
        q: "If a new student joins your class and looks nervous, what should you do?",
        ans: "<strong>Step-by-Step Answer:</strong><br>1. Smile warmly and say: 'Hello! Welcome to our class!'<br>2. Introduce yourself, offer to share your desk or pencils, and show them around the classroom.",
        marks: 2,
        rubric: [{ key: "Warm greeting / welcoming gesture", marks: "1 M" }, { key: "Friendly introduction and sharing", marks: "1 M" }]
      },
      {
        category: "Grammar • Naming Words (Nouns)",
        q: "Circle the nouns (naming words) in the line: 'My puppy waits near the wooden gate.'",
        ans: "<strong>Answer:</strong><br>• The nouns are: <strong>puppy</strong> (animal) and <strong>gate</strong> (thing).",
        marks: 2,
        rubric: [{ key: "puppy identified", marks: "1 M" }, { key: "gate identified", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) The child in the poem is going to school for the first time.<br>(b) The child hates dogs and pets.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong>. It is his first day at school.<br>(b) <strong>False</strong>. The child loves his puppy and wonders if the puppy will miss him.",
        marks: 2,
        rubric: [{ key: "(a) True", marks: "1 M" }, { key: "(b) False with reason", marks: "1 M" }]
      },
      {
        category: "Poem Reflection",
        q: "Why do many young children feel nervous on their first day of school?",
        ans: "<strong>Summary:</strong><br>• It is their first time stepping away from the safety of home and parents into a new environment with unfamiliar teachers and peers.<br>• However, as soon as they make friends and participate in games, the classroom becomes a joyful second home.",
        marks: 2,
        rubric: [{ key: "Separation from familiar home explained", marks: "1 M" }, { key: "Comfort through friends and teachers described", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mrg2", num: 2, unit: "Unit 1: First Day & School Life",
    title: "Haldi’s Adventure",
    subtitle: "Encounter with Smiley the Giraffe, Reading Books & School Joy",
    concepts: [
      "Story comprehension: Haldi meets Smiley, an extraordinary giraffe wearing big glasses and holding a book.",
      "Smiley loves reading books and discussing stars, trees, birds, and school lessons.",
      "Haldi rides on Smiley's tall back to reach her school before the morning bell.",
      "The thrill of learning, reading, and discovering wonder in everyday life."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fefce8" rx="10"/><rect x="80" y="30" width="50" height="70" fill="#f59e0b" rx="4"/><circle cx="105" cy="20" r="16" fill="#f59e0b"/><rect x="95" y="16" width="20" height="8" fill="#1e293b" rx="2"/><rect x="145" y="50" width="30" height="25" fill="#3b82f6" rx="2"/><circle cx="270" cy="55" r="18" fill="#ec4899"/><text x="270" y="60" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Haldi</text><rect x="360" y="35" width="80" height="55" fill="#10b981" rx="4"/><text x="400" y="65" font-family="sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">School</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#713f12" text-anchor="middle">Haldi rode on Smiley's back and reached school on time!</text></svg>`,
    cbq: {
      title: "Haldi's Morning Encounter",
      text: "As Haldi walked to school one morning, she met a tall giraffe. The giraffe wore big spectacles and held a book in his hand. He smiled and said: 'Good morning, Haldi! My name is Smiley. Whenever you see me, you will smile.' Haldi stared at him because she had never seen a giraffe wearing spectacles before.",
      question: "What was the giraffe's name? What was unusual about his appearance? Why did Haldi say she loved school?",
      answer: "1. The giraffe's name was <strong>Smiley</strong>.<br>2. <strong>Unusual appearance:</strong> He wore <strong>big spectacles</strong> and held a <strong>book</strong> in his hand, unlike any normal wild animal.<br>3. Haldi loved school because she learned exciting things about <strong>stars, trees, birds, and animals</strong> every day.",
      rubric: "1 M for Smiley + 1 M for spectacles and book + 1 M for Haldi's school learning reasons"
    },
    questions: [
      {
        category: "Reading is Fun • The Meeting",
        q: "Where was Haldi going when she met the giraffe?",
        ans: "<strong>Answer:</strong><br>• Haldi was walking to her <strong>school</strong>.",
        marks: 1,
        rubric: [{ key: "Going to school correct", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Surprise",
        q: "Why did Haldi stare at the giraffe with surprise?",
        ans: "<strong>Answer:</strong><br>• Haldi stared at him because she had <strong>never seen a giraffe who wore big spectacles and held an open book</strong> in his hand.",
        marks: 2,
        rubric: [{ key: "Never seen such a giraffe", marks: "1 M" }, { key: "Wearing glasses and holding book described", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Reaching School",
        q: "How did Haldi reach her school without being late?",
        ans: "<strong>Answer:</strong><br>• She climbed onto the giraffe's back. Smiley ran with long fast strides, and Haldi reached the school playground just as the bell rang.",
        marks: 2,
        rubric: [{ key: "Rode on giraffe's back", marks: "1 M" }, { key: "Reached before the bell rang", marks: "1 M" }]
      },
      {
        category: "Talk Time • What Do You Learn?",
        q: "What are some exciting things Haldi learns about at school?",
        ans: "<strong>Answer:</strong><br>• Haldi learns about <strong>the stars, the trees, the birds, and different animals</strong>.",
        marks: 2,
        rubric: [{ key: "Stars and trees named", marks: "1 M" }, { key: "Birds and animals named", marks: "1 M" }]
      },
      {
        category: "Word Building • Compound Words",
        q: "Combine two words to make a compound word:<br>(a) Play + ground = _______<br>(b) Class + room = _______<br>(c) Sun + shine = _______",
        ans: "<strong>Answers:</strong><br>(a) Play + ground = <strong>Playground</strong><br>(b) Class + room = <strong>Classroom</strong><br>(c) Sun + shine = <strong>Sunshine</strong>",
        marks: 3,
        rubric: [{ key: "(a) Playground", marks: "1 M" }, { key: "(b) Classroom", marks: "1 M" }, { key: "(c) Sunshine", marks: "1 M" }]
      },
      {
        category: "Describing Words • Adjectives",
        q: "Pick the correct describing word for each:<br>(a) A _______ giraffe (tall / short)<br>(b) A _______ morning (wonderful / salty)",
        ans: "<strong>Answers:</strong><br>(a) A <strong>tall</strong> giraffe.<br>(b) A <strong>wonderful</strong> morning.",
        marks: 2,
        rubric: [{ key: "(a) tall", marks: "1 M" }, { key: "(b) wonderful", marks: "1 M" }]
      },
      {
        category: "Opposites Drill",
        q: "Write the opposite of:<br>(a) Late × _______<br>(b) Fast × _______<br>(c) Morning × _______",
        ans: "<strong>Answers:</strong><br>(a) Late × <strong>Early / On time</strong><br>(b) Fast × <strong>Slow</strong><br>(c) Morning × <strong>Evening</strong>",
        marks: 3,
        rubric: [{ key: "(a) Early", marks: "1 M" }, { key: "(b) Slow", marks: "1 M" }, { key: "(c) Evening", marks: "1 M" }]
      },
      {
        category: "Animal Fact • Giraffe Anatomy",
        q: "What is special about a giraffe's neck and tongue?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• A giraffe has the <strong>longest neck</strong> in the animal kingdom, allowing it to eat tender leaves from tall treetops.<br>• It also has a long, tough bluish tongue that helps it strip leaves without getting hurt by thorns.",
        marks: 2,
        rubric: [{ key: "Longest neck to reach treetops", marks: "1 M" }, { key: "Long tongue adaptation explained", marks: "1 M" }]
      },
      {
        category: "Grammar • Pronouns (I, You, She)",
        q: "Fill in with [I, You, She]:<br>(a) Haldi is a smart girl. ___ loves school.<br>(b) Smiley said, 'Whenever ___ see me, you will smile.'",
        ans: "<strong>Answers:</strong><br>(a) <strong>She</strong> loves school.<br>(b) 'Whenever <strong>you</strong> see me, you will smile.'",
        marks: 2,
        rubric: [{ key: "(a) She", marks: "1 M" }, { key: "(b) you", marks: "1 M" }]
      },
      {
        category: "Spelling Check",
        q: "Correct the spelling of these words from the chapter:<br>(a) ADVENTUR = _______<br>(b) GIRAFFE = _______",
        ans: "<strong>Answers:</strong><br>(a) <strong>ADVENTURE</strong><br>(b) <strong>GIRAFFE</strong> (already correct, or G-I-R-A-F-F-E)",
        marks: 2,
        rubric: [{ key: "(a) ADVENTURE", marks: "1 M" }, { key: "(b) GIRAFFE verified", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'adventure'.",
        ans: "<strong>Sample Sentence:</strong><br>• Exploring the forest trail with my uncle was an exciting adventure.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'adventure'", marks: "2 M" }]
      },
      {
        category: "Feelings and Expressions",
        q: "Why was the giraffe named 'Smiley'?",
        ans: "<strong>Answer:</strong><br>• He was named Smiley because he had a cheerful personality, wore a pleasant grin, and made everyone who met him smile happily.",
        marks: 2,
        rubric: [{ key: "Cheerful personality", marks: "1 M" }, { key: "Brought smiles to everyone", marks: "1 M" }]
      },
      {
        category: "Days of the Week Link",
        q: "On which days did Haldi go to school?",
        ans: "<strong>Answer:</strong><br>• Haldi went to school on <strong>Mondays, Tuesdays, Wednesdays, Thursdays, and Fridays</strong> (and Saturdays), while Sunday was her holiday.",
        marks: 2,
        rubric: [{ key: "Weekday school days named", marks: "2 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) Haldi missed her school bell because she talked to Smiley.<br>(b) Smiley loved reading storybooks.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. She reached school exactly on time on Smiley's back.<br>(b) <strong>True</strong>. Smiley was very fond of books and learning.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "What is the moral of 'Haldi’s Adventure'?",
        ans: "<strong>Summary:</strong><br>• School is a magical place where curiosity, reading, and friendship turn every day into a joyful adventure of discovery.",
        marks: 2,
        rubric: [{ key: "Joy of learning and school adventure emphasized", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mrg3", num: 3, unit: "Unit 2: Gratitude & Nature",
    title: "I am Lucky!",
    subtitle: "Poem of Gratitude, Animal Gifts & Being Thankful to Nature",
    concepts: [
      "Poem appreciation: Celebrating what makes each creature unique and joyful.",
      "Creature gifts: Butterfly's wings, Myna's song, Fish's wriggle, Elephant's trunk, Kangaroo's hop, Octopus's eight arms.",
      "Self-acceptance: Being thankful and happy for who 'I am' rather than wishing to be someone else.",
      "Action verbs and sound words (flutter, sing, wriggle, raise trunk, hop)."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ecfdf5" rx="10"/><circle cx="80" cy="55" r="22" fill="#ec4899"/><text x="80" y="60" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Butterfly</text><circle cx="160" cy="55" r="22" fill="#3b82f6"/><text x="160" y="60" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Myna</text><circle cx="240" cy="55" r="22" fill="#10b981"/><text x="240" y="60" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Fish</text><circle cx="320" cy="55" r="22" fill="#f59e0b"/><text x="320" y="60" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Elephant</text><circle cx="410" cy="55" r="24" fill="#8b5cf6"/><text x="410" y="60" font-family="sans-serif" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">JUST ME!</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#065f46" text-anchor="middle">Thank You God for making me Just ME!</text></svg>`,
    cbq: {
      title: "Assembly Recitation on Self-Acceptance",
      text: "During school assembly, Simi recited 'I am Lucky!'. She pointed out that a butterfly is thankful for its wings, a myna is thankful it can sing, and an octopus is thankful for its eight arms. At the end, Simi smiled and said: 'I am lucky because I am ME, not you, but just ME!'",
      question: "Why is the butterfly thankful? Why is the octopus thankful? What is the main message Simi shared?",
      answer: "1. The butterfly is thankful for its <strong>colorful wings</strong>.<br>2. The octopus is thankful for its <strong>eight strong arms</strong>.<br>3. <strong>Main message:</strong> Be proud and grateful for who you are. Every child has unique talents and should celebrate being themselves.",
      rubric: "1 M for butterfly + 1 M for octopus + 1 M for self-acceptance message"
    },
    questions: [
      {
        category: "Reading is Fun • Animal Gifts",
        q: "Why does the poet say a butterfly is lucky?",
        ans: "<strong>Answer:</strong><br>• The butterfly is lucky because it has <strong>beautiful, delicate wings</strong> to flutter from flower to flower.",
        marks: 1,
        rubric: [{ key: "Wings to fly identified", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Myna Bird",
        q: "What can a myna in a tree do that makes it feel lucky?",
        ans: "<strong>Answer:</strong><br>• A myna can <strong>sing sweet musical melodies</strong> from the tree branches.",
        marks: 1,
        rubric: [{ key: "Sing sweet songs identified", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Fish in the Sea",
        q: "What does the little fish do in the ocean water?",
        ans: "<strong>Answer:</strong><br>• The fish <strong>wriggles and giggles with glee</strong> in the cool ocean waves.",
        marks: 2,
        rubric: [{ key: "Wriggles and giggles with glee quoted", marks: "2 M" }]
      },
      {
        category: "Reading is Fun • Elephant's Trunk",
        q: "Why is an elephant lucky according to the poem?",
        ans: "<strong>Answer:</strong><br>• The elephant is lucky because it can <strong>raise its long trunk and trumpet loudly</strong>.",
        marks: 2,
        rubric: [{ key: "Raise trunk and trumpet identified", marks: "2 M" }]
      },
      {
        category: "Reading is Fun • Kangaroo's Wish",
        q: "What would the kangaroo try to do with its hops?",
        ans: "<strong>Answer:</strong><br>• The kangaroo would hop right up <strong>to the moon</strong>!",
        marks: 1,
        rubric: [{ key: "Hop to the moon identified", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Octopus Fact",
        q: "How many arms does an octopus have?",
        ans: "<strong>Answer:</strong><br>• An octopus has <strong>eight arms (tentacles)</strong>.",
        marks: 1,
        rubric: [{ key: "Eight arms stated", marks: "1 M" }]
      },
      {
        category: "Talk Time • Being Thankful",
        q: "Why should you feel lucky to be just who you are?",
        ans: "<strong>Answer:</strong><br>• Because each of us is born with unique gifts, a loving family, a healthy body, and the ability to think, learn, laugh, and help others.",
        marks: 2,
        rubric: [{ key: "Unique gifts and thoughts explained", marks: "1 M" }, { key: "Gratitude for life and abilities", marks: "1 M" }]
      },
      {
        category: "Action Words (Verbs) from Poem",
        q: "Match each creature to its action word in the poem:<br>(a) Butterfly (b) Myna (c) Fish (d) Kangaroo<br>Actions: (1) Sing (2) Fly / Flutter (3) Hop (4) Wriggle",
        ans: "<strong>Matching:</strong><br>• (a) Butterfly — (2) Fly / Flutter<br>• (b) Myna — (1) Sing<br>• (c) Fish — (4) Wriggle<br>• (d) Kangaroo — (3) Hop",
        marks: 2,
        rubric: [{ key: "All 4 actions correctly matched", marks: "2 M (0.5 M each)" }]
      },
      {
        category: "Rhyming Pairs in Poem",
        q: "Find words that rhyme with:<br>(a) Tree — _______<br>(b) Glee — _______<br>(c) Moon — _______",
        ans: "<strong>Answers:</strong><br>(a) Tree — <strong>See / Me</strong><br>(b) Glee — <strong>Sea / Free</strong><br>(c) Moon — <strong>Soon / Spoon</strong>",
        marks: 3,
        rubric: [{ key: "(a) See/Me", marks: "1 M" }, { key: "(b) Sea/Free", marks: "1 M" }, { key: "(c) Soon", marks: "1 M" }]
      },
      {
        category: "Spelling Check • Animal Names",
        q: "Unscramble these animal names:<br>(a) K N A A G O R O = _______<br>(b) O C T O P U S = _______",
        ans: "<strong>Answers:</strong><br>(a) K A N G A R O O = <strong>KANGAROO</strong><br>(b) O C T O P U S = <strong>OCTOPUS</strong>",
        marks: 2,
        rubric: [{ key: "(a) KANGAROO", marks: "1 M" }, { key: "(b) OCTOPUS", marks: "1 M" }]
      },
      {
        category: "Grammar • Rhyme and Rhythm",
        q: "What sound word is used to describe the movement of a fish: 'wriggle' or 'stomp'?",
        ans: "<strong>Answer:</strong><br>• <strong>Wriggle</strong> describes the quick, twisting swimming motion of a fish.",
        marks: 1,
        rubric: [{ key: "Wriggle identified", marks: "1 M" }]
      },
      {
        category: "Creative Writing • My Superpower",
        q: "If you could have one special gift from an animal, what would it be and why?",
        ans: "<strong>Sample Answer:</strong><br>• I would love to have a bird's <strong>wings</strong> so that I could soar high in the cool clouds and view the green Earth from above.",
        marks: 2,
        rubric: [{ key: "Animal gift chosen", marks: "1 M" }, { key: "Reason provided clearly", marks: "1 M" }]
      },
      {
        category: "Opposites • Lucky",
        q: "Write the opposite of:<br>(a) Lucky × _______<br>(b) Raise × _______<br>(c) Laugh × _______",
        ans: "<strong>Answers:</strong><br>(a) Lucky × <strong>Unlucky</strong><br>(b) Raise × <strong>Lower</strong><br>(c) Laugh × <strong>Cry</strong>",
        marks: 3,
        rubric: [{ key: "(a) Unlucky", marks: "1 M" }, { key: "(b) Lower", marks: "1 M" }, { key: "(c) Cry", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) An octopus lives high in the mountain caves.<br>(b) The poet feels lucky to be himself.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. An octopus is a sea animal that lives deep in the ocean.<br>(b) <strong>True</strong>. The poet celebrates being 'just ME'.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Poem Reflection",
        q: "What is the core message of the poem 'I am Lucky!'?",
        ans: "<strong>Summary:</strong><br>• Rather than feeling envious of others, we should count our blessings, appreciate nature's diversity, and feel proud and happy with our own unique identity.",
        marks: 2,
        rubric: [{ key: "Self-worth and gratitude emphasized", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mrg4", num: 4, unit: "Unit 2: Gratitude & Nature",
    title: "I Want",
    subtitle: "The Little Monkey, The Magic Wand & Being Content with Oneself",
    concepts: [
      "Story comprehension: Little monkey wants to be big and strong; wise fairy gifts a magic wand.",
      "Monkey takes a giraffe's long neck, an elephant's trunk, and a zebra's stripes.",
      "Looking in the river: Monkey gets terrified thinking he is a monster!",
      "Realization: Being oneself is the greatest blessing. Discarding greed and false appearances."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><circle cx="80" cy="55" r="22" fill="#8b5cf6"/><text x="80" y="60" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Monkey</text><line x1="105" y1="55" x2="160" y2="55" stroke="#ec4899" stroke-width="4"/><polygon points="160,50 175,55 160,60" fill="#ec4899"/><circle cx="210" cy="55" r="24" fill="#f59e0b"/><text x="210" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Long Neck</text><circle cx="290" cy="55" r="24" fill="#64748b"/><text x="290" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Trunk</text><circle cx="370" cy="55" r="24" fill="#1e293b"/><text x="370" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Stripes</text><text x="450" y="60" font-family="sans-serif" font-size="12" font-weight="800" fill="#dc2626">MONSTER?!</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">'I want to be ME again!' shouted Little Monkey.</text></svg>`,
    cbq: {
      title: "The Little Monkey's Magic Wand Lesson",
      text: "Little Monkey was unhappy with his small size. A wise woman heard him and gave him a magic wand, saying: 'Take this wand, and all your wishes can come true!' First, Monkey wished for a giraffe's neck. Then an elephant's trunk to blow water over himself. Then a zebra's black and white stripes. When he went to the river to try his trunk, he looked in the clear water and screamed: 'Help! A monster!'",
      question: "Who gave Little Monkey the magic wand? What three body features did he borrow? Why did he scream 'monster' at the river?",
      answer: "1. A <strong>wise woman (fairy)</strong> gave him the magic wand.<br>2. He borrowed: (a) A <strong>giraffe's long neck</strong>, (b) An <strong>elephant's trunk</strong>, and (c) A <strong>zebra's stripes</strong>.<br>3. He screamed 'monster' because the mismatch of different animal body parts made him look distorted and terrifying to his own eyes!",
      rubric: "1 M for wise woman + 1 M for all 3 borrowed animal features + 1 M for monster reflection realization"
    },
    questions: [
      {
        category: "Reading is Fun • Monkey's Desire",
        q: "What did the Little Monkey want to be in the beginning?",
        ans: "<strong>Answer:</strong><br>• The Little Monkey wanted to be <strong>big and strong</strong>.",
        marks: 1,
        rubric: [{ key: "Big and strong stated", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Giraffe's Gift",
        q: "What happened when the Little Monkey wished for a giraffe's neck?",
        ans: "<strong>Answer:</strong><br>• <strong>POP!</strong> His neck grew very long, just like a tall giraffe's neck, reaching the sweet leaves high in the trees.",
        marks: 2,
        rubric: [{ key: "Neck grew long like a giraffe", marks: "1 M" }, { key: "Could reach sweet leaves", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Elephant's Trunk",
        q: "What did the elephant do in the river that the Little Monkey wanted to copy?",
        ans: "<strong>Answer:</strong><br>• The elephant filled his long trunk with water and <strong>blew it all over his back</strong> for a cool refreshing shower.",
        marks: 2,
        rubric: [{ key: "Filled trunk with water", marks: "1 M" }, { key: "Blew it over his back to bathe", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Zebra Stripes",
        q: "What wish did the Little Monkey make after seeing the zebra?",
        ans: "<strong>Answer:</strong><br>• He wished to have <strong>stripes all over his body</strong>, just like the zebra.",
        marks: 1,
        rubric: [{ key: "Stripes like a zebra identified", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The River Reflection",
        q: "What did the Little Monkey see when he looked down into the river?",
        ans: "<strong>Answer:</strong><br>• He saw his own strange reflection with a giraffe's neck, an elephant's trunk, and zebra stripes, and thought it was a <strong>frightening monster</strong>!",
        marks: 2,
        rubric: [{ key: "Saw his own reflection", marks: "1 M" }, { key: "Mistook it for a monster", marks: "1 M" }]
      },
      {
        category: "Story Resolution • Becoming Himself",
        q: "What was Little Monkey's final wish with the magic wand? What did he do with the wand?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• His final wish was: <strong>'I want to be myself again!'</strong><br>• After turning back into a happy monkey, he <strong>threw the magic wand deep into the river</strong> so he would never be tempted to change again.",
        marks: 3,
        rubric: [{ key: "Final wish: be myself again", marks: "1.5 M" }, { key: "Threw wand into the river", marks: "1.5 M" }]
      },
      {
        category: "Vocabulary • Sound Words in Story",
        q: "What sound did the magic wand make when wishes came true:<br>(a) For the neck: _______<br>(b) For the trunk: _______<br>(c) For the stripes: _______",
        ans: "<strong>Answers:</strong><br>(a) His neck grew: <strong>POP!</strong><br>(b) His trunk grew: <strong>BANG!</strong><br>(c) His stripes appeared: <strong>WHIZZ!</strong>",
        marks: 3,
        rubric: [{ key: "(a) POP!", marks: "1 M" }, { key: "(b) BANG!", marks: "1 M" }, { key: "(c) WHIZZ!", marks: "1 M" }]
      },
      {
        category: "Collective Nouns • Animal Groups",
        q: "Match each animal to its group name (collective noun):<br>(a) A flock of (b) A herd of (c) A troop of<br>Animals: (1) Monkeys (2) Elephants (3) Birds",
        ans: "<strong>Matching:</strong><br>• (a) A flock of — (3) Birds<br>• (b) A herd of — (2) Elephants<br>• (c) A troop of — (1) Monkeys",
        marks: 3,
        rubric: [{ key: "All 3 collective nouns correctly matched", marks: "3 M (1 M each)" }]
      },
      {
        category: "Moral Understanding • True Beauty",
        q: "Why was Little Monkey happier as a normal monkey than as a creature with mixed animal parts?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• Monkeys are agile, light, and perfectly designed to leap through trees and eat fruits.<br>• Having a heavy trunk and clumsy neck made him look strange and lose his natural abilities. True beauty lies in being who you are.",
        marks: 2,
        rubric: [{ key: "Loss of natural agility explained", marks: "1 M" }, { key: "Acceptance of natural design emphasized", marks: "1 M" }]
      },
      {
        category: "Grammar • Opposites",
        q: "Write the opposite of:<br>(a) Strong × _______<br>(b) Happy × _______<br>(c) Beautiful × _______",
        ans: "<strong>Answers:</strong><br>(a) Strong × <strong>Weak</strong><br>(b) Happy × <strong>Unhappy / Sad</strong><br>(c) Beautiful × <strong>Ugly / Monster-like</strong>",
        marks: 3,
        rubric: [{ key: "(a) Weak", marks: "1 M" }, { key: "(b) Sad/Unhappy", marks: "1 M" }, { key: "(c) Ugly", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'wand'.",
        ans: "<strong>Sample Sentence:</strong><br>• The kind fairy waved her sparkling golden wand and granted three wishes.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'wand'", marks: "2 M" }]
      },
      {
        category: "Animal Homes Connection",
        q: "Where do monkeys live? What do they love to eat?",
        ans: "<strong>Answer:</strong><br>• Monkeys live high on the branches of <strong>trees</strong>.<br>• They love eating <strong>fruits (like bananas and berries), leaves, and nuts</strong>.",
        marks: 2,
        rubric: [{ key: "Trees identified", marks: "1 M" }, { key: "Fruits / bananas identified", marks: "1 M" }]
      },
      {
        category: "Mother's Advice",
        q: "What did Little Monkey's mother tell him when he cried at the riverbank?",
        ans: "<strong>Answer:</strong><br>• His mother said: <strong>'That is not a monster, that is YOU! You wanted a giraffe’s neck, an elephant’s trunk, and a zebra’s stripes. Don't you remember?'</strong>",
        marks: 2,
        rubric: [{ key: "Mother explaining it is his own reflection", marks: "2 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) A wise woman gave the monkey a magic wand.<br>(b) Little Monkey kept the magic wand in his pocket forever.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong>. The wise woman gifted him the wand.<br>(b) <strong>False</strong>. Little Monkey happily threw the wand into the river.",
        marks: 2,
        rubric: [{ key: "(a) True", marks: "1 M" }, { key: "(b) False with reason", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "What valuable lesson does 'I Want' teach every child?",
        ans: "<strong>Summary:</strong><br>• Greed and copying others only makes us look foolish.<br>• We should appreciate our own unique abilities and be thankful for who we are.",
        marks: 2,
        rubric: [{ key: "Contentment and self-acceptance explained", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mrg5", num: 5, unit: "Unit 3: Smiles & Nature",
    title: "A Smile",
    subtitle: "Poem on Happiness, Spreading Smiles & The Secret Hiding Place",
    concepts: [
      "Poem appreciation: A smile is a funny thing that wrinkles your face.",
      "The mystery of a smile: Once it is gone, you can never find its secret hiding place.",
      "The multiplication of smiles: One smile leads to two, spreading warmth to everyone.",
      "Good manners, spreading positivity, and cheering up friends."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fefce8" rx="10"/><circle cx="120" cy="55" r="28" fill="#facc15" stroke="#ca8a04" stroke-width="2"/><circle cx="110" cy="48" r="4" fill="#713f12"/><circle cx="130" cy="48" r="4" fill="#713f12"/><path d="M 105 62 Q 120 78 135 62" fill="none" stroke="#713f12" stroke-width="3" stroke-linecap="round"/><text x="120" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#713f12" text-anchor="middle">Smile 1</text><path d="M 170 55 L 230 55" stroke="#ca8a04" stroke-width="4" stroke-dasharray="4,4"/><text x="200" y="45" font-family="sans-serif" font-size="14" font-weight="800" fill="#ca8a04" text-anchor="middle">+</text><circle cx="280" cy="55" r="28" fill="#facc15" stroke="#ca8a04" stroke-width="2"/><circle cx="270" cy="48" r="4" fill="#713f12"/><circle cx="290" cy="48" r="4" fill="#713f12"/><path d="M 265 62 Q 280 78 295 62" fill="none" stroke="#713f12" stroke-width="3" stroke-linecap="round"/><text x="280" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#713f12" text-anchor="middle">Smile 2</text><text x="400" y="60" font-family="sans-serif" font-size="13" font-weight="800" fill="#854d0e">1 Smile = 2 Smiles!</text></svg>`,
    cbq: {
      title: "Spreading Smiles in the Classroom",
      text: "Aman came to school feeling sad because his pet bird had flown away. Priya noticed his gloomy face. She walked up to him, made a silly funny face, and gave him a bright warm smile. Aman couldn't help it — a tiny grin appeared on his face, which turned into a hearty laugh.",
      question: "How does Priya's action demonstrate the poem 'A Smile'? What happens when one person smiles at another?",
      answer: "1. The poem says: <strong>'You smile at one, he smiles at you, and so one smile makes two!'</strong><br>2. Priya's smile melted Aman's sadness, proving that smiles are contagious and instantly spread joy and comfort from one heart to another.",
      rubric: "1.5 M for quoting/connecting 'one smile makes two' + 1.5 M for explaining how smiles spread warmth"
    },
    questions: [
      {
        category: "Reading is Fun • Why Funny?",
        q: "Why is a smile called 'a funny thing' in the poem?",
        ans: "<strong>Answer:</strong><br>• A smile is called a funny thing because <strong>it wrinkles up your face</strong>, and when it is gone, you can never find its secret hiding place.",
        marks: 2,
        rubric: [{ key: "Wrinkles up your face", marks: "1 M" }, { key: "Secret hiding place", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Secret Place",
        q: "What happens when a smile is gone?",
        ans: "<strong>Answer:</strong><br>• When a smile disappears, you will <strong>never find its secret hiding place</strong> anywhere.",
        marks: 1,
        rubric: [{ key: "Never find its secret hiding place", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Smile Multiplication",
        q: "What is much more wonderful than finding a smile's hiding place?",
        ans: "<strong>Answer:</strong><br>• It is far more wonderful to see what smiles can do: <strong>when you smile at someone, they smile back at you, and so one smile makes two!</strong>",
        marks: 2,
        rubric: [{ key: "Smiling at someone makes them smile back", marks: "1 M" }, { key: "One smile makes two concept", marks: "1 M" }]
      },
      {
        category: "Rhyming Words in Poem",
        q: "Find words in the poem that rhyme with:<br>(a) Place — _______<br>(b) You — _______",
        ans: "<strong>Answers:</strong><br>(a) Place rhymes with <strong>Face</strong>.<br>(b) You rhymes with <strong>Two</strong>.",
        marks: 2,
        rubric: [{ key: "(a) Face", marks: "1 M" }, { key: "(b) Two", marks: "1 M" }]
      },
      {
        category: "Phonics • Silent Letters",
        q: "In the word 'wrinkle', which letter is silent (not pronounced)?",
        ans: "<strong>Answer:</strong><br>• The letter <strong>'W'</strong> is silent in 'wrinkle' (it is pronounced starting with the /r/ sound).",
        marks: 1,
        rubric: [{ key: "Letter 'W' identified as silent", marks: "1 M" }]
      },
      {
        category: "Vocabulary • Words Starting with 'Wr'",
        q: "Write two other English words where 'W' is silent before 'R'.",
        ans: "<strong>Answers:</strong><br>1. <strong>Write</strong><br>2. <strong>Wrist</strong> (or Wrong / Wrap).",
        marks: 2,
        rubric: [{ key: "Two valid wr- words (e.g. write, wrist)", marks: "2 M" }]
      },
      {
        category: "Facial Expressions • Feelings",
        q: "Match each expression to the feeling:<br>(a) A wide smile (b) A frown / scowl (c) Wide open mouth and eyes<br>Feelings: (1) Anger / Displeasure (2) Surprise / Wonder (3) Happiness / Joy",
        ans: "<strong>Matching:</strong><br>• (a) Wide smile — (3) Happiness / Joy<br>• (b) Frown — (1) Anger / Displeasure<br>• (c) Wide open eyes — (2) Surprise / Wonder",
        marks: 3,
        rubric: [{ key: "All 3 correctly matched", marks: "3 M (1 M each)" }]
      },
      {
        category: "Health Benefits of Smiling",
        q: "Why do doctors say smiling and laughing is good for our health?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Smiling relaxes facial muscles, reduces stress and worries, and releases happy hormones that make our whole body feel healthy and energetic.",
        marks: 2,
        rubric: [{ key: "Stress reduction and relaxation", marks: "1 M" }, { key: "Overall physical/mental wellness", marks: "1 M" }]
      },
      {
        category: "Opposites • Emotion Words",
        q: "Write the opposite of:<br>(a) Smile × _______<br>(b) Wonderful × _______<br>(c) Secret × _______",
        ans: "<strong>Answers:</strong><br>(a) Smile × <strong>Frown / Cry</strong><br>(b) Wonderful × <strong>Terrible / Horrible</strong><br>(c) Secret × <strong>Open / Public / Known</strong>",
        marks: 3,
        rubric: [{ key: "(a) Frown", marks: "1 M" }, { key: "(b) Terrible", marks: "1 M" }, { key: "(c) Open/Known", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'cheerful'.",
        ans: "<strong>Sample Sentence:</strong><br>• Our teacher greeted us with a cheerful smile every morning.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'cheerful'", marks: "2 M" }]
      },
      {
        category: "Social Skills • Spreading Joy",
        q: "How can you bring a smile to your grandmother's face when she is tired?",
        ans: "<strong>Answer:</strong><br>• By giving her a warm hug, offering her a glass of fresh water, and telling her a funny story about school.",
        marks: 2,
        rubric: [{ key: "Affectionate hug / help offered", marks: "1 M" }, { key: "Sharing cheerful story", marks: "1 M" }]
      },
      {
        category: "Spelling Check • Smile Words",
        q: "Fill in the blanks: W _ N D _ R F _ L (marvelous).",
        ans: "<strong>Answer:</strong><br>• W <strong>O</strong> N D <strong>E</strong> R F <strong>U</strong> L = <strong>WONDERFUL</strong>.",
        marks: 1,
        rubric: [{ key: "WONDERFUL correct", marks: "1 M" }]
      },
      {
        category: "Punctuation Practice",
        q: "Put question mark or full stop:<br>(a) What can a smile do ___<br>(b) A smile makes everyone feel happy ___",
        ans: "<strong>Answers:</strong><br>(a) What can a smile do <strong>?</strong> (Question)<br>(b) A smile makes everyone feel happy <strong>.</strong> (Statement)",
        marks: 2,
        rubric: [{ key: "(a) Question mark (?)", marks: "1 M" }, { key: "(b) Full stop (.)", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) Smiling costs nothing but gives immense joy.<br>(b) A frown is more pleasant to look at than a smile.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong>. A smile is completely free yet enriches everyone who receives it.<br>(b) <strong>False</strong>. A smile is warm and inviting, whereas a frown looks gloomy.",
        marks: 2,
        rubric: [{ key: "(a) True", marks: "1 M" }, { key: "(b) False with reason", marks: "1 M" }]
      },
      {
        category: "Poem Reflection",
        q: "What is the ultimate mathematical secret of a smile mentioned in the poem?",
        ans: "<strong>Summary:</strong><br>• Smiles do not follow ordinary subtraction; they multiply! When you give away one smile, it reflects back from the other person, creating two smiles in the world.",
        marks: 2,
        rubric: [{ key: "Multiplication / reflection of smile explained", marks: "2 M" }]
      }
    ]
  }
];

module.exports = { marigoldPart1 };
