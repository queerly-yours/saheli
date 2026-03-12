import { articlesSummary } from "./all-articles-summary";
import { subCategory } from "./data-model";
import { filterByArrayKeyAndIds } from "./utils";

export const subcategoriesSummary: subCategory[] = [
    {
        id: 'Subcategory30',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory30'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: [
            `Our work with women in personal crisis situations brought us up against patriarchal forces in multiple forms: unsupportive families and neighbours, disbelieving police at local thanas, unscrupulous lawyers, and unsympathetic magistrates. We realised women needed a space to speak, be heard with empathy, and find support to rebuild their lives. For more than a decade we worked as a counselling centre, providing emotional and legal counselling to women in crisis. We also ran a shelter for a few years and campaigned for new laws and amendments to existing laws. Though we did not continue as a crisis intervention centre after the 1990s, our linkage with the issue remains alive through our work at several levels.`
        ],
        isSubcategory: true,
        title: 'Crisis Intervention',
        hindiTitle: 'संकट में सहयोग'
    },
    {
        id: 'Subcategory25',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory25'], 'subCategoryIdList'),
        categoryIdList: ['3'],
        description: [
            `As a nation born out of a partition of the people based on religious identity, its consequences continue to haunt us. Divisive political mobilisation has consistently fanned the flames of social and communal prejudice over the last many decades. But with the rise of right wing Hindutva politics since the 1980s, everything from education to food and clothing, religious sites and routines to work and occupation has gained a communal hue. Today, these differences are cemented in laws such as the Citizenship Amendment Act (CAA), 2019 and programmes such as Special Intensive Revision (SIR) of the Election Commission of India (ECI) which are systematically disenfranchising citizens and causing widespread panic and insecurity among minorities, migrants, women and transgender communities.`
        ],
        isSubcategory: true,
        title: 'Communalism',
        hindiTitle: 'साम्प्रदायिकता'
    },
    {
        id: 'Subcategory1',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory1'], 'subCategoryIdList'),
        categoryIdList: ['2', '3'],
        description: [
            `Anti-Sikh violence in 1984 forced Saheli to confront communal violence and its gendered impact. Our perspective evolved through relief and rehabilitation work. Violence in Mumbai and the anti-Muslim genocide in Gujarat compelled further work: organising relief, pushing for state support for victims, demanding punishment for the guilty, joining democratic and secular platforms for peace, participating in fact-finding, and supporting legal efforts, while developing a feminist critique of rising fundamentalisms. We saw how violence is systematically targeted against communities with state complicity, and how sexual violence becomes central in such conflicts. We also noted the mobilisation of women in right-wing politics and the tightening of control over women in the name of “honour.”`
        ],
        isSubcategory: true,
        title: 'Communal Violence',
        hindiTitle: 'सांप्रदायिक हिंसा'
    },
    {
        id: 'Subcategory2',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory2'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: [
            `Saheli was born out of the campaign against women being harassed or killed for dowry. But the violence women faced was not only dowry-related, but also emotional and physical control and torture, economic deprivation and discrimination by husbands, in-laws and parents, aimed at maintaining women’s subordination within the family. This work widened our understanding of how patriarchy operates and sustains itself within marriage and family. We began counselling young women, supporting legal processes, and helping them rebuild their lives. We felt the need for shelters and stronger support systems. We campaigned for new laws and amendments to address violence in domestic spaces, and have been actively involved in the creation of the Protection of Women from Domestic Violence Act, 2005.`
        ],
        isSubcategory: true,
        title: 'Domestic Violence',
        hindiTitle: 'घरेलू हिंसा'
    },
    {
        id: 'Subcategory3',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory3'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: [
            `Our work on rape emerged from deeply unjust court judgments in the cases of Mathura, Rameeza Bee and Maya Tyagi. While nationwide agitations led to changes in criminal law, shortcomings and pitfalls in implementation continued. Our work with survivors revealed how routinely justice is subverted. We argued that law must move beyond narrow penile-vaginal definitions of “rape” to a broader understanding of “sexual assault.” With women’s groups, queer groups and child rights’ groups, we have worked on far-reaching modifications needed in the approach to sexual assault and its legal remedies. Be it mass sexual assault during ethnic/communal/caste-based conflicts, as well as sexual assault against transgender people, men and children. We have also consistently highlighted the use of sexual violence as a tool of repression by state agencies, including police, paramilitary and armed forces.`
        ],
        isSubcategory: true,
        title: 'Rape/Sexual Assault',
        hindiTitle: 'बलात्कार/यौनिक हिंसा'
    },
    {
        id: 'Subcategory4',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory4'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: [
            `On September 4, 1987, Roop Kanwar was burnt to death on her husband’s funeral pyre in Deorala, Rajasthan. The incident triggered nationwide protests against sati and its glorification in the name of tradition. The ideology of sati was brought into question, along with the role of police, politicians, ministers and community leaders in validating/glorifying it. Along with other women’s groups and democratic forces, we raised issues of religion and religious/community identity in the public arena. Rallies, demonstrations and signature campaigns demanded stringent action and effective legislation against glorification, leading to the Commission of Sati (Prevention) Act, 1988. In subsequent years, our struggles focused on challenging continued glorification, protesting acquittals in Roop Kanwar’s case, exposing political double standards, and responding to other cases of sati through fact-finding missions and protest actions.`
        ],
        isSubcategory: true,
        title: 'Sati',
        hindiTitle: 'सती'
    },
    {
        id: 'Subcategory5',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory5'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: [
            `In our work on violence against women, we sought ways of tackling violence through initiatives that enhance personal-safety skills and confidence, especially for day-to-day violence on the streets. Our introductory encounter with feminist self defence techniques was at the first creative workshop called ‘Kriti’ organised by us in 1983 in Delhi. Decades later, we began to train for and conduct Wenlido (“Women’s Path of Strength”) that helps women connect with their strengths, challenging the conditioning that frames women as the “weaker sex.” Along with physical techniques, Wenlido supports the evolution of a woman’s self-image as strong, capable, and in control of her life. We have organised Wenlido workshops for college students, nurses, factory workers, activist groups, NGO employees, corporates, queer women, blind women and transgender people, within and outside Delhi.`
        ],
        isSubcategory: true,
        title: 'Self Defence',
        hindiTitle: 'आत्म-रक्षा'
    },
    {
        id: 'Subcategory6',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory6'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: [
            `Sexual harassment has long been trivialised as “eve-teasing,” but in 1997, after a case filed by women’s groups following the gangrape of a government women’s development programme worker, Bhanwari Devi, the Supreme Court recognised workplace sexual harassment and issued guidelines for its redressal. Following this and the Protection of Women against Sexual Harassment at Workplace Act, 2013, workplaces are required to have internal mechanisms for redressal. However, complainants still face prejudiced committees, retaliation, false cases, job loss, and severe emotional and mental trauma. Saheli conducted a survey with working women and published a report called Another Occupational Hazard in 1998 and developed the street play Mahaul Badalna Hai (1999–2000) that many other groups have also performed as part of their camp-aign work. Performances have led to discussions and workshops with students, domestic workers, security workers, trade unions, NGOs and others over the years. We also handled individual cases and have been on internal complaints committees in government and non-government institutions.`
        ],
        isSubcategory: true,
        title: 'Sexual Harrasment',
        hindiTitle: 'यौन उत्पीड़न'
    },
    {
        id: 'Subcategory7',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory7'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: [
            `Saheli has maintained a strong critique of the coercive and repressive role of the State, whether in the name of population control, development, or “law and order.” We have campaigned against coercive population control measures, for repeal of draconian laws such as the Armed Forces Special Powers Act (AFSPA), Terrorism and Disruptive Activities (Prevention of) Act, (TADA) Prevention of Terrorism Act (POTA), and Unlawful Activities (Prevention) ACT (UAPA). Through fact-finding on militarisation and campaigns against disappearances, arbitrary arrests, torture, encounter killings and the use of sexual violence, we joined hands with women’s groups, students groups, human rights, democratic rights and peoples’ organisations. We have also been part of the nationwide alliance “Women against Sexual Violence and State Repression,” strengthening efforts against such terror by the state.`
        ],
        isSubcategory: true,
        title: 'State Violence',
        hindiTitle: 'राजकीय हिंसा'
    },
    {
        id: 'Subcategory8',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory8'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: [
            `As a campaign group, we have posed difficult questions to society, the State, medical establishment, media, judiciary and police, as well as to groups like ourselves. We have campaigned on issues related to violence and oppression within family, marriage and community that control women’s sexuality, property and life choices, from domestic violence to rape to workplace sexual harassment, and violence by state agencies and militarisation. We have also contributed to campaigns for women’s health, and for egalitarian and just civil rights for women. Understanding that our struggles are interlinked with those of workers, farmers, transgender persons, persons with disabilities, Adivasi and Dalit communities, we have joined wider campaigns against class, caste, gender, disability and ethnicity-based oppression. Research, writing, public demonstrations, protests, street plays, leafleting at public spaces across Delhi, dialogues with students and meetings have been key methods to raise awareness and push for change.`
        ],
        isSubcategory: true,
        title: 'Campaigns',
        hindiTitle: 'अभियान'
    },
    {
        id: 'Subcategory9',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory9'], 'subCategoryIdList'),
        categoryIdList: ['3'],
        description: [
            `Crisis intervention brought forward questions about religion and discrimination in divorce, guardianship, property, inheritance and other rights within personal laws. Working towards an egalitarian civil code was not straightforward amid the rise of the Hindu right wing and identity politics. Through debates, leaflets and the street play Farq, we sought to make the issue visible and challenge both the State and religious conservatism. The controversy surrounding Shah Bano’s case and the subsequent usurpation of our demand for a uniform civil code by the right wing as a code grounded in Hindu law, the demolition of Babri Masjid and the rise of communal politics converted questions of women’s equality into questions of religious freedom and identity. This push for further Hinduising the nation has become even more complicated in current times. Our initial scepticism about reform of personal laws from within the community has given way to an engagement with efforts to do so, alongside we have  continued with the commitment for egalitarian rights for all women.`
        ],
        isSubcategory: true,
        title: 'Personal Law Debates',
        hindiTitle: 'निजी कानून'
    },
    {
        id: 'Subcategory10',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory10'], 'subCategoryIdList'),
        categoryIdList: ['3'],
        description: [
            `The communal tide of the past decades has made conditions increasingly fragile for women. Militant right-wing mobilisation in the name of religion, culture, tradition and nation has intensified control over women within and across communities. This includes moral policing, dress codes, regressive traditions, increased ritualisation of everyday life, and restrictions on women’s sexuality, mobility and freedom. We have also witnessed the power and violence of caste and community panchayats, especially over women framed as bearers of “honour.” In resisting these forces, we highlight the criminality and unconstitutionality of such impositions and protest the collusion of religious and caste/community forces with regressive voices in politics, society, government and the media.`
        ],
        isSubcategory: true,
        title: 'Rising Fundamentalisms',
        hindiTitle: 'बढता कट्टरवाद'
    },
    {
        id: 'Subcategory31',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory31'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: [
            `Functionally, the government, state policy, multilateral agencies and even some civil society groups working on the issue, concerns around women’s health have largely remained limited to women’s ‘reproductive health.’ While this is an important aspect of women’s lives and needs attention in terms of contraceptive and reproductive control, menstrual health, nutritional status, pre- and post-partum health, etc., our perspective has always been that to see these factors merely in the context of women’s reproduction is to have misplaced priorities. Such a perspective also minimises or negates the importance of other health issues women face, be it non-reproductive health related consequences of hormonal contraception, mental health issues, social and economic factors that determine her access to food, nutrition, medical attention or even recovery from violence.`
        ],
        isSubcategory: true,
        title: 'Health',
        hindiTitle: 'स्वास्थ्य'
    },
    {
        id: 'Subcategory11',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory11'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: [
            `Population control has been central to government policy since Independence, with “overpopulation” invoked to explain poverty, environmental degradation and maternal mortality. The National Family Planning Programme relied on coercion, forced sterilisation and incentives, often pushing contraceptives unsuited to people’s health status. Despite claims about women’s health and empowerment, little changed. From the 1980s, Saheli worked with a broad coalition of feminist and democratic rights groups to demand an end to coercion. We have highlighted that underdevelopment lies in social inequities, including unequal access to resources, education, water, health and food, not in the numbers of people. Challenging population control theory while foregrounding women’s concerns has remained an uphill task.`
        ],
        isSubcategory: true,
        title: 'Population Control',
        hindiTitle: 'जनसंख्या नियंत्रण'
    },
    {
        id: 'Subcategory12',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory12'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: [
            `New technologies and contraceptives have posed multiple dangers to women’s health, with hazards overlooked or not anticipated by agencies while they callously push these technologies onto women. Saheli, with other women’s and health groups, has pressured the government to strengthen legal processes that reduce risk and, where necessary, ban hazardous technologies. Our efforts to reform legal processes involving health-related technologies are reflected in our writings and campaigns.`
        ],
        innerCategories: [], // Initialize as empty, will be populated later
        isSubcategory: true,
        title: 'Hazardous Contraceptives', // This subcategory has inner categories,
        hindiTitle: 'खतरनाक गर्भनिरोधक'
    },
    {
        id: 'Subcategory29',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory29'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: [
            `In the early 1980s, E.P. drugs (high-dose estrogen-progesterone combinations) were widely available and misused as pregnancy tests, for amenorrhea, postponing menses, and as abortifacients. They had been banned in several countries due to links with congenital malformation, but DGHS refrained from banning them in India. Saheli, with Voluntary Health Association of India (VHAI), conducted letter-campaigns to groups, doctors and chemists, and ran a signature campaign among doctors to oppose their use as pregnancy tests. After a 1982 ban, the manufacturers obtained stay orders. Collective intervention by doctors, lawyers, journalists, health and women’s groups, science and consumer groups helped reinstate the ban. Saheli’s submissions critiqued evidence presented by drug companies and included affidavits showing ongoing misuse. The campaign affirmed women’s need for safe, effective, cheap pregnancy testing and access to safe abortion.`
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'EP Drugs',
        hindiTitle: 'ई पी ड्रग्स'
    },
    {
        id: 'Subcategory28',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory28'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: [
            `The push for HPV vaccines is a stark example of pharma-regulatory nexus. In India, vaccines were licensed without mandatory clinical trials and administered and promoted for young girls. In July 2009, unethical “studies” on young tribal girls in Khammam (Andhra Pradesh) and Baroda (Gujarat) came to light. A media blitz created fear of cervical cancer and framed vaccines as the only protection. Women’s and child rights’ groups challenged unethical trials, dubious efficacy, adverse effects, cost, lack of screening facilities and other public health priorities. Advertising was halted, and after Parliament raised the issue, studies were suspended pending enquiry. The campaign continues until licenses are revoked. Now these HPV vaccines are being promoted by Prime Minister Modi himself as a part of the 2026 campaign for ‘women’s access to health.’`
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'HPV Vaccines',
        hindiTitle: 'एच पी वी टीका'
    },
    {
        id: 'Subcategory13',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory13'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: [
            `Women’s interests can be obscured when conservative norms, medical technology, commercial interests and population control converge and collude. Technologies such as amniocentesis and ultrasound, useful for foetal monitoring, also enabled sex determination, leading to large-scale sex-selective abortions and worsening sex ratios. Amid debates about “women’s best interests,” we campaigned for national legislation to regulate misuse, which was passed in 1994. This campaign also triggered a deeper engagement between the women’s rights’ movement and disability rights’ activists on their perspectives on selective abortions based on foetal ‘deformities’ or ‘disabilities.’ The continuing challenge is political will and implementation. With new reproductive technologies and surrogacy, the challenges continue to rise.`
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Sex Selection',
        hindiTitle: 'लिंग चुनाव'
    },
    {
        id: 'Subcategory26',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory26'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: [
            `One of our earliest engagements with women’s health was the action to stop unethical trials of the long acting hormonal contraceptive Net-En on poor women in Andhra Pradesh. Soon we realised that the premiere medical research organisation in the country, the Indian Council for Medical Research (ICMR) had multiple plans to conduct ‘trials’ of hazardous contraceptives on poor, illiterate and nutritionally challenged women, with little or no access to medical care. Their approach cared little for ‘informed consent’, regulated follow up and monitoring for side effects, etc., so we directed our efforts against such trials. When ICMR revised its Ethical guidelines for human trials, we engaged with and contributed to the process. Post-liberalisation, these challenges became even more complex with vested companies being handed the responsibility for ‘post marketing surveillance.’ The emergence of newer reproductive technologies like in vitro fertilisation and surrogacy also raised new ethical challenges that we have engaged with.`
        ],
        isSubcategory: true,
        title: 'Medical Ethics',
        hindiTitle: 'चिकित्सीय नैतिकता'
    },
    {
        id: 'Subcategory14',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory14'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: [
            'Early feminist wisdom was that sex refers to biological differences (chromosomal, hormonal, reproductive), whereas gender refers to socially constructed roles, behaviors, activities, and expectations associated with femininity and masculinity. However in recent years, the queer, trans* and intersex movements have transformed our understanding about gender being not just a social construct, but rather, a personal sense of identity and self that may or may not align with the sex assigned at birth. And of course, these may range from binary to non-binary identities. Such emerging understandings and lived experiences pose new challenges to feminist frameworks as well as our struggles for a gender-just world in legal, social and political terms.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Emerging Challenges',
        hindiTitle: 'उभरती चुनौतियाँ'
    },
    {
        id: 'Subcategory15',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory15'], 'subCategoryIdList'),
        categoryIdList: ['8'],
        description: [
            `As a nation born out of a partition of the people based on religious identity, its consequences continue to haunt us. Divisive political mobilisation has consistently fanned the flames of social and communal prejudice over the last many decades. But with the rise of right wing Hindutva politics since the 1980s, everything from education to food and clothing, religious sites and routines to work and occupation has gained a communal hue. Today, these differences are cemented in laws such as the Citizenship Amendment Act (CAA), 2019 and programmes such as Special Intensive Revision (SIR) of the Election Commission of India (ECI) which are systematically disenfranchising citizens and causing widespread panic and insecurity among minorities, migrants, women and transgender communities.`
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Communalism',
        hindiTitle: 'साम्प्रदायिकता'
    },
    {
        id: 'Subcategory16',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory16'], 'subCategoryIdList'),
        categoryIdList: ['8'],
        description: [
            `Functionally, the government, state policy, multilateral agencies and even some civil society groups working on the issue, concerns around women’s health have largely remained limited to women’s ‘reproductive health.’ While this is an important aspect of women’s lives and needs attention in terms of contraceptive and reproductive control, menstrual health, nutritional status, pre- and post-partum health, etc., our perspective has always been that to see these factors merely in the context of women’s reproduction is to have misplaced priorities. Such a perspective also minimises or negates the importance of other health issues women face, be it non-reproductive health related consequences of hormonal contraception, mental health issues, social and economic factors that determine her access to food, nutrition, medical attention or even recovery from violence.`
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Health',
        hindiTitle: 'स्वास्थ्य'
    },
    {
        id: 'Subcategory17',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory17'], 'subCategoryIdList'),
        categoryIdList: ['8'],
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Sexuality',
        hindiTitle: 'यौनिकता'
    },
    {
        id: 'Subcategory18',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory18'], 'subCategoryIdList'),
        categoryIdList: ['8'],
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Violence',
        hindiTitle: 'हिंसा'
    },
    {
        id: 'Subcategory19',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory19'], 'subCategoryIdList'),
        categoryIdList: ['10'],
        description: [
            `We have been part of joint struggles against religious fundamentalism, caste violence, war and militarisation, nuclear weapons, displacement, factory closures, slum demolitions, homophobic attacks, and repression of movements. This has meant working in joint formations with NGOs, peoples’ organisations and organised Left formations, though at times, we have still found ourselves isolated in the articulation of our politics with regard to questioning dominant development paradigms and supporting LGBT struggles and sex workers.`
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Issues',
        hindiTitle: 'मुददे'
    },
    {
        id: 'Subcategory20',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory20'], 'subCategoryIdList'),
        categoryIdList: ['10'],
        description: [
            `Remembering Sahelis and other feminist friends and comrades who have been our co-travellers, sources of inspiration and strength.`
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Salaam Saathi!',
        hindiTitle: 'सलाम साथी'
    },
    {
        id: 'Subcategory21',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory21'], 'subCategoryIdList'),
        categoryIdList: ['11'],
        description: [
            `National Conferences of Women’s Liberation as they were once called, also mark the trajectory of the long history of the autonomous women’s movement in India. The first such conference took place in Mumbai in 1980 during the Anti-Rape Campaign, followed by conferences in Mumbai (1985), Patna (1987), Calicut (1990), Tirupati (1994), Ranchi (1997) and Kolkata (2006). Each becoming a space for debate, discussion, sharing and moving forward as a movement. Their core strength has been in bringing together autonomous groups not aligned to government, political parties, underground groups or funding agencies, across issues and concerns, as a space for collective ideas, politics and struggles. It is also a space of feminist fun, laughter and solidarity. Saheli has been an intrinsic part of planning and organising these conferences.`
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Autonomous Women\'s Conferences',
        hindiTitle: 'स्वायत्त महिला सम्मलेन'
    },
    {
        id: 'Subcategory22',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory22'], 'subCategoryIdList'),
        categoryIdList: ['11'],
        description: [
            'To discuss and deliberate on issues we have been working on, we have  been part of  seminars and conferences on women’s health, safety, communalisation of society and polity, caste-structured society, state violence and repressions, media representation and censorship, war and nuclearisation. We have also presented numerous papers at women’s studies seminars and conferences on challenges facing organisations like Saheli, and also reflected on what sustains such groups despite all the constraints. These occasions offer space to think and rethink our politics, strategies and reasons for continuing our journey.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Other Conferences',
        hindiTitle: 'अन्य सम्मलेन'
    },
    {
        id: 'Subcategory23',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory23'], 'subCategoryIdList'),
        categoryIdList: ['12'],
        description: [
            `International Women’s Day marks social, political and economic struggles and reminds us that women’s place in society remains far from a feminist ideal. Over the years, we have joined other women’s groups and organisations, including Left-affiliated groups, student groups, Dalit and gender minority groups and disability groups, to form joint platforms to celebrate togetherness, raise issues and make demands of the State and society. There have also been moments when political differences led us to organise separately, or when groups felt their issues and leadership were not represented. For example, when Dalit women’s groups broke off from the joint celebrations in 1987, autonomous groups in 2000 due to objections to the participation of Campaign for Lesbian Rights (CALERI), and conflicts around Nandigram in 2008. Despite these ups and downs, the effort has been to find common ground or move forward through issue-based alliances.`
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'International Women\'s Day',
        hindiTitle: 'अंतर्राष्ट्रीय महिला दिवस'
    },
    {
        id: 'Subcategory24',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory24'], 'subCategoryIdList'),
        categoryIdList: ['12'],
        description: [
            `Every year in July, our weekly Wednesday meetings return to the question: how should we mark Saheli’s beginnings this year? August 9, 1981 began a journey of raising our voice against women’s oppression and struggling towards a world free of violence and injustice. The day also reminds us of challenges in continuing against patriarchies, especially as a small, non-funded autonomous collective. We mark it without fixed rules: discussions, debates, outreach to students, or gathering with friends and supporters in the office. The objective is to energise our struggles and affirm togetherness with co-travellers, because there are many reasons to go on.`
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Saheli Day',
        hindiTitle: 'सहेली दिवस'
    },
    {
        id: 'Subcategory27',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory27'], 'subCategoryIdList'),
        categoryIdList: ['12'],
        description: [
            `In many ways, our journey and work has run in parallel to that of many other autonomous women’s groups from across the country that started around the same time as us. So just as we believe that this archive/website and the concerns it expresses echoes that of many others, their celebrations have been as much part of our journey as have been the emotions with which we have been part of them.`
        ],
        isSubcategory: true,
        title: 'Others',
        hindiTitle: 'अन्य'
    },
    {
        id: 'InnerCategory1',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['InnerCategory1'], 'subCategoryIdList'),
        categoryIdList: ['Subcategory12'],
        description: [
            `The Anti-Fertility Vaccine (AFV) campaign brought women worldwide together to confront the role of WHO in population control. Voices from Canada to India challenged a “scientific” perspective that treated pregnancy as an illness and deployed the immune system to “fight” it, exposing women to risks of autoimmune disease. India became a major site as trials were pursued here. Activists from across the country including Saheli challenged the research establishment with public actions, direct engagement and our published monograph titled, Target Practice.`
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Anti Fertility Vaccines',
        hindiTitle: 'प्रजनन विरोधी टीका'
    },
    {
        id: 'InnerCategory2',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['InnerCategory2'], 'subCategoryIdList'),
        categoryIdList: ['Subcategory12'],
        description: [
            `Under pressure to achieve a “two child family” by 2000, the government sought to expand contraceptive options and speedily introduce them into the National Family Planning Programme without necessary clinical trials. Depo Provera was launched for “social marketing” in 1994, with a provision that the marketing company Max Pharma conduct Post Marketing Surveillance (PMS). Women’s groups strongly opposed this. Through protests, confronting manufacturers, public debate, and legal intervention in a petition against hazardous drugs, we prevented its inclusion in the family planning programme to date. The challenge persists as Depo Provera has been included in some NGO reproductive health packages, and efforts to introduce it continue, as do our battles to prevent it.`
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Depo Provera',
        hindiTitle: 'डेपो प्रोवेरा'
    },
    {
        id: 'InnerCategory4',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['InnerCategory4'], 'subCategoryIdList'),
        categoryIdList: ['Subcategory12'],
        description: [
            `The campaign against Net-En began as action against unethical trials on poor women in Andhra Pradesh and grew nationwide. Beyond stopping trials, we raised government accountability and were co-petitioners in a Supreme Court Public Interest Litigation to prevent introduction of this provider-controlled long-acting contraceptive into the National Family Planning Programme, successfully stalling it for 15 years. We built an extensive database to challenge the “scientific” arguments of the Indian Council for Medical Research and World Health Organisation. At closure, the Court directed that Net-En could be introduced only where adequate facilities for follow-up and counselling exist. However Net-En is now available over the counter, and the government and multilateral agencies continue their efforts to push it into the health programme.`
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Net-En',
        hindiTitle: 'नेट-एन'
    },
    {
        id: 'InnerCategory5',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['InnerCategory5'], 'subCategoryIdList'),
        categoryIdList: ['Subcategory12'],
        description:[
            `Norplant was sought to be introduced hastily without necessary trials. Inserted for 3–5 years, it undermined women’s autonomy because women could not remove it themselves if they were suffering adverse effects or wishing pregnancy. Return of fertility was uncertain, and providers often refused early removal or lacked training. We campaigned against callous and unethical trials and promotion, petitioned authorities, attempted to contact trial participants, and used street theatre to expose coercive family planning, multinational interests and the role of the health ministry. Lawsuits against manufacturers abroad led to withdrawal and attempts to introduce Norplant in India stalled.`
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Norplant',
        hindiTitle: 'नोरप्लांट'
    },
    {
        id: 'InnerCategory6',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['InnerCategory6'], 'subCategoryIdList'),
        categoryIdList: ['Subcategory12'],
        description: [
            `Quinacrine Sterilisation (QS) is a non-surgical permanent sterilisation method using quinacrine pellets inserted into the uterus, leading to scarring that blocks the fallopian tube. Women’s groups exposed a nexus involving American actors, international NGOs, USFDA-linked pathways, Indian entrepreneurs, NGOs and government hospitals subjecting women to this hazardous method. A Supreme Court PIL led to a ban due to unknown and potentially harmful long-term effects. Our monograph Quinacrine: The Sordid Story of Chemical Sterilisations of Women detailed much of this and included interviews with many of the Indian stakeholders involved in promoting Quinacrine in India. However, a 2003 study found that five years after the ban, practitioners in India were still using quinacrine to sterilise women who did not know it had been banned.`
        ],
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