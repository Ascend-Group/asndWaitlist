import { resolve } from 'path'
import { defineConfig } from 'vite'

// Relative base keeps the bundle working at a domain root and under the
// GitHub Pages project subpath.
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        comingSoon: resolve(__dirname, 'coming-soon.html'),
        terms: resolve(__dirname, 'legal/terms-conditions.html'),
        privacy: resolve(__dirname, 'legal/privacy-policy.html'),
      },
    },
  },
})
