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

{q:"Synonym of 'Ancient'?",o:["Old","Modern","New","Recent"],a:0,hint:"Very old.",sol:"Ancient means very old."},

{q:"Antonym of 'Generous'?",o:["Selfish","Kind","Helpful","Polite"],a:0,hint:"Opposite of giving.",sol:"Generous opposite is selfish."},

{q:"Plural of 'Crisis'?",o:["Crises","Crisises","Crisis","Crisi"],a:0,hint:"Ends with -is.",sol:"Crisis → Crises."},

{q:"Correct article: ___ honest man.",o:["An","A","The","No"],a:0,hint:"Honest has silent h.",sol:"An honest man."},

{q:"Synonym of 'Swift'?",o:["Fast","Slow","Late","Weak"],a:0,hint:"Speed related.",sol:"Swift means fast."},

{q:"Opposite of 'Victory'?",o:["Defeat","Win","Success","Triumph"],a:0,hint:"Opposite of win.",sol:"Victory opposite is defeat."},

{q:"Correct comparative of good?",o:["better","best","good","more good"],a:0,hint:"Irregular form.",sol:"Good → better."},

{q:"Plural of 'Mouse'?",o:["Mice","Mouses","Mouse","Mous"],a:0,hint:"Irregular plural.",sol:"Mouse → Mice."},

{q:"Choose correct tense: He ___ finished.",o:["has","have","had","having"],a:0,hint:"Singular subject.",sol:"He has finished."},

{q:"Identify adjective: A tall tree.",o:["tall","tree","a","none"],a:0,hint:"Describes noun.",sol:"Tall describes tree."},

{q:"Synonym of 'Huge'?",o:["Enormous","Tiny","Small","Little"],a:0,hint:"Very big.",sol:"Huge means enormous."},

{q:"Opposite of 'Permanent'?",o:["Temporary","Fixed","Stable","Lasting"],a:0,hint:"Short term.",sol:"Permanent opposite is temporary."},

{q:"Correct question tag: She is coming, ___?",o:["isn't she","is she","does she","did she"],a:0,hint:"Positive statement.",sol:"She is coming, isn't she?"},

{q:"Plural of Child?",o:["Children","Childs","Childrens","Childer"],a:0,hint:"Irregular plural.",sol:"Child → Children."},

{q:"Choose correct preposition: Good ___ maths.",o:["at","in","on","for"],a:0,hint:"Common phrase.",sol:"Good at maths."},

{q:"Synonym of 'Brilliant'?",o:["Intelligent","Dull","Lazy","Slow"],a:0,hint:"Very smart.",sol:"Brilliant means intelligent."},

{q:"Opposite of 'Accept'?",o:["Reject","Take","Receive","Agree"],a:0,hint:"Opposite of receive.",sol:"Accept opposite is reject."},

{q:"Plural of Phenomenon?",o:["Phenomena","Phenomenons","Phenomenas","Phenomen"],a:0,hint:"Greek origin.",sol:"Phenomenon → Phenomena."},

{q:"Correct spelling?",o:["Environment","Enviroment","Environmant","Enviornment"],a:0,hint:"Double n.",sol:"Correct spelling is Environment."},

{q:"Identify conjunction in: I stayed because it rained.",o:["because","stayed","rained","I"],a:0,hint:"Connects clauses.",sol:"Because joins two clauses."},

{q:"Synonym of Courageous?",o:["Brave","Weak","Fearful","Lazy"],a:0,hint:"Not afraid.",sol:"Courageous means brave."},

{q:"Opposite of Expand?",o:["Contract","Grow","Increase","Spread"],a:0,hint:"Opposite of increase.",sol:"Expand opposite is contract."},

{q:"Plural of Crisis?",o:["Crises","Crisis","Crisises","Crisi"],a:0,hint:"Ends -is.",sol:"Crisis → Crises."},

{q:"Correct article: ___ apple.",o:["An","A","The","No"],a:0,hint:"Starts with vowel sound.",sol:"An apple."},

{q:"Choose correct sentence:",o:["Each boy has a book.","Each boys have book.","Each boy have book.","Each boys has book."],a:0,hint:"Singular verb.",sol:"Each boy has a book."},

{q:"Identify pronoun: Everyone must do ___ duty.",o:["his","their","your","our"],a:0,hint:"Traditional usage.",sol:"Correct answer: his."},

{q:"Synonym of Swift?",o:["Fast","Slow","Weak","Late"],a:0,hint:"Speed related.",sol:"Swift means fast."},

