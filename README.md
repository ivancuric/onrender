# onrender
Wait for the DOM element to render before continuing.

## Installation
`npm install --save onrender`

## Usage
```javascript
import onrender from 'onrender'

function needsLayout () { /*...*/ }
const elementToWatch =  $('.element') /* or */ document.querySelector('.element')

onrender(elementToWatch, needsLayout)
```
