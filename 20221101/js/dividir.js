/*
4. Crie um arquivo dividir.js contendo uma função chamada dividir, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a divisão dos mesmos. 
    Importante:
    a. Considere o cenário em que se um dos dois parâmetros for zero, a função retornará "Não se pode dividir por zero"
*/

function dividir(a, b) {
    if (b === 0) {
        return "Não se pode dividir por zero";
    } else {
        return a / b;
    }
}

export default dividir;