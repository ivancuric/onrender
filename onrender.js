'use strict';

(function() {
  // Check if used as a standalone script or a node module
  if (typeof exports == 'object') {
    module.exports = onRender;
  } else {
    window.onRender = onRender;
  }

  // Takes a callback which is fired when the element is rendered
  function onRender(element, callback) {
    // Element can be jQuery or native
    if (element instanceof jQuery) {
      element = element[0];
    }
    // Pop a forced layout tied to a promise
    Promise.resolve(element.getBoundingClientRect())
    .then(function(value) {
      callback(value);
    });
  }
})();
