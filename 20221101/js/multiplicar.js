/* 3. Criar um arquivo multiplicar.js contendo uma função chamada multiplicar, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a multiplicação dos mesmos.            
    Importante::
    a. Contemplar o cenário onde se um dos dois parâmetros for zero, a função retornará zero.
*/

function multiplicar(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    } else {
        return a * b;
    }
}

export default multiplicar;