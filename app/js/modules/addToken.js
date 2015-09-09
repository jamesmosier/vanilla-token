'use strict';

var AddToken = function(target, tokenStack, tokenElemList){
  var tokenValue = target.value.trim();

  var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(tokenValue) || tokenStack.indexOf(tokenValue) !== -1) {
    // if it's not a valid email or it is a duplicate, don't allow the token to be added
    return;
  }

  var tokenTemplate = '<div class="token-item" data-id="' + tokenValue + '">' + tokenValue +
    '<span class="remove-token">&times;</span>' +
    '<input type="hidden" class="cc-token-value" name="CCToken" value="' + tokenValue + '"></div>';

  tokenStack.push(tokenValue);

  tokenElemList.innerHTML += tokenTemplate;
  target.value = '';
};

module.exports = AddToken;
