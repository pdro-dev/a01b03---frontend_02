/*

Prática Integradora

Objetivo

Construir um formulário e alterar suas propriedades com JavaScript.

Crie uma nova página HTML e adicione via JavaScript os seguintes elementos:
    1. Crie um formulário com campos de input e botões de submit e reset.
    2. Previna a página de ser recarregada quando houver o submit utilizando preventDefault().
    3. Mostre um alerta na página quando a tela terminar de ser carregada.
    4. Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo.
    5. Faça um trecho de código que utilize algum evento de teclado, esse evento irá escrever o conteúdo do input em uma tag <p> e logo abaixo o número de vezes que esse evento foi chamado. Exemplo: <p>futebol</p> <p>7</p> .

*/

// 1. Crie um formulário com campos de input e botões de submit e reset.

//////////////////////////////////////////// html
// criar div container para o formulário
const container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

// criar formulário
const form = document.createElement('form');
form.setAttribute('id', 'form');
container.appendChild(form);

// criar label e input para nome
const labelName = document.createElement('label');
labelName.setAttribute('for', 'name');
labelName.innerText = 'Nome: ';
form.appendChild(labelName);

const inputName = document.createElement('input');
inputName.setAttribute('type', 'text');
inputName.setAttribute('id', 'name');
inputName.setAttribute('name', 'name');
inputName.setAttribute('placeholder', 'Nome Completo');
inputName.setAttribute('required', '');
form.appendChild(inputName);

// criar label e input para email
const labelEmail = document.createElement('label');
labelEmail.setAttribute('for', 'email');
labelEmail.innerText = 'Email: ';
form.appendChild(labelEmail);

const inputEmail = document.createElement('input');
inputEmail.setAttribute('type', 'email');
inputEmail.setAttribute('id', 'email');
inputEmail.setAttribute('name', 'email');
inputEmail.setAttribute('placeholder', 'email@email.com');
inputEmail.setAttribute('required', 'required');
form.appendChild(inputEmail);

// criar label e input para senha
// const labelPassword = document.createElement('label');
// labelPassword.setAttribute('for', 'password');
// labelPassword.innerText = 'Senha: ';
// form.appendChild(labelPassword);

// const inputPassword = document.createElement('input');
// inputPassword.setAttribute('type', 'password');
// inputPassword.setAttribute('id', 'password');
// inputPassword.setAttribute('name', 'password');
// inputPassword.setAttribute('placeholder', '********');
// inputPassword.setAttribute('required', '');
// form.appendChild(inputPassword);

// criar botão de submit
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.innerText = 'Enviar';
form.appendChild(submitButton);

// criar botão de reset
const resetButton = document.createElement('button');
resetButton.setAttribute('type', 'reset');
resetButton.innerText = 'Reset';
form.appendChild(resetButton);


//////////////////////////////////////////// js
// 2. Previna a página de ser recarregada quando houver o submit utilizando preventDefault().
form.addEventListener('submit', (event) => {
    event.preventDefault();
});
// botao limpar recarrega a pagina
resetButton.addEventListener('click', () => {
    window.location.reload();
});


// 3. Mostre um alerta na página quando a tela terminar de ser carregada.
window.addEventListener('load', () => {
    alert('Página carregada!');
});

// 4. Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo.
const text = document.createElement('p');
text.innerText = 'Mouse over me!';
// text ocupar linhas 4 e 5 do grid na coluna 1
text.style.gridArea = '4 / 1 / 6 / 2';
text.style.color = 'darkgray';
text.style.cursor = 'pointer';
// type input
form.appendChild(text);

text.addEventListener('mouseover', () => {
    text.style.color = 'red';
});

text.addEventListener('mouseout', () => {
    text.style.color = 'darkgray';
});

// 5. Faça um trecho de código que utilize algum evento de teclado, esse evento irá escrever o conteúdo do input em uma tag <p> e logo abaixo o número de vezes que esse evento foi chamado. Exemplo: <p>futebol</p> <p>7</p> .
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'input');
input.setAttribute('name', 'input');
input.setAttribute('placeholder', 'Digite algo aqui');

// input ocupar linha 3 do grid centralizado na coluna 1
input.style.gridArea = '3 / 1';
input.style.textAlign = 'center';
form.appendChild(input);

const p = document.createElement('p');
p.setAttribute('id', 'p');
p.style.color = 'darkgray';
p.innerText = 'contador';
// p ocupar linha 3 do grid centralizado na coluna 2
p.style.gridArea = '3 / 2';
p.style.textAlign = 'center';
form.appendChild(p);

let count = 0;
input.addEventListener('keyup', () => {
    p.innerText = input.value;
    count += 1;
    p.innerText += ` (${count}` + ' caracteres)';
});




//////////////////////////////////////////// CSS
// organizar elementos usando CSS Grid
container.style.display = 'grid';
container.style.gridTemplateColumns = '1fr';
container.style.gridTemplateRows = '1fr';
container.style.gap = '10px';
container.style.justifyItems = 'center';
container.style.alignItems = 'center';

form.style.display = 'grid';
form.style.gridTemplateColumns = '1fr 1fr';
form.style.gridTemplateRows = '1fr 1fr 1fr';
form.style.gap = '10px';
form.style.justifyItems = 'center';
form.style.alignItems = 'center';
// posição do formulário no centro da página verticalmente e horizontalmente
form.style.position = 'absolute';
form.style.top = '50%';
form.style.left = '50%';
form.style.transform = 'translate(-50%, -50%)';
// borda do formulário
form.style.border = '1px solid black';
form.style.padding = '10px';
form.style.borderRadius = '10px';
// borda dos elementos input
form.querySelectorAll('input').forEach(input => {
    input.style.border = '1px solid black';
    input.style.borderRadius = '5px';
    input.style.padding = '5px';
});
// fonte do formulário
form.style.fontFamily = 'Arial, Helvetica, sans-serif';
form.style.fontSize = '1rem';
// background do formulário
form.style.backgroundColor = 'lightgray';

// background forEach label
form.querySelectorAll('label').forEach(label => {
    label.style.background = 'darkgray';
    label.style.padding = '5px';
    label.style.borderRadius = '5px';
    label.style.width = '100%';
    label.style.textAlign = 'center';
});

// background dos botões de submit e reset
submitButton.style.backgroundColor = 'green';
submitButton.style.color = 'white';
submitButton.style.border = 'none';
submitButton.style.borderRadius = '5px';
submitButton.style.padding = '5px';
resetButton.style.backgroundColor = 'red';
resetButton.style.color = 'white';
resetButton.style.border = 'none';
resetButton.style.borderRadius = '5px';
resetButton.style.padding = '5px';

// organizar elementos button um abaixo do outro usando CSS Grid
submitButton.style.gridRow = '4';
resetButton.style.gridRow = '5';
submitButton.style.gridColumn = '2';
resetButton.style.gridColumn = '2';
// botões tamanho 100%
submitButton.style.width = '100%';
resetButton.style.width = '100%';

// hover nos botões
submitButton.style.cursor = 'pointer';
resetButton.style.cursor = 'pointer';
submitButton.addEventListener('mouseover', () => {
    submitButton.style.backgroundColor = 'darkgreen';
});
submitButton.addEventListener('mouseout', () => {
    submitButton.style.backgroundColor = 'green';
});
resetButton.addEventListener('mouseover', () => {
    resetButton.style.backgroundColor = 'darkred';
});
resetButton.addEventListener('mouseout', () => {
    resetButton.style.backgroundColor = 'red';
});










