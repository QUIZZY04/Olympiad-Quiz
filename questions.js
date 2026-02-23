const questionsData = {

class4:{

/* ================= MATHS ================= */

maths:[


{
q: "Find the smallest number which when divided by 6, 8 and 12 leaves remainder 3 in each case.",
o: ["27","51","75","99"],
a: 1,
hint: "Find LCM first, then add remainder.",
sol: "LCM(6,8,12)=24. Required number = 24k + 3. Smallest = 24×2 +3 = 51."
},
{
q: "The difference between two numbers is 48. Their ratio is 5:3. Find the larger number.",
o: ["120","96","144","80"],
a: 0,
hint: "Let numbers be 5x and 3x.",
sol: "5x - 3x = 48 → 2x=48 → x=24 → larger=5×24=120."
},
{
q: "Find the value of 999 × 999.",
o: ["998001","999001","997001","1000000"],
a: 0,
hint: "Use (1000-1)² formula.",
sol: "(1000-1)² = 1000000 - 2000 +1 = 998001."
},
{
q: "How many numbers between 1 and 100 are divisible by both 3 and 5?",
o: ["5","6","7","8"],
a: 1,
hint: "Divisible by LCM of 3 and 5.",
sol: "LCM=15. 100÷15=6 numbers."
},
{
q: "The sum of first 10 natural numbers is?",
o: ["45","50","55","60"],
a: 2,
hint: "Use formula n(n+1)/2.",
sol: "10×11/2=55."
},
{
q: "If 4 men can build a wall in 9 days, how many days will 6 men take?",
o: ["6","8","7","9"],
a: 0,
hint: "Work = men × days constant.",
sol: "4×9=36 total work → 36÷6=6 days."
},
{
q: "Find the missing number: 2, 6, 12, 20, 30, ?",
o: ["36","40","42","56"],
a: 2,
hint: "Look at pattern n(n+1).",
sol: "5×6=30, next 6×7=42."
},
{
q: "A number when multiplied by 8 gives 504. Find the number.",
o: ["63","72","84","56"],
a: 0,
hint: "Divide 504 by 8.",
sol: "504 ÷ 8 = 63."
},
{
q: "Find HCF of 144 and 180.",
o: ["36","12","24","18"],
a: 0,
hint: "Prime factorization.",
sol: "HCF=36."
},
{
q: "If the perimeter of a rectangle is 100 cm and length is 30 cm, find breadth.",
o: ["20","25","30","35"],
a: 0,
hint: "2(l+b)=100.",
sol: "l+b=50 → b=20."
},
{
q: "Find the value of 25² − 24².",
o: ["49","1","50","625"],
a: 0,
hint: "Use (a² − b²) formula.",
sol: "(25−24)(25+24)=1×49=49."
},
{
q: "The average of 5 numbers is 18. Find their total.",
o: ["80","85","90","95"],
a: 2,
hint: "Average × number of items.",
sol: "18×5=90."
},
{
q: "How many factors does 60 have?",
o: ["10","12","14","8"],
a: 1,
hint: "Prime factorization 60=2²×3×5.",
sol: "(2+1)(1+1)(1+1)=3×2×2=12 factors."
},
{
q: "Find the next number: 1, 4, 9, 16, 25, ?",
o: ["30","36","49","64"],
a: 1,
hint: "Perfect squares.",
sol: "6²=36."
},
{
q: "A number leaves remainder 4 when divided by 7. What remainder when squared?",
o: ["2","4","6","1"],
a: 2,
hint: "Square the remainder.",
sol: "4²=16 → 16÷7 leaves remainder 2."
},
{
q: "Find LCM of 18 and 24.",
o: ["72","36","48","96"],
a: 0,
hint: "Prime factorization.",
sol: "LCM=72."
},
{
q: "The product of three consecutive numbers is 210. Find the middle number.",
o: ["5","6","7","8"],
a: 1,
hint: "Try consecutive numbers.",
sol: "5×6×7=210."
},
{
q: "If 20% of a number is 80, find the number.",
o: ["300","400","500","600"],
a: 1,
hint: "20% = 1/5.",
sol: "80×5=400."
},
{
q: "Find 125 × 16.",
o: ["2000","1800","1600","1500"],
a: 0,
hint: "125×8=1000.",
sol: "125×16 = 2000."
},
{
q: "How many multiples of 7 are there between 1 and 200?",
o: ["28","29","30","27"],
a: 0,
hint: "200÷7.",
sol: "200÷7=28 multiples."
},
{
q: "Find the value of (48 ÷ 6) × (72 ÷ 9).",
o: ["64","72","48","96"],
a: 0,
hint: "Solve separately.",
sol: "8×8=64."
},
{
q: "The sum of two numbers is 72 and their difference is 8. Find larger number.",
o: ["40","36","38","42"],
a: 0,
hint: "Use simple system.",
sol: "(72+8)/2=40."
},
{
q: "Find the next term: 3, 7, 15, 31, ?",
o: ["63","62","60","64"],
a: 0,
hint: "×2 +1 pattern.",
sol: "31×2+1=63."
},
{
q: "Find area of square whose perimeter is 64 cm.",
o: ["256","144","196","128"],
a: 0,
hint: "Find side first.",
sol: "Side=16 → Area=256."
},
{
q: "How many diagonals does a pentagon have?",
o: ["5","7","10","8"],
a: 0,
hint: "Formula n(n-3)/2.",
sol: "5(2)/2=5 diagonals."
},
{
q: "If 3/8 of a number is 24, find the number.",
o: ["64","72","80","96"],
a: 0,
hint: "Multiply 24 by 8/3.",
sol: "24×8÷3=64."
},
{
q: "Find 1001 × 1001.",
o: ["1002001","1001001","1000001","1010001"],
a: 0,
hint: "Use (1000+1)².",
sol: "1000000+2000+1=1002001."
},
{
q: "Find the greatest 4-digit number divisible by 9.",
o: ["9999","9990","9981","9972"],
a: 0,
hint: "Sum of digits rule.",
sol: "9999 divisible by 9."
},
{
q: "If a number is divisible by 11, what is sum rule?",
o: ["Sum even places - odd places = multiple of 11","Sum digits divisible by 11","Ends with 1","None"],
a: 0,
hint: "Divisibility rule of 11.",
sol: "Difference of sums of alternate digits must be multiple of 11."
},
{
q: "Find the next number: 2, 3, 5, 9, 17, ?",
o: ["33","34","35","36"],
a: 0,
hint: "Double previous and subtract 1.",
sol: "17×2 -1=33."
}


],


/* ================= ENGLISH ================= */

english:[
{
q: "Choose the correct synonym of 'Brave'.",
o: ["Cowardly","Fearless","Weak","Lazy"],
a: 1,
hint: "Opposite of afraid.",
sol: "Brave means fearless."
},
{
q: "Choose the correct antonym of 'Ancient'.",
o: ["Old","Modern","Historic","Traditional"],
a: 1,
hint: "Opposite of old.",
sol: "Modern is opposite of ancient."
},
{
q: "Fill in the blank: She has been waiting ___ two hours.",
o: ["since","for","from","by"],
a: 1,
hint: "Used with duration of time.",
sol: "'For' is used with a period of time."
},
{
q: "Identify the correct sentence.",
o: ["He go to school daily.","He goes to school daily.","He going to school daily.","He gone to school daily."],
a: 1,
hint: "Singular subject + verb rule.",
sol: "He goes to school daily."
},
{
q: "Choose the correctly spelled word.",
o: ["Recieve","Receive","Receeve","Receve"],
a: 1,
hint: "i before e rule.",
sol: "Correct spelling is Receive."
},
{
q: "Fill in the blank: The cat jumped ___ the wall.",
o: ["in","on","over","at"],
a: 2,
hint: "Movement from one side to another.",
sol: "Jumped over the wall."
},
{
q: "Identify the noun in the sentence: The little boy kicked the ball.",
o: ["kicked","little","boy","the"],
a: 2,
hint: "Naming word.",
sol: "Boy is a noun."
},
{
q: "Choose the correct plural form of 'Child'.",
o: ["Childs","Childes","Children","Childrens"],
a: 2,
hint: "Irregular plural.",
sol: "Plural of child is children."
},
{
q: "Fill in the blank: She is taller ___ her sister.",
o: ["than","then","that","as"],
a: 0,
hint: "Used in comparison.",
sol: "Comparative uses 'than'."
},
{
q: "Choose the correct meaning of the idiom: 'A piece of cake'.",
o: ["Very difficult","Very easy","Very sweet","Very big"],
a: 1,
hint: "Something simple.",
sol: "'A piece of cake' means very easy."
},
{
q: "Identify the verb in the sentence: Birds fly in the sky.",
o: ["Birds","fly","sky","in"],
a: 1,
hint: "Action word.",
sol: "Fly is the verb."
},
{
q: "Choose the correct tense: She ___ finished her homework.",
o: ["has","have","had","having"],
a: 0,
hint: "Present perfect tense.",
sol: "She has finished her homework."
},
{
q: "Select the correct question form: ___ are you going?",
o: ["Where","Were","Wear","What"],
a: 0,
hint: "Asking about place.",
sol: "Where are you going?"
},
{
q: "Choose the correct article: He is ___ honest man.",
o: ["a","an","the","no article"],
a: 1,
hint: "Honest starts with vowel sound.",
sol: "An honest man."
},
{
q: "Find the error: She do not like apples.",
o: ["She","do","not","like"],
a: 1,
hint: "Singular subject rule.",
sol: "'Do' should be 'does'."
},
{
q: "Choose the correct pronoun: This book belongs to Riya. It is ___ book.",
o: ["her","hers","she","him"],
a: 0,
hint: "Possessive adjective.",
sol: "It is her book."
},
{
q: "Select the correct meaning of 'Generous'.",
o: ["Selfish","Kind","Angry","Cruel"],
a: 1,
hint: "Opposite of selfish.",
sol: "Generous means kind and giving."
},
{
q: "Choose the correct conjunction: I was tired ___ I finished my work.",
o: ["and","but","so","because"],
a: 2,
hint: "Shows result.",
sol: "I was tired, so I finished my work."
},
{
q: "Identify the adjective: The blue sky looked beautiful.",
o: ["blue","sky","looked","beautiful"],
a: 0,
hint: "Describing word.",
sol: "Blue describes sky."
},
{
q: "Choose the correct form: She sings very ___.",
o: ["good","well","best","better"],
a: 1,
hint: "Adverb needed.",
sol: "She sings very well."
},
{
q: "Select the correct sentence.",
o: ["Each of the boys are present.","Each of the boys is present.","Each of the boys were present.","Each of the boys have present."],
a: 1,
hint: "'Each' is singular.",
sol: "Each of the boys is present."
},
{
q: "Fill in the blank: He arrived ___ the airport early.",
o: ["at","in","on","by"],
a: 0,
hint: "Used for specific place.",
sol: "Arrived at the airport."
},
{
q: "Choose the antonym of 'Expand'.",
o: ["Increase","Grow","Shrink","Stretch"],
a: 2,
hint: "Opposite meaning.",
sol: "Shrink is opposite of expand."
},
{
q: "Identify the correct punctuation: What a beautiful day___",
o: ["?","!",";",","],
a: 1,
hint: "Exclamation sentence.",
sol: "What a beautiful day!"
},
{
q: "Choose the correct possessive form: This is ___ house.",
o: ["Ravi","Ravis","Ravi's","Ravi is"],
a: 2,
hint: "Showing ownership.",
sol: "Ravi's house."
},
{
q: "Find the synonym of 'Rapid'.",
o: ["Slow","Quick","Late","Silent"],
a: 1,
hint: "Means fast.",
sol: "Rapid means quick."
},
{
q: "Choose the correct word: She has ___ her homework.",
o: ["did","done","do","doing"],
a: 1,
hint: "Past participle needed.",
sol: "She has done her homework."
},
{
q: "Select the correct indirect speech: She said, 'I am happy.'",
o: ["She said she was happy.","She said she is happy.","She says she was happy.","She says she is happy."],
a: 0,
hint: "Tense changes in indirect speech.",
sol: "Present becomes past."
},
{
q: "Choose the correct prefix for 'possible'.",
o: ["impossible","unpossible","dispossible","nonpossible"],
a: 0,
hint: "Common prefix.",
sol: "Impossible is correct."
},
{
q: "Identify the correct sentence.",
o: ["Neither of the girls have arrived.","Neither of the girls has arrived.","Neither of the girls were arrived.","Neither of the girls are arrived."],
a: 1,
hint: "'Neither' is singular.",
sol: "Neither of the girls has arrived."
}
],


/* ================= SCIENCE ================= */

science:[
{
q: "Which of the following materials will allow both light and air to pass through it?",
o: ["Wood","Glass sheet","Cotton cloth","Plastic bottle"],
a: 2,
hint: "Think about transparency and permeability.",
sol: "Cotton cloth allows air and some light to pass."
},
{
q: "Which part of a plant prepares food but also helps in transpiration?",
o: ["Stem","Root","Leaf","Flower"],
a: 2,
hint: "Stomata are present in this part.",
sol: "Leaves prepare food and allow transpiration through stomata."
},
{
q: "Which soil type is best suited for growing cotton?",
o: ["Sandy soil","Clay soil","Black soil","Loamy soil"],
a: 2,
hint: "Cotton needs moisture retention.",
sol: "Black soil retains moisture and is best for cotton."
},
{
q: "Which organ filters blood and produces urine?",
o: ["Lungs","Liver","Kidney","Heart"],
a: 2,
hint: "It removes waste from blood.",
sol: "Kidneys filter blood and form urine."
},
{
q: "Which planet is known as the 'Red Planet'?",
o: ["Venus","Mars","Jupiter","Mercury"],
a: 1,
hint: "It appears reddish due to iron oxide.",
sol: "Mars is called the Red Planet."
},
{
q: "Which of these is NOT a conductor of electricity?",
o: ["Copper","Iron","Aluminium","Rubber"],
a: 3,
hint: "Think about insulating materials.",
sol: "Rubber is an insulator."
},
{
q: "Which force helps a magnet attract iron nails?",
o: ["Gravitational force","Frictional force","Magnetic force","Electrostatic force"],
a: 2,
hint: "Force related to magnetism.",
sol: "Magnetic force attracts iron objects."
},
{
q: "Which organ helps us to maintain balance?",
o: ["Eyes","Ears","Brain","Nose"],
a: 1,
hint: "Inner ear controls balance.",
sol: "The inner ear helps maintain balance."
},
{
q: "Which change is irreversible?",
o: ["Melting ice","Burning paper","Freezing water","Dissolving sugar"],
a: 1,
hint: "Can we reverse it?",
sol: "Burning paper cannot be reversed."
},
{
q: "Which of these animals breathes through its skin?",
o: ["Frog","Dog","Fish","Bird"],
a: 0,
hint: "Think about amphibians.",
sol: "Frogs breathe through skin and lungs."
},
{
q: "Which gas is necessary for burning?",
o: ["Carbon dioxide","Nitrogen","Oxygen","Hydrogen"],
a: 2,
hint: "Supports combustion.",
sol: "Oxygen supports burning."
},
{
q: "Which of the following is an example of a lever?",
o: ["Wheel","Pulley","Seesaw","Axle"],
a: 2,
hint: "Think of playground equipment.",
sol: "A seesaw is a lever."
},
{
q: "Which of these materials will float on water?",
o: ["Iron nail","Stone","Wood","Glass marble"],
a: 2,
hint: "Think about density.",
sol: "Wood floats because it is less dense than water."
},
{
q: "Which organ pumps blood throughout the body?",
o: ["Brain","Lungs","Heart","Kidney"],
a: 2,
hint: "Main organ of circulatory system.",
sol: "Heart pumps blood."
},
{
q: "Which of these is a renewable source of energy?",
o: ["Coal","Petroleum","Solar energy","Natural gas"],
a: 2,
hint: "Can be replenished naturally.",
sol: "Solar energy is renewable."
},
{
q: "Which of the following animals is cold-blooded?",
o: ["Dog","Snake","Cow","Lion"],
a: 1,
hint: "Reptiles are cold-blooded.",
sol: "Snake is cold-blooded."
},
{
q: "Which part of the tooth is hardest?",
o: ["Pulp","Enamel","Dentin","Root"],
a: 1,
hint: "Outer layer of tooth.",
sol: "Enamel is hardest."
},
{
q: "Which nutrient gives us energy?",
o: ["Proteins","Vitamins","Carbohydrates","Minerals"],
a: 2,
hint: "Main energy source.",
sol: "Carbohydrates give energy."
},
{
q: "Which process helps plants lose excess water?",
o: ["Respiration","Photosynthesis","Transpiration","Digestion"],
a: 2,
hint: "Water vapor release.",
sol: "Transpiration removes excess water."
},
{
q: "Which instrument measures temperature?",
o: ["Barometer","Thermometer","Hygrometer","Anemometer"],
a: 1,
hint: "Used in fever check.",
sol: "Thermometer measures temperature."
},
{
q: "Which of the following is a vertebrate?",
o: ["Earthworm","Snail","Frog","Starfish"],
a: 2,
hint: "Has backbone.",
sol: "Frog has a backbone."
},
{
q: "Which organ helps in digestion of fats?",
o: ["Stomach","Liver","Kidney","Heart"],
a: 1,
hint: "Produces bile.",
sol: "Liver produces bile for fat digestion."
},
{
q: "Which layer of air protects us from harmful UV rays?",
o: ["Troposphere","Stratosphere","Ozone layer","Mesosphere"],
a: 2,
hint: "Contains ozone gas.",
sol: "Ozone layer absorbs UV rays."
},
{
q: "Which of these is a physical change?",
o: ["Rusting iron","Burning candle","Cutting paper","Cooking rice"],
a: 2,
hint: "No new substance formed.",
sol: "Cutting paper is physical change."
},
{
q: "Which of these animals lays eggs?",
o: ["Bat","Whale","Hen","Dog"],
a: 2,
hint: "Birds lay eggs.",
sol: "Hen lays eggs."
},
{
q: "Which type of energy is stored in food?",
o: ["Heat energy","Chemical energy","Light energy","Sound energy"],
a: 1,
hint: "Energy stored in molecules.",
sol: "Food stores chemical energy."
},
{
q: "Which organ controls all body activities?",
o: ["Heart","Brain","Lungs","Stomach"],
a: 1,
hint: "Control center of body.",
sol: "Brain controls body."
},
{
q: "Which of these is an example of friction?",
o: ["Rolling ball slowing down","Magnet attracting nail","Light from bulb","Rain falling"],
a: 0,
hint: "Opposes motion.",
sol: "Friction slows rolling ball."
},
{
q: "Which plant part develops into fruit?",
o: ["Stem","Root","Flower","Leaf"],
a: 2,
hint: "After pollination.",
sol: "Flower develops into fruit."
},
{
q: "Which of these is NOT a property of air?",
o: ["Has weight","Occupies space","Has color","Exerts pressure"],
a: 2,
hint: "Can we see air?",
sol: "Air has no color."
}
]
},
class5:{
   maths:[
{
q: "Find the smallest number which when divided by 12 and 15 leaves remainder 5.",
o: ["50","55","65","95"],
a: 3,
hint: "Find LCM first.",
sol: "LCM(12,15)=60. Required number=60k+5. Smallest=60+5=65."
},
{
q: "If ratio of two numbers is 7:3 and their sum is 200, find larger number.",
o: ["140","120","150","160"],
a: 0,
hint: "Let numbers be 7x and 3x.",
sol: "10x=200 → x=20 → larger=140."
},

{
q: "Find LCM of 18 and 24.",
o: ["72","36","48","96"],
a: 0,
hint: "Prime factors.",
sol: "LCM=72."
},
{
q: "If 25% of a number is 125, find number.",
o: ["400","450","500","375"],
a: 2,
hint: "25%=1/4.",
sol: "125×4=500."
},
      {
q: `
<p><b>Observe the figure below:</b></p>

<svg width="260" height="200">
  <polygon points="60,150 200,150 130,40"
           stroke="white"
           stroke-width="2"
           fill="none" />

  <text x="115" y="170" fill="white">12 cm</text>

  <line x1="130" y1="40" x2="130" y2="150"
        stroke="white"
        stroke-dasharray="4"/>

  <text x="140" y="95" fill="white">8 cm</text>
</svg>

<p>Find the area of the triangle.</p>
`,
o: ["48 cm²","96 cm²","40 cm²","64 cm²"],
a: 0,
hint: "Area of triangle = 1/2 × base × height.",
sol: "Area = 1/2 × 12 × 8 = 48 cm²."
},
{
q: "Find 125 × 64.",
o: ["7000","8000","7500","8200"],
a: 1,
hint: "125×8=1000.",
sol: "125×64=125×(8×8)=1000×8=8000."
},
{
q: "The sum of three consecutive even numbers is 114. Find middle number.",
o: ["36","38","40","42"],
a: 1,
hint: "Let numbers be x,x+2,x+4.",
sol: "3x+6=114 → x=36 → middle=38."
},
{
q: "Find next term: 2, 5, 11, 23, 47, ?",
o: ["90","95","96","97"],
a: 1,
hint: "×2 +1 pattern.",
sol: "47×2+1=95."
},
{
q: "Find number of factors of 144.",
o: ["12","15","18","20"],
a: 1,
hint: "144=2⁴×3².",
sol: "(4+1)(2+1)=15 factors."
},
{
q: "Find value of (1001 × 999).",
o: ["999999","1000001","998999","1000999"],
a: 0,
hint: "Use (a+b)(a−b).",
sol: "1000²−1=999999."
},
{
q: "If 6 men finish work in 12 days, how many days for 9 men?",
o: ["6","8","9","10"],
a: 1,
hint: "Men×Days constant.",
sol: "6×12=72 → 72÷9=8."
},
{
q: "Find average of first 20 natural numbers.",
o: ["10","10.5","11","9.5"],
a: 1,
hint: "Average of 1 to n is (n+1)/2.",
sol: "(20+1)/2=10.5."
},
{
q: "Find 999 × 125.",
o: ["124875","125000","124000","123875"],
a: 0,
hint: "(1000−1)×125.",
sol: "125000−125=124875."
},
{
q: "Find next term: 1, 4, 10, 20, 35, ?",
o: ["50","56","60","65"],
a: 1,
hint: "Differences increase by 3,6,10,15.",
sol: "Next diff=21 → 35+21=56."
},
{
q: "Find smallest 4-digit number divisible by 24.",
o: ["1008","1016","1024","1040"],
a: 0,
hint: "24×42=1008.",
sol: "Smallest 4-digit multiple=1008."
},
{
q: "Find area of square with perimeter 80 cm.",
o: ["400","450","500","420"],
a: 0,
hint: "Side=perimeter/4.",
sol: "Side=20 → Area=400."
},
{
q: "Find LCM of 45 and 75.",
o: ["225","150","300","450"],
a: 0,
hint: "Prime factorization.",
sol: "LCM=225."
},
{
q: "How many multiples of 9 between 1 and 500?",
o: ["55","56","54","57"],
a: 1,
hint: "500÷9.",
sol: "500÷9=55 remainder → 55 multiples."
},
{
q: "Find value of 5³ + 4³.",
o: ["189","225","125","200"],
a: 0,
hint: "125+64.",
sol: "189."
},
{
q: "If 3/4 of a number is 96, find number.",
o: ["120","128","132","140"],
a: 1,
hint: "Multiply by 4/3.",
sol: "96×4÷3=128."
},
{
q: "Difference of squares of 21 and 20 is?",
o: ["41","1","400","21"],
a: 0,
hint: "(a²−b²)=(a−b)(a+b).",
sol: "(1×41)=41."
},
{
q: "Find HCF of 84 and 126.",
o: ["42","21","28","14"],
a: 0,
hint: "Prime factors.",
sol: "HCF=42."
},
{
q: "If 12% of number is 48, find number.",
o: ["300","400","500","600"],
a: 1,
hint: "12%=12/100.",
sol: "48×100÷12=400."
},
{
q: "Find next term: 3, 7, 15, 31, ?",
o: ["60","62","63","64"],
a: 2,
hint: "×2 +1.",
sol: "31×2+1=63."
},
{
q: "Number of diagonals in hexagon?",
o: ["6","9","12","15"],
a: 1,
hint: "n(n−3)/2.",
sol: "6×3÷2=9."
},
{
q: "Find value of (48 ÷ 6) × (84 ÷ 7).",
o: ["96","112","64","84"],
a: 0,
hint: "8×12.",
sol: "96."
},
{
q: "Find smallest number divisible by 13 and 17.",
o: ["221","187","204","260"],
a: 0,
hint: "LCM.",
sol: "13×17=221."
},
{
q: "If perimeter of rectangle is 60 and length is 18, find breadth.",
o: ["12","14","15","16"],
a: 0,
hint: "2(l+b)=60.",
sol: "l+b=30 → b=12."
},
{
q: "Find 250 × 48.",
o: ["12000","12500","13000","11500"],
a: 0,
hint: "250×4=1000.",
sol: "250×48=12000."
},
{
q: "Find number of factors of 81.",
o: ["4","5","6","7"],
a: 1,
hint: "81=3⁴.",
sol: "(4+1)=5 factors."
}
],
english:[
{
q: "Choose synonym of 'Reluctant'.",
o: ["Willing","Unwilling","Happy","Brave"],
a: 1,
hint: "Means not ready.",
sol: "Reluctant means unwilling."
},
{
q: "Choose antonym of 'Scarce'.",
o: ["Rare","Plenty","Few","Limited"],
a: 1,
hint: "Opposite of less.",
sol: "Plenty."
},
{
q: "Fill in the blank: She insisted ___ coming early.",
o: ["on","in","at","for"],
a: 0,
hint: "Correct preposition.",
sol: "Insisted on."
},
{
q: "Identify error: Each of the players have arrived.",
o: ["Each","players","have","arrived"],
a: 2,
hint: "'Each' is singular.",
sol: "Should be 'has'."
},
{
q: "Choose correct sentence.",
o: ["He is good in maths.","He is good at maths.","He is good on maths.","He is good for maths."],
a: 1,
hint: "Correct preposition.",
sol: "Good at maths."
},
{
q: "Choose correct tense: She ___ completed her work.",
o: ["has","have","had","having"],
a: 0,
hint: "Present perfect.",
sol: "She has completed."
},
{
q: "Choose meaning of idiom 'Break the ice'.",
o: ["Start conversation","Break something","Fight","Cold weather"],
a: 0,
hint: "Begin interaction.",
sol: "Start conversation."
},
{
q: "Choose correct indirect speech: He said, 'I am tired.'",
o: ["He said he was tired.","He said he is tired.","He says he was tired.","He says he is tired."],
a: 0,
hint: "Tense changes.",
sol: "Am → was."
},
{
q: "Choose correct plural of 'Analysis'.",
o: ["Analysises","Analyses","Analysis","Analyssis"],
a: 1,
hint: "Irregular plural.",
sol: "Analyses."
},
{
q: "Fill in blank: The train arrived ___ time.",
o: ["in","on","at","by"],
a: 1,
hint: "Correct phrase.",
sol: "On time."
},
{
q: "Choose synonym of 'Cautious'.",
o: ["Careless","Careful","Fast","Lazy"],
a: 1,
hint: "Means careful.",
sol: "Cautious = careful."
},
{
q: "Choose correct article: He is ___ European citizen.",
o: ["a","an","the","no article"],
a: 0,
hint: "European starts with consonant sound.",
sol: "A European."
},
{
q: "Choose antonym of 'Permanent'.",
o: ["Temporary","Fixed","Stable","Lasting"],
a: 0,
hint: "Opposite meaning.",
sol: "Temporary."
},
{
q: "Identify adjective: The bright sun shone.",
o: ["bright","sun","shone","the"],
a: 0,
hint: "Describes noun.",
sol: "Bright."
},
{
q: "Choose correct pronoun: This book is ___ .",
o: ["my","mine","me","I"],
a: 1,
hint: "Possessive pronoun.",
sol: "Mine."
},
{
q: "Choose correct conjunction: I was tired ___ I kept working.",
o: ["but","and","so","because"],
a: 0,
hint: "Contrast.",
sol: "But."
},
{
q: "Choose correct word: She sings very ___.",
o: ["good","well","best","better"],
a: 1,
hint: "Adverb needed.",
sol: "Well."
},
{
q: "Choose correct prefix of 'legal'.",
o: ["illegal","unlegal","dislegal","nonlegal"],
a: 0,
hint: "Common prefix.",
sol: "Illegal."
},
{
q: "Choose correct sentence.",
o: ["Neither of them are ready.","Neither of them is ready.","Neither of them were ready.","Neither of them have ready."],
a: 1,
hint: "'Neither' is singular.",
sol: "Is ready."
},
{
q: "Choose synonym of 'Vast'.",
o: ["Tiny","Huge","Narrow","Thin"],
a: 1,
hint: "Means very large.",
sol: "Huge."
}
],

science:[
{
q: "Which vitamin helps in clotting of blood?",
o: ["Vitamin A","Vitamin B","Vitamin C","Vitamin K"],
a: 3,
hint: "Important for blood clotting.",
sol: "Vitamin K helps in clotting of blood."
},
{
q: "Which layer of Earth is responsible for tectonic activities?",
o: ["Crust","Mantle","Core","Inner core"],
a: 1,
hint: "Semi-molten layer beneath crust.",
sol: "Mantle movements cause tectonic activity."
},
{
q: "Which organ in human body controls involuntary actions like heartbeat?",
o: ["Cerebrum","Cerebellum","Medulla","Spinal cord"],
a: 2,
hint: "Part of brain stem.",
sol: "Medulla controls involuntary actions."
},
{
q: "Which gas is mainly responsible for acid rain?",
o: ["Oxygen","Nitrogen","Sulphur dioxide","Hydrogen"],
a: 2,
hint: "Released from burning fuels.",
sol: "Sulphur dioxide causes acid rain."
},
{
q: "Which type of soil retains maximum water?",
o: ["Sandy soil","Clay soil","Loamy soil","Gravel"],
a: 1,
hint: "Very fine particles.",
sol: "Clay soil retains most water."
},
{
q: "Which part of the eye controls amount of light entering?",
o: ["Lens","Retina","Iris","Cornea"],
a: 2,
hint: "Colored part of eye.",
sol: "Iris controls light."
},
{
q: "Which planet rotates on its side?",
o: ["Mars","Earth","Uranus","Venus"],
a: 2,
hint: "Axis tilted 98 degrees.",
sol: "Uranus rotates on its side."
},
{
q: "Which force keeps planets in orbit around Sun?",
o: ["Magnetic force","Friction","Gravitational force","Electrostatic force"],
a: 2,
hint: "Force of attraction.",
sol: "Gravitational force."
},
{
q: "Which part of plant transports water?",
o: ["Phloem","Xylem","Stomata","Leaf"],
a: 1,
hint: "Water-conducting tissue.",
sol: "Xylem transports water."
},
{
q: "Which instrument measures air pressure?",
o: ["Thermometer","Barometer","Hygrometer","Anemometer"],
a: 1,
hint: "Used in weather prediction.",
sol: "Barometer measures air pressure."
},
{
q: "Which metal is liquid at room temperature?",
o: ["Iron","Mercury","Copper","Aluminium"],
a: 1,
hint: "Used in thermometers.",
sol: "Mercury is liquid metal."
},
{
q: "Which organ produces insulin?",
o: ["Liver","Kidney","Pancreas","Heart"],
a: 2,
hint: "Controls blood sugar.",
sol: "Pancreas produces insulin."
},
{
q: "Which process converts sugar into alcohol?",
o: ["Respiration","Fermentation","Photosynthesis","Digestion"],
a: 1,
hint: "Used in yeast.",
sol: "Fermentation."
},
{
q: "Which gas is most abundant in air?",
o: ["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],
a: 1,
hint: "78% of air.",
sol: "Nitrogen."
},
{
q: "Which planet is called Morning Star?",
o: ["Mars","Venus","Mercury","Saturn"],
a: 1,
hint: "Brightest planet.",
sol: "Venus."
},
{
q: "Which organ helps in purification of blood?",
o: ["Heart","Kidney","Liver","Lungs"],
a: 1,
hint: "Filters waste.",
sol: "Kidney purifies blood."
},
{
q: "Which part of brain controls balance?",
o: ["Cerebrum","Medulla","Cerebellum","Spinal cord"],
a: 2,
hint: "Controls body coordination.",
sol: "Cerebellum."
},
{
q: "Which is non-renewable resource?",
o: ["Solar energy","Wind energy","Coal","Hydropower"],
a: 2,
hint: "Fossil fuel.",
sol: "Coal."
},
{
q: "Which blood cells fight infections?",
o: ["RBC","WBC","Platelets","Plasma"],
a: 1,
hint: "White cells.",
sol: "WBC fight infections."
},
{
q: "Which vitamin deficiency causes rickets?",
o: ["Vitamin A","Vitamin B","Vitamin C","Vitamin D"],
a: 3,
hint: "Sunlight vitamin.",
sol: "Vitamin D deficiency."
},
{
q: "Which process plants use to make food?",
o: ["Respiration","Transpiration","Photosynthesis","Germination"],
a: 2,
hint: "Uses sunlight.",
sol: "Photosynthesis."
},
{
q: "Which layer protects Earth from meteors?",
o: ["Troposphere","Stratosphere","Mesosphere","Thermosphere"],
a: 2,
hint: "Meteors burn here.",
sol: "Mesosphere."
},
{
q: "Which animal is warm-blooded?",
o: ["Lizard","Frog","Snake","Dog"],
a: 3,
hint: "Mammal.",
sol: "Dog."
},
{
q: "Which gas helps in respiration?",
o: ["Carbon dioxide","Nitrogen","Oxygen","Hydrogen"],
a: 2,
hint: "Breathing gas.",
sol: "Oxygen."
},
{
q: "Which force opposes motion?",
o: ["Gravity","Friction","Magnetism","Tension"],
a: 1,
hint: "Slows objects.",
sol: "Friction."
},
{
q: "Which part of tooth contains nerves?",
o: ["Enamel","Dentin","Pulp","Root"],
a: 2,
hint: "Sensitive inner part.",
sol: "Pulp."
},
{
q: "Which is a chemical change?",
o: ["Melting ice","Burning paper","Breaking glass","Boiling water"],
a: 1,
hint: "New substance formed.",
sol: "Burning paper."
},
{
q: "Which organ stores urine?",
o: ["Kidney","Bladder","Liver","Stomach"],
a: 1,
hint: "Temporary storage.",
sol: "Bladder."
},
{
q: "Which planet has rings?",
o: ["Mars","Venus","Saturn","Mercury"],
a: 2,
hint: "Famous ring planet.",
sol: "Saturn."
},
{
q: "Which energy is stored in battery?",
o: ["Mechanical","Chemical","Heat","Light"],
a: 1,
hint: "Stored form.",
sol: "Chemical energy."
}
]


}



};








