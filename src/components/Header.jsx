import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useHeaderAnimation } from '../hooks/usePageAnimation'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const headerRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  useHeaderAnimation(headerRef)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const openMenu = () => setMenuOpen(true)

  return (
    <>
      <header className="header" ref={headerRef}>
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/image/logo.png" alt="Brew Morning" />
        </Link>

        <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
          <button
            type="button"
            id="close"
            className="fas fa-times"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav_item${isActive ? ' active' : ''}`
              }
              onClick={closeMenu}
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          id="menu"
          className="fas fa-bars"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={openMenu}
        />
      </header>

      {menuOpen && (
        <button
          type="button"
          className="nav-overlay"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}
    </>
  )
}
