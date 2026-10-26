// scripts/data-c1-maths/mathMagicData.js
// Official NCERT Class 1 Math-Magic Book 1 Complete 100% Dataset (Classic CBSE)

const mathMagicChapters = [
  {
    "id": "mm1",
    "num": 1,
    "unit": "Unit 1: Spatial Sense & Shapes",
    "title": "Shapes and Space",
    "subtitle": "Inside-Outside, Bigger-Smaller, Top-Bottom, Nearer-Farther, Rolling-Sliding",
    "concepts": [
      "Comparing sizes: Bigger vs Smaller, Biggest vs Smallest.",
      "Relative positions: Top vs Bottom, Inside vs Outside, On vs Under.",
      "Movement properties of 3D objects: Rolling vs Sliding."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f1f5f9\" rx=\"10\"/><circle cx=\"80\" cy=\"60\" r=\"30\" fill=\"#3b82f6\"/><text x=\"80\" y=\"65\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Bigger</text><circle cx=\"160\" cy=\"60\" r=\"14\" fill=\"#3b82f6\"/><text x=\"160\" y=\"64\" font-size=\"9\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Smaller</text><line x1=\"220\" y1=\"90\" x2=\"330\" y2=\"40\" stroke=\"#64748b\" stroke-width=\"4\"/><circle cx=\"250\" cy=\"65\" r=\"14\" fill=\"#ef4444\"/><text x=\"250\" y=\"95\" font-size=\"10\" font-weight=\"700\" fill=\"#991b1b\">Rolls</text><rect x=\"300\" y=\"30\" width=\"22\" height=\"22\" fill=\"#10b981\" rx=\"2\"/><text x=\"310\" y=\"20\" font-size=\"10\" font-weight=\"700\" fill=\"#065f46\">Slides</text><text x=\"420\" y=\"50\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">Top &amp; Bottom</text><text x=\"420\" y=\"75\" font-size=\"11\" font-weight=\"700\" fill=\"#475569\">On &amp; Under</text></svg>",
    "cbq": {
      "title": "The Arab and his Camel",
      "text": "On a cold winter night, the Arab was pitching his tent in the desert. The camel stood outside in the cold wind and asked if he could put his head inside the tent. Slowly, the camel stepped inside, and the Arab was pushed outside into the cold.",
      "question": "Who was inside the tent at the start of the story? Who ended up inside the tent at the end?",
      "answer": "1. At the start: The Arab was inside the tent and the camel was outside.<br>2. At the end: The camel was inside the tent and the Arab was outside.",
      "rubric": "1.5 M for start state + 1.5 M for end state"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Inside & Outside",
        "q": "In the story 'The Arab and his Camel', why did the camel want to come inside the tent?",
        "ans": "<strong>Answer:</strong><br>The camel wanted to come inside the tent because it was <strong>very cold outside</strong> in the desert at night.",
        "marks": 2,
        "rubric": [
          {
            "key": "Mention of cold outside",
            "marks": "1 M"
          },
          {
            "key": "Contrast between inside and outside",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Size Comparison • Bigger and Smaller",
        "q": "Tick (or name) the smaller animal: Elephant or Goat?",
        "ans": "<strong>Answer:</strong><br>The <strong>Goat</strong> is smaller. The Elephant is much bigger.",
        "marks": 1,
        "rubric": [
          {
            "key": "Goat correctly identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Extreme Comparison • Biggest and Smallest",
        "q": "Look at three fruits: Watermelon, Mango, and Cherry. Name the biggest fruit and the smallest fruit.",
        "ans": "<strong>Answer:</strong><br>• <strong>Biggest fruit:</strong> Watermelon.<br>• <strong>Smallest fruit:</strong> Cherry.<br>Mango is between the watermelon and cherry in size.",
        "marks": 2,
        "rubric": [
          {
            "key": "Watermelon is biggest",
            "marks": "1 M"
          },
          {
            "key": "Cherry is smallest",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spatial Positions • Top and Bottom",
        "q": "Three children are on a playground slide: Sonu is sitting at the top ready to slide down, and Monu is standing at the bottom on the grass. Who is at the top?",
        "ans": "<strong>Answer:</strong><br><strong>Sonu</strong> is at the top of the slide.",
        "marks": 1,
        "rubric": [
          {
            "key": "Sonu identified at the top",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Distance • Nearer and Farther",
        "q": "A bird is flying in the sky. House A is right below the bird, and House B is far down the road. Which house is nearer to the bird?",
        "ans": "<strong>Answer:</strong><br><strong>House A</strong> is nearer to the bird.",
        "marks": 2,
        "rubric": [
          {
            "key": "House A is nearer",
            "marks": "1 M"
          },
          {
            "key": "Distance reasoning",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Physical Properties • Rolling and Sliding",
        "q": "Which of the following will roll: A battery cell, a book, an onion, a shoebox?",
        "ans": "<strong>Answer:</strong><br>• <strong>Will Roll:</strong> Battery cell (on its round side) and Onion.<br>• <strong>Will Slide:</strong> Book and Shoebox (because they have flat faces).",
        "marks": 2,
        "rubric": [
          {
            "key": "Battery cell and onion roll",
            "marks": "1 M"
          },
          {
            "key": "Book and shoebox slide",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm2",
    "num": 2,
    "unit": "Unit 2: Numbers from One to Nine",
    "title": "Numbers from One to Nine",
    "subtitle": "One-to-One Matching, Counting, Writing Numerals & Concept of Zero",
    "concepts": [
      "Counting items up to 9 with one-to-one matching (As many as).",
      "Writing numbers 1 to 9 with number words.",
      "Understanding more, less, and equal collections.",
      "Introduction to Zero (शून्य) as nothing left."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"50\" cy=\"50\" r=\"14\" fill=\"#2563eb\"/><circle cx=\"90\" cy=\"50\" r=\"14\" fill=\"#2563eb\"/><circle cx=\"130\" cy=\"50\" r=\"14\" fill=\"#2563eb\"/><circle cx=\"170\" cy=\"50\" r=\"14\" fill=\"#2563eb\"/><circle cx=\"210\" cy=\"50\" r=\"14\" fill=\"#2563eb\"/><text x=\"130\" y=\"90\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">5 Blue Dots</text><circle cx=\"310\" cy=\"50\" r=\"14\" fill=\"#10b981\"/><circle cx=\"350\" cy=\"50\" r=\"14\" fill=\"#10b981\"/><circle cx=\"390\" cy=\"50\" r=\"14\" fill=\"#10b981\"/><circle cx=\"430\" cy=\"50\" r=\"14\" fill=\"#10b981\"/><circle cx=\"470\" cy=\"50\" r=\"14\" fill=\"#10b981\"/><text x=\"390\" y=\"90\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">5 Green Dots (As Many As)</text></svg>",
    "cbq": {
      "title": "Five Little Monkeys Rhyme",
      "text": "Five little monkeys were jumping on the bed. One fell off and bumped his head. Mamma called the doctor and the doctor said, 'No more monkeys jumping on the bed!'",
      "question": "How many monkeys were jumping at first? How many monkeys were left jumping on the bed after one fell off?",
      "answer": "1. At first, there were <strong>5 monkeys</strong> jumping.<br>2. After 1 fell off: 5 - 1 = <strong>4 monkeys</strong> were left jumping on the bed.",
      "rubric": "1 M for 5 monkeys at first + 1 M for 4 monkeys left"
    },
    "questions": [
      {
        "category": "Matching • As Many As",
        "q": "There are 5 cats and 5 bowls of milk. Can each cat have its own bowl of milk? What is this called?",
        "ans": "<strong>Answer:</strong><br>• Yes, each cat gets exactly one bowl of milk.<br>• This is called <strong>one-to-one matching</strong> (or 'as many cats as bowls').",
        "marks": 2,
        "rubric": [
          {
            "key": "Yes, each cat gets a bowl",
            "marks": "1 M"
          },
          {
            "key": "One-to-one matching explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Counting • Group Creation",
        "q": "Make a group of 4 bottles from a row of 7 bottles. How many bottles will be left out?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total bottles = 7<br>• Group selected = 4 bottles<br>• Bottles left out = 7 - 4 = <strong>3 bottles</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "7 - 4 = 3 bottles",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Comparison • More or Less",
        "q": "Collection A has 8 balloons. Collection B has 6 balloons. Tick the collection which has more.",
        "ans": "<strong>Answer:</strong><br><strong>Collection A</strong> has more balloons because 8 is greater than 6 (8 > 6).",
        "marks": 2,
        "rubric": [
          {
            "key": "Collection A has more",
            "marks": "1 M"
          },
          {
            "key": "8 > 6 statement",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Names • 1 to 9",
        "q": "Match each numeral with its correct spelling: 3, 6, 8, 9 with Nine, Eight, Three, Six.",
        "ans": "<strong>Answer:</strong><br>• 3 = Three<br>• 6 = Six<br>• 8 = Eight<br>• 9 = Nine.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 correctly matched",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Zero Concept • Empty Branch",
        "q": "There were 4 birds sitting on a tree branch. All 4 flew away one by one. How many birds are on the branch now?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Starting birds = 4<br>• Birds that flew away = 4<br>• Remaining birds = 4 - 4 = <strong>0 (Zero)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 - 4 = 0",
            "marks": "1 M"
          },
          {
            "key": "Zero clearly identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Order • Between",
        "q": "What numbers come between 4 and 8?",
        "ans": "<strong>Answer:</strong><br>The numbers between 4 and 8 are <strong>5, 6, and 7</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5, 6, 7 listed correctly",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm3",
    "num": 3,
    "unit": "Unit 3: Addition within 10",
    "title": "Addition",
    "subtitle": "One More, How Many Altogether, Addition Facts up to 9",
    "concepts": [
      "Concept of addition as 'putting together' and 'one more'.",
      "Using the plus (+) and equal (=) signs.",
      "Solving horizontal and vertical addition problems."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fff1f2\" rx=\"10\"/><circle cx=\"60\" cy=\"55\" r=\"16\" fill=\"#e11d48\"/><circle cx=\"100\" cy=\"55\" r=\"16\" fill=\"#e11d48\"/><circle cx=\"140\" cy=\"55\" r=\"16\" fill=\"#e11d48\"/><text x=\"100\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#9f1239\" text-anchor=\"middle\">3 Strawberries</text><text x=\"190\" y=\"60\" font-size=\"24\" font-weight=\"800\" fill=\"#e11d48\">+</text><circle cx=\"240\" cy=\"55\" r=\"16\" fill=\"#fb7185\"/><circle cx=\"280\" cy=\"55\" r=\"16\" fill=\"#fb7185\"/><text x=\"260\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#9f1239\" text-anchor=\"middle\">2 Strawberries</text><text x=\"330\" y=\"60\" font-size=\"24\" font-weight=\"800\" fill=\"#e11d48\">=</text><rect x=\"370\" y=\"30\" width=\"100\" height=\"50\" fill=\"#be123c\" rx=\"8\"/><text x=\"420\" y=\"62\" font-size=\"20\" font-weight=\"800\" fill=\"#fff\" text-anchor=\"middle\">5</text></svg>",
    "cbq": {
      "title": "One More Parrot Rhyme",
      "text": "Two green parrots flying in the sky, another little parrot joined them as they flew high. Then one more joined to sing and play.",
      "question": "How many parrots were flying after the first one joined? How many parrots were flying when another one joined after that?",
      "answer": "1. 2 parrots + 1 parrot = 3 parrots.<br>2. 3 parrots + 1 more parrot = 4 parrots altogether.",
      "rubric": "1 M for 2+1=3 + 1 M for 3+1=4"
    },
    "questions": [
      {
        "category": "Addition Concept • How Many Altogether",
        "q": "Two cows are grazing in the field. 1 more cow joins them. How many cows are there altogether?",
        "ans": "<strong>Answer:</strong><br>• 2 + 1 = <strong>3 cows</strong> altogether.",
        "marks": 1,
        "rubric": [
          {
            "key": "2 + 1 = 3 cows",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Pairs • Make 6",
        "q": "Write three different addition pairs that equal 6.",
        "ans": "<strong>Answer:</strong><br>• Pair 1: 5 + 1 = 6<br>• Pair 2: 4 + 2 = 6<br>• Pair 3: 3 + 3 = 6 (also 6 + 0 = 6).",
        "marks": 3,
        "rubric": [
          {
            "key": "Three valid pairs provided",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Adding Zero",
        "q": "What is 4 + 0? Explain why adding zero does not change the number.",
        "ans": "<strong>Answer:</strong><br>• 4 + 0 = <strong>4</strong>.<br>• Adding zero means adding nothing to the group, so the original quantity stays exactly the same.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 + 0 = 4",
            "marks": "1 M"
          },
          {
            "key": "Explanation of adding nothing",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Combining Marbles",
        "q": "Rohan has 4 blue marbles and 3 green marbles. How many marbles does Rohan have in total?",
        "ans": "<strong>Calculation:</strong><br>• Blue marbles = 4<br>• Green marbles = 3<br>• Total marbles = 4 + 3 = <strong>7 marbles</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 + 3 statement",
            "marks": "1 M"
          },
          {
            "key": "Answer: 7 marbles",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vertical Addition",
        "q": "Solve vertically:<br>&nbsp;&nbsp;5<br>+ 4<br>---",
        "ans": "<strong>Answer:</strong><br>&nbsp;&nbsp;5<br>+ 4<br>---<br>&nbsp;&nbsp;<strong>9</strong>",
        "marks": 1,
        "rubric": [
          {
            "key": "Correct sum: 9",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Visual Problem • Ants on a Log",
        "q": "There are 6 ants marching in a line. 2 more ants join the back of the line. How many ants are in line now?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Existing ants = 6<br>• Joined ants = 2<br>• Total ants = 6 + 2 = <strong>8 ants</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 + 2 = 8 ants",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm4",
    "num": 4,
    "unit": "Unit 3: Subtraction within 10",
    "title": "Subtraction",
    "subtitle": "Take Away, How Many Left, Subtraction Facts up to 9",
    "concepts": [
      "Concept of subtraction as 'taking away' or 'separating'.",
      "Using the minus sign (-) and equal sign (=).",
      "Finding differences and remaining items in everyday situations."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"10\"/><circle cx=\"60\" cy=\"55\" r=\"16\" fill=\"#eab308\"/><circle cx=\"100\" cy=\"55\" r=\"16\" fill=\"#eab308\"/><circle cx=\"140\" cy=\"55\" r=\"16\" fill=\"#eab308\"/><circle cx=\"180\" cy=\"55\" r=\"16\" fill=\"#eab308\"/><circle cx=\"220\" cy=\"55\" r=\"16\" fill=\"#eab308\"/><text x=\"140\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#a16207\" text-anchor=\"middle\">5 Lemons</text><text x=\"270\" y=\"60\" font-size=\"24\" font-weight=\"800\" fill=\"#ca8a04\">-</text><circle cx=\"320\" cy=\"55\" r=\"16\" stroke=\"#ca8a04\" stroke-width=\"2\" stroke-dasharray=\"4\" fill=\"none\"/><circle cx=\"360\" cy=\"55\" r=\"16\" stroke=\"#ca8a04\" stroke-width=\"2\" stroke-dasharray=\"4\" fill=\"none\"/><text x=\"340\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#a16207\" text-anchor=\"middle\">Take Away 2</text><text x=\"410\" y=\"60\" font-size=\"24\" font-weight=\"800\" fill=\"#ca8a04\">=</text><text x=\"455\" y=\"68\" font-size=\"24\" font-weight=\"800\" fill=\"#854d0e\">3</text></svg>",
    "cbq": {
      "title": "Leaves on a Branch",
      "text": "A twig had 6 fresh green leaves. In the autumn breeze, 2 leaves fell off onto the garden grass.",
      "question": "How many leaves remained attached to the twig? Write the subtraction fact.",
      "answer": "1. Leaves remaining = 6 - 2 = <strong>4 leaves</strong>.<br>2. Subtraction fact: <strong>6 - 2 = 4</strong>.",
      "rubric": "1 M for 4 leaves remaining + 1 M for fact 6 - 2 = 4"
    },
    "questions": [
      {
        "category": "Subtraction Concept • Take Away",
        "q": "There were 5 cups on the dining table. 2 cups broke. How many cups are left?",
        "ans": "<strong>Answer:</strong><br>• Total cups = 5<br>• Cups broken = 2<br>• Cups left = 5 - 2 = <strong>3 cups</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 - 2 = 3 cups",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Subtracting All",
        "q": "A boy had 3 balloons. All 3 balloons burst with a pop. How many balloons are left with him?",
        "ans": "<strong>Answer:</strong><br>• 3 - 3 = <strong>0 balloons</strong>.<br>When you take away all items from a group, zero items are left.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 - 3 = 0",
            "marks": "1 M"
          },
          {
            "key": "Explanation of zero remainder",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vertical Subtraction",
        "q": "Solve vertically:<br>&nbsp;&nbsp;8<br>- 3<br>---",
        "ans": "<strong>Answer:</strong><br>&nbsp;&nbsp;8<br>- 3<br>---<br>&nbsp;&nbsp;<strong>5</strong>",
        "marks": 1,
        "rubric": [
          {
            "key": "Answer: 5",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Missing Subtrahend",
        "q": "Fill in the blank: 7 - __ = 2.",
        "ans": "<strong>Answer:</strong><br>7 - <strong>5</strong> = 2 (since 7 - 2 = 5).",
        "marks": 1,
        "rubric": [
          {
            "key": "5",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Frogs on a Rock",
        "q": "9 frogs were sitting on a river rock. 4 frogs jumped into the water. How many frogs are still sitting on the rock?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Frogs on rock = 9<br>• Frogs jumped in = 4<br>• Frogs remaining = 9 - 4 = <strong>5 frogs</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "9 - 4 statement",
            "marks": "1 M"
          },
          {
            "key": "Answer: 5 frogs",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparison • Difference",
        "q": "Tina has 7 pencils and Meenu has 4 pencils. How many more pencils does Tina have than Meenu?",
        "ans": "<strong>Calculation:</strong><br>• Tina = 7 pencils<br>• Meenu = 4 pencils<br>• Difference = 7 - 4 = <strong>3 pencils</strong>.<br>Tina has 3 more pencils.",
        "marks": 2,
        "rubric": [
          {
            "key": "Difference 7 - 4 = 3",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm5",
    "num": 5,
    "unit": "Unit 4: Numbers from Ten to Twenty",
    "title": "Numbers from Ten to Twenty",
    "subtitle": "Make a Group of 10, Tens and Ones, Addition & Subtraction up to 20",
    "concepts": [
      "Grouping 10 items into 1 Ten and understanding numbers 11 to 20.",
      "Writing numbers in tens and ones format.",
      "Adding and subtracting single-digit numbers to/from teen numbers."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f0fdfa\" rx=\"10\"/><rect x=\"50\" y=\"30\" width=\"120\" height=\"60\" fill=\"#0d9488\" rx=\"6\"/><text x=\"110\" y=\"65\" font-size=\"13\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Group of 10</text><text x=\"200\" y=\"65\" font-size=\"24\" font-weight=\"800\" fill=\"#0d9488\">+</text><circle cx=\"250\" cy=\"60\" r=\"12\" fill=\"#14b8a6\"/><circle cx=\"280\" cy=\"60\" r=\"12\" fill=\"#14b8a6\"/><circle cx=\"310\" cy=\"60\" r=\"12\" fill=\"#14b8a6\"/><text x=\"280\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#0f766e\" text-anchor=\"middle\">3 Ones</text><text x=\"355\" y=\"65\" font-size=\"24\" font-weight=\"800\" fill=\"#0d9488\">=</text><text x=\"420\" y=\"70\" font-size=\"26\" font-weight=\"800\" fill=\"#115e59\">13</text></svg>",
    "cbq": {
      "title": "Counting Bananas for the Zoo Monkeys",
      "text": "The zookeeper has 17 bananas in a crate. He ties 10 bananas in a bunch for the mother monkey and gives the remaining loose bananas to the baby monkeys.",
      "question": "How many bunches of 10 does the keeper make? How many loose bananas do the baby monkeys get?",
      "answer": "1. 1 bunch of 10 bananas.<br>2. 7 loose bananas (ones) for the baby monkeys (17 = 1 Ten + 7 Ones).",
      "rubric": "1.5 M for 1 bunch of 10 + 1.5 M for 7 loose bananas"
    },
    "questions": [
      {
        "category": "Tens and Ones • Decomposition",
        "q": "Write the tens and ones for the following numbers:<br>(a) 15<br>(b) 19",
        "ans": "<strong>Answer:</strong><br>(a) 15 = <strong>1 Ten and 5 Ones</strong> (10 + 5)<br>(b) 19 = <strong>1 Ten and 9 Ones</strong> (10 + 9)",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) 1 Ten, 5 Ones",
            "marks": "1 M"
          },
          {
            "key": "(b) 1 Ten, 9 Ones",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Addition within 20",
        "q": "Solve: 12 + 5.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 12 + 5 = 10 + 2 + 5 = 10 + 7 = <strong>17</strong>.<br>Or count on from 12: 13, 14, 15, 16, 17.",
        "marks": 2,
        "rubric": [
          {
            "key": "Showing method",
            "marks": "1 M"
          },
          {
            "key": "Answer: 17",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Subtraction within 20",
        "q": "Solve: 18 - 6.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 8 ones - 6 ones = 2 ones.<br>• 1 ten + 2 ones = <strong>12</strong>.<br>18 - 6 = 12.",
        "marks": 2,
        "rubric": [
          {
            "key": "Step shown",
            "marks": "1 M"
          },
          {
            "key": "Answer: 12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparison • Circle the Greater Number",
        "q": "Circle the greater number in each pair:<br>(a) 11 or 14<br>(b) 16 or 13",
        "ans": "<strong>Answer:</strong><br>(a) In (11, 14), <strong>14</strong> is greater.<br>(b) In (16, 13), <strong>16</strong> is greater.",
        "marks": 2,
        "rubric": [
          {
            "key": "14",
            "marks": "1 M"
          },
          {
            "key": "16",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Story Sum • Beads on Thread",
        "q": "Kavita had 11 wooden beads. Her aunt gave her 4 more beads. How many beads does Kavita have altogether?",
        "ans": "<strong>Calculation:</strong><br>• Initial beads = 11<br>• Added beads = 4<br>• Total beads = 11 + 4 = <strong>15 beads</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "11 + 4 = 15 beads",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Story Sum • Bird Flight",
        "q": "15 birds were resting on a wire. 5 birds flew away. How many birds are still on the wire?",
        "ans": "<strong>Calculation:</strong><br>• Total birds = 15<br>• Birds flew away = 5<br>• Birds left = 15 - 5 = <strong>10 birds</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "15 - 5 = 10 birds",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm6",
    "num": 6,
    "unit": "Unit 5: Time & Routine",
    "title": "Time",
    "subtitle": "Sampurna's Day: Chronological Order, Duration of Activities",
    "concepts": [
      "Sequencing daily life events from morning to evening.",
      "Understanding activities that take more time vs less time.",
      "Connecting daily activities with appropriate times of day."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fef2f2\" rx=\"10\"/><rect x=\"40\" y=\"30\" width=\"90\" height=\"55\" fill=\"#fca5a5\" rx=\"6\"/><text x=\"85\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">1. Wake Up</text><text x=\"85\" y=\"70\" font-size=\"10\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">&amp; Brush</text><text x=\"145\" y=\"60\" font-size=\"16\" font-weight=\"800\" fill=\"#ef4444\">→</text><rect x=\"165\" y=\"30\" width=\"90\" height=\"55\" fill=\"#fca5a5\" rx=\"6\"/><text x=\"210\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">2. Breakfast</text><text x=\"210\" y=\"70\" font-size=\"10\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">&amp; School</text><text x=\"270\" y=\"60\" font-size=\"16\" font-weight=\"800\" fill=\"#ef4444\">→</text><rect x=\"290\" y=\"30\" width=\"90\" height=\"55\" fill=\"#fca5a5\" rx=\"6\"/><text x=\"335\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">3. Study</text><text x=\"335\" y=\"70\" font-size=\"10\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">&amp; Play</text><text x=\"395\" y=\"60\" font-size=\"16\" font-weight=\"800\" fill=\"#ef4444\">→</text><rect x=\"415\" y=\"30\" width=\"70\" height=\"55\" fill=\"#fca5a5\" rx=\"6\"/><text x=\"450\" y=\"62\" font-size=\"10\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">4. Sleep</text></svg>",
    "cbq": {
      "title": "Baking a Roti Routine",
      "text": "Mother is making rotis for dinner. She needs to: knead the dough in a bowl, light the stove, roll the dough into flat circles, and roast the roti on the tawa.",
      "question": "Which step must Mother do first? What happens if she tries to roll before kneading?",
      "answer": "1. Mother must <strong>knead the dough</strong> first.<br>2. If she does not knead, the dry flour cannot be rolled into flat circles. Cooking requires a fixed sequence of steps over time.",
      "rubric": "1.5 M for kneading first + 1.5 M for logical sequencing reasoning"
    },
    "questions": [
      {
        "category": "Sequencing • Daily Routine",
        "q": "What do you do first in the morning: Put on school uniform or take a bath?",
        "ans": "<strong>Answer:</strong><br>You <strong>take a bath first</strong>, and then you put on your clean school uniform.",
        "marks": 1,
        "rubric": [
          {
            "key": "Take bath first",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Time Duration • Tick the Longer Activity",
        "q": "Which takes more time: (a) Walking to school, or (b) Travelling to school in a school bus?",
        "ans": "<strong>Answer:</strong><br>• <strong>Walking to school takes more time</strong> because walking speed is slow.<br>A bus travels much faster and takes less time.",
        "marks": 2,
        "rubric": [
          {
            "key": "Walking takes more time",
            "marks": "1 M"
          },
          {
            "key": "Explanation with speed",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Daily Life • Water Filling",
        "q": "Which bucket takes longer to fill from a tap: A 5-litre bucket or a 15-litre bucket?",
        "ans": "<strong>Answer:</strong><br>The <strong>15-litre bucket</strong> takes longer to fill because it holds much more water.",
        "marks": 2,
        "rubric": [
          {
            "key": "15-litre bucket",
            "marks": "1 M"
          },
          {
            "key": "Greater capacity explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Day and Night Activities",
        "q": "Name two activities you only do at night.",
        "ans": "<strong>Answer:</strong><br>1. Looking at the moon and stars.<br>2. Sleeping in bed under the blanket.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two valid night activities listed",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Meal Times",
        "q": "What are the three main meals of the day, and when are they eaten?",
        "ans": "<strong>Answer:</strong><br>1. <strong>Breakfast:</strong> Eaten in the morning.<br>2. <strong>Lunch:</strong> Eaten in the afternoon.<br>3. <strong>Dinner:</strong> Eaten at night.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 meals with times",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Quick Action",
        "q": "Name an action that takes less than one second.",
        "ans": "<strong>Answer:</strong><br><strong>Snapping your fingers</strong> (or blinking your eye, or clapping once).",
        "marks": 1,
        "rubric": [
          {
            "key": "Valid instantaneous action",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm7",
    "num": 7,
    "unit": "Unit 5: Measurement of Length & Weight",
    "title": "Measurement",
    "subtitle": "Longer-Shorter, Longest-Shortest, Taller-Shorter, Heavier-Lighter",
    "concepts": [
      "Comparing lengths: Longer and Shorter, Longest and Shortest.",
      "Comparing heights: Taller and Shorter, Tallest and Shortest.",
      "Comparing mass/weight: Heavier and Lighter, Heaviest and Lightest.",
      "Measuring using handspans and footpaces."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f8fafc\" rx=\"10\"/><line x1=\"40\" y1=\"40\" x2=\"220\" y2=\"40\" stroke=\"#0284c7\" stroke-width=\"8\" stroke-linecap=\"round\"/><text x=\"130\" y=\"25\" font-size=\"11\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Longer Ribbon</text><line x1=\"40\" y1=\"70\" x2=\"130\" y2=\"70\" stroke=\"#38bdf8\" stroke-width=\"8\" stroke-linecap=\"round\"/><text x=\"85\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Shorter Ribbon</text><rect x=\"300\" y=\"20\" width=\"18\" height=\"80\" fill=\"#16a34a\" rx=\"2\"/><rect x=\"340\" y=\"50\" width=\"18\" height=\"50\" fill=\"#4ade80\" rx=\"2\"/><text x=\"309\" y=\"112\" font-size=\"10\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">Taller</text><text x=\"349\" y=\"112\" font-size=\"10\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">Shorter</text><circle cx=\"430\" cy=\"50\" r=\"24\" fill=\"#f59e0b\"/><circle cx=\"475\" cy=\"55\" r=\"12\" fill=\"#fbbf24\"/><text x=\"430\" y=\"90\" font-size=\"10\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Heavier</text><text x=\"475\" y=\"90\" font-size=\"10\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Lighter</text></svg>",
    "cbq": {
      "title": "The Playground Carpet",
      "text": "The teacher wants to lay a runner carpet in the corridor. She asks Anu to measure the corridor with her footsteps. Anu counts 30 footsteps. The teacher then walks the corridor and counts 18 footsteps.",
      "question": "Why did Anu count 30 footsteps while the teacher counted only 18 footsteps?",
      "answer": "1. Anu is a child, so her stride (footstep) is smaller.<br>2. The teacher is an adult with longer legs and bigger strides. A longer step requires fewer footsteps to cover the same corridor distance.",
      "rubric": "1.5 M for child's stride is smaller + 1.5 M for adult stride is longer"
    },
    "questions": [
      {
        "category": "Length • Longer or Shorter",
        "q": "Look at a ladder and a stool. Which one is taller?",
        "ans": "<strong>Answer:</strong><br>The <strong>ladder</strong> is taller than the stool.",
        "marks": 1,
        "rubric": [
          {
            "key": "Ladder is taller",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Extreme Comparison • Longest",
        "q": "Among a pencil, an injection needle, and a cricket bat, which is the longest and which is the shortest?",
        "ans": "<strong>Answer:</strong><br>• <strong>Longest:</strong> Cricket bat.<br>• <strong>Shortest:</strong> Injection needle.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cricket bat is longest",
            "marks": "1 M"
          },
          {
            "key": "Injection needle is shortest",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Weight • Heavier and Lighter",
        "q": "Which object is lighter: A feather or an apple?",
        "ans": "<strong>Answer:</strong><br>The <strong>feather</strong> is lighter. The apple is much heavier than the feather.",
        "marks": 1,
        "rubric": [
          {
            "key": "Feather is lighter",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Heaviest in a Group",
        "q": "Which is the heaviest among: A pumpkin, a tomato, and a lemon?",
        "ans": "<strong>Answer:</strong><br>The <strong>pumpkin</strong> is the heaviest.",
        "marks": 1,
        "rubric": [
          {
            "key": "Pumpkin identified as heaviest",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Non-standard Units • Span",
        "q": "Measure your pencil with your fingers. Approximately how many finger-widths long is a new pencil?",
        "ans": "<strong>Answer:</strong><br>A standard new pencil is approximately <strong>10 to 12 finger-widths</strong> long.",
        "marks": 2,
        "rubric": [
          {
            "key": "Realistic estimate between 8-15 finger widths",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Seesaw Science",
        "q": "When an elephant and an ant sit on opposite ends of a seesaw, which end goes down?",
        "ans": "<strong>Answer:</strong><br>The <strong>elephant's end</strong> goes down to the ground because the elephant is immensely heavier than the ant.",
        "marks": 2,
        "rubric": [
          {
            "key": "Elephant's side goes down",
            "marks": "1 M"
          },
          {
            "key": "Heavier side moves down explanation",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm8",
    "num": 8,
    "unit": "Unit 6: Numbers from Twenty-one to Fifty",
    "title": "Numbers from Twenty-one to Fifty",
    "subtitle": "Tens and Ones, Number Lines, Writing Missing Numbers 21 to 50",
    "concepts": [
      "Counting bundles of 10s and loose sticks up to 50.",
      "Writing numerals and number names from 21 to 50.",
      "Identifying missing numbers in sequences up to 50."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><rect x=\"50\" y=\"30\" width=\"50\" height=\"60\" fill=\"#3b82f6\" rx=\"6\"/><text x=\"75\" y=\"65\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">10</text><rect x=\"115\" y=\"30\" width=\"50\" height=\"60\" fill=\"#3b82f6\" rx=\"6\"/><text x=\"140\" y=\"65\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">10</text><text x=\"110\" y=\"105\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">2 Tens = 20</text><circle cx=\"210\" cy=\"45\" r=\"7\" fill=\"#f97316\"/><circle cx=\"210\" cy=\"75\" r=\"7\" fill=\"#f97316\"/><circle cx=\"230\" cy=\"60\" r=\"7\" fill=\"#f97316\"/><text x=\"220\" y=\"105\" font-size=\"11\" font-weight=\"700\" fill=\"#c2410c\" text-anchor=\"middle\">3 Ones = 3</text><text x=\"270\" y=\"65\" font-size=\"20\" font-weight=\"800\" fill=\"#0f172a\">=</text><rect x=\"310\" y=\"30\" width=\"90\" height=\"60\" fill=\"#1d4ed8\" rx=\"8\"/><text x=\"355\" y=\"68\" font-size=\"24\" font-weight=\"800\" fill=\"#fff\" text-anchor=\"middle\">23</text><text x=\"355\" y=\"105\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Twenty-three</text></svg>",
    "cbq": {
      "title": "Counting Matchstick Bundles",
      "text": "Deepak has 3 bundles of 10 matchsticks and 7 loose matchsticks. His friend gives him 3 more loose matchsticks.",
      "question": "How many total matchsticks did Deepak have at first? How many bundles can he make after receiving 3 more loose matchsticks?",
      "answer": "1. At first: 3 tens + 7 ones = <strong>37 matchsticks</strong>.<br>2. 7 loose + 3 loose = 10 loose matchsticks, which makes 1 new bundle.<br>3 + 1 = <strong>4 full bundles of 10 (40 matchsticks)</strong>.",
      "rubric": "1.5 M for 37 matchsticks + 1.5 M for 4 bundles (40)"
    },
    "questions": [
      {
        "category": "Tens and Ones • Identification",
        "q": "What number is formed by 4 Tens and 5 Ones?",
        "ans": "<strong>Answer:</strong><br>• 4 Tens = 40<br>• 5 Ones = 5<br>• 40 + 5 = <strong>45 (Forty-five)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "40 + 5",
            "marks": "1 M"
          },
          {
            "key": "45",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Missing Numbers • 21 to 30",
        "q": "Fill in the missing numbers: 21, 22, __, 24, 25, __, 27, 28, __, 30.",
        "ans": "<strong>Answer:</strong><br>The missing numbers are <strong>23</strong>, <strong>26</strong>, and <strong>29</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "23, 26, 29 identified",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Number Names • 30 to 50",
        "q": "Write the number name for:<br>(a) 32<br>(b) 48",
        "ans": "<strong>Answer:</strong><br>(a) 32 = <strong>Thirty-two</strong><br>(b) 48 = <strong>Forty-eight</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Thirty-two",
            "marks": "1 M"
          },
          {
            "key": "Forty-eight",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Place Value Table",
        "q": "In the number 42, which digit is in the tens place and which is in the ones place?",
        "ans": "<strong>Answer:</strong><br>• Tens place digit = <strong>4</strong> (value = 40)<br>• Ones place digit = <strong>2</strong> (value = 2).",
        "marks": 2,
        "rubric": [
          {
            "key": "Tens = 4",
            "marks": "1 M"
          },
          {
            "key": "Ones = 2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Before and After • 21 to 50",
        "q": "Write the number just before 40 and the number just after 40.",
        "ans": "<strong>Answer:</strong><br>• Number just before 40 is <strong>39</strong>.<br>• Number just after 40 is <strong>41</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Before: 39",
            "marks": "1 M"
          },
          {
            "key": "After: 41",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Group of 10",
        "q": "How many tens are there in the number 50?",
        "ans": "<strong>Answer:</strong><br>There are <strong>5 tens</strong> in 50 (5 × 10 = 50).",
        "marks": 1,
        "rubric": [
          {
            "key": "5 tens",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm9",
    "num": 9,
    "unit": "Unit 7: Data Handling",
    "title": "Data Handling",
    "subtitle": "Counting Shapes, Picture Charts, Frequency & Name Length Analysis",
    "concepts": [
      "Counting different geometric shapes within a composite drawing.",
      "Comparing which shape occurs the most and the least.",
      "Counting letters in names and identifying most common letters."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fdf2f8\" rx=\"10\"/><polygon points=\"80,25 50,75 110,75\" fill=\"#ec4899\"/><text x=\"80\" y=\"100\" font-size=\"11\" font-weight=\"700\" fill=\"#9d174d\" text-anchor=\"middle\">Triangles: 8</text><circle cx=\"200\" cy=\"50\" r=\"25\" fill=\"#3b82f6\"/><text x=\"200\" y=\"100\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Circles: 5</text><rect x=\"310\" y=\"30\" width=\"40\" height=\"40\" fill=\"#10b981\" rx=\"4\"/><text x=\"330\" y=\"100\" font-size=\"11\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Squares: 3</text><text x=\"430\" y=\"55\" font-size=\"12\" font-weight=\"800\" fill=\"#831843\">Most: Triangle (8)</text><text x=\"430\" y=\"80\" font-size=\"12\" font-weight=\"800\" fill=\"#831843\">Least: Square (3)</text></svg>",
    "cbq": {
      "title": "Scenery Shape Count",
      "text": "Children drew a landscape featuring a house, mountains, and the sun. The drawing contains 12 Triangles (mountains and roof), 4 Circles (sun and flowers), 6 Squares (windows), and 3 Rectangles (doors).",
      "question": "Which shape appears the most times in the drawing? Which shape appears the least times? How many total shapes were used?",
      "answer": "1. <strong>Most:</strong> Triangles (12 times).<br>2. <strong>Least:</strong> Rectangles (3 times).<br>3. <strong>Total shapes:</strong> 12 + 4 + 6 + 3 = <strong>25 shapes</strong>.",
      "rubric": "1 M for most + 1 M for least + 1 M for total 25"
    },
    "questions": [
      {
        "category": "Counting Shapes • Picture Reading",
        "q": "Look at the robot drawing. It has 4 circles for joints, 2 rectangles for legs, 1 square for head, and 1 rectangle for body. How many rectangles are there in total?",
        "ans": "<strong>Answer:</strong><br>• Legs = 2 rectangles<br>• Body = 1 rectangle<br>• Total rectangles = 2 + 1 = <strong>3 rectangles</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Legs: 2, Body: 1",
            "marks": "1 M"
          },
          {
            "key": "Total 3 rectangles",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Letter Count in Names",
        "q": "Count the number of letters in each friend's name:<br>(a) RAM<br>(b) GEETA<br>(c) SUBHASH",
        "ans": "<strong>Answer:</strong><br>(a) RAM = <strong>3 letters</strong><br>(b) GEETA = <strong>5 letters</strong><br>(c) SUBHASH = <strong>7 letters</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "RAM = 3",
            "marks": "1 M"
          },
          {
            "key": "GEETA = 5",
            "marks": "1 M"
          },
          {
            "key": "SUBHASH = 7",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Data Comparison • Highest Frequency",
        "q": "In the names RAM, GEETA, and SUBHASH, which name has the highest number of letters?",
        "ans": "<strong>Answer:</strong><br><strong>SUBHASH</strong> has the highest number of letters (7 letters).",
        "marks": 1,
        "rubric": [
          {
            "key": "Subhash identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Finding Common Letters",
        "q": "How many times does the letter 'A' appear in the names RAM, GEETA, and SUBHASH combined?",
        "ans": "<strong>Counting:</strong><br>• R<strong>A</strong>M → 1 time<br>• GEET<strong>A</strong> → 1 time<br>• SUBH<strong>A</strong>SH → 1 time<br>• Total = 1 + 1 + 1 = <strong>3 times</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Occurrences shown",
            "marks": "1 M"
          },
          {
            "key": "Total: 3 times",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Shape Comparison",
        "q": "In a diagram, there are 9 circles and 5 triangles. How many more circles are there than triangles?",
        "ans": "<strong>Calculation:</strong><br>• Circles = 9<br>• Triangles = 5<br>• Difference = 9 - 5 = <strong>4 more circles</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "9 - 5 = 4 circles",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Simple Tally Observation",
        "q": "Why do we make a table when counting many items in a room?",
        "ans": "<strong>Answer:</strong><br>We make a table so that we do not miss any item or count the same item twice. A table makes counting <strong>organized, clear, and easy to read</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Organization and avoiding mistakes explained",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm10",
    "num": 10,
    "unit": "Unit 7: Patterns",
    "title": "Patterns",
    "subtitle": "Visual Patterns, Number Sequences & Growing Patterns",
    "concepts": [
      "Recognizing patterns in shapes, symbols, and objects around us.",
      "Extending growing and repeating sequences.",
      "Creating number patterns with addition rules."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"10\"/><rect x=\"40\" y=\"40\" width=\"30\" height=\"30\" fill=\"#f59e0b\" rx=\"4\"/><polygon points=\"100,70 115,40 130,70\" fill=\"#3b82f6\"/><rect x=\"150\" y=\"40\" width=\"30\" height=\"30\" fill=\"#f59e0b\" rx=\"4\"/><polygon points=\"210,70 225,40 240,70\" fill=\"#3b82f6\"/><rect x=\"260\" y=\"40\" width=\"30\" height=\"30\" fill=\"#f59e0b\" rx=\"4\"/><polygon points=\"320,70 335,40 350,70\" fill=\"#3b82f6\"/><text x=\"410\" y=\"60\" font-size=\"14\" font-weight=\"800\" fill=\"#b45309\">Next: Square, △</text><text x=\"250\" y=\"105\" font-size=\"11\" font-weight=\"700\" fill=\"#78350f\" text-anchor=\"middle\">Repeating Shape Pattern: Square, Triangle, Square, Triangle...</text></svg>",
    "cbq": {
      "title": "Granny's Saree Border",
      "text": "Granny's silk saree has a beautiful printed border with alternating red leaves and gold flowers: Leaf, Flower, Leaf, Flower, Leaf, Flower...",
      "question": "What will be the 9th design on the saree border? What comes after every flower?",
      "answer": "1. 9th design: Odd positions (1, 3, 5, 7, 9) are Leaves. So the 9th design will be a <strong>Leaf</strong>.<br>2. After every flower comes a <strong>Leaf</strong>.",
      "rubric": "1.5 M for 9th design is Leaf + 1.5 M for Leaf after every flower"
    },
    "questions": [
      {
        "category": "Pattern Extension • Shapes",
        "q": "Extend the pattern: ⬆, ⬇, ⬆, ⬇, ⬆, __, __.",
        "ans": "<strong>Answer:</strong><br>The arrow points up, then down.<br>Next two arrows are <strong>⬇ (Down)</strong> and <strong>⬆ (Up)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Down arrow",
            "marks": "1 M"
          },
          {
            "key": "Up arrow",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Patterns • Skip Counting",
        "q": "Fill in the blanks: 5, 10, 15, __, 25, __.",
        "ans": "<strong>Step-by-Step Rule:</strong><br>• The pattern adds 5 each time (+5).<br>• 15 + 5 = 20<br>• 25 + 5 = 30<br>Missing numbers are <strong>20</strong> and <strong>30</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "20",
            "marks": "1 M"
          },
          {
            "key": "30",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Growing Pattern • Dots",
        "q": "Pattern: •, ••, •••, ••••. How many dots will be in the next step?",
        "ans": "<strong>Answer:</strong><br>The number of dots grows by 1 each time (1, 2, 3, 4...).<br>The next step will have <strong>5 dots (•••••)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Growing rule (+1)",
            "marks": "1 M"
          },
          {
            "key": "5 dots identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Letter Pattern • Repetition",
        "q": "Continue the pattern: A, B, A, B, A, B, __, __.",
        "ans": "<strong>Answer:</strong><br>The next two letters are <strong>A</strong> and <strong>B</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "A and B",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Backwards Number Pattern",
        "q": "Complete the backward sequence: 20, 19, 18, 17, __, __, 14.",
        "ans": "<strong>Answer:</strong><br>Counting down by 1:<br>20, 19, 18, 17, <strong>16</strong>, <strong>15</strong>, 14.<br>Missing numbers are <strong>16</strong> and <strong>15</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "16 and 15 identified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Real World Observation",
        "q": "Where can you see patterns in everyday life? Give two examples.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Zebra crossings</strong> on roads (alternating black and white stripes).<br>2. <strong>Floor tiles</strong> or brick walls (repeating rectangular blocks).",
        "marks": 2,
        "rubric": [
          {
            "key": "Two valid real world examples",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm11",
    "num": 11,
    "unit": "Unit 8: Numbers from Fifty-one to Hundred",
    "title": "Numbers",
    "subtitle": "Counting 51 to 100, Bundles of Tens and Ones, Place Value Mastery",
    "concepts": [
      "Counting in groups of tens from 50 to 100.",
      "Writing numerals and number names up to 100.",
      "Understanding that 10 tens make 100 (One Hundred)."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"10\"/><rect x=\"40\" y=\"30\" width=\"220\" height=\"60\" fill=\"#16a34a\" rx=\"6\"/><text x=\"150\" y=\"55\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">7 Bundles of 10</text><text x=\"150\" y=\"75\" font-size=\"13\" font-weight=\"800\" fill=\"#dcfce7\" text-anchor=\"middle\">= 70</text><text x=\"285\" y=\"65\" font-size=\"24\" font-weight=\"800\" fill=\"#16a34a\">+</text><circle cx=\"320\" cy=\"60\" r=\"10\" fill=\"#22c55e\"/><circle cx=\"345\" cy=\"60\" r=\"10\" fill=\"#22c55e\"/><text x=\"332\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">2 Ones</text><text x=\"385\" y=\"65\" font-size=\"24\" font-weight=\"800\" fill=\"#16a34a\">=</text><text x=\"440\" y=\"70\" font-size=\"26\" font-weight=\"800\" fill=\"#14532d\">72</text></svg>",
    "cbq": {
      "title": "Centurions on the Cricket Pitch",
      "text": "Batsman Virat has scored 90 runs. He hits a boundary (4 runs) and then two singles (1 run each).",
      "question": "What is Virat's score now? How many more runs does he need to reach a century (100 runs)?",
      "answer": "1. Virat's score: 90 + 4 + 1 + 1 = <strong>96 runs</strong>.<br>2. Century = 100 runs. Runs needed: 100 - 96 = <strong>4 runs</strong>.",
      "rubric": "1.5 M for score 96 + 1.5 M for 4 runs needed"
    },
    "questions": [
      {
        "category": "Tens and Ones • Place Value",
        "q": "What number is 6 Tens and 4 Ones?",
        "ans": "<strong>Answer:</strong><br>• 6 Tens = 60<br>• 4 Ones = 4<br>• 60 + 4 = <strong>64 (Sixty-four)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "60 + 4",
            "marks": "1 M"
          },
          {
            "key": "64",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Names • 51 to 100",
        "q": "Write the numeral for:<br>(a) Seventy-eight<br>(b) Ninety-five",
        "ans": "<strong>Answer:</strong><br>(a) Seventy-eight = <strong>78</strong><br>(b) Ninety-five = <strong>95</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "78",
            "marks": "1 M"
          },
          {
            "key": "95",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Counting by 10s • Up to 100",
        "q": "Count by tens from 50 to 100.",
        "ans": "<strong>Answer:</strong><br>50, 60, 70, 80, 90, <strong>100</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All tens listed correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Before and After • Late 90s",
        "q": "What comes just before 100, and what comes just after 89?",
        "ans": "<strong>Answer:</strong><br>• Just before 100: <strong>99</strong><br>• Just after 89: <strong>90</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "99",
            "marks": "1 M"
          },
          {
            "key": "90",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Century Concept • Making 100",
        "q": "How many tens are needed to make 100?",
        "ans": "<strong>Answer:</strong><br><strong>10 tens</strong> make 100 (10 × 10 = 100).",
        "marks": 1,
        "rubric": [
          {
            "key": "10 tens",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparison • Two-Digit Numbers",
        "q": "Which number is greater: 87 or 78? Explain why.",
        "ans": "<strong>Explanation:</strong><br>• 87 has 8 tens.<br>• 78 has 7 tens.<br>Since 8 tens is greater than 7 tens, <strong>87 is greater than 78 (87 > 78)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "87 > 78",
            "marks": "1 M"
          },
          {
            "key": "Reasoning with tens digit",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm12",
    "num": 12,
    "unit": "Unit 8: Money & Financial Foundations",
    "title": "Money",
    "subtitle": "Coins, Currency Notes, Pricing, Simple Purchases & Addition of Money",
    "concepts": [
      "Recognizing currency coins: 1, 2, 5, 10 rupees.",
      "Recognizing currency notes: 10, 20, 50, 100 rupees.",
      "Combining coins to pay for items up to ₹20."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"10\"/><circle cx=\"70\" cy=\"55\" r=\"22\" fill=\"#d97706\"/><text x=\"70\" y=\"61\" font-size=\"13\" font-weight=\"800\" fill=\"#fff\" text-anchor=\"middle\">₹5</text><text x=\"120\" y=\"62\" font-size=\"20\" font-weight=\"800\" fill=\"#b45309\">+</text><circle cx=\"165\" cy=\"55\" r=\"22\" fill=\"#d97706\"/><text x=\"165\" y=\"61\" font-size=\"13\" font-weight=\"800\" fill=\"#fff\" text-anchor=\"middle\">₹5</text><text x=\"215\" y=\"62\" font-size=\"20\" font-weight=\"800\" fill=\"#b45309\">=</text><rect x=\"250\" y=\"32\" width=\"80\" height=\"46\" fill=\"#f59e0b\" rx=\"4\"/><text x=\"290\" y=\"60\" font-size=\"15\" font-weight=\"800\" fill=\"#fff\" text-anchor=\"middle\">₹10</text><rect x=\"365\" y=\"32\" width=\"95\" height=\"46\" fill=\"#60a5fa\" rx=\"4\"/><text x=\"412\" y=\"60\" font-size=\"14\" font-weight=\"800\" fill=\"#1e3a8a\" text-anchor=\"middle\">₹100 Note</text></svg>",
    "cbq": {
      "title": "Buying Kites for Makar Sankranti",
      "text": "A shopkeeper sells colourful kites for ₹6 each and rolls of string (charkhi) for ₹10 each. Aman buys one kite and one roll of string.",
      "question": "How much total money must Aman pay to the shopkeeper? If he gives a ₹20 note, how much change will he receive?",
      "answer": "1. Total cost = ₹6 + ₹10 = <strong>₹16</strong>.<br>2. Change from ₹20 = ₹20 - ₹16 = <strong>₹4</strong> (or two ₹2 coins).",
      "rubric": "1.5 M for total ₹16 + 1.5 M for change ₹4"
    },
    "questions": [
      {
        "category": "Coin Combination • Make ₹8",
        "q": "How can you make ₹8 using ₹2 coins?",
        "ans": "<strong>Answer:</strong><br>• 2 + 2 + 2 + 2 = 8.<br>• You need <strong>four ₹2 coins</strong> to make ₹8.",
        "marks": 2,
        "rubric": [
          {
            "key": "Four ₹2 coins identified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Shopping Sum • Pen and Notebook",
        "q": "A notebook costs ₹10 and a pencil costs ₹3. How much do both items cost together?",
        "ans": "<strong>Calculation:</strong><br>• Notebook = ₹10<br>• Pencil = ₹3<br>• Total cost = ₹10 + ₹3 = <strong>₹13</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹10 + ₹3",
            "marks": "1 M"
          },
          {
            "key": "Total ₹13",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Change Calculation",
        "q": "Tina gives a ₹10 note to buy a packet of biscuits that costs ₹8. How much change does the shopkeeper give her back?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Money given = ₹10<br>• Cost of biscuits = ₹8<br>• Change = ₹10 - ₹8 = <strong>₹2</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹10 - ₹8 = ₹2",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Currency Symbol",
        "q": "What is the official currency symbol of India? Draw it.",
        "ans": "<strong>Answer:</strong><br>The official currency symbol of India is <strong>₹ (Indian Rupee)</strong>. It was designed by Udaya Kumar Dharmalingam.",
        "marks": 1,
        "rubric": [
          {
            "key": "Symbol ₹ correctly drawn/named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Different Ways to Pay ₹10",
        "q": "Show two different ways to pay ₹10 using coins.",
        "ans": "<strong>Answer:</strong><br>• Way 1: One single ₹10 coin.<br>• Way 2: Two ₹5 coins (₹5 + ₹5 = ₹10).<br>• Way 3: Five ₹2 coins (2 + 2 + 2 + 2 + 2 = ₹10).",
        "marks": 2,
        "rubric": [
          {
            "key": "Two valid methods provided",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Mental Math • Notes",
        "q": "How many ₹20 notes make ₹100?",
        "ans": "<strong>Answer:</strong><br>20 + 20 + 20 + 20 + 20 = 100.<br>It takes <strong>five ₹20 notes</strong> to make ₹100 (5 × ₹20 = ₹100).",
        "marks": 2,
        "rubric": [
          {
            "key": "Five ₹20 notes",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm13",
    "num": 13,
    "unit": "Unit 8: Review & Problem Solving",
    "title": "How Many",
    "subtitle": "Comprehensive Counting, Story Problems & Number Sense Review",
    "concepts": [
      "Consolidating counting of objects and writing numerals.",
      "Solving multi-step addition and subtraction story problems.",
      "Synthesizing place value concepts across numbers 1 to 100."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f8fafc\" rx=\"10\"/><circle cx=\"60\" cy=\"50\" r=\"16\" fill=\"#6366f1\"/><circle cx=\"100\" cy=\"50\" r=\"16\" fill=\"#6366f1\"/><circle cx=\"140\" cy=\"50\" r=\"16\" fill=\"#6366f1\"/><circle cx=\"180\" cy=\"50\" r=\"16\" fill=\"#6366f1\"/><text x=\"120\" y=\"90\" font-size=\"11\" font-weight=\"700\" fill=\"#4338ca\" text-anchor=\"middle\">Count and Write</text><rect x=\"240\" y=\"30\" width=\"100\" height=\"50\" fill=\"#4f46e5\" rx=\"6\"/><text x=\"290\" y=\"60\" font-size=\"18\" font-weight=\"800\" fill=\"#fff\" text-anchor=\"middle\">Tens &amp; Ones</text><text x=\"420\" y=\"50\" font-size=\"14\" font-weight=\"800\" fill=\"#312e81\">Story Sums</text><text x=\"420\" y=\"75\" font-size=\"12\" font-weight=\"700\" fill=\"#4338ca\">Mastery: 1 to 100</text></svg>",
    "cbq": {
      "title": "The School Garden Harvest Festival",
      "text": "Grade 1 children gathered 24 radishes, 18 carrots, and 10 turnip roots from the class organic patch.",
      "question": "Write 24 in tens and ones. Which vegetable was harvested the most, and how many carrots and radishes were there altogether?",
      "answer": "1. 24 = <strong>2 Tens and 4 Ones</strong>.<br>2. <strong>Radishes (24)</strong> were harvested the most.<br>3. Total carrots and radishes = 18 + 24 = <strong>42 vegetables</strong>.",
      "rubric": "1 M for 2 tens 4 ones + 1 M for radishes most + 1 M for sum 42"
    },
    "questions": [
      {
        "category": "Counting • Place Value Review",
        "q": "Look at 3 bundles of 10 pencils and 6 loose pencils. How many pencils are there altogether? Write in tens and ones.",
        "ans": "<strong>Answer:</strong><br>• 3 bundles = 3 Tens (30)<br>• 6 loose = 6 Ones (6)<br>• Total = <strong>36 pencils</strong> (3 Tens + 6 Ones).",
        "marks": 2,
        "rubric": [
          {
            "key": "36 pencils",
            "marks": "1 M"
          },
          {
            "key": "3 Tens and 6 Ones",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Addition Story Sum",
        "q": "In an orchard, there are 13 guava trees and 6 lemon trees. How many fruit trees are there in all?",
        "ans": "<strong>Calculation:</strong><br>• Guava trees = 13<br>• Lemon trees = 6<br>• Total trees = 13 + 6 = <strong>19 trees</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "13 + 6 statement",
            "marks": "1 M"
          },
          {
            "key": "19 trees",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Subtraction Story Sum",
        "q": "A vendor had 20 coconuts. He sold 8 coconuts by noon. How many coconuts were left with him?",
        "ans": "<strong>Calculation:</strong><br>• Total coconuts = 20<br>• Coconuts sold = 8<br>• Coconuts left = 20 - 8 = <strong>12 coconuts</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "20 - 8 statement",
            "marks": "1 M"
          },
          {
            "key": "12 coconuts",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Name to Numeral",
        "q": "Write the numeral for: Forty-seven.",
        "ans": "<strong>Answer:</strong><br>Forty-seven = <strong>47</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "47",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparison • Smallest to Largest",
        "q": "Arrange these numbers from smallest to largest: 34, 12, 45, 23.",
        "ans": "<strong>Answer:</strong><br>Smallest to largest (Ascending order):<br><strong>12, 23, 34, 45</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct ascending order",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Mental Math • Tens",
        "q": "What is 10 more than 30? What is 10 less than 30?",
        "ans": "<strong>Answer:</strong><br>• 10 more than 30 is <strong>40</strong> (30 + 10 = 40).<br>• 10 less than 30 is <strong>20</strong> (30 - 10 = 20).",
        "marks": 2,
        "rubric": [
          {
            "key": "40",
            "marks": "1 M"
          },
          {
            "key": "20",
            "marks": "1 M"
          }
        ]
      }
    ]
  }
];

module.exports = { mathMagicChapters };
