"use strict"

// vertex shader code (vsc)
const vsc = "attribute vec2 vpos;" +
"void main() {" +
"gl_Position = vec4(vpos, 0.0, 1.0);" +
"}";

// fragment shader code (fsc)
const fsc = "precision lowp float;" + 
"uniform vec4 vcolor;" + 
"void main() {" +
"gl_FragColor = vcolor;" +
"}";

let gl;
let gl_prog;
let canvas;
const N_DIM = 3;  // 2d homogenous coord
let unif_vcolor;

function create_gl_program() {
    let vs = gl.createShader(gl.VERTEX_SHADER);
    let fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(vs, vsc);
    gl.shaderSource(fs, fsc);
    gl.compileShader(vs);
    gl.compileShader(fs);
    gl_prog = gl.createProgram();
    gl.attachShader(gl_prog, vs);
    gl.attachShader(gl_prog, fs);
    gl.linkProgram(gl_prog);
}

function init_gl() {
    canvas = document.getElementById("webgl_canvas");
    gl = canvas.getContext("webgl");
    create_gl_program();
    gl.useProgram(gl_prog);
    
    gl.clearColor(0,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);    

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    let attr_vpos = gl.getAttribLocation(gl_prog, "vpos");
    gl.vertexAttribPointer(attr_vpos, N_DIM, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(attr_vpos);

    unif_vcolor = gl.getUniformLocation(gl_prog, "vcolor");
}


function draw_circle() {

    let r = randomf(.1,.9);
    let inc = 1;
    let rx = randomf(-1,1);
    let ry = randomf(-1,1);

    let vertices = [];
    
       for (let i=0; i <= 360; i+=inc) {
        let rad = deg_to_rad(i);
        let x_ = r*Math.cos(rad) + rx;
        let y_ = r*Math.sin(rad) + ry;

        vertices.push(x_);  // x coord
        vertices.push(y_);  // y coord
        vertices.push(1.0); // homogenous coord
    }
    // uniform4f color stuff
    gl.uniform4f(unif_vcolor, randomf(0,1), randomf(0,1), randomf(0,1), 1);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.drawArrays(gl.LINE_LOOP, 0, 360/inc);
    console.log(vertices);
}

function main() {
    init_gl();
    for (let i = 0; i < 30; i++) {
        draw_circle();
    }
    
}

main();