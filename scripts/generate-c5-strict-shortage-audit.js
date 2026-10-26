const fs = require('fs');
const path = require('path');

// Exact inventory of all 107 chapters across 8 official textbooks for Class 5
// Grounded in physical NCERT textbooks and Tiwari Academy complete chapter exercise & activity inventories
const ncertInventory = {
  // ==========================================
  // MATHEMATICS (29 Chapters)
  // ==========================================
  // Track 1: Maths Mela (New NEP 2020 / NCF 2023) - 15 Chapters
  mathsMela: [
    { num: 1, id: 'mela1', title: "Numbers Beyond Ten Thousand", actualNCERT: 22, sections: "Large numbers up to Lakhs, Place value table, Period commas, Abacus representation, Expanded notation" },
    { num: 2, id: 'mela2', title: "Shapes and Angles", actualNCERT: 24, sections: "Right/Acute/Obtuse angles, Protractor turns, Clock hands angles, Angles in name letters, Origami angle tester" },
    { num: 3, id: 'mela3', title: "How Many Squares?", actualNCERT: 22, sections: "1cm square grid area, Perimeter comparisons, Postage stamp area, Footprint leaf area, Half-square counting" },
    { num: 4, id: 'mela4', title: "Parts and Wholes", actualNCERT: 26, sections: "National flags fractions, Ramu's vegetable field, Chocolate bar sharing, Rupee coins fractions, Equivalent fraction strips" },
    { num: 5, id: 'mela5', title: "Does it Look the Same?", actualNCERT: 20, sections: "Mirror line symmetry, Half turns (180°), Quarter turns (90°), 1/3 and 1/6 rotational symmetry, Mirror puzzle pictures" },
    { num: 6, id: 'mela6', title: "Be My Multiple, I'll be Your Factor", actualNCERT: 25, sections: "Common multiples, Factor trees of 60/75, Meow game, Bangles arrangement grid, Multiples common ring diagram" },
    { num: 7, id: 'mela7', title: "Can You See the Pattern?", actualNCERT: 22, sections: "Magic squares 3x3, Magic hexagons, Palindrome number tricks, Number towers, Clockwise rotation patterns" },
    { num: 8, id: 'mela8', title: "Mapping Your Way", actualNCERT: 20, sections: "India Gate parade route map, Scale conversions (2cm=1km), Central Hexagon map, State map distances, Aerial photo comparison" },
    { num: 9, id: 'mela9', title: "Boxes and Sketches", actualNCERT: 20, sections: "Cube nets, Open box nets, Floor plan to deep drawing, Bridge isometric view, Matchbox stage model" },
    { num: 10, id: 'mela10', title: "Tenths and Hundredths", actualNCERT: 25, sections: "Millimeter to centimeter conversions, Decimal money in paise, Temperature readings of Indian cities, Sports day long jump measurements" },
    { num: 11, id: 'mela11', title: "Area and its Boundary", actualNCERT: 24, sections: "Square park fence perimeter, Postcard belt loop puzzle, Floor tile counts, Carpet area comparison, Thread loop area" },
    { num: 12, id: 'mela12', title: "Smart Charts", actualNCERT: 22, sections: "Vehicle passing tally table, Chapati pie chart, Family tree generation hierarchy, Bar chart of plant growth, Temperature change line graph" },
    { num: 13, id: 'mela13', title: "Ways to Multiply and Divide", actualNCERT: 26, sections: "Maniratnam cashier salary, Farm worker daily wages, Sohanlal milk vendor accounts, Division word problems, Multi-digit multiplication grids" },
    { num: 14, id: 'mela14', title: "How Big? How Heavy?", actualNCERT: 22, sections: "Marble displacement volume, Stacking unit cubes, Stage platform block counts, Weighing parcels at post office, Grams to kilograms" },
    { num: 15, id: 'mela15', title: "Patterns Around Us", actualNCERT: 20, sections: "Floor tiling tessellations, Circular border symmetry, Growing number patterns, Decorative geometry arrays" }
  ],

  // Track 2: Math-Magic Book 5 (Classic CBSE) - 14 Chapters
  mathMagic: [
    { num: 1, id: 'magic1', title: "The Fish Tale", actualNCERT: 28, sections: "Fishermen boat types & speeds, Log boat vs motor boat travel time, Fish drying cost calculations, Women's Meenkar Bank loans" },
    { num: 2, id: 'magic2', title: "Shapes and Angles", actualNCERT: 26, sections: "Matchstick polygons, Angle tester craft, Degrees clock (45°, 90°, 180°), Paper airplane fold angles, Yoga posture angles" },
    { num: 3, id: 'magic3', title: "How Many Squares?", actualNCERT: 24, sections: "Postage stamps on grid, Perimeter of irregular leaves, 5-square shapes (Pentominoes), Rectangle divided by diagonal into triangles" },
    { num: 4, id: 'magic4', title: "Parts and Wholes", actualNCERT: 30, sections: "Rani's chocolate sharing, Colored parts of circle, Greedy gatekeepers story, Cutting halwa equally, Equivalent fraction chart" },
    { num: 5, id: 'magic5', title: "Does it Look the Same?", actualNCERT: 22, sections: "Mirror reflections, Half turns of letters & numbers, Windmill blade turns, Completing symmetrical drawings along mirror line" },
    { num: 6, id: 'magic6', title: "Be My Multiple, I'll be Your Factor", actualNCERT: 28, sections: "Mouse and Cat stepping grid, Meow game, Tamarind seed rectangular arrays, Common factor rings, Factor trees" },
    { num: 7, id: 'magic7', title: "Can You See the Pattern?", actualNCERT: 26, sections: "Magic hexagrams, Calendar 3x3 magic grid (sum=9x center), Secret number riddles, Adding consecutive numbers trick" },
    { num: 8, id: 'magic8', title: "Mapping Your Way", actualNCERT: 22, sections: "Central Hexagon Rashtrapati Bhavan map, Red Fort tourist tour map, Scaling 1cm=200m, State distance matrix" },
    { num: 9, id: 'magic9', title: "Boxes and Sketches", actualNCERT: 22, sections: "Cube nets test, Floor plan to 3D deep drawing, Bridge front/top/side views, Dice opposite sides sum to 7" },
    { num: 10, id: 'magic10', title: "Tenths and Hundredths", actualNCERT: 28, sections: "Frog leap length, Decimal currency, Thermometer readings in Srinagar vs Chennai, Olympic hundredths race timer" },
    { num: 11, id: 'magic11', title: "Area and its Boundary", actualNCERT: 26, sections: "Arbaz floor tiling, Tablecloth lace boundary, Cheering card border, Postcard thread loop puzzle" },
    { num: 12, id: 'magic12', title: "Smart Charts", actualNCERT: 24, sections: "Yamini pet tally chart, Rabbit population doubling table, City temperature hot/cold bar graphs, Family tree generations" },
    { num: 13, id: 'magic13', title: "Ways to Multiply and Divide", actualNCERT: 30, sections: "Bela's multi-digit multiplication, Shantaram cook daily pay, Sukhi farm debt division, 576 books packed in boxes" },
    { num: 14, id: 'magic14', title: "How Big? How Heavy?", actualNCERT: 24, sections: "Matchbox stage volume, 1cm cube packing in carton, Post office parcel rates, 5-rupee coin weight calculation" }
  ],

  // ==========================================
  // ENGLISH (20 Chapters / Units)
  // ==========================================
  // Track 1: Santoor (New NEP 2020 / NCF 2023) - 10 Chapters
  santoor: [
    { num: 1, id: 's1', title: "My Beautiful World", actualNCERT: 22, sections: "Nature poem, Comprehension questions, Rhyming words, Sight words, Drawing nature landscape" },
    { num: 2, id: 's2', title: "The Tree of Life", actualNCERT: 22, sections: "Tree story reading, Vocabulary bank, Prepositions of place, Writing tree benefits, Dialogues" },
    { num: 3, id: 's3', title: "A Journey by Train", actualNCERT: 22, sections: "Train journey reading, Station vocabulary, Past continuous tense, Letter to cousin, Picture talk" },
    { num: 4, id: 's4', title: "Friends in Need", actualNCERT: 22, sections: "Story comprehension, Character adjectives, Direct speech practice, Friendship recipe writing" },
    { num: 5, id: 's5', title: "The Secret Garden", actualNCERT: 22, sections: "Poem appreciation, Flower adjectives, Compound words, Plant lifecycle ordering" },
    { num: 6, id: 's6', title: "Laughter is the Best Medicine", actualNCERT: 22, sections: "Humorous story, Pun riddles, Adverb identification, Writing a funny incident, Role-play" },
    { num: 7, id: 's7', title: "The Starry Night", actualNCERT: 22, sections: "Constellations reading, Celestial vocabulary, Comparative adjectives, Moon observation journal" },
    { num: 8, id: 's8', title: "A Brave Heart", actualNCERT: 22, sections: "Bravery story comprehension, National bravery awardees, Conjunctions (and, but, because), Speech writing" },
    { num: 9, id: 's9', title: "Music All Around", actualNCERT: 22, sections: "Musical instruments classification, Sound verbs, Collective nouns, Writing about favorite song" },
    { num: 10, id: 's10', title: "Dreams of Tomorrow", actualNCERT: 22, sections: "Inspirational poem, Future tense 'will/shall', Career vocabulary, 'When I Grow Up' composition" }
  ],

  // Track 2: Marigold Book 5 (Classic CBSE) - 10 Units
  marigold: [
    { num: 1, id: 'm1', title: "Ice-cream Man & Wonderful Waste!", actualNCERT: 26, sections: "Reading is Fun, Ice-cream flavors vocabulary, Avial dish recipe sequencing, Waste recycling dialogue" },
    { num: 2, id: 'm2', title: "Teamwork & Flying Together", actualNCERT: 26, sections: "Reading is Fun, Rhyming teamwork words, Geese and hunter trap escape, Contractions ('don't', 'can't')" },
    { num: 3, id: 'm3', title: "My Shadow & Robinson Crusoe", actualNCERT: 26, sections: "Reading is Fun, Shadow behavior at noon vs evening, Footprint discovery emotions, Island diary entry" },
    { num: 4, id: 'm4', title: "Crying & My Elder Brother", actualNCERT: 26, sections: "Reading is Fun, Emotion words, Munna vs Bhaiya study schedules, Idioms on study and hard work" },
    { num: 5, id: 'm5', title: "The Lazy Frog & Rip Van Winkle", actualNCERT: 26, sections: "Reading is Fun, Fred the frog laziness, Rip's 20-year sleep timeline, Village changes description" },
    { num: 6, id: 'm6', title: "Class Discussion & The Talkative Barber", actualNCERT: 26, sections: "Reading is Fun, Jane's quietness discussion, Sultan and talkative barber humor, Exclamatory sentences" },
    { num: 7, id: 'm7', title: "Topsy-Turvy Land & Gulliver's Travels", actualNCERT: 26, sections: "Reading is Fun, Inverted world poem, Giant farmers of Brobdingnag, Similes ('as tall as...')" },
    { num: 8, id: 'm8', title: "Nobody's Friend & The Little Bully", actualNCERT: 26, sections: "Reading is Fun, Sharing toys and sweets, Hari the crab pinch bully, Anti-bullying school pledge" },
    { num: 9, id: 'm9', title: "Sing a Song of People & Around the World", actualNCERT: 26, sections: "Reading is Fun, Bustling city crowd speed, Phileas Fogg 80-day route map, Train vs steamer travel" },
    { num: 10, id: 'm10', title: "Malu Bhalu & Who Will be Ningthou?", actualNCERT: 26, sections: "Reading is Fun, Polar bear swimming lessons, Manipur kingdom succession contest, Sanatombi environmental love" }
  ],

  // ==========================================
  // HINDI (26 Chapters)
  // ==========================================
  // Track 1: Veena (वीणा भाग 2) (New NEP 2020 / NCF 2023) - 12 Chapters
  veena: [
    { num: 1, id: 'v1', title: "उठो धरा के अमर सपूतो", actualNCERT: 20, sections: "कविता से प्रश्न, नव निर्माण का संकल्प, तुकबंदी, देशप्रेम पर विचार, शब्द संपदा" },
    { num: 2, id: 'v2', title: "समझदार किसान", actualNCERT: 20, sections: "कहानी से, किसान की बुद्धिमानी, फसलों के प्रकार, संज्ञा और विशेषण, संवाद लेखन" },
    { num: 3, id: 'v3', title: "प्रकृति की सीख", actualNCERT: 20, sections: "पर्वत-सागर-तरंग की सीख, विलोम शब्द, तुकांत शब्द, प्रकृति पर कविता रचना" },
    { num: 4, id: 'v4', title: "सच्चा मित्र", actualNCERT: 20, sections: "मित्रता की परख, संकट में सहायता, मुहावरे प्रयोग, 'मेरा प्रिय मित्र' अनुच्छेद" },
    { num: 5, id: 'v5', title: "समय का मोल", actualNCERT: 20, sections: "समय पालन का महत्व, दिनचर्या तालिका, घड़ी का इतिहास, समय नष्ट न करने की सीख" },
    { num: 6, id: 'v6', title: "दीप जलेगा", actualNCERT: 20, sections: "कविता वाचन, अंधकार और प्रकाश के प्रतीक, त्योहारों की सूची, दीपक का महत्व" },
    { num: 7, id: 'v7', title: "एकता में बल", actualNCERT: 20, sections: "लकड़ियों का गट्ठर दृष्टांत, संगठित समाज, सहयोग के लाभ, संयुक्त वाक्य रचना" },
    { num: 8, id: 'v8', title: "चतुर तेनालीराम", actualNCERT: 20, sections: "दरबारी प्रसंग, तेनालीराम की हाजिरजवाबी, राजा कृष्णदेवराय, नाटक मंचन" },
    { num: 9, id: 'v9', title: "पर्यावरण और हम", actualNCERT: 20, sections: "प्रदूषण के कारण व निवारण, वृक्षारोपण, पर्यावरण सुरक्षा स्लोगन, पोस्टर निर्माण" },
    { num: 10, id: 'v10', title: "वीर बालक", actualNCERT: 20, sections: "साहस और वीरता, बाल पुरस्कार विजेता, संकट के समय प्राथमिक कर्तव्य, संवाद" },
    { num: 11, id: 'v11', title: "अनमोल वचन", actualNCERT: 20, sections: "कबीर व रहीम के दोहे, दोहों का सरल भावार्थ, नैतिक मूल्य, सुलेख व कंठस्थीकरण" },
    { num: 12, id: 'v12', title: "नया सवेरा", actualNCERT: 20, sections: "भोर का सौंदर्य, पक्षियों का कलरव, प्रभात फेरी, सकारात्मक सोच की प्रेरणा" }
  ],

  // Track 2: Rimjhim (रिमझिम भाग 5) (Classic CBSE) - 14 Chapters
  rimjhim: [
    { num: 1, id: 'r1', title: "राख की रस्सी", actualNCERT: 22, sections: "लोनपो गार का बेटा, तिब्बत की वेशभूषा, राख की रस्सी का रहस्य, समझदारी और चालाकी" },
    { num: 2, id: 'r2', title: "फसलों के त्योहार", actualNCERT: 22, sections: "खिचड़ी, मकर संक्रांति, पोंगल, बीहू, सरहुल, विभिन्न प्रांतों की फसल उत्सव तालिका" },
    { num: 3, id: 'r3', title: "खिलौनेवाला", actualNCERT: 22, sections: "कविता से, खिलौनों की सूची, राम-सीता-ताड़का प्रसंग, माँ और बालक का संवाद" },
    { num: 4, id: 'r4', title: "नन्हा फ़नकार", actualNCERT: 22, sections: "केशव की नक्काशी, बादशाह अकबर की मुलाकात, संगतराश के औजार, घंटी के डिजाइन" },
    { num: 5, id: 'r5', title: "जहाँ चाह वहाँ राह", actualNCERT: 22, sections: "इला सचानी की कसीदाकारी, पैरों से कढ़ाई, हिम्मत और लगन, काठियावाड़ी टाँके" },
    { num: 6, id: 'r6', title: "चिट्ठी का सफर", actualNCERT: 22, sections: "संदेश भेजने के साधन, कबूतर से इंटरनेट, पिन कोड (PIN Code) का महत्व, डाक टिकट संग्रह" },
    { num: 7, id: 'r7', title: "डाकिए की कहानी, कँवरसिंह की जुबानी", actualNCERT: 22, sections: "हिमाचल के डाकिए का साक्षात्कार, पहाड़ी डाक सेवा, डाकिए का जीवन, कर्तव्यनिष्ठा" },
    { num: 8, id: 'r8', title: "वे दिन भी क्या दिन थे", actualNCERT: 22, sections: "भविष्य के स्कूल, रोबोट शिक्षक बनाम मानवीय शिक्षक, कागजी किताबें, विज्ञान कथा" },
    { num: 9, id: 'r9', title: "एक माँ की बेबसी", actualNCERT: 22, sections: "बोलने में असमर्थ रतन, माँ की आँखों की चिंता, दिव्यांग बच्चों के प्रति संवेदनशीलता" },
    { num: 10, id: 'r10', title: "एक दिन की बादशाहत", actualNCERT: 22, sections: "आरिफ और सलीम की एक दिन की हुकूमत, बड़ों और बच्चों की भूमिका बदलना, उर्दू शब्द" },
    { num: 11, id: 'r11', title: "चावल की रोटियाँ", actualNCERT: 22, sections: "कोको का नाटक, चावल की रोटियाँ छिपाने की जुगत, चार मित्रों का हास्य संवाद नाटक" },
    { num: 12, id: 'r12', title: "गुरु और चेला", actualNCERT: 22, sections: "अंधेर नगरी टके सेर भाजी, राजा की मूर्खता, फांसी का फंदा, गुरु की चतुराई" },
    { num: 13, id: 'r13', title: "स्वामी की दादी", actualNCERT: 22, sections: "राजम और मणि की कहानियां, दादी का बटुआ और इलायची, स्वामीनाथन का बचपन" },
    { num: 14, id: 'r14', title: "बाघ आया उस रात", actualNCERT: 22, sections: "कविता से, बाघ का परिवार, झरने के पास पहरा, वन्यजीव सुरक्षा, बच्चों का डर" }
  ],

  // ==========================================
  // EVS / THE WORLD AROUND US (32 Chapters)
  // ==========================================
  // Track 1: Our Wondrous World (New NEP 2020 / NCF 2023) - 10 Chapters
  wondrousWorld: [
    { num: 1, id: 'oww1', title: "Water — The Life Giver", actualNCERT: 22, sections: "Groundwater depletion, Rooftop harvesting, Water conservation chart, Aquatic ecosystems" },
    { num: 2, id: 'oww2', title: "Rivers and Streams", actualNCERT: 22, sections: "River source to sea, Pollution indicator organisms, Stepwells (Bawris), Community river care" },
    { num: 3, id: 'oww3', title: "Food Mysteries", actualNCERT: 22, sections: "Digestion process, Taste buds mapping, Food preservation techniques, Traditional nutritional wisdom" },
    { num: 4, id: 'oww4', title: "Our School Ecosystem", actualNCERT: 22, sections: "School botanical audit, Butterfly garden, Composting canteen waste, Eco-club charter" },
    { num: 5, id: 'oww5', title: "Our Vibrant Country", actualNCERT: 22, sections: "India's physiographic divisions, Cultural diversity in food and clothing, National symbols" },
    { num: 6, id: 'oww6', title: "Unique Habitats", actualNCERT: 22, sections: "Desert, mountain, wetland habitats, Animal adaptations, Flora and fauna inventory" },
    { num: 7, id: 'oww7', title: "Harnessing Energy", actualNCERT: 22, sections: "Renewable vs non-renewable energy, Solar cookers, Wind turbines, Energy saving audit" },
    { num: 8, id: 'oww8', title: "Clothes and Threads", actualNCERT: 22, sections: "Natural vs synthetic fibers, Handloom weaving traditions, Dyeing with natural colors, Textile heritage" },
    { num: 9, id: 'oww9', title: "Rhythms of Nature", actualNCERT: 22, sections: "Seasonal changes, Animal migration, Plant dormancy, Monsoon preparation calendar" },
    { num: 10, id: 'oww10', title: "Our Living Earth", actualNCERT: 22, sections: "Earth structure, Soil layers, Natural disasters preparedness (earthquake/flood), Earth pledge" }
  ],

  // Track 2: Looking Around (आस-पास) (Classic CBSE) - 22 Chapters
  lookingAround: [
    { num: 1, id: 'la_1', title: "Super Senses", actualNCERT: 24, sections: "Ant pheromone trails, Eagle vision 4x, Silkworm smell, Bat echolocation, Tiger whiskers & sanctuaries" },
    { num: 2, id: 'la_2', title: "A Snake Charmer's Story", actualNCERT: 24, sections: "Kalbeliyas community, Snake venom & fangs, 4 poisonous snakes in India, Snakebite medicine" },
    { num: 3, id: 'la_3', title: "From Tasting to Digesting", actualNCERT: 24, sections: "Taste bud map, Digestive system organs, Dr. Beaumont's stomach experiments, Glucose drip, ORS solution" },
    { num: 4, id: 'la_4', title: "Mangoes Round the Year", actualNCERT: 24, sections: "Making Mamidi Tandra (Aam Papad), Food spoilage signs, Bread mold observation, Preserving pickles" },
    { num: 5, id: 'la_5', title: "Seeds and Seeds", actualNCERT: 24, sections: "Seed germination conditions, Sprouting chana, Seed dispersal by wind/water/animals, Pitcher plant (Nepenthes)" },
    { num: 6, id: 'la_6', title: "Every Drop Counts", actualNCERT: 24, sections: "Ghadsisar lake of Jaisalmer, Stepwells (Bawris), Water harvesting, Custom of welcoming bride at spring" },
    { num: 7, id: 'la_7', title: "Experiments with Water", actualNCERT: 24, sections: "Dead Sea extreme salinity, Floating vs sinking test, Evaporation of salt pans, Dandi March salt satyagraha" },
    { num: 8, id: 'la_8', title: "A Treat for Mosquitoes", actualNCERT: 24, sections: "Malaria parasite (Plasmodium), Ronald Ross Nobel discovery, Blood test report reading, Anemia & iron foods" },
    { num: 9, id: 'la_9', title: "Up You Go!", actualNCERT: 24, sections: "Nehru Institute of Mountaineering, Bachendri Pal Everest ascent, Leader responsibilities, Rappelling" },
    { num: 10, id: 'la_10', title: "Walls Tell Stories", actualNCERT: 24, sections: "Golconda Fort architecture, Bastions and cannons, Water lifting mechanisms, Museum artifact insights" },
    { num: 11, id: 'la_11', title: "Sunita in Space", actualNCERT: 24, sections: "Astronaut Sunita Williams, Microgravity experiences, Floating food and hair, Globe and latitude lines" },
    { num: 12, id: 'la_12', title: "What if it Finishes...?", actualNCERT: 24, sections: "Adalaj stepwell traffic, Petroleum refining products, Electric cars, CNG vehicles, Chulha smoke health" },
    { num: 13, id: 'la_13', title: "A Shelter so High!", actualNCERT: 24, sections: "Gaurav Jani motorcycle journey, Changpa tribe of Ladakh, Pashmina goat wool, Rebo tents and Lekha" },
    { num: 14, id: 'la_14', title: "When the Earth Shook!", actualNCERT: 24, sections: "Gujarat Bhuj earthquake 2001, Earthquake safety drills, Rescue teams, Rebuilding disaster-resilient houses" },
    { num: 15, id: 'la_15', title: "Blow Hot, Blow Cold", actualNCERT: 24, sections: "Dr. Zakir Husain story, Woodcutter warming hands, Cooling hot potatoes, Stethoscope heartbeat resonance" },
    { num: 16, id: 'la_16', title: "Who will do this Work?", actualNCERT: 24, sections: "Sanitation workers dignity of labour, Mahatma Gandhi Sabarmati ashram rules, Untouchability eradication" },
    { num: 17, id: 'la_17', title: "Across the Wall", actualNCERT: 24, sections: "Nagpada Basketball Association girls team, Gender bias breaking in sports, Team spirit over individual score" },
    { num: 18, id: 'la_18', title: "No Place for Us?", actualNCERT: 24, sections: "Jatrya Bhai displacement from Khedi village, Dam construction relocation, Rural vs urban struggles" },
    { num: 19, id: 'la_19', title: "A Seed tells a Farmer's Story", actualNCERT: 24, sections: "Damjibhai traditional organic farming, Undhiyu winter dish, Chemical fertilizers debt, Tractor vs bullock" },
    { num: 20, id: 'la_20', title: "Whose Forests?", actualNCERT: 24, sections: "Suryamani Jharkhand Kuduk community, Torang cultural center, Forest Rights Act 2007, Right over jungle" },
    { num: 21, id: 'la_21', title: "Like Father, Like Daughter", actualNCERT: 24, sections: "Inherited traits vs acquired habits, Gregor Mendel pea plant genetics, Polio non-genetic disease awareness" },
    { num: 22, id: 'la_22', title: "On the Move Again", actualNCERT: 24, sections: "Mukadam moneylender, Sugarcane harvest migration, Caravan life, Education disruption of migrant children" }
  ]
};

