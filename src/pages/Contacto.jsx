import { useState } from 'react'
import './Contacto.css'

const productos = [
  'EPS (Telgopor)',
  'Telgopor Molido Blanco',
  'Telgopor Molido Gris/Negro',
  'Ligante para Telgopor',
  'Varios / Consulta general',
]

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    producto: '',
    mensaje: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // En producción, aquí iría el envío real del formulario
    setSubmitted(true)
  }

  return (
    <div className="contacto-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Contacto</span>
          <h1>Hablemos sobre tu proyecto</h1>
          <p>Completá el formulario y nuestro equipo técnico te responderá a la brevedad con asesoramiento personalizado.</p>
        </div>
      </section>

      {/* Main content */}
      <section className="contacto-main">
        <div className="container contacto-main__inner">
          {/* Form */}
          <div className="contacto-form-col">
            <div className="contacto-form-card">
              <div className="contacto-form-card__header">
                <h2>Envianos tu consulta</h2>
                <p>Completá todos los campos para que podamos brindarte la información más precisa.</p>
              </div>

              {submitted ? (
                <div className="contacto-success">
                  <div className="contacto-success__icon">✅</div>
                  <h3>¡Consulta enviada!</h3>
                  <p>Recibimos tu mensaje. Nuestro equipo técnico se pondrá en contacto a la brevedad.</p>
                  <button
                    className="btn btn-blue"
                    onClick={() => { setSubmitted(false); setForm({ nombre:'', empresa:'', telefono:'', email:'', producto:'', mensaje:'' }) }}
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form className="contacto-form" onSubmit={handleSubmit}>
                  <div className="contacto-form__row">
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre completo *</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Juan García"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="empresa">Empresa / Estudio</label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        placeholder="Constructora XYZ"
                      />
                    </div>
                  </div>

                  <div className="contacto-form__row">
                    <div className="form-group">
                      <label htmlFor="telefono">Teléfono *</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="+54 11 1234-5678"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="juan@empresa.com.ar"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="producto">Producto de interés *</label>
                    <select
                      id="producto"
                      name="producto"
                      value={form.producto}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccioná un producto...</option>
                      {productos.map(p => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje">Mensaje / Detalle de la consulta *</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describí tu consulta: tipo de obra, cantidades aproximadas, aplicación prevista, etc."
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary contacto-submit-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Enviar consulta
                  </button>
                  <p className="contacto-form__note">
                    * Campos obligatorios. Tu información es confidencial y no será compartida con terceros.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Info sidebar */}
          <div className="contacto-info-col">
            <div className="contacto-info-card">
              <h3 className="contacto-info-card__title">Información de contacto</h3>

              <div className="contacto-info-items">
                <div className="contacto-info-item">
                  <div className="contacto-info-item__icon">📍</div>
                  <div>
                    <div className="contacto-info-item__label">Ubicación</div>
                    <div className="contacto-info-item__val">Buenos Aires, Argentina</div>
                  </div>
                </div>
                <div className="contacto-info-item">
                  <div className="contacto-info-item__icon">📞</div>
                  <div>
                    <div className="contacto-info-item__label">Teléfono</div>
                    <div className="contacto-info-item__val">Consultá por nuestro número</div>
                  </div>
                </div>
                <div className="contacto-info-item">
                  <div className="contacto-info-item__icon">✉️</div>
                  <div>
                    <div className="contacto-info-item__label">Email</div>
                    <div className="contacto-info-item__val">Consultá por nuestro email</div>
                  </div>
                </div>
                <div className="contacto-info-item">
                  <div className="contacto-info-item__icon">🕐</div>
                  <div>
                    <div className="contacto-info-item__label">Horario de atención</div>
                    <div className="contacto-info-item__val">Lunes a Viernes: 8:00 – 18:00 hs</div>
                    <div className="contacto-info-item__val">Sábados: 8:00 – 13:00 hs</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contacto-response-card">
              <div className="contacto-response-card__icon">⚡</div>
              <h4>Respuesta rápida garantizada</h4>
              <p>
                Nuestro equipo responde todas las consultas dentro de las <strong>24 horas hábiles</strong> con información técnica precisa sobre el producto adecuado para cada obra.
              </p>
            </div>

            <div className="contacto-asesor-card">
              <div className="contacto-asesor-card__header">
                <span className="contacto-asesor-card__icon">🔬</span>
                <h4>Asesoramiento técnico incluido</h4>
              </div>
              <p>
                Al contactarnos, accedés a más de 10 años de experiencia en EPS para construcción. Te orientamos sobre dosificación, cantidades y la solución más adecuada para tu proyecto específico.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
