const mcmap = {   
   '.-'    : "A", 
   '-...'  : "B",
   '-.-.'  : "C",
   '-..'   : "D",
   '.'     : "E",
   '..-.'  : "F",
   '--.'   : "G",
   '....'  : "H",
   '..'    : "I",
   '.---'  : "J",
   '-.-'   : "K",
   '.-..'  : "L",
   '--'    : "M",
   '-.'    : "N",
   '---'   : "O",
   '.--.'  : "P",
   '--.-'  : "Q",
   '.-.'   : "R",
   '...'   : "S",
   '-'     : "T",
   '..-'   : "U",
   '...-'  : "V",
   '.--'   : "W",
   '-..-'  : "X",
   '-.--'  : "Y",
   '--..'  : "Z",
   '-----' : "0",
   '.----' : "1",
   '..---' : "2",
   '...--' : "3",
   '....-' : "4",
   '.....' : "5",
   '-....' : "6",
   '--...' : "7",
   '---..' : "8",
   '----.' : "9",
   '.......' : " "
};

function decode(mc_in) {
    let eng = "";
    let mc_chars = mc_in.split(",");
    for (let c of mc_chars) {
        for (let k in mcmap) {
            if (k === c) {
                eng += mcmap[k];
                break;
            }
        }
    }
    return eng;
}

function convert() {
    let mc = document.getElementById("mc_ta").value;
    let eng = decode(mc);
    document.getElementById("eng_ta").value = eng;
}


