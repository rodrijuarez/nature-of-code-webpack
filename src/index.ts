// Magic for p5 importing properly in TypeScript AND Webpack
import 'p5';
var p5 = require('p5');

import './assets/js/p5.dom.js';

var sketch = (p: p5) => {
  let canvas: any;
  let t: number = 0;
  p.preload = () => {};

  p.setup = () => {
    (<any>window).p5 = p;
    canvas = p.createCanvas(400, 400);
  };

  p.draw = () => {
    const n = p.noise(t);

    const x = p.map(n, 0, 1, 0, p.width);

    p.ellipse(x, 180, 16, 16);

    t += 0.01;
  };
};

var sketchP = new p5(sketch);
