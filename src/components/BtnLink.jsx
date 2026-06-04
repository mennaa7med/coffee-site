import { Link } from 'react-router-dom'

export default function BtnLink({ to, children, variant = '', className = '' }) {
  const classes = ['btn', variant, className].filter(Boolean).join(' ')

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}
