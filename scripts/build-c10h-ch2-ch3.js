const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c10h');

// CHAPTER 2: बालगोबिन भगत (रामवृक्ष बेनीपुरी)
const ch2 = `<section class="chapter-section" id="ch2" data-book="kshitij-gadh">
  <div class="chapter-header">
    <div class="ch-badge">2</div>
    <div class="chapter-header-info">
      <div class="ch-category">क्षितिज भाग-2 (गद्य खंड) — पाठ 2</div>
      <h2>बालगोबिन भगत</h2>
      <p>रामवृक्ष बेनीपुरी | रेखाचित्र — कबीरपंथी संत, कर्मयोग, आडंबर-विरोध और सामाजिक सुधार | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch2-q1">
    <div class="q-head" onclick="toggleQ('ch2-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">खेतीबारी से जुड़े गृहस्थ बालगोबिन भगत अपनी किन चारित्रिक विशेषताओं के कारण 'साधु' कहलाते थे?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>बालगोबिन भगत बाह्य वेशभूषा या संन्यास के आडंबरों से नहीं, बल्कि अपने शुद्ध आचरण और उदात्त मानवीय गुणों के कारण 'साधु' थे:</p>
          <ul>
            <li><strong>सत्यवादी और निष्कपट आचरण:</strong> वे कभी झूठ नहीं बोलते थे और सभी के साथ खरा व्यवहार रखते थे। किसी से व्यर्थ झगड़ा नहीं करते थे।</li>
            <li><strong>अपरिग्रह और ईमानदारी:</strong> वे किसी की वस्तु को बिना पूछे हाथ तक नहीं लगाते थे और न ही उसका व्यवहार में उपयोग करते थे।</li>
            <li><strong>कबीर के प्रति अटूट निष्ठा:</strong> वे कबीर को 'साहब' मानते थे। अपने खेत में जो कुछ भी अनाज पैदा होता, उसे सिर पर लादकर पहले कबीरपंथी मठ ले जाते और वहाँ से प्रसाद रूप में जो बचता, उसी से गृहस्थी चलाते थे।</li>
            <li><strong>राग-द्वेष से मुक्ति:</strong> वे सुख-दुख, लाभ-हानि में समभाव रहते थे तथा मृत्यु को परमात्मा से आत्मा का मिलन मानकर आनंद मनाते थे।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सत्यवादिता, ईमानदारी और अपरिग्रह का स्पष्ट उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">कबीर के प्रति समर्पण व सात्विक जीवन-शैली</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch2-q2">
    <div class="q-head" onclick="toggleQ('ch2-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">भगत की पुत्रवधू उन्हें अकेले क्यों नहीं छोड़ना चाहती थी?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>भगत की पुत्रवधू अत्यंत सुशील, समझदार और संवेदनशील स्त्री थी। वह निम्नलिखित मानवीय कारणों से अपने वृद्ध ससुर को अकेला नहीं छोड़ना चाहती थी:</p>
          <ul>
            <li><strong>वृद्धावस्था और एकाकीपन की चिंता:</strong> भगत के इकलौते पुत्र की मृत्यु के बाद घर में उनकी देखभाल करने वाला कोई दूसरा नहीं बचा था।</li>
            <li><strong>भोजन व स्वास्थ्य की फ़िक्र:</strong> भगत स्वयं कभी किसी से सेवा नहीं लेते थे। पुत्रवधू को चिंता थी कि यदि वे बीमार पड़ गए, तो उन्हें एक घूँट पानी देने वाला और समय पर भोजन पकाने वाला कोई नहीं रहेगा।</li>
            <li><strong>सच्ची सेवा-भावना:</strong> वह अपने सुख और पुनर्जन्म के बजाय वृद्ध ससुर की सेवा को अपना परम धर्म मानती थी।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">भगत के बुढ़ापे, एकाकीपन और बीमारी में सेवा की चिंता</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">पुत्रवधू के निःस्वार्थ कर्तव्यबोध व पारिवारिक निष्ठा का अंकन</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch2-q3">
    <div class="q-head" onclick="toggleQ('ch2-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">भगत ने अपने बेटे की मृत्यु पर अपनी भावनाएँ किस तरह व्यक्त कीं?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>इकलौते बेटे की मृत्यु पर भगत ने सामान्य सांसारिक लोगों की भाँति रोना-धोना या विलाप नहीं किया, बल्कि उनका व्यवहार अत्यंत दार्शनिक और अलौकिक था:</p>
          <ul>
            <li><strong>शव का सम्मान:</strong> उन्होंने बेटे के मृत शरीर को एक सफेद चादर से ढँक दिया, उस पर कुछ फूल और तुलसी दल बिखेर दिए और सिरहाने एक चिराग जला दिया।</li>
            <li><strong>भक्ति गीतों का गायन:</strong> वे खंजड़ी बजाते हुए अपने उसी पुराने तन्मय स्वर में कबीर के पदों को गाने लगे।</li>
            <li><strong>पुत्रवधू को सांत्वना व उत्सव मनाने की सीख:</strong> उन्होंने रोती हुई पुत्रवधू को समझाया कि यह शोक का नहीं, अपितु आनंद और उत्सव का अवसर है, क्योंकि आत्मा रूपी विरहिणी अपने परम प्रियतम परमात्मा से मिलने चली गई है। इससे बड़ा आनंद और क्या हो सकता है!</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">विलाप न करके खंजड़ी बजाकर भजन गाने का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">आत्मा और परमात्मा के मिलन के दार्शनिक दृष्टिकोण का निरूपण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch2-q4">
    <div class="q-head" onclick="toggleQ('ch2-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">भगत के व्यक्तित्व और उनकी वेशभूषा का अपने शब्दों में चित्र प्रस्तुत कीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>शारीरिक स्वरूप व वेशभूषा:</strong></p>
          <ul>
            <li>बालगोबिन भगत साठ से ऊपर की उम्र के, मँझोले कद के गोरे-चिट्टे आदमी थे। उनके बाल पक चुके थे, लंबी दाढ़ी-जटाएँ नहीं थीं, किंतु चेहरा हमेशा श्वेत बालों से जगमगाता रहता था।</li>
            <li>कपड़े बहुत कम पहनते थे—कमर में एक लँगोटी और सिर पर कबीरपंथियों की-सी कनफटी टोपी। जाड़े में काली कमली ओढ़ लेते थे।</li>
            <li>माथे पर हमेशा रामानंदी चंदन का तिलक चमकता था, जो नाक के छोर से ऊपर की ओर उठता था और गले में तुलसी की जड़ों की बेडौल माला बँधी रहती थी।</li>
            <li>हाथ में खंजड़ी लिए वे खेतों में रोपनी करते हुए स्वर-तरंग बिखेरते थे।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शारीरिक बनावट, आयु व श्वेत केश का अंकन</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">कनफटी टोपी, लँगोटी, चंदन तिलक व तुलसी माला का वर्णन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch2-q5">
    <div class="q-head" onclick="toggleQ('ch2-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">बालगोबिन भगत की दिनचर्या लोगों के अचरज का कारण क्यों थी?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>भगत की दिनचर्या में अटूट नियमबद्धता और कठोर साधना थी, जो लोगों को विस्मित करती थी:</p>
          <ul>
            <li><strong>कड़कड़ाती ठंड में प्रभाती:</strong> जाड़े की हाड़ कँपाने वाली ठंड में भी वे भोर में तारे टिमटिमाते ही दो मील दूर नदी-स्नान के लिए जाते और लौटकर पोखर के ऊँचे भिंडे पर खंजड़ी बजाते हुए प्रभाती गाते थे।</li>
            <li><strong>जीवन के अंतिम क्षण तक नियम-निष्ठा:</strong> वृद्धावस्था और बीमारी में भी उन्होंने अपने दोनों समय के स्नान-ध्यान, खेत की रखवाली और प्रभाती के नियमों को कभी नहीं छोड़ा। लोगों के मना करने पर भी वे अपनी साधना से विचलित नहीं हुए।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">भोर में नदी स्नान व खंजड़ी बजाकर प्रभाती गाने की नियमितता</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">कठोर सर्दी व बीमारी में भी अटूट साधना और नियम पालन</span><span class="marking-marks">1.5 अंक</span></div>
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
      <div class="cbq-type">CBQ 1: सामाजिक सुधार एवं मूल्य-बोध</div>
      <div class="cbq-question">
        बालगोबिन भगत ने पुत्र की मृत्यु के उपरांत अपनी पतोहू के पुनर्विवाह का आदेश देकर तत्कालीन रूढ़िवादी समाज को क्या संदेश दिया?
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        तत्कालीन समाज में विधवा-विवाह वर्जित था और विधवा स्त्री को नारकीय व उपेक्षित जीवन व्यतीत करना पड़ता था। भगत ने परंपरावादी रूढ़ियों को तोड़ते हुए पतोहू के भाई को बुलाकर उसका दूसरा विवाह कराने का दृढ़ आदेश दिया। उन्होंने यह क्रांतिकारी संदेश दिया कि धर्म का सच्चा स्वरूप मानवता, नारी-सहानुभूति और उसके सुखमय भविष्य में है, न कि संकीर्ण सामाजिक कुरीतियों में।
      </div>
    </div>
    <div class="cbq-card">
      <div class="cbq-type">CBQ 2: अभिकथन और कारण (Assertion &amp; Reason)</div>
      <div class="cbq-question">
        <strong>अभिकथन (A):</strong> बालगोबिन भगत संन्यासी न होकर भी सच्चे साधु थे।<br>
        <strong>कारण (R):</strong> साधुता बाहरी वेशभूषा या परिवार त्यागने से नहीं, बल्कि आंतरिक सात्विकता और पवित्र आचरण से सिद्ध होती है।<br>
        <strong>विकल्प:</strong> (क) A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है। (ख) A और R दोनों सत्य हैं, परंतु R सही व्याख्या नहीं है। (ग) A सत्य है, R असत्य है। (घ) A असत्य है, R सत्य है।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>सही उत्तर: (क)</strong><br>
        <em>व्याख्या:</em> भगत खेती-गृहस्थी करते हुए भी निष्काम कर्मयोगी और पवित्र आचरण के धनी थे, जो सिद्ध करता है कि संन्यास मन की वृत्ति है, बाह्य आवरण नहीं।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 3: लखनवी अंदाज़ (यशपाल)
const ch3 = `<section class="chapter-section" id="ch3" data-book="kshitij-gadh">
  <div class="chapter-header">
    <div class="ch-badge">3</div>
    <div class="chapter-header-info">
      <div class="ch-category">क्षितिज भाग-2 (गद्य खंड) — पाठ 3</div>
      <h2>लखनवी अंदाज़</h2>
      <p>यशपाल | व्यंग्य — पतनशील सामंती वर्ग, दिखावटी जीवन-शैली और नई कहानी पर कटाक्ष | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch3-q1">
    <div class="q-head" onclick="toggleQ('ch3-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">लेखक को नवाब साहब के किन हाव-भावों से महसूस हुआ कि वे उनसे बातचीत करने के लिए तनिक भी उत्सुक नहीं हैं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>जब लेखक सेकंड क्लास के डिब्बे में अचानक चढ़े, तो उन्होंने नवाब साहब के व्यवहार में निम्नलिखित उपेक्षापूर्ण हाव-भाव देखे:</p>
          <ul>
            <li><strong>एकांत चिंतन में विघ्न का असंतोष:</strong> नवाब साहब की आँखों में लेखक के सहसा आ जाने से असुविधा और संकोच का भाव स्पष्ट दिखाई दिया।</li>
            <li><strong>उपेक्षा व अनिच्छा:</strong> उन्होंने लेखक की संगति के प्रति कोई उत्साह नहीं दिखाया और न ही उनका अभिवादन किया।</li>
            <li><strong>खिड़की से बाहर देखना:</strong> उन्होंने लेखक से नज़रें चुराकर खिड़की के बाहर देखना शुरू कर दिया, जिससे लेखक को स्पष्ट हो गया कि वे बातचीत के बिल्कुल अनिच्छुक हैं।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">आँखों में असंतोष व संकोच का भाव प्रकट होना</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">नज़रें चुराकर खिड़की के बाहर देखने की उपेक्षापूर्ण मुद्रा</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch3-q2">
    <div class="q-head" onclick="toggleQ('ch3-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">नवाब साहब ने बहुत ही यत्न से खीरा काटा, नमक-मिर्च बुरका, अंततः सूँघकर ही खिड़की से बाहर फेंक दिया। उन्होंने ऐसा क्यों किया होगा? उनका ऐसा करना उनके कैसे स्वभाव को इंगित करता है?</div>
      <div class="q-marks">4 अंक (60-70 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>खीरा फेंकने का कारण:</strong> नवाब साहब लेखक के सामने अपनी कल्पित नवाबी नफासत, खानदानी रईसी और विशिष्टता (एलीट स्टेटस) का दिखावा करना चाहते थे। खीरे जैसी साधारण वस्तु को खाना वे अपनी शान के खिलाफ समझते थे, इसलिए उन्होंने प्रत्येक फाँक को केवल सूँघा और तृप्ति की डकार लेते हुए खिड़की से बाहर फेंक दिया।</p>
          <p><strong>स्वभाव की विशेषताएँ:</strong></p>
          <ul>
            <li><strong>दिखावटीपन और कृत्रिमता:</strong> वे यथार्थ से दूर झूठे प्रदर्शन और दंभपूर्ण व्यवहार में जीते थे।</li>
            <li><strong>सामंती खोखलापन:</strong> उनका यह कृत्य पतनशील सामंती संस्कृति के उस अहंकार को दर्शाता है, जिसमें वास्तविकता कुछ नहीं होती परंतु केवल शिष्टाचार और नज़ाकत का स्वांग रचा जाता है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">नवाबी नफासत व झूठी रईसी के प्रदर्शन का कारण स्पष्ट करना</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">दिखावटीपन, दंभ और सामंती खोखलेपन का विश्लेषण</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch3-q3">
    <div class="q-head" onclick="toggleQ('ch3-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">बिना विचार, घटना और पात्रों के भी क्या कहानी लिखी जा सकती है? यशपाल के इस विचार से आप कहाँ तक सहमत हैं?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>हम लेखक यशपाल के इस व्यंग्यात्मक निष्कर्ष से पूर्णतः सहमत हैं:</p>
          <ul>
            <li>लेखक ने व्यंग्य करते हुए कहा है कि यदि खीरे को बिना खाए केवल सूँघने मात्र से पेट भर सकता है और डकार आ सकती है, तो बिना विचार, बिना कथ्य (घटना) और बिना पात्रों के भी कहानी लिखी जा सकती है।</li>
            <li>परंतु वास्तविकता यह है कि कहानी की रचना के लिए एक केंद्रीय विचार (कथ्य), घटनाओं का प्रवाह और सजीव पात्र अनिवार्य तत्व हैं। इनके बिना कोई भी सार्थक रचना संभव नहीं है। लेखक ने तत्कालीन 'नई कहानी' के कुछ लेखकों के निराधार प्रयोगवाद पर यह तीखा कटाक्ष किया है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">व्यंग्यात्मक संदर्भ (सूँघने से पेट भरने का साम्य) स्पष्ट करना</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">कहानी के मूल तत्वों (कथ्य, घटना, पात्र) की अनिवार्यता</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch3-q4">
    <div class="q-head" onclick="toggleQ('ch3-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">आप इस निबंध को और क्या नाम देना चाहेंगे? कारण सहित उत्तर दीजिए।</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>इस व्यंग्य रचना के लिए अन्य उपयुक्त शीर्षक निम्नलिखित हो सकते हैं:</p>
          <ul>
            <li><strong>'दिखावे की संस्कृति'</strong> अथवा <strong>'झूठी शान'</strong>: क्योंकि संपूर्ण पाठ में नवाब साहब की बनावटी जीवन-शैली और वास्तविकता से कटे थोथे अहंकार का उद्घाटन किया गया है।</li>
            <li><strong>'नवाबी नफासत'</strong>: क्योंकि यह शीर्षक लखनऊ के सामंती तौर-तरीकों और उनकी कृत्रिम नज़ाकत पर सटीक चोट करता है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">उपयुक्त शीर्षक का सुझाव और तार्किक औचित्य</span><span class="marking-marks">2.0 अंक</span></div>
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
      <div class="cbq-type">CBQ 1: यथार्थ बनाम दिखावा (Reality vs Pretense)</div>
      <div class="cbq-question">
        वर्तमान समाज में भी 'लखनवी अंदाज़' जैसी दिखावटी प्रवृत्ति के उदाहरण देखने को मिलते हैं। आज के संदर्भ में दिखावे की संस्कृति के दुष्प्रभावों पर प्रकाश डालिए।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        आज के उपभोक्तावादी युग में सोशल मीडिया और भौतिकवादी जीवन में दिखावे की संस्कृति चरम पर है। लोग अपनी आर्थिक क्षमता से बढ़कर दिखावे के लिए ब्रांडेड वस्तुएँ, भव्य आयोजन और बनावटी जीवनशैली अपनाते हैं। इसके गंभीर दुष्प्रभाव हैं—मानसिक तनाव, कर्ज का बोझ, रिश्तों में कृत्रिमता और आत्मिक शांति का क्षय। समाज को यथार्थवादी, सादगीपूर्ण और प्राकृतिक जीवन अपनाने की आवश्यकता है।
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(outDir, 'ch2.html'), ch2, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch3.html'), ch3, 'utf8');
console.log('Generated ch2.html and ch3.html');
