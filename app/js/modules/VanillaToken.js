'use strict';

var AddToken = require('./addToken'),
  RemoveToken = require('./removeToken'),
  RemoveTokenByName = require('./removeTokenByName'),
  HasClass = require('../utils/hasClass');

var tokenStack = [],
  tokenList = document.getElementById('token-list');

var VanillaToken = function() {
  this.initialize();
};

VanillaToken.prototype.initialize = function() {
  this.establishHandlers();
};

VanillaToken.prototype.establishHandlers = function() {
  var that = this;

  document.addEventListener('DOMContentLoaded', function() {
    var composeForm = document.querySelector('.compose-form');
    composeForm.addEventListener('keydown', that.addRemoveToken, true);

    var tokenWrapper = document.querySelector('.token-wrapper');
    tokenWrapper.addEventListener('click', that.removeToken, true);
  }, false);
};

VanillaToken.prototype.addRemoveToken = function(e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  var key = e.keyCode;

  if (key === 0 || key === 32 && (target.id === 'token-input')) {
    // if space key is pressed & user is inside 'token-input', add token
    AddToken(target, tokenStack, tokenList);
  } else if (key === 8 || key === 46) {
    // if backspace or delete is pressed, remove the token
    var tokenInput = document.getElementById('token-input').value;
    if (/^\s*$/.test(tokenInput)) {
      // if token input has no value, it's ok to backspace delete
      RemoveToken(tokenStack, tokenList);
    }
  }
};

VanillaToken.prototype.removeToken = function(e) {
  if (HasClass(e.target, 'remove-token')) {
    var tokenValue = e.target.nextSibling.value;
    RemoveTokenByName(tokenStack, tokenList, tokenValue);
  }
};


module.exports = VanillaToken;
