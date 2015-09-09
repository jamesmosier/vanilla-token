'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function(callback) {

  callback = callback || function() {};

  // Run all tasks once
  return runSequence(['sass', 'browserify', 'copyIndex', 'copyHTML', 'copyIcons', 'copyImages'], 'watch', callback);

});
