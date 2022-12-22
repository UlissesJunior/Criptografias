function cripto(enter, key) {
  //Entrada
  ent = enter.toUpperCase();
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
      for (column = 0; column < key.length; column++) {
        matriz[line][column] = arrayAlfa[i];
        i++;
        //Completa colunas vazias com X
        if (arrayAlfa[i] === undefined) {
          arrayAlfa[i] = "X";
        }
      }
    }
  }
  console.log(matriz);
}
