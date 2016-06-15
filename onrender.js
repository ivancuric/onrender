'use strict';

// Takes a callback which is fired when the element is rendered
function onRender(element, callback) {

  // Element can be jQuery or vanilla JS
  if (element instanceof jQuery) element = element[0];

  // Force a layout which returns a promise
  Promise.resolve(element.getBoundingClientRect())
  .then(function() {
    requestAnimationFrame(function() {
      callback();
    });
  });
}

// Check if used as a standalone script or a node module
if (typeof exports === 'object') {
  module.exports = onRender;
} else {
  window.onRender = onRender;
}
