/* 
Jogo de Pedra, Papel ou Tesoura

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

// require do módulo funcRegras.js
const funcRegras = require("./modules/funcRegras");
// require do módulo varMensagens.js
const mensagens = require("./modules/varMensagens");


// criar variáveis para armazenar as escolhas do usuário e do computador
let escolhaUsuario;
let escolhaComputador;
// criar variável para armazenar o histórico de jogadas
let historicoDeJogadas = [];
// criar variável para armazenar o vencedor da partida
let vencedorDaPartida = "";




// testar a regra de negócio com if else
// empate
console.log(funcRegras.regraDeNegocioIf("pedra", "pedra"));
console.log(funcRegras.regraDeNegocioIf("tesoura", "tesoura"));
console.log(funcRegras.regraDeNegocioIf("papel", "papel"));
// usuario ganha
console.log(funcRegras.regraDeNegocioIf("pedra", "tesoura"));
console.log(funcRegras.regraDeNegocioIf("tesoura", "papel"));
console.log(funcRegras.regraDeNegocioIf("papel", "pedra"));
// computador ganha
console.log(funcRegras.regraDeNegocioIf("pedra", "papel"));
console.log(funcRegras.regraDeNegocioIf("tesoura", "pedra"));
console.log(funcRegras.regraDeNegocioIf("papel", "tesoura"));


// testar a regra de negócio com switch
// empate
console.log(funcRegras.regraDeNegocioSwitch("pedra", "pedra"));
console.log(funcRegras.regraDeNegocioSwitch("tesoura", "tesoura"));
console.log(funcRegras.regraDeNegocioSwitch("papel", "papel"));
// usuario ganha
console.log(funcRegras.regraDeNegocioSwitch("pedra", "tesoura"));
console.log(funcRegras.regraDeNegocioSwitch("tesoura", "papel"));
console.log(funcRegras.regraDeNegocioSwitch("papel", "pedra"));
// computador ganha
console.log(funcRegras.regraDeNegocioSwitch("pedra", "papel"));
console.log(funcRegras.regraDeNegocioSwitch("tesoura", "pedra"));
console.log(funcRegras.regraDeNegocioSwitch("papel", "tesoura"));



