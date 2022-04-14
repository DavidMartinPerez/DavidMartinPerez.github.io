# DavidMartinPerez.github.io

Bienvenidos a mi página personal, a continuación te explicare como he montado este sitio :-D

## Stack

* [Sccs](https://sass-lang.com/)
* [Pug](https://pugjs.org/api/getting-started.html) -> Template Html

## Metodologías
* [BEM](http://getbem.com/) para las clases estilos y reutilización de SCSS
//TODO: Mejor explicación
    * Bloque es la < contenedora > .block
    * Elemento son las < hijas > de la < contenedora > .block__element
    * Modificador son < hijos > con propiedades diferentes .block__element--modifier
* Kebab Case (kebab-case)
## Arquitectura
* [7-1 Scss](https://sass-guidelin.es/#the-7-1-pattern) la arquitectura que he utilizado para mis estilos
    * base/
        * Contiene todo lo relacionado con la base de la página, reset, tipografias, incluso animaciones.
    * abstracts/
        * Contiene todo lo relacionado con utilidades de SCSS, funciones, mixin, variables... Esto no se propagará cuando se compile la aplicación.
    * components/
        * Contiene pequeños bloques de códigos que se pueden reutilizar, por ejemplo: botones, enlaces...
    * layout/
        * Contiene todo lo relacionado con las estructuras/bloques principales de la página, por ejemplo: header, footer, paneles grids.
    * pages/
        * Contiene estilos pertenecientes a cada página de la web, en este caso como es solo una landing page no habrá varias.

* Arquitectura para las plantillas html:
    * Layout/
        - Contiene todo lo relacionado con las estructuras/bloques principales de la página.
    * Components/
        - Contiene componentes reutilizables.
    * pages


# Utilización del package.json para la generación de la carpeta dist
# Github Actions que utilizo
# Guia de estilos y colores, inspiraciones

# Estructura de la web
