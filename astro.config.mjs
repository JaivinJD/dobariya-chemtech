// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dobariyachemtech.com',
  // /thanks is the form confirmation page, so it stays out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/thanks') && !page.includes('/404') && !page.includes('/brochure-print') })],
});