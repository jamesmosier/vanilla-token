'use strict';

var _ = require('lodash'),
  addToken = require('./addToken'),
  removeToken = require('./removeToken'),
  removeTokenByName = require('./removeTokenByName'),
  hasClass = require('../utils/hasClass'),
  mainTemplate = require('./mainTemplate');

/**
 * Defaults
 */

var defaults = {
};


/**
 * Constructor
 */
var VanillaToken = function(el, options) {

  var settings = _.extend(defaults, options);

  this.elem = el;
  this.initialize();
  this.tokenList = document.getElementById('token-list');
  this.tokenStack = [];
};

/**
 * Initialises the widget
 */
VanillaToken.prototype.initialize = function() {
  this.createDomElems();
  this.establishHandlers();
};

/**
 * Create DOM elements
 */
VanillaToken.prototype.createDomElems = function () {
  this.elem.appendChild(mainTemplate());
};

/**
 * Establishes event handlers
 */
VanillaToken.prototype.establishHandlers = function() {

  document.addEventListener('DOMContentLoaded', function() {

    this.elem.addEventListener('keydown', function(e) {
      this.addRemoveToken(e, this);
    }.bind(this), true);

    var tokenWrapper = document.getElementById('token-wrapper');
    tokenWrapper.addEventListener('click', function(e) {
      document.getElementById('token-input').focus();
      this.removeToken(e, this);
    }.bind(this), true);

  }.bind(this), false);
};

/**
 * Add & remove token logic
 */
VanillaToken.prototype.addRemoveToken = function(e, that) {
  var target = e.target;
  var key = e.keyCode;

  if (key === 0 || key === 32 && (target.id === 'token-input')) {
    // if space key is pressed & user is inside 'token-input', add token
    addToken(target, that.tokenStack, that.tokenList);
  } else if (key === 8 || key === 46) {
    // if backspace or delete is pressed, remove the token
    var tokenInput = document.getElementById('token-input').value;
    if (/^\s*$/.test(tokenInput)) {
      // if token input has no value, it's ok to backspace delete
      removeToken(that.tokenStack, that.tokenList);
    }
  }
};

/**
 * Remove token logic
 */
VanillaToken.prototype.removeToken = function(e, that) {
  if (hasClass(e.target, 'remove-token')) {
    var tokenValue = e.target.nextSibling.value;
    removeTokenByName(that.tokenStack, that.tokenList, tokenValue);
  }
};


module.exports = VanillaToken;