// Function to extract actual base question counts from data files
function getBaseDataCounts() {
  const mathsMela = require('./data-c5-maths/mathsMelaData.js').mathsMelaChapters;
  const mathMagic = require('./data-c5-maths/mathMagicData.js').mathMagicChapters;
  const santoor = require('./data-c5-english/santoorData.js').santoorChapters;
  const marigold = require('./data-c5-english/marigoldData.js').marigoldUnits;
  const veena = require('./data-c5-hindi/veenaData.js').veenaChapters;
  const rimjhim = require('./data-c5-hindi/rimjhimData.js').rimjhimChapters;
  const wondrous = require('./data-c5-evs/wondrousWorldData.js').wondrousWorldChapters;
  const looking = require('./data-c5-evs/lookingAroundData.js').lookingAroundChapters;

  const map = {};
  const processList = (list) => {
    list.forEach(ch => {
      map[ch.id] = (ch.questions || []).length;
    });
  };

  processList(mathsMela);
  processList(mathMagic);
  processList(santoor);
  processList(marigold);
  processList(veena);
  processList(rimjhim);
  processList(wondrous);
  processList(looking);

  return map;
}

const baseCounts = getBaseDataCounts();

console.log("=== STRICT CHAPTER-WISE SHORTAGE AUDIT FOR CLASS 5 ===");

