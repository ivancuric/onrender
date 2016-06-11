'use strict';

// Takes a callback which is fired when the element is rendered in the DOM

export default function onRender(element, callback) {

  // Element can be jQuery or native
  if (element instanceof jQuery) {
    element = element[0];
  }

  let bcr;
  function checkRender() {
    // Get dimensions from getBoundingClientRect. Elements not in the DOM
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
  setTimeout(() => {
    requestAnimationFrame(() => {
      checkRender();
    });
  }, 0);
}
