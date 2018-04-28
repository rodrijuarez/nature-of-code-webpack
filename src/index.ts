// Magic for p5 importing properly in TypeScript AND Webpack
import 'p5';
var p5 = require('p5');
const gaussian = require('gaussian');

import './assets/js/p5.dom.js';

var sketch = (p: p5) => {
  let canvas: any;
  p.preload = () => {};

  p.setup = () => {
    (<any>window).p5 = p;
    canvas = p.createCanvas(800, 800);
  };

  p.draw = () => {
    var distribution = gaussian(400, 100);

    const result = distribution.ppf(Math.random());

    p.noStroke();
    let color = p.color(255, 0, 0, 10);
    p.fill(color);
    p.ellipse(result, 180, 16, 16);
  };
};

var sketchP = new p5(sketch);
