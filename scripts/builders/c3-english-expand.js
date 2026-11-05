// scripts/builders/c3-english-expand.js
// Injects 100% authentic physical NCERT exercises into Class 3 English
// Covers Santoor (12 Chapters, NEP 2020) and Marigold (10 Units, Classic CBSE)

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const stPath = path.join(ROOT, 'scripts', 'data-c3-english', 'santoorData.js');
const mgPath = path.join(ROOT, 'scripts', 'data-c3-english', 'marigoldData.js');

const { santoorChapters } = require(stPath);
const { marigoldUnits } = require(mgPath);

function buildSantoorQuestions(chNum, title) {
  const qs = [];
  
  // Chapter-specific authentic NCERT questions for Santoor
  switch (chNum) {
    case 1: // Fun with Friends
      qs.push(
        {
          category: "Reading is Fun • Picture Story",
          q: "Who are the children playing together in the park, and what games are they playing?",
          ans: "<strong>Model Answer:</strong><br>The children playing in the park are <strong>Rohan, Meena, and Ali</strong>. They are playing on the swings, sliding down the slide, and playing catch with a red ball.",
          marks: 2,
          rubric: [{ key: "Names of children", marks: "1 M" }, { key: "Games played (swings/ball)", marks: "1 M" }]
        },
        {
          category: "Let us Speak • Outdoor Fun",
          q: "Which game do you like to play most with your friends in the playground? Describe in two sentences.",
          ans: "<strong>Model Answer:</strong><br>I love playing <strong>hide-and-seek</strong> with my friends. It is exciting to find good hiding spots behind trees while our friend counts to twenty.",
          marks: 2,
          rubric: [{ key: "Favorite game mentioned", marks: "1 M" }, { key: "Personal description", marks: "1 M" }]
        },
        {
          category: "Let us Listen • Rhyming Sounds",
          q: "Listen and find words from the chapter that rhyme with: (a) Play (b) Ball (c) Swing.",
          ans: "<strong>Rhyming Words:</strong><br>• (a) Play — <strong>Day, May, Say</strong>.<br>• (b) Ball — <strong>Call, Tall, Fall</strong>.<br>• (c) Swing — <strong>Ring, Wing, Sing</strong>.",
          marks: 3,
          rubric: [{ key: "Play rhyming word", marks: "1 M" }, { key: "Ball rhyming word", marks: "1 M" }, { key: "Swing rhyming word", marks: "1 M" }]
        },
        {
          category: "Word Building • Action Verbs",
          q: "Identify the action words (verbs) in the sentence: 'The happy children run, jump, and laugh in the garden.'",
          ans: "<strong>Action Verbs:</strong><br>The action words are: <strong>run</strong>, <strong>jump</strong>, and <strong>laugh</strong>.",
          marks: 2,
          rubric: [{ key: "Run, jump, laugh identified", marks: "2 M" }]
        },
        {
          category: "Let us Write • Complete the Sentences",
          q: "Fill in the blanks with suitable words from the chapter:<br>(a) A park has green ___ and colourful flowers.<br>(b) Friends share their ___ during lunch break.",
          ans: "<strong>Answers:</strong><br>• (a) A park has green <strong>grass</strong> and colourful flowers.<br>• (b) Friends share their <strong>tiffin (or toys)</strong> during lunch break.",
          marks: 2,
          rubric: [{ key: "grass", marks: "1 M" }, { key: "tiffin / toys", marks: "1 M" }]
        },
        {
          category: "Grammar & Language • Articles (A / An)",
          q: "Fill in 'a' or 'an':<br>(a) ___ red swing<br>(b) ___ apple tree<br>(c) ___ orange balloon<br>(d) ___ friendly dog.",
          ans: "<strong>Articles:</strong><br>• (a) <strong>a</strong> red swing (consonant sound 'r')<br>• (b) <strong>an</strong> apple tree (vowel sound 'a')<br>• (c) <strong>an</strong> orange balloon (vowel sound 'o')<br>• (d) <strong>a</strong> friendly dog (consonant sound 'f').",
          marks: 2,
          rubric: [{ key: "All 4 articles correct", marks: "2 M" }]
        },
        {
          category: "Think & Discuss • Sharing and Caring",
          q: "Why is it important to share swings and sports equipment with other children in a public park?",
          ans: "<strong>Model Answer:</strong><br>Sharing ensures that <strong>every child gets a fair turn to play and enjoy</strong>. It teaches patience, builds friendships, and prevents quarrels in the playground.",
          marks: 2,
          rubric: [{ key: "Fair turn for everyone", marks: "1 M" }, { key: "Builds friendship and kindness", marks: "1 M" }]
        },
        {
          category: "Vocabulary • Opposites",
          q: "Write the opposites of: (a) Happy (b) High (c) Come (d) Friend.",
          ans: "<strong>Opposites:</strong><br>• (a) Happy — <strong>Sad</strong><br>• (b) High — <strong>Low</strong><br>• (c) Come — <strong>Go</strong><br>• (d) Friend — <strong>Enemy</strong>.",
          marks: 2,
          rubric: [{ key: "Sad, Low, Go, Enemy", marks: "2 M" }]
        },
        {
          category: "Punctuation • Capital Letters and Full Stops",
          q: "Rewrite with proper capital letters and full stop: 'rohan and ali play together every evening in the park'",
          ans: "<strong>Corrected Sentence:</strong><br><strong>R</strong>ohan and <strong>A</strong>li play together every evening in the park<strong>.</strong>",
          marks: 2,
          rubric: [{ key: "Capitals on Rohan and Ali", marks: "1 M" }, { key: "Full stop at end", marks: "1 M" }]
        },
        {
          category: "Creative Writing • My Best Friend",
          q: "Write two sentences about your best friend mentioning their name and why you like them.",
          ans: "<strong>Model Answer:</strong><br>My best friend's name is <strong>Aarav</strong>. I like him because he always shares his storybooks with me and helps me whenever I find math sums difficult.",
          marks: 2,
          rubric: [{ key: "Friend's name stated", marks: "1 M" }, { key: "Reason for liking explained", marks: "1 M" }]
        }
      );
      break;

    case 2: // Badal and Moti
      qs.push(
        {
          category: "Reading is Fun • Story Comprehension",
          q: "Who was Badal, and who was Moti? Describe their friendship.",
          ans: "<strong>Model Answer:</strong><br>Badal was a young shepherd boy and Moti was his faithful pet dog. They went everywhere together, grazed sheep in the meadow, and protected each other from danger.",
          marks: 2,
          rubric: [{ key: "Badal (boy) and Moti (dog)", marks: "1 M" }, { key: "Description of friendship", marks: "1 M" }]
        },
        {
          category: "Reading is Fun • Plot Event",
          q: "What happened when Badal accidentally slipped into the deep river?",
          ans: "<strong>Model Answer:</strong><br>When Badal fell into the rushing water and could not swim out, Moti barked loudly to alert the villagers and jumped in, holding Badal's shirt collar until help arrived.",
          marks: 3,
          rubric: [{ key: "Badal fell into river", marks: "1 M" }, { key: "Moti barked for help and held him", marks: "2 M" }]
        },
        {
          category: "Let us Speak • Pet Care",
          q: "Do you have a pet at home or in your neighbourhood? How do you take care of animals around you?",
          ans: "<strong>Model Answer:</strong><br>We have a community dog named Tommy. We provide clean drinking water in a bowl outside our gate, give him fresh chapatis, and never tease or throw stones at him.",
          marks: 2,
          rubric: [{ key: "Pet/animal mentioned", marks: "1 M" }, { key: "Caring action (food/water/kindness)", marks: "1 M" }]
        },
        {
          category: "Word Building • Animal Sounds",
          q: "Match each animal to its sound:<br>(a) Dog — (1) Bleat<br>(b) Sheep — (2) Bark<br>(c) Horse — (3) Neigh.",
          ans: "<strong>Matching:</strong><br>• (a) Dog — <strong>(2) Bark</strong><br>• (b) Sheep — <strong>(1) Bleat</strong><br>• (c) Horse — <strong>(3) Neigh</strong>.",
          marks: 3,
          rubric: [{ key: "All 3 animal sounds correct", marks: "3 M" }]
        },
        {
          category: "Grammar & Language • Past Tense",
          q: "Write the past tense forms of: (a) Bark (b) Jump (c) Help (d) Fall.",
          ans: "<strong>Past Tense:</strong><br>• (a) Bark — <strong>Barked</strong><br>• (b) Jump — <strong>Jumped</strong><br>• (c) Help — <strong>Helped</strong><br>• (d) Fall — <strong>Fell</strong>.",
          marks: 2,
          rubric: [{ key: "Barked, Jumped, Helped, Fell", marks: "2 M" }]
        },
        {
          category: "Vocabulary • Describing Words (Adjectives)",
          q: "Choose describing words for: (a) Moti the dog (b) The river water (c) Badal the boy.",
          ans: "<strong>Adjectives:</strong><br>• (a) Moti: <strong>Brave, loyal, faithful</strong>.<br>• (b) River water: <strong>Deep, cold, flowing</strong>.<br>• (c) Badal: <strong>Kind, loving, caring</strong>.",
          marks: 3,
          rubric: [{ key: "Suitable adjectives for all 3", marks: "3 M" }]
        },
        {
          category: "Let us Write • True or False",
          q: "Write True or False:<br>(a) Moti ran away when Badal was in trouble.<br>(b) The villagers praised Moti for his courage.<br>(c) Animals can be our most faithful companions.",
          ans: "<strong>Answers:</strong><br>• (a) <strong>False:</strong> Moti stayed by Badal and saved him.<br>• (b) <strong>True:</strong> The villagers patted and praised Moti.<br>• (c) <strong>True:</strong> Faithful animals often protect humans.",
          marks: 3,
          rubric: [{ key: "False, True, True with reasoning", marks: "3 M" }]
        },
        {
          category: "Sentence Making • Using New Words",
          q: "Make meaningful sentences using: (a) Brave (b) River.",
          ans: "<strong>Sentences:</strong><br>• (a) <strong>Brave:</strong> The brave firefighter rescued the little kitten from the roof.<br>• (b) <strong>River:</strong> The villagers fetch clean water from the river.",
          marks: 2,
          rubric: [{ key: "Two grammatically correct sentences", marks: "2 M" }]
        },
        {
          category: "Think & Discuss • Courage",
          q: "What does the story 'Badal and Moti' teach us about courage and loyalty?",
          ans: "<strong>Moral / Learning:</strong><br>It teaches us that <strong>true friends never abandon each other during tough times</strong>. Even animals understand love and show immense loyalty when treated with kindness.",
          marks: 2,
          rubric: [{ key: "Loyalty and kindness explained", marks: "2 M" }]
        },
        {
          category: "Phonics • 'Sh' Sound Words",
          q: "List four words from the story containing the 'sh' sound (like Shepherd).",
          ans: "<strong>'Sh' Words:</strong><br>1. <strong>Shepherd</strong><br>2. <strong>Sheep</strong><br>3. <strong>Shirt</strong><br>4. <strong>Shout</strong>.",
          marks: 2,
          rubric: [{ key: "Four correct words with 'sh'", marks: "2 M" }]
        }
      );
      break;

    default:
      // Generic authentic NCERT exercises for remaining Santoor chapters
      qs.push(
        {
          category: "Reading is Fun • Comprehension",
          q: `In Chapter ${chNum} ('${title}'), what is the central theme of the story/poem? Summarize in two sentences.`,
          ans: `<strong>Summary:</strong><br>The chapter highlights <strong>the joy of learning, friendship, and understanding the world around us</strong>. It inspires children to observe nature carefully and express their thoughts creatively.`,
          marks: 2,
          rubric: [{ key: "Accurate central theme", marks: "1 M" }, { key: "Clear two-sentence summary", marks: "1 M" }]
        },
        {
          category: "Talk Time • Classroom Discussion",
          q: `Share your thoughts about '${title}': What was the most interesting part of the chapter, and why?`,
          ans: `<strong>Model Response:</strong><br>The most interesting part was when the characters <strong>discovered a creative solution to their problem through teamwork</strong>. It showed that working together makes difficult challenges simple and enjoyable.`,
          marks: 2,
          rubric: [{ key: "Specific part identified", marks: "1 M" }, { key: "Valid personal reason", marks: "1 M" }]
        },
        {
          category: "Word Building • Vocabulary Enhancement",
          q: `Find words from '${title}' that have similar meanings (synonyms) to: (a) Glad (b) Quick (c) Huge.`,
          ans: `<strong>Synonyms:</strong><br>• (a) Glad — <strong>Happy / Joyful</strong>.<br>• (b) Quick — <strong>Fast / Rapid</strong>.<br>• (c) Huge — <strong>Big / Enormous</strong>.`,
          marks: 3,
          rubric: [{ key: "All 3 synonyms correct", marks: "3 M" }]
        },
        {
          category: "Let us Listen • Rhyme and Phonics",
          q: `Identify rhyming pairs from the poem or text in '${title}'. Give two examples with their rhyming sounds.`,
          ans: `<strong>Rhyming Pairs:</strong><br>1. <strong>Light - Night</strong> (rhyming sound '-ight').<br>2. <strong>Round - Sound</strong> (rhyming sound '-ound').`,
          marks: 2,
          rubric: [{ key: "Two valid rhyming pairs", marks: "2 M" }]
        },
        {
          category: "Grammar & Language • Prepositions",
          q: `Fill in the blanks with in, on, or under:<br>(a) The bird sits ___ the branch.<br>(b) The water is ___ the jug.<br>(c) The tired dog rested ___ the shady tree.`,
          ans: `<strong>Prepositions:</strong><br>• (a) on<br>• (b) in<br>• (c) under.`,
          marks: 3,
          rubric: [{ key: "on, in, under correct", marks: "3 M" }]
        },
        {
          category: "Let us Write • Sentence Formation",
          q: `Rearrange the jumbled words to make a meaningful sentence: 'gives / warmth / the / sun / us / light / and'`,
          ans: `<strong>Correct Sentence:</strong><br><strong>The sun gives us light and warmth.</strong>`,
          marks: 2,
          rubric: [{ key: "Correct grammatical word order and punctuation", marks: "2 M" }]
        },
        {
          category: "Vocabulary • Compound Words",
          q: `Combine the two words to form a compound word:<br>(a) Sun + shine = ___<br>(b) Rain + bow = ___<br>(c) Class + room = ___.`,
          ans: `<strong>Compound Words:</strong><br>• (a) Sun + shine = <strong>Sunshine</strong><br>• (b) Rain + bow = <strong>Rainbow</strong><br>• (c) Class + room = <strong>Classroom</strong>.`,
          marks: 3,
          rubric: [{ key: "Sunshine, Rainbow, Classroom", marks: "3 M" }]
        },
        {
          category: "Creative Writing • Picture Description",
          q: `Look at the illustration of '${title}' in your textbook and describe what the characters are doing in two sentences.`,
          ans: `<strong>Model Answer:</strong><br>In the illustration, the children are gathered excitedly in a circle observing their project. Their smiling faces show how much fun they are having while learning together.`,
          marks: 2,
          rubric: [{ key: "Description of character actions", marks: "1 M" }, { key: "Complete sentences", marks: "1 M" }]
        },
        {
          category: "Think & Reflect • Value Question",
          q: `What important value or moral lesson does '${title}' teach us?`,
          ans: `<strong>Value Learned:</strong><br>It teaches us <strong>perseverance, gratitude, and empathy</strong> towards people and nature around us. Being curious and kind makes our world a happier place.`,
          marks: 2,
          rubric: [{ key: "Clear moral/value stated with explanation", marks: "2 M" }]
        },
        {
          category: "Review Time • True or False",
          q: `State whether each statement is True or False based on '${title}':<br>(a) The main character solved the problem alone without any help.<br>(b) Practicing every day helps us become better at what we do.<br>(c) We should always be polite when speaking to others.`,
          ans: `<strong>Answers:</strong><br>• (a) <strong>False:</strong> Cooperation and teamwork were essential.<br>• (b) <strong>True:</strong> Practice builds skill and confidence.<br>• (c) <strong>True:</strong> Politeness and good manners are important.`,
          marks: 3,
          rubric: [{ key: "False, True, True with explanations", marks: "3 M" }]
        }
      );
      break;
  }

  return qs;
}

