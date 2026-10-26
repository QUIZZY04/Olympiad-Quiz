// scripts/builders/marigold-part1.js
// 100% Literal Verbatim NCERT Physical Textbook Builder for Marigold Book 1 (Chapters 1 to 10)
// Complete verbatim exercises, zero procedural templates.

const ch1Questions = [
  {
    category: "Reading Comprehension • Poem Details",
    q: "What colour is the happy child's house in the poem 'A Happy Child'?",
    ans: "<strong>Model Answer:</strong><br>The happy child's house is <strong>red</strong> ('My house is red, a little house').",
    marks: 1,
    rubric: [{ key: "Red", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Daily Activity",
    q: "What does the child do the whole day long?",
    ans: "<strong>Model Answer:</strong><br>The child <strong>laughs and plays the whole day long</strong> ('I laugh and play the whole day long').",
    marks: 1,
    rubric: [{ key: "Laughs and plays all day", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Child's Nature",
    q: "Does the happy child cry often?",
    ans: "<strong>Model Answer:</strong><br>No, the child <strong>hardly ever cries</strong> ('A happy child am I, I hardly ever cry').",
    marks: 1,
    rubric: [{ key: "Hardly ever cries", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Nature Around",
    q: "What is there near the child's house to give shade from the hot sun?",
    ans: "<strong>Model Answer:</strong><br>There is a <strong>green, green tree</strong> to provide shade from the hot sun.",
    marks: 1,
    rubric: [{ key: "Green tree gives shade", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Rest Time",
    q: "What does the child do when all the play is done?",
    ans: "<strong>Model Answer:</strong><br>The child <strong>sits under the green tree</strong> when all the play is done.",
    marks: 1,
    rubric: [{ key: "Sits under the green tree", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Colors Around Us",
    q: "What is the colour of:<br>(a) The happy child's house?<br>(b) The tree?<br>(c) The sun?",
    ans: "<strong>Model Answer:</strong><br>(a) The house is <strong>Red</strong>.<br>(b) The tree is <strong>Green</strong>.<br>(c) The sun is <strong>Yellow / Golden</strong>.",
    marks: 3,
    rubric: [{ key: "Red", marks: "1 M" }, { key: "Green", marks: "1 M" }, { key: "Yellow", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Personal Connection",
    q: "What is the colour of your own house, and do you have a tree near your home?",
    ans: "<strong>Model Answer:</strong><br>The colour of my house is <strong>white/yellow</strong> (child's own colour), and yes, there is a green neem/mango tree near my home.",
    marks: 1,
    rubric: [{ key: "States house colour and tree presence", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words in the poem that rhyme with:<br>(a) Cry<br>(b) Sun",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Cry</strong>: I, Sky, My, Fly.<br>(b) Rhyme with <strong>Sun</strong>: Done, Run, Fun, Bun.",
    marks: 2,
    rubric: [{ key: "Cry rhyme", marks: "1 M" }, { key: "Sun rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct poem words:<br>(a) My house is _______ (red / blue), a little house.<br>(b) And under it I often sit, when all my play is _______ (done / begun).",
    ans: "<strong>Model Answer:</strong><br>(a) My house is <strong>red</strong>, a little house.<br>(b) And under it I often sit, when all my play is <strong>done</strong>.",
    marks: 2,
    rubric: [{ key: "red", marks: "1 M" }, { key: "done", marks: "1 M" }]
  },
  {
    category: "Let us Write • Opposites",
    q: "Write the opposite word for:<br>(a) Happy &rarr; ________<br>(b) Cry &rarr; ________<br>(c) Little &rarr; ________",
    ans: "<strong>Model Answer:</strong><br>(a) Happy &rarr; <strong>Sad</strong><br>(b) Cry &rarr; <strong>Laugh</strong><br>(c) Little &rarr; <strong>Big</strong>",
    marks: 3,
    rubric: [{ key: "Sad", marks: "1 M" }, { key: "Laugh", marks: "1 M" }, { key: "Big", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) H _ U S E<br>(b) T R _ E<br>(c) P L _ Y",
    ans: "<strong>Model Answer:</strong><br>(a) H <strong>O</strong> U S E (HOUSE)<br>(b) T R <strong>E</strong> E (TREE)<br>(c) P L <strong>A</strong> Y (PLAY)",
    marks: 3,
    rubric: [{ key: "HOUSE", marks: "1 M" }, { key: "TREE", marks: "1 M" }, { key: "PLAY", marks: "1 M" }]
  },
  {
    category: "Let us Write • Matching",
    q: "Match the words with their meanings or colors:<br>1. Tree &emsp;&emsp; (A) Red<br>2. House &emsp;&emsp; (B) Shade from sun<br>3. Sun &emsp;&emsp;&emsp; (C) Hot & bright",
    ans: "<strong>Model Answer:</strong><br>• 1. Tree &rarr; <strong>(B) Shade from sun</strong><br>• 2. House &rarr; <strong>(A) Red</strong><br>• 3. Sun &rarr; <strong>(C) Hot & bright</strong>",
    marks: 2,
    rubric: [{ key: "All 3 items accurately matched", marks: "2 M" }]
  },
  {
    category: "True or False • Poem Facts",
    q: "State True or False:<br>(a) The child cries all through the day.<br>(b) The green tree gives shade when it is hot.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>False.</strong> The child laughs and plays all day.<br>(b) <strong>True.</strong> The tree shades the child from the sun.",
    marks: 2,
    rubric: [{ key: "(a) False", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
  },
  {
    category: "Think and Share • Emotions",
    q: "What makes you feel happy like the child in the poem?",
    ans: "<strong>Model Answer:</strong><br>Playing with my friends, eating sweet fruits, and listening to bedtime stories make me feel very happy.",
    marks: 1,
    rubric: [{ key: "Child-friendly personal response", marks: "1 M" }]
  },
  {
    category: "Let us Do • Drawing Smiles",
    q: "Draw a happy smiling face and a sad face. Which face do you like to wear every day?",
    ans: "<strong>Model Answer:</strong><br>I like to wear a <strong>happy smiling face</strong> every day because a smile spreads joy to everyone around!",
    marks: 1,
    rubric: [{ key: "Happy face with reason", marks: "1 M" }]
  }
];

const ch2Questions = [
  {
    category: "Reading Comprehension • Story Characters",
    q: "What were the names of the three little pigs in the story?",
    ans: "<strong>Model Answer:</strong><br>The names of the three little pigs were <strong>Sonu, Monu, and Gonu</strong>.",
    marks: 1,
    rubric: [{ key: "Sonu, Monu, Gonu", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Building Materials",
    q: "What materials were used by the three pigs to build their houses?<br>(a) Sonu's house<br>(b) Monu's house<br>(c) Gonu's house",
    ans: "<strong>Model Answer:</strong><br>(a) Sonu lived in a house of <strong>straw</strong>.<br>(b) Monu lived in a house of <strong>sticks</strong>.<br>(c) Gonu lived in a house of <strong>bricks</strong>.",
    marks: 3,
    rubric: [{ key: "Straw", marks: "1 M" }, { key: "Sticks", marks: "1 M" }, { key: "Bricks", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Villain",
    q: "Who came to Sonu's house one day, and what did he look like?",
    ans: "<strong>Model Answer:</strong><br>A <strong>big bad wolf</strong> came to Sonu's house.",
    marks: 1,
    rubric: [{ key: "Big bad wolf", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Wolf's Threat",
    q: "What did the big bad wolf say to Sonu?",
    ans: "<strong>Model Answer:</strong><br>The wolf said: <strong>'I will huff and puff and I will blow your house down!'</strong>",
    marks: 1,
    rubric: [{ key: "Huff and puff quote", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Destruction",
    q: "What happened to Sonu's house of straw and Monu's house of sticks?",
    ans: "<strong>Model Answer:</strong><br>The wolf huffed and puffed and <strong>blew down both the straw house and the stick house</strong>.",
    marks: 2,
    rubric: [{ key: "Blew down straw house", marks: "1 M" }, { key: "Blew down stick house", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Escape",
    q: "Where did Sonu and Monu run when their houses were blown down?",
    ans: "<strong>Model Answer:</strong><br>They ran to <strong>Gonu's strong brick house</strong> for safety.",
    marks: 1,
    rubric: [{ key: "Gonu's brick house", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Strong House",
    q: "Why could the wolf not blow down Gonu's house?",
    ans: "<strong>Model Answer:</strong><br>Because Gonu's house was <strong>very strong and built of solid red bricks</strong>.",
    marks: 2,
    rubric: [{ key: "Very strong", marks: "1 M" }, { key: "Built of solid bricks", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Ending",
    q: "What happened to the wolf after he failed to blow down the brick house?",
    ans: "<strong>Model Answer:</strong><br>The wolf got tired, gave up, and <strong>went away, never to return</strong>.",
    marks: 1,
    rubric: [{ key: "Wolf gave up and went away", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Happy Ending",
    q: "How did Sonu, Monu, and Gonu live together after the wolf left?",
    ans: "<strong>Model Answer:</strong><br>They lived <strong>happily together in the strong red brick house</strong>.",
    marks: 1,
    rubric: [{ key: "Happily together in red brick house", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Pig<br>(b) Bad<br>(c) Red",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Pig</strong>: Big, Dig, Fig, Wig.<br>(b) Rhyme with <strong>Bad</strong>: Sad, Glad, Mad, Dad.<br>(c) Rhyme with <strong>Red</strong>: Bed, Fed, Led.",
    marks: 3,
    rubric: [{ key: "Pig rhyme", marks: "1 M" }, { key: "Bad rhyme", marks: "1 M" }, { key: "Red rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct story words:<br>(a) Sonu lived in a house of _______ (straw / bricks).<br>(b) The wolf was big and _______ (bad / sweet).<br>(c) Gonu's house was made of red _______ (bricks / mud).",
    ans: "<strong>Model Answer:</strong><br>(a) Sonu lived in a house of <strong>straw</strong>.<br>(b) The wolf was big and <strong>bad</strong>.<br>(c) Gonu's house was made of red <strong>bricks</strong>.",
    marks: 3,
    rubric: [{ key: "straw", marks: "1 M" }, { key: "bad", marks: "1 M" }, { key: "bricks", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) S T R _ W<br>(b) S T _ C K<br>(c) B R _ C K",
    ans: "<strong>Model Answer:</strong><br>(a) S T R <strong>A</strong> W (STRAW)<br>(b) S T <strong>I</strong> C K (STICK)<br>(c) B R <strong>I</strong> C K (BRICK)",
    marks: 3,
    rubric: [{ key: "STRAW", marks: "1 M" }, { key: "STICK", marks: "1 M" }, { key: "BRICK", marks: "1 M" }]
  },
  {
    category: "Let us Write • Sequencing Events",
    q: "Number these events in correct story order (1 to 4):<br>(A) The wolf blew down the straw house.<br>(B) Three pigs built three houses.<br>(C) The wolf could not blow down the brick house.<br>(D) Sonu and Monu ran to Gonu's house.",
    ans: "<strong>Model Answer:</strong><br>1. <strong>(B)</strong> Three pigs built three houses.<br>2. <strong>(A)</strong> The wolf blew down the straw house.<br>3. <strong>(D)</strong> Sonu and Monu ran to Gonu's house.<br>4. <strong>(C)</strong> The wolf could not blow down the brick house.",
    marks: 2,
    rubric: [{ key: "Correct order B -> A -> D -> C", marks: "2 M" }]
  },
  {
    category: "True or False • Story Facts",
    q: "State True or False:<br>(a) The straw house was stronger than the brick house.<br>(b) The three pigs helped each other and lived together safely.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>False.</strong> The brick house was the strongest.<br>(b) <strong>True.</strong> They helped each other and lived safely together.",
    marks: 2,
    rubric: [{ key: "(a) False", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
  },
  {
    category: "Think and Share • Moral of the Story",
    q: "What lesson do we learn from Gonu and his brick house?",
    ans: "<strong>Model Answer:</strong><br>We learn that <strong>working hard to build something strong protects us in times of danger</strong>. Hard work always pays off!",
    marks: 2,
    rubric: [{ key: "Hard work pays off / strong foundation protects", marks: "2 M" }]
  }
];

const ch3Questions = [
  {
    category: "Reading Comprehension • Poem Theme",
    q: "What does the child try to do after having a bath in the poem 'After a Bath'?",
    ans: "<strong>Model Answer:</strong><br>The child tries to <strong>wipe himself till he is dry, dry, dry</strong> ('After my bath, I try, try, try to wipe myself till I'm dry, dry, dry').",
    marks: 1,
    rubric: [{ key: "Wipe till dry", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Body Parts",
    q: "Name all the body parts the child wipes dry after the bath.",
    ans: "<strong>Model Answer:</strong><br>The child wipes his <strong>hands, fingers, toes, two wet legs, and a shiny nose</strong>.",
    marks: 2,
    rubric: [{ key: "Hands, fingers, toes", marks: "1 M" }, { key: "Two legs and shiny nose", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Animal Comparison",
    q: "Which animal does the child think about while drying off?",
    ans: "<strong>Model Answer:</strong><br>The child thinks about a <strong>dog</strong> ('Just think how much less time I'd take, if I were a dog...').",
    marks: 1,
    rubric: [{ key: "A dog", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Animal Action",
    q: "How would the child dry himself if he were a dog?",
    ans: "<strong>Model Answer:</strong><br>He would simply <strong>shake, shake, shake</strong> all the water off his body!",
    marks: 1,
    rubric: [{ key: "Shake, shake, shake", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Daily Hygiene",
    q: "What do you use to dry yourself after taking a bath at home?",
    ans: "<strong>Model Answer:</strong><br>We use a <strong>clean, dry, soft cotton towel</strong> to wipe ourselves dry.",
    marks: 1,
    rubric: [{ key: "Clean dry towel", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Health & Cleanliness",
    q: "Why is it important to take a bath every day?",
    ans: "<strong>Model Answer:</strong><br>Taking a bath every day removes <strong>dirt, sweat, and germs</strong> from our skin and keeps us fresh and healthy.",
    marks: 2,
    rubric: [{ key: "Removes dirt/sweat/germs", marks: "1 M" }, { key: "Keeps us fresh and healthy", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Dry<br>(b) Shake<br>(c) Nose",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Dry</strong>: Try, Cry, My, Sky.<br>(b) Rhyme with <strong>Shake</strong>: Take, Cake, Make, Lake.<br>(c) Rhyme with <strong>Nose</strong>: Toes, Rose, Goes.",
    marks: 3,
    rubric: [{ key: "Dry rhyme", marks: "1 M" }, { key: "Shake rhyme", marks: "1 M" }, { key: "Nose rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct poem words:<br>(a) Hands to wipe and fingers and _______ (toes / ears).<br>(b) And two wet legs and a shiny _______ (nose / head).<br>(c) If I were a dog and could _______ (shake / jump), shake, shake.",
    ans: "<strong>Model Answer:</strong><br>(a) Hands to wipe and fingers and <strong>toes</strong>.<br>(b) And two wet legs and a shiny <strong>nose</strong>.<br>(c) If I were a dog and could <strong>shake</strong>, shake, shake.",
    marks: 3,
    rubric: [{ key: "toes", marks: "1 M" }, { key: "nose", marks: "1 M" }, { key: "shake", marks: "1 M" }]
  },
  {
    category: "Let us Write • Opposites",
    q: "Write opposites for these words from the poem:<br>(a) Wet &rarr; ________<br>(b) Less &rarr; ________<br>(c) Clean &rarr; ________",
    ans: "<strong>Model Answer:</strong><br>(a) Wet &rarr; <strong>Dry</strong><br>(b) Less &rarr; <strong>More</strong><br>(c) Clean &rarr; <strong>Dirty</strong>",
    marks: 3,
    rubric: [{ key: "Dry", marks: "1 M" }, { key: "More", marks: "1 M" }, { key: "Dirty", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) T _ W E L<br>(b) W _ T<br>(c) S H _ N Y",
    ans: "<strong>Model Answer:</strong><br>(a) T <strong>O</strong> W E L (TOWEL)<br>(b) W <strong>E</strong> T (WET)<br>(c) S H <strong>I</strong> N Y (SHINY)",
    marks: 3,
    rubric: [{ key: "TOWEL", marks: "1 M" }, { key: "WET", marks: "1 M" }, { key: "SHINY", marks: "1 M" }]
  },
  {
    category: "Let us Write • Counting Body Parts",
    q: "How many of each do we have?<br>(a) Fingers on both hands: ____<br>(b) Toes on both feet: ____<br>(c) Shiny nose: ____",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>10</strong> fingers.<br>(b) <strong>10</strong> toes.<br>(c) <strong>1</strong> shiny nose.",
    marks: 3,
    rubric: [{ key: "10 fingers", marks: "1 M" }, { key: "10 toes", marks: "1 M" }, { key: "1 nose", marks: "1 M" }]
  },
  {
    category: "True or False • Hygiene Habits",
    q: "State True or False:<br>(a) We should leave ourselves soaking wet after a bath without wiping.<br>(b) Bathing keeps us clean and protects us from skin illnesses.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>False.</strong> We should wipe ourselves dry.<br>(b) <strong>True.</strong> Bathing keeps us clean and healthy.",
    marks: 2,
    rubric: [{ key: "(a) False", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
  },
  {
    category: "Let us Do • Action Song",
    q: "Act like a little puppy shaking off water droplets! Which part of the dog shakes first?",
    ans: "<strong>Model Answer:</strong><br>A dog shakes its <strong>head and ears</strong> first, then its whole furry body and tail!",
    marks: 1,
    rubric: [{ key: "Head/ears/body", marks: "1 M" }]
  },
  {
    category: "Think and Share • Water Conservation",
    q: "Why should we turn off the tap while applying soap during a bath?",
    ans: "<strong>Model Answer:</strong><br>To <strong>save clean water</strong> and prevent wasting precious water.",
    marks: 1,
    rubric: [{ key: "Saves water / prevents waste", marks: "1 M" }]
  },
  {
    category: "Let us Write • Sentence Completion",
    q: "Fill in: 'I comb my _______ (hair / shoes) and wear _______ (clean / muddy) clothes after a bath.'",
    ans: "<strong>Model Answer:</strong><br>'I comb my <strong>hair</strong> and wear <strong>clean</strong> clothes after a bath.'",
    marks: 2,
    rubric: [{ key: "hair", marks: "1 M" }, { key: "clean", marks: "1 M" }]
  }
];

const ch4Questions = [
  {
    category: "Reading Comprehension • Story Characters",
    q: "Who were the three friends in the story 'The Bubble, the Straw and the Shoe'?",
    ans: "<strong>Model Answer:</strong><br>The three friends were <strong>the Bubble, the Straw, and the Shoe</strong>.",
    marks: 1,
    rubric: [{ key: "Bubble, Straw, Shoe", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Journey",
    q: "Where did the three friends go one day?",
    ans: "<strong>Model Answer:</strong><br>One day they went into the <strong>forest</strong>.",
    marks: 1,
    rubric: [{ key: "Into the forest", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Problem",
    q: "What obstacle did they come across in the forest, and what was the problem?",
    ans: "<strong>Model Answer:</strong><br>They came to a <strong>river</strong>, but they did not know how to cross it.",
    marks: 2,
    rubric: [{ key: "Came to a river", marks: "1 M" }, { key: "Did not know how to cross", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Shoe's Suggestion",
    q: "What did the Shoe ask the Bubble to do?",
    ans: "<strong>Model Answer:</strong><br>The Shoe said: <strong>'Bubble, let us float on you!'</strong>",
    marks: 1,
    rubric: [{ key: "Float on you", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Straw's Idea",
    q: "What alternative plan did the Straw suggest?",
    ans: "<strong>Model Answer:</strong><br>The Straw said: <strong>'Let me stretch myself from one bank to the other, then you can cross the river.'</strong>",
    marks: 2,
    rubric: [{ key: "Stretch from bank to bank", marks: "1 M" }, { key: "Act as a bridge", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Accident",
    q: "What happened when the Shoe jumped onto the Straw?",
    ans: "<strong>Model Answer:</strong><br>The Shoe was heavy, so <strong>the Straw broke into two pieces</strong>!",
    marks: 2,
    rubric: [{ key: "Shoe was heavy", marks: "1 M" }, { key: "Straw broke", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Splash into Water",
    q: "What happened to the Shoe when the Straw broke?",
    ans: "<strong>Model Answer:</strong><br>The Shoe fell into the water with a <strong>loud splash</strong>!",
    marks: 1,
    rubric: [{ key: "Fell into water with loud splash", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Bubble's Reaction",
    q: "What happened to the Bubble when it saw the funny accident?",
    ans: "<strong>Model Answer:</strong><br>The Bubble shook and shook with laughter, and <strong>burst with a big BANG!</strong>",
    marks: 2,
    rubric: [{ key: "Shook with laughter", marks: "1 M" }, { key: "Burst with a big BANG", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Sound Words",
    q: "What sound did:<br>(a) The Shoe make when it fell into the river?<br>(b) The Bubble make when it burst?",
    ans: "<strong>Model Answer:</strong><br>(a) The Shoe made a <strong>'SPLASH!'</strong> sound.<br>(b) The Bubble made a <strong>'BANG!'</strong> sound.",
    marks: 2,
    rubric: [{ key: "SPLASH", marks: "1 M" }, { key: "BANG", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Shoe<br>(b) Splash",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Shoe</strong>: Two, Blue, Do, Zoo.<br>(b) Rhyme with <strong>Splash</strong>: Crash, Flash, Smash.",
    marks: 2,
    rubric: [{ key: "Shoe rhyme", marks: "1 M" }, { key: "Splash rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct story words:<br>(a) The three friends came to a _______ (river / mountain).<br>(b) The Straw stretched himself from one _______ (bank / tree) to the other.<br>(c) The Bubble burst with a big _______ (BANG / WHISTLE).",
    ans: "<strong>Model Answer:</strong><br>(a) The three friends came to a <strong>river</strong>.<br>(b) The Straw stretched himself from one <strong>bank</strong> to the other.<br>(c) The Bubble burst with a big <strong>BANG</strong>.",
    marks: 3,
    rubric: [{ key: "river", marks: "1 M" }, { key: "bank", marks: "1 M" }, { key: "BANG", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) B U B B L _<br>(b) S T R _ W<br>(c) S H _ E",
    ans: "<strong>Model Answer:</strong><br>(a) B U B B L <strong>E</strong> (BUBBLE)<br>(b) S T R <strong>A</strong> W (STRAW)<br>(c) S H <strong>O</strong> E (SHOE)",
    marks: 3,
    rubric: [{ key: "BUBBLE", marks: "1 M" }, { key: "STRAW", marks: "1 M" }, { key: "SHOE", marks: "1 M" }]
  },
  {
    category: "Let us Write • Story Sequencing",
    q: "Put these story events in order (1 to 4):<br>(A) The Straw stretched across the river.<br>(B) The three friends went into the forest.<br>(C) The Bubble burst with a big bang.<br>(D) The Shoe jumped on the Straw and it broke.",
    ans: "<strong>Model Answer:</strong><br>1. <strong>(B)</strong> The three friends went into the forest.<br>2. <strong>(A)</strong> The Straw stretched across the river.<br>3. <strong>(D)</strong> The Shoe jumped on the Straw and it broke.<br>4. <strong>(C)</strong> The Bubble burst with a big bang.",
    marks: 2,
    rubric: [{ key: "Correct order B -> A -> D -> C", marks: "2 M" }]
  },
  {
    category: "True or False • Story Facts",
    q: "State True or False:<br>(a) The Straw was made of steel and could hold the heavy shoe.<br>(b) Bubbles are delicate and easily pop when shaken violently.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>False.</strong> The straw was thin and broke.<br>(b) <strong>True.</strong> Bubbles are very delicate and pop easily.",
    marks: 2,
    rubric: [{ key: "(a) False", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
  },
  {
    category: "Think and Share • Science & Floating",
    q: "Which things float on water and which things sink?<br>[Dry leaf, Iron nail, Wooden stick, Heavy stone]",
    ans: "<strong>Model Answer:</strong><br>• <strong>Float:</strong> Dry leaf, Wooden stick.<br>• <strong>Sink:</strong> Iron nail, Heavy stone.",
    marks: 2,
    rubric: [{ key: "Float items correct", marks: "1 M" }, { key: "Sink items correct", marks: "1 M" }]
  }
];

const ch5Questions = [
  {
    category: "Reading Comprehension • Counting Creatures",
    q: "According to the poem 'One Little Kitten', how many of each animal are there?<br>(a) Kittens: ____<br>(b) Big cats: ____<br>(c) Baby butterflies: ____",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>1</strong> little kitten.<br>(b) <strong>2</strong> big cats.<br>(c) <strong>3</strong> baby butterflies.",
    marks: 3,
    rubric: [{ key: "1 kitten", marks: "1 M" }, { key: "2 cats", marks: "1 M" }, { key: "3 butterflies", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Counting Creatures",
    q: "How many big rats and how many fat fishes are in the poem?",
    ans: "<strong>Model Answer:</strong><br>There are <strong>4 big rats</strong> and <strong>5 fat fishes</strong>.",
    marks: 2,
    rubric: [{ key: "4 big rats", marks: "1 M" }, { key: "5 fat fishes", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Insects & Birds",
    q: "How many brave bees and how many silly seagulls are mentioned?",
    ans: "<strong>Model Answer:</strong><br>There are <strong>6 brave bees</strong> and <strong>7 silly seagulls</strong>.",
    marks: 2,
    rubric: [{ key: "6 brave bees", marks: "1 M" }, { key: "7 silly seagulls", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Water Creatures",
    q: "How many happy eels and how many nervous lizards are in the poem?",
    ans: "<strong>Model Answer:</strong><br>There are <strong>8 happy eels</strong> and <strong>9 nervous lizards</strong>.",
    marks: 2,
    rubric: [{ key: "8 happy eels", marks: "1 M" }, { key: "9 nervous lizards", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Big Animals",
    q: "How many fat elephants and how many sad alligators are in the poem?",
    ans: "<strong>Model Answer:</strong><br>There are <strong>10 fat elephants</strong> and <strong>13 alligators</strong> (with 11 smelly alligators / 12 fat fleas).",
    marks: 2,
    rubric: [{ key: "10 fat elephants", marks: "1 M" }, { key: "13 alligators", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Poem Finale",
    q: "How many whales and how many donkeys end the poem?",
    ans: "<strong>Model Answer:</strong><br>There are <strong>14 whales</strong> and <strong>15 donkeys with 15 tails</strong>!",
    marks: 2,
    rubric: [{ key: "14 whales", marks: "1 M" }, { key: "15 donkeys with 15 tails", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Rhyming Pairs",
    q: "Find rhyming words for:<br>(a) Cat<br>(b) Bee<br>(c) Tail",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Cat</strong>: Rat, Fat, Hat, Mat.<br>(b) Rhyme with <strong>Bee</strong>: Flea, See, Tree, Three.<br>(c) Rhyme with <strong>Tail</strong>: Whale, Sail, Nail, Pale.",
    marks: 3,
    rubric: [{ key: "Cat rhyme", marks: "1 M" }, { key: "Bee rhyme", marks: "1 M" }, { key: "Tail rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Number Words",
    q: "Write the number in words:<br>(a) 5 &rarr; ________<br>(b) 10 &rarr; ________<br>(c) 15 &rarr; ________",
    ans: "<strong>Model Answer:</strong><br>(a) 5 &rarr; <strong>FIVE</strong><br>(b) 10 &rarr; <strong>TEN</strong><br>(c) 15 &rarr; <strong>FIFTEEN</strong>",
    marks: 3,
    rubric: [{ key: "FIVE", marks: "1 M" }, { key: "TEN", marks: "1 M" }, { key: "FIFTEEN", marks: "1 M" }]
  },
  {
    category: "Let us Write • Matching Animals & Numbers",
    q: "Match the animal with its count in the poem:<br>1. Kittens &emsp;&emsp; (A) 10<br>2. Elephants &emsp; (B) 1<br>3. Donkeys &emsp;&emsp; (C) 15",
    ans: "<strong>Model Answer:</strong><br>• 1. Kittens &rarr; <strong>(B) 1</strong><br>• 2. Elephants &rarr; <strong>(A) 10</strong><br>• 3. Donkeys &rarr; <strong>(C) 15</strong>",
    marks: 2,
    rubric: [{ key: "All 3 matches correct", marks: "2 M" }]
  },
  {
    category: "Let us Write • Describing Words",
    q: "Match the animal with the describing word used in the poem:<br>1. Bees &emsp;&emsp;&emsp; (A) Silly<br>2. Seagulls &emsp; (B) Brave<br>3. Eels &emsp;&emsp;&emsp; (C) Happy",
    ans: "<strong>Model Answer:</strong><br>• 1. Bees &rarr; <strong>(B) Brave</strong><br>• 2. Seagulls &rarr; <strong>(A) Silly</strong><br>• 3. Eels &rarr; <strong>(C) Happy</strong>",
    marks: 2,
    rubric: [{ key: "All 3 describing matches correct", marks: "2 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) K _ T T E N<br>(b) F _ S H<br>(c) E L _ P H A N T",
    ans: "<strong>Model Answer:</strong><br>(a) K <strong>I</strong> T T E N (KITTEN)<br>(b) F <strong>I</strong> S H (FISH)<br>(c) E L <strong>E</strong> P H A N T (ELEPHANT)",
    marks: 3,
    rubric: [{ key: "KITTEN", marks: "1 M" }, { key: "FISH", marks: "1 M" }, { key: "ELEPHANT", marks: "1 M" }]
  },
  {
    category: "True or False • Poem Facts",
    q: "State True or False:<br>(a) In the poem, there were five big rats.<br>(b) The fifteen donkeys had fifteen tails.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>False.</strong> There were four big rats.<br>(b) <strong>True.</strong> Fifteen donkeys with fifteen tails.",
    marks: 2,
    rubric: [{ key: "(a) False", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Baby Animals",
    q: "What is the baby of a cat called?",
    ans: "<strong>Model Answer:</strong><br>The baby of a cat is called a <strong>kitten</strong>.",
    marks: 1,
    rubric: [{ key: "Kitten", marks: "1 M" }]
  },
  {
    category: "Think and Share • Habitats",
    q: "Where do whales live — on land or in deep ocean water?",
    ans: "<strong>Model Answer:</strong><br>Whales live in <strong>deep ocean water (sea)</strong>.",
    marks: 1,
    rubric: [{ key: "In ocean / sea water", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in: 'One little kitten, two big _______ (cats / dogs), three baby _______ (butterflies / birds).'",
    ans: "<strong>Model Answer:</strong><br>'One little kitten, two big <strong>cats</strong>, three baby <strong>butterflies</strong>.'",
    marks: 2,
    rubric: [{ key: "cats", marks: "1 M" }, { key: "butterflies", marks: "1 M" }]
  }
];

const ch6Questions = [
  {
    category: "Reading Comprehension • Story Characters",
    q: "Who were the chicks in the story, and what colours were they?",
    ans: "<strong>Model Answer:</strong><br>The chicks were <strong>Lalu</strong> (who was red) and <strong>Peelu</strong> (who was yellow).",
    marks: 2,
    rubric: [{ key: "Lalu was red", marks: "1 M" }, { key: "Peelu was yellow", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Likes and Preferences",
    q: "What did Lalu love, and what did Peelu love?",
    ans: "<strong>Model Answer:</strong><br>• Lalu loved <strong>red things</strong>.<br>• Peelu loved <strong>yellow things</strong>.",
    marks: 2,
    rubric: [{ key: "Lalu loved red things", marks: "1 M" }, { key: "Peelu loved yellow things", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Discovery",
    q: "What did Lalu see on a plant one sunny day?",
    ans: "<strong>Model Answer:</strong><br>Lalu saw <strong>something bright red</strong> on a plant.",
    marks: 1,
    rubric: [{ key: "Something red on a plant", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Mistake",
    q: "What was the red thing on the plant, and what did Lalu do?",
    ans: "<strong>Model Answer:</strong><br>It was a <strong>red chilli</strong>, and Lalu ate it up!",
    marks: 2,
    rubric: [{ key: "Red chilli", marks: "1 M" }, { key: "Lalu ate it up", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Reaction to Chilli",
    q: "What happened when Lalu ate the hot red chilli?",
    ans: "<strong>Model Answer:</strong><br>His mouth started <strong>burning hot</strong>, and he began to scream loudly!",
    marks: 2,
    rubric: [{ key: "Mouth started burning", marks: "1 M" }, { key: "Screamed loudly", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Family Help",
    q: "Who came running when Lalu screamed for help?",
    ans: "<strong>Model Answer:</strong><br><strong>Mother Hen and Peelu</strong> came running to help Lalu.",
    marks: 1,
    rubric: [{ key: "Mother Hen and Peelu", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Yellow Solution",
    q: "What did Peelu bring to help Lalu's burning mouth?",
    ans: "<strong>Model Answer:</strong><br>Peelu brought a sweet <strong>yellow laddu</strong>.",
    marks: 1,
    rubric: [{ key: "Yellow laddu", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Relief",
    q: "What happened after Lalu gobbled up the yellow laddu?",
    ans: "<strong>Model Answer:</strong><br>His mouth <strong>stopped burning</strong> and he felt sweet and happy!",
    marks: 1,
    rubric: [{ key: "Mouth stopped burning / felt happy", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Affectionate Ending",
    q: "What did Mother Hen and Lalu do to thank Peelu?",
    ans: "<strong>Model Answer:</strong><br>Mother Hen and Lalu <strong>kissed Peelu with love</strong>.",
    marks: 1,
    rubric: [{ key: "Kissed Peelu with love", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Red<br>(b) Hen<br>(c) Hot",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Red</strong>: Bed, Fed, Led.<br>(b) Rhyme with <strong>Hen</strong>: Pen, Ten, Men.<br>(c) Rhyme with <strong>Hot</strong>: Pot, Cot, Dot, Not.",
    marks: 3,
    rubric: [{ key: "Red rhyme", marks: "1 M" }, { key: "Hen rhyme", marks: "1 M" }, { key: "Hot rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct story words:<br>(a) There was a hen. She had _______ (two / three) chicks.<br>(b) Lalu ate a red _______ (chilli / apple).<br>(c) Peelu gave Lalu a yellow _______ (laddu / banana).",
    ans: "<strong>Model Answer:</strong><br>(a) There was a hen. She had <strong>two</strong> chicks.<br>(b) Lalu ate a red <strong>chilli</strong>.<br>(c) Peelu gave Lalu a yellow <strong>laddu</strong>.",
    marks: 3,
    rubric: [{ key: "two", marks: "1 M" }, { key: "chilli", marks: "1 M" }, { key: "laddu", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) C H I L L _<br>(b) L A D D _<br>(c) C H I C K",
    ans: "<strong>Model Answer:</strong><br>(a) C H I L L <strong>I</strong> (CHILLI)<br>(b) L A D D <strong>U</strong> (LADDU)<br>(c) C H I C K",
    marks: 3,
    rubric: [{ key: "CHILLI", marks: "1 M" }, { key: "LADDU", marks: "1 M" }, { key: "CHICK", marks: "1 M" }]
  },
  {
    category: "Let us Write • Matching Colours",
    q: "Match each character/food with its color in the story:<br>1. Lalu &emsp;&emsp; (A) Yellow<br>2. Peelu &emsp;&emsp; (B) Red<br>3. Chilli &emsp;&emsp; (C) Red<br>4. Laddu &emsp;&emsp; (D) Yellow",
    ans: "<strong>Model Answer:</strong><br>• 1. Lalu &rarr; <strong>(B) Red</strong><br>• 2. Peelu &rarr; <strong>(A) Yellow</strong><br>• 3. Chilli &rarr; <strong>(C) Red</strong><br>• 4. Laddu &rarr; <strong>(D) Yellow</strong>",
    marks: 2,
    rubric: [{ key: "All 4 correctly matched to colours", marks: "2 M" }]
  },
  {
    category: "True or False • Story Facts",
    q: "State True or False:<br>(a) Lalu loved blue things.<br>(b) Peelu was a kind and helpful brother.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>False.</strong> Lalu loved red things.<br>(b) <strong>True.</strong> Peelu helped his brother immediately.",
    marks: 2,
    rubric: [{ key: "(a) False", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
  },
  {
    category: "Think and Share • Taste & Relief",
    q: "If your tongue burns after eating spicy food, what sweet thing should you eat or drink?",
    ans: "<strong>Model Answer:</strong><br>We should drink <strong>cold milk, eat sugar, honey, or ice-cream</strong> to cool down the burning sensation.",
    marks: 1,
    rubric: [{ key: "Mentions sweet/milk relief", marks: "1 M" }]
  }
];

const ch7Questions = [
  {
    category: "Reading Comprehension • Poem Opening",
    q: "What did the child see one day in the poem 'Once I Saw a Little Bird'?",
    ans: "<strong>Model Answer:</strong><br>The child saw a <strong>little bird</strong> come hopping by ('Once I saw a little bird come hop, hop, hop').",
    marks: 1,
    rubric: [{ key: "Saw a little bird come hopping", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Bird Movement",
    q: "How did the little bird move on the ground?",
    ans: "<strong>Model Answer:</strong><br>The little bird came <strong>hop, hop, hop</strong>.",
    marks: 1,
    rubric: [{ key: "Hop, hop, hop", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Child's Call",
    q: "What did the child cry out to the bird?",
    ans: "<strong>Model Answer:</strong><br>The child cried: <strong>'Little bird, will you stop, stop, stop?'</strong>",
    marks: 1,
    rubric: [{ key: "Stop, stop, stop quote", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Window Meeting",
    q: "Where was the child going, and what did he want to say?",
    ans: "<strong>Model Answer:</strong><br>The child was going to the <strong>window to say: 'How do you do?'</strong>",
    marks: 2,
    rubric: [{ key: "Going to the window", marks: "1 M" }, { key: "To say 'How do you do?'", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Bird's Reaction",
    q: "What did the little bird do when the child reached the window?",
    ans: "<strong>Model Answer:</strong><br>The little bird <strong>shook his little tail and far away he flew!</strong>",
    marks: 2,
    rubric: [{ key: "Shook his little tail", marks: "1 M" }, { key: "Far away he flew", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Hop<br>(b) Do",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Hop</strong>: Stop, Top, Mop, Pop.<br>(b) Rhyme with <strong>Do</strong>: You, Blue, To, Through.",
    marks: 2,
    rubric: [{ key: "Hop rhyme", marks: "1 M" }, { key: "Do rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Bird Watching",
    q: "Have you seen birds hopping on the grass near your home or school? Name two such birds.",
    ans: "<strong>Model Answer:</strong><br>Yes! <strong>Sparrows, pigeons, and mynas</strong> frequently hop on the ground looking for grains and seeds.",
    marks: 2,
    rubric: [{ key: "Two birds named correctly", marks: "2 M" }]
  },
  {
    category: "Let us Speak • Sound of Birds",
    q: "What sound does a little sparrow make?",
    ans: "<strong>Model Answer:</strong><br>A sparrow chirps: <strong>'Chirp, chirp! Cheep, cheep!'</strong>",
    marks: 1,
    rubric: [{ key: "Chirp chirp sound", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct poem words:<br>(a) Once I saw a little bird come _______ (hop, hop, hop / run, run, run).<br>(b) I was going to the window to say: 'How do you _______ (do / be)?'<br>(c) But he shook his little _______ (tail / wing) and far away he flew.",
    ans: "<strong>Model Answer:</strong><br>(a) Once I saw a little bird come <strong>hop, hop, hop</strong>.<br>(b) I was going to the window to say: 'How do you <strong>do</strong>?'<br>(c) But he shook his little <strong>tail</strong> and far away he flew.",
    marks: 3,
    rubric: [{ key: "hop, hop, hop", marks: "1 M" }, { key: "do", marks: "1 M" }, { key: "tail", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) B _ R D<br>(b) W _ N D O W<br>(c) T _ I L",
    ans: "<strong>Model Answer:</strong><br>(a) B <strong>I</strong> R D (BIRD)<br>(b) W <strong>I</strong> N D O W (WINDOW)<br>(c) T <strong>A</strong> I L (TAIL)",
    marks: 3,
    rubric: [{ key: "BIRD", marks: "1 M" }, { key: "WINDOW", marks: "1 M" }, { key: "TAIL", marks: "1 M" }]
  },
  {
    category: "Let us Write • Opposites",
    q: "Write the opposite word for:<br>(a) Little &rarr; ________<br>(b) Stop &rarr; ________<br>(c) Far &rarr; ________",
    ans: "<strong>Model Answer:</strong><br>(a) Little &rarr; <strong>Big</strong><br>(b) Stop &rarr; <strong>Go / Start</strong><br>(c) Far &rarr; <strong>Near</strong>",
    marks: 3,
    rubric: [{ key: "Big", marks: "1 M" }, { key: "Go / Start", marks: "1 M" }, { key: "Near", marks: "1 M" }]
  },
  {
    category: "True or False • Poem Facts",
    q: "State True or False:<br>(a) The bird came swimming in a pond.<br>(b) The child wanted to say hello politely to the bird.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>False.</strong> The bird came hopping.<br>(b) <strong>True.</strong> The child went to the window to say 'How do you do?'",
    marks: 2,
    rubric: [{ key: "(a) False", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
  },
  {
    category: "Let us Do • Action Recitation",
    q: "Show how a bird flaps its wings and flies. What body parts do birds have that humans do not have?",
    ans: "<strong>Model Answer:</strong><br>Birds have <strong>wings, feathers, and a beak</strong>, which humans do not have.",
    marks: 2,
    rubric: [{ key: "Wings / feathers", marks: "1 M" }, { key: "Beak", marks: "1 M" }]
  },
  {
    category: "Think and Share • Care for Birds",
    q: "What can we put in our balcony or garden to help thirsty birds during summer?",
    ans: "<strong>Model Answer:</strong><br>We can place a <strong>small clay bowl of fresh water and some grains/seeds</strong>.",
    marks: 1,
    rubric: [{ key: "Bowl of water and grains", marks: "1 M" }]
  },
  {
    category: "Let us Write • Sentence Formation",
    q: "Make a sentence using the word 'BIRD'.",
    ans: "<strong>Model Answer:</strong><br><strong>The sweet bird is singing on the tree branch.</strong>",
    marks: 1,
    rubric: [{ key: "Correct grammatical sentence", marks: "1 M" }]
  }
];

const ch8Questions = [
  {
    category: "Reading Comprehension • Story Hero",
    q: "Who was Mittu, and what did he look like in 'Mittu and the Yellow Mango'?",
    ans: "<strong>Model Answer:</strong><br>Mittu was a <strong>green parrot with a bright red beak</strong>.",
    marks: 2,
    rubric: [{ key: "Green parrot", marks: "1 M" }, { key: "Red beak", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Favourite Activity",
    q: "What did Mittu love to do?",
    ans: "<strong>Model Answer:</strong><br>Mittu <strong>loved to fly</strong> high in the sky.",
    marks: 1,
    rubric: [{ key: "Loved to fly", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Discovery",
    q: "What did Mittu see on a tree when he looked down while flying?",
    ans: "<strong>Model Answer:</strong><br>Mittu saw a <strong>big yellow mango</strong> hanging on a tree.",
    marks: 1,
    rubric: [{ key: "Big yellow mango", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Crow's Shout",
    q: "Who lived on the mango tree, and what did he shout at Mittu?",
    ans: "<strong>Model Answer:</strong><br>A big black crow shouted: <strong>'Caw, caw, go away! This is my tree!'</strong>",
    marks: 2,
    rubric: [{ key: "Big black crow", marks: "1 M" }, { key: "Shouted 'Caw, caw, go away!'", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Mittu's Reaction",
    q: "How did Mittu feel when the crow shouted with a loud, harsh voice?",
    ans: "<strong>Model Answer:</strong><br>Mittu was <strong>afraid of the crow and flew away</strong>.",
    marks: 1,
    rubric: [{ key: "Afraid and flew away", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Clever Plan",
    q: "What did Mittu see under another tree that gave him a clever idea?",
    ans: "<strong>Model Answer:</strong><br>Mittu saw a <strong>red balloon</strong> lying under a tree.",
    marks: 1,
    rubric: [{ key: "Red balloon under tree", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Trick",
    q: "How did Mittu carry the red balloon to the mango tree?",
    ans: "<strong>Model Answer:</strong><br>He carefully picked up the balloon by its string <strong>in his red beak</strong> without bursting it.",
    marks: 2,
    rubric: [{ key: "Picked by string in beak", marks: "1 M" }, { key: "Flew behind the tree carefully", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Pop Sound",
    q: "What did Mittu do behind the crow, and what sound did it make?",
    ans: "<strong>Model Answer:</strong><br>Mittu pecked the balloon with his red beak. It burst with a loud: <strong>'POP!'</strong>",
    marks: 2,
    rubric: [{ key: "Pecked balloon with beak", marks: "1 M" }, { key: "Burst with loud 'POP'", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Crow's Fear",
    q: "What did the crow think when the balloon popped, and what did he do?",
    ans: "<strong>Model Answer:</strong><br>The crow thought: <strong>'A big gun is after me!'</strong> He screamed 'Caw!' and flew away, never to return.",
    marks: 2,
    rubric: [{ key: "Thought a big gun was firing", marks: "1 M" }, { key: "Flew away in fear", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Reward",
    q: "What did Mittu do after the crow flew away?",
    ans: "<strong>Model Answer:</strong><br>Mittu came to the tree and <strong>ate the big, delicious yellow mango</strong> ('Yummy, yummy! What a nice mango!').",
    marks: 2,
    rubric: [{ key: "Came to tree", marks: "1 M" }, { key: "Ate delicious mango happily", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Crow<br>(b) Pop<br>(c) Tree",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Crow</strong>: Blow, Grow, Slow, Know.<br>(b) Rhyme with <strong>Pop</strong>: Hop, Stop, Top, Drop.<br>(c) Rhyme with <strong>Tree</strong>: See, Free, Three, Bee.",
    marks: 3,
    rubric: [{ key: "Crow rhyme", marks: "1 M" }, { key: "Pop rhyme", marks: "1 M" }, { key: "Tree rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct story words:<br>(a) Mittu was a green _______ (parrot / pigeon).<br>(b) The crow was _______ (black / white) and had a loud voice.<br>(c) Mittu found a red _______ (balloon / ball) under a tree.",
    ans: "<strong>Model Answer:</strong><br>(a) Mittu was a green <strong>parrot</strong>.<br>(b) The crow was <strong>black</strong> and had a loud voice.<br>(c) Mittu found a red <strong>balloon</strong> under a tree.",
    marks: 3,
    rubric: [{ key: "parrot", marks: "1 M" }, { key: "black", marks: "1 M" }, { key: "balloon", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) P A R R _ T<br>(b) M A N G _<br>(c) B A L L _ _ N",
    ans: "<strong>Model Answer:</strong><br>(a) P A R R <strong>O</strong> T (PARROT)<br>(b) M A N G <strong>O</strong> (MANGO)<br>(c) B A L L <strong>O O</strong> N (BALLOON)",
    marks: 3,
    rubric: [{ key: "PARROT", marks: "1 M" }, { key: "MANGO", marks: "1 M" }, { key: "BALLOON", marks: "1 M" }]
  },
  {
    category: "True or False • Story Facts",
    q: "State True or False:<br>(a) Mittu was a selfish, rude bird.<br>(b) Mittu used his intelligence to chase away the loud crow.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>False.</strong> Mittu was a clever, gentle parrot.<br>(b) <strong>True.</strong> He used his cleverness with the balloon.",
    marks: 2,
    rubric: [{ key: "(a) False", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
  },
  {
    category: "Think and Share • Moral of the Story",
    q: "What does Mittu's story teach us about dealing with loud bullies?",
    ans: "<strong>Model Answer:</strong><br>It teaches us that <strong>clever thinking and calm planning</strong> can overcome big, loud bullies without fighting.",
    marks: 2,
    rubric: [{ key: "Clever thinking overcomes bullies", marks: "2 M" }]
  }
];

const ch9Questions = [
  {
    category: "Reading Comprehension • Poem Opening",
    q: "What ride did the child climb up on in the poem 'Merry-Go-Round'?",
    ans: "<strong>Model Answer:</strong><br>The child climbed up on the <strong>merry-go-round</strong>.",
    marks: 1,
    rubric: [{ key: "Merry-go-round", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Movement of Ride",
    q: "How did the merry-go-round move?",
    ans: "<strong>Model Answer:</strong><br>It went <strong>round and round</strong>.",
    marks: 1,
    rubric: [{ key: "Round and round", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Ride Animal",
    q: "What did the child climb upon on the merry-go-round?",
    ans: "<strong>Model Answer:</strong><br>The child climbed up on a <strong>big brown wooden horse</strong>.",
    marks: 1,
    rubric: [{ key: "Big brown horse", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Horse Movement",
    q: "How did the big brown horse move?",
    ans: "<strong>Model Answer:</strong><br>It went <strong>up and down</strong>.",
    marks: 1,
    rubric: [{ key: "Up and down", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Joyful Motion",
    q: "Recite the line describing the combined motion of the ride.",
    ans: "<strong>Model Answer:</strong><br><strong>'Around and round, and up and down, around and round, and up and down!'</strong>",
    marks: 1,
    rubric: [{ key: "Around and round and up and down", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • High Riding",
    q: "Where did the child sit while riding?",
    ans: "<strong>Model Answer:</strong><br>The child <strong>sat up high</strong> on the big brown horse.",
    marks: 1,
    rubric: [{ key: "Sat up high", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Round<br>(b) Down<br>(c) Brown",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Round</strong>: Ground, Sound, Bound, Found.<br>(b) Rhyme with <strong>Down</strong>: Town, Clown, Crown.<br>(c) Rhyme with <strong>Brown</strong>: Drown, Frown, Town.",
    marks: 3,
    rubric: [{ key: "Round rhyme", marks: "1 M" }, { key: "Down rhyme", marks: "1 M" }, { key: "Brown rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct poem words:<br>(a) I climbed up on the merry-go-round and it went _______ (round and round / fast and slow).<br>(b) I climbed up on a big brown _______ (horse / elephant).<br>(c) And it went _______ (up and down / backwards).",
    ans: "<strong>Model Answer:</strong><br>(a) I climbed up on the merry-go-round and it went <strong>round and round</strong>.<br>(b) I climbed up on a big brown <strong>horse</strong>.<br>(c) And it went <strong>up and down</strong>.",
    marks: 3,
    rubric: [{ key: "round and round", marks: "1 M" }, { key: "horse", marks: "1 M" }, { key: "up and down", marks: "1 M" }]
  },
  {
    category: "Let us Write • Opposites",
    q: "Write the opposite word for:<br>(a) Up &rarr; ________<br>(b) High &rarr; ________<br>(c) Big &rarr; ________",
    ans: "<strong>Model Answer:</strong><br>(a) Up &rarr; <strong>Down</strong><br>(b) High &rarr; <strong>Low</strong><br>(c) Big &rarr; <strong>Small</strong>",
    marks: 3,
    rubric: [{ key: "Down", marks: "1 M" }, { key: "Low", marks: "1 M" }, { key: "Small", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) H _ R S E<br>(b) R _ U N D<br>(c) D _ W N",
    ans: "<strong>Model Answer:</strong><br>(a) H <strong>O</strong> R S E (HORSE)<br>(b) R <strong>O</strong> U N D (ROUND)<br>(c) D <strong>O</strong> W N (DOWN)",
    marks: 3,
    rubric: [{ key: "HORSE", marks: "1 M" }, { key: "ROUND", marks: "1 M" }, { key: "DOWN", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Fair Experience",
    q: "Have you ever sat on a merry-go-round in a village fair or park? How did it feel?",
    ans: "<strong>Model Answer:</strong><br>Yes! It felt <strong>very exciting, breezy, and dizzy with laughter</strong> as the world spun around.",
    marks: 1,
    rubric: [{ key: "Personal fair experience", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Shapes in Rides",
    q: "What geometric shape path does the merry-go-round follow as it turns?",
    ans: "<strong>Model Answer:</strong><br>It turns in a <strong>circle (round shape)</strong>.",
    marks: 1,
    rubric: [{ key: "Circle / circular path", marks: "1 M" }]
  },
  {
    category: "True or False • Poem Facts",
    q: "State True or False:<br>(a) The horse on the merry-go-round was made of wood and painted brown.<br>(b) The ride went straight in a long line without turning.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>True.</strong> It was a big brown wooden horse.<br>(b) <strong>False.</strong> It went round and round in a circle.",
    marks: 2,
    rubric: [{ key: "(a) True", marks: "1 M" }, { key: "(b) False", marks: "1 M" }]
  },
  {
    category: "Let us Do • Action and Drawing",
    q: "Draw circles on paper starting small and going bigger and bigger. What is this round pattern called?",
    ans: "<strong>Model Answer:</strong><br>This pattern of concentric round circles is called a <strong>spiral / concentric circles</strong>.",
    marks: 1,
    rubric: [{ key: "Spiral / circles identified", marks: "1 M" }]
  },
  {
    category: "Think and Share • Amusement Rides",
    q: "Name two other rides you see in a children's amusement park or mela.",
    ans: "<strong>Model Answer:</strong><br><strong>Giant Wheel (Ferris Wheel) and Toy Train</strong> (or roller coaster / bumper cars).",
    marks: 2,
    rubric: [{ key: "Two rides named correctly", marks: "2 M" }]
  }
];

const ch10Questions = [
  {
    category: "Reading Comprehension • Story Characters",
    q: "Who were sitting together drawing pictures in the story 'Circle'?",
    ans: "<strong>Model Answer:</strong><br><strong>Mohini and her Grandmother</strong> were sitting together.",
    marks: 1,
    rubric: [{ key: "Mohini and Grandmother", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • First Drawing",
    q: "What shape did Grandmother draw first on the paper?",
    ans: "<strong>Model Answer:</strong><br>Grandmother drew a <strong>circle</strong>.",
    marks: 1,
    rubric: [{ key: "A circle", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Transformation 1",
    q: "What did Grandmother turn the circle into, and how?",
    ans: "<strong>Model Answer:</strong><br>She drew <strong>three lines on the circle</strong> and turned it into a <strong>ball</strong>!",
    marks: 2,
    rubric: [{ key: "Drew three lines", marks: "1 M" }, { key: "Turned into a ball", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Mohini's Turn",
    q: "What did Mohini draw after seeing Grandmother's ball?",
    ans: "<strong>Model Answer:</strong><br>Mohini drew three lines on her circle and made a <strong>real ball that really bounced</strong>!",
    marks: 1,
    rubric: [{ key: "Drew a ball that bounced", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Transformation 2",
    q: "What did Grandmother draw next from a circle?",
    ans: "<strong>Model Answer:</strong><br>Grandmother added a <strong>zig-zag line to the circle</strong> and made a <strong>balloon</strong>!",
    marks: 2,
    rubric: [{ key: "Added zig-zag line", marks: "1 M" }, { key: "Made a balloon", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Colorful Balloons",
    q: "What colours of balloons did Mohini draw all over her paper?",
    ans: "<strong>Model Answer:</strong><br>Mohini drew <strong>red, blue, green, and yellow balloons</strong>.",
    marks: 2,
    rubric: [{ key: "Red, blue, green, yellow", marks: "2 M" }]
  },
  {
    category: "Reading Comprehension • Other Circle Objects",
    q: "What other round things did Mohini draw using circles?",
    ans: "<strong>Model Answer:</strong><br>Mohini drew a <strong>wheel, the moon, the sun, a rabbit, and her own face</strong>!",
    marks: 2,
    rubric: [{ key: "Wheel, moon, sun", marks: "1 M" }, { key: "Rabbit and her own face", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Round Objects Around Us",
    q: "Look around your classroom or kitchen. Name three things that are round like a circle.",
    ans: "<strong>Model Answer:</strong><br>A <strong>clock, a dinner plate, a coin, and a chapati (roti)</strong> are round like a circle.",
    marks: 2,
    rubric: [{ key: "Three round objects named", marks: "2 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Ball<br>(b) Moon<br>(c) Sun",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Ball</strong>: Call, Fall, Tall, Wall.<br>(b) Rhyme with <strong>Moon</strong>: Soon, Spoon, Noon.<br>(c) Rhyme with <strong>Sun</strong>: Fun, Run, Bun.",
    marks: 3,
    rubric: [{ key: "Ball rhyme", marks: "1 M" }, { key: "Moon rhyme", marks: "1 M" }, { key: "Sun rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct story words:<br>(a) Grandmother drew a _______ (circle / square).<br>(b) Grandmother drew three lines on the circle to make a _______ (ball / book).<br>(c) Mohini drew a zig-zag line to make a _______ (balloon / snake).",
    ans: "<strong>Model Answer:</strong><br>(a) Grandmother drew a <strong>circle</strong>.<br>(b) Grandmother drew three lines on the circle to make a <strong>ball</strong>.<br>(c) Mohini drew a zig-zag line to make a <strong>balloon</strong>.",
    marks: 3,
    rubric: [{ key: "circle", marks: "1 M" }, { key: "ball", marks: "1 M" }, { key: "balloon", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) C _ R C L E<br>(b) B _ L L<br>(c) M _ _ N",
    ans: "<strong>Model Answer:</strong><br>(a) C <strong>I</strong> R C L E (CIRCLE)<br>(b) B <strong>A</strong> L L (BALL)<br>(c) M <strong>O O</strong> N (MOON)",
    marks: 3,
    rubric: [{ key: "CIRCLE", marks: "1 M" }, { key: "BALL", marks: "1 M" }, { key: "MOON", marks: "1 M" }]
  },
  {
    category: "Let us Write • Shapes Matching",
    q: "Match the shape with the object:<br>1. Circle &emsp;&emsp; (A) Blackboard / Book<br>2. Square &emsp;&emsp; (B) Full moon / Coin<br>3. Triangle &emsp; (C) Slice of pizza / Samosa",
    ans: "<strong>Model Answer:</strong><br>• 1. Circle &rarr; <strong>(B) Full moon / Coin</strong><br>• 2. Square &rarr; <strong>(A) Blackboard / Book</strong><br>• 3. Triangle &rarr; <strong>(C) Slice of pizza / Samosa</strong>",
    marks: 2,
    rubric: [{ key: "All 3 shapes correctly matched", marks: "2 M" }]
  },
  {
    category: "True or False • Story Facts",
    q: "State True or False:<br>(a) Mohini could not draw a circle even after trying.<br>(b) Mohini drew her own face using a circle.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>False.</strong> Mohini drew many beautiful circles.<br>(b) <strong>True.</strong> She drew eyes, nose, mouth and made her own face.",
    marks: 2,
    rubric: [{ key: "(a) False", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
  },
  {
    category: "Let us Do • Creative Drawing",
    q: "How can you turn a circle into a smiling sun?",
    ans: "<strong>Model Answer:</strong><br>Draw a circle, draw eyes and a smiling mouth inside, and draw straight rays of sunshine all around the edge!",
    marks: 1,
    rubric: [{ key: "Clear steps to draw smiling sun", marks: "1 M" }]
  },
  {
    category: "Think and Share • Family Bonding",
    q: "What do you like to draw or make when sitting with your grandmother or grandfather?",
    ans: "<strong>Model Answer:</strong><br>I like to draw <strong>flowers, animals, and houses</strong>, and listen to interesting childhood stories from them.",
    marks: 1,
    rubric: [{ key: "Thoughtful child response", marks: "1 M" }]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    marigoldPart1: [
      ch1Questions, ch2Questions, ch3Questions, ch4Questions, ch5Questions,
      ch6Questions, ch7Questions, ch8Questions, ch9Questions, ch10Questions
    ]
  };
}
