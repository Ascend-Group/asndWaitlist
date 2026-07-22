import { motion, useReducedMotion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'
import { M } from './tokens'

interface RevealProps {
  children: ReactNode
  /** Extra delay before this reveal starts (seconds). */
  delay?: number
  /** Enter offset in px (rise distance). */
  offset?: number
  /** Reveal duration (seconds). */
  duration?: number
  /** Fire only the first time it enters the viewport. */
  once?: boolean
  /** Fraction of the element that must be visible to trigger (0–1). */
  amount?: number
  className?: string
}

export function Reveal({
  children,
  delay = 0,
  offset = M.rise,
  duration = M.base,
  once = true,
  amount = 0.3,
  className,
}: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  const variants: Variants = {
    hidden: { opacity: 0, y: offset },
    shown: { opacity: 1, y: 0, transition: { duration, delay, ease: M.ease } },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
