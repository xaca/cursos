---
title: Relaciones entre clases
description: Modelar las diferentes partes del programa como clases que se puedan instanciar y reutilizar
---

# Relaciones entre clases

## Recomendaciones para el uso de clases

Cada clase se debe definir en un archivo javascript separado, y se debe importar en el documento html antes de su uso. También es posible concatenar varias clases en un solo archivo y luego minificar el archivo con toda la lógica del sistema, a este proceso se le llama minificación.

![Diagrama de clases relacionadas](/images/fullstack/imagen (41).png)

El orden de relación define que debe ir antes, en cuanto a la definición de una clase, por tanto primero se define la clase profesor.js

```javascript
class Profesor{
    constructor(){
        this.nombre = undefined;
        this.correo = undefined;
    }
}
```

Luego la clase materia.js que requiere de un profesor asignado

```javascript
class Materia{
  constructor(){
    this.nombre = undefined;
    this.notas = [];
    this.profesor = undefined;
  }
  
  agregarProfesor(profesor)
  {
    this.profesor = profesor;
  }
}
```

Y por último la clase estudiante que usa a materia.js y a profesor.js, estos dos archivos contienen la definición de las clases respectivas.

```javascript

class Estudiante {
    constructor(){
        this.nombre = undefined;
        this.apellido = undefined;
        this.materias = [];
    }
    agregarMateria(materia)
    {
      this.materias.push(materia);
    }
    //.. resto de metodos
}
```

:::info
Si observa el valor por defecto inicial de los miembros dato es undefined, ¿Cómo podemos cambiar estos valores?
:::

## Setter y getter, cambiando el acceso a los miembros datos

Los setter y getters son funciones que permiten asignar o retornar un valor de un miembro dato, esto permite tener un orden y encapsular las variables, volviendo privados los miembros datos.

```javascript
class Profesor{
    constructor(){
        this._nombre = undefined;
        this._correo = undefined;
    }
    
    set nombre(value){
        this._nombre = value;
    }
    get nombre(){
        return this._nombre;
    }
    
    set correo(value){
        this._correo = value;
    }
    get correo(){
        return this._correo;
    }
}
```

:::info
Observe que a los miembros dato se les asigna un underline antes del nombre, para evitar problemas con los setter y getters.
:::

De esta manera es posible crear la clase con los miembros dato y luego por medio de setter y getters asignar los valores iniciales

```javascript
const profesor = new Profesor();
profesor.nombre = "Xaca";
profesor.correo = "me@xacarana.com";
console.log(profesor.nombre);
console.log(profesor.correo);
```

:::info
Los setters se asignan por medio del operador asignación y los getter simplemente por el nombre del get, esto permite retornar el valor del miembro dato
:::

## Uso de las clases

Se recomienda crear un archivo main.js, que se encargue de tener un evento onload que controle la carga del documento y sus archivos, luego en este archivo se definen las variables y las instancias de las clases respectivas, en el archivo html, se debe vincular cada definición de clase, veamos un ejemplo.

```markup
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="js/profesor.js"></script>
	<script src="js/materia.js"></script>
	<script src="js/estudiante.js"></script>
	<script src="js/main.js"></script>
	<title>Demo</title>
</head>
<body>
	
</body>
</html>
```

Luego en el javascript usamos las clases, como por ejemplo

```javascript
let estudiante;
window.onload = inicio;

function inicio()
{
    let profesor = new Profesor();
    let materia = new Materia();
    
    profesor.nombre = "Xaca";
    materia.profesor = profesor;
    
    estudiante = new Estudiante();
    estudiante.nombre = 'Ana';
    estudiante.asignarMateria(materia);
    
}
```

:::info
Nota: Los miembros dato de estos ejemplos no estan 100% encapsulados, se recomienda siempre modificar sus valores por medio de los setters y getters para garantizar su escalabilidad, es decir que la aplicación pueda crecer sin problema con los cambios.
:::

## Referencias

* [Method definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
* [Property accesor](https://javascript.info/property-accessors)

## Ejercicio

1. Complete las clases Estudiante, Materia y Profesor, cree 3 materias, con 3 profesores diferentes, asigne notas a las materias y calcule la nota promedio por cada materia.
2. ¿Cómo se vuelven privadas los miembros dato?
