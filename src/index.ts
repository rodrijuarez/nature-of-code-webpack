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
    var xDistribution = gaussian(p.mouseX, 20 * 20);
    var yDistribution = gaussian(p.mouseY, 20 * 20);

    const xPosition = xDistribution.ppf(Math.random());
    const yPosition = yDistribution.ppf(Math.random());

    p.noStroke();
    let color = p.color(255, 0, 0, 100);
    p.fill(color);
    p.ellipse(xPosition, yPosition, 16, 16);
  };
};

var sketchP = new p5(sketch);
