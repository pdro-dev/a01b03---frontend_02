/* 
Faça um script para poder selecionar entre um
tema claro e um tema escuro.

Para fazer isso, vamos levar em conta algumas coisas:

    ● Você deve modificar o CSS comentado. Ele tem os estilos para o tema escuro, mas você terá que configurar os seletores que deseja usar.
    ● Defina quais métodos você deverá utilizar para solicitar um valor a um usuário.
    ● Não existe uma única maneira de resolver este exercício, então sinta-se encorajado a experimentar opções diferentes, mesmo depois de terminar uma primeira versão implementada.
*/

// criar botão para alternar entre temas
const btn = document.createElement('button');
btn.textContent = 'Alternar tema';
document.body.appendChild(btn);
// posicionar botão no canto superior direito
btn.style.position = 'absolute';
btn.style.top = '10px';
btn.style.right = '10px';
// centralizar botão com h1
btn.style.marginTop = '10px';
// get bootstrap css from cdn
const bootstrapLink = document.createElement('link');
bootstrapLink.rel = 'stylesheet';
bootstrapLink.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
document.head.appendChild(bootstrapLink);
// estilizar botão com bootstrap estilo claro e escuro
btn.classList.add('btn', 'btn-light');

// armazenar tema atual
let currentTheme = 'light';

// criar função para alternar entre temas
function toggleTheme() {
    // alternar entre temas
    if (currentTheme === 'light') {
        currentTheme = 'dark';
        btn.classList.replace('btn-light', 'btn-dark');

        // alterar cor de fundo do body
        let body = document.querySelector('body');
        body.classList.toggle('dark-mode');

        // alterar h1 para o tema escuro
        const h1 = document.querySelector('h1');
        // alterar usando classList
        h1.classList.toggle('h1-dark-mode');

        // alterar div class="item" para o tema escuro
        const divItem = document.querySelectorAll('.item');
        divItem.forEach((item) => {
            item.classList.toggle('item-dark-mode');
        });

        // alterar div class="item" child h2 para o tema escuro
        const divItemH2 = document.querySelectorAll('.item h2');
        divItemH2.forEach((item) => {
            item.classList.toggle('item-h2-dark-mode');
        });

        // alterar div class="item" child p para o tema escuro
        const divItemP = document.querySelectorAll('.item p');
        divItemP.forEach((item) => {
            item.classList.toggle('item-p-dark-mode');
        });

    } else {
        currentTheme = 'light';
        btn.classList.replace('btn-dark', 'btn-light');

        // // alterar cor de fundo do body
        // let body = document.querySelector('body');
        // body.classList.remove('dark-mode');

        // // alterar h1 para o tema claro
        // const h1 = document.querySelector('h1');
        // // alterar usando classList
        // h1.classList.remove('h1-dark-mode');

        // // alterar div class="item" para o tema claro
        // const divItem = document.querySelectorAll('.item');
        // divItem.forEach((item) => {
        //     item.classList.remove('item-dark-mode');
        // });

        // // alterar div class="item" child h2 para o tema claro
        // const divItemH2 = document.querySelectorAll('.item h2');
        // divItemH2.forEach((item) => {
        //     item.classList.remove('item-h2-dark-mode');
        // });

        // // alterar div class="item" child p para o tema claro
        // const divItemP = document.querySelectorAll('.item p');
        // divItemP.forEach((item) => {
        //     item.classList.remove('item-p-dark-mode');
        // });
    }

}

// adicionar evento de click no botão
btn.addEventListener('click', toggleTheme);

