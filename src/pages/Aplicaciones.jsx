import { Link } from 'react-router-dom'
import imgBlancoPiso from '../assets/Img-Telgopor-Blanco-piso.png'
import imgNegroblanco from '../assets/Img-telgopor-negro-blanco.png'
import SEOHead from '../components/SEOHead'
import './Aplicaciones.css'

const aplicaciones = [
  {
    icon: '🏗️',
    title: 'Contrapisos alivianados',
    desc: 'Mezcla de cemento, agua y telgopor molido que reemplaza el hormigón convencional en contrapisos. Reduce significativamente la carga muerta sobre la losa o el suelo, sin sacrificar la capacidad portante ni la terminación superficial.',
    productos: ['Telgopor Molido Blanco', 'Telgopor Molido Gris/Negro', 'Ligante'],
    detalle: 'Ideal para obras donde se necesita reducir la carga sobre estructuras existentes o minimizar el peso total del edificio.',
  },
  {
    icon: '🌡️',
    title: 'Carpetas térmicas',
    desc: 'Carpeta flotante aliviada con EPS que actúa como aislante térmico y acústico en pisos. Mejora el confort habitable del espacio, reduce la transmisión de calor entre losas y funciona como base niveladora para todo tipo de terminaciones.',
    productos: ['Telgopor Molido Blanco', 'Telgopor Molido Gris/Negro', 'Ligante'],
    detalle: 'Especialmente recomendada para edificios con calefacción por losa radiante o en zonas climáticas con altos requerimientos de eficiencia energética.',
  },
  {
    icon: '📦',
    title: 'Rellenos estructurales livianos',
    desc: 'Utilización del telgopor molido como material de relleno liviano en espacios interiores de losas, vigas y muros. Reemplaza al relleno convencional de hormigón en zonas no estructurales, reduciendo drásticamente el peso propio del elemento.',
    productos: ['EPS en bloques', 'Telgopor Molido Blanco'],
    detalle: 'Permite ejecutar losas y elementos prefabricados más livianos con el mismo canto estructural, simplificando el transporte y montaje.',
  },
  {
    icon: '🧱',
    title: 'Hormigón liviano no estructural',
    desc: 'Preparado de hormigón con alto contenido de EPS molido como agregado liviano, utilizado en tabiques, cierres y elementos de mampostería no estructurales. Ofrece bajo peso, buena trabajabilidad y facilidad de corte y fijación.',
    productos: ['Telgopor Molido Blanco', 'Telgopor Molido Gris/Negro', 'Ligante'],
    detalle: 'Perfecto para tabiquería liviana, muros divisorios y cierres interiores donde se prioriza la rapidez de ejecución y el bajo peso.',
  },
  {
    icon: '🏛️',
    title: 'Pendientes en terrazas',
    desc: 'Creación de planos inclinados sobre losas planas mediante mezcla aliviada de telgopor. Permite ejecutar rápidamente las pendientes necesarias para el escurrimiento del agua, minimizando la carga adicional sobre la estructura de cubierta.',
    productos: ['Telgopor Molido Blanco', 'Telgopor Molido Gris/Negro'],
    detalle: 'Solución muy utilizada en refacciones y ampliaciones donde la losa existente no puede soportar grandes cargas adicionales.',
  },
  {
    icon: '☀️',
    title: 'Aislación térmica en techos',
    desc: 'Bloques o placas de EPS colocadas sobre la losa de techo para reducir la transferencia de calor hacia el interior del edificio. Uno de los sistemas de aislación más eficientes y económicos disponibles en el mercado de la construcción.',
    productos: ['EPS en bloques y placas'],
    detalle: 'Aplicable tanto en obras nuevas como en rehabilitación energética de edificios existentes. Compatible con sistemas de techo invertido y cubierta verde.',
  },
]

const ventajas = [
  { num: '50–70%', label: 'Menos peso que hormigón convencional' },
  { num: '+15%', label: 'Mejor aislación con EPS gris/negro' },
  { num: '∞', label: 'Estabilidad dimensional en el tiempo' },
  { num: '🌱', label: 'Material 100% reciclable' },
]

