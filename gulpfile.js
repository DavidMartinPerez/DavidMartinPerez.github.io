const { src, dest, series, parallel, watch } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const rename = require('gulp-rename');

const { CONFIG_PUG, CONFIG } = require('./config/const');

/** Funcion que transpila los pug a html */
function html() {
    // console.log(CONFIG_PUG);
    return src(CONFIG.SRC.PUG)
        .pipe(pug({
            locals: CONFIG_PUG
        }))
        .pipe(dest(`${CONFIG.DIST.FOLDER}${CONFIG.DIST.HTML}`));
}

/** funcion que trasnpila los SCSS a CSS apartir del SCSS principal que importa todos los demas */
function css() {
    return src(CONFIG.SRC.STYLE)
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(rename(CONFIG.STYLE_UUID))
        .pipe(dest(`${CONFIG.DIST.FOLDER}${CONFIG.DIST.CSS}`))
}

/** funcion que se encarga de concatenar todos los archivos javascript */
function js() {
    //BUNDLEJS - javascript propio
    src(CONFIG.SRC.BUNDLEJS, { sourcemaps: true })
        .pipe(concat(CONFIG.BUNDLEJS_UUID))
        .pipe(dest(`${CONFIG.DIST.FOLDER}${CONFIG.DIST.SCRIPT}`, { sourcemaps: true }))

    //VENDORJS - javascript de terceros
    return src(CONFIG.SRC.VENDORJS, { sourcemaps: true })
            .pipe(concat(CONFIG.VENDORJS_UUID))
            .pipe(dest(`${CONFIG.DIST.FOLDER}${CONFIG.DIST.SCRIPT}`, { sourcemaps: true }))
}

/** funcion para limpiar la carpeta distribuidora */
function cleanAll() {
    return src(`./${CONFIG.DIST.FOLDER}`, { read: false, allowEmpty: true })
        .pipe(clean());
}

/** funcion que se encarga de copiar todos los assets */
function assets() {
    return src(CONFIG.SRC.ASSETS)
        .pipe(dest(`./${CONFIG.DIST.FOLDER}${CONFIG.DIST.ASSETS}`));
}

function watchFiles() {
    watch([CONFIG.SRC.PUG], () => html());
    watch([CONFIG.SRC.SCRIPT], () => js());
    watch([`${CONFIG.SRC.SCSS}`], () => css());
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.cleanAll = cleanAll;
exports.assets = assets;
exports.watch = watchFiles;
exports.default = series(cleanAll, parallel(html, css, js, assets));