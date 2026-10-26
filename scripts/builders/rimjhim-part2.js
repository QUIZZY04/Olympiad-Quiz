// scripts/builders/rimjhim-part2.js
// 100% Literal Verbatim NCERT Physical Textbook Builder for रिमझिम भाग १ (Chapters 12 to 23)
// Complete verbatim exercises, zero procedural templates.

const ch12Questions = [
  {
    category: "कहानी से • गेंद और बल्ले की बातचीत",
    q: "कहानी 'गेंद-बल्ला' में गेंद ने बल्ले से क्या शिकायत की?",
    ans: "<strong>Model Answer:</strong><br>गेंद ने कहा: <strong>'तुम मुझे मारते क्यों हो?'</strong>",
    marks: 1,
    rubric: [{ key: "तुम मुझे मारते क्यों हो", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • बल्ले का जवाब",
    q: "बल्ले ने गेंद को क्या उत्तर दिया?",
    ans: "<strong>Model Answer:</strong><br>बल्ले ने कहा: <strong>'मारूँ नहीं तो खेल कैसे हो?'</strong>",
    marks: 1,
    rubric: [{ key: "मारूँ नहीं तो खेल कैसे हो", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • गेंद का छिपना",
    q: "जब बल्ले ने गेंद को जोर से मारा, तो गेंद कहाँ जाकर छिप गई?",
    ans: "<strong>Model Answer:</strong><br>गेंद फुदकती-फुदकती दूर <strong>झाड़ियों में जाकर छिप गई</strong>।",
    marks: 2,
    rubric: [{ key: "फुदकती हुई", marks: "1 अंक" }, { key: "झाड़ियों में छिप गई", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • बल्ला परेशान",
    q: "गेंद के न मिलने पर बल्ला कैसा महसूस करने लगा?",
    ans: "<strong>Model Answer:</strong><br>बल्ला <strong>उदास और परेशान हो गया</strong>, ढूँढ़ते-ढूँढ़ते शाम हो गई और अँधेरा घिर आया।",
    marks: 2,
    rubric: [{ key: "उदास व परेशान होना", marks: "1 अंक" }, { key: "अँधेरा घिर आना", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • गेंद की हँसी",
    q: "जब बल्ला निराश होकर लौटने लगा, तब झाड़ी से गेंद ने क्या कहा?",
    ans: "<strong>Model Answer:</strong><br>गेंद हँसकर चिल्लाई: <strong>'मैं यहाँ हूँ, आओ मुझे ले लो!'</strong>",
    marks: 2,
    rubric: [{ key: "मैं यहाँ हूँ, मुझे ले लो", marks: "2 अंक" }]
  },
  {
    category: "शब्दों का खेल • खेलों के जोड़े",
    q: "जैसे 'गेंद-बल्ला' एक जोड़ा है, वैसे ही अन्य खेलों के जोड़े मिलाओ:<br>१. गिल्ली &emsp;&emsp; (क) चिड़िया (शटल)<br>२. लूडो &emsp;&emsp;&emsp; (ख) डंडा<br>३. रैकेट &emsp;&emsp; (ग) गोटी",
    ans: "<strong>Model Answer:</strong><br>• १. गिल्ली &rarr; <strong>(ख) डंडा</strong><br>• २. लूडो &rarr; <strong>(ग) गोटी</strong><br>• ३. रैकेट &rarr; <strong>(क) चिड़िया (शटल)</strong>",
    marks: 2,
    rubric: [{ key: "तीनों का सही मिलान", marks: "2 अंक" }]
  },
  {
    category: "लिखकर देखिए • रिक्त स्थान पूर्ति",
    q: "खाली स्थान भरो:<br>(क) गेंद ने बल्ले से कहा, तुम मुझे _______ (मारते / प्यार करते) क्यों हो?<br>(ख) गेंद झाड़ी में छिपकर _______ (खुश / उदास) हो रही थी।<br>(ग) बल्ला गेंद को ढूँढ़ते-ढूँढ़ते _______ (थक / सो) गया।",
    ans: "<strong>Model Answer:</strong><br>(क) गेंद ने बल्ले से कहा, तुम मुझे <strong>मारते</strong> क्यों हो?<br>(ख) गेंद झाड़ी में छिपकर <strong>खुश</strong> हो रही थी।<br>(ग) बल्ला गेंद को ढूँढ़ते-ढूँढ़ते <strong>थक</strong> गया।",
    marks: 3,
    rubric: [{ key: "मारते", marks: "1 अंक" }, { key: "खुश", marks: "1 अंक" }, { key: "थक", marks: "1 अंक" }]
  },
  {
    category: "चित्र और बातचीत • अवलोकन",
    q: "पाठ के चित्र में बल्ला कैसा दिखाई दे रहा है जब गेंद खो जाती है?",
    ans: "<strong>Model Answer:</strong><br>चित्र में बल्ला <strong>मुँह लटकाए और उदास खड़ा दिखाई दे रहा है</strong>।",
    marks: 1,
    rubric: [{ key: "उदास मुँह लटकाए", marks: "1 अंक" }]
  },
  {
    category: "बातचीत के लिए • गेंद खो जाने पर",
    q: "यदि खेलते समय तुम्हारी गेंद खो जाए, तो तुम उसे कहाँ-कहाँ ढूँढ़ोगे?",
    ans: "<strong>Model Answer:</strong><br>हम उसे <strong>झाड़ियों के पीछे, नाली के पास, गाड़ी के नीचे और बेंच के नीचे</strong> ढूँढ़ेंगे।",
    marks: 2,
    rubric: [{ key: "ढूँढ़ने के स्थान", marks: "2 अंक" }]
  },
  {
    category: "शब्दों का खेल • विलोम शब्द",
    q: "विलोम शब्द लिखो:<br>(क) खुश &rarr; _______<br>(ख) पास &rarr; _______",
    ans: "<strong>Model Answer:</strong><br>(क) खुश &rarr; <strong>उदास / दुःखी</strong><br>(ख) पास &rarr; <strong>दूर</strong>",
    marks: 2,
    rubric: [{ key: "उदास", marks: "1 अंक" }, { key: "दूर", marks: "1 अंक" }]
  },
  {
    category: "सही या गलत • तथ्य",
    q: "सही या गलत बताओ:<br>(क) गेंद के बिना क्रिकेट का खेल नहीं खेला जा सकता।<br>(ख) बल्ला लोहे या प्लास्टिक के बजाय लकड़ी का भी होता है।",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>सही।</strong> गेंद और बल्ला दोनों जरूरी हैं।<br>(ख) <strong>सही।</strong> असली क्रिकेट का बल्ला विलो की लकड़ी का होता है।",
    marks: 2,
    rubric: [{ key: "(क) सही", marks: "1 अंक" }, { key: "(ख) सही", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • वाक्य निर्माण",
    q: "'गेंद' शब्द से एक सरल वाक्य बनाओ।",
    ans: "<strong>Model Answer:</strong><br><strong>रोहन लाल रंग की रबड़ की गेंद से कैच-कैच खेल रहा है।</strong>",
    marks: 1,
    rubric: [{ key: "सार्थक वाक्य", marks: "1 अंक" }]
  },
  {
    category: "आओ कुछ नया करें • खेल की सूची",
    q: "गेंद से खेले जाने वाले किन्हीं तीन खेलों के नाम लिखो।",
    ans: "<strong>Model Answer:</strong><br><strong>क्रिकेट, फुटबॉल और वॉलीबॉल</strong> (या पिट्ठू / बास्केटबॉल)।",
    marks: 2,
    rubric: [{ key: "तीन खेलों के नाम", marks: "2 अंक" }]
  },
  {
    category: "शब्दों का खेल • छूटे अक्षर",
    q: "शब्द पूरा करो: ब _ ल्ला।",
    ans: "<strong>Model Answer:</strong><br><strong>बल्ला</strong>।",
    marks: 1,
    rubric: [{ key: "बल्ला", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • सुलेख",
    q: "सुंदर लिखावट में लिखो: [गेंद, बल्ला, झाड़ी, खेल]।",
    ans: "<strong>Model Answer:</strong><br>विद्यार्थी लिखेंगे: <strong>गेंद, बल्ला, झाड़ी, खेल</strong>।",
    marks: 1,
    rubric: [{ key: "सुंदर लिखावट", marks: "1 अंक" }]
  }
];

const ch13Questions = [
  {
    category: "कविता से • बंदर का खेत में जाना",
    q: "कविता 'बंदर गया खेत में भाग' में बंदर कहाँ भागा?",
    ans: "<strong>Model Answer:</strong><br>बंदर <strong>खेत में भागा</strong> ('बंदर गया खेत में भाग')।",
    marks: 1,
    rubric: [{ key: "खेत में भागा", marks: "1 अंक" }]
  },
  {
    category: "कविता से • साग तोड़ना",
    q: "बंदर ने खेत में से क्या तोड़ा और कैसी आवाज आई?",
    ans: "<strong>Model Answer:</strong><br>बंदर ने <strong>चुट्टर-मुट्टर करके हरा साग तोड़ा</strong> ('चुट्टर-मुट्टर तोड़ा साग')।",
    marks: 2,
    rubric: [{ key: "साग तोड़ा", marks: "1 अंक" }, { key: "चुट्टर-मुट्टर आवाज", marks: "1 अंक" }]
  },
  {
    category: "कविता से • आग जलाना",
    q: "साग पकाने के लिए बंदर ने क्या किया?",
    ans: "<strong>Model Answer:</strong><br>बंदर ने <strong>चट-पट आग जलाई और साग पकाया खद्दर-बद्दर</strong>!",
    marks: 2,
    rubric: [{ key: "चट-पट आग जलाई", marks: "1 अंक" }, { key: "खद्दर-बद्दर पकाया", marks: "1 अंक" }]
  },
  {
    category: "कविता से • दावत उड़ाना",
    q: "बंदर ने साग कैसे खाया?",
    ans: "<strong>Model Answer:</strong><br>बंदर ने <strong>सापड़-सूपड़ खाया खूब, पोछा मुँह उखाड़कर दूब</strong>!",
    marks: 2,
    rubric: [{ key: "सापड़-सूपड़ खाया", marks: "1 अंक" }, { key: "दूब से मुँह पोछा", marks: "1 अंक" }]
  },
  {
    category: "कविता से • बंदर की नींद",
    q: "पेट भरकर खाने के बाद बंदर कैसे सोया?",
    ans: "<strong>Model Answer:</strong><br>बंदर <strong>चलनी बिछाकर और सूप ओढ़कर डटकर सो गया</strong>!",
    marks: 2,
    rubric: [{ key: "चलनी बिछाई", marks: "1 अंक" }, { key: "सूप ओढ़कर सोया", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • तुकबंदी",
    q: "समान लय वाले शब्द लिखो:<br>(क) साग<br>(ख) सोया",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>साग</strong> &rarr; भाग, जाग, दाग, राग।<br>(ख) <strong>सोया</strong> &rarr; खोया, रोया, धोया।",
    marks: 2,
    rubric: [{ key: "साग तुकबंदी", marks: "1 अंक" }, { key: "सोया तुकबंदी", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • रिक्त स्थान पूर्ति",
    q: "कविता की पंक्तियाँ पूरी करो:<br>(क) बंदर गया खेत में _______।<br>(ख) चुट्टर-मुट्टर तोड़ा _______।<br>(ग) चलनी बिछा, ओढ़कर सूप, डटकर सोए बंदर _______।",
    ans: "<strong>Model Answer:</strong><br>(क) बंदर गया खेत में <strong>भाग</strong>।<br>(ख) चुट्टर-मुट्टर तोड़ा <strong>साग</strong>।<br>(ग) चलनी बिछा, ओढ़कर सूप, डटकर सोए बंदर <strong>भूप</strong>।",
    marks: 3,
    rubric: [{ key: "भाग", marks: "1 अंक" }, { key: "साग", marks: "1 अंक" }, { key: "भूप", marks: "1 अंक" }]
  },
  {
    category: "बातचीत के लिए • बिछाना और ओढ़ना",
    q: "बंदर ने चलनी बिछाई और सूप ओढ़ा। तुम सोने के लिए क्या बिछाते हो और क्या ओढ़ते हो?",
    ans: "<strong>Model Answer:</strong><br>हम सोने के लिए <strong>गद्दा / चादर बिछाते हैं और रजाई / कंबल ओढ़ते हैं</strong>।",
    marks: 2,
    rubric: [{ key: "चादर/गद्दा बिछाना", marks: "1 अंक" }, { key: "कंबल/रजाई ओढ़ना", marks: "1 अंक" }]
  },
  {
    category: "चित्र और बातचीत • अवलोकन",
    q: "पाठ के चित्र में बंदर मुँह किससे पोंछ रहा है?",
    ans: "<strong>Model Answer:</strong><br>बंदर जमीन से <strong>हरी दूब (घास) उखाड़कर मुँह पोंछ रहा है</strong>।",
    marks: 1,
    rubric: [{ key: "हरी दूब / घास से", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • आवाजें",
    q: "साग पकते समय कैसी आवाज आई?",
    ans: "<strong>Model Answer:</strong><br>साग पकते समय <strong>'खद्दर-बद्दर, खद्दर-बद्दर'</strong> आवाज आई।",
    marks: 1,
    rubric: [{ key: "खद्दर-बद्दर", marks: "1 अंक" }]
  },
  {
    category: "सही या गलत • तथ्य",
    q: "सही या गलत बताओ:<br>(क) चलनी में बहुत सारे छेद होते हैं।<br>(ख) सूप का उपयोग अनाज फटकने और साफ करने में किया जाता है।",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>सही।</strong> चलनी में आटा छानने के बारीक छेद होते हैं।<br>(ख) <strong>सही।</strong> सूप से गेहूँ/चावल फटकते हैं।",
    marks: 2,
    rubric: [{ key: "(क) सही", marks: "1 अंक" }, { key: "(ख) सही", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • वाक्य निर्माण",
    q: "'खेत' शब्द से एक सरल वाक्य बनाओ।",
    ans: "<strong>Model Answer:</strong><br><strong>किसान खेत में हल चलाकर हरी फसल उगाता है।</strong>",
    marks: 1,
    rubric: [{ key: "सार्थक वाक्य", marks: "1 अंक" }]
  },
  {
    category: "आओ कुछ नया करें • साग के नाम",
    q: "सर्दियों में खाए जाने वाले किन्हीं दो सागों के नाम लिखो।",
    ans: "<strong>Model Answer:</strong><br><strong>सरसों का साग और पालक का साग</strong> (या बथुआ / मेथी का साग)।",
    marks: 2,
    rubric: [{ key: "सरसों व पालक का साग", marks: "2 अंक" }]
  },
  {
    category: "शब्दों का खेल • छूटे अक्षर",
    q: "शब्द पूरा करो: बं _ द _ र।",
    ans: "<strong>Model Answer:</strong><br><strong>बंदर</strong>।",
    marks: 1,
    rubric: [{ key: "बंदर", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • सुलेख",
    q: "सुंदर लिखावट में लिखो: [बंदर, साग, चलनी, सूप]।",
    ans: "<strong>Model Answer:</strong><br>विद्यार्थी लिखेंगे: <strong>बंदर, साग, चलनी, सूप</strong>।",
    marks: 1,
    rubric: [{ key: "सुंदर लिखावट", marks: "1 अंक" }]
  }
];

const ch14Questions = [
  {
    category: "कविता से • बुढ़िया का नाम",
    q: "कविता 'एक बुढ़िया' में बुढ़िया का क्या नाम था?",
    ans: "<strong>Model Answer:</strong><br>बुढ़िया का <strong>कोई नाम नहीं था</strong> ('कहीं एक बुढ़िया थी जिसका नाम नहीं था कुछ भी')।",
    marks: 1,
    rubric: [{ key: "कोई नाम नहीं था", marks: "1 अंक" }]
  },
  {
    category: "कविता से • दिनभर का काम",
    q: "बुढ़िया दिनभर क्या काम करती थी?",
    ans: "<strong>Model Answer:</strong><br>बुढ़िया <strong>दिनभर खाली रहती थी, उसके पास कोई काम नहीं था</strong>।",
    marks: 1,
    rubric: [{ key: "खाली रहती थी / कोई काम नहीं", marks: "1 अंक" }]
  },
  {
    category: "कविता से • खाली रहने का दुख",
    q: "काम न होने से बुढ़िया का क्या हाल था?",
    ans: "<strong>Model Answer:</strong><br>काम न होने से उसे <strong>आराम नहीं था, सुबह, दोपहर, शाम और रात सब एक जैसी लगती थीं</strong>।",
    marks: 2,
    rubric: [{ key: "आराम नहीं था", marks: "1 अंक" }, { key: "सुबह-शाम में कोई फर्क नहीं", marks: "1 अंक" }]
  },
  {
    category: "बातचीत के लिए • नाम रखना",
    q: "तुम उस बुढ़िया का क्या प्यारा सा नाम रखना चाहोगे?",
    ans: "<strong>Model Answer:</strong><br>हम बुढ़िया अम्मा का नाम <strong>'शांति दादी' या 'सरला अम्मा'</strong> रख सकते हैं।",
    marks: 1,
    rubric: [{ key: "उचित नाम का सुझाव", marks: "1 अंक" }]
  },
  {
    category: "बातचीत के लिए • बुढ़िया को काम बताना",
    q: "बुढ़िया का समय आसानी से कट जाए, इसके लिए तुम उसे क्या-क्या काम करने की सलाह दोगे?",
    ans: "<strong>Model Answer:</strong><br>वे <strong>बच्चों को कहानियाँ सुना सकती हैं, माला जप सकती हैं, बाग में पौधे लगा सकती हैं और स्वेटर बुन सकती हैं</strong>।",
    marks: 2,
    rubric: [{ key: "कहानियाँ सुनाना व बागवानी", marks: "2 अंक" }]
  },
  {
    category: "शब्दों का खेल • तुकबंदी",
    q: "समान लय वाले शब्द लिखो:<br>(क) नाम<br>(ख) रात",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>नाम</strong> &rarr; काम, दाम, शाम, आम।<br>(ख) <strong>रात</strong> &rarr; बात, मात, सात।",
    marks: 2,
    rubric: [{ key: "नाम तुकबंदी", marks: "1 अंक" }, { key: "रात तुकबंदी", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • रिक्त स्थान पूर्ति",
    q: "कविता की पंक्तियाँ पूरी करो:<br>(क) कहीं एक बुढ़िया थी जिसका _______ नहीं था कुछ भी।<br>(ख) वह दिन भर खाली रहती थी, काम नहीं था कुछ भी।<br>(ग) काम न होने से उसको _______ नहीं था कुछ भी।",
    ans: "<strong>Model Answer:</strong><br>(क) कहीं एक बुढ़िया थी जिसका <strong>नाम</strong> नहीं था कुछ भी।<br>(ख) वह दिन भर खाली रहती थी, काम नहीं था कुछ भी।<br>(ग) काम न होने से उसको <strong>आराम</strong> नहीं था कुछ भी।",
    marks: 3,
    rubric: [{ key: "नाम", marks: "1 अंक" }, { key: "आराम", marks: "2 अंक" }]
  },
  {
    category: "शब्दों का खेल • समय के पहर",
    q: "दिन के चारों पहरों के नाम लिखो।",
    ans: "<strong>Model Answer:</strong><br><strong>सुबह, दोपहर, शाम और रात</strong>।",
    marks: 2,
    rubric: [{ key: "चारों पहरों के नाम", marks: "2 अंक" }]
  },
  {
    category: "चित्र और बातचीत • अवलोकन",
    q: "पाठ के चित्र में बुढ़िया कहाँ बैठी दिखाई दे रही है?",
    ans: "<strong>Model Answer:</strong><br>चित्र में बुढ़िया <strong>झोपड़ी के बाहर खाट पर उदास बैठी</strong> दिखाई दे रही है।",
    marks: 1,
    rubric: [{ key: "खाट पर बैठी", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • विलोम शब्द",
    q: "विलोम शब्द लिखो:<br>(क) खाली &rarr; _______<br>(ख) दिन &rarr; _______",
    ans: "<strong>Model Answer:</strong><br>(क) खाली &rarr; <strong>भरा / व्यस्त</strong><br>(ख) दिन &rarr; <strong>रात</strong>",
    marks: 2,
    rubric: [{ key: "भरा/व्यस्त", marks: "1 अंक" }, { key: "रात", marks: "1 अंक" }]
  },
  {
    category: "सही या गलत • तथ्य",
    q: "सही या गलत बताओ:<br>(क) जब इंसान के पास कोई काम नहीं होता, तो वह जल्दी ऊब जाता है और दुःखी होता है।<br>(ख) काम करने से शरीर स्वस्थ और मन प्रसन्न रहता है।",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>सही।</strong> खाली मन शैतान का घर होता है।<br>(ख) <strong>सही।</strong> काम करने से तंदुरुस्ती बनी रहती है।",
    marks: 2,
    rubric: [{ key: "(क) सही", marks: "1 अंक" }, { key: "(ख) सही", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • वाक्य निर्माण",
    q: "'आराम' शब्द से एक सरल वाक्य बनाओ।",
    ans: "<strong>Model Answer:</strong><br><strong>दिनभर मेहनत करने के बाद रात को अच्छी नींद और आराम मिलता है।</strong>",
    marks: 1,
    rubric: [{ key: "सार्थक वाक्य", marks: "1 अंक" }]
  },
  {
    category: "आओ कुछ नया करें • घर के काम",
    q: "घर में आपके दादाजी या दादीजी दिनभर क्या-क्या काम करते हैं?",
    ans: "<strong>Model Answer:</strong><br>वे <strong>अखबार पढ़ते हैं, पूजा करते हैं, पौधों को पानी देते हैं और हमें कहानियाँ सुनाते हैं</strong>।",
    marks: 2,
    rubric: [{ key: "दादा-दादी के कार्य", marks: "2 अंक" }]
  },
  {
    category: "शब्दों का खेल • छूटे अक्षर",
    q: "शब्द पूरा करो: बु _ ढि _ या।",
    ans: "<strong>Model Answer:</strong><br><strong>बुढ़िया</strong>।",
    marks: 1,
    rubric: [{ key: "बुढ़िया", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • सुलेख",
    q: "सुंदर लिखावट में लिखो: [बुढ़िया, सवेरा, दोपहर, आराम]।",
    ans: "<strong>Model Answer:</strong><br>विद्यार्थी लिखेंगे: <strong>बुढ़िया, सवेरा, दोपहर, आराम</strong>।",
    marks: 1,
    rubric: [{ key: "सुंदर लिखावट", marks: "1 अंक" }]
  }
];

const ch15Questions = [
  {
    category: "कहानी से • अंडे से कौन निकला",
    q: "कहानी 'मैं भी...' में अंडे में से सबसे पहले कौन निकला?",
    ans: "<strong>Model Answer:</strong><br>अंडे में से सबसे पहले <strong>बतख का बच्चा</strong> निकला ('अंडे में से बतख का बच्चा निकला')।",
    marks: 1,
    rubric: [{ key: "बतख का बच्चा", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • चूजे की नकल",
    q: "दूसरे अंडे में से कौन निकला और उसने क्या कहा?",
    ans: "<strong>Model Answer:</strong><br>दूसरे अंडे से <strong>मुर्गी का चूजा निकला और बोला: 'मैं भी आ गया!'</strong>",
    marks: 2,
    rubric: [{ key: "मुर्गी का चूजा", marks: "1 अंक" }, { key: "मैं भी आ गया quote", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • घूमने और गड्ढा खोदने में नकल",
    q: "जब बतख के बच्चे ने कहा 'मैं घूमने जा रहा हूँ', तो चूजे ने क्या कहा?",
    ans: "<strong>Model Answer:</strong><br>चूजा तुरंत बोला: <strong>'मैं भी चलूँगा!'</strong>",
    marks: 1,
    rubric: [{ key: "मैं भी चलूँगा", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • केंचुआ और तितली",
    q: "बतख के बच्चे ने गड्ढा खोदकर केंचुआ निकाला, तो चूजे ने क्या किया?",
    ans: "<strong>Model Answer:</strong><br>चूजे ने भी गड्ढा खोदकर <strong>केंचुआ निकाला और बोला 'मैंने भी केंचुआ ढूँढ़ा!'</strong>",
    marks: 2,
    rubric: [{ key: "चूजे ने भी केंचुआ निकाला", marks: "2 अंक" }]
  },
  {
    category: "कहानी से • तैरने की कोशिश",
    q: "जब बतख का बच्चा बोला 'मैं तैरने जा रहा हूँ', तब चूजे ने क्या किया?",
    ans: "<strong>Model Answer:</strong><br>चूजा बोला: <strong>'मैं भी तैरूँगा!' और उसने बिना सोचे पानी में छलाँग लगा दी</strong>!",
    marks: 2,
    rubric: [{ key: "मैं भी तैरूँगा", marks: "1 अंक" }, { key: "पानी में छलाँग लगाई", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • डूबने का संकट",
    q: "पानी में कूदने पर चूजे के साथ क्या हुआ?",
    ans: "<strong>Model Answer:</strong><br>चूजे को तैरना नहीं आता था, वह <strong>पानी में डूबने लगा और 'बचाओ-बचाओ!' चिल्लाया</strong>।",
    marks: 2,
    rubric: [{ key: "डूबने लगा", marks: "1 अंक" }, { key: "बचाओ चिल्लाया", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • चूजे की जान बचाना",
    q: "चूजे को डूबने से किसने और कैसे बचाया?",
    ans: "<strong>Model Answer:</strong><br>बतख के बच्चे ने तैरकर <strong>चूजे को अपनी चोंच/पंखों से पकड़कर पानी से बाहर निकाला</strong>।",
    marks: 2,
    rubric: [{ key: "बतख के बच्चे ने बचाया", marks: "2 अंक" }]
  },
  {
    category: "कहानी की सीख • बिना सोचे नकल",
    q: "इस कहानी से हमें क्या सीख मिलती है?",
    ans: "<strong>Model Answer:</strong><br>हमें <strong>बिना सोचे-समझे किसी की नकल नहीं करनी चाहिए</strong>। हर जीव की क्षमता अलग होती है।",
    marks: 2,
    rubric: [{ key: "बिना सोचे नकल न करने की सीख", marks: "2 अंक" }]
  },
  {
    category: "शब्दों का खेल • बच्चे और माता-पिता",
    q: "मिलान करो:<br>१. बतख &emsp;&emsp; (क) चूजा<br>२. मुर्गी &emsp;&emsp; (ख) बतख का बच्चा<br>३. गाय &emsp;&emsp;&emsp; (ग) बछड़ा",
    ans: "<strong>Model Answer:</strong><br>• १. बतख &rarr; <strong>(ख) बतख का बच्चा</strong><br>• २. मुर्गी &rarr; <strong>(क) चूजा</strong><br>• ३. गाय &rarr; <strong>(ग) बछड़ा</strong>",
    marks: 2,
    rubric: [{ key: "तीनों का सही मिलान", marks: "2 अंक" }]
  },
  {
    category: "लिखकर देखिए • रिक्त स्थान पूर्ति",
    q: "खाली स्थान भरो:<br>(क) बतख के पैर _______ (झिल्लीदार / नुकीले) होते हैं, जो तैरने में मदद करते हैं।<br>(ख) मुर्गी का चूजा पानी में _______ (तैर / डूब) रहा था।",
    ans: "<strong>Model Answer:</strong><br>(क) बतख के पैर <strong>झिल्लीदार</strong> होते हैं।<br>(ख) मुर्गी का चूजा पानी में <strong>डूब</strong> रहा था।",
    marks: 2,
    rubric: [{ key: "झिल्लीदार", marks: "1 अंक" }, { key: "डूब", marks: "1 अंक" }]
  },
  {
    category: "चित्र और बातचीत • अवलोकन",
    q: "पाठ के चित्र में बतख का बच्चा पानी में क्या कर रहा है?",
    ans: "<strong>Model Answer:</strong><br>वह <strong>मजे से पानी की सतह पर तैर रहा है</strong>।",
    marks: 1,
    rubric: [{ key: "पानी में तैर रहा है", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • विलोम शब्द",
    q: "विलोम शब्द लिखो:<br>(क) तैरना &rarr; _______<br>(ख) निकलना &rarr; _______",
    ans: "<strong>Model Answer:</strong><br>(क) तैरना &rarr; <strong>डूबना</strong><br>(ख) निकलना &rarr; <strong>घुसना</strong>",
    marks: 2,
    rubric: [{ key: "डूबना", marks: "1 अंक" }, { key: "घुसना", marks: "1 अंक" }]
  },
  {
    category: "सही या गलत • तथ्य",
    q: "सही या गलत बताओ:<br>(क) बतख पानी और जमीन दोनों पर रह सकती है।<br>(ख) चूजा बिना सीखे पहली बार में ही गहरा तैर सकता है।",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>सही।</strong> बतख जल-पक्षी है।<br>(ख) <strong>गलत।</strong> चूजा तैर नहीं सकता।",
    marks: 2,
    rubric: [{ key: "(क) सही", marks: "1 अंक" }, { key: "(ख) गलत", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • वाक्य निर्माण",
    q: "'चूजा' शब्द से एक सरल वाक्य बनाओ।",
    ans: "<strong>Model Answer:</strong><br><strong>पीला चूजा अपनी माँ मुर्गी के पीछे-पीछे दौड़ता है।</strong>",
    marks: 1,
    rubric: [{ key: "सार्थक वाक्य", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • सुलेख",
    q: "सुंदर लिखावट में लिखो: [बतख, चूजा, अंडा, केंचुआ]।",
    ans: "<strong>Model Answer:</strong><br>विद्यार्थी लिखेंगे: <strong>बतख, चूजा, अंडा, केंचुआ</strong>।",
    marks: 1,
    rubric: [{ key: "सुंदर लिखावट", marks: "1 अंक" }]
  }
];

const ch16Questions = [
  {
    category: "कहानी से • पात्रों का परिचय",
    q: "कहानी 'लालू और पीलू' में मुर्गी के कितने चूजे थे और उनके क्या नाम थे?",
    ans: "<strong>Model Answer:</strong><br>मुर्गी के <strong>दो चूजे थे — एक का नाम लालू और दूसरे का नाम पीलू था</strong>।",
    marks: 2,
    rubric: [{ key: "दो चूजे", marks: "1 अंक" }, { key: "लालू और पीलू", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • रंगों की पसंद",
    q: "लालू और पीलू को कौन-कौन से रंग की चीजें पसंद थीं?",
    ans: "<strong>Model Answer:</strong><br><strong>लालू को लाल चीजें पसंद थीं और पीलू को पीली चीजें पसंद थीं</strong>।",
    marks: 2,
    rubric: [{ key: "लालू को लाल चीजें", marks: "1 अंक" }, { key: "पीलू को पीली चीजें", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • पौधे पर लाल चीज",
    q: "लालू ने एक दिन पौधे पर क्या लगा देखा और उसने क्या किया?",
    ans: "<strong>Model Answer:</strong><br>लालू ने पौधे पर <strong>एक लाल-लाल चीज देखी और उसने उसे तुरंत खा लिया</strong>।",
    marks: 2,
    rubric: [{ key: "लाल चीज देखी", marks: "1 अंक" }, { key: "उसे खा लिया", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • जीभ जलना",
    q: "वह लाल चीज क्या थी और खाने पर क्या हुआ?",
    ans: "<strong>Model Answer:</strong><br>वह <strong>लाल मिर्च थी! उसे खाते ही लालू की जीभ जलने लगी और वह रोने लगा</strong>।",
    marks: 2,
    rubric: [{ key: "लाल मिर्च थी", marks: "1 अंक" }, { key: "जीभ जलने लगी व रोने लगा", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • पीलू की मदद",
    q: "लालू को रोता देखकर पीलू क्या लेकर दौड़ा?",
    ans: "<strong>Model Answer:</strong><br>पीलू एक <strong>पीला मीठा गुड़ का टुकड़ा (लड्डू) लेकर दौड़ा</strong>।",
    marks: 2,
    rubric: [{ key: "पीला गुड़ का टुकड़ा / लड्डू", marks: "2 अंक" }]
  },
  {
    category: "कहानी से • जलन शांत होना",
    q: "गुड़ खाने के बाद लालू के साथ क्या हुआ?",
    ans: "<strong>Model Answer:</strong><br>लालू ने झट गुड़ खाया और <strong>उसके मुँह की जलन शांत हो गई</strong>।",
    marks: 1,
    rubric: [{ key: "जलन शांत हो गई", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • माँ का प्यार",
    q: "मुर्गी ने लालू और पीलू दोनों को क्या किया?",
    ans: "<strong>Model Answer:</strong><br>मुर्गी ने <strong>लालू और पीलू दोनों को प्यार से गले लगा लिया (लिपटा लिया)</strong>।",
    marks: 1,
    rubric: [{ key: "प्यार से गले लगा लिया", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • नाम और रंग",
    q: "अगर नीले और हरे रंग के चूजे होते, तो उनके क्या नाम होते?",
    ans: "<strong>Model Answer:</strong><br>• नीले रंग के चूजे का नाम: <strong>नीलू</strong><br>• हरे रंग के चूजे का नाम: <strong>होलू / हरिया</strong>",
    marks: 2,
    rubric: [{ key: "नीलू", marks: "1 अंक" }, { key: "हरिया / होलू", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • रिक्त स्थान पूर्ति",
    q: "खाली स्थान भरो:<br>(क) लालू लाल चीजें _______ (खाता / फेंकता) था।<br>(ख) वह एक लाल _______ (मिर्च / टमाटर) थी।<br>(ग) पीलू एक पीला _______ (गुड़ का टुकड़ा / पत्थर) लाया।",
    ans: "<strong>Model Answer:</strong><br>(क) लालू लाल चीजें <strong>खाता</strong> था।<br>(ख) वह एक लाल <strong>मिर्च</strong> थी।<br>(ग) पीलू एक पीला <strong>गुड़ का टुकड़ा</strong> लाया।",
    marks: 3,
    rubric: [{ key: "खाता", marks: "1 अंक" }, { key: "मिर्च", marks: "1 अंक" }, { key: "गुड़ का टुकड़ा", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • विलोम शब्द",
    q: "विलोम शब्द लिखो:<br>(क) तीखा &rarr; _______<br>(ख) रोना &rarr; _______",
    ans: "<strong>Model Answer:</strong><br>(क) तीखा &rarr; <strong>मीठा</strong><br>(ख) रोना &rarr; <strong>हँसना</strong>",
    marks: 2,
    rubric: [{ key: "मीठा", marks: "1 अंक" }, { key: "हँसना", marks: "1 अंक" }]
  },
  {
    category: "बातचीत के लिए • तीखा लगने पर उपाय",
    q: "जब तुम्हारी जीभ पर तेज तीखा लग जाए, तो तुम क्या खाते या पीते हो?",
    ans: "<strong>Model Answer:</strong><br>हम <strong>ठंडा दूध पीते हैं या चीनी, शहद, गुड़ अथवा आइसक्रीम खाते हैं</strong>।",
    marks: 2,
    rubric: [{ key: "दूध / चीनी / शहद", marks: "2 अंक" }]
  },
  {
    category: "चित्र और बातचीत • अवलोकन",
    q: "पाठ के चित्र में लालू का मुँह कैसा दिख रहा है जब उसने मिर्च खाई?",
    ans: "<strong>Model Answer:</strong><br>लालू का मुँह <strong>खुला हुआ, आँखों से आँसू बहते और जीभ बाहर निकली हुई</strong> दिख रही है।",
    marks: 1,
    rubric: [{ key: "आँखों में आँसू व जीभ बाहर", marks: "1 अंक" }]
  },
  {
    category: "सही या गलत • सीख",
    q: "सही या गलत बताओ:<br>(क) बिना जाने-पहचाने किसी भी अनजान फल या पौधे की चीज को नहीं खाना चाहिए।<br>(ख) भाई-बहनों को आपस में एक-दूसरे की मदद करनी चाहिए।",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>सही।</strong> वह नुकसान पहुँचा सकती है।<br>(ख) <strong>सही।</strong> हमेशा मदद करनी चाहिए।",
    marks: 2,
    rubric: [{ key: "(क) सही", marks: "1 अंक" }, { key: "(ख) सही", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • वाक्य निर्माण",
    q: "'मिर्च' शब्द से एक सरल वाक्य बनाओ।",
    ans: "<strong>Model Answer:</strong><br><strong>हरी और लाल मिर्च का स्वाद बहुत तीखा होता है।</strong>",
    marks: 1,
    rubric: [{ key: "सार्थक वाक्य", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • सुलेख",
    q: "सुंदर लिखावट में लिखो: [लालू, पीलू, मिर्च, लड्डू]।",
    ans: "<strong>Model Answer:</strong><br>विद्यार्थी लिखेंगे: <strong>लालू, पीलू, मिर्च, लड्डू</strong>।",
    marks: 1,
    rubric: [{ key: "सुंदर लिखावट", marks: "1 अंक" }]
  }
];

const ch17Questions = [
  {
    category: "कविता से • कविता का बोल",
    q: "कविता 'चकई के चकदुम' की मुख्य टेक (पंक्ति) क्या है?",
    ans: "<strong>Model Answer:</strong><br><strong>'चकई के चकदुम, चकई के चकदुम!'</strong>",
    marks: 1,
    rubric: [{ key: "चकई के चकदुम टेक", marks: "1 अंक" }]
  },
  {
    category: "कविता से • गाँव का दृश्य",
    q: "गाँव की मड़ैया (झोपड़ी) के बारे में क्या कहा गया है?",
    ans: "<strong>Model Answer:</strong><br>'गाँव की मड़ैया, <strong>साथ रहें हम-तुम</strong>!'",
    marks: 1,
    rubric: [{ key: "साथ रहें हम-तुम", marks: "1 अंक" }]
  },
  {
    category: "कविता से • गैया और दूध",
    q: "ग्वाले की गैया से क्या मिलता है?",
    ans: "<strong>Model Answer:</strong><br>'ग्वाले की गैया, <strong>दूध पिएँ हम-तुम</strong>!'",
    marks: 1,
    rubric: [{ key: "दूध पिएँ हम-तुम", marks: "1 अंक" }]
  },
  {
    category: "कविता से • नैया और सैर",
    q: "कागज की नैया के बारे में क्या पंक्ति है?",
    ans: "<strong>Model Answer:</strong><br>'कागज की नैया, <strong>पार करें हम-तुम</strong>!'",
    marks: 1,
    rubric: [{ key: "पार करें हम-तुम", marks: "1 अंक" }]
  },
  {
    category: "कविता से • फुलवा की बगिया",
    q: "फुलवा की बगिया में क्या करने को कहा गया है?",
    ans: "<strong>Model Answer:</strong><br>'फुलवा की बगिया, <strong>फूल चुनें हम-तुम</strong>!'",
    marks: 1,
    rubric: [{ key: "फूल चुनें हम-तुम", marks: "1 अंक" }]
  },
  {
    category: "कविता से • खेल खत्म",
    q: "कविता के अंत में क्या पंक्ति आती है?",
    ans: "<strong>Model Answer:</strong><br>'खत्म हुई बदरी, <strong>खेल खत्म भैया, अब घर चलें हम-तुम</strong>!'",
    marks: 2,
    rubric: [{ key: "खेल खत्म भैया quote", marks: "2 अंक" }]
  },
  {
    category: "शब्दों का खेल • तुकबंदी",
    q: "समान लय वाले शब्द लिखो:<br>(क) मड़ैया<br>(ख) नैया",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>मड़ैया</strong> &rarr; गैया, भैया, नैया।<br>(ख) <strong>नैया</strong> &rarr; छैया, पैया।",
    marks: 2,
    rubric: [{ key: "मड़ैया तुकबंदी", marks: "1 अंक" }, { key: "नैया तुकबंदी", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • रिक्त स्थान पूर्ति",
    q: "कविता की पंक्तियाँ पूरी करो:<br>(क) गाँव की मड़ैया, साथ रहें _______।<br>(ख) ग्वाले की गैया, दूध पिएँ _______।<br>(ग) कागज की नैया, पार करें _______।",
    ans: "<strong>Model Answer:</strong><br>(क) गाँव की मड़ैया, साथ रहें <strong>हम-तुम</strong>।<br>(ख) ग्वाले की गैया, दूध पिएँ <strong>हम-तुम</strong>।<br>(ग) कागज की नैया, पार करें <strong>हम-तुम</strong>।",
    marks: 3,
    rubric: [{ key: "हम-तुम", marks: "1 अंक" }, { key: "हम-तुम", marks: "1 अंक" }, { key: "हम-तुम", marks: "1 अंक" }]
  },
  {
    category: "चित्र और बातचीत • अवलोकन",
    q: "पाठ के चित्र में बच्चे कौन सा पारंपरिक खेल खेल रहे हैं?",
    ans: "<strong>Model Answer:</strong><br>बच्चे <strong>एक-दूसरे के हाथ पकड़कर गोल-गोल घूमने वाला खेल (चकई)</strong> खेल रहे हैं।",
    marks: 2,
    rubric: [{ key: "हाथ पकड़कर गोल घूमना", marks: "2 अंक" }]
  },
  {
    category: "शब्दों का खेल • ग्रामीण शब्द",
    q: "इन ग्रामीण शब्दों का अर्थ लिखो:<br>(क) मड़ैया &rarr; _______<br>(ख) गैया &rarr; _______",
    ans: "<strong>Model Answer:</strong><br>(क) मड़ैया &rarr; <strong>छोटी झोपड़ी</strong><br>(ख) गैया &rarr; <strong>गाय (गौमाता)</strong>",
    marks: 2,
    rubric: [{ key: "झोपड़ी", marks: "1 अंक" }, { key: "गाय", marks: "1 अंक" }]
  },
  {
    category: "सही या गलत • तथ्य",
    q: "सही या गलत बताओ:<br>(क) कागज की नाव पानी में तैरती है।<br>(ख) गाय हमें मीठा और पौष्टिक दूध देती है।",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>सही।</strong> कागज की नाव पानी पर तैरती है।<br>(ख) <strong>सही।</strong> गाय दूध देती है।",
    marks: 2,
    rubric: [{ key: "(क) सही", marks: "1 अंक" }, { key: "(ख) सही", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • वाक्य निर्माण",
    q: "'बगिया' शब्द से एक सरल वाक्य बनाओ।",
    ans: "<strong>Model Answer:</strong><br><strong>हमारी बगिया में लाल और पीले गुलाब के फूल खिले हैं।</strong>",
    marks: 1,
    rubric: [{ key: "सार्थक वाक्य", marks: "1 अंक" }]
  },
  {
    category: "आओ कुछ नया करें • गोल घूमने का खेल",
    q: "गोल-गोल घूमते समय सिर चकराने पर क्या करना चाहिए?",
    ans: "<strong>Model Answer:</strong><br>घूमना बंद करके <strong>शांति से जमीन पर बैठ जाना चाहिए</strong> ताकि चक्कर न आए।",
    marks: 1,
    rubric: [{ key: "बैठ जाना चाहिए", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • छूटे अक्षर",
    q: "शब्द पूरा करो: च _ क _ ई।",
    ans: "<strong>Model Answer:</strong><br><strong>चकई</strong>।",
    marks: 1,
    rubric: [{ key: "चकई", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • सुलेख",
    q: "सुंदर लिखावट में लिखो: [चकदुम, मड़ैया, गैया, नैया]।",
    ans: "<strong>Model Answer:</strong><br>विद्यार्थी लिखेंगे: <strong>चकदुम, मड़ैया, गैया, नैया</strong>।",
    marks: 1,
    rubric: [{ key: "सुंदर लिखावट", marks: "1 अंक" }]
  }
];

const ch18Questions = [
  {
    category: "कविता से • समर सिंह का घमंड",
    q: "कविता 'छोटी का कमाल' में समर सिंह किस बात पर अकड़ते थे?",
    ans: "<strong>Model Answer:</strong><br>समर सिंह अपनी <strong>लंबाई, चौड़ाई और भारी शरीर पर बहुत अकड़ते थे</strong> ('समर सिंह थे बहुत अकड़ते')।",
    marks: 2,
    rubric: [{ key: "लंबाई व भारी शरीर पर अकड़ना", marks: "2 अंक" }]
  },
  {
    category: "कविता से • छोटी की तुलना",
    q: "समर सिंह छोटी की तुलना किन-किन चीजों से करते थे?",
    ans: "<strong>Model Answer:</strong><br>वे कहते थे: 'मैं हूँ मोटा पटसन का रस्सा, छोटी <strong>कच्ची सुतली</strong>; मैं हूँ लोहा, छोटी <strong>मोमी पतली</strong>!'",
    marks: 2,
    rubric: [{ key: "कच्ची सुतली", marks: "1 अंक" }, { key: "मोमी पतली", marks: "1 अंक" }]
  },
  {
    category: "कविता से • शी-शॉ पर बैठना",
    q: "जब दोनों पार्क के शी-शॉ (झूले) पर बैठे, तो क्या हुआ?",
    ans: "<strong>Model Answer:</strong><br>समर सिंह के भारी वजन से <strong>वे नीचे धड़ाम से बैठ गए और हल्की छोटी उछलकर चोटी पर (आसमान में) पहुँच गई</strong>!",
    marks: 2,
    rubric: [{ key: "समर सिंह नीचे", marks: "1 अंक" }, { key: "छोटी ऊपर चोटी पर", marks: "1 अंक" }]
  },
  {
    category: "कविता से • समर सिंह का डर",
    q: "ऊपर उठने पर समर सिंह का क्या हाल हुआ?",
    ans: "<strong>Model Answer:</strong><br>समर सिंह के <strong>होश उड़ गए और पसीने छूटने लगे</strong>!",
    marks: 1,
    rubric: [{ key: "होश उड़ गए / पसीने छूटे", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • तुलनात्मक शब्द",
    q: "दिए गए शब्दों से तुलना करो:<br>१. मोटा &rarr; _______<br>२. भारी &rarr; _______",
    ans: "<strong>Model Answer:</strong><br>१. मोटा &rarr; <strong>पतला</strong><br>२. भारी &rarr; <strong>हल्का</strong>",
    marks: 2,
    rubric: [{ key: "पतला", marks: "1 अंक" }, { key: "हल्का", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • रिक्त स्थान पूर्ति",
    q: "कविता की पंक्तियाँ पूरी करो:<br>(क) समर सिंह थे बहुत _______।<br>(ख) छोटी कितनी छोटी, हम _______ आलू-पराठा, छोटी पतली रोटी।<br>(ग) पहुँची छोटी जा चोटी पर, समर सिंह _______।",
    ans: "<strong>Model Answer:</strong><br>(क) समर सिंह थे बहुत <strong>अकड़ते</strong>।<br>(ख) छोटी कितनी छोटी, हम <strong>मोटे</strong> आलू-पराठा, छोटी पतली रोटी।<br>(ग) पहुँची छोटी जा चोटी पर, समर सिंह <strong>चकराए</strong>।",
    marks: 3,
    rubric: [{ key: "अकड़ते", marks: "1 अंक" }, { key: "मोटे", marks: "1 अंक" }, { key: "चकराए", marks: "1 अंक" }]
  },
  {
    category: "चित्र और बातचीत • अवलोकन",
    q: "पाठ के चित्र में शी-शॉ झूले पर कौन नीचे है और कौन ऊपर?",
    ans: "<strong>Model Answer:</strong><br>भारी <strong>समर सिंह जमीन पर टिके हैं और हल्की छोटी हवा में ऊपर मुस्कुरा रही है</strong>।",
    marks: 2,
    rubric: [{ key: "समर सिंह नीचे", marks: "1 अंक" }, { key: "छोटी ऊपर", marks: "1 अंक" }]
  },
  {
    category: "बातचीत के लिए • शी-शॉ का विज्ञान",
    q: "शी-शॉ झूले पर भारी बच्चा नीचे और हल्का बच्चा ऊपर क्यों चला जाता है?",
    ans: "<strong>Model Answer:</strong><br>क्योंकि भारी बच्चे का <strong>वजन (गुरुत्वाकर्षण बल) अधिक होता है, जिससे उसका पलड़ा नीचे बैठ जाता है</strong>।",
    marks: 2,
    rubric: [{ key: "अधिक वजन से पलड़ा नीचे बैठना", marks: "2 अंक" }]
  },
  {
    category: "शब्दों का खेल • भारी और हल्की चीजें",
    q: "बताओ इनमें से कौन भारी है और कौन हल्का:<br>[हाथी, तितली, फुटबॉल, कंकड़]",
    ans: "<strong>Model Answer:</strong><br>• <strong>भारी:</strong> हाथी, फुटबॉल।<br>• <strong>हल्का:</strong> तितली, कंकड़।",
    marks: 2,
    rubric: [{ key: "भारी व हल्की पहचान", marks: "2 अंक" }]
  },
  {
    category: "सही या गलत • सीख",
    q: "सही या गलत बताओ:<br>(क) किसी को उसके छोटे या पतले होने पर चिढ़ाना नहीं चाहिए।<br>(ख) घमंड करने वाले का सिर हमेशा नीचा होता है।",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>सही।</strong> किसी का मजाक नहीं उड़ाना चाहिए।<br>(ख) <strong>सही।</strong> घमंडी को सीख मिलती है।",
    marks: 2,
    rubric: [{ key: "(क) सही", marks: "1 अंक" }, { key: "(ख) सही", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • वाक्य निर्माण",
    q: "'घमंड' शब्द से एक सरल वाक्य बनाओ।",
    ans: "<strong>Model Answer:</strong><br><strong>हमें अपनी ताकत या सुंदरता पर कभी घमंड नहीं करना चाहिए।</strong>",
    marks: 1,
    rubric: [{ key: "सार्थक वाक्य", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • तुकबंदी",
    q: "समान लय वाले शब्द लिखो:<br>(क) अकड़ते<br>(ख) रोटी",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>अकड़ते</strong> &rarr; झगड़ते, पकड़ते।<br>(ख) <strong>रोटी</strong> &rarr; छोटी, मोटी, खोटी।",
    marks: 2,
    rubric: [{ key: "अकड़ते तुकबंदी", marks: "1 अंक" }, { key: "रोटी तुकबंदी", marks: "1 अंक" }]
  },
  {
    category: "आओ कुछ नया करें • खेल का संतुलन",
    q: "शी-शॉ झूले को बराबर संतुलित करने के लिए क्या करना पड़ेगा?",
    ans: "<strong>Model Answer:</strong><br>दोनों तरफ <strong>बराबर वजन के बच्चों को बैठना पड़ेगा</strong>।",
    marks: 1,
    rubric: [{ key: "बराबर वजन होना", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • छूटे अक्षर",
    q: "शब्द पूरा करो: अ _ क _ ड़।",
    ans: "<strong>Model Answer:</strong><br><strong>अकड़</strong>।",
    marks: 1,
    rubric: [{ key: "अकड़", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • सुलेख",
    q: "सुंदर लिखावट में लिखो: [समरसिंह, छोटी, चोटी, शी-शॉ]।",
    ans: "<strong>Model Answer:</strong><br>विद्यार्थी लिखेंगे: <strong>समरसिंह, छोटी, चोटी, शी-शॉ</strong>।",
    marks: 1,
    rubric: [{ key: "सुंदर लिखावट", marks: "1 अंक" }]
  }
];

const ch19Questions = [
  {
    category: "कविता से • चार चनों की बात",
    q: "कविता 'चार चने' में यदि पैसे होते, तो क्या खरीदते?",
    ans: "<strong>Model Answer:</strong><br>यदि पैसे पास होते, तो <strong>चार चने लाते</strong> ('पैसा पास होता तो चार चने लाते')।",
    marks: 1,
    rubric: [{ key: "चार चने लाते", marks: "1 अंक" }]
  },
  {
    category: "कविता से • पहला चना",
    q: "चार में से एक चना किसको खिलाते और क्या होता?",
    ans: "<strong>Model Answer:</strong><br>एक चना <strong>तोते को खिलाते, तोता टायँ-टायँ गाता, गाने में बड़ा मजा आता</strong>!",
    marks: 2,
    rubric: [{ key: "तोते को खिलाते", marks: "1 अंक" }, { key: "टायँ-टायँ गाता", marks: "1 अंक" }]
  },
  {
    category: "कविता से • दूसरा चना",
    q: "दूसरा चना किसको खिलाते और क्या फायदा होता?",
    ans: "<strong>Model Answer:</strong><br>दूसरा चना <strong>घोड़े को खिलाते, घोड़ा पीठ पर बिठाता, सैर करने में बड़ा मजा आता</strong>!",
    marks: 2,
    rubric: [{ key: "घोड़े को खिलाते", marks: "1 अंक" }, { key: "पीठ पर बिठाता", marks: "1 अंक" }]
  },
  {
    category: "कविता से • तीसरा चना",
    q: "तीसरा चना किसको खिलाते और क्या घटना घटती?",
    ans: "<strong>Model Answer:</strong><br>तीसरा चना <strong>चूहे को खिलाते, कड़े चने से चूहे का दाँत टूट जाता</strong>!",
    marks: 2,
    rubric: [{ key: "चूहे को खिलाते", marks: "1 अंक" }, { key: "दाँत टूट जाता", marks: "1 अंक" }]
  },
  {
    category: "कविता से • चौथा चना",
    q: "चौथा चना किसे खिलाने की बात सोच सकते हैं?",
    ans: "<strong>Model Answer:</strong><br>चौथा चना हम <strong>चिड़िया, बंदर या खुद खा सकते हैं</strong>!",
    marks: 1,
    rubric: [{ key: "चिड़िया / बंदर / खुद", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • तुकबंदी",
    q: "समान लय वाले शब्द लिखो:<br>(क) चना<br>(ख) गाता",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>चना</strong> &rarr; बना, घना, मना।<br>(ख) <strong>गाता</strong> &rarr; आता, जाता, भाता।",
    marks: 2,
    rubric: [{ key: "चना तुकबंदी", marks: "1 अंक" }, { key: "गाता तुकबंदी", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • रिक्त स्थान पूर्ति",
    q: "कविता की पंक्तियाँ पूरी करो:<br>(क) पैसा पास होता तो _______ चने लाते।<br>(ख) तोते को खिलाते तो _______ गाता।<br>(ग) घोड़े को खिलाते तो _______ पर बिठाता।",
    ans: "<strong>Model Answer:</strong><br>(क) पैसा पास होता तो <strong>चार</strong> चने लाते।<br>(ख) तोते को खिलाते तो <strong>टायँ-टायँ</strong> गाता।<br>(ग) घोड़े को खिलाते तो <strong>पीठ</strong> पर बिठाता।",
    marks: 3,
    rubric: [{ key: "चार", marks: "1 अंक" }, { key: "टायँ-टायँ", marks: "1 अंक" }, { key: "पीठ", marks: "1 अंक" }]
  },
  {
    category: "चित्र और बातचीत • अवलोकन",
    q: "पाठ के चित्र में तोता कहाँ बैठा है?",
    ans: "<strong>Model Answer:</strong><br>चित्र में तोता <strong>पेड़ की डाल पर हरी मिर्च और चना खाता</strong> बैठा है।",
    marks: 1,
    rubric: [{ key: "पेड़ की डाल पर", marks: "1 अंक" }]
  },
  {
    category: "बातचीत के लिए • पशु-पक्षियों का प्रिय भोजन",
    q: "मिलान करो कौन क्या खाता है:<br>१. तोता &emsp;&emsp; (क) हरी घास व चना<br>२. घोड़ा &emsp;&emsp; (ख) हरी मिर्च व अमरूद<br>३. चूहा &emsp;&emsp;&emsp; (ग) रोटी व अनाज के दाने",
    ans: "<strong>Model Answer:</strong><br>• १. तोता &rarr; <strong>(ख) हरी मिर्च व अमरूद</strong><br>• २. घोड़ा &rarr; <strong>(क) हरी घास व चना</strong><br>• ३. चूहा &rarr; <strong>(ग) रोटी व अनाज के दाने</strong>",
    marks: 2,
    rubric: [{ key: "तीनों का सही मिलान", marks: "2 अंक" }]
  },
  {
    category: "शब्दों का खेल • गिनती के शब्द",
    q: "संख्या को शब्दों में लिखो:<br>(क) १ &rarr; _______<br>(ख) २ &rarr; _______<br>(ग) ४ &rarr; _______",
    ans: "<strong>Model Answer:</strong><br>(क) १ &rarr; <strong>एक</strong><br>(ख) २ &rarr; <strong>दो</strong><br>(ग) ४ &rarr; <strong>चार</strong>",
    marks: 3,
    rubric: [{ key: "एक", marks: "1 अंक" }, { key: "दो", marks: "1 अंक" }, { key: "चार", marks: "1 अंक" }]
  },
  {
    category: "सही या गलत • तथ्य",
    q: "सही या गलत बताओ:<br>(क) चना एक पौष्टिक दाल है जिसमें भरपूर प्रोटीन होता है।<br>(ख) तोता इंसान जैसी मीठी बोली की नकल कर सकता है।",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>सही।</strong> चना बहुत पौष्टिक होता है।<br>(ख) <strong>सही।</strong> तोता सिखाने पर बोलता है।",
    marks: 2,
    rubric: [{ key: "(क) सही", marks: "1 अंक" }, { key: "(ख) सही", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • वाक्य निर्माण",
    q: "'तोता' शब्द से एक सरल वाक्य बनाओ।",
    ans: "<strong>Model Answer:</strong><br><strong>तोते का रंग हरा और चोंच लाल होती है।</strong>",
    marks: 1,
    rubric: [{ key: "सार्थक वाक्य", marks: "1 अंक" }]
  },
  {
    category: "आओ कुछ नया करें • चने के पकवान",
    q: "चने से कौन-कौन सी स्वादिष्ट चीजें बनती हैं? किन्हीं दो के नाम लिखो।",
    ans: "<strong>Model Answer:</strong><br><strong>भुने हुए चने, चने की चाट और बेसन के लड्डू</strong>।",
    marks: 2,
    rubric: [{ key: "चने के व्यंजन", marks: "2 अंक" }]
  },
  {
    category: "शब्दों का खेल • छूटे अक्षर",
    q: "शब्द पूरा करो: पै _ सा।",
    ans: "<strong>Model Answer:</strong><br><strong>पैसा</strong>।",
    marks: 1,
    rubric: [{ key: "पैसा", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • सुलेख",
    q: "सुंदर लिखावट में लिखो: [चना, तोता, घोड़ा, चूहा]।",
    ans: "<strong>Model Answer:</strong><br>विद्यार्थी लिखेंगे: <strong>चना, तोता, घोड़ा, चूहा</strong>।",
    marks: 1,
    rubric: [{ key: "सुंदर लिखावट", marks: "1 अंक" }]
  }
];

const ch20Questions = [
  {
    category: "कविता से • बुढ़िया की उम्र और काम",
    q: "कविता 'भगदड़' में बुढ़िया कितने वर्ष की थी और क्या चला रही थी?",
    ans: "<strong>Model Answer:</strong><br>बुढ़िया <strong>साठ वर्ष की थी और वह हाथ से चक्की चला रही थी</strong> ('बुढ़िया चला रही थी चक्की, पूरे साठ वर्ष की पक्की')।",
    marks: 2,
    rubric: [{ key: "साठ वर्ष की", marks: "1 अंक" }, { key: "चक्की चला रही थी", marks: "1 अंक" }]
  },
  {
    category: "कविता से • मिठाई पर मक्खी",
    q: "दोने में रखी मिठाई पर कौन आकर बैठ गई?",
    ans: "<strong>Model Answer:</strong><br>दोने में रखी मिठाई पर <strong>मक्खी उड़कर आ बैठी</strong>।",
    marks: 1,
    rubric: [{ key: "मक्खी", marks: "1 अंक" }]
  },
  {
    category: "कविता से • बिल्ली की झपट्ट",
    q: "जब बुढ़िया मक्खी को उड़ाने बाँस लेकर दौड़ी, तब बिल्ली ने क्या किया?",
    ans: "<strong>Model Answer:</strong><br>बिल्ली अंदर घुसी और <strong>पकौड़ी खाने लगी</strong>! ('झपटी बिल्ली खाने पकौड़ी')।",
    marks: 2,
    rubric: [{ key: "बिल्ली अंदर घुसी", marks: "1 अंक" }, { key: "पकौड़ी खाने लगी", marks: "1 अंक" }]
  },
  {
    category: "कविता से • कुत्ते की रोटी",
    q: "जब बुढ़िया बिल्ली को भगाने दौड़ी, तब कुत्ते ने क्या किया?",
    ans: "<strong>Model Answer:</strong><br>कुत्ता झपटा और <strong>थाली से गरम रोटी लेकर भाग गया</strong>! ('कुत्ता भागा रोटी लेकर')।",
    marks: 2,
    rubric: [{ key: "रोटी लेकर भाग गया", marks: "2 अंक" }]
  },
  {
    category: "कविता से • बकरे का हमला",
    q: "जब बुढ़िया बाहर निकली, तो अंदर कौन घुस गया?",
    ans: "<strong>Model Answer:</strong><br>अंदर <strong>बकरा घुस गया</strong> और मटके लुढ़कने लगे! ('बकरा घुसा तुरंत ही अंदर')।",
    marks: 2,
    rubric: [{ key: "बकरा अंदर घुसा", marks: "2 अंक" }]
  },
  {
    category: "कविता से • बुढ़िया की हार",
    q: "भगदड़ से थककर बुढ़िया ने अंत में क्या किया?",
    ans: "<strong>Model Answer:</strong><br>बुढ़िया थककर बैठ गई और <strong>उसने सारा घर बिल्ली को ही सौंप दिया</strong>! ('बुढ़िया बैठ गई तब थककर, सौंप दिया बिल्ली को ही घर!')।",
    marks: 2,
    rubric: [{ key: "थककर बैठ गई", marks: "1 अंक" }, { key: "घर बिल्ली को सौंप दिया quote", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • तुकबंदी",
    q: "समान लय वाले शब्द लिखो:<br>(क) चक्की<br>(ख) पकौड़ी",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>चक्की</strong> &rarr; पक्की, मक्की।<br>(ख) <strong>पकौड़ी</strong> &rarr; दौड़ी, हथौड़ी, कचौड़ी।",
    marks: 2,
    rubric: [{ key: "चक्की तुकबंदी", marks: "1 अंक" }, { key: "पकौड़ी तुकबंदी", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • रिक्त स्थान पूर्ति",
    q: "कविता की पंक्तियाँ पूरी करो:<br>(क) बुढ़िया चला रही थी _______, पूरे साठ वर्ष की पक्की।<br>(ख) दोने में रखी थी मिठाई, उस पर उड़कर _______ आई।<br>(ग) बुढ़िया बैठ गई तब थककर, सौंप दिया _______ को ही घर।",
    ans: "<strong>Model Answer:</strong><br>(क) बुढ़िया चला रही थी <strong>चक्की</strong>, पूरे साठ वर्ष की पक्की।<br>(ख) दोने में रखी थी मिठाई, उस पर उड़कर <strong>मक्खी</strong> आई।<br>(ग) बुढ़िया बैठ गई तब थककर, सौंप दिया <strong>बिल्ली</strong> को ही घर।",
    marks: 3,
    rubric: [{ key: "चक्की", marks: "1 अंक" }, { key: "मक्खी", marks: "1 अंक" }, { key: "बिल्ली", marks: "1 अंक" }]
  },
  {
    category: "चित्र और बातचीत • अवलोकन",
    q: "पाठ के चित्र में कौन-कौन से जानवर भागते दिखाई दे रहे हैं?",
    ans: "<strong>Model Answer:</strong><br>चित्र में <strong>मक्खी, बिल्ली, कुत्ता और बकरा</strong> भगदड़ मचाते दिखाई दे रहे हैं।",
    marks: 2,
    rubric: [{ key: "चारों जीवों के नाम", marks: "2 अंक" }]
  },
  {
    category: "घटनाओं का क्रम • कौन पहले आया",
    q: "क्रम से लगाओ कि कौन कब आया (१ से ४):<br>(अ) कुत्ता रोटी ले भागा<br>(आ) मक्खी आई मिठाई पर<br>(इ) बकरा अंदर घुसा<br>(ई) बिल्ली पकौड़ी पर झपटी",
    ans: "<strong>Model Answer:</strong><br>१. <strong>(आ)</strong> मक्खी आई मिठाई पर<br>२. <strong>(ई)</strong> बिल्ली पकौड़ी पर झपटी<br>३. <strong>(अ)</strong> कुत्ता रोटी ले भागा<br>४. <strong>(इ)</strong> बकरा अंदर घुसा",
    marks: 2,
    rubric: [{ key: "सही क्रम आ -> ई -> अ -> इ", marks: "2 अंक" }]
  },
  {
    category: "सही या गलत • तथ्य",
    q: "सही या गलत बताओ:<br>(क) हाथ से चलने वाली पत्थर की चक्की से अनाज पीसा जाता है।<br>(ख) घर खुला छोड़ने पर जानवर अंदर घुसकर नुकसान कर सकते हैं।",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>सही।</strong> चक्की से आटा पीसते हैं।<br>(ख) <strong>सही।</strong> दरवाजे बंद रखने चाहिए।",
    marks: 2,
    rubric: [{ key: "(क) सही", marks: "1 अंक" }, { key: "(ख) सही", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • वाक्य निर्माण",
    q: "'चक्की' शब्द से एक सरल वाक्य बनाओ।",
    ans: "<strong>Model Answer:</strong><br><strong>दादीजी हाथ की चक्की से गेहूँ पीसकर ताजा आटा बनाती हैं।</strong>",
    marks: 1,
    rubric: [{ key: "सार्थक वाक्य", marks: "1 अंक" }]
  },
  {
    category: "आओ कुछ नया करें • भगदड़ का अभिनय",
    q: "बुढ़िया का बाँस लेकर भागना और बिल्ली का पकौड़ी पर झपटना अभिनय करो।",
    ans: "<strong>Model Answer:</strong><br>विद्यार्थी हास्य और तेजी से भागते हुए जीवंत अभिनय प्रस्तुत करते हैं।",
    marks: 1,
    rubric: [{ key: "हास्य अभिनय", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • छूटे अक्षर",
    q: "शब्द पूरा करो: भ _ ग _ द _ ड़।",
    ans: "<strong>Model Answer:</strong><br><strong>भगदड़</strong>।",
    marks: 1,
    rubric: [{ key: "भगदड़", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • सुलेख",
    q: "सुंदर लिखावट में लिखो: [चक्की, मक्खी, बिल्ली, बकरा]।",
    ans: "<strong>Model Answer:</strong><br>विद्यार्थी लिखेंगे: <strong>चक्की, मक्खी, बिल्ली, बकरा</strong>।",
    marks: 1,
    rubric: [{ key: "सुंदर लिखावट", marks: "1 अंक" }]
  }
];

const ch21Questions = [
  {
    category: "कहानी से • हलीम का विचार",
    q: "कहानी 'हलीम चला चाँद पर' में हलीम ने एक दिन क्या सोचा?",
    ans: "<strong>Model Answer:</strong><br>हलीम ने सोचा: <strong>'आज मैं चाँद पर जाऊँगा!'</strong>",
    marks: 1,
    rubric: [{ key: "चाँद पर जाऊँगा", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • रॉकेट की सवारी",
    q: "चाँद पर जाने के लिए हलीम कहाँ गया और किसमें बैठा?",
    ans: "<strong>Model Answer:</strong><br>हलीम एक कारखाने में गया और वहाँ से एक <strong>रॉकेट लेकर उसमें बैठ गया</strong>।",
    marks: 2,
    rubric: [{ key: "कारखाने में गया", marks: "1 अंक" }, { key: "रॉकेट में बैठा", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • रास्ते का डर",
    q: "उड़ते-उड़ते रास्ते में क्या हो गया जिससे हलीम को डर लगने लगा?",
    ans: "<strong>Model Answer:</strong><br>रास्ते में <strong>घना अँधेरा हो गया</strong> और हलीम को रास्ता नहीं सूझ रहा था, इसलिए उसे डर लगा।",
    marks: 2,
    rubric: [{ key: "घना अँधेरा हो गया", marks: "1 अंक" }, { key: "डर लगने लगा", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • चाँद का दृश्य",
    q: "चाँद पर पहुँचकर हलीम ने वहाँ क्या देखा?",
    ans: "<strong>Model Answer:</strong><br>हलीम ने देखा कि चाँद पर <strong>बड़े-बड़े गड्ढे और ऊँचे-ऊँचे पहाड़ थे</strong>।",
    marks: 2,
    rubric: [{ key: "बड़े गड्ढे", marks: "1 अंक" }, { key: "ऊँचे पहाड़", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • क्या नहीं था",
    q: "चाँद पर क्या-क्या चीजें नहीं थीं?",
    ans: "<strong>Model Answer:</strong><br>चाँद पर <strong>न कोई पेड़ था, न जानवर, न कोई आदमी और न ही पीने का पानी था</strong>!",
    marks: 2,
    rubric: [{ key: "पेड़, जानवर, आदमी, पानी नहीं थे", marks: "2 अंक" }]
  },
  {
    category: "कहानी से • हलीम की वापसी",
    q: "चाँद पर अकेलापन देखकर हलीम ने क्या किया?",
    ans: "<strong>Model Answer:</strong><br>हलीम ने सोचा कि 'यहाँ तो कोई नहीं है', वह तुरंत <strong>रॉकेट में बैठा और अपने घर लौट आया</strong>! ('हलीम घर लौट आया')।",
    marks: 2,
    rubric: [{ key: "रॉकेट में बैठा", marks: "1 अंक" }, { key: "घर लौट आया", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • आकाश की चीजें",
    q: "रात को आकाश में क्या-क्या दिखाई देता है?",
    ans: "<strong>Model Answer:</strong><br>रात के आकाश में <strong>चाँद, असंख्य चमकते तारे और कभी-कभी टूटता तारा</strong> दिखाई देता है।",
    marks: 2,
    rubric: [{ key: "चाँद और तारे", marks: "2 अंक" }]
  },
  {
    category: "लिखकर देखिए • रिक्त स्थान पूर्ति",
    q: "खाली स्थान भरो:<br>(क) हलीम _______ (रॉकेट / बस) में बैठकर चाँद पर गया।<br>(ख) चाँद पर खूब बड़े-बड़े _______ (गड्ढे / मकान) थे।<br>(ग) चाँद पर कोई पेड़ या _______ (चिड़िया / पहाड़) नहीं था।",
    ans: "<strong>Model Answer:</strong><br>(क) हलीम <strong>रॉकेट</strong> में बैठकर चाँद पर गया।<br>(ख) चाँद पर खूब बड़े-बड़े <strong>गड्ढे</strong> थे।<br>(ग) चाँद पर कोई पेड़ या <strong>चिड़िया</strong> नहीं था।",
    marks: 3,
    rubric: [{ key: "रॉकेट", marks: "1 अंक" }, { key: "गड्ढे", marks: "1 अंक" }, { key: "चिड़िया", marks: "1 अंक" }]
  },
  {
    category: "चित्र और बातचीत • अवलोकन",
    q: "पाठ के चित्र में हलीम का रॉकेट कैसा दिखता है?",
    ans: "<strong>Model Answer:</strong><br>हलीम का रॉकेट <strong>लाल और सफेद रंग का, आगे से नुकीला और पीछे से धुआँ छोड़ता</strong> हुआ दिखता है।",
    marks: 1,
    rubric: [{ key: "रॉकेट का रंग व आकार", marks: "1 अंक" }]
  },
  {
    category: "बातचीत के लिए • अंतरिक्ष यात्री",
    q: "चाँद और अंतरिक्ष में जाने वाले वैज्ञानिकों को क्या कहते हैं?",
    ans: "<strong>Model Answer:</strong><br>उन्हें <strong>अंतरिक्ष यात्री (एस्ट्रोनॉट / गगनयात्री)</strong> कहते हैं।",
    marks: 1,
    rubric: [{ key: "अंतरिक्ष यात्री", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • विलोम शब्द",
    q: "विलोम शब्द लिखो:<br>(क) अँधेरा &rarr; _______<br>(ख) डर &rarr; _______",
    ans: "<strong>Model Answer:</strong><br>(क) अँधेरा &rarr; <strong>उजाला / प्रकाश</strong><br>(ख) डर &rarr; <strong>साहस / निडरता</strong>",
    marks: 2,
    rubric: [{ key: "उजाला", marks: "1 अंक" }, { key: "साहस", marks: "1 अंक" }]
  },
  {
    category: "सही या गलत • तथ्य",
    q: "सही या गलत बताओ:<br>(क) चाँद पर हवा (वायुमंडल) नहीं है, इसलिए वहाँ साँस नहीं ली जा सकती।<br>(ख) भारत के चंद्रयान मिशन ने चाँद के दक्षिणी ध्रुव पर तिरंगा फहराया है।",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>सही।</strong> चाँद पर हवा नहीं है।<br>(ख) <strong>सही।</strong> चंद्रयान-3 ने इतिहास रचा।",
    marks: 2,
    rubric: [{ key: "(क) सही", marks: "1 अंक" }, { key: "(ख) सही", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • वाक्य निर्माण",
    q: "'रॉकेट' शब्द से एक सरल वाक्य बनाओ।",
    ans: "<strong>Model Answer:</strong><br><strong>शक्तिशाली रॉकेट तीव्र गति से अंतरिक्ष में उड़ जाता है।</strong>",
    marks: 1,
    rubric: [{ key: "सार्थक वाक्य", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • छूटे अक्षर",
    q: "शब्द पूरा करो: रॉ _ के _ ट।",
    ans: "<strong>Model Answer:</strong><br><strong>रॉकेट</strong>।",
    marks: 1,
    rubric: [{ key: "रॉकेट", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • सुलेख",
    q: "सुंदर लिखावट में लिखो: [हलीम, रॉकेट, चाँद, गड्ढे]।",
    ans: "<strong>Model Answer:</strong><br>विद्यार्थी लिखेंगे: <strong>हलीम, रॉकेट, चाँद, गड्ढे</strong>।",
    marks: 1,
    rubric: [{ key: "सुंदर लिखावट", marks: "1 अंक" }]
  }
];

const ch22Questions = [
  {
    category: "कविता से • हाथी की सवारी",
    q: "कविता 'हाथी चल्लम चल्लम' में हाथी कैसे चल रहा है?",
    ans: "<strong>Model Answer:</strong><br>हाथी <strong>हल्लम-हल्लम हौदा हिलाता हुआ चल्लम-चल्लम</strong> चल रहा है ('हल्लम-हल्लम हौदा, हाथी चल्लम-चल्लम!')।",
    marks: 2,
    rubric: [{ key: "हल्लम-हल्लम हौदा", marks: "1 अंक" }, { key: "हाथी चल्लम-चल्लम", marks: "1 अंक" }]
  },
  {
    category: "कविता से • हाथी का शरीर",
    q: "हाथी की सूँड, दाँत और कान कैसे बताए गए हैं?",
    ans: "<strong>Model Answer:</strong><br>हाथी की <strong>लंबी सूँड सूँ-सूँ, दाँत सफेद फट्टर-फट्टर और कान सूप जैसे फट्ट-फट्ट</strong> हिलते हैं।",
    marks: 3,
    rubric: [{ key: "लंबी सूँड", marks: "1 अंक" }, { key: "सफेद दाँत", marks: "1 अंक" }, { key: "सूप जैसे कान", marks: "1 अंक" }]
  },
  {
    category: "कविता से • हाथी के पाँव",
    q: "हाथी के पाँव कैसे हैं और कैसे पड़ते हैं?",
    ans: "<strong>Model Answer:</strong><br>हाथी के पाँव <strong>खंभे जैसे भारी हैं और धम्म-धम्म</strong> पड़ते हैं ('पर्वत जैसी देह थुलथुली, खंभे जैसे पाँव धपाधप')।",
    marks: 2,
    rubric: [{ key: "खंभे जैसे पाँव", marks: "1 अंक" }, { key: "धम्म-धम्म पड़ना", marks: "1 अंक" }]
  },
  {
    category: "कविता से • महावत की बैठक",
    q: "हाथी के सिर पर कौन बैठा है और उसके हाथ में क्या है?",
    ans: "<strong>Model Answer:</strong><br>हाथी के सिर पर <strong>महावत बैठा है और उसके हाथ में अंकुश है</strong>।",
    marks: 2,
    rubric: [{ key: "महावत बैठा है", marks: "1 अंक" }, { key: "हाथ में अंकुश", marks: "1 अंक" }]
  },
  {
    category: "कविता से • बच्चों की सवारी",
    q: "बच्चे हाथी पर कहाँ बैठे हैं?",
    ans: "<strong>Model Answer:</strong><br>बच्चे हाथी की पीठ पर कसे <strong>हौदे के अंदर मजे से बैठे हैं</strong>।",
    marks: 1,
    rubric: [{ key: "हौदे के अंदर", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • तुकबंदी",
    q: "समान लय वाले शब्द लिखो:<br>(क) चल्लम<br>(ख) हौदा",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>चल्लम</strong> &rarr; हल्लम, मल्लम।<br>(ख) <strong>हौदा</strong> &rarr; सौदा, पौधा।",
    marks: 2,
    rubric: [{ key: "चल्लम तुकबंदी", marks: "1 अंक" }, { key: "हौदा तुकबंदी", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • रिक्त स्थान पूर्ति",
    q: "कविता की पंक्तियाँ पूरी करो:<br>(क) हल्लम-हल्लम हौदा, हाथी _______।<br>(ख) हम बैठे हाथी पर, हाथी _______।<br>(ग) लंबी-लंबी सूँड, सूँ-सूँ फट्टर-फट्टर, दाँत _______।",
    ans: "<strong>Model Answer:</strong><br>(क) हल्लम-हल्लम हौदा, हाथी <strong>चल्लम-चल्लम</strong>।<br>(ख) हम बैठे हाथी पर, हाथी <strong>मल्लम-मल्लम</strong>।<br>(ग) लंबी-लंबी सूँड, सूँ-सूँ फट्टर-फट्टर, दाँत <strong>सफेद</strong>।",
    marks: 3,
    rubric: [{ key: "चल्लम-चल्लम", marks: "1 अंक" }, { key: "मल्लम-मल्लम", marks: "1 अंक" }, { key: "सफेद", marks: "1 अंक" }]
  },
  {
    category: "चित्र और बातचीत • अवलोकन",
    q: "पाठ के चित्र में हाथी कैसा जानवर लग रहा है?",
    ans: "<strong>Model Answer:</strong><br>हाथी एक <strong>विशालकाय, शांत और राजसी जानवर</strong> लग रहा है।",
    marks: 1,
    rubric: [{ key: "विशालकाय व राजसी जानवर", marks: "1 अंक" }]
  },
  {
    category: "बातचीत के लिए • हाथी का खाना",
    q: "हाथी क्या-क्या खाना पसंद करता है?",
    ans: "<strong>Model Answer:</strong><br>हाथी <strong>पेड़ों की हरी डालियाँ, पत्ते, मीठा गन्ना और केले</strong> बहुत चाव से खाता है।",
    marks: 2,
    rubric: [{ key: "गन्ना, केले व हरी पत्तियाँ", marks: "2 अंक" }]
  },
  {
    category: "शब्दों का खेल • अंग और उपमा",
    q: "हाथी के अंगों की तुलना किससे की गई है?<br>१. कान &emsp;&emsp; (क) खंभा<br>२. पाँव &emsp;&emsp; (ख) पर्वत<br>३. देह &emsp;&emsp;&emsp; (ग) सूप",
    ans: "<strong>Model Answer:</strong><br>• १. कान &rarr; <strong>(ग) सूप</strong><br>• २. पाँव &rarr; <strong>(क) खंभा</strong><br>• ३. देह &rarr; <strong>(ख) पर्वत</strong>",
    marks: 2,
    rubric: [{ key: "तीनों उपमाओं का सही मिलान", marks: "2 अंक" }]
  },
  {
    category: "सही या गलत • तथ्य",
    q: "सही या गलत बताओ:<br>(क) हाथी धरती का सबसे बड़ा स्थल-जीव (मैमथ) है।<br>(ख) हाथी अपनी सूँड से पानी पीता है और फव्वारा छोड़ता है।",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>सही।</strong> जमीन पर सबसे बड़ा जीव है।<br>(ख) <strong>सही।</strong> सूँड से पानी भरकर पीता है।",
    marks: 2,
    rubric: [{ key: "(क) सही", marks: "1 अंक" }, { key: "(ख) सही", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • वाक्य निर्माण",
    q: "'हाथी' शब्द से एक सरल वाक्य बनाओ।",
    ans: "<strong>Model Answer:</strong><br><strong>हाथी अपनी लंबी सूँड हिलाते हुए मस्त चाल में चलता है।</strong>",
    marks: 1,
    rubric: [{ key: "सार्थक वाक्य", marks: "1 अंक" }]
  },
  {
    category: "आओ कुछ नया करें • हाथी की चाल",
    q: "हाथी की तरह धीरे-धीरे भारी कदम रखने और सूँड हिलाने का अभिनय करो।",
    ans: "<strong>Model Answer:</strong><br>विद्यार्थी हाथ को सूँड बनाकर लहराते हुए भारी कदमों से चलते हैं।",
    marks: 1,
    rubric: [{ key: "हाथी की चाल का अभिनय", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • छूटे अक्षर",
    q: "शब्द पूरा करो: हा _ थी।",
    ans: "<strong>Model Answer:</strong><br><strong>हाथी</strong>।",
    marks: 1,
    rubric: [{ key: "हाथी", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • सुलेख",
    q: "सुंदर लिखावट में लिखो: [हाथी, हौदा, महावत, अंकुश]।",
    ans: "<strong>Model Answer:</strong><br>विद्यार्थी लिखेंगे: <strong>हाथी, हौदा, महावत, अंकुश</strong>।",
    marks: 1,
    rubric: [{ key: "सुंदर लिखावट", marks: "1 अंक" }]
  }
];

const ch23Questions = [
  {
    category: "कहानी से • चूहे की पूँछें",
    q: "कहानी 'सात पूँछ का चूहा' में चूहे की कितनी पूँछें थीं?",
    ans: "<strong>Model Answer:</strong><br>चूहे की <strong>सात पूँछें</strong> थीं ('एक चूहा था, उस चूहे की सात पूँछें थीं')।",
    marks: 1,
    rubric: [{ key: "सात पूँछें", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • बच्चों का चिढ़ाना",
    q: "सब चूहे और बच्चे उसे क्या कहकर चिढ़ाते थे?",
    ans: "<strong>Model Answer:</strong><br>सब चिढ़ाते थे: <strong>'सात पूँछ का चूहा! सात पूँछ का चूहा!'</strong>",
    marks: 1,
    rubric: [{ key: "सात पूँछ का चूहा कहकर चिढ़ाना", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • नाई के पास जाना",
    q: "तंग आकर चूहा किसके पास गया और उसने क्या कहा?",
    ans: "<strong>Model Answer:</strong><br>चूहा नाई के पास गया और बोला: <strong>'नाई भैया, मेरी एक पूँछ काट दो!'</strong>",
    marks: 2,
    rubric: [{ key: "नाई के पास गया", marks: "1 अंक" }, { key: "एक पूँछ काटने को कहा", marks: "1 अंक" }]
  },
  {
    category: "कहानी से • बार-बार पूँछ कटना",
    q: "जब भी चूहे की एक पूँछ कटती, तो लोग उसे क्या चिढ़ाते?",
    ans: "<strong>Model Answer:</strong><br>लोग अगली संख्या से चिढ़ाते: 'छह पूँछ का चूहा!', फिर 'पाँच पूँछ का चूहा!'... और चूहा रोज एक-एक पूँछ कटवाता गया।",
    marks: 2,
    rubric: [{ key: "छह, पाँच, चार पूँछ का चूहा", marks: "2 अंक" }]
  },
  {
    category: "कहानी से • अंतिम परिणाम",
    q: "अंत में जब नाई ने उसकी आखिरी पूँछ भी काट दी, तब लोग उसे क्या कहकर चिढ़ाने लगे?",
    ans: "<strong>Model Answer:</strong><br>लोग ताली बजाकर चिढ़ाने लगे: <strong>'बिना पूँछ का चूहा! बिना पूँछ का चूहा!'</strong> ('बाँडा चूहा!')।",
    marks: 2,
    rubric: [{ key: "बिना पूँछ का चूहा quote", marks: "2 अंक" }]
  },
  {
    category: "कहानी की सीख • दूसरों की बातों में आना",
    q: "इस कहानी से चूहे की किस गलती का पता चलता है और हमें क्या सीख मिलती है?",
    ans: "<strong>Model Answer:</strong><br>हमें यह सीख मिलती है कि <strong>दूसरों के चिढ़ाने या कहने पर अपनी अनमोल चीज नहीं गँवानी चाहिए</strong>। अपनी समझ से काम लेना चाहिए।",
    marks: 2,
    rubric: [{ key: "दूसरों की बातों में न आने की सीख", marks: "2 अंक" }]
  },
  {
    category: "शब्दों का खेल • उल्टी गिनती",
    q: "चूहे की पूँछों की उल्टी गिनती लिखो:<br>७ &rarr; ६ &rarr; ५ &rarr; _______ &rarr; _______ &rarr; _______ &rarr; _______ &rarr; ०",
    ans: "<strong>Model Answer:</strong><br>७ &rarr; ६ &rarr; ५ &rarr; <strong>४ &rarr; ३ &rarr; २ &rarr; १</strong> &rarr; ० (शून्य)।",
    marks: 2,
    rubric: [{ key: "उल्टी गिनती ४, ३, २, १", marks: "2 अंक" }]
  },
  {
    category: "लिखकर देखिए • रिक्त स्थान पूर्ति",
    q: "खाली स्थान भरो:<br>(क) चूहा अपनी पूँछ कटवाने _______ (नाई / दर्जी) के पास गया।<br>(ख) नाई ने अपनी _______ (कैंची / सुई) से पूँछ काट दी।<br>(ग) अंत में चूहे की _______ (एक भी / सात) पूँछ नहीं बची।",
    ans: "<strong>Model Answer:</strong><br>(क) चूहा अपनी पूँछ कटवाने <strong>नाई</strong> के पास गया।<br>(ख) नाई ने अपनी <strong>कैंची</strong> से पूँछ काट दी।<br>(ग) अंत में चूहे की <strong>एक भी</strong> पूँछ नहीं बची।",
    marks: 3,
    rubric: [{ key: "नाई", marks: "1 अंक" }, { key: "कैंची", marks: "1 अंक" }, { key: "एक भी", marks: "1 अंक" }]
  },
  {
    category: "चित्र और बातचीत • अवलोकन",
    q: "पाठ के चित्र में नाई के हाथ में क्या औजार है?",
    ans: "<strong>Model Answer:</strong><br>नाई के हाथ में बाल/पूँछ काटने वाली <strong>धारदार कैंची</strong> है।",
    marks: 1,
    rubric: [{ key: "कैंची", marks: "1 अंक" }]
  },
  {
    category: "बातचीत के लिए • नाई का काम",
    q: "नाई समाज में क्या महत्वपूर्ण काम करता है?",
    ans: "<strong>Model Answer:</strong><br>नाई लोगों के <strong>बाल काटता है, दाढ़ी बनाता है और स्वच्छता बनाए रखने में मदद करता है</strong>।",
    marks: 2,
    rubric: [{ key: "बाल काटना व संवारना", marks: "2 अंक" }]
  },
  {
    category: "शब्दों का खेल • विलोम शब्द",
    q: "विलोम शब्द लिखो:<br>(क) कटना &rarr; _______<br>(ख) हँसना &rarr; _______",
    ans: "<strong>Model Answer:</strong><br>(क) कटना &rarr; <strong>जुड़ना</strong><br>(ख) हँसना &rarr; <strong>रोना</strong>",
    marks: 2,
    rubric: [{ key: "जुड़ना", marks: "1 अंक" }, { key: "रोना", marks: "1 अंक" }]
  },
  {
    category: "सही या गलत • तथ्य",
    q: "सही या गलत बताओ:<br>(क) कटी हुई पूँछ दोबारा अपने आप निकल आई।<br>(ख) चूहे को अपनी सात पूँछों पर गर्व होना चाहिए था, कटवाना नहीं चाहिए था।",
    ans: "<strong>Model Answer:</strong><br>(क) <strong>गलत।</strong> पूँछ कभी वापस नहीं आई।<br>(ख) <strong>सही।</strong> उसे दूसरों की बातों में नहीं आना चाहिए था।",
    marks: 2,
    rubric: [{ key: "(क) गलत", marks: "1 अंक" }, { key: "(ख) सही", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • वाक्य निर्माण",
    q: "'नाई' शब्द से एक सरल वाक्य बनाओ।",
    ans: "<strong>Model Answer:</strong><br><strong>नाई भैया ने कैंची से बच्चे के सुंदर बाल काटे।</strong>",
    marks: 1,
    rubric: [{ key: "सार्थक वाक्य", marks: "1 अंक" }]
  },
  {
    category: "शब्दों का खेल • छूटे अक्षर",
    q: "शब्द पूरा करो: पूँ _ छ।",
    ans: "<strong>Model Answer:</strong><br><strong>पूँछ</strong>।",
    marks: 1,
    rubric: [{ key: "पूँछ", marks: "1 अंक" }]
  },
  {
    category: "लिखकर देखिए • सुलेख",
    q: "सुंदर लिखावट में लिखो: [चूहा, पूँछ, नाई, कैंची]।",
    ans: "<strong>Model Answer:</strong><br>विद्यार्थी लिखेंगे: <strong>चूहा, पूँछ, नाई, कैंची</strong>।",
    marks: 1,
    rubric: [{ key: "सुंदर लिखावट", marks: "1 अंक" }]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    rimjhimPart2: [
      ch12Questions, ch13Questions, ch14Questions, ch15Questions, ch16Questions,
      ch17Questions, ch18Questions, ch19Questions, ch20Questions, ch21Questions,
      ch22Questions, ch23Questions
    ]
  };
}
