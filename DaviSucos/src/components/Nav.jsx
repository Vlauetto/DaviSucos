import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/Nav.module.css'
import logo from '../assets/logo.png'
import Whatsapp from '../assets/whatsapp.png'

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={style['site-header']}>
      <nav className={style['nav-container']}>
        <div className={style.brand}>
          <img src={logo} className={style.Logo} />
        </div>

        <button
          className={`${style.hamburger} ${menuOpen ? style.open : ''}`}
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`${style['nav-links']} ${menuOpen ? style.open : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Início
          </Link>
          <Link to="/produtos" onClick={() => setMenuOpen(false)}>
            Produtos
          </Link>
          <Link to="/sobre" onClick={() => setMenuOpen(false)}>
            Sobre nós
          </Link>
          <Link to="/contato" onClick={() => setMenuOpen(false)}>
            Contato
          </Link>
        </div>

        <a
          href="https://wa.me/5511940433265"
          target="_blank"
          rel="noopener noreferrer"
          className={`${style.button} ${style['whatsapp-button']}`}
        >
          <span className={style['whatsapp-icon']}>
            <img src={Whatsapp} alt="WhatsApp" />
          </span>
          Pedir agora
        </a>
      </nav>
    </header>
  )
}