const bubble = document.createElement("span"); // ici on créer la base d'une bulle

document.body.appendChild(bubble); // on affecte le parent de bubble

bubble.classList.add("bubble");

let size = Math.trunc(Math.random() * 200 + 100 ) + "px" ;

bubble.style.height = size
bubble.style.width = size
bubble.style.top = Math.trunc(Math.random() * 100 + 50 ) + "%" ;
bubble.style.left = Math.trunc(Math.random() * 100 ) + "%" ;

// ici on a generer les positions des bulles 

console.log(size);
