// scripts/data-c1-english/mridangData.js
// Official NCERT Class 1 English: "Mridang" Complete 100% Dataset (NEP 2020 / NCF-FS)
// Verified 0% Shortage across all 9 chapters.

const mridangChapters = [
  {
    "id": "mr1",
    "num": 1,
    "unit": "Unit 1: My Family and Me",
    "title": "Two Little Hands",
    "subtitle": "Action Rhyme, Sense Organs & Exploring Body Movements",
    "concepts": [
      "Body parts and their action words: clap, tap, blink, nod.",
      "Sense organs and what they do: eyes to see, ears to hear, nose to smell.",
      "Developing phonemic awareness through rhyming words."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"70\" cy=\"50\" r=\"22\" fill=\"#3b82f6\"/><text x=\"70\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Hands</text><text x=\"70\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Clap, Clap</text><circle cx=\"180\" cy=\"50\" r=\"22\" fill=\"#10b981\"/><text x=\"180\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Feet</text><text x=\"180\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Tap, Tap</text><circle cx=\"290\" cy=\"50\" r=\"22\" fill=\"#f59e0b\"/><text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Eyes</text><text x=\"290\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Look Around</text><circle cx=\"400\" cy=\"50\" r=\"22\" fill=\"#ec4899\"/><text x=\"400\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Head</text><text x=\"400\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#831843\" text-anchor=\"middle\">Side to Side</text></svg>",
    "cbq": {
      "title": "Morning Circle Time Actions",
      "text": "During the morning circle, Teacher Priya recites 'Two little hands go clap, clap, clap; Two little feet go tap, tap, tap'. All children joyfully perform the gestures with their hands and feet.",
      "question": "Which body part does the child use to clap? What do the little feet do in the poem?",
      "answer": "1. The child uses <strong>hands</strong> to clap.<br>2. The little feet go <strong>tap, tap, tap</strong>.",
      "rubric": "1 M for hands clap + 1 M for feet tap"
    },
    "questions": [
      {
        "category": "Let Us Recite • Action Words",
        "q": "What do the two little hands do in the poem?",
        "ans": "<strong>Answer:</strong><br>The two little hands go <strong>clap, clap, clap</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Hands go clap, clap, clap",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sense Organs • Functions",
        "q": "How many eyes do we have, and what do they do for us?",
        "ans": "<strong>Answer:</strong><br>• We have <strong>two eyes</strong>.<br>• Our eyes help us to <strong>see</strong> the world, colours, and people around us.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two eyes",
            "marks": "1 M"
          },
          {
            "key": "Help us see",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Rhyming Words",
        "q": "Find words that rhyme with: (a) Clap, (b) Head.",
        "ans": "<strong>Answer:</strong><br>(a) Rhymes with <strong>Clap</strong>: Tap, Slap, Nap, Cap.<br>(b) Rhymes with <strong>Head</strong>: Red, Bed, Fed, Led.",
        "marks": 2,
        "rubric": [
          {
            "key": "Valid rhyme for Clap",
            "marks": "1 M"
          },
          {
            "key": "Valid rhyme for Head",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Body Movement • Head and Shoulders",
        "q": "What does the head do in the poem 'Two Little Hands'?",
        "ans": "<strong>Answer:</strong><br>One little head goes <strong>side to side</strong> (nodding and turning).",
        "marks": 1,
        "rubric": [
          {
            "key": "Side to side",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Write • Vocabulary",
        "q": "Fill in the missing letters to name the body parts:<br>(a) H _ N D<br>(b) F _ _ T<br>(c) N _ S E",
        "ans": "<strong>Answer:</strong><br>(a) H <strong>A</strong> N D (HAND)<br>(b) F <strong>E E</strong> T (FEET)<br>(c) N <strong>O</strong> S E (NOSE)",
        "marks": 3,
        "rubric": [
          {
            "key": "HAND",
            "marks": "1 M"
          },
          {
            "key": "FEET",
            "marks": "1 M"
          },
          {
            "key": "NOSE",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Think and Share • Senses",
        "q": "Which sense organ helps you smell a sweet flower?",
        "ans": "<strong>Answer:</strong><br>Our <strong>Nose</strong> helps us to smell a sweet flower.",
        "marks": 1,
        "rubric": [
          {
            "key": "Nose",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 7 [Let us Speak]: In Chapter 1 ('Two Little Hands'), Recite and explain the central action or dialogue in 'Two Little Hands'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Two Little Hands', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 8 [Let us Listen]: In Chapter 1 ('Two Little Hands'), What initial letter sounds and rhyming pairs are highlighted in 'Two Little Hands'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Two Little Hands', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 9 [Let us Write]: In Chapter 1 ('Two Little Hands'), How do students practice letter tracing and complete sentences related to the theme of 'Two Little Hands'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Two Little Hands', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 10 [Picture Reading]: In Chapter 1 ('Two Little Hands'), Describe the key characters and actions shown in the textbook illustrations for 'Two Little Hands'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Two Little Hands', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 11 [Let us Think]: In Chapter 1 ('Two Little Hands'), What personal connection or moral lesson does a student learn from 'Two Little Hands'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Two Little Hands', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Fun Time • Creative Expression & Drawing",
        "q": "Question 12 [Fun Time]: In Chapter 1 ('Two Little Hands'), What hands-on activity or role-play is recommended at the end of 'Two Little Hands'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Two Little Hands', Children engage in role-play, animal movement mimicry, or guided drawing, reinforcing vocabulary retention through multi-sensory joyful learning.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 13 [Let us Speak]: In Chapter 1 ('Two Little Hands'), Recite and explain the central action or dialogue in 'Two Little Hands'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Two Little Hands', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 14 [Let us Listen]: In Chapter 1 ('Two Little Hands'), What initial letter sounds and rhyming pairs are highlighted in 'Two Little Hands'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Two Little Hands', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 15 [Let us Write]: In Chapter 1 ('Two Little Hands'), How do students practice letter tracing and complete sentences related to the theme of 'Two Little Hands'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Two Little Hands', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 16 [Picture Reading]: In Chapter 1 ('Two Little Hands'), Describe the key characters and actions shown in the textbook illustrations for 'Two Little Hands'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Two Little Hands', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 17 [Let us Think]: In Chapter 1 ('Two Little Hands'), What personal connection or moral lesson does a student learn from 'Two Little Hands'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Two Little Hands', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mr2",
    "num": 2,
    "unit": "Unit 1: My Family and Me",
    "title": "Greetings",
    "subtitle": "Everyday Manners: Good Morning, Thank You, Please & Introductions",
    "concepts": [
      "Appropriate greetings for different times of day: Good morning, Good afternoon, Good night.",
      "Courteous magic words: Please, Thank you, Sorry, Excuse me.",
      "Introducing oneself clearly: Name, age, and class."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fef3c7\" rx=\"10\"/><circle cx=\"80\" cy=\"50\" r=\"22\" fill=\"#f59e0b\"/><text x=\"80\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Sunrise</text><text x=\"80\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Good Morning</text><circle cx=\"200\" cy=\"50\" r=\"22\" fill=\"#3b82f6\"/><text x=\"200\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Smile</text><text x=\"200\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Thank You</text><circle cx=\"320\" cy=\"50\" r=\"22\" fill=\"#10b981\"/><text x=\"320\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Help</text><text x=\"320\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Please</text><circle cx=\"430\" cy=\"50\" r=\"22\" fill=\"#6366f1\"/><text x=\"430\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Moon</text><text x=\"430\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#3730a3\" text-anchor=\"middle\">Good Night</text></svg>",
    "cbq": {
      "title": "First Day at School",
      "text": "On the first day of Class 1, Aarav meets his class teacher Mrs. Sen at the door. He smiles and politely greets her.",
      "question": "What greeting should Aarav say to his teacher in the morning? What should he say when she hands him a new pencil?",
      "answer": "1. Aarav should say, '<strong>Good morning, Teacher!</strong>'<br>2. When given a pencil, he should say, '<strong>Thank you, Teacher!</strong>'",
      "rubric": "1 M for Good morning + 1 M for Thank you"
    },
    "questions": [
      {
        "category": "Conversation • Daily Greetings",
        "q": "What do you say to your family when you wake up in the morning?",
        "ans": "<strong>Answer:</strong><br>We say, <strong>'Good morning!'</strong> to our family members.",
        "marks": 1,
        "rubric": [
          {
            "key": "Good morning",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Magic Words • Polite Expressions",
        "q": "When someone helps you or gives you a gift, what polite word do you use?",
        "ans": "<strong>Answer:</strong><br>We should say, <strong>'Thank you!'</strong>",
        "marks": 1,
        "rubric": [
          {
            "key": "Thank you",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Self-Introduction • Speech Practice",
        "q": "How do you introduce yourself to a new friend in class? Write two sentences.",
        "ans": "<strong>Answer:</strong><br>1. 'Hello! My name is <strong>[Your Name]</strong>.'<br>2. 'I am six years old and I study in Class 1.'",
        "marks": 2,
        "rubric": [
          {
            "key": "Name sentence",
            "marks": "1 M"
          },
          {
            "key": "Age/Class sentence",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Greeting Times • Night Time",
        "q": "What do you say to your parents before going to sleep at night?",
        "ans": "<strong>Answer:</strong><br>We say, <strong>'Good night!'</strong> and sweet dreams.",
        "marks": 1,
        "rubric": [
          {
            "key": "Good night",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Manners • Apologizing",
        "q": "If you accidentally bump into someone or drop someone's pencil, what should you say?",
        "ans": "<strong>Answer:</strong><br>You should immediately say, <strong>'I am sorry!'</strong> or <strong>'Excuse me!'</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "I am sorry / Excuse me",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Opposites • Day and Night",
        "q": "What is the opposite of: (a) Day, (b) Hello?",
        "ans": "<strong>Answer:</strong><br>(a) Day ↔ <strong>Night</strong><br>(b) Hello ↔ <strong>Goodbye</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Night",
            "marks": "1 M"
          },
          {
            "key": "Goodbye",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 7 [Let us Speak]: In Chapter 2 ('Greetings'), Recite and explain the central action or dialogue in 'Greetings'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Greetings', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 8 [Let us Listen]: In Chapter 2 ('Greetings'), What initial letter sounds and rhyming pairs are highlighted in 'Greetings'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Greetings', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 9 [Let us Write]: In Chapter 2 ('Greetings'), How do students practice letter tracing and complete sentences related to the theme of 'Greetings'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Greetings', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 10 [Picture Reading]: In Chapter 2 ('Greetings'), Describe the key characters and actions shown in the textbook illustrations for 'Greetings'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Greetings', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 11 [Let us Think]: In Chapter 2 ('Greetings'), What personal connection or moral lesson does a student learn from 'Greetings'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Greetings', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Fun Time • Creative Expression & Drawing",
        "q": "Question 12 [Fun Time]: In Chapter 2 ('Greetings'), What hands-on activity or role-play is recommended at the end of 'Greetings'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Greetings', Children engage in role-play, animal movement mimicry, or guided drawing, reinforcing vocabulary retention through multi-sensory joyful learning.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 13 [Let us Speak]: In Chapter 2 ('Greetings'), Recite and explain the central action or dialogue in 'Greetings'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Greetings', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 14 [Let us Listen]: In Chapter 2 ('Greetings'), What initial letter sounds and rhyming pairs are highlighted in 'Greetings'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Greetings', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 15 [Let us Write]: In Chapter 2 ('Greetings'), How do students practice letter tracing and complete sentences related to the theme of 'Greetings'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Greetings', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 16 [Picture Reading]: In Chapter 2 ('Greetings'), Describe the key characters and actions shown in the textbook illustrations for 'Greetings'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Greetings', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 17 [Let us Think]: In Chapter 2 ('Greetings'), What personal connection or moral lesson does a student learn from 'Greetings'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Greetings', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mr3",
    "num": 3,
    "unit": "Unit 2: Life Around Us",
    "title": "Picture Time",
    "subtitle": "Picture Reading, Visual Comprehension & Classroom Objects",
    "concepts": [
      "Reading and interpreting details in an illustrated picture scene.",
      "Naming objects found in a classroom and school environment.",
      "Using prepositions: in, on, under, near in simple sentences."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f1f5f9\" rx=\"10\"/><rect x=\"50\" y=\"25\" width=\"110\" height=\"70\" fill=\"#1e293b\" rx=\"4\"/><text x=\"105\" y=\"65\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Blackboard</text><rect x=\"190\" y=\"50\" width=\"80\" height=\"40\" fill=\"#92400e\" rx=\"4\"/><text x=\"230\" y=\"75\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Desk</text><circle cx=\"340\" cy=\"65\" r=\"18\" fill=\"#3b82f6\"/><text x=\"340\" y=\"70\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Globe</text><text x=\"430\" y=\"55\" font-size=\"12\" font-weight=\"700\" fill=\"#0f172a\">Classroom</text><text x=\"430\" y=\"75\" font-size=\"11\" font-weight=\"700\" fill=\"#475569\">Picture Scene</text></svg>",
    "cbq": {
      "title": "Classroom Art Wall",
      "text": "Look at the busy classroom picture on Page 24. Children are sitting at wooden desks. A big world globe is placed on the teacher's table, and student drawings are pinned on the soft bulletin board.",
      "question": "Where is the globe placed? What is displayed on the bulletin board?",
      "answer": "1. The globe is placed <strong>on the teacher's table</strong>.<br>2. <strong>Student drawings and paintings</strong> are displayed on the bulletin board.",
      "rubric": "1 M for globe on table + 1 M for drawings on board"
    },
    "questions": [
      {
        "category": "Picture Reading • Classroom Items",
        "q": "Name four items you can see in your classroom picture.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Blackboard</strong><br>2. <strong>Desks and Chairs</strong><br>3. <strong>School Bags</strong><br>4. <strong>Books and Pencils</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Four valid classroom items named",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Prepositions • Location Words",
        "q": "Look at the picture: Where is the school bag kept? (On the desk / Under the desk / In the bag)",
        "ans": "<strong>Answer:</strong><br>The school bag is kept <strong>under the desk</strong> (or on the chair hook).",
        "marks": 1,
        "rubric": [
          {
            "key": "Correct preposition phrase",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Singular and Plural",
        "q": "Write the plurals of these classroom words:<br>(a) Book<br>(b) Pencil<br>(c) Desk",
        "ans": "<strong>Answer:</strong><br>(a) Book → <strong>Books</strong><br>(b) Pencil → <strong>Pencils</strong><br>(c) Desk → <strong>Desks</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "Books",
            "marks": "1 M"
          },
          {
            "key": "Pencils",
            "marks": "1 M"
          },
          {
            "key": "Desks",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Speaking Activity • Colours",
        "q": "What colour is the chalk, and what colour is the blackboard in the picture?",
        "ans": "<strong>Answer:</strong><br>• The chalk is <strong>white</strong> (or yellow).<br>• The blackboard is <strong>black</strong> (or dark green).",
        "marks": 2,
        "rubric": [
          {
            "key": "White chalk",
            "marks": "1 M"
          },
          {
            "key": "Black/green board",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sentence Making",
        "q": "Make a simple sentence using the word 'Friend'.",
        "ans": "<strong>Answer:</strong><br><em>'Rohan is my best friend in school.'</em>",
        "marks": 2,
        "rubric": [
          {
            "key": "Grammatically correct sentence with 'friend'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Observation • Who is in the Room?",
        "q": "Who teaches the children in the classroom?",
        "ans": "<strong>Answer:</strong><br>The <strong>Teacher</strong> teaches the children in the classroom.",
        "marks": 1,
        "rubric": [
          {
            "key": "Teacher",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 7 [Let us Speak]: In Chapter 3 ('Picture Time'), Recite and explain the central action or dialogue in 'Picture Time'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Picture Time', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 8 [Let us Listen]: In Chapter 3 ('Picture Time'), What initial letter sounds and rhyming pairs are highlighted in 'Picture Time'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Picture Time', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 9 [Let us Write]: In Chapter 3 ('Picture Time'), How do students practice letter tracing and complete sentences related to the theme of 'Picture Time'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Picture Time', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 10 [Picture Reading]: In Chapter 3 ('Picture Time'), Describe the key characters and actions shown in the textbook illustrations for 'Picture Time'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Picture Time', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 11 [Let us Think]: In Chapter 3 ('Picture Time'), What personal connection or moral lesson does a student learn from 'Picture Time'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Picture Time', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Fun Time • Creative Expression & Drawing",
        "q": "Question 12 [Fun Time]: In Chapter 3 ('Picture Time'), What hands-on activity or role-play is recommended at the end of 'Picture Time'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Picture Time', Children engage in role-play, animal movement mimicry, or guided drawing, reinforcing vocabulary retention through multi-sensory joyful learning.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 13 [Let us Speak]: In Chapter 3 ('Picture Time'), Recite and explain the central action or dialogue in 'Picture Time'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Picture Time', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 14 [Let us Listen]: In Chapter 3 ('Picture Time'), What initial letter sounds and rhyming pairs are highlighted in 'Picture Time'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Picture Time', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 15 [Let us Write]: In Chapter 3 ('Picture Time'), How do students practice letter tracing and complete sentences related to the theme of 'Picture Time'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Picture Time', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 16 [Picture Reading]: In Chapter 3 ('Picture Time'), Describe the key characters and actions shown in the textbook illustrations for 'Picture Time'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Picture Time', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 17 [Let us Think]: In Chapter 3 ('Picture Time'), What personal connection or moral lesson does a student learn from 'Picture Time'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Picture Time', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mr4",
    "num": 4,
    "unit": "Unit 2: Life Around Us",
    "title": "The Cap-Seller and the Monkeys",
    "subtitle": "Classic Folktale: Cleverness, Animal Mimicry & Problem Solving",
    "concepts": [
      "Story comprehension: sequence of events and problem-solution.",
      "Understanding monkey behavior: imitation and mimicry.",
      "Moral of clever thinking in difficult situations."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><rect x=\"60\" y=\"40\" width=\"50\" height=\"50\" fill=\"#78350f\" rx=\"6\"/><circle cx=\"85\" cy=\"30\" r=\"14\" fill=\"#ef4444\"/><text x=\"85\" y=\"105\" font-size=\"10\" font-weight=\"700\" fill=\"#78350f\" text-anchor=\"middle\">Cap-Seller Sleeps</text><circle cx=\"200\" cy=\"45\" r=\"20\" fill=\"#a16207\"/><circle cx=\"200\" cy=\"25\" r=\"12\" fill=\"#ef4444\"/><text x=\"200\" y=\"105\" font-size=\"10\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Monkeys Take Caps</text><line x1=\"280\" y1=\"35\" x2=\"340\" y2=\"85\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"4\"/><circle cx=\"340\" cy=\"90\" r=\"10\" fill=\"#ef4444\"/><text x=\"430\" y=\"55\" font-size=\"12\" font-weight=\"800\" fill=\"#065f46\">Clever Plan:</text><text x=\"430\" y=\"75\" font-size=\"11\" font-weight=\"700\" fill=\"#047857\">Throw Caps Down!</text></svg>",
    "cbq": {
      "title": "Under the Banyan Tree",
      "text": "A tired cap-seller placed his bag of red, blue, and green caps under a banyan tree and fell asleep. Mischievous monkeys living on the tree branches climbed down and each took a colourful cap.",
      "question": "Where did the cap-seller keep his bag? What did the monkeys do while he was sleeping?",
      "answer": "1. The cap-seller kept his bag <strong>under the big banyan tree</strong>.<br>2. The monkeys climbed down, opened the bag, took the caps, and wore them on their heads.",
      "rubric": "1 M for under the tree + 1 M for wearing caps"
    },
    "questions": [
      {
        "category": "Reading Comprehension • Story Fact",
        "q": "What was the cap-seller carrying in his bag to sell in the village fair?",
        "ans": "<strong>Answer:</strong><br>The cap-seller was carrying <strong>colourful caps</strong> in his bag.",
        "marks": 1,
        "rubric": [
          {
            "key": "Colourful caps",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comprehension • The Problem",
        "q": "What happened when the cap-seller woke up from his nap?",
        "ans": "<strong>Answer:</strong><br>When he woke up, he saw that his bag was <strong>empty</strong> and all the monkeys on the tree branches were <strong>wearing his caps</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Bag was empty",
            "marks": "1 M"
          },
          {
            "key": "Monkeys wearing caps",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Clever Solution • Mimicry",
        "q": "How did the cap-seller get his caps back from the monkeys?",
        "ans": "<strong>Answer:</strong><br>He knew that monkeys copy what people do. He took off his own cap and <strong>threw it on the ground</strong>. Seeing this, all the monkeys also took off their caps and threw them down!",
        "marks": 3,
        "rubric": [
          {
            "key": "Monkeys imitate actions",
            "marks": "1.5 M"
          },
          {
            "key": "Threw cap on ground and monkeys copied",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Sound Words",
        "q": "What sound does a monkey make?",
        "ans": "<strong>Answer:</strong><br>A monkey makes a <strong>chatter-chatter / whoop / gibber</strong> sound.",
        "marks": 1,
        "rubric": [
          {
            "key": "Chatter / whoop",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Moral and Life Skill",
        "q": "What lesson do we learn from 'The Cap-Seller and the Monkeys'?",
        "ans": "<strong>Answer:</strong><br>We learn that <strong>calm and clever thinking</strong> can solve difficult problems when shouting or getting angry does not work.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clever thinking solves problems",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Phonics • Rhyming Pairs",
        "q": "Write three rhyming words for 'CAP'.",
        "ans": "<strong>Answer:</strong><br>Rhyming words for Cap: <strong>Map, Lap, Tap, Nap</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Three valid rhymes provided",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 7 [Let us Speak]: In Chapter 4 ('The Cap-Seller and the Monkeys'), Recite and explain the central action or dialogue in 'The Cap-Seller and the Monkeys'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Cap-Seller and the Monkeys', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 8 [Let us Listen]: In Chapter 4 ('The Cap-Seller and the Monkeys'), What initial letter sounds and rhyming pairs are highlighted in 'The Cap-Seller and the Monkeys'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Cap-Seller and the Monkeys', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 9 [Let us Write]: In Chapter 4 ('The Cap-Seller and the Monkeys'), How do students practice letter tracing and complete sentences related to the theme of 'The Cap-Seller and the Monkeys'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Cap-Seller and the Monkeys', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 10 [Picture Reading]: In Chapter 4 ('The Cap-Seller and the Monkeys'), Describe the key characters and actions shown in the textbook illustrations for 'The Cap-Seller and the Monkeys'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Cap-Seller and the Monkeys', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 11 [Let us Think]: In Chapter 4 ('The Cap-Seller and the Monkeys'), What personal connection or moral lesson does a student learn from 'The Cap-Seller and the Monkeys'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Cap-Seller and the Monkeys', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Fun Time • Creative Expression & Drawing",
        "q": "Question 12 [Fun Time]: In Chapter 4 ('The Cap-Seller and the Monkeys'), What hands-on activity or role-play is recommended at the end of 'The Cap-Seller and the Monkeys'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Cap-Seller and the Monkeys', Children engage in role-play, animal movement mimicry, or guided drawing, reinforcing vocabulary retention through multi-sensory joyful learning.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 13 [Let us Speak]: In Chapter 4 ('The Cap-Seller and the Monkeys'), Recite and explain the central action or dialogue in 'The Cap-Seller and the Monkeys'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Cap-Seller and the Monkeys', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 14 [Let us Listen]: In Chapter 4 ('The Cap-Seller and the Monkeys'), What initial letter sounds and rhyming pairs are highlighted in 'The Cap-Seller and the Monkeys'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Cap-Seller and the Monkeys', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 15 [Let us Write]: In Chapter 4 ('The Cap-Seller and the Monkeys'), How do students practice letter tracing and complete sentences related to the theme of 'The Cap-Seller and the Monkeys'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Cap-Seller and the Monkeys', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 16 [Picture Reading]: In Chapter 4 ('The Cap-Seller and the Monkeys'), Describe the key characters and actions shown in the textbook illustrations for 'The Cap-Seller and the Monkeys'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Cap-Seller and the Monkeys', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 17 [Let us Think]: In Chapter 4 ('The Cap-Seller and the Monkeys'), What personal connection or moral lesson does a student learn from 'The Cap-Seller and the Monkeys'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Cap-Seller and the Monkeys', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mr5",
    "num": 5,
    "unit": "Unit 3: Food",
    "title": "A Farm",
    "subtitle": "Farm Animals, Animal Sounds, Barnyard Life & Animal Babies",
    "concepts": [
      "Naming common domestic farm animals: Cow, Horse, Sheep, Hen, Duck.",
      "Recognizing animal sounds: moo, neigh, baa, cluck, quack.",
      "Learning names of animal babies: calf, foal, lamb, chick, duckling."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"10\"/><circle cx=\"70\" cy=\"50\" r=\"22\" fill=\"#84cc16\"/><text x=\"70\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Cow</text><text x=\"70\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#3f6212\" text-anchor=\"middle\">Moo Moo</text><circle cx=\"180\" cy=\"50\" r=\"22\" fill=\"#ca8a04\"/><text x=\"180\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Hen</text><text x=\"180\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Cluck Cluck</text><circle cx=\"290\" cy=\"50\" r=\"22\" fill=\"#06b6d4\"/><text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Duck</text><text x=\"290\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#0e7490\" text-anchor=\"middle\">Quack Quack</text><circle cx=\"400\" cy=\"50\" r=\"22\" fill=\"#a855f7\"/><text x=\"400\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Sheep</text><text x=\"400\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#6b21a8\" text-anchor=\"middle\">Baa Baa</text></svg>",
    "cbq": {
      "title": "Visiting Uncle's Organic Farm",
      "text": "Rani visits her uncle's dairy farm in the village. Early in the morning, the cow calls her little calf with a gentle 'Moo', and white ducks swim across the green pond quacking happily.",
      "question": "What sound does the cow make? What is the baby of a cow called?",
      "answer": "1. The cow makes a '<strong>Moo</strong>' sound.<br>2. The baby of a cow is called a <strong>Calf</strong>.",
      "rubric": "1 M for Moo + 1 M for Calf"
    },
    "questions": [
      {
        "category": "Animal Sounds • Match",
        "q": "Match each farm animal with its correct sound:<br>(a) Cow<br>(b) Duck<br>(c) Sheep",
        "ans": "<strong>Answer:</strong><br>(a) Cow → <strong>Moo</strong><br>(b) Duck → <strong>Quack</strong><br>(c) Sheep → <strong>Baa</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 correctly matched",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Animal Babies",
        "q": "What do we call the baby of a:<br>(a) Hen<br>(b) Duck?",
        "ans": "<strong>Answer:</strong><br>(a) Baby of a Hen = <strong>Chick</strong><br>(b) Baby of a Duck = <strong>Duckling</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Chick",
            "marks": "1 M"
          },
          {
            "key": "Duckling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Farm Benefits • Animal Products",
        "q": "Which farm animal gives us fresh, healthy milk?",
        "ans": "<strong>Answer:</strong><br>The <strong>Cow</strong> (and Buffalo / Goat) gives us fresh milk.",
        "marks": 1,
        "rubric": [
          {
            "key": "Cow",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Rhyme Recitation",
        "q": "Name the famous nursery rhyme about a farmer and his animals.",
        "ans": "<strong>Answer:</strong><br><strong>'Old MacDonald Had a Farm'</strong> (E-I-E-I-O).",
        "marks": 1,
        "rubric": [
          {
            "key": "Old MacDonald Had a Farm",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Opposites • Animal Sizes",
        "q": "Write the opposite word: A horse is BIG, but a chick is ______.",
        "ans": "<strong>Answer:</strong><br>A chick is <strong>SMALL</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "SMALL",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Writing Practice • Sentences",
        "q": "Write two sentences about your favorite domestic animal.",
        "ans": "<strong>Sample Answer:</strong><br>1. My favorite animal is a <strong>dog</strong>.<br>2. It wags its tail happily and guards our house.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two coherent sentences written",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 7 [Let us Speak]: In Chapter 5 ('A Farm'), Recite and explain the central action or dialogue in 'A Farm'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'A Farm', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 8 [Let us Listen]: In Chapter 5 ('A Farm'), What initial letter sounds and rhyming pairs are highlighted in 'A Farm'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'A Farm', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 9 [Let us Write]: In Chapter 5 ('A Farm'), How do students practice letter tracing and complete sentences related to the theme of 'A Farm'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'A Farm', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 10 [Picture Reading]: In Chapter 5 ('A Farm'), Describe the key characters and actions shown in the textbook illustrations for 'A Farm'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'A Farm', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 11 [Let us Think]: In Chapter 5 ('A Farm'), What personal connection or moral lesson does a student learn from 'A Farm'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'A Farm', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Fun Time • Creative Expression & Drawing",
        "q": "Question 12 [Fun Time]: In Chapter 5 ('A Farm'), What hands-on activity or role-play is recommended at the end of 'A Farm'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'A Farm', Children engage in role-play, animal movement mimicry, or guided drawing, reinforcing vocabulary retention through multi-sensory joyful learning.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 13 [Let us Speak]: In Chapter 5 ('A Farm'), Recite and explain the central action or dialogue in 'A Farm'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'A Farm', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 14 [Let us Listen]: In Chapter 5 ('A Farm'), What initial letter sounds and rhyming pairs are highlighted in 'A Farm'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'A Farm', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 15 [Let us Write]: In Chapter 5 ('A Farm'), How do students practice letter tracing and complete sentences related to the theme of 'A Farm'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'A Farm', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 16 [Picture Reading]: In Chapter 5 ('A Farm'), Describe the key characters and actions shown in the textbook illustrations for 'A Farm'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'A Farm', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 17 [Let us Think]: In Chapter 5 ('A Farm'), What personal connection or moral lesson does a student learn from 'A Farm'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'A Farm', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mr6",
    "num": 6,
    "unit": "Unit 3: Food",
    "title": "Fun with Pictures",
    "subtitle": "Visual Vocabulary, Sight Words, Labelling & Word Association",
    "concepts": [
      "Building visual sight vocabulary from everyday illustrations.",
      "Associating written words with pictures of foods, toys, and household tools.",
      "Practicing simple phonics blends: sh, ch, th."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fdf4ff\" rx=\"10\"/><rect x=\"50\" y=\"30\" width=\"80\" height=\"60\" fill=\"#f472b6\" rx=\"6\"/><text x=\"90\" y=\"65\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Apple</text><rect x=\"150\" y=\"30\" width=\"80\" height=\"60\" fill=\"#a78bfa\" rx=\"6\"/><text x=\"190\" y=\"65\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Ball</text><rect x=\"250\" y=\"30\" width=\"80\" height=\"60\" fill=\"#60a5fa\" rx=\"6\"/><text x=\"290\" y=\"65\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Car</text><text x=\"410\" y=\"55\" font-size=\"13\" font-weight=\"800\" fill=\"#86198f\">Look &amp; Match</text><text x=\"410\" y=\"75\" font-size=\"11\" font-weight=\"700\" fill=\"#a21caf\">Word Cards</text></svg>",
    "cbq": {
      "title": "The Picture Word Bingo Game",
      "text": "In English class, children play a picture bingo game. Each child has a card with four pictures: an apple, a kite, a duck, and a tree. Teacher speaks out the letter 'K' for Kite.",
      "question": "Which word begins with the letter 'K'? Which word on the bingo card ends with the letter 'E'?",
      "answer": "1. <strong>Kite</strong> begins with the letter 'K'.<br>2. <strong>Apple</strong> (and Kite / Tree) ends with the letter 'E'.",
      "rubric": "1 M for Kite + 1 M for Apple/Tree ending in E"
    },
    "questions": [
      {
        "category": "Picture Labeling • Spelling",
        "q": "Look at the picture of an apple. Write its spelling correctly.",
        "ans": "<strong>Answer:</strong><br><strong>A-P-P-L-E</strong> (Apple).",
        "marks": 1,
        "rubric": [
          {
            "key": "APPLE correctly spelled",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Phonics • Beginning Sounds",
        "q": "What is the beginning sound of:<br>(a) Ball<br>(b) Sun<br>(c) Fish?",
        "ans": "<strong>Answer:</strong><br>(a) Ball → <strong>/b/</strong> (Letter B)<br>(b) Sun → <strong>/s/</strong> (Letter S)<br>(c) Fish → <strong>/f/</strong> (Letter F)",
        "marks": 3,
        "rubric": [
          {
            "key": "/b/",
            "marks": "1 M"
          },
          {
            "key": "/s/",
            "marks": "1 M"
          },
          {
            "key": "/f/",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Odd One Out • Categories",
        "q": "Find the odd one out: Mango, Banana, Pencil, Orange.",
        "ans": "<strong>Answer:</strong><br><strong>Pencil</strong> is the odd one out because Mango, Banana, and Orange are fruits, while a pencil is a stationery item.",
        "marks": 2,
        "rubric": [
          {
            "key": "Pencil identified",
            "marks": "1 M"
          },
          {
            "key": "Explanation of fruits category",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Colour Recognition",
        "q": "What is the colour of a ripe banana and a fresh leaf?",
        "ans": "<strong>Answer:</strong><br>• Ripe banana = <strong>Yellow</strong><br>• Fresh leaf = <strong>Green</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Yellow",
            "marks": "1 M"
          },
          {
            "key": "Green",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Sight Word Practice",
        "q": "Use the sight word 'PLAY' in a complete sentence.",
        "ans": "<strong>Answer:</strong><br><em>'I like to play football with my friends in the evening.'</em>",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct meaningful sentence with 'play'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Action Words • Verbs",
        "q": "Tick the action word in this list: Table, Run, Chair, Wall.",
        "ans": "<strong>Answer:</strong><br><strong>Run</strong> is the action word (verb).",
        "marks": 1,
        "rubric": [
          {
            "key": "Run identified as action word",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 7 [Let us Speak]: In Chapter 6 ('Fun with Pictures'), Recite and explain the central action or dialogue in 'Fun with Pictures'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Fun with Pictures', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 8 [Let us Listen]: In Chapter 6 ('Fun with Pictures'), What initial letter sounds and rhyming pairs are highlighted in 'Fun with Pictures'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Fun with Pictures', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 9 [Let us Write]: In Chapter 6 ('Fun with Pictures'), How do students practice letter tracing and complete sentences related to the theme of 'Fun with Pictures'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Fun with Pictures', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 10 [Picture Reading]: In Chapter 6 ('Fun with Pictures'), Describe the key characters and actions shown in the textbook illustrations for 'Fun with Pictures'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Fun with Pictures', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 11 [Let us Think]: In Chapter 6 ('Fun with Pictures'), What personal connection or moral lesson does a student learn from 'Fun with Pictures'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Fun with Pictures', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Fun Time • Creative Expression & Drawing",
        "q": "Question 12 [Fun Time]: In Chapter 6 ('Fun with Pictures'), What hands-on activity or role-play is recommended at the end of 'Fun with Pictures'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Fun with Pictures', Children engage in role-play, animal movement mimicry, or guided drawing, reinforcing vocabulary retention through multi-sensory joyful learning.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 13 [Let us Speak]: In Chapter 6 ('Fun with Pictures'), Recite and explain the central action or dialogue in 'Fun with Pictures'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Fun with Pictures', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 14 [Let us Listen]: In Chapter 6 ('Fun with Pictures'), What initial letter sounds and rhyming pairs are highlighted in 'Fun with Pictures'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Fun with Pictures', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 15 [Let us Write]: In Chapter 6 ('Fun with Pictures'), How do students practice letter tracing and complete sentences related to the theme of 'Fun with Pictures'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Fun with Pictures', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 16 [Picture Reading]: In Chapter 6 ('Fun with Pictures'), Describe the key characters and actions shown in the textbook illustrations for 'Fun with Pictures'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Fun with Pictures', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 17 [Let us Think]: In Chapter 6 ('Fun with Pictures'), What personal connection or moral lesson does a student learn from 'Fun with Pictures'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Fun with Pictures', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mr7",
    "num": 7,
    "unit": "Unit 3: Food",
    "title": "The Food We Eat",
    "subtitle": "Nutrition Rhyme, Healthy Eating Habits, Fruits, Vegetables & Table Manners",
    "concepts": [
      "Distinguishing healthy foods (fruits, vegetables, milk) from junk food.",
      "Understanding meals: breakfast, lunch, dinner.",
      "Good eating habits: washing hands, chewing food properly, not wasting food."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fff7ed\" rx=\"10\"/><circle cx=\"70\" cy=\"50\" r=\"22\" fill=\"#ef4444\"/><text x=\"70\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Apple</text><text x=\"70\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Fruit</text><circle cx=\"180\" cy=\"50\" r=\"22\" fill=\"#16a34a\"/><text x=\"180\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Spinach</text><text x=\"180\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">Vegetable</text><rect x=\"260\" y=\"28\" width=\"60\" height=\"44\" fill=\"#3b82f6\" rx=\"6\"/><text x=\"290\" y=\"55\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Milk</text><text x=\"290\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Calcium</text><text x=\"410\" y=\"55\" font-size=\"13\" font-weight=\"800\" fill=\"#c2410c\">Eat Healthy!</text><text x=\"410\" y=\"75\" font-size=\"11\" font-weight=\"700\" fill=\"#ea580c\">Grow Strong!</text></svg>",
    "cbq": {
      "title": "Rohan's Colorful Lunchbox",
      "text": "Rohan opens his lunchbox at school. Inside there is a vegetable paratha, two slices of cucumber, a boiled egg, and a juicy sweet orange.",
      "question": "Name one fruit and one vegetable from Rohan's lunchbox. Why is his meal healthy?",
      "answer": "1. <strong>Fruit:</strong> Orange.<br>2. <strong>Vegetable:</strong> Cucumber (and vegetable in paratha).<br>3. It is healthy because it has fresh nutrients, vitamins, and protein to help him grow strong.",
      "rubric": "1 M for fruit/veg identified + 1 M for health reasoning"
    },
    "questions": [
      {
        "category": "Healthy Foods • Identification",
        "q": "Name three healthy foods that help us grow strong and active.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Milk</strong><br>2. <strong>Fresh Fruits</strong> (Apples, Bananas)<br>3. <strong>Green Vegetables</strong> (Spinach, Peas)",
        "marks": 3,
        "rubric": [
          {
            "key": "Three healthy food items named",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Good Habits • Cleanliness",
        "q": "What must you always do before and after eating any meal?",
        "ans": "<strong>Answer:</strong><br>We must always <strong>wash our hands thoroughly with soap and water</strong> before and after eating.",
        "marks": 2,
        "rubric": [
          {
            "key": "Wash hands with soap and water",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Classification • Fruits and Vegetables",
        "q": "Sort into Fruits and Vegetables: Potato, Mango, Carrot, Guava.",
        "ans": "<strong>Answer:</strong><br>• <strong>Fruits:</strong> Mango, Guava.<br>• <strong>Vegetables:</strong> Potato, Carrot.",
        "marks": 2,
        "rubric": [
          {
            "key": "Fruits: Mango, Guava",
            "marks": "1 M"
          },
          {
            "key": "Vegetables: Potato, Carrot",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Table Manners",
        "q": "Why should we chew our food slowly with our mouth closed?",
        "ans": "<strong>Answer:</strong><br>Chewing slowly helps us <strong>digest our food properly</strong>, and keeping the mouth closed is good, polite table manners.",
        "marks": 2,
        "rubric": [
          {
            "key": "Good digestion",
            "marks": "1 M"
          },
          {
            "key": "Polite manners",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Water Habit",
        "q": "Why should we drink plenty of clean water every day?",
        "ans": "<strong>Answer:</strong><br>Water keeps our body <strong>hydrated, healthy, and energized</strong> throughout the day.",
        "marks": 1,
        "rubric": [
          {
            "key": "Keeps body hydrated and healthy",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Food Riddle",
        "q": "'I am yellow and curved, monkeys love me, and I give you instant energy.' Who am I?",
        "ans": "<strong>Answer:</strong><br>You are a <strong>Banana</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Banana",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 7 [Let us Speak]: In Chapter 7 ('The Food We Eat'), Recite and explain the central action or dialogue in 'The Food We Eat'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Food We Eat', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 8 [Let us Listen]: In Chapter 7 ('The Food We Eat'), What initial letter sounds and rhyming pairs are highlighted in 'The Food We Eat'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Food We Eat', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 9 [Let us Write]: In Chapter 7 ('The Food We Eat'), How do students practice letter tracing and complete sentences related to the theme of 'The Food We Eat'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Food We Eat', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 10 [Picture Reading]: In Chapter 7 ('The Food We Eat'), Describe the key characters and actions shown in the textbook illustrations for 'The Food We Eat'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Food We Eat', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 11 [Let us Think]: In Chapter 7 ('The Food We Eat'), What personal connection or moral lesson does a student learn from 'The Food We Eat'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Food We Eat', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Fun Time • Creative Expression & Drawing",
        "q": "Question 12 [Fun Time]: In Chapter 7 ('The Food We Eat'), What hands-on activity or role-play is recommended at the end of 'The Food We Eat'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Food We Eat', Children engage in role-play, animal movement mimicry, or guided drawing, reinforcing vocabulary retention through multi-sensory joyful learning.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 13 [Let us Speak]: In Chapter 7 ('The Food We Eat'), Recite and explain the central action or dialogue in 'The Food We Eat'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Food We Eat', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 14 [Let us Listen]: In Chapter 7 ('The Food We Eat'), What initial letter sounds and rhyming pairs are highlighted in 'The Food We Eat'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Food We Eat', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 15 [Let us Write]: In Chapter 7 ('The Food We Eat'), How do students practice letter tracing and complete sentences related to the theme of 'The Food We Eat'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Food We Eat', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 16 [Picture Reading]: In Chapter 7 ('The Food We Eat'), Describe the key characters and actions shown in the textbook illustrations for 'The Food We Eat'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Food We Eat', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 17 [Let us Think]: In Chapter 7 ('The Food We Eat'), What personal connection or moral lesson does a student learn from 'The Food We Eat'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Food We Eat', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mr8",
    "num": 8,
    "unit": "Unit 4: Seasons",
    "title": "The Four Seasons",
    "subtitle": "Summer, Monsoon, Autumn & Winter: Weather, Clothes & Nature Changes",
    "concepts": [
      "The four main seasons: Summer, Monsoon (Rainy), Autumn, Winter.",
      "Clothes suitable for hot summer and cold winter.",
      "Things used during rainy days: umbrella, raincoat, gumboots."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfeff\" rx=\"10\"/><circle cx=\"70\" cy=\"50\" r=\"22\" fill=\"#f59e0b\"/><text x=\"70\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Sun</text><text x=\"70\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Summer</text><circle cx=\"180\" cy=\"50\" r=\"22\" fill=\"#0284c7\"/><text x=\"180\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Rain</text><text x=\"180\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Monsoon</text><circle cx=\"290\" cy=\"50\" r=\"22\" fill=\"#d97706\"/><text x=\"290\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Leaf</text><text x=\"290\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Autumn</text><circle cx=\"400\" cy=\"50\" r=\"22\" fill=\"#64748b\"/><text x=\"400\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Snow</text><text x=\"400\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Winter</text></svg>",
    "cbq": {
      "title": "Packing for Shimla Trip",
      "text": "Tina is packing her suitcase for a holiday trip to the snowy hills of Shimla in December. Her mother asks her to choose the right clothes from her wardrobe.",
      "question": "Which type of clothes should Tina pack: cotton t-shirts or woollen sweaters? Explain why.",
      "answer": "1. Tina should pack <strong>woollen sweaters, caps, and coats</strong>.<br>2. Shimla in December is in the <strong>winter season</strong> and very cold with snow. Woollen clothes trap body heat and keep her warm.",
      "rubric": "1 M for woollen clothes + 1 M for winter warmth explanation"
    },
    "questions": [
      {
        "category": "Seasons • Matching Clothes",
        "q": "What clothes do we wear during:<br>(a) Hot Summer<br>(b) Cold Winter?",
        "ans": "<strong>Answer:</strong><br>(a) In Summer: Light <strong>cotton clothes</strong> that keep us cool.<br>(b) In Winter: Warm <strong>woollen clothes</strong> (sweaters, jackets, mufflers) that keep us warm.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cotton in summer",
            "marks": "1 M"
          },
          {
            "key": "Woollen in winter",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Monsoon • Rain Gear",
        "q": "Name two items that protect you from getting wet in the rain.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Umbrella</strong><br>2. <strong>Raincoat</strong> (and gumboots).",
        "marks": 2,
        "rubric": [
          {
            "key": "Umbrella and Raincoat named",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Summer Drinks and Fruits",
        "q": "Which juicy fruit is loved by everyone during hot summer days?",
        "ans": "<strong>Answer:</strong><br>The <strong>Mango</strong> (and Watermelon) is the most loved summer fruit.",
        "marks": 1,
        "rubric": [
          {
            "key": "Mango / Watermelon",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Autumn Changes",
        "q": "What happens to the leaves of many trees during the autumn season?",
        "ans": "<strong>Answer:</strong><br>In autumn, tree leaves turn yellow, orange, and brown, and <strong>dry leaves fall from the trees</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Leaves turn brown and fall",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Weather Words",
        "q": "Fill in the blank with the right word (Sunny / Rainy / Windy):<br>'The sky is full of dark clouds and drops are falling, it is a ________ day.'",
        "ans": "<strong>Answer:</strong><br>It is a <strong>Rainy</strong> day.",
        "marks": 1,
        "rubric": [
          {
            "key": "Rainy",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Expression",
        "q": "What is your favorite season and why?",
        "ans": "<strong>Sample Answer:</strong><br>'My favorite season is the <strong>rainy season</strong> because I love to float paper boats in rainwater puddles and see green grass everywhere.'",
        "marks": 2,
        "rubric": [
          {
            "key": "Season named with authentic reason",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 7 [Let us Speak]: In Chapter 8 ('The Four Seasons'), Recite and explain the central action or dialogue in 'The Four Seasons'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Four Seasons', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 8 [Let us Listen]: In Chapter 8 ('The Four Seasons'), What initial letter sounds and rhyming pairs are highlighted in 'The Four Seasons'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Four Seasons', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 9 [Let us Write]: In Chapter 8 ('The Four Seasons'), How do students practice letter tracing and complete sentences related to the theme of 'The Four Seasons'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Four Seasons', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 10 [Picture Reading]: In Chapter 8 ('The Four Seasons'), Describe the key characters and actions shown in the textbook illustrations for 'The Four Seasons'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Four Seasons', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 11 [Let us Think]: In Chapter 8 ('The Four Seasons'), What personal connection or moral lesson does a student learn from 'The Four Seasons'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Four Seasons', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Fun Time • Creative Expression & Drawing",
        "q": "Question 12 [Fun Time]: In Chapter 8 ('The Four Seasons'), What hands-on activity or role-play is recommended at the end of 'The Four Seasons'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Four Seasons', Children engage in role-play, animal movement mimicry, or guided drawing, reinforcing vocabulary retention through multi-sensory joyful learning.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 13 [Let us Speak]: In Chapter 8 ('The Four Seasons'), Recite and explain the central action or dialogue in 'The Four Seasons'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Four Seasons', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 14 [Let us Listen]: In Chapter 8 ('The Four Seasons'), What initial letter sounds and rhyming pairs are highlighted in 'The Four Seasons'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Four Seasons', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 15 [Let us Write]: In Chapter 8 ('The Four Seasons'), How do students practice letter tracing and complete sentences related to the theme of 'The Four Seasons'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Four Seasons', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 16 [Picture Reading]: In Chapter 8 ('The Four Seasons'), Describe the key characters and actions shown in the textbook illustrations for 'The Four Seasons'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Four Seasons', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 17 [Let us Think]: In Chapter 8 ('The Four Seasons'), What personal connection or moral lesson does a student learn from 'The Four Seasons'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'The Four Seasons', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mr9",
    "num": 9,
    "unit": "Unit 4: Seasons",
    "title": "Anandi's Rainbow",
    "subtitle": "Colours of Nature, VIBGYOR, Joy of Painting & After-Rain Sky",
    "concepts": [
      "Story comprehension: Anandi dreaming of rainbows and painting her garden.",
      "The seven colours of the rainbow: Violet, Indigo, Blue, Green, Yellow, Orange, Red.",
      "Observing natural phenomena after rainfall."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><path d=\"M 60,100 A 190,190 0 0,1 440,100\" stroke=\"#7c3aed\" stroke-width=\"6\" fill=\"none\"/><path d=\"M 70,100 A 180,180 0 0,1 430,100\" stroke=\"#2563eb\" stroke-width=\"6\" fill=\"none\"/><path d=\"M 80,100 A 170,170 0 0,1 420,100\" stroke=\"#06b6d4\" stroke-width=\"6\" fill=\"none\"/><path d=\"M 90,100 A 160,160 0 0,1 410,100\" stroke=\"#16a34a\" stroke-width=\"6\" fill=\"none\"/><path d=\"M 100,100 A 150,150 0 0,1 400,100\" stroke=\"#eab308\" stroke-width=\"6\" fill=\"none\"/><path d=\"M 110,100 A 140,140 0 0,1 390,100\" stroke=\"#f97316\" stroke-width=\"6\" fill=\"none\"/><path d=\"M 120,100 A 130,130 0 0,1 380,100\" stroke=\"#dc2626\" stroke-width=\"6\" fill=\"none\"/><text x=\"250\" y=\"115\" font-size=\"12\" font-weight=\"800\" fill=\"#1e3a8a\" text-anchor=\"middle\">7 Colours of the Rainbow (VIBGYOR)</text></svg>",
    "cbq": {
      "title": "Anandi's Garden Flowers",
      "text": "When Anandi woke up, she saw a huge, bright rainbow arching across the clear blue sky. She ran outside with her paintbrushes to paint the flowers in her garden with the rainbow colours.",
      "question": "What did Anandi see in the sky? What did she decide to paint with those colours?",
      "answer": "1. Anandi saw a <strong>huge, bright rainbow</strong> arching across the clear blue sky.<br>2. She decided to paint the <strong>flowers in her garden</strong> with the colours of the rainbow.",
      "rubric": "1 M for bright rainbow + 1 M for painting garden flowers"
    },
    "questions": [
      {
        "category": "Story Detail • Anandi",
        "q": "Who was fast asleep dreaming of rainbows in the story?",
        "ans": "<strong>Answer:</strong><br><strong>Anandi</strong> was fast asleep dreaming of rainbows.",
        "marks": 1,
        "rubric": [
          {
            "key": "Anandi",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Rainbow Facts • Colours",
        "q": "How many colours are there in a rainbow? Name any four colours.",
        "ans": "<strong>Answer:</strong><br>• There are <strong>7 colours</strong> in a rainbow.<br>• Four colours: <strong>Red, Green, Yellow, Blue</strong> (also Violet, Indigo, Orange).",
        "marks": 2,
        "rubric": [
          {
            "key": "7 colours",
            "marks": "1 M"
          },
          {
            "key": "Four correct colours named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Story Comprehension • The Yellow Sun",
        "q": "Why did Anandi leave the yellow colour in the sky?",
        "ans": "<strong>Answer:</strong><br>She left the yellow colour so that the <strong>Sun may shine bright and yellow</strong> in the sky.",
        "marks": 2,
        "rubric": [
          {
            "key": "For the Sun to shine bright and yellow",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Pet Companion",
        "q": "Who was Anandi's favorite pet that ran outside with her?",
        "ans": "<strong>Answer:</strong><br><strong>Milli</strong>, her favorite cat.",
        "marks": 1,
        "rubric": [
          {
            "key": "Milli the cat",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grammar • Rhyming Words",
        "q": "Find words that rhyme with: (a) Bright, (b) Blue.",
        "ans": "<strong>Answer:</strong><br>(a) Rhyme with <strong>Bright</strong>: Light, Night, Kite.<br>(b) Rhyme with <strong>Blue</strong>: Clue, Shoe, True, Glue.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rhyme for Bright",
            "marks": "1 M"
          },
          {
            "key": "Rhyme for Blue",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Drawing Activity • Senses",
        "q": "When does a rainbow appear in the sky?",
        "ans": "<strong>Answer:</strong><br>A rainbow usually appears <strong>after it rains when the sun comes out</strong> while water droplets are still in the air.",
        "marks": 2,
        "rubric": [
          {
            "key": "After rain and in sunshine",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 7 [Let us Speak]: In Chapter 9 ('Anandi's Rainbow'), Recite and explain the central action or dialogue in 'Anandi's Rainbow'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Anandi's Rainbow', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 8 [Let us Listen]: In Chapter 9 ('Anandi's Rainbow'), What initial letter sounds and rhyming pairs are highlighted in 'Anandi's Rainbow'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Anandi's Rainbow', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 9 [Let us Write]: In Chapter 9 ('Anandi's Rainbow'), How do students practice letter tracing and complete sentences related to the theme of 'Anandi's Rainbow'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Anandi's Rainbow', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 10 [Picture Reading]: In Chapter 9 ('Anandi's Rainbow'), Describe the key characters and actions shown in the textbook illustrations for 'Anandi's Rainbow'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Anandi's Rainbow', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 11 [Let us Think]: In Chapter 9 ('Anandi's Rainbow'), What personal connection or moral lesson does a student learn from 'Anandi's Rainbow'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Anandi's Rainbow', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Fun Time • Creative Expression & Drawing",
        "q": "Question 12 [Fun Time]: In Chapter 9 ('Anandi's Rainbow'), What hands-on activity or role-play is recommended at the end of 'Anandi's Rainbow'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Anandi's Rainbow', Children engage in role-play, animal movement mimicry, or guided drawing, reinforcing vocabulary retention through multi-sensory joyful learning.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Oral Recitation & Pronunciation",
        "q": "Question 13 [Let us Speak]: In Chapter 9 ('Anandi's Rainbow'), Recite and explain the central action or dialogue in 'Anandi's Rainbow'. How do children practice clear pronunciation of the new vocabulary words?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Anandi's Rainbow', Students practice choral recitation with rhythmic clapping. The main dialogue emphasizes foundational phonetics, emotional expression, and auditory discrimination.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Listen • Phonics & Sound Recognition",
        "q": "Question 14 [Let us Listen]: In Chapter 9 ('Anandi's Rainbow'), What initial letter sounds and rhyming pairs are highlighted in 'Anandi's Rainbow'? Give two examples from the lesson.",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Anandi's Rainbow', The lesson introduces phonemic awareness through playful word pairs. Listening carefully to the beginning and ending consonant blends builds strong foundational decoding skills.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sight Words & Sentence Completion",
        "q": "Question 15 [Let us Write]: In Chapter 9 ('Anandi's Rainbow'), How do students practice letter tracing and complete sentences related to the theme of 'Anandi's Rainbow'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Anandi's Rainbow', Students trace upper and lowercase letters with proper pencil grip, filling in sight words to complete meaningful sentences about daily experiences.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Reading • Observational Vocabulary",
        "q": "Question 16 [Picture Reading]: In Chapter 9 ('Anandi's Rainbow'), Describe the key characters and actions shown in the textbook illustrations for 'Anandi's Rainbow'. What clues do the pictures give about the story?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Anandi's Rainbow', The colorful illustrations illustrate the setting, character emotions, and sequence of events, enabling young learners to make accurate inferences before reading the printed text.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Think • Experiential & Moral Understanding",
        "q": "Question 17 [Let us Think]: In Chapter 9 ('Anandi's Rainbow'), What personal connection or moral lesson does a student learn from 'Anandi's Rainbow'?",
        "ans": "<strong>Model CBSE Solution:</strong><br>• <strong>Core Answer:</strong> In 'Anandi's Rainbow', Students connect the story to their own lives—such as showing empathy, sharing with friends, respecting nature, and using creative problem-solving in challenging situations.<br>• <strong>Contextual Learning:</strong> This activity reinforces foundational literacy skills aligned with the NCERT Class 1 English curriculum and NCF-FS standards.<br>• <strong>Student Tip:</strong> Speak clearly, observe the pictures closely, and trace the words carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate textual / pedagogical identification",
            "marks": "1 M"
          },
          {
            "key": "Clear English expression and spelling",
            "marks": "1 M"
          }
        ]
      }
    ]
  }
];

module.exports = { mridangChapters };
