/**
 * Shared boot module imported by both page entries. Loads the self-hosted brand
 * fonts (via @fontsource — bundled + hashed by Vite, so they resolve at any
 * base), the ASND ink-blue stylesheet graph, and wires the two engraved-texture
 * SVGs into CSS custom properties (base.css reads them as var(--tex-swirl-*),
 * which keeps the texture URLs base-relative instead of hardcoded to '/').
 */

// Cormorant Garamond — display face (500, 600 + italics used across headings).
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/500-italic.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/cormorant-garamond/600-italic.css'
// Hanken Grotesk — body / UI.
import '@fontsource/hanken-grotesk/400.css'
import '@fontsource/hanken-grotesk/500.css'
import '@fontsource/hanken-grotesk/600.css'
import '@fontsource/hanken-grotesk/700.css'
import '@fontsource/hanken-grotesk/400-italic.css'
import '@fontsource/hanken-grotesk/500-italic.css'
// Poiret One — the ASND wordmark.
import '@fontsource/poiret-one/400.css'
// Faux third-party brand wordmarks used on the About comparison.
import '@fontsource/oswald/500.css'
import '@fontsource/oswald/600.css'
import '@fontsource/oswald/700.css'
import '@fontsource/bebas-neue/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

// The ink-blue token set + Tailwind + textures (order matters: tokens before base).
import './styles/index.css'

// Base-relative texture URLs -> CSS variables consumed by asnd-v2/base.css.
import texSwirlInk from './assets/texture-swirl-ink.svg'
import texSwirlLight from './assets/texture-swirl-light.svg'

const root = document.documentElement
root.style.setProperty('--tex-swirl-ink', `url(${texSwirlInk})`)
root.style.setProperty('--tex-swirl-light', `url(${texSwirlLight})`)
