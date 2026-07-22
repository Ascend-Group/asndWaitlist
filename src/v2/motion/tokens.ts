/**
 * Canonical motion values for Framer Motion (motion/react).
 * MUST stay in sync with the CSS motion tokens in src/styles/theme.css §6.
 * Framer needs JS numbers; CSS-only consumers use the --m-* CSS vars.
 */
type Bezier = [number, number, number, number]

export const M = {
  base: 0.7,                     // --m-base    reveal duration (s)
  rise: 22,                      // --m-rise    enter offset (px)
  stagger: 0.075,                // --m-stagger per-item delay (s)
  ease: [0.16, 1, 0.3, 1] as Bezier,    // --m-ease  strong ease-out
  countup: 1.2,                  // count-up duration (s) — editorial register
  ui: 0.2,                       // nav-condense duration (s) — UI register
  uiEase: [0.23, 1, 0.32, 1] as Bezier, // ease-out for UI-register transitions
}

/** Total stagger cascade is capped so long lists don't feel sluggish (emil). */
export const STAGGER_CAP = 0.45 // seconds

/** Effective per-item stagger for a group of `count` items. */
export function staggerFor(count: number, base = M.stagger): number {
  if (count <= 1) return 0
  return Math.min(base, STAGGER_CAP / count)
}
