import { Button } from '../components/Button'
import { useNavCondense, useHideOnScroll } from '../motion'
import { useReducedMotion } from 'motion/react'
import './Nav.css'

/**
 * Nav — the minimal marketing header for the waitlist site. The app's
 * session-aware branch (signed-in members → in-product nav) is gone: this site
 * has no auth. Wordmark → home, "The story" → the About page, and the primary
 * action is joining the waitlist (scrolls to the hero form on the landing).
 */
export function Nav() {
  const condensed = useNavCondense(64)
  const reduce = useReducedMotion()
  const autoHidden = useHideOnScroll()
  const navHidden = autoHidden && !reduce

  return (
    <nav
      className={['nav', condensed ? 'nav--condensed' : '', navHidden ? 'nav--hidden' : '']
        .filter(Boolean)
        .join(' ')}
      aria-label="Main navigation"
    >
      <div className="nav-in">
        <a href="index.html" className="nav-brand" aria-label="ASND home">
          ASND
        </a>

        <div className="nav-cta">
          <a href="about.html#how" className="nav-signin">
            How it works
          </a>
          <a href="about.html" className="nav-signin">
            The story
          </a>
          <Button variant="primary" href="index.html#waitlist">
            Join the waitlist
          </Button>
        </div>
      </div>
    </nav>
  )
}
