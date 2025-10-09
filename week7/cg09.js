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

const house = [
    [0,.4,1, 0,0,1, .5,0,1, .5,.4,1, .25,.65,1, 0,.4,1, .5,.4,1], // roof and body
    [0.1,0,1, .1,.15,1, .15,.15,1, .15,0,1], // door
    [.35,.25,1, .35,.35,1, .45,.35,1, .45,.25,1, .35,.25,1], // window frame
    [.35,.3,1, .45,.3,1], // window cross x
    [.4,.25,1, .4,.35,1], // window cross y
    [.25+.25/2,.5+.025,1, .25+.25/2,.5+.25/2,1, .25+.175,.5+.25/2,1,
    .25+.175,.4+.075,1] // chimney
];

const xy_axis = [
    [-1,0,1, 1,0,1], // x
    [0,1,1, 0,-1,1]  // y  
];

let magenta_color = [1,0,1];

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

function transform(input) {
    switch(input.id) {
        case "scalex" : 
            console.log("scalex:", input.value);
            let tsxhouse = do_transform(house,get_scale_3d(input.value,1))
            // way to clear the screen
            gl.clear(gl.COLOR_BUFFER_BIT);
            draw_xy_axis()
            draw_house(tsxhouse,magenta_color)
            break;
        case "scaley" : 
            console.log("scaley:", input.value);
            let tsyhouse = do_transform(house,get_scale_3d(1,input.value))
            // way to clear the screen
            gl.clear(gl.COLOR_BUFFER_BIT);
            draw_xy_axis()
            draw_house(tsyhouse,magenta_color)
            break;
        case "rotate" :
            console.log(input.value);
            break;
    }
}

function do_transform(vertices,T) {
    let v, tmp;
    let tvertices = [];
    for (let i = 0; i < vertices.length; ++i) {
        tmp = [];
        for (let j=0; j<vertices[i].length; j += N_DIM) {
            v = [vertices[i][j], vertices[i][j+1], vertices[i][j+2]];
            tmp = tmp.concat(mat_vec_mul_3d(T,v));
        }
        tvertices.push(tmp);
    }
    return tvertices;
}

function draw_line(vertices) {
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.drawArrays(gl.LINES, 0, 3);
}

function draw_house(vertices,color) {
    for (let i=0; i<vertices.length; ++i) {
        gl.uniform4f(unif_vcolor, color[0], color[1], color[2], 1);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices[i]), gl.STATIC_DRAW);
                                    // process the vertices in N_DIM pieces
        gl.drawArrays(gl.LINE_STRIP, 0, vertices[i].length/N_DIM);
    }
}

function draw_xy_axis(color) {
    gl.uniform4f(unif_vcolor,1,1,1,1);
    draw_line(xy_axis[0]);
    draw_line(xy_axis[1]);
}

function main() {
    
    init_gl();
    draw_xy_axis();
    draw_house(house,magenta_color);

}

main();