# onrender [![NPM version](https://img.shields.io/npm/v/onrender.svg?style=flat)](https://www.npmjs.com/package/onrender) [![NPM downloads](https://img.shields.io/npm/dm/onrender.svg?style=flat)](https://npmjs.org/package/onrender)


Waits for an element to finish rendering and then runs the callback function. For situations when `setTimeout(0)` or `requestAnimationFrame` doesn't quite cut it (when it takes >16ms to render). Setting large "magic number" `setTimeout` values is sub-optimal and guesswork at best, since you don't know the hardware capabilities of the client's device.

Useful when appending HTML to the DOM or toggling the style from `display: none` to `display: block` before running additional style calculations or other code that requires the element to be rendered.

Uses `requestAnimationFrame` and `getBoundingClientRect` and remains *very* performant (under 0.2ms per frame on a 2014 MBP, not taking into consideration Chrome's 2-4ms render time).

**Pro-tips:**
 * Best used while there are no other long layout / paint operations running. But why would you have long running layout / paint operations on the first place? ಠ_ಠ
 * Don't use while scrolling, since it will invalidate the layout and force `getBoundingClientRect` and [cause layout thrashing](https://gist.github.com/paulirish/5d52fb081b3570c81e3a).
 * Works wonders if you have to toggle the `display` attribute before firing any transitions on the element.

## Installation
Use it as a node module:
```bash
npm install --save onrender
```
or just include it as a standalone script:
```html
<script src="onrender.js"></script>
```

## Usage
```javascript
function needsLayout () { /* stuff that needs the element to be rendered */ }
const elementToWatch =  $('.element') /* or */ document.querySelector('.element')

onRender(elementToWatch, needsLayout)
```
