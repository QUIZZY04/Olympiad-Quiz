const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c10h');

// Chapter 30: हरिहर काका
const ch30Html = `<section class="chapter-section" id="ch30" data-book="sanchayan">
  <div class="chapter-header">
    <div class="ch-badge">30</div>
    <div class="chapter-header-info">
      <div class="ch-category">संचयन भाग-2 — पाठ 1</div>
      <h2>हरिहर काका</h2>
      <p>मिथिलेश्वर | मर्मस्पर्शी यथार्थवादी कहानी — पारिवारिक स्वार्थ, धर्म के ठेकेदारों का पाखंड, बुजुर्गों की उपेक्षा और संपत्ति का लोभ | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch30-q1">
    <div class="q-head" onclick="toggleQ('ch30-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">अनपढ़ होते हुए भी हरिहर काका दुनिया की बेहतर समझ कैसे रखते हैं? कहानी के आधार पर स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>हरिहर काका भले ही औपचारिक रूप से पढ़े-लिखे नहीं थे, किंतु जीवन के कड़वे अनुभवों ने उन्हें दुनियादारी और इंसानी फितरत की गहरी समझ दी थी:</p>
          <ul>
            <li>वे भली-भाँति जानते थे कि उनके सगे भाई और ठाकुरबारी के महंत उनके प्रति जो थोड़ा-बहुत आदर या सेवा दिखा रहे हैं, वह उनके प्रति प्रेम के कारण नहीं, बल्कि उनकी 15 बीघे उपजाऊ जमीन के कारण है।</li>
            <li>उन्होंने अपने गाँव में ऐसे कई बुजुर्गों को देखा था जिन्होंने जीते जी अपनी संपत्ति अपने परिजनों के नाम लिख दी थी और बाद में उन्हें कुत्ते की मौत मरना पड़ा था, कोई एक रोटी देने वाला भी नहीं बचा था।</li>
            <li>इसलिए उन्होंने दृढ़ निश्चय किया कि जीते जी वे अपनी जमीन किसी के नाम नहीं लिखेंगे, चाहे भाई मार डालें या महंत जान से खत्म कर दें।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">15 बीघे जमीन के लोभ को पहचानने की क्षमता</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">गाँव के उपेक्षित वृद्धों के दृष्टांत से सीख व दृढ़ निर्णय</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch30-q2">
    <div class="q-head" onclick="toggleQ('ch30-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">हरिहर काका को महंत और अपने भाई एक ही श्रेणी के क्यों लगने लगे?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>शुरू में हरिहर काका को लगता था कि भाई तो स्वार्थी हैं किंतु महंत जी भगवान के सच्चे सेवक हैं। किंतु बाद की घटनाओं ने सिद्ध कर दिया कि दोनों पक्षों में लेशमात्र भी अंतर नहीं था:</p>
          <ul>
            <li><strong>महंत का घिनौना रूप:</strong> महंत ने धर्म की आड़ में काका का अपहरण करवाया, उनके मुँह में कपड़ा ठूँसा, हाथ-पैर बाँधे और बंदूक की नोक पर जबरन सादे कागजों पर अँगूठे के निशान लगवाए।</li>
            <li><strong>भाइयों की क्रूरता:</strong> भाइयों ने भी जब देखा कि काका जमीन नहीं लिख रहे, तो उन्होंने भी घर में काका को मारा-पीटा, जान से मारने की धमकी दी और जबरन अँगूठे लगवाए।</li>
          </ul>
          <p>दोनों का एकमात्र लक्ष्य काका की संपत्ति हड़पना था। रिश्ते और धर्म दोनों ही काका के लिए केवल स्वार्थ की चादर साबित हुए, इसलिए वे दोनों को एक ही थैली के चट्टे-बट्टे और हिंसक भेड़िया मानते हैं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">महंत द्वारा अपहरण व अँगूठा लगवाने की हिंसा</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भाइयों द्वारा मारपीट व जमीन हड़पने की स्वार्थपरता</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch30-q3">
    <div class="q-head" onclick="toggleQ('ch30-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">ठाकुरबारी के प्रति गाँव वालों के मन में अगाध श्रद्धा के क्या कारण थे?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>गाँव वालों का यह दृढ़ और अंधा विश्वास था कि उनके जीवन की हर सफलता और खुशी ठाकुर जी (ठाकुरबारी) की ही कृपा से मिलती है:</p>
          <ul>
            <li>खेतों में अच्छी फसल होना, मुकदमे में जीत, पुत्र का जन्म या बेटी का अच्छा विवाह होना—गाँव वाले इसका श्रेय ठाकुर जी की मन्नत को ही देते थे।</li>
            <li>कृतज्ञता स्वरूप लोग अपनी पहली फसल का हिस्सा, घी, अनाज और जमीन का एक टुकड़ा ठाकुरबारी के नाम दान कर देते थे। इसी अंधविश्वास के कारण ठाकुरबारी एक संपन्न और शक्तिशाली मठ बन गई थी।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">मन्नत पूरी होने व सफलता का श्रेय ठाकुर जी को देने का विश्वास</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">अनाज, घी व जमीन दान देकर ठाकुरबारी को शक्तिशाली बनाने का संदर्भ</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch30-q4">
    <div class="q-head" onclick="toggleQ('ch30-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">गाँव में हरिहर काका के मामले को लेकर कौन-से दो वर्ग बन गए थे और उनके क्या-क्या विचार थे?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>हरिहर काका की 15 बीघे जमीन को लेकर गाँव स्पष्ट रूप से दो विरोधी गुटों में बँट गया था:</p>
          <ul>
            <li><strong>पहला वर्ग (धार्मिक व मठाधीश समर्थक):</strong> इस वर्ग में ठाकुरबारी के महंत के समर्थक, बुजुर्ग और धार्मिक अंधविश्वास में डूबे लोग थे। उनका तर्क था कि हरिहर काका को अपनी सारी जमीन ठाकुरबारी के नाम लिख देनी चाहिए। इससे काका को परलोक में मोक्ष मिलेगा और गाँव का नाम रोशन होगा।</li>
            <li><strong>दूसरा वर्ग (पारिवारिक व प्रगतिशील समर्थक):</strong> इस वर्ग में आधुनिक सोच वाले लोग, किसान और काका के भाइयों के समर्थक थे। उनका मानना था कि जमीन परिवार और भाइयों की पैतृक संपत्ति है। खून का रिश्ता सबसे बड़ा होता है, अतः जमीन परिवार से बाहर ठाकुरबारी के साधुओं को नहीं जानी चाहिए।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">ठाकुरबारी समर्थक वर्ग (मोक्ष, धर्म, दान) का तर्क</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">पारिवारिक समर्थक वर्ग (खून का रिश्ता, पैतृक अधिकार) का तर्क</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch30-q5">
    <div class="q-head" onclick="toggleQ('ch30-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">भाइयों द्वारा हरिहर काका के साथ किए गए अमानवीय व्यवहार का वर्णन कीजिए।</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>भाइयों ने हरिहर काका के साथ रिश्ते की सारी मर्यादाओं को तार-तार कर दिया:</p>
          <ul>
            <li>प्रारंभ में भाइयों की पत्नियों ने काका को बचा-खुचा रूखा-सूखा भोजन दिया और बीमार होने पर पानी पूछने वाला भी कोई नहीं था।</li>
            <li>जब काका ने जमीन लिखने से मना कर दिया, तो भाइयों ने घर के दरवाजे बंद कर उन्हें हथियारों के बल पर घेर लिया।</li>
            <li>उन्होंने काका को बेरहमी से पीटा, उनके मुँह में कपड़ा ठूँसा और जान से मारकर खेत में गाड़ देने की धमकी देकर जबरन सादे कागजों पर अँगूठे के निशान लिए। काका ने किसी तरह मुँह से कपड़ा निकालकर चीख लगाई जिससे पुलिस और ग्रामीण पहुँचे।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">प्रारंभिक उपेक्षा व रूखा-सूखा भोजन देने का विवरण</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">हथियारों के बल पर मारपीट, मुँह में कपड़ा ठूँसना व जबरन अँगूठे लगवाना</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch30-q6">
    <div class="q-head" onclick="toggleQ('ch30-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">महंत जी ने हरिहर काका को अपने जाल में फँसाने के लिए क्या-क्या प्रलोभन और आध्यात्मिक चालें चलीं?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>महंत ने हरिहर काका की कमजोर भावनात्मक स्थिति का लाभ उठाते हुए निम्नलिखित चालें चलीं:</p>
          <ul>
            <li>काका को आदर-सम्मान सहित ठाकुरबारी ले जाकर बढ़िया मालपुआ, खीर और स्वादिष्ट पकवान खिलाए।</li>
            <li>काका को यह समझाया कि संसार नश्वर है और रिश्ते-नाते सब स्वार्थ के हैं। यदि वे अपनी जमीन ठाकुरबारी को दान कर देंगे, तो उन्हें स्वर्ग और मोक्ष मिलेगा तथा साधु-संत उनकी चरण-सेवा करेंगे।</li>
            <li>जब काका इन मीठी बातों में नहीं आए, तो महंत ने अपने गुंडों द्वारा उनका अपहरण करवाकर हिंसा का सहारा लिया।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">स्वादिष्ट भोजन, आदर व स्वर्ग-मोक्ष के प्रलोभन का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">संसार की नश्वरता के आध्यात्मिक पाखंड व बाद में हिंसा का पर्दाफाश</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch30-q7">
    <div class="q-head" onclick="toggleQ('ch30-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">'यदि समाज में न्याय और सुरक्षा की व्यवस्था न हो, तो असहाय वृद्धों का जीवन नर्क बन जाता है।' पाठ के आधार पर इस कथन की पुष्टि कीजिए।</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>पुष्टि:</strong> यह कथन 'हरिहर काका' कहानी के यथार्थ पर पूरी तरह खरा उतरता है:</p>
          <ul>
            <li>हरिहर काका के पास संपत्ति होने के बावजूद वे अपने ही घर में बंधक और प्रताड़ित हो गए। जिन सगे भाइयों और धार्मिक गुरु पर उन्हें विश्वास होना चाहिए था, वे ही उनके जान के प्यासे बन गए।</li>
            <li>गाँव का समाज और पुलिस तंत्र भी केवल मूकदर्शक बना रहा या रिश्वतखोरी में लिप्त रहा। पुलिस के सिपाही काका की सुरक्षा के नाम पर उनकी ही कमाई पर मौज उड़ाते रहे।</li>
            <li>समाज में वृद्धों की सुरक्षा के लिए कोई सुदृढ़ नैतिक या विधिक संरक्षण न होने के कारण काका जीवित रहते हुए भी एक जीते-जागते मुर्दे जैसी स्थिति में पहुँच गए।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पारिवारिक व सामाजिक सुरक्षा तंत्र की विफलता का विश्लेषण</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">पुलिस-प्रशासन की शिथिलता व काका के नर्कतुल्य जीवन का विवेचन</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch30-q8">
    <div class="q-head" onclick="toggleQ('ch30-q8')">
      <div class="q-num">प्रश्न 8</div>
      <div class="q-text">कहानी के अंत में हरिहर काका की मानसिक व शारीरिक स्थिति का चित्रण कीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कहानी के अंत में हरिहर काका पूरी तरह मौन और निस्तब्ध हो चुके हैं:</p>
          <p>वे अपने परिवार से अलग एक दालान में रहते हैं। उनकी सुरक्षा के लिए चार पुलिस के सिपाही तैनात हैं जो काका के पैसों पर खूब दावतें उड़ाते हैं। काका ने एक नौकर रख लिया है जो उनके लिए खाना बना देता है। काका दिनभर खामोश बैठकर आकाश की ओर शून्य दृष्टि से ताकते रहते हैं। अपनों के क्रूर विश्वासघात और छल ने उनकी वाणी और जीने की इच्छा को पूरी तरह छीन लिया है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शून्य में ताकना व मौन रहने की मानसिक स्थिति</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">पुलिस सुरक्षा, नौकर द्वारा भोजन व अलगाव का चित्रण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>वृद्धजन अधिकार एवं सामाजिक सुरक्षा (Elderly Rights & Social Justice):</strong> वर्तमान भारतीय समाज में माता-पिता और वरिष्ठ नागरिकों के भरण-पोषण तथा कल्याण अधिनियम (Maintenance and Welfare of Parents and Senior Citizens Act) के आलोक में हरिहर काका की स्थिति की समीक्षा कीजिए। वृद्धों के अधिकारों की रक्षा हेतु समाज और कानून क्या कदम उठा सकते हैं?</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>समीक्षा:</strong> 'हरिहर काका' की कथा वरिष्ठ नागरिकों की सुरक्षा के अभाव की चरम त्रासदी है। आज भारतीय कानून के तहत यदि कोई संतान या रिश्तेदार संपत्ति लेने के बाद बुजुर्गों की उपेक्षा या प्रताड़ना करता है, तो संपत्ति का हस्तांतरण निरस्त किया जा सकता है और कानूनी दंड का प्रावधान है।</p>
        <p><strong>आवश्यक कदम:</strong> वृद्धों के लिए स्थानीय स्तर पर वरिष्ठ नागरिक हेल्पलाइन, अनिवार्य सामाजिक सुरक्षा ऑडिट और विधिक सहायता केंद्र होने चाहिए ताकि किसी भी हरिहर काका को जीते-जी अपनी ही संपत्ति के कारण बंधक और प्रताड़ित न होना पड़े।</p>
      </div>
    </div>
  </div>
</section>`;

