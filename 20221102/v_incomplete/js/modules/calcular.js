// Objeto de funcoes calcular

let calcular = {
    somar: function (a, b) {
        return a + b;
    },
    subtrair: function (a, b) {
        return a - b;
    },
    multiplicar: function (a, b) {
        return a * b;
    },
    dividir: function (a, b) {
        return a / b;
    }
}

// testar funcoes calcular
// console.log(calcular.somar(1, 2));
// console.log(calcular.subtrair(1, 2));
// console.log(calcular.multiplicar(1, 2));
// console.log(calcular.dividir(1, 2));



// criar array de objetos com nome da funcao, id, funcao

const calculadora = {
    '+' : {
        nome : 'somar',
        func : function (a, b) {
            return a + b;
        }
    },
    '-' : {
        nome : 'subtrair',
        func : function (a, b) {
            return a - b;
        }
    },
    '*' : {
        nome : 'multiplicar',
        func : function (a, b) {
            return a * b;
        }
    },
    '/' : {
        nome : 'dividir',
        func : function (a, b) {
            return a / b;
        }
    }
}

// testar funcoes do objeto calculadora
// console.log(calculadora['+'].func(1, 2));
// console.log(calculadora['-'].func(1, 2));
// console.log(calculadora['*'].func(1, 2));
// console.log(calculadora['/'].func(1, 2));



export default calcular;