export default function Aplicaciones() {
  return (
    <div className="aplicaciones-page">
      <SEOHead
        title="Aplicaciones del EPS en Construcción | Contrapisos, Aislación, Rellenos | QBICK"
        description="Descubrí cómo usar EPS y Telgopor Molido en contrapisos alivianados, carpetas térmicas, rellenos estructurales livianos, hormigón liviano no estructural, pendientes en terrazas y aislación de techos."
        keywords="contrapisos alivianados, carpetas térmicas, hormigón liviano, rellenos estructurales, aislación térmica EPS, pendientes terraza telgopor, losas livianas, EPS construcción Argentina"
        path="/aplicaciones"
      />
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Aplicaciones constructivas</span>
          <h1>Soluciones para todo tipo de obra</h1>
          <p>El EPS y sus derivados se integran a múltiples sistemas constructivos, aportando eficiencia, ligereza y aislación en cada etapa de la obra.</p>
        </div>
      </section>

      {/* Aplicaciones grid */}
      <section className="aplicaciones-grid-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '50px' }}>
            <span className="section-tag">¿Dónde se usa?</span>
            <h2 className="section-title">Aplicaciones principales del EPS en construcción</h2>
            <p className="section-subtitle">
              Desde contrapisos hasta techos, el EPS y el telgopor molido tienen un rol clave en la construcción moderna, aportando eficiencia y reducción de costos.
            </p>
          </div>
          <div className="aplicaciones-grid">
            {aplicaciones.map((a, i) => (
              <div key={i} className="aplicacion-card">
                <div className="aplicacion-card__icon">{a.icon}</div>
                <div className="aplicacion-card__body">
                  <h3 className="aplicacion-card__title">{a.title}</h3>
                  <p className="aplicacion-card__desc">{a.desc}</p>
                  <div className="aplicacion-card__detalle">
                    <span className="aplicacion-card__detalle-icon">💡</span>
                    <p>{a.detalle}</p>
                  </div>
                  <div className="aplicacion-card__productos">
                    <span className="aplicacion-card__prod-label">Productos:</span>
                    <div className="aplicacion-card__prod-tags">
                      {a.productos.map((prod, j) => (
                        <span key={j} className="aplicacion-card__prod-tag">{prod}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas numéricas */}
      <section className="aplicaciones-stats">
        <div className="container">
          <div className="aplicaciones-stats__grid">
            {ventajas.map((v, i) => (
              <div key={i} className="aplicaciones-stat">
                <div className="aplicaciones-stat__num">{v.num}</div>
                <div className="aplicaciones-stat__label">{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split section: visual + text */}
      <section className="aplicaciones-split">
        <div className="container aplicaciones-split__inner">
          <div className="aplicaciones-split__imgs">
            <div className="aplicaciones-split__img-main">
              <img src={imgBlancoPiso} alt="Telgopor blanco para construcción" />
            </div>
            <div className="aplicaciones-split__img-secondary">
              <img src={imgNegroblanco} alt="EPS mejorado gris/negro" />
            </div>
          </div>
          <div className="aplicaciones-split__content">
            <span className="section-tag">¿Por qué EPS en tu obra?</span>
            <h2 className="section-title">El material que optimiza cada etapa de la construcción</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '24px', fontSize: '0.97rem' }}>
              El EPS no es solo un material de relleno. Es una solución técnica que permite a los profesionales de la construcción alcanzar objetivos concretos: menos carga estructural, mayor eficiencia energética, menor costo de obra y más velocidad de ejecución.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '32px', fontSize: '0.97rem' }}>
              Con más de 10 años de experiencia, podemos asesorarte sobre la dosificación y el producto más adecuado para cada tipo de aplicación en tu proyecto.
            </p>
            <div className="aplicaciones-split__actions">
              <Link to="/productos" className="btn btn-blue">Ver nuestros productos</Link>
              <Link to="/contacto" className="btn btn-outline">Consultar con un técnico</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container cta-strip__inner">
          <div className="cta-strip__text">
            <h2 className="cta-strip__title">¿Tenés un proyecto en mente?</h2>
            <p className="cta-strip__sub">Consultanos qué producto es el más adecuado para tu aplicación específica. Respondemos con asesoramiento técnico.</p>
          </div>
          <div className="cta-strip__actions">
            <Link to="/contacto" className="btn btn-primary">Consultar ahora</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
