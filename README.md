# DavidMartinPerez.github.io


## Versión single page
~STACK~
* SCSS -> CSS
* PUG -> template html
* GULP -> para generar los dist, compilar el scss y el pug
* FONT -> fire-code


Arquitectura:

- app
    - assets <- Contiene todos los assets img, fuentes, iconos
        - fonts, img, ect.
    - src
        - scripts <- Toda la logica de javascript
            - main.js, otros scripts
        - styles < - estilos en archivos scss
            - commun <- estilos comunes en varias vistas TODO: 1
                - colors, var, etc
            - style.scss <- archivo principal que reune todos los demas
        - templates <- todas las templates pug
            - components <- componentes comunes
                - header, navbarm footer, etc
            - views (index, html) <- documentos html que serán vistas

TODO: 's:
1. Cambiar esta arquitectura por una arquitectura 7-1-pattern example: https://gist.github.com/rveitch/84cea9650092119527bc


Roapmap concept:
Roapmap de la página web, la clave es hacer una misma página que contenga la mayor fuente de información, pero sin saturar, por ejemplo info personal + 6 proyectos con más renombre y un enlace a todos + experiencia con más renombre y un enlace a toda la experiencia + estudios principales / cursos titulaciones principal y un enlace a todos + contacto

1. Home (Esta tendrá información sobre mi)
    - Info sobre mi + mas foto
    - enlace a curriculum
    - skills y preferencias
    - 6 proyectos con más renombre (con unas cartitas con explicación + foto`) + enlace a todos los proyectos
    - Experiencia laboral con más renombre + un boton que muestre otra vista con toda la información bien detallada
    - Estudios + cursos realizados y un boton que muestre más en detalle todo eso
    - contacto

2. Proyectos - TODO: Evaluar si usar una base de datos para guardar proyectos + info + enlaces ó hacerlos con atributos ej: data-tecnologias="css, js, angular, etc"
    - Cartas con proyectos
        - info y foto
        - boton con más detalle que despliega un popup
        - Iconos de tecnologias
        - Enlaces a los proyectos
        - enlace a repositorio
    - Filtro según tecnologias

3. Experiencia - Experiencia laboral detallada con todo tipo de tareas realizadas + CV enlace y view

4. Estudios - Estudios detallados y cursos realizados, potencias
