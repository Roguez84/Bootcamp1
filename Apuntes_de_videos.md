

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
