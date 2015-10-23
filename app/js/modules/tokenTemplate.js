var TokenTemplate = function(tokenValue) {
    'use strict';

    var tokenItem = document.createElement('div');
    tokenItem.className = 'token-item';
    tokenItem.setAttribute('data-id', tokenValue);
    tokenItem.appendChild(document.createTextNode(tokenValue));

    var removeTokenElem = document.createElement('span');
    removeTokenElem.className = 'remove-token';

    removeTokenElem.appendChild(document.createTextNode('\u00D7'));
    tokenItem.appendChild(removeTokenElem);

    var hiddenTokenInput = document.createElement('input');
    hiddenTokenInput.type = 'hidden';
    hiddenTokenInput.value = tokenValue;
    hiddenTokenInput.className = 'cc-token-value';
    hiddenTokenInput.name = 'CCToken';
    tokenItem.appendChild(hiddenTokenInput);

    return tokenItem;
};

module.exports = TokenTemplate;
