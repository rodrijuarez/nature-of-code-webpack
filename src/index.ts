// Magic for p5 importing properly in TypeScript AND Webpack
import 'p5';
var p5 = require('p5');

var sketch = (p: p5) => {
  let canvas: any;

  let xSpeeds: number[] = [];
  let ySpeeds: number[] = [];
  let xCoordinates: number[] = [];
  let yCoordinates: number[] = [];

  let numberOfBalls = 50;
  let xSpeed = 1;
  let ySpeed = 3.3;

  p.preload = () => {};

  p.setup = () => {
    canvas = p.createCanvas(800, 800);
    setupBalls();
  };

  const setupBalls = () => {
    xCoordinates = Array(numberOfBalls).fill(0);
    yCoordinates = Array(numberOfBalls).fill(0);
    xSpeeds = Array(numberOfBalls).fill(xSpeed);
    ySpeeds = Array(numberOfBalls).fill(ySpeed);

    for (let index = 0; index < numberOfBalls; index++) {
      xCoordinates[index] = p.random(0, p.width);
      yCoordinates[index] = p.random(0, p.height);
    }
  };

  p.draw = () => {
    p.background(p.color(255));

    for (let index = 0; index < numberOfBalls; index++) {
      calculateBallCoordinates(index);
    }
  };

  const calculateBallCoordinates = (index: number) => {
    xCoordinates[index] += xSpeeds[index];
    yCoordinates[index] += ySpeeds[index];

    if (xCoordinates[index] > p.width || xCoordinates[index] < 0) {
      xSpeeds[index] = xSpeeds[index] * -1;
    }

    if (yCoordinates[index] > p.height || yCoordinates[index] < 0) {
      ySpeeds[index] = ySpeeds[index] * -1;
    }

    p.stroke(p.color(0));
    p.fill(p.color(175));

    p.ellipse(xCoordinates[index], yCoordinates[index], 16, 16);
  };
};

var sketchP = new p5(sketch);
