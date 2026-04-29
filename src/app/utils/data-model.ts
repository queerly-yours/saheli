export interface articleList {
    id: string;
    title: {
        en: string;
        hi: string;
    };
    subtitle: {
        en: string;
        hi: string;
    };
    publishedDate: {
        en: string;
        hi: string;
    };
    isArticle: boolean;
    categoryIdList: string[];
    subCategoryIdList: string[];
    decade: string;
}

export interface subCategory {
    id: string;
    articleList: articleList[];
    categoryIdList: string[];
    description: {
        en: string[],
        hi: string[]
    };
    innerCategories?: subCategory[];
    isSubcategory: boolean;
    title: string;
    hindiTitle: string,
    decade?: string[];
    subCategoryList?: subCategory[];
}

export interface category {
    id: string;
    archiveImg: string;
    archiveList?: archive[];
    articleList: articleList[];
    hindiTitle: string;
    title: string;
    decades: string[];
    description: {
        en: string[],
        hi: string[]
    };
    hindiDescription?: string[];
    subCategoryList: subCategory[];
    isOpen: boolean;
    isCategory: boolean;
}

export interface ArchiveImage {
    url: string;
    caption: string;
    alt?: string;
}

export interface archive {
    id: string;
    title: string;
    hindiTitle?: string;
    archiveImg?: string;
    images?: ArchiveImage[];
}

export interface article {
    id: string;
    decades?: string[];
    publishedDate: {
        en: string,
        hi: string
    };
    subtitle: {
        en: string,
        hi: string
    };
    title: {
        en: string,
        hi: string
    };
    value: string;
    categoryIdList: string[];
    subCategoryIdList: string[];
}

export interface SearchItem {
  type: 'article';
  payload: article;
}

export type CategoryItem = category | subCategory;

export interface cardDetails {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    category: string;
    image: string
}