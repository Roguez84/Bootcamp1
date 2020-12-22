

## HTML y CSS

## Bienvenida
### 3.
Que es una pagina web?
Documento que puede ser visto por un browser


### 4. Analizando la pagina en secciones

Secciones de la pagina en la que trabajaremos
A. Barra de Navegacion
B. Seccion Principal (a.k.a "Hero section")
C. Seccion de lugar
D. Seccion de proximas charlas
E. Seccion de eventos anteriores
F. Footer

### 5. Herramientas necesarios
 1. Un Browser
 2. Editor de Texto

### 6. Nuestra primera pagina web

La pagina principal del sitio se debe llamar index.html pq este es el archivo que inicia una pagina web (es una convencion)

## Crear paginas con HTML

### 7. Introduccion a HTML

### 8. Trabajando en el Head Titulo

La etiqueta "Head" es necesario para el titulo, codificacion y metadatos
Hay que ponerle el titulo del archivo entremedio de las etiqueta <title>
tambien dentro dentro de la eiqueta head, hay que especificar que pueda leer caracteres como ñ y tildes (utf-8)
Tambien aqui elegimos el icono que aparecera en el tab
La imagen del icono del tab hay que guardarla en la carpeta de nuestra paginas
Ejemplos de metadatos que se pueden poner son:
-Especificar el autor de la pagina web "name = "
-otro es "content = " Esto es lo que va a aparecer en los buscadores
-Se puede ver que otros metadatos se pueden usar en la pagina w3school

### 9. Motores de busqueda y Seccion
Lo que va en la etiqueta <title> es de lo mas clave para SEO. Se recomienda max 50-65 caracteres
"La etiqueta <meta name="description" content="Esta es la meta-description de la página"> no es un
factor crítico en el posicionamiento de una web, pero sí afecta directamente en la tasa de clics
en los resultados de un motor de búsqueda, ya que es el texto que aparece bajo el título en la
página de resultados del buscador."

## Me voy a saltar videos 11-16 para entrar a class

## Añadir CSS

### 29. Propiedad Display inline block

elementos block:
Comienza en una nueva linea y ocupa todo el ancho
Ej: div, h1-h6,p,form, header, footer, section

elementos inline:
No comienzan en nueva linea, usan el minimo ancho posible
Ej: span, a, strong

elementos inline-block
No agrega un salto de linea despues del elementos. Permite establecer un width un height al elemento
ej: imagenes
(Esto se le puede declarar como propiedad en css (ej: display:inline-block;)

Width y height no afectan al padding ni margen. Solo afecta al contenido

Vieport width y height son relativas al tamaño de la pantalla que se este utilizando

medidas relativas son %, vieport, rem (relativo al font raiz del documento), em (1.0x el tamaño del font del padre)

z-index define como se "apilaran" los elementos


## Bootstrap

### 3. Introduccion a Bootstrap

Un framework CSS proveen una estructura basica para resolver problemas tipicos
(Bootstrap es un framework de CSS)
Algo en lo que destaca bootstrap es por su sistema de grillas

### 4. Mobile first
Es solo tener primero en mente como se vera en celulares antes de en computadores
En la pagina de bootstrap hay "Media queries". Esto es lo que se usa para considerar
distintos tamaños de pantalla

Trabajar usando caracteristicas de los diseños responsivos. Esto significa usar
etiquetas meta viewport:
<meta name="viewport"
      content="
      width=device-width,
      initial-sscale=1.0
      ">

Imagenes responsivas: Usar imagenes que respondan al tamaño de la pantalla

### 5. CSS Media queries
Media queries es una técnica introducida en CSS3. Consiste en el uso de una regla ""@media"
para dar estilos de CSS específico, según una o más condicionales. Esta condicional
generalmente corresponde a las características del dispositivo. Cuando el dispositivo cumple
con la condicional, ésta es verdadera, ejecutando ese código CSS que está dentro del media
query

La estructura de un media query consiste en:
-La regla: @media
-Una condición: (min-width: 576px)
-Un bloque de declaraciones {...} donde se introducen los distintos selectores con sus
propiedades.

Ejemplo:
@media (min-width: 576px) {
body{
background: blue;
}
h1 {
color: red;
}
}
@media (min-width: 768px) {
body{
background: red;
}
h1 {
color: blue;
}
}

### 7. Integrando el CDN de bootstrap
Bootstrap esta desarrollado en gran parte por la libreria Jquery de JavaScript
Popper es un plugin de JavaSript para componentes como hover, dropdowns, etc

### 8. Que es el CDN?
CDN significa Content Delivery Network (Red de Distribución de Contenidos). La tecnología
CDN implica una red de servidores repartidos por el mundo que entregan parte del contenido
estático de los sitios web a los visitantes (en función de la ubicación del usuario). Este
contenido estático puede incluir: HTML, imágenes, streaming de audio, streaming de vídeo,
CSS, JavaScript y fuentes tipográficas.
**CDN necesita internet para funcionar

### Probando la integacion de Bootstrap
Bootstrap al final no es mas que una gran hoja de CSS
La razon porque se ponen los script a Jquery, popper, al final, es para que sea
lo ultimo que se cargue de la pagina
