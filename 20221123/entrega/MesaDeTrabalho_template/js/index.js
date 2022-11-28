// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta
        renderizarDadosUsuario(data);
        console.log(data);
    });

function renderizarDadosUsuario(dados) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
    // Dica: utilize o console.log() para verificar o que está recebendo da API.
    /* ------------------------------------------------------------------------ */

    // Obtem o elemento HTML (class="card") que irá receber os dados da API
    const card = document.querySelector('.card');

    // Cria um elemento HTML (img) para receber a foto do usuário
    const img = document.createElement('img');
    // Set id do elemento
    img.id = 'foto';

    // Cria um elemento HTML (h1) para receber o nome completo do usuário
    const h1 = document.createElement('h1');
    // Set id do elemento
    h1.id = 'nome';

    // Cria um elemento HTML (p) para receber o e-mail do usuário
    const p = document.createElement('p');
    // Set id do elemento
    p.id = 'email';

    // Adiciona os elementos criados ao elemento HTML (class="card")
    card.appendChild(img);
    card.appendChild(h1);
    card.appendChild(p);

    // Obtem o elemento HTML (id="foto") que irá receber a foto do usuário
    const foto = document.querySelector('#foto');
    // Set src do elemento
    foto.src = dados.results[0].picture.large;

    // Obtem o elemento HTML (id="nome") que irá receber o nome completo do usuário
    const nome = document.querySelector('#nome');
    // Set textContent do elemento
    nome.textContent = `${dados.results[0].name.first} ${dados.results[0].name.last}`;

    // Obtem o elemento HTML (id="email") que irá receber o e-mail do usuário
    const email = document.querySelector('#email');
    // Set textContent do elemento
    email.textContent = dados.results[0].email;

    // alinhar os elementos criados ao centro
    card.style.textAlign = 'center';
    // centralizar imagem
    foto.style.margin = 'auto';
    

}


/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.

// obtem o elemento HTML (id="btn") que irá executar uma nova solicitação API
const btn = document.querySelector('#random');
// adiciona um evento de clique ao elemento HTML (id="random")
btn.addEventListener('click', () => {
    // clear card content
    document.querySelector('.card').innerHTML = '';
    // chama a função que realiza uma nova solicitação API
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            //manipulamos a resposta
            renderizarDadosUsuario(data);
            console.log(data);
        });
});
