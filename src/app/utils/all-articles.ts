import { articlesSummary } from "./all-articles-summary";
import { r2FetchArticleImgURL } from "./constants";
import { article } from "./data-model";
import { RawArticles } from "./raw-articles";
import { findById } from "./utils";


export const articles: article[] = articlesSummary.map(summary => ({
    id: summary.id,
    title: summary.title,
    subtitle: summary.subtitle,
    publishedDate: summary.publishedDate,
    value: findById(RawArticles, summary.id, 'id')?.value ?? '',
    categoryIdList: summary.categoryIdList,
    subCategoryIdList: summary.subCategoryIdList
}));
