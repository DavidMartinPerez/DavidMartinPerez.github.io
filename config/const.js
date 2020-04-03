const { GET_URL_FILES, uuid } = require('./functions');

//URL BASE DE LA APLICACION
const BASE_APP      = './app/';
const URL_RESOURCES = 'src/';

//URL DE CONTENEDORES DE ARCHIVOS
const URL_TEMPLATES = `${BASE_APP}${URL_RESOURCES}templates/`;
const URL_STYLES    = `${BASE_APP}${URL_RESOURCES}styles/`;
const URL_SCRIPTS   = `${BASE_APP}${URL_RESOURCES}scripts/`;
const URL_ASSETS    = `${BASE_APP}assets/`;

//URL BASE DESTINO DE LOS FICHEROS
const FOLDER_DIST        = './dist';
const FOLDER_DIST_ASSEST = '/assetes/';
const FOLDER_DIST_SCRIPT = 'js/';
const FOLDER_DIST_STYLE  = 'css/';
const FOLDER_DIST_IMG    = 'img/'

// Rutas de ficheros:
const URLS_TEMPLATES = {
    SRC : `${URL_TEMPLATES}/*.pug`,
    DEST: `${FOLDER_DIST}`
};
const URLS_STYLES = {
    SRC : `${URL_STYLES}/style.scss`,
    DEST: `${FOLDER_DIST}${FOLDER_DIST_ASSEST}${FOLDER_DIST_STYLE}`
};
const URLS_SCRIPTS = {
    BUNDLE: {
        SRC : `${URL_SCRIPTS}*.js`,
        DEST: `${FOLDER_DIST}${FOLDER_DIST_ASSEST}${FOLDER_DIST_SCRIPT}`,
        NAME: 'bundle.js',
    },
    VENDOR: {
        SRC : `${URL_SCRIPTS}/lib/*.js`,
        DEST: `${FOLDER_DIST}${FOLDER_DIST_ASSEST}${FOLDER_DIST_SCRIPT}`,
        NAME: 'vendor.js'
    }
};
const URLS_IMG = {
    SRC : `${URL_ASSETS}/img/*`,
    DEST: `${FOLDER_DIST}${FOLDER_DIST_ASSEST}${FOLDER_DIST_IMG}`
};
const URLS_FONTS = {
    SRC : `${URL_ASSETS}font/**`,
    DEST: `${FOLDER_DIST}${FOLDER_DIST_ASSEST}font/`
};
const URLS_ICONS_FONTELLO = {
    CSS: {
        SRC : `${URL_ASSETS}icons/css/fontello.css`,
        DEST: `${FOLDER_DIST}${FOLDER_DIST_ASSEST}icons/css/`,
    },
    FONT: {
        SRC : `${URL_ASSETS}icons/font/*`,
        DEST: `${FOLDER_DIST}${FOLDER_DIST_ASSEST}icons/font/`
    }
};

let CONFIG_PUG = {
    BUNDLEJS        : `${FOLDER_DIST_ASSEST}${FOLDER_DIST_SCRIPT}${URLS_SCRIPTS.BUNDLE.NAME}?v=${uuid()}`,
    VENDORJS        : `${FOLDER_DIST_ASSEST}${FOLDER_DIST_SCRIPT}${URLS_SCRIPTS.VENDOR.NAME}?v=${uuid()}`,
    STYLECSS        : `${FOLDER_DIST_ASSEST}${FOLDER_DIST_STYLE}style.css?v=${uuid()}`,
    FONTELLOCSS     : `${FOLDER_DIST_ASSEST}icons/css/fontello.css?v=${uuid()}`,
    FAVICON         : `${FOLDER_DIST_ASSEST}${FOLDER_DIST_IMG}favicon.png?v=${uuid()}`,
    FONT_FIRACODE   : `${FOLDER_DIST_ASSEST}font/fira-code/fira_code.css?v=${uuid()}`,
    //ENTORNO       : 'https://davidmartinperez.github.io/',
    ENTORNO         : './',
    PAGES           : {
        EXPERIENCE      : 'experience.html',
        PROJECTS        : 'projects.html',
        ABOUTME         : 'aboutme.html',
        CONTACTME       : 'contactme.html'
    },
};

module.exports = {
    URLS_TEMPLATES,
    URLS_STYLES,
    URLS_SCRIPTS,
    URLS_IMG,
    URLS_FONTS,
    URLS_ICONS_FONTELLO,
    FOLDER_DIST,
    CONFIG_PUG
};
