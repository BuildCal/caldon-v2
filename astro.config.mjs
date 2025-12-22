import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://caldon.com.au',
  output: 'server',
  adapter: netlify(),
});
