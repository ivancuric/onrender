# onrender
Wait for the DOM element to render before continuing with JS.
Useful when appending HTML to the DOM or toggling states from `display: none` to `display: block`.

## Installation
`npm install --save onrender`

## Usage
```javascript
import onrender from 'onrender'

function needsLayout () { /*...*/ }
const elementToWatch =  $('.element') /* or */ document.querySelector('.element')

onrender(elementToWatch, needsLayout)
```
