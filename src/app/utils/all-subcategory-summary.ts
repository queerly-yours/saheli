import { articlesSummary } from "./all-articles-summary";
import { subCategory } from "./data-model";
import { filterByArrayKeyAndIds } from "./utils";

export const subcategoriesSummary: subCategory[] = [
    {
        id: 'Subcategory30',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory30'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: {
            en: [
                `Our work with women in personal crisis situations brought us up against patriarchal forces in multiple forms: unsupportive families and neighbours, disbelieving police at local thanas, unscrupulous lawyers, and unsympathetic magistrates. We realised women needed a space to speak, be heard with empathy, and find support to rebuild their lives. For more than a decade we worked as a counselling centre, providing emotional and legal counselling to women in crisis. We also ran a shelter for a few years and campaigned for new laws and amendments to existing laws. Though we did not continue as a crisis intervention centre after the 1990s, our linkage with the issue remains alive through our work at several levels.`
            ],
            hi: [`पीड़ित महिलाओं के साथ काम करते हुए हमें पितृसत्तात्मक शक्तियों के कई रूपों का सामना करना पड़ा: जैसे कि असहयोगी परिवार और पड़ोसी, स्थानीय थानों में अविश्वासी पुलिस, बेईमान वकील, और असंवेदनशील मजिस्ट्रेट। हमने महसूस किया कि महिलाओं को बोलने, सहानुभूति के साथ सुने जाने और अपने जीवन को फिर से बनाने के लिए समर्थन पाने की जगह की आवश्यकता है। एक दशक से अधिक समय तक हमने एक परामर्श केंद्र के रूप में काम किया, और संकट में महिलाओं को भावनात्मक और कानूनी परामर्श प्रदान किया। हमने कुछ वर्षों तक एक आश्रय गृह भी चलाया और नए कानूनों तथा मौजूदा कानूनों में संशोधन के लिए अभियान चलाए। हालांकि 1990 के दशक के बाद हमने परामर्श केंद्र  के रूप में काम जारी नहीं रखा, लेकिन इस मुद्दे से हमारा संबंध कई स्तरों पर हमारे काम के माध्यम से जीवित है।`]
        },
        isSubcategory: true,
        title: 'Crisis Intervention',
        hindiTitle: 'संकट में सहयोग'
    },
    {
        id: 'Subcategory25',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory25'], 'subCategoryIdList'),
        categoryIdList: ['3'],
        description: {
            en: [
                `As a nation born out of a partition of the people based on religious identity, its consequences continue to haunt us. Divisive political mobilisation has consistently fanned the flames of social and communal prejudice over the last many decades. But with the rise of right wing Hindutva politics since the 1980s, everything from education to food and clothing, religious sites and routines to work and occupation has gained a communal hue. Today, these differences are cemented in laws such as the Citizenship Amendment Act (CAA), 2019 and programmes such as Special Intensive Revision (SIR) of the Election Commission of India (ECI) which are systematically disenfranchising citizens and causing widespread panic and insecurity among minorities, migrants, women and transgender communities.`
            ],
            hi: [`लोगों की धार्मिक पहचान पर हुए देश के विभाजन के परिणाम आज भी हमें परेशान कर रहें हैं. विभाजक राजनैतिक लामबंदी ने सामाजिक और सांप्रदायिक घृणा की लपटों को और हवा दी है. 1980 के बाद से दक्षिणपंथी हिंदुत्व राजनीति के उभार की वजह से शिक्षा, खाने और पहरावे, धार्मिक स्थलों और व्यवसायों और रोज़मर्रा के काम, सब ने एक सांप्रदायिक रंग ले लिया है. वर्तमान में यह विभाजन नागरिकता सुधार कानूनों, 2019 और भारत के चुनाव आयोग के विशेष गहन पुनरीक्षण कार्यक्रम के द्वारा पुख्ता हुए हैं, जो कि नागरिकों को मताधिकार से वंचित कर रहे हैं. यह सब अल्पसंख्यकों, प्रवासियों, औरतों और ट्रांसजेंडर समुदायों के बीच में बड़े पैमाने पर असुरक्षा और डर फैला रहा है.`]
        },
        isSubcategory: true,
        title: 'Communalism',
        hindiTitle: 'साम्प्रदायिकता'
    },
    {
        id: 'Subcategory1',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory1'], 'subCategoryIdList'),
        categoryIdList: ['2', '3'],
        description: {
            en: [
                `Anti-Sikh violence in 1984 forced Saheli to confront communal violence and its gendered impact. Our perspective evolved through relief and rehabilitation work. Violence in Mumbai and the anti-Muslim genocide in Gujarat compelled further work: organising relief, pushing for state support for victims, demanding punishment for the guilty, joining democratic and secular platforms for peace, participating in fact-finding, and supporting legal efforts, while developing a feminist critique of rising fundamentalisms. We saw how violence is systematically targeted against communities with state complicity, and how sexual violence becomes central in such conflicts. We also noted the mobilisation of women in right-wing politics and the tightening of control over women in the name of “honour.”`
            ],
            hi: [`1984 की सिख -विरोधी हिंसा ने सहेली को सांप्रदायिक हिंसा और उसके लैंगिक प्रभावों का सामना करने के लिए मजबूर किया। सांप्रदायिक हिंसा के बाद राहत और पुनर्वास कार्यों के माध्यम से हमारी समझ विकसित हुआ। मुंबई की हिंसा और गुजरात में मुस्लिम-विरोधी नरसंहार ने हमें आगे काम करने के लिए प्रेरित किया: राहत का आयोजन करना, पीड़ितों के लिए राज्य से मदद की मांग करना, दोषियों को सज़ा दिलाना, शांति के लिए लोकतांत्रिक और धर्मनिरपेक्ष मंचों में शामिल होना, तथ्य-खोजों में भाग लेना, और कानूनी प्रयासों का समर्थन करना, साथ ही बढ़ते कट्टरवाद पर नारीवादी समीक्षा विकसित करना। हमने देखा कि कैसे राज्य की मिलीभगत से व्यवस्थित रूप से समुदायों के खिलाफ हिंसा की जाती है और कैसे ऐसे हिंसात्मक तनावों में यौन हिंसा केंद्रीय हो जाती है। हमने यह भी देखा कि दक्षिणपंथी राजनीति में महिलाओं की भागीदारी कैसे बढ़ी है और “सम्मान” के नाम पर महिलाओं पर नियंत्रण कैसे कड़ा हुआ है।`]
        },
        isSubcategory: true,
        title: 'Communal Violence',
        hindiTitle: 'सांप्रदायिक हिंसा'
    },
    {
        id: 'Subcategory2',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory2'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: {
            en: [
                `Saheli was born out of the campaign against women being harassed or killed for dowry. But the violence women faced was not only dowry-related, but also emotional and physical control and torture, economic deprivation and discrimination by husbands, in-laws and parents, aimed at maintaining women’s subordination within the family. This work widened our understanding of how patriarchy operates and sustains itself within marriage and family. We began counselling young women, supporting legal processes, and helping them rebuild their lives. We felt the need for shelters and stronger support systems. We campaigned for new laws and amendments to address violence in domestic spaces, and have been actively involved in the creation of the Protection of Women from Domestic Violence Act, 2005.`
            ],
            hi: [`सहेली का जन्म दहेज के लिए महिलाओं की हत्या या उत्पीड़न के खिलाफ दहेज विरोधी अभियान से हुआ। हमने औरतों को परामर्श देना शुरू किया, कानूनी सहायता दी, और उन्हें अपने जीवन को फिर से बनाने में मदद की। इस काम ने हमारी समझ को विस्तृत किया कि विवाह और परिवार में पितृसत्ता कैसे काम करती है। महिलाओं द्वारा झेली जाने वाली हिंसा केवल दहेज से संबंधित नहीं थी, बल्कि इस में  मानसिक यातना, आर्थिक वंचना और पति, ससुराल तथा माता-पिता द्वारा किये जाने वाला भेदभाव भी शामिल था, जिसका उद्देश्य परिवार में महिलाओं की अधीनता बनाए रखना था। हमने ऐसी औरतों के लिए रहने की जगह और समर्थन व्यवस्थाओं की ज़रुरत महसूस की। साथ ही घरेलू परिस्थितियों में हिंसा को संबोधित करने वाले नए कानूनों और संशोधनों के लिए अभियान चलाया और 2005 के घरेलू हिंसा से महिलाओं के संरक्षण अधिनियम के निर्माण और कार्यान्वयन में सक्रिय रूप से काम किया।`]
        },
        isSubcategory: true,
        title: 'Domestic Violence',
        hindiTitle: 'घरेलू हिंसा'
    },
    {
        id: 'Subcategory3',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory3'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: {
            en: [
                `Our work on rape emerged from deeply unjust court judgments in the cases of Mathura, Rameeza Bee and Maya Tyagi. While nationwide agitations led to changes in criminal law, shortcomings and pitfalls in implementation continued. Our work with survivors revealed how routinely justice is subverted. We argued that law must move beyond narrow penile-vaginal definitions of “rape” to a broader understanding of “sexual assault.” With women’s groups, queer groups and child rights’ groups, we have worked on far-reaching modifications needed in the approach to sexual assault and its legal remedies. Be it mass sexual assault during ethnic/communal/caste-based conflicts, as well as sexual assault against transgender people, men and children. We have also consistently highlighted the use of sexual violence as a tool of repression by state agencies, including police, paramilitary and armed forces.`
            ],
            hi: [`बलात्कार पर हमारा काम मथुरा, रमीज़ा बी और माया त्यागी के मामलों में आए चिंताजनक न्यायिक फैसलों से उभरा। हालांकि देशव्यापी आंदोलनों के कारण आपराधिक कानून में बदलाव हुए, लेकिन उनके कार्यान्वयन में कमियाँ और समस्याएँ बनी रहीं। पीड़ितों का समर्थन करते हुए यह स्पष्ट हुआ कि न्याय को नियमित रूप से कैसे कमजोर किया जाता है। हमने तर्क दिया कि कानून को “बलात्कार” की संकीर्ण लिंग-योनि परिभाषा से आगे बढ़कर “यौन हिंसा” की व्यापक समझ की ओर जाना चाहिए। महिलाओं के समूहों, कवीयर समूहों और बाल अधिकार समूहों के साथ मिलकर हमने जातीय/सांप्रदायिक हिंसा में व्यापक सामूहिक यौन हिंसा और महिलाओं के अलावा अन्य व्यक्तियों, जैसे किन्नर, ट्रांसजेंडर लोग और पुरुषों के खिलाफ यौन हिंसा को संबोधित करने के लिए संशोधनों पर काम किया। पिछले तीन दशकों में जाति और महिलाओं के उत्पीड़न के बीच संबंध और स्पष्ट हुए हैं, जैसे कि कैसे जातिगत सम्मान और विशेषाधिकार जातीय हिंसा को वैधता देते हैं, विशेषकर निम्न जाति की महिलाओं के खिलाफ यौन हिंसा को। हमने राज्य एजेंसियों, जैसे पुलिस, अर्धसैनिक बलों और सशस्त्र बलों द्वारा यौन हिंसा को भी उजागर किया है।`]
        },
        isSubcategory: true,
        title: 'Rape/Sexual Assault',
        hindiTitle: 'बलात्कार/यौनिक हिंसा'
    },
    {
        id: 'Subcategory4',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory4'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: {
            en: [
                `On September 4, 1987, Roop Kanwar was burnt to death on her husband’s funeral pyre in Deorala, Rajasthan. The incident triggered nationwide protests against sati and its glorification in the name of tradition. The ideology of sati was brought into question, along with the role of police, politicians, ministers and community leaders in validating/glorifying it. Along with other women’s groups and democratic forces, we raised issues of religion and religious/community identity in the public arena. Rallies, demonstrations and signature campaigns demanded stringent action and effective legislation against glorification, leading to the Commission of Sati (Prevention) Act, 1988. In subsequent years, our struggles focused on challenging continued glorification, protesting acquittals in Roop Kanwar’s case, exposing political double standards, and responding to other cases of sati through fact-finding missions and protest actions.`
            ],
            hi: [`4 सितंबर 1987 को, रूप कंवर को राजस्थान के देवराला में उनके पति की चिता पर जला दिया गया। इस घटना ने परंपरा के नाम पर सती और उसके महिमामंडन के खिलाफ देशव्यापी विरोध को जन्म दिया। सती की विचारधारा पर सवाल उठाए गए, साथ ही पुलिस, राजनेताओं, मंत्रियों और समुदाय के नेताओं की भूमिका पर भी। अन्य महिला समूहों और लोकतांत्रिक शक्तियों के साथ मिलकर हमने सार्वजनिक क्षेत्र में धर्म और धार्मिक/सामुदायिक पहचान के मुद्दों को उठाया। रैलियों, प्रदर्शनों और हस्ताक्षर अभियानों के माध्यम से महिमामंडन के खिलाफ कड़ी कार्रवाई और प्रभावी कानून की मांग की गई, जिसके परिणामस्वरूप 1988 का सती (निवारण) अधिनियम बना। बाद के वर्षों में, हमारे संघर्षों का ध्यान निरंतर महिमामंडन को चुनौती देने, रूप कंवर मामले में बरी किए जाने का विरोध करने, राजनीतिक दोहरे मानकों को उजागर करने और अन्य मामलों में तथ्य-खोज मिशनों और विरोध कार्रवाइयों के माध्यम से प्रतिक्रिया देने पर केंद्रित रहा।`]
        },
        isSubcategory: true,
        title: 'Sati',
        hindiTitle: 'सती'
    },
    {
        id: 'Subcategory5',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory5'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: {
            en: [
                `In our work on violence against women, we sought ways of tackling violence through initiatives that enhance personal-safety skills and confidence, especially for day-to-day violence on the streets. Our introductory encounter with feminist self defence techniques was at the first creative workshop called ‘Kriti’ organised by us in 1983 in Delhi. Decades later, we began to train for and conduct Wenlido (“Women’s Path of Strength”) that helps women connect with their strengths, challenging the conditioning that frames women as the “weaker sex.” Along with physical techniques, Wenlido supports the evolution of a woman’s self-image as strong, capable, and in control of her life. We have organised Wenlido workshops for college students, nurses, factory workers, activist groups, NGO employees, corporates, queer women, blind women and transgender people, within and outside Delhi.`
            ],
            hi: [`महिलाओं के खिलाफ हिंसा पर हमारे काम में, हमने ऐसी पहलें विकसित करने की कोशिश की जो व्यक्तिगत सुरक्षा कौशल और आत्मविश्वास को बढ़ाएं, विशेष रूप से रोज़मर्रा की सड़कों पर होने वाले यौनिक उत्पीडन के संदर्भ में। नारीवादी आत्मरक्षा, या वेनलिडो (“महिलाओं की शक्ति का मार्ग”), महिलाओं को अपनी ताकत से जुड़ने में मदद करता है और उस रूढ़िवादी सोच को चुनौती देता है जो महिलाओं को "कमजोर लिंग" के रूप में देखती है। शारीरिक तकनीकों के साथ-साथ, वेनलिडो प्रशिक्षण एक महिला की आत्म-छवि को मजबूत, सक्षम और अपने जीवन पर नियंत्रण रखने वाली छवि के रूप में विकसित करने में सहायक होता है। सहेली ने दिल्ली और दिल्ली के बाहर कॉलेज के छात्रों, नर्सों, फैक्ट्री मजदूरों, एक्टिविस्टों, गैर सरकारी संगठनों के कर्मचारियों, कॉरपोरेट जगत के लोगों, समलैंगिक महिलाओं, दृष्टिहीन महिलाओं और ट्रांसजेंडर लोगों के लिए वेनलिडो कार्यशालाओं का आयोजन किया।`]
        },
        isSubcategory: true,
        title: 'Self Defence',
        hindiTitle: 'आत्म-रक्षा'
    },
    {
        id: 'Subcategory6',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory6'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: {
            en: [
                `Sexual harassment has long been trivialised as “eve-teasing,” but in 1997, after a case filed by women’s groups following the gangrape of a government women’s development programme worker, Bhanwari Devi, the Supreme Court recognised workplace sexual harassment and issued guidelines for its redressal. Following this and the Protection of Women against Sexual Harassment at Workplace Act, 2013, workplaces are required to have internal mechanisms for redressal. However, complainants still face prejudiced committees, retaliation, false cases, job loss, and severe emotional and mental trauma. Saheli conducted a survey with working women and published a report called Another Occupational Hazard in 1998 and developed the street play Mahaul Badalna Hai (1999–2000) that many other groups have also performed as part of their camp-aign work. Performances have led to discussions and workshops with students, domestic workers, security workers, trade unions, NGOs and others over the years. We also handled individual cases and have been on internal complaints committees in government and non-government institutions.`
            ],
            hi: [`यौन उत्पीड़न को लंबे समय तक “छेड़खानी” के रूप में एक हल्का फुल्का अपराध समझा जाता रहा, लेकिन 1997 में, महिला समूहों द्वारा दायर एक मामले के बाद, सर्वोच्च न्यायालय ने कार्यस्थल पर यौन उत्पीड़न को मान्यता दी और इसके समाधान के लिए दिशा-निर्देश जारी किए। इसके बाद और 2013 के कार्यस्थल पर महिलाओं के यौन उत्पीड़न से संरक्षण अधिनियम के तहत, कार्यस्थलों को महिलाओं की सुरक्षा के लिए शिकायत समितियों की व्यवस्थाएं स्थापित करना ज़रूरी हो गया है। आंदोलन के इन प्रयासों के बावजूद, शिकायतकर्ताओं को आज भी पक्षपाती समितियों, प्रतिशोध, झूठे मामलों, नौकरी खोने और गंभीर भावनात्मक और मानसिक आघात का सामना करना पड़ता है। सहेली ने 1998 में कामकाजी महिलाओं के साथ एक सर्वेक्षण किया और 1999–2000 में “माहौल बदलना है”  नामक नाटक विकसित किया। इसके प्रदर्शन ने छात्रों, घरेलू कामगारों, सुरक्षा गार्डों और अन्य लोगों के साथ वर्षों तक चर्चा और कार्यशालाओं को जन्म दिया। हमने यौनिक उत्पीडन के व्यक्तिगत मामलों पर काम करना जारी रखा और सरकारी तथा गैर-सरकारी संस्थानों की शिकायत समितियों में सक्रिय रहे।`]
        },
        isSubcategory: true,
        title: 'Sexual Harrasment',
        hindiTitle: 'यौन उत्पीड़न'
    },
    {
        id: 'Subcategory7',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory7'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: {
            en: [
                `Saheli has maintained a strong critique of the coercive and repressive role of the State, whether in the name of population control, development, or “law and order.” We have campaigned against coercive population control measures, for repeal of draconian laws such as the Armed Forces Special Powers Act (AFSPA), Terrorism and Disruptive Activities (Prevention of) Act, (TADA) Prevention of Terrorism Act (POTA), and Unlawful Activities (Prevention) ACT (UAPA). Through fact-finding on militarisation and campaigns against disappearances, arbitrary arrests, torture, encounter killings and the use of sexual violence, we joined hands with women’s groups, students groups, human rights, democratic rights and peoples’ organisations. We have also been part of the nationwide alliance “Women against Sexual Violence and State Repression,” strengthening efforts against such terror by the state.`
            ],
            hi: [`सहेली ने राज्य की दबावकारी और दमनकारी भूमिका की लगातार आलोचना की है, चाहे वह जनसंख्या नियंत्रण, विकास या “कानून और व्यवस्था” के नाम पर हो। हमने सशस्त्र बल (विशेष शक्तियां) अधिनियम (आफ्सपा), आतंकवाद निवारण अधिनियम (पोटा)  और गैरकानूनी गतिविधियां (रोकथाम) अधिनियम (यूएपीए)  जैसे कानूनों को निरस्त करने के लिए अभियान चलाए। सैन्यीकरण पर तथ्य-खोज, गायब होने, मनमानी गिरफ्तारियों, यातना और मुठभेड़ हत्याओं के खिलाफ अभियानों के माध्यम से तथा यौन हिंसा के उपयोग के खिलाफ, महिला समूहों, छात्रों, मानवाधिकार, लोकतांत्रिक अधिकार और जन संगठनों के साथ मिलकर काम किया। हम “ यौन हिंसा और राज्य दमन के खिलाफ महिलायें” नामक राष्ट्रव्यापी गठबंधन का भी हिस्सा रहे हैं, जिस के माध्यम से राज्य  के आतंक के खिलाफ कोशिशों को मजबूत किया गया।`]
        },
        isSubcategory: true,
        title: 'State Violence',
        hindiTitle: 'राजकीय हिंसा'
    },
    {
        id: 'Subcategory8',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory8'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: {
            en: [
                `As a campaign group, we have posed difficult questions to society, the State, medical establishment, media, judiciary and police, as well as to groups like ourselves. We have campaigned on issues related to violence and oppression within family, marriage and community that control women’s sexuality, property and life choices, from domestic violence to rape to workplace sexual harassment, and violence by state agencies and militarisation. We have also contributed to campaigns for women’s health, and for egalitarian and just civil rights for women. Understanding that our struggles are interlinked with those of workers, farmers, transgender persons, persons with disabilities, Adivasi and Dalit communities, we have joined wider campaigns against class, caste, gender, disability and ethnicity-based oppression. Research, writing, public demonstrations, protests, street plays, leafleting at public spaces across Delhi, dialogues with students and meetings have been key methods to raise awareness and push for change.`
            ],
            hi: [`एक अभियान समूह के रूप में, सहेली ने समाज, राज्य, चिकित्सा व्यवस्था, मीडिया, न्यायपालिका और पुलिस, और अपने जैसे समूहों से हमेशा मुश्किल सवाल पूछे हैं। हमने परिवार, विवाह और समुदाय के भीतर महिलाओं की यौनिकता, संपत्ति और जीवन विकल्पों को नियंत्रित करने वाली हिंसा और उत्पीड़न, घरेलू हिंसा से लेकर बलात्कार, कार्यस्थल पर यौन उत्पीड़न और राज्य एजेंसियों द्वारा की जाने वाली हिंसा तक के खिलाफ अभियान चलाए। हमने सैन्यीकरण के खिलाफ, महिलाओं के स्वास्थ्य के लिए और बेहतर एवं न्यायपूर्ण कानूनों के लिए भी अभियान चलाए। यह समझते हुए कि हमारे संघर्ष मजदूरों, ट्रांसजेंडर व्यक्तियों, विकलांग व्यक्तियों, आदिवासी और दलित समुदायों के संघर्षों से जुड़े हुए हैं, हमने वर्ग, जाति, लिंग, विकलांगता और जातीयता आधारित उत्पीड़न के खिलाफ व्यापक अभियानों में भाग लिया। सार्वजनिक प्रदर्शन, विरोध, नुक्कड़ नाटक, दिल्ली भर के चौराहों और बाजारों में पर्चे बांटना, छात्रों के साथ संवाद और बैठकों जैसे तरीके जागरूकता बढ़ाने और बदलाव लाने के लिए महत्वपूर्ण रहे हैं।`]
        },
        isSubcategory: true,
        title: 'Campaigns',
        hindiTitle: 'अभियान'
    },
    {
        id: 'Subcategory9',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory9'], 'subCategoryIdList'),
        categoryIdList: ['3'],
        description: {
            en: [
                `Crisis intervention brought forward questions about religion and discrimination in divorce, guardianship, property, inheritance and other rights within personal laws. Working towards an egalitarian civil code was not straightforward amid the rise of the Hindu right wing and identity politics. Through debates, leaflets and the street play Farq, we sought to make the issue visible and challenge both the State and religious conservatism. The controversy surrounding Shah Bano’s case and the subsequent usurpation of our demand for a uniform civil code by the right wing as a code grounded in Hindu law, the demolition of Babri Masjid and the rise of communal politics converted questions of women’s equality into questions of religious freedom and identity. This push for further Hinduising the nation has become even more complicated in current times. Our initial scepticism about reform of personal laws from within the community has given way to an engagement with efforts to do so, alongside we have  continued with the commitment for egalitarian rights for all women.`
            ],
            hi: [`संकटग्रस्त औरतों के साथ हमारा काम  धर्म और तलाक, अभिभावकत्व, संपत्ति, उत्तराधिकार और अन्य अधिकारों में भेदभाव से जुड़े प्रश्नों को सामने लाया। समान नागरिक संहिता की दिशा में काम करना, हिंदू दक्षिणपंथ और पहचान की राजनीति के उभार के बीच सरल नहीं था। बहसों, पर्चों और “फ़र्क” नामक नुक्कड़ नाटक के माध्यम से हमने इस मुद्दे को सामने लाने और राज्य तथा रूढ़िवादी ताकतों दोनों को चुनौती देने की कोशिश की। शाह बानो विवाद, हिंदू कानून पर आधारित समान नागरिक संहिता की मांग, बाबरी मस्जिद का विध्वंस और सांप्रदायिक राजनीति के उभार ने महिलाओं की समानता के प्रश्नों को धार्मिक स्वतंत्रता और पहचान के प्रश्नों में बदल दिया। हमारे काम में व्यक्तिगत कानूनों में सुधार के प्रयास और सभी महिलाओं के लिए समान अधिकारों के लिए निरंतर संघर्ष शामिल रहा है।`]
        },
        isSubcategory: true,
        title: 'Personal Law Debates',
        hindiTitle: 'निजी कानून'
    },
    {
        id: 'Subcategory10',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory10'], 'subCategoryIdList'),
        categoryIdList: ['3'],
        description: {
            en: [
                `The communal tide of the past decades has made conditions increasingly fragile for women. Militant right-wing mobilisation in the name of religion, culture, tradition and nation has intensified control over women within and across communities. This includes moral policing, dress codes, regressive traditions, increased ritualisation of everyday life, and restrictions on women’s sexuality, mobility and freedom. We have also witnessed the power and violence of caste and community panchayats, especially over women framed as bearers of “honour.” In resisting these forces, we highlight the criminality and unconstitutionality of such impositions and protest the collusion of religious and caste/community forces with regressive voices in politics, society, government and the media.`
            ],
            hi: [`पिछले दशकों की सांप्रदायिक लहर ने महिलाओं के लिए परिस्थितियों को और अधिक अस्थिर बना दिया है। धर्म, संस्कृति और परंपरा के नाम पर उग्र दक्षिणपंथी लामबंदी ने समुदायों के भीतर और उनके बीच महिलाओं पर नियंत्रण को तीव्र किया है। इसमें नैतिक पुलिसिंग, पहनावे के नियम, प्रतिगामी परंपराएं, रोजमर्रा के जीवन का बढ़ता अनुष्ठानीकरण और महिलाओं की यौनिकता, गतिशीलता और स्वतंत्रता पर प्रतिबंध शामिल हैं। हमने जाति और समुदाय आधारित पंचायतों की शक्ति और हिंसा को भी देखा है, विशेष रूप से उन महिलाओं के संदर्भ में जिन्हें “सम्मान” का वाहक माना जाता है। इन ताकतों का विरोध करते हुए, हम ने ऐसे थोपे गए नियमों की आपराधिकता और असंवैधानिकता को उजागर किया है और राजनीति, समाज, सरकार और मीडिया में मौजूद रूढ़िवादी आवाज़ों के साथ धार्मिक और जाति/समुदाय ताकतों की मिलीभगत का विरोध किया है`]
        },
        isSubcategory: true,
        title: 'Rising Fundamentalisms',
        hindiTitle: 'बढता कट्टरवाद'
    },
    {
        id: 'Subcategory31',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory31'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: {
            en: [
                `Functionally, the government, state policy, multilateral agencies and even some civil society groups working on the issue, concerns around women’s health have largely remained limited to women’s ‘reproductive health.’ While this is an important aspect of women’s lives and needs attention in terms of contraceptive and reproductive control, menstrual health, nutritional status, pre- and post-partum health, etc., our perspective has always been that to see these factors merely in the context of women’s reproduction is to have misplaced priorities. Such a perspective also minimises or negates the importance of other health issues women face, be it non-reproductive health related consequences of hormonal contraception, mental health issues, social and economic factors that determine her access to food, nutrition, medical attention or even recovery from violence.`
            ],
            hi: [`ऐसा देखने में आया है कि सरकार, राज्य नीतियां, बहुपक्षीय एजेन्सियां और सिविल सोसाइटी और सिविल समूह, जो स्वास्थ्य के मुद्दे पर काम कर रहे हैं, उन की महिला स्वास्थ्य पर चिंताए महिलाओं के केवल प्रजनन स्वास्थ्य तक सीमित रही हैं. हालाँकि यह औरतों की ज़िन्दगियों का महत्वपूर्ण पहलू है और गर्भ निरोधक और प्रजनन नियंत्रण, मेंस्चुरल स्वास्थ्य, पोषण, प्रसव पूर्व और प्रसव के बाद के औरतों के  स्वास्थ्य पर ध्यान दिया जाना ज़रूरी है, हमारा दृष्टिकोण यह रहा है कि औरतों के स्वास्थ्य को केवल  प्रजनन स्वास्थ्य के सन्दर्भ में देखना सही नहीं है. इस तरह की सोच औरतों के दूसरे स्वास्थ्य मुद्दों को कमतर या नज़रअंदाज कर देती है, जैसे कि हार्मोनल गर्भ निरोधकों के गैर प्रजनन स्वास्थ्य से जुड़े सवाल, मानसिक स्वास्थ्य के मुद्दे, ऐसे सामाजिक और आर्थिक कारक जो औरतों के पोष्टिक आहार तक पहुँच को कम करते हैं, या मेडिकल सुविधाओं और हिंसा से उभरने के मुद्दे.`]
        },
        isSubcategory: true,
        title: 'Health',
        hindiTitle: 'स्वास्थ्य'
    },
    {
        id: 'Subcategory11',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory11'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: {
            en: [
                `Population control has been central to government policy since Independence, with “overpopulation” invoked to explain poverty, environmental degradation and maternal mortality. The National Family Planning Programme relied on coercion, forced sterilisation and incentives, often pushing contraceptives unsuited to people’s health status. Despite claims about women’s health and empowerment, little changed. From the 1980s, Saheli worked with a broad coalition of feminist and democratic rights groups to demand an end to coercion. We have highlighted that underdevelopment lies in social inequities, including unequal access to resources, education, water, health and food, not in the numbers of people. Challenging population control theory while foregrounding women’s concerns has remained an uphill task.`
            ],
            hi: [`आज़ादी के बाद से जनसँख्या नियंत्रण सरकारी नीति के केंद्र में रहा है क्यूंकि यह माना गया कि अधिक जनसँख्या के कारण गरीबी, पर्यवरण का विनाश और मातृ मृत्यु दर बढती है. राष्ट्रीय परिवार नियोजन कार्यक्रम दबाव, जबरदस्ती नसबंदी और प्रोत्साहनों के द्वारा ऐसे गर्भ निरोधकों को बढावा देता है जो कि लोगों के स्वास्थ्य के लिए हानिकारक हैं. औरतों के स्वास्थ्य और सशक्तिकरण के सरकारी दावों के बावजूद, कुछ ख़ास बदलाव नहीं आया है. 1980 के बाद से सहेली ने नारीवादी और जनतांत्रिक अधिकार समूहों के साथ मिल कर इस दबाव को ख़त्म करने की मांग की है. हम ने इस बात को उजागर करने की कोशिश की है कि अल्प विकास या पिछड़ापन सामाजिक असमानताओं, जिन में संसाधनों, शिक्षा, पानी, स्वास्थ्य और भोजन तक असमान पहुँच शामिल हैं, में निहित है, न कि अधिक जनसँख्या की वजह से. औरतों के मुद्दों को आगे रखते हुए जनसँख्या नियंत्रण के सिद्धांत को चुनौती देना बहुत मुश्किल रहा है.`]
        },
        isSubcategory: true,
        title: 'Population Control',
        hindiTitle: 'जनसंख्या नियंत्रण'
    },
    {
        id: 'Subcategory12',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory12'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: {
            en: [
                `New technologies and contraceptives have posed multiple dangers to women’s health, with hazards overlooked or not anticipated by agencies while they callously push these technologies onto women. Saheli, with other women’s and health groups, has pressured the government to strengthen legal processes that reduce risk and, where necessary, ban hazardous technologies. Our efforts to reform legal processes involving health-related technologies are reflected in our writings and campaigns.`
            ],
            hi: [`नई तकनीकों और गर्भनिरोधकों ने औरतों के स्वास्थ्य के लिए कई प्रकार के खतरे पेश किये हैं, इन खतरों को एजेंसिओं के द्वारा या तो नज़रंदाज़ किया गया या उनका पूर्वानुमान नहीं किया गया और लापरवाही से इस तकनीकों को औरतों पर लाद दिया गया. सहेली ने अन्य महिला एवं स्वास्थ्य समूहों के साथ मिल कर सरकार पर दबाव बनाया है कि वे खतरों को कम करने के लिए कानूनी प्रक्रियाओं को मजबूत करें. और जहाँ ज़रूरी हो वहां खतरनाक तकनीकों पर प्रतिबन्ध लगवाएं. स्वास्थ्य सम्बन्धी तकनीकों से जुड़ी कानूनी प्रक्रियाओं में सुधार को ले कर हमारी कोशिशें हमारे लेखन और अभियानों में दिखती हैं.`]
        },
        innerCategories: [], // Initialize as empty, will be populated later
        isSubcategory: true,
        title: 'Hazardous Contraceptives', // This subcategory has inner categories,
        hindiTitle: 'खतरनाक गर्भनिरोधक'
    },
    {
        id: 'Subcategory29',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory29'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: {
            en: [
                `In the early 1980s, E.P. drugs (high-dose estrogen-progesterone combinations) were widely available and misused as pregnancy tests, for amenorrhea, postponing menses, and as abortifacients. They had been banned in several countries due to links with congenital malformation, but DGHS refrained from banning them in India. Saheli, with Voluntary Health Association of India (VHAI), conducted letter-campaigns to groups, doctors and chemists, and ran a signature campaign among doctors to oppose their use as pregnancy tests. After a 1982 ban, the manufacturers obtained stay orders. Collective intervention by doctors, lawyers, journalists, health and women’s groups, science and consumer groups helped reinstate the ban. Saheli’s submissions critiqued evidence presented by drug companies and included affidavits showing ongoing misuse. The campaign affirmed women’s need for safe, effective, cheap pregnancy testing and access to safe abortion.`
            ],
            hi: [`1980 के शुरुआती सालों में इ.पी. ड्रग्स खुलेआम उपलब्ध थे और इन का गर्भावस्था परीक्षण, मासिक धर्म समस्याओं, मासिक धर्म को टालने और गर्भनाशकों के लिए इस्तेमाल किया जाता था. इन पर जन्म-जात विकृतियों से जुड़ाव होने की वजह से कई देशों में प्रतिबन्ध लगा दिए गए हैं. लेकिन भारत में डीजीएचएस  ने इससे रोकने से मना कर दिया. सहेली ने वोलंटरी हेल्थ एसोसिएशन ऑफ़ इंडिया के साथ मिल कर दूसरे समूहों, डाक्टरों, और केमिस्टों के साथ चिठ्ठी अभियान किया और डाक्टरों के बीच प्रेगनेंसी परीक्षणों के विरुद्ध हस्ताक्षर अभियान भी किया. डाक्टरों, वकीलों, पत्रकारों, स्वास्थ्य  ओर महिला समूहों, विज्ञान और उपभोक्तासमूहों की सामूहिक हिस्सेदारी से इस प्रतिबन्ध को दोबारा लागू करने में मदद मिली. सहेली की प्रस्तुतियों ने ड्रग क़म्पनियों के द्वारा दिए गए प्रमाणों की आलोचना की, जिसमें  इस के दुरूपयोग के प्रमाणपत्र शामिल थे. इस अभियान ने औरतों के सुरक्षित, प्रभावकारी, सस्ते प्रेगनेंसी टेस्टों,और सुरक्षित गर्भपात की ज़रूरतों की पुष्टि की.`]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'EP Drugs',
        hindiTitle: 'ई पी ड्रग्स'
    },
    {
        id: 'Subcategory28',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory28'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: {
            en: [
                `The push for HPV vaccines is a stark example of pharma-regulatory nexus. In India, vaccines were licensed without mandatory clinical trials and administered and promoted for young girls. In July 2009, unethical “studies” on young tribal girls in Khammam (Andhra Pradesh) and Baroda (Gujarat) came to light. A media blitz created fear of cervical cancer and framed vaccines as the only protection. Women’s and child rights’ groups challenged unethical trials, dubious efficacy, adverse effects, cost, lack of screening facilities and other public health priorities. Advertising was halted, and after Parliament raised the issue, studies were suspended pending enquiry. The campaign continues until licenses are revoked. Now these HPV vaccines are being promoted by Prime Minister Modi himself as a part of the 2026 campaign for ‘women’s access to health.’`
            ],
            hi: [`एच.पी.व़ी टीके फार्मा और नियमन एजेंसियों की मिलीभगत का निरा उदाहरण है. भारत में बिना क्लिनिकल परीक्षणों के युवा लड़कियों को टीके लगा दिए जाते हैं. जुलाई 2009 में खम्माम (आंध्र प्रदेश) और बड़ोदा (गुजरात) में युवा जनजातीय लड़कियों पर अनैतिक अध्ध्यनों के मामले सामने आये. मीडिया के द्वारा एक सनसनीखेज खबर के द्वारा सरवाईकल कैंसर का डर फैलाया गया और यह कहा गया कि केवल ये टीके ही सुरक्षा प्रदान कर सकते हैं. महिला और बाल अधिकार समूहों ने इन अनैतिक परीक्षणों को टीकों की संदिग्ध प्रभाविता, उनके हानिकर प्रभाव, कीमत, जांच और दूसरी स्वास्थ्य प्राथमिकताओं का अभाव के आधार पर चुनौती दी. विज्ञापनों को रोका गया और संसद में इस पर सवाल उठाने के बाद जांच होने तक अध्ययन रोक दिए गए. लाइसेंस वापिस लेने तक अभियान जारी है. अब स्वयं प्रधानमंत्री मोदी के द्वारा 2026 के औरतों की स्वास्थ्य तक पहुँच अभियान के अंतर्गत एच.पी.व़ी टीकों को बढावा दिया जा रहा है`]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'HPV Vaccines',
        hindiTitle: 'एच पी वी टीका'
    },
    {
        id: 'Subcategory13',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory13'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: {
            en: [
                `Women’s interests can be obscured when conservative norms, medical technology, commercial interests and population control converge and collude. Technologies such as amniocentesis and ultrasound, useful for foetal monitoring, also enabled sex determination, leading to large-scale sex-selective abortions and worsening sex ratios. Amid debates about “women’s best interests,” we campaigned for national legislation to regulate misuse, which was passed in 1994. This campaign also triggered a deeper engagement between the women’s rights’ movement and disability rights’ activists on their perspectives on selective abortions based on foetal ‘deformities’ or ‘disabilities.’ The continuing challenge is political will and implementation. With new reproductive technologies and surrogacy, the challenges continue to rise.`
            ],
            hi: [`जब रूढ़िवादी मापदंड, मेडिकल तकनीक, व्यावसायिक हित और जनसँख्या नियंत्रण नीतियां मिल जाते हैं तो औरतों के हित पीछे धकेल दिए जाते हैं. एम्नियोसेंटेसिस (गर्भ जल जांच) और अल्ट्रासाउंड जैसी तकनीकें, जो कि भ्रूण की जांच के लिए उपयोगी हैं, लिंग जांच के लिए इस्तेमाल की जा रही हैं, जिस कि वजह से बड़े पैमाने पर लिंग-चयनित गर्भपात किये जाते हैं जो कि लिंग अनुपात को बिगाड़ रहे है. हम ने इन तकनीकों के गलत इस्तेमाल को रोकने के लिए एक देशव्यापी कानून के लिए अभियान किया, जो कि 1994 में पास किया गया. इस अभियान ने भ्रूण विकृतियों और विकलांगताओं के आधार पर चयनित गर्भपात पर महिला अधिकार आन्दोलन और विकलांग अधिकार एक्टिविस्ट्स के दृष्टिकोणों में गहरी बहस छेड़ दी. कानून को लागू करने के राजनैतिक इच्छा एक बड़ी चुनौती है. नई प्रजनन तकनीकों और सरोगेसी के साथ चुनौतियां बढती जा रही हैं.`]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'Sex Selection',
        hindiTitle: 'लिंग चुनाव'
    },
    {
        id: 'Subcategory26',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory26'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: {
            en: [
                `One of our earliest engagements with women’s health was the action to stop unethical trials of the long acting hormonal contraceptive Net-En on poor women in Andhra Pradesh. Soon we realised that the premiere medical research organisation in the country, the Indian Council for Medical Research (ICMR) had multiple plans to conduct ‘trials’ of hazardous contraceptives on poor, illiterate and nutritionally challenged women, with little or no access to medical care. Their approach cared little for ‘informed consent’, regulated follow up and monitoring for side effects, etc., so we directed our efforts against such trials. When ICMR revised its Ethical guidelines for human trials, we engaged with and contributed to the process. Post-liberalisation, these challenges became even more complex with vested companies being handed the responsibility for ‘post marketing surveillance.’ The emergence of newer reproductive technologies like in vitro fertilisation and surrogacy also raised new ethical challenges that we have engaged with.`
            ],
            hi: [`औरतों के स्वास्थ्य से जुड़े हमारे शुरुआती कार्यवाहिओं में आंध्र प्रदेश में हार्मोनल गर्भनिरोधक नेट-एन के अनैतिक परीक्षणों को रोकना था. जल्द ही हम ने यह जाना कि देश की मुख्य मेडिकल शोध संस्था, द इंडियन काउंसिल ऑफ़ मेडिकल रिसर्च (आई सी एम आर) की गरीब, अशिक्षित, और कुपोषित औरतों पर खतरनाक गर्भनिरोधकों का परीक्षण करने की अनेकों योजनायें हैं. उनके लिए सूचित सहमति, नियमित फॉलो अप, और हानिकारक प्रभावों निगरानी करने की कोई अहमियत नहीं थी. इस लिए हम ने ऐसे परीक्षणों को रोकने के लिए अपनी कोशिशें शुरू की. जब आई सी एम आर ने मानव परीक्षणों के लिए अपने नैतिक दिशा निर्देशों में संशोधन किये तो हम ने उस प्रक्रिया में हिस्सा लिया और अपना योगदान किया. उदारीकरण के बाद यह चुनौतियाँ और पेचीदा हो गई क्यूंकि निजी हितों वाली कंपनियों को पोस्ट मार्केटिंग निगरानी की ज़िम्मेदारी सौंप दी गई. नई पुनरुत्पादक तकनीकों जैसे कि इन विट्रो फर्टिलाईज़ेशन (IVF) और सरोगेट मदर, नए नैतिक चुनौतियों को सामने लाये है, जिन पर भी हम काम कर रहे हैं.`]
        },
        isSubcategory: true,
        title: 'Medical Ethics',
        hindiTitle: 'चिकित्सीय नैतिकता'
    },
    {
        id: 'Subcategory14',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory14'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: {
            en: [
                'Early feminist wisdom was that sex refers to biological differences (chromosomal, hormonal, reproductive), whereas gender refers to socially constructed roles, behaviors, activities, and expectations associated with femininity and masculinity. However in recent years, the queer, trans* and intersex movements have transformed our understanding about gender being not just a social construct, but rather, a personal sense of identity and self that may or may not align with the sex assigned at birth. And of course, these may range from binary to non-binary identities. Such emerging understandings and lived experiences pose new challenges to feminist frameworks as well as our struggles for a gender-just world in legal, social and political terms.'
            ],
            hi: [`शुरुआती नारीवादी समझ में सेक्स का मतलब शारीरिक भिन्नताओं से था (क्रोमोसोमल, हार्मोनल, पुनरुत्पादक), जब कि जेंडर का मतलब समाज द्वारा रचित भूमिकाओं, व्यवहारों, क्रियाकलापों और अपेक्षाओं से है. पर हाल ही के सालों में क्वीयर, ट्रांस और इंटरसेक्स आंदोलनों ने हमारी जेंडर के बारे में समझ को बदला है, जिस के अनुसार जेंडर सिर्फ सामाजिक रूप से रचित नहीं है बल्कि स्व की आत्म-पहचान है, जो कि जन्म के समय दी गई लैंगिक पहचान से अलग हो सकती है. और ये द्विआधारी (binary) से अद्विअधारी (non-binary) तक कुछ भी हो सकती है. यह जीने के नए अनुभव और बदलती हुई समझ कानूनी, सामाजिक और राजनैतिक रूप से जेंडर-न्याय पर आधारित दुनिया के लिए हमारे संघर्षों और नारीवादी रूपरेखाओं को नई चुनौतियाँ पेश करती हैं.`]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'Emerging Challenges',
        hindiTitle: 'उभरती चुनौतियाँ'
    },
    {
        id: 'Subcategory15',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory15'], 'subCategoryIdList'),
        categoryIdList: ['8'],
        description: {
            en: [
                `Our work with crisis intervention brought forward questions about differences in the domain of religious personal laws affecting women’s lives–marriage, divorce, adoption/guardianship, property, inheritance etc. While the imagination of a Uniform Civil Code powered our initial years of working for equal rights for all women, the struggle for an egalitarian and just civil code was not straightforward. With the rise of the Hindu right wing and consequently, communal and identity politics, the struggle for women’s rights turned into an issue of minority identity versus majoritarian politics. Efforts are underway to forefront the rights of women within personal laws by linking them to rights and protections guaranteed by the Constitution.`
            ],
            hi: [`संकटग्रस्त औरतों के साथ काम करने के दौरान धार्मिक निजी कानूनों के क्षेत्र में शादी, तलाक, बच्चा गोद लेने/संरक्षण, सम्पति, और विरासत इत्यादि में औरतों के साथ भेदभाव के मामले हमारे सामने आये. हालांकि शुरुआत में औरतों के लिए समान अधिकारों के लिए समान नागरिक संहिता हमारे अभियानों का केंद्र बिंदु रहा, लेकिन समय के साथ यह समझ में आया कि एक समानता और न्याय पर आधारित नागरिक संहिता का संघर्ष सरल नहीं है. हिन्दू दक्षिण पंथ के उभार के साथ और परिणाम स्वरुप सांप्रदायिक और पहचान की राजनीति के चलते महिला अधिकारों के सवाल अल्पसंख्यक पहचान बनाम बहुसंख्यक राजनीति के मुद्दे बन गए. निजी कानूनों के अंतर्गत महिलाओं के अधिकारों को संविधान में दिए गए अधिकारों और संरक्षणों से जोड़ का, आगे बढाने की कोशिशें जारी हैं.`]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'Communalism',
        hindiTitle: 'साम्प्रदायिकता'
    },
    {
        id: 'Subcategory16',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory16'], 'subCategoryIdList'),
        categoryIdList: ['8'],
        description: {
            en: [
                `In our struggle for women’s right to protection against hazardous contraceptives and technologies as well as coercive population control measures we took recourse to various legal measures. On the one hand, we took the fight against the introduction of Net-En and other hormonal injectables in the Family Planning Programme of the government all the way to the Supreme Court. On the other hand, we were part of a nationwide campaign and Parliamentary proceedings for the introduction of a law to prevent sex preselection, sex determination and sex selective abortions in the country. Likewise, we were part of an international campaign against the Anti-Fertility Vaccine for women as well as the HPV vaccine for cervical cancer. The struggle for ethical trials also required us to engage at a policy framework level with the premier research body in the country, the Indian Council for Medical Research.`
            ],
            hi: []
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'Health',
        hindiTitle: 'स्वास्थ्य'
    },
    {
        id: 'Subcategory17',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory17'], 'subCategoryIdList'),
        categoryIdList: ['8'],
        description: {
            en: [
                `Legal struggles have also been part of our work on the right to assert diverse sexualities and gender identities. In particular, as part of Voices Against 377 we were active in the campaign against Section 377 of the Indian Penal Code and intervenors in the case to decriminalise homosexuality. In addition, we have engaged with the development of and critiqued the failure of the Transgender Persons (Protection of Rights) Act, 2019 to live up to the spirit of the NALSA judgement from which it emerged.`
            ],
            hi: [`विभिन्न यौनिकताओं और जेंडर पहचानों को मान्यता देने के लिए कानूनी संघर्ष, हमारे काम का हिस्सा रहे हैं. विशेष तौर से हम वॉइसेस अगेंस्ट 377 का हिस्सा होने के नाते भारतीय कानून संहिता के सेक्शन 377 के विरुद्ध अभियान  में सक्रिय रहे और समलैंगिकता के गैर – अपराधीकरण के केस में हस्तक्षेपकर्ता भी थे. इस के इलावा हम ने नालसा फैसले की भावना के अनुरूप, जिस से ट्रांसजेंडर पर्सन्स (प्रोटेक्शन ऑफ़ राइट्स) कानून, 2019, जन्मा था, इस कानून के विकास और असफलता का आलोचनात्मक विश्लेषण भी किया.`]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'Sexuality',
        hindiTitle: 'यौनिकता'
    },
    {
        id: 'Subcategory18',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory18'], 'subCategoryIdList'),
        categoryIdList: ['8'],
        description: {
            en: [
                `Saheli’s early work with women in crisis revealed that laws were either biased against women or there were not enough laws that recognised violence against women within homes and families. An important outcome was our work on laws for recognition of such domestic  violence resulting in the introduction of new provisions in the IPC and later in 2005, a full-fledged law with a right based approach on Domestic Violence. As our work expanded, we began to address the violence women face at the workplace, during caste, ethnic and communal clashes and war, as well as due to their religious, caste or occupational identity even in so called normal times. This includes sexual harassment, sexual violence, elimination of female foetuses through sex determination, violence on women as sex workers, on women with different sexual orientation or across gender identities, honour killings, and violence on women by state agencies. Though each required multiple points of action – an important part of our work has been on reforming existing laws or seeking new ones that recognise each kind of violence and offer redressal.`
            ],
            hi: [`सहेली में संकटग्रस्त औरतों के साथ शुरूआती काम के दौरान हमने जाना कि कानून या तो औरतों के प्रति पूर्वाग्रही हैं या फिर ऐसे कानून काफी कम हैं जो औरतों के खिलाफ हिंसा को मान्यता देते हैं. इस तरह हमारे काम का एक बड़ा असर यह हुआ कि घरेलू हिंसा कों पहचाना गया, जिसके फलस्वरूप भारतीय कानून संहिता में नई धाराओं कों जोड़ा गया और बाद में 2005 में घरेलू हिंसा पर ऐसा कानून लाया गया जिस में औरतों के अधिकारों कों पहचाना गया. जैसे जैसे हमारा काम बढा, हम ने काम की जगह पर औरतों पर होने वाली हिंसा, जातीय, जान-जातीय और सांप्रदायिक और युद्ध के दौरान औरतों पर होने वाली हिंसा और सामान्य समय के दौरान भी जातीय, धार्मिक और व्यावसायिक पहचान के आधार पर होने वाली हिंसा के मुद्दों पर काम करना शुरू किया. इन में यौनिक उत्पीडन, यौनिक हिंसा, लिंग निर्धारण के द्वारा मादा भ्रूण की हत्या, यौन कर्मियों के ऊपर हिंसा, अलग यौनिक पहचान की औरतों पर हिंसा, इज्ज़त के नाम पर हिंसा, और राज्य की एजेंसिओं द्वारा महिलाओं पर हिंसा शामिल रहे हैं. हालाँकि हर प्रकार की हिंसा के लिए अलग अलग तरह के एक्शन की ज़रुरत थी, हमारे काम का एक बड़ा हिस्सा कानून में सुधार और कानूनों में इस हिंसा को मान्यता दिलाने का रहा. `]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'Violence',
        hindiTitle: 'हिंसा'
    },
    {
        id: 'Subcategory19',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory19'], 'subCategoryIdList'),
        categoryIdList: ['10'],
        description: {
            en: [
                `We have been part of joint struggles against religious fundamentalism, caste violence, war and militarisation, nuclear weapons, displacement, factory closures, slum demolitions, homophobic attacks, and repression of movements. This has meant working in joint formations with NGOs, peoples’ organisations and organised Left formations, though at times, we have still found ourselves isolated in the articulation of our politics with regard to questioning dominant development paradigms and supporting LGBT struggles and sex workers.`
            ],
            hi: [`हम बहुत से साझा संघर्षों का हिस्सा रहे हैं जैसे कि कट्टरवाद के खिलाफ, जातीय हिंसा, युद्ध और सेन्यीकरण, परमाणु हथियार, विस्थापन, फेक्टोरियों का बंद किया जाना, बस्तियों का नाश, समलैंगिकों पर हमले और आन्दोलनों के दमन के खिलाफ साझा संघर्षों का हिस्सा रहे हैं. जिस का मतलब है कि एन.जी.ओस, जन आंदोलनों और स्थापित वाम संगठनों के साथ काम करना. फिर भी कभी कभी हम एलजीबीटी और सेक्स कर्मियों के संघर्षों के समर्थन और विकास के प्रभुत्वशाली ढांचों पर सवाल उठाने की हमारी राजनैतिक आवाजों में खुद को अकेला पाते हैं.`]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'Issues',
        hindiTitle: 'मुददे'
    },
    {
        id: 'Subcategory20',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory20'], 'subCategoryIdList'),
        categoryIdList: ['10'],
        description: {
            en: [
                `Remembering Sahelis and other feminist friends and comrades who have been our co-travellers, sources of inspiration and strength.`
            ],
            hi: [`सहेलियों, अपने नारीवादी साथियों और काम्ररेड्स जो हमारे हम सफ़र, और प्रेरणा और ताकत के स्रोत रहे हैं, को याद करते हुए.`]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'Salaam Saathi!',
        hindiTitle: 'सलाम साथी'
    },
    {
        id: 'Subcategory21',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory21'], 'subCategoryIdList'),
        categoryIdList: ['11'],
        description: {
            en: [
                `National Conferences of Women’s Liberation as they were once called, also mark the trajectory of the long history of the autonomous women’s movement in India. The first such conference took place in Mumbai in 1980 during the Anti-Rape Campaign, followed by conferences in Mumbai (1985), Patna (1987), Calicut (1990), Tirupati (1994), Ranchi (1997) and Kolkata (2006). Each becoming a space for debate, discussion, sharing and moving forward as a movement. Their core strength has been in bringing together autonomous groups not aligned to government, political parties, underground groups or funding agencies, across issues and concerns, as a space for collective ideas, politics and struggles. It is also a space of feminist fun, laughter and solidarity. Saheli has been an intrinsic part of planning and organising these conferences.`
            ],
            hi: [`महिला मुक्ति के राष्ट्रीय सम्मलेन, जिस नाम से इन्हें पहले जाना जाता था, भारत में महिला आन्दोलन के लम्बे इतिहास में महत्वपूर्ण स्थान रखते हैं. पहला ऐसा सम्मलेन 1980 में मुंबई में बलात्कार विरोधी अभियान के दौरान हुआ. इस के बाद मुंबई (1985), पटना (1987), कलिकट (1990) तिरुपति (1994) रांची (1997) और कोलकता (2006) में सम्मलेन हुए. हर एक सम्मलेन बहस, चर्चा, अनुभव बांटने और आन्दोलन को आगे ले जाने की जगह बना. इन सम्मेलनों की केंद्रीय ताकत उन स्वायत्त समूहों को, जो कि सरकार, राजनैतिक दलों, भूमिगत समूहों या फंडिंग एजेंसिओं से जुड़े नहीं हैं, साथ लाना है और मुद्दों और चिंताओं के इर्दगिर्द सामूहिक विचारों, राजनीति और संघर्षों की साझा जगह तैयार करना है. यह जगह नारीवादी मस्ती, खुशियों और एकजुटता की भी जगह है. सहेली, इन सम्मेलनों की तैयारी और संयोजन का अभिन्न हिस्सा रही है.`]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'Autonomous Women\'s Conferences',
        hindiTitle: 'स्वायत्त महिला सम्मलेन'
    },
    {
        id: 'Subcategory22',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory22'], 'subCategoryIdList'),
        categoryIdList: ['11'],
        description: {
            en: [
                'To discuss and deliberate on issues we have been working on, we have  been part of  seminars and conferences on women’s health, safety, communalisation of society and polity, caste-structured society, state violence and repressions, media representation and censorship, war and nuclearisation. We have also presented numerous papers at women’s studies seminars and conferences on challenges facing organisations like Saheli, and also reflected on what sustains such groups despite all the constraints. These occasions offer space to think and rethink our politics, strategies and reasons for continuing our journey.'
            ],
            hi: []
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'Other Conferences',
        hindiTitle: 'अन्य सम्मलेन'
    },
    {
        id: 'Subcategory23',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory23'], 'subCategoryIdList'),
        categoryIdList: ['12'],
        description: {
            en: [
                `International Women’s Day marks social, political and economic struggles and reminds us that women’s place in society remains far from a feminist ideal. Over the years, we have joined other women’s groups and organisations, including Left-affiliated groups, student groups, Dalit and gender minority groups and disability groups, to form joint platforms to celebrate togetherness, raise issues and make demands of the State and society. There have also been moments when political differences led us to organise separately, or when groups felt their issues and leadership were not represented. For example, when Dalit women’s groups broke off from the joint celebrations in 1987, autonomous groups in 2000 due to objections to the participation of Campaign for Lesbian Rights (CALERI), and conflicts around Nandigram in 2008. Despite these ups and downs, the effort has been to find common ground or move forward through issue-based alliances.`
            ],
            hi: [`अंतर्राष्ट्रीय महिला दिवस हमारे सामाजिक, राजनैतिक और आर्थिक संघर्षों का प्रतीक है और इस बात की याद दिलाता है कि समाज में औरतों की स्थिति नारीवादी आदर्श से बहुत दूर है. पिछले सालों में हम दूसरे महिला समूहों और संगठनों, जिन में वाम विचारधारा के समूह भी शामिल हैं, छात्र समूहों, दलित और जेंडर अल्पसंख्यक समूहों के साथ संयुक्त मंचों पर इकट्ठा हुए हैं, मुद्दों को उठाया है, और समाज और राज्य के सामने अपनी मांगों को रखा है. ऐसे भी मौके आये हैं जब राजनैतिक मतभेदों के चलते या जब कुछ समूहों को लगा कि उनके मुद्दों और नेतृत्व को प्रतिनिधित्व नहीं मिल रहा, कई समूहों ने अलग से संगठित होने का तय किया. उदहारण के लिये 1987 में संयुक्त समारोहों से दलित महिला समूहों ने खुद को अलग किया, 2000 में स्वायत्त महिला संगठनों ने, क्योंकि कैंपेन फॉर लेस्बियन राइट्स की भागीदारी पर आपत्ति उठायी गई थी या फिर जब 2008 में नंदीग्राम के मुद्दे पर मतभेद हुए. इन सब टकरावों के बावजूद हमेशा यह कोशिश रही है कि साझे आधार ढूंढे जाएँ और मुद्दों के आधार पर एकजुट हो कर आगे बढ़ा जाए.`]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'International Women\'s Day',
        hindiTitle: 'अंतर्राष्ट्रीय महिला दिवस'
    },
    {
        id: 'Subcategory24',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory24'], 'subCategoryIdList'),
        categoryIdList: ['12'],
        description: {
            en: [
                `Every year in July, our weekly Wednesday meetings return to the question: how should we mark Saheli’s beginnings this year? August 9, 1981 began a journey of raising our voice against women’s oppression and struggling towards a world free of violence and injustice. The day also reminds us of challenges in continuing against patriarchies, especially as a small, non-funded autonomous collective. We mark it without fixed rules: discussions, debates, outreach to students, or gathering with friends and supporters in the office. The objective is to energise our struggles and affirm togetherness with co-travellers, because there are many reasons to go on.`
            ],
            hi: [`हर साल जुलाई में हमारी बुधवार की बैठकों में सवाल होता है कि हम इस साल सहेली कि शुरुआत को कैसे मनाएं? 9 अगस्त 1981 को औरतों के दमन के खिलाफ और हिंसा व अन्याय से मुक्त दुनिया के लिए हमारे संघर्षों की शुरुआत हुई. यह दिन हमें एक स्वायत्त समूह की पितृसत्ता के खिलाफ़ जारी संघर्षों की चुनौतियों की याद दिलाता है. हम इस दिन को बिना किसी तय नियमों के मनाते हैं: चर्चाएँ करके, छात्रों के साथ मिल कर, या अपने दफ्तर में दोस्तों और समर्थकों के साथ जश्न मना कर. हमारा मकसद होता है अपने संघर्षों में और उत्साह भरना, और अपने साथियों के साथ एकजुटता की पुष्टि करना क्योंकि साथ आगे बढने के कई कारण हैं...`]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'Saheli Day',
        hindiTitle: 'सहेली दिवस'
    },
    {
        id: 'Subcategory27',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory27'], 'subCategoryIdList'),
        categoryIdList: ['12'],
        description: {
            en: [
                `In many ways, our journey and work has run in parallel to that of many other autonomous women’s groups from across the country that started around the same time as us. So just as we believe that this archive/website and the concerns it expresses echoes that of many others, their celebrations have been as much part of our journey as have been the emotions with which we have been part of them.`
            ],
            hi: [`कई मायनों में हमारा सफ़र और काम, देश में उसी दौरान जन्में स्वायत्त महिला समूहों के समानांतर ही रहा. इस लिए जिस प्रकार हम यह मानते हैं कि यह संग्रह/वेबसाइट और इस में ज़ाहिर हमारी चिंताएं दूसरे ऐसे ही समूहों की चिंताओं और संघर्षों का प्रतिबिम्ब है, उसी तरह उनके जश्न हमारे सफ़र का हिस्सा रहे हैं.`]
        },
        isSubcategory: true,
        title: 'Others',
        hindiTitle: 'अन्य'
    },
    {
        id: 'Subcategory33',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory32'], 'subCategoryIdList'),
        categoryIdList: ['1'],
        description: {
            en: [
                `Organisational Autonomy – When Saheli came into being, women from left political parties, socialist organisations and people’s movements were seeking political spaces more responsive to women and women’s issues. Thus, organisational autonomy from political parties and the State remained central to our identity and still is. Despite being a registered organisation, we set out to work as a collective and did not opt for a structured hierarchy and roles amongst us. These different aspects of our autonomy have shaped our work and efforts to function as a feminist collective, with all its strengths and limitations. While the principles of our work were clear from the beginning, it has been a challenge to apply them on an everyday basis. We needed to handle invisible hierarchies and privileges time and again, have had lengthy debates and introspection on the issue and experimented with Saheli’s structure and functioning.`
            ],
            hi: [`जब सहेली आस्तित्व में आई, उस समय वामपंथी दलों, समाजवादी संगठनों और जन आंदोलनों से जुड़ी महिलाएं ऐसे राजनीतिक स्थानों की तलाश कर रही थीं जो महिलाओं और महिलाओं के मुद्दों के प्रति अधिक संजीदा हों. राजनीतिक दलों और राज्य से हमारी संगठनात्मक स्वायत्तता तब भी केंद्रीय थी और आज भी बनी हुई है। एक रजिस्टर्ड संस्था होने के बावजूद, हम ने सामूहिक तरीके से काम करना शुरू किया और अपनी कार्यप्रणाली में एक पदानुक्रमित संरचना और भूमिकाओं के बाहर रह कर काम करने को चुना. स्वायत्ता के इस विभिन्न पहलुओं ने हमारे काम और प्रयासों को एक नारीवादी कलेक्टिव का आकार दिया, जिसमें उसकी सभी सीमाएँ भी शामिल थीं। हालांकि हम अपने काम के सिद्धांतों के बारे में शुरू से ही स्पष्ट थे, इनको रोज़मर्रा की कार्यप्रणाली में शामिल करना एक चुनौती थी. हमें अदृश्य पदानुक्रमों और विशेषाधिकारों से बार बार जूझने पड़ा. इन मुद्दों पर लगातार लम्बी बहसें और आत्मवलोकन जारी रहा और हम सहेली के ढांचे और कार्यप्रणाली के साथ प्रयोग करते रहे.`]
        },
        isSubcategory: true,
        title: 'Organisational matters',
        hindiTitle: 'संगठनात्मक मुद्दे'
    },
    {
        id: 'Subcategory32',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory32'], 'subCategoryIdList'),
        categoryIdList: ['1'],
        description: {
            en: [
                `Funding of feminist activism has always been contentious and in Saheli we always had a critique of funding and its impact on the direction of activisms. Hence we consciously chose to stay away from institutional funding and agendas, both Indian and international. Saheli members have had other jobs to support themselves, so organisational work has been mostly sustained through volunteer power, individual donations, contributions towards publications and periodic fundraising efforts.`
            ],
            hi: [`नारीवादी एक्टिविज्म में फंडिंग हमेशा से ही एक पेचीदा मुद्दा रहा है. सहेली में भी हमेशा से ही फंडिंग और इसके एक्टिविज्म की दिशाओं पर प्रभाव पर बहस रही है. वित्तीय सहायता के मामले में, हमने भारतीय और अंतर्राष्ट्रीय संस्थागत एजेंडों से दूरी बनाए रखी। सदस्यों के पास अन्य नौकरियाँ थीं, जबकि संगठनात्मक कार्य स्वयंसेवी शक्ति, व्यक्तिगत दान, समय-समय पर धन जुटाने और प्रकाशनों के योगदान से चलता रहा।`]
        },
        isSubcategory: true,
        title: 'Funding',
        hindiTitle: 'फंडिंग'
    },
    {
        id: 'InnerCategory1',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['InnerCategory1'], 'subCategoryIdList'),
        categoryIdList: ['Subcategory12'],
        description: {
            en: [
                `The Anti-Fertility Vaccine (AFV) campaign brought women worldwide together to confront the role of WHO in population control. Voices from Canada to India challenged a “scientific” perspective that treated pregnancy as an illness and deployed the immune system to “fight” it, exposing women to risks of autoimmune disease. India became a major site as trials were pursued here. Activists from across the country including Saheli challenged the research establishment with public actions, direct engagement and our published monograph titled, Target Practice.`
            ],
            hi: [`गर्भनिरोधी टीका अभियान ने दुनिया भर की औरतों को, जनसँख्या नियंत्रण में डब्ल्यू एच ओ की भूमिका पर सवाल उठाने के लिए इकठ्ठा किया. कनाडा से भारत तक की आवाजों ने ऐसे ‘वैज्ञानिक’ दृष्टिकोण को चुनौती दी जो गर्भधारण को एक बिमारी के रूप में देख रहा था और एक रोग प्रतिरोधक व्यवस्था को इसका इलाज करने के लिए इस्तेमाल कर रहा था और इस प्रक्रिया में औरतों को ऑटोइम्यून बिमारिओं के खतरों में डाल रहा था. भारत परीक्षणों का मुख्य केंद्र बन गया. भारत भर से सहेली समेत एक्टिविस्टों ने शोध तंत्र को सार्वजानिक कार्यवाहियों, सीधे हस्तक्षेप और टारगेट प्रैक्टिस  शीर्षक के मोनोग्राफ से चुनौती दी.`]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'Anti Fertility Vaccines',
        hindiTitle: 'प्रजनन विरोधी टीका'
    },
    {
        id: 'InnerCategory2',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['InnerCategory2'], 'subCategoryIdList'),
        categoryIdList: ['Subcategory12'],
        description: {
            en: [
                `Under pressure to achieve a “two child family” by 2000, the government sought to expand contraceptive options and speedily introduce them into the National Family Planning Programme without necessary clinical trials. Depo Provera was launched for “social marketing” in 1994, with a provision that the marketing company Max Pharma conduct Post Marketing Surveillance (PMS). Women’s groups strongly opposed this. Through protests, confronting manufacturers, public debate, and legal intervention in a petition against hazardous drugs, we prevented its inclusion in the family planning programme to date. The challenge persists as Depo Provera has been included in some NGO reproductive health packages, and efforts to introduce it continue, as do our battles to prevent it.`
            ],
            hi: [`2000 तक “दो बच्चा परिवार” का लक्ष्य हासिल करने के लिए सरकार ने गर्भनिरोधक विकल्पों को बढाने और बिना ज़रूरी परीक्षणों के, जल्द से जल्द से उन्हें राष्ट्रीय परिवार नियोजन कार्यक्रम में शामिल करने के लिए कदम उठाये. 1994 में डेपो प्रोवेरा को “सामाजिक मार्केटिंग” के लिए लांच किया गया, इस प्रावधान के साथ कि मार्केटिंग कंपनी मैक्स फार्मा पोस्ट मार्किट सर्विलेंस करेगी. महिला संगठनों ने इसका कड़ा विरोध किया. प्रदर्शनों, उत्पादकों को सवाल करते हुए, सार्वजानिक बहसों और खतरनाक ड्रग्स के खिलाफ एक याचिका द्वारा कानूनी हस्तक्षेप से हम ने इस को परिवार नियोजन कार्यक्रम में शामिल किये जाने से रोका. पर चुनौतियां अभी भी हैं क्यूंकि डेपो प्रोवेरा को कुछ गैर सरकारी संगठनों के प्रजनन स्वास्थ्य पेकेजेस में शामिल किया जा रहा है और परिवार नियोजन कार्यक्रम में भी शामिल किये जाने की कोशिशें जारी हैं, हाँ, पर साथ ही हमारी इसे रोकने की जंग भी जारी है.`]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'Depo Provera',
        hindiTitle: 'डेपो प्रोवेरा'
    },
    {
        id: 'InnerCategory4',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['InnerCategory4'], 'subCategoryIdList'),
        categoryIdList: ['Subcategory12'],
        description: {
            en: [
                `The campaign against Net-En began as action against unethical trials on poor women in Andhra Pradesh and grew nationwide. Beyond stopping trials, we raised government accountability and were co-petitioners in a Supreme Court Public Interest Litigation to prevent introduction of this provider-controlled long-acting contraceptive into the National Family Planning Programme, successfully stalling it for 15 years. We built an extensive database to challenge the “scientific” arguments of the Indian Council for Medical Research and World Health Organisation. At closure, the Court directed that Net-En could be introduced only where adequate facilities for follow-up and counselling exist. However Net-En is now available over the counter, and the government and multilateral agencies continue their efforts to push it into the health programme.`
            ],
            hi: [`नेट-एन के खिलाफ अभियान की शुरुआत आंध्र प्रदेश में गरीब औरतों पर अनैतिक परिक्षणों के विरुद्ध कार्यवाही के रूप में शुरू हुआ. परिक्षण रोकने के इलावा हम ने सरकारी जवाबदेही के सवाल भी उठाये. हम सर्वोच्च न्यायालय में दायर जन हित याचिका में सह याचिकाकर्ता थे जिस में दूरगामी प्रभाव वाले प्रदाता नियंत्रित गर्भ निरोधक को राष्ट्रीय परिवार नियोजन कार्यक्रम में शामिल करने से रोकने की मांग की गई थी. हम 15 साल के लिए इसे सफलतापूर्वक रोक पाए. हम ने बड़े पैमाने पर डेटा बेस तैयार किया ताकि हम इंडियन काउंसिल फॉर मेडिकल रिसर्च और वर्ल्ड हेल्थ आर्गेनाईजेशन के “वैज्ञानिक” तर्कों को चुनौती दे सकें. न्यायालय ने निर्देश दिया कि नेट-एन को केवल तभी शुरू किया जा सकता है जब निगरानी और काउंसलिंग की समुचित सुविधाएं उपलब्ध हों. मगर अभी भी नेट-एन मांगने पर उपलब्ध है और सरकारी व बहुपक्षीय एजेंसियां द्वारा स्वास्थ्य कार्यक्रम में इसे शामिल करने की कोशिशें जारी हैं.`]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'Net-En',
        hindiTitle: 'नेट-एन'
    },
    {
        id: 'InnerCategory5',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['InnerCategory5'], 'subCategoryIdList'),
        categoryIdList: ['Subcategory12'],
        description: {
            en: [
                `Norplant was sought to be introduced hastily without necessary trials. Inserted for 3–5 years, it undermined women’s autonomy because women could not remove it themselves if they were suffering adverse effects or wishing pregnancy. Return of fertility was uncertain, and providers often refused early removal or lacked training. We campaigned against callous and unethical trials and promotion, petitioned authorities, attempted to contact trial participants, and used street theatre to expose coercive family planning, multinational interests and the role of the health ministry. Lawsuits against manufacturers abroad led to withdrawal and attempts to introduce Norplant in India stalled.`
            ],
            hi: [`नोरप्लान्ट को बिना ज़रूरी परीक्षणों के जल्दबाज़ी में लाने की कोशिशें की गई. इसे 3-5 साल के लिए औरतों को लगाया जाता है. यह औरतों की स्वायत्ता को कमजोर करता है क्यूंकि वे इससे खुद नहीं निकाल सकती, यदि वे किन्ही हानिकारक प्रभावों को झेल रही हैं या गर्भ धारण करना चाहती हैं. हम ने संवेदनहीन और अनैतिक परीक्षणों के खिलाफ अभियान किया, अधिकारियों को याचिकाएं दी, परिक्षण में हिस्सा लेने वाली औरतों को संपर्क किया और नुक्कड़ नाटकों के द्वारा दबावकारी परिवार नियोजन, बहुराष्ट्रीय हितों और स्वास्थ्य मंत्रालय की भूमिका का पर्दाफाश किया. विदेशों में उत्पादकों के खिलाफ़ मुकदमें दायर किये गए और भारत में नोरप्लान्ट को लाने की कोशिशों को रोका गया.`]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'Norplant',
        hindiTitle: 'नोरप्लांट'
    },
    {
        id: 'InnerCategory6',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['InnerCategory6'], 'subCategoryIdList'),
        categoryIdList: ['Subcategory12'],
        description: {
            en: [
                `Quinacrine Sterilisation (QS) is a non-surgical permanent sterilisation method using quinacrine pellets inserted into the uterus, leading to scarring that blocks the fallopian tube. Women’s groups exposed a nexus involving American actors, international NGOs, USFDA-linked pathways, Indian entrepreneurs, NGOs and government hospitals subjecting women to this hazardous method. A Supreme Court PIL led to a ban due to unknown and potentially harmful long-term effects. Our monograph Quinacrine: The Sordid Story of Chemical Sterilisations of Women detailed much of this and included interviews with many of the Indian stakeholders involved in promoting Quinacrine in India. However, a 2003 study found that five years after the ban, practitioners in India were still using quinacrine to sterilise women who did not know it had been banned.`
            ],
            hi: [`क्विनाक्रिन नसबंदी एक बिना सर्जरी ऐसी स्थायी नसबंदी की विधि है जिसमें क्विनाक्रिन की गोलियां गर्भाशय में डाली जाती हैं, जिससे अंदर घाव बन जाता है और फैलोपियन ट्यूब को बंद कर देता है। कुछ महिला संगठनों ने इस तरीके के इस्तेमाल में विदेशी लोगों, अंतरराष्ट्रीय एनजीओ, भारतीय व्यापारी, कुछ अन्य संस्थाओं और सरकारी अस्पतालों के मिलीभगत का भंडा फोड़ किया, जो इस खतरनाक तरीके को औरतों पर इस्तेमाल कर रहे थे। इस मामले पर सुप्रीम कोर्ट में जनहित याचिका (PIL) दायर हुई , जिसके बाद इसके खतरनाक और लंबे समय के दुष्प्रभावों के कारण इस पर रोक लगा दी गई। हमारी मोनोग्राफ “क्विनाक्रिन : औरतों की रासायनिक नसबंदी की घिनौनी कहानी” में इस पूरे मामले की विस्तृत जानकारी और इससे जुड़े लोगों के इंटरव्यू दिए गए हैं। हालाँकि, 2003 की एक रिपोर्ट में पता चला कि प्रतिबंध के पांच साल बाद भी कुछ जगहों पर इस तरीके का औरतों पर इस्तेमाल किया जा रहा था, जब कि उन औरतों को यह जानकारी नहीं थी कि इस पर पहले ही रोक लग चुकी है.`]
        },
        innerCategories: [],
        isSubcategory: true,
        title: 'Quinacrine Sterilisation',
        hindiTitle: 'क्विनाक्रिन नसबंदी'
    },
];

// Populate innerCategories for 'Hazardous Contraceptives' after subcategoriesSummary is fully defined
const hazardousContraceptivesSubcategory = subcategoriesSummary.find(sub => sub.id === 'Subcategory12');
if (hazardousContraceptivesSubcategory) {
    hazardousContraceptivesSubcategory.innerCategories = filterByArrayKeyAndIds(subcategoriesSummary, ['Subcategory12'], 'categoryIdList');
}