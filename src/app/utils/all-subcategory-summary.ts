import { articlesSummary } from "./all-articles-summary";
import { subCategory } from "./data-model";
import { filterByArrayKeyAndIds } from "./utils";

export const subcategoriesSummary: subCategory[] = [
    {
        id: 'Subcategory1',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory1'], 'subCategoryIdList'),
        categoryIdList: ['2', '3'],
        description: ['If the anti-Sikh riots of 1984 brought us face to face with how violence can be systematically targeted against a community with the complicity of the State, our own work for peace and justice, and running a relief camp revealed the deep impact of such violence on women’s lives. Years later, the brutality unleashed on women in Mumbai and Gujarat compelled us to foreground the centrality of sexual violence in such conflicts. Another serious concern has been the militant mobilisation of women’s right wing politics. These increasingly communalised times are also resulting in a rise in fundamentalism within communities and a tightening of control on women in the name of ‘honour’. In a country born in the throes of communal violence and continuing to live with ruptures based on religious/caste/ethnic identity, the struggles against communalism and communal violence have always been fought on a wide platform. And so it is that during the anti-Sikh violence, the 1992/93 violence following the demolition of the Babri Masjid, the Seelampur riots of 1993, the Gujarat carnage in 2002 and the anti-Christian violence in Kandhamal in 2008, we have responded jointly with other like-minded groups and individuals. As part of peace initiatives, fact-finding missions, relief efforts, and endeavours to evolve laws can comprehensively address the specificity of sexual violence in situations of conflict, Saheli’s work against communal violence goes on.'],
        isSubcategory: true,
        title: 'Communal Violence'
    },
    {
        id: 'Subcategory2',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory2'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: ['Saheli was born out of a vibrant anti-dowry campaign of the women’s movement against women being murdered or harassed for dowry. Aiming to save the lives of these young women, we started counselling them in legal matters and helping them rebuild their lives. Women and girls coming to us widened our understanding and soon it was clear that the violence they were subject to was just not dowry-related but rather that emotional torture, economic deprivation and discrimination was meted out by husbands, in-laws and parents to perpetuate the subordination of women within the family. Our work with battered women brought us up against patriarchal forces in various forms: unsupportive families and neighbours, disbelieving police at local thanas, unscrupulous lawyers, and unsympathetic magistrates. Consequently, we ran a shelter for women for a few years and campaigned for the enactment of new laws as well as amendments to the existing laws. Though we did not continue as a crisis intervention centre after 1990s, our linkage with the issue has remained alive through our work at several levels including work on the creation and implementation of the Protection of Women from Domestic Violence Act 2005.'],
        isSubcategory: true,
        title: 'Domestic Violence'
    },
    {
        id: 'Subcategory3',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory3'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: ['Like many other autonomous women’s groups in the country, our work on the issue of rape emerged out of the deeply distressing court judgments ministered in the cases of Mathura, Rameezabi and Maya Tyagi. While nationwide agitations led to significant changes in the Criminal Procedure Code and Indian Penal Code, shortcomings in the law and pitfalls in its implementation have continued to pose challenges. Helping rape victims gave us a finer understanding of the issues which subvert the process of securing justice. It also became increasingly self evident that the law must go beyond traditional definitions of penile-vaginal ‘rape’ to a broader understanding of ‘sexual assault’. Saheli was part of the Committee constituted by National Commission of Women in 1990s that evolved significant changes in the rape law. Today, along with other women’s groups, queer groups and child rights’ groups, we are involved in a process of evolving far reaching modifications in the Criminal Law Amendment Bill proposed by the government to address issues hitherto inadequately addressed by the law: eg. Mass sexual assault in situations of conflict and/or mass/ethnic/communal violence, and sexual assault on persons other than women such as hijras, transgender people, men and so on. Beyond our work at the policy level, street protests and reaching out on the issue have been important, including a city based campaign “ Stop Rape! Speak Up, Delhi!”'],
        isSubcategory: true,
        title: 'Rape/Sexual Assault'
    },
    {
        id: 'Subcategory4',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory4'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: ['On September 4, 1987, a young widow called Roop Kanwar was burnt on her husband’s funeral pyre in village Deorala, Rajasthan. The incident triggered nationwide protests against the regressive practice and its subsequent glorification. We questioned the ideology of Sati, as well the problematic role of the police, politicians, ministers and community leaders. We witnessed the linkages between state and religious forces becoming increasingly consolidated and legitimising anti-woman practices in the name of tradition. Along with other women’s groups and democratic forces we raised issues of religion and religious/community identity in the public arena for the first time. Rallies, demonstrations, and a signature campaign for stringent action against the culprits, and effective legislation against the glorification of Sati followed. Till finally the Commission of Sati (Prevention) Act was passed in 1988. In subsequent years, our struggles have focussed on challenging the continued glorification of the practice, protesting the acquittal of those guilty of Roop Kanwar’s death, exposing the double standards of the political establishment and responding to other cases of Sati that continued to occur, with fact finding missions and protest actions. Charan Shah, Mahoba, U.P. 1999. Ram Kumari, Village Bahundari, U.P. 2005. Janaki Rani, Tulsipur, M.P. 2006. Each new case of Sati is a grim reminder that its ideology is alive and still requires our vigilance.'],
        isSubcategory: true,
        title: 'Sati',
    },
    {
        id: 'Subcategory5',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory5'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus, quam non rhoncus tincidunt, nulla neque fringilla justo, quis malesuada nunc sapien eget libero. Quisque malesuada sit amet urna non iaculis. Aenean rhoncus purus et sapien gravida, et faucibus magna venenatis. Phasellus aliquam elit nec magna auctor, sed rutrum risus ultricies. Quisque aliquam eleifend dictum. Curabitur faucibus tellus sed ligula ultrices, at suscipit nunc auctor. Pellentesque consequat ex quis dui luctus, nec ornare metus pretium. Sed tincidunt dictum neque, et ultrices dui pharetra nec. Etiam gravida ultrices sollicitudin. Pellentesque semper elit vel risus facilisis, sed facilisis lectus venenatis. Nulla volutpat dolor eu lorem tempor, iaculis varius est ultrices. Phasellus placerat, mauris at laoreet consequat, nulla massa placerat magna, in fringilla lectus nisl a sem. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            'Aliquam sit amet magna nunc. Nunc id ipsum augue. Duis nunc erat, bibendum sit amet commodo vitae, luctus placerat nibh. Nulla sed tortor tincidunt, viverra arcu nec, elementum tellus. Donec posuere, quam eget dictum rhoncus, urna augue iaculis justo, finibus finibus mi dui at est. Aenean non congue libero. Mauris congue purus vitae imperdiet porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie, erat in posuere laoreet, ipsum turpis euismod dolor, eu dapibus metus arcu vel diam. Fusce congue magna nisl, ac maximus ante tristique at. Sed venenatis scelerisque odio, et vestibulum magna suscipit at. Aliquam ornare vel orci eget viverra. Quisque vitae vehicula leo. Vivamus tincidunt erat nec ultricies varius. Pellentesque rutrum ut dui at ultrices.'
        ],
        isSubcategory: true,
        title: 'Self Defence',
    },
    {
        id: 'Subcategory6',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory6'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: [
            'Sexual harassment as for long been trivialised as ‘eve-teasing’, but in 1997, in response to a case filed by women\'s groups, the Supreme Court of India recognised the specificities of sexual harassment at the workplace and issued guidelines to pave the way for judicial remedy. More than a decade later, and despite the continued efforts of the women\'s movement, women who complain still have to deal with biased and arbitrary complaints committees, false cases foisted on them and loss of jobs, not to mention severe emotional and mental trauma. ',
            'To understand the enormity and complexity of the issue, Saheli conducted a survey with working women in 1998, and developed a play titled Mahaul Badalna Hai in 1999-2000. Performances of the play have led to vibrant discussions and workshops with varied constituencies - students, domestic workers, guards, and so on over the years.',
            'At the same time, we continue to handle individual cases and are active on complaints committees of government and non-government institutions. Even as we grapple with the nuances of drafting a civil law to deal with the issue, we campaign to make society recognise sexual harassment as a major hurdle to women\'s right to a safe and conducive working environment.'
        ],
        isSubcategory: true,
        title: 'Sexual Harrasment',
    },
    {
        id: 'Subcategory7',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory7'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: ['Saheli has always had a strong critique of the coercive and repressive role of the State, be it in the name of population control, development, or the maintenance of ‘law and order’. Among the many campaigns we have been actively involved with have been for the repeal of black laws like the Armed Forces Special Powers Act (AFSPA), Prevention Of Terrorism Act, Unlawful Activities (Prevention of) Act, and so on. As fact-finding teams on impact of militarisation, and in vibrant campaigns against all state violence including disappearances, arbitrary arrests, tortures and encounter killings as well as the use sexual violence on women, we have joined hands with other women’s groups, as well as students, human rights’, democratic rights ad other peoples’ organisations. More recently, our campaigns against state repression have grown beyond the North East and Kashmir to Chhattisgarh, Madhya Pradesh, Jharkhand, Orissa, West Bengal and Andhra Pradesh which are witnessing a dramatic increase in repression by police and security forces. We are today also a part of a nationwide alliance called “Women against Sexual Violence and State Repression” which is working to strengthen effort against such terror by the state.'],
        isSubcategory: true,
        title: 'State Violence',
    },
    {
        id: 'Subcategory8',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory8'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus, quam non rhoncus tincidunt, nulla neque fringilla justo, quis malesuada nunc sapien eget libero. Quisque malesuada sit amet urna non iaculis. Aenean rhoncus purus et sapien gravida, et faucibus magna venenatis. Phasellus aliquam elit nec magna auctor, sed rutrum risus ultricies. Quisque aliquam eleifend dictum. Curabitur faucibus tellus sed ligula ultrices, at suscipit nunc auctor. Pellentesque consequat ex quis dui luctus, nec ornare metus pretium. Sed tincidunt dictum neque, et ultrices dui pharetra nec. Etiam gravida ultrices sollicitudin. Pellentesque semper elit vel risus facilisis, sed facilisis lectus venenatis. Nulla volutpat dolor eu lorem tempor, iaculis varius est ultrices. Phasellus placerat, mauris at laoreet consequat, nulla massa placerat magna, in fringilla lectus nisl a sem. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            'Aliquam sit amet magna nunc. Nunc id ipsum augue. Duis nunc erat, bibendum sit amet commodo vitae, luctus placerat nibh. Nulla sed tortor tincidunt, viverra arcu nec, elementum tellus. Donec posuere, quam eget dictum rhoncus, urna augue iaculis justo, finibus finibus mi dui at est. Aenean non congue libero. Mauris congue purus vitae imperdiet porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie, erat in posuere laoreet, ipsum turpis euismod dolor, eu dapibus metus arcu vel diam. Fusce congue magna nisl, ac maximus ante tristique at. Sed venenatis scelerisque odio, et vestibulum magna suscipit at. Aliquam ornare vel orci eget viverra. Quisque vitae vehicula leo. Vivamus tincidunt erat nec ultricies varius. Pellentesque rutrum ut dui at ultrices.'
        ],
        isSubcategory: true,
        title: 'Campaigns',
    },
    {
        id: 'Subcategory9',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory9'], 'subCategoryIdList'),
        categoryIdList: ['3'],
        description: ['Saheli’s work in crisis intervention brought to the fore many questions on the impact of religion on women, the discriminations inherent in all personal laws, the reality behind the secular state and the relevance of secularism and secular laws in the lives of women. In matters of divorce, guardianship, property, inheritance and other rights within the family, the rights of women were abridged by personal laws in myriad ways. Yet working towards an egalitarian civil code was not a straight-forward task in times marked by rising right wing Hindu revivalism, and growing majority/minority tensions. With debates and discussions, leaflets and the performance of a street play titled, Farq, we reached out to visibilise the issue and challenge the State and conservatives alike. But the Shah Bano controversy, the right-wing demand for a uniform civil code based on the Hindu law, the demolition of the Babri Masjid, the rise of communal parties - all brought new challenges and made it near impossible to further the debates on women’s rights of women with respect to personal laws. A situation furthered worsened by the State converting what is essentially an issue of equality for women into an issue of religious freedom and identity. Over the years, our engagement has been with both, efforts in the movement to reform personal laws as well as the continuing struggle for egalitarian rights for all women.'],
        isSubcategory: true,
        title: 'Personal law Debates',
    },
    {
        id: 'Subcategory10',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory10'], 'subCategoryIdList'),
        categoryIdList: ['3'],
        description: ['The rising communal tides of the last two decades has brought things to a very fragile pass today, especially for women. On the one hand, is the militant mobilisation of the right wing in the name of religion, culture, tradition that is increasing its control of women, both within and across communities. With aggressive moral policing, assertion of dress codes, imposition of regressive traditions, the increased ritualisation of everyday life, the restrictions on women’s sexuality, mobility and freedoms are actually on the rise today. On the other hand, the growing power and violence exerted by caste and community panchayats is having a greater social impact today than ever. While combating such communal and regressive forces, our attempt has been to highlight the criminality and un-Constitutionality of such impositions on the lives of women and men. In cases such as that of Gudiya, Imrana, Babli and others, we have come together with other women’s groups to protest the collusion of religious and caste/community forces with regressive voices in politics, society, the government and the media.'],
        isSubcategory: true,
        title: 'Rising Fundamentalisms',
    },
    {
        id: 'Subcategory11',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory11'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: [
            'Population control has been central to government policies right from the time of India’s independence. National and international policy makers used the bogey of overpopulation to explain many social ills — poverty, environmental degradation, high maternal mortality, etc. Consequently, the National Family Planning Programme aggressively sought to forcibly sterilise and/or ‘give incentives’ for people to use a plethora of contraceptives often unsuited for their health status. Despite lip service paid to women’s health and empowerment over the years and even at the International Conference on Population and Development in 1994, little has changed. In fact since the post structural adjustment of the nineties, population control has become a written pre-conditionality for India.',
            'From the 1980s, Saheli worked to bring together of a broad coalition of feminist and democratic rights groups demanding an end to such coercion. We have constantly highlighted that the crux of underdevelopment lies not in the numbers of people but rather, in the social inequities that prevail: unequal access to resources, education, water, health, food to name a few. It has been an uphill task to challenge the underpinnings of the population control theory and to highlight women’s concerns and problems. Our stand has been to oppose population policy as it has nothing but coercion in store for women and it applies as much to feminist population policy.'
        ],
        isSubcategory: true,
        title: 'Population Control',
    },
    {
        id: 'Subcategory12',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory12'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: [
            'For many decades it has been known that fall in birth rates accompanies rising standards of living, fall in infant mortality rate and rise in women’s education levels. In other words, population adjusts itself to the circumstances under which people live. When left to fend for themselves people are forced to seek personal solutions to problems such as old age security or need for working hands through having more children and even sons.',
            'Yet the formula adopted by the population control establishment is quite at variance. To begin with, it was assumed that there was an unstated demand for contraception and if this demand was met it would result in the lowering of birth rates. Inundation thus became the strategy. This failed. Rather than learning from this experience other strategies were tried which were akin to business management strategies-targets, incentives, disincentives, media promotion: but all dependent on solving social problems with contraceptive technology.',
            'The preoccupation with high birth rates favoured the adoption of technology which had a high theoretical effectiveness. For example, diaphragms and spermicides which could be adopted even with a low level of service delivery were discarded in favour of hormonal pills which required extensive screening as well as continuing follow up. Pills found favour with pharmaceutical companies because of profits which could be generated with a consumable product and with the population control establishment because of a theoretically high level of effectiveness. Similarly, intra uterine devices (IUDs) were adopted wholesale for family planning programmes. Women, however, rejected these highly ‘effective’ methods which compromised their health and fertility. In the case of pills, inadequate monitoring and supply logistics compounded the problems. Yet there was no attempt to improve health services. Rather the conclusion drawn had a distinct race, class and patriarchal bias. Population planners concluded that poor women from the Third World could not be trusted to be active agents in controlling their own fertility because practice showed them to be poor acceptors of contraceptives.'
        ],
        innerCategories: [], // Initialize as empty, will be populated later
        isSubcategory: true,
        title: 'Hazardous Contraceptives', // This subcategory has inner categories
    },
    {
        id: 'Subcategory13',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory13'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: [
            'What is in the best interests of women can get easily obfuscated when conservative social norms, medical technology, commercial interests and population control are thrown into the same cauldron. Such was the case with technologies such as amniocentesis and ultrasound, that were useful in monitoring fetal development and detecting congenital abnormalities but could also detect the sex of the foetus. This latter capability led to a flourishing industry where thousands of female foetuses were aborted, threatening to further skew the already adverse female to male sex ratio.',
            'Amid a raging controversy on ‘women’s best interests’, we campaigned for a national legislation to regulate the use and misuse of these technologies which was finally passed in 1994. Today, the challenge lies in putting political will behind the bill and ensuring implementation of the law. But in the context of new reproductive technologies and surrogacy, etc, the challenges are on the rise.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Sex Selection',
    },
    {
        id: 'Subcategory14',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory14'], 'subCategoryIdList'),
        categoryIdList: ['4'],
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus, quam non rhoncus tincidunt, nulla neque fringilla justo, quis malesuada nunc sapien eget libero. Quisque malesuada sit amet urna non iaculis. Aenean rhoncus purus et sapien gravida, et faucibus magna venenatis. Phasellus aliquam elit nec magna auctor, sed rutrum risus ultricies. Quisque aliquam eleifend dictum. Curabitur faucibus tellus sed ligula ultrices, at suscipit nunc auctor. Pellentesque consequat ex quis dui luctus, nec ornare metus pretium. Sed tincidunt dictum neque, et ultrices dui pharetra nec. Etiam gravida ultrices sollicitudin. Pellentesque semper elit vel risus facilisis, sed facilisis lectus venenatis. Nulla volutpat dolor eu lorem tempor, iaculis varius est ultrices. Phasellus placerat, mauris at laoreet consequat, nulla massa placerat magna, in fringilla lectus nisl a sem. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            'Aliquam sit amet magna nunc. Nunc id ipsum augue. Duis nunc erat, bibendum sit amet commodo vitae, luctus placerat nibh. Nulla sed tortor tincidunt, viverra arcu nec, elementum tellus. Donec posuere, quam eget dictum rhoncus, urna augue iaculis justo, finibus finibus mi dui at est. Aenean non congue libero. Mauris congue purus vitae imperdiet porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie, erat in posuere laoreet, ipsum turpis euismod dolor, eu dapibus metus arcu vel diam. Fusce congue magna nisl, ac maximus ante tristique at. Sed venenatis scelerisque odio, et vestibulum magna suscipit at. Aliquam ornare vel orci eget viverra. Quisque vitae vehicula leo. Vivamus tincidunt erat nec ultricies varius. Pellentesque rutrum ut dui at ultrices.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Emerging Challenges',
    },
    {
        id: 'Subcategory15',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory15'], 'subCategoryIdList'),
        categoryIdList: ['8'],
        description: [
            'Delhi 1984. Ayodhya, Kolkata, Surat 1992. Mumbai 1993. Gujarat 2002. Kandhamal 2008. These are just some of the unforgettable dates etched as fractures that have divided communities over the last two decades. While there is much more to communal politics than violent outbursts, these events and the times leading up to them have critically informed our understanding of their long term negative impact on our rights and freedoms as women. While our work in crisis intervention helped us develop a keen understanding of the control of religion and religious laws on women’s lives, sexuality and access to resources.',
            'Cases like Shah Bano illustrated how far women can be pushed back for the ‘sake of the community’. Further, situations of conflict, like the anti-Sikh riots in Delhi and the anti-Muslim genocide in Gujarat have compelled us to work at various levels. Organising relief and rehabilitation work, fighting to ensure State support for victims, demanding punishment for the guilty, working as part of democratic and secular platforms to create an environment of peace and harmony, being part of fact finding missions and efforts to develop new laws as well as developing a feminist critique of rising fundamentalisms… our work on communalism is facing new challenges every day.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Communalism',
    },
    {
        id: 'Subcategory16',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory16'], 'subCategoryIdList'),
        categoryIdList: ['8'],
        description: [
            'Women and health has always been one of our key focus areas. Starting with action against the misuse of combination hormonal E.P. drugs, we have campaigned against sex determination and pre-selection, coercive population control policies and programmes, long acting hazardous contraceptives, new reproductive technologies, and more lately, unethical trials and promotion of HPV vaccines and the growing misuse of emergency contraceptives. We have struggled to make the State accountable, pressed for women’s right to information, demanded safer contraceptives and adequate health facilities, and redressal in cases of abuse or adverse effects. We have militated against government measures like the 2-child norm that penalise women for decisions over which they have no control. We have also critiqued legislations affecting women’s health including ethical guidelines in medical research, raised concerns about the power imbalances inherent in the research process, and attempted to build in safeguards for women participating in clinical trials.',
            'Our activities, hence, ranged from exercising legal options, to lobbying, networking with groups in India and abroad, holding seminars, signature campaigns, exhibitions, performing street plays, and distributing leaflets, to storming meetings, marching in rallies, holding sit-ins and even posing as decoy patients! Through our publications and exhibitions, we have sought to expose the vested interests of the government, scientific establishment and the market, and enable women to make autonomous choices based on adequate information.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Health',
    },
    {
        id: 'Subcategory17',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory17'], 'subCategoryIdList'),
        categoryIdList: ['8'],
        description: [
            'Many of our campaigns over the years have been centred around issues of control of women’s sexuality by the family, community, social structures and the law. But it is since the late 1990s, that we have actively engaged with wider issues relating to sexuality, namely the rights of the LGBT (Lesbians, Gay, Bisexual, Transgender) community. The visible starting point was the furore generated by the screening of the film “Fire” and the protests, primarily of lesbian women, that raged around it. As part of the Campaign for Lesbian Rights (CALERI) in 1999 we have worked with others to visibilise the issue and generate public debates. And since its inception in 2004, we have also been part of Voices Against 377, a coalition of NGOs and progressive groups based in Delhi that also filed a key intervention petition in the case at the Delhi High Court that finally decriminalized adult consensual sexual relations by reading down Sec 377 of the IPC.',
            'Marching at Delhi Queer Pride events, (2008 & 2009), facing the challenges thrown up by cases of homophobia and lesbian/gay suicides, we understand today more than ever that the struggles of the women’s movement and the queer movement are linked together, so is our liberation. We continue to work towards the day when sex workers’ work will be recognised as work, when dancers will be back in the bars of Mumbai, when hijras and kothis will live a life a dignity, and when killings in the name of honour will cease to happen.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Sexuality',
    },
    {
        id: 'Subcategory18',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory18'], 'subCategoryIdList'),
        categoryIdList: ['8'],
        description: [
            'Saheli has been working against various forms of violence against women since its inception. Raising our voice when dowry harassment and murders were whispered about as \'private family matters\' even by the police. Speaking out against rape, moral policing and practices such as sex-selective abortions, \'Sati\' (widow burning) and honour killings sanctioned by society and religion. Making linkages between iniquities in law and the spiral of domestic violence. Recognising coercive population policies as violence on women by the State and family. Working to visualise the violence inherent in sexual harassment at the workplace. Strategising for change against caste-based, communal, ethnic and homophobic violence. We also join hands with groups from all over the country to strengthen our voice against repression by the State and violence faced by women in areas of conflict. Our campaigns have been geared towards raising awareness, carrying out studies, generating discussions, creating and performing street plays, conducting self-defence workshops, handling individual cases of sexual harassment at the workplace as well as participating in efforts to reform and implement the law, in letter and in spirit.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Violence',
    },
    {
        id: 'Subcategory19',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory19'], 'subCategoryIdList'),
        categoryIdList: ['10'],
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus, quam non rhoncus tincidunt, nulla neque fringilla justo, quis malesuada nunc sapien eget libero. Quisque malesuada sit amet urna non iaculis. Aenean rhoncus purus et sapien gravida, et faucibus magna venenatis. Phasellus aliquam elit nec magna auctor, sed rutrum risus ultricies. Quisque aliquam eleifend dictum. Curabitur faucibus tellus sed ligula ultrices, at suscipit nunc auctor. Pellentesque consequat ex quis dui luctus, nec ornare metus pretium. Sed tincidunt dictum neque, et ultrices dui pharetra nec. Etiam gravida ultrices sollicitudin. Pellentesque semper elit vel risus facilisis, sed facilisis lectus venenatis. Nulla volutpat dolor eu lorem tempor, iaculis varius est ultrices. Phasellus placerat, mauris at laoreet consequat, nulla massa placerat magna, in fringilla lectus nisl a sem. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            'Aliquam sit amet magna nunc. Nunc id ipsum augue. Duis nunc erat, bibendum sit amet commodo vitae, luctus placerat nibh. Nulla sed tortor tincidunt, viverra arcu nec, elementum tellus. Donec posuere, quam eget dictum rhoncus, urna augue iaculis justo, finibus finibus mi dui at est. Aenean non congue libero. Mauris congue purus vitae imperdiet porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie, erat in posuere laoreet, ipsum turpis euismod dolor, eu dapibus metus arcu vel diam. Fusce congue magna nisl, ac maximus ante tristique at. Sed venenatis scelerisque odio, et vestibulum magna suscipit at. Aliquam ornare vel orci eget viverra. Quisque vitae vehicula leo. Vivamus tincidunt erat nec ultricies varius. Pellentesque rutrum ut dui at ultrices.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Issues',
    },
    {
        id: 'Subcategory20',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory20'], 'subCategoryIdList'),
        categoryIdList: ['10'],
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus, quam non rhoncus tincidunt, nulla neque fringilla justo, quis malesuada nunc sapien eget libero. Quisque malesuada sit amet urna non iaculis. Aenean rhoncus purus et sapien gravida, et faucibus magna venenatis. Phasellus aliquam elit nec magna auctor, sed rutrum risus ultricies. Quisque aliquam eleifend dictum. Curabitur faucibus tellus sed ligula ultrices, at suscipit nunc auctor. Pellentesque consequat ex quis dui luctus, nec ornare metus pretium. Sed tincidunt dictum neque, et ultrices dui pharetra nec. Etiam gravida ultrices sollicitudin. Pellentesque semper elit vel risus facilisis, sed facilisis lectus venenatis. Nulla volutpat dolor eu lorem tempor, iaculis varius est ultrices. Phasellus placerat, mauris at laoreet consequat, nulla massa placerat magna, in fringilla lectus nisl a sem. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            'Aliquam sit amet magna nunc. Nunc id ipsum augue. Duis nunc erat, bibendum sit amet commodo vitae, luctus placerat nibh. Nulla sed tortor tincidunt, viverra arcu nec, elementum tellus. Donec posuere, quam eget dictum rhoncus, urna augue iaculis justo, finibus finibus mi dui at est. Aenean non congue libero. Mauris congue purus vitae imperdiet porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie, erat in posuere laoreet, ipsum turpis euismod dolor, eu dapibus metus arcu vel diam. Fusce congue magna nisl, ac maximus ante tristique at. Sed venenatis scelerisque odio, et vestibulum magna suscipit at. Aliquam ornare vel orci eget viverra. Quisque vitae vehicula leo. Vivamus tincidunt erat nec ultricies varius. Pellentesque rutrum ut dui at ultrices.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Comrades',
    },
    {
        id: 'Subcategory21',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory21'], 'subCategoryIdList'),
        categoryIdList: ['11'],
        description: [
            'The National Conferences are part of a long and vibrant history of the women’s movement in India, particularly the autonomous women’s movement. The first national conference took place in Mumbai in 1980 at the height of the Anti Rape Campaign. Since then there has been no looking back, and at periodic intervals (also known as recovery periods), several other conferences have been organised in different parts of teh country - Mumbai (1985), Patna (1987), Calicut (1990), Tirupati (1994), Ranchi (1997), Kolkata (2006). Each, an opportunity for debates, discussions and sharing on the issues of the times. Each, a time of moving forward as a movement!',
            'Saheli has been an intrinsic part of the planning process of all these conferences. The core strength of these conferences being its vision to brings together women from various streams of the autonomous women’s movements – i.e. women’s groups not aligned to the government, political parties, underground groups or funding agencies - on a range of issues and concerns. Over the years these conferences have evolved as a space for expression of our collective ideas, politics and struggles. Needless to say that its also a space of feminist fun, laughter and wit!'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Autonomous Women\'s Conferences',
    },
    {
        id: 'Subcategory22',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory22'], 'subCategoryIdList'),
        categoryIdList: ['11'],
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus, quam non rhoncus tincidunt, nulla neque fringilla justo, quis malesuada nunc sapien eget libero. Quisque malesuada sit amet urna non iaculis. Aenean rhoncus purus et sapien gravida, et faucibus magna venenatis. Phasellus aliquam elit nec magna auctor, sed rutrum risus ultricies. Quisque aliquam eleifend dictum. Curabitur faucibus tellus sed ligula ultrices, at suscipit nunc auctor. Pellentesque consequat ex quis dui luctus, nec ornare metus pretium. Sed tincidunt dictum neque, et ultrices dui pharetra nec. Etiam gravida ultrices sollicitudin. Pellentesque semper elit vel risus facilisis, sed facilisis lectus venenatis. Nulla volutpat dolor eu lorem tempor, iaculis varius est ultrices. Phasellus placerat, mauris at laoreet consequat, nulla massa placerat magna, in fringilla lectus nisl a sem. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            'Aliquam sit amet magna nunc. Nunc id ipsum augue. Duis nunc erat, bibendum sit amet commodo vitae, luctus placerat nibh. Nulla sed tortor tincidunt, viverra arcu nec, elementum tellus. Donec posuere, quam eget dictum rhoncus, urna augue iaculis justo, finibus finibus mi dui at est. Aenean non congue libero. Mauris congue purus vitae imperdiet porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie, erat in posuere laoreet, ipsum turpis euismod dolor, eu dapibus metus arcu vel diam. Fusce congue magna nisl, ac maximus ante tristique at. Sed venenatis scelerisque odio, et vestibulum magna suscipit at. Aliquam ornare vel orci eget viverra. Quisque vitae vehicula leo. Vivamus tincidunt erat nec ultricies varius. Pellentesque rutrum ut dui at ultrices.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Other Conferences',
    },
    {
        id: 'Subcategory23',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory23'], 'subCategoryIdList'),
        categoryIdList: ['12'],
        description: [
            'It’s a day that marks the social, political and economic struggles of the women’s movement and an occasion to remember that the place of women in society is far from the feminist ideal, our collective vision of life without fear, oppression and violence. Over the years, we have come together with other women’s groups and organisations, including those affiliated with the Left parties, student groups and others to celebrate our togetherness, raise issues and make demands of the State and society on the occasion of International Women’s Day. ',
            'Yet there have also been times when we have decided to go solo with programmes of our own due to political differences with the joint platform. e.g. in 2000 when the Left party affiliated groups objected to presence of Campaign for Lesbian Rights (CALERI) with its banner or even the word “lesbian” in the leaflet for the occasion, or in 2008 when despite all the evidence to the contrary these groups denied the horrors of what was happening in Nandigram. Yet, despite the ups and downs, the endeavour of most groups has been to find a common voice, or at least to move forward together on issue-based alliances.',
            'In fact, 2010 saw very large number of women’s groups coming together to celebrate 100 years of the International Women\'s Day. After all, which of us can resist the energy, enthusiasm, songs and slogans or indeed, the hope that one day, we will together cause the downfall of patriarchy… and the rise of an even more compassionate, meaningful sisterhood!'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'International Women\'s Day',
    },
    {
        id: 'Subcategory24',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory24'], 'subCategoryIdList'),
        categoryIdList: ['12'],
        description: [
            'Every year in July, an item emerges the agenda of our Wednesday meetings: how would we like to celebrate the beginnings of Saheli this year? August 9, 1981 was the beginning of a journey to raise our voice against women’s oppression, struggling for our rights and moving towards a world free of violence and injustice. To date, this day remains a powerful reminder of the challenges that lie ahead in continuing struggling against different forms of patriarchies especially for a small, non-funded autonomous collective like us.',
            'Over the years, we have marked the day by organising various kinds of events: Discussions on the Uniform Civil Code, the Saathin’s struggles, the Rise of Right Wing Politics and Impact on Women, Sex Work Debates, Trends and Dilemmas in the Women’s Movement, to name a few. Sometimes we have used the occasion to reach out to college students, or simply got together to celebrate by white-washing the office with friends and supporters, or even launch this website, as we are doing this year (2010). There are no rules of how we can or cannot mark the day. The only objective is to energise our struggles, and affirm our togetherness with co-travellers on this journey… because there are so many reasons to go on.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Saheli Day',
    },
    {
        id: 'InnerCategory1',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['InnerCategory1'], 'subCategoryIdList'),
        categoryIdList: ['Subcategory12'],
        description: [
            'When we were struggling against the injectable contraceptive, Net-En, activists from the first world had already fought against the other injectable, Depo Provera. When we took up the battle against the abortion pill, RU 486, the battle against it had already been taken up elsewhere. The Anti-Fertility Vaccine (AFV) proved to be a different kind of campaign with women world over opening the campaign together and confronting the role of WHO in population control. From Canada to India, the voices of women against the AFVs reverberated, challenging the ‘scientific’ perspective that treated pregnancy as an illness and deployed the immune system to fight it, thereby subjecting the woman to the risk of auto immune diseases. India was a major site of the action as trials were being relentlessly conducted here. Among the many successful actions was the challenging of the research establishment by activists from all over India and the world during the International Immunological Conference held in New Delhi in 1998 during which we also published our monograph titled, Target Practice.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Anti Fertility Vaccines',
    },
    {
        id: 'InnerCategory2',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['InnerCategory2'], 'subCategoryIdList'),
        categoryIdList: ['Subcategory12'],
        description: [
            'Under pressure to achieve a “two child family” by 2000 AD, the government was desperate to expand the ‘basket of contraceptive choices’. The stated government policy, in the late 1980’s- early 1990’s was to speedily introduce contraceptives approved in other countries without conducting the necessary clinical trials. Thus, every effort was being made by private companies and the State to rush injectables and subdermal implants into the National Family Planning Programme. Depo Provera was officially launched for ‘social marketing’ in 1994, with just a proviso that Max Pharma, its manufacturer, conduct a Post Marketing Surveillance (PMS) on risks and benefits. This evoked a strong opposition from many women’s groups. Busting in to glitzy launch events and confronting the manufacturers and their public relations machinery at press conferences, we, along with other women’s groups, generated a vibrant public debate on the harmful effects of Depo Provera. An intervention application filed in a petition against hazardous drugs, has prevented the inclusion of this contraceptive in the family planning programme to date. But efforts to introduce it continue, and so do our battles to prevent it. Other challenges include the fact that several NGO’s have included Depo-Provera in their reproductive health package. Our struggles must go on.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Depo Provera',
    },
    {
        id: 'InnerCategory3',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['InnerCategory3'], 'subCategoryIdList'),
        categoryIdList: ['Subcategory12'],
        description: [
            'The attempt to introduce HPV vaccines the world over is a prime example of the nexus between pharma companies and regulatory authorities.',
            'In India they were licensed for use without mandatory clinical trials, and administered to and promoted for use by young girls wontingly. In July 2009, unethical ‘studies’ being conducted on young tribal girls in Khammam District, Andhra Pradesh and Baroda Distrct, Gujarat came to light. By the end of the year, a media blitz generated a widespread terror of cervical cancer and advertised the vaccines as the only security cover possible to get. The joint campaign conducted by many women’s and child rights’ groups in Delhi and elsewhere against these vaccines has raised the whole gamut of issues from their unethical trials, dubious efficacy, to adverse effects, their exhorbitant cost, lack of screening facilities, other urgent public health priorities, etc. but the strident response has brought the advertising of the products to a halt, and after after the matter was raised in Parliament, the ongoing studies have suspended pending an enquiry. However, the campaign will end only when the license of the vaccines is revoked.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'HPV Vaccines',
    },
    {
        id: 'InnerCategory4',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['InnerCategory4'], 'subCategoryIdList'),
        categoryIdList: ['Subcategory12'],
        description: [
            'The campaign against Net-En was a landmark in the history of the women’s health movement in India. What began as a spontaneous action against unethical trials on poor women in Andhra Pradesh soon grew into a nationwide campaign. Besides stopping the trials, we raised the question of government accountability, and were co-petitioners of a Public Interest Litigation in the Supreme Court. The case, filed to prevent the introduction of this hazardous provider controlled long-acting contraceptive into the National Family Planning Programme successfully stalled it for 15 years. In the course of coordinating the court case, Saheli, with the help and support of like minded friends and activists, researched and built up an extensive data base which was used to challenge the ‘scientific’ arguments of the Indian Council of Medical Research and World Health Organisation. At the closure of the case, the Court directed that Net-En could only be introduced where adequate facilities for follow up and counseling are available. Unfortunately, the story of Net-En does not end there. Net-En is now available over the counter, and the government and multilateral agencies are constantly making new efforts to try and push it into the government health programme. Consequently, our struggle against Net-En and other hazardous contraceptives goes on.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'NET-EN',
    },
    {
        id: 'InnerCategory5',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['InnerCategory5'], 'subCategoryIdList'),
        categoryIdList: ['Subcategory12'],
        description: [
            'Like Depo-Provera, Norplant was also sought to be introduced hastily without the necessary trials. A health providers’ dream come true, one could insert Norplant, and forget it, (even the woman), for a period of 3-5 years. More than any other contraceptive till then, sub-dermal implants such as Norplant took away a woman’s autonomy totally, since she could not remove it herself if she was suffering adverse effects or wished to get pregnant. Another key question surrounded the uncertainty of return of fertility. And the woman’s misery was compounded by the fact that health providers either refused early removal because it was a waste of an expensive contraceptive, or were not trained in its removal.',
            'Alarmed by the implications of such a contraceptive, and armed with our experience of opposing other long-acting hormonal contraceptives, we launched a campaign to protest the callous, unethical large scale trials and promotion of Norplant. Aside from petitioning concerned authorities like the Prime Minister, the Indian Council for Medical Research and so on, we attempted to contact women recruited for trials of Norplant, and took to the streets with a play highlighting the coercive family planning programme, the politics of multinational corporations and the role of the health ministry. Ultimately, law suits filed against the manufacturers in other countries led to the withdrawal of Norplant and the attempts to introduce it in India also got stalled.'
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Norplant',
    },
    {
        id: 'InnerCategory6',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['InnerCategory6'], 'subCategoryIdList'),
        categoryIdList: ['Subcategory12'],
        description: [
            'Quinacrine Sterilisation (QS) is a non-surgical, permanent method of sterilization by the synthetic anti-malarial chemical quinacrine. When quinacrine pellets are inserted into the uterus through an intra-uterine device, they dissolve, form scars and block the fallopian tube to prevent fertilisation. Women’s health advocates around the world in the nineties were alarmed to discover that large-scale clinical trials had been conducted with QS on over 100,000 women in 25 countries. A vibrant campaign by women’s groups exposed the unholy nexus between American fortune-hunters, international NGOs, the USFDA, Indian entrepreneurs, NGOs and government hospitals who were brazenly subjecting women to this hazardous form of sterilisation. Finally it took a Public Interest Litigation filed for the Supreme Court to ban QS due to its unknown and potentially harmful long-term effects on women. But we knew that the struggle had to continue outside the courts. A study conducted in 2003 found that five years after the ban, medical practitioners in India were still using quinacrine to sterilize women who did not know that it was an unauthorised method. Reminding us once again of the lengths to which the population control establishment can go to stop births. '
        ],
        innerCategories: [],
        isSubcategory: true,
        title: 'Quinacrine Sterilisation',
    },
];

// Populate innerCategories for 'Hazardous Contraceptives' after subcategoriesSummary is fully defined
const hazardousContraceptivesSubcategory = subcategoriesSummary.find(sub => sub.id === 'Subcategory12');
if (hazardousContraceptivesSubcategory) {
    hazardousContraceptivesSubcategory.innerCategories = filterByArrayKeyAndIds(subcategoriesSummary, ['Subcategory12'], 'categoryIdList');
}