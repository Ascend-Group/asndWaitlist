import { Reveal } from './Reveal'
import './TheAsk.css'

const ROLES = [
  {
    id: 'creator',
    title: 'I’m a creator',
    sub: 'Get hired for your work.',
    icon: <><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></>,
  },
  {
    id: 'brand',
    title: 'I’m a brand',
    sub: 'Get a vetted shortlist.',
    icon: <><path d="M3 21V7l9-4 9 4v14" /><path d="M9 21v-6h6v6" /></>,
  },
  {
    id: 'agency',
    title: 'I’m an agency',
    sub: 'Hire vetted talent.',
    icon: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5" /><path d="M15.5 15c2.5.3 4.5 1.8 4.5 5" /></>,
  },
]

/**
 * The ask — the closing ink bookend. End on the ask: one niche at a time, a
 * person reads every application. The role picker selects how you're applying
 * (creator default). Pricing stays honest: subscription, not a commission.
 */
export function TheAsk() {
  return (
    <section id="ask" className="ask tex-dark" aria-label="Join the waitlist">
      <div className="ask-glow" aria-hidden="true" />
      <div className="ask-in">
        <div className="ask-grid">
          <div className="ask-left">
            <Reveal className="ask-eyebrow">The waitlist</Reveal>
            <Reveal as="h2" className="ask-h2">Be one of the founding members.</Reveal>
            <Reveal as="p" className="ask-lede">
              We open one niche at a time. This is curated, not open sign-up.
            </Reveal>
            <Reveal as="p" className="ask-fine">
              Mumbai first. Access by subscription, not a commission on your work.
            </Reveal>
            <Reveal className="ask-cta">
              <a href="index.html#waitlist" className="ask-btn ask-btn--primary">Join the waitlist</a>
              <a href="about.html" className="ask-btn ask-btn--secondary">Read our story</a>
            </Reveal>
          </div>

          <Reveal className="ask-picker" delay={0.08}>
            <div className="ask-picker-label">I’m applying as…</div>
            <div className="ask-roles" role="radiogroup" aria-label="I'm applying as">
              {ROLES.map((r) => (
                <a
                  key={r.id}
                  href={`index.html?role=${r.id}#waitlist`}
                  className="ask-role"
                >
                  <span className="ask-role-ic" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {r.icon}
                    </svg>
                  </span>
                  <span className="ask-role-text">
                    <span className="ask-role-title">{r.title}</span>
                    <span className="ask-role-sub">{r.sub}</span>
                  </span>
                  <svg className="ask-role-arr" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </a>
              ))}
            </div>
            <p className="ask-picker-foot">A person reads every application.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
