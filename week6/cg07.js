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

function draw_line(vertices) {
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.drawArrays(gl.LINES, 0, 3);

}

function draw_random_lines() {
    // version 1
    // let vertices = [];
    // let n_lines = 200;
    // for (let i=0; i<n_lines*2; i++) {
    //     vertices.push(randomf(-1,1)); // x-coord
    //     vertices.push(randomf(-1,1)); // y-coord
    //     vertices.push(1.0);           // homogenous coord

    // }
    // //console.log(vertices);
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // gl.drawArrays(gl.LINES, 0, n_lines*2);
    
    // version 2
    let n_lines = 100;
    //gl.uniform4f(unif_vcolor, randomf(0,1), randomf(0,1), randomf(0,1), 1);

    for (let i=0; i<n_lines; i++) {
        let vertices = [];
        // first endpoint
        vertices.push(randomf(-1,1)); // x coord
        vertices.push(randomf(-1,1)); // y coord
        vertices.push(1.0); // homogenous
        // second endpoint
        vertices.push(randomf(-1,1)); // x coord
        vertices.push(randomf(-1,1)); // y coord
        vertices.push(1.0); // homogenous

        gl.uniform4f(unif_vcolor, randomf(0,1), randomf(0,1), randomf(0,1), 1);
        draw_line(vertices);

    }
}

function main() {
    init_gl();

    let vertices1 = [-.25,-.25,1, .6,.8,1];
    let vertices2 = [-.25, -.25,1, .5,.3,1, .6,.8,.1]
    //draw_lines(vertices2);
    draw_random_lines();
}

main();
