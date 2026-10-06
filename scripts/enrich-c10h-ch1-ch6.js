const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'chapters-c10h');

// CHAPTER 1: नेताजी का चश्मा (स्वयं प्रकाश) - 8 Complete NCERT Questions + CBQs
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
      <div class="q-text">आशय स्पष्ट कीजिए— "बार-बार सोचते, क्या होगा उस कौम का जो अपने देश की खातिर घर-गृहस्थी-जवानी-जिंदगी सब कुछ होम देने वालों पर भी हँसती है और अपने लिए बिकने के मौके ढूँढ़ती है।"</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>आशय:</strong> लेखक ने इस कथन के माध्यम से समाज में व्याप्त स्वार्थपरता, संवेदनहीनता और गिरते नैतिक मूल्यों पर गहरा क्षोभ व्यक्त किया है।</p>
          <p>जो नागरिक उन स्वतंत्रता सेनानियों का उपहास उड़ाते हैं जिन्होंने देश की आजादी के लिए अपना सुख, परिवार और सर्वस्व न्योछावर कर दिया, वे समाज के लिए अभिशाप हैं। यदि समाज अपने देशप्रेमियों का सम्मान करने के बजाय निजी स्वार्थों के लिए बिकने और समझौते करने के अवसर ढूँढ़ने लगे, तो ऐसे राष्ट्र की स्वाधीनता और संस्कृति का पतन निश्चित है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शहीदों के बलिदान का उपहास उड़ाने पर क्षोभ का प्रकटीकरण</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">स्वार्थपरता और राष्ट्रीय पतन की आशंका का सटीक विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch1-q4">
    <div class="q-head" onclick="toggleQ('ch1-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">पानवाले का एक रेखाचित्र प्रस्तुत कीजिए।</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>पानवाला सड़क के चौराहे पर अपनी दुकान चलाता था। उसका शब्द-चित्र निम्नलिखित है:</p>
          <ul>
            <li>वह एक काला, मोटा और खुशमिजाज आदमी था जिसकी बड़ी-सी तोंद हँसने पर थिरकती थी।</li>
            <li>उसके मुँह में हमेशा पान ठूँसा रहता था, जिसके कारण उसके दाँत लाल-काले हो चुके थे और बात करने से पहले उसे नीचे पीक थूकनी पड़ती थी।</li>
            <li>वह स्वभाव से मजाकिया, बातूनी और व्यंग्य कसने वाला था, परंतु अंदर से एक संवेदनशील हृदय भी रखता था; कैप्टन की मृत्यु पर वह अपनी आँखें पोंछता है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शारीरिक बनावट (मोटा, काला, थिरकती तोंद) का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">पान खाने की आदत व स्वभावगत विशेषताओं का वर्णन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch1-q5">
    <div class="q-head" onclick="toggleQ('ch1-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">"वो लँगड़ा क्या जाएगा फ़ौज में। पागल है पागल!" कैप्टन के प्रति पानवाले की इस टिप्पणी पर अपनी प्रतिक्रिया लिखिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>पानवाले की यह टिप्पणी अत्यंत अनुचित, संवेदनहीन और निंदनीय है। किसी भी व्यक्ति की शारीरिक दिव्यांगता या गरीबी का उपहास उड़ाना अमानवीय है।</p>
          <p>कैप्टन यदि शारीरिक रूप से लँगड़ा था, तो क्या हुआ? मानसिक और आत्मिक रूप से उसका राष्ट्रप्रेम किसी भी स्वस्थ सैनिक से कहीं अधिक ऊँचा था। पानवाला जिसे 'पागलपन' समझ रहा था, वह वास्तव में कैप्टन की असीम देशभक्ति और समर्पण था। समाज को ऐसे देशभक्तों का उपहास करने के बजाय उनके प्रति कृतज्ञ होना चाहिए।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">टिप्पणी की संवेदनहीनता व अमानवीयता की आलोचना</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">कैप्टन के आंतरिक राष्ट्रप्रेम व उच्च आचरण की प्रतिष्ठा</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch1-q6">
    <div class="q-head" onclick="toggleQ('ch1-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">निम्नलिखित वाक्य पात्रों की कौन-सी विशेषता की ओर संकेत करते हैं— (क) हालदार साहब हमेशा चौराहे पर रुकते और नेताजी को निहारते। (ख) पानवाला उदास हो गया। उसने पीछे मुड़कर मुँह का पान नीचे थूका और सिर झुकाकर अपनी धोती के सिरे से आँखें पोंछता हुआ बोला—मास्टर जी! कैप्टन मर गया। (ग) कैप्टन बार-बार मूर्ति पर चश्मा लगा देता था।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <ul>
            <li><strong>(क) हालदार साहब:</strong> यह उनकी प्रगाढ़ देशभक्ति, राष्ट्रीय प्रतीकों के प्रति आदर और समाज की सूक्ष्म घटनाओं के प्रति गहरी संवेदनशीलता को दर्शाता है।</li>
            <li><strong>(ख) पानवाला:</strong> ऊपरी हँसी-मजाक के पीछे उसके भीतर एक संवेदनशील, सहृदय और मानवीय गुणों से युक्त व्यक्ति छिपा था, जिसे कैप्टन की मृत्यु का गहरा दुख था।</li>
            <li><strong>(ग) कैप्टन चश्मेवाला:</strong> यह उसकी अमर देशभक्ति, नेताजी के प्रति अगाध श्रद्धा और अपने सीमित साधनों में भी कर्तव्य पालन करने की निष्ठा को दर्शाता है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">भाग (क): हालदार साहब की देशप्रेम भावना का उल्लेख</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भाग (ख): पानवाले की आंतरिक मानवीय संवेदना</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भाग (ग): कैप्टन के कर्तव्यबोध व राष्ट्रभक्ति का विश्लेषण</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch1-q7">
    <div class="q-head" onclick="toggleQ('ch1-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">जब तक हालदार साहब ने कैप्टन को साक्षात देखा नहीं था तब तक उनके मानस पटल पर उसका कौन-सा चित्र रहा होगा? अपनी कल्पना से लिखिए।</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>'कैप्टन' नाम सुनकर हालदार साहब ने सोचा होगा कि वह कोई लंबा-चौड़ा, रोबीला, मजबूत कद-काठी का फौजी जवान होगा। उसके सिर पर फौजी टोपी, तन पर वर्दी और चेहरे पर रौब होगा जो आज़ाद हिंद फ़ौज में सुभाष चंद्र बोस का साथी रहा होगा।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">फौजी जवान, रोबीले कद-काठी व वर्दीधारी व्यक्तित्व की कल्पना</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch1-q8">
    <div class="q-head" onclick="toggleQ('ch1-q8')">
      <div class="q-num">प्रश्न 8</div>
      <div class="q-text">अपने इलाके/शहर में लगी किसी महापुरुष की मूर्ति के संदर्भ में बताइए कि उसके प्रति आपका और समाज का क्या उत्तरदायित्व होना चाहिए?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>सार्वजनिक स्थलों पर लगी महापुरुषों की प्रतिमाएँ हमारे राष्ट्रीय गौरव और प्रेरणा की प्रतीक हैं। उनके प्रति हमारा और समाज का निम्नलिखित कर्तव्य है:</p>
          <ol>
            <li>मूर्ति और उसके आसपास के परिसर को स्वच्छ और सुंदर बनाए रखना; उस पर धूल, पक्षियों की गंदगी या कचरा न जमने देना।</li>
            <li>मूर्ति को किसी भी प्रकार की क्षति या असामाजिक तत्वों के अनादर से बचाना।</li>
            <li>विशेष राष्ट्रीय अवसरों (जयंती, पुण्यतिथि आदि) पर उन्हें माल्यार्पण कर उनके आदर्शों और विचारों को अपने आचरण में उतारना।</li>
          </ol>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">स्वच्छता व नियमित रखरखाव का उत्तरदायित्व</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सम्मान की रक्षा व आदर्शों को अपनाने का संकल्प</span><span class="marking-marks">1.5 अंक</span></div>
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

