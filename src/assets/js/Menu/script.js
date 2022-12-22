document.body.onkeyup = function (event) {
  let option = document.getElementById("option").value[0];
  const question = document.querySelector("#question");
  const file = document.querySelector(".file");
  if (option == 1) {
    file.innerHTML = "Cifra de César";
    question.innerHTML =
      "Qual palavra você deseja criptografar?" +
      "<input type='text' name='word' id='word'>";
    document.body.onkeyup = function (event) {
      if (event.keyCode == 13) {
        const enter = document.getElementById("word").value;
        cripto(enter); 
      }
    };
  } else
  if (option == 2) {
    file.innerHTML = "Cifra de César";
    question.innerHTML =
      "Qual palavra você deseja descriptografar?" +
      "<input type='text' name='option' id='word'>";
    document.body.onkeyup = function (event) {
      if (event.keyCode == 13) {
        const enter = document.getElementById("word").value;
        descripto(enter);
      }
    };
  } else
  if (option == 3) {
    file.innerHTML = "Transposição Simples";
    question.innerHTML =
      "Qual palavra você deseja criptografar?" +
      "<input type='text' name='option' id='word'>" +
      "Qual a palavra chave?" +
      "<input type='text' name='key' id='key'>";
    document.body.onkeyup = function (event) {
      if (event.keyCode == 13) {
        const enter = document.getElementById("word").value;
        const key = document.getElementById("key").value;
        Tcripto(enter, key);
      }
    };
  }
};


//Estou com erro no import de função, portanto, vou deixar as funções e4m um mesmo arquivo por enquanto
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


//Criptografia César


function cripto(enter) {
  const ent = enter.toUpperCase();
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


//Descriptografia César


function descripto(enter) {
  const ent = enter.toUpperCase();
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
  document.querySelector("#result").innerHTML = "A palavra " + ent + " descriptografada é: " + wordCrip
}


//Transposição Simples


function Tcripto(enter, key) {
  //Entrada
  const ent = enter.toUpperCase();
  //Transforma cada letra da string em uma posição de array
  const arrayAlfa = ent.split("");
  const arrayKey = key.split("");
  //Arredondamento
  var arredonda = Math.ceil(ent.length / key.length);
  //Criação das linhas do array
  var matriz = new Array(arredonda);
  //Criação das colunas do array
  for (let col = 0; col <= arredonda; col++) {
    matriz[col] = new Array(arrayKey.length);
  }
  //Puxa a palavra 1
  for (let column = 0; column < key.length; column++) {
    matriz[0][column] = arrayKey[column];
  }

  //Arruma as posições de acordo com o número de linhas e colunas
  let i = 0;
  while (i <= key.length) {
    for (let line = 1; line <= arredonda; line++) {
      for (let column = 0; column < key.length; column++) {
        matriz[line][column] = arrayAlfa[i];
        i++;
        //Completa colunas vazias com X
        if (arrayAlfa[i] === undefined) {
          arrayAlfa[i] = "X";
        }
      }
    }
  }
  console.log(matriz)
  document.querySelector("#result").innerHTML = "A palavra " + ent + " criptografada é: " +  "</br>"+ matriz + "</br>" + "O código não está em forma de matriz, para ver a criptografia em formato de matriz abra o console do navegador com CTRL+SHIFT+I"
}