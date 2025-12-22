import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://caldon.com.au',
  // output: "static" is now the default and supports API routes
  adapter: node({ mode: 'standalone' }),
});
