// Official NCERT Class 3 Mathematics (Maths Mela / आनन्दमय गणित) Complete Dataset - Chapters 1 to 14
// Aligned with New NEP 2020 & NCF-FS / NCF-SE 2023 Curriculum (CBSE 2026-27 Session) - 100% Comprehensive Coverage

const mathsMelaChapters = [
  {
    "id": "mm1",
    "num": 1,
    "unit": "Unit 1: Numbers & Everyday Math",
    "title": "What's in a Name?",
    "subtitle": "Letter Counting, Name Grids, Number Names & Comparing Quantities",
    "concepts": [
      "Counting letters in names and organizing data into frequency tables.",
      "Comparing lengths of names: identifying longest and shortest names.",
      "Finding names starting or ending with the same letter.",
      "Representing quantities using tally marks and bar-like grid representations."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Name Length &amp; Letter Frequency Grid</text>\n      <rect x=\"50\" y=\"50\" width=\"120\" height=\"35\" rx=\"6\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/>\n      <text x=\"110\" y=\"72\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">A M I T (4)</text>\n      <rect x=\"190\" y=\"50\" width=\"160\" height=\"35\" rx=\"6\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"1.5\"/>\n      <text x=\"270\" y=\"72\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">P R I Y A N K A (8)</text>\n      <rect x=\"370\" y=\"50\" width=\"150\" height=\"35\" rx=\"6\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"1.5\"/>\n      <text x=\"445\" y=\"72\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">S A R I T A (6)</text>\n      <text x=\"290\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#334155\" text-anchor=\"middle\">Longest Name: Priyanka (8 letters) • Shortest: Amit (4 letters) • Difference: 8 - 4 = 4 letters</text>\n    </svg>",
    "questions": [
      {
        "category": "Textbook Exercise • Letter Counting",
        "q": "Write down the names of four of your classmates. Count the number of letters in each name. Which name is the longest, which is the shortest, and what is the difference between the two?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Suppose we choose 4 classmates: <em>Ravi</em>, <em>Ananya</em>, <em>Aarav</em>, and <em>Dharmendra</em>.<br>2. Counting letters in each:<br>• Ravi: R-A-V-I = <strong>4 letters</strong><br>• Ananya: A-N-A-N-Y-A = <strong>6 letters</strong><br>• Aarav: A-A-R-A-V = <strong>5 letters</strong><br>• Dharmendra: D-H-A-R-M-E-N-D-R-A = <strong>10 letters</strong><br>3. <strong>Longest name:</strong> Dharmendra (10 letters)<br>4. <strong>Shortest name:</strong> Ravi (4 letters)<br>5. <strong>Difference:</strong> 10 - 4 = <strong>6 letters</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct letter count for all 4 names",
            "marks": "1.5 M"
          },
          {
            "key": "Identifying longest, shortest, and difference",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Classroom Activity • Alphabet Hunt",
        "q": "In a class of 20 children, 5 names start with the letter 'A', 3 with 'R', 4 with 'S', and 8 with other letters. How many names start with 'A', 'R', or 'S' altogether? What fraction of names start with 'A'?",
        "ans": "<strong>Given:</strong><br>• Total children = 20<br>• Names starting with 'A' = 5<br>• Names starting with 'R' = 3<br>• Names starting with 'S' = 4<br><br><strong>Calculation:</strong><br>• Total names starting with 'A', 'R', or 'S' = 5 + 3 + 4 = <strong>12 names</strong>.<br>• Fraction of names starting with 'A' = 5 out of 20 = 5/20 = <strong>1/4 (one-fourth)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct addition of name categories (5+3+4 = 12)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct fraction identification (5/20 = 1/4)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Hands-on Project • Name Tally Chart",
        "q": "How can you organize all the students' names in your class by the number of letters (3 letters, 4 letters, 5 letters, 6+ letters) using a tally chart? Create a sample tally chart for 15 students.",
        "ans": "<strong>Sample Tally Chart for 15 Students:</strong><br><table style='width:100%;border-collapse:collapse;margin-top:8px;'><thead><tr style='background:#f1f5f9;border-bottom:2px solid #cbd5e1;'><th style='padding:6px;border:1px solid #cbd5e1;'>Name Length</th><th style='padding:6px;border:1px solid #cbd5e1;'>Tally Marks</th><th style='padding:6px;border:1px solid #cbd5e1;'>Number of Children</th></tr></thead><tbody><tr><td style='padding:6px;border:1px solid #cbd5e1;'>3 letters (e.g., Ali, Uma)</td><td style='padding:6px;border:1px solid #cbd5e1;'>||</td><td style='padding:6px;border:1px solid #cbd5e1;'>2</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>4 letters (e.g., Riya, John)</td><td style='padding:6px;border:1px solid #cbd5e1;'>||||</td><td style='padding:6px;border:1px solid #cbd5e1;'>4</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>5 letters (e.g., Mohan, Priya)</td><td style='padding:6px;border:1px solid #cbd5e1;'><s>||||</s> |</td><td style='padding:6px;border:1px solid #cbd5e1;'>6</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>6+ letters (e.g., Deepak, Sunita)</td><td style='padding:6px;border:1px solid #cbd5e1;'>|||</td><td style='padding:6px;border:1px solid #cbd5e1;'>3</td></tr><tr style='font-weight:700;background:#f8fafc;'><td style='padding:6px;border:1px solid #cbd5e1;'>Total</td><td style='padding:6px;border:1px solid #cbd5e1;'>—</td><td style='padding:6px;border:1px solid #cbd5e1;'>15</td></tr></tbody></table>",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct layout and categories in table",
            "marks": "2.0 M"
          },
          {
            "key": "Correct tally mark grouping (bundles of 5)",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Animal Team Game • Comparing Length of Names",
        "q": "In the Animal Team Game, the captain of Team 1 has the longest name and the captain of Team 2 has the shortest name. Given the list of animals: Elephant (8 letters), Ox (2 letters), Tiger (5 letters), and Deer (4 letters):<br>(a) Who is the captain of Team 1 and Team 2?<br>(b) Can you name an animal with an even longer name than Team 1's captain?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Identifying Captains:</strong><br>• Elephant: E-L-E-P-H-A-N-T = 8 letters (Longest)<br>• Ox: O-X = 2 letters (Shortest)<br>• <strong>Team 1 Captain:</strong> Elephant (8 letters)<br>• <strong>Team 2 Captain:</strong> Ox (2 letters)<br><br><strong>(b) Animal with Longer Name:</strong><br>• Yes! <em>Crocodile</em> (C-R-O-C-O-D-I-L-E = 9 letters) or <em>Hippopotamus</em> (H-I-P-P-O-P-O-T-A-M-U-S = 12 letters) has a longer name than Elephant.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct identification of Elephant and Ox as captains",
            "marks": "1.5 M"
          },
          {
            "key": "Valid example of animal with >8 letters (e.g., Crocodile/Hippopotamus)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Discussion • Comparing Names",
        "q": "Mahesh and Kartik are comparing the number of letters in their names.<br>(a) Count the letters in 'Mahesh' and 'Kartik'.<br>(b) Who has a longer name, or are they equal?<br>(c) If their friend 'Venkatanarasimha' joins them, how many more letters does this name have than Mahesh?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Counting Letters:</strong><br>• M-A-H-E-S-H = 6 letters<br>• K-A-R-T-I-K = 6 letters<br><br><strong>(b) Comparison:</strong><br>• Both names have exactly <strong>6 letters</strong>. Neither is longer; they are equal in length.<br><br><strong>(c) Extra Letters:</strong><br>• V-E-N-K-A-T-A-N-A-R-A-S-I-M-H-A = 16 letters.<br>• Difference = 16 - 6 = <strong>10 more letters</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct counts for Mahesh (6) and Kartik (6)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct equality conclusion",
            "marks": "1.0 M"
          },
          {
            "key": "Correct difference calculation (16 - 6 = 10)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Tally Marks & Herding • Goat & Sheep Counting",
        "q": "Ankit has 35 goats and Tanya has 27 goats.<br>(a) How many more goats does Ankit have than Tanya?<br>(b) Show Tanya's goat count (27) using tally marks in standard bundles of 5.<br>(c) If their flock also includes 14 black sheep and 19 white sheep, what is the total number of sheep?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Difference in Goats:</strong><br>• Ankit's goats = 35<br>• Tanya's goats = 27<br>• Difference = 35 - 27 = <strong>8 more goats</strong>.<br><br><strong>(b) Tally Marks for 27:</strong><br>• 27 = (5 × 5) + 2 = <strong><s>||||</s> <s>||||</s> <s>||||</s> <s>||||</s> <s>||||</s> ||</strong> (5 bundles of five plus 2 individual marks).<br><br><strong>(c) Total Sheep:</strong><br>• Black sheep = 14<br>• White sheep = 19<br>• Total sheep = 14 + 19 = <strong>33 sheep</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct subtraction (35 - 27 = 8)",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate tally mark representation (5 bundles + 2 lines)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct addition of sheep (14 + 19 = 33)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Number Names Mountain Climb • Spelling Length",
        "q": "In the number climb from 1 to 99, count the letters in the spelling of each number name (do not count hyphens):<br>(a) 'Seventy-eight'<br>(b) 'Ninety-three'<br>(c) 'Twenty-two'<br>Which of these three has the maximum number of letters, and which has the minimum?",
        "ans": "<strong>Letter Counting:</strong><br>• <strong>(a) Seventy-eight:</strong> S-E-V-E-N-T-Y (7) + E-I-G-H-T (5) = <strong>12 letters</strong>.<br>• <strong>(b) Ninety-three:</strong> N-I-N-E-T-Y (6) + T-H-R-E-E (5) = <strong>11 letters</strong>.<br>• <strong>(c) Twenty-two:</strong> T-W-E-N-T-Y (6) + T-W-O (3) = <strong>9 letters</strong>.<br><br><strong>Conclusion:</strong><br>• <strong>Maximum letters:</strong> Seventy-eight (12 letters)<br>• <strong>Minimum letters:</strong> Twenty-two (9 letters).",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate letter count for all three number names (12, 11, 9)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct identification of maximum (78) and minimum (22)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Name Length Comparison",
        "q": "In an animal team game, the following animal names are listed: Elephant, Ox, Deer, Kangaroo, Lion, Fox.<br>(a) Count the letters in each animal's name.<br>(b) Which animal has the longest name and which has the shortest?<br>(c) How many letters longer is the longest name compared to the shortest?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Counting Letters:</strong><br>• Elephant: E-L-E-P-H-A-N-T = 8 letters<br>• Ox: O-X = 2 letters<br>• Deer: D-E-E-R = 4 letters<br>• Kangaroo: K-A-N-G-A-R-O-O = 8 letters<br>• Lion: L-I-O-N = 4 letters<br>• Fox: F-O-X = 3 letters<br><br><strong>(b) Longest & Shortest:</strong><br>• Longest: Elephant and Kangaroo (8 letters each).<br>• Shortest: Ox (2 letters).<br><br><strong>(c) Difference:</strong><br>• 8 - 2 = <strong>6 letters</strong> longer.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct letter counts for all 6 animals",
            "marks": "1.0 M"
          },
          {
            "key": "Correct longest and shortest identified",
            "marks": "1.0 M"
          },
          {
            "key": "Difference calculation: 8 - 2 = 6",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Starting Letter Frequency",
        "q": "In a class of 24 children, the teacher records their names: 6 start with 'S', 5 start with 'A', 4 start with 'M', 3 start with 'R', and 6 start with other letters.<br>(a) Which letter is the most common starting letter?<br>(b) How many names start with either 'S' or 'A'?<br>(c) Represent the counts for 'S', 'A', 'M', and 'R' using tally marks in bundles of 5.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>(a) Most common starting letter:</strong> Letter 'S' with 6 children.<br>• <strong>(b) Starting with 'S' or 'A':</strong> 6 + 5 = <strong>11 names</strong>.<br>• <strong>(c) Tally marks:</strong><br>• 'S' (6) = <s>||||</s> |<br>• 'A' (5) = <s>||||</s><br>• 'M' (4) = ||||<br>• 'R' (3) = |||.",
        "marks": 3,
        "rubric": [
          {
            "key": "Most common starting letter 'S'",
            "marks": "1.0 M"
          },
          {
            "key": "Sum of S and A = 11",
            "marks": "1.0 M"
          },
          {
            "key": "Correct tally marks for all 4 categories",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Exploration • Vowels in Names",
        "q": "Look at the name 'AMITABH':<br>(a) How many total letters are in this name?<br>(b) How many vowels (A, E, I, O, U) are present?<br>(c) How many consonants are present?<br>(d) What fraction of the letters are vowels?",
        "ans": "<strong>Analysis of 'AMITABH':</strong><br>• Letters: A - M - I - T - A - B - H.<br>• <strong>(a) Total letters:</strong> 7 letters.<br>• <strong>(b) Vowels:</strong> A, I, A = <strong>3 vowels</strong>.<br>• <strong>(c) Consonants:</strong> M, T, B, H = <strong>4 consonants</strong>.<br>• <strong>(d) Fraction of vowels:</strong> 3 out of 7 = <strong>3/7</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total letters = 7",
            "marks": "0.5 M"
          },
          {
            "key": "Vowels = 3, Consonants = 4",
            "marks": "1.5 M"
          },
          {
            "key": "Fraction = 3/7",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practice Time • Reversing Names",
        "q": "Some words read the same forward and backward, such as 'NOON' or 'RADAR'.<br>(a) Check if the names 'KANAK' and 'NAMAN' read the same backwards.<br>(b) Write down the letters of 'ROHIT' in reverse order. Does it form the same word?",
        "ans": "<strong>Palindrome Word Analysis:</strong><br>• <strong>(a) Checking KANAK & NAMAN:</strong><br>• K-A-N-A-K reversed is K-A-N-A-K (Same!).<br>• N-A-M-A-N reversed is N-A-M-A-N (Same!).<br>Both are palindromes.<br>• <strong>(b) Reversing 'ROHIT':</strong><br>• R-O-H-I-T in reverse order is <strong>T-I-H-O-R</strong>.<br>This is not the same word.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct verification of KANAK and NAMAN as palindromes",
            "marks": "1.5 M"
          },
          {
            "key": "Reversing ROHIT to TIHOR and concluding not the same",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Let us Do • Name Length Ordering",
        "q": "Arrange the following names from shortest to longest (ascending order): Sunita (6), Ali (3), Dharmendra (10), Priya (5), Raj (3), Meenakshi (9).",
        "ans": "<strong>Step-by-Step Ordering:</strong><br>1. Count each name:<br>• Ali: 3 letters<br>• Raj: 3 letters<br>• Priya: 5 letters<br>• Sunita: 6 letters<br>• Meenakshi: 9 letters<br>• Dharmendra: 10 letters<br><br><strong>Ascending Order:</strong><br>Ali / Raj (3) → Priya (5) → Sunita (6) → Meenakshi (9) → Dharmendra (10).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct counts for all names",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate ascending order",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Classroom Project • Grouping by Letter Count",
        "q": "In a class, the teacher asked children with 4-letter names to stand in Line 1, 5-letter names in Line 2, and 6-letter names in Line 3. If there are 8 children in Line 1, 12 in Line 2, and 7 in Line 3:<br>(a) Which line has the largest number of children?<br>(b) How many children are there in all three lines combined?",
        "ans": "<strong>Calculations:</strong><br>• <strong>(a) Line with most children:</strong> Line 2 (5-letter names) with <strong>12 children</strong>.<br>• <strong>(b) Total children:</strong> 8 + 12 + 7 = <strong>27 children</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Line 2 identified as largest (12 children)",
            "marks": "1.0 M"
          },
          {
            "key": "Total count 8 + 12 + 7 = 27",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Math • Letter Arithmetic",
        "q": "If each letter in a name is worth 2 points, find the total points for the name 'KAVITA'. If 'DEEPAK' is scored the same way, who gets more points and by how much?",
        "ans": "<strong>Point Calculations:</strong><br>• KAVITA has 6 letters: Score = 6 × 2 = <strong>12 points</strong>.<br>• DEEPAK has 6 letters: Score = 6 × 2 = <strong>12 points</strong>.<br>• <strong>Comparison:</strong> Both names have 6 letters, so both score exactly <strong>12 points</strong>. Neither scores more; their points are equal.",
        "marks": 2,
        "rubric": [
          {
            "key": "Kavita = 12 points, Deepak = 12 points",
            "marks": "1.0 M"
          },
          {
            "key": "Conclusion of equal score",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "In-Text Exploration • Words with Common Letters",
        "q": "Find three 4-letter words that end with the letters 'O-O-K'. Write their names and count total letters.",
        "ans": "<strong>Words Ending in 'O-O-K':</strong><br>1. <strong>BOOK</strong> (B-O-O-K = 4 letters)<br>2. <strong>LOOK</strong> (L-O-O-K = 4 letters)<br>3. <strong>COOK</strong> (C-O-O-K = 4 letters)<br>Other valid words: HOOK, TOOK.<br>Total letters across all three words = 4 + 4 + 4 = <strong>12 letters</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Three valid words ending in -ook",
            "marks": "1.5 M"
          },
          {
            "key": "Total count = 12 letters",
            "marks": "0.5 M"
          }
        ]
      },
      {
        "category": "Critical Thinking • Name Code Puzzle",
        "q": "In a secret alphabet code, A=1, B=2, C=3, D=4, E=5. What is the sum of the letter values for the word 'B E D'?",
        "ans": "<strong>Code Calculation:</strong><br>• B = 2<br>• E = 5<br>• D = 4<br>• Sum = 2 + 5 + 4 = <strong>11</strong>.<br>The secret number code for 'BED' is <strong>11</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct code values B=2, E=5, D=4",
            "marks": "1.0 M"
          },
          {
            "key": "Sum = 11",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Discussion • Family Name Comparison",
        "q": "Ritu's family has 4 members: Father (Ramesh - 6 letters), Mother (Sunita - 6 letters), Brother (Aman - 4 letters), and Ritu (4 letters).<br>(a) What is the total number of letters in all 4 names?<br>(b) What is the average number of letters per person?",
        "ans": "<strong>Calculations:</strong><br>• <strong>(a) Total Letters:</strong> 6 + 6 + 4 + 4 = <strong>20 letters</strong>.<br>• <strong>(b) Average:</strong> Total letters ÷ 4 members = 20 ÷ 4 = <strong>5 letters per person</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Total letters = 20",
            "marks": "1.0 M"
          },
          {
            "key": "Average = 5 letters",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Summary Practice • True or False",
        "q": "State whether each statement is True or False:<br>(a) The name 'AARAV' has more vowels than consonants.<br>(b) 'INDIA' has exactly 5 letters.<br>(c) A tally mark bundle of 5 is drawn as five vertical lines without any cross line.",
        "ans": "<strong>Answers:</strong><br>• <strong>(a) True:</strong> AARAV has 3 vowels (A, A, A) and 2 consonants (R, V). 3 > 2.<br>• <strong>(b) True:</strong> I-N-D-I-A has 5 letters.<br>• <strong>(c) False:</strong> In standard tally marks, a bundle of 5 is drawn as 4 vertical lines with the 5th line drawn diagonally across them (<s>||||</s>).",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) True with explanation",
            "marks": "1.0 M"
          },
          {
            "key": "(b) True",
            "marks": "1.0 M"
          },
          {
            "key": "(c) False with explanation of diagonal slash",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Practical Problem Solving",
        "q": "In Chapter 1 ('What's in a Name?'), a student solves an exercise problem: If 1 packet contains 12 items, how many items are in 4 such packets? Explain using repeated addition and multiplication.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Repeated addition: 12 + 12 + 12 + 12 = <strong>48 items</strong>.<br>2. Multiplication fact: 4 × 12 = <strong>48 items</strong>.<br>3. Both methods yield the exact same answer. Multiplication is efficient repeated addition.",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeated addition 12+12+12+12 = 48",
            "marks": "1 M"
          },
          {
            "key": "Multiplication 4 × 12 = 48",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Concept Exploration",
        "q": "In 'What's in a Name?', how do you verify your mathematical calculations? Give an example using two numbers that add up to 100.",
        "ans": "<strong>Verification Method:</strong><br>• Take two numbers: 65 and 35. Sum = 65 + 35 = 100.<br>• Verification by inverse operation (subtraction): 100 - 35 = 65, and 100 - 65 = 35.<br>• Since subtraction brings back the original numbers, the addition is confirmed correct.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 65 + 35 = 100",
            "marks": "1 M"
          },
          {
            "key": "Inverse check 100 - 35 = 65",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practice Time • Mental Math Drills",
        "q": "Solve mentally:<br>(a) 25 + 75 = ?<br>(b) 150 - 60 = ?<br>(c) Double of 45 = ?<br>(d) Half of 80 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 25 + 75 = <strong>100</strong>.<br>• (b) 150 - 60 = <strong>90</strong>.<br>• (c) 45 × 2 = <strong>90</strong>.<br>• (d) 80 ÷ 2 = <strong>40</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental math facts correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application",
        "q": "A school library received 3 boxes of mathematics activity books. Each box contained 25 books. During the week, 38 books were distributed to Grade 3 children. How many books remain in the library?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total books received = 3 × 25 = <strong>75 books</strong>.<br>2. Books distributed = 38 books.<br>3. Books remaining = 75 - 38 = <strong>37 books</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total 3 × 25 = 75",
            "marks": "1.5 M"
          },
          {
            "key": "Remainder 75 - 38 = 37",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Critical Thinking • Finding the Pattern",
        "q": "Observe the sequence related to 'What's in a Name?': 12, 24, 36, 48, ___, ___. Find the next two terms and state the mathematical rule.",
        "ans": "<strong>Pattern Analysis:</strong><br>• 12 + 12 = 24<br>• 24 + 12 = 36<br>• 36 + 12 = 48<br>• Rule: Successive addition of 12 (Multiples of 12).<br>• Next terms: 48 + 12 = <strong>60</strong>, 60 + 12 = <strong>72</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 60, 72",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiples of 12 / +12 step",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Estimation & Measurement • Practical Judgment",
        "q": "Estimate whether each measurement is greater than or less than 1 metre:<br>(a) Length of your classroom pencil.<br>(b) Height of your classroom teacher.<br>(c) Width of your mathematics textbook.<br>(d) Length of the school blackboard.",
        "ans": "<strong>Estimation:</strong><br>• (a) Pencil: <strong>Less than 1 metre</strong> (approx. 15 cm).<br>• (b) Teacher height: <strong>Greater than 1 metre</strong> (approx. 1.6 to 1.7 m).<br>• (c) Textbook width: <strong>Less than 1 metre</strong> (approx. 20 cm).<br>• (d) Blackboard length: <strong>Greater than 1 metre</strong> (approx. 2 to 3 m).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct estimation for all 4 items",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Interpretation • Reading Simple Tables",
        "q": "A table shows student preferences for fruit: Apple (15), Banana (22), Mango (35), Orange (18).<br>(a) Which fruit is preferred by the maximum number of students?<br>(b) How many more students prefer Mango over Banana?<br>(c) What is the total number of students surveyed?",
        "ans": "<strong>Table Interpretation:</strong><br>• (a) Maximum preference: <strong>Mango</strong> with 35 students.<br>• (b) Difference: 35 - 22 = <strong>13 more students</strong> prefer Mango.<br>• (c) Total students: 15 + 22 + 35 + 18 = <strong>90 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mango identified",
            "marks": "1 M"
          },
          {
            "key": "Difference = 13",
            "marks": "1 M"
          },
          {
            "key": "Total = 90",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Do • Shapes and Symmetry",
        "q": "Draw a line of symmetry through each shape:<br>(a) A rectangle<br>(b) An equilateral triangle<br>(c) A circle.<br>How many lines of symmetry does a circle have?",
        "ans": "<strong>Symmetry Properties:</strong><br>• (a) A rectangle has <strong>2 lines of symmetry</strong> (horizontal and vertical through centers of opposite sides).<br>• (b) An equilateral triangle has <strong>3 lines of symmetry</strong> (from each vertex to opposite midpoint).<br>• (c) A circle has <strong>infinite lines of symmetry</strong> (any diameter passing through the center).",
        "marks": 3,
        "rubric": [
          {
            "key": "Rectangle = 2 lines",
            "marks": "1 M"
          },
          {
            "key": "Triangle = 3 lines",
            "marks": "1 M"
          },
          {
            "key": "Circle = infinite lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Puzzle Time • Missing Number Grid",
        "q": "In a 3x3 magic square, the sum of each row, column, and diagonal is 15. The center number is 5. What numbers go in the opposite corners if one corner is 2?",
        "ans": "<strong>Magic Square Logic:</strong><br>• In a 3x3 magic square with sum 15 and center 5, opposite corners must sum to 10 (since 2 + 5 + x = 15 → x = 8).<br>• If one corner is 2, the diagonally opposite corner must be <strong>8</strong>.<br>• Other corner pairs: 4 and 6.",
        "marks": 2,
        "rubric": [
          {
            "key": "Opposite corner = 8 with reasoning",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Money & Shopping • Cash Memo Bill",
        "q": "Rani visits a stationery shop and buys: 2 Pencils at ₹5 each, 1 Eraser for ₹3, and 1 Notebook for ₹25. Prepare a simple cash memo showing total bill and change returned from a ₹50 note.",
        "ans": "<strong>Cash Memo Preparation:</strong><br>• 2 Pencils @ ₹5 = ₹10<br>• 1 Eraser @ ₹3 = ₹3<br>• 1 Notebook @ ₹25 = ₹25<br>• <strong>Total Bill Amount</strong> = ₹10 + ₹3 + ₹25 = <strong>₹38</strong>.<br>• Amount paid = ₹50.<br>• <strong>Change returned</strong> = ₹50 - ₹38 = <strong>₹12</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct item breakdown and total ₹38",
            "marks": "2 M"
          },
          {
            "key": "Change = ₹12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Review • Comprehensive Concept Check",
        "q": "True or False:<br>(a) 1 kilometre is equal to 1000 metres.<br>(b) 500 millilitres is equal to half a litre.<br>(c) A square has 4 equal straight edges and 4 right-angled corners.",
        "ans": "<strong>Review Answers:</strong><br>• (a) <strong>True:</strong> 1 km = 1000 m.<br>• (b) <strong>True:</strong> 1 Litre = 1000 mL, so half a litre = 500 mL.<br>• (c) <strong>True:</strong> A square has 4 equal sides and 4 right angles.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 statements correctly evaluated as True",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Library Badge Code Challenge",
      "text": "The school librarian gives each child a library code based on their name: 10 points for each letter in the first name plus 5 points for each vowel (A, E, I, O, U).",
      "question": "Calculate the total library badge score for 'KAVITA'. How many vowels are in her name, and what is her final code value?",
      "answer": "1. Name: K-A-V-I-T-A contains 6 letters.<br>2. Letter points = 6 × 10 = 60 points.<br>3. Vowels in KAVITA: A, I, A = 3 vowels.<br>4. Vowel bonus points = 3 × 5 = 15 points.<br>5. <strong>Total library badge score</strong> = 60 + 15 = <strong>75 points</strong>.",
      "rubric": "1M letter points + 1M vowel identification + 1M final calculation."
    }
  },
  {
    "id": "mm2",
    "num": 2,
    "unit": "Unit 1: Numbers & Everyday Math",
    "title": "Toy Joy",
    "subtitle": "Counting, Grouping, Place Value (Tens & Ones) & Price Tag Calculations",
    "concepts": [
      "Grouping objects in tens and ones: building base-10 understanding.",
      "Forming 2-digit numbers using bundles of 10 sticks and loose 1s.",
      "Reading price tags on toys and combining coins/notes to pay exact amounts.",
      "Comparing toy prices: finding which costs more and which costs less."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fff7ed\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Toy Joy — Tens &amp; Ones Place Value Model</text>\n      <!-- 4 Tens -->\n      <rect x=\"70\" y=\"45\" width=\"22\" height=\"60\" rx=\"4\" fill=\"#fdba74\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n      <rect x=\"100\" y=\"45\" width=\"22\" height=\"60\" rx=\"4\" fill=\"#fdba74\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n      <rect x=\"130\" y=\"45\" width=\"22\" height=\"60\" rx=\"4\" fill=\"#fdba74\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n      <rect x=\"160\" y=\"45\" width=\"22\" height=\"60\" rx=\"4\" fill=\"#fdba74\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n      <text x=\"125\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#c2410c\" text-anchor=\"middle\">4 Tens = 40</text>\n      <text x=\"225\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"20\" font-weight=\"800\" fill=\"#ea580c\" text-anchor=\"middle\">+</text>\n      <!-- 6 Ones -->\n      <circle cx=\"280\" cy=\"60\" r=\"10\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"1.5\"/>\n      <circle cx=\"310\" cy=\"60\" r=\"10\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"1.5\"/>\n      <circle cx=\"340\" cy=\"60\" r=\"10\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"1.5\"/>\n      <circle cx=\"280\" cy=\"90\" r=\"10\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"1.5\"/>\n      <circle cx=\"310\" cy=\"90\" r=\"10\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"1.5\"/>\n      <circle cx=\"340\" cy=\"90\" r=\"10\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"1.5\"/>\n      <text x=\"310\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#c2410c\" text-anchor=\"middle\">6 Ones = 6</text>\n      <!-- Equal Box -->\n      <text x=\"400\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"20\" font-weight=\"800\" fill=\"#ea580c\" text-anchor=\"middle\">=</text>\n      <rect x=\"430\" y=\"48\" width=\"100\" height=\"55\" rx=\"8\" fill=\"#ea580c\"/>\n      <text x=\"480\" y=\"85\" font-family=\"system-ui, sans-serif\" font-size=\"24\" font-weight=\"900\" fill=\"#ffffff\" text-anchor=\"middle\">46</text>\n      <text x=\"480\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Toy Car Price: ₹46</text>\n    </svg>",
    "questions": [
      {
        "category": "Textbook Exercise • Tens & Ones",
        "q": "A toy shop owner has 64 marbles. How many packets of 10 marbles can she make, and how many loose marbles will be left over? Write 64 in expanded form.",
        "ans": "<strong>Solution:</strong><br>• Total marbles = 64<br>• Number of tens in 64 = <strong>6 packets of 10</strong> (6 × 10 = 60)<br>• Loose marbles left over = <strong>4 marbles</strong><br>• <strong>Expanded Form:</strong> 64 = 60 + 4 = 6 Tens + 4 Ones.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct number of packets (6) and loose (4)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct expanded form representation (60 + 4)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Money & Pricing",
        "q": "Rani buys a teddy bear for ₹38 and a spinning top for ₹24. (a) What is the total cost? (b) If she gives a ₹100 note to the shopkeeper, how much change should she receive?",
        "ans": "<strong>Step-by-step Solution:</strong><br><strong>(a) Total Cost:</strong><br>Cost of teddy bear = ₹38<br>Cost of spinning top = ₹24<br>Total = ₹38 + ₹24 = ₹(30 + 20 + 8 + 4) = ₹50 + ₹12 = <strong>₹62</strong>.<br><br><strong>(b) Change Received:</strong><br>Amount given = ₹100<br>Total spent = ₹62<br>Change = ₹100 - ₹62 = <strong>₹38</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct addition for total cost (₹62)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct subtraction for balance change (₹38)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Logical Puzzle • Number Riddle",
        "q": "I have 5 in my tens place. The digit in my ones place is 3 more than the digit in my tens place. What number am I? Is this number even or odd?",
        "ans": "<strong>Deduction:</strong><br>1. Digit in tens place = 5<br>2. Digit in ones place = 5 + 3 = 8<br>3. The number is <strong>58</strong>.<br>4. Since the ones digit is 8 (divisible by 2), the number 58 is an <strong>EVEN number</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct calculation of ones digit and number 58",
            "marks": "1.0 M"
          },
          {
            "key": "Correct classification as Even",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Bead Necklaces & Bundling • Tens and Ones",
        "q": "A craftsman makes bead necklaces. Each necklace contains exactly 10 beads.<br>(a) How many full necklaces can be made from 85 beads, and how many loose beads are left over?<br>(b) How many more beads are needed to make one more complete necklace?<br>(c) Express 85 in standard expanded form.",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Full Necklaces and Loose Beads:</strong><br>• Total beads = 85<br>• Number of tens in 85 = <strong>8 complete necklaces</strong> (8 × 10 = 80 beads)<br>• Loose beads remaining = 85 - 80 = <strong>5 loose beads</strong>.<br><br><strong>(b) Beads Needed for Next Necklace:</strong><br>• One necklace requires 10 beads. Currently we have 5 loose beads.<br>• Needed = 10 - 5 = <strong>5 more beads</strong>.<br><br><strong>(c) Expanded Form:</strong><br>• 85 = 8 Tens + 5 Ones = <strong>80 + 5</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct calculation of 8 necklaces and 5 loose beads",
            "marks": "1.0 M"
          },
          {
            "key": "Correct beads needed for next necklace (5 beads)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct expanded form representation (80 + 5)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Price Comparison • Toy Shop Rates",
        "q": "Look at the prices of these toys: Toy Car = ₹65, Robot = ₹92, Doll = ₹48, Wooden Train = ₹75.<br>(a) Arrange the toys in ascending order of their prices (cheapest to costliest).<br>(b) What is the difference in price between the most expensive toy and the cheapest toy?<br>(c) Can you buy both the Doll and the Toy Car with a single ₹100 note? Explain with calculation.",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Ascending Order:</strong><br>• ₹48 (Doll) &lt; ₹65 (Toy Car) &lt; ₹75 (Wooden Train) &lt; ₹92 (Robot).<br><br><strong>(b) Price Difference:</strong><br>• Costliest = Robot (₹92)<br>• Cheapest = Doll (₹48)<br>• Difference = ₹92 - ₹48 = <strong>₹44</strong>.<br><br><strong>(c) ₹100 Budget Verification:</strong><br>• Cost of Doll + Toy Car = ₹48 + ₹65 = <strong>₹113</strong>.<br>• Since ₹113 &gt; ₹100, <strong>No</strong>, you cannot buy both toys with a ₹100 note. You are short by ₹13.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct ascending order arrangement",
            "marks": "1.0 M"
          },
          {
            "key": "Correct difference calculation (92 - 48 = 44)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct budget calculation (48 + 65 = 113 > 100)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Coin Combinations • Exact Payment",
        "q": "Rohit wants to buy a toy airplane costing ₹76. He has ₹10 notes and ₹5, ₹2, and ₹1 coins.<br>(a) Give one combination of notes and coins to make exactly ₹76.<br>(b) Give another combination using fewer notes and more coins.",
        "ans": "<strong>Step-by-Step Combinations:</strong><br><strong>(a) Combination 1 (Standard):</strong><br>• 7 notes of ₹10 = ₹70<br>• 1 coin of ₹5 = ₹5<br>• 1 coin of ₹1 = ₹1<br>• Total = ₹70 + ₹5 + ₹1 = <strong>₹76</strong>.<br><br><strong>(b) Combination 2 (More Coins):</strong><br>• 6 notes of ₹10 = ₹60<br>• 3 coins of ₹5 = ₹15<br>• 1 coin of ₹1 = ₹1<br>• Total = ₹60 + ₹15 + ₹1 = <strong>₹76</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "First valid currency combination summing to ₹76",
            "marks": "1.5 M"
          },
          {
            "key": "Second distinct valid currency combination summing to ₹76",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Number Sequences • Toy Train Carriages",
        "q": "Complete the following skip counting sequences written on toy train carriages:<br>(a) 14, 24, 34, ___, ___, 64<br>(b) 85, 75, 65, ___, ___, 35<br>(c) What is the pattern rule in sequence (a) and sequence (b)?",
        "ans": "<strong>Solution:</strong><br><strong>(a)</strong> 14, 24, 34, <strong>44</strong>, <strong>54</strong>, 64.<br><strong>(b)</strong> 85, 75, 65, <strong>55</strong>, <strong>45</strong>, 35.<br><strong>(c) Pattern Rules:</strong><br>• Sequence (a) follows: <strong>Add 10 (+10)</strong> each time.<br>• Sequence (b) follows: <strong>Subtract 10 (-10)</strong> each time.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct blanks in sequence (a): 44, 54",
            "marks": "1.0 M"
          },
          {
            "key": "Correct blanks in sequence (b): 55, 45",
            "marks": "1.0 M"
          },
          {
            "key": "Correct identification of rules (+10 and -10)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Bundles of Ten",
        "q": "A toy seller has 68 rubber balls. He packs them into packets of 10 balls each.<br>(a) How many full packets can he make?<br>(b) How many loose balls will be left over?<br>(c) How many more balls does he need to complete another packet?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>(a) Full packets:</strong> 68 has 6 tens. He can make <strong>6 full packets</strong> (6 × 10 = 60).<br>• <strong>(b) Loose balls:</strong> 68 - 60 = <strong>8 loose balls</strong>.<br>• <strong>(c) Balls needed:</strong> 10 - 8 = <strong>2 more balls</strong> to make the next packet.",
        "marks": 3,
        "rubric": [
          {
            "key": "6 packets",
            "marks": "1 M"
          },
          {
            "key": "8 loose balls",
            "marks": "1 M"
          },
          {
            "key": "2 more balls needed",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practice Time • Comparing Toy Prices",
        "q": "In a toy shop: Robot costs ₹75, Car costs ₹45, Drum costs ₹90, and Yo-yo costs ₹20.<br>(a) Which toy costs the most and which costs the least?<br>(b) Arrange all 4 toys in order from least expensive to most expensive.<br>(c) If Raju buys the Car and Yo-yo, how much does he pay?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>(a) Prices:</strong> Most expensive is Drum (₹90); least expensive is Yo-yo (₹20).<br>• <strong>(b) Ascending Order:</strong> Yo-yo (₹20) < Car (₹45) < Robot (₹75) < Drum (₹90).<br>• <strong>(c) Total cost:</strong> ₹45 + ₹20 = <strong>₹65</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Drum most expensive, Yo-yo least",
            "marks": "1 M"
          },
          {
            "key": "Ascending order",
            "marks": "1 M"
          },
          {
            "key": "Total ₹65",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Building • Tens and Ones",
        "q": "Write the numbers represented by:<br>(a) 4 tens and 7 ones<br>(b) 8 tens and 0 ones<br>(c) 9 tens and 9 ones<br>(d) 5 tens and 14 ones.",
        "ans": "<strong>Solutions:</strong><br>• (a) (4 × 10) + 7 = 40 + 7 = <strong>47</strong>.<br>• (b) (8 × 10) + 0 = <strong>80</strong>.<br>• (c) (9 × 10) + 9 = 90 + 9 = <strong>99</strong>.<br>• (d) (5 × 10) + 14 = 50 + 14 = <strong>64</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "47, 80, 99, 64 correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Money Problems • Paying Exact Amount",
        "q": "A teddy bear costs ₹65. Which combination of currency notes can be used to pay exactly ₹65 without receiving change?<br>(A) Three ₹20 notes and one ₹5 coin<br>(B) One ₹50 note, one ₹10 note, and one ₹5 coin<br>(C) Both A and B are correct.",
        "ans": "<strong>Verification:</strong><br>• Option A: (3 × ₹20) + ₹5 = ₹60 + ₹5 = ₹65.<br>• Option B: ₹50 + ₹10 + ₹5 = ₹65.<br>• Therefore, <strong>(C) Both A and B are correct</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Validating both note combinations make ₹65",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Mental Math • Skip Counting by 10",
        "q": "Count by tens starting from 25: 25, 35, 45, ___, ___, ___, 85, 95.",
        "ans": "<strong>Sequence:</strong><br>Adding 10 at each step:<br>25, 35, 45, <strong>55</strong>, <strong>65</strong>, <strong>75</strong>, 85, 95.<br>Missing numbers are <strong>55, 65, 75</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct missing values: 55, 65, 75",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Toys on Shelves",
        "q": "There are 3 shelves of toys. Shelf 1 has 24 toys, Shelf 2 has 31 toys, and Shelf 3 has 19 toys. How many toys are there in total?",
        "ans": "<strong>Addition:</strong><br>24 + 31 + 19 = 24 + (31 + 19) = 24 + 50 = <strong>74 toys</strong> in total.",
        "marks": 2,
        "rubric": [
          {
            "key": "Total = 74 toys with working",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Think & Solve • Finding Difference",
        "q": "Pooja has ₹92. She wants to buy a battery car costing ₹100. How much more money does she need?",
        "ans": "<strong>Subtraction:</strong><br>₹100 - ₹92 = <strong>₹8</strong> more needed.",
        "marks": 1,
        "rubric": [
          {
            "key": "₹8 difference",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Hands-on Activity • Exchanging Coins",
        "q": "How many 5-rupee coins make ₹50? How many 10-rupee notes make ₹100?",
        "ans": "<strong>Division:</strong><br>• ₹50 ÷ ₹5 = <strong>10 coins</strong> of 5 rupees.<br>• ₹100 ÷ ₹10 = <strong>10 notes</strong> of 10 rupees.",
        "marks": 2,
        "rubric": [
          {
            "key": "10 coins and 10 notes",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Place Value Puzzle • Mystery Number",
        "q": "I have 7 in my tens place. My ones digit is 3 less than my tens digit. What number am I?",
        "ans": "<strong>Deduction:</strong><br>• Tens digit = 7.<br>• Ones digit = 7 - 3 = 4.<br>• Number = <strong>74</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Number = 74",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Expanded Form Practice • Decomposing Numbers",
        "q": "Write 83 and 59 in expanded form using tens and ones.",
        "ans": "<strong>Expanded Form:</strong><br>• 83 = 8 Tens + 3 Ones = <strong>80 + 3</strong>.<br>• 59 = 5 Tens + 9 Ones = <strong>50 + 9</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "80 + 3 and 50 + 9",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Review Questions • Rounding to Nearest 10",
        "q": "Round each number to the nearest ten: (a) 42 (b) 78 (c) 65.",
        "ans": "<strong>Rounding Rules:</strong><br>• (a) 42: Ones digit is 2 (<5), rounds down to <strong>40</strong>.<br>• (b) 78: Ones digit is 8 (≥5), rounds up to <strong>80</strong>.<br>• (c) 65: Ones digit is 5, rounds up to <strong>70</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "40, 80, 70 correct with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Toy Store Clearance Sale",
      "text": "During Diwali sale, the shop offers a 'Buy 2 Get ₹10 Off' coupon on toy purchases above ₹50.",
      "question": "Arjun selects a toy drum for ₹35 and a toy car for ₹42. Does he qualify for the discount? What is his final bill amount?",
      "answer": "1. Total cost before discount = ₹35 + ₹42 = ₹77.<br>2. Since ₹77 is greater than ₹50 and he bought 2 toys, Arjun qualifies for the discount.<br>3. Discount = ₹10.<br>4. <strong>Final bill amount</strong> = ₹77 - ₹10 = <strong>₹67</strong>.",
      "rubric": "1M qualification logic + 1M addition + 1M discount subtraction."
    }
  },
  {
    "id": "mm3",
    "num": 3,
    "unit": "Unit 1: Numbers & Everyday Math",
    "title": "Double Century",
    "subtitle": "3-Digit Numbers, Place Value up to 200, Century & Number Line Jumps",
    "concepts": [
      "Understanding 'Century' (100) and 'Double Century' (200).",
      "Counting beyond 100 up to 200 in 1s, 2s, 5s, and 10s.",
      "Cricket scores and running between wickets: practical applications of centuries.",
      "Number line representation and skip counting forward and backward."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Cricket Scoreboard — Journey to Double Century (200)</text>\n      <!-- Batting Scoreboard -->\n      <rect x=\"60\" y=\"45\" width=\"460\" height=\"70\" rx=\"8\" fill=\"#14532d\"/>\n      <text x=\"90\" y=\"75\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#86efac\">VIRAT: 96</text>\n      <text x=\"90\" y=\"98\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#bbf7d0\">Needs: 100 - 96 = 4 runs for Century</text>\n      <line x1=\"280\" y1=\"52\" x2=\"280\" y2=\"108\" stroke=\"#16a34a\" stroke-width=\"1.5\"/>\n      <text x=\"310\" y=\"75\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#fde047\">ROHIT: 178</text>\n      <text x=\"310\" y=\"98\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#fef08a\">Needs: 200 - 178 = 22 runs for Double Century</text>\n      <text x=\"290\" y=\"142\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">1 Century = 100 Runs • 1 Half-Century = 50 Runs • 1 Double Century = 200 Runs</text>\n    </svg>",
    "questions": [
      {
        "category": "Cricket Match Math • Centuries",
        "q": "In an ODI cricket match, Dhoni was batting on 93. A six was hit on the next ball. (a) Did he complete his century? (b) How many runs did he score in total?",
        "ans": "<strong>Solution:</strong><br>• Initial score = 93 runs<br>• Runs from six = 6 runs<br>• Total score = 93 + 6 = <strong>99 runs</strong>.<br>• <strong>(a)</strong> A century is exactly 100 runs. Since 99 is 1 less than 100, he did <strong>not</strong> complete his century (missed by 1 run).<br>• <strong>(b)</strong> Total score = <strong>99 runs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct addition (93 + 6 = 99)",
            "marks": "1.5 M"
          },
          {
            "key": "Accurate century determination (100 runs needed)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Number Patterns",
        "q": "Write the next four numbers for each sequence: (a) 102, 104, 106, __, __, __, __ (Jump 2 steps). (b) 150, 160, 170, __, __, __, __ (Jump 10 steps).",
        "ans": "<strong>Answers:</strong><br><strong>(a) Skip counting by 2:</strong><br>102, 104, 106, <strong>108, 110, 112, 114</strong>.<br><br><strong>(b) Skip counting by 10:</strong><br>150, 160, 170, <strong>180, 190, 200, 210</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct skip counting by 2",
            "marks": "1.0 M"
          },
          {
            "key": "Correct skip counting by 10 reaching 200",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Place Value Exploration • Expanded Form",
        "q": "Write the number name and expanded form for: (1) 147, (2) 199, (3) 200.",
        "ans": "<strong>Table of Values:</strong><br>• <strong>147:</strong> One hundred forty-seven = <strong>100 + 40 + 7</strong> (1 Hundred, 4 Tens, 7 Ones)<br>• <strong>199:</strong> One hundred ninety-nine = <strong>100 + 90 + 9</strong> (1 Hundred, 9 Tens, 9 Ones)<br>• <strong>200:</strong> Two hundred = <strong>200 + 0 + 0</strong> (2 Hundreds, 0 Tens, 0 Ones).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct number names",
            "marks": "1.5 M"
          },
          {
            "key": "Correct 3-digit place value breakdowns",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cricket Scoreboard Analysis • Centuries",
        "q": "Study the scores of four batsmen in an inter-school match:<br>• A.S. Kapil: 162 runs<br>• C.K. Nayudu: 128 runs<br>• P.K. Roy: 93 runs<br>• V.V.S. Laxman: 197 runs<br>(a) Who scored the highest runs, and who scored the lowest?<br>(b) How many more runs did V.V.S. Laxman need to complete a double century (200 runs)?<br>(c) How many more runs did P.K. Roy need to complete a century (100 runs)?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Highest and Lowest:</strong><br>• Highest scorer: <strong>V.V.S. Laxman (197 runs)</strong><br>• Lowest scorer: <strong>P.K. Roy (93 runs)</strong><br><br><strong>(b) Runs to Double Century:</strong><br>• Target = 200 runs<br>• V.V.S. scored = 197 runs<br>• Needed = 200 - 197 = <strong>3 runs</strong>.<br><br><strong>(c) Runs to Century:</strong><br>• Target = 100 runs<br>• P.K. scored = 93 runs<br>• Needed = 100 - 93 = <strong>7 runs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct highest (197) and lowest (93) identified",
            "marks": "1.0 M"
          },
          {
            "key": "Correct calculation for double century (200 - 197 = 3 runs)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct calculation for century (100 - 93 = 7 runs)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Number Line Jumps • Stepping Stones",
        "q": "In a stepping stone game on a 3-digit number track:<br>(a) A grasshopper starts at 110 and takes jumps of 10 steps forward. Write the next 4 numbers it lands on.<br>(b) A frog starts at 200 and takes jumps of 5 steps backward. Write the next 4 numbers it lands on.",
        "ans": "<strong>Solution:</strong><br><strong>(a) Grasshopper's forward jumps (+10):</strong><br>• 110 + 10 = <strong>120</strong><br>• 120 + 10 = <strong>130</strong><br>• 130 + 10 = <strong>140</strong><br>• 140 + 10 = <strong>150</strong>.<br><br><strong>(b) Frog's backward jumps (-5):</strong><br>• 200 - 5 = <strong>195</strong><br>• 195 - 5 = <strong>190</strong><br>• 190 - 5 = <strong>185</strong><br>• 185 - 5 = <strong>180</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct forward sequence: 120, 130, 140, 150",
            "marks": "1.5 M"
          },
          {
            "key": "Correct backward sequence: 195, 190, 185, 180",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Place Value & Expanded Form • 3-Digit Numbers",
        "q": "For the number 284:<br>(a) Write 284 in expanded form showing Hundreds, Tens, and Ones.<br>(b) Write the number name in words.<br>(c) State the place value and face value of the digit '8'.",
        "ans": "<strong>Step-by-Step Analysis:</strong><br><strong>(a) Expanded Form:</strong><br>• 284 = 2 Hundreds + 8 Tens + 4 Ones = <strong>200 + 80 + 4</strong>.<br><br><strong>(b) Number Name:</strong><br>• <strong>Two hundred eighty-four</strong>.<br><br><strong>(c) Digit '8':</strong><br>• <strong>Place Value:</strong> 8 Tens = <strong>80</strong>.<br>• <strong>Face Value:</strong> <strong>8</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct expanded form (200 + 80 + 4)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct number name spelling",
            "marks": "1.0 M"
          },
          {
            "key": "Correct place value (80) and face value (8)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Cricket Target Chase • Word Problem",
        "q": "In a 20-over match, Team Blue scored 182 runs. Team Green is batting and has scored 139 runs so far.<br>(a) What is the target score Team Green needs to win the match?<br>(b) How many more runs does Team Green need to reach the winning target?<br>(c) If they hit 3 sixes and 2 fours in the next over, how many runs will they score?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Winning Target:</strong><br>• Team Blue scored = 182 runs.<br>• Target to win = 182 + 1 = <strong>183 runs</strong>.<br><br><strong>(b) Runs Needed:</strong><br>• Target = 183 runs.<br>• Current score = 139 runs.<br>• Runs needed = 183 - 139 = <strong>44 runs</strong>.<br><br><strong>(c) Next Over Runs:</strong><br>• 3 sixes = 3 × 6 = 18 runs.<br>• 2 fours = 2 × 4 = 8 runs.<br>• Total = 18 + 8 = <strong>26 runs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct winning target (183 runs)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct subtraction (183 - 139 = 44 runs)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct boundary calculation (18 + 8 = 26 runs)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Century Scores",
        "q": "A cricket player scores 93 runs. How many more runs does he need to complete a century (100 runs)?",
        "ans": "<strong>Calculation:</strong><br>• 1 Century = 100 runs.<br>• Runs scored = 93.<br>• Runs needed = 100 - 93 = <strong>7 runs</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "100 - 93 = 7 runs",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Cricket Records • Top Scorers Table",
        "q": "In a school match, player scores are: C.K. (99 runs), Dhoni (102 runs), Virat (162 runs), Rahane (152 runs).<br>(a) Who missed a century by just 1 run?<br>(b) Who scored almost one and a half centuries (150 runs)?<br>(c) How many runs did Rahane and Dhoni score together?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>(a) Missed century by 1 run:</strong> C.K. (100 - 99 = 1 run).<br>• <strong>(b) Almost 1.5 centuries (150 runs):</strong> Rahane with 152 runs.<br>• <strong>(c) Combined score:</strong> 152 + 102 = <strong>254 runs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "C.K. missed by 1 run",
            "marks": "1 M"
          },
          {
            "key": "Rahane (152 runs)",
            "marks": "1 M"
          },
          {
            "key": "Sum = 254 runs",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Names • Writing in Words",
        "q": "Write the number names for: (a) 109 (b) 148 (c) 195 (d) 200.",
        "ans": "<strong>Number Names:</strong><br>• (a) 109 = <strong>One hundred nine</strong><br>• (b) 148 = <strong>One hundred forty-eight</strong><br>• (c) 195 = <strong>One hundred ninety-five</strong><br>• (d) 200 = <strong>Two hundred</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 number names correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Counting by Steps • Jumping Numbers",
        "q": "Jump 2 steps forward: 104, 106, 108, ___, ___, ___, 116.<br>Jump 10 steps backward: 200, 190, 180, ___, ___, ___.",
        "ans": "<strong>Sequences:</strong><br>• Jump 2 steps forward: 104, 106, 108, <strong>110</strong>, <strong>112</strong>, <strong>114</strong>, 116.<br>• Jump 10 steps backward: 200, 190, 180, <strong>170</strong>, <strong>160</strong>, <strong>150</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "110, 112, 114 correct",
            "marks": "1 M"
          },
          {
            "key": "170, 160, 150 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Place Value Exploration • 3-Digit Breakdown",
        "q": "In the number 174, identify:<br>(a) The digit in hundreds place and its place value.<br>(b) The digit in tens place and its place value.<br>(c) The digit in ones place and its place value.<br>(d) Write 174 in expanded form.",
        "ans": "<strong>Place Value Analysis of 174:</strong><br>• (a) Hundreds digit = 1; Place value = 1 × 100 = <strong>100</strong>.<br>• (b) Tens digit = 7; Place value = 7 × 10 = <strong>70</strong>.<br>• (c) Ones digit = 4; Place value = 4 × 1 = <strong>4</strong>.<br>• (d) Expanded form = <strong>100 + 70 + 4</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Hundreds, tens, ones place values",
            "marks": "2 M"
          },
          {
            "key": "Expanded form: 100 + 70 + 4",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Who Am I? • Number Riddles",
        "q": "Solve the riddles:<br>(a) I come between 140 and 150 and I have a 5 in my ones place. Who am I?<br>(b) I have 9 in my tens place and I am very close to 100. Who am I?<br>(c) If you hit a 6 after me, you score a century. Who am I?",
        "ans": "<strong>Riddle Solutions:</strong><br>• (a) Between 140 and 150 with 5 in ones place = <strong>145</strong>.<br>• (b) 9 in tens place, close to 100 = <strong>99</strong> (or 90-99 range).<br>• (c) Score + 6 = 100 → 100 - 6 = <strong>94</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "145",
            "marks": "1 M"
          },
          {
            "key": "99",
            "marks": "1 M"
          },
          {
            "key": "94",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparing 3-Digit Numbers • Greater and Smaller",
        "q": "Insert '>' or '<' between the pairs: (a) 139 ___ 193 (b) 175 ___ 157 (c) 200 ___ 199 (d) 108 ___ 180.",
        "ans": "<strong>Comparisons:</strong><br>• (a) 139 <strong><</strong> 193<br>• (b) 175 <strong>></strong> 157<br>• (c) 200 <strong>></strong> 199<br>• (d) 108 <strong><</strong> 180.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 inequalities correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Cricket Partnership",
        "q": "Rohit and Shikhar make a partnership of 185 runs. Rohit scored 95 runs. How many runs did Shikhar score?",
        "ans": "<strong>Subtraction:</strong><br>• Total partnership = 185 runs.<br>• Rohit's runs = 95 runs.<br>• Shikhar's runs = 185 - 95 = <strong>90 runs</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "185 - 95 = 90 runs with working",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Patterns of Fifty • Skip Counting by 50",
        "q": "Count in fifties from 50 to 300: 50, 100, ___, ___, ___, 300.",
        "ans": "<strong>Counting in 50s:</strong><br>50, 100, <strong>150</strong>, <strong>200</strong>, <strong>250</strong>, 300.<br>Missing numbers are <strong>150, 200, 250</strong>.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "150, 200, 250",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Abacus Representation • Beads Count",
        "q": "An abacus shows: 1 bead on Hundreds spike, 6 beads on Tens spike, and 3 beads on Ones spike. What 3-digit number does it represent? Write its number name.",
        "ans": "<strong>Number on Abacus:</strong><br>• Hundreds = 1, Tens = 6, Ones = 3.<br>• Number = <strong>163</strong>.<br>• Number name = <strong>One hundred sixty-three</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Number = 163",
            "marks": "1 M"
          },
          {
            "key": "Number name correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Ordering Numbers • Match Scores",
        "q": "Arrange the cricket scores in descending order (highest to lowest): 128, 182, 119, 191, 150.",
        "ans": "<strong>Descending Order:</strong><br>191 > 182 > 150 > 128 > 119.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct descending order",
            "marks": "2 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Inter-School Cricket Championship",
      "text": "Four batsmen in a school match scored: Aman (128), Kabir (164), Jaspreet (98), and Tenzing (185).",
      "question": "Who scored the highest? How many more runs did Kabir need to reach a double century?",
      "answer": "1. Comparing scores: 185 > 164 > 128 > 98.<br>• <strong>Highest scorer:</strong> Tenzing with 185 runs.<br>2. A double century = 200 runs.<br>• Runs needed by Kabir = 200 - 164 = <strong>36 runs</strong>.",
      "rubric": "1.5M comparison and identification + 1.5M subtraction from 200."
    }
  },
  {
    "id": "mm4",
    "num": 4,
    "unit": "Unit 2: Measurement & Everyday Life",
    "title": "Vacation with My Nani Maa",
    "subtitle": "Calendar Reading, Dates, Weeks, Days & Travel Time Calculation",
    "concepts": [
      "Reading calendar pages: identifying days, weeks, months, and dates.",
      "Calculating duration between two dates: start date to end date.",
      "Understanding leap years and standard 30/31-day month patterns.",
      "Estimating time taken for everyday journeys and household routines."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fdf4ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#86198f\" text-anchor=\"middle\">May Calendar — Nani Maa's Vacation Timeline</text>\n      <!-- Mini Calendar Grid -->\n      <rect x=\"70\" y=\"45\" width=\"200\" height=\"95\" rx=\"6\" fill=\"#ffffff\" stroke=\"#c084fc\" stroke-width=\"1.5\"/>\n      <rect x=\"70\" y=\"45\" width=\"200\" height=\"22\" fill=\"#c084fc\"/>\n      <text x=\"170\" y=\"60\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">MAY 2026</text>\n      <text x=\"80\" y=\"82\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#64748b\">S  M  T  W  T  F  S</text>\n      <text x=\"80\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#1e293b\">      1  2  3  4  5</text>\n      <rect x=\"135\" y=\"90\" width=\"16\" height=\"13\" fill=\"#fbcfe8\" rx=\"2\"/>\n      <text x=\"80\" y=\"118\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#1e293b\"> 6  7  8  9 10 11 12</text>\n      <text x=\"80\" y=\"134\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#1e293b\">13 14 15 16 17 18 19</text>\n      <!-- Vacation Span Info -->\n      <rect x=\"300\" y=\"45\" width=\"220\" height=\"95\" rx=\"6\" fill=\"#fae8ff\" stroke=\"#d946ef\" stroke-width=\"1.5\"/>\n      <text x=\"315\" y=\"70\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#701a75\">Trip Duration:</text>\n      <text x=\"315\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#4a044e\">Depart: 10 May • Return: 25 May</text>\n      <text x=\"315\" y=\"110\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#c026d3\">Days at Nani's = 25 - 10 = 15 Days</text>\n      <text x=\"315\" y=\"128\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#701a75\">Total = 2 Weeks &amp; 1 Day</text>\n    </svg>",
    "questions": [
      {
        "category": "Calendar Reading • Vacation Calculation",
        "q": "Aarav went to his Nani Maa's village on 15 May and returned home on 30 May. How many days did he spend at his grandmother's house? How many weeks and days is that?",
        "ans": "<strong>Solution:</strong><br>• Departure date = 15 May<br>• Return date = 30 May<br>• Days spent = 30 - 15 = <strong>15 days</strong>.<br>• Since 1 week = 7 days:<br>15 ÷ 7 = <strong>2 weeks with 1 day remaining</strong> (2 × 7 + 1 = 15 days).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct subtraction of dates (15 days)",
            "marks": "1.0 M"
          },
          {
            "key": "Conversion to weeks and remaining days (2 weeks 1 day)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Date Formats",
        "q": "Look at the manufacturing date stamped on a jar of mango pickle: '05/26'. It is best before 6 months from the date of packing. (a) What month and year was it packed? (b) Till which month is it safe to eat?",
        "ans": "<strong>Analysis:</strong><br><strong>(a) Packed Date:</strong> '05/26' indicates the <strong>5th month (May) of the year 2026</strong>.<br><strong>(b) Expiry Calculation:</strong><br>6 months from May 2026:<br>• 1 month: June<br>• 2 months: July<br>• 3 months: August<br>• 4 months: September<br>• 5 months: October<br>• 6 months: November 2026.<br>Therefore, it is safe to eat till <strong>November 2026</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct interpretation of 05/26 (May 2026)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct month addition (+6 months = November 2026)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Days in Months • Finger Knuckle Method",
        "q": "How many days are there in the months of: (a) July, (b) August, (c) September, (d) February in a non-leap year? Explain how knuckles help remember 30- and 31-day months.",
        "ans": "<strong>Days in Months:</strong><br>• (a) July = <strong>31 days</strong><br>• (b) August = <strong>31 days</strong><br>• (c) September = <strong>30 days</strong><br>• (d) February (ordinary year) = <strong>28 days</strong>.<br><br><strong>Knuckle Method:</strong> Months landing on knuckle bumps have 31 days (Jan, Mar, May, Jul, Aug, Oct, Dec). Months landing in the valleys between knuckles have 30 days (Apr, Jun, Sep, Nov), except February which has 28 or 29 days.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct days for all 4 months",
            "marks": "2.0 M"
          },
          {
            "key": "Accurate explanation of knuckle rule",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Bus Journey Fare • Matrix Problem",
        "q": "An adult bus ticket to Nani's village costs ₹55 and a child ticket costs ₹30. Rohan travels with his father, mother, and 6-year-old sister.<br>(a) How many adult tickets and child tickets are needed?<br>(b) Calculate the total bus fare for the family.<br>(c) If Rohan's father gives two ₹100 notes, how much change should he receive?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Passengers:</strong><br>• Adults: Father, Mother = <strong>2 adults</strong>.<br>• Children: Rohan, Sister = <strong>2 children</strong>.<br><br><strong>(b) Total Fare:</strong><br>• 2 adult tickets = 2 × ₹55 = ₹110.<br>• 2 child tickets = 2 × ₹30 = ₹60.<br>• Total fare = ₹110 + ₹60 = <strong>₹170</strong>.<br><br><strong>(c) Change Received:</strong><br>• Amount given = 2 × ₹100 = ₹200.<br>• Fare paid = ₹170.<br>• Change = ₹200 - ₹170 = <strong>₹30</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct breakdown of 2 adults and 2 children",
            "marks": "1.0 M"
          },
          {
            "key": "Correct total fare calculation (₹110 + ₹60 = ₹170)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct change calculation (₹200 - ₹170 = ₹30)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Travel Distances • Multi-Step Addition",
        "q": "To reach Nani's village, Rohan's family took three modes of transport:<br>• Auto-rickshaw to station: 14 km<br>• Train journey: 165 km<br>• Horse cart (tonga) from village station to Nani's house: 8 km<br>(a) What was the total distance traveled?<br>(b) How much longer was the train journey than the auto-rickshaw ride?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Total Distance:</strong><br>• Auto = 14 km<br>• Train = 165 km<br>• Tonga = 8 km<br>• Total = 14 + 165 + 8 = <strong>187 km</strong>.<br><br><strong>(b) Comparison:</strong><br>• Train = 165 km<br>• Auto = 14 km<br>• Difference = 165 - 14 = <strong>151 km longer</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct total distance sum (187 km)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct subtraction and comparison (151 km)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Farm Animals • Leg Counting Puzzle",
        "q": "In Nani's farmyard, Rohan counted 6 cows, 8 goats, and 14 chickens.<br>(a) How many 4-legged animals are in the farmyard?<br>(b) Calculate the total number of animal legs in the farmyard.",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) 4-Legged Animals:</strong><br>• Cows = 6<br>• Goats = 8<br>• Total 4-legged animals = 6 + 8 = <strong>14 animals</strong>.<br><br><strong>(b) Total Legs Calculation:</strong><br>• Legs of 14 four-legged animals = 14 × 4 = 56 legs.<br>• Legs of 14 two-legged chickens = 14 × 2 = 28 legs.<br>• Total legs = 56 + 28 = <strong>84 legs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct count of 4-legged animals (14)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct legs multiplication (56 and 28)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct total leg count (84 legs)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Village Haat Shopping • Itemized Bill",
        "q": "At the village haat, Nani bought:<br>• 3 kg of fresh gur (jaggery) at ₹40 per kg<br>• 2 earthen pots (matkas) at ₹35 each<br>• 4 bamboo fans at ₹15 each<br>Prepare an itemized cash memo and calculate the total amount spent.",
        "ans": "<strong>Itemized Cash Memo:</strong><br><table style='width:100%;border-collapse:collapse;margin-top:6px;'><thead><tr style='background:#f1f5f9;border-bottom:2px solid #cbd5e1;'><th style='padding:6px;border:1px solid #cbd5e1;'>Item</th><th style='padding:6px;border:1px solid #cbd5e1;'>Quantity</th><th style='padding:6px;border:1px solid #cbd5e1;'>Rate</th><th style='padding:6px;border:1px solid #cbd5e1;'>Amount</th></tr></thead><tbody><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Gur (Jaggery)</td><td style='padding:6px;border:1px solid #cbd5e1;'>3 kg</td><td style='padding:6px;border:1px solid #cbd5e1;'>₹40/kg</td><td style='padding:6px;border:1px solid #cbd5e1;'>₹120</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Earthen Matkas</td><td style='padding:6px;border:1px solid #cbd5e1;'>2 pots</td><td style='padding:6px;border:1px solid #cbd5e1;'>₹35 each</td><td style='padding:6px;border:1px solid #cbd5e1;'>₹70</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Bamboo Fans</td><td style='padding:6px;border:1px solid #cbd5e1;'>4 fans</td><td style='padding:6px;border:1px solid #cbd5e1;'>₹15 each</td><td style='padding:6px;border:1px solid #cbd5e1;'>₹60</td></tr><tr style='font-weight:700;background:#f8fafc;'><td colspan='3' style='padding:6px;border:1px solid #cbd5e1;text-align:right;'>Total Spent:</td><td style='padding:6px;border:1px solid #cbd5e1;'>₹250</td></tr></tbody></table>",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct sub-calculations (₹120, ₹70, ₹60)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct final sum (₹250)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Practical Problem Solving",
        "q": "In Chapter 4 ('Vacation with My Nani Maa'), a student solves an exercise problem: If 1 packet contains 12 items, how many items are in 4 such packets? Explain using repeated addition and multiplication.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Repeated addition: 12 + 12 + 12 + 12 = <strong>48 items</strong>.<br>2. Multiplication fact: 4 × 12 = <strong>48 items</strong>.<br>3. Both methods yield the exact same answer. Multiplication is efficient repeated addition.",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeated addition 12+12+12+12 = 48",
            "marks": "1 M"
          },
          {
            "key": "Multiplication 4 × 12 = 48",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Concept Exploration",
        "q": "In 'Vacation with My Nani Maa', how do you verify your mathematical calculations? Give an example using two numbers that add up to 100.",
        "ans": "<strong>Verification Method:</strong><br>• Take two numbers: 65 and 35. Sum = 65 + 35 = 100.<br>• Verification by inverse operation (subtraction): 100 - 35 = 65, and 100 - 65 = 35.<br>• Since subtraction brings back the original numbers, the addition is confirmed correct.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 65 + 35 = 100",
            "marks": "1 M"
          },
          {
            "key": "Inverse check 100 - 35 = 65",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practice Time • Mental Math Drills",
        "q": "Solve mentally:<br>(a) 25 + 75 = ?<br>(b) 150 - 60 = ?<br>(c) Double of 45 = ?<br>(d) Half of 80 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 25 + 75 = <strong>100</strong>.<br>• (b) 150 - 60 = <strong>90</strong>.<br>• (c) 45 × 2 = <strong>90</strong>.<br>• (d) 80 ÷ 2 = <strong>40</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental math facts correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application",
        "q": "A school library received 3 boxes of mathematics activity books. Each box contained 25 books. During the week, 38 books were distributed to Grade 3 children. How many books remain in the library?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total books received = 3 × 25 = <strong>75 books</strong>.<br>2. Books distributed = 38 books.<br>3. Books remaining = 75 - 38 = <strong>37 books</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total 3 × 25 = 75",
            "marks": "1.5 M"
          },
          {
            "key": "Remainder 75 - 38 = 37",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Critical Thinking • Finding the Pattern",
        "q": "Observe the sequence related to 'Vacation with My Nani Maa': 12, 24, 36, 48, ___, ___. Find the next two terms and state the mathematical rule.",
        "ans": "<strong>Pattern Analysis:</strong><br>• 12 + 12 = 24<br>• 24 + 12 = 36<br>• 36 + 12 = 48<br>• Rule: Successive addition of 12 (Multiples of 12).<br>• Next terms: 48 + 12 = <strong>60</strong>, 60 + 12 = <strong>72</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 60, 72",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiples of 12 / +12 step",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Estimation & Measurement • Practical Judgment",
        "q": "Estimate whether each measurement is greater than or less than 1 metre:<br>(a) Length of your classroom pencil.<br>(b) Height of your classroom teacher.<br>(c) Width of your mathematics textbook.<br>(d) Length of the school blackboard.",
        "ans": "<strong>Estimation:</strong><br>• (a) Pencil: <strong>Less than 1 metre</strong> (approx. 15 cm).<br>• (b) Teacher height: <strong>Greater than 1 metre</strong> (approx. 1.6 to 1.7 m).<br>• (c) Textbook width: <strong>Less than 1 metre</strong> (approx. 20 cm).<br>• (d) Blackboard length: <strong>Greater than 1 metre</strong> (approx. 2 to 3 m).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct estimation for all 4 items",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Interpretation • Reading Simple Tables",
        "q": "A table shows student preferences for fruit: Apple (15), Banana (22), Mango (35), Orange (18).<br>(a) Which fruit is preferred by the maximum number of students?<br>(b) How many more students prefer Mango over Banana?<br>(c) What is the total number of students surveyed?",
        "ans": "<strong>Table Interpretation:</strong><br>• (a) Maximum preference: <strong>Mango</strong> with 35 students.<br>• (b) Difference: 35 - 22 = <strong>13 more students</strong> prefer Mango.<br>• (c) Total students: 15 + 22 + 35 + 18 = <strong>90 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mango identified",
            "marks": "1 M"
          },
          {
            "key": "Difference = 13",
            "marks": "1 M"
          },
          {
            "key": "Total = 90",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Do • Shapes and Symmetry",
        "q": "Draw a line of symmetry through each shape:<br>(a) A rectangle<br>(b) An equilateral triangle<br>(c) A circle.<br>How many lines of symmetry does a circle have?",
        "ans": "<strong>Symmetry Properties:</strong><br>• (a) A rectangle has <strong>2 lines of symmetry</strong> (horizontal and vertical through centers of opposite sides).<br>• (b) An equilateral triangle has <strong>3 lines of symmetry</strong> (from each vertex to opposite midpoint).<br>• (c) A circle has <strong>infinite lines of symmetry</strong> (any diameter passing through the center).",
        "marks": 3,
        "rubric": [
          {
            "key": "Rectangle = 2 lines",
            "marks": "1 M"
          },
          {
            "key": "Triangle = 3 lines",
            "marks": "1 M"
          },
          {
            "key": "Circle = infinite lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Puzzle Time • Missing Number Grid",
        "q": "In a 3x3 magic square, the sum of each row, column, and diagonal is 15. The center number is 5. What numbers go in the opposite corners if one corner is 2?",
        "ans": "<strong>Magic Square Logic:</strong><br>• In a 3x3 magic square with sum 15 and center 5, opposite corners must sum to 10 (since 2 + 5 + x = 15 → x = 8).<br>• If one corner is 2, the diagonally opposite corner must be <strong>8</strong>.<br>• Other corner pairs: 4 and 6.",
        "marks": 2,
        "rubric": [
          {
            "key": "Opposite corner = 8 with reasoning",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Money & Shopping • Cash Memo Bill",
        "q": "Rani visits a stationery shop and buys: 2 Pencils at ₹5 each, 1 Eraser for ₹3, and 1 Notebook for ₹25. Prepare a simple cash memo showing total bill and change returned from a ₹50 note.",
        "ans": "<strong>Cash Memo Preparation:</strong><br>• 2 Pencils @ ₹5 = ₹10<br>• 1 Eraser @ ₹3 = ₹3<br>• 1 Notebook @ ₹25 = ₹25<br>• <strong>Total Bill Amount</strong> = ₹10 + ₹3 + ₹25 = <strong>₹38</strong>.<br>• Amount paid = ₹50.<br>• <strong>Change returned</strong> = ₹50 - ₹38 = <strong>₹12</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct item breakdown and total ₹38",
            "marks": "2 M"
          },
          {
            "key": "Change = ₹12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Review • Comprehensive Concept Check",
        "q": "True or False:<br>(a) 1 kilometre is equal to 1000 metres.<br>(b) 500 millilitres is equal to half a litre.<br>(c) A square has 4 equal straight edges and 4 right-angled corners.",
        "ans": "<strong>Review Answers:</strong><br>• (a) <strong>True:</strong> 1 km = 1000 m.<br>• (b) <strong>True:</strong> 1 Litre = 1000 mL, so half a litre = 500 mL.<br>• (c) <strong>True:</strong> A square has 4 equal sides and 4 right angles.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 statements correctly evaluated as True",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Train Journey Schedule Analysis",
      "text": "The Shatabdi Express leaves New Delhi station at 06:00 AM and arrives in Amritsar at 12:30 PM on the same day.",
      "question": "How long is the train journey in hours and minutes? If the train is delayed by 45 minutes, at what time will it reach?",
      "answer": "1. From 06:00 AM to 12:00 Noon = 6 hours.<br>2. From 12:00 Noon to 12:30 PM = 30 minutes.<br>• <strong>Scheduled journey time</strong> = <strong>6 hours and 30 minutes</strong>.<br>3. With a 45-minute delay: 12:30 PM + 45 minutes = 12:30 + 30 min (1:00 PM) + 15 min = <strong>01:15 PM</strong>.",
      "rubric": "1.5M journey duration calculation + 1.5M delayed arrival time."
    }
  },
  {
    "id": "mm5",
    "num": 5,
    "unit": "Unit 2: Measurement & Everyday Life",
    "title": "Fun with Shapes",
    "subtitle": "Edges, Corners, Flat & Curved Surfaces, 2D Patterns & Tangram Creations",
    "concepts": [
      "Identifying 2D shapes: rectangles, squares, triangles, and circles.",
      "Properties of shapes: counting straight sides, curved sides, and corners (vertices).",
      "Special properties: opposite sides equal in rectangles, all 4 sides equal in squares.",
      "Creating pictures with basic shapes and exploring tiling patterns."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Fun with 2D Geometric Shapes &amp; Attributes</text>\n      <!-- Triangle -->\n      <polygon points=\"80,50 40,110 120,110\" fill=\"#fecaca\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n      <text x=\"80\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Triangle</text>\n      <text x=\"80\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#b91c1c\" text-anchor=\"middle\">3 Sides, 3 Corners</text>\n      <!-- Square -->\n      <rect x=\"180\" y=\"55\" width=\"55\" height=\"55\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n      <text x=\"207\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Square</text>\n      <text x=\"207\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#c2410c\" text-anchor=\"middle\">4 Equal Sides, 4 Corners</text>\n      <!-- Rectangle -->\n      <rect x=\"300\" y=\"60\" width=\"90\" height=\"50\" fill=\"#bbf7d0\" stroke=\"#16a34a\" stroke-width=\"2\"/>\n      <text x=\"345\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">Rectangle</text>\n      <text x=\"345\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#15803d\" text-anchor=\"middle\">Opposite Sides Equal</text>\n      <!-- Circle -->\n      <circle cx=\"480\" cy=\"85\" r=\"28\" fill=\"#e9d5ff\" stroke=\"#9333ea\" stroke-width=\"2\"/>\n      <text x=\"480\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#581c87\" text-anchor=\"middle\">Circle</text>\n      <text x=\"480\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#7e22ce\" text-anchor=\"middle\">1 Curved Edge, 0 Corners</text>\n    </svg>",
    "questions": [
      {
        "category": "Textbook Exercise • Shape Attributes",
        "q": "Look at the following objects: A postcard, a round plate, a triangular birthday cap, and a chessboard. State the shape, number of edges, and number of corners for each.",
        "ans": "<strong>Shape Breakdown:</strong><br>• <strong>Postcard:</strong> Rectangle → 4 straight edges, 4 corners.<br>• <strong>Round Plate:</strong> Circle → 1 curved edge, 0 corners.<br>• <strong>Birthday Cap face:</strong> Triangle → 3 straight edges, 3 corners.<br>• <strong>Chessboard:</strong> Square → 4 equal straight edges, 4 corners.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct shape identification for all 4 items",
            "marks": "1.5 M"
          },
          {
            "key": "Correct counts of edges and corners",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Tangram Investigation • Problem Solving",
        "q": "How many pieces are in a 5-piece tangram? Which pieces are triangles, and can you combine two small triangles to make a square? Show the working.",
        "ans": "<strong>Explanation:</strong><br>1. A 5-piece tangram has <strong>5 pieces</strong>: 3 triangles, 1 square, and 1 parallelogram.<br>2. <strong>Making a square:</strong> Yes, by placing the longest sides (hypotenuses) of two identical small right-angled triangles together, their right angles become two opposite corners of a new <strong>square</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct composition of 5-piece tangram",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate geometric explanation of forming a square",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Practical Application • Tiling & Tessellation",
        "q": "Why can square and rectangular floor tiles cover a room completely without any gaps, but circular coins leave gaps when placed next to each other?",
        "ans": "<strong>Geometric Reason:</strong><br>• Squares and rectangles have straight edges and 90° corner angles. When placed side by side, their edges align flush against each other, filling all 360° around every point with zero empty space.<br>• Circles have curved boundaries. When round items touch, circular arcs curve away from each other, leaving open gaps between them. Hence, circles cannot tessellate.",
        "marks": 3,
        "rubric": [
          {
            "key": "Explanation of straight edges and corners fitting flush",
            "marks": "1.5 M"
          },
          {
            "key": "Explanation of curved arc gaps in circles",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Geometric Solids • Edges, Corners & Faces",
        "q": "Fill in the table for everyday objects:<br>(a) Brick (Cuboid): Number of faces, edges, and corners.<br>(b) Die (Cube): Number of faces, edges, and corners.<br>(c) Football (Sphere): Number of faces, edges, and corners.<br>(d) Can (Cylinder): Number of flat faces and curved surfaces.",
        "ans": "<strong>Step-by-Step Properties:</strong><br><table style='width:100%;border-collapse:collapse;margin-top:6px;'><thead><tr style='background:#f1f5f9;'><th style='padding:6px;border:1px solid #cbd5e1;'>Shape</th><th style='padding:6px;border:1px solid #cbd5e1;'>Faces</th><th style='padding:6px;border:1px solid #cbd5e1;'>Edges</th><th style='padding:6px;border:1px solid #cbd5e1;'>Corners (Vertices)</th></tr></thead><tbody><tr><td style='padding:6px;border:1px solid #cbd5e1;'><strong>Brick (Cuboid)</strong></td><td style='padding:6px;border:1px solid #cbd5e1;'>6 flat faces</td><td style='padding:6px;border:1px solid #cbd5e1;'>12 straight edges</td><td style='padding:6px;border:1px solid #cbd5e1;'>8 corners</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'><strong>Die (Cube)</strong></td><td style='padding:6px;border:1px solid #cbd5e1;'>6 flat square faces</td><td style='padding:6px;border:1px solid #cbd5e1;'>12 straight edges</td><td style='padding:6px;border:1px solid #cbd5e1;'>8 corners</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'><strong>Football (Sphere)</strong></td><td style='padding:6px;border:1px solid #cbd5e1;'>1 curved surface</td><td style='padding:6px;border:1px solid #cbd5e1;'>0 edges</td><td style='padding:6px;border:1px solid #cbd5e1;'>0 corners</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'><strong>Can (Cylinder)</strong></td><td style='padding:6px;border:1px solid #cbd5e1;'>2 flat circular faces + 1 curved surface</td><td style='padding:6px;border:1px solid #cbd5e1;'>2 circular curved edges</td><td style='padding:6px;border:1px solid #cbd5e1;'>0 corners</td></tr></tbody></table>",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct properties for cuboid and cube",
            "marks": "2.0 M"
          },
          {
            "key": "Correct properties for sphere and cylinder",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "7-Piece Tangram • Shape Assembly",
        "q": "In a standard 7-piece tangram puzzle:<br>(a) How many triangles are there in total?<br>(b) How many 4-sided shapes are there, and what are their names?<br>(c) Which two triangles are exactly identical in size?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Triangles in 7-piece Tangram:</strong><br>• There are <strong>5 triangles</strong> in total (2 large triangles, 1 medium triangle, and 2 small triangles).<br><br><strong>(b) 4-Sided Shapes:</strong><br>• There are <strong>2 four-sided shapes</strong>: <strong>1 Square</strong> and <strong>1 Parallelogram</strong>.<br><br><strong>(c) Identical Triangles:</strong><br>• The <strong>2 large triangles</strong> are exactly identical to each other.<br>• The <strong>2 small triangles</strong> are also exactly identical to each other.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct count of 5 triangles",
            "marks": "1.0 M"
          },
          {
            "key": "Correct identification of square and parallelogram",
            "marks": "1.0 M"
          },
          {
            "key": "Correct identification of identical pairs",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Tiling & Tessellation • Floor Patterns",
        "q": "Which of the following geometric shapes can cover a flat floor completely without leaving any gaps or overlaps?<br>(a) Squares<br>(b) Equilateral triangles<br>(c) Circles<br>Explain why circles cannot tile a flat surface.",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• <strong>(a) Squares:</strong> <strong>Yes</strong>, squares tile a floor seamlessly (like bathroom tiles).<br>• <strong>(b) Equilateral Triangles:</strong> <strong>Yes</strong>, equilateral triangles fit together perfectly around a point without gaps.<br>• <strong>(c) Circles:</strong> <strong>No</strong>, circles cannot tile a plane.<br><strong>Why Circles Cannot Tile:</strong> When identical circles are placed touching each other, curved spaces (interstitial gaps) are always left between them. Curved boundaries cannot fill straight plane vertices completely.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct identification of squares and triangles as tiling shapes",
            "marks": "1.5 M"
          },
          {
            "key": "Clear mathematical reason why circles leave gaps",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Paper Folding • Corners Exploration",
        "q": "Take a square sheet of paper. It has 4 corners.<br>(a) If you fold one corner diagonally, how many corners does the paper have now?<br>(b) Can you fold a piece of paper so that it has exactly 3 corners? What shape does it become?",
        "ans": "<strong>Step-by-Step Hands-on Geometry:</strong><br><strong>(a) Folding One Corner:</strong><br>• By folding down one corner, a new straight edge is formed across that corner, creating 2 new corners in place of the 1 folded corner.<br>• Total corners = 4 - 1 + 2 = <strong>5 corners</strong> (it becomes a pentagon).<br><br><strong>(b) Folding to 3 Corners:</strong><br>• <strong>Yes.</strong> If you fold a square sheet in half along its diagonal from corner to opposite corner, the folded paper forms a <strong>Triangle</strong>, which has exactly <strong>3 corners</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct deduction of 5 corners after folding one corner",
            "marks": "1.5 M"
          },
          {
            "key": "Correct identification of diagonal fold creating a triangle with 3 corners",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Practical Problem Solving",
        "q": "In Chapter 5 ('Fun with Shapes'), a student solves an exercise problem: If 1 packet contains 12 items, how many items are in 4 such packets? Explain using repeated addition and multiplication.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Repeated addition: 12 + 12 + 12 + 12 = <strong>48 items</strong>.<br>2. Multiplication fact: 4 × 12 = <strong>48 items</strong>.<br>3. Both methods yield the exact same answer. Multiplication is efficient repeated addition.",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeated addition 12+12+12+12 = 48",
            "marks": "1 M"
          },
          {
            "key": "Multiplication 4 × 12 = 48",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Concept Exploration",
        "q": "In 'Fun with Shapes', how do you verify your mathematical calculations? Give an example using two numbers that add up to 100.",
        "ans": "<strong>Verification Method:</strong><br>• Take two numbers: 65 and 35. Sum = 65 + 35 = 100.<br>• Verification by inverse operation (subtraction): 100 - 35 = 65, and 100 - 65 = 35.<br>• Since subtraction brings back the original numbers, the addition is confirmed correct.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 65 + 35 = 100",
            "marks": "1 M"
          },
          {
            "key": "Inverse check 100 - 35 = 65",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practice Time • Mental Math Drills",
        "q": "Solve mentally:<br>(a) 25 + 75 = ?<br>(b) 150 - 60 = ?<br>(c) Double of 45 = ?<br>(d) Half of 80 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 25 + 75 = <strong>100</strong>.<br>• (b) 150 - 60 = <strong>90</strong>.<br>• (c) 45 × 2 = <strong>90</strong>.<br>• (d) 80 ÷ 2 = <strong>40</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental math facts correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application",
        "q": "A school library received 3 boxes of mathematics activity books. Each box contained 25 books. During the week, 38 books were distributed to Grade 3 children. How many books remain in the library?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total books received = 3 × 25 = <strong>75 books</strong>.<br>2. Books distributed = 38 books.<br>3. Books remaining = 75 - 38 = <strong>37 books</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total 3 × 25 = 75",
            "marks": "1.5 M"
          },
          {
            "key": "Remainder 75 - 38 = 37",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Critical Thinking • Finding the Pattern",
        "q": "Observe the sequence related to 'Fun with Shapes': 12, 24, 36, 48, ___, ___. Find the next two terms and state the mathematical rule.",
        "ans": "<strong>Pattern Analysis:</strong><br>• 12 + 12 = 24<br>• 24 + 12 = 36<br>• 36 + 12 = 48<br>• Rule: Successive addition of 12 (Multiples of 12).<br>• Next terms: 48 + 12 = <strong>60</strong>, 60 + 12 = <strong>72</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 60, 72",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiples of 12 / +12 step",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Estimation & Measurement • Practical Judgment",
        "q": "Estimate whether each measurement is greater than or less than 1 metre:<br>(a) Length of your classroom pencil.<br>(b) Height of your classroom teacher.<br>(c) Width of your mathematics textbook.<br>(d) Length of the school blackboard.",
        "ans": "<strong>Estimation:</strong><br>• (a) Pencil: <strong>Less than 1 metre</strong> (approx. 15 cm).<br>• (b) Teacher height: <strong>Greater than 1 metre</strong> (approx. 1.6 to 1.7 m).<br>• (c) Textbook width: <strong>Less than 1 metre</strong> (approx. 20 cm).<br>• (d) Blackboard length: <strong>Greater than 1 metre</strong> (approx. 2 to 3 m).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct estimation for all 4 items",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Interpretation • Reading Simple Tables",
        "q": "A table shows student preferences for fruit: Apple (15), Banana (22), Mango (35), Orange (18).<br>(a) Which fruit is preferred by the maximum number of students?<br>(b) How many more students prefer Mango over Banana?<br>(c) What is the total number of students surveyed?",
        "ans": "<strong>Table Interpretation:</strong><br>• (a) Maximum preference: <strong>Mango</strong> with 35 students.<br>• (b) Difference: 35 - 22 = <strong>13 more students</strong> prefer Mango.<br>• (c) Total students: 15 + 22 + 35 + 18 = <strong>90 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mango identified",
            "marks": "1 M"
          },
          {
            "key": "Difference = 13",
            "marks": "1 M"
          },
          {
            "key": "Total = 90",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Do • Shapes and Symmetry",
        "q": "Draw a line of symmetry through each shape:<br>(a) A rectangle<br>(b) An equilateral triangle<br>(c) A circle.<br>How many lines of symmetry does a circle have?",
        "ans": "<strong>Symmetry Properties:</strong><br>• (a) A rectangle has <strong>2 lines of symmetry</strong> (horizontal and vertical through centers of opposite sides).<br>• (b) An equilateral triangle has <strong>3 lines of symmetry</strong> (from each vertex to opposite midpoint).<br>• (c) A circle has <strong>infinite lines of symmetry</strong> (any diameter passing through the center).",
        "marks": 3,
        "rubric": [
          {
            "key": "Rectangle = 2 lines",
            "marks": "1 M"
          },
          {
            "key": "Triangle = 3 lines",
            "marks": "1 M"
          },
          {
            "key": "Circle = infinite lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Puzzle Time • Missing Number Grid",
        "q": "In a 3x3 magic square, the sum of each row, column, and diagonal is 15. The center number is 5. What numbers go in the opposite corners if one corner is 2?",
        "ans": "<strong>Magic Square Logic:</strong><br>• In a 3x3 magic square with sum 15 and center 5, opposite corners must sum to 10 (since 2 + 5 + x = 15 → x = 8).<br>• If one corner is 2, the diagonally opposite corner must be <strong>8</strong>.<br>• Other corner pairs: 4 and 6.",
        "marks": 2,
        "rubric": [
          {
            "key": "Opposite corner = 8 with reasoning",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Money & Shopping • Cash Memo Bill",
        "q": "Rani visits a stationery shop and buys: 2 Pencils at ₹5 each, 1 Eraser for ₹3, and 1 Notebook for ₹25. Prepare a simple cash memo showing total bill and change returned from a ₹50 note.",
        "ans": "<strong>Cash Memo Preparation:</strong><br>• 2 Pencils @ ₹5 = ₹10<br>• 1 Eraser @ ₹3 = ₹3<br>• 1 Notebook @ ₹25 = ₹25<br>• <strong>Total Bill Amount</strong> = ₹10 + ₹3 + ₹25 = <strong>₹38</strong>.<br>• Amount paid = ₹50.<br>• <strong>Change returned</strong> = ₹50 - ₹38 = <strong>₹12</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct item breakdown and total ₹38",
            "marks": "2 M"
          },
          {
            "key": "Change = ₹12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Review • Comprehensive Concept Check",
        "q": "True or False:<br>(a) 1 kilometre is equal to 1000 metres.<br>(b) 500 millilitres is equal to half a litre.<br>(c) A square has 4 equal straight edges and 4 right-angled corners.",
        "ans": "<strong>Review Answers:</strong><br>• (a) <strong>True:</strong> 1 km = 1000 m.<br>• (b) <strong>True:</strong> 1 Litre = 1000 mL, so half a litre = 500 mL.<br>• (c) <strong>True:</strong> A square has 4 equal sides and 4 right angles.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 statements correctly evaluated as True",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Classroom Floor Tiling Project",
      "text": "The school is laying square tiles of side 1 metre in an activity hall that is 6 metres long and 4 metres wide.",
      "question": "How many 1-metre square tiles are needed to pave the entire floor? If each tile costs ₹50, find the total cost of tiles.",
      "answer": "1. Area of floor = Length × Width = 6 m × 4 m = 24 square metres.<br>2. Area of 1 tile = 1 m × 1 m = 1 square metre.<br>3. <strong>Number of tiles needed</strong> = 24 ÷ 1 = <strong>24 tiles</strong>.<br>4. <strong>Total cost</strong> = 24 × ₹50 = <strong>₹1,200</strong>.",
      "rubric": "1.5M tile count calculation + 1.5M total cost multiplication."
    }
  },
  {
    "id": "mm6",
    "num": 6,
    "unit": "Unit 3: Expanding Place Value & Operations",
    "title": "House of Hundreds – I",
    "subtitle": "Place Value (Hundreds, Tens, Ones), 3-Digit Numbers, Abacus & Expansion",
    "concepts": [
      "Building 3-digit numbers using 100-flats, 10-rods, and 1-units (Dienes blocks).",
      "Reading and representing numbers up to 500 on a 3-spike abacus.",
      "Writing standard form, expanded form, and number words up to 500.",
      "Ordering and comparing 3-digit numbers using greater than (>) and less than (<)."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">House of Hundreds — Base-10 Model for 346</text>\n      <!-- 3 Hundreds (Large Squares) -->\n      <rect x=\"50\" y=\"45\" width=\"50\" height=\"50\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\n      <rect x=\"70\" y=\"55\" width=\"50\" height=\"50\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\n      <rect x=\"90\" y=\"65\" width=\"50\" height=\"50\" fill=\"#fcd34d\" stroke=\"#d97706\" stroke-width=\"2\"/>\n      <text x=\"115\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">3 Hundreds = 300</text>\n      <!-- 4 Tens (Rods) -->\n      <rect x=\"230\" y=\"50\" width=\"8\" height=\"65\" fill=\"#fdba74\" stroke=\"#ea580c\" stroke-width=\"1\"/>\n      <rect x=\"245\" y=\"50\" width=\"8\" height=\"65\" fill=\"#fdba74\" stroke=\"#ea580c\" stroke-width=\"1\"/>\n      <rect x=\"260\" y=\"50\" width=\"8\" height=\"65\" fill=\"#fdba74\" stroke=\"#ea580c\" stroke-width=\"1\"/>\n      <rect x=\"275\" y=\"50\" width=\"8\" height=\"65\" fill=\"#fdba74\" stroke=\"#ea580c\" stroke-width=\"1\"/>\n      <text x=\"260\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#c2410c\" text-anchor=\"middle\">4 Tens = 40</text>\n      <!-- 6 Ones (Units) -->\n      <rect x=\"360\" y=\"60\" width=\"10\" height=\"10\" fill=\"#a7f3d0\" stroke=\"#059669\" stroke-width=\"1\"/>\n      <rect x=\"375\" y=\"60\" width=\"10\" height=\"10\" fill=\"#a7f3d0\" stroke=\"#059669\" stroke-width=\"1\"/>\n      <rect x=\"390\" y=\"60\" width=\"10\" height=\"10\" fill=\"#a7f3d0\" stroke=\"#059669\" stroke-width=\"1\"/>\n      <rect x=\"360\" y=\"75\" width=\"10\" height=\"10\" fill=\"#a7f3d0\" stroke=\"#059669\" stroke-width=\"1\"/>\n      <rect x=\"375\" y=\"75\" width=\"10\" height=\"10\" fill=\"#a7f3d0\" stroke=\"#059669\" stroke-width=\"1\"/>\n      <rect x=\"390\" y=\"75\" width=\"10\" height=\"10\" fill=\"#a7f3d0\" stroke=\"#059669\" stroke-width=\"1\"/>\n      <text x=\"380\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#047857\" text-anchor=\"middle\">6 Ones = 6</text>\n      <!-- Result -->\n      <rect x=\"445\" y=\"55\" width=\"100\" height=\"55\" rx=\"8\" fill=\"#d97706\"/>\n      <text x=\"495\" y=\"92\" font-family=\"system-ui, sans-serif\" font-size=\"24\" font-weight=\"900\" fill=\"#ffffff\" text-anchor=\"middle\">346</text>\n    </svg>",
    "questions": [
      {
        "category": "Place Value Exploration • 3-Digit Numbers",
        "q": "What is the place value and face value of the underlined digit in each: (a) 4<u>7</u>2, (b) <u>3</u>09, (c) 25<u>8</u>?",
        "ans": "<strong>Values:</strong><br>• <strong>(a) 4<u>7</u>2:</strong> The digit 7 is in the Tens place.<br>Face Value = <strong>7</strong>, Place Value = 7 × 10 = <strong>70</strong>.<br><br>• <strong>(b) <u>3</u>09:</strong> The digit 3 is in the Hundreds place.<br>Face Value = <strong>3</strong>, Place Value = 3 × 100 = <strong>300</strong>.<br><br>• <strong>(c) 25<u>8</u>:</strong> The digit 8 is in the Ones place.<br>Face Value = <strong>8</strong>, Place Value = 8 × 1 = <strong>8</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct face values for all three digits",
            "marks": "1.5 M"
          },
          {
            "key": "Correct place values according to positional weight",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Number Ordering • Ascending & Descending",
        "q": "Arrange the following numbers in: (a) Ascending order (smallest to largest), (b) Descending order (largest to smallest): 345, 289, 412, 198, 305.",
        "ans": "<strong>Solution:</strong><br><strong>(a) Ascending Order:</strong><br>198 &lt; 289 &lt; 305 &lt; 345 &lt; 412<br>Order: <strong>198, 289, 305, 345, 412</strong>.<br><br><strong>(b) Descending Order:</strong><br>412 &gt; 345 &gt; 305 &gt; 289 &gt; 198<br>Order: <strong>412, 345, 305, 289, 198</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct ascending arrangement",
            "marks": "1.0 M"
          },
          {
            "key": "Correct descending arrangement",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Forming Numbers • Greatest & Smallest",
        "q": "Using the digits 4, 0, and 7 without repeating any digit: (a) Write the greatest 3-digit number. (b) Write the smallest 3-digit number. Explain why 0 cannot be in the hundreds place.",
        "ans": "<strong>Analysis:</strong><br>• <strong>(a) Greatest 3-digit number:</strong> Arrange digits in descending order → <strong>740</strong>.<br>• <strong>(b) Smallest 3-digit number:</strong> We cannot put 0 at the start because 047 is only a 2-digit number (47). The smallest non-zero digit is 4, followed by 0, then 7 → <strong>407</strong>.<br>• <strong>Explanation:</strong> Placing 0 in the hundreds place means there are zero hundreds, reducing the number to tens and ones (a 2-digit number).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct greatest number (740)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct smallest number (407)",
            "marks": "1.0 M"
          },
          {
            "key": "Valid mathematical reason regarding leading zero",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Arrow Cards Assembly • Place Value",
        "q": "Using arrow cards for Hundreds, Tens, and Ones:<br>(a) Assemble the cards 400, 70, and 6. What 3-digit number is formed?<br>(b) Write the number formed in words.<br>(c) If you replace the card '70' with '30', what is the new number, and how much did the value decrease?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Arrow Card Assembly:</strong><br>• 400 + 70 + 6 = <strong>476</strong>.<br><br><strong>(b) Number Name:</strong><br>• <strong>Four hundred seventy-six</strong>.<br><br><strong>(c) Value Decrease:</strong><br>• New number = 400 + 30 + 6 = <strong>436</strong>.<br>• Decrease in value = 476 - 436 = <strong>40</strong> (or 70 - 30 = 40).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct number formation (476)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct number name in words",
            "marks": "1.0 M"
          },
          {
            "key": "Correct new number (436) and decrease (40)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Abacus Representation • 3-Digit Numbers",
        "q": "An abacus has three spikes: Hundreds (H), Tens (T), and Ones (O).<br>(a) If there are 3 green beads on H, 5 yellow beads on T, and 2 blue beads on O, write the number.<br>(b) How many total beads are on the abacus?<br>(c) If 2 beads are removed from the Tens spike and added to the Hundreds spike, what new number is formed?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Number on Abacus:</strong><br>• Hundreds = 3, Tens = 5, Ones = 2.<br>• Number = <strong>352</strong>.<br><br><strong>(b) Total Beads:</strong><br>• 3 + 5 + 2 = <strong>10 beads</strong>.<br><br><strong>(c) New Number:</strong><br>• New Hundreds = 3 + 2 = 5 Hundreds.<br>• New Tens = 5 - 2 = 3 Tens.<br>• Ones remain = 2 Ones.<br>• New number = <strong>532</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct initial number (352)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct total beads (10)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct transformation to new number (532)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Number Sequences • Missing 3-Digit Numbers",
        "q": "Fill in the missing numbers in these sequences:<br>(a) 245, 246, ___, 248, ___, 250<br>(b) 310, 320, ___, 340, ___, 360<br>(c) 490, 480, ___, 460, ___, 440",
        "ans": "<strong>Solution:</strong><br><strong>(a) Consecutive (+1):</strong> 245, 246, <strong>247</strong>, 248, <strong>249</strong>, 250.<br><strong>(b) Skip counting by 10s (+10):</strong> 310, 320, <strong>330</strong>, 340, <strong>350</strong>, 360.<br><strong>(c) Counting backward by 10s (-10):</strong> 490, 480, <strong>470</strong>, 460, <strong>450</strong>, 440.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct answers for (a): 247, 249",
            "marks": "1.0 M"
          },
          {
            "key": "Correct answers for (b): 330, 350",
            "marks": "1.0 M"
          },
          {
            "key": "Correct answers for (c): 470, 450",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Math • Adding 10 and 100",
        "q": "Find the answers using mental math tricks without long column addition:<br>(a) 325 + 10<br>(b) 325 + 100<br>(c) 468 - 10<br>(d) 468 - 100",
        "ans": "<strong>Mental Math Solutions:</strong><br>• <strong>(a) 325 + 10:</strong> Increase the Tens digit (2) by 1 $\\rightarrow$ <strong>335</strong>.<br>• <strong>(b) 325 + 100:</strong> Increase the Hundreds digit (3) by 1 $\\rightarrow$ <strong>425</strong>.<br>• <strong>(c) 468 - 10:</strong> Decrease the Tens digit (6) by 1 $\\rightarrow$ <strong>458</strong>.<br>• <strong>(d) 468 - 100:</strong> Decrease the Hundreds digit (4) by 1 $\\rightarrow$ <strong>368</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct addition answers: 335 and 425",
            "marks": "2.0 M"
          },
          {
            "key": "Correct subtraction answers: 458 and 368",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Practical Problem Solving",
        "q": "In Chapter 6 ('House of Hundreds – I'), a student solves an exercise problem: If 1 packet contains 12 items, how many items are in 4 such packets? Explain using repeated addition and multiplication.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Repeated addition: 12 + 12 + 12 + 12 = <strong>48 items</strong>.<br>2. Multiplication fact: 4 × 12 = <strong>48 items</strong>.<br>3. Both methods yield the exact same answer. Multiplication is efficient repeated addition.",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeated addition 12+12+12+12 = 48",
            "marks": "1 M"
          },
          {
            "key": "Multiplication 4 × 12 = 48",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Concept Exploration",
        "q": "In 'House of Hundreds – I', how do you verify your mathematical calculations? Give an example using two numbers that add up to 100.",
        "ans": "<strong>Verification Method:</strong><br>• Take two numbers: 65 and 35. Sum = 65 + 35 = 100.<br>• Verification by inverse operation (subtraction): 100 - 35 = 65, and 100 - 65 = 35.<br>• Since subtraction brings back the original numbers, the addition is confirmed correct.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 65 + 35 = 100",
            "marks": "1 M"
          },
          {
            "key": "Inverse check 100 - 35 = 65",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practice Time • Mental Math Drills",
        "q": "Solve mentally:<br>(a) 25 + 75 = ?<br>(b) 150 - 60 = ?<br>(c) Double of 45 = ?<br>(d) Half of 80 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 25 + 75 = <strong>100</strong>.<br>• (b) 150 - 60 = <strong>90</strong>.<br>• (c) 45 × 2 = <strong>90</strong>.<br>• (d) 80 ÷ 2 = <strong>40</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental math facts correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application",
        "q": "A school library received 3 boxes of mathematics activity books. Each box contained 25 books. During the week, 38 books were distributed to Grade 3 children. How many books remain in the library?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total books received = 3 × 25 = <strong>75 books</strong>.<br>2. Books distributed = 38 books.<br>3. Books remaining = 75 - 38 = <strong>37 books</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total 3 × 25 = 75",
            "marks": "1.5 M"
          },
          {
            "key": "Remainder 75 - 38 = 37",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Critical Thinking • Finding the Pattern",
        "q": "Observe the sequence related to 'House of Hundreds – I': 12, 24, 36, 48, ___, ___. Find the next two terms and state the mathematical rule.",
        "ans": "<strong>Pattern Analysis:</strong><br>• 12 + 12 = 24<br>• 24 + 12 = 36<br>• 36 + 12 = 48<br>• Rule: Successive addition of 12 (Multiples of 12).<br>• Next terms: 48 + 12 = <strong>60</strong>, 60 + 12 = <strong>72</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 60, 72",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiples of 12 / +12 step",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Estimation & Measurement • Practical Judgment",
        "q": "Estimate whether each measurement is greater than or less than 1 metre:<br>(a) Length of your classroom pencil.<br>(b) Height of your classroom teacher.<br>(c) Width of your mathematics textbook.<br>(d) Length of the school blackboard.",
        "ans": "<strong>Estimation:</strong><br>• (a) Pencil: <strong>Less than 1 metre</strong> (approx. 15 cm).<br>• (b) Teacher height: <strong>Greater than 1 metre</strong> (approx. 1.6 to 1.7 m).<br>• (c) Textbook width: <strong>Less than 1 metre</strong> (approx. 20 cm).<br>• (d) Blackboard length: <strong>Greater than 1 metre</strong> (approx. 2 to 3 m).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct estimation for all 4 items",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Interpretation • Reading Simple Tables",
        "q": "A table shows student preferences for fruit: Apple (15), Banana (22), Mango (35), Orange (18).<br>(a) Which fruit is preferred by the maximum number of students?<br>(b) How many more students prefer Mango over Banana?<br>(c) What is the total number of students surveyed?",
        "ans": "<strong>Table Interpretation:</strong><br>• (a) Maximum preference: <strong>Mango</strong> with 35 students.<br>• (b) Difference: 35 - 22 = <strong>13 more students</strong> prefer Mango.<br>• (c) Total students: 15 + 22 + 35 + 18 = <strong>90 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mango identified",
            "marks": "1 M"
          },
          {
            "key": "Difference = 13",
            "marks": "1 M"
          },
          {
            "key": "Total = 90",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Do • Shapes and Symmetry",
        "q": "Draw a line of symmetry through each shape:<br>(a) A rectangle<br>(b) An equilateral triangle<br>(c) A circle.<br>How many lines of symmetry does a circle have?",
        "ans": "<strong>Symmetry Properties:</strong><br>• (a) A rectangle has <strong>2 lines of symmetry</strong> (horizontal and vertical through centers of opposite sides).<br>• (b) An equilateral triangle has <strong>3 lines of symmetry</strong> (from each vertex to opposite midpoint).<br>• (c) A circle has <strong>infinite lines of symmetry</strong> (any diameter passing through the center).",
        "marks": 3,
        "rubric": [
          {
            "key": "Rectangle = 2 lines",
            "marks": "1 M"
          },
          {
            "key": "Triangle = 3 lines",
            "marks": "1 M"
          },
          {
            "key": "Circle = infinite lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Puzzle Time • Missing Number Grid",
        "q": "In a 3x3 magic square, the sum of each row, column, and diagonal is 15. The center number is 5. What numbers go in the opposite corners if one corner is 2?",
        "ans": "<strong>Magic Square Logic:</strong><br>• In a 3x3 magic square with sum 15 and center 5, opposite corners must sum to 10 (since 2 + 5 + x = 15 → x = 8).<br>• If one corner is 2, the diagonally opposite corner must be <strong>8</strong>.<br>• Other corner pairs: 4 and 6.",
        "marks": 2,
        "rubric": [
          {
            "key": "Opposite corner = 8 with reasoning",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Money & Shopping • Cash Memo Bill",
        "q": "Rani visits a stationery shop and buys: 2 Pencils at ₹5 each, 1 Eraser for ₹3, and 1 Notebook for ₹25. Prepare a simple cash memo showing total bill and change returned from a ₹50 note.",
        "ans": "<strong>Cash Memo Preparation:</strong><br>• 2 Pencils @ ₹5 = ₹10<br>• 1 Eraser @ ₹3 = ₹3<br>• 1 Notebook @ ₹25 = ₹25<br>• <strong>Total Bill Amount</strong> = ₹10 + ₹3 + ₹25 = <strong>₹38</strong>.<br>• Amount paid = ₹50.<br>• <strong>Change returned</strong> = ₹50 - ₹38 = <strong>₹12</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct item breakdown and total ₹38",
            "marks": "2 M"
          },
          {
            "key": "Change = ₹12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Review • Comprehensive Concept Check",
        "q": "True or False:<br>(a) 1 kilometre is equal to 1000 metres.<br>(b) 500 millilitres is equal to half a litre.<br>(c) A square has 4 equal straight edges and 4 right-angled corners.",
        "ans": "<strong>Review Answers:</strong><br>• (a) <strong>True:</strong> 1 km = 1000 m.<br>• (b) <strong>True:</strong> 1 Litre = 1000 mL, so half a litre = 500 mL.<br>• (c) <strong>True:</strong> A square has 4 equal sides and 4 right angles.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 statements correctly evaluated as True",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "School Tree Plantation Drive",
      "text": "During Van Mahotsav, Class 3 students planted saplings: Section A planted 148 saplings, Section B planted 175 saplings, and Section C planted 126 saplings.",
      "question": "How many saplings did the three sections plant altogether? If the school target was 500 saplings, how many more are needed?",
      "answer": "1. Total saplings planted = 148 + 175 + 126.<br>• 148 + 175 = 323.<br>• 323 + 126 = 449 saplings.<br>2. <strong>Total planted</strong> = <strong>449 saplings</strong>.<br>3. Target = 500 saplings.<br>• Shortfall = 500 - 449 = <strong>51 saplings</strong>.",
      "rubric": "1.5M addition of 3 numbers + 1.5M subtraction from 500 target."
    }
  },
  {
    "id": "mm7",
    "num": 7,
    "unit": "Unit 3: Expanding Place Value & Operations",
    "title": "Raksha Bandhan",
    "subtitle": "Addition & Subtraction Strategies, Word Problems & Mental Math",
    "concepts": [
      "Mental addition using split-and-combine (tens and ones separately).",
      "Subtraction with regrouping (borrowing from tens).",
      "Estimating sums and differences to the nearest ten.",
      "Solving 2-step real-world word problems related to gifting and savings."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fff1f2\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#be123c\" text-anchor=\"middle\">Mental Math Addition Strategy — Split by Place Value</text>\n      <!-- Equation Box -->\n      <rect x=\"70\" y=\"45\" width=\"440\" height=\"75\" rx=\"8\" fill=\"#ffe4e6\" stroke=\"#f43f5e\" stroke-width=\"1.5\"/>\n      <text x=\"120\" y=\"75\" font-family=\"system-ui, sans-serif\" font-size=\"16\" font-weight=\"800\" fill=\"#9f1239\">47 + 36 = ?</text>\n      <text x=\"120\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"#881337\">Split into Tens &amp; Ones:</text>\n      <line x1=\"250\" y1=\"52\" x2=\"250\" y2=\"112\" stroke=\"#fda4af\" stroke-width=\"1.5\"/>\n      <text x=\"270\" y=\"72\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#be123c\">Step 1: Tens → 40 + 30 = 70</text>\n      <text x=\"270\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#be123c\">Step 2: Ones → 7 + 6 = 13</text>\n      <text x=\"270\" y=\"108\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#9f1239\">Step 3: Total → 70 + 13 = 83</text>\n      <text x=\"290\" y=\"142\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#9f1239\" text-anchor=\"middle\">Quick mental calculation without pencil-paper regrouping errors</text>\n    </svg>",
    "questions": [
      {
        "category": "Mental Addition • Split Strategy",
        "q": "Solve using the mental split-by-tens strategy: (a) 54 + 28, (b) 63 + 35. Write out each intermediate step.",
        "ans": "<strong>Step-by-Step Solutions:</strong><br><strong>(a) 54 + 28:</strong><br>• Split: (50 + 4) + (20 + 8)<br>• Add tens: 50 + 20 = 70<br>• Add ones: 4 + 8 = 12<br>• Combine: 70 + 12 = <strong>82</strong>.<br><br><strong>(b) 63 + 35:</strong><br>• Split: (60 + 3) + (30 + 5)<br>• Add tens: 60 + 30 = 90<br>• Add ones: 3 + 5 = 8<br>• Combine: 90 + 8 = <strong>98</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct split and step-by-step addition for (a)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct split and step-by-step addition for (b)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Subtraction with Regrouping • Word Problem",
        "q": "A sweet shop made 245 kaju katli sweets for Raksha Bandhan. By afternoon, 188 sweets were sold. How many sweets were left in the shop?",
        "ans": "<strong>Solution:</strong><br>• Total sweets made = 245<br>• Sweets sold = 188<br>• Sweets left = 245 - 188<br><br><strong>Working:</strong><br>• Ones: 5 - 8 cannot be done. Borrow 1 Ten from 4 Tens (leaving 3 Tens). 15 - 8 = <strong>7</strong>.<br>• Tens: 3 - 8 cannot be done. Borrow 1 Hundred from 2 Hundreds (leaving 1 Hundred). 13 - 8 = <strong>5</strong>.<br>• Hundreds: 1 - 1 = <strong>0</strong>.<br>• Answer: <strong>57 sweets were left</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct setting up of subtraction with borrowing",
            "marks": "1.5 M"
          },
          {
            "key": "Correct final remainder (57 sweets)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Estimation • Rounding to Nearest 10",
        "q": "Estimate the sum of 68 + 43 by rounding each number to the nearest ten. Then find the exact sum and check how close your estimate was.",
        "ans": "<strong>Calculation:</strong><br>1. <strong>Rounding to nearest 10:</strong><br>• 68 rounds to <strong>70</strong> (since ones digit 8 ≥ 5)<br>• 43 rounds to <strong>40</strong> (since ones digit 3 &lt; 5)<br>• <strong>Estimated Sum:</strong> 70 + 40 = <strong>110</strong>.<br>2. <strong>Exact Sum:</strong> 68 + 43 = <strong>111</strong>.<br>3. <strong>Comparison:</strong> The estimate 110 differs from the exact answer 111 by only 1. It is extremely close.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct rounding and estimated sum (110)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct exact sum (111) and difference check",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Sweet Box Packaging • Rectangular Arrays",
        "q": "A halwai has 24 pedas to arrange in a festival sweet box.<br>(a) List three different ways he can arrange them in equal rows and columns (rectangular arrays).<br>(b) Write the multiplication fact for each arrangement.",
        "ans": "<strong>Step-by-Step Arrays:</strong><br><strong>(a) Arrangements & (b) Multiplication Facts:</strong><br>1. <strong>2 rows of 12 pedas each:</strong> 2 × 12 = <strong>24</strong>.<br>2. <strong>3 rows of 8 pedas each:</strong> 3 × 8 = <strong>24</strong>.<br>3. <strong>4 rows of 6 pedas each:</strong> 4 × 6 = <strong>24</strong>.<br><em>(Other valid answers: 6 rows of 4, or 1 row of 24).</em>",
        "marks": 3,
        "rubric": [
          {
            "key": "Listing 3 distinct array pairs (2x12, 3x8, 4x6)",
            "marks": "1.5 M"
          },
          {
            "key": "Accurate multiplication facts for all arrangements",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Sharing Gifts • Equal Distribution",
        "q": "Simran has 35 colorful rakhis. She puts 5 rakhis into each gift envelope for her brothers and cousins.<br>(a) How many envelopes can she prepare?<br>(b) Write this as a division sentence.<br>(c) If she wanted to make 7 envelopes with equal rakhis, how many rakhis would be in each envelope?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Envelopes Prepared:</strong><br>• Total rakhis = 35<br>• Rakhis per envelope = 5<br>• Number of envelopes = 35 ÷ 5 = <strong>7 envelopes</strong>.<br><br><strong>(b) Division Sentence:</strong><br>• <strong>35 ÷ 5 = 7</strong>.<br><br><strong>(c) Alternative Distribution:</strong><br>• 35 ÷ 7 = <strong>5 rakhis per envelope</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct envelope count (7)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct division sentence (35 ÷ 5 = 7)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct alternative distribution (5 rakhis)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Ribbon Measurement • Unit Conversion",
        "q": "Meera bought a roll of shiny ribbon measuring 2 metres (2 m). She cuts it into pieces of 20 cm each to tie around gift boxes.<br>(a) Convert 2 metres into centimetres.<br>(b) How many 20 cm ribbon pieces can she cut from the roll?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Unit Conversion:</strong><br>• 1 metre = 100 centimetres.<br>• 2 metres = 2 × 100 cm = <strong>200 cm</strong>.<br><br><strong>(b) Number of Pieces:</strong><br>• Length of one piece = 20 cm.<br>• Total pieces = 200 ÷ 20 = <strong>10 pieces</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct conversion: 2 m = 200 cm",
            "marks": "1.5 M"
          },
          {
            "key": "Correct division to find 10 pieces",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Money Envelopes • Currency Notes",
        "q": "On Raksha Bandhan, Uncle gave Rohan a traditional shagun envelope of ₹101. Rohan opened it and found three currency notes and one coin.<br>What were the exact notes and coin inside?",
        "ans": "<strong>Currency Breakdown for ₹101:</strong><br>• Total amount = ₹101.<br>• 3 notes and 1 coin:<br>  - 1 note of <strong>₹50</strong><br>  - 1 note of <strong>₹50</strong><br>  - <em>Wait:</em> if 1 note of ₹50, another ₹50, that leaves ₹1 (which is 2 notes, not 3).<br>• <strong>Valid combination with 3 notes and 1 coin:</strong><br>  - 1 note of <strong>₹50</strong><br>  - 2 notes of <strong>₹20</strong> (₹50 + ₹20 + ₹20 = ₹90) + 1 note of ₹10 (that's 4 notes).<br>  - <strong>Exact combination:</strong> 1 note of <strong>₹50</strong>, 1 note of <strong>₹20</strong>, 1 note of <strong>₹10</strong> = ₹80...<br>  - If Uncle used: <strong>₹50 note + ₹20 note + ₹20 note</strong> (₹90) + ₹10 note (4 notes)...<br>  - Let's look at <strong>₹101</strong>: <strong>1 note of ₹50, 1 note of ₹50 = 2 notes</strong>.<br>  - <strong>With 3 notes and 1 coin:</strong><br>    1 note of <strong>₹50</strong>, 1 note of <strong>₹30 (no ₹30 note exists)</strong>.<br>    So: <strong>1 note of ₹50 + 1 note of ₹20 + 1 note of ₹20 = ₹90</strong> + ₹10 coin + ₹1 coin (2 coins).<br>    If 3 notes: <strong>1 note of ₹50, 1 note of ₹20, 1 note of ₹10 = ₹80</strong>...<br>    What if: <strong>1 note of ₹50, 1 note of ₹50, plus 1 coin of ₹1?</strong> That is <strong>2 notes and 1 coin</strong>!<br>    If Uncle gave ₹101 with <strong>2 notes of ₹50 and 1 coin of ₹1</strong>: 50 + 50 + 1 = 101.<br>    If exactly 3 notes and 1 coin: The total would be ₹50 + ₹20 + ₹20 + ₹10 = ₹100 note + ₹1 coin (1 note + 1 coin).<br>    Therefore: <strong>2 notes of ₹50 and 1 coin of ₹1</strong> make ₹101.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct identification of real Indian currency denominations",
            "marks": "1.5 M"
          },
          {
            "key": "Exact sum equal to ₹101 (₹50 + ₹50 + ₹1)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Practical Problem Solving",
        "q": "In Chapter 7 ('Raksha Bandhan'), a student solves an exercise problem: If 1 packet contains 12 items, how many items are in 4 such packets? Explain using repeated addition and multiplication.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Repeated addition: 12 + 12 + 12 + 12 = <strong>48 items</strong>.<br>2. Multiplication fact: 4 × 12 = <strong>48 items</strong>.<br>3. Both methods yield the exact same answer. Multiplication is efficient repeated addition.",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeated addition 12+12+12+12 = 48",
            "marks": "1 M"
          },
          {
            "key": "Multiplication 4 × 12 = 48",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Concept Exploration",
        "q": "In 'Raksha Bandhan', how do you verify your mathematical calculations? Give an example using two numbers that add up to 100.",
        "ans": "<strong>Verification Method:</strong><br>• Take two numbers: 65 and 35. Sum = 65 + 35 = 100.<br>• Verification by inverse operation (subtraction): 100 - 35 = 65, and 100 - 65 = 35.<br>• Since subtraction brings back the original numbers, the addition is confirmed correct.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 65 + 35 = 100",
            "marks": "1 M"
          },
          {
            "key": "Inverse check 100 - 35 = 65",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practice Time • Mental Math Drills",
        "q": "Solve mentally:<br>(a) 25 + 75 = ?<br>(b) 150 - 60 = ?<br>(c) Double of 45 = ?<br>(d) Half of 80 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 25 + 75 = <strong>100</strong>.<br>• (b) 150 - 60 = <strong>90</strong>.<br>• (c) 45 × 2 = <strong>90</strong>.<br>• (d) 80 ÷ 2 = <strong>40</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental math facts correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application",
        "q": "A school library received 3 boxes of mathematics activity books. Each box contained 25 books. During the week, 38 books were distributed to Grade 3 children. How many books remain in the library?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total books received = 3 × 25 = <strong>75 books</strong>.<br>2. Books distributed = 38 books.<br>3. Books remaining = 75 - 38 = <strong>37 books</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total 3 × 25 = 75",
            "marks": "1.5 M"
          },
          {
            "key": "Remainder 75 - 38 = 37",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Critical Thinking • Finding the Pattern",
        "q": "Observe the sequence related to 'Raksha Bandhan': 12, 24, 36, 48, ___, ___. Find the next two terms and state the mathematical rule.",
        "ans": "<strong>Pattern Analysis:</strong><br>• 12 + 12 = 24<br>• 24 + 12 = 36<br>• 36 + 12 = 48<br>• Rule: Successive addition of 12 (Multiples of 12).<br>• Next terms: 48 + 12 = <strong>60</strong>, 60 + 12 = <strong>72</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 60, 72",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiples of 12 / +12 step",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Estimation & Measurement • Practical Judgment",
        "q": "Estimate whether each measurement is greater than or less than 1 metre:<br>(a) Length of your classroom pencil.<br>(b) Height of your classroom teacher.<br>(c) Width of your mathematics textbook.<br>(d) Length of the school blackboard.",
        "ans": "<strong>Estimation:</strong><br>• (a) Pencil: <strong>Less than 1 metre</strong> (approx. 15 cm).<br>• (b) Teacher height: <strong>Greater than 1 metre</strong> (approx. 1.6 to 1.7 m).<br>• (c) Textbook width: <strong>Less than 1 metre</strong> (approx. 20 cm).<br>• (d) Blackboard length: <strong>Greater than 1 metre</strong> (approx. 2 to 3 m).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct estimation for all 4 items",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Interpretation • Reading Simple Tables",
        "q": "A table shows student preferences for fruit: Apple (15), Banana (22), Mango (35), Orange (18).<br>(a) Which fruit is preferred by the maximum number of students?<br>(b) How many more students prefer Mango over Banana?<br>(c) What is the total number of students surveyed?",
        "ans": "<strong>Table Interpretation:</strong><br>• (a) Maximum preference: <strong>Mango</strong> with 35 students.<br>• (b) Difference: 35 - 22 = <strong>13 more students</strong> prefer Mango.<br>• (c) Total students: 15 + 22 + 35 + 18 = <strong>90 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mango identified",
            "marks": "1 M"
          },
          {
            "key": "Difference = 13",
            "marks": "1 M"
          },
          {
            "key": "Total = 90",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Do • Shapes and Symmetry",
        "q": "Draw a line of symmetry through each shape:<br>(a) A rectangle<br>(b) An equilateral triangle<br>(c) A circle.<br>How many lines of symmetry does a circle have?",
        "ans": "<strong>Symmetry Properties:</strong><br>• (a) A rectangle has <strong>2 lines of symmetry</strong> (horizontal and vertical through centers of opposite sides).<br>• (b) An equilateral triangle has <strong>3 lines of symmetry</strong> (from each vertex to opposite midpoint).<br>• (c) A circle has <strong>infinite lines of symmetry</strong> (any diameter passing through the center).",
        "marks": 3,
        "rubric": [
          {
            "key": "Rectangle = 2 lines",
            "marks": "1 M"
          },
          {
            "key": "Triangle = 3 lines",
            "marks": "1 M"
          },
          {
            "key": "Circle = infinite lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Puzzle Time • Missing Number Grid",
        "q": "In a 3x3 magic square, the sum of each row, column, and diagonal is 15. The center number is 5. What numbers go in the opposite corners if one corner is 2?",
        "ans": "<strong>Magic Square Logic:</strong><br>• In a 3x3 magic square with sum 15 and center 5, opposite corners must sum to 10 (since 2 + 5 + x = 15 → x = 8).<br>• If one corner is 2, the diagonally opposite corner must be <strong>8</strong>.<br>• Other corner pairs: 4 and 6.",
        "marks": 2,
        "rubric": [
          {
            "key": "Opposite corner = 8 with reasoning",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Money & Shopping • Cash Memo Bill",
        "q": "Rani visits a stationery shop and buys: 2 Pencils at ₹5 each, 1 Eraser for ₹3, and 1 Notebook for ₹25. Prepare a simple cash memo showing total bill and change returned from a ₹50 note.",
        "ans": "<strong>Cash Memo Preparation:</strong><br>• 2 Pencils @ ₹5 = ₹10<br>• 1 Eraser @ ₹3 = ₹3<br>• 1 Notebook @ ₹25 = ₹25<br>• <strong>Total Bill Amount</strong> = ₹10 + ₹3 + ₹25 = <strong>₹38</strong>.<br>• Amount paid = ₹50.<br>• <strong>Change returned</strong> = ₹50 - ₹38 = <strong>₹12</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct item breakdown and total ₹38",
            "marks": "2 M"
          },
          {
            "key": "Change = ₹12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Review • Comprehensive Concept Check",
        "q": "True or False:<br>(a) 1 kilometre is equal to 1000 metres.<br>(b) 500 millilitres is equal to half a litre.<br>(c) A square has 4 equal straight edges and 4 right-angled corners.",
        "ans": "<strong>Review Answers:</strong><br>• (a) <strong>True:</strong> 1 km = 1000 m.<br>• (b) <strong>True:</strong> 1 Litre = 1000 mL, so half a litre = 500 mL.<br>• (c) <strong>True:</strong> A square has 4 equal sides and 4 right angles.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 statements correctly evaluated as True",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Rakhi Gift Hamper Budgeting",
      "text": "Simran has ₹250 savings. She wants to buy a rakhi for ₹45, a box of chocolates for ₹120, and a greeting card for ₹35 for her brother.",
      "question": "Can Simran afford all three items with her savings? How much money will be left with her or how much more will she need?",
      "answer": "1. Total cost of gifts = ₹45 + ₹120 + ₹35 = ₹(45 + 35 + 120) = ₹80 + ₹120 = <strong>₹200</strong>.<br>2. Simran's savings = ₹250.<br>3. Since ₹250 > ₹200, <strong>she can easily afford all three items</strong>.<br>4. Remaining money = ₹250 - ₹200 = <strong>₹50 left</strong>.",
      "rubric": "1.5M addition of 3 gift items + 1.5M comparison with savings and balance."
    }
  },
  {
    "id": "mm8",
    "num": 8,
    "unit": "Unit 3: Expanding Place Value & Operations",
    "title": "Fair Share",
    "subtitle": "Concept of Equal Sharing, Grouping, Introduction to Division & Fractions",
    "concepts": [
      "Equal sharing: dividing a collection of items equally among a number of people.",
      "Equal grouping: finding how many groups of a given size can be formed.",
      "Division as repeated subtraction.",
      "Understanding halves (1/2) and quarters (1/4) of a whole collection."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#047857\" text-anchor=\"middle\">Fair Share — Sharing 12 Laddoos Equally Among 3 Children</text>\n      <!-- Child 1 Plate -->\n      <circle cx=\"110\" cy=\"85\" r=\"36\" fill=\"#d1fae5\" stroke=\"#059669\" stroke-width=\"2\"/>\n      <circle cx=\"100\" cy=\"75\" r=\"7\" fill=\"#f59e0b\"/>\n      <circle cx=\"120\" cy=\"75\" r=\"7\" fill=\"#f59e0b\"/>\n      <circle cx=\"100\" cy=\"95\" r=\"7\" fill=\"#f59e0b\"/>\n      <circle cx=\"120\" cy=\"95\" r=\"7\" fill=\"#f59e0b\"/>\n      <text x=\"110\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Rohan (4)</text>\n      <!-- Child 2 Plate -->\n      <circle cx=\"290\" cy=\"85\" r=\"36\" fill=\"#d1fae5\" stroke=\"#059669\" stroke-width=\"2\"/>\n      <circle cx=\"280\" cy=\"75\" r=\"7\" fill=\"#f59e0b\"/>\n      <circle cx=\"300\" cy=\"75\" r=\"7\" fill=\"#f59e0b\"/>\n      <circle cx=\"280\" cy=\"95\" r=\"7\" fill=\"#f59e0b\"/>\n      <circle cx=\"300\" cy=\"95\" r=\"7\" fill=\"#f59e0b\"/>\n      <text x=\"290\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Priya (4)</text>\n      <!-- Child 3 Plate -->\n      <circle cx=\"470\" cy=\"85\" r=\"36\" fill=\"#d1fae5\" stroke=\"#059669\" stroke-width=\"2\"/>\n      <circle cx=\"460\" cy=\"75\" r=\"7\" fill=\"#f59e0b\"/>\n      <circle cx=\"480\" cy=\"75\" r=\"7\" fill=\"#f59e0b\"/>\n      <circle cx=\"460\" cy=\"95\" r=\"7\" fill=\"#f59e0b\"/>\n      <circle cx=\"480\" cy=\"95\" r=\"7\" fill=\"#f59e0b\"/>\n      <text x=\"470\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Ali (4)</text>\n      <text x=\"290\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#047857\" text-anchor=\"middle\">12 ÷ 3 = 4 Laddoos per Child</text>\n    </svg>",
    "questions": [
      {
        "category": "Equal Sharing • Division Basics",
        "q": "Mother has 20 biscuits. She shares them equally among her 4 children. (a) How many biscuits does each child get? (b) Write the division sentence and repeated subtraction steps.",
        "ans": "<strong>Solution:</strong><br>• Total biscuits = 20<br>• Number of children = 4<br><strong>(a)</strong> Each child gets = 20 ÷ 4 = <strong>5 biscuits</strong>.<br><br><strong>(b) Repeated Subtraction:</strong><br>1. 20 - 4 = 16 (1st biscuit each)<br>2. 16 - 4 = 12 (2nd biscuit each)<br>3. 12 - 4 = 8 (3rd biscuit each)<br>4. 8 - 4 = 4 (4th biscuit each)<br>5. 4 - 4 = 0 (5th biscuit each)<br>• Division sentence: <strong>20 ÷ 4 = 5</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct calculation of each child's share (5)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct repeated subtraction sequence and division statement",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Equal Grouping • Practical Word Problem",
        "q": "There are 24 pencils in a box. If teacher puts 6 pencils in each pencil pouch, how many pouches can be filled? Are any pencils left over?",
        "ans": "<strong>Solution:</strong><br>• Total pencils = 24<br>• Pencils per pouch = 6<br>• Number of pouches = 24 ÷ 6 = <strong>4 pouches</strong>.<br>• Remainder = 0, so <strong>no pencils are left over</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct division calculation (4 pouches)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct statement regarding zero remainder",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Fractions of a Collection • Halves & Quarters",
        "q": "In a box of 16 apples: (a) Find half (1/2) of the apples. (b) Find one-fourth (1/4) of the apples. Explain what happens if you add half and one-fourth together.",
        "ans": "<strong>Calculations:</strong><br>• <strong>(a) Half (1/2):</strong> 16 ÷ 2 = <strong>8 apples</strong>.<br>• <strong>(b) One-fourth (1/4):</strong> 16 ÷ 4 = <strong>4 apples</strong>.<br>• <strong>Combined:</strong> 8 + 4 = <strong>12 apples</strong> (which represents 3/4 or three-quarters of the collection, leaving 4 apples).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct calculation of 1/2 of 16 (8)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct calculation of 1/4 of 16 (4)",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate combination explanation (12 apples)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Fraction of a Collection • Word Problem",
        "q": "A teacher brought 20 apples to class to share among students.<br>(a) Find 1/2 (half) of the 20 apples.<br>(b) Find 1/4 (one-fourth) of the 20 apples.<br>(c) Find 3/4 (three-fourths) of the 20 apples.",
        "ans": "<strong>Step-by-Step Calculations:</strong><br><strong>(a) Half (1/2):</strong><br>• 20 ÷ 2 = <strong>10 apples</strong>.<br><br><strong>(b) One-Fourth (1/4):</strong><br>• 20 ÷ 4 = <strong>5 apples</strong>.<br><br><strong>(c) Three-Fourths (3/4):</strong><br>• 3 × (20 ÷ 4) = 3 × 5 = <strong>15 apples</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct half calculation (10 apples)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct quarter calculation (5 apples)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct three-fourths calculation (15 apples)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Equal Sharing with Remainder • Pencils Problem",
        "q": "A box has 15 pencils. Four friends (Aman, Bhuvan, Chitra, and Deepa) want to share them equally.<br>(a) How many pencils will each friend get?<br>(b) How many pencils will be left over in the box?<br>(c) Write the division equation with quotient and remainder.",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) & (b) Sharing and Remainder:</strong><br>• Total pencils = 15<br>• Number of friends = 4<br>• 4 × 3 = 12 pencils distributed.<br>• Each friend gets <strong>3 pencils</strong>.<br>• Left over = 15 - 12 = <strong>3 pencils left over</strong>.<br><br><strong>(c) Division Equation:</strong><br>• 15 ÷ 4 = <strong>Quotient = 3, Remainder = 3</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct share per child (3 pencils)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct remainder (3 pencils)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct division format with quotient and remainder",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Visual Fractions • Shading Geometric Figures",
        "q": "A circle is divided into 4 equal quarters.<br>(a) If you shade 2 quarters, what fraction of the circle is shaded? Write it in simplest form.<br>(b) How many quarters must be shaded to show 1 whole circle?<br>(c) Which is larger: 1/2 of a chapati or 1/4 of the same chapati?",
        "ans": "<strong>Solution:</strong><br><strong>(a) Shading 2 Quarters:</strong><br>• Fraction = 2/4 = <strong>1/2 (Half)</strong>.<br><br><strong>(b) One Whole Circle:</strong><br>• All <strong>4 quarters</strong> must be shaded (4/4 = 1).<br><br><strong>(c) Comparison:</strong><br>• <strong>1/2 is larger than 1/4</strong>. Half a chapati gives two quarters, which is twice as much as one quarter.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct fraction simplification: 2/4 = 1/2",
            "marks": "1.0 M"
          },
          {
            "key": "Correct quarters for whole (4 quarters)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct comparison with justification (1/2 > 1/4)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Team Formation • Equal Division",
        "q": "In Class 3, there are 28 students. The sports teacher wants to form teams with exactly 4 students in each team for a relay race.<br>(a) How many complete teams can be formed?<br>(b) If the teacher instead forms teams of 5 students each, how many teams will be formed, and how many students will be substitutes?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Teams of 4:</strong><br>• 28 ÷ 4 = <strong>7 teams</strong>.<br>• 0 students left over.<br><br><strong>(b) Teams of 5:</strong><br>• 5 × 5 = 25 students.<br>• <strong>5 complete teams</strong> can be formed.<br>• Substitutes left over = 28 - 25 = <strong>3 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct calculation for teams of 4 (7 teams)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct calculation for teams of 5 (5 teams and 3 substitutes)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Practical Problem Solving",
        "q": "In Chapter 8 ('Fair Share'), a student solves an exercise problem: If 1 packet contains 12 items, how many items are in 4 such packets? Explain using repeated addition and multiplication.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Repeated addition: 12 + 12 + 12 + 12 = <strong>48 items</strong>.<br>2. Multiplication fact: 4 × 12 = <strong>48 items</strong>.<br>3. Both methods yield the exact same answer. Multiplication is efficient repeated addition.",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeated addition 12+12+12+12 = 48",
            "marks": "1 M"
          },
          {
            "key": "Multiplication 4 × 12 = 48",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Concept Exploration",
        "q": "In 'Fair Share', how do you verify your mathematical calculations? Give an example using two numbers that add up to 100.",
        "ans": "<strong>Verification Method:</strong><br>• Take two numbers: 65 and 35. Sum = 65 + 35 = 100.<br>• Verification by inverse operation (subtraction): 100 - 35 = 65, and 100 - 65 = 35.<br>• Since subtraction brings back the original numbers, the addition is confirmed correct.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 65 + 35 = 100",
            "marks": "1 M"
          },
          {
            "key": "Inverse check 100 - 35 = 65",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practice Time • Mental Math Drills",
        "q": "Solve mentally:<br>(a) 25 + 75 = ?<br>(b) 150 - 60 = ?<br>(c) Double of 45 = ?<br>(d) Half of 80 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 25 + 75 = <strong>100</strong>.<br>• (b) 150 - 60 = <strong>90</strong>.<br>• (c) 45 × 2 = <strong>90</strong>.<br>• (d) 80 ÷ 2 = <strong>40</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental math facts correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application",
        "q": "A school library received 3 boxes of mathematics activity books. Each box contained 25 books. During the week, 38 books were distributed to Grade 3 children. How many books remain in the library?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total books received = 3 × 25 = <strong>75 books</strong>.<br>2. Books distributed = 38 books.<br>3. Books remaining = 75 - 38 = <strong>37 books</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total 3 × 25 = 75",
            "marks": "1.5 M"
          },
          {
            "key": "Remainder 75 - 38 = 37",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Critical Thinking • Finding the Pattern",
        "q": "Observe the sequence related to 'Fair Share': 12, 24, 36, 48, ___, ___. Find the next two terms and state the mathematical rule.",
        "ans": "<strong>Pattern Analysis:</strong><br>• 12 + 12 = 24<br>• 24 + 12 = 36<br>• 36 + 12 = 48<br>• Rule: Successive addition of 12 (Multiples of 12).<br>• Next terms: 48 + 12 = <strong>60</strong>, 60 + 12 = <strong>72</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 60, 72",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiples of 12 / +12 step",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Estimation & Measurement • Practical Judgment",
        "q": "Estimate whether each measurement is greater than or less than 1 metre:<br>(a) Length of your classroom pencil.<br>(b) Height of your classroom teacher.<br>(c) Width of your mathematics textbook.<br>(d) Length of the school blackboard.",
        "ans": "<strong>Estimation:</strong><br>• (a) Pencil: <strong>Less than 1 metre</strong> (approx. 15 cm).<br>• (b) Teacher height: <strong>Greater than 1 metre</strong> (approx. 1.6 to 1.7 m).<br>• (c) Textbook width: <strong>Less than 1 metre</strong> (approx. 20 cm).<br>• (d) Blackboard length: <strong>Greater than 1 metre</strong> (approx. 2 to 3 m).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct estimation for all 4 items",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Interpretation • Reading Simple Tables",
        "q": "A table shows student preferences for fruit: Apple (15), Banana (22), Mango (35), Orange (18).<br>(a) Which fruit is preferred by the maximum number of students?<br>(b) How many more students prefer Mango over Banana?<br>(c) What is the total number of students surveyed?",
        "ans": "<strong>Table Interpretation:</strong><br>• (a) Maximum preference: <strong>Mango</strong> with 35 students.<br>• (b) Difference: 35 - 22 = <strong>13 more students</strong> prefer Mango.<br>• (c) Total students: 15 + 22 + 35 + 18 = <strong>90 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mango identified",
            "marks": "1 M"
          },
          {
            "key": "Difference = 13",
            "marks": "1 M"
          },
          {
            "key": "Total = 90",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Do • Shapes and Symmetry",
        "q": "Draw a line of symmetry through each shape:<br>(a) A rectangle<br>(b) An equilateral triangle<br>(c) A circle.<br>How many lines of symmetry does a circle have?",
        "ans": "<strong>Symmetry Properties:</strong><br>• (a) A rectangle has <strong>2 lines of symmetry</strong> (horizontal and vertical through centers of opposite sides).<br>• (b) An equilateral triangle has <strong>3 lines of symmetry</strong> (from each vertex to opposite midpoint).<br>• (c) A circle has <strong>infinite lines of symmetry</strong> (any diameter passing through the center).",
        "marks": 3,
        "rubric": [
          {
            "key": "Rectangle = 2 lines",
            "marks": "1 M"
          },
          {
            "key": "Triangle = 3 lines",
            "marks": "1 M"
          },
          {
            "key": "Circle = infinite lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Puzzle Time • Missing Number Grid",
        "q": "In a 3x3 magic square, the sum of each row, column, and diagonal is 15. The center number is 5. What numbers go in the opposite corners if one corner is 2?",
        "ans": "<strong>Magic Square Logic:</strong><br>• In a 3x3 magic square with sum 15 and center 5, opposite corners must sum to 10 (since 2 + 5 + x = 15 → x = 8).<br>• If one corner is 2, the diagonally opposite corner must be <strong>8</strong>.<br>• Other corner pairs: 4 and 6.",
        "marks": 2,
        "rubric": [
          {
            "key": "Opposite corner = 8 with reasoning",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Money & Shopping • Cash Memo Bill",
        "q": "Rani visits a stationery shop and buys: 2 Pencils at ₹5 each, 1 Eraser for ₹3, and 1 Notebook for ₹25. Prepare a simple cash memo showing total bill and change returned from a ₹50 note.",
        "ans": "<strong>Cash Memo Preparation:</strong><br>• 2 Pencils @ ₹5 = ₹10<br>• 1 Eraser @ ₹3 = ₹3<br>• 1 Notebook @ ₹25 = ₹25<br>• <strong>Total Bill Amount</strong> = ₹10 + ₹3 + ₹25 = <strong>₹38</strong>.<br>• Amount paid = ₹50.<br>• <strong>Change returned</strong> = ₹50 - ₹38 = <strong>₹12</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct item breakdown and total ₹38",
            "marks": "2 M"
          },
          {
            "key": "Change = ₹12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Review • Comprehensive Concept Check",
        "q": "True or False:<br>(a) 1 kilometre is equal to 1000 metres.<br>(b) 500 millilitres is equal to half a litre.<br>(c) A square has 4 equal straight edges and 4 right-angled corners.",
        "ans": "<strong>Review Answers:</strong><br>• (a) <strong>True:</strong> 1 km = 1000 m.<br>• (b) <strong>True:</strong> 1 Litre = 1000 mL, so half a litre = 500 mL.<br>• (c) <strong>True:</strong> A square has 4 equal sides and 4 right angles.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 statements correctly evaluated as True",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Picnic Fruit Distribution",
      "text": "During a picnic, 30 bananas and 18 oranges are to be packed into 6 picnic baskets so that every basket gets an equal number of each fruit.",
      "question": "How many bananas and how many oranges will go into each basket? How many total fruits are in each basket?",
      "answer": "1. Bananas per basket = 30 ÷ 6 = 5 bananas.<br>2. Oranges per basket = 18 ÷ 6 = 3 oranges.<br>3. <strong>Total fruits per basket</strong> = 5 + 3 = <strong>8 fruits</strong>.",
      "rubric": "1M bananas division + 1M oranges division + 1M total per basket."
    }
  },
  {
    "id": "mm9",
    "num": 9,
    "unit": "Unit 3: Expanding Place Value & Operations",
    "title": "House of Hundreds – II",
    "subtitle": "3-Digit Numbers from 500 to 999, Comparison, Estimation & 1000",
    "concepts": [
      "Extending place value from 500 up to 999.",
      "The transition to 4-digit numbers: 999 + 1 = 1000 (One Thousand).",
      "Representing 3-digit numbers using expanded notation and place value charts.",
      "Comparing 3-digit numbers by looking at hundreds, tens, and ones in order."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Reaching the Milestone of 1,000 (One Thousand)</text>\n      <!-- Stepping stones -->\n      <rect x=\"50\" y=\"55\" width=\"80\" height=\"45\" rx=\"6\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/>\n      <text x=\"90\" y=\"82\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#1e3a8a\" text-anchor=\"middle\">997</text>\n      <rect x=\"150\" y=\"55\" width=\"80\" height=\"45\" rx=\"6\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/>\n      <text x=\"190\" y=\"82\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#1e3a8a\" text-anchor=\"middle\">998</text>\n      <rect x=\"250\" y=\"55\" width=\"80\" height=\"45\" rx=\"6\" fill=\"#fde047\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n      <text x=\"290\" y=\"82\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"900\" fill=\"#854d0e\" text-anchor=\"middle\">999</text>\n      <text x=\"350\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"20\" font-weight=\"900\" fill=\"#2563eb\" text-anchor=\"middle\">+ 1</text>\n      <!-- Big 1000 -->\n      <rect x=\"380\" y=\"48\" width=\"150\" height=\"60\" rx=\"8\" fill=\"#1e40af\"/>\n      <text x=\"455\" y=\"86\" font-family=\"system-ui, sans-serif\" font-size=\"22\" font-weight=\"900\" fill=\"#ffffff\" text-anchor=\"middle\">1,000</text>\n      <text x=\"290\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">999 is the Greatest 3-Digit Number • 1,000 is the Smallest 4-Digit Number</text>\n    </svg>",
    "questions": [
      {
        "category": "Number Sequence & Transition • Milestones",
        "q": "What is: (a) The greatest 3-digit number? (b) The smallest 3-digit number? (c) What number do you get if you add 1 to the greatest 3-digit number?",
        "ans": "<strong>Answers:</strong><br>• <strong>(a) Greatest 3-digit number:</strong> <strong>999</strong><br>• <strong>(b) Smallest 3-digit number:</strong> <strong>100</strong><br>• <strong>(c) Adding 1:</strong> 999 + 1 = <strong>1,000 (One Thousand)</strong>, which is the smallest 4-digit number.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct greatest 3-digit number (999)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct smallest 3-digit number (100)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct sum and explanation of 1,000",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Place Value Table • Hundreds, Tens, Ones",
        "q": "Write the numbers for: (a) 7 Hundreds + 0 Tens + 9 Ones, (b) 8 Hundreds + 6 Tens + 0 Ones, (c) 9 Hundreds + 9 Tens + 5 Ones. Write each in standard form and words.",
        "ans": "<strong>Values:</strong><br>• <strong>(a)</strong> 700 + 0 + 9 = <strong>709</strong> (Seven hundred nine)<br>• <strong>(b)</strong> 800 + 60 + 0 = <strong>860</strong> (Eight hundred sixty)<br>• <strong>(c)</strong> 900 + 90 + 5 = <strong>995</strong> (Nine hundred ninety-five).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct standard numerical form for all three",
            "marks": "1.5 M"
          },
          {
            "key": "Correct number words for all three",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Comparison Rules • 3-Digit Numbers",
        "q": "Compare the pairs using &gt;, &lt;, or =: (1) 845 ___ 854, (2) 699 ___ 701, (3) 930 ___ 903. State the rule for comparing two numbers that have the same hundreds digit.",
        "ans": "<strong>Comparisons:</strong><br>1. 845 <strong>&lt;</strong> 854 (both have 8 hundreds, but 4 tens &lt; 5 tens)<br>2. 699 <strong>&lt;</strong> 701 (6 hundreds &lt; 7 hundreds)<br>3. 930 <strong>&gt;</strong> 903 (both have 9 hundreds, but 3 tens &gt; 0 tens)<br><br><strong>Comparison Rule:</strong> When the hundreds digits are equal, compare the digits in the tens place. The number with the greater tens digit is larger. If the tens are also equal, compare the ones digit.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct symbols for all 3 pairs",
            "marks": "1.5 M"
          },
          {
            "key": "Clear mathematical rule explaining tens comparison",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "3-Digit Number Comparison • Greater Than / Less Than",
        "q": "Compare the following pairs of 3-digit numbers using the correct symbol (&gt;, &lt;, or =):<br>(a) 648 ___ 684<br>(b) 705 ___ 507<br>(c) 830 ___ 800 + 30<br>(d) 999 ___ 1000",
        "ans": "<strong>Comparisons:</strong><br>• <strong>(a) 648 &lt; 684</strong> (Both have 6 hundreds; in tens place, 4 &lt; 8).<br>• <strong>(b) 705 &gt; 507</strong> (In hundreds place, 7 &gt; 5).<br>• <strong>(c) 830 = 800 + 30</strong> (800 + 30 = 830).<br>• <strong>(d) 999 &lt; 1000</strong> (999 is a 3-digit number, 1000 is a 4-digit number).",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct symbol for (a) and (b)",
            "marks": "2.0 M"
          },
          {
            "key": "Correct symbol for (c) and (d)",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Forming Greatest and Smallest Numbers",
        "q": "Using the digits 3, 8, and 5 exactly once in each number:<br>(a) Form the greatest 3-digit number.<br>(b) Form the smallest 3-digit number.<br>(c) Find the difference between the greatest and smallest numbers formed.",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Greatest 3-Digit Number:</strong><br>• Arrange digits in descending order: 8, 5, 3 $\\rightarrow$ <strong>853</strong>.<br><br><strong>(b) Smallest 3-Digit Number:</strong><br>• Arrange digits in ascending order: 3, 5, 8 $\\rightarrow$ <strong>358</strong>.<br><br><strong>(c) Difference:</strong><br>• 853 - 358 = <strong>495</strong>.<br><em>(Borrowing check: 13 - 8 = 5, 14 - 5 = 9, 7 - 3 = 4 $\\rightarrow$ 495).</em>",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct greatest number (853)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct smallest number (358)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct subtraction (853 - 358 = 495)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Ordering Numbers • Ascending & Descending",
        "q": "Given the numbers: 582, 528, 852, 285, 825.<br>(a) Arrange them in Ascending Order (smallest to largest).<br>(b) Arrange them in Descending Order (largest to smallest).",
        "ans": "<strong>Step-by-Step Arrangement:</strong><br><strong>(a) Ascending Order:</strong><br>• <strong>285 &lt; 528 &lt; 582 &lt; 825 &lt; 852</strong>.<br><br><strong>(b) Descending Order:</strong><br>• <strong>852 &gt; 825 &gt; 582 &gt; 528 &gt; 285</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate ascending sequence",
            "marks": "1.5 M"
          },
          {
            "key": "Accurate descending sequence",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Skip Counting Beyond 500 • Number Track",
        "q": "Write the next 3 numbers in each sequence:<br>(a) 550, 600, 650, ___, ___, ___<br>(b) 720, 740, 760, ___, ___, ___<br>(c) 980, 985, 990, ___, ___, ___",
        "ans": "<strong>Solution:</strong><br><strong>(a) Counting by 50s (+50):</strong> 550, 600, 650, <strong>700</strong>, <strong>750</strong>, <strong>800</strong>.<br><strong>(b) Counting by 20s (+20):</strong> 720, 740, 760, <strong>780</strong>, <strong>800</strong>, <strong>820</strong>.<br><strong>(c) Counting by 5s (+5):</strong> 980, 985, 990, <strong>995</strong>, <strong>1000</strong>, <strong>1005</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct blanks in sequence (a): 700, 750, 800",
            "marks": "1.0 M"
          },
          {
            "key": "Correct blanks in sequence (b): 780, 800, 820",
            "marks": "1.0 M"
          },
          {
            "key": "Correct blanks in sequence (c): 995, 1000, 1005",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Practical Problem Solving",
        "q": "In Chapter 9 ('House of Hundreds – II'), a student solves an exercise problem: If 1 packet contains 12 items, how many items are in 4 such packets? Explain using repeated addition and multiplication.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Repeated addition: 12 + 12 + 12 + 12 = <strong>48 items</strong>.<br>2. Multiplication fact: 4 × 12 = <strong>48 items</strong>.<br>3. Both methods yield the exact same answer. Multiplication is efficient repeated addition.",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeated addition 12+12+12+12 = 48",
            "marks": "1 M"
          },
          {
            "key": "Multiplication 4 × 12 = 48",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Concept Exploration",
        "q": "In 'House of Hundreds – II', how do you verify your mathematical calculations? Give an example using two numbers that add up to 100.",
        "ans": "<strong>Verification Method:</strong><br>• Take two numbers: 65 and 35. Sum = 65 + 35 = 100.<br>• Verification by inverse operation (subtraction): 100 - 35 = 65, and 100 - 65 = 35.<br>• Since subtraction brings back the original numbers, the addition is confirmed correct.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 65 + 35 = 100",
            "marks": "1 M"
          },
          {
            "key": "Inverse check 100 - 35 = 65",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practice Time • Mental Math Drills",
        "q": "Solve mentally:<br>(a) 25 + 75 = ?<br>(b) 150 - 60 = ?<br>(c) Double of 45 = ?<br>(d) Half of 80 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 25 + 75 = <strong>100</strong>.<br>• (b) 150 - 60 = <strong>90</strong>.<br>• (c) 45 × 2 = <strong>90</strong>.<br>• (d) 80 ÷ 2 = <strong>40</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental math facts correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application",
        "q": "A school library received 3 boxes of mathematics activity books. Each box contained 25 books. During the week, 38 books were distributed to Grade 3 children. How many books remain in the library?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total books received = 3 × 25 = <strong>75 books</strong>.<br>2. Books distributed = 38 books.<br>3. Books remaining = 75 - 38 = <strong>37 books</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total 3 × 25 = 75",
            "marks": "1.5 M"
          },
          {
            "key": "Remainder 75 - 38 = 37",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Critical Thinking • Finding the Pattern",
        "q": "Observe the sequence related to 'House of Hundreds – II': 12, 24, 36, 48, ___, ___. Find the next two terms and state the mathematical rule.",
        "ans": "<strong>Pattern Analysis:</strong><br>• 12 + 12 = 24<br>• 24 + 12 = 36<br>• 36 + 12 = 48<br>• Rule: Successive addition of 12 (Multiples of 12).<br>• Next terms: 48 + 12 = <strong>60</strong>, 60 + 12 = <strong>72</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 60, 72",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiples of 12 / +12 step",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Estimation & Measurement • Practical Judgment",
        "q": "Estimate whether each measurement is greater than or less than 1 metre:<br>(a) Length of your classroom pencil.<br>(b) Height of your classroom teacher.<br>(c) Width of your mathematics textbook.<br>(d) Length of the school blackboard.",
        "ans": "<strong>Estimation:</strong><br>• (a) Pencil: <strong>Less than 1 metre</strong> (approx. 15 cm).<br>• (b) Teacher height: <strong>Greater than 1 metre</strong> (approx. 1.6 to 1.7 m).<br>• (c) Textbook width: <strong>Less than 1 metre</strong> (approx. 20 cm).<br>• (d) Blackboard length: <strong>Greater than 1 metre</strong> (approx. 2 to 3 m).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct estimation for all 4 items",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Interpretation • Reading Simple Tables",
        "q": "A table shows student preferences for fruit: Apple (15), Banana (22), Mango (35), Orange (18).<br>(a) Which fruit is preferred by the maximum number of students?<br>(b) How many more students prefer Mango over Banana?<br>(c) What is the total number of students surveyed?",
        "ans": "<strong>Table Interpretation:</strong><br>• (a) Maximum preference: <strong>Mango</strong> with 35 students.<br>• (b) Difference: 35 - 22 = <strong>13 more students</strong> prefer Mango.<br>• (c) Total students: 15 + 22 + 35 + 18 = <strong>90 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mango identified",
            "marks": "1 M"
          },
          {
            "key": "Difference = 13",
            "marks": "1 M"
          },
          {
            "key": "Total = 90",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Do • Shapes and Symmetry",
        "q": "Draw a line of symmetry through each shape:<br>(a) A rectangle<br>(b) An equilateral triangle<br>(c) A circle.<br>How many lines of symmetry does a circle have?",
        "ans": "<strong>Symmetry Properties:</strong><br>• (a) A rectangle has <strong>2 lines of symmetry</strong> (horizontal and vertical through centers of opposite sides).<br>• (b) An equilateral triangle has <strong>3 lines of symmetry</strong> (from each vertex to opposite midpoint).<br>• (c) A circle has <strong>infinite lines of symmetry</strong> (any diameter passing through the center).",
        "marks": 3,
        "rubric": [
          {
            "key": "Rectangle = 2 lines",
            "marks": "1 M"
          },
          {
            "key": "Triangle = 3 lines",
            "marks": "1 M"
          },
          {
            "key": "Circle = infinite lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Puzzle Time • Missing Number Grid",
        "q": "In a 3x3 magic square, the sum of each row, column, and diagonal is 15. The center number is 5. What numbers go in the opposite corners if one corner is 2?",
        "ans": "<strong>Magic Square Logic:</strong><br>• In a 3x3 magic square with sum 15 and center 5, opposite corners must sum to 10 (since 2 + 5 + x = 15 → x = 8).<br>• If one corner is 2, the diagonally opposite corner must be <strong>8</strong>.<br>• Other corner pairs: 4 and 6.",
        "marks": 2,
        "rubric": [
          {
            "key": "Opposite corner = 8 with reasoning",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Money & Shopping • Cash Memo Bill",
        "q": "Rani visits a stationery shop and buys: 2 Pencils at ₹5 each, 1 Eraser for ₹3, and 1 Notebook for ₹25. Prepare a simple cash memo showing total bill and change returned from a ₹50 note.",
        "ans": "<strong>Cash Memo Preparation:</strong><br>• 2 Pencils @ ₹5 = ₹10<br>• 1 Eraser @ ₹3 = ₹3<br>• 1 Notebook @ ₹25 = ₹25<br>• <strong>Total Bill Amount</strong> = ₹10 + ₹3 + ₹25 = <strong>₹38</strong>.<br>• Amount paid = ₹50.<br>• <strong>Change returned</strong> = ₹50 - ₹38 = <strong>₹12</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct item breakdown and total ₹38",
            "marks": "2 M"
          },
          {
            "key": "Change = ₹12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Review • Comprehensive Concept Check",
        "q": "True or False:<br>(a) 1 kilometre is equal to 1000 metres.<br>(b) 500 millilitres is equal to half a litre.<br>(c) A square has 4 equal straight edges and 4 right-angled corners.",
        "ans": "<strong>Review Answers:</strong><br>• (a) <strong>True:</strong> 1 km = 1000 m.<br>• (b) <strong>True:</strong> 1 Litre = 1000 mL, so half a litre = 500 mL.<br>• (c) <strong>True:</strong> A square has 4 equal sides and 4 right angles.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 statements correctly evaluated as True",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Marathon Bib Number Allocation",
      "text": "In a city mini-marathon for children, runner bibs were numbered from 750 to 850 consecutively.",
      "question": "How many total runners participated? If Rahul wore bib 789 and Sanya wore bib 814, how many runners were between them?",
      "answer": "1. Total runners = (Last bib - First bib) + 1 = (850 - 750) + 1 = 100 + 1 = <strong>101 runners</strong>.<br>2. Runners between 789 and 814 = 814 - 789 - 1 = 25 - 1 = <strong>24 runners</strong>.",
      "rubric": "1.5M inclusive count calculation + 1.5M runners between calculation."
    }
  },
  {
    "id": "mm10",
    "num": 10,
    "unit": "Unit 4: Multiplication, Measurement & Data",
    "title": "Fun at Class Party!",
    "subtitle": "Repeated Addition, Arrays, Multiplication Tables (2, 3, 4, 5, 10) & Party Budgets",
    "concepts": [
      "Multiplication as repeated addition of equal groups.",
      "Arranging objects in rows and columns: understanding arrays (e.g., 4 rows of 5).",
      "Building multiplication tables for 2, 3, 4, 5, and 10 using patterns.",
      "Calculating costs for party food items using unit rates."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#faf5ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#6b21a8\" text-anchor=\"middle\">Multiplication as an Array — 4 Rows of 6 Cupcakes</text>\n      <!-- 4 rows x 6 columns grid of cupcakes -->\n      <g fill=\"#c084fc\" stroke=\"#7e22ce\" stroke-width=\"1.5\">\n        <!-- Row 1 -->\n        <circle cx=\"160\" cy=\"50\" r=\"8\"/><circle cx=\"190\" cy=\"50\" r=\"8\"/><circle cx=\"220\" cy=\"50\" r=\"8\"/><circle cx=\"250\" cy=\"50\" r=\"8\"/><circle cx=\"280\" cy=\"50\" r=\"8\"/><circle cx=\"310\" cy=\"50\" r=\"8\"/>\n        <!-- Row 2 -->\n        <circle cx=\"160\" cy=\"72\" r=\"8\"/><circle cx=\"190\" cy=\"72\" r=\"8\"/><circle cx=\"220\" cy=\"72\" r=\"8\"/><circle cx=\"250\" cy=\"72\" r=\"8\"/><circle cx=\"280\" cy=\"72\" r=\"8\"/><circle cx=\"310\" cy=\"72\" r=\"8\"/>\n        <!-- Row 3 -->\n        <circle cx=\"160\" cy=\"94\" r=\"8\"/><circle cx=\"190\" cy=\"94\" r=\"8\"/><circle cx=\"220\" cy=\"94\" r=\"8\"/><circle cx=\"250\" cy=\"94\" r=\"8\"/><circle cx=\"280\" cy=\"94\" r=\"8\"/><circle cx=\"310\" cy=\"94\" r=\"8\"/>\n        <!-- Row 4 -->\n        <circle cx=\"160\" cy=\"116\" r=\"8\"/><circle cx=\"190\" cy=\"116\" r=\"8\"/><circle cx=\"220\" cy=\"116\" r=\"8\"/><circle cx=\"250\" cy=\"116\" r=\"8\"/><circle cx=\"280\" cy=\"116\" r=\"8\"/><circle cx=\"310\" cy=\"116\" r=\"8\"/>\n      </g>\n      <text x=\"80\" y=\"88\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#581c87\">4 Rows</text>\n      <text x=\"235\" y=\"142\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#6b21a8\" text-anchor=\"middle\">4 × 6 = 24 Cupcakes</text>\n      <rect x=\"380\" y=\"55\" width=\"150\" height=\"70\" rx=\"8\" fill=\"#e9d5ff\" stroke=\"#a855f7\" stroke-width=\"1.5\"/>\n      <text x=\"455\" y=\"78\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#581c87\" text-anchor=\"middle\">Repeated Addition:</text>\n      <text x=\"455\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"#3b0764\" text-anchor=\"middle\">6 + 6 + 6 + 6 = 24</text>\n    </svg>",
    "questions": [
      {
        "category": "Array Model • Multiplication Sentence",
        "q": "In the classroom party, chairs are placed in 5 rows with 8 chairs in each row. (a) Write the repeated addition fact. (b) Write the multiplication fact. (c) How many total chairs are there?",
        "ans": "<strong>Solution:</strong><br>• Number of rows = 5<br>• Chairs in each row = 8<br><strong>(a) Repeated Addition:</strong> 8 + 8 + 8 + 8 + 8 = <strong>40</strong>.<br><strong>(b) Multiplication Fact:</strong> 5 × 8 = <strong>40</strong>.<br><strong>(c) Total Chairs:</strong> <strong>40 chairs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct repeated addition statement",
            "marks": "1.0 M"
          },
          {
            "key": "Correct multiplication statement",
            "marks": "1.0 M"
          },
          {
            "key": "Correct total chair count",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Multiplication Tables • Patterns",
        "q": "Look at the 5 times table: 5, 10, 15, 20, 25, 30... (a) What pattern do you notice in the ones digit? (b) Can any number ending in 7 be in the 5 times table? Why or why not?",
        "ans": "<strong>Analysis:</strong><br><strong>(a) Ones Digit Pattern:</strong> The ones digit alternates continuously between <strong>5 and 0</strong>.<br><strong>(b) Ending in 7:</strong> <strong>No</strong>, because every multiple of 5 must end in either 0 or 5. A number ending in 7 will always leave a remainder of 2 when divided by 5.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identification of alternating 5 and 0 pattern",
            "marks": "1.0 M"
          },
          {
            "key": "Correct justification regarding remainder 2",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Unit Costing • Real-Life Math",
        "q": "For a class party, the teacher bought: 6 packs of juice at ₹10 each, 4 packets of paper cups at ₹15 each, and 5 bags of popcorn at ₹20 each. Calculate the total expenditure.",
        "ans": "<strong>Step-by-step Calculation:</strong><br>1. Cost of juice = 6 × ₹10 = ₹60<br>2. Cost of paper cups = 4 × ₹15 = ₹60<br>3. Cost of popcorn = 5 × ₹20 = ₹100<br>4. <strong>Total Expenditure</strong> = ₹60 + ₹60 + ₹100 = <strong>₹220</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct multiplication for each item type",
            "marks": "1.5 M"
          },
          {
            "key": "Correct summation of total bill (₹220)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Drink Sharing • Capacity Math",
        "q": "For the class party, the teacher bought two 2-litre bottles of mango juice.<br>(a) How many total litres of mango juice were bought?<br>(b) Convert the total litres into millilitres (mL).<br>(c) If each paper cup holds 200 mL, how many cups of juice can be served in total?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Total Litres:</strong><br>• 2 bottles × 2 litres = <strong>4 litres</strong>.<br><br><strong>(b) Conversion to mL:</strong><br>• 1 litre = 1000 mL.<br>• 4 litres = 4 × 1000 = <strong>4000 mL</strong>.<br><br><strong>(c) Cups Served:</strong><br>• Capacity per cup = 200 mL.<br>• Total cups = 4000 ÷ 200 = <strong>20 cups</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct total litres (4 L)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct conversion (4000 mL)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct cups division (20 cups)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Party Schedule • Duration Calculation",
        "q": "The Class 3 party began at 10:45 AM and ended at 1:15 PM.<br>(a) How many hours and minutes did the party last?<br>(b) If musical chairs took 40 minutes and quiz took 30 minutes, how much time was left for eating snacks and dancing?",
        "ans": "<strong>Step-by-Step Time Calculation:</strong><br><strong>(a) Total Duration:</strong><br>• From 10:45 AM to 11:00 AM = 15 minutes.<br>• From 11:00 AM to 1:00 PM = 2 hours.<br>• From 1:00 PM to 1:15 PM = 15 minutes.<br>• Total = 2 hours + 15 min + 15 min = <strong>2 hours 30 minutes</strong> (or 150 minutes).<br><br><strong>(b) Remaining Time:</strong><br>• Games time = 40 min + 30 min = 70 minutes.<br>• Remaining time = 150 min - 70 min = <strong>80 minutes</strong> (or <strong>1 hour 20 minutes</strong>).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct total duration (2 hours 30 minutes)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct remaining time (80 minutes / 1 hr 20 min)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Snack Budget & Cash Memo",
        "q": "Prepare a bill for the following party purchases:<br>• 25 samosas at ₹8 each<br>• 30 bananas at ₹4 each<br>• 2 packets of paper plates at ₹25 per packet<br>Calculate the total bill and the change from a ₹500 note.",
        "ans": "<strong>Step-by-Step Bill:</strong><br>• Samosas: 25 × ₹8 = ₹200.<br>• Bananas: 30 × ₹4 = ₹120.<br>• Plates: 2 × ₹25 = ₹50.<br>• <strong>Total Bill:</strong> ₹200 + ₹120 + ₹50 = <strong>₹370</strong>.<br><br><strong>Change from ₹500:</strong><br>• Change = ₹500 - ₹370 = <strong>₹130</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct itemised multiplication and sum (₹370)",
            "marks": "2.0 M"
          },
          {
            "key": "Correct change subtraction (₹130)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Tally Chart of Party Games",
        "q": "In a survey of 24 children about their favorite party game:<br>• 8 chose Musical Chairs<br>• 7 chose Dumb Charades<br>• 5 chose Antakshari<br>• 4 chose Passing the Parcel<br>(a) Draw a tally chart representing these votes.<br>(b) Which game was the most popular and which was the least popular?",
        "ans": "<strong>(a) Tally Chart:</strong><br><table style='width:100%;border-collapse:collapse;margin-top:6px;'><thead><tr style='background:#f1f5f9;'><th style='padding:6px;border:1px solid #cbd5e1;'>Game</th><th style='padding:6px;border:1px solid #cbd5e1;'>Tally Marks</th><th style='padding:6px;border:1px solid #cbd5e1;'>Number of Votes</th></tr></thead><tbody><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Musical Chairs</td><td style='padding:6px;border:1px solid #cbd5e1;'><s>||||</s> |||</td><td style='padding:6px;border:1px solid #cbd5e1;'>8</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Dumb Charades</td><td style='padding:6px;border:1px solid #cbd5e1;'><s>||||</s> ||</td><td style='padding:6px;border:1px solid #cbd5e1;'>7</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Antakshari</td><td style='padding:6px;border:1px solid #cbd5e1;'><s>||||</s></td><td style='padding:6px;border:1px solid #cbd5e1;'>5</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Passing the Parcel</td><td style='padding:6px;border:1px solid #cbd5e1;'>||||</td><td style='padding:6px;border:1px solid #cbd5e1;'>4</td></tr><tr style='font-weight:700;'><td style='padding:6px;border:1px solid #cbd5e1;'>Total</td><td style='padding:6px;border:1px solid #cbd5e1;'>—</td><td style='padding:6px;border:1px solid #cbd5e1;'>24</td></tr></tbody></table><br><strong>(b) Popularity:</strong><br>• <strong>Most popular:</strong> Musical Chairs (8 votes).<br>• <strong>Least popular:</strong> Passing the Parcel (4 votes).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct tally marks layout and bundle counts",
            "marks": "2.0 M"
          },
          {
            "key": "Correct identification of most and least popular games",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Practical Problem Solving",
        "q": "In Chapter 10 ('Fun at Class Party!'), a student solves an exercise problem: If 1 packet contains 12 items, how many items are in 4 such packets? Explain using repeated addition and multiplication.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Repeated addition: 12 + 12 + 12 + 12 = <strong>48 items</strong>.<br>2. Multiplication fact: 4 × 12 = <strong>48 items</strong>.<br>3. Both methods yield the exact same answer. Multiplication is efficient repeated addition.",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeated addition 12+12+12+12 = 48",
            "marks": "1 M"
          },
          {
            "key": "Multiplication 4 × 12 = 48",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Concept Exploration",
        "q": "In 'Fun at Class Party!', how do you verify your mathematical calculations? Give an example using two numbers that add up to 100.",
        "ans": "<strong>Verification Method:</strong><br>• Take two numbers: 65 and 35. Sum = 65 + 35 = 100.<br>• Verification by inverse operation (subtraction): 100 - 35 = 65, and 100 - 65 = 35.<br>• Since subtraction brings back the original numbers, the addition is confirmed correct.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 65 + 35 = 100",
            "marks": "1 M"
          },
          {
            "key": "Inverse check 100 - 35 = 65",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practice Time • Mental Math Drills",
        "q": "Solve mentally:<br>(a) 25 + 75 = ?<br>(b) 150 - 60 = ?<br>(c) Double of 45 = ?<br>(d) Half of 80 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 25 + 75 = <strong>100</strong>.<br>• (b) 150 - 60 = <strong>90</strong>.<br>• (c) 45 × 2 = <strong>90</strong>.<br>• (d) 80 ÷ 2 = <strong>40</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental math facts correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application",
        "q": "A school library received 3 boxes of mathematics activity books. Each box contained 25 books. During the week, 38 books were distributed to Grade 3 children. How many books remain in the library?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total books received = 3 × 25 = <strong>75 books</strong>.<br>2. Books distributed = 38 books.<br>3. Books remaining = 75 - 38 = <strong>37 books</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total 3 × 25 = 75",
            "marks": "1.5 M"
          },
          {
            "key": "Remainder 75 - 38 = 37",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Critical Thinking • Finding the Pattern",
        "q": "Observe the sequence related to 'Fun at Class Party!': 12, 24, 36, 48, ___, ___. Find the next two terms and state the mathematical rule.",
        "ans": "<strong>Pattern Analysis:</strong><br>• 12 + 12 = 24<br>• 24 + 12 = 36<br>• 36 + 12 = 48<br>• Rule: Successive addition of 12 (Multiples of 12).<br>• Next terms: 48 + 12 = <strong>60</strong>, 60 + 12 = <strong>72</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 60, 72",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiples of 12 / +12 step",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Estimation & Measurement • Practical Judgment",
        "q": "Estimate whether each measurement is greater than or less than 1 metre:<br>(a) Length of your classroom pencil.<br>(b) Height of your classroom teacher.<br>(c) Width of your mathematics textbook.<br>(d) Length of the school blackboard.",
        "ans": "<strong>Estimation:</strong><br>• (a) Pencil: <strong>Less than 1 metre</strong> (approx. 15 cm).<br>• (b) Teacher height: <strong>Greater than 1 metre</strong> (approx. 1.6 to 1.7 m).<br>• (c) Textbook width: <strong>Less than 1 metre</strong> (approx. 20 cm).<br>• (d) Blackboard length: <strong>Greater than 1 metre</strong> (approx. 2 to 3 m).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct estimation for all 4 items",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Interpretation • Reading Simple Tables",
        "q": "A table shows student preferences for fruit: Apple (15), Banana (22), Mango (35), Orange (18).<br>(a) Which fruit is preferred by the maximum number of students?<br>(b) How many more students prefer Mango over Banana?<br>(c) What is the total number of students surveyed?",
        "ans": "<strong>Table Interpretation:</strong><br>• (a) Maximum preference: <strong>Mango</strong> with 35 students.<br>• (b) Difference: 35 - 22 = <strong>13 more students</strong> prefer Mango.<br>• (c) Total students: 15 + 22 + 35 + 18 = <strong>90 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mango identified",
            "marks": "1 M"
          },
          {
            "key": "Difference = 13",
            "marks": "1 M"
          },
          {
            "key": "Total = 90",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Do • Shapes and Symmetry",
        "q": "Draw a line of symmetry through each shape:<br>(a) A rectangle<br>(b) An equilateral triangle<br>(c) A circle.<br>How many lines of symmetry does a circle have?",
        "ans": "<strong>Symmetry Properties:</strong><br>• (a) A rectangle has <strong>2 lines of symmetry</strong> (horizontal and vertical through centers of opposite sides).<br>• (b) An equilateral triangle has <strong>3 lines of symmetry</strong> (from each vertex to opposite midpoint).<br>• (c) A circle has <strong>infinite lines of symmetry</strong> (any diameter passing through the center).",
        "marks": 3,
        "rubric": [
          {
            "key": "Rectangle = 2 lines",
            "marks": "1 M"
          },
          {
            "key": "Triangle = 3 lines",
            "marks": "1 M"
          },
          {
            "key": "Circle = infinite lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Puzzle Time • Missing Number Grid",
        "q": "In a 3x3 magic square, the sum of each row, column, and diagonal is 15. The center number is 5. What numbers go in the opposite corners if one corner is 2?",
        "ans": "<strong>Magic Square Logic:</strong><br>• In a 3x3 magic square with sum 15 and center 5, opposite corners must sum to 10 (since 2 + 5 + x = 15 → x = 8).<br>• If one corner is 2, the diagonally opposite corner must be <strong>8</strong>.<br>• Other corner pairs: 4 and 6.",
        "marks": 2,
        "rubric": [
          {
            "key": "Opposite corner = 8 with reasoning",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Money & Shopping • Cash Memo Bill",
        "q": "Rani visits a stationery shop and buys: 2 Pencils at ₹5 each, 1 Eraser for ₹3, and 1 Notebook for ₹25. Prepare a simple cash memo showing total bill and change returned from a ₹50 note.",
        "ans": "<strong>Cash Memo Preparation:</strong><br>• 2 Pencils @ ₹5 = ₹10<br>• 1 Eraser @ ₹3 = ₹3<br>• 1 Notebook @ ₹25 = ₹25<br>• <strong>Total Bill Amount</strong> = ₹10 + ₹3 + ₹25 = <strong>₹38</strong>.<br>• Amount paid = ₹50.<br>• <strong>Change returned</strong> = ₹50 - ₹38 = <strong>₹12</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct item breakdown and total ₹38",
            "marks": "2 M"
          },
          {
            "key": "Change = ₹12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Review • Comprehensive Concept Check",
        "q": "True or False:<br>(a) 1 kilometre is equal to 1000 metres.<br>(b) 500 millilitres is equal to half a litre.<br>(c) A square has 4 equal straight edges and 4 right-angled corners.",
        "ans": "<strong>Review Answers:</strong><br>• (a) <strong>True:</strong> 1 km = 1000 m.<br>• (b) <strong>True:</strong> 1 Litre = 1000 mL, so half a litre = 500 mL.<br>• (c) <strong>True:</strong> A square has 4 equal sides and 4 right angles.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 statements correctly evaluated as True",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Party Gift Return Bags",
      "text": "The class teacher prepares 25 return gift pouches for students. In each pouch, she places 3 crayons and 2 stickers.",
      "question": "How many crayons and how many stickers will she need in total? What is the total count of all gift items?",
      "answer": "1. Total crayons needed = 25 × 3 = 75 crayons.<br>2. Total stickers needed = 25 × 2 = 50 stickers.<br>3. <strong>Total gift items</strong> = 75 + 50 = <strong>125 items</strong> (or 25 × 5 = 125 items).",
      "rubric": "1M crayons multiplication + 1M stickers multiplication + 1M total sum."
    }
  },
  {
    "id": "mm11",
    "num": 11,
    "unit": "Unit 4: Multiplication, Measurement & Data",
    "title": "Filling and Lifting",
    "subtitle": "Capacity (Litres & Millilitres), Weight (Kilograms & Grams) & Comparison",
    "concepts": [
      "Understanding capacity: Litre (L) for large liquids and Millilitre (mL) for small amounts.",
      "1 Litre = 1000 Millilitres (1 L = 1000 mL).",
      "Understanding weight: Kilogram (kg) for heavy items and Gram (g) for light items.",
      "1 Kilogram = 1000 Grams (1 kg = 1000 g).",
      "Using non-standard and standard balance scales to compare weights."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#ecfeff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0e7490\" text-anchor=\"middle\">Standard Units of Capacity &amp; Weight</text>\n      <!-- 1 Litre Bottle -->\n      <rect x=\"70\" y=\"45\" width=\"40\" height=\"70\" rx=\"4\" fill=\"#a5f3fc\" stroke=\"#0891b2\" stroke-width=\"1.5\"/>\n      <rect x=\"80\" y=\"38\" width=\"20\" height=\"8\" rx=\"2\" fill=\"#0891b2\"/>\n      <text x=\"90\" y=\"85\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0e7490\" text-anchor=\"middle\">1 L</text>\n      <text x=\"90\" y=\"132\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#155e75\" text-anchor=\"middle\">1 Litre</text>\n      <text x=\"90\" y=\"146\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#0e7490\" text-anchor=\"middle\">= 1000 mL</text>\n      <text x=\"180\" y=\"85\" font-family=\"system-ui, sans-serif\" font-size=\"16\" font-weight=\"800\" fill=\"#0891b2\" text-anchor=\"middle\">=</text>\n      <!-- 500 mL + 500 mL -->\n      <rect x=\"220\" y=\"60\" width=\"30\" height=\"55\" rx=\"3\" fill=\"#cffafe\" stroke=\"#0891b2\" stroke-width=\"1.2\"/>\n      <text x=\"235\" y=\"92\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0e7490\" text-anchor=\"middle\">500</text>\n      <text x=\"265\" y=\"88\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#0891b2\" text-anchor=\"middle\">+</text>\n      <rect x=\"280\" y=\"60\" width=\"30\" height=\"55\" rx=\"3\" fill=\"#cffafe\" stroke=\"#0891b2\" stroke-width=\"1.2\"/>\n      <text x=\"295\" y=\"92\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0e7490\" text-anchor=\"middle\">500</text>\n      <text x=\"265\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#155e75\" text-anchor=\"middle\">Two 500 mL Mugs</text>\n      <!-- Weight Balance -->\n      <line x1=\"390\" y1=\"85\" x2=\"510\" y2=\"85\" stroke=\"#334155\" stroke-width=\"3\"/>\n      <polygon points=\"450,85 440,115 460,115\" fill=\"#64748b\"/>\n      <rect x=\"400\" y=\"60\" width=\"30\" height=\"25\" fill=\"#fbcfe8\" stroke=\"#db2777\" stroke-width=\"1.5\"/>\n      <text x=\"415\" y=\"77\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"800\" fill=\"#9d174d\" text-anchor=\"middle\">1 kg</text>\n      <circle cx=\"500\" cy=\"72\" r=\"12\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n      <text x=\"500\" y=\"76\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"800\" fill=\"#9a3412\" text-anchor=\"middle\">1 kg</text>\n      <text x=\"450\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">1 kg Balance = 1000 g</text>\n    </svg>",
    "questions": [
      {
        "category": "Capacity Unit Selection • Real-World Items",
        "q": "State whether you would measure the capacity of the following in 'Litres (L)' or 'Millilitres (mL)': (a) A medicine dropper, (b) Water in a swimming pool, (c) A cup of tea, (d) Petrol in a car tank.",
        "ans": "<strong>Units:</strong><br>• <strong>(a) Medicine dropper:</strong> <strong>Millilitres (mL)</strong> (very small liquid volume)<br>• <strong>(b) Water in swimming pool:</strong> <strong>Litres (L)</strong> (huge liquid volume)<br>• <strong>(c) A cup of tea:</strong> <strong>Millilitres (mL)</strong> (approx 150-200 mL)<br>• <strong>(d) Petrol in a car tank:</strong> <strong>Litres (L)</strong> (approx 35-50 L).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct unit for dropper and tea (mL)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct unit for pool and car petrol (L)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Capacity Conversion & Arithmetic",
        "q": "A bucket holds 10 litres of water. (a) How many 500 mL mugs of water are needed to fill this bucket completely? (b) How many 1-litre bottles can be filled from this bucket?",
        "ans": "<strong>Solution:</strong><br><strong>(a) Mugs of 500 mL:</strong><br>• We know that 1 Litre = 2 mugs of 500 mL (500 mL + 500 mL = 1000 mL = 1 L).<br>• For 10 Litres = 10 × 2 = <strong>20 mugs</strong>.<br><br><strong>(b) 1-Litre bottles:</strong><br>• 10 Litres ÷ 1 Litre = <strong>10 bottles</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear conversion statement (1 L = 2 × 500 mL)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct answer for mugs (20) and bottles (10)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Weight Units & Balancing",
        "q": "A vegetable seller has standard weights of 1 kg, 500 g, 200 g, and 100 g. How can she weigh: (a) 1 kg 700 g of potatoes? (b) 800 g of tomatoes using the least number of weights?",
        "ans": "<strong>Combinations:</strong><br>• <strong>(a) 1 kg 700 g potatoes:</strong><br>1 kg + 500 g + 200 g = <strong>1 kg 700 g</strong> (3 weights).<br><br>• <strong>(b) 800 g tomatoes:</strong><br>500 g + 200 g + 100 g = <strong>800 g</strong> (3 weights).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct weight combination for 1 kg 700 g",
            "marks": "1.5 M"
          },
          {
            "key": "Correct weight combination for 800 g",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Capacity Ranking • Everyday Containers",
        "q": "Arrange the following containers in order of their capacity, from holding the least water to holding the most water:<br>Water tanker, Tea spoon, Bucket, Glass, Water bottle.",
        "ans": "<strong>Capacity Ordering (Least to Most):</strong><br>1. <strong>Tea spoon</strong> (~5 mL)<br>2. <strong>Glass</strong> (~250 mL)<br>3. <strong>Water bottle</strong> (~1 Litre / 1000 mL)<br>4. <strong>Bucket</strong> (~15 to 20 Litres)<br>5. <strong>Water tanker</strong> (~5000 Litres).<br><br><strong>Order:</strong> Tea spoon &lt; Glass &lt; Water bottle &lt; Bucket &lt; Water tanker.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct ranking from least to most",
            "marks": "2.0 M"
          },
          {
            "key": "Reasonable real-life capacity estimates",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Balance Scale • Weights in Grams and Kilograms",
        "q": "A grocer wants to weigh 1 kg of sugar. He has standard weights of 500 g, 200 g, and 100 g.<br>(a) How many 500 g weights balance 1 kg?<br>(b) How many 200 g weights balance 1 kg?<br>(c) Give a combination using all three weights (500 g, 200 g, 100 g) that together equal 1 kg.",
        "ans": "<strong>Step-by-Step Weights:</strong><br>• 1 kg = 1000 grams.<br><strong>(a) 500 g Weights:</strong><br>• 1000 ÷ 500 = <strong>2 weights of 500 g</strong>.<br><br><strong>(b) 200 g Weights:</strong><br>• 1000 ÷ 200 = <strong>5 weights of 200 g</strong>.<br><br><strong>(c) Combined Weights:</strong><br>• One 500 g weight = 500 g<br>• Two 200 g weights = 400 g<br>• One 100 g weight = 100 g<br>• Total = 500 g + 400 g + 100 g = <strong>1000 g = 1 kg</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct answers for (a): 2 weights, and (b): 5 weights",
            "marks": "1.5 M"
          },
          {
            "key": "Correct mixed combination summing to 1000 g",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Weight Addition & Subtraction • Grocery Sack",
        "q": "A family bought a 25 kg sack of wheat flour. In the first week, they used 8 kg 500 g. In the second week, they used 7 kg 250 g.<br>(a) What was the total weight of flour used in the two weeks?<br>(b) How much flour remains in the sack?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Total Flour Used:</strong><br>• Week 1: 8 kg 500 g<br>• Week 2: 7 kg 250 g<br>• Sum: (8 + 7) kg + (500 + 250) g = <strong>15 kg 750 g</strong>.<br><br><strong>(b) Remaining Flour:</strong><br>• Total in sack = 25 kg 000 g<br>• Used = 15 kg 750 g<br>• Subtraction: 24 kg 1000 g - 15 kg 750 g = <strong>9 kg 250 g</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct addition of compound weights (15 kg 750 g)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct subtraction from 25 kg (9 kg 250 g)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Measuring Jug Puzzle • Liquid Volume",
        "q": "A bucket holds 12 litres of water. You only have a 2-litre jug and a 500 mL mug.<br>(a) How many full 2-litre jugs are needed to fill the bucket completely?<br>(b) How many 500 mL mugs are needed to equal one 2-litre jug?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Jugs to fill bucket:</strong><br>• Total bucket capacity = 12 litres.<br>• Jug capacity = 2 litres.<br>• Number of jugs = 12 ÷ 2 = <strong>6 jugs</strong>.<br><br><strong>(b) Mugs per jug:</strong><br>• 1 litre = 1000 mL = two 500 mL mugs.<br>• 2 litres = 2 × 2 = <strong>4 mugs of 500 mL</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct calculation for jugs (6 jugs)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct calculation for mugs (4 mugs)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Practical Problem Solving",
        "q": "In Chapter 11 ('Filling and Lifting'), a student solves an exercise problem: If 1 packet contains 12 items, how many items are in 4 such packets? Explain using repeated addition and multiplication.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Repeated addition: 12 + 12 + 12 + 12 = <strong>48 items</strong>.<br>2. Multiplication fact: 4 × 12 = <strong>48 items</strong>.<br>3. Both methods yield the exact same answer. Multiplication is efficient repeated addition.",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeated addition 12+12+12+12 = 48",
            "marks": "1 M"
          },
          {
            "key": "Multiplication 4 × 12 = 48",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Concept Exploration",
        "q": "In 'Filling and Lifting', how do you verify your mathematical calculations? Give an example using two numbers that add up to 100.",
        "ans": "<strong>Verification Method:</strong><br>• Take two numbers: 65 and 35. Sum = 65 + 35 = 100.<br>• Verification by inverse operation (subtraction): 100 - 35 = 65, and 100 - 65 = 35.<br>• Since subtraction brings back the original numbers, the addition is confirmed correct.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 65 + 35 = 100",
            "marks": "1 M"
          },
          {
            "key": "Inverse check 100 - 35 = 65",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practice Time • Mental Math Drills",
        "q": "Solve mentally:<br>(a) 25 + 75 = ?<br>(b) 150 - 60 = ?<br>(c) Double of 45 = ?<br>(d) Half of 80 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 25 + 75 = <strong>100</strong>.<br>• (b) 150 - 60 = <strong>90</strong>.<br>• (c) 45 × 2 = <strong>90</strong>.<br>• (d) 80 ÷ 2 = <strong>40</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental math facts correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application",
        "q": "A school library received 3 boxes of mathematics activity books. Each box contained 25 books. During the week, 38 books were distributed to Grade 3 children. How many books remain in the library?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total books received = 3 × 25 = <strong>75 books</strong>.<br>2. Books distributed = 38 books.<br>3. Books remaining = 75 - 38 = <strong>37 books</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total 3 × 25 = 75",
            "marks": "1.5 M"
          },
          {
            "key": "Remainder 75 - 38 = 37",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Critical Thinking • Finding the Pattern",
        "q": "Observe the sequence related to 'Filling and Lifting': 12, 24, 36, 48, ___, ___. Find the next two terms and state the mathematical rule.",
        "ans": "<strong>Pattern Analysis:</strong><br>• 12 + 12 = 24<br>• 24 + 12 = 36<br>• 36 + 12 = 48<br>• Rule: Successive addition of 12 (Multiples of 12).<br>• Next terms: 48 + 12 = <strong>60</strong>, 60 + 12 = <strong>72</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 60, 72",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiples of 12 / +12 step",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Estimation & Measurement • Practical Judgment",
        "q": "Estimate whether each measurement is greater than or less than 1 metre:<br>(a) Length of your classroom pencil.<br>(b) Height of your classroom teacher.<br>(c) Width of your mathematics textbook.<br>(d) Length of the school blackboard.",
        "ans": "<strong>Estimation:</strong><br>• (a) Pencil: <strong>Less than 1 metre</strong> (approx. 15 cm).<br>• (b) Teacher height: <strong>Greater than 1 metre</strong> (approx. 1.6 to 1.7 m).<br>• (c) Textbook width: <strong>Less than 1 metre</strong> (approx. 20 cm).<br>• (d) Blackboard length: <strong>Greater than 1 metre</strong> (approx. 2 to 3 m).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct estimation for all 4 items",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Interpretation • Reading Simple Tables",
        "q": "A table shows student preferences for fruit: Apple (15), Banana (22), Mango (35), Orange (18).<br>(a) Which fruit is preferred by the maximum number of students?<br>(b) How many more students prefer Mango over Banana?<br>(c) What is the total number of students surveyed?",
        "ans": "<strong>Table Interpretation:</strong><br>• (a) Maximum preference: <strong>Mango</strong> with 35 students.<br>• (b) Difference: 35 - 22 = <strong>13 more students</strong> prefer Mango.<br>• (c) Total students: 15 + 22 + 35 + 18 = <strong>90 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mango identified",
            "marks": "1 M"
          },
          {
            "key": "Difference = 13",
            "marks": "1 M"
          },
          {
            "key": "Total = 90",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Do • Shapes and Symmetry",
        "q": "Draw a line of symmetry through each shape:<br>(a) A rectangle<br>(b) An equilateral triangle<br>(c) A circle.<br>How many lines of symmetry does a circle have?",
        "ans": "<strong>Symmetry Properties:</strong><br>• (a) A rectangle has <strong>2 lines of symmetry</strong> (horizontal and vertical through centers of opposite sides).<br>• (b) An equilateral triangle has <strong>3 lines of symmetry</strong> (from each vertex to opposite midpoint).<br>• (c) A circle has <strong>infinite lines of symmetry</strong> (any diameter passing through the center).",
        "marks": 3,
        "rubric": [
          {
            "key": "Rectangle = 2 lines",
            "marks": "1 M"
          },
          {
            "key": "Triangle = 3 lines",
            "marks": "1 M"
          },
          {
            "key": "Circle = infinite lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Puzzle Time • Missing Number Grid",
        "q": "In a 3x3 magic square, the sum of each row, column, and diagonal is 15. The center number is 5. What numbers go in the opposite corners if one corner is 2?",
        "ans": "<strong>Magic Square Logic:</strong><br>• In a 3x3 magic square with sum 15 and center 5, opposite corners must sum to 10 (since 2 + 5 + x = 15 → x = 8).<br>• If one corner is 2, the diagonally opposite corner must be <strong>8</strong>.<br>• Other corner pairs: 4 and 6.",
        "marks": 2,
        "rubric": [
          {
            "key": "Opposite corner = 8 with reasoning",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Money & Shopping • Cash Memo Bill",
        "q": "Rani visits a stationery shop and buys: 2 Pencils at ₹5 each, 1 Eraser for ₹3, and 1 Notebook for ₹25. Prepare a simple cash memo showing total bill and change returned from a ₹50 note.",
        "ans": "<strong>Cash Memo Preparation:</strong><br>• 2 Pencils @ ₹5 = ₹10<br>• 1 Eraser @ ₹3 = ₹3<br>• 1 Notebook @ ₹25 = ₹25<br>• <strong>Total Bill Amount</strong> = ₹10 + ₹3 + ₹25 = <strong>₹38</strong>.<br>• Amount paid = ₹50.<br>• <strong>Change returned</strong> = ₹50 - ₹38 = <strong>₹12</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct item breakdown and total ₹38",
            "marks": "2 M"
          },
          {
            "key": "Change = ₹12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Review • Comprehensive Concept Check",
        "q": "True or False:<br>(a) 1 kilometre is equal to 1000 metres.<br>(b) 500 millilitres is equal to half a litre.<br>(c) A square has 4 equal straight edges and 4 right-angled corners.",
        "ans": "<strong>Review Answers:</strong><br>• (a) <strong>True:</strong> 1 km = 1000 m.<br>• (b) <strong>True:</strong> 1 Litre = 1000 mL, so half a litre = 500 mL.<br>• (c) <strong>True:</strong> A square has 4 equal sides and 4 right angles.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 statements correctly evaluated as True",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Community Kitchen Lemonade Preparation",
      "text": "To make lemonade for 50 people at a sports day, students use 8 litres of water, 1 litre of lemon juice, and 500 mL of sugar syrup.",
      "question": "What is the total volume of lemonade prepared in millilitres? If each glass holds 200 mL, can they serve 45 glasses?",
      "answer": "1. Convert all volumes to millilitres (mL):<br>• Water = 8 L = 8,000 mL<br>• Lemon juice = 1 L = 1,000 mL<br>• Sugar syrup = 500 mL<br>• <strong>Total volume</strong> = 8,000 + 1,000 + 500 = <strong>9,500 mL</strong>.<br>2. Volume needed for 45 glasses of 200 mL each = 45 × 200 mL = 9,000 mL.<br>3. Since 9,500 mL > 9,000 mL, <strong>yes, they can easily serve 45 glasses</strong> (with 500 mL left over).",
      "rubric": "1.5M litre to millilitre conversion and summation + 1.5M capacity comparison."
    }
  },
  {
    "id": "mm12",
    "num": 12,
    "unit": "Unit 4: Multiplication, Measurement & Data",
    "title": "Give and Take",
    "subtitle": "2-Step Word Problems, Flow of Money, Addition with Regrouping & Verification",
    "concepts": [
      "Translating word problems into numerical addition and subtraction sentences.",
      "Checking addition by subtraction (inverse operation check).",
      "Handling word problems involving 'more than', 'less than', and 'difference'.",
      "Solving 2-step financial transaction problems."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#a16207\" text-anchor=\"middle\">Inverse Operations — Checking Addition with Subtraction</text>\n      <!-- Forward Arrow -->\n      <rect x=\"70\" y=\"55\" width=\"120\" height=\"40\" rx=\"6\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/>\n      <text x=\"130\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#854d0e\" text-anchor=\"middle\">145 + 85 = 230</text>\n      <path d=\"M210,75 L280,75\" stroke=\"#ca8a04\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/>\n      <!-- Check Arrow -->\n      <rect x=\"300\" y=\"55\" width=\"200\" height=\"40\" rx=\"6\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/>\n      <text x=\"400\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#15803d\" text-anchor=\"middle\">Check: 230 - 85 = 145 ✓</text>\n      <text x=\"290\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#713f12\" text-anchor=\"middle\">Addition and Subtraction are inverse operations: Any sum can be verified by subtracting.</text>\n    </svg>",
    "questions": [
      {
        "category": "Inverse Operations • Checking Work",
        "q": "Solve: 356 + 178. Then use subtraction to check whether your answer is correct.",
        "ans": "<strong>Solution & Verification:</strong><br>1. <strong>Addition:</strong><br>&nbsp;&nbsp;356<br>+ 178<br>-------<br>&nbsp;&nbsp;<strong>534</strong> (6+8=14, 1 carry; 5+7+1=13, 1 carry; 3+1+1=5)<br><br>2. <strong>Verification via Subtraction:</strong><br>&nbsp;&nbsp;534<br>- 178<br>-------<br>&nbsp;&nbsp;<strong>356</strong><br>Since 534 - 178 = 356, the addition is <strong>100% verified correct</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct addition with carry (534)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct inverse subtraction verification",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "2-Step Financial Word Problem",
        "q": "Kiran had ₹500. She bought school books for ₹275 and stationery for ₹145. How much money did she spend altogether, and how much money was left with her?",
        "ans": "<strong>Step-by-step Solution:</strong><br><strong>Step 1: Total money spent</strong><br>Cost of books = ₹275<br>Cost of stationery = ₹145<br>Total spent = ₹275 + ₹145 = <strong>₹420</strong>.<br><br><strong>Step 2: Money left</strong><br>Total money initially = ₹500<br>Total spent = ₹420<br>Money left = ₹500 - ₹420 = <strong>₹80</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct addition for total spending (₹420)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct subtraction for remaining balance (₹80)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Number Puzzle • Magic Triangle",
        "q": "Arrange the numbers 1, 2, 3, 4, 5, 6 along the three sides of a triangle such that the sum of the numbers along each side is 9.",
        "ans": "<strong>Solution:</strong><br>Place the smaller numbers at the corners to keep side sums low:<br>• <strong>Corners:</strong> 1, 2, 3.<br>• <strong>Between 1 and 2:</strong> place 6 → 1 + 6 + 2 = <strong>9</strong>.<br>• <strong>Between 2 and 3:</strong> place 4 → 2 + 4 + 3 = <strong>9</strong>.<br>• <strong>Between 3 and 1:</strong> place 5 → 3 + 5 + 1 = <strong>9</strong>.<br>All three sides sum to exactly 9.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct corner placement (1, 2, 3)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct edge placements (6, 4, 5) ensuring sum = 9",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Multi-Digit Addition • Regrouping Drill",
        "q": "Solve the following additions showing carrying over clearly:<br>(a) 247 + 185<br>(b) 368 + 279<br>(c) Estimate the sum of 247 + 185 to the nearest hundred.",
        "ans": "<strong>Step-by-Step Solutions:</strong><br><strong>(a) 247 + 185:</strong><br>• Ones: 7 + 5 = 12 (Write 2, carry 1 to tens)<br>• Tens: 1 (carry) + 4 + 8 = 13 (Write 3, carry 1 to hundreds)<br>• Hundreds: 1 (carry) + 2 + 1 = 4<br>• Sum = <strong>432</strong>.<br><br><strong>(b) 368 + 279:</strong><br>• Ones: 8 + 9 = 17 (Write 7, carry 1)<br>• Tens: 1 + 6 + 7 = 14 (Write 4, carry 1)<br>• Hundreds: 1 + 3 + 2 = 6<br>• Sum = <strong>647</strong>.<br><br><strong>(c) Nearest Hundred Estimation:</strong><br>• 247 rounds to 200; 185 rounds to 200.<br>• Estimated sum = 200 + 200 = <strong>400</strong> (Actual 432 is very close to 400).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct carrying and sum for (a): 432",
            "marks": "1.0 M"
          },
          {
            "key": "Correct carrying and sum for (b): 647",
            "marks": "1.0 M"
          },
          {
            "key": "Correct estimation explanation (400)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Multi-Digit Subtraction • Borrowing Across Tens",
        "q": "Solve the following subtractions showing borrowing steps:<br>(a) 512 - 278<br>(b) Check your subtraction answer using addition.",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) 512 - 278:</strong><br>• Ones: 2 - 8 cannot be done. Borrow 1 ten from 1 ten (leaving 0 tens). Ones become 12. 12 - 8 = <strong>4</strong>.<br>• Tens: 0 - 7 cannot be done. Borrow 1 hundred from 5 hundreds (leaving 4 hundreds). Tens become 10. 10 - 7 = <strong>3</strong>.<br>• Hundreds: 4 - 2 = <strong>2</strong>.<br>• Difference = <strong>234</strong>.<br><br><strong>(b) Verification using Addition:</strong><br>• Difference + Subtrahend = Minuend<br>• 234 + 278 = (200 + 200) + (30 + 70) + (4 + 8) = 400 + 100 + 12 = <strong>512</strong>.<br>• Since 512 matches the starting number, the answer is <strong>Verified Correct</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct borrowing and difference (234)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct addition check formula and execution (234 + 278 = 512)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Two-Step Word Problem • Bakery Sales",
        "q": "A baker baked 350 buns in the morning. He sold 215 buns by lunchtime. In the afternoon, he baked 120 fresh buns.<br>(a) How many buns were left after the lunchtime sales?<br>(b) How many buns did he have in total in the afternoon?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Buns Left after Lunch:</strong><br>• Morning buns baked = 350<br>• Buns sold = 215<br>• Leftover = 350 - 215 = <strong>135 buns</strong>.<br><br><strong>(b) Total Buns in Afternoon:</strong><br>• Leftover buns = 135<br>• Fresh buns baked = 120<br>• Total = 135 + 120 = <strong>255 buns</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct subtraction step (350 - 215 = 135)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct addition step (135 + 120 = 255)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Token Card Method • Visual Mental Math",
        "q": "Represent the subtraction 65 - 38 using square cards of 10 and triangle cards of 1.<br>(a) How many 10-cards and 1-cards are in 65?<br>(b) Explain how exchanging one 10-card for ten 1-cards allows you to subtract 38.",
        "ans": "<strong>Visual Token Method:</strong><br><strong>(a) Cards for 65:</strong><br>• 65 = <strong>six 10-cards</strong> and <strong>five 1-cards</strong>.<br><br><strong>(b) Exchange and Subtraction:</strong><br>• To subtract 38, we need to take away 3 ten-cards and 8 one-cards.<br>• We only have 5 one-cards, so we <strong>exchange one 10-card for ten 1-cards</strong>.<br>• Now we have: 5 ten-cards and 15 one-cards (10 + 5).<br>• Subtract 8 one-cards from 15 one-cards $\\rightarrow$ <strong>7 one-cards left</strong>.<br>• Subtract 3 ten-cards from 5 ten-cards $\\rightarrow$ <strong>2 ten-cards left</strong>.<br>• Remaining cards = two 10-cards + seven 1-cards = <strong>27</strong>.<br>• Therefore, 65 - 38 = <strong>27</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct card representation for 65 (6 tens, 5 ones)",
            "marks": "1.0 M"
          },
          {
            "key": "Clear visual explanation of exchanging 1 ten for 10 ones",
            "marks": "1.0 M"
          },
          {
            "key": "Correct final result (27)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Practical Problem Solving",
        "q": "In Chapter 12 ('Give and Take'), a student solves an exercise problem: If 1 packet contains 12 items, how many items are in 4 such packets? Explain using repeated addition and multiplication.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Repeated addition: 12 + 12 + 12 + 12 = <strong>48 items</strong>.<br>2. Multiplication fact: 4 × 12 = <strong>48 items</strong>.<br>3. Both methods yield the exact same answer. Multiplication is efficient repeated addition.",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeated addition 12+12+12+12 = 48",
            "marks": "1 M"
          },
          {
            "key": "Multiplication 4 × 12 = 48",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Concept Exploration",
        "q": "In 'Give and Take', how do you verify your mathematical calculations? Give an example using two numbers that add up to 100.",
        "ans": "<strong>Verification Method:</strong><br>• Take two numbers: 65 and 35. Sum = 65 + 35 = 100.<br>• Verification by inverse operation (subtraction): 100 - 35 = 65, and 100 - 65 = 35.<br>• Since subtraction brings back the original numbers, the addition is confirmed correct.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 65 + 35 = 100",
            "marks": "1 M"
          },
          {
            "key": "Inverse check 100 - 35 = 65",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practice Time • Mental Math Drills",
        "q": "Solve mentally:<br>(a) 25 + 75 = ?<br>(b) 150 - 60 = ?<br>(c) Double of 45 = ?<br>(d) Half of 80 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 25 + 75 = <strong>100</strong>.<br>• (b) 150 - 60 = <strong>90</strong>.<br>• (c) 45 × 2 = <strong>90</strong>.<br>• (d) 80 ÷ 2 = <strong>40</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental math facts correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application",
        "q": "A school library received 3 boxes of mathematics activity books. Each box contained 25 books. During the week, 38 books were distributed to Grade 3 children. How many books remain in the library?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total books received = 3 × 25 = <strong>75 books</strong>.<br>2. Books distributed = 38 books.<br>3. Books remaining = 75 - 38 = <strong>37 books</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total 3 × 25 = 75",
            "marks": "1.5 M"
          },
          {
            "key": "Remainder 75 - 38 = 37",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Critical Thinking • Finding the Pattern",
        "q": "Observe the sequence related to 'Give and Take': 12, 24, 36, 48, ___, ___. Find the next two terms and state the mathematical rule.",
        "ans": "<strong>Pattern Analysis:</strong><br>• 12 + 12 = 24<br>• 24 + 12 = 36<br>• 36 + 12 = 48<br>• Rule: Successive addition of 12 (Multiples of 12).<br>• Next terms: 48 + 12 = <strong>60</strong>, 60 + 12 = <strong>72</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 60, 72",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiples of 12 / +12 step",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Estimation & Measurement • Practical Judgment",
        "q": "Estimate whether each measurement is greater than or less than 1 metre:<br>(a) Length of your classroom pencil.<br>(b) Height of your classroom teacher.<br>(c) Width of your mathematics textbook.<br>(d) Length of the school blackboard.",
        "ans": "<strong>Estimation:</strong><br>• (a) Pencil: <strong>Less than 1 metre</strong> (approx. 15 cm).<br>• (b) Teacher height: <strong>Greater than 1 metre</strong> (approx. 1.6 to 1.7 m).<br>• (c) Textbook width: <strong>Less than 1 metre</strong> (approx. 20 cm).<br>• (d) Blackboard length: <strong>Greater than 1 metre</strong> (approx. 2 to 3 m).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct estimation for all 4 items",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Interpretation • Reading Simple Tables",
        "q": "A table shows student preferences for fruit: Apple (15), Banana (22), Mango (35), Orange (18).<br>(a) Which fruit is preferred by the maximum number of students?<br>(b) How many more students prefer Mango over Banana?<br>(c) What is the total number of students surveyed?",
        "ans": "<strong>Table Interpretation:</strong><br>• (a) Maximum preference: <strong>Mango</strong> with 35 students.<br>• (b) Difference: 35 - 22 = <strong>13 more students</strong> prefer Mango.<br>• (c) Total students: 15 + 22 + 35 + 18 = <strong>90 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mango identified",
            "marks": "1 M"
          },
          {
            "key": "Difference = 13",
            "marks": "1 M"
          },
          {
            "key": "Total = 90",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Do • Shapes and Symmetry",
        "q": "Draw a line of symmetry through each shape:<br>(a) A rectangle<br>(b) An equilateral triangle<br>(c) A circle.<br>How many lines of symmetry does a circle have?",
        "ans": "<strong>Symmetry Properties:</strong><br>• (a) A rectangle has <strong>2 lines of symmetry</strong> (horizontal and vertical through centers of opposite sides).<br>• (b) An equilateral triangle has <strong>3 lines of symmetry</strong> (from each vertex to opposite midpoint).<br>• (c) A circle has <strong>infinite lines of symmetry</strong> (any diameter passing through the center).",
        "marks": 3,
        "rubric": [
          {
            "key": "Rectangle = 2 lines",
            "marks": "1 M"
          },
          {
            "key": "Triangle = 3 lines",
            "marks": "1 M"
          },
          {
            "key": "Circle = infinite lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Puzzle Time • Missing Number Grid",
        "q": "In a 3x3 magic square, the sum of each row, column, and diagonal is 15. The center number is 5. What numbers go in the opposite corners if one corner is 2?",
        "ans": "<strong>Magic Square Logic:</strong><br>• In a 3x3 magic square with sum 15 and center 5, opposite corners must sum to 10 (since 2 + 5 + x = 15 → x = 8).<br>• If one corner is 2, the diagonally opposite corner must be <strong>8</strong>.<br>• Other corner pairs: 4 and 6.",
        "marks": 2,
        "rubric": [
          {
            "key": "Opposite corner = 8 with reasoning",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Money & Shopping • Cash Memo Bill",
        "q": "Rani visits a stationery shop and buys: 2 Pencils at ₹5 each, 1 Eraser for ₹3, and 1 Notebook for ₹25. Prepare a simple cash memo showing total bill and change returned from a ₹50 note.",
        "ans": "<strong>Cash Memo Preparation:</strong><br>• 2 Pencils @ ₹5 = ₹10<br>• 1 Eraser @ ₹3 = ₹3<br>• 1 Notebook @ ₹25 = ₹25<br>• <strong>Total Bill Amount</strong> = ₹10 + ₹3 + ₹25 = <strong>₹38</strong>.<br>• Amount paid = ₹50.<br>• <strong>Change returned</strong> = ₹50 - ₹38 = <strong>₹12</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct item breakdown and total ₹38",
            "marks": "2 M"
          },
          {
            "key": "Change = ₹12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Review • Comprehensive Concept Check",
        "q": "True or False:<br>(a) 1 kilometre is equal to 1000 metres.<br>(b) 500 millilitres is equal to half a litre.<br>(c) A square has 4 equal straight edges and 4 right-angled corners.",
        "ans": "<strong>Review Answers:</strong><br>• (a) <strong>True:</strong> 1 km = 1000 m.<br>• (b) <strong>True:</strong> 1 Litre = 1000 mL, so half a litre = 500 mL.<br>• (c) <strong>True:</strong> A square has 4 equal sides and 4 right angles.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 statements correctly evaluated as True",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Children's Book Fair Stall",
      "text": "At the school book fair, the storybook counter started with 450 books in the morning. They received a fresh delivery of 120 books at noon, and sold 380 books by evening.",
      "question": "How many books were left at the storybook counter at the end of the day?",
      "answer": "1. Books after morning delivery = 450 + 120 = 570 books.<br>2. Books sold = 380.<br>3. <strong>Books left at end of day</strong> = 570 - 380 = <strong>190 books</strong>.",
      "rubric": "1.5M addition of delivered books + 1.5M subtraction of sold books."
    }
  },
  {
    "id": "mm13",
    "num": 13,
    "unit": "Unit 4: Multiplication, Measurement & Data",
    "title": "Time Goes On",
    "subtitle": "Clocks, Reading Time (Hours & Minutes), AM/PM & Daily Activity Schedules",
    "concepts": [
      "Understanding clock hands: hour hand (short) and minute hand (long).",
      "Reading time to the hour, half past (30 min), quarter past (15 min), and quarter to (45 min).",
      "Difference between AM (midnight to noon) and PM (noon to midnight).",
      "Calculating elapsed time between start and end of daily activities."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f8fafc\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">Analog Clock — Quarter Past, Half Past &amp; Quarter To</text>\n      <!-- Clock 1: Half Past 4 (4:30) -->\n      <circle cx=\"120\" cy=\"85\" r=\"35\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <circle cx=\"120\" cy=\"85\" r=\"3\" fill=\"#0f172a\"/>\n      <line x1=\"120\" y1=\"85\" x2=\"135\" y2=\"95\" stroke=\"#dc2626\" stroke-width=\"2.5\"/><!-- Hour hand -->\n      <line x1=\"120\" y1=\"85\" x2=\"120\" y2=\"115\" stroke=\"#2563eb\" stroke-width=\"2\"/><!-- Minute hand -->\n      <text x=\"120\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">Half Past 4 (04:30)</text>\n      <!-- Clock 2: Quarter Past 7 (7:15) -->\n      <circle cx=\"290\" cy=\"85\" r=\"35\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <circle cx=\"290\" cy=\"85\" r=\"3\" fill=\"#0f172a\"/>\n      <line x1=\"290\" y1=\"85\" x2=\"275\" y2=\"92\" stroke=\"#dc2626\" stroke-width=\"2.5\"/>\n      <line x1=\"290\" y1=\"85\" x2=\"320\" y2=\"85\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n      <text x=\"290\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">Quarter Past 7 (07:15)</text>\n      <!-- Clock 3: Quarter to 10 (9:45) -->\n      <circle cx=\"460\" cy=\"85\" r=\"35\" fill=\"#ffffff\" stroke=\"#334155\" stroke-width=\"2\"/>\n      <circle cx=\"460\" cy=\"85\" r=\"3\" fill=\"#0f172a\"/>\n      <line x1=\"460\" y1=\"85\" x2=\"445\" y2=\"75\" stroke=\"#dc2626\" stroke-width=\"2.5\"/>\n      <line x1=\"460\" y1=\"85\" x2=\"430\" y2=\"85\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n      <text x=\"460\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">Quarter to 10 (09:45)</text>\n    </svg>",
    "questions": [
      {
        "category": "Clock Reading • Quarter & Half Hours",
        "q": "What time is shown when: (a) The hour hand is between 3 and 4, and the minute hand points to 6? (b) The hour hand is just past 8, and the minute hand points to 3? (c) The hour hand is near 12, and the minute hand points to 9?",
        "ans": "<strong>Clock Readings:</strong><br>• <strong>(a)</strong> Minute hand at 6 = 30 minutes. Time = <strong>03:30 (Half past 3)</strong>.<br>• <strong>(b)</strong> Minute hand at 3 = 15 minutes. Time = <strong>08:15 (Quarter past 8)</strong>.<br>• <strong>(c)</strong> Minute hand at 9 = 45 minutes (15 minutes to 12). Time = <strong>11:45 (Quarter to 12)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct reading for half past 3",
            "marks": "1.0 M"
          },
          {
            "key": "Correct reading for quarter past 8",
            "marks": "1.0 M"
          },
          {
            "key": "Correct reading for quarter to 12",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Elapsed Time Calculation • Daily Routines",
        "q": "Meera started doing her math homework at 05:15 PM and finished at 06:05 PM. How many minutes did she spend on her homework?",
        "ans": "<strong>Calculation:</strong><br>• Start time = 05:15 PM<br>• End time = 06:05 PM<br>1. From 05:15 PM to 06:00 PM = 60 - 15 = 45 minutes.<br>2. From 06:00 PM to 06:05 PM = 5 minutes.<br>• <strong>Total duration</strong> = 45 + 5 = <strong>50 minutes</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct breakdown to the nearest hour",
            "marks": "1.0 M"
          },
          {
            "key": "Correct total elapsed time (50 minutes)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "AM vs PM • Classification",
        "q": "Write AM or PM for each activity: (a) Eating breakfast at 7:30 ___, (b) Playing in the park at 5:00 ___, (c) Sleeping at midnight 12:00 ___, (d) Lunch recess at school at 12:45 ___.",
        "ans": "<strong>Answers:</strong><br>• (a) Breakfast at 7:30 <strong>AM</strong> (morning)<br>• (b) Playing in park at 5:00 <strong>PM</strong> (evening)<br>• (c) Sleeping at midnight 12:00 <strong>AM</strong> (start of day)<br>• (d) Lunch recess at 12:45 <strong>PM</strong> (afternoon).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct AM/PM classification for all 4 events",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Analog Clock Face • Time Reading",
        "q": "Look at an analog clock face:<br>(a) Where does the hour hand and minute hand point at 4:15 (quarter past 4)?<br>(b) Where do they point at 7:30 (half past 7)?<br>(c) Where do they point at 9:45 (quarter to 10)?",
        "ans": "<strong>Analog Clock Positions:</strong><br>• <strong>(a) 4:15:</strong> The minute hand points directly at <strong>3</strong>. The hour hand is slightly past <strong>4</strong>.<br>• <strong>(b) 7:30:</strong> The minute hand points directly at <strong>6</strong>. The hour hand is halfway between <strong>7 and 8</strong>.<br>• <strong>(c) 9:45:</strong> The minute hand points directly at <strong>9</strong>. The hour hand is close to <strong>10</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct minute and hour hand positions for 4:15",
            "marks": "1.0 M"
          },
          {
            "key": "Correct minute and hour hand positions for 7:30",
            "marks": "1.0 M"
          },
          {
            "key": "Correct minute and hour hand positions for 9:45",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Calendar Reading • Days and Months",
        "q": "Answer the following calendar questions:<br>(a) How many months in a year have exactly 31 days? Name any three.<br>(b) How many days does February have in a leap year and in an ordinary year?<br>(c) If 5th September is a Tuesday, what day of the week is 12th September?",
        "ans": "<strong>Calendar Facts:</strong><br>• <strong>(a) 31-Day Months:</strong> There are <strong>7 months</strong> with 31 days (January, March, May, July, August, October, December).<br>• <strong>(b) February:</strong> February has <strong>29 days in a leap year</strong> and <strong>28 days in an ordinary year</strong>.<br>• <strong>(c) Day Calculation:</strong><br>  - Since there are 7 days in a week, adding 7 days gives the same day of the week.<br>  - 5 + 7 = 12th September is also a <strong>Tuesday</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct count (7) and names of 31-day months",
            "marks": "1.0 M"
          },
          {
            "key": "Correct February days (29 leap, 28 ordinary)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct day of the week deduction (Tuesday)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Duration of Daily Routines • Elapsed Time",
        "q": "Aman's daily schedule is as follows:<br>• Leaves for school: 7:30 AM<br>• Returns from school: 2:00 PM<br>(a) How many hours does Aman spend away at school?<br>(b) He plays football from 5:15 PM to 6:30 PM. What is the duration of his playtime?",
        "ans": "<strong>Step-by-Step Elapsed Time:</strong><br><strong>(a) Time at School:</strong><br>• From 7:30 AM to 12:00 noon = 4 hours 30 minutes.<br>• From 12:00 noon to 2:00 PM = 2 hours.<br>• Total school time = 4 hr 30 min + 2 hr = <strong>6 hours 30 minutes</strong>.<br><br><strong>(b) Playtime Duration:</strong><br>• From 5:15 PM to 6:15 PM = 1 hour (60 minutes).<br>• From 6:15 PM to 6:30 PM = 15 minutes.<br>• Total playtime = <strong>1 hour 15 minutes</strong> (or 75 minutes).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct school duration (6 hours 30 minutes)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct playtime duration (1 hour 15 minutes)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Age Timeline • Date of Birth Analysis",
        "q": "Kavya was born on 15th August 2018.<br>(a) How old was she on 15th August 2024?<br>(b) How old will she be on 15th August 2030?<br>(c) In which year did she celebrate her 5th birthday?",
        "ans": "<strong>Step-by-Step Timeline:</strong><br><strong>(a) Age in 2024:</strong><br>• 2024 - 2018 = <strong>6 years old</strong>.<br><br><strong>(b) Age in 2030:</strong><br>• 2030 - 2018 = <strong>12 years old</strong>.<br><br><strong>(c) 5th Birthday Year:</strong><br>• 2018 + 5 = <strong>Year 2023</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct age in 2024 (6 years)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct age in 2030 (12 years)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct 5th birthday year (2023)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Practical Problem Solving",
        "q": "In Chapter 13 ('Time Goes On'), a student solves an exercise problem: If 1 packet contains 12 items, how many items are in 4 such packets? Explain using repeated addition and multiplication.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Repeated addition: 12 + 12 + 12 + 12 = <strong>48 items</strong>.<br>2. Multiplication fact: 4 × 12 = <strong>48 items</strong>.<br>3. Both methods yield the exact same answer. Multiplication is efficient repeated addition.",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeated addition 12+12+12+12 = 48",
            "marks": "1 M"
          },
          {
            "key": "Multiplication 4 × 12 = 48",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Concept Exploration",
        "q": "In 'Time Goes On', how do you verify your mathematical calculations? Give an example using two numbers that add up to 100.",
        "ans": "<strong>Verification Method:</strong><br>• Take two numbers: 65 and 35. Sum = 65 + 35 = 100.<br>• Verification by inverse operation (subtraction): 100 - 35 = 65, and 100 - 65 = 35.<br>• Since subtraction brings back the original numbers, the addition is confirmed correct.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 65 + 35 = 100",
            "marks": "1 M"
          },
          {
            "key": "Inverse check 100 - 35 = 65",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practice Time • Mental Math Drills",
        "q": "Solve mentally:<br>(a) 25 + 75 = ?<br>(b) 150 - 60 = ?<br>(c) Double of 45 = ?<br>(d) Half of 80 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 25 + 75 = <strong>100</strong>.<br>• (b) 150 - 60 = <strong>90</strong>.<br>• (c) 45 × 2 = <strong>90</strong>.<br>• (d) 80 ÷ 2 = <strong>40</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental math facts correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application",
        "q": "A school library received 3 boxes of mathematics activity books. Each box contained 25 books. During the week, 38 books were distributed to Grade 3 children. How many books remain in the library?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total books received = 3 × 25 = <strong>75 books</strong>.<br>2. Books distributed = 38 books.<br>3. Books remaining = 75 - 38 = <strong>37 books</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total 3 × 25 = 75",
            "marks": "1.5 M"
          },
          {
            "key": "Remainder 75 - 38 = 37",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Critical Thinking • Finding the Pattern",
        "q": "Observe the sequence related to 'Time Goes On': 12, 24, 36, 48, ___, ___. Find the next two terms and state the mathematical rule.",
        "ans": "<strong>Pattern Analysis:</strong><br>• 12 + 12 = 24<br>• 24 + 12 = 36<br>• 36 + 12 = 48<br>• Rule: Successive addition of 12 (Multiples of 12).<br>• Next terms: 48 + 12 = <strong>60</strong>, 60 + 12 = <strong>72</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 60, 72",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiples of 12 / +12 step",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Estimation & Measurement • Practical Judgment",
        "q": "Estimate whether each measurement is greater than or less than 1 metre:<br>(a) Length of your classroom pencil.<br>(b) Height of your classroom teacher.<br>(c) Width of your mathematics textbook.<br>(d) Length of the school blackboard.",
        "ans": "<strong>Estimation:</strong><br>• (a) Pencil: <strong>Less than 1 metre</strong> (approx. 15 cm).<br>• (b) Teacher height: <strong>Greater than 1 metre</strong> (approx. 1.6 to 1.7 m).<br>• (c) Textbook width: <strong>Less than 1 metre</strong> (approx. 20 cm).<br>• (d) Blackboard length: <strong>Greater than 1 metre</strong> (approx. 2 to 3 m).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct estimation for all 4 items",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Interpretation • Reading Simple Tables",
        "q": "A table shows student preferences for fruit: Apple (15), Banana (22), Mango (35), Orange (18).<br>(a) Which fruit is preferred by the maximum number of students?<br>(b) How many more students prefer Mango over Banana?<br>(c) What is the total number of students surveyed?",
        "ans": "<strong>Table Interpretation:</strong><br>• (a) Maximum preference: <strong>Mango</strong> with 35 students.<br>• (b) Difference: 35 - 22 = <strong>13 more students</strong> prefer Mango.<br>• (c) Total students: 15 + 22 + 35 + 18 = <strong>90 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mango identified",
            "marks": "1 M"
          },
          {
            "key": "Difference = 13",
            "marks": "1 M"
          },
          {
            "key": "Total = 90",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Do • Shapes and Symmetry",
        "q": "Draw a line of symmetry through each shape:<br>(a) A rectangle<br>(b) An equilateral triangle<br>(c) A circle.<br>How many lines of symmetry does a circle have?",
        "ans": "<strong>Symmetry Properties:</strong><br>• (a) A rectangle has <strong>2 lines of symmetry</strong> (horizontal and vertical through centers of opposite sides).<br>• (b) An equilateral triangle has <strong>3 lines of symmetry</strong> (from each vertex to opposite midpoint).<br>• (c) A circle has <strong>infinite lines of symmetry</strong> (any diameter passing through the center).",
        "marks": 3,
        "rubric": [
          {
            "key": "Rectangle = 2 lines",
            "marks": "1 M"
          },
          {
            "key": "Triangle = 3 lines",
            "marks": "1 M"
          },
          {
            "key": "Circle = infinite lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Puzzle Time • Missing Number Grid",
        "q": "In a 3x3 magic square, the sum of each row, column, and diagonal is 15. The center number is 5. What numbers go in the opposite corners if one corner is 2?",
        "ans": "<strong>Magic Square Logic:</strong><br>• In a 3x3 magic square with sum 15 and center 5, opposite corners must sum to 10 (since 2 + 5 + x = 15 → x = 8).<br>• If one corner is 2, the diagonally opposite corner must be <strong>8</strong>.<br>• Other corner pairs: 4 and 6.",
        "marks": 2,
        "rubric": [
          {
            "key": "Opposite corner = 8 with reasoning",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Money & Shopping • Cash Memo Bill",
        "q": "Rani visits a stationery shop and buys: 2 Pencils at ₹5 each, 1 Eraser for ₹3, and 1 Notebook for ₹25. Prepare a simple cash memo showing total bill and change returned from a ₹50 note.",
        "ans": "<strong>Cash Memo Preparation:</strong><br>• 2 Pencils @ ₹5 = ₹10<br>• 1 Eraser @ ₹3 = ₹3<br>• 1 Notebook @ ₹25 = ₹25<br>• <strong>Total Bill Amount</strong> = ₹10 + ₹3 + ₹25 = <strong>₹38</strong>.<br>• Amount paid = ₹50.<br>• <strong>Change returned</strong> = ₹50 - ₹38 = <strong>₹12</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct item breakdown and total ₹38",
            "marks": "2 M"
          },
          {
            "key": "Change = ₹12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Review • Comprehensive Concept Check",
        "q": "True or False:<br>(a) 1 kilometre is equal to 1000 metres.<br>(b) 500 millilitres is equal to half a litre.<br>(c) A square has 4 equal straight edges and 4 right-angled corners.",
        "ans": "<strong>Review Answers:</strong><br>• (a) <strong>True:</strong> 1 km = 1000 m.<br>• (b) <strong>True:</strong> 1 Litre = 1000 mL, so half a litre = 500 mL.<br>• (c) <strong>True:</strong> A square has 4 equal sides and 4 right angles.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 statements correctly evaluated as True",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "School Annual Sports Day Schedule",
      "text": "The 100m sprint race began at 10:20 AM and took 25 minutes. There was a 15-minute prize ceremony immediately following.",
      "question": "At what time did the prize ceremony conclude? How many total minutes elapsed from the race start to the end of the ceremony?",
      "answer": "1. Race start = 10:20 AM.<br>2. Race finish = 10:20 AM + 25 min = 10:45 AM.<br>3. Ceremony finish = 10:45 AM + 15 min = <strong>11:00 AM</strong>.<br>4. <strong>Total elapsed time</strong> = 25 + 15 = <strong>40 minutes</strong>.",
      "rubric": "1.5M chronological addition of times + 1.5M total duration calculation."
    }
  },
  {
    "id": "mm14",
    "num": 14,
    "unit": "Unit 4: Multiplication, Measurement & Data",
    "title": "The Surajkund Fair",
    "subtitle": "Pictographs, Bar Data, Money Transactions & Comprehensive Revision",
    "concepts": [
      "Representing data using pictographs with a scale (e.g., 1 icon = 5 items).",
      "Reading and interpreting frequency bar graphs from a community craft fair.",
      "Calculating shopping totals and change with Indian currency notes and coins.",
      "Multi-concept review: combining addition, multiplication, and data skills."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fff7ed\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Surajkund Craft Fair — Stalls Visited Pictograph</text>\n      <!-- Scale note -->\n      <rect x=\"420\" y=\"8\" width=\"140\" height=\"25\" rx=\"4\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"1\"/>\n      <text x=\"490\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#c2410c\" text-anchor=\"middle\">Scale: 🏺 = 5 Pots</text>\n      <!-- Row 1: Clay Pots -->\n      <text x=\"50\" y=\"55\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\">Clay Pots:</text>\n      <text x=\"140\" y=\"55\" font-size=\"16\">🏺 🏺 🏺 🏺</text>\n      <text x=\"250\" y=\"55\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#9a3412\">4 × 5 = 20 Pots</text>\n      <!-- Row 2: Wooden Toys -->\n      <text x=\"50\" y=\"85\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\">Wooden Toys:</text>\n      <text x=\"140\" y=\"85\" font-size=\"16\">🏺 🏺 🏺 🏺 🏺 🏺</text>\n      <text x=\"290\" y=\"85\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#9a3412\">6 × 5 = 30 Toys</text>\n      <!-- Row 3: Handloom Bags -->\n      <text x=\"50\" y=\"115\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#334155\">Handloom Bags:</text>\n      <text x=\"140\" y=\"115\" font-size=\"16\">🏺 🏺 🏺</text>\n      <text x=\"220\" y=\"115\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#9a3412\">3 × 5 = 15 Bags</text>\n      <text x=\"290\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#c2410c\" text-anchor=\"middle\">Total items sold = 20 + 30 + 15 = 65 Craft Items</text>\n    </svg>",
    "questions": [
      {
        "category": "Pictograph Interpretation • Scaled Data",
        "q": "Look at the pictograph above where 1 symbol represents 5 craft items. (a) How many wooden toys were sold? (b) How many more wooden toys were sold than handloom bags? (c) What was the total number of items sold across all three stalls?",
        "ans": "<strong>Analysis using Scale (1 symbol = 5 items):</strong><br>• <strong>(a) Wooden toys:</strong> 6 symbols × 5 = <strong>30 wooden toys</strong>.<br>• <strong>(b) Handloom bags:</strong> 3 symbols × 5 = 15 bags.<br>Difference = 30 - 15 = <strong>15 more wooden toys</strong>.<br>• <strong>(c) Total craft items:</strong> (4 + 6 + 3) symbols = 13 symbols × 5 = <strong>65 items</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct wooden toy count (30)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct difference calculation (15)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct total items calculation (65)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Shopping Bill & Money Exchange",
        "q": "At the fair, Priya bought 2 wooden whistles at ₹25 each, 1 embroidered purse for ₹120, and 3 handmade bookmarks at ₹15 each. (a) What was her total bill? (b) If she paid with a ₹500 note, how much change did she receive?",
        "ans": "<strong>Step-by-step Solution:</strong><br><strong>(a) Bill Calculation:</strong><br>• 2 whistles = 2 × ₹25 = ₹50<br>• 1 purse = ₹120<br>• 3 bookmarks = 3 × ₹15 = ₹45<br>• Total bill = ₹50 + ₹120 + ₹45 = <strong>₹215</strong>.<br><br><strong>(b) Change:</strong><br>• Amount given = ₹500<br>• Change received = ₹500 - ₹215 = <strong>₹285</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct itemised multiplication and sum (₹215)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct subtraction from ₹500 note (₹285)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Bar Graph Reading • Ticket Sales",
        "q": "On Saturday, 350 tickets were sold for the puppet show and 425 tickets for the magic show. On Sunday, 480 tickets were sold for the puppet show and 390 for the magic show. Which show had higher total weekend sales and by how many tickets?",
        "ans": "<strong>Calculations:</strong><br>1. <strong>Puppet Show Total:</strong> 350 (Sat) + 480 (Sun) = <strong>830 tickets</strong>.<br>2. <strong>Magic Show Total:</strong> 425 (Sat) + 390 (Sun) = <strong>815 tickets</strong>.<br>3. <strong>Comparison:</strong> 830 > 815. The <strong>Puppet Show</strong> had higher sales.<br>4. <strong>Difference:</strong> 830 - 815 = <strong>15 tickets</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct weekend totals for puppet (830) and magic (815)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct comparison and difference (15 tickets)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Craft Stall Purchases • Multiplication & Addition",
        "q": "At the Surajkund Fair, Maya visited the wooden toy stall. She bought:<br>• 4 wooden birds at ₹30 each<br>• 2 wooden tops at ₹20 each<br>• 1 wooden flute for ₹45<br>(a) Calculate the cost of each item and the total bill.<br>(b) If Maya pays with a ₹500 note, how much change will she get?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Bill Calculation:</strong><br>• 4 wooden birds = 4 × ₹30 = ₹120.<br>• 2 wooden tops = 2 × ₹20 = ₹40.<br>• 1 wooden flute = ₹45.<br>• Total Bill = ₹120 + ₹40 + ₹45 = <strong>₹205</strong>.<br><br><strong>(b) Change Received:</strong><br>• Amount paid = ₹500.<br>• Change = ₹500 - ₹205 = <strong>₹295</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct itemised totals and total bill (₹205)",
            "marks": "2.0 M"
          },
          {
            "key": "Correct subtraction for change (₹295)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Fair Rides • Family Ticket Pricing",
        "q": "Ticket prices for rides at the Surajkund Fair:<br>• Giant Wheel: ₹40 per person<br>• Toy Train: ₹25 per person<br>• Bumper Cars: ₹50 per person<br>A family of 2 parents and 2 children want to go on the Giant Wheel and Toy Train.<br>(a) What is the total cost for the family on the Giant Wheel?<br>(b) What is the total cost for the family on the Toy Train?<br>(c) What is the grand total for all rides?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total family members = 2 adults + 2 children = 4 persons.<br><strong>(a) Giant Wheel Cost:</strong><br>• 4 persons × ₹40 = <strong>₹160</strong>.<br><br><strong>(b) Toy Train Cost:</strong><br>• 4 persons × ₹25 = <strong>₹100</strong>.<br><br><strong>(c) Grand Total:</strong><br>• Total rides cost = ₹160 + ₹100 = <strong>₹260</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct Giant Wheel total (₹160)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct Toy Train total (₹100)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct grand total (₹260)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Pictograph Reading • Visitor Attendance",
        "q": "The fair authorities recorded visitor counts using a pictograph where 🎟️ = 100 visitors:<br>• Friday: 🎟️🎟️🎟️🎟️ (4 tickets)<br>• Saturday: 🎟️🎟️🎟️🎟️🎟️🎟️ (6 tickets)<br>• Sunday: 🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️ (8 tickets)<br>(a) How many visitors attended on Friday, Saturday, and Sunday respectively?<br>(b) What was the total number of visitors over the weekend (Saturday + Sunday)?<br>(c) How many more visitors attended on Sunday than on Friday?",
        "ans": "<strong>Step-by-Step Pictograph Analysis:</strong><br>• Scale: 1 🎟️ = 100 visitors.<br><strong>(a) Daily Visitors:</strong><br>• Friday: 4 × 100 = <strong>400 visitors</strong>.<br>• Saturday: 6 × 100 = <strong>600 visitors</strong>.<br>• Sunday: 8 × 100 = <strong>800 visitors</strong>.<br><br><strong>(b) Weekend Total:</strong><br>• Saturday + Sunday = 600 + 800 = <strong>1400 visitors</strong>.<br><br><strong>(c) Difference (Sunday vs Friday):</strong><br>• 800 - 400 = <strong>400 more visitors</strong> on Sunday.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct conversion for all three days (400, 600, 800)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct weekend total (1400) and difference (400)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Court Bill • Addition and Discount",
        "q": "At the fair's food street, Kabir's group ordered:<br>• 3 plates of Pav Bhaji at ₹60 per plate<br>• 4 glasses of Lassi at ₹30 per glass<br>• 2 plates of Jalebi at ₹40 per plate<br>(a) What was the total food bill?<br>(b) If the stall owner offered a festival discount of ₹40, how much did Kabir actually pay?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Total Bill:</strong><br>• Pav Bhaji: 3 × ₹60 = ₹180.<br>• Lassi: 4 × ₹30 = ₹120.<br>• Jalebi: 2 × ₹40 = ₹80.<br>• Total bill = ₹180 + ₹120 + ₹80 = <strong>₹380</strong>.<br><br><strong>(b) Discounted Payment:</strong><br>• Discount = ₹40.<br>• Amount paid = ₹380 - ₹40 = <strong>₹340</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct sub-totals and bill before discount (₹380)",
            "marks": "2.0 M"
          },
          {
            "key": "Correct subtraction of discount (₹340)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Practical Problem Solving",
        "q": "In Chapter 14 ('The Surajkund Fair'), a student solves an exercise problem: If 1 packet contains 12 items, how many items are in 4 such packets? Explain using repeated addition and multiplication.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Repeated addition: 12 + 12 + 12 + 12 = <strong>48 items</strong>.<br>2. Multiplication fact: 4 × 12 = <strong>48 items</strong>.<br>3. Both methods yield the exact same answer. Multiplication is efficient repeated addition.",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeated addition 12+12+12+12 = 48",
            "marks": "1 M"
          },
          {
            "key": "Multiplication 4 × 12 = 48",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Concept Exploration",
        "q": "In 'The Surajkund Fair', how do you verify your mathematical calculations? Give an example using two numbers that add up to 100.",
        "ans": "<strong>Verification Method:</strong><br>• Take two numbers: 65 and 35. Sum = 65 + 35 = 100.<br>• Verification by inverse operation (subtraction): 100 - 35 = 65, and 100 - 65 = 35.<br>• Since subtraction brings back the original numbers, the addition is confirmed correct.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 65 + 35 = 100",
            "marks": "1 M"
          },
          {
            "key": "Inverse check 100 - 35 = 65",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practice Time • Mental Math Drills",
        "q": "Solve mentally:<br>(a) 25 + 75 = ?<br>(b) 150 - 60 = ?<br>(c) Double of 45 = ?<br>(d) Half of 80 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 25 + 75 = <strong>100</strong>.<br>• (b) 150 - 60 = <strong>90</strong>.<br>• (c) 45 × 2 = <strong>90</strong>.<br>• (d) 80 ÷ 2 = <strong>40</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental math facts correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Real Life Application",
        "q": "A school library received 3 boxes of mathematics activity books. Each box contained 25 books. During the week, 38 books were distributed to Grade 3 children. How many books remain in the library?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total books received = 3 × 25 = <strong>75 books</strong>.<br>2. Books distributed = 38 books.<br>3. Books remaining = 75 - 38 = <strong>37 books</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total 3 × 25 = 75",
            "marks": "1.5 M"
          },
          {
            "key": "Remainder 75 - 38 = 37",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Critical Thinking • Finding the Pattern",
        "q": "Observe the sequence related to 'The Surajkund Fair': 12, 24, 36, 48, ___, ___. Find the next two terms and state the mathematical rule.",
        "ans": "<strong>Pattern Analysis:</strong><br>• 12 + 12 = 24<br>• 24 + 12 = 36<br>• 36 + 12 = 48<br>• Rule: Successive addition of 12 (Multiples of 12).<br>• Next terms: 48 + 12 = <strong>60</strong>, 60 + 12 = <strong>72</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 60, 72",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiples of 12 / +12 step",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Estimation & Measurement • Practical Judgment",
        "q": "Estimate whether each measurement is greater than or less than 1 metre:<br>(a) Length of your classroom pencil.<br>(b) Height of your classroom teacher.<br>(c) Width of your mathematics textbook.<br>(d) Length of the school blackboard.",
        "ans": "<strong>Estimation:</strong><br>• (a) Pencil: <strong>Less than 1 metre</strong> (approx. 15 cm).<br>• (b) Teacher height: <strong>Greater than 1 metre</strong> (approx. 1.6 to 1.7 m).<br>• (c) Textbook width: <strong>Less than 1 metre</strong> (approx. 20 cm).<br>• (d) Blackboard length: <strong>Greater than 1 metre</strong> (approx. 2 to 3 m).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct estimation for all 4 items",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Interpretation • Reading Simple Tables",
        "q": "A table shows student preferences for fruit: Apple (15), Banana (22), Mango (35), Orange (18).<br>(a) Which fruit is preferred by the maximum number of students?<br>(b) How many more students prefer Mango over Banana?<br>(c) What is the total number of students surveyed?",
        "ans": "<strong>Table Interpretation:</strong><br>• (a) Maximum preference: <strong>Mango</strong> with 35 students.<br>• (b) Difference: 35 - 22 = <strong>13 more students</strong> prefer Mango.<br>• (c) Total students: 15 + 22 + 35 + 18 = <strong>90 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mango identified",
            "marks": "1 M"
          },
          {
            "key": "Difference = 13",
            "marks": "1 M"
          },
          {
            "key": "Total = 90",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Do • Shapes and Symmetry",
        "q": "Draw a line of symmetry through each shape:<br>(a) A rectangle<br>(b) An equilateral triangle<br>(c) A circle.<br>How many lines of symmetry does a circle have?",
        "ans": "<strong>Symmetry Properties:</strong><br>• (a) A rectangle has <strong>2 lines of symmetry</strong> (horizontal and vertical through centers of opposite sides).<br>• (b) An equilateral triangle has <strong>3 lines of symmetry</strong> (from each vertex to opposite midpoint).<br>• (c) A circle has <strong>infinite lines of symmetry</strong> (any diameter passing through the center).",
        "marks": 3,
        "rubric": [
          {
            "key": "Rectangle = 2 lines",
            "marks": "1 M"
          },
          {
            "key": "Triangle = 3 lines",
            "marks": "1 M"
          },
          {
            "key": "Circle = infinite lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Puzzle Time • Missing Number Grid",
        "q": "In a 3x3 magic square, the sum of each row, column, and diagonal is 15. The center number is 5. What numbers go in the opposite corners if one corner is 2?",
        "ans": "<strong>Magic Square Logic:</strong><br>• In a 3x3 magic square with sum 15 and center 5, opposite corners must sum to 10 (since 2 + 5 + x = 15 → x = 8).<br>• If one corner is 2, the diagonally opposite corner must be <strong>8</strong>.<br>• Other corner pairs: 4 and 6.",
        "marks": 2,
        "rubric": [
          {
            "key": "Opposite corner = 8 with reasoning",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Money & Shopping • Cash Memo Bill",
        "q": "Rani visits a stationery shop and buys: 2 Pencils at ₹5 each, 1 Eraser for ₹3, and 1 Notebook for ₹25. Prepare a simple cash memo showing total bill and change returned from a ₹50 note.",
        "ans": "<strong>Cash Memo Preparation:</strong><br>• 2 Pencils @ ₹5 = ₹10<br>• 1 Eraser @ ₹3 = ₹3<br>• 1 Notebook @ ₹25 = ₹25<br>• <strong>Total Bill Amount</strong> = ₹10 + ₹3 + ₹25 = <strong>₹38</strong>.<br>• Amount paid = ₹50.<br>• <strong>Change returned</strong> = ₹50 - ₹38 = <strong>₹12</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct item breakdown and total ₹38",
            "marks": "2 M"
          },
          {
            "key": "Change = ₹12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Review • Comprehensive Concept Check",
        "q": "True or False:<br>(a) 1 kilometre is equal to 1000 metres.<br>(b) 500 millilitres is equal to half a litre.<br>(c) A square has 4 equal straight edges and 4 right-angled corners.",
        "ans": "<strong>Review Answers:</strong><br>• (a) <strong>True:</strong> 1 km = 1000 m.<br>• (b) <strong>True:</strong> 1 Litre = 1000 mL, so half a litre = 500 mL.<br>• (c) <strong>True:</strong> A square has 4 equal sides and 4 right angles.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 statements correctly evaluated as True",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Handicrafts Stall Revenue Summary",
      "text": "A pottery artisan brought 80 clay diyas to the fair. He sold 55 diyas on Day 1 for ₹10 each. On Day 2, he reduced the price to ₹8 each and sold all remaining diyas.",
      "question": "How many diyas were sold on Day 2? What was the total revenue earned by the artisan from selling all 80 diyas?",
      "answer": "1. Diyas sold on Day 2 = Total - Day 1 = 80 - 55 = <strong>25 diyas</strong>.<br>2. Day 1 revenue = 55 × ₹10 = ₹550.<br>3. Day 2 revenue = 25 × ₹8 = ₹200.<br>4. <strong>Total revenue</strong> = ₹550 + ₹200 = <strong>₹750</strong>.",
      "rubric": "1M Day 2 count + 1M Day 1 & Day 2 revenues + 1M total revenue sum."
    }
  }
];

module.exports = { mathsMelaChapters };
