const { uuid } = require('./functions');

//CONST de archivos
/** ID unico para eviar problemas de cacheo */
const _uuid = uuid();
/** Nombre del style con identificador unico para evitar cacheos */
const STYLE_UUID = `style.${_uuid}.css`;
/** Nombre del script con identificador unico para evitar cacheos */
const SCRIPT_UUID = `script.${_uuid}.js`;

/** Archivo de configuración de todas las URL del entorno */
const CONFIG = {
    /** URL del Entorno */
    ENTORNO : '/',
    /** Nombre del style con identificador unico para evitar cacheos */
    STYLE_UUID,
    /** Nombre del script con identificador unico para evitar cacheos */
    SCRIPT_UUID,

    /** URL SRC DE DONDE SE ENCUENTRAN LOS ARCHIVOS EN EL DESARROLLO */
    SRC : {
        /** Todos pug para ser transpilados a html */
        PUG: './app/src/templates/*.pug',
        /** Todos los js para ser concatenados a uno solo */
        SCRIPT: './app/src/scripts/*.js',
        /** El fichero pirncipal que incluye todos los SCSS para transpilarlos a CSS */
        STYLE: './app/src/styles/style.scss',
        /** Todos los archivos SCSS */
        SCSS: '/app/src/styles/**',
        /** Todos los assets que se quieren añadir */
        ASSETS: [ './app/assets/**' ]
    },

    /** URL PARA LA CARPETA DISTRIBUIDORA DE LOS ARCHIVOS CONTRIBUIDOS */
    DIST : {
        /** Carpeta en distribuidora distribuidora */
        FOLDER : 'dist/',
        /** Carpeta en distribuidora donde se encuentra en JS concatenado de todos */
        SCRIPT : 'js/',
        /** Carpeta en distribuidora donde se encuentra el CSS transpilado del SCSS */
        CSS : 'css/',
        /** Carpeta en distribuidora donde se encuentra los html transpilado del PUG */
        HTML : '',
        /** Carpeta en distribuidora donde se encuentra todos los assets, es una copia directa de lo que hay en assets */
        ASSETS : 'assets/'
    }
}

/** configuración de url, variables de PUG */
const CONFIG_PUG = {
    /** Url del style para el index.html */
    STYLE: `${CONFIG.ENTORNO}${CONFIG.DIST.CSS}${STYLE_UUID}`,
    /** Url del javascript para el index.html */
    SCRIPT: `${CONFIG.ENTORNO}${CONFIG.DIST.SCRIPT}${SCRIPT_UUID}`,
    /** Url del css que importa la fuente para el index.html */
    FIRACODE: `${CONFIG.ENTORNO}${CONFIG.DIST.ASSETS}font/fira-code/fira_code.css`,
    //** Url del favicon de la web */
    FAVICON: `${CONFIG.ENTORNO}${CONFIG.DIST.ASSETS}img/favicon.ico`
}

module.exports = {
    /** configuración de url, variables de PUG */
    CONFIG_PUG,
    /** Archivo de configuración de todas las URL del entorno */
    CONFIG
}