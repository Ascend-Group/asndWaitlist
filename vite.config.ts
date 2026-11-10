import { defineConfig } from 'vite'
import path from 'path'

// Relative base keeps the bundle working at a domain root and under the
// GitHub Pages project subpath.
export default defineConfig({
  base: './',
  server: {
    fs: {
      strict: false
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        legalTerms: path.resolve(__dirname, 'legal/terms-conditions/index.html'),
        legalPrivacy: path.resolve(__dirname, 'legal/privacy-policy/index.html'),
        terms: path.resolve(__dirname, 'terms-and-condition/index.html'),
        termsPlural: path.resolve(__dirname, 'terms-and-conditions/index.html'),
        termsShort: path.resolve(__dirname, 'terms/index.html'),
        privacy: path.resolve(__dirname, 'privacy-policy/index.html'),
        privacyShort: path.resolve(__dirname, 'privacy/index.html'),
        notFound: path.resolve(__dirname, '404.html')
      }
    }
  },
  plugins: [
    {
      name: 'legal-pages-rewrite',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = (req.url || '').split('?')[0];
          if (url === '/terms-and-condition' || url === '/terms-and-condition/' || url === '/terms-and-conditions' || url === '/terms-and-conditions/' || url === '/terms' || url === '/terms/') {
            req.url = '/terms-and-condition/index.html';
          } else if (url === '/privacy-policy' || url === '/privacy-policy/' || url === '/privacy' || url === '/privacy/') {
            req.url = '/privacy-policy/index.html';
          } else if (url === '/legal/terms-conditions' || url === '/legal/terms-conditions/') {
            req.url = '/terms-and-condition/index.html';
          } else if (url === '/legal/privacy-policy' || url === '/legal/privacy-policy/') {
            req.url = '/privacy-policy/index.html';
          }
          next();
        });
      }
    }
  ]
})
