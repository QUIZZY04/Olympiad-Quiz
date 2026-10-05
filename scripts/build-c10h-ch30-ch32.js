const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c10h');

// CHAPTER 30: हरिहर काका — मिथिलेश्वर
const ch30 = `<section class="chapter-section" id="ch30" data-book="sanchayan">
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
      <div class="q-text">कहानी के आधार पर स्पष्ट कीजिए कि पारिवारिक संबंधों में स्वार्थ और लोभ किस प्रकार जहर घोल रहा है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>'हरिहर काका' कहानी आज के आधुनिक समाज और टूटते पारिवारिक मूल्यों का वीभत्स यथार्थ प्रस्तुत करती है। खून के रिश्ते, जो कभी प्रेम, त्याग और सुरक्षा के आधार हुआ करते थे, आज केवल धन और जमीन-जायदाद के तराजू पर तौले जा रहे हैं।</p>
          <p>भाइयों की पत्नियाँ काका को बचा-खुचा बासी भोजन देती हैं और जब जमीन हाथ से निकलती दिखती है, तो सगे भाई कसाई बन जाते हैं। यह कहानी दर्शाती है कि जहाँ अर्थ-लिप्सा (धन का लोभ) हावी हो जाती है, वहाँ दया, संवेदना और रिश्तों की पवित्रता का दम घुट जाता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">रक्त-संबंधों में धनलोभ के कारण आई गिरावट का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">पारिवारिक उपेक्षा व संवेदनहीनता का समाजशास्त्रीय निष्कर्ष</span><span class="marking-marks">1.5 अंक</span></div>
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
      <div class="cbq-type">CBQ 1: केस-आधारित सामाजिक चेतना (Competency Question)</div>
      <div class="cbq-question">
        कहानी के अंत में हरिहर काका का मौन समाज के किस खोखलेपन पर गहरा प्रहार करता है? एक वृद्ध के रूप में उनकी अंतर्वेदना को स्पष्ट कीजिए।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        काका का मौन कोई साधारण चुप्पी नहीं, बल्कि समस्त मानवीय व्यवस्था, धर्म और रिश्तों के प्रति उनका अगाध तिरस्कार और विरक्ति है। वे अब किसी से कोई बात नहीं करते, केवल शून्य में ताकते रहते हैं। पुलिस के पहरे में जी रहे काका यह दर्शाते हैं कि संपत्ति होते हुए भी आज का वृद्ध कितना अकेला, असुरक्षित और मानसिक रूप से मृतप्राय हो चुका है। उनका मौन समूचे स्वार्थी समाज के गाल पर एक जोरदार तमाचा है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 31: सपनों के-से दिन — गुरदयाल सिंह
const ch31 = `<section class="chapter-section" id="ch31" data-book="sanchayan">
  <div class="chapter-header">
    <div class="ch-badge">31</div>
    <div class="chapter-header-info">
      <div class="ch-category">संचयन भाग-2 — पाठ 2</div>
      <h2>सपनों के-से दिन</h2>
      <p>गुरदयाल सिंह | आत्मकथात्मक संस्मरण — बचपन की अल्हड़ स्मृतियाँ, स्कूल का भय, पीटी मास्टर प्रीतम चंद और हेडमास्टर शर्मा जी | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch31-q1">
    <div class="q-head" onclick="toggleQ('ch31-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">पीटी मास्टर प्रीतम चंद की छवि कैसी थी और हेडमास्टर मदन मोहन शर्मा जी उनके विपरीत कैसे थे?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>दोनों शिक्षकों के व्यक्तित्व में जमीन-आसमान का अंतर था:</p>
          <ul>
            <li><strong>पीटी मास्टर प्रीतम चंद:</strong> ठिगने कद, दुबले-पतले शरीर, चीते जैसी आँखों वाले अत्यंत क्रूर और भयानक अध्यापक थे। वे बात-बात पर बच्चों की खाल खींच लेते थे (क्रूर पिटाई करते थे)। बच्चे उनसे थर-थर काँपते थे और सपने में भी उनके बूटों की आवाज से डरते थे।</li>
            <li><strong>हेडमास्टर मदन मोहन शर्मा जी:</strong> वे अत्यंत सौम्य, शांत, दयालु और सहृदय व्यक्ति थे। उन्होंने कभी किसी बच्चे को छड़ी से नहीं पीटा था। वे हमेशा मीठी जुबान में समझाते थे और बच्चों से अगाध स्नेह रखते थे।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पीटी प्रीतम चंद के कठोर, हिंसक व डरावने रूप का वर्णन</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">हेडमास्टर शर्मा जी की सौम्यता, स्नेह व अहिंसक व्यवहार</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch31-q2">
    <div class="q-head" onclick="toggleQ('ch31-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">पीटी साहब को निलंबित (सस्पेंड) क्यों कर दिया गया था?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>एक दिन कक्षा चार में फारसी पढ़ाते समय बच्चों को शब्द-रूप याद नहीं थे। क्रोधित होकर मास्टर प्रीतम चंद ने सभी बच्चों को कान पकड़वाकर पीठ ऊँची कराकर 'मुर्गा' बना दिया। बच्चे धूप और दर्द से काँपने लगे और गिरने लगे।</p>
          <p>उसी समय हेडमास्टर शर्मा जी वहाँ से गुजरे। नन्हें बच्चों की ऐसी अमानवीय और क्रूर सजा देखकर वे क्रोध से लाल हो गए। उन्होंने चिल्लाकर कहा—<em>"व्हाट आर यू डूइंग? इज इट द वे टू पनिश स्टूडेंट्स?"</em> उन्होंने तुरंत रियासत के शिक्षा विभाग को लिखकर प्रीतम चंद को नौकरी से मुअत्तल (सस्पेंड) कर दिया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">फारसी याद न होने पर बच्चों को मुर्गा बनाने की अमानवीय सजा</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">हेडमास्टर शर्मा जी का हस्तक्षेप और तुरंत निलंबन की कार्रवाई</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch31-q3">
    <div class="q-head" onclick="toggleQ('ch31-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">हेडमास्टर शर्मा जी के कमरे में प्रीतम चंद को तोतों को बादाम खिलाते देखकर बच्चों को कैसा आश्चर्य हुआ?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>निलंबन के दौरान जब बच्चे प्रीतम चंद के कमरे पर कागज़ पहुँचाने गए, तो उन्होंने देखा कि जिस जल्लाद जैसे मास्टर से पूरा स्कूल काँपता था, वह पिंजरे में बंद तोतों से मीठी-मीठी बातें कर रहा था और उन्हें अपने हाथों से छिले हुए बादाम खिला रहा था। बच्चों के लिए यह दृश्य किसी अजूबे से कम नहीं था कि ऐसे कठोर और निर्दयी इंसान के सीने में भी कहीं कोमल भावनाएँ हो सकती हैं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">तोतों से मीठी बातें करने व बादाम खिलाने का आश्चर्य</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">क्रूर शिक्षक के भीतर छिपे कोमल भाव पर बाल-विस्मय</span><span class="marking-marks">1.0 अंक</span></div>
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
      <div class="cbq-type">CBQ 1: आधुनिक बाल-शिक्षा बनाम शारीरिक दंड (Educational Competency)</div>
      <div class="cbq-question">
        वर्तमान शिक्षा व्यवस्था में 'शारीरिक दंड' (कॉर्पोरल पनिशमेंट) को कानूनन प्रतिबंधित क्यों किया गया है? पाठ के आधार पर स्पष्ट कीजिए कि भय और प्रेम में से कौन-सा माध्यम सीखने के लिए अधिक प्रभावी है।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        शारीरिक दंड से बच्चे के मन में विद्यालय, शिक्षकों और पढ़ाई के प्रति स्थायी भय, हीनभावना और घृणा उत्पन्न हो जाती है (जैसा कि लेखक और उनके साथियों को स्कूल किसी यातनागृह जैसा लगता था)। भय से केवल अनुशासन का ढोंग कराया जा सकता है, ज्ञान का विकास नहीं। प्रेम, सहानुभूति और प्रेरणा (जैसा हेडमास्टर शर्मा जी का व्यवहार था) ही बच्चे की स्वाभाविक रचनात्मकता और सीखने की जिज्ञासा को जाग्रत करती है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 32: टोपी शुक्ला — राही मासूम रज़ा
