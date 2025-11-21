export interface articleList {
    id: string;
    title: string;
    subtitle: string;
    publishedDate: string;
    isArticle: boolean;
    categoryIdList?: string[];
    subCategoryIdList?: string[];
}

export interface subCategory {
    id: string;
    articleList: articleList[];
    categoryIdList: string[];
    description: string[];
    innerCategories?: subCategory[];
    isSubcategory: boolean;
    title: string;
    decade?: string[];
    subCategoryList?: subCategory[];
}

export interface category {
    id: string;
    archiveImg: string;
    archiveList?: archive[];
    articleList: articleList[];
    title: string;
    decades: string[];
    description: string[];
    subCategoryList: subCategory[];
    isOpen: boolean;
    isCategory: boolean;
}

export interface archive {
    id: string;
    title: string;
    archiveImg?: string;
}

export interface article {
    id: string;
    decades: string[];
    publishedDate: string;
    exactDate: string;
    subtitle: string;
    title: string;
    value: string;
}

export type CategoryItem = category | subCategory;