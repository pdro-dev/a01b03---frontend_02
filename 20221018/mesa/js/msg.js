// arquivo módulo de variaveis de mensagens

// criar objeto com as mensagens
const mensagens = {
    // mensagens de vitória, derrota e empate
    mensagemVitoria: "Você Venceu a PARTIDA!",
    mensagemDerrota: "Você Perdeu a PARTIDA!",
    mensagemEmpate: "Empatou a PARTIDA!",
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
        return `Você escolheu ${escolhaUsuario}, escolha inválida!` + "\n" + "Escolha entre pedra, papel ou tesoura";
    },

    // mensagem de resultado da partida
    mensagemResultado: function (
        resultado,
        numeroDeRodadas, 
        pontuacaoUsuario,
        pontuacaoComputador,
        escolhaComputador,
        escolhaUsuario) {
        
        // mensagem de resultado
        return resultado + "\n" + "\n" +
        // numero de rodadas
        "Rodada: " + numeroDeRodadas + "\n" + "\n" +
        // mensagem de pontuação
        mensagens.mensagemPontuacao(pontuacaoUsuario, pontuacaoComputador) + "\n" + "\n" +
        // mensagem de escolha do computador
        mensagens.mensagemEscolhaComputador(escolhaComputador)
        + "\n" + "\n" +
        // mensagem de escolha do usuário
        mensagens.mensagemEscolhaUsuario(escolhaUsuario)
    },

    // mensagem de fim de jogo
    mensagemFimDeJogo: function (pontuacaoUsuario, pontuacaoComputador) {
        if (pontuacaoUsuario > pontuacaoComputador) {
            return "Você Venceu o JOGO!" + "\n" + this.mensagemPontuacao(pontuacaoUsuario, pontuacaoComputador);
        } else if (pontuacaoUsuario < pontuacaoComputador) {
            return "Você Perdeu o JOGO!" + "\n" + this.mensagemPontuacao(pontuacaoUsuario, pontuacaoComputador);
        } else {
            return "O JOGO EMPATOU!" + "\n" + this.mensagemPontuacao(pontuacaoUsuario, pontuacaoComputador);
        }
    },

    // mensagem modo de jogo inválido
    mensagemModoDeJogoInvalido: function (modoDeJogo) {
        return `O modo de jogo ${modoDeJogo} é inválido!` + "\n" + "Escolha entre 1 ou 2";
    }

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
export default mensagens;