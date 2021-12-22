let canvas1 = document.querySelector('.canvas1');
let context1 = canvas1.getContext('2d');

//border
context1.beginPath();
context1.rect(100, 100, 400, 400);
context1.lineWidth = 4;
context1.stroke();

context1.beginPath();
context1.arc(300, 300, 100, 0, Math.PI * 2);
context1.stroke();



let canvas2 = document.querySelector('.canvas2');
let context2 = canvas2.getContext('2d');

context2.fillStyle = 'blue';
context2.fillRect(100, 100, 400, 400); //coordinates (first two), dimensions (last two); creates, draws, and fills the rect with color

context2.beginPath();
context2.rect(100, 100, 400, 400);
context2.lineWidth = 2;
context2.stroke();
