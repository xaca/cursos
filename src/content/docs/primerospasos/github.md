---
title: GitHub
description: Red social de desarrolladores, control de versiones y colaboración
---

# GitHub

## Primeros pasos

Para entender qué es y cómo funciona github, se deben entender dos conceptos primero:

## 1. Control de versión

Ayuda a llevar un registro de todos y cada uno de los cambios en el código en un proyecto de software. Supongamos que estamos diseñando una página web, de esta página tenemos dos versionas, una que es la que ve el usuario y otra que es donde estamos haciendo los cambios y probándolos. No queremos que, a medida que vamos haciendo los cambios, el usuario pueda verlos sin antes probarlos en un ambiente más controlado, donde podamos mirar que tan bien funciona.

Por este motivo, los desarrolladores trabajan con dos términos importantes:

```text
Bifurcación (branch): donde hacen una copia de todo el codigo en otra carpeta o
"rama", como se llama comunmente y puede realizar cambios sin afectar el codigo
original, esta rama luego se fusiona con la original si queremos que los cambios sean
vistos allí.
Fusión (merge): es en donde los cambios de las diferentes ramas pueden quedar en el
codigo original o codigo que se le mostrará al usuario.
```

La mayor ventaja de esto, es que varias personas puedne estar trabajndo en diferentes ramas con el codigo original y realizando cambios en diferentes archivos, para al final unirlo a uno solo. Github se encarga de evaluar que cambios se han hecho y deben subirse a la nube (repositorio)

## 2. Git

No solamente existe github, también existen otras plataformas como gitlab, bitbucket, pero todos ellos utilizan git para el manejo de versiones. Git implementa toda una estrategia y una serie de comandos para acceder a los proyectos (repositorios) y controlar sus versiones.

Para utilizar los comando de git debe instalarse en el dispositivo a utilizar. [https://git-scm.com/](https://git-scm.com/)

## 3. Utilizar github

Github facilita la colaboración con git, para que diferentes desarrolladores puedan trabajar en unn solo proyecto y ver los cambios en tiempo real, también incluye funciones de organización y gestión de proyectos. Puede asignar tareas a individuos o grupos, establecer permisos y roles para los colaboradores y usar la moderación de comentarios para mantener a todos en la tarea.

```text
1. Descargue e instale git
2. Cree su primer repositorio, utilizando la guia
3. Cree una cuenta gratuita en github
4. Añadir un nuevo repositorio y su cuenta de github
5. Suba los cambios a su repositorio en la nube
```

:::info
Si usas por primera vez github y los comandos de git, es probable que al enviar los datos por medio de un push al repositorio, se pida nombre y correo. En esta [guía](https://linuxize.com/post/how-to-configure-git-username-and-email/) se explica como hacer la configuración.
:::
