---
title: Estructuras condicionales
description: Estructuras que permiten crear un punto de decisión con base a una condición
---

# Estructuras condicionales

### If - Si

Solo interesa la respuesta verdadera de la condición, si es verdadera se ejecuta una porción de código.

![Si, estructura condicional](/images/fullstack/imagen (8).png)

```javascript
if(5>2)
{
    console.log("Se ejecuta las sentencias dentro de este bloque");
}
```

### if-else, si-entonces

Importa tanto lo que pasa si la condición es verdadera como si es falsa

![Si-no, estructura condicional](/images/fullstack/imagen (3).png)

```javascript
var condicion = true;

if(condicion)
{
    console.log("Esto se ejecuta si la condición es verdadera");
}
else{
    console.log("Esto se ejecuta si la condición es falsa");
}
```

:::info
Cambie el valor de la variable condición por falso y revise la ejecución y salida del programa.
:::

En el siguiente video, se refuerza la explicación sobre operadores, condiciones y condicionales, aplicando los conceptos a javascript.

[Javascript 101 - Condición](https://www.youtube.com/watch?v=6LHv17m6cvk)

### Ejercicios

1. Realice un programa que asigne la hora militar a una variable e imprima: `Buenos días` si la hora esta entre las 4 y las 11, `feliz almuerzo` si la hora esta entre las 12 y la 1, `buenas tardes` si la hora esta entre las 2 y las 5, `buenas noches` si la hora esta entre las 6 y las 3 de la mañana.
2. Realice un programa que cálcule el signo zodiacal de una persona, teniendo en cuenta el día y el mes de nacimiento. Tenga en cuenta guardar el día y el mes como números.
3. Realice un programa que declare dos variables y luego calcule la suma si el primer valor es mayor que el segundo, la resta si el segundo número es mayor y la multiplicación si los números son iguales, luego imprima en consola el valor si la respuesta de la operación es menor a 1000 y en un mensaje de alerta en caso contrario.
4. ¿Qué es el operador ternario?
5. ¿Qué es la estructura switch?
6. ¿Qué es el elseif?
7. ¿Qué es corto circuito?
