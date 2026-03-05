import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.qbick.com.ar' // Reemplazar con el dominio real cuando esté disponible

export default function SEOHead({ title, description, keywords, path = '', schema = null }) {
  const fullUrl = `${SITE_URL}${path}`
  const fullTitle = title.includes('QBICK') ? title : `${title} | QBICK`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content="QBICK - Soluciones en EPS" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
