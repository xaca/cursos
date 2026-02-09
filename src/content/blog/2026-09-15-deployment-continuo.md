---
title: "Deployment continuo con GitHub Actions"
description: "Automatiza el despliegue de tu aplicación cada vez que hagas push al repositorio."
pubDate: 2026-09-15
tags: ["devops", "github", "ci/cd", "deployment"]
---

GitHub Actions permite ejecutar flujos de trabajo automáticos: construir, testear y desplegar tu aplicación sin intervención manual.

## Flujo típico

1. **Push** a la rama principal.
2. **Build**: Compila el proyecto.
3. **Test**: Ejecuta las pruebas.
4. **Deploy**: Publica en producción (Vercel, Netlify, etc.).

## Ejemplo básico

```yaml
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install && npm run build
```

Próximamente: tutorial de CI/CD en el curso Fullstack.
