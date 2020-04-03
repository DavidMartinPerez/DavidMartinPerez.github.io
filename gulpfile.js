
// https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js
// https://pugjs.org/language/includes.html

//DEPENDENCIAS
const gulp      = require('gulp');
const sass      = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat    = require('gulp-concat');
const clean     = require('gulp-clean');
const pug       = require('gulp-pug');

const { URLS_TEMPLATES,
        URLS_STYLES,
        URLS_SCRIPTS,
        URLS_IMG,
        URLS_FONTS,
        URLS_ICONS_FONTELLO,
        FOLDER_DIST,
        CONFIG_PUG } = require('./config/const');

//TAREAS

// Limpiar carpeta dist
gulp.task('clean', function () {
    return gulp.src(FOLDER_DIST, {read: false})
        .pipe(clean());
});

//Transpilar ficheros SASS a CSS
gulp.task('styles', function() {
    gulp.src(URLS_STYLES.SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest(URLS_STYLES.DEST))
});

// Mover html
gulp.task('views', function() {
    gulp.src([`${URLS_TEMPLATES.SRC}`])
        .pipe(pug( {
            locals: CONFIG_PUG
        } )) //options
        .pipe( gulp.dest(URLS_TEMPLATES.DEST) )
    });

//Generar los archivos bundle (propios) y vendor (liberias de terceros)
gulp.task('scripts-bundle', function() {
    gulp.src(`${URLS_SCRIPTS.BUNDLE.SRC}`)
        .pipe(concat(URLS_SCRIPTS.BUNDLE.NAME))
        .pipe(gulp.dest(`${URLS_SCRIPTS.BUNDLE.DEST}`));
});
gulp.task('scripts-vendor', function() {
    gulp.src(`${URLS_SCRIPTS.VENDOR.SRC}`)
            .pipe(concat(URLS_SCRIPTS.VENDOR.NAME))
            .pipe(gulp.dest(`${URLS_SCRIPTS.VENDOR.DEST}`));
});

// Iconos fontello
gulp.task('icon-fontello', function(){
    //Hoja de estilo
    gulp.src([`${URLS_ICONS_FONTELLO.CSS.SRC}`])
        .pipe(gulp.dest(URLS_ICONS_FONTELLO.CSS.DEST));
    //Fuente
    gulp.src([`${URLS_ICONS_FONTELLO.FONT.SRC}`])
        .pipe(gulp.dest(URLS_ICONS_FONTELLO.FONT.DEST));
});

// Iconos fontello
gulp.task('font-fire-code', function(){
    //Hoja de estilo
    gulp.src([`${URLS_FONT_FIRECODE.FONT_CSS.SRC}`])
        .pipe(gulp.dest(URLS_FONT_FIRECODE.FONT_CSS.DEST));
    //Fuente
    gulp.src([`${URLS_ICONS_FONTELLO.FONT.SRC}`])
        .pipe(gulp.dest(URLS_ICONS_FONTELLO.FONT.DEST));
});


// Imagenes
gulp.task('img', function(){
    gulp.src([`${URLS_IMG.SRC}`])
        .pipe(gulp.dest(URLS_IMG.DEST));
});

// Fuentes
gulp.task('font', function(){
    gulp.src([`${URLS_FONTS.SRC}`])
        .pipe(gulp.dest(URLS_FONTS.DEST));
});


gulp.task('watch',function() {
    gulp.watch(URLS_TEMPLATES.SRC,['views']); //html
    gulp.watch(URLS_STYLES.SRC,['styles']); //css
    gulp.watch(URLS_SCRIPTS.BUNDLE.SRC,['scripts-bundle']); //bundlejs
    gulp.watch(URLS_SCRIPTS.VENDOR.SRC,['scripts-vendor']); //vendorjs
    gulp.watch(URLS_ICONS_FONTELLO.CSS.SRC,['icon-fontello']); //icon-fontello
    gulp.watch(URLS_IMG.SRC,['img']); //img
    gulp.watch(URLS_FONTS.SRC,['font']); //font
});

gulp.task('default',['styles', 'scripts-bundle', 'scripts-vendor', 'views', 'icon-fontello', 'img', 'font']);
