'use strict';

var config = require('../config');
var http = require('http');
var express = require('express');
var gulp = require('gulp');
var gutil = require('gulp-util');
var morgan = require('morgan');

gulp.task('server', function() {

  var server = express();

  // log all requests to the console
  server.use(morgan('dev'));
  server.use(express.static(config.buildDir));


  server.all('/*', function(req, res) {
    res.sendFile('index.html', {
      root: 'build'
    });
  });

  // Start webserver if not already running
  var httpServer = http.createServer(server);
  httpServer.on('error', function(err) {
    if (err.code === 'EADDRINUSE') {
      gutil.log('Dev server is already started on port ' + config.serverport);
    } else {
      throw err;
    }
  });

  httpServer.listen(config.serverport);

});
