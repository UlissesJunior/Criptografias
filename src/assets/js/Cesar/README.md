<h2>Cifra de César</h2>

A Cifra de César é uma criptografia simples que tem o intuito de substituir a sequência das letras do alfabeto em uma rotação de três posições. 

**Sequência Comum**: ABCDEFGHIJKLMNOPQRSTUVWXYZ
**Sequência de César**:  DEFGHIJKLMNOPQRSTUVWXYZABC

O nome da criptografia se deriva de uma homenagem ao Imperador Júlio César, que escrevia suas mensagens em forma de cifra para proteger as mensagens com significado militar.

<h2>Explicação do Código</h2>

<h3>Criptografia</h3>

O código tem seu início declarando o array do alfabeto, com a sequência comum.
```
const alfa = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
```

Depois foi criada uma função,  que vai ser exportada para o arquivo menu. 
Ela recebe um valor $enter que é passado pelo usuário no input da página.
A variável $ent formata a entrada para caixa alta e a Const $arrayAlfa transforma toda a string em um array.
Logo abaixo, já é declarado um array vazio que vai ser a saída, $sai.
```
//enter = code
ent = enter.toUpperCase(); //ent = CODE
const arrayAlfa = ent.split(""); //arrayAlfa = ["C", "O", "D", "E"]
let  sai  =  [];
```

Feito isto, começa a real parte da criptografia.

Ela é composta de 2 loops FOR e 5 condicionais IF.
O primeiro FOR define o número de vezes necessários para criptografar a palavra toda, tendo como base o tamanho do $arrayAlfa.
Após isso, entramos em um loop que vai fazer a conversão da sequência comum para a sequência de César, ela tem como base o tamanho do array $alfa, no caso é 26 [0-25].
Entramos no primeiro IF, que vai comparar se o arrayAlfa na posição $tam é = a Alfa na posição $i, se a sentença for verdadeira e não for nem 23, 24 ou 25, o array de saída $sai, recebe o valor da posição i+3.

Se o valor de $i for 23, 24 ou 25, ela já recebe o seu valor predefinido, note que:
- 23 = X
- 24 = Y
- 25 = Z

E 23+3=26, usando a lógica da Cifra, o X é A, porém quando ele vai para a posição 26 do array $alfa, ele aparece como *undefined*, pois a posição não existe, assim como o 24=27 e o 25=28. Portanto, eles tem o seu valor predefinido, respectivamente as posições 0, 1 e 2 do array $alfa.

Depois disso, ele passa pela última condição, se o a posição do array for um espaço(" "), ele retorna como vazio, ou seja, não altera a string final.

```
for (let tam = 0; tam < arrayAlfa.length; tam++) {
for (let i = 0; i < alfa.length; i++) {
if (arrayAlfa[tam] == alfa[i]) { //
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
```

Feito isso a criptografia está feita, é feita uma formatação do array de saída que se torna uma string e o resultado volta para o usuário no HTML
```
let wordCrip = sai.join(""); //Transforma o array em string
document.querySelector("#result").innerHTML = "A palavra " + ent + " criptografada é: " + wordCrip //Retorna para o usuário no HTML
```

<h3>Descriptografia</h3>
A descriptografia segue a mesma lógica da criptografia, sua única diferença é que ao invés de somar 3, subtrai-se 3.
Com isso, os valores de $i = 0, 1 e 2, recebem um valor predefinido, assim como explicado anteriormente com os valores 23, 24 e 25.
- 0 = X
- 1 = Y
- 2 = Z

```
function descripto(enter) {

ent = enter.toUpperCase();
const arrayAlfa = ent.split("");
let sai = [];
for (let tam = 0; tam < arrayAlfa.length; tam++) {
	for (let i = 0; i < alfa.length; i++) {
		if (arrayAlfa[tam] == alfa[i]) {
			if (i == 0) {
				sai.push(alfa[23]);
		}	else if (i == 1) {
				sai.push(alfa[24]);
		} 	else if (i == 2) {
				sai.push(alfa[25]);
		} 	else {
				sai.push(alfa[i - 3]);
		}
			if(arrayAlfa[tam] == " ") {
				sai.push("") 
		}
}
}
}
let wordCrip = sai.join("");
console.log("A palavra " + ent + " descriptografada é: " + wordCrip);
}
```

<h2>Fontes</h2>

SAAD, Ricardo Wurthmann. Linguagem de
Programação C e S.O. Unesp - Universidade Estadual Paulista Campus de Guaratinguetá Colégio Técnico Industrial de Guaratinguetá: 1998. p. 98-100.

Cifra de César. **Wikipedia**, 2022. Disponível em: <https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar>. Acesso em: 23/12/2022.