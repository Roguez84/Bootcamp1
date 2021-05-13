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
