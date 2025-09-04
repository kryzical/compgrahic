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
//context.scale(1,-1);

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

draw_circle(-90,90,30)

for (let r=1; r<100; r++) {
    draw_circle(20,20,r)
}



