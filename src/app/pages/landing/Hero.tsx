import { motion, useReducedMotion } from 'motion/react'
import { WaitlistForm } from './WaitlistForm'
import './Hero.css'

const EASE = [0.2, 0.7, 0.2, 1] as const
const parent = { hidden: {}, shown: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }
const rise = { hidden: { y: 18 }, shown: { y: 0, transition: { duration: 0.7, ease: EASE } } }

/**
 * Hero — the founder-vision split: the claim on the left, the waitlist capture
 * card on the right (in the place the live-search panel held in the app). Items
 * rise in on load (transform only; opacity stays 1, so a throttled timeline can
 * never leave them hidden). Reduced-motion renders the final state immediately.
 */
export function Hero() {
  const reduce = useReducedMotion()
  return (
    <section className="hero tex" aria-label="Hero">
      <div className="hero-in">
        <motion.div
          className="hero-claim"
          variants={reduce ? undefined : parent}
          initial={reduce ? false : 'hidden'}
          animate={reduce ? false : 'shown'}
        >
          <motion.h1 className="hero-h1" variants={reduce ? undefined : rise}>
            A <em>vetted</em> network for creators, brands and agencies.
          </motion.h1>
          <motion.p className="hero-sub" variants={reduce ? undefined : rise}>
            We are opening with founding members, one niche at a time. Join the
            waitlist and we will reach out as spots open.
          </motion.p>
          <motion.div className="hero-cta" variants={reduce ? undefined : rise}>
            <a href="#waitlist" className="hero-btn hero-btn--primary">Join the waitlist</a>
            <a href="about.html" className="hero-btn hero-btn--secondary">Read our story</a>
          </motion.div>
          <motion.p className="hero-foot" variants={reduce ? undefined : rise}>
            Built from <strong>41 interviews</strong> with creators, brands and agencies.
          </motion.p>
        </motion.div>

        <motion.div
          id="waitlist"
          className="hero-proof"
          initial={reduce ? false : { y: 18 }}
          animate={reduce ? false : { y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : 0.28 }}
        >
          <WaitlistForm />
        </motion.div>
      </div>
    </section>
  )
}
