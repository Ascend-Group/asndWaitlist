import { Nav } from '@/v2/sections/Nav'
import { Footer } from '@/v2/sections/Footer'
import { asset } from '@/lib/asset'
import { Reveal } from './landing/Reveal'
import { WhyNow } from './about/WhyNow'
import { Cost } from './about/Cost'
import { Solution } from './about/Solution'
import { HowItWorks } from './about/HowItWorks'
import { Compare } from './about/Compare'
import { CreatorWall } from './about/CreatorWall'
import { TheAsk } from './landing/TheAsk'
import './about/About.css'

/**
 * /about — the story behind ASND, copy unchanged from the app's About page: why
 * now, what the noise costs, the filter, how it works, the honest comparison,
 * the people inside — ending on the same ask (repurposed to the waitlist).
 *
 * `.asnd-ink-root` scopes the ink-blue token set + engraved textures; brings its
 * own Nav/Footer. This is a static page, so in-page anchors (#how, #why) resolve
 * natively — no router hash handling needed.
 */
export function About() {
  return (
    <div className="asnd-ink-root bg-base text-text">
      <Nav />
      <main>
        <header className="about-intro tex">
          <div className="about-intro-in">
            <Reveal className="about-intro-copy">
              <h1 className="about-h1">The story behind the network.</h1>
              <p className="about-sub">
                Why finding the right creative is still broken, what that costs
                brands and creators, and the filter we built instead — the full
                argument, end to end.
              </p>
            </Reveal>
            <Reveal className="about-photos" delay={0.08}>
              <figure className="about-photo about-photo--a">
                <img src={asset('stock/event-gala.jpg')} alt="A store-opening event covered by a member photographer" loading="eager" />
                <figcaption>Store opening · Amara Osei</figcaption>
              </figure>
              <figure className="about-photo about-photo--b">
                <img src={asset('stock/theo-djset.jpg')} alt="Theo Adeyemi playing a live set" loading="eager" />
                <figcaption>Boiler Room set · Theo Adeyemi</figcaption>
              </figure>
              <figure className="about-photo about-photo--c">
                <img src={asset('stock/onset-studio.jpg')} alt="A member crew on set during a studio campaign" loading="eager" />
                <figcaption>On set · studio campaign</figcaption>
              </figure>
            </Reveal>
          </div>
        </header>
        <WhyNow />
        <Cost />
        <Solution />
        <HowItWorks />
        <Compare />
        <CreatorWall />
        <TheAsk />
      </main>
      <Footer />
    </div>
  )
}
