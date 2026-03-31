for (let i = 1; i <= 100; i++) {
  console.log(i);
}
console.log("-------------------------------")
for (let num2 = 100; num2 >= 1; num2--) {
  console.log(num2);
}
console.log("-------------------------------")
for (let num3 = 2; num3 <= 50; num3 += 2) {
  console.log(num3);
}
console.log("-------------------------------")
for (let num4 = 1; num4 <= 50; num4 += 2) {
  console.log(num4);
}
console.log("-------------------------------")
let soma1 = 0;
for (let num5 = 1; num5 <= 100; num5++) {
  soma1 += num5;
}
console.log("Soma:", soma1);
console.log("-------------------------------")
let num6 = 5;
let fatorial1 = 1;

for (let i1 = 1; i1 <= num6; i1++) {
  fatorial1 *= i1;
}

console.log(num6 + "! =", fatorial1);
console.log("-------------------------------")
let num7 = 7;

for (let i2 = 1; i2 <= 10; i2++) {
  console.log(num7 + " x " + i2 + " = " + (num7 * i2));
}
console.log("-------------------------------")
let contPar1 = 0;

for (let num8 = 1; num8 <= 100; num8++) {
  if (num8 % 2 === 0) contPar1++;
}

console.log("Quantidade de números pares entre 1 e 100:", contPar1);
console.log("-------------------------------")
for (let num9 = 0; num9 <= 100; num9 += 5) {
  console.log(num9);
}
console.log("-------------------------------")
let num10 = 5; // número de linhas

for (let i3 = 1; i3 <= num10; i3++) {
  let linha1 = "";
  for (let j1 = 1; j1 <= i3; j1++) {
    linha1 += "*";
  }
  console.log(linha1);
}

// 36 
let numeros = [12, 5, 8, 21, 7, 10, 15, 3, 30, 2];
console.log("36. Elementos do vetor:");
for (let i = 0; i < numeros.length; i++) {
    console.log("Posição " + i + ": " + numeros[i]);
}
console.log("-------------------------------");
console.log("-------------------------------");

// 37. Calcule a soma dos elementos do vetor.
let somaVetor = 0;
for (let i = 0; i < numeros.length; i++) {
somaVetor += numeros[i];
}
console.log("37. Soma total:", somaVetor);

console.log("-------------------------------");
//38. Calcule a média do vetor
let media = somaVetor / numeros.length;
console.log("38. Média do vetor:", media);

console.log("-------------------------------");
// 39. Encontre o maior valor do vetor.
let maior = numeros[0]; // Começa assumindo que o primeiro é o maior
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}
console.log("39. Maior valor:", maior);

console.log("-------------------------------");
// 40. Encontre o menor valor do vetor.
let menor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}
console.log("40. Menor valor:", menor);

console.log("-------------------------------");
// 41. Conte quantos números são pares e ímpares.
let pares = 0;
let impares = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log("41. Quantidade de Pares:", pares);
console.log("41. Quantidade de Ímpares:", impares);

console.log("-------------------------------");
// 42. Multiplique todos os elementos por 2.
console.log("42. Vetor multiplicado por 2:");
for (let i = 0; i < numeros.length; i++) {
    numeros[i] = numeros[i] * 2;
    console.log("Novo valor na posição " + i + ": " + numeros[i]);
}
// 43. Crie uma matriz 3x3 e exiba todos os valores.
let matriz = [
  [1, 5, 9],
  [12, 3, 7],
  [4, 11, 2]
];

console.log("Todos os valores da matriz:");

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`Linha ${i}, Coluna ${j}: ${matriz[i][j]}`);
  }
}

console.log("-------------------------------");
// 44. Exiba a diagonal principal de uma matriz.
console.log("44. Diagonal Principal:");
for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i][i]);
}
console.log("-------------------------------");

// 45. Exiba a diagonal secundária.
console.log("45. Diagonal Secundária:");
for (let i = 0; i < matriz.length; i++) {
  // A coluna é calculada pelo tamanho total - 1 - linha atual
  console.log(matriz[i][matriz.length - 1 - i]);
}

console.log("-------------------------------");

// 46. Some todos os elementos da matriz.
let somaMatriz = 0;
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    somaMatriz += matriz[i][j];
  }
}
console.log("46. Soma total da matriz:", somaMatriz);

console.log("-------------------------------");

// 47. Encontre o maior valor da matriz.
let maiorMatriz = matriz[0][0];
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] > maiorMatriz) {
      maiorMatriz = matriz[i][j];
    }
  }
}
console.log("47. Maior valor da matriz:", maiorMatriz);

console.log("-------------------------------");

// 48. Multiplique todos os valores por um número X.
let x = 3;
console.log(`48. Matriz multiplicada por ${x}:`);
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    matriz[i][j] *= x;
  }
}
console.log(matriz); // Exibe a estrutura modificada

console.log("-------------------------------");

// 49. Conte quantos valores são maiores que 10.
let maioresQue10 = 0;
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] > 10) {
      maioresQue10++;
    }
  }
}
console.log("49. Quantidade de valores maiores que 10:", maioresQue10);

console.log("-------------------------------");

// 50. Crie uma matriz e exiba no formato visual de tabela.
let matrizVisual = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("50. Formato visual:");
for (let i = 0; i < matrizVisual.length; i++) {
  let linhaTexto = "[ ";
  for (let j = 0; j < matrizVisual[i].length; j++) {
    linhaTexto += matrizVisual[i][j] + " ";
  }
  linhaTexto += "]";
  console.log(linhaTexto);
}
