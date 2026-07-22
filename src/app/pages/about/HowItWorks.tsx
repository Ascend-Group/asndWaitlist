import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'
import { Reveal } from '../landing/Reveal'
import './HowItWorks.css'

type FlowItem = { chip: string; bad?: boolean; payoff?: boolean } | { arrow: true }

const WITHOUT: FlowItem[] = [
  { chip: 'Instagram' }, { arrow: true },
  { chip: 'DMs' }, { arrow: true },
  { chip: 'Referrals' }, { arrow: true },
  { chip: 'Calls' }, { arrow: true },
  { chip: 'Maybe a fit', bad: true },
]
const WITH: FlowItem[] = [
  { chip: 'Brief' }, { arrow: true },
  { chip: 'Curated matches' }, { arrow: true },
  { chip: 'Connect' }, { arrow: true },
  { chip: 'Start working ✓', payoff: true },
]

/** Reveals its chips/arrows one at a time when scrolled in — slow feels laborious,
 *  fast feels effortless. Safety: forces everything visible if the trigger never fires. */
function FlowTrack({ items, speed, variant }: { items: FlowItem[]; speed: 'slow' | 'fast'; variant: 'light' | 'dark' }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [shown, setShown] = useState(reduce ? items.length : 0)

  useEffect(() => {
    if (reduce) { setShown(items.length); return }
    if (!inView) return
    const step = speed === 'slow' ? 215 : 125
    const timers: ReturnType<typeof setTimeout>[] = []
    for (let i = 1; i <= items.length; i++) timers.push(setTimeout(() => setShown(i), step * i))
    return () => timers.forEach(clearTimeout)
  }, [inView, reduce, speed, items.length])

  // Failsafe: never leave the track blank if the in-view trigger doesn't fire.
  useEffect(() => {
    const t = setTimeout(() => setShown((s) => (s === 0 ? items.length : s)), 5000)
    return () => clearTimeout(t)
  }, [items.length])

  return (
    <div ref={ref} className={`flow-track flow-track--${variant}`}>
      {items.map((it, idx) =>
        'arrow' in it ? (
          <span key={idx} className={`flow-arrow${idx < shown ? ' is-shown' : ''}`} aria-hidden="true">→</span>
        ) : (
          <span
            key={idx}
            className={`flow-chip${it.bad ? ' flow-chip--bad' : ''}${it.payoff ? ' flow-chip--payoff' : ''}${idx < shown ? ' is-shown' : ''}`}
          >
            {it.chip}
          </span>
        ),
      )}
    </div>
  )
}

const FEATURES = [
  {
    title: 'Vetted and invite-only',
    body: 'Everyone here was reviewed by a human, or vouched for by a member.',
    icon: <><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></>,
  },
  {
    title: 'Search by fit',
    body: 'Filter by craft, style, and availability, not by who posts the most.',
    icon: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>,
  },
  {
    title: 'Availability at a glance',
    body: 'See who’s open now, booking ahead, or being selective before you reach out.',
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  },
  {
    title: 'Connect directly',
    body: 'Reach the person, not a middle layer taking a cut of the work.',
    icon: <><path d="M7 11V8a5 5 0 0110 0v3" /><rect x="5" y="11" width="14" height="9" rx="2" /></>,
  },
]

/**
 * How it works — the real mechanic and the contrast. Two flow cards (the weary
 * "Without ASND" chain vs the fast "With ASND" chain, staggered to feel that
 * way), then four signal cards. Light paper + texture.
 */
export function HowItWorks() {
  return (
    <section id="how" className="how tex" aria-label="How it works">
      <div className="how-in">
        <Reveal as="h2" className="how-h2">
          From a brief to the right people, in one clear path.
        </Reveal>
        <Reveal as="p" className="how-sub">
          Same goal, two routes. One of them you already know too well.
        </Reveal>

        <div className="how-flows">
          <Reveal className="how-flow how-flow--without">
            <div className="how-flow-label how-flow-label--without">Without ASND</div>
            <FlowTrack items={WITHOUT} speed="slow" variant="light" />
            <p className="how-flow-foot">Two weeks, a lot of guesswork, no guarantee at the end.</p>
          </Reveal>
          <Reveal className="how-flow how-flow--with" delay={0.08}>
            <div className="how-flow-label how-flow-label--with">With ASND</div>
            <FlowTrack items={WITH} speed="fast" variant="dark" />
            <p className="how-flow-foot how-flow-foot--with">
              A shortlist of people already vetted for fit and reliability.
            </p>
          </Reveal>
        </div>

        <div className="how-features">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07} className="how-feature">
              <svg className="how-feature-ic" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {f.icon}
              </svg>
              <div className="how-feature-title">{f.title}</div>
              <div className="how-feature-body">{f.body}</div>
            </Reveal>
          ))}
        </div>

        <Reveal as="figure" className="how-quote">
          <p className="how-quote-text">
            “Instagram isn’t equipped to be a professional, industry-standard site.”
          </p>
          <figcaption className="how-quote-attrib">
            <span className="how-quote-rule" aria-hidden="true" />
            <span className="how-quote-label">Photographer</span>
          </figcaption>
        </Reveal>
      </div>
    </section>
  )
}
