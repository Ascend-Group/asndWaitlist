import { Reveal } from '../landing/Reveal'
import './Story.css'

/*
 * /about — three chapters, told plainly: the problem → the solution → the
 * story. Copy is ported from the main site's rebuilt About page (41 interviews,
 * 2025; founded 2026; Mumbai first; subscription, never a commission). The
 * people chapter waits until real founder photos land in this repo.
 */

function Eyebrow({ n, label, dark = false }: { n: string; label: string; dark?: boolean }) {
  return (
    <div className={dark ? 'abs-eyebrow abs-eyebrow--dark' : 'abs-eyebrow'}>
      <span className="abs-eyebrow-n">{n}</span>
      <span className="abs-eyebrow-l">{label}</span>
    </div>
  )
}

/* ── 01 · The problem ─────────────────────────────────────────────────────── */

export function Problem() {
  return (
    <section id="problem" className="abp" aria-label="The problem">
      <div className="abp-in">
        <Reveal>
          <Eyebrow n="01" label="The problem" />
          <h2 className="abp-h2">Finding creative people still works by asking around.</h2>
        </Reveal>
        {/* Two short paragraphs, one side of the problem each: first the
            brands' side, then the creators'. One idea per sentence. */}
        <Reveal as="p" className="abp-lead" delay={0.06}>
          Today, finding a creator means asking around and sending cold messages.
          A shortlist takes weeks to build. Even then, it is a guess. So brands
          hire the same few people again and again.
        </Reveal>
        <Reveal as="p" className="abp-lead" delay={0.1}>
          Creators have it worse. Their best work goes unseen, because feeds rank
          followers, not work. And when a job comes, middlemen can take 20 to 50
          percent of the fee.
        </Reveal>
        <Reveal as="p" className="abp-foot" delay={0.14}>
          From 41 interviews with creators, brands and agencies in 2025.
        </Reveal>
      </div>
    </section>
  )
}

/* ── 02 · The solution ────────────────────────────────────────────────────── */

const RULES = [
  {
    n: '01',
    title: 'A person reviews every application.',
    sub: 'No automated screening. Someone looks at the work and decides. That is what vetted means here.',
  },
  {
    n: '02',
    title: 'Members vouch for each other.',
    sub: 'A vouch comes from real work done together. It is the part a portfolio cannot show.',
  },
  {
    n: '03',
    title: 'Availability is upfront.',
    sub: 'Every profile shows niche, city, availability and lead time. Follower counts appear nowhere.',
  },
  {
    n: '04',
    title: 'A subscription, never a commission.',
    sub: 'Members pay a flat subscription. We never take a cut, so members keep the full fee.',
  },
]

export function Solution() {
  return (
    /* id="how" is the stable anchor the nav and footer point at. */
    <section id="how" className="abs tex-dark" aria-label="The solution">
      <div className="abs-in">
        <div>
          <Reveal>
            <Eyebrow n="02" label="The solution" dark />
            <h2 className="abs-h2">We built ASND to fix this.</h2>
          </Reveal>
          <Reveal as="p" className="abs-lead" delay={0.06}>
            ASND is a vetted network of creators. Brands post a brief and get a
            shortlist of people who fit it and are available. Four rules make it
            work.
          </Reveal>
        </div>
        <div className="abs-list">
          {RULES.map((r, i) => (
            <Reveal className="abs-rule" delay={i * 0.07} key={r.n}>
              <span className="abs-rule-n">{r.n}</span>
              <div>
                <div className="abs-rule-title">{r.title}</div>
                <div className="abs-rule-sub">{r.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 03 · The story — text only, in the letter's voice ────────────────────── */

export function Story() {
  return (
    <section id="story" className="abl tex" aria-label="The story behind ASND">
      <div className="abl-in">
        <Reveal className="abl-side">
          <Eyebrow n="03" label="The story" />
          <h2 className="abl-h2">We kept hearing the same problem.</h2>
        </Reveal>
        <Reveal className="abl-body" delay={0.08}>
          <p>
            Through 2025 we sat down with 41 people who make creative work happen.
            Creators, brands and agencies. We asked everyone the same question:{' '}
            <em>how do you actually find each other?</em>
          </p>
          <p>
            Everyone described the same problem from a different side. Brands lost weeks
            to cold DMs and guesswork. Agencies kept calling the same few people they
            already trusted, because trying someone new felt risky. Creators did good
            work that nobody saw.
          </p>
          <p>
            Nobody asked for another feed. People asked for something smaller. A short
            list of people they could trust, with niche and availability clear upfront.
          </p>
          <p>
            So in 2026 we started building ASND. Mumbai comes first. We only add members
            as fast as a person can properly vet them. That is the story so far.
          </p>
          <div className="abl-signoff">
            {/* The dash here is an attribution convention, not prose punctuation. */}
            <div className="abl-signoff-name">— The ASND team</div>
            <div className="abl-signoff-meta">2026</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
