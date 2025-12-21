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
        hindiTitle: 'हमारे बारे में',
        decades: ['1980s', '2000s', '2010s' ],
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
        hindiTitle: 'हिंसा का विरोध',
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`],
        subCategoryList: filterByArrayKeyAndIds(subcategoriesSummary, ['2'], 'categoryIdList'),
        isOpen: false,
        isCategory: true
    },
    {
        id: '3',
        archiveImg: '../../../assets/archive/2.png',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['3'], 'categoryIdList'),
        title: 'Countering Communalism',
        hindiTitle: 'सांप्रदायिकता का मुकाबला',
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`],
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
        hindiTitle: 'लैंगिकता और लिंग',
        decades: ['2000s', '2010s' ],
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
        hindiTitle: 'जाति का मुकाबला',
        decades: ['1990s', '2000s', '2010s' ],
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
        hindiTitle: 'राज्य दमन',
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
        hindiTitle: 'अन्य बहस और मुद्दे',
        decades: ['1990s', '2000s', '2010s' ],
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
        hindiTitle: 'सोलिडैरिटी',
        decades: ['1980s', '1990s', '2000s', '2010s' ],
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
        hindiTitle: 'उत्सव',
        decades: ['1980s', '2000s', '2010s' ],
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
        hindiTitle: 'पुरालेख',
        decades: [],
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
