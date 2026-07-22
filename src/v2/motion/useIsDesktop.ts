import { useEffect, useState } from 'react'

/**
 * True when the viewport is at least `min` px wide. Used to gate the pinned /
 * scroll-driven scenes to desktop — small screens get the calm static layout.
 */
export function useIsDesktop(min = 900): boolean {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(`(min-width: ${min}px)`).matches,
  )
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${min}px)`)
    const onChange = () => setIsDesktop(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [min])
  return isDesktop
}
