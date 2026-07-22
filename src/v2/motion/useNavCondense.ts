import { useState } from 'react'
import { useMotionValueEvent, useScroll } from 'motion/react'

/**
 * Returns true once the page is scrolled past `threshold` px.
 * The consumer applies condensed chrome (hairline border, reduced padding)
 * and transitions it in the UI register (~200ms ease-out). State only flips
 * at the threshold crossing — no per-frame re-render churn.
 */
export function useNavCondense(threshold = 64): boolean {
  const { scrollY } = useScroll()
  const [condensed, setCondensed] = useState(() => scrollY.get() > threshold)

  useMotionValueEvent(scrollY, 'change', (y) => {
    setCondensed((prev) => {
      const next = y > threshold
      return next === prev ? prev : next
    })
  })

  return condensed
}