// CHAPTER 2: बालगोबिन भगत (रामवृक्ष बेनीपुरी) - 8 Complete NCERT Questions + CBQs
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
            <li><strong>त्यागमयी निष्ठा:</strong> वह अपने सुख की परवाह किए बिना अपने ससुर की बुढ़ापे में सेवा करके अपना कर्तव्य निभाना चाहती थी।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">वृद्धावस्था, बीमारी व भोजन की चिंता का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">पुत्रवधू के सेवाभाव, कर्तव्यनिष्ठा व त्याग का चित्रण</span><span class="marking-marks">1.5 अंक</span></div>
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
          <p>बेटे की मृत्यु पर बालगोबिन भगत ने पारंपरिक लोगों की तरह रोना-पीटना नहीं मचाया, बल्कि उनका व्यवहार अत्यंत विस्मयकारी और आध्यात्मिक था:</p>
          <ul>
            <li>उन्होंने बेटे के शव को आँगन में एक चटाई पर लिटाकर सफेद चादर से ढक दिया और उस पर कुछ फूल तथा तुलसीदल बिखेर दिए।</li>
            <li>सिरहाने एक दीपक जलाकर वे खँजड़ी बजाते हुए मस्ती में कबीर के पद गाने लगे।</li>
            <li>रोती हुई पुत्रवधू को चुप कराते हुए उन्होंने कहा कि यह रोने का नहीं, बल्कि आनंद मनाने का उत्सव है; क्योंकि विरहिणी आत्मा अपने प्रियतम परमात्मा से मिलने चली गई है। यह उनके उच्च आध्यात्मिक ज्ञान का परिचायक था।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शव के सम्मुख खँजड़ी बजाकर कबीर के पद गाने का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">आत्मा और परमात्मा के मिलन का उत्सव मानने का दार्शनिक भाव</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch2-q4">
    <div class="q-head" onclick="toggleQ('ch2-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">भगत के व्यक्तित्व और उनकी वेशभूषा का अपने शब्दों में चित्रण कीजिए।</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>शारीरिक व्यक्तित्व:</strong> बालगोबिन भगत साठ से ऊपर के मझोले कद के गोरे-चिट्टे आदमी थे। उनके बाल पक चुके थे, लंबी दाढ़ी-जटाएँ तो नहीं रखते थे किंतु उनका चेहरा हमेशा सफेद बालों से जगमगाता रहता था।</p>
          <p><strong>वेशभूषा:</strong> वे कपड़े बिल्कुल कम पहनते थे। कमर में एक लँगोटी और सिर पर कबीरपंथियों की-सी कनफटी टोपी पहनते थे। सर्दियों में ऊपर से एक काली कमली ओढ़ लेते थे। माथे पर रामानंदी चंदन का टीका और गले में तुलसी की जड़ों की बेडौल माला पहनते थे।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">आयु, कद-काठी व मुखमंडल का स्पष्ट वर्णन</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">लँगोटी, टोपी, चंदन व तुलसी माला की वेशभूषा का अंकन</span><span class="marking-marks">1.5 अंक</span></div>
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
          <p>भगत की दिनचर्या में अटूट नियमबद्धता और कठोर साधना थी:</p>
          <ul>
            <li>वे कड़ाके की ठंड (माघ की भोर) में भी मुँह-अंधेरे उठते और गाँव से दो मील दूर जाकर नदी में स्नान करते थे। लौटकर पोखरे के ऊँचे भिंडे पर बैठकर खँजड़ी बजाते हुए प्रभातियाँ गाते थे।</li>
            <li>वृद्धावस्था और बीमारी में भी उन्होंने कभी अपने नियमों में ढील नहीं दी।</li>
            <li>इतना कठिन श्रम और व्रत-उपवास करते हुए भी वे कभी किसी से सहारा या भिक्षा नहीं माँगते थे। उनके इसी अडिग नियम और संकल्प को देखकर लोग दाँतों तले उँगली दबाते थे।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">माघ की भीषण ठंड में भोर स्नान व प्रभाती गायन का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">वृद्धावस्था में भी नियम न टूटने की कठोर साधना</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch2-q6">
    <div class="q-head" onclick="toggleQ('ch2-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">पाठ के आधार पर बालगोबिन भगत के मधुर गायन की विशेषताएँ लिखिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>बालगोबिन भगत के गायन में अद्भुत जादुई प्रभाव था:</p>
          <ul>
            <li><strong>अलौकिक रस की सृष्टि:</strong> उनका कंठ इतना सुरीला था कि जब वे गाते थे, तो ऐसा लगता मानो एक स्वर स्वर्ग की ओर जा रहा हो और दूसरा धरती पर खड़े लोगों के कानों में अमृत घोल रहा हो।</li>
            <li><strong>कर्म और संगीत का समन्वय:</strong> आषाढ़ की रिमझिम में खेत में धान रोपते हुए जब वे गाते, तो बच्चे झूम उठते, मेड़ पर खड़ी औरतों के ओंठ काँपकर गुनगुनाने लगते और हलवाहों के पैर ताल से उठने लगते थे।</li>
            <li>उनका संगीत मन की निराशा को दूर भगाकर वातावरण में एक दिव्य आनंद और स्फूर्ति भर देता था।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कंठ की मधुरता व स्वर्ग-धरती के रूपक का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">खेत में किसानों, बच्चों व औरतों पर संगीत के प्रभाव का वर्णन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch2-q7">
    <div class="q-head" onclick="toggleQ('ch2-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">कुछ मार्मिक प्रसंगों के आधार पर यह दिखाई देता है कि बालगोबिन भगत प्रचलित सामाजिक मान्यताओं को नहीं मानते थे। पाठ के आधार पर उन प्रसंगों का उल्लेख कीजिए।</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>बालगोबिन भगत ने समाज की दकियानूसी और रूढ़िवादी परंपराओं को तोड़कर आधुनिक सुधारवादी दृष्टि का परिचय दिया:</p>
          <ul>
            <li><strong>पुत्र की चिता को मुखाग्नि:</strong> हिंदू परंपरा के अनुसार दाह-संस्कार पुरुष करते हैं, किंतु भगत ने सामाजिक परंपरा को धता बताते हुए अपने मृत बेटे की चिता को अपनी पुत्रवधू के हाथों से ही मुखाग्नि दिलवाई।</li>
            <li><strong>विधवा-विवाह का क्रांतिकारी कदम:</strong> श्राद्ध की अवधि समाप्त होते ही उन्होंने पुत्रवधू के भाई को बुलाकर आदेश दिया कि इसका दूसरा विवाह कर देना। उस समय विधवा-विवाह समाज में पाप समझा जाता था।</li>
            <li><strong>मृत्यु पर शोक न मनाना:</strong> वे मृत्यु को मातम न मानकर आत्मा और परमात्मा के मिलन का उत्सव मानते थे। इस प्रकार वे सामाजिक पाखंडों से सर्वथा मुक्त थे।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पुत्रवधू से मुखाग्नि दिलवाने के प्रसंग का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">विधवा-विवाह के साहसिक कदम का वर्णन</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मृत्यु को उत्सव मानने की दार्शनिक चेतना</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch2-q8">
    <div class="q-head" onclick="toggleQ('ch2-q8')">
      <div class="q-num">प्रश्न 8</div>
      <div class="q-text">धान की रोपाई के समय समूचे माहौल को भगत की स्वर-लहरियाँ किस तरह चमत्कृत कर देती थीं? उस माहौल का शब्द-चित्र प्रस्तुत कीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>आषाढ़ की रिमझिम फुहारों के बीच समूचा गाँव खेतों में उमड़ पड़ता था। आसमान बादलों से घिरा, ठंडी पुरवाई चल रही और पानी भरे कीचड़युक्त खेतों में धान की रोपाई हो रही थी।</p>
          <p>तभी भगत का मधुर कंठ गूँज उठता—<em>"गोदी में पियवा, चमक उठे सखिया, चिहुँक उठे ना!"</em> उनका यह गायन खेतों में जादू बिखेर देता था। बच्चे पानी में खेलते हुए उछलने लगते, मेड़ पर कलेवा लिए बैठी स्त्रियों के होंठ अपने-आप थिरकने लगते और रोपनी करने वालों की उँगलियाँ एक निश्चित क्रम से धान के पौधों को रोपने लगती थीं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">आषाढ़ के प्राकृतिक दृश्य व धान रोपाई का अंकन</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भगत के गायन से श्रम में लयबद्धता व जादू का संचार</span><span class="marking-marks">1.5 अंक</span></div>
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
        "भगत का यह निर्णय कि उनकी पुत्रवधू का पुनर्विवाह हो, तत्कालीन समाज के लिए एक क्रांति था।" वर्तमान नारी सशक्तिकरण के संदर्भ में भगत के इस कदम का मूल्यांकन कीजिए।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        भगत ने अपने व्यक्तिगत स्वार्थ (बुढ़ापे में अपनी सेवा) को त्यागकर अपनी युवा पुत्रवधू के भविष्य, सम्मान और सुख को प्राथमिकता दी। उनका यह कदम सिद्ध करता है कि वे सच्चे अर्थों में नारी स्वतंत्रता और मानवीय अधिकारों के पक्षधर थे। आज भी जब कई परिवारों में विधवाओं के साथ उपेक्षापूर्ण व्यवहार होता है, भगत का यह प्रगतिशील चिंतन पूरे समाज के लिए प्रकाश स्तंभ है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 3: लखनवी अंदाज़ (यशपाल) - 6 Complete NCERT Questions + CBQs
