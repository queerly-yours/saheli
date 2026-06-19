import {
  PublicationDetail,
  PublicationFileItem,
  PublicationFileType,
} from './data-model';

const archiveA = '/assets/archive/1.png';
const archiveB = '/assets/archive/2.png';
const archiveC = '/assets/archive/3.png';
const mockPdfAssetUrl = '/assets/publications/pdfSample.pdf';

const mockDocDataUrl = 'data:application/msword;base64,RG9jTW9ja0NvbnRlbnQ=';
const mockUnsupportedDataUrl =
  'data:application/octet-stream;base64,U2FoZWxpIE1vY2sgRmlsZQ==';

function createFileItem(
  id: string,
  title: string,
  caption: string,
  fileType: PublicationFileType,
  fileUrl: string,
  extension: string,
  options?: {
    thumbnailUrl?: string;
    docPreview?: PublicationFileItem['docPreview'];
  },
): PublicationFileItem {
  return {
    id,
    title,
    caption,
    fileType,
    fileUrl,
    fileName: `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.${extension}`,
    thumbnailUrl:
      options?.thumbnailUrl ??
      (fileType === 'png' || fileType === 'jpeg' ? fileUrl : undefined),
    docPreview: options?.docPreview,
  };
}

const docPreviewSample = (
  heading: string,
  subheading: string,
  intro: string,
) => ({
  heading,
  subheading,
  paragraphs: [
    intro,
    'This mock document preview represents how a DOC file could be surfaced inside the publications viewer while keeping the page design consistent.',
    'When real files are added later, this layout can be replaced with a richer rendering pipeline or linked to a server-side conversion flow.',
  ],
});

const mixedCalendarFiles: PublicationFileItem[] = [
  createFileItem(
    'p1-1',
    'Calendar 1990',
    'Saheli fundraising calendar, 1990',
    'pdf',
    mockPdfAssetUrl,
    'pdf',
    { thumbnailUrl: archiveC },
  ),
  createFileItem(
    'p1-2',
    'Calendar 1995',
    'Annual calendar featuring Saheli campaigns, 1995',
    'png',
    archiveA,
    'png',
  ),
  createFileItem(
    'p1-3',
    'Calendar 2002',
    'Hand-illustrated calendar for fundraising, 2002',
    'jpeg',
    archiveB,
    'jpeg',
  ),
  createFileItem(
    'p1-4',
    'Calendar Notes 2008',
    'Production notes and text draft for the 2008 fundraising calendar',
    'doc',
    mockDocDataUrl,
    'doc',
    {
      docPreview: docPreviewSample(
        'Calendar Notes 2008',
        'Draft production memo',
        'A working note accompanying the 2008 Saheli fundraising calendar.',
      ),
    },
  ),
  createFileItem(
    'p1-5',
    'Calendar Assets 2012',
    'Packaged source bundle for the 2012 calendar artwork',
    'other',
    mockUnsupportedDataUrl,
    'zip',
  ),
  createFileItem(
    'p1-6',
    'Calendar 2021',
    'Anniversary fundraising calendar with archival visuals, 2021',
    'pdf',
    mockPdfAssetUrl,
    'pdf',
    { thumbnailUrl: archiveA },
  ),
];

const mixedLeafletFiles: PublicationFileItem[] = [
  createFileItem(
    'p2-1',
    'Dowry Awareness Leaflet',
    'Leaflet on dowry harassment awareness',
    'pdf',
    mockPdfAssetUrl,
    'pdf',
    { thumbnailUrl: archiveA },
  ),
  createFileItem(
    'p2-2',
    'Anti-Rape Campaign Leaflet',
    'Leaflet for the anti-rape campaign',
    'png',
    archiveB,
    'png',
  ),
  createFileItem(
    'p2-3',
    "Women's Health Leaflet",
    "Leaflet on women's health and contraceptives",
    'doc',
    mockDocDataUrl,
    'doc',
    {
      docPreview: docPreviewSample(
        "Women's Health Leaflet",
        'Draft copy document',
        "A draft leaflet text on women's health and contraceptive rights.",
      ),
    },
  ),
  createFileItem(
    'p2-4',
    'Voices Against 377 Leaflet',
    'Leaflet for the Voices Against 377 campaign',
    'jpeg',
    archiveC,
    'jpeg',
  ),
  createFileItem(
    'p2-5',
    'Workplace Harassment Leaflet',
    'Leaflet on workplace sexual harassment',
    'pdf',
    mockPdfAssetUrl,
    'pdf',
    { thumbnailUrl: archiveB },
  ),
  createFileItem(
    'p2-6',
    'Community Rights Leaflet',
    'Leaflet on legal rights and community support networks',
    'other',
    mockUnsupportedDataUrl,
    'psd',
  ),
];

