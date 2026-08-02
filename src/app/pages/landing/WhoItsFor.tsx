import { asset } from '@/lib/asset'
import { Reveal } from './Reveal'
import './WhoItsFor.css'

/**
 * Who it's for — three audience columns mirroring the main site's cards:
 * portrait over a 2px ink rule, then role → tagline → one body line. White
 * statement surface (no texture). The column ids are the nav pill's scroll
 * targets.
 *
 * Portraits are curated stock placeholders for now — swap for real member
 * photos as the founding members come in.
 */
const AUDIENCES = [
  {
    id: 'for-creators',
    img: '/stock/creators.jpg',
    alt: 'A creator at work',
    eyebrow: 'Creators',
    h3: (
      <>
        Get hired for <i>your work.</i>
      </>
    ),
    copy: 'Build a profile around your skills and availability, connect with relevant brands, and keep 100% of what you earn.',
  },
  {
    id: 'for-brands',
    img: '/stock/brands.jpg',
    alt: 'A brand marketing team at work',
    eyebrow: 'Brands',
    h3: (
      <>
        Get a vetted shortlist <i>in days.</i>
      </>
    ),
    copy: 'Post a brief or search directly to discover vetted creators matched by skills, availability, and fit.',
  },
  {
    id: 'for-agencies',
    img: '/stock/agencies.jpg',
    alt: 'A creative agency team',
    eyebrow: 'Agencies',
    h3: (
      <>
        Hire vetted talent for <i>every role.</i>
      </>
    ),
    copy: 'A single workspace to build flexible creative teams across roles, projects, and campaigns.',
  },
]

export function WhoItsFor() {
  return (
    <section id="who" className="who" aria-label="Who it's for">
      <div className="who-in">
        <Reveal as="p" className="who-kicker">
          Who it&rsquo;s for
        </Reveal>
        <Reveal as="h2" className="who-h2">
          Built for creators, brands, and <i>agencies alike.</i>
        </Reveal>

        <div className="who-cols">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.id} id={a.id} delay={i * 0.08} className="who-col">
              <img
                className="who-portrait"
                src={asset(a.img)}
                alt={a.alt}
                width={400}
                height={210}
                loading="lazy"
              />
              <div className="who-body">
                <div className="who-eyebrow">{a.eyebrow}</div>
                <h3 className="who-h3">{a.h3}</h3>
                <p className="who-copy">{a.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
