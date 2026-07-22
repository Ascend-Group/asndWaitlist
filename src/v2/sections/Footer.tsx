import { FooterWordmark } from '../components/FooterWordmark'
import './Footer.css'

// ─── Link column data — every target is a real page or an in-page anchor ──────

interface FootLink {
  label: string
  href: string
  external?: boolean
}

const FOOTER_COLS: { id: string; heading: string; links: FootLink[] }[] = [
  {
    id: 'asnd',
    heading: 'ASND',
    links: [
      { label: 'Why now', href: 'about.html#why' },
      { label: 'How it works', href: 'about.html#how' },
      { label: 'The full story', href: 'about.html' },
    ],
  },
  {
    id: 'waitlist',
    heading: 'Waitlist',
    links: [
      { label: 'Join the waitlist', href: 'index.html#waitlist' },
      { label: 'For brands', href: 'index.html#waitlist' },
      { label: 'For creators', href: 'index.html#waitlist' },
    ],
  },
  {
    id: 'connect',
    heading: 'Connect',
    links: [
      { label: 'Instagram', href: 'https://instagram.com/asnd', external: true },
      { label: 'Email us', href: 'mailto:hello@asnd.in' },
    ],
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="site-footer tex tex--on-dark">
      <div className="footer-wrap">
        {/* ── Link grid ── */}
        <div className="foot-cols">
          {FOOTER_COLS.map((col) => (
            <nav key={col.id} className="fc" aria-label={col.heading}>
              <div className="fc-heading">{col.heading}</div>
              {col.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="fc-link"
                  {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          ))}
        </div>

        {/* ── Giant Cormorant ASND wordmark ── */}
        <FooterWordmark />

        {/* ── Base line — contact + location ── */}
        <div className="foot-base">
          <span>© 2026 ASND · Invite-only</span>
          <span className="foot-contact">
            <a href="mailto:hello@asnd.in" className="fc-link">hello@asnd.in</a>
            <a href="https://instagram.com/asnd" target="_blank" rel="noreferrer" className="fc-link">Instagram</a>
            <span>Mumbai, India</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
