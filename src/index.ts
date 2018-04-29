// Magic for p5 importing properly in TypeScript AND Webpack
import 'p5';
var p5 = require('p5');

import './assets/js/p5.dom.js';

var sketch = (p: p5) => {
  let canvas: any;

  let xCoordinates: number[] = [],
    yCoordinates: number[] = [],
    numberOfLines = 1;

  p.preload = () => {};

  p.setup = () => {
    (<any>window).p5 = p;
    canvas = p.createCanvas(800, 800);

    cleanCoordinates();
  };

  p.draw = () => {
    for (let i = 0; i < numberOfLines; i++) {
      const stepSize = montecarlo(0, 10);
      console.log('stepSize', stepSize);

      const stepX = p.round(p.random(-stepSize, +stepSize));
      const stepY = p.round(p.random(-stepSize, +stepSize));
      xCoordinates[i] += stepX;
      yCoordinates[i] += stepY;

      p.push();
      p.strokeWeight(2);
      p.point(xCoordinates[i], yCoordinates[i]);
      p.pop();
    }
  };

  const cleanCoordinates = () => {
    for (let i = 0; i < numberOfLines; i++) {
      xCoordinates[i] = p.width / 2;
      yCoordinates[i] = p.height / 2;
    }
  };

  const montecarlo = (start: number, end: number) => {
    while (true) {
      const r1 = p.random(start, end);
      const probability = r1;
      const r2 = p.random(start, end);

      if (r2 < probability) {
        return r1;
      }
    }
  };
};

var sketchP = new p5(sketch);
