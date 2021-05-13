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