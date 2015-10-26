  var css = '#token-wrapper { background-color: #fff;border: 1px solid #ccc;border-radius: 3px;box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);display: inline-block;margin-bottom: 10px;padding: 6px;width: 100%; }' +
    '#token-wrapper:focus { border:1px solid #333; }' +
    '#token-input {border: none; margin-top: 3px; } #token-input:focus {outline: 0; border: none; }' +
    '.token-item {background-color: #f5f5f5; border: 1px solid #d9d9d9; border-radius: 3px; cursor: default; float: left; height: 20px; margin: 3px; padding: 0 3px; white-space: nowrap; }' +
    '.token-item:hover {border-color: #b9b9b9; } .token-item > .remove-token {color: #888; }' +
    '.remove-token {color: #b7b5b5; cursor: pointer; margin-left: 3px; }';

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);