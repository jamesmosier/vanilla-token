'use strict';

var RemoveToken = function (tokenStack, tokenElemList) {
  if (tokenStack.length <= 0) {
    return;
  }

  var tokenToDelete = tokenStack.pop();
  var tokenElementToDelete = document.querySelectorAll('[data-id="' + tokenToDelete + '"]')[0];
  tokenElemList.removeChild(tokenElementToDelete);
};

module.exports = RemoveToken;
