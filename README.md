# onrender

Wait for the DOM element to render before continuing with JS.
Useful when appending HTML to the DOM or toggling the style from `display: none` to `display: block`.

Uses `requestAnimationFrame` and `getBoundingClientRect` while remaining *very* performant. (under 0.2ms on a 2014 MBP)

**Pro-tip:**
 Best used while there are no other long layout / paint operations running. But that applies to everything. But why would you have long running layout / paint operations on the first place? ಠ_ಠ

## Installation
```bash
npm install --save onrender
```

## Usage
```javascript
import onRender from 'onrender'

function needsLayout () { /* stuff that needs the element to render */ }
const elementToWatch =  $('.element') /* or */ document.querySelector('.element')

onRender(elementToWatch, needsLayout)
```
