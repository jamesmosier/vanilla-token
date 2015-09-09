'use strict';

var gulp   = require('gulp');
var config = require('../config');

gulp.task('copyHTML', function () {
  gulp.src(config.sourceDir + 'status/index.html', {base: config.sourceDir}).pipe(gulp.dest(config.buildDir));
});
