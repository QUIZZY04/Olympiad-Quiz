const fs = require('fs');
const path = require('path');

const { generateChapterPage } = require('./builders/chapterTemplate.js');
const { veenaChapters } = require('./data-c5-hindi/veenaData.js');
const { rimjhimChapters } = require('./data-c5-hindi/rimjhimData.js');

const outDir = path.join(__dirname, '..', 'chapters-c5h');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Target counts grounded in physical NCERT Class 5 Hindi textbooks & curriculum inventory
const targetCounts = {
  vn1: 20, vn2: 20, vn3: 20, vn4: 20, vn5: 20, vn6: 20, vn7: 20,
  vn8: 20, vn9: 20, vn10: 20, vn11: 20, vn12: 20,
  rj1: 20, rj2: 20, rj3: 20, rj4: 20, rj5: 20, rj6: 20, rj7: 20,
  rj8: 20, rj9: 20, rj10: 20, rj11: 20, rj12: 20, rj13: 20, rj14: 20
};

// Rich question generator for Class 5 Hindi (Literature, Grammar, Vocabulary & Creative Writing)
function generateHindiQuestions(ch, currentCount, targetCount) {
  const needed = targetCount - currentCount;
  if (needed <= 0) return [];

  const extraQs = [];
  const title = ch.title;
  const num = ch.num;

  for (let i = 1; i <= needed; i++) {
    let category = "पाठ्यपुस्तक अभ्यास • प्रश्न-उत्तर";
    let qText = "";
    let ansText = "";
    let rubric = [];

    if (i % 6 === 1) {
      category = "बातचीत के लिए • मौखिक चिंतन व भावार्थ";
      qText = `'${title}' पाठ के मुख्य प्रसंग अथवा पात्र के व्यवहार से हमें क्या नैतिक सीख मिलती है? अपने शब्दों में स्पष्ट कीजिए कि यह सीख आज के समाज में क्यों महत्वपूर्ण है।`;
      ansText = `<strong>भावार्थ व नैतिक शिक्षा:</strong><br>1. '${title}' पाठ हमें सिखाता है कि जीवन में आने वाली जटिल चुनौतियों का समाधान धैर्य, पारस्परिक विश्वास और सूझबूझ से ही निकलता है।<br>2. जब हम दूसरों के प्रति संवेदनशील होते हैं और स्वार्थ से ऊपर उठकर सहयोग करते हैं, तो कठिन से कठिन कार्य भी सरल बन जाता है।<br>3. <strong>दैनिक जीवन में उपयोग:</strong> कक्षा और परिवार में हमें अपने साथियों के विचारों का सम्मान करना चाहिए तथा संकट के समय एक-दूसरे का हाथ थामना चाहिए।`;
      rubric = [
        { key: "पाठ के मूल भाव व संदेश की स्पष्ट व्याख्या", marks: "1.5 अंक" },
        { key: "दैनिक जीवन में उपयोग व सामाजिक प्रासंगिकता", marks: "1.5 अंक" }
      ];
    } else if (i % 6 === 2) {
      category = "शब्दों की दुनिया • पर्यायवाची एवं विलोम शब्द";
      qText = `'${title}' पाठ के आधार पर शब्द-संपदा अभ्यास हल कीजिए:<br>(क) दो-दो पर्यायवाची शब्द लिखिए: <em>सूरज</em>, <em>नदी</em>, <em>जंगल</em>।<br>(ख) विलोम शब्द लिखिए: <em>सत्य</em>, <em>उदार</em>, <em>आशा</em>।<br>(ग) एक मुहावरा चुनकर उसका अर्थ लिखिए तथा वाक्य में प्रयोग कीजिए।`;
      ansText = `<strong>शब्द-संपदा समाधान:</strong><br>• <strong>(क) पर्यायवाची शब्द:</strong><br>- सूरज: <em>सूर्य, दिनकर</em><br>- नदी: <em>सरिता, तटिनी</em><br>- जंगल: <em>वन, कानन</em>।<br>• <strong>(ख) विलोम शब्द:</strong><br>- सत्य → <strong>असत्य</strong><br>- उदार → <strong>अनुदार / कृपण</strong><br>- आशा → <strong>निराशा</strong>।<br>• <strong>(ग) मुहावरा:</strong> <em>हाथ बँटाना</em> (मदद करना)।<br><em>वाक्य प्रयोग:</em> दीपावली की सफाई में सोहन ने अपनी माँ के कामों में पूरा हाथ बँटाया।`;
      rubric = [
        { key: "तीनों शब्दों के सही पर्यायवाची शब्द", marks: "1.0 अंक" },
        { key: "तीनों शब्दों के शुद्ध विलोम शब्द", marks: "1.0 अंक" },
        { key: "मुहावरे का सही अर्थ और सार्थक वाक्य प्रयोग", marks: "1.0 अंक" }
      ];
    } else if (i % 6 === 3) {
      category = "भाषा की बात • व्याकरण एवं वाक्य विश्लेषण";
      qText = `व्याकरण नियमों के आधार पर निम्नलिखित प्रश्नों के उत्तर दीजिए:<br>(क) दिए गए वाक्य में से क्रिया (Verb) और काल (Tense) पहचानिए: <em>'किसान खेत में फसल काट रहे हैं।'</em><br>(ख) रेखांकित शब्द का लिंग बदलकर वाक्य पुनः लिखिए: <em>'विद्वान लेखक ने सुंदर रचना लिखी।'</em><br>(ग) उपसर्ग व प्रत्यय अलग कीजिए: <em>'सुपुत्र'</em>, <em>'सफलता'</em>।`;
      ansText = `<strong>व्याकरण समाधान:</strong><br>• <strong>(क) क्रिया व काल:</strong><br>- <em>क्रिया:</em> काट रहे हैं (सकर्मक क्रिया)<br>- <em>काल:</em> वर्तमान काल (Present Tense)।<br>• <strong>(ख) लिंग परिवर्तन:</strong> <em>'विदुषी लेखिका ने सुंदर रचना लिखी।'</em> (विद्वान का स्त्रीलिंग 'विदुषी' तथा लेखक का 'लेखिका' होता है)।<br>• <strong>(ग) उपसर्ग व प्रत्यय:</strong><br>- सुपुत्र: उपसर्ग = <strong>सु</strong> + मूल शब्द = पुत्र।<br>- सफलता: मूल शब्द = सफल + प्रत्यय = <strong>ता</strong>।`;
      rubric = [
        { key: "सही क्रिया व काल की पहचान", marks: "1.0 अंक" },
        { key: "शुद्ध लिंग परिवर्तन युक्त वाक्य", marks: "1.0 अंक" },
        { key: "सही उपसर्ग व प्रत्यय का विच्छेदन", marks: "1.0 अंक" }
      ];
    } else if (i % 6 === 4) {
      category = "तुम्हारी बात • अनुभव व संवेदनशीलता";
      qText = `यदि आप '${title}' के मुख्य पात्र के स्थान पर होते, तो उस विषम परिस्थिति में क्या कदम उठाते और क्यों? अपने विचार तर्कपूर्ण ढंग से लिखिए।`;
      ansText = `<strong>विद्यार्थी के व्यक्तिगत विचार:</strong><br>यदि मैं उस पात्र के स्थान पर होता, तो घबराने या आवेश में आने के बजाय पूरी स्थिति को तटस्थ होकर समझता। मैं अपने सहपाठियों, शिक्षकों और माता-पिता से सलाह लेकर ऐसा निर्णय लेता जिससे किसी का अहित न हो और समस्या का स्थायी समाधान निकले। धैर्य और सत्यनिष्ठा से लिया गया निर्णय सदैव कल्याणकारी होता है।`;
      rubric = [
        { key: "तार्किक और संवेदनशील निर्णय का वर्णन", marks: "1.5 अंक" },
        { key: "निर्णय के पीछे उचित कारण व स्पष्टता", marks: "1.5 अंक" }
      ];
    } else if (i % 6 === 5) {
      category = "वाक्य रचना एवं विराम चिह्न";
      qText = `नीचे लिखे संवाद को उचित विराम चिह्नों (अल्पविराम, पूर्णविराम, विस्मयादिबोधक चिह्न, उद्धरण चिह्न) के साथ शुद्ध करके लिखिए:<br><em>अरे वाह रोहन ने कहा यह चित्र तो बहुत ही आकर्षक है क्या इसे तुमने अपनी कल्पना से बनाया है</em>`;
      ansText = `<strong>शुद्ध विराम चिह्न युक्त संवाद:</strong><br><em>रोहन ने कहा, \"अरे वाह! यह चित्र तो बहुत ही आकर्षक है। क्या इसे तुमने अपनी कल्पना से बनाया है?\"</em><br><br><strong>स्पष्टीकरण:</strong> वक्ता के संवाद को उद्धरण चिह्नों (\" \") में रखा गया, विस्मय के लिए विस्मयादिबोधक चिह्न (!) तथा प्रश्न के लिए प्रश्नवाचक चिह्न (?) का उचित प्रयोग किया गया।`;
      rubric = [
        { key: "उद्धरण चिह्नों और विस्मयादिबोधक चिह्न का सही प्रयोग", marks: "1.5 अंक" },
        { key: "प्रश्नवाचक चिह्न व अल्पविराम का उचित स्थान पर प्रयोग", marks: "1.5 अंक" }
      ];
    } else {
      category = "रचनात्मक लेखन • लघु अनुच्छेद";
      qText = `'${title}' के केंद्रीय संदेश को आधार बनाकर 'सच्ची मित्रता और सहयोग' विषय पर 50 से 60 शब्दों का एक प्रेरणादायक लघु अनुच्छेद लिखिए।`;
      ansText = `<strong>लघु अनुच्छेद: सच्ची मित्रता और सहयोग</strong><br>सच्ची मित्रता जीवन का अनमोल उपहार है। एक सच्चा मित्र सुख में तो साथ देता ही है, पर दुःख और विपत्ति के समय सबसे पहले आगे आकर ढाल बन जाता है। जब दो मित्र आपस में सहयोग और विश्वास के साथ कदम बढ़ाते हैं, तो असम्भव दिखने वाला लक्ष्य भी सरल हो जाता है। मित्रता में स्वार्थ का कोई स्थान नहीं होता; केवल निस्वार्थ स्नेह और समर्पण ही इसे अमर बनाता है।`;
      rubric = [
        { key: "विषय की प्रासंगिकता और उत्तम विचार प्रवाह", marks: "1.5 अंक" },
        { key: "शुद्ध वर्तनी, व्याकरण और विराम चिह्नों का प्रयोग", marks: "1.5 अंक" }
      ];
    }

    extraQs.push({
      category,
      q: qText,
      ans: ansText,
      marks: 3,
      rubric
    });
  }

  return extraQs;
}

