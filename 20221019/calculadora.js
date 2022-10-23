/* Calculadora

Prática Integradora

Objetivo: 
Vamos programar uma calculadora simples com o conhecimento que adquirimos até agora.

A calculadora terá 4 funções básicas:
    ● Somar
    ● Subtrair
    ● Multiplicar
    ● Dividir

*/

/* Micro desafios - Etapa I - Primeiro momento

O tech leader da equipe precisa programar uma calculadora básica que execute as quatro operações básicas. Para isso, será necessário:

1. Crie um arquivo somar.js contendo uma função chamada somar, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a soma dos mesmos.

2. Crie um arquivo subtrair.js contendo uma função chamada subtrair, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a subtração dos mesmos.

3. Criar um arquivo multiplicar.js contendo uma função chamada multiplicar, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a multiplicação dos mesmos.            
    Importante::
    a. Contemplar o cenário onde se um dos dois parâmetros for zero, a função retornará zero.

4. Crie um arquivo dividir.js contendo uma função chamada dividir, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a divisão dos mesmos. 
    Importante:
    a. Considere o cenário em que se um dos dois parâmetros for zero, a função retornará "Não se pode dividir por zero"

*/

import somar from './js/somar.js';
import subtrair from './js/subtrair.js';
import multiplicar from './js/multiplicar.js';
import dividir from './js/dividir.js';

/* Micro desafios - Etapa II - Segundo momento (extra)

Se chegamos tão longe, é porque o tech lead da equipe está bastante satisfeito e, portanto, atribuiu novas tarefas:

    1. Criar um arquivo calculadora.js no qual serão necessários os quatro arquivos feitos anteriormente.

    2. Executar a função que permite adicionar e a função que permite subtrair, passando como argumentos quaisquer dois números. Mostrar os resultados no console.

    3. Executar a função que permite a multiplicação, passando como argumentos quaisquer dois números. Mostrar o resultado no console.

    4. Executar a função que permite multiplicar, passando agora como um dos dois argumentos, o número zero. Mostrar o resultado no console.

    5. Executar a função que permite a divisão, passando como argumentos quaisquer dois números. Mostrar o resultado no console.
    
    6. Executar a função que permite dividir, passando agora como um dos dois argumentos, o número zero. Mostrar o resultado no console.

*/

///////// testes
// console.log(somar(1, 2)); // 3
// console.log(subtrair(1, 2)); // -1
// // testar multiplicar com zero
// console.log(multiplicar(1, 2)); // 2
// console.log(multiplicar(1, 0)); // 0
// console.log(multiplicar(0, 1)); // 0
// // testar dividir com zero
// console.log(dividir(1, 0)); // "Não se pode dividir por zero"
// console.log(dividir(0, 1)); // 0
// console.log(dividir(1, 2)); // 0.5
//////////


// receber 3 parâmetros numericos do formulário html
let num1 = document.getElementById('num1').value;
let num2 = document.getElementById('num2').value;
let num3 = document.getElementById('num3').value;

// função calcular que recebe 3 parâmetros
function calcular(num1, num2, num3) {
    
    // converter para número
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    // testar se os 3 parâmetros são números
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert('Digite apenas números');
        return;
    }

    // realizar as operações
    let soma = somar(num1, num2);
    let subtracao = subtrair(num1, num2);
    let multiplicacao = multiplicar(num1, num2);
    let divisao = dividir(num1, num2);

    // realizar opera;'oes com o terceiro parâmetro
    let multiplicacao1 = multiplicar(num1, num3);
    let multiplicacao2 = multiplicar(num3, num1);
    let divisao1 = dividir(num1, num3);
    let divisao2 = dividir(num3, num1);

    // retornar os resultados as array
    let arrayResultados = [];

    return arrayResultados = [num1, num2, num3, soma, subtracao, multiplicacao, divisao, multiplicacao1, multiplicacao2, divisao1, divisao2];
}

// funcao para preparar o resultado
function prepararResultado(num1, num2, num3) {
    // chamar a funcao calcular
    let arrayResultados = calcular(num1, num2, num3);

    // preparar o texto
    let texto = `

        Resultado da soma: ${arrayResultados[0]} + ${arrayResultados[1]} = ${arrayResultados[3]}
        <br>
        Resultado da subtração: ${arrayResultados[0]} - ${arrayResultados[1]} = ${arrayResultados[4]}
        <br>
        Resultado da multiplicação: ${arrayResultados[0]} * ${arrayResultados[1]} = ${arrayResultados[5]}
        <br>
        Resultado da divisão: ${arrayResultados[0]} / ${arrayResultados[1]} = ${arrayResultados[6]}
        <br>
        <br>
        Resultado da multiplicação com o terceiro parâmetro: ${arrayResultados[0]} * ${arrayResultados[2]} = ${arrayResultados[7]}
        <br>
        Resultado da multiplicação com o terceiro parâmetro: ${arrayResultados[2]} * ${arrayResultados[0]} = ${arrayResultados[8]}
        <br>
        Resultado da divisão com o terceiro parâmetro: ${arrayResultados[0]} / ${arrayResultados[2]} = ${arrayResultados[9]}
        <br>
        Resultado da divisão com o terceiro parâmetro: ${arrayResultados[2]} / ${arrayResultados[0]} = ${arrayResultados[10]}

        `;

    console.log(texto);
    return texto;
} 

// função para limpar o formulário e o resultado
function limpar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num3').value = '';
    document.getElementById('resultado').innerHTML = '';
    return;
}

// getElements dos botoes
const btnCalcular = document.getElementById('btnCalcular');
const btnLimpar = document.getElementById('btnLimpar');

// realizar o cálculo e mostrar o resultados enquanto o usuario nao limpar


// btnCalcular.addEventListener('click', function() {
//     let texto = prepararResultado(num1, num2, num3);
//     document.getElementById('resultado').innerHTML = texto;
//     console.log(texto);
// });


// criar <p> para mostrar o resultado e adicionar ao <div id="resultado">
btnCalcular.addEventListener('click', function() {
    let texto = prepararResultado(num1, num2, num3);
    let p = document.createElement('p');
    p.innerHTML = texto;
    document.getElementById('resultado').appendChild(p);
    console.log(texto);
    console.log(p);
});


btnLimpar.addEventListener('click', function() {
    limpar();
});













/* Refletindo sobre o desafio ...

Se chegamos até aqui, e tudo está bem, o tech leader da equipe deve estar extremamente satisfeito com nosso trabalho e desempenho. 
Bom trabalho!

No entanto, nos coloca para pensar…
    1. O que teria acontecido se, em vez de gerar um arquivo para cada operação matemática, tivéssemos programado tudo no mesmo arquivo?

    2. Por que o melhor caminho é gerar diferentes arquivos e depois requerê-los em um único arquivo?

    3. Esta metodologia de trabalho será uma constante a partir de agora?

Boas perguntas para discutir com o restante dos alunos e com nosso professor.

*/