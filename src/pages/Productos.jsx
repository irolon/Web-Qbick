import { Link } from 'react-router-dom'
import imgEpsBlanco from '../assets/Img-telgopor-blanco.png'
import imgBolsaBlanco from '../assets/Img-Bolsa-telgopor-blanco.png'
import imgBolsaNegro from '../assets/Img-Bolsa-telgopor-negro.png'
import imgLigante from '../assets/Img-Ligante.png'
import './Productos.css'

const productos = [
  {
    id: 1,
    img: imgEpsBlanco,
    name: 'EPS (Telgopor)',
    categoria: 'Aislación · Estructura',
    descripcion:
      'El EPS (Poliestireno Expandido), conocido comercialmente como Telgopor®, es un material expandido compuesto mayormente por aire. Ofrece una gran capacidad de aislación térmica, estabilidad dimensional a lo largo del tiempo y bajo peso estructural.',
    uso: 'En construcción se utiliza para alivianar cargas en losas y contrapisos, mejorar la eficiencia energética de edificios y facilitar la ejecución de sistemas constructivos innovadores como SISMO, ICF y Steel Frame.',
    beneficios: [
      'Alta aislación térmica y acústica',
      'Muy bajo peso (95% aire)',
      'Excelente estabilidad dimensional',
      'Resistente a la humedad',
      'Fácil de cortar y manipular en obra',
      'Compatible con sistemas constructivos modernos',
    ],
    color: '#2563a8',
  },
  {
    id: 2,
    img: imgBolsaBlanco,
    name: 'Telgopor Molido Blanco',
    categoria: 'Contrapisos · Rellenos · Mezclas',
    descripcion:
      'El Telgopor molido o triturado es poliestireno expandido procesado que se utiliza como agregado liviano en mezclas cementicias. Permite reducir significativamente el peso del hormigón o mortero resultante respecto a los preparados con arena convencional.',
    uso: 'Ideal para morteros aliviados, contrapisos térmicos, rellenos de pendientes en terrazas, carpetas aislantes y cualquier aplicación donde se requiera reducir carga muerta sin perder eficiencia constructiva.',
    beneficios: [
      'Reduce el peso de la mezcla un 50–70%',
      'Mejora la aislación térmica del contrapiso',
      'Optimiza costos en rellenos y carpetas',
      'Excelente trabajabilidad',
      'Menor impacto en estructura portante',
      'Disponible en bolsas de diferentes tamaños',
    ],
    color: '#2563a8',
  },
  {
    id: 3,
    img: imgBolsaNegro,
    name: 'Telgopor Molido Gris/Negro',
    categoria: 'Alta eficiencia · Térmico · EPS mejorado',
    descripcion:
      'El Telgopor molido gris o negro es poliestireno expandido triturado con aditivos grafitados que incrementan su capacidad de aislación térmica en aproximadamente un 15% respecto al EPS tradicional blanco. Es el EPS mejorado de última generación.',
    uso: 'Permite obtener morteros y hormigones aliviados con mejor desempeño térmico, menor transmisión de calor y mayor eficiencia energética. Mantiene las mismas ventajas de bajo peso estructural y excelente trabajabilidad del EPS blanco, con prestaciones térmicas superiores.',
    beneficios: [
      '+15% de aislación térmica vs EPS blanco',
      'Menor transmisión de calor en el cerramiento',
      'Morteros aliviados de alta eficiencia energética',
      'Igual trabajabilidad que el EPS estándar',
      'Aditivos grafitados homogéneamente distribuidos',
      'Ideal para proyectos con requisitos energéticos estrictos',
    ],
    color: '#475569',
  },
  {
    id: 4,
    img: imgLigante,
    name: 'Ligante para Telgopor',
    categoria: 'Adhesión · Mezclas · Cohesión',
    descripcion:
      'El ligante para telgopor es un producto especializado que mejora la adherencia y cohesión entre las partículas de EPS molido y los componentes cementicios de la mezcla. Garantiza una distribución homogénea del agregado liviano y mejora las propiedades mecánicas del mortero aliviado resultante.',
    uso: 'Se incorpora directamente a la mezcla de telgopor molido con cemento y agua, mejorando la trabajabilidad, evitando la segregación del EPS y asegurando un producto final con mayor resistencia y durabilidad.',
    beneficios: [
      'Mejora la adherencia EPS-cemento',
      'Evita la segregación del telgopor',
      'Mayor resistencia mecánica del mortero',
      'Mejor distribución del agregado liviano',
      'Disponible en envases de 1 litro y 5 litros',
      'Fácil aplicación y dosificación',
    ],
    color: '#16a34a',
    formatos: ['1 Litro', '5 Litros'],
  },
]

export default function Productos() {
  return (
    <div className="productos-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Nuestros productos</span>
          <h1>Líneas de producto especializadas en EPS</h1>
          <p>Cuatro familias de productos pensadas para resolver cualquier desafío constructivo con materiales livianos, técnicos y de calidad.</p>
        </div>
      </section>

      {/* Products list */}
      <section className="productos-list">
        <div className="container">
          {productos.map((p, i) => (
            <div key={p.id} className={`product-card ${i % 2 !== 0 ? 'product-card--reverse' : ''}`}>
              <div className="product-card__image-col">
                <div className="product-card__img-frame">
                  <img src={p.img} alt={p.name} />
                </div>
                {p.formatos && (
                  <div className="product-card__formatos">
                    <span className="product-card__formatos-label">Formatos disponibles:</span>
                    <div className="product-card__formatos-list">
                      {p.formatos.map(f => (
                        <span key={f} className="product-card__formato-tag">{f}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="product-card__body">
                <span className="product-card__cat">{p.categoria}</span>
                <h2 className="product-card__name">{p.name}</h2>
                <p className="product-card__desc">{p.descripcion}</p>
                <div className="product-card__uso">
                  <strong>Uso principal:</strong>
                  <p>{p.uso}</p>
                </div>
                <div className="product-card__benefits">
                  <h4>Beneficios clave</h4>
                  <ul>
                    {p.beneficios.map((b, j) => (
                      <li key={j}>
                        <span className="product-card__check">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="product-card__actions">
                  <Link to="/contacto" className="btn btn-primary">
                    Consultar precio
                  </Link>
                  <Link to="/aplicaciones" className="btn btn-outline">
                    Ver aplicaciones
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip" style={{ background: 'linear-gradient(135deg, #1a3a5c 0%, #1e4976 100%)' }}>
        <div className="container cta-strip__inner">
          <div className="cta-strip__text">
            <h2 className="cta-strip__title">¿Necesitás más información sobre nuestros productos?</h2>
            <p className="cta-strip__sub">Nuestro equipo técnico puede asesorarte sobre qué producto y dosificación es la más adecuada para tu obra.</p>
          </div>
          <div className="cta-strip__actions">
            <Link to="/contacto" className="btn btn-primary">Solicitar asesoramiento</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