const mixedPosterFiles: PublicationFileItem[] = [
  createFileItem(
    'p4-1',
    'Dowry Campaign Poster',
    'Poster for the dowry abolition campaign',
    'png',
    archiveC,
    'png',
  ),
  createFileItem(
    'p4-2',
    'IWD March Poster',
    "Poster for International Women's Day march",
    'jpeg',
    archiveA,
    'jpeg',
  ),
  createFileItem(
    'p4-3',
    'Sex Determination Poster',
    'Poster against sex determination',
    'pdf',
    mockPdfAssetUrl,
    'pdf',
    { thumbnailUrl: archiveA },
  ),
  createFileItem(
    'p4-4',
    'Communal Violence Poster',
    'Poster supporting survivors of communal violence',
    'png',
    archiveB,
    'png',
  ),
  createFileItem(
    'p4-5',
    'Street Mobilisation Poster',
    'Poster for street mobilisation and feminist public meetings',
    'doc',
    mockDocDataUrl,
    'doc',
    {
      docPreview: docPreviewSample(
        'Street Mobilisation Poster',
        'Campaign copy draft',
        'A draft text layout prepared for a street mobilisation poster.',
      ),
    },
  ),
  createFileItem(
    'p4-6',
    'Solidarity Poster',
    'Poster foregrounding solidarity, care, and collective resistance',
    'other',
    mockUnsupportedDataUrl,
    'ai',
  ),
];

const mixedReportFiles: PublicationFileItem[] = [
  createFileItem(
    'p5-1',
    'Population Control Report',
    'Report on coercive population control policies',
    'pdf',
    mockPdfAssetUrl,
    'pdf',
    { thumbnailUrl: archiveB },
  ),
  createFileItem(
    'p5-2',
    'Gujarat 2002 Report',
    'Fact-finding report on Gujarat 2002',
    'doc',
    mockDocDataUrl,
    'doc',
    {
      docPreview: docPreviewSample(
        'Gujarat 2002 Report',
        'Fact-finding draft',
        'A draft fact-finding report documenting findings and recommendations.',
      ),
    },
  ),
  createFileItem(
    'p5-3',
    'Quinacrine Report',
    'Report on Quinacrine sterilisation trials',
    'pdf',
    mockPdfAssetUrl,
    'pdf',
    { thumbnailUrl: archiveC },
  ),
  createFileItem(
    'p5-4',
    'Caste Violence Report',
    'Report on caste-based violence against women',
    'png',
    archiveA,
    'png',
  ),
  createFileItem(
    'p5-5',
    'HPV Vaccine Report',
    'Report on HPV vaccine trials in India',
    'jpeg',
    archiveC,
    'jpeg',
  ),
  createFileItem(
    'p5-6',
    'Campaign Assessment Report',
    'Report summarising campaign strategies, outcomes, and lessons',
    'other',
    mockUnsupportedDataUrl,
    'xlsx',
  ),
];

