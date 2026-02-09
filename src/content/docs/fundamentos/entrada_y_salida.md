---
title: Entrada y salida
description: Formas de interactuar con el usuario mediante interfaz gráfica
---

# Entrada y salida

### Salida

Hay varias formas de mostrar información al usuario o al desarrollador, usando javascript

Forma más sencilla, no visible para el usuario, se usa para hacer debug o pruebas

```javascript
console.log("Mensaje de salida");
```

Este valor solo es visible en la consola del navegador

![Consola de firefox, se abre con la combinación de teclas Ctrl + Shift + k](/images/fullstack/imagen (34).png)

Se puede imprimir cualquier variable, incluso se pueden pasar varios valores, separando las variables por medio de comas

```javascript
var saludo = "Buenos días";
var nombre = "Luz";
console.log(saludo,nombre);
```

La consola, permite además imprimir mensajes personalizados, y controlar algunas opciones en el momento de visualizar la salida

```javascript
console.clear();
```

Limpia la consola, se recomienda su uso cuando comienzan las pruebas, para borrar mensajes anteriores

![Al ejecutar esta sentencia en la consola, se borran todos los mensajes](/images/fullstack/imagen (23).png)

Es posible personalizar la salida dependiendo de las siguientes opciones

![Información, se agrega un icono al principio del mensaje](/images/fullstack/imagen (24).png)

![Warning, agrega un icono y un fondo al mensaje, para hacerlo resaltar](/images/fullstack/imagen (28).png)

![Error, resalta el mensaje con icono y color de fondo y agrega información de la línea donde se imprimió](/images/fullstack/imagen (25).png)

![Es posible personalizar el mensaje de salida, por medio de css](/images/fullstack/imagen (22).png)

La consola es versátil, para visualizar la salida de pruebas de una aplicación. Para obtener mayor detalle de la respuesta en la consola, se recomienda usar el siguiente código

```javascript
var datos = [2,4,5,10];
console.dir(datos);
```

![La salida es un poco más detallada, es muy útil con datos estructurados como los arreglos](/images/fullstack/imagen (26).png)

#### Impresión en el documento

Imprime en el documento html, este es un método que se debe usar para pocas impresiones, ya que puede ser costoso para el render de la página. Por ejemplo no usar adentro de ciclos.

```javascript
let valor = "Mensaje de salida";
document.write(valor);
```

Forma recomendada si se quiere usar con un ciclo

```javascript
let salida = "";
let contador = 0;

while(contador <= 100)
{
  salida = salida + "nueva linea " + contador + "<br>";
  contador++;
}
document.write(salida);//Se imprime una sola vez
```

:::info
Es posible imprimir código html
:::

#### Salida en ventana emergente

Hay varios tipos de ventanas emergentes o ventas de alerta, hay una forma muy sencilla de presentar una ventana modal, es decir ventana que aparece al frente de la interfaz gráfica y esta bloqueada, hasta que el usuario interactue con ella.

```javascript
alert("Mensaje de salida");
```

![Ventana modal, se usa para mensajes cortos y de pocas líneas](/images/fullstack/imagen (30).png)

:::info
Evite usar mensajes de alerta, cuando debe imprimir mensajes largos o para imprimir varios mensajes de alerta en repetidas ocasiones. Recuerde que la alerta bloquea la ejecución de la aplicación hasta que se interactue con la ventana.
:::

Si necesita imprimir un mensaje largo o el resultado de las iteraciones de un ciclo, se recomienda usar una variable acumuladora, que concatene el mensaje.

```javascript
let mensaje = "Imprima una opción asi:\n";
mensaje += "1. Sumar\n";
mensaje += "2. Restar\n";
mensaje += "3. Multiplicar\n";
mensaje += "4. Salir\n";

alert(mensaje);
```

![Resultado del código anterior](/images/fullstack/imagen (31).png)

Tenga presente las secuencias de escape en el momento de imprimir de esta forma, y hacer un solo llamado a alert, al final del ciclo.

```javascript
let salida = "";
let contador = 0;

while(contador <= 20)
{
   salida = salida + contador + "\n";
   contador++;
}
alert(salida);
```

![El mensaje se adapta en alto y ancho, sin embargo recuerde la recomendación de imprimir pocos valores](/images/fullstack/imagen (35).png)

### Entrada

Todos los datos que el usuario ingresa en una aplicación, son de tipo CADENA, por tanto es importante saber que operación se va a realizar con el dato para poder realizar la manipulación correcta o conversión correspondiente a un tipo de dato particular, en caso de ser requerido.

Veamos algunas formas de ingresar datos de tipo texto

#### Por medio de un campo de texto

![Campo input text, se puede acceder al dato con la propiedad value](/images/fullstack/imagen (32).png)

Código html

```markup
<label for="nombre">
    Nombre
    <input type="text" id="nombre" />
</label>
```

Código javascript

```javascript
window.init = (){
    var campo = document.getElementById("nombre");
    var valor = campo.value;
}
```

En la variable valor, se asigna el valor ingresado en el campo de texto nombre, de tipo `string`

#### Por medio de un prompt

