import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'
import { CountUp } from '@/v2/motion/CountUp'
import { Reveal } from '../landing/Reveal'
import './Cost.css'

const PROBLEMS = [
  { n: '01', title: 'Too much noise', body: 'Dozens of collab DMs a day, and only a fraction worth a second look.' },
  { n: '02', title: 'No trust signal', body: 'A portfolio shows talent. It can’t tell you if someone is reliable to work with.' },
  { n: '03', title: 'Gatekept', body: 'The best talent often sits behind agencies that favour their own roster.' },
]

/** The interactive "Collab requests" card — noise blurs away, the fit surfaces. */
function NoiseCard() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [filtered, setFiltered] = useState(false)

  // Auto-play the filter once when scrolled into view (~1.5s) — shows, don't tell.
  useEffect(() => {
    if (!inView || reduce) return
    setFiltered(true)
    const t = setTimeout(() => setFiltered(false), 1500)
    return () => clearTimeout(t)
  }, [inView, reduce])

  return (
    <div
      ref={ref}
      className={`noise-card${filtered ? ' is-filtered' : ''}`}
      onMouseEnter={() => setFiltered(true)}
      onMouseLeave={() => setFiltered(false)}
      onFocus={() => setFiltered(true)}
      onBlur={() => setFiltered(false)}
      tabIndex={0}
      role="img"
      aria-label="A pile of collab DMs with the one that actually fits buried among them. Filtering surfaces the right one."
    >
      <div className="noise-head">
        <span className="noise-title">Collab requests</span>
        <span className="noise-badge">{filtered ? '1 that fits' : '15+ today'}</span>
      </div>
      <div className="noise-rows">
        <div className="noise-row"><span className="noise-ava" /><div className="noise-bars"><span className="noise-bar" /><span className="noise-bar noise-bar--2" /></div></div>
        <div className="noise-row"><span className="noise-ava" /><div className="noise-bars"><span className="noise-bar" /><span className="noise-bar noise-bar--2" /></div></div>
        <div className="noise-signal">
          <span className="noise-signal-ava" aria-hidden="true">✓</span>
          <div className="noise-signal-info">
            <div className="noise-signal-title">The one that actually fits</div>
            <div className="noise-signal-sub">{filtered ? 'Surfaced in seconds, not weeks.' : 'Buried under everything else'}</div>
          </div>
        </div>
        <div className="noise-row"><span className="noise-ava" /><div className="noise-bars"><span className="noise-bar" /><span className="noise-bar noise-bar--2" /></div></div>
        <div className="noise-row"><span className="noise-ava" /><div className="noise-bars"><span className="noise-bar" /><span className="noise-bar noise-bar--2" /></div></div>
      </div>
      <p className="noise-cap">
        {filtered ? (
          'This is the one. ASND surfaces it.'
        ) : (
          <>Maybe 10 to 20% are worth looking into. <span className="noise-cap-hint">Hover to filter →</span></>
        )}
      </p>
    </div>
  )
}

/**
 * The cost — why discovery is broken, quantified with sourced numbers. A
 * numbered list + the interactive noise card, then Later-style hard-shadow stat
 * boxes (15+ / 2+ weeks / up to 50%), then the trust pull-quote. Cream surface.
 */
export function Cost() {
  return (
    <section id="problem" className="cost tex" aria-label="The cost of broken discovery">
      <div className="cost-in">
        <div className="cost-intro">
          <div className="cost-text">
            <Reveal className="cost-eyebrow">Why discovery is broken</Reveal>
            <Reveal as="h2" className="cost-h2">
              Finding the right person costs you days you don’t have.
            </Reveal>
            <Reveal as="p" className="cost-lede">
              When you can’t find them fast, you fall back on whatever’s loudest. That’s the trap.
            </Reveal>
            <Reveal className="cost-list">
              {PROBLEMS.map((p) => (
                <div className="cost-item" key={p.n}>
                  <span className="cost-num">{p.n}</span>
                  <div>
                    <div className="cost-item-title">{p.title}</div>
                    <div className="cost-item-body">{p.body}</div>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <NoiseCard />
          </Reveal>
        </div>

        <Reveal className="cost-stats">
          <p className="cost-stats-label">What 50+ conversations taught us</p>
          <div className="cost-stats-grid">
            <div className="cost-stat">
              <svg className="cost-stat-ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 01-9 8.4 9 9 0 01-4-1L3 20l1.3-4a8.4 8.4 0 01-1-4A8.4 8.4 0 0112 3.5a8.4 8.4 0 019 8z" /></svg>
              <div className="cost-stat-num"><CountUp to={15} />+</div>
              <div className="cost-stat-label">collab DMs a day for some brands, most of it noise.</div>
            </div>
            <div className="cost-stat">
              <svg className="cost-stat-ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              <div className="cost-stat-num"><CountUp to={2} />+ <span className="cost-stat-unit">weeks</span></div>
              <div className="cost-stat-label">just to reach a shortlist, with about three days lost to discovery alone.</div>
            </div>
            <div className="cost-stat">
              <svg className="cost-stat-ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M8.1 8.1L20 20M8.1 15.9L20 4" /></svg>
              <div className="cost-stat-num">up to <CountUp to={50} />%</div>
              <div className="cost-stat-label">lost to agency commissions sitting between you and the talent.</div>
            </div>
          </div>
        </Reveal>

        <Reveal as="figure" className="cost-quote">
          <p className="cost-quote-text">
            “People don’t hire the best portfolio. They hire the person they trust.”
          </p>
          <figcaption className="cost-quote-attrib">
            <span className="cost-quote-rule" aria-hidden="true" />
            <span className="cost-quote-label">Event marketer</span>
          </figcaption>
        </Reveal>
      </div>
    </section>
  )
}
