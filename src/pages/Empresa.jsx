import { Link } from 'react-router-dom'
import imgEpsBlanco from '../assets/Img-telgopor-blanco.png'
import imgLigante from '../assets/Img-Ligante.png'
import './Empresa.css'

const valores = [
  {
    icon: '🤝',
    title: 'Compromiso',
    desc: 'Cada obra es una oportunidad para demostrar que los materiales correctos hacen la diferencia. Nos comprometemos con el resultado de cada cliente.',
  },
  {
    icon: '🔬',
    title: 'Conocimiento técnico',
    desc: 'Más de una década de experiencia específica en EPS nos permite asesorar con criterio y precisión técnica, más allá de la simple venta de materiales.',
  },
  {
    icon: '⭐',
    title: 'Calidad constante',
    desc: 'Trabajamos exclusivamente con proveedores y productos que cumplen los estándares técnicos del rubro, sin compromisos en la calidad del material.',
  },
  {
    icon: '💡',
    title: 'Innovación aplicada',
    desc: 'Incorporamos productos mejorados como el EPS gris/negro y el ligante especializado para estar siempre a la vanguardia de las soluciones constructivas.',
  },
]


export default function Empresa() {
  return (
    <div className="empresa-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Quiénes somos</span>
          <h1>Más de 10 años en EPS para construcción</h1>
          <p>Una empresa construida sobre el conocimiento técnico, la confianza de nuestros clientes y el compromiso con la calidad en cada entrega.</p>
        </div>
      </section>

      {/* Intro split */}
      <section className="empresa-intro">
        <div className="container empresa-intro__inner">
          <div className="empresa-intro__content">
            <span className="section-tag">Nuestra historia</span>
            <h2 className="section-title">Experiencia que se traduce en resultados concretos</h2>
            <p className="empresa-intro__text">
              Comenzamos con una premisa simple: proveer materiales de calidad para la construcción, con el asesoramiento técnico que los profesionales necesitan y no siempre encuentran en sus proveedores habituales.
            </p>
            <p className="empresa-intro__text">
              A lo largo de más de diez años, desarrollamos un profundo conocimiento de las propiedades del EPS, sus aplicaciones constructivas y las necesidades reales de arquitectos, ingenieros y constructores en obra.
            </p>
            <p className="empresa-intro__text">
              Hoy ofrecemos una línea completa de productos basados en EPS: desde los bloques estándar para aislación hasta el telgopor molido mejorado con aditivos grafitados y el ligante especializado para mezclas, cubriendo todas las etapas de la construcción con materiales técnicos y confiables.
            </p>
            <div className="empresa-intro__metrics">
              <div className="empresa-intro__metric">
                <span className="empresa-intro__metric-val">+10</span>
                <span className="empresa-intro__metric-lab">Años de experiencia</span>
              </div>
              <div className="empresa-intro__metric">
                <span className="empresa-intro__metric-val">4</span>
                <span className="empresa-intro__metric-lab">Líneas de producto</span>
              </div>
              <div className="empresa-intro__metric">
                <span className="empresa-intro__metric-val">100%</span>
                <span className="empresa-intro__metric-lab">Asesoramiento técnico</span>
              </div>
            </div>
          </div>
          <div className="empresa-intro__images">
            <div className="empresa-intro__img-main">
              <img src={imgEpsBlanco} alt="Bloques EPS en obra" />
            </div>
            <div className="empresa-intro__img-side">
              <img src={imgLigante} alt="Ligante para telgopor" />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="empresa-valores">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nuestros valores</span>
            <h2 className="section-title">Lo que guía cada decisión que tomamos</h2>
            <p className="section-subtitle">
              Más allá de la venta de materiales, somos un socio técnico comprometido con el éxito de cada proyecto.
            </p>
          </div>
          <div className="empresa-valores__grid">
            {valores.map((v, i) => (
              <div key={i} className="valor-card">
                <div className="valor-card__icon">{v.icon}</div>
                <h3 className="valor-card__title">{v.title}</h3>
                <p className="valor-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="empresa-mv">
        <div className="container empresa-mv__grid">
          <div className="empresa-mv__card empresa-mv__card--mision">
            <div className="empresa-mv__icon">🎯</div>
            <h3>Misión</h3>
            <p>
              Proveer soluciones técnicas en EPS para la industria de la construcción, aportando materiales de calidad, conocimiento especializado y asesoramiento personalizado que permitan a nuestros clientes construir mejor, más rápido y con mayor eficiencia energética.
            </p>
          </div>
          <div className="empresa-mv__card empresa-mv__card--vision">
            <div className="empresa-mv__icon">🔭</div>
            <h3>Visión</h3>
            <p>
              Ser la empresa de referencia en EPS para construcción en Argentina. Qbick se destaca por la calidad de nuestros productos, la profundidad de nuestro conocimiento técnico y la confianza que generamos en cada obra que acompañamos.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container cta-strip__inner">
          <div className="cta-strip__text">
            <h2 className="cta-strip__title">Trabajemos juntos en tu próximo proyecto</h2>
            <p className="cta-strip__sub">Más de 10 años de experiencia al servicio de tu obra. Contáctanos para recibir asesoramiento técnico personalizado.</p>
          </div>
          <div className="cta-strip__actions">
            <Link to="/contacto" className="btn btn-primary">Contactar ahora</Link>
            <Link to="/productos" className="btn btn-secondary">Ver productos</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