const mixedStatementFiles: PublicationFileItem[] = [
  createFileItem(
    'p6-1',
    'Shah Bano Statement',
    'Statement on the Shah Bano case, 1986',
    'pdf',
    mockPdfAssetUrl,
    'pdf',
    { thumbnailUrl: archiveC },
  ),
  createFileItem(
    'p6-2',
    'Two-Child Norm Statement',
    'Statement against the two-child norm policy',
    'doc',
    mockDocDataUrl,
    'doc',
    {
      docPreview: docPreviewSample(
        'Two-Child Norm Statement',
        'Policy response draft',
        'A mock statement responding to discriminatory population policy proposals.',
      ),
    },
  ),
  createFileItem(
    'p6-3',
    'Manipur Solidarity Statement',
    'Statement in solidarity with Manipuri women',
    'jpeg',
    archiveA,
    'jpeg',
  ),
  createFileItem(
    'p6-4',
    'Mathura Statement',
    'Statement on the Mathura rape judgment',
    'pdf',
    mockPdfAssetUrl,
    'pdf',
    { thumbnailUrl: archiveB },
  ),
  createFileItem(
    'p6-5',
    'Emergency Response Statement',
    'Rapid response statement on legal and institutional setbacks',
    'png',
    archiveB,
    'png',
  ),
  createFileItem(
    'p6-6',
    'Movement Solidarity Statement',
    'Joint statement on feminist movement solidarities and alliances',
    'other',
    mockUnsupportedDataUrl,
    'rtf',
  ),
];

const mixedSouvenirFiles: PublicationFileItem[] = [
  createFileItem(
    'p7-1',
    'Souvenir 1991',
    "Souvenir booklet from Saheli's 10th anniversary, 1991",
    'pdf',
    mockPdfAssetUrl,
    'pdf',
    { thumbnailUrl: archiveA },
  ),
  createFileItem(
    'p7-2',
    'Souvenir 1998',
    'Souvenir from the fundraising event, 1998',
    'png',
    archiveC,
    'png',
  ),
  createFileItem(
    'p7-3',
    'Souvenir 2006',
    'Souvenir marking 25 years of Saheli, 2006',
    'doc',
    mockDocDataUrl,
    'doc',
    {
      docPreview: docPreviewSample(
        'Souvenir 2006',
        'Editorial draft',
        'A mock editorial note prepared for the 25 years commemorative souvenir.',
      ),
    },
  ),
  createFileItem(
    'p7-4',
    'Souvenir 2021',
    "Souvenir booklet from Saheli's 40th anniversary, 2021",
    'jpeg',
    archiveB,
    'jpeg',
  ),
  createFileItem(
    'p7-5',
    'Event Souvenir',
    'Souvenir documenting celebrations, reflections, and collective memory',
    'pdf',
    mockPdfAssetUrl,
    'pdf',
    { thumbnailUrl: archiveC },
  ),
  createFileItem(
    'p7-6',
    'Anniversary Booklet',
    'Commemorative booklet with archival timelines and campaign notes',
    'other',
    mockUnsupportedDataUrl,
    'indd',
  ),
];

const mixedMiscFiles: PublicationFileItem[] = [
  createFileItem(
    'p8-1',
    'Marriage, Caste and Community',
    'Booklet on talking marriage, caste and community',
    'pdf',
    mockPdfAssetUrl,
    'pdf',
    { thumbnailUrl: archiveA },
  ),
  createFileItem(
    'p8-2',
    "Women's Rights Guide",
    "Resource guide on women's rights and the law",
    'doc',
    mockDocDataUrl,
    'doc',
    {
      docPreview: docPreviewSample(
        "Women's Rights Guide",
        'Resource guide draft',
        'A mock guide outlining legal rights, referral pathways, and support resources.',
      ),
    },
  ),
  createFileItem(
    'p8-3',
    'Voices Against 377 Materials',
    'Campaign materials from Voices Against 377',
    'png',
    archiveA,
    'png',
  ),
  createFileItem(
    'p8-4',
    'CALERI Documentation',
    'Documentation from the CALERI campaign, 1999',
    'jpeg',
    archiveC,
    'jpeg',
  ),
  createFileItem(
    'p8-5',
    'Street Play Scripts',
    'Collection of street play scripts and materials',
    'pdf',
    mockPdfAssetUrl,
    'pdf',
    { thumbnailUrl: archiveB },
  ),
  createFileItem(
    'p8-6',
    'Campaign Reader',
    'Reader compiling archival notes, pamphlets, and public resources',
    'other',
    mockUnsupportedDataUrl,
    'csv',
  ),
];

