import { asset } from '@/lib/asset'
import { Reveal } from './Reveal'
import './WhoItsFor.css'

/**
 * Who it's for — three sides of the same broken handshake, each grounded in a
 * real interview quote. Portrait over a 2px ink rule, then name → promise →
 * paragraph → pull-quote. White statement surface (no texture). The column ids
 * are the nav pill's scroll targets.
 *
 * Portraits are curated stock placeholders for now — swap for real member
 * photos as the founding cohort forms.
 */
const AUDIENCES = [
  {
    id: 'for-brands',
    img: '/stock/brands.jpg',
    alt: 'A brand marketing team at work',
    eyebrow: 'Brands',
    h3: 'Stop starting the search from scratch.',
    copy: 'You want a trusted shortlist you can come back to, not a fresh pile of DMs every campaign.',
    quote: 'I’d rather use the same list a thousand times than start over each time.',
    source: 'Clothing brand',
  },
  {
    id: 'for-agencies',
    img: '/stock/agencies.jpg',
    alt: 'A creative agency team',
    eyebrow: 'Agencies',
    h3: 'Source from a vetted bench.',
    copy: 'Staff a brief from people already vouched for, instead of cold calling your way to a maybe.',
    quote: 'If you curate a network like this, I won’t have to call a thousand people.',
    source: 'Agency founder',
  },
  {
    id: 'for-creators',
    img: '/stock/creators.jpg',
    alt: 'A creator at work',
    eyebrow: 'Creators',
    h3: 'Be found for your craft.',
    copy: 'Get discovered for the work and the reliability, not for how many followers you posted to.',
    quote: 'Even with good skills, nobody knows the work exists.',
    source: 'Creator',
  },
]

export function WhoItsFor() {
  return (
    <section id="who" className="who" aria-label="Who it's for">
      <div className="who-in">
        <Reveal as="h2" className="who-h2">
          Built for the people who hire, and the people who get hired.
        </Reveal>
        <Reveal as="p" className="who-sub">
          Three sides of the same broken handshake. We heard all three in the interviews.
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
                <p className="who-quote">“{a.quote}”</p>
                <div className="who-attrib">
                  <span className="who-rule" aria-hidden="true" />
                  <span className="who-attrib-label">{a.source}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
