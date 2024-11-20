import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import { src, dest, watch, series } from "gulp";

const sass = gulpSass(dartSass);

export function js (done)  {
  src('src/js/app.js')
    .pipe( dest('build/js'))

    done();
}

export function css(done) {
  src('src/scss/app.scss', {sourcemaps: true}) // Archivo de entrada
    .pipe(sass().on('error', sass.logError)) // Manejo de errores
    .pipe(dest('build/css', {sourcemaps: true})); // Carpeta de salida

  done();
}

export function dev() {
  watch('src/scss/**/*.scss', css)
  watch('src/js/**/*.js', js)
}

export default series(js,css,dev);