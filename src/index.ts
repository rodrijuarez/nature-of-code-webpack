// Magic for p5 importing properly in TypeScript AND Webpack
import 'p5';
var p5 = require('p5');

var sketch = (p: p5) => {
  let canvas: any;

  let xspeed = 1;
  let yspeed = 3.3;

  let x = 0;
  let y = 0;

  p.preload = () => {};

  p.setup = () => {
    canvas = p.createCanvas(800, 800);
  };

  p.draw = () => {
    p.background(p.color(255));

    x += xspeed;
    y += yspeed;

    if (x > p.width || x < 0) {
      xspeed = xspeed * -1;
    }

    if (y > p.height || y < 0) {
      yspeed = yspeed * -1;
    }

    p.stroke(p.color(0));
    p.fill(p.color(175));

    p.ellipse(x, y, 16, 16);
  };
};

var sketchP = new p5(sketch);
