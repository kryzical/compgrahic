
let canvas = document.getElementById("canvas_output");
let width = canvas.width
let height = canvas.height

console.log(width,height);

let context = canvas.getContext("2d");

// draw line
//beginPath is member function from context
// these 4 lines are manual way
// context.beginPath();
// context.moveTo(100,100);
// context.lineTo(300,200);
// context.stroke();

function draw_line(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}

draw_line(320,100,340,200);
draw_line(450,392,283,381);

context.fillRect(400,400,50,10);
context.fillRect(300,200,1,1);