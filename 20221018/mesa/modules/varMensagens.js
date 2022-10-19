// arquivo declarado como módulo de variaveis de mensagens


// criar objeto com as mensagens
const mensagens = {
    // mensagens de vitória, derrota e empate
    mensagemVitoria: "Você venceu!",
    mensagemDerrota: "Você perdeu!",
    mensagemEmpate: "Empatou!",
    // mensagens de pontuação
    mensagemPontuacao: function (pontuacaoUsuario, pontuacaoComputador) {
        return `Pontuação: Você ${pontuacaoUsuario} x ${pontuacaoComputador} Computador`;
    },
    // mensagens de escolhas
    mensagemEscolhaComputador: function (escolhaComputador) {
        return `O computador escolheu ${escolhaComputador}`;
    },

    mensagemEscolhaUsuario: function (escolhaUsuario) {
        return `Você escolheu ${escolhaUsuario}`;
    },

    mensagemEscolhaInvalida: function (escolhaUsuario) {
        return `Você escolheu ${escolhaUsuario}, escolha inválida!`;
    },
};



// testar mensagens
// console.log(mensagens.mensagemVitoria);
// console.log(mensagens.mensagemDerrota);
// console.log(mensagens.mensagemEmpate);
// console.log(mensagens.mensagemPontuacao(1, 2));
// console.log(mensagens.mensagemEscolhaComputador("pedra"));
// console.log(mensagens.mensagemEscolhaUsuario("papel"));
// console.log(mensagens.mensagemEscolhaInvalida("fogo"));



// exportar as variáveis para serem utilizadas em outro arquivo
module.exports = mensagens;
