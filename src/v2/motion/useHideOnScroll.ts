import { useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'motion/react'

/* Ignore sub-threshold wheel/trackpad jitter so the nav doesn't flicker. */
const DELTA = 6

/**
 * "Headroom" auto-hide. Returns true when the nav should be tucked away.
 *
 * The nav stays visible through the first screen (≈ the hero — within
 * `window.innerHeight` of the top). Past that, scrolling down hides it and
 * scrolling up — from anywhere — brings it straight back. Direction is read
 * from the scroll delta inside the updater, so there's no stale state and no
 * per-frame re-render unless the hidden/shown value actually flips.
 *
 * Consumers should gate this with `prefers-reduced-motion` (keep the nav pinned)
 * — hiding chrome is a motion behaviour.
 */
export function useHideOnScroll(): boolean {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const prev = useRef(0)

  useMotionValueEvent(scrollY, 'change', (y) => {
    const delta = y - prev.current
    prev.current = y
    setHidden((wasHidden) => {
      if (y < window.innerHeight) return false // within the hero → always pinned
      if (Math.abs(delta) < DELTA) return wasHidden // ignore micro-scroll
      return delta > 0 // scrolling down hides, up reveals
    })
  })

  return hidden
}
