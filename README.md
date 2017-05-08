# onrender [![NPM version](https://img.shields.io/npm/v/onrender.svg?style=flat)](https://www.npmjs.com/package/onrender) [![NPM downloads](https://img.shields.io/npm/dm/onrender.svg?style=flat)](https://npmjs.org/package/onrender)


Returns a `Promise` when an element finishes laying out by using a forced reflow and 2× `requestAnimationFrame`. For situations when `setTimeout(0)` or `requestAnimationFrame` doesn't quite cut it.

The double-RaF is used to give Chrome time to apply potential `will-change` optimizations. (src: Paul Lewis)

Useful for running code that requires the element to be laid out or chaining style changes such as toggling the style from `display: none` to `display: block` followed by a transition which the browser would otherwise batch together resulting in no animations being fired.

Use cases include overlays of all sorts you don't wish to keep in the memory such as modals, fullscreen navigations and other layout-intensive stuff.

## Installation
```bash
npm install --save onrender
```

## Usage
```javascript
import onRender from 'onrender';

const elementToWatch = document.querySelector('.element')

onRender(elementToWatch).then(_ => {...});
```
