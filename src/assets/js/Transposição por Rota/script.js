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
  
  function cripto(enter) {
    ent = enter.toUpperCase();
    const arrayAlfa = ent.split("");
    const raiz = Math.sqrt(arrayAlfa.length)
    matriz = new Array(2)
    matriz[0] = new Array(3)
    matriz[1] = new Array(3)
    console.log(matriz[0][0])
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

  cripto("mesa")