'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var debowerify = require('debowerify');
var handleErrors = require('../util/handle-errors');
var config = require('../config');

function buildScript(file) {

  var bundler = browserify({
    entries: [config.sourceDir + 'js/' + file],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  });


  bundler = watchify(bundler);
  bundler.on('update', function() {
    rebundle();
  });


  bundler.transform(babelify);
  bundler.transform(debowerify);

  function rebundle() {
    var stream = bundler.bundle();

    gutil.log('Rebundle...');

    return stream.on('error', handleErrors)
      .pipe(source(file))
      .pipe(streamify(rename({
        basename: 'app'
      })))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(gulpif(browserSync.active, browserSync.reload({
        stream: true,
        once: true
      })));
  }

  return rebundle();

}

gulp.task('browserify', function() {
  return buildScript('main.js');
});
