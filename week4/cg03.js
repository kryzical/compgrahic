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

// x is some 2d vector
function draw_point(x) {
    context.fillRect(x[0],x[1],5,5);
}

let a = [0,0];
let b = [100,0];
let c = [100,100];
let d = [0,100];

draw_point(a);
draw_point(b);
draw_point(c);
draw_point(d);

// alpha is in degrees
function getR(alpha) {
    let ralpha = deg_to_rad(alpha);
    return [
        [ Math.cos(ralpha) , -Math.sin(ralpha)],
        [ Math.sin(ralpha) ,  Math.cos(ralpha)]
    ]
}

function math_vec_dot_2d(M,v) {
    return [M[0][0]*v[0]+M[0][1]*v[1],
            M[1][0]*v[0]+M[1][1]*v[1]];
}

// S is a scale matrix entries
// x is a vector or a point to be scaled
function scale(S,X) {
// //    console.log(S);
//     return XX = [S[0][0]*X[0]+S[0][1]*X[1],
//                  S[1][0]*X[0]+S[1][1]*X[1]];
    return mat_vec_doc_2d(S,X);
}

// alpha in degrees
function rotate(alpha,X) {
    let R = getR(alpha);
    return mat_vec_dot_2d(R,X);
}

const S1 = [
      [1.2,0],
      [0,.7]
];

aa = scale(S1,a);
bb = scale(S1,b);
cc = scale(S1,c);
dd = scale(S1,d);
// console.log(aa);
// console.log(bb);
// console.log(cc);
// console.log(dd);
draw_point(aa);
draw_point(bb);
draw_point(cc);
draw_point(dd);

function draw_quad(a,b,c,d){
    draw_line(a[0],a[1],b[0],b[1]);
    draw_line(b[0],b[1],c[0],c[1]);
    draw_line(c[0],c[1],d[0],d[1]);
    draw_line(d[0],d,[1],a[0],a[1]);
}

draw_quad(a,b,c,d);
draw_quad(aa,bb,cc,dd);

function draw_rotate(deg,a,b,c,d) {
    let a_r = rotate(deg,a);
    let b_r = rotate(deg,b);
    let c_r = rotate(deg,c);
    let d_r = rotate(deg,d);
    draw_quad(a_r,b_r,c_r,d_r);
}

draw_rotate(45,1,2,3,5);
draw_rotate(-45,1,2,3,5);
draw_rotate(45,1,2,3,5);


