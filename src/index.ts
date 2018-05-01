// Magic for p5 importing properly in TypeScript AND Webpack
import 'p5';
var p5 = require('p5');

var sketch = (p: p5) => {
  let canvas: any;
  p.preload = () => {};

  p.setup = () => {
    canvas = p.createCanvas(800, 800);
  };

  p.draw = () => {
    p.background(p.color(255));

    const mouse = p.createVector(p.mouseX, p.mouseY);
    const center = p.createVector(p.width / 2, p.height / 2);

    mouse.sub(center);

    p.translate(p.width / 2, p.height / 2);

    p.line(0, 0, mouse.x, mouse.y);
  };
};

var sketchP = new p5(sketch);
