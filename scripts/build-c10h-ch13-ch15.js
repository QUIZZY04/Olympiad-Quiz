const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c10h');

// CHAPTER 13: माता का आँचल — शिवपूजन सहाय
const ch13 = `<section class="chapter-section" id="ch13" data-book="kritika">
  <div class="chapter-header">
    <div class="ch-badge">13</div>
    <div class="chapter-header-info">
      <div class="ch-category">कृतिका भाग-2 — पाठ 1</div>
      <h2>माता का आँचल</h2>
      <p>शिवपूजन सहाय (उपन्यास 'देहाती दुनिया' से) | संस्मरण — ग्रामीण बाल्यकाल, वात्सल्य, पिता-पुत्र का स्नेह और संकट में मातृ-छाया | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch13-q1">
    <div class="q-head" onclick="toggleQ('ch13-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">प्रस्तुत पाठ के आधार पर यह कहा जा सकता है कि बच्चे का अपने पिता से अधिक जुड़ाव था, फिर भी विपदा के समय वह पिता के पास न जाकर माँ की शरण लेता है। आपकी समझ से इसकी क्या वजह हो सकती है?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>भोलानाथ का अधिकांश समय पिता के साथ ही बीतता था—पिता ही उसे नहलाते-धुलाते, पूजा में बिठाते, साथ खिलाते और घुमाने ले जाते थे। माँ से उसका संबंध केवल दूध पीने तक सीमित प्रतीत होता था।</p>
          <p>किंतु जब बच्चे पर साँप का भीषण भय और विपदा आई, तो वह बाहर बैठे पिता के पास न जाकर सीधा अंदर माँ की गोद में जाकर छिप गया। इसके प्रमुख कारण निम्नलिखित हैं:</p>
          <ul>
            <li><strong>सुरक्षा और शांति की चरम अनुभूति:</strong> माँ का आँचल बच्चे के लिए प्रेम, ममता और सुरक्षा का सबसे अभेद्य किला होता है। संकट की घड़ी में माँ के हृदय की धड़कन बच्चे के भय को तुरंत शांत कर देती है।</li>
            <li><strong>सहज वात्सल्य और ममता:</strong> माँ के आँचल में जो ममतामयी गर्माहट, कोमलता और अश्रुपूरित सहानुभूति मिलती है, वह पिता के संरक्षण में नहीं मिल पाती। माँ बच्चे के दर्द को देखकर स्वयं रो पड़ती है और अपनी छाती से चिपका लेती है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पिता के साथ दैनिक दिनचर्या व जुड़ाव का संदर्भ</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">माँ के आँचल में सुरक्षा, ममता व शांति की मनोवैज्ञानिक व्याख्या</span><span class="marking-marks">2.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch13-q2">
    <div class="q-head" onclick="toggleQ('ch13-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">आपके विचार से भोलानाथ अपने साथियों को देखकर सिसकना क्यों भूल जाता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>बाल-मन स्वभाव से अत्यंत चंचल, खेलप्रिय और साथी-उन्मुख होता है। जब भोलानाथ माँ द्वारा कड़वा तेल लगाने और चोटी गूँथने पर रोने-सिसकने लगता था, तब पिता उसे गोद में उठाकर बाहर लाते थे।</p>
          <p>किंतु जैसे ही भोलानाथ बाहर अपनी हमउम्र बाल-मंडली को तरह-तरह के खेल खेलते और हुल्लड़ मचाते देखता, उसका ध्यान अपने दुख-दर्द से हटकर खेल के आकर्षण में खो जाता था। बाल-मनोविज्ञान के अनुसार साथियों का संग बच्चों के हर दुख को भुला देता है, इसलिए वह तुरंत सिसकना भूल जाता था।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बाल-मन की खेलप्रियता व चंचलता का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मित्र-मंडली के आकर्षण द्वारा दुख भूलने का मनोवैज्ञानिक विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch13-q3">
    <div class="q-head" onclick="toggleQ('ch13-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">'माता का आँचल' शीर्षक की सार्थकता स्पष्ट कीजिए। क्या आप इसके लिए कोई अन्य शीर्षक सुझा सकते हैं?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>शीर्षक की सार्थकता:</strong> यह शीर्षक अत्यंत उपयुक्त, मार्मिक और सार्थक है। पूरे पाठ में भले ही पिता के लाड़-प्यार और बाल-क्रीड़ाओं का विस्तार है, किंतु कहानी का चरम बिंदु (क्लाइमेक्स) वह क्षण है जब साँप से भयभीत होकर लहूलुहान बच्चा अंततः अपनी माँ के आँचल में आकर ही परम शांति और अभय प्राप्त करता है। माँ का आँचल ममता और संरक्षण की पराकाष्ठा है।</p>
          <p><strong>वैकल्पिक शीर्षक:</strong> इसके अन्य उपयुक्त शीर्षक हो सकते हैं—<em>'भोलानाथ का बचपन'</em> अथवा <em>'मेरा बाल्यकाल'</em> अथवा <em>'माँ की ममता'</em>।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">चरम बिंदु (क्लाइमेक्स) के आधार पर औचित्य सिद्ध करना</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सार्थक वैकल्पिक शीर्षक का सुझाव</span><span class="marking-marks">1.0 अंक</span></div>
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
      <div class="cbq-type">CBQ 1: केस-आधारित बाल-संस्कृति तुलना (Competency Question)</div>
      <div class="cbq-question">
        'माता का आँचल' में वर्णित 1930 के दशक के बच्चों के खेल (धूल, मिट्टी, ठीकरे, पत्ते) और आज के बच्चों के डिजिटल खेलों (मोबाइल, वीडियो गेम्स) के बीच अंतर स्पष्ट करते हुए बताइए कि कौन-से खेल बच्चे के सर्वांगीण विकास के लिए अधिक हितकारी हैं?
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        पाठ में वर्णित खेल प्रकृति के सान्निध्य में खेले जाते थे, जिनमें सामूहिक सहयोग, सामाजिक अंतःक्रिया, शारीरिक व्यायाम और असीम रचनात्मकता थी। बच्चे मिट्टी-पानी से जुड़कर जीवन की वास्तविकताओं को सीखते थे।<br>
        इसके विपरीत आज के डिजिटल खेल बच्चों को चारदीवारी में एकाकी, आक्रामक और शारीरिक रूप से निष्क्रिय बना रहे हैं। अतः सर्वांगीण विकास (शारीरिक, मानसिक व सामाजिक) के लिए प्रकृति और साथियों के साथ खेले जाने वाले पारंपरिक खेल ही अधिक हितकारी हैं।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 14: साना-साना हाथ जोड़ि... — मधु कांकरिया
const ch14 = `<section class="chapter-section" id="ch14" data-book="kritika">
  <div class="chapter-header">
    <div class="ch-badge">14</div>
    <div class="chapter-header-info">
      <div class="ch-category">कृतिका भाग-2 — पाठ 2</div>
      <h2>साना-साना हाथ जोड़ि...</h2>
      <p>मधु कांकरिया | यात्रा-वृत्तांत — पूर्वोत्तर भारत (सिक्किम, हिमालय, गंतोक), प्राकृतिक भव्यता और श्रमसाध्य जीवन की त्रासदी | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch14-q1">
    <div class="q-head" onclick="toggleQ('ch14-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">गंतोक को 'मेहनतकश बादशाहों का शहर' क्यों कहा गया है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>गंतोक (सिक्किम) एक ऐसा पर्वतीय शहर है जिसका सौंदर्य वहाँ के निवासियों के कठोर परिश्रम और पसीने से निर्मित हुआ है:</p>
          <ul>
            <li>वहाँ के स्त्री-पुरुष और बच्चे विषम भौगोलिक परिस्थितियों, बर्फीली ठंड और पथरीले रास्तों के बीच भी निरंतर कठिन श्रम करते हैं।</li>
            <li>इतनी विपदाओं और परिश्रम के बावजूद वे कभी निराश नहीं होते, बल्कि राजाओं (बादशाहों) की तरह स्वाभिमान, मस्ती और संतोष के साथ जीवन जीते हैं। उनके अथक श्रम ने ही गंतोक को इतना सुरम्य बनाया है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कठिन भौगोलिक परिस्थितियों में कठोर परिश्रम का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">स्वाभिमानी, संतुष्ट और बादशाही जीवन-शैली का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch14-q2">
    <div class="q-head" onclick="toggleQ('ch14-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">कभी श्वेत तो कभी रंगीन पताकाओं का फहराना किन अलग-अलग अवसरों की ओर संकेत करता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>सिक्किम में बौद्ध धर्म की मान्यता के अनुसार पताकाएँ फहराई जाती हैं:</p>
          <ul>
            <li><strong>श्वेत पताकाएँ:</strong> जब किसी बौद्ध धर्मावलंबी की मृत्यु होती है, तो उसकी आत्मा की शांति के लिए शहर से दूर किसी पवित्र स्थान पर 108 श्वेत पताकाएँ फहराई जाती हैं। इन पर मंत्र लिखे होते हैं और इन्हें उतारा नहीं जाता, ये अपने-आप नष्ट होती हैं।</li>
            <li><strong>रंगीन पताकाएँ:</strong> जब किसी नए कार्य का शुभ आरंभ किया जाता है, तब मांगलिक प्रतीक के रूप में रंग-बिरंगी पताकाएँ लगाई जाती हैं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">श्वेत पताकाओं का संदर्भ (शोक/शांति)</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">रंगीन पताकाओं का संदर्भ (नए कार्य का शुभारंभ)</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch14-q3">
    <div class="q-head" onclick="toggleQ('ch14-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">पत्थर तोड़ती पहाड़ियों के सौंदर्य और उनके कठिन जीवन के अंतर्विरोध को लेखिका ने किस प्रकार चित्रित किया है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखिका ने प्राकृतिक सौंदर्य के बीच जीवन के कठोर यथार्थ का मार्मिक अंतर्विरोध प्रस्तुत किया है:</p>
          <ul>
            <li>एक ओर हिमालय का स्वर्गीय सौंदर्य, हरी-भरी वादियाँ और कलकल बहते झरने हैं जो मन को मुग्ध कर देते हैं।</li>
            <li>वहीं दूसरी ओर, कोमल काया वाली पहाड़ी स्त्रियाँ पीठ पर बंधी डोको (बड़ी टोकरी) में अपने नन्हें बच्चों को बाँधकर हाथों में हथौड़े और कुदाल लिए कठोर पत्थर तोड़ रही हैं।</li>
            <li>लेखिका को यह देखकर गहरा आघात लगता है कि इस अलौकिक सौंदर्य के बीच 'मातृत्व और श्रम-साधना' एक साथ जीवित है। स्वर्ग जैसी प्रकृति के आँचल में भूख और मौत से जूझता हुआ यह कठिन संघर्ष दिल को दहला देता है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">हिमालयी सौंदर्य बनाम पहाड़ी महिलाओं के श्रम का द्वंद्व</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मातृत्व और कठोर श्रम के संगम का मार्मिक चित्रण</span><span class="marking-marks">1.5 अंक</span></div>
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
      <div class="cbq-type">CBQ 1: पर्यावरण संतुलन और जल संचय (Environmental Competency)</div>
      <div class="cbq-question">
        "प्रकृति ने जल संचय की कितनी अद्भुत व्यवस्था की है!" लेखिका द्वारा किए गए इस कथन के आधार पर बताइए कि हिमालय किस प्रकार संपूर्ण एशिया के लिए जल-स्तंभ का कार्य करता है?
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        सर्दियों में प्रकृति बर्फ के रूप में जल का विशाल संचय करती है। जब ग्रीष्म ऋतु में मैदानी भागों में पानी के लिए त्राहि-त्राहि मचती है, तब यही हिमशिखर धीरे-धीरे पिघलकर पावन नदियों के रूप में बह निकलते हैं और करोड़ों प्यासे कंठों को तृप्त करते हैं। प्रकृति का यह हिम-जल बैंक संपूर्ण एशिया की जीवनरेखा है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 15: मैं क्यों लिखता हूँ? — अज्ञेय
const ch15 = `<section class="chapter-section" id="ch15" data-book="kritika">
  <div class="chapter-header">
    <div class="ch-badge">15</div>
    <div class="chapter-header-info">
      <div class="ch-category">कृतिका भाग-2 — पाठ 3</div>
      <h2>मैं क्यों लिखता हूँ?</h2>
      <p>सच्चिदानंद हीरानंद वात्स्यायन 'अज्ञेय' | निबंध — सर्जनात्मक प्रेरणा, आंतरिक विवशता, हिरोशिमा का आणविक संत्रास और अनुभूति | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch15-q1">
    <div class="q-head" onclick="toggleQ('ch15-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">लेखक के अनुसार प्रत्यक्ष अनुभव की अपेक्षा 'अनुभूति' उनके लेखन में कहीं अधिक मदद करती है, क्यों?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक के अनुसार 'प्रत्यक्ष अनुभव' और 'अनुभूति' में गहरा अंतर होता है:</p>
          <ul>
            <li><strong>प्रत्यक्ष अनुभव:</strong> वह बाह्य घटना है जो आँखों के सामने घटित होती है और हमारी इंद्रियों को छूकर निकल जाती है। यह केवल यथार्थ का साक्षात्कार कराता है।</li>
            <li><strong>अनुभूति:</strong> जब वही अनुभव मन, आत्मा और संवेदना की गहराई में उतरकर लेखक की आंतरिक पीड़ा या भाव बन जाता है, तब वह 'अनुभूति' बनता है। अनुभूति कल्पना और संवेदना के साथ मिलकर रचनाकार को लिखने के लिए आंतरिक रूप से विवश करती है। इसलिए सच्ची रचना प्रत्यक्ष अनुभव से नहीं, बल्कि आंतरिक अनुभूति से जन्म लेती है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">अनुभव और अनुभूति में सूक्ष्म अंतर का प्रतिपादन</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">आंतरिक संवेदना द्वारा सृजन-प्रेरणा का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch15-q2">
    <div class="q-head" onclick="toggleQ('ch15-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">लेखक ने अपने आपको हिरोशिमा के विस्फोट का भोक्ता कब और किस तरह महसूस किया?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक जब जापान के हिरोशिमा नगर में गया, तो उसने अस्पताल में रेडियम से झुलसे लोगों को देखा, किंतु तब वह केवल एक बौद्धिक दर्शक था।</p>
          <p>किंतु एक दिन सड़क पर घूमते हुए उसने जले हुए एक पत्थर पर एक मानव की काली छाया अंकित देखी। उस समय लेखक के मन में वह दृश्य कौंध गया—परमाणु विस्फोट के समय कोई व्यक्ति उस पत्थर पर खड़ा रहा होगा और रेडियोधर्मी किरणों की भीषण भाप ने उस व्यक्ति को भाप बनाकर उड़ा दिया और उसकी छाया पत्थर पर स्थायी रूप से झुलसा दी। इस दृश्य ने लेखक के हृदय को झकझोर दिया और वह स्वयं को हिरोशिमा के विस्फोट का प्रत्यक्ष भोक्ता अनुभव करने लगा।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पत्थर पर मानव छाया देखने की घटना का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">संवेदना द्वारा आंतरिक भोक्ता बनने की प्रक्रिया</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch15-q3">
    <div class="q-head" onclick="toggleQ('ch15-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">'मैं क्यों लिखता हूँ?' के आधार पर बताइए कि लेखक को कौन-सी बातें लिखने के लिए प्रेरित करती हैं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक के अनुसार लिखने की प्रेरणा के दो मुख्य स्रोत होते हैं:</p>
          <ul>
            <li><strong>आंतरिक विवशता (मुख्य प्रेरणा):</strong> अपने भीतर की मानसिक छटपटाहट और भावों को अभिव्यक्त कर उनसे मुक्ति पाना तथा स्वयं को जानना (आत्म-साक्षात्कार)।</li>
            <li><strong>बाह्य दबाव (गौण प्रेरणा):</strong> संपादकों का आग्रह, प्रकाशक का तकाज़ा, प्रशंसकों की माँग तथा कभी-कभी आर्थिक आवश्यकताएँ भी लेखक को लिखने के लिए प्रेरित करती हैं। किंतु सच्चा साहित्य आंतरिक अनुभूति से ही उपजता है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">आंतरिक विवशता व आत्म-साक्षात्कार का बिंदु</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">बाह्य दबाव (संपादक, आर्थिक) का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
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
        <strong>अभिकथन (A):</strong> अज्ञेय जी ने हिरोशिमा पर कविता भारत लौटकर रेलगाड़ी में बैठे-बैठे लिखी थी, हिरोशिमा में नहीं।<br>
        <strong>कारण (R):</strong> सच्चा साहित्य केवल बाह्य घटना के समय नहीं, बल्कि जब वह घटना स्मृति और आंतरिक अनुभूति में परिपक्व हो जाती है, तब सृजित होता है।<br>
        <strong>विकल्प:</strong><br>
        (क) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या करता है।<br>
        (ख) (A) और (R) दोनों सही हैं, परंतु (R), (A) की सही व्याख्या नहीं करता।<br>
        (ग) (A) सही है, परंतु (R) गलत है।<br>
        (घ) (A) गलत है, परंतु (R) सही है।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>सही उत्तर: (क)</strong><br>
        <em>व्याख्या:</em> लेखक ने स्वयं स्वीकार किया कि जब वह अनुभव उनके भीतर एक आर्तनाद बनकर फूटा, तब भारत में रेल के डिब्बे में उन्होंने वह कविता लिखी। अतः (R) बिल्कुल सही व्याख्या करता है।
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(outDir, 'ch13.html'), ch13, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch14.html'), ch14, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch15.html'), ch15, 'utf8');
console.log('Generated ch13.html to ch15.html (Kritika Bhag-2 complete)');
