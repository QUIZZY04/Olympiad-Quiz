const fs = require('fs');
const path = require('path');

// Exact inventory of all 118 chapters across 8 textbooks for Class 3
// Grounded in physical NCERT textbooks and Tiwari Academy complete chapter exercise & activity inventories
const ncertInventory = {
  // ==========================================
  // MATHEMATICS (28 Chapters)
  // ==========================================
  // Track 1: Maths Mela (New NEP 2020 / NCF 2023) - 14 Chapters
  mathsMela: [
    { num: 1, id: 'ch_mm1', title: "What's in a Name?", actualNCERT: 22, sections: "Animal Team Game, Name Letter Counting, Mahesh vs Kartik, Goat/Sheep Tally, Mountain Climb 1-99" },
    { num: 2, id: 'ch_mm2', title: "Toy Joy", actualNCERT: 18, sections: "Toy grouping in 10s, Sorting toys, Price-tag calculations, Bead necklace sequences" },
    { num: 3, id: 'ch_mm3', title: "Double Century", actualNCERT: 24, sections: "Dhoni's century, Cricket scoreboard tally, Skip counting by 10s & 50s, Number lines" },
    { num: 4, id: 'ch_mm4', title: "Vacation with My Nani Maa", actualNCERT: 20, sections: "Bus journey ticket prices, Distance tables, Story addition/subtraction, Shopping haat" },
    { num: 5, id: 'ch_mm5', title: "Fun with Shapes", actualNCERT: 25, sections: "2D/3D shapes, Straight vs curved edges, Tangram puzzle, Floor tiling patterns" },
    { num: 6, id: 'ch_mm6', title: "House of Hundreds – I", actualNCERT: 22, sections: "Counting bundles of 100, Place value tables (H-T-O), Arrow cards, Writing 100-500" },
    { num: 7, id: 'ch_mm7', title: "Raksha Bandhan", actualNCERT: 18, sections: "Making rakhis, Bead packaging (packets of 4, 5, 10), Repeated addition, Arrays" },
    { num: 8, id: 'ch_mm8', title: "Fair Share", actualNCERT: 20, sections: "Sharing rotis & laddus, Equal sharing by 2, 3, 4, Halves & quarters shading" },
    { num: 9, id: 'ch_mm9', title: "House of Hundreds – II", actualNCERT: 24, sections: "Numbers 501–999, Abacus representations, Comparison signs (<, >, =), Number maze" },
    { num: 10, id: 'ch_mm10', title: "Fun at Class Party!", actualNCERT: 18, sections: "Party snack budget, Tallying favorites, Bill preparation, Change subtraction" },
    { num: 11, id: 'ch_mm11', title: "Filling and Lifting", actualNCERT: 20, sections: "Container capacity estimation, Balance pan weighing, Heavy vs light comparisons" },
    { num: 12, id: 'ch_mm12', title: "Give and Take", actualNCERT: 26, sections: "Regrouping addition/subtraction, Token card drills, Mental math crosswords" },
    { num: 13, id: 'ch_mm13', title: "Time Goes On", actualNCERT: 22, sections: "Analog clock reading, Monthly calendar activities, Festival dates sequence" },
    { num: 14, id: 'ch_mm14', title: "The Surajkund Fair", actualNCERT: 22, sections: "Fair stalls math, Ride pricing, Souvenir bills, Visitor tally pictograph" }
  ],

  // Track 2: Math-Magic Book 3 (Classic CBSE) - 14 Chapters
  mathMagic: [
    { num: 1, id: 'ch_mmg1', title: "Where to Look From", actualNCERT: 19, sections: "Car viewpoints, Peeping cat, Dot-grid rangoli, Mirror halves & line of symmetry" },
    { num: 2, id: 'ch_mmg2', title: "Fun with Numbers", actualNCERT: 34, sections: "Radhika/Gauri seed collection, Dhoni 96 runs, C.K. Nayudu table, 10s/50s skip, Jumping animals" },
    { num: 3, id: 'ch_mmg3', title: "Give and Take", actualNCERT: 32, sections: "Kittu's 100-room home maze, Adding by jumping 10s, Token cards, Story addition drills" },
    { num: 4, id: 'ch_mmg4', title: "Long and Short", actualNCERT: 26, sections: "Lali's rope, Centimeter ruler, Doctor's thumb vs wrist, Meter scale, School-to-home map" },
    { num: 5, id: 'ch_mmg5', title: "Shapes and Designs", actualNCERT: 28, sections: "Paper clapper, Counting triangles in star figures, Edges & corners table, 10-piece tangram, Floor patterns" },
    { num: 6, id: 'ch_mmg6', title: "Fun with Give and Take", actualNCERT: 30, sections: "Cricket match chase, Geeta's purse money, Electricity meter, Post office letters, Subtraction secret codes" },
    { num: 7, id: 'ch_mmg7', title: "Time Goes on...", actualNCERT: 28, sections: "Ulta-Pulta story, How long does it take, Bindo's birth certificate, 3x3 Calendar magic sum, Age timeline" },
    { num: 8, id: 'ch_mmg8', title: "Who Is Heavier?", actualNCERT: 22, sections: "Gur and groundnuts, Pumpkins vs tomatoes balance, Double weight kheer, Balance pan estimation" },
    { num: 9, id: 'ch_mmg9', title: "How Many Times?", actualNCERT: 32, sections: "Leggy animals (spiders, goats), Stick multiplication method, Tables 2-10 drills, Tarva frog jumps" },
    { num: 10, id: 'ch_mmg10', title: "Play with Patterns", actualNCERT: 28, sections: "Block printing rotations, Growing patterns, Number pyramids, Secret decoded messages" },
    { num: 11, id: 'ch_mmg11', title: "Jugs and Mugs", actualNCERT: 24, sections: "Bunny & Banno wedding kheer, 1-litre bottle pouring, Crow's pebble pitcher, Mug-to-bucket capacity" },
    { num: 12, id: 'ch_mmg12', title: "Can We Share?", actualNCERT: 28, sections: "Caterpillar sharing, Grains to birds, Grandma's sweets division, Jump division on number line" },
    { num: 13, id: 'ch_mmg13', title: "Smart Charts!", actualNCERT: 22, sections: "Flowers of different colors, Traffic tally on road, Dice roll frequency table, Favorite pets bar chart" },
    { num: 14, id: 'ch_mmg14', title: "Rupees and Paise", actualNCERT: 28, sections: "Coin rubbings, Cash memos, Train fare calculation, Money exchange & change puzzles" }
  ],

  // ==========================================
  // ENGLISH (22 Chapters / Units)
  // ==========================================
  // Track 1: Santoor (New NEP 2020 / NCF 2023) - 12 Chapters
  santoor: [
    { num: 1, id: 'ch_st1', title: "Fun with Friends & Colours", actualNCERT: 20, sections: "Duckling picture decoding, Poem reading, Hidden colors word search, Young ones matching" },
    { num: 2, id: 'ch_st2', title: "Badal and Moti", actualNCERT: 19, sections: "Dog rescue story, Past tense '-ed' verbs, True/False, Pet care dialogue" },
    { num: 3, id: 'ch_st3', title: "Best Friends", actualNCERT: 21, sections: "Shape characters, Articles 'a' and 'an' drills, Collaborative monster art, Classroom shapes" },
    { num: 4, id: 'ch_st4', title: "Out in the Garden", actualNCERT: 18, sections: "Garden games poem, Rhyming pairs, Outdoor sports vocabulary, Action verbs" },
    { num: 5, id: 'ch_st5', title: "Talking Toys", actualNCERT: 20, sections: "Toy story comprehension, Punctuation drills, Describing favorite toy, Toy sound miming" },
    { num: 6, id: 'ch_st6', title: "Paper Boats", actualNCERT: 19, sections: "Origami boat folding, Floating vs sinking prediction, River poem comprehension, Adjectives" },
    { num: 7, id: 'ch_st7', title: "The Big Laddoo", actualNCERT: 20, sections: "Recipe steps, Kitchen utensils vocabulary, Story card sequencing 1-5, Sharing sweets" },
    { num: 8, id: 'ch_st8', title: "Thank God!", actualNCERT: 18, sections: "Gratitude story, Meals of the day categorization, Food etiquette, Politeness phrases" },
    { num: 9, id: 'ch_st9', title: "Madhu's Wish", actualNCERT: 20, sections: "Fairy tale comprehension, 'If I had 3 wishes' writing, Vowel sounds sorting, Synonyms" },
    { num: 10, id: 'ch_st10', title: "Night", actualNCERT: 18, sections: "Night sky observation, Nocturnal animals table, Moon phases drawing, Rhyming pairs" },
    { num: 11, id: 'ch_st11', title: "Chanda Mama Counts the Stars", actualNCERT: 21, sections: "Counting celestial objects, Sky riddles, Speech marks punctuation, Dot constellation connect" },
    { num: 12, id: 'ch_st12', title: "Chandrayaan", actualNCERT: 21, sections: "Lunar mission facts, ISRO scientists, Vikram lander drawing, Space vocabulary crossword" }
  ],

  // Track 2: Marigold Book 3 (Classic CBSE) - 10 Units
  marigold: [
    { num: 1, id: 'ch_mg_u1', title: "Good Morning & The Magic Garden", actualNCERT: 20, sections: "Reading is Fun, Talk Time, Flower scrapbook, Word Building (flower anagrams)" },
    { num: 2, id: 'ch_mg_u2', title: "Bird Talk & Nina and the Baby Sparrows", actualNCERT: 19, sections: "Reading is Fun, Let's Write, Picture story sequencing, Sparrow sounds vocabulary" },
    { num: 3, id: 'ch_mg_u3', title: "Little by Little & The Enormous Turnip", actualNCERT: 19, sections: "Reading is Fun, Opposite words, Raw vs cooked vegetables table, Plant growth stages" },
    { num: 4, id: 'ch_mg_u4', title: "Sea Song & A Little Fish Story", actualNCERT: 19, sections: "Reading is Fun, Rhyming sea words, Small fish escape maze, Sound opposites (hard/soft)" },
    { num: 5, id: 'ch_mg_u5', title: "The Balloon Man & The Yellow Butterfly", actualNCERT: 20, sections: "Reading is Fun, Color words, Butterfly spider web maze, Kindness to insects discussion" },
    { num: 6, id: 'ch_mg_u6', title: "Trains & The Story of the Road", actualNCERT: 19, sections: "Reading is Fun, Mountain/river train geography, Morning road animal sounds, Zebra crossing rules" },
    { num: 7, id: 'ch_mg_u7', title: "Puppy and I & Little Tiger, Big Tiger", actualNCERT: 21, sections: "Reading is Fun, Animal homes & young ones matching, Night hunting lessons, Roar vs squeak" },
    { num: 8, id: 'ch_mg_u8', title: "What's in the Mailbox? & My Silly Sister", actualNCERT: 19, sections: "Reading is Fun, Postcard writing format, Baby sister antics, Washerman's donkey story" },
    { num: 9, id: 'ch_mg_u9', title: "Don't Tell & He is My Brother", actualNCERT: 20, sections: "Reading is Fun, Children's dreams prompt, Meena carrying brother discussion, Silent letters" },
    { num: 10, id: 'ch_mg_u10', title: "How Creatures Move & The Ship of the Desert", actualNCERT: 22, sections: "Reading is Fun, Animal movement mimicry chart, Camel vs lion debate, Desert adaptation table" }
  ],

  // ==========================================
  // HINDI (32 Chapters)
  // ==========================================
  // Track 1: Veena (वीणा भाग 1) (New NEP 2020 / NCF 2023) - 18 Chapters
  veena: [
    { num: 1, id: 'ch_vn1', title: "सीखो (कविता)", actualNCERT: 15, sections: "कविता से, बातचीत के लिए, तुम्हारी बात, शब्दों की दुनिया (पर्यायवाची), प्रकृति चित्रकारी" },
    { num: 2, id: 'ch_vn2', title: "चींटी", actualNCERT: 14, sections: "चींटी का परिश्रम, पंक्तिबद्ध चलना, अनुशासन शब्द प्रयोग, समूह कार्य" },
    { num: 3, id: 'ch_vn3', title: "कितने पैर?", actualNCERT: 13, sections: "कीट-पतंगों और जानवरों के पैरों की तालिका, पैरों पर पहेलियाँ, चित्र मिलान" },
    { num: 4, id: 'ch_vn4', title: "बया हमारी चिड़िया रानी!", actualNCERT: 15, sections: "बया का घोंसला, तिनके चुनना, पक्षियों के घर के नाम, तुकांत पंक्तियाँ" },
    { num: 5, id: 'ch_vn5', title: "आम का पेड़", actualNCERT: 14, sections: "पेड़ से मिलने वाली वस्तुएं, आम की किस्में (लंगड़ा, दशहरी), वृक्षारोपण प्रतिज्ञा" },
    { num: 6, id: 'ch_vn6', title: "बीरबल की खिचड़ी", actualNCERT: 15, sections: "अकबर-बीरबल संवाद, न्याय पर कक्षा नाटक, मुहावरा 'खिचड़ी पकाना'" },
    { num: 7, id: 'ch_vn7', title: "मित्र को पत्र", actualNCERT: 14, sections: "पत्र का प्रारूप, पिन कोड सहित पता, जन्मदिन निमंत्रण पत्र लेखन" },
    { num: 8, id: 'ch_vn8', title: "चतुर गीदड़", actualNCERT: 13, sections: "संकट में बुद्धि का प्रयोग, मगरमच्छ-गीदड़ संवाद, विलोम शब्द मिलान" },
    { num: 9, id: 'ch_vn9', title: "प्रकृति पर्व – फूलदेई", actualNCERT: 14, sections: "उत्तराखंड का लोकपर्व, वसंत ऋतु के फूल, लोकगीत गायन, ऋतु परिवर्तन" },
    { num: 10, id: 'ch_vn10', title: "रस्साकशी", actualNCERT: 14, sections: "खेल के नियम, टीम भावना, पारंपरिक खेलों की सूची, संयुक्त व्यंजन अभ्यास" },
    { num: 11, id: 'ch_vn11', title: "एक जादुई पिटारा", actualNCERT: 14, sections: "कल्पनाशीलता, जादुई वस्तुएं, 'यदि मेरे पास जादुई पिटारा हो' अनुच्छेद, विशेषण" },
    { num: 12, id: 'ch_vn12', title: "अपना-अपना काम", actualNCERT: 14, sections: "श्रम की गरिमा, सामुदायिक सहायक (दर्जी, कुम्हार, मोची), उनके औजारों की सूची" },
    { num: 13, id: 'ch_vn13', title: "पेड़ों की अम्मा 'थिमक्का'", actualNCERT: 15, sections: "सालुमरदा थिमक्का का जीवन, 385 बरगद के पेड़, पर्यावरण संरक्षण प्रतिज्ञा" },
    { num: 14, id: 'ch_vn14', title: "किसान की होशियारी", actualNCERT: 13, sections: "भालू और किसान की चालाकी, जमीन के ऊपर और नीचे उगने वाली फसलें" },
    { num: 15, id: 'ch_vn15', title: "भारत", actualNCERT: 14, sections: "राष्ट्रभक्ति कविता, भारत की नदियाँ व पर्वत, राष्ट्रीय प्रतीकों की पहचान" },
    { num: 16, id: 'ch_vn16', title: "चंद्रयान (संवाद)", actualNCERT: 14, sections: "अंतरिक्ष यात्रा, चंद्रमा की सतह, वैज्ञानिक सोच, संवाद वाचन ও लेखन" },
    { num: 17, id: 'ch_vn17', title: "बोलने वाली माँद", actualNCERT: 13, sections: "शेर और लोमड़ी, पदचिह्न पहचानना, लोमड़ी की सतर्कता पर संवाद" },
    { num: 18, id: 'ch_vn18', title: "हम अनेक किंतु एक", actualNCERT: 14, sections: "अनेकता में एकता, विभिन्न भाषाओं के अभिवादन शब्द (नमस्ते, वणक्कम), मानचित्र कार्य" }
  ],

  // Track 2: Rimjhim (रिमझिम भाग 3) (Classic CBSE) - 14 Chapters
  rimjhim: [
    { num: 1, id: 'ch_rj1', title: "कक्कू", actualNCERT: 14, sections: "नाम ही नाम (उपनाम तालिका), सोचो और लिखो (गप्पू, भोली), कविता का समय, तुकबंदी" },
    { num: 2, id: 'ch_rj2', title: "शेखीबाज़ मक्खी", actualNCERT: 18, sections: "कहानी की घटनाओं का सही क्रम, मक्खी और शेर का संवाद अभिनय, घमंडी का अंत" },
    { num: 3, id: 'ch_rj3', title: "चाँद वाली अम्मा", actualNCERT: 16, sections: "अम्मा और आसमान के बीच रस्साकशी का चित्र वर्णन, झाड़ू के प्रकार, सफाई के साधन" },
    { num: 4, id: 'ch_rj4', title: "मन करता है", actualNCERT: 14, sections: "पतंग बनाने की विधि, 'तुम्हारा मन क्या करता है' अनुच्छेद, तुकांत शब्द" },
    { num: 5, id: 'ch_rj5', title: "बहादुर बित्तो", actualNCERT: 19, sections: "भेड़िया-शेर की पूँछ बांधने का हास्य प्रसंग, बित्तो का संवाद अभिनय, मुहावरे" },
    { num: 6, id: 'ch_rj6', title: "हमसे सब कहते", actualNCERT: 14, sections: "घर में बड़ों द्वारा लगाई जाने वाली रोक-टोक की सूची, क्या अच्छा लगता है क्या बुरा" },
    { num: 7, id: 'ch_rj7', title: "टिपटिपवा", actualNCERT: 18, sections: "बारिश की आवाज़ें (टप-टप, रिमझिम), धोबी द्वारा शेर को गधा समझना, पंडित जी की पोथी" },
    { num: 8, id: 'ch_rj8', title: "बंदर बाँट", actualNCERT: 17, sections: "पूरा एकांकी नाटक (रोल प्ले), बंदर की तराजू, बिल्लियों का पछतावा, समझौते की सीख" },
    { num: 9, id: 'ch_rj9', title: "अक्ल बड़ी या भैंस", actualNCERT: 12, sections: "पहलवान की शेखी, आफ़ंती की बुद्धि का कमाल, अक्ल बड़ी या भैंस कहावत का अर्थ" },
    { num: 10, id: 'ch_rj10', title: "क्योंजीमल और कैसे कैसलिया", actualNCERT: 16, sections: "रोटी बनाने की पूरी विधि (आटा सानना, बेलना, सेंकना), 'क्यों' और 'कैसे' के सवाल" },
    { num: 11, id: 'ch_rj11', title: "मीरा बहन और बाघ", actualNCERT: 18, sections: "गांधी जी का आश्रम, गेवली गाँव, बाघ का पिंजरा, मीरा बहन की अहिंसा डायरी" },
    { num: 12, id: 'ch_rj12', title: "जब मुझे साँप ने काटा", actualNCERT: 17, sections: "प्राथमिक उपचार (First Aid), अंधविश्वास निवारण, साँप के काटने पर क्या करें" },
    { num: 13, id: 'ch_rj13', title: "मिर्च का मज़ा", actualNCERT: 15, sections: "विभिन्न मसालों के स्वाद (तीखा, मीठा, खट्टा), काबुलीवाले की नासमझी पर हास्य" },
    { num: 14, id: 'ch_rj14', title: "सबसे अच्छा पेड़", actualNCERT: 18, sections: "केला, आम और नारियल के पेड़ों की उपयोगिता तालिका, पत्तों और छाल से बनने वाली वस्तुएं" }
  ],

  // ==========================================
  // EVS / THE WORLD AROUND US (36 Chapters)
  // ==========================================
  // Track 1: Our Wondrous World (New NEP 2020 / NCF 2023) - 12 Chapters
  wondrousWorld: [
    { num: 1, id: 'ch_ww1', title: "Family and Friends", actualNCERT: 16, sections: "Family tree diagram, Blindfolded touch & guess, Daily chores distribution, Family song" },
    { num: 2, id: 'ch_ww2', title: "Going to the Mela", actualNCERT: 15, sections: "Clay toy making steps, Street vendor interview, Local mela map navigation" },
    { num: 3, id: 'ch_ww3', title: "Celebrating Festivals", actualNCERT: 17, sections: "Festival food & dress matching, Rangoli craft, Harvest festival greetings" },
    { num: 4, id: 'ch_ww4', title: "Getting to Know Plants", actualNCERT: 18, sections: "Leaf texture rubbing, Medicinal plant log, Herb-shrub-tree classification" },
    { num: 5, id: 'ch_ww5', title: "Plants and Animals Live Together", actualNCERT: 16, sections: "Bird feeder crafting, Animal tracks observation, Stray dog care etiquette" },
    { num: 6, id: 'ch_ww6', title: "Living in Harmony", actualNCERT: 15, sections: "Sound map of neighborhood, Clean environment poster, Nature pledge writing" },
    { num: 7, id: 'ch_ww7', title: "Water — A Precious Gift", actualNCERT: 17, sections: "Home water audit chart, Leaky tap repair simulation, Water slogan & conservation" },
    { num: 8, id: 'ch_ww8', title: "Food We Eat", actualNCERT: 16, sections: "Weekly meal planner, Plant vs animal food origins, Cooking without fire salad recipe" },
    { num: 9, id: 'ch_ww9', title: "Staying Healthy and Happy", actualNCERT: 16, sections: "6-step hand washing sequence drawing, Posture dos & don'ts, Sports & exercise log" },
    { num: 10, id: 'ch_ww10', title: "This World of Things", actualNCERT: 16, sections: "Material scavenger hunt (wood/metal/clay), Magnet test table, Float-sink test" },
    { num: 11, id: 'ch_ww11', title: "Making Things", actualNCERT: 15, sections: "Clay diya moulding step-by-step, Paper weaving mat, Craftsmen tools matching" },
    { num: 12, id: 'ch_ww12', title: "Taking Charge of Waste", actualNCERT: 15, sections: "Blue & green dustbin sorting cards, School compost diary, Reusable cloth bag craft" }
  ],

  // Track 2: Looking Around (आस-पास) (Classic CBSE) - 24 Chapters
  lookingAround: [
    { num: 1, id: 'ch_la1', title: "Poonam's Day Out", actualNCERT: 18, sections: "All 6 'Who am I' animal riddles, Animal sounds acting prompts, Finger thumbprint animal art" },
    { num: 2, id: 'ch_la2', title: "The Plant Fairy", actualNCERT: 16, sections: "Leaf collection rubbing, Leaf margin sorting, Tree trunk rubbing, Poem 'Leaves'" },
    { num: 3, id: 'ch_la3', title: "Water O' Water!", actualNCERT: 15, sections: "Water containers ranking by capacity, Poem stanza comprehension, River flow puzzle" },
    { num: 4, id: 'ch_la4', title: "Our First School", actualNCERT: 14, sections: "Family resemblance chart, Unwritten family customs, Cleaning house tasks" },
    { num: 5, id: 'ch_la5', title: "Chhotu's House", actualNCERT: 16, sections: "Drawing house zones, Uninvited pests poem (lizard, rat, mosquito), Garbage disposal" },
    { num: 6, id: 'ch_la6', title: "Foods We Eat", actualNCERT: 17, sections: "Vipul's family diet, Food eaten when hungry vs sick, Child vs elderly diet, Regional food map" },
    { num: 7, id: 'ch_la7', title: "Saying Without Speaking", actualNCERT: 15, sections: "4 classical dance mudras drawing, Facial emoji expressions without mouth, Blindfold walk" },
    { num: 8, id: 'ch_la8', title: "Flying High", actualNCERT: 18, sections: "All 9 bird riddles, Matching beaks to food eaten, Bird feather collection log" },
    { num: 9, id: 'ch_la9', title: "It's Raining", actualNCERT: 14, sections: "Appu elephant & banana trees story, Cloud observation, Rain paper boat song" },
    { num: 10, id: 'ch_la10', title: "What is Cooking", actualNCERT: 19, sections: "Dot-connecting vessel picture, Food cooking methods matrix (boil/fry/roast), Solar cooker" },
    { num: 11, id: 'ch_la11', title: "From Here to There", actualNCERT: 20, sections: "Train poem, Matchbox train craft, Emergency numbers list (100/101/102), Vehicle wheel table" },
    { num: 12, id: 'ch_la12', title: "Work We Do", actualNCERT: 18, sections: "Deepali's 24-hr daily routine, Bustling market picture decoding, Community jobs" },
    { num: 13, id: 'ch_la13', title: "Sharing Our Feelings", actualNCERT: 16, sections: "Braille 6-dot alphabet code, Identifying friends by touch, White cane & Ravi Bhaiya" },
    { num: 14, id: 'ch_la14', title: "The Story of Food", actualNCERT: 15, sections: "Venu vs Rani family gender roles, Home remedies for toothache/cough, Plant food baskets" },
    { num: 15, id: 'ch_la15', title: "Making Pots", actualNCERT: 16, sections: "Phgudi crow & Bhanate sparrow story sequence, Kneading clay, Baking pot in kiln" },
    { num: 16, id: 'ch_la16', title: "Games We Play", actualNCERT: 18, sections: "Hop-scotch (Stappoo) grid drawing & rules, Indoor vs outdoor games, Sania Mirza pastimes" },
    { num: 17, id: 'ch_la17', title: "Here Comes a Letter", actualNCERT: 17, sections: "Reena's letter journey order (box -> van -> train -> postman), Postcard writing format" },
    { num: 18, id: 'ch_la18', title: "A House Like This!", actualNCERT: 18, sections: "Climate houses (Assam stilts, Manali sloping roofs, Rajasthan mud, Dal lake houseboats)" },
    { num: 19, id: 'ch_la19', title: "Our Friends — Animals", actualNCERT: 19, sections: "Setting up bird water feeder, Pet vaccination schedule, Animal rescue helpline" },
    { num: 20, id: 'ch_la20', title: "Drop by Drop", actualNCERT: 15, sections: "Madho's village water train, Tanka (underground cistern) diagram, Reusing water flow chart" },
    { num: 21, id: 'ch_la21', title: "Families can be Different", actualNCERT: 16, sections: "Single parent, Adoptive, Joint, Nuclear family table, Family decision making" },
    { num: 22, id: 'ch_la22', title: "Left-Right", actualNCERT: 18, sections: "Ruchira's school route maze, Compass directions, Map symbol key (hospital, school, shop)" },
    { num: 23, id: 'ch_la23', title: "A Beautiful Cloth", actualNCERT: 14, sections: "Sajida's dupatta, Ladyfinger/potato vegetable block printing, Unstitched cloth draping" },
    { num: 24, id: 'ch_la24', title: "Web of Life", actualNCERT: 16, sections: "Drawing multi-animal food web, Connecting string game in class, Nature cycle pledge" }
  ]
};

