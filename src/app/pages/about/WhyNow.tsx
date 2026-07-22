import { CountUp } from '@/v2/motion/CountUp'
import { Reveal } from '../landing/Reveal'
import './WhyNow.css'

/**
 * Why now — the opportunity. A 100M+ count-up beside the discovery-path
 * visual: the three ways the market finds people today (cold DMs, referral
 * chains, guesswork — each with why it fails) collapsing into ASND as the
 * trusted layer. White surface with the engraved texture; the market figures
 * in the copy are sourced and the sources line is verbatim.
 */
export function WhyNow() {
  return (
    <section id="why" className="whynow tex" aria-label="Why now — the opportunity">
      <div className="whynow-in">
        <div className="whynow-grid">
          <div className="whynow-left">
            <Reveal className="whynow-eyebrow">Why now</Reveal>
            <Reveal className="whynow-big">
              <CountUp to={100} className="whynow-big-num" />M<span className="whynow-plus">+</span>
            </Reveal>
            <Reveal as="h2" className="whynow-h2">
              creators in India, growing <em>20%+ a year</em>.
            </Reveal>
            <Reveal as="p" className="whynow-copy">
              A market this large still finds its people through DMs, referrals, and guesswork. ASND
              is the trusted discovery layer it never had.
            </Reveal>
            <Reveal as="p" className="whynow-src">
              Sources: KPMG · Redseer (creator economy); Kofluence / IBEF (influencer marketing), 2025.
            </Reveal>
          </div>

          <Reveal className="whynow-path" delay={0.1}>
            <p className="whynow-path-label">How discovery works today</p>
            <div className="whynow-old-row">
              <span className="whynow-old-t">Cold DMs</span>
              <span className="whynow-old-d">No vetting, no context</span>
            </div>
            <div className="whynow-old-row">
              <span className="whynow-old-t">Referral chains</span>
              <span className="whynow-old-d">One person’s network, capped</span>
            </div>
            <div className="whynow-old-row">
              <span className="whynow-old-t">Guesswork</span>
              <span className="whynow-old-d">A portfolio can’t show reliability</span>
            </div>
            <div className="whynow-path-join" aria-hidden="true">
              <svg width="16" height="22" viewBox="0 0 16 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 1v16" />
                <path d="M3 13.5L8 19l5-5.5" />
              </svg>
            </div>
            <div className="whynow-asnd">
              <div className="whynow-asnd-glow" aria-hidden="true" />
              <p className="whynow-asnd-k">The trusted discovery layer</p>
              <p className="whynow-asnd-line">Vetted people, searchable by craft, with proof they deliver.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
