---
title: Función
description: Reutilizar código de forma agrupada o funcional
---

# Función

### ¿Qué es una función?

Es un módulo que agrupa un conjunto de sentencias que tienen un fin especifico, por medio de una firma, define sus datos de entrada y datos de salida y posteriormente con esta información podemos determinar como realizar su invocación.

En resumen, es un módulo que resuelve una necesidad puntual que se puede reutilizar.

![La función sen, toma un dato de entrada y devuelve un dato de salida, correspondiente a la operación.](/images/fullstack/imagen (38).png)

### Anatomía de una función

Para crear una función debemos usar la plantilla o firma de la función según la sintaxis de Javascript como se muestra a continuación:

![Firma y partes de una función](/images/fullstack/imagen (37).png)

* `function` Palabra reservada que permite crear el módulo que se comportará como una función
* `nombre_funcion` Nombre inventado por el desarrollador, para identificar la función
* `lista,de,parametros` Valores de entrada de la función, pueden ser cero o más datos, si son varios se deben separar por coma
* `cuerpo de la función` Espacio donde se escriben las sentencias de la función
* `return` Palabra reservada que indica que la función retorna, ya sea un valor o se sale de la función
* `puede_ser_opcional` Valor de salida de la función, es opcional, una función no siempre debe retornar un valor

### Tipos de funciones

#### Con parámetros y sin retorno

Recibe datos de entrada, pero no genera datos de salida

Firma de la función

```javascript
function sumar(a,b){
    console.log("La suma es ",a+b);
}
```

Invocación

```javascript
let a = 5;
let b = 3;

sumar(a,b);
```

Salida

_La suma es 8_

#### Con parámetros y _con_ retorno

Recibe datos de entrada y genera datos de salida

Firma de la función

```javascript
//Ejemplo 1
function sumar(a,b){
    let c = a + b;
    return c;
}

//Ejemplo 2
function restar(a,b){
    return a-b;
}
```

Invocación

```javascript
let a = 5;
let b = 3;
let c;

c = sumar(a,b);
console.log("La suma es ",c);

console.log("La resta es",restar(a,b));
```

Salida

_La suma es 8_
_La resta es 2_

#### Sin parámetros y sin retorno

No recibe datos de entrada y no genera datos de salida

Firma de la función

```javascript
function sumar(){
    let a = prompt("Ingrese el valor de a");
    let b = prompt("Ingrese el valor de b");
    let temp;
    
    a = Number(a);
    b = Number(b);
    
    try
    {
        temp = a + b;
        
        if(isNaN(temp) || !isFinite(temp))
        {
             throw new Error('Operación incorrecta');
        }
        else{
            console.log("La suma es ",temp);
        }
    }
    catch(error){
        console.error(error);
    }
}
```

Invocación

```javascript
sumar();
```

Salida: La función no tiene retorno y por tanto no tiene salida, simplemente es una impresión en consola

_La suma es 8_

:::info
Si los datos leídos no son números o son valores incorrectos, el resultado de invocar la función es un error Operación incorrecta
:::

#### Sin parámetros y con retorno

Sin datos de entrada, y con datos de salida

Firma de la función

```javascript
function aleatorio(){
    return parseInt(Math.round(Math.random()*100));
}
```

Invocación

```javascript
const turno = aleatorio();
console.log("Su turno es ",turno);
```

Salida

_Su turno es 18_

### Otras formas de crear funciones

Hay diferentes formas de crear funciones, hay formas equivalentes de definir una función en el código, depende del uso que se le vaya a dar a la función.

#### Función en una variable

Se utiliza, para pasar una función como parámetro por ejemplo a otra función, también como callback de eventos, esto se estudiará proximamente.

```javascript
const aleatorio = function(){
    return parseInt(Math.round(Math.random()*100));
}

//Invocación
let turno = aleatorio();

//Salida 
console.log("Su turno es ",turno);
```

#### Arrow function

Es otra forma equivalente de escribir una función, similar a la sintaxis de otros lenguajes de programación como php, es una alternativa compacta.

```javascript
const suma = (a,b)=>{
    return a+b;
}

 //Invocación
 let salida = suma(5,3);
 
  //Salida 
  console.log("La suma es ",salida);
```

Otra forma de escribir lo mismo:

```javascript
const suma = (a,b) => a+b;
```

:::info
El return esta implicito, no hace falta poner las llaves en el caso del ejemplo
:::

#### Funciones anónimas

Son funciones que no tienen nombre, por lo general se usan como callbacks, para inicializar variables.

```javascript
function (){
    console.log("Soy una función anónima");
}
```

:::info
La función sin nombre, si se declará luego no es posible invocarse ya que no tienen nombre, para evitar este error, se puede asignar a una variable o enviarse como parametro de otra función, y luego esta puede ser invocada por la función que la recibe.
:::

```javascript
function llamarFuncion(funcion){
    funcion();
}

//Invocación
llamarFuncion(function(){
    console.log("Llamando la función");
});

//Salida
//Llamando la función
```

#### Funciones anónimas autollamadas y encapsuladas

Es posible encapsular toda la lógica de una aplicación adentro de una función anónima, que se autollame, esto evita que las funciones y el código en general, sea usado desde la consola del navegador.

```javascript
(function(){
    let info = "";
    info = "El codigo que esta internamente\n";
    info += "en esta funcion, no puede\n";
    info += "ser consultado desde la consola\n";
    info += "del navegador.\n";
    console.log(info);
})();
```

### Referentes

* [Arrow functions](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Funciones auto ejecutables](https://www.jasoft.org/Blog/post/Escribiendo-codigo-JavaScript-limpio-funciones-anonimas-auto-ejecutables)
* [Funciones matemáticas en javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math)
* [Nodeschool](https://nodeschool.io/es/)

### Ejercicios

1. Realice la función factorial, tenga presente los casos especiales y el desbordamiento.
2. Cree una función, que calcule los valores de la función Math.sin y Math.cos entre 0 y Math.PI, almacene los datos en una matriz y retorne el resultado.
3. Cree una función que se llame tangente, que reciba la matriz del punto anterior, y calcule la tangente usando los valores de la matriz, si la tangente no existe, se debe imprimir el mensaje `error, no existe` caso contrario se imprime el valor.
4. Cree una función que calcule valores aleatorios enteros entre `min` y `max`.
5. Realice el curso de [javascript funcional](https://github.com/timoxley/functional-javascript-workshop) de nodeschool.
