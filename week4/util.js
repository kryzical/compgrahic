function get_scale_3d(Sx,Sy) {
  return [
    [Sx, 0, 0],
    [0, Sy, 0],
    [0, 0, 1]
  ];
}

//
// M1 = [ 
//       [a_11, a_12, a_13],
//       [a_21, a_22, a_23],
//       [a_31, a_32, a_33],
//     ]
// M2 = [ 
//       [b_11, b_12, b_13],
//       [b_21, b_22, b_23],
//       [b_31, b_32, b_33],
//     ]
// M3 = M1xM2
//     [
//     [a_11*b_11 + a_12*b_12 + a_13*b_31, a_11*b_12+a_12*b_11 + a_13*b_32] 
//     ]

function mat_mat_mul_3d(M1,M2) {
    return [
      [
        M1[0][0]*M2[0][0] + M1[0][1]*M2[1][0] + M1[0][2]*M2[2][0],
        M1[0][0]*M2[0][1] + M1[0][1]*M2[1][1] + M1[0][2]*M2[2][1],
        M1[0][0]*M2[0][2] + M1[0][1]*M2[1][2] + M1[0][2]*M2[2][2]
      ],

      [
        M1[1][0]*M2[0][0] + M1[1][1]*M2[1][0] + M1[1][2]*M2[2][0],
        M1[1][0]*M2[0][1] + M1[1][1]*M2[1][1] + M1[1][2]*M2[2][1],
        M1[1][0]*M2[0][2] + M1[1][1]*M2[1][2] + M1[1][2]*M2[2][2]
      ],

      [
        M1[2][0]*M2[0][0] + M1[2][1]*M2[1][0] + M1[2][2]*M2[2][0],
        M1[2][0]*M2[0][1] + M1[2][1]*M2[1][1] + M1[2][2]*M2[2][1],
        M1[2][0]*M2[0][2] + M1[2][1]*M2[1][2] + M1[2][2]*M2[2][2]
      ]
    ];
}

function mat_vec_mul_3d(M,v) {
  return [
    M[0][0]*v[0] + M[0][1]*v[1] + M[0][2]*v[2],
    M[1][0]*v[0] + M[1][1]*v[1] + M[1][2]*v[2],
    M[2][0]*v[0] + M[2][1]*v[1] + M[2][2]*v[2],
  ];
}

function draw_line(v1,v2){
    context.beginPath();
    context.moveTo(v1[0],v1[1]);
    context.lineTo(v2[0],v2[1]);
    context.stroke();
}



// function mat_mat_mul_3d_loop(M1, M2) {
//   const R = [ [0,0,0], [0,0,0], [0,0,0] ];
//   // for each row i of M1
//   for (let i = 0; i < 3; i++) {
//     // for each column j of M2
//     for (let j = 0; j < 3; j++) {
//       // accumulate the dot product of row i and column j
//       let sum = 0;
//       for (let k = 0; k < 3; k++) {
//         // M1[i][k] is element from row i, column k of M1
//         // M2[k][j] is element from row k, column j of M2
//         sum += M1[i][k] * M2[k][j];
//       }
//       R[i][j] = sum;
//     }
//   }
//   return R;
// }