// Chapter 31: सपनों के-से दिन
const ch31Html = `<section class="chapter-section" id="ch31" data-book="sanchayan">
  <div class="chapter-header">
    <div class="ch-badge">31</div>
    <div class="chapter-header-info">
      <div class="ch-category">संचयन भाग-2 — पाठ 2</div>
      <h2>सपनों के-से दिन</h2>
      <p>गुरदयाल सिंह | आत्मकथात्मक संस्मरण — बचपन की खेलकूद, स्कूल का खौफ, पीटी मास्टर प्रीतम चंद, हेडमास्टर शर्मा जी और बाल-सुलभ स्मृतियाँ | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch31-q1">
    <div class="q-head" onclick="toggleQ('ch31-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">कोई भी भाषा आपसी व्यवहार में बाधा नहीं बनती—पाठ के किस अंश से यह सिद्ध होता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक के बचपन के खेल-साथी विभिन्न पृष्ठभूमि के थे। उनमें से कई बच्चे राजस्थान या हरियाणा से व्यापार के सिलसिले में आए परिवारों के थे, जो अपनी मारवाड़ी या हरियाणवी बोली बोलते थे।</p>
          <p>यद्यपि बच्चे एक-दूसरे की पूरी बोली या शब्दावली नहीं समझ पाते थे, फिर भी खेलते समय उनका व्यवहार, हँसना-कूदना, लड़ना और एक-दूसरे के आँसू पोंछना सब एक समान था। खेल के मैदान की स्वाभाविक संवेदना और बाल-मनोविज्ञान ने भाषा की किसी भी दीवार को बाधा नहीं बनने दिया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">विभिन्न राज्यों (राजस्थान/हरियाणा) के बच्चों का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">खेल की सर्वव्यापी भाषा व बाल-सुलभ आत्मीयता का निरूपण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch31-q2">
    <div class="q-head" onclick="toggleQ('ch31-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">पीटी मास्टर प्रीतम चंद की छवि कैसी थी और हेडमास्टर मदन मोहन शर्मा जी उनके विपरीत कैसे थे?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>दोनों शिक्षकों के व्यक्तित्व में गहरा विरोधाभास था:</p>
          <ul>
            <li><strong>पीटी मास्टर प्रीतम चंद:</strong> दुबले-पतले, ठिगने कद और चेचक के दागों वाले चेहरे के थे। वे अत्यंत क्रूर, कठोर और अनुशासनप्रिय थे। वे बच्चों को बिना कारण बुरी तरह पीटते थे, उनकी खाल खींच लेते थे और जरा-सी गलती पर मुर्गा बना देते थे। बच्चे उनसे थर-थर काँपते थे।</li>
            <li><strong>हेडमास्टर मदन मोहन शर्मा जी:</strong> इसके सर्वथा विपरीत शर्मा जी अत्यंत शांत, सौम्य और दयालु स्वभाव के थे। उन्होंने कभी किसी बच्चे को थप्पड़ तक नहीं मारा था। यदि कोई बच्चा गलती करता, तो वे बड़े प्यार से समझाते थे। सभी बच्चे उनका गहरा सम्मान करते थे।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पीटी मास्टर की क्रूरता, कठोर दंड व भयभीत छवि का चित्रण</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">हेडमास्टर शर्मा जी की सौम्यता, दयालुता व आदर का उल्लेख</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch31-q3">
    <div class="q-head" onclick="toggleQ('ch31-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">पीटी साहब को निलंबित (सस्पेंड) क्यों कर दिया गया था?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>एक दिन चौथी कक्षा में फारसी पढ़ाते समय जब बच्चे शब्द-रूप (याद किया हुआ पाठ) ठीक से नहीं सुना सके, तो प्रीतम चंद ने पूरी कक्षा को घुटने मोड़कर, पीठ झुकाकर और कानों को हाथों से पकड़वाकर 'मुर्गा' बना दिया।</p>
          <p>बच्चे दर्द से काँप रहे थे। उसी समय हेडमास्टर शर्मा जी वहाँ से गुज़रे। बच्चों की ऐसी अमानवीय और बर्बर प्रताड़ना देखकर शर्मा जी अत्यंत क्रोधित हो गए। उन्होंने तुरंत "व्हाट आर यू डूइंग? इट इज़ नॉट अलाउड!" कहकर बच्चों को खड़ा किया और रियासत के शिक्षा विभाग को रिपोर्ट भेजकर प्रीतम चंद को तत्काल निलंबित (सस्पेंड) करवा दिया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">फारसी न सुनाने पर बच्चों को 'मुर्गा' बनाने की क्रूरता</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">हेडमास्टर शर्मा जी का रोष व निलंबन का आदेश</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch31-q4">
    <div class="q-head" onclick="toggleQ('ch31-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">निलंबन के दौरान प्रीतम चंद को तोतों को बादाम खिलाते देखकर बच्चों को क्या ताज्जुब हुआ?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>निलंबन के बाद प्रीतम चंद अपने कमरे में मजे से रहते थे और उन्होंने पिंजरे में दो तोते पाल रखे थे। जब बच्चे हेडमास्टर साहब की चिट्ठी लेकर उनके घर गए, तो उन्होंने देखा कि प्रीतम चंद बड़े प्यार से तोतों से मीठी बातें कर रहे हैं और उन्हें अपने हाथों से छिले हुए बादाम खिला रहे हैं।</p>
          <p>यह देखकर बच्चों को भारी आश्चर्य (ताज्जुब) हुआ कि जो व्यक्ति स्कूल में इंसान के बच्चों को बेदर्दी से पीटता था और जिसकी चमड़ी पत्थर जैसी कठोर लगती थी, वह पक्षियों के प्रति इतना कोमल और स्नेही कैसे हो सकता है!</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">तोतों से मीठी बातें करने व बादाम खिलाने का प्रसंग</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">क्रूर शिक्षक के कोमल रूप पर बाल-सुलभ विस्मय का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch31-q5">
    <div class="q-head" onclick="toggleQ('ch31-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">लेखक के बचपन में स्कूल जाने की क्या परिस्थितियाँ थीं और बच्चे स्कूल से क्यों डरते थे?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक के बचपन में अधिकांश माता-पिता अनपढ़ थे और वे बच्चों की पढ़ाई को कोई खास महत्व नहीं देते थे। उनका मानना था कि दुकानदारी या खेती के लिए केवल थोड़ा-बहुत मुनीमी हिसाब आना ही काफी है।</p>
          <p>बच्चे स्कूल जाने से इसलिए डरते थे क्योंकि उस समय स्कूलों में शिक्षकों द्वारा छात्रों को बेंत, थप्पड़ों और मुर्गा बनाने जैसी भयानक शारीरिक यातनाएँ दी जाती थीं। स्कूल जाना बच्चों के लिए किसी कारागार या प्रताड़ना केंद्र जैसा भयानक अनुभव होता था।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">माता-पिता की अनपढ़ता व शिक्षा के प्रति उदासीनता</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">शिक्षकों के कठोर शारीरिक दंड व स्कूल के खौफ का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch31-q6">
    <div class="q-head" onclick="toggleQ('ch31-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">नई श्रेणी (कक्षा) में जाने पर लेखक को पुरानी किताबों से क्यों पढ़ना पड़ता था और उसके मन में क्या भावनाएँ आती थीं?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक का परिवार अत्यंत निर्धन था। उनके परिवार के पास नई किताबें खरीदने के पैसे नहीं होते थे। हेडमास्टर मदन मोहन शर्मा जी किसी अमीर परिवार के लड़के की पिछली कक्षा की पुरानी किताबें लेखक को दिलवा देते थे।</p>
          <p>यद्यपि नई कक्षा में जाने की थोड़ी खुशी होती थी, किंतु पुरानी किताबों की बासी गंध और मुड़े हुए पन्ने देखकर लेखक का मन उदास हो जाता था। उसे लगता था कि अगली कक्षा में पढ़ाई और कठिन हो जाएगी और मास्टरों की मार भी दोगुनी हो जाएगी, जिससे उसका उत्साह समाप्त हो जाता था।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पारिवारिक निर्धनता व हेडमास्टर द्वारा पुरानी पुस्तकें दिलाने का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">पुरानी किताबों की गंध, उदासी व मार के भय की बाल-मनोवैज्ञानिक व्याख्या</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch31-q7">
    <div class="q-head" onclick="toggleQ('ch31-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">द्वितीय विश्व युद्ध के समय फौज में भर्ती के लिए नौजवानों को कैसे आकर्षित किया जाता था?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>द्वितीय विश्व युद्ध के समय ब्रिटिश सेना के भर्ती अधिकारी (नायब) गाँवों में नौटंकी और बाजे-गाजे के साथ आते थे।</p>
          <p>वे नौजवानों को सेना के सुख-सुविधाओं का प्रलोभन देने वाले गीत गाकर सुनाते थे, जैसे: <em>"भर्ती हो जा रे नौजवान... इत्थे मिले फटे-पुराने, उत्थे मिले बूट-सूट!"</em> वे बताते थे कि फौज में शानदार वर्दी, चमचमाते बूट और खूब अच्छा खाना मिलता है। इस आकर्षण में आकर कई ग्रामीण युवक फौज में भर्ती हो जाते थे।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बाजे-गाजे व नौटंकी दल द्वारा प्रचार का संदर्भ</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">वर्दी, जूते व भोजन के प्रलोभन भरे गीतों का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>शिक्षा मनोविज्ञान एवं बाल-अधिकार विश्लेषण (Child Rights & Pedagogy):</strong> 'सपनों के-से दिन' में पीटी मास्टर प्रीतम चंद की शारीरिक दंड प्रणाली और हेडमास्टर मदन मोहन शर्मा के संवेदनशील दृष्टिकोण की तुलना कीजिए। शिक्षा का अधिकार अधिनियम (RTE Act 2009) में शारीरिक दंड (Corporal Punishment) के पूर्ण प्रतिबंध की आवश्यकता पर प्रकाश डालिए।</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>तुलनात्मक विश्लेषण:</strong> पीटी मास्टर की क्रूर दंड प्रणाली बच्चों में भय, हीनभावना और स्कूल से पलायन की प्रवृत्ति पैदा करती थी। इसके विपरीत हेडमास्टर शर्मा जी का स्नेहपूर्ण और उपचारात्मक व्यवहार बच्चों में आदर और सीखने की ललक जगाता था।</p>
        <p><strong>RTE Act 2009 का औचित्य:</strong> आधुनिक बाल-मनोविज्ञान यह प्रमाणित करता है कि भय और हिंसा से अनुशासन नहीं, बल्कि मानसिक विकार और विद्रोह पैदा होता है। RTE अधिनियम के तहत शारीरिक व मानसिक दंड पर पूर्ण प्रतिबंध इसलिए अनिवार्य है ताकि विद्यालय भयमुक्त, समावेशी और आनंददायी अधिगम स्थल बन सकें।</p>
      </div>
    </div>
  </div>
</section>`;

