// Magic for p5 importing properly in TypeScript AND Webpack
import 'p5';
var p5 = require('p5');

import './assets/js/p5.dom.js';

var sketch = (p: p5) => {
  let canvas: any;
  let xoff = 0.0;
  let yoff = 0.0;

  let xCoordinates: number[] = [],
    yCoordinates: number[] = [],
    numberOfLines = 1,
    t = 0;

  p.preload = () => {};

  p.setup = () => {
    (<any>window).p5 = p;
    canvas = p.createCanvas(800, 800);
  };

  p.draw = () => {
    p.loadPixels();
    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        let bright = p.map(p.noise(xoff, yoff), 0, 1, 0, 255);
        p.pixels[x + y * p.width] = bright;
        yoff += 0.01;
      }
      xoff += 0.01;
    }
    p.updatePixels();
  };
};

var sketchP = new p5(sketch);
