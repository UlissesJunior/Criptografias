const alfa = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default function cripto(enter) {
  ent = enter.toUpperCase();
  const arrayAlfa = ent.split("");
  let sai = [];
  for (let tam = 0; tam < arrayAlfa.length; tam++) {
    for (let i = 0; i < alfa.length; i++) {
      if (arrayAlfa[tam] == alfa[i]) {
        if (i == 23) {
          sai.push(alfa[0]);
        } else if (i == 24) {
          sai.push(alfa[1]);
        } else if (i == 25) {
          sai.push(alfa[2]);
        } else {
          sai.push(alfa[i + 3]);
        }
      }
        if(arrayAlfa[tam] == " ") {
          sai.push("")
        }
    }
  }

  let wordCrip = sai.join("");
  document.querySelector("#result").innerHTML = "A palavra " + ent + " criptografada é: " + wordCrip
}

function descripto(enter) {
  ent = enter.toUpperCase();
  const arrayAlfa = ent.split("");
  let sai = [];

  for (let tam = 0; tam < arrayAlfa.length; tam++) {
    for (let i = 0; i < alfa.length; i++) {
      if (arrayAlfa[tam] == alfa[i]) {
        if (i == 0) {
          sai.push(alfa[23]);
        } else if (i == 1) {
          sai.push(alfa[24]);
        } else if (i == 2) {
          sai.push(alfa[25]);
        } else {
          sai.push(alfa[i - 3]);
        }
      }
    }
  }

  let wordCrip = sai.join("");
  console.log("A palavra " + ent + " descriptografada é: " + wordCrip);
}

// document.body.onkeyup = function (event) {
//   if (event.keyCode == 13) {
//     enter = document.getElementById("word").value;
//     cripto(enter)
    

//     // document.querySelector("#loop").innerHTML = "Deseja executar novamente?" + "<input type='text' name='resloop' id='word'>" + "</input>"
//     // let result = document.getElementById("resloop").value
//     // if (result == 1) {
//     //   enter = ""
//     //   document.querySelector("#loop").innerHTML = ""
//     //   document.querySelector("#result").innerHTML = ""
//     // }
//   }
// };
