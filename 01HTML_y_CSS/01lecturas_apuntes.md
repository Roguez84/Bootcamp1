# HTML y CSS parte 1 (HTML)

## Crear paginas con HTML
La primera etiqueta `<!DOCTYPE html>` es la que le indica al navegador cómo debe interpretar el resto del documento (el doctype especificado es de HTML5, el cuál es el estándar de hoy).
La etiqueta `<html>` especifica que todo lo que está dentro de ella deberá ser interpretado como HTML.

### Head
la etiqueta `<head>` especifica el contenido
que se le entregará al navegador y es necesaria para mostrar correctamente la página. Dentro de ella están contenidos los metadatos para la página. Por lo general, podemos encontrar: el título `<title>`, la codificación `<meta charset="utf-8">`, el favicon `<link rel="shortcut icon">` y otros metadatos `<meta>`

#### Codificacion
La etiqueta `<meta>` con el atributo `charset` especifica la codificación de los caracteres del documento. En este caso usaremos utf-8 para poder codificar símbolos y caracteres latinos. `<meta charset="utf-8">`
Esta etiqueta es muy importante, ya que si no la usamos, la letra como la "Ñ" y las letras con tilde no se codificarían bien

#### Favicon
Para poner el pequeño ícono que aparece en la pestaña del navegador se tiene que tener una imagen pequeña (formato jpg, png, gif o bmp) y cuadrada. Lo llamamos de la siguiente forma: `<link rel=”shortcut icon” type=”image/png” href=”favicon.png”/>`


#### meta viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
De w3:
HTML5 introduced a method to let web designers take control over the viewport, through the `<meta>` tag.

You should include the following `<meta>` viewport element in all your web pages:

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
This gives the browser instructions on how to control the page's dimensions and scaling.

The `width=device-width` part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

The `initial-scale=1.0` part sets the initial zoom level when the page is first loaded by the browser.

####  meta http-equiv
Refresh document every 30 seconds:
`<meta http-equiv="refresh" content="30">`
#### Otros metadatos
Además de lo que ya hemos aprendido, existen varios tipos de metadatos que se pueden incluir en el head.
Existen de autor `<meta name="author" content="Francisca Medina Concha">` , de descripción `<meta name="description" content="Comparte tus conocimientos tomando café">` , de palabras clave `<meta name="keywords" content="charlas, eventos, simposios, tecnología, co-work">` y más.

### Body
la etiqueta `<img src="">` puede recibir un link de internet


# HTML y CSS parte 2 (CSS)
Existen varias formas de añadir CSS a las páginas:
- En línea en el HTML, añadiéndole el atributo `style` a las etiquetas.
- Añadiéndole la etiqueta `<style>` en el head.
- A través de un archivo de tipo CSS, llamado desde el head. (basicamente poinendo `<link rel="stylesheet" href="assets/css/style.css">`)


La etiqueta es `<link>`. El atributo rel especifica la relación entre el documento actual y el documento vinculado, por lo tanto, su valor vendría siendo stylesheet. El atributo `href`, que ya lo hemos visto
en otras ocasiones, especifica de dónde viene el documento, o sea, debemos darle la ruta al archivo .css que queremos vincular.

## Introduccion a CSS
#### La cascada de CSS
En CSS existen dos reglas importantes.

- Regla N°1: La primera es que la última regla manda. Por ejemplo, si yo declaro que un background-color es gris y más adelante específico que el color es negro, el resultado será el último que indicamos.
- Regla N°2: La segunda regla de oro de CSS es que lo específico manda por sobre lo general.

#### Vinculando el menu con cada seccion (18 de 85)
Acordarse que esto es tan simple como:
```html
<section id='algunid'>

<a href="#algunid"></a>
```

#### Colores css
Aqui una lista de los colores que tienen nombre
https://www.w3schools.com/cssref/css_colors.asp

para quitarle el subrayado y azul a los links se puede usar (en CSS)
```css
.algunaclase a{
    color: #ffffff;
    text-decoration: none;

}
```

Si en CSS escribimos un "elemento + espacio + otro elemento" , por ejemplo, `.algunaclase a` : selecciona todas las etiquetas `<a>` que estén dentro de las etiquetas con clase `algunaclase`

#### Imagen de fondo
```css
.nombredelaclase {
    text-align: right;
    background-image: url('../img/bg-hero.png');
    background-repeat: no-repeat;
    background-size: cover;
    color: #ffffff;
    text-shadow: 2px 3px 2px #707070;
}
```

