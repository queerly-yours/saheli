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
        hindiTitle: 'हमारे बारे में',
        decades: ['1980s', '2000s', '2010s' ],
        description: [
            `Saheli was set up in 1981 in New Delhi, India, initially as a crisis intervention centre. Early struggles against oppression and violence within marriage, family and community led to powerful campaigns against dowry, domestic violence, rape and discrimination against women in society and the law. Our work on women’s health included campaigns against coercive population control policies, hazardous contraceptives, sex determination, and the unethical trials and promotion of vaccines against women’s fertility and cervical cancer. We have confronted challenges posed by increasing conservatisms, communal politics, militarisation, globalisation and state repression, jointly with queer, Dalit, Adivasi and democratic rights’ groups, and other peoples’ movements.`,
            `When Saheli came into being, women from Left parties, socialist formations and peoples’ movements were seeking political spaces more responsive to women and women’s issues. We spoke about our lives, bodies, labour, sexuality, representation, religion and community, and the role of laws and the State. Our organisational autonomy from political parties and the State remains central to our identity. On funding too, we have stayed away from institutional funding  and agendas, both Indian and international. Members have had other jobs to support themselves, so organisational work has been mostly sustained through volunteer power, individual donations, contributions towards publications and periodic fundraising. This multifaceted autonomy has shaped our work and efforts to function outside hierarchical structures as a feminist collective, with all its strengths and limitations.`
        ],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['1'], 'categoryIdList'),
        isOpen: false,
        isCategory: true,
    },
    {
        id: '2',
        archiveImg: '../../../assets/archive/1.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['2'], 'categoryIdList'),
        title: 'Resisting Violence',
        hindiTitle: 'हिंसा के खिलाफ',
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [
            `Saheli has worked against various forms of violence against women since its inception. We raised our voice when dowry harassment and murders were treated as “private family matters,” spoke out against rape, moral policing, sex-selective abortions, sati and honour killings, and made linkages between inequities in law and domestic violence. We recognised coercive population policies as violence by the State and family, highlighted sexual harassment in educational and work places, and strategised against caste-based, communal, ethnic and homophobic violence. We also join hands with groups across the country against repression by the State and violence faced by women in conflict areas. Our campaigns include awareness work, studies, discussions, street plays, self-defence workshops, handling individual cases of workplace sexual harassment, and participating in efforts to reform and implement the law in letter and spirit.`
        ],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['2'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '3',
        archiveImg: '../../../assets/archive/2.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['3'], 'categoryIdList'),
        title: 'Countering Communalism',
        hindiTitle: 'साम्प्रदायिकता के खिलाफ',
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [
            `Delhi 1984. Bhagalpur 1989. Ayodhya, Kolkata, Surat 1992. Mumbai 1993. Gujarat 2002. Kandhamal 2008. Muzaffarnagar 2013. Delhi 2020. These are just some of the dates that mark fractures that have divided communities across India over the decades. Beyond violent outbursts, communal politics has long-term impacts on women’s rights and freedoms. Our crisis work sharpened our understanding of how religion and religious laws shape women’s lives, sexuality and access to resources. Cases like Shah Bano showed how women can be pushed back “for the sake of the community,” shaping our critique of communal politics and its gendered consequences.`
        ],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['3'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '4',
        archiveImg: '../../../assets/archive/3.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['4'], 'categoryIdList'),
        title: 'Women\u2019s Health',
        hindiTitle: 'महिला स्वास्थ्य',
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [
            `New technologies and contraceptives have repeatedly posed dangers to women’s health, with risks overlooked or ignored by agencies promoting them. Saheli, with other women’s and health groups, has pressured the government to reduce risks and, where necessary, ban hazardous technologies. Women’s health have been key focus areas, from action against misuse of E.P. drugs to campaigns against coercive population control programmes, long-acting hazardous contraceptives, sex determination, new reproductive technologies, unethical trials and promotion of anti-fertility and HPV vaccines. We have demanded accountability from both the state and the market, women’s right to information, safer contraceptives, adequate health facilities, and redressal for adverse effects. We oppose measures like the two-child norm and critiqued ethical guidelines and power imbalances in medical research, pushing for safeguards in clinical trials. Our activities ranged from taking recourse to the courts, engaging with parliamentarians and lawmakers, to public campaigns, seminars, street plays, protests and direct interventions.`
        ],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['4'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '5',
        archiveImg: '../../../assets/archive/1.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['5'], 'categoryIdList'),
        title: 'Sexualities and Gender',
        hindiTitle: 'यौनिकताएं व जेंडर',
        decades: ['2000s', '2010s' ],
        description: [
            `Many of our campaigns have addressed control of women’s sexuality by family, community, social structures and the law. Since the late 1990s, we have engaged with wider questions of sexuality, including LGBT rights. After the controversy around the film Fire and as part of the Campaign for Lesbian Rights (CALERI) (1999), we worked to make the issue visibilise the issue and generate public debate. Since 2004, we were part of Voices Against 377, a Delhi-based coalition that filed a key intervention at the Delhi High Court, contributing to the reading down of Section 377 of the IPC and the decriminalisation of adult consensual sexual relations. Marching at Delhi Queer Pride and responding to homophobia and lesbian/gay suicides, we affirm that women’s and queer struggles are linked. We continue to work towards recognition of sex work as work, dignity for all transgender people and intersex communities.`
        ],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['5'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '6',
        archiveImg: '../../../assets/archive/2.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['6'], 'categoryIdList'),
        title: 'Contesting Caste',
        hindiTitle: 'जातिवाद के खिलाफ',
        decades: ['1990s', '2000s', '2010s' ],
        description: [
            `Over the last three decades, women’s oppression linked to religious and caste identity has become clearer, including how caste honour and privilege produce inequalities among women and sanction violence, especially sexual violence against lower caste women. Since the 1990s, Saheli has organised internal and open meetings to explore gender-caste intersections, share experiences, address challenges, and reflect on relationships between caste-based movements, caste-based women’s groups and the women’s movement. In 2008, we published Talking marriage, caste and community: Voices from within, based on a study of the intersection of marriage, sexuality, caste and community. We also evolved the play Kaun Jaat, using monologues to foreground women’s experiences of community control and trigger discussion. We have also engaged with the role of caste panchayats in controlling women’s sexuality and freedoms.`
        ],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['6'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '7',
        archiveImg: '../../../assets/archive/3.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['7'], 'categoryIdList'),
        title: 'State Repression',
        hindiTitle: 'राजकीय दमन',
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [
            `Saheli has maintained a strong critique of the coercive and repressive role of the State, whether in the name of population control, development, or “law and order.” We have campaigned against coercive population control measures, for repeal of draconian laws such as the Armed Forces Special Powers Act (AFSPA), Terrorism and Disruptive Activities (Prevention of) Act, (TADA) Prevention of Terrorism Act (POTA), and Unlawful Activities (Prevention) ACT (UAPA). Through fact-finding on militarisation and campaigns against disappearances, arbitrary arrests, torture, encounter killings and the use of sexual violence, we joined hands with women’s groups, students groups, human rights, democratic rights and peoples’ organisations. We have also been part of the nationwide alliance “Women against Sexual Violence and State Repression,” strengthening efforts against such terror by the state.`
        ],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['7'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '8',
        archiveImg: '',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['8'], 'categoryIdList'),
        title: 'Legal Struggles',
        hindiTitle: 'कानूनी संघर्ष',
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [
            `Many of Saheli’s campaigns have involved engaging with the law, from domestic violence and family/inheritance laws to sati, rape, workplace sexual harassment, communal violence, draconian laws such as Armed Forces Special Powers Act (AFSPA) and Unlawful Activities (Prevention) ACT (UAPA), and decriminalisation of homosexuality in India. Our engagements range from handling cases and protesting to writing and participating in the evolution of better legal provisions. While legislation marks what society regards as unacceptable and punishable, law often fails to address complex realities as social attitudes remain pro-patriarchal and anti-women. Questions about law reform recur, but we have worked with the understanding that law can be a tool that may empower women and move towards a more gender-just society. The limited results of better laws do not justify abandoning law reform. Without engaging these systems, there is little hope for change.`
        ],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['8'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '9',
        archiveImg: '',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['9'], 'categoryIdList'),
        title: 'Other Debates and Concerns',
        hindiTitle: 'अन्य विमर्श',
        decades: ['1990s', '2000s', '2010s' ],
        description: [
            `Many of the issues we have engaged with do not fit neatly, or appear not to be so called “women’s issues.” While women are uniquely affected by policies and processes, and only a gender lens can integrate women’s questions into wider struggles against oppression and for social transformation. With this understanding we have engaged with  issues including pornography, censorship, prostitution/sex work, livelihood and displacement, big dams, unorganised sector labour, war and nuclear testing, among others. Simultaneously we have raised deep concerns about the nature and functioning of institutions such as the National Commission for Women (NCW) and National Human Rights Commission (NHRC).`
        ],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['9'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '10',
        archiveImg: '../../../assets/archive/3.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['10'], 'categoryIdList'),
        title: 'Solidarity',
        hindiTitle: 'एकजुटता',
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [
            `Firm in our conviction that struggles are intertwined and liberation is collective, we work jointly with many groups to push the limits and build deep and meaningful change. We have been part of numerous struggles and movement on a range of issues through joint platforms, networks and forums, and also in providing support to peoples’ movements from our location in the capital city of New Delhi.`
        ],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['10'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '11',
        archiveImg: '../../../assets/archive/1.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['11'], 'categoryIdList'),
        title: 'Conferences',
        hindiTitle: 'सम्मेलन',
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [
            `The binaries between academia vs activism have long been contested , as have been concerns of how political activism and academic scholarship can be best integrated, and why academics should not be ‘neutral’ on social issues. To contribute towards bridging this gap, we  have been part of both Autonomous Women’s Conferences and Women Studies Conferences as also many other issue based deliberations, seminars and conferences.`
        ],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['11'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '12',
        archiveImg: '../../../assets/archive/2.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['12'], 'categoryIdList'),
        title: 'Celebrations',
        hindiTitle: 'जश्न',
        decades: ['1980s', '2000s', '2010s' ],
        description: [
            `Almost a century after she passed, Emma Goldman, the Russian-born anarchist revolutionary, political activist, and writer who famously said, ‘If I can’t dance, I don’t want to be part of your revolution’ (often paraphrased as ‘If I can’t dance, it isn’t my revolution) still inspires the spirit of beauty, joy and fun in the women’s movement in India. So it is that along with all our stories of struggles and challenges, we try to capture some of the fun we have together as Sahelis.`
        ],
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
        description: [
            `Over 45 years of existence, almost always with an office to hold our meetings, encounters, emotions, records, publications, and so much more. For some, the Saheli archive may be fragments of memory, reminders of a journey taken, connections with co-travellers, lost or maybe forgotten along the way. For others, we hope the archive will open the door to evidence of our having been there, records of having done that, chronicles of how we got there, and traces of destinations we always wanted to, but never quite reached. Of course, like every archive, this too is an incomplete collection, much of it lost to the vagaries of time, the unpredictability of collecting and organising materials amid the chaotic rhythms of our activism, and of course the destruction wreaked by a fire in May 2011.`
        ],
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
        description: [
            `Since 1982, except for a short break in the early 1990s, we have brought out newsletters regularly to share our work and perspectives. We have published special reports and monographs on specific subjects and campaigns. We tried to reach a broad audience by publishing almost all our materials in Hindi along with English. Then there have been calendars designed and printed to raise funds as well as analytical and reflective souvenirs issued at the time of fund-raising events. It may be of interest to note that in all these decades, none of our publications carry author names since they all emerge from collective experience and knowledge, including of those in the group who may not write.`
        ],
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
