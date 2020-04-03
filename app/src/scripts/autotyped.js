
//Dependencias typed.js

//Mensaje escribido con la libreria typed.js -> https://github.com/mattboldt/typed.js

let init = () => {

    let arrayStringHome = [
        "Bienvenidos.",
        "Desarrolladores.",
        "Diseñadores.",
        "Personas."
    ]

    let arrayStringProjects = [
        "Estos son mis proyectos personales.",
        "En tecnologías como:",
        "Angular","ReactJS","NodeJS","Firebase","CSS",
        "PHP","MongoDB","MYSQL","Material-UI","MaterializeCSS"
    ]


    let paragraph = null;
    let arrayString = null;
    let obj = null;
    //Recorremos la url para saber que textos coger y pintar;
    switch (window.location.pathname) {
        case "/":
            paragraph = document.getElementById("typed-home");
            arrayString = arrayStringHome;
            break;
        case "/index.html":
            paragraph = document.getElementById("typed-home");
            arrayString = arrayStringHome;
            break;
        case "/projects.html":
            paragraph = document.getElementById("typed-project");
            arrayString = arrayStringProjects;
            break;

        default:
            console.log("nope")
            break;
    }

    //Si no añadimos configuración de typed cogemos uno por defecto
    if(obj == null){
        obj = {
            strings: arrayString,
            // typing speed
            typeSpeed: 20,
            // time before typing starts
            startDelay: 1200,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 800,
            // loop
            loop: true,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: false,
            // either html or text
            contentType: 'html',
        }
    }


    if ( paragraph != null && arrayString != null
            && obj != null) {

        var typed = new Typed(paragraph, obj);

    }
}


document.addEventListener('DOMContentLoaded', init, false);