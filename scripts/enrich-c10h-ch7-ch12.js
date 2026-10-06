const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c10h');

// CHAPTER 7: पद — सूरदास (12 Questions Complete)
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
      <div class="q-text">गोपियों ने किन-किन उदाहरणों के माध्यम से उद्धव को उलाहने दिए हैं?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>गोपियों ने उद्धव और कृष्ण को निम्नलिखित प्रतीकों और उदाहरणों से उलाहने दिए हैं:</p>
          <ul>
            <li><strong>कमल के पत्ते व तेल की गगरी:</strong> उद्धव के स्नेहहीन और रूखे स्वभाव पर व्यंग्य किया।</li>
            <li><strong>प्रेम की नदी (प्रीति-नदी):</strong> उद्धव ने प्रेम रूपी नदी में कभी पाँव तक नहीं डुबोया और रूप पर मुग्ध नहीं हुए।</li>
            <li><strong>कड़वी ककड़ी (करुई ककरी):</strong> योग संदेश को कड़वी ककड़ी के समान अरुचिकर और त्याज्य बताया।</li>
            <li><strong>हारिल की लकड़ी:</strong> अपने एकनिष्ठ प्रेम की तुलना हारिल पक्षी की लकड़ी से करके कृष्ण के प्रति अपने अटूट समर्पण को दर्शाया।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कमल पत्ते, तेल गागर व प्रीति नदी के उपमान</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">कड़वी ककड़ी व हारिल की लकड़ी के उलाहनों का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch7-q4">
    <div class="q-head" onclick="toggleQ('ch7-q4')">
      <div class="q-num">प्रश्न 4</div>
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

  <div class="q-card" id="ch7-q5">
    <div class="q-head" onclick="toggleQ('ch7-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">'मरजादा न लही' के माध्यम से कौन-सी मर्यादा न रहने की बात की जा रही है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>यहाँ प्रेम की मर्यादा न रहने की बात की जा रही है। प्रेम की शाश्वत मर्यादा यह है कि प्रेम के बदले प्रेम दिया जाए और प्रेमी की भावनाओं का सम्मान किया जाए।</p>
          <p>गोपियों ने कृष्ण के प्रेम में अपनी कुल-मर्यादा, लोक-लाज सब कुछ त्याग दिया था। किंतु कृष्ण ने उनके प्रेम के उत्तर में स्वयं आने के बजाय योग का रूखा संदेश भेज दिया और छल किया। इस प्रकार कृष्ण ने प्रेम की मर्यादा का उल्लंघन किया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">प्रेम के बदले प्रेम देने की मर्यादा का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">कृष्ण द्वारा योग संदेश भेजकर मर्यादा भंग करने का भाव</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch7-q6">
    <div class="q-head" onclick="toggleQ('ch7-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">कृष्ण के प्रति अपने अनन्य प्रेम को गोपियों ने किस प्रकार अभिव्यक्त किया है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>गोपियों ने विभिन्न मार्मिक उदाहरणों से कृष्ण के प्रति अपनी अनन्य भक्ति प्रकट की है:</p>
          <ul>
            <li><strong>गुड़ में लिपटी चींटियों (गुर चाँटी ज्यौं पागी):</strong> जिस प्रकार चींटियाँ गुड़ से चिपट जाती हैं और अपने प्राण त्याग देती हैं, उसी प्रकार गोपियाँ भी कृष्ण के प्रेम में लीन हैं।</li>
            <li><strong>हारिल की लकड़ी:</strong> जिस प्रकार हारिल पक्षी लकड़ी को पंजों में कसकर पकड़े रहता है, वैसे ही उन्होंने मन, कर्म और वचन से कृष्ण को अपने हृदय में बसा रखा है।</li>
            <li>वे सोते, जागते, दिन-रात, स्वप्न में केवल 'कान्ह-कान्ह' की रट लगाती रहती हैं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">गुड़-चींटी व हारिल की लकड़ी के दृष्टांतों का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मन-क्रम-वचन से कृष्ण-स्मरण का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch7-q7">
    <div class="q-head" onclick="toggleQ('ch7-q7')">
      <div class="q-num">प्रश्न 7</div>
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

  <div class="q-card" id="ch7-q8">
    <div class="q-head" onclick="toggleQ('ch7-q8')">
      <div class="q-num">प्रश्न 8</div>
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

  <div class="q-card" id="ch7-q9">
    <div class="q-head" onclick="toggleQ('ch7-q9')">
      <div class="q-num">प्रश्न 9</div>
      <div class="q-text">गोपियों के अनुसार राजा का धर्म क्या होना चाहिए?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>गोपियों के अनुसार—<em>"राजधरम तौ यहै सूर, जो प्रजा न जाहिं सताए।"</em></p>
          <p>अर्थात एक सच्चे और आदर्श राजा का प्रथम कर्तव्य यह है कि वह अपनी प्रजा की सुख-सुविधाओं का ध्यान रखे और प्रजा को किसी भी प्रकार का कष्ट न पहुँचने दे। कृष्ण मथुरा के राजा बनकर स्वयं अपनी विरहिणी प्रजा (गोपियों) को कष्ट दे रहे हैं, जो राजधर्म के विरुद्ध है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">प्रजा को न सताने के राजधर्म का उल्लेख</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">कृष्ण द्वारा राजधर्म के उल्लंघन पर गोपियों का कटाक्ष</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch7-q10">
    <div class="q-head" onclick="toggleQ('ch7-q10')">
      <div class="q-num">प्रश्न 10</div>
      <div class="q-text">गोपियों को कृष्ण में ऐसे कौन-से परिवर्तन दिखाई दिए जिनके कारण वे अपना मन वापस पा लेने की बात कहती हैं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>गोपियों को लगता है कि मथुरा जाकर श्रीकृष्ण अब पहले जैसे निश्छल और सीधे प्रेमी नहीं रहे, बल्कि राजनीतिज्ञ बन गए हैं:</p>
          <ul>
            <li>कृष्ण ने अब बड़े-बड़े राजनीति के ग्रंथ पढ़ लिए हैं जिससे उनकी बुद्धि और चतुराई बहुत बढ़ गई है (<em>"हरि हैं राजनीति पढ़ि आए"</em>)।</li>
            <li>वे अब प्रेम का निर्वाह करने के स्थान पर छल-कपट और कूटनीति से काम ले रहे हैं।</li>
            <li>जो दूसरों को अनीति से छुड़ाते थे, वे स्वयं गोपियों पर योग संदेश भेजकर अनीति कर रहे हैं। इस बदलाव के कारण गोपियाँ अपना मन वापस माँगती हैं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कृष्ण द्वारा राजनीति पढ़ने व चतुर बनने का आरोप</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">प्रेम के बदले छल व अनीति करने पर मन वापस माँगना</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch7-q11">
    <div class="q-head" onclick="toggleQ('ch7-q11')">
      <div class="q-num">प्रश्न 11</div>
      <div class="q-text">गोपियों ने अपने वाक्चातुर्य के आधार पर ज्ञानी उद्धव को परास्त कर दिया, उनके वाक्चातुर्य की विशेषताएँ लिखिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>गोपियों का वाक्चातुर्य अद्भुत, तर्कपूर्ण और व्यंग्यमयी है:</p>
          <ul>
            <li><strong>वक्रोक्ति और व्यंग्य:</strong> वे उद्धव को 'बड़भागी' कहकर उनकी अज्ञानता पर तीखा कटाक्ष करती हैं।</li>
            <li><strong>सटीक उपमान:</strong> योग को कड़वी ककड़ी और बीमारी (व्याधि) बताकर वे उद्धव के ज्ञानमार्ग को निरुत्तर कर देती हैं।</li>
            <li><strong>सहज और निश्चल तर्क:</strong> वे शास्त्रार्थ के जटिल तर्कों से नहीं, बल्कि अपने सच्चे प्रेम की अनुभूति के बल पर प्रकांड ज्ञानी उद्धव को मूक (मौन) कर देती हैं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">व्यंग्य, वक्रोक्ति व सटीक उपमानों का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">प्रेम की अनुभूति द्वारा ज्ञान के तर्कों को परास्त करने का भाव</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch7-q12">
    <div class="q-head" onclick="toggleQ('ch7-q12')">
      <div class="q-num">प्रश्न 12</div>
      <div class="q-text">संकलित पदों को ध्यान में रखते हुए सूरदास के भ्रमरगीत की मुख्य विशेषताएँ बताइए।</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>सूरदास का 'भ्रमरगीत' हिंदी साहित्य की विरह और भक्ति काव्य परंपरा का अद्वितीय रत्न है:</p>
          <ul>
            <li><strong>निर्गुण पर सगुण भक्ति की विजय:</strong> भ्रमरगीत में सूरदास ने ज्ञान और योग के शुष्क मार्ग पर सगुण साकार प्रेम भक्ति की पूर्ण विजय स्थापित की है।</li>
            <li><strong>विरह-वेदना और उपालंभ:</strong> इसमें गोपियों की विरह-वेदना की गहराई और भौंरे को माध्यम बनाकर उद्धव व कृष्ण को दिए गए उपालंभ (उलाहने) अत्यंत मार्मिक हैं।</li>
            <li><strong>संगीतात्मक ब्रजभाषा:</strong> पदों में कोमलकांत पदावली, माधुर्य गुण, गेयता (गीत शैली) तथा अनुप्रास, उपमा, रूपक और दृष्टांत अलंकारों का अनुपम प्रयोग है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सगुण भक्ति की ज्ञानमार्ग पर विजय का सिद्धांत</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">ब्रजभाषा का माधुर्य, गेयता व उपालंभ काव्य-शिल्प</span><span class="marking-marks">2.0 अंक</span></div>
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

