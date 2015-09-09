'use strict';

var RemoveTokenByName = function (tokenStack, tokenElemList, tokenValue) {
  var tokenElementToDelete = document.querySelectorAll('[data-id="' + tokenValue + '"]')[0];
  tokenElemList.removeChild(tokenElementToDelete);

  var index = tokenStack.indexOf(tokenValue);
  tokenStack.splice(index, 1);
};

module.exports = RemoveTokenByName;