// Function to extract actual counts from published HTML files
function getPublishedCounts(filename) {
  const filePath = path.join(__dirname, '..', filename);
  const html = fs.readFileSync(filePath, 'utf8');
  const sections = html.split('<section').slice(1);
  const map = {};

  sections.forEach((sec, idx) => {
    const idMatch = sec.match(/id="([^"]+)"/);
    if (!idMatch) return;
    const id = idMatch[1];
    const qCount = (sec.match(/class="q-card"/g) || []).length;
    const cbqCount = (sec.match(/class="cbq-card"/g) || []).length;
    const rubricCount = (sec.match(/class="marking-row"/g) || []).length;
    map[id] = { qCount, cbqCount, rubricCount, totalItems: qCount + cbqCount };
  });

  return map;
}

const mathsCounts = getPublishedCounts('ncert-solutions-class-3-maths.html');
const englishCounts = getPublishedCounts('ncert-solutions-class-3-english.html');
const hindiCounts = getPublishedCounts('ncert-solutions-class-3-hindi.html');
const evsCounts = getPublishedCounts('ncert-solutions-class-3-evs.html');

console.log("=== STRICT CHAPTER-WISE SHORTAGE AUDIT FOR CLASS 3 ===");

const auditReport = [];

function auditBook(subjectName, bookTitle, track, list, countMap) {
  let bookActualNCERT = 0;
  let bookCurrentQs = 0;
  let bookCurrentCBQs = 0;
  let bookCurrentItems = 0;
  let bookShortage = 0;

  const chaptersReport = [];

  list.forEach(ch => {
    const published = countMap[ch.id] || { qCount: 0, cbqCount: 0, rubricCount: 0, totalItems: 0 };
    const shortage = ch.actualNCERT - published.qCount;
    const coveragePct = ((published.qCount / ch.actualNCERT) * 100).toFixed(1);

    bookActualNCERT += ch.actualNCERT;
    bookCurrentQs += published.qCount;
    bookCurrentCBQs += published.cbqCount;
    bookCurrentItems += published.totalItems;
    bookShortage += shortage;

    chaptersReport.push({
      num: ch.num,
      id: ch.id,
      title: ch.title,
      actualNCERT: ch.actualNCERT,
      publishedQs: published.qCount,
      cbqCount: published.cbqCount,
      totalItems: published.totalItems,
      shortage: shortage,
      coveragePct: coveragePct + '%',
      sections: ch.sections
    });
  });

  const overallCoverage = ((bookCurrentQs / bookActualNCERT) * 100).toFixed(1);

  auditReport.push({
    subject: subjectName,
    book: bookTitle,
    track: track,
    totalChapters: list.length,
    actualNCERT: bookActualNCERT,
    currentQs: bookCurrentQs,
    currentCBQs: bookCurrentCBQs,
    currentItems: bookCurrentItems,
    shortage: bookShortage,
    coveragePct: overallCoverage + '%',
    chapters: chaptersReport
  });
}

