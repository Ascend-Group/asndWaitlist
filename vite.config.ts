import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// Relative base ('./') keeps every built asset URL relative, so the same bundle
// works at a domain root (Cloudflare Pages, custom domain) AND under a project
// subpath (https://ascend-group.github.io/asndWaitlist/). Public assets are
// referenced through `src/lib/asset.ts` (import.meta.env.BASE_URL) for the same
// reason. Two real HTML entry points -> a static MPA, no client router, no
// SPA-404 handling needed on any static host.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        about: fileURLToPath(new URL('./about.html', import.meta.url)),
      },
    },
  },
})
