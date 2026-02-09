---
title: ¿Qué es POO?
description: Programación Orientada a Objetos, conceptos generales para crear programas orientados a objetos
---

# ¿Qué es POO?

## ¿Qué es una clase?

Es una plantilla o un molde, que se usa para abstraer propiedades y acciones de un elemento de la realidad que se va a representar en un sistema. Esta plantilla además de representar dicha abstracción servirá para crear copias del concepto y posteriormente ser usado en un programa.

![Abstracción del concepto estudiante en una clase](/images/fullstack/imagen (40).png)

:::info
Al abstraer, se simplifica y se consigna en la clase lo escencial que permita representar el concepto analizado.
:::

Las clases tiene dos partes, la primera esta compuesta por las propiedades, que son las variables que definen las características del concepto, en el ejemplo anterior serían `nombre`,`apellido` y `edad.` También llamados atributos o miembros dato, estas variables por lo general son de tipos primitivos como string, boolean, number, adicionalmente también pueden ser objetos que los definiremos más adelante.

La siguiente parte son las acciones, funciones o métodos. Por medio de módulos se definen las acciones que el objeto puede realizar, en el ejemplo del estudiante los métodos son: `Estudiante`, `estudiar` y `leer.` Estas son las acciones que se pueden invocar en los objetos de tipo Estudiante, basicamente son funciones asociadas a la variable que define el concepto estudiante.

:::info
La función `Estudiante` se conoce como el constructor de la clase, la cual será usada para crear las copias de la clase.
:::

## ¿Qué es un objeto?

Es una copia creada a partir de una clase, cada copia tendra las propiedades y acciones que representan el concepto las cuales pueden ser almacenadas en una variable y posteriormente ser modificadas en tiempo de ejecución.

![Objetos, copias creadas a partir de la clase Estudiante.](/images/fullstack/imagen (39).png)

## ¿Cómo se crea una clase en Javascript?

Por lo general, se debe crear primero la clase y luego crear las copias que son los objetos, sin embargo javascript por tener una sintaxis tan flexible, disponen diferentes formas de crear una clase y luego crear las copias de esas clases, miremos algunas alternativas que nos permite el lenguaje.

:::info
En javascript **no** es necesario crear la definición de la clase para crear el objeto, es posible crear el objeto directamente en tiempo de ejecución, sin embargo en muchos situaciones es conveniente crear previamente la clase.
:::

### Usando `function` para encapsular la clase

Como vimos en la sección anterior sobre fundamentos, las funciones cumplen diferentes facetas en el programa, pueden ser anonimas, pueden asignarse a funciones y en este caso podemos asignarle propiedades que son miembros datos y métodos.

```javascript
//Primero se definen las propiedades de la clase
function estudiar()
{
  console.log('Recibir la clase');
}

function leer(libro)
{
  console.log("El estudiante es leyendo ",libro);
}

//this es una palabra reservada que hace referencia al mismo objeto
//Se utiliza para definir las propiedades del objeto
function saludar()
{
  console.log("Buenos días profesor, mi nombre es");
  console.log(this.nombre,this.apellido);
}

//Luego se define el método contructor, de Estudiante
//inicializa las propiedades y asigna métodos
function Estudiante(nombre,apellido)
{
  this.nombre = nombre;
  this.apellido = apellido;
  
  this.leer = leer;//Se asigna la función que se definió previamente
  this.estudiar = estudiar;
  this.saludar = saludar;
}
```

:::info
Por convención los nombres de las clases se definen en mayúscula inicial
:::

Esta sería la definición de la clase, el modelo de estudiante ya esta cargado en el programa y se pueden crear copias, a este proceso también se le denomina instanciamiento.

```javascript
var e1 = new Estudiante("Rufo","Sanchez"); //Se crea la instancia
e1.saludar();//Se invoca un método
```

:::info
La palabra reservada `new` permite crear nuevas instancias de `Estudiante`
:::

### Usando `prototype` para asignar los métodos de clase

La palabra clave `prototype` permite definir métodos adicionales a una clase, se puede usar para agregar nuevas acciones a clases ya existentes como String, Number, Math...

```javascript
function Estudiante(nombre,apellido)
{
  this.nombre = nombre;
  this.apellido = apellido;
}

Estudiante.prototype.estudiar = function(){
  console.log("Recibir la clase");
}

Estudiante.prototype.leer = function(libro){
  console.log("El estudiante es leyendo ",libro);
}

Estudiante.prototype.saludar = function(){
  console.log("Buenos días profesor, mi nombre es");
  console.log(this.nombre,this.apellido);
}
```

Al usar `prototype`, creamos métodos de instancia, en el prototipo del constructor del objeto. Por tanto podemos hacer referencia a los miembros dato usando `this.`

:::info
Es posible no usar prototype, de esta forma definimos métodos de clase, los cuales no hacen referencia a los miembros datos usando `this`.
:::

```javascript
Estudiante.hacerTarea = function(materia)
{
  console.log("Haciendo la tarea de",materia);
}
```

Para crear la instancia y usar los métodos se hace de manera similar

```javascript
var e2 = new Estudiante("Ana","Londoño"); //Se crea la instancia
e2.saludar();//Se invoca un método
Estudiante.hacerTarea("Quimica");//Método de clase no de instancia
```

### Creación de una clase

Se usa la palabra reservada class, se define la clase en un solo bloque, lo cual permite crear un código más limpio y fácil de entender.

```javascript
class Estudiante{

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  
  estudiar(){
    console.log("Recibir la clase");
  }

  leer(libro){
    console.log("El estudiante es leyendo ",libro);
  }
  
  saludar(){
    console.log("Buenos días profesor, mi nombre es");
    console.log(this.nombre,this.apellido);
  }
  
}
```

La ventaja de las diferentes versiones vistas su forma de uso es muy similar

```javascript
var e2 = new Estudiante("Luz","Lopez"); //Se crea la instancia
e2.saludar();//Se invoca un método
```

### Todo es un objeto en javascript

Con diferencia a otros lenguajes de programación, javascript permite crear un objeto en tiempo de ejecución y agregar, propiedades y métodos por demanda, o según se vaya necesitando.

```javascript
let estudiante = {};
estudiante.nombre = "Bruno";
estudiante.apellido = "Jaramillo";
estudiante.saludar = function()
{
  console.log("Hola, mi nombre es",this.nombre,this.apellido);
}
estudiante.saludar();
```

:::info
Un objeto se puede definir simplemente usando llaves `{ }` y paulatinamente agregar propiedades y métodos, o incluso se puede agregar inmediatamente, como se muestra en el siguiente ejemplo equivalente.
:::

```javascript
let estudiante = {
nombre:"Bruno",
apellido:"Jaramillo",
saludar:function(){console.log("Hola, mi nombre es",this.nombre,this.apellido)}
};
estudiante.saludar();
```

## Referencias

* [MDN clases](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [Class basic syntax](https://javascript.info/class)
* [Undestanding classes in javascript](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)
* [Números complejos](https://www.rbjlabs.com/algebra/operaciones-con-numeros-complejos/)

## Ejercicios

1. Crear la clase Complejo para representar un número complejo y defina las siguientes propiedades y métodos: impresion en notación compleja, suma, resta y múltiplicación.
2. Definir la clase circulo, definir sus propiedades e implementar los métodos area, diametro y circunferencia.
3. Cree un array de ciruclos, y calcule el promedio de sus radios.
4. Complete la clase estudiante, cree la clase Materia y Profesor. Asigne un profesor a una Materia y defina una propiedad en estudiante donde se asignen las materias matriculadas en el semestre, luego relice un método que cálcule el promedio de las materias del semestre.