export const publicationDetails: PublicationDetail[] = [
  {
    id: 'P1',
    title: 'Calendars',
    description: {
      en: ['Calendars that we produced occasionally to raise funds once for the North India Regional Autonomous Women’s Conference, Kanpur 1993 and twice to support our own work. Each calendar also sought to highlight issues and celebrate women’s creativity.'],
      hi: ['हमने कभी-कभी फंड जुटाने के लिए कैलेंडर बनाए। एक बार 1993 में कानपुर में हुई उत्तर भारत क्षेत्रीय स्वायत्त महिला सम्मेलन के लिए, और दो बार अपने काम को आर्थिक सहयोग देने के लिए बनाए गए। हर कैलेंडर का उद्देश्य महिलाओं से जुड़े मुद्दों को सामने लाना और औरतों की कला को उजागर करना भी था।'],
    },
    mode: 'grid',
    hindiTitle: 'फंड रेज़िंग कैलेंडर',
    items: mixedCalendarFiles,
  },
  {
    id: 'P2',
    title: 'Leaflets',
    description: {
      en: ['Just some of the campaign leaflets that remain with us.'],
      hi: ['हमारे अभियानों से जुड़े उपलब्ध पर्चों का एक छोटा संग्रह।'],
    },
    mode: 'grid',
    hindiTitle: 'पर्चे',
    items: mixedLeafletFiles,
  },
  {
    id: 'P3',
    title: 'Newsletters',
    description: {
      en: [
        'Since 1982, except for a short break in the early 1990s, we have brought out newsletters to share our work and perspectives. Despite our best efforts, it was always  a challenge for us to be regular in this effort, so issues across the years arrived with varying periodicity. However, it is still interesting to trace how issues evolved, languages changed and even political positions sometimes altered with experience and fresh thinking over time.',
      ],
      hi: [
        '1982 से, 1990 के शुरुआती वर्षों में थोड़े समय के अंतराल को छोड़कर, हम अपने काम और विचारों को साझा करने के लिए न्यूज़लेटर्स प्रकाशित करते रहे हैं। यह काम हमेशा नियमित नहीं हो पाया, इसलिए अलग-अलग वर्षों में ये अलग-अलग अंतराल पर प्रकाशित हुए हैं। फिर भी, इन न्यूज़लेटर्स को पढ़कर यह देखा जा सकता है कि समय के साथ मुद्दे कैसे बदले, भाषा कैसे बदली और अनुभव के साथ हमारे विचार और राजनीतिक समझ भी धीरे-धीरे विकसित हुई।',
      ],
    },
    mode: 'accordion',
    hindiTitle: '',
    sections: [
      {
        id: '1980s',
        title: '1980s',
        items: [
          createFileItem(
            'p3-80-1',
            'Newsletter 1984',
            'Saheli newsletter, 1984: early years of the collective',
            'pdf',
            mockPdfAssetUrl,
            'pdf',
            { thumbnailUrl: archiveC },
          ),
          createFileItem(
            'p3-80-2',
            'Newsletter 1987 Cover',
            'Newsletter cover image from the anti-sati campaign, 1987',
            'jpeg',
            archiveA,
            'jpeg',
          ),
          createFileItem(
            'p3-80-3',
            'Newsletter Notes 1989',
            'Editorial note documenting organising work around violence and legal reform',
            'doc',
            mockDocDataUrl,
            'doc',
            {
              docPreview: docPreviewSample(
                'Newsletter Notes 1989',
                'Editorial draft',
                'A draft editorial note accompanying the 1989 newsletter issue.',
              ),
            },
          ),
        ],
      },
      {
        id: '1990s',
        title: '1990s',
        items: [
          createFileItem(
            'p3-90-1',
            'Newsletter 1991',
            'Issue on coalition-building and feminist organising across campuses',
            'pdf',
            mockPdfAssetUrl,
            'pdf',
            { thumbnailUrl: archiveB },
          ),
          createFileItem(
            'p3-90-2',
            'Newsletter 1993',
            'Newsletter on communal violence and women, 1993',
            'png',
            archiveB,
            'png',
          ),
          createFileItem(
            'p3-90-3',
            'Newsletter Archive 1998',
            "Packaged issue assets for the women's health special issue",
            'other',
            mockUnsupportedDataUrl,
            'rar',
          ),
        ],
      },
      {
        id: '2000s',
        title: '2000s',
        items: [
          createFileItem(
            'p3-00-1',
            'Newsletter 2002',
            'Issue reflecting on Gujarat and feminist solidarity responses',
            'pdf',
            mockPdfAssetUrl,
            'pdf',
            { thumbnailUrl: archiveA },
          ),
          createFileItem(
            'p3-00-2',
            'Newsletter 2006',
            'Special issue on 25 years of Saheli',
            'pdf',
            mockPdfAssetUrl,
            'pdf',
            { thumbnailUrl: archiveC },
          ),
          createFileItem(
            'p3-00-3',
            'Newsletter 2009',
            'Newsletter on Section 377, 2009',
            'doc',
            mockDocDataUrl,
            'doc',
            {
              docPreview: docPreviewSample(
                'Newsletter 2009',
                'Draft issue text',
                'A working text draft for the 2009 newsletter issue on Section 377.',
              ),
            },
          ),
        ],
      },
      {
        id: '2010s',
        title: '2010s',
        items: [
          createFileItem(
            'p3-10-1',
            'Newsletter 2012',
            'Issue on campus mobilisation and public protest cultures',
            'pdf',
            mockPdfAssetUrl,
            'pdf',
            { thumbnailUrl: archiveB },
          ),
          createFileItem(
            'p3-10-2',
            'Newsletter 2016',
            'Newsletter on labour, care work, and feminist economics',
            'jpeg',
            archiveC,
            'jpeg',
          ),
          createFileItem(
            'p3-10-3',
            'Newsletter 2019',
            'Issue on movement alliances, citizenship, and resistance',
            'pdf',
            mockPdfAssetUrl,
            'pdf',
          ),
        ],
      },
      {
        id: '2020s',
        title: '2020s',
        items: [
          createFileItem(
            'p3-20-1',
            'Newsletter 2021',
            'Anniversary issue revisiting four decades of collective work',
            'pdf',
            mockPdfAssetUrl,
            'pdf',
            { thumbnailUrl: archiveA },
          ),
          createFileItem(
            'p3-20-2',
            'Newsletter 2023',
            'Issue on digital organising, legal rollback, and solidarity',
            'png',
            archiveA,
            'png',
          ),
          createFileItem(
            'p3-20-3',
            'Newsletter 2025',
            'Current mock issue featuring publications, archives, and updates',
            'other',
            mockUnsupportedDataUrl,
            'odt',
          ),
        ],
      },
    ],
  },
  {
    id: 'P4',
    title: 'Posters',
    description: {
      en: ['A handful of campaign posters that have survived till date.'],
      hi: ['हमारे अभियानों से जुड़े संरक्षित पोस्टरों का एक संग्रह।'],
    },
    mode: 'grid',
    hindiTitle: 'पोस्टर',
    items: mixedPosterFiles,
  },
  {
    id: 'P5',
    title: 'Reports',
    description: {
      en: [
        'Scientific analysis on hazardous long-acting contraceptives and sterilisation. Accessible information on sexual health, contraception and safety. Investigative reports on how women are socialised into their roles within caste, religion and community. Findings of a survey on sexual harassment at the workplace. Specific case study reports. These are just some of the published reports of Saheli, readily available for you to browse and download.',
        'In addition, featured here are reports we have worked on jointly with other women’s groups, democratic rights’ groups and others who we have worked with in solidarity on issues of mutual concern, or as part of joint campaigns and struggles',
      ],
      hi: [
        'खतरनाक लंबे समय तक असर करने वाले गर्भनिरोधक तरीकों और नसबंदी पर वैज्ञानिक अध्ययन, यौन स्वास्थ्य, गर्भनिरोध और सुरक्षा से जुड़ी सरल जानकारी, जाति, धर्म और समुदाय में महिलाओं की सामाजिक भूमिका पर शोध रिपोर्टें, कार्यस्थल पर यौन उत्पीड़न से जुड़े सर्वे के नतीजे, और विशेष केस स्टडी रिपोर्ट्स — ये सहेली की कुछ प्रकाशित रिपोर्टों के उदाहरण हैं। इन्हें आप यहाँ पढ़ सकते हैं और डाउनलोड भी कर सकते हैं।',
      ],
    },
    mode: 'grid',
    hindiTitle: '',
    items: mixedReportFiles,
  },
  {
    id: 'P6',
    title: 'Statements',
    description: {
      en: [
        'Statements and petitions issued from time to time, some singly as Saheli, many initiated collectively as part of joint platforms or networks; or as issue based alliances with other women’s groups, democratic rights’ groups, students’ collectives, anti-nuclear platforms and others.',
      ],
      hi: [
        'समय-समय पर सहेली द्वारा और कई साझा मंचों या नेटवर्कों के साथ मिलकर सामूहिक रूप से या अलग-अलग मुद्दों पर आधारित गठबंधनों, जैसे महिला समूहों, लोकतांत्रिक अधिकार समूहों, छात्र संगठनों, परमाणु-विरोधी मंचों और अन्य समूहों के साथ मिलकर जो वक्तव्य और याचिकाएँ जारी किए गए हैं, उन्हें भी यहाँ शामिल किया गया है।',
        'इसके अलावा, यहाँ वे रिपोर्टें भी शामिल हैं जो हमने अन्य महिला समूहों, लोकतांत्रिक अधिकार संगठनों और सहयोगी समूहों के साथ मिलकर तैयार की हैं, जिन के साथ हम ने साझा मुद्दों पर एकजुटता के आधार पर या संयुक्त अभियानों और आंदोलनों के हिस्से के रूप में काम किया।'
      ],
    },
    mode: 'grid',
    hindiTitle: '',
    items: mixedStatementFiles,
  },
  {
    id: 'P7',
    title: 'Souvenirs',
    description: {
      en: [
        '1985. 1988. 1995. 2004. 2006. Periodically we have written and published compilations of reflective, analytical essays on our work, campaigns, issues, international challenges and internal debates, organisational and funding related questions, and more. In 1988 and 1995, these were issued on the occasion of fund raising events and even carried advertisements which we used to ‘sell space’ for. That’s how this collection of publications started getting called ‘souvenirs’ - a name that has stuck. But we guess that’s okay now that they have all become ‘souvenirs’ of their times, by now!',
      ],
      hi: [
        '1985, 1988, 1995, 2004, 2006, समय-समय पर हमने अपने काम, अभियानों, मुद्दों, अंतर्राष्ट्रीय चुनौतियों, आंतरिक बहसों, संगठन और फंडिंग से जुड़े सवालों और अन्य विषयों पर विचारात्मक और विश्लेषणात्मक संकलन लिखे और प्रकाशित किये है। 1988 और 1995 में इन्हें फण्ड जुटाने के कार्यक्रमों के अवसर पर जारी किया गया थे और इन में विज्ञापन भी शामिल थे जिन्हें स्मारिका में जगह दे कर हम पैसा जुटाते थ। इस तरह इन प्रकाशनों कों ‘स्मारिकाएं’ कहा जाने लगा – एक ऐसा नाम जो अब तक बना हुआ है।  पर हमें लगता है कि यह ठीक ही है क्योंकि अब तक ये सभी अपने अपने समय की ‘यादें’ (स्मारिकायें) बन चुके है।',
      ],
    },
    mode: 'grid',
    hindiTitle: '',
    items: mixedSouvenirFiles,
  },
  {
    id: 'P8',
    title: 'Miscellaneous',
    description: {
      en: ['An assortment of other materials we’ve published.'],
      hi: ['प्रकाशित की गई अन्य सामग्रियां।'],
    },
    mode: 'grid',
    hindiTitle: 'विविध सामग्री',
    items: mixedMiscFiles,
  },
];
