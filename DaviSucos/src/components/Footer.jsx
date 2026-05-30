import { Link } from 'react-router-dom'
import style from '../styles/Footer.module.css'
import logo from '../assets/logofooter.png'

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style['footer-inner']}>
        {/* Coluna esquerda - Brand */}
        <div className={style['footer-brand']}>
          <Link to="/" className={style['footer-logo']}>
            <span>
              <img src={logo} alt="Davi Sucos" className={style['footer-logo-image']} />
            </span>
          </Link>
          <p>
            Sucos naturais feitos com frutas frescas, selecionadas especialmente para oferecer mais sabor, saúde e bem estar para seu dia a dia.
          </p>
        </div>

        {/* Coluna central - Links rápidos */}
        <div className={style['footer-col']}>
          <h4>Links rápidos</h4>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/sobre">Sobre nós</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna direita - Contato */}
        <div className={style['footer-col']}>
          <h4>Contato</h4>
          <div className={style['contact-item']}>
            
            <span>(11) 94043-3265</span>
          </div>
          <div className={style['contact-item']}>
            <span>davisucos@gmail.com</span>
          </div>
          <div className={style['contact-item']}>
            <span>Segunda à Sexta</span>
          </div>
          <div className={style['contact-item']}>
            <span>09h às 18h</span>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className={style['footer-bottom']}>
        <p>© 2026 Davi Sucos. Todos os direitos reservados.</p>
        <div className={style['social-links']}>
          <a href="#instagram" className={style['social-link']} title="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <circle cx="17.5" cy="6.5" r="1.5"></circle>
            </svg>
          </a>
          <a href="#facebook" className={style['social-link']} title="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
            </svg>
          </a>
          <a href="mailto:davisucos@gmail.com" className={style['social-link']} title="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-10 5L2 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