El prompt es una ventana modal que solicita un valor al usuario por medio de un mensaje y una caja de texto, el valor ingresado se devuelve y se asigna a la variable que invoca la ventana.

```javascript
let respuesta = prompt("Ingrese un valor");
console.log("El valor ingresado es",respuesta);
```

![Ventana modal para el ingreso de un valor](/images/fullstack/imagen (27).png)

#### ¿Qué podemos hacer si necesitamos un número u otro valor cuando solicitamos un dato?

Es posible realizar un casting, el cual es una operación de conversión entre tipos de datos equivalentes, si los datos no son equivalentes al tratar de realizar la conversión o la operación con un dato incorrecto es posible que se produzca un error en tiempo de ejecución.

Es posible convertir datos usando casting explicito, así:

Cadena a número

```javascript
let cadena = "23";
let numero = Number(cadena);
console.log(numero*numero,typeof numero);
```

:::info
La operación aritmética es posible porque la variable `numero` es un tipo númerico
:::

Cadena a booleano

```javascript
let cadena = "5>2";
let condicion = Boolean(cadena);
console.log("La condición es",condicion,typeof condicion);
```

Cualquier valor a cadena, hay dos formas

```javascript
let numero = 5;
let cadena = "" + numero;
console.log(typeof numero, typeof cadena);
```

Concatenar a una variable la cadena vacía siempre dará una cadena, esto se conoce como una operación de casting implicito, ya que siempre es posible esta conversión.

```javascript
let booleano = 5 == 7;
let cadena = String(booleano);
console.log(typeof booleano,typeof cadena);
```

Esta es una conversión explícita, la cual evalua el valor y luego lo convierte.

El casting se puede usar para convertir valores equivalentes, incluso un poco más, por ejemplo si se requiere realizar un truncamiento de datos.

```javascript
let cadena = "3.5";
let numero_entero = parseInt(cadena);
console.log(typeof numero_entero,numero_entero);
```

El `parse` es una operación de conversión entre tipos, este concepto lo revisaremos en varias oportunidades y es una palabra clave a tener presente, en este caso, se hace la conversión de cadena a número, y además se trunca el dato, es decir, se remueve la parte decimal del número.

![El resultado es de tipo number y es un valor entero](/images/fullstack/imagen (33).png)

También es posible convertir el valor a un equivalente de punto flotante, donde se respete el valor decimal, para esto tenemos el siguiente ejemplo

```javascript
let cadena = "3.532";
let numero = parseFloat(cadena);
console.log(typeof numero,numero);
```

Para determinar la precisión del valor ingresado, es posible usar el siguiente procedimiento

```javascript
let cadena = "3.1416";
let numero = Number(cadena);
console.log(numero.toPrecision(2));
```

### Control de errores (try-catch-finally)

Cuando se piden datos al usuario, es posible que hayan errores en el ingreso de estos, porque el usuario puede equivocarse e ingresar cualquier combinación de carácteres que permita el teclado, por tanto es necesario tener un mécanismo que permita el control de errores en tiempo de ejecución.

Para este caso, podemos usar la estructura try - catch, la cual intenta el código que puede tener un posible error en la estructura try, y en caso que se produzca un error, este es lanzado y atrapado en el catch, de esta forma evitamos que se realice una operación incorrecta y en cambio ofrecemos una alternativa al usuario, como por ejemplo un mensaje de error.

```javascript
let temp, a, b;
let bandera = false;
try
{
    temp = prompt("Ingrese a, un numero entero");
    a = Number(temp);
    
    temp = prompt("Ingrese b, un numero entero");
    b = Number(temp);
    
    temp = a/b;
    
    if(isNaN(temp) || !isFinite(temp))
    {
         throw new Error('Operación incorrecta');
    }
    else{
        alert("La división es "+temp);
    }
        
}
catch(error)
{
   bandera = true;
   console.error("Se produjo un error",error.message);
}
finally{
    if(bandera){
        console.warn("Los datos de ingreso deben ser númericos y diferentes a cero");
    }
}
```

:::info
Consulte que hace isNaN y isFinite, y el significado de throw.
:::

### Enlaces de referencia

* [Impresión en el html](https://www.w3schools.com/js/js_htmldom_html.asp)
* [Consola online](https://jsconsole.com/)
* [Type casting](https://www.tutorialspoint.com/type-casting-in-javascript)
* [MDN try-catch-finally](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch)
* [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### Ejercicio

* ¿Qué otros formatos puedo convertir en javascript? ¿Qué pasa con otros sistemas númericos?
* Realice un programa que lea dos números y luego permita realizar por medio de un menú en una ventana modal una operación asi: 1. Suma, 2. Resta, 3. Multiplicación, 4. Potencia, 5. Salir. Valide el ingreso correcto de los datos.
* ¿Qué significa NaN e infinity?, ¿qué relación tiene con la conversión entre tipos?
* Escriba 10 palabras reservadas de javascript
* ¿Cómo podemos realizar operaciones como raíz cuadrada, seno y coseno en javascript?
* ¿Qué son los template literals?, ¿cómo se usan en la salida?
