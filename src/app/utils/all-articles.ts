import { articlesSummary } from "./all-articles-summary";
import { article } from "./data-model";
import { findById } from "./utils";

export const articles: article[] = [
    {
        id: 'Article24',
        decades: [],
        publishedDate: findById(articlesSummary, 'Article24', 'id')?.publishedDate ?? '',
        exactDate: 'December 24, 2003',
        subtitle: findById(articlesSummary, 'Article24', 'id')?.subtitle ?? '',
        title: findById(articlesSummary, 'Article24', 'id')?.title ?? '',
        value: `
            <p>At a time when the Supreme Court of India is finally taking cognisance of the genocide in Gujarat in 2002, and yet the road to justice seems uphill, it seemed apt that the International Initiative for Justice in Gujarat (IIJG) should release its final report titled, 'Threatened Existence’ in Mumbai, Baroda, New Delhi and London. IIJG is a feminist initiative that sought to investigate the violence, both physical and sexual, suffered by Muslim women in Gujarat since 27th February 2002, to analyse of the use of sexual violence in this particular conflict situation and, to correlate what happened in Gujarat with massacres of various cultural, religious, and ethnic subgroups around the world.</p>
            <p>As has been written about earlier in a Saheli newsletter (May-Aug 2003), the International Initiative for Justice in Gujarat consisted of an international panel of jurists, activists, lawyers, writers and academics who have been prominent for their work on women and conflict. The panel visited Ahmedabad, Baroda and Dahod and Panchmahals districts of Gujarat between the 149 and 179 of December 2002 and met with about 180 women and 136 men from 7 districts in Gujarat, including teachers, lawyers, activists from women’s groups and human rights’ groups and survivors of the violence.</p>
            <p>The 9 panellists were Sunila Abeysekara, Director of Inform, Colombo, Sri Lanka, Rhonda Copelon, Professor of Law, City University of New York and Director of the International Women ’s Human Rights Law Clinic, Anissa Helie of Women Living Under Muslim Laws Algeria/France, Gabriela Mischkowski, historian and co-founder, Medica Mondiale, Germany, Nira Yuval-Davis, Professor of Gender and Ethnic Studies at the University of Greenwich, UK, Uma Chakravarti, feminist historian from the Delhi University who has documented the anti-Sikh pogrom in Delhi in 1984, Vahida Nainar, Researcher of International Law and a Board member of Women’s Initiatives for Gender Justice, The Netherlands, Urgent Action Fund, USA, and Women’s Research and Action Group, India, current Development Director of the Women’s Caucus for Gender Justice, New York, Farah Naqvi, co-founder of Nirantar and an independent writer and consultant on issues of women, democracy and development, Delhi, and Meera Velayudan formerly with the Institute for Environmental and Social Concerns, Coimbatore.</p>
            <div style="display:flex;">
                <img src="../../../assets/article/dot.png" width="80"/>
                <div style="padding-left: 10px; font-size: 22px; color: #727272;">Each panellist had her own history if resistance - a history that was at the same time both specific and universal, a history that resonated deeply with events in Gujrat and made participation in the panel imperative.</div>
            </div>
            <p>For each of the panellists, the events of Gujarat 2002 marked a definitive moment in their own relationship with their past and present. Each panellist had her own history of resistance - a history that was at the same time both specific and universal, a history that resonated deeply with events in Gujarat and made participation in the panel imperative. These histories ranged from memories of Nazi terror; to strife torn Israel and Palestine; the consequences of a civil society in Algeria terrorised by Muslim fundamentalists; war crimes in Bosnia; ethnic chauvinism and a protracted war in Sri Lanka; the trauma of India’s partition with the loss of homes, millions of refugees and abductions of women; to the public killing and burning of Sikhs during the anti-Sikh pogrom of 1984; the rise of right-wing parties in the early 90s and repeated rioting upon the emergence of the right-wing State in India that openly appeals to the religious identity of the Hindu majority. Gujarat was a moment in the individual histories of nine women in the panel and many others who provided invaluable support without which the panel could not have been assembled.</p>
            <p>The major findings of the report 'Threatened Existence’ establish that:</p>
            <ul>
            <li>Almost two years after the massacres of February/March 2002 the violence continues ‘in different and frightening forms with long-term consequences on the lives of all members of the Muslim community particularly women. Not only were Muslims the victims of vicious politically motivated attacks in February/March 2002 but they continue to be so even today.’</li>
            <li>The action of the state in Gujarat during the February/March 2002 attacks as well as the ongoing persecution of the Muslim community constitutes a Crime against Humanity under International Law. The report discusses the legal implications of the pogrom from both national and international jurisprudence, and critiques the mechanisms of obtaining justice, the inadequacies of Indian laws in such situations. At the same time, the report looks at the possibilities of justice that do exist, and also draws parallels from around the world where similar pogroms have been carried out and how they were dealt with.</li>
            <li>Sexual violence is central to the Hindutva project in Gujarat. It is clear that all events including the use of rape and sexual assault occurred with the knowledge of highly placed State actors and in many instances were carried out with the full participation and support of the police. Moreover, these were not random, impulsive or isolated incidents. They were widespread and pre-planned. In many cases - Gujarat, Rwanda, the former Yugoslavia - such large scale violence could not have taken place without complicity, if not participation, by the State. Behind the many forms of sexual violence - rapes, verbal abuses, molestation, and taunts, that continue till today - lies a crucial pattern central to the Hindutva agenda.</li>
            </ul>
            <p>It is clear that Muslim women of Gujarat were attacked both, as members of the collective, and as the biological and cultural reproducers of the community whose bodies symbolize the body of the community. In the Hindutva project, 'real Hindu men' see it as their duty and function to violate the bodies of Muslim women, as a symbolic violation of the entire Muslim community. In the gendered and sexualized character of the Hindutva project, to not violate Muslim women is a sign of weakness, lack of manhood and potency. People in Ahmedabad reported that Hindu men including policemen would stand in line and expose their penises to show that they were taking part in the violence as "true men." Hindu manhood thus becomes the basis on which the "pure Hindu state" is to be created and protected from the Muslim Other.</p>
            <div style="display:flex; justify-content:space-between;">
                <div style="width: 48%">
                    <img style="width:100%;" src="../../../assets/article/samples/4.png" />
                    <div style="font-size:12px">Photo caption if any</div>
                </div>
                <div style="width: 48%; padding-left: 10px; font-size: 35px; color: #727272;">
                   Hindu women have been recruited in the thousands to provide strategic support (cooking food, handling equipment) for their men who unleashed the violence in Gujrat.
                </div>
            </div>
            <p>The Hindutva project has not only prescribed gendered and sexualized norms of behavior for Hindu men, it has also constructed an ideal Hindu woman - dependant on the authority of her father/husband, subordinate, dutiful, reproducer of families and the nation. Indeed she embodies "Mother India" - a powerful image in the Hindutva imagination and in the perception/construction of nationhood. As such it is also her duty to preserve, protect and defend the nation/community against the Enemy Other. Hindu women have been recruited in the thousands to provide strategic support (cooking food, handling equipment) for their men who unleashed the violence in Gujarat.</p>
            <p>Many participated more directly in the violence. In Gujarat, as in Bosnia or Rwanda the attacks on minority community women were regarded as legitimate by women from the majority community. Testimonies from Gujarat spoke of Hindu women actively instigating and supporting rapists.</p>
            <p>This is not new. History shows that sexuality is pivotal to nationalist projects in general, and in the construction of the Enemy Other, in particular. German Nazi propaganda portrayed male Jews as seducers and rapists of Aryan girls and women. Similarly, US war posters in World War II mobilized public opinion by portraying Nazi and Japanese men as notorious rapists. Before the outbreak of war in former Yugoslavia, Serbians spread fear and hatred with false propaganda that men belonging to the Muslim Albanian community were raping and seducing Christian Serbian girls. Similarly, the Gujarat language press in the state was flooded with reports of Muslim men raping Hindu girls before the Gujarat pogrom.</p>
            <div style="display:flex; justify-content:space-between;">
                <div style="width: 48%">
                    <img src="../../../assets/article/samples/3.png" />
                    <div style="font-size:12px">Photo caption if any</div>
                </div>
                <div style="width: 48%; display: flex; flex-direction: column; align-items: flex-end; padding-right: 50px; padding-top: 50px;">
                   <img src="../../../assets/article/dot.png" width="120"/>
                </div>
            </div>
            <p>The effects of sexual violence conducted on such a mass scale in Gujarat continue till today. Tragically the shared patriarchal value systems and notions of honour of both communities has silenced many women survivors; their 'shame’ making them unable to talk about their pain and their violation. Their 'chosen’ silence is also directly linked to the State’s refusal to protect, to listen or to give justice, immeasurably worsening the trauma of their sexual violation.</p>
            <p>Coming as it did, almost 2 years since the pogrom, the report hopes to operate as a reflection on the inadequacy of existing processes r both legal and otherwise r to provide justice and redress to victims, and as an allusion to new forms of activism around Gujarat that are relevant to broader struggles for democracy and equality. The Gujarat experience once more highlights the need to look at sexual violence as a significant engine of genocide.</p>
            <p>We need to understand the genocidal nature of the Hindutva project so as to emphasize the critical responsibility of intervention that lies with both the civil society and the State.</p>
            <div style="display:flex; justify-content:space-between;">
                <div style="width: 48%">
                    <img style="width: 100%" src="../../../assets/article/samples/1.png" />
                    <div style="font-size:12px">Photo caption if any</div>
                </div>
                <div style="width: 48%">
                    <img style="width: 100%" src="../../../assets/article/samples/2.png" />
                    <div style="font-size:12px">Photo caption if any</div>
                </div>
            </div>
            <p>It is not enough merely to reject the notion that violent retaliation or collective punishment could be commensurate with our understanding of justice. Given the complexity of the Gujarat massacres, even the more legitimate principles of punishing perpetrators and compensating the victims are cast into doubt. And yet, the difficulty of locating named perpetrators and establishing their guilt, in a majority of the cases, must not result in the denial of something called justice. At the most general level, then, we must assert that the State bears fundamental responsibility for its failure to prevent the massacres, and that a fundamental duty arises from this responsibility: a duty to recognize and atone for the wrong, and to compensate and rehabilitate the victims. This duty is owed not just to the particular individuals who have come forward with testimonies of their victimization, but to an entire community that was terrorized. In particular, we must be attentive to the cases of sexual violence, where not only are the perpetrators and victims are unnamed, and where forces within the community (concerned with issues of collective honour and shame) conspire with forces outside to keep the crime unnamed. Justice for women from the Muslim community has to be dealt with separately, over and above the generalized strategy that addresses the community as a whole.</p>
            <p>The State then owes women a more complex approach that recognizes their entitlement to more specific reparations and includes the development of mechanisms to prevent the recurrence of such violation. It must institute actual rehabilitation measures in order to address women’s economic, social and emotional needs that range from promoting educational opportunities to providing confidential counselling.</p>
            <p>At the release function of the report held in New Delhi on December 24th, 2003, organised by the Delhi groups of the initiative, feminist publisher and activist, Urvashi Butalia, spoke at length about the centrality of sexual violence on women in the Hindutva agenda. Drawing from the experience of Partition and the anti-sikh pogrom of 1984 in Delhi, she illustrated the complex relations between community identity and the role of women within it, and thus focussed on the specific impact of growing communalism on women. The gathering was also addressed by two Indian members of the international panel, Farah Naqvi and Uma Chakravarti. They recounted both, the testimonies of those affected by the violence, the nature of the continuing violence on the Muslim community, especially the women, and how the 'failure of the state’ to protect the rights of citizens translates into hopelessness and fear in the everyday lives of the Muslims of Gujarat.</p>
            <p>In a statement issued on the occasion, Shabana Azmi, well known actor and former MP said, that in the context of increased intolerance and communalism, <span style="font-style: italic;">"In the last decade or so, we have witnessed growing intolerance and communalism in our country, and the violence in Gujarat has been a turning point. Muslim citizens were targeted as never before, and worse still, the struggle for justice has seemed an uphill task. Fortunately, with the Supreme Court now taking cognisance, hope may finally be restored. In this context, I believe that the effort of the International Initiative for Justice in Gujarat comes at an opportune moment. It has brought to the fore the specific nature of violence on women in Gujarat, It compels us to acknowledge the continuing threat to the Muslim community in the state. At the same time, it draws on national and international law, and the experiences of its prominent panellists who have worked in conflict situations all over the world. It is clear that we must all work towards healing and reconciliation. But nothing can happen until justice is done. It is time to take the focus away from the Hindu-Muslim debate, and speak instead of how the rights of all citizens can be ensured, irrespective of community, caste or gender. The law must be seen to be above everything else.</span>"</p>
            <div>The international Initiative for Justice in Gujarat was set up by:</div>
            <div>Citizen’s initiative (Ahmedabad), People's Union for Civil Liberties (PUCL)-Shanti Abhiyan (Baroda), Communalism Combat, Aawaaz-e-Niswaan, Forum Against Oppression of Women (FAOW) and Stree Sangam (Bombay), Saheli, Jagori, Sama, and Nirantar (Delhi), Organised Lesbian Alliance for Visibility and Action (OLAVA, Pune).</div>

        `
    },
    {
        id: 'Article22',
        decades: [],
        publishedDate: findById(articlesSummary, 'Article22', 'id')?.publishedDate ?? '',
        exactDate: 'August, 2020',
        subtitle: findById(articlesSummary, 'Article22', 'id')?.subtitle ?? '',
        title: findById(articlesSummary, 'Article22', 'id')?.title ?? '',
        value: `
        <div style="display: flex; flex-wrap: wrap; column-gap:14px; align-items: flex-start;">
                <div style="display: flex; flex-direction: column; flex: 0 0 auto;">
                    <img src="../../../assets/article/samples/solidarity-1.png" style="width: 200px; display: block; padding-top: 5px;" />
                    <a style="font-size: 12px; color: #f2287f; margin-top: 4px; text-decoration:none; font-weight:400;" target="_blank" href="https://vagabomb.com/">vagabomb.com</a>
                </div>

            <p style="flex: 1 1 300px; min-width: 240px; margin: 0;">
            Ilina’s life and work were dedicated to making meaningful linkages between
                women’s movements challenging patriarchal oppression, and peoples’
                movements struggling for livelihood, as well as the sustainability of natural
                resources of jal, jangal and zameen. For many years, Ilina chose to be with
                marginalised and oppressed communities and workers in the political battle
                for their rights, but also to live with and learn from them. She taught adivasi
                children, was integral part of public health movements, trade unions, human
                rights and adivasi/tribal organisations. Her pathbreaking work, A Space
                Within the Struggle – Women’s Participation in People’s Struggles chronicles
                the struggles of brick workers, landless labourers, fishworkers, etc., people
                who still often remain invisible to the discipline of women’s studies; and
                continues to be a pioneering work on understanding women’s participation
                in people’s struggles and their fight to bring women’s perspectives to these
                struggles. Her later work Sukhwasin: The Migrant Woman of Chhattisgarh on
                the issue of migration out of Chhattisgarh due to drought, famine and hunger,
                threw special light on the conditions of migrant women. Thus, long before she
                joined the Gender Studies Departments in Mahatma Gandhi Antarrashtriya
                Hindi University, Wardha, and later the Tata Institute of Social Sciences, and
                becoming President, Indian Association of Women Studies, she was writing
                and thinking about the intersectionality of struggles.
            </p>
            <p>Ilina’s soft demeanor concealed her firm resolve to fight for justice. Her
                personal and political struggles became inextricably intermeshed when her
                husband and fellow activist Binayak Sen was arrested and charged with the
                UAPA. She fought relentlessly, not just for his release but also against the
                abysmal conditions and overcrowding in Indian prisons. Despite failing health,
                she never faltered in her determination to resist anti-people public health
                and development policies, attempts to quash dissent, rampant human rights’
                violations, laws against sedition, and so on.
            </p>
            <p>
            The sweetness with which Ilina would render songs of women’s and peoples’
            rights movements still lingers with us. Her determination and clarity of purpose
            still inspires us. Zindabad, Ilina.
            </p>
        </div>
        `
    },
    {
        id: 'Article21',
        decades: [],
        publishedDate: findById(articlesSummary, 'Article21', 'id')?.publishedDate ?? '',
        exactDate: 'August, 2020',
        subtitle: findById(articlesSummary, 'Article21', 'id')?.subtitle ?? '',
        title: findById(articlesSummary, 'Article21', 'id')?.title ?? '',
        value: `
        <div style="display: flex; flex-wrap: wrap; column-gap:14px; align-items: flex-start;">
                <div style="display: flex; flex-direction: column; flex: 0 0 auto;">
                    <img src="../../../assets/article/samples/solidarity-2.png" style="width: 250px; display: block; padding-top: 5px;" />
                    <a style="font-size: 12px; color: #f2287f; margin-top: 4px; text-decoration:none; font-weight:400;" target="_blank" href="https://vagabomb.com/">vagabomb.com</a>
                </div>

            <p style="flex: 1 1 300px; min-width: 240px; margin: 0;">
                Vidya Bal, or Vidya tai to many, especially in Maharashtra, was a feminist
                icon, popular magazine editor and founder of several political initiatives
                in her long and eventful life. But for us in Saheli, she was simply and
                amazingly, just Vidya. Loved by all of us not just because her daughter
                Vineeta has been a long time Saheli, but because Vidya’s warm and loving
                persona was a perfect complement to her sharp political convictions. As
                a tiny group that struggles to publish a bi-annual newsletter, we were
                totally floored when she shared how she and her group publish the
                monthly magazine, Miloon Saryajani, consistently since 9 August 1989
                (coincidentally on Saheli’s eight anniversary!). We felt the strength of
                her spirit when she spoke out fearlessly against the targeted killing of
                the eminent rationalist, Narendra Dabholkar, only to find herself facing
                death threats at almost the age of 80! Vidya was inspiring in many ways
                too. She reconfigured the famed feminist slogan of ‘personal is political’
                by proving that ‘political can go far beyond the personal’. Many instances
                come to mind. When Vidya realised she didn’t know enough about
                emerging LGBTQI+ issues, she chose to engage with those who could
                help her understand and teach her, before she stepped out in support and
                even led the Pune Pride. Vidya also led a legal battle for women’s right
                to enter the sanctum sanctorum of the Shani Shingnapur temple, even
                though she was herself an avowed atheist. That’s the kind of feminism
                not everyone can believe in, much less, live. But Vidya did, and we’ll
                always be inspired by that. <br> <br>
                <span>
                You are missed far beyond the state of Maharashtra, Vidya. With much love, from all of us in Saheli, New Delhi.
                </span>
            </p>
        </div>
        `
    },
    {
        id: 'Article20',
        decades: [],
        publishedDate: findById(articlesSummary, 'Article20', 'id')?.publishedDate ?? '',
        exactDate: 'August, 2020',
        subtitle: findById(articlesSummary, 'Article20', 'id')?.subtitle ?? '',
        title: findById(articlesSummary, 'Article20', 'id')?.title ?? '',
        value: `
        <p>
            This remembrance note must start with an apology to Kalpana Mehta. One
            day, when we were doing our usual adda-baazi she said, ‘Don’t try to write
            me off with a few pages of an obituary, I want a whole issue of the Saheli
            Newsletter on me.’ And Vani had replied flippantly, ‘Who’s going to put in so
            much effort, Kalpana? You’d better write it yourself, and translate it into Hindi
            as well, before you go.’ We all laughed out, our loud cackles filling the room,
            and hers crinkling up her eyes and shaking her whole body with glee. So,
            sorry Kalpana this issue isn’t about you but it is about the political concerns,
            struggles, hopes, rage and desperations we shared as friends, saathis and
            Sahelis... so in that sense, we think you’ll approve. On a more serious note
            though, this is a very difficult piece to write. As Savita said, ‘It’s impossible to
            put 40 years of friendship into words.’ But the real challenge is even bigger
            than that: Kalpana wasn’t just a friend, a saathi, a founder member of Saheli,
            she was a force of nature – loud, warm, wonderful, vibrant, fearless, loving,
            emotional, unpredictable, systematic, funny, determined, experienced, anadi
            (naïve)... and much more.
        </p>
        <div style="display:flex; justify-content:space-between;">
            <div style="width: 35%">
                <img src="../../../assets/article/samples/solidarity-3.png" width="260"/>
                <div style="font-size:12px; color: #f2287f;">Kalpana on her birthday, 2017. Photo credit: Aditi</div>
            </div>
            <div style="width: 65%; display: flex; flex-direction: column; align-items: flex-end; justify-content:center;">
                As a young woman, Kalpana was doing her MBA in the U.S. after completing
                her B. Tech in Aeronautical Engineering from IIT-Kanpur when the Emergency
                was declared. When she returned to India in 1976, the country was still reeling
                under its impact. After a few years with trade unions, Kalpana joined other
                women from the Left and socialist movements as they started to organize
                themselves on issues confronting women – in what has since come to be known
                as the autonomous women’s movement of the late 1970s and early 1980s.
                An important part of this history is the founding of Saheli Women’s Resource
                Centre in Delhi on 9 August 1981, by ‘8 women – Amiya Rao, Bharati Roy
                Chaudhry, Buchy aka Lakshmi, Gouri Chowdhry, Kalpana Mehta, Rukmini Rao,
                Vichitra, Vidya Rao – with 80 rupees, two jhadoos, one notebook, a flyswatter
                and the strength of their convictions’, as the legend goes.
            </div>
        </div>
        <p>
            Ashima recalls, ‘It was early 1981 when I faced the first big challenge of my
            life. My marriage had crumbled, I had no job, and all that I could call my own
            including my clothes, personal effects and money in a joint bank account were
            out of reach. I also didn’t have anyone to turn to for advice and comfort except
            my parents. That is when my father took me to meet his youngest brother and
            sister-in-law, Gouri Chowdhury. That was on 4 August 1981, just a few days
            before Saheli was formally inaugurated. It was the day I met a bunch of young
            women who listened keenly to this very unhappy, confused and stressed out
            female. Their empathy and patience had a huge effect on me: this was the
            comfort zone which I had been searching for. Among the few who stood out
            for me was Kalpana. Somehow I was convinced that I had found my pillars
            of strength. During the period that followed – of a new job, receiving divorce summons in the office, finances in
            doldrums, making daily trips to Saheli office in Nizamuddin after work, the going got tougher. There were many
            moments when I would burst into tears. One day Kalpana took me outside the Saheli office and hugged me till I
            stopped crying. Since then she was always there when I needed advice and guidance, and her home was where
            I went to relax and spend some happy times. Of course, I got a lot of strength from other Saheli members too –
            together they helped me rebuild my tattered life.’
        </p>
        <p>
            Savita remembers that in 1981 when she came to Saheli seeking help on her personal crisis, the office would
            open only in the evenings. Like Ashima, Savita too became part of Saheli, and was in fact, the group’s first full
            timer dealing with other women’s problems: going to the police station with them, dealing with dowry death
            cases, following up on FIRs and medical reports. ‘Kalpana had the ability to spot talent and channelize it. She
            encouraged me to do all this, and even to write about these experiences for the first Saheli newsletter,’ reminisces
            Savita, who still has to be cajoled into writing so many years later (clearly, we don’t all have Kalpana’s charm!).
        </p>
        <p>
            It was soon after the 1984 riots that Ramani came to Saheli. ‘I met Kalpana, Elizabeth Vatsyayan and Nalini Bhanot
            – they were the regulars at Saheli. Ashima Roy Chowdhry, Ranjana Padhi, Savita Sharma, Rukmini Rao, Sadhna
            Arya, Sujata Madhok, Laxmi Murthy, Nilanjana Mukherjee and Malati Rao would also come on some days. It was
            a very interactive and cohesive group. Saheli did case-work those days, so they taught me how to talk to women
            in distress and write daily case-diaries. We also had weekly study classes about feminist issues and politics. I left
            Saheli after a few years when I started teaching full time. When I returned after nearly a decade, the affection
            and welcome I got from Kalpana and everyone else made me feel so much at home. This openness of all Sahelis
            is what makes the group so special.’
        </p>
        <p>
            ‘I always saw Kalpana as very confident, courageous, intelligent, and sharp in her Left and feminist politics,”says
            Sadhna. “Once she was convinced of something, she would lose no time in going ahead with it even if it invited
            criticism or made some people unhappy. In the first Saheli publication titled, The First Four Years, Kalpana writes,
            ’I come because I belong. It is not always love and warmth, it is fights and bickering as well. It is not always the
            work I think I should be doing – but then I belong HERE, with all other Sahelis, so I come... One breathes Saheli
            and sometimes it is breath of fresh air and at others... small rewards keep you growing and keep your faith in
            “try and try again”. There are times of stress and distrust, times of peak activity and discovering togetherness...
            Something we share is the courage to swim together against the tide – whether it is on the Egalitarian Civil Code
            or opposing population control, the penny pinching in our work and the chaos in which we function.’ Decades
            later Kalpana’s words ring true for most of us – through all the emotional bursts, highs and lows of being a Saheli.
        </p>
        <p>
            ‘She was genuinely caring towards anyone who was troubled, but on the flip side, she could be very tough and
            could hurt people,’ remembers Ashima. ‘I will never forget that during a weekly meeting, everyone was being
            asked to commit more time to Saheli work, and I said I couldn’t. Kalpana said I should work in Saheli during my
            next annual leave and not go off traversing to some foreign land. After much arguments and mediation I agreed,
            but I was angry. But over time, I understood that it was her dedication to Saheli and the women’s movement that
            drove her to push me that way.’
        </p>
        <p>
            Sadhna notes,’Kalpana understood that as a small organisation, we need to strategise to take our perspective/s
            forward, connect with struggles of working class women, and engage with mass based organisations like AIDWA,
            NFIW, etc., be part of struggles against displacement and its impact on women be they because of “conflict” or
            “development”. In fact, at the event marking 25 years of Saheli, she spoke passionately about the need for metro
            based women’s groups to connect more deeply with groups and women in smaller towns. Equally, she believed
            that institutions of the state should be held accountable. ‘Until we organise women on a wider basis, the most
            we can do is to act as a vigilant body, to see that these institutions/forces are used to protect rather than exploit
            the oppressed. The need is to extend ourselves – increase our collective strength.’ So it was no surprise that she
            was an integral part of planning and implementing a sit-in inside the office of the Drugs Controller of India (DCI)
            against hazardous long acting contraceptives, leading a protest into the NCW office to demand the report on jail
            conditions of Soni Sori and others, compelling the NCW team to visit a displacement site in Madhya Pradesh, or
            the Cover-Up Campaign, in which we dumped countless bedsheets with political messages at the CBI headquarters
            for their “next cover-up” after they wilfully botched up the Shopian double rape and murder investigation.
        </p>
        <p>
            ‘‘Her zest for life took the form of delightful subversions as political strategy,’
            remembers Vani. ‘When I first started coming to Saheli, the group was in the
            throws of the campaign against EP drugs (High dose combination hormonal
            pills and injections that were wrongly and harmfully used to diagnose
            pregnancy). The government’s claim was that since it was supposedly
            available only on prescription, its (mis)use was controlled. To call out their
            lie, one strategy was for us to collect fake prescriptions and buy the drug
            over the counter with the name of the DCI as the prescribing doctor! To
            me, a neophyte in feminist politics, this seemed like too daring a move. But
            the Sahelis would just crack up with delight every time one of us came in
            with more ‘evidence’ that strengthened our case. And then of course was

            the historic ‘let’s-leap-over-the-walls-and-bust-a-public-relations-press-
            conference-on-Depo-Provera moment’. These may of course, have been

            the very moments when I fell in love with this group of badmaash aurtein
            called Saheli.’
        </p>
        <div style="display:flex; justify-content:space-around;">
            <div>
                <img src="../../../assets/article/samples/solidarity-4.png" width="250"/>
                <div style="font-size:12px">Early years, the Saheli group.</div>
            </div>
            <div>
                <img src="../../../assets/article/samples/solidarity-5.png" width="250"/>
                <div style="font-size:12px; max-width:230px;">Old and young Sahelis and friends gather after the fire in the office, 2011.</div>
            </div>
        </div>
        <p>
            ‘After being in Delhi for 3-4 years one day in 1994, I went to Saheli to pick up
            a parcel that had been left for me,’ remembers Vineeta. ‘A group of women
            happily chatted with me and extended an open invitation to come to Saheli
            whenever I felt like. I have no recollection of who I met during that first
            visit, but I soon started dropping in, and before I realised it, I was roped
            into discussions, participating in meetings, and became a Saheli. Eventually
            I came to know Kalpana, Elizabeth, Laxmi, Ranjana, Sadhna, Vani better.
            But it was Kalpana who took me under her wing, as was her wont. She was
            warm, hospitable and often invited me to stay back at her place after Saheli
            meetings. Late night discussions, arguments about nuclear weapons and
            nuclear energy, contraceptive devices, vaccines, including anti-hCG vaccine
            as a contraceptive followed – while we agreed on the goal we were working
            towards, we often had strong disagreements about how we should get there.
            I was quite naive on the issue of population control, but Kalpana helped me
            get a grasp of it. Despite my inadequacies she asked me to help revise Saheli’s
            primer on women’s health and contraceptives [fondly described as the ‘Red
            Book’!]. Saheli’s work in women’s reproductive health helped me develop a
            feminist perspective on contraception and women’s health, and opened my
            eyes to the lack of social and economic understanding of health issues as
            they are taught in medical college.’
        </p>
            Besides Saheli, Kalpana was involved in the conceptualisation and setting
            up of several other feminist initiatives. ‘Paridhi’asought to research and
            manufacture diaphragms as part of a larger feminist search for effective
            barrier methods of contraception that would be healthy, safe and in the
            control of women themselves. She set up ‘Manasi’with a group of health
            activists and doctors to provide health care from traditional healing systems
            as well as allopathy. She was also a trained Reiki master who used the practice
            to heal others, as well as on herself, once she contracted the immensely
            debilitating ALS (amyotrophic lateral sclerosis, one type ofmotor neuron
            disease) which eventually took her away.
        <br><br>
            ‘One thing that perplexed me about Kalpana was her increasing dependence
            on and use of alternative forms of medicine such as Reiki. How could
            somebody, who waded through piles and piles of references and collected
            scientific information to counter the arguments made by those who forced
            hazardous contraceptives on women, start believing in forms of medicine where evidence for their use is still lacking?’ says Vineeta. ‘In the early 2000s when
            I joined Saheli, Kalpana was a name you read in the ‘First 4 Years’ booklet. As I
            stayed longer, it seemed that Kalpana was more a historical figure and less a real
            one, quoted here in a souvenir, there in a newsletter. As my involvement with Saheli
            deepened, I was sure that Kalpana was actually a concept, a feminist principle.
            When you meet such a figure in person you do what many younger feminists have
            done and will continue to do – challenge them, their methods... it’s inevitable. 20
            years later, I wish this had not been the case,’ muses Deepti. But differences weren’t
            what made or broke relationships with Kalpana. She had the ability to rise above
            them and reach out if she sensed unhappiness in someone; she could get up from
            an acrimonious Saheli meeting, and invite you over to share a drink, have a laugh,
            and continue the argument, of course! As Savita says, the ‘relationship with her was
            always both, political and familial.’
        <br><br>
            In the first decade of the 2000s, a small but determined group including Kalpana was
            instrumental in setting up Women Against Sexual Violence and State Repression
            (WSS) – a national level feminist response to the increasing use of sexual violence
            as a means of state repression – an attempt to address the failure of the mainstream
            women’s movement to respond adequately to the issue. The national canvas of the
            network, the range of activists and movements it drew together, brought Kalpana’s
            organisational and inter-personal skills to the fore once again, and gave her renewed
            strength and energy.
        <br><br>
            ‘Kalpana was always methodical and determined, but I am especially inspired by how
            she stayed politically engaged till the very end’ remembers Satnam. An apt tribute
            to a woman who beat the odds of her health condition to stay totally updated on
            issues till her last moments: raging against the CAA-NRC-NPR project; challenging
            the detention camps and saying, ‘I want to be a doubtful citizen and have them look
            after me in my current situation’; and signing a petition for the release of anti-CAA
            activists wrongly charged for sedition, just a day before she passed on.
        <br><br>
            In closing, a lovely memory: After the Saheli office was burnt down by a fire in 2009,
            we decided to gather in the office to get our energies back. In the crowd room, we
            all, Sahelis and friends of Saheli, sat together laughing, crying, talking over each
            other. And there she was, Kalpana sitting in the middle of everyone, singing – Mein
            Zindagi ka saath nibhata chala gaya, har fikr ko dhooyen mein udaata chala gaya...
        <br><br>
            Zindabad Kalpana. It’s hard to think of you in the past tense, but your work and its
            legacy lives on. They really don’t make them like you any more.     
        <br><br>
        <div style="display:flex; justify-content:space-around;">
            <div>
                <img src="../../../assets/article/samples/solidarity-6.png" width="400"/>
                <div style="font-size:12px; max-width:350px;">An early International Women’s Day, 8 March rally.</div>
            </div>
            <div>
                <img src="../../../assets/article/samples/solidarity-7.png" width="400"/>
                <div style="font-size:12px; max-width:350px;">An anti HPV vaccine press conference, 28 December, 2009. </div>
            </div>
        </div>
    `
    },
    {
        id: 'Article19',
        decades: [],
        publishedDate: findById(articlesSummary, 'Article19', 'id')?.publishedDate ?? '',
        exactDate: 'August, 2020',
        subtitle: findById(articlesSummary, 'Article19', 'id')?.subtitle ?? '',
        title: findById(articlesSummary, 'Article19', 'id')?.title ?? '',
        value: `
            While bail of undertrials and decongestion has been a worldwide demand, Indian prisons remain
            overcrowded, so the spread of the Covid-19 Virus is causing a humanitarian crisis among inmates. Yet the
            Indian state is relentlessly denying political prisoners bail, protective measures within the jails, or basic
            medical care - even to those especially vulnerable due to their age, disability or other co-morbidities.
            <br><br>
            With Prof GN Saibaba alone in an Anda Cell despite desperately failing health, the revolutionary poet VV
            Rao nearly on his deathbed due to utter negligence, Prof Shoma Sen severely affected by arthritis, Gautam
            Navlakha at great risk with the number of Covid positive cases rising in Taloha Jail... multiple campaigns are
            on demanding the freeing of political prisoners, especially those falsely charged in the Bhima Koregaon Elgar Parishad case.
            We are sharing here, some of amazing posters that capture their message and spirit.
            <br><br>
            <div style="text-align: center;">
                <img src="../../../assets/article/samples/solidarity-8.png" />
            </div>
`
    },
    {
        id: 'Article18',
        decades: [],
        publishedDate: findById(articlesSummary, 'Article18', 'id')?.publishedDate ?? '',
        exactDate: 'August, 2020',
        subtitle: findById(articlesSummary, 'Article18', 'id')?.subtitle ?? '',
        title: findById(articlesSummary, 'Article18', 'id')?.title ?? '',
        value: `
        <div style="display: flex; flex-wrap: wrap; column-gap:14px; align-items: flex-start;">
                <div style="display: flex; flex-direction: column; flex: 0 0 auto;">
                    <img src="../../../assets/article/samples/solidarity-9.png" style="width: 200px; display: block; padding-top: 5px;" />
                    <a style="font-size: 12px; color: #f2287f; margin-top: 4px; text-decoration:none; font-weight:400;" target="_blank" href="https://vagabomb.com/">vagabomb.com</a>
                </div>

            <p style="flex: 1 1 300px; min-width: 240px; margin: 0;">
                As the concerns around Covid-19 began to surface in mid-March, and the lockdown
                began to be implemented, I found myself confused and unable to absorb the new
                moment we were all suddenly confronted with. The incomprehension itself was
                compounded by the series of events that had preceded it: first the NRC and the
                huge crisis in the north-eastern states followed quickly by the CAA assault upon us.
                The response to the CAA had led directly to the crackdown on protesting students
                at Jamia and Aligarh, and then the protests at Shaheen Bagh drew large numbers
                of Muslim women into an extraordinary protest that the government could not
                directly crackdown upon. Shaheen Baghs multiplied across Delhi and other cities all over India. It was a heady
                moment, especially for feminists to see these protests sweep the country, which the government was unable to stop.
            </p>
        </div>
        <br>
            Then the government came up with the manufactured and targeted violence against Muslims in north-east Delhi
            in February 2020. Before we could all absorb that, came the pandemic. Given the events that preceded it, including
            the daily bulletins about the collapse of the economy, the natural reaction was that the Covid was extremely handy
            in diverting all the unrest into the crisis generated by the disease. It was therefore difficult to look at the panic that
            accompanied it in purely disease and remedy terms, which is what was expected of us.
        <br><br>
            Somehow, when the panic and the arrangements to deal with the disease took hold of the public imagination, I began
            to think of history and the past. That took me to the Buddha, where, according to the story line, prince Siddhartha
            first meets disease, old age, and death, and is so shocked by the phenomena that he needs to leave home and palace
            in search of an answer to human misery. He found his answer in ways that may or may not make sense to us today,
            but for me the pandemic is a “Buddha moment” in history. Suddenly, we are reminded that disease and death are
            imminent, that no one can escape it (because the Corona will hit everyone/anyone, whether you live in a palace or
            a shack), and that money cannot buy you an escape from it because a cure does not exist as yet.) Suddenly, then, the
            ephemeral neo-liberalised world where everyone’s ambition is to go higher and higher to achieve individual success
            has burst like the bubble it always was. In the face of the pandemic, jobs shrank or disappeared. The building boom
            came to a standstill as EMIs were hard to pay, markets were affected and the economy was admittedly in a crisis,
            far beyond the slowdown which was already upon us for at least a year before the lockdown hit us.
        <br><br>
            Pretty soon Corona was not just a reminder of disease, mortality and of the imminence of death, but about how we
            were handling the virus: of how we were responding to the enormous misery that had suddenly been unleashed
            upon us; and of how such large swathes of our people went from work and minimal food to hunger and degradation
            in a few days. Soon, when panic set in, which most of us did not understand, we were taken over by the images
            of labourers fleeing desperately from the cities to which they had earlier flocked, to escape the depredations of
            the disease, and the hunger and the humiliation it brought with it. <a style="text-decoration: none; font-weight:400;" href="https://www.firstpost.com/india/walked-on-tracks-to-avoid-police-check-posts-were-in-too-deep-sleep-to-hear-goods-train-coming-says-aurangabad-tragedy-survivor-8350121.html" target="_blank">Tansen Gond and his fellow labourers were
            walking home along the train tracks, as the surest way of reaching home, when they were overtaken by
            exhaustion and fell asleep on the tracks.</a> They were then run over by a cruel State that ran its trains to carry
            goods, rather than people like them, simply because they were mere labour—to work when it was convenient and
            necessary, and dump when times were bad. It was hard to absorb. It was a moment when history forced itself as
            an experience to go back to and seek answers from. So, here then are a few thoughts, put together from a stray
            recall of history.
        <br><br>
            <span style="font-weight:700;">To begin with, how do we, the post-liberalisation, post-Marxist world, see labour or understand it?</span> As online discussions on webinars started, the difference between policy-makers and scholars of labour became strikingly
            apparent: the former were talking about what the government could do realistically and what would not happen
            (because the government was not going to do it in the state we live in; the neo liberal withdrawal of the State was
            thorough and comprehensive since the 1990’s). Jan Breman, whose works on labour in Gujarat over a 30-year-period
            should be read by all, made a sharp comment on how labour was viewed by state, society and policy-makers alike:
            as a commodity, and not as citizens. I don’t think the policy-makers even understood what Breman was bringing up.
            His intervention reminded me of what I had taught my students in the history class on slavery in Greece and Rome.
            The Romans had a classification of what went into production.
            <span style="font-weight:700;">
                To begin with, <span style="font-style:italic;">instrumentum mutum</span>, the tools
                that were mute or could not speak, which were used in agriculture, such as the plough, the spade, and the
                sickle. Then there was the <span style="font-style:italic;">instrumentum semi vocale </span>, ‘tools’ that could ‘speak’ in part, such as bullocks and
                the other animals used in agriculture, which had a voice of sorts and might even protest. Finally, on the top
                of the scale, was the <span style="font-style:italic;">instrumentum vocale</span>, the speaking tool, denoting the slave who too was deemed to be a
                <span style="font-style:italic;">mere instrument of production</span>.</span>
                I am not sure we are still teaching such things anymore, but we do treat labour as
                dumb instruments of production. Thus, the enormous stocks of food in the godowns – produced collectively through
                cheap labour – is denied to the starving labourers by the State. They were thus compelled to walk home, in spite
                of the lockdown, to try and reclaim some of their dignity, braving the lathi blows showered on them by the police.
            </span>
        <br><br>
                Cut to today. What the fleeing labourers have shown us is that they not only know that they are mere instruments
                of production, but that they are caught in an unusual combination of circumstances that have hit them. They have
                been hit by an induced, man-made, famine of sorts but also a deadly disease, a pestilence that has no borders, that
                nothing can stop, and that they have no homes where they can lock themselves. Their panic is entirely rational; their
                desire to return home, often with their wives and children, and even parents who were with them in the cities, is
                not only about being with their extended families and communities; it is about soil and water and air and a place
                where you were born, and had something of a right to be in.
        <br><br>
        <div style="display: flex; flex-direction: column; flex: 0 0 auto;">
                    <img src="../../../assets/article/samples/solidarity-10.png" style="display: block; padding-top: 5px;" />
                    <span style="font-size: 12px; color: #f2287f;">Foodlines during the 1897 famine. Source: Pandita Ramabai: The Story of Her Life. Helen S Dyer, London: Morgan and Scott</span>
                </div>
        <br>
                <span style="font-weight:700;">In history, famines and epidemics are usually distinct entities, not conflated into one. Because hunger is
                a running theme in the present crisis, I am unable to look at disease as distinct from hunger, deprivation
                and possible death.</span> David Arnold’s account of the Madras presidency famine in 1875-78, read now post-Covid,
                has many issues that resonate with today. People desperately looking for food, being fed in traditional charitable
                institutions, but not by the State; by erstwhile rulers who were performing their ‘raj dharma’, by choultries and
                inns, and by wealthier members of the community. But it wasn’t enough. As hunger went deeper and deeper into
                their vitals, when they finished eating the dead animals which had themselves starved to death (the Brahmins
                could not do that though), they began to move into the hills of the Niligiris in a panic distress mode – a kind of
                search for an El Dorado. Or they went to the towns, for the countryside had nothing for them to eat. It was at that
                time that <a style="text-decoration:none; font-weight:400;" href="https://en.wikipedia.org/wiki/Pandita_Ramabai" target="_blank">Pandita Ramabai</a> lost her parents. Ramabai’s family (comprising her parents, a sister, and a brother)
                were peripatetic wanderers who travelled on foot from village to village, telling harikatha stories and surviving
                on what the villagers fed them. But the famine took its toll. There was no food to spare. The family was trapped
                by culture and caste, so it could not labour. Ramabai’s father was the first to go. He decided he would simply
                turn the moment into the end that he desired: he was old anyway, so he took <span style="font-style:italic;">samadhi</span> and ended his life as many
                <span style="font-style:italic;">sanyasis</span> did. Ramabai’s sister went next in the famine. Her mother, who was much younger than her father, began
                to waste away. Desperate to save her mother after days of enforced fasting, Ramabai decided to go and beg for
                some food. Some kind person gave her a piece of bajra roti, which she brought back and tried to feed her mother
                with. However, her mother could not absorb any food in her starved condition, and died – another victim of the
                great famine. It was such a bad time that there weren’t even four pall bearers to carry the bier, and so Ramabai
                became one of the pall bearers. However, as she was too short to use her shoulder, her end of the bier had to be
                supported by her head. In Ramabai’s own words:<br><br>
                <span style="font-style:italic;">I cannot describe all the sufferings of that terrible time. My father, mother and sister all died of starvation within a few
                months of each other... we continued to walk ceaselessly but the gods did not appear to us. Slowly we began to lose faith...<sup style="font-size:10px;">1</sup></span>
        <br><br>
        <div style="display:flex;">
            <div style="display: flex; flex-direction: column; flex: 0 0 auto; justify-content:center;">
                <img src="../../../assets/article/samples/solidarity-11.png" style="width: 300px; display: block; padding-top: 5px;" />
                <span style="max-width: 250px; font-size: 12px; color: #f2287f; margin-top: 4px; font-weight:400;">
                The hospital at Mukti - Where the sick
                from the famine are nursed back to life.
                Source: Pandita Ramabai...Ibid
                </span>
            </div>
            <div style="padding: 5px 0px 0px 25px;">
                Ramabai never forgot this famine and the terrible distress that came
                in its wake. When the next great famine came around in central India
                in 1897, she went there from Poona on a rescue mission and brought
                back hundreds of children, especially girls who would be the first to
                be abandoned by their parents or be taken advantage of by men who
                would be on the lookout for girls to use in the brothels later.
                <br> 
                The hundreds of famine survivors she brought back went into the
                home she ran for widows in Poona. It was surrounded by wealthier
                householders who objected to the rabble she had brought into the home
                she ran. The municipality sent her a notice to take the rabble away. It
                mattered little that Ramabai had rescued them from death. But what do the elites care for the starving? The
                same is true of governments for whom ‘rules’ are more important than human beings. Resourceful as ever,
                Ramabai moved the entire institution to a piece of land she had acquired some 60 miles from Poona. The picture
                on the right is of the hospital in Mukti Sadan, and the extraordinary photograph on the previous page is of meal
                time at the Mukti Sadan, marked by a long line of people with plates in hand, a visual reminder of that moment in
                our history. Ramabai paid her debt to her parents in the best way she could.
            </div>
        </div>
        <br><br>
            The colonial government took harsh measures to forcibly lockdown suspected cases of the disease, and in one such
            swoop officials carried away a girl from the sadan to the segregation camp. The girl was abducted from there by one
            of the municipal officials. A furious Ramabai wrote a letter to the newspapers, which was taken up by a member of
            parliament in Britain. The Bombay government was furious with her, and accused her of lying; she in turn hit back
            and accused the governor of lying! Ramabai’s mentors were horrified and accused her of sedition, but she stood
            her ground, refusing to back down while many of the Brahmin men who had also objected to the search and control
            measures and accused the government of arbitrary actions during the epidemic, did. The government had forcibly
            taken away people into segregation camps, invaded homes and were perceived as using state power in unacceptable
            ways. In the end, everyone took back their accusations; only Ramabai refused to take back her allegations, earning
            her some respect from her old adversary Tilak, who had earlier damned her for converting to Christianity, which
            he had regarded as a betrayal of her “people”; the nation was already a Hindu nation in his understanding.
        <br><br>
            <span style="font-weight:700;">Arbitrary actions by the state, whether colonial or post-colonial, almost always seem to let down the poor
            and the marginal women and men of our societies.</span> Far from doing their duty to be <span style="font-style:italic">‘mai baap,’</span> they leave them
            to fend for themselves. Instead of food, the desperate people are inflicted with violence by the police; and when
            they find their own way to escape hunger and degradation they face more violence. Far from living in a society
            that acknowledges the rights of people who labour as citizens – and not as commodities – those who labour
            have been abandoned to the vagaries of the neo-liberal economy, which undergirds the state and all its actions.
            It is a supremely uncaring State.
        <br><br>
            It is time to recall Buddha’s emphasis on compassion: <span style="font-weight:700;">the state could do with some humanity, some ethics,
            and some <span style="font-style:italic">karuna.</span></span> But do we care? Like Ramabai, we need to stand up and demand from our government that
            it too stands up to discharge its duty to its people, and not remain indifferent to the greatest humanitarian
            crisis of our times.
        <br><br>
        <div style="height:2px; background:#f2287f; width:50%;"></div>
        <br>
        <span style="font-size:12px"> 1. Uma Chakravarti, Rewriting History: The Life and times of Pandita Ramabai, Delhi, Kali For Women, 1998, p.307.</span>
        <br><br>
        <div style="display:flex; justify-content:space-between;">
        <div style="width: 48%; padding-left: 10px; color: #727272; font-size:20px; text-align:end; display: flex; justify-content: flex-end; align-items: flex-end;">
            As we are faced with tragic images of migrant workers fleeing
            the Coronavirus lockdown on foot, I’m reminded of artist
            Chittoprosad’s haunting artworks of the Bengal famine
            in 1943. That was a human tragedy caused by the racist
            callousness of Winston Churchill and the British colonial
            government. History seems to be repeating itself - except that
            the people behind the tragedy unfolding before us today are
            Narendra Modi and his elected Indian government.
        </div>
        <div style="width: 48%">
            <img style="width:100%;" src="../../../assets/article/samples/solidarity-12.png" />
            <div style="font-size:12px">Instagram post by artist, Orijit Sen. 27 March 2020</div>
        </div>
        </div>
        <br><br><br>
        <div style="display:flex; flex-direction:column; align-items:center;border: 1px solid #cccc; padding: 10px 20px; background:#f5f2e1;">
            <span style="font-weight:700; font-size: 20px">THE CORONA CRISIS REVEALS INDIA AS CRUEL & HEARTLESS.</span>
            <br>
            <span style="font-weight:600;">Statement by Saheli on the State’s inhuman treatment of the poor. 31 March 2020</span>
            <br>
            <span style="text-align:center; font-weight:600;">Apologies about the distress caused by the lockdown mean nothing without acknowledging (and
            correcting) the transgressions of the state against the people who are worst hit by this crisis.</span>
            <br><br>
            Our heads must hang in collective shame at pictures of poor, migrant and marginalised people - women and
            men, young and old, children and people with disabilities, people from underprivileged communities - being
            inhumanly treated by state administrations, and the security forces.
            <br><br>
            The anti-poor, anti-Dalit, anti-Muslim, regional and ethnic biases propagated by the powers that be are in
            blatant display during this, the greatest humanitarian crisis that we, and most other countries have ever faced.
            Since the last few days, extremely poor daily wagers have been leaving many major cities to try and reach their
            villages and home towns to escape the joblessness (and pennilessness) they are facing under the lockdown, the
            lack of any economic and social security, and total uncertainty about returning to work. Without money and
            resources, they have taken to the roads, with nothing to eat and no drinking water, leave aside water and soap
            to wash their hands! Yet they have been further traumatised by security forces beating them, making them sit
            with heads in between their legs as ‘punishment’ for breaking curfew, and most horrifying of all, being sprayed
            with pesticide chemicals to ‘disinfect’ them – with no concern for their health, safety or dignity! Was this done
            to those who were brought back by planes from other countries, who could actually have been the first carriers
            of deadly corona virus?
            <br><br>
            The PM, CMs and many other government officials are issuing statements to create awareness about the virus,
            but unfortunately, their repeated messages on social media talk about ‘giving a free hand to law enforcement’.
            On the ground this has meant a ‘free hand’ for security personnel to stop the poor from stepping out to buy
            vegetables, beating citizens in minority dominated areas at ration shops, ostracising and harassing those
            already at the margins of our society – Dalit, Muslim, Trans persons, sex workers, persons with disabilities
            etc who have, for the last several years, led amazing struggles for their rights as full citizens.
            <br><br>
            <span>Today, we reaffirm and invoke these very constitutional rights and assert that every person in India be treated
            with equality and dignity. <span style="font-weight:700">We urge the authorities to put an immeditae stop to the ruthless and inhuman
            display of power by the State agencies, and issue immediate orders to this effect.</span></span>
            <br>
            <span>The government at both the Centre and at state levels, needs to prove that they are the government of all,
            not just the privileged few.<span style="font-weight:700;"> After all, every society is judged by how it treats it’s poorest, weakest and
            most vulnerable.</span></span>

        </div>
        `
    },
]