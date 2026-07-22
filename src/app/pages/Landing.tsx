import { Nav } from '@/v2/sections/Nav'
import { Footer } from '@/v2/sections/Footer'
import { Hero } from './landing/Hero'
import { WhoItsFor } from './landing/WhoItsFor'
import { TheAsk } from './landing/TheAsk'

/**
 * The ASND waitlist landing — the marketing landing reframed around a single
 * action: joining the waitlist. Hero (claim + capture form), who it's for (the
 * three audiences), and the closing ask. The live-search panel, member
 * directory, and application flow from the real app are intentionally gone —
 * this is a static, backend-free page. The full story lives on /about.
 *
 * `.asnd-ink-root` scopes the ink-blue token set + engraved textures.
 */
export function Landing() {
  return (
    <div className="asnd-ink-root bg-base text-text">
      <Nav />
      <main>
        <Hero />
        <WhoItsFor />
        <TheAsk />
      </main>
      <Footer />
    </div>
  )
}
