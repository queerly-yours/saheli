import { articlesSummary } from "./all-articles-summary";
import { subCategory } from "./data-model";
import { filterByArrayKeyAndIds } from "./utils";

export const subcategoriesSummary: subCategory[] = [
    {
        id: 'Subcategory30',
        articleList: filterByArrayKeyAndIds(articlesSummary, ['Subcategory30'], 'subCategoryIdList'),
        categoryIdList: ['2'],
        description: [
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus, quam non rhoncus tincidunt, nulla neque fringilla justo, quis malesuada nunc sapien eget libero. Quisque malesuada sit amet urna non iaculis. Aenean rhoncus purus et sapien gravida, et faucibus magna venenatis. Phasellus aliquam elit nec magna auctor, sed rutrum risus ultricies. Quisque aliquam eleifend dictum. Curabitur faucibus tellus sed ligula ultrices, at suscipit nunc auctor. Pellentesque consequat ex quis dui luctus, nec ornare metus pretium. Sed tincidunt dictum neque, et ultrices dui pharetra nec. Etiam gravida ultrices sollicitudin. Pellentesque semper elit vel risus facilisis, sed facilisis lectus venenatis. Nulla volutpat dolor eu lorem tempor, iaculis varius est ultrices. Phasellus placerat, mauris at laoreet consequat, nulla massa placerat magna, in fringilla lectus nisl a sem. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            'Aliquam sit amet magna nunc. Nunc id ipsum augue. Duis nunc erat, bibendum sit amet commodo vitae, luctus placerat nibh. Nulla sed tortor tincidunt, viverra arcu nec, elementum tellus. Donec posuere, quam eget dictum rhoncus, urna augue iaculis justo, finibus finibus mi dui at est. Aenean non congue libero. Mauris congue purus vitae imperdiet porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie, erat in posuere laoreet, ipsum turpis euismod dolor, eu dapibus metus arcu vel diam. Fusce congue magna nisl, ac maximus ante tristique at. Sed venenatis scelerisque odio, et vestibulum magna suscipit at. Aliquam ornare vel orci eget viverra. Quisque vitae vehicula leo. Vivamus tincidunt erat nec ultricies varius. Pellentesque rutrum ut dui at ultrices.'
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus, quam non rhoncus tincidunt, nulla neque fringilla justo, quis malesuada nunc sapien eget libero. Quisque malesuada sit amet urna non iaculis. Aenean rhoncus purus et sapien gravida, et faucibus magna venenatis. Phasellus aliquam elit nec magna auctor, sed rutrum risus ultricies. Quisque aliquam eleifend dictum. Curabitur faucibus tellus sed ligula ultrices, at suscipit nunc auctor. Pellentesque consequat ex quis dui luctus, nec ornare metus pretium. Sed tincidunt dictum neque, et ultrices dui pharetra nec. Etiam gravida ultrices sollicitudin. Pellentesque semper elit vel risus facilisis, sed facilisis lectus venenatis. Nulla volutpat dolor eu lorem tempor, iaculis varius est ultrices. Phasellus placerat, mauris at laoreet consequat, nulla massa placerat magna, in fringilla lectus nisl a sem. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            'Aliquam sit amet magna nunc. Nunc id ipsum augue. Duis nunc erat, bibendum sit amet commodo vitae, luctus placerat nibh. Nulla sed tortor tincidunt, viverra arcu nec, elementum tellus. Donec posuere, quam eget dictum rhoncus, urna augue iaculis justo, finibus finibus mi dui at est. Aenean non congue libero. Mauris congue purus vitae imperdiet porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie, erat in posuere laoreet, ipsum turpis euismod dolor, eu dapibus metus arcu vel diam. Fusce congue magna nisl, ac maximus ante tristique at. Sed venenatis scelerisque odio, et vestibulum magna suscipit at. Aliquam ornare vel orci eget viverra. Quisque vitae vehicula leo. Vivamus tincidunt erat nec ultricies varius. Pellentesque rutrum ut dui at ultrices.'
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
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