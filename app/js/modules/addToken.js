'use strict';

var AddToken = function(target, tokenStack, tokenElemList){
  var tokenTemplate = require('./tokenTemplate');

  var tokenValue = target.value.trim();

  var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(tokenValue) || tokenStack.indexOf(tokenValue) !== -1) {
    // if it's not a valid email or it is a duplicate, don't allow the token to be added
    return;
  }

  tokenStack.push(tokenValue);

  var tokenItem = tokenTemplate(tokenValue);
  tokenElemList.appendChild(tokenItem);

  target.value = '';
};

module.exports = AddToken;
