import './Button.css'

interface ButtonProps {
  variant: 'primary' | 'ghost'
  size?: 'md' | 'lg'
  /** SPA route — renders a React Router <Link> (no full reload). Preferred. */
  to?: string
  /** Raw anchor (in-page #anchor scroll, or external). */
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export function Button({
  variant,
  size = 'md',
  to,
  href,
  onClick,
  children,
  className,
}: ButtonProps) {
  const combined = ['asnd-btn', `asnd-btn--${variant}`, `asnd-btn--${size}`, className]
    .filter(Boolean)
    .join(' ')

  const target = to ?? href
  if (target) {
    return (
      <a href={target} onClick={onClick} className={combined}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} className={combined}>
      {children}
    </button>
  )
}
