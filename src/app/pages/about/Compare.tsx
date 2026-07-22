import { Reveal } from '../landing/Reveal'
import './Compare.css'

const ROWS = [
  { label: 'How you’re found', cells: ['By the algorithm', 'By reach and followers', 'By craft, fit, and reliability'] },
  { label: 'Who’s inside', cells: ['Everyone', 'Mostly influencers', 'Every craft, hand-reviewed'] },
  { label: 'What it gives you', cells: ['A scroll', 'Campaign metrics', 'The right person for the brief'] },
  { label: 'Sorted by', cells: ['Clout', 'Sales lift', 'Trust and fit'], bad: true, asndStrong: true },
]

/**
 * Compare — one clean comparison. Instagram sorts by clout, campaign platforms
 * by reach; ASND sorts by trust and fit, across every craft. The ASND column is
 * the hero (navy header, tinted cells). White statement surface.
 */
export function Compare() {
  return (
    <section id="compare" className="cmp" aria-label="How ASND compares">
      <div className="cmp-in">
        <Reveal as="h2" className="cmp-h2">
          You don’t need a feed. You don’t need a dashboard. You need the right people.
        </Reveal>
        <Reveal as="p" className="cmp-sub">
          A feed sorts by clout. A campaign platform sorts by reach. We sort by who you can trust,
          across every craft.
        </Reveal>

        <div className="cmp-scroll">
        <Reveal className="cmp-table" role="table" aria-label="ASND compared with Instagram and campaign platforms">
          <div className="cmp-row cmp-row--head" role="row">
            <div className="cmp-corner" role="columnheader" />
            <div className="cmp-h cmp-h--asnd" role="columnheader">ASND</div>
            <div className="cmp-h" role="columnheader">Instagram</div>
            <div className="cmp-h" role="columnheader">Campaign platforms</div>
          </div>
          {ROWS.map((r) => (
            <div className="cmp-row" role="row" key={r.label}>
              <div className="cmp-row-h" role="rowheader">{r.label}</div>
              <div className={`cmp-cell cmp-cell--asnd${r.asndStrong ? ' cmp-cell--asnd-strong' : ''}`} role="cell">
                {r.cells[2]}
              </div>
              <div className={`cmp-cell${r.bad ? ' cmp-cell--bad' : ''}`} role="cell">{r.cells[0]}</div>
              <div className={`cmp-cell${r.bad ? ' cmp-cell--bad' : ''}`} role="cell">{r.cells[1]}</div>
            </div>
          ))}
        </Reveal>
        </div>

        <Reveal as="figure" className="cmp-quote">
          <p className="cmp-quote-text">
            “Social media is fake. I cold DM everyone and still need a call to decide.”
          </p>
          <figcaption className="cmp-quote-attrib">
            <span className="cmp-quote-rule" aria-hidden="true" />
            <span className="cmp-quote-label">Director and creator</span>
          </figcaption>
        </Reveal>
      </div>
    </section>
  )
}
