const fs = require('fs');
const path = require('path');

// Load your articles summary — we need id, title, subtitle
// Point this to the compiled JS or duplicate the data as JSON
// Easiest: create a parallel JSON file (see note after this step)
const articlesSummary = require('../src/assets/articles-summary.json');
const articlesDir = path.join(__dirname, '../src/assets/content/article-content');
const outputPath = path.join(__dirname, '../src/assets/search-index.json');

function extractText(obj) {
  const parts = [];
  const walk = (node) => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { node.forEach(walk); return; }
    for (const key of Object.keys(node)) {
      const val = node[key];
      if (key === 'en' || key === 'hi') {
        if (typeof val === 'string') parts.push(val);
        else if (Array.isArray(val)) val.forEach(v => typeof v === 'string' && parts.push(v));
      } else {
        walk(val);
      }
    }
  };
  walk(obj);
  return parts.join(' ');
}

const index = articlesSummary.map(article => {
  const filePath = path.join(articlesDir, `${article.id}.json`);
  let contentEn = '';
  let contentHi = '';

  if (fs.existsSync(filePath)) {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    // Extract english and hindi separately for language-aware search
    contentEn = extractTextForLang(json, 'en');
    contentHi = extractTextForLang(json, 'hi');
  }

  return {
    id: article.id,
    titleEn: article.title?.en ?? '',
    titleHi: article.title?.hi ?? '',
    subtitle: article.subtitle ?? '',
    publishedDate: article.publishedDate ?? '',
    contentEn,
    contentHi
  };
});

function extractTextForLang(obj, lang) {
  const parts = [];
  const walk = (node) => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { node.forEach(walk); return; }
    for (const key of Object.keys(node)) {
      const val = node[key];
      if (key === lang) {
        if (typeof val === 'string') parts.push(val);
        else if (Array.isArray(val)) val.forEach(v => typeof v === 'string' && parts.push(v));
      } else {
        walk(val);
      }
    }
  };
  walk(obj);
  return parts.join(' ');
}

fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));
console.log(`✅ Search index built: ${index.length} articles → src/assets/search-index.json`);