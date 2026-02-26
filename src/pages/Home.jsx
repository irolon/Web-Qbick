import { Link } from 'react-router-dom'
import imgEpsBlanco from '../assets/Img-telgopor-blanco.png'
import imgBolsaBlanco from '../assets/Img-Bolsa-telgopor-blanco.png'
import imgBolsaNegro from '../assets/Img-Bolsa-telgopor-negro.png'
import imgLigante from '../assets/Img-Ligante.png'
import imgNegroblanco from '../assets/Img-telgopor-negro-blanco.png'
import './Home.css'

const features = [
  {
    icon: '🏗️',
    title: 'Más de 10 años de experiencia',
    desc: 'Una década de trayectoria acompañando obras de construcción de todo tipo y escala en el mercado argentino.',
  },
  {
    icon: '🔬',
    title: 'Asesoramiento técnico',
    desc: 'Nuestro equipo asesora a arquitectos, ingenieros y constructores para seleccionar la solución más adecuada a cada proyecto.',
  },
  {
    icon: '⭐',
    title: 'Materiales de calidad',
    desc: 'Trabajamos exclusivamente con EPS de primera calidad que cumple los estándares técnicos del sector construcción.',
  },
  {
    icon: '🛠️',
    title: 'Soluciones a medida',
    desc: 'Adaptamos nuestros productos y servicios a las necesidades específicas de cada obra, desde pequeñas reformas hasta proyectos industriales.',
  },
]

const products = [
  {
    img: imgEpsBlanco,
    name: 'EPS (Telgopor)',
    short: 'Material expandido con alta capacidad de aislación térmica y bajo peso estructural.',
    tag: 'Aislación · Estructura',
  },
  {
    img: imgBolsaBlanco,
    name: 'Telgopor Molido Blanco',
    short: 'Agregado liviano para mezclas cementicias: reduce peso, mejora aislación y optimiza costos.',
    tag: 'Contrapisos · Rellenos',
  },
  {
    img: imgBolsaNegro,
    name: 'Telgopor Molido Gris/Negro',
    short: 'EPS mejorado con aditivos. +15% de rendimiento térmico respecto al EPS blanco tradicional.',
    tag: 'Alta eficiencia · Térmico',
  },
  {
    img: imgLigante,
    name: 'Ligante para Telgopor',
    short: 'Producto adhesivo y cohesivo para mezclas con telgopor. Disponible en 1 L y 5 L.',
    tag: 'Adhesión · Mezclas',
  },
]

const stats = [
  { value: '+10', label: 'Años en el mercado' },
  { value: '4', label: 'Líneas de producto' },
  { value: '100%', label: 'Asesoramiento técnico' },
  { value: '∞', label: 'Compromiso con la calidad' },
]

