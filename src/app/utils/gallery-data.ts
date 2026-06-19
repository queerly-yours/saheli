export interface GalleryImage {
  url: string;
  caption: string;
  alt: string;
}

export interface GallerySection {
  id: string;
  title: string;
  hindiTitle: string;
  description: {
    en: string;
    hi: string;
  }
  images: GalleryImage[];
}

export const gallerySections: GallerySection[] = [
  {
    id: 'sahelis',
    title: 'Saheli & Sahelis',
    hindiTitle: 'सहेली व सहेलियाँ',
    description: {
      en: 'Snapshots of the office, meetings and actions within it, and Sahelis over time.',
      hi: 'सहेली के दफ़्तर, बैठकों, आंदोलनों और सहेलियों के सफ़र की झलकियाँ।',
    },
    images: [
      {
        url: 'https://picsum.photos/seed/sah01/800/600',
        caption: 'Early members of Saheli at our first meeting',
        alt: 'Saheli members at first meeting',
      },
      {
        url: 'https://picsum.photos/seed/sah02/800/600',
        caption: 'Saheli team at the Delhi office, 1990s',
        alt: 'Saheli team at Delhi office',
      },
      {
        url: 'https://picsum.photos/seed/sah03/800/600',
        caption: 'Working session at Saheli resource centre',
        alt: 'Working session',
      },
      {
        url: 'https://picsum.photos/seed/sah04/800/600',
        caption: 'Saheli volunteers during outreach programme',
        alt: 'Saheli volunteers',
      },
      {
        url: 'https://picsum.photos/seed/sah05/800/600',
        caption: 'Annual gathering of Saheli collective members',
        alt: 'Annual gathering',
      },
      {
        url: 'https://picsum.photos/seed/sah06/800/600',
        caption: 'Training workshop for new volunteers',
        alt: 'Training workshop',
      },
    ],
  },
  {
    id: 'protests',
    title: 'Movements & Campaigns',
    hindiTitle: 'आंदोलन व अभियान',
    description: {
      en: 'A collection of some of the many public campaigns and protest actions we have been part of.',
      hi: 'समय-समय पर किए गए अभियानों और विरोध प्रदर्शनों की कुछ तस्वीरें और यादें।',
    },
    images: [
      {
        url: 'https://picsum.photos/seed/prot01/800/600',
        caption: 'March against domestic violence, New Delhi 2002',
        alt: 'March against domestic violence',
      },
      {
        url: 'https://picsum.photos/seed/prot02/800/600',
        caption: "Protest rally for women's rights at Jantar Mantar",
        alt: 'Protest rally',
      },
      {
        url: 'https://picsum.photos/seed/prot03/800/600',
        caption: 'Candlelight vigil for survivors of violence',
        alt: 'Candlelight vigil',
      },
      {
        url: 'https://picsum.photos/seed/prot04/800/600',
        caption: 'Street demonstration in solidarity with survivors',
        alt: 'Street demonstration',
      },
    ],
  },
  {
    id: 'plays',
    title: 'Plays',
    hindiTitle: 'नाटक',
    description: {
      en: 'Street theatre has always been one of our ways to reach out to people on a variety of issues.',
      hi: 'नुक्कड़  नाटक हमारे लिए लोगों से जुड़ने और कई मुद्दों पर बात करने का एक अहम तरीका रहा हैं।',
    },
    images: [
      {
        url: 'https://picsum.photos/seed/play01/800/600',
        caption: 'Street play performance at Jantar Mantar',
        alt: 'Street play at Jantar Mantar',
      },
      {
        url: 'https://picsum.photos/seed/play02/800/600',
        caption: 'Theatre workshop with community groups',
        alt: 'Theatre workshop',
      },
      {
        url: 'https://picsum.photos/seed/play03/800/600',
        caption: 'Performance raising awareness on domestic abuse',
        alt: 'Awareness performance',
      },
      {
        url: 'https://picsum.photos/seed/play04/800/600',
        caption: 'Youth drama group presenting at a rally',
        alt: 'Youth drama group',
      },
      {
        url: 'https://picsum.photos/seed/play05/800/600',
        caption: 'Interactive theatre in a Delhi school',
        alt: 'Interactive theatre in school',
      },
    ],
  },
  {
    id: 'fundraising',
    title: 'Fund Raising Events',
    hindiTitle: 'फंड रेज़िंग कार्यक्रम',
    description: {
      en: 'Some moments from the events we occasionally held to help raise funds for our work.',
      hi: 'समय-समय पर किए गए उन आयोजनों के कुछ पल, जिनका उद्देश्य हमारे काम के लिए फंड जुटाना था।',
    },
    images: [
      {
        url: 'https://picsum.photos/seed/fund01/800/600',
        caption: 'Charity bazaar to support Saheli programmes',
        alt: 'Charity bazaar',
      },
      {
        url: 'https://picsum.photos/seed/fund02/800/600',
        caption: 'Fundraising book fair at Saheli',
        alt: 'Book fair',
      },
      {
        url: 'https://picsum.photos/seed/fund03/800/600',
        caption: 'Benefit concert for Saheli resources',
        alt: 'Benefit concert',
      },
    ],
  },
  {
    id: 'iwd',
    title: "International Women's Day",
    hindiTitle: 'अंतर्राष्ट्रीय महिला दिवस',
    description: {
      en: 'Marking International Women’s Day with our sisters.',
      hi: 'अपनी बहनों के साथ अंतर्राष्ट्रीय महिला दिवस के कुछ खास पल।',
    },
    images: [
      {
        url: 'https://picsum.photos/seed/iwd01/800/600',
        caption: "International Women's Day march 2015",
        alt: 'IWD march 2015',
      },
      {
        url: 'https://picsum.photos/seed/iwd02/800/600',
        caption: 'IWD rally — banners and placards',
        alt: 'IWD rally',
      },
      {
        url: 'https://picsum.photos/seed/iwd03/800/600',
        caption: "Women's Day panel discussion at Saheli",
        alt: 'IWD panel discussion',
      },
      {
        url: 'https://picsum.photos/seed/iwd04/800/600',
        caption: 'IWD street art and installations',
        alt: 'IWD street art',
      },
      {
        url: 'https://picsum.photos/seed/iwd05/800/600',
        caption: "Solidarity gathering on International Women's Day",
        alt: 'IWD solidarity gathering',
      },
    ],
  },
  {
    id: 'saheliday',
    title: 'Saheli Day',
    hindiTitle: 'सहेली दिवस',
    description: {
      en: 'Marking many Saheli anniversaries together with saathis.',
      hi: 'सहेलियों और साथियों के साथ सहेली की कई वर्षगाँठों के खास पल।',
    },
    images: [
      {
        url: 'https://picsum.photos/seed/sd01/800/600',
        caption: 'Saheli Day 2010 — a milestone celebration',
        alt: 'Saheli Day 2010',
      },
      {
        url: 'https://picsum.photos/seed/sd02/800/600',
        caption: 'Annual Saheli Day gathering',
        alt: 'Saheli Day gathering',
      },
      {
        url: 'https://picsum.photos/seed/sd03/800/600',
        caption: 'Speeches and sharing at Saheli Day',
        alt: 'Saheli Day speeches',
      },
      {
        url: 'https://picsum.photos/seed/sd04/800/600',
        caption: 'Young participants at Saheli Day event',
        alt: 'Young participants at Saheli Day',
      },
    ],
  },
  {
    id: 'meetings',
    title: 'Press',
    hindiTitle: 'प्रेस',
    description: {
      en: 'A few press clippings related to our work.',
      hi: 'हमारे काम पर प्रकाशित कुछ प्रेस कवरेज की झलकियाँ।',
    },
    images: [
      {
        url: 'https://picsum.photos/seed/meet01/800/600',
        caption: 'Strategy meeting at Saheli office',
        alt: 'Strategy meeting',
      },
      {
        url: 'https://picsum.photos/seed/meet02/800/600',
        caption: 'Community consultation session',
        alt: 'Community consultation',
      },
      {
        url: 'https://picsum.photos/seed/meet03/800/600',
        caption: 'Collective meeting reviewing annual goals',
        alt: 'Annual goals meeting',
      },
      {
        url: 'https://picsum.photos/seed/meet04/800/600',
        caption: 'Inter-organizational meeting for collaboration',
        alt: 'Inter-org meeting',
      },
      {
        url: 'https://picsum.photos/seed/meet05/800/600',
        caption: 'Workshop with partner NGOs',
        alt: 'Partner NGOs workshop',
      },
      {
        url: 'https://picsum.photos/seed/meet06/800/600',
        caption: 'Press conference at Saheli',
        alt: 'Press conference',
      },
    ],
  },
];
