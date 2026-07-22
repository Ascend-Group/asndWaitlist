import { useState } from 'react'
import { useMotionValueEvent, useScroll } from 'motion/react'

/* The active link sits under the sticky bar; treat a section as "current" once
   its top passes this line (nav height + a small bias). */
const NAV_LINE = 80

/**
 * Scrollspy. Returns the id of the section the reader is currently in, or null
 * while still above the first tracked section (e.g. in the hero). Picks the
 * tracked section whose top has most recently passed just under the sticky nav,
 * comparing live positions — so the highlight is correct even when the link
 * order differs from the document order. Carries no motion of its own, so
 * reduced-motion users get the same (correct) highlighting.
 */
export function useActiveSection(ids: string[]): string | null {
  const { scrollY } = useScroll()
  const [active, setActive] = useState<string | null>(null)

  useMotionValueEvent(scrollY, 'change', (y) => {
    const line = y + NAV_LINE
    let current: string | null = null
    let currentTop = -Infinity
    for (const id of ids) {
      const el = document.getElementById(id)
      if (!el) continue
      const top = el.getBoundingClientRect().top + window.scrollY
      if (top <= line && top > currentTop) {
        currentTop = top
        current = id
      }
    }
    setActive((prev) => (prev === current ? prev : current))
  })

  return active
}
