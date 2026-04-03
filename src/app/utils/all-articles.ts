import { articlesSummary } from "./all-articles-summary";
import { r2FetchArticleImgURL } from "./constants";
import { article } from "./data-model";
import { RawArticles } from "./raw-articles";
import { findById } from "./utils";


export const articles: article[] = articlesSummary.map(summary => ({
    id: summary.id,
    title: {
        en: summary.title.en,
        hi: summary.title.hi
    },
    subtitle: { en: summary.subtitle.en, hi: summary.subtitle.hi },
    publishedDate: { en: summary.publishedDate.en, hi: summary.publishedDate.hi },
    value: findById(RawArticles, summary.id, 'id')?.value ?? '',
    categoryIdList: summary.categoryIdList,
    subCategoryIdList: summary.subCategoryIdList
}));
