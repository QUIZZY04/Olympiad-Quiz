// scripts/data-c2-english/marigoldData.js
// Official NCERT Class 2 English (Marigold Book 2) Complete 100% Dataset

const marigoldChapters = [
  {
    "id": "mrg1",
    "num": 1,
    "unit": "Unit 1: First Day & School Life",
    "title": "First Day at School",
    "subtitle": "Poem Recitation, New School Doubts, Feelings & Classroom Pets",
    "concepts": [
      "Poem comprehension: A child's innocent thoughts on entering school for the first time.",
      "Doubts about drawing abilities, peer acceptance, and teacher's warmth (Mom or Gran).",
      "Fondness for pets: wondering if the pet puppy will wonder where the child has gone.",
      "Expressing childhood feelings: nervousness, excitement, curiosity, and pride."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><rect x=\"80\" y=\"30\" width=\"70\" height=\"60\" fill=\"#3b82f6\" rx=\"6\"/><text x=\"115\" y=\"65\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">School</text><circle cx=\"250\" cy=\"55\" r=\"22\" fill=\"#f59e0b\"/><text x=\"250\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Wonder</text><circle cx=\"380\" cy=\"55\" r=\"20\" fill=\"#10b981\"/><text x=\"380\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Puppy</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">I wonder if my drawing will be as good as theirs...</text></svg>",
    "cbq": {
      "title": "Rohan's First Day Classroom Reflections",
      "text": "On his very first day in Class 2, Rohan stood at the school gate holding his father's hand tightly. He thought: 'Will other boys and girls like me? Will my teacher smile like my grandmother? Will my pet dog Bruno search for me under the cot?'",
      "question": "What were Rohan's three main wonders? How did these match the poem 'First Day at School'?",
      "answer": "1. Rohan wondered: (a) If other children would like him or just stare, (b) If his teacher would look kind like his mother or grandmother, and (c) If his pet dog would miss him at home.<br>2. These match the exact four stanzas of the poem: wondering about drawing, peer friendship, teacher's loving face, and the pet puppy wondering where the child is.",
      "rubric": "1.5 M for identifying all three worries + 1.5 M for matching them to poem stanzas"
    },
    "questions": [
      {
        "category": "Reading is Fun • Poem Doubts",
        "q": "What does the child in the poem wonder about his drawing?",
        "ans": "<strong>Answer:</strong><br>• The child wonders if his drawing will be <strong>as good as that of the other children</strong> in the class.",
        "marks": 1,
        "rubric": [
          {
            "key": "Drawing as good as other children stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Classmates",
        "q": "What does the child wonder about his classmates?",
        "ans": "<strong>Answer:</strong><br>• The child wonders whether his classmates will <strong>like him</strong> and be friendly, or just <strong>stare at him</strong> like a stranger.",
        "marks": 2,
        "rubric": [
          {
            "key": "Whether they will like him",
            "marks": "1 M"
          },
          {
            "key": "Or just stare at him",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Teacher's Look",
        "q": "Who does the child wonder his teacher will look like?",
        "ans": "<strong>Answer:</strong><br>• The child wonders if his teacher will look like his <strong>Mother ('Mom')</strong> or his <strong>Grandmother ('Gran')</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Mom identified",
            "marks": "1 M"
          },
          {
            "key": "Gran (Grandmother) identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Pet Puppy",
        "q": "What does the child wonder about his puppy at home?",
        "ans": "<strong>Answer:</strong><br>• The child wonders if his little pet puppy will <strong>wonder where he is gone</strong> during school hours.",
        "marks": 1,
        "rubric": [
          {
            "key": "Puppy wondering where he is gone",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Talk Time • First Day Feelings",
        "q": "Do you remember your first day at school? How did you feel: (A) Angry (B) Shy (C) Happy (D) Sad? Describe in one sentence.",
        "ans": "<strong>Answer:</strong><br>• On my first day at school, I felt a little <strong>shy and excited</strong>, but seeing my smiling teacher made me feel very happy.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clear feeling stated",
            "marks": "1 M"
          },
          {
            "key": "Personal reflection sentence",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Building • School Bag Items",
        "q": "Name five things that you carry inside your school bag.",
        "ans": "<strong>Answer:</strong><br>1. English textbook<br>2. Maths notebook<br>3. Pencil box with pencils and eraser<br>4. Ruler (scale)<br>5. Water bottle and tiffin box.",
        "marks": 3,
        "rubric": [
          {
            "key": "At least 5 valid school bag items named",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Word Search",
        "q": "Find the short form for 'Grandmother' used in the poem.",
        "ans": "<strong>Answer:</strong><br>• The short form used in the poem is <strong>'Gran'</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "'Gran' correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Rhyming Words in Poem",
        "q": "Find the word in the poem that rhymes with:<br>(a) Stare — _______<br>(b) Look — _______",
        "ans": "<strong>Answers:</strong><br>(a) Stare rhymes with <strong>There</strong>.<br>(b) Look rhymes with <strong>Book</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) There",
            "marks": "1 M"
          },
          {
            "key": "(b) Book",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Action Verbs • Classroom Words",
        "q": "Fill in with [read, write, draw, share]:<br>(a) I like to _______ stories with colourful pictures.<br>(b) I _______ my crayons with my bench partner.",
        "ans": "<strong>Answers:</strong><br>(a) I like to <strong>draw / read</strong> stories.<br>(b) I <strong>share</strong> my crayons with my bench partner.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) read/draw",
            "marks": "1 M"
          },
          {
            "key": "(b) share",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'wonder'.",
        "ans": "<strong>Sample Sentence:</strong><br>• I often wonder how little birds build such intricate nests high up in trees.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence using 'wonder' correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Opposites • Feelings",
        "q": "Write the opposite of:<br>(a) Good × _______<br>(b) Friend × _______<br>(c) Like × _______",
        "ans": "<strong>Answers:</strong><br>(a) Good × <strong>Bad</strong><br>(b) Friend × <strong>Enemy / Stranger</strong><br>(c) Like × <strong>Dislike / Hate</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Bad",
            "marks": "1 M"
          },
          {
            "key": "(b) Enemy/Stranger",
            "marks": "1 M"
          },
          {
            "key": "(c) Dislike",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Classroom Etiquette • Sharing and Care",
        "q": "If a new student joins your class and looks nervous, what should you do?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. Smile warmly and say: 'Hello! Welcome to our class!'<br>2. Introduce yourself, offer to share your desk or pencils, and show them around the classroom.",
        "marks": 2,
        "rubric": [
          {
            "key": "Warm greeting / welcoming gesture",
            "marks": "1 M"
          },
          {
            "key": "Friendly introduction and sharing",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grammar • Naming Words (Nouns)",
        "q": "Circle the nouns (naming words) in the line: 'My puppy waits near the wooden gate.'",
        "ans": "<strong>Answer:</strong><br>• The nouns are: <strong>puppy</strong> (animal) and <strong>gate</strong> (thing).",
        "marks": 2,
        "rubric": [
          {
            "key": "puppy identified",
            "marks": "1 M"
          },
          {
            "key": "gate identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) The child in the poem is going to school for the first time.<br>(b) The child hates dogs and pets.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong>. It is his first day at school.<br>(b) <strong>False</strong>. The child loves his puppy and wonders if the puppy will miss him.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) True",
            "marks": "1 M"
          },
          {
            "key": "(b) False with reason",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Reflection",
        "q": "Why do many young children feel nervous on their first day of school?",
        "ans": "<strong>Summary:</strong><br>• It is their first time stepping away from the safety of home and parents into a new environment with unfamiliar teachers and peers.<br>• However, as soon as they make friends and participate in games, the classroom becomes a joyful second home.",
        "marks": 2,
        "rubric": [
          {
            "key": "Separation from familiar home explained",
            "marks": "1 M"
          },
          {
            "key": "Comfort through friends and teachers described",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg2",
    "num": 2,
    "unit": "Unit 1: First Day & School Life",
    "title": "Haldi’s Adventure",
    "subtitle": "Encounter with Smiley the Giraffe, Reading Books & School Joy",
    "concepts": [
      "Story comprehension: Haldi meets Smiley, an extraordinary giraffe wearing big glasses and holding a book.",
      "Smiley loves reading books and discussing stars, trees, birds, and school lessons.",
      "Haldi rides on Smiley's tall back to reach her school before the morning bell.",
      "The thrill of learning, reading, and discovering wonder in everyday life."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"10\"/><rect x=\"80\" y=\"30\" width=\"50\" height=\"70\" fill=\"#f59e0b\" rx=\"4\"/><circle cx=\"105\" cy=\"20\" r=\"16\" fill=\"#f59e0b\"/><rect x=\"95\" y=\"16\" width=\"20\" height=\"8\" fill=\"#1e293b\" rx=\"2\"/><rect x=\"145\" y=\"50\" width=\"30\" height=\"25\" fill=\"#3b82f6\" rx=\"2\"/><circle cx=\"270\" cy=\"55\" r=\"18\" fill=\"#ec4899\"/><text x=\"270\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Haldi</text><rect x=\"360\" y=\"35\" width=\"80\" height=\"55\" fill=\"#10b981\" rx=\"4\"/><text x=\"400\" y=\"65\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">School</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#713f12\" text-anchor=\"middle\">Haldi rode on Smiley's back and reached school on time!</text></svg>",
    "cbq": {
      "title": "Haldi's Morning Encounter",
      "text": "As Haldi walked to school one morning, she met a tall giraffe. The giraffe wore big spectacles and held a book in his hand. He smiled and said: 'Good morning, Haldi! My name is Smiley. Whenever you see me, you will smile.' Haldi stared at him because she had never seen a giraffe wearing spectacles before.",
      "question": "What was the giraffe's name? What was unusual about his appearance? Why did Haldi say she loved school?",
      "answer": "1. The giraffe's name was <strong>Smiley</strong>.<br>2. <strong>Unusual appearance:</strong> He wore <strong>big spectacles</strong> and held a <strong>book</strong> in his hand, unlike any normal wild animal.<br>3. Haldi loved school because she learned exciting things about <strong>stars, trees, birds, and animals</strong> every day.",
      "rubric": "1 M for Smiley + 1 M for spectacles and book + 1 M for Haldi's school learning reasons"
    },
    "questions": [
      {
        "category": "Reading is Fun • The Meeting",
        "q": "Where was Haldi going when she met the giraffe?",
        "ans": "<strong>Answer:</strong><br>• Haldi was walking to her <strong>school</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Going to school correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Surprise",
        "q": "Why did Haldi stare at the giraffe with surprise?",
        "ans": "<strong>Answer:</strong><br>• Haldi stared at him because she had <strong>never seen a giraffe who wore big spectacles and held an open book</strong> in his hand.",
        "marks": 2,
        "rubric": [
          {
            "key": "Never seen such a giraffe",
            "marks": "1 M"
          },
          {
            "key": "Wearing glasses and holding book described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Reaching School",
        "q": "How did Haldi reach her school without being late?",
        "ans": "<strong>Answer:</strong><br>• She climbed onto the giraffe's back. Smiley ran with long fast strides, and Haldi reached the school playground just as the bell rang.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rode on giraffe's back",
            "marks": "1 M"
          },
          {
            "key": "Reached before the bell rang",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Talk Time • What Do You Learn?",
        "q": "What are some exciting things Haldi learns about at school?",
        "ans": "<strong>Answer:</strong><br>• Haldi learns about <strong>the stars, the trees, the birds, and different animals</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Stars and trees named",
            "marks": "1 M"
          },
          {
            "key": "Birds and animals named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Building • Compound Words",
        "q": "Combine two words to make a compound word:<br>(a) Play + ground = _______<br>(b) Class + room = _______<br>(c) Sun + shine = _______",
        "ans": "<strong>Answers:</strong><br>(a) Play + ground = <strong>Playground</strong><br>(b) Class + room = <strong>Classroom</strong><br>(c) Sun + shine = <strong>Sunshine</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Playground",
            "marks": "1 M"
          },
          {
            "key": "(b) Classroom",
            "marks": "1 M"
          },
          {
            "key": "(c) Sunshine",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Describing Words • Adjectives",
        "q": "Pick the correct describing word for each:<br>(a) A _______ giraffe (tall / short)<br>(b) A _______ morning (wonderful / salty)",
        "ans": "<strong>Answers:</strong><br>(a) A <strong>tall</strong> giraffe.<br>(b) A <strong>wonderful</strong> morning.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) tall",
            "marks": "1 M"
          },
          {
            "key": "(b) wonderful",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites Drill",
        "q": "Write the opposite of:<br>(a) Late × _______<br>(b) Fast × _______<br>(c) Morning × _______",
        "ans": "<strong>Answers:</strong><br>(a) Late × <strong>Early / On time</strong><br>(b) Fast × <strong>Slow</strong><br>(c) Morning × <strong>Evening</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Early",
            "marks": "1 M"
          },
          {
            "key": "(b) Slow",
            "marks": "1 M"
          },
          {
            "key": "(c) Evening",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Animal Fact • Giraffe Anatomy",
        "q": "What is special about a giraffe's neck and tongue?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• A giraffe has the <strong>longest neck</strong> in the animal kingdom, allowing it to eat tender leaves from tall treetops.<br>• It also has a long, tough bluish tongue that helps it strip leaves without getting hurt by thorns.",
        "marks": 2,
        "rubric": [
          {
            "key": "Longest neck to reach treetops",
            "marks": "1 M"
          },
          {
            "key": "Long tongue adaptation explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grammar • Pronouns (I, You, She)",
        "q": "Fill in with [I, You, She]:<br>(a) Haldi is a smart girl. ___ loves school.<br>(b) Smiley said, 'Whenever ___ see me, you will smile.'",
        "ans": "<strong>Answers:</strong><br>(a) <strong>She</strong> loves school.<br>(b) 'Whenever <strong>you</strong> see me, you will smile.'",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) She",
            "marks": "1 M"
          },
          {
            "key": "(b) you",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling Check",
        "q": "Correct the spelling of these words from the chapter:<br>(a) ADVENTUR = _______<br>(b) GIRAFFE = _______",
        "ans": "<strong>Answers:</strong><br>(a) <strong>ADVENTURE</strong><br>(b) <strong>GIRAFFE</strong> (already correct, or G-I-R-A-F-F-E)",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) ADVENTURE",
            "marks": "1 M"
          },
          {
            "key": "(b) GIRAFFE verified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'adventure'.",
        "ans": "<strong>Sample Sentence:</strong><br>• Exploring the forest trail with my uncle was an exciting adventure.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'adventure'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Feelings and Expressions",
        "q": "Why was the giraffe named 'Smiley'?",
        "ans": "<strong>Answer:</strong><br>• He was named Smiley because he had a cheerful personality, wore a pleasant grin, and made everyone who met him smile happily.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cheerful personality",
            "marks": "1 M"
          },
          {
            "key": "Brought smiles to everyone",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Days of the Week Link",
        "q": "On which days did Haldi go to school?",
        "ans": "<strong>Answer:</strong><br>• Haldi went to school on <strong>Mondays, Tuesdays, Wednesdays, Thursdays, and Fridays</strong> (and Saturdays), while Sunday was her holiday.",
        "marks": 2,
        "rubric": [
          {
            "key": "Weekday school days named",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) Haldi missed her school bell because she talked to Smiley.<br>(b) Smiley loved reading storybooks.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. She reached school exactly on time on Smiley's back.<br>(b) <strong>True</strong>. Smiley was very fond of books and learning.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "What is the moral of 'Haldi’s Adventure'?",
        "ans": "<strong>Summary:</strong><br>• School is a magical place where curiosity, reading, and friendship turn every day into a joyful adventure of discovery.",
        "marks": 2,
        "rubric": [
          {
            "key": "Joy of learning and school adventure emphasized",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg3",
    "num": 3,
    "unit": "Unit 2: Gratitude & Nature",
    "title": "I am Lucky!",
    "subtitle": "Poem of Gratitude, Animal Gifts & Being Thankful to Nature",
    "concepts": [
      "Poem appreciation: Celebrating what makes each creature unique and joyful.",
      "Creature gifts: Butterfly's wings, Myna's song, Fish's wriggle, Elephant's trunk, Kangaroo's hop, Octopus's eight arms.",
      "Self-acceptance: Being thankful and happy for who 'I am' rather than wishing to be someone else.",
      "Action verbs and sound words (flutter, sing, wriggle, raise trunk, hop)."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><circle cx=\"80\" cy=\"55\" r=\"22\" fill=\"#ec4899\"/><text x=\"80\" y=\"60\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Butterfly</text><circle cx=\"160\" cy=\"55\" r=\"22\" fill=\"#3b82f6\"/><text x=\"160\" y=\"60\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Myna</text><circle cx=\"240\" cy=\"55\" r=\"22\" fill=\"#10b981\"/><text x=\"240\" y=\"60\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Fish</text><circle cx=\"320\" cy=\"55\" r=\"22\" fill=\"#f59e0b\"/><text x=\"320\" y=\"60\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Elephant</text><circle cx=\"410\" cy=\"55\" r=\"24\" fill=\"#8b5cf6\"/><text x=\"410\" y=\"60\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">JUST ME!</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Thank You God for making me Just ME!</text></svg>",
    "cbq": {
      "title": "Assembly Recitation on Self-Acceptance",
      "text": "During school assembly, Simi recited 'I am Lucky!'. She pointed out that a butterfly is thankful for its wings, a myna is thankful it can sing, and an octopus is thankful for its eight arms. At the end, Simi smiled and said: 'I am lucky because I am ME, not you, but just ME!'",
      "question": "Why is the butterfly thankful? Why is the octopus thankful? What is the main message Simi shared?",
      "answer": "1. The butterfly is thankful for its <strong>colorful wings</strong>.<br>2. The octopus is thankful for its <strong>eight strong arms</strong>.<br>3. <strong>Main message:</strong> Be proud and grateful for who you are. Every child has unique talents and should celebrate being themselves.",
      "rubric": "1 M for butterfly + 1 M for octopus + 1 M for self-acceptance message"
    },
    "questions": [
      {
        "category": "Reading is Fun • Animal Gifts",
        "q": "Why does the poet say a butterfly is lucky?",
        "ans": "<strong>Answer:</strong><br>• The butterfly is lucky because it has <strong>beautiful, delicate wings</strong> to flutter from flower to flower.",
        "marks": 1,
        "rubric": [
          {
            "key": "Wings to fly identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Myna Bird",
        "q": "What can a myna in a tree do that makes it feel lucky?",
        "ans": "<strong>Answer:</strong><br>• A myna can <strong>sing sweet musical melodies</strong> from the tree branches.",
        "marks": 1,
        "rubric": [
          {
            "key": "Sing sweet songs identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Fish in the Sea",
        "q": "What does the little fish do in the ocean water?",
        "ans": "<strong>Answer:</strong><br>• The fish <strong>wriggles and giggles with glee</strong> in the cool ocean waves.",
        "marks": 2,
        "rubric": [
          {
            "key": "Wriggles and giggles with glee quoted",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Elephant's Trunk",
        "q": "Why is an elephant lucky according to the poem?",
        "ans": "<strong>Answer:</strong><br>• The elephant is lucky because it can <strong>raise its long trunk and trumpet loudly</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Raise trunk and trumpet identified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Kangaroo's Wish",
        "q": "What would the kangaroo try to do with its hops?",
        "ans": "<strong>Answer:</strong><br>• The kangaroo would hop right up <strong>to the moon</strong>!",
        "marks": 1,
        "rubric": [
          {
            "key": "Hop to the moon identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Octopus Fact",
        "q": "How many arms does an octopus have?",
        "ans": "<strong>Answer:</strong><br>• An octopus has <strong>eight arms (tentacles)</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Eight arms stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Talk Time • Being Thankful",
        "q": "Why should you feel lucky to be just who you are?",
        "ans": "<strong>Answer:</strong><br>• Because each of us is born with unique gifts, a loving family, a healthy body, and the ability to think, learn, laugh, and help others.",
        "marks": 2,
        "rubric": [
          {
            "key": "Unique gifts and thoughts explained",
            "marks": "1 M"
          },
          {
            "key": "Gratitude for life and abilities",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Action Words (Verbs) from Poem",
        "q": "Match each creature to its action word in the poem:<br>(a) Butterfly (b) Myna (c) Fish (d) Kangaroo<br>Actions: (1) Sing (2) Fly / Flutter (3) Hop (4) Wriggle",
        "ans": "<strong>Matching:</strong><br>• (a) Butterfly — (2) Fly / Flutter<br>• (b) Myna — (1) Sing<br>• (c) Fish — (4) Wriggle<br>• (d) Kangaroo — (3) Hop",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 actions correctly matched",
            "marks": "2 M (0.5 M each)"
          }
        ]
      },
      {
        "category": "Rhyming Pairs in Poem",
        "q": "Find words that rhyme with:<br>(a) Tree — _______<br>(b) Glee — _______<br>(c) Moon — _______",
        "ans": "<strong>Answers:</strong><br>(a) Tree — <strong>See / Me</strong><br>(b) Glee — <strong>Sea / Free</strong><br>(c) Moon — <strong>Soon / Spoon</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) See/Me",
            "marks": "1 M"
          },
          {
            "key": "(b) Sea/Free",
            "marks": "1 M"
          },
          {
            "key": "(c) Soon",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling Check • Animal Names",
        "q": "Unscramble these animal names:<br>(a) K N A A G O R O = _______<br>(b) O C T O P U S = _______",
        "ans": "<strong>Answers:</strong><br>(a) K A N G A R O O = <strong>KANGAROO</strong><br>(b) O C T O P U S = <strong>OCTOPUS</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) KANGAROO",
            "marks": "1 M"
          },
          {
            "key": "(b) OCTOPUS",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grammar • Rhyme and Rhythm",
        "q": "What sound word is used to describe the movement of a fish: 'wriggle' or 'stomp'?",
        "ans": "<strong>Answer:</strong><br>• <strong>Wriggle</strong> describes the quick, twisting swimming motion of a fish.",
        "marks": 1,
        "rubric": [
          {
            "key": "Wriggle identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Writing • My Superpower",
        "q": "If you could have one special gift from an animal, what would it be and why?",
        "ans": "<strong>Sample Answer:</strong><br>• I would love to have a bird's <strong>wings</strong> so that I could soar high in the cool clouds and view the green Earth from above.",
        "marks": 2,
        "rubric": [
          {
            "key": "Animal gift chosen",
            "marks": "1 M"
          },
          {
            "key": "Reason provided clearly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites • Lucky",
        "q": "Write the opposite of:<br>(a) Lucky × _______<br>(b) Raise × _______<br>(c) Laugh × _______",
        "ans": "<strong>Answers:</strong><br>(a) Lucky × <strong>Unlucky</strong><br>(b) Raise × <strong>Lower</strong><br>(c) Laugh × <strong>Cry</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Unlucky",
            "marks": "1 M"
          },
          {
            "key": "(b) Lower",
            "marks": "1 M"
          },
          {
            "key": "(c) Cry",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) An octopus lives high in the mountain caves.<br>(b) The poet feels lucky to be himself.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. An octopus is a sea animal that lives deep in the ocean.<br>(b) <strong>True</strong>. The poet celebrates being 'just ME'.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Reflection",
        "q": "What is the core message of the poem 'I am Lucky!'?",
        "ans": "<strong>Summary:</strong><br>• Rather than feeling envious of others, we should count our blessings, appreciate nature's diversity, and feel proud and happy with our own unique identity.",
        "marks": 2,
        "rubric": [
          {
            "key": "Self-worth and gratitude emphasized",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg4",
    "num": 4,
    "unit": "Unit 2: Gratitude & Nature",
    "title": "I Want",
    "subtitle": "The Little Monkey, The Magic Wand & Being Content with Oneself",
    "concepts": [
      "Story comprehension: Little monkey wants to be big and strong; wise fairy gifts a magic wand.",
      "Monkey takes a giraffe's long neck, an elephant's trunk, and a zebra's stripes.",
      "Looking in the river: Monkey gets terrified thinking he is a monster!",
      "Realization: Being oneself is the greatest blessing. Discarding greed and false appearances."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"80\" cy=\"55\" r=\"22\" fill=\"#8b5cf6\"/><text x=\"80\" y=\"60\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Monkey</text><line x1=\"105\" y1=\"55\" x2=\"160\" y2=\"55\" stroke=\"#ec4899\" stroke-width=\"4\"/><polygon points=\"160,50 175,55 160,60\" fill=\"#ec4899\"/><circle cx=\"210\" cy=\"55\" r=\"24\" fill=\"#f59e0b\"/><text x=\"210\" y=\"60\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Long Neck</text><circle cx=\"290\" cy=\"55\" r=\"24\" fill=\"#64748b\"/><text x=\"290\" y=\"60\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Trunk</text><circle cx=\"370\" cy=\"55\" r=\"24\" fill=\"#1e293b\"/><text x=\"370\" y=\"60\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Stripes</text><text x=\"450\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#dc2626\">MONSTER?!</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">'I want to be ME again!' shouted Little Monkey.</text></svg>",
    "cbq": {
      "title": "The Little Monkey's Magic Wand Lesson",
      "text": "Little Monkey was unhappy with his small size. A wise woman heard him and gave him a magic wand, saying: 'Take this wand, and all your wishes can come true!' First, Monkey wished for a giraffe's neck. Then an elephant's trunk to blow water over himself. Then a zebra's black and white stripes. When he went to the river to try his trunk, he looked in the clear water and screamed: 'Help! A monster!'",
      "question": "Who gave Little Monkey the magic wand? What three body features did he borrow? Why did he scream 'monster' at the river?",
      "answer": "1. A <strong>wise woman (fairy)</strong> gave him the magic wand.<br>2. He borrowed: (a) A <strong>giraffe's long neck</strong>, (b) An <strong>elephant's trunk</strong>, and (c) A <strong>zebra's stripes</strong>.<br>3. He screamed 'monster' because the mismatch of different animal body parts made him look distorted and terrifying to his own eyes!",
      "rubric": "1 M for wise woman + 1 M for all 3 borrowed animal features + 1 M for monster reflection realization"
    },
    "questions": [
      {
        "category": "Reading is Fun • Monkey's Desire",
        "q": "What did the Little Monkey want to be in the beginning?",
        "ans": "<strong>Answer:</strong><br>• The Little Monkey wanted to be <strong>big and strong</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Big and strong stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Giraffe's Gift",
        "q": "What happened when the Little Monkey wished for a giraffe's neck?",
        "ans": "<strong>Answer:</strong><br>• <strong>POP!</strong> His neck grew very long, just like a tall giraffe's neck, reaching the sweet leaves high in the trees.",
        "marks": 2,
        "rubric": [
          {
            "key": "Neck grew long like a giraffe",
            "marks": "1 M"
          },
          {
            "key": "Could reach sweet leaves",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Elephant's Trunk",
        "q": "What did the elephant do in the river that the Little Monkey wanted to copy?",
        "ans": "<strong>Answer:</strong><br>• The elephant filled his long trunk with water and <strong>blew it all over his back</strong> for a cool refreshing shower.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled trunk with water",
            "marks": "1 M"
          },
          {
            "key": "Blew it over his back to bathe",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Zebra Stripes",
        "q": "What wish did the Little Monkey make after seeing the zebra?",
        "ans": "<strong>Answer:</strong><br>• He wished to have <strong>stripes all over his body</strong>, just like the zebra.",
        "marks": 1,
        "rubric": [
          {
            "key": "Stripes like a zebra identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The River Reflection",
        "q": "What did the Little Monkey see when he looked down into the river?",
        "ans": "<strong>Answer:</strong><br>• He saw his own strange reflection with a giraffe's neck, an elephant's trunk, and zebra stripes, and thought it was a <strong>frightening monster</strong>!",
        "marks": 2,
        "rubric": [
          {
            "key": "Saw his own reflection",
            "marks": "1 M"
          },
          {
            "key": "Mistook it for a monster",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Story Resolution • Becoming Himself",
        "q": "What was Little Monkey's final wish with the magic wand? What did he do with the wand?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• His final wish was: <strong>'I want to be myself again!'</strong><br>• After turning back into a happy monkey, he <strong>threw the magic wand deep into the river</strong> so he would never be tempted to change again.",
        "marks": 3,
        "rubric": [
          {
            "key": "Final wish: be myself again",
            "marks": "1.5 M"
          },
          {
            "key": "Threw wand into the river",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Sound Words in Story",
        "q": "What sound did the magic wand make when wishes came true:<br>(a) For the neck: _______<br>(b) For the trunk: _______<br>(c) For the stripes: _______",
        "ans": "<strong>Answers:</strong><br>(a) His neck grew: <strong>POP!</strong><br>(b) His trunk grew: <strong>BANG!</strong><br>(c) His stripes appeared: <strong>WHIZZ!</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) POP!",
            "marks": "1 M"
          },
          {
            "key": "(b) BANG!",
            "marks": "1 M"
          },
          {
            "key": "(c) WHIZZ!",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Collective Nouns • Animal Groups",
        "q": "Match each animal to its group name (collective noun):<br>(a) A flock of (b) A herd of (c) A troop of<br>Animals: (1) Monkeys (2) Elephants (3) Birds",
        "ans": "<strong>Matching:</strong><br>• (a) A flock of — (3) Birds<br>• (b) A herd of — (2) Elephants<br>• (c) A troop of — (1) Monkeys",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 collective nouns correctly matched",
            "marks": "3 M (1 M each)"
          }
        ]
      },
      {
        "category": "Moral Understanding • True Beauty",
        "q": "Why was Little Monkey happier as a normal monkey than as a creature with mixed animal parts?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• Monkeys are agile, light, and perfectly designed to leap through trees and eat fruits.<br>• Having a heavy trunk and clumsy neck made him look strange and lose his natural abilities. True beauty lies in being who you are.",
        "marks": 2,
        "rubric": [
          {
            "key": "Loss of natural agility explained",
            "marks": "1 M"
          },
          {
            "key": "Acceptance of natural design emphasized",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grammar • Opposites",
        "q": "Write the opposite of:<br>(a) Strong × _______<br>(b) Happy × _______<br>(c) Beautiful × _______",
        "ans": "<strong>Answers:</strong><br>(a) Strong × <strong>Weak</strong><br>(b) Happy × <strong>Unhappy / Sad</strong><br>(c) Beautiful × <strong>Ugly / Monster-like</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Weak",
            "marks": "1 M"
          },
          {
            "key": "(b) Sad/Unhappy",
            "marks": "1 M"
          },
          {
            "key": "(c) Ugly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'wand'.",
        "ans": "<strong>Sample Sentence:</strong><br>• The kind fairy waved her sparkling golden wand and granted three wishes.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'wand'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Animal Homes Connection",
        "q": "Where do monkeys live? What do they love to eat?",
        "ans": "<strong>Answer:</strong><br>• Monkeys live high on the branches of <strong>trees</strong>.<br>• They love eating <strong>fruits (like bananas and berries), leaves, and nuts</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Trees identified",
            "marks": "1 M"
          },
          {
            "key": "Fruits / bananas identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Mother's Advice",
        "q": "What did Little Monkey's mother tell him when he cried at the riverbank?",
        "ans": "<strong>Answer:</strong><br>• His mother said: <strong>'That is not a monster, that is YOU! You wanted a giraffe’s neck, an elephant’s trunk, and a zebra’s stripes. Don't you remember?'</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Mother explaining it is his own reflection",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) A wise woman gave the monkey a magic wand.<br>(b) Little Monkey kept the magic wand in his pocket forever.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong>. The wise woman gifted him the wand.<br>(b) <strong>False</strong>. Little Monkey happily threw the wand into the river.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) True",
            "marks": "1 M"
          },
          {
            "key": "(b) False with reason",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "What valuable lesson does 'I Want' teach every child?",
        "ans": "<strong>Summary:</strong><br>• Greed and copying others only makes us look foolish.<br>• We should appreciate our own unique abilities and be thankful for who we are.",
        "marks": 2,
        "rubric": [
          {
            "key": "Contentment and self-acceptance explained",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg5",
    "num": 5,
    "unit": "Unit 3: Smiles & Nature",
    "title": "A Smile",
    "subtitle": "Poem on Happiness, Spreading Smiles & The Secret Hiding Place",
    "concepts": [
      "Poem appreciation: A smile is a funny thing that wrinkles your face.",
      "The mystery of a smile: Once it is gone, you can never find its secret hiding place.",
      "The multiplication of smiles: One smile leads to two, spreading warmth to everyone.",
      "Good manners, spreading positivity, and cheering up friends."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"10\"/><circle cx=\"120\" cy=\"55\" r=\"28\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/><circle cx=\"110\" cy=\"48\" r=\"4\" fill=\"#713f12\"/><circle cx=\"130\" cy=\"48\" r=\"4\" fill=\"#713f12\"/><path d=\"M 105 62 Q 120 78 135 62\" fill=\"none\" stroke=\"#713f12\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"120\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#713f12\" text-anchor=\"middle\">Smile 1</text><path d=\"M 170 55 L 230 55\" stroke=\"#ca8a04\" stroke-width=\"4\" stroke-dasharray=\"4,4\"/><text x=\"200\" y=\"45\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#ca8a04\" text-anchor=\"middle\">+</text><circle cx=\"280\" cy=\"55\" r=\"28\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/><circle cx=\"270\" cy=\"48\" r=\"4\" fill=\"#713f12\"/><circle cx=\"290\" cy=\"48\" r=\"4\" fill=\"#713f12\"/><path d=\"M 265 62 Q 280 78 295 62\" fill=\"none\" stroke=\"#713f12\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"280\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#713f12\" text-anchor=\"middle\">Smile 2</text><text x=\"400\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#854d0e\">1 Smile = 2 Smiles!</text></svg>",
    "cbq": {
      "title": "Spreading Smiles in the Classroom",
      "text": "Aman came to school feeling sad because his pet bird had flown away. Priya noticed his gloomy face. She walked up to him, made a silly funny face, and gave him a bright warm smile. Aman couldn't help it — a tiny grin appeared on his face, which turned into a hearty laugh.",
      "question": "How does Priya's action demonstrate the poem 'A Smile'? What happens when one person smiles at another?",
      "answer": "1. The poem says: <strong>'You smile at one, he smiles at you, and so one smile makes two!'</strong><br>2. Priya's smile melted Aman's sadness, proving that smiles are contagious and instantly spread joy and comfort from one heart to another.",
      "rubric": "1.5 M for quoting/connecting 'one smile makes two' + 1.5 M for explaining how smiles spread warmth"
    },
    "questions": [
      {
        "category": "Reading is Fun • Why Funny?",
        "q": "Why is a smile called 'a funny thing' in the poem?",
        "ans": "<strong>Answer:</strong><br>• A smile is called a funny thing because <strong>it wrinkles up your face</strong>, and when it is gone, you can never find its secret hiding place.",
        "marks": 2,
        "rubric": [
          {
            "key": "Wrinkles up your face",
            "marks": "1 M"
          },
          {
            "key": "Secret hiding place",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Secret Place",
        "q": "What happens when a smile is gone?",
        "ans": "<strong>Answer:</strong><br>• When a smile disappears, you will <strong>never find its secret hiding place</strong> anywhere.",
        "marks": 1,
        "rubric": [
          {
            "key": "Never find its secret hiding place",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Smile Multiplication",
        "q": "What is much more wonderful than finding a smile's hiding place?",
        "ans": "<strong>Answer:</strong><br>• It is far more wonderful to see what smiles can do: <strong>when you smile at someone, they smile back at you, and so one smile makes two!</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Smiling at someone makes them smile back",
            "marks": "1 M"
          },
          {
            "key": "One smile makes two concept",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Rhyming Words in Poem",
        "q": "Find words in the poem that rhyme with:<br>(a) Place — _______<br>(b) You — _______",
        "ans": "<strong>Answers:</strong><br>(a) Place rhymes with <strong>Face</strong>.<br>(b) You rhymes with <strong>Two</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) Face",
            "marks": "1 M"
          },
          {
            "key": "(b) Two",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Phonics • Silent Letters",
        "q": "In the word 'wrinkle', which letter is silent (not pronounced)?",
        "ans": "<strong>Answer:</strong><br>• The letter <strong>'W'</strong> is silent in 'wrinkle' (it is pronounced starting with the /r/ sound).",
        "marks": 1,
        "rubric": [
          {
            "key": "Letter 'W' identified as silent",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Words Starting with 'Wr'",
        "q": "Write two other English words where 'W' is silent before 'R'.",
        "ans": "<strong>Answers:</strong><br>1. <strong>Write</strong><br>2. <strong>Wrist</strong> (or Wrong / Wrap).",
        "marks": 2,
        "rubric": [
          {
            "key": "Two valid wr- words (e.g. write, wrist)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Facial Expressions • Feelings",
        "q": "Match each expression to the feeling:<br>(a) A wide smile (b) A frown / scowl (c) Wide open mouth and eyes<br>Feelings: (1) Anger / Displeasure (2) Surprise / Wonder (3) Happiness / Joy",
        "ans": "<strong>Matching:</strong><br>• (a) Wide smile — (3) Happiness / Joy<br>• (b) Frown — (1) Anger / Displeasure<br>• (c) Wide open eyes — (2) Surprise / Wonder",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 correctly matched",
            "marks": "3 M (1 M each)"
          }
        ]
      },
      {
        "category": "Health Benefits of Smiling",
        "q": "Why do doctors say smiling and laughing is good for our health?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Smiling relaxes facial muscles, reduces stress and worries, and releases happy hormones that make our whole body feel healthy and energetic.",
        "marks": 2,
        "rubric": [
          {
            "key": "Stress reduction and relaxation",
            "marks": "1 M"
          },
          {
            "key": "Overall physical/mental wellness",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites • Emotion Words",
        "q": "Write the opposite of:<br>(a) Smile × _______<br>(b) Wonderful × _______<br>(c) Secret × _______",
        "ans": "<strong>Answers:</strong><br>(a) Smile × <strong>Frown / Cry</strong><br>(b) Wonderful × <strong>Terrible / Horrible</strong><br>(c) Secret × <strong>Open / Public / Known</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Frown",
            "marks": "1 M"
          },
          {
            "key": "(b) Terrible",
            "marks": "1 M"
          },
          {
            "key": "(c) Open/Known",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'cheerful'.",
        "ans": "<strong>Sample Sentence:</strong><br>• Our teacher greeted us with a cheerful smile every morning.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'cheerful'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Social Skills • Spreading Joy",
        "q": "How can you bring a smile to your grandmother's face when she is tired?",
        "ans": "<strong>Answer:</strong><br>• By giving her a warm hug, offering her a glass of fresh water, and telling her a funny story about school.",
        "marks": 2,
        "rubric": [
          {
            "key": "Affectionate hug / help offered",
            "marks": "1 M"
          },
          {
            "key": "Sharing cheerful story",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling Check • Smile Words",
        "q": "Fill in the blanks: W _ N D _ R F _ L (marvelous).",
        "ans": "<strong>Answer:</strong><br>• W <strong>O</strong> N D <strong>E</strong> R F <strong>U</strong> L = <strong>WONDERFUL</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "WONDERFUL correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Punctuation Practice",
        "q": "Put question mark or full stop:<br>(a) What can a smile do ___<br>(b) A smile makes everyone feel happy ___",
        "ans": "<strong>Answers:</strong><br>(a) What can a smile do <strong>?</strong> (Question)<br>(b) A smile makes everyone feel happy <strong>.</strong> (Statement)",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) Question mark (?)",
            "marks": "1 M"
          },
          {
            "key": "(b) Full stop (.)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) Smiling costs nothing but gives immense joy.<br>(b) A frown is more pleasant to look at than a smile.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong>. A smile is completely free yet enriches everyone who receives it.<br>(b) <strong>False</strong>. A smile is warm and inviting, whereas a frown looks gloomy.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) True",
            "marks": "1 M"
          },
          {
            "key": "(b) False with reason",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Reflection",
        "q": "What is the ultimate mathematical secret of a smile mentioned in the poem?",
        "ans": "<strong>Summary:</strong><br>• Smiles do not follow ordinary subtraction; they multiply! When you give away one smile, it reflects back from the other person, creating two smiles in the world.",
        "marks": 2,
        "rubric": [
          {
            "key": "Multiplication / reflection of smile explained",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg6",
    "num": 6,
    "unit": "Unit 3: Smiles & Nature",
    "title": "The Wind and the Sun",
    "subtitle": "Aesop's Fable, Contest of Strength & Gentleness vs Force",
    "concepts": [
      "Story comprehension: The Wind and Sun argue about who is stronger.",
      "The contest: Making a walking traveler take off his heavy coat.",
      "The Wind's violent blowing makes the man wrap his coat tighter.",
      "The Sun's gentle, increasing warmth makes the man unbutton and take off his coat.",
      "Moral: Gentle warmth and kindness succeed where fierce anger and brute force fail."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"90\" cy=\"55\" r=\"26\" fill=\"#60a5fa\"/><text x=\"90\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Wind (Blows)</text><circle cx=\"210\" cy=\"55\" r=\"22\" fill=\"#374151\"/><text x=\"210\" y=\"60\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Man in Coat</text><circle cx=\"340\" cy=\"55\" r=\"28\" fill=\"#facc15\" stroke=\"#ea580c\" stroke-width=\"3\"/><text x=\"340\" y=\"60\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#9a3412\" text-anchor=\"middle\">Sun (Shines)</text><text x=\"440\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">Sun Wins!</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Gentleness is stronger than brute force.</text></svg>",
    "cbq": {
      "title": "The Roadside Weather Contest",
      "text": "The Wind puffed out his cheeks and blew furiously: 'WHOOOO-WHOOOO!'. The walking man felt freezing cold, buttoned his woolen coat up to his chin, and wrapped his arms tightly around his chest. Then the Sun smiled and shone warmly. As the rays grew hotter, the man wiped beads of sweat from his forehead, unbuttoned his coat, and sat under a shady tree.",
      "question": "How did the man react to the Wind's fierce blowing? What did the man do when the Sun shone brightly? Who won the contest and why?",
      "answer": "1. Under the fierce Wind, the man <strong>wrapped his coat tighter</strong> and buttoned it up to stay warm.<br>2. When the Sun shone, the man felt hot, <strong>unbuttoned and took off his coat</strong>.<br>3. <strong>The Sun won</strong> because patience, pleasant warmth, and gentleness achieved what anger and brute force could not.",
      "rubric": "1 M for man wrapping coat tighter + 1 M for man taking off coat + 1 M for Sun winning and moral"
    },
    "questions": [
      {
        "category": "Reading is Fun • The Dispute",
        "q": "What did the Wind and the Sun argue about in the beginning?",
        "ans": "<strong>Answer:</strong><br>• The Wind and the Sun argued about <strong>who was stronger</strong> between the two.",
        "marks": 1,
        "rubric": [
          {
            "key": "Who was stronger stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Test",
        "q": "What test did the Wind propose to decide who was stronger?",
        "ans": "<strong>Answer:</strong><br>• The Wind pointed to a man walking down the road and proposed that <strong>whoever could make him take off his coat first</strong> would be declared the winner.",
        "marks": 2,
        "rubric": [
          {
            "key": "Walking man in coat identified",
            "marks": "1 M"
          },
          {
            "key": "Making him take off coat condition explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Wind's Strategy",
        "q": "What did the Wind do first to get the man's coat off?",
        "ans": "<strong>Answer:</strong><br>• The Wind puffed out his cheeks and blew as hard as he could: <strong>'Whoooo-whoooo!'</strong> creating a fierce freezing gale.",
        "marks": 2,
        "rubric": [
          {
            "key": "Puffed cheeks and blew hard",
            "marks": "1 M"
          },
          {
            "key": "Sound 'Whoooo-whoooo' mentioned",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Sun's Strategy",
        "q": "What did the Sun do to make the man take off his coat?",
        "ans": "<strong>Answer:</strong><br>• The Sun smiled peacefully and <strong>shone brighter and hotter</strong>, making the day so warm that the man perspired and took off his heavy coat.",
        "marks": 2,
        "rubric": [
          {
            "key": "Shone brighter and hotter",
            "marks": "1 M"
          },
          {
            "key": "Man took off coat due to heat",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Talk Time • Aesop's Moral",
        "q": "What is the moral lesson of 'The Wind and the Sun'?",
        "ans": "<strong>Answer:</strong><br>• <strong>Persuasion and gentleness are far more powerful than brute force and shouting.</strong> Warm kindness wins hearts easily.",
        "marks": 2,
        "rubric": [
          {
            "key": "Gentleness over brute force stated",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Opposites • Story Pairs",
        "q": "Write the opposite of:<br>(a) Hot × _______<br>(b) Strong × _______<br>(c) Win × _______",
        "ans": "<strong>Answers:</strong><br>(a) Hot × <strong>Cold</strong><br>(b) Strong × <strong>Weak</strong><br>(c) Win × <strong>Lose</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Cold",
            "marks": "1 M"
          },
          {
            "key": "(b) Weak",
            "marks": "1 M"
          },
          {
            "key": "(c) Lose",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Action Verbs • Wind and Sun",
        "q": "Match the character to its action word in the story:<br>(a) The Wind (b) The Sun (c) The Man<br>Actions: (1) Shone (2) Blew (3) Walked",
        "ans": "<strong>Matching:</strong><br>• (a) The Wind — (2) Blew<br>• (b) The Sun — (1) Shone<br>• (c) The Man — (3) Walked",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 correctly matched",
            "marks": "3 M (1 M each)"
          }
        ]
      },
      {
        "category": "Describing Words (Adjectives)",
        "q": "Identify the describing word in: 'The man wore a heavy woolen coat.'",
        "ans": "<strong>Answer:</strong><br>• The describing words (adjectives) are <strong>'heavy'</strong> and <strong>'woolen'</strong> (describing the noun 'coat').",
        "marks": 2,
        "rubric": [
          {
            "key": "heavy identified",
            "marks": "1 M"
          },
          {
            "key": "woolen identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Degrees of Comparison",
        "q": "Fill in the blank with the comparative degree:<br>The Sun proved that he was _______ than the Wind (strong / stronger / strongest).",
        "ans": "<strong>Answer:</strong><br>• The Sun proved that he was <strong>stronger</strong> than the Wind.",
        "marks": 1,
        "rubric": [
          {
            "key": "stronger correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'puffed'.",
        "ans": "<strong>Sample Sentence:</strong><br>• The boy puffed out his cheeks and blew out all seven candles on his birthday cake.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct grammatical sentence with 'puffed'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Dialogue Writing • Direct Speech",
        "q": "What did the Wind admit to the Sun at the end of the story?",
        "ans": "<strong>Answer:</strong><br>• The Wind said: <strong>'I give up! I cannot get his coat off. You have won, Sun!'</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Admitting defeat politely",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Spelling Check • Weather Words",
        "q": "Fill in the missing letters: B R _ G H T (giving out light).",
        "ans": "<strong>Answer:</strong><br>• B R <strong>I</strong> G H T = <strong>BRIGHT</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "BRIGHT correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Real-Life Application • Resolving Arguments",
        "q": "If two friends are having an argument in class, should they shout angrily or talk calmly?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• They should <strong>talk calmly and listen to each other</strong>.<br>• Like the Sun in the story, gentle and calm words resolve problems peacefully, while angry shouting only makes things worse.",
        "marks": 2,
        "rubric": [
          {
            "key": "Calm dialogue chosen",
            "marks": "1 M"
          },
          {
            "key": "Story analogy of Sun's warmth explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) The Wind blew so hard that the man took off his coat immediately.<br>(b) The Sun shone warmly and won the contest.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. The harder the Wind blew, the tighter the man held his coat.<br>(b) <strong>True</strong>. The Sun won through gentle warmth.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "Why is Aesop's fable 'The Wind and the Sun' loved across the world?",
        "ans": "<strong>Summary:</strong><br>• It uses a simple natural contest between the elements to teach a timeless truth: kindness, patience, and warmth are infinitely more effective than force, pride, and hostility.",
        "marks": 2,
        "rubric": [
          {
            "key": "Timeless moral of kindness vs force articulated",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg7",
    "num": 7,
    "unit": "Unit 4: Seasons & Storms",
    "title": "Rain",
    "subtitle": "Poem of Rainfall, Umbrellas, Ships at Sea & Refreshing Showers",
    "concepts": [
      "Poem recitation: 'The rain is raining all around, it falls on field and tree...'",
      "Universal nature of rain: showering on pastures, forests, rooftops, umbrellas, and distant ocean ships.",
      "Rainy season essentials: umbrellas, raincoats, gumboots, paper boats.",
      "Rhyming pairs and peaceful imagery of gentle monsoon rain."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><path d=\"M 60 20 Q 90 5 120 20 Q 150 10 170 30 Q 130 50 60 40 Z\" fill=\"#94a3b8\"/><line x1=\"80\" y1=\"50\" x2=\"70\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/><line x1=\"110\" y1=\"50\" x2=\"100\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/><line x1=\"140\" y1=\"50\" x2=\"130\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/><path d=\"M 230 75 Q 270 35 310 75 Z\" fill=\"#ef4444\"/><line x1=\"270\" y1=\"75\" x2=\"270\" y2=\"100\" stroke=\"#7f1d1d\" stroke-width=\"3\"/><path d=\"M 390 85 L 440 85 L 430 98 L 400 98 Z\" fill=\"#f59e0b\"/><polygon points=\"415,85 415,60 435,75\" fill=\"#ffffff\"/><text x=\"250\" y=\"112\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Rain falls on field and tree, on umbrellas and ships at sea!</text></svg>",
    "cbq": {
      "title": "Class 2 Rainy Day Window Observation",
      "text": "During English period, dark silver clouds covered the sky. Cool raindrops started tapping gently on the glass window. Kabir looked out and saw rain soaking the green football ground, dripping from neem tree leaves, and bouncing off colourful umbrellas held by walking parents.",
      "question": "Where did the rain fall outside Kabir's classroom? How does this match Robert Louis Stevenson's poem 'Rain'?",
      "answer": "1. Outside the classroom, rain fell on the <strong>open field (football ground), green tree leaves, and colourful umbrellas</strong>.<br>2. This matches the exact lines of Stevenson's poem: <strong>'The rain is raining all around, it falls on field and tree; it rains on the umbrellas here, and on the ships at sea.'</strong>",
      "rubric": "1.5 M for field, trees, and umbrellas observed + 1.5 M for quoting/connecting poem lines"
    },
    "questions": [
      {
        "category": "Reading is Fun • Poem Locations",
        "q": "Where does the rain fall in the poem?",
        "ans": "<strong>Answer:</strong><br>• The rain falls <strong>all around</strong>:<br>1. On <strong>fields</strong><br>2. On <strong>trees</strong><br>3. On <strong>umbrellas</strong> here<br>4. On the <strong>ships at sea</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Field and tree",
            "marks": "1 M"
          },
          {
            "key": "Umbrellas",
            "marks": "1 M"
          },
          {
            "key": "Ships at sea",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Rain Gear",
        "q": "What do people use to keep themselves dry when it rains?",
        "ans": "<strong>Answer:</strong><br>• People use <strong>umbrellas</strong>, wear <strong>raincoats</strong> with hoods, and wear waterproof <strong>gumboots</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Umbrellas and raincoats named",
            "marks": "1 M"
          },
          {
            "key": "Gumboots named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Rhyming Words in Poem",
        "q": "Find words in the poem that rhyme with:<br>(a) Tree — _______<br>(b) All — _______",
        "ans": "<strong>Answers:</strong><br>(a) Tree rhymes with <strong>Sea</strong>.<br>(b) All rhymes with <strong>Ball / Fall</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) Sea",
            "marks": "1 M"
          },
          {
            "key": "(b) Fall/Ball",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Paper Boats Tradition",
        "q": "What playful activity do children love doing with puddles of rainwater in the courtyard?",
        "ans": "<strong>Answer:</strong><br>• Children fold colourful paper to make <strong>paper boats</strong> and sail them in flowing rainwater puddles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Paper boats mentioned",
            "marks": "1 M"
          },
          {
            "key": "Sailing in puddles described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sound Words • Rain Onomatopoeia",
        "q": "What sound do raindrops make when they hit a tin roof or window sill?",
        "ans": "<strong>Answer:</strong><br>• Raindrops make a rhythmic <strong>'Pitter-patter, pitter-patter'</strong> sound.",
        "marks": 1,
        "rubric": [
          {
            "key": "Pitter-patter correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Importance of Rain • Farmers and Crops",
        "q": "Why do farmers in India wait eagerly for the monsoon rain?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Farmers need rainwater to irrigate their crops (like rice, wheat, and pulses).<br>• Good monsoon rains fill rivers, ponds, and wells, ensuring abundant food harvests for the country.",
        "marks": 2,
        "rubric": [
          {
            "key": "Irrigation for crops explained",
            "marks": "1 M"
          },
          {
            "key": "Replenishing water bodies and food supply",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Water Bodies",
        "q": "Where do ships sail: on a small puddle or on the deep sea?",
        "ans": "<strong>Answer:</strong><br>• Big ships sail across the <strong>deep sea / ocean</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Deep sea / ocean correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Details • Poet's Name",
        "q": "Who wrote the classic four-line poem 'Rain'?",
        "ans": "<strong>Answer:</strong><br>• The poem was written by the famous poet <strong>Robert Louis Stevenson</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Robert Louis Stevenson correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'umbrella'.",
        "ans": "<strong>Sample Sentence:</strong><br>• Neha opened her bright yellow umbrella as soon as big raindrops began to fall.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'umbrella'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Nature Fact • Rainbow Formation",
        "q": "What colorful arc often appears in the sky when the sun shines right after rain?",
        "ans": "<strong>Answer:</strong><br>• A seven-colored <strong>Rainbow</strong> appears in the sky opposite the sun.",
        "marks": 1,
        "rubric": [
          {
            "key": "Rainbow correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites • Weather",
        "q": "Write the opposite of:<br>(a) Wet × _______<br>(b) Sea × _______<br>(c) Around × _______",
        "ans": "<strong>Answers:</strong><br>(a) Wet × <strong>Dry</strong><br>(b) Sea × <strong>Land</strong><br>(c) Around × <strong>Inside / Center</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Dry",
            "marks": "1 M"
          },
          {
            "key": "(b) Land",
            "marks": "1 M"
          },
          {
            "key": "(c) Inside",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creatures in Rain",
        "q": "Which green creature loves to croak happily near ponds when it rains?",
        "ans": "<strong>Answer:</strong><br>• A <strong>Frog</strong> croaks happily in the rainy season.",
        "marks": 1,
        "rubric": [
          {
            "key": "Frog identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grammar • Naming and Describing Words",
        "q": "In the line 'Cool rain falls on green fields', identify the naming words and describing words.",
        "ans": "<strong>Answer:</strong><br>• <strong>Naming words (nouns):</strong> rain, fields.<br>• <strong>Describing words (adjectives):</strong> cool, green.",
        "marks": 2,
        "rubric": [
          {
            "key": "Nouns identified",
            "marks": "1 M"
          },
          {
            "key": "Adjectives identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) Rain falls only inside our bedrooms.<br>(b) An umbrella protects us from getting soaked.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. Rain falls outside on fields, trees, and sea.<br>(b) <strong>True</strong>. An umbrella shields us from rain.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Reflection",
        "q": "Why is 'Rain' considered one of the simplest yet most beautiful nature poems?",
        "ans": "<strong>Summary:</strong><br>• In just four gentle lines, it links nature on land (fields and trees), human daily life (umbrellas), and faraway oceans (ships at sea), showing how rain unites the entire Earth in refreshing life.",
        "marks": 2,
        "rubric": [
          {
            "key": "Connection between land, humans, and sea explained",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg8",
    "num": 8,
    "unit": "Unit 4: Seasons & Storms",
    "title": "Storm in the Garden",
    "subtitle": "Sunu-sunu the Snail, Thunderstorm in the Garden & Safety at Home",
    "concepts": [
      "Story comprehension: Sunu-sunu the little snail visits his friends, the ants.",
      "The sudden arrival of a fierce storm: wind whistling, lightning flashing, thunder rolling.",
      "Vivid sound words: shay-shay, zzak-zzak, gadam-gudum, sss-ta-ta.",
      "Animal instinct and safety: Ants hide under flower pots, Sunu-sunu pulls into his shell and goes home safe to mother."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"90\" cy=\"65\" r=\"24\" fill=\"#ca8a04\"/><path d=\"M 90 41 Q 120 41 120 65 Q 120 89 90 89\" fill=\"none\" stroke=\"#713f12\" stroke-width=\"4\"/><circle cx=\"125\" cy=\"55\" r=\"14\" fill=\"#a16207\"/><line x1=\"130\" y1=\"45\" x2=\"135\" y2=\"35\" stroke=\"#713f12\" stroke-width=\"2\"/><circle cx=\"135\" cy=\"35\" r=\"3\" fill=\"#713f12\"/><text x=\"100\" y=\"105\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#713f12\">Sunu-sunu</text><line x1=\"200\" y1=\"25\" x2=\"250\" y2=\"65\" stroke=\"#eab308\" stroke-width=\"3\"/><line x1=\"250\" y1=\"65\" x2=\"230\" y2=\"75\" stroke=\"#eab308\" stroke-width=\"3\"/><line x1=\"230\" y1=\"75\" x2=\"270\" y2=\"105\" stroke=\"#eab308\" stroke-width=\"3\"/><text x=\"250\" y=\"20\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#ca8a04\">Lightning (Zzak!)</text><rect x=\"340\" y=\"45\" width=\"60\" height=\"40\" fill=\"#ea580c\" rx=\"4\"/><circle cx=\"360\" cy=\"90\" r=\"4\" fill=\"#1e293b\"/><circle cx=\"380\" cy=\"90\" r=\"4\" fill=\"#1e293b\"/><text x=\"370\" y=\"70\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Flowerpot</text><text x=\"440\" y=\"70\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#15803d\">Safe Home!</text></svg>",
    "cbq": {
      "title": "Sunu-sunu's Stormy Garden Adventure",
      "text": "Sunu-sunu the snail was playing happily with his ant friends. The ants climbed all over him — hee-hee! Suddenly, black clouds arrived. Thunder rolled: GADAM-GUDUM! Lightning flashed: ZZAK-ZZAK! Rain poured: SSS-TA-TA! The ants shouted: 'Hurry, Sunu-sunu! Go home! Your mother will worry!'. Sunu-sunu pulled his head and tail into his hard spiral shell and did not get wet at all.",
      "question": "Who was Sunu-sunu visiting? What sound did the thunder make? How did Sunu-sunu protect himself from the heavy rain?",
      "answer": "1. Sunu-sunu was visiting his friends, <strong>the ants</strong> in the garden.<br>2. The thunder rolled with the sound: <strong>'GADAM-GUDUM!'</strong>.<br>3. Sunu-sunu protected himself by <strong>pulling his head and tail completely inside his hard spiral shell</strong>, staying dry and safe.",
      "rubric": "1 M for visiting ants + 1 M for 'GADAM-GUDUM' sound + 1 M for pulling into shell protection"
    },
    "questions": [
      {
        "category": "Reading is Fun • Snail Identity",
        "q": "Who was Sunu-sunu?",
        "ans": "<strong>Answer:</strong><br>• Sunu-sunu was a cute <strong>little snail</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Little snail identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Ant Friends",
        "q": "Who was Sunu-sunu visiting in the garden?",
        "ans": "<strong>Answer:</strong><br>• He was visiting his dear friends, <strong>the ants</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "The ants identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Ant Shelter",
        "q": "Where were the ants hiding when the ferocious storm broke out?",
        "ans": "<strong>Answer:</strong><br>• The ants scurried and were hiding <strong>underneath a terracotta flowerpot</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Underneath a flowerpot identified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Snail's Body Armor",
        "q": "Did Sunu-sunu get wet in the storm? Explain why or why not.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>No</strong>, Sunu-sunu did not get wet at all.<br>• <strong>Reason:</strong> He pulled his head, feelers, and tail inside his <strong>hard spiral shell</strong>, which acted as a natural waterproof umbrella.",
        "marks": 2,
        "rubric": [
          {
            "key": "Did not get wet confirmed",
            "marks": "1 M"
          },
          {
            "key": "Pulled inside shell reason explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Storm Sound Words • Onomatopoeia",
        "q": "Match each storm phenomenon to its sound word in the story:<br>(a) Wind blowing (b) Lightning flashing (c) Rain pouring (d) Thunder rolling<br>Sounds: (1) Zzak-zzak! (2) Shay-shay! (3) Gadam-gudum! (4) Sita-sita, pita-pita!",
        "ans": "<strong>Matching:</strong><br>• (a) Wind blowing — (2) Shay-shay!<br>• (b) Lightning flashing — (1) Zzak-zzak!<br>• (c) Rain pouring — (4) Sita-sita, pita-pita!<br>• (d) Thunder rolling — (3) Gadam-gudum!",
        "marks": 4,
        "rubric": [
          {
            "key": "All 4 sound words correctly matched",
            "marks": "4 M (1 M each)"
          }
        ]
      },
      {
        "category": "Animal Senses • Feelers",
        "q": "What does a snail have on top of its head to feel its way around?",
        "ans": "<strong>Answer:</strong><br>• A snail has two pairs of retractable <strong>feelers (tentacles)</strong> on top of its head to touch, smell, and detect light.",
        "marks": 2,
        "rubric": [
          {
            "key": "Feelers / tentacles identified",
            "marks": "1 M"
          },
          {
            "key": "Function of sensing / touching explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Mother's Love & Home",
        "q": "Where was Sunu-sunu's mother sitting when he reached home?",
        "ans": "<strong>Answer:</strong><br>• Sunu-sunu's mother was sitting safely <strong>under a big flat stone</strong> near the garden well.",
        "marks": 2,
        "rubric": [
          {
            "key": "Under a stone near the well identified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Story Narration • Sharing with Mom",
        "q": "What did Sunu-sunu do as soon as he reached his mother?",
        "ans": "<strong>Answer:</strong><br>• He happily crawled into her lap and told her all about the storm — the howling wind, flashing lightning, rolling thunder, and roaring rain!",
        "marks": 2,
        "rubric": [
          {
            "key": "Crawled to mother and recounted storm sounds",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Building • Compound Words",
        "q": "Make compound words from the story:<br>(a) Flower + pot = _______<br>(b) Light + ning = _______<br>(c) Rain + drops = _______",
        "ans": "<strong>Answers:</strong><br>(a) Flower + pot = <strong>Flowerpot</strong><br>(b) Light + ning = <strong>Lightning</strong><br>(c) Rain + drops = <strong>Raindrops</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Flowerpot",
            "marks": "1 M"
          },
          {
            "key": "(b) Lightning",
            "marks": "1 M"
          },
          {
            "key": "(c) Raindrops",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites • Storm Words",
        "q": "Write the opposite of:<br>(a) Slow × _______<br>(b) Safe × _______<br>(c) Outside × _______",
        "ans": "<strong>Answers:</strong><br>(a) Slow × <strong>Fast / Quick</strong><br>(b) Safe × <strong>Dangerous / Unsafe</strong><br>(c) Outside × <strong>Inside</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Fast",
            "marks": "1 M"
          },
          {
            "key": "(b) Dangerous",
            "marks": "1 M"
          },
          {
            "key": "(c) Inside",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'thunder'.",
        "ans": "<strong>Sample Sentence:</strong><br>• Loud thunder rattled the window panes as the monsoon storm approached.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence using 'thunder'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Nature Science • Snail Slime",
        "q": "Why does a snail leave a silvery shiny trail behind as it crawls?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• A snail produces a moist, sticky mucus (slime) from its foot.<br>• This slime smooths rough surfaces, reduces friction, and protects its soft underbelly from getting cut by sharp stones.",
        "marks": 2,
        "rubric": [
          {
            "key": "Mucus / slime production explained",
            "marks": "1 M"
          },
          {
            "key": "Protection from sharp surfaces",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Punctuation • Exclamation Sounds",
        "q": "Why are sound words like 'ZZAK!' and 'GADAM-GUDUM!' written with exclamation marks?",
        "ans": "<strong>Answer:</strong><br>• Because they represent sudden, loud, and shocking natural sounds during a thunderstorm.",
        "marks": 1,
        "rubric": [
          {
            "key": "Sudden loud sounds / emotion explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) Sunu-sunu was swimming in the sea.<br>(b) The ants told Sunu-sunu to hurry home to his mother.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. Sunu-sunu lived and played in a garden.<br>(b) <strong>True</strong>. The caring ants warned him to rush home.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "What do we learn from 'Storm in the Garden'?",
        "ans": "<strong>Summary:</strong><br>• Nature has provided unique shelters to every tiny creature (like a snail's shell).<br>• When danger strikes, our true friends advise us wisely, and home with parents is the safest place in the world.",
        "marks": 2,
        "rubric": [
          {
            "key": "Nature's protective design and safety of home summarized",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg9",
    "num": 9,
    "unit": "Unit 5: Animals & Folktales",
    "title": "Zoo Manners",
    "subtitle": "Etiquette at the Zoo, Respecting Wildlife & Gentle Observation",
    "concepts": [
      "Poem appreciation: 'Be careful what you say or do when you visit the animals at the zoo.'",
      "Treating animals with dignity: not mocking the camel's proud hump or chimpanzee's wise smile.",
      "The noble penguins strutting around the lake, understanding remarks.",
      "Rules of visiting a zoo: no feeding, no teasing, no shouting, maintaining distance."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><circle cx=\"90\" cy=\"55\" r=\"24\" fill=\"#d97706\"/><path d=\"M 80 40 Q 90 20 100 40 Z\" fill=\"#b45309\"/><text x=\"90\" y=\"105\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#78350f\" text-anchor=\"middle\">Camel Hump</text><circle cx=\"210\" cy=\"55\" r=\"22\" fill=\"#475569\"/><text x=\"210\" y=\"105\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Chimpanzee</text><circle cx=\"330\" cy=\"55\" r=\"20\" fill=\"#0284c7\"/><text x=\"330\" y=\"105\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Penguin Strut</text><text x=\"440\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#15803d\">Be Kind!</text><text x=\"250\" y=\"115\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Treat them well and you will always be welcome at the zoo.</text></svg>",
    "cbq": {
      "title": "Class 2 Field Trip to National Zoological Park",
      "text": "Class 2 visited the National Zoological Park with their science teacher. Outside the gate, the teacher read the visitor rules: 'Do not throw plastic, do not feed bread to deer, and do not make teasing faces at monkeys.' Inside, the children watched tall camels walking proudly, and black-and-white penguins strutting gracefully around the pool.",
      "question": "What warnings does the poem 'Zoo Manners' give about camels and penguins? Why must visitors never tease zoo animals?",
      "answer": "1. <strong>Camel warning:</strong> Do not laugh at his hump, for he is proud of his noble bump.<br>2. <strong>Penguin warning:</strong> The penguins strutting around the lake are noble and understand every remark you make.<br>3. <strong>Why no teasing:</strong> Teasing stresses wild animals, makes them aggressive or unhappy, and spoils their peace. Respectful behavior ensures a safe, welcoming zoo for all.",
      "rubric": "1 M for camel's noble hump + 1 M for penguin's understanding + 1 M for why teasing is harmful"
    },
    "questions": [
      {
        "category": "Reading is Fun • Opening Warning",
        "q": "What does the poet advise us to be careful about when visiting the zoo?",
        "ans": "<strong>Answer:</strong><br>• The poet warns us to <strong>be very careful what we say or do</strong> when we visit the animals at the zoo.",
        "marks": 1,
        "rubric": [
          {
            "key": "Careful what we say or do stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Camel's Hump",
        "q": "Why should we not make fun of the camel's hump?",
        "ans": "<strong>Answer:</strong><br>• Because the camel is <strong>very proud of his noble bump</strong>, which stores fat to give him energy in the desert.",
        "marks": 2,
        "rubric": [
          {
            "key": "Proud of his noble bump",
            "marks": "1 M"
          },
          {
            "key": "Desert energy storage explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Chimpanzee's Wisdom",
        "q": "What does the chimpanzee think of himself in the poem?",
        "ans": "<strong>Answer:</strong><br>• The chimpanzee thinks he is <strong>just as wise as you or me</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Just as wise as humans stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Penguins",
        "q": "What are the penguins doing around the lake in the zoo?",
        "ans": "<strong>Answer:</strong><br>• The penguins are <strong>strutting gracefully around the pool</strong> and can understand the remarks visitors make.",
        "marks": 2,
        "rubric": [
          {
            "key": "Strutting around pool / lake",
            "marks": "1 M"
          },
          {
            "key": "Understanding remarks",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Zoo Reward",
        "q": "What reward do you get if you treat zoo animals well?",
        "ans": "<strong>Answer:</strong><br>• If you treat them as well as they do you, <strong>you'll always be welcome at the zoo</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Always be welcome at the zoo quoted",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Word Meanings",
        "q": "What does the word 'strutting' mean in the poem?",
        "ans": "<strong>Answer:</strong><br>• <strong>Strutting</strong> means walking with a stiff, proud, and dignified step.",
        "marks": 1,
        "rubric": [
          {
            "key": "Walking proudly and stiffly defined",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Rhyming Words in Poem",
        "q": "Find words in the poem that rhyme with:<br>(a) Do — _______<br>(b) Bump — _______<br>(c) Lake — _______",
        "ans": "<strong>Answers:</strong><br>(a) Do rhymes with <strong>Zoo / You</strong>.<br>(b) Bump rhymes with <strong>Hump</strong>.<br>(c) Lake rhymes with <strong>Make</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Zoo/You",
            "marks": "1 M"
          },
          {
            "key": "(b) Hump",
            "marks": "1 M"
          },
          {
            "key": "(c) Make",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Zoo Etiquette Rules",
        "q": "List three important rules that every visitor must follow inside a zoo.",
        "ans": "<strong>Zoo Rules:</strong><br>1. Do not feed outside snacks to the animals.<br>2. Do not throw stones, tap glass, or tease the caged animals.<br>3. Keep the premises clean and dispose of all trash in litter bins.",
        "marks": 3,
        "rubric": [
          {
            "key": "No feeding",
            "marks": "1 M"
          },
          {
            "key": "No teasing/disturbing",
            "marks": "1 M"
          },
          {
            "key": "No littering",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Animal Adaptations • Camel Hump",
        "q": "Why do camels have humps on their backs?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• A camel's hump stores <strong>fat tissue</strong>.<br>• When walking across hot, waterless deserts for days, the camel converts this fat into energy and moisture, earning it the title 'Ship of the Desert'.",
        "marks": 2,
        "rubric": [
          {
            "key": "Fat storage explained",
            "marks": "1 M"
          },
          {
            "key": "Energy in desert / Ship of the Desert",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grammar • Opposites",
        "q": "Write the opposite of:<br>(a) Proud × _______<br>(b) Wise × _______<br>(c) Welcome × _______",
        "ans": "<strong>Answers:</strong><br>(a) Proud × <strong>Humble / Modest</strong><br>(b) Wise × <strong>Foolish / Silly</strong><br>(c) Welcome × <strong>Unwelcome / Forbidden</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Humble",
            "marks": "1 M"
          },
          {
            "key": "(b) Foolish",
            "marks": "1 M"
          },
          {
            "key": "(c) Unwelcome",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'noble'.",
        "ans": "<strong>Sample Sentence:</strong><br>• The majestic lion walked across the savanna with a noble stride.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'noble'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Animal Facts • Penguins",
        "q": "Can penguins fly in the air like parrots? How do they move in water?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>No</strong>, penguins cannot fly in the air.<br>• Their wings have evolved into sleek, paddle-like <strong>flippers</strong> that allow them to 'fly' underwater with astonishing speed to catch fish.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cannot fly in air",
            "marks": "1 M"
          },
          {
            "key": "Flippers for underwater swimming",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling Check • Zoo Words",
        "q": "Unscramble: C H I M P A N Z E E = _______",
        "ans": "<strong>Answer:</strong><br>• C H I M P A N Z E E = <strong>CHIMPANZEE</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "CHIMPANZEE correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) We should shout loudly and tap on glass cages to scare zoo animals.<br>(b) Animals feel emotions like fear, affection, and pride.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. Tapping glass scares animals and is strictly prohibited in zoos.<br>(b) <strong>True</strong>. Animals are sentient living beings that feel feelings.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Reflection",
        "q": "What is the broader message of 'Zoo Manners'?",
        "ans": "<strong>Summary:</strong><br>• It teaches children empathy, dignity, and compassion toward all wildlife.<br>• Every animal has evolved special features worthy of respect, and we should observe nature with quiet humility.",
        "marks": 2,
        "rubric": [
          {
            "key": "Empathy, dignity, and respect for wildlife summarized",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg10",
    "num": 10,
    "unit": "Unit 5: Animals & Folktales",
    "title": "Funny Bunny",
    "subtitle": "The Acorn Fall, The Sky is Falling Panic & Foxy Loxy's Trick",
    "concepts": [
      "Story comprehension: An acorn falls on Funny Bunny's head; he panics thinking 'The sky is falling!'.",
      "Spreading rumors: Henny Penny, Cocky Locky, Ducky Lucky, and Goosey Poosey follow blindly without checking.",
      "The danger of gullibility: Meeting the cunning Foxy Loxy who tricks them into his cave den.",
      "Moral: Think before you panic; never believe rumors blindly, and beware of deceitful strangers."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"70\" cy=\"55\" r=\"20\" fill=\"#93c5fd\"/><text x=\"70\" y=\"60\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Bunny</text><circle cx=\"140\" cy=\"55\" r=\"18\" fill=\"#f87171\"/><text x=\"140\" y=\"60\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Henny</text><circle cx=\"210\" cy=\"55\" r=\"18\" fill=\"#fb923c\"/><text x=\"210\" y=\"60\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Cocky</text><circle cx=\"280\" cy=\"55\" r=\"18\" fill=\"#facc15\"/><text x=\"280\" y=\"60\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#713f12\" text-anchor=\"middle\">Ducky</text><circle cx=\"350\" cy=\"55\" r=\"18\" fill=\"#a3e635\"/><text x=\"350\" y=\"60\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">Goosey</text><circle cx=\"430\" cy=\"55\" r=\"24\" fill=\"#ea580c\"/><text x=\"430\" y=\"60\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">Foxy Loxy</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Don't believe rumors blindly — verify facts first!</text></svg>",
    "cbq": {
      "title": "The Acorn Panic Investigation",
      "text": "Funny Bunny sat under a tall oak tree. Suddenly, OUCH! A ripe brown nut (acorn) dropped straight from a high branch and struck him on the head. Without looking up at the tree branches, Funny Bunny shouted: 'Oh no! The sky is falling down! I must run and tell the King!'. On the road, he repeated this false alarm to Henny Penny, Cocky Locky, Ducky Lucky, and Goosey Poosey, who all ran after him in panic.",
      "question": "What actually fell on Funny Bunny's head? What mistake did he make? Why did the other animals follow him blindly?",
      "answer": "1. A small, ripe <strong>acorn (tree nut)</strong> fell on his head.<br>2. <strong>His mistake:</strong> He did not look up to investigate what hit him; he jumped to a foolish, panicked conclusion that 'the sky is falling'.<br>3. The other animals followed him because they <strong>believed a rumor blindly without using their own senses or reasoning</strong>.",
      "rubric": "1 M for acorn + 1 M for jumping to false conclusion + 1 M for blind faith in rumors"
    },
    "questions": [
      {
        "category": "Reading is Fun • The Accident",
        "q": "One day, a nut fell on _______ (Funny Bunny / Cocky Locky / the King).",
        "ans": "<strong>Answer:</strong><br>• One day, a nut fell on <strong>Funny Bunny</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Funny Bunny chosen",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Panic Claim",
        "q": "What did Funny Bunny think had happened when the nut hit his head?",
        "ans": "<strong>Answer:</strong><br>• Funny Bunny thought that <strong>the sky was falling down</strong> and that a piece of the sky had hit him.",
        "marks": 2,
        "rubric": [
          {
            "key": "The sky is falling down stated",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Reporting to the King",
        "q": "Where did Funny Bunny decide to go, and who did he want to tell?",
        "ans": "<strong>Answer:</strong><br>• He decided to go to the palace to tell <strong>the King</strong> about the sky falling.",
        "marks": 1,
        "rubric": [
          {
            "key": "To tell the King stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Character Sequence",
        "q": "Name all the birds and animals Funny Bunny met on the way, in order.",
        "ans": "<strong>Step-by-Step Order:</strong><br>1. <strong>Henny Penny</strong> (the hen)<br>2. <strong>Cocky Locky</strong> (the rooster)<br>3. <strong>Ducky Lucky</strong> (the duck)<br>4. <strong>Goosey Poosey</strong> (the goose)<br>5. <strong>Foxy Loxy</strong> (the clever fox).",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 characters named in correct sequence",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Fox's Trick",
        "q": "What did Foxy Loxy say to the panicked animals?",
        "ans": "<strong>Answer:</strong><br>• Foxy Loxy smiled slyly and said: <strong>'The King lives this way. Follow me!'</strong> and led them straight into his dark cave den.",
        "marks": 2,
        "rubric": [
          {
            "key": "Told them the King lives this way",
            "marks": "1 M"
          },
          {
            "key": "Led them to his den",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Sad End",
        "q": "What happened to Funny Bunny and his foolish friends at the end?",
        "ans": "<strong>Answer:</strong><br>• Foxy Loxy trapped them in his cave and <strong>ate them all up</strong>. That was the tragic end of Funny Bunny and his gullible followers.",
        "marks": 2,
        "rubric": [
          {
            "key": "Foxy Loxy ate them up stated",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Rhyming Names • Word Play",
        "q": "Notice the rhyming pairs in the character names:<br>(a) Funny — _______<br>(b) Henny — _______<br>(c) Ducky — _______<br>(d) Foxy — _______",
        "ans": "<strong>Answers:</strong><br>(a) Funny — <strong>Bunny</strong><br>(b) Henny — <strong>Penny</strong><br>(c) Ducky — <strong>Lucky</strong><br>(d) Foxy — <strong>Loxy</strong>",
        "marks": 4,
        "rubric": [
          {
            "key": "All 4 rhyming names matched",
            "marks": "4 M (1 M each)"
          }
        ]
      },
      {
        "category": "Moral Reasoning • Rumor Control",
        "q": "What should Henny Penny or Ducky Lucky have done before running off to tell the King?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• They should have stopped, looked up at the blue sky, and checked if the sky was actually falling.<br>• They should have asked: 'Where did the sky break?' instead of blindly panicking.",
        "marks": 2,
        "rubric": [
          {
            "key": "Verifying the fact / looking up at sky",
            "marks": "1 M"
          },
          {
            "key": "Not panicking blindly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites • Story Adjectives",
        "q": "Write the opposite of:<br>(a) Clever × _______<br>(b) Fall × _______<br>(c) Follow × _______",
        "ans": "<strong>Answers:</strong><br>(a) Clever × <strong>Foolish / Silly</strong><br>(b) Fall × <strong>Rise</strong><br>(c) Follow × <strong>Lead</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Foolish",
            "marks": "1 M"
          },
          {
            "key": "(b) Rise",
            "marks": "1 M"
          },
          {
            "key": "(c) Lead",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Nut Types",
        "q": "What is an acorn? Which animal is famous for collecting acorns in tree hollows?",
        "ans": "<strong>Answer:</strong><br>• An acorn is the small, hard brown nut of an <strong>oak tree</strong>.<br>• <strong>Squirrels</strong> are famous for gathering and storing acorns for winter.",
        "marks": 2,
        "rubric": [
          {
            "key": "Nut of oak tree",
            "marks": "1 M"
          },
          {
            "key": "Squirrels identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'stranger'.",
        "ans": "<strong>Sample Sentence:</strong><br>• We should never follow an unknown stranger or accept sweets from them.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'stranger'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Direct Speech • Quotes from Story",
        "q": "Who said these words:<br>(a) 'Ouch! The sky is falling down!'<br>(b) 'The King lives this way. Follow me!'",
        "ans": "<strong>Answers:</strong><br>(a) <strong>Funny Bunny</strong> said: 'Ouch! The sky is falling down!'.<br>(b) <strong>Foxy Loxy</strong> said: 'The King lives this way. Follow me!'.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) Funny Bunny",
            "marks": "1 M"
          },
          {
            "key": "(b) Foxy Loxy",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Animal Homes • Fox's Den",
        "q": "What do we call the underground shelter or cave where a fox lives?",
        "ans": "<strong>Answer:</strong><br>• A fox lives in a <strong>den (burrow)</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Den / burrow identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) A piece of the sky actually hit Funny Bunny.<br>(b) Foxy Loxy was a kind friend who took the birds to the palace.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. Only a little acorn nut fell from the tree.<br>(b) <strong>False</strong>. Foxy Loxy was a cunning predator who tricked them into his den.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) False with reason",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "What is the key life lesson of the story 'Funny Bunny'?",
        "ans": "<strong>Summary:</strong><br>• Never spread baseless panic or believe rumors without checking facts yourself.<br>• Trusting sweet-talking strangers blindly can lead to grave danger.",
        "marks": 2,
        "rubric": [
          {
            "key": "Fact checking and danger of false rumors explained",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg11",
    "num": 11,
    "unit": "Unit 6: Mystery & Fairy Tales",
    "title": "Mr. Nobody",
    "subtitle": "The Mysterious Mischief Maker, Household Habits & Taking Blame",
    "concepts": [
      "Poem appreciation: 'I know a funny little man, as quiet as a mouse, who does the mischief that is done in everybody's house!'",
      "List of household mishaps: cracking plates, tearing book pages, leaving doors ajar, spilling ink, scattering pins.",
      "The psychological truth: 'Mr. Nobody' is an imaginary figure used by children to avoid admitting their own careless mistakes.",
      "Cultivating honesty, responsibility, and keeping home neat."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"10\"/><circle cx=\"100\" cy=\"55\" r=\"22\" fill=\"#94a3b8\"/><text x=\"100\" y=\"60\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Quiet Mouse</text><line x1=\"180\" y1=\"35\" x2=\"220\" y2=\"75\" stroke=\"#ef4444\" stroke-width=\"4\"/><line x1=\"220\" y1=\"35\" x2=\"180\" y2=\"75\" stroke=\"#ef4444\" stroke-width=\"4\"/><text x=\"200\" y=\"95\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#dc2626\" text-anchor=\"middle\">Cracked Plate</text><rect x=\"290\" y=\"35\" width=\"45\" height=\"40\" fill=\"#3b82f6\" rx=\"3\"/><text x=\"312\" y=\"60\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Open Door</text><text x=\"410\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#713f12\">Mr. Nobody!</text><text x=\"250\" y=\"110\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#713f12\" text-anchor=\"middle\">Own your mistakes honestly instead of blaming 'Mr. Nobody'.</text></svg>",
    "cbq": {
      "title": "The Broken Glass Mystery in Kitchen",
      "text": "Mother walked into the kitchen and saw a broken water glass on the floor. When she asked who dropped it, both Bunty and Chintu shook their heads and whispered: 'Nobody!'. Mother smiled gently and recited lines from the poem 'Mr. Nobody'. Bunty lowered his head and confessed: 'I am sorry, Ma. I bumped the table while reaching for biscuits.'",
      "question": "Who did the brothers blame initially? Who was Mr. Nobody in reality? Why did mother appreciate Bunty's confession?",
      "answer": "1. Initially, they blamed <strong>'Nobody'</strong> (the imaginary Mr. Nobody).<br>2. In reality, Mr. Nobody was <strong>Bunty himself</strong>, who accidentally bumped the table.<br>3. Mother appreciated him because <strong>speaking the truth honestly and admitting mistakes</strong> takes courage and is far better than making false excuses.",
      "rubric": "1 M for 'Nobody' + 1 M for Bunty's real responsibility + 1 M for honesty and courage moral"
    },
    "questions": [
      {
        "category": "Reading is Fun • Identity",
        "q": "Who is Mr. Nobody according to the poem?",
        "ans": "<strong>Answer:</strong><br>• Mr. Nobody is described as a <strong>funny little man, as quiet as a mouse</strong>, who causes all the mischief in everybody's house.",
        "marks": 2,
        "rubric": [
          {
            "key": "Funny little man",
            "marks": "1 M"
          },
          {
            "key": "Quiet as a mouse",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Has Anyone Seen Him?",
        "q": "Has anyone ever seen his face?",
        "ans": "<strong>Answer:</strong><br>• <strong>No</strong>, no one has ever seen his face, yet everyone agrees that every cracked plate was broken by him!",
        "marks": 1,
        "rubric": [
          {
            "key": "No one has ever seen him stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • List of Mischief",
        "q": "Name three mischievous things done by Mr. Nobody in the house.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Tearing pages</strong> from books.<br>2. <strong>Leaving doors ajar</strong> (half open).<br>3. <strong>Spilling ink</strong> and scattering buttons/pins on the carpet.",
        "marks": 3,
        "rubric": [
          {
            "key": "Tearing books",
            "marks": "1 M"
          },
          {
            "key": "Leaving doors ajar",
            "marks": "1 M"
          },
          {
            "key": "Spilling ink / scattering pins",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Word Meaning",
        "q": "What does the word 'ajar' mean in the poem?",
        "ans": "<strong>Answer:</strong><br>• <strong>Ajar</strong> means <strong>slightly open / half open</strong> (a door that is not closed shut).",
        "marks": 1,
        "rubric": [
          {
            "key": "Slightly open / half open defined",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Simile in Poem",
        "q": "What simile is used to describe how quiet Mr. Nobody is? Complete: 'As quiet as a _______'.",
        "ans": "<strong>Answer:</strong><br>• 'As quiet as a <strong>mouse</strong>'.",
        "marks": 1,
        "rubric": [
          {
            "key": "mouse correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Rhyming Words in Poem",
        "q": "Find words in the poem that rhyme with:<br>(a) Mouse — _______<br>(b) Face — _______<br>(c) See — _______",
        "ans": "<strong>Answers:</strong><br>(a) Mouse — <strong>House</strong><br>(b) Face — <strong>Place</strong><br>(c) See — <strong>Agree / We / Me</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) House",
            "marks": "1 M"
          },
          {
            "key": "(b) Place",
            "marks": "1 M"
          },
          {
            "key": "(c) Agree/Me",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Moral Reasoning • Honesty",
        "q": "Why do children invent 'Mr. Nobody' when something breaks at home?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• Children fear being scolded or punished when they accidentally break or spill something.<br>• However, parents love children who speak the truth, and admitting mistakes with a sincere 'sorry' is the mark of good character.",
        "marks": 2,
        "rubric": [
          {
            "key": "Fear of scolding explained",
            "marks": "1 M"
          },
          {
            "key": "Honesty and sincere apologies valued",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites • Story Words",
        "q": "Write the opposite of:<br>(a) Quiet × _______<br>(b) Nobody × _______<br>(c) Agree × _______",
        "ans": "<strong>Answers:</strong><br>(a) Quiet × <strong>Noisy / Loud</strong><br>(b) Nobody × <strong>Everybody / Somebody</strong><br>(c) Agree × <strong>Disagree</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Noisy",
            "marks": "1 M"
          },
          {
            "key": "(b) Everybody",
            "marks": "1 M"
          },
          {
            "key": "(c) Disagree",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'mischief'.",
        "ans": "<strong>Sample Sentence:</strong><br>• The playful kitten got into mischief by tangling grandmother's wool yarn all over the rug.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'mischief'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Grammar • Contractions",
        "q": "Write the full form of these contracted words:<br>(a) Don't = _______<br>(b) Isn't = _______<br>(c) That's = _______",
        "ans": "<strong>Answers:</strong><br>(a) Don't = <strong>Do not</strong><br>(b) Isn't = <strong>Is not</strong><br>(c) That's = <strong>That is</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Do not",
            "marks": "1 M"
          },
          {
            "key": "(b) Is not",
            "marks": "1 M"
          },
          {
            "key": "(c) That is",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Good Habits at Home",
        "q": "Name two ways you can keep your room tidy so 'Mr. Nobody' never causes trouble.",
        "ans": "<strong>Answer:</strong><br>1. Put storybooks back on the shelf after reading.<br>2. Close room doors and cupboard drawers gently after use.",
        "marks": 2,
        "rubric": [
          {
            "key": "Putting books back",
            "marks": "1 M"
          },
          {
            "key": "Closing doors/cupboards",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling Check • Household Items",
        "q": "Fill in the missing letters: C U R T _ _ N (cloth hanging on window).",
        "ans": "<strong>Answer:</strong><br>• C U R T <strong>A I</strong> N = <strong>CURTAIN</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "CURTAIN correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Compound Words",
        "q": "Separate these compound words into two words:<br>(a) Everybody = _______ + _______<br>(b) Nobody = _______ + _______",
        "ans": "<strong>Answers:</strong><br>(a) Everybody = <strong>Every + body</strong><br>(b) Nobody = <strong>No + body</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) Every + body",
            "marks": "1 M"
          },
          {
            "key": "(b) No + body",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) Mr. Nobody is an actual ghost living behind the curtains.<br>(b) We should own up to our mistakes instead of blaming imaginary people.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. Mr. Nobody is simply a poetic metaphor for careless mistakes.<br>(b) <strong>True</strong>. Honesty and responsibility are essential human virtues.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Reflection",
        "q": "What humorous truth about family life does 'Mr. Nobody' expose?",
        "ans": "<strong>Summary:</strong><br>• It delightfully highlights that in every household, whenever something gets broken or misplaced, no family member willingly admits fault — yet everyone knows who was careless!",
        "marks": 2,
        "rubric": [
          {
            "key": "Humorous truth about blaming nobody explained",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg12",
    "num": 12,
    "unit": "Unit 6: Mystery & Fairy Tales",
    "title": "Curlylocks and the Three Bears",
    "subtitle": "Classic Goldilocks Tale, Sizing, Porridge, Beds & Bear Family",
    "concepts": [
      "Story comprehension: Curlylocks enters the cottage of the Three Bears (Papa Bear, Mama Bear, Baby Bear).",
      "Degrees of size, temperature, and hardness: Big bowl (hot), Middle bowl (cold), Tiny bowl (just right).",
      "Beds comparison: Big bed (too hard), Middle bed (too soft), Tiny bed (just right).",
      "Manners and trespassing: Leaving a home respectfully without destroying other people's belongings."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"90\" cy=\"55\" r=\"28\" fill=\"#78350f\"/><text x=\"90\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Papa Bear</text><circle cx=\"180\" cy=\"55\" r=\"22\" fill=\"#9a3412\"/><text x=\"180\" y=\"60\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Mama Bear</text><circle cx=\"260\" cy=\"55\" r=\"16\" fill=\"#b45309\"/><text x=\"260\" y=\"60\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Baby</text><circle cx=\"360\" cy=\"55\" r=\"20\" fill=\"#f59e0b\"/><text x=\"360\" y=\"60\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Curlylocks</text><text x=\"440\" y=\"60\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#dc2626\">JUST RIGHT!</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Papa Bear (Big), Mama Bear (Middle), Baby Bear (Tiny)</text></svg>",
    "cbq": {
      "title": "Curlylocks in the Forest Cottage",
      "text": "Curlylocks was walking near the forest when she saw a charming wooden cottage. The Bear family had gone for a morning walk while their oat porridge cooled down. Curlylocks walked inside without knocking. On the table were three bowls: a huge bowl for Papa Bear, a middle-sized bowl for Mama Bear, and a tiny little bowl for Baby Bear.",
      "question": "Why was the cottage empty? Why did Curlylocks reject Papa Bear's and Mama Bear's porridge? Whose porridge did she eat all up?",
      "answer": "1. The cottage was empty because the <strong>Three Bears had gone for a walk</strong> while their porridge cooled.<br>2. She rejected Papa Bear's porridge because it was <strong>too hot</strong>, and Mama Bear's because it was <strong>too cold</strong>.<br>3. She ate all up <strong>Baby Bear's tiny bowl of porridge</strong> because it was <strong>just right</strong>!",
      "rubric": "1 M for bears on walk + 1 M for too hot and too cold explanation + 1 M for Baby Bear's just right bowl"
    },
    "questions": [
      {
        "category": "Reading is Fun • Girl's Name",
        "q": "Why was the little girl called 'Curlylocks'?",
        "ans": "<strong>Answer:</strong><br>• She was called Curlylocks because she had <strong>curly golden hair</strong> on her head.",
        "marks": 1,
        "rubric": [
          {
            "key": "Curly golden hair stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Cottage Family",
        "q": "Who lived in the cottage in the forest?",
        "ans": "<strong>Answer:</strong><br>• The <strong>Bear family</strong> lived in the cottage: <strong>Papa Bear, Mama Bear, and Baby Bear</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Bear family identified",
            "marks": "1 M"
          },
          {
            "key": "Papa, Mama, Baby Bear named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Porridge Bowls",
        "q": "Describe the three bowls of porridge on the table and how Curlylocks felt about each.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. <strong>Big bowl (Papa Bear):</strong> Too hot.<br>2. <strong>Middle-sized bowl (Mama Bear):</strong> Too cold.<br>3. <strong>Tiny little bowl (Baby Bear):</strong> Just right, and she ate it all up!",
        "marks": 3,
        "rubric": [
          {
            "key": "Big bowl: too hot",
            "marks": "1 M"
          },
          {
            "key": "Middle bowl: too cold",
            "marks": "1 M"
          },
          {
            "key": "Tiny bowl: just right and eaten",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Beds Comparison",
        "q": "What was wrong with Papa Bear's and Mama Bear's beds? Which bed did Curlylocks sleep in?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Papa Bear's big bed was <strong>too hard</strong>.<br>• Mama Bear's middle bed was <strong>too soft</strong>.<br>• Baby Bear's tiny bed was <strong>just right</strong>, and she fell fast asleep in it.",
        "marks": 3,
        "rubric": [
          {
            "key": "Big bed: too hard",
            "marks": "1 M"
          },
          {
            "key": "Middle bed: too soft",
            "marks": "1 M"
          },
          {
            "key": "Tiny bed: just right and slept",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Escape",
        "q": "What did Curlylocks do when she woke up and saw the three bears staring at her?",
        "ans": "<strong>Answer:</strong><br>• Curlylocks screamed in shock, <strong>jumped out of the tiny bed, leaped out of the open window</strong>, and ran away as fast as her legs could carry her!",
        "marks": 2,
        "rubric": [
          {
            "key": "Jumped out of bed/window",
            "marks": "1 M"
          },
          {
            "key": "Ran away as fast as she could",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Degrees of Sizing",
        "q": "Arrange these words in order from BIGGEST to SMALLEST: Tiny, Huge, Middle-sized.",
        "ans": "<strong>Arrangement:</strong><br>1. <strong>Huge</strong> (biggest)<br>2. <strong>Middle-sized</strong><br>3. <strong>Tiny</strong> (smallest).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct order: Huge, Middle-sized, Tiny",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Opposites • Texture & Temperature",
        "q": "Write the opposite of:<br>(a) Hard × _______<br>(b) Hot × _______<br>(c) Asleep × _______",
        "ans": "<strong>Answers:</strong><br>(a) Hard × <strong>Soft</strong><br>(b) Hot × <strong>Cold</strong><br>(c) Asleep × <strong>Awake</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Soft",
            "marks": "1 M"
          },
          {
            "key": "(b) Cold",
            "marks": "1 M"
          },
          {
            "key": "(c) Awake",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Manners & Etiquette • Respecting Privacy",
        "q": "What should Curlylocks have done before entering someone else's house?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• She should have <strong>knocked on the door</strong> and waited politely for permission.<br>• If nobody was home, she should never have entered or touched their food and beds without asking.",
        "marks": 2,
        "rubric": [
          {
            "key": "Knocking on door",
            "marks": "1 M"
          },
          {
            "key": "Not entering empty houses without permission",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Porridge",
        "q": "What is 'porridge'? What grain is commonly used to make it?",
        "ans": "<strong>Answer:</strong><br>• <strong>Porridge</strong> is a warm, soft cereal dish cooked by boiling crushed grains in milk or water (commonly made from <strong>oats or daliya</strong>).",
        "marks": 2,
        "rubric": [
          {
            "key": "Warm boiled cereal defined",
            "marks": "1 M"
          },
          {
            "key": "Oats / daliya identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Direct Speech • Papa Bear's Voice",
        "q": "How did Papa Bear speak when he saw his bowl? (In a gruff roaring voice or a tiny squeak?)",
        "ans": "<strong>Answer:</strong><br>• Papa Bear spoke in a <strong>deep, big, gruff voice</strong>: 'Somebody has been eating my porridge!'.",
        "marks": 1,
        "rubric": [
          {
            "key": "Big gruff voice identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the phrase 'just right'.",
        "ans": "<strong>Sample Sentence:</strong><br>• The warm soup mother made was neither too salty nor too spicy — it was just right!",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'just right'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Baby Animals • Bear Cub",
        "q": "What is a young baby bear called: a puppy, a calf, or a cub?",
        "ans": "<strong>Answer:</strong><br>• A baby bear is called a <strong>cub</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Cub correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grammar • Pronouns",
        "q": "Fill in with [He, She, They]:<br>(a) Curlylocks was hungry. ___ ate the porridge.<br>(b) The three bears were angry. ___ searched the bedroom.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>She</strong> ate the porridge.<br>(b) <strong>They</strong> searched the bedroom.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) She",
            "marks": "1 M"
          },
          {
            "key": "(b) They",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) Curlylocks ate all of Papa Bear's porridge.<br>(b) Baby Bear had a tiny little bed.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. She ate all of Baby Bear's porridge.<br>(b) <strong>True</strong>. Baby Bear had a tiny little bed that was just right.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "What is the moral of 'Curlylocks and the Three Bears'?",
        "ans": "<strong>Summary:</strong><br>• Always respect other people's homes, privacy, and belongings.<br>• Never trespass or use someone's things without permission, or you will end up in great trouble.",
        "marks": 2,
        "rubric": [
          {
            "key": "Respecting privacy and property summarized",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg13",
    "num": 13,
    "unit": "Unit 7: Creativity & Numbers",
    "title": "On My Blackboard I Can Draw",
    "subtitle": "Artistic Drawing, Rhyming Numbers, House Architecture & Nature",
    "concepts": [
      "Poem recitation and sequential counting from 1 to 6.",
      "The drawing elements: 1 little house, 2 green doors, 3 red windows, 4 chimneys, 5 steps, 6 yellow marigolds.",
      "Developing spatial imagination and architectural drawing skills.",
      "Color recognition and descriptive adjectives in poetic form."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#1e293b\" rx=\"10\"/><rect x=\"70\" y=\"45\" width=\"80\" height=\"50\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/><polygon points=\"60,45 110,15 160,45\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"/><rect x=\"85\" y=\"65\" width=\"20\" height=\"30\" fill=\"#22c55e\"/><rect x=\"120\" y=\"55\" width=\"16\" height=\"16\" fill=\"#ef4444\"/><rect x=\"135\" y=\"20\" width=\"8\" height=\"18\" fill=\"#e2e8f0\"/><circle cx=\"280\" cy=\"55\" r=\"16\" fill=\"#facc15\"/><text x=\"280\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#713f12\" text-anchor=\"middle\">6 Marigolds</text><text x=\"400\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#ffffff\">1 House to 6 Flowers!</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#94a3b8\" text-anchor=\"middle\">Blackboard chalk drawing counting from 1 to 6</text></svg>",
    "cbq": {
      "title": "Classroom Blackboard Art Challenge",
      "text": "During art class, Anuj took colourful chalks to the blackboard. Following the poem 'On My Blackboard I Can Draw', he drew: 1 cozy house, 2 green doors opening wide, 3 red windows, 4 smoking chimneys, 5 steps leading inside, and 6 golden yellow marigolds growing straight against the brick wall.",
      "question": "How many doors, windows, and chimneys did Anuj draw? What flower was planted against the wall, and what colour were they?",
      "answer": "1. <strong>Doors:</strong> 2 green doors. <strong>Windows:</strong> 3 red windows. <strong>Chimneys:</strong> 4 white/smoking chimneys.<br>2. <strong>Flowers:</strong> <strong>Marigolds</strong>, and they were <strong>golden yellow</strong>, standing straight against the wall.",
      "rubric": "1.5 M for 2 doors, 3 windows, 4 chimneys + 1.5 M for 6 yellow marigolds"
    },
    "questions": [
      {
        "category": "Reading is Fun • Sequential Items",
        "q": "What does the child draw on his blackboard for numbers 1, 2, and 3?",
        "ans": "<strong>Answer:</strong><br>• Number 1: <strong>One little house</strong>.<br>• Number 2: <strong>Two green doors</strong> that open wide.<br>• Number 3: <strong>Three red windows</strong> shining bright.",
        "marks": 3,
        "rubric": [
          {
            "key": "1 little house",
            "marks": "1 M"
          },
          {
            "key": "2 green doors",
            "marks": "1 M"
          },
          {
            "key": "3 red windows",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Sequential Items Part 2",
        "q": "What does the child draw for numbers 4, 5, and 6?",
        "ans": "<strong>Answer:</strong><br>• Number 4: <strong>Four little chimneys</strong> painted white.<br>• Number 5: <strong>Five little steps</strong> leading inside.<br>• Number 6: <strong>Six yellow marigolds</strong> straight against the wall.",
        "marks": 3,
        "rubric": [
          {
            "key": "4 chimneys",
            "marks": "1 M"
          },
          {
            "key": "5 steps",
            "marks": "1 M"
          },
          {
            "key": "6 yellow marigolds",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Color Identification in Poem",
        "q": "Match each architectural item to its color in the poem:<br>(a) Doors (b) Windows (c) Chimneys (d) Marigolds<br>Colors: (1) Red (2) White (3) Green (4) Yellow",
        "ans": "<strong>Matching:</strong><br>• (a) Doors — (3) Green<br>• (b) Windows — (1) Red<br>• (c) Chimneys — (2) White<br>• (d) Marigolds — (4) Yellow",
        "marks": 4,
        "rubric": [
          {
            "key": "All 4 colors correctly matched",
            "marks": "4 M (1 M each)"
          }
        ]
      },
      {
        "category": "Rhyming Pairs in Poem",
        "q": "Find words in the poem that rhyme with:<br>(a) Wide — _______<br>(b) White — _______<br>(c) Wall — _______",
        "ans": "<strong>Answers:</strong><br>(a) Wide — <strong>Inside</strong><br>(b) White — <strong>Bright</strong><br>(c) Wall — <strong>Tall / All</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Inside",
            "marks": "1 M"
          },
          {
            "key": "(b) Bright",
            "marks": "1 M"
          },
          {
            "key": "(c) Tall/All",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Chimney Function",
        "q": "What is a chimney on a house roof used for?",
        "ans": "<strong>Answer:</strong><br>• A <strong>chimney</strong> is a vertical pipe that carries smoke, soot, and gases safely out from a fireplace or kitchen stove through the roof into the air.",
        "marks": 2,
        "rubric": [
          {
            "key": "Carries smoke from fireplace/stove",
            "marks": "1 M"
          },
          {
            "key": "Exhausts outside roof safely",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Expression • Your Dream House",
        "q": "If you could draw your dream house, what is one special feature you would add?",
        "ans": "<strong>Sample Answer:</strong><br>• I would add a <strong>wooden treehouse</strong> in the backyard with a rope ladder and a big telescope to watch the night stars.",
        "marks": 2,
        "rubric": [
          {
            "key": "Creative architectural feature described clearly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Counting and Number Names",
        "q": "Write the number names for the digits used in the poem (1 to 6).",
        "ans": "<strong>Answers:</strong><br>1 = <strong>One</strong>, 2 = <strong>Two</strong>, 3 = <strong>Three</strong>, 4 = <strong>Four</strong>, 5 = <strong>Five</strong>, 6 = <strong>Six</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 6 number names spelled correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Flowers in Nature • Marigold",
        "q": "Why are marigolds (Genda phool) special in Indian homes?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Marigolds are bright golden-orange flowers with a fresh fragrance.<br>• They are used to make garlands for festival celebrations (like Diwali), weddings, and decorating front doorways (Toran).",
        "marks": 2,
        "rubric": [
          {
            "key": "Golden fragrance described",
            "marks": "1 M"
          },
          {
            "key": "Festivals / garlands / Toran decoration",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Describing Words (Adjectives)",
        "q": "Identify the adjective in the phrase: 'Three red windows shining bright'.",
        "ans": "<strong>Answer:</strong><br>• The adjectives are <strong>'Three'</strong> (number), <strong>'red'</strong> (color), and <strong>'bright'</strong> (quality).",
        "marks": 2,
        "rubric": [
          {
            "key": "red identified",
            "marks": "1 M"
          },
          {
            "key": "bright / three identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'straight'.",
        "ans": "<strong>Sample Sentence:</strong><br>• The tall sunflowers stood straight against the wooden garden fence.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'straight'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Opposites • Position Words",
        "q": "Write the opposite of:<br>(a) Wide × _______<br>(b) Inside × _______<br>(c) Straight × _______",
        "ans": "<strong>Answers:</strong><br>(a) Wide × <strong>Narrow</strong><br>(b) Inside × <strong>Outside</strong><br>(c) Straight × <strong>Crooked / Bent</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Narrow",
            "marks": "1 M"
          },
          {
            "key": "(b) Outside",
            "marks": "1 M"
          },
          {
            "key": "(c) Crooked/Bent",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling Check • Architectural Words",
        "q": "Fill in the missing letters: C H _ M N _ Y (smoke pipe).",
        "ans": "<strong>Answer:</strong><br>• C H <strong>I</strong> M N <strong>E</strong> Y = <strong>CHIMNEY</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "CHIMNEY correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Drawing Tool • Chalk and Slate",
        "q": "What tools are used to write and draw on a classroom blackboard?",
        "ans": "<strong>Answer:</strong><br>• <strong>White and coloured chalk sticks</strong> and a <strong>duster (felt eraser)</strong> are used.",
        "marks": 1,
        "rubric": [
          {
            "key": "Chalk and duster named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) The poem mentions six blue marigolds.<br>(b) The house has two green doors.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. The marigolds are yellow, not blue.<br>(b) <strong>True</strong>. The poem mentions 'two green doors that open wide'.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with color correction",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Reflection",
        "q": "How does 'On My Blackboard I Can Draw' integrate math and art?",
        "ans": "<strong>Summary:</strong><br>• It seamlessly connects sequential number counting (1 to 6) with creative visual imagination, showing how numbers form the foundational structure of art, geometry, and architecture.",
        "marks": 2,
        "rubric": [
          {
            "key": "Integration of counting and visual art explained",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg14",
    "num": 14,
    "unit": "Unit 7: Creativity & Numbers",
    "title": "Make It Shorter",
    "subtitle": "Akbar and Birbal, Lateral Thinking, Wit & Relative Length",
    "concepts": [
      "Story comprehension: Emperor Akbar challenges his royal courtiers to make a chalk line shorter without erasing it.",
      "The failure of arrogant courtiers: No one knows how to shorten a line without rubbing.",
      "Birbal's brilliant lateral thinking: Drawing a longer line right beside it, making the first line relatively shorter.",
      "Developing out-of-the-box problem solving and wit over physical force."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><text x=\"100\" y=\"30\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\">Akbar's Line:</text><line x1=\"80\" y1=\"45\" x2=\"220\" y2=\"45\" stroke=\"#ef4444\" stroke-width=\"6\" stroke-linecap=\"round\"/><text x=\"100\" y=\"80\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#047857\">Birbal's Line:</text><line x1=\"80\" y1=\"95\" x2=\"380\" y2=\"95\" stroke=\"#059669\" stroke-width=\"6\" stroke-linecap=\"round\"/><text x=\"440\" y=\"70\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#15803d\">Shorter now!</text></svg>",
    "cbq": {
      "title": "The Royal Court Chalk Puzzle",
      "text": "Emperor Akbar drew a white line on the royal marble floor and commanded: 'Courtiers! Make this line shorter, but do not touch it or erase any part of it!'. The courtiers were puzzled; some tried to cover it with their shawls, but Akbar forbade it. Then Birbal stepped forward with a smile and drew a second line on the floor.",
      "question": "What was Akbar's condition for shortening the line? How did Birbal solve the puzzle without touching Akbar's line? What does this teach us about problem solving?",
      "answer": "1. <strong>Akbar's condition:</strong> The line must be made shorter <strong>without rubbing out or erasing any part of it</strong>.<br>2. <strong>Birbal's solution:</strong> He drew a <strong>longer line right beside Akbar's line</strong>. When compared together, Akbar's line automatically became the shorter one!<br>3. <strong>Lesson:</strong> Clever lateral thinking and looking at problems from a different perspective solves challenges that brute force cannot.",
      "rubric": "1 M for condition + 1 M for Birbal's longer line solution + 1 M for lateral thinking moral"
    },
    "questions": [
      {
        "category": "Reading is Fun • Akbar's Challenge",
        "q": "What did Emperor Akbar draw on the floor of his court?",
        "ans": "<strong>Answer:</strong><br>• Emperor Akbar drew a <strong>straight line</strong> on the floor.",
        "marks": 1,
        "rubric": [
          {
            "key": "Line on the floor stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Royal Order",
        "q": "What was Akbar's royal order to his courtiers regarding the line?",
        "ans": "<strong>Answer:</strong><br>• His order was: <strong>'Make this line shorter, but do not erase any part of it!'</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Make it shorter",
            "marks": "1 M"
          },
          {
            "key": "Without erasing condition",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Courtier's Reaction",
        "q": "Why were the ministers and courtiers puzzled?",
        "ans": "<strong>Answer:</strong><br>• They were puzzled because they could not imagine how a line could ever be made shorter without rubbing out its ends.",
        "marks": 2,
        "rubric": [
          {
            "key": "Could not imagine shortening without erasing",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Birbal's Clever Move",
        "q": "What did Birbal do to solve the Emperor's puzzle?",
        "ans": "<strong>Answer:</strong><br>• Birbal took a piece of chalk and <strong>drew a longer line under Akbar's line</strong>.<br>• Everyone in the court saw that Akbar's first line was now clearly the shorter line!",
        "marks": 2,
        "rubric": [
          {
            "key": "Drew a longer line beside/under it",
            "marks": "1 M"
          },
          {
            "key": "First line became shorter in comparison",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Akbar's Praise",
        "q": "What did Emperor Akbar say when he saw Birbal's line?",
        "ans": "<strong>Answer:</strong><br>• Akbar smiled and said: <strong>'That is true! You have made my line shorter, Birbal!'</strong> and praised his sharp wit.",
        "marks": 2,
        "rubric": [
          {
            "key": "Akbar smiled and agreed line was shorter",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Grammar • Degrees of Comparison",
        "q": "Fill in the blanks with the correct form of the adjective:<br>(a) Short — _______ — Shortest<br>(b) Long — Longer — _______<br>(c) Clever — Cleverer — _______",
        "ans": "<strong>Answers:</strong><br>(a) Short — <strong>Shorter</strong> — Shortest<br>(b) Long — Longer — <strong>Longest</strong><br>(c) Clever — Cleverer — <strong>Cleverest</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Shorter",
            "marks": "1 M"
          },
          {
            "key": "(b) Longest",
            "marks": "1 M"
          },
          {
            "key": "(c) Cleverest",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Character Sketch • Birbal's Personality",
        "q": "Name two qualities of Birbal that made him Emperor Akbar's favorite minister.",
        "ans": "<strong>Answer:</strong><br>1. His <strong>sharp wit and clever thinking</strong>.<br>2. His <strong>calm wisdom and sense of humor</strong> in solving tricky disputes.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sharp wit / intelligence",
            "marks": "1 M"
          },
          {
            "key": "Calm wisdom / humor",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Royal Court Words",
        "q": "What is a 'courtier'?",
        "ans": "<strong>Answer:</strong><br>• A <strong>courtier</strong> is a minister, nobleman, or advisor who attends the royal court of a king or emperor.",
        "marks": 1,
        "rubric": [
          {
            "key": "Advisor / nobleman in royal court defined",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites • Comparison Words",
        "q": "Write the opposite of:<br>(a) Shorter × _______<br>(b) Erase × _______<br>(c) True × _______",
        "ans": "<strong>Answers:</strong><br>(a) Shorter × <strong>Longer</strong><br>(b) Erase × <strong>Draw / Write</strong><br>(c) True × <strong>False / Untrue</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Longer",
            "marks": "1 M"
          },
          {
            "key": "(b) Draw/Write",
            "marks": "1 M"
          },
          {
            "key": "(c) False",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Lateral Thinking Puzzle",
        "q": "How can you make the number 9 become 6 without doing any subtraction or addition?",
        "ans": "<strong>Answer:</strong><br>• Simply <strong>turn the paper upside down</strong>! The digit 9 rotated 180 degrees becomes 6.",
        "marks": 2,
        "rubric": [
          {
            "key": "Turn paper upside down explained",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'puzzled'.",
        "ans": "<strong>Sample Sentence:</strong><br>• The detective looked puzzled when he found no footprints in the garden.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'puzzled'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Historical Context • Akbar and Birbal",
        "q": "Who was Emperor Akbar? What was the capital of his empire?",
        "ans": "<strong>Answer:</strong><br>• Akbar was one of the greatest <strong>Mughal Emperors of India</strong>, famous for his wisdom and patronage of arts and nine jewels (Navratnas). His capitals included Agra and Fatehpur Sikri.",
        "marks": 2,
        "rubric": [
          {
            "key": "Mughal Emperor of India identified",
            "marks": "1 M"
          },
          {
            "key": "Wisdom/Navratnas/Agra mentioned",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling Check • Court Words",
        "q": "Fill in the missing letters: E M P _ R _ R (ruler of an empire).",
        "ans": "<strong>Answer:</strong><br>• E M P <strong>E</strong> R <strong>O</strong> R = <strong>EMPEROR</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "EMPEROR correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) Birbal erased half of Akbar's line with an eraser.<br>(b) Drawing a longer line makes the existing line relatively shorter.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. Birbal never touched or erased Akbar's line.<br>(b) <strong>True</strong>. Length is relative when placed side-by-side.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "What is the ultimate lesson of 'Make It Shorter'?",
        "ans": "<strong>Summary:</strong><br>• Great problems do not always require destructive action (like erasing).<br>• By introducing a broader perspective or setting a higher benchmark, challenges find elegant, creative solutions.",
        "marks": 2,
        "rubric": [
          {
            "key": "Creative non-destructive solutions summarized",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg15",
    "num": 15,
    "unit": "Unit 8: Music & Harmony",
    "title": "I am the Music Man",
    "subtitle": "Musical Instruments, Rhythm, Piano, Bass Drum & Faraway Lands",
    "concepts": [
      "Poem recitation: 'I am the music man, I come from far away, and I can play! What can you play? I play the piano!'",
      "Musical instrument sounds: Piano ('pia-pia-piano') and big bass drum ('boom-di-boom-di-boom').",
      "Identifying different musical families: strings, keys, percussion, and wind.",
      "Developing rhythm, music appreciation, and expressive body movement."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><rect x=\"70\" y=\"35\" width=\"80\" height=\"50\" fill=\"#0f172a\" rx=\"4\"/><line x1=\"85\" y1=\"35\" x2=\"85\" y2=\"70\" stroke=\"#ffffff\" stroke-width=\"4\"/><line x1=\"100\" y1=\"35\" x2=\"100\" y2=\"70\" stroke=\"#ffffff\" stroke-width=\"4\"/><line x1=\"115\" y1=\"35\" x2=\"115\" y2=\"70\" stroke=\"#ffffff\" stroke-width=\"4\"/><line x1=\"130\" y1=\"35\" x2=\"130\" y2=\"70\" stroke=\"#ffffff\" stroke-width=\"4\"/><text x=\"110\" y=\"105\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">Piano (Pia-pia)</text><circle cx=\"280\" cy=\"60\" r=\"28\" fill=\"#dc2626\" stroke=\"#991b1b\" stroke-width=\"3\"/><line x1=\"240\" y1=\"30\" x2=\"265\" y2=\"50\" stroke=\"#713f12\" stroke-width=\"3\"/><line x1=\"320\" y1=\"30\" x2=\"295\" y2=\"50\" stroke=\"#713f12\" stroke-width=\"3\"/><text x=\"280\" y=\"105\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Big Drum (Boom-di-boom)</text><text x=\"420\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#047857\">Music Joy!</text></svg>",
    "cbq": {
      "title": "School Annual Day Music Troupe",
      "text": "During the annual school concert, a lively performer dressed as the 'Music Man' walked onto the stage. He announced: 'I come from far away and I can play!'. First, his fingers danced across the black and white keys of a gleaming grand piano: 'pia-pia-piano!'. Then he struck a massive red bass drum with wooden mallets: 'BOOM-DI-BOOM-DI-BOOM!'.",
      "question": "Which two musical instruments did the Music Man play? What sound words describe their music in the poem? Why is music joyful?",
      "answer": "1. The Music Man played the <strong>Piano</strong> and the <strong>Big Bass Drum</strong>.<br>2. <strong>Sound words:</strong> Piano = <strong>'pia-pia-piano, pia-piano'</strong>; Big Drum = <strong>'boom-di-boom-di-boom'</strong>.<br>3. Music brings joy because rhythmic melodies stimulate our imagination, lift our spirits, and invite us to sing and dance happily together.",
      "rubric": "1 M for piano and drum + 1 M for 'pia-pia-piano' and 'boom-di-boom' + 1 M for emotional/rhythmic value of music"
    },
    "questions": [
      {
        "category": "Reading is Fun • The Music Man",
        "q": "Where does the Music Man come from?",
        "ans": "<strong>Answer:</strong><br>• The Music Man comes <strong>from far away</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "From far away stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Two Instruments",
        "q": "What are the two musical instruments that the Music Man can play in the poem?",
        "ans": "<strong>Answer:</strong><br>1. The <strong>Piano</strong><br>2. The <strong>Big Drum</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Piano named",
            "marks": "1 M"
          },
          {
            "key": "Big Drum named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sound Words • Musical Onomatopoeia",
        "q": "What sound does the piano make in the poem? What sound does the big drum make?",
        "ans": "<strong>Answers:</strong><br>• The piano goes: <strong>'Pia-pia-piano, pia-piano, pia-piano!'</strong><br>• The big drum goes: <strong>'Boom-di-boom-di-boom-di-boom, boom-di-boom!'</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Pia-pia-piano for piano",
            "marks": "1 M"
          },
          {
            "key": "Boom-di-boom for drum",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Instrument Families • Classification",
        "q": "Classify the following musical instruments into 'String', 'Wind', or 'Percussion (Drums)':<br>(a) Flute (b) Tabla (c) Guitar (d) Dholak",
        "ans": "<strong>Classification:</strong><br>• <strong>Wind:</strong> (a) Flute (blown by mouth)<br>• <strong>Percussion:</strong> (b) Tabla, (d) Dholak (struck with hands)<br>• <strong>String:</strong> (c) Guitar (strummed with fingers).",
        "marks": 3,
        "rubric": [
          {
            "key": "Flute: Wind",
            "marks": "1 M"
          },
          {
            "key": "Tabla & Dholak: Percussion",
            "marks": "1 M"
          },
          {
            "key": "Guitar: String",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Rhyming Pairs in Poem",
        "q": "Find words in the poem that rhyme with:<br>(a) Play — _______<br>(b) Come — _______",
        "ans": "<strong>Answers:</strong><br>(a) Play — <strong>Away / Day / Say</strong><br>(b) Drum — <strong>Hum / Gum</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) Away",
            "marks": "1 M"
          },
          {
            "key": "(b) Drum/Hum",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Piano Keys",
        "q": "What colors are the keys on a piano keyboard?",
        "ans": "<strong>Answer:</strong><br>• A piano has <strong>white and black keys</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "White and black keys stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites • Story Words",
        "q": "Write the opposite of:<br>(a) Far × _______<br>(b) Big × _______<br>(c) Come × _______",
        "ans": "<strong>Answers:</strong><br>(a) Far × <strong>Near / Close</strong><br>(b) Big × <strong>Small / Little</strong><br>(c) Come × <strong>Go</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Near",
            "marks": "1 M"
          },
          {
            "key": "(b) Small",
            "marks": "1 M"
          },
          {
            "key": "(c) Go",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Indian Musical Instruments",
        "q": "Name two traditional Indian musical instruments you have seen or heard.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Sitar (or Veena)</strong><br>2. <strong>Tabla (or Dholak / Bansuri)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two authentic Indian instruments named",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Rhythm & Dance",
        "q": "How does listening to lively drum beats make children feel?",
        "ans": "<strong>Answer:</strong><br>• Lively drum beats make children feel <strong>energetic, cheerful, and excited to tap their feet and dance</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Energetic and cheerful feeling described",
            "marks": "1 M"
          },
          {
            "key": "Tapping feet / dancing movement",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'melody'.",
        "ans": "<strong>Sample Sentence:</strong><br>• The flute player played a sweet, soothing melody that calmed everyone.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'melody'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Grammar • Modal Verb 'Can'",
        "q": "Complete with 'can' or 'cannot':<br>(a) A piano _______ make sweet musical notes.<br>(b) A stone _______ play a drum.",
        "ans": "<strong>Answers:</strong><br>(a) A piano <strong>can</strong> make sweet musical notes.<br>(b) A stone <strong>cannot</strong> play a drum.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) can",
            "marks": "1 M"
          },
          {
            "key": "(b) cannot",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Action Verbs • How Instruments are Played",
        "q": "Match the instrument with how it is played:<br>(a) Drum (b) Flute (c) Violin<br>Actions: (1) Blown (2) Bowed / Strummed (3) Beaten / Struck",
        "ans": "<strong>Matching:</strong><br>• (a) Drum — (3) Beaten / Struck<br>• (b) Flute — (1) Blown<br>• (c) Violin — (2) Bowed / Strummed",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 correctly matched",
            "marks": "3 M (1 M each)"
          }
        ]
      },
      {
        "category": "Spelling Check • Music Words",
        "q": "Fill in the missing letters: P _ A N _ (keyboard instrument).",
        "ans": "<strong>Answer:</strong><br>• P <strong>I</strong> A N <strong>O</strong> = <strong>PIANO</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "PIANO correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) The Music Man can only play the violin.<br>(b) Music brings joy and harmony to people of all ages.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. In the poem, he plays the piano and the big drum.<br>(b) <strong>True</strong>. Music is a universal language of joy.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with correction",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Reflection",
        "q": "Why does the poem 'I am the Music Man' use repetitive, rhythmic sounds?",
        "ans": "<strong>Summary:</strong><br>• The repetitive words ('pia-pia-piano', 'boom-di-boom') imitate the actual musical rhythm and tempo of the instruments, encouraging young learners to chant, clap, and sing along.",
        "marks": 2,
        "rubric": [
          {
            "key": "Imitation of musical rhythm and tempo explained",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg16",
    "num": 16,
    "unit": "Unit 8: Music & Harmony",
    "title": "The Mumbai Musicians",
    "subtitle": "Town Musicians of Bremen Adaptation, Animal Band & The Ghost Feast",
    "concepts": [
      "Story comprehension: Old donkey Gopu, dog Dopu, cat Furry, and cock Booboo set out for Mumbai.",
      "Desire to become musicians when their farm masters turn them out.",
      "The house in the forest: Singing together outside the window to ask for food.",
      "The comical misunderstanding: Robbers inside think ghosts have attacked and flee; animals enjoy a feast."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"70\" cy=\"55\" r=\"22\" fill=\"#94a3b8\"/><text x=\"70\" y=\"60\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Donkey</text><circle cx=\"140\" cy=\"55\" r=\"18\" fill=\"#d97706\"/><text x=\"140\" y=\"60\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Dog</text><circle cx=\"210\" cy=\"55\" r=\"16\" fill=\"#3b82f6\"/><text x=\"210\" y=\"60\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Cat</text><circle cx=\"270\" cy=\"55\" r=\"14\" fill=\"#ef4444\"/><text x=\"270\" y=\"60\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Cock</text><line x1=\"300\" y1=\"55\" x2=\"350\" y2=\"55\" stroke=\"#475569\" stroke-width=\"4\"/><polygon points=\"350,50 365,55 350,60\" fill=\"#475569\"/><rect x=\"380\" y=\"30\" width=\"70\" height=\"60\" fill=\"#f59e0b\" rx=\"4\"/><text x=\"415\" y=\"65\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Mumbai!</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Gopu, Dopu, Furry, and Booboo — The Mumbai Musicians</text></svg>",
    "cbq": {
      "title": "The Four Forest Musicians' Concert",
      "text": "Four elderly animal friends — Gopu the donkey, Dopu the dog, Furry the cat, and Booboo the rooster — walked toward Mumbai to become musicians. Tired and starving in the forest, they saw a lit window with a table full of delicious food. They decided to sing together to earn dinner. Gopu brayed, Dopu barked, Furry meowed, and Booboo crowed: 'COCK-A-DOODLE-DOO!'. Inside, the people thought ghosts had come, shrieked in terror, and ran into the woods.",
      "question": "Why did the animals decide to sing outside the window? What happened when they sang all together? What did the animals do after the people fled?",
      "answer": "1. The animals sang because they were starving and wanted to <strong>earn food by giving a concert</strong>.<br>2. When they all sang together, the loud mixed noise sounded so wild and eerie that the people thought <strong>ghosts had come</strong> and ran away in fear.<br>3. The happy animals sat down at the table and <strong>ate up the delicious feast</strong> until they were completely full.",
      "rubric": "1 M for concert to earn food + 1 M for ghost misunderstanding + 1 M for enjoying the feast"
    },
    "questions": [
      {
        "category": "Reading is Fun • The Journey",
        "q": "Why did Gopu the donkey leave his master's house?",
        "ans": "<strong>Answer:</strong><br>• Gopu had worked hard carrying sacks of corn for many years, but had grown old. His master said: 'Go and see the world before you become too old!' so Gopu decided to go to Mumbai to become a <strong>musician</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Master told him to see the world",
            "marks": "1 M"
          },
          {
            "key": "Decided to become a musician in Mumbai",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Meeting Friends",
        "q": "Who were the animal companions who joined Gopu on his journey?",
        "ans": "<strong>Answer:</strong><br>1. <strong>Dopu</strong> (the dog)<br>2. <strong>Furry</strong> (the cat)<br>3. <strong>Booboo</strong> (the cock/rooster).",
        "marks": 3,
        "rubric": [
          {
            "key": "Dopu the dog",
            "marks": "1 M"
          },
          {
            "key": "Furry the cat",
            "marks": "1 M"
          },
          {
            "key": "Booboo the cock",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Light in the Forest",
        "q": "What did the hungry musicians see through the window of the house in the forest?",
        "ans": "<strong>Answer:</strong><br>• They saw a brightly lit room with a <strong>table loaded with delicious food and drinks</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Lit room",
            "marks": "1 M"
          },
          {
            "key": "Table with delicious food",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Concert Noise",
        "q": "What sound did each animal make when they started their concert?<br>(a) Gopu (b) Dopu (c) Furry (d) Booboo",
        "ans": "<strong>Answers:</strong><br>(a) Gopu: <strong>Bray (Hee-haw!)</strong><br>(b) Dopu: <strong>Bark (Bow-wow!)</strong><br>(c) Furry: <strong>Meow (Meow-meow!)</strong><br>(d) Booboo: <strong>Crow (Cock-a-doodle-doo!)</strong>",
        "marks": 4,
        "rubric": [
          {
            "key": "All 4 animal sounds correct",
            "marks": "4 M (1 M each)"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Result",
        "q": "Why did the people inside the house run away into the dark forest?",
        "ans": "<strong>Answer:</strong><br>• The sudden, deafening chorus of four animals braying, barking, meowing, and crowing frightened them into believing that <strong>ghosts had arrived</strong> to attack them.",
        "marks": 2,
        "rubric": [
          {
            "key": "Deafening mixed noise frightened them",
            "marks": "1 M"
          },
          {
            "key": "Thought ghosts had arrived",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Animal Homes & Sounds",
        "q": "Match each animal to its home:<br>(a) Donkey (b) Dog (c) Rooster<br>Homes: (1) Kennel (2) Coop (3) Stable",
        "ans": "<strong>Matching:</strong><br>• (a) Donkey — (3) Stable<br>• (b) Dog — (1) Kennel<br>• (c) Rooster — (2) Coop",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 homes correctly matched",
            "marks": "3 M (1 M each)"
          }
        ]
      },
      {
        "category": "Opposites • Story Pairs",
        "q": "Write the opposite of:<br>(a) Delicious × _______<br>(b) Friend × _______<br>(c) Night × _______",
        "ans": "<strong>Answers:</strong><br>(a) Delicious × <strong>Tasteless / Terrible</strong><br>(b) Friend × <strong>Enemy / Stranger</strong><br>(c) Night × <strong>Day</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Tasteless",
            "marks": "1 M"
          },
          {
            "key": "(b) Enemy",
            "marks": "1 M"
          },
          {
            "key": "(c) Day",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "City Knowledge • Mumbai",
        "q": "What is Mumbai famous for in India?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Mumbai is famous as the <strong>entertainment and film capital (Bollywood)</strong> and commercial hub of India, located by the Arabian Sea.",
        "marks": 2,
        "rubric": [
          {
            "key": "Entertainment / film capital identified",
            "marks": "1 M"
          },
          {
            "key": "Commercial hub / sea coast mentioned",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'musician'.",
        "ans": "<strong>Sample Sentence:</strong><br>• The talented musician played the violin so beautifully that the audience gave a standing ovation.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'musician'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Moral Reasoning • Senior Animals",
        "q": "How should human masters treat domestic animals when they become old and weak?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Masters should treat elderly animals with <strong>gratitude, kindness, and loving care</strong>.<br>• They should never abandon or mistreat them after years of loyal service.",
        "marks": 2,
        "rubric": [
          {
            "key": "Gratitude and kindness",
            "marks": "1 M"
          },
          {
            "key": "Not abandoning loyal old animals",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grammar • Past Tense",
        "q": "Write the past tense of:<br>(a) Sing — _______<br>(b) Hear — _______<br>(c) Run — _______",
        "ans": "<strong>Answers:</strong><br>(a) Sing — <strong>Sang</strong><br>(b) Hear — <strong>Heard</strong><br>(c) Run — <strong>Ran</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Sang",
            "marks": "1 M"
          },
          {
            "key": "(b) Heard",
            "marks": "1 M"
          },
          {
            "key": "(c) Ran",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling Check • Musical Story",
        "q": "Fill in the missing letters: D _ L _ C _ O U S (tasty).",
        "ans": "<strong>Answer:</strong><br>• D <strong>E</strong> L <strong>I</strong> C <strong>I</strong> O U S = <strong>DELICIOUS</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "DELICIOUS correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) The four animals reached Mumbai in the very first hour.<br>(b) The people in the house ran away because they thought ghosts had come.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. They stopped at the forest cottage on the way and stayed there.<br>(b) <strong>True</strong>. The weird animal singing sounded like ghosts.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "What is the heart-warming lesson of 'The Mumbai Musicians'?",
        "ans": "<strong>Summary:</strong><br>• No matter your age or limitations, when good friends unite with a common joyful purpose, they can overcome hardship, support one another, and find happiness.",
        "marks": 2,
        "rubric": [
          {
            "key": "Friendship, teamwork, and resilience summarized",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg17",
    "num": 17,
    "unit": "Unit 9: Family Love & Magic",
    "title": "Granny Granny Please Comb My Hair",
    "subtitle": "Grandmother's Gentle Touch, Coconut Oil, Braiding & Affection",
    "concepts": [
      "Poem appreciation: A child's sweet request to her grandmother to comb and oil her hair.",
      "The cozy ritual: Sitting on a yellow cushion between Granny's knees.",
      "Gentle grooming: Rubbing nourishing coconut oil, gentle parting of hair, breezy breeze.",
      "Grandparent affection: Granny praising the grandchild as the sweetest, best child in the world."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"10\"/><circle cx=\"100\" cy=\"50\" r=\"26\" fill=\"#ec4899\"/><text x=\"100\" y=\"55\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Granny</text><rect x=\"180\" y=\"65\" width=\"50\" height=\"30\" fill=\"#facc15\" rx=\"6\"/><text x=\"205\" y=\"85\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#713f12\" text-anchor=\"middle\">Cushion</text><circle cx=\"205\" cy=\"45\" r=\"18\" fill=\"#3b82f6\"/><text x=\"205\" y=\"50\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Child</text><circle cx=\"320\" cy=\"55\" r=\"18\" fill=\"#10b981\"/><text x=\"320\" y=\"60\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Oil Bottle</text><text x=\"420\" y=\"60\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#713f12\">Pure Love!</text><text x=\"250\" y=\"110\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#713f12\" text-anchor=\"middle\">Gentle coconut oil, patient hands, and unconditional love.</text></svg>",
    "cbq": {
      "title": "Sunday Morning with Grandmother",
      "text": "On Sunday morning, little Meera ran to her grandmother holding a wooden comb and a bottle of scented coconut oil. She climbed onto a cozy yellow velvet cushion placed between Granny's knees. Granny gently rubbed a little oil into Meera's scalp, parted her hair into two neat braids, and planted a loving kiss on her forehead, saying: 'You are the most wonderful child in the whole world!'.",
      "question": "Where did Meera sit? What kind of oil did Granny use? What sweet praise did Granny give her?",
      "answer": "1. Meera sat on a <strong>cushion between Granny's knees</strong>.<br>2. Granny used nourishing <strong>coconut oil</strong>.<br>3. Granny praised her saying: <strong>'Now you are finished, and you are the best child in the world!'</strong>.",
      "rubric": "1 M for sitting on cushion between knees + 1 M for coconut oil + 1 M for grandmother's praise"
    },
    "questions": [
      {
        "category": "Reading is Fun • Child's Request",
        "q": "What does the little girl ask her Grandmother to do?",
        "ans": "<strong>Answer:</strong><br>• The little girl affectionately asks her grandmother: <strong>'Granny Granny, please comb my hair!'</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Comb her hair stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Special Quality of Granny",
        "q": "What special quality does Granny always have for her grandchild?",
        "ans": "<strong>Answer:</strong><br>• Granny <strong>always takes her time, and always has plenty of time</strong> for the child, never rushing through things.",
        "marks": 2,
        "rubric": [
          {
            "key": "Always takes her time",
            "marks": "1 M"
          },
          {
            "key": "Never rushes / has plenty of time",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Seating Arrangement",
        "q": "Where does Granny make the little girl sit while combing her hair?",
        "ans": "<strong>Answer:</strong><br>• Granny makes her sit on a <strong>soft cushion placed right between her knees</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "On a cushion",
            "marks": "1 M"
          },
          {
            "key": "Between her knees",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Oil Used",
        "q": "What kind of oil does Granny rub into the girl's scalp?",
        "ans": "<strong>Answer:</strong><br>• Granny rubs a little <strong>coconut oil</strong> into her hair with gentle, soothing strokes.",
        "marks": 1,
        "rubric": [
          {
            "key": "Coconut oil stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Parting the Hair",
        "q": "How does the poet describe Granny's parting of the hair?",
        "ans": "<strong>Answer:</strong><br>• Granny parts the hair gently, <strong>as soft and breezy as a gentle summer breeze</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Soft and breezy parting described",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Words of Affection",
        "q": "What does Granny say when she finishes combing the girl's hair?",
        "ans": "<strong>Answer:</strong><br>• Granny turns the girl's head around, smiles warmly, and says: <strong>'Now, who's a nice girl?'</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "'Now, who's a nice girl?' quoted",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Rhyming Words in Poem",
        "q": "Find words in the poem that rhyme with:<br>(a) Hair — _______<br>(b) Breeze — _______<br>(c) Round — _______",
        "ans": "<strong>Answers:</strong><br>(a) Hair — <strong>Care / Share / Air</strong><br>(b) Breeze — <strong>Knees / Please</strong><br>(c) Round — <strong>Sound / Ground</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Care",
            "marks": "1 M"
          },
          {
            "key": "(b) Knees",
            "marks": "1 M"
          },
          {
            "key": "(c) Ground",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grandparent Bonding",
        "q": "Why are grandparents so special in a child's life?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. Grandparents give unconditional love, endless patience, and undivided attention.<br>2. They tell wonderful bedtime stories, teach traditional values, and make children feel deeply cherished.",
        "marks": 2,
        "rubric": [
          {
            "key": "Patience and undivided attention",
            "marks": "1 M"
          },
          {
            "key": "Stories, values, and security",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites • Story Words",
        "q": "Write the opposite of:<br>(a) Always × _______<br>(b) Gentle × _______<br>(c) Soft × _______",
        "ans": "<strong>Answers:</strong><br>(a) Always × <strong>Never</strong><br>(b) Gentle × <strong>Rough / Harsh</strong><br>(c) Soft × <strong>Hard</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Never",
            "marks": "1 M"
          },
          {
            "key": "(b) Rough/Harsh",
            "marks": "1 M"
          },
          {
            "key": "(c) Hard",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'breeze'.",
        "ans": "<strong>Sample Sentence:</strong><br>• A pleasant evening breeze rustled the leaves of the garden mango tree.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'breeze'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Care for Grandparents",
        "q": "Name two ways you can show love and care to your grandparents.",
        "ans": "<strong>Answer:</strong><br>1. Spend unhurried time listening to their stories and reading the newspaper for them.<br>2. Fetch their spectacles, walking stick, or water when they need it.",
        "marks": 2,
        "rubric": [
          {
            "key": "Spending time / listening",
            "marks": "1 M"
          },
          {
            "key": "Helping with small daily needs",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling Check • Hair Care",
        "q": "Fill in the missing letters: C O C _ N _ T (tropical palm fruit).",
        "ans": "<strong>Answer:</strong><br>• C O C <strong>O</strong> N <strong>U</strong> T = <strong>COCONUT</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "COCONUT correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grammar • Polite Words",
        "q": "Which magic word is used in the poem to make a sweet, polite request?",
        "ans": "<strong>Answer:</strong><br>• The magic word is <strong>'Please'</strong> ('Granny Granny, please comb my hair').",
        "marks": 1,
        "rubric": [
          {
            "key": "Please correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) Granny combs the girl's hair in a big rush and pulls her scalp hard.<br>(b) The girl loves spending time with her grandmother.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. Granny always takes her time with soothing, gentle care.<br>(b) <strong>True</strong>. The poem overflows with mutual warmth and affection.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Reflection",
        "q": "What emotion does the poem 'Granny Granny Please Comb My Hair' evoke?",
        "ans": "<strong>Summary:</strong><br>• It evokes deep nostalgia, tenderness, and security, reminding us of the calm haven that grandparents create through simple, loving gestures of care.",
        "marks": 2,
        "rubric": [
          {
            "key": "Tenderness, security, and familial love articulated",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg18",
    "num": 18,
    "unit": "Unit 9: Family Love & Magic",
    "title": "The Magic Porridge Pot",
    "subtitle": "Tara and the Magic Pot, The Magic Words & The Village Porridge Flood",
    "concepts": [
      "Story comprehension: Tara helps an old woman in the forest and receives a magical clay pot.",
      "The magic spell: 'Cook, pot, cook!' (starts cooking) and 'Stop, pot, stop!' (stops cooking).",
      "The mother's forgetfulness: Calling 'Cook, pot, cook!' when hungry, but forgetting the stopping words.",
      "The porridge river: Porridge overflows through the house, onto the street, flooding the whole village.",
      "Moral: Following instructions precisely and mastering knowledge before wielding magic or tools."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><path d=\"M 120 70 C 100 70 90 90 90 100 L 170 100 C 170 90 160 70 140 70 Z\" fill=\"#713f12\"/><ellipse cx=\"130\" cy=\"70\" rx=\"25\" ry=\"8\" fill=\"#fde047\"/><text x=\"130\" y=\"55\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Cook, Pot!</text><path d=\"M 160 75 Q 260 50 360 85 Q 420 105 480 85\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"12\" stroke-linecap=\"round\"/><text x=\"280\" y=\"50\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#a16207\">Porridge flowing through the village!</text><circle cx=\"440\" cy=\"55\" r=\"18\" fill=\"#ec4899\"/><text x=\"440\" y=\"60\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Tara</text><text x=\"250\" y=\"112\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Tara shouted: 'Stop, pot, stop!' and it stopped cooking.</text></svg>",
    "cbq": {
      "title": "The Magic Porridge Emergency in Village",
      "text": "Tara and her poor mother lived in a village hut. An old woman gifted Tara a magic pot that cooked sweet porridge on the command: 'Cook, pot, cook!' and stopped on: 'Stop, pot, stop!'. One afternoon while Tara was out playing, her hungry mother said: 'Cook, pot, cook!'. The pot cooked delicious porridge. After eating her fill, mother said: 'Do not cook more, pot!'. But the pot kept cooking! Porridge overflowed onto the floor, down the stairs, and into the streets. Villagers ran with bowls to eat porridge on the road until Tara arrived.",
      "question": "What magic words started the pot? What mistake did mother make? What magic words finally stopped the porridge river?",
      "answer": "1. <strong>Starting words:</strong> <strong>'Cook, pot, cook!'</strong>.<br>2. <strong>Mother's mistake:</strong> She forgot the exact magical command to stop the pot and shouted: 'Do not cook more, pot!', which the pot did not obey.<br>3. <strong>Stopping words:</strong> Tara arrived and shouted: <strong>'Stop, pot, stop!'</strong>, and the magic pot immediately ceased cooking.",
      "rubric": "1 M for 'Cook, pot, cook!' + 1 M for mother's wrong words + 1 M for Tara's 'Stop, pot, stop!'"
    },
    "questions": [
      {
        "category": "Reading is Fun • The Gift",
        "q": "Where did Tara meet the old woman, and what gift did she receive?",
        "ans": "<strong>Answer:</strong><br>• Tara met the old woman in the <strong>forest</strong>.<br>• The kind old woman gifted her a <strong>magic clay pot</strong> that could cook porridge.",
        "marks": 2,
        "rubric": [
          {
            "key": "In the forest",
            "marks": "1 M"
          },
          {
            "key": "Magic porridge pot",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Starting Spell",
        "q": "What magic words did the old woman teach Tara to start the pot cooking?",
        "ans": "<strong>Answer:</strong><br>• The starting words were: <strong>'Cook, pot, cook!'</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "'Cook, pot, cook!' quoted",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Stopping Spell",
        "q": "What magic words stopped the pot from cooking porridge?",
        "ans": "<strong>Answer:</strong><br>• The stopping words were: <strong>'Stop, pot, stop!'</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "'Stop, pot, stop!' quoted",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Mother's Error",
        "q": "Why did the porridge keep cooking and overflow all over the house?",
        "ans": "<strong>Answer:</strong><br>• Because Tara's mother <strong>forgot the exact magic words</strong> ('Stop, pot, stop!'). She said 'Do not cook, pot!', so the pot kept pouring out hot porridge.",
        "marks": 2,
        "rubric": [
          {
            "key": "Forgot exact magic words",
            "marks": "1 M"
          },
          {
            "key": "Said wrong command 'Do not cook'",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Village Reaction",
        "q": "What did the villagers do when they saw rivers of porridge flowing on the road?",
        "ans": "<strong>Answer:</strong><br>• The surprised villagers ran out of their houses with bowls and spoons, shouting: <strong>'Come and eat the porridge!'</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Ran out with bowls and spoons",
            "marks": "1 M"
          },
          {
            "key": "Ate porridge on the road",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Rescuing the Village",
        "q": "How was the porridge flood finally stopped?",
        "ans": "<strong>Answer:</strong><br>• Tara ran home as fast as she could and called out loudly: <strong>'Stop, pot, stop!'</strong>, and the pot instantly stopped cooking.",
        "marks": 2,
        "rubric": [
          {
            "key": "Tara ran home",
            "marks": "1 M"
          },
          {
            "key": "Shouted 'Stop, pot, stop!'",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites • Story Words",
        "q": "Write the opposite of:<br>(a) Poor × _______<br>(b) Remember × _______<br>(c) Stop × _______",
        "ans": "<strong>Answers:</strong><br>(a) Poor × <strong>Rich / Wealthy</strong><br>(b) Remember × <strong>Forget</strong><br>(c) Stop × <strong>Start / Cook / Go</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Rich",
            "marks": "1 M"
          },
          {
            "key": "(b) Forget",
            "marks": "1 M"
          },
          {
            "key": "(c) Start",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Food Texture",
        "q": "What is sweet porridge made of? How does it taste?",
        "ans": "<strong>Answer:</strong><br>• Sweet porridge (kheer / daliya) is made of crushed grains boiled in milk and sweetened with sugar or jaggery.<br>• It tastes <strong>creamy, warm, sweet, and comforting</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Ingredients (grains, milk, sugar)",
            "marks": "1 M"
          },
          {
            "key": "Creamy/sweet taste described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'overflow'.",
        "ans": "<strong>Sample Sentence:</strong><br>• The river began to overflow its banks after three days of torrential rainfall.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'overflow'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Moral Reasoning • Knowing the Full Method",
        "q": "Why is it dangerous to start using a powerful machine or magic before learning how to turn it off?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• If you don't know how to stop a process, it can quickly spin out of control and cause destruction (like flooding a house or causing accidents).<br>• Always learn complete operating safety rules before starting any task.",
        "marks": 2,
        "rubric": [
          {
            "key": "Danger of spinning out of control explained",
            "marks": "1 M"
          },
          {
            "key": "Importance of complete operating knowledge",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grammar • Action Words (Verbs)",
        "q": "Underline the verbs in the sentence: 'The hot porridge flowed out of the pot and spilled onto the road.'",
        "ans": "<strong>Answer:</strong><br>• The verbs (action words) are: <strong>flowed</strong> and <strong>spilled</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "flowed identified",
            "marks": "1 M"
          },
          {
            "key": "spilled identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling Check • Magical Story",
        "q": "Fill in the missing letters: P _ R R _ D G _ (cooked cereal).",
        "ans": "<strong>Answer:</strong><br>• P <strong>O</strong> R R <strong>I</strong> D G <strong>E</strong> = <strong>PORRIDGE</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "PORRIDGE correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Direct Speech • Mother's Plight",
        "q": "What did Tara's mother desperately yell at the boiling pot when it wouldn't stop?",
        "ans": "<strong>Answer:</strong><br>• She yelled: <strong>'Do not cook more, pot!'</strong>, but the pot did not listen.",
        "marks": 1,
        "rubric": [
          {
            "key": "'Do not cook more, pot!' quoted",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) Tara and her mother remained hungry forever.<br>(b) Tara's mother forgot the stopping magic words.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. The magic pot ensured they never went hungry again.<br>(b) <strong>True</strong>. Mother forgot the exact command 'Stop, pot, stop!'.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "What timeless lesson does 'The Magic Porridge Pot' teach children?",
        "ans": "<strong>Summary:</strong><br>• A half-learned lesson is dangerous.<br>• Before we begin an action, we must ensure we understand how to bring it safely to an end.",
        "marks": 2,
        "rubric": [
          {
            "key": "Dangers of incomplete knowledge summarized",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg19",
    "num": 19,
    "unit": "Unit 10: Voices & Seasons",
    "title": "Strange Talk",
    "subtitle": "Animal Language, Onomatopoeia, Speech Manners & Active Listening",
    "concepts": [
      "Poem appreciation: A humorous look at how animals speak with distinct voices.",
      "Creature sounds: Frog ('Croak/Ribbit'), Duck ('Quack, quack'), Pig ('Wee-wee/Oink'), Puppies ('Bow-wow').",
      "Contrasting animal efficiency: Animals only speak when needed; humans should avoid chaotic noise.",
      "Classroom discussion etiquette: Taking turns, listening without interrupting, speaking clearly."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"80\" cy=\"55\" r=\"22\" fill=\"#10b981\"/><text x=\"80\" y=\"60\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Frog (Croak)</text><circle cx=\"180\" cy=\"55\" r=\"22\" fill=\"#facc15\"/><text x=\"180\" y=\"60\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#713f12\" text-anchor=\"middle\">Duck (Quack)</text><circle cx=\"280\" cy=\"55\" r=\"22\" fill=\"#f472b6\"/><text x=\"280\" y=\"60\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Pig (Wee-wee)</text><circle cx=\"380\" cy=\"55\" r=\"22\" fill=\"#d97706\"/><text x=\"380\" y=\"60\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Pup (Bow-wow)</text><text x=\"250\" y=\"108\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">If children made as much noise all at once, what strange talk that would be!</text></svg>",
    "cbq": {
      "title": "Class 2 Animal Sounds Recitation",
      "text": "Class 2 staged a humorous play based on 'Strange Talk'. Ananya wore a frog mask and croaked 'Croak-croak!'. Billy wore a duck beak and quacked 'Quack-quack!'. Chetan wore pig ears and grunted 'Wee-wee!'. Then the teacher asked: 'Imagine if all thirty children in this classroom shouted their animal sounds at the very same second! What would happen?'",
      "question": "Which sounds did the frog, duck, and pig make? What would happen if all children shouted together? What classroom speech rule does this teach?",
      "answer": "1. <strong>Frog:</strong> 'Croak-croak' (or 'Ribbit'); <strong>Duck:</strong> 'Quack-quack'; <strong>Pig:</strong> 'Wee-wee'.<br>2. If all thirty children shouted at once, it would turn into a <strong>chaotic, deafening racket</strong> where nobody could hear or understand anyone.<br>3. <strong>Speech rule:</strong> <strong>Speak one at a time, take turns, and listen attentively</strong> when someone else is speaking.",
      "rubric": "1 M for all 3 animal sounds + 1 M for chaotic noise effect + 1 M for turn-taking classroom rule"
    },
    "questions": [
      {
        "category": "Reading is Fun • Frog's Voice",
        "q": "What does the little green frog say instead of saying 'Good morning'?",
        "ans": "<strong>Answer:</strong><br>• The little green frog croaks: <strong>'Croak-croak!'</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "'Croak-croak' stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Duck by the Water",
        "q": "What did the duck by the waterside say when asked how he was?",
        "ans": "<strong>Answer:</strong><br>• The duck made a polite quack and said: <strong>'Quack-quack!'</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "'Quack-quack' stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Pig in the Sty",
        "q": "What does the little pig say when he wants more food?",
        "ans": "<strong>Answer:</strong><br>• The little pig squeals: <strong>'Wee-wee!'</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "'Wee-wee' stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Three Little Puppies",
        "q": "What did the three little puppies say when they asked to go out?",
        "ans": "<strong>Answer:</strong><br>• The three little puppies barked cheerfully: <strong>'Bow-wow! Bow-wow!'</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "'Bow-wow' stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Poet's Question",
        "q": "What does the poet say would happen if children spoke like these animals all at the same time?",
        "ans": "<strong>Answer:</strong><br>• The poet says: <strong>'If boys and girls were to speak all together at once, what a strange, terrible noise that would be!'</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Strange, terrible noise / chaos explained",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Animal Homes Connection",
        "q": "Where do these animals live in the poem:<br>(a) The green frog lives in _______<br>(b) The pig lives in a _______<br>(c) The duck lives by the _______",
        "ans": "<strong>Answers:</strong><br>(a) The green frog lives in <strong>a pool / under a log</strong>.<br>(b) The pig lives in a <strong>sty</strong>.<br>(c) The duck lives by the <strong>waterside</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) pool/log",
            "marks": "1 M"
          },
          {
            "key": "(b) sty",
            "marks": "1 M"
          },
          {
            "key": "(c) waterside",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Rhyming Pairs in Poem",
        "q": "Find words in the poem that rhyme with:<br>(a) Log — _______<br>(b) Sty — _______<br>(c) Out — _______",
        "ans": "<strong>Answers:</strong><br>(a) Log — <strong>Frog / Dog</strong><br>(b) Sty — <strong>Cry / By</strong><br>(c) Out — <strong>Shout / About</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Frog",
            "marks": "1 M"
          },
          {
            "key": "(b) Cry/By",
            "marks": "1 M"
          },
          {
            "key": "(c) Shout",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Classroom Etiquette • Speaking Manners",
        "q": "Why should students raise their hand before speaking in class?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Raising hands ensures orderly communication.<br>• It prevents everyone from shouting simultaneously, allowing the teacher and classmates to listen to each child's thoughts clearly.",
        "marks": 2,
        "rubric": [
          {
            "key": "Orderly turn-taking explained",
            "marks": "1 M"
          },
          {
            "key": "Clear listening without shouting",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Animal Sounds Match",
        "q": "Match each bird or animal to its sound:<br>(a) Cow (b) Horse (c) Lion (d) Sheep<br>Sounds: (1) Neigh (2) Moo (3) Baa (4) Roar",
        "ans": "<strong>Matching:</strong><br>• (a) Cow — (2) Moo<br>• (b) Horse — (1) Neigh<br>• (c) Lion — (4) Roar<br>• (d) Sheep — (3) Baa",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 sounds correctly matched",
            "marks": "2 M (0.5 M each)"
          }
        ]
      },
      {
        "category": "Opposites • Voice Adjectives",
        "q": "Write the opposite of:<br>(a) Loud × _______<br>(b) Strange × _______<br>(c) Together × _______",
        "ans": "<strong>Answers:</strong><br>(a) Loud × <strong>Soft / Quiet</strong><br>(b) Strange × <strong>Normal / Familiar</strong><br>(c) Together × <strong>Alone / Separately</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Soft/Quiet",
            "marks": "1 M"
          },
          {
            "key": "(b) Normal",
            "marks": "1 M"
          },
          {
            "key": "(c) Alone/Separately",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'quack'.",
        "ans": "<strong>Sample Sentence:</strong><br>• The mother duck waddled into the pond with a loud, cheerful quack.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'quack'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Grammar • Singular and Plural",
        "q": "Write the plural of:<br>(a) One frog — Three _______<br>(b) One puppy — Three _______",
        "ans": "<strong>Answers:</strong><br>(a) Three <strong>frogs</strong><br>(b) Three <strong>puppies</strong> (change -y to -ies)",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) frogs",
            "marks": "1 M"
          },
          {
            "key": "(b) puppies",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling Check • Animal Sounds",
        "q": "Fill in the missing letters: C R _ A K (frog's voice).",
        "ans": "<strong>Answer:</strong><br>• C R <strong>O</strong> A K = <strong>CROAK</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "CROAK correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) A puppy says 'Meow'.<br>(b) A pig's home is called a sty.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. A cat says meow; a puppy barks bow-wow.<br>(b) <strong>True</strong>. A pig's enclosure is called a pigsty.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Reflection",
        "q": "What humorous contrast does 'Strange Talk' create between animals and children?",
        "ans": "<strong>Summary:</strong><br>• Animals communicate effectively using only one or two simple sounds without causing chaos.<br>• Children have the wonderful gift of language and words, so they should use it politely, speaking one at a time with clarity.",
        "marks": 2,
        "rubric": [
          {
            "key": "Contrast between animal sounds and human language explained",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrg20",
    "num": 20,
    "unit": "Unit 10: Voices & Seasons",
    "title": "The Grasshopper and the Ant",
    "subtitle": "Aesop's Classic Fable, Hard Work, Foresight & Saving for the Future",
    "concepts": [
      "Story comprehension: The gay grasshopper spends warm summer days singing, dancing, and mocking.",
      "The diligent ant: Works tirelessly day and night carrying heavy grain into its underground pantry.",
      "The harsh winter: Snow covers the earth; freezing grasshopper starves and begs the ant for food.",
      "The ant's lesson: 'Lazy fellow! You sang and danced all summer. Now go and dance the winter away!'."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><circle cx=\"90\" cy=\"55\" r=\"24\" fill=\"#22c55e\"/><text x=\"90\" y=\"60\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Grasshopper</text><text x=\"90\" y=\"90\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#15803d\">Sings all summer</text><circle cx=\"230\" cy=\"55\" r=\"20\" fill=\"#713f12\"/><circle cx=\"270\" cy=\"55\" r=\"14\" fill=\"#f59e0b\"/><text x=\"250\" y=\"90\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#713f12\">Ant carrying grain</text><rect x=\"360\" y=\"30\" width=\"80\" height=\"60\" fill=\"#0284c7\" rx=\"4\"/><text x=\"400\" y=\"55\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Winter Snow</text><text x=\"400\" y=\"75\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">No Food!</text><text x=\"250\" y=\"110\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Work hard today so you do not starve tomorrow.</text></svg>",
    "cbq": {
      "title": "The Winter Grasshopper and Ant Contrast",
      "text": "All through the warm sunny summer, the grasshopper did nothing but play his fiddle, sing merry songs, and lounge on soft green clover. Whenever he saw little ants sweating under heavy kernels of golden corn, he laughed: 'Foolish ants! Why work so hard in the sunshine? Life is meant for fun!'. But when freezing winter arrived, thick snow buried the fields. The grasshopper had not a single crumb or fly to eat, while the ants stayed warm in their underground tunnels with piles of sweet grain.",
      "question": "How did the grasshopper spend his summer? What were the ants doing? Why did the grasshopper suffer in winter?",
      "answer": "1. The grasshopper spent his summer <strong>singing, dancing, and mocking the ants</strong> without doing any work.<br>2. The ants were <strong>working tirelessly, collecting and storing corn and wheat grains</strong> for the cold winter ahead.<br>3. The grasshopper suffered in winter because <strong>he had saved nothing</strong>, and thick snow covered all natural food sources, leaving him starving and freezing.",
      "rubric": "1 M for grasshopper's summer laziness + 1 M for ants' hard work + 1 M for winter consequence"
    },
    "questions": [
      {
        "category": "Reading is Fun • Grasshopper's Habit",
        "q": "How did the grasshopper spend his days in summer?",
        "ans": "<strong>Answer:</strong><br>• The grasshopper spent his summer days <strong>singing songs, dancing, and sleeping lazily</strong> in the warm sunshine.",
        "marks": 2,
        "rubric": [
          {
            "key": "Singing and dancing",
            "marks": "1 M"
          },
          {
            "key": "Sleeping lazily / doing no work",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Ant's Labor",
        "q": "What were the hardworking ants doing all through the summer?",
        "ans": "<strong>Answer:</strong><br>• The ants were <strong>marching to and fro, carrying heavy grains of corn and wheat</strong> into their anthill to store for winter.",
        "marks": 2,
        "rubric": [
          {
            "key": "Carrying heavy grains",
            "marks": "1 M"
          },
          {
            "key": "Storing for winter",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Winter Changes",
        "q": "What happened when the cold winter arrived?",
        "ans": "<strong>Answer:</strong><br>• The earth turned freezing cold, <strong>thick white snow covered all the grass and leaves</strong>, and no food or worms were left for the grasshopper.",
        "marks": 2,
        "rubric": [
          {
            "key": "Freezing cold and snow covered earth",
            "marks": "1 M"
          },
          {
            "key": "No food/leaves left to eat",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • Begging for Help",
        "q": "Why did the grasshopper go to the ant's house in winter?",
        "ans": "<strong>Answer:</strong><br>• The grasshopper was <strong>shivering with cold and dying of hunger</strong>, so he went to beg the ant for a little shelter and a few grains of corn.",
        "marks": 2,
        "rubric": [
          {
            "key": "Shivering and starving",
            "marks": "1 M"
          },
          {
            "key": "Begging for shelter and grains",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading is Fun • The Ant's Scolding",
        "q": "What did the wise ant say to the lazy grasshopper?",
        "ans": "<strong>Answer:</strong><br>• The ant replied angrily: <strong>'Lazy fellow! What were you doing all summer? You laughed at us while we worked! If you sang all summer, you can go and dance the winter away!'</strong> and shut the door.",
        "marks": 2,
        "rubric": [
          {
            "key": "Reminded him of summer mocking",
            "marks": "1 M"
          },
          {
            "key": "'Dance the winter away' quoted",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Character Comparison • Contrasting Traits",
        "q": "Compare the characters of the Ant and the Grasshopper.",
        "ans": "<strong>Comparison:</strong><br>• <strong>The Ant:</strong> Hardworking, disciplined, wise, farsighted, and prepared for emergencies.<br>• <strong>The Grasshopper:</strong> Lazy, careless, irresponsible, pleasure-seeking, and foolish.",
        "marks": 3,
        "rubric": [
          {
            "key": "Ant: hardworking and farsighted",
            "marks": "1.5 M"
          },
          {
            "key": "Grasshopper: lazy and irresponsible",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Moral of the Story",
        "q": "What is the important life lesson taught by 'The Grasshopper and the Ant'?",
        "ans": "<strong>Answer:</strong><br>• <strong>'Make hay while the sun shines.'</strong> We must work hard and save resources during good times so that we never suffer in difficult times.",
        "marks": 2,
        "rubric": [
          {
            "key": "Make hay while sun shines proverb/concept",
            "marks": "1 M"
          },
          {
            "key": "Saving for difficult times explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites • Story Words",
        "q": "Write the opposite of:<br>(a) Lazy × _______<br>(b) Summer × _______<br>(c) Warm × _______",
        "ans": "<strong>Answers:</strong><br>(a) Lazy × <strong>Hardworking / Active</strong><br>(b) Summer × <strong>Winter</strong><br>(c) Warm × <strong>Cold / Freezing</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Hardworking",
            "marks": "1 M"
          },
          {
            "key": "(b) Winter",
            "marks": "1 M"
          },
          {
            "key": "(c) Cold",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Anthill & Underground Storage",
        "q": "Where do ants store their food? What is their home called?",
        "ans": "<strong>Answer:</strong><br>• Ants live and store their food in an underground <strong>anthill (or colony / nest)</strong> with chambers and tunnels.",
        "marks": 2,
        "rubric": [
          {
            "key": "Anthill / colony identified",
            "marks": "1 M"
          },
          {
            "key": "Chambers/tunnels explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'starving'.",
        "ans": "<strong>Sample Sentence:</strong><br>• The poor stray dog was shivering and starving in the cold rain until a kind girl fed him warm milk.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'starving'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Science Fact • Ants' Strength",
        "q": "How much weight can a tiny ant lift compared to its own body weight?",
        "ans": "<strong>Answer:</strong><br>• A tiny ant can lift and carry objects <strong>10 to 50 times heavier than its own body weight</strong>!",
        "marks": 1,
        "rubric": [
          {
            "key": "10 to 50 times body weight stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Saving Habit for Children",
        "q": "How can school children apply the ant's lesson in their daily studies?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Study and revise school lessons every day throughout the year instead of procrastinating.<br>• If you work daily like the ant, you will never panic or struggle when final examinations arrive.",
        "marks": 2,
        "rubric": [
          {
            "key": "Daily study and revision habit",
            "marks": "1 M"
          },
          {
            "key": "Avoiding last-minute exam panic",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling Check • Insect Names",
        "q": "Fill in the missing letters: G R _ S S H _ P P _ R (jumping insect).",
        "ans": "<strong>Answer:</strong><br>• G R <strong>A</strong> S S H <strong>O</strong> P P <strong>E</strong> R = <strong>GRASSHOPPER</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "GRASSHOPPER correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) The grasshopper stored five sacks of grain for winter.<br>(b) The ant worked diligently even in hot summer afternoons.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. The grasshopper stored zero food.<br>(b) <strong>True</strong>. The ant worked tirelessly in all seasons.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "Why is 'The Grasshopper and the Ant' one of the most famous fables in human history?",
        "ans": "<strong>Summary:</strong><br>• Because it vividly warns against the dangers of laziness and procrastination, while honoring the dignity of labor, foresight, and self-reliance.",
        "marks": 2,
        "rubric": [
          {
            "key": "Dangers of procrastination and value of labor summarized",
            "marks": "2 M"
          }
        ]
      }
    ]
  }
];

module.exports = { marigoldChapters };
