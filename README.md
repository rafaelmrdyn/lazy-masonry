# lazy-masonry

A Simple Lazy Masonry for JavaScript

[![Version](https://img.shields.io/npm/v/open-source-npm-package-template.svg)](https://www.npmjs.com/package/lazy-masonry)
[![Downloads/week](https://img.shields.io/npm/dw/open-source-npm-package-template.svg)](https://www.npmjs.com/package/lazy-masonry)
[![License](https://img.shields.io/npm/l/open-source-npm-package-template.svg)](https://github.com/rafaelmrdyn/lazy-masonry/blob/master/package.json)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat)](#contributors)
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

## Getting Started

### Installation

- with NPM
  
  ```$ npm install lazy-masonry```

# Demo
<a href="https://lazy-masonry.web.app">https://lazy-masonry.web.app</a>

## How to use it
It's a pretty easy to use this library. This is the usage example :
```javascript

// for the first add this div tag inside body

<div id="lazy-masonry"></div>

// add this line only if installed via npm 
import LazyMasonry from 'lazy-masonry';
                
// creating object masonry, you can pass options to it
var masonry = new LazyMasonry('lazy-masonry', {
    images: 5,
    width: 800,
    animateable: true,
    animationType: 'from-top',
    animationDuration: '1s'
});

animation types are ["from-top", "from-top-left", "from-top-right", "from-right", "from-left", "from-bottom"]

// now you have masonry object and can add images to it

// this will add one element 
masonry.add({uri: 'example-image.jpg'}, successCalback, errorCalback);

// this will add all elements of array
masonry.runWithArray([{uri: 'example-image.jpg'}, {uri: 'example-image.jpg'}]);

// you can listen to every click on elements
masonry.onclick((item) => {
    console.log(item);
});                

```

## Contributors ✨

<table>
  <tr>
    <td align="center"><a href="https://github.com/rafaelmrdyn"><img src="https://avatars3.githubusercontent.com/u/33260974?s=460&u=ca2b0f7882cdba1d90481ae471301b95181289d7&v=4" width="100px;" alt="Rafael Muradyan"/><br /><sub><b>Rafael Muradyan</b></sub></a><br /><a href="https://github.com/rafaelmrdyn" title="Code">💻</a></td>
  </tr>
</table>
