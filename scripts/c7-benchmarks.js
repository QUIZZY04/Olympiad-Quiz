const fs = require('fs');
const path = require('path');

// Detailed benchmarks for Class 7 NCERT Textbooks
// Based on official Rationalised NCERT Printed Textbooks for CBSE 2026-27

const C7_BENCHMARKS = {
  maths: [
    { ch: 1, title: 'Integers', physicalQ: 15, ex: 'Ex 1.1 (4), Ex 1.2 (4), Ex 1.3 (7)' },
    { ch: 2, title: 'Fractions and Decimals', physicalQ: 23, ex: 'Ex 2.1 (8), Ex 2.2 (4), Ex 2.3 (5), Ex 2.4 (6)' },
    { ch: 3, title: 'Data Handling', physicalQ: 23, ex: 'Ex 3.1 (9), Ex 3.2 (5), Ex 3.3 (6), Ex 3.4 (3)' },
    { ch: 4, title: 'Simple Equations', physicalQ: 17, ex: 'Ex 4.1 (6), Ex 4.2 (4), Ex 4.3 (4), Ex 4.4 (3)' },
    { ch: 5, title: 'Lines and Angles', physicalQ: 20, ex: 'Ex 5.1 (14), Ex 5.2 (6)' },
    { ch: 6, title: 'The Triangle and its Properties', physicalQ: 21, ex: 'Ex 6.1 (3), Ex 6.2 (2), Ex 6.3 (2), Ex 6.4 (6), Ex 6.5 (8)' },
    { ch: 7, title: 'Comparing Quantities', physicalQ: 21, ex: 'Ex 7.1 (10), Ex 7.2 (11)' },
    { ch: 8, title: 'Rational Numbers', physicalQ: 14, ex: 'Ex 8.1 (10), Ex 8.2 (4)' },
    { ch: 9, title: 'Perimeter and Area', physicalQ: 24, ex: 'Ex 9.1 (7), Ex 9.2 (17)' },
    { ch: 10, title: 'Algebraic Expressions', physicalQ: 17, ex: 'Ex 10.1 (7), Ex 10.2 (10)' },
    { ch: 11, title: 'Exponents and Powers', physicalQ: 17, ex: 'Ex 11.1 (8), Ex 11.2 (5), Ex 11.3 (4)' },
    { ch: 12, title: 'Symmetry', physicalQ: 19, ex: 'Ex 12.1 (10), Ex 12.2 (2), Ex 12.3 (7)' },
    { ch: 13, title: 'Visualising Solid Shapes', physicalQ: 14, ex: 'Ex 13.1 (5), Ex 13.2 (5), Ex 13.3 (2), Ex 13.4 (2)' }
  ],
  science: [
    { ch: 1, title: 'Nutrition in Plants', physicalQ: 20, ex: 'Exercises Q1-13 (13) + Intext (7)' },
    { ch: 2, title: 'Nutrition in Animals', physicalQ: 17, ex: 'Exercises Q1-13 (13) + Intext (4)' },
    { ch: 3, title: 'Heat', physicalQ: 14, ex: 'Exercises Q1-11 (11) + Intext (3)' },
    { ch: 4, title: 'Acids, Bases and Salts', physicalQ: 13, ex: 'Exercises Q1-11 (11) + Intext (2)' },
    { ch: 5, title: 'Physical and Chemical Changes', physicalQ: 14, ex: 'Exercises Q1-12 (12) + Intext (2)' },
    { ch: 6, title: 'Respiration in Organisms', physicalQ: 11, ex: 'Exercises Q1-9 (9) + Intext (2)' },
    { ch: 7, title: 'Transportation in Animals and Plants', physicalQ: 15, ex: 'Exercises Q1-13 (13) + Intext (2)' },
    { ch: 8, title: 'Reproduction in Plants', physicalQ: 12, ex: 'Exercises Q1-10 (10) + Intext (2)' },
    { ch: 9, title: 'Motion and Time', physicalQ: 15, ex: 'Exercises Q1-13 (13) + Intext (2)' },
    { ch: 10, title: 'Electric Current and its Effects', physicalQ: 15, ex: 'Exercises Q1-13 (13) + Intext (2)' },
    { ch: 11, title: 'Light', physicalQ: 15, ex: 'Exercises Q1-13 (13) + Intext (2)' },
    { ch: 12, title: 'Forests: Our Lifeline', physicalQ: 15, ex: 'Exercises Q1-13 (13) + Intext (2)' },
    { ch: 13, title: 'Wastewater Story', physicalQ: 14, ex: 'Exercises Q1-12 (12) + Intext (2)' }
  ],
  socialScience: [
    // History (Our Pasts - II)
    { id: 'h1', title: 'Introduction: Tracing Changes Through a Thousand Years', physicalQ: 10, track: 'History' },
    { id: 'h2', title: 'Kings and Kingdoms', physicalQ: 8, track: 'History' },
    { id: 'h3', title: 'Delhi: 12th to 15th Century', physicalQ: 8, track: 'History' },
    { id: 'h4', title: 'The Mughals (16th to 17th Century)', physicalQ: 7, track: 'History' },
    { id: 'h5', title: 'Tribes, Nomads and Settled Communities', physicalQ: 5, track: 'History' },
    { id: 'h6', title: 'Devotional Paths to the Divine', physicalQ: 5, track: 'History' },
    { id: 'h7', title: 'The Making of Regional Cultures', physicalQ: 5, track: 'History' },
    { id: 'h8', title: 'Eighteenth-Century Political Formations', physicalQ: 7, track: 'History' },
    // Geography (Our Environment)
    { id: 'g1', title: 'Environment', physicalQ: 5, track: 'Geography' },
    { id: 'g2', title: 'Inside Our Earth', physicalQ: 5, track: 'Geography' },
    { id: 'g3', title: 'Our Changing Earth', physicalQ: 5, track: 'Geography' },
    { id: 'g4', title: 'Air', physicalQ: 5, track: 'Geography' },
    { id: 'g5', title: 'Water', physicalQ: 5, track: 'Geography' },
    { id: 'g6', title: 'Human-Environment Interactions – Tropical & Subtropical', physicalQ: 5, track: 'Geography' },
    { id: 'g7', title: 'Life in the Deserts', physicalQ: 5, track: 'Geography' },
    // Civics (Social and Political Life - II)
    { id: 'c1', title: 'On Equality', physicalQ: 5, track: 'Civics' },
    { id: 'c2', title: 'Role of the Government in Health', physicalQ: 5, track: 'Civics' },
    { id: 'c3', title: 'How the State Government Works', physicalQ: 5, track: 'Civics' },
    { id: 'c4', title: 'Growing up as Boys and Girls', physicalQ: 4, track: 'Civics' },
    { id: 'c5', title: 'Women Change the World', physicalQ: 5, track: 'Civics' },
    { id: 'c6', title: 'Understanding Media', physicalQ: 4, track: 'Civics' },
    { id: 'c7', title: 'Markets Around Us', physicalQ: 4, track: 'Civics' },
    { id: 'c8', title: 'A Shirt in the Market', physicalQ: 5, track: 'Civics' }
  ],
  hindi: [
    // Vasant भाग - २ (20 chapters)
    { id: 'v1', title: 'हम पंछी उन्मुक्त गगन के', physicalQ: 7, track: 'Vasant भाग - २' },
    { id: 'v2', title: 'दादी माँ', physicalQ: 8, track: 'Vasant भाग - २' },
    { id: 'v3', title: 'हिमालय की बेटियाँ', physicalQ: 7, track: 'Vasant भाग - २' },
    { id: 'v4', title: 'कठपुतली', physicalQ: 7, track: 'Vasant भाग - २' },
    { id: 'v5', title: 'मिठाईवाला', physicalQ: 8, track: 'Vasant भाग - २' },
    { id: 'v6', title: 'रक्त और हमारा शरीर', physicalQ: 8, track: 'Vasant भाग - २' },
    { id: 'v7', title: 'पापा खो गए', physicalQ: 7, track: 'Vasant भाग - २' },
    { id: 'v8', title: 'शाम एक किसान', physicalQ: 6, track: 'Vasant भाग - २' },
    { id: 'v9', title: 'चिड़िया की बच्ची', physicalQ: 7, track: 'Vasant भाग - २' },
    { id: 'v10', title: 'अपूर्व अनुभव', physicalQ: 7, track: 'Vasant भाग - २' },
    { id: 'v11', title: 'रहीम के दोहे', physicalQ: 7, track: 'Vasant भाग - २' },
    { id: 'v12', title: 'कंचा', physicalQ: 7, track: 'Vasant भाग - २' },
    { id: 'v13', title: 'एक तिनका', physicalQ: 7, track: 'Vasant भाग - २' },
    { id: 'v14', title: 'खानपान की बदलती तस्वीर', physicalQ: 7, track: 'Vasant भाग - २' },
    { id: 'v15', title: 'नीलकंठ', physicalQ: 7, track: 'Vasant भाग - २' },
    { id: 'v16', title: 'भोर और बरखा', physicalQ: 7, track: 'Vasant भाग - २' },
    { id: 'v17', title: 'वीर कुंवर सिंह', physicalQ: 7, track: 'Vasant भाग - २' },
    { id: 'v18', title: 'संघर्ष के कारण मैं तुनुकमिज़ाज हो गया: धनराज', physicalQ: 7, track: 'Vasant भाग - २' },
    { id: 'v19', title: 'आश्रम का अनुमानित व्यय', physicalQ: 7, track: 'Vasant भाग - २' },
    { id: 'v20', title: 'विप्लव-गायन', physicalQ: 6, track: 'Vasant भाग - २' },
    // Durva भाग - २ (18 chapters)
    { id: 'd1', title: 'चिड़िया और चुरुंगुन', physicalQ: 5, track: 'Durva भाग - २' },
    { id: 'd2', title: 'सबसे सुंदर लड़की', physicalQ: 4, track: 'Durva भाग - २' },
    { id: 'd3', title: 'मैं हूँ रोबोट', physicalQ: 5, track: 'Durva भाग - २' },
    { id: 'd4', title: 'गुब्बारे पर चीता', physicalQ: 5, track: 'Durva भाग - २' },
    { id: 'd5', title: 'थोड़ी धरती पाऊँ', physicalQ: 5, track: 'Durva भाग - २' },
    { id: 'd6', title: 'गारो', physicalQ: 5, track: 'Durva भाग - २' },
    { id: 'd7', title: 'पुस्तकें जो अमर हैं', physicalQ: 5, track: 'Durva भाग - २' },
    { id: 'd8', title: 'काबुलीवाला', physicalQ: 5, track: 'Durva भाग - २' },
    { id: 'd9', title: 'विश्वेश्वरैया', physicalQ: 5, track: 'Durva भाग - २' },
    { id: 'd10', title: 'हम धरती के लाल', physicalQ: 4, track: 'Durva भाग - २' },
    { id: 'd11', title: 'पोंगल', physicalQ: 5, track: 'Durva भाग - २' },
    { id: 'd12', title: 'शहीद झलकारीबाई', physicalQ: 5, track: 'Durva भाग - २' },
    { id: 'd13', title: 'नृत्यांगना सुधा चंद्रन', physicalQ: 5, track: 'Durva भाग - २' },
    { id: 'd14', title: 'पानी और धूप', physicalQ: 4, track: 'Durva भाग - २' },
    { id: 'd15', title: 'गीत', physicalQ: 4, track: 'Durva भाग - २' },
    { id: 'd16', title: 'मिट्टी की मूर्तियाँ', physicalQ: 5, track: 'Durva भाग - २' },
    { id: 'd17', title: 'मौत का पहाड़', physicalQ: 4, track: 'Durva भाग - २' },
    { id: 'd18', title: 'हम होंगे कामयाब एक दिन', physicalQ: 5, track: 'Durva भाग - २' },
    // Bal Mahabharat Katha (10 units)
    { id: 'm1', title: 'महाभारत कथा व आदि पर्व: देवव्रत और भीष्म प्रतिज्ञा', physicalQ: 5, track: 'Bal Mahabharat' },
    { id: 'm2', title: 'कुंती, विदुर और कर्ण का प्रादुर्भाव', physicalQ: 5, track: 'Bal Mahabharat' },
    { id: 'm3', title: 'आचार्य द्रोण और लाक्षागृह का षड्यंत्र', physicalQ: 5, track: 'Bal Mahabharat' },
    { id: 'm4', title: 'द्रौपदी स्वयंवर और इंद्रप्रस्थ की स्थापना', physicalQ: 5, track: 'Bal Mahabharat' },
    { id: 'm5', title: 'द्यूतक्रीड़ा, द्रौपदी चीरहरण और बारह वर्ष का वनवास', physicalQ: 5, track: 'Bal Mahabharat' },
    { id: 'm6', title: 'मत्स्य देश में अज्ञातवास और विराट का दरबार', physicalQ: 5, track: 'Bal Mahabharat' },
    { id: 'm7', title: 'शांति दूत श्री कृष्ण और युद्ध की घोषणा', physicalQ: 5, track: 'Bal Mahabharat' },
    { id: 'm8', title: 'कुरुक्षेत्र महासमर: भीष्म और द्रोण पर्व', physicalQ: 5, track: 'Bal Mahabharat' },
    { id: 'm9', title: 'चक्रव्यूह: अभिमन्यु और जयद्रथ वध', physicalQ: 5, track: 'Bal Mahabharat' },
    { id: 'm10', title: 'कर्ण वध, दुर्योधन का अंत और युधिष्ठिर का राज्याभिषेक', physicalQ: 5, track: 'Bal Mahabharat' }
  ],
  english: [
    // Honeycomb Prose (8 chapters)
    { id: 'h1', title: 'Three Questions', physicalQ: 12, track: 'Honeycomb Prose' },
    { id: 'h2', title: 'A Gift of Chappals', physicalQ: 10, track: 'Honeycomb Prose' },
    { id: 'h3', title: 'Gopal and the Hilsa Fish', physicalQ: 9, track: 'Honeycomb Prose' },
    { id: 'h4', title: 'The Ashes That Made Trees Bloom', physicalQ: 8, track: 'Honeycomb Prose' },
    { id: 'h5', title: 'Quality', physicalQ: 8, track: 'Honeycomb Prose' },
    { id: 'h6', title: 'Expert Detectives', physicalQ: 8, track: 'Honeycomb Prose' },
    { id: 'h7', title: 'The Invention of Vita-Wonk', physicalQ: 8, track: 'Honeycomb Prose' },
    { id: 'h8', title: 'A Homage to Our Brave Soldiers', physicalQ: 7, track: 'Honeycomb Prose' },
    // Honeycomb Poetry (8 poems)
    { id: 'p1', title: 'The Squirrel', physicalQ: 4, track: 'Honeycomb Poetry' },
    { id: 'p2', title: 'The Rebel', physicalQ: 4, track: 'Honeycomb Poetry' },
    { id: 'p3', title: 'The Shed', physicalQ: 4, track: 'Honeycomb Poetry' },
    { id: 'p4', title: 'Chivvy', physicalQ: 4, track: 'Honeycomb Poetry' },
    { id: 'p5', title: 'Trees', physicalQ: 4, track: 'Honeycomb Poetry' },
    { id: 'p6', title: 'Mystery of the Talking Fan', physicalQ: 4, track: 'Honeycomb Poetry' },
    { id: 'p7', title: 'Meadow Surprises', physicalQ: 5, track: 'Honeycomb Poetry' },
    { id: 'p8', title: 'Garden Snake', physicalQ: 5, track: 'Honeycomb Poetry' },
    // An Alien Hand (7 chapters)
    { id: 'a1', title: 'The Tiny Teacher', physicalQ: 10, track: 'An Alien Hand' },
    { id: 'a2', title: 'Bringing Up Kari', physicalQ: 9, track: 'An Alien Hand' },
    { id: 'a3', title: 'Golu Grows a Nose', physicalQ: 9, track: 'An Alien Hand' },
    { id: 'a4', title: 'Chandni', physicalQ: 9, track: 'An Alien Hand' },
    { id: 'a5', title: 'The Bear Story', physicalQ: 8, track: 'An Alien Hand' },
    { id: 'a6', title: 'A Tiger in the House', physicalQ: 9, track: 'An Alien Hand' },
    { id: 'a7', title: 'An Alien Hand', physicalQ: 9, track: 'An Alien Hand' }
  ]
};

module.exports = C7_BENCHMARKS;
