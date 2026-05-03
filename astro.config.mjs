// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Dla GitHub Pages ustaw zmienne środowiskowe:
//   SITE_URL=https://capybitcompany.github.io  BASE_PATH=/HexagonTournamentPageTest/
// Dla produkcji (minecrafthex.pl) domyślne wartości działają bez zmian.
//
// SEO / Performance:
// - compressHTML: true (Astro domyślnie; pinujemy jawnie)
// - Vite w produkcji minifikuje JS (esbuild) i CSS
// - Netlify automatycznie dodaje gzip + brotli do statycznych odpowiedzi
// - Cache-Control dla assets skonfigurowany w netlify.toml
const PRIORITY_MAP = {
  '/': { priority: 1.0, changefreq: 'daily' },
  '/hexEvent': { priority: 0.95, changefreq: 'weekly' },
  '/hexSmp': { priority: 0.9, changefreq: 'weekly' },
  '/hexHardcoreSmp': { priority: 0.85, changefreq: 'weekly' },
  '/hexHardcoreSsmp': { priority: 0.85, changefreq: 'weekly' },
  '/hexMiniGames': { priority: 0.8, changefreq: 'weekly' },
  '/hexParkour': { priority: 0.8, changefreq: 'weekly' },
  '/hexPvp': { priority: 0.8, changefreq: 'weekly' },
  '/archive': { priority: 0.8, changefreq: 'monthly' },
  '/shop': { priority: 0.75, changefreq: 'weekly' },
  '/contact': { priority: 0.7, changefreq: 'monthly' },
  '/about': { priority: 0.7, changefreq: 'monthly' },
  '/aboutShop': { priority: 0.6, changefreq: 'monthly' },
  '/devlog': { priority: 0.65, changefreq: 'weekly' },
  '/politics': { priority: 0.3, changefreq: 'yearly' },
  '/regulations': { priority: 0.3, changefreq: 'yearly' },
};

export default defineConfig({
  site: process.env.SITE_URL || 'https://www.minecrafthex.pl',
  base: process.env.BASE_PATH || '/',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: true,
    },
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.6,
      lastmod: new Date(),
      serialize(item) {
        try {
          const url = new URL(item.url);
          const path = url.pathname.replace(/\/$/, '') || '/';
          const override = PRIORITY_MAP[path];
          if (override) {
            item.priority = override.priority;
            item.changefreq = override.changefreq;
          }
        } catch {
          /* ignore */
        }
        return item;
      },
    }),
  ],
});