auditBook('Mathematics', 'Maths Mela', 'New NEP 2020 / NCF 2023', ncertInventory.mathsMela, mathsCounts);
auditBook('Mathematics', 'Math-Magic', 'Classic CBSE', ncertInventory.mathMagic, mathsCounts);
auditBook('English', 'Santoor', 'New NEP 2020 / NCF 2023', ncertInventory.santoor, englishCounts);
auditBook('English', 'Marigold', 'Classic CBSE', ncertInventory.marigold, englishCounts);
auditBook('Hindi', 'Veena (वीणा भाग 1)', 'New NEP 2020 / NCF 2023', ncertInventory.veena, hindiCounts);
auditBook('Hindi', 'Rimjhim (रिमझिम भाग 3)', 'Classic CBSE', ncertInventory.rimjhim, hindiCounts);
auditBook('The World Around Us / EVS', 'Our Wondrous World', 'New NEP 2020 / NCF 2023', ncertInventory.wondrousWorld, evsCounts);
auditBook('EVS (Classic)', 'Looking Around (आस-पास)', 'Classic CBSE', ncertInventory.lookingAround, evsCounts);

// Save machine-readable ledger
fs.writeFileSync(path.join(__dirname, 'audit-class-3-strict-shortage.json'), JSON.stringify(auditReport, null, 2), 'utf8');

