import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.png'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* Accent bar */}
      <div className="footer__accent" />

      <div className="footer__body">
        <div className="container footer__grid">

          {/* Brand */}
          <div className="footer__brand">
            <img src={logo} alt="Qbick" className="footer__logo-img" />
            <p className="footer__desc">
              Más de 10 años proveyendo soluciones en EPS para la construcción.
              Materiales de calidad y asesoramiento técnico en cada proyecto.
            </p>
            <div className="footer__badges">
              <span className="footer__badge">+10 años</span>
              <span className="footer__badge">Asesoramiento técnico</span>
              <span className="footer__badge">Buenos Aires</span>
            </div>
          </div>

          {/* Nav */}
          <div className="footer__col">
            <h4 className="footer__heading">Navegación</h4>
            <ul className="footer__links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/aplicaciones">Aplicaciones</Link></li>
              <li><Link to="/empresa">Empresa</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer__col">
            <h4 className="footer__heading">Productos</h4>
            <ul className="footer__links">
              <li><Link to="/productos">EPS (Telgopor)</Link></li>
              <li><Link to="/productos">Telgopor Molido Blanco</Link></li>
              <li><Link to="/productos">Telgopor Molido Gris/Negro</Link></li>
              <li><Link to="/productos">Ligante para Telgopor</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Contacto</h4>
            <ul className="footer__contact-list">
              <li>
                <span className="footer__contact-icon">📍</span>
                <span>Buenos Aires, Argentina</span>
              </li>
              <li>
                <span className="footer__contact-icon">🕐</span>
                <span>Lun–Vie: 8:00 – 18:00 hs</span>
              </li>
              <li>
                <span className="footer__contact-icon">✉️</span>
                <span>Consultar por email</span>
              </li>
            </ul>
            <Link to="/contacto" className="footer__cta-btn">
              Solicitar cotización →
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">© {year} Qbick. Todos los derechos reservados.</p>
          <p className="footer__legal">EPS · Soluciones en construcción</p>
        </div>
      </div>
    </footer>
  )
}
