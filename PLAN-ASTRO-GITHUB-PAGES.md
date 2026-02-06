# Plan: Astro + GitHub Pages para holamundo.co

> Plan para crear un sitio con blog y curso Fullstack usando Astro, desplegado en GitHub Pages.

---

## 1. Resumen

- **Stack**: Astro (static site generator) + GitHub Pages
- **Contenido**: Blog (posts) + Curso Fullstack (documentación migrada)
- **Dominio**: holamundo.co (CNAME ya configurado)

---

## 2. Por qué Astro + GitHub Pages

| Ventaja | Descripción |
|---------|-------------|
| **Markdown nativo** | Escribir posts y lecciones en `.md` con frontmatter |
| **Zero JS por defecto** | Sitio rápido, sin JavaScript innecesario |
| **Content Collections** | Tipado y validación de contenido |
| **Build estático** | HTML pre-renderizado, ideal para SEO |
| **GitHub Pages** | Hosting gratuito, despliegue automático |
| **MDX opcional** | Componentes React/Vue dentro de Markdown si se necesita |

---

## 3. Estructura del proyecto

```
cursos/
├── src/
│   ├── content/
│   │   ├── blog/              # Posts del blog
│   │   │   └── 2025-02-06-bienvenida.md
│   │   └── fullstack/         # Lecciones del curso
│   │       ├── config.ts      # Schema de la colección
│   │       ├── 01-primeros-pasos/
│   │       │   ├── ambiente-desarrollo.md
│   │       │   ├── terminal-y-repositorio.md
│   │       │   └── github.md
│   │       ├── 02-trabajo-en-equipo/
│   │       ├── 03-algoritmos/
│   │       ├── 04-fundamentos/
│   │       ├── 05-poo/
│   │       ├── 06-backend/
│   │       └── 07-proyecto/
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro        # Home
│   │   ├── blog/
│   │   │   ├── index.astro    # Lista de posts
│   │   │   └── [...slug].astro
│   │   └── fullstack/
│   │       ├── index.astro    # Índice del curso
│   │       └── [...slug].astro
│   └── components/
├── public/
│   └── images/
├── astro.config.mjs
├── CNAME                      # holamundo.co
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions
└── package.json
```

---

## 4. Despliegue en GitHub Pages

### Requisitos

- GitHub Pages debe servir desde la rama `gh-pages` o la carpeta `/docs`
- Astro genera en `dist/` por defecto
- Se usa **GitHub Actions** para build + deploy

### Workflow básico (`.github/workflows/deploy.yml`)

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Configuración en Astro

En `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://holamundo.co',
  base: '/',  // o '/cursos/' si está en subpath
});
```

---

## 5. Recomendaciones de templates

### Para el curso (documentación)

| Template | Tipo | Enlace | Notas |
|----------|------|--------|-------|
| **Starlight** | Oficial Astro | [starlight.astro.build](https://starlight.astro.build/) | Pensado para docs: sidebar, búsqueda, i18n, dark mode. Ideal para el curso Fullstack. |
| **Astro Docs** | Docs | [astro.build/themes](https://astro.build/themes/?categories[]=docs) | Varios temas de documentación en el catálogo. |
| **Docusaurus-style** | Docs | Temas de terceros | Si prefieres estilo similar a Docusaurus. |

**Recomendación principal para curso**: **Starlight**

- Navegación lateral automática
- Búsqueda integrada
- Soporte para Markdown y MDX
- Componentes: callouts, tabs, etc.
- SEO y accesibilidad

```bash
npm create astro@latest -- --template starlight
```

### Para el blog

| Template | Tipo | Enlace | Notas |
|----------|------|--------|-------|
| **Astro Blog** (oficial) | Blog | `npm create astro@latest -- --template blog` | Mínimo, rápido, RSS, sitemap. |
| **AstroPaper** | Blog | [GitHub](https://github.com/satnaing/astro-paper) | Minimal, responsive, SEO, dark mode. |
| **Accessible Astro Starter** | Blog | [astro.build/themes](https://astro.build/themes) | WCAG, Tailwind 4, accesible. |
| **Blog themes** | Varios | [astro.build/themes?categories[]=blog](https://astro.build/themes/1/?categories[]=blog) | Catálogo de temas de blog. |

**Recomendación principal para blog**: **Astro Blog** (oficial) o **AstroPaper**

- Astro Blog: sencillo, listo para empezar
- AstroPaper: más opciones de personalización y diseño

---

## 6. Estrategia: un sitio o dos

### Opción A: Un solo sitio Astro (recomendada)

- Un proyecto Astro con:
  - `/` → Home
  - `/blog` → Blog
  - `/fullstack` → Curso
- Un solo build y un solo despliegue.
- Compartir layout, estilos y componentes.

### Opción B: Starlight para curso + tema blog

- Usar Starlight como base.
- Añadir sección de blog con páginas dinámicas.
- Starlight permite integrar páginas custom además de docs.

### Opción C: Dos proyectos separados

- Repo `cursos` → solo curso (Starlight)
- Repo `blog` → solo blog
- Más flexibilidad, pero más mantenimiento.

**Recomendación**: Opción A con Starlight como base, extendiendo con una sección de blog.

---

## 7. Formato de contenido Markdown

### Blog post

```markdown
---
title: "Mi primer post"
description: "Breve descripción para SEO"
pubDate: 2025-02-06
tags: ["javascript", "tips"]
---

Contenido del post en **markdown**...
```

### Lección del curso

```markdown
---
title: "Ambiente de desarrollo"
description: "Configuración del entorno de desarrollo"
sidebar:
  order: 1
---

## Lista de herramientas

- Editor de texto plano
- Terminal de comandos
...
```

---

## 8. Migración del contenido Fullstack

| Paso | Acción |
|------|--------|
| 1 | Clonar `xaca/teoria_programacion` |
| 2 | Copiar `.md` a `src/content/fullstack/` con la estructura definida |
| 3 | Copiar `.gitbook/assets/` a `public/images/fullstack/` |
| 4 | Ajustar rutas de imágenes en los `.md` |
| 5 | Reescribir enlaces internos entre lecciones |
| 6 | Añadir frontmatter a cada lección |
| 7 | Incluir atribución en la página principal del curso |

---

## 9. Checklist de implementación

- [ ] Crear proyecto Astro (`npm create astro@latest`)
- [ ] Elegir y configurar template (Starlight para curso + blog)
- [ ] Configurar `site` y `base` en `astro.config.mjs`
- [ ] Crear Content Collection para blog
- [ ] Crear Content Collection para fullstack
- [ ] Añadir workflow de GitHub Actions
- [ ] Configurar GitHub Pages (branch `gh-pages`)
- [ ] Copiar CNAME a `public/` para que se incluya en el deploy
- [ ] Migrar contenido Fullstack
- [ ] Escribir primeros posts de blog
- [ ] Probar build local (`npm run build`)
- [ ] Verificar despliegue en holamundo.co

---

## 10. Referencias

- [Astro Docs](https://docs.astro.build/)
- [Starlight](https://starlight.astro.build/)
- [Astro + GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro Themes](https://astro.build/themes)
- [xaca/teoria_programacion](https://github.com/xaca/teoria_programacion) (fuente del curso)