// Chapter 32: टोपी शुक्ला
const ch32Html = `<section class="chapter-section" id="ch32" data-book="sanchayan">
  <div class="chapter-header">
    <div class="ch-badge">32</div>
    <div class="chapter-header-info">
      <div class="ch-category">संचयन भाग-2 — पाठ 3</div>
      <h2>टोपी शुक्ला</h2>
      <p>राही मासूम रज़ा | संवेदनात्मक उपन्यास अंश — सांप्रदायिक सीमाओं से परे बाल-मित्रता, भावनात्मक अकेलापन, भाषा के संस्कार और दादी का वात्सल्य | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch32-q1">
    <div class="q-head" onclick="toggleQ('ch32-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">इफ़्फ़न और टोपी शुक्ला की मित्रता किन बातों पर आधारित थी? दोनों के पारिवारिक परिवेश में क्या भिन्नता थी?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>मित्रता का आधार:</strong> इफ़्फ़न और टोपी शुक्ला की मित्रता धर्म, जाति या भाषा पर आधारित नहीं थी, बल्कि यह दो कोमल बाल-हृदयों के <strong>भावनात्मक अकेलेपन और सच्चे प्यार की भूख</strong> पर आधारित थी। दोनों के बीच एक अटूट संवेगात्मक रिश्ता था।</p>
          <p><strong>पारिवारिक परिवेश में भिन्नता:</strong></p>
          <ul>
            <li><strong>टोपी का परिवार:</strong> एक कट्टर हिंदू ब्राह्मण परिवार था, जहाँ पूजा-पाठ, छूआछूत और कठोर अनुशासन का कड़ाई से पालन होता था। घर में टोपी की भावनाओं को समझने वाला कोई नहीं था।</li>
            <li><strong>इफ़्फ़न का परिवार:</strong> एक मुस्लिम जमींदार परिवार था। इफ़्फ़न के पिता कलेक्टर थे। घर में उर्दू-फारसी का माहौल था। इफ़्फ़न की दादी पूरब (मौलवी परिवार) की थीं जो टोपी को सगी दादी से भी अधिक वात्सल्य देती थीं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">भावनात्मक अकेलेपन व प्रेम पर आधारित मित्रता का उल्लेख</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">हिंदू ब्राह्मण व मुस्लिम कलेक्टर परिवार के परिवेश की तुलना</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch32-q2">
    <div class="q-head" onclick="toggleQ('ch32-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">टोपी ने इफ़्फ़न की दादी के देहांत पर ऐसा क्यों कहा कि "काश! तेरी दादी की जगह मेरी दादी मर गई होती"?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>टोपी का यह कथन किसी दुर्भावना के कारण नहीं, बल्कि उसके अत्यधिक दुख और बाल-सुलभ भावुकता का परिणाम था:</p>
          <ul>
            <li>टोपी की अपनी सगी दादी अत्यंत कठोर, कर्कश और बात-बात पर डाँटने वाली थीं। वे टोपी को कभी प्यार से पास नहीं बिठाती थीं।</li>
            <li>इसके विपरीत इफ़्फ़न की दादी टोपी को अपनी संतानों की तरह प्यार करती थीं, उसे मीठी पूरबी बोली में कहानियाँ सुनाती थीं और उसके मन की बात समझती थीं।</li>
            <li>इफ़्फ़न की दादी के जाने से टोपी का संसार सूना हो गया था। इसलिए उसने रोते हुए कहा कि काश उसकी अपनी कठोर दादी चली गई होती और प्यार देने वाली इफ़्फ़न की दादी जीवित रहती।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">अपनी सगी दादी की कर्कशता व उपेक्षा का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">इफ़्फ़न की दादी के वात्सल्य, कहानियों व गहरे प्रेम का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch32-q3">
    <div class="q-head" onclick="toggleQ('ch32-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">इफ़्फ़न की दादी अपने पीहर (मायके) को क्यों याद करती थीं और वे हवेली में खुश क्यों नहीं थीं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>इफ़्फ़न की दादी पूरब के एक सामान्य जमींदार परिवार की बेटी थीं, जहाँ खूब खुलापन, देशी खाना (दही-भात, आम) और पूरबी बोली की मिठास थी।</p>
          <p>उनका विवाह लखनऊ के एक मौलवी खानदान में हुआ जहाँ कठोर पर्दा-प्रथा और औपचारिकता का बोलबाला था। वहाँ पूरबी बोली बोलने और मनपसंद खाने पर पाबंदी थी। उस बड़ी हवेली में उनका दम घुटता था, इसलिए वे जीवनभर अपने मायके की उन्मुक्तता और सहज संस्कृति को याद कर तड़पती रहीं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">मायके के खुलेपन व पूरबी बोली-संस्कृति का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">ससुराल की कठोर औपचारिकता व दमघोंटू माहौल का कारण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch32-q4">
    <div class="q-head" onclick="toggleQ('ch32-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">टोपी के घर में 'अम्मी' और 'बावर्चीखाना' शब्द बोलने पर क्या बखेड़ा खड़ा हुआ?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>एक दिन भोजन करते समय टोपी ने अपनी माँ से सहज ही कह दिया—"अम्मी, ज़रा बैंगन का भर्ता देना।"</p>
          <p>कट्टर ब्राह्मण परिवार में 'अम्मी' और 'बावर्चीखाना' जैसे उर्दू शब्दों को सुनते ही मानो प्रलय आ गई। उसकी दादी सुभद्रा देवी ने थाली फेंक दी और घर अपवित्र होने का शोर मचा दिया। उसकी माँ को डाँटा गया और टोपी की जमकर पिटाई की गई। उससे पूछा गया कि उसने यह 'मुसलमानों की भाषा' कहाँ से सीखी। इस घटना से घर में भीषण विवाद खड़ा हो गया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">'अम्मी' शब्द बोलते ही थाली फेंकने व धर्म भ्रष्ट होने का प्रसंग</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">टोपी की पिटाई व भाषा के प्रति सांप्रदायिक संकीर्णता का प्रकटीकरण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch32-q5">
    <div class="q-head" onclick="toggleQ('ch32-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">नौवीं कक्षा में दो बार फेल होने पर टोपी को किन-किन मानसिक यातनाओं और उपहास का सामना करना पड़ा?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>नौवीं कक्षा में दो बार फेल होने पर टोपी को घर और स्कूल दोनों जगह भीषण मानसिक प्रताड़ना झेलनी पड़ी:</p>
          <ul>
            <li><strong>घर में उपहास:</strong> घर में भाई और माता-पिता उसे ताने मारते थे। जब भी वह पढ़ने बैठता, घर के सदस्य उसे नौकरों की तरह बाज़ार से सौदा लाने भेज देते और कहते—"तू कौन-सा लाट साहब बनने जा रहा है, फेल तो होना ही है।"</li>
            <li><strong>स्कूल में अकेलापन:</strong> उसके पुराने सहपाठी दसवीं कक्षा में चले गए थे और नए जूनियर लड़के उसका मज़ाक उड़ाते थे।</li>
            <li><strong>अध्यापकों का व्यंग्य:</strong> अध्यापक कक्षा में नए लड़कों से कहते—"देखो, बलभद्र (टोपी) भाई से पूछ लो, ये तो दो साल से इसी दर्जे में रिसर्च कर रहे हैं।" इस तीखे उपहास ने टोपी के आत्मसम्मान को छलनी कर दिया था।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">घर में घरेलू नौकर जैसा बर्ताव व तानों का उल्लेख</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">स्कूल में अध्यापकों के व्यंग्य व सहपाठियों द्वारा उपहास की मानसिक पीड़ा</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch32-q6">
    <div class="q-head" onclick="toggleQ('ch32-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">तीसरे वर्ष जब टोपी परीक्षा दे रहा था, तो उसने किस दृढ़ संकल्प से पढ़ाई की और उसे किन घरेलू कठिनाइयों का सामना करना पड़ा?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>तीसरे वर्ष टोपी ने अपना आत्मसम्मान बचाने के लिए किसी भी कीमत पर पास होने का दृढ़ संकल्प किया। किंतु परिवार ने उसे पढ़ने का अवसर नहीं दिया:</p>
          <p>उसकी दादी, माँ और भाई लगातार उसे बाज़ार के छोटे-मोटे कामों में उलझाए रखते थे। परीक्षा के दिनों में भी उसे दुकानदारी और सौदा लाने भेजा जाता था। फिर भी टोपी ने रात-रात जागकर कठोर परिश्रम किया और तमाम बाधाओं के बावजूद तृतीय श्रेणी (थर्ड डिवीजन) में पास होकर सबको स्तब्ध कर दिया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">दृढ़ संकल्प व आत्मसम्मान की रक्षा की भावना</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">परिवार द्वारा काम में उलझाना व तृतीय श्रेणी में उत्तीर्ण होने का संघर्ष</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch32-q7">
    <div class="q-head" onclick="toggleQ('ch32-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">इफ़्फ़न के पिता के तबादले के बाद नए कलेक्टर के बच्चों के साथ टोपी का क्या अनुभव रहा?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>इफ़्फ़न के तबादले के बाद उस सरकारी बंगले में एक नए कलेक्टर साहब आए। टोपी पुरानी यादों के वशीभूत होकर उस कोठी में गया ताकि नए कलेक्टर के बच्चों से मित्रता कर सके।</p>
          <p>किंतु नए कलेक्टर के बच्चे अत्यंत घमंडी और अँग्रेजीदां थे। उन्होंने टोपी को 'देहाती और गंदा लड़का' समझकर दुत्कारा और अपने पालतू शिकारी कुत्ते को उसके पीछे छोड़ दिया। कुत्ते ने टोपी के पेट में काट लिया। इस अपमान और चोट के बाद टोपी ने प्रण किया कि वह कभी किसी ऐसे लड़के से दोस्ती नहीं करेगा जिसके पिता का तबादला होता हो।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">नए बच्चों का घमंड व कुत्ता पीछे छोड़ने की घटना</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">टोपी का अपमान व तबादले वाले लड़कों से दोस्ती न करने का प्रण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch32-q8">
    <div class="q-head" onclick="toggleQ('ch32-q8')">
      <div class="q-num">प्रश्न 8</div>
      <div class="q-text">'टोपी शुक्ला' कहानी सांप्रदायिक सौहार्द और बाल-मनोविज्ञान का अद्वितीय आख्यान है—इस कथन की समीक्षा कीजिए।</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>समीक्षा:</strong> यह कथन राही मासूम रज़ा की इस कालजयी कृति का सर्वोत्तम मूल्यांकन है:</p>
          <ul>
            <li><strong>सांप्रदायिक सौहार्द:</strong> टोपी (हिंदू ब्राह्मण) और इफ़्फ़न (मुस्लिम) की मित्रता यह सिद्ध करती है कि धर्म और भाषा इंसानों को बाँटने की कृत्रिम दीवारें हैं। टोपी को अपनी सगी दादी से अधिक प्रेम इफ़्फ़न की मुस्लिम दादी से मिलता है, जो मानवीय संवेदनाओं की सांप्रदायिकता पर सबसे बड़ी विजय है।</li>
            <li><strong>बाल-मनोविज्ञान:</strong> कहानी बच्चों के संवेगात्मक अकेलेपन, प्यार की भूख, बड़ों के अहंकार द्वारा बच्चों के कोमल मन पर लगने वाले आघातों और शिक्षा प्रणाली में फेल होने पर मिलने वाली प्रताड़ना का अत्यंत प्रामाणिक और मर्मस्पर्शी चित्रण करती है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">हिंदू-मुस्लिम सीमाओं से परे मानवीय प्रेम व सौहार्द का निरूपण</span><span class="marking-marks">2 अंक</span></div>
          <div class="marking-row"><span class="marking-key">बाल-मनोविज्ञान (अकेलापन, प्यार की चाह, परीक्षा का दबाव) का विश्लेषण</span><span class="marking-marks">2 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Questions (CBQs) -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Board Competency-Based Question (योग्यता आधारित प्रश्न)</div>
    <div class="q-text"><strong>भाषा, संस्कृति एवं सामाजिक समावेशिता (Linguistic Pluralism & Inclusivity):</strong> 'टोपी शुक्ला' में भाषा को धर्म से जोड़कर देखने की संकीर्ण मानसिकता पर चोट की गई है। क्या भाषा का कोई धर्म होता है? गंगा-जमुनी तहज़ीब और भारतीय भाषाई बहुलता के संदर्भ में इस पर अपने विचार लिखिए।</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">विशेषज्ञ उत्तर व विश्लेषणात्मक दृष्टिकोण</div>
      <div class="answer-text">
        <p><strong>विचार:</strong> भाषा का कोई धर्म नहीं होता, भाषा केवल अभिव्यक्ति और मानवीय संवेदनाओं का माध्यम होती है:</p>
        <ul>
          <li>हिंदी और उर्दू भारत की साझी गंगा-जमुनी संस्कृति की दो धाराएँ हैं। जब टोपी 'अम्मी' बोलता है, तो उसमें मातृ-प्रेम की अभिव्यक्ति होती है, कोई सांप्रदायिक षड्यंत्र नहीं।</li>
          <li>भाषा को धार्मिक चश्मे से देखना अज्ञानता और संकीर्णता है। भारत की भाषाई विविधता और परस्पर शब्दों का आदान-प्रदान ही हमारी राष्ट्रीय शक्ति और सांस्कृतिक सौहार्द की पहचान है।</li>
        </ul>
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(dir, 'ch30.html'), ch30Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch31.html'), ch31Html, 'utf8');
fs.writeFileSync(path.join(dir, 'ch32.html'), ch32Html, 'utf8');

console.log('Successfully enriched Batch 6 (Ch 30 to Ch 32 - Sanchayan) to 100% NCERT textbook coverage!');
