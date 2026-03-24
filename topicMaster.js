// topicMaster.js - The Single Source of Truth for Olympiad Portal

export const TOPIC_MASTER = {
    // MATHEMATICS (IMO)
    "M01": "Number Sense",
    "M02": "Addition / Computation Operations",
    "M03": "Subtraction / Fractions",
    "M04": "Lengths, Weights and Comparisons",
    "M05": "Time",
    "M06": "Money",
    "M07": "Geometrical Shapes",
    "M08": "Decimals / Data Handling",
    "M09": "Data Handling / Rational Numbers",
    "M10": "Mensuration / Practical Geometry",
    "M11": "Algebra / Perimeter and Area",
    "M12": "Ratio and Proportion / Algebraic Expressions",
    "M13": "Symmetry / Exponents and Powers",
    "M14": "Practical Geometry / Factorisation",
    "M15": "Probability / Visualising Solid Shapes",

    // SCIENCE (NSO)
    "S01": "Plants / Nutrition in Plants and Animals",
    "S02": "Animals / Heat",
    "S03": "Human Body / Acids, Bases and Salts",
    "S04": "Food / Physical and Chemical Changes",
    "S05": "Housing and Clothing / Respiration",
    "S06": "Family and Festivals / Transportation",
    "S07": "Good Habits / Reproduction in Plants",
    "S08": "Transport / Motion and Time",
    "S09": "Air and Water / Electric Current",
    "S10": "Earth and Universe / Light",
    "S11": "Air and Water / Forests",
    "S12": "Chemical Effects of Current",
    "S13": "Natural Phenomena",
    "S14": "Light (Advanced)",
    "S15": "Stars and Solar System",
    "S16": "Management of Natural Resources",

    // REASONING
    "R01": "Patterns",
    "R02": "Odd One Out / Analogy",
    "R03": "Measuring Units / Coding-Decoding",
    "R04": "Geometrical Shapes / Blood Relations",
    "R05": "Spatial Understanding / Direction Sense",
    "R06": "Grouping and Analogy / Venn Diagrams",
    "R07": "Ranking Test / Paper Folding",
    "R08": "Series Completion / Cubes and Dice"
};

export const SOF_CURRICULUM = {
    class1: {
        maths: ["M01", "M02", "M03", "M04", "M05", "M06", "M07"],
        science: ["S01", "S02", "S03", "S04", "S05", "S06", "S07", "S08", "S09", "S10"]
    },
    class6: {
        maths: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", "M13", "M14"],
        science: ["S04", "S12", "S03", "S01", "S05", "S06", "S07", "S14", "S09", "S10", "S11"]
    },
    class7: {
        maths: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", "M13", "M14", "M15"],
        science: ["S01", "S02", "S03", "S04", "S05", "S06", "S07", "S08", "S09", "S10", "S11"]
    },
    class10: {
        maths: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12", "M13", "M14", "M15"],
        science: ["S01", "S02", "S03", "S04", "S05", "S06", "S07", "S08", "S09", "S10", "S11", "S12", "S13", "S14", "S15", "S16"]
    }
    // You can continue adding class2 through class9 using the same pattern.
};