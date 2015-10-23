'use strict'

var MainTemplate = function() {

  // token-wrapper elem
  var tokenWrapElem = document.createElement('div');
  tokenWrapElem.id = 'token-wrapper';
    var tokenWrapStyles = 'border: 1px solid #ccc;border-radius: 3px;box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);display: inline-block;margin-bottom: 10px;padding-top: 6px;padding-bottom: 6px;width: 100%;';
  tokenWrapElem.style.cssText = tokenWrapStyles;

  // tokenizer elem
  var tokenizerElem = document.createElement('div');
  tokenizerElem.className = 'tokenizer';
  tokenWrapElem.appendChild(tokenizerElem);

  // token list elem
  var tokenListElem = document.createElement('div');
  tokenListElem.id = 'token-list';
  tokenizerElem.appendChild(tokenListElem);

  // token input elem
  var tokenInputElem = document.createElement('input');
  tokenInputElem.type = 'text';
  tokenInputElem.id = 'token-input';
  tokenInputElem.style.cssText = 'background:transparent; border:none;';
  tokenizerElem.appendChild(tokenInputElem);


  return tokenWrapElem;
};

module.exports = MainTemplate;