{q:"Opposite of Scarce?",o:["Abundant","Rare","Few","Less"],a:0,hint:"Plenty.",sol:"Scarce opposite is abundant."},

{q:"Plural of Mouse?",o:["Mice","Mouses","Mouse","Mous"],a:0,hint:"Irregular.",sol:"Mouse → Mice."},

{q:"Correct tense: They ___ playing.",o:["are","is","was","be"],a:0,hint:"Plural subject.",sol:"They are playing."}

],


/* ================= SCIENCE ================= */

science:[

{q:"Which vitamin deficiency causes rickets?",o:["Vitamin D","Vitamin C","Vitamin A","Vitamin B"],a:0,hint:"Related to bones.",sol:"Vitamin D deficiency causes rickets."},

{q:"SI unit of force?",o:["Newton","Joule","Watt","Pascal"],a:0,hint:"Named after scientist.",sol:"SI unit of force is Newton."},

{q:"Earth completes one revolution in?",o:["365 days","24 hours","30 days","100 days"],a:0,hint:"1 year.",sol:"Earth takes 365 days."},

{q:"Which gas supports combustion?",o:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],a:0,hint:"Fire needs it.",sol:"Oxygen supports burning."},

{q:"Which planet is closest to Sun?",o:["Mercury","Venus","Earth","Mars"],a:0,hint:"Smallest planet.",sol:"Mercury is closest."},

{q:"Largest planet?",o:["Jupiter","Earth","Mars","Venus"],a:0,hint:"Gas giant.",sol:"Jupiter is largest."},

{q:"Which metal is liquid at room temperature?",o:["Mercury","Iron","Copper","Gold"],a:0,hint:"Used in thermometer.",sol:"Mercury is liquid metal."},

{q:"Plants prepare food by?",o:["Photosynthesis","Respiration","Digestion","Evaporation"],a:0,hint:"Uses sunlight.",sol:"Photosynthesis is food-making process."},

{q:"Force that opposes motion?",o:["Friction","Gravity","Magnetism","Pressure"],a:0,hint:"Opposite to movement.",sol:"Friction resists motion."},

{q:"Which blood cells fight infection?",o:["White blood cells","Red blood cells","Platelets","Plasma"],a:0,hint:"Defense cells.",sol:"WBC fight infections."},

{q:"Boiling point of water?",o:["100°C","0°C","50°C","90°C"],a:0,hint:"Standard pressure.",sol:"Water boils at 100°C."},

{q:"Which animal breathes through skin?",o:["Frog","Dog","Cow","Lion"],a:0,hint:"Amphibian.",sol:"Frog breathes through skin."},

{q:"Energy stored in food?",o:["Chemical","Solar","Wind","Nuclear"],a:0,hint:"Energy in nutrients.",sol:"Food stores chemical energy."},

{q:"Which planet has rings?",o:["Saturn","Earth","Mars","Venus"],a:0,hint:"Famous rings.",sol:"Saturn has rings."},

{q:"Which gas is most abundant in atmosphere?",o:["Nitrogen","Oxygen","Carbon dioxide","Helium"],a:0,hint:"78% of air.",sol:"Nitrogen is most abundant."},

{q:"Which instrument measures temperature?",o:["Thermometer","Barometer","Anemometer","Hygrometer"],a:0,hint:"Used in fever.",sol:"Thermometer measures temperature."},

{q:"Which organ pumps blood?",o:["Heart","Brain","Kidney","Lungs"],a:0,hint:"Circulatory system.",sol:"Heart pumps blood."},

{q:"Which joint is elbow?",o:["Hinge","Ball & socket","Pivot","Fixed"],a:0,hint:"Door movement.",sol:"Elbow is hinge joint."},

{q:"Sound travels fastest in?",o:["Solids","Liquids","Gases","Vacuum"],a:0,hint:"Particles close.",sol:"Sound travels fastest in solids."},

{q:"Renewable source?",o:["Solar energy","Coal","Petrol","Diesel"],a:0,hint:"Sun based.",sol:"Solar energy is renewable."},

{q:"Earth rotates in?",o:["24 hours","12 hours","48 hours","30 hours"],a:0,hint:"One day.",sol:"Earth rotates in 24 hours."},

{q:"Which gas do plants release?",o:["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"],a:0,hint:"Photosynthesis output.",sol:"Plants release oxygen."},

{q:"Which vitamin is good for eyesight?",o:["Vitamin A","Vitamin C","Vitamin D","Vitamin K"],a:0,hint:"Night vision.",sol:"Vitamin A supports vision."},

