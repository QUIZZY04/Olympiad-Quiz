// scripts/data-c2-english/mridangData.js
// Official NCERT Class 2 English (Mridang) Complete 100% Dataset (NEP 2020 / NCF-FS)

const mridangChapters = [
  {
    "id": "mrd1",
    "num": 1,
    "unit": "Unit 1: My Family and Me",
    "title": "Two Little Hands",
    "subtitle": "Poem Recitation, Body Actions, Five Senses & Rhyming Pairs",
    "concepts": [
      "Reciting the action rhyme with correct rhythm and gestures.",
      "Recognizing body parts: hands, feet, eyes, ears, nose, head, mouth.",
      "Connecting body organs to five senses (eyes see, ears hear, nose smells).",
      "Identifying rhyming words (clap-tap, wide-side, feet-meet)."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"100\" cy=\"55\" r=\"24\" fill=\"#3b82f6\"/><text x=\"100\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Clap!</text><circle cx=\"200\" cy=\"55\" r=\"24\" fill=\"#10b981\"/><text x=\"200\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Tap!</text><circle cx=\"300\" cy=\"55\" r=\"24\" fill=\"#f59e0b\"/><text x=\"300\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">See!</text><circle cx=\"400\" cy=\"55\" r=\"24\" fill=\"#8b5cf6\"/><text x=\"400\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Hear!</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Two Little Hands Go Clap, Clap, Clap!</text></svg>",
    "cbq": {
      "title": "Morning Circle Time Action Song",
      "text": "During school morning assembly, Class 2 children sing 'Two Little Hands'. Riya claps her hands 3 times and taps her feet 4 times. Kabir nods his head and winks his left eye.",
      "question": "Which body parts did Riya use? What action does the poem describe for our eyes and our head?",
      "answer": "1. Riya used her <strong>hands</strong> (to clap) and her <strong>feet</strong> (to tap).<br>2. According to the poem, our two little eyes are <strong>open wide</strong>, and our one little head goes <strong>side to side</strong>.",
      "rubric": "1.5 M for identifying hands and feet + 1.5 M for explaining eye (open wide) and head (side to side) actions"
    },
    "questions": [
      {
        "category": "Poem Comprehension • Actions",
        "q": "What do our hands do in the poem 'Two Little Hands'? What do our feet do?",
        "ans": "<strong>Answer:</strong><br>• Our two little hands go <strong>clap, clap, clap</strong>.<br>• Our two little feet go <strong>tap, tap, tap</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Hands go clap, clap, clap",
            "marks": "1 M"
          },
          {
            "key": "Feet go tap, tap, tap",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Comprehension • Head and Eyes",
        "q": "How many eyes do we have? How does our head move in the rhyme?",
        "ans": "<strong>Answer:</strong><br>• We have <strong>two little eyes</strong> that are open wide.<br>• Our <strong>one little head</strong> moves from side to side.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two little eyes open wide",
            "marks": "1 M"
          },
          {
            "key": "One little head side to side",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Rhyming Words • Sound Identification",
        "q": "Find the rhyming pair in the poem for each word:<br>(a) Clap — _______<br>(b) Wide — _______",
        "ans": "<strong>Answers:</strong><br>(a) Clap rhymes with <strong>Tap</strong>.<br>(b) Wide rhymes with <strong>Side</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) Tap",
            "marks": "1 M"
          },
          {
            "key": "(b) Side",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Body Senses Connection",
        "q": "Match each sense organ with its function:<br>(a) Eyes (b) Ears (c) Nose (d) Tongue<br>Functions: (1) Smell (2) See (3) Taste (4) Hear",
        "ans": "<strong>Matching:</strong><br>• (a) Eyes — (2) See<br>• (b) Ears — (4) Hear<br>• (c) Nose — (1) Smell<br>• (d) Tongue — (3) Taste",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 organs correctly matched",
            "marks": "2 M (0.5 M each)"
          }
        ]
      },
      {
        "category": "Grammar • Singular and Plural",
        "q": "Write the plural form (more than one) for the following body parts:<br>(a) One hand — Two _______<br>(b) One foot — Two _______<br>(c) One eye — Two _______",
        "ans": "<strong>Answers:</strong><br>(a) Two <strong>hands</strong><br>(b) Two <strong>feet</strong> (irregular plural)<br>(c) Two <strong>eyes</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) hands",
            "marks": "1 M"
          },
          {
            "key": "(b) feet",
            "marks": "1 M"
          },
          {
            "key": "(c) eyes",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Action Words (Verbs)",
        "q": "Identify the action word (verb) in each sentence:<br>(a) The baby claps happily.<br>(b) Rohan taps his shoes on the floor.<br>(c) Birds fly in the sky.",
        "ans": "<strong>Answers:</strong><br>(a) Action word = <strong>claps</strong><br>(b) Action word = <strong>taps</strong><br>(c) Action word = <strong>fly</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) claps",
            "marks": "1 M"
          },
          {
            "key": "(b) taps",
            "marks": "1 M"
          },
          {
            "key": "(c) fly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling and Phonics",
        "q": "Fill in the missing letters to complete body part words:<br>(a) H _ _ D (used to think)<br>(b) N _ _ E (used to smell)<br>(c) E _ _ S (used to hear)",
        "ans": "<strong>Answers:</strong><br>(a) H <strong>E A</strong> D = HEAD<br>(b) N <strong>O S</strong> E = NOSE<br>(c) E <strong>A R</strong> S = EARS",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) HEAD",
            "marks": "1 M"
          },
          {
            "key": "(b) NOSE",
            "marks": "1 M"
          },
          {
            "key": "(c) EARS",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Expression • Action Song",
        "q": "Can you add two new lines to the rhyme using your knees and your shoulders?",
        "ans": "<strong>Sample Lines:</strong><br>• 'Two little knees go bend, bend, bend,'<br>• 'Two little shoulders go up and down to the end!'",
        "marks": 2,
        "rubric": [
          {
            "key": "Line with knees and action",
            "marks": "1 M"
          },
          {
            "key": "Line with shoulders and action",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Hygiene & Health",
        "q": "Why should we wash our hands with soap before eating food?",
        "ans": "<strong>Explanation:</strong><br>• Our hands touch many surfaces and collect dust and invisible germs.<br>• Washing hands with soap removes harmful germs and prevents us from falling sick.",
        "marks": 2,
        "rubric": [
          {
            "key": "Germ removal explained",
            "marks": "1 M"
          },
          {
            "key": "Disease prevention stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a simple sentence using each word: (a) Feet (b) Smile.",
        "ans": "<strong>Sentences:</strong><br>(a) <strong>Feet:</strong> I wear clean white socks on my feet.<br>(b) <strong>Smile:</strong> Mother has a lovely, warm smile.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct sentence with feet",
            "marks": "1 M"
          },
          {
            "key": "Correct sentence with smile",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites Drill",
        "q": "Write the opposite of:<br>(a) Open × _______<br>(b) Little × _______<br>(c) Up × _______",
        "ans": "<strong>Answers:</strong><br>(a) Open × <strong>Closed / Shut</strong><br>(b) Little × <strong>Big / Huge</strong><br>(c) Up × <strong>Down</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Closed",
            "marks": "1 M"
          },
          {
            "key": "(b) Big",
            "marks": "1 M"
          },
          {
            "key": "(c) Down",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pronunciation Practice",
        "q": "Read aloud and identify which word has the short 'a' sound like in 'clap':<br>(A) Tape (B) Cap (C) Shape",
        "ans": "<strong>Answer:</strong><br>• <strong>(B) Cap</strong> has the short 'a' vowel sound (/æ/) exactly like 'clap' and 'tap'.",
        "marks": 1,
        "rubric": [
          {
            "key": "Cap identified with correct vowel explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Body Actions Observation",
        "q": "Name two things you can do with your feet other than walking.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Run / Jog</strong><br>2. <strong>Jump / Hop / Kick a football</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two valid actions named",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Classroom Etiquette",
        "q": "When do children clap their hands in the classroom?",
        "ans": "<strong>Answer:</strong><br>• Children clap their hands to appreciate a classmate's good presentation, when singing rhymes together, or when celebrating someone's birthday.",
        "marks": 2,
        "rubric": [
          {
            "key": "Appreciation / singing context explained",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Fill in the Blanks",
        "q": "Fill in the blanks from the poem:<br>One little _______ goes side to side.<br>Two little _______ are open wide.",
        "ans": "<strong>Answers:</strong><br>One little <strong>head</strong> goes side to side.<br>Two little <strong>eyes</strong> are open wide.",
        "marks": 2,
        "rubric": [
          {
            "key": "head",
            "marks": "1 M"
          },
          {
            "key": "eyes",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) We hear birds chirping with our nose.<br>(b) We have two feet.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. We hear sounds with our ears, not our nose.<br>(b) <strong>True</strong>. Humans have two feet.",
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
        "q": "What is the message of the poem 'Two Little Hands'?",
        "ans": "<strong>Summary:</strong><br>• The poem joyfully celebrates our wonderful body parts and their coordinated movements, showing that every organ has a special and helpful role in our daily life.",
        "marks": 2,
        "rubric": [
          {
            "key": "Celebration of body coordination explained",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrd2",
    "num": 2,
    "unit": "Unit 1: My Family and Me",
    "title": "Picture Reading & My Name",
    "subtitle": "Self-Introduction, Family Roles, Greetings & Alphabet Writing",
    "concepts": [
      "Introducing oneself with full name, age, class, and school.",
      "Reading family pictures and talking about parents, grandparents, and siblings.",
      "Using courteous greetings (Good morning, Thank you, Please, Excuse me).",
      "Tracing uppercase and lowercase alphabet letters with correct stroke order."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"10\"/><circle cx=\"100\" cy=\"50\" r=\"22\" fill=\"#3b82f6\"/><text x=\"100\" y=\"55\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Grandpa</text><circle cx=\"170\" cy=\"50\" r=\"22\" fill=\"#ec4899\"/><text x=\"170\" y=\"55\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Grandma</text><circle cx=\"240\" cy=\"50\" r=\"22\" fill=\"#10b981\"/><text x=\"240\" y=\"55\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Father</text><circle cx=\"310\" cy=\"50\" r=\"22\" fill=\"#f59e0b\"/><text x=\"310\" y=\"55\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Mother</text><circle cx=\"380\" cy=\"55\" r=\"18\" fill=\"#8b5cf6\"/><text x=\"380\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Me</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#713f12\" text-anchor=\"middle\">My Loving Family • Respect and Togetherness</text></svg>",
    "cbq": {
      "title": "New Student Classroom Introduction",
      "text": "On the first day of Class 2, a new student stands in front of the class. She says: 'Hello everyone! My name is Ananya Sharma. I am seven years old. I live with my parents and grandparents. My favorite hobby is drawing cartoons.'",
      "question": "What is the new student's full name? How old is she? What polite greeting did she use to start speaking?",
      "answer": "1. Her full name is <strong>Ananya Sharma</strong>.<br>2. She is <strong>seven years old</strong>.<br>3. She started politely with the greeting: <strong>'Hello everyone!'</strong>.",
      "rubric": "1 M for full name + 1 M for age + 1 M for greeting"
    },
    "questions": [
      {
        "category": "Textbook Activity • Self Introduction",
        "q": "Write three sentences introducing yourself to your teacher.",
        "ans": "<strong>Sample Introduction:</strong><br>1. My name is Aarav Gupta.<br>2. I am seven years old and I study in Class 2.<br>3. I like reading storybooks and playing cricket.",
        "marks": 3,
        "rubric": [
          {
            "key": "Name stated",
            "marks": "1 M"
          },
          {
            "key": "Age and class stated",
            "marks": "1 M"
          },
          {
            "key": "Hobby/favorite activity stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Family Picture Reading",
        "q": "Look at the family picture in your book. Who are the people living in a joint family?",
        "ans": "<strong>Answer:</strong><br>• Grandfather, grandmother, father, mother, brother, sister, and pets (like a dog or cat) living together with love and care.",
        "marks": 2,
        "rubric": [
          {
            "key": "Grandparents and parents listed",
            "marks": "1 M"
          },
          {
            "key": "Siblings and pets listed",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Polite Words • Magic Manners",
        "q": "When should you say:<br>(a) 'Thank you'<br>(b) 'Please'<br>(c) 'Sorry'",
        "ans": "<strong>Answers:</strong><br>(a) Say <strong>'Thank you'</strong> when someone helps you or gives you a gift.<br>(b) Say <strong>'Please'</strong> when asking politely for help or an item.<br>(c) Say <strong>'Sorry'</strong> when you make a mistake or accidentally hurt someone.",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Thank you context",
            "marks": "1 M"
          },
          {
            "key": "(b) Please context",
            "marks": "1 M"
          },
          {
            "key": "(c) Sorry context",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grammar • Capital Letters Rule",
        "q": "Why do we always write the first letter of our name with a CAPITAL letter?",
        "ans": "<strong>Explanation:</strong><br>• A person's name is a <strong>Proper Noun</strong> (a special, unique naming word).<br>• In English grammar rules, all proper nouns always begin with a capital letter (e.g., Rohan, Meera, India).",
        "marks": 2,
        "rubric": [
          {
            "key": "Proper noun concept explained",
            "marks": "1 M"
          },
          {
            "key": "Grammar capitalization rule stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Family Relations",
        "q": "What do you call:<br>(a) Your father's father: _______<br>(b) Your mother's brother: _______",
        "ans": "<strong>Answers:</strong><br>(a) My father's father is my <strong>Grandfather (Dada ji)</strong>.<br>(b) My mother's brother is my <strong>Uncle (Mama ji)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) Grandfather",
            "marks": "1 M"
          },
          {
            "key": "(b) Uncle",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Alphabet Order • Alphabetical Thinking",
        "q": "Arrange these three names in alphabetical (A to Z) order: Chetan, Aman, Bina.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Look at first letters: C, A, B.<br>• Alphabetical order: A, B, C.<br>• Correct order: <strong>1. Aman, 2. Bina, 3. Chetan</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "First letter comparison shown",
            "marks": "1 M"
          },
          {
            "key": "Aman, Bina, Chetan correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Helping at Home",
        "q": "Name two small ways you help your family members at home.",
        "ans": "<strong>Sample Ways:</strong><br>1. Keeping my toys and school bag neatly in their place.<br>2. Watering house plants and clearing dishes from the dinner table.",
        "marks": 2,
        "rubric": [
          {
            "key": "First valid helpful chore",
            "marks": "1 M"
          },
          {
            "key": "Second valid helpful chore",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pronoun Usage • He, She, It",
        "q": "Fill in with 'He', 'She', or 'It':<br>(a) My father is an engineer. ___ works hard.<br>(b) My grandmother tells stories. ___ is very kind.<br>(c) This is my pet puppy. ___ barks cheerfully.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>He</strong> works hard.<br>(b) <strong>She</strong> is very kind.<br>(c) <strong>It</strong> barks cheerfully.",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) He",
            "marks": "1 M"
          },
          {
            "key": "(b) She",
            "marks": "1 M"
          },
          {
            "key": "(c) It",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling Check • Family Words",
        "q": "Unscramble these family words:<br>(a) T E O M H R = _______<br>(b) S I E T R S = _______",
        "ans": "<strong>Answers:</strong><br>(a) M O T H E R = <strong>MOTHER</strong><br>(b) S I S T E R = <strong>SISTER</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) MOTHER",
            "marks": "1 M"
          },
          {
            "key": "(b) SISTER",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Writing • My Favorite Pet",
        "q": "Write two lines about a pet you have or would like to have.",
        "ans": "<strong>Sample Sentences:</strong><br>• I have a little pet cat named Fluffy.<br>• She has soft white fur and purrs when I stroke her back.",
        "marks": 2,
        "rubric": [
          {
            "key": "Pet identified with descriptive sentence",
            "marks": "1 M"
          },
          {
            "key": "Second coherent sentence",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Greetings Matching",
        "q": "Match the greeting to the time of day:<br>(a) Morning (b) Afternoon (c) Night<br>Greetings: (1) Good night (2) Good afternoon (3) Good morning",
        "ans": "<strong>Matching:</strong><br>• (a) Morning — (3) Good morning<br>• (b) Afternoon — (2) Good afternoon<br>• (c) Night — (1) Good night",
        "marks": 2,
        "rubric": [
          {
            "key": "All 3 time greetings correctly matched",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Vowels and Consonants",
        "q": "How many letters are in the English alphabet? Name the 5 vowels.",
        "ans": "<strong>Answer:</strong><br>• There are <strong>26 letters</strong> in the English alphabet.<br>• The 5 vowels are: <strong>A, E, I, O, U</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "26 letters stated",
            "marks": "1 M"
          },
          {
            "key": "All 5 vowels (A, E, I, O, U) named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Describing Words (Adjectives)",
        "q": "Choose a suitable describing word for each:<br>(a) A _______ grandfather (loving / sour)<br>(b) A _______ baby (crying / wooden)",
        "ans": "<strong>Answers:</strong><br>(a) A <strong>loving</strong> grandfather.<br>(b) A <strong>crying</strong> baby.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) loving",
            "marks": "1 M"
          },
          {
            "key": "(b) crying",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading Comprehension",
        "q": "In the classroom picture, what are the students doing? Name three things you see in a classroom.",
        "ans": "<strong>Answer:</strong><br>• The students are sitting attentively at their desks, listening to the teacher, and writing in their notebooks.<br>• Three things seen: <strong>Blackboard, desks, and books</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Student activity described",
            "marks": "1 M"
          },
          {
            "key": "Three classroom items listed",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) We should shout loudly when greeting our teacher.<br>(b) A loving family helps each other in daily chores.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. We should greet our teacher politely and respectfully, not shout.<br>(b) <strong>True</strong>. Family members support and care for each other.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with polite explanation",
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
        "q": "What makes your family special to you?",
        "ans": "<strong>Summary:</strong><br>• My family is special because they love me unconditionally, cook delicious food for me, protect me, guide me when I make mistakes, and celebrate my happiness together.",
        "marks": 2,
        "rubric": [
          {
            "key": "Emotional and caring connection described",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "What punctuation mark is placed at the end of the sentence: 'My name is Maya'?",
        "ans": "<strong>Answer:</strong><br>• A <strong>full stop (.)</strong> is placed at the end of a complete statement.",
        "marks": 1,
        "rubric": [
          {
            "key": "Full stop (.) identified",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrd3",
    "num": 3,
    "unit": "Unit 2: Life Around Us",
    "title": "The Little Red Hen",
    "subtitle": "Classic Folk Tale, Planting Wheat, Hard Work & Teamwork",
    "concepts": [
      "Story comprehension: Hen finds grains, asks friends for help, does all the work herself.",
      "The stages of making bread: planting seeds, harvesting wheat, grinding into flour, baking bread.",
      "Character contrast: industrious Hen vs lazy friends (Dog, Cat, Duck).",
      "Moral value: Those who do not help with the work do not deserve to share the feast."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><circle cx=\"80\" cy=\"55\" r=\"26\" fill=\"#ef4444\"/><text x=\"80\" y=\"60\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">Red Hen</text><circle cx=\"180\" cy=\"55\" r=\"22\" fill=\"#9ca3af\"/><text x=\"180\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Lazy Dog</text><circle cx=\"270\" cy=\"55\" r=\"22\" fill=\"#d1d5db\"/><text x=\"270\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">Lazy Cat</text><circle cx=\"360\" cy=\"55\" r=\"22\" fill=\"#fde047\"/><text x=\"360\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#713f12\" text-anchor=\"middle\">Lazy Duck</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">'Who will help me?' — 'Not I!' said the lazy friends.</text></svg>",
    "cbq": {
      "title": "The Little Red Hen's Harvest Dilemma",
      "text": "The Little Red Hen found some golden grains of wheat. She asked the dog, the cat, and the duck: 'Who will help me plant these seeds?' All three replied: 'Not I!' The hen planted, watered, cut the wheat, and baked delicious hot bread with her chicks all by herself. When the aroma spread, the dog, cat, and duck ran over and said: 'We will help you eat it!'",
      "question": "Did the friends help the hen at any stage of making bread? What did the hen reply when they wanted to eat the bread? What is the moral lesson?",
      "answer": "1. <strong>No</strong>, the friends refused to help at every stage (planting, cutting, grinding, and baking).<br>2. The hen said: <strong>'No, you will not! My chicks and I will eat it all by ourselves!'</strong><br>3. <strong>Moral:</strong> Hard work brings sweet rewards. Those who are lazy and refuse to work should not expect to enjoy the fruits of someone else's labor.",
      "rubric": "1 M for 'No' with refusal explanation + 1 M for hen's response + 1 M for clear moral lesson"
    },
    "questions": [
      {
        "category": "Story Comprehension • The Beginning",
        "q": "What did the Little Red Hen find on the ground?",
        "ans": "<strong>Answer:</strong><br>• The Little Red Hen found some <strong>grains of wheat</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Grains of wheat identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Story Comprehension • Animal Characters",
        "q": "Name the three lazy animal friends in the story 'The Little Red Hen'.",
        "ans": "<strong>Answer:</strong><br>• The three animal friends were the <strong>Dog</strong>, the <strong>Cat</strong>, and the <strong>Duck</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All three animals (dog, cat, duck) named correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Sequencing the Steps • From Seed to Bread",
        "q": "Arrange the steps of making bread in the correct order:<br>(A) Baking bread in the oven<br>(B) Planting wheat seeds in soil<br>(C) Grinding wheat grains into flour<br>(D) Cutting the grown wheat crop",
        "ans": "<strong>Correct Order:</strong><br>1. <strong>(B)</strong> Planting wheat seeds in soil<br>2. <strong>(D)</strong> Cutting the grown wheat crop<br>3. <strong>(C)</strong> Grinding wheat grains into flour<br>4. <strong>(A)</strong> Baking bread in the oven.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct sequence B -> D -> C -> A",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Direct Speech • Animal Response",
        "q": "What exact words did the dog, cat, and duck say every time the Little Red Hen asked for help?",
        "ans": "<strong>Answer:</strong><br>• Every time the hen asked for help, they said: <strong>'Not I!'</strong>",
        "marks": 1,
        "rubric": [
          {
            "key": "'Not I!' quoted correctly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Moral Reasoning • Sharing Food",
        "q": "Was the Little Red Hen right in refusing to share the bread with her lazy friends? Give a reason.",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• <strong>Yes</strong>, the hen was completely fair and right.<br>• <strong>Reason:</strong> Her friends slept and played while she worked hard in the heat. Giving them bread would encourage their laziness, whereas refusing taught them the value of labor.",
        "marks": 2,
        "rubric": [
          {
            "key": "Affirmative judgment (Yes)",
            "marks": "1 M"
          },
          {
            "key": "Reason regarding hard work and laziness",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Young Ones of Animals",
        "q": "What is the young one of:<br>(a) A Hen: _______<br>(b) A Dog: _______<br>(c) A Cat: _______<br>(d) A Duck: _______",
        "ans": "<strong>Answers:</strong><br>(a) Hen — <strong>Chick</strong><br>(b) Dog — <strong>Puppy</strong><br>(c) Cat — <strong>Kitten</strong><br>(d) Duck — <strong>Duckling</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 young ones correctly named",
            "marks": "2 M (0.5 M each)"
          }
        ]
      },
      {
        "category": "Animal Sounds • Onomatopoeia",
        "q": "Match each animal with its sound:<br>(a) Hen (b) Dog (c) Cat (d) Duck<br>Sounds: (1) Meow (2) Quack (3) Cluck (4) Bark",
        "ans": "<strong>Matching:</strong><br>• (a) Hen — (3) Cluck<br>• (b) Dog — (4) Bark<br>• (c) Cat — (1) Meow<br>• (d) Duck — (2) Quack",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 animal sounds correctly matched",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Opposites in the Story",
        "q": "Write the antonyms (opposites) of:<br>(a) Hardworking × _______<br>(b) Hot × _______<br>(c) Friend × _______",
        "ans": "<strong>Answers:</strong><br>(a) Hardworking × <strong>Lazy</strong><br>(b) Hot × <strong>Cold</strong><br>(c) Friend × <strong>Enemy</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Lazy",
            "marks": "1 M"
          },
          {
            "key": "(b) Cold",
            "marks": "1 M"
          },
          {
            "key": "(c) Enemy",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grammar • Past Tense Verbs",
        "q": "Write the past tense of these action words from the story:<br>(a) Find — _______<br>(b) Plant — _______<br>(c) Bake — _______",
        "ans": "<strong>Answers:</strong><br>(a) Find — <strong>Found</strong><br>(b) Plant — <strong>Planted</strong><br>(c) Bake — <strong>Baked</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Found",
            "marks": "1 M"
          },
          {
            "key": "(b) Planted",
            "marks": "1 M"
          },
          {
            "key": "(c) Baked",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Who Helped the Hen?",
        "q": "Who helped the Little Red Hen eat the delicious fresh bread?",
        "ans": "<strong>Answer:</strong><br>• The Little Red Hen and her lovely little <strong>chicks</strong> ate the bread together.",
        "marks": 1,
        "rubric": [
          {
            "key": "Her chicks identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Farm Tools • Sickle and Flour Mill",
        "q": "What tool is used by a farmer to cut ripe golden wheat? Where is wheat grain taken to be ground into flour?",
        "ans": "<strong>Answer:</strong><br>• A <strong>sickle</strong> (or harvester) is used to cut ripe wheat.<br>• Wheat grain is taken to a <strong>flour mill (chakki)</strong> to be ground into flour.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sickle identified",
            "marks": "1 M"
          },
          {
            "key": "Flour mill / chakki identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Teamwork in Daily Life",
        "q": "How can working together as a team make difficult tasks easier?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• When everyone shares a part of the work, the task gets finished much faster.<br>• No single person gets tired, and everyone feels happy and proud of the final outcome.",
        "marks": 2,
        "rubric": [
          {
            "key": "Shared burden and speed explained",
            "marks": "1 M"
          },
          {
            "key": "Joy of shared success stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sensory Words • Smell of Food",
        "q": "Which word in English describes a very pleasant and sweet food smell: 'aroma' or 'noise'?",
        "ans": "<strong>Answer:</strong><br>• <strong>Aroma</strong> describes a wonderful, mouth-watering smell of freshly cooked food.",
        "marks": 1,
        "rubric": [
          {
            "key": "Aroma chosen with definition",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Character Trait Analysis",
        "q": "Give two words that describe the Little Red Hen's personality.",
        "ans": "<strong>Answer:</strong><br>• <strong>Hardworking</strong> and <strong>determined</strong> (or self-reliant / patient).",
        "marks": 2,
        "rubric": [
          {
            "key": "Two accurate positive traits",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Sentence Completion",
        "q": "Complete the sentence: If I was the dog in the story, I would have __________________.",
        "ans": "<strong>Sample Completion:</strong><br>• 'If I was the dog in the story, I would have <strong>happily helped the Little Red Hen carry the water and cut the wheat crop</strong>.'",
        "marks": 2,
        "rubric": [
          {
            "key": "Constructive helpful response written grammatically",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) The cat helped the hen grind the wheat.<br>(b) Wheat flour is used to bake bread and rotis.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. The cat said 'Not I!' and did not help at all.<br>(b) <strong>True</strong>. Wheat flour (atta/maida) is the main ingredient in bread and rotis.",
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
        "q": "What is the famous proverb related to the story 'The Little Red Hen'?",
        "ans": "<strong>Answer:</strong><br>• <strong>'As you sow, so shall you reap'</strong> (or 'No work, no food').",
        "marks": 1,
        "rubric": [
          {
            "key": "Recognized proverb quoted",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrd4",
    "num": 4,
    "unit": "Unit 2: Life Around Us",
    "title": "It is Fun!",
    "subtitle": "Animal Movements, Action Verbs, Miming & Rhymes",
    "concepts": [
      "Poem recitation celebrating diverse ways animals move in nature.",
      "Matching creatures with their movements: leap like a frog, swim like a fish, swing like a monkey, slither like a snake.",
      "Action verbs and adverbs (swiftly, gently, playfully).",
      "Creative movement games and roleplay."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"90\" cy=\"55\" r=\"22\" fill=\"#10b981\"/><text x=\"90\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Frog</text><path d=\"M 80 85 Q 140 10 200 85\" fill=\"none\" stroke=\"#059669\" stroke-width=\"3\" stroke-dasharray=\"3,3\"/><circle cx=\"210\" cy=\"55\" r=\"22\" fill=\"#3b82f6\"/><text x=\"210\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Fish</text><circle cx=\"320\" cy=\"55\" r=\"22\" fill=\"#f59e0b\"/><text x=\"320\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Bird</text><circle cx=\"420\" cy=\"55\" r=\"22\" fill=\"#8b5cf6\"/><text x=\"420\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Monkey</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Leap, Swim, Fly, Swing — It is Fun to Move!</text></svg>",
    "cbq": {
      "title": "Playground Animal Movement Game",
      "text": "During sports period, the PE teacher calls out animal names. When he shouts 'Rabbit', children hop on both feet. When he shouts 'Duck', they waddle in a squat. When he shouts 'Eagle', they stretch their arms wide and glide like wings.",
      "question": "Which movement verb matches the rabbit? Which matches the eagle? Why do different animals have different styles of movement?",
      "answer": "1. <strong>Rabbit:</strong> <strong>Hop / Leap</strong>.<br>2. <strong>Eagle:</strong> <strong>Fly / Glide / Soar</strong>.<br>3. <strong>Reason:</strong> Animals have adapted unique body shapes and limbs suited for their habitat (fish have fins for swimming in water, monkeys have strong arms for swinging on trees, rabbits have powerful hind legs for hopping on land).",
      "rubric": "1 M for rabbit hop + 1 M for eagle fly/glide + 1 M for habitat adaptation explanation"
    },
    "questions": [
      {
        "category": "Poem Comprehension • Animal Actions",
        "q": "According to the poem 'It is Fun!', how does:<br>(a) A frog move?<br>(b) A fish move?<br>(c) A bird move?",
        "ans": "<strong>Answers:</strong><br>(a) A frog <strong>leaps</strong>.<br>(b) A fish <strong>swims</strong>.<br>(c) A bird <strong>flies</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) leaps",
            "marks": "1 M"
          },
          {
            "key": "(b) swims",
            "marks": "1 M"
          },
          {
            "key": "(c) flies",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Match the Movement",
        "q": "Match each creature with its correct movement verb:<br>(a) Monkey (b) Horse (c) Snake (d) Duck<br>Movements: (1) Slither (2) Swing (3) Waddle (4) Gallop",
        "ans": "<strong>Matching:</strong><br>• (a) Monkey — (2) Swing<br>• (b) Horse — (4) Gallop<br>• (c) Snake — (1) Slither<br>• (d) Duck — (3) Waddle",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 correctly matched",
            "marks": "2 M (0.5 M each)"
          }
        ]
      },
      {
        "category": "Action Words • Fill in the Blanks",
        "q": "Fill in with the correct action word from the box [crawl, hop, swim]:<br>(a) A kangaroo can _______ high.<br>(b) A baby can _______ on hands and knees.<br>(c) A duck can _______ in the pond.",
        "ans": "<strong>Answers:</strong><br>(a) A kangaroo can <strong>hop</strong> high.<br>(b) A baby can <strong>crawl</strong> on hands and knees.<br>(c) A duck can <strong>swim</strong> in the pond.",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) hop",
            "marks": "1 M"
          },
          {
            "key": "(b) crawl",
            "marks": "1 M"
          },
          {
            "key": "(c) swim",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Animal Adaptations • Bird Wings",
        "q": "What body parts help a bird fly high in the sky?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Birds have <strong>feathered wings</strong>, light hollow bones, and strong chest muscles that help them flap and soar gracefully in the air.",
        "marks": 2,
        "rubric": [
          {
            "key": "Feathered wings identified",
            "marks": "1 M"
          },
          {
            "key": "Light bones / strong muscles mentioned",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Rhyming Pairs in the Poem",
        "q": "Find words that rhyme with:<br>(a) Fun — _______<br>(b) Fly — _______<br>(c) Leap — _______",
        "ans": "<strong>Answers:</strong><br>(a) Fun — <strong>Run / Sun</strong><br>(b) Fly — <strong>Sky / High</strong><br>(c) Leap — <strong>Deep / Keep</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Run/Sun",
            "marks": "1 M"
          },
          {
            "key": "(b) Sky/High",
            "marks": "1 M"
          },
          {
            "key": "(c) Deep/Keep",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grammar • Present Continuous (-ing)",
        "q": "Add '-ing' to turn these action words into continuous actions:<br>(a) Jump — _______<br>(b) Swim — _______<br>(c) Fly — _______",
        "ans": "<strong>Answers:</strong><br>(a) Jump + ing = <strong>Jumping</strong><br>(b) Swim + ing = <strong>Swimming</strong> (double the 'm')<br>(c) Fly + ing = <strong>Flying</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Jumping",
            "marks": "1 M"
          },
          {
            "key": "(b) Swimming",
            "marks": "1 M"
          },
          {
            "key": "(c) Flying",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Physical Activity • Fun at Play",
        "q": "Why is running and playing games outdoors good for growing children?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. Outdoor play strengthens bones and heart muscles.<br>2. It gives fresh air, relieves stress, and helps children stay energetic, active, and cheerful.",
        "marks": 2,
        "rubric": [
          {
            "key": "Physical health / muscle strength",
            "marks": "1 M"
          },
          {
            "key": "Fresh air and happiness",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creature Riddle",
        "q": "I have no legs. I slide silently on my belly through the grass. I make a hissing sound. Who am I?",
        "ans": "<strong>Answer:</strong><br>• You are a <strong>Snake</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Snake identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Describing Movement (Adverbs)",
        "q": "Choose the word that best describes how a cheetah runs: (A) Slowly (B) Swiftly (C) Heavily.",
        "ans": "<strong>Answer:</strong><br>• <strong>(B) Swiftly</strong> (A cheetah is the fastest land animal and runs with incredible swiftness).",
        "marks": 1,
        "rubric": [
          {
            "key": "Swiftly selected",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Sentence Writing",
        "q": "Write a sentence using the word 'leap'.",
        "ans": "<strong>Sample Sentence:</strong><br>• The happy little frog made a big leap into the green pond.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence using 'leap' correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Animal Homes Connection",
        "q": "Where does a monkey like to swing and play?",
        "ans": "<strong>Answer:</strong><br>• A monkey loves to swing from branch to branch high up in the green forest <strong>trees</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Trees / forest branches named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Movement Comparison",
        "q": "Who moves faster: a snail or a rabbit? Why?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• A <strong>rabbit</strong> moves much faster.<br>• A snail glides slowly on a trail of slime carrying a heavy shell, whereas a rabbit has strong muscular legs for rapid running and hopping.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rabbit identified as faster",
            "marks": "1 M"
          },
          {
            "key": "Anatomical comparison explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Human vs Animal Movement",
        "q": "Can humans fly in the sky like birds? How do humans travel by air?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Humans do not have wings and cannot fly naturally.<br>• However, humans travel through the air using inventions like <strong>aeroplanes and helicopters</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Lack of natural wings stated",
            "marks": "1 M"
          },
          {
            "key": "Aeroplanes/helicopters identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sound & Movement Pair",
        "q": "What sound does a horse make when it gallops across a field?",
        "ans": "<strong>Answer:</strong><br>• A horse's hooves make a rhythmic <strong>'clip-clop, clip-clop'</strong> sound as it gallops.",
        "marks": 1,
        "rubric": [
          {
            "key": "Clip-clop sound recognized",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) An elephant can jump over tall trees.<br>(b) Frogs can live both on land and in water.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. An elephant is too heavy and cannot jump.<br>(b) <strong>True</strong>. Frogs are amphibians and comfortably live in water and on land.",
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
        "q": "Why is the title of the poem 'It is Fun!'?",
        "ans": "<strong>Summary:</strong><br>• The title expresses pure joy because imitating animal leaps, swims, swings, and hops fills children with excitement, laughter, and playful physical energy.",
        "marks": 2,
        "rubric": [
          {
            "key": "Joy of physical movement and imitation explained",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "What do we call a person who swims: a runner, a painter, or a swimmer?",
        "ans": "<strong>Answer:</strong><br>• A person who swims is called a <strong>swimmer</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Swimmer correct",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrd5",
    "num": 5,
    "unit": "Unit 2: Life Around Us",
    "title": "Seeing without Seeing",
    "subtitle": "Senses Beyond Sight, Empathy, Touch, Sound & Braille",
    "concepts": [
      "Understanding how people with visual impairment perceive the world through other senses.",
      "Recognizing objects by touch (texture, shape, temperature), smell, and hearing.",
      "The blindfold classroom game: identifying fruits, flowers, and friends without looking.",
      "Empathy, kindness, and inclusion for differently-abled individuals."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fdf4ff\" rx=\"10\"/><circle cx=\"100\" cy=\"55\" r=\"26\" fill=\"#8b5cf6\"/><rect x=\"80\" y=\"48\" width=\"40\" height=\"14\" fill=\"#1e1b4b\" rx=\"4\"/><text x=\"100\" y=\"60\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Blindfold</text><circle cx=\"210\" cy=\"55\" r=\"22\" fill=\"#ec4899\"/><text x=\"210\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Touch</text><circle cx=\"310\" cy=\"55\" r=\"22\" fill=\"#3b82f6\"/><text x=\"310\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Hear</text><circle cx=\"410\" cy=\"55\" r=\"22\" fill=\"#10b981\"/><text x=\"410\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Smell</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#701a75\" text-anchor=\"middle\">Our Other Senses Guide Us When Eyes Cannot See</text></svg>",
    "cbq": {
      "title": "Classroom Sensory Mystery Box",
      "text": "The teacher placed a soft velvet handkerchief over Onu's eyes. She put three objects in front of him: a chilled steel spoon, a fragrant jasmine flower, and a ringing brass bell. Onu identified every single item correctly within five seconds.",
      "question": "Which sense did Onu use to identify the chilled spoon? Which for the jasmine flower? Which for the bell? What does this show about our body?",
      "answer": "1. <strong>Chilled spoon:</strong> Sense of <strong>Touch (cold and hard smooth metal)</strong>.<br>2. <strong>Jasmine flower:</strong> Sense of <strong>Smell (sweet floral fragrance)</strong>.<br>3. <strong>Brass bell:</strong> Sense of <strong>Hearing (ringing sound)</strong>.<br>4. <strong>Learning:</strong> When we cannot see, our other senses become sharp and help us understand the world around us.",
      "rubric": "1 M for touch + 1 M for smell & hearing + 1 M for sensory power conclusion"
    },
    "questions": [
      {
        "category": "Textbook Activity • Blindfold Game",
        "q": "In the game 'Seeing without Seeing', what happens when a child is blindfolded?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• The child cannot use their eyes to see.<br>• They must rely on their <strong>hands to feel</strong>, their <strong>ears to listen</strong>, and their <strong>nose to smell</strong> to identify people and objects.",
        "marks": 2,
        "rubric": [
          {
            "key": "Absence of sight stated",
            "marks": "1 M"
          },
          {
            "key": "Touch, sound, and smell usage explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Senses Discrimination • Touch",
        "q": "How can you tell the difference between a rough stone and a smooth glass marble with your eyes closed?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• By using your fingertips to feel the surface texture.<br>• The stone feels <strong>bumpy, uneven, and rough</strong>, while the glass marble feels <strong>completely sleek, slippery, and smooth</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Fingertip touch method explained",
            "marks": "1 M"
          },
          {
            "key": "Rough vs smooth texture contrasted",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Senses Discrimination • Hearing",
        "q": "Can you recognize your best friend in the dark without seeing their face? How?",
        "ans": "<strong>Answer:</strong><br>• <strong>Yes</strong>, by listening to their <strong>voice</strong>.<br>• Every human voice has a unique pitch and tone that our ears can easily recognize.",
        "marks": 2,
        "rubric": [
          {
            "key": "Affirmative answer (Yes)",
            "marks": "1 M"
          },
          {
            "key": "Unique voice pitch/tone explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Senses Discrimination • Smell",
        "q": "Name two food items you can instantly identify just by their smell from the other room.",
        "ans": "<strong>Sample Answers:</strong><br>1. <strong>Fried samosas / Halwa</strong> (strong ghee and spice aroma).<br>2. <strong>A ripe mango / Peeling an orange</strong> (sweet citrus fragrance).",
        "marks": 2,
        "rubric": [
          {
            "key": "Two aromatic food items named",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Inclusion & Empathy • Assisting Others",
        "q": "How can you help a visually challenged person who wants to cross a busy road?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. Gently ask politely: 'May I help you cross the road?'<br>2. Offer your arm for them to hold comfortably.<br>3. Look carefully in both directions for traffic, and guide them safely across the zebra crossing.",
        "marks": 3,
        "rubric": [
          {
            "key": "Polite permission asked",
            "marks": "1 M"
          },
          {
            "key": "Offering arm guidance",
            "marks": "1 M"
          },
          {
            "key": "Safe road crossing vigilance",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Knowledge of Braille Script",
        "q": "What is Braille, and how do visually impaired people read books using it?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• <strong>Braille</strong> is a special writing system invented by Louis Braille.<br>• It uses patterns of <strong>raised dots</strong> embossed on thick paper.<br>• Blind people glide their fingertips over the dots to feel letters and read words fluently.",
        "marks": 3,
        "rubric": [
          {
            "key": "Braille definition",
            "marks": "1 M"
          },
          {
            "key": "Raised dots system explained",
            "marks": "1 M"
          },
          {
            "key": "Fingertip reading mechanism described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Texture Words • Adjectives",
        "q": "Match each object to its touch texture word:<br>(a) Cotton wool (b) Ice cube (c) Tree bark<br>Textures: (1) Rough (2) Soft (3) Cold and wet",
        "ans": "<strong>Matching:</strong><br>• (a) Cotton wool — (2) Soft<br>• (b) Ice cube — (3) Cold and wet<br>• (c) Tree bark — (1) Rough",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 textures correctly matched",
            "marks": "3 M (1 M each)"
          }
        ]
      },
      {
        "category": "Walking Cane Purpose",
        "q": "Why do visually impaired people carry a white folding cane when walking outside?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• The white cane acts as an extension of their hand.<br>• Tapping it lightly on the ground ahead alerts them to obstacles, steps, puddles, or curbs, keeping them safe from tripping.",
        "marks": 2,
        "rubric": [
          {
            "key": "Detecting ground obstacles explained",
            "marks": "1 M"
          },
          {
            "key": "Safety and mobility independence explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sound Identification in Nature",
        "q": "Name two sounds in nature that tell you rain is coming even before you see raindrops.",
        "ans": "<strong>Answer:</strong><br>1. The loud rumbling of <strong>thunder</strong> in the clouds.<br>2. The rushing whoosh of <strong>cool gusty wind</strong> rustling tree leaves.",
        "marks": 2,
        "rubric": [
          {
            "key": "Thunder named",
            "marks": "1 M"
          },
          {
            "key": "Wind rustling leaves named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Five Senses",
        "q": "Complete the sentence: Sight is to eyes as hearing is to _______.",
        "ans": "<strong>Answer:</strong><br>• Sight is to eyes as hearing is to <strong>ears</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Ears correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Empathy & Friendship",
        "q": "How should we treat classmates who cannot see or hear well?",
        "ans": "<strong>Answer:</strong><br>• We should treat them with <strong>warmth, respect, and equality</strong>.<br>• We should include them in our classroom games, share stories, and never tease or exclude them.",
        "marks": 2,
        "rubric": [
          {
            "key": "Respect and equality",
            "marks": "1 M"
          },
          {
            "key": "Inclusive play and kindness",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites in Textures",
        "q": "Write the opposite of:<br>(a) Smooth × _______<br>(b) Hard × _______<br>(c) Hot × _______",
        "ans": "<strong>Answers:</strong><br>(a) Smooth × <strong>Rough</strong><br>(b) Hard × <strong>Soft</strong><br>(c) Hot × <strong>Cold</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Rough",
            "marks": "1 M"
          },
          {
            "key": "(b) Soft",
            "marks": "1 M"
          },
          {
            "key": "(c) Cold",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Safety Sense • Danger Smells",
        "q": "How does our sense of smell protect us from danger in the kitchen?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• If a cooking gas cylinder leaks or something burns on the stove, our nose immediately detects the sharp smell.<br>• This alerts adults to turn off the gas and prevent fires.",
        "marks": 2,
        "rubric": [
          {
            "key": "Detecting gas leak / burning smell",
            "marks": "1 M"
          },
          {
            "key": "Preventing fire accidents explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'gentle'.",
        "ans": "<strong>Sample Sentence:</strong><br>• A gentle cool breeze blew across the garden in the evening.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence using 'gentle'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) Blind people cannot enjoy listening to music.<br>(b) Our tongue helps us know if food is sweet or salty.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. Blind people have excellent hearing and enjoy beautiful songs and instrumental music.<br>(b) <strong>True</strong>. Taste buds on the tongue detect sweet, salty, sour, and bitter tastes.",
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
        "q": "What is the most important lesson you learned in 'Seeing without Seeing'?",
        "ans": "<strong>Summary:</strong><br>• We learned that seeing is not the only way to experience our beautiful world.<br>• Touch, hearing, smell, and taste provide deep understanding, and we must appreciate our senses while respecting and assisting people with disabilities.",
        "marks": 2,
        "rubric": [
          {
            "key": "Multisensory understanding explained",
            "marks": "1 M"
          },
          {
            "key": "Respect and assistance emphasized",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "Which sense organ covers our whole body like an outer protective coat?",
        "ans": "<strong>Answer:</strong><br>• Our <strong>skin</strong> covers our whole body and gives us the sense of touch.",
        "marks": 1,
        "rubric": [
          {
            "key": "Skin identified",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrd6",
    "num": 6,
    "unit": "Unit 3: Harmony",
    "title": "Come Back, Cat!",
    "subtitle": "Pet Care, Searching Spaces, Prepositions of Place & Love for Animals",
    "concepts": [
      "Story comprehension: Meenu's pet cat Mittu goes missing, family searches everywhere.",
      "Mastering prepositions of position: in, on, under, behind, near, between.",
      "Pet care responsibilities: feeding, gentle handling, and creating safe pet shelters.",
      "Building emotional awareness and affection towards domestic animals."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><rect x=\"70\" y=\"55\" width=\"80\" height=\"35\" fill=\"#93c5fd\" rx=\"4\"/><circle cx=\"110\" cy=\"40\" r=\"14\" fill=\"#f97316\"/><text x=\"110\" y=\"44\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">ON</text><rect x=\"210\" y=\"45\" width=\"80\" height=\"20\" fill=\"#64748b\" rx=\"2\"/><line x1=\"215\" y1=\"65\" x2=\"215\" y2=\"90\" stroke=\"#475569\" stroke-width=\"4\"/><line x1=\"285\" y1=\"65\" x2=\"285\" y2=\"90\" stroke=\"#475569\" stroke-width=\"4\"/><circle cx=\"250\" cy=\"78\" r=\"12\" fill=\"#f97316\"/><text x=\"250\" y=\"82\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">UNDER</text><rect x=\"360\" y=\"30\" width=\"60\" height=\"60\" fill=\"#cbd5e1\" rx=\"4\"/><circle cx=\"430\" cy=\"50\" r=\"14\" fill=\"#f97316\"/><text x=\"430\" y=\"54\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">BEHIND</text><text x=\"250\" y=\"110\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Prepositions: ON the chair, UNDER the table, BEHIND the door</text></svg>",
    "cbq": {
      "title": "Meenu's Missing Pet Search",
      "text": "Meenu came home from school and called out 'Mittu! Mittu!'. Her white kitten did not appear. Meenu looked under the bed, but Mittu was not there. She checked inside the laundry basket, but found only towels. Finally, she heard a faint 'Meow!'. Mittu was sitting high on top of the terrace wall, batting at a yellow butterfly.",
      "question": "Where did Meenu first look for Mittu? Where was Mittu actually found? Which prepositions show these locations?",
      "answer": "1. Meenu first looked <strong>under the bed</strong>.<br>2. Mittu was found sitting <strong>on top of the terrace wall</strong>.<br>3. The prepositions of position used are <strong>'under'</strong> and <strong>'on'</strong>.",
      "rubric": "1 M for under the bed + 1 M for terrace wall + 1 M for identifying prepositions"
    },
    "questions": [
      {
        "category": "Story Comprehension • The Problem",
        "q": "Why was Meenu worried when she returned from school?",
        "ans": "<strong>Answer:</strong><br>• Meenu was worried because her beloved pet cat, <strong>Mittu, was missing</strong> and did not come running to greet her when called.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cat Mittu missing identified",
            "marks": "1 M"
          },
          {
            "key": "Lack of usual greeting explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Prepositions • Fill in the Blanks",
        "q": "Fill in with [in, on, under, behind]:<br>(a) The cat is sitting _______ the mat.<br>(b) The kitten is hiding _______ the bed.<br>(c) Milk is _______ the red bowl.<br>(d) The puppy hid _______ the curtain.",
        "ans": "<strong>Answers:</strong><br>(a) The cat is sitting <strong>on</strong> the mat.<br>(b) The kitten is hiding <strong>under</strong> the bed.<br>(c) Milk is <strong>in</strong> the red bowl.<br>(d) The puppy hid <strong>behind</strong> the curtain.",
        "marks": 4,
        "rubric": [
          {
            "key": "(a) on",
            "marks": "1 M"
          },
          {
            "key": "(b) under",
            "marks": "1 M"
          },
          {
            "key": "(c) in",
            "marks": "1 M"
          },
          {
            "key": "(d) behind",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Story Resolution • How Mittu Returned",
        "q": "How did Meenu finally find Mittu?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Meenu heard a soft 'Meow!' from the terrace.<br>• She looked up and saw Mittu safely perched on the wall watching a butterfly, and gently carried her down.",
        "marks": 2,
        "rubric": [
          {
            "key": "Heard 'Meow!' sound",
            "marks": "1 M"
          },
          {
            "key": "Found on terrace wall chasing butterfly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Animal Care Responsibilities",
        "q": "What two things should pet owners give their cats every day to keep them healthy?",
        "ans": "<strong>Answer:</strong><br>1. Clean fresh drinking water and nutritious food (like warm milk or cat food).<br>2. A cozy clean sleeping mat and gentle love and playtime.",
        "marks": 2,
        "rubric": [
          {
            "key": "Water and nutritious food",
            "marks": "1 M"
          },
          {
            "key": "Clean shelter / gentle love",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Animal Sounds • Vocabulary",
        "q": "What sound does a cat make when it is hungry? What sound does it make when it is happy and stroked?",
        "ans": "<strong>Answer:</strong><br>• When hungry, a cat says <strong>'Meow, meow'</strong>.<br>• When happy and gently stroked, a cat makes a vibrating <strong>'Purr, purr'</strong> sound.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meow for hungry/calling",
            "marks": "1 M"
          },
          {
            "key": "Purr for contentment",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grammar • Where Questions",
        "q": "Answer using a full sentence: Where is the pencil? (Picture shows pencil inside pencil box).",
        "ans": "<strong>Answer:</strong><br>• The pencil is <strong>in (inside) the pencil box</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Full grammatical sentence",
            "marks": "1 M"
          },
          {
            "key": "Correct preposition 'in/inside'",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Describing Words • Cat Appearance",
        "q": "Pick two adjectives that describe Meenu's pet cat: (A) Furry (B) Wooden (C) Playful (D) Metal.",
        "ans": "<strong>Answers:</strong><br>• <strong>(A) Furry</strong> (has soft thick hair).<br>• <strong>(C) Playful</strong> (likes chasing butterflies and balls).",
        "marks": 2,
        "rubric": [
          {
            "key": "Furry identified",
            "marks": "1 M"
          },
          {
            "key": "Playful identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites • Position Words",
        "q": "Write the opposite position word:<br>(a) In × _______<br>(b) Under × _______<br>(c) Near × _______",
        "ans": "<strong>Answers:</strong><br>(a) In × <strong>Out</strong><br>(b) Under × <strong>Over / On</strong><br>(c) Near × <strong>Far</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Out",
            "marks": "1 M"
          },
          {
            "key": "(b) Over/On",
            "marks": "1 M"
          },
          {
            "key": "(c) Far",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling Check • Home Locations",
        "q": "Unscramble these places in a house:<br>(a) K I T H N E C = _______<br>(b) T E R A C R E = _______",
        "ans": "<strong>Answers:</strong><br>(a) K I T C H E N = <strong>KITCHEN</strong><br>(b) T E R R A C E = <strong>TERRACE</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) KITCHEN",
            "marks": "1 M"
          },
          {
            "key": "(b) TERRACE",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Punctuation • Exclamation Mark",
        "q": "Why does the title use an exclamation mark in 'Come Back, Cat!'?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• An exclamation mark (!) shows strong feeling, excitement, urgency, or loud calling.<br>• Meenu was calling out urgently with deep love and worry for her cat.",
        "marks": 2,
        "rubric": [
          {
            "key": "Strong emotion / urgency explained",
            "marks": "1 M"
          },
          {
            "key": "Loud calling connection",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Rhyming Words",
        "q": "Find three words that rhyme with 'Cat'.",
        "ans": "<strong>Answers:</strong><br>• <strong>Bat</strong>, <strong>Hat</strong>, <strong>Mat</strong> (or Fat, Rat, Sat).",
        "marks": 2,
        "rubric": [
          {
            "key": "Three valid -at rhyming words",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Room Clues",
        "q": "If a cat is hiding between two armchairs, which preposition word describes its position: 'near', 'under', or 'between'?",
        "ans": "<strong>Answer:</strong><br>• <strong>Between</strong> (used when an object is in the middle of two things).",
        "marks": 1,
        "rubric": [
          {
            "key": "Between identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Compassion for Stray Animals",
        "q": "What can you do to help stray animals in your neighbourhood during scorching summer days?",
        "ans": "<strong>Answer:</strong><br>• Keep an earthen pot of <strong>clean drinking water</strong> outside in the shade for thirsty birds, dogs, and cats.",
        "marks": 2,
        "rubric": [
          {
            "key": "Pot of clean drinking water in shade suggested",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'searching'.",
        "ans": "<strong>Sample Sentence:</strong><br>• Aman was searching for his lost eraser under the school desk.",
        "marks": 2,
        "rubric": [
          {
            "key": "Grammatically correct sentence with 'searching'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) Cats have sharp claws that help them climb trees and walls.<br>(b) A preposition tells us about the colour of an item.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong>. Retractable sharp claws allow cats to grip and climb vertical surfaces safely.<br>(b) <strong>False</strong>. A preposition tells us about position, place, or direction, not colour.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) True",
            "marks": "1 M"
          },
          {
            "key": "(b) False with position explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "What did you learn from the story 'Come Back, Cat!'?",
        "ans": "<strong>Summary:</strong><br>• Pets are affectionate members of the family who depend on us for safety.<br>• We also learned how to use spatial preposition words accurately to describe where things are located.",
        "marks": 2,
        "rubric": [
          {
            "key": "Affection for pets stated",
            "marks": "1 M"
          },
          {
            "key": "Preposition spatial mastery stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "Is a kitten the young one of a dog or a cat?",
        "ans": "<strong>Answer:</strong><br>• A kitten is the young one of a <strong>cat</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Cat identified",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrd7",
    "num": 7,
    "unit": "Unit 3: Harmony",
    "title": "Between Home and School",
    "subtitle": "Daily Journey, Road Landmarks, Traffic Safety & Neighborhood",
    "concepts": [
      "Narrating the daily morning walk from home to the school gate.",
      "Recognizing neighborhood landmarks: tea stall, post office, bakery, banyan tree.",
      "Learning road safety: zebra crossings, footpath, looking both ways, traffic lights.",
      "Direction words: left, right, straight ahead, across."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><rect x=\"40\" y=\"40\" width=\"60\" height=\"50\" fill=\"#3b82f6\" rx=\"3\"/><text x=\"70\" y=\"70\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Home</text><line x1=\"100\" y1=\"65\" x2=\"400\" y2=\"65\" stroke=\"#475569\" stroke-width=\"14\" stroke-dasharray=\"16,8\"/><circle cx=\"200\" cy=\"30\" r=\"18\" fill=\"#15803d\"/><text x=\"200\" y=\"34\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Tree</text><rect x=\"270\" y=\"35\" width=\"40\" height=\"25\" fill=\"#f59e0b\" rx=\"2\"/><text x=\"290\" y=\"52\" font-family=\"sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Shop</text><rect x=\"400\" y=\"30\" width=\"70\" height=\"60\" fill=\"#dc2626\" rx=\"4\"/><text x=\"435\" y=\"65\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">School</text><text x=\"250\" y=\"110\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Walk on the Footpath • Cross Safely at Zebra Crossing</text></svg>",
    "cbq": {
      "title": "Ravi's Morning Walk to School",
      "text": "Every morning, Ravi walks to school with his elder sister. They leave home, turn left at the red letterbox, walk past the lively tea stall, stop at the pedestrian crossing until the signal turns green, and enter through the main school gate.",
      "question": "Which landmark did Ravi pass after turning left? Why did they stop at the pedestrian crossing? Which rule of road safety did they follow?",
      "answer": "1. After turning left, Ravi passed the <strong>red letterbox</strong> and the <strong>lively tea stall</strong>.<br>2. They stopped at the pedestrian crossing because the traffic light was red for pedestrians and cars were moving.<br>3. They followed the golden road safety rule: <strong>Wait for the green walking signal and cross only at the pedestrian/zebra crossing</strong>.",
      "rubric": "1 M for landmarks + 1 M for stop reason + 1 M for road safety rule"
    },
    "questions": [
      {
        "category": "Textbook Comprehension • The Journey",
        "q": "Name three things or places Ravi sees between his home and his school.",
        "ans": "<strong>Answer:</strong><br>1. The red <strong>post box / post office</strong>.<br>2. The bustling <strong>tea stall</strong> with boiling tea.<br>3. The huge spreading <strong>banyan tree</strong> and the pedestrian zebra crossing.",
        "marks": 3,
        "rubric": [
          {
            "key": "Post box / post office named",
            "marks": "1 M"
          },
          {
            "key": "Tea stall named",
            "marks": "1 M"
          },
          {
            "key": "Banyan tree / crossing named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Road Safety • Zebra Crossing",
        "q": "What is a zebra crossing? Why does it have black and white stripes?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• A <strong>zebra crossing</strong> is a designated pathway painted across the road for pedestrians to cross safely.<br>• The bold black and white stripes resemble a zebra's coat and are clearly visible to approaching vehicle drivers from a distance so they slow down.",
        "marks": 2,
        "rubric": [
          {
            "key": "Pedestrian crossing definition",
            "marks": "1 M"
          },
          {
            "key": "Visibility of zebra stripes explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Traffic Lights Rule",
        "q": "What do the three traffic light colours mean for vehicles?<br>(a) Red means _______<br>(b) Yellow (Amber) means _______<br>(c) Green means _______",
        "ans": "<strong>Answers:</strong><br>(a) Red means <strong>STOP</strong>.<br>(b) Yellow means <strong>WAIT / SLOW DOWN / GET READY</strong>.<br>(c) Green means <strong>GO</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) STOP",
            "marks": "1 M"
          },
          {
            "key": "(b) WAIT / SLOW",
            "marks": "1 M"
          },
          {
            "key": "(c) GO",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Direction Words • Left, Right, Straight",
        "q": "Fill in with [left, right, straight]:<br>(a) Walk _______ along the pavement without running.<br>(b) Before crossing, look right, then look _______, then right again.",
        "ans": "<strong>Answers:</strong><br>(a) Walk <strong>straight</strong> along the pavement.<br>(b) Look right, then look <strong>left</strong>, then right again.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) straight",
            "marks": "1 M"
          },
          {
            "key": "(b) left",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Walking Habits • Footpath Rule",
        "q": "Why should we always walk on the footpath (pavement) and never play on the open road?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• The road is meant for fast-moving vehicles like cars, buses, and motorcycles.<br>• Walking on the footpath protects pedestrians from speeding traffic and prevents accidents.",
        "marks": 2,
        "rubric": [
          {
            "key": "Vehicle traffic danger explained",
            "marks": "1 M"
          },
          {
            "key": "Pavement protection explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Neighborhood Landmarks",
        "q": "What is a 'landmark'? Give one example from your own neighbourhood.",
        "ans": "<strong>Explanation:</strong><br>• A <strong>landmark</strong> is an easily recognized building, tree, or place (like a big temple, bank, park, or water tank) that helps people find directions easily.<br>• Example: The municipal water tank near the main bus stop.",
        "marks": 2,
        "rubric": [
          {
            "key": "Landmark definition",
            "marks": "1 M"
          },
          {
            "key": "Valid real-world example",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Action Verbs • Journey Verbs",
        "q": "Identify the verbs in the sentence: 'The children walk slowly and cross the road safely.'",
        "ans": "<strong>Answer:</strong><br>• The verbs (action words) are: <strong>walk</strong> and <strong>cross</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "walk identified",
            "marks": "1 M"
          },
          {
            "key": "cross identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Adverbs • How Actions are Done",
        "q": "Which word tells how the children crossed the road: (A) Road (B) Safely (C) Children?",
        "ans": "<strong>Answer:</strong><br>• <strong>(B) Safely</strong> is the adverb describing the action 'crossed'.",
        "marks": 1,
        "rubric": [
          {
            "key": "Safely identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Everyday Sounds on the Road",
        "q": "Name two sounds you hear while walking on a busy morning street.",
        "ans": "<strong>Answers:</strong><br>1. Horns of vehicles: <strong>'Beep-beep! Honk-honk!'</strong><br>2. Bells of school cycles: <strong>'Tring-tring!'</strong> (or birds chirping).",
        "marks": 2,
        "rubric": [
          {
            "key": "Vehicle horn sound",
            "marks": "1 M"
          },
          {
            "key": "Cycle bell / natural sound",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Community Places • Post Office",
        "q": "What do people do at a post office?",
        "ans": "<strong>Answer:</strong><br>• People drop written letters in post boxes, buy postage stamps, send postcards, and post parcels and money orders to relatives far away.",
        "marks": 2,
        "rubric": [
          {
            "key": "Posting letters/parcels",
            "marks": "1 M"
          },
          {
            "key": "Buying stamps/postcards",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Opposites",
        "q": "Write the opposite of:<br>(a) Before × _______<br>(b) Safe × _______<br>(c) Left × _______",
        "ans": "<strong>Answers:</strong><br>(a) Before × <strong>After</strong><br>(b) Safe × <strong>Unsafe / Dangerous</strong><br>(c) Left × <strong>Right</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) After",
            "marks": "1 M"
          },
          {
            "key": "(b) Dangerous/Unsafe",
            "marks": "1 M"
          },
          {
            "key": "(c) Right",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Punctuality • Arriving on Time",
        "q": "Why is it important to reach school on time before the morning assembly bell rings?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Reaching on time teaches self-discipline.<br>• It ensures we do not miss morning prayers, announcements, or the beginning of our first class.",
        "marks": 2,
        "rubric": [
          {
            "key": "Discipline habit explained",
            "marks": "1 M"
          },
          {
            "key": "Not missing assembly/lessons",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'footpath'.",
        "ans": "<strong>Sample Sentence:</strong><br>• We should always walk on the footpath to stay safe from moving vehicles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meaningful sentence with 'footpath'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) We should cross the road while playing on our mobile phone.<br>(b) A yellow traffic light tells drivers to slow down and prepare to stop.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. Looking at mobile phones while crossing distracts attention and can lead to dangerous accidents.<br>(b) <strong>True</strong>. Yellow/amber warns drivers that red light is approaching.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with safety reason",
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
        "q": "What is the key takeaway of 'Between Home and School'?",
        "ans": "<strong>Summary:</strong><br>• The daily journey between home and school connects us with our neighbourhood community.<br>• Practicing strict road safety rules ensures every child travels safely every day.",
        "marks": 2,
        "rubric": [
          {
            "key": "Neighborhood connection",
            "marks": "1 M"
          },
          {
            "key": "Road safety practice",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "What color is the post box in India?",
        "ans": "<strong>Answer:</strong><br>• A standard post box in India is painted bright <strong>Red</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Red correct",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrd8",
    "num": 8,
    "unit": "Unit 3: Harmony",
    "title": "This is My Town",
    "subtitle": "Community Helpers, Civic Places, Cleanliness & Town Pride",
    "concepts": [
      "Poem appreciation celebrating town landmarks, streets, and community spaces.",
      "Identifying community helpers: baker, doctor, teacher, potter, postman, sweeper.",
      "Civic responsibility: keeping public streets clean and throwing waste in trash bins.",
      "Rhyming pairs and sound patterns (town-clown, street-sweet, shop-stop)."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fef2f2\" rx=\"10\"/><rect x=\"50\" y=\"35\" width=\"70\" height=\"50\" fill=\"#f97316\" rx=\"4\"/><text x=\"85\" y=\"65\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Bakery</text><rect x=\"150\" y=\"35\" width=\"70\" height=\"50\" fill=\"#0284c7\" rx=\"4\"/><text x=\"185\" y=\"65\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Clinic</text><rect x=\"250\" y=\"35\" width=\"70\" height=\"50\" fill=\"#16a34a\" rx=\"4\"/><text x=\"285\" y=\"65\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">School</text><rect x=\"350\" y=\"35\" width=\"70\" height=\"50\" fill=\"#9333ea\" rx=\"4\"/><text x=\"385\" y=\"65\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Library</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">This is My Town • Clean Streets, Helpful Friends</text></svg>",
    "cbq": {
      "title": "Community Helpers Day at Town Hall",
      "text": "Class 2 visited the Town Hall for Community Helpers Day. They met Uncle Paul who bakes crusty buns at the bakery, Dr. Sneha who treats sick patients, Postman Shyam who delivers letters on his bicycle, and Ramu the sanitation worker who sweeps the lanes clean every dawn.",
      "question": "What does the baker do? Who keeps the town lanes clean? Why are all community helpers equally important?",
      "answer": "1. The baker <strong>bakes fresh bread, cakes, and crusty buns</strong> for everyone.<br>2. <strong>Ramu the sanitation worker (sweeper)</strong> keeps the lanes clean and hygienic.<br>3. <strong>Importance:</strong> Every helper provides an essential service that makes town life comfortable, healthy, safe, and happy. We rely on each other in society.",
      "rubric": "1 M for baker + 1 M for sanitation worker + 1 M for mutual interdependence explanation"
    },
    "questions": [
      {
        "category": "Poem Comprehension • Town Features",
        "q": "What are some of the places mentioned in the poem 'This is My Town'?",
        "ans": "<strong>Answer:</strong><br>• Clean wide streets, rows of shops, the school, the hospital/clinic, the town park, and the bakery.",
        "marks": 2,
        "rubric": [
          {
            "key": "Streets and shops mentioned",
            "marks": "1 M"
          },
          {
            "key": "Public buildings / parks mentioned",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Match the Job",
        "q": "Match each helper with their work:<br>(a) Teacher (b) Doctor (c) Potter (d) Firefighter<br>Work: (1) Cures sick people (2) Extinguishes fires (3) Teaches students (4) Shapes earthen clay pots",
        "ans": "<strong>Matching:</strong><br>• (a) Teacher — (3) Teaches students<br>• (b) Doctor — (1) Cures sick people<br>• (c) Potter — (4) Shapes earthen clay pots<br>• (d) Firefighter — (2) Extinguishes fires",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 helpers correctly matched",
            "marks": "2 M (0.5 M each)"
          }
        ]
      },
      {
        "category": "Rhyming Pairs in the Poem",
        "q": "Find words that rhyme with:<br>(a) Town — _______<br>(b) Street — _______<br>(c) Shop — _______",
        "ans": "<strong>Answers:</strong><br>(a) Town — <strong>Brown / Down / Clown</strong><br>(b) Street — <strong>Sweet / Meet / Feet</strong><br>(c) Shop — <strong>Stop / Top / Hop</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Down/Brown",
            "marks": "1 M"
          },
          {
            "key": "(b) Sweet/Meet",
            "marks": "1 M"
          },
          {
            "key": "(c) Stop/Top",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Civic Sense • Waste Disposal",
        "q": "Where should you throw banana peels and empty juice packets when walking in your town?",
        "ans": "<strong>Answer:</strong><br>• You should always throw waste inside a <strong>public dustbin (trash can)</strong>.<br>• If no bin is nearby, keep the wrapper in your bag until you find one, keeping the streets sparkling clean.",
        "marks": 2,
        "rubric": [
          {
            "key": "Public dustbin identified",
            "marks": "1 M"
          },
          {
            "key": "Carrying waste until bin found explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Community Helper Riddle",
        "q": "I wear a white coat and carry a stethoscope around my neck. I give medicine when you have fever. Who am I?",
        "ans": "<strong>Answer:</strong><br>• You are a <strong>Doctor</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Doctor identified correctly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Community Helper Riddle 2",
        "q": "I rise before the sun, mix flour and yeast, and bake sweet hot buns in a big oven. Who am I?",
        "ans": "<strong>Answer:</strong><br>• You are a <strong>Baker</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Baker identified correctly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Plurals",
        "q": "Write the plural of these town words:<br>(a) One street — Many _______<br>(b) One shop — Many _______<br>(c) One bus — Many _______",
        "ans": "<strong>Answers:</strong><br>(a) Many <strong>streets</strong><br>(b) Many <strong>shops</strong><br>(c) Many <strong>buses</strong> (add -es)",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) streets",
            "marks": "1 M"
          },
          {
            "key": "(b) shops",
            "marks": "1 M"
          },
          {
            "key": "(c) buses",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Civic Pride • Beautiful Town",
        "q": "What can citizens do to make their town green and beautiful?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. Plant shady flowering trees and saplings along pathways and parks.<br>2. Never litter plastic and avoid damaging public property.",
        "marks": 2,
        "rubric": [
          {
            "key": "Planting trees",
            "marks": "1 M"
          },
          {
            "key": "No littering / keeping spaces clean",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Public Transport Helper",
        "q": "Who drives the public bus that carries passengers across town? What quality should they have?",
        "ans": "<strong>Answer:</strong><br>• The <strong>Bus Driver</strong> drives the public bus.<br>• A driver must be <strong>careful, alert, and follow traffic rules strictly</strong> to keep passengers safe.",
        "marks": 2,
        "rubric": [
          {
            "key": "Bus driver identified",
            "marks": "1 M"
          },
          {
            "key": "Careful/rule-abiding quality explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Describing Words • Adjectives",
        "q": "Choose a suitable describing word:<br>(a) A _______ town (clean / noisy)<br>(b) A _______ helper (kind / salty)",
        "ans": "<strong>Answers:</strong><br>(a) A <strong>clean</strong> town.<br>(b) A <strong>kind</strong> helper.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) clean",
            "marks": "1 M"
          },
          {
            "key": "(b) kind",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'neighbourhood'.",
        "ans": "<strong>Sample Sentence:</strong><br>• Our neighbourhood has a beautiful green park where children play every evening.",
        "marks": 2,
        "rubric": [
          {
            "key": "Grammatically correct sentence with 'neighbourhood'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Opposites • City vs Village",
        "q": "Write the antonyms (opposites) of:<br>(a) Clean × _______<br>(b) Beautiful × _______<br>(c) Busy × _______",
        "ans": "<strong>Answers:</strong><br>(a) Clean × <strong>Dirty</strong><br>(b) Beautiful × <strong>Ugly</strong><br>(c) Busy × <strong>Idle / Quiet</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Dirty",
            "marks": "1 M"
          },
          {
            "key": "(b) Ugly",
            "marks": "1 M"
          },
          {
            "key": "(c) Idle/Quiet",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Respect for All Work",
        "q": "Why should we respect sanitation workers and sweepers who clean our streets?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• They do very hard and important work in all seasons to keep our surroundings disease-free and clean.<br>• Without them, our towns would become polluted and unlivable. All honest work deserves dignity and gratitude.",
        "marks": 2,
        "rubric": [
          {
            "key": "Disease prevention & hard work explained",
            "marks": "1 M"
          },
          {
            "key": "Dignity of labor and gratitude emphasized",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling Check • Town Helpers",
        "q": "Fill in the missing letters: T _ A C H _ R (teaches in school).",
        "ans": "<strong>Answer:</strong><br>• T <strong>E</strong> A C H <strong>E</strong> R = <strong>TEACHER</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "TEACHER correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) A potter makes clay pots on a rotating wheel.<br>(b) We should scribble graffiti on public town walls.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong>. A potter uses a pottery wheel to shape wet clay.<br>(b) <strong>False</strong>. Scribbling on walls defaces public property and spoils the beauty of the town.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) True",
            "marks": "1 M"
          },
          {
            "key": "(b) False with civic reason",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "What makes you feel proud of your town?",
        "ans": "<strong>Summary:</strong><br>• I feel proud of my town because of its kind and helpful people, clean peaceful parks, safe streets, and the sense of belonging and community that brings everyone together.",
        "marks": 2,
        "rubric": [
          {
            "key": "Community, safety, and pride explained",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "Where do you go to borrow books to read quietly?",
        "ans": "<strong>Answer:</strong><br>• You go to a <strong>Library</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Library correct",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrd9",
    "num": 9,
    "unit": "Unit 4: The Earth and Us",
    "title": "Out in the Garden",
    "subtitle": "Outdoor Play, Ball Games, Nature Care, Seasons & Sunshine",
    "concepts": [
      "Poem recitation on active garden play: bouncing, throwing, catching, and rolling a ball.",
      "Observing natural garden life: blooming flowers, green grass, buzzing bees, and fluttering butterflies.",
      "The value of outdoor active exercise vs screen time.",
      "Nurturing plants by regular watering and protecting garden greenery."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><circle cx=\"90\" cy=\"55\" r=\"22\" fill=\"#ef4444\"/><text x=\"90\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Bounce</text><circle cx=\"190\" cy=\"55\" r=\"22\" fill=\"#3b82f6\"/><text x=\"190\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Throw</text><circle cx=\"290\" cy=\"55\" r=\"22\" fill=\"#10b981\"/><text x=\"290\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Catch</text><circle cx=\"390\" cy=\"55\" r=\"22\" fill=\"#f59e0b\"/><text x=\"390\" y=\"60\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Roll</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Out in the Garden Each Fine Day • Active Play in Nature</text></svg>",
    "cbq": {
      "title": "Class 2 Springtime Garden Activity",
      "text": "On a bright sunny afternoon, Rohan and Priya took a red rubber ball to the school herbal garden. Rohan bounced the ball on the paved garden path, and Priya caught it with both hands. Nearby, worker honeybees buzzed around yellow marigold blossoms, and green grasshoppers hopped on soft dew-covered grass.",
      "question": "Which ball actions did Rohan and Priya perform? Which insects were observed in the garden? Why is playing in the garden refreshing?",
      "answer": "1. <strong>Ball actions:</strong> <strong>Bouncing</strong> and <strong>catching</strong>.<br>2. <strong>Insects observed:</strong> <strong>Honeybees</strong> (drinking nectar from marigolds) and <strong>grasshoppers</strong>.<br>3. <strong>Refreshment:</strong> Playing in the open garden provides fresh oxygen, warm sunlight (Vitamin D), physical exercise, and connects children directly with the peace and beauty of nature.",
      "rubric": "1 M for ball actions + 1 M for insects observed + 1 M for health & nature benefits"
    },
    "questions": [
      {
        "category": "Poem Comprehension • Ball Actions",
        "q": "What four actions with a ball are mentioned in the poem 'Out in the Garden'?",
        "ans": "<strong>Answer:</strong><br>1. <strong>Bounce</strong> the ball<br>2. <strong>Throw</strong> the ball<br>3. <strong>Catch</strong> the ball<br>4. <strong>Roll</strong> the ball.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 actions named (bounce, throw, catch, roll)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Poem Comprehension • Weather",
        "q": "On what kind of day do children like to go out in the garden to play?",
        "ans": "<strong>Answer:</strong><br>• Children like to go out in the garden on <strong>each fine, sunny day</strong> when the sky is clear and the weather is pleasant.",
        "marks": 1,
        "rubric": [
          {
            "key": "Fine/sunny day identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Rhyming Pairs in the Poem",
        "q": "Find words that rhyme with:<br>(a) Day — _______<br>(b) Ball — _______<br>(c) Round — _______",
        "ans": "<strong>Answers:</strong><br>(a) Day — <strong>Play / Say / May</strong><br>(b) Ball — <strong>All / Fall / Wall</strong><br>(c) Round — <strong>Ground / Sound / Found</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Play",
            "marks": "1 M"
          },
          {
            "key": "(b) Fall/Wall",
            "marks": "1 M"
          },
          {
            "key": "(c) Ground",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Action Verbs • Movement Words",
        "q": "Fill in with [bounce, catch, roll]:<br>(a) Can you _______ the high flying ball?<br>(b) Watch the rubber ball _______ up and down.<br>(c) _______ the marble across the smooth floor.",
        "ans": "<strong>Answers:</strong><br>(a) Can you <strong>catch</strong> the high flying ball?<br>(b) Watch the rubber ball <strong>bounce</strong> up and down.<br>(c) <strong>Roll</strong> the marble across the smooth floor.",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) catch",
            "marks": "1 M"
          },
          {
            "key": "(b) bounce",
            "marks": "1 M"
          },
          {
            "key": "(c) Roll",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Nature Observation • Garden Creatures",
        "q": "Name two friendly creatures you can see visiting flowers in a garden.",
        "ans": "<strong>Answer:</strong><br>1. Colorful <strong>Butterflies</strong> fluttering from petal to petal.<br>2. Busy <strong>Honeybees</strong> collecting sweet nectar.",
        "marks": 2,
        "rubric": [
          {
            "key": "Butterflies named",
            "marks": "1 M"
          },
          {
            "key": "Honeybees named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Plant Care • Green Garden",
        "q": "How can children help take care of their school garden?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. Water the plants regularly using a watering can in the morning or evening.<br>2. Never pluck flowers or step on delicate young plant saplings.",
        "marks": 2,
        "rubric": [
          {
            "key": "Regular watering",
            "marks": "1 M"
          },
          {
            "key": "Not plucking flowers/stepping on plants",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites • Action Words",
        "q": "Write the opposites of:<br>(a) Throw × _______<br>(b) Up × _______<br>(c) Fine × _______",
        "ans": "<strong>Answers:</strong><br>(a) Throw × <strong>Catch</strong><br>(b) Up × <strong>Down</strong><br>(c) Fine × <strong>Cloudy / Stormy / Bad</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Catch",
            "marks": "1 M"
          },
          {
            "key": "(b) Down",
            "marks": "1 M"
          },
          {
            "key": "(c) Stormy/Bad",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Outdoor vs Indoor Play",
        "q": "Why is playing outdoors with friends better than sitting alone staring at mobile screens?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. Outdoor play involves running, throwing, and jumping, which keeps the body fit, agile, and healthy.<br>2. It builds real friendships and team spirit, and prevents eye strain caused by excessive screen exposure.",
        "marks": 2,
        "rubric": [
          {
            "key": "Physical fitness and agility",
            "marks": "1 M"
          },
          {
            "key": "Friendship and eye strain prevention",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Ball Games • Types of Sports",
        "q": "Name three popular outdoor games played using a ball.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Cricket</strong><br>2. <strong>Football (Soccer)</strong><br>3. <strong>Basketball (or Volleyball / Tennis)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Three ball games named correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Describing Words • Garden Adjectives",
        "q": "Choose suitable describing words from the brackets:<br>(a) The grass is _______ (green / salty).<br>(b) The sun is _______ (bright / square).",
        "ans": "<strong>Answers:</strong><br>(a) The grass is <strong>green</strong>.<br>(b) The sun is <strong>bright</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) green",
            "marks": "1 M"
          },
          {
            "key": "(b) bright",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Construction",
        "q": "Make a sentence using the word 'blossom'.",
        "ans": "<strong>Sample Sentence:</strong><br>• Beautiful red roses blossom in our school garden every spring.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct grammatical sentence with 'blossom'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Sensory Words • Touch and Sight",
        "q": "How does garden grass feel when you walk on it barefoot in the morning?",
        "ans": "<strong>Answer:</strong><br>• The grass feels <strong>cool, soft, and wet with morning dew</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Cool, soft, dewy texture described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Seasonal Changes • Flowers",
        "q": "In which season do the most colorful flowers bloom in Indian gardens?",
        "ans": "<strong>Answer:</strong><br>• Flowers bloom in great abundance during the <strong>Spring season (Basant)</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Spring season identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) A heavy stone bounces higher than a rubber ball.<br>(b) Sunlight and water help garden plants grow healthy.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. A rubber ball is elastic and bounces high, while a heavy stone thuds on the ground without bouncing.<br>(b) <strong>True</strong>. Plants need sunlight, water, and soil to prepare food and grow.",
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
        "q": "What joy does 'Out in the Garden' capture for children?",
        "ans": "<strong>Summary:</strong><br>• The poem captures the pure, carefree delight of childhood play in the open air, where bouncing a ball with friends under the warm sun brings endless laughter and energy.",
        "marks": 2,
        "rubric": [
          {
            "key": "Joy of carefree outdoor play described",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "What tool is used to water garden plants: a hammer, a watering can, or a scissors?",
        "ans": "<strong>Answer:</strong><br>• A <strong>watering can</strong> is used to sprinkle water on garden plants.",
        "marks": 1,
        "rubric": [
          {
            "key": "Watering can identified",
            "marks": "1 M"
          }
        ]
      }
    ]
  }
];

module.exports = { mridangChapters };