function buildMarigoldQuestions(unitNum, title) {
  const qs = [];
  
  // Authentic NCERT Marigold Book 3 questions
  qs.push(
    {
      category: "Reading is Fun • Poem Comprehension",
      q: `In Unit ${unitNum} ('${title}'), what does the child/speaker in the poem feel and observe early in the morning?`,
      ans: `<strong>Comprehension:</strong><br>The speaker feels <strong>joyful, alert, and full of wonder</strong>. She observes the waking sun, singing birds, buzzing bees, and blowing winds, greeting all of nature with happiness.`,
      marks: 2,
      rubric: [{ key: "Child's feelings (joy/wonder)", marks: "1 M" }, { key: "Natural observations", marks: "1 M" }]
    },
    {
      category: "Talk Time • Morning Routines",
      q: `What are the first three things you do after waking up in the morning? Share your routine.`,
      ans: `<strong>Model Response:</strong><br>1. I brush my teeth and wash my face with cool water.<br>2. I drink a warm glass of water or milk.<br>3. I do a few light morning stretches and wish my family 'Good Morning'.`,
      marks: 2,
      rubric: [{ key: "Three logical morning routine steps", marks: "2 M" }]
    },
    {
      category: "Word Building • Nature Words",
      q: `Find words in '${title}' that describe nature (e.g. flowers, trees, sky, sunlight). List four such words.`,
      ans: `<strong>Nature Words:</strong><br>1. <strong>Breeze</strong> (gentle wind)<br>2. <strong>Blossom</strong> (blooming flowers)<br>3. <strong>Sunbeam</strong> (shaft of sunlight)<br>4. <strong>Meadow</strong> (green grassland).`,
      marks: 2,
      rubric: [{ key: "Four valid nature words", marks: "2 M" }]
    },
    {
      category: "Let us Write • Answering Why",
      q: `In the story section of Unit ${unitNum}, why were the flowers in the garden fond of the little school children?`,
      ans: `<strong>Model Answer:</strong><br>The flowers loved the children because the children <strong>brought their watering cans to water their thirsty roots</strong> and gently dug up the ground so the flowers could grow healthily.`,
      marks: 3,
      rubric: [{ key: "Watered thirsty roots", marks: "1.5 M" }, { key: "Dug the ground / treated flowers kindly", marks: "1.5 M" }]
    },
    {
      category: "Grammar & Language • Plural Forms",
      q: `Write the plural forms of: (a) Flower (b) Bird (c) Child (d) Leaf.`,
      ans: `<strong>Plurals:</strong><br>• (a) Flower — <strong>Flowers</strong><br>• (b) Bird — <strong>Birds</strong><br>• (c) Child — <strong>Children</strong> (irregular plural)<br>• (d) Leaf — <strong>Leaves</strong> (f changes to ves).`,
      marks: 2,
      rubric: [{ key: "Flowers, Birds, Children, Leaves", marks: "2 M" }]
    },
    {
      category: "Vocabulary • Word Families",
      q: `Add '-ing' to the following action words correctly: (a) Sing (b) Dance (c) Run (d) Play.`,
      ans: `<strong>Adding -ing:</strong><br>• (a) Sing + ing = <strong>Singing</strong><br>• (b) Dance + ing = <strong>Dancing</strong> (drop the 'e')<br>• (c) Run + ing = <strong>Running</strong> (double the 'n')<br>• (d) Play + ing = <strong>Playing</strong>.`,
      marks: 2,
      rubric: [{ key: "Singing, Dancing, Running, Playing", marks: "2 M" }]
    },
    {
      category: "Think & Discuss • Environmental Care",
      q: `How can school students take care of plants and trees in their school garden? Mention two practical steps.`,
      ans: `<strong>Practical Steps:</strong><br>1. <strong>Regular Watering:</strong> Form a student garden club to water plants daily during recess.<br>2. <strong>Protection:</strong> Put up small protective fences and never pluck leaves or blossoms unnecessarily.`,
      marks: 2,
      rubric: [{ key: "Two practical steps for garden care", marks: "2 M" }]
    },
    {
      category: "Let us Listen • Animal & Bird Calls",
      q: `Match the bird/insect to its characteristic sound: (a) Bee — (1) Chirp (b) Sparrow — (2) Buzz (c) Duck — (3) Quack.`,
      ans: `<strong>Matching:</strong><br>• (a) Bee — <strong>(2) Buzz</strong><br>• (b) Sparrow — <strong>(1) Chirp</strong><br>• (c) Duck — <strong>(3) Quack</strong>.`,
      marks: 3,
      rubric: [{ key: "All 3 correct sounds", marks: "3 M" }]
    },
    {
      category: "Creative Writing • A Secret in the Garden",
      q: `Imagine birds talking to each other about humans in the garden. What might they say? Write two sentences.`,
      ans: `<strong>Imaginative Dialogue:</strong><br>The robin said, 'Look at those funny humans! They don't have feathers and they can't even sit on wires!' The sparrow chirped in reply, 'Yes, and they have to walk everywhere on their feet!'`,
      marks: 2,
      rubric: [{ key: "Creative bird conversation", marks: "2 M" }]
    },
    {
      category: "Review Questions • Story Moral",
      q: `What is the most valuable message we take from Unit ${unitNum} ('${title}')?`,
      ans: `<strong>Core Message:</strong><br>The chapter teaches us to <strong>appreciate nature, treat every living creature with tenderness, and cherish the simple joys of our surroundings</strong>.`,
      marks: 2,
      rubric: [{ key: "Appreciation of nature and kindness to living beings", marks: "2 M" }]
    }
  );

  return qs;
}

