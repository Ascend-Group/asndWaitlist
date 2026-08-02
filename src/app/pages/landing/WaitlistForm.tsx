import { useState } from 'react'
import './WaitlistForm.css'

const ENDPOINT = import.meta.env.VITE_WAITLIST_ENDPOINT
const TOKEN = import.meta.env.VITE_WAITLIST_TOKEN ?? ''

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Role = 'creator' | 'brand' | 'agency'
const ROLES: { id: Role; label: string; sub: string }[] = [
  { id: 'creator', label: 'Creator', sub: 'Get hired for your work' },
  { id: 'brand', label: 'Brand', sub: 'Get a vetted shortlist' },
  { id: 'agency', label: 'Agency', sub: 'Hire vetted talent' },
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface FieldErrors {
  first_name?: string
  last_name?: string
  email?: string
}

/** Preselect the role from a `?role=` query param (set by TheAsk's tiles). */
function initialRole(): Role {
  if (typeof window === 'undefined') return 'creator'
  const r = new URLSearchParams(window.location.search).get('role')
  return r === 'brand' || r === 'agency' ? r : 'creator'
}

/**
 * The waitlist capture card. Sits in the hero's right slot (the old live-search
 * panel's place) and is the page's single primary action. Captures how they're
 * applying (creator / brand / agency), name + email (required), and optional
 * organisation, designation, phone, and a social-media link (the posted key
 * stays `instagram` for the Apps Script contract). A hidden honeypot
 * (`company`) silently absorbs bots.
 *
 * Submits as a CORS "simple request" (text/plain) to a Google Apps Script that
 * appends a row to a Sheet — see apps-script/. If the endpoint isn't configured
 * yet the UI still confirms optimistically and logs a warning (the page ships
 * before the Sheet is wired), so set VITE_WAITLIST_ENDPOINT before going live.
 */
export function WaitlistForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [role, setRole] = useState<Role>(initialRole)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot: a real person never fills this. Pretend success, store nothing.
    if ((data.get('company') as string)?.trim()) {
      setStatus('success')
      return
    }

    const payload = {
      role,
      first_name: (data.get('first_name') as string)?.trim() ?? '',
      last_name: (data.get('last_name') as string)?.trim() ?? '',
      email: (data.get('email') as string)?.trim() ?? '',
      organisation: (data.get('organisation') as string)?.trim() ?? '',
      designation: (data.get('designation') as string)?.trim() ?? '',
      whatsapp: (data.get('whatsapp') as string)?.trim() ?? '',
      instagram: ((data.get('instagram') as string)?.trim() ?? '').replace(/^@+/, ''),
    }

    const nextErrors: FieldErrors = {}
    if (!payload.first_name) nextErrors.first_name = 'Required'
    if (!payload.last_name) nextErrors.last_name = 'Required'
    if (!payload.email) nextErrors.email = 'Required'
    else if (!EMAIL_RE.test(payload.email)) nextErrors.email = 'Enter a valid email'
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }
    setErrors({})
    setStatus('submitting')

    const body = JSON.stringify({
      ...payload,
      token: TOKEN,
      source: 'waitlist-web',
      submitted_at: new Date().toISOString(),
    })

    if (!ENDPOINT) {
      console.warn(
        '[waitlist] VITE_WAITLIST_ENDPOINT is not set — submission was not stored. ' +
          'Configure it (see apps-script/README.md) before going live.',
      )
      setStatus('success')
      return
    }

    try {
      // text/plain keeps this a "simple" request (no CORS preflight) so the POST
      // reaches Apps Script cross-origin. The response is opaque; we confirm on
      // resolve. The script validates the token and appends the row.
      await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body,
      })
      setStatus('success')
    } catch (err) {
      console.error('[waitlist] submission failed', err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="wl-card wl-card--done" role="status" aria-live="polite">
        <div className="wl-check" aria-hidden="true">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="wl-done-title">You&rsquo;re on the list.</h3>
        <p className="wl-done-sub">
          Invitations go out one niche at a time, and a person reads every one.
          We will be in touch when a spot opens for you.
        </p>
      </div>
    )
  }

  return (
    <form className="wl-card" onSubmit={handleSubmit} noValidate aria-label="Join the waitlist">
      <div className="wl-head">
        <span className="wl-eyebrow">
          <span className="wl-dot" aria-hidden="true" />
          Waitlist · Mumbai first
        </span>
        <h2 className="wl-title">Be part of the waitlist.</h2>
        <p className="wl-lede">
          Filling one niche at a time. Add your details below.
        </p>
      </div>

      {/* How they're applying — a real captured field, default Creator. */}
      <div className="wl-field">
        <span className="wl-label">I&rsquo;m applying as</span>
        <div className="wl-roles" role="radiogroup" aria-label="I'm applying as">
          {ROLES.map((r) => (
            <button
              key={r.id}
              type="button"
              role="radio"
              aria-checked={role === r.id}
              className={role === r.id ? 'wl-role is-selected' : 'wl-role'}
              onClick={() => setRole(r.id)}
              title={r.sub}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div className="wl-row">
        <label className="wl-field">
          <span className="wl-label">First name</span>
          <input
            name="first_name"
            type="text"
            autoComplete="given-name"
            className={errors.first_name ? 'wl-input is-invalid' : 'wl-input'}
            aria-invalid={!!errors.first_name}
            placeholder="Riya"
          />
          {errors.first_name && <span className="wl-err">{errors.first_name}</span>}
        </label>
        <label className="wl-field">
          <span className="wl-label">Last name</span>
          <input
            name="last_name"
            type="text"
            autoComplete="family-name"
            className={errors.last_name ? 'wl-input is-invalid' : 'wl-input'}
            aria-invalid={!!errors.last_name}
            placeholder="Anand"
          />
          {errors.last_name && <span className="wl-err">{errors.last_name}</span>}
        </label>
      </div>

      <label className="wl-field">
        <span className="wl-label">Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          className={errors.email ? 'wl-input is-invalid' : 'wl-input'}
          aria-invalid={!!errors.email}
          placeholder="you@studio.com"
        />
        {errors.email && <span className="wl-err">{errors.email}</span>}
      </label>

      <div className="wl-row">
        <label className="wl-field">
          <span className="wl-label">
            {role === 'creator' ? 'Studio / label' : 'Organisation'} <span className="wl-opt">optional</span>
          </span>
          <input
            name="organisation"
            type="text"
            autoComplete="organization"
            className="wl-input"
            placeholder={role === 'agency' ? 'Agency name' : 'Where you work'}
          />
        </label>
        <label className="wl-field">
          <span className="wl-label">
            Designation <span className="wl-opt">optional</span>
          </span>
          <input
            name="designation"
            type="text"
            autoComplete="organization-title"
            className="wl-input"
            placeholder="Your role"
          />
        </label>
      </div>

      <div className="wl-row">
        <label className="wl-field">
          <span className="wl-label">
            Phone <span className="wl-opt">optional</span>
          </span>
          <input
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="wl-input"
            placeholder="+91 98765 43210"
          />
        </label>
        <label className="wl-field">
          <span className="wl-label">
            Social media <span className="wl-opt">optional</span>
          </span>
          <input
            name="instagram"
            type="text"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            className="wl-input"
            placeholder="yourprofile.com"
          />
        </label>
      </div>

      {/* Honeypot — visually hidden, off-screen, not tabbable. Bots fill it. */}
      <div className="wl-hp" aria-hidden="true">
        <label>
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === 'error' && (
        <p className="wl-formerr" role="alert">
          Something went wrong sending that. Please try again in a moment.
        </p>
      )}

      <button type="submit" className="wl-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Adding you…' : 'Join the waitlist'}
      </button>
      <p className="wl-fine">No spam. We only use this to invite you when a spot opens.</p>
    </form>
  )
}
