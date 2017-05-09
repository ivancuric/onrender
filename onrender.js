/**
 * A Promise wrapper for requestAnimationFrame
 * @returns {Promise}
 */
export function rafPromise() {
  return new Promise(requestAnimationFrame);
}


/**
 * Used for detecting when an element is rendered
 * @param {Node} element - The element that is waiting to be rendered
 */

export default async function render(element) {
  window.getComputedStyle(element);
  const f1 = await rafPromise();
  const f2 = await rafPromise();
  return f2 - f1;
}
