import { motion, useReducedMotion, type Variants } from 'motion/react'
import { createElement, type ReactNode } from 'react'

/** Vision reveal curve: cubic-bezier(.2,.7,.2,1). */
const EASE = [0.2, 0.7, 0.2, 1] as const

const MOTION = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
  figure: motion.figure,
  ul: motion.ul,
  li: motion.li,
} as const

type Tag = keyof typeof MOTION

interface RevealProps {
  children: ReactNode
  /** Semantic element to render (keeps headings/lists real). */
  as?: Tag
  id?: string
  /** Extra delay before this reveal starts (seconds) — use for staggering. */
  delay?: number
  /** Enter offset in px (rise distance). */
  offset?: number
  /** Reveal duration (seconds). */
  duration?: number
  once?: boolean
  /** Fraction visible before triggering. */
  amount?: number
  className?: string
  /** Forwarded to the rendered element — lets a revealed block carry ARIA
   *  semantics (e.g. role="table" on the comparison grid on /about). */
  role?: string
  'aria-label'?: string
}

/**
 * Reveal — rises an element in on scroll. Transform ONLY (opacity stays 1) so a
 * throttled/paused timeline (background tab, headless render) can never leave
 * content stuck invisible — the founder-vision pitfall. Honors reduced motion
 * by rendering the final state immediately.
 */
export function Reveal({
  children,
  as = 'div',
  id,
  delay = 0,
  offset = 18,
  duration = 0.7,
  once = true,
  amount = 0.18,
  className,
  role,
  'aria-label': ariaLabel,
}: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return createElement(as, { className, id, role, 'aria-label': ariaLabel }, children)
  }

  const M = MOTION[as] ?? motion.div
  const variants: Variants = {
    hidden: { y: offset },
    shown: { y: 0, transition: { duration, delay, ease: EASE } },
  }

  return (
    <M
      id={id}
      className={className}
      role={role}
      aria-label={ariaLabel}
      initial="hidden"
      whileInView="shown"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </M>
  )
}
