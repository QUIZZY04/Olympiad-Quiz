const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c10h');

// CHAPTER 7: पद — सूरदास
const ch7 = `<section class="chapter-section" id="ch7" data-book="kshitij-kavya">
  <div class="chapter-header">
    <div class="ch-badge">7</div>
    <div class="chapter-header-info">
      <div class="ch-category">क्षितिज भाग-2 (काव्य खंड) — पाठ 7</div>
      <h2>पद</h2>
      <p>सूरदास (सूरसागर के भ्रमरगीत से) | ब्रजभाषा — गोपियों का वाक्चातुर्य, अनन्य कृष्ण प्रेम और निर्गुण योग पर सगुण भक्ति की विजय | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch7-q1">
    <div class="q-head" onclick="toggleQ('ch7-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">गोपियों द्वारा उद्धव को भाग्यवान कहने में क्या व्यंग्य निहित है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>गोपियाँ उद्धव को 'बड़भागी' (भाग्यवान) कहकर वास्तव में उन पर तीखा वक्रोक्तिपूर्ण व्यंग्य करती हैं। उनके कहने का वास्तविक भाव यह है कि उद्धव अत्यंत अभागे हैं:</p>
          <ul>
            <li>वे प्रेम के साक्षात् अवतार भगवान श्रीकृष्ण के इतने निकट रहते हैं, फिर भी उनके हृदय में प्रेम और अनुराग की एक बूँद भी उत्पन्न नहीं हो सकी।</li>
            <li>वे प्रेम के अलौकिक आनंद और विरह-मिलन के दिव्य सुख से सर्वथा वंचित हैं। इसलिए गोपियों की दृष्टि में उनका यह अनासक्त जीवन निरर्थक और दुर्भाग्यपूर्ण है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">वक्रोक्ति/व्यंग्य के स्वरूप का स्पष्टीकरण (भाग्यवान कहकर अभागा बताना)</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">कृष्ण के सान्निध्य में रहकर भी प्रेमरहित रहने का भाव</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch7-q2">
    <div class="q-head" onclick="toggleQ('ch7-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">उद्धव के व्यवहार की तुलना किस-किस से की गई है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>गोपियों ने उद्धव के प्रेमहीन और अनासक्त व्यवहार की तुलना निम्नलिखित दो प्राकृतिक उदाहरणों से की है:</p>
          <ol>
            <li><strong>कमल के पत्ते (पुरइनि पात) से:</strong> जिस प्रकार कमल का पत्ता जल के भीतर रहते हुए भी जल से गीला नहीं होता और उस पर पानी की एक बूँद भी नहीं टिकती, उसी प्रकार उद्धव कृष्ण के समीप रहते हुए भी उनके प्रेम से अछूते हैं।</li>
            <li><strong>तेल लगी गागर (गागरी) से:</strong> जिस प्रकार तेल से चुपड़े हुए मटके को जल में डुबोने पर उस पर पानी की एक बूँद भी नहीं ठहरती, उसी प्रकार ज्ञानमार्गी उद्धव पर कृष्ण के अगाध प्रेम-सागर का कोई असर नहीं होता।</li>
          </ol>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कमल के पत्ते (पुरइनि पात) के उदाहरण का सटीक विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">तेल लगी मटकी के उदाहरण का सटीक विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch7-q3">
    <div class="q-head" onclick="toggleQ('ch7-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">उद्धव द्वारा दिए गए योग के संदेश ने गोपियों की विरहाग्नि में घी का काम कैसे किया?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>गोपियाँ मथुरा से श्रीकृष्ण के लौटने की प्रतीक्षा में तन और मन की विरह-वेदना को इस आशा के साथ सह रही थीं कि कृष्ण शीघ्र लौटेंगे और उनका प्रेम साकार होगा। किंतु जब उद्धव ने आकर उन्हें कृष्ण के प्रेम को भूलने और निर्गुण ब्रह्म की कठोर योग-साधना अपनाने का संदेश दिया, तो उनकी सारी आशाएँ टूट गईं।</p>
          <p>जिस संदेश से उन्हें सांत्वना मिलने की उम्मीद थी, उसी ने उनकी विरह-व्यथा और पीड़ा को अत्यधिक भड़का दिया। इस प्रकार योग के संदेश ने जलती हुई विरहाग्नि में आहुति (घी) डालने का कार्य किया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">मिलन की आशा के टूटने और निराशा का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">योग संदेश द्वारा विरह-वेदना भड़कने का रूपक</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch7-q4">
    <div class="q-head" onclick="toggleQ('ch7-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">गोपियों ने उद्धव से योग की शिक्षा कैसे लोगों को देने की बात कही है?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>गोपियों ने उद्धव से कहा—<em>"यह तौ सूर तिनहिं लै सौंपौ, जिनके मन चक्री।"</em></p>
          <p>अर्थात यह निर्गुण योग का संदेश उन लोगों को जाकर सौंपिए जिनका मन चंचल, अस्थिर और चक्री (भौंरे या चक्र) के समान भटकता रहता है। गोपियों का मन तो एकमात्र श्रीकृष्ण के अनन्य प्रेम में दृढ़ और स्थिर है, इसलिए उन्हें किसी अन्य योग-साधना की लेशमात्र भी आवश्यकता नहीं है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">अस्थिर व भटके हुए मन वाले लोगों को देने का सुझाव</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">गोपियों के स्थिर व एकाग्र प्रेम का विपरीत भाव</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch7-q5">
    <div class="q-head" onclick="toggleQ('ch7-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">प्रस्तुत पदों के आधार पर गोपियों का योग-साधना के प्रति दृष्टिकोण स्पष्ट करें।</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>गोपियों के लिए निर्गुण योग-साधना पूर्णतया निरर्थक, अरुचिकर और कष्टप्रद है:</p>
          <ul>
            <li><strong>कड़वी ककड़ी के समान:</strong> गोपियाँ कहती हैं कि योग का नाम सुनते ही मुँह का स्वाद कड़वी ककड़ी जैसा अरुचिकर हो जाता है (<em>'ज्यों करुई ककरी'</em>)।</li>
            <li><strong>एक असाध्य बीमारी:</strong> वे योग को ऐसी भयानक व्याधि मानती हैं जिसे न कभी उन्होंने पहले देखा, न सुना और न ही कभी भोगा।</li>
            <li>वे सगुण साकार प्रेम को ही मुक्ति और आनंद का सच्चा मार्ग मानती हैं तथा ज्ञानमार्ग पर प्रेममार्ग की श्रेष्ठता स्थापित करती हैं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कड़वी ककड़ी और बीमारी (व्याधि) के उपमानों का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">ज्ञान पर सगुण प्रेम की प्रतिष्ठा का भाव</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Section -->
  <div class="cbq-section">
    <div class="cbq-header">
      <div class="cbq-badge">CBSE CBQs</div>
      <h3>योग्यता-आधारित उच्च स्तरीय प्रश्न (Competency-Based Questions)</h3>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 1: काव्यांश-आधारित विश्लेषण (Extract-Based Competency)</div>
      <div class="cbq-question">
        "हमारे हरि हारिल की लकरी। मन क्रम बचन नंद-नंदन उर, यह दृढ़ करि पकरी॥"<br>
        प्रस्तुत पंक्तियों में हारिल पक्षी की लकड़ी का रूपक गोपियों की किस मानसिक अवस्था और भक्ति-भावना को दर्शाता है?
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        हारिल पक्षी अपने पंजों में लकड़ी के तिनके को सदा पकड़े रहता है और उसे अपना एकमात्र जीवन-आधार मानता है। ठीक उसी प्रकार गोपियों ने मन, कर्म और वाणी से श्रीकृष्ण को अपने हृदय में दृढ़तापूर्वक धारण कर रखा है। यह रूपक उनके <strong>एकनिष्ठ, अनन्य और अडिग समर्पण</strong> को दर्शाता है, जहाँ कृष्ण के अतिरिक्त उनके जीवन का कोई अन्य अवलंबन नहीं है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 8: राम-लक्ष्मण-परशुराम संवाद — तुलसीदास
const ch8 = `<section class="chapter-section" id="ch8" data-book="kshitij-kavya">
  <div class="chapter-header">
    <div class="ch-badge">8</div>
    <div class="chapter-header-info">
      <div class="ch-category">क्षितिज भाग-2 (काव्य खंड) — पाठ 8</div>
      <h2>राम-लक्ष्मण-परशुराम संवाद</h2>
      <p>गोस्वामी तुलसीदास (रामचरितमानस के बालकांड से) | अवधी भाषा, दोहा-चौपाई छंद — वीर रस, रौद्र रस, हास्य-व्यंग्य और मर्यादा | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch8-q1">
    <div class="q-head" onclick="toggleQ('ch8-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">परशुराम के क्रोध करने पर लक्ष्मण ने धनुष के टूट जाने के लिए कौन-कौन से तर्क दिए?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लक्ष्मण ने हँसते हुए परशुराम के समक्ष निम्नलिखित तर्क प्रस्तुत किए:</p>
          <ul>
            <li><strong>बचपन के धनुषों की समानता:</strong> हमने बचपन में खेल-खेल में न जाने कितनी धनुहियाँ तोड़ डालीं, तब तो मुनिवर ने कभी ऐसा क्रोध नहीं किया। इस धनुष पर इतनी विशेष ममता क्यों?</li>
            <li><strong>जीर्ण-शीर्ण पुराना धनुष:</strong> यह धनुष अत्यंत पुराना और जर्जर था। ऐसे सड़े-गले धनुष के टूटने से किसी को क्या लाभ या क्या हानि हो सकती है?</li>
            <li><strong>राम का दोष नहीं:</strong> श्री राम ने तो इसे नए के भ्रम में केवल छुआ मात्र था, छूते ही यह अपने-आप टूट गया। इसमें रघुपति का कोई दोष नहीं है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बचपन की धनुहियों का तर्क</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">धनुष के पुराने व जर्जर होने का तर्क</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">राम द्वारा केवल छूते ही टूटने का स्पष्टीकरण</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch8-q2">
    <div class="q-head" onclick="toggleQ('ch8-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">परशुराम के क्रोध करने पर राम और लक्ष्मण की जो प्रतिक्रियाएँ हुईं, उनके आधार पर दोनों के स्वभाव की विशेषताएँ अपने शब्दों में लिखिए।</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>श्री राम का स्वभाव:</strong></p>
          <ul>
            <li><strong>धैर्य और विनम्रता:</strong> राम अत्यंत शांत, सौम्य और मर्यादा पुरुषोत्तम हैं। वे परशुराम के भीषण क्रोध के सामने हाथ जोड़कर स्वयं को उनका 'एक दास' कहते हैं।</li>
            <li><strong>शीतलता:</strong> उनके वचन जल के समान शीतल और क्रोध को शांत करने वाले हैं। वे बड़ों का आदर करना भली-भाँति जानते हैं।</li>
          </ul>
          <p><strong>लक्ष्मण का स्वभाव:</strong></p>
          <ul>
            <li><strong>उग्रता और वाक्पटुता:</strong> लक्ष्मण स्वभाव से अत्यंत उग्र, तेजस्वी और निर्भीक हैं। वे अन्याय या अनुचित अहंकार को बिल्कुल सहन नहीं करते।</li>
            <li><strong>व्यंग्यबाण:</strong> वे परशुराम के फरसे और डींगों से तनिक भी नहीं डरते, बल्कि तीखे व्यंग्य बाणों से उनके क्रोध को और भड़का देते हैं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">श्री राम के शील, विनय व मर्यादा का विश्लेषण</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">लक्ष्मण की निर्भीकता, उग्रता व व्यंग्य-क्षमता का विश्लेषण</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch8-q3">
    <div class="q-head" onclick="toggleQ('ch8-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">लक्ष्मण ने वीर योद्धा की क्या-क्या विशेषताएँ बताईं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लक्ष्मण ने परशुराम को लक्ष्य करते हुए एक सच्चे शूरवीर की निम्नलिखित विशेषताएँ बताईं:</p>
          <ul>
            <li><strong>कर्म में विश्वास:</strong> शूरवीर युद्धभूमि में अपनी वीरता का पराक्रम दिखाते हैं, मुँह से अपनी प्रशंसा के ढोल नहीं पीटते (<em>"सूर समर करनी करहिं नहिं जनावहिं आपु"</em>)।</li>
            <li><strong>डींगें न हाँकना:</strong> युद्ध में शत्रु को सामने पाकर केवल कायर व्यक्ति ही अपने पराक्रम की डींगें हाँकते हैं।</li>
            <li><strong>धैर्य और शील:</strong> सच्चे वीर धीर, क्षोभरहित और गंभीर होते हैं तथा गाली देने जैसी अशोभनीय हरकतें नहीं करते।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">युद्धभूमि में कर्म प्रदर्शन बनाम आत्मप्रशंसा का भेद</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">धैर्य, गंभीरता व अमर्यादित आचरण न करने का गुण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch8-q4">
    <div class="q-head" onclick="toggleQ('ch8-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">साहस और शक्ति के साथ विनम्रता हो तो बेहतर है—इस कथन पर अपने विचार लिखिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>यह कथन शत-प्रतिशत सत्य है। साहस और शक्ति जब बिना विवेक और विनम्रता के प्रकट होते हैं, तो वे विनाशकारी अहंकार और आतंक बन जाते हैं, जैसा कि परशुराम के क्रोधी व्यवहार में दिखाई देता है।</p>
          <p>किंतु जब साहस और शक्ति के साथ 'विनम्रता' जुड़ जाती है, तो वह मनुष्य को सर्वप्रिय, सम्मानीय और महान बना देती है, जैसा कि भगवान श्री राम के आचरण में देखने को मिलता है। विनम्रता शक्ति को संयम प्रदान करती है और व्यक्ति समाज को जोड़ने का कार्य करता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">विनम्रता विहीन शक्ति के दुष्परिणाम (अहंकार) का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">विनम्रता युक्त शक्ति की दिव्यता व प्रभाव (श्री राम का उदाहरण)</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Section -->
  <div class="cbq-section">
    <div class="cbq-header">
      <div class="cbq-badge">CBSE CBQs</div>
      <h3>योग्यता-आधारित उच्च स्तरीय प्रश्न (Competency-Based Questions)</h3>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 1: शिल्प सौंदर्य और भाषा विश्लेषण (Stylistic Competency)</div>
      <div class="cbq-question">
        "इहाँ कुम्हड़बतिया कोउ नाहीं। जे तरजनी देखि मरि जाहीं॥" पंक्ति में निहित लोकोक्ति और लक्ष्मण के साहस का आशय स्पष्ट कीजिए।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        'कुम्हड़बतिया' काशीफल (कद्दू) का वह छोटा-सा कोमल फल होता है जो उँगली की छुअन या तर्जनी दिखाने से मुरझा जाता है। लक्ष्मण इस लोक-विश्वास के माध्यम से निर्भीकतापूर्वक कहते हैं कि हम कोई कमजोर या भयभीत होने वाले व्यक्ति नहीं हैं जो आपकी तर्जनी उँगली या फरसा देखकर डर से मर जाएँगे। यहाँ लक्ष्मण का अदम्य क्षत्रिय तेज और व्यंग्य मुखरित हुआ है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 9: आत्मकथ्य — जयशंकर प्रसाद
