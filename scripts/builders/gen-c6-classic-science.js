// Generator for Full Class 6 Science Classic (All 11 Rationalised Chapters) Data
const fs = require('fs');
const path = require('path');

const scienceClassicChapters = [
  {
    num: 1,
    id: "ch_cs1",
    title: "Components of Food",
    desc: "Major Nutrients (Carbohydrates, Fats, Proteins, Vitamins, Minerals), Food Testing (Iodine, Biuret, Paper translucent test), Dietary Fibres & Water, Balanced Diet, Deficiency Diseases",
    concepts: [
      "Carbohydrates & Fats: Energy-giving foods. Fats provide twice as much energy as carbohydrates.",
      "Proteins: Body-building foods essential for growth and repair.",
      "Vitamins & Minerals: Protective foods that defend the body against infectious diseases.",
      "Deficiency Diseases: Scurvy (Vit C), Rickets (Vit D), Beriberi (Vit B1), Night blindness (Vit A), Goitre (Iodine), Anaemia (Iron)."
    ],
    svg: `<svg viewBox="0 0 540 110" width="100%" height="110" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="500" height="70" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="13" font-weight="700" fill="#14532d" text-anchor="middle">Five Pillars of a Balanced Diet</text><text x="75" y="68" font-family="sans-serif" font-size="11" font-weight="600" fill="#166534" text-anchor="middle">Carbs & Fats (Energy)</text><text x="205" y="68" font-family="sans-serif" font-size="11" font-weight="600" fill="#166534" text-anchor="middle">Proteins (Growth)</text><text x="330" y="68" font-family="sans-serif" font-size="11" font-weight="600" fill="#166534" text-anchor="middle">Vitamins (Immunity)</text><text x="445" y="68" font-family="sans-serif" font-size="11" font-weight="600" fill="#166534" text-anchor="middle">Roughage & Water</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Name the major nutrients in our food. Also name the nutrients which mainly give energy to our body, and the nutrient needed for growth and maintenance.",
        marks: 3,
        ans: "<strong>Classification of Major Nutrients:</strong><br>• Major nutrients: <strong>Carbohydrates, Fats, Proteins, Vitamins, Minerals, Dietary Fibres (Roughage), and Water</strong>.<br>• Energy-giving nutrients: <strong>Carbohydrates and Fats</strong>.<br>• Nutrients needed for growth and maintenance: <strong>Proteins and Minerals</strong>.",
        rubric: [{ key: "Listing all 5 nutrient classes + water and roughage", marks: "1.5 Marks" }, { key: "Identifying energy-giving vs body-building nutrients", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Describe the chemical tests used in laboratory to detect the presence of: (a) Starch (Carbohydrate) (b) Protein in food sample.",
        marks: 3,
        ans: "<strong>Food Testing Procedures:</strong><br>• (a) <strong>Starch Test:</strong> Add 2-3 drops of dilute iodine solution to the mashed food sample. Appearance of a <strong>blue-black colour</strong> confirms presence of starch.<br>• (b) <strong>Protein Test:</strong> Add 10 drops of water to food powder, then add 2 drops of Copper Sulphate solution and 10 drops of Caustic Soda (NaOH). Shake well. Development of a <strong>violet colour</strong> confirms presence of protein.",
        rubric: [{ key: "Starch test: Dilute iodine -> Blue-black colour", marks: "1.5 Marks" }, { key: "Protein test: Copper sulphate + Caustic soda -> Violet colour", marks: "1.5 Marks" }]
      },
      {
        num: 3,
        title: "Fill in the blanks: (a) _____ is caused by deficiency of Vitamin D. (b) Deficiency of _____ causes a disease known as Beriberi. (c) Deficiency of Vitamin C causes a disease known as _____. (d) Night blindness is caused due to deficiency of _____ in our food.",
        marks: 3,
        ans: "<strong>Deficiency Diseases:</strong><br>• (a) <strong>Rickets</strong> is caused by deficiency of Vitamin D.<br>• (b) Deficiency of <strong>Vitamin B₁</strong> causes Beriberi.<br>• (c) Deficiency of Vitamin C causes <strong>Scurvy</strong>.<br>• (d) Night blindness is caused due to deficiency of <strong>Vitamin A</strong>.",
        rubric: [{ key: "Correct blanks: Rickets, Vitamin B1, Scurvy, Vitamin A", marks: "3 Marks" }]
      }
    ],
    cbq: {
      title: "Public Health Case Study: Mid-Day Meal Nutritional Balance",
      question: "In a rural school, students showed symptoms of bleeding gums, weak bones, and persistent fatigue. (a) Identify the likely nutrient deficiencies. (b) Recommend dietary modifications using locally available affordable food items.",
      answer: "<strong>(a) Deficiencies:</strong> Bleeding gums indicate <em>Vitamin C deficiency (Scurvy)</em>; weak bones indicate <em>Calcium and Vitamin D deficiency (Rickets)</em>; fatigue indicates <em>Iron deficiency (Anaemia)</em>.<br><strong>(b) Diet Recommendations:</strong> Introduce amla, lemons, and guava (Vit C), green leafy vegetables like moringa/spinach (Iron), milk or fortified pulses, and ragi/millet porridge (Calcium)."
    }
  },
  {
    num: 2,
    id: "ch_cs2",
    title: "Sorting Materials into Groups",
    desc: "Objects Around Us, Properties of Materials (Appearance, Hardness, Solubility, Flotation, Transparency — Transparent, Translucent, Opaque)",
    concepts: [
      "Lustre: Shine exhibited by freshly cut metals (Gold, Silver, Copper, Iron).",
      "Solubility: Substances that dissolve completely in water (Salt, Sugar) vs Insoluble (Sand, Chalk powder).",
      "Density / Flotation: Objects lighter than water float (Dry leaves, Wood, Oil); heavier objects sink (Coins, Pebbles).",
      "Transparency: Transparent (Glass, Water, Clear air), Translucent (Oiled paper, Frosted glass), Opaque (Wood, Cardboard, Metal sheet)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="140" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="100" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">Transparent</text><text x="100" y="65" font-family="sans-serif" font-size="10" fill="#1e40af" text-anchor="middle">Clear view (Glass)</text><rect x="200" y="20" width="140" height="60" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="270" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Translucent</text><text x="270" y="65" font-family="sans-serif" font-size="10" fill="#92400e" text-anchor="middle">Partial view (Tracing)</text><rect x="370" y="20" width="140" height="60" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="440" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#b91c1c" text-anchor="middle">Opaque</text><text x="440" y="65" font-family="sans-serif" font-size="10" fill="#991b1b" text-anchor="middle">No view (Wood, Metal)</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Name five objects which can be made from wood. Select those objects from the following which shine: Glass bowl, Plastic toy, Steel spoon, Cotton shirt.",
        marks: 3,
        ans: "<strong>Material Identification:</strong><br>• Objects made from wood: <strong>Table, Chair, Door, Bed, Bullock cart</strong>.<br>• Objects that shine (have lustre): <strong>Glass bowl</strong> and <strong>Steel spoon</strong> (Steel is a metallic alloy; clear glass reflects light with high gloss).",
        rubric: [{ key: "Listing 5 wooden objects", marks: "1.5 Marks" }, { key: "Identifying glass bowl and steel spoon", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Differentiate between transparent, translucent and opaque materials with two examples of each.",
        marks: 3,
        ans: "<strong>Optical Properties of Materials:</strong><br>• <strong>Transparent:</strong> Materials through which light passes completely and objects can be seen clearly. Examples: <em>Clear glass, pure water</em>.<br>• <strong>Translucent:</strong> Materials through which light passes partially and objects cannot be seen clearly. Examples: <em>Butter paper, frosted glass</em>.<br>• <strong>Opaque:</strong> Materials through which light cannot pass at all and we cannot see through them. Examples: <em>Wood, iron sheet</em>.",
        rubric: [{ key: "Clear scientific definitions of all three categories", marks: "1.5 Marks" }, { key: "Two accurate real-life examples for each", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Commercial Packaging Engineering: Eco-Friendly Material Selection",
      question: "A beverage company wants to design a container for fresh orange juice. (a) Why is cardboard coated with wax preferred over plain iron cans? (b) Why are shopkeepers keen on displaying candies in transparent plastic or glass jars?",
      answer: "<strong>(a) Waxed Cardboard:</strong> Iron reacts with citric acid present in orange juice (acid-metal corrosion causing food poisoning), whereas food-grade waxed paper is inert, lightweight, and impermeable to moisture.<br><strong>(b) Transparent Jars:</strong> Transparency allows customers and children to easily see the confectionery without opening the containers."
    }
  },
  {
    num: 3,
    id: "ch_cs3",
    title: "Separation of Substances",
    desc: "Methods of Separation: Handpicking, Threshing, Winnowing, Sieving, Sedimentation, Decantation, Filtration, Evaporation, Condensation, Saturated Solutions",
    concepts: [
      "Solid-Solid Mixtures: Handpicking (size difference), Threshing (beating stalks to separate grain), Winnowing (wind separates lighter husk), Sieving (fine particles pass mesh).",
      "Solid-Liquid Mixtures: Sedimentation (heavier solids settle down), Decantation (pouring clear liquid), Filtration (filter paper holds residue).",
      "Solubility & Thermal Separation: Evaporation (liquid vaporizes leaving salt), Condensation (steam cools into liquid water).",
      "Saturated Solution: A solution in which no more solute can be dissolved at that temperature."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Separation Sequence for Sand + Salt + Water</text><text x="270" y="65" font-family="sans-serif" font-size="11" fill="#1d4ed8" text-anchor="middle">Dissolution -> Filtration (Sand Residue) -> Evaporation (Salt Crystals)</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Why do we need to separate different components of a mixture? Give two examples.",
        marks: 3,
        ans: "<strong>Purpose of Separation:</strong><br>1. <strong>To remove harmful or non-useful substances:</strong> E.g., Small stones and dirt picked by hand from rice and pulses before cooking.<br>2. <strong>To obtain useful components:</strong> E.g., Churning curd or milk to obtain butter.<br>3. <strong>To obtain pure substances:</strong> E.g., Extracting common salt from seawater by evaporation.",
        rubric: [{ key: "Stating removal of harmful substances + example", marks: "1.5 Marks" }, { key: "Stating extraction of pure/useful components + example", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "What is winnowing? Where is it used? How will you separate sand and water from their mixture?",
        marks: 3,
        ans: "<strong>Winnowing & Filtration:</strong><br>• <strong>Winnowing:</strong> Method used to separate heavier and lighter components of a mixture by wind or blowing air. Used by farmers to separate light husk from heavy wheat grains.<br>• <strong>Separating Sand & Water:</strong><br>1. Allow mixture to stand undisturbed: Heavy sand particles settle at bottom (<strong>Sedimentation</strong>).<br>2. Pour clear water gently into another beaker (<strong>Decantation</strong>).<br>3. Pass remaining liquid through a filter paper cone to retain sand particles on the paper (<strong>Filtration</strong>).",
        rubric: [{ key: "Definition and agricultural use of winnowing", marks: "1.5 Marks" }, { key: "Sedimentation, decantation, and filtration steps", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Municipal Water Treatment Plant: River Water Purification",
      question: "Turbid river water containing mud, suspended clay, and dissolved salts arrives at a water treatment plant. (a) Describe the step used to remove floating twigs and large debris. (b) Explain how alum helps settle colloidal clay particles (coagulation). (c) How are dissolved salts separated from water if drinking water is required?",
      answer: "<strong>(a) Large Debris:</strong> Large physical bar screens (mechanical sieving/screening).<br><strong>(b) Alum Coagulation:</strong> Alum particles neutralize negative electrical charges on fine colloidal clay particles, causing them to aggregate into heavier flocs that rapidly settle by sedimentation.<br><strong>(c) Dissolved Salts:</strong> By <em>Reverse Osmosis (RO)</em> or <em>Distillation (Evaporation followed by Condensation)</em>."
    }
  },
  {
    num: 4,
    id: "ch_cs4",
    title: "Getting to Know Plants",
    desc: "Herbs, Shrubs, Trees, Creepers & Climbers, Parts of a Leaf (Petiole, Lamina, Veins, Venation — Reticulate & Parallel), Transpiration, Photosynthesis, Roots (Taproot & Fibrous), Flower Anatomy (Sepals, Petals, Stamens, Pistil)",
    concepts: [
      "Plant Habitats: Herbs (green tender stems), Shrubs (woody stem branching near base), Trees (thick hard stem branching high up).",
      "Leaf Venation: Reticulate (netted, linked to taproot) vs Parallel (linear, linked to fibrous root).",
      "Transpiration: Evaporation of water vapour from stomata in leaves.",
      "Flower Structure: Sepals (outer green calyx), Petals (coloured corolla), Stamen (male organ: anther + filament), Pistil (female organ: stigma + style + ovary with ovules)."
    ],
    svg: `<svg viewBox="0 0 540 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="15" width="500" height="90" rx="8" fill="#fdf2f8" stroke="#db2777" stroke-width="2"/><text x="270" y="38" font-family="sans-serif" font-size="12" font-weight="700" fill="#9d174d" text-anchor="middle">Parts of a Typical Flower</text><text x="70" y="65" font-family="sans-serif" font-size="11" fill="#be185d">Sepals (Calyx)</text><text x="175" y="65" font-family="sans-serif" font-size="11" fill="#be185d">Petals (Corolla)</text><text x="310" y="65" font-family="sans-serif" font-size="11" font-weight="700" fill="#b91c1c">Stamen (Anther+Filament)</text><text x="440" y="65" font-family="sans-serif" font-size="11" font-weight="700" fill="#047857">Pistil (Stigma+Style+Ovary)</text><text x="270" y="90" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">Male Reproductive Organ = Stamen | Female Reproductive Organ = Pistil</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Differentiate between herbs, shrubs and trees with two examples of each. What are creepers and climbers?",
        marks: 4,
        ans: "<strong>Classification of Plants:</strong><br>• <strong>Herbs:</strong> Small plants with green, soft and tender stems, usually short with few branches. Examples: <em>Tomato, Wheat, Grass</em>.<br>• <strong>Shrubs:</strong> Medium-sized plants with hard, woody stems branching out near the base. Examples: <em>Rose, Lemon, Hibiscus</em>.<br>• <strong>Trees:</strong> Tall plants with a thick, hard, brown woody trunk branching high above ground. Examples: <em>Mango, Neem, Banyan</em>.<br>• <strong>Creepers:</strong> Plants with weak stems that cannot stand upright and spread on ground (e.g., <em>Pumpkin, Watermelon</em>).<br>• <strong>Climbers:</strong> Plants with weak stems that take support of neighbouring structures to climb up (e.g., <em>Money plant, Pea plant</em>).",
        rubric: [{ key: "Herbs, shrubs, trees definitions and examples", marks: "2.5 Marks" }, { key: "Creepers and climbers distinction", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "What is transpiration? Describe an activity using a polythene bag to demonstrate transpiration in plants.",
        marks: 3,
        ans: "<strong>Transpiration Demonstration:</strong><br>• <strong>Definition:</strong> Transpiration is the biological process by which excess water is released from plant leaves into the atmosphere in the form of water vapour through microscopic stomatal pores.<br>• <strong>Activity:</strong><br>1. Take a healthy potted plant kept in sunlight.<br>2. Enclose a leafy branch inside a clean, dry transparent polythene bag and tie its mouth firmly with thread.<br>3. Keep the plant in bright sunshine for 2 hours.<br>• <strong>Observation:</strong> Tiny droplets of water appear condensed on the inner walls of the bag.<br>• <strong>Conclusion:</strong> Water evaporated from leaves through transpiration.",
        rubric: [{ key: "Scientific definition of transpiration", marks: "1 Mark" }, { key: "Activity setup and polythene tying", marks: "1 Mark" }, { key: "Observation of droplets and inference", marks: "1 Mark" }]
      }
    ],
    cbq: {
      title: "Botanical Survey: Desert Flora Adaptation",
      question: "A botanist investigates an Acacia (Babool) and a Cactus in Rajasthan. (a) Why are leaves reduced to spines or thorns? (b) Which plant organ performs photosynthesis in a Cactus? (c) How do extensive taproots help desert shrubs survive long dry spells?",
      answer: "<strong>(a) Leaf Reduction:</strong> Leaves are reduced to spines to eliminate water loss through transpiration and protect the plant from grazing herbivores.<br><strong>(b) Photosynthesis:</strong> The green, fleshy stem takes over photosynthesis and contains chlorophyll.<br><strong>(c) Taproots:</strong> Deep taproots penetrate dozens of metres into the subsoil to tap into deep groundwater aquifers."
    }
  },
  {
    num: 5,
    id: "ch_cs5",
    title: "Body Movements",
    desc: "Human Skeleton & Cartilage, Joint Mechanics (Ball and Socket, Hinge, Pivotal, Fixed Joints), Muscles & Contraction, Locomotion in Animals (Earthworm, Snail, Cockroach, Birds, Fish, Snakes)",
    concepts: [
      "Ball and Socket Joint: Allows movement in all directions (Shoulder and Hip joints).",
      "Pivotal Joint: Cylindrical bone rotates in a ring (Neck joint where head joins neck).",
      "Hinge Joint: Allows movement only back and forth like a door hinge (Elbow and Knee).",
      "Fixed Joint: Bones cannot move (Cranium / upper jaw in skull).",
      "Animal Locomotion: Earthworm (hydrostatic skeleton & bristles), Snail (muscular foot), Fish (streamlined body & caudal fin), Snake (curving loops)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="500" height="65" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Four Types of Skeletal Joints</text><text x="80" y="65" font-family="sans-serif" font-size="10" fill="#1d4ed8">Ball & Socket (360°)</text><text x="200" y="65" font-family="sans-serif" font-size="10" fill="#1d4ed8">Hinge (180° Back/Forth)</text><text x="330" y="65" font-family="sans-serif" font-size="10" fill="#1d4ed8">Pivotal (Neck rotation)</text><text x="445" y="65" font-family="sans-serif" font-size="10" fill="#1d4ed8">Fixed (Upper jaw)</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Fill in the blanks: (a) The joint where our neck joins the head is a _____ joint. (b) The joint at the elbow is a _____ joint. (c) The contraction of the _____ pulls the bones during movement. (d) The skull bones are joined by _____ joints.",
        marks: 3,
        ans: "<strong>Skeletal System Blanks:</strong><br>• (a) The joint where our neck joins the head is a <strong>pivotal</strong> joint.<br>• (b) The joint at the elbow is a <strong>hinge</strong> joint.<br>• (c) The contraction of the <strong>muscle</strong> pulls the bones during movement.<br>• (d) The skull bones are joined by <strong>fixed</strong> joints.",
        rubric: [{ key: "Correct answers: Pivotal, Hinge, Muscle, Fixed", marks: "3 Marks" }]
      },
      {
        num: 2,
        title: "Explain how a fish moves in water. How does a snake slither forward?",
        marks: 3,
        ans: "<strong>Locomotion in Fish and Snake:</strong><br>• <strong>Fish:</strong> Possesses a <em>streamlined body shape</em> which minimizes water resistance. During swimming, muscles on one side of the body contract, bending the body into a curve while the tail swings to the opposite side. The sudden jerk of the tail fin (caudal fin) propels the fish forward.<br>• <strong>Snake:</strong> Has a long backbone and interconnected thin muscles. The snake's body curves into multiple side-to-side loops. Each loop presses against the ground to give a forward push, moving the snake forward rapidly in a wave-like slithering motion.",
        rubric: [{ key: "Streamlined shape and caudal fin mechanism of fish", marks: "1.5 Marks" }, { key: "Backbone and lateral loop mechanics of snake", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Biomechanics & Sports Science: Knee Joint Rehabilitation",
      question: "An athlete suffers an injury to the knee ligament. (a) What type of joint is the knee, and what planes of motion does it allow? (b) Explain why muscles always work in antagonistic pairs (such as biceps and triceps) to move a limb.",
      answer: "<strong>(a) Knee Joint:</strong> A <em>hinge joint</em> that allows movement restricted to one plane (flexion and extension, like opening and closing a door).<br><strong>(b) Antagonistic Muscle Pairs:</strong> A muscle can only pull; it cannot push. Therefore, two muscles are required to move a bone in opposite directions: when one muscle contracts to pull the bone, the partner muscle relaxes; to return the bone, the partner contracts while the first relaxes."
    }
  },
  {
    num: 6,
    id: "ch_cs6",
    title: "The Living Organisms — Characteristics and Habitats",
    desc: "Biotic and Abiotic Components, Terrestrial Habitats (Deserts, Mountains, Grasslands), Aquatic Habitats (Oceans, Ponds), Adaptations of Camel, Fish, Cactus & Mountain Animals, Characteristics of Life",
    concepts: [
      "Habitat: The natural dwelling place where an organism lives and thrives.",
      "Adaptation: Specific morphological and physiological features that enable an organism to survive in its environment.",
      "Biotic Components (Living: Plants, Animals, Microbes) vs Abiotic (Non-living: Rocks, Soil, Air, Water, Sunlight).",
      "Characteristics of Life: Cellular structure, Nutrition, Respiration, Growth, Response to Stimuli, Excretion, Reproduction, Movement."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="220" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="140" y="45" font-family="sans-serif" font-size="12" font-weight="700" fill="#b45309" text-anchor="middle">Desert Habitat (Camel/Cactus)</text><text x="140" y="65" font-family="sans-serif" font-size="10" fill="#92400e" text-anchor="middle">Water conservation, thick skin</text><rect x="290" y="20" width="220" height="60" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="400" y="45" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Aquatic Habitat (Fish/Lotus)</text><text x="400" y="65" font-family="sans-serif" font-size="10" fill="#1d4ed8" text-anchor="middle">Gills, streamlined, waxy leaves</text></svg>`,
    questions: [
      {
        num: 1,
        title: "How is a camel adapted to survive in a desert? How are fish adapted to survive in water?",
        marks: 4,
        ans: "<strong>Organism Adaptations:</strong><br>• <strong>Camel Adaptations:</strong><br>1. Long legs keep the body away from the scorching heat of the sand.<br>2. Excretes very small amounts of concentrated urine and dry dung.<br>3. Does not sweat; can survive for days without drinking water.<br>4. Wide, padded flat hooves enable comfortable walking on loose sand.<br>• <strong>Fish Adaptations:</strong><br>1. Streamlined spindle shape allows smooth swimming with minimal water friction.<br>2. Slippery scales and mucus coating protect the body.<br>3. Gills extract dissolved oxygen from water for respiration.<br>4. Flat fins and tail maintain balance and steer direction.",
        rubric: [{ key: "Listing 4 camel desert adaptations", marks: "2 Marks" }, { key: "Listing 4 fish aquatic adaptations", marks: "2 Marks" }]
      },
      {
        num: 2,
        title: "What are the common characteristics of living things? Explain 'Response to Stimuli' with an example.",
        marks: 3,
        ans: "<strong>Characteristics of Living Beings:</strong><br>1. Need food and energy. 2. Show growth. 3. Respire to release energy. 4. Respond to environmental stimuli. 5. Excrete metabolic wastes. 6. Reproduce their own kind. 7. Show movement.<br>• <strong>Response to Stimuli:</strong> Changes in our surroundings that make us respond to them are called stimuli. Example: When our hand accidentally touches a hot stove plate, we reflexively pull our hand away immediately. Similarly, leaves of <em>Mimosa pudica (Touch-me-not plant)</em> fold up instantly when touched.",
        rubric: [{ key: "Listing core life characteristics", marks: "1.5 Marks" }, { key: "Definition of stimuli and valid plant/animal example", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Alpine Ecology: Himalayan Snow Leopard Adaptations",
      question: "Snow leopards inhabit freezing craggy mountain slopes above 3,500 m altitude. (a) What adaptations protect their paws from freezing and slipping? (b) Why do mountain animals have a high concentration of red blood cells? (c) How does thick white-grey fur serve dual functions?",
      answer: "<strong>(a) Paw Adaptations:</strong> Broad paws acting as natural snowshoes with thick fur on foot-pads providing insulation and grip on icy rocks.<br><strong>(b) High RBC Count:</strong> At high altitudes, oxygen partial pressure is low; increased red blood cells allow efficient oxygen binding and cellular transport.<br><strong>(c) Dual Function of Fur:</strong> Exceptional thermal insulation against sub-zero blizzards and camouflage against rocky snow terrain for stalking prey."
    }
  },
  {
    num: 7,
    id: "ch_cs7",
    title: "Motion and Measurement of Distances",
    desc: "Story of Transport, Standard Units of Measurement, International System of Units (SI Units), Measuring Length with Ruler, Types of Motion (Rectilinear, Circular, Periodic, Rotational)",
    concepts: [
      "Standard Unit: A unit of measurement that has a fixed value and does not change from person to person.",
      "SI Units: Length (Metre, m), Mass (Kilogram, kg), Time (Second, s). 1 km = 1,000 m; 1 m = 100 cm; 1 cm = 10 mm.",
      "Rectilinear Motion: Motion along a straight line (March-past of soldiers, falling apple).",
      "Circular Motion: Motion along a circular path where distance from center remains constant (Hands of clock, blades of fan).",
      "Periodic Motion: Motion that repeats itself at regular intervals of time (Pendulum, swing, strings of guitar)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="140" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="100" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">Rectilinear</text><text x="100" y="65" font-family="sans-serif" font-size="10" fill="#1e40af" text-anchor="middle">Straight line (Car on road)</text><rect x="200" y="20" width="140" height="60" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="270" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Circular</text><text x="270" y="65" font-family="sans-serif" font-size="10" fill="#92400e" text-anchor="middle">Fixed radius (Fan blades)</text><rect x="370" y="20" width="140" height="60" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/><text x="440" y="45" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">Periodic</text><text x="440" y="65" font-family="sans-serif" font-size="10" fill="#166534" text-anchor="middle">Repeats in time (Pendulum)</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Why can a pace or a footstep not be used as a standard unit of length? What is the SI unit of length?",
        marks: 3,
        ans: "<strong>Standard Units of Measurement:</strong><br>• <strong>Footstep Variation:</strong> The length of a footstep, handspan, or cubit varies from person to person based on physical stature. If footsteps were used, the measured distance would differ depending on who measured it, leading to commercial confusion.<br>• <strong>SI Unit:</strong> The International System of Units (SI unit) of length is the <strong>Metre (m)</strong>.",
        rubric: [{ key: "Explanation of individual human variability", marks: "1.5 Marks" }, { key: "Stating SI unit = Metre (m)", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Identify the type of motion in each case: (a) Motion of a child on a swing. (b) Motion of the needle of a sewing machine. (c) Motion of a vehicle on a straight road. (d) Motion of the wheel of a moving bicycle.",
        marks: 3,
        ans: "<strong>Classification of Motion:</strong><br>• (a) Motion of a child on a swing: <strong>Periodic motion (and oscillatory motion)</strong>.<br>• (b) Motion of needle of sewing machine: <strong>Periodic motion</strong>.<br>• (c) Motion of vehicle on straight road: <strong>Rectilinear motion</strong>.<br>• (d) Wheel of moving bicycle: Exhibits both <strong>Rotational motion</strong> (about its axle) and <strong>Rectilinear motion</strong> (advancing forward on road).",
        rubric: [{ key: "Correct types for (a), (b), (c)", marks: "1.5 Marks" }, { key: "Dual motion identification for bicycle wheel", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Precision Metrology: Industrial Measurement Accuracy",
      question: "While measuring the length of a metal rod with a broken ruler whose zero mark is damaged, a student aligns the end with the 2.5 cm mark and reads the other end at 18.2 cm. (a) What is the true length of the rod? (b) State two essential precautions to avoid parallax error while reading a ruler.",
      answer: "<strong>(a) True Length:</strong> Actual Length = Final Reading - Initial Reading = 18.2 cm - 2.5 cm = <strong>15.7 cm</strong>.<br><strong>(b) Precautions:</strong><br>1. Keep the eye positioned vertically directly above the point where the measurement is taken.<br>2. Place the ruler strictly parallel and in contact along the edge of the object being measured."
    }
  },
  {
    num: 8,
    id: "ch_cs8",
    title: "Light, Shadows and Reflections",
    desc: "Luminous & Non-Luminous Objects, Transparent, Translucent & Opaque Objects, Formation of Shadows, Pinhole Camera Mechanics (Inverted Images), Mirrors and Law of Reflection",
    concepts: [
      "Light travels in straight lines (Rectilinear propagation of light).",
      "Shadow: Formed when an opaque object blocks the path of light. Requires: Light source, Opaque object, and Screen.",
      "Pinhole Camera: Forms real, inverted, and coloured image of distant objects without glass lenses.",
      "Reflection: Bouncing back of light rays from a polished surface (plane mirror)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="50" r="15" fill="#facc15" stroke="#ca8a04"/><line x1="85" y1="50" x2="190" y2="50" stroke="#f59e0b" stroke-width="2"/><rect x="200" y="25" width="15" height="50" fill="#0f172a"/><line x1="215" y1="50" x2="380" y2="50" stroke="#475569" stroke-width="2" stroke-dasharray="3,3"/><rect x="390" y="10" width="10" height="80" fill="#cbd5e1" stroke="#94a3b8"/><rect x="388" y="25" width="14" height="50" fill="#0f172a"/><text x="440" y="55" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f172a">Dark Shadow</text><text x="60" y="85" font-family="sans-serif" font-size="10" fill="#854d0e" text-anchor="middle">Light Source</text><text x="208" y="90" font-family="sans-serif" font-size="10" fill="#0f172a" text-anchor="middle">Opaque Object</text><text x="395" y="98" font-family="sans-serif" font-size="10" fill="#475569" text-anchor="middle">Screen</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Explain why shadows are dark regardless of the colour of the opaque object. What are the three essential conditions required to form a shadow?",
        marks: 3,
        ans: "<strong>Nature of Shadows:</strong><br>• <strong>Darkness of Shadows:</strong> A shadow is simply a region of darkness formed where an opaque object completely blocks light from reaching a screen. Since no light falls in that blocked region, a shadow always appears black or dark grey, regardless of whether the object is red, yellow, or green.<br>• <strong>Three Essential Conditions:</strong><br>1. A source of light.<br>2. An opaque object to obstruct the light rays.<br>3. A screen (ground, wall, cardboard) upon which the shadow falls.",
        rubric: [{ key: "Scientific explanation that shadow is absence of light", marks: "1.5 Marks" }, { key: "Three conditions: Source, Opaque body, Screen", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "How does a pinhole camera work? What are the characteristics of the image formed by a pinhole camera?",
        marks: 3,
        ans: "<strong>Pinhole Camera Working:</strong><br>• <strong>Principle:</strong> Based on the rectilinear propagation of light (light travels in straight lines).<br>• Light rays from the top of an object pass straight through the tiny pinhole and strike the bottom of the tracing paper screen; light rays from the bottom pass straight through and strike the top.<br>• <strong>Characteristics of Image:</strong><br>1. <strong>Inverted</strong> (upside down).<br>2. <strong>Real</strong> (formed on a screen).<br>3. Shows the natural colours of the object.",
        rubric: [{ key: "Rectilinear propagation principle", marks: "1 Mark" }, { key: "Ray crossing explanation through pinhole", marks: "1 Mark" }, { key: "Image features: Inverted, real, coloured", marks: "1 Mark" }]
      }
    ],
    cbq: {
      title: "Solar Eclipse Astronomy: Natural Pinhole Cameras in Nature",
      question: "During a solar eclipse, round circular patches of light appear on the ground beneath a dense tree. (a) What acts as pinholes in this natural phenomenon? (b) What do the circular light patches represent? (c) Why is it dangerous to view the sun directly without solar filter goggles?",
      answer: "<strong>(a) Natural Pinholes:</strong> The tiny irregular gaps between overlapping leaves in the dense tree canopy act as natural pinholes.<br><strong>(b) Light Patches:</strong> They are real, inverted pinhole images of the Sun (displaying the crescent shape of the eclipsed sun).<br><strong>(c) Safety Risk:</strong> Concentrated ultraviolet and infrared rays from direct sunlight focus on the eye's retina, causing permanent photochemical retinal burns (solar retinopathy)."
    }
  },
  {
    num: 9,
    id: "ch_cs9",
    title: "Electricity and Circuits",
    desc: "Electric Cell (Terminal Anode & Cathode), Electric Bulb & Filament, Closed & Open Electric Circuit, Electric Switch, Electrical Conductors & Insulators",
    concepts: [
      "Electric Cell: Converts chemical energy into electrical energy. Has a positive (+) metal cap and a negative (-) flat metal disc.",
      "Electric Bulb: Has a thin coiled wire called filament (made of Tungsten) that glows when current passes. Supported by two thick wires.",
      "Electric Circuit: Complete closed conducting loop allowing current to flow from positive terminal to negative terminal.",
      "Switch: A simple mechanical device that breaks or completes a circuit.",
      "Conductors (allow electricity: Copper, Aluminium, Iron, Graphite) vs Insulators (do not allow: Rubber, Plastic, Wood, Glass)."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="35" width="70" height="30" rx="4" fill="#0f172a"/><circle cx="125" cy="50" r="5" fill="#f59e0b"/><text x="40" y="55" font-family="sans-serif" font-size="12" font-weight="800" fill="#ef4444">-</text><text x="135" y="55" font-family="sans-serif" font-size="12" font-weight="800" fill="#16a34a">+</text><line x1="125" y1="50" x2="250" y2="50" stroke="#dc2626" stroke-width="2.5"/><line x1="250" y1="50" x2="290" y2="30" stroke="#475569" stroke-width="2.5"/><circle cx="250" cy="50" r="3" fill="#0f172a"/><circle cx="310" cy="50" r="3" fill="#0f172a"/><line x1="310" y1="50" x2="420" y2="50" stroke="#2563eb" stroke-width="2.5"/><circle cx="435" cy="50" r="14" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><line x1="435" y1="64" x2="435" y2="85" stroke="#2563eb" stroke-width="2.5"/><line x1="435" y1="85" x2="50" y2="85" stroke="#2563eb" stroke-width="2.5"/><line x1="50" y1="85" x2="50" y2="65" stroke="#2563eb" stroke-width="2.5"/><text x="280" y="20" font-family="sans-serif" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">Open Switch (Off)</text><text x="270" y="98" font-family="sans-serif" font-size="10" fill="#475569" text-anchor="middle">Electric Circuit Diagram with Battery, Switch and Bulb</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Explain why the bulb does not glow in an open circuit. What happens when the filament of an electric bulb breaks?",
        marks: 3,
        ans: "<strong>Circuit Continuity:</strong><br>• <strong>Open Circuit:</strong> An electric current requires an unbroken, continuous closed loop of conducting material from the positive terminal of the cell to the negative terminal. When the circuit is open (switch OFF or wire disconnected), the conducting path is broken, current ceases to flow, and the bulb does not glow.<br>• <strong>Fused Bulb:</strong> When the filament of an electric bulb breaks, the circuit inside the bulb is fractured. Because the path of current between the cell's terminals is broken, current cannot flow, and the fused bulb will not glow.",
        rubric: [{ key: "Requirement of closed path for current", marks: "1.5 Marks" }, { key: "Explanation of fused bulb breaking circuit", marks: "1.5 Marks" }]
      },
      {
        num: 2,
        title: "Why should an electrician wear rubber gloves while repairing an electric switch at your home? Differentiate conductors and insulators.",
        marks: 3,
        ans: "<strong>Electrical Safety & Materials:</strong><br>• <strong>Rubber Gloves:</strong> Rubber is an electrical insulator. The human body is a good conductor of electricity. If an electrician touches a live wire with bare hands, electric current flows through the body to the ground, causing severe electric shock. Wearing rubber gloves breaks the circuit and protects the electrician.<br>• <strong>Conductors:</strong> Materials that allow electricity to flow through them freely (e.g., <em>Copper, Aluminium, Iron</em>).<br>• <strong>Insulators:</strong> Materials that do not allow electric current to pass through them (e.g., <em>Rubber, Plastic, Glass</em>).",
        rubric: [{ key: "Explaining human conductivity and insulating role of rubber", marks: "1.5 Marks" }, { key: "Definitions and examples of conductors vs insulators", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Electrical Hazard Safety: Home Appliances Installation",
      question: "During home wiring, an electrician uses copper wires coated with PVC plastic and plugs made of Bakelite. (a) What is the function of the copper core? (b) What is the function of the outer PVC coating? (c) Why is water hazardous near electrical switchboards?",
      answer: "<strong>(a) Copper Core:</strong> High electrical conductivity allowing efficient electrical energy transmission with minimal resistance.<br><strong>(b) PVC Coating:</strong> Acts as an insulator preventing electric shock when handling cables and preventing short circuits if wires touch.<br><strong>(c) Water Hazard:</strong> Tap water contains dissolved minerals and salts, making it a good conductor of electricity. Water near switches can conduct electricity to human hands, causing fatal electric shocks."
    }
  },
  {
    num: 10,
    id: "ch_cs10",
    title: "Fun with Magnets",
    desc: "Discovery of Magnets (Magnes shepherd), Magnetic and Non-Magnetic Materials, Poles of Magnet (North and South), Magnetic Compass for Navigation, Attraction and Repulsion Rules, Caring for Magnets",
    concepts: [
      "Magnetic Materials: Attracted by a magnet (Iron, Nickel, Cobalt). Non-magnetic: Wood, Plastic, Glass, Copper.",
      "Poles: Regions near the two ends of a magnet where magnetic attraction is strongest (North Pole N and South Pole S). Poles always exist in pairs.",
      "Law of Magnetic Poles: Like poles repel each other (N-N or S-S repel); Unlike poles attract each other (N-S attract).",
      "Direction Finding: A freely suspended bar magnet always aligns in the North-South direction."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="30" width="80" height="40" fill="#dc2626"/><text x="100" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">N</text><rect x="140" y="30" width="80" height="40" fill="#2563eb"/><text x="180" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">S</text><rect x="320" y="30" width="80" height="40" fill="#dc2626"/><text x="360" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">N</text><rect x="400" y="30" width="80" height="40" fill="#2563eb"/><text x="440" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">S</text><path d="M 225,50 L 315,50" stroke="#16a34a" stroke-width="3" stroke-dasharray="4,4"/><text x="270" y="42" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">Attraction (Unlike Poles N-S)</text><text x="270" y="90" font-family="sans-serif" font-size="10" fill="#475569" text-anchor="middle">Bar Magnet: Strongest magnetic pull concentrated at both poles</text></svg>`,
    questions: [
      {
        num: 1,
        title: "Where are the poles of a bar magnet located? How will you find the north pole of a magnet if it is not marked?",
        marks: 3,
        ans: "<strong>Poles & Direction Finding:</strong><br>• <strong>Location of Poles:</strong> The poles are located at the two extreme ends of the bar magnet. Iron filings sprinkled on a sheet over a magnet accumulate most heavily at these two terminal points.<br>• <strong>Identifying North Pole:</strong><br>1. Suspend the unmarked bar magnet freely from its center using a light thread so it can rotate freely in a horizontal plane.<br>2. Wait until the magnet comes to rest.<br>3. The end that consistently points towards the geographical North is its <strong>North-seeking pole (North pole)</strong>; the opposite end pointing South is its <strong>South pole</strong>.",
        rubric: [{ key: "Poles located at two extreme ends", marks: "1 Mark" }, { key: "Free suspension method with thread", marks: "1 Mark" }, { key: "Alignment with geographical North-South", marks: "1 Mark" }]
      },
      {
        num: 2,
        title: "State the law of attraction and repulsion between magnets. How should magnets be stored safely to avoid self-demagnetization?",
        marks: 3,
        ans: "<strong>Magnetic Interaction & Storage:</strong><br>• <strong>Law of Magnetic Poles:</strong><br>1. <em>Like poles repel</em> each other (North repels North; South repels South).<br>2. <em>Unlike poles attract</em> each other (North attracts South).<br>• <strong>Safe Storage of Magnets:</strong><br>1. Bar magnets should always be kept in pairs with opposite poles alongside each other.<br>2. They must be separated by a strip of wood.<br>3. Two pieces of soft iron (magnetic keepers) must be placed across their ends.<br>4. Never heat, hammer, or drop magnets from a height.",
        rubric: [{ key: "Stating like poles repel, unlike poles attract", marks: "1.5 Marks" }, { key: "Storage in pairs with keepers and wood separator", marks: "1.5 Marks" }]
      }
    ],
    cbq: {
      title: "Maritime Navigation: Magnetic Compass Deviations",
      question: "A sailor navigates in open sea using a magnetic compass. (a) Why is the compass needle magnetized? (b) What happens if an iron tool box is placed near the compass? (c) How do magnetic levitation (Maglev) bullet trains utilize magnetic repulsion?",
      answer: "<strong>(a) Compass Needle:</strong> The needle is a tiny, delicate pivot-mounted permanent magnet that aligns freely with Earth's magnetic field lines.<br><strong>(b) Iron Proximity:</strong> The ferromagnetic iron tool box distorts the surrounding magnetic field lines, causing compass deviation (incorrect heading).<br><strong>(c) Maglev Trains:</strong> Electromagnets on the train carriage and track have identical magnetic polarities facing each other. The powerful magnetic repulsion lifts the train 10 mm above the rail, eliminating friction and enabling speeds exceeding 500 km/h."
    }
  },
  {
    num: 11,
    id: "ch_cs11",
    title: "Air Around Us",
    desc: "Atmosphere & Composition of Air (Nitrogen 78%, Oxygen 21%, Carbon Dioxide 0.04%, Water Vapour & Dust), Importance of Oxygen for Respiration & Combustion, Exchange of Gases in Plants & Animals, Wind Energy",
    concepts: [
      "Atmosphere: Thick blanket of air surrounding Earth, extending up to hundreds of kilometres.",
      "Composition of Air: Nitrogen (~78%), Oxygen (~21%), Carbon dioxide, Noble gases, Water vapour, and Smoke/Dust particles (~1%).",
      "Oxygen: Supports burning and respiration. Nitrogen: Does not support burning.",
      "Respiration in Organisms: Earthworms (breathe through skin), Fish (gills breathe dissolved oxygen), Plants (stomata exchange gases).",
      "Carbon Cycle: Plants consume CO2 and release O2 during photosynthesis; animals consume O2 and exhale CO2 during respiration."
    ],
    svg: `<svg viewBox="0 0 540 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="480" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text x="270" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Volumetric Composition of Clean Atmospheric Air</text><text x="120" y="65" font-family="sans-serif" font-size="11" font-weight="700" fill="#1d4ed8">Nitrogen (78%)</text><text x="270" y="65" font-family="sans-serif" font-size="11" font-weight="700" fill="#dc2626">Oxygen (21%)</text><text x="410" y="65" font-family="sans-serif" font-size="11" font-weight="700" fill="#047857">CO₂, Vapour & Dust (1%)</text></svg>`,
    questions: [
      {
        num: 1,
        title: "What is the composition of air? Which gas in the atmosphere is essential for respiration and burning? Describe an experiment showing that air contains oxygen.",
        marks: 4,
        ans: "<strong>Atmospheric Composition & Oxygen Experiment:</strong><br>• <strong>Composition:</strong> Nitrogen (78%), Oxygen (21%), Carbon Dioxide (0.04%), Argon, Water vapour, and Smoke/dust particles (remaining ~1%).<br>• <strong>Essential Gas:</strong> <strong>Oxygen (O₂)</strong> is essential for both respiration and combustion.<br>• <strong>Inverted Tumbler Experiment:</strong><br>1. Fix a lighted candle in a trough filled with coloured water.<br>2. Cover the burning candle with an inverted glass tumbler.<br>3. Observation: After a few moments, the candle flame flickers and goes out, and water rises to fill approximately 1/5th of the tumbler's volume.<br>4. Conclusion: Oxygen occupied 1/5th (20%) of the air inside the tumbler; once consumed by combustion, burning ceased and water rose to occupy the vacuum.",
        rubric: [{ key: "Volumetric composition of air", marks: "1 Mark" }, { key: "Identifying oxygen", marks: "1 Mark" }, { key: "Inverted glass tumbler candle experiment and inference", marks: "2 Marks" }]
      },
      {
        num: 2,
        title: "How do plants and animals help each other in the exchange of gases in the atmosphere? Why do mountaineers carry oxygen cylinders?",
        marks: 3,
        ans: "<strong>Ecological Gas Balance & High Altitude:</strong><br>• <strong>Mutual Gas Exchange:</strong><br>1. Animals consume oxygen during respiration and exhale carbon dioxide.<br>2. Green plants absorb carbon dioxide from air to prepare food by <em>photosynthesis</em> in sunlight and release oxygen back into the atmosphere.<br>3. Because plants produce far more oxygen during photosynthesis than they consume in respiration, the atmospheric balance between O₂ and CO₂ is maintained.<br>• <strong>Mountaineers:</strong> As altitude increases, atmospheric pressure drops and air becomes progressively thinner with lower oxygen density. To prevent altitude sickness and hypoxia, mountaineers carry oxygen cylinders.",
        rubric: [{ key: "Photosynthesis vs Respiration ecological balance", marks: "2 Marks" }, { key: "Thin air and low oxygen density at high altitude", marks: "1 Mark" }]
      }
    ],
    cbq: {
      title: "Environmental Science: Urban Smog & Air Quality Index (AQI)",
      question: "During winter months in metropolitan cities, a thick haze of smog blankets the city. (a) What two components combine to form smog? (b) Why are tall chimneys installed in factories with electrostatic precipitators? (c) Why do traffic police officers stationed at busy crossroads wear respirators?",
      answer: "<strong>(a) Smog Composition:</strong> Smoke (unburnt carbon particles, sulfur dioxide) combined with Fog (condensed water droplets near ground level).<br><strong>(b) Tall Chimneys:</strong> Discharge hot toxic gases and smoke high into the upper atmosphere away from human settlements, while electrostatic precipitators filter out 99% of particulate soot.<br><strong>(c) Traffic Police Respirators:</strong> High concentration of vehicular exhaust contains toxic Carbon Monoxide (CO), nitrogen oxides, and fine PM2.5 particles that enter deep into pulmonary lung alveoli, causing respiratory disorders."
    }
  }
];

// Write file
const outPath = path.join(__dirname, '..', 'data-c6-classic', 'scienceClassicData.js');
const fileContent = `// NCERT Class 6 Science Classic (11 Rationalised Chapters) Data\nmodule.exports = { scienceClassicChapters: ${JSON.stringify(scienceClassicChapters, null, 2)} };\n`;
fs.writeFileSync(outPath, fileContent, 'utf-8');
console.log(`Successfully generated ${scienceClassicChapters.length} Science Classic Chapters in:`, outPath);
