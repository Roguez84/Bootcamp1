# JavaScript 

#### Agregando JS con etiqueta `<script>`
Para usar JS en HTML hay que usar la etiqueta `<script>`
Nota: el documento se carga desde arriba hacia abajo, por lo tanto, nos será conveniente poner esta etiqueta al final del `<body>` para que la página en total se pueda cargar más rápido

Esto va a hacer que aparezca una alerta en la pagina
```js
        <script>
            alert("Esta prueba es desde la etiqueta script")
        </script>
```


#### Agregando JS desde un archivo .js

Para usarlo, en el html hay que anadirle dentro del atributo `src` la ruta de nuestro archivo .js:
```html
    <script src="assets/js/script.js"></script>
```
#### Console.log()
sirve para escribir algo en la consola

## Declaraciones y sintaxis
Los punto y coma sirven para separar las declaraciones de JavaScript. Si bien ahora ya no son
100% obligatorios nos ayudarán a ordenar nuestro propio código y a evitar errores.
Es importante tener en cuenta que JavaScript:
- Es sensible a las mayúsculas y minúsculas.
- No toma en cuenta los espacios en blanco ni los saltos de línea.

## Tipos de datos
- Valores
- Operadores
- Expresiones
- Palabras clave
- comentarios

#### Valores
Hay 2 tipos
1. Literales
2. Variables

las variables se declaran con `var nombre_variable = 'algo'`

#### Caracteres especiales para strings
Un salto de línea \n
Un tabulador \t
Una comilla simple \'
Una comilla doble \"
Un backslash \\

ejemplo:
```js
var texto = "Estoy escribiendo un texto con \nsalto de línea"
alert(texto);
```
Esto crea salto de linea antes de la palabra "salto"


## Ejercitando con prompt
#### promt()
`prompt()`; función sirve para que el usuario ingrese un dato. Tiene 2 parámetros: el primero es el
mensaje que se muestra en la ventana y el segundo es el valor inicial del área de texto.
Lo que escriba el usuario puede ser almacenado en una variable.
Hagamos un ejemplo:
```js
var nombre = prompt("Hola, coloque su nombre por favor", "Nombre por defecto");
alert("Hola, nos alegra que estés por aquí " + nombre);
```
Nota: en prompt, donde dice "Nombre por defecto" es lo que se le va a prepupulate al usuario

#### document.write()
Lo que hace esta función es escribir en la página el texto que se ingresa como parámetro.

para pasar strings que pasa el usuario a integer hay que usar `parseInt();`

#### getElementById()

Aqui va un ejemplo de cambiar un texto a azul
```js
//Parte con escribirle un texto a la pagina
document.write("<h1 id='color_letra'>Estoy aprendiendo JavaScript</h1>");

//Siguen prompts del usuario y su procesamiento
var dividendo = prompt("Hola, coloque un número dividendo", "10");
var divisor = prompt("Hola, coloque un número divisor", "2");
var color = prompt("Hola, escoja también un color de los colores por nombre de CSS \n Ejemplo: blue, yellow, green, red, etc...", "blue");
dividendo = parseInt(dividendo);
divisor = parseInt(divisor);
total_divi = dividendo / divisor;
total_modulo = dividendo % divisor;

document.write("La division entre los dos números es " + total_divi + " y su módulo es " + total_modulo + ".");
document.write("Además escogiste el color " + color + " lo cuál cambia de color de letra al contenido de la etiqueta H1");

//Aqui cambia el h1 a azul
document.getElementById("color_letra").style.color = color;
```

# Apuntes desafio
Podemos ejecutar código javascript en respuesta a eventos generados en nuestra página
web, por ejemplo cuando se realiza un click.
```html
<button onclick="alert('hola')"> Hey </button>
```

Tambien se le puede agregar a elementos en particular
```html
<p onclick="alert('hola')"> Hey </p>
```

Tambien existe una palabra reservada `this`
```html
<p onclick="console.log(this)"> Hey </p>

<!-- Para modificarlo al rito -->
<p onclick="this.style.color='red'"> Hey </p>
```
#### Cambiando el css

```html
<html lang="en">
    <head>
        <title>Prueba 1</title>
        <style>
            .warning{
                color:red;
            }
        </style>
    </head>
    <body>
        <p onclick="this.classList.add('warning')"> Solo Añadir </p>
        <p onclick="this.classList.toggle('warning')"> Toggle </p>
    </body>
</html>
```
`add` agrega la clase, `toggle` la agrega o la quita dependiendo de si está presente o no, prueba
haciendo click en el elemento con el inspector abierto para poder observar los cambios.

#### Selectors
Aqui vamos a cambiar un elemento cuando se le hace click a otro
```html
<html lang="en">
    <head>
        <title>Selectores</title>
    </head>
    <body>
        <p id="par-1" onclick="document.getElementById('par-2').style.color='red'"> 1 </p>
        <p id="par-2"> 2 </p>
        <p id="par-3"> 3 </p>
        <p id="par-4"> 4 </p>
    </body>
</html>
```

## Funciones
Las funciones son un mecanismo por el cual podemos agrupar múltiples instrucciones y
llamarlas cuando las necesitemos
```js
function x() {
    console.log("hola")
    console.log("yo")
    console.log("soy")
    console.log("una")
    console.log("función")
}
x()

```
Las funciones tambien pueden recibir parametros
```js
// Definimos la función
function saludar(nombre) {
    console.log("hola", nombre);
}
saludar("Javiera");
saludar("Camila");

//resultado es:
// Hola Javiera
// Hola Camila
```

#### Eventos del DOM
la clave es `addEventListener`
```html
<html lang="en">
<head>
    <title>Prueba 1</title>
</head>
<body>
    <p id="elementoP"> Elementos de HTML - Clic Aquí</p>
    <script>
        var elementoP = document.getElementById('elementoP');
        elementoP.addEventListener('click',function () {
            alert("Mensaje desde JS activado por evento click")
        });
    </script>
</body>
</html>
```