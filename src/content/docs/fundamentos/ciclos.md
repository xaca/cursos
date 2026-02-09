---
title: Estructuras cíclicas
description: Estructuras que permiten realizar operaciones repetitivas
---

# Estructuras cíclicas

### Ciclo while - mientras que

Se ejecuta mientras que la condición sea verdadera, primero se evalua la condición y luego si la condición es verdadera se realiza el procedimiento interno definido entre llaves.

![Diagrama de flujo y ejemplo de código ciclo while](/images/fullstack/imagen (17).png)

```javascript
var condicion = true;

while(condicion){
    console.log("Entra al ciclo, porque la condición es verdadera");
    condicion = false;
}
```

:::info
Internamente el ciclo debe definir una sentencia o procedimiento que convierta la condición en falso, para poder salir del ciclo. De otra forma se produce un ciclo infinito.
:::

### Ciclo do-while / hasta que

Se ejecuta primero el procedimiento interno en el ciclo y al final se evalua la condición.

![Diagrama de flujo y ejemplo de código ciclo do-while](/images/fullstack/imagen (10).png)

```javascript
var condicion = false;

do{
    console.log("Siempre se ejecuta por lo menos una vez esta instrucción");
}while(condicion);
```

:::info
Esta es de las pocas instrucciones en javascript que se pone un punto y coma al final, en javascript no es obligatorio poner punto y coma en ninguna sentencia, pero se recomienda hacerlo por mantener un estandar similar a otros lenguajes de programación.
:::

¿Por qué no hay un ciclo infinito en el código de ejemplo del ciclo hasta que?

### Ciclos for

El ciclo for funciona similar a los ciclos anteriores, la única diferencia es que depende por lo general de un valor de control que define el número de iteraciones que realizará el ciclo. En javascript hay varias versiones, estudiaremos algunas de ellas:

![Diagrama de flujo y ejemplo de código ciclo for](/images/fullstack/imagen (11).png)

#### Ciclo for tradicional

```javascript
for(var i = 0; i < 10; i++)
{
  console.log("Iteracion #",i);
}
```

:::info
Recuerde que la expresión i++ es una versión simplificada de i = i + 1, es conocida como el operador pos incremento
:::

#### Ciclo for + operador in

Permite recorrer una estructura en el siguiente ejemplo se muestra como imprimir cada uno de los valores de un arreglo usando esta variación de este ciclo. Incluye propiedades de objetos.

```javascript
var arreglo = [2,3,4,5,7,8];
for(var i in arreglo)
{
    console.log(i);
}
```

:::info
La estructura arreglo, array o vector se estudiará más adelante, junto con los objetos
:::

#### Ciclo for + operador of

Permite iterar sobre colecciones como arreglos, no incluye propiedades de objetos.

```javascript
var arreglo = [2,3,4];
arreglo.propiedad = "prueba";

for(var i of arreglo)
{
    console.log(i);
}
```

:::info
Ejecute los dos ciclos anteriores y encuentre sus similitudes y diferencias
:::

### Control adicional

#### break

Termina la ejecución del ciclo en el momento de su invocación

```javascript
while(true)
{
   if(Math.random()>.5)
   {
      break;
   }
}
```

:::warning
¿Por qué el ciclo anterior, no es un ciclo infinito?, ¿Cuántas veces se ejecuta?
:::

#### continue

Avanza una iteración, pero no detiende la ejecución del ciclo

```javascript
for(var i=0;i<=10;i++){
    if(i%2==0)
    {
        continue;
    }
    console.log(i);
}
```

:::info
¿Cuál es el resultado al ejecutar el ciclo anterior?
:::

[Explicación y uso de ciclos en javascript](https://www.youtube.com/watch?v=Zp4ZrLpUmog)

### Bestiario de variables

#### Bandera

Controla el estado de una variable, puede ser true o false, dependiendo de este valor se toman decisiones en la ejecución del código.

![Ejemplo uso de una variable como una bandera de control](/images/fullstack/imagen (18).png)

#### Centinela

Vigila que se produzca un valor, por lo general este valor es ingresado por el usuario, se puede usar por ejemplo para leer un grupo de valores y se incluye un centinela para terminar la lectura de los datos.

![Ejemplo de uso de un ciclo que se controla por medio de un centinela](/images/fullstack/imagen (9).png)

#### Contador

Variable que se incrementa por lo general en una unidad cada vez, se usa por ejemplo para contar o controlar el número de iteraciones que ejecuta un ciclo.

![Control de ejecución de un ciclo while, por medio de un contador](/images/fullstack/imagen (13).png)

#### Acumulador

Es similar al contador, se diferencia en la forma como realiza el incremento, ya que puede acumular sumando, multiplicando, dividiendo, etc.

![Control de ejecución de un ciclo while usando un acumulador que multiplica el valor por 2](/images/fullstack/imagen (15).png)

### Enlaces de referencia

* Ejercicio de referencia en [codepen](https://codepen.io/xaca/pen/NWpXbEg)
* [¿for each en javascript?](https://es.stackoverflow.com/questions/17640/for-each-en-javascript)
* [for ...of](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of)
* [The for-of loop](https://exploringjs.com/es6/ch_for-of.html)

### Ejercicios

1. ¿Cuál es el operador preincremento, predecremento, posdecremento? Escriba ejemplos donde se evidencie su uso.
2. ¿Existe el preproducto, posdivisión...?
3. Imprima los números pares entre n y m, donde n < m
4. Calcular el promedio de los n primero numeros naturales, siendo n >0
5. ¿Para que se utiliza forEach, every, some? 🤓Bonus
