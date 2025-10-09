
function get_scale_3d(Sx,Sy) {
  return [
    [Sx,  0, 0],
    [ 0, Sy, 0],
    [ 0,  0, 1]
  ];
}

function get_translate_3d(Tx,Ty) {
  return [
    [ 1,  0, Tx],
    [ 0,  1, Ty],
    [ 0,  0,  1]
  ];
}

function deg_to_rad(deg) {
    return deg * (Math.PI / 180);
}

function get_rotate_3d(theta) {
   return [
      [ Math.cos(theta),-Math.sin(theta), 0],
      [ Math.sin(theta), Math.cos(theta), 0],
      [     0 ,           0,        1]
   ]
}



function mat_mat_mul_3d(M1,M2) {
    return [
        [ M1[0][0]*M2[0][0] + M1[0][1]*M2[1][0] + M1[0][2]*M2[2][0],
          M1[0][0]*M2[0][1] + M1[0][1]*M2[1][1] + M1[0][2]*M2[2][1],
          M1[0][0]*M2[0][2] + M1[0][1]*M2[1][2] + M1[0][2]*M2[2][2] ],

        [ M1[1][0]*M2[0][0] + M1[1][1]*M2[1][0] + M1[1][2]*M2[2][0],
          M1[1][0]*M2[0][1] + M1[1][1]*M2[1][1] + M1[1][2]*M2[2][1],
          M1[1][0]*M2[0][2] + M1[1][1]*M2[1][2] + M1[1][2]*M2[2][2] ],

        [ M1[2][0]*M2[0][0] + M1[2][1]*M2[1][0] + M1[2][2]*M2[2][0],
          M1[2][0]*M2[0][1] + M1[2][1]*M2[1][1] + M1[2][2]*M2[2][1],
          M1[2][0]*M2[0][2] + M1[2][1]*M2[1][2] + M1[2][2]*M2[2][2] ]          
    ];
}

function mat_vec_mul_3d(M,v) {
  return [
    M[0][0]*v[0] + M[0][1]*v[1] + M[0][2]*v[2],
    M[1][0]*v[0] + M[1][1]*v[1] + M[1][2]*v[2],
    M[2][0]*v[0] + M[2][1]*v[1] + M[2][2]*v[2]
  ];
}

function draw_line(v1,v2) {
    context.beginPath();
    context.moveTo(v1[0],v1[1]);
    context.lineTo(v2[0],v2[1]);
    context.stroke();    
}