const ch9 = `<section class="chapter-section" id="ch9" data-book="kshitij-kavya">
  <div class="chapter-header">
    <div class="ch-badge">9</div>
    <div class="chapter-header-info">
      <div class="ch-category">क्षितिज भाग-2 (काव्य खंड) — पाठ 9</div>
      <h2>आत्मकथ्य</h2>
      <p>जयशंकर प्रसाद | छायावादी कविता — वैयक्तिक पीड़ा, जीवन का यथार्थ, अंतर्मुखी दृष्टि और विनम्र अभिव्यक्ति | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch9-q1">
    <div class="q-head" onclick="toggleQ('ch9-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">कवि आत्मकथा लिखने से क्यों बचना चाहता है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>छायावादी कवि जयशंकर प्रसाद निम्नलिखित कारणों से अपनी आत्मकथा लिखने से बचना चाहते हैं:</p>
          <ul>
            <li><strong>साधारण व अभावग्रस्त जीवन:</strong> कवि का मानना है कि उनका जीवन अत्यंत सामान्य और खाली गगरी की तरह रिक्त रहा है; उसमें कोई ऐसी महान उपलब्धि नहीं जिसे सुनकर दुनिया वाह-वाह करे।</li>
            <li><strong>व्यथाओं का पुनर्जागरण:</strong> आत्मकथा लिखने से जीवन के पुराने घाव और सोई हुई वेदना पुनः हरी हो जाएगी।</li>
            <li><strong>उपहास का भय:</strong> वे अपनी कमजोरियों, भूलों और मित्रों द्वारा दिए गए छल-कपट को सार्वजनिक करके दुनिया में खुद को उपहास का पात्र नहीं बनाना चाहते।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">उपलब्धिहीन सामान्य जीवन की अनुभूति</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">निजी वेदना के जागने व उपहास से बचने की भावना</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch9-q2">
    <div class="q-head" onclick="toggleQ('ch9-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">आत्मकथा सुनाने के संदर्भ में 'अभी समय भी नहीं' कवि ऐसा क्यों कहता है?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि ऐसा इसलिए कहता है क्योंकि उसके अनुसार उसने अभी तक जीवन में कोई ऐसा महान कार्य या कीर्ति अर्जित नहीं की है जिसे समाज के सामने प्रस्तुत किया जाए। साथ ही, उसके हृदय की पीड़ा और दुखद स्मृतियाँ इस समय शांत होकर थकी-हारी सोई हुई हैं। कवि उन्हें जगाकर अपनी व्यथा को फिर से बढ़ाना नहीं चाहता।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">महान उपलब्धि के अभाव का तर्क</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सोई हुई व्यथा को न जगाने की इच्छा</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch9-q3">
    <div class="q-head" onclick="toggleQ('ch9-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">स्मृति को 'पाथेय' बनाने से कवि का क्या आशय है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>'पाथेय' का अर्थ होता है—मार्ग का संबल या यात्रा में यात्री के काम आने वाला भोजन व सहारा।</p>
          <p>कवि के जीवन में आज केवल सूनापन, दुख और निराशा है। अतीत में प्रियतमा के साथ बिताए गए सुखद क्षणों की मधुर स्मृतियाँ ही कवि के थके हुए जीवन रूपी यात्री का एकमात्र सहारा (पाथेय) हैं। उन्हीं स्मृतियों के सहारे वह अपने उदास जीवन की कठिन यात्रा तय कर रहा है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">'पाथेय' शब्द का अर्थ (मार्ग का संबल)</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">अतीत की सुखद स्मृतियों को जीने का सहारा मानने का विश्लेषण</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch9-q4">
    <div class="q-head" onclick="toggleQ('ch9-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">भाव स्पष्ट कीजिए— "मिला कहाँ वह सुख जिसका मैं स्वप्न देखकर जाग गया। आलिंगन में आते-आते मुसक्या कर जो भाग गया।"</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>भावार्थ:</strong> कवि यह कहना चाहता है कि जीवन में सुख उसके लिए एक स्वप्न मात्र बनकर रह गया। जिस सुख की उसने कल्पना की थी और जिसे वह अपनी बाहों में भरने ही वाला था, वह सुख उसे छूकर दूर छिटक गया।</p>
          <p>अर्थात सांसारिक सुख क्षणभंगुर और छलावा सिद्ध हुए। कवि को वास्तविक जीवन में चिरस्थायी सुख की प्राप्ति कभी नहीं हुई, केवल विरह और निराशा ही उसकी नियति बनी।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सुख की क्षणभंगुरता व छलावे का स्पष्टीकरण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">कवि के जीवन की निराशा व अतृप्ति का यथार्थ</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Section -->
  <div class="cbq-section">
    <div class="cbq-header">
      <div class="cbq-badge">CBSE CBQs</div>
      <h3>योग्यता-आधारित उच्च स्तरीय प्रश्न (Competency-Based Questions)</h3>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 1: छायावादी शिल्प सौंदर्य (Poetic Aesthetic Competency)</div>
      <div class="cbq-question">
        'आत्मकथ्य' कविता छायावादी काव्यधारा की प्रमुख विशेषताओं (मानवीकरण, प्रतीकात्मकता, तत्सम शब्दावली) को किस प्रकार प्रमाणित करती है?
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        कविता में छायावाद की प्रमुख विशेषताएँ स्पष्ट परिलक्षित होती हैं:<br>
        1. <strong>प्रतीकात्मकता:</strong> 'मधुप', 'रीति गागर', 'मुरझाकर गिरती पत्तियाँ' जीवन के अभावों के सशक्त प्रतीक हैं।<br>
        2. <strong>मानवीकरण:</strong> <em>"अरी सरलते तेरी हँसी उड़ाऊँ मैं"</em> में सरलता का मानवीयकरण है।<br>
        3. <strong>संस्कृतनिष्ठ तत्सम पदावली:</strong> 'अनंत नीलिमा', 'व्यंग्य-मलिन', 'अरुण-कपोलों' आदि शब्दों का सुंदर संयोजन कविता को विशिष्ट सौंदर्य प्रदान करता है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 10: उत्साह और अट नहीं रही है — सूर्यकांत त्रिपाठी 'निराला'
const ch10 = `<section class="chapter-section" id="ch10" data-book="kshitij-kavya">
  <div class="chapter-header">
    <div class="ch-badge">10</div>
    <div class="chapter-header-info">
      <div class="ch-category">क्षितिज भाग-2 (काव्य खंड) — पाठ 10</div>
      <h2>उत्साह और अट नहीं रही है</h2>
      <p>सूर्यकांत त्रिपाठी 'निराला' | आह्वान गीत व प्रकृति-गीत — क्रांति चेतना, सामाजिक परिवर्तन और फागुन मास का अनुपम सौंदर्य | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch10-q1">
    <div class="q-head" onclick="toggleQ('ch10-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">कवि बादल से फुहार, रिमझिम या बरसने के स्थान पर 'गरजो' क्यों कहता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि निराला एक क्रांतिकारी कवि हैं। वे बादल को केवल जल बरसाने वाले प्राकृतिक साधन के रूप में नहीं, बल्कि शोषित समाज में नई चेतना और क्रांति के प्रतीक के रूप में देखते हैं।</p>
          <p>फुहार या रिमझिम कोमलता और शांति की सूचक है, जिससे समाज में बड़ा परिवर्तन नहीं आ सकता। कवि बादलों के भीषण 'गर्जन' के द्वारा समाज के सोए हुए लोगों में नवजीवन, पौरुष, उत्साह और विप्लव (क्रांति) का शंखनाद करना चाहता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बादल को क्रांति व पौरुष के प्रतीक के रूप में दर्शाना</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">फुहार की कोमलता बनाम गर्जन के क्रांतिकारी प्रभाव का भेद</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch10-q2">
    <div class="q-head" onclick="toggleQ('ch10-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">कविता का शीर्षक 'उत्साह' क्यों रखा गया है?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कविता एक आह्वान गीत है जो मानव मन में उमंग, साहस और ऊर्जा भरने का संदेश देता है। जिस प्रकार बादलों का गर्जन और बरसना पीड़ित धरती और व्याकुल जन-मन में नई आशा और उत्साह का संचार करता है, उसी प्रकार क्रांति भी समाज में नवीन ऊर्जा भरती है। अतः 'उत्साह' शीर्षक सर्वथा सटीक और सार्थक है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">आह्वान गीत के रूप में ऊर्जा व साहस जगाने का भाव</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">शीर्षक की औचित्यपूर्ण सार्थकता</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch10-q3">
    <div class="q-head" onclick="toggleQ('ch10-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">कविता में बादल किन-किन अर्थों की ओर संकेत करता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>'उत्साह' कविता में बादल निम्नलिखित बहुआयामी अर्थों की ओर संकेत करता है:</p>
          <ol>
            <li><strong>तप्त मानव की प्यास बुझाने वाले:</strong> गर्मी से पीड़ित और व्याकुल लोगों को शीतलता व जल प्रदान करने वाले कल्याणकारी रूप में।</li>
            <li><strong>क्रांतिकारी चेतना के अग्रदूत:</strong> अपने वज्र-गर्जन से पुरानी रूढ़ियों को तोड़कर सामाजिक परिवर्तन लाने वाले विद्रोही रूप में।</li>
            <li><strong>नवीन सृष्टि के रचयिता कवि:</strong> नए अंकुर को जीवन देने वाले और साहित्य में नवचेतना भरने वाले सृजक के रूप में।</li>
          </ol>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">तृष्णा निवारक व जलदाता रूप</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">क्रांति व परिवर्तन का प्रतीक</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सृजन व नई कविता का प्रतीक</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch10-q4">
    <div class="q-head" onclick="toggleQ('ch10-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">'अट नहीं रही है' कविता के आधार पर फागुन के प्राकृतिक सौंदर्य का वर्णन कीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>फागुन मास (वसंत ऋतु) में प्रकृति का सौंदर्य चरम सीमा पर होता है:</p>
          <ul>
            <li><strong>चारों ओर हरियाली और लालिमा:</strong> पेड़ों की डालियाँ कहीं हरी पत्तियों से तो कहीं लाल-लाल कोमल कोंपलों से लद गई हैं।</li>
            <li><strong>सुगंधित समीर:</strong> फूलों से सुशोभित प्रकृति के गले में मानो मंद-मंद सुगंध की माला पड़ी हुई है, जिससे सारा वातावरण महक रहा है।</li>
            <li><strong>असीमित शोभा:</strong> फागुन की प्राकृतिक आभा (शोभा) इतनी अधिक और व्यापक है कि वह प्रकृति और आँखों में समा नहीं पा रही है (अट नहीं रही है)।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पेड़ों पर नए पत्तों व फूलों का सुंदर चित्रण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मादक सुगंध व प्रकृति में समा न पाने वाले सौंदर्य का वर्णन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Section -->
  <div class="cbq-section">
    <div class="cbq-header">
      <div class="cbq-badge">CBSE CBQs</div>
      <h3>योग्यता-आधारित उच्च स्तरीय प्रश्न (Competency-Based Questions)</h3>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 1: अभिकथन और कारण (Assertion &amp; Reason)</div>
      <div class="cbq-question">
        <strong>अभिकथन (A):</strong> 'उत्साह' कविता में निराला जी बादलों को क्रांति का अग्रदूत मानते हैं।<br>
        <strong>कारण (R):</strong> बादल अपने भीतर 'वज्र' छिपाए हुए हैं जो पुरानी सड़ी-गली व्यवस्था को नष्ट कर नवसृजन करने में सक्षम है।<br>
        <strong>विकल्प:</strong><br>
        (क) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या करता है।<br>
        (ख) (A) और (R) दोनों सही हैं, परंतु (R), (A) की सही व्याख्या नहीं करता।<br>
        (ग) (A) सही है, परंतु (R) गलत है।<br>
        (घ) (A) गलत है, परंतु (R) सही है।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>सही उत्तर: (क)</strong><br>
        <em>व्याख्या:</em> निराला जी के अनुसार बादलों के उर (हृदय) में छिपी बिजली और गर्जन विध्वंस के साथ-साथ नई कविता और नए जीवन का निर्माण करती है। अतः (R) बिल्कुल सही व्याख्या है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 11: यह दंतुरित मुस्कान और फसल — नागार्जुन
