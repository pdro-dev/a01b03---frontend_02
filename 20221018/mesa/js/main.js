/* Jogo de Pedra, Papel ou Tesoura

Prática Integradora

Programaremos um pequeno jogo de Pedra, Papel ou Tesoura. 

Neste jogo o usuário poderá escolher entre uma das três opções e o computador escolherá aleatoriamente uma das três opções, essas opções serão então comparadas e no final será mostrado quem ganhou e quem perdeu a disputa. 

Para fazer essa atividade é importante lembrar das regras básicas deste jogo:

    1. Pedra ganha de Tesoura.
    2. Tesoura ganha de Papel.
    3. Papel ganha de Pedra.



Desafio - Mesas de Trabalho

Após termos as regras e o sistema com uma partida do jogo, ficará ao encargo das mesas
de trabalho:
    1. Implementar uma regra de que só é declarado como ganhador, quem ganhou 2
    rodadas, para auxiliar use uma variável para armazenar o vencedor de cada
    rodada;
    2. Empate no jogo, não dá pontuação para nenhum dos jogadores.
    3. Tente utilizar funções e a estrutura de decisão switch em seu código;
    4. Comente o código e utilize qualquer outro recurso para deixá-lo melhor
    formatado.

*/

// importar módulo de mensagens
import mensagens from "./msg.js";

// variáveis para armazenar a pontuação do usuário e do computador e o número de partidas
let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;
let numeroDeRodadas = 1;

// criar regra de negócio para o jogo com if else
export function regraDeNegocioIf(escolhaUsuario, escolhaComputador) {
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
export function regraDeNegocioSwitch(escolhaUsuario, escolhaComputador) {
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
export function validarEscolha(escolhaUsuario) {
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
export function gerarEscolhaComputador() {
    const escolhas = ["pedra", "papel", "tesoura"];
    const indiceEscolhaComputador = Math.floor(Math.random() * 3);
    return escolhas[indiceEscolhaComputador];
}

// função para jogar o jogo solicitando ao usuário a definição de quantas rodadas ele deseja jogar
export function jogarModoNumeroRodadas(rodadas) {
    for (let i = 0; i < rodadas; i++) {
        let escolhaUsuario = prompt("Digite pedra, papel ou tesoura: ");
        // validar a escolha do usuário com while
        while (!validarEscolha(escolhaUsuario)) {
            alert(mensagens.mensagemEscolhaInvalida(escolhaUsuario));
            escolhaUsuario = prompt("Digite pedra, papel ou tesoura: ");
        }
        // gerar a escolha do computador para o jogo
        const escolhaComputador = gerarEscolhaComputador();
        // rodar regras do jogo
        const resultado = regraDeNegocioIf(escolhaUsuario, escolhaComputador);
        // mostrar mensagem de resultado do módulo de mensagens
        alert(
            mensagens.mensagemResultado(resultado, numeroDeRodadas, pontuacaoUsuario, pontuacaoComputador, escolhaComputador, escolhaUsuario)
        );
        console.log(resultado);
        // contar rodadas
        numeroDeRodadas++;          
    }
    // mostrar mensagem de fim de jogo do módulo de mensagens
    alert(mensagens.mensagemFimDeJogo(pontuacaoUsuario, pontuacaoComputador));
}

// função para jogar o jogo até que o algum dos jogadores atinja a pontuação definida
export function jogarModoPontuacao(pontuacao) {
    while (pontuacaoUsuario < pontuacao && pontuacaoComputador < pontuacao) {
        let escolhaUsuario = prompt("Digite pedra, papel ou tesoura: ");
        // validar a escolha do usuário com while
        while (!validarEscolha(escolhaUsuario)) {
            alert(mensagens.mensagemEscolhaInvalida(escolhaUsuario));
            escolhaUsuario = prompt("Digite pedra, papel ou tesoura: ");
        }
        // gerar a escolha do computador para o jogo
        const escolhaComputador = gerarEscolhaComputador();
        // rodar regras do jogo
        const resultado = regraDeNegocioIf(escolhaUsuario, escolhaComputador);
        // mostrar mensagem de resultado do módulo de mensagens
        alert(
            mensagens.mensagemResultado(resultado, numeroDeRodadas, pontuacaoUsuario, pontuacaoComputador, escolhaComputador, escolhaUsuario)
        );
        console.log(resultado);
        // contar rodadas
        numeroDeRodadas++; 
    }
    // mostrar mensagem de fim de jogo do módulo de mensagens
    alert(mensagens.mensagemFimDeJogo(pontuacaoUsuario, pontuacaoComputador));
}

// função para solicitar ao usuário o modo de jogo
export default function solicitarModoDeJogo() {
    const modoDeJogo = prompt("Escolha o modo de jogo: \n 1 - Número de rodadas \n 2 - Pontuação");
    if (modoDeJogo === "1") {
        const numeroDeRodadas = prompt("Digite o número de rodadas: ");
        jogarModoNumeroRodadas(numeroDeRodadas);
    } else if (modoDeJogo === "2") {
        const pontuacao = prompt("Digite a pontuação: ");
        jogarModoPontuacao(pontuacao);
    } else {
        alert(mensagens.mensagemModoDeJogoInvalido(modoDeJogo));
    }
}


// iniciar jogo com o click do botão
// obtendo o botão do HTML
const button = document.getElementById("start");

// evento de click no botão para disparar a função de solicitar o modo de jogo para iniciar
button.addEventListener("click", function () {
    solicitarModoDeJogo();
});




////////////// TESTES //////////////
// testar a regra de negócio com if else
// empate
// console.log(funcRegras.regraDeNegocioIf("pedra", "pedra"));
// console.log(funcRegras.regraDeNegocioIf("tesoura", "tesoura"));
// console.log(funcRegras.regraDeNegocioIf("papel", "papel"));
// // usuario ganha
// console.log(funcRegras.regraDeNegocioIf("pedra", "tesoura"));
// console.log(funcRegras.regraDeNegocioIf("tesoura", "papel"));
// console.log(funcRegras.regraDeNegocioIf("papel", "pedra"));
// // computador ganha
// console.log(funcRegras.regraDeNegocioIf("pedra", "papel"));
// console.log(funcRegras.regraDeNegocioIf("tesoura", "pedra"));
// console.log(funcRegras.regraDeNegocioIf("papel", "tesoura"));


// testar a regra de negócio com switch
// empate
// console.log(funcRegras.regraDeNegocioSwitch("pedra", "pedra"));
// console.log(funcRegras.regraDeNegocioSwitch("tesoura", "tesoura"));
// console.log(funcRegras.regraDeNegocioSwitch("papel", "papel"));
// // usuario ganha
// console.log(funcRegras.regraDeNegocioSwitch("pedra", "tesoura"));
// console.log(funcRegras.regraDeNegocioSwitch("tesoura", "papel"));
// console.log(funcRegras.regraDeNegocioSwitch("papel", "pedra"));
// // computador ganha
// console.log(funcRegras.regraDeNegocioSwitch("pedra", "papel"));
// console.log(funcRegras.regraDeNegocioSwitch("tesoura", "pedra"));
// console.log(funcRegras.regraDeNegocioSwitch("papel", "tesoura"));