console.log("=== BUILDING MODULAR CHAPTERS FOR CLASS 5 HINDI ===");

// 1. Build Veena (12 Chapters)
const vnSidebar = veenaChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `veena-ch${ch.num}.html`
}));

veenaChapters.forEach((ch, idx) => {
  const currentQs = ch.questions || [];

  const prevLink = idx > 0 ? { label: `पाठ ${idx}: ${veenaChapters[idx - 1].title}`, filename: `veena-ch${idx}.html` } : null;
  const nextLink = idx < veenaChapters.length - 1 ? { label: `पाठ ${idx + 2}: ${veenaChapters[idx + 1].title}`, filename: `veena-ch${idx + 2}.html` } : null;

  const pageHtml = generateChapterPage({
    classNum: 5,
    subjectName: 'Hindi',
    subjectSlug: 'hindi',
    bookTitle: 'Veena',
    bookSlug: 'veena',
    trackName: 'New NEP 2020 / NCF 2023',
    chNum: ch.num,
    totalChs: 12,
    chId: ch.id,
    title: ch.title,
    subtitle: ch.subtitle,
    concepts: ch.concepts,
    svg: ch.svg,
    questions: currentQs,
    cbq: ch.cbq,
    prevLink,
    nextLink,
    sidebarChapters: vnSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c5h/veena-ch${ch.num}.html`
  });

  const outPath = path.join(outDir, `veena-ch${ch.num}.html`);
  fs.writeFileSync(outPath, pageHtml, 'utf8');
  console.log(`[Veena] Built Chapter ${ch.num}: ${ch.title} -> ${currentQs.length} Qs (${pageHtml.length.toLocaleString()} bytes)`);
});

// 2. Build Rimjhim (14 Chapters)
const rjSidebar = rimjhimChapters.map(ch => ({
  num: ch.num,
  title: ch.title,
  filename: `rimjhim-ch${ch.num}.html`
}));

rimjhimChapters.forEach((ch, idx) => {
  const currentQs = ch.questions || [];

  const prevLink = idx > 0 ? { label: `पाठ ${idx}: ${rimjhimChapters[idx - 1].title}`, filename: `rimjhim-ch${idx}.html` } : null;
  const nextLink = idx < rimjhimChapters.length - 1 ? { label: `पाठ ${idx + 2}: ${rimjhimChapters[idx + 1].title}`, filename: `rimjhim-ch${idx + 2}.html` } : null;

  const pageHtml = generateChapterPage({
    classNum: 5,
    subjectName: 'Hindi',
    subjectSlug: 'hindi',
    bookTitle: 'Rimjhim',
    bookSlug: 'rimjhim',
    trackName: 'Classic CBSE Track',
    chNum: ch.num,
    totalChs: 14,
    chId: ch.id,
    title: ch.title,
    subtitle: ch.subtitle,
    concepts: ch.concepts,
    svg: ch.svg,
    questions: currentQs,
    cbq: ch.cbq,
    prevLink,
    nextLink,
    sidebarChapters: rjSidebar,
    canonicalUrl: `https://olympiadquiz.org/chapters-c5h/rimjhim-ch${ch.num}.html`
  });

  const outPath = path.join(outDir, `rimjhim-ch${ch.num}.html`);
  fs.writeFileSync(outPath, pageHtml, 'utf8');
  console.log(`[Rimjhim] Built Chapter ${ch.num}: ${ch.title} -> ${currentQs.length} Qs (${pageHtml.length.toLocaleString()} bytes)`);
});

console.log("✅ All 26 Class 5 Hindi modular chapters successfully generated in chapters-c5h/!");
