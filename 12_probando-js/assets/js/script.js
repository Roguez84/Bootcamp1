//alert("esta prueba es desde el archivo script.js")
//console.log("waddup doggy");

//var nombre = prompt(" Sup mothafucka");

//alert("hola, " + nombre);
//document.write("hola, " + nombre)

/*
var primero = prompt("elige un numero");
var segundo = prompt("elige otro numer");
primero = parseInt(primero);
segundo = parseInt(segundo);
suma = primero + segundo;
alert("la suma de tus numeros es "+ suma);
*/

//document.write("<br>");
//document.write(primero + " + " + segundo + " = " + suma);


document.write("<h1 id='color_letra'> Estoy aprendiendo JavaScript</h1>");

var dividiendo = prompt(" numero dividiendo","10");
var divisor = prompt("numero divisor","2");
var color = prompt("color \n Ejemplo: blue, yellow, green, red, etc...");

dividiendo = parseInt(dividiendo);
divisor = parseInt(divisor);

total_divi = dividiendo / divisor;
total_modulo = dividiendo % divisor;

document.write("la division es " + total_divi + " y su modulo es " + total_modulo + ". ");
document.write("elegiste color " + color + " y cambia contenido de etiqueta h1");

//metodo style.color no lo habiamos aprendido antes
document.getElementById('color_letra').style.color = color;
