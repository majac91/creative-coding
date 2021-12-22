const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.fillStyle= 'black';

    x = width * 0.5;
    y = height * 0.5;
    w = width * 0.3;
    h = height * 0.3;


    context.save() //save the context, do the transormations, then restore
    context.translate(100, 100)
    context.rotate(0.3);

    context.beginPath();

    context.rect(0, 0, w, h)

    context.fill();
    context.restore();

    context.translate(400, 600)
    context.beginPath();
    context.arc(0,0,50,0,Math.PI*2);
    context.fill();

  };
};

canvasSketch(sketch, settings);
