// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://holamundo.co',
  base: '/',
  integrations: [
    tailwind(),
    starlight({
      title: 'Curso Fullstack',
      description: 'Teoría, ejercicios y contenido para aprender programación.',
      customCss: ['./src/styles/starlight-overrides.css'],
      components: {
        MobileMenuToggle: './src/components/MobileMenuToggle.astro',
        Pagination: './src/components/Pagination.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      sidebar: [
        { label: 'Inicio', link: '/' },
        { label: 'Blog', link: '/blog' },
        { label: 'Primeros pasos', autogenerate: { directory: 'primerospasos' } },
        { label: 'Trabajo en equipo', autogenerate: { directory: 'trabajo-en-equipo' } },
        { label: 'Algoritmos', autogenerate: { directory: 'algoritmos' } },
        { label: 'Fundamentos', autogenerate: { directory: 'fundamentos' } },
        { label: 'POO', autogenerate: { directory: 'poo' } },
        { label: 'Backend', autogenerate: { directory: 'backend' } },
        { label: 'Proyecto', autogenerate: { directory: 'proyecto' } },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/xaca/teoria_programacion',
        },
      ],
    }),
  ],
});