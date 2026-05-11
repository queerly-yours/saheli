import { articlesSummary } from "./all-articles-summary";
import { subcategoriesSummary } from "./all-subcategory-summary";
import { archive, ArchiveImage, category } from "./data-model";
import { publicationsCategory } from "./publications";
import { filterByArrayKeyAndIds, filterByIds } from "./utils";

export const categories: category[] = [
    {
        id: '1',
        archiveImg: '../../../assets/archive/3.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['1'], 'categoryIdList'),
        title: 'About Us',
        subtitle: {
            en: 'an idea is born',
            hi: 'एक विचार का जन्म'
        },
        hindiTitle: 'हमारे बारे में',
        decades: ['1980s', '2000s', '2010s'],
        description: {
            en: [
                `Saheli was set up in 1981 in New Delhi, India, initially as a crisis intervention centre. Early struggles against oppression and violence within marriage, family and community led to powerful campaigns against dowry, domestic violence, rape and discrimination against women in society and the law. Our work on women’s health included campaigns against coercive population control policies, hazardous contraceptives, sex determination, and the unethical trials and promotion of vaccines against women’s fertility and cervical cancer. We have confronted challenges posed by increasing conservatisms, communal politics, militarisation, globalisation and state repression, jointly with queer, Dalit, Adivasi and democratic rights’ groups, and other peoples’ movements.`,
            ],
            hi: [`सहेली की स्थापना 1981 में, नई दिल्ली, भारत, में हुई. शुरुआत में सहेली ने पीड़ित औरतों के लिए परामर्श और समर्थन केंद्र के रूप में काम किया। हमारे शुरुआती कामों में औरतों पर होने वाली घरेलू हिंसा, यौनिक हिंसा और बलात्कार की शिकार औरतों को भावनात्मक समर्थन और कानूनी सलाह शामिल थे. हम ने अपने काम को हमेशा गंभीर राजनैतिक काम के रूप में देखा और औरतों का हर मुद्दा, समाज का  मुद्दा है, इस समझ से अपने काम को आगे बदाया. विवाह, परिवार और समुदाय के भीतर औरतों के दमन और हिंसा के खिलाफ संघर्षों ने दहेज, घरेलू हिंसा, बलात्कार और कानून व्यवस्था में महिलाओं के खिलाफ भेदभाव के विरुद्ध अभियानों को जन्म दिया। हमारे काम में महिलाओं के स्वास्थ्य पर जैसे कि जबरन जनसंख्या नियंत्रण नीतियों, खतरनाक गर्भनिरोधकों, लिंग निर्धारण, आपातकालीन गर्भनिरोधकों की अनैतिक बिक्री और सर्वाइकल कैंसर के टीकों के खिलाफ अभियान शामिल रहे। हमने कवीयर, दलित, आदिवासी एवं लोकतांत्रिक अधिकारों पर काम कर रहे समूहों और अन्य जन आंदोलनों के साथ मिलकर बढ़ते रूढ़िवादी सांप्रदायिक राजनीति, सैन्यीकरण, वैश्वीकरण और राज्य दमन से उत्पन्न चुनौतियों पर भी काम किया.`]
        },
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['1'], 'categoryIdList'),
        isOpen: false,
        isCategory: true,
    },
    {
        id: '2',
        archiveImg: '../../../assets/archive/1.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['2'], 'categoryIdList'),
        title: 'Resisting Violence',
        subtitle: {
            en: 'the fight goes on',
            hi: 'संघर्ष जारी है'
        },
        hindiTitle: 'हिंसा के खिलाफ़',
        decades: ['1980s', '1990s', '2000s', '2010s'],
        description: {
            en: [
                `Saheli has worked against various forms of violence against women since its inception. We raised our voice when dowry harassment and murders were treated as “private family matters,” spoke out against rape, moral policing, sex-selective abortions, sati and honour killings, and made linkages between inequities in law and domestic violence. We recognised coercive population policies as violence by the State and family, highlighted sexual harassment in educational and work places, and strategised against caste-based, communal, ethnic and homophobic violence. We also join hands with groups across the country against repression by the State and violence faced by women in conflict areas. Our campaigns include awareness work, studies, discussions, street plays, self-defence workshops, handling individual cases of workplace sexual harassment, and participating in efforts to reform and implement the law in letter and spirit.`
            ],
            hi: [`सहेली ने शुरुआत से ही महिलाओं के खिलाफ विभिन्न प्रकार की हिंसा के खिलाफ काम किया है। हमने उस समय आवाज उठाई जब दहेज उत्पीड़न और हत्याओं को “निजी पारिवारिक मामले” के रूप में देखा जाता था, बलात्कार, नैतिक पुलिसिंग, लिंग-चयन आधारित गर्भपात, सती और ऑनर किलिंग के खिलाफ बोला, और कानून में असमानताओं तथा घरेलू हिंसा के बीच संबंध स्थापित किए। हमने दबावकारी जनसंख्या नीतियों को राज्य और परिवार द्वारा की जाने वाली हिंसा के रूप में पहचाना, कार्यस्थल पर यौन उत्पीड़न को उजागर किया, और जाति आधारित, सांप्रदायिक, जातीय और समलैंगिकता-विरोधी हिंसा के खिलाफ रणनीतियाँ विकसित कीं। हम देशभर के समूहों के साथ राज्य दमन और तनावग्रस्त क्षेत्रों में महिलाओं पर होने वाली हिंसा के खिलाफ भी जुड़े रहे। हमारे अभियानों में जागरूकता, अध्ययन, चर्चा, नुक्कड़ नाटक, आत्मरक्षा कार्यशालाएँ, कार्यस्थल पर यौन उत्पीड़न के व्यक्तिगत मामलों पर काम करना, और कानून के निर्माण तथा उसके प्रभावी कार्यान्वयन के प्रयासों में भागीदारी शामिल है।`]
        },
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['2'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '3',
        archiveImg: '../../../assets/archive/2.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['3'], 'categoryIdList'),
        title: 'Countering Communalism',
        subtitle: {
            en: 'a challenge that keeps growing',
            hi: 'एक बढ़ती चुनौती'
        },
        hindiTitle: 'साम्प्रदायिकता के खिलाफ़',
        decades: ['1980s', '1990s', '2000s', '2010s'],
        description: {
            en: [
                `Delhi 1984. Bhagalpur 1989. Ayodhya, Kolkata, Surat 1992. Mumbai 1993. Gujarat 2002. Kandhamal 2008. Muzaffarnagar 2013. Delhi 2020. These are just some of the dates that mark fractures that have divided communities across India over the decades. Beyond violent outbursts, communal politics has long-term impacts on women’s rights and freedoms. Our crisis work sharpened our understanding of how religion and religious laws shape women’s lives, sexuality and access to resources. Cases like Shah Bano showed how women can be pushed back “for the sake of the community,” shaping our critique of communal politics and its gendered consequences.`
            ],
            hi: [`दिल्ली 1984। अयोध्या, कोलकाता, सूरत 1992। मुंबई 1993। गुजरात 2002। कंधमाल 2008। मुजफ्फरनगर 2013। दिल्ली 2020। ये तिथियाँ उन दरारों को दर्शाती हैं जिन्होंने दशकों से समुदायों को विभाजित किया है। सांप्रदायिक हिंसा से परे, सांप्रदायिक राजनीति का महिलाओं के अधिकारों और स्वतंत्रताओं पर दीर्घकालिक प्रभाव पड़ता है। संकटग्रस्त औरतों के साथ हमारे काम ने यह समझ तेज की कि धर्म और धार्मिक कानून महिलाओं के जीवन, यौनिकता और संसाधनों तक उनकी पहुंच को प्रभावित करते हैं। शाह बानो जैसे मामलों ने दिखाया कि कैसे महिलाओं को “समुदाय के नाम पर” पीछे धकेला जा सकता है, जिसने  सांप्रदायिक राजनीति और उसके लैंगिक परिणामों कों लेकर हमारी समझ  को गहरा किया।`]
        },
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['3'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '4',
        archiveImg: '../../../assets/archive/3.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['4'], 'categoryIdList'),
        title: 'Women\u2019s Health',
        subtitle: {
            en: 'research, analyse, struggle',
            hi: 'शोध, विश्लेषण, संघर्ष'
        },
        hindiTitle: 'महिला स्वास्थ्य',
        decades: ['1980s', '1990s', '2000s', '2010s'],
        description: {
            en: [
                `New technologies and contraceptives have repeatedly posed dangers to women’s health, with risks overlooked or ignored by agencies promoting them. Saheli, with other women’s and health groups, has pressured the government to reduce risks and, where necessary, ban hazardous technologies. Women’s health have been key focus areas, from action against misuse of E.P. drugs to campaigns against coercive population control programmes, long-acting hazardous contraceptives, sex determination, new reproductive technologies, unethical trials and promotion of anti-fertility and HPV vaccines. We have demanded accountability from both the state and the market, women’s right to information, safer contraceptives, adequate health facilities, and redressal for adverse effects. We oppose measures like the two-child norm and critiqued ethical guidelines and power imbalances in medical research, pushing for safeguards in clinical trials. Our activities ranged from taking recourse to the courts, engaging with parliamentarians and lawmakers, to public campaigns, seminars, street plays, protests and direct interventions.`
            ],
            hi: [`नई तकनीकों और गर्भ निरोधकों ने बार बार औरतों के स्वास्थ्य के लिए खतरे पैदा किये हैं, और ये खतरे उन एजेंसियों द्वारा अनदेखे किये गए हैं जो इनको बढावा दे रही हैं. सहेली ने दूसरे महिला और स्वास्थ्य समूहों के साथ मिल कर सरकार पर दबाव डाला है कि इन खतरों को कम किया जाए और जहाँ ज़रूरी है वहां इस खतरनाक तक़नीकों पर प्रतिबन्ध लगाए जाएँ. औरतों का स्वास्थ्य हमारे काम के केंद्र में रहा है – ई पी ड्रग्स के गलत इस्तेमाल के खिलाफ कार्यवाही से लेकर दबावकारी जनसँख्या नियंत्रण कार्यक्रमों, दूरगामी हानिकारक प्रभावों वाले खतरनाक गर्भ निरोधकों, लिंग चयन, नई प्रजनन तकनीकें, अनैतिक परीक्षण, और गर्भ निरोधक और एच.पी.व़ी को बढावा देने के खिलाफ कार्यवाही तक. हम ने राज्य और बाज़ार दोनों से जवाबदेही की मांग की है कि औरतों को सूचना के अधिकार, सुरक्षित गर्भ निरोधक, समुचित स्वास्थ्य सुविधायें, और हानिकारक प्रभावों का निदान मिले. हम ने दो-बच्चा नीति का विरोध किया और नैतिक दिशा निर्देशों की समीक्षा की और मेडिकल शोधों में सत्ता असंतुलन  और क्लिनिकल परीक्षणों में सुरक्षा पर ध्यान देने पर जोर दिया. हमारी गतिविधियों में शामिल था – कोर्ट्स में जाना, सांसदों और कानून बनाने वालों से मिलना, सार्वजनिक अभियान, सेमीनार, नुक्कड़ नाटक, प्रदर्शन और सीधा हस्तक्षेप.`]
        },
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['4'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '5',
        archiveImg: '../../../assets/archive/1.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['5'], 'categoryIdList'),
        title: 'Sexualities and Gender',
        subtitle: {
            en: 'diversities, desires, dignity, rights',
            hi: 'विविधिताएं, चाहतें, सम्मान, अधिकार'
        },
        hindiTitle: 'यौनिकताएं व जेंडर',
        decades: ['2000s', '2010s'],
        description: {
            en: [
                `Many of our campaigns have addressed control of women’s sexuality by family, community, social structures and the law. Since the late 1990s, we have engaged with wider questions of sexuality, including LGBT rights. After the controversy around the film Fire and as part of the Campaign for Lesbian Rights (CALERI) (1999), we worked to make the issue visibilise the issue and generate public debate. Since 2004, we were part of Voices Against 377, a Delhi-based coalition that filed a key intervention at the Delhi High Court, contributing to the reading down of Section 377 of the IPC and the decriminalisation of adult consensual sexual relations. Marching at Delhi Queer Pride and responding to homophobia and lesbian/gay suicides, we affirm that women’s and queer struggles are linked. We continue to work towards recognition of sex work as work, dignity for all transgender people and intersex communities.`
            ],
            hi: [`अपने बहुत सारे अभियानों में हम ने परिवार, समुदाय, सामाजिक ढांचों और कानून द्वारा औरतों की यौनिकता पर नियंत्रण के मुद्दे को संबोधित किया है. 1990 के आखरी वर्षों से हम ने यौनिकता, जिस में एल जी बी टी समुदायों के अधिकार शामिल हैं, के बड़े सवालों पर भी बात करना शुरू किया. फायर फिल्म के विवाद के बाद और कैंपेन फॉर लेस्बियन राइट्स के हिस्से के रूप में हम ने मुद्दे को सामने लाने और उस पर सार्वजनिक बहस शुरू करने के लिए काम किया. 2004 से हम वॉइसेस अगेंस्ट 377, दिल्ली के एक गठबंधन का हिस्सा रहे हैं, जिस ने दिल्ली उच्च न्यायालय में एक महत्वपूर्ण याचिका दायर की थी, जिस के परिणामस्वरूप सेक्शन 377 के दायरे को सीमित कर दिया गया और वयस्कों में स्वीकृति से बनाये गए यौन संबंधों का गैरअपराधिकरण किया गया, दिल्ली क्वीयर प्राइड में मार्च करते हुए और समलैंगिक लोगों के प्रति नफरत और लेस्बियन/गे आत्महत्याओं को संबोधित करते हुए, हम दृढ़ता से यह मानते हैं कि औरतों के और क्वीयर लोगों के संघर्ष जुड़े हुए हैं. हम सेक्स काम को काम को मान्यता, और ट्रांसजेंडर लोगों और इंटर-सेक्स समुदायों को सम्मान दिलाने के लिए काम करते रहेंगे.`]
        },
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['5'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '6',
        archiveImg: '../../../assets/archive/2.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['6'], 'categoryIdList'),
        title: 'Contesting Caste',
        subtitle: {
            en: 'structured violence and discrimination',
            hi: 'ढांचागत हिंसा और भेदभाव'
        },
        hindiTitle: 'जातिवाद के खिलाफ',
        decades: ['1990s', '2000s', '2010s'],
        description: {
            en: [
                `Over the last three decades, women’s oppression linked to religious and caste identity has become clearer, including how caste honour and privilege produce inequalities among women and sanction violence, especially sexual violence against lower caste women. Since the 1990s, Saheli has organised internal and open meetings to explore gender-caste intersections, share experiences, address challenges, and reflect on relationships between caste-based movements, caste-based women’s groups and the women’s movement. In 2008, we published Talking marriage, caste and community: Voices from within, based on a study of the intersection of marriage, sexuality, caste and community. We also evolved the play Kaun Jaat, using monologues to foreground women’s experiences of community control and trigger discussion. We have also engaged with the role of caste panchayats in controlling women’s sexuality and freedoms.`
            ],
            hi: [`पिछले तीन दशकों से अधिक के दौरान यह स्पष्ट हुआ है कि किस प्रकार महिलाओं का दमन धार्मिक और जातीय पहचान के साथ जुडा है. किस प्रकार जातीय इज्ज़त और विशेषाधिकार औरतों के बीच में असमानताएं पैदा करते हैं और हिंसा, ख़ास तौर से निम्न जाति की महिलाओं के खिलाफ यौनिक हिंसा कों स्वीकृति देते हैं? 1990 के बाद से सहेली ने बहुत सी आंतरिक और खुली बैठकें की हैं, जिन में जेंडर-जाति के इंटरसेक्शन (प्रतिच्छेदन), अनुभवों को बांटना, जाति-आधारित आन्दोलनों, जाति-आधारित महिला समूहों और महिला आन्दोलनों के बीच के संबंधों को समझने की कोशिश की गई. 2008 में हम ने विवाह, जाति, यौनिकता और समुदाय के इंटरसेक्शन पर एक अध्ययन पर आधारित एक रिपोर्ट छापी थी – ‘विवाह, जाति और समुदाय की बातचीत : औरतों की आवाज़ें.’ हम ने एक नाटक भी तैयार किया जिसका नाम था, ‘कौन जात’, जिस में एकालाप का इस्तेमाल करते हुए औरतों के सामुदायिक नियंत्रण के अनुभवों को दर्शाया गया और चर्चाएँ भी की गई. हम ने औरतो की यौनिकता और आज़ादियों पर नियंत्रण में जाति पंचायतों की भूमिका पर भी काम किया.`]
        },
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['6'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '7',
        archiveImg: '../../../assets/archive/3.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['7'], 'categoryIdList'),
        title: 'State Repression',
        subtitle: {
            en: 'challenging the state as aggressor',
            hi: 'राज्य की आक्रामकता को चुनौती'
        },
        hindiTitle: 'राजकीय दमन',
        decades: ['1980s', '1990s', '2000s', '2010s'],
        description: {
            en: [
                `Saheli has maintained a strong critique of the coercive and repressive role of the State, whether in the name of population control, development, or “law and order.” We have campaigned against coercive population control measures, for repeal of draconian laws such as the Armed Forces Special Powers Act (AFSPA), Terrorism and Disruptive Activities (Prevention of) Act, (TADA) Prevention of Terrorism Act (POTA), and Unlawful Activities (Prevention) ACT (UAPA). Through fact-finding on militarisation and campaigns against disappearances, arbitrary arrests, torture, encounter killings and the use of sexual violence, we joined hands with women’s groups, students groups, human rights, democratic rights and peoples’ organisations. We have also been part of the nationwide alliance “Women against Sexual Violence and State Repression,” strengthening efforts against such terror by the state.`
            ],
            hi: [`सहेली ने हमेशा ही राज्य की दमनकारी और बाध्यकारी भूमिका की तीखी अलोचना की है, चाहे वे जनसँख्या नियंत्रण की नीतियां हों या “कानून और व्यवस्था“ के सवाल. हम ने सशस्त्र सेना विशेषाधिकार कानून, आतंकवादी और विघटनकारी गतिविधियाँ (रोकथाम) कानून, आतंकवाद रोकथाम कानून, और गैरकानूनी गतिविधियाँ रोकथाम अधिनियम जैसे कठोर कानूनों को समाप्त करने के लिए अभियान किये हैं. हम महिला संगठनों, छात्र संगठनों, मानवाधिकार, जनतांत्रिक अधिकार और जन संगठनों के साथ मिल कर सैनियकरण, मनमानी गरिफ्तारी, यातनाओं, एनकाउंटर हत्याओं, और यौनिक हिंसा के खिलाफ अभियानों और तथ्य खोजी टीमों  का हिस्सा बने. हम राज्य के आतंक के खिलाफ़ हो रही कोशिशों को मजबूत करने के लिए राष्ट्रव्यापी गठबंधन “यौनिक हिंसा और राजकीय दमन के खिलाफ़ महिलायें” का भी हिस्सा रहे हैं.`]
        },
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['7'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '8',
        archiveImg: '',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['8'], 'categoryIdList'),
        title: 'Legal Struggles',
        subtitle: {
            en: '',
            hi: ''
        },
        hindiTitle: 'कानूनी संघर्ष',
        decades: ['1980s', '1990s', '2000s', '2010s'],
        description: {
            en: [
                `Many of Saheli’s campaigns have involved engaging with the law, from domestic violence and family/inheritance laws to sati, rape, workplace sexual harassment, communal violence, draconian laws such as Armed Forces Special Powers Act (AFSPA) and Unlawful Activities (Prevention) ACT (UAPA), and decriminalisation of homosexuality in India. Our engagements range from handling cases and protesting to writing and participating in the evolution of better legal provisions. While legislation marks what society regards as unacceptable and punishable, law often fails to address complex realities as social attitudes remain pro-patriarchal and anti-women. Questions about law reform recur, but we have worked with the understanding that law can be a tool that may empower women and move towards a more gender-just society. The limited results of better laws do not justify abandoning law reform. Without engaging these systems, there is little hope for change.`
            ],
            hi: [`सहेली द्वारा चलाये गए कई सारे अभियान कानूनों में बदलाव इत्यादि से जुड़े रहे हैं – घरेलू  हिंसा और पारिवारिक कानूनों से सती, बलात्कार, काम की जगह पर यौनिक अत्याचार, सांप्रदायिक हिंसा, सशस्त्र सेना विशेषाधिकार कानून और गैरकानूनी गतिविधियाँ (रोकथाम) अधिनियम जैसे काले कानूनों तक. हालाँकि कानूनों का मतलब है कि समाज किन गतिविधियों को अस्वीकार्य और दंडयोग्य मानता है, अनेकों बार ऐसा होता है कि कानून जटिल वास्तविकताओं का सामना करने में असमर्थ रहता है क्यूंकि सामाजिक व्यवहार पितृसत्ता समर्थक और महिला विरोधी हैं. कानूनी सुधारों को लेकर कई शंकाएं ज़ाहिर की जाती हैं, लेकिन हम इस समझ के साथ काम करते हैं कि कानून महिलाओं को मजबूत बनाने का हथियार हो सकता है और एक लैंगिक न्याय पर आधारित समाज बनाने की दिशा  में एक कदम हो सकता है. अच्छे कानूनों की सीमाएं हो सकती हैं पर इसका मतलब यह नहीं है कि हम कानूनी सुधार के काम को छोड़ ही दें. अगर हम इन सभी व्यवस्थाओं पर काम नहीं करेंगे तो बदलाव की आशा नहीं की जा सकती.`]
        },
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['8'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '9',
        archiveImg: '',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['9'], 'categoryIdList'),
        title: 'Other Debates and Concerns',
        hindiTitle: 'अन्य बहस और चिंताएं',
        subtitle: {
            en: 'Not quite the usual feminist issue',
            hi: ''
        },
        decades: ['1990s', '2000s', '2010s'],
        description: {
            en: [
                `Many of the issues we have engaged with do not fit neatly, or appear not to be so called “women’s issues.” While women are uniquely affected by policies and processes, and only a gender lens can integrate women’s questions into wider struggles against oppression and for social transformation. With this understanding we have engaged with  issues including pornography, censorship, prostitution/sex work, livelihood and displacement, big dams, unorganised sector labour, war and nuclear testing, among others. Simultaneously we have raised deep concerns about the nature and functioning of institutions such as the National Commission for Women (NCW) and National Human Rights Commission (NHRC).`
            ],
            hi: [`बहुत सारे ऐसे मुद्दे हैं जिन पर हम काम करते रहे हैं, जो बहुत स्पष्ट तरीके से या तो महिलाओं के मुद्दों की श्रेणी में फिट नहीं होते हैं या फिर ऐसा लगता है कि वे “महिलाओं के मुद्दे” नहीं हैं, हालाँकि महिलायें सभी तरह की नीतियों और प्रक्रियाओं से विशेष तरीकों से प्रभावित होती हैं और केवल एक नारीवादी दृष्टि ही महिलाओं के सवालों को दमन के खिलाफ और सामाजिक बदलाव के लिए बृहत् संघर्षों में समाहित कर सकती है. इसी समझ के साथ हम प्रोनोग्राफी, सेंसरशिप, वेश्यावृति/सेक्स काम, जीविका और विस्थापन, बड़े बांधों, असंगठित क्षेत्र में श्रम, युद्ध और परमाणु परीक्षण और ऐसे ही कई और मुद्दों पर काम करते रहे हैं. इसके साथ ही हम ने राष्ट्रीय महिला आयोग और राष्ट्रीय मानव अधिकार आयोग जैसी संस्थाओं के स्वरुप और कार्यप्रणाली पर गहरी चिंताए व्यक्त की हैं.`]
        },
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['9'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '10',
        archiveImg: '../../../assets/archive/3.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['10'], 'categoryIdList'),
        title: 'Solidarity',
        subtitle: {
            en: 'none are free till all are free',
            hi: 'कोई आज़ाद नहीं, जब तक सब आज़ाद नहीं'
        },
        hindiTitle: 'एकजुटता',
        decades: ['1980s', '1990s', '2000s', '2010s'],
        description: {
            en: [
                `Firm in our conviction that struggles are intertwined and liberation is collective, we work jointly with many groups to push the limits and build deep and meaningful change. We have been part of numerous struggles and movement on a range of issues through joint platforms, networks and forums, and also in providing support to peoples’ movements from our location in the capital city of New Delhi.`
            ],
            hi: [`इस मज़बूत विश्वास के साथ कि हमारे संघर्ष जुड़े हुए हैं और मुक्ति सामूहिक है, हम बहुत सारे समूहों और संगठनों के साथ काम करते हैं ताकि हम अपनी सीमाओं को धकेलते हुए गहरे और अर्थपूर्ण बदलाव ला सकें. बहुत सारे मुद्दों पर हम साझा मंचों और नेटवर्कों के माध्यम से अनेकों संघर्षों और आंदोलनों का हिस्सा रहे हैं. हम ने राजधानी दिल्ली से कई जन आन्दोलनों समर्थन प्रदान किया है. `]
        },
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['10'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '11',
        archiveImg: '../../../assets/archive/1.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['11'], 'categoryIdList'),
        title: 'Conferences',
        subtitle: {
            en: 'Meeting to grow, think and rethink together',
            hi: 'मिल कर सोचने, पुनर्विचार और आगे बदने के लिए बैठकें'
        },
        hindiTitle: 'सम्मेलन',
        decades: ['1980s', '1990s', '2000s', '2010s'],
        description: {
            en: [
                `The binaries between academia vs activism have long been contested , as have been concerns of how political activism and academic scholarship can be best integrated, and why academics should not be ‘neutral’ on social issues. To contribute towards bridging this gap, we  have been part of both Autonomous Women’s Conferences and Women Studies Conferences as also many other issue based deliberations, seminars and conferences.`
            ],
            hi: [`अकादमी और एक्टिविज्म के द्वेतवाद पर हमेशा विवाद रहा है. लेकिन साथ ही यह चिंतन का भी विषय रहा है कि एक्टिविज्म और अकादमिक विद्वता को कैसे एकीकृत किया जा सकता है. अकादमिक विद्वानों को सामाजिक मुद्दों पर ‘निष्पक्ष’ क्यूँ नहीं होना चाहिए. इसी दूरी को पाटने के लिए हम स्वायत्त महिला आंदोलनों के सम्मेलनों और महिला अध्ययन सम्मेलनों का हिस्सा रहे हैं और साथ ही अनेकों दूसरे सेमिनार, सम्मेलनों और चर्चाओं में भी हिस्सा लेते रहे हैं. `]
        },
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['11'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '12',
        archiveImg: '../../../assets/archive/2.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['12'], 'categoryIdList'),
        title: 'Celebrations',
        subtitle: {
            en: '',
            hi: ''
        },
        hindiTitle: 'जश्न',
        decades: ['1980s', '2000s', '2010s'],
        description: {
            en: [
                `Almost a century after she passed, Emma Goldman, the Russian-born anarchist revolutionary, political activist, and writer who famously said, ‘If I can’t dance, I don’t want to be part of your revolution’ (often paraphrased as ‘If I can’t dance, it isn’t my revolution) still inspires the spirit of beauty, joy and fun in the women’s movement in India. So it is that along with all our stories of struggles and challenges, we try to capture some of the fun we have together as Sahelis.`
            ],
            hi: [`रूस में जन्मी अराजकतावादी क्रांतिकारी, राजनैतिक एक्टिविस्ट और लेखिका, एम्मा गोल्डमन, जिन्होंने एक बार कहा था कि ‘अगर मैं नाच नहीं सकती तो मैं तुम्हारी क्रांति का हिस्सा नहीं बन सकती’. (इस को दूसरे शब्दों में ऐसे भी कहा गया कि ‘अगर मैं नहीं नाचूं तो यह मेरी क्रांति नहीं है’.) उन की मृत्यु के सौ साल के बाद भी उन के यह शब्द भारत के नारीवादी आन्दोलन में खूबसूरती, मस्ती और उल्लास के जज़्बे को प्रेरित करते हैं. इस लिए संघर्षों और चुनौतियों की सारी कहानियों के बावजूद हम सहेलियां मिल कर मस्ती के कुछ पलों को जीने के मौके नहीं छोड़ती.`]
        },
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['12'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '13',
        archiveImg: '',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['13'], 'categoryIdList'),
        title: 'Archive',
        hindiTitle: 'संग्रह',
        decades: [],
        description: {
            en: [
                `Over 45 years of existence, almost always with an office to hold our meetings, encounters, emotions, records, publications, and so much more. For some, the Saheli archive may be fragments of memory, reminders of a journey taken, connections with co-travellers, lost or maybe forgotten along the way. For others, we hope the archive will open the door to evidence of our having been there, records of having done that, chronicles of how we got there, and traces of destinations we always wanted to, but never quite reached. Of course, like every archive, this too is an incomplete collection, much of it lost to the vagaries of time, the unpredictability of collecting and organising materials amid the chaotic rhythms of our activism, and of course the destruction wreaked by a fire in May 2011.`
            ],
            hi: [
                `45 से ज़्यादा सालों से हमारे काम के दौरान हमारे पास लगभग हमेशा एक ऑफिस रहा, जहाँ हम अपनी बैठकों, मुलाकातों, भावनाओं, रिकॉर्ड और प्रकाशनों को संजो कर रख सके। कुछ लोगों के लिए “सहेली” का यह संग्रह यादों के छोटे-छोटे टुकड़ों जैसा है, जो एक ऐसे सफर की याद दिलाता है जो हमने साथ तय किया, उन साथियों की याद दिलाता है जो रास्ते में कहीं खो गए या भुला दिए गए।`,
                `दूसरों के लिए, हमें उम्मीद है कि यह संग्रह इस बात का सबूत देगा कि हम वहाँ मौजूद थे, हमने क्या-क्या किया, हम वहाँ तक कैसे पहुँचे, और उन मंज़िलों के निशान भी दिखाएगा जहाँ हम हमेशा पहुँचना चाहते थे, लेकिन पूरी तरह पहुँच नहीं पाए। हर संग्रह की तरह यह भी पूरा नहीं है। समय के साथ बहुत-सी चीज़ें खो गईं, चीज़ों को इकट्ठा करना और संभालना हमेशा आसान नहीं रहा, और मई 2011 में लगी आग से भी काफी नुकसान हुआ।`
            ]
        },
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['13'], 'categoryIdList'),
        isOpen: false,
        isCategory: true,
        archiveList: []
    },
    {
        id: '14',
        archiveImg: '',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['14'], 'categoryIdList'),
        title: 'Publications',
        hindiTitle: 'प्रकाशनों',
        decades: [],
        description: {
            en: [`Since 1982, except for a short break in the early 1990s, we have brought out newsletters regularly to share our work and perspectives. We have published special reports and monographs on specific subjects and campaigns. We tried to reach a broad audience by publishing almost all our materials in Hindi along with English. Then there have been calendars designed and printed to raise funds as well as analytical and reflective souvenirs issued at the time of fund-raising events. It may be of interest to note that in all these decades, none of our publications carry author names since they all emerge from collective experience and knowledge, including of those in the group who may not write.`
            ],
            hi: [`1990 के दशक की शुरुआत में एक छोटे से अंतराल को छोड़कर, 1982 से हमने अपने कार्य और दृष्टिकोण साझा करने के लिए नियमित रूप से समाचार पत्रिकाएँ प्रकाशित करते रहे हैं। हमने ख़ास मुद्दों और अभियानों पर विशेष रिपोर्टें और मोनोग्राफ भी प्रकाशित किए हैं। हमने व्यापक पाठक वर्ग तक पहुँचने के लिए अपनी लगभग सभी सामग्री हिंदी के साथ-साथ अंग्रेज़ी में भी प्रकाशित करने का प्रयास किया। इसके अलावा, धन जुटाने के उद्देश्य से कैलेंडर, तथा फंड-रेज़िंग कार्यक्रमों का आयोजन भी किया गया है और इस अवसर पर हमारे काम का विश्लेषण करते हुए स्मारिका भी प्रकाशित की गईं। इन सभी दशकों में हमारे किसी भी प्रकाशन में लेखकों के नाम नहीं दिए गए हैं, क्योंकि वे सामूहिक अनुभव और ज्ञान से उत्पन्न होते हैं, जिसमें उन सब लोगों का योगदान भी शामिल है जो समूह का हिस्सा हैं, भले ही वे लिखते न हों।`]
        },
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['14'], 'categoryIdList'),
        isOpen: false,
        isCategory: false,
        archiveList: publicationsCategory
    }
]

const A = '../../../assets/archive/1.png';
const B = '../../../assets/archive/2.png';
const C = '../../../assets/archive/3.png';

const categoryArchiveImages: Record<string, ArchiveImage[]> = {
    '1': [
        { url: C, caption: 'Saheli members at the Delhi office, early 1980s', alt: 'About Saheli' },
        { url: A, caption: 'Collective meeting at Saheli resource centre', alt: 'Collective meeting' },
        { url: B, caption: 'Founding members of Saheli, 1981', alt: 'Founding members' },
        { url: C, caption: 'Volunteers at Saheli during an outreach programme', alt: 'Outreach programme' },
    ],
    '2': [
        { url: A, caption: 'Campaign against domestic violence, New Delhi', alt: 'Anti-violence campaign' },
        { url: B, caption: 'Street play on dowry harassment', alt: 'Street play on dowry' },
        { url: C, caption: 'Protest march for women\'s safety', alt: 'Protest march' },
        { url: A, caption: 'Self-defence workshop for women', alt: 'Self-defence workshop' },
        { url: B, caption: 'Awareness event on workplace sexual harassment', alt: 'POSH awareness event' },
        { url: B, caption: 'Street play on dowry harassment', alt: 'Street play on dowry' },
        { url: C, caption: 'Protest march for women\'s safety', alt: 'Protest march' },
        { url: A, caption: 'Self-defence workshop for women', alt: 'Self-defence workshop' },
        { url: B, caption: 'Awareness event on workplace sexual harassment', alt: 'POSH awareness event' },
    ],
    '3': [
        { url: B, caption: 'Solidarity gathering after communal violence, 1993', alt: 'Solidarity gathering' },
        { url: C, caption: 'Joint meeting with women\'s groups on communal politics', alt: 'Joint meeting' },
        { url: A, caption: 'Documentation of communal violence against women', alt: 'Documentation' },
        { url: B, caption: 'Public discussion on religion, law and women\'s rights', alt: 'Public discussion' },
    ],
    '4': [
        { url: C, caption: 'Campaign against coercive population control policies', alt: 'Population control campaign' },
        { url: A, caption: 'Seminar on hazardous contraceptives', alt: 'Contraceptives seminar' },
        { url: B, caption: 'Protest against sex determination tests', alt: 'Sex determination protest' },
        { url: C, caption: 'Campaign against HPV vaccine trials', alt: 'HPV vaccine campaign' },
        { url: A, caption: 'Women\'s health awareness drive at Saheli', alt: 'Health awareness drive' },
    ],
    '5': [
        { url: A, caption: 'Delhi Queer Pride march — Saheli contingent', alt: 'Delhi Queer Pride' },
        { url: B, caption: 'Campaign for Lesbian Rights (CALERI), 1999', alt: 'CALERI campaign' },
        { url: C, caption: 'Voices Against 377 coalition meeting, 2004', alt: 'Against 377 meeting' },
        { url: A, caption: 'Discussion on sexuality and gender at Saheli', alt: 'Sexuality discussion' },
    ],
    '6': [
        { url: B, caption: 'Study group on gender and caste intersections', alt: 'Gender-caste study group' },
        { url: A, caption: 'Community meeting on caste-based violence', alt: 'Community meeting' },
        { url: C, caption: 'Street play Kaun Jaat — exploring caste and identity', alt: 'Kaun Jaat play' },
        { url: B, caption: 'Release of publication on marriage, caste and community', alt: 'Publication release' },
    ],
    '7': [
        { url: B, caption: 'Fact-finding on state repression in conflict areas', alt: 'Fact-finding mission' },
        { url: C, caption: 'Campaign for repeal of AFSPA', alt: 'AFSPA campaign' },
        { url: A, caption: 'Meeting of Women Against Sexual Violence and State Repression', alt: 'WSS meeting' },
        { url: B, caption: 'Protest against arbitrary arrests and torture', alt: 'Protest against arrests' },
    ],
    '10': [
        { url: C, caption: 'Joint forum with peoples\' movements, New Delhi', alt: 'Joint forum' },
        { url: A, caption: 'Solidarity event with Dalit and Adivasi groups', alt: 'Solidarity event' },
        { url: B, caption: 'Networking with queer and democratic rights groups', alt: 'Rights networking' },
        { url: C, caption: 'Support rally for peoples\' movements from New Delhi', alt: 'Support rally' },
    ],
    '11': [
        { url: A, caption: 'Autonomous Women\'s Conference — Saheli delegation', alt: 'Women\'s Conference' },
        { url: B, caption: 'Women\'s Studies Conference panel discussion', alt: 'Women\'s Studies panel' },
        { url: C, caption: 'Issue-based seminar hosted at Saheli', alt: 'Seminar at Saheli' },
        { url: A, caption: 'Conference on women\'s rights and the law', alt: 'Rights and law conference' },
        { url: B, caption: 'Inter-organisational deliberation on feminist strategy', alt: 'Feminist strategy session' },
    ],
    '12': [
        { url: C, caption: '25th anniversary of Saheli celebrations, 2006', alt: '25th anniversary' },
        { url: A, caption: 'Annual gathering of Saheli collective members', alt: 'Annual gathering' },
        { url: B, caption: 'Cultural evening with music, dance and food', alt: 'Cultural evening' },
        { url: C, caption: 'Diwali celebration at the Saheli office', alt: 'Diwali celebration' },
        { url: A, caption: 'Farewell for a beloved long-time Saheli member', alt: 'Farewell gathering' },
    ],
};

// Populate archiveList for 'Archives' after categories is fully defined
const archiveCategory = categories.find(category => category.id === '13');
if (archiveCategory) {
    const excludedFromArchives = ['13', '8', '9', '14']
    archiveCategory.archiveList = categories.filter(category => !excludedFromArchives.includes(category.id)).map(category => ({
        id: category.id,
        title: category.title,
        hindiTitle: category.hindiTitle,
        archiveImg: category.archiveImg,
        images: categoryArchiveImages[category.id] ?? []
    }));
}
