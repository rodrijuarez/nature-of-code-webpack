// Magic for p5 importing properly in TypeScript AND Webpack
import 'p5';
var p5 = require('p5');

var sketch = (p: p5) => {
  let canvas: any;

  let coordinates: p5.Vector[];
  let speeds: p5.Vector[];

  let defaultSpeed: p5.Vector = p.createVector(1, 3.3);

  let numberOfBalls = 50;

  p.preload = () => {};

  p.setup = () => {
    canvas = p.createCanvas(800, 800);
    setupBalls();
  };

  const setupBalls = () => {
    coordinates = Array.from(new Array(numberOfBalls), () =>
      p.createVector(p.random(0, p.width), p.random(0, p.height)),
    );

    speeds = Array.from(new Array(numberOfBalls), () =>
      p.createVector(defaultSpeed.x, defaultSpeed.y),
    );
  };

  p.draw = () => {
    p.background(p.color(255));

    for (let index = 0; index < numberOfBalls; index++) {
      calculateBallCoordinates(index);
    }
  };

  const calculateBallCoordinates = (index: number) => {
    const coordinate = coordinates[index];
    const speed = speeds[index];

    coordinate.add(speed);

    if (coordinate.x > p.width || coordinate.x < 0) {
      speed.set(speed.x * -1, speed.y);
    }

    if (coordinate.y > p.height || coordinate.y < 0) {
      speed.set(speed.x, speed.y * -1);
    }

    p.stroke(p.color(0));
    p.fill(p.color(175));

    p.ellipse(coordinate.x, coordinate.y, 16, 16);
  };
};

var sketchP = new p5(sketch);
