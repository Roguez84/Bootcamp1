# Apuntes Dia 1

## Informacion inicial sobre programas que debemos instalar
### Ubuntu
2 Opciones: 1. Virtual Machine. 2. Particionar Disk
Profe Usa Virtualbox.org para la maquina virtual de Ubuntu (maquina virtual pide muchos recursos)
Dejar 80 GB en espacio para Ubuntu
Pendiente: Instalar Ubuntu (se necesita un pen drive) – seguir instrucciones de la pagina web

## Introduccion a como funcionana las paginas web

Servidor DNS agarra un nombre y lo convierte en un IP. (esto pasa cuando ponemos “Google.cl” por ejemplo)

Browser acepta solo acepta 3 tipos de formatos. HTML, CSS, Javascript (parece que también puede mostrar XML y JSON). Todas las paginas de internet se pueden crear solo con estas 3

W3schools.com. Aquí aparece toda la documentación para HTML, CSS

HTML y CSS tecnicamente no son lenguajes de programacion
HTML is mas que nada es para armar estructura
CSS es para generar los estilos (colores, tamaños, etc)

Fullstack es un profesional que se puede mover entre front y back end

JavaScript se puede usar para front y para back (ojo que no son igales)
primero vamos a aprender el JavaScript del front end (el que interactua con el navegador)


# Apuntes Dia 2
Pagina web es distinto a un sitio web

Por cada proyecto/pagina web, hay que crear una carpeta (evitar espacios en los nombres)

Index.html es la pagina principal de cualquier pagina web. Este es el archivo en la carpeta que el servidor va a buscar

Hay 2 partes. Head y Body.
Head contiene informacion para el navegador
El buscador lee HTML de arriba para abajo

Las etiquetas "h" son para titulos/subtitulos (no confundir con la etiqueta <title> del body)

No debe haber mas de una etiqueta por pagina. Mientras que h2+ pueden haber mas

Para separar secciones de la pagina web, vamos a usar etiquetas
Ademas de apertura y cierre, las etiquetas pueden contener atributos
Los atributos se ponen dentro de la etiqueta de apertura
el atributo style para las etiquetas "h" se puede hacer:
-darle color

Lorem Ipsum es una manera de poner texto aleatorio para ver como queda algo

Cuando ponemos imagenes, tambien podemos ponerle un texto que se muestre en caso de que no funcione la formatos

la etiqueta img es para añadir imagenes
-atributo 'src=""' crea una imagen basada en una ruta de internet (Esta etiqueta no tiene cierre, solo tiene apertura)
-para usar una imagen que este en el computador hay que hacer una carpeta que se llama assets

Por convencion los nombres de archivos van con minuscula y sin espacios

para usar rutas relativas (en vez de absolutas)
-hay que empezar con "./"
-"../" le dice al buscador que se salga a la carpeta anterior y que busque desde ahi


Para trabajar en el body, tenemos 2 tipos de lista
-Unordered list <ul> (Pone bullets)
-Ordered list <ol> (Pone numeros en vez de bullets)

Ahora para trabajar con links se usa <a>
para hacer que un link se abra en unanueva pestaña (y te dirija a esa pestaña) se usa el atributo "target"
Para hacer que una imagen te lleve a un link. hay que ponerle el archivo de la imagen en vez de texto a <a>

Para hacer divisiones en la pagina podemos usar las etiquetas <div>
<div> es un divisor que ocupa toda la linea (todo el ancho de la pagina), entonces el siguiente elemento va a aparecer abajo

la etiqueta <figure> sirve para crear secciones pero para imagenes  (hace lo mismo que <div> pero esto ayuda a especificar que describe que estamos trabajando con una foto)

la etiqueta <nav> se usa para especificar que la separacion es para la navigation bar (funciona igual que <div> pero especifica que es para la barra de navegacion)

la etiqueta <footer> es similar a <nav> pero para el footer

al final, '<nav>','<section>',<main>,<article>,<figure>,<header>(no confundir con <head>) son lo mismo que <div> solo que son mas especificas y ayudan a leer el codigo

# Apuntes dia 3

HTML define la estructure (el esqueleto), CSS define los estilos de las painas web

CSS se ocupa en base a las etiquetas de html
CSS lo que hace es aplicar estilo a todas etiquetas del mismo nombres
a etiquetas de HTML se le pueden aplicar clases ("class=")
Las clases pueden ser aplicadas a varias etiquetas que son distintas
Una etiqueta puede tener mas de una clases
tambien se puede especificar "id=".
En resumen los 3 selectores JSON
-Por Etiqueta
-Por id
-Por clase
(Estas 3, son atributos de etiquetas en HTML. Por ende, son HTML, no CSS)
(FYI, los atributos pueden ser puestos en cualquier orden)

Dividir (usando divisores) la pagina en secciones es clave

HTML: La etiqueta <hr> traza una linea horizontal
HTML: La etiqueta <br> es un break, sirve para saltarse una linea

antiguamente, antes de las etiquetas semanticas, se usaba <div class="">
En otras palabras, las etiquetas semanticas son como declararles una clase a los <div>

Para aplicar estilos, hay 3 maneras distintas de hacerlo

El atributo "style=;" es una manera de agregar estilo "in line".
"style=;" hay que terminarlo en ';'

tambien se puede usar una etiqueta <style>. Aqui se puede escribir codigo class
La etiqueta <style> no es semantica, si no que define que vamos a escribir codigo CSS

Para colores se puede usar nombres o colores hexadecimales

Se recomienda hacer un archivo aparte con puro CSS (la hoja de estilo) y
guardarlo en la carpeta assets

Hay que decirle al archivo index.html que tiene que linkearse con el archivo style.CSS
como esto es informacion para el navegador, hay que especificarlo en el head

Muchos apuntes escritos en el codigo mismo sobre css

Hay codigo para ene vez de especificar un id, uno vaya eligiendo "niveles" (hijos)
a los cuales va a aplicar algo que queremos hacer.
Hay por ejemplo "first-child","nth-child"

## Modelo de Cajas
la etiqueta <span> es como <p> pero no usa el ancho de la pantalla. Los elementos
que tienen esta propiedad se llaman inline. Otros incluyan <a> (links) y <strong> (bold)
la differencia entre <p> y <span> es que <p> tiene display block y <span> es inline
<b> se puede usar para bold tambien
<em> es para cursiva

Vamos a trabajar con 3 displays:
-inline-block
-inline
-block

Hablo de unidades de medidas (como pixeles y relativas)

Crearse cuenta en codecademy y hacer los cursos de HTML y de CSS