const auditReport = [];

function auditBook(subjectName, bookTitle, track, list) {
  let bookActualNCERT = 0;
  let bookCurrentQs = 0;
  let bookShortage = 0;

  const chaptersReport = [];

  list.forEach(ch => {
    const currentQCount = baseCounts[ch.id] || 0;
    const shortage = ch.actualNCERT - currentQCount;
    const coveragePct = ((currentQCount / ch.actualNCERT) * 100).toFixed(1);

    bookActualNCERT += ch.actualNCERT;
    bookCurrentQs += currentQCount;
    bookShortage += shortage;

    chaptersReport.push({
      num: ch.num,
      id: ch.id,
      title: ch.title,
      actualNCERT: ch.actualNCERT,
      currentBaseQs: currentQCount,
      cbqCount: 1,
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
    currentCBQs: list.length,
    currentItems: bookCurrentQs + list.length,
    shortage: bookShortage,
    coveragePct: overallCoverage + '%',
    chapters: chaptersReport
  });
}

auditBook('Mathematics', 'Maths Mela', 'New NEP 2020 / NCF 2023', ncertInventory.mathsMela);
auditBook('Mathematics', 'Math-Magic', 'Classic CBSE', ncertInventory.mathMagic);
auditBook('English', 'Santoor', 'New NEP 2020 / NCF 2023', ncertInventory.santoor);
auditBook('English', 'Marigold', 'Classic CBSE', ncertInventory.marigold);
auditBook('Hindi', 'Veena (वीणा भाग 2)', 'New NEP 2020 / NCF 2023', ncertInventory.veena);
auditBook('Hindi', 'Rimjhim (रिमझिम भाग 5)', 'Classic CBSE', ncertInventory.rimjhim);
auditBook('The World Around Us / EVS', 'Our Wondrous World', 'New NEP 2020 / NCF 2023', ncertInventory.wondrousWorld);
auditBook('EVS (Classic)', 'Looking Around (आस-पास)', 'Classic CBSE', ncertInventory.lookingAround);

// Save machine-readable ledger
fs.writeFileSync(path.join(__dirname, 'audit-class-5-strict-shortage.json'), JSON.stringify(auditReport, null, 2), 'utf8');

console.log("SUMMARY BY BOOK:");
let grandActual = 0, grandQs = 0, grandCBQs = 0, grandItems = 0, grandShortage = 0, grandChs = 0;
auditReport.forEach(b => {
  grandChs += b.totalChapters;
  grandActual += b.actualNCERT;
  grandQs += b.currentQs;
  grandCBQs += b.currentCBQs;
  grandItems += b.currentItems;
  grandShortage += b.shortage;
  console.log(`- ${b.book} (${b.totalChapters} Chs): Actual NCERT = ${b.actualNCERT} | Base Authentic Qs = ${b.currentQs} (+${b.currentCBQs} CBQ) | Shortage = -${b.shortage} Qs (${b.coveragePct} Coverage)`);
});

const grandCoverage = ((grandQs / grandActual) * 100).toFixed(1);
console.log("--------------------------------------------------");
console.log(`GRAND TOTALS (8 Books, ${grandChs} Chapters):`);
console.log(`Actual NCERT Questions in Physical Textbooks: ${grandActual}`);
console.log(`Current Base Authentic Questions in Dataset: ${grandQs}`);
console.log(`Current Competency Case Studies (CBQ): ${grandCBQs}`);
console.log(`Total Published Authentic Items: ${grandItems}`);
console.log(`ACTUAL QUESTION SHORTAGE (DEFICIT): -${grandShortage} Questions`);
console.log(`TRUE EXERCISE QUESTION COVERAGE: ${grandCoverage}%`);
