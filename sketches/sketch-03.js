const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const degToRad = (degrees) => degrees / 180 * Math.PI;

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.fillStyle= 'black';

    cx = width * 0.5;
    cy = height * 0.5;
    w = width * 0.01;
    h = height * 0.1;

    let x, y;

    const radius = width * 0.3;
    const num = 12; 

    for(let i = 0; i<num; i++) {
      let slice = degToRad(360/num);
      let angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save() //save the context, do the transormations, then restore
      context.translate(x, y)
      context.rotate(-angle);
  
      context.beginPath();
  
      context.rect(-w*0.5, -h*0.5, w, h)
      // context.rect(0, 0, w, h)
  
      context.fill();
      context.restore();
    }
  };
};``

canvasSketch(sketch, settings);
