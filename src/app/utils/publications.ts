import { archive } from './data-model';

const A = '../../../assets/archive/1.png';
const B = '../../../assets/archive/2.png';
const C = '../../../assets/archive/3.png';

export const publicationsCategory: archive[] = [
    {
        id: 'P3',
        title: 'NEWSLETTERS',
        hindiTitle: '',
        archiveImg: C,
        subtitle: {
            en: '',
            hi: ''
        },
        images: [
            { url: A, caption: 'Saheli newsletter, 1984 — early years of the collective', alt: 'Newsletter 1984' },
            { url: C, caption: 'Newsletter covering the anti-sati campaign, 1987', alt: 'Newsletter 1987' },
            { url: B, caption: 'Newsletter on communal violence and women, 1993', alt: 'Newsletter 1993' },
            { url: A, caption: 'Newsletter on Section 377, 2009', alt: 'Newsletter 2009' },
            { url: C, caption: 'Special issue on 25 years of Saheli', alt: 'Newsletter 25 years' },
        ]
    },
    {
        id: 'P7',
        title: 'SOUVENIRS',
        hindiTitle: '',
        subtitle: {
            en: '',
            hi: ''
        },
        archiveImg: C,
        images: [
            { url: A, caption: 'Souvenir booklet from Saheli\'s 10th anniversary, 1991', alt: 'Souvenir 1991' },
            { url: C, caption: 'Souvenir from the fundraising event, 1998', alt: 'Souvenir 1998' },
            { url: B, caption: 'Souvenir marking 25 years of Saheli, 2006', alt: 'Souvenir 2006' },
            { url: A, caption: 'Souvenir booklet from Saheli\'s 40th anniversary, 2021', alt: 'Souvenir 2021' },
        ]
    },
    {
        id: 'P5',
        title: 'REPORTS',
        subtitle: {
            en: '',
            hi: ''
        },
        hindiTitle: '',
        archiveImg: C,
        images: [
            { url: C, caption: 'Report on coercive population control policies', alt: 'Population control report' },
            { url: A, caption: 'Fact-finding report on Gujarat 2002', alt: 'Gujarat report' },
            { url: B, caption: 'Report on Quinacrine sterilisation trials', alt: 'Quinacrine report' },
            { url: C, caption: 'Report on caste-based violence against women', alt: 'Caste violence report' },
            { url: A, caption: 'Report on HPV vaccine trials in India', alt: 'HPV vaccine report' },
        ]
    },
    {
        id: 'P4',
        title: 'POSTERS',
        subtitle: {
            en: '',
            hi: ''
        },
        hindiTitle: 'पोस्टर',
        archiveImg: C,
        images: [
            { url: B, caption: 'Poster for the dowry abolition campaign', alt: 'Dowry poster' },
            { url: A, caption: 'Poster for International Women\'s Day march', alt: 'IWD poster' },
            { url: C, caption: 'Poster against sex determination', alt: 'Sex determination poster' },
            { url: B, caption: 'Poster supporting survivors of communal violence', alt: 'Communal violence poster' },
        ]
    },
    {
        id: 'P2',
        title: 'LEAFLETS',
        hindiTitle: 'पर्चे',
        subtitle: {
            en: '',
            hi: ''
        },
        archiveImg: C,
        images: [
            { url: B, caption: 'Leaflet on dowry harassment awareness', alt: 'Dowry leaflet' },
            { url: A, caption: 'Leaflet for the anti-rape campaign', alt: 'Anti-rape leaflet' },
            { url: C, caption: 'Leaflet on women\'s health and contraceptives', alt: 'Health leaflet' },
            { url: A, caption: 'Leaflet for the Voices Against 377 campaign', alt: '377 leaflet' },
            { url: B, caption: 'Leaflet on workplace sexual harassment', alt: 'POSH leaflet' },
        ]
    },
    {
        id: 'P6',
        title: 'STATEMENTS',
        hindiTitle: '',
        subtitle: {
            en: '',
            hi: ''
        },
        archiveImg: C,
        images: [
            { url: B, caption: 'Statement on the Shah Bano case, 1986', alt: 'Shah Bano statement' },
            { url: C, caption: 'Statement against the two-child norm policy', alt: 'Two-child norm statement' },
            { url: A, caption: 'Statement in solidarity with Manipuri women', alt: 'Manipur solidarity statement' },
            { url: B, caption: 'Statement on the Mathura rape judgment', alt: 'Mathura statement' },
        ]
    },
    {
        id: 'P1',
        title: 'FUND RAISING CALENDARS',
        hindiTitle: 'फंड रेज़िंग कैलेंडर',
        subtitle: {
            en: '',
            hi: ''
        },
        archiveImg: C,
        images: [
            { url: C, caption: 'Saheli fundraising calendar, 1990', alt: 'Calendar 1990' },
            { url: A, caption: 'Annual calendar featuring Saheli campaigns, 1995', alt: 'Calendar 1995' },
            { url: B, caption: 'Hand-illustrated calendar for fundraising, 2002', alt: 'Calendar 2002' },
            { url: C, caption: 'Saheli calendar highlighting women\'s struggles, 2008', alt: 'Calendar 2008' },
        ]
    },
    {
        id: 'P8',
        title: 'MISCELLANEOUS',
        hindiTitle: 'विविध सामग्री',
        subtitle: {
            en: '',
            hi: ''
        },
        archiveImg: C,
        images: [
            { url: B, caption: 'Booklet on talking marriage, caste and community', alt: 'Caste booklet' },
            { url: A, caption: 'Resource guide on women\'s rights and the law', alt: 'Rights guide' },
            { url: C, caption: 'Campaign materials from Voices Against 377', alt: '377 materials' },
            { url: B, caption: 'Documentation from the CALERI campaign, 1999', alt: 'CALERI materials' },
            { url: A, caption: 'Collection of street play scripts and materials', alt: 'Street play scripts' },
        ]
    },
]
