import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kpj2006.github.io',
  base: '/me',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
});
