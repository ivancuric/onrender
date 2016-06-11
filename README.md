# onrender
Wait for the DOM element to render before continuing with JS.
Useful when appending HTML to the DOM or toggling the style from `display: none` to `display: block`.

## Installation
`npm install --save onrender`

## Usage
```javascript
import onRender from 'onrender'

function needsLayout () { /* stuff that needs the element to render */ }
const elementToWatch =  $('.element') /* or */ document.querySelector('.element')

onRender(elementToWatch, needsLayout)
```