la propiedad `text-shadow: 2px 3px 2px #707070;` Hace que se genere la sombra. Podemos identificar 4 valores:
- El primero es el h-shadow que es la posición horizontal de la sombra, o sea, 2px hacia el lado derecho (los valores negativos están aceptados llevando la sombra hacia la izquierda).
- El segundo es el v-shadow que es la posición vertical de la sombra, o sea, 2px hacia abajo (los valores negativos están aceptados llevando la sombra hacia arriba).
- El tercero es el blur-radius que especifica el desenfoque de la sombra. Mientras más grande será más desenfocado.
- El cuarto es el color, en este caso el color Nickel ( #707070 ) especificado por la guía.


## Modelo de cajas
Link w3
https://www.w3schools.com/css/css_boxmodel.asp

De adentro para afuera:
- Content - The content of the box, where text and images appear (border y width de css controlan el tamano de content)
- Padding - Clears an area around the content. The padding is transparent
- Border - A border that goes around the padding and content
- Margin - Clears an area outside the border. The margin is transparent

##### Sobre ajustar los tamanos:
- Tanto en margin como padding se pueden dar valores para top , right , bottom y left .
- Cuando se da un sólo valor por convención se asume que aplica a todos los lados. 
- Cuando tiene dos valores el primero indica top y bottom y el segundo indica right y left .
- Cuando tiene 4 valores aplica la ley del reloj: primero top , segundo right , tercero bottom y cuarto left .
- También se puede definir como margin-top , margin-right , margin-bottom , margin-left , padding-top , padding-right , padding-bottom y padding-left .

##### El signo *
El `*` como selector en CSS significa todo (es el selector universal que aplica a todas las etiquetas), y que esté seguido de body separados por un espacio significa que a todos las etiquetas que están dentro del body le daremos propiedades en el bloque de declaración.

## Propiedad Display (inline, block, inline-block)
Antes que sigamos formateando nuestro contenido es necesario que conozcamos la propiedad
`display`. La propiedad display es la propiedad de CSS más importante para controlar la disposición de los elementos.
Cada elemento HTML tiene un valor de visualización predeterminado según el tipo de elemento que sea. El valor de visualización predeterminado para la mayoría de los elementos es en `block` o `inline`.


##### Elementos block
Un elemento de bloque siempre comienza en una nueva línea y ocupa todo el ancho disponible (se extiende desde izquierda hacia la derecha todo lo que pueda).
Algunos ejemplos son:
```html
<div>
<h1> - <h6>
<p>
<form>
<header>
<footer>
<section>
```
##### Elementos inline
Por su parte, los elementos inline no comienzan en una nueva línea y su ancho ocupa el mínimo espacio posible (sólo lo necesario según su contenido).
Algunos ejemplos son:
```html
<span>
<a>
<em>
<strong>
```

##### inline-block
Existe un híbrido de valor display entre el block y el inline. El inline-block.
La diferencia principal **entre el inline-block y el block** es que no agrega un salto de línea después del elemento, por lo que el elemento puede ubicarse junto a otros elementos.
La diferencia principal **entre el inline-block y el inline** es que permite establecer un ancho (width) y una altura (height) al elemento. Además respeta los márgenes y paddings.
Un ejemplo claro son las imágenes, ya que se despliegan unas al lado de las otras pero podemos asociarle un ancho (width) y un alto (height).

#### Unidades de medida

- em	Relative to the font-size of the element (2em means 2 times the size of the current font)	
- ex	Relative to the x-height of the current font (rarely used)	
- ch	Relative to the width of the "0" (zero)	
- rem	Relative to font-size of the root element	
- vw	Relative to 1% of the width of the viewport*	
- vh	Relative to 1% of the height of the viewport*	
- vmin	Relative to 1% of viewport's* smaller dimension	
- vmax	Relative to 1% of viewport's* larger dimension	
- %	Relative to the parent element


 `margin: 0 auto` dentro de un contenedor sirve para centrarlo horizontalmente, ya que con eso le damos valor de 0 para arriba y abajo y auto para el lado derecho e izquierdo.

 Hay un problema que afecta a las fotos que les hace tener como un espacio extra dentro de su borde. Para esto Tenemos que añadir la propiedad `white-space: nowrap;` al contenedor 
