/*
Desenvolver um script que permita somar um array de números consecutivos, de forma que se some o primeiro número com o segundo e o imprima através do console. 
Depois, temos que pegar este resultado e somar o terceiro número, e assim por diante, até termos terminado de percorrer todo o array.
*/

// Array de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Variável que irá armazenar o resultado
let resultado = 0;
// Percorrendo o array
for (let i = 0; i < numeros.length; i++) {
  // Somando o resultado com o número atual
  resultado += numeros[i];
  // Imprimindo o resultado
  console.log(resultado);
}