const ch32 = `<section class="chapter-section" id="ch32" data-book="sanchayan">
  <div class="chapter-header">
    <div class="ch-badge">32</div>
    <div class="chapter-header-info">
      <div class="ch-category">संचयन भाग-2 — पाठ 3</div>
      <h2>टोपी शुक्ला</h2>
      <p>डॉ. राही मासूम रज़ा | उपन्यास अंश — सांप्रदायिक सीमाओं से परे बाल-मित्रता, अपनत्व की तलाश, दादी का स्नेह और पारिवारिक एकाकीपन | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch32-q1">
    <div class="q-head" onclick="toggleQ('ch32-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">इफ़्फ़न और टोपी शुक्ला की मित्रता किन बातों पर आधारित थी? दोनों के पारिवारिक परिवेश में क्या भिन्नता थी?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>मित्रता का आधार:</strong> टोपी (हिंदू ब्राह्मण) और इफ़्फ़न (मुस्लिम) की मित्रता धर्म या मजहब की दीवारों से ऊपर उठकर भावनात्मक अपनत्व, सादगी और निश्छल बाल-प्रेम पर टिकी थी। टोपी को अपने घर में जो ममता और प्यार नहीं मिलता था, वह उसे इफ़्फ़न की दादी की गोद में मिलता था।</p>
          <p><strong>पारिवारिक भिन्नता:</strong></p>
          <ul>
            <li>टोपी का परिवार कट्टर कर्मकांडी हिंदू ब्राह्मण परिवार था, जहाँ पिता डॉक्टर थे और दादी अत्यंत सख्त और डाँटने वाली थीं।</li>
            <li>इफ़्फ़न का परिवार सैयद मुस्लिम परिवार था, जहाँ पिता कलेक्टर थे और घर में मुहर्रम की परंपराएँ थीं। दोनों परिवारों के रीति-रिवाज बिल्कुल विपरीत थे।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">भावनात्मक अपनत्व व निश्छल मित्रता का आधार</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">हिंदू-मुस्लिम पारिवारिक पृष्ठभूमि व संस्कारों का अंतर</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch32-q2">
    <div class="q-head" onclick="toggleQ('ch32-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">टोपी ने इफ़्फ़न की दादी के देहांत पर ऐसा क्यों कहा कि "काश! तेरी दादी की जगह मेरी दादी मर जाती"?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>टोपी का यह कथन किसी दुर्भावना से नहीं, बल्कि उसकी गहरी बाल-सुलभ वेदना और अपनत्व की तड़प से निकला था:</p>
          <ul>
            <li>टोपी की अपनी दादी सुभद्रा देवी अत्यंत कठोर, डाँटने-फटकारने वाली और भेदभाव करने वाली महिला थीं, जिनसे टोपी को कभी प्यार नहीं मिला।</li>
            <li>दूसरी ओर, इफ़्फ़न की दादी पूरबिया बोली में टोपी को प्यार से पुचकारती थीं, कहानियाँ सुनाती थीं और उसे असीम वात्सल्य देती थीं।</li>
            <li>इफ़्फ़न की दादी की मृत्यु के साथ टोपी का एकमात्र सच्चा ममता-स्रोत छिन गया और वह बिल्कुल अकेला पड़ गया। इसलिए दुख के अतिरेक में उसने यह बात कही।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">अपनी दादी के रूखेपन व इफ़्फ़न की दादी के अगाध वात्सल्य का अंतर</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">ममता के छिन जाने पर उपजे एकाकीपन की अभिव्यक्ति</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch32-q3">
    <div class="q-head" onclick="toggleQ('ch32-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">नौवीं कक्षा में दो बार फेल होने पर टोपी को किन-किन मानसिक यातनाओं और उपहास का सामना करना पड़ा?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>टोपी नौवीं कक्षा में अपनी किसी लापरवाही के कारण नहीं, बल्कि घर के कामों और टाइफाइड बीमारी के कारण फेल हुआ था। किंतु उसे घर और स्कूल दोनों जगह भीषण अपमान सहना पड़ा:</p>
          <ul>
            <li><strong>घर में उपहास:</strong> घर वाले उसे हर बात पर ताना मारते थे। चाय की एक प्याली तक के लिए उसकी योग्यता पर सवाल उठाए जाते थे।</li>
            <li><strong>स्कूल में साथियों का बिछोह:</strong> उसके पुराने साथी दसवीं में चले गए और वह अपने से छोटे लड़कों के बीच बैठने पर मजबूर हुआ। वे लड़के उस पर फब्तियाँ कसते थे।</li>
            <li><strong>शिक्षकों की उपेक्षा:</strong> मास्टर साहब भी कमजोर लड़कों को समझाते हुए टोपी का नाम लेकर कहते थे—"अगर नहीं पढ़ोगे तो बलभद्र नारायण (टोपी) की तरह इसी क्लास में सड़ते रहोगे।" इस अपमान ने उसके बाल-मन को भीतर तक छलनी कर दिया।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">घर में तानों और हीन व्यवहार का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">स्कूल में नए लड़कों व मास्टरों के उपहास का मार्मिक विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
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
      <div class="cbq-type">CBQ 1: सांस्कृतिक समन्वय और भाषा (Cultural Competency)</div>
      <div class="cbq-question">
        'टोपी शुक्ला' कहानी यह सिद्ध करती है कि मानवीय भावनाएँ और अपनत्व किसी धर्म या भाषा की परिधि में नहीं बँधते। इस कथन के समर्थन में तर्क प्रस्तुत कीजिए।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        टोपी हिंदू कट्टर परिवार का था, किंतु उसे सबसे अधिक सुख मुस्लिम परिवार की दादी की बोली और गोद में मिलता था। वह दादी के मुँह से 'पूरबी बोली' सुनकर तृप्त होता था और अपनी माँ को 'अम्मी' कहने लगा था। प्रेम की कोई भाषा या मजहब नहीं होता; जहाँ हृदय को सच्ची ममता, सम्मान और आत्मीयता मिलती है, आत्मा वहीं अपना घर बना लेती है। यह कहानी भारत की साझी संस्कृति का सबसे गहरा और मानवीय साक्ष्य है।
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(outDir, 'ch30.html'), ch30, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch31.html'), ch31, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch32.html'), ch32, 'utf8');
console.log('Generated ch30.html to ch32.html (Sanchayan Bhag-2 complete)');