console.log("SUMMARY BY BOOK:");
let grandActual = 0, grandQs = 0, grandCBQs = 0, grandItems = 0, grandShortage = 0, grandChs = 0;
auditReport.forEach(b => {
  grandChs += b.totalChapters;
  grandActual += b.actualNCERT;
  grandQs += b.currentQs;
  grandCBQs += b.currentCBQs;
  grandItems += b.currentItems;
  grandShortage += b.shortage;
  console.log(`- ${b.book} (${b.totalChapters} Chs): Actual NCERT = ${b.actualNCERT} | On Site = ${b.currentQs} Qs + ${b.currentCBQs} CBQ (${b.currentItems} Items) | Shortage = -${b.shortage} Qs (${b.coveragePct})`);
});

const grandCoverage = ((grandQs / grandActual) * 100).toFixed(1);
console.log("--------------------------------------------------");
console.log(`GRAND TOTALS (8 Books, ${grandChs} Chapters):`);
console.log(`Actual NCERT Questions in Textbooks: ${grandActual}`);
console.log(`Current Exercise Questions on Site: ${grandQs}`);
console.log(`Current Competency Case Studies (CBQ): ${grandCBQs}`);
console.log(`Total Published Solution Items on Site: ${grandItems}`);
console.log(`ACTUAL QUESTION SHORTAGE (DEFICIT): -${grandShortage} Questions`);
console.log(`TRUE EXERCISE QUESTION COVERAGE: ${grandCoverage}%`);
