# onrender [![NPM version](https://img.shields.io/npm/v/onrender.svg?style=flat)](https://www.npmjs.com/package/onrender) [![NPM downloads](https://img.shields.io/npm/dm/onrender.svg?style=flat)](https://npmjs.org/package/onrender)


Wait for the DOM element to render before continuing with JS.
Useful when appending HTML to the DOM or toggling the style from `display: none` to `display: block`.

Uses `requestAnimationFrame` and `getBoundingClientRect` while remaining *very* performant (under 0.2ms on a 2014 MBP).

**Pro-tip:**
 Best used while there are no other long layout / paint operations running. But why would you have long running layout / paint operations on the first place? ಠ_ಠ

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
