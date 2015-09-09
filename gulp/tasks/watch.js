'use strict';

var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', ['browserSync', 'server'], function() {

  // Scripts are automatically watched by Watchify inside Browserify task
  gulp.watch(config.styles.src,                  ['sass']);
  gulp.watch(config.sourceDir + 'status/*.html', ['copyHTML']);
  gulp.watch(config.sourceDir + 'index.html',    ['copyIndex']);

});
