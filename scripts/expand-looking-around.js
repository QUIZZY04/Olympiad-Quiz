const fs = require('fs');
const path = require('path');
const existing = require('./data-c4-evs/lookingAroundData.js').lookingAroundChapters;

// Additional comprehensive questions for Chapters 1 to 27
const extraQuestions = {
  la1: [
    {
      category: "Regional Transport • Bamboo Bridges & Jugaad",
      q: "How do children in Assam use bamboo bridges during the monsoon? What is a 'Jugaad' vehicle in Gujarat?",
      ans: `<strong>1. Bamboo Bridges in Assam:</strong><br>
During the heavy monsoon in Assam, water often rises knee-deep or waist-deep on village roads. Children and villagers tie long, sturdy bamboo poles and ropes together across streams to create narrow, elevated footbridges. Children hold their books in one hand and grasp the bamboo railing with the other to cross safely.<br><br>
<strong>2. The 'Jugaad' Vehicle in Gujarat:</strong><br>
A 'Jugaad' is an ingenious locally-assembled vehicle made by attaching the front engine and handlebar of a motorcycle or scooter to a wooden cart chassis with wheels at the back. It carries several children together to school, making a characteristic 'phut-phut-phut' sound.`,
      marks: 3,
      rubric: [
        { key: "Assam bamboo bridge construction and crossing technique", marks: "1.5 M" },
        { key: "Gujarat Jugaad mechanical structure and purpose", marks: "1.5 M" }
      ]
    },
    {
      category: "Terrain Adaptation • Jungles and Snow",
      q: "What difficulties do children face while walking through thick jungles or deep snow to reach school?",
      ans: `<strong>1. Walking Through Thick Jungles:</strong><br>
In dense forests, sunlight barely penetrates, creating darkness even during the day. The paths are overgrown with thorns, and children must stay alert to snake bites, insects, and wild animals, guiding themselves by listening to bird calls and animal sounds.<br><br>
<strong>2. Walking on Snow (Northern Hills):</strong><br>
Children must hold hands carefully. If the snow is fresh and soft, their feet sink deep into it, making walking exhausting. If the snow is frozen hard, the surface becomes icy and dangerously slippery, causing children to slip and fall.`,
      marks: 3,
      rubric: [
        { key: "Jungle navigation risks and sensory awareness", marks: "1.5 M" },
        { key: "Soft snow sinking vs frozen ice slipping hazards", marks: "1.5 M" }
      ]
    }
  ],
  la2: [
    {
      category: "Animal Morphology • Ears and Camouflage",
      q: "Name two animals whose ears look like fans and two whose ears are on top of their head. Why do animals have different patterns on their skin?",
      ans: `<strong>1. Ear Shapes:</strong><br>
• <strong>Fan-like Ears:</strong> Elephant (large fleshy flaps that flap to cool the body).<br>
• <strong>Leaf-like Ears:</strong> Deer, Cow, Buffalo.<br>
• <strong>Ears on Top of Head:</strong> Rabbit, Hare, Giraffe.<br><br>
<strong>2. Skin Patterns:</strong><br>
The patterns (stripes on tigers and zebras, spots on leopards and deer) are due to the colors of the hair growing on their skin. These patterns provide <strong>camouflage</strong>, helping animals blend into shadows and grasses to hide from predators or sneak up on prey.`,
      marks: 3,
      rubric: [
        { key: "Accurate animal examples for fan-like and top-of-head ears", marks: "1.5 M" },
        { key: "Explanation of hair pigmentation and camouflage", marks: "1.5 M" }
      ]
    },
    {
      category: "Sensory Perception • Snakes and Birds",
      q: "How do snakes detect approaching humans or prey if they do not have external ears?",
      ans: `<strong>Snakes' Hearing Mechanism:</strong><br>
Snakes do not have external ears, ear openings, or eardrums. Instead, they feel <strong>sound vibrations traveling through the ground</strong>. Their lower jawbone rests close to the earth and acts as a sensitive acoustic sensor, transmitting ground tremors directly to their inner ear bones.`,
      marks: 2,
      rubric: [
        { key: "Scientific explanation of ground vibration detection via jawbone", marks: "2.0 M" }
      ]
    }
  ],
  la3: [
    {
      category: "Wildlife Ecology • Elephant Herd Behavior",
      q: "Who is the leader of an elephant herd? Why do male elephants leave the herd when they grow up?",
      ans: `<strong>1. Leader of the Herd:</strong><br>
The oldest female elephant is the <strong>Matriarch (leader)</strong> of the herd. She decides when to move, where to find waterholes, and protects the young calves.<br><br>
<strong>2. Why Male Elephants Leave:</strong><br>
An elephant herd consists exclusively of female elephants and their babies. Young male calves live in the herd only until they reach 14 to 15 years of age. Once they mature, they leave the maternal herd to live independently or form small bachelor groups.`,
      marks: 3,
      rubric: [
        { key: "Matriarch role and duties explained", marks: "1.5 M" },
        { key: "Male elephants leaving at age 14-15 explained", marks: "1.5 M" }
      ]
    },
    {
      category: "Animal Welfare • Freedom vs. Captivity",
      q: "How does the life of an elephant in a wild forest differ from that of an elephant tied in chains in a circus?",
      ans: `<strong>Wild vs. Captive Elephant:</strong><br>
• <strong>In the Wild:</strong> Elephants roam freely across vast jungle corridors, bathe in natural rivers, feed on fresh bamboo and grasses, play socially with herd members, and express natural maternal instincts.<br>
• <strong>In Captivity:</strong> Captive elephants are often tied with heavy metal chains on concrete floors, kept in solitary isolation, beaten with bullhooks (ankush) to perform unnatural circus tricks, and deprived of natural foraging and social herds.`,
      marks: 3,
      rubric: [
        { key: "Three natural conditions in the wild described", marks: "1.5 M" },
        { key: "Cruelty and confinement in captivity contrasted", marks: "1.5 M" }
      ]
    }
  ],
  la4: [
    {
      category: "Botanical Features • The Khejadi Tree",
      q: "Describe the unique characteristics of the Khejadi tree that make it so vital to the people of the Thar Desert.",
      ans: `<strong>Unique Characteristics of the Khejadi Tree:</strong><br>
1. <strong>Low Water Requirement:</strong> It grows abundantly in harsh desert areas with minimal rainfall.<br>
2. <strong>Medicinal Bark:</strong> Its bark is used by locals to prepare herbal medicines for coughs and skin diseases.<br>
3. <strong>Edible Pods (Sangri):</strong> People harvest and cook its nutritious green beans (sangri) as a staple vegetable.<br>
4. <strong>Shade &amp; Fodder:</strong> Children play under its wide, dense shade, and desert animals (like goats and blackbucks) eat its protein-rich leaves.`,
      marks: 3,
      rubric: [
        { key: "Four distinct practical features of the Khejadi tree", marks: "3.0 M" }
      ]
    },
    {
      category: "Environmental Movements • The Bishnois",
      q: "Who are the Bishnois of Rajasthan? What pledge did they take to protect trees and wildlife?",
      ans: `<strong>1. The Bishnoi Community:</strong><br>
The Bishnois are a dedicated nature-loving community living in Rajasthan who follow 29 environmental principles laid down by Guru Jambheshwar in the 15th century.<br><br>
<strong>2. Sacred Environmental Pledge:</strong><br>
They consider all trees (especially Khejadi) and animals (like blackbucks, chinkaras, and peacocks) sacred. They protect forests with their lives, strictly forbid hunting, and ensure animals roam fearlessly around their villages.`,
      marks: 3,
      rubric: [
        { key: "Background of the Bishnoi community", marks: "1.5 M" },
        { key: "Principles of non-violence toward trees and animals", marks: "1.5 M" }
      ]
    }
  ],
  la5: [
    {
      category: "Insect Sociology • Honeybee Colony",
      q: "Describe the three types of honeybees found in a beehive and the specific duties performed by each.",
      ans: `<strong>Three Types of Bees in a Hive:</strong><br>
1. <strong>The Queen Bee:</strong> The largest bee in the colony. Her sole duty is to lay thousands of eggs daily to maintain the colony population.<br>
2. <strong>Worker Bees:</strong> Female bees that perform all hard labour—building the wax honeycomb cells, cleaning the hive, flying out to collect nectar and pollen from flowers, nursing young larvae, and guarding the hive entrance.<br>
3. <strong>Male Bees (Drones):</strong> They have no stinger and do not collect nectar. Their primary role is to mate with the queen.`,
      marks: 4,
      rubric: [
        { key: "Queen bee role described correctly", marks: "1.5 M" },
        { key: "Worker bee duties detailed", marks: "1.5 M" },
        { key: "Drone role defined", marks: "1.0 M" }
      ]
    },
    {
      category: "Communication in Nature • The Bee Dance",
      q: "How does a worker honeybee communicate to other bees when she discovers a rich flower patch?",
      ans: `<strong>The Bee Dance (Waggle Dance):</strong><br>
When a scout bee discovers flowers laden with sweet nectar, she returns to the hive and performs a special rhythmic circular and figure-eight dance (the waggle dance). The speed, angle, and vibration of the dance communicate the exact direction relative to the Sun and the distance of the nectar source to all other worker bees.`,
      marks: 2,
      rubric: [
        { key: "Explanation of the waggle dance indicating direction and distance", marks: "2.0 M" }
      ]
    }
  ],
  la6: [
    {
      category: "Railway Operations • The Platform",
      q: "List four community helpers or facilities you observe on a busy railway platform during a journey.",
      ans: `<strong>Facilities and Helpers on a Railway Platform:</strong><br>
1. <strong>Porters (Coolies):</strong> Wearing red shirts and brass arm badges, they carry heavy passenger luggage on their heads safely to the coach.<br>
2. <strong>Ticket Checker (TTE):</strong> Checks passengers' reserved tickets against the reservation chart to ensure everyone is on their allotted berth.<br>
3. <strong>Station Master &amp; Signal Staff:</strong> Manage train arrivals, departures, track switching, and safety flags.<br>
4. <strong>Public Announcement System &amp; Water Kiosks:</strong> Announce train arrival times, platform numbers, and provide filtered drinking water.`,
      marks: 3,
      rubric: [
        { key: "Four helpers/facilities correctly identified with duties", marks: "3.0 M" }
      ]
    },
    {
      category: "Civic Etiquette • Train Travel",
      q: "What civic rules should passengers follow while traveling on long-distance trains?",
      ans: `<strong>Rules for Responsible Train Travel:</strong><br>
• Never pull the emergency chain without a genuine life-safety emergency.<br>
• Do not litter food packets or plastic cups on tracks; deposit all waste in coach dustbins.<br>
• Avoid speaking loudly or playing mobile speakers at night so co-passengers can sleep peacefully.<br>
• Keep toilets clean and flush after every use.`,
      marks: 2,
      rubric: [
        { key: "Three or more practical civic etiquettes listed", marks: "2.0 M" }
      ]
    }
  ],
  la7: [
    {
      category: "Railway Engineering • Bridges and Tunnels",
      q: "Why are there 2000 bridges and 92 tunnels on the Konkan Railway route between Goa and Kerala?",
      ans: `<strong>Reasons for Numerous Bridges and Tunnels:</strong><br>
The Konkan Railway traverses the rugged, magnificent Western Ghats mountain range and coastal river systems. The train route must cross numerous deep river estuaries, backwater creeks, and gorges (requiring 2000 bridges) and pierce through solid granite mountain ridges (requiring 92 excavated tunnels) to maintain a smooth, level track without steep gradients.`,
      marks: 3,
      rubric: [
        { key: "Geographical topography of Western Ghats and rivers", marks: "1.5 M" },
        { key: "Engineering necessity of bridges and tunnels explained", marks: "1.5 M" }
      ]
    },
    {
      category: "Road Safety • Level Crossings",
      q: "Why is it dangerous to cross a railway track under a closed level crossing barrier? What precautions must drivers take?",
      ans: `<strong>1. Danger of Crossing Under Closed Gates:</strong><br>
Level crossing gates are closed when a high-speed express train is approaching. Modern trains travel at over 100 km/h and take hundreds of metres to stop even after braking. Crossing under the gate can lead to fatal collisions.<br><br>
<strong>2. Precautions:</strong><br>
Drivers and pedestrians must wait patiently behind the white stop line, switch off vehicle engines to save fuel and reduce noise, and proceed only after the barrier is fully raised.`,
      marks: 2,
      rubric: [
        { key: "Speed of trains and fatal collision danger", marks: "1.0 M" },
        { key: "Turning off engines and waiting behind line", marks: "1.0 M" }
      ]
    }
  ],
  la8: [
    {
      category: "Information Literacy • Reading a Train Ticket",
      q: "What important details are printed on an Indian Railways train ticket? Mention any four.",
      ans: `<strong>Key Details on a Train Ticket:</strong><br>
1. <strong>PNR Number (Passenger Name Record):</strong> A unique 10-digit booking reference code.<br>
2. <strong>Train Number &amp; Name:</strong> Identifies the specific express train.<br>
3. <strong>Date of Journey &amp; Departure Time:</strong> Exact day and scheduled boarding time.<br>
4. <strong>Coach &amp; Berth Number:</strong> (e.g., Coach B1, Berth 24 - Lower).<br>
5. <strong>Distance &amp; Total Fare:</strong> Distance traveled in kilometres and ticket cost in rupees.`,
      marks: 3,
      rubric: [
        { key: "Four accurate pieces of information printed on train tickets", marks: "3.0 M" }
      ]
    },
    {
      category: "Water Transport • Ferry Services",
      q: "How does a ferry boat operate in the backwaters of Kerala? Why is it a lifeline for local villagers?",
      ans: `<strong>Ferry Boats in Kerala:</strong><br>
In Kerala's water-locked backwater regions (like Alappuzha and Kottayam), islands are separated by wide lagoons and canals with no road bridges. Sturdy passenger ferry boats operate continuously like water-buses, transporting villagers, office workers, vegetables, bicycles, and schoolchildren safely across waterways for a nominal fare.`,
      marks: 2,
      rubric: [
        { key: "Role of ferry as public water transit in canal geography", marks: "2.0 M" }
      ]
    }
  ],
  la9: [
    {
      category: "Family Changes • Birth of a Sibling",
      q: "How does the birth of a baby sister or brother bring changes in the daily routine of a family?",
      ans: `<strong>Changes Brought by a Newborn:</strong><br>
• Parents spend more time feeding, bathing, soothing, and caring for the infant's health.<br>
• Older siblings learn to be responsible, play quietly when the baby is sleeping, and help mother fetch towels and toys.<br>
• Household schedules shift around the baby's feeding and sleeping cycles, bringing joyous new responsibilities.`,
      marks: 2,
      rubric: [
        { key: "Two or three realistic domestic and emotional adjustments", marks: "2.0 M" }
      ]
    },
    {
      category: "Social Awareness • Child Marriage Laws",
      q: "What is the legal minimum age of marriage in India? Why is early child marriage harmful?",
      ans: `<strong>1. Legal Marriage Age in India:</strong><br>
Under Indian law, the legal minimum age of marriage is <strong>18 years for girls</strong> and <strong>21 years for boys</strong>.<br><br>
<strong>2. Harms of Child Marriage:</strong><br>
Child marriage forces young girls to drop out of school, depriving them of higher education and financial independence. Early pregnancies cause severe health complications, malnutrition, and risk to both young mothers and infants.`,
      marks: 3,
      rubric: [
        { key: "Accurate legal ages (18 and 21)", marks: "1.5 M" },
        { key: "Health and educational consequences of child marriage", marks: "1.5 M" }
      ]
    }
  ],
  la10: [
    {
      category: "Sports Excellence • Karnam Malleswari",
      q: "Who is Karnam Malleswari? Summarize her athletic achievements in Indian sports history.",
      ans: `<strong>Karnam Malleswari:</strong><br>
Karnam Malleswari is an iconic Indian weightlifter from Andhra Pradesh. She started weightlifting at the age of 12 under her coach's guidance.<br><br>
<strong>Major Achievements:</strong><br>
• She became capable of lifting a massive weight of <strong>130 kilograms</strong>.<br>
• At the 2000 Sydney Olympic Games, she made history by becoming the <strong>first Indian woman ever to win an Olympic medal</strong> (Bronze in 69 kg category).<br>
• She has won 29 international medals in world weightlifting championships, inspiring millions of Indian girls to take up competitive sports.`,
      marks: 3,
      rubric: [
        { key: "Identification as pioneer Olympic weightlifter from AP", marks: "1.5 M" },
        { key: "Sydney 2000 Olympic bronze and 130 kg lifting record", marks: "1.5 M" }
      ]
    },
    {
      category: "Inspiring Women • The Kabaddi Sisters",
      q: "Who were the three sisters Jwala, Leela, and Heera? How did they overcome conservative social norms to promote Kabaddi?",
      ans: `<strong>The Kabaddi Sisters (Jwala, Leela, Heera):</strong><br>
Living in Mumbai more than fifty years ago, these three sisters loved playing Kabaddi. In those times, society believed girls should not play aggressive games wearing shorts, fearing nobody would marry them.<br><br>
<strong>Their Courage:</strong><br>
Supported by their open-minded mother and maternal uncles, they practiced determinedly, formed their own Kabaddi club, competed at national tournaments, and proved that women can excel in traditional contact sports with discipline and dignity.`,
      marks: 3,
      rubric: [
        { key: "Societal prejudices against women playing Kabaddi", marks: "1.5 M" },
        { key: "Formation of club and national competitive success", marks: "1.5 M" }
      ]
    }
  ],
  la11: [
    {
      category: "Traditional Folk Art • Madhubani Painting",
      q: "Describe the Madhubani art form of Bihar. What natural ingredients and subjects are used in these paintings?",
      ans: `<strong>1. Madhubani Folk Art:</strong><br>
Madhubani (Mithila) is an ancient traditional folk art from Bihar, created during festivals, weddings, and celebrations.<br><br>
<strong>2. Materials &amp; Ingredients:</strong><br>
• The base paint paste is made of finely ground <strong>powdered rice</strong> mixed with water.<br>
• Natural colours are extracted from plants: yellow from turmeric (haldi), blue from indigo (neel), green from leaves, and black from lamp soot.<br><br>
<strong>3. Subjects Depicted:</strong><br>
Paintings feature human figures, birds (peacocks, parrots), fish, turtles, trees, flowers, and holy deities, filled with intricate geometric cross-hatch lines.`,
      marks: 3,
      rubric: [
        { key: "Geographical origin in Bihar and powdered rice paste base", marks: "1.5 M" },
        { key: "Natural pigments and typical subjects detailed", marks: "1.5 M" }
      ]
    },
    {
      category: "Commercial Botany • Kannauj Perfumes",
      q: "Why is Kannauj in Uttar Pradesh world-famous? How is traditional 'Itr' (attar) prepared there?",
      ans: `<strong>1. Kannauj - The Perfume Capital:</strong><br>
Kannauj is famous as the 'Itr City' of India. For centuries, entire generations of master distillers have manufactured pure, alcohol-free essential floral scents.<br><br>
<strong>2. Preparation of Itr:</strong><br>
Truckloads of fresh rose petals (damask roses), jasmine, and kewra flowers are packed into large copper stills (degs). Water is added, the lid is sealed with mud, and heated over wood fires. Vapours condense through bamboo pipes (chonga) into receiver pots submerged in cold water, creating pure natural perfume.`,
      marks: 3,
      rubric: [
        { key: "Kannauj's heritage as Itr manufacturing hub", marks: "1.5 M" },
        { key: "Deg-Bhapka hydro-distillation method explained", marks: "1.5 M" }
      ]
    }
  ],
  la12: [
    {
      category: "Historical Architecture • Evolution of Materials",
      q: "How did the building materials in Chetandas' house change over three generations?",
      ans: `<strong>Evolution of Building Materials:</strong><br>
1. <strong>First House (Partition Era):</strong> Mud walls coated with husk and cow-dung paste (to keep insects away) with neem/keekar wooden rafters and thatched roofs.<br>
2. <strong>Second Generation:</strong> Sun-dried and unbaked clay bricks with iron girders and cement plaster.<br>
3. <strong>Third Generation (Modern):</strong> Baked clay bricks, steel reinforced cement concrete (RCC), glazed tiles, marble flooring, and modern indoor PVC plumbing.`,
      marks: 3,
      rubric: [
        { key: "Clear three-stage material progression (mud -> brick -> RCC/tiles)", marks: "3.0 M" }
      ]
    },
    {
      category: "Sanitation Systems • Dry vs. Modern Toilets",
      q: "How were toilets built in Chetandas' first house, and how has modern indoor sanitation improved human dignity?",
      ans: `<strong>1. Traditional Toilets:</strong><br>
In early days, people used open fields or a separate dry latrine behind the house where human waste collected in pans and had to be manually cleared by cleaners.<br><br>
<strong>2. Modern Indoor Sanitation:</strong><br>
Modern homes have ceramic flush toilets with water seals connected to underground sewage pipes or septic tanks. Waste flushes away cleanly with water, ending the inhumane practice of manual scavenging and ensuring high hygiene and human dignity.`,
      marks: 2,
      rubric: [
        { key: "Contrast between manual dry latrine and modern flush toilet", marks: "2.0 M" }
      ]
    }
  ],
  la13: [
    {
      category: "Environmental Pollution • River Ecosystems",
      q: "List four major human activities that pollute clean rivers as they flow through cities and industrial towns.",
      ans: `<strong>Four Major Causes of River Pollution:</strong><br>
1. <strong>Untreated Industrial Effluents:</strong> Factories dumping toxic chemicals, heavy metals, and dyes directly into river streams.<br>
2. <strong>Municipal Sewage:</strong> City drains discharging millions of litres of untreated domestic blackwater and bathroom waste.<br>
3. <strong>Agricultural Runoff:</strong> Chemical fertilizers and poisonous pesticides washed into rivers during heavy rains.<br>
4. <strong>Religious &amp; Domestic Immersion:</strong> Washing clothes with harsh detergents, bathing cattle, and immersing non-biodegradable painted idols.`,
      marks: 3,
      rubric: [
        { key: "Four distinct, scientifically accurate pollution sources", marks: "3.0 M" }
      ]
    },
    {
      category: "Water Purification • Domestic Methods",
      q: "Explain how dirty muddy water can be purified at home for drinking during flood emergencies.",
      ans: `<strong>Emergency Water Purification Steps:</strong><br>
1. <strong>Sedimentation &amp; Decantation:</strong> Let muddy water sit undisturbed in a bucket. Heavy mud settles to the bottom; pour the clearer water into another vessel.<br>
2. <strong>Alum (Fitkari) Swirling:</strong> Swirl a small piece of alum in water to rapidly coagulate fine suspended clay particles.<br>
3. <strong>Filtration &amp; Boiling:</strong> Strain through a clean multi-layered cotton cloth, then boil vigorously for 10–15 minutes to kill all pathogenic germs.`,
      marks: 3,
      rubric: [
        { key: "Three logical steps: sedimentation, alum treatment, boiling", marks: "3.0 M" }
      ]
    }
  ],
  la14: [
    {
      category: "Agricultural Implements • Tools of Karnataka",
      q: "Name the traditional agricultural implements used in Basva's onion farm in Karnataka and explain the function of each.",
      ans: `<strong>Implements Used in Basva's Farm:</strong><br>
1. <strong>Khunti:</strong> An iron rod used by Basva's father to dig and loosen the hard soil before sowing so roots can penetrate easily.<br>
2. <strong>Kurige:</strong> A traditional seed drill tied behind bullocks. As bullocks walk, seeds drop through a funnel-like pipe at regular depth and spacing.<br>
3. <strong>Illige:</strong> A curved, sharp sickle blade fixed to a wooden base. Basva's mother sits on it and uses both hands to slice off dried onion leaves from bulbs.`,
      marks: 3,
      rubric: [
        { key: "Three tools correctly named (Khunti, Kurige, Illige)", marks: "1.5 M" },
        { key: "Accurate function of each implement", marks: "1.5 M" }
      ]
    },
    {
      category: "Crop Management • Weeding & Harvesting",
      q: "Why must weeds be pulled out of onion fields? Why is timely harvesting crucial for an onion crop?",
      ans: `<strong>1. Need for Weeding:</strong><br>
Weeds are unwanted wild plants that grow naturally alongside crops. If not removed, they steal water, fertilizers, and sunlight meant for onion plants, resulting in stunted, tiny bulbs.<br><br>
<strong>2. Timely Harvesting:</strong><br>
When onion leaves turn yellow and dry, the bulbs are mature. If harvesting is delayed even a few days, onions rot under wet soil and the farmer's entire hard work is ruined.`,
      marks: 3,
      rubric: [
        { key: "Weed competition for nutrients explained", marks: "1.5 M" },
        { key: "Consequences of delayed harvesting (rotting)", marks: "1.5 M" }
      ]
    }
  ],
  la15: [
    {
      category: "Vegetable Commerce • Mandi to Market",
      q: "Why does Vaishali's father wake up at 3 AM every morning? Why does he try to sell previous day's vegetables first?",
      ans: `<strong>1. Waking up at 3 AM:</strong><br>
Vaishali's father and elder brother must reach the wholesale Big Mandi before dawn to purchase the freshest seasonal vegetables directly from arriving farmer trucks at good prices before other retail vendors arrive.<br><br>
<strong>2. Selling Previous Day's Vegetables First:</strong><br>
Older vegetables lose moisture and freshness quickly. If not sold immediately in the morning, they will rot and spoil, causing financial loss to the family. Once old stock is cleared, fresh vegetables fetched from the mandi are displayed.`,
      marks: 3,
      rubric: [
        { key: "Early morning mandi procurement explained", marks: "1.5 M" },
        { key: "Perishability of unsold vegetables explained", marks: "1.5 M" }
      ]
    },
    {
      category: "Food Storage • Perishable vs. Non-Perishable",
      q: "Categorize the following vegetables into: (a) Those that spoil quickly, and (b) Those that stay fresh for days.<br><em>Spinach, Potato, Tomato, Onion, Banana, Garlic.</em>",
      ans: `<strong>Categorization of Produce:</strong><br>
• <strong>(a) Spoil Quickly (High moisture, thin skin):</strong> Spinach, Tomato, Banana (must be consumed within 1–2 days).<br>
• <strong>(b) Stay Fresh for Many Days (Dry skin, root/bulb tubers):</strong> Potato, Onion, Garlic (can be stored in cool dry places for weeks without rotting).`,
      marks: 2,
      rubric: [
        { key: "Accurate division into perishable and long-lasting categories", marks: "2.0 M" }
      ]
    }
  ],
  la16: [
    {
      category: "Ornithology • Bird Nests",
      q: "Describe how the following birds construct their nests: (a) Indian Robin, (b) Tailorbird, (c) Weaver Bird.",
      ans: `<strong>Nest Construction Styles:</strong><br>
• <strong>(a) Indian Robin:</strong> Builds soft cup nests in low stone crevices or bush forks using dry grass, roots, animal hair, wool, and soft cotton swabs.<br>
• <strong>(b) Tailorbird (दर्जिन चिड़िया):</strong> Uses its needle-sharp beak like a sewing needle to pierce and stitch two broad green leaves together with plant fibers, creating a cozy pocket nest.<br>
• <strong>(c) Male Weaver Bird (बया):</strong> Intricately weaves a beautiful pendant-shaped pouch nest with a hanging entrance tunnel using grass strips. The female inspects all nests and chooses the best one to lay eggs.`,
      marks: 3,
      rubric: [
        { key: "Accurate architectural style described for all three birds", marks: "3.0 M" }
      ]
    },
    {
      category: "Functional Morphology • Bird Beaks & Claws",
      q: "How are the beaks of an Eagle and a Sunbird adapted to their specific food habits?",
      ans: `<strong>Beak Adaptations:</strong><br>
• <strong>Eagle:</strong> Has a short, heavy, hooked, razor-sharp beak designed to tear tough meat and flesh of hunted prey (rats, snakes, fish).<br>
• <strong>Sunbird:</strong> Has a long, slender, curved, straw-like beak perfectly designed to probe deep inside tubular flowers to suck sweet nectar without damaging blossoms.`,
      marks: 2,
      rubric: [
        { key: "Hooked meat-tearing beak of eagle vs slender nectar-sucking beak of sunbird", marks: "2.0 M" }
      ]
    }
  ],
  la17: [
    {
      category: "Urban Sociology • Chawl Life",
      q: "Compare Nandita's village house with her Mama's house in Mumbai regarding space, cooking, and water supply.",
      ans: `<strong>Village House vs. Mumbai Chawl Room:</strong><br>
1. <strong>Space:</strong> Village house has an open courtyard, separate veranda, and distinct rooms; Mama's chawl is a single cramped room where the family sits, sleeps, and cooks.<br>
2. <strong>Cooking:</strong> Village house has a separate outdoor cooking chulha; in Mumbai, cooking is done in a corner of the same small room.<br>
3. <strong>Water Supply:</strong> Village has a pond or well 20 minutes away where water is fetched peacefully; in Mumbai, a public street tap opens at 4 AM for only a short time, leading to fierce shouting and fighting among residents.`,
      marks: 3,
      rubric: [
        { key: "Three distinct points of contrast (space, cooking, water access)", marks: "3.0 M" }
      ]
    },
    {
      category: "Social Reality • High-Rise Apartments",
      q: "How did Nandita feel when she visited the tall multistory building where her Mami worked as a domestic helper?",
      ans: `<strong>Nandita's Experience in the High-Rise:</strong><br>
Nandita was amazed to see an elevator (lift) that zoomed up like a big flying iron cage with lights and fans. Inside Babloo's flat on the 12th floor, she was stunned to see separate rooms for sitting, sleeping, and dining, and a bathroom with running taps where water flowed continuously while people let it run wastefully.`,
      marks: 2,
      rubric: [
        { key: "Lift experience and amazement at indoor plumbing contrast", marks: "2.0 M" }
      ]
    }
  ],
  la18: [
    {
      category: "Public Health • Waterborne Illness & ORS",
      q: "What causes diarrhea and vomiting? How can you prepare an Oral Rehydration Solution (ORS) at home in an emergency?",
      ans: `<strong>1. Causes of Diarrhea and Vomiting:</strong><br>
Drinking water contaminated with sewage bacteria, amoebae, or eating unwashed, fly-infested food causes intestinal infections, leading to rapid loss of body water and vital salts (dehydration).<br><br>
<strong>2. Home-Made ORS Preparation:</strong><br>
• Boil one glass (approx. 250 ml) of clean drinking water and let it cool.<br>
• Add <strong>one level teaspoon of sugar</strong> and a <strong>tiny pinch of salt</strong>.<br>
• Stir until completely dissolved. Sip slowly to replenish lost fluids and electrolytes.`,
      marks: 3,
      rubric: [
        { key: "Contaminated water/food etiology explained", marks: "1.5 M" },
        { key: "Accurate water, sugar, and salt proportions for home ORS", marks: "1.5 M" }
      ]
    },
    {
      category: "Civic Equity • Water Commercialization",
      q: "In the chapter, a luxurious water park operated with splashing fountains while neighbouring villagers had no drinking water. What moral lesson does this highlight?",
      ans: `<strong>Lesson on Water Justice:</strong><br>
Water is a fundamental human right essential for survival. Wasting millions of litres of precious potable water on recreational slides and water fountains while neighboring poor citizens queue for hours for a single bucket of dirty water represents gross civic inequality. Clean drinking water for survival must always take priority over commercial entertainment.`,
      marks: 2,
      rubric: [
        { key: "Articulating right to clean water over luxury recreational waste", marks: "2.0 M" }
      ]
    }
  ],
  la19: [
    {
      category: "Plant Anatomy • Root Systems",
      q: "Why was Abdul unable to pull out a small clump of grass easily, even though he could break a pea climber stem effortlessly?",
      ans: `<strong>Strength of Grass Roots:</strong><br>
Although grass leaves look delicate, its roots are fibrous, dense, and deeply entwined with surrounding soil particles. Roots act like strong anchors, holding tightly to the earth to resist heavy rains and strong winds. In contrast, the stem of a pea plant is soft, thin, and green, making it easy to snap.`,
      marks: 3,
      rubric: [
        { key: "Fibrous root anchoring mechanism explained", marks: "1.5 M" },
        { key: "Contrast with tender aerial climbing stem", marks: "1.5 M" }
      ]
    },
    {
      category: "Ecological Adaptations • The Desert Oak",
      q: "What is the Desert Oak tree? How do its roots survive in the arid Australian outback?",
      ans: `<strong>The Desert Oak Tree:</strong><br>
The Desert Oak is a native tree found in the dry deserts of Australia. It has very few leaves to minimize water loss through transpiration. Its roots grow straight down into the soil up to 30 times deeper than the height of the tree until they reach deep subterranean water tables. Local indigenous people insert thin pipes into tree trunks during severe droughts to drink stored water.`,
      marks: 3,
      rubric: [
        { key: "Australian habitat and leaf adaptation", marks: "1.5 M" },
        { key: "Extreme root depth (30x tree height) reaching groundwater", marks: "1.5 M" }
      ]
    }
  ],
  la20: [
    {
      category: "Cultural Festivals • Magh Bihu of Assam",
      q: "Describe the Magh Bihu festival of Assam. What are 'Uruka', 'Bhela Ghar', and 'Meji'?",
      ans: `<strong>1. Magh Bihu:</strong><br>
Magh Bihu is the joyful harvest festival celebrated in Assam in mid-January, marking the end of the winter paddy harvesting season.<br><br>
<strong>2. Key Traditions:</strong><br>
• <strong>Uruka:</strong> The eve of Bihu where the entire village gathers to cook and feast on fish curry, bora rice, and pitha under the stars.<br>
• <strong>Bhela Ghar:</strong> A temporary community pavilion constructed in open fields using harvested thatch, bamboo, and dry leaves.<br>
• <strong>Meji:</strong> A tall conical bonfire of wood and bamboo lit at sunrise on Bihu morning; villagers pray for blessings and offer coconuts and sesame cakes to the sacred fire.`,
      marks: 4,
      rubric: [
        { key: "Bihu definition as harvest celebration", marks: "1.0 M" },
        { key: "Accurate description of Uruka, Bhela Ghar, and Meji", marks: "3.0 M" }
      ]
    },
    {
      category: "Social Welfare • The Mid-Day Meal Scheme",
      q: "What is the Mid-Day Meal scheme in government schools? State two major social benefits of this program.",
      ans: `<strong>1. Mid-Day Meal Scheme:</strong><br>
A landmark government welfare program under which every child studying in elementary government and government-aided schools is provided with a free, freshly-cooked, nutritious hot lunch every school day.<br><br>
<strong>2. Two Social Benefits:</strong><br>
• <strong>Combats Child Malnutrition:</strong> Guarantees that poor and undernourished children receive balanced calories and proteins, boosting concentration.<br>
• <strong>Promotes Social Equality:</strong> Children from all castes, religions, and economic backgrounds sit together side-by-side to eat, eradicating social prejudices.`,
      marks: 3,
      rubric: [
        { key: "Program definition and hot meal provision", marks: "1.5 M" },
        { key: "Two benefits: malnutrition reduction and caste equality", marks: "1.5 M" }
      ]
    }
  ],
  la21: [
    {
      category: "Community Service • Gurudwara Langar",
      q: "What is a 'Langar' in a Gurudwara? How does community service (Seva) foster equality among people?",
      ans: `<strong>1. The Langar Tradition:</strong><br>
Langar is a sacred community kitchen in a Sikh Gurudwara where free, hot vegetarian meals (dal, vegetables, rotis, rice, and kheer) are served to all visitors without any discrimination based on religion, caste, gender, or wealth.<br><br>
<strong>2. The Spirit of Seva:</strong><br>
All food is cooked and served voluntarily by devotees (Seva). People roll rotis, stir large cooking cauldrons, wash dishes, and sit together on floor mats (Pangat) in long rows, demonstrating that all human beings are equal in the eyes of God.`,
      marks: 3,
      rubric: [
        { key: "Definition of Gurudwara free community kitchen", marks: "1.5 M" },
        { key: "Voluntary seva and pangat seating promoting egalitarianism", marks: "1.5 M" }
      ]
    },
    {
      category: "Sacred Food • Karah Parshad",
      q: "What is 'Karah Parshad', and how is it prepared in large cauldrons at the Gurudwara?",
      ans: `<strong>Karah Parshad:</strong><br>
Karah Parshad is a sacred halwa blessed and distributed in Gurudwaras. It is prepared in large iron cauldrons by roasting coarse whole-wheat flour (atta) in equal proportions of pure desi ghee until golden brown and aromatic. Boiling water sweetened with equal sugar is then added, stirring vigorously until a rich, smooth, fragrant pudding forms.`,
      marks: 2,
      rubric: [
        { key: "Wheat flour, ghee, sugar, and water preparation described", marks: "2.0 M" }
      ]
    }
  ],
  la22: [
    {
      category: "Gender Equity • Family Stereotypes",
      q: "In Pratibha's family, her brothers could stay out late while Pratibha had to rush home by 7 PM. Why is this gender rule unjust?",
      ans: `<strong>Unjust Gender Double Standards:</strong><br>
Imposing early curfews exclusively on girls while allowing boys complete freedom fosters the harmful stereotype that girls are weak and boys are superior. Both boys and girls have equal rights to play, learn, and explore. True safety comes from instilling responsibility, respect, and discipline in boys, rather than curtailing girls' freedom.`,
      marks: 3,
      rubric: [
        { key: "Critique of gender double standards", marks: "1.5 M" },
        { key: "Equality of rights and cultivating respect in boys", marks: "1.5 M" }
      ]
    },
    {
      category: "Moral Values • Pilloo Aunty's Honesty",
      q: "What did Pilloo Aunty do when the beach kulfi-seller mistakenly charged her for five kulfis instead of seven? What does this teach us?",
      ans: `<strong>Pilloo Aunty's Honesty:</strong><br>
The kulfi vendor was poor and made a calculation mistake, asking for money for only five kulfis. Pilloo Aunty immediately pointed out the error and paid him the full correct price for all seven kulfis.<br><br>
<strong>Life Lesson:</strong><br>
This incident teaches children that true honesty means doing the right thing even when no one is watching, and never taking unfair advantage of someone's mistake or poverty.`,
      marks: 2,
      rubric: [
        { key: "Factual recall of kulfi transaction", marks: "1.0 M" },
        { key: "Ethical takeaway on integrity and fair dealing", marks: "1.0 M" }
      ]
    }
  ],
  la23: [
    {
      category: "Traditional Textiles • Pochampalli Ikat",
      q: "Describe the traditional step-by-step process of weaving a Pochampalli silk saree in Mukhtarpur village.",
      ans: `<strong>Steps in Weaving Pochampalli Saree:</strong><br>
1. <strong>Thread Boiling:</strong> Bundles of pure silk yarn are boiled in hot soapy water to clean impurities.<br>
2. <strong>Tie-and-Dye (Ikat):</strong> The silk threads are marked with geometric designs, tied tightly with rubber bands, and dipped in vibrant natural dye baths so dye absorbs only in untied sections.<br>
3. <strong>Winding on Bobbins:</strong> Dried dyed threads are rolled onto bobbins and fitted onto the wooden loom.<br>
4. <strong>Weaving:</strong> Weavers operate the wooden foot pedals and hand shuttle back and forth for weeks to produce the lustrous geometric Pochampalli saree.`,
      marks: 4,
      rubric: [
        { key: "Sequential four-step process (boiling, tying/dyeing, bobbins, weaving)", marks: "4.0 M" }
      ]
    },
    {
      category: "Artisan Livelihood • Economic Challenges",
      q: "Why are many Pochampalli weaver families giving up their traditional craft to work as daily wage labourers in big cities?",
      ans: `<strong>Challenges Faced by Weavers:</strong><br>
• <strong>Skyrocketing Raw Material Costs:</strong> The price of pure mulberry silk thread and dyes has surged dramatically.<br>
• <strong>Middlemen Exploitation:</strong> Big shopkeepers buy handloom sarees from weavers at meager prices while selling them in city showrooms at exorbitant profits.<br>
• <strong>Powerloom Competition:</strong> Cheap polyester sarees made on machine powerlooms copy traditional Ikat designs, undercutting genuine handloom prices.`,
      marks: 3,
      rubric: [
        { key: "Silk cost, middleman exploitation, and powerloom competition", marks: "3.0 M" }
      ]
    }
  ],
  la24: [
    {
      category: "Comparative Geography • Kerala vs. Abu Dhabi",
      q: "Compare the geography, climate, vegetation, and natural resources of Kerala and Abu Dhabi (UAE).",
      ans: `<strong>Comparison between Kerala and Abu Dhabi:</strong><br>
1. <strong>Climate:</strong> Kerala has a humid, tropical climate with abundant torrential rainfall; Abu Dhabi is a scorching desert with dry heat and rarely any rain.<br>
2. <strong>Vegetation:</strong> Kerala is carpeted with lush green coconut palms, banana trees, and paddy; Abu Dhabi has barren sand dunes where only drought-hardy <strong>date palms</strong> thrive.<br>
3. <strong>Natural Wealth:</strong> Kerala has abundant fresh water and spices; Abu Dhabi has vast underground reserves of <strong>petroleum (crude oil)</strong>, making petrol cheaper than water there.`,
      marks: 4,
      rubric: [
        { key: "Climate, vegetation, and natural resources compared accurately", marks: "4.0 M" }
      ]
    },
    {
      category: "Desert Living • Clothing & Architecture",
      q: "Why do people in Abu Dhabi wear loose white cotton robes and head scarves? Why are homes built with central air-conditioning?",
      ans: `<strong>Living in Extreme Desert Heat:</strong><br>
• <strong>Clothing:</strong> Men wear loose-fitting, full-length white cotton robes (Kandura) and headscarves (Ghutra) to reflect blinding sunlight, allow cooling air circulation, and shield eyes from whipping sandstorms.<br>
• <strong>Architecture:</strong> Daytime outdoor temperatures regularly exceed 48°C. Houses are sealed with double-glazed glass to keep sand out and equipped with central air conditioning running day and night.`,
      marks: 2,
      rubric: [
        { key: "Sun reflection, cotton air circulation, and AC architectural adaptation", marks: "2.0 M" }
      ]
    }
  ],
  la25: [
    {
      category: "Spices of India • Medicinal Uses",
      q: "Match the following Indian spices with their traditional medicinal benefits:<br>1. Clove (Laung)<br>2. Turmeric (Haldi)<br>3. Fennel (Saunf)<br>4. Black Pepper (Kaali Mirch)",
      ans: `<strong>Spices and Their Medicinal Benefits:</strong><br>
1. <strong>Clove (Laung):</strong> Looks like a tiny nail with a crown; clove oil provides instant relief from acute toothache and gum pain.<br>
2. <strong>Turmeric (Haldi):</strong> Bright yellow antiseptic root; applied on wounds to heal cuts and mixed with warm milk to cure body aches.<br>
3. <strong>Fennel (Saunf):</strong> Green, sweet, and cooling seeds; chewed after meals to aid digestion and freshen breath.<br>
4. <strong>Black Pepper (Kaali Mirch):</strong> Small, round, wrinkled black bead; sharp and pungent; cures sore throats and seasonal colds.`,
      marks: 4,
      rubric: [
        { key: "Four correct descriptions linking spice to its medicinal action", marks: "4.0 M" }
      ]
    },
    {
      category: "Historical Geography • The Spice Coast",
      q: "Why has Kerala historically been renowned as the 'Land of Spices'? Which spices grow abundantly there?",
      ans: `<strong>Kerala - Land of Spices:</strong><br>
The warm, moist climate and fertile slopes of the Western Ghats in Kerala provide the perfect environment for growing world-class spices like <strong>black pepper (black gold), cardamom, cinnamon, cloves, and ginger</strong>. For thousands of years, ancient Arab, Roman, and European traders sailed across oceans to trade for Kerala's aromatic spices.`,
      marks: 2,
      rubric: [
        { key: "Western Ghats microclimate and list of 4 key spices", marks: "2.0 M" }
      ]
    }
  ],
  la26: [
    {
      category: "Inspirational Careers • Wahida Prism",
      q: "Who is Surgeon Commander Wahida Prism? Describe her journey from a small Himalayan village to an Indian Naval warship.",
      ans: `<strong>Journey of Surgeon Commander Wahida Prism:</strong><br>
Wahida grew up in Thanamandi, a remote hilly village in the Rajouri district of Jammu &amp; Kashmir. Despite conservative social pressure, her forward-thinking father supported her education. She studied diligently, completed her MBBS medical degree from Government Medical College Jammu, joined the Armed Forces, and was commissioned as a doctor in the Indian Navy, eventually serving on frontline warships and breaking glass ceilings.`,
      marks: 3,
      rubric: [
        { key: "Humble origins in Rajouri J&K", marks: "1.5 M" },
        { key: "MBBS medical graduation and commissioning in Indian Navy", marks: "1.5 M" }
      ]
    },
    {
      category: "Military Leadership • The Passing-Out Parade",
      q: "Why was Wahida chosen to lead the passing-out parade at INS Hamla? Why are there 36 commands in a parade?",
      ans: `<strong>1. Parade Commander Selection:</strong><br>
Surgeon Commander Wahida was chosen to lead the prestigious annual passing-out parade because of her immaculate drill, sharp discipline, and commanding voice—becoming the <strong>first woman officer in the Indian Armed Forces</strong> to lead an entire parade.<br><br>
<strong>2. The 36 Commands:</strong><br>
A parade commander must call out 36 loud, clear, synchronized commands without hesitation or error. The commander's voice must echo across the vast parade ground so platoons at the very rear hear each command instantly and march with split-second precision.`,
      marks: 3,
      rubric: [
        { key: "Historical milestone as first woman parade leader", marks: "1.5 M" },
        { key: "Importance of 36 loud commands for troop synchronization", marks: "1.5 M" }
      ]
    }
  ],
  la27: [
    {
      category: "Inclusive Education • The Bridge for Chuskit",
      q: "How did Abdul mobilize the school headmaster and children to make Chuskit's dream of going to school come true?",
      ans: `<strong>Community Action for Chuskit:</strong><br>
Abdul spoke to the school headmaster and teachers, explaining that Chuskit was intelligent and eager to study. The headmaster organized a school work-project: one group of children cleared and leveled the jagged stones on the riverside path, while another group placed flat wooden planks across the fast-flowing stream to build a level bridge. Working together, they created a smooth path so Chuskit's wheelchair could roll straight into the school courtyard.`,
      marks: 3,
      rubric: [
        { key: "Abdul's initiative with the headmaster", marks: "1.5 M" },
        { key: "Children clearing rocks and laying wooden bridge planks", marks: "1.5 M" }
      ]
    },
    {
      category: "Constitutional Values • Inclusive Schools",
      q: "What does 'Inclusive Education' mean? Why must every school be barrier-free for children with special needs?",
      ans: `<strong>Inclusive Education:</strong><br>
Inclusive education means that children with special physical or cognitive needs study alongside their peers in regular mainstream classrooms, rather than being isolated in separate institutions.<br><br>
<strong>Need for Barrier-Free Infrastructure:</strong><br>
Under the Right to Education (RTE) Act and the Rights of Persons with Disabilities Act, every child has a legal and moral right to education. Installing ramps, wide doorways, Braille signage, and accessible toilets ensures that physical disability never becomes a barrier to learning and thriving.`,
      marks: 3,
      rubric: [
        { key: "Definition of inclusive mainstream education", marks: "1.5 M" },
        { key: "Barrier-free ramps and RTE constitutional rights", marks: "1.5 M" }
      ]
    }
  ]
};

// Merge extra questions into existing chapters
existing.forEach(ch => {
  if (extraQuestions[ch.id]) {
    ch.questions = ch.questions.concat(extraQuestions[ch.id]);
  }
});

const output = `// Official NCERT Class 4 Environmental Studies (Looking Around / आस-पास) Complete Dataset - Chapters 1 to 27
// Aligned with CBSE Curriculum (2026-27 Session) - 100% Comprehensive Coverage

const lookingAroundChapters = ${JSON.stringify(existing, null, 2)};

module.exports = { lookingAroundChapters };
`;

fs.writeFileSync(path.resolve(__dirname, 'data-c4-evs/lookingAroundData.js'), output, 'utf8');
console.log('Successfully enriched lookingAroundData.js with full question coverage across all 27 chapters!');
