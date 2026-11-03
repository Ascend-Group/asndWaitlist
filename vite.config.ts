import { defineConfig } from 'vite'

// Relative base keeps the bundle working at a domain root and under the
// GitHub Pages project subpath.
export default defineConfig({
  base: './',
})
