let canvas = document.getElementById("canvas_output");
let width = canvas.width;
let height = canvas.height;

let context = canvas.getContext("2d");
context.translate(width/2,height/2);
context.scale(1,-1);

let house_coords = [
     [0,0,1],
     [2,0,1],
     [4,0,1],
     [2,6,1],
     [4,6,1],
     [8,0,1],
     [-1,8,1],
     [0,10,1],
     [9,8,1],
     [8,10,1],
     [4,20,1],
     [6,15,1],
     [6,17,1],
     [7.5,17,1],
     [7.5,11.7,1]
];

function draw_house(C) {
     draw_line(C[0],C[5]);
     draw_line(C[5],C[9]);
     draw_line(C[9],C[7]);
     draw_line(C[7],C[0]);
     draw_line(C[1],C[3]);
     draw_line(C[3],C[4]);
     draw_line(C[4],C[2]);
     draw_line(C[6],C[10]);
     draw_line(C[10],C[8]);
     draw_line(C[11],C[12]);
     draw_line(C[12],C[13]);
     draw_line(C[13],C[14]);
}


let S1 = get_scale_3d(10,5);
let T1 = get_translate_3d(100,50);
//steps 1 and 2 
let TT = mat_mat_mul_3d(T1,S1);

let RC1 = deg_to_rad(-270);
let R1 = get_rotate_3d(RC1);
let T2 = get_translate_3d(0,-150);
//steps 3 and 4
let TT2 = mat_mat_mul_3d(R1,TT)
let TT23 = mat_mat_mul_3d(T2,TT2);

let RC2 = deg_to_rad(90);
let R2 = get_rotate_3d(RC2);
let TT3 = mat_mat_mul_3d(R2,TT23);

let C1 = TT3;

function transform_house(M) {
     let new_house_coords = [];
     for (let i=0; i<house_coords.length; i++)
          new_house_coords.push(mat_vec_mul_3d(M,house_coords[i]));
     draw_house(new_house_coords);
}

transform_house(C1);
