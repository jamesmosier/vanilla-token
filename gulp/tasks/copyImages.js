'use strict';

var gulp   = require('gulp');
var config = require('../config');

gulp.task('copyImages', function() {

  // Copy images from root directory to build/
  gulp.src(config.sourceDir + 'assets/images/*.*', {base: config.sourceDir}).pipe(gulp.dest(config.buildDir));

});
