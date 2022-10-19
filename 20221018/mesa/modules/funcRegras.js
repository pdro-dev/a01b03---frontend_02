/*
arquivo com funções para o jogo de pedra, papel e tesoura
*/


// requisitar o módulo de mensagens
const mensagens = require("./varMensagens");



// criar variáveis para armazenar a pontuação do usuário e do computador
let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;


// criar regra de negócio para o jogo com if else
function regraDeNegocioIf(escolhaUsuario, escolhaComputador) {
    if (escolhaUsuario === escolhaComputador) {
        return mensagens.mensagemEmpate;
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra")
    ) {
        pontuacaoUsuario++;
        return mensagens.mensagemVitoria;
    } else {
        pontuacaoComputador++;
        return mensagens.mensagemDerrota;
    }
}



// criar regra de negócio para o jogo com switch
function regraDeNegocioSwitch(escolhaUsuario, escolhaComputador) {
    switch (escolhaUsuario) {
        case escolhaComputador:
            return mensagens.mensagemEmpate;
        case "pedra":
            if (escolhaComputador === "tesoura") {
                pontuacaoUsuario++;
                return mensagens.mensagemVitoria;
            } else {
                pontuacaoComputador++;
                return mensagens.mensagemDerrota;
            }
        case "tesoura":
            if (escolhaComputador === "papel") {
                pontuacaoUsuario++;
                return mensagens.mensagemVitoria;
            } else {
                pontuacaoComputador++;
                return mensagens.mensagemDerrota;
            }
        case "papel":
            if (escolhaComputador === "pedra") {
                pontuacaoUsuario++;
                return mensagens.mensagemVitoria;
            } else {
                pontuacaoComputador++;
                return mensagens.mensagemDerrota;
            }
    }
}


// função para validar a escolha do usuário
function validarEscolha(escolhaUsuario) {
    if (
        escolhaUsuario !== "pedra" &&
        escolhaUsuario !== "papel" &&
        escolhaUsuario !== "tesoura"
    ) {
        return false;
    } else {
        return true;
    }
}


// função para gerar a escolha do computador
function gerarEscolhaComputador() {
    const escolhas = ["pedra", "papel", "tesoura"];
    const indiceEscolhaComputador = Math.floor(Math.random() * 3);
    return escolhas[indiceEscolhaComputador];
}


    




// exportar as funções para serem utilizadas em outro arquivo
module.exports = {
    regraDeNegocioIf, 
    regraDeNegocioSwitch, 
    validarEscolha,
    gerarEscolhaComputador,
};