---
title: Variables
description: Conceptos básicos sobre variables y contenedores de datos en javascript
---

# Variables

## ¿Qué es una variable?

Es un espacio reservado en memoria que sirve para almacenar un dato, el valor almacenado tiene asociado un tipo que depende de las características de la información, a continuación se mencionan algunos tipos importantes:

* Cadenas: Permite la representación de un valor alfanúmerico, como texto, documentos de identidad, telefonos, direcciones, etc.
* Números: Representación de un valor númerico, puede tener una parte decimal, si es así se llaman números flotantes (float) o sin parte decimal, que son los enteros (int).
* Booleanos: Permiten representar un valor de verdad, que es verdadero (true) o falso (false) en javascript hay otros valores que pueden ser verdaderos o falsos, esos los estudiaremos más adelante.
* Arreglos y Objetos: Estos tipos de datos en realidad son contenedores que estan compuestos internamente por otros datos y características, también se estudiaran más adelante.

### Modificadores de variable

Indica como debe ser creada e interpretada una variable por javascript, hay 4 formas de crear variables, teniendo presente su modificador:

:::info
El modificador, define como se va a comportar la variable
:::

* Sin modificador, es posible crear una variable sin asignar un modificador, simplemente se reserva el espacio y se asigna el valor, javascript en el momento de asignación de un valor a una variable, la crea, siempre y cuando no se haya definido previamente y además que no tenga un modificador de acceso

```javascript
variable = valor
```

* **var:** Permite crear una variable y le asigna un contexto, por ejemplo se usa para definir variables locales en una función, este tema se explicará más adelante

```javascript
function contextoLocal(){
    var variable_local = 5;
}
```

* **let:** Evita que la variable pueda ser redeclarada, esto con el fin de dar mayor orden a la escritura del código y evitar repetir valores que pueden ser claves para la lógica de la aplicación por **ejemplo** nombre_usuario

El siguiente código no es posible, aparece un error

```javascript
let variable = 5;
let variable = 6;
```

Lo correcto es declarar la variable y luego asignar y reasignarla las veces que sea necesario.

```javascript
let nombre_usuario;

nombre_usuario = "Anónimo";
nombre_usuario = "xaca rana";
```

* **const:** Se debe declarar y asignar inmediatamente, no puede ser reasignada, se usa para definir un valor constante, que no cambia.

Las siguientes operaciones no esta permitidas

```javascript
const variable;
variable = 5;
```

```javascript
const variable2 = 5;
variable2 = 6
```

Al usar una constante se debe asignar el valor inmediatamente cuando se declara, además como sugerencia las constantes se escriben en mayúscula sostenida.

```javascript
const IMPUESTO = 1.19;
let precio = 100000;

console.log("total=",precio*IMPUESTO);
```

En el siguiente video se explica como usar las variables en javascript y sus modificadores

[Explicación sobre como funcionan las variables en javascript](https://www.youtube.com/watch?v=cQscAQjovFg)

### Enlaces de referencia

* Definición [undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined)
* Ejemplo de referencia en [codepen](https://codepen.io/xaca/pen/rNjzgbK)
* Explicación sobre [variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables) en javascript

### Ejercicio

* Lea la teoria sobre [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof), relacione la lectura con el concepto de variable
* Crear una variable y asignar e imprimir los valores, usando la opción typeof, explicada en el paso anterior
* ¿Cuál es el valor por defecto de una variable luego de ser declarada con var o con let?
* Por último en codepen, realice un pequeño script que utilice 1 variable sin modificador, 2 variables con modificador var y asigne un flotante y un boolean, 3 variables con modificador let y asigne valores entero, cadena y arreglo, por último cree una constante que represente el número PI.
