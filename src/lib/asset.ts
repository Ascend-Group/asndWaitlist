/**
 * Resolve a `public/` asset path against Vite's base URL so it works at a domain
 * root AND under a project subpath (e.g. /asndWaitlist/ on GitHub Pages).
 *
 *   asset('stock/brands.jpg')  ->  './stock/brands.jpg'  (base './')
 *
 * Use for every image/file that lives in `public/`. CSS `url()` references can't
 * call this — those go through CSS custom properties set in `boot.ts` instead.
 */
export function asset(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '')
}
