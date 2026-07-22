import { asset } from '@/lib/asset'
import { Reveal } from '../landing/Reveal'
import './CreatorWall.css'

/**
 * Creator wall — a full-bleed masonry of member work. Two tall feature tiles,
 * named tiles with a gradient label, plain portrait tiles. No "Vetted" badge —
 * being in the network already implies it; the availability chip is the signal.
 *
 * Images are curated-stock placeholders for now (swap for real member work).
 */
const TILES = [
  { id: 'net-1', col: '1 / 3', row: '1 / 3', feature: true, img: '/stock/photographer.jpg', alt: 'A photographer’s editorial studio work', name: 'Riya Anand', role: 'Photographer · Mumbai', spec: 'Editorial & brand campaigns', open: true },
  { id: 'net-2', col: '3 / 5', row: '1 / 2', img: '/stock/stylist.jpg', alt: 'A stylist at the rack', name: 'Aanya Rao', role: 'Stylist · head-to-toe looks' },
  { id: 'net-3', col: '5 / 6', row: '1 / 2', img: '/stock/photographer2.jpg', alt: 'A member portrait' },
  { id: 'net-4', col: '6 / 7', row: '1 / 2', img: '/stock/portrait-1.jpg', alt: 'A creative professional' },
  { id: 'net-5', col: '7 / 9', row: '1 / 3', feature: true, img: '/stock/artdirector.jpg', alt: 'An art director’s campaign work', name: 'Mira Sethi', role: 'Art Director · Mumbai', spec: 'Launches & lookbooks' },
  { id: 'net-6', col: '3 / 4', row: '2 / 3', img: '/stock/stylist2.jpg', alt: 'A member portrait' },
  { id: 'net-7', col: '4 / 6', row: '2 / 3', img: '/stock/editor.jpg', alt: 'An editor’s film work', name: 'Dev Khanna', role: 'Editor · long-form & reels' },
  { id: 'net-8', col: '6 / 7', row: '2 / 3', img: '/stock/editor2.jpg', alt: 'A member portrait' },
]

export function CreatorWall() {
  return (
    <section className="net tex" aria-label="Inside the network">
      <div className="net-head-wrap">
        <div className="net-head">
          <div>
            <Reveal className="net-eyebrow">Inside the network</Reveal>
            <Reveal as="h2" className="net-h2">
              Real people. Real work. <em>Already vouched for.</em>
            </Reveal>
          </div>
          <Reveal as="span" className="net-link-wrap">
            <a href="index.html#waitlist" className="net-link">Join the waitlist →</a>
          </Reveal>
        </div>
      </div>

      <Reveal className="net-grid">
        {TILES.map((t) => (
          <div
            key={t.id}
            className={`net-tile${t.feature ? ' net-tile--feature' : ''}`}
            style={{ gridColumn: t.col, gridRow: t.row }}
          >
            <img className="net-img" src={asset(t.img)} alt={t.alt} loading="lazy" />
            {t.open && (
              <span className="net-open"><span className="net-open-dot" aria-hidden="true" />Open now</span>
            )}
            {t.name && (
              <div className={`net-label${t.feature ? ' net-label--feature' : ''}`}>
                <div className="net-name">{t.name}</div>
                <div className="net-role">{t.role}</div>
                {t.spec && <div className="net-spec">{t.spec}</div>}
              </div>
            )}
          </div>
        ))}
      </Reveal>

      <div className="net-cap-wrap">
        <Reveal as="p" className="net-cap">
          A sample of the work. Every member is reviewed by a person, or vouched for by someone
          already inside.
        </Reveal>
      </div>
    </section>
  )
}
