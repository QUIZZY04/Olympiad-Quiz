// NCERT Class 3 Maths Mela Complete Exercise & In-Text Activities Dataset (Part 1: Ch 1 to 7)
// Comprehensive coverage of all textbook exercises, Practice Time, and in-text activities.

const mathsMelaExpandedPart1 = {
  mm1: [
    // Existing base has 7 questions (3 from base + 4 from extra)
    // Here we add all remaining in-text and exercise questions to reach 22 questions
    {
      category: "In-Text Activity • Name Length Tally",
      q: "Count the number of letters in the names of your family members: Mother, Father, Brother, Sister, Grandmother, Grandfather. Which family member has the longest name and who has the shortest? What is the difference in letters?",
      ans: "<strong>Step-by-Step Solution:</strong><br>1. Example family names:<br>• Mother: M-O-T-H-E-R = 6 letters<br>• Father: F-A-T-H-E-R = 6 letters<br>• Brother: B-R-O-T-H-E-R = 7 letters<br>• Sister: S-I-S-T-E-R = 6 letters<br>• Grandmother: G-R-A-N-D-M-O-T-H-E-R = 11 letters<br>• Grandfather: G-R-A-N-D-F-A-T-H-E-R = 11 letters<br>2. <strong>Longest:</strong> Grandmother and Grandfather (11 letters each).<br>3. <strong>Shortest:</strong> Mother, Father, and Sister (6 letters each).<br>4. <strong>Difference:</strong> 11 - 6 = <strong>5 letters</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct letter counts for all family members", marks: "1.5 M" },
        { key: "Correct longest, shortest, and difference (5 letters)", marks: "1.5 M" }
      ]
    },
    {
      category: "Let's Think • Letter Starting Sounds",
      q: "From the given list of names: [Aarav, Ananya, Bhuvan, Charu, Chetan, Amit, Deepa, Bhavna, Alok]:<br>(a) How many names start with the letter 'A'?<br>(b) How many names start with the letter 'B'?<br>(c) Which starting letter is the most common?",
      ans: "<strong>Counting by Starting Letter:</strong><br>• <strong>Names starting with 'A':</strong> Aarav, Ananya, Amit, Alok = <strong>4 names</strong>.<br>• <strong>Names starting with 'B':</strong> Bhuvan, Bhavna = <strong>2 names</strong>.<br>• <strong>Names starting with 'C':</strong> Charu, Chetan = 2 names.<br>• <strong>Names starting with 'D':</strong> Deepa = 1 name.<br><br><strong>Most common starting letter:</strong> Letter <strong>'A'</strong> with 4 names.",
      marks: 3,
      rubric: [
        { key: "Correct count of 'A' names (4) and 'B' names (2)", marks: "1.5 M" },
        { key: "Correct conclusion that 'A' is most common", marks: "1.5 M" }
      ]
    },
    {
      category: "Ending Letter Frequency • Vowel Endings",
      q: "Identify which of the following names end with a vowel (A, E, I, O, U): Priya, Rohit, Meena, Rahul, Sonu, Kabir, Ritu.<br>(a) List the names ending with a vowel.<br>(b) List the names ending with a consonant.<br>(c) How many more names end with a vowel than with a consonant?",
      ans: "<strong>Classification:</strong><br>• <strong>(a) Ending with a vowel:</strong> Priya (a), Meena (a), Sonu (u), Ritu (u) = <strong>4 names</strong>.<br>• <strong>(b) Ending with a consonant:</strong> Rohit (t), Rahul (l), Kabir (r) = <strong>3 names</strong>.<br>• <strong>(c) Difference:</strong> 4 - 3 = <strong>1 more name</strong> ends with a vowel.",
      marks: 3,
      rubric: [
        { key: "Correct identification of vowel-ending names", marks: "1.0 M" },
        { key: "Correct identification of consonant-ending names", marks: "1.0 M" },
        { key: "Correct difference calculation (4 - 3 = 1)", marks: "1.0 M" }
      ]
    },
    {
      category: "Dot Grid Name Art • Symmetry in Letters",
      q: "Look at the letters in the name 'M O M':<br>(a) How many letters are in this name?<br>(b) Which of these letters have vertical symmetry?<br>(c) What happens if you read the name backwards from right to left?",
      ans: "<strong>Analysis of 'M O M':</strong><br>• <strong>(a) Letter count:</strong> M-O-M = <strong>3 letters</strong>.<br>• <strong>(b) Vertical symmetry:</strong> Both 'M' and 'O' have vertical lines of symmetry. So all letters in MOM have vertical symmetry.<br>• <strong>(c) Reading backwards:</strong> M - O - M spelt backwards is still <strong>MOM</strong>. A word that reads the same forwards and backwards is called a <strong>palindrome</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct letter count (3)", marks: "1.0 M" },
        { key: "Identifying vertical symmetry of M and O", marks: "1.0 M" },
        { key: "Noting palindrome property (reads same backwards)", marks: "1.0 M" }
      ]
    },
    {
      category: "Practice Time • Arranging by Name Length",
      q: "Arrange the following state names in ascending order of their letter count: GOA, KERALA, ASSAM, GUJARAT, PUNJAB.",
      ans: "<strong>Step 1: Count letters in each state:</strong><br>• GOA: G-O-A = 3 letters<br>• ASSAM: A-S-S-A-M = 5 letters<br>• PUNJAB: P-U-N-J-A-B = 6 letters<br>• KERALA: K-E-R-A-L-A = 6 letters<br>• GUJARAT: G-U-J-A-R-A-T = 7 letters<br><br><strong>Ascending Order (Shortest to Longest):</strong><br>1. GOA (3)<br>2. ASSAM (5)<br>3. KERALA / PUNJAB (6 each)<br>4. GUJARAT (7).",
      marks: 3,
      rubric: [
        { key: "Accurate letter count for all 5 states", marks: "1.5 M" },
        { key: "Correct ascending order arrangement", marks: "1.5 M" }
      ]
    },
    {
      category: "Classroom Survey • Favorite Fruit Names",
      q: "In a class of 30 students, teacher wrote the names of 4 fruits on the board: APPLE, BANANA, MANGO, WATERMELON.<br>(a) Find the length of each fruit's name.<br>(b) If 12 students like MANGO, 8 like APPLE, 6 like BANANA, and 4 like WATERMELON, which fruit is the most popular?<br>(c) Which fruit has the longest spelling?",
      ans: "<strong>Step-by-Step Solution:</strong><br>• <strong>(a) Spelling lengths:</strong><br>- APPLE: 5 letters<br>- MANGO: 5 letters<br>- BANANA: 6 letters<br>- WATERMELON: 10 letters<br>• <strong>(b) Most popular fruit:</strong> <strong>MANGO</strong> (chosen by 12 students).<br>• <strong>(c) Longest spelling:</strong> <strong>WATERMELON</strong> (10 letters).",
      marks: 3,
      rubric: [
        { key: "Correct letter counts (5, 5, 6, 10)", marks: "1.0 M" },
        { key: "Identifying MANGO as most popular", marks: "1.0 M" },
        { key: "Identifying WATERMELON as longest spelling", marks: "1.0 M" }
      ]
    },
    {
      category: "Number Names Comparison • 1 to 20",
      q: "Among the number names from 1 to 10: 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN':<br>(a) Which number name has the least number of letters?<br>(b) Which number names have the maximum number of letters?<br>(c) How many letters are in 'THREE', 'SEVEN', and 'EIGHT'?",
      ans: "<strong>Counting Letters in Number Names:</strong><br>• ONE (3), TWO (3), THREE (5), FOUR (4), FIVE (4), SIX (3), SEVEN (5), EIGHT (5), NINE (4), TEN (3).<br><br><strong>Answers:</strong><br>• <strong>(a) Least letters:</strong> ONE, TWO, SIX, TEN (3 letters each).<br>• <strong>(b) Maximum letters:</strong> THREE, SEVEN, EIGHT (5 letters each).<br>• <strong>(c)</strong> Each has exactly <strong>5 letters</strong>.",
      marks: 3,
      rubric: [
        { key: "Accurate counts for numbers 1 to 10", marks: "1.0 M" },
        { key: "Identifying least letters (3)", marks: "1.0 M" },
        { key: "Identifying maximum letters (5)", marks: "1.0 M" }
      ]
    },
    {
      category: "Letter Riddle • Word Detective",
      q: "I am a 6-letter bird name. My first letter is 'P' and my last letter is 'T'. Inside me is the word 'ARRO'. Who am I? Also, how many vowels and consonants are in my name?",
      ans: "<strong>Solving the Riddle:</strong><br>• First letter = P<br>• Middle letters = ARRO<br>• Last letter = T<br>• Complete word = <strong>PARROT</strong> (P-A-R-R-O-T = 6 letters).<br><br><strong>Vowels and Consonants:</strong><br>• Vowels: A, O = <strong>2 vowels</strong>.<br>• Consonants: P, R, R, T = <strong>4 consonants</strong>.",
      marks: 2,
      rubric: [
        { key: "Correct word: PARROT", marks: "1.0 M" },
        { key: "Correct vowel (2) and consonant (4) count", marks: "1.0 M" }
      ]
    },
    {
      category: "Frequency Table • Counting Repeated Letters",
      q: "In the word 'MATHEMATICS':<br>(a) What is the total letter count?<br>(b) Which letters appear more than once, and how many times do they appear?<br>(c) Which letters appear only once?",
      ans: "<strong>Letter Frequency Analysis for 'MATHEMATICS':</strong><br>• <strong>(a) Total letter count:</strong> M-A-T-H-E-M-A-T-I-C-S = <strong>11 letters</strong>.<br>• <strong>(b) Letters appearing more than once:</strong><br>- M: 2 times<br>- A: 2 times<br>- T: 2 times<br>• <strong>(c) Letters appearing only once:</strong> H (1), E (1), I (1), C (1), S (1) = <strong>5 letters</strong>.",
      marks: 3,
      rubric: [
        { key: "Total count = 11", marks: "1.0 M" },
        { key: "Accurate repeated counts: M(2), A(2), T(2)", marks: "1.0 M" },
        { key: "Accurate single letters: H, E, I, C, S", marks: "1.0 M" }
      ]
    },
    {
      category: "Hands-on Activity • Classroom Seating Grid",
      q: "In Row 1, four students are seated: ALICE, BOB, CHARLIE, and DAVID.<br>(a) Find the total number of letters in all 4 names combined.<br>(b) What is the average-like middle length among these 4 names?",
      ans: "<strong>Calculations:</strong><br>• ALICE = 5 letters<br>• BOB = 3 letters<br>• CHARLIE = 7 letters<br>• DAVID = 5 letters<br><br>• <strong>(a) Total letters combined:</strong> 5 + 3 + 7 + 5 = <strong>20 letters</strong>.<br>• <strong>(b) Middle/representative length:</strong> 20 ÷ 4 = <strong>5 letters per student</strong>.",
      marks: 2,
      rubric: [
        { key: "Correct total letters = 20", marks: "1.0 M" },
        { key: "Correct average/middle length = 5 letters", marks: "1.0 M" }
      ]
    },
    {
      category: "Review Exercise • True or False on Names",
      q: "State True or False with reasons:<br>(a) 'RAMESH' and 'SURESH' have the same number of letters.<br>(b) 'INDIA' has more consonants than vowels.<br>(c) The word 'SUN' has the same number of letters as the number 3.",
      ans: "<strong>Verification:</strong><br>• <strong>(a) True.</strong> R-A-M-E-S-H has 6 letters and S-U-R-E-S-H has 6 letters.<br>• <strong>(b) False.</strong> In 'INDIA', vowels are I, I, A (3 vowels) and consonants are N, D (2 consonants). Vowels are more than consonants.<br>• <strong>(c) True.</strong> S-U-N has 3 letters, which equals the number 3.",
      marks: 3,
      rubric: [
        { key: "Part (a) True with reason (6 = 6)", marks: "1.0 M" },
        { key: "Part (b) False with reason (3 vowels > 2 consonants)", marks: "1.0 M" },
        { key: "Part (c) True with reason (3 letters = 3)", marks: "1.0 M" }
      ]
    },
    {
      category: "HOTS • Secret Code by Name Length",
      q: "A teacher created a code where each student's secret passcode is the number of letters in their first name multiplied by 10.<br>(a) What is the passcode for 'KAVITA'?<br>(b) What is the passcode for 'OM'?<br>(c) If a student has passcode 80, how many letters are in that student's name? Give an example of such a name.",
      ans: "<strong>Decoding the Passcode:</strong><br>• <strong>(a) KAVITA:</strong> 6 letters → Passcode = 6 × 10 = <strong>60</strong>.<br>• <strong>(b) OM:</strong> 2 letters → Passcode = 2 × 10 = <strong>20</strong>.<br>• <strong>(c) Student with passcode 80:</strong><br>Letters = 80 ÷ 10 = <strong>8 letters</strong>.<br>Example name: <em>PRIYANKA</em> or <em>PRASHANT</em> (8 letters).",
      marks: 3,
      rubric: [
        { key: "Part (a) 60", marks: "1.0 M" },
        { key: "Part (b) 20", marks: "1.0 M" },
        { key: "Part (c) 8 letters with valid 8-letter name", marks: "1.0 M" }
      ]
    },
    {
      category: "Mental Math • Name Rhymes & Length",
      q: "Find two rhyming names that both have exactly 4 letters. Check if they have the same number of vowels.",
      ans: "<strong>Example Rhyming Pair:</strong><br>• Name 1: <strong>AMAN</strong> (A-M-A-N = 4 letters)<br>• Name 2: <strong>CHAMAN</strong> has 6 letters, so let's choose: <strong>RITA</strong> and <strong>GITA</strong>.<br>• RITA: R-I-T-A = 4 letters. Vowels = I, A (2 vowels).<br>• GITA: G-I-T-A = 4 letters. Vowels = I, A (2 vowels).<br>• <strong>Conclusion:</strong> Both have 4 letters and both have exactly 2 vowels.",
      marks: 2,
      rubric: [
        { key: "Valid 4-letter rhyming pair (e.g., Rita & Gita)", marks: "1.0 M" },
        { key: "Correct vowel count confirmation (2 each)", marks: "1.0 M" }
      ]
    },
    {
      category: "Comprehensive Chapter Review • Summary Worksheet",
      q: "Look at the four names: NEHA, ABHINAV, JAI, POOJA.<br>(a) Write each name and its length.<br>(b) Write the difference between the longest and shortest.<br>(c) Which name has equal number of vowels and consonants?",
      ans: "<strong>Summary Worksheet Solution:</strong><br>• <strong>(a) Name lengths:</strong><br>- NEHA: 4 letters<br>- ABHINAV: 7 letters<br>- JAI: 3 letters<br>- POOJA: 5 letters<br>• <strong>(b) Difference:</strong> Longest (Abhinav = 7) - Shortest (Jai = 3) = 7 - 3 = <strong>4 letters</strong>.<br>• <strong>(c) Equal vowels and consonants:</strong><br>- In <strong>NEHA</strong>: Vowels = E, A (2); Consonants = N, H (2). Both are equal!",
      marks: 3,
      rubric: [
        { key: "Accurate lengths: 4, 7, 3, 5", marks: "1.0 M" },
        { key: "Difference: 7 - 3 = 4", marks: "1.0 M" },
        { key: "Identifying NEHA with 2 vowels and 2 consonants", marks: "1.0 M" }
      ]
    },
    {
      category: "Activity Reflection • My Identity in Numbers",
      q: "Write down your own full name (First name + Surname).<br>(a) Count the letters in your first name.<br>(b) Count the letters in your surname.<br>(c) What is the total length of your complete name? Is the total an even or odd number?",
      ans: "<strong>Sample Student Response:</strong><br>• Student Name: <em>Aarav Sharma</em><br>• <strong>(a) First name:</strong> A-A-R-A-V = <strong>5 letters</strong>.<br>• <strong>(b) Surname:</strong> S-H-A-R-M-A = <strong>6 letters</strong>.<br>• <strong>(c) Total length:</strong> 5 + 6 = <strong>11 letters</strong>.<br>• Since 11 cannot be divided equally by 2, it is an <strong>odd number</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct first name and surname counts", marks: "1.0 M" },
        { key: "Correct total addition", marks: "1.0 M" },
        { key: "Accurate even/odd identification", marks: "1.0 M" }
      ]
    }
  ]
};

module.exports = { mathsMelaExpandedPart1 };
