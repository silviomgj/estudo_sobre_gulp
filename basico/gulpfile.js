const gulp = require('gulp')
const series = gulp.series

const antes1 = cb => {
    console.log('tarefa antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('tarefa antes 2!')
    return cb()
}

function copiar(cb) {
   // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) maneira 1
   gulp.src('pastaA/**/*.txt') //maneira 2
    .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('tarefa fim!')
    return cb()
}

module.exports.default = series(
    antes1,
    antes2,
    copiar,
    fim
)