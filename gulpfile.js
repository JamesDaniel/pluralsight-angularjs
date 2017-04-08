var gulp = require('gulp');
var browserSync = require('browser-sync').create();
 
gulp.task('default', function () {
  console.log('running');  
});

gulp.task('serve',  [] , function( cb ){

    browserSync.init({
        port: process.env.PORT,
        open:  true,
        server: {
            baseDir: "."
        }
    });

    gulp.watch([
      './*' ,
    ] , ['serve:reload'] );

});

gulp.task('serve:reload' , []  , function(){
  browserSync.reload();
});