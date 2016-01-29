var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');
var minify = require('gulp-minify');
 
gulp.task('js-minify', function() {
  gulp.src('public/javascripts/*.js')
    .pipe(minify({
        exclude: [''],
        ignoreFiles: ['min.js'],
        mangle : false
    }))
    .pipe(gulp.dest('dist'))
});
 
gulp.task('img-compress', () => {
    return gulp.src('public/images/*.jpg')
        .pipe(imageminJpegtran({progressive: true})())
        .pipe(gulp.dest('public/images/compress'));
});

gulp.task('default', function(){
//Tarefa padrão
console.log("Default task running...");
});

gulp.task('speed requests', function(){
//Tarefa padrão
console.log("Default task running...");
});

/* Tests */

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

gulp.task('Mocha watch', function() {
    gulp.watch(['lib/**', 'test/**'], ['mocha']);
});


/*
gulp.task('default', function(){
//Tarefa padrão
console.log("Default task running...");
});
*//*
gulp.task('default', function(){
//Tarefa padrão
console.log("Default task running...");
});
*//*
gulp.task('default', function(){
//Tarefa padrão
console.log("Default task running...");
});
*//*
gulp.task('default', function(){
//Tarefa padrão
console.log("Default task running...");
});
*//*
gulp.task('default', function(){
//Tarefa padrão
console.log("Default task running...");
});
*/