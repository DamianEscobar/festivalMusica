import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import { src, dest, watch } from "gulp";

const sass = gulpSass(dartSass);

export function css(done) {
  src('src/scss/app.scss') // Archivo de entrada
    .pipe(sass().on('error', sass.logError)) // Manejo de errores
    .pipe(dest('build/css')); // Carpeta de salida

  done();
}

export function dev() {
  watch('src/scss/**/*.scss', css)
}
