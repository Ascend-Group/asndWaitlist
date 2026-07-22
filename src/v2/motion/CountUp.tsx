import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'
import { M } from './tokens'

interface CountUpProps {
  /** Target value to count to. */
  to: number
  /** Starting value (default 0). */
  from?: number
  /** Tween duration (seconds). */
  duration?: number
  prefix?: string
  suffix?: string
  /** Custom formatter; default rounds + locale-groups. */
  format?: (n: number) => string
  once?: boolean
  className?: string
}

export function CountUp({
  to,
  from = 0,
  duration = M.countup,
  prefix = '',
  suffix = '',
  format = (n) => Math.round(n).toLocaleString(),
  once = true,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once, amount: 0.6 })
  const reduce = useReducedMotion()

  // Keep latest formatter without retriggering the tween effect.
  const formatRef = useRef(format)

  const [display, setDisplay] = useState(() => (reduce ? format(to) : format(from)))

  // Update formatRef whenever format changes, but don't retrigger the animation.
  useEffect(() => {
    formatRef.current = format
  }, [format])

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setDisplay(formatRef.current(to))
      return
    }
    const controls = animate(from, to, {
      duration,
      ease: M.ease,
      onUpdate: (v) => setDisplay(formatRef.current(v)),
    })
    return () => controls.stop()
  }, [inView, reduce, from, to, duration])

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${format(to)}${suffix}`}>
      <span aria-hidden="true">
        {prefix}
        {display}
        {suffix}
      </span>
    </span>
  )
}
