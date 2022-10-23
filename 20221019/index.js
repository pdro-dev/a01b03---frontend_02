import somar from './js/somar.js';
import subtrair from './js/subtrair.js';
import multiplicar from './js/multiplicar.js';
import dividir from './js/dividir.js';

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
    
    let arrayResultados = [num1, num2, num3, soma, subtracao, multiplicacao, divisao, multiplicacao1, multiplicacao2, divisao1, divisao2];

    console.log(arrayResultados);

    return arrayResultados;
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
        <br>
        -------------------  -------------------
        <br>
        -------------------  -------------------

        `;

    console.log(texto);
    return texto;
} 

// query form, get btn, onsubmit preventDefault
const form = document.querySelector('form');
// buttons addEventListener
const btnCalcular = document.getElementById('btnCalcular');
const btnLimpar = document.getElementById('btnLimpar');

form.onsubmit = function(event) {
    event.preventDefault();

    // get input values
    let num1 = document.getElementById('num1input').value;
    let num2 = document.getElementById('num2input').value;
    let num3 = document.getElementById('num3input').value;

    // criar <p> para mostrar o resultado e adicionar ao <div id="resultado">
    btnCalcular.addEventListener('click', function() {
        let texto = prepararResultado(num1, num2, num3);
        let p = document.createElement('p');
        p.innerHTML = texto;
        document.getElementById('resultado').appendChild(p);
        console.log(texto);
        console.log(p);
        texto = '';
        p = '';
        num1 = '';
        num2 = '';
        num3 = '';
        console.log(texto);
        console.log(p);
    });
    
    btnLimpar.addEventListener('click', function() {
        location.reload();
    });
}
