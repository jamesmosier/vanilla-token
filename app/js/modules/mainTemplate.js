'use strict'

var MainTemplate = function() {
    var tokenWrapStyles = 'border: 1px solid #ccc;border-radius: 3px;box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);display: inline-block;margin-bottom: 10px;padding-top: 6px;padding-bottom: 6px;width: 100%;';

    var input = '<input type="text" id="token-input" style="background:transparent; border:none;">';
    return '<div id="token-wrapper" style="' + tokenWrapStyles + '">' +
        '<div class="tokenizer">' +
        '<div id="token-list"></div>' +
        input +
        '</div></div>';
};

module.exports = MainTemplate;
