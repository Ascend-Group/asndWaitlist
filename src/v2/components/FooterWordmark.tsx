import { Reveal } from '../motion'

interface FooterWordmarkProps {
  word?: string
  className?: string
}

/**
 * Oversized Cormorant wordmark at the page foot — the Later "giant wordmark"
 * mechanic in the ASND skin. Decorative (aria-hidden); the real footer around
 * it carries semantic content in Phase 3.
 */
export function FooterWordmark({ word = 'ASND', className }: FooterWordmarkProps) {
  return (
    <div className={className} style={{ overflow: 'hidden' }} aria-hidden="true">
      <Reveal amount={0.4}>
        <span
          className="font-display text-navy block select-none"
          style={{
            fontWeight: 600,
            fontSize: 'clamp(5rem, 22vw, 20rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
          }}
        >
          {word}
        </span>
      </Reveal>
    </div>
  )
}
