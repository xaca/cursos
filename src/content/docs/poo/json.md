---
title: JSON
description: Javascript Object Notation, representación de objetos e intercambio de datos
---

# JSON

## ¿Qué es JSON?

En javascript, para crear un objeto, simplemente usamos las llaves `{}` y de esta forma ya tenemos un objeto vacio. Luego podemos ir agregando propiedades por medio del operador punto, e incluso también podemos asignar métodos.

Sin embargo hay una forma simplificada de definir un objeto, pero antes veamos unas características principales de este formato.

![Generalidades sobre el formato JSON](/images/fullstack/imagen (42).png)

## ¿Cómo se define un JSON?

En realidad es muy simple, ya que estamos hablando de objetos en Javascript, por tanto un objeto vacío en teoria ya hace referencia a un JSON, sin embargo podemos ver un JSON como una combinación de arrays y objetos, donde es posible definir una colección de datos, que posteriormente se almacenaran o se usarán para enviar a un servidor.

```javascript
let estudiantes = [
    {nombre:'Ana',apellido:'londoño',materias:['algebra','fisica','cine']},
    {nombre:'Bruno',apellido:'Jaramillo',materias:['inglés','frances']},
    {nombre:'Luz',apellido:'López',materias:['inglés','dibujo']}
];
```

Para acceder a los componentes del JSON, se usa notación de arreglo

```javascript
alert(estudiantes[1].nombre);//Accedemos al nombre de la posición 1
```

## Referencias

* [JSON parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
* [JSON stringify](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

## Ejercicio

1. Cree un JSON de 10 estudiantes, luego usando html y javascript imprima la lista de estudiantes usando un campo de seleccion combobox.
2. Agregue nuevos elementos al JSON, usando campos de texto donde se soliciten los datos básicos del estudiante.
