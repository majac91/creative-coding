const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    let w= width * 0.10;
    let h =  height * 0.10;
    let gap = width * 0.03;
    let x, y;
    let ix = width * 0.18;
    let iy = height * 0.18;
    let offset = 16;

    for(let i=0; i<5; i++) {
      for(let j=0; j<5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;
      
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();


        if(Math.random()>0.5) {
          context.beginPath();
          context.rect(x+offset/2, y+offset/2, w-offset, h-offset);
          context.stroke();  
        }
      }
    }
  }
};


canvasSketch(sketch, settings);
