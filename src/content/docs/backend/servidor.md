---
title: Servidor
description: Crear un servidor con node js que funciona local o en la nube
---

# Servidor

## ¿Qué es un servidor?

Es un servicio que esta corriendo por lo general en un puerto y esta esperando por peticiones o solicitudes desde un cliente. El cliente puede ser un usuario que esta conectado al servidor desde un dispositivo, puede ser un celular o un computador y esta interactuando con el servicio por medio de un navegador o aplicación.

El servidor se encarga de procesar las peticiones del cliente, según como este programado para responder dependiendo de los parámetros de entrada, el tipo de solicitud, el nivel de acceso a la información, los roles de los usuarios entre otras características a tener en cuenta en la comunicación cliente servidor.

## ¿Qué es el localhost?

Este es el nombre que se le da al servidor local o en otras palabras a la configuración de un servidor que solo funciona en el computador del usuario que configura el servicio, por lo general un desarrollador de software.

Se puede acceder de dos formas, por medio de una carpeta de proyecto, para editar los archivos y modificar lo que pasará del lado del servidor cuando la aplicación se publique en internet y la otra forma es a través del navegador accediendo a la url localhost o la dirección ip local 127.0.0.1, para poder ingresar a esta url, debemos tener corriendo el servicio local.

:::info
node js, permite crear un servidor local. De manera nativa o por medio de un paquete.
:::

## ¿Qué es un paquete de node js?

Un paquete es un conjunto de funciones o clases, que por lo general estan agrupados en carpetas denominadas librerías, básicamente son programas que estan listos y podemos reutilizar en nuestros proyectos para no partir desde cero al realizar una aplicación.

Los paquetes por tanto se utilizan para soportar funcionalidades comunes en una aplicación, de uso constante y que ya han sido desarrolladas, probadas y usadas en diferentes proyectos de software, se integran de manera sencilla con el proyecto.

Es posible realizar el control de versiones y validar cuales son los paquetes o dependencias que requiere el proyecto para funcionar, actualizar las dependencias o solicitar una versión especifica del paquete.

Los paquetes estan en repositorios que por lo general tienen administración del equipo creador del paquete, y se centran en un sitio que funciona como buscador e indexador de los paquetes en sitios como [npmjs](https://www.npmjs.com) donde se suben los paquetes con la información de su instalación y uso, además de la fecha de creación, las versiones e incluso un historial de cambios.