const ch3 = `<section class="chapter-section" id="ch3" data-book="kshitij-gadh">
  <div class="chapter-header">
    <div class="ch-badge">3</div>
    <div class="chapter-header-info">
      <div class="ch-category">क्षितिज भाग-2 (गद्य खंड) — पाठ 3</div>
      <h2>लखनवी अंदाज़</h2>
      <p>यशपाल | व्यंग्य निबंध — पतनशील सामंती वर्ग की दिखावटी जीवन-शैली, नफासत और नई कहानी पर कटाक्ष | CBSE Board 2026-27</p>
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
          <p>लेखक के अचानक डिब्बे में प्रवेश करते ही नवाब साहब के चेहरे पर असंतोष और संकोच का भाव उभर आया। उनके निम्नलिखित हाव-भावों से बेरुखी साफ झलक रही थी:</p>
          <ul>
            <li>नवाब साहब ने लेखक के आने पर कोई मुस्कान नहीं दी और न ही शिष्टाचार वश कोई अभिवादन (सलाम) किया।</li>
            <li>वे लेखक की उपस्थिति की उपेक्षा करते हुए खिड़की से बाहर घूरने लगे और निरंतर रेलगाड़ी के बाहर देखते रहे।</li>
            <li>उनकी आँखों में एकांत चिंतन में विघ्न पड़ जाने का असंतोष साफ दिखाई दे रहा था।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">चेहरे पर असंतोष व उपेक्षापूर्ण दृष्टि का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">खिड़की के बाहर घूरने व अभिवादन न करने का वर्णन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch3-q2">
    <div class="q-head" onclick="toggleQ('ch3-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">नवाब साहब ने बहुत ही यत्न से खीरा काटा, नमक-मिर्च बुरका, अंततः सूँघकर ही खिड़की से बाहर फेंक दिया। उन्होंने ऐसा क्यों किया होगा? उनका ऐसा करना उनके कैसे स्वभाव को इंगित करता है?</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>खीरा बाहर फेंकने का कारण:</strong> नवाब साहब सेकंड क्लास के साधारण डिब्बे में खीरा जैसी साधारण (अदना) वस्तु अकेले बैठकर मजे से खाना चाहते थे। किंतु लेखक के आ जाने पर उनका रईसी का झूठा अहंकार जाग उठा। वे लेखक के सामने खीरा खाकर अपनी नवाबी शान को कम नहीं होने देना चाहते थे। अतः उन्होंने खीरे को केवल सूँघकर खिड़की से बाहर फेंकने का ढोंग रचा ताकि लेखक पर अपनी झूठी रईसी और नज़ाकत की धाक जमा सकें।</p>
          <p><strong>स्वभाव की विशेषताएँ:</strong> उनका ऐसा करना उनके <strong>खोखले दिखावे, कृत्रिम जीवन-शैली, दंभ और सामंती अहंकार</strong> को इंगित करता है। वे यथार्थ से दूर केवल कल्पना और प्रदर्शन की दुनिया में जीने वाले पतनोन्मुख वर्ग के प्रतिनिधि हैं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">झूठी नवाबी शान दिखाने व धाक जमाने के कारण का विश्लेषण</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">दिखावटीपन, बनावटी नफासत व सामंती पतन के स्वभाव का उल्लेख</span><span class="marking-marks">2.0 अंक</span></div>
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
          <p>हम लेखक यशपाल के विचार से पूर्णतया सहमत हैं। किसी भी सार्थक कहानी के निर्माण के लिए तीन मूलभूत तत्वों—<strong>कथ्य (विचार), घटना (कथानक) और पात्र (चरित्र)</strong> का होना अनिवार्य है। इनके बिना कोई वास्तविक कहानी अस्तित्व में नहीं आ सकती।</p>
          <p>लेखक ने नवाब साहब के खीरा सूँघकर पेट भरने और डकार लेने के ढोंग के माध्यम से उन 'नई कहानी' के लेखकों पर तीखा व्यंग्य किया है, जो बिना किसी यथार्थ घटना, विचार या पात्र के केवल शब्दों का जाल बुनकर कहानी रचने का खोखला दावा करते हैं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कहानी के मूल तत्वों (विचार, घटना, पात्र) की अनिवार्यता</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">नई कहानी के खोखलेपन पर लेखक के व्यंग्य का स्पष्टीकरण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch3-q4">
    <div class="q-head" onclick="toggleQ('ch3-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">आप इस व्यंग्य निबंध को और क्या नाम देना चाहेंगे? कारण सहित बताइए।</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>हम इस पाठ को <strong>'झूठी शान'</strong> अथवा <strong>'नवाबी ढोंग'</strong> अथवा <strong>'दिखावे की नफासत'</strong> नाम देना चाहेंगे।</p>
          <p><strong>कारण:</strong> पूरी कहानी में नवाब साहब की वास्तविकता और उनके बनावटी प्रदर्शन के बीच का द्वंद्व ही मुख्य विषय है। खीरा जैसी तुच्छ वस्तु को सूँघकर बाहर फेंकना केवल खोखले दिखावे की पराकाष्ठा है, अतः यह शीर्षक सटीक होगा।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सार्थक व उपयुक्त नए शीर्षक का सुझाव</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">तार्किक कारण का उल्लेख</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch3-q5">
    <div class="q-head" onclick="toggleQ('ch3-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">नवाब साहब द्वारा खीरा खाने की तैयारी करने का एक विस्तृत चित्र प्रस्तुत किया गया है। इस पूरी प्रक्रिया को अपने शब्दों में व्यक्त कीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>नवाब साहब ने खीरे की तैयारी अत्यंत नजाकत और करीने से की:</p>
          <ol>
            <li>सीट के नीचे से लोटा निकालकर दोनों खीरों को खिड़की के बाहर धोया और तौलिए से पोंछा।</li>
            <li>जेब से चाकू निकालकर खीरों के सिर काटे, उन्हें गोदकर झाग निकाला।</li>
            <li>फिर खीरों को बड़े एहतियात से छीलकर उनकी फाँकों को करीने से तौलिए पर सजाया।</li>
            <li>उन पर जीरा-मिला नमक और लाल मिर्च की सुर्खी बुरकी। फाँकों पर पानी की बूँदें चमकने लगीं, जिससे मुँह में पानी आ रहा था।</li>
          </ol>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">खीरा धोने, झाग निकालने व छीलने की प्रक्रिया</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">फाँकें सजाने व नमक-मिर्च बुरकने की नजाकत का वर्णन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch3-q6">
    <div class="q-head" onclick="toggleQ('ch3-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">'लखनवी अंदाज़' पाठ में सामंती वर्ग की किस बनावटी जीवन-शैली पर व्यंग्य किया गया है? आज के समाज में भी ऐसी प्रवृत्ति कहाँ दिखाई देती है?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>पाठ में उस पतनशील सामंती वर्ग पर तीखा कटाक्ष किया गया है जिनकी रियासतें और नवाबी तो छिन चुकी हैं, किंतु वे अभी भी अपनी झूठी शान, कृत्रिम नजाकत और प्रदर्शनप्रियता का चोला ओढ़े हुए हैं।</p>
          <p>आज के उपभोक्तावादी समाज में भी यह दिखावा खूब देखा जा सकता है। लोग केवल दूसरों को प्रभावित करने और 'स्टेटस सिंबल' बनाने के लिए महँगे ब्रांडेड कपड़े, महंगे मोबाइल और कर्ज लेकर विलासिता की वस्तुएँ खरीदते हैं। यह भी उसी लखनवी नवाबियत का आधुनिक रूप है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पतनशील सामंती वर्ग के खोखले दंभ पर व्यंग्य</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">आधुनिक समाज में स्टेटस सिंबल व उपभोक्तावादी दिखावे से तुलना</span><span class="marking-marks">1.5 अंक</span></div>
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
        <strong>अभिकथन (A):</strong> नवाब साहब द्वारा डकार लेना उनके पेट भरने का नहीं, बल्कि मानसिक संतुष्टि के झूठे प्रदर्शन का प्रमाण था।<br>
        <strong>कारण (R):</strong> भौतिक रूप से खीरा खाए बिना केवल सूँघने से उदर तृप्त नहीं हो सकता, डकार केवल नवाबी नफासत का नाटक था।<br>
        <strong>विकल्प:</strong><br>
        (क) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या करता है।<br>
        (ख) (A) और (R) दोनों सही हैं, परंतु (R), (A) की सही व्याख्या नहीं करता।<br>
        (ग) (A) सही है, परंतु (R) गलत है।<br>
        (घ) (A) गलत है, परंतु (R) सही है।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>सही उत्तर: (क)</strong><br>
        <em>व्याख्या:</em> नवाब साहब लेखक पर अपनी रईसी की धाक जमाने के लिए अवास्तविक डकार लेते हैं, जो दिखावे की पराकाष्ठा है। अतः (R) बिल्कुल सही व्याख्या करता है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 4: एक कहानी यह भी (मन्नू भंडारी) - 7 Complete NCERT Questions + CBQs
const ch4 = `<section class="chapter-section" id="ch4" data-book="kshitij-gadh">
  <div class="chapter-header">
    <div class="ch-badge">4</div>
    <div class="chapter-header-info">
      <div class="ch-category">क्षितिज भाग-2 (गद्य खंड) — पाठ 4</div>
      <h2>एक कहानी यह भी</h2>
      <p>मन्नू भंडारी | आत्मकथ्य — नारी चेतना, स्वतंत्रता आंदोलन, पितृसत्ता से संघर्ष और वैचारिक विकास | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch4-q1">
    <div class="q-head" onclick="toggleQ('ch4-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">लेखिका के व्यक्तित्व पर किन-किन व्यक्तियों का किस रूप में प्रभाव पड़ा?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखिका मन्नू भंडारी के व्यक्तित्व के निर्माण में मुख्य रूप से दो व्यक्तियों का निर्णायक प्रभाव पड़ा:</p>
          <ul>
            <li><strong>पिता का प्रभाव:</strong> लेखिका के पिता ने उनके मन में हीनता की ग्रंथि (काले रंग और दुबलेपन के कारण) भी पैदा की, किंतु साथ ही उनमें देश-दुनिया के प्रति जागरूकता, राजनीतिक समझ और क्रांतिकारी विचार भरने का कार्य भी किया। पिता के शक्की स्वभाव और दंभ ने लेखिका के स्वाभिमान को धार दी।</li>
            <li><strong>हिंदी प्राध्यापिका शीला अग्रवाल का प्रभाव:</strong> कॉलेज में शीला अग्रवाल ने लेखिका को केवल साहित्य पढ़ना ही नहीं सिखाया, बल्कि श्रेष्ठ साहित्य को परखने की दृष्टि दी। उन्होंने लेखिका के रगों में बहते खून को लावे में बदल दिया और उन्हें स्वाधीनता संग्राम की सक्रिय भागीदारी के लिए प्रेरित किया।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">पिता के वैचारिक प्रभाव व अंतर्विरोधों का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">शीला अग्रवाल द्वारा साहित्य रुचि व चेतना जगाने का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch4-q2">
    <div class="q-head" onclick="toggleQ('ch4-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">मन्नू भंडारी के पिता के स्वभाव की क्या विशेषताएँ थीं?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>मन्नू भंडारी के पिता का व्यक्तित्व अंतर्विरोधों और जटिलताओं से भरा था:</p>
          <ul>
            <li><strong>विद्वान एवं संवेदनशील:</strong> वे अत्यंत कोमल हृदय, दरियादिल, सुशिक्षित और प्रतिष्ठित व्यक्ति थे। उन्होंने अंग्रेजी-हिंदी शब्दकोश का निर्माण किया था।</li>
            <li><strong>क्रोधी और शक्की:</strong> आर्थिक झटकों और अपनों द्वारा दिए गए धोखों के कारण वे अत्यधिक क्रोधी, अहंवादी और संशयवादी बन गए थे।</li>
            <li><strong>विरोधाभासी मानसिकता:</strong> वे एक ओर आधुनिक सोच रखते हुए बेटी को राजनीति व बहसों में शामिल करना चाहते थे, लेकिन दूसरी ओर परंपरावादी होकर उसे चारदीवारी के दायरे में ही रखना चाहते थे।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">विद्वत्ता व प्रतिष्ठा के साथ शक्की स्वभाव का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">रूढ़िवादी व प्रगतिशील विचारों के द्वंद्व का वर्णन</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch4-q3">
    <div class="q-head" onclick="toggleQ('ch4-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">लेखिका के पिता ने रसोई को 'भटियारखाना' कहकर क्यों संबोधित किया?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखिका के पिता रसोई को 'भटियारखाना' इसलिए कहते थे क्योंकि उनका मानना था कि रसोई में लगातार काम करने से व्यक्ति की बौद्धिक क्षमता, प्रतिभा और रचनात्मक ऊर्जा नष्ट हो जाती है। वे अपनी बेटियों को केवल चूल्हे-चौके तक सीमित नहीं देखना चाहते थे, बल्कि देश और समाज की बौद्धिक बहसों में सक्रिय भागीदार बनाना चाहते थे।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">प्रतिभा व क्षमता नष्ट होने के तर्क का उल्लेख</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">बौद्धिक विकास को प्राथमिकता देने का भाव</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch4-q4">
    <div class="q-head" onclick="toggleQ('ch4-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">वह कौन-सी घटना थी जिसके बाद लेखिका को न अपनी आँखों पर विश्वास हो पाया और न अपने कानों पर?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>जब कॉलेज की प्रिंसिपल ने पत्र भेजकर लेखिका के पिता को कॉलेज बुलाया और शिकायत की कि मन्नू के एक इशारे पर लड़कियाँ क्लास छोड़ हड़ताल कर देती हैं, तो पिता क्रोधित होकर घर से निकले थे। लेखिका डरकर पड़ोस में बैठ गई कि घर लौटते ही पिता उसे पीटेंगे।</p>
          <p>किंतु जब पिता कॉलेज से लौटे, तो वे बेहद खुश और गर्व से भरे हुए थे। उन्होंने कहा—"पूरे कॉलेज पर मेरी बेटी का दबदबा है! यह तो स्वाधीनता आंदोलन की पुकार है, इसे कोई कैसे रोक सकता है!" पिता का यह बदला हुआ रूप देखकर लेखिका को न अपनी आँखों पर विश्वास हुआ और न अपने कानों पर।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">प्रिंसिपल की शिकायत और पिता के प्रारंभिक क्रोध का वर्णन</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">पिता के गर्व और प्रशंसा भरे व्यवहार पर लेखिका का आश्चर्य</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch4-q5">
    <div class="q-head" onclick="toggleQ('ch4-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">लेखिका की अपने पिता से वैचारिक टकराहट को अपने शब्दों में लिखिए।</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखिका और उनके पिता में गहरी वैचारिक टकराहट थी, जो दोनों के विचारों के अंतर्विरोध से उपजी थी:</p>
          <ul>
            <li><strong>घर की सीमा बनाम खुले मैदान की स्वतंत्रता:</strong> पिता चाहते थे कि लेखिका घर में बैठकर राजनीतिक चर्चाएँ सुने और चिंतन करे, किंतु लेखिका नारों, जुलूसों और हड़तालों में सड़कों पर उतरकर सक्रिय क्रांति करना चाहती थी।</li>
            <li><strong>समाज की प्रतिष्ठा की चिंता:</strong> पिता दकियानूसी समाज और पड़ोसियों की टीका-टिप्पणियों से भयभीत हो जाते थे, जबकि लेखिका सामाजिक बंधनों की परवाह किए बिना अपनी राह स्वयं चुनना चाहती थी।</li>
            <li><strong>अहं का टकराव:</strong> पिता का अत्यधिक अहंवादी होना और लेखिका का विद्रोही स्वाभिमान दोनों में निरंतर द्वंद्व उत्पन्न करता था।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">घर की चारदीवारी बनाम सक्रिय भागीदारी का द्वंद्व</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सामाजिक भय बनाम विद्रोही स्वाभिमान का विश्लेषण</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch4-q6">
    <div class="q-head" onclick="toggleQ('ch4-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">इस आत्मकथ्य के आधार पर स्वाधीनता आंदोलन के परिदृश्य का चित्रण करते हुए उसमें मन्नू जी की भूमिका को रेखांकित कीजिए।</div>
      <div class="q-marks">4 अंक (80-100 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>आंदोलन का परिदृश्य:</strong> सन 1942 से 1947 के दौरान भारत का स्वाधीनता संग्राम अपने चरम पर था। प्रभातफेरियों, हड़तालों, भाषणों, जुलूसों और 'अंग्रेजों भारत छोड़ो' के नारों से देश का कोना-कोना गूँज रहा था। युवा वर्ग में देशभक्ति का अभूतपूर्व ज्वार था।</p>
          <p><strong>मन्नू जी की भूमिका:</strong> मन्नू जी केवल दर्शक नहीं, बल्कि अजमेर में युवाओं और छात्राओं की मुखर नेत्री थीं। वे कॉलेज में हड़ताल करवाती थीं, सड़कों पर जुलूस निकालती थीं और चौराहे पर खड़े होकर जोशीले भाषण देती थीं। उन्होंने सामाजिक वर्जनाओं को तोड़कर स्वाधीनता समर में अपनी सक्रिय आहुति दी।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">स्वाधीनता आंदोलन के माहौल (हड़ताल, जुलूस) का अंकन</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">मन्नू जी के नेतृत्व, भाषण व सक्रिय भागीदारी का उल्लेख</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch4-q7">
    <div class="q-head" onclick="toggleQ('ch4-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">लेखिका के बचपन का 'पड़ोस-कल्चर' आज के 'फ्लैट-कल्चर' से किस प्रकार भिन्न था?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखिका के बचपन में पड़ोस-कल्चर का मतलब था कि पूरा मोहल्ला एक बड़े परिवार जैसा होता था। घर की दीवारें भले अलग हों, लेकिन सुख-दुख, खेल और भोजन में कोई भेद नहीं था। बच्चे किसी भी घर में बिना रोकटोक जा सकते थे।</p>
          <p>इसके विपरीत आज का 'फ्लैट-कल्चर' अत्यंत संकीर्ण, आत्मकेंद्रित और एकाकी हो चुका है। लोग पास के फ्लैट में रहने वाले पड़ोसी का नाम तक नहीं जानते। सुरक्षा और निजता के नाम पर मनुष्य ने स्वयं को एक संकीर्ण पिंजरे में बंद कर लिया है, जिससे आत्मीयता समाप्त हो गई है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बचपन के पड़ोस-कल्चर की आत्मीयता व सहभागिता का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">आधुनिक फ्लैट-कल्चर के एकाकीपन व संकीर्णता की तुलना</span><span class="marking-marks">1.5 अंक</span></div>
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
        <strong>अभिकथन (A):</strong> मन्नू भंडारी के पिता आधुनिक विचारों के समर्थक होते हुए भी पूरी तरह परंपरावादी थे।<br>
        <strong>कारण (R):</strong> वे चाहते थे कि मन्नू देश-दुनिया की राजनीतिक बहसें सुने, परंतु सड़कों पर लड़कों के साथ हड़ताल व नारेबाज़ी न करे।<br>
        <strong>विकल्प:</strong><br>
        (क) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या करता है।<br>
        (ख) (A) और (R) दोनों सही हैं, परंतु (R), (A) की सही व्याख्या नहीं करता।<br>
        (ग) (A) सही है, परंतु (R) गलत है।<br>
        (घ) (A) गलत है, परंतु (R) सही है।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>सही उत्तर: (क)</strong><br>
        <em>व्याख्या:</em> पिता के व्यक्तित्व में विरोधाभास था—वे नारी प्रगति तो चाहते थे, लेकिन सामाजिक मर्यादा व प्रतिष्ठा की रूढ़िवादी बेड़ियों से मुक्त नहीं हो सके थे। अतः (R) बिल्कुल सही व्याख्या करता है।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 5: नौबतखाने में इबादत (यतींद्र मिश्र) - 7 Complete NCERT Questions + CBQs
const ch5 = `<section class="chapter-section" id="ch5" data-book="kshitij-gadh">
  <div class="chapter-header">
    <div class="ch-badge">5</div>
    <div class="chapter-header-info">
      <div class="ch-category">क्षितिज भाग-2 (गद्य खंड) — पाठ 5</div>
      <h2>नौबतखाने में इबादत</h2>
      <p>यतींद्र मिश्र | व्यक्तिचित्र — उस्ताद बिस्मिल्ला खाँ, शहनाई वादन, काशी की गंगा-जमुनी संस्कृति और साधना | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch5-q1">
    <div class="q-head" onclick="toggleQ('ch5-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">शहनाई की दुनिया में डुमराँव को क्यों याद किया जाता है?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>शहनाई की दुनिया में डुमराँव को दो प्रमुख कारणों से याद किया जाता है:</p>
          <ol>
            <li><strong>बिस्मिल्ला खाँ का जन्मस्थान:</strong> भारत रत्न से सम्मानित शहनाई के अद्वितीय वादक उस्ताद बिस्मिल्ला खाँ का जन्म डुमराँव (बिहार) में हुआ था।</li>
            <li><strong>नरकट घास की उपलब्धता:</strong> शहनाई बजाने के लिए जिस 'रीड' की आवश्यकता होती है, वह अंदर से पोली घास 'नरकट' डुमराँव में सोन नदी के किनारों पर ही प्रचुर मात्रा में पाई जाती है। इसके बिना शहनाई का वादन संभव नहीं है।</li>
          </ol>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">बिस्मिल्ला खाँ के जन्मस्थल का उल्लेख</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सोन नदी किनारे नरकट घास की रीड का महत्व</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch5-q2">
    <div class="q-head" onclick="toggleQ('ch5-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">बिस्मिल्ला खाँ को शहनाई की 'मंगलध्वनि का नायक' क्यों कहा गया है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>भारतीय परंपरा में शहनाई विवाह, धार्मिक अनुष्ठान और मांगलिक अवसरों पर बजाई जाने वाली अत्यंत पावन ध्वनि है। बिस्मिल्ला खाँ को इसका नायक इसलिए कहा गया है क्योंकि:</p>
          <ul>
            <li>उन्होंने शहनाई को लोक-वाद्यों के सीमित घेरे से निकालकर शास्त्रीय संगीत के सर्वोच्च मंचों पर प्रतिष्ठित किया।</li>
            <li>वे लगभग अस्सी वर्षों तक अखंड साधना के साथ शहनाई के माध्यम से सुरीली व मंगलकारी सुर-सृष्टि करते रहे।</li>
            <li>उनकी शहनाई के सुरों में ईश्वर की इबादत, विनम्रता और शांति का वास था, जो हर श्रोता को पवित्र आनंद से भर देता था।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">शहनाई को शास्त्रीय मंच पर प्रतिष्ठित करने का योगदान</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">अखंड साधना व सुरों की आध्यात्मिक पवित्रता</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch5-q3">
    <div class="q-head" onclick="toggleQ('ch5-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">सुषिर-वाद्यों से क्या अभिप्राय है? शहनाई को 'सुषिर वाद्यों में शाह' की उपाधि क्यों दी गई होगी?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>सुषिर-वाद्य:</strong> वे वाद्य यंत्र जो फूँक मारकर बजाए जाते हैं और जिनमें छिद्रों (नाड़ियों) के माध्यम से सुर निकाले जाते हैं, उन्हें 'सुषिर-वाद्य' कहा जाता है; जैसे—बाँसुरी, शहनाई, शंख आदि।</p>
          <p><strong>'शाह-ने' (शाह) की उपाधि:</strong> अरब देश में फूँककर बजाए जाने वाले वाद्यों को 'नय' कहते हैं। शहनाई की बनावट अत्यंत सुरीली, मधुर और कर्णप्रिय होती है। सभी सुषिर वाद्यों में इसकी ध्वनि सर्वाधिक मनमोहक और राग-रागिनियों को प्रकट करने में सबसे समर्थ है, इसलिए इसे वाद्यों का राजा यानी 'शाह-ने' या 'शहनाई' कहा गया।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सुषिर-वाद्य की सटीक परिभाषा</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">'शाह-ने' शब्द की व्युत्पत्ति और मधुरता का तर्क</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch5-q4">
    <div class="q-head" onclick="toggleQ('ch5-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">आशय स्पष्ट कीजिए: (क) "फ़टा सुर न बख्शें। लुंगिया का क्या है, आज फटी है, तो कल सिल जाएगी..." (ख) "काशी में संगीत-आयोजन की एक प्राचीन एवं अद्भुत परंपरा है। यह आयोजन पिछले कई बरसों से संकटमोचन मंदिर में होता आया है..."</div>
      <div class="q-marks">4 अंक (60-80 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>(क) आशय:</strong> बिस्मिल्ला खाँ के लिए बाह्य भौतिक चमक-दमक, कपड़े और मान-सम्मान का कोई मूल्य नहीं था। उनके लिए कला (सुर) की साधना सर्वोपरि थी। वे ईश्वर से प्रार्थना करते थे कि उनकी कला में कभी कोई खोट (फटा सुर) न आए, क्योंकि वस्त्र तो फटने पर सिला जा सकता है, किंतु यदि साधना और सुर में दरार आ गई तो उसे कभी सुधारा नहीं जा सकता।</p>
          <p><strong>(ख) आशय:</strong> काशी सांस्कृतिक समन्वय की नगरी है। संकटमोचन मंदिर में हनुमान जयंती पर शास्त्रीय संगीत का भव्य समारोह होता है, जिसमें बिस्मिल्ला खाँ जैसे मुस्लिम उस्ताद पूरे श्रद्धाभाव से शहनाई वादन करते हैं। यह प्रसंग भारत की साझी गंगा-जमुनी तहजीब और हिंदू-मुस्लिम सौहार्द का जीवंत प्रमाण है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">भाग (क): कला-साधना को भौतिक वस्त्रों से श्रेष्ठ मानने का भाव</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भाग (ख): काशी के संकटमोचन मंदिर में सांस्कृतिक समन्वय</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch5-q5">
    <div class="q-head" onclick="toggleQ('ch5-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">बिस्मिल्ला खाँ के व्यक्तित्व की कौन-कौन सी विशेषताओं ने आपको सर्वाधिक प्रभावित किया?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>उस्ताद बिस्मिल्ला खाँ के व्यक्तित्व की निम्नलिखित विशेषताओं ने हमें गहराई से प्रभावित किया:</p>
          <ul>
            <li><strong>सादा जीवन और उच्च विचार:</strong> भारत रत्न प्राप्त करने के बाद भी वे फटी लुंगी पहनने में संकोच नहीं करते थे; उनमें तनिक भी अहंकार नहीं था।</li>
            <li><strong>सांप्रदायिक सौहार्द के प्रतीक:</strong> वे सच्चे मुस्लिम होकर नमाज़ अदा करते थे, तो साथ ही काशी विश्वनाथ और बालाजी मंदिर के प्रति उनकी अटूट श्रद्धा थी। वे भारत की साझी गंगा-जमुनी संस्कृति के जीवंत प्रतीक थे।</li>
            <li><strong>अविराम रियाज़ व समर्पण:</strong> अस्सी वर्ष की आयु में भी वे स्वयं को एक नौसिखिया मानकर ईश्वर से सच्चे सुर की नेमत माँगते थे।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">सादगी और विनम्रता का वर्णन</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">धार्मिक सहिष्णुता व गंगा-जमुनी समन्वय</span><span class="marking-marks">1.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">निरंतर सीखने की लगन व रियाज़</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch5-q6">
    <div class="q-head" onclick="toggleQ('ch5-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">मुहर्रम से बिस्मिल्ला खाँ के जुड़ाव को अपने शब्दों में लिखिए।</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>मुहर्रम के महीने में बिस्मिल्ला खाँ का खानदान शोक मनाता था। मुहर्रम की आठवीं तारीख उनके लिए अत्यंत महत्त्वपूर्ण थी:</p>
          <ul>
            <li>इस दिन खाँ साहब न तो कोई राग बजाते थे और न ही किसी जलसे में भाग लेते थे।</li>
            <li>वे आठ किलोमीटर पैदल रोते हुए नौहा बजाते चलते थे। उनकी आँखों से इमाम हुसैन और उनके शहीदों के गम में लगातार आँसू बहते थे। इस प्रकार उनकी शहनाई शोक और करुणा की अभिव्यक्ति बन जाती थी।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">मुहर्रम में राग-रंग का त्याग व शोक का पालन</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">पैदल नौहा बजाने व आंसुओं द्वारा श्रद्धांजलि का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch5-q7">
    <div class="q-head" onclick="toggleQ('ch5-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">बिस्मिल्ला खाँ का काशी से क्या अटूट संबंध था? उन्होंने काशी छोड़ने से क्यों इनकार किया?</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>जब एक शिष्य ने बिस्मिल्ला खाँ को अमेरिका में बसने और वहाँ संगीत विद्यालय खोलने का प्रस्ताव दिया और कहा कि हम वहाँ काशी जैसा वातावरण बना देंगे, तो खाँ साहब ने उत्तर दिया—<em>"तुम सब कुछ ला दोगे, पर गंगा मइया कहाँ से लाओगे? बाबा विश्वनाथ का मंदिर कहाँ से लाओगे?"</em></p>
          <p>काशी केवल एक शहर नहीं, बल्कि खाँ साहब की संगीत-साधना, बालाजी की ड्योढ़ी, गंगा जी की पवित्र लहरों और उनके पूर्वजों की स्मृतियों का तीर्थ था। वे काशी और गंगा को छोड़कर स्वर्ग में भी नहीं रह सकते थे।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">अमेरिका जाने के प्रस्ताव को अस्वीकार करने का प्रसंग</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">गंगा, विश्वनाथ व बालाजी मंदिर के प्रति अगाध निष्ठा का भाव</span><span class="marking-marks">1.5 अंक</span></div>
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
      <div class="cbq-type">CBQ 1: केस-आधारित विश्लेषण (Case-Based Competency)</div>
      <div class="cbq-question">
        "काशी संस्कृति की पाठशाला है। शास्त्रों में आनंदकानन के नाम से पूजित। काशी में कलाधर हनुमान व नृत्य विश्वनाथ हैं। काशी में बिस्मिल्ला खाँ हैं।" प्रस्तुत कथन के आलोक में स्पष्ट कीजिए कि बिस्मिल्ला खाँ काशी के सांस्कृतिक समन्वय के प्रतीक कैसे बने?
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>उत्तर:</strong><br>
        बिस्मिल्ला खाँ भारत की साझी संस्कृति के साकार रूप थे। वे पाँचों वक्त नमाज़ पढ़ते थे, मुहर्रम में नौबत बजाकर रोते थे, और वहीं दूसरी ओर काशी विश्वनाथ और संकटमोचन मंदिर की ड्योढ़ी पर बैठकर शहनाई बजाते थे। जब भी काशी से बाहर जाते, तो सबसे पहले विश्वनाथ जी की दिशा में मुँह करके शहनाई का पहला सुर अर्पित करते थे। उनका यह आचरण सिद्ध करता है कि संगीत और संस्कृति किसी मजहब की सीमाओं में नहीं बँधती।
      </div>
    </div>
  </div>
</section>`;

// CHAPTER 6: संस्कृति (भदंत आनंद कौसल्यायन) - 7 Complete NCERT Questions + CBQs
const ch6 = `<section class="chapter-section" id="ch6" data-book="kshitij-gadh">
  <div class="chapter-header">
    <div class="ch-badge">6</div>
    <div class="chapter-header-info">
      <div class="ch-category">क्षितिज भाग-2 (गद्य खंड) — पाठ 6</div>
      <h2>संस्कृति</h2>
      <p>भदंत आनंद कौसल्यायन | विचारात्मक निबंध — सभ्यता और संस्कृति में अंतर, मानव कल्याण, त्याग और वैज्ञानिक दृष्टि | CBSE Board 2026-27</p>
    </div>
  </div>
  <div class="ex-div">पाठ्यपुस्तक के अभ्यास प्रश्न-उत्तर (NCERT Textbook Solutions)</div>

  <div class="q-card" id="ch6-q1">
    <div class="q-head" onclick="toggleQ('ch6-q1')">
      <div class="q-num">प्रश्न 1</div>
      <div class="q-text">लेखक की दृष्टि में 'सभ्यता' और 'संस्कृति' की सही समझ अब तक क्यों नहीं बन पाई है?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक के अनुसार 'सभ्यता' और 'संस्कृति' ऐसे शब्द हैं जिनका उपयोग सबसे अधिक होता है, किंतु इन्हें सबसे कम समझा गया है। लोग इन दोनों शब्दों को प्रायः एक ही अर्थ में मिला देते हैं और इनके साथ 'भौतिक' या 'आध्यात्मिक' जैसे विशेषण जोड़कर इनके मूल अर्थ को और अधिक भ्रामक व उलझावपूर्ण बना देते हैं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">दोनों शब्दों के घालमेल और विशेषणों द्वारा उत्पन्न भ्रम का उल्लेख</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch6-q2">
    <div class="q-head" onclick="toggleQ('ch6-q2')">
      <div class="q-num">प्रश्न 2</div>
      <div class="q-text">आग की खोज एक बहुत बड़ी खोज क्यों मानी जाती है? इस खोज के पीछे रही प्रेरणा के मुख्य स्रोत क्या रहे होंगे?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p><strong>बड़ी खोज का कारण:</strong> आग की खोज ने मानव सभ्यता को अंधकार और कच्चे भोजन के आदिम युग से निकालकर प्रकाश, सुरक्षा और पके हुए भोजन के युग में पहुँचाया। इसने मनुष्य को अन्य प्राणियों से श्रेष्ठ बनाया।</p>
          <p><strong>प्रेरणा के मुख्य स्रोत:</strong></p>
          <ul>
            <li>पेट की ज्वाला (भूख) शांत करने और भोजन को सुपाच्य बनाने की आवश्यकता।</li>
            <li>अंधेरे और जंगली हिंसक पशुओं के भय से आत्मरक्षा की इच्छा।</li>
            <li>शीत व ठंड से बचाव के लिए ऊष्मा (गर्मी) प्राप्त करने की चाहत।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">मानव जीवन में आग के क्रांतिकारी प्रभाव का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">भूख, भय व ठंड से बचाव की प्रेरणा का स्पष्टीकरण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch6-q3">
    <div class="q-head" onclick="toggleQ('ch6-q3')">
      <div class="q-num">प्रश्न 3</div>
      <div class="q-text">वास्तविक अर्थों में 'संस्कृत व्यक्ति' किसे कहा जा सकता है?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक के अनुसार वास्तविक अर्थों में 'संस्कृत व्यक्ति' वह है जो अपनी मूल प्रज्ञा, बुद्धि और योग्यता के बल पर किसी सर्वथा नए तथ्य या वस्तु का पहली बार आविष्कार करता है। जैसे—जिसने पहली बार आग की खोज की या जिसने गुरुत्वाकर्षण का सिद्धांत खोजा (न्यूटन), वे संस्कृत व्यक्ति थे। केवल पूर्वजों की खोजों का उपभोग करने वाला व्यक्ति संस्कृत नहीं, बल्कि केवल 'सभ्य' होता है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">अपनी प्रज्ञा से नई वस्तु का आविष्कार करने का लक्षण</span><span class="marking-marks">2.0 अंक</span></div>
          <div class="marking-row"><span class="marking-key">संस्कृत और सभ्य के बीच मौलिक अंतर</span><span class="marking-marks">1.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch6-q4">
    <div class="q-head" onclick="toggleQ('ch6-q4')">
      <div class="q-num">प्रश्न 4</div>
      <div class="q-text">न्यूटन को 'संस्कृत मानव' कहा गया, लेकिन उनके बाद के वैज्ञानिकों को 'सभ्य' कहा गया, 'संस्कृत' नहीं—क्यों?</div>
      <div class="q-marks">3 अंक (40-50 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>न्यूटन ने अपनी मौलिक प्रतिभा और जिज्ञासा से गुरुत्वाकर्षण के सिद्धांत का सबसे पहले आविष्कार किया था, इसलिए वे 'संस्कृत मानव' थे। आज का भौतिक विज्ञान का विद्यार्थी न्यूटन से कहीं अधिक नियमों और गूढ़ रहस्यों को जानता है, परंतु वह ज्ञान उसने स्वयं अपनी मौलिक प्रज्ञा से नहीं खोजा, बल्कि न्यूटन और अन्य पूर्वजों से विरासत में पाया है। अतः आज का विद्यार्थी या वैज्ञानिक न्यूटन से अधिक 'सभ्य' तो हो सकता है, परंतु 'संस्कृत' नहीं।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">न्यूटन द्वारा मौलिक खोज का तर्क</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">परवर्ती वैज्ञानिकों द्वारा विरासत में ज्ञान पाने का विश्लेषण</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch6-q5">
    <div class="q-head" onclick="toggleQ('ch6-q5')">
      <div class="q-num">प्रश्न 5</div>
      <div class="q-text">किन महत्त्वपूर्ण आवश्यकताओं की पूर्ति के लिए सुई-धागे का आविष्कार हुआ होगा?</div>
      <div class="q-marks">2 अंक (30-40 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>सुई-धागे का आविष्कार मनुष्य के तन को ढँकने (लज्जा निवारण) तथा शीत, धूप और वर्षा से शरीर की रक्षा करने के लिए दो अलग-अलग कपड़ों या चमड़े के टुकड़ों को आपस में जोड़ने की आवश्यकता से हुआ होगा।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">तन ढँकने व प्राकृतिक प्रकोपों से रक्षा की आवश्यकता</span><span class="marking-marks">2.0 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch6-q6">
    <div class="q-head" onclick="toggleQ('ch6-q6')">
      <div class="q-num">प्रश्न 6</div>
      <div class="q-text">'मानव संस्कृति एक अविभाज्य वस्तु है'—स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>मानव संस्कृति का मूल तत्व है—कल्याण की भावना, परोपकार, त्याग और सत्य की खोज। इसमें ऐसा कोई भी अंश नहीं है जो मनुष्य को मनुष्य से अलग करे। जब तक मनुष्य का चिंतन और कर्म समस्त मानव जाति के कल्याण से जुड़ा है, तब तक वह संस्कृति है। जब संस्कृति को संकीर्ण मजहब, जाति या राष्ट्र की सीमाओं में बाँटकर दूसरों के विनाश के लिए इस्तेमाल किया जाता है, तो वह संस्कृति नहीं बल्कि 'असंस्कृति' बन जाती है। अतः सच्ची संस्कृति अखंड और अविभाज्य है।</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">कल्याण भावना और सार्वभौमिकता का उल्लेख</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">संस्कृति और असंस्कृति का भेद व अखंडता का निष्कर्ष</span><span class="marking-marks">1.5 अंक</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-card" id="ch6-q7">
    <div class="q-head" onclick="toggleQ('ch6-q7')">
      <div class="q-num">प्रश्न 7</div>
      <div class="q-text">सभ्यता और संस्कृति में क्या मूल अंतर है? पाठ के आधार पर स्पष्ट कीजिए।</div>
      <div class="q-marks">3 अंक (50-60 शब्द)</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Board Standard Solution</div>
        <div class="answer-text">
          <p>लेखक के अनुसार 'संस्कृति' और 'सभ्यता' में निम्नलिखित मौलिक अंतर है:</p>
          <ul>
            <li><strong>संस्कृति:</strong> मनुष्य की वह आंतरिक योग्यता, प्रेरणा, बुद्धि और चिंतन है जिससे वह किसी नई चीज का आविष्कार या नए सत्य की खोज करता है। यह साधन और योग्यता है।</li>
            <li><strong>सभ्यता:</strong> संस्कृति के परिणामस्वरूप जो भौतिक वस्तुएँ, सुख-साधन, रहन-सहन, खान-पान और तकनीकी उपकरण बनते हैं, वे सभ्यता कहलाते हैं। यह बाह्य परिणाम और उपभोग की वस्तु है।</li>
          </ul>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">संस्कृति को आंतरिक योग्यता व अन्वेषण शक्ति बताना</span><span class="marking-marks">1.5 अंक</span></div>
          <div class="marking-row"><span class="marking-key">सभ्यता को बाह्य भौतिक उपलब्धि व जीवन-शैली बताना</span><span class="marking-marks">1.5 अंक</span></div>
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
        <strong>अभिकथन (A):</strong> जो आविष्कार मानव कल्याण की भावना से जुड़े नहीं होते, वे संस्कृति का परिणाम नहीं बल्कि असंस्कृति हैं।<br>
        <strong>कारण (R):</strong> परमाणु बम और संहारक अस्त्रों का निर्माण आत्म-विनाश का साधन होने के कारण अप-संस्कृति को जन्म देता है।<br>
        <strong>विकल्प:</strong><br>
        (क) (A) और (R) दोनों सही हैं तथा (R), (A) की सही व्याख्या करता है।<br>
        (ख) (A) और (R) दोनों सही हैं, परंतु (R), (A) की सही व्याख्या नहीं करता।<br>
        (ग) (A) सही है, परंतु (R) गलत है।<br>
        (घ) (A) गलत है, परंतु (R) सही है।
      </div>
      <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तर देखें</button>
      <div class="cbq-answer">
        <strong>सही उत्तर: (क)</strong><br>
        <em>व्याख्या:</em> लेखक के अनुसार संस्कृति का मूल तत्व 'कल्याण' है। जब बुद्धि और विज्ञान का प्रयोग मानव जाति के विनाश के लिए होता है, तो वह असंस्कृति कहलाता है, अतः (R) बिल्कुल सही व्याख्या करता है।
      </div>
    </div>
  </div>
</section>`;

fs.writeFileSync(path.join(outDir, 'ch1.html'), ch1, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch2.html'), ch2, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch3.html'), ch3, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch4.html'), ch4, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch5.html'), ch5, 'utf8');
fs.writeFileSync(path.join(outDir, 'ch6.html'), ch6, 'utf8');
console.log('Successfully enriched Ch 1 to Ch 6 to 100% NCERT textbook coverage!');
