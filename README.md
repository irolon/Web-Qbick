# EPS Construcción - Sitio Web

Sitio web profesional para empresa de venta de EPS (Telgopor) para construcción.

## Vista previa inmediata

Abrir `preview.html` directamente en el navegador. Funciona sin instalación.

## Desarrollo con React + Vite

```bash
cd eps-web
npm install
npm run dev
```

Luego visitar: http://localhost:5173

## Build para producción

```bash
npm run build
```

## Estructura del proyecto

```
eps-web/
├── index.html
├── preview.html        ← Vista previa sin build
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/         ← Imágenes del producto
    ├── components/
    │   ├── Navbar.jsx + Navbar.css
    │   └── Footer.jsx + Footer.css
    └── pages/
        ├── Home.jsx + Home.css
        ├── Productos.jsx + Productos.css
        ├── Aplicaciones.jsx + Aplicaciones.css
        ├── Empresa.jsx + Empresa.css
        └── Contacto.jsx + Contacto.css
```

## Rutas

- `/` → Home
- `/productos` → Productos
- `/aplicaciones` → Aplicaciones
- `/empresa` → Empresa
- `/contacto` → Contacto
