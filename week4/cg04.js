// A = [[1,2,3],
//      [4,5,6],
//      [7,8,9]]
// B = [[6,3,2],
//      [1,9,4],
//      [2,2,2]]

// console.log(A)
// console.log(B)

// C = mat_mat_mul_3d(A,B);
// console.log(C);

let canvas = document.getElementById("canvas_output");
let width = canvas.width
let height = canvas.height

let context = canvas.getContext("2d");
context.translate(width/2,height/2);
context.scale(1,-1);

house_coords = [
     [0,0,1],
     [2,0,1],
     [4,0,1],
     [2,6,1],
     [4,6,1],
     [8,0,1],
     [-1,8,0],
     [0,10,1],
     [9,8,1],
     [8,10,1],
     [4,20,1],
     [6,15,1],
     [6,17,1],
     [7.5,17,1],
     [7.5,11.5,1]
];

// the numbers are following a sequenced path
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

let S1 = get_scale_3d(20,10);

function scale_house(S) {
     let new_house = [];
     for (let i = 0; i < 15; i++) {
          new_house.push(mat_vec_mul_3d(S,house_coords[i]));
     }
     draw_house(new_house);

}

scale_house(S1);