const ch11 = `<section class="chapter-section" id="ch11" data-book="kshitij-kavya">
  <div class="chapter-header">
    <div class="ch-badge">11</div>
    <div class="chapter-header-info">
      <div class="ch-category">क्षितिज भाग-2 (काव्य खंड) — पाठ 11</div>
      <h2>यह दंतुरित मुस्कान और फसल</h2>
      <p>नागार्जुन | जनवादी कविता — वात्सल्य रस, शिशु की मासूमियत, श्रम का गौरव और प्रकृति-मानव का सह-अस्तित्व | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch11-q1">
    <div class="q-head" onclick="toggleQ('ch11-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">बच्चे की दंतुरित मुस्कान का कवि के मन पर क्या प्रभाव पड़ता है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>नन्हें बच्चे की नए-नए दाँत निकली (दंतुरित) मुस्कान देखकर कवि का मन अपार वात्सल्य और आनंद से भर उठता है:</p>
          <ul>
            <li><strong>मुरझाए मन में नवजीवन:</strong> कवि को लगता है कि बच्चे की यह मोहक मुस्कान मृतप्राय और निराश व्यक्ति में भी नए प्राण फूँक सकती है।</li>
            <li><strong>कमल खिलने की अनुभूति:</strong> धूल-धूसरित बच्चे को देखकर लगता है मानो तालाब को छोड़कर कमल का फूल उसकी झोपड़ी में खिल उठा हो।</li>
            <li><strong>कठोरता का पिघलना:</strong> कवि का मन जो लंबे प्रवास के कारण कठोर और शुष्क हो गया था, वह बच्चे के स्पर्श मात्र से पिघलकर शेफालिका के फूलों की तरह झड़ने लगता है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">निराशा में नवजीवन व वात्सल्य के संचार का भाव</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">कमल व शेफालिका के फूलों जैसे बिंबों का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch11-q2">
    <div class="q-head" onclick="toggleQ('ch11-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">बच्चे की मुसकान और एक बड़े व्यक्ति की मुस्कान में क्या अंतर होता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>बच्चे और बड़े व्यक्ति की मुस्कान में मौलिक अंतर होता है:</p>
          <ul>
            <li><strong>बच्चे की मुस्कान:</strong> पूर्णतया निष्कपट, निश्छल, स्वाभाविक और स्वार्थहीन होती है। इसमें कोई बनावटीपन नहीं होता और यह हर देखने वाले को निर्मल आनंद देती है।</li>
            <li><strong>बड़े व्यक्ति की मुस्कान:</strong> प्रायः औपचारिकता, स्वार्थ, कूटनीति या व्यंग्य से भरी होती है। बड़ों की मुस्कान में अवसरवादिता और संकोच छिपा रहता है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बच्चे की निश्छलता व स्वाभाविकता का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">बड़ों की मुस्कान की कृत्रिमता व औपचारिकता का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch11-q3">
    <div class="q-head" onclick="toggleQ('ch11-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">'फसल' कविता के आधार पर स्पष्ट कीजिए कि फसल क्या है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि नागार्जुन के अनुसार फसल किसी एक तत्व का परिणाम नहीं है, बल्कि प्रकृति और मानव-श्रम के अद्भुत समन्वय का फल है:</p>
          <ol>
            <li>हजार-हजार नदियों के अमृत-समान जल का जादुई प्रभाव।</li>
            <li>करोड़ों कर्मठ किसानों और मजदूरों के हाथों के कठोर परिश्रम व स्पर्श की गरिमा।</li>
            <li>विभिन्न प्रकार की उपजाऊ मिट्टियों (काली, दोमट, संदली) के पोषक तत्वों का सम्मिश्रण।</li>
            <li>सूरज की किरणों की ऊर्जा और वायु की मंद थिरकन का रूपांतरण।</li>
          </ol>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">प्रकृति के तत्वों (जल, मिट्टी, धूप, हवा) का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">करोड़ों किसानों के श्रम के योगदान की महत्ता</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch11-q4">
    <div class="q-head" onclick="toggleQ('ch11-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">'फसल को हाथों के स्पर्श की गरिमा और महिमा' कहकर कवि क्या व्यक्त करना चाहता है?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि यह स्पष्ट करना चाहता है कि यद्यपि प्रकृति (मिट्टी, जल, धूप) फसल के विकास के लिए कच्चा माल देती है, किंतु जब तक किसान और मजदूर अपने पसीने और हाथों के स्पर्श से उसकी जुताई, बुवाई और सींचन नहीं करते, तब तक अन्न का दाना नहीं उग सकता। कवि यहाँ श्रमिक वर्ग के श्रम के प्रति गहरी कृतज्ञता और सम्मान व्यक्त कर रहा है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">मानव श्रम के बिना प्राकृतिक तत्वों की निष्फलता</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">किसान के श्रम की गरिमा व प्रतिष्ठा</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Section -->
  <div class="cbq-section">
    <div class="cbq-header">
      <div class="cbq-badge">CBSE CBQs</div>
      <h3>योग्यता-आधारित उच्च स्तरीय प्रश्न (Competency-Based Questions)</h3>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 1: केस-आधारित पर्यावरण व श्रम चेतना (Competency Question)</div>
      <div class="cbq-question">
        वर्तमान उपभोक्तावादी युग में कृषि और किसान की उपेक्षा बढ़ती जा रही है। नागार्जुन की कविता 'फसल' आज के संदर्भ में हमें पर्यावरण और कृषक समाज के प्रति क्या दृष्टिकोण अपनाने की प्रेरणा देती है?
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        कविता यह सिद्ध करती है कि मानव जीवन की उत्तरजीविता प्रकृति (नदियों की शुचिता, मिट्टी की उर्वरता) और किसानों के पसीने पर टिकी है। यदि हम नदियों को प्रदूषित करेंगे, रासायनिक खादों से मिट्टी की शक्ति नष्ट करेंगे या अन्नदाता किसान के श्रम का यथोचित सम्मान नहीं करेंगे, तो हमारी खाद्य सुरक्षा और अस्तित्व संकट में पड़ जाएगा। अतः हमें प्रकृति का संरक्षण और कृषक वर्ग का सम्मान करना अनिवार्य है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 12: संगतकार — मंगलेश डबराल
const ch12 = `<section class="chapter-section" id="ch12" data-book="kshitij-kavya">
  <div class="chapter-header">
    <div class="ch-badge">12</div>
    <div class="chapter-header-info">
      <div class="ch-category">क्षितिज भाग-2 (काव्य खंड) — पाठ 12</div>
      <h2>संगतकार</h2>
      <p>मंगलेश डबराल | समकालीन कविता — पृष्ठभूमि के सहायकों की भूमिका, निस्वार्थ योगदान और मानवीय संवेदना | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch12-q1">
    <div class="q-head" onclick="toggleQ('ch12-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">संगतकार के माध्यम से कवि किस प्रकार के व्यक्तियों की ओर संकेत करना चाह रहा है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>संगतकार के माध्यम से कवि समाज के उन समस्त सहकर्मियों, सहायकों और पृष्ठभूमि में रहकर काम करने वाले व्यक्तियों की ओर संकेत कर रहा है, जो किसी भी मुख्य नायक, नेता, अभिनेता या संस्था की सफलता में रीढ़ की हड्डी की तरह कार्य करते हैं। वे स्वयं कभी प्रसिद्धि के केंद्र में नहीं आते, बल्कि पर्दे के पीछे रहकर मुख्य व्यक्ति को ऊँचाइयों पर पहुँचाने के लिए अपना सर्वस्व न्योछावर कर देते हैं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पर्दे के पीछे कार्य करने वाले सहायकों का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मुख्य नायक की सफलता में निस्वार्थ योगदान का भाव</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch12-q2">
    <div class="q-head" onclick="toggleQ('ch12-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">संगतकार जैसे व्यक्ति संगीत के अलावा और किन-किन क्षेत्रों में दिखाई देते हैं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>संगतकार जैसे समर्पित व्यक्ति जीवन के प्रत्येक क्षेत्र में मौजूद रहते हैं:</p>
          <ul>
            <li><strong>खेल के मैदान में:</strong> क्रिकेट या फुटबॉल में कप्तान के अलावा वे खिलाड़ी जो फील्डिंग, पासिंग या रणनीति में चुपचाप योगदान देते हैं; तथा कोच व सपोर्ट स्टाफ।</li>
            <li><strong>सिनेमा और नाटक:</strong> मुख्य अभिनेता की सफलता के पीछे काम करने वाले निर्देशक, कैमरामैन, स्पॉटबॉय, मेकअप आर्टिस्ट और सह-कलाकार।</li>
            <li><strong>राजनीति और समाज सेवा:</strong> बड़े नेता की रैलियों और चुनावी जीत की तैयारी करने वाले जमीनी कार्यकर्ता।</li>
            <li><strong>चिकित्सा क्षेत्र:</strong> सफल शल्य-चिकित्सा (सर्जरी) में मुख्य सर्जन की सहायता करने वाले एनेस्थेटिस्ट और नर्सें।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">खेल व सिनेमा के उदाहरण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">राजनीति व चिकित्सा/शल्य के उदाहरण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch12-q3">
    <div class="q-head" onclick="toggleQ('ch12-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">कवि ने संगतकार की आवाज में जो हिचक बताई है, उसे उसकी असफलता न मानकर 'मनुष्यता' क्यों कहा गया है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>संगतकार में मुख्य गायक से भी ऊँचा और बेहतर गाने की योग्यता व प्रतिभा हो सकती है, किंतु वह कभी जानबूझकर अपनी आवाज़ को मुख्य गायक की आवाज़ से ऊपर नहीं उठने देता।</p>
          <p>उसकी यह हिचक उसकी किसी कमजोरी या अक्षमता की परिचायक नहीं है, बल्कि यह उसके मन में मुख्य गायक के प्रति अपार आदर, गुरु-शिष्य की मर्यादा और निस्वार्थ त्याग की भावना है। वह अपने अहंकार को दबाकर मुख्य गायक की प्रतिष्ठा की रक्षा करता है, इसलिए कवि इसे उसकी कमजोरी न मानकर सर्वोच्च 'मनुष्यता' कहता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">प्रतिभा होते हुए भी स्वयं को संयमित रखने का गुण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मुख्य गायक के सम्मान व त्याग को मनुष्यता मानने का तर्क</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Section -->
  <div class="cbq-section">
    <div class="cbq-header">
      <div class="cbq-badge">CBSE CBQs</div>
      <h3>योग्यता-आधारित उच्च स्तरीय प्रश्न (Competency-Based Questions)</h3>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 1: अभिकथन और कारण (Assertion &amp; Reason)</div>
      <div class="cbq-question">
        <strong>अभिकथन (A):</strong> संगतकार मुख्य गायक के बिखरते हुए आत्मविश्वास को पुनः संबल प्रदान करता है।<br>
        <strong>कारण (R):</strong> जब तारसप्तक में मुख्य गायक का गला बैठने लगता है और उत्साह बुझने लगता है, तब संगतकार अपने ढाढ़स बँधाते स्वर से गीत की टेक को संभाल लेता है।<br>
        <strong>विकल्प:</strong><br>
        (क) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या करता है।<br>
        (ख) (A) और (R) दोनों सही हैं, परंतु (R), (A) की सही व्याख्या नहीं करता।<br>
        (ग) (A) सही है, परंतु (R) गलत है।<br>
        (घ) (A) गलत है, परंतु (R) सही है।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>सही उत्तर: (क)</strong><br>
        <em>व्याख्या:</em> संगतकार मुख्य गायक को कभी अकेला महसूस नहीं होने देता और तारसप्तक की जटिल तानों के समय स्थायी को पकड़कर उसकी गरिमा को गिरने से बचाता है, अतः (R) बिल्कुल सही व्याख्या करता है।
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(outDir, 'ch7.html'), ch7, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch8.html'), ch8, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch9.html'), ch9, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch10.html'), ch10, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch11.html'), ch11, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch12.html'), ch12, 'utf8');
console.log('Generated ch7.html to ch12.html (Kshitij Poetry complete)');
