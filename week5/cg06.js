"use strict";

// vertex shader code (vsc)
const vsc = "attribute vec4 pos;" + 
"void main() {" +
"gl_Position = pos;" +
"}";

// fragment shader code (fsc)
const fsc = "precision mediump float;" + 
"void main() {" + 
" gl_FragColor = vec4(1,0,.5,1);" +
"}";

const pos1 = [-.25,-.5,.25,-.5,0,.5];


let gl;
let gl_prog;
let canvas;

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

    let vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, pos1, gl.STREAM_DRAW);
    let attr_pos = gl.getAttribLocation(gl_prog, "pos");
    gl.enableVertexAttribArray(attr_pos);
    gl.drawArrays(gl.TRIANGLES,0,3);

}

function main() {
    init_gl();

}

main();

