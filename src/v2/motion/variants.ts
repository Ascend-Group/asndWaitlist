import type { Variants } from 'motion/react'
import { M } from './tokens'

/** Single reveal / stagger child: fade + rise. */
export const revealItem: Variants = {
  hidden: { opacity: 0, y: M.rise },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: M.base, ease: M.ease },
  },
}

/** Container that staggers its children. */
export function revealContainer(stagger: number, delayChildren = 0): Variants {
  return {
    hidden: {},
    shown: { transition: { staggerChildren: stagger, delayChildren } },
  }
}
