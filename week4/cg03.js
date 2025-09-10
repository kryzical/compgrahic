// math functions in javascript
// math.sin(theta)
// math.cos(theta)

let canvas = document.getElementById("canvas_output");
let width = canvas.width
let height = canvas.height

console.log(width,height);

let context = canvas.getContext("2d");
//translate moves our stuff around
context.translate(width/2,height/2);
//flip our sine wave
context.scale(1,-1);

function deg_to_rad(deg) {
    return deg * (Math.PI / 180);
}

// sine wave
// for (let d=0; d <= 720; d++) {
//     let rad = deg_to_rad(d);
//     let r = 50;
//     let y = r * Math.sin(rad);
//     context.fillRect(d,y,2,2);
// }

// for (let d=0; d <= 360; d++) {
//     let rad = deg_to_rad(d);
//     let r = 100;
//     let x = r*Math.cos(rad);
//     let y = r*Math.sin(rad);
//     context.fillRect(x,y,2,2)
// }

function draw_circle(x,y,r) {
    for (let d=0; d <= 360; d++) {
        let rad = deg_to_rad(d);
        let x_ = r*Math.cos(rad) + x;
        let y_ = r*Math.sin(rad) + y;
        context.fillRect(x_,y_,2,2)
    }
}

function draw_line(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}

draw_line(0,height/2,0,-height/2)
draw_line(-width/2,0,width/2,0)

function draw_point(x) {
    context.fillRect(x[0],y[1],10,10);
}

let a = [0,0];
let b = [100,0];
let c = [100,100];
let d = [0,3];

draw_point(a);
draw_point(b);
draw_point(c);
draw_point(d);

