import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kpj2006.github.io',
  base: '/me',
  trailingSlash: 'always',
  integrations: [sitemap({ changefreq: 'weekly', priority: 0.7, lastmod: new Date(),
    serialize: (item) => (item.url.endsWith('/me/') ? { ...item, priority: 1.0, changefreq: 'daily' } : item) })],
  vite: { plugins: [tailwindcss()] },
});
