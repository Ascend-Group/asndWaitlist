import { motion, useReducedMotion, type Variants } from 'motion/react'
import { Children, type ReactNode } from 'react'
import { M, staggerFor } from './tokens'

interface RevealGroupProps {
  children: ReactNode
  /** Per-item delay (seconds); auto-capped for large groups. */
  stagger?: number
  /** Delay before the first child starts (seconds). */
  delayChildren?: number
  once?: boolean
  amount?: number
  className?: string
}

export function RevealGroup({
  children,
  stagger,
  delayChildren = 0,
  once = true,
  amount = 0.2,
  className,
}: RevealGroupProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  const count = Children.count(children)
  const perItem = staggerFor(count, stagger ?? M.stagger)

  const container: Variants = {
    hidden: {},
    shown: { transition: { staggerChildren: perItem, delayChildren } },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once, amount }}
      variants={container}
    >
      {children}
    </motion.div>
  )
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: M.rise },
  shown: { opacity: 1, y: 0, transition: { duration: M.base, ease: M.ease } },
}

interface RevealItemProps {
  children: ReactNode
  className?: string
}

export function RevealItem({ children, className }: RevealItemProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  // No initial/whileInView here: the parent RevealGroup propagates the
  // "hidden"/"shown" variant labels to children automatically (Framer).
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
