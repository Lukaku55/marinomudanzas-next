#!/usr/bin/env node
// Finds the next unpublished blog post in the queue and adds it to sitemap.ts and blog/page.tsx.
// Run by the weekly-blog-release GitHub Action every Monday.

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '../..');
const queueFile = path.join(__dirname, '../blog-queue.json');
const sitemapFile = path.join(root, 'app/sitemap.ts');
const blogPageFile = path.join(root, 'app/blog/page.tsx');

// --- Read queue ---
const queue = JSON.parse(fs.readFileSync(queueFile, 'utf-8'));

// --- Read sitemap and extract already-published slugs ---
const sitemapContent = fs.readFileSync(sitemapFile, 'utf-8');
const publishedSlugs = new Set(
  [...sitemapContent.matchAll(/"([a-z][a-z0-9-]+)"/g)].map(m => m[1])
);

// --- Find next unpublished post ---
const next = queue.find(post => !publishedSlugs.has(post.slug));
if (!next) {
  console.log('✓ Cola vacía — todos los posts ya están publicados.');
  process.exit(0);
}

// --- Verify the page file exists ---
const pageFile = path.join(root, `app/blog/${next.slug}/page.tsx`);
if (!fs.existsSync(pageFile)) {
  console.error(`✗ Falta el archivo: app/blog/${next.slug}/page.tsx`);
  process.exit(1);
}

// --- Add slug to sitemap.ts (before the closing ]; of blogSlugs array) ---
const updatedSitemap = sitemapContent.replace(
  '\n  ];\n\n  return [',
  `\n    "${next.slug}",\n  ];\n\n  return [`
);
fs.writeFileSync(sitemapFile, updatedSitemap);

// --- Add entry to app/blog/page.tsx (before itemListSchema) ---
const blogPageContent = fs.readFileSync(blogPageFile, 'utf-8');
const today = new Date().toISOString().split('T')[0];
const newEntry = `  {slug:'${next.slug}',title:${JSON.stringify(next.title)},excerpt:${JSON.stringify(next.excerpt)},date:'${today}'},`;
const updatedBlogPage = blogPageContent.replace(
  '\n];\n\nconst itemListSchema',
  `\n${newEntry}\n];\n\nconst itemListSchema`
);
fs.writeFileSync(blogPageFile, updatedBlogPage);

console.log(`✓ Publicado: ${next.slug}`);
console.log(`  Título: ${next.title}`);
