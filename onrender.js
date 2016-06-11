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

    var bcr;

    // The loop
    function checkRender() {
      // Get dimensions from getBoundingClientRect. Elements not rendered
      // won't have dimensions
      bcr = element.getBoundingClientRect();
      if (bcr.height == 0 && bcr.width == 0) {
        // If the element isn't rendered, loop again on the next frame
        requestAnimationFrame(checkRender);
      } else {
        // If the element is rendered, fire callback and exit loop
        callback();
      }
    }

    // Wrap call in a setTimeout(0) to place on the JS stack
    // and wait for the next frame before starting the loop
    setTimeout(function() {
      requestAnimationFrame(function() {
        checkRender();
      });
    }, 0);
  }
})();
