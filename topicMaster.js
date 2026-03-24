// topicMaster.js - Cleaned & Separated Source of Truth

// 1. Define Subject-Specific Names
const MATHS_NAMES = {
    "M01": "Number Sense",
    "M02": "Addition",
    "M03": "Subtraction",
    "M04": "Lengths, Weights and Comparisons",
    "M05": "Time",
    "M06": "Money",
    "M07": "Geometrical Shapes",
    "M08": "Data Handling",
    "M09": "Rational Numbers",
    "M10": "Practical Geometry",
    "M11": "Perimeter and Area",
    "M12": "Algebraic Expressions",
    "M13": "Exponents and Powers",
    "M14": "Symmetry",
    "M15": "Visualising Solid Shapes"
};

const SCIENCE_NAMES = {
    "S01": "Plants",
    "S02": "Animals",
    "S03": "Human Body",
    "S04": "Food",
    "S05": "Housing and Clothing",
    "S06": "Family and Festivals",
    "S07": "Good Habits",
    "S08": "Transport",
    "S09": "Air and Water",
    "S10": "Earth and Universe",
    "S11": "Forests",
    "S12": "Chemical Effects of Current",
    "S13": "Natural Phenomena",
    "S14": "Light",
    "S15": "Stars and Solar System",
    "S16": "Management of Natural Resources"
};

// 2. Grade-Specific Overrides (This fixes the "Mixing" problem)
export const TOPIC_MASTER = {
    ...MATHS_NAMES,
    ...SCIENCE_NAMES,
    // Add Grade 7 specific overrides here
    "S01_7": "Nutrition in Plants and Animals",
    "S02_7": "Heat",
    "S03_7": "Acids, Bases and Salts",
    "S04_7": "Physical and Chemical Changes",
    "S05_7": "Respiration in Organisms",
    "S06_7": "Transportation in Plants and Animals",
    "S07_7": "Reproduction in Plants",
    "S08_7": "Motion and Time",
    "S09_7": "Electric Current",
    "S10_7": "Light",
    "S11_7": "Forests and Wastewater"
};

export const SOF_CURRICULUM = {
    class1: {
        maths: ["M01", "M02", "M03", "M04", "M05", "M06", "M07"],
        science: ["S01", "S02", "S03", "S04", "S05", "S06", "S07", "S08", "S09", "S10"]
    },
    class7: {
        maths: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10"],
        // Notice we use the _7 suffix to get the professional Grade 7 names
        science: ["S01_7", "S02_7", "S03_7", "S04_7", "S05_7", "S06_7", "S07_7", "S08_7", "S09_7", "S10_7", "S11_7"]
    }
};
