const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c10h');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// CHAPTER 1: नेताजी का चश्मा (स्वयं प्रकाश)
const ch1 = `<section class="chapter-section" id="ch1" data-book="kshitij-gadh">
  <div class="chapter-header">
    <div class="ch-badge">1</div>
    <div class="chapter-header-info">
      <div class="ch-category">क्षितिज भाग-2 (गद्य खंड) — पाठ 1</div>
      <h2>नेताजी का चश्मा</h2>
      <p>स्वयं प्रकाश | कहानी — देशभक्ति, नागरिक कर्तव्य और कैप्टन चश्मेवाले का राष्ट्रप्रेम | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch1-q1">
    <div class="q-head" onclick="toggleQ('ch1-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">सेनानी न होते हुए भी चश्मेवाले को लोग 'कैप्टन' क्यों कहते थे?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>चश्मेवाला न तो कोई फौजी था और न ही सुभाष चंद्र बोस की 'आज़ाद हिंद फ़ौज' का भूतपूर्व सिपाही। फिर भी कस्बे के लोग उसे आदर और व्यंग्य के मिले-जुले भाव से 'कैप्टन' कहते थे, जिसके प्रमुख कारण निम्नलिखित हैं:</p>
          <ul>
            <li><strong>प्रगाढ़ देशभक्ति व राष्ट्रप्रेम:</strong> चश्मेवाले के हृदय में देश के शहीदों और स्वतंत्रता सेनानियों के प्रति अपार श्रद्धा थी। नेताजी की बिना चश्मे वाली अधूरी मूर्ति उसे कचोटती थी।</li>
            <li><strong>सक्रिय नागरिक निष्ठा:</strong> वह अत्यंत निर्धन और शारीरिक रूप से अपंग (लँगड़ा) फेरीवाला था, फिर भी अपने सीमित संसाधनों में से नेताजी की मूर्ति पर अपनी ओर से नियमित चश्मा लगाता था।</li>
            <li><strong>सेनानी जैसी मानसिक भावना:</strong> सेनानी की वर्दी न पहनते हुए भी उसके विचार व समर्पण एक सच्चे सिपाही जैसे थे, इसलिए कस्बे वाले उसे 'कैप्टन' कहकर पुकारते थे।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">स्वतंत्रता सेनानियों व नेताजी के प्रति अगाध श्रद्धा का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">गरीबी व अपंगता के बावजूद नियमित चश्मा लगाने की निष्ठा</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सटीक भाषा एवं शब्द-संयोजन</span><span class="marking-marks">0.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch1-q2">
    <div class="q-head" onclick="toggleQ('ch1-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">हालदार साहब ने ड्राइवर को पहले चौराहे पर गाड़ी रोकने के लिए मना किया था, लेकिन बाद में तुरंत रोकने को कहा— (क) हालदार साहब पहले मायूस क्यों हो गए थे? (ख) मूर्ति पर सरकंडे का चश्मा क्या उम्मीद जगाता है? (ग) हालदार साहब इतनी-सी बात पर भावुक क्यों हो उठे?</div>
      <div class="q-marks">5 अंक (100-120 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>(क) हालदार साहब की मायूसी का कारण:</strong> हालदार साहब को पता चला था कि देशभक्त कैप्टन चश्मेवाले की मृत्यु हो चुकी है। वे मायूस थे कि अब कस्बे के चौराहे पर नेताजी की मूर्ति तो होगी, किंतु उसकी आँखों पर चश्मा लगाने वाला कोई नहीं होगा, क्योंकि मास्टर जी बनाना भूल गए और कैप्टन अब रहा नहीं।</p>
          <p><strong>(ख) सरकंडे के चश्मे से जागने वाली उम्मीद:</strong> सरकंडा घास की तीली से बना एक छोटा-सा खिलौना चश्मा था, जिसे प्रायः छोटे बच्चे खेल-खेल में बनाते हैं। यह चश्मा इस पावन सत्य को उजागर करता है कि देशभक्ति किसी एक व्यक्ति तक सीमित नहीं है, बल्कि देश की नई पीढ़ी (बच्चों) के नन्हें दिलों में भी राष्ट्रप्रेम और शहीदों के प्रति सम्मान जीवित है। देश का भविष्य सुरक्षित हाथों में है।</p>
          <p><strong>(ग) हालदार साहब के भावुक होने का कारण:</strong> हालदार साहब ने जब देखा कि साधनहीन बच्चों ने अपनी बाल-सुलभ भावना से नेताजी की आँखों पर सरकंडे का चश्मा पहना रखा है, तो उनकी निराशा पल भर में आशा में बदल गई। इस पवित्र राष्ट्रभाव को देखकर उनकी आँखें भर आईं और वे श्रद्धा से अभिभूत हो उठे।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">भाग (क): कैप्टन की मृत्यु व मूर्ति के चश्माविहीन होने की चिंता</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भाग (ख): भावी पीढ़ी में राष्ट्रप्रेम व देश के सुरक्षित भविष्य की आशा</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भाग (ग): बच्चों की निष्ठा व भावुक संवेदनशीलता का प्रभाव</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch1-q3">
    <div class="q-head" onclick="toggleQ('ch1-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">आशय स्पष्ट कीजिए— "बार-बार सोचते, क्या होगा उस कौम का जो अपने देश की खातिर घर-गृहस्थी-जवानी-जिंदगी सब कुछ होम कर देने वालों पर भी हँसती है और अपने लिए बिकने के मौके ढूँढ़ती है?"</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>भावार्थ / आशय:</strong> इस पंक्ति के माध्यम से लेखक ने समाज में बढ़ती स्वार्थपरता, संवेदनहीनता और देशभक्ति के घटते सम्मान पर गहरा व्यंग्य व क्षोभ प्रकट किया है:</p>
          <ul>
            <li>जिन अमर बलिदानियों ने देश की स्वतंत्रता और मान-मर्यादा के लिए अपना सर्वस्व (परिवार, यौवन और जीवन) न्योछावर कर दिया, आज का स्वार्थी समाज उनका आदर करने के बजाय उनका उपहास उड़ाता है (जैसे पानवाले द्वारा कैप्टन को 'पागल' कहना)।</li>
            <li>जो जाति या राष्ट्र अपने शहीदों और सच्चे देशभक्तों का सम्मान नहीं करता, बल्कि निजी लाभ के लिए अपने सिद्धांतों और जमीर को बेचने को तत्पर रहता है, उसका पतन निश्चित है। ऐसी कौम कभी स्वाभिमानी और सुरक्षित नहीं रह सकती।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शहीदों के त्याग के प्रति समाज के उपहास व संवेदनहीनता पर प्रहार</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">स्वार्थपरक आचरण व जाति के भावी पतन की चेतावनी</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch1-q4">
    <div class="q-head" onclick="toggleQ('ch1-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">पानवाले का एक रेखाचित्र प्रस्तुत कीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कहानी में पानवाले का चरित्र अत्यंत सजीव, यथार्थ और रोचक ढंग से चित्रित किया गया है:</p>
          <ul>
            <li><strong>शारीरिक स्वरूप:</strong> पानवाला एक काला, मोटा और खुशमिज़ाज व्यक्ति था। उसके मुँह में हमेशा पान ठुँसा रहता था, जिसके कारण उसकी बत्तीसी लाल-काली हो गई थी। जब वह हँसता था, तो उसकी भारी तोंद थिरकती थी।</li>
            <li><strong>स्वभाव:</strong> वह बातूनी, मज़ाकिया और व्यंग्य करने में माहिर था। कस्बे की हर गतिविधि और गपशप की उसे पूरी जानकारी रहती थी।</li>
            <li><strong>छिपी संवेदनशीलता:</strong> ऊपरी तौर पर भले ही उसने कैप्टन को 'पागल' कहकर उसका मज़ाक उड़ाया था, परंतु अंततः कैप्टन की मृत्यु पर वह भी उदास हो गया और आँखें पोंछते हुए भावुक हो उठा, जिससे सिद्ध होता है कि वह भीतर से सहृदय था।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शारीरिक बनावट व बोलचाल की शैली का यथार्थ चित्रण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">व्यवहार के अंतर्विरोध (मज़ाक व अंतिम संवेदनशीलता) का अंकन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch1-q5">
    <div class="q-head" onclick="toggleQ('ch1-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">"वो लँगड़ा क्या जाएगा फ़ौज में। पागल है पागल!"— कैप्टन के प्रति पानवाले की इस टिप्पणी पर अपनी प्रतिक्रिया लिखिए।</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>पानवाले द्वारा कैप्टन के प्रति की गई यह टिप्पणी अत्यंत निंदनीय, संवेदनहीन और गैर-ज़िम्मेदाराना थी:</p>
          <ul>
            <li><strong>देशभक्ति का अपमान:</strong> कैप्टन शारीरिक रूप से दिव्यांग और विपन्न अवश्य था, किंतु उसका देशप्रेम और शहीदों के प्रति सम्मान समूचे कस्बे में सबसे प्रखर था। उसके इस पावन संकल्प को 'पागलपन' कहना देशभक्ति का घोर अनादर है।</li>
            <li><strong>दिव्यांगता का उपहास अनुचित:</strong> किसी व्यक्ति की शारीरिक अशक्तता का उपहास उड़ाना मानवीय मूल्यों के विरुद्ध है। देश की सेवा केवल सीमा पर बंदूक थामकर ही नहीं होती, बल्कि नागरिक कर्तव्यों का निष्ठापूर्वक पालन करना भी सच्ची देशसेवा है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">टिप्पणी की संवेदनहीनता व उपहास का स्पष्ट विरोध</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">नागरिक कर्तव्यों एवं आत्मिक देशभक्ति की महत्ता का प्रतिपादन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ SECTION -->
  <div class="cbq-section">
    <div class="cbq-header">
      <span>🎯 योग्यता आधारित प्रश्न (Competency-Based Questions / CBQs)</span>
      <span class="cbq-badge">CBSE Board NEP 2020</span>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 1: अभिकथन और कारण (Assertion &amp; Reason)</div>
      <div class="cbq-question">
        <strong>अभिकथन (A):</strong> कैप्टन चश्मेवाले का राष्ट्रप्रेम किसी वर्दीधारी सैनिक से कम नहीं था।<br>
        <strong>कारण (R):</strong> वह अपनी गरीबी और शारीरिक दिव्यांगता के बावजूद नेताजी की मूर्ति को कभी चश्माविहीन नहीं रहने देता था।<br>
        <strong>विकल्प:</strong><br>
        (क) अभिकथन (A) और कारण (R) दोनों सही हैं तथा कारण (R), अभिकथन (A) की सही व्याख्या करता है।<br>
        (ख) अभिकथन (A) और कारण (R) दोनों सही हैं, परंतु कारण (R), अभिकथन की सही व्याख्या नहीं करता।<br>
        (ग) अभिकथन (A) सही है, परंतु कारण (R) गलत है।<br>
        (घ) अभिकथन (A) गलत है, परंतु कारण (R) सही है।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>सही उत्तर: (क)</strong><br>
        <em>व्याख्या:</em> कैप्टन के पास सैन्य साधन नहीं थे, परंतु उसकी राष्ट्रभक्ति कर्म में प्रकट होती थी। उसने अपने सामर्थ्य से नेताजी की अधूरी मूर्ति को चश्मा देकर देशप्रेम की मिसाल पेश की, अतः कारण (R) सीधे तौर पर अभिकथन (A) की पुष्टि करता है।
      </div>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 2: केस-आधारित प्रश्न (Case-Based Question)</div>
      <div class="cbq-question">
        "देशभक्ति केवल युद्धभूमि में प्राण न्योछावर करने का नाम नहीं है, अपितु दैनिक जीवन में राष्ट्रीय प्रतीकों का सम्मान करना भी देशभक्ति है।" 'नेताजी का चश्मा' कहानी के आधार पर स्पष्ट कीजिए कि आम नागरिक देश निर्माण में किस प्रकार योगदान दे सकते हैं?
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        कहानी यह अमर संदेश देती है कि देश सीमाओं से घिरे भू-भाग का नाम नहीं है, बल्कि वहाँ रहने वाले नागरिकों, प्रकृति, संस्कृति और राष्ट्रीय प्रतीकों से बनता है। आम नागरिक निम्नलिखित तरीकों से देशसेवा कर सकते हैं:<br>
        1. <strong>राष्ट्रीय स्मारकों व प्रतीकों का आदर:</strong> महापुरुषों की प्रतिमाओं, तिरंगे और सार्वजनिक संपत्तियों की सुरक्षा व सम्मान करना।<br>
        2. <strong>स्वच्छता व पर्यावरण संरक्षण:</strong> अपने आसपास के परिवेश को स्वच्छ रखना, जल-विद्युत की बचत करना।<br>
        3. <strong>कर्तव्यनिष्ठा:</strong> अपने कार्य (पढ़ाई, व्यवसाय, नौकरी) को ईमानदारी से पूर्ण करना ताकि राष्ट्र समृद्ध बन सके।
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(outDir, 'ch1.html'), ch1, 'utf8');
console.log('Generated ch1.html');
