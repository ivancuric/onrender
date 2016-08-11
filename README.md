# onrender [![NPM version](https://img.shields.io/npm/v/onrender.svg?style=flat)](https://www.npmjs.com/package/onrender) [![NPM downloads](https://img.shields.io/npm/dm/onrender.svg?style=flat)](https://npmjs.org/package/onrender)


Returns a `Promise` when an element finishes laying out by using a forced reflow and then runs the callback function. For situations when `setTimeout(0)` or `requestAnimationFrame` doesn't quite cut it.

Useful for running code that requires the element to be laid out or chaining style changes such as toggling the style from `display: none` to `display: block` followed by a transition which the browser would otherwise batch together resulting in no animations being fired.

Use cases include overlays of all sorts you don't wish to keep in the memory such as modals, fullscreen navigations and other layout-intensive stuff.

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
function needsLayout () {
  /* stuff that needs the element to be laid out */
}

const elementToWatch = document.querySelector('.element')

onRender(elementToWatch, needsLayout)
```