{q:"Which layer protects Earth from UV rays?",o:["Ozone","Troposphere","Mesosphere","Thermosphere"],a:0,hint:"Gas layer.",sol:"Ozone layer absorbs UV rays."},

{q:"Which organ purifies blood?",o:["Kidney","Heart","Lungs","Brain"],a:0,hint:"Removes waste.",sol:"Kidneys filter blood."},

{q:"Unit of electricity?",o:["Watt","Newton","Meter","Gram"],a:0,hint:"Power unit.",sol:"Watt is unit of power."},

{q:"Change of solid directly to gas?",o:["Sublimation","Melting","Freezing","Evaporation"],a:0,hint:"Example camphor.",sol:"Solid to gas directly is sublimation."},

{q:"Which part of plant absorbs water?",o:["Root","Leaf","Stem","Flower"],a:0,hint:"Underground part.",sol:"Roots absorb water."},

{q:"Largest organ of human body?",o:["Skin","Heart","Brain","Liver"],a:0,hint:"Outer covering.",sol:"Skin is largest organ."},

{q:"Which gas is essential for photosynthesis?",o:["Carbon dioxide","Oxygen","Nitrogen","Hydrogen"],a:0,hint:"Plants take from air.",sol:"Plants absorb carbon dioxide."}

]
},
class5:{
   maths:[

{q:"If 4x + 7 = 31, find x.",o:["6","5","4","7"],a:0,hint:"Solve linear equation.",sol:"4x = 24 → x = 6."},

{q:"A number when multiplied by 15 gives 945. What is the number?",o:["63","65","60","70"],a:0,hint:"Divide 945 by 15.",sol:"945 ÷ 15 = 63."},

{q:"The difference between two numbers is 48. If the smaller is 26, find larger.",o:["74","72","78","70"],a:0,hint:"Add difference.",sol:"26 + 48 = 74."},

{q:"LCM of 24 and 36?",o:["72","108","144","96"],a:0,hint:"Prime factorization.",sol:"24=2³×3, 36=2²×3² → LCM=2³×3²=72."},

{q:"HCF of 84 and 126?",o:["42","21","14","28"],a:0,hint:"Common highest factor.",sol:"HCF = 42."},

{q:"If 12 workers complete work in 8 days, 6 workers will complete in?",o:["16 days","12 days","14 days","10 days"],a:0,hint:"Inverse proportion.",sol:"Half workers → double time → 16 days."},

{q:"Find the next term: 2, 6, 7, 21, 22, ?",o:["66","44","67","60"],a:0,hint:"Alternate ×3 and +1.",sol:"2×3=6, +1=7, ×3=21, +1=22, ×3=66."},

{q:"What is 18% of 450?",o:["81","90","75","85"],a:0,hint:"(18/100)×450.",sol:"18% of 450 = 81."},

{q:"Find square root of 529.",o:["23","22","24","21"],a:0,hint:"23×23.",sol:"23² = 529."},

{q:"If a number is divisible by 9, its digit sum must be?",o:["Multiple of 9","Even","Odd","Prime"],a:0,hint:"Divisibility rule of 9.",sol:"Digit sum must be multiple of 9."},

{q:"A car travels 60 km/hr. Distance in 2.5 hours?",o:["150 km","120 km","180 km","130 km"],a:0,hint:"Speed × time.",sol:"60 × 2.5 = 150 km."},

{q:"Area of triangle (base=12cm, height=8cm)?",o:["48","96","72","60"],a:0,hint:"1/2 × base × height.",sol:"½×12×8 = 48."},

{q:"Convert 3/5 into percentage.",o:["60%","30%","50%","75%"],a:0,hint:"Multiply by 100.",sol:"3/5 ×100 = 60%."},

{q:"If 20% of a number is 50, find number.",o:["250","200","300","225"],a:0,hint:"Let number be x.",sol:"0.2x=50 → x=250."},

{q:"Mean of first 5 natural numbers?",o:["3","4","2","5"],a:0,hint:"(1+2+3+4+5)/5.",sol:"15/5 = 3."},

{q:"Number of factors of 48?",o:["10","8","12","9"],a:0,hint:"Prime factor method.",sol:"48=2⁴×3 → (4+1)(1+1)=10."},

{q:"The smallest multiple of 11 greater than 100?",o:["110","121","111","105"],a:0,hint:"Check 11×10.",sol:"11×10=110."},

{q:"Find value: 3² + 4³.",o:["73","81","64","91"],a:0,hint:"Calculate separately.",sol:"9 + 64 = 73."},

{q:"Convert 0.625 into fraction.",o:["5/8","3/5","1/2","7/8"],a:0,hint:"625/1000 simplify.",sol:"0.625=5/8."},

{q:"Perimeter of rectangle 18cm × 12cm?",o:["60","72","54","48"],a:0,hint:"2(l+b).",sol:"2(18+12)=60."},

{q:"Find missing number: 5, 9, 17, 33, ?",o:["65","49","57","61"],a:0,hint:"Pattern ×2 −1.",sol:"5×2−1=9, 9×2−1=17, 17×2−1=33, 33×2−1=65."},

{q:"Value of 125 ÷ (5×5)?",o:["5","10","25","15"],a:0,hint:"5×5=25.",sol:"125÷25=5."},

{q:"A train 150m long crosses pole in 10 sec. Speed?",o:["15 m/s","10 m/s","20 m/s","25 m/s"],a:0,hint:"Distance/time.",sol:"150÷10=15 m/s."},

{q:"Cube of 7?",o:["343","240","300","350"],a:0,hint:"7×7×7.",sol:"343."},

{q:"A bag has 4 red, 6 blue balls. Probability of blue?",o:["3/5","2/5","1/2","4/5"],a:0,hint:"6/10 simplify.",sol:"6/10=3/5."},

{q:"Convert 2.75 km to meters.",o:["2750","2500","2700","3000"],a:0,hint:"1km=1000m.",sol:"2.75×1000=2750."},

{q:"Find HCF of 45 and 75.",o:["15","25","5","30"],a:0,hint:"Common factors.",sol:"HCF=15."},

{q:"What is 5/6 of 180?",o:["150","140","160","120"],a:0,hint:"Multiply 180×5/6.",sol:"=150."},

{q:"A number when divided by 12 leaves remainder 5. What remainder when divided by 3?",o:["2","1","0","5"],a:2,hint:"12 is multiple of 3.",sol:"If divided by 12 remainder 5 → same number mod 3 = 5 mod 3 = 2? Actually correct answer = 2. (Correction: remainder 2)"},

{q:"Number of diagonals in pentagon?",o:["5","4","3","6"],a:0,hint:"n(n-3)/2.",sol:"5(2)/2=5 diagonals."}

],
english:[

{q:"Choose the word closest in meaning to 'Reluctant'.",o:["Unwilling","Eager","Happy","Quick"],a:0,hint:"Think: not ready to do something.",sol:"Reluctant means unwilling or hesitant."},

{q:"Choose the antonym of 'Scarce'.",o:["Abundant","Rare","Few","Little"],a:0,hint:"Opposite of limited.",sol:"Scarce means limited; opposite is abundant."},

{q:"Identify the correctly punctuated sentence.",o:["Its raining heavily.","It's raining heavily.","Its' raining heavily.","Its raining, heavily."],a:1,hint:"Short form of 'it is'.",sol:"It's = it is. So 'It's raining heavily.' is correct."},

{q:"Choose the correct passive voice: 'They completed the task.'",o:["The task was completed.","The task is completed.","Task was complete.","The task completed was."],a:0,hint:"Object becomes subject.",sol:"Passive form: The task was completed."},

{q:"Choose the correct preposition: She is afraid ___ snakes.",o:["of","from","with","by"],a:0,hint:"Common usage.",sol:"We say afraid of something."},

{q:"Select the synonym of 'Fragile'.",o:["Delicate","Strong","Hard","Heavy"],a:0,hint:"Easily broken.",sol:"Fragile means delicate."},

{q:"Identify the adjective: The sky looks beautiful today.",o:["beautiful","sky","today","looks"],a:0,hint:"Describes noun.",sol:"Beautiful describes sky."},

{q:"Choose the correct homophone: ___ book is on the table.",o:["Their","There","They're","Them"],a:0,hint:"Possession.",sol:"Their shows possession."},

{q:"Select the correctly spelled word.",o:["Occasion","Ocasion","Occassion","Occation"],a:0,hint:"Double c, single s.",sol:"Correct spelling is Occasion."},

{q:"Choose correct comparative: This puzzle is ___ than that one.",o:["harder","hardest","more hard","hard"],a:0,hint:"Comparative of hard.",sol:"Hard → harder."},

{q:"Select the correct indirect speech: He said, 'I will win.'",o:["He said that he would win.","He said that he will win.","He says he would win.","He said he wins."],a:0,hint:"Will changes to would.",sol:"Future changes to would in indirect speech."},

{q:"Choose the conjunction: I was tired ___ I continued working.",o:["but","and","so","because"],a:0,hint:"Shows contrast.",sol:"But shows contrast."},

{q:"Select the antonym of 'Expand'.",o:["Contract","Increase","Grow","Stretch"],a:0,hint:"Opposite of grow.",sol:"Expand opposite is contract."},

{q:"Choose the correct article: ___ umbrella.",o:["An","A","The","No"],a:0,hint:"Starts with vowel sound.",sol:"An umbrella."},

{q:"Identify the adverb: He spoke softly.",o:["softly","spoke","he","soft"],a:0,hint:"Describes verb.",sol:"Softly describes how he spoke."},

{q:"Choose the plural of 'Analysis'.",o:["Analyses","Analysis","Analysises","Analys"],a:0,hint:"Ends with -is.",sol:"Analysis → Analyses."},

{q:"Select synonym of 'Courageous'.",o:["Brave","Fearful","Lazy","Weak"],a:0,hint:"Not afraid.",sol:"Courageous means brave."},

{q:"Choose correct sentence.",o:["Each of the players has a medal.","Each of the players have medals.","Each players has medal.","Each player have medal."],a:0,hint:"Each takes singular verb.",sol:"Correct form uses has."},

{q:"Identify pronoun: Everyone should bring ___ book.",o:["his","their","our","your"],a:0,hint:"Traditional singular usage.",sol:"Correct answer: his."},

{q:"Choose antonym of 'Ancient'.",o:["Modern","Old","Past","Historic"],a:0,hint:"Opposite of very old.",sol:"Ancient opposite is modern."},

{q:"Select the correct tense: She ___ playing when I arrived.",o:["was","is","are","be"],a:0,hint:"Past continuous.",sol:"She was playing."},

{q:"Choose correct preposition: He insisted ___ paying.",o:["on","at","for","to"],a:0,hint:"Common phrase.",sol:"We say insist on."},

{q:"Identify noun: Honesty is valued.",o:["Honesty","valued","is","none"],a:0,hint:"Name of quality.",sol:"Honesty is noun."},

{q:"Choose synonym of 'Swift'.",o:["Fast","Slow","Weak","Late"],a:0,hint:"Speed related.",sol:"Swift means fast."},

{q:"Select correct question tag: You are ready, ___?",o:["aren't you","are you","do you","did you"],a:0,hint:"Positive → negative tag.",sol:"Correct tag is aren't you?"},

{q:"Choose correct form: Neither of the boys ___ present.",o:["is","are","were","have"],a:0,hint:"Neither is singular.",sol:"Neither takes singular verb."},

{q:"Select antonym of 'Victory'.",o:["Defeat","Success","Win","Triumph"],a:0,hint:"Opposite of win.",sol:"Victory opposite is defeat."},

{q:"Choose correct spelling.",o:["Knowledge","Knowlege","Knowldge","Knowladge"],a:0,hint:"Silent 'w'.",sol:"Correct spelling is Knowledge."},

{q:"Identify verb: Birds fly high.",o:["fly","birds","high","none"],a:0,hint:"Action word.",sol:"Fly is verb."},

{q:"Choose synonym of 'Enormous'.",o:["Huge","Tiny","Short","Little"],a:0,hint:"Very big.",sol:"Enormous means huge."}

],

science:[

{q:"Which part of plant transports water?",o:["Xylem","Phloem","Root hair","Leaf"],a:0,hint:"Carries water upward.",sol:"Xylem transports water."},

{q:"Which vitamin helps blood clotting?",o:["Vitamin K","Vitamin C","Vitamin D","Vitamin B"],a:0,hint:"Injury healing.",sol:"Vitamin K helps clotting."},

{q:"Which planet rotates fastest?",o:["Jupiter","Earth","Mars","Venus"],a:0,hint:"Largest planet.",sol:"Jupiter rotates fastest."},

{q:"Which gas is responsible for global warming?",o:["Carbon dioxide","Oxygen","Nitrogen","Hydrogen"],a:0,hint:"Greenhouse gas.",sol:"CO₂ causes global warming."},

{q:"Force due to Earth's pull?",o:["Gravity","Magnetism","Friction","Pressure"],a:0,hint:"Pull towards earth.",sol:"Gravity pulls objects."},

{q:"Which organ controls body activities?",o:["Brain","Heart","Kidney","Lungs"],a:0,hint:"Control center.",sol:"Brain controls body."},

{q:"Unit of electrical power?",o:["Watt","Volt","Ampere","Ohm"],a:0,hint:"Named after scientist.",sol:"Watt measures power."},

{q:"Which metal is best conductor?",o:["Silver","Iron","Copper","Aluminium"],a:0,hint:"Highest conductivity.",sol:"Silver is best conductor."},

{q:"Which blood cells carry oxygen?",o:["Red blood cells","White blood cells","Platelets","Plasma"],a:0,hint:"Contain hemoglobin.",sol:"RBC carry oxygen."},

{q:"Which energy is stored in stretched spring?",o:["Potential energy","Kinetic energy","Thermal","Light"],a:0,hint:"Stored energy.",sol:"Stretching stores potential energy."},

{q:"Which planet has maximum moons?",o:["Jupiter","Earth","Mars","Mercury"],a:0,hint:"Gas giant.",sol:"Jupiter has most moons."},

{q:"Which process converts liquid to gas?",o:["Evaporation","Condensation","Freezing","Melting"],a:0,hint:"Heat causes it.",sol:"Evaporation converts liquid to gas."},

{q:"Which organ purifies blood?",o:["Kidney","Liver","Heart","Brain"],a:0,hint:"Removes waste.",sol:"Kidney filters blood."},

{q:"Which part of ear maintains balance?",o:["Semicircular canals","Eardrum","Cochlea","Pinna"],a:0,hint:"Inner ear.",sol:"Semicircular canals control balance."},

{q:"Which gas do plants absorb?",o:["Carbon dioxide","Oxygen","Nitrogen","Hydrogen"],a:0,hint:"Photosynthesis input.",sol:"Plants absorb CO₂."},

{q:"Which animal is cold-blooded?",o:["Snake","Dog","Cow","Lion"],a:0,hint:"Reptile.",sol:"Snake is cold-blooded."},

{q:"Which nutrient gives energy?",o:["Carbohydrates","Vitamins","Minerals","Water"],a:0,hint:"Main energy source.",sol:"Carbohydrates give energy."},

{q:"Which layer of earth is hottest?",o:["Core","Crust","Mantle","Surface"],a:0,hint:"Innermost layer.",sol:"Core is hottest."},

{q:"Which instrument measures air pressure?",o:["Barometer","Thermometer","Hygrometer","Anemometer"],a:0,hint:"Weather tool.",sol:"Barometer measures pressure."},

{q:"Which part of plant makes food?",o:["Leaf","Root","Stem","Flower"],a:0,hint:"Contains chlorophyll.",sol:"Leaf performs photosynthesis."},

{q:"Which gas supports breathing?",o:["Oxygen","Nitrogen","Carbon dioxide","Helium"],a:0,hint:"Essential for life.",sol:"Oxygen supports respiration."},

{q:"Which energy comes from sun?",o:["Solar energy","Wind energy","Thermal","Nuclear"],a:0,hint:"Sunlight.",sol:"Solar energy comes from sun."},

{q:"Which joint allows rotation of neck?",o:["Pivot joint","Hinge joint","Ball & socket","Fixed"],a:0,hint:"Allows turning.",sol:"Neck has pivot joint."},

{q:"Which metal is used in electric wires?",o:["Copper","Iron","Gold","Lead"],a:0,hint:"Good conductor.",sol:"Copper used in wiring."},

{q:"Which gas extinguishes fire?",o:["Carbon dioxide","Oxygen","Nitrogen","Hydrogen"],a:0,hint:"Fire extinguisher.",sol:"CO₂ extinguishes fire."},

{q:"Which part of digestive system absorbs nutrients?",o:["Small intestine","Stomach","Liver","Kidney"],a:0,hint:"Long tube.",sol:"Small intestine absorbs nutrients."},

{q:"Which planet is known as Red Planet?",o:["Mars","Earth","Jupiter","Venus"],a:0,hint:"Iron oxide surface.",sol:"Mars is Red Planet."},

{q:"Which blood group is universal donor?",o:["O negative","A","B","AB"],a:0,hint:"Compatible with all.",sol:"O negative is universal donor."},

{q:"Which force slows moving objects?",o:["Friction","Gravity","Magnetism","Electric"],a:0,hint:"Opposes motion.",sol:"Friction slows objects."},

{q:"Which change is reversible?",o:["Melting ice","Burning paper","Rusting iron","Cooking food"],a:0,hint:"Can return to original state.",sol:"Melting ice is reversible."}

]


}



};
