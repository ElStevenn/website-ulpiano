'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav__inner">
          <Link href="#" className="nav__logo">ULPIANO</Link>
          <div className="nav__links">
            <Link href="#outputs">Soluciones</Link>
            <Link href="#para-quien">Pensado para</Link>
            <Link href="#como-funciona">Proceso</Link>
            <Link href="#testimonio">Resultados</Link>
          </div>
          <div className="nav__ctas">
            <Link href="#" className="nav__login">Iniciar sesión</Link>
            <Link href="#cta-final" className="nav__cta-btn">Reserva tu demo</Link>
          </div>
          <button
            className={`nav__hamburger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Abrir menú de navegación"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`nav__mobile-panel${menuOpen ? ' open' : ''}`}>
        <Link href="#outputs" onClick={closeMenu}>Soluciones</Link>
        <Link href="#para-quien" onClick={closeMenu}>Pensado para</Link>
        <Link href="#como-funciona" onClick={closeMenu}>Proceso</Link>
        <Link href="#testimonio" onClick={closeMenu}>Resultados</Link>
        <Link href="#" onClick={closeMenu}>Iniciar sesión</Link>
        <div className="nav__mobile-cta">
          <Link href="#cta-final" className="btn-primary" onClick={closeMenu}>
            Reserva tu demo
          </Link>
        </div>
      </div>
    </>
  )
}