export default function Home() {
  return (
    <div className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg-overlay" />
        <div className="container hero__inner">
          <div className="hero__content">
            <div className="hero__tag">
              <span className="hero__tag-dot" />
              Expertos en EPS para construcción
            </div>
            <h1 className="hero__title">
              Qbick - Soluciones en EPS (Telgopor) para construcción
            </h1>
            <p className="hero__subtitle">
              Más de 10 años acompañando obras con materiales livianos, eficientes y confiables. Telgopor, morteros aliviados y ligantes para profesionales de la construcción.
            </p>
            <div className="hero__actions">
              <Link to="/productos" className="btn btn-primary hero__btn">
                <span>Ver productos</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                  <path fillRule="evenodd" d="M3 8a.5.5 0 01.5-.5H11l-2.854-2.854a.5.5 0 11.708-.708l3.5 3.5a.5.5 0 010 .708l-3.5 3.5a.5.5 0 01-.708-.708L11.293 8.5H3.5A.5.5 0 013 8z"/>
                </svg>
              </Link>
              <Link to="/contacto" className="btn btn-secondary hero__btn">
                Pedir cotización
              </Link>
            </div>
          </div>
          <div className="hero__image-col">
            <div className="hero__image-frame">
              <img src={imgEpsBlanco} alt="Bloques de EPS Telgopor para construcción" className="hero__img" />
              <div className="hero__image-badge">
                <span className="hero__badge-icon">🏆</span>
                <div>
                  <div className="hero__badge-val">+10 años</div>
                  <div className="hero__badge-lab">de experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero__stats">
          <div className="container hero__stats-inner">
            {stats.map((s, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ ES EL EPS ── */}
      <section className="eps-info">
        <div className="container eps-info__inner">
          <div className="eps-info__text">
            <span className="section-tag">¿Qué es el EPS?</span>
            <h2 className="section-title">El material del futuro en la construcción moderna</h2>
            <p className="eps-info__desc">
              El EPS (Poliestireno Expandido), conocido comercialmente como Telgopor®, es un material compuesto mayormente por aire, lo que le confiere propiedades únicas que lo hacen indispensable en la construcción contemporánea.
            </p>
            <ul className="eps-info__list">
              <li>
                <span className="eps-info__check">✓</span>
                <div>
                  <strong>Aislación térmica superior:</strong> Minimiza la transferencia de calor entre ambientes, mejorando la eficiencia energética del edificio.
                </div>
              </li>
              <li>
                <span className="eps-info__check">✓</span>
                <div>
                  <strong>Bajo peso estructural:</strong> Permite alivianar cargas en losas, contrapisos y estructuras sin comprometer la resistencia.
                </div>
              </li>
              <li>
                <span className="eps-info__check">✓</span>
                <div>
                  <strong>Estabilidad dimensional:</strong> Mantiene su forma y propiedades a lo largo del tiempo, sin deformaciones ni degradación.
                </div>
              </li>
              <li>
                <span className="eps-info__check">✓</span>
                <div>
                  <strong>Versatilidad constructiva:</strong> Se integra a sistemas constructivos innovadores: contrapisos aliviados, rellenos, carpetas térmicas y más.
                </div>
              </li>
            </ul>
            <Link to="/aplicaciones" className="btn btn-blue" style={{ marginTop: '8px', alignSelf: 'flex-start' }}>
              Ver aplicaciones
            </Link>
          </div>
          <div className="eps-info__visual">
            <div className="eps-info__img-wrap">
              <img src={imgNegroblanco} alt="EPS Telgopor para construcción" />
            </div>
            <div className="eps-info__callout">
              <div className="eps-info__callout-num">95%</div>
              <div className="eps-info__callout-txt">del material es aire, garantizando máxima aislación con mínimo peso</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POR QUÉ ELEGIRNOS ── */}
      <section className="why-us">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">¿Por qué elegirnos?</span>
            <h2 className="section-title">Experiencia y compromiso en cada obra</h2>
            <p className="section-subtitle">
              Somos el socio confiable que arquitectos, ingenieros y constructores necesitan para resolver sus desafíos de construcción con materiales de calidad.
            </p>
          </div>
          <div className="why-us__grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-card__icon">{f.icon}</div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTOS DESTACADOS ── */}
      <section className="home-products">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nuestros productos</span>
            <h2 className="section-title">Todo lo que necesitás para tu obra</h2>
            <p className="section-subtitle">
              Cuatro líneas de producto especializadas para aislación, rellenos y mezclas aliviadas en cualquier tipo de construcción.
            </p>
          </div>
          <div className="home-products__grid">
            {products.map((p, i) => (
              <div key={i} className="product-preview-card">
                <div className="product-preview-card__img-wrap">
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="product-preview-card__body">
                  <span className="product-preview-card__tag">{p.tag}</span>
                  <h3 className="product-preview-card__name">{p.name}</h3>
                  <p className="product-preview-card__desc">{p.short}</p>
                  <Link to="/productos" className="product-preview-card__link">
                    Ver detalles →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="home-products__cta">
            <Link to="/productos" className="btn btn-outline">
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="cta-strip">
        <div className="container cta-strip__inner">
          <div className="cta-strip__text">
            <h2 className="cta-strip__title">¿Necesitás materiales para tu próxima obra?</h2>
            <p className="cta-strip__sub">Consultanos sobre precios, cantidades y especificaciones técnicas. Respondemos rápido.</p>
          </div>
          <div className="cta-strip__actions">
            <Link to="/contacto" className="btn btn-primary">
              Pedir cotización
            </Link>
            <Link to="/empresa" className="btn btn-secondary">
              Conocer la empresa
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
