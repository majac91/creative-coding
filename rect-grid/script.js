let canvas1 = document.querySelector('.canvas1'); 
let context1 = canvas1.getContext('2d');

let canvas2 = document.querySelector('.canvas2'); 
let context2 = canvas2.getContext('2d');


function drawGrid(num, context, isRandomInnerGrid, isInnerGrid) {
    for(let i=0; i<num; i++) {
        for(let j=0; j<num; j++) {
    
            let width = 60;
            let height = 60;
            let gap = 20;
            let x = 100 + (width + gap) * i;
            let y = 100 + (height + gap) * j;
            
            context.beginPath();
            context.rect(x, y, width, height);
            context.stroke();

            if(isInnerGrid) {
                context.beginPath();
                context.rect(x+8, y+8, width-16, height-16);
                context.stroke();            
            }
    
            if(isRandomInnerGrid && Math.random()>0.5) {
                context.beginPath();
                context.rect(x+8, y+8, width-16, height-16);
                context.stroke();
                context.closePath();
                context.clearRect(x+8, y+8, width-16, height-16);
            }
        }
    }
}

drawGrid(5, context1, false, true);




function drawRandomGrid(num, context) {
    for(let i=0; i<num; i++) {
        for(let j=0; j<num; j++) {
            let width = 60;
            let height = 60;
            let gap = 20;    
            let x = 100 + (width + gap) * i;
            let y = 100 + (height + gap) * j;
            
            // context.beginPath();
            context.lineWidth = 2;
            // context.rect(x, y, width, height);
            // context.stroke();
    

            if(Math.random()>0.5) {
                // context.clearRect(x, y, width, height);

                // context.clearRect(x+8, y+8, width-16, height-16);


                context.beginPath();
                // context.fillStyle = "rgba(0, 0, 0, 0)";
                context.rect(x, y, width, height);
                context.stroke();
                context.clearRect(x, y, width, height);

                // context.beginPath();
                // context.rect(x+8, y+8, width-16, height-16);
                // context.stroke();
                // context.clearRect(x+8, y+8, width-16, height-16);

                // context.beginPath();
                // context.fillStyle='red';
                // context.fillRect(x+8, y+8, width-16, height-16);
                // context.stroke();
                // context.clearRect(x+8, y+8, width-16, height-16);

            }

        }
    }
}




function randomize() {
    setInterval(() => {
        drawRandomGrid(5, context2);
    }, 1000);
}


randomize();

// drawRandomGrid(5, context2);
