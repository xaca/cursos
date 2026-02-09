---
title: Node js
description: Ejecutar javascript por consola o en el servidor
---

# Node js

## Instalación

Para poder ejecutar archivos de javascript sin requerir el navegador, es necesario instalar node, que se puede descargar de la pagina oficial [nodejs.com](https://nodejs.org/en/) se instala como una aplicación cualquiera por medio de un wizard o instalador y al final queda disponible como un comando de la terminal.

:::info
Adicionalmente se instala [npm](https://www.npmjs.com) que es el administrado de paquetes de node.
:::

La otra forma de configurar node, es como se explicó en la configuración del ambiente de desarrollo del principio del curso, instalamos [Laragon](/primerospasos/getting-started) el cual es un instalador que integra la configuración de varias herramientas, entre ellas node js, npm y la terminal, que será clave para esta sección.

## Prueba de funcionamiento

Para validar que node se instaló correctamente en el computador, podemos seguir los siguientes pasos creando el programa inicial hola mundo.

1. Cree una carpeta, llamada proyecto, puede estar ubicada en el escritorio
2. Ingrese a la carpeta y cree el archivo index.js
3. Escriba una línea de código donde imprima en [consola](/fundamentos/entrada_y_salida) "Hola Mundo"
4. Luego en la consola-terminal ingrese a la carpeta que creo en el paso 1, y escriba el comando `node index.js`
5. Debe ver el mensaje `Hola mundo` en la terminal como salida

## Referencias

1. [Sitio oficial de node js](https://nodejs.org/en/)
2. [Hello node](http://howtonode.org/hello-node)
3. [What is npm?](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)
4. [Getting user input in node js](https://www.codecademy.com/articles/getting-user-input-in-node-js)
5. [Posición de números hasta de 9 cifras](http://www.bartolomecossio.com/MATEMATICAS/valor_posicional_en_nmeros_de_hasta_nueve_cifras.html)

## Ejercicio

1. Realice un programa que separe un número máximo 7 digitos en unidades, decenas, centenas, millares y millones, el dato debe ser declarado en una [constante](/fundamentos/variables).
2. ¿Es posible pedir datos desde la consola con javascript? ¿Qué pasa con los métodos tradicionales para captura de datos desde el navegador?
3. ¿Qué pasa con la interfaz gráfica de un programa en node js?, ¿Qué pasa con los eventos?
4. Realice un programa que defina la función sumar, restar y luego invoque estas funciones desde el programa principal.
