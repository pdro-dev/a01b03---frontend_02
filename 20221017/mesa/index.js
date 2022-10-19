/*
Desenvolver um script que permita somar um array de números consecutivos, de forma que se some o primeiro número com o segundo e o imprima através do console. 
Depois, temos que pegar este resultado e somar o terceiro número, e assim por diante, até termos terminado de percorrer todo o array.
*/

// Array de números
const numeros = [1, 2, 4, 8];
// Variável que irá armazenar o resultado
let resultado = 0;


function somarArray(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma;
}

// chamada da função com o array de números fixos
resultado = somarArray(numeros);

/* alert(resultado); */

// escrever o array de números no html com id="numeros"
document.getElementById("numeros").innerHTML = numeros;
// escrever o resultado no arquivo index.html com o id resultado
document.getElementById("resultado").innerHTML = resultado;



// receber o string de números do usuário e transformar em array
let numerosInseridos = document.getElementById("numeros2").value.split(",");

// chamada da função com o array de números inseridos pelo usuário
let resultado2 = somarArray(numerosInseridos);

// escrever o array de números inseridos pelo usuário no html com id="numerosInseridos"
document.getElementById("numerosInseridos").innerHTML = numerosInseridos;

// escrever o resultado no arquivo index.html com o id resultado2
document.getElementById("resultado2").innerHTML = resultado2;



