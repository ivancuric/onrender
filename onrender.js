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

    var bcr = null;
    var timeout = false;

    // The loop
    function checkRender() {
      setTimeout(function(){
        timeout = true;
      }, 500);
      // Get dimensions from getBoundingClientRect. Force layout.
      bcr = element.getBoundingClientRect();
      if (bcr.height == 0 && bcr.width == 0 && timeout === false) {
        // If the element isn't rendered, loop again on the next frame
        requestAnimationFrame(checkRender);
      } else {
        // If the element is rendered, fire callback and exit loop
        callback();
      }
    }

    checkRender();
  }
})();