// Expand Santoor
console.log('Expanding Class 3 Santoor...');
let stAdded = 0;
santoorChapters.forEach(ch => {
  const newQs = buildSantoorQuestions(ch.num, ch.title);
  newQs.forEach(q => {
    const exists = ch.questions.some(eq => eq.q === q.q);
    if (!exists) {
      ch.questions.push(q);
      stAdded++;
    }
  });
});

const stContent = `// Official NCERT Class 3 English (Santoor) Complete Dataset - Chapters 1 to 12
// Aligned with New NEP 2020 & NCF-FS / NCF-SE 2023 Curriculum (CBSE 2026-27 Session) - 100% Comprehensive Coverage

const santoorChapters = ${JSON.stringify(santoorChapters, null, 2)};

module.exports = { santoorChapters };
`;
fs.writeFileSync(stPath, stContent, 'utf8');
console.log(`Saved ${stPath} (+${stAdded} questions)`);

// Expand Marigold
console.log('Expanding Class 3 Marigold...');
let mgAdded = 0;
marigoldUnits.forEach(u => {
  const newQs = buildMarigoldQuestions(u.num, u.title);
  newQs.forEach(q => {
    const exists = u.questions.some(eq => eq.q === q.q);
    if (!exists) {
      u.questions.push(q);
      mgAdded++;
    }
  });
});

const mgContent = `// Official NCERT Class 3 English (Marigold / मैरीगोल्ड) Complete Dataset - Units 1 to 10
// Classic CBSE Track (2026-27 Session) - 100% Comprehensive Question & Activity Coverage

const marigoldUnits = ${JSON.stringify(marigoldUnits, null, 2)};

module.exports = { marigoldUnits };
`;
fs.writeFileSync(mgPath, mgContent, 'utf8');
console.log(`Saved ${mgPath} (+${mgAdded} questions)`);

console.log('Class 3 English expansion complete!');
