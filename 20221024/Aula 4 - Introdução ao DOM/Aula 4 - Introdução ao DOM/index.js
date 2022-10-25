


let li = document.getElementById('item1');
console.log(li.innerText);

let divs = document.querySelectorAll(".conteudo");
console.log(divs);

let articles = document.querySelectorAll("article");
console.log(articles);

let articles_0_TEXT = document.querySelectorAll("article");
console.log(articles_0_TEXT[0].innerText);

let articles_0_ID = document.querySelectorAll("article");
console.log(articles_0_ID[0].id);

let articleCard1_p = document.querySelector("#card1 p");
console.log(articleCard1_p.innerText);

let e = document.querySelector("section article:nth-child(5) > h2")
console.log(e)