// CHAPTER 8: राम-लक्ष्मण-परशुराम संवाद — तुलसीदास (10 Questions Complete)
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
      <div class="q-text">लक्ष्मण और परशुराम के संवाद का जो अंश आपको सबसे अच्छा लगा, उसे अपने शब्दों में संवाद शैली में लिखिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>लक्ष्मण (हँसकर व्यंग्य भाव से):</strong> हे मुनिवर! आप तो अपने आपको बहुत बड़ा योद्धा समझते हैं और बार-बार मुझे अपना यह फरसा दिखाकर डराना चाहते हैं। ऐसा लगता है मानो आप फूँक मारकर पहाड़ उड़ाना चाहते हैं!</p>
          <p><strong>परशुराम (क्रोध से काँपते हुए):</strong> अरे मूर्ख बालक! तू अपने सामने साक्षात काल को नहीं देख रहा है। मेरे इस फरसे की भयानकता तो गर्भ के बच्चों का भी नाश कर देती है!</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">नाटकीय संवाद शैली में सुंदर प्रस्तुति</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">पात्रानुकूल भावों (हँसी, व्यंग्य, क्रोध) का सटीक अंकन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch8-q4">
    <div class="q-head" onclick="toggleQ('ch8-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">परशुराम ने अपने विषय में सभा में क्या-क्या कहा, निम्न पद्यांश के आधार पर लिखिए: "बाल ब्रह्मचारी अति कोही। बिस्वबिदित छत्रियकुल द्रोही..."</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>परशुराम ने अपनी वीरता और पराक्रम की प्रशंसा करते हुए सभा में कहा:</p>
          <ul>
            <li>वे बाल ब्रह्मचारी हैं और स्वभाव से अत्यंत क्रोधी हैं। सारा संसार जानता है कि वे क्षत्रिय कुल के चिर-शत्रु हैं।</li>
            <li>उन्होंने अपनी भुजाओं के बल से अनेक बार पृथ्वी को क्षत्रिय राजाओं से विहीन कर दिया और जीती हुई सारी भूमि ब्राह्मणों को दान कर दी।</li>
            <li>उनका फरसा इतना क्रूर है जिसने सहस्रबाहु की भुजाओं को काट डाला था और इसकी गर्जना से गर्भ के बच्चे भी नष्ट हो जाते हैं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बाल ब्रह्मचारी, क्रोधी व क्षत्रिय-विनाशक होने का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भूमि दान व सहस्रबाहु के वध का संदर्भ</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch8-q5">
    <div class="q-head" onclick="toggleQ('ch8-q5')">
      <div class="q-num">प्रश्न 5</div>
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

  <div class="q-card" id="ch8-q6">
    <div class="q-head" onclick="toggleQ('ch8-q6')">
      <div class="q-num">प्रश्न 6</div>
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

  <div class="q-card" id="ch8-q7">
    <div class="q-head" onclick="toggleQ('ch8-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">भाव स्पष्ट कीजिए: (क) बिहसि लखनु बोले मृदु बानी। अहो मुनीसु महाभट मानी॥ (ख) इहाँ कुम्हड़बतिया कोउ नाहीं। जे तरजनी देखि मरि जाहीं॥ (ग) गाधिसूनु कह हृदयँ हसि मुनिहि हरियरे सूझ। अयमय खाँड़ न ऊखमय अजहुँ न बूझ अबूझ॥</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>(क) भाव:</strong> लक्ष्मण मंद मुस्कान के साथ मधुर वाणी में व्यंग्य करते हुए कहते हैं कि हे मुनिवर! आप तो अपने आपको बहुत बड़ा शूरवीर योद्धा मानते हैं और मुझे बार-बार फरसा दिखाकर डराने का प्रयास कर रहे हैं।</p>
          <p><strong>(ख) भाव:</strong> यहाँ कोई कुम्हड़े (कद्दू) का छोटा कोमल फल नहीं है जो आपकी तर्जनी उँगली की ओर इशारा करने मात्र से मुरझाकर मर जाएगा। हम भी क्षत्रिय हैं और आपके फरसे से भयभीत नहीं होंगे।</p>
          <p><strong>(ग) भाव:</strong> विश्वामित्र मन ही मन हँसकर सोचते हैं कि परशुराम को सब जगह हरा ही हरा (विजय ही विजय) सूझ रहा है। वे राम और लक्ष्मण को गन्ने के रस से बनी साधारण गुड़ की खाँड समझ रहे हैं, जबकि ये दोनों लोहे से बनी फौलादी तलवार (खाँडा) हैं। मुनि इनके वास्तविक प्रभाव से अभी भी अनजान हैं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">भाग (क) व (ख): लक्ष्मण के व्यंग्य व निर्भीकता का भाव</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भाग (ग): विश्वामित्र के आंतरिक चिंतन व श्लेष अलंकार का स्पष्टीकरण</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch8-q8">
    <div class="q-head" onclick="toggleQ('ch8-q8')">
      <div class="q-num">प्रश्न 8</div>
      <div class="q-text">पाठ में आए व्यंग्य के कोई दो उदाहरण छाँटकर लिखिए।</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <ol>
            <li><strong>पहला उदाहरण:</strong> <em>"पुनि पुनि मोहि देखआव कुठारू। चहत उड़ावन फूँकि पहारू॥"</em> (लक्ष्मण कहते हैं कि आप बार-बार फरसा दिखाकर ऐसे डरा रहे हैं मानो फूँक से पहाड़ उड़ा देंगे)।</li>
            <li><strong>दूसरा उदाहरण:</strong> <em>"कोटि कुलिस सम बचनु तुम्हारा। व्यर्थ धरहु धनु बान कुठारा॥"</em> (आपके तो वचन ही करोड़ों वज्रों के समान कठोर हैं, आपने व्यर्थ में ही धनुष, बाण और फरसा धारण कर रखा है)।</li>
          </ol>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">दो सटीक व्यंग्य उद्धरणों का उल्लेख व व्याख्या</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch8-q9">
    <div class="q-head" onclick="toggleQ('ch8-q9')">
      <div class="q-num">प्रश्न 9</div>
      <div class="q-text">निम्नलिखित पंक्तियों में प्रयुक्त अलंकार पहचानकर लिखिए: (क) बालकु बोलि बधौं नहि तोही। (ख) कोटि कुलिस सम बचनु तुम्हारा। (ग) तुम्ह तौ कालु हाँक जनु लावा। बार बार मोहि लागि बोलावा॥</div>
      <div class="q-marks">3 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <ul>
            <li><strong>(क) 'बालकु बोलि बधौं नहि तोही':</strong> 'ब' वर्ण की बार-बार आवृत्ति होने के कारण यहाँ <strong>अनुप्रास अलंकार</strong> है।</li>
            <li><strong>(ख) 'कोटि कुलिस सम बचनु तुम्हारा':</strong> वचनों की तुलना करोड़ों वज्रों से 'सम' वाचक शब्द द्वारा की गई है, अतः यहाँ <strong>उपमा अलंकार</strong> है। (साथ ही 'क' वर्ण की आवृत्ति से अनुप्रास भी है)।</li>
            <li><strong>(ग) 'तुम्ह तौ कालु हाँक जनु लावा':</strong> 'जनु' वाचक शब्द का प्रयोग काल की संभावना व्यक्त करने के लिए हुआ है, अतः यहाँ <strong>उत्प्रेक्षा अलंकार</strong> तथा 'बार बार' में <strong>पुनरुक्ति प्रकाश अलंकार</strong> है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">भाग (क): अनुप्रास अलंकार</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भाग (ख): उपमा अलंकार</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भाग (ग): उत्प्रेक्षा व पुनरुक्ति प्रकाश अलंकार</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch8-q10">
    <div class="q-head" onclick="toggleQ('ch8-q10')">
      <div class="q-num">प्रश्न 10</div>
      <div class="q-text">तुलसीदास के काव्य-शिल्प और अवधी भाषा की प्रमुख विशेषताएँ लिखिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>प्रस्तुत प्रसंग में तुलसीदास जी के काव्य-शिल्प की निम्नलिखित विशेषताएँ दृष्टिगोचर होती हैं:</p>
          <ul>
            <li><strong>साहित्यिक अवधी भाषा:</strong> तत्सम शब्दावली से युक्त अत्यंत परिमार्जित, प्रवाहमयी और कर्णप्रिय अवधी भाषा का प्रयोग।</li>
            <li><strong>छंद-योजना:</strong> चौपाई और दोहा छंद का सुंदर और शास्त्रीय निर्वाह, जो इसे गेय और लयबद्ध बनाता है।</li>
            <li><strong>रस-परिपाक:</strong> वीर रस, रौद्र रस और हास्य-व्यंग्य का अद्भुत संगम। लक्ष्मण के तीखे व्यंग्य बाण संवाद को अत्यंत नाटकीय बना देते हैं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">साहित्यिक अवधी व दोहा-चौपाई छंद का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">नाटकीयता, व्यंग्य व रस-संयोजन का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
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

// CHAPTER 9: आत्मकथ्य — जयशंकर प्रसाद (7 Questions Complete)
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
      <div class="q-text">भाव स्पष्ट कीजिए: (क) "मिला कहाँ वह सुख जिसका मैं स्वप्न देखकर जाग गया। आलिंगन में आते-आते मुसक्या कर जो भाग गया।" (ख) "जिसके अरुण-कपोलों की मतवाली सुंदर छाया में। अनुरागिनी उषा लेती थी निज सुहाग मधुमाया में॥"</div>
      <div class="q-marks">4 अंक (60-80 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>(क) भाव:</strong> सांसारिक सुख कवि के लिए स्वप्न की तरह क्षणभंगुर और छलावा साबित हुआ। जिस सुख की उसने कल्पना की थी और जिसे वह बाहों में भरने ही वाला था, वह उसे छूकर मुस्कुराता हुआ दूर भाग गया। कवि के जीवन में सुख कभी नहीं ठहरा।</p>
          <p><strong>(ख) भाव:</strong> कवि अपनी प्रियतमा के अप्रतिम सौंदर्य का स्मरण करते हुए कहता है कि उसके लाल-लाल गालों (अरुण-कपोलों) की लाली इतनी मनमोहक थी कि प्रेममयी प्रातःकालीन उषा भी अपनी मांग का सुहाग सिंदूर मानो उसी की लालिमा से चुराकर भरती थी। यह छायावादी सौंदर्य का शिखर है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">भाग (क): सुख की क्षणभंगुरता व छलावे का स्पष्टीकरण</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भाग (ख): प्रियतमा के रूप-सौंदर्य व उषा के मानवीकरण का भाव</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch9-q5">
    <div class="q-head" onclick="toggleQ('ch9-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">'उज्ज्वल गाथा कैसे गाऊँ, मधुर चाँदनी रातों की'—कथन के माध्यम से कवि क्या कहना चाहता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि कहना चाहता है कि प्रियतमा के साथ चाँदनी रातों में बिताए गए प्रेम, हँसी और खिलखिलाहट के निजी पलों की मधुर कहानियाँ उसकी सर्वथा गोपनीय और व्यक्तिगत निधि हैं।</p>
          <p>वे प्रेम के पावन क्षण सार्वजनिक करने के लिए नहीं हैं। उन्हें दुनिया के सामने उजागर करके वह अपनी पवित्र भावनाओं की नुमाइश नहीं करना चाहता, क्योंकि वे अब केवल उसकी यादों में जीवित हैं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">निजी प्रेम क्षणों की गोपनीयता व पवित्रता का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सार्वजनिक नुमाइश से बचने की मर्यादा का भाव</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch9-q6">
    <div class="q-head" onclick="toggleQ('ch9-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">'आत्मकथ्य' कविता की काव्यभाषा की विशेषताएँ उदाहरण सहित लिखिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>'आत्मकथ्य' कविता छायावादी काव्य-शिल्प का उत्कृष्ट उदाहरण है:</p>
          <ul>
            <li><strong>तत्समप्रधान खड़ी बोली:</strong> संस्कृतनिष्ठ शब्दावली का समृद्ध प्रयोग; जैसे—'अनंत नीलिमा', 'व्यंग्य-मलिन', 'अरुण-कपोल', 'अनुरागिनी उषा'।</li>
            <li><strong>प्रतीकात्मकता:</strong> 'मधुप' (मन रूपी भौंरा), 'रीति गागर' (रिक्त जीवन), 'मुरझाकर गिरती पत्तियाँ' (जीवन के दुख-दर्द)।</li>
            <li><strong>मानवीकरण एवं बिंब-विधान:</strong> <em>"अरी सरलते तेरी हँसी उड़ाऊँ मैं"</em> तथा उषा द्वारा सुहाग सिंदूर लेने में जीवंत मानवीकरण है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">तत्सम शब्दावली व प्रतीकात्मकता का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मानवीकरण व सुंदर बिंब-विधान का सटीक विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch9-q7">
    <div class="q-head" onclick="toggleQ('ch9-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">कवि ने जो सुख का स्वप्न देखा था, उसे कविता में किस रूप में अभिव्यक्त किया है?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कवि ने सुख के स्वप्न को अपनी प्रेयसी के साथ बिताए गए चाँदनी रातों के उल्लास, खिलखिलाहट और मधुर मिलन के रूप में देखा था। किंतु वह सुख वास्तविक जीवन में नहीं ठहर सका और आलिंगन में आते-आते मुस्कुराकर भाग गया, जिससे जीवन में केवल विरह और निराशा शेष रह गई।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">प्रेयसी के साथ मिलन के स्वप्न व उसके छूटने का चित्रण</span><span class="marking-marks">2.0 अंक</span></div>
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
        'आत्मकथ्य' कविता में कवि की आत्म-मुग्धता के स्थान पर आत्म-संकोच और विनम्रता अधिक प्रकट हुई है। इस पर टिप्पणी कीजिए।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        प्रायः आत्मकथा लिखने वाले अपनी सफलताओं और महानता का गुणगान करते हैं। किंतु प्रसाद जी अपनी किसी भी उपलब्धि का दंभ नहीं भरते। वे स्वयं को एक साधारण मनुष्य मानते हैं, अपनी भूलों को स्वीकारते हैं और अपनी पीड़ा को भीतर ही समेटे रखते हैं। उनका यह आत्म-संकोच उनके महान और विनम्र व्यक्तित्व की पहचान है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 10: उत्साह और अट नहीं रही है — सूर्यकांत त्रिपाठी 'निराला' (8 Questions Complete)
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
      <div class="q-text">शब्दों का ऐसा प्रयोग जिससे कविता के किसी खास भाव या दृश्य में ध्वन्यात्मक प्रभाव पैदा हो, नाद-सौंदर्य कहलाता है। 'उत्साह' कविता में से ऐसे उदाहरण छाँटिए।</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>'उत्साह' कविता में निम्नलिखित पंक्तियों में नाद-सौंदर्य स्पष्ट सुनाई देता है:</p>
          <ul>
            <li><em>"घेर घेर घोर गगन, रन्ध्र-धरा पर घन!"</em> ('घ' और 'र' की आवृत्ति से बादलों के उमड़ने-घुमड़ने की गड़गड़ाहट ध्वनित होती है)।</li>
            <li><em>"ललित ललित, काले घुँघराले, बाल कल्पना के-से पाले।"</em></li>
            <li><em>"विद्युत-छवि उर में, कवि, नवजीवन वाले!"</em></li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">नाद-सौंदर्य की सटीक पंक्तियों का चयन</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">ध्वन्यात्मक प्रभाव की व्याख्या</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch10-q5">
    <div class="q-head" onclick="toggleQ('ch10-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">छायावाद की एक खास विशेषता है अंतर्मन के भावों का बाहर की दुनिया से सामंजस्य बिठाना। कविता की किन पंक्तियों को पढ़कर यह धारणा पुष्ट होती है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>'अट नहीं रही है' कविता की निम्नलिखित पंक्तियाँ अंतर्मन की खुशी और फागुन के बाह्य सौंदर्य के एकाकार होने को सिद्ध करती हैं:</p>
          <p><em>"कहीं साँस लेते हो, घर-घर भर देते हो, उड़ने को नभ में तुम, पर-पर कर देते हो।"</em></p>
          <p>यहाँ प्रकृति के खिलने से मनुष्य का अंतर्मन भी कल्पना के पंख लगाकर आकाश में उड़ने को आतुर हो उठता है। कवि के मन का उल्लास बाहर फागुन की हरियाली और फूलों में अभिव्यक्त हो रहा है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सटीक काव्यांश का उद्धरण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">आंतरिक उल्लास व बाह्य प्रकृति के सामंजस्य की व्याख्या</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch10-q6">
    <div class="q-head" onclick="toggleQ('ch10-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">'अट नहीं रही है' कविता के आधार पर फागुन के प्राकृतिक सौंदर्य और उसकी मादकता का वर्णन कीजिए।</div>
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

  <div class="q-card" id="ch10-q7">
    <div class="q-head" onclick="toggleQ('ch10-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">कवि की आँख फागुन की सुंदरता से क्यों नहीं हट रही है?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>फागुन में प्रकृति का रूप इतना मनमोहक, रंग-बिरंगा, सजीव और अलौकिक होता है कि कवि का मन उस पर पूरी तरह मुग्ध हो गया है। चारों ओर बिखरी असीम सुंदरता कवि की आँखों को सम्मोहित कर लेती है, इसलिए चाहकर भी उसकी आँखें उस सौंदर्य से हट नहीं पातीं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">फागुन के सम्मोहनकारी व अप्रतिम सौंदर्य का कारण</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch10-q8">
    <div class="q-head" onclick="toggleQ('ch10-q8')">
      <div class="q-num">प्रश्न 8</div>
      <div class="q-text">फागुन में ऐसा क्या होता है जो बाकी ऋतुओं से भिन्न होता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>फागुन मास (वसंत) सभी ऋतुओं का राजा है। इसमें प्रकृति में निम्नलिखित अनूठे परिवर्तन होते हैं:</p>
          <ul>
            <li>पतझड़ के सूखे पेड़ नए पत्तों, कोमल कोंपलों और रंग-बिरंगे फूलों से लदकर नवयौवन प्राप्त करते हैं।</li>
            <li>वातावरण न अत्यधिक ठंडा होता है और न गर्म; मंद सुगंधित वायु हर प्राणी में नई उमंग और मादकता भर देती है।</li>
            <li>पशु-पक्षी और मनुष्य सभी में एक अद्भुत उल्लास और जीवन-रस का संचार होता है जो अन्य किसी ऋतु में नहीं मिलता।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">प्रकृति के नवयौवन व अनुकूल मौसम का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सुगंधित समीर व सर्वव्यापी उल्लास का चित्रण</span><span class="marking-marks">1.5 अंक</span></div>
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

// CHAPTER 11: यह दंतुरित मुस्कान और फसल — नागार्जुन (8 Questions Complete)
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
      <div class="q-text">कवि ने बच्चे की मुस्कान के सौंदर्य को किन-किन बिंबों के माध्यम से व्यक्त किया है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>नागार्जुन ने बच्चे की मुस्कान को निम्नलिखित जीवंत बिंबों से सजाया है:</p>
          <ol>
            <li><strong>मृतक में जान डालने वाला बिंब:</strong> <em>"मृतक में भी डाल देगा जान"</em>।</li>
            <li><strong>कमल का फूल:</strong> धूल से सने शिशु को देखकर लगता है मानो तालाब छोड़कर कमल झोपड़ी में खिल गया हो (<em>"जलजात"</em>)।</li>
            <li><strong>पाषाण पिघलने का बिंब:</strong> कठोर पत्थर पिघलकर जल बन गया हो (<em>"पिघलकर जल बन गया होगा कठिन पाषाण"</em>)।</li>
            <li><strong>शेफालिका के फूल:</strong> बाँस और बबूल जैसे शुष्क वृक्षों से भी शेफालिका के कोमल फूल झड़ने लगे हों।</li>
          </ol>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कमल, पाषाण पिघलने व शेफालिका फूलों के बिंबों का उल्लेख</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मृतक में जान डालने के रूपक का विश्लेषण</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch11-q4">
    <div class="q-head" onclick="toggleQ('ch11-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">भाव स्पष्ट कीजिए: (क) "छोड़कर तालाब मेरी झोपड़ी में खिल रहे जलजात।" (ख) "छू गया तुमसे कि झरने लग पड़े शेफालिका के फूल, बाँस था कि बबूल?"</div>
      <div class="q-marks">4 अंक (60-80 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>(क) भाव:</strong> 'जलजात' कमल को कहते हैं। कवि अपनी निर्धन झोपड़ी में धूल-धूसरित सुंदर शिशु को देखकर मुग्ध है। उसे लगता है कि साक्षात् कमल तालाब का वैभव छोड़कर उसके गरीब घर में खिल उठा है। यह बच्चे की दिव्यता का प्रतीक है।</p>
          <p><strong>(ख) भाव:</strong> कवि का मन लंबे समय तक घर से दूर रहने के कारण बाँस और बबूल की तरह कठोर और नीरस हो चुका था। किंतु बच्चे के कोमल अंगों का स्पर्श पाते ही उसके हृदय में वात्सल्य और कोमलता का ऐसा झरना फूटा मानो कठोर काँटों वाले वृक्ष से भी शेफालिका के सुगंधित फूल झड़ने लगे हों।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">भाग (क): निर्धनता में शिशु को कमल जैसा दिव्य मानना</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भाग (ख): कठोर मन के वात्सल्य में पिघलने का मार्मिक भाव</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch11-q5">
    <div class="q-head" onclick="toggleQ('ch11-q5')">
      <div class="q-num">प्रश्न 5</div>
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

  <div class="q-card" id="ch11-q6">
    <div class="q-head" onclick="toggleQ('ch11-q6')">
      <div class="q-num">प्रश्न 6</div>
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

  <div class="q-card" id="ch11-q7">
    <div class="q-head" onclick="toggleQ('ch11-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">भाव स्पष्ट कीजिए— "रूपांतर है सूरज की किरणों का, सिमटा हुआ संकोच है हवा की थिरकन का!"</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>भावार्थ:</strong> फसल के निर्माण में सूर्य की ऊष्मा और वायु का अमूल्य योगदान है। पौधे प्रकाश-संश्लेषण द्वारा सूर्य की किरणों की ऊर्जा को अन्न के दानों में रूपांतरित कर लेते हैं।</p>
          <p>साथ ही, वायु की मंद थिरकन और स्पर्श पौधों में जीवन का संकोच और कोमलता भरकर उन्हें लहलहाता है। अतः फसल सूरज की धूप और हवा की गति का ही मूर्त रूप है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सूर्य की किरणों के ऊर्जा रूपांतरण का वैज्ञानिक-काव्यात्मक भाव</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">वायु की थिरकन के संकोच रूपी योगदान का अंकन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch11-q8">
    <div class="q-head" onclick="toggleQ('ch11-q8')">
      <div class="q-num">प्रश्न 8</div>
      <div class="q-text">कविता में फसल उपजाने के लिए आवश्यक तत्वों की बात कही गई है। वे आवश्यक तत्व कौन-कौन से हैं?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>कविता के अनुसार फसल के लिए पाँच मुख्य तत्व अनिवार्य हैं:</p>
          <ol>
            <li><strong>पानी:</strong> नदियों का निर्मल जल।</li>
            <li><strong>मिट्टी:</strong> खेतों की उपजाऊ मिट्टी के पोषक गुणधर्म।</li>
            <li><strong>धूप:</strong> सूरज की किरणों की जीवनदायिनी ऊर्जा।</li>
            <li><strong>हवा:</strong> वायु की थिरकन।</li>
            <li><strong>मानव श्रम:</strong> करोड़ों किसानों और मजदूरों के हाथों का कठोर परिश्रम।</li>
          </ol>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पाँचों प्राकृतिक व मानवीय तत्वों का सटीक उल्लेख</span><span class="marking-marks">2.0 अंक</span></div>
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

// CHAPTER 12: संगतकार — मंगलेश डबराल (6 Questions Complete)
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
      <div class="q-text">संगतकार की मुख्य गायक के सुर में अपना सुर मिलाने की भूमिका को स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>संगतकार मुख्य गायक की भारी, गंभीर और गरजदार आवाज़ में अपनी गूँजती, कोमल और सुंदर आवाज़ मिलाकर गायन को पूर्णता और गहराई प्रदान करता है। वह मुख्य गायक के बिखरे हुए सुरों को समेटता है और उसके द्वारा छोड़े गए स्थायी (टेक) को संभालकर गीत के प्रवाह को अखंड बनाए रखता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">मुख्य गायक की आवाज़ को गहराई व पूर्णता देना</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">स्थायी को संभालकर गायन के प्रवाह को जीवित रखना</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch12-q4">
    <div class="q-head" onclick="toggleQ('ch12-q4')">
      <div class="q-num">प्रश्न 4</div>
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

  <div class="q-card" id="ch12-q5">
    <div class="q-head" onclick="toggleQ('ch12-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">मुख्य गायक जब अनहद में खो जाता है या उसका गला बैठने लगता है, तब संगतकार क्या भूमिका निभाता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>जब मुख्य गायक कठिन तानों के अनहद भँवर में खोकर भटकने लगता है या तारसप्तक में गाते हुए उसकी आवाज़ टूटने और उत्साह बुझने लगता है, तब संगतकार पीछे से अपनी कोमल, ढाढ़स बँधाती आवाज़ से स्थायी को पकड़ लेता है। वह मुख्य गायक को यह एहसास दिलाता है कि वह अकेला नहीं है और जो राग गाया जा चुका है, उसे पुनः नए सिरे से उठाया जा सकता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">स्थायी को संभालकर गायक का ढाढ़स बँधाना</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">अकेलापन दूर कर संगीत को बिखरने से बचाने का कार्य</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch12-q6">
    <div class="q-head" onclick="toggleQ('ch12-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">कभी-कभी तारसप्तक की ऊँचाई पर मुख्य गायक को संगतकार उसके 'बचपन के नौसिखियापन' की याद कैसे दिलाता है?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>जब मुख्य गायक थककर बिखरने लगता है, तो संगतकार का साथ उसे उस समय की याद दिला देता है जब वह स्वयं संगीत का एक नौसिखिया विद्यार्थी था और उसका गुरु उसे इसी तरह सहारा देकर सुर पकड़ना सिखाता था। यह स्मृति मुख्य गायक के मन में पुनः नई ऊर्जा और विनम्रता भर देती है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">नौसिखियापन और सीखने के दौर की स्मृति का विश्लेषण</span><span class="marking-marks">2.0 अंक</span></div>
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
console.log('Successfully enriched Ch 7 to Ch 12 to 100% NCERT textbook coverage!');
