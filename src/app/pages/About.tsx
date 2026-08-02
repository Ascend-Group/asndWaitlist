import { Nav } from '@/v2/sections/Nav'
import { Footer } from '@/v2/sections/Footer'
import { asset } from '@/lib/asset'
import { Reveal } from './landing/Reveal'
import { Problem, Solution, Story } from './about/Story'
import { TheAsk } from './landing/TheAsk'
import './about/About.css'

/**
 * /about — the story behind ASND, mirroring the main site's rebuilt About:
 * masthead → the problem → the solution (the four rules) → the story, ending
 * on the waitlist ask. The people chapter waits until real founder photos land
 * in this repo.
 *
 * `.asnd-ink-root` scopes the ink-blue token set + engraved textures; brings
 * its own Nav/Footer. This is a static page, so in-page anchors (#how,
 * #problem) resolve natively — no router hash handling needed.
 */
export function About() {
  return (
    <div className="asnd-ink-root bg-base text-text">
      <Nav />
      <main>
        <header className="about-intro tex" aria-label="About ASND">
          <div className="about-intro-in">
            <Reveal className="about-intro-copy">
              <h1 className="about-h1">The story behind ASND.</h1>
              <p className="about-sub">
                What we heard, what we built, and who is building it.
              </p>
            </Reveal>
            <Reveal className="about-photos" delay={0.08}>
              <figure className="about-photo about-photo--a">
                <img src={asset('stock/event-gala.jpg')} alt="A store-opening event covered by a member photographer" loading="eager" />
                <figcaption>Store opening · event coverage</figcaption>
              </figure>
              <figure className="about-photo about-photo--b">
                <img src={asset('stock/live-set.jpg')} alt="A member playing a live set" loading="eager" />
                <figcaption>Live set · club night</figcaption>
              </figure>
              <figure className="about-photo about-photo--c">
                <img src={asset('stock/onset-studio.jpg')} alt="A member crew on set during a studio campaign" loading="eager" />
                <figcaption>On set · studio campaign</figcaption>
              </figure>
            </Reveal>
          </div>
        </header>
        <Problem />
        <Solution />
        <Story />
        <TheAsk />
      </main>
      <Footer />
    </div>
  )
}
