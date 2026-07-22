import { asset } from '@/lib/asset'
import { Reveal } from '../landing/Reveal'
import './Solution.css'

/** The noise field: scattered discovery channels, biased toward the filter. */
const NOISE_WORDS = [
  { t: 'Instagram DMs', l: '30%', top: 34, size: 14, op: 0.5, rot: -6 },
  { t: 'Cold calls', l: '61%', top: 70, size: 13, op: 0.38, rot: 4 },
  { t: 'Referrals', l: '37%', top: 150, size: 15, op: 0.6, rot: -2 },
  { t: 'Agency lists', l: '69%', top: 148, size: 13, op: 0.34, rot: -6 },
  { t: 'WhatsApp groups', l: '26%', top: 228, size: 13, op: 0.36, rot: 5 },
  { t: 'Guesswork', l: '55%', top: 286, size: 14, op: 0.3, rot: 2 },
]
const NOISE_DOTS = [
  { l: '24%', top: 96, s: 12, c: 'rgba(20,41,74,.2)', anim: 'asndDrift 7s ease-in-out infinite' },
  { l: '48%', top: 58, s: 8, c: 'rgba(20,41,74,.16)' },
  { l: '73%', top: 106, s: 14, c: 'rgba(20,41,74,.22)' },
  { l: '36%', top: 196, s: 9, c: 'rgba(20,41,74,.18)', anim: 'asndDrift 9s ease-in-out infinite .8s' },
  { l: '63%', top: 214, s: 7, c: 'rgba(20,41,74,.14)' },
  { l: '78%', top: 198, s: 11, c: 'rgba(20,41,74,.2)' },
  { l: '44%', top: 252, s: 7, c: 'rgba(20,41,74,.14)' },
  { l: '75%', top: 268, s: 9, c: 'rgba(20,41,74,.18)', anim: 'asndDrift 8s ease-in-out infinite .4s' },
  { l: '57%', top: 118, s: 10, c: 'rgba(155,60,55,.32)' },
  { l: '32%', top: 284, s: 8, c: 'rgba(155,60,55,.26)' },
  { l: '82%', top: 248, s: 7, c: 'rgba(155,60,55,.24)' },
]
/** Converging lines (left, all end at the membrane center y=170) + diverging (right). */
const FLOW_IN = [42, 92, 142, 198, 252, 300].map((y1, i) => ({ y1, d: [1.3, 1.65, 1.1, 1.5, 1.25, 1.75][i] }))
const FLOW_OUT = [92, 170, 248].map((y2, i) => ({ y2, d: [1.45, 1.2, 1.6][i] }))

const CARDS = [
  { initials: 'RA', name: 'Riya Anand', role: 'Photographer · Mumbai', tone: 'a' },
  { initials: 'MS', name: 'Mira Sethi', role: 'Art Director · Mumbai', tone: 'b' },
  { initials: 'DK', name: 'Dev Khanna', role: 'Editor · Bengaluru', tone: 'c' },
]

/**
 * The solution — a filtration diagram. Left→right: the noise (scattered, fading
 * discovery channels) → ASND, the filter (a navy membrane; hairlines converge in,
 * a few clean lines diverge out, a slow sheen sweeps down) → the trusted few
 * (vetted profile cards). Cool blue-gray surface; reduced-motion safe.
 */
export function Solution() {
  return (
    <section id="solution" className="sol" aria-label="The solution">
      <div className="sol-glow" aria-hidden="true" />
      <div className="sol-in">
        <Reveal className="sol-eyebrow">The solution</Reveal>
        <Reveal as="h2" className="sol-h2">
          ASND sits between the noise and the people you actually want.
        </Reveal>
        <Reveal as="p" className="sol-sub">
          We filter the whole crowd down to a network you can trust, for fit, not for followers.
        </Reveal>

        <Reveal className="sol-diagram">
          <div className="sol-headers" aria-hidden="true">
            <div className="sol-head sol-head--noise">The noise</div>
            <div className="sol-head sol-head--filter">ASND · the filter</div>
            <div className="sol-head sol-head--trust">People you can trust</div>
          </div>

          <div className="sol-zones">
            {/* LEFT — the noise */}
            <div className="sol-noise" aria-hidden="true">
              {NOISE_WORDS.map((w) => (
                <span
                  key={w.t}
                  className="sol-noise-word"
                  style={{ left: w.l, top: w.top, fontSize: w.size, color: `rgba(20,41,74,${w.op})`, transform: `rotate(${w.rot}deg)` }}
                >
                  {w.t}
                </span>
              ))}
              {NOISE_DOTS.map((d, i) => (
                <span
                  key={i}
                  className="sol-noise-dot"
                  style={{ left: d.l, top: d.top, width: d.s, height: d.s, background: d.c, animation: d.anim }}
                />
              ))}
            </div>

            {/* CENTER — the filter membrane + flow lines */}
            <div className="sol-filter">
              <svg className="sol-flow sol-flow--in" viewBox="0 0 140 340" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="asndFanL" x1="0" y1="0" x2="140" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#4E73B0" stopOpacity="0" />
                    <stop offset="1" stopColor="#4E73B0" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
                <g stroke="url(#asndFanL)" strokeWidth="1.2" fill="none" strokeDasharray="2.5 7" strokeLinecap="round">
                  {FLOW_IN.map((l, i) => (
                    <line key={i} x1="0" y1={l.y1} x2="140" y2="170" style={{ animation: `asndFlow ${l.d}s linear infinite` }} />
                  ))}
                </g>
              </svg>
              <svg className="sol-flow sol-flow--out" viewBox="0 0 140 340" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="asndFanR" x1="0" y1="0" x2="140" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#4E73B0" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#4E73B0" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <g stroke="url(#asndFanR)" strokeWidth="1.5" fill="none" strokeDasharray="2.5 7" strokeLinecap="round">
                  {FLOW_OUT.map((l, i) => (
                    <line key={i} x1="0" y1="170" x2="140" y2={l.y2} style={{ animation: `asndFlow ${l.d}s linear infinite` }} />
                  ))}
                </g>
              </svg>
              <div className="sol-membrane">
                <div className="sol-membrane-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#16294A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 5h18l-7 8.2V20l-4 1.5v-9.3z" />
                  </svg>
                </div>
                <img src={asset('brand/asnd-logo-white.png')} alt="ASND" className="sol-membrane-logo" />
              </div>
            </div>

            {/* RIGHT — the trusted few */}
            <div className="sol-trust">
              {CARDS.map((c) => (
                <div className="sol-card" key={c.initials}>
                  <div className={`sol-card-ava sol-card-ava--${c.tone}`} aria-hidden="true">{c.initials}</div>
                  <div className="sol-card-info">
                    <div className="sol-card-name">{c.name}</div>
                    <div className="sol-card-role">{c.role}</div>
                  </div>
                  <span className="sol-card-vetted" title="Vetted" aria-label="Vetted">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#2E6B4E">
                      <path d="M9 16.2l-3.8-3.8 1.4-1.4L9 13.4l7.4-7.4 1.4 1.4z" />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="sol-payoff">Hundreds reach out. The few who fit reach you.</p>
        </Reveal>
      </div>
    </section>
  )
}
