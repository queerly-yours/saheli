import { articlesSummary } from "./all-articles-summary";
import { subcategoriesSummary } from "./all-subcategory-summary";
import { archive, category } from "./data-model";
import { publicationsCategory } from "./publications";
import { filterByArrayKeyAndIds, filterByIds } from "./utils";

export const categories: category[] = [
    {
        id: '1',
        archiveImg: '../../../assets/archive/3.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['1'], 'categoryIdList'),
        title: 'About Us',
        decades: ['1980s', '2000s', '2010s' ],
        description: [
            `When Saheli came into being, it was a time when women from many Left parties, socialist formations and peoples’ movements were seeking political spaces that would be more responsive to women and women’s issues. We were talking about what affected us as women—our lives, bodies, labour, sexuality, the hold of religion and community, and the role of laws and the State in our lives. In such a context, our organisational autonomy from both, political parties and the State, was and remains, central. Likewise on funding, we maintain our distance from institutional agendas and support, both Indian and international. While members have ‘other’ jobs/ occupations to earn their living, we sustain our organisational work through individual donations, periodic fund raising and contributions gathered against publications. This autonomy reflects in our choice of work and strategy, as much as it informs our effort to work outside the framework of hierarchical structures, as a feminist collective, with all its limitations!`,
            `So, from the contradictions of collective functioning to accountability and 'housekeeping' anxieties within the office, you’ll find a range of organisational debates in the articles featured in this section.`
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
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [`Saheli has been working against various forms of violence against women since its inception. Raising our voice when dowry harassment and murders were whispered about as 'private family matters' even by the police. Speaking out against rape, moral policing and practices such as sex-selective abortions, 'Sati' (widow burning) and honour killings sanctioned by society and religion. Making linkages between iniquities in law and the spiral of domestic violence. Recognising coercive population policies as violence on women by the State and family. Working to visualise the violence inherent in sexual harassment at the workplace. Strategising for change against caste-based, communal, ethnic and homophobic violence. We also join hands with groups from all over the country to strengthen our voice against repression by the State and violence faced by women in areas of conflict. Our campaigns have been geared towards raising awareness, carrying out studies, generating discussions, creating and performing street plays, conducting self-defence workshops, handling individual cases of sexual harassment at the workplace as well as participating in efforts to reform and implement the law, in letter and in spirit. `],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['2'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '3',
        archiveImg: '../../../assets/archive/2.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['3'], 'categoryIdList'),
        title: 'Countering Communalism',
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [`Delhi 1984. Ayodhya, Kolkata, Surat 1992. Mumbai 1993. Gujarat 2002. Kandhamal 2008. These are just some of the unforgettable dates etched as fractures that have divided communities over the last two decades. While there is much more to communal politics than violent outbursts, these events and the times leading up to them have critically informed our understanding of their long term negative impact on our rights and freedoms as women. While our work in crisis intervention helped us develop a keen understanding of the control of religion and religious laws on women’s lives, sexuality and access to resources. Cases like Shah Bano illustrated how far women can be pushed back for the ‘sake of the community’. Further, situations of conflict, like the anti-Sikh riots in Delhi and the anti-Muslim genocide in Gujarat have compelled us to work at various levels. Organising relief and rehabilitation work, fighting to ensure State support for victims, demanding punishment for the guilty, working as part of democratic and secular platforms to create an environment of peace and harmony, being part of fact finding missions and efforts to develop new laws as well as developing a feminist critique of rising fundamentalisms… our work on communalism is facing new challenges every day.`],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['3'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '4',
        archiveImg: '../../../assets/archive/3.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['4'], 'categoryIdList'),
        title: 'Women\'s Health',
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [
            `Women and health has always been one of our key focus areas. Starting with action against the misuse of combination hormonal E.P. drugs, we have campaigned against sex determination and pre-selection, coercive population control policies and programmes, long acting hazardous contraceptives, new reproductive technologies, and more lately, unethical trials and promotion of HPV vaccines and the growing misuse of emergency contraceptives. We have struggled to make the State accountable, pressed for women’s right to information, demanded safer contraceptives and adequate health facilities, and redressal in cases of abuse or adverse effects. We have militated against government measures like the 2-child norm that penalise women for decisions over which they have no control. We have also critiqued legislations affecting women’s health including ethical guidelines in medical research, raised concerns about the power imbalances inherent in the research process, and attempted to build in safeguards for women participating in clinical trials.`,
            `Our activities, hence, ranged from exercising legal options, to lobbying, networking with groups in India and abroad, holding seminars, signature campaigns, exhibitions, performing street plays, and distributing leaflets, to storming meetings, marching in rallies, holding sit-ins and even posing as decoy patients! Through our publications and exhibitions, we have sought to expose the vested interests of the government, scientific establishment and the market, and enable women to make autonomous choices based on adequate information.`
        ],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['4'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '5',
        archiveImg: '../../../assets/archive/1.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['5'], 'categoryIdList'),
        title: 'Sexualities & Gender',
        decades: ['2000s', '2010s' ],
        description: [
            `Many of our campaigns over the years have been centred around issues of control of women’s sexuality by the family, community, social structures and the law. But it is since the late 1990s, that we have actively engaged with wider issues relating to sexuality, namely the rights of the LGBT (Lesbians, Gay, Bisexual, Transgender) community. The visible starting point was the furore generated by the screening of the film “Fire” and the protests, primarily of lesbian women, that raged around it. As part of the Campaign for Lesbian Rights (CALERI) in 1999 we have worked with others to visibilise the issue and generate public debates. And since its inception in 2004, we have also been part of Voices Against 377, a coalition of NGOs and progressive groups based in Delhi that also filed a key intervention petition in the case at the Delhi High Court that finally decriminalized adult consensual sexual relations by reading down Sec 377 of the IPC. `,
            `Marching at Delhi Queer Pride events, (2008 & 2009), facing the challenges thrown up by cases of homophobia and lesbian/gay suicides, we understand today more than ever that the struggles of the women’s movement and the queer movement are linked together, so is our liberation. We continue to work towards the day when sex workers’ work will be recognised as work, when dancers will be back in the bars of Mumbai, when hijras and kothis will live a life a dignity, and when killings in the name of honour will cease to happen.`
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
        decades: ['1990s', '2000s', '2010s' ],
        description: [
            `Over the last two decades, women's experiences and oppression as linked to religious and caste identity have become clearer than ever, as has evidence of how practices of class and caste respectability and privileges produce inequalities amongst women. Since the 1990s, Saheli has organised internal and open meetings to explore the various dimensions of how gender and caste intersect, to share our experiences and address the challenges; to understand the relationship between the caste-based movements, caste-based women’s groups and the women’s movement in general; and to strategise ways of strengthening the interconnections, with a special focus on the role that the autonomous women’s movement needs to play at this particular political juncture.`,
            `From deliberations on the challenges thrown up by the brutality in Khairlanji, to organising the session on Caste-based Identities, Discriminations and Struggles along with SAMA and CADAM at the Conference of Women’s Movements in Kolkata 2006, we have focussed on overarching issues of the patriarchal control of caste norms and boundaries on all women, the challenges this poses to women’s rights and struggles. In 2008, we published Talking marriage, caste and community: Voices from within, the outcome of a study on the intersection between the institutions of marriage and community. Subsequently, we have evolved a play titled, Kaun Jaat that uses on monologues to foreground women’s experiences of community control and trigger discussions on the issue. Of late, we have also been engaging with the role of caste panchayats as they control the sexuality and freedoms of women.`
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
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [
            `Saheli has always had a strong critique of the coercive and repressive role of the State, be it in the name of population control, development, or the maintenance of ‘law and order’. Among the many campaigns we have been actively involved with have been for the repeal of black laws like the Armed Forces Special Powers Act (AFSPA), Prevention Of Terrorism Act, Unlawful Activities (Prevention of) Act, and so on. As fact-finding teams on impact of militarisation, and in vibrant campaigns against all state violence including disappearances, arbitrary arrests, tortures and encounter killings as well as the use sexual violence on women, we have joined hands with other women’s groups, as well as students, human rights’, democratic rights ad other peoples’ organisations. More recently, our campaigns against state repression have grown beyond the North East and Kashmir to Chhattisgarh, Madhya Pradesh, Jharkhand, Orissa, West Bengal and Andhra Pradesh which are witnessing a dramatic increase in repression by police and security forces. We are today also a part of a nationwide alliance called “Women against Sexual Violence and State Repression” which is working to strengthen effort against such terror by the state.`
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
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [
            `New technologies or new contraceptives have, over the years, posed dangers to women’s health. The health hazards are either overlooked or not anticipated by the agencies which push for the technologies. Saheli along with other women’s and health groups has been involved in putting pressure on the government of India to introduce legal processes which will help in reducing the risks and at times, ban the use of technologies completely. Our efforts in the context of reforms in legal processes involving health-related technologies are reflected in our writings.`
        ],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['8'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '9',
        archiveImg: '',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['9'], 'categoryIdList'),
        title: 'Other Debates & Concerns',
        decades: ['1990s', '2000s', '2010s' ],
        description: [
            `Saheli’s work in crisis intervention brought to the fore many questions on the impact of religion on women, the discriminations inherent in all personal laws, the reality behind the secular state and the relevance of secularism and secular laws in the lives of women. In matters of divorce, guardianship, property, inheritance and other rights within the family, the rights of women were abridged by personal laws in myriad ways. Yet working towards an egalitarian civil code was not a straight-forward task in times marked by rising right wing Hindu revivalism, and growing majority/minority tensions. With debates and discussions, leaflets and the performance of a street play titled, Farq, we reached out to visibilise the issue and challenge the State and conservatives alike. But the Shah Bano controversy, the right-wing demand for a uniform civil code based on the Hindu law, the demolition of the Babri Masjid, the rise of communal parties - all brought new challenges and made it near impossible to further the debates on women’s rights of women with respect to personal laws. A situation furthered worsened by the State converting what is essentially an issue of equality for women into an issue of religious freedom and identity. Over the years, our engagement has been with both, efforts in the movement to reform personal laws as well as the continuing struggle for egalitarian rights for all women.`
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
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [
            `Firm in our conviction that our struggles are intrinsically intertwined and that our liberation lies in the liberation of all, we work jointly with many groups to push the limits and bring on a wave of change. We find our solidarity instinctively in tune with efforts that have traditionally been ignored by the Left, like questioning the development paradigm, or supporting the struggles of LGBT groups and sex workers. Based on our location in the capital city, we endeavour to support the struggles against religious fundamentalism, caste violence, war and militarisation, nuclear weapons, displacement, factory closures, basti demolitions, homophobic attacks, repression of people’s movements and many others in our own small way. This has entailed working in joint formations with NGOs, peoples’ organisations or formations of the organised Left, and often a combination of them all. Yet on occasion, we have found ourselves isolated in articulating our politics.`
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
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [
            `The National Conferences are part of a long and vibrant history of the women’s movement in India, particularly the autonomous women’s movement. The first national conference took place in Mumbai in 1980 at the height of the Anti Rape Campaign. Since then there has been no looking back, and at periodic intervals (also known as recovery periods), several other conferences have been organised in different parts of teh country - Mumbai (1985), Patna (1987), Calicut (1990), Tirupati (1994), Ranchi (1997), Kolkata (2006). Each, an opportunity for debates, discussions and sharing on the issues of the times. Each, a time of moving forward as a movement!`,
            `Saheli has been an intrinsic part of the planning process of all these conferences. The core strength of these conferences being its vision to brings together women from various streams of the autonomous women’s movements – i.e. women’s groups not aligned to the government, political parties, underground groups or funding agencies - on a range of issues and concerns. Over the years these conferences have evolved as a space for expression of our collective ideas, politics and struggles. Needless to say that its also a space of feminist fun, laughter and wit!`
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
        decades: ['1980s', '2000s', '2010s' ],
        description: [
            `Every year in July, an item emerges the agenda of our Wednesday meetings: how would we like to celebrate the beginnings of Saheli this year? August 9, 1981 was the beginning of a journey to raise our voice against women’s oppression, struggling for our rights and moving towards a world free of violence and injustice. To date, this day remains a powerful reminder of the challenges that lie ahead in continuing struggling against different forms of patriarchies especially for a small, non-funded autonomous collective like us.`,
            `Over the years, we have marked the day by organising various kinds of events: Discussions on the Uniform Civil Code, the Saathin’s struggles, the Rise of Right Wing Politics and Impact on Women, Sex Work Debates, Trends and Dilemmas in the Women’s Movement, to name a few. Sometimes we have used the occasion to reach out to college students, or simply got together to celebrate by white-washing the office with friends and supporters, or even launch this website, as we are doing this year (2010). There are no rules of how we can or cannot mark the day. The only objective is to energise our struggles, and affirm our togetherness with co-travellers on this journey… because there are so many reasons to go on.`
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
        decades: [],
        description: [
            `Archive intro text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
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
        decades: [],
        description: [
            `Publications intro text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
        ],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['14'], 'categoryIdList'),
        isOpen: false,
        isCategory: false,
        archiveList: publicationsCategory
    }
]

// Populate archiveList for 'Archives' after categories is fully defined
const archiveCategory = categories.find(category => category.id === '13');
if (archiveCategory) {
    const excludedFromArchives = ['13', '8', '9', '14']
    archiveCategory.archiveList = categories.filter(category => !excludedFromArchives.includes(category.id)).map(category => ({
        id: category.id,
        title: category.title,
        archiveImg: category.archiveImg
    }